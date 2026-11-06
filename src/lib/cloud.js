// Cloud sync for student profiles (Supabase). Family PIN profiles: kids pick a name and enter a PIN on this site;
// they never see Supabase. The tables are locked (row-level security with no policies), so the only way in is the
// pfhs_* functions, which check a sign-in token. The key below is the public "publishable" key, safe to ship in a web app.
//
// Local data is the source of truth for speed and offline use; this module mirrors it to the server key by key.

const SUPABASE_URL = "https://ukhohosfxtldbqciigxz.supabase.co";
const PUBLISHABLE_KEY = "sb_publishable_Q2r_8tBfB4TMhoHxaivzjw_Tppbbfxx";

export const BASE = "petersfhs:"; // where every device already keeps its progress (guest data, never modified by sign-in)
const AUTH_KEY = "pfhs-auth"; // { id, name, token, expired? }, deliberately outside BASE so it is never uploaded

// ---- session ----
const sessionListeners = new Set();
const syncListeners = new Set();
const lsGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode: nothing persists */ } };
const lsDel = (k) => { try { localStorage.removeItem(k); } catch { /* ignore */ } };

export function getSession() {
  try { return JSON.parse(lsGet(AUTH_KEY)) || null; } catch { return null; }
}
function setSession(s) {
  if (s) lsSet(AUTH_KEY, JSON.stringify(s)); else lsDel(AUTH_KEY);
  sessionListeners.forEach((f) => f(s));
}
export const onSession = (fn) => { sessionListeners.add(fn); return () => sessionListeners.delete(fn); };
export const onSync = (fn) => { syncListeners.add(fn); return () => syncListeners.delete(fn); };

// Where this profile's data lives on this device. Guests keep using BASE exactly as before.
export const prefix = () => { const s = getSession(); return s ? `${BASE}u:${s.id}:` : BASE; };

// ---- sync state shown in the Sign in panel ----
const state = { status: "idle", error: "", lastSync: 0 }; // idle | saving | saved | offline | error
function setState(patch) { Object.assign(state, patch); syncListeners.forEach((f) => f({ ...state, pending: dirtyKeys().length })); }
export const getSyncState = () => ({ ...state, pending: dirtyKeys().length });

// ---- server calls ----
async function rpc(fn, args = {}, opts = {}) {
  let res;
  try {
    res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { apikey: PUBLISHABLE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(args),
      keepalive: !!opts.keepalive,
    });
  } catch {
    const e = new Error("You appear to be offline."); e.offline = true; throw e;
  }
  let data = null;
  try { data = await res.json(); } catch { /* empty body (void functions) */ }
  if (!res.ok) {
    const e = new Error((data && data.message) || `Server error (${res.status})`);
    e.notSignedIn = !!(data && /not signed in/i.test(data.message || ""));
    throw e;
  }
  return data;
}
const authed = (fn, args, opts) => {
  const s = getSession();
  if (!s || s.expired) { const e = new Error("Not signed in"); e.notSignedIn = true; throw e; }
  return rpc(fn, { p_token: s.token, ...args }, opts);
};

export const listProfiles = () => rpc("pfhs_list_profiles");

export async function createProfile(name, pin, familyCode) {
  const r = await rpc("pfhs_create_profile", { p_name: name, p_pin: pin, p_family_code: familyCode });
  setSession({ id: r.id, name: r.name, token: r.token });
  return r;
}
export async function signIn(profileId, pin) {
  const r = await rpc("pfhs_login", { p_profile_id: profileId, p_pin: pin });
  setSession({ id: r.id, name: r.name, token: r.token });
  return r;
}
export async function signOut() {
  const s = getSession();
  if (s && !s.expired) { try { await flush(); } catch { /* keep going */ } try { await rpc("pfhs_logout", { p_token: s.token }); } catch { /* token expires on its own */ } }
  setSession(null);
}

// ---- dirty-key queue (keys changed on this device that the server has not seen yet) ----
const dirtyId = () => `${prefix()}__dirty`;
const metaId = () => `${prefix()}__meta`;
function dirtyKeys() {
  try { return JSON.parse(lsGet(dirtyId())) || []; } catch { return []; }
}
function writeDirty(arr) { if (arr.length) lsSet(dirtyId(), JSON.stringify(arr)); else lsDel(dirtyId()); }
function readMeta() { try { return JSON.parse(lsGet(metaId())) || {}; } catch { return {}; } }
function touchMeta(key) { const m = readMeta(); m[key] = Date.now(); lsSet(metaId(), JSON.stringify(m)); }

let timer = null;
export function markDirty(key) {
  const s = getSession();
  if (!s) return;
  touchMeta(key);
  const d = dirtyKeys();
  if (!d.includes(key)) { d.push(key); writeDirty(d); }
  if (!s.expired) { setState({ status: "saving" }); clearTimeout(timer); timer = setTimeout(() => flush().catch(() => {}), 1200); }
}
// A key deleted on this device: remove it from the server right away (and from the queue).
export function markDeleted(key) {
  const s = getSession();
  if (!s || s.expired) return;
  writeDirty(dirtyKeys().filter((k) => k !== key));
  authed("pfhs_delete_key", { p_key: key }).catch(() => { /* a stale server copy is replaced by the next sync */ });
}

let flushing = null;
export function flush(opts = {}) {
  if (flushing) return flushing;
  flushing = (async () => {
    const s = getSession();
    if (!s || s.expired) return;
    const keys = dirtyKeys();
    if (!keys.length) { setState({ status: "saved", error: "" }); return; }
    const items = keys.map((k) => ({ k, v: lsGet(prefix() + k) })).filter((i) => i.v !== null).map((i) => ({ k: i.k, v: i.v }));
    try {
      for (let i = 0; i < items.length; i += 40) await authed("pfhs_set_many", { p_items: items.slice(i, i + 40) }, opts);
      writeDirty(dirtyKeys().filter((k) => !keys.includes(k)));
      setState({ status: "saved", error: "", lastSync: Date.now() });
    } catch (e) {
      if (e.notSignedIn) { setSession({ ...s, expired: true }); setState({ status: "error", error: "Please sign in again to keep saving." }); }
      else setState({ status: e.offline ? "offline" : "error", error: e.message });
      throw e;
    }
  })().finally(() => { flushing = null; });
  return flushing;
}

// Pull the server copy down. Newer wins per key; anything changed on this device and not yet saved is kept.
export async function syncDown() {
  const s = getSession();
  if (!s || s.expired) return { changed: 0, serverCount: 0 };
  const server = await authed("pfhs_get_all");
  const meta = readMeta(), dirty = new Set(dirtyKeys());
  let changed = 0;
  for (const [key, rec] of Object.entries(server || {})) {
    const local = lsGet(prefix() + key);
    const serverT = Date.parse(rec.t) || 0;
    if (dirty.has(key)) continue;
    if (local === null || (serverT > (meta[key] || 0) && local !== rec.v)) {
      lsSet(prefix() + key, rec.v); meta[key] = serverT; changed++;
    }
  }
  lsSet(metaId(), JSON.stringify(meta));
  // keys that exist here but not on the server (e.g. this profile's earlier offline work) go up
  const missing = [];
  for (let i = 0; i < localStorage.length; i++) {
    const full = localStorage.key(i);
    if (!full || !full.startsWith(prefix())) continue;
    const key = full.slice(prefix().length);
    if (key.startsWith("__") || (server && key in server)) continue;
    missing.push(key);
  }
  if (missing.length) { const d = new Set(dirtyKeys()); missing.forEach((k) => d.add(k)); writeDirty([...d]); await flush(); }
  setState({ status: "saved", error: "", lastSync: Date.now() });
  return { changed, serverCount: Object.keys(server || {}).length };
}

// ---- this device's pre-existing progress (saved before profiles existed) ----
export function legacyEntries() {
  const out = [];
  for (let i = 0; i < localStorage.length; i++) {
    const full = localStorage.key(i);
    if (!full || !full.startsWith(BASE)) continue;
    const key = full.slice(BASE.length);
    if (key.startsWith("u:") || key.startsWith("__")) continue;
    out.push({ key, value: lsGet(full) });
  }
  return out;
}
// The first profile to take this device's pre-existing progress owns it; nobody else is offered it (a sibling signing
// in later on the same device must not receive someone else's answers). Stored outside BASE so it is never uploaded.
const CLAIM_KEY = "pfhs-legacy-claimed";
export const legacyClaimedBy = () => lsGet(CLAIM_KEY);
export const legacyImported = () => { const s = getSession(); return !!s && lsGet(CLAIM_KEY) === s.id; };
export const legacyAvailable = () => !lsGet(CLAIM_KEY) && legacyEntries().length > 0;
const claimLegacy = () => { const s = getSession(); if (s) lsSet(CLAIM_KEY, s.id); };
const SKIP_KEY = "pfhs-legacy-skipped"; // "No thanks" at the offer: stays available as a small button, never nags
export const legacySkipped = () => lsGet(SKIP_KEY) === "1";
export const skipLegacy = () => lsSet(SKIP_KEY, "1");

// Copy this device's saved progress into the signed-in profile. Never overwrites what the profile already has,
// never modifies or deletes the original device data (it stays as a backup).
export async function importLegacy() {
  const s = getSession();
  if (!s || s.expired) throw new Error("Please sign in first.");
  if (lsGet(CLAIM_KEY) && lsGet(CLAIM_KEY) !== s.id) throw new Error("This device's saved progress already belongs to another profile.");
  const server = await authed("pfhs_get_all");
  const items = legacyEntries().filter((e) => !(e.key in (server || {})) && lsGet(prefix() + e.key) === null);
  const d = new Set(dirtyKeys());
  for (const e of items) { lsSet(prefix() + e.key, e.value); touchMeta(e.key); d.add(e.key); }
  writeDirty([...d]);
  await flush();
  claimLegacy();
  return { imported: items.length, skipped: legacyEntries().length - items.length };
}

// A plain JSON file of everything saved on this device, for safekeeping.
export function downloadBackup() {
  const all = {};
  for (let i = 0; i < localStorage.length; i++) {
    const full = localStorage.key(i);
    if (full && full.startsWith(BASE)) all[full] = lsGet(full);
  }
  const blob = new Blob([JSON.stringify({ app: "petersfhs", exportedAt: new Date().toISOString(), data: all }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `petersfhs-progress-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// ---- answer log (one row per answered question, for analytics) ----
const QUEUE_KEY = "pfhs-attempts-queue";
let attemptTimer = null;
export function logAttempt(a) {
  const s = getSession();
  if (!s) return; // guests are not tracked
  let q = [];
  try { q = JSON.parse(lsGet(QUEUE_KEY)) || []; } catch { /* start fresh */ }
  q.push({ ...a, who: s.id });
  lsSet(QUEUE_KEY, JSON.stringify(q.slice(-500)));
  clearTimeout(attemptTimer); attemptTimer = setTimeout(() => flushAttempts().catch(() => {}), 2500);
}
export async function flushAttempts(opts = {}) {
  const s = getSession();
  if (!s || s.expired) return;
  let q = [];
  try { q = JSON.parse(lsGet(QUEUE_KEY)) || []; } catch { return; }
  const mine = q.filter((x) => x.who === s.id);
  if (!mine.length) return;
  try {
    await authed("pfhs_log_attempts", { p_items: mine.map(({ who, ...rest }) => rest) }, opts); // eslint-disable-line no-unused-vars
    const left = q.filter((x) => x.who !== s.id);
    if (left.length) lsSet(QUEUE_KEY, JSON.stringify(left)); else lsDel(QUEUE_KEY);
  } catch (e) {
    if (e.notSignedIn) setSession({ ...s, expired: true });
  }
}

// ---- background behaviour ----
if (typeof window !== "undefined") {
  const pushNow = () => { flush({ keepalive: true }).catch(() => {}); flushAttempts({ keepalive: true }).catch(() => {}); };
  window.addEventListener("pagehide", pushNow);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") pushNow(); });
  window.addEventListener("online", () => { flush().catch(() => {}); flushAttempts().catch(() => {}); });
  // On every page load for a signed-in student: pick up anything saved from another device, then reload once if it changed.
  const s = getSession();
  if (s && !s.expired) {
    syncDown().then(({ changed }) => {
      if (changed && !sessionStorage.getItem("pfhs-reloaded")) { sessionStorage.setItem("pfhs-reloaded", "1"); window.location.reload(); }
    }).catch((e) => { if (e.notSignedIn) setSession({ ...s, expired: true }); else setState({ status: e.offline ? "offline" : "error", error: e.message }); });
    flushAttempts().catch(() => {});
  }
}
