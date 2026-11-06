// Drop-in replacement for Claude's artifact `window.storage` API, backed by the browser's localStorage.
// Same shape in, same shape out, so code written against window.storage needs almost no changes.
//
// Signed-out visitors keep using the exact keys this site has always used ("petersfhs:<key>"), so nobody loses progress.
// Signed-in students get their own copy on the device ("petersfhs:u:<profile>:<key>") that is mirrored to Supabase
// in the background (see cloud.js), so progress follows them between devices.

import { prefix, markDirty, markDeleted } from "./cloud";

export const storage = {
  async get(key, shared = false) {
    const raw = localStorage.getItem(prefix() + key);
    if (raw === null) throw new Error(`Key not found: ${key}`);
    return { key, value: raw, shared };
  },

  async set(key, value, shared = false) {
    localStorage.setItem(prefix() + key, value);
    markDirty(key);
    return { key, value, shared };
  },

  async delete(key, shared = false) {
    localStorage.removeItem(prefix() + key);
    markDeleted(key);
    return { key, deleted: true, shared };
  },

  async list(keyPrefix = "", shared = false) {
    const full = prefix() + keyPrefix;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(full) && !/^(__|u:)/.test(k.slice(prefix().length))) keys.push(k.slice(prefix().length));
    }
    return { keys, prefix: keyPrefix, shared };
  },

  // Synchronous versions for code that needs a value during its first render (the Jiu-Jitsu log).
  getSync(key) {
    try { return localStorage.getItem(prefix() + key); } catch { return null; }
  },
  setSync(key, value) {
    try { localStorage.setItem(prefix() + key, value); markDirty(key); } catch { /* private mode: nothing persists */ }
  },
};
