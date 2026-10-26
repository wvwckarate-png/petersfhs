import { FIGS as F1 } from "./phys_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "physics2", unit, id, anchor, html: html(id) });
export const INS = [
  at(9, "conduction", "Notice this is a rate equation"),
  at(10, "coulomb-forces", "Like charges repel, opposite charges attract — you know this already"),
  at(10, "equipotentials", "Because V is a scalar, potentials from multiple charges just add algebraically"),
  at(10, "capacitor-plates", "Larger plate area or smaller separation both increase capacitance"),
  at(11, "drift-current", "Zooming in further, current is really carriers"),
  at(11, "series-parallel", "A circuit needs a complete, unbroken conducting path"),
  at(11, "loop-rule", "Practically, this means adding up voltage RISES"),
  at(12, "magnetic-fields", "Magnetic fields are produced by moving charge"),
  at(12, "magnetic-force", "Notice that sinθ tucked into the equation"),
  at(12, "parallel-wires", "Same right-hand rule, fingers along current direction"),
  at(12, "lenz-law", "Flux measures how much field"),
  at(13, "reflection-law", "both angles measured from the NORMAL"),
  at(13, "refraction", "Frequency never changes as light crosses a boundary"),
  at(14, "wave-anatomy", "A wave carries energy through a medium"),
  at(14, "diffraction", "Diffraction is the bending of waves around obstacles or through openings."),
  at(15, "spectra-types", "Because atomic energy levels are quantized into fixed, discrete values"),
  at(15, "decay-penetration", "Alpha (α)"),
  at(15, "half-life-curve", "Radioactive decay is random for any single nucleus"),
];
