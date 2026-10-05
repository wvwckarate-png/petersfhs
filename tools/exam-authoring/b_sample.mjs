import { S, M, G } from "./pool.mjs";
import * as B from "./biofigs.mjs";
const { fig, table } = B;

export const config = { hub: "biology", prefix: "bs", N: 0, file: "sample.js", title: "AP Biology — Sample Exam", seed: 3, sample: true };

export default [
  S(1,
    "A solution with a pH of 3 has how many times the hydrogen ion concentration of a solution with a pH of 6?",
    ["3 times", "30 times", "1,000 times", "10,000 times"], 2,
    "Each pH unit is a factor of 10 in [H⁺]. A difference of 3 pH units is a factor of 10³ = 1,000, and the lower pH has the higher concentration."),
  M(2,
    "Which cell structure regulates which substances can enter and leave the cell?",
    ["The plasma membrane", "The cell wall of a plant cell", "The nucleolus", "The Golgi apparatus"],
    "The plasma membrane, a phospholipid bilayer with embedded proteins, is selectively permeable and controls the movement of materials into and out of every cell. A plant cell wall is a rigid, fully permeable layer outside the membrane."),
  M(3,
    "In a eukaryotic cell, in which location does glycolysis take place?",
    ["The cytosol", "The mitochondrial matrix", "The inner mitochondrial membrane", "The thylakoid membrane"],
    "Glycolysis is carried out by enzymes dissolved in the cytosol and does not require oxygen or mitochondria. The citric acid cycle occurs in the mitochondrial matrix, and the electron transport chain is in the inner mitochondrial membrane."),
  G(5, {
    text: "In pea plants, tall (T) is dominant to short (t). The Punnett square shows a cross between two heterozygous tall plants.",
    figures: [table(["", "T", "t"], [["T", "TT", "Tt"], ["t", "Tt", "tt"]], "Punnett square for Tt × Tt")],
  }, [
    S(5, "What percentage of the offspring are expected to be tall?",
      ["25%", "50%", "75%", "100%"], 2,
      "The offspring genotypes are TT (1/4), Tt (2/4), and tt (1/4). Both TT and Tt are tall, so 3/4 = 75% of the offspring are expected to be tall."),
    M(5, "What is the expected genotypic ratio of the offspring?",
      ["1 TT : 2 Tt : 1 tt", "3 TT : 1 tt", "1 Tt : 1 tt", "9 : 3 : 3 : 1"],
      "The Punnett square shows one TT, two Tt, and one tt, a 1:2:1 genotypic ratio. The 3:1 ratio describes the phenotypes (tall to short)."),
  ]),
  S(4,
    "A cell in the testes of an organism has 2n = 12 chromosomes. How many chromosomes are in each sperm cell produced by meiosis?",
    ["3", "6", "12", "24"], 1,
    "Meiosis produces haploid gametes, each with half the chromosome number of the parent cell: 12/2 = 6."),
  S(6,
    "The coding sequence of a gene (not counting the stop codon) is 600 nucleotides long and has no introns. How many amino acids are in the protein that it codes for?",
    ["100", "200", "300", "600"], 1,
    "Three nucleotides make one codon, and each codon specifies one amino acid: 600/3 = 200 amino acids."),
  S(7,
    "In a population in Hardy–Weinberg equilibrium, 25% of the individuals show a recessive phenotype. What is the frequency of heterozygous individuals?",
    ["0.25", "0.50", "0.75", "1.0"], 1,
    "q² = 0.25, so q = 0.5 and p = 0.5. The frequency of heterozygotes is 2pq = 2(0.5)(0.5) = 0.50."),
  M(8,
    "In a food chain, a rabbit eats grass and a fox eats the rabbit. Which trophic level does the rabbit occupy?",
    ["Primary consumer", "Producer", "Secondary consumer", "Decomposer"],
    "Grass is the producer (first trophic level), and organisms that eat producers are primary consumers. The rabbit eats the grass, so it is a primary consumer, and the fox is a secondary consumer."),
  M(4,
    "During which phase of mitosis do the chromosomes line up along the center (equator) of the cell?",
    ["Metaphase", "Prophase", "Anaphase", "Telophase"],
    "In metaphase, the spindle fibers attach to the kinetochores and align the chromosomes at the metaphase plate. In anaphase, the sister chromatids separate and move to opposite poles."),
];
