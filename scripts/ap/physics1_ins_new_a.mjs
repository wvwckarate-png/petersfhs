// Figures for the AP Physics 1 material added in Nov 2026, batch A (inside the "New" blocks, or after anchors in new section 1.8).
import { FIGS } from "./phys1_figs_a.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "physics1", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
const at = (unit, id, anchor) => ({ hub: "physics1", unit, id, anchor, html: html(id) });
export const INS = [
  g(1, "p1a-secant-to-tangent", "p1-instantaneous-as-limit", "very close to the instantaneous acceleration.</p>"),
  g(1, "p1a-motion-diagram-vt", "p1-motion-diagrams", "is what makes the matching v-t graph a straight line.</p>"),
  g(1, "p1a-terminal-velocity", "p1-air-resistance-and-measuring-g", "don't calculate it.</p>"),
  g(1, "p1a-components-to-vector", "p1-magnitude-direction-from-components", "which quadrant (above or below, left or right)</div></div>"),
  at(1, "p1a-train-relative-velocity", "The observed velocity is the object's velocity in the moving frame combined with the velocity of that frame:"),
  at(1, "p1a-drop-two-frames", "Position, velocity and displacement depend on the frame; acceleration does not."),
  g(3, "p1a-fx-area", "p1-work-point-of-application-and-fx-area", "counts as negative work.</p>"),
  g(3, "p1a-spring-bar-charts", "p1-energy-bar-charts", "makes the balance easy to check.</p>"),
];
