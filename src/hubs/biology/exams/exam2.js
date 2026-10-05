// AP Biology — Exam 2 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "be2-1",
   "unit": 1,
   "stem": "Compared with a saturated fatty acid, an unsaturated fatty acid has which of the following features?",
   "choices": [
    "One or more carbon–carbon double bonds that put kinks in its tail",
    "Fewer carbon atoms in a straight, tightly packed chain",
    "A hydrophilic tail that dissolves easily in water",
    "A phosphate group in place of the carboxyl group"
   ],
   "correct": 0,
   "explanation": "Unsaturated fatty acids contain at least one C=C double bond, which bends the hydrocarbon chain. The kinks keep the molecules from packing tightly, so unsaturated fats such as oils are usually liquid at room temperature."
  },
  {
   "id": "be2-2",
   "unit": 4,
   "stem": "During the development of a human embryo, the tissue between the fingers is removed by programmed cell death. Which process is responsible?",
   "choices": [
    "Necrosis",
    "Mitosis",
    "Meiosis",
    "Apoptosis"
   ],
   "correct": 3,
   "explanation": "Apoptosis is a regulated, orderly process of cell death that eliminates unneeded cells during development, such as the webbing between developing fingers. Necrosis is uncontrolled cell death caused by injury."
  },
  {
   "id": "be2-3",
   "unit": 2,
   "stem": "Mitochondria contain their own circular DNA, ribosomes similar to those of bacteria, and a double membrane. Which hypothesis do these features support?",
   "choices": [
    "Mitochondria developed from the folded inner membrane of the nucleus.",
    "Mitochondria were produced by the endoplasmic reticulum.",
    "Mitochondria are viruses that infect eukaryotic cells.",
    "Mitochondria originated from a prokaryote engulfed by an ancestral eukaryotic cell."
   ],
   "correct": 3,
   "explanation": "The endosymbiotic theory proposes that mitochondria (and chloroplasts) were once free-living prokaryotes engulfed by a host cell. Their prokaryote-like DNA, ribosomes, and double membrane are evidence for this origin."
  },
  {
   "id": "be2-4",
   "unit": 3,
   "stem": "During the complete aerobic respiration of one molecule of glucose (C₆H₁₂O₆), how many molecules of CO₂ are released?",
   "choices": [
    "2",
    "4",
    "6",
    "36"
   ],
   "correct": 2,
   "explanation": "The six carbons of glucose are all released as CO₂: two from the conversion of pyruvate to acetyl CoA (two pyruvates) and four from the citric acid cycle, for a total of 6 CO₂."
  },
  {
   "id": "be2-5",
   "unit": 1,
   "stem": "Which end of a DNA strand has a free phosphate group attached to the 5′ carbon of the terminal sugar?",
   "choices": [
    "The 5′ end of the strand",
    "The 3′ end of the strand",
    "Both ends of the strand",
    "Neither end of the strand"
   ],
   "correct": 0,
   "explanation": "A DNA strand has directionality. The 5′ end has a phosphate group on the 5′ carbon of the sugar, and the 3′ end has a free hydroxyl group on the 3′ carbon. New nucleotides are added to the 3′ end."
  },
  {
   "id": "be2-6",
   "unit": 8,
   "stem": "A species of predatory fish is introduced into a lake, and the population of small fish that it feeds on declines sharply. As a result, the amount of algae in the lake increases. Which concept does this sequence of events illustrate?",
   "choices": [
    "A trophic cascade",
    "Primary succession",
    "Genetic drift",
    "Biomagnification"
   ],
   "correct": 0,
   "explanation": "A trophic cascade occurs when a change at one trophic level has indirect effects on other trophic levels. Here the predator reduces the small fish, which allows the populations that the small fish feed on (zooplankton, which graze on algae) to increase, and algae growth leads to changes down the chain."
  },
  {
   "id": "be2-7",
   "unit": 1,
   "stem": "A polypeptide is built from 10 amino acids joined by dehydration synthesis reactions. How many water molecules are released as the polypeptide is formed?",
   "choices": [
    "11",
    "10",
    "9",
    "8"
   ],
   "correct": 2,
   "explanation": "Each peptide bond forms with the release of one water molecule. Joining 10 amino acids in a chain requires 10 − 1 = 9 peptide bonds, so 9 water molecules are released."
  },
  {
   "id": "be2-8",
   "unit": 5,
   "setId": "be2-set1",
   "stem": "What is the value of the chi-square statistic for these data?",
   "choices": [
    "15.7",
    "7.81",
    "1.5",
    "0.47"
   ],
   "correct": 3,
   "explanation": "χ² = Σ(o − e)²/e = (2.25)²/312.75 + (3.75)²/104.25 + (3.25)²/104.25 + (2.75)²/34.75 = 0.016 + 0.135 + 0.101 + 0.218 = 0.47."
  },
  {
   "id": "be2-9",
   "unit": 5,
   "setId": "be2-set1",
   "stem": "The critical value for 3 degrees of freedom at p = 0.05 is 7.81. What conclusion should the student draw?",
   "choices": [
    "Reject the null hypothesis; the differences show that the genes are linked.",
    "Reject the null hypothesis; the traits do not follow Mendelian inheritance.",
    "The data cannot be analyzed, because the observed numbers are not whole numbers.",
    "Fail to reject the null hypothesis; the differences are likely due to chance."
   ],
   "correct": 3,
   "explanation": "The calculated χ² (0.47) is smaller than the critical value (7.81), so the difference between the observed and expected numbers is not statistically significant. The data are consistent with the 9:3:3:1 ratio expected for independently assorting genes."
  },
  {
   "id": "be2-10",
   "unit": 6,
   "stem": "In the CRISPR-Cas9 system, a guide RNA directs the Cas9 enzyme to a specific location in the genome. What does the Cas9 enzyme do at that location?",
   "choices": [
    "It cuts the DNA at the target sequence.",
    "It adds a methyl group to the RNA.",
    "It translates the guide RNA into a protein.",
    "It seals the gaps between Okazaki fragments."
   ],
   "correct": 0,
   "explanation": "The guide RNA base pairs with a complementary DNA sequence, and Cas9 acts as a nuclease that makes a double-stranded break there. The cell's repair processes can then disable the gene or incorporate a new sequence."
  },
  {
   "id": "be2-11",
   "unit": 3,
   "stem": "In some metabolic pathways, the final product binds to the first enzyme in the pathway and decreases its activity. What is this type of regulation called?",
   "choices": [
    "Competitive inhibition",
    "Substrate-level phosphorylation",
    "Positive feedback",
    "Feedback inhibition"
   ],
   "correct": 3,
   "explanation": "When the end product inhibits an earlier enzyme in its own pathway, the cell avoids wasting resources by making more than it needs. This is feedback (end-product) inhibition, a form of negative feedback."
  },
  {
   "id": "be2-12",
   "unit": 8,
   "stem": "Certain bacteria in the soil and in the roots of legumes convert atmospheric nitrogen gas (N₂) into ammonia. What is this process called, and why is it important?",
   "choices": [
    "Nitrogen fixation, which makes nitrogen available to plants in a usable form",
    "Denitrification, which returns nitrogen to the atmosphere",
    "Nitrification, which converts nitrate to nitrogen gas",
    "Decomposition, which converts organic matter to carbon dioxide"
   ],
   "correct": 0,
   "explanation": "Most organisms cannot use N₂ directly. Nitrogen-fixing bacteria convert it to ammonia, which can be taken up by plants and incorporated into amino acids and nucleotides."
  },
  {
   "id": "be2-13",
   "unit": 5,
   "stem": "In Labrador retrievers, one gene determines whether black or brown pigment is produced, and a second gene determines whether any pigment is deposited in the fur at all. Dogs that are homozygous recessive for the second gene are yellow, regardless of the first gene. Which term describes this interaction?",
   "choices": [
    "Incomplete dominance",
    "Codominance",
    "Polygenic inheritance",
    "Epistasis"
   ],
   "correct": 3,
   "explanation": "Epistasis occurs when the alleles of one gene affect the expression of another gene. Here the genotype at the second gene masks the effect of the pigment-type gene."
  },
  {
   "id": "be2-14",
   "unit": 4,
   "stem": "A growth factor released by one cell diffuses a short distance and stimulates the division of nearby cells. Which type of signaling is this?",
   "choices": [
    "Endocrine signaling",
    "Signaling through gap junctions",
    "Direct contact signaling",
    "Paracrine signaling"
   ],
   "correct": 3,
   "explanation": "In paracrine signaling, the signal molecules act on nearby cells in the immediate vicinity. In endocrine signaling, hormones travel through the bloodstream to distant cells."
  },
  {
   "id": "be2-15",
   "unit": 8,
   "stem": "A population of 100 rabbits is growing exponentially with a per capita growth rate of r = 0.20 per year. What is the approximate increase in the population during the first year (dN/dt = rN)?",
   "choices": [
    "120 rabbits",
    "100 rabbits",
    "20 rabbits",
    "2 rabbits"
   ],
   "correct": 2,
   "explanation": "dN/dt = rN = (0.20)(100) = 20 rabbits per year at the start. The population is 120 after one year, but the question asks for the increase."
  },
  {
   "id": "be2-16",
   "unit": 6,
   "stem": "In eukaryotic cells, the addition of methyl groups to DNA in a region of a chromosome is often associated with which of the following effects?",
   "choices": [
    "Reduced transcription of the genes in that region",
    "Increased transcription of the genes in that region",
    "A change in the sequence of the genes",
    "Degradation of the mRNA in the cytoplasm"
   ],
   "correct": 0,
   "explanation": "DNA methylation is an epigenetic modification that does not change the DNA sequence. It typically promotes a tightly packed chromatin structure that makes genes less accessible to transcription machinery, so gene expression is silenced."
  },
  {
   "id": "be2-17",
   "unit": 2,
   "stem": "The solute potential of a 0.20 M sucrose solution at 300 K is calculated using Ψs = −iCRT, where i = 1 for sucrose, R = 0.0831 L·bar/(mol·K), and C is the molar concentration. What is the solute potential?",
   "choices": [
    "−4.99 bar",
    "−2.49 bar",
    "+2.49 bar",
    "+4.99 bar"
   ],
   "correct": 0,
   "explanation": "Ψs = −iCRT = −(1)(0.20 mol/L)(0.0831 L·bar/(mol·K))(300 K) = −4.99 bar. The solute potential of a solution is always negative (or zero for pure water)."
  },
  {
   "id": "be2-18",
   "unit": 3,
   "stem": "In the Calvin cycle, which of the following molecules from the light-dependent reactions provides the energy and reducing power needed to make sugar?",
   "choices": [
    "Oxygen and water",
    "Pyruvate and NADH",
    "ATP and NADPH",
    "Glucose and CO₂"
   ],
   "correct": 2,
   "explanation": "The light-dependent reactions produce ATP and NADPH, which are used in the Calvin cycle to reduce the fixed CO₂ into three-carbon sugars. Oxygen is released as a by-product of the light reactions."
  },
  {
   "id": "be2-19",
   "unit": 6,
   "stem": "The coding region of a gene contains 900 nucleotides, not counting the stop codon. Assuming no introns, how many amino acids are in the polypeptide that the gene specifies?",
   "choices": [
    "900",
    "450",
    "300",
    "100"
   ],
   "correct": 2,
   "explanation": "Each amino acid is specified by a codon of three nucleotides, so 900 nucleotides code for 900/3 = 300 amino acids."
  },
  {
   "id": "be2-20",
   "unit": 6,
   "stem": "During translation, the anticodon of a tRNA molecule base pairs with which of the following?",
   "choices": [
    "A codon in the mRNA",
    "A sequence in the DNA template",
    "The large ribosomal subunit",
    "The poly-A tail of the mRNA"
   ],
   "correct": 0,
   "explanation": "Each tRNA carries a specific amino acid and has an anticodon that is complementary to an mRNA codon. This pairing in the ribosome ensures that the correct amino acid is added to the growing polypeptide."
  },
  {
   "id": "be2-21",
   "unit": 7,
   "stem": "In a population in Hardy–Weinberg equilibrium for a gene with two alleles, the frequency of the dominant allele (p) is 0.7. What is the frequency of individuals with the homozygous recessive genotype?",
   "choices": [
    "0.09",
    "0.21",
    "0.42",
    "0.49"
   ],
   "correct": 0,
   "explanation": "Since p + q = 1, q = 0.3. The frequency of the homozygous recessive genotype is q² = (0.3)² = 0.09."
  },
  {
   "id": "be2-22",
   "unit": 6,
   "stem": "During DNA replication, which enzyme joins the Okazaki fragments on the lagging strand?",
   "choices": [
    "DNA helicase",
    "Primase",
    "RNA polymerase",
    "DNA ligase"
   ],
   "correct": 3,
   "explanation": "On the lagging strand, DNA polymerase synthesizes short Okazaki fragments, and DNA ligase seals the gaps between them to form a continuous strand. Helicase unwinds the DNA, and primase lays down the RNA primers."
  },
  {
   "id": "be2-23",
   "unit": 4,
   "stem": "Down syndrome is most commonly caused by an extra copy of chromosome 21. Which event during meiosis most likely resulted in the extra chromosome?",
   "choices": [
    "Crossing over between two chromosomes that are not homologous",
    "Nondisjunction, in which chromosomes fail to separate normally",
    "Independent assortment of the chromosomes during anaphase II",
    "Deletion of a large segment of one of the chromosomes"
   ],
   "correct": 1,
   "explanation": "Nondisjunction produces gametes with an extra or missing chromosome. If a gamete with two copies of chromosome 21 is fertilized by a normal gamete, the zygote has three copies (trisomy 21)."
  },
  {
   "id": "be2-24",
   "unit": 5,
   "stem": "A man and a woman who are both unaffected have a child with cystic fibrosis, an autosomal recessive disorder. They have a second child who is unaffected. What is the probability that the second child is a carrier?",
   "choices": [
    "3/4",
    "2/3",
    "1/2",
    "1/4"
   ],
   "correct": 1,
   "explanation": "The parents must both be carriers (Cc). Among unaffected children, the genotypes are CC (1/3) and Cc (2/3), so the probability the unaffected child is a carrier is 2/3."
  },
  {
   "id": "be2-25",
   "unit": 3,
   "stem": "Approximately how many molecules of ATP are produced from one molecule of glucose during complete aerobic cellular respiration in a eukaryotic cell?",
   "choices": [
    "90",
    "30",
    "4",
    "2"
   ],
   "correct": 1,
   "explanation": "Glycolysis and the citric acid cycle produce a few ATP directly, and the electron transport chain and chemiosmosis produce most of the rest. The total is approximately 30–32 ATP per glucose, compared with 2 ATP from fermentation."
  },
  {
   "id": "be2-26",
   "unit": 3,
   "setId": "be2-set2",
   "stem": "Which statement best explains why the two curves approach the same maximum rate at very high substrate concentrations?",
   "choices": [
    "The inhibitor is destroyed once the substrate concentration becomes high",
    "The inhibitor changes the shape of the enzyme at all concentrations",
    "The substrate is converted into more inhibitor at high concentrations",
    "At high concentrations, the substrate outcompetes the inhibitor for active sites"
   ],
   "correct": 3,
   "explanation": "A competitive inhibitor binds to the active site and competes with the substrate. When the substrate concentration is very high, substrate molecules occupy almost all of the active sites, so the maximum rate is the same. The inhibitor lowers the apparent affinity of the enzyme but not its maximum rate."
  },
  {
   "id": "be2-27",
   "unit": 3,
   "setId": "be2-set2",
   "stem": "Where would a competitive inhibitor most likely bind to the enzyme?",
   "choices": [
    "At the active site, which has a shape similar to the substrate",
    "At a separate allosteric site far from the active site",
    "To the product after the reaction occurs",
    "To the substrate in the solution"
   ],
   "correct": 0,
   "explanation": "Competitive inhibitors resemble the substrate and bind to the active site, preventing the substrate from binding. Binding at an allosteric site would be noncompetitive inhibition, which would lower the maximum rate at any substrate concentration."
  },
  {
   "id": "be2-28",
   "unit": 8,
   "setId": "be2-set3",
   "stem": "What is the approximate carrying capacity of the habitat for this population?",
   "choices": [
    "50",
    "250",
    "500",
    "1000"
   ],
   "correct": 2,
   "explanation": "The carrying capacity is the maximum population size that the environment can sustain. The graph levels off at approximately 500 individuals."
  },
  {
   "id": "be2-29",
   "unit": 8,
   "setId": "be2-set3",
   "stem": "At approximately what population size is the growth rate of the population the greatest?",
   "choices": [
    "50",
    "250",
    "500",
    "1000"
   ],
   "correct": 1,
   "explanation": "In logistic growth, the growth rate dN/dt = rN(K − N)/K is greatest when N = K/2. With K ≈ 500, the maximum growth rate occurs at about 250 individuals."
  },
  {
   "id": "be2-30",
   "unit": 3,
   "setId": "be2-set4",
   "stem": "Which statement best explains why the germinating seeds consumed more oxygen at 25 °C than at 10 °C?",
   "choices": [
    "The seeds produce more oxygen at the higher temperature.",
    "The seeds stop respiring at the lower temperature.",
    "The enzymes of respiration are more active at the higher temperature.",
    "Oxygen is less soluble in water at the lower temperature."
   ],
   "correct": 2,
   "explanation": "Metabolic reaction rates generally increase with temperature (up to an optimum) because molecules move faster and the enzymes are more active. The higher oxygen consumption reflects a higher rate of aerobic respiration."
  },
  {
   "id": "be2-31",
   "unit": 3,
   "setId": "be2-set4",
   "stem": "What is the purpose of including the non-germinating seeds in the experiment?",
   "choices": [
    "They show the baseline oxygen use of seeds that are not actively metabolizing",
    "They demonstrate that temperature has no effect on the rate of respiration",
    "They produce the oxygen that the germinating seeds need to respire",
    "They are the only seeds in the experiment that contain mitochondria"
   ],
   "correct": 0,
   "explanation": "The dormant seeds have very low metabolic activity, so they show that the change in oxygen consumption in the germinating seeds is due to their growth and respiration, not to the setup or to the temperature alone."
  },
  {
   "id": "be2-32",
   "unit": 4,
   "setId": "be2-set5",
   "stem": "What percentage of the cells were in mitosis?",
   "choices": [
    "85%",
    "60%",
    "15%",
    "5%"
   ],
   "correct": 2,
   "explanation": "The cells in mitosis are those in prophase, metaphase, anaphase, and telophase: 40 + 10 + 5 + 5 = 60 of 400 cells, or 15%."
  },
  {
   "id": "be2-33",
   "unit": 4,
   "setId": "be2-set5",
   "stem": "If the cell cycle for these cells takes 24 hours, approximately how long does a cell spend in prophase?",
   "choices": [
    "0.60 h",
    "2.4 h",
    "3.6 h",
    "12 h"
   ],
   "correct": 1,
   "explanation": "The fraction of cells in prophase is 40/400 = 0.10, so the time spent in prophase is (0.10)(24 h) = 2.4 h."
  },
  {
   "id": "be2-34",
   "unit": 2,
   "setId": "be2-set6",
   "stem": "Based on the data, which concentration of sucrose is closest to the solute concentration inside the onion cells?",
   "choices": [
    "0.6 M",
    "0.4 M",
    "0.2 M",
    "0.0 M"
   ],
   "correct": 1,
   "explanation": "At a sucrose concentration equal to the solute concentration inside the cells, there is no net water movement and about half of the cells are at the point of plasmolysis. About 45% of the cells were plasmolyzed at 0.4 M, so that concentration is closest."
  },
  {
   "id": "be2-35",
   "unit": 2,
   "setId": "be2-set6",
   "stem": "Why were most of the cells plasmolyzed in the 0.6 M sucrose solution?",
   "choices": [
    "Sucrose moved into the cells by diffusion and made the cells swell up.",
    "The cell walls dissolved when placed in the concentrated sucrose solution.",
    "The cells took up water from the solution by active transport.",
    "Water left the cells by osmosis because the solution had a lower water potential."
   ],
   "correct": 3,
   "explanation": "The 0.6 M solution has a lower water potential than the cells, so water moves out by osmosis. The cytoplasm shrinks and the membrane pulls away from the rigid cell wall. Sucrose does not move freely across the membrane."
  },
  {
   "id": "be2-36",
   "unit": 6,
   "stem": "In the polymerase chain reaction (PCR), the amount of DNA doubles with each cycle. Starting with a single DNA molecule, how many copies are present after 5 cycles?",
   "choices": [
    "64",
    "32",
    "25",
    "10"
   ],
   "correct": 1,
   "explanation": "The number of copies doubles each cycle, so after 5 cycles there are 2⁵ = 32 copies."
  },
  {
   "id": "be2-37",
   "unit": 7,
   "stem": "Which of the following is a condition that must be met for a population to remain in Hardy–Weinberg equilibrium?",
   "choices": [
    "Individuals mate preferentially with similar phenotypes.",
    "Mutations occur at a high rate.",
    "The population is very large, so genetic drift has a negligible effect.",
    "Individuals frequently migrate in and out of the population."
   ],
   "correct": 2,
   "explanation": "The Hardy–Weinberg model assumes a large population (no genetic drift), random mating, no mutation, no gene flow, and no natural selection. A small population would experience genetic drift that changes the allele frequencies."
  },
  {
   "id": "be2-38",
   "unit": 2,
   "stem": "Which of the following structures is found in plant cells but not in animal cells?",
   "choices": [
    "Mitochondria",
    "Chloroplasts",
    "Ribosomes",
    "A nucleus"
   ],
   "correct": 1,
   "explanation": "Plant cells contain chloroplasts, where photosynthesis occurs, along with a cell wall and a large central vacuole. Animal cells and plant cells both contain mitochondria, ribosomes, and a nucleus."
  },
  {
   "id": "be2-39",
   "unit": 7,
   "stem": "A fossil contains one-eighth of the amount of carbon-14 that was present in the organism when it died. The half-life of carbon-14 is 5,730 years. What is the approximate age of the fossil?",
   "choices": [
    "5,730 years",
    "11,460 years",
    "17,190 years",
    "45,840 years"
   ],
   "correct": 2,
   "explanation": "One-eighth is (1/2)³, so three half-lives have passed: 3 × 5,730 = 17,190 years."
  },
  {
   "id": "be2-40",
   "unit": 6,
   "setId": "be2-set7",
   "stem": "Which mutation is a silent mutation?",
   "choices": [
    "Mutant 2",
    "Mutant 1",
    "Mutant 3",
    "None of the mutations"
   ],
   "correct": 1,
   "explanation": "A silent mutation changes the DNA sequence but not the amino acid, because of the redundancy of the genetic code. GAG, like GAA, codes for glutamic acid, so the protein is unchanged."
  },
  {
   "id": "be2-41",
   "unit": 6,
   "setId": "be2-set7",
   "stem": "Which mutation is most likely to have the most severe effect on the function of the protein?",
   "choices": [
    "Mutant 1, because it changes the sequence of the nucleotides in the gene",
    "Mutant 2, because it changes one amino acid in the polypeptide",
    "All three mutations have equal effects on the function of the protein",
    "Mutant 3, because a premature stop codon shortens the protein"
   ],
   "correct": 3,
   "explanation": "A nonsense mutation creates a stop codon, so translation ends early and the protein is truncated, usually losing its function. A missense mutation changes a single amino acid, which may or may not affect function."
  },
  {
   "id": "be2-42",
   "unit": 7,
   "stem": "In a population of 500 individuals in Hardy–Weinberg equilibrium, the frequency of the recessive allele q is 0.20. How many individuals are expected to be heterozygous?",
   "choices": [
    "320",
    "160",
    "80",
    "16"
   ],
   "correct": 1,
   "explanation": "With q = 0.20, p = 0.80. The frequency of heterozygotes is 2pq = 2(0.80)(0.20) = 0.32, so the number of heterozygotes is 0.32 × 500 = 160."
  },
  {
   "id": "be2-43",
   "unit": 2,
   "stem": "Glucose enters a red blood cell through a carrier protein, moving from a region of high glucose concentration to a region of low concentration, without the use of ATP. This is an example of which process?",
   "choices": [
    "Facilitated diffusion",
    "Active transport",
    "Simple diffusion through the lipid bilayer",
    "Receptor-mediated endocytosis"
   ],
   "correct": 0,
   "explanation": "Glucose is a polar molecule that cannot cross the lipid bilayer by itself. A carrier protein helps it move down its concentration gradient without energy input, which is facilitated diffusion, a form of passive transport."
  },
  {
   "id": "be2-44",
   "unit": 8,
   "setId": "be2-set8",
   "stem": "What is the value of Simpson's diversity index for community 2?",
   "choices": [
    "0.85",
    "0.73",
    "0.50",
    "0.27"
   ],
   "correct": 3,
   "explanation": "The proportions in community 2 are 0.85, 0.05, 0.05, and 0.05. Σ(n/N)² = 0.7225 + 3(0.0025) = 0.73, so D = 1 − 0.73 = 0.27."
  },
  {
   "id": "be2-45",
   "unit": 8,
   "setId": "be2-set8",
   "stem": "Which statement correctly compares the two communities?",
   "choices": [
    "Community 2 has greater diversity because one species is very abundant.",
    "The two communities have the same diversity because they have the same number of species.",
    "Community 1 has greater diversity because the species are equally abundant.",
    "Community 2 has greater diversity because it has a higher total population."
   ],
   "correct": 2,
   "explanation": "Both communities have four species (equal species richness), but diversity also depends on evenness. Community 1 has the higher Simpson's index (0.75) because the species are equally abundant; community 2 is dominated by species A."
  },
  {
   "id": "be2-46",
   "unit": 2,
   "stem": "Cell A is a sphere with a radius of 1 μm, and cell B is a sphere with a radius of 4 μm. How does the surface area-to-volume ratio of cell A compare with that of cell B? (For a sphere, SA/V = 3/r.)",
   "choices": [
    "1/4 as large",
    "The same",
    "4 times as large",
    "16 times as large"
   ],
   "correct": 2,
   "explanation": "SA/V = 3/r, so cell A has a ratio of 3/1 = 3 μm⁻¹ and cell B has 3/4 = 0.75 μm⁻¹. The ratio for cell A is 4 times as large. Smaller cells exchange materials more efficiently with their surroundings."
  },
  {
   "id": "be2-47",
   "unit": 1,
   "stem": "In a folded protein, hydrophobic R groups tend to cluster in the interior of the molecule, away from water. Which type of interaction drives this clustering?",
   "choices": [
    "Peptide bonds that form between the nonpolar R groups of the protein",
    "Hydrophobic interactions that exclude nonpolar groups from water",
    "Ionic bonds between the nonpolar R groups and the surrounding water",
    "Covalent bonds that form between the nonpolar side chains in the interior"
   ],
   "correct": 1,
   "explanation": "Nonpolar R groups cannot form hydrogen bonds with water, so the surrounding water molecules force them together in the interior of the protein. This hydrophobic effect is a major contributor to tertiary structure."
  },
  {
   "id": "be2-48",
   "unit": 7,
   "stem": "Two closely related species of birds live in the same area but do not interbreed because the males of each species sing a different song that the females of the other species do not respond to. Which type of reproductive barrier is this?",
   "choices": [
    "Postzygotic isolation (hybrid sterility)",
    "Geographic isolation",
    "Postzygotic isolation (hybrid breakdown)",
    "Prezygotic isolation (behavioral isolation)"
   ],
   "correct": 3,
   "explanation": "Behavioral isolation is a prezygotic barrier: differences in courtship signals prevent mating, so no zygote is formed. Postzygotic barriers act after fertilization, for example when hybrids are sterile."
  },
  {
   "id": "be2-49",
   "unit": 1,
   "stem": "Which pair of functional groups is found in every amino acid?",
   "choices": [
    "An amino group and a carboxyl group",
    "A hydroxyl group and a phosphate group",
    "A carbonyl group and a sulfhydryl group",
    "A methyl group and a carboxyl group"
   ],
   "correct": 0,
   "explanation": "Every amino acid has a central carbon bonded to an amino group (–NH₂), a carboxyl group (–COOH), a hydrogen, and a variable R group. The R group is what differs among the 20 amino acids."
  },
  {
   "id": "be2-50",
   "unit": 5,
   "stem": "A heterozygous plant (Aa) is crossed with a homozygous recessive plant (aa). What is the probability that an offspring has the genotype aa?",
   "choices": [
    "3/4",
    "1/2",
    "1/4",
    "0"
   ],
   "correct": 1,
   "explanation": "The Aa parent produces A and a gametes in equal proportions, and the aa parent produces only a gametes. Half of the offspring are Aa and half are aa."
  },
  {
   "id": "be2-51",
   "unit": 7,
   "setId": "be2-set9",
   "stem": "Which organism is most closely related to humans, according to these data?",
   "choices": [
    "Rhesus monkey",
    "Horse",
    "Chimpanzee",
    "Yeast"
   ],
   "correct": 2,
   "explanation": "Fewer differences in a conserved protein sequence indicate a more recent common ancestor, because fewer mutations have accumulated. The chimpanzee has no differences from humans."
  },
  {
   "id": "be2-52",
   "unit": 7,
   "setId": "be2-set9",
   "stem": "Which statement is best supported by the data?",
   "choices": [
    "Related organisms have similar proteins because of common ancestry.",
    "Yeast is the ancestor of all of the other organisms in the table.",
    "Evolution has occurred only in the lineage that leads to humans.",
    "Cytochrome c has not changed in any of the organisms that were compared."
   ],
   "correct": 0,
   "explanation": "Similarity in homologous molecules, which decreases as the evolutionary distance between organisms increases, is evidence for common ancestry and descent with modification. A larger number of differences indicates a more distant common ancestor."
  },
  {
   "id": "be2-53",
   "unit": 4,
   "stem": "In a sample of 200 cultured cells observed under a microscope, 20 cells are in mitosis. If the entire cell cycle takes 24 hours, approximately how long does the average cell spend in mitosis?",
   "choices": [
    "10 h",
    "2.4 h",
    "1.2 h",
    "0.24 h"
   ],
   "correct": 1,
   "explanation": "The fraction of cells in mitosis is 20/200 = 0.10, so the cells spend about 10% of the cycle in mitosis: (0.10)(24 h) = 2.4 h."
  },
  {
   "id": "be2-54",
   "unit": 7,
   "setId": "be2-set10",
   "stem": "Which statement best explains the increase in the percentage of resistant bacteria?",
   "choices": [
    "The antibiotic caused the bacteria to develop resistance alleles on purpose.",
    "The bacteria learned how to resist the antibiotic during the experiment.",
    "The antibiotic increased the mutation rate of all genes in the bacterial cells.",
    "Bacteria with resistance alleles survived and reproduced while others were killed."
   ],
   "correct": 3,
   "explanation": "The antibiotic is a selective pressure. A few bacteria already carried alleles for resistance (from random mutation). They survived and reproduced, so the proportion of resistant bacteria increased over generations."
  },
  {
   "id": "be2-55",
   "unit": 7,
   "setId": "be2-set10",
   "stem": "Which of the following statements about the origin of the resistance alleles is most accurate?",
   "choices": [
    "The antibiotic directed specific mutations to arise in the bacteria.",
    "The resistance alleles arose only after the antibiotic had been added.",
    "The alleles arose by random mutation before exposure, and the antibiotic selected for them.",
    "All of the bacteria in the culture carried the resistance alleles at the start."
   ],
   "correct": 2,
   "explanation": "Mutations occur randomly and are not directed by the environment. The resistant bacteria were present at a low frequency (about 1%) at the start, and selection increased the frequency of resistance."
  },
  {
   "id": "be2-56",
   "unit": 7,
   "stem": "A few individuals from a mainland population colonize an island. The allele frequencies in the island population differ from those of the mainland population, mainly because of the small number of founders. This is an example of which of the following?",
   "choices": [
    "Directional selection, a type of natural selection",
    "The founder effect, a type of genetic drift",
    "Gene flow, the movement of alleles between populations",
    "Stabilizing selection, which favors intermediate phenotypes"
   ],
   "correct": 1,
   "explanation": "When a new population is established by a small number of individuals, its gene pool contains only a fraction of the variation of the source population, and the allele frequencies can differ by chance. This is the founder effect."
  },
  {
   "id": "be2-57",
   "unit": 4,
   "stem": "Which of the following events occurs during meiosis I but not during mitosis?",
   "choices": [
    "Sister chromatids separate from each other during anaphase",
    "Homologous chromosomes pair up and then separate into different cells",
    "The nuclear envelope breaks down in prophase of the division",
    "Chromosomes line up along the middle of the cell before separating"
   ],
   "correct": 1,
   "explanation": "In meiosis I, homologous chromosomes pair (synapsis) and are separated, which reduces the chromosome number by half. In mitosis, homologous chromosomes do not pair; sister chromatids separate."
  },
  {
   "id": "be2-58",
   "unit": 5,
   "stem": "A person with blood type AB has the genotype IᴬIᴮ. Which pattern of inheritance does the AB blood type illustrate?",
   "choices": [
    "Codominance, in which both alleles are fully expressed",
    "Incomplete dominance, in which the phenotype is a blend",
    "Epistasis, in which one gene masks another",
    "Complete dominance, in which one allele masks the other"
   ],
   "correct": 0,
   "explanation": "In codominance, the heterozygote shows the phenotypes of both alleles at the same time. A person with type AB blood has red blood cells that carry both the A and B antigens."
  },
  {
   "id": "be2-59",
   "unit": 3,
   "stem": "What is the primary role of the proton (H⁺) gradient that is established across the inner mitochondrial membrane during aerobic respiration?",
   "choices": [
    "It transports glucose into the mitochondrial matrix for breakdown",
    "It carries electrons directly from NADH to molecular oxygen",
    "It breaks pyruvate down into carbon dioxide and water",
    "It provides the energy that drives ATP synthase to make ATP"
   ],
   "correct": 3,
   "explanation": "The electron transport chain pumps protons into the intermembrane space, creating a gradient. Protons flow back into the matrix through ATP synthase, and this flow drives the phosphorylation of ADP to ATP (chemiosmosis)."
  },
  {
   "id": "be2-60",
   "unit": 8,
   "stem": "The removal of sea otters from a kelp forest ecosystem leads to a large increase in sea urchins and the destruction of the kelp. Which term describes the sea otter in this ecosystem?",
   "choices": [
    "Invasive species",
    "Primary producer",
    "Keystone species",
    "Decomposer"
   ],
   "correct": 2,
   "explanation": "A keystone species has an effect on its community that is much larger than its abundance would suggest. Sea otters keep urchin populations in check, which protects the kelp that supports many other species."
  }
 ],
 "sets": {
  "be2-set1": {
   "text": "A student crossed two pea plants that were both heterozygous for seed shape and seed color (RrYy × RrYy) and recorded the phenotypes of 556 offspring. The observed and expected numbers (based on a 9:3:3:1 ratio) are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Phenotype",
       "Observed",
       "Expected"
      ],
      "rows": [
       [
        "Round, yellow",
        "315",
        "312.75"
       ],
       [
        "Round, green",
        "108",
        "104.25"
       ],
       [
        "Wrinkled, yellow",
        "101",
        "104.25"
       ],
       [
        "Wrinkled, green",
        "32",
        "34.75"
       ]
      ]
     }
    }
   ]
  },
  "be2-set2": {
   "text": "The graph shows the rate of an enzyme-catalyzed reaction at different substrate concentrations, with and without a competitive inhibitor present.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"120\" y1=\"262\" x2=\"120\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"120\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"176\" y1=\"262\" x2=\"176\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"176\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"232\" y1=\"262\" x2=\"232\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"232\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">15</text><line x1=\"288\" y1=\"262\" x2=\"288\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"288\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"344\" y1=\"262\" x2=\"344\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"344\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">25</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Substrate concentration (mM)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Reaction rate (μmol/min)</text><path d=\"M64 262L66.8 235.11L69.6 213.6L72.4 196L75.2 181.33L78 168.92L80.8 158.29L83.6 149.07L86.4 141L89.2 133.88L92 127.56L94.8 121.89L97.6 116.8L100.4 112.19L103.2 108L106 104.17L108.8 100.67L111.6 97.44L114.4 94.46L117.2 91.7L120 89.14L122.8 86.76L125.6 84.53L128.4 82.45L131.2 80.5L134 78.67L136.8 76.94L139.6 75.31L142.4 73.78L145.2 72.32L148 70.95L150.8 69.64L153.6 68.4L156.4 67.22L159.2 66.1L162 65.02L164.8 64L167.6 63.02L170.4 62.09L173.2 61.19L176 60.33L178.8 59.51L181.6 58.72L184.4 57.96L187.2 57.23L190 56.53L192.8 55.85L195.6 55.2L198.4 54.57L201.2 53.96L204 53.38L206.8 52.81L209.6 52.27L212.4 51.74L215.2 51.23L218 50.73L220.8 50.25L223.6 49.78L226.4 49.33L229.2 48.9L232 48.47L234.8 48.06L237.6 47.66L240.4 47.27L243.2 46.89L246 46.52L248.8 46.16L251.6 45.81L254.4 45.47L257.2 45.14L260 44.82L262.8 44.51L265.6 44.2L268.4 43.9L271.2 43.61L274 43.33L276.8 43.05L279.6 42.78L282.4 42.51L285.2 42.25L288 42L290.8 41.75L293.6 41.51L296.4 41.27L299.2 41.04L302 40.82L304.8 40.6L307.6 40.38L310.4 40.17L313.2 39.96L316 39.76L318.8 39.56L321.6 39.36L324.4 39.17L327.2 38.98L330 38.8L332.8 38.62L335.6 38.44L338.4 38.26L341.2 38.09L344 37.93L346.8 37.76L349.6 37.6L352.4 37.44L355.2 37.29L358 37.13L360.8 36.98L363.6 36.83L366.4 36.69L369.2 36.55L372 36.41L374.8 36.27L377.6 36.13L380.4 36L383.2 35.87L386 35.74L388.8 35.61L391.6 35.49L394.4 35.37L397.2 35.24L400 35.13\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L66.8 252.32L69.6 243.38L72.4 235.11L75.2 227.43L78 220.28L80.8 213.6L83.6 207.35L86.4 201.5L89.2 196L92 190.82L94.8 185.94L97.6 181.33L100.4 176.97L103.2 172.84L106 168.92L108.8 165.2L111.6 161.66L114.4 158.29L117.2 155.07L120 152L122.8 149.07L125.6 146.26L128.4 143.57L131.2 141L134 138.53L136.8 136.16L139.6 133.88L142.4 131.69L145.2 129.58L148 127.56L150.8 125.6L153.6 123.71L156.4 121.89L159.2 120.14L162 118.44L164.8 116.8L167.6 115.21L170.4 113.68L173.2 112.19L176 110.75L178.8 109.35L181.6 108L184.4 106.69L187.2 105.41L190 104.17L192.8 102.97L195.6 101.8L198.4 100.67L201.2 99.56L204 98.49L206.8 97.44L209.6 96.42L212.4 95.43L215.2 94.46L218 93.52L220.8 92.6L223.6 91.7L226.4 90.83L229.2 89.98L232 89.14L234.8 88.33L237.6 87.53L240.4 86.76L243.2 86L246 85.26L248.8 84.53L251.6 83.82L254.4 83.13L257.2 82.45L260 81.79L262.8 81.14L265.6 80.5L268.4 79.88L271.2 79.27L274 78.67L276.8 78.08L279.6 77.5L282.4 76.94L285.2 76.39L288 75.85L290.8 75.31L293.6 74.79L296.4 74.28L299.2 73.78L302 73.28L304.8 72.8L307.6 72.32L310.4 71.86L313.2 71.4L316 70.95L318.8 70.5L321.6 70.07L324.4 69.64L327.2 69.22L330 68.81L332.8 68.4L335.6 68L338.4 67.61L341.2 67.22L344 66.84L346.8 66.46L349.6 66.1L352.4 65.73L355.2 65.38L358 65.02L360.8 64.68L363.6 64.34L366.4 64L369.2 63.67L372 63.34L374.8 63.02L377.6 62.71L380.4 62.39L383.2 62.09L386 61.78L388.8 61.49L391.6 61.19L394.4 60.9L397.2 60.62L400 60.33\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">No inhibitor</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">With inhibitor</text></svg>",
     "alt": "A graph of reaction rate in micromoles per minute against substrate concentration in millimolar. The curve without inhibitor rises steeply and levels off near 10. The curve with the inhibitor rises more slowly but also approaches 10 at high substrate concentrations."
    }
   ]
  },
  "be2-set3": {
   "text": "The graph shows the growth of a population of insects introduced into a new habitat over 20 weeks.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"221.67\" x2=\"496\" y2=\"221.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"225.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"181.33\" x2=\"496\" y2=\"181.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"185.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"64\" y1=\"141\" x2=\"496\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">300</text><line x1=\"64\" y1=\"100.67\" x2=\"496\" y2=\"100.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"104.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">400</text><line x1=\"64\" y1=\"60.33\" x2=\"496\" y2=\"60.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"64.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">500</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">600</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"150.4\" y1=\"262\" x2=\"150.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"236.8\" y1=\"262\" x2=\"236.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"236.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"323.2\" y1=\"262\" x2=\"323.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"323.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"409.6\" y1=\"262\" x2=\"409.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"409.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">16</text><line x1=\"496\" y1=\"262\" x2=\"496\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time (weeks)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Population size</text><path d=\"M64 257.97L67.6 257.62L71.2 257.25L74.8 256.85L78.4 256.42L82 255.94L85.6 255.44L89.2 254.88L92.8 254.29L96.4 253.65L100 252.95L103.6 252.21L107.2 251.4L110.8 250.53L114.4 249.6L118 248.59L121.6 247.51L125.2 246.35L128.8 245.1L132.4 243.76L136 242.33L139.6 240.81L143.2 239.17L146.8 237.43L150.4 235.57L154 233.6L157.6 231.51L161.2 229.29L164.8 226.94L168.4 224.46L172 221.84L175.6 219.1L179.2 216.22L182.8 213.2L186.4 210.05L190 206.77L193.6 203.37L197.2 199.84L200.8 196.2L204.4 192.46L208 188.61L211.6 184.68L215.2 180.67L218.8 176.6L222.4 172.47L226 168.3L229.6 164.11L233.2 159.91L236.8 155.72L240.4 151.54L244 147.4L247.6 143.3L251.2 139.26L254.8 135.3L258.4 131.42L262 127.63L265.6 123.95L269.2 120.37L272.8 116.92L276.4 113.59L280 110.39L283.6 107.32L287.2 104.38L290.8 101.58L294.4 98.91L298 96.38L301.6 93.98L305.2 91.71L308.8 89.56L312.4 87.54L316 85.64L319.6 83.85L323.2 82.17L326.8 80.6L330.4 79.13L334 77.76L337.6 76.48L341.2 75.28L344.8 74.17L348.4 73.13L352 72.17L355.6 71.28L359.2 70.44L362.8 69.67L366.4 68.96L370 68.3L373.6 67.68L377.2 67.12L380.8 66.59L384.4 66.1L388 65.65L391.6 65.24L395.2 64.86L398.8 64.5L402.4 64.17L406 63.87L409.6 63.59L413.2 63.34L416.8 63.1L420.4 62.88L424 62.68L427.6 62.5L431.2 62.32L434.8 62.17L438.4 62.02L442 61.89L445.6 61.76L449.2 61.65L452.8 61.55L456.4 61.45L460 61.36L463.6 61.28L467.2 61.2L470.8 61.13L474.4 61.07L478 61.01L481.6 60.96L485.2 60.91L488.8 60.86L492.4 60.82L496 60.78\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A graph of population size against time in weeks. The population starts near 10 and increases slowly at first, then rapidly between about weeks 5 and 10, and levels off near 500 after week 14."
    }
   ]
  },
  "be2-set4": {
   "text": "A student measured the rate of oxygen consumption (a measure of cellular respiration) in germinating pea seeds and in non-germinating pea seeds at two temperatures. The data are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Seeds",
       "Temperature (°C)",
       "O₂ consumed (mL/min)"
      ],
      "rows": [
       [
        "Germinating",
        "10",
        "1.2"
       ],
       [
        "Germinating",
        "25",
        "3.6"
       ],
       [
        "Non-germinating",
        "10",
        "0.1"
       ],
       [
        "Non-germinating",
        "25",
        "0.1"
       ]
      ]
     }
    }
   ]
  },
  "be2-set5": {
   "text": "A student examined 400 cells from an onion root tip under a microscope and recorded the phase of the cell cycle for each cell. The data are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Phase",
       "Number of cells"
      ],
      "rows": [
       [
        "Interphase",
        "340"
       ],
       [
        "Prophase",
        "40"
       ],
       [
        "Metaphase",
        "10"
       ],
       [
        "Anaphase",
        "5"
       ],
       [
        "Telophase",
        "5"
       ]
      ]
     }
    }
   ]
  },
  "be2-set6": {
   "text": "Pieces of onion epidermis were placed in sucrose solutions of different concentrations. After 20 minutes, the percentage of cells in which the cell membrane had pulled away from the cell wall (plasmolysis) was determined. The data are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Sucrose concentration (M)",
       "Cells plasmolyzed (%)"
      ],
      "rows": [
       [
        "0.0",
        "0"
       ],
       [
        "0.2",
        "10"
       ],
       [
        "0.4",
        "45"
       ],
       [
        "0.6",
        "95"
       ]
      ]
     }
    }
   ]
  },
  "be2-set7": {
   "text": "A normal gene produces an mRNA containing the codon GAA, which codes for glutamic acid (Glu). Three different mutations change this codon. The codons and the amino acids they specify are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Mutant",
       "Altered codon",
       "Result"
      ],
      "rows": [
       [
        "1",
        "GAG",
        "Glu (glutamic acid)"
       ],
       [
        "2",
        "GAC",
        "Asp (aspartic acid)"
       ],
       [
        "3",
        "UAA",
        "Stop"
       ]
      ]
     }
    }
   ]
  },
  "be2-set8": {
   "text": "Two communities of the same four species of insects were sampled in a field. The numbers of individuals of each species are shown in the table. Simpson's diversity index is D = 1 − Σ(n/N)².",
   "figures": [
    {
     "table": {
      "headers": [
       "Species",
       "Community 1",
       "Community 2"
      ],
      "rows": [
       [
        "A",
        "25",
        "85"
       ],
       [
        "B",
        "25",
        "5"
       ],
       [
        "C",
        "25",
        "5"
       ],
       [
        "D",
        "25",
        "5"
       ]
      ]
     }
    }
   ]
  },
  "be2-set9": {
   "text": "The table shows the number of amino acid differences in the cytochrome c protein between humans and four other organisms.",
   "figures": [
    {
     "table": {
      "headers": [
       "Organism compared with humans",
       "Amino acid differences in cytochrome c"
      ],
      "rows": [
       [
        "Chimpanzee",
        "0"
       ],
       [
        "Rhesus monkey",
        "1"
       ],
       [
        "Horse",
        "12"
       ],
       [
        "Yeast",
        "44"
       ]
      ]
     }
    }
   ]
  },
  "be2-set10": {
   "text": "Bacteria were grown in a culture and exposed to an antibiotic. The graph shows the percentage of bacteria in the culture that were resistant to the antibiotic over 25 days.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"213.6\" x2=\"496\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"165.2\" x2=\"496\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"116.8\" x2=\"496\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"68.4\" x2=\"496\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"150.4\" y1=\"262\" x2=\"150.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"236.8\" y1=\"262\" x2=\"236.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"236.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"323.2\" y1=\"262\" x2=\"323.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"323.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">15</text><line x1=\"409.6\" y1=\"262\" x2=\"409.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"409.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"496\" y1=\"262\" x2=\"496\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">25</text><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Days of antibiotic exposure</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Resistant bacteria in culture (%)</text><path d=\"M64 259.58L68.32 259.36L72.64 259.12L76.96 258.86L81.28 258.58L85.6 258.27L89.92 257.94L94.24 257.57L98.56 257.18L102.88 256.74L107.2 256.27L111.52 255.76L115.84 255.21L120.16 254.61L124.48 253.96L128.8 253.25L133.12 252.48L137.44 251.64L141.76 250.74L146.08 249.76L150.4 248.71L154.72 247.56L159.04 246.33L163.36 245L167.68 243.56L172 242.01L176.32 240.35L180.64 238.56L184.96 236.64L189.28 234.59L193.6 232.39L197.92 230.03L202.24 227.53L206.56 224.86L210.88 222.02L215.2 219.02L219.52 215.84L223.84 212.48L228.16 208.94L232.48 205.23L236.8 201.34L241.12 197.28L245.44 193.05L249.76 188.65L254.08 184.1L258.4 179.41L262.72 174.59L267.04 169.64L271.36 164.6L275.68 159.47L280 154.26L284.32 149.01L288.64 143.73L292.96 138.44L297.28 133.15L301.6 127.9L305.92 122.7L310.24 117.56L314.56 112.51L318.88 107.57L323.2 102.74L327.52 98.04L331.84 93.49L336.16 89.09L340.48 84.85L344.8 80.78L349.12 76.89L353.44 73.17L357.76 69.63L362.08 66.26L366.4 63.08L370.72 60.07L375.04 57.23L379.36 54.55L383.68 52.04L388 49.69L392.32 47.48L396.64 45.42L400.96 43.5L405.28 41.71L409.6 40.04L413.92 38.49L418.24 37.05L422.56 35.71L426.88 34.47L431.2 33.33L435.52 32.27L439.84 31.29L444.16 30.38L448.48 29.55L452.8 28.78L457.12 28.07L461.44 27.41L465.76 26.81L470.08 26.25L474.4 25.74L478.72 25.27L483.04 24.84L487.36 24.44L491.68 24.07L496 23.74\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A graph of the percentage of resistant bacteria against days of antibiotic exposure. The percentage starts near 1 percent, rises slowly for the first 5 days, then rises rapidly between days 10 and 20, and levels off near 100 percent."
    }
   ]
  }
 }
};

export default EXAM;
