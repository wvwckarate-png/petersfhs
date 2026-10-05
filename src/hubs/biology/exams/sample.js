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
   "explanation": "Glycolysis is carried out by enzymes dissolved in the cytosol and does not require oxygen or mitochondria. The citric acid cycle occurs in the mitochondrial matrix, and the electron transport chain is in the inner mitochondrial membrane."
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
   "explanation": "Three nucleotides make one codon, and each codon specifies one amino acid: 600/3 = 200 amino acids."
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
   "explanation": "Meiosis produces haploid gametes, each with half the chromosome number of the parent cell: 12/2 = 6."
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
   "explanation": "The plasma membrane, a phospholipid bilayer with embedded proteins, is selectively permeable and controls the movement of materials into and out of every cell. A plant cell wall is a rigid, fully permeable layer outside the membrane."
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
   "explanation": "In metaphase, the spindle fibers attach to the kinetochores and align the chromosomes at the metaphase plate. In anaphase, the sister chromatids separate and move to opposite poles."
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
   "explanation": "Grass is the producer (first trophic level), and organisms that eat producers are primary consumers. The rabbit eats the grass, so it is a primary consumer, and the fox is a secondary consumer."
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
   "explanation": "The offspring genotypes are TT (1/4), Tt (2/4), and tt (1/4). Both TT and Tt are tall, so 3/4 = 75% of the offspring are expected to be tall."
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
   "explanation": "The Punnett square shows one TT, two Tt, and one tt, a 1:2:1 genotypic ratio. The 3:1 ratio describes the phenotypes (tall to short)."
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
   "explanation": "Each pH unit is a factor of 10 in [H⁺]. A difference of 3 pH units is a factor of 10³ = 1,000, and the lower pH has the higher concentration."
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
   "explanation": "q² = 0.25, so q = 0.5 and p = 0.5. The frequency of heterozygotes is 2pq = 2(0.5)(0.5) = 0.50."
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
