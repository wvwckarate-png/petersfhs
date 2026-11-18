// Figures and worked examples for the AP Chemistry material added in Nov 2026 (placed inside the "New" gap blocks).
import { FIGS as F2 } from "./chem_figs2.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = F2[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "chemistry", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  g(2, "sigma-pi-overlap", "sigma-pi-rotation"),
  g(3, "pentane-isomers-bp", "dispersion-shape-ion-dipole", "n-pentane boils at 36 °C and its compact isomer neopentane boils at 9.5 °C.</p>"),
  g(3, "diamond-graphite", "network-solids-diamond-graphite"),
  g(3, "gas-law-graphs-2", "gas-law-graphs"),
  g(3, "solution-particles", "particulate-solution-pictures"),
  g(3, "chromatogram-rf", "chromatography-reading"),
  g(3, "we-rf-chromatogram", "chromatography-reading"),
  g(5, "maxwell-catalyst", "maxwell-read"),
  g(5, "catalyst-intermediate-profile", "catalyst-types"),
  g(6, "dissolving-enthalpy-steps", "dissolve-sign"),
  g(6, "we-molar-heat-capacity", "molar-heat-capacity"),
  g(7, "we-ph-solubility", "ph-solubility"),
  g(8, "weak-acid-titration-regions", "mix-ph"),
  g(8, "ha-a-fraction", "predominant-form"),
  g(8, "we-predominant-form", "predominant-form"),
  g(8, "indicator-choice", "indicators"),
  g(8, "diprotic-titration", "polyprotic-curves"),
];
