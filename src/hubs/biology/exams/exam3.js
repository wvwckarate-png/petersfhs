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
   "explanation": "Correct: (A) Its high specific heat, caused by hydrogen bonding between its molecules. Specific heat is the energy needed to raise 1 g of a substance by 1 °C, and water's value (about 4.18 J/g·°C) is unusually high. Before water molecules can move faster, much of the added heat goes into breaking hydrogen bonds between them, and as water cools those bonds re-form and release heat. A lake therefore warms slowly in summer and gives back stored heat slowly in winter, which keeps nearby land milder than inland areas.\n\n(B) is wrong because ice floating insulates the water beneath it so aquatic life survives winter, but it does not explain how water buffers the air temperature of nearby land.\n(C) is wrong because water's ability to dissolve ionic compounds makes it a versatile solvent for cell chemistry, which has nothing to do with storing and releasing heat.\n(D) is wrong because cohesion and surface tension help water move up xylem and let insects walk on ponds, but they do not let water absorb large amounts of heat."
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
   "explanation": "Correct: (D) The reaction is exergonic and spontaneous, although it may be slow without a catalyst. ΔG = G<sub>products</sub> − G<sub>reactants</sub>, so a negative ΔG means the products hold less free energy than the reactants and energy is released: the reaction is exergonic and spontaneous (thermodynamically favorable). Spontaneous says nothing about speed. The rate is set by the activation energy, a separate barrier, so a spontaneous reaction such as glucose oxidation in air can be extremely slow until an enzyme lowers that barrier.\n\n(A) is wrong because an endergonic reaction has a positive ΔG and needs an energy input such as ATP coupling; a negative ΔG is the opposite case.\n(B) is wrong because at equilibrium ΔG = 0 and there is no net change, whereas a negative ΔG means the reaction still proceeds forward.\n(C) is wrong because ΔG tells only whether a reaction is favorable, not how fast it goes; the rate depends on the activation energy, which enzymes lower."
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
   "explanation": "Correct: (C) 3. In a linear molecule, every cut adds one fragment: n cuts produce n + 1 pieces. The first cut splits the 6,000 bp molecule into 2 pieces, and the second cut splits one of those pieces, giving 2 + 1 = 3 fragments. (A circular plasmid is different: n cuts give n fragments, because the first cut only opens the ring.) The fragment sizes depend on where the two sites are, but their lengths still add up to 6,000 bp.\n\n(A) is wrong because 6,000 is the length of the molecule in base pairs, not the number of fragments; two cuts cannot make thousands of pieces.\n(B) is wrong because 4 fragments would require 3 cuts in a linear molecule; this doubles the number of cuts instead of adding one.\n(D) is wrong because 2 fragments is the result for a circular molecule cut twice, or for a linear molecule cut only once, not a linear molecule cut twice."
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
   "explanation": "Correct: (A) Quorum sensing. Quorum sensing lets bacteria measure their own population density. Each cell releases a small signaling molecule (an autoinducer), so its concentration rises as the number of cells rises. When the concentration crosses a threshold, it binds receptors and switches on genes for group behaviors, such as biofilm formation, bioluminescence, or virulence, that are only useful when many cells act together. The stem's clue is the threshold concentration that reports how many bacteria are present.\n\n(B) is wrong because apoptosis is programmed cell death in eukaryotic cells, a self-destruction pathway, not a way for bacteria to count their neighbors.\n(C) is wrong because endocrine signaling uses hormones carried by the blood to distant target cells in multicellular animals, not chemical counting among bacteria in a biofilm.\n(D) is wrong because meiosis is the cell division that produces haploid gametes in eukaryotes; bacteria do not undergo meiosis and it is not a signaling process."
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
   "explanation": "Correct: (D) Photosynthesis. Photosynthesis is the main process that moves carbon from the atmosphere into living matter. Plants, algae, and cyanobacteria take in CO₂ and, in the Calvin cycle, rubisco fixes it into organic molecules that become sugars: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ using light energy. The other three processes run the carbon cycle in the opposite direction, breaking down organic carbon and returning CO₂ to the air.\n\n(A) is wrong because cellular respiration oxidizes sugars and releases CO₂ into the atmosphere, the reverse of removing it and building organic molecules.\n(B) is wrong because burning fossil fuels releases carbon that was stored for millions of years, adding CO₂ to the atmosphere instead of removing it.\n(C) is wrong because decomposers break down dead organic matter and respire the carbon as CO₂, which returns carbon to the atmosphere rather than fixing it."
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
   "explanation": "Correct: (A) It replaces the electrons lost from the reaction center of photosystem II. When light excites P680, the reaction center of photosystem II, it passes an electron to the electron transport chain and becomes the strongest biological oxidizer known, P680⁺. It must get an electron back before it can absorb light again, and the water-splitting complex supplies it: 2H₂O → 4e⁻ + 4H⁺ + O₂. The electrons refill P680, the protons add to the H⁺ gradient in the thylakoid lumen, and O₂ is released as a by-product.\n\n(B) is wrong because the carbon atoms in sugars come from CO₂ fixed in the Calvin cycle; water provides electrons and hydrogen, not carbon.\n(C) is wrong because splitting water releases O₂, not CO₂; the CO₂ fixed by rubisco enters the leaf from the air through the stomata.\n(D) is wrong because ATP in the light reactions is made by chemiosmosis through ATP synthase, not by substrate-level phosphorylation, and water splitting does not make ATP directly."
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
   "explanation": "Correct: (C) −0.25 MPa. Water potential is the sum of its components: Ψ = Ψ<sub>s</sub> + Ψ<sub>p</sub>. The solute potential is negative because dissolved solutes lower the free energy of water, and the pressure potential is positive because the cell is turgid against its wall. Ψ = (−0.60 MPa) + (+0.35 MPa) = −0.25 MPa. The result is negative because solute potential outweighs the pressure, so this cell would still take up pure water (Ψ = 0).\n\n(A) is wrong because +0.95 MPa adds the magnitudes 0.60 + 0.35 and drops the negative sign of the solute potential.\n(B) is wrong because +0.25 MPa has the right magnitude but the wrong sign; it comes from 0.60 − 0.35, reversing which component is negative.\n(D) is wrong because −0.95 MPa treats the pressure potential as negative too, (−0.60) + (−0.35), although turgor pressure is positive."
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
   "explanation": "Correct: (A) Man B, because he has a band that matches the child's non-maternal band. A child inherits one of each pair of bands from each parent. On the gel, the child has bands at 0.2 and 0.7. The mother also has a band at 0.2, so that band came from her, and the other band, at 0.7, must have come from the biological father. Man A's bands are at 0.3 and 0.5, so he has nothing at 0.7. Man B's bands are at 0.4 and 0.7, so he carries the child's paternal band.\n\n(B) is wrong because sharing a band with the mother says nothing about paternity; the father must carry the child's non-maternal band at 0.7, which Man A lacks.\n(C) is wrong because Man A's pattern (0.3 and 0.5) is not the same as the mother's (0.2 and 0.5), and resembling the mother would not show paternity anyway.\n(D) is wrong because a father contributes only half of the child's bands, so he need not match all of them; Man B matches the paternal band at 0.7."
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
   "explanation": "Correct: (D) Fragments of the same size move through the gel at the same rate. In gel electrophoresis, DNA is negatively charged because of its phosphate backbone, so every fragment moves toward the positive electrode. The gel is a mesh that slows longer fragments more than shorter ones, so the speed of migration depends on fragment length. In the same run time, fragments of equal length travel the same distance and form a band at the same position. Fragments of the same length can still have different sequences.\n\n(A) is wrong because fragments of equal length can have completely different sequences; the gel separates by size, not by base sequence.\n(B) is wrong because all DNA fragments do move toward the positive electrode, but that is true of every fragment and does not explain why they separate into bands.\n(C) is wrong because the current does not stop fragments at set positions; the run is stopped by the experimenter, and fragments are separated by how fast they move."
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
   "explanation": "Correct: (D) Rough endoplasmic reticulum. Proteins made for export are synthesized by ribosomes bound to the rough endoplasmic reticulum. As each polypeptide is made, it is threaded into the ER lumen, folded, and sent in vesicles to the Golgi and then to the plasma membrane for exocytosis. Pancreatic acinar cells secrete large amounts of digestive enzymes such as trypsinogen and amylase, so they are packed with rough ER and also have a large Golgi apparatus.\n\n(A) is wrong because smooth ER lacks ribosomes and makes lipids and steroids and detoxifies drugs, so it is abundant in cells such as liver and adrenal cells, not protein-secreting cells.\n(B) is wrong because peroxisomes break down fatty acids and hydrogen peroxide; they do not synthesize or package proteins for secretion.\n(C) is wrong because chloroplasts carry out photosynthesis and are found in plants and algae, not in animal pancreatic cells."
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
   "explanation": "Correct: (A) The spread of a disease among crowded animals. A density-dependent factor has an effect that grows stronger as the population becomes more crowded. Disease spreads faster when animals live close together and contact each other often, so the death rate from disease rises with density and slows population growth near carrying capacity. Competition, predation, and parasitism act the same way. Natural disasters kill a similar fraction of a population whether it is crowded or sparse, so they are density-independent.\n\n(B) is wrong because a volcanic eruption kills organisms regardless of how crowded the population is, so it is a density-independent factor.\n(C) is wrong because a drought is a weather event whose effect does not depend on population density, so it is density-independent.\n(D) is wrong because a flood destroys nesting areas whether the population is large or small, so it is a density-independent factor."
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
   "explanation": "Correct: (D) It suggests that early life used RNA both to store information and to catalyze reactions. Modern cells store information in DNA and use proteins as catalysts, which creates a chicken-and-egg problem: each is needed to make the other. Ribozymes show that a single kind of molecule, RNA, can both carry information in its base sequence and catalyze reactions, including peptide bond formation in the ribosome. This supports the RNA world hypothesis, in which early life relied on self-replicating RNA before DNA and proteins took over these roles.\n\n(A) is wrong because ribozymes show that RNA, not protein, can catalyze reactions; proteins do not store heritable genetic information.\n(B) is wrong because ribozymes support the idea that RNA came first, and no single finding proves the order; the finding does not suggest DNA preceded RNA.\n(C) is wrong because ribozymes can catalyze reactions in a test tube, outside cells, which is why they are a plausible precursor to cellular life."
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
   "explanation": "Correct: (B) 200. Mark–recapture assumes that the fraction of marked individuals in the second sample equals the fraction marked in the whole population: marked recaptured / second sample = first marked / N. Here 10/40 = 50/N, so N = (50 × 40)/10 = 2,000/10 = 200 fish. In other words, 1/4 of the recaptured fish were marked, so the 50 marked fish make up about 1/4 of the population, and 4 × 50 = 200.\n\n(A) is wrong because 100 is simply 50 + 40 + 10, adding all of the counts instead of setting up the proportion.\n(C) is wrong because 250 is 50 × (50/10), using the number first marked in place of the 40 fish in the second sample.\n(D) is wrong because 500 is 50 × 10, multiplying the first catch by the number of recaptures instead of by the ratio 40/10."
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
   "explanation": "Correct: (A) Protein phosphatases, which remove phosphate groups from proteins. Protein kinases transfer phosphate groups from ATP to target proteins, which changes their shape and activity and passes the signal along a cascade. To end the response, protein phosphatases remove those phosphate groups, returning the proteins to their resting state. The balance between kinases and phosphatases lets a cell switch a pathway off quickly when the signal molecule leaves its receptor, so the cell responds only while the signal is present.\n\n(B) is wrong because DNA polymerases copy DNA during replication; they do not remove phosphates from signaling proteins.\n(C) is wrong because proteases break peptide bonds to digest proteins, the opposite of what this choice claims, and they do not reverse phosphorylation.\n(D) is wrong because DNA ligase seals nicks in the sugar-phosphate backbone of DNA during replication and repair, not phosphorylated proteins."
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
   "explanation": "Correct: (A) Different combinations of exons are joined to form different mature mRNAs. A pre-mRNA contains exons (coding pieces) separated by introns. During splicing, the spliceosome removes the introns and joins exons together. In alternative splicing, some exons are included in one cell type and skipped in another, so different combinations of exons produce different mature mRNAs and therefore different polypeptides from one gene. This is a main reason humans make far more proteins than their roughly 20,000 genes.\n\n(B) is wrong because alternative splicing acts on the same pre-mRNA after transcription; it does not involve switching the DNA template strand.\n(C) is wrong because ribosomes always read mRNA 5′ to 3′, so a change of direction is not how different proteins arise.\n(D) is wrong because introns are removed from the pre-mRNA before translation, so they are not translated in alternative splicing."
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
   "explanation": "Correct: (D) Cyclins that activate cyclin-dependent kinases. The cell cycle is driven by cyclin-dependent kinases (CDKs), which are present all the time but are active only when bound to a cyclin. Cyclin levels rise and fall at specific points in the cycle. When enough cyclin accumulates, the cyclin–CDK complex phosphorylates target proteins that push the cell past a checkpoint, for example MPF (cyclin B–CDK1) triggers entry into mitosis. Cyclin is then degraded, CDK is switched off, and the cycle resets.\n\n(A) is wrong because ribosomes make proteins and do not attach to the spindle or regulate the timing of the cell cycle.\n(B) is wrong because DNA ligase joins Okazaki fragments during replication, a task within S phase, not a regulator of progression between phases.\n(C) is wrong because centrioles help organize microtubules in animal cells and do not produce ATP, which is made mostly by mitochondria."
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
   "explanation": "Correct: (C) Seeds evolved after vascular tissue in the lineage leading to flowering plants. Map the table onto the tree. Mosses branch first and lack all three traits. Ferns branch next and have vascular tissue but no seeds, so vascular tissue appeared on the branch after mosses split off. Seeds appear only in conifers and flowering plants, so they arose on the branch after ferns split off. Flowers appear only in flowering plants. The order along the lineage to flowering plants is vascular tissue, then seeds, then flowers.\n\n(A) is wrong because ferns have vascular tissue but no seeds, so vascular tissue had already appeared before seeds evolved in this lineage.\n(B) is wrong because the table shows that conifers lack flowers (−), so flowers did not evolve in conifers at all.\n(D) is wrong because mosses branch off first and lack vascular tissue ancestrally; nothing in the cladogram shows them descending from flowering plants."
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
   "explanation": "Correct: (D) Flowering plants. On a cladogram, relatedness is judged by the most recent common ancestor, not by the order of names. Conifers and flowering plants join at the last split, so they share a common ancestor that is not shared with ferns or mosses. That makes them sister groups. Ferns join the conifer–flowering plant group at an earlier node, and mosses join at the earliest node, so both are more distantly related to conifers.\n\n(A) is wrong because ferns share a common ancestor with conifers only at an earlier node, which flowering plants also share, so ferns are less closely related.\n(B) is wrong because mosses branch off first, so their common ancestor with conifers is the oldest one on the tree, making them the most distant relatives.\n(C) is wrong because the groups join at different nodes, so they are not equally related; only groups joined at the same node would be equally related."
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
   "explanation": "Correct: (C) 1/2. Let X<sup>H</sup> be the normal allele and X<sup>h</sup> the hemophilia allele. The carrier mother is X<sup>H</sup>X<sup>h</sup> and the father is X<sup>H</sup>Y. A son receives the Y from his father and one X from his mother, so his genotype depends only on which X she passes. Each X is passed with probability 1/2, so P(son is X<sup>h</sup>Y and affected) = 1/2. The question asks about a son, so the sex is already given.\n\n(A) is wrong because 0 assumes a son gets his X from his unaffected father, but sons get their X from their mother and Y from their father.\n(B) is wrong because 1/4 is the probability that a child of unknown sex is an affected son (1/2 × 1/2), not the probability for a son.\n(D) is wrong because 3/4 is the ratio of the dominant phenotype in an autosomal Aa × Aa cross, which does not apply to an X-linked trait."
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
   "explanation": "Correct: (A) They have lost the normal response to signals that regulate the cell cycle. Normal cells show contact inhibition: when they touch neighbors, signals from cell-surface contacts stop the cell cycle at the G₁ checkpoint, so cells form a single layer. Cancer cells keep dividing and pile up, which means they ignore those stop signals. This usually results from mutations in proto-oncogenes that make growth signals stay on, or in tumor suppressor genes such as p53 that normally halt the cycle. Cancer cells still divide by ordinary mitosis.\n\n(B) is wrong because cancer cells still divide by mitosis; their problem is uncontrolled division, not a different mechanism of division.\n(C) is wrong because having more DNA does not cause a cell to divide; division is triggered by the signaling pathways that control the cycle.\n(D) is wrong because cancer cells still respond to many signals, such as growth factors, so it overstates the case to say they ignore any chemical signal."
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
   "explanation": "Correct: (B) Heterozygous. Crossing a dominant-phenotype individual with a homozygous recessive one is a testcross. The recessive parent (aa) can only give a, so the offspring phenotypes show which alleles the dominant parent passes. If it were AA, every offspring would be Aa and dominant. A 1:1 ratio of dominant to recessive offspring means the parent passes A half the time and a half the time, so it must be heterozygous: Aa × aa → 1/2 Aa : 1/2 aa.\n\n(A) is wrong because a homozygous dominant parent (AA) crossed with aa gives only Aa offspring, so no recessive offspring would appear.\n(C) is wrong because a homozygous recessive plant would show the recessive phenotype, but this parent shows the dominant phenotype.\n(D) is wrong because a testcross is designed to determine the genotype, and the 1:1 ratio clearly identifies it as heterozygous."
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
   "explanation": "Correct: (C) Tryptophan binds the repressor, which then binds the operator and blocks transcription. The trp operon encodes the enzymes that make tryptophan, and it is normally on. Its repressor is made in an inactive form that cannot bind the operator. When tryptophan is abundant, it acts as a corepressor: it binds the repressor, changes its shape, and lets it bind the operator. The bound repressor blocks RNA polymerase, so transcription of the trp genes stops. The cell saves energy by not making a product it already has.\n\n(A) is wrong because tryptophan does not bind the promoter or activate RNA polymerase; it turns the operon off, not on, when it is abundant.\n(B) is wrong because this describes the lac operon, where the inducer removes the repressor; in the trp operon tryptophan activates the repressor instead.\n(D) is wrong because tryptophan is an amino acid and is not converted into lactose, a sugar that controls a different operon."
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
   "explanation": "Correct: (C) 8,000 kcal/m²/yr. Gross primary productivity is all the chemical energy that producers capture by photosynthesis. Producers spend part of it on their own cellular respiration, and what remains, stored as new biomass, is net primary productivity: NPP = GPP − R. NPP = 12,000 − 4,000 = 8,000 kcal/m²/yr. This is the energy available to primary consumers and decomposers, the base of the food web.\n\n(A) is wrong because 16,000 kcal/m²/yr adds respiration to GPP, but respiration is energy used up by producers, so it must be subtracted.\n(B) is wrong because 12,000 kcal/m²/yr is the GPP itself and ignores the 4,000 kcal/m²/yr that producers use in respiration.\n(D) is wrong because 3,000 kcal/m²/yr does not follow from any correct step; dividing 12,000 by 4,000 gives 3, but NPP is a difference, not a ratio."
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
   "explanation": "Correct: (B) 3. A triglyceride is built by three dehydration reactions, each joining the −OH of a fatty acid's carboxyl group to one of the three −OH groups of glycerol to form an ester linkage. Hydrolysis reverses each reaction by adding one water molecule per bond: triglyceride + 3H₂O → glycerol + 3 fatty acids. One glycerol molecule can hold at most three fatty acids, so complete hydrolysis releases exactly three. Lipase carries this out in the small intestine.\n\n(A) is wrong because glycerol has only three hydroxyl groups, so a triglyceride cannot contain four fatty acids.\n(C) is wrong because two fatty acids per glycerol describe a diglyceride or the tail region of a phospholipid, not a triglyceride.\n(D) is wrong because one fatty acid per glycerol is a monoglyceride, which is a product of partial digestion, not a triglyceride."
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
   "explanation": "Correct: (D) Biomagnification, in which a substance becomes more concentrated at higher trophic levels. The table shows the pesticide concentration rising at every step up the food chain: algae 0.04 ppm, zooplankton 0.23 ppm, small fish 2.07 ppm, large fish 13.8 ppm, and fish-eating birds 25 ppm. A persistent pesticide is not broken down and is stored in fatty tissue instead of excreted, and each consumer eats many organisms from the level below. The pesticide becomes more concentrated at each higher trophic level, which is biomagnification (as with DDT and eagles).\n\n(A) is wrong because primary succession is the colonization of bare rock by a new community, which has nothing to do with chemical levels across trophic levels.\n(B) is wrong because nitrogen fixation is the conversion of N₂ to ammonia by bacteria, and the data track a pesticide, not nitrogen.\n(C) is wrong because eutrophication is an algal bloom fueled by excess nutrients, and the table shows a toxin increasing up a food chain, not algae growth."
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
   "explanation": "Correct: (B) 625. Divide the concentration in the top consumer by that in the producers. From the table, the fish-eating birds contain 25 ppm and the algae contain 0.04 ppm, so the ratio is 25 ppm ÷ 0.04 ppm = 625. The units cancel, leaving a unitless factor: the birds carry the pesticide at 625 times the concentration in the algae. This large increase across four steps shows how biomagnification affects top predators most.\n\n(A) is wrong because 1000 would need an algae concentration of 0.025 ppm; with the table value of 0.04 ppm the ratio is 625.\n(C) is wrong because 60 is 13.8 ÷ 0.23, the large fish compared with zooplankton, not the birds compared with the algae.\n(D) is wrong because 25 is the birds' concentration in ppm read directly from the table, not divided by the algae value."
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
   "explanation": "Correct: (B) 0.02. Under Hardy–Weinberg, affected people are the homozygous recessives, so q² = 1/10,000 = 0.0001. Then q = √0.0001 = 0.01 and p = 1 − 0.01 = 0.99. Carriers are heterozygotes, with frequency 2pq = 2(0.99)(0.01) = 0.0198 ≈ 0.02, about 1 in 50 people. Carriers are about 200 times more common than affected people, which is why most recessive alleles are hidden in heterozygotes.\n\n(A) is wrong because 0.01 is q, the frequency of the recessive allele, not 2pq, the frequency of carriers.\n(C) is wrong because 0.10 comes from taking q = √0.0001 as 0.1 instead of 0.01, and even that value would be q, not 2pq.\n(D) is wrong because 0.20 is 2pq calculated with q = 0.10, the result of the same square-root error."
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
   "explanation": "Correct: (A) The glycosidic linkages differ in orientation, and human enzymes cannot break those in cellulose. Both polymers are made of glucose, so the difference is the bond. In starch, glucose units are joined by α(1→4) linkages, which produce a helical chain that amylase can fit and hydrolyze. In cellulose, β(1→4) linkages flip every other glucose, producing straight chains that hydrogen-bond into rigid fibers. Human enzymes cannot hydrolyze β-linkages, so cellulose passes through as dietary fiber; cows and termites rely on microbes with cellulase to digest it.\n\n(B) is wrong because both starch and cellulose are polymers of glucose, as the stem states; they differ in linkage, not in monomer.\n(C) is wrong because peptide bonds join amino acids in proteins; starch and cellulose are both held together by glycosidic linkages.\n(D) is wrong because cellulose molecules are very long polymers of thousands of glucose units, so being too small is not the reason it is indigestible."
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
   "explanation": "Correct: (B) They are vestigial structures that suggest whales descended from land mammals. A vestigial structure is a reduced remnant of a feature that was functional in an ancestor. Whale pelvic bones are not attached to the backbone and do nothing for swimming, yet they correspond to the hip bones of four-legged mammals. Their presence is homologous evidence that whales descended from land-dwelling mammals that walked on four legs, which fossils such as Pakicetus and Ambulocetus also support.\n\n(A) is wrong because analogous structures share a function from similar environments but not ancestry, and these pelvic bones have no function in swimming.\n(C) is wrong because a homoplasy is a similar trait that arose independently, but the whale's pelvic bones match the hip bones of land mammals in position and structure, which points to shared mammalian ancestry rather than independent origin.\n(D) is wrong because the stem says the bones have no apparent function in swimming, so they are not adaptations for support in water."
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
   "explanation": "Correct: (C) X-linked recessive. The pedigree shows two affected males, II-1 and III-1, each born to unaffected parents, so the trait is recessive. In each case the allele passes through an unaffected female: I-2 has an affected son, and her unaffected daughter II-2 also has an affected son. A rare trait that appears only in males and skips through carrier mothers fits X-linked recessive inheritance, where sons get their single X from their mother.\n\n(A) is wrong because an autosomal dominant trait would appear in at least one parent of each affected person, but both affected sons have unaffected parents.\n(B) is wrong because autosomal recessive would require the unrelated man II-3 to carry a rare allele, and it does not explain why only males are affected.\n(D) is wrong because Y-linked traits pass from father to all sons, but the affected sons' fathers, I-1 and II-3, are both unaffected."
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
   "explanation": "Correct: (B) 1/2. II-2 is unaffected but has an affected son, so under X-linked recessive inheritance she must be a carrier, X<sup>A</sup>X<sup>a</sup>. Her husband II-3 is unaffected, so he is X<sup>A</sup>Y. A daughter always receives her father's X<sup>A</sup>, and she receives either X<sup>A</sup> or X<sup>a</sup> from her mother with equal chance. III-2 is therefore X<sup>A</sup>X<sup>a</sup> (a carrier) with probability 1/2 and X<sup>A</sup>X<sup>A</sup> with probability 1/2.\n\n(A) is wrong because 3/4 is the dominant-phenotype ratio of an autosomal Aa × Aa cross, which does not apply to a daughter of an X-linked carrier mother.\n(C) is wrong because 1/4 is the chance that any child is a carrier daughter, but III-2 is already known to be a daughter.\n(D) is wrong because 0 would be true only if the mother were not a carrier, but II-2 must be one because her son III-1 is affected."
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
   "explanation": "Correct: (C) 8. During meiosis I, each pair of homologous chromosomes lines up independently, so either member can go to a given pole. With 2n = 6, the haploid number is n = 3 pairs. Each pair gives 2 choices, so the number of chromosome combinations in gametes is 2ⁿ = 2³ = 2 × 2 × 2 = 8. In humans, with n = 23, the same formula gives 2²³ ≈ 8.4 million combinations even before crossing over.\n\n(A) is wrong because 3 is the haploid number n, the number of pairs, not the number of ways those pairs can assort.\n(B) is wrong because 6 is the diploid number 2n, which counts chromosomes in a body cell rather than gamete combinations.\n(D) is wrong because 64 is 2⁶, which uses the diploid number 2n instead of the haploid number n in the formula 2ⁿ."
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
   "explanation": "Correct: (A) Mutualism. In mutualism, both species benefit from the interaction. Here the fungal hyphae extend far beyond the root hairs and greatly increase the surface area for absorbing water and minerals, especially phosphate, which helps the plant. In return, the plant supplies the fungus with sugars made by photosynthesis, which helps the fungus. Because both partners gain (+/+), the relationship is mutualism; most land plants form these associations.\n\n(B) is wrong because parasitism benefits one species and harms the other (+/−), but here the plant gains water and minerals from the fungus.\n(C) is wrong because commensalism benefits one species while the other is unaffected (+/0), but here both the plant and the fungus benefit.\n(D) is wrong because competition harms both species as they use the same limited resource (−/−), but here they exchange resources and both benefit."
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
   "explanation": "Correct: (B) One amino acid is missing, but the rest of the sequence is unchanged. The genetic code is read in triplets from a fixed start point. Deleting exactly three nucleotides removes the length of one codon, so every codon downstream stays in the correct reading frame. The protein most likely lacks one amino acid but is otherwise normal. (If the deletion spans two codons, one amino acid is lost and the neighboring one may change, but the rest is unchanged.) Deletions of one or two nucleotides, by contrast, shift the frame.\n\n(A) is wrong because a frameshift results from deleting a number of nucleotides that is not a multiple of three; three nucleotides keep the frame intact.\n(C) is wrong because the deletion is within the coding region, not at the start codon, so translation can still begin normally.\n(D) is wrong because replacing one amino acid without changing length is the result of a substitution (missense) mutation, not a deletion of three nucleotides."
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
   "explanation": "Correct: (D) It helps catalyze the formation of peptide bonds during translation. The ribosome is made of rRNA and proteins, and its catalytic site, the peptidyl transferase center in the large subunit, is made of rRNA. That rRNA acts as a ribozyme, positioning the aminoacyl-tRNA and catalyzing the formation of the peptide bond between the growing chain and the next amino acid. rRNA also helps bind mRNA and tRNA to the ribosome. Each type of RNA has a distinct job in translation.\n\n(A) is wrong because carrying the protein-coding message from the nucleus to the cytoplasm is the function of mRNA, not rRNA.\n(B) is wrong because carrying amino acids to the ribosome is the function of tRNA, which pairs its anticodon with the mRNA codon.\n(C) is wrong because DNA is synthesized from a DNA template during replication (or from RNA by reverse transcriptase), not from rRNA."
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
   "explanation": "Correct: (B) 144. With two alleles, p + q = 1, so q = 1 − 0.6 = 0.4. In Hardy–Weinberg equilibrium the heterozygote frequency is 2pq = 2(0.6)(0.4) = 0.48. Multiplying by the population size gives the expected number: 0.48 × 300 = 144 heterozygous plants. As a check, AA = 0.36 × 300 = 108 and aa = 0.16 × 300 = 48, and 108 + 144 + 48 = 300.\n\n(A) is wrong because 180 is p × 300 = 0.6 × 300, the number corresponding to the dominant allele frequency, not to heterozygotes.\n(C) is wrong because 72 is pq × 300 = 0.24 × 300, which leaves out the factor of 2 in 2pq.\n(D) is wrong because 36 is just p² = 0.36 written as a whole number; p² is the homozygous dominant frequency (0.36 × 300 = 108 plants), not the heterozygote frequency."
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
   "explanation": "Correct: (D) Ethanol and carbon dioxide. Without oxygen, yeast relies on glycolysis for ATP, but glycolysis uses NAD⁺. To regenerate NAD⁺, yeast performs alcohol fermentation: pyruvate (3 carbons) is decarboxylated to acetaldehyde, releasing CO₂, and NADH then reduces acetaldehyde to ethanol, regenerating NAD⁺. Overall, glucose → 2 ethanol + 2 CO₂, with a net of 2 ATP. This is why yeast makes bread rise (CO₂) and produces alcoholic beverages (ethanol).\n\n(A) is wrong because lactic acid is the fermentation product of animal muscle cells and some bacteria, and water is not a fermentation product.\n(B) is wrong because oxygen and glucose are the products of photosynthesis, not of fermentation; glucose is the starting material.\n(C) is wrong because carbon dioxide and water are the end products of aerobic respiration, which requires oxygen as the final electron acceptor."
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
   "explanation": "Correct: (A) From the right side to the left side, because the left side has the higher total solute concentration. Water potential depends on the number of dissolved particles, not on molarity of the formula. NaCl dissociates into Na⁺ and Cl⁻, so 0.5 M NaCl gives 0.5 × 2 = 1.0 M of particles. Glucose does not dissociate, so 0.8 M glucose gives 0.8 M particles. The left side has more solute particles and a lower (more negative) water potential, so water moves from the right side, with higher water potential, to the left side.\n\n(B) is wrong because the glucose molarity (0.8 M) is higher, but NaCl gives two particles per formula unit, so the left side has more particles (1.0 M).\n(C) is wrong because the particle concentrations differ (1.0 M vs 0.8 M), so there is a net movement of water; comparing molarities alone is misleading.\n(D) is wrong because the size of NaCl does not matter, because it cannot cross the membrane; only the number of particles affects water movement."
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
   "explanation": "Correct: (C) The left side. Water flows from the right side (0.8 M particles) into the left side (1.0 M particles of Na⁺ and Cl⁻), so the left column rises and the right column falls. The rise continues until the hydrostatic pressure of the taller column on the left balances the difference in solute potential, at which point the water potentials of the two sides are equal and net flow stops. At equilibrium the left side has the higher level.\n\n(A) is wrong because the right side loses water to the left side, because glucose provides fewer solute particles than NaCl, so its level falls.\n(B) is wrong because the levels would stay equal only if the particle concentrations were equal, but 1.0 M of ions exceeds 0.8 M of glucose.\n(D) is wrong because the particle concentrations can be calculated from the stem (1.0 M vs 0.8 M), so the direction and the higher side can be determined."
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
   "explanation": "Correct: (B) Dark moths were better camouflaged on dark bark, so they left more offspring. The graph shows dark moths rising from 5% in 1850 to 95% in 1895 as soot darkened the bark. On dark bark, light moths stood out and were eaten by birds more often, while dark moths were camouflaged. Dark moths therefore survived longer and left more offspring, so the allele for dark color rose in frequency over the generations. This is natural selection acting on variation that already existed in the population.\n\n(A) is wrong because individual moths do not change color in response to the environment; the population changes because some moths survive and reproduce more.\n(C) is wrong because the dark allele was already present at 5% in 1850; pollution did not cause new alleles, it changed which allele was favored.\n(D) is wrong because the passage gives no evidence of migration, and the change matches local selection on darkened bark."
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
   "explanation": "Correct: (B) The environment changed again, and selection favored the light-colored moths. The graph shows dark moths falling from 95% in 1895 to 10% in 1990, after clean air laws let lichens return. On light, lichen-covered bark, light moths were camouflaged again and dark moths were more visible to birds. Selection reversed direction, so light moths survived and reproduced more and the light allele rose in frequency. Natural selection never stops; it favors whichever variation suits the current environment.\n\n(A) is wrong because mutations arise randomly and rarely, and the dark allele was not lost; dark moths are still 10% of the population in 1990.\n(C) is wrong because dark moths did not stop reproducing; they simply left fewer surviving offspring than light moths on lichen-covered bark.\n(D) is wrong because natural selection did not end; it continued and now favored light moths, which is why the dark frequency fell."
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
   "explanation": "Correct: (C) Polygenic inheritance, with several genes contributing to the phenotype. When a trait varies continuously, with many intermediate values and no distinct classes, it is usually polygenic: several genes each add a small effect. With n genes, each having alleles that add or do not add pigment, the number of possible phenotypes grows to 2n + 1, and the environment (such as sun exposure) blurs these into a smooth bell-shaped distribution. Skin color, height, and eye color are classic examples of polygenic traits.\n\n(A) is wrong because complete dominance at one gene produces only two distinct phenotypes, not the continuous range seen in skin color.\n(B) is wrong because codominance at one gene produces at most three distinct phenotypes, which still cannot explain continuous variation.\n(D) is wrong because being on the X chromosome affects how a trait is inherited by sex, but a single X-linked gene would still give a few distinct classes."
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
   "explanation": "Correct: (D) The hydrophilic heads face the aqueous environments and the hydrophobic tails face each other. A phospholipid is amphipathic: its phosphate-containing head is polar and hydrophilic, while its two fatty acid tails are nonpolar and hydrophobic. In water, the molecules arrange themselves so the heads face the watery cytoplasm and extracellular fluid on both sides, and the tails face each other in the interior, away from water. This bilayer forms spontaneously because it minimizes contact between nonpolar tails and water.\n\n(A) is wrong because this reverses the polarity: the heads are hydrophilic and the tails are hydrophobic, so tails facing water would be unstable.\n(B) is wrong because phospholipids in the bilayer are held together by hydrophobic interactions, not covalent bonds, which is why the membrane is fluid.\n(C) is wrong because cholesterol modulates membrane fluidity, and it is not what holds the two layers together; the hydrophobic effect does."
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
   "explanation": "Correct: (A) Sympatric speciation by polyploidy. Polyploidy arises when an error in meiosis or mitosis produces gametes with extra sets of chromosomes. Offspring with doubled chromosome numbers can breed with each other, but crosses with the parent species give offspring with an odd number of chromosome sets that are sterile. Reproductive isolation appears in one generation in the same place as the parent population, with no geographic barrier, so it is sympatric speciation. Modern bread wheat is hexaploid.\n\n(B) is wrong because allopatric speciation needs a geographic barrier that separates populations, but this new species arose in the same location in one step.\n(C) is wrong because adaptive radiation is many species diversifying to fill open niches, often after an extinction, not a single chromosome-doubling event.\n(D) is wrong because genetic drift is random change in allele frequency and works gradually, while polyploidy isolates the new plants in one generation."
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
   "explanation": "Correct: (A) A glycosidic bond formed by dehydration synthesis. A disaccharide forms when two monosaccharides are joined by a glycosidic linkage, a covalent bond through an oxygen atom between two carbons. It is made by dehydration synthesis: an −OH from one sugar and an −H from the other are removed as one water molecule. For example, two glucose molecules joined by an α(1→4) linkage form maltose: C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O. Hydrolysis breaks the bond.\n\n(B) is wrong because peptide bonds join amino acids, not sugars, and bonds between monomers are formed by dehydration, while hydrolysis breaks them.\n(C) is wrong because phosphodiester bonds link nucleotides in nucleic acids through phosphate groups, not monosaccharides in a disaccharide.\n(D) is wrong because ester bonds link fatty acids to glycerol in lipids, and they too are formed by dehydration, not by hydrolysis."
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
   "explanation": "Correct: (C) Microtubules. Microtubules are hollow tubes of α- and β-tubulin. During mitosis and meiosis they assemble from centrosomes into the spindle, and kinetochore microtubules attach to chromosomes and pull sister chromatids apart in anaphase by depolymerizing at their ends. Drugs such as colchicine that block microtubule assembly stop cells at metaphase. Microtubules also form cilia and flagella and serve as tracks for vesicle transport.\n\n(A) is wrong because microfilaments of actin form the contractile ring that pinches animal cells apart in cytokinesis, not the spindle that moves chromosomes.\n(B) is wrong because intermediate filaments provide mechanical strength and anchor organelles; they do not form the spindle.\n(D) is wrong because the cell wall lies outside the plasma membrane in plants, fungi, and bacteria and is not part of the cytoskeleton."
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
   "explanation": "Correct: (D) The concentration of CO₂. On the graph, the 0.04% CO₂ curve rises steeply at low light but becomes nearly flat at high light, reaching about 8.7 µmol/m²/s at 100% sunlight. Increasing light further barely raises the rate, so light is no longer limiting. Raising CO₂ to 0.10% at the same high light lifts the rate to about 14 µmol/m²/s. Because adding CO₂ increases the rate, the CO₂ concentration is the limiting factor at high light under 0.04% CO₂.\n\n(A) is wrong because the curve is nearly flat at high light, so more light hardly increases the rate; light is limiting only at low intensities.\n(B) is wrong because chlorophyll was not varied in the experiment, and the higher rate at 0.10% CO₂ shows that CO₂, not pigment, is limiting.\n(C) is wrong because temperature was not varied, and the data show the rate rising when CO₂ is increased, pointing to CO₂ as the limit."
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
   "explanation": "Correct: (B) More light increases the rate of the light reactions that supply ATP and NADPH. At low light, both curves rise steeply as light increases, which shows light is the main limiting factor. More photons drive more electron flow through the photosystems, so the light reactions make more ATP and NADPH. The Calvin cycle uses ATP and NADPH to reduce fixed carbon into sugar, so a greater supply lets it fix CO₂ faster, and the rate of CO₂ uptake rises until something else, such as CO₂, limits it; the curves level off near 8.7 µmol/m²/s at 0.04% CO₂ and near 14 µmol/m²/s at 0.10% CO₂.\n\n(A) is wrong because light does not add CO₂ to the leaf; CO₂ enters by diffusion through the stomata, and light only supplies energy.\n(C) is wrong because closed stomata would reduce CO₂ entry and lower the rate, which is the opposite of what the curves show at low light.\n(D) is wrong because chlorophyll is required to absorb light energy, and more light does not reduce the need for it."
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
   "explanation": "Correct: (C) About pH 7. The optimum pH is where the enzyme is most active, here measured by the volume of O₂ released in 2 minutes. The table gives 1 mL at pH 3, 6 mL at pH 5, 10 mL at pH 7, 5 mL at pH 9, and 1 mL at pH 11. The highest value, 10 mL, is at pH 7, and activity falls on both sides, so the optimum is about pH 7, a typical value for an enzyme that works in the cytoplasm.\n\n(A) is wrong because pH 3 gives only 1 mL of O₂, tied for the lowest activity in the table, so it is far from the optimum.\n(B) is wrong because pH 11 also gives only 1 mL of O₂, showing that the enzyme is nearly inactive in strongly basic conditions.\n(D) is wrong because the volumes range from 1 mL to 10 mL, so the activity clearly depends on pH."
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
   "explanation": "Correct: (A) The low pH alters the charges on R groups, changing the enzyme's shape and active site. An enzyme's three-dimensional shape is held by hydrogen bonds and ionic attractions between R groups. At pH 3, the high H⁺ concentration protonates acidic and basic side chains, for example −COO⁻ becomes −COOH, which changes their charges and breaks ionic bonds. The protein unfolds partly or fully (denatures), the active site loses its shape, and hydrogen peroxide no longer binds well, so only 1 mL of O₂ is produced.\n\n(B) is wrong because the hydrogen peroxide substrate remains in solution at low pH; the problem is the enzyme's changed shape, not missing substrate.\n(C) is wrong because peptide bonds are covalent and are not broken by moderate pH changes; denaturation disrupts the weaker bonds of tertiary structure.\n(D) is wrong because a change in pH does not change the size of a hydrogen peroxide molecule; it changes the enzyme's active site."
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
   "explanation": "Correct: (C) 92. During S phase, each of the 46 chromosomes is replicated into two identical sister chromatids joined at the centromere. At metaphase, before anaphase separates them, each chromosome still has two chromatids, so the cell contains 46 chromosomes × 2 chromatids = 92 chromatids. The chromosome number stays 46 because the chromosome count equals the number of centromeres, and the chromatids are counted as separate chromosomes only after they split in anaphase.\n\n(A) is wrong because 23 is the haploid number found in gametes, not the number of chromatids in a somatic cell in mitosis.\n(B) is wrong because 46 is the number of chromosomes, which counts each pair of sister chromatids once instead of counting both chromatids.\n(D) is wrong because 184 doubles the correct count again (46 × 4), as if each chromosome had four chromatids."
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
   "explanation": "Correct: (B) 20 hours and 44 hours. The stem says the cells enter mitosis when cyclin B peaks. Reading the graph, the curve reaches its maximum of 1.0 at about 20 hours, falls to its minimum at about 32 hours, and peaks again at about 44 hours. The two peaks are 44 − 20 = 24 hours apart, matching the 24-hour cycle. So the cells enter mitosis at about 20 hours and 44 hours, after which cyclin B is degraded.\n\n(A) is wrong because 8 and 32 hours are the low points of the curve, when cyclin B has just been degraded after mitosis.\n(C) is wrong because at 0 and 24 hours the cyclin level is about 0.75 and falling, a few hours after a peak, as cyclin B is being degraded after mitosis.\n(D) is wrong because at 14 and 38 hours the cyclin level is still rising from the trough, well below the peak."
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
   "explanation": "Correct: (D) Cyclin is synthesized during the cycle and degraded after mitosis, which resets the cycle. Cyclin B is synthesized steadily during interphase, so its level rises. It binds CDK1 to form MPF, and when enough MPF accumulates, the cell is pushed into mitosis. During anaphase, the anaphase-promoting complex tags cyclin B with ubiquitin, and it is destroyed by proteasomes. The level drops sharply, CDK1 becomes inactive, and the cell exits mitosis. Repeated synthesis and degradation produce the oscillations in the graph and reset the cycle.\n\n(A) is wrong because cyclin is a soluble regulatory protein, not a part of the nuclear envelope, and its level changes because it is made and destroyed.\n(B) is wrong because G₀ is a resting state outside the cycle; cyclin B builds up while dividing cells progress toward mitosis, not in G₀.\n(C) is wrong because the graph shows cyclin B falling after each peak, which means it is broken down rather than kept permanently."
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
   "explanation": "Correct: (A) Solution Y, because its pH changed only slightly. A buffer resists changes in pH when acid or base is added. On the graph, after 10 mL of 0.1 M HCl, Solution Y falls only from pH 7.0 to about 6.4, a change of about 0.6. Solution X falls from 7.0 to about 2.1, a change of about 5 units, a 100,000-fold increase in H⁺. Y is the buffer, and X is the pure water, which has no capacity to absorb the added H⁺.\n\n(B) is wrong because the large pH drop of Solution X shows it has no buffering capacity, which is what is expected of pure water.\n(C) is wrong because starting at the same pH says nothing about buffering; what matters is how much each pH changes as acid is added.\n(D) is wrong because a buffer limits pH change but does not prevent it entirely, and Y changed only slightly, which is what a buffer does."
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
   "explanation": "Correct: (B) It contains a weak acid and its conjugate base that bind or release H⁺ ions. A buffer contains a weak acid (HA) and its conjugate base (A⁻) in similar amounts. When HCl is added, A⁻ combines with the extra H⁺ to form HA (A⁻ + H⁺ → HA), so few free H⁺ remain and the pH barely falls. When base is added, HA releases H⁺ that neutralizes OH⁻. Blood, for example, uses the carbonic acid–bicarbonate pair to stay near pH 7.4.\n\n(A) is wrong because a strong acid would release H⁺ and lower the pH; neutralizing added acid requires a base, such as the conjugate base.\n(C) is wrong because H⁺ from HCl dissolves in any aqueous solution; a buffer works by binding H⁺ after it is released, not by blocking it.\n(D) is wrong because a buffer does not convert H⁺ into OH⁻; it binds H⁺ reversibly to its conjugate base to form the weak acid."
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
   "explanation": "Correct: (C) 2. Glycolysis splits one glucose (6 carbons) into two glyceraldehyde-3-phosphate (G3P) molecules. In the payoff phase, glyceraldehyde-3-phosphate dehydrogenase oxidizes each G3P and reduces one NAD⁺ to NADH. Two G3P per glucose give 2 NADH. The same phase produces 4 ATP, or a net of 2 ATP after the 2 ATP invested, and 2 pyruvate. The NADH later delivers electrons to the electron transport chain.\n\n(A) is wrong because 10 is the total NADH from glycolysis, pyruvate oxidation, and the Krebs cycle combined (2 + 2 + 6), not from glycolysis alone.\n(B) is wrong because 4 is the gross number of ATP made in the payoff phase of glycolysis, not the number of NADH.\n(D) is wrong because glycolysis does produce NADH, which is why fermentation must regenerate NAD⁺ when oxygen is absent."
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
   "explanation": "Correct: (C) It selects for the bacteria that have taken up the plasmid. Transformation is inefficient, so most bacteria do not take up the plasmid. The plasmid carries a gene for ampicillin resistance, so only bacteria that took it up and express the gene can survive on ampicillin plates. Ampicillin kills the untransformed cells by blocking cell wall synthesis, so every colony that grows comes from a transformed cell. The antibiotic acts as a selective agent that identifies cells containing the plasmid and any gene inserted into it.\n\n(A) is wrong because uptake of the plasmid is induced by treatments such as calcium chloride and heat shock, not by ampicillin.\n(B) is wrong because ampicillin is an antibiotic that kills susceptible bacteria; it does not speed up the division of resistant bacteria.\n(D) is wrong because cutting DNA at specific sites is done by restriction enzymes, not by ampicillin, which targets bacterial cell walls."
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
   "explanation": "Correct: (B) 27/64. For each gene, Aa × Aa gives 1/4 AA, 1/2 Aa, and 1/4 aa, so the probability of the dominant phenotype is 1/4 + 1/2 = 3/4. The three genes assort independently, so the probabilities multiply by the product rule: P(dominant for all three) = (3/4)(3/4)(3/4) = 27/64. This matches the 27/64 class of the classic 27:9:9:9:3:3:3:1 trihybrid ratio.\n\n(A) is wrong because 3/4 is the probability of the dominant phenotype for one gene; it ignores the other two genes.\n(C) is wrong because 9/64 is (3/4)(3/4)(1/4), the probability of being dominant for two specific traits and recessive for the third.\n(D) is wrong because 1/64 is (1/4)³, the probability of being homozygous recessive for all three genes."
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
   "explanation": "Correct: (D) Sexual selection, in which traits that increase mating success are favored. Sexual selection favors traits that increase mating success, even if they reduce survival. Peahens prefer males with large, colorful tails, so those males father more offspring and pass on genes for elaborate tails, while predation removes only some of them. As long as the reproductive gain outweighs the survival cost, the trait spreads. The stem's clue is the trade-off between visibility to predators and attraction of mates.\n\n(A) is wrong because genetic drift is random change in allele frequency, while the peacock tail is favored by a consistent, non-random advantage in mating.\n(B) is wrong because the founder effect is drift in a small new population, and the stem says nothing about a few individuals founding a population.\n(C) is wrong because stabilizing selection favors intermediate traits, but here an extreme tail is favored, the opposite pattern."
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
   "explanation": "Correct: (D) 64. A codon has three positions, and each position can be filled by any of four bases (A, U, G, C). By the multiplication rule, the number of possible codons is 4 × 4 × 4 = 4³ = 64. Of these, 61 code for amino acids and 3 are stop codons. Since there are only 20 amino acids, the code is redundant: most amino acids are coded by more than one codon.\n\n(A) is wrong because 16 is 4², the number of two-nucleotide codons, which would be too few to code for 20 amino acids.\n(B) is wrong because 20 is the number of amino acids encoded, not the number of possible codons.\n(C) is wrong because 61 is the number of codons that code for amino acids; adding the 3 stop codons gives all 64."
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
     "alt": "A graph of CO2 uptake rate against light intensity. Both curves rise and then level off. The curve at 0.04 percent CO2 levels off near 9 and the curve at 0.10 percent CO2 levels off near 14."
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
