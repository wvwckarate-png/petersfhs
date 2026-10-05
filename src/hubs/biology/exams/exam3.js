// AP Biology — Exam 3 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "be3-1",
   "unit": 1,
   "stem": "Large bodies of water such as lakes and oceans moderate the temperature of nearby land. Which property of water is mainly responsible for this effect?",
   "choices": [
    "Its high specific heat, caused by hydrogen bonding between its molecules",
    "Its low density as a solid, which allows ice to float on the liquid",
    "Its ability to dissolve a wide variety of ionic compounds in solution",
    "Its cohesion between molecules, which produces a high surface tension"
   ],
   "correct": 0,
   "explanation": "Water absorbs or releases a large amount of heat for a small temperature change because heat must first break hydrogen bonds. This high specific heat lets large bodies of water warm and cool slowly, which stabilizes the temperature of the surrounding region."
  },
  {
   "id": "be3-2",
   "unit": 3,
   "stem": "A chemical reaction has a negative change in free energy (ΔG < 0). Which statement is correct?",
   "choices": [
    "The reaction is endergonic, so it requires a continuous input of energy to proceed.",
    "The reaction is at equilibrium, so the forward and reverse rates are exactly equal.",
    "The reaction will occur quickly, because a negative ΔG always means a fast reaction.",
    "The reaction is exergonic and spontaneous, although it may be slow without a catalyst."
   ],
   "correct": 3,
   "explanation": "A negative ΔG means the products have less free energy than the reactants, so the reaction is exergonic and thermodynamically favorable. The rate of the reaction depends on the activation energy, not on ΔG."
  },
  {
   "id": "be3-3",
   "unit": 6,
   "stem": "A linear DNA molecule 6,000 base pairs long is digested with a restriction enzyme that cuts the DNA at two different sites. How many fragments are produced?",
   "choices": [
    "6,000",
    "4",
    "3",
    "2"
   ],
   "correct": 2,
   "explanation": "Each cut in a linear DNA molecule divides it into one more fragment than the number of cuts: 2 cuts produce 3 fragments."
  },
  {
   "id": "be3-4",
   "unit": 4,
   "stem": "Bacteria in a biofilm release signaling molecules and respond when the concentration of these molecules reaches a threshold, which tells the bacteria how many of them are present. What is this process called?",
   "choices": [
    "Quorum sensing",
    "Apoptosis",
    "Endocrine signaling",
    "Meiosis"
   ],
   "correct": 0,
   "explanation": "In quorum sensing, bacteria secrete and detect small signaling molecules, so they can coordinate behaviors such as bioluminescence or biofilm formation when the population density is high enough."
  },
  {
   "id": "be3-5",
   "unit": 8,
   "stem": "Which of the following processes removes carbon dioxide from the atmosphere and incorporates the carbon into organic molecules?",
   "choices": [
    "Cellular respiration",
    "Combustion of fossil fuels",
    "Decomposition",
    "Photosynthesis"
   ],
   "correct": 3,
   "explanation": "Photosynthetic organisms take in CO₂ and fix the carbon into sugars. Respiration, combustion, and decomposition all release CO₂ back into the atmosphere."
  },
  {
   "id": "be3-6",
   "unit": 3,
   "stem": "In the light-dependent reactions, photosystem II splits water. What is the primary role of this reaction?",
   "choices": [
    "It replaces the electrons lost from the reaction center of photosystem II",
    "It provides the carbon atoms that are used to build sugars in the Calvin cycle",
    "It produces the CO₂ that is later fixed by rubisco in the stroma",
    "It generates ATP directly by substrate-level phosphorylation in the thylakoid"
   ],
   "correct": 0,
   "explanation": "Water is split into electrons, protons, and oxygen. The electrons replace those that photosystem II passes to the electron transport chain, the protons add to the thylakoid gradient, and oxygen is released as a by-product."
  },
  {
   "id": "be3-7",
   "unit": 2,
   "stem": "Calculate the water potential of a plant cell whose solute potential is −0.60 MPa and whose pressure potential is +0.35 MPa.",
   "choices": [
    "+0.95 MPa",
    "+0.25 MPa",
    "−0.25 MPa",
    "−0.95 MPa"
   ],
   "correct": 2,
   "explanation": "Ψ = Ψp + Ψs = (+0.35) + (−0.60) = −0.25 MPa."
  },
  {
   "id": "be3-8",
   "unit": 6,
   "setId": "be3-set1",
   "stem": "Which man is the most likely father of the child?",
   "choices": [
    "Man B, because he has a band that matches the child's non-maternal band",
    "Man A, because he shares a band of the same size with the mother",
    "Man A, because the pattern of his bands is the same as the mother's pattern",
    "Neither man, because neither man's bands match all of the child's bands"
   ],
   "correct": 0,
   "explanation": "A child inherits half of the bands from each parent. The child's band at position 0.2 matches the mother, so the other band, at 0.7, must come from the father. Man B has a band at 0.7 and Man A does not."
  },
  {
   "id": "be3-9",
   "unit": 6,
   "setId": "be3-set1",
   "stem": "Why do DNA fragments of the same size appear at the same position on the gel?",
   "choices": [
    "Fragments of the same size have the same sequence.",
    "All fragments are attracted to the same electrode.",
    "The electric current stops each fragment at a specific position.",
    "Fragments of the same size move through the gel at the same rate."
   ],
   "correct": 3,
   "explanation": "In gel electrophoresis, DNA moves toward the positive electrode at a rate that depends on its size, so fragments of equal length travel the same distance. (Fragments of the same length may still have different sequences.)"
  },
  {
   "id": "be3-10",
   "unit": 2,
   "stem": "Cells that specialize in secreting large amounts of protein, such as the cells of the pancreas that make digestive enzymes, contain an abundance of which organelle?",
   "choices": [
    "Smooth endoplasmic reticulum",
    "Peroxisomes",
    "Chloroplasts",
    "Rough endoplasmic reticulum"
   ],
   "correct": 3,
   "explanation": "Ribosomes attached to the rough ER synthesize proteins that are destined for secretion or for membranes. A cell that makes and secretes many proteins therefore has an extensive rough ER."
  },
  {
   "id": "be3-11",
   "unit": 8,
   "stem": "Which of the following is an example of a density-dependent factor that limits the size of a population?",
   "choices": [
    "The spread of a disease among crowded animals",
    "A volcanic eruption",
    "A severe drought that kills most plants",
    "A flood that destroys a nesting area"
   ],
   "correct": 0,
   "explanation": "Density-dependent factors, such as competition, predation, parasitism, and disease, have a greater effect as the population density increases. Disasters such as eruptions, droughts, and floods affect populations regardless of their density."
  },
  {
   "id": "be3-12",
   "unit": 7,
   "stem": "Some RNA molecules, called ribozymes, can catalyze chemical reactions. Why is this finding significant for hypotheses about the origin of life?",
   "choices": [
    "It shows that proteins were the first molecules to store genetic information in cells",
    "It proves that DNA was already present before RNA appeared in early cells",
    "It shows that RNA can function only inside intact, membrane-bound living cells",
    "It suggests that early life used RNA both to store information and to catalyze reactions"
   ],
   "correct": 3,
   "explanation": "The RNA world hypothesis proposes that RNA, which can both carry genetic information and act as an enzyme, preceded DNA and proteins. The discovery of ribozymes provides support for this idea."
  },
  {
   "id": "be3-13",
   "unit": 8,
   "stem": "A researcher captures and marks 50 fish in a pond and releases them. Later, the researcher captures 40 fish, 10 of which are marked. Using the mark–recapture method, what is the estimated size of the fish population?",
   "choices": [
    "100",
    "200",
    "250",
    "500"
   ],
   "correct": 1,
   "explanation": "The proportion of marked fish in the second sample (10/40) estimates the proportion of marked fish in the whole population (50/N). N = (50 × 40)/10 = 200."
  },
  {
   "id": "be3-14",
   "unit": 4,
   "stem": "Many signal transduction pathways are turned off when the signal is no longer present. Which type of enzyme is involved in reversing the effects of protein kinases?",
   "choices": [
    "Protein phosphatases, which remove phosphate groups from proteins",
    "DNA polymerases, which add nucleotides to a growing DNA strand",
    "Proteases, which join amino acids into longer polypeptide chains",
    "Ligases, which seal gaps between fragments of a DNA strand"
   ],
   "correct": 0,
   "explanation": "Kinases add phosphate groups to proteins, which activates or inactivates them. Phosphatases remove the phosphates, which returns the proteins to their original state and ends the response."
  },
  {
   "id": "be3-15",
   "unit": 6,
   "stem": "In humans, one gene can produce several different proteins through alternative splicing. How does alternative splicing produce different proteins from the same pre-mRNA?",
   "choices": [
    "Different combinations of exons are joined to form different mature mRNAs.",
    "Different DNA strands are used as the template.",
    "The ribosome reads the mRNA in a different direction each time.",
    "Different introns are translated into proteins."
   ],
   "correct": 0,
   "explanation": "In alternative splicing, exons from the same pre-mRNA are included or skipped in different combinations, producing mRNAs with different coding sequences. This greatly increases the number of proteins that the genome can produce."
  },
  {
   "id": "be3-16",
   "unit": 4,
   "stem": "Which of the following regulates the progression of a cell through the cell cycle?",
   "choices": [
    "Ribosomes that attach to the spindle",
    "DNA ligase that joins Okazaki fragments",
    "Centrioles that produce ATP",
    "Cyclins that activate cyclin-dependent kinases"
   ],
   "correct": 3,
   "explanation": "Cyclin levels rise and fall through the cycle. Cyclins bind to and activate cyclin-dependent kinases (CDKs), which phosphorylate target proteins that drive the cell from one phase of the cycle to the next."
  },
  {
   "id": "be3-17",
   "unit": 7,
   "setId": "be3-set2",
   "stem": "Which statement is best supported by the cladogram and the table?",
   "choices": [
    "Seeds evolved before vascular tissue in the lineage leading to flowering plants.",
    "Flowers evolved independently in the conifers and in the flowering plants.",
    "Seeds evolved after vascular tissue in the lineage leading to flowering plants.",
    "Mosses evolved from flowering plants that lost their vascular tissue."
   ],
   "correct": 2,
   "explanation": "Ferns have vascular tissue but not seeds, and conifers and flowering plants, which branch later, have both. Vascular tissue therefore appeared before seeds in this lineage."
  },
  {
   "id": "be3-18",
   "unit": 7,
   "setId": "be3-set2",
   "stem": "Which group is most closely related to the conifers?",
   "choices": [
    "Ferns",
    "Mosses",
    "All three groups are equally related to the conifers",
    "Flowering plants"
   ],
   "correct": 3,
   "explanation": "Conifers and flowering plants are sister groups, which means they share a more recent common ancestor with each other than either does with ferns or mosses."
  },
  {
   "id": "be3-19",
   "unit": 5,
   "stem": "Hemophilia is caused by a recessive allele on the X chromosome. A woman who is a carrier of the allele has children with a man who does not have hemophilia. What is the probability that a son of this couple will have hemophilia?",
   "choices": [
    "0",
    "1/4",
    "1/2",
    "3/4"
   ],
   "correct": 2,
   "explanation": "The mother passes either the normal X or the X with the hemophilia allele with equal probability. A son receives his X from his mother, so he has a 1/2 chance of inheriting the allele and having the disorder."
  },
  {
   "id": "be3-20",
   "unit": 4,
   "stem": "Normal cells in culture stop dividing when they come in contact with neighboring cells, but cancer cells continue to divide and pile up. What does this observation indicate about cancer cells?",
   "choices": [
    "They have lost the normal response to signals that regulate the cell cycle.",
    "They have lost the ability to carry out mitosis, so they divide in a different way.",
    "They contain far more DNA than normal cells, which causes them to divide.",
    "They are unable to respond to any chemical signals from neighboring cells."
   ],
   "correct": 0,
   "explanation": "In normal cells, contact with neighbors sends signals that halt the cycle (contact inhibition). Cancer cells ignore these signals, because the pathways that control the cycle have been altered by mutations."
  },
  {
   "id": "be3-21",
   "unit": 5,
   "stem": "A breeder crosses a pea plant that has the dominant phenotype with a plant that has the recessive phenotype. Half of the offspring have the dominant phenotype and half have the recessive phenotype. What is the genotype of the dominant parent?",
   "choices": [
    "Homozygous dominant",
    "Heterozygous",
    "Homozygous recessive",
    "It cannot be determined"
   ],
   "correct": 1,
   "explanation": "This testcross reveals the genotype of the unknown parent. If the dominant parent were homozygous dominant, all offspring would show the dominant phenotype. A 1:1 ratio means the dominant parent is heterozygous (Aa × aa)."
  },
  {
   "id": "be3-22",
   "unit": 6,
   "stem": "The trp operon in E. coli is a repressible operon. What happens to the expression of the trp genes when tryptophan is abundant in the cell?",
   "choices": [
    "Tryptophan binds the promoter and activates RNA polymerase.",
    "Tryptophan removes the repressor from the operator, so transcription increases.",
    "Tryptophan binds the repressor, which then binds the operator and blocks transcription.",
    "Tryptophan is converted into lactose."
   ],
   "correct": 2,
   "explanation": "In a repressible operon, the end product (tryptophan) acts as a corepressor. When it binds the repressor, the complex binds the operator and blocks RNA polymerase, so the cell stops making tryptophan when enough is present."
  },
  {
   "id": "be3-23",
   "unit": 8,
   "stem": "In an ecosystem, the gross primary productivity (GPP) is 12,000 kcal/m²/yr, and the producers use 4,000 kcal/m²/yr in cellular respiration. What is the net primary productivity (NPP)?",
   "choices": [
    "16,000 kcal/m²/yr",
    "12,000 kcal/m²/yr",
    "8,000 kcal/m²/yr",
    "3,000 kcal/m²/yr"
   ],
   "correct": 2,
   "explanation": "NPP = GPP − energy used in respiration = 12,000 − 4,000 = 8,000 kcal/m²/yr. This is the energy that is available to consumers."
  },
  {
   "id": "be3-24",
   "unit": 1,
   "stem": "A triglyceride is broken down by hydrolysis. How many fatty acid molecules are released from each molecule of triglyceride, along with one molecule of glycerol?",
   "choices": [
    "4",
    "3",
    "2",
    "1"
   ],
   "correct": 1,
   "explanation": "A triglyceride is made of one glycerol molecule joined to three fatty acids by ester linkages. Hydrolysis of all three bonds releases three fatty acids and one glycerol."
  },
  {
   "id": "be3-25",
   "unit": 8,
   "setId": "be3-set3",
   "stem": "Which process is shown by the data?",
   "choices": [
    "Primary succession, in which a new community develops on bare rock over time",
    "Nitrogen fixation, in which bacteria convert atmospheric nitrogen into ammonia",
    "Eutrophication, in which excess nutrients cause a bloom of algae in the lake",
    "Biomagnification, in which a substance becomes more concentrated at higher trophic levels"
   ],
   "correct": 3,
   "explanation": "The pesticide is not easily broken down or excreted, so it accumulates in the tissues of organisms. Consumers at each higher level eat many organisms from the level below, so the concentration increases up the food chain."
  },
  {
   "id": "be3-26",
   "unit": 8,
   "setId": "be3-set3",
   "stem": "How many times greater is the concentration of the pesticide in the fish-eating birds than in the algae?",
   "choices": [
    "1000",
    "625",
    "60",
    "25"
   ],
   "correct": 1,
   "explanation": "The ratio is 25 ppm ÷ 0.04 ppm = 625."
  },
  {
   "id": "be3-27",
   "unit": 7,
   "stem": "A genetic disorder caused by a recessive allele affects 1 in 10,000 people in a population that is in Hardy–Weinberg equilibrium. What is the approximate frequency of carriers in the population?",
   "choices": [
    "0.01",
    "0.02",
    "0.10",
    "0.20"
   ],
   "correct": 1,
   "explanation": "q² = 1/10,000 = 0.0001, so q = 0.01 and p ≈ 0.99. The frequency of carriers is 2pq ≈ 2(0.99)(0.01) ≈ 0.02, which is about 2%."
  },
  {
   "id": "be3-28",
   "unit": 1,
   "stem": "Starch and cellulose are both polymers of glucose, but humans can digest starch and not cellulose. Which statement best explains this?",
   "choices": [
    "The glycosidic linkages differ in orientation, and human enzymes cannot break those in cellulose",
    "Cellulose is made of a different monosaccharide than starch, which human enzymes cannot recognize",
    "Starch contains peptide bonds that human enzymes can break, while cellulose does not",
    "Cellulose is too small to be digested, since human enzymes act only on large polymers"
   ],
   "correct": 0,
   "explanation": "Starch has α-glycosidic linkages, whereas cellulose has β-glycosidic linkages, which give the polymer a straight, rigid structure. Human digestive enzymes recognize the α-linkages but not the β-linkages."
  },
  {
   "id": "be3-29",
   "unit": 7,
   "stem": "Whales have small pelvic bones that are not attached to the backbone and have no apparent function in swimming. How are these structures best described, and what do they suggest?",
   "choices": [
    "They are analogous structures that evolved in response to a similar environment.",
    "They are vestigial structures that suggest whales descended from land mammals.",
    "They are homoplasies that arose independently in whales and fish.",
    "They are adaptations that provide support during swimming."
   ],
   "correct": 1,
   "explanation": "Vestigial structures are reduced remnants of features that were functional in ancestors. The whale pelvis is evidence that whales evolved from four-legged land mammals."
  },
  {
   "id": "be3-30",
   "unit": 5,
   "setId": "be3-set4",
   "stem": "How is the trait in this pedigree most likely inherited?",
   "choices": [
    "Autosomal dominant",
    "Autosomal recessive",
    "X-linked recessive",
    "Y-linked"
   ],
   "correct": 2,
   "explanation": "Only males are affected, and the trait passes from an unaffected mother (a carrier) to an affected son in each generation, skipping through unaffected females. This pattern is characteristic of X-linked recessive inheritance. Y-linked traits pass from father to son."
  },
  {
   "id": "be3-31",
   "unit": 5,
   "setId": "be3-set4",
   "stem": "What is the probability that III-2 is a carrier of the trait allele?",
   "choices": [
    "3/4",
    "1/2",
    "1/4",
    "0"
   ],
   "correct": 1,
   "explanation": "II-2 must be a carrier, because she has an affected son. Her husband is unaffected (X^A Y), so a daughter receives his normal X and has a 1/2 chance of receiving her mother's X with the trait allele."
  },
  {
   "id": "be3-32",
   "unit": 4,
   "stem": "A cell has 2n = 6 chromosomes. Ignoring crossing over, how many different combinations of chromosomes can be present in the gametes produced by this organism through independent assortment?",
   "choices": [
    "3",
    "6",
    "8",
    "64"
   ],
   "correct": 2,
   "explanation": "The number of possible combinations is 2ⁿ, where n is the haploid number. With n = 3, there are 2³ = 8 possible combinations."
  },
  {
   "id": "be3-33",
   "unit": 8,
   "stem": "Mycorrhizal fungi grow in association with plant roots, increasing the plant's absorption of water and minerals, while the fungi receive sugars from the plant. What type of relationship is this?",
   "choices": [
    "Mutualism",
    "Parasitism",
    "Commensalism",
    "Competition"
   ],
   "correct": 0,
   "explanation": "In mutualism, both species benefit. The fungi extend the effective absorbing area of the roots, and the plant provides the fungi with organic carbon from photosynthesis."
  },
  {
   "id": "be3-34",
   "unit": 6,
   "stem": "A mutation deletes exactly three consecutive nucleotides from within the coding region of a gene. Which result is most likely?",
   "choices": [
    "Every amino acid after the deletion is changed because the reading frame shifts",
    "One amino acid is missing, but the rest of the sequence is unchanged",
    "No protein is produced because translation cannot begin without the codon",
    "A single amino acid in the protein is replaced by a different amino acid"
   ],
   "correct": 1,
   "explanation": "Deleting three nucleotides removes one codon (or parts of two codons) and keeps the reading frame intact for the rest of the message. The protein therefore lacks one amino acid (or changes one), but the remainder is unchanged, unlike a frameshift."
  },
  {
   "id": "be3-35",
   "unit": 6,
   "stem": "Ribosomal RNA (rRNA) is a major component of the ribosome. Which statement best describes the function of rRNA?",
   "choices": [
    "It carries the code for a protein from the nucleus to the cytoplasm.",
    "It carries amino acids to the ribosome.",
    "It is the template for the synthesis of DNA.",
    "It helps catalyze the formation of peptide bonds during translation."
   ],
   "correct": 3,
   "explanation": "The ribosome's catalytic activity is performed by rRNA, which acts as a ribozyme to join amino acids by peptide bonds. mRNA carries the genetic message, and tRNA brings amino acids."
  },
  {
   "id": "be3-36",
   "unit": 7,
   "stem": "In a population of 300 plants in Hardy–Weinberg equilibrium, the frequency of the dominant allele is p = 0.6. How many plants are expected to be heterozygous?",
   "choices": [
    "180",
    "144",
    "72",
    "36"
   ],
   "correct": 1,
   "explanation": "q = 1 − 0.6 = 0.4. The frequency of heterozygotes is 2pq = 2(0.6)(0.4) = 0.48, so the number of heterozygous plants is 0.48 × 300 = 144."
  },
  {
   "id": "be3-37",
   "unit": 3,
   "stem": "When yeast cells carry out fermentation in the absence of oxygen, which products are formed?",
   "choices": [
    "Lactic acid and water",
    "Oxygen and glucose",
    "Carbon dioxide and water",
    "Ethanol and carbon dioxide"
   ],
   "correct": 3,
   "explanation": "In alcohol fermentation, pyruvate is converted to ethanol with the release of CO₂, which regenerates the NAD⁺ needed for glycolysis to continue. Lactic acid fermentation occurs in animal muscle cells."
  },
  {
   "id": "be3-38",
   "unit": 2,
   "setId": "be3-set5",
   "stem": "In which direction will there be a net movement of water?",
   "choices": [
    "From the right side to the left side, because the left side has the higher total solute concentration",
    "From the left side to the right side, because the right side has the higher molarity",
    "There will be no net movement, because the molarities are similar",
    "From the left side to the right side, because NaCl is a smaller molecule"
   ],
   "correct": 0,
   "explanation": "Water potential depends on the total number of dissolved particles. The 0.5 M NaCl solution produces about 1.0 M of particles (two ions per formula unit), which is more than the 0.8 M of glucose particles. The left side has the lower water potential, so water moves into it."
  },
  {
   "id": "be3-39",
   "unit": 2,
   "setId": "be3-set5",
   "stem": "After the system reaches equilibrium, which side will have the higher liquid level?",
   "choices": [
    "The right side",
    "Both sides will be equal",
    "The left side",
    "It cannot be determined"
   ],
   "correct": 2,
   "explanation": "Water moves toward the left side, which has the higher solute concentration, so the liquid level on the left rises. The level continues to rise until the pressure from the extra column of liquid balances the difference in solute potential."
  },
  {
   "id": "be3-40",
   "unit": 7,
   "setId": "be3-set6",
   "stem": "Which statement best explains the increase in the frequency of dark moths between 1850 and 1895?",
   "choices": [
    "Light-colored moths changed into dark-colored moths as a response to pollution",
    "Dark moths were better camouflaged on dark bark, so they left more offspring",
    "The pollution caused new dark-colored alleles to arise in the moth population",
    "Dark moths migrated into the region from other places where bark was dark"
   ],
   "correct": 1,
   "explanation": "When the bark darkened, birds more easily found and ate the light moths, so dark moths survived and reproduced more. The frequency of the allele for dark color increased in the population, which is natural selection."
  },
  {
   "id": "be3-41",
   "unit": 7,
   "setId": "be3-set6",
   "stem": "Which of the following best explains the decrease in the percentage of dark moths by 1990?",
   "choices": [
    "The dark-colored allele was lost from the population by new mutations",
    "The environment changed again, and selection favored the light-colored moths",
    "Dark moths stopped reproducing for several generations after the clean air laws",
    "Natural selection ended once the air became clean and the lichens returned"
   ],
   "correct": 1,
   "explanation": "Natural selection depends on the environment. As lichens returned, light moths were again better camouflaged, so their reproductive success increased and the frequency of the light allele rose."
  },
  {
   "id": "be3-42",
   "unit": 5,
   "stem": "Human skin color varies continuously from light to dark, rather than falling into distinct categories. Which pattern of inheritance best explains this?",
   "choices": [
    "Complete dominance at a single gene with two alleles that are expressed",
    "Codominance of two alleles, both of which are fully expressed in heterozygotes",
    "Polygenic inheritance, with several genes contributing to the phenotype",
    "X-linked inheritance, in which the gene is carried on the X chromosome"
   ],
   "correct": 2,
   "explanation": "Traits that show continuous variation are usually determined by many genes, each making a small contribution, and are also influenced by the environment. Such traits are described as polygenic."
  },
  {
   "id": "be3-43",
   "unit": 2,
   "stem": "In the plasma membrane, phospholipids are arranged in a bilayer. Which statement best explains this arrangement?",
   "choices": [
    "The hydrophobic heads face the aqueous environments and the hydrophilic tails face each other.",
    "The phospholipids are covalently bonded in two layers.",
    "The cholesterol molecules hold the layers together by hydrogen bonds.",
    "The hydrophilic heads face the aqueous environments and the hydrophobic tails face each other."
   ],
   "correct": 3,
   "explanation": "Phospholipids are amphipathic. In water, the polar heads interact with the water on both sides of the membrane, while the nonpolar fatty acid tails cluster together in the interior, away from water."
  },
  {
   "id": "be3-44",
   "unit": 7,
   "stem": "A population of wild wheat suddenly produces a new species when an error in meiosis doubles the number of chromosomes, so that the new plants can reproduce with each other but not with the parent species. What type of speciation does this describe?",
   "choices": [
    "Sympatric speciation by polyploidy",
    "Allopatric speciation by geographic isolation",
    "Adaptive radiation after a mass extinction",
    "Gradual speciation by genetic drift"
   ],
   "correct": 0,
   "explanation": "Polyploidy can produce reproductive isolation in a single generation without a geographic barrier, which is sympatric speciation. It is especially common in plants."
  },
  {
   "id": "be3-45",
   "unit": 1,
   "stem": "Two glucose molecules are joined to form a disaccharide. Which type of bond links the two monosaccharides?",
   "choices": [
    "A glycosidic bond formed by dehydration synthesis",
    "A peptide bond formed by hydrolysis",
    "A phosphodiester bond formed by dehydration synthesis",
    "An ester bond formed by hydrolysis"
   ],
   "correct": 0,
   "explanation": "Monosaccharides are joined by glycosidic linkages that form when a water molecule is removed (dehydration synthesis). Peptide bonds join amino acids, and phosphodiester bonds join nucleotides."
  },
  {
   "id": "be3-46",
   "unit": 2,
   "stem": "Which structure of the cytoskeleton forms the spindle fibers that separate chromosomes during cell division?",
   "choices": [
    "Microfilaments",
    "Intermediate filaments",
    "Microtubules",
    "Cell wall fibers"
   ],
   "correct": 2,
   "explanation": "Microtubules, made of tubulin, assemble into the spindle apparatus that attaches to chromosomes and moves them. Microfilaments are involved in cell movement and cytokinesis, and intermediate filaments provide structural support."
  },
  {
   "id": "be3-47",
   "unit": 3,
   "setId": "be3-set7",
   "stem": "What is the factor that limits the rate of photosynthesis in the plant at high light intensity under 0.04% CO₂?",
   "choices": [
    "The intensity of the light",
    "The concentration of chlorophyll",
    "The temperature of the leaves",
    "The concentration of CO₂"
   ],
   "correct": 3,
   "explanation": "At high light intensities, increasing the light does not increase the rate (the curve levels off). The rate is higher at 0.10% CO₂, which shows that the CO₂ concentration is limiting the rate at 0.04%."
  },
  {
   "id": "be3-48",
   "unit": 3,
   "setId": "be3-set7",
   "stem": "Which statement best explains why the rate increases with the light intensity at low light?",
   "choices": [
    "More light increases the amount of CO₂ available inside the leaf for fixation",
    "More light increases the rate of the light reactions that supply ATP and NADPH",
    "More light causes the stomata to close, which increases the concentration of CO₂",
    "More light reduces the need for chlorophyll, so the leaf can make more sugar"
   ],
   "correct": 1,
   "explanation": "At low intensities, the light reactions are limited by the supply of photons. More light produces more ATP and NADPH for the Calvin cycle, so more CO₂ is fixed."
  },
  {
   "id": "be3-49",
   "unit": 3,
   "setId": "be3-set8",
   "stem": "What is the optimum pH of the enzyme, based on the data?",
   "choices": [
    "About pH 3",
    "About pH 11",
    "About pH 7",
    "The enzyme works equally well at all pH values"
   ],
   "correct": 2,
   "explanation": "The enzyme produced the greatest volume of oxygen at pH 7, so this is the pH at which its activity is highest."
  },
  {
   "id": "be3-50",
   "unit": 3,
   "setId": "be3-set8",
   "stem": "Which statement best explains why the activity is low at pH 3?",
   "choices": [
    "The low pH alters the charges on R groups, changing the enzyme's shape and active site.",
    "The low pH removes the substrate from the solution so the enzyme cannot bind it.",
    "The low pH breaks the peptide bonds that link the amino acids in the enzyme.",
    "The low pH makes the substrate too large to fit into the active site of the enzyme."
   ],
   "correct": 0,
   "explanation": "Changes in pH alter the charges on amino acid side chains, which disrupts the hydrogen bonds and ionic interactions that maintain the enzyme's tertiary structure. The active site is distorted and the enzyme becomes less effective or is denatured."
  },
  {
   "id": "be3-51",
   "unit": 4,
   "stem": "How many chromatids are in a human somatic cell at metaphase of mitosis? (A human somatic cell has 46 chromosomes.)",
   "choices": [
    "23",
    "46",
    "92",
    "184"
   ],
   "correct": 2,
   "explanation": "After the S phase, each of the 46 chromosomes consists of two sister chromatids, so a cell in metaphase contains 46 × 2 = 92 chromatids (still 46 chromosomes)."
  },
  {
   "id": "be3-52",
   "unit": 4,
   "setId": "be3-set9",
   "stem": "At approximately what time do the cells enter mitosis?",
   "choices": [
    "8 hours and 32 hours",
    "20 hours and 44 hours",
    "0 hours and 24 hours",
    "14 hours and 38 hours"
   ],
   "correct": 1,
   "explanation": "The cells enter mitosis when cyclin B reaches its peak, which the graph shows at about 20 hours and again at about 44 hours (24 hours later)."
  },
  {
   "id": "be3-53",
   "unit": 4,
   "setId": "be3-set9",
   "stem": "Which statement best explains the rise and fall in the level of cyclin B?",
   "choices": [
    "Cyclin is a permanent part of the nuclear envelope and moves in and out of view",
    "Cyclin is produced only when the cells are in the G₀ phase of the cell cycle",
    "Cyclin is made only after cell division is complete and is never broken down",
    "Cyclin is synthesized during the cycle and degraded after mitosis, which resets the cycle"
   ],
   "correct": 3,
   "explanation": "Cyclin B accumulates and activates CDK to trigger mitosis, and it is then degraded as the cell exits mitosis. The periodic synthesis and breakdown of cyclin help produce the oscillations that drive the cell cycle."
  },
  {
   "id": "be3-54",
   "unit": 1,
   "setId": "be3-set10",
   "stem": "Identify the solution that is acting as a buffer.",
   "choices": [
    "Solution Y, because its pH changed only slightly",
    "Solution X, because its pH changed the most",
    "Both solutions, because both started at pH 7",
    "Neither solution, because the pH changed in both"
   ],
   "correct": 0,
   "explanation": "A buffer resists changes in pH when small amounts of acid or base are added. Solution Y shows only a small decrease in pH, so it is the buffer. Pure water has no buffering capacity, and its pH drops sharply."
  },
  {
   "id": "be3-55",
   "unit": 1,
   "setId": "be3-set10",
   "stem": "Which statement best explains how the buffer minimizes the change in pH?",
   "choices": [
    "It contains a strong acid that neutralizes the added HCl",
    "It contains a weak acid and its conjugate base that bind or release H⁺ ions",
    "It prevents H⁺ from dissolving in water",
    "It converts the added H⁺ into hydroxide ions by a covalent reaction"
   ],
   "correct": 1,
   "explanation": "A buffer includes a weak acid–conjugate base pair. When acid is added, the base form combines with the extra H⁺; when base is added, the acid form releases H⁺. This keeps the H⁺ concentration nearly constant."
  },
  {
   "id": "be3-56",
   "unit": 3,
   "stem": "How many molecules of NADH are produced by glycolysis from one molecule of glucose?",
   "choices": [
    "10",
    "4",
    "2",
    "0"
   ],
   "correct": 2,
   "explanation": "In the energy-payoff phase of glycolysis, two molecules of NAD⁺ are reduced to NADH per glucose (one for each G3P). Glycolysis also produces a net of 2 ATP."
  },
  {
   "id": "be3-57",
   "unit": 6,
   "stem": "Bacteria are transformed with a plasmid that carries a gene for ampicillin resistance, and are then spread on plates that contain ampicillin. What is the purpose of the ampicillin in this procedure?",
   "choices": [
    "It causes the bacteria to take up the plasmid.",
    "It increases the rate at which the bacteria divide.",
    "It selects for the bacteria that have taken up the plasmid.",
    "It cuts the plasmid DNA at specific sites."
   ],
   "correct": 2,
   "explanation": "Only bacteria that took up the plasmid and express the resistance gene can grow in the presence of ampicillin. The antibiotic therefore acts as a selective agent, and the colonies that grow are the transformed cells."
  },
  {
   "id": "be3-58",
   "unit": 5,
   "stem": "Three genes assort independently. Two individuals that are both heterozygous for all three genes (AaBbCc × AaBbCc) are crossed. What is the probability that an offspring shows the dominant phenotype for all three traits?",
   "choices": [
    "3/4",
    "27/64",
    "9/64",
    "1/64"
   ],
   "correct": 1,
   "explanation": "For each gene, the probability of the dominant phenotype in an Aa × Aa cross is 3/4. For the three independent genes: (3/4)³ = 27/64."
  },
  {
   "id": "be3-59",
   "unit": 7,
   "stem": "The long, colorful tail of a male peacock makes it more visible to predators but increases the number of mates he attracts. Which process best explains the evolution of this trait?",
   "choices": [
    "Genetic drift, in which random events change allele frequencies",
    "The founder effect, in which a few individuals establish a new population",
    "Stabilizing selection, in which extreme traits are removed",
    "Sexual selection, in which traits that increase mating success are favored"
   ],
   "correct": 3,
   "explanation": "Sexual selection favors traits that increase an individual's ability to obtain mates, even if the traits reduce survival. Females choosing males with elaborate tails results in more offspring for those males, so the trait becomes more exaggerated."
  },
  {
   "id": "be3-60",
   "unit": 6,
   "stem": "How many different codons are possible if each codon is a sequence of three nucleotides, and each position can be occupied by any of the four RNA bases?",
   "choices": [
    "16",
    "20",
    "61",
    "64"
   ],
   "correct": 3,
   "explanation": "Each of the three positions can be filled in 4 ways, so there are 4³ = 64 possible codons. Of these, 61 code for amino acids and 3 are stop codons."
  }
 ],
 "sets": {
  "be3-set1": {
   "text": "A DNA fingerprinting analysis was used to determine the father of a child. DNA from the mother, the child, and two possible fathers (A and B) was cut with restriction enzymes and separated by gel electrophoresis. The gel is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"24\" y=\"28\" width=\"442\" height=\"230\" fill=\"#EDE8DC\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"49.35\" y=\"32\" width=\"68.8\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"83.75\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Mother</text><rect x=\"51.5\" y=\"76\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"51.5\" y=\"130\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"156.85\" y=\"32\" width=\"68.8\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"191.25\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Child</text><rect x=\"159\" y=\"76\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"159\" y=\"166\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"264.35\" y=\"32\" width=\"68.8\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"298.75\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Man A</text><rect x=\"266.5\" y=\"94\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"266.5\" y=\"130\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"371.85\" y=\"32\" width=\"68.8\" height=\"7\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1\"/><text x=\"406.25\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">Man B</text><rect x=\"374\" y=\"166\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"374\" y=\"112\" width=\"64.5\" height=\"7\" fill=\"#2B5870\" stroke=\"none\" stroke-width=\"1.6\"/><text x=\"12\" y=\"274\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(+)</text><text x=\"12\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">(−)</text></svg>",
     "alt": "A gel with four lanes. The mother has bands at positions 0.2 and 0.5. The child has bands at 0.2 and 0.7. Man A has bands at 0.3 and 0.5. Man B has bands at 0.7 and 0.4."
    }
   ]
  },
  "be3-set2": {
   "text": "The cladogram shows relationships among four groups of plants. The table shows whether each trait is present (+) or absent (−) in each group.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"338\" y=\"26\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Flowering plants</text><text x=\"338\" y=\"104\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Conifers</text><line x1=\"215.25\" y1=\"22\" x2=\"215.25\" y2=\"100\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"215.25\" y1=\"22\" x2=\"330\" y2=\"22\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"215.25\" y1=\"100\" x2=\"330\" y2=\"100\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"182\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Ferns</text><line x1=\"138.75\" y1=\"61\" x2=\"138.75\" y2=\"178\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"138.75\" y1=\"61\" x2=\"215.25\" y2=\"61\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"138.75\" y1=\"178\" x2=\"330\" y2=\"178\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"338\" y=\"260\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" font-style=\"italic\">Mosses</text><line x1=\"62.25\" y1=\"119.5\" x2=\"62.25\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"62.25\" y1=\"119.5\" x2=\"138.75\" y2=\"119.5\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"62.25\" y1=\"256\" x2=\"330\" y2=\"256\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"24\" y1=\"187.75\" x2=\"62.25\" y2=\"187.75\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>",
     "alt": "A cladogram of four plant groups. Mosses branch off first, then ferns, and the last split separates conifers and flowering plants as sister groups."
    },
    {
     "table": {
      "headers": [
       "Group",
       "Vascular tissue",
       "Seeds",
       "Flowers"
      ],
      "rows": [
       [
        "Mosses",
        "−",
        "−",
        "−"
       ],
       [
        "Ferns",
        "+",
        "−",
        "−"
       ],
       [
        "Conifers",
        "+",
        "+",
        "−"
       ],
       [
        "Flowering plants",
        "+",
        "+",
        "+"
       ]
      ]
     }
    }
   ]
  },
  "be3-set3": {
   "text": "A pesticide that persists in the environment was sprayed on a lake. The table shows the concentration of the pesticide in the organisms at each trophic level.",
   "figures": [
    {
     "table": {
      "headers": [
       "Organism",
       "Pesticide concentration (ppm)"
      ],
      "rows": [
       [
        "Producers (algae)",
        "0.04"
       ],
       [
        "Zooplankton",
        "0.23"
       ],
       [
        "Small fish",
        "2.07"
       ],
       [
        "Large fish",
        "13.8"
       ],
       [
        "Fish-eating birds",
        "25"
       ]
      ]
     }
    }
   ]
  },
  "be3-set4": {
   "text": "The pedigree shows a rare trait in three generations of a family. Filled symbols represent individuals who show the trait.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 290\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"137\" y1=\"40\" x2=\"203\" y2=\"40\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"267\" y1=\"135\" x2=\"333\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"87.5\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"87.5\" x2=\"250\" y2=\"87.5\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"87.5\" x2=\"90\" y2=\"118\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"87.5\" x2=\"250\" y2=\"118\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"135\" x2=\"300\" y2=\"182.5\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"182.5\" x2=\"380\" y2=\"182.5\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"182.5\" x2=\"270\" y2=\"213\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"182.5\" x2=\"380\" y2=\"213\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"103\" y=\"23\" width=\"34\" height=\"34\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"120\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">I-1</text><circle cx=\"220\" cy=\"40\" r=\"17\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"220\" y=\"72\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">I-2</text><rect x=\"73\" y=\"118\" width=\"34\" height=\"34\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"90\" y=\"167\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-1</text><circle cx=\"250\" cy=\"135\" r=\"17\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"250\" y=\"167\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-2</text><rect x=\"333\" y=\"118\" width=\"34\" height=\"34\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"350\" y=\"167\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">II-3</text><rect x=\"253\" y=\"213\" width=\"34\" height=\"34\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"270\" y=\"262\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">III-1</text><circle cx=\"380\" cy=\"230\" r=\"17\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"380\" y=\"262\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">III-2</text></svg>",
     "alt": "A three-generation pedigree. In generation I, an unaffected father and mother have an affected son (II-1) and an unaffected daughter (II-2). II-2 marries an unaffected man (II-3), and they have an affected son (III-1) and an unaffected daughter (III-2).",
     "maxWidth": 460
    }
   ]
  },
  "be3-set5": {
   "text": "A U-shaped tube is separated into two sides by a membrane that is permeable to water but not to solutes. The left side is filled with a 0.5 M NaCl solution (each NaCl dissociates into two ions) and the right side with a 0.8 M glucose solution (glucose does not dissociate). Both sides start at the same level.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M80 40L80 200Q80 220 100 220L260 220Q280 220 280 200L280 40\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M160 40L160 190L200 190L200 40\" fill=\"none\" stroke=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"81.5\" y=\"104\" width=\"94\" height=\"96\" fill=\"#D8E8F2\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"184.5\" y=\"104\" width=\"94\" height=\"96\" fill=\"#D8E8F2\" stroke=\"none\" stroke-width=\"1.6\"/><line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"220\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"180\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#D2705A\">membrane</text><circle cx=\"92\" cy=\"118\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"129\" cy=\"171\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"93\" cy=\"148\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"130\" cy=\"125\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"94\" cy=\"178\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"131\" cy=\"155\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"95\" cy=\"132\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"132\" cy=\"185\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"195\" cy=\"118\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"232\" cy=\"171\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"196\" cy=\"148\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"233\" cy=\"125\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"197\" cy=\"178\" r=\"3.4\" fill=\"#3F7A94\"/><circle cx=\"234\" cy=\"155\" r=\"3.4\" fill=\"#3F7A94\"/><text x=\"130\" y=\"244\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.5 M NaCl</text><text x=\"230\" y=\"244\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.8 M glucose</text></svg>",
     "alt": "A U-shaped tube with a dashed membrane in the middle. The left side contains 0.5 molar NaCl with several dots representing dissolved ions, and the right side contains 0.8 molar glucose with slightly fewer dots. Both sides start at the same level.",
     "maxWidth": 380
    }
   ]
  },
  "be3-set6": {
   "text": "Before the Industrial Revolution, most of the peppered moths in a region were light-colored, which camouflaged them on lichen-covered tree bark. As air pollution darkened the bark, the frequency of dark-colored moths changed. After clean air laws were passed, the lichens returned. The graph shows the percentage of dark moths in the population in three years.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"258\" x2=\"456\" y2=\"258\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"262\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"210.4\" x2=\"456\" y2=\"210.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"214.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"162.8\" x2=\"456\" y2=\"162.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"166.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"115.2\" x2=\"456\" y2=\"115.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"119.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"67.6\" x2=\"456\" y2=\"67.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"71.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"20\" x2=\"456\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"258\" x2=\"456\" y2=\"258\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"258\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"106.33\" y=\"246.1\" width=\"43\" height=\"11.9\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><text x=\"129.33\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1850</text><rect x=\"237\" y=\"31.9\" width=\"43\" height=\"226.1\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><text x=\"260\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1895</text><rect x=\"367.67\" y=\"234.2\" width=\"43\" height=\"23.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1\"/><text x=\"390.67\" y=\"275\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1990</text><text x=\"260\" y=\"312\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Year</text><text x=\"16\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 139)\">Dark-colored moths in population (%)</text></svg>",
     "alt": "A bar graph of the percentage of dark-colored moths in the population. In 1850 it is 5 percent, in 1895 it is 95 percent, and in 1990 it is 10 percent.",
     "maxWidth": 460
    }
   ]
  },
  "be3-set7": {
   "text": "The graph shows the rate of CO₂ uptake by a plant's leaves at different light intensities under two atmospheric CO₂ concentrations.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"221.67\" x2=\"400\" y2=\"221.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"225.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"64\" y1=\"181.33\" x2=\"400\" y2=\"181.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"185.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"141\" x2=\"400\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">9</text><line x1=\"64\" y1=\"100.67\" x2=\"400\" y2=\"100.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"104.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"60.33\" x2=\"400\" y2=\"60.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"64.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">15</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">18</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Light intensity (% of full sunlight)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Rate of CO₂ uptake (μmol/m²/s)</text><path d=\"M64 262L67.36 253.6L70.72 246.18L74.08 239.59L77.44 233.7L80.8 228.39L84.16 223.59L87.52 219.22L90.88 215.24L94.24 211.58L97.6 208.22L100.96 205.12L104.32 202.25L107.68 199.58L111.04 197.1L114.4 194.78L117.76 192.61L121.12 190.58L124.48 188.67L127.84 186.87L131.2 185.17L134.56 183.57L137.92 182.06L141.28 180.63L144.64 179.26L148 177.97L151.36 176.74L154.72 175.57L158.08 174.45L161.44 173.39L164.8 172.37L168.16 171.4L171.52 170.46L174.88 169.57L178.24 168.71L181.6 167.89L184.96 167.1L188.32 166.34L191.68 165.61L195.04 164.9L198.4 164.22L201.76 163.57L205.12 162.94L208.48 162.33L211.84 161.74L215.2 161.17L218.56 160.62L221.92 160.08L225.28 159.57L228.64 159.07L232 158.58L235.36 158.11L238.72 157.66L242.08 157.21L245.44 156.78L248.8 156.37L252.16 155.96L255.52 155.56L258.88 155.18L262.24 154.81L265.6 154.44L268.96 154.09L272.32 153.75L275.68 153.41L279.04 153.08L282.4 152.76L285.76 152.45L289.12 152.15L292.48 151.85L295.84 151.56L299.2 151.28L302.56 151.01L305.92 150.74L309.28 150.47L312.64 150.21L316 149.96L319.36 149.72L322.72 149.48L326.08 149.24L329.44 149.01L332.8 148.78L336.16 148.56L339.52 148.35L342.88 148.13L346.24 147.93L349.6 147.72L352.96 147.52L356.32 147.33L359.68 147.13L363.04 146.95L366.4 146.76L369.76 146.58L373.12 146.4L376.48 146.23L379.84 146.06L383.2 145.89L386.56 145.72L389.92 145.56L393.28 145.4L396.64 145.25L400 145.09\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L67.36 248.56L70.72 236.69L74.08 226.15L77.44 216.71L80.8 208.22L84.16 200.54L87.52 193.56L90.88 187.18L94.24 181.33L97.6 175.96L100.96 170.99L104.32 166.4L107.68 162.13L111.04 158.15L114.4 154.44L117.76 150.97L121.12 147.72L124.48 144.67L127.84 141.79L131.2 139.08L134.56 136.52L137.92 134.1L141.28 131.8L144.64 129.62L148 127.56L151.36 125.59L154.72 123.71L158.08 121.93L161.44 120.22L164.8 118.59L168.16 117.03L171.52 115.54L174.88 114.11L178.24 112.74L181.6 111.42L184.96 110.16L188.32 108.94L191.68 107.77L195.04 106.64L198.4 105.56L201.76 104.51L205.12 103.5L208.48 102.52L211.84 101.58L215.2 100.67L218.56 99.79L221.92 98.93L225.28 98.11L228.64 97.31L232 96.53L235.36 95.78L238.72 95.05L242.08 94.34L245.44 93.65L248.8 92.98L252.16 92.33L255.52 91.7L258.88 91.09L262.24 90.49L265.6 89.91L268.96 89.35L272.32 88.79L275.68 88.26L279.04 87.73L282.4 87.22L285.76 86.72L289.12 86.24L292.48 85.76L295.84 85.3L299.2 84.85L302.56 84.41L305.92 83.98L309.28 83.56L312.64 83.14L316 82.74L319.36 82.35L322.72 81.96L326.08 81.58L329.44 81.22L332.8 80.85L336.16 80.5L339.52 80.15L342.88 79.81L346.24 79.48L349.6 79.16L352.96 78.84L356.32 78.52L359.68 78.22L363.04 77.91L366.4 77.62L369.76 77.33L373.12 77.04L376.48 76.77L379.84 76.49L383.2 76.22L386.56 75.96L389.92 75.7L393.28 75.44L396.64 75.19L400 74.95\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.04% CO₂</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.10% CO₂</text></svg>",
     "alt": "A graph of CO2 uptake rate against light intensity. Both curves rise and then level off. The curve at 0.04 percent CO2 levels off near 10 and the curve at 0.10 percent CO2 levels off near 16."
    }
   ]
  },
  "be3-set8": {
   "text": "A student measured the activity of the enzyme catalase, which breaks down hydrogen peroxide into water and oxygen, at different pH values. The volume of O₂ produced in 2 minutes is shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "pH",
       "Volume of O₂ produced (mL)"
      ],
      "rows": [
       [
        "3",
        "1"
       ],
       [
        "5",
        "6"
       ],
       [
        "7",
        "10"
       ],
       [
        "9",
        "5"
       ],
       [
        "11",
        "1"
       ]
      ]
     }
    }
   ]
  },
  "be3-set9": {
   "text": "The graph shows the level of cyclin B in a population of cells over 48 hours. The cells divide every 24 hours, and the cells enter mitosis when the cyclin B level reaches its peak.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"242\" x2=\"496\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"246\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"197.6\" x2=\"496\" y2=\"197.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"201.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"153.2\" x2=\"496\" y2=\"153.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"157.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"108.8\" x2=\"496\" y2=\"108.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"112.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"64.4\" x2=\"496\" y2=\"64.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"68.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0</text><line x1=\"64\" y1=\"242\" x2=\"64\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"242\" x2=\"136\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"208\" y1=\"242\" x2=\"208\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">16</text><line x1=\"280\" y1=\"242\" x2=\"280\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">24</text><line x1=\"352\" y1=\"242\" x2=\"352\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">32</text><line x1=\"424\" y1=\"242\" x2=\"424\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"496\" y1=\"242\" x2=\"496\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">48</text><line x1=\"64\" y1=\"242\" x2=\"496\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"290\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time (hours)</text><text x=\"16\" y=\"131\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 131)\">Relative cyclin B level</text><path d=\"M64 75.5L66.88 83.74L69.76 92.31L72.64 101.15L75.52 110.2L78.4 119.4L81.28 128.68L84.16 137.97L87.04 147.22L89.92 156.35L92.8 165.3L95.68 174.01L98.56 182.43L101.44 190.48L104.32 198.11L107.2 205.27L110.08 211.92L112.96 217.99L115.84 223.45L118.72 228.27L121.6 232.4L124.48 235.83L127.36 238.51L130.24 240.45L133.12 241.61L136 242L138.88 241.61L141.76 240.45L144.64 238.51L147.52 235.83L150.4 232.4L153.28 228.27L156.16 223.45L159.04 217.99L161.92 211.92L164.8 205.27L167.68 198.11L170.56 190.48L173.44 182.43L176.32 174.01L179.2 165.3L182.08 156.35L184.96 147.22L187.84 137.97L190.72 128.68L193.6 119.4L196.48 110.2L199.36 101.15L202.24 92.31L205.12 83.74L208 75.5L210.88 67.65L213.76 60.25L216.64 53.34L219.52 46.97L222.4 41.2L225.28 36.05L228.16 31.58L231.04 27.79L233.92 24.74L236.8 22.43L239.68 20.88L242.56 20.1L245.44 20.1L248.32 20.88L251.2 22.43L254.08 24.74L256.96 27.79L259.84 31.58L262.72 36.05L265.6 41.2L268.48 46.97L271.36 53.34L274.24 60.25L277.12 67.65L280 75.5L282.88 83.74L285.76 92.31L288.64 101.15L291.52 110.2L294.4 119.4L297.28 128.68L300.16 137.97L303.04 147.22L305.92 156.35L308.8 165.3L311.68 174.01L314.56 182.43L317.44 190.48L320.32 198.11L323.2 205.27L326.08 211.92L328.96 217.99L331.84 223.45L334.72 228.27L337.6 232.4L340.48 235.83L343.36 238.51L346.24 240.45L349.12 241.61L352 242L354.88 241.61L357.76 240.45L360.64 238.51L363.52 235.83L366.4 232.4L369.28 228.27L372.16 223.45L375.04 217.99L377.92 211.92L380.8 205.27L383.68 198.11L386.56 190.48L389.44 182.43L392.32 174.01L395.2 165.3L398.08 156.35L400.96 147.22L403.84 137.97L406.72 128.68L409.6 119.4L412.48 110.2L415.36 101.15L418.24 92.31L421.12 83.74L424 75.5L426.88 67.65L429.76 60.25L432.64 53.34L435.52 46.97L438.4 41.2L441.28 36.05L444.16 31.58L447.04 27.79L449.92 24.74L452.8 22.43L455.68 20.88L458.56 20.1L461.44 20.1L464.32 20.88L467.2 22.43L470.08 24.74L472.96 27.79L475.84 31.58L478.72 36.05L481.6 41.2L484.48 46.97L487.36 53.34L490.24 60.25L493.12 67.65L496 75.5\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A graph of relative cyclin B level against time in hours. The level oscillates, with peaks at about 20 hours and 44 hours and low points at about 8 hours and 32 hours."
    }
   ]
  },
  "be3-set10": {
   "text": "A student added drops of 0.1 M HCl to two solutions, X and Y, that both started at pH 7.0, and measured the pH after each addition. One solution was pure water and the other was a buffer. The results are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"231.75\" x2=\"400\" y2=\"231.75\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"235.75\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"64\" y1=\"201.5\" x2=\"400\" y2=\"201.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"205.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"171.25\" x2=\"400\" y2=\"171.25\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"175.25\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"64\" y1=\"141\" x2=\"400\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"110.75\" x2=\"400\" y2=\"110.75\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"114.75\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"64\" y1=\"80.5\" x2=\"400\" y2=\"80.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"84.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"50.25\" x2=\"400\" y2=\"50.25\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"54.25\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">7</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"262\" x2=\"131.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"198.4\" y1=\"262\" x2=\"198.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"265.6\" y1=\"262\" x2=\"265.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"332.8\" y1=\"262\" x2=\"332.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume of 0.1 M HCl added (mL)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">pH of the solution</text><path d=\"M64 50.25L68.2 58.52L72.4 66.34L76.6 73.74L80.8 80.72L85 87.33L89.2 93.58L93.4 99.48L97.6 105.06L101.8 110.33L106 115.32L110.2 120.03L114.4 124.49L118.6 128.7L122.8 132.68L127 136.45L131.2 140.01L135.4 143.37L139.6 146.55L143.8 149.56L148 152.4L152.2 155.08L156.4 157.62L160.6 160.02L164.8 162.29L169 164.43L173.2 166.46L177.4 168.38L181.6 170.19L185.8 171.9L190 173.52L194.2 175.05L198.4 176.5L202.6 177.87L206.8 179.16L211 180.38L215.2 181.54L219.4 182.63L223.6 183.66L227.8 184.64L232 185.56L236.2 186.43L240.4 187.25L244.6 188.03L248.8 188.77L253 189.47L257.2 190.12L261.4 190.75L265.6 191.34L269.8 191.89L274 192.42L278.2 192.91L282.4 193.38L286.6 193.83L290.8 194.25L295 194.64L299.2 195.02L303.4 195.37L307.6 195.71L311.8 196.03L316 196.32L320.2 196.61L324.4 196.88L328.6 197.13L332.8 197.37L337 197.59L341.2 197.81L345.4 198.01L349.6 198.2L353.8 198.38L358 198.55L362.2 198.71L366.4 198.86L370.6 199.01L374.8 199.15L379 199.27L383.2 199.4L387.4 199.51L391.6 199.62L395.8 199.72L400 199.82\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 50.25L80.8 51.16L97.6 52.07L114.4 52.97L131.2 53.88L148 54.79L164.8 55.69L181.6 56.6L198.4 57.51L215.2 58.42L232 59.32L248.8 60.23L265.6 61.14L282.4 62.05L299.2 62.95L316 63.86L332.8 64.77L349.6 65.68L366.4 66.59L383.2 67.49L400 68.4\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Solution X</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Solution Y</text></svg>",
     "alt": "A graph of pH against volume of HCl added. Solution X falls quickly from pH 7 to about pH 2. Solution Y falls only slightly, from pH 7 to about pH 6.4, over 10 milliliters."
    }
   ]
  }
 }
};

export default EXAM;
