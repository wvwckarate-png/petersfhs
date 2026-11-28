// Figures for the AP Physics 1 material added in Unit 2 (new sections 2.10 Circular Motion and 2.11 Universal
// Gravitation and Orbits, placed after anchor sentences) and two additions (apparent weight in s26, general
// gravitational PE in s33, placed inside their "New" boxes).
import { FIGS } from "./phys1_figs_b.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const gap = (unit, id, g, after) => ({ hub: "physics1", unit, id, gap: g, ...(after ? { after } : {}), html: html(id) });
const at = (unit, id, anchor) => ({ hub: "physics1", unit, id, anchor, html: html(id) });
export const INS = [
  // s210 Circular Motion
  at(2, "p1b-ucm-vectors", "The velocity is always tangent to the circle, so for uniform circular motion the velocity and the acceleration are perpendicular at every instant."),
  at(2, "p1b-loop-fbds", "so FN is less than mg and the rider feels light."),
  at(2, "p1b-banked-conical", "where the radius of the circle is r = L sinθ, not the string length L."),
  at(2, "p1b-tangential-accel", "A driver steering left while pressing the brake has an acceleration that points left and backward, not straight left."),
  // s211 Universal Gravitation and Orbits
  at(2, "p1b-grav-pair", "Because of the inverse square, doubling the distance makes the force one-fourth as large, and tripling it makes the force one-ninth."),
  at(2, "p1b-g-vs-r", "g is 9.8/4 ≈ 2.5 N/kg."),
  at(2, "p1b-orbit", "(AP Physics 1 does not ask about Kepler's first or second laws.)"),
  // additions to existing sections
  gap(2, "p1b-elevator-scale", "p1-apparent-weight", "(Section 2.11 connects this to the equivalence principle.)</p></div>"),
  gap(3, "p1b-ug-vs-r", "p1-general-grav-pe", "U<sub>total</sub> = sum over every pair in the system</div></div>"),
];
