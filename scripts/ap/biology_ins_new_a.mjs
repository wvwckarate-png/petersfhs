// Figures for AP Biology material added in Nov 2026, units 2–5 (placed inside each block's "New" box).
import { FIGS } from "./bio_figs7.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "biology", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
export const INS = [
  g(2, "endomembrane-route", "endomembrane-system"),
  g(2, "water-potential-cells", "water-potential", `<div class="sub">Water moves from higher (less negative) Ψ to lower (more negative) Ψ</div>\n  </div>`),
  g(3, "chloroplast-structure", "chloroplast-grana"),
  g(3, "etc-prokaryote-uncoupling", "prokaryote-etc-uncoupling"),
  g(3, "fuel-funnel", "other-fuels"),
  g(4, "feedback-loops", "feedback-homeostasis"),
  g(4, "ligand-gated-channel", "ligand-gated"),
  g(5, "pedigree-ar", "pedigree-analysis"),
  g(5, "maternal-inheritance", "organelle-inheritance"),
  g(5, "chi-square-table", "chi-square", "df 3 = 7.81</div></div>"),
  g(5, "chromosome-structure", "chromosome-structure"),
];
