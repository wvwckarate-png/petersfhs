// AP Chemistry — Exam 3 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "ce3-1",
   "unit": 6,
   "stem": "Which of the following has a standard enthalpy of formation of zero at 25 °C?",
   "choices": [
    "Br₂(g)",
    "Hg(g)",
    "O₃(g)",
    "Br₂(l)"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Br₂(l). By definition, the standard enthalpy of formation of an element in its most stable form at 25 °C and 1 atm is zero, because forming the element from itself involves no change. Bromine is one of only two elements that are liquids at room temperature, so Br₂(l) is its standard state and ΔH<sub>f</sub>° = 0. Every other choice is an element in a form that is not its most stable state, so each has a nonzero ΔH<sub>f</sub>°.\n\n(A) is wrong because Br₂(g) is not bromine's standard state; vaporizing the liquid costs energy, so ΔH<sub>f</sub>°[Br₂(g)] ≈ +31 kJ/mol, not zero.\n(B) is wrong because mercury is a liquid at 25 °C, so Hg(g) is not its standard state and has a positive ΔH<sub>f</sub>° (about +61 kJ/mol).\n(C) is wrong because the most stable form of oxygen is O₂(g), not ozone; O₃(g) is a higher-energy allotrope with ΔH<sub>f</sub>° ≈ +143 kJ/mol."
  },
  {
   "id": "ce3-2",
   "unit": 3,
   "stem": "Which of the following is the most soluble in water?",
   "choices": [
    "CH₃OH",
    "C₆H₁₄",
    "CCl₄",
    "I₂"
   ],
   "correct": 0,
   "explanation": "Correct: (A) CH₃OH. \"Like dissolves like\": a solute dissolves well in water when it can replace the water–water hydrogen bonds it disrupts with comparable solute–water attractions. Methanol, CH₃OH, is a small polar molecule whose O–H group both donates and accepts hydrogen bonds with water, so it is miscible with water in all proportions. The other three substances are nonpolar and can offer water only weak dispersion attractions, so they dissolve very little.\n\n(B) is wrong because hexane, C₆H₁₄, is a nonpolar hydrocarbon with only dispersion forces, so it cannot hydrogen bond with water and is essentially insoluble.\n(C) is wrong because CCl₄ is tetrahedral, so its four C–Cl bond dipoles cancel; the nonpolar molecule mixes poorly with water and forms a separate layer.\n(D) is wrong because I₂ is a nonpolar diatomic molecule held by dispersion forces; it dissolves only slightly in water (it is far more soluble in nonpolar solvents)."
  },
  {
   "id": "ce3-3",
   "unit": 6,
   "setId": "ce3-set1",
   "stem": "How much thermal energy is required to melt the 10.0 g of ice (segment B)?",
   "choices": [
    "0.418 kJ",
    "3.34 kJ",
    "4.18 kJ",
    "22.6 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3.34 kJ. Segment B is the flat line at 0 °C, where the temperature stays constant because the added energy breaks some of the hydrogen bonds that hold the rigid ice lattice together instead of raising the kinetic energy. The energy for this phase change is q = m × ΔH<sub>fus</sub> = (10.0 g)(334 J/g) = 3340 J = 3.34 kJ. On the graph, segment B runs from about 0.4 kJ to about 3.8 kJ, a length of about 3.3 kJ, which agrees.\n\n(A) is wrong because 0.418 kJ is the energy for segment A, warming the ice from −20 °C to 0 °C: (10.0 g)(2.09 J/(g·°C))(20 °C) = 418 J.\n(C) is wrong because 4.18 kJ is the energy for segment C, warming the liquid from 0 °C to 100 °C: (10.0 g)(4.18 J/(g·°C))(100 °C) = 4180 J.\n(D) is wrong because 22.6 kJ is the energy for vaporizing the water (segment D), using the heat of vaporization, 2260 J/g, instead of the heat of fusion."
  },
  {
   "id": "ce3-4",
   "unit": 6,
   "setId": "ce3-set1",
   "stem": "How much thermal energy is required to vaporize the 10.0 g of water at 100 °C (segment D)?",
   "choices": [
    "4.18 kJ",
    "7.94 kJ",
    "22.6 kJ",
    "30.5 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 22.6 kJ. Segment D is the long flat line at 100 °C, where all the added energy goes into separating the molecules completely as liquid becomes gas, so the temperature does not rise. The energy required is q = m × ΔH<sub>vap</sub> = (10.0 g)(2260 J/g) = 22,600 J = 22.6 kJ. On the graph, segment D runs from about 7.9 kJ to about 30.5 kJ, a length of about 22.6 kJ. Vaporization needs far more energy than melting because the molecules must be pulled entirely apart.\n\n(A) is wrong because 4.18 kJ is the energy for segment C, warming the liquid water from 0 °C to 100 °C, not the energy to vaporize it.\n(B) is wrong because 7.94 kJ is the total energy added up to the start of segment D (0.418 + 3.34 + 4.18 kJ), the x-value where boiling begins, not the length of D.\n(D) is wrong because 30.5 kJ is the total energy for the whole process (7.94 kJ + 22.6 kJ), the x-value at the end of segment D, not the energy of segment D alone."
  },
  {
   "id": "ce3-5",
   "unit": 4,
   "stem": "Which of the following ionic compounds is soluble in water?",
   "choices": [
    "AgCl",
    "BaSO₄",
    "PbSO₄",
    "Na₂CO₃"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Na₂CO₃. The solubility rules state that all common salts of the Group 1 cations (Li⁺, Na⁺, K⁺, and so on) and of NH₄⁺ are soluble in water. Na₂CO₃ is a sodium salt, so it dissolves and dissociates into 2 Na⁺ and CO₃²⁻ ions. Although most carbonates are insoluble, the Group 1 rule overrides that, which is why sodium carbonate (washing soda) dissolves readily.\n\n(A) is wrong because AgCl is one of the classic insoluble chlorides (along with those of Pb²⁺ and Hg₂²⁺); it forms a white precipitate when Ag⁺ meets Cl⁻.\n(B) is wrong because BaSO₄ is an insoluble sulfate (the exception for Ba²⁺, Sr²⁺, Pb²⁺, and Ca²⁺); it is so insoluble that it is swallowed safely for X-ray imaging.\n(C) is wrong because PbSO₄ is another insoluble sulfate exception; Pb²⁺ forms insoluble sulfates and chlorides, so it precipitates rather than dissolving."
  },
  {
   "id": "ce3-6",
   "unit": 5,
   "setId": "ce3-set2",
   "stem": "Determine the order of the reaction in A.",
   "choices": [
    "Second order",
    "First order",
    "Zero order",
    "Third order"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Second order. To find the order in A, compare two experiments in which only [A] changes. In experiments 1 and 2, [B] stays at 0.10 M while [A] doubles from 0.10 M to 0.20 M, and the rate rises from 1.5 × 10⁻² to 6.0 × 10⁻² M/s, a factor of 4. Since 2<sup>n</sup> = 4, n = 2, so the rate is proportional to [A]² and the reaction is second order in A.\n\n(B) is wrong because first order would make the rate double when [A] doubles, but the rate actually quadruples (1.5 × 10⁻² to 6.0 × 10⁻² M/s).\n(C) is wrong because zero order would leave the rate unchanged when [A] doubles; that is the behavior of B (experiments 1 and 3), not of A.\n(D) is wrong because third order would make the rate rise by 2³ = 8 when [A] doubles, but the observed increase is only a factor of 4."
  },
  {
   "id": "ce3-7",
   "unit": 5,
   "setId": "ce3-set2",
   "stem": "Calculate the rate constant for the reaction.",
   "choices": [
    "0.15 M⁻¹ s⁻¹",
    "1.5 M⁻¹ s⁻¹",
    "15 M⁻¹ s⁻¹",
    "150 M⁻¹ s⁻¹"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.5 M⁻¹ s⁻¹. First find the full rate law. Experiments 1 and 2 show second order in A (doubling [A] quadruples the rate). Experiments 1 and 3 show zero order in B (tripling [B] leaves the rate at 1.5 × 10⁻² M/s). So rate = k[A]². Using experiment 1: k = rate/[A]² = (1.5 × 10⁻² M/s)/(0.10 M)² = (1.5 × 10⁻² M/s)/(1.0 × 10⁻² M²) = 1.5 M⁻¹ s⁻¹. The units M⁻¹ s⁻¹ confirm a reaction that is second order overall.\n\n(A) is wrong because 0.15 M⁻¹ s⁻¹ comes from dividing the rate by [A] only once (0.015/0.10), as if the reaction were first order in A.\n(C) is wrong because 15 M⁻¹ s⁻¹ comes from also dividing by [B] (0.015/(0.10)³), as if the rate law were k[A]²[B]; [B] has no effect on the rate.\n(D) is wrong because 150 M⁻¹ s⁻¹ comes from dividing by (0.10)⁴, as if the rate law were k[A]²[B]²; B is zero order, so it does not appear."
  },
  {
   "id": "ce3-8",
   "unit": 5,
   "setId": "ce3-set2",
   "stem": "How is the rate affected if [B] is tripled while [A] is held constant?",
   "choices": [
    "The rate does not change.",
    "The rate triples.",
    "The rate increases by a factor of 9.",
    "The rate decreases."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The rate does not change. Experiments 1 and 3 hold [A] at 0.10 M while [B] triples from 0.10 M to 0.30 M, and the rate stays exactly 1.5 × 10⁻² M/s. Since 3<sup>n</sup> = 1, n = 0: the reaction is zero order in B, so the rate law is rate = k[A]² and [B] does not appear in it. Tripling [B] again at constant [A] therefore leaves the rate unchanged.\n\n(B) is wrong because a tripled rate would require first order in B, but experiment 3 shows no change in rate when [B] is tripled.\n(C) is wrong because a ninefold increase would require second order in B (3² = 9); that confuses B with A, which is the second-order reactant.\n(D) is wrong because nothing in the data shows the rate falling; a decrease would need a negative order in B, and experiment 3 shows no change."
  },
  {
   "id": "ce3-9",
   "unit": 7,
   "stem": "For the reaction A(g) ⇌ B(g), K = 4.0. The initial concentration of A is 1.0 M, and no B is present. What is the equilibrium concentration of B?",
   "choices": [
    "1.0 M",
    "0.80 M",
    "0.50 M",
    "0.20 M"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.80 M. Set up an ICE table. Initially [A] = 1.0 M and [B] = 0. If x mol/L of A converts, then at equilibrium [A] = 1.0 − x and [B] = x. K = [B]/[A] = x/(1.0 − x) = 4.0, so x = 4.0 − 4.0x, 5.0x = 4.0, and x = 0.80 M. Check: [B]/[A] = 0.80/0.20 = 4.0, matching K. Because K is greater than 1, products are favored, but the reaction does not go to completion.\n\n(A) is wrong because 1.0 M assumes A converts completely to B; that would make [A] = 0 and K infinite, not 4.0.\n(C) is wrong because 0.50 M would give [B]/[A] = 0.50/0.50 = 1, which is the result for K = 1, not K = 4.0.\n(D) is wrong because 0.20 M is the equilibrium concentration of A (1.0 − 0.80), not of B; using it for [B] inverts the ratio to 0.25."
  },
  {
   "id": "ce3-10",
   "unit": 3,
   "stem": "A 100. mL sample of 0.200 M NaCl is mixed with 150. mL of 0.100 M CaCl₂. What is the concentration of chloride ions in the mixed solution? (Assume the volumes are additive.)",
   "choices": [
    "0.140 M",
    "0.160 M",
    "0.200 M",
    "0.280 M"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.200 M. Find the total moles of Cl⁻ and divide by the total volume. NaCl gives one Cl⁻ per formula unit: (0.200 mol/L)(0.100 L) = 0.0200 mol Cl⁻. CaCl₂ gives two Cl⁻ per formula unit: 2 × (0.100 mol/L)(0.150 L) = 0.0300 mol Cl⁻. Total Cl⁻ = 0.0500 mol in 0.100 L + 0.150 L = 0.250 L, so [Cl⁻] = 0.0500 mol/0.250 L = 0.200 M.\n\n(A) is wrong because 0.140 M forgets that CaCl₂ releases two Cl⁻ ions, counting only 0.0150 mol from it: (0.0200 + 0.0150)/0.250 = 0.140 M.\n(B) is wrong because 0.160 M corresponds to only 0.0400 mol Cl⁻; it comes from using the 100. mL volume for the CaCl₂ solution as well (2 × 0.100 × 0.100 = 0.0200 mol).\n(D) is wrong because 0.280 M applies the factor of 2 to NaCl as well as to CaCl₂ (0.0400 + 0.0300 = 0.0700 mol, /0.250 L), but NaCl has only one Cl⁻."
  },
  {
   "id": "ce3-11",
   "unit": 9,
   "stem": "How long must a current of 5.00 A be passed through a solution of Cu²⁺ to deposit 0.635 g of copper? (Molar mass of Cu = 63.5 g/mol; 1 F = 96,500 C/mol e⁻)",
   "choices": [
    "1930 s",
    "772 s",
    "386 s",
    "193 s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 386 s. Electrolysis problems run grams → moles of metal → moles of electrons → charge → time. Moles of Cu = 0.635 g ÷ 63.5 g/mol = 0.0100 mol. The half-reaction Cu²⁺ + 2e⁻ → Cu needs 2 mol e⁻ per mol Cu, so 0.0200 mol e⁻ is required. Charge q = (0.0200 mol e⁻)(96,500 C/mol e⁻) = 1930 C. Since q = It, t = q/I = 1930 C ÷ 5.00 A = 386 s.\n\n(A) is wrong because 1930 s is the charge in coulombs (1930 C), reported as a time without dividing by the 5.00 A current.\n(B) is wrong because 772 s doubles the correct answer, as if 4 mol of electrons (0.0400 mol e⁻) were needed per mol of Cu; Cu²⁺ needs only 2.\n(D) is wrong because 193 s uses one electron per copper ion (0.0100 mol e⁻ → 965 C), but Cu²⁺ must gain two electrons to become Cu."
  },
  {
   "id": "ce3-12",
   "unit": 3,
   "setId": "ce3-set3",
   "stem": "Which statement best explains the trend in boiling points?",
   "choices": [
    "The hydrogen bonding increases from CH₄ to SnH₄.",
    "The dipole–dipole forces increase as the electronegativity of the central atom increases.",
    "The covalent bonds become stronger from CH₄ to SnH₄.",
    "The London dispersion forces increase as the molecules get larger and have more electrons."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The London dispersion forces increase as the molecules get larger and have more electrons. The set states that all four hydrides are nonpolar molecules, so they have no permanent dipoles and no hydrogen bonding (H is bonded to C, Si, Ge, or Sn, not to N, O, or F). The only intermolecular force is London dispersion. Going from CH₄ (16.0 g/mol) to SnH₄ (122.7 g/mol), the molecules get larger and have more electrons, so their electron clouds are more polarizable; stronger dispersion forces raise the boiling point from −161.5 °C to −52.0 °C.\n\n(A) is wrong because hydrogen bonding requires H bonded to N, O, or F; in these hydrides H is bonded to Group 14 atoms, so no hydrogen bonds form.\n(B) is wrong because the molecules are tetrahedral and nonpolar, so any bond dipoles cancel; also, electronegativity decreases from C to Sn, the opposite of the stated trend.\n(C) is wrong because boiling separates whole molecules and breaks no covalent bonds; in fact the E–H bonds get weaker down the group, not stronger."
  },
  {
   "id": "ce3-13",
   "unit": 3,
   "setId": "ce3-set3",
   "stem": "PbH₄ is a Group 14 hydride that is larger than SnH₄. Compared with SnH₄, what would you predict for the boiling point of PbH₄?",
   "choices": [
    "It is higher, because PbH₄ has stronger London dispersion forces.",
    "It is lower, because PbH₄ has weaker London dispersion forces.",
    "It is the same, because both are nonpolar.",
    "It cannot be predicted from the information given."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It is higher, because PbH₄ has stronger London dispersion forces. The table shows boiling point rising steadily with size: −161.5 °C (CH₄), −111.9 °C (SiH₄), −88.5 °C (GeH₄), −52.0 °C (SnH₄). PbH₄ is the next member of the series, with a molar mass of about 211 g/mol and many more electrons than SnH₄. Its larger, more polarizable electron cloud gives stronger London dispersion forces, so its boiling point should be higher than −52.0 °C, continuing the trend.\n\n(B) is wrong because a larger molecule with more electrons is more polarizable, so its dispersion forces are stronger, not weaker; the table shows this trend clearly.\n(C) is wrong because being nonpolar does not make boiling points equal; the table shows four nonpolar hydrides with very different boiling points.\n(D) is wrong because the table establishes a clear, steady trend in a series of similar nonpolar molecules, which is enough to predict the next member qualitatively."
  },
  {
   "id": "ce3-14",
   "unit": 1,
   "stem": "How many oxygen atoms are in 0.50 mol of CO₂? (Avogadro's number is 6.02 × 10²³.)",
   "choices": [
    "1.8 × 10²⁴",
    "1.2 × 10²⁴",
    "6.0 × 10²³",
    "3.0 × 10²³"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6.0 × 10²³. Convert moles of molecules to number of molecules, then to atoms. Molecules of CO₂ = (0.50 mol)(6.02 × 10²³ molecules/mol) = 3.0 × 10²³ molecules. Each CO₂ molecule contains 2 oxygen atoms, so O atoms = 2 × 3.0 × 10²³ = 6.0 × 10²³. Equivalently, 0.50 mol CO₂ contains 1.0 mol of O atoms, which is Avogadro's number of atoms.\n\n(A) is wrong because 1.8 × 10²⁴ is 3 × 6.02 × 10²³, the total atoms in 1 mol of CO₂; it ignores the 0.50 mol and counts carbon too.\n(B) is wrong because 1.2 × 10²⁴ is 2 × 6.02 × 10²³, the oxygen atoms in a full mole of CO₂; it forgets that the sample is only 0.50 mol.\n(D) is wrong because 3.0 × 10²³ is the number of CO₂ molecules; it forgets that each molecule contains two oxygen atoms."
  },
  {
   "id": "ce3-15",
   "unit": 6,
   "stem": "In a bomb calorimeter with a heat capacity of 8.00 kJ/°C, the combustion of a sample raises the temperature of the calorimeter by 2.50 °C. How much thermal energy was released by the reaction?",
   "choices": [
    "3.20 kJ",
    "10.0 kJ",
    "20.0 kJ",
    "80.0 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 20.0 kJ. In a bomb calorimeter, the energy released by the reaction is absorbed by the calorimeter, whose heat capacity C<sub>cal</sub> already includes the water and the steel bomb. So q<sub>cal</sub> = C<sub>cal</sub>ΔT = (8.00 kJ/°C)(2.50 °C) = 20.0 kJ, and q<sub>rxn</sub> = −20.0 kJ: the reaction released 20.0 kJ. No mass or specific heat is needed because C<sub>cal</sub> is given for the whole calorimeter.\n\n(A) is wrong because 3.20 kJ comes from dividing the heat capacity by the temperature change (8.00/2.50) instead of multiplying them.\n(B) is wrong because 10.0 kJ is only half of C<sub>cal</sub>ΔT; it would correspond to a 1.25 °C rise or a 4.00 kJ/°C calorimeter, neither of which is given.\n(D) is wrong because 80.0 kJ is four times too large; it would need a 10.0 °C temperature rise, so it reflects a decimal or arithmetic slip with the 2.50 °C."
  },
  {
   "id": "ce3-16",
   "unit": 3,
   "stem": "Solid water (ice) is less dense than liquid water. Which statement best explains this?",
   "choices": [
    "Ice molecules are lighter than the molecules of liquid water, so ice is less dense",
    "Ice has weaker hydrogen bonds than liquid water, so its molecules are farther apart",
    "The molecules in ice move faster than in the liquid, so they take up more room",
    "In ice, hydrogen bonds hold the molecules in an open lattice with extra space between them"
   ],
   "correct": 3,
   "explanation": "Correct: (D) In ice, hydrogen bonds hold the molecules in an open lattice with extra space between them. In ice, each water molecule forms four hydrogen bonds to neighbors in a rigid, tetrahedral arrangement, building an open hexagonal lattice with large empty spaces. When ice melts, some of these hydrogen bonds break, the lattice collapses, and molecules can pack closer together. The same mass therefore occupies less volume as a liquid, so liquid water (1.00 g/cm³ near 4 °C) is denser than ice (about 0.92 g/cm³).\n\n(A) is wrong because ice and liquid water are made of identical H₂O molecules with the same mass; density differs because of spacing, not molecular mass.\n(B) is wrong because ice's hydrogen bonds are not weaker; ice has more, fully ordered hydrogen bonds, and it is their fixed geometry that holds molecules apart.\n(C) is wrong because molecules in ice move more slowly than in the liquid (ice is colder); the extra volume comes from the open lattice, not from faster motion."
  },
  {
   "id": "ce3-17",
   "unit": 5,
   "stem": "Reaction 1 has an activation energy of 50 kJ/mol and reaction 2 has an activation energy of 100 kJ/mol. The reactions have similar frequency factors and take place at the same temperature. Which statement is correct?",
   "choices": [
    "Reaction 1 has the larger rate constant, because a lower barrier lets more molecules react.",
    "Reaction 2 has the larger rate constant, because its activation energy is greater.",
    "The reactions have the same rate constant, because the temperature is the same for both.",
    "Reaction 2 is faster, because it is more exothermic than reaction 1 and so releases more energy."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Reaction 1 has the larger rate constant, because a lower barrier lets more molecules react. The Arrhenius equation is k = Ae<sup>−E<sub>a</sub>/RT</sup>. With similar frequency factors A and the same temperature, the reaction with the smaller activation energy has the larger exponential term, because a larger fraction of collisions have at least E<sub>a</sub>. Reaction 1 (E<sub>a</sub> = 50 kJ/mol) therefore has a larger k than reaction 2 (100 kJ/mol). At 298 K the ratio is e<sup>(50,000 J/mol)/((8.314 J/(mol·K))(298 K))</sup> ≈ 6 × 10⁸.\n\n(B) is wrong because a greater activation energy is a higher barrier, so fewer molecules have enough energy to react and the rate constant is smaller, not larger.\n(C) is wrong because equal temperature does not give equal rate constants; k also depends on E<sub>a</sub>, and these barriers differ by 50 kJ/mol.\n(D) is wrong because rate depends on the activation energy, not on ΔH; nothing indicates which reaction is more exothermic, and exothermicity does not set the rate."
  },
  {
   "id": "ce3-18",
   "unit": 4,
   "stem": "A 0.500 g sample of potassium hydrogen phthalate, KHP (molar mass 204.2 g/mol), a monoprotic acid, is titrated to the equivalence point with 24.5 mL of NaOH solution. What is the concentration of the NaOH solution?",
   "choices": [
    "0.490 M",
    "0.200 M",
    "0.100 M",
    "0.0500 M"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.100 M. At the equivalence point, moles of NaOH added equal moles of the monoprotic acid KHP, because they react 1 : 1 (HP⁻ + OH⁻ → P²⁻ + H₂O). Moles of KHP = 0.500 g ÷ 204.2 g/mol = 2.449 × 10⁻³ mol. So [NaOH] = 2.449 × 10⁻³ mol ÷ 0.0245 L = 0.0999 M, which rounds to 0.100 M with three significant figures.\n\n(A) is wrong because at 0.490 M, 24.5 mL of NaOH would contain 0.0120 mol of OH⁻, enough to neutralize about 2.45 g of KHP, not 0.500 g.\n(B) is wrong because 0.200 M is twice the correct value, as if KHP were diprotic and needed 2 mol of NaOH per mole; KHP has only one acidic H.\n(D) is wrong because 0.0500 M is half the correct value, as if 2 mol of KHP reacted with each mole of NaOH; the reaction is 1 : 1."
  },
  {
   "id": "ce3-19",
   "unit": 8,
   "stem": "A 1.0 M solution of HCl and a 1.0 M solution of acetic acid are compared. Which statement is correct?",
   "choices": [
    "The acetic acid solution has the lower pH, because it has more atoms.",
    "The two solutions have the same pH, because their concentrations are equal.",
    "The HCl solution has the higher pH, because it is a stronger acid.",
    "The HCl solution has the lower pH, because HCl is a strong acid that dissociates completely."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The HCl solution has the lower pH, because HCl is a strong acid that dissociates completely. pH depends on [H₃O⁺], not just on the acid's concentration. HCl is a strong acid that ionizes completely, so 1.0 M HCl has [H₃O⁺] = 1.0 M and pH = 0.00. Acetic acid is weak (K<sub>a</sub> = 1.8 × 10⁻⁵), so [H₃O⁺] ≈ √((1.8 × 10⁻⁵)(1.0)) = 4.2 × 10⁻³ M and pH ≈ 2.4. More H₃O⁺ means a lower pH, so the HCl solution has the lower pH.\n\n(A) is wrong because acidity depends on how much H₃O⁺ forms, not on the number of atoms; acetic acid ionizes only slightly, so its pH is higher (about 2.4).\n(B) is wrong because equal concentrations give equal pH only if both acids ionize to the same extent; HCl ionizes completely while acetic acid ionizes less than 1%.\n(C) is wrong because the stronger acid produces more H₃O⁺ and therefore has the lower pH, not the higher; this reverses the pH scale."
  },
  {
   "id": "ce3-20",
   "unit": 7,
   "stem": "A catalyst is added to a reaction mixture that is at equilibrium at constant temperature. Which statement is correct?",
   "choices": [
    "The equilibrium position does not change, because both reactions speed up equally",
    "The equilibrium shifts toward the products, because the forward reaction becomes faster",
    "The value of K increases, because the activation energy of the reaction is lower",
    "The equilibrium shifts toward the reactants, because the catalyst is used up in the reaction"
   ],
   "correct": 0,
   "explanation": "Correct: (A) The equilibrium position does not change, because both reactions speed up equally. A catalyst provides a new pathway with a lower activation energy for both the forward and the reverse reaction, lowering both barriers by the same amount. Both rates increase by the same factor, so the ratio k<sub>f</sub>/k<sub>r</sub> = K is unchanged. A system already at equilibrium stays at equilibrium: the concentrations and K do not change. A catalyst only helps a system reach equilibrium faster.\n\n(B) is wrong because the reverse reaction is sped up by exactly the same factor as the forward reaction, so neither direction is favored and no shift occurs.\n(C) is wrong because K depends only on temperature (and on ΔG°, which a catalyst does not change); lowering E<sub>a</sub> for both directions leaves K unchanged.\n(D) is wrong because a catalyst is regenerated, not used up, and even if it were consumed, that would not alter the equilibrium position or K."
  },
  {
   "id": "ce3-21",
   "unit": 3,
   "setId": "ce3-set4",
   "stem": "What does the triple point of the substance represent?",
   "choices": [
    "The highest temperature at which the liquid phase of the substance can exist",
    "The temperature at which the vapor pressure equals the external atmospheric pressure",
    "The point at which the solid melts when the pressure is exactly one atmosphere",
    "The one temperature and pressure at which all three phases are in equilibrium"
   ],
   "correct": 3,
   "explanation": "Correct: (D) The one temperature and pressure at which all three phases are in equilibrium. On a phase diagram, each line shows the conditions at which two phases are in equilibrium. The triple point is where the solid–liquid, liquid–gas, and solid–gas lines meet, so it is the single combination of temperature and pressure at which solid, liquid, and gas all coexist in equilibrium. In the diagram it is the dot where all three boundary lines meet, low on the pressure axis; for water it is 0.01 °C and 0.006 atm.\n\n(A) is wrong because the highest temperature at which a liquid can exist is the critical point, where the liquid–gas line ends, not the triple point.\n(B) is wrong because a vapor pressure equal to the external pressure defines the boiling point, a point on the liquid–gas line rather than the meeting point of all three lines.\n(C) is wrong because the melting point at exactly 1 atm (the normal melting point) is a point on the solid–liquid line, generally not at the triple point."
  },
  {
   "id": "ce3-22",
   "unit": 3,
   "setId": "ce3-set4",
   "stem": "Under which conditions will the solid sublime rather than melt when heated?",
   "choices": [
    "At a pressure below the pressure of the triple point",
    "At a pressure above the pressure of the critical point",
    "At any pressure, if the heating is slow enough",
    "At a temperature below the triple-point temperature, at any pressure"
   ],
   "correct": 0,
   "explanation": "Correct: (A) At a pressure below the pressure of the triple point. Heating at constant pressure moves horizontally across the phase diagram. Below the triple-point pressure, a horizontal line passes from the solid region directly into the gas region, crossing only the solid–gas boundary, so the solid sublimes without ever becoming a liquid. Above the triple-point pressure, the same line crosses the solid–liquid boundary first, so the solid melts. Dry ice sublimes at 1 atm because its triple point is at 5.1 atm.\n\n(B) is wrong because above the critical pressure, heating the solid crosses the solid–liquid line first, so it melts (and then becomes a supercritical fluid), not sublimes.\n(C) is wrong because the rate of heating does not decide the phase change; the pressure determines which boundary the heating path crosses.\n(D) is wrong because starting below the triple-point temperature is not enough; at a pressure above the triple point, heating still crosses into the liquid region."
  },
  {
   "id": "ce3-23",
   "unit": 1,
   "stem": "Which of the following correctly compares the second ionization energies of sodium and magnesium?",
   "choices": [
    "Magnesium has the greater second ionization energy, because it has more protons.",
    "The two are about equal, because the elements are in the same period.",
    "Magnesium has the greater second ionization energy, because its second electron is in a 3p subshell.",
    "Sodium has the greater second ionization energy, because its second electron is removed from a filled inner shell."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Sodium has the greater second ionization energy, because its second electron is removed from a filled inner shell. Na is [Ne]3s¹ and Mg is [Ne]3s². The first ionization removes the 3s electron from each. For the second ionization, Mg⁺ ([Ne]3s¹) still has a valence 3s electron to lose, but Na⁺ has the stable neon core, so its second electron must come from the 2p subshell. A 2p electron is much closer to the nucleus and less shielded, so it is held far more tightly: IE₂ of Na is about 4560 kJ/mol, compared with about 1450 kJ/mol for Mg.\n\n(A) is wrong because Mg has more protons, but its second electron is a 3s valence electron, while sodium's comes from the inner n = 2 shell; the core electron dominates.\n(B) is wrong because being in the same period does not make second ionization energies similar; sodium's IE₂ is about three times magnesium's because it removes a core electron.\n(C) is wrong because the ground-state Mg⁺ ion is [Ne]3s¹, so its second electron comes from 3s, not 3p, and magnesium's IE₂ is the smaller one."
  },
  {
   "id": "ce3-24",
   "unit": 2,
   "stem": "Which of the following species has a bent molecular geometry?",
   "choices": [
    "CO₂",
    "BeCl₂",
    "HCN",
    "SO₂"
   ],
   "correct": 3,
   "explanation": "Correct: (D) SO₂. Use VSEPR. In SO₂, the sulfur atom has two bonding domains (to the two O atoms) and one lone pair, for three electron domains in a trigonal planar arrangement. With one position occupied by a lone pair, the molecular geometry is bent, with an O–S–O angle slightly less than 120° (about 119°). The other molecules all have exactly two electron domains on the central atom and no lone pairs, so they are linear.\n\n(A) is wrong because CO₂ (O=C=O) has two double-bond domains and no lone pairs on carbon, so it is linear with a 180° bond angle.\n(B) is wrong because BeCl₂ has only two bonding domains and no lone pairs on beryllium, so the domains point in opposite directions and the molecule is linear.\n(C) is wrong because HCN (H–C≡N) has two domains on carbon, a single bond and a triple bond, and no lone pairs, so it is linear."
  },
  {
   "id": "ce3-25",
   "unit": 7,
   "stem": "For the reaction 2 NO₂(g) ⇌ N₂O₄(g), the equilibrium concentrations are [NO₂] = 0.10 M and [N₂O₄] = 0.20 M. What is the value of K for the reaction?",
   "choices": [
    "400",
    "20",
    "10",
    "2.0"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 20. Write the equilibrium expression from the balanced equation, using coefficients as exponents: K = [N₂O₄]/[NO₂]². Substituting: K = (0.20)/(0.10)² = 0.20/0.010 = 20. The coefficient 2 on NO₂ is why its concentration is squared; forgetting it or using it as a multiplier gives some of the other choices.\n\n(A) is wrong because 400 is the square of the correct value (20²); it corresponds to the doubled equation, 4 NO₂ ⇌ 2 N₂O₄, not the reaction as written.\n(C) is wrong because 10 comes from multiplying the squared term by the coefficient as well, 0.20/(2 × (0.10)²) = 0.20/0.020 = 10; the coefficient belongs only in the exponent.\n(D) is wrong because 2.0 forgets to square [NO₂] (0.20/0.10 = 2.0); the coefficient 2 must become an exponent in K."
  },
  {
   "id": "ce3-26",
   "unit": 9,
   "setId": "ce3-set5",
   "stem": "In which direction do the nitrate ions (NO₃⁻) in the salt bridge move as the cell operates?",
   "choices": [
    "Toward the zinc half-cell, to balance the Zn²⁺ ions produced there",
    "Toward the silver half-cell, to balance the Ag⁺ ions consumed there",
    "They do not move, because they are not involved in the reaction",
    "Through the external wire along with the electrons"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Toward the zinc half-cell, to balance the Zn²⁺ ions produced there. Zinc is the anode (it has the lower reduction potential, and electrons leave it through the wire). Oxidation, Zn → Zn²⁺ + 2e⁻, adds positive ions to the left beaker, while reduction, Ag⁺ + e⁻ → Ag, removes positive ions from the right beaker. To keep both solutions electrically neutral, anions such as NO₃⁻ migrate through the salt bridge toward the anode (zinc) compartment, and cations such as K⁺ migrate toward the cathode (silver) compartment.\n\n(B) is wrong because the silver compartment loses Ag⁺, so it builds up excess negative charge; anions move away from it, while K⁺ cations move toward it.\n(C) is wrong because the nitrate ions are spectator ions in the reaction, but they carry charge through the salt bridge; without their movement the cell would stop.\n(D) is wrong because ions cannot travel through a metal wire; only electrons flow in the external circuit, while ions carry the current inside the salt bridge."
  },
  {
   "id": "ce3-27",
   "unit": 9,
   "setId": "ce3-set5",
   "stem": "Calculate E° for the cell shown.",
   "choices": [
    "0.04 V",
    "0.80 V",
    "1.56 V",
    "2.36 V"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.56 V. In a galvanic cell, the half-reaction with the higher reduction potential occurs as a reduction at the cathode: Ag⁺ + e⁻ → Ag (+0.80 V). Zinc is oxidized at the anode. Then E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = (+0.80 V) − (−0.76 V) = +1.56 V. The silver half-reaction is multiplied by 2 to balance the electrons, but E° is an intensive property and is not multiplied.\n\n(A) is wrong because 0.04 V comes from adding the two reduction potentials directly, (+0.80) + (−0.76), instead of subtracting the anode's potential.\n(B) is wrong because 0.80 V is only the cathode's reduction potential; it ignores the contribution of the zinc anode, which raises the cell potential.\n(D) is wrong because 2.36 V comes from doubling the silver potential to match the 2 electrons (2 × 0.80 + 0.76); E° values are never multiplied by coefficients."
  },
  {
   "id": "ce3-28",
   "unit": 4,
   "stem": "In the reaction Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g), which species acts as the oxidizing agent?",
   "choices": [
    "Zn",
    "Cl⁻",
    "H₂",
    "H⁺ (from HCl)"
   ],
   "correct": 3,
   "explanation": "Correct: (D) H⁺ (from HCl). The oxidizing agent is the species that gains electrons and is itself reduced. Assign oxidation numbers: Zn goes from 0 to +2 (oxidized, so Zn is the reducing agent), H goes from +1 in HCl (as H⁺) to 0 in H₂ (reduced), and Cl stays −1 throughout. The net ionic equation is Zn + 2 H⁺ → Zn²⁺ + H₂, so H⁺ accepts the electrons and is the oxidizing agent.\n\n(A) is wrong because Zn loses electrons (0 to +2), so it is oxidized; that makes it the reducing agent, not the oxidizing agent.\n(B) is wrong because Cl⁻ keeps an oxidation number of −1 on both sides; it is a spectator ion and gains or loses no electrons.\n(C) is wrong because H₂ is the product formed when H⁺ is reduced; it is the reduced form, not the agent that accepts electrons."
  },
  {
   "id": "ce3-29",
   "unit": 8,
   "stem": "Ammonia, NH₃, has K_b = 1.8 × 10⁻⁵. What is the approximate pH of a 0.10 M solution of NH₃?",
   "choices": [
    "13.00",
    "11.13",
    "2.87",
    "1.00"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 11.13. NH₃ is a weak base: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. With x = [OH⁻], K<sub>b</sub> = x²/(0.10 − x) ≈ x²/0.10, so x = √((1.8 × 10⁻⁵)(0.10)) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M (only 1.3% of 0.10 M, so the approximation is valid). Then pOH = −log(1.34 × 10⁻³) = 2.87 and pH = 14.00 − 2.87 = 11.13.\n\n(A) is wrong because 13.00 treats NH₃ as a strong base with [OH⁻] = 0.10 M; ammonia is weak and only about 1% ionizes.\n(C) is wrong because 2.87 is the pOH, not the pH; a basic solution must have pH above 7, so subtract it from 14.00.\n(D) is wrong because 1.00 is the pOH of a fully ionized 0.10 M base (or the pH of 0.10 M strong acid); it is acidic and ignores K<sub>b</sub>."
  },
  {
   "id": "ce3-30",
   "unit": 3,
   "stem": "Which of the following gases behaves most nearly like an ideal gas at 273 K and a high pressure?",
   "choices": [
    "He",
    "CO₂",
    "NH₃",
    "H₂O"
   ],
   "correct": 0,
   "explanation": "Correct: (A) He. A real gas behaves ideally when its particles have negligible volume and negligible attractions. At high pressure, molecules are crowded close together, so attractions and particle volume matter most, and the gas with the weakest attractions and smallest size deviates least. Helium is a tiny, nonpolar atom with only 2 electrons, so it has extremely weak London dispersion forces and the smallest particle volume of the choices; it is the most nearly ideal.\n\n(B) is wrong because CO₂ is a larger molecule with 22 electrons, so it has much stronger dispersion forces and larger volume; it condenses easily under pressure.\n(C) is wrong because NH₃ forms hydrogen bonds between molecules, a strong attraction that makes it deviate strongly from ideal behavior under pressure.\n(D) is wrong because H₂O forms strong hydrogen bonds and would condense to a liquid at 273 K and high pressure, the opposite of ideal-gas behavior."
  },
  {
   "id": "ce3-31",
   "unit": 7,
   "stem": "The solubility product constant of PbI₂ is K_sp = 1.4 × 10⁻⁸. What is the molar solubility of PbI₂ in pure water?",
   "choices": [
    "3.7 × 10⁻⁵ M",
    "1.2 × 10⁻⁴ M",
    "1.5 × 10⁻³ M",
    "1.4 × 10⁻⁸ M"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.5 × 10⁻³ M. Write the dissolution and the K<sub>sp</sub> expression: PbI₂(s) ⇌ Pb²⁺(aq) + 2 I⁻(aq). If s mol/L dissolves, [Pb²⁺] = s and [I⁻] = 2s. So K<sub>sp</sub> = (s)(2s)² = 4s³ = 1.4 × 10⁻⁸. Then s³ = 3.5 × 10⁻⁹ and s = (3.5 × 10⁻⁹)<sup>1/3</sup> = 1.5 × 10⁻³ M. Check: 4(1.5 × 10⁻³)³ = 1.4 × 10⁻⁸.\n\n(A) is wrong because 3.7 × 10⁻⁵ M is far too small: 4(3.7 × 10⁻⁵)³ = 2.0 × 10⁻¹³, which is nowhere near the given K<sub>sp</sub> of 1.4 × 10⁻⁸.\n(B) is wrong because 1.2 × 10⁻⁴ M is √K<sub>sp</sub>, the result for a 1 : 1 salt (K<sub>sp</sub> = s²); PbI₂ releases two iodide ions, so K<sub>sp</sub> = 4s³.\n(D) is wrong because 1.4 × 10⁻⁸ M is the K<sub>sp</sub> value itself; K<sub>sp</sub> is a product of ion concentrations, not the molar solubility."
  },
  {
   "id": "ce3-32",
   "unit": 8,
   "stem": "Which of the following aqueous solutions is basic?",
   "choices": [
    "NaCl",
    "NH₄Cl",
    "KNO₃",
    "NaCH₃COO"
   ],
   "correct": 3,
   "explanation": "Correct: (D) NaCH₃COO. Predict the pH of a salt solution from its ions. Na⁺ comes from the strong base NaOH and does not react with water. CH₃COO⁻ is the conjugate base of the weak acid CH₃COOH, so it hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. The OH⁻ produced makes the solution basic (a 0.10 M solution has pH ≈ 8.9).\n\n(A) is wrong because NaCl contains Na⁺ (from strong base NaOH) and Cl⁻ (from strong acid HCl); neither ion hydrolyzes, so the solution is neutral.\n(B) is wrong because NH₄Cl contains NH₄⁺, the conjugate acid of the weak base NH₃, which donates H⁺ to water and makes the solution acidic.\n(C) is wrong because KNO₃ contains K⁺ (from strong base KOH) and NO₃⁻ (from strong acid HNO₃); neither ion reacts with water, so the solution is neutral."
  },
  {
   "id": "ce3-33",
   "unit": 6,
   "stem": "Given: N₂(g) + O₂(g) → 2 NO(g), ΔH = +180 kJ; and 2 NO(g) + O₂(g) → 2 NO₂(g), ΔH = −114 kJ. What is ΔH for N₂(g) + 2 O₂(g) → 2 NO₂(g)?",
   "choices": [
    "+294 kJ",
    "+66 kJ",
    "−66 kJ",
    "−294 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) +66 kJ. Hess's law: adding the given equations adds their ΔH values. Equation 1: N₂ + O₂ → 2 NO, ΔH = +180 kJ. Equation 2: 2 NO + O₂ → 2 NO₂, ΔH = −114 kJ. Adding them, 2 NO cancels from both sides and the O₂ adds to 2 O₂, giving N₂ + 2 O₂ → 2 NO₂, exactly the target. So ΔH = (+180 kJ) + (−114 kJ) = +66 kJ. Neither equation needs to be reversed or scaled.\n\n(A) is wrong because +294 kJ subtracts the second ΔH, (+180) − (−114), as if equation 2 had been reversed; it is used as written.\n(C) is wrong because −66 kJ has the right magnitude but the wrong sign; +180 + (−114) is positive, so the overall reaction is endothermic.\n(D) is wrong because −294 kJ reverses equation 1 (−180) and then subtracts 114; neither step is needed, because the equations add directly to the target."
  },
  {
   "id": "ce3-34",
   "unit": 2,
   "stem": "Metals can be hammered into thin sheets without breaking, whereas ionic crystals shatter when struck. Which statement best explains the behavior of metals?",
   "choices": [
    "Positive ions in a sea of delocalized electrons let layers slide without breaking bonds",
    "The metal atoms are held together by strong, directional covalent bonds that can bend",
    "The metal atoms transfer electrons to each other whenever the sheet is struck",
    "The metal atoms form a network held together only by weak London dispersion forces"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Positive ions in a sea of delocalized electrons let layers slide without breaking bonds. In metallic bonding, the valence electrons are delocalized in a \"sea\" that surrounds a lattice of positive metal ions. The bonding is nondirectional: when a force pushes one layer of ions past another, the electron sea simply flows with them and keeps holding the ions together, so the metal deforms (is malleable) instead of breaking. In an ionic crystal, shifting a layer brings ions of like charge side by side, and their repulsion splits the crystal.\n\n(B) is wrong because metals are not held by directional covalent bonds; directional bonds (as in diamond) would break when bent, making the solid brittle.\n(C) is wrong because electrons are already delocalized throughout the metal; striking it does not set off electron transfer, and transfer would not explain malleability.\n(D) is wrong because metallic bonds are strong (most metals melt at high temperatures); weak dispersion forces alone could not hold a metal sheet together."
  },
  {
   "id": "ce3-35",
   "unit": 8,
   "stem": "A buffer is made from acetic acid (pK_a = 4.74) and sodium acetate. If the pH of the buffer is 4.50, what is the ratio [CH₃COO⁻]/[CH₃COOH]?",
   "choices": [
    "0.058",
    "0.58",
    "1.7",
    "17"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.58. Use the Henderson–Hasselbalch equation: pH = pK<sub>a</sub> + log([A⁻]/[HA]). Substituting: 4.50 = 4.74 + log(ratio), so log(ratio) = 4.50 − 4.74 = −0.24 and ratio = 10<sup>−0.24</sup> = 0.58. A ratio below 1 makes sense, because a pH below the pK<sub>a</sub> means the acid form, CH₃COOH, is present in excess over the acetate ion.\n\n(A) is wrong because 0.058 is ten times too small; it corresponds to log(ratio) = −1.24, a pH of 3.50 rather than 4.50.\n(C) is wrong because 1.7 is the inverse ratio, [CH₃COOH]/[CH₃COO⁻] = 10<sup>0.24</sup>; it would put the pH above the pK<sub>a</sub>.\n(D) is wrong because 17 corresponds to log(ratio) = +1.24, a pH of 5.98; it inverts the ratio and also slips a decimal place."
  },
  {
   "id": "ce3-36",
   "unit": 7,
   "stem": "For a reaction at a certain temperature, K = 1.2. A mixture of reactants and products has Q = 5.0. Which statement is correct?",
   "choices": [
    "The reaction proceeds in the forward direction to reach equilibrium.",
    "The system is at equilibrium.",
    "The value of K changes until it equals Q.",
    "The reaction proceeds in the reverse direction to reach equilibrium."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The reaction proceeds in the reverse direction to reach equilibrium. Compare the reaction quotient Q with K. Q has the same form as K but uses the current concentrations. Here Q = 5.0 is larger than K = 1.2, which means the mixture has too much product relative to reactant for equilibrium. The net reaction therefore runs in the reverse direction, converting products to reactants, which lowers Q until Q = K = 1.2.\n\n(A) is wrong because the forward direction is favored only when Q < K; here Q (5.0) exceeds K (1.2), so the forward reaction would move Q further from K.\n(B) is wrong because equilibrium requires Q = K exactly; here Q = 5.0 and K = 1.2, so the system is not at equilibrium.\n(C) is wrong because K is a constant at a given temperature; it is Q that changes as the concentrations adjust, until Q equals K."
  },
  {
   "id": "ce3-37",
   "unit": 2,
   "stem": "In the ozone molecule, O₃, the two oxygen–oxygen bonds are found to have the same length, intermediate between that of a single bond and a double bond. Which statement best explains this?",
   "choices": [
    "The actual structure is a resonance hybrid of two Lewis structures, with the electrons delocalized over the molecule.",
    "The molecule rapidly alternates between a structure with a single bond and a structure with a double bond.",
    "One of the bonds is a coordinate covalent bond, which is shorter.",
    "Ozone is an ionic compound."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The actual structure is a resonance hybrid of two Lewis structures, with the electrons delocalized over the molecule. No single Lewis structure of O₃ fits the data: each one shows one O–O single bond and one O=O double bond, which would have different lengths. The true structure is a resonance hybrid of the two equivalent Lewis structures. One pair of π electrons is delocalized over all three oxygen atoms, so each O–O bond has a bond order of 1.5 and an identical length (128 pm), between that of an O–O single bond (148 pm) and an O=O double bond (121 pm).\n\n(B) is wrong because resonance structures are not real states the molecule switches between; the molecule has one fixed hybrid structure with equal bonds at all times.\n(C) is wrong because a coordinate covalent bond is an ordinary covalent bond once formed and would not make one bond shorter; the two bonds are measured equal.\n(D) is wrong because ozone is made of three nonmetal atoms of the same element sharing electrons, so its bonds are covalent; it has no ions."
  },
  {
   "id": "ce3-38",
   "unit": 3,
   "stem": "What mass of zinc is needed to produce 2.24 L of H₂ gas at STP in the reaction Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)? (Molar mass of Zn = 65.4 g/mol; 1 mol of gas occupies 22.4 L at STP.)",
   "choices": [
    "65.4 g",
    "13.1 g",
    "6.54 g",
    "0.654 g"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6.54 g. Use stoichiometry from gas volume to mass. At STP, 1 mol of gas occupies 22.4 L, so moles of H₂ = 2.24 L ÷ 22.4 L/mol = 0.100 mol. The balanced equation shows 1 mol Zn produces 1 mol H₂, so 0.100 mol Zn is needed. Mass of Zn = (0.100 mol)(65.4 g/mol) = 6.54 g.\n\n(A) is wrong because 65.4 g is the mass of one full mole of zinc; it skips converting 2.24 L of H₂ to 0.100 mol.\n(B) is wrong because 13.1 g uses the 2 : 1 ratio of HCl to H₂ (0.200 mol) for zinc; zinc and H₂ are in a 1 : 1 ratio.\n(D) is wrong because 0.654 g corresponds to 0.0100 mol of Zn, a decimal-place slip in 2.24 ÷ 22.4, which equals 0.100, not 0.0100."
  },
  {
   "id": "ce3-39",
   "unit": 3,
   "stem": "A sample of gas has a volume of 2.0 L at a temperature of 300 K and a pressure of 1.0 atm. The gas is heated to 450 K and compressed to a volume of 1.5 L. What is the final pressure?",
   "choices": [
    "3.0 atm",
    "2.0 atm",
    "1.3 atm",
    "0.75 atm"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2.0 atm. Use the combined gas law, P₁V₁/T₁ = P₂V₂/T₂, with temperatures in kelvins. Solving for P₂: P₂ = P₁ × (V₁/V₂) × (T₂/T₁) = (1.0 atm)(2.0 L/1.5 L)(450 K/300 K) = (1.0 atm)(1.33)(1.50) = 2.0 atm. Both changes raise the pressure: heating multiplies it by 1.5 and compressing multiplies it by 4/3.\n\n(A) is wrong because 3.0 atm omits dividing by the final volume: (1.0)(2.0)(450)/300 = 3.0; V₂ = 1.5 L must also appear in the denominator.\n(C) is wrong because 1.3 atm includes only the volume change (Boyle's law, 1.0 × 2.0/1.5); it ignores the heating from 300 K to 450 K.\n(D) is wrong because 0.75 atm uses the volume ratio upside down (1.5/2.0) and ignores the temperature; compression must raise the pressure, not lower it."
  },
  {
   "id": "ce3-40",
   "unit": 4,
   "stem": "Which of the following reactions is a precipitation reaction?",
   "choices": [
    "Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq)",
    "2 H₂(g) + O₂(g) → 2 H₂O(l)",
    "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    "2 Mg(s) + O₂(g) → 2 MgO(s)"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq). A precipitation reaction occurs when two solutions of soluble ionic compounds are mixed and an insoluble ionic solid forms. In choice A, aqueous Pb(NO₃)₂ and KI exchange partners, and Pb²⁺ combines with I⁻ to form PbI₂(s), a bright yellow insoluble solid, while K⁺ and NO₃⁻ remain in solution. The net ionic equation is Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s).\n\n(B) is wrong because 2 H₂ + O₂ → 2 H₂O is a combination (synthesis) and redox reaction of two gases; no ions in solution form an insoluble solid.\n(C) is wrong because HCl + NaOH → NaCl + H₂O is an acid–base neutralization; the products are water and the soluble salt NaCl, so no precipitate forms.\n(D) is wrong because 2 Mg + O₂ → 2 MgO forms a solid, but from an element and a gas (combination and redox), not from mixing two aqueous solutions."
  },
  {
   "id": "ce3-41",
   "unit": 6,
   "stem": "Which of the following correctly describes the energy changes associated with bonds in a chemical reaction?",
   "choices": [
    "Energy is released when bonds are broken, and energy is absorbed when bonds are formed.",
    "Energy is absorbed both when bonds are broken and when bonds are formed.",
    "Energy is absorbed when bonds are broken, and energy is released when bonds are formed.",
    "Energy is released both when bonds are broken and when bonds are formed."
   ],
   "correct": 2,
   "explanation": "Correct: (C) Energy is absorbed when bonds are broken, and energy is released when bonds are formed. A chemical bond is a lower-energy arrangement than the separated atoms. Breaking a bond requires an input of energy to pull the atoms apart, so bond breaking is endothermic. Forming a bond releases energy as the atoms settle into the more stable arrangement, so bond formation is exothermic. The overall ΔH ≈ Σ(bonds broken) − Σ(bonds formed); a reaction is exothermic when the bonds formed are stronger than the bonds broken.\n\n(A) is wrong because this reverses both processes; breaking a bond always costs energy, and forming a bond always releases it.\n(B) is wrong because bond formation releases energy (the atoms reach a lower-energy state); absorbing energy happens only when bonds break.\n(D) is wrong because bond breaking requires energy input; if both breaking and forming released energy, every reaction would be exothermic, which is false."
  },
  {
   "id": "ce3-42",
   "unit": 4,
   "stem": "What mass of CO₂ is produced when 11.0 g of propane, C₃H₈ (molar mass 44.0 g/mol), is burned completely in excess oxygen? C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (molar mass of CO₂ = 44.0 g/mol)",
   "choices": [
    "132 g",
    "33.0 g",
    "22.0 g",
    "11.0 g"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 33.0 g. Convert grams of propane to moles, use the mole ratio, then convert to grams of CO₂. Moles C₃H₈ = 11.0 g ÷ 44.0 g/mol = 0.250 mol. The balanced equation gives 3 mol CO₂ per 1 mol C₃H₈, so moles CO₂ = 3 × 0.250 = 0.750 mol. Mass CO₂ = (0.750 mol)(44.0 g/mol) = 33.0 g. Mass check: the CO₂ mass exceeds the propane mass because oxygen atoms from O₂ are added.\n\n(A) is wrong because 132 g is 3 × 44.0 g, the CO₂ from a full mole of propane; it skips converting 11.0 g to 0.250 mol.\n(C) is wrong because 22.0 g uses a 2 : 1 mole ratio (0.500 mol CO₂); the balanced equation shows 3 mol CO₂ per mole of C₃H₈.\n(D) is wrong because 11.0 g assumes a 1 : 1 mole ratio (0.250 mol CO₂); each propane has three carbon atoms, so three CO₂ form."
  },
  {
   "id": "ce3-43",
   "unit": 8,
   "setId": "ce3-set6",
   "stem": "Which conjugate base is the strongest?",
   "choices": [
    "A₂⁻",
    "A₃⁻",
    "A₁⁻",
    "All three conjugate bases have the same strength."
   ],
   "correct": 1,
   "explanation": "Correct: (B) A₃⁻. The strength of a conjugate base is inversely related to the strength of its acid, because K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub>. From the table, HA₃ has the smallest K<sub>a</sub> (1 × 10⁻⁸), so it is the weakest acid. Its conjugate base therefore has the largest K<sub>b</sub>: K<sub>b</sub> = (1.0 × 10⁻¹⁴)/(1 × 10⁻⁸) = 1 × 10⁻⁶, making A₃⁻ the strongest conjugate base.\n\n(A) is wrong because A₂⁻ comes from HA₂ (K<sub>a</sub> = 1 × 10⁻⁵), a stronger acid than HA₃, so A₂⁻ is a weaker base (K<sub>b</sub> = 1 × 10⁻⁹).\n(C) is wrong because A₁⁻ comes from the strongest acid, HA₁ (K<sub>a</sub> = 1 × 10⁻³), so it is the weakest conjugate base (K<sub>b</sub> = 1 × 10⁻¹¹).\n(D) is wrong because the three acids have different K<sub>a</sub> values, so by K<sub>a</sub>K<sub>b</sub> = K<sub>w</sub> their conjugate bases have different K<sub>b</sub> values."
  },
  {
   "id": "ce3-44",
   "unit": 8,
   "setId": "ce3-set6",
   "stem": "Which acid and its conjugate base would make the most effective buffer at a pH of 5?",
   "choices": [
    "HA₁ and A₁⁻",
    "HA₃ and A₃⁻",
    "Any of the three would be equally effective.",
    "HA₂ and A₂⁻"
   ],
   "correct": 3,
   "explanation": "Correct: (D) HA₂ and A₂⁻. A buffer resists pH change best when the pH is near the pK<sub>a</sub> of its weak acid (within about ±1 unit), because then [HA] and [A⁻] are both substantial. Convert each K<sub>a</sub> to pK<sub>a</sub>: HA₁, pK<sub>a</sub> = 3.0; HA₂, pK<sub>a</sub> = 5.0; HA₃, pK<sub>a</sub> = 8.0. Only HA₂ matches pH 5, where it can be used with a 1 : 1 ratio of HA₂ to A₂⁻ for maximum capacity.\n\n(A) is wrong because HA₁ has pK<sub>a</sub> = 3.0, two units below pH 5; reaching pH 5 would require a 100 : 1 ratio of A₁⁻ to HA₁, a poor buffer.\n(B) is wrong because HA₃ has pK<sub>a</sub> = 8.0, three units above pH 5; the mixture would be almost entirely HA₃, with too little A₃⁻ to buffer.\n(C) is wrong because buffers are not equally effective at all pH values; effectiveness depends on how close the pH is to each acid's pK<sub>a</sub>."
  },
  {
   "id": "ce3-45",
   "unit": 3,
   "stem": "How many times faster does helium (4.0 g/mol) effuse than methane, CH₄ (16.0 g/mol), at the same temperature?",
   "choices": [
    "1/2",
    "2",
    "4",
    "8"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2. Graham's law: at the same temperature, gas particles have the same average kinetic energy, so lighter particles move faster, and rate₁/rate₂ = √(M₂/M₁). For helium versus methane: rate<sub>He</sub>/rate<sub>CH₄</sub> = √(16.0 g/mol ÷ 4.0 g/mol) = √4.0 = 2.0. Helium effuses twice as fast as methane, so in the time 1 mol of CH₄ escapes through a pinhole, 2 mol of He escape.\n\n(A) is wrong because 1/2 is the ratio the other way around, rate<sub>CH₄</sub>/rate<sub>He</sub>; the lighter helium effuses faster, so its relative rate is greater than 1.\n(C) is wrong because 4 is the ratio of the molar masses (16.0/4.0) without taking the square root that Graham's law requires.\n(D) is wrong because 8 has no basis in Graham's law; the rate ratio is the square root of the mass ratio, which is only √4 = 2."
  },
  {
   "id": "ce3-46",
   "unit": 8,
   "stem": "At 50 °C, the ion-product constant of water is K_w = 5.5 × 10⁻¹⁴. What is the pH of pure water at this temperature?",
   "choices": [
    "12.7",
    "7.26",
    "7.00",
    "6.63"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 6.63. Pure water is neutral at every temperature, meaning [H⁺] = [OH⁻]. So [H⁺]² = K<sub>w</sub> and [H⁺] = √(5.5 × 10⁻¹⁴) = 2.3 × 10⁻⁷ M. Then pH = −log(2.3 × 10⁻⁷) = 6.63. Water's autoionization is endothermic, so K<sub>w</sub> increases with temperature and neutral pH falls below 7, even though the water is not acidic.\n\n(A) is wrong because a pH of 12.7 is strongly basic, impossible for pure water where [H⁺] = [OH⁻]; it does not follow from the given K<sub>w</sub>.\n(B) is wrong because 7.26 corresponds to [H⁺] = 5.5 × 10⁻⁸ M; it misplaces the K<sub>w</sub> digits instead of taking the square root, and a higher K<sub>w</sub> must give pH below 7.\n(C) is wrong because 7.00 is the neutral pH only at 25 °C, where K<sub>w</sub> = 1.0 × 10⁻¹⁴; at 50 °C the larger K<sub>w</sub> gives a neutral pH of 6.63."
  },
  {
   "id": "ce3-47",
   "unit": 3,
   "stem": "A colored solution has a molar absorptivity of 150 M⁻¹ cm⁻¹ at a certain wavelength. In a cuvette with a path length of 1.0 cm, the absorbance of the solution is 0.60. What is the concentration of the solution?",
   "choices": [
    "2.5 × 10⁻³ M",
    "4.0 × 10⁻³ M",
    "9.0 × 10⁻² M",
    "2.5 × 10² M"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 4.0 × 10⁻³ M. The Beer–Lambert law is A = εbc, where ε is the molar absorptivity, b the path length, and c the concentration. Solving for c: c = A/(εb) = 0.60 ÷ [(150 M⁻¹ cm⁻¹)(1.0 cm)] = 0.60/150 M = 4.0 × 10⁻³ M. Absorbance has no units, so the units of εb (M⁻¹) leave c in M.\n\n(A) is wrong because 2.5 × 10⁻³ M would give A = (150)(1.0)(2.5 × 10⁻³) = 0.375, not the measured 0.60, so it does not satisfy A = εbc.\n(C) is wrong because 9.0 × 10⁻² M would give A = (150)(1.0)(0.090) = 13.5, more than 20 times the measured 0.60; the concentration must equal A/(εb) = 0.60/150 = 4.0 × 10⁻³ M.\n(D) is wrong because 2.5 × 10² M is εb/A (150/0.60), the reciprocal of the correct expression; the concentration must be A divided by εb."
  },
  {
   "id": "ce3-48",
   "unit": 1,
   "stem": "How many protons, neutrons, and electrons are in an ion of ⁵⁶Fe²⁺? (The atomic number of iron is 26.)",
   "choices": [
    "26 protons, 30 neutrons, 24 electrons",
    "26 protons, 30 neutrons, 28 electrons",
    "24 protons, 32 neutrons, 24 electrons",
    "26 protons, 56 neutrons, 24 electrons"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 26 protons, 30 neutrons, 24 electrons. The atomic number Z = 26 gives the number of protons, which defines iron. The mass number 56 is protons plus neutrons, so neutrons = 56 − 26 = 30. A neutral iron atom has 26 electrons; the 2+ charge means two electrons have been lost (to [Ar]3d⁶), so the ion has 26 − 2 = 24 electrons.\n\n(B) is wrong because 28 electrons would be a 2− ion; a positive charge means electrons were lost, not gained.\n(C) is wrong because the proton number must equal the atomic number, 26; changing protons would change the element, and 24 protons would be chromium.\n(D) is wrong because 56 is the mass number (protons + neutrons), not the number of neutrons alone; subtract the 26 protons to get 30 neutrons."
  },
  {
   "id": "ce3-49",
   "unit": 8,
   "stem": "What is the pH of a 0.025 M solution of Ba(OH)₂ at 25 °C?",
   "choices": [
    "12.70",
    "12.40",
    "1.60",
    "1.30"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 12.70. Ba(OH)₂ is a strong base that dissociates completely and releases two hydroxide ions per formula unit: Ba(OH)₂ → Ba²⁺ + 2 OH⁻. So [OH⁻] = 2 × 0.025 M = 0.050 M. pOH = −log(0.050) = 1.30, and at 25 °C pH = 14.00 − 1.30 = 12.70.\n\n(B) is wrong because 12.40 uses [OH⁻] = 0.025 M (pOH = 1.60), forgetting that each Ba(OH)₂ releases two OH⁻ ions.\n(C) is wrong because 1.60 is the pOH from [OH⁻] = 0.025 M; it both forgets the factor of 2 and fails to convert pOH to pH.\n(D) is wrong because 1.30 is the pOH, not the pH; a solution of a strong base must have a pH well above 7, so subtract from 14.00."
  },
  {
   "id": "ce3-50",
   "unit": 2,
   "stem": "Which of the following carbon–carbon bonds is the shortest?",
   "choices": [
    "C=C in ethene (H₂C=CH₂)",
    "C≡C in ethyne (HC≡CH)",
    "C–C in ethane (H₃C–CH₃)",
    "All of the C–C bonds have the same length."
   ],
   "correct": 1,
   "explanation": "Correct: (B) C≡C in ethyne (HC≡CH). Bond length decreases as bond order increases: more shared electron pairs between the same two atoms pull the nuclei closer and hold them more strongly. The carbon–carbon triple bond in ethyne (bond order 3) is about 120 pm long, compared with about 134 pm for the double bond in ethene and 154 pm for the single bond in ethane. So the triple bond is both the shortest and the strongest.\n\n(A) is wrong because the C=C double bond (about 134 pm) has bond order 2, so it is shorter than a single bond but longer than the triple bond.\n(C) is wrong because the C–C single bond in ethane (about 154 pm) has the lowest bond order, so it is the longest carbon–carbon bond listed.\n(D) is wrong because the bonds differ in the number of shared pairs, so their lengths differ; a higher bond order always gives a shorter bond between the same atoms."
  },
  {
   "id": "ce3-51",
   "unit": 2,
   "stem": "Magnesium oxide, MgO, melts at 2852 °C, while sodium chloride, NaCl, melts at 801 °C. Which statement best explains this difference?",
   "choices": [
    "MgO is a molecular solid with much stronger intermolecular forces than NaCl has",
    "The oxide ion is a larger ion than the chloride ion, so the ions pack more tightly",
    "MgO has ions with greater charges (2+ and 2−), so the lattice attractions are stronger",
    "NaCl has stronger ionic bonds because the Na⁺ ion is smaller than the Mg²⁺ ion"
   ],
   "correct": 2,
   "explanation": "Correct: (C) MgO has ions with greater charges (2+ and 2−), so the lattice attractions are stronger. Both are ionic solids, and melting requires overcoming the Coulombic attraction between ions, which is proportional to q₁q₂/r. Mg²⁺ and O²⁻ carry double charges, so the charge product is 4, versus 1 for Na⁺ and Cl⁻. The ions in MgO are also somewhat smaller (Mg²⁺ is smaller than Na⁺, O²⁻ smaller than Cl⁻), so r is smaller too. Both effects make the MgO lattice energy much larger, giving its much higher melting point.\n\n(A) is wrong because MgO is an ionic solid, a lattice of Mg²⁺ and O²⁻ ions, not a molecular solid; molecular solids melt at low temperatures.\n(B) is wrong because O²⁻ (about 140 pm) is smaller than Cl⁻ (about 181 pm), not larger, and larger ions would weaken the attraction anyway.\n(D) is wrong because Na⁺ is larger than Mg²⁺, not smaller, and MgO has the stronger lattice, as its far higher melting point shows."
  },
  {
   "id": "ce3-52",
   "unit": 9,
   "stem": "Use the standard free energies of formation (in kJ/mol): CH₄(g) = −50.8, CO₂(g) = −394.4, H₂O(l) = −237.1. What is ΔG° for CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)?",
   "choices": [
    "−1,083 kJ",
    "−818 kJ",
    "−581 kJ",
    "+818 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) −818 kJ. Use ΔG° = ΣnΔG<sub>f</sub>°(products) − ΣnΔG<sub>f</sub>°(reactants), remembering that ΔG<sub>f</sub>° of an element in its standard state (O₂) is zero. Products: (−394.4) + 2(−237.1) = −868.6 kJ. Reactants: (−50.8) + 2(0) = −50.8 kJ. ΔG° = −868.6 − (−50.8) = −817.8 kJ ≈ −818 kJ. The large negative value shows that the combustion of methane is strongly thermodynamically favorable.\n\n(A) is wrong because −1,083 kJ is far more negative than products minus reactants allows; even the common slip of adding CH₄'s value instead of subtracting it gives only −919 kJ.\n(C) is wrong because −581 kJ forgets the coefficient 2 on H₂O: (−394.4 − 237.1) − (−50.8) = −580.7 kJ.\n(D) is wrong because +818 kJ has the sign reversed (reactants minus products); methane combustion is strongly spontaneous, so ΔG° is negative."
  },
  {
   "id": "ce3-53",
   "unit": 3,
   "stem": "A mixture contains 2.0 mol of He and 3.0 mol of Ne at a total pressure of 5.0 atm. What is the partial pressure of He?",
   "choices": [
    "5.0 atm",
    "3.0 atm",
    "2.0 atm",
    "1.0 atm"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.0 atm. Dalton's law: each gas's partial pressure is its mole fraction times the total pressure. Total moles = 2.0 + 3.0 = 5.0 mol, so the mole fraction of He is χ<sub>He</sub> = 2.0/5.0 = 0.40. Then P<sub>He</sub> = (0.40)(5.0 atm) = 2.0 atm. Check: P<sub>Ne</sub> = (0.60)(5.0 atm) = 3.0 atm, and 2.0 + 3.0 = 5.0 atm, the total.\n\n(A) is wrong because 5.0 atm is the total pressure of the mixture; helium contributes only its share, 40% of the moles.\n(B) is wrong because 3.0 atm is the partial pressure of neon, the gas with 3.0 mol; it uses the wrong gas's mole fraction.\n(D) is wrong because 1.0 atm is the total pressure divided by the total moles (pressure per mole); it must still be multiplied by helium's 2.0 mol."
  },
  {
   "id": "ce3-54",
   "unit": 5,
   "stem": "For a second-order reaction of the type 2 A → products, which of the following plots gives a straight line?",
   "choices": [
    "[A] versus time",
    "ln[A] versus time",
    "[A]² versus time",
    "1/[A] versus time"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 1/[A] versus time. For a reaction that is second order in A, the integrated rate law is 1/[A] = kt + 1/[A]₀. This has the form y = mx + b, so plotting 1/[A] against time gives a straight line with slope k and intercept 1/[A]₀. Graphing data three ways ([A], ln[A], and 1/[A] vs t) and seeing which is linear is the standard way to identify the order.\n\n(A) is wrong because [A] versus time is linear only for a zero-order reaction, where [A] = [A]₀ − kt.\n(B) is wrong because ln[A] versus time is linear for a first-order reaction, where ln[A] = ln[A]₀ − kt.\n(C) is wrong because [A]² versus time does not correspond to any standard integrated rate law and is not linear for a second-order reaction."
  },
  {
   "id": "ce3-55",
   "unit": 9,
   "stem": "Which of the following has the greatest entropy at 298 K?",
   "choices": [
    "1 mol of H₂O(l)",
    "1 mol of H₂O(s)",
    "1 mol of H₂O(g)",
    "All have the same entropy, because they have the same number of molecules."
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1 mol of H₂O(g). Entropy measures the number of microstates (ways the energy and particles can be arranged). Gas molecules move freely throughout a large volume and have many translational, rotational, and vibrational states, so 1 mol of H₂O(g) has the greatest entropy (S° ≈ 189 J/(mol·K)), greater than liquid water (70 J/(mol·K)) and ice (about 41 J/(mol·K)). Entropy order: gas > liquid > solid.\n\n(A) is wrong because liquid water molecules can move past one another, but they stay close together, so they have far fewer microstates than the gas.\n(B) is wrong because ice has its molecules fixed in an ordered lattice, so it has the fewest microstates and the lowest entropy of the three.\n(D) is wrong because entropy depends on how freely the particles can move and be arranged, not just on how many there are; the phases differ greatly."
  },
  {
   "id": "ce3-56",
   "unit": 2,
   "stem": "How many sigma (σ) bonds and pi (π) bonds are in a molecule of ethene, C₂H₄?",
   "choices": [
    "4 sigma bonds and 2 pi bonds",
    "5 sigma bonds and 1 pi bond",
    "6 sigma bonds and 0 pi bonds",
    "3 sigma bonds and 3 pi bonds"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 5 sigma bonds and 1 pi bond. Every single bond is one σ bond; a double bond is one σ bond plus one π bond; a triple bond is one σ plus two π bonds. Ethene, H₂C=CH₂, has four C–H single bonds (4 σ) and one C=C double bond (1 σ + 1 π). Total: 4 + 1 = 5 σ bonds and 1 π bond. Each carbon is sp² hybridized, and the π bond comes from the side-on overlap of the unhybridized p orbitals.\n\n(A) is wrong because a double bond contains only one π bond; this counts the C=C as two π bonds and leaves it with no σ bond.\n(C) is wrong because 6 σ and 0 π treats the double bond as two σ bonds; only one σ bond can lie along the C–C axis, so the second bond is π.\n(D) is wrong because C–H bonds are always σ bonds; this misassigns most of the bonds as π bonds, which form only in multiple bonds."
  },
  {
   "id": "ce3-57",
   "unit": 1,
   "stem": "Which of the following is the correct ground-state electron configuration of a chromium atom (Z = 24)?",
   "choices": [
    "[Ar] 4s¹ 3d⁵",
    "[Ar] 4s² 3d⁴",
    "[Ar] 4s² 3d⁶",
    "[Ar] 3d⁶"
   ],
   "correct": 0,
   "explanation": "Correct: (A) [Ar] 4s¹ 3d⁵. Chromium (Z = 24) would be predicted as [Ar]4s²3d⁴ by the Aufbau order, but the observed ground state is [Ar]4s¹3d⁵. Moving one electron from 4s into 3d gives two half-filled subshells with six unpaired electrons, and the exchange energy of the half-filled 3d⁵ set makes this arrangement lower in energy. Total electrons: 18 + 1 + 5 = 24. Copper shows a similar exception, [Ar]4s¹3d¹⁰.\n\n(B) is wrong because [Ar]4s²3d⁴ is the predicted Aufbau configuration, but chromium is an exception; the half-filled 3d⁵ arrangement is lower in energy.\n(C) is wrong because [Ar]4s²3d⁶ contains 26 electrons (18 + 2 + 6), which is the configuration of iron, not chromium.\n(D) is wrong because [Ar]3d⁶ also contains 24 electrons, but it empties the 4s orbital entirely; that is the configuration of the Fe²⁺ ion, not of neutral chromium, which keeps one 4s electron."
  },
  {
   "id": "ce3-58",
   "unit": 9,
   "stem": "A galvanic cell has a standard cell potential of E° = +0.46 V, with 2 mol of electrons transferred in the balanced reaction. What is the approximate value of the equilibrium constant K at 25 °C? (log K = nE°/0.0592)",
   "choices": [
    "1.0 × 10³",
    "3.5 × 10³¹",
    "3.5 × 10¹⁵",
    "3.5 × 10⁷"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 3.5 × 10¹⁵. The relation ΔG° = −nFE° = −RT ln K gives log K = nE°/0.0592 at 25 °C. Substituting: log K = (2)(0.46 V)/0.0592 V = 0.92/0.0592 = 15.5. Then K = 10<sup>15.54</sup> = 10<sup>0.54</sup> × 10¹⁵ = 3.5 × 10¹⁵. A positive E° always gives K > 1, and an E° of nearly half a volt gives a very large K, so the reaction goes essentially to completion.\n\n(A) is wrong because 1.0 × 10³ would need log K = 3, which corresponds to E° of only about 0.09 V for n = 2, far below the given 0.46 V.\n(B) is wrong because 3.5 × 10³¹ roughly doubles log K (to about 31.5), as if 4 mol of electrons were transferred; the reaction transfers only 2.\n(D) is wrong because 3.5 × 10⁷ uses about half the exponent, as if n = 1 (log K = 7.8); the reaction transfers 2 mol of electrons, so log K = 15.5."
  },
  {
   "id": "ce3-59",
   "unit": 1,
   "setId": "ce3-set7",
   "stem": "Use the spectrum to calculate the average atomic mass of chlorine.",
   "choices": [
    "36.5 amu",
    "36.0 amu",
    "35.5 amu",
    "35.0 amu"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 35.5 amu. The average atomic mass is the abundance-weighted mean of the isotope masses read from the spectrum: a peak at m/z 35 with 76% relative abundance and a peak at m/z 37 with 24%. Average = (0.76)(35) + (0.24)(37) = 26.6 + 8.88 = 35.48 ≈ 35.5 amu. The result lies much closer to 35 than to 37 because ³⁵Cl is about three times as abundant as ³⁷Cl.\n\n(A) is wrong because 36.5 amu lies closer to 37, which would require ³⁷Cl to be the more abundant isotope; the spectrum shows ³⁵Cl at 76%.\n(B) is wrong because 36.0 amu is the simple average of 35 and 37, ignoring that the two isotopes have very different abundances.\n(D) is wrong because 35.0 amu uses only the most abundant isotope and ignores the 24% of chlorine atoms that are ³⁷Cl."
  },
  {
   "id": "ce3-60",
   "unit": 1,
   "setId": "ce3-set7",
   "stem": "A mass spectrometer is used to analyze molecules of Cl₂ (forming Cl₂⁺ ions). At which mass-to-charge ratios would peaks appear?",
   "choices": [
    "70 and 74 only",
    "35 and 37 only",
    "70 and 72 only",
    "70, 72, and 74"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 70, 72, and 74. Chlorine has two isotopes, ³⁵Cl and ³⁷Cl, so a Cl₂ molecule can contain ³⁵Cl–³⁵Cl (m/z 70), ³⁵Cl–³⁷Cl (m/z 72), or ³⁷Cl–³⁷Cl (m/z 74). All three combinations occur, so peaks appear at 70, 72, and 74. Using the 0.76 and 0.24 abundances, the relative heights are about (0.76)² : 2(0.76)(0.24) : (0.24)² = 0.58 : 0.36 : 0.058, roughly 10 : 6 : 1.\n\n(A) is wrong because 70 and 74 only omits the mixed ³⁵Cl–³⁷Cl molecule at m/z 72, which is actually the second most abundant combination.\n(B) is wrong because 35 and 37 are the peaks for single Cl⁺ atoms; intact Cl₂⁺ ions have masses near 70 and above, not 35 or 37.\n(C) is wrong because 70 and 72 only omits the ³⁷Cl–³⁷Cl molecule at m/z 74; it is small (about 6%) but present."
  }
 ],
 "sets": {
  "ce3-set1": {
   "text": "A 10.0 g sample of ice at −20 °C is heated at a constant rate until it is all liquid water at 100 °C and then continues to be heated until it is all steam. The graph shows the temperature of the sample as a function of the thermal energy added, with the segments labeled A through D. (Specific heat of ice = 2.09 J/(g·°C); heat of fusion of water = 334 J/g; specific heat of liquid water = 4.18 J/(g·°C); heat of vaporization = 2260 J/g.)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-40</text><line x1=\"64\" y1=\"240.5\" x2=\"496\" y2=\"240.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"244.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-20</text><line x1=\"64\" y1=\"209\" x2=\"496\" y2=\"209\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"213\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"177.5\" x2=\"496\" y2=\"177.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"181.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"114.5\" x2=\"496\" y2=\"114.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"118.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"83\" x2=\"496\" y2=\"83\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"87\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"51.5\" x2=\"496\" y2=\"51.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"55.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"125.71\" y1=\"272\" x2=\"125.71\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"125.71\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"187.43\" y1=\"272\" x2=\"187.43\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"187.43\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"249.14\" y1=\"272\" x2=\"249.14\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"249.14\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">15</text><line x1=\"310.86\" y1=\"272\" x2=\"310.86\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"310.86\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"372.57\" y1=\"272\" x2=\"372.57\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"372.57\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">25</text><line x1=\"434.29\" y1=\"272\" x2=\"434.29\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"434.29\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">35</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Thermal energy added (kJ)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Temperature (°C)</text><path d=\"M64 240.5L69.16 209L110.38 209L161.98 51.5L440.93 51.5\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"66.47\" y=\"262.55\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">A</text><text x=\"84.98\" y=\"193.25\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">B</text><text x=\"129.42\" y=\"122.38\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">C</text><text x=\"286.17\" y=\"38.9\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">D</text></svg>",
     "alt": "A graph of temperature in degrees Celsius against thermal energy added in kilojoules for 10 grams of water. Segment A is a steep rise from minus 20 to 0 degrees, segment B is a flat line at 0 degrees, segment C is a rise from 0 to 100 degrees, and segment D is a long flat line at 100 degrees."
    }
   ]
  },
  "ce3-set2": {
   "text": "Kinetics data for the reaction A + B → products were collected in three experiments run at the same temperature. The results are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Experiment",
       "[A] (M)",
       "[B] (M)",
       "Initial rate (M/s)"
      ],
      "rows": [
       [
        "1",
        "0.10",
        "0.10",
        "1.5 × 10⁻²"
       ],
       [
        "2",
        "0.20",
        "0.10",
        "6.0 × 10⁻²"
       ],
       [
        "3",
        "0.10",
        "0.30",
        "1.5 × 10⁻²"
       ]
      ]
     }
    }
   ]
  },
  "ce3-set3": {
   "text": "The table shows the boiling points of the hydrides of the Group 14 elements, which are all nonpolar molecules.",
   "figures": [
    {
     "table": {
      "headers": [
       "Compound",
       "Molar mass (g/mol)",
       "Boiling point (°C)"
      ],
      "rows": [
       [
        "CH₄",
        "16.0",
        "−161.5"
       ],
       [
        "SiH₄",
        "32.1",
        "−111.9"
       ],
       [
        "GeH₄",
        "76.6",
        "−88.5"
       ],
       [
        "SnH₄",
        "122.7",
        "−52.0"
       ]
      ]
     }
    }
   ]
  },
  "ce3-set4": {
   "text": "A schematic phase diagram for a pure substance is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"62\" y1=\"268\" x2=\"456\" y2=\"268\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"22\" x2=\"62\" y2=\"268\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"259\" y=\"308\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Temperature</text><text x=\"18\" y=\"145\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 18 145)\">Pressure</text><path d=\"M81.7 260.62L172.32 218.8\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M172.32 218.8L156.56 26.920000000000016\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M172.32 218.8C239.3 204.04 337.79999999999995 145 400.84 66.28\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"172.32\" cy=\"218.8\" r=\"4.5\" fill=\"#2E332E\"/><circle cx=\"400.84\" cy=\"66.28\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"182.32\" y=\"236.8\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">triple point</text><text x=\"394.84\" y=\"56.28\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">critical point</text><text x=\"101.4\" y=\"115.48\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#767F73\">Solid</text><text x=\"278.7\" y=\"95.8\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#767F73\">Liquid</text><text x=\"306.28\" y=\"238.48\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#767F73\">Gas</text></svg>",
     "alt": "A schematic phase diagram of pressure against temperature with regions labeled solid, liquid, and gas. The three boundary lines meet at a triple point, and the liquid-gas line ends at a critical point."
    }
   ]
  },
  "ce3-set5": {
   "text": "A galvanic cell is constructed from a zinc electrode in 1.0 M Zn²⁺ and a silver electrode in 1.0 M Ag⁺, connected by a salt bridge containing KNO₃, as shown. Standard reduction potentials: Ag⁺ + e⁻ → Ag, E° = +0.80 V; Zn²⁺ + 2e⁻ → Zn, E° = −0.76 V.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"60\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"61\" y=\"165\" width=\"128\" height=\"84\" fill=\"#DCEBF3\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"330\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"331\" y=\"165\" width=\"128\" height=\"84\" fill=\"#E8F1DF\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"105\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"375\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"140\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Zn</text><text x=\"410\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Ag</text><text x=\"125\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Zn²⁺</text><text x=\"395\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Ag⁺</text><path d=\"M116 90L116 50L225 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M386 90L386 50L295 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"50\" r=\"22\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">V</text><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#D8D2C0\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"260\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">salt bridge</text><line x1=\"135\" y1=\"34\" x2=\"205\" y2=\"34\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"205,34 196.82,37.65 196.82,30.35\" fill=\"#2E332E\"/><text x=\"170\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">e⁻</text></svg>",
     "alt": "A galvanic cell with a zinc electrode in zinc ion solution on the left and a silver electrode in silver ion solution on the right, connected by a wire containing a voltmeter and a salt bridge. Electrons flow through the wire from the zinc toward the silver."
    }
   ]
  },
  "ce3-set6": {
   "text": "Three weak acids, HA₁, HA₂, and HA₃, have the acid dissociation constants shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Acid",
       "K_a"
      ],
      "rows": [
       [
        "HA₁",
        "1 × 10⁻³"
       ],
       [
        "HA₂",
        "1 × 10⁻⁵"
       ],
       [
        "HA₃",
        "1 × 10⁻⁸"
       ]
      ]
     }
    }
   ]
  },
  "ce3-set7": {
   "text": "The mass spectrum of chlorine atoms (Cl⁺ ions) is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"226\" x2=\"456\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"226\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"230\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"52\" y1=\"185.6\" x2=\"56\" y2=\"185.6\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"189.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"52\" y1=\"145.2\" x2=\"56\" y2=\"145.2\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"149.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"52\" y1=\"104.8\" x2=\"56\" y2=\"104.8\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"108.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"52\" y1=\"64.4\" x2=\"56\" y2=\"64.4\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"68.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"52\" y1=\"24\" x2=\"56\" y2=\"24\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"28\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"56\" y1=\"226\" x2=\"56\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">33</text><line x1=\"122.67\" y1=\"226\" x2=\"122.67\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"122.67\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">34</text><line x1=\"189.33\" y1=\"226\" x2=\"189.33\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"189.33\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">35</text><line x1=\"256\" y1=\"226\" x2=\"256\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"256\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">36</text><line x1=\"322.67\" y1=\"226\" x2=\"322.67\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"322.67\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">37</text><line x1=\"389.33\" y1=\"226\" x2=\"389.33\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"389.33\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">38</text><line x1=\"456\" y1=\"226\" x2=\"456\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"456\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">39</text><text x=\"256\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Mass-to-charge ratio (m/z)</text><text x=\"16\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 125)\">Relative abundance (%)</text><line x1=\"189.33\" y1=\"226\" x2=\"189.33\" y2=\"72.48\" stroke=\"#D2705A\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"189.33\" y=\"65.48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">76</text><line x1=\"322.67\" y1=\"226\" x2=\"322.67\" y2=\"177.52\" stroke=\"#D2705A\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"322.67\" y=\"170.52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">24</text></svg>",
     "alt": "A mass spectrum with a peak at mass-to-charge ratio 35 with relative abundance 76 percent and a peak at 37 with relative abundance 24 percent."
    }
   ]
  }
 }
};

export default EXAM;
