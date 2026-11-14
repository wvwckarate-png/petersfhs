// Per-student layout choices: the order of things and which ones are hidden.
// Saved through the same storage wrapper as progress, so each signed-in student has their own layout and it follows
// them between devices. These are new keys ("home-layout-v1", "jj-layout-v1"); no progress key is involved.
import { useCallback, useMemo, useState } from "react";
import { storage } from "./storage";

function read(key) {
  try {
    const v = JSON.parse(storage.getSync(key));
    if (v && typeof v === "object") return {
      order: Array.isArray(v.order) ? v.order : [], hidden: Array.isArray(v.hidden) ? v.hidden : [],
      items: v.items && typeof v.items === "object" ? v.items : {},
    };
  } catch { /* nothing saved yet */ }
  return { order: [], hidden: [], items: {} };
}

/**
 * useLayout("home-layout-v1", ["ap", "sat", "college", "jj"])
 *   order      – the default ids in the student's order (ids added to the site later go at the end)
 *   isHidden   – (id) => boolean; works for any id, not only the ordered ones (e.g. "ap:physics1")
 *   move       – (id, -1 | 1) moves an ordered id up or down
 *   toggle     – (id) hides or shows
 *   itemOrder  – (group, defaultIds) => the ids inside one group (e.g. the AP cards) in the student's order
 *   setItemOrder – (group, ids) saves a new order for that group
 *   reset      – back to the default layout
 *   customized – true when anything differs from the default
 */
export function useLayout(key, defaults) {
  const [prefs, setPrefs] = useState(() => read(key));

  const save = useCallback((next) => { setPrefs(next); storage.setSync(key, JSON.stringify(next)); }, [key]);

  const order = useMemo(() => {
    const known = prefs.order.filter((id) => defaults.includes(id));
    return [...known, ...defaults.filter((id) => !known.includes(id))];
  }, [prefs.order, defaults]);

  const hiddenSet = useMemo(() => new Set(prefs.hidden), [prefs.hidden]);
  const isHidden = useCallback((id) => hiddenSet.has(id), [hiddenSet]);

  const move = (id, dir) => {
    const i = order.indexOf(id), j = i + dir;
    if (i < 0 || j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    save({ ...prefs, order: next });
  };
  const toggle = (id) => save({ ...prefs, hidden: hiddenSet.has(id) ? prefs.hidden.filter((x) => x !== id) : [...prefs.hidden, id] });
  const itemOrder = useCallback((group, ids) => {
    const saved = (prefs.items[group] || []).filter((id) => ids.includes(id));
    return [...saved, ...ids.filter((id) => !saved.includes(id))]; // anything added to the site later goes at the end
  }, [prefs.items]);
  const setItemOrder = (group, ids) => save({ ...prefs, items: { ...prefs.items, [group]: ids } });
  const reset = () => save({ order: [], hidden: [], items: {} });
  const customized = prefs.hidden.length > 0 || order.some((id, i) => id !== defaults[i]) || Object.keys(prefs.items).length > 0;

  return { order, isHidden, hiddenCount: prefs.hidden.length, move, toggle, itemOrder, setItemOrder, reset, customized };
}
