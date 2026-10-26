import { FIGS as F1 } from "./bio_figs1.mjs";
import { FIGS as F2 } from "./bio_figs2.mjs";
import { FIGS as F3 } from "./bio_figs3.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1, ...F2, ...F3 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "biology", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "water-polarity", "A hydrogen bond is the weak, temporary attraction"),
  at(1, "cohesion-tension", "This whole mechanism is called the cohesion-tension theory of water transport in plants."),
  at(1, "hydration-shell", "dissolved particle is a hydration shell."),
  at(1, "ice-lattice", "So ice ends up less dense than liquid water, and it floats."),
  at(1, "ph-scale", "Pure water sits at pH 7 because it produces exactly equal"),
  at(1, "buffer-curve", "and a buffer works best when the solution's pH is close to its own pKa."),
  at(1, "functional-groups", "Many molecules; DNA methylation"),
  at(1, "dehydration-hydrolysis", "Building = losing water. Breaking = using water."),
  at(1, "polysaccharides", "letting the body mobilize stored glucose quickly when energy demand spikes."),
  at(1, "triglyceride", "and steroids (a four-fused-ring structure"),
  at(1, "phospholipid", "That spontaneous bilayer is literally the cell membrane you'll study in depth next unit."),
  at(1, "fatty-acids", "(liquid at room temperature — think olive oil)."),
  at(1, "peptide-bond", "A chain of amino acids is a"),
  at(1, "dna-antiparallel", "the entire mechanistic basis for how DNA can be accurately copied"),
];
