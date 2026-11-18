// Figures for the AP Biology material added in units 6-8 (placed inside the "New" boxes, or after anchors in new sections).
import { FIGS } from "./bio_figs8.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const gap = (unit, id, g, after) => ({ hub: "biology", unit, id, gap: g, ...(after ? { after } : {}), html: html(id) });
const at = (unit, id, anchor) => ({ hub: "biology", unit, id, anchor, html: html(id) });
export const INS = [
  gap(6, "bio-purine-pyrimidine", "purines-pyrimidines"),
  gap(6, "retrovirus-cycle", "retroviruses"),
  gap(6, "hgt-three-ways", "hgt-variation"),
  gap(6, "trp-operon", "repressible-constitutive", "a form of negative feedback.</p></div>"),
  at(6, "gel-electrophoresis", "A DNA ladder (fragments of known sizes) is run alongside the samples so band sizes can be estimated."),
  at(6, "pcr-cycle", "The product is often checked on a gel."),
  gap(7, "c14-decay", "fossil-dating"),
  gap(7, "tempo-of-speciation", "add-punctuated-radiation"),
  gap(7, "tree-vs-cladogram", "add-tree-types", "another mammal does not.</p></div>"),
  gap(8, "endo-ecto-graphs", "energy-strategies", "but its activity depends on the temperature around it.</p>"),
  gap(8, "bio-phosphorus-cycle", "phosphorus-cycle"),
  gap(8, "ddt-biomagnification", "biomagnification-eutrophication", "banned in the United States in 1972.</p>"),
  gap(8, "eutrophication-o2", "biomagnification-eutrophication", "such as the one that forms each summer in the Gulf of Mexico.</p>"),
  at(8, "taxis-kinesis", "so they end up collecting in damp spots without ever aiming for them."),
];
