// Lets a page header say "put the profile button here". Pages that have no slot keep the small floating pill.
let current = null;
const subs = new Set();

export const getSlot = () => current;
export const setSlot = (el) => { current = el; subs.forEach((f) => f(el)); };
export const onSlot = (fn) => { subs.add(fn); return () => subs.delete(fn); };

// Any button on the site can open the "Who's studying?" panel.
export const openProfilePanel = () => window.dispatchEvent(new Event("pfhs:open-profile"));
