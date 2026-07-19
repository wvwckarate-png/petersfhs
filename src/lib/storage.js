// Drop-in replacement for Claude's artifact `window.storage` API,
// backed by the browser's built-in localStorage instead.
// Same shape in, same shape out — so code written against window.storage
// needs almost no changes to use this instead.

const PREFIX = "petersfhs:";

export const storage = {
  async get(key, shared = false) {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) throw new Error(`Key not found: ${key}`);
    return { key, value: raw, shared };
  },

  async set(key, value, shared = false) {
    localStorage.setItem(PREFIX + key, value);
    return { key, value, shared };
  },

  async delete(key, shared = false) {
    localStorage.removeItem(PREFIX + key);
    return { key, deleted: true, shared };
  },

  async list(prefix = "", shared = false) {
    const fullPrefix = PREFIX + prefix;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(fullPrefix)) keys.push(k.slice(PREFIX.length));
    }
    return { keys, prefix, shared };
  },
};