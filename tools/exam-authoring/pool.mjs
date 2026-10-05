// Authoring helpers shared by all pool files.
export const S = (u, s, c, a, e, o = {}) => ({ kind: "q", u, s, c, a, e, fixed: true, figures: o.figures });
export const M = (u, s, c, e, o = {}) => ({ kind: "q", u, s, c, a: 0, e, fixed: false, figures: o.figures });
export const G = (u, stim, qs) => ({ kind: "set", u, stim, qs });
export { fig, table } from "./figlib.mjs";
