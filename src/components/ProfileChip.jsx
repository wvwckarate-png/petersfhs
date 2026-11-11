import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { getSlot, onSlot } from "../lib/profileSlot";
import {
  getSession, onSession, onSync, getSyncState, listProfiles, createProfile, signIn, signOut, renameProfile,
  syncDown, flush, legacyEntries, legacyAvailable, legacySkipped, skipLegacy, importLegacy, downloadBackup,
} from "../lib/cloud";

// Profile button + panel. The button sits in the page header when the page provides a <ProfileSlot />;
// on pages without one it is a small pill at the bottom-left. Kids pick a name and enter a PIN; first-time setup needs the family code.
// Nothing here talks to Supabase accounts: it only calls the site's own PIN-checked functions (see lib/cloud.js).

const INK = "#2C312C", MUTED = "#6A726A", LINE = "rgba(60,60,60,.18)", GREEN = "#2E7D32", RED = "#B3361C";
const card = { background: "#fff", color: INK, borderRadius: 14, border: `1px solid ${LINE}`, boxShadow: "0 12px 40px rgba(0,0,0,.22)", fontFamily: "inherit" };
const btn = (primary) => ({ border: primary ? "none" : `1px solid ${LINE}`, background: primary ? "#2C312C" : "#fff", color: primary ? "#fff" : INK, borderRadius: 10, padding: "9px 14px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" });
const input = { width: "100%", boxSizing: "border-box", padding: "10px 12px", fontSize: 16, borderRadius: 10, border: `1px solid ${LINE}`, fontFamily: "inherit", background: "#fff", color: INK };

function statusText(sync, session) {
  if (!session) return "";
  if (session.expired) return "Sign in again to keep saving";
  if (sync.status === "offline") return `Offline: ${sync.pending} change${sync.pending === 1 ? "" : "s"} waiting to save`;
  if (sync.status === "error") return sync.error || "Couldn't save";
  if (sync.status === "saving" || sync.pending > 0) return "Saving…";
  return "All progress saved";
}

export default function ProfileChip() {
  const [session, setSession] = useState(getSession());
  const [sync, setSync] = useState(getSyncState());
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("pick"); // pick | pin | create | welcome | rename
  const [profiles, setProfiles] = useState(null);
  const [picked, setPicked] = useState(null);
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [pin2, setPin2] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [importMsg, setImportMsg] = useState("");

  const [slot, setSlotEl] = useState(getSlot());

  useEffect(() => onSession(setSession), []);
  useEffect(() => onSync(setSync), []);
  useEffect(() => { const off = onSlot(setSlotEl); setSlotEl(getSlot()); return off; }, []);

  const legacyCount = useMemo(() => (open ? legacyEntries().length : 0), [open, session]);
  const canImport = !!session && !session.expired && legacyCount > 0 && legacyAvailable();

  function reset() { setPin(""); setPin2(""); setCode(""); setName(""); setError(""); setPicked(null); }

  async function openPanel() {
    setOpen(true); setError(""); setImportMsg("");
    if (session && !session.expired) { setMode("welcome"); return; }
    if (session?.expired) { setPicked({ id: session.id, name: session.name }); setMode("pin"); return; }
    setMode("pick");
    try { setProfiles(await listProfiles()); } catch (e) { setError(e.message); setProfiles([]); }
  }
  function close() { setOpen(false); reset(); }
  useEffect(() => {
    const h = () => openPanel();
    window.addEventListener("pfhs:open-profile", h);
    return () => window.removeEventListener("pfhs:open-profile", h);
  }); // re-bound each render so it always sees the current session

  async function finishAuth() {
    // Pull whatever this profile already has. A brand-new profile on a device that already holds saved progress
    // takes it automatically (after saving a backup file); otherwise offer it, or just reload to show the profile.
    let serverCount = 0;
    try { ({ serverCount } = await syncDown()); } catch { /* the page will retry in the background */ }
    if (legacyAvailable()) {
      if (serverCount === 0) {
        try {
          downloadBackup();
          const r = await importLegacy();
          setImportMsg(`Brought over your progress: ${r.imported} item${r.imported === 1 ? "" : "s"} from this device are now saved to ${getSession()?.name}'s profile. A backup file was also downloaded.`);
          setMode("welcome"); setBusy(false); return;
        } catch (err) { setError(err.message); }
      }
      setMode("welcome"); setBusy(false); return;
    }
    window.location.reload();
  }
  async function doSignIn(e) {
    e.preventDefault(); setBusy(true); setError("");
    try { await signIn(picked.id, pin); setPin(""); await finishAuth(); }
    catch (err) { setError(err.message); setBusy(false); }
  }
  async function doCreate(e) {
    e.preventDefault(); setError("");
    if (!/^[0-9]{4,8}$/.test(pin)) { setError("PIN must be 4 to 8 digits."); return; }
    if (pin !== pin2) { setError("The two PINs don't match."); return; }
    setBusy(true);
    try { await createProfile(name.trim(), pin, code.trim()); setPin(""); setPin2(""); await finishAuth(); }
    catch (err) { setError(err.message); setBusy(false); }
  }
  async function doRename(e) {
    e.preventDefault(); setError("");
    const nn = name.trim();
    if (!nn) { setError("Type the new name."); return; }
    if (nn.toLowerCase() === (session.name || "").toLowerCase() && nn === session.name) { setError("That's already your name."); return; }
    setBusy(true);
    try { await renameProfile(nn, pin); setPin(""); setName(""); setMode("welcome"); setImportMsg(`Your name is now ${nn}.`); }
    catch (err) { setError(err.message); }
    setBusy(false);
  }
  async function doImport() {
    setBusy(true); setError("");
    try { const r = await importLegacy(); setImportMsg(`Saved ${r.imported} item${r.imported === 1 ? "" : "s"} from this device to ${session.name}'s profile.`); }
    catch (err) { setError(err.message); }
    setBusy(false);
  }
  function skipImport() { skipLegacy(); window.location.reload(); }
  async function doImportLater() {
    if (!window.confirm(`Save this device's saved progress to ${session.name}'s profile? Only do this if the progress on this device is yours.`)) return;
    await doImport();
  }
  async function doSignOut() {
    setBusy(true);
    await signOut();
    window.location.reload();
  }

  const label = session ? (session.expired ? `${session.name} · sign in` : session.name) : "Sign in";
  const dot = session && !session.expired ? (sync.status === "error" || sync.status === "offline" ? "#C98A00" : GREEN) : "#9AA39A";

  return (
    <>
      {slot ? createPortal(
        session ? (
          <button onClick={openPanel} className="pf-btn pf-btn-in" aria-label={`Signed in as ${session.name}. Open profile`} title={statusText(sync, session)}>
            <span className="pf-avatar">{(session.name || "?").trim().charAt(0).toUpperCase()}<span className="pf-dot" style={{ background: dot }} /></span>
            <span className="pf-name">{session.expired ? `${session.name} · sign in` : session.name}</span>
          </button>
        ) : (
          <button onClick={openPanel} className="pf-btn pf-btn-out" aria-label="Sign in">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8.2" r="3.6" stroke="currentColor" strokeWidth="1.9"/><path d="M4.8 20c.9-3.6 3.7-5.4 7.2-5.4s6.3 1.8 7.2 5.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg>
            <span className="pf-label">Sign in</span>
          </button>
        ), slot) : (
        <button onClick={openPanel} className="pf-float" aria-label={session ? `Signed in as ${session.name}` : "Sign in"}
          style={{ position: "fixed", left: 10, bottom: 8, zIndex: 40, display: "flex", alignItems: "center", gap: 7, padding: "5px 11px", borderRadius: 999, background: "rgba(255,255,255,.92)", border: `1px solid ${LINE}`, color: "#3F443F", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.04em", cursor: "pointer" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />{label}
        </button>
      )}

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Student profile" onClick={close}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(20,24,20,.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ ...card, width: "100%", maxWidth: 380, padding: 22, maxHeight: "90vh", overflow: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 18 }}>{mode === "welcome" ? `Hi, ${session?.name}` : mode === "rename" ? "Change your name" : mode === "create" ? "New student profile" : "Who's studying?"}</h2>
              <button onClick={close} aria-label="Close" style={{ ...btn(false), padding: "4px 10px" }}>✕</button>
            </div>

            {mode === "pick" && (
              <div>
                <p style={{ margin: "0 0 12px", fontSize: 13.5, color: MUTED }}>Pick your name to save your progress and pick up where you left off on any device.</p>
                {profiles === null && <p style={{ color: MUTED }}>Loading…</p>}
                <div style={{ display: "grid", gap: 8 }}>
                  {(profiles || []).map((p) => (
                    <button key={p.id} style={{ ...btn(false), textAlign: "left", fontSize: 16, padding: "12px 14px" }} onClick={() => { setPicked(p); setPin(""); setError(""); setMode("pin"); }}>{p.name}</button>
                  ))}
                </div>
                {profiles && profiles.length === 0 && !error && <p style={{ color: MUTED, fontSize: 13.5 }}>No profiles yet.</p>}
                <button style={{ ...btn(true), marginTop: 14, width: "100%" }} onClick={() => { reset(); setMode("create"); }}>+ New profile</button>
              </div>
            )}

            {mode === "pin" && picked && (
              <form onSubmit={doSignIn}>
                <p style={{ margin: "0 0 10px", fontSize: 14 }}>Enter the PIN for <b>{picked.name}</b>.</p>
                <input autoFocus type="password" inputMode="numeric" autoComplete="current-password" maxLength={8} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="PIN" style={input} aria-label="PIN" />
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  <button type="button" style={btn(false)} onClick={async () => { reset(); setMode("pick"); try { setProfiles(await listProfiles()); } catch { /* keep list */ } }}>Back</button>
                  <button type="submit" disabled={busy || pin.length < 4} style={{ ...btn(true), flex: 1, opacity: busy || pin.length < 4 ? 0.6 : 1 }}>{busy ? "Signing in…" : "Sign in"}</button>
                </div>
              </form>
            )}

            {mode === "create" && (
              <form onSubmit={doCreate} style={{ display: "grid", gap: 10 }}>
                <p style={{ margin: 0, fontSize: 13.5, color: MUTED }}>Choose a first name and a PIN (4 to 8 digits). You'll need the family code from a parent the first time.</p>
                <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="First name" maxLength={40} style={input} aria-label="First name" />
                <input type="password" inputMode="numeric" autoComplete="new-password" maxLength={8} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="PIN (4 to 8 digits)" style={input} aria-label="PIN" />
                <input type="password" inputMode="numeric" autoComplete="new-password" maxLength={8} value={pin2} onChange={(e) => setPin2(e.target.value.replace(/\D/g, ""))} placeholder="Type the PIN again" style={input} aria-label="Confirm PIN" />
                <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Family code" autoCapitalize="off" autoCorrect="off" style={input} aria-label="Family code" />
                <div style={{ display: "flex", gap: 8 }}>
                  <button type="button" style={btn(false)} onClick={async () => { reset(); setMode("pick"); try { setProfiles(await listProfiles()); } catch { /* keep list */ } }}>Back</button>
                  <button type="submit" disabled={busy || !name.trim() || !pin || !code.trim()} style={{ ...btn(true), flex: 1, opacity: busy || !name.trim() || !pin || !code.trim() ? 0.6 : 1 }}>{busy ? "Creating…" : "Create profile"}</button>
                </div>
              </form>
            )}

            {mode === "rename" && session && (
              <form onSubmit={doRename} style={{ display: "grid", gap: 10 }}>
                <p style={{ margin: 0, fontSize: 13.5, color: MUTED }}>Pick a new name for your profile. All your saved progress stays with you. Enter your PIN to confirm.</p>
                <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder={`New name (now: ${session.name})`} maxLength={40} style={input} aria-label="New name" />
                <input type="password" inputMode="numeric" autoComplete="current-password" maxLength={8} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="Your PIN" style={input} aria-label="PIN" />
                <div style={{ display: "flex", gap: 8 }}>
                  <button type="button" style={btn(false)} onClick={() => { setError(""); setPin(""); setName(""); setMode("welcome"); }}>Cancel</button>
                  <button type="submit" disabled={busy || !name.trim() || pin.length < 4} style={{ ...btn(true), flex: 1, opacity: busy || !name.trim() || pin.length < 4 ? 0.6 : 1 }}>{busy ? "Saving…" : "Change name"}</button>
                </div>
              </form>
            )}

            {mode === "welcome" && session && (
              <div style={{ display: "grid", gap: 12 }}>
                <div style={{ fontSize: 13.5, color: MUTED }}>{statusText(sync, session)}</div>

                {canImport && !importMsg && !legacySkipped() && (
                  <div style={{ background: "#FBF6E6", border: "1px solid #EADBA0", borderRadius: 12, padding: 14 }}>
                    <b style={{ fontSize: 14 }}>Save this device's progress to your profile?</b>
                    <p style={{ margin: "6px 0 10px", fontSize: 13.5, color: INK }}>
                      This device already has saved study progress ({legacyCount} item{legacyCount === 1 ? "" : "s"}: practice answers, exam scores, sections finished). Only say yes if that progress is yours. Nothing is deleted from this device.
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button style={btn(true)} disabled={busy} onClick={doImport}>{busy ? "Saving…" : "Yes, save it to my profile"}</button>
                      <button style={btn(false)} disabled={busy} onClick={skipImport}>No, start fresh</button>
                    </div>
                  </div>
                )}
                {canImport && !importMsg && legacySkipped() && (
                  <button style={btn(false)} disabled={busy} onClick={doImportLater}>Import this device's saved progress…</button>
                )}
                {importMsg && (
                  <div style={{ background: "#EAF5E8", border: "1px solid #BFE0BA", borderRadius: 12, padding: 12, fontSize: 13.5 }}>{importMsg}
                    <div style={{ marginTop: 10 }}><button style={btn(true)} onClick={() => window.location.reload()}>Continue</button></div>
                  </div>
                )}

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button style={btn(false)} onClick={() => flush().then(() => syncDown()).catch(() => {})}>Save now</button>
                  <button style={btn(false)} onClick={() => { setError(""); setImportMsg(""); setPin(""); setName(""); setMode("rename"); }}>Change name</button>
                  <button style={btn(false)} onClick={downloadBackup} title="Download everything saved on this device as a file">Download backup</button>
                  <button style={btn(false)} disabled={busy} onClick={doSignOut}>Sign out</button>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: MUTED }}>Progress saves automatically while you study, and works offline: it uploads when you're back online.</p>
              </div>
            )}

            {error && <p role="alert" style={{ margin: "12px 0 0", color: RED, fontSize: 13.5 }}>{error}</p>}
          </div>
        </div>
      )}
    </>
  );
}
