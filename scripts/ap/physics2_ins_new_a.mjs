// Figures for the Physics 2 material added in Nov 2026, batch A (placed inside the "New" blocks).
import { FIGS } from "./phys2_figs_a.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "physics2", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  g(9, "gas-wall-impulse", "p2-gas-wall-momentum", "1 Pa = 1 N/m²</div></div>"),
  g(9, "gas-absolute-zero", "p2-ideal-gas-model", "so this is an extrapolation, not a measurement.</p></div>"),
  g(9, "three-heat-modes", "p2-three-modes", "That is how sunlight warms Earth.</li>\n</ul>"),
  g(10, "insulator-polarization", "p2-permittivity", "the larger its permittivity.</p>"),
  g(10, "vector-field-map", "p2-vector-maps", "you read it directly from arrow length.</p>"),
  g(10, "sphere-conductor-insulator", "p2-conductor-sphere-insulator", "Measure r from the center, not from the surface.</p>"),
  g(10, "plates-electron-parabola", "p2-plates-projectile", "gravity is negligible by comparison.</p>"),
  g(15, "bohr-standing-wave", "p2-bohr-orbits", "In any other orbit the wave would interfere with itself destructively.</p>"),
  g(15, "blackbody-uv-catastrophe", "p2-blackbody-laws", "the h in E = hf is Planck's constant.</p></div>"),
  g(15, "compton-momentum", "p2-compton-equation", "as the figure shows.</p></div>"),
  g(15, "binding-energy-curve", "p2-binding-curve", "would need an energy input.</p>"),
];
