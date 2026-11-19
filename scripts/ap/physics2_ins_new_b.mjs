// Figures for the AP Physics 2 material added in units 11-12 (placed inside the "New" boxes).
// "-setup" figures sit with a worked example's question; "-solved" versions go inside its hidden solution.
import { FIGS } from "./phys2_figs_b.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const gap = (unit, id, g, after) => ({ hub: "physics2", unit, id, gap: g, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  gap(11, "circuit-symbol-key", "p2-circuit-symbols", "Unless a problem says otherwise, schematics show conventional current.</p>"),
  gap(11, "shared-loops", "p2-circuit-symbols", "the shared elements are what tie those equations together.</p>"),
  gap(11, "short-circuit-setup", "p2-short-circuit", "as the figure shows. Describe what happens to each bulb, and find how A's power changes.</p>"),
  gap(11, "short-circuit-solved", "p2-short-circuit", "a wire across one element of a parallel group shorts the whole group."),
  gap(11, "ohmic-vs-filament", "p2-ohmic", "a straight line through the origin means ohmic.</p>"),
  gap(11, "ohmic-data-graph", "p2-ohmic", "Reading 0.040 as the resistance would be off by a factor of 625."),
  gap(11, "meter-placement", "p2-meters", "assume all meters (and batteries and wires) are ideal.</p>"),
  gap(11, "rc-four-graphs", "p2-rc-discharge", "as the graphs in the figure show.</p>"),
  gap(12, "compass-bar-magnet", "p2-poles-dipoles", "pointing away from the N pole and toward the S pole.</p>"),
  gap(12, "earth-dipole", "p2-poles-dipoles", "re-enter it near the geographic North Pole.</p></div>"),
  gap(12, "ferro-domains", "p2-magnetic-materials", "ferromagnets can be <strong>permanently magnetized</strong>.</li>"),
  gap(12, "moving-charge-setup", "p2-moving-charge-field", "as the figure shows. What changes for an electron moving the same way?</p>"),
  gap(12, "moving-charge-solved", "p2-moving-charge-field", "S is still zero."),
  gap(12, "hall-setup", "p2-hall-effect", "and what is the Hall voltage? (See the figure.)</p>"),
  gap(12, "hall-solved", "p2-hall-effect", "The voltage is tiny in a metal because the drift speed is so small."),
  gap(12, "two-wires-setup", "p2-two-wire-superposition", "The figure shows both cases.</p>"),
  gap(12, "two-wires-solved", "p2-two-wire-superposition", "you would still add them as vectors."),
  gap(12, "area-vector-flux", "p2-area-vector", "(θ = 180°, Φ = −BA), as the figure shows.</p>"),
];
