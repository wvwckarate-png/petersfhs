// Shared drawing shortcuts for the AP figure modules (authoring time only).
import { C, svg, text, line, circle, rect, path, defs, arrow, figure } from "./lib.mjs";
export { C, svg, text, line, circle, rect, path, defs, arrow, figure };
export const BLUE = "#2E6BC6", RED = "#D2451E", GREEN = "#2E7D32", GOLD = "#C99700", PURPLE = "#7B3FB5", TEAL = "#0F7C86";
export const NOTE = { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 };
export const axes = (x0, y0, w, h, xl, yl) => line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + (xl ? text(x0 + w / 2, y0 + 30, xl, { size: 12, weight: "bold" }) : "") + (yl ? text(x0 - 30, y0 - h / 2, yl, { size: 12, weight: "bold", rotate: -90 }) : "");
export const title = (t, s = 16) => text(380, 22, t, { size: s, weight: "bold" });
export const pill = (x, y, w, h, fill, lab, o = {}) => rect(x, y, w, h, { fill, stroke: "#777", rx: 10 }) + text(x + w / 2, y + h / 2 + (lab.includes("\n") ? -2 : 5), lab, { size: o.size || 13, weight: "bold", fill: o.fill });
export const note = (x, y, w, h, head, body, o = {}) => rect(x, y, w, h, NOTE) + text(x + w / 2, y + 24, head, { size: 13, weight: "bold" }) + text(x + w / 2, y + 50, body, { size: o.size || 12 });
export const fig = (FIGS, id, w, h, inner, label, caption) => { FIGS[id] = { svg: svg(w, h, inner, label), caption }; };
// graph curve from a function over [0,1] mapped into a box
export const curve = (x0, y0, w, h, f, o = {}) => { let d = ""; const n = o.n || 80; for (let i = 0; i <= n; i++) { const t = i / n; d += (i ? " L " : "M ") + (x0 + t * w).toFixed(1) + " " + (y0 - f(t) * h).toFixed(1); } return path(d, { stroke: o.stroke || RED, w: o.w || 3.5, dash: o.dash }); };
export const dotX = (x, y, r = 10, into = true) => circle(x, y, r, { fill: "#fff", stroke: C.ink, w: 2 }) + (into ? line(x - r * .7, y - r * .7, x + r * .7, y + r * .7, { w: 2 }) + line(x - r * .7, y + r * .7, x + r * .7, y - r * .7, { w: 2 }) : circle(x, y, 2.5, { fill: C.ink }));
