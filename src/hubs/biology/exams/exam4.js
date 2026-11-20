// AP Biology — Exam 4 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "be4-1",
   "unit": 3,
   "stem": "In the Calvin cycle, which enzyme catalyzes the attachment of CO₂ to ribulose bisphosphate (RuBP)?",
   "choices": [
    "Rubisco",
    "ATP synthase",
    "DNA polymerase",
    "Catalase"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Rubisco. Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygenase) carries out carbon fixation, the first step of the Calvin cycle in the chloroplast stroma. It attaches CO₂ to the five-carbon sugar RuBP, forming an unstable six-carbon intermediate that immediately splits into two molecules of 3-phosphoglycerate (3-PGA). Rubisco is thought to be the most abundant protein on Earth, partly because it is a slow enzyme.\n\n(B) is wrong because ATP synthase makes ATP from ADP and phosphate using a proton gradient; it does not fix CO₂.\n(C) is wrong because DNA polymerase copies DNA during replication and plays no role in the reactions of the Calvin cycle.\n(D) is wrong because catalase breaks down hydrogen peroxide into water and oxygen, mainly in peroxisomes, and does not fix carbon."
  },
  {
   "id": "be4-2",
   "unit": 8,
   "stem": "A population of mice grows at a constant rate of 7% per year. Using the rule of 70, what is the approximate doubling time of the population?",
   "choices": [
    "70 years",
    "14 years",
    "10 years",
    "5 years"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 10 years. The rule of 70 estimates the doubling time of anything growing at a constant percentage rate: doubling time ≈ 70 ÷ (percent growth per period). It comes from ln 2 ≈ 0.693, so dividing 69.3 (rounded to 70) by the growth rate gives the time to double. Here, doubling time ≈ 70 ÷ 7 per year = 10 years.\n\n(A) is wrong because 70 years is the numerator of the rule itself; the slip is forgetting to divide 70 by the growth rate of 7.\n(B) is wrong because 14 years comes from dividing by 5 instead of 7, or from using 100 instead of 70 (100 ÷ 7 ≈ 14).\n(D) is wrong because 5 years is half the correct value, as if 35 rather than 70 were divided by the 7% rate."
  },
  {
   "id": "be4-3",
   "unit": 7,
   "stem": "A population has an allele frequency of p = 0.8 for allele A. Each generation, 10% of the individuals in the population are immigrants from another population in which p = 0.2. Assuming no other evolutionary forces, what is the allele frequency of A after one generation of migration?",
   "choices": [
    "0.86",
    "0.80",
    "0.74",
    "0.70"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.74. Gene flow replaces part of the population with migrants, so the new allele frequency is a weighted average of the residents and the immigrants. After migration, 90% of the individuals carry the resident frequency (0.8) and 10% carry the source frequency (0.2): p′ = (0.90)(0.8) + (0.10)(0.2) = 0.72 + 0.02 = 0.74. Gene flow moves p toward the source population's value, making the two populations more similar.\n\n(A) is wrong because 0.86 moves p in the wrong direction (0.8 + 0.06); immigrants with p = 0.2 must lower the frequency, not raise it.\n(B) is wrong because 0.80 assumes migration has no effect, but 10% of the individuals now come from a population with a much lower p.\n(D) is wrong because 0.70 subtracts the immigrants' contribution (0.72 − 0.02) instead of adding it to the residents' contribution."
  },
  {
   "id": "be4-4",
   "unit": 3,
   "stem": "For the Calvin cycle to produce one net molecule of the three-carbon sugar G3P, how many molecules of ATP and NADPH are required?",
   "choices": [
    "3 ATP and 2 NADPH",
    "6 ATP and 4 NADPH",
    "9 ATP and 6 NADPH",
    "18 ATP and 12 NADPH"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 9 ATP and 6 NADPH. Each turn of the Calvin cycle fixes one CO₂, so making one net G3P (three carbons) takes three turns. Three turns use 3 × 3 = 9 ATP (6 for phosphorylating 3-PGA and 3 for regenerating RuBP) and 3 × 2 = 6 NADPH (to reduce 1,3-bisphosphoglycerate to G3P). Both energy carriers come from the light-dependent reactions in the thylakoids.\n\n(A) is wrong because 3 ATP and 2 NADPH is the cost of one turn (one CO₂), which fixes only one carbon, not a whole three-carbon G3P.\n(B) is wrong because 6 ATP and 4 NADPH is the cost of only two turns (two CO₂ fixed, 2 × 3 ATP and 2 × 2 NADPH); a three-carbon G3P needs three turns, costing 9 ATP and 6 NADPH.\n(D) is wrong because 18 ATP and 12 NADPH is the cost of fixing six CO₂, which yields two G3P (enough for one glucose), not one."
  },
  {
   "id": "be4-5",
   "unit": 2,
   "stem": "Which statement best describes the function of the nuclear pores in the nuclear envelope?",
   "choices": [
    "They allow the DNA to leave the nucleus and enter the cytoplasm freely.",
    "They are the sites where proteins are made on the surface of the envelope.",
    "They block every kind of molecule from crossing the nuclear envelope.",
    "They regulate the movement of mRNA and proteins between the nucleus and cytoplasm."
   ],
   "correct": 3,
   "explanation": "Correct: (D) They regulate the movement of mRNA and proteins between the nucleus and cytoplasm. The nuclear envelope is a double membrane perforated by nuclear pore complexes, large protein structures that control traffic in both directions. mRNA molecules and ribosomal subunits made in the nucleus are exported to the cytoplasm, and proteins such as histones, DNA polymerase and transcription factors are imported. Large molecules need nuclear localization or export signals, so the passage is selective, not free.\n\n(A) is wrong because DNA stays inside the nucleus; it is far too large to pass through the pores, and only its RNA transcripts are exported.\n(B) is wrong because proteins are made by ribosomes in the cytosol or on the rough ER, not at the nuclear pores themselves.\n(C) is wrong because the pores exist precisely to let molecules such as mRNA and proteins cross, so they do not block everything."
  },
  {
   "id": "be4-6",
   "unit": 6,
   "stem": "In a sample of double-stranded DNA, 20% of the nucleotides are thymine. What percentage of the nucleotides are guanine?",
   "choices": [
    "60%",
    "40%",
    "30%",
    "20%"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 30%. In double-stranded DNA, A pairs with T and G pairs with C (Chargaff's rules), so %A = %T and %G = %C. With T = 20%, A = 20%, so A + T = 40%. The remaining 100% − 40% = 60% is shared equally by G and C, so G = 60% ÷ 2 = 30%.\n\n(A) is wrong because 60% is the combined G + C content; the slip is forgetting to split it equally between guanine and cytosine.\n(B) is wrong because 40% is the combined A + T content, which is the percentage of bases that are not G or C.\n(D) is wrong because 20% wrongly assumes all four bases equal thymine; only adenine must equal thymine under base pairing."
  },
  {
   "id": "be4-7",
   "unit": 4,
   "stem": "Which of the following correctly distinguishes homologous chromosomes from sister chromatids?",
   "choices": [
    "Homologous chromosomes are a maternal and a paternal copy of the same chromosome, while sister chromatids are identical copies produced by DNA replication.",
    "Homologous chromosomes are identical copies produced by replication, while sister chromatids are maternal and paternal chromosomes.",
    "Homologous chromosomes are found only in mitosis, and sister chromatids only in meiosis.",
    "Homologous chromosomes contain different genes, and sister chromatids contain the same genes."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Homologous chromosomes are a maternal and a paternal copy of the same chromosome, while sister chromatids are identical copies produced by DNA replication. Homologous chromosomes are a matched pair, one from the mother and one from the father, carrying the same genes at the same loci but possibly different alleles. Sister chromatids are the two identical DNA copies made during S phase and held together at the centromere. Homologs separate in meiosis I; sister chromatids separate in mitosis and meiosis II.\n\n(B) is wrong because this reverses the two definitions; replication makes sister chromatids, while homologs come from the two parents.\n(C) is wrong because both structures occur in both processes: homologs are present in mitosis too, and sister chromatids exist in both divisions.\n(D) is wrong because homologous chromosomes carry the same genes (in the same order); they may differ only in their alleles."
  },
  {
   "id": "be4-8",
   "unit": 6,
   "stem": "During DNA replication, which enzyme synthesizes a short RNA primer that provides a starting point for DNA polymerase?",
   "choices": [
    "DNA ligase",
    "Helicase",
    "Topoisomerase",
    "Primase"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Primase. DNA polymerase cannot start a new strand on its own; it can only add nucleotides to an existing 3′-OH end. Primase, an RNA polymerase, lays down a short RNA primer (about 5–10 nucleotides) that supplies that 3′ end. The leading strand needs one primer, while the lagging strand needs a new primer for every Okazaki fragment; the primers are later replaced with DNA.\n\n(A) is wrong because DNA ligase seals the nicks between adjacent Okazaki fragments after the primers are replaced; it makes no primers.\n(B) is wrong because helicase unwinds the double helix at the replication fork by breaking hydrogen bonds between bases, not by making primers.\n(C) is wrong because topoisomerase relieves the supercoiling ahead of the fork by cutting and rejoining DNA; it does not synthesize RNA."
  },
  {
   "id": "be4-9",
   "unit": 6,
   "stem": "The template strand of a gene has the sequence 3′-TACGGATT-5′. Which of the following is the sequence of the mRNA that is transcribed from this template?",
   "choices": [
    "5′-AUGCCUAA-3′",
    "5′-ATGCCTAA-3′",
    "5′-UACGGAUU-3′",
    "5′-AUGCCUAA-5′"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 5′-AUGCCUAA-3′. RNA polymerase reads the template 3′→5′ and builds mRNA 5′→3′, so the mRNA is complementary and antiparallel to the template, with U in place of T. Pairing each base: T→A, A→U, C→G, G→C, G→C, A→U, T→A, T→A. Reading 3′-TACGGATT-5′ gives 5′-AUGCCUAA-3′, which is the same as the coding strand with U for T (and begins with the AUG start codon).\n\n(B) is wrong because 5′-ATGCCTAA-3′ contains thymine, which is the coding DNA strand; RNA uses uracil instead of thymine.\n(C) is wrong because 5′-UACGGAUU-3′ just copies the template with U for T instead of pairing complementary bases, and it ignores antiparallel orientation.\n(D) is wrong because a single strand cannot have a 5′ end at both ends; the mRNA must run 5′ to 3′."
  },
  {
   "id": "be4-10",
   "unit": 5,
   "stem": "Mitochondria contain their own DNA. In humans, how are mitochondrial genes inherited?",
   "choices": [
    "They are inherited from the father, because the sperm supplies the mitochondria.",
    "They are inherited equally from both parents.",
    "They are not inherited, because mitochondria form from new DNA in each zygote.",
    "They are inherited from the mother, because the egg supplies the mitochondria to the zygote."
   ],
   "correct": 3,
   "explanation": "Correct: (D) They are inherited from the mother, because the egg supplies the mitochondria to the zygote. Mitochondria are inherited through the egg's cytoplasm. The egg contributes nearly all of the zygote's cytoplasm and hundreds of thousands of mitochondria, while the few sperm mitochondria (in the midpiece) are usually destroyed after fertilization. Mitochondrial genes, and disorders caused by mutations in them, are therefore passed from a mother to all of her children, a pattern called maternal inheritance.\n\n(A) is wrong because the sperm contributes almost no cytoplasm, and its mitochondria are normally marked and degraded in the zygote.\n(B) is wrong because equal inheritance describes nuclear genes; mitochondrial DNA comes almost entirely from the egg.\n(C) is wrong because mitochondria arise only by division of existing mitochondria, so their DNA is inherited rather than made new."
  },
  {
   "id": "be4-11",
   "unit": 7,
   "stem": "Genes called Hox genes, which control the body plan of the embryo, are very similar in organisms as different as flies and mice. What does this similarity suggest?",
   "choices": [
    "The genes were inherited from a common ancestor and have been conserved.",
    "The genes evolved independently in the flies and in the mice.",
    "The genes are not important for the development of the embryo.",
    "Flies and mice have identical body plans, so the genes are identical."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The genes were inherited from a common ancestor and have been conserved. Hox genes encode transcription factors that specify positions along the head-to-tail axis. Very similar Hox sequences, and even the same order of genes on the chromosome, are found in flies and mice, whose lineages split over 500 million years ago. Such deep similarity is best explained by inheritance from a common ancestor, with strong purifying selection conserving the genes because mutations in them disrupt development.\n\n(B) is wrong because independent evolution would not be expected to produce nearly identical sequences and gene order in two distant lineages.\n(C) is wrong because Hox genes control the body plan, so they are essential for development; that importance is why they are conserved.\n(D) is wrong because flies and mice have very different body plans; conserved control genes are deployed differently to build them."
  },
  {
   "id": "be4-12",
   "unit": 6,
   "stem": "Small RNA molecules called microRNAs (miRNAs) can bind to complementary sequences in the mRNA of target genes. What is the effect of this binding?",
   "choices": [
    "It increases the rate of DNA replication of the target gene in the nucleus.",
    "It attaches a protective cap to the 5′ end of the target mRNA molecule.",
    "It converts the target mRNA into a double-stranded DNA copy of the gene.",
    "It blocks translation or leads to mRNA degradation, reducing gene expression."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It blocks translation or leads to mRNA degradation, reducing gene expression. microRNAs are short (about 22 nucleotide) noncoding RNAs that join a protein complex (RISC) and base-pair with complementary sequences, usually in the 3′ untranslated region of target mRNAs. Close pairing leads to cleavage and degradation of the mRNA, while partial pairing blocks translation. Either way, less protein is made, so miRNAs regulate gene expression after transcription.\n\n(A) is wrong because miRNAs act on mRNA in the cytoplasm and do not affect the rate of DNA replication in the nucleus.\n(B) is wrong because the 5′ cap is added by capping enzymes during processing of pre-mRNA, not by miRNA binding.\n(C) is wrong because copying RNA into DNA is reverse transcription, which miRNAs do not perform; they reduce expression instead."
  },
  {
   "id": "be4-13",
   "unit": 5,
   "stem": "Two parents are both carriers of a recessive allele (Aa). What is the probability that at least one of their two children will have the recessive disorder?",
   "choices": [
    "1/16",
    "3/8",
    "7/16",
    "9/16"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 7/16. For a cross Aa × Aa, each child independently has a 1/4 chance of being aa (affected) and a 3/4 chance of being unaffected. \"At least one\" is easiest by the complement: P(neither affected) = (3/4)(3/4) = 9/16, so P(at least one affected) = 1 − 9/16 = 7/16. Check: P(exactly one) = 2(1/4)(3/4) = 6/16, plus P(both) = 1/16, gives 7/16.\n\n(A) is wrong because 1/16 is the probability that both children are affected, (1/4)(1/4), not at least one.\n(B) is wrong because 3/8 (6/16) is the probability that exactly one child is affected; it leaves out the 1/16 chance that both are.\n(D) is wrong because 9/16 is the probability that neither child is affected, the complement of the event asked for."
  },
  {
   "id": "be4-14",
   "unit": 8,
   "stem": "Two species of barnacles that live on the same rocky shore compete for space. One species lives in the upper zone and the other in the lower zone, but the lower species excludes the upper species when the upper species is placed in the lower zone. What does this illustrate?",
   "choices": [
    "Mutualism between the two species of barnacles on the shore",
    "Primary succession on the bare rock of the shoreline over time",
    "Biomagnification of a toxin in the food web of the intertidal zone",
    "The fundamental niche versus the realized niche, as shaped by competition"
   ],
   "correct": 3,
   "explanation": "Correct: (D) The fundamental niche versus the realized niche, as shaped by competition. The fundamental niche is the full range of conditions a species could occupy; the realized niche is the part it actually occupies given interactions such as competition. The upper-zone species can live in the lower zone (so that zone is in its fundamental niche) but is excluded there by the superior competitor, restricting its realized niche to the upper zone. This is Connell's classic barnacle experiment.\n\n(A) is wrong because mutualism benefits both species, but here one species harms the other by excluding it from space.\n(B) is wrong because primary succession is community change on newly exposed rock over time; the stem describes competition for space instead.\n(C) is wrong because biomagnification is the buildup of a toxin up a food chain; no toxin or feeding relationship is described."
  },
  {
   "id": "be4-15",
   "unit": 3,
   "stem": "Some bacteria that live in the digestive systems of animals cannot survive in the presence of oxygen. How do these obligate anaerobes obtain ATP?",
   "choices": [
    "By fermentation or anaerobic respiration, using a molecule other than oxygen",
    "By aerobic respiration, using oxygen as the terminal electron acceptor",
    "By photosynthesis, using sunlight in the gut",
    "They do not need ATP, because they are dormant"
   ],
   "correct": 0,
   "explanation": "Correct: (A) By fermentation or anaerobic respiration, using a molecule other than oxygen. Obligate anaerobes are poisoned by oxygen, so they cannot use it as the final electron acceptor. They make ATP by glycolysis followed by fermentation (regenerating NAD⁺ by reducing pyruvate or a derivative), or by anaerobic respiration, in which an electron transport chain passes electrons to another acceptor such as sulfate or nitrate. Both yield much less ATP per glucose than aerobic respiration.\n\n(B) is wrong because aerobic respiration requires oxygen as the terminal acceptor, and these bacteria cannot survive in its presence.\n(C) is wrong because the inside of an animal's digestive tract is dark, and these gut bacteria are not photosynthetic.\n(D) is wrong because all living, active cells need ATP; the stem says these bacteria live and grow in the gut."
  },
  {
   "id": "be4-16",
   "unit": 2,
   "stem": "Lysosomes contain hydrolytic enzymes that function best at an acidic pH. Why does a lysosomal enzyme cause little damage if it leaks into the cytosol, which has a nearly neutral pH?",
   "choices": [
    "The enzyme is much less active at the neutral pH of the cytosol.",
    "The cytosol contains inhibitors that break down all enzymes quickly.",
    "The enzymes cannot be made unless the pH is acidic.",
    "Cytosolic enzymes destroy the lysosomal enzymes at once."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The enzyme is much less active at the neutral pH of the cytosol. Each enzyme has an optimal pH because the charges on its amino acid side chains, and therefore its folding and active site, depend on pH. Lysosomal hydrolases work best near pH 5, the acidic pH maintained inside the lysosome by proton pumps. At the cytosolic pH of about 7.2 they have little activity, so a small leak does little damage, which protects the cell from self-digestion.\n\n(B) is wrong because the protection comes from the pH difference, not from inhibitors that rapidly destroy every enzyme in the cytosol.\n(C) is wrong because lysosomal enzymes are synthesized on ribosomes of the rough ER at ordinary pH; only their activity depends on acidity.\n(D) is wrong because cytosolic enzymes do not attack leaked hydrolases; the enzymes are simply much less active at neutral pH."
  },
  {
   "id": "be4-17",
   "unit": 2,
   "setId": "be4-set1",
   "stem": "Which of the following best describes the uptake of molecule B?",
   "choices": [
    "It enters by simple diffusion through the lipid bilayer of the membrane.",
    "It enters by osmosis through water channels called aquaporins in the membrane.",
    "It enters by a process that is not affected by the outside concentration.",
    "It enters by facilitated diffusion through a limited number of carrier proteins."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It enters by facilitated diffusion through a limited number of carrier proteins. The graph shows that the uptake rate of molecule B rises steeply at low concentration and then levels off at about 8 relative units, even as the outside concentration rises to 10 mM. A plateau means saturation: every carrier protein is already working at its maximum rate, so adding more molecules cannot speed transport. Carrier-mediated transport such as facilitated diffusion has this shape, unlike simple diffusion.\n\n(A) is wrong because simple diffusion through the bilayer has no carriers to saturate, so its rate rises in a straight line like molecule A's.\n(B) is wrong because osmosis is the movement of water, not of a solute molecule like B, and the question asks about B's uptake.\n(C) is wrong because the rate clearly depends on concentration, rising sharply from 0 to about 6.5 units between 0 and 4 mM."
  },
  {
   "id": "be4-18",
   "unit": 2,
   "setId": "be4-set1",
   "stem": "Which statement best explains why the uptake of molecule A does not level off?",
   "choices": [
    "Molecule A is actively pumped across the membrane by using ATP as energy.",
    "Molecule A is too large to enter the cell through the membrane at all.",
    "Molecule A is taken up only when its outside concentration is very high.",
    "Molecule A crosses by simple diffusion, which has no limited set of proteins."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Molecule A crosses by simple diffusion, which has no limited set of proteins. The rate of uptake of molecule A increases in a straight line from 0 to about 9 units as the concentration goes from 0 to 10 mM, with no plateau. In simple diffusion, molecules cross the lipid bilayer directly, and the rate is proportional to the concentration gradient (Fick's law). With no limited number of carrier proteins to fill, the process cannot saturate.\n\n(A) is wrong because active transport uses a limited number of pump proteins, so it would level off like molecule B instead of rising linearly.\n(B) is wrong because molecule A clearly enters the cell, since its uptake rate increases steadily with concentration.\n(C) is wrong because molecule A is taken up at every concentration shown, with the rate proportional to concentration even at low values."
  },
  {
   "id": "be4-19",
   "unit": 3,
   "stem": "Which of the following correctly describes the structure of an ATP molecule?",
   "choices": [
    "Adenine, the sugar ribose, and three phosphate groups",
    "Thymine, the sugar deoxyribose, and one phosphate group",
    "Adenine, the sugar glucose, and two phosphate groups",
    "Guanine, the sugar ribose, and three carboxyl groups"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Adenine, the sugar ribose, and three phosphate groups. ATP (adenosine triphosphate) is a nucleotide made of three parts: the nitrogenous base adenine, the five-carbon sugar ribose, and a chain of three phosphate groups. Hydrolysis of the bond to the terminal phosphate, ATP → ADP + Pᵢ, releases about 30 kJ/mol under standard conditions, and that energy is coupled to cellular work such as active transport and biosynthesis.\n\n(B) is wrong because thymine and deoxyribose with one phosphate describe a DNA nucleotide (dTMP), not ATP.\n(C) is wrong because ATP contains ribose, not glucose, and three phosphate groups rather than two (two describes ADP).\n(D) is wrong because guanine with ribose would make GTP-like molecules, and nucleotides carry phosphate groups, not carboxyl groups."
  },
  {
   "id": "be4-20",
   "unit": 7,
   "stem": "In a population in Hardy–Weinberg equilibrium, the frequency of the recessive allele q is 0.3. What is the frequency of heterozygous individuals?",
   "choices": [
    "0.49",
    "0.42",
    "0.21",
    "0.09"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.42. In Hardy–Weinberg equilibrium the genotype frequencies are p², 2pq and q², with p + q = 1. Here q = 0.3, so p = 1 − 0.3 = 0.7. The heterozygote frequency is 2pq = 2(0.7)(0.3) = 0.42. The other genotypes check out: p² = 0.49 and q² = 0.09, and 0.49 + 0.42 + 0.09 = 1.00.\n\n(A) is wrong because 0.49 is p², the frequency of homozygous dominant individuals, not of heterozygotes.\n(C) is wrong because 0.21 is pq without the factor of 2; heterozygotes arise two ways (A from either parent).\n(D) is wrong because 0.09 is q² = (0.3)², the frequency of homozygous recessive individuals rather than heterozygotes."
  },
  {
   "id": "be4-21",
   "unit": 5,
   "setId": "be4-set2",
   "stem": "What is the recombination frequency between the two genes (in map units, where 1% = 1 map unit)?",
   "choices": [
    "7.5",
    "15",
    "30",
    "85"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 15. In a testcross with the dominant alleles together on one chromosome (AB/ab), the parental offspring are AB and ab, and the recombinants are Ab and aB, which need a crossover. From the table, recombinants = 80 + 70 = 150, and the total = 440 + 410 + 80 + 70 = 1000. Recombination frequency = 150 ÷ 1000 × 100% = 15%, so the genes are 15 map units apart.\n\n(A) is wrong because 7.5 is half the true value, as if only one recombinant class (or 75 offspring) were counted.\n(C) is wrong because 30 doubles the true value, as if the recombinants (150) were divided by 500 instead of the full 1000 offspring.\n(D) is wrong because 85 is the percentage of parental (nonrecombinant) offspring, (440 + 410) ÷ 1000, not of recombinants."
  },
  {
   "id": "be4-22",
   "unit": 5,
   "setId": "be4-set2",
   "stem": "Which of the following best explains why most of the offspring are not recombinant?",
   "choices": [
    "The genes are on different chromosomes and therefore assort independently of each other.",
    "The genes are located on the sex chromosomes, which do not undergo crossing over.",
    "The parents were both homozygous for the alleles of the two genes in the cross.",
    "The genes are close together on one chromosome, so crossing over between them is rare."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The genes are close together on one chromosome, so crossing over between them is rare. If the genes assorted independently, a testcross would give about 25% of each of the four phenotypes. Instead, 85% of the offspring (850 of 1000) show the parental combinations AB and ab. This shows the genes are linked: they sit close together on the same chromosome, so a crossover between them happens in only a few meioses (15% recombinants), and the parental alleles usually travel together.\n\n(A) is wrong because genes on different chromosomes would give a roughly 1:1:1:1 ratio, not 85% parental types.\n(B) is wrong because nothing in the data points to sex linkage, and the X chromosomes do cross over during female meiosis.\n(C) is wrong because the AaBb parent is heterozygous for both genes by definition; only the tester parent is homozygous."
  },
  {
   "id": "be4-23",
   "unit": 7,
   "stem": "Two species of frogs live in the same pond and can mate, but the eggs of one species are not fertilized by the sperm of the other species. Which type of reproductive barrier is this?",
   "choices": [
    "Gametic isolation, a prezygotic barrier",
    "Hybrid sterility, a postzygotic barrier",
    "Habitat isolation, a prezygotic barrier",
    "Temporal isolation, a prezygotic barrier"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Gametic isolation, a prezygotic barrier. A prezygotic barrier prevents a zygote from ever forming. Here the frogs do meet and mate, which rules out habitat and temporal isolation, but the sperm of one species cannot fertilize the eggs of the other. Incompatibility between the gametes themselves, often due to mismatched recognition proteins on the egg surface, is gametic isolation, and since no zygote forms it is prezygotic.\n\n(B) is wrong because hybrid sterility is postzygotic and requires that a hybrid be formed; here fertilization never happens.\n(C) is wrong because habitat isolation means the species live in different places, but both frogs live in the same pond.\n(D) is wrong because temporal isolation means breeding at different times, but the stem says the frogs actually mate."
  },
  {
   "id": "be4-24",
   "unit": 1,
   "stem": "A protein consists of a single polypeptide chain of 150 amino acids. How many peptide bonds are in the protein?",
   "choices": [
    "151",
    "150",
    "149",
    "148"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 149. Each peptide bond is formed by a dehydration reaction between the carboxyl group of one amino acid and the amino group of the next. In a linear chain, there is one bond between each adjacent pair, so n amino acids are joined by n − 1 bonds. For 150 amino acids: 150 − 1 = 149 peptide bonds, and 149 water molecules are released.\n\n(A) is wrong because 151 adds a bond instead of subtracting one; a linear chain always has one fewer bond than residues.\n(B) is wrong because 150 would require a circular chain, with the last amino acid bonded back to the first.\n(D) is wrong because 148 subtracts two, as if both ends of the chain lacked a bond; only one is missing overall."
  },
  {
   "id": "be4-25",
   "unit": 7,
   "stem": "Antibiotic resistance genes can be transferred between bacterial cells by a process in which a plasmid is passed through a connection from one cell to another. Which term describes this process?",
   "choices": [
    "Binary fission, in which one cell divides to form two new cells",
    "Vertical gene transmission from a parent cell to its offspring",
    "Meiosis, in which a cell produces gametes with half the chromosomes",
    "Conjugation, a type of horizontal gene transfer between cells"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Conjugation, a type of horizontal gene transfer between cells. In conjugation, a donor bacterium extends a pilus to a recipient and transfers a copy of a plasmid, such as an R plasmid carrying antibiotic resistance genes, through the connection. Because genes move between existing cells rather than from parent to offspring, conjugation is horizontal gene transfer, along with transformation and transduction. It lets resistance spread rapidly through bacterial populations.\n\n(A) is wrong because binary fission is asexual cell division; it passes genes vertically to daughter cells, with no cell-to-cell connection.\n(B) is wrong because vertical transmission is from parent to offspring, but the stem describes transfer between two existing cells.\n(C) is wrong because bacteria do not undergo meiosis or make gametes; meiosis occurs only in eukaryotes."
  },
  {
   "id": "be4-26",
   "unit": 6,
   "stem": "The promoter of a eukaryotic gene contains a sequence called the TATA box. What is the function of this sequence?",
   "choices": [
    "It is the site where the ribosome attaches to the mRNA before translation.",
    "It is a binding site for transcription factors that help start transcription.",
    "It codes for the first amino acid of the protein that the gene specifies.",
    "It is the site where the pre-mRNA is cut and spliced to remove introns."
   ],
   "correct": 1,
   "explanation": "Correct: (B) It is a binding site for transcription factors that help start transcription. The TATA box is a short T/A-rich sequence in the core promoter, about 25–30 base pairs upstream of the transcription start site. The general transcription factor TFIID (via TATA-binding protein) binds it first, and other factors then assemble and recruit RNA polymerase II. This positions the polymerase so transcription begins at the correct site.\n\n(A) is wrong because ribosomes bind mRNA near the 5′ cap and start codon; the TATA box is DNA in the promoter, which is not translated.\n(C) is wrong because the promoter lies upstream of the transcribed region, so it is not translated and codes for no amino acid.\n(D) is wrong because splicing occurs at splice sites at the edges of introns in pre-mRNA, not at the promoter."
  },
  {
   "id": "be4-27",
   "unit": 7,
   "stem": "In some regions of Africa, people who are heterozygous for the sickle-cell allele are more resistant to malaria than people who are homozygous for the normal allele. What effect does this have on the sickle-cell allele?",
   "choices": [
    "Heterozygote advantage maintains the allele in the population at a significant frequency.",
    "The allele is eliminated by natural selection, because homozygotes have a severe disease.",
    "The allele becomes fixed in the population.",
    "The allele frequency does not change."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Heterozygote advantage maintains the allele in the population at a significant frequency. In malaria regions, heterozygotes (HbA/HbS) are resistant to malaria and have only mild symptoms, so they have higher fitness than normal homozygotes (vulnerable to malaria) and sickle-cell homozygotes (severe anemia). Selection against both homozygotes keeps both alleles in the population: this balancing selection, or heterozygote advantage, maintains the sickle-cell allele at a significant frequency.\n\n(B) is wrong because selection against the sick homozygotes is offset by the advantage of heterozygotes, so the allele is not eliminated.\n(C) is wrong because fixation would make everyone a sickle-cell homozygote with low fitness; the heterozygote advantage prevents this.\n(D) is wrong because the frequency is held near a stable balance by selection, which is not the same as no evolutionary force acting."
  },
  {
   "id": "be4-28",
   "unit": 1,
   "stem": "Water can travel from the roots to the top of a tall tree. Which properties of water are most important in this process?",
   "choices": [
    "Cohesion between water molecules and adhesion to the walls of the xylem",
    "High specific heat and the ability to dissolve ionic compounds",
    "Low density as a solid and a high heat of vaporization",
    "Nonpolarity and the ability to form micelles in cells"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Cohesion between water molecules and adhesion to the walls of the xylem. Water is pulled up the xylem by transpiration from the leaves (the cohesion–tension mechanism). Cohesion, the hydrogen bonding among water molecules, keeps the column continuous so pulling at the top draws water up from the roots. Adhesion of water to the polar, hydrophilic cellulose walls of the narrow xylem vessels helps the column resist gravity and prevents it from breaking.\n\n(B) is wrong because high specific heat moderates temperature and solvent ability dissolves ions; neither lifts a water column.\n(C) is wrong because ice floating and a high heat of vaporization matter for aquatic life and cooling, not for xylem transport.\n(D) is wrong because water is polar, not nonpolar, and micelles are formed by fatty substances such as soaps, not by water."
  },
  {
   "id": "be4-29",
   "unit": 2,
   "stem": "A potato core gains 8% of its mass in a 0.4 M sucrose solution and loses 6% of its mass in a 0.6 M sucrose solution. Assuming a linear change between these two values, what is the approximate sucrose concentration at which the potato core would show no change in mass?",
   "choices": [
    "0.40 M",
    "0.51 M",
    "0.60 M",
    "1.0 M"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.51 M. The mass changes by +8% − (−6%) = 14 percentage points over the 0.2 M interval from 0.4 M to 0.6 M. For a linear change, mass change reaches zero after 8/14 of that interval: (8/14)(0.2 M) = 0.114 M above 0.4 M, or 0.4 + 0.114 = 0.51 M. At this concentration the water potential of the solution equals that of the potato cells, so there is no net water movement.\n\n(A) is wrong because at 0.40 M the core still gains 8% of its mass, so water is entering and equilibrium has not been reached.\n(C) is wrong because at 0.60 M the core loses 6% of its mass, so water is leaving and the solution is hypertonic.\n(D) is wrong because 1.0 M is far outside the measured range; extrapolating the line there predicts a large mass loss."
  },
  {
   "id": "be4-30",
   "unit": 7,
   "stem": "Uranium-238 has a half-life of 4.5 billion years. A rock sample contains 25% of the uranium-238 that it originally contained. What is the approximate age of the rock?",
   "choices": [
    "18 billion years",
    "9.0 billion years",
    "4.5 billion years",
    "2.25 billion years"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 9.0 billion years. Radioactive decay halves the remaining parent isotope each half-life: after n half-lives the fraction left is (1/2)ⁿ. Here 25% = 1/4 = (1/2)², so n = 2 half-lives have passed. Age = 2 × 4.5 billion years = 9.0 billion years. (Note that this exceeds Earth's age of about 4.6 billion years, but the arithmetic is the point here.)\n\n(A) is wrong because 18 billion years is four half-lives, which would leave (1/2)⁴ = 6.25% of the uranium, not 25%.\n(C) is wrong because 4.5 billion years is one half-life, which would leave 50% of the original uranium-238.\n(D) is wrong because 2.25 billion years is half a half-life, which would leave about 71% of the uranium."
  },
  {
   "id": "be4-31",
   "unit": 4,
   "stem": "A cell cycle lasts 20 hours, and the cell spends 4 hours in S phase. What is the fraction of the cycle spent in S phase?",
   "choices": [
    "4%",
    "20%",
    "40%",
    "80%"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 20%. The fraction of the cycle spent in a phase equals the time in that phase divided by the total cycle time. Here, 4 h ÷ 20 h = 0.20, and multiplying by 100% gives 20%. The same reasoning lets biologists estimate phase lengths from the fraction of cells in a population caught in each phase, since a phase that lasts longer contains more cells at any moment.\n\n(A) is wrong because 4% takes the 4 hours as a percentage directly, without dividing by the 20-hour cycle.\n(C) is wrong because 40% doubles the correct fraction, as if the cycle lasted 10 hours instead of 20 hours.\n(D) is wrong because 80% is the fraction of the cycle spent outside S phase (16 h ÷ 20 h), the complement."
  },
  {
   "id": "be4-32",
   "unit": 8,
   "stem": "A herbivore population has 2000 kJ of energy in its biomass, and the carnivores that eat the herbivores have 180 kJ in their biomass. What is the approximate efficiency of energy transfer from the herbivores to the carnivores?",
   "choices": [
    "0.9%",
    "9%",
    "18%",
    "90%"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 9%. Trophic (ecological) efficiency is the energy at the higher level divided by the energy at the level below, times 100%. Here, (180 kJ ÷ 2000 kJ) × 100% = 9%. This is close to the typical value of about 10%, because most energy at each level is lost as heat in respiration or is never eaten or digested, which limits the length of food chains.\n\n(A) is wrong because 0.9% is a decimal slip, dividing the ratio 0.09 by 100 instead of multiplying it by 100.\n(C) is wrong because 18% comes from dividing 180 kJ by 1000 kJ instead of the full 2000 kJ in the herbivores.\n(D) is wrong because 90% is about the fraction of energy lost between levels, not the fraction transferred to carnivores."
  },
  {
   "id": "be4-33",
   "unit": 5,
   "stem": "A student performs a chi-square test on the offspring of a cross that has four possible phenotypes. How many degrees of freedom should be used to find the critical value?",
   "choices": [
    "1",
    "2",
    "3",
    "4"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 3. For a chi-square goodness-of-fit test, the degrees of freedom equal the number of categories minus one, because once all but one of the expected counts are set, the last is fixed by the total. With four phenotype classes, df = 4 − 1 = 3. At p = 0.05 the critical value for 3 degrees of freedom is 7.81.\n\n(A) is wrong because 1 degree of freedom would apply to only two phenotype classes, such as a monohybrid 3:1 cross.\n(B) is wrong because 2 degrees of freedom would apply to three categories, such as a 1:2:1 genotype ratio.\n(D) is wrong because 4 is the number of categories itself; one must be subtracted because the total is fixed."
  },
  {
   "id": "be4-34",
   "unit": 4,
   "stem": "Epinephrine binds to a G protein-coupled receptor on a liver cell, which leads to the production of cAMP inside the cell. What is the role of cAMP in this pathway?",
   "choices": [
    "The ligand that binds to the receptor on the cell surface",
    "The receptor protein that binds the epinephrine molecule",
    "A second messenger that relays the signal inside the cell",
    "The final product that the liver cell secretes into the blood"
   ],
   "correct": 2,
   "explanation": "Correct: (C) A second messenger that relays the signal inside the cell. Epinephrine (the first messenger) is a hydrophilic hormone that cannot enter the cell, so it binds a G protein-coupled receptor on the surface. The activated G protein turns on adenylyl cyclase, which converts ATP to cyclic AMP. cAMP is a small second messenger that diffuses through the cytosol and activates protein kinase A, starting a phosphorylation cascade that leads to glycogen breakdown.\n\n(A) is wrong because the ligand is epinephrine itself, which binds outside the cell; cAMP is made inside the cell afterward.\n(B) is wrong because the receptor is a membrane protein (the GPCR), while cAMP is a small nucleotide made inside the cell.\n(D) is wrong because the liver's final response is releasing glucose made from glycogen; cAMP stays inside the cell as a relay."
  },
  {
   "id": "be4-35",
   "unit": 2,
   "stem": "Each side of a cube-shaped cell measures 3 μm. Determine the ratio of the cell's surface area to its volume.",
   "choices": [
    "6.0 μm⁻¹",
    "2.0 μm⁻¹",
    "1.0 μm⁻¹",
    "0.67 μm⁻¹"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2.0 μm⁻¹. For a cube of side s, surface area = 6s² and volume = s³. With s = 3 μm: surface area = 6 × (3 μm)² = 6 × 9 μm² = 54 μm², and volume = (3 μm)³ = 27 μm³. The ratio is 54 μm² ÷ 27 μm³ = 2.0 μm⁻¹ (equivalently 6/s = 6/3). As cells grow, this ratio falls, limiting exchange, which is why cells stay small.\n\n(A) is wrong because 6.0 μm⁻¹ divides the area (54 μm²) by 9 μm³, using s² in place of s³ for the volume.\n(C) is wrong because 1.0 μm⁻¹ uses the area of only three faces (27 μm²) over the volume of 27 μm³.\n(D) is wrong because 0.67 μm⁻¹ counts the area of only two faces (18 μm²) divided by 27 μm³."
  },
  {
   "id": "be4-36",
   "unit": 3,
   "setId": "be4-set3",
   "stem": "Which statement best explains the effect of cyanide?",
   "choices": [
    "Cyanide makes the membrane permeable to protons, so the gradient is lost entirely",
    "Electrons cannot reach oxygen, so the chain stops and no proton gradient is kept",
    "Cyanide supplies extra electrons to the chain, which quickly uses up all the oxygen",
    "Cyanide destroys the ATP that is produced by the mitochondria as soon as it forms"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Electrons cannot reach oxygen, so the chain stops and no proton gradient is kept. Cyanide blocks the final transfer of electrons to O₂ (at cytochrome c oxidase). With the last step blocked, electrons back up and stop flowing through the chain, so no O₂ is consumed and no more protons are pumped. The proton gradient quickly dissipates, so ATP synthase has nothing to drive it. This matches the table: with cyanide, O₂ consumption and ATP production are both very low.\n\n(A) is wrong because making the membrane permeable to protons is what DNP does, and it leaves O₂ consumption high, unlike cyanide.\n(C) is wrong because cyanide does not donate electrons, and the table shows that O₂ consumption falls rather than rises.\n(D) is wrong because cyanide stops ATP production at the electron transport chain; it does not break down ATP once it is formed."
  },
  {
   "id": "be4-37",
   "unit": 3,
   "setId": "be4-set3",
   "stem": "Which statement best explains why ATP production is low when DNP is added, even though oxygen consumption is high?",
   "choices": [
    "The electron transport chain stops working in the presence of DNP, so no ATP forms",
    "DNP prevents oxygen from entering the mitochondria, so no proton gradient can form",
    "DNP breaks down the ATP synthase enzyme, so the gradient cannot be put to use",
    "Protons leak across the membrane, so the gradient that powers ATP synthase is lost"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Protons leak across the membrane, so the gradient that powers ATP synthase is lost. DNP is an uncoupler: it carries protons back across the inner membrane, bypassing ATP synthase. The electron transport chain keeps running and passing electrons to O₂, so O₂ consumption stays high (even rises), but the protons it pumps leak straight back. With no proton gradient to drive ATP synthase, ATP production is very low, and the energy is released as heat.\n\n(A) is wrong because if the chain stopped, oxygen would no longer be consumed, but the table shows O₂ consumption remains high.\n(B) is wrong because high O₂ consumption shows that oxygen does reach the mitochondria and is being used by the chain.\n(C) is wrong because DNP does not destroy ATP synthase; the enzyme is intact but has no proton gradient to use."
  },
  {
   "id": "be4-38",
   "unit": 5,
   "stem": "Mendel's law of independent assortment states that alleles for different genes are distributed to gametes independently of one another. Which condition must be met for this law to apply?",
   "choices": [
    "The genes are located right next to each other on the same chromosome.",
    "The genes are both carried on the X chromosome of the individual.",
    "The genes are on different chromosomes or far apart on the same chromosome.",
    "The alleles of the two genes must both be codominant with each other."
   ],
   "correct": 2,
   "explanation": "Correct: (C) The genes are on different chromosomes or far apart on the same chromosome. Independent assortment results from the random orientation of each homologous pair at metaphase I, so alleles on different chromosomes separate into gametes independently. Genes far apart on the same chromosome (about 50 map units or more) also behave as if unlinked because crossing over between them is so frequent that recombinants reach about 50%. Closely linked genes do not assort independently.\n\n(A) is wrong because genes right next to each other are tightly linked and are usually inherited together, which violates independent assortment.\n(B) is wrong because two genes on the X chromosome are linked to each other, so they generally do not assort independently.\n(D) is wrong because dominance relationships between alleles do not affect whether different genes assort independently."
  },
  {
   "id": "be4-39",
   "unit": 3,
   "stem": "A molecule that is not a substrate binds to an enzyme at a site other than the active site, and the enzyme's activity increases. What type of regulation is this?",
   "choices": [
    "Competitive inhibition",
    "Allosteric activation",
    "Feedback inhibition",
    "Denaturation"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Allosteric activation. In allosteric regulation, a molecule binds at a regulatory (allosteric) site distinct from the active site, changing the enzyme's shape. An allosteric activator stabilizes the active conformation and increases the enzyme's activity, while an allosteric inhibitor stabilizes the inactive form. Here the molecule is not a substrate, binds away from the active site, and raises activity, so this is allosteric activation.\n\n(A) is wrong because a competitive inhibitor binds the active site and lowers activity, but this molecule binds elsewhere and raises it.\n(C) is wrong because feedback inhibition decreases enzyme activity, usually by an end product of the pathway, but here activity increases.\n(D) is wrong because denaturation unfolds the enzyme and destroys its activity, but here the enzyme becomes more active."
  },
  {
   "id": "be4-40",
   "unit": 8,
   "stem": "A population has a carrying capacity of K = 800 and an intrinsic growth rate of r = 0.4 per week. Using the logistic growth equation dN/dt = rN(K − N)/K, what is the population growth rate when N = 200?",
   "choices": [
    "120 per week",
    "80 per week",
    "60 per week",
    "20 per week"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 60 per week. Substitute into the logistic equation: dN/dt = rN(K − N)/K = (0.4 per week)(200)(800 − 200)/800. The fraction of carrying capacity remaining is 600/800 = 0.75, and rN = 0.4 × 200 = 80 per week. So dN/dt = 80 × 0.75 = 60 individuals per week, less than the exponential rate because the population already uses a quarter of its carrying capacity.\n\n(A) is wrong because 120 per week exceeds rN = 80, which is impossible because the logistic factor (K − N)/K can never be greater than 1.\n(B) is wrong because 80 per week is rN, the exponential rate; it leaves out the logistic factor (K − N)/K = 0.75.\n(D) is wrong because 20 per week multiplies rN by N/K = 0.25 instead of by (K − N)/K = 0.75."
  },
  {
   "id": "be4-41",
   "unit": 7,
   "setId": "be4-set4",
   "stem": "Which animal is most closely related to the fly?",
   "choices": [
    "Snail",
    "Sponge",
    "All of the other animals are equally related to the fly",
    "Crab"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Crab. On a cladogram, relatedness is measured by how recently two taxa share a common ancestor, not by their positions on the page. In the figure, the crab and the fly branch from the most recent node, so they are sister taxa and share an ancestor not shared with the snail or sponge. The snail joins them at an older node, and the sponge branches off first, at the base.\n\n(A) is wrong because the snail joins the crab–fly group at an older node, so it is more distantly related to the fly than the crab is.\n(B) is wrong because the sponge branches off first, at the base of the tree, so it is the most distantly related to the fly.\n(C) is wrong because the branching points differ; the crab shares a more recent common ancestor with the fly than the others do."
  },
  {
   "id": "be4-42",
   "unit": 7,
   "setId": "be4-set4",
   "stem": "Which statement is best supported by the data?",
   "choices": [
    "A segmented body evolved in the common ancestor of the crab and the fly.",
    "A segmented body evolved independently in the crab and in the fly.",
    "Bilateral symmetry evolved in the common ancestor of the sponge and the snail.",
    "Jointed legs evolved before true tissues."
   ],
   "correct": 0,
   "explanation": "Correct: (A) A segmented body evolved in the common ancestor of the crab and the fly. In the table, a segmented body is present (+) only in the crab and the fly, which are sister taxa on the cladogram. The most parsimonious explanation is a single origin of segmentation in their most recent common ancestor, after the snail lineage split off. Jointed legs show the same pattern, while true tissues and bilateral symmetry appear earlier, shared with the snail.\n\n(B) is wrong because two independent origins would require more evolutionary changes than one origin in the shared ancestor, so it is less parsimonious.\n(C) is wrong because the sponge lacks bilateral symmetry, so the trait arose after the sponge lineage split, in the snail–crab–fly ancestor.\n(D) is wrong because the snail has true tissues but lacks jointed legs, so true tissues evolved first and jointed legs later."
  },
  {
   "id": "be4-43",
   "unit": 3,
   "stem": "A pigment extract from a leaf absorbs red and blue light strongly but reflects green light. Which statement is the best interpretation of this observation?",
   "choices": [
    "The pigment cannot be used for photosynthesis, because it does not absorb green light.",
    "The pigment absorbs green light, which is why the leaf looks green.",
    "The pigment is a carbohydrate that stores energy from red and blue light.",
    "The pigment is chlorophyll, and the leaf appears green because green light is reflected."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The pigment is chlorophyll, and the leaf appears green because green light is reflected. Chlorophylls a and b absorb strongly in the blue-violet (about 430–450 nm) and red (about 640–680 nm) parts of the spectrum and absorb little green light (about 500–560 nm). The unabsorbed green light is reflected or transmitted, so leaves look green. The absorbed red and blue light supplies energy for the light-dependent reactions.\n\n(A) is wrong because a pigment does not need to absorb all wavelengths; absorbing red and blue light is enough to power photosynthesis.\n(B) is wrong because an object looks the color of the light it reflects; the extract reflects green light, so it does not absorb it.\n(C) is wrong because chlorophyll is a pigment containing a porphyrin ring with magnesium, not a carbohydrate that stores energy."
  },
  {
   "id": "be4-44",
   "unit": 4,
   "setId": "be4-set5",
   "stem": "How many chromosomes are in each cell at the end of meiosis I?",
   "choices": [
    "12",
    "23",
    "46",
    "92"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 23. A human cell has 46 chromosomes after S phase, each with 2 chromatids. Meiosis I separates homologous pairs into two cells, so the chromosome number is halved: 46 ÷ 2 = 23 chromosomes per cell, each still made of 2 sister chromatids. The table confirms this: after meiosis I, 23 chromosomes per cell and 2 chromatids per chromosome.\n\n(A) is wrong because 12 would require halving again after meiosis I, which never happens; meiosis II keeps the count at 23.\n(C) is wrong because 46 is the diploid number before meiosis I, which reduces it by separating the homologous pairs.\n(D) is wrong because 92 is the number of chromatids in the cell after S phase (46 × 2), not the number of chromosomes after meiosis I."
  },
  {
   "id": "be4-45",
   "unit": 4,
   "setId": "be4-set5",
   "stem": "Which event in meiosis II explains the change from two chromatids to one chromatid per chromosome?",
   "choices": [
    "The separation of homologous chromosomes",
    "The replication of DNA",
    "The separation of sister chromatids",
    "Crossing over between homologous chromosomes"
   ],
   "correct": 2,
   "explanation": "Correct: (C) The separation of sister chromatids. In anaphase II the centromeres split and the sister chromatids of each chromosome move to opposite poles. Each chromatid is then counted as its own chromosome, so the number of chromatids per chromosome falls from 2 to 1 while the chromosome number in each cell stays at 23, exactly as the table shows. No DNA replication occurs between meiosis I and meiosis II.\n\n(A) is wrong because homologous chromosomes separate in meiosis I, which halves the chromosome number but leaves two chromatids per chromosome.\n(B) is wrong because replication in S phase doubles chromatids per chromosome, changing 1 to 2, the opposite of this change.\n(D) is wrong because crossing over in prophase I swaps segments between homologs but does not change the chromatid count."
  },
  {
   "id": "be4-46",
   "unit": 8,
   "stem": "A lake receives large amounts of nitrogen and phosphorus fertilizer in runoff from nearby farms. Which sequence of events is most likely to occur?",
   "choices": [
    "Algae grow rapidly, die, and are decomposed by bacteria that consume oxygen, so fish may die from low oxygen levels.",
    "Algae decline because nutrients are toxic, and oxygen levels in the water rise.",
    "Fish populations grow quickly because there are more nutrients, and oxygen levels remain constant.",
    "The lake becomes more acidic, but the algae are not affected."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Algae grow rapidly, die, and are decomposed by bacteria that consume oxygen, so fish may die from low oxygen levels. Excess nitrogen and phosphorus, often the limiting nutrients in lakes, cause eutrophication: an algal bloom. When the algae die, aerobic bacteria decompose the large mass of organic matter and use up the dissolved oxygen in the water. The resulting hypoxic (low-oxygen) water can kill fish and other aquatic animals, producing \"dead zones.\"\n\n(B) is wrong because nitrogen and phosphorus are limiting nutrients, so adding them makes algae grow faster, not decline.\n(C) is wrong because fish do not use the nutrients directly, and decomposition of the algal bloom lowers dissolved oxygen.\n(D) is wrong because the main effect of the fertilizer is to stimulate algae, which grow rapidly when their limiting nutrients are supplied."
  },
  {
   "id": "be4-47",
   "unit": 1,
   "setId": "be4-set6",
   "stem": "Which macromolecule is most likely a nucleic acid?",
   "choices": [
    "X, because it contains carbon, hydrogen, and oxygen",
    "Z, because phosphorus is found in the backbone of nucleic acids",
    "Y, because it contains sulfur",
    "None of them, because nucleic acids contain only C, H, and O"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Z, because phosphorus is found in the backbone of nucleic acids. Nucleic acids are polymers of nucleotides, each with a phosphate group (phosphorus), a five-carbon sugar (C, H, O), and a nitrogenous base (nitrogen). In the table, only Z contains phosphorus, together with nitrogen, matching DNA or RNA, whose sugar–phosphate backbone is held together by phosphodiester bonds. Proteins lack phosphorus in their basic structure, and carbohydrates contain only C, H and O.\n\n(A) is wrong because C, H and O alone fit a carbohydrate or a simple lipid; nucleic acids also need N and P.\n(C) is wrong because sulfur is found in some amino acids (cysteine and methionine), which marks Y as a protein, not a nucleic acid.\n(D) is wrong because nucleic acids always contain nitrogen in their bases and phosphorus in their phosphate groups, not only C, H and O."
  },
  {
   "id": "be4-48",
   "unit": 1,
   "setId": "be4-set6",
   "stem": "Which macromolecule is most likely a protein?",
   "choices": [
    "X, because it contains no nitrogen",
    "Z, because it contains phosphorus",
    "None of them, because proteins contain only C, H, and O",
    "Y, because it contains nitrogen and sulfur found in amino acids"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Y, because it contains nitrogen and sulfur found in amino acids. Every amino acid has an amino group, so all proteins contain nitrogen, and the amino acids cysteine and methionine contain sulfur. Macromolecule Y contains C, H, O, N and S, the signature of a protein (sulfur appears in disulfide bridges). X, with only C, H and O, is likely a carbohydrate or a lipid, and Z, with phosphorus, is the nucleic acid.\n\n(A) is wrong because every amino acid contains nitrogen in its amino group, so a molecule with no nitrogen cannot be a protein.\n(B) is wrong because phosphorus together with nitrogen marks Z as a nucleic acid; proteins are identified by sulfur instead.\n(C) is wrong because proteins always contain nitrogen in their amino groups, and many contain sulfur, so they are not limited to C, H and O."
  },
  {
   "id": "be4-49",
   "unit": 4,
   "stem": "The Ras protein normally helps relay growth signals and turns off when the signal ends. A mutation that keeps Ras permanently active is found in many cancers. Which term describes the mutated gene?",
   "choices": [
    "An oncogene",
    "A tumor suppressor gene",
    "A pseudogene",
    "A housekeeping gene"
   ],
   "correct": 0,
   "explanation": "Correct: (A) An oncogene. Proto-oncogenes such as ras code for proteins that stimulate cell division when a growth signal is present. A gain-of-function mutation that locks Ras in its active, GTP-bound state turns the gene into an oncogene, sending a continuous \"divide\" signal even without growth factors. Only one mutant copy is needed, so oncogenes act dominantly, unlike tumor suppressor genes.\n\n(B) is wrong because tumor suppressor genes (such as p53) normally restrain division and cause cancer when inactivated, not when made permanently active.\n(C) is wrong because a pseudogene is a nonfunctional gene copy, while this mutant Ras is highly active and drives cell division.\n(D) is wrong because housekeeping genes run basic cell functions and are not defined by promoting uncontrolled cell division."
  },
  {
   "id": "be4-50",
   "unit": 6,
   "setId": "be4-set7",
   "stem": "What is the total size of the plasmid?",
   "choices": [
    "1,000 bp",
    "2,500 bp",
    "3,500 bp",
    "5,000 bp"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 3,500 bp. A circular plasmid cut at n sites yields n linear fragments whose lengths add up to the whole plasmid. In the gel, EcoRI gives bands at 2500 and 1000 bp, so the plasmid is 2500 + 1000 = 3500 bp. The BamHI lane confirms this: 2000 + 1500 = 3500 bp. Each enzyme therefore cuts this plasmid twice.\n\n(A) is wrong because 1000 bp is only the smaller EcoRI fragment, not the sum of all fragments from one digest.\n(B) is wrong because 2500 bp is only the largest EcoRI fragment; the 1000 bp fragment must be added to it.\n(D) is wrong because 5000 bp exceeds the sum of the fragments in either lane; the fragments of one complete digest must add up to the plasmid, 3500 bp."
  },
  {
   "id": "be4-51",
   "unit": 6,
   "setId": "be4-set7",
   "stem": "A different circular plasmid has only one recognition site for a restriction enzyme. What would the digestion of this plasmid with the enzyme produce?",
   "choices": [
    "Two linear fragments that are exactly equal in length",
    "No fragments at all, because a circular DNA cannot be cut",
    "One linear DNA fragment as long as the original plasmid",
    "Many small fragments of random lengths from the plasmid"
   ],
   "correct": 2,
   "explanation": "Correct: (C) One linear DNA fragment as long as the original plasmid. A circular DNA molecule has no ends, so a single cut opens the ring into one linear molecule containing all of the original base pairs. In general, a circular plasmid cut at n sites yields n fragments, while a linear molecule cut at n sites yields n + 1. So one site gives one linear fragment as long as the plasmid.\n\n(A) is wrong because two fragments would require two cuts in a circular plasmid; one cut produces only one linear piece.\n(B) is wrong because restriction enzymes cut circular DNA readily, which is how plasmids are opened for cloning.\n(D) is wrong because restriction enzymes cut only at their specific recognition sequence, not randomly, and here there is just one site."
  },
  {
   "id": "be4-52",
   "unit": 6,
   "stem": "HIV is a retrovirus. Which enzyme does HIV carry that allows it to make a DNA copy of its RNA genome?",
   "choices": [
    "DNA polymerase III",
    "Reverse transcriptase",
    "RNA polymerase",
    "Helicase"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Reverse transcriptase. Retroviruses such as HIV have an RNA genome. After entering a host cell, the viral enzyme reverse transcriptase uses the RNA as a template to make a complementary DNA, then a double-stranded DNA copy. The viral enzyme integrase inserts this DNA into a host chromosome as a provirus, and the host's own enzymes then transcribe it to make new viral RNA.\n\n(A) is wrong because DNA polymerase III is the main replicative enzyme of bacteria and copies DNA from a DNA template, not RNA.\n(C) is wrong because RNA polymerase makes RNA from a DNA template, the opposite of what a retrovirus needs to do first.\n(D) is wrong because helicase unwinds double-stranded DNA and makes no new strand from an RNA template."
  },
  {
   "id": "be4-53",
   "unit": 7,
   "setId": "be4-set8",
   "stem": "Which process best explains the different results for the two populations?",
   "choices": [
    "Natural selection, which is stronger in large populations",
    "Gene flow, which is greater in the small population",
    "Genetic drift, which has a larger effect in small populations",
    "Mutation, which is more frequent in the small population"
   ],
   "correct": 2,
   "explanation": "Correct: (C) Genetic drift, which has a larger effect in small populations. Genetic drift is a random change in allele frequency due to chance in which individuals reproduce. Its effect is larger in small populations. With no selection, mutation or migration, the graph shows population X (10,000) staying near 0.5 (between about 0.48 and 0.52), while population Y (20) swings from 0.65 to 0.40 and up to 1.0 by generation 50. Only drift explains this.\n\n(A) is wrong because the stem states there was no selection, and selection would not be stronger in a large population anyway.\n(B) is wrong because the stem rules out migration, so gene flow cannot cause the swings in population Y.\n(D) is wrong because the stem rules out mutation, and mutation rates are too low to cause swings of this size."
  },
  {
   "id": "be4-54",
   "unit": 7,
   "setId": "be4-set8",
   "stem": "What is the most likely effect of continued drift on population Y?",
   "choices": [
    "The allele will stay near 0.5.",
    "The allele will become fixed, and genetic variation will be lost.",
    "Both alleles will be maintained at equal frequencies.",
    "The population will adapt to its environment."
   ],
   "correct": 1,
   "explanation": "Correct: (B) The allele will become fixed, and genetic variation will be lost. Drift has no direction, but because 0 and 1 are absorbing boundaries, a small isolated population eventually loses one allele and fixes the other. In the graph, allele A in population Y has already reached 1.0 by generation 50; with no mutation or migration to bring the other allele back, it will stay fixed. Fixation removes genetic variation at this gene.\n\n(A) is wrong because population Y's frequency has already moved from 0.5 to 1.0, and drift in a small population is unlikely to return it.\n(C) is wrong because once one allele is lost there is no way back without mutation or migration, so equal frequencies cannot be maintained.\n(D) is wrong because drift is random and not related to the environment; adaptation requires natural selection, which was absent."
  },
  {
   "id": "be4-55",
   "unit": 1,
   "stem": "A phospholipid molecule has both a hydrophilic region and a hydrophobic region. Which term describes a molecule with these two types of regions?",
   "choices": [
    "Nonpolar",
    "Hydrophobic",
    "Denatured",
    "Amphipathic"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Amphipathic. An amphipathic molecule has both a hydrophilic part and a hydrophobic part. A phospholipid has a polar, hydrophilic head (the phosphate group and attached group, such as choline) and two nonpolar, hydrophobic fatty acid tails. In water, the tails cluster away from water while the heads face it, so phospholipids spontaneously form bilayers, the basis of cell membranes.\n\n(A) is wrong because nonpolar describes only the tails; the phosphate head of a phospholipid is polar and charged.\n(B) is wrong because hydrophobic describes only the fatty acid tails, not the whole molecule with its hydrophilic head.\n(C) is wrong because denatured describes a protein or nucleic acid that has lost its folded shape, not a membrane lipid."
  },
  {
   "id": "be4-56",
   "unit": 4,
   "stem": "A cell in culture is deprived of the growth factors that it needs, and it stops dividing in the G₁ phase and enters a nondividing state. What is the name of this state?",
   "choices": [
    "The G₀ phase",
    "The S phase",
    "Anaphase",
    "Cytokinesis"
   ],
   "correct": 0,
   "explanation": "Correct: (A) The G₀ phase. Cells must receive growth signals to pass the G₁ (restriction) checkpoint. Without growth factors, the cyclin–Cdk activity needed to commit to S phase does not rise, and the cell exits the cycle into the nondividing G₀ phase. Cells in G₀ stay metabolically active and may re-enter the cycle; some, such as most mature neurons and muscle cells, remain there permanently.\n\n(B) is wrong because S phase is when DNA is replicated, which the cell does not reach because it stopped in G₁.\n(C) is wrong because anaphase is a stage of mitosis, but this cell stopped before even replicating its DNA.\n(D) is wrong because cytokinesis is the division of the cytoplasm at the end of mitosis, which this cell never reaches."
  },
  {
   "id": "be4-57",
   "unit": 8,
   "stem": "A bare rock is exposed when a glacier retreats. Which organisms would most likely be the first to colonize the rock?",
   "choices": [
    "Large trees",
    "Lichens and other pioneer species",
    "Grazing mammals",
    "Flowering shrubs"
   ],
   "correct": 1,
   "explanation": "Correct: (B) Lichens and other pioneer species. A retreating glacier leaves bare rock with no soil, so primary succession begins. The first colonists are pioneer species such as lichens and mosses, which tolerate harsh, nutrient-poor conditions. Lichens secrete acids that weather the rock, and their decaying remains add organic matter, gradually building soil that lets grasses, shrubs and eventually trees establish.\n\n(A) is wrong because large trees need deep soil with nutrients and water, which takes a long time to develop on bare rock.\n(C) is wrong because grazing mammals need plants to eat, so they cannot arrive before a plant community has developed.\n(D) is wrong because flowering shrubs need soil for their roots, which does not exist on newly exposed rock."
  },
  {
   "id": "be4-58",
   "unit": 2,
   "stem": "A plant cell is placed in distilled water. Which of the following will happen to the cell?",
   "choices": [
    "Water enters by osmosis until the cell becomes turgid and the cell wall prevents bursting.",
    "Water leaves the cell until the cell becomes plasmolyzed.",
    "The cell bursts, because the cell wall cannot withstand pressure.",
    "There is no net movement of water, because the cell wall is impermeable."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Water enters by osmosis until the cell becomes turgid and the cell wall prevents bursting. Distilled water has a water potential of 0, higher than the negative water potential of the cell, so water enters by osmosis. As the protoplast swells against the rigid cellulose wall, pressure potential rises until it balances the solute potential, and net water entry stops. The cell becomes turgid, the normal healthy state for plant cells, without bursting.\n\n(B) is wrong because plasmolysis happens in a hypertonic solution; distilled water is hypotonic to the cell, so water moves in.\n(C) is wrong because animal cells may burst in pure water, but the rigid plant cell wall withstands the turgor pressure.\n(D) is wrong because the cell wall is freely permeable to water, so water does move, and it moves into the cell."
  },
  {
   "id": "be4-59",
   "unit": 8,
   "setId": "be4-set9",
   "stem": "Which curve is most likely to represent a species that produces many offspring and provides little or no parental care?",
   "choices": [
    "Curve 1, because most individuals survive to old age",
    "Curve 2, because the death rate is constant",
    "None of the curves, because all species provide parental care",
    "Curve 3, because most offspring die at a young age"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Curve 3, because most offspring die at a young age. Species with many offspring and little or no parental care (such as oysters and most fish) lose most of their young early, then the few survivors die at lower rates. In the graph, curve 3 drops from 1000 to about 250 survivors by 20% of the maximum life span, then flattens near zero. This is a Type III survivorship curve.\n\n(A) is wrong because curve 1 describes high survival until old age, typical of species with few offspring and heavy parental care.\n(B) is wrong because curve 2 shows a constant death rate at all ages (Type II), not heavy early mortality.\n(C) is wrong because many species, such as oysters and most fish, provide no parental care, and curve 3 fits them."
  },
  {
   "id": "be4-60",
   "unit": 8,
   "setId": "be4-set9",
   "stem": "Which curve would best describe a species in which individuals receive extensive parental care and most survive to old age?",
   "choices": [
    "Curve 2",
    "Curve 3",
    "Curve 1",
    "All of the curves"
   ],
   "correct": 2,
   "explanation": "Correct: (C) Curve 1. In curve 1, the number of survivors stays near 1000 until about 50% of the maximum life span, then falls steeply near the end. Low mortality until late in life is the Type I pattern of species that have few offspring and invest heavily in each, such as humans and other large mammals. Extensive parental care keeps juvenile death rates low.\n\n(A) is wrong because curve 2 shows a constant death rate at all ages, so many individuals die young rather than surviving to old age.\n(B) is wrong because curve 3 shows very heavy early mortality, typical of species with many offspring and little care.\n(D) is wrong because the three curves show very different patterns, and only curve 1 matches survival to old age."
  }
 ],
 "sets": {
  "be4-set1": {
   "text": "A researcher measured the rate at which two molecules, A and B, are taken up by cells as the concentration of each molecule outside the cell was increased. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Concentration of molecule outside the cell (mM)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Rate of uptake (relative units)</text><path d=\"M64 262L72.4 256.56L80.8 251.11L89.2 245.67L97.6 240.22L106 234.78L114.4 229.33L122.8 223.89L131.2 218.44L139.6 213L148 207.55L156.4 202.11L164.8 196.66L173.2 191.21L181.6 185.77L190 180.33L198.4 174.88L206.8 169.44L215.2 163.99L223.6 158.54L232 153.1L240.4 147.65L248.8 142.21L257.2 136.77L265.6 131.32L274 125.88L282.4 120.43L290.8 114.98L299.2 109.54L307.6 104.09L316 98.65L324.4 93.2L332.8 87.76L341.2 82.32L349.6 76.87L358 71.43L366.4 65.98L374.8 60.53L383.2 55.09L391.6 49.64L400 44.2\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L68.2 245.25L72.4 230.89L76.6 218.44L80.8 207.55L85 197.94L89.2 189.4L93.4 181.76L97.6 174.88L101.8 168.66L106 163L110.2 157.83L114.4 153.1L118.6 148.74L122.8 144.72L127 141L131.2 137.54L135.4 134.32L139.6 131.32L143.8 128.51L148 125.88L152.2 123.4L156.4 121.07L160.6 118.87L164.8 116.8L169 114.84L173.2 112.98L177.4 111.22L181.6 109.54L185.8 107.95L190 106.43L194.2 104.98L198.4 103.6L202.6 102.28L206.8 101.02L211 99.81L215.2 98.65L219.4 97.54L223.6 96.47L227.8 95.45L232 94.46L236.2 93.51L240.4 92.6L244.6 91.72L248.8 90.87L253 90.05L257.2 89.26L261.4 88.5L265.6 87.76L269.8 87.05L274 86.35L278.2 85.69L282.4 85.04L286.6 84.41L290.8 83.8L295 83.21L299.2 82.64L303.4 82.08L307.6 81.54L311.8 81.01L316 80.5L320.2 80L324.4 79.52L328.6 79.05L332.8 78.59L337 78.14L341.2 77.71L345.4 77.28L349.6 76.87L353.8 76.47L358 76.07L362.2 75.69L366.4 75.31L370.6 74.95L374.8 74.59L379 74.24L383.2 73.9L387.4 73.57L391.6 73.24L395.8 72.92L400 72.61\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Molecule A</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Molecule B</text></svg>",
     "alt": "A graph of the rate of uptake against concentration outside the cell. The curve for molecule A increases in a straight line. The curve for molecule B rises steeply and then levels off near 8."
    }
   ]
  },
  "be4-set2": {
   "text": "In a testcross, a plant that is heterozygous for two linked genes (AaBb, with the dominant alleles on the same chromosome) is crossed with a plant that is homozygous recessive (aabb). The numbers of offspring with each phenotype are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Offspring phenotype",
       "Number"
      ],
      "rows": [
       [
        "Dominant for both traits (AB)",
        "440"
       ],
       [
        "Recessive for both traits (ab)",
        "410"
       ],
       [
        "Dominant A, recessive b (Ab)",
        "80"
       ],
       [
        "Recessive a, dominant B (aB)",
        "70"
       ]
      ]
     }
    }
   ]
  },
  "be4-set3": {
   "text": "Researchers added two chemicals to separate samples of isolated mitochondria and measured the oxygen consumption and the ATP production. The results are shown in the table. Cyanide blocks the transfer of electrons to oxygen at the end of the electron transport chain. DNP makes the inner mitochondrial membrane permeable to protons.",
   "figures": [
    {
     "table": {
      "headers": [
       "Condition",
       "O₂ consumption",
       "ATP production"
      ],
      "rows": [
       [
        "No chemical added",
        "High",
        "High"
       ],
       [
        "Cyanide added",
        "Very low",
        "Very low"
       ],
       [
        "DNP added",
        "High",
        "Very low"
       ]
      ]
     }
    }
   ]
  },
  "be4-set4": {
   "text": "The cladogram shows the evolutionary relationships among four animals. The table shows which of the traits are present (+) or absent (−) in each animal.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"338\" y=\"26\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Crab</text><text x=\"338\" y=\"104\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Fly</text><line x1=\"215.25\" y1=\"22\" x2=\"215.25\" y2=\"100\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"215.25\" y1=\"22\" x2=\"330\" y2=\"22\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"215.25\" y1=\"100\" x2=\"330\" y2=\"100\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"182\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Snail</text><line x1=\"138.75\" y1=\"61\" x2=\"138.75\" y2=\"178\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"138.75\" y1=\"61\" x2=\"215.25\" y2=\"61\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"138.75\" y1=\"178\" x2=\"330\" y2=\"178\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"260\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Sponge</text><line x1=\"62.25\" y1=\"119.5\" x2=\"62.25\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"62.25\" y1=\"119.5\" x2=\"138.75\" y2=\"119.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"62.25\" y1=\"256\" x2=\"330\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"24\" y1=\"187.75\" x2=\"62.25\" y2=\"187.75\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>",
     "alt": "A cladogram of four animals. Sponge branches off first, then snail. The last split separates crab and fly as sister groups."
    },
    {
     "table": {
      "headers": [
       "Animal",
       "True tissues",
       "Bilateral symmetry",
       "Segmented body",
       "Jointed legs"
      ],
      "rows": [
       [
        "Sponge",
        "−",
        "−",
        "−",
        "−"
       ],
       [
        "Snail",
        "+",
        "+",
        "−",
        "−"
       ],
       [
        "Crab",
        "+",
        "+",
        "+",
        "+"
       ],
       [
        "Fly",
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
  "be4-set5": {
   "text": "The table shows the number of chromosomes per cell and the number of chromatids per chromosome at different stages in the life of a human cell that undergoes meiosis.",
   "figures": [
    {
     "table": {
      "headers": [
       "Stage",
       "Chromosomes per cell",
       "Chromatids per chromosome"
      ],
      "rows": [
       [
        "G₁ of interphase",
        "46",
        "1"
       ],
       [
        "After the S phase",
        "46",
        "2"
       ],
       [
        "After meiosis I",
        "23",
        "2"
       ],
       [
        "After meiosis II",
        "23",
        "1"
       ]
      ]
     }
    }
   ]
  },
  "be4-set6": {
   "text": "The table shows the elements found in three biological macromolecules, X, Y, and Z, isolated from a cell.",
   "figures": [
    {
     "table": {
      "headers": [
       "Macromolecule",
       "Elements present"
      ],
      "rows": [
       [
        "X",
        "C, H, O"
       ],
       [
        "Y",
        "C, H, O, N, S"
       ],
       [
        "Z",
        "C, H, O, N, P"
       ]
      ]
     }
    }
   ]
  },
  "be4-set7": {
   "text": "A circular plasmid was digested with two restriction enzymes, EcoRI and BamHI, in separate reactions, and the products were analyzed by gel electrophoresis along with a DNA ladder. The gel is shown. The sizes of the ladder fragments are labeled in base pairs (bp).",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"24\" y=\"28\" width=\"442\" height=\"230\" fill=\"#EDE8DC\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"55.8\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"101.67\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Ladder</text><rect x=\"58.67\" y=\"58\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"65\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">3000</text><rect x=\"58.67\" y=\"85\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"92\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">2500</text><rect x=\"58.67\" y=\"112\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"119\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">2000</text><rect x=\"58.67\" y=\"139\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"146\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">1500</text><rect x=\"58.67\" y=\"166\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"173\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">1000</text><rect x=\"58.67\" y=\"193\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"52.93\" y=\"200\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">500</text><rect x=\"199.13\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"245\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">EcoRI</text><rect x=\"202\" y=\"85\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"202\" y=\"166\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"342.47\" y=\"32\" width=\"91.73\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"388.33\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">BamHI</text><rect x=\"345.33\" y=\"112\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"345.33\" y=\"139\" width=\"86\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"12\" y=\"274\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(+)</text><text x=\"12\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(−)</text></svg>",
     "alt": "A gel with three lanes. The ladder lane has bands at 3000, 2500, 2000, 1500, 1000, and 500 base pairs. The EcoRI lane has two bands at the 2500 and 1000 base pair positions. The BamHI lane has two bands at the 2000 and 1500 base pair positions."
    }
   ]
  },
  "be4-set8": {
   "text": "Computer simulations tracked the frequency of an allele (A) over 50 generations in two populations that started with an allele frequency of 0.5. There was no selection, mutation, or migration. Population X has 10,000 individuals, and population Y has 20 individuals. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Generation</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Frequency of allele A</text><path d=\"M64 141L131.2 136.16L198.4 145.84L265.6 138.58L332.8 141L400 136.16\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"141\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"131.2\" cy=\"136.16\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"198.4\" cy=\"145.84\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"265.6\" cy=\"138.58\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"332.8\" cy=\"141\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"400\" cy=\"136.16\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><path d=\"M64 141L131.2 104.7L198.4 165.2L265.6 80.5L332.8 44.2L400 20\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"141\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"131.2\" cy=\"104.7\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"198.4\" cy=\"165.2\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"265.6\" cy=\"80.5\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"332.8\" cy=\"44.2\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"400\" cy=\"20\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Population X</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Population Y</text></svg>",
     "alt": "A graph of the frequency of allele A against generation. Population X stays close to 0.5 throughout. Population Y fluctuates widely, rising and falling, and reaches 1.0 by generation 50."
    }
   ]
  },
  "be4-set9": {
   "text": "The graph shows the survivorship (the number of individuals surviving at each age) of three species in a hypothetical group of 1000 newborns. The horizontal axis shows age as a percentage of the maximum life span.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">400</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">600</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">800</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1000</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Percentage of maximum life span</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Number of survivors</text><path d=\"M64 20L68.2 20L72.4 20L76.6 20L80.8 20L85 20L89.2 20.01L93.4 20.01L97.6 20.02L101.8 20.04L106 20.06L110.2 20.09L114.4 20.12L118.6 20.17L122.8 20.23L127 20.3L131.2 20.39L135.4 20.49L139.6 20.62L143.8 20.77L148 20.95L152.2 21.15L156.4 21.38L160.6 21.65L164.8 21.96L169 22.31L173.2 22.7L177.4 23.14L181.6 23.63L185.8 24.18L190 24.79L194.2 25.46L198.4 26.2L202.6 27.01L206.8 27.9L211 28.87L215.2 29.92L219.4 31.07L223.6 32.32L227.8 33.67L232 35.13L236.2 36.7L240.4 38.38L244.6 40.2L248.8 42.14L253 44.23L257.2 46.45L261.4 48.83L265.6 51.36L269.8 54.06L274 56.93L278.2 59.97L282.4 63.2L286.6 66.62L290.8 70.24L295 74.06L299.2 78.1L303.4 82.37L307.6 86.86L311.8 91.59L316 96.57L320.2 101.8L324.4 107.3L328.6 113.07L332.8 119.12L337 125.47L341.2 132.11L345.4 139.06L349.6 146.33L353.8 153.92L358 161.86L362.2 170.14L366.4 178.78L370.6 187.78L374.8 197.17L379 206.94L383.2 217.11L387.4 227.69L391.6 238.69L395.8 250.12L400 262\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 20L68.2 27.45L72.4 34.66L76.6 41.66L80.8 48.44L85 55.01L89.2 61.37L93.4 67.55L97.6 73.53L101.8 79.33L106 84.95L110.2 90.4L114.4 95.68L118.6 100.79L122.8 105.75L127 110.56L131.2 115.22L135.4 119.74L139.6 124.11L143.8 128.35L148 132.47L152.2 136.45L156.4 140.31L160.6 144.06L164.8 147.69L169 151.2L173.2 154.61L177.4 157.92L181.6 161.12L185.8 164.22L190 167.23L194.2 170.15L198.4 172.97L202.6 175.71L206.8 178.37L211 180.94L215.2 183.43L219.4 185.85L223.6 188.19L227.8 190.46L232 192.67L236.2 194.8L240.4 196.87L244.6 198.87L248.8 200.81L253 202.7L257.2 204.52L261.4 206.29L265.6 208L269.8 209.66L274 211.27L278.2 212.83L282.4 214.35L286.6 215.81L290.8 217.23L295 218.61L299.2 219.95L303.4 221.24L307.6 222.49L311.8 223.71L316 224.89L320.2 226.03L324.4 227.14L328.6 228.21L332.8 229.25L337 230.26L341.2 231.23L345.4 232.18L349.6 233.1L353.8 233.99L358 234.85L362.2 235.68L366.4 236.49L370.6 237.28L374.8 238.04L379 238.78L383.2 239.49L387.4 240.18L391.6 240.85L395.8 241.5L400 242.14\" fill=\"none\" stroke=\"#6E9A5E\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 20L68.2 38.88L72.4 56.3L76.6 72.35L80.8 87.15L85 100.79L89.2 113.37L93.4 124.97L97.6 135.66L101.8 145.52L106 154.61L110.2 162.99L114.4 170.72L118.6 177.84L122.8 184.41L127 190.46L131.2 196.05L135.4 201.19L139.6 205.94L143.8 210.31L148 214.35L152.2 218.07L156.4 221.49L160.6 224.66L164.8 227.57L169 230.26L173.2 232.73L177.4 235.02L181.6 237.12L185.8 239.06L190 240.85L194.2 242.5L198.4 244.03L202.6 245.43L206.8 246.72L211 247.91L215.2 249.01L219.4 250.03L223.6 250.96L227.8 251.82L232 252.62L236.2 253.35L240.4 254.02L244.6 254.65L248.8 255.22L253 255.75L257.2 256.24L261.4 256.69L265.6 257.1L269.8 257.48L274 257.84L278.2 258.16L282.4 258.46L286.6 258.74L290.8 258.99L295 259.23L299.2 259.44L303.4 259.64L307.6 259.83L311.8 260L316 260.15L320.2 260.3L324.4 260.43L328.6 260.55L332.8 260.66L337 260.77L341.2 260.87L345.4 260.95L349.6 261.04L353.8 261.11L358 261.18L362.2 261.24L366.4 261.3L370.6 261.36L374.8 261.41L379 261.45L383.2 261.5L387.4 261.54L391.6 261.57L395.8 261.61L400 261.64\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Curve 1</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#6E9A5E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Curve 2</text><line x1=\"412\" y1=\"70\" x2=\"434\" y2=\"70\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"74\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Curve 3</text></svg>",
     "alt": "A graph of the number of survivors against age as a percentage of maximum life span. Curve 1 stays high and then drops sharply near the end. Curve 2 falls steadily at a constant rate. Curve 3 falls steeply early in life and then flattens out at a low level."
    }
   ]
  }
 }
};

export default EXAM;
