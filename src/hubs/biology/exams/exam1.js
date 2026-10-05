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
   "explanation": "Water potential is the sum of the pressure potential and the solute potential: Ψ = Ψp + Ψs = (+0.10) + (−0.40) = −0.30 MPa."
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
   "explanation": "The frequency of the recessive phenotype is q² = 0.16, so q = 0.40 and p = 1 − 0.40 = 0.60. The frequency of heterozygotes is 2pq = 2(0.60)(0.40) = 0.48."
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
   "explanation": "Water moves by osmosis from the region of higher water potential to the region of lower water potential. The right side has the higher solute concentration and therefore the lower (more negative) solute potential, so water moves toward it. Sucrose cannot cross the membrane."
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
   "explanation": "Water has moved into the right side, raising its level. The rising pressure from the taller column (the pressure potential) eventually balances the difference in solute potential, so the system stops changing with the levels unequal."
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
   "explanation": "Adenine pairs with thymine, so A = T = 30%, totaling 60%. The remaining 40% is divided equally between guanine and cytosine, so C = 20%."
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
   "explanation": "The percentage of cells in G₂ increased from 12% in the control to 55% with Drug X, while the percentage in G₁ decreased. This pattern indicates that the cells are being held at the G₂/M transition, the point at which they would enter mitosis."
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
   "explanation": "Interphase consists of G₁, S, and G₂: 60 + 20 + 12 = 92%. The remaining 8% of cells were in mitosis (M phase)."
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
   "explanation": "All cells contain ribosomes for protein synthesis. A nuclear envelope, mitochondria, and a Golgi apparatus are membrane-bound features of eukaryotic cells only."
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
   "explanation": "A sharp reduction in population size by a random event (a bottleneck) causes the allele frequencies in the survivors to differ by chance from the original population. This is genetic drift. The survivors were not chosen because of their alleles, so it is not natural selection."
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
   "explanation": "Enhancers are DNA regulatory sequences. When transcription factors (activators) bind to them, they promote the assembly of the transcription machinery at the promoter, increasing the rate of transcription of the associated gene."
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
   "explanation": "The population has 400 alleles. The number of a alleles is 84 (from Aa) + 2(18) (from aa) = 120. The frequency is 120/400 = 0.30."
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
   "explanation": "Iodine turns blue-black in the presence of starch. Only solution C gave this result."
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
   "explanation": "The biuret reagent turns purple when it reacts with peptide bonds, so a positive result indicates protein. Only solution A turned purple."
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
   "explanation": "The ribosome reads mRNA in groups of three nucleotides. Inserting one nucleotide shifts the reading frame for every codon that follows, changing all of the downstream amino acids and often introducing a premature stop codon."
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
   "explanation": "The surface area is 6 × (2 μm)² = 24 μm², and the volume is (2 μm)³ = 8 μm³. The ratio is 24/8 = 3.0 μm⁻¹. As cells grow larger, this ratio decreases, which limits how efficiently materials can be exchanged."
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
   "explanation": "In 24 hours there are 24/6 = 4 doublings, so the population is 2⁴ = 16 cells."
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
   "explanation": "Meiosis produces haploid cells, each with half the number of chromosomes of the parent cell: 8/2 = 4 chromosomes."
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
   "explanation": "p53 is a tumor suppressor. It activates repair, cell cycle arrest, or apoptosis when DNA is damaged. Without it, damaged cells can continue dividing and accumulate more mutations."
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
   "explanation": "The Golgi apparatus receives proteins from the rough ER, modifies them (for example, by adding carbohydrate groups), and packages them into vesicles for secretion or delivery to other organelles. Lysosomes digest materials, and mitochondria produce ATP."
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
   "explanation": "The pH scale is logarithmic. A difference of 2 pH units is a difference of 10² = 100 in [H⁺], and the lower pH has the higher [H⁺]. The solution with pH 5 has 100 times as much H⁺."
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
   "explanation": "Natural selection acts on existing variation: during the drought, birds with deeper beaks had a survival and reproductive advantage because they could eat the available large seeds. If beak depth is heritable, the next generation has a higher mean beak depth. Individuals do not change their genes to meet a need."
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
   "explanation": "If the trait is heritable, the deeper beaks should appear in offspring regardless of the environment in which they are raised. This would show that the change reflects a shift in the population's genes, not just an individual response to conditions."
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
   "explanation": "Enzyme Y has its optimum near 75 °C, so it is adapted to function at high temperatures. This is characteristic of organisms that live in hot environments, such as bacteria in hot springs. Enzyme X, with an optimum at 37 °C, is consistent with a human enzyme."
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
   "explanation": "Heat disrupts the hydrogen bonds and other weak interactions that maintain the enzyme's tertiary structure, so the active site loses its shape and the enzyme is denatured. Peptide bonds are covalent and are not broken at these temperatures."
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
   "explanation": "The father passes his X (with the recessive allele) to all of his daughters and his Y to all of his sons. The mother passes a normal X to every child. The daughters are therefore heterozygous carriers, and the sons receive a normal X from their mother and are not color blind."
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
   "explanation": "The proportions are 0.50, 0.30, and 0.20. Σ(n/N)² = 0.25 + 0.09 + 0.04 = 0.38, so D = 1 − 0.38 = 0.62. A higher value indicates greater diversity."
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
   "explanation": "A shorter time for the disks to float means that oxygen was produced faster, so the rate of photosynthesis was greater. The rate increased as the light intensity increased. With no light, no oxygen accumulated."
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
   "explanation": "The disks float because oxygen from the light-dependent reactions collects in the air spaces of the leaf. With no light, no oxygen is produced from photosynthesis, so the disks stay dense and remain sunk."
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
   "explanation": "Nucleic acids are always synthesized in the 5′ → 3′ direction, with new nucleotides added to the 3′ end. Because the strands are antiparallel, the polymerase must read the template strand in the 3′ → 5′ direction."
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
   "explanation": "Glycolysis uses 2 ATP in the energy-investment phase and produces 4 ATP in the payoff phase, for a net gain of 2 ATP per glucose."
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
   "explanation": "χ² = (84 − 90)²/90 + (36 − 30)²/30 = 36/90 + 36/30 = 0.40 + 1.20 = 1.60. With 1 degree of freedom the critical value at p = 0.05 is 3.84, so the null hypothesis is not rejected."
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
   "explanation": "On a cladogram, relatedness is determined by recent common ancestry. The mouse and the lizard share the most recent common ancestor (they are sister taxa), so the lizard is the closest relative of the mouse in this tree."
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
   "explanation": "The lizard and the mouse are the only organisms with the amniotic egg and they are sister taxa, so the most parsimonious explanation is that the trait evolved once in their common ancestor. Four limbs are absent in lamprey and salmon, and jaws are absent in the lamprey."
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
   "explanation": "Secondary structure consists of local folding patterns (α-helices and β-sheets) held by hydrogen bonds between backbone atoms. Primary structure is the amino acid sequence (peptide bonds), tertiary structure is the 3-D shape stabilized by R-group interactions, and quaternary structure is the arrangement of multiple polypeptides."
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
   "explanation": "Crossing over exchanges segments between homologous chromosomes, and independent assortment shuffles maternal and paternal chromosomes into gametes. Together they produce an enormous number of different gametes. DNA replication and spindle formation do not create variation."
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
   "explanation": "Two unaffected parents had an affected daughter, so the trait must be recessive and both parents are carriers. An affected daughter of an unaffected father rules out X-linked recessive inheritance, because an affected daughter must receive a recessive X from her father."
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
   "explanation": "Both parents are carriers (Aa × Aa). Among offspring who do not show the trait, the genotypes are AA (1/4) and Aa (2/4), so the probability of being a carrier is (2/4)/(3/4) = 2/3."
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
   "explanation": "Eukaryotic pre-mRNA is modified in the nucleus. Introns (noncoding regions) are removed and the exons are spliced together, a modified guanine cap is added to the 5′ end, and a poly-A tail is added to the 3′ end. These modifications protect the mRNA and help in its export and translation."
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
   "explanation": "Secondary succession occurs in places where a community has been disturbed but the soil remains, so recovery is relatively fast. Primary succession begins in lifeless areas without soil, such as newly formed volcanic rock."
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
   "explanation": "Homologous structures share a similar underlying anatomy because they are inherited from a common ancestor, even though natural selection has modified them for different functions. Analogous structures, in contrast, have similar functions but different origins."
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
   "explanation": "The experiment supports the hypothesis that the building blocks of life could have formed abiotically from simple molecules in an early atmosphere with an energy source, such as lightning. It did not produce cells and used an atmosphere without free oxygen."
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
   "explanation": "In a phosphorylation cascade, each activated enzyme can activate many molecules of the next enzyme, so the signal is amplified at every step. This allows a very low concentration of ligand to produce a large response."
  },
  {
   "id": "be1-43",
   "unit": 5,
   "stem": "Two genes are located on the same chromosome. In a testcross, the recombinant offspring make up 5% of the total in one cross involving genes A and B, and 30% in a cross involving genes A and C. What can be concluded?",
   "choices": [
    "Genes A and C are closer together on the chromosome than genes A and B.",
    "Genes A and B are on different chromosomes.",
    "Genes A and B are closer together on the chromosome than genes A and C.",
    "Genes A and C assort independently."
   ],
   "correct": 2,
   "explanation": "Crossing over is more likely to occur between genes that are farther apart, so the recombination frequency increases with the distance between them. The lower frequency (5%) for A and B means they are closer together than A and C (30%). A frequency of 50% would indicate independent assortment."
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
   "explanation": "Hydrogen bonds between neighboring water molecules make them cohesive, so the molecules at the surface are pulled inward and sideways, forming a film with surface tension that can support a small insect. Water is polar, not nonpolar."
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
   "explanation": "For each gene, the probability of the homozygous recessive genotype from an Aa × Aa cross is 1/4. Because the genes assort independently, the probability of aabb is (1/4)(1/4) = 1/16."
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
   "explanation": "The per capita growth rate is (births − deaths)/N = (60 − 20)/500 = 0.08 per individual per year."
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
   "explanation": "The sodium–potassium pump moves ions against their concentration gradients, which is active transport and uses ATP. Diffusion, osmosis through aquaporins, and facilitated diffusion are all passive and move substances down their gradients."
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
   "explanation": "Each turn of the cycle fixes one CO₂ into a five-carbon molecule (RuBP). Three CO₂ must be fixed (three turns) to net one three-carbon G3P (3 carbons from 3 CO₂)."
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
   "explanation": "Each nucleotide in DNA and RNA contains a phosphate group, so nucleic acids contain phosphorus. Proteins contain C, H, O, and N (and sometimes S). Carbohydrates and triglycerides contain only C, H, and O."
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
   "explanation": "Energy coupling links an exergonic reaction (ATP → ADP + Pᵢ) to an endergonic reaction, so that the overall free-energy change is negative and the process can proceed. The other terms describe regulation of enzymes or ATP production."
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
   "explanation": "The lac operon is an inducible operon. When lactose is present, allolactose binds to the repressor and changes its shape, so it can no longer bind to the operator. RNA polymerase can then transcribe the genes needed to metabolize lactose."
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
   "explanation": "At each transfer, most of the energy is used for the organism's own metabolism and is released as heat, and some biomass is not eaten or digested. Only about 10% of the energy is typically available to the next level. Energy flows through ecosystems and is not recycled."
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
   "explanation": "Energy decreases by a factor of 10 at each level (10,000 → 1,000 → 100). The next level would have 100/10 = 10 kJ."
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
   "explanation": "Checkpoints monitor the integrity of the cell and delay progress until problems are fixed. Proteins such as p53 halt the cycle for repair, and if the damage is too severe, they can trigger apoptosis to prevent the propagation of mutations."
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
   "explanation": "Allopatric speciation occurs when a geographic barrier separates a population into two groups. Gene flow stops, and independent mutation, selection, and drift lead to divergence until the groups can no longer interbreed. The doubling of chromosome number is an example of sympatric speciation."
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
   "explanation": "The abundant prey (hares) support more lynx reproduction and survival, but it takes time for the predator population to respond, so its peak lags behind the prey peak. Then the high number of lynx reduces the hare population."
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
   "explanation": "As the hare population rises, the lynx population rises and then reduces the hares, which in turn reduces the lynx. Each population's growth causes a change that opposes it, which is the essence of negative feedback and produces oscillations."
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
   "explanation": "The light-dependent reactions occur in the thylakoid membranes, where chlorophyll and the electron transport chain are located. The Calvin cycle takes place in the stroma."
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
   "explanation": "The digested lane shows two fragments, at about 2000 bp and 1000 bp. The fragments from a circular plasmid with one cut for each of the two sites add up to the size of the plasmid: 2000 + 1000 = 3000 bp."
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
   "explanation": "DNA is negatively charged and migrates toward the positive electrode. The charge-to-mass ratio is the same for all fragment sizes, so the separation depends on how easily the fragments move through the gel: smaller fragments weave through the pores faster and travel farther."
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
