// AP Biology — Sample Exam — 10 questions. 
const EXAM = {
 "questions": [
  {
   "id": "bs0-1",
   "unit": 3,
   "stem": "In a eukaryotic cell, in which location does glycolysis take place?",
   "choices": [
    "The mitochondrial matrix",
    "The inner mitochondrial membrane",
    "The thylakoid membrane",
    "The cytosol"
   ],
   "correct": 3,
   "explanation": "Correct: (D) The cytosol. Glycolysis, the first stage of cellular respiration, splits one glucose into two pyruvate molecules with a net gain of 2 ATP and 2 NADH. Its enzymes are dissolved in the cytosol, so it takes place outside any organelle and does not require oxygen. That is why glycolysis also occurs in prokaryotes and in anaerobic fermentation. Pyruvate then enters the mitochondrion for the later stages of respiration.\n\n(A) is wrong because the mitochondrial matrix is where pyruvate oxidation and the citric (Krebs) acid cycle occur, after glycolysis is finished.\n(B) is wrong because the inner mitochondrial membrane holds the electron transport chain and ATP synthase, not the glycolysis enzymes.\n(C) is wrong because the thylakoid membrane in chloroplasts carries out the light reactions of photosynthesis, not glycolysis."
  },
  {
   "id": "bs0-2",
   "unit": 6,
   "stem": "The coding sequence of a gene (not counting the stop codon) is 600 nucleotides long and has no introns. How many amino acids are in the protein that it codes for?",
   "choices": [
    "600",
    "300",
    "200",
    "100"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 200. The genetic code is read in codons of three nucleotides, and each codon specifies one amino acid. With no introns, all 600 nucleotides are coding, and the stop codon is not counted, so the number of amino acids is 600 ÷ 3 = 200. (The start codon AUG codes for methionine, so it is included among the 200 codons.)\n\n(A) is wrong because 600 assumes each nucleotide codes for one amino acid, but a codon is three nucleotides long.\n(B) is wrong because 300 divides by 2, as if codons were two nucleotides long; two-letter codons would give only 16 combinations.\n(D) is wrong because 100 divides by 6, which double-counts by treating each codon as six nucleotides, as if counting both DNA strands."
  },
  {
   "id": "bs0-3",
   "unit": 4,
   "stem": "A cell in the testes of an organism has 2n = 12 chromosomes. How many chromosomes are in each sperm cell produced by meiosis?",
   "choices": [
    "3",
    "6",
    "12",
    "24"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 6. Meiosis is a reduction division: one round of DNA replication followed by two divisions produces four haploid (n) cells. Each sperm therefore carries one chromosome from each homologous pair, half the diploid number. With 2n = 12, n = 12 ÷ 2 = 6 chromosomes per sperm. Fertilization by an egg with 6 chromosomes then restores the diploid number of 12.\n\n(A) is wrong because 3 halves the chromosome number twice, but meiosis II separates sister chromatids and does not halve the chromosome number again.\n(C) is wrong because 12 is the diploid number found in body cells and in cells made by mitosis, not in haploid gametes.\n(D) is wrong because 24 doubles the chromosome number; gametes would then double the number every generation after fertilization."
  },
  {
   "id": "bs0-4",
   "unit": 2,
   "stem": "Which cell structure regulates which substances can enter and leave the cell?",
   "choices": [
    "The plasma membrane",
    "The cell wall of a plant cell",
    "The nucleolus",
    "The Golgi apparatus"
   ],
   "correct": 0,
   "explanation": "Correct: (A) The plasma membrane. The plasma membrane is a phospholipid bilayer with embedded proteins that surrounds every cell. Its hydrophobic interior blocks most ions and polar molecules, while channel, carrier and pump proteins let specific substances cross. This makes the membrane selectively permeable, so it controls what enters and leaves the cell in all organisms, including plants, bacteria and animals.\n\n(B) is wrong because the plant cell wall is a rigid, porous layer that gives support and resists bursting but lets most small molecules pass freely.\n(C) is wrong because the nucleolus is a region inside the nucleus that makes ribosomal RNA and assembles ribosome subunits.\n(D) is wrong because the Golgi apparatus modifies, sorts and packages proteins for secretion but does not control what crosses the cell boundary."
  },
  {
   "id": "bs0-5",
   "unit": 4,
   "stem": "During which phase of mitosis do the chromosomes line up along the center (equator) of the cell?",
   "choices": [
    "Metaphase",
    "Prophase",
    "Anaphase",
    "Telophase"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Metaphase. Metaphase is defined by the alignment of chromosomes. During this phase, spindle microtubules from opposite poles attach to the kinetochores of each pair of sister chromatids, and the opposing pulls line the chromosomes up along the metaphase plate at the cell's equator. A checkpoint ensures every chromosome is attached before the cell moves on to anaphase.\n\n(B) is wrong because in prophase the chromosomes condense and the spindle begins to form, but they have not yet lined up at the equator.\n(C) is wrong because in anaphase the sister chromatids separate and are pulled toward opposite poles, away from the equator.\n(D) is wrong because in telophase the chromosomes arrive at the poles, decondense, and new nuclear envelopes form around them."
  },
  {
   "id": "bs0-6",
   "unit": 8,
   "stem": "In a food chain, a rabbit eats grass and a fox eats the rabbit. Which trophic level does the rabbit occupy?",
   "choices": [
    "Producer",
    "Secondary consumer",
    "Decomposer",
    "Primary consumer"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Primary consumer. Trophic levels follow the flow of energy from organism to organism. Grass captures energy from sunlight by photosynthesis, so it is the producer (first trophic level). An organism that eats producers is a primary consumer (second trophic level, an herbivore). The rabbit eats grass, so it is the primary consumer, and the fox that eats the rabbit is the secondary consumer.\n\n(A) is wrong because producers make their own food by photosynthesis; the grass is the producer, while the rabbit must eat to get energy.\n(B) is wrong because a secondary consumer eats primary consumers; that describes the fox, which eats the rabbit.\n(C) is wrong because decomposers such as fungi and bacteria break down dead matter, but the rabbit eats living grass."
  },
  {
   "id": "bs0-7",
   "unit": 5,
   "setId": "bs0-set1",
   "stem": "What percentage of the offspring are expected to be tall?",
   "choices": [
    "100%",
    "75%",
    "50%",
    "25%"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 75%. The Punnett square for Tt × Tt has four equally likely boxes: TT, Tt, Tt and tt. Because tall (T) is dominant, any plant with at least one T allele is tall, so TT and both Tt boxes are tall, which is 3 of 4 boxes. The expected fraction is 3/4 = 75% tall, and the remaining 1/4 (tt) is short.\n\n(A) is wrong because 100% would require every offspring to carry a T allele, but the tt box shows that 1/4 are short.\n(C) is wrong because 50% counts only the two Tt boxes, leaving out the TT plant, which is also tall.\n(D) is wrong because 25% is the fraction of short (tt) plants, or of TT plants alone, not of all the tall plants."
  },
  {
   "id": "bs0-8",
   "unit": 5,
   "setId": "bs0-set1",
   "stem": "What is the expected genotypic ratio of the offspring?",
   "choices": [
    "3 TT : 1 tt",
    "1 Tt : 1 tt",
    "1 TT : 2 Tt : 1 tt",
    "9 : 3 : 3 : 1"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1 TT : 2 Tt : 1 tt. A genotypic ratio counts each allele combination separately. The Punnett square shows 1 TT box (top left), 2 Tt boxes (top right and bottom left) and 1 tt box (bottom right). The expected genotypic ratio is therefore 1 TT : 2 Tt : 1 tt. Grouping by appearance instead gives the phenotypic ratio of 3 tall : 1 short.\n\n(A) is wrong because 3 TT : 1 tt mixes up the 3:1 phenotypic ratio with genotypes and leaves out the heterozygous Tt offspring.\n(B) is wrong because 1 Tt : 1 tt is the ratio of a testcross (Tt × tt), not of a cross between two heterozygotes.\n(D) is wrong because 9:3:3:1 is the phenotypic ratio of a dihybrid cross involving two genes, but this is a monohybrid cross."
  },
  {
   "id": "bs0-9",
   "unit": 1,
   "stem": "A solution with a pH of 3 has how many times the hydrogen ion concentration of a solution with a pH of 6?",
   "choices": [
    "3 times",
    "30 times",
    "1,000 times",
    "10,000 times"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1,000 times. pH is a logarithmic scale: pH = −log[H⁺], so each one-unit change in pH is a tenfold change in hydrogen ion concentration. The two solutions differ by 6 − 3 = 3 pH units, so their [H⁺] values differ by a factor of 10³ = 1,000. The lower pH is more acidic, so the pH 3 solution has 1,000 times the [H⁺] of the pH 6 solution.\n\n(A) is wrong because 3 times treats pH as a linear scale, taking the difference of 3 units as the ratio of concentrations.\n(B) is wrong because 30 times multiplies the 3-unit difference by 10 instead of raising 10 to the third power.\n(D) is wrong because 10,000 times is 10⁴, which would correspond to a difference of four pH units, not three."
  },
  {
   "id": "bs0-10",
   "unit": 7,
   "stem": "In a population in Hardy–Weinberg equilibrium, 25% of the individuals show a recessive phenotype. What is the frequency of heterozygous individuals?",
   "choices": [
    "0.25",
    "0.50",
    "0.75",
    "1.0"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.50. In Hardy–Weinberg equilibrium the genotype frequencies are p² + 2pq + q² = 1. Only homozygous recessive individuals show the recessive phenotype, so q² = 0.25 and q = √0.25 = 0.5. Then p = 1 − q = 0.5, and the heterozygote frequency is 2pq = 2(0.5)(0.5) = 0.50. Check: 0.25 + 0.50 + 0.25 = 1.00.\n\n(A) is wrong because 0.25 is q² (the homozygous recessive frequency) or p² (the homozygous dominant frequency), not 2pq.\n(C) is wrong because 0.75 is p² + 2pq, the frequency of everyone showing the dominant phenotype, including homozygous dominants.\n(D) is wrong because 1.0 is the total of all genotype frequencies; not every individual can be heterozygous when 25% are recessive."
  }
 ],
 "sets": {
  "bs0-set1": {
   "text": "In pea plants, tall (T) is dominant to short (t). The Punnett square shows a cross between two heterozygous tall plants.",
   "figures": [
    {
     "table": {
      "headers": [
       "",
       "T",
       "t"
      ],
      "rows": [
       [
        "T",
        "TT",
        "Tt"
       ],
       [
        "t",
        "Tt",
        "tt"
       ]
      ]
     },
     "caption": "Punnett square for Tt × Tt"
    }
   ]
  }
 }
};

export default EXAM;
