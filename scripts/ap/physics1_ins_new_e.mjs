// Figures for the AP Physics 1 material added in Nov 2026, batch E (Units 7 and 8; placed inside the "New" blocks).
import { FIGS } from "./phys1_figs_e.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "physics1", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  g(7, "shm-cos-vs-sin", "p1-shm-displacement-equation", "or &nbsp;&nbsp; x = A sin(2πft)</div><div class=\"sub\">cos: released from rest at x = +A when t = 0 · sin: passing through x = 0 moving in the +x direction when t = 0 · A = amplitude, f = frequency, 2πf = ω</div></div>"),
  g(7, "pendulum-lever-arm", "p1-pendulum-restoring-torque", "the minus sign means it opposes the angular displacement</div></div>"),
  g(7, "spring-energy-bars-a", "p1-shm-energy-bar-charts", "so at half the release height the bars are half and half.</p></div>"),
  g(8, "solid-liquid-gas-particles", "p1-what-is-a-fluid", "only the strength and arrangement of their interactions differ.</p></div>"),
  g(8, "pressure-perp-component", "p1-pressure-perpendicular-component", "If a force F makes an angle θ with the surface, F<sub>⊥</sub> = F sinθ.</p>"),
  g(8, "pressure-vs-depth-gauge", "p1-gauge-absolute-pressure", "which includes the atmosphere pressing on the surface.</p>"),
  g(8, "buoyancy-from-pressure", "p1-buoyancy-pressure-difference", "the buoyant force already is the net of all the fluid's pushes.</p>"),
  g(8, "pressure-difference-flow", "p1-pressure-drives-flow", "F<sub>net</sub> = (P<sub>1</sub> − P<sub>2</sub>)A</div><div class=\"sub\">net force on a fluid parcel between two points in a horizontal pipe · fluid accelerates toward the lower pressure</div></div>"),
];
