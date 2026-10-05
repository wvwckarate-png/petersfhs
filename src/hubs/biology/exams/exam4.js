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
   "explanation": "Rubisco catalyzes the fixation of CO₂ to the five-carbon sugar RuBP, forming an unstable six-carbon intermediate that splits into two molecules of 3-phosphoglycerate."
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
   "explanation": "The doubling time is approximately 70 divided by the percentage growth rate: 70/7 = 10 years."
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
   "explanation": "The new frequency is the weighted average: (0.90)(0.8) + (0.10)(0.2) = 0.72 + 0.02 = 0.74. Gene flow makes the allele frequencies of populations more similar."
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
   "explanation": "Fixing three CO₂ molecules to make one G3P requires 9 ATP and 6 NADPH. These energy carriers are supplied by the light-dependent reactions."
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
   "explanation": "Nuclear pore complexes are channels that allow the controlled passage of molecules, such as mRNA and ribosomal subunits leaving the nucleus, and proteins (such as transcription factors) entering the nucleus."
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
   "explanation": "T = 20% means A = 20%, so A + T = 40%. The remaining 60% is split equally between G and C, so G = 30%."
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
   "explanation": "A homologous pair consists of two chromosomes of the same type, one inherited from each parent, carrying the same genes (possibly with different alleles). Sister chromatids are the two identical DNA molecules produced during the S phase and joined at the centromere."
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
   "explanation": "DNA polymerase can add nucleotides only to an existing 3′ end, so primase first synthesizes a short RNA primer. Helicase unwinds the double helix and ligase joins Okazaki fragments."
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
   "explanation": "The mRNA is complementary and antiparallel to the template strand, with uracil replacing thymine: 3′-TACGGATT-5′ pairs to give 5′-AUGCCUAA-3′. The mRNA sequence is the same as the coding strand but with U in place of T."
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
   "explanation": "The cytoplasm of the zygote comes almost entirely from the egg, and the mitochondria in the sperm are usually not passed on. Mitochondrial traits therefore show maternal inheritance."
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
   "explanation": "A high degree of similarity in genes with basic developmental functions across distantly related animals is evidence of common ancestry. Because these genes are so important, mutations in them are strongly selected against, and they have been conserved."
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
   "explanation": "miRNAs are part of RNA interference. When a miRNA pairs with a target mRNA, it can inhibit translation or promote degradation of the message, which lowers the amount of protein made from that gene."
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
   "explanation": "The probability that one child does not have the disorder is 3/4, so the probability that neither of the two children has it is (3/4)² = 9/16. The probability that at least one does is 1 − 9/16 = 7/16."
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
   "explanation": "The upper species can survive in the lower zone (part of its fundamental niche), but competition with the other species restricts it to the upper zone (its realized niche)."
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
   "explanation": "Obligate anaerobes rely on glycolysis followed by fermentation, or on anaerobic respiration with an electron acceptor other than oxygen (such as sulfate). Both produce much less ATP per glucose than aerobic respiration."
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
   "explanation": "An enzyme's shape and activity depend on the pH of its surroundings. The lysosomal hydrolases are adapted to an acidic environment, so at the pH of the cytosol they have little activity, which protects the cell."
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
   "explanation": "The uptake rate of molecule B levels off, which shows that the process becomes saturated. This is characteristic of transport that depends on a limited number of carrier proteins, such as facilitated diffusion or active transport."
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
   "explanation": "The rate of simple diffusion is proportional to the concentration gradient, so it keeps increasing as the concentration increases. There are no protein carriers that can become saturated."
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
   "explanation": "ATP is a nucleotide that consists of the base adenine, the five-carbon sugar ribose, and a chain of three phosphate groups. The release of the terminal phosphate by hydrolysis provides energy for cellular work."
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
   "explanation": "With q = 0.3, p = 0.7. The frequency of heterozygotes is 2pq = 2(0.7)(0.3) = 0.42."
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
   "explanation": "The recombinant offspring are the ones with new allele combinations (Ab and aB): 80 + 70 = 150 of 1000 offspring. The recombination frequency is 15%, which corresponds to 15 map units."
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
   "explanation": "Genes that are physically close on a chromosome tend to be inherited together, and crossing over between them is uncommon. If they were on different chromosomes, independent assortment would produce about 25% of each phenotype."
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
   "explanation": "Gametic isolation prevents fertilization because the sperm and egg of different species are not compatible. It acts before a zygote is formed, so it is a prezygotic barrier."
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
   "explanation": "A chain of n amino acids is joined by n − 1 peptide bonds, so 150 amino acids have 149 peptide bonds."
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
   "explanation": "In conjugation, one bacterium transfers a copy of a plasmid to another bacterium through a pilus. Because the genes pass between existing cells rather than from parent to offspring, this is horizontal gene transfer."
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
   "explanation": "The TATA box is part of the promoter. General transcription factors bind to it first and recruit RNA polymerase II to start transcription at the correct location."
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
   "explanation": "Heterozygotes have a higher fitness than either type of homozygote in areas with malaria, so selection favors the heterozygotes and keeps both alleles in the population, even though homozygous recessive individuals have sickle-cell disease."
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
   "explanation": "Water molecules cohere to one another through hydrogen bonds, and they adhere to the polar walls of xylem vessels. Together these forces let transpiration pull a continuous column of water upward against gravity."
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
   "explanation": "The mass change goes from +8% to −6% (a 14% change) over a 0.2 M interval. The zero point is (8/14)(0.2) = 0.114 M above 0.4 M, or about 0.51 M. At that concentration the water potential of the solution equals that of the potato cells."
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
   "explanation": "25% is (1/2)², so two half-lives have passed: 2 × 4.5 = 9.0 billion years."
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
   "explanation": "The fraction is 4 h ÷ 20 h = 0.20, or 20% of the cycle."
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
   "explanation": "The efficiency is (180 kJ/2000 kJ) × 100 = 9%, which is close to the typical 10% rule."
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
   "explanation": "The degrees of freedom are the number of categories minus one: 4 − 1 = 3."
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
   "explanation": "Epinephrine is the first messenger. After it binds to the receptor, a G protein activates adenylyl cyclase, which makes the second messenger cAMP. The cAMP spreads in the cytoplasm and activates protein kinases that carry out the response."
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
   "explanation": "The surface area is 6 × (3 μm)² = 54 μm², and the volume is (3 μm)³ = 27 μm³. The ratio is 54/27 = 2.0 μm⁻¹."
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
   "explanation": "With the last step blocked, electrons cannot flow through the chain, so no more protons are pumped and oxygen is not consumed. Without the proton gradient, ATP synthase cannot make ATP."
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
   "explanation": "DNP is an uncoupler: it allows protons to cross the membrane without going through ATP synthase. The chain keeps running (and oxygen is consumed), but the energy of the gradient is released as heat instead of being used to make ATP."
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
   "explanation": "Alleles of genes on different chromosomes separate independently during meiosis I. Genes that are very far apart on the same chromosome behave in the same way because crossing over between them is frequent. Closely linked genes do not assort independently."
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
   "explanation": "In allosteric regulation, a molecule binds at a regulatory site distinct from the active site and changes the enzyme's shape. An activator stabilizes the active form and increases the enzyme's activity."
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
   "explanation": "dN/dt = (0.4)(200)(800 − 200)/800 = (0.4)(200)(0.75) = 60 individuals per week. This is less than the exponential rate rN = 80 because the population is approaching its carrying capacity."
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
   "explanation": "The crab and the fly are sister taxa: they share a more recent common ancestor with each other than either shares with the snail or the sponge."
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
   "explanation": "Segmentation is found only in the crab and the fly, which are sister taxa, so the most parsimonious explanation is a single origin in their common ancestor. Sponges lack both bilateral symmetry and true tissues."
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
   "explanation": "Chlorophyll absorbs mainly the red and blue-violet wavelengths and reflects or transmits green, which is why leaves look green. The absorbed wavelengths provide the energy for the light-dependent reactions."
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
   "explanation": "Meiosis I separates the homologous chromosomes into two daughter cells, so the chromosome number is halved: 46/2 = 23 chromosomes per cell, each still made of two chromatids."
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
   "explanation": "In meiosis II, the sister chromatids of each chromosome separate, so that each of the four resulting cells has chromosomes composed of a single chromatid. DNA is not replicated between meiosis I and meiosis II."
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
   "explanation": "Excess nutrients cause an algal bloom (eutrophication). When the algae die, decomposing bacteria use large amounts of dissolved oxygen, creating a hypoxic zone that can kill fish and other aquatic organisms."
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
   "explanation": "Nucleic acids are made of nucleotides, which contain phosphate groups (phosphorus) and nitrogenous bases (nitrogen). Macromolecule Z contains both N and P, so it is the nucleic acid."
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
   "explanation": "Proteins contain nitrogen in the amino group of every amino acid, and some amino acids (cysteine and methionine) contain sulfur. Macromolecule X, with only C, H, and O, is most likely a carbohydrate or a lipid."
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
   "explanation": "An oncogene is a mutated version of a normal gene (a proto-oncogene) that promotes cell division. A permanently active Ras sends a continuous signal to divide, even in the absence of growth factors."
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
   "explanation": "The EcoRI fragments are 2500 and 1000 bp, which add up to 3500 bp. The BamHI fragments, 2000 and 1500 bp, also add up to 3500 bp, which confirms the plasmid size. (Each enzyme cuts the circular plasmid twice, producing two fragments.)"
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
   "explanation": "Cutting a circular DNA molecule once opens the circle into one linear molecule of the same total length. A circular DNA with n sites produces n fragments."
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
   "explanation": "A retrovirus uses reverse transcriptase to synthesize DNA from its RNA genome. The DNA copy is then integrated into the host cell's chromosomes."
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
   "explanation": "With no selection or migration, random changes in allele frequency from generation to generation (genetic drift) are much larger in a small population. The large population shows only small fluctuations."
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
   "explanation": "Drift can eliminate one allele and fix the other (frequency of 1.0), which reduces the genetic variation in the population. Drift is random and does not produce adaptations."
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
   "explanation": "A molecule that has a polar (hydrophilic) head and nonpolar (hydrophobic) tails is amphipathic. This property lets phospholipids form the bilayer of cell membranes."
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
   "explanation": "Cells that do not receive the signals required to pass the G₁ checkpoint can leave the cycle and enter the G₀ phase, where they remain active but do not divide. Many specialized cells, such as neurons, remain in G₀."
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
   "explanation": "Primary succession begins on rock with no soil. Pioneer species such as lichens and mosses can survive there, and they help break down the rock and add organic matter that forms soil for later species."
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
   "explanation": "Distilled water has a higher water potential than the cell, so water enters by osmosis. The pressure potential from the rigid cell wall rises until it balances the solute potential, and the cell becomes firm (turgid) without bursting."
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
   "explanation": "Species with many offspring and little parental care, such as oysters or many fish, experience high mortality early in life, followed by lower mortality for the few survivors. This corresponds to curve 3."
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
   "explanation": "In curve 1, mortality is low until late in life. This pattern is found in species that produce few offspring and invest heavily in each, such as humans and large mammals."
  }
 ],
 "sets": {
  "be4-set1": {
   "text": "A researcher measured the rate at which two molecules, A and B, are taken up by cells as the concentration of each molecule outside the cell was increased. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Concentration of molecule outside the cell (mM)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Rate of uptake (relative units)</text><path d=\"M64 262L72.4 256.56L80.8 251.11L89.2 245.67L97.6 240.22L106 234.78L114.4 229.33L122.8 223.89L131.2 218.44L139.6 213L148 207.55L156.4 202.11L164.8 196.66L173.2 191.21L181.6 185.77L190 180.33L198.4 174.88L206.8 169.44L215.2 163.99L223.6 158.54L232 153.1L240.4 147.65L248.8 142.21L257.2 136.77L265.6 131.32L274 125.88L282.4 120.43L290.8 114.98L299.2 109.54L307.6 104.09L316 98.65L324.4 93.2L332.8 87.76L341.2 82.32L349.6 76.87L358 71.43L366.4 65.98L374.8 60.53L383.2 55.09L391.6 49.64L400 44.2\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L68.2 245.25L72.4 230.89L76.6 218.44L80.8 207.55L85 197.94L89.2 189.4L93.4 181.76L97.6 174.88L101.8 168.66L106 163L110.2 157.83L114.4 153.1L118.6 148.74L122.8 144.72L127 141L131.2 137.54L135.4 134.32L139.6 131.32L143.8 128.51L148 125.88L152.2 123.4L156.4 121.07L160.6 118.87L164.8 116.8L169 114.84L173.2 112.98L177.4 111.22L181.6 109.54L185.8 107.95L190 106.43L194.2 104.98L198.4 103.6L202.6 102.28L206.8 101.02L211 99.81L215.2 98.65L219.4 97.54L223.6 96.47L227.8 95.45L232 94.46L236.2 93.51L240.4 92.6L244.6 91.72L248.8 90.87L253 90.05L257.2 89.26L261.4 88.5L265.6 87.76L269.8 87.05L274 86.35L278.2 85.69L282.4 85.04L286.6 84.41L290.8 83.8L295 83.21L299.2 82.64L303.4 82.08L307.6 81.54L311.8 81.01L316 80.5L320.2 80L324.4 79.52L328.6 79.05L332.8 78.59L337 78.14L341.2 77.71L345.4 77.28L349.6 76.87L353.8 76.47L358 76.07L362.2 75.69L366.4 75.31L370.6 74.95L374.8 74.59L379 74.24L383.2 73.9L387.4 73.57L391.6 73.24L395.8 72.92L400 72.61\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Molecule A</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Molecule B</text></svg>",
     "alt": "A graph of the rate of uptake against concentration outside the cell. The curve for molecule A increases in a straight line. The curve for molecule B rises steeply and then levels off near 9."
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
