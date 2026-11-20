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
   "explanation": "Correct: (A) One or more carbon–carbon double bonds that put kinks in its tail. A saturated fatty acid has only C–C single bonds, so its hydrocarbon tail is straight and holds the maximum number of hydrogens. An unsaturated fatty acid has at least one C=C double bond; a <i>cis</i> double bond puts a bend (kink) in the tail. The kinks keep neighboring tails from packing tightly, which weakens the attractions between molecules, so unsaturated fats such as olive oil are liquid at room temperature while saturated fats such as butter are solid.\n\n(B) is wrong because saturation is defined by the bonds, not the chain length, and it is the saturated tail, not the unsaturated one, that is straight and packs tightly.\n(C) is wrong because both kinds of fatty acid tails are long nonpolar hydrocarbon chains, so both are hydrophobic and neither dissolves easily in water.\n(D) is wrong because every fatty acid ends in a carboxyl group; a phosphate group belongs to a phospholipid's head, not to the fatty acid itself."
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
   "explanation": "Correct: (D) Apoptosis. Apoptosis is programmed cell death: a regulated, orderly process in which caspase enzymes dismantle the cell from within, the cell shrinks and breaks into membrane-bound fragments, and neighboring phagocytes engulf the pieces without causing inflammation. During development it sculpts body parts, and the removal of the webbing between the fingers is the classic example. The stem's words \"programmed cell death\" are the definition of apoptosis.\n\n(A) is wrong because necrosis is uncontrolled cell death caused by injury, toxins or loss of blood supply; the cell swells and bursts and triggers inflammation, so it is not programmed.\n(B) is wrong because mitosis is nuclear division that makes new cells; it adds cells rather than removing the tissue between the fingers.\n(C) is wrong because meiosis is the reduction division that produces gametes in the gonads; it does not remove cells from developing tissues."
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
   "explanation": "Correct: (D) Mitochondria originated from a prokaryote engulfed by an ancestral eukaryotic cell. The endosymbiotic theory proposes that mitochondria descend from free-living aerobic prokaryotes (related to alphaproteobacteria) that were engulfed by an ancestral host cell and kept as partners. Each feature in the stem matches a bacterium: circular DNA like a bacterial chromosome, 70S-type ribosomes like bacterial ribosomes, and a double membrane, the inner one from the original prokaryote and the outer one from the host's engulfing membrane. Mitochondria also divide by a fission-like process.\n\n(A) is wrong because a fold of the nuclear membrane would contain no DNA of its own and would not carry bacteria-like ribosomes or circular DNA.\n(B) is wrong because the endoplasmic reticulum makes membranes and proteins but cannot produce an organelle with its own circular genome and bacteria-like ribosomes.\n(C) is wrong because viruses have no ribosomes and no membranes of their own, so the bacterial features listed point to a prokaryote, not a virus."
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
   "explanation": "Correct: (C) 6. Glucose has 6 carbons, and complete aerobic respiration oxidizes all of them to CO₂. Glycolysis releases no CO₂; it splits glucose into 2 pyruvate (3 C each). Pyruvate oxidation removes 1 CO₂ from each pyruvate, giving 2 CO₂ and 2 acetyl CoA. Each turn of the citric acid cycle releases 2 CO₂, and two turns give 4 CO₂. The total is 2 + 4 = 6 CO₂, which matches the equation C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O.\n\n(A) is wrong because 2 counts only the CO₂ released by pyruvate oxidation and leaves out the 4 CO₂ released by the two turns of the citric acid cycle.\n(B) is wrong because 4 counts only the citric acid cycle CO₂ and omits the 2 CO₂ lost when the two pyruvates are converted to acetyl CoA.\n(D) is wrong because 36 is an old estimate of the ATP yield per glucose, not the number of CO₂; a 6-carbon molecule can release at most 6 CO₂."
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
   "explanation": "Correct: (A) The 5′ end of the strand. A nucleotide's sugar carbons are numbered 1′ to 5′. In a DNA strand, the phosphate on one nucleotide's 5′ carbon bonds to the 3′ hydroxyl of the previous nucleotide, forming the sugar-phosphate backbone. This gives each strand a direction: the end whose terminal sugar has an unlinked phosphate on its 5′ carbon is the 5′ end, and the opposite end, with a free –OH on the 3′ carbon, is the 3′ end. DNA polymerase adds new nucleotides only to the 3′ end.\n\n(B) is wrong because the 3′ end carries a free hydroxyl group on the 3′ carbon, not a phosphate on the 5′ carbon.\n(C) is wrong because the two ends of a strand are chemically different (5′ phosphate versus 3′ hydroxyl), which is exactly what gives DNA its directionality.\n(D) is wrong because the 5′ end of a linear strand does carry the free 5′ phosphate; only a closed circular molecule would have no free ends."
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
   "explanation": "Correct: (A) A trophic cascade. A trophic cascade is a chain of indirect effects that spreads across three or more trophic levels when a top consumer changes. Here the new predator lowers the small-fish population. The small fish graze on algae, so with fewer small fish eating it, the algae increase. The stem shows exactly this: a change at the top level causes effects two or more steps away in the food web.\n\n(B) is wrong because primary succession is the gradual colonization of bare, lifeless ground such as new lava rock; the lake already had a community.\n(C) is wrong because genetic drift is a random change in allele frequencies within a population, not a change in population sizes across feeding levels.\n(D) is wrong because biomagnification is the increase in the concentration of a persistent toxin such as DDT at higher trophic levels; no toxin is involved here."
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
   "explanation": "Correct: (C) 9. Each dehydration synthesis reaction joins two amino acids with one peptide bond and removes one molecule of H₂O (an –OH from one carboxyl group and an –H from the next amino group). In an unbranched chain of n amino acids there are n − 1 links, just as 10 beads on a string are joined by 9 connections. So 10 amino acids form 10 − 1 = 9 peptide bonds and release 9 water molecules.\n\n(A) is wrong because 11 adds a bond instead of subtracting one; a linear chain of n units has n − 1 links, not n + 1.\n(B) is wrong because 10 assumes one water per amino acid, which would be true only if the chain closed into a ring.\n(D) is wrong because 8 subtracts one bond too many; 10 amino acids in a chain need 9 peptide bonds, not 8."
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
   "explanation": "Correct: (D) 0.47. The chi-square statistic is χ² = Σ(o − e)²/e, summed over the four phenotype classes in the table. Round yellow: (315 − 312.75)² / 312.75 = (2.25)² / 312.75 = 5.0625 / 312.75 = 0.016. Round green: (108 − 104.25)² / 104.25 = 14.0625 / 104.25 = 0.135. Wrinkled yellow: (101 − 104.25)² / 104.25 = 10.5625 / 104.25 = 0.101. Wrinkled green: (32 − 34.75)² / 34.75 = 7.5625 / 34.75 = 0.218. Sum: 0.016 + 0.135 + 0.101 + 0.218 = 0.47.\n\n(A) is wrong because the largest single term is only 0.218, so four terms cannot add to 15.7; a value that large would need deviations far bigger than the 2–4 offspring seen here.\n(B) is wrong because 7.81 is the critical value for 3 degrees of freedom at p = 0.05, which is compared with χ² rather than being the calculated value.\n(C) is wrong because 1.5 is about three times the correct sum; each squared deviation must be divided by its expected number, and the four terms total only 0.47."
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
   "explanation": "Correct: (D) Fail to reject the null hypothesis; the differences are likely due to chance. The null hypothesis is that the genes assort independently, giving a 9:3:3:1 ratio, and that any deviation is due to chance. With 4 phenotype classes there are 4 − 1 = 3 degrees of freedom, and the critical value at p = 0.05 is 7.81. The calculated χ² is 0.47, which is far smaller than 7.81, so the deviations are not statistically significant. The student fails to reject the null hypothesis: the data fit the expected ratio.\n\n(A) is wrong because rejecting the null would require χ² greater than 7.81; 0.47 is far smaller, and the close fit to 9:3:3:1 actually supports independent assortment, not linkage.\n(B) is wrong because the data fit the Mendelian 9:3:3:1 prediction very closely, so there is no basis for rejecting the null hypothesis.\n(C) is wrong because expected values are often fractions; the chi-square test works with them, and only the observed counts must be whole numbers."
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
   "explanation": "Correct: (A) It cuts the DNA at the target sequence. In CRISPR-Cas9, a guide RNA has a sequence of about 20 nucleotides that is complementary to a chosen DNA target. The guide RNA base pairs with that target, and Cas9, an endonuclease, cuts both strands of the DNA there (a double-strand break) next to a short PAM sequence. The cell then repairs the break, either by error-prone end joining, which can knock out the gene, or by using a supplied template to insert a new sequence.\n\n(B) is wrong because Cas9 is a DNA-cutting nuclease; adding methyl groups is the job of methyltransferase enzymes, and Cas9 does not modify RNA.\n(C) is wrong because guide RNA is a noncoding RNA that is never translated, and translation is done by ribosomes, not by Cas9.\n(D) is wrong because sealing the gaps between Okazaki fragments is done by DNA ligase during replication; Cas9 breaks DNA rather than joining it."
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
   "explanation": "Correct: (D) Feedback inhibition. In feedback inhibition, the end product of a metabolic pathway binds to an enzyme early in the pathway, usually at an allosteric site, and lowers its activity. When the product builds up, its own production slows; when the product is used up, the enzyme becomes active again. This is a form of negative feedback that keeps the cell from wasting energy and raw materials on more product than it needs. Isoleucine inhibiting threonine deaminase is a classic example.\n\n(A) is wrong because competitive inhibition describes how a molecule that resembles the substrate blocks the active site; it names a mechanism, not the regulation of a pathway by its own end product.\n(B) is wrong because substrate-level phosphorylation is a way of making ATP by transferring a phosphate from a substrate to ADP; it does not regulate an enzyme.\n(C) is wrong because positive feedback would increase the activity of the first enzyme; here the product decreases it, so this is negative feedback."
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
   "explanation": "Correct: (A) Nitrogen fixation, which makes nitrogen available to plants in a usable form. N₂ makes up about 78% of the air, but its triple bond is so strong that plants and animals cannot use it. Nitrogen-fixing bacteria, such as <i>Rhizobium</i> in legume root nodules and free-living soil bacteria, use the enzyme nitrogenase to reduce N₂ to ammonia (NH₃, which becomes NH₄⁺ in soil). Plants absorb this fixed nitrogen and use it to build amino acids, nucleotides and chlorophyll, so fixation is the main natural entry point of nitrogen into food webs.\n\n(B) is wrong because denitrification converts nitrate back to N₂ gas, the reverse direction of what the stem describes.\n(C) is wrong because nitrification converts ammonium to nitrite and then nitrate, and the conversion of nitrate to N₂ described in this choice is actually denitrification.\n(D) is wrong because decomposition breaks down organic matter and releases ammonium and CO₂; it does not use atmospheric N₂."
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
   "explanation": "Correct: (D) Epistasis. Epistasis is an interaction in which the genotype at one gene masks or changes the expression of a different gene. In Labradors, the B gene determines black (B_) or brown (bb) pigment, and the E gene determines whether pigment is deposited in the fur. An ee dog is yellow no matter what its B genotype is, so the E gene is epistatic to the B gene. A cross of two BbEe dogs gives a modified 9 black : 3 brown : 4 yellow ratio.\n\n(A) is wrong because incomplete dominance involves two alleles of the same gene giving an intermediate heterozygote, such as pink snapdragons; here two different genes interact.\n(B) is wrong because codominance is when both alleles of one gene are fully expressed in a heterozygote, such as AB blood type; it does not involve one gene masking another.\n(C) is wrong because polygenic inheritance is when many genes add together to give a continuous range of phenotypes, such as height; here one gene masks another."
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
   "explanation": "Correct: (D) Paracrine signaling. Cell signals are classified by the distance they travel. In paracrine signaling, a cell releases a local regulator (such as a growth factor) into the extracellular fluid, where it diffuses a short distance and acts on nearby target cells. The stem's clues are \"diffuses a short distance\" and \"nearby cells,\" which define paracrine signaling. Growth factors that stimulate neighboring cells to divide are textbook paracrine signals.\n\n(A) is wrong because endocrine hormones travel through the bloodstream to distant target cells rather than diffusing a short distance to neighbors.\n(B) is wrong because gap junctions pass small molecules directly from the cytoplasm of one cell into the next, without release into the extracellular fluid.\n(C) is wrong because direct contact signaling uses molecules bound to the surfaces of two touching cells, not a factor that is released and diffuses."
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
   "explanation": "Correct: (C) 20 rabbits. The exponential growth equation dN/dt = rN gives the rate of increase from the per capita rate r and the population size N. With r = 0.20 per year and N = 100 rabbits, dN/dt = (0.20 /year)(100 rabbits) = 20 rabbits per year. So the population grows by about 20 rabbits in the first year, to about 120. (Continuous compounding would give slightly more, about 22, which is why the stem says approximate.)\n\n(A) is wrong because 120 is the population size after one year, but the question asks for the increase, which is 120 − 100 = 20.\n(B) is wrong because 100 is the starting population; an increase of 100 would require r = 1.0 per year, not 0.20.\n(D) is wrong because 2 is off by a factor of 10, as if r were 0.020 or the 0.20 were misread as 2%."
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
   "explanation": "Correct: (A) Reduced transcription of the genes in that region. DNA methylation adds methyl groups to cytosines, usually in CpG regions near promoters. It is an epigenetic change: the base sequence stays the same. Methylated DNA attracts proteins that compact the chromatin into tightly packed heterochromatin and blocks transcription factors from binding the promoter, so RNA polymerase cannot transcribe the genes. Heavy methylation therefore silences genes, as in X-chromosome inactivation and genomic imprinting.\n\n(B) is wrong because the opposite is true: methylation compacts chromatin and blocks transcription, while histone acetylation is the change usually linked to increased transcription.\n(C) is wrong because methylation is epigenetic; it chemically marks cytosines without changing the sequence of bases.\n(D) is wrong because mRNA degradation in the cytoplasm is controlled by mechanisms such as microRNAs, not by methyl groups on the DNA in the nucleus."
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
   "explanation": "Correct: (A) −4.99 bar. Substitute the values into Ψs = −iCRT with units: Ψs = −(1)(0.20 mol/L)(0.0831 L·bar/(mol·K))(300 K). First 0.20 × 0.0831 = 0.01662 bar/K, then × 300 K = 4.986 bar, so Ψs = −4.99 bar. The units cancel to bar. Solute potential is negative because dissolved solutes lower the water potential relative to pure water, which is set at 0.\n\n(B) is wrong because −2.49 bar is half the correct value, the result of using C = 0.10 M or i = 0.5 instead of 0.20 M and i = 1.\n(C) is wrong because solute potential is never positive; this drops the negative sign and also gives only half the correct size.\n(D) is wrong because this has the right size but drops the negative sign; solutes always lower water potential, so Ψs must be negative."
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
   "explanation": "Correct: (C) ATP and NADPH. The light-dependent reactions in the thylakoids use light energy to make ATP (by chemiosmosis) and NADPH (by reducing NADP⁺ with electrons from water). In the Calvin cycle in the stroma, rubisco fixes CO₂ onto RuBP, and the resulting 3-PGA is phosphorylated by ATP and reduced by NADPH to G3P, the three-carbon sugar. ATP is also used to regenerate RuBP. Making one G3P uses 9 ATP and 6 NADPH.\n\n(A) is wrong because oxygen is a by-product released from splitting water in the light reactions, and water is their electron source; neither powers the Calvin cycle.\n(B) is wrong because pyruvate and NADH belong to glycolysis and cellular respiration; the photosynthetic electron carrier is NADPH.\n(D) is wrong because glucose is a product of photosynthesis, not an energy input from the light reactions, and CO₂ is the carbon source, not an energy carrier."
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
   "explanation": "Correct: (C) 300. The genetic code is read in nonoverlapping triplets: each codon of 3 nucleotides specifies one amino acid. With 900 nucleotides in the coding region (the stop codon excluded, since it codes for no amino acid) and no introns to remove, the number of codons is 900 ÷ 3 = 300. So the polypeptide has 300 amino acids.\n\n(A) is wrong because 900 assumes one nucleotide per amino acid, but each amino acid needs a three-nucleotide codon.\n(B) is wrong because 450 divides by 2, as if codons were two nucleotides long; 4² = 16 combinations would be too few for 20 amino acids.\n(D) is wrong because 100 divides 900 by 9 instead of by 3; each codon is three nucleotides, so 900 nucleotides make 300 codons and 300 amino acids."
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
   "explanation": "Correct: (A) A codon in the mRNA. Each tRNA has an anticodon, a sequence of three bases in one of its loops, and carries the matching amino acid on its 3′ end. In the A site of the ribosome, the anticodon base pairs, antiparallel and complementary, with the codon in the mRNA. For example, the anticodon 3′-UAC-5′ pairs with the codon 5′-AUG-3′ and delivers methionine. This codon-anticodon pairing is what translates the nucleotide sequence into the correct amino acid sequence.\n\n(B) is wrong because tRNAs never pair with DNA; the DNA template is read by RNA polymerase during transcription in the nucleus.\n(C) is wrong because the large ribosomal subunit holds the tRNA and forms peptide bonds, but the anticodon pairs with the mRNA codon, not with rRNA.\n(D) is wrong because the poly-A tail is a 3′ string of adenines that stabilizes the mRNA and is never translated, so tRNAs do not pair with it."
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
   "explanation": "Correct: (A) 0.09. For a gene with two alleles, p + q = 1, so the recessive allele frequency is q = 1 − 0.7 = 0.3. At Hardy–Weinberg equilibrium the genotype frequencies are p² + 2pq + q² = 1, and the homozygous recessive frequency is q² = (0.3)² = 0.09. The other genotypes are p² = 0.49 (homozygous dominant) and 2pq = 0.42 (heterozygous), and 0.49 + 0.42 + 0.09 = 1.00 checks the work.\n\n(B) is wrong because 0.21 is pq = (0.7)(0.3), which leaves out the factor of 2 in the heterozygote term and is not the frequency of any genotype.\n(C) is wrong because 0.42 is 2pq = 2(0.7)(0.3), the frequency of heterozygous carriers, not of homozygous recessive individuals.\n(D) is wrong because 0.49 is p² = (0.7)², the frequency of the homozygous dominant genotype."
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
   "explanation": "Correct: (D) DNA ligase. DNA polymerase can add nucleotides only to a 3′ end, so the lagging strand is made in short pieces called Okazaki fragments, each started from an RNA primer. After the primers are replaced with DNA, a nick remains in the sugar-phosphate backbone between adjacent fragments. DNA ligase seals each nick by forming a phosphodiester bond, joining the fragments into one continuous strand.\n\n(A) is wrong because helicase unwinds the double helix at the replication fork by breaking hydrogen bonds; it does not join fragments.\n(B) is wrong because primase lays down the short RNA primers that start each Okazaki fragment; it does not seal the gaps between them.\n(C) is wrong because RNA polymerase transcribes genes into RNA; it has no role in joining Okazaki fragments during replication."
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
   "explanation": "Correct: (B) Nondisjunction, in which chromosomes fail to separate normally. Nondisjunction is the failure of homologous chromosomes (in meiosis I) or sister chromatids (in meiosis II) to separate. One resulting gamete gets two copies of chromosome 21 (n + 1) and another gets none (n − 1). When an n + 1 gamete is fertilized by a normal gamete, the zygote has three copies of chromosome 21, a trisomy, which causes Down syndrome. The risk rises with maternal age because egg cells stay arrested in meiosis I for decades.\n\n(A) is wrong because crossing over occurs between homologous chromosomes, and exchanging segments would not add a whole extra chromosome.\n(C) is wrong because independent assortment occurs in meiosis I and gives normal gametes with one copy of each chromosome, so it cannot add a chromosome.\n(D) is wrong because a deletion removes part of a chromosome; it cannot create an extra whole copy of chromosome 21."
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
   "explanation": "Correct: (B) 2/3. Two unaffected parents who have an affected (cc) child must both be carriers, Cc. A Cc × Cc cross gives 1 CC : 2 Cc : 1 cc. The second child is known to be unaffected, so the cc outcome is ruled out and only 1 + 2 = 3 equally likely outcomes remain. Of these, 2 are carriers (Cc), so the conditional probability is 2/3.\n\n(A) is wrong because 3/4 is the probability that any child is unaffected (CC or Cc), not the probability that an unaffected child is a carrier.\n(C) is wrong because 1/2 is the chance that any child is a carrier before we know its phenotype; knowing the child is unaffected removes cc and raises it to 2/3.\n(D) is wrong because 1/4 is the probability that a child is affected (cc) or homozygous normal (CC), not the probability of being a carrier."
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
   "explanation": "Correct: (B) 30. Per glucose, substrate-level phosphorylation gives 2 ATP in glycolysis and 2 ATP (as GTP or ATP) in the citric acid cycle. Most ATP comes from oxidative phosphorylation: the 10 NADH and 2 FADH₂ drive the electron transport chain, and about 2.5 ATP per NADH and 1.5 per FADH₂ gives about 26–28 more. The current estimate for the total is about 30–32 ATP per glucose, so 30 is the best choice. (Older textbooks give 36–38.)\n\n(A) is wrong because 90 is about three times the real yield; even the old theoretical maximum was only 36–38 ATP per glucose.\n(C) is wrong because 4 counts only the ATP from substrate-level phosphorylation (2 in glycolysis plus 2 in the citric acid cycle) and leaves out oxidative phosphorylation.\n(D) is wrong because 2 is the net ATP from glycolysis alone, which is also the yield of fermentation without oxygen."
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
   "explanation": "Correct: (D) At high concentrations, the substrate outcompetes the inhibitor for active sites. A competitive inhibitor resembles the substrate and binds the active site reversibly, so substrate and inhibitor compete for the same sites. In the graph, the inhibitor curve rises more slowly (at 5 mM it is about 4.5 vs 7 μmol/min), but as substrate concentration increases it keeps climbing toward the same plateau near 10 μmol/min. At very high [S], substrate molecules vastly outnumber inhibitor molecules and occupy almost every active site, so Vmax is unchanged while the apparent Km rises.\n\n(A) is wrong because nothing in the experiment destroys the inhibitor; it is still present at high substrate concentrations but is simply outcompeted.\n(B) is wrong because an inhibitor that changes the enzyme's shape at all concentrations (noncompetitive) would lower the maximum rate, but both curves approach the same plateau.\n(C) is wrong because substrate is converted to product, not inhibitor, and more inhibitor would lower the rate further rather than letting it reach the same plateau."
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
   "explanation": "Correct: (A) At the active site, which has a shape similar to the substrate. A competitive inhibitor has a shape and charge pattern similar to the substrate, so it fits into the active site and blocks the substrate from binding. Because both compete for the same site, adding more substrate can overcome the inhibition, which is why the graph shows the inhibited curve approaching the same maximum rate. Malonate inhibiting succinate dehydrogenase is a classic example.\n\n(B) is wrong because binding at a separate allosteric site is noncompetitive or allosteric inhibition, which lowers the maximum rate and cannot be overcome by more substrate.\n(C) is wrong because binding to the product after the reaction would not reduce the enzyme's activity or compete for its active site.\n(D) is wrong because an inhibitor that bound the substrate in solution would not compete with it for the enzyme's active site, which is what defines competitive inhibition."
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
   "explanation": "Correct: (C) 500. Carrying capacity (K) is the largest population that the habitat's resources can sustain over time. On a logistic (S-shaped) curve it is the level at which the curve flattens. In the graph, the population rises steeply between about weeks 5 and 11, then levels off at about 500 from week 14 onward and stays there through week 20, so K ≈ 500 insects.\n\n(A) is wrong because 50 is reached around week 3, during the slow early phase of growth, long before the curve levels off.\n(B) is wrong because 250 is K/2, the point of fastest growth near week 8, where the curve is steepest rather than flat.\n(D) is wrong because the population never exceeds about 500 on the graph, so 1000 is twice the observed carrying capacity."
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
   "explanation": "Correct: (B) 250. In logistic growth, dN/dt = rN(K − N)/K. When N is small, few individuals reproduce; when N is near K, the (K − N)/K term is near zero. The product N(K − N) is largest when N = K/2. With K ≈ 500, the maximum growth rate occurs at N ≈ 250. On the graph this is the inflection point near week 8, where the curve is steepest.\n\n(A) is wrong because at about 50 (near week 3) the population is still small, so few individuals reproduce and the curve is only gently sloped.\n(C) is wrong because at 500 the population is at carrying capacity, where (K − N)/K ≈ 0 and growth has nearly stopped.\n(D) is wrong because the population never reaches 1000, and any size above K would decline rather than grow quickly."
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
   "explanation": "Correct: (C) The enzymes of respiration are more active at the higher temperature. Germinating seeds are actively respiring, and the respiration enzymes speed up as temperature rises (up to an optimum) because molecules move faster and collide more often with enough energy to react. The table shows oxygen consumption rising from 1.2 mL/min at 10 °C to 3.6 mL/min at 25 °C, a threefold increase. Since O₂ is the final electron acceptor of the electron transport chain, faster O₂ use means faster aerobic respiration.\n\n(A) is wrong because the table measures oxygen consumed, not produced; germinating seeds use O₂ in respiration, and they have no photosynthesizing leaves yet to release O₂.\n(B) is wrong because the germinating seeds still used 1.2 mL O₂/min at 10 °C, so respiration slowed but did not stop.\n(D) is wrong because oxygen is actually more soluble in cold water, and solubility would not explain the threefold change in oxygen consumption."
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
   "explanation": "Correct: (A) They show the baseline oxygen use of seeds that are not actively metabolizing. The non-germinating (dormant) seeds are a control. They have very low metabolic activity and use only 0.1 mL O₂/min at both temperatures. This baseline shows that the large oxygen uptake of the germinating seeds (1.2 and 3.6 mL/min) comes from the active respiration of growing seeds, not from the apparatus, gas changes from temperature, or the seed material itself.\n\n(B) is wrong because the germinating seeds triple their oxygen use from 10 to 25 °C, so the data show that temperature does affect respiration.\n(C) is wrong because seeds do not produce oxygen; the dormant seeds consumed a small amount of O₂ (0.1 mL/min) rather than supplying it.\n(D) is wrong because all living plant cells, including dormant seeds, contain mitochondria; dormant seeds simply respire very slowly."
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
   "explanation": "Correct: (C) 15%. Mitosis (M phase) includes prophase, metaphase, anaphase and telophase, while interphase is not part of mitosis. From the table: 40 + 10 + 5 + 5 = 60 cells in mitosis. As a percentage: 60/400 × 100% = 15%. As a check, 340 interphase cells are 85%, and 85% + 15% = 100%.\n\n(A) is wrong because 85% is the percentage in interphase (340/400), the opposite of what was asked.\n(B) is wrong because 60% reports the count of mitotic cells (60) as if it were a percentage, without dividing by the 400 cells counted.\n(D) is wrong because 5% reads the 5 cells counted in anaphase (or telophase) as a percentage; all four mitotic phases together hold 60 of the 400 cells, which is 15%."
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
   "explanation": "Correct: (B) 2.4 h. The fraction of cells caught in a phase is proportional to the time that phase takes, assuming the cells are dividing asynchronously. Prophase: 40/400 = 0.10 of the cells, so time = 0.10 × 24 h = 2.4 h. The same method gives about 20.4 h for interphase and 3.6 h for all of mitosis.\n\n(A) is wrong because 0.60 h is the time for metaphase (10/400 × 24 h), not prophase.\n(C) is wrong because 3.6 h is the time for all of mitosis (60/400 × 24 h), not for prophase alone.\n(D) is wrong because 12 h is half the cell cycle and has no basis in the data; only 10% of the cells were in prophase."
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
   "explanation": "Correct: (B) 0.4 M. Plasmolysis happens when the outside solution has a lower water potential than the cell, so water leaves and the membrane pulls away from the wall. When the outside solution has the same solute concentration as the cell sap (isotonic), there is no net water movement, and about 50% of cells show plasmolysis (incipient plasmolysis) because cells vary slightly. The table shows 45% plasmolysis at 0.4 M, the closest to 50%; interpolating between 0.4 M (45%) and 0.6 M (95%) gives about 0.42 M.\n\n(A) is wrong because at 0.6 M, 95% of the cells were plasmolyzed, so this solution is clearly hypertonic to almost all of the cells.\n(C) is wrong because at 0.2 M only 10% of the cells were plasmolyzed, so most cells still had a higher solute concentration than the solution.\n(D) is wrong because 0.0 M is pure water, which is hypotonic; the cells gain water and none were plasmolyzed."
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
   "explanation": "Correct: (D) Water left the cells by osmosis because the solution had a lower water potential. The 0.6 M sucrose solution has a more negative solute potential, so its water potential is lower than that of the onion cells. Water moves by osmosis from higher to lower water potential, so it leaves the cells. The cytoplasm and vacuole shrink and the membrane pulls away from the rigid cell wall (plasmolysis); the table shows 95% of the cells were plasmolyzed. Sucrose cannot easily cross the membrane, so it stays outside.\n\n(A) is wrong because sucrose does not readily cross the membrane, and swelling would press the membrane against the wall rather than pull it away.\n(B) is wrong because the cellulose cell wall is rigid and does not dissolve in sucrose; plasmolysis is visible precisely because the wall stays in place.\n(C) is wrong because water moves by osmosis, which is passive, and in this case it moves out of the cells, not in."
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
   "explanation": "Correct: (B) 32. Each PCR cycle (denaturation, primer annealing, extension) copies every DNA molecule present, so the number doubles each cycle. Starting from 1 molecule, the number after n cycles is 2ⁿ: 1 → 2 → 4 → 8 → 16 → 32. After 5 cycles there are 2⁵ = 32 copies. This exponential doubling is why about 30 cycles can turn a single molecule into about a billion copies.\n\n(A) is wrong because 64 is 2⁶, the number after 6 cycles, one doubling too many.\n(C) is wrong because 25 is 5², which squares the number of cycles instead of raising 2 to the number of cycles.\n(D) is wrong because 10 is 2 × 5, which treats the growth as adding two copies per cycle instead of doubling."
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
   "explanation": "Correct: (C) The population is very large, so genetic drift has a negligible effect. The Hardy–Weinberg model has five conditions under which allele and genotype frequencies stay constant: a very large population (so random genetic drift is negligible), random mating, no mutation, no gene flow (migration), and no natural selection. Only choice C states one of these conditions. Violating any of them can change allele frequencies and cause evolution.\n\n(A) is wrong because preferential mating with similar phenotypes is nonrandom (assortative) mating, which violates the random mating condition.\n(B) is wrong because the model requires no mutation, since mutation changes allele frequencies by adding new alleles.\n(D) is wrong because migration in and out of the population is gene flow, which brings in and removes alleles and changes their frequencies."
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
   "explanation": "Correct: (B) Chloroplasts. Chloroplasts are the site of photosynthesis, with thylakoids that capture light energy and a stroma where the Calvin cycle fixes CO₂. They are found in plant cells (and algae) but not in animal cells. Plant cells also have a cellulose cell wall and a large central vacuole, which animal cells lack. Both cell types have the other three structures listed.\n\n(A) is wrong because plant cells have mitochondria too and carry out cellular respiration like animal cells.\n(C) is wrong because ribosomes are found in all cells, including animal cells, because every cell must make proteins.\n(D) is wrong because both plant and animal cells are eukaryotic, so both enclose their DNA in a membrane-bound nucleus."
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
   "explanation": "Correct: (C) 17,190 years. After each half-life, half of the remaining carbon-14 decays: 1 → 1/2 → 1/4 → 1/8. One-eighth equals (1/2)³, so 3 half-lives have passed. The age is 3 × 5,730 years = 17,190 years. Radiometric dating works because a living organism keeps its C-14 to C-12 ratio equal to the atmosphere's by taking in carbon; at death intake stops, and the C-14 decays at a fixed rate while the C-12 stays, so the remaining fraction acts as a clock.\n\n(A) is wrong because 5,730 years is one half-life, which would leave 1/2 of the C-14, not 1/8.\n(B) is wrong because 11,460 years is two half-lives, which would leave 1/4 of the C-14.\n(D) is wrong because 45,840 years is 8 × 5,730, which multiplies by the denominator 8 instead of the number of halvings (3)."
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
   "explanation": "Correct: (B) Mutant 1. A silent mutation changes the nucleotide sequence without changing the amino acid, because the genetic code is redundant (several codons code for the same amino acid, often differing only in the third base). In mutant 1, GAA becomes GAG, and the table shows both code for glutamic acid, so the protein is unchanged.\n\n(A) is wrong because mutant 2 changes GAA to GAC, which codes for aspartic acid instead of glutamic acid; this is a missense mutation.\n(C) is wrong because mutant 3 changes GAA to UAA, a stop codon; this is a nonsense mutation that ends translation early.\n(D) is wrong because mutant 1 is silent because GAG still codes for Glu, as the table shows."
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
   "explanation": "Correct: (D) Mutant 3, because a premature stop codon shortens the protein. Mutant 3 is a nonsense mutation: GAA → UAA turns an amino acid codon into a stop codon. Translation ends at this point, so all the amino acids after it are lost and the protein is truncated, usually losing its function. Mutant 2 is a missense mutation that swaps Glu for Asp, two similar acidic amino acids, so the protein may keep much of its function. Mutant 1 is silent.\n\n(A) is wrong because mutant 1 is silent: GAG still codes for glutamic acid, so the protein is unchanged even though the DNA is different.\n(B) is wrong because mutant 2 swaps glutamic acid for aspartic acid, a similar acidic amino acid, so its effect is usually milder than truncating the protein.\n(C) is wrong because the three mutations have very different effects: none (silent), possibly mild (missense) and usually severe (nonsense)."
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
   "explanation": "Correct: (B) 160. Since p + q = 1, p = 1 − 0.20 = 0.80. The heterozygote frequency is 2pq = 2(0.80)(0.20) = 0.32. The expected number is 0.32 × 500 = 160 individuals. As a check, p² × 500 = 0.64 × 500 = 320 and q² × 500 = 0.04 × 500 = 20, and 320 + 160 + 20 = 500.\n\n(A) is wrong because 320 is the number of homozygous dominant individuals, p² × 500 = 0.64 × 500.\n(C) is wrong because 80 is pq × 500 = 0.16 × 500, which leaves out the factor of 2 in the heterozygote term 2pq.\n(D) is wrong because 16 slips a decimal place, as if 2pq were 0.032, or uses 2pq × 50 instead of 2pq × 500."
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
   "explanation": "Correct: (A) Facilitated diffusion. Glucose is large and polar, so it cannot easily cross the hydrophobic interior of the lipid bilayer. In red blood cells, GLUT1 carrier proteins bind glucose and change shape to move it across the membrane. Because glucose moves down its concentration gradient (high to low) and no ATP is used, this is passive transport through a protein: facilitated diffusion.\n\n(B) is wrong because active transport moves a substance against its gradient using ATP or another energy source; here glucose moves down its gradient without ATP.\n(C) is wrong because glucose is too polar and large to pass through the lipid bilayer in significant amounts, and the stem says a carrier protein is used.\n(D) is wrong because receptor-mediated endocytosis brings in material inside vesicles and requires energy; it does not use a carrier protein to move single molecules."
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
   "explanation": "Correct: (D) 0.27. In community 2, N = 85 + 5 + 5 + 5 = 100. The proportions are 0.85, 0.05, 0.05 and 0.05. Squaring: 0.85² = 0.7225 and 0.05² = 0.0025 for each of the other three. Σ(n/N)² = 0.7225 + 3(0.0025) = 0.7300. D = 1 − 0.730 = 0.27. The low value reflects that species A dominates the community.\n\n(A) is wrong because 0.85 is the proportion of species A alone, not the diversity index.\n(B) is wrong because 0.73 is Σ(n/N)² before it is subtracted from 1, so it forgets the final 1 − Σ step.\n(C) is wrong because 0.50 does not come from the data; it may be a guess at a middle value, but the sum of squares gives 0.73 and D = 0.27."
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
   "explanation": "Correct: (C) Community 1 has greater diversity because the species are equally abundant. Diversity depends on richness (the number of species) and evenness (how equally individuals are spread among them). Both communities have 4 species and 100 individuals. For community 1, each proportion is 0.25, so D = 1 − 4(0.25)² = 1 − 0.25 = 0.75. For community 2, D = 0.27, as calculated. Community 1 has higher diversity because its individuals are evenly spread, while community 2 is dominated by species A.\n\n(A) is wrong because dominance by one species lowers evenness, which lowers diversity; community 2's index (0.27) is the lower one.\n(B) is wrong because they have the same richness, but their indices (0.75 and 0.27) differ because evenness differs.\n(D) is wrong because both communities have 100 individuals, and Simpson's index depends on proportions, not total population size."
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
   "explanation": "Correct: (C) 4 times as large. Using SA/V = 3/r: cell A has SA/V = 3/(1 μm) = 3 μm⁻¹ and cell B has SA/V = 3/(4 μm) = 0.75 μm⁻¹. The ratio is 3 ÷ 0.75 = 4, so cell A's SA/V is 4 times as large. Because SA/V is inversely proportional to r, a cell with 1/4 the radius has 4 times the SA/V. This is why cells stay small: a high SA/V lets material exchange keep up with metabolic needs.\n\n(A) is wrong because 1/4 inverts the comparison; SA/V is inversely proportional to r, so the smaller cell A has the larger ratio.\n(B) is wrong because SA/V depends on radius, and the radii differ by a factor of 4, so the ratios cannot be the same.\n(D) is wrong because 16 is the ratio of the surface areas (r² scales by 4² = 16) of cell B to cell A, not the ratio of their SA/V values."
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
   "explanation": "Correct: (B) Hydrophobic interactions that exclude nonpolar groups from water. Nonpolar R groups cannot form hydrogen bonds with water. Water molecules around them would have to form ordered cages, which is unfavorable, so the water molecules hydrogen bond with each other and push the nonpolar groups together in the protein's interior. This hydrophobic interaction (hydrophobic effect) is one of the main forces that drives a protein to fold into its tertiary structure, along with hydrogen bonds, ionic bonds and disulfide bridges.\n\n(A) is wrong because peptide bonds join the amino and carboxyl groups of the backbone to form the primary structure; they do not form between R groups.\n(C) is wrong because nonpolar R groups have no charges, so they cannot form ionic bonds, and they are pushed away from water rather than bonded to it.\n(D) is wrong because nonpolar R groups do not form covalent bonds with each other; the only common covalent R-group bond is the disulfide bridge between cysteines."
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
   "explanation": "Correct: (D) Prezygotic isolation (behavioral isolation). Reproductive barriers are classified by whether they act before (prezygotic) or after (postzygotic) a zygote forms. The birds live in the same area, so they are not geographically separated, and the females do not respond to the other species' songs, so mating never occurs. Since the barrier is a difference in courtship behavior that prevents mating, it is behavioral isolation, a prezygotic barrier.\n\n(A) is wrong because hybrid sterility acts after a hybrid is produced, but these birds never mate, so no hybrid zygote is formed.\n(B) is wrong because the stem says the two species live in the same area, so there is no physical barrier separating them.\n(C) is wrong because hybrid breakdown affects the offspring of fertile hybrids in later generations, but no hybrids are formed here."
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
   "explanation": "Correct: (A) An amino group and a carboxyl group. Every amino acid has a central (α) carbon bonded to four groups: an amino group (–NH₂, usually –NH₃⁺ in cells), a carboxyl group (–COOH, usually –COO⁻), a hydrogen atom and a variable R group (side chain). The amino group of one amino acid and the carboxyl group of another form the peptide bond. The R group is what differs among the 20 amino acids.\n\n(B) is wrong because phosphate groups are characteristic of nucleotides and phospholipids, and a hydroxyl group appears only in a few R groups such as serine's.\n(C) is wrong because a sulfhydryl group is found only in the R group of cysteine, so it is not present in every amino acid.\n(D) is wrong because a methyl group is found only in some R groups, such as alanine's; the amino group is the one shared by all amino acids."
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
   "explanation": "Correct: (B) 1/2. This is a testcross. The Aa parent makes A and a gametes in a 1:1 ratio, and the aa parent makes only a gametes. The Punnett square gives Aa (A from the first parent + a) and aa (a + a) in equal numbers: 2 of 4 boxes are aa. The probability of aa is (1/2)(1) = 1/2.\n\n(A) is wrong because 3/4 is the proportion of offspring showing the dominant phenotype in an Aa × Aa cross, not this testcross.\n(C) is wrong because 1/4 is the probability of aa in an Aa × Aa cross, where each parent contributes a with probability 1/2.\n(D) is wrong because 0 would be correct only if neither parent carried a; here both parents can pass on an a allele."
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
   "explanation": "Correct: (C) Chimpanzee. Cytochrome c is a protein of the electron transport chain found in nearly all eukaryotes. Mutations in its gene accumulate over time, so the more time since two species shared a common ancestor, the more amino acid differences they have. The table shows the chimpanzee has 0 differences from humans, the fewest, so it shares the most recent common ancestor with humans and is the most closely related.\n\n(A) is wrong because the rhesus monkey has 1 difference, slightly more than the chimpanzee's 0, so it is the second closest relative.\n(B) is wrong because the horse has 12 differences, many more than the primates, so it shares a more distant common ancestor with humans.\n(D) is wrong because yeast has 44 differences, the most in the table, so it is the most distantly related organism."
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
   "explanation": "Correct: (A) Related organisms have similar proteins because of common ancestry. The number of differences grows with evolutionary distance: chimpanzee 0, rhesus monkey 1, horse 12, yeast 44. This fits descent with modification: all these organisms inherited cytochrome c from a common ancestor, and differences accumulated over time in each lineage. Closely related species have had less time to diverge, so their proteins are more similar. This molecular homology is strong evidence for common ancestry.\n\n(B) is wrong because yeast is a living species, not an ancestor; it shares a distant common ancestor with the others, and its 44 differences show divergence, not ancestry.\n(C) is wrong because the differences arose in many lineages, and the yeast, horse and monkey proteins have also changed since they split from the human line.\n(D) is wrong because the table shows up to 44 amino acid differences, so cytochrome c has clearly changed in different lineages."
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
   "explanation": "Correct: (B) 2.4 h. In an asynchronously dividing population, the fraction of cells seen in a phase equals the fraction of the cycle time spent in that phase. Here 20/200 = 0.10 of the cells are in mitosis, so the time in mitosis is 0.10 × 24 h = 2.4 h. The remaining 21.6 h is interphase.\n\n(A) is wrong because 10 h treats the 10% as a number of hours instead of multiplying it by the 24-hour cycle.\n(C) is wrong because 1.2 h is half the correct value, as if the fraction were 20/400 or the cycle were 12 hours.\n(D) is wrong because 0.24 h is off by a factor of 10, from using 0.01 instead of 0.10 for the fraction in mitosis."
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
   "explanation": "Correct: (D) Bacteria with resistance alleles survived and reproduced while others were killed. The antibiotic is a selective agent. The graph shows resistant bacteria at about 1% at day 0, so resistance alleles were already present at low frequency. Susceptible bacteria were killed, while resistant ones survived and reproduced, passing the resistance alleles to their offspring. Over many generations the resistant share rose steeply between days 10 and 20 and leveled off near 100% by day 25. This is natural selection acting on existing variation.\n\n(A) is wrong because the antibiotic does not create resistance alleles for a purpose; mutations are random, and the graph shows resistant bacteria present at about 1% at the start.\n(B) is wrong because bacteria cannot learn; resistance is an inherited genetic trait, and the change is in the proportion of resistant bacteria in the population.\n(C) is wrong because raising the mutation rate of all genes would produce mostly harmful random changes; the increase comes from selection of resistance alleles already present."
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
   "explanation": "Correct: (C) The alleles arose by random mutation before exposure, and the antibiotic selected for them. Mutations arise randomly, regardless of whether they would be useful. The graph begins at about 1% resistant bacteria on day 0, before the antibiotic could have had any effect, so resistance alleles were present before exposure. The antibiotic did not create them; it killed susceptible cells and selected for resistant ones, which then increased to nearly 100%. The Lederberg replica-plating experiment demonstrated this same principle.\n\n(A) is wrong because the antibiotic cannot direct specific mutations; mutation is random with respect to need, and selection acts afterward.\n(B) is wrong because the graph shows about 1% resistant bacteria on day 0, so resistance alleles existed before the antibiotic was added.\n(D) is wrong because only about 1% of the bacteria were resistant at the start, not all of them; otherwise the percentage would have been 100% from day 0."
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
   "explanation": "Correct: (B) The founder effect, a type of genetic drift. The founder effect is a form of genetic drift: when a few individuals start a new population, their alleles are only a random sample of the source population's gene pool. By chance, some alleles are overrepresented, some are rare, and some are missing entirely. The stem attributes the difference to \"the small number of founders,\" which is a chance sampling effect rather than selection or migration.\n\n(A) is wrong because directional selection changes allele frequencies because some phenotypes survive better, but the stem attributes the difference to small founder numbers, not fitness.\n(C) is wrong because gene flow tends to make populations more similar by exchanging alleles; here a one-time colonization by a few individuals made them different.\n(D) is wrong because stabilizing selection is natural selection that favors intermediate phenotypes, and the stem describes a chance effect of founder numbers instead."
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
   "explanation": "Correct: (B) Homologous chromosomes pair up and then separate into different cells. In prophase I of meiosis, homologous chromosomes pair up (synapsis) to form tetrads, and crossing over occurs between them. In anaphase I, the homologs separate to opposite poles, so each daughter cell gets one chromosome of each pair, cutting the chromosome number in half (2n → n). In mitosis, homologs never pair; each chromosome lines up on its own and its sister chromatids separate.\n\n(A) is wrong because sister chromatids separate in mitosis and in meiosis II, but not in meiosis I, where sister chromatids stay together.\n(C) is wrong because the nuclear envelope breaks down in prophase of both mitosis and meiosis I, so this is not unique to meiosis I.\n(D) is wrong because chromosomes line up at the middle of the cell in metaphase of both mitosis and meiosis, so this is not unique to meiosis I."
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
   "explanation": "Correct: (A) Codominance, in which both alleles are fully expressed. In codominance, both alleles in a heterozygote are fully and separately expressed. The Iᴬ allele codes for an enzyme that adds the A sugar to red blood cell surface glycoproteins, and the Iᴮ allele codes for one that adds the B sugar. An IᴬIᴮ person makes both enzymes, so their red blood cells carry both A and B antigens, and the result is type AB blood, not a blend.\n\n(B) is wrong because incomplete dominance gives an intermediate blend, such as pink flowers; AB red blood cells show both full A and full B antigens.\n(C) is wrong because epistasis is an interaction between two different genes, but blood type AB comes from two alleles of one gene, I.\n(D) is wrong because in complete dominance the heterozygote looks like one homozygote, but an IᴬIᴮ person shows both the A and the B antigens."
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
   "explanation": "Correct: (D) It provides the energy that drives ATP synthase to make ATP. As electrons pass along the electron transport chain from NADH and FADH₂ to O₂, complexes I, III and IV use the released energy to pump H⁺ from the matrix into the intermembrane space. This creates a proton-motive force (a concentration and charge gradient). Protons flow back into the matrix through ATP synthase, and the flow turns its rotor, which drives the phosphorylation of ADP + Pᵢ → ATP. This coupling is chemiosmosis, which makes most of the cell's ATP.\n\n(A) is wrong because glucose is broken down in the cytoplasm during glycolysis and never enters the mitochondrion; pyruvate is what is transported in.\n(B) is wrong because electrons are carried by the protein complexes and carriers of the chain (ubiquinone, cytochrome c), not by the proton gradient.\n(C) is wrong because pyruvate is broken down by pyruvate oxidation and the citric acid cycle using enzymes, not by the proton gradient, and water is made at complex IV."
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
   "explanation": "Correct: (C) Keystone species. A keystone species has an effect on its community that is far larger than its abundance would suggest, and removing it causes major changes. Sea otters eat sea urchins. Without otters, urchin populations explode and overgraze the kelp, turning kelp forests into \"urchin barrens\" and removing habitat for many other species. Because the loss of one predator restructures the whole community, the sea otter is a keystone species.\n\n(A) is wrong because an invasive species is a non-native organism that spreads and causes harm; sea otters are native to kelp forests.\n(B) is wrong because primary producers make food by photosynthesis; the kelp is the producer, and the sea otter is a predator.\n(D) is wrong because decomposers break down dead organic matter; sea otters are predators that eat urchins."
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
