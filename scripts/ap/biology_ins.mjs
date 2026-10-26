import { FIGS as F1 } from "./bio_figs1.mjs";
import { FIGS as F2 } from "./bio_figs2.mjs";
import { FIGS as F3 } from "./bio_figs3.mjs";
import { FIGS as F4 } from "./bio_figs4.mjs";
import { FIGS as F5 } from "./bio_figs5.mjs";
import { FIGS as F6 } from "./bio_figs6.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1, ...F2, ...F3, ...F4, ...F5, ...F6 };
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
  at(2, "sa-v-cubes", "its volume increases eightfold (2³)."),
  at(3, "atp-coupling", "This is how cells power everything from active transport to muscle contraction to biosynthesis."),
  at(3, "chemiosmosis", "the overwhelming majority of that total comes from the ETC/chemiosmosis stage."),
  at(4, "signaling-types", "triggering a response without ever entering the cell."),
  at(4, "cancer-genes", "which is far less statistically likely."),
  at(5, "meiosis-stages", "A central biological role of meiosis is generating genetic variation"),
  at(5, "independent-assortment", "His Law of Independent Assortment states that alleles for different genes"),
  at(5, "punnett", "For simple crosses, a Punnett square works fine."),
  at(5, "incomplete-codominance", "Incomplete dominance and codominance are constantly mixed up."),
  at(5, "x-linked", "Sex-linked inheritance deserves special attention"),
  at(5, "linkage-map", "Linked genes CAN still be separated"),
  at(6, "rna-processing", "In eukaryotes, the initial mRNA transcript (pre-mRNA) undergoes significant processing"),
  at(6, "codon-table", "Practice reading mRNA sequences in triplets"),
  at(7, "hw-curve", "Almost every Hardy-Weinberg problem gives you the frequency"),
  at(7, "drift", "Genetic drift is random, chance-driven change in allele frequencies"),
  at(7, "speciation", "Allopatric speciation occurs when a population is physically separated by a geographic barrier (a river, mountain range, or similar), preventing gene flow between the two resulting groups"),
  at(8, "resistance-resilience", "Biodiversity — the variety of species"),
];
