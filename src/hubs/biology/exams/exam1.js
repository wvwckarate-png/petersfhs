// AP Biology — Exam 1 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "be1-1",
   "unit": 2,
   "stem": "A plant cell has a solute potential (Ψs) of −0.40 MPa and a pressure potential (Ψp) of +0.10 MPa. What is the water potential (Ψ) of the cell?",
   "choices": [
    "+0.50 MPa",
    "+0.30 MPa",
    "−0.30 MPa",
    "−0.50 MPa"
   ],
   "correct": 2,
   "explanation": "Correct: (C) −0.30 MPa. Water potential is the sum of its two components: Ψ = Ψ<sub>p</sub> + Ψ<sub>s</sub>. Solute potential is always zero or negative because dissolved solutes lower the free energy of water, while pressure potential in a turgid plant cell is positive. Here Ψ = (+0.10 MPa) + (−0.40 MPa) = −0.30 MPa. The cell's water potential is still negative, so it would take up water from pure water (Ψ = 0 MPa).\n\n(A) is wrong because it adds the magnitudes 0.40 + 0.10 and drops the negative sign of the solute potential, which can never be positive.\n(B) is wrong because it has the right magnitude but the wrong sign; a solute potential of −0.40 MPa outweighs a pressure potential of only +0.10 MPa, so Ψ is negative.\n(D) is wrong because it subtracts the pressure potential (−0.40 − 0.10) instead of adding it; positive turgor pressure raises water potential rather than lowering it."
  },
  {
   "id": "be1-2",
   "unit": 7,
   "stem": "In a population in Hardy–Weinberg equilibrium, the frequency of individuals with a recessive phenotype is 0.16. What is the frequency of heterozygous individuals in the population?",
   "choices": [
    "0.16",
    "0.36",
    "0.48",
    "0.60"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.48. In Hardy–Weinberg equilibrium the genotype frequencies are p² + 2pq + q² = 1. Only homozygous recessive individuals show the recessive phenotype, so q² = 0.16 and q = √0.16 = 0.40. Then p = 1 − 0.40 = 0.60, and the heterozygote frequency is 2pq = 2(0.60)(0.40) = 0.48. Check: p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.00.\n\n(A) is wrong because 0.16 is q², the frequency of the homozygous recessive individuals given in the stem, not the heterozygotes.\n(B) is wrong because 0.36 is p² = (0.60)², the frequency of the homozygous dominant individuals rather than the heterozygotes (2pq).\n(D) is wrong because 0.60 is p, the frequency of the dominant allele; it is an allele frequency, not the frequency of any genotype."
  },
  {
   "id": "be1-3",
   "unit": 2,
   "setId": "be1-set1",
   "stem": "In which direction is there a net movement of water across the membrane?",
   "choices": [
    "From the left side to the right side, because the right side has the lower water potential.",
    "From the right side to the left side, because the right side has more solute to dilute.",
    "There is no net movement, because the membrane is selectively permeable.",
    "Sucrose moves from the right side to the left side, followed by water."
   ],
   "correct": 0,
   "explanation": "Correct: (A) From the left side to the right side, because the right side has the lower water potential. Water moves by osmosis from higher to lower water potential. Sucrose cannot cross the membrane, so only water moves. The right side is 0.6 M sucrose and the left side is 0.2 M, so the right side has more solute, a more negative solute potential, and the lower water potential (Ψ<sub>s</sub> = −iCRT, so tripling C makes Ψ<sub>s</sub> three times as negative). Net water flow is therefore from left to right.\n\n(B) is wrong because water moves toward the side with more solute, not away from it; the right side's extra solute pulls water in from the left, not the reverse.\n(C) is wrong because a selectively permeable membrane is exactly what allows osmosis; water can cross, and a water potential difference exists, so there is net flow.\n(D) is wrong because the membrane is impermeable to sucrose, as the set states, so sucrose cannot move at all; only water crosses the membrane."
  },
  {
   "id": "be1-4",
   "unit": 2,
   "setId": "be1-set1",
   "stem": "After the system reaches equilibrium, which statement describes the liquid levels?",
   "choices": [
    "The level on the right side is higher than the level on the left side.",
    "The level on the left side is higher than the level on the right side.",
    "The levels on both sides are equal, because the system is at equilibrium.",
    "The level on the right side is lower, because sucrose has moved across."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The level on the right side is higher than the level on the left side. Water moves from the left (0.2 M) into the right (0.6 M), so the right column rises and the left column falls. The taller right column exerts hydrostatic pressure (a positive pressure potential) that pushes water back. Equilibrium is reached when Ψ = Ψ<sub>p</sub> + Ψ<sub>s</sub> is equal on both sides, not when the levels are equal. Because sucrose cannot cross, the right side always keeps more solute, so the right level stays higher.\n\n(B) is wrong because the left side loses water to the right side by osmosis, so its level drops below the right side rather than rising above it.\n(C) is wrong because equilibrium means equal water potential, not equal volumes; the solute difference persists and is balanced by the extra pressure of the taller right column.\n(D) is wrong because sucrose cannot cross the membrane, and water flows into the right side, so the right level rises rather than falls."
  },
  {
   "id": "be1-5",
   "unit": 6,
   "stem": "In a sample of double-stranded DNA, 30% of the nucleotides are adenine. What percentage of the nucleotides are cytosine?",
   "choices": [
    "70%",
    "40%",
    "30%",
    "20%"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 20%. By Chargaff's rules, in double-stranded DNA adenine pairs with thymine and guanine pairs with cytosine, so A = T and G = C. With A = 30%, T = 30%, and A + T = 60%. The remaining 100% − 60% = 40% is G + C, split equally: C = 40% ÷ 2 = 20% (and G = 20%).\n\n(A) is wrong because 70% is 100% − 30%, which subtracts only adenine and forgets that thymine also makes up 30% of the nucleotides.\n(B) is wrong because 40% is the combined G + C percentage; it must be divided equally between guanine and cytosine, giving 20% each.\n(C) is wrong because 30% would be true for thymine, which pairs with adenine; cytosine pairs with guanine and is not equal to adenine."
  },
  {
   "id": "be1-6",
   "unit": 4,
   "setId": "be1-set2",
   "stem": "Which of the following is the best interpretation of the data?",
   "choices": [
    "Drug X causes cells to accumulate in the G₁ phase, so it likely blocks DNA replication.",
    "Drug X increases the rate of mitosis, because more cells are in M phase.",
    "Drug X has no effect on the cell cycle.",
    "Drug X causes cells to accumulate in the G₂ phase, so it likely blocks the transition into mitosis."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Drug X causes cells to accumulate in the G₂ phase, so it likely blocks the transition into mitosis. Compare the bars phase by phase. With Drug X, G<sub>2</sub> rises from 12% to 55% while G<sub>1</sub> falls from 60% to 20%, and S (20% to 15%) and M (8% to 10%) change little. Cells are piling up just before mitosis, which means they complete DNA replication but cannot pass the G<sub>2</sub>/M checkpoint. The most likely action of the drug is to block entry into mitosis.\n\n(A) is wrong because the G<sub>1</sub> percentage falls from 60% to 20% with Drug X, so cells are leaving G<sub>1</sub> rather than accumulating there.\n(B) is wrong because M phase changes only from 8% to 10%, a small difference; the large accumulation in G<sub>2</sub> shows cells are being held back, not dividing faster.\n(C) is wrong because the distribution changes greatly, most clearly G<sub>2</sub> rising from 12% to 55%, so the drug clearly affects the cell cycle."
  },
  {
   "id": "be1-7",
   "unit": 4,
   "setId": "be1-set2",
   "stem": "What percentage of the control cells were in interphase?",
   "choices": [
    "8%",
    "60%",
    "80%",
    "92%"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 92%. Interphase is the part of the cell cycle outside mitosis: G<sub>1</sub>, S, and G<sub>2</sub>. Reading the control bars, G<sub>1</sub> = 60%, S = 20%, and G<sub>2</sub> = 12%, so interphase = 60 + 20 + 12 = 92%. Equivalently, 100% − 8% (M phase) = 92%. Most cells in a population are in interphase because it is much longer than mitosis.\n\n(A) is wrong because 8% is the percentage of control cells in M phase, which is the only phase that is not part of interphase.\n(B) is wrong because 60% counts only G<sub>1</sub>; interphase also includes the S and G<sub>2</sub> phases, which add another 32%.\n(C) is wrong because 80% adds G<sub>1</sub> and S (60 + 20) but leaves out the 12% of cells in G<sub>2</sub>, which is also part of interphase."
  },
  {
   "id": "be1-8",
   "unit": 2,
   "stem": "Which of the following structures is found in both prokaryotic and eukaryotic cells?",
   "choices": [
    "Ribosomes",
    "A nuclear envelope",
    "Mitochondria",
    "A Golgi apparatus"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Ribosomes. Every cell must make proteins, so all cells, prokaryotic and eukaryotic, have ribosomes (70S in prokaryotes, 80S in the eukaryotic cytosol). Ribosomes are not bounded by a membrane, so they do not depend on the internal membrane system that prokaryotes lack. The other choices are membrane-bound organelles found only in eukaryotic cells.\n\n(B) is wrong because a nuclear envelope defines the eukaryotic nucleus; prokaryotes keep their DNA in a nucleoid region with no surrounding membrane.\n(C) is wrong because mitochondria are membrane-bound organelles found only in eukaryotes; prokaryotes carry out respiration on their plasma membrane instead.\n(D) is wrong because the Golgi apparatus is part of the eukaryotic endomembrane system, which prokaryotic cells do not have."
  },
  {
   "id": "be1-9",
   "unit": 7,
   "stem": "A small number of individuals from a large population survive a natural disaster, and the allele frequencies in the surviving population differ from those in the original population. Which of the following best describes this event?",
   "choices": [
    "Natural selection, because the survivors had the fittest alleles",
    "Gene flow, because individuals moved between populations",
    "Sexual selection, because mates were chosen by a trait",
    "A population bottleneck, which is a type of genetic drift"
   ],
   "correct": 3,
   "explanation": "Correct: (D) A population bottleneck, which is a type of genetic drift. A bottleneck is a sharp reduction in population size caused by a chance event such as a natural disaster. The few survivors are a random sample of the original population, so their allele frequencies differ from the original by chance alone. Because the change is random rather than driven by differences in fitness, it is a form of genetic drift, which has strong effects in small populations.\n\n(A) is wrong because a disaster kills individuals largely at random, so survival is not due to having better-adapted alleles; that would be natural selection.\n(B) is wrong because gene flow requires individuals or gametes moving between populations, and the stem describes no migration, only a loss of individuals.\n(C) is wrong because sexual selection depends on mate choice or competition for mates, which plays no role in surviving a natural disaster."
  },
  {
   "id": "be1-10",
   "unit": 6,
   "stem": "Which of the following best describes the role of an enhancer in the regulation of gene expression in eukaryotes?",
   "choices": [
    "An RNA molecule that binds mRNA and destroys it before translation",
    "The region of the gene where the ribosome attaches to the mRNA",
    "An enzyme that adds the 5′ cap to the pre-mRNA in the nucleus",
    "A DNA sequence that binds activator proteins and increases transcription"
   ],
   "correct": 3,
   "explanation": "Correct: (D) A DNA sequence that binds activator proteins and increases transcription. An enhancer is a distal control element: a DNA sequence, often far from the promoter, that binds activator proteins (specific transcription factors). DNA bending brings the bound activators into contact with the general transcription factors and mediator proteins at the promoter, which helps RNA polymerase II assemble and raises the rate of transcription. Enhancers act at the level of transcription.\n\n(A) is wrong because an RNA that binds mRNA and destroys it describes a microRNA or siRNA, which regulates after transcription, not an enhancer.\n(B) is wrong because the site where the ribosome attaches is on the mRNA (near the 5′ cap in eukaryotes); enhancers are DNA sequences that affect transcription.\n(C) is wrong because the 5′ cap is added by capping enzymes during RNA processing; an enhancer is a DNA sequence, not an enzyme."
  },
  {
   "id": "be1-11",
   "unit": 7,
   "stem": "In a population of 200 diploid individuals, 98 have the genotype AA, 84 have the genotype Aa, and 18 have the genotype aa. What is the frequency of the a allele in the population?",
   "choices": [
    "0.42",
    "0.30",
    "0.21",
    "0.09"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.30. Count alleles directly. 200 diploid individuals carry 2 × 200 = 400 alleles. Each Aa individual carries one a allele and each aa individual carries two, so the number of a alleles is 84 + 2(18) = 84 + 36 = 120. The frequency of a is q = 120/400 = 0.30, and p = 280/400 = 0.70. Counting is required here; do not assume Hardy–Weinberg.\n\n(A) is wrong because 0.42 is 84/200, the frequency of heterozygous individuals, which is a genotype frequency rather than the a allele frequency.\n(C) is wrong because 0.21 is 84/400, which counts the a alleles in heterozygotes but leaves out the 36 a alleles carried by the aa individuals.\n(D) is wrong because 0.09 is 18/200, the frequency of aa individuals (q²), not the allele frequency q; √0.09 = 0.30 is the allele frequency."
  },
  {
   "id": "be1-12",
   "unit": 1,
   "setId": "be1-set3",
   "stem": "Which solution most likely contains starch?",
   "choices": [
    "Solution C",
    "Solution A",
    "Solution B",
    "Solution D"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Solution C. Iodine (iodine–potassium iodide) changes from amber to blue-black when it fits inside the helical coils of amylose in starch. In the table, only Solution C turned iodine blue-black; A, B, and D left it amber. Solution C also gave negative Benedict's (blue) and biuret (blue) results, consistent with a solution of starch alone.\n\n(B) is wrong because Solution A left iodine amber (negative for starch); its purple biuret result indicates protein, not starch.\n(C) is wrong because Solution B left iodine amber; its orange-red Benedict's result indicates a reducing sugar such as glucose, not starch.\n(D) is wrong because Solution D was negative for all three tests (Benedict's blue, biuret blue, iodine amber), so it contains no starch."
  },
  {
   "id": "be1-13",
   "unit": 1,
   "setId": "be1-set3",
   "stem": "Which solution most likely contains protein?",
   "choices": [
    "Solution A",
    "Solution B",
    "Solution C",
    "Solution D"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Solution A. Biuret reagent contains Cu²⁺ ions, which form a purple complex with peptide bonds; a positive biuret test therefore indicates protein. In the table, only Solution A turned biuret purple, while B, C, and D left it blue. Solution A was negative for both reducing sugar (Benedict's blue) and starch (iodine amber).\n\n(B) is wrong because Solution B left biuret blue (no peptide bonds); its orange-red Benedict's result shows a reducing sugar instead.\n(C) is wrong because Solution C left biuret blue; its blue-black iodine result shows starch, which has no peptide bonds.\n(D) is wrong because Solution D was negative for every test, including biuret (blue), so there is no evidence that it contains protein."
  },
  {
   "id": "be1-14",
   "unit": 6,
   "stem": "A mutation results in the insertion of a single nucleotide in the middle of the coding sequence of a gene. Which of the following is the most likely result?",
   "choices": [
    "A silent mutation that changes the DNA but not the protein sequence",
    "A missense mutation that replaces one amino acid in the protein",
    "A large deletion that removes the whole gene from the chromosome",
    "A frameshift mutation that changes the amino acids after the insertion"
   ],
   "correct": 3,
   "explanation": "Correct: (D) A frameshift mutation that changes the amino acids after the insertion. The ribosome reads mRNA in non-overlapping triplets starting from the start codon. Inserting a single nucleotide (a number not divisible by 3) shifts the reading frame for every codon downstream of the insertion, so all later amino acids change and a premature stop codon usually appears. This frameshift typically produces a truncated, nonfunctional protein, while codons upstream of the insertion are unaffected.\n\n(A) is wrong because a silent mutation is a base substitution that produces a synonymous codon; an insertion shifts every downstream codon and is not silent.\n(B) is wrong because a missense mutation is a single base substitution that changes one codon; an insertion changes the reading frame of all codons after it.\n(C) is wrong because the mutation adds one nucleotide; it does not delete anything, let alone remove the entire gene from the chromosome."
  },
  {
   "id": "be1-15",
   "unit": 2,
   "stem": "A cell is modeled as a cube with sides that are 2 μm long. What is the ratio of surface area to volume for the cell?",
   "choices": [
    "1.5 μm⁻¹",
    "3.0 μm⁻¹",
    "6.0 μm⁻¹",
    "12 μm⁻¹"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3.0 μm⁻¹. For a cube with side s = 2 μm, surface area = 6s² = 6(2 μm)² = 24 μm², and volume = s³ = (2 μm)³ = 8 μm³. SA/V = 24 μm² ÷ 8 μm³ = 3.0 μm⁻¹ (for any cube, SA/V = 6/s = 6/2). As a cell grows, volume rises faster than surface area, so this ratio falls and limits exchange across the membrane.\n\n(A) is wrong because 1.5 μm⁻¹ results from using 6s = 12 μm for the surface area instead of 6s² = 24 μm², then dividing by 8 μm³.\n(C) is wrong because 6.0 results from dividing the surface area by the area of one face (24 ÷ 4) instead of by the volume of 8 μm³.\n(D) is wrong because 12 results from dividing the surface area by the side length (24 ÷ 2) instead of by the volume, or from using 6 × 2 = 12."
  },
  {
   "id": "be1-16",
   "unit": 4,
   "stem": "A culture of bacteria starts with one cell and the population doubles every 6 hours. Assuming no cells die, how many cells are present after 24 hours?",
   "choices": [
    "24",
    "16",
    "8",
    "4"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 16. Binary fission doubles the population each generation, so N = N₀ × 2<sup>n</sup>, where n is the number of generations. With a doubling time of 6 hours, 24 hours contains n = 24 ÷ 6 = 4 doublings. Starting from one cell, N = 1 × 2⁴ = 16 cells (1 → 2 → 4 → 8 → 16).\n\n(A) is wrong because 24 is the number of hours, not the number of cells; growth depends on the number of doublings, not on time directly.\n(C) is wrong because 8 cells is 2³, which counts only three doublings; 24 hours at a 6-hour doubling time contains four doublings.\n(D) is wrong because 4 is the number of doublings (24 ÷ 6); the number of cells is 2 raised to that power, 2⁴ = 16."
  },
  {
   "id": "be1-17",
   "unit": 4,
   "stem": "A diploid organism has 2n = 8 chromosomes in its somatic cells. How many chromosomes are in each of the cells produced at the end of meiosis?",
   "choices": [
    "2",
    "4",
    "8",
    "16"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 4. Meiosis reduces the chromosome number by half: a diploid cell (2n) produces four haploid (n) cells. Homologous chromosomes separate in meiosis I, and sister chromatids separate in meiosis II, which does not halve the number again. With 2n = 8, each cell at the end of meiosis has n = 8 ÷ 2 = 4 chromosomes, one from each homologous pair.\n\n(A) is wrong because 2 halves the chromosome number twice, once for each division; meiosis II separates sister chromatids and does not halve the number again.\n(C) is wrong because 8 is the diploid number, which is kept by mitosis, not meiosis; meiosis produces haploid cells with 4 chromosomes.\n(D) is wrong because 16 doubles the diploid number, perhaps confusing it with the 16 chromatids after S phase; meiosis reduces chromosome number rather than increasing it."
  },
  {
   "id": "be1-18",
   "unit": 4,
   "stem": "A mutation in the p53 gene prevents the production of a functional p53 protein. Why does this mutation increase the risk of cancer?",
   "choices": [
    "The p53 protein normally halts the cell cycle or triggers apoptosis after DNA damage, so damaged cells keep dividing.",
    "The p53 protein is an enzyme that speeds up the cell cycle, so its absence causes cells to stop dividing.",
    "The p53 protein is a growth factor that stimulates division, so its absence slows the growth of tumors.",
    "The p53 protein repairs DNA by replacing damaged bases, so its absence prevents all DNA replication."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The p53 protein normally halts the cell cycle or triggers apoptosis after DNA damage, so damaged cells keep dividing. p53 is a tumor suppressor protein, a transcription factor that is activated by DNA damage. It turns on genes such as p21 that halt the cell cycle at the G<sub>1</sub> checkpoint so the damage can be repaired, and it triggers apoptosis if the damage cannot be fixed. Without functional p53, cells with damaged DNA keep dividing and accumulate further mutations that can lead to cancer.\n\n(B) is wrong because p53 slows the cycle rather than speeding it up, and losing it makes cells divide more, not stop dividing.\n(C) is wrong because p53 is not a growth factor; losing a tumor suppressor allows tumors to grow, which is the opposite of slowing them.\n(D) is wrong because p53 is a transcription factor that signals repair, not a base-replacing repair enzyme, and its loss does not stop DNA replication."
  },
  {
   "id": "be1-19",
   "unit": 2,
   "stem": "Which organelle is primarily responsible for modifying, sorting, and packaging proteins for secretion from the cell?",
   "choices": [
    "Smooth endoplasmic reticulum",
    "Lysosome",
    "Mitochondrion",
    "Golgi apparatus"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Golgi apparatus. Proteins made by ribosomes on the rough ER travel in vesicles to the cis face of the Golgi apparatus. In the Golgi they are modified (for example, by trimming and adding carbohydrate groups), sorted by molecular tags, and packaged at the trans face into vesicles bound for the plasma membrane (secretion), lysosomes, or other destinations. This modifying, sorting, and packaging role is the Golgi's main function.\n\n(A) is wrong because the smooth ER makes lipids and steroids, detoxifies drugs, and stores Ca²⁺; it does not sort and package proteins for secretion.\n(B) is wrong because lysosomes contain hydrolytic enzymes that digest macromolecules and worn-out organelles; they receive proteins from the Golgi rather than package them.\n(C) is wrong because mitochondria carry out cellular respiration to make ATP; they have no role in modifying or packaging proteins for secretion."
  },
  {
   "id": "be1-20",
   "unit": 1,
   "stem": "A solution with a pH of 5 has how many times the hydrogen ion concentration of a solution with a pH of 7?",
   "choices": [
    "10,000 times",
    "1000 times",
    "100 times",
    "10 times"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 100 times. pH = −log[H⁺], so each pH unit is a tenfold change in hydrogen ion concentration. At pH 5, [H⁺] = 10⁻⁵ M; at pH 7, [H⁺] = 10⁻⁷ M. The ratio is 10⁻⁵ ÷ 10⁻⁷ = 10² = 100. The lower pH has the higher [H⁺], so the pH 5 solution has 100 times as many hydrogen ions per liter.\n\n(A) is wrong because 10,000 is 10⁴, which would correspond to a 4-unit pH difference; pH 5 and pH 7 differ by only 2 units.\n(B) is wrong because 1000 is 10³, a 3-unit pH difference; the solutions differ by 2 pH units, so the factor is 10² = 100.\n(D) is wrong because 10 is the factor for a single pH unit; a 2-unit difference multiplies by ten twice, giving 10 × 10 = 100."
  },
  {
   "id": "be1-21",
   "unit": 7,
   "setId": "be1-set4",
   "stem": "Which statement best explains the change in mean beak depth?",
   "choices": [
    "Individual birds grew deeper beaks during the drought because they needed to eat the large, hard seeds.",
    "The birds needed deeper beaks, so new mutations for deeper beaks appeared in response to the drought.",
    "Birds with deeper beaks cracked large seeds, survived, and reproduced more, so alleles for deeper beaks became more common.",
    "Birds with shallow beaks moved to other islands, and their departure caused the remaining beaks to deepen."
   ],
   "correct": 2,
   "explanation": "Correct: (C) Birds with deeper beaks cracked large seeds, survived, and reproduced more, so alleles for deeper beaks became more common. Natural selection acts on heritable variation that already exists. Before the drought some finches had deeper beaks; when only large, hard seeds remained, those birds could crack them, so they survived and reproduced more. Their offspring inherited the alleles for deeper beaks, raising the mean from about 9.2 mm to 9.7 mm. The ±2 SE error bars (about ±0.1 mm) do not overlap, so the 0.5 mm change is likely real.\n\n(A) is wrong because beak depth changes acquired by individuals during their lives are not inherited; evolution changes the population, not individual birds' genes.\n(B) is wrong because mutations arise randomly and not in response to need; selection acted on variation in beak depth that already existed before the drought.\n(D) is wrong because the stem describes no migration; the data show a shift caused by differential survival on the island, not by birds leaving."
  },
  {
   "id": "be1-22",
   "unit": 7,
   "setId": "be1-set4",
   "stem": "Which observation would be the best evidence that the change in beak depth is due to a change in allele frequencies rather than a direct effect of the environment?",
   "choices": [
    "The surviving birds spend most of their foraging time eating the large, hard seeds that remain.",
    "The mean beak depth was measured in the same year that the severe drought began on the island.",
    "The mean body mass of the birds decreased during the drought, along with the supply of seeds.",
    "The offspring of the surviving birds also have deeper beaks, even when raised in a different environment."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The offspring of the surviving birds also have deeper beaks, even when raised in a different environment. To show a change in allele frequencies, the trait must be shown to be heritable rather than a direct effect of diet or conditions. If offspring of the survivors have deeper beaks even when raised in a different environment (a common-garden comparison), the difference is passed on genetically. That rules out an environmental effect on development and supports evolution by natural selection.\n\n(A) is wrong because what the survivors eat describes their behavior but says nothing about whether deeper beaks are inherited by their offspring.\n(B) is wrong because measuring beak depth in the drought's first year gives no information about inheritance; it cannot separate genetic and environmental causes.\n(C) is wrong because a drop in body mass is an environmental response to food shortage and gives no evidence that beak-depth alleles changed in frequency."
  },
  {
   "id": "be1-23",
   "unit": 3,
   "setId": "be1-set5",
   "stem": "Which organism is most likely the source of enzyme Y?",
   "choices": [
    "A bacterium that lives in a hot spring",
    "A human",
    "An Arctic fish",
    "A soil fungus that lives at 20 °C"
   ],
   "correct": 0,
   "explanation": "Correct: (A) A bacterium that lives in a hot spring. An enzyme works best at the temperature its organism normally experiences, because its folded shape is stabilized for that environment. The graph shows enzyme Y peaking near 75 °C and losing activity sharply above it, with almost no activity below about 40 °C. Such a heat-stable (thermophilic) enzyme fits a bacterium from a hot spring, while enzyme X, peaking near 37 °C, fits a human.\n\n(B) is wrong because human body temperature is about 37 °C, which matches the peak of enzyme X, not enzyme Y at 75 °C.\n(C) is wrong because an Arctic fish lives near 0 °C, where the graph shows enzyme Y has essentially no activity.\n(D) is wrong because at 20 °C enzyme Y is almost completely inactive on the graph, so a fungus living at 20 °C would not rely on it."
  },
  {
   "id": "be1-24",
   "unit": 3,
   "setId": "be1-set5",
   "stem": "Which statement best explains the sharp decrease in the activity of enzyme X above 37 °C?",
   "choices": [
    "The enzyme runs out of substrate as the temperature rises, so the reaction slows.",
    "The high temperature disrupts the enzyme's three-dimensional shape and changes its active site.",
    "The high temperature breaks the peptide bonds that link the amino acids in the enzyme.",
    "The enzyme is converted into the product when the temperature exceeds its optimum."
   ],
   "correct": 1,
   "explanation": "Correct: (B) The high temperature disrupts the enzyme's three-dimensional shape and changes its active site. An enzyme's active site depends on its tertiary structure, which is held by weak interactions such as hydrogen bonds, ionic bonds, and hydrophobic interactions. Above its optimum (37 °C for enzyme X), the extra thermal energy breaks these weak bonds, so the protein unfolds (denatures), the active site loses its shape, and substrate no longer binds well. That causes the steep drop on the graph.\n\n(A) is wrong because substrate supply does not depend on temperature in this experiment; the rate falls because the enzyme is denatured, not because substrate runs out.\n(C) is wrong because peptide bonds are strong covalent bonds that are not broken at these modest temperatures; denaturation disrupts weaker interactions, leaving the primary structure intact.\n(D) is wrong because enzymes are catalysts and are not converted into product at any temperature; they are unchanged by the reactions they speed up."
  },
  {
   "id": "be1-25",
   "unit": 5,
   "stem": "A recessive allele for color blindness is located on the X chromosome. A color-blind man and a woman who is homozygous for the normal allele have children. Which statement is correct?",
   "choices": [
    "All of their sons will be color blind, and none of their daughters will be carriers.",
    "Half of their sons and half of their daughters will be color blind.",
    "All of their children will be color blind.",
    "All of their daughters will be carriers, and none of their sons will be color blind."
   ],
   "correct": 3,
   "explanation": "Correct: (D) All of their daughters will be carriers, and none of their sons will be color blind. Let X<sup>c</sup> be the color-blind allele. The father is X<sup>c</sup>Y and the mother is X<sup>C</sup>X<sup>C</sup>. Daughters receive the father's X<sup>c</sup> and a mother's X<sup>C</sup>, so all are X<sup>C</sup>X<sup>c</sup>: carriers with normal vision. Sons receive the father's Y and a mother's X<sup>C</sup>, so all are X<sup>C</sup>Y with normal vision. A father never passes his X chromosome to his sons.\n\n(A) is wrong because sons get their X from the mother, who has only normal alleles, so no son is color blind, and every daughter receives the father's recessive X.\n(B) is wrong because no child can be color blind, because every child receives a normal X from the homozygous normal mother.\n(C) is wrong because the mother contributes a dominant normal allele to every child, so none of the children can be color blind."
  },
  {
   "id": "be1-26",
   "unit": 8,
   "stem": "A community has three species with the following numbers of individuals: species 1 has 50, species 2 has 30, and species 3 has 20. What is the Simpson's diversity index, D = 1 − Σ(n/N)²?",
   "choices": [
    "1.38",
    "0.62",
    "0.50",
    "0.38"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.62. Total N = 50 + 30 + 20 = 100. The proportions are 50/100 = 0.50, 30/100 = 0.30, and 20/100 = 0.20. Square and sum: 0.50² + 0.30² + 0.20² = 0.25 + 0.09 + 0.04 = 0.38. Then D = 1 − 0.38 = 0.62. Higher values (closer to 1) mean greater diversity, because two randomly chosen individuals are more likely to belong to different species.\n\n(A) is wrong because 1.38 results from adding the sum to 1 (1 + 0.38) instead of subtracting it; Simpson's index cannot exceed 1.\n(C) is wrong because 0.50 is just the proportion of species 1 (50/100), not the diversity index calculated from all three species.\n(D) is wrong because 0.38 is Σ(n/N)², the probability that two individuals are the same species; it must be subtracted from 1 to give D."
  },
  {
   "id": "be1-27",
   "unit": 3,
   "setId": "be1-set6",
   "stem": "Which of the following is the best conclusion from the data?",
   "choices": [
    "As the light intensity increases, the rate of photosynthesis increases.",
    "As the light intensity increases, the rate of cellular respiration decreases.",
    "Light intensity has no effect on photosynthesis.",
    "Photosynthesis requires more time when more light is present."
   ],
   "correct": 0,
   "explanation": "Correct: (A) As the light intensity increases, the rate of photosynthesis increases. In the assay, a shorter time for disks to float means oxygen accumulated faster, so the rate of photosynthesis was higher. The time drops from 18 min at 100 lux to 9 min at 400 lux to 5 min at 800 lux, and no disks float at 0 lux. Rate is roughly proportional to 1/time, so the rate of photosynthesis rises as light intensity increases.\n\n(B) is wrong because the assay measures net oxygen production by photosynthesis; it gives no measurement of the rate of cellular respiration.\n(C) is wrong because the time to float drops from 18 min to 5 min as light increases, and no disks float in the dark, so light clearly matters.\n(D) is wrong because more light shortened the time to float (18 min to 5 min), meaning photosynthesis was faster, not slower."
  },
  {
   "id": "be1-28",
   "unit": 3,
   "setId": "be1-set6",
   "stem": "Why did the disks in the 0 lux condition remain at the bottom?",
   "choices": [
    "Without light, the leaf cells cannot carry out cellular respiration.",
    "Without light, bicarbonate cannot be absorbed by the leaf cells.",
    "Without light, the light-dependent reactions could not produce oxygen.",
    "Without light, the density of the leaf tissue increases."
   ],
   "correct": 2,
   "explanation": "Correct: (C) Without light, the light-dependent reactions could not produce oxygen. The disks rise only when O₂ produced by photosynthesis collects in the air spaces of the leaf tissue and makes the disks buoyant. That O₂ comes from photolysis of water in the light-dependent reactions, which require light energy absorbed by chlorophyll. At 0 lux no O₂ is produced; the leaf cells' respiration actually consumes O₂, so the disks stay sunk.\n\n(A) is wrong because cellular respiration does not require light and continues in the dark; it consumes oxygen rather than producing the gas that floats the disks.\n(B) is wrong because bicarbonate supplies CO₂ for the Calvin cycle and does not need light to enter the cells; the missing factor is light-driven oxygen production.\n(D) is wrong because the density of the leaf tissue itself does not change with light; the disks stay sunk because no oxygen gas accumulates."
  },
  {
   "id": "be1-29",
   "unit": 6,
   "stem": "RNA polymerase synthesizes an mRNA molecule by adding nucleotides in which direction, and using which strand as the template?",
   "choices": [
    "It adds nucleotides to the 3′ end of the growing mRNA, reading the template DNA strand 3′ to 5′.",
    "It adds nucleotides to the 5′ end of the growing mRNA, reading the template DNA strand 3′ to 5′.",
    "It adds nucleotides to the 3′ end of the growing mRNA, reading the template DNA strand 5′ to 3′.",
    "It adds nucleotides to either end, depending on the gene."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It adds nucleotides to the 3′ end of the growing mRNA, reading the template DNA strand 3′ to 5′. Like DNA polymerase, RNA polymerase can add nucleotides only to the free 3′-OH of the growing strand, so mRNA is built 5′ → 3′. Because the template and the new RNA are antiparallel, the polymerase moves along the template DNA strand in the 3′ → 5′ direction. The mRNA therefore matches the coding (nontemplate) strand, with U in place of T.\n\n(B) is wrong because nucleotides cannot be added to the 5′ end; the incoming nucleotide's phosphate bonds to the 3′-OH, so growth is always at the 3′ end.\n(C) is wrong because reading the template 5′ → 3′ while adding to the 3′ end is impossible; antiparallel pairing requires the template to be read 3′ → 5′.\n(D) is wrong because the direction of synthesis is fixed by the chemistry of nucleotide addition and is always 5′ → 3′ for every gene."
  },
  {
   "id": "be1-30",
   "unit": 3,
   "stem": "How many molecules of ATP are produced by substrate-level phosphorylation in glycolysis (a net gain) for each molecule of glucose that is converted to two molecules of pyruvate?",
   "choices": [
    "0",
    "2",
    "4",
    "36"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2. Glycolysis has two phases. In the energy-investment phase, 2 ATP are used to phosphorylate glucose and fructose-6-phosphate. In the payoff phase, each of the two G3P molecules yields 2 ATP by substrate-level phosphorylation, so 4 ATP are made. Net gain = 4 − 2 = 2 ATP per glucose, along with 2 NADH and 2 pyruvate.\n\n(A) is wrong because the payoff phase makes 4 ATP, which is more than the 2 ATP invested, so glycolysis has a net gain, not zero.\n(C) is wrong because 4 ATP is the gross yield of the payoff phase; the 2 ATP spent in the investment phase must be subtracted for the net gain.\n(D) is wrong because about 36 ATP is the approximate total yield of complete aerobic respiration, mostly from oxidative phosphorylation, not glycolysis alone."
  },
  {
   "id": "be1-31",
   "unit": 5,
   "stem": "In a cross, a student expected a 3:1 phenotypic ratio among 120 offspring (90 dominant and 30 recessive). The student observed 84 dominant and 36 recessive offspring. What is the value of the chi-square statistic, χ² = Σ(o − e)²/e?",
   "choices": [
    "0.40",
    "1.20",
    "1.60",
    "3.84"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.60. Expected values are 90 dominant and 30 recessive. For dominant: (84 − 90)²/90 = 36/90 = 0.40. For recessive: (36 − 30)²/30 = 36/30 = 1.20. χ² = 0.40 + 1.20 = 1.60. With 2 classes there is 1 degree of freedom, and the critical value at p = 0.05 is 3.84; because 1.60 is less than 3.84, the student fails to reject the 3:1 hypothesis.\n\n(A) is wrong because 0.40 is only the dominant-class term, 36/90; the recessive-class term of 1.20 must also be added to get χ².\n(B) is wrong because 1.20 is only the recessive-class term, 36/30; χ² is the sum over both classes, 0.40 + 1.20 = 1.60.\n(D) is wrong because 3.84 is the critical value from the table for 1 degree of freedom at p = 0.05, not the calculated χ² value."
  },
  {
   "id": "be1-32",
   "unit": 7,
   "setId": "be1-set7",
   "stem": "Which organism is most closely related to the mouse?",
   "choices": [
    "Frog",
    "Salmon",
    "Lamprey",
    "Lizard"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Lizard. On a cladogram, relatedness is measured by how recently two taxa share a common ancestor, not by how close their names are or how similar they look. The last branch point splits the mouse and the lizard, making them sister taxa. They share a more recent common ancestor with each other than either shares with the frog, salmon, or lamprey. The table agrees: only these two have the amniotic egg.\n\n(A) is wrong because the frog branched off before the mouse–lizard split, so it shares a more distant common ancestor with the mouse.\n(B) is wrong because the salmon diverged even earlier, before the frog, so its common ancestor with the mouse is older than the lizard's.\n(C) is wrong because the lamprey is the first branch on the tree (the outgroup), so it is the most distantly related organism to the mouse."
  },
  {
   "id": "be1-33",
   "unit": 7,
   "setId": "be1-set7",
   "stem": "Which statement is best supported by the data?",
   "choices": [
    "The amniotic egg evolved independently in the lizard and in the mouse lineages.",
    "The amniotic egg evolved once, in the common ancestor of the lizard and the mouse.",
    "Four limbs evolved in the common ancestor of all five of the organisms shown.",
    "Jaws evolved once in the common ancestor of the lamprey and the salmon."
   ],
   "correct": 1,
   "explanation": "Correct: (B) The amniotic egg evolved once, in the common ancestor of the lizard and the mouse. The table shows the amniotic egg in only the lizard and the mouse, and the cladogram shows them as sister taxa. The most parsimonious explanation (fewest evolutionary changes) is that the trait arose once, in their most recent common ancestor, and was inherited by both. This places the amniotic egg as a shared derived character on the branch leading to the mouse–lizard clade.\n\n(A) is wrong because independent origins would require two separate evolutionary events, while one origin in their common ancestor explains the shared trait with fewer changes.\n(C) is wrong because the table shows four limbs are absent in the lamprey and salmon, so they arose later, in the ancestor of frog, lizard, and mouse.\n(D) is wrong because the lamprey lacks jaws in the table, so jaws evolved after the lamprey branched off, in the ancestor of salmon and the later taxa."
  },
  {
   "id": "be1-34",
   "unit": 1,
   "stem": "Which level of protein structure is stabilized mainly by hydrogen bonds between atoms in the polypeptide backbone, forming α-helices and β-pleated sheets?",
   "choices": [
    "Primary structure",
    "Tertiary structure",
    "Secondary structure",
    "Quaternary structure"
   ],
   "correct": 2,
   "explanation": "Correct: (C) Secondary structure. Secondary structure consists of local folding patterns, the α-helix and the β-pleated sheet, held together by hydrogen bonds between the C=O of one peptide group and the N–H of another along the polypeptide backbone. Because these bonds involve backbone atoms, not R groups, the same patterns form in many different proteins regardless of amino acid sequence.\n\n(A) is wrong because primary structure is the sequence of amino acids held together by covalent peptide bonds, not hydrogen-bonded helices and sheets.\n(B) is wrong because tertiary structure is the overall 3-D shape stabilized mainly by interactions among R groups (side chains), not backbone hydrogen bonds.\n(D) is wrong because quaternary structure is the association of two or more polypeptide subunits, such as the four chains of hemoglobin."
  },
  {
   "id": "be1-35",
   "unit": 4,
   "stem": "Which of the following events during meiosis contributes most directly to genetic variation among the gametes of a single individual?",
   "choices": [
    "The replication of the DNA during the S phase of the cell cycle",
    "The separation of sister chromatids during anaphase of meiosis II",
    "The attachment of spindle fibers to the kinetochores in prophase",
    "Crossing over and the independent assortment of homologous chromosomes"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Crossing over and the independent assortment of homologous chromosomes. Two meiotic events shuffle alleles. Crossing over in prophase I swaps segments between non-sister chromatids of homologous chromosomes, creating new allele combinations on a chromosome. Independent assortment in metaphase I orients each homologous pair randomly, giving 2<sup>n</sup> combinations of maternal and paternal chromosomes (2²³ ≈ 8.4 million in humans). Together they make nearly every gamete genetically unique.\n\n(A) is wrong because DNA replication copies chromosomes accurately to make identical sister chromatids, so it does not generate new combinations of alleles.\n(B) is wrong because sister chromatids are copies of each other (apart from crossovers), so separating them in meiosis II does not itself create new combinations.\n(C) is wrong because spindle fibers attaching to kinetochores moves chromosomes but does not change which alleles go together into a gamete."
  },
  {
   "id": "be1-36",
   "unit": 5,
   "setId": "be1-set8",
   "stem": "Which mode of inheritance is most consistent with this pedigree?",
   "choices": [
    "Autosomal recessive",
    "Autosomal dominant",
    "X-linked recessive",
    "Y-linked"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Autosomal recessive. Two unaffected parents (I-1 and I-2) have an affected daughter (II-1), so the trait skips the parents' generation and must be recessive, with both parents carriers. It cannot be X-linked recessive, because an affected daughter would need a recessive X from her father, who would then be affected too. That leaves autosomal recessive: Aa × Aa produces aa offspring 1/4 of the time.\n\n(B) is wrong because an autosomal dominant trait in a child requires at least one affected parent, but both parents here are unaffected.\n(C) is wrong because an affected daughter (X<sup>a</sup>X<sup>a</sup>) must inherit X<sup>a</sup> from her father, who would then show the trait, but I-1 is unaffected.\n(D) is wrong because Y-linked traits pass only from father to son, so an affected daughter is impossible, and the father here is unaffected anyway."
  },
  {
   "id": "be1-37",
   "unit": 5,
   "setId": "be1-set8",
   "stem": "What is the probability that II-3, who does not show the trait, is a carrier of the allele?",
   "choices": [
    "3/4",
    "2/3",
    "1/2",
    "1/4"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2/3. Both parents are carriers (Aa × Aa), giving offspring 1/4 AA, 2/4 Aa, and 1/4 aa. II-3 does not show the trait, so she cannot be aa; we condition only on the unaffected outcomes, AA and Aa, which total 3/4. The probability she is a carrier is (2/4) ÷ (3/4) = 2/3.\n\n(A) is wrong because 3/4 is the probability that any child of two carriers is unaffected (AA or Aa), not the probability of being a carrier.\n(C) is wrong because 1/2 is the chance that a child of two carriers is Aa before the phenotype is known; knowing II-3 is unaffected removes aa from consideration.\n(D) is wrong because 1/4 is the probability of an aa (affected) child, which is already ruled out because II-3 does not show the trait."
  },
  {
   "id": "be1-38",
   "unit": 6,
   "stem": "Which of the following events occurs during the processing of a eukaryotic pre-mRNA before the mRNA is translated?",
   "choices": [
    "Exons are removed from the transcript and the introns are joined together.",
    "Introns are spliced out, a 5′ cap is added, and a poly-A tail is added.",
    "The mRNA is converted into DNA by the enzyme reverse transcriptase.",
    "A ribosome attaches to the pre-mRNA while it is still in the nucleus."
   ],
   "correct": 1,
   "explanation": "Correct: (B) Introns are spliced out, a 5′ cap is added, and a poly-A tail is added. In eukaryotes, pre-mRNA is processed in the nucleus before export. Spliceosomes remove the introns and join the exons; a modified guanine (7-methylguanosine) cap is added to the 5′ end; and a poly-A tail of about 50–250 adenines is added to the 3′ end. The cap and tail protect the mRNA from degradation, aid export through nuclear pores, and help ribosomes bind.\n\n(A) is wrong because this reverses splicing; introns are the noncoding regions that are removed, and exons are the coding regions joined together.\n(C) is wrong because reverse transcriptase copies RNA into DNA in retroviruses; it is not part of normal mRNA processing in eukaryotic cells.\n(D) is wrong because eukaryotic translation occurs in the cytoplasm after the processed mRNA is exported; ribosomes do not translate pre-mRNA in the nucleus."
  },
  {
   "id": "be1-39",
   "unit": 8,
   "stem": "A forest is cleared by a fire, but the soil remains intact. Which of the following best describes the process by which the community recovers?",
   "choices": [
    "Primary succession, which begins on bare rock with no soil present",
    "A climax community, which forms immediately after the fire ends",
    "Secondary succession, which begins with soil that already has seeds",
    "Ecological equilibrium, which stops all further change in the forest"
   ],
   "correct": 2,
   "explanation": "Correct: (C) Secondary succession, which begins with soil that already has seeds. Secondary succession occurs after a disturbance such as fire, flooding, or logging removes the existing community but leaves the soil. The soil already contains nutrients, seeds, roots, and microorganisms, so pioneer plants such as grasses and shrubs return quickly, followed by trees. Recovery is much faster than primary succession, which must first build soil from bare rock.\n\n(A) is wrong because primary succession begins on bare rock or new land with no soil, but the stem states that the soil remains intact after the fire.\n(B) is wrong because a climax community is the relatively stable end point of succession, reached only after many years, not immediately after a fire.\n(D) is wrong because communities keep changing after a disturbance; ecological equilibrium does not stop change, and recovery proceeds through succession."
  },
  {
   "id": "be1-40",
   "unit": 7,
   "stem": "The forelimb of a human, the wing of a bat, and the flipper of a whale have similar bone arrangements but different functions. This is best explained by which of the following?",
   "choices": [
    "The structures are homologous, inherited with modification from a common ancestor.",
    "The structures are analogous, evolved independently to perform different functions.",
    "The structures are vestigial, having lost their function in each species.",
    "The structures result from convergent evolution in similar environments."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The structures are homologous, inherited with modification from a common ancestor. Homologous structures share the same basic bone arrangement (one upper-arm bone, two forearm bones, wrist bones, and digits) because they are inherited from a common ancestor. Natural selection then modified them for different functions, such as grasping, flying, and swimming. Similar structure with different function is the hallmark of homology and is evidence of common descent.\n\n(B) is wrong because analogous structures have similar functions but different evolutionary origins and different underlying structure, the opposite of what the stem describes.\n(C) is wrong because vestigial structures have lost most or all of their function, but the arm, wing, and flipper are all fully functional.\n(D) is wrong because convergent evolution produces analogous structures in unrelated lineages; these limbs share structure because of common ancestry, and their environments differ."
  },
  {
   "id": "be1-41",
   "unit": 7,
   "stem": "In the Miller–Urey experiment, a mixture of gases (methane, ammonia, hydrogen, and water vapor) was exposed to electrical sparks, and organic molecules, including amino acids, formed. What did this experiment demonstrate?",
   "choices": [
    "Living cells formed spontaneously from the simple gases in the apparatus",
    "Organic molecules can form from simple inorganic substances on early Earth",
    "Oxygen was abundant in Earth's early atmosphere and drove the reactions",
    "RNA was the first molecule that could replicate itself on early Earth"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Organic molecules can form from simple inorganic substances on early Earth. Miller and Urey passed electric sparks, simulating lightning, through a mixture of CH₄, NH₃, H₂, and H₂O vapor modeling a reducing early atmosphere. Within days, organic molecules including several amino acids formed. This showed that the building blocks of life can form abiotically from simple inorganic substances given an energy source, supporting the Oparin–Haldane hypothesis.\n\n(A) is wrong because the experiment produced organic monomers such as amino acids, not living cells; no cells formed in the apparatus.\n(C) is wrong because the gas mixture contained no free oxygen, and an O₂-rich atmosphere would have destroyed the organic molecules instead of forming them.\n(D) is wrong because the experiment made no RNA and did not test self-replication; the RNA world hypothesis is supported by other evidence, such as ribozymes."
  },
  {
   "id": "be1-42",
   "unit": 4,
   "stem": "A signaling molecule binds to a receptor on the surface of a target cell and triggers a series of phosphorylation reactions inside the cell. What is a major advantage of this type of signal transduction pathway?",
   "choices": [
    "The signaling molecule enters the nucleus and directly changes gene expression.",
    "The signal is passed from one cell to the next through gap junctions only",
    "The response occurs quickly because no enzymes are involved at any step",
    "The signal is amplified, so a few ligand molecules cause a large response"
   ],
   "correct": 3,
   "explanation": "Correct: (D) The signal is amplified, so a few ligand molecules cause a large response. In a phosphorylation cascade, the activated receptor activates a protein kinase, and each kinase molecule phosphorylates and activates many molecules of the next kinase. Because each step multiplies the number of active molecules, a few ligand molecules binding at the surface produce a very large number of activated proteins at the end. This amplification lets a small signal cause a large response.\n\n(A) is wrong because the ligand binds a cell-surface receptor and stays outside the cell; the message is relayed inward by the cascade rather than by the ligand.\n(B) is wrong because gap junctions connect neighboring cells directly, but this pathway relays a signal from a surface receptor within one cell.\n(C) is wrong because the protein kinases in a phosphorylation cascade are enzymes, so enzymes are involved at every step of this pathway."
  },
  {
   "id": "be1-43",
   "unit": 5,
   "stem": "Genes A, B, and C are being mapped in an organism. In a testcross involving genes A and B, recombinant offspring make up 5% of the total. In a testcross involving genes A and C, recombinant offspring make up 30% of the total. What can be concluded?",
   "choices": [
    "Genes A and C are closer together on the chromosome than genes A and B.",
    "Genes A and B are on different chromosomes.",
    "Genes A and B are closer together on the chromosome than genes A and C.",
    "Genes A and C assort independently."
   ],
   "correct": 2,
   "explanation": "Correct: (C) Genes A and B are closer together on the chromosome than genes A and C. Crossing over can occur anywhere along a chromosome, so the farther apart two genes are, the more often a crossover falls between them and the more recombinant offspring appear. Recombination frequency therefore estimates map distance: 5% for A and B is about 5 map units, and 30% for A and C is about 30 map units. Both are below 50%, so both pairs are linked, with A and B closer together.\n\n(A) is wrong because the higher recombination frequency (30%) for A and C means they are farther apart, not closer, than A and B (5%).\n(B) is wrong because genes on different chromosomes assort independently and give about 50% recombinants; 5% shows that A and B are tightly linked.\n(D) is wrong because independent assortment gives about 50% recombinants; 30% is well below 50%, so A and C are linked on the same chromosome."
  },
  {
   "id": "be1-44",
   "unit": 1,
   "stem": "Some insects can walk across the surface of a pond without sinking. Which property of water best explains this?",
   "choices": [
    "Water is a universal solvent, so the insect's feet dissolve into the surface.",
    "Water has a high specific heat, which keeps the surface rigid.",
    "Water molecules are nonpolar and repel the insect's feet.",
    "Cohesion between water molecules, caused by hydrogen bonding, creates surface tension."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Cohesion between water molecules, caused by hydrogen bonding, creates surface tension. Water molecules are polar, and each can hydrogen bond with up to four neighbors. At the surface, molecules are pulled inward and sideways by the hydrogen bonds below and beside them, with none above, so the surface behaves like a stretched elastic film. This surface tension, a result of cohesion, can support the small weight of an insect spread over its feet.\n\n(A) is wrong because water dissolves many polar and ionic substances, but insect feet do not dissolve, and dissolving would not hold an insect up.\n(B) is wrong because high specific heat lets water resist temperature change; it does not make the surface rigid or support weight.\n(C) is wrong because water molecules are polar, not nonpolar, and it is hydrogen bonding among water molecules that creates the supportive surface tension."
  },
  {
   "id": "be1-45",
   "unit": 5,
   "stem": "Two pea plants that are heterozygous for two independently assorting genes (AaBb) are crossed. What is the probability that an offspring has the genotype aabb?",
   "choices": [
    "1/16",
    "1/8",
    "1/4",
    "9/16"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 1/16. Because the genes assort independently, treat each gene separately and multiply. From Aa × Aa, P(aa) = 1/4; from Bb × Bb, P(bb) = 1/4. By the product rule, P(aabb) = (1/4)(1/4) = 1/16. This matches the 9:3:3:1 dihybrid ratio, in which 1 of 16 offspring shows both recessive traits.\n\n(B) is wrong because 1/8 multiplies 1/4 by 1/2, as if one of the genes came from a testcross (Bb × bb); both parents here are heterozygous for both genes.\n(C) is wrong because 1/4 is the probability for one gene only (aa); the probability of bb must also be multiplied in.\n(D) is wrong because 9/16 is the probability of showing both dominant traits (A_B_), not of being homozygous recessive for both genes."
  },
  {
   "id": "be1-46",
   "unit": 8,
   "stem": "A population of 500 mice has 60 births and 20 deaths in a year, with no immigration or emigration. What is the per capita population growth rate (r)?",
   "choices": [
    "0.04",
    "0.08",
    "0.12",
    "40"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.08. The per capita growth rate is the net change in population per individual over the time interval: r = (B − D)/N. With 60 births and 20 deaths, the net increase is 60 − 20 = 40 individuals. Dividing by N = 500 gives r = 40/500 = 0.08 per individual per year, which is an 8% annual increase.\n\n(A) is wrong because 0.04 is 20/500, the per capita death rate alone, not the net growth rate (births minus deaths).\n(C) is wrong because 0.12 is 60/500, the per capita birth rate alone; deaths must be subtracted before dividing by N.\n(D) is wrong because 40 is the total net increase in individuals (60 − 20); it must be divided by the population size to give a per capita rate."
  },
  {
   "id": "be1-47",
   "unit": 2,
   "stem": "Which of the following processes requires the direct input of cellular energy (ATP)?",
   "choices": [
    "Diffusion of oxygen across the plasma membrane",
    "Movement of water through aquaporins",
    "Movement of Na⁺ out of a cell and K⁺ into the cell by the sodium–potassium pump",
    "Facilitated diffusion of glucose into a cell through a channel protein"
   ],
   "correct": 2,
   "explanation": "Correct: (C) Movement of Na⁺ out of a cell and K⁺ into the cell by the sodium–potassium pump. The Na⁺/K⁺ pump hydrolyzes one ATP to move 3 Na⁺ out of the cell and 2 K⁺ into it, both against their concentration gradients. Moving a substance from low to high concentration is active transport and requires a direct energy input; the phosphate from ATP changes the pump's shape. The other choices all move substances down their gradients without ATP.\n\n(A) is wrong because small nonpolar O₂ diffuses directly through the lipid bilayer down its concentration gradient, which is passive and uses no ATP.\n(B) is wrong because water moves through aquaporins by osmosis, a form of passive transport down the water potential gradient that uses no ATP.\n(D) is wrong because facilitated diffusion moves glucose down its concentration gradient through a transport protein, so it is passive and does not use ATP."
  },
  {
   "id": "be1-48",
   "unit": 3,
   "stem": "In the Calvin cycle, how many molecules of CO₂ must be fixed to produce one molecule of the three-carbon sugar glyceraldehyde-3-phosphate (G3P) that exits the cycle?",
   "choices": [
    "1",
    "2",
    "3",
    "6"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 3. Each turn of the Calvin cycle fixes one CO₂ onto ribulose bisphosphate (RuBP, 5 carbons) using rubisco. Three turns fix 3 CO₂ (3 carbons) and produce 6 G3P (18 carbons); 5 G3P (15 carbons) are used to regenerate 3 RuBP, leaving 1 G3P (3 carbons) as net output. One G3P therefore needs 3 CO₂, at a cost of 9 ATP and 6 NADPH.\n\n(A) is wrong because one CO₂ adds only one carbon, but G3P is a three-carbon sugar, so three CO₂ molecules must be fixed.\n(B) is wrong because two CO₂ supply only two carbons, not enough for one three-carbon G3P to leave the cycle.\n(D) is wrong because 6 CO₂ (six turns) are needed for two G3P, which together make one six-carbon glucose, not for one G3P."
  },
  {
   "id": "be1-49",
   "unit": 1,
   "stem": "Which of the following classes of biological molecules always contains phosphorus?",
   "choices": [
    "Nucleic acids",
    "Proteins",
    "Carbohydrates",
    "Triglycerides"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Nucleic acids. Every nucleotide in DNA and RNA contains a phosphate group (PO₄³⁻), and the nucleotides are joined by phosphodiester bonds, so all nucleic acids contain phosphorus. Amino acids contain C, H, O, and N (S in cysteine and methionine), and proteins gain phosphate only when phosphorylated, while carbohydrates and triglycerides contain only C, H, and O. Phospholipids also contain phosphorus, but triglycerides do not.\n\n(B) is wrong because amino acids contain C, H, O, N, and sometimes S but no phosphorus; a protein carries phosphate only if it is phosphorylated after translation, so proteins do not always contain phosphorus.\n(C) is wrong because carbohydrates such as glucose and starch contain only carbon, hydrogen, and oxygen, typically in a 1:2:1 ratio.\n(D) is wrong because triglycerides are glycerol plus three fatty acids and contain only C, H, and O; phospholipids, not triglycerides, contain phosphate."
  },
  {
   "id": "be1-50",
   "unit": 3,
   "stem": "In many cells, energy released by the exergonic hydrolysis of ATP is used to drive endergonic reactions. Which statement best describes this process?",
   "choices": [
    "Feedback inhibition, in which the product of a reaction inhibits an enzyme",
    "Energy coupling, in which an exergonic reaction powers an endergonic reaction",
    "Allosteric activation, in which a bound molecule increases enzyme activity",
    "Fermentation, in which ATP is produced in the absence of any oxygen supply"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Energy coupling, in which an exergonic reaction powers an endergonic reaction. Energy coupling uses the energy released by an exergonic reaction to drive an endergonic one. ATP hydrolysis (ΔG ≈ −30.5 kJ/mol) is linked to the endergonic reaction, usually by transferring a phosphate group to a reactant. The phosphorylated intermediate is less stable, so the combined process has an overall negative ΔG and proceeds spontaneously.\n\n(A) is wrong because feedback inhibition is a way of regulating pathways in which an end product inhibits an earlier enzyme; it does not use ATP to drive reactions.\n(C) is wrong because allosteric activation regulates enzyme activity by binding at a site other than the active site; it is not how ATP energy is transferred.\n(D) is wrong because fermentation regenerates NAD⁺ so glycolysis can make ATP without oxygen; it produces ATP rather than describing how ATP powers reactions."
  },
  {
   "id": "be1-51",
   "unit": 6,
   "stem": "In E. coli, the lac operon is regulated by a repressor protein. When lactose is present in the cell, what happens?",
   "choices": [
    "Allolactose binds the repressor, which releases the operator and allows transcription",
    "Lactose binds to the promoter and blocks the attachment of RNA polymerase",
    "Lactose binds directly to RNA polymerase and activates the enzyme",
    "The repressor binds more tightly to the operator and prevents transcription"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Allolactose binds the repressor, which releases the operator and allows transcription. The lac operon is inducible. Without lactose, the lacI repressor binds the operator and blocks RNA polymerase. When lactose is present, some is converted to allolactose, which binds the repressor allosterically and changes its shape so it releases the operator. RNA polymerase can then transcribe lacZ, lacY, and lacA, including lacY (permease, which takes up lactose) and lacZ (β-galactosidase, which breaks it down).\n\n(B) is wrong because lactose does not bind the promoter; its isomer allolactose binds the repressor, which removes the block to transcription.\n(C) is wrong because lactose does not interact directly with RNA polymerase; its effect works through the repressor (and, separately, the CAP–cAMP activator).\n(D) is wrong because the repressor binds tightly to the operator when lactose is absent; allolactose removes it, so lactose turns transcription on, not off."
  },
  {
   "id": "be1-52",
   "unit": 8,
   "setId": "be1-set9",
   "stem": "Which statement best explains why the energy decreases at each higher trophic level?",
   "choices": [
    "Consumers at higher trophic levels are less efficient at capturing the energy of sunlight directly",
    "Energy is converted into matter at each trophic level, so less remains available as energy",
    "Energy is recycled back to the producers by decomposers and is therefore not available above",
    "Most of the energy at each level is lost as heat or is not assimilated by the next level"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Most of the energy at each level is lost as heat or is not assimilated by the next level. Energy transfer between trophic levels is inefficient, usually about 10%, as the pyramid shows: 10,000 → 1,000 → 100 kJ. At each level most energy is used for the organisms' own cellular respiration and is lost as heat, and some biomass is never eaten, digested, or assimilated and passes to decomposers. Only the energy stored in new biomass is available to the next level.\n\n(A) is wrong because only producers capture sunlight; consumers get energy by eating other organisms, so sunlight capture does not explain the loss at each step.\n(B) is wrong because energy is not converted into matter in ecosystems; it is lost mainly as heat released during cellular respiration.\n(C) is wrong because energy is not recycled; it flows one way and leaves as heat, while nutrients (matter) are what decomposers recycle."
  },
  {
   "id": "be1-53",
   "unit": 8,
   "setId": "be1-set9",
   "stem": "If the pattern shown continues, approximately how much energy would be available to tertiary consumers?",
   "choices": [
    "1000 kJ",
    "100 kJ",
    "10 kJ",
    "1 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 10 kJ. The pyramid shows energy falling by a factor of 10 at each step: 10,000 kJ (producers) → 1,000 kJ (primary consumers) → 100 kJ (secondary consumers), about 10% transfer efficiency. Tertiary consumers are the next level, so they would receive about 10% of 100 kJ: 0.10 × 100 kJ = 10 kJ.\n\n(A) is wrong because 1000 kJ is the energy at the primary consumer level, two levels below the tertiary consumers, not the predicted next value.\n(B) is wrong because 100 kJ is the energy at the secondary consumer level; only about 10% of it passes to the tertiary consumers.\n(D) is wrong because 1 kJ would be two more 10-fold drops below 100 kJ, the level after the tertiary consumers (quaternary consumers)."
  },
  {
   "id": "be1-54",
   "unit": 4,
   "stem": "At the G₁ checkpoint of the cell cycle, a cell detects extensive DNA damage. Which of the following is the most likely outcome?",
   "choices": [
    "The cell enters S phase immediately, and the damage is repaired during replication.",
    "The cell skips mitosis and enters G₀ permanently, where it never divides again.",
    "The cycle is halted for repair, or the cell undergoes apoptosis if repair fails",
    "The damaged DNA is passed to both daughter cells without any change in the cell cycle."
   ],
   "correct": 2,
   "explanation": "Correct: (C) The cycle is halted for repair, or the cell undergoes apoptosis if repair fails. The G<sub>1</sub> checkpoint checks DNA integrity before the cell commits to replication. When damage is detected, p53 is activated and induces proteins such as p21 that inhibit Cdk–cyclin complexes, halting the cycle so the DNA can be repaired. If the damage is too severe to repair, p53 triggers apoptosis, preventing the mutation from being passed to daughter cells.\n\n(A) is wrong because the checkpoint exists to stop damaged DNA from being copied; entering S phase would replicate the damage and fix the mutations in place.\n(B) is wrong because the immediate response is a pause for repair; at G<sub>1</sub> the cell has not reached mitosis to skip it, and permanent G<sub>0</sub> is not automatic.\n(D) is wrong because a working checkpoint does change the cycle by halting it; passing damage on unchanged is what happens when checkpoints fail, as in cancer."
  },
  {
   "id": "be1-55",
   "unit": 7,
   "stem": "Which of the following scenarios is an example of allopatric speciation?",
   "choices": [
    "A population of plants doubles its chromosome number in one generation and can no longer breed with the parent population.",
    "A river changes course and splits a population of squirrels, and over many generations the two groups become reproductively isolated.",
    "Two species of fruit flies interbreed and produce fertile hybrids.",
    "A population of birds slowly changes in beak size over time without splitting."
   ],
   "correct": 1,
   "explanation": "Correct: (B) A river changes course and splits a population of squirrels, and over many generations the two groups become reproductively isolated. Allopatric speciation (\"other homeland\") begins when a geographic barrier physically separates a population. Once the river splits the squirrels, gene flow between the two groups stops. Over many generations, different mutations, natural selection, and genetic drift act independently in each group, so they diverge until they are reproductively isolated and cannot interbreed even if they meet again.\n\n(A) is wrong because a polyploid population arises within the parent population's range with no geographic barrier, which is sympatric speciation, not allopatric.\n(C) is wrong because producing fertile hybrids shows that the two groups are not reproductively isolated, so this is not speciation at all.\n(D) is wrong because gradual change in one unsplit population is anagenesis (evolution within a lineage) and produces no new species by geographic separation."
  },
  {
   "id": "be1-56",
   "unit": 8,
   "setId": "be1-set10",
   "stem": "Which statement best explains why the lynx population peaks after the hare population?",
   "choices": [
    "The lynx population increases first and causes the hare population to increase.",
    "Lynx and hares compete for the same food, so their populations rise and fall independently.",
    "An increase in the hare population provides more food, so the lynx population grows after a delay.",
    "Hares are consumers of lynx, so the hare population controls the lynx population."
   ],
   "correct": 2,
   "explanation": "Correct: (C) An increase in the hare population provides more food, so the lynx population grows after a delay. The graph shows lynx peaks (about 110,000) occurring roughly 1–2 years after each hare peak (about 160,000). Lynx depend on hares for food, so when hares are abundant, more lynx survive and reproduce, but the predator population needs time, about one breeding cycle, to grow. As lynx numbers rise they eat more hares, the hare population falls, and then the lynx population declines.\n\n(A) is wrong because the graph shows hare peaks coming first, and predators reduce prey rather than causing prey numbers to rise.\n(B) is wrong because lynx are predators of hares, not competitors, and the curves rise and fall in a linked, repeating pattern rather than independently.\n(D) is wrong because this reverses the relationship; the stem states that lynx are the predators of hares, not the other way around."
  },
  {
   "id": "be1-57",
   "unit": 8,
   "setId": "be1-set10",
   "stem": "Which concept is best illustrated by the cyclic pattern in the graph?",
   "choices": [
    "Exponential growth with no limiting factors",
    "Primary succession",
    "Positive feedback that increases both populations indefinitely",
    "Negative feedback between predator and prey populations"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Negative feedback between predator and prey populations. Negative feedback occurs when a change triggers a response that opposes it. As hares increase, lynx increase; more lynx eat more hares, so hares decline; fewer hares then cause lynx to decline, letting hares recover. Each population's growth sets up its own reversal, producing the repeating cycles of about 10 years in the graph rather than unlimited growth.\n\n(A) is wrong because exponential growth with no limits would give a J-shaped curve that keeps rising, not regular oscillations up and down.\n(B) is wrong because primary succession is the gradual change in species composition on newly formed land, not cycles in two populations.\n(C) is wrong because positive feedback would amplify change in one direction indefinitely, but both populations repeatedly rise and then fall."
  },
  {
   "id": "be1-58",
   "unit": 3,
   "stem": "In a plant cell, in which location do the light-dependent reactions of photosynthesis take place?",
   "choices": [
    "The thylakoid membranes of the chloroplast",
    "The stroma of the chloroplast",
    "The inner membrane of the mitochondrion",
    "The cytosol"
   ],
   "correct": 0,
   "explanation": "Correct: (A) The thylakoid membranes of the chloroplast. The light-dependent reactions take place in the thylakoid membranes of the chloroplast, where photosystems I and II, the electron transport chain, and ATP synthase are embedded. Light energy splits water, releasing O₂, and drives the production of ATP and NADPH. Protons are pumped into the thylakoid lumen, and ATP is made as they flow back to the stroma.\n\n(B) is wrong because the stroma is where the Calvin cycle (light-independent reactions) uses ATP and NADPH to fix CO₂, not where light is captured.\n(C) is wrong because the inner mitochondrial membrane holds the electron transport chain of cellular respiration, not the photosystems of photosynthesis.\n(D) is wrong because glycolysis occurs in the cytosol, but photosynthesis takes place inside chloroplasts and has no light reactions in the cytosol."
  },
  {
   "id": "be1-59",
   "unit": 6,
   "setId": "be1-set11",
   "stem": "What is the approximate size of the plasmid?",
   "choices": [
    "1,000 bp",
    "2,000 bp",
    "3,000 bp",
    "6,000 bp"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 3,000 bp. A restriction enzyme that cuts a circular plasmid at n sites produces n fragments, and because nothing is lost from a circle, the fragment sizes add up to the plasmid size. The digested lane shows two bands aligned with the 2000 bp and 1000 bp ladder bands, so the plasmid is 2000 + 1000 = 3000 bp. The uncut circular plasmid does not run at its true size, so its band (near 4000 bp) cannot be used.\n\n(A) is wrong because 1,000 bp is only the smaller fragment; the plasmid includes both fragments, so its size is their sum.\n(B) is wrong because 2,000 bp is only the larger fragment; the 1,000 bp fragment is also part of the circular plasmid.\n(D) is wrong because 6,000 bp doubles the correct total; cutting a circle at two sites gives two fragments whose sizes sum once to the plasmid size."
  },
  {
   "id": "be1-60",
   "unit": 6,
   "setId": "be1-set11",
   "stem": "Why do the smaller DNA fragments travel farther through the gel than the larger fragments?",
   "choices": [
    "Smaller fragments carry a greater negative charge per unit length.",
    "Smaller fragments move more easily through the pores of the gel matrix.",
    "Smaller fragments are attracted to the negative electrode.",
    "Smaller fragments are denatured by the electric current."
   ],
   "correct": 1,
   "explanation": "Correct: (B) Smaller fragments move more easily through the pores of the gel matrix. DNA is negatively charged because of its phosphate backbone and moves toward the positive electrode (+). Each nucleotide adds roughly the same charge and mass, so all fragments have about the same charge-to-mass ratio. The agarose gel acts as a molecular sieve: smaller fragments slip through its pores more easily and travel farther, separating the fragments by size.\n\n(A) is wrong because every nucleotide carries one phosphate, so the charge per unit length is the same for all fragments regardless of size.\n(C) is wrong because DNA is negatively charged and is attracted to the positive electrode, which is why all the fragments move away from the wells.\n(D) is wrong because the electric current does not denature DNA in a standard agarose gel, and denaturation would not explain separation by size."
  }
 ],
 "sets": {
  "be1-set1": {
   "text": "A U-shaped tube is divided into two sides by a membrane that is permeable to water but not to sucrose. At the start of the experiment, the two sides have equal volumes and contain sucrose solutions of different concentrations, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M80 40L80 200Q80 220 100 220L260 220Q280 220 280 200L280 40\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M160 40L160 190L200 190L200 40\" fill=\"none\" stroke=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"81.5\" y=\"104\" width=\"94\" height=\"96\" fill=\"#D8E8F2\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"184.5\" y=\"104\" width=\"94\" height=\"96\" fill=\"#D8E8F2\" stroke=\"none\" stroke-width=\"1.6\"/><line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"220\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"180\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#D2705A\">membrane</text><circle cx=\"92\" cy=\"118\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"129\" cy=\"171\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"93\" cy=\"148\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"130\" cy=\"125\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"195\" cy=\"118\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"232\" cy=\"171\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"196\" cy=\"148\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"233\" cy=\"125\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"197\" cy=\"178\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"234\" cy=\"155\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"198\" cy=\"132\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"235\" cy=\"185\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"199\" cy=\"162\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"236\" cy=\"139\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"200\" cy=\"192\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"237\" cy=\"169\" r=\"3.4\" fill=\"#3F7A94\"/><text x=\"130\" y=\"244\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.2 M sucrose</text><text x=\"230\" y=\"244\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.6 M sucrose</text></svg>",
     "alt": "A U-shaped tube with a dashed membrane in the middle. The left side contains 0.2 molar sucrose with a few dots representing solute, and the right side contains 0.6 molar sucrose with many dots. Both sides start at the same liquid level.",
     "maxWidth": 380
    }
   ]
  },
  "be1-set2": {
   "text": "Researchers treated cultured cells with Drug X and determined the percentage of cells in each phase of the cell cycle after 24 hours. Untreated cells were used as a control. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"258\" x2=\"400\" y2=\"258\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"262\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"224\" x2=\"400\" y2=\"224\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"228\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"190\" x2=\"400\" y2=\"190\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"194\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"156\" x2=\"400\" y2=\"156\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"160\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"64\" y1=\"122\" x2=\"400\" y2=\"122\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"126\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"88\" x2=\"400\" y2=\"88\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"92\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"64\" y1=\"54\" x2=\"400\" y2=\"54\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"58\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">70</text><line x1=\"64\" y1=\"258\" x2=\"400\" y2=\"258\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"258\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"76.6\" y=\"54\" width=\"26.4\" height=\"204\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><rect x=\"106\" y=\"190\" width=\"26.4\" height=\"68\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1\"/><text x=\"106\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">G1</text><rect x=\"160.6\" y=\"190\" width=\"26.4\" height=\"68\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><rect x=\"190\" y=\"207\" width=\"26.4\" height=\"51\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1\"/><text x=\"190\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">S</text><rect x=\"244.6\" y=\"217.2\" width=\"26.4\" height=\"40.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><rect x=\"274\" y=\"71\" width=\"26.4\" height=\"187\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1\"/><text x=\"274\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">G2</text><rect x=\"328.6\" y=\"230.8\" width=\"26.4\" height=\"27.2\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><rect x=\"358\" y=\"224\" width=\"26.4\" height=\"34\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1\"/><text x=\"358\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">M</text><text x=\"232\" y=\"312\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Phase of the cell cycle</text><text x=\"16\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 139)\">Cells in each phase (%)</text><rect x=\"412\" y=\"22\" width=\"14\" height=\"14\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><text x=\"432\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Control</text><rect x=\"412\" y=\"42\" width=\"14\" height=\"14\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1\"/><text x=\"432\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Drug X</text></svg>",
     "alt": "A bar graph of the percentage of cells in the G1, S, G2, and M phases for control cells and cells treated with Drug X. Control: G1 60, S 20, G2 12, M 8. Drug X: G1 20, S 15, G2 55, M 10."
    }
   ]
  },
  "be1-set3": {
   "text": "A student tests four unknown solutions, A–D, with three reagents: Benedict's solution (blue; turns orange-red when heated with reducing sugars), biuret reagent (blue; turns purple with peptide bonds), and iodine solution (amber; turns blue-black with starch). The results are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Solution",
       "Benedict's (after heating)",
       "Biuret",
       "Iodine"
      ],
      "rows": [
       [
        "A",
        "Blue",
        "Purple",
        "Amber"
       ],
       [
        "B",
        "Orange-red",
        "Blue",
        "Amber"
       ],
       [
        "C",
        "Blue",
        "Blue",
        "Blue-black"
       ],
       [
        "D",
        "Blue",
        "Blue",
        "Amber"
       ]
      ]
     }
    }
   ]
  },
  "be1-set4": {
   "text": "Beginning in 1977, a severe drought on an island greatly reduced the supply of small, soft seeds, leaving mostly large, hard seeds. Researchers measured the mean beak depth of a population of ground finches before and after the drought. Error bars show ±2 standard errors of the mean.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"276\" x2=\"456\" y2=\"276\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"280\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"233.33\" x2=\"456\" y2=\"233.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"237.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"190.67\" x2=\"456\" y2=\"190.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"194.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"148\" x2=\"456\" y2=\"148\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"152\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"105.33\" x2=\"456\" y2=\"105.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"109.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"62.67\" x2=\"456\" y2=\"62.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"66.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"20\" x2=\"456\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"276\" x2=\"456\" y2=\"276\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"276\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"139\" y=\"79.73\" width=\"43\" height=\"196.27\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><line x1=\"160.5\" y1=\"77.6\" x2=\"160.5\" y2=\"81.87\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><line x1=\"156.5\" y1=\"77.6\" x2=\"164.5\" y2=\"77.6\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><line x1=\"156.5\" y1=\"81.87\" x2=\"164.5\" y2=\"81.87\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><text x=\"162\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1976 (before drought)</text><rect x=\"335\" y=\"69.07\" width=\"43\" height=\"206.93\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><line x1=\"356.5\" y1=\"66.93\" x2=\"356.5\" y2=\"71.2\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><line x1=\"352.5\" y1=\"66.93\" x2=\"360.5\" y2=\"66.93\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><line x1=\"352.5\" y1=\"71.2\" x2=\"360.5\" y2=\"71.2\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><text x=\"358\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1978 (after drought)</text><text x=\"16\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 148)\">Mean beak depth (mm)</text></svg>",
     "alt": "A bar graph of mean beak depth in millimeters. Before the drought in 1976 the mean is 9.2, and after the drought in 1978 it is 9.7. Each bar has small error bars of about 0.1.",
     "maxWidth": 460
    }
   ]
  },
  "be1-set5": {
   "text": "Two enzymes, X and Y, catalyze similar reactions in two different organisms. The activity of each enzyme was measured at several temperatures. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"218\" x2=\"400\" y2=\"218\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"222\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"174\" x2=\"400\" y2=\"174\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"178\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"134\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"86\" x2=\"400\" y2=\"86\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"90\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"42\" x2=\"400\" y2=\"42\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"46\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Temperature (°C)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Relative enzyme activity</text><path d=\"M64 261.8L66.4 261.73L68.8 261.65L71.2 261.55L73.6 261.43L76 261.26L78.4 261.06L80.8 260.82L83.2 260.51L85.6 260.13L88 259.67L90.4 259.11L92.8 258.44L95.2 257.63L97.6 256.67L100 255.52L102.4 254.17L104.8 252.6L107.2 250.76L109.6 248.63L112 246.18L114.4 243.38L116.8 240.2L119.2 236.61L121.6 232.57L124 228.08L126.4 223.1L128.8 217.63L131.2 211.64L133.6 205.15L136 198.15L138.4 190.66L140.8 182.71L143.2 174.33L145.6 165.57L148 156.48L150.4 147.13L152.8 137.61L155.2 127.99L157.6 118.38L160 108.89L162.4 99.61L164.8 90.66L167.2 82.16L169.6 74.22L172 66.95L174.4 60.45L176.8 54.81L179.2 50.12L181.6 46.44L184 43.85L186.4 42.37L188.8 42.18L191.2 48.37L193.6 62.69L196 83.49L198.4 108.51L200.8 135.3L203.2 161.6L205.6 185.62L208 206.22L210.4 222.89L212.8 235.68L215.2 244.99L217.6 251.45L220 255.72L222.4 258.41L224.8 260.03L227.2 260.96L229.6 261.47L232 261.74L234.4 261.88L236.8 261.95L239.2 261.98L241.6 261.99L244 262L246.4 262L248.8 262L251.2 262L253.6 262L256 262L258.4 262L260.8 262L263.2 262L265.6 262L268 262L270.4 262L272.8 262L275.2 262L277.6 262L280 262L282.4 262L284.8 262L287.2 262L289.6 262L292 262L294.4 262L296.8 262L299.2 262L301.6 262L304 262L306.4 262L308.8 262L311.2 262L313.6 262L316 262L318.4 262L320.8 262L323.2 262L325.6 262L328 262L330.4 262L332.8 262L335.2 262L337.6 262L340 262L342.4 262L344.8 262L347.2 262L349.6 262L352 262L354.4 262L356.8 262L359.2 262L361.6 262L364 262L366.4 262L368.8 262L371.2 262L373.6 262L376 262L378.4 262L380.8 262L383.2 262L385.6 262L388 262L390.4 262L392.8 262L395.2 262L397.6 262L400 262\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L66.4 262L68.8 262L71.2 262L73.6 262L76 261.99L78.4 261.99L80.8 261.99L83.2 261.99L85.6 261.99L88 261.98L90.4 261.98L92.8 261.98L95.2 261.97L97.6 261.96L100 261.96L102.4 261.95L104.8 261.94L107.2 261.92L109.6 261.91L112 261.89L114.4 261.87L116.8 261.85L119.2 261.82L121.6 261.78L124 261.74L126.4 261.69L128.8 261.64L131.2 261.58L133.6 261.5L136 261.41L138.4 261.32L140.8 261.2L143.2 261.07L145.6 260.92L148 260.74L150.4 260.55L152.8 260.32L155.2 260.06L157.6 259.77L160 259.44L162.4 259.07L164.8 258.65L167.2 258.18L169.6 257.65L172 257.05L174.4 256.39L176.8 255.66L179.2 254.84L181.6 253.93L184 252.93L186.4 251.83L188.8 250.61L191.2 249.28L193.6 247.82L196 246.23L198.4 244.49L200.8 242.61L203.2 240.56L205.6 238.36L208 235.98L210.4 233.42L212.8 230.67L215.2 227.74L217.6 224.6L220 221.27L222.4 217.73L224.8 213.99L227.2 210.04L229.6 205.88L232 201.52L234.4 196.96L236.8 192.2L239.2 187.25L241.6 182.11L244 176.81L246.4 171.34L248.8 165.73L251.2 159.98L253.6 154.12L256 148.16L258.4 142.13L260.8 136.04L263.2 129.92L265.6 123.79L268 117.69L270.4 111.63L272.8 105.65L275.2 99.78L277.6 94.03L280 88.45L282.4 83.07L284.8 77.9L287.2 72.98L289.6 68.35L292 64.01L294.4 60.01L296.8 56.35L299.2 53.08L301.6 50.19L304 47.72L306.4 45.68L308.8 44.08L311.2 42.93L313.6 42.23L316 42L318.4 45.1L320.8 54.12L323.2 68.35L325.6 86.63L328 107.64L330.4 129.92L332.8 152.14L335.2 173.18L337.6 192.2L340 208.68L342.4 222.4L344.8 233.42L347.2 241.94L349.6 248.32L352 252.93L354.4 256.16L356.8 258.34L359.2 259.77L361.6 260.68L364 261.24L366.4 261.58L368.8 261.77L371.2 261.88L373.6 261.94L376 261.97L378.4 261.98L380.8 261.99L383.2 262L385.6 262L388 262L390.4 262L392.8 262L395.2 262L397.6 262L400 262\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Enzyme X</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Enzyme Y</text></svg>",
     "alt": "A graph of relative enzyme activity against temperature. The curve for enzyme X peaks at 37 degrees Celsius and falls sharply above that. The curve for enzyme Y peaks near 75 degrees Celsius and falls sharply above that."
    }
   ]
  },
  "be1-set6": {
   "text": "A student uses the floating leaf disk assay to investigate photosynthesis. Leaf disks are infiltrated with a bicarbonate solution so that they sink. When the disks photosynthesize, oxygen collects inside and the disks rise. The student measures the time for 50% of the disks to float under several different light intensities. The data are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Light intensity (lux)",
       "Time for 50% of disks to float (min)"
      ],
      "rows": [
       [
        "0",
        "No disks floated"
       ],
       [
        "100",
        "18"
       ],
       [
        "400",
        "9"
       ],
       [
        "800",
        "5"
       ]
      ]
     }
    }
   ]
  },
  "be1-set7": {
   "text": "The cladogram shows the evolutionary relationships among five vertebrates. The table shows which of five characteristics are present (+) or absent (−) in each organism.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"338\" y=\"26\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Mouse</text><text x=\"338\" y=\"84.5\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Lizard</text><line x1=\"238.2\" y1=\"22\" x2=\"238.2\" y2=\"80.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"238.2\" y1=\"22\" x2=\"330\" y2=\"22\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"238.2\" y1=\"80.5\" x2=\"330\" y2=\"80.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"143\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Frog</text><line x1=\"177\" y1=\"51.25\" x2=\"177\" y2=\"139\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"177\" y1=\"51.25\" x2=\"238.2\" y2=\"51.25\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"177\" y1=\"139\" x2=\"330\" y2=\"139\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"201.5\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Salmon</text><line x1=\"115.8\" y1=\"95.13\" x2=\"115.8\" y2=\"197.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"115.8\" y1=\"95.13\" x2=\"177\" y2=\"95.13\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"115.8\" y1=\"197.5\" x2=\"330\" y2=\"197.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"260\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Lamprey</text><line x1=\"54.6\" y1=\"146.31\" x2=\"54.6\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"54.6\" y1=\"146.31\" x2=\"115.8\" y2=\"146.31\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"54.6\" y1=\"256\" x2=\"330\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"24\" y1=\"201.16\" x2=\"54.6\" y2=\"201.16\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>",
     "alt": "A cladogram of five vertebrates. Lamprey branches off first. Next to branch off is salmon, then frog. The last split separates mouse and lizard as sister groups."
    },
    {
     "table": {
      "headers": [
       "Organism",
       "Vertebral column",
       "Jaws",
       "Four limbs",
       "Amniotic egg",
       "Hair"
      ],
      "rows": [
       [
        "Lamprey",
        "+",
        "−",
        "−",
        "−",
        "−"
       ],
       [
        "Salmon",
        "+",
        "+",
        "−",
        "−",
        "−"
       ],
       [
        "Frog",
        "+",
        "+",
        "+",
        "−",
        "−"
       ],
       [
        "Lizard",
        "+",
        "+",
        "+",
        "+",
        "−"
       ],
       [
        "Mouse",
        "+",
        "+",
        "+",
        "+",
        "+"
       ]
      ]
     }
    }
   ]
  },
  "be1-set8": {
   "text": "The pedigree shows the inheritance of a rare trait in a family. Filled symbols represent individuals who show the trait.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 440 230\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"177\" y1=\"50\" x2=\"253\" y2=\"50\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"215\" y1=\"50\" x2=\"215\" y2=\"105\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"105\" x2=\"330\" y2=\"105\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"105\" x2=\"100\" y2=\"143\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"215\" y1=\"105\" x2=\"215\" y2=\"143\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"105\" x2=\"330\" y2=\"143\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"143\" y=\"33\" width=\"34\" height=\"34\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"160\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">I-1</text><circle cx=\"270\" cy=\"50\" r=\"17\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"270\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">I-2</text><circle cx=\"100\" cy=\"160\" r=\"17\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"100\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-1</text><rect x=\"198\" y=\"143\" width=\"34\" height=\"34\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"215\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-2</text><circle cx=\"330\" cy=\"160\" r=\"17\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"330\" y=\"192\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-3</text></svg>",
     "alt": "A pedigree. Generation I has an unaffected father and an unaffected mother. Their three children in generation II are an affected daughter (II-1, filled circle), an unaffected son (II-2), and an unaffected daughter (II-3).",
     "maxWidth": 440
    }
   ]
  },
  "be1-set9": {
   "text": "The diagram shows the energy available at each trophic level of a food chain in an ecosystem. Energy values represent the energy stored in the biomass of each level.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 260\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M25 250L235 250L200 170L60 170Z\" fill=\"#CFE3C8\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"231\" y1=\"210\" x2=\"262\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><text x=\"268\" y=\"209\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">Producers</text><text x=\"268\" y=\"226\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">10,000 kJ</text><path d=\"M60 170L200 170L165 90L95 90Z\" fill=\"#DCEBC0\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"196\" y1=\"130\" x2=\"262\" y2=\"130\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><text x=\"268\" y=\"129\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">Primary consumers</text><text x=\"268\" y=\"146\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">1,000 kJ</text><path d=\"M95 90L165 90L130 10L130 10Z\" fill=\"#F1E7B7\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"161\" y1=\"50\" x2=\"262\" y2=\"50\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><text x=\"268\" y=\"49\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">Secondary consumers</text><text x=\"268\" y=\"66\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">100 kJ</text></svg>",
     "alt": "A pyramid with three levels. The bottom level, producers, has 10,000 kilojoules. The middle level, primary consumers, has 1,000 kilojoules. The top level, secondary consumers, has 100 kilojoules.",
     "maxWidth": 520
    }
   ]
  },
  "be1-set10": {
   "text": "The graph shows changes in the sizes of a snowshoe hare population and a Canada lynx population over 30 years. Lynx are predators of hares.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"221.67\" x2=\"400\" y2=\"221.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"225.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"64\" y1=\"181.33\" x2=\"400\" y2=\"181.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"185.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"141\" x2=\"400\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">90</text><line x1=\"64\" y1=\"100.67\" x2=\"400\" y2=\"100.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"104.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"60.33\" x2=\"400\" y2=\"60.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"64.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">150</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">180</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"120\" y1=\"262\" x2=\"120\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"120\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"176\" y1=\"262\" x2=\"176\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"176\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"232\" y1=\"262\" x2=\"232\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"232\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">15</text><line x1=\"288\" y1=\"262\" x2=\"288\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"288\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"344\" y1=\"262\" x2=\"344\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"344\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">25</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Year</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Population size (thousands)</text><path d=\"M64 127.56L66.24 117.45L68.48 107.49L70.72 97.86L72.96 88.69L75.2 80.14L77.44 72.34L79.68 65.4L81.92 59.45L84.16 54.57L86.4 50.84L88.64 48.32L90.88 47.05L93.12 47.05L95.36 48.32L97.6 50.84L99.84 54.57L102.08 59.45L104.32 65.4L106.56 72.34L108.8 80.14L111.04 88.69L113.28 97.86L115.52 107.49L117.76 117.45L120 127.56L122.24 137.67L124.48 147.62L126.72 157.25L128.96 166.42L131.2 174.97L133.44 182.78L135.68 189.71L137.92 195.66L140.16 200.54L142.4 204.27L144.64 206.79L146.88 208.06L149.12 208.06L151.36 206.79L153.6 204.27L155.84 200.54L158.08 195.66L160.32 189.71L162.56 182.78L164.8 174.97L167.04 166.42L169.28 157.25L171.52 147.62L173.76 137.67L176 127.56L178.24 117.45L180.48 107.49L182.72 97.86L184.96 88.69L187.2 80.14L189.44 72.34L191.68 65.4L193.92 59.45L196.16 54.57L198.4 50.84L200.64 48.32L202.88 47.05L205.12 47.05L207.36 48.32L209.6 50.84L211.84 54.57L214.08 59.45L216.32 65.4L218.56 72.34L220.8 80.14L223.04 88.69L225.28 97.86L227.52 107.49L229.76 117.45L232 127.56L234.24 137.67L236.48 147.62L238.72 157.25L240.96 166.42L243.2 174.97L245.44 182.78L247.68 189.71L249.92 195.66L252.16 200.54L254.4 204.27L256.64 206.79L258.88 208.06L261.12 208.06L263.36 206.79L265.6 204.27L267.84 200.54L270.08 195.66L272.32 189.71L274.56 182.78L276.8 174.97L279.04 166.42L281.28 157.25L283.52 147.62L285.76 137.67L288 127.56L290.24 117.45L292.48 107.49L294.72 97.86L296.96 88.69L299.2 80.14L301.44 72.34L303.68 65.4L305.92 59.45L308.16 54.57L310.4 50.84L312.64 48.32L314.88 47.05L317.12 47.05L319.36 48.32L321.6 50.84L323.84 54.57L326.08 59.45L328.32 65.4L330.56 72.34L332.8 80.14L335.04 88.69L337.28 97.86L339.52 107.49L341.76 117.45L344 127.56L346.24 137.67L348.48 147.62L350.72 157.25L352.96 166.42L355.2 174.97L357.44 182.78L359.68 189.71L361.92 195.66L364.16 200.54L366.4 204.27L368.64 206.79L370.88 208.06L373.12 208.06L375.36 206.79L377.6 204.27L379.84 200.54L382.08 195.66L384.32 189.71L386.56 182.78L388.8 174.97L391.04 166.42L393.28 157.25L395.52 147.62L397.76 137.67L400 127.56\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 211.4L66.24 207.09L68.48 202.17L70.72 196.7L72.96 190.79L75.2 184.51L77.44 177.97L79.68 171.27L81.92 164.51L84.16 157.81L86.4 151.27L88.64 144.99L90.88 139.07L93.12 133.61L95.36 128.69L97.6 124.38L99.84 120.76L102.08 117.89L104.32 115.8L106.56 114.54L108.8 114.11L111.04 114.54L113.28 115.8L115.52 117.89L117.76 120.76L120 124.38L122.24 128.69L124.48 133.61L126.72 139.07L128.96 144.99L131.2 151.27L133.44 157.81L135.68 164.51L137.92 171.27L140.16 177.97L142.4 184.51L144.64 190.79L146.88 196.7L149.12 202.17L151.36 207.09L153.6 211.4L155.84 215.01L158.08 217.89L160.32 219.98L162.56 221.24L164.8 221.67L167.04 221.24L169.28 219.98L171.52 217.89L173.76 215.01L176 211.4L178.24 207.09L180.48 202.17L182.72 196.7L184.96 190.79L187.2 184.51L189.44 177.97L191.68 171.27L193.92 164.51L196.16 157.81L198.4 151.27L200.64 144.99L202.88 139.07L205.12 133.61L207.36 128.69L209.6 124.38L211.84 120.76L214.08 117.89L216.32 115.8L218.56 114.54L220.8 114.11L223.04 114.54L225.28 115.8L227.52 117.89L229.76 120.76L232 124.38L234.24 128.69L236.48 133.61L238.72 139.07L240.96 144.99L243.2 151.27L245.44 157.81L247.68 164.51L249.92 171.27L252.16 177.97L254.4 184.51L256.64 190.79L258.88 196.7L261.12 202.17L263.36 207.09L265.6 211.4L267.84 215.01L270.08 217.89L272.32 219.98L274.56 221.24L276.8 221.67L279.04 221.24L281.28 219.98L283.52 217.89L285.76 215.01L288 211.4L290.24 207.09L292.48 202.17L294.72 196.7L296.96 190.79L299.2 184.51L301.44 177.97L303.68 171.27L305.92 164.51L308.16 157.81L310.4 151.27L312.64 144.99L314.88 139.07L317.12 133.61L319.36 128.69L321.6 124.38L323.84 120.76L326.08 117.89L328.32 115.8L330.56 114.54L332.8 114.11L335.04 114.54L337.28 115.8L339.52 117.89L341.76 120.76L344 124.38L346.24 128.69L348.48 133.61L350.72 139.07L352.96 144.99L355.2 151.27L357.44 157.81L359.68 164.51L361.92 171.27L364.16 177.97L366.4 184.51L368.64 190.79L370.88 196.7L373.12 202.17L375.36 207.09L377.6 211.4L379.84 215.01L382.08 217.89L384.32 219.98L386.56 221.24L388.8 221.67L391.04 221.24L393.28 219.98L395.52 217.89L397.76 215.01L400 211.4\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Hare</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Lynx</text></svg>",
     "alt": "A graph of population size in thousands against time in years. Both the hare and lynx populations oscillate with a period of about 10 years. The lynx peaks occur slightly after the hare peaks."
    }
   ]
  },
  "be1-set11": {
   "text": "A circular plasmid was digested with a restriction enzyme. The undigested plasmid and the digested sample were separated by gel electrophoresis along with a DNA ladder of known fragment sizes. The gel is shown. The sizes of the ladder fragments are labeled in base pairs (bp).",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"24\" y=\"28\" width=\"442\" height=\"230\" fill=\"#EDE8DC\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"55.8\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"101.67\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Ladder</text><rect x=\"58.67\" y=\"58\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"65\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">5000</text><rect x=\"58.67\" y=\"94\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"101\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">3000</text><rect x=\"58.67\" y=\"130\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"137\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">2000</text><rect x=\"58.67\" y=\"166\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"173\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">1000</text><rect x=\"58.67\" y=\"202\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"209\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">500</text><rect x=\"199.13\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"245\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Undigested</text><rect x=\"202\" y=\"76\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"342.47\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"388.33\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Digested</text><rect x=\"345.33\" y=\"130\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"345.33\" y=\"166\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"12\" y=\"274\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(+)</text><text x=\"12\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(−)</text></svg>",
     "alt": "A gel with three lanes. The ladder lane has bands at 5000, 3000, 2000, 1000, and 500 base pairs from top to bottom. The undigested lane has one band between 5000 and 3000. The digested lane has two bands, one at the 2000 base pair position and one at the 1000 base pair position."
    }
   ]
  }
 }
};

export default EXAM;
