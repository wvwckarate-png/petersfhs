// Figures for AP Physics 1 material added 2026-11-28 (batch C: Units 2, 4, 5).
import { FIGS } from "./phys1_figs_c.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, gap, after) => ({ hub: "physics1", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  at(2, "p1c-system-boundary", "p1-choosing-a-system"),
  at(2, "p1c-fbd-ap-style", "p1-fbd-conventions"),
  at(2, "p1c-bus-frames", "p1-inertial-frames"),
  at(2, "p1c-friction-area", "p1-friction-contact-area"),
  at(2, "p1c-tension-strings", "p1-tension-ideal-strings"),
  at(4, "p1c-com-triangle", "p1-com-symmetry-2d", `divide by the total mass, not by the number of objects</div></div>`),
  at(4, "p1c-pt-graph", "p1-momentum-time-graphs", `a steeper segment means a larger force.</p>`),
  at(4, "p1c-dart-bars", "p1-momentum-system-choice", `the bars before and the bars after must add to the same total.</p>`),
  at(4, "p1c-glancing-pucks", "p1-momentum-system-choice", `not to solve the simultaneous equations.</p>`),
  at(5, "p1c-omega-graph", "p1-rigid-systems-angular-graphs", `a θ-t graph that curves upward means ω is increasing.</p></div>`),
  at(5, "p1c-lever-arm", "p1-lever-arm-force-diagrams", `perpendicular distance from the axis to the force's line of action</div></div>`),
  at(5, "p1c-beam-force-diagram", "p1-lever-arm-force-diagrams"),
  at(5, "p1c-parallel-axis", "p1-parallel-axis"),
  at(5, "p1c-heavy-pulley", "p1-massive-pulley-combined"),
];
