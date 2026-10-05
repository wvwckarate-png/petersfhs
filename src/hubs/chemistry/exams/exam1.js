// AP Chemistry — Exam 1 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "ce1-1",
   "unit": 2,
   "stem": "Which of the following bonds is the most polar?",
   "choices": [
    "C–O",
    "C–N",
    "C–H",
    "C–F"
   ],
   "correct": 3,
   "explanation": "Bond polarity increases with the difference in electronegativity. Electronegativity rises across a period, so fluorine (4.0) differs from carbon (2.5) by the most. The C–F bond is the most polar."
  },
  {
   "id": "ce1-2",
   "unit": 6,
   "stem": "A reaction takes place in 50.0 g of water, and the temperature of the water rises from 22.0 °C to 26.0 °C. How much thermal energy was absorbed by the water? (The specific heat of water is 4.18 J/(g·°C).)",
   "choices": [
    "1670 J",
    "836 J",
    "418 J",
    "209 J"
   ],
   "correct": 1,
   "explanation": "q = mcΔT = (50.0 g)(4.18 J/(g·°C))(4.0 °C) = 836 J."
  },
  {
   "id": "ce1-3",
   "unit": 7,
   "stem": "Which of the following is the equilibrium constant expression for N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?",
   "choices": [
    "K = [NH₃]² / ([N₂][H₂]³)",
    "K = [NH₃] / ([N₂][H₂])",
    "K = [N₂][H₂]³ / [NH₃]²",
    "K = 2[NH₃] / (3[N₂][H₂])"
   ],
   "correct": 0,
   "explanation": "The equilibrium expression is [products] raised to their coefficients divided by [reactants] raised to their coefficients: K = [NH₃]²/([N₂][H₂]³). The coefficients are exponents, not multipliers."
  },
  {
   "id": "ce1-4",
   "unit": 1,
   "setId": "ce1-set1",
   "stem": "What is the average atomic mass of this sample of copper?",
   "choices": [
    "64.6 amu",
    "64.0 amu",
    "63.6 amu",
    "63.0 amu"
   ],
   "correct": 2,
   "explanation": "The average atomic mass is the abundance-weighted average: (0.69)(63) + (0.31)(65) = 43.47 + 20.15 = 63.6 amu. The simple average of 63 and 65, 64.0, ignores that the lighter isotope is more abundant."
  },
  {
   "id": "ce1-5",
   "unit": 1,
   "setId": "ce1-set1",
   "stem": "Which statement best explains why the spectrum shows two peaks?",
   "choices": [
    "The sample contains copper atoms with two different numbers of protons.",
    "Some of the copper atoms in the sample have lost two electrons instead of one.",
    "Some of the copper atoms in the sample are in an excited electronic state.",
    "The sample contains two isotopes of copper that differ in their number of neutrons."
   ],
   "correct": 3,
   "explanation": "Isotopes of an element have the same number of protons but different numbers of neutrons, so they have different masses and appear at different mass-to-charge ratios. Both peaks are for singly charged ions, so the difference in m/z comes from mass, not charge."
  },
  {
   "id": "ce1-6",
   "unit": 6,
   "stem": "A solid is heated at a constant rate and its temperature stays constant for several minutes while it melts. Which statement best explains why the temperature does not rise?",
   "choices": [
    "The thermal energy added is used to overcome attractions between particles, increasing their potential energy.",
    "The thermal energy added is converted into the kinetic energy of the particles.",
    "The thermal energy added is lost to the surroundings.",
    "The particles stop moving while the solid melts."
   ],
   "correct": 0,
   "explanation": "During a phase change the temperature, which measures the average kinetic energy of the particles, stays constant. The energy added goes into increasing the potential energy of the particles as the attractions between them are overcome."
  },
  {
   "id": "ce1-7",
   "unit": 5,
   "setId": "ce1-set2",
   "stem": "What is the order of the reaction with respect to B?",
   "choices": [
    "Second order",
    "First order",
    "Zero order",
    "Third order"
   ],
   "correct": 0,
   "explanation": "Compare experiments 1 and 3: [A] is constant and [B] doubles, while the rate increases by a factor of 4. A doubling of concentration that quadruples the rate means the rate is proportional to [B]², so the reaction is second order in B."
  },
  {
   "id": "ce1-8",
   "unit": 5,
   "setId": "ce1-set2",
   "stem": "What is the value of the rate constant, k, for this reaction?",
   "choices": [
    "0.20 M⁻² s⁻¹",
    "2.0 M⁻² s⁻¹",
    "20 M⁻² s⁻¹",
    "200 M⁻² s⁻¹"
   ],
   "correct": 1,
   "explanation": "Experiments 1 and 2 show the rate doubles when [A] doubles, so the reaction is first order in A. The rate law is rate = k[A][B]². Using experiment 1: k = (2.0 × 10⁻³)/((0.10)(0.10)²) = 2.0 M⁻² s⁻¹."
  },
  {
   "id": "ce1-9",
   "unit": 6,
   "stem": "Use the standard enthalpies of formation (in kJ/mol): CH₄(g) = −74.8, CO₂(g) = −393.5, H₂O(l) = −285.8. What is ΔH° for CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)?",
   "choices": [
    "+890 kJ",
    "−604 kJ",
    "−890 kJ",
    "−1,040 kJ"
   ],
   "correct": 2,
   "explanation": "ΔH° = ΣΔHf°(products) − ΣΔHf°(reactants) = [−393.5 + 2(−285.8)] − [−74.8 + 0] = −965.1 + 74.8 = −890.3 kJ. The standard enthalpy of formation of O₂(g) is zero. −1,040 kJ results from adding the reactant's ΔHf° instead of subtracting it."
  },
  {
   "id": "ce1-10",
   "unit": 7,
   "stem": "For the reaction N₂O₄(g) ⇌ 2 NO₂(g), the equilibrium concentrations are [N₂O₄] = 0.25 M and [NO₂] = 0.50 M. What is the value of K for the reaction?",
   "choices": [
    "4.0",
    "2.0",
    "1.0",
    "0.50"
   ],
   "correct": 2,
   "explanation": "K = [NO₂]²/[N₂O₄] = (0.50)²/(0.25) = 0.25/0.25 = 1.0."
  },
  {
   "id": "ce1-11",
   "unit": 4,
   "stem": "What is the oxidation number of manganese in the permanganate ion, MnO₄⁻?",
   "choices": [
    "+7",
    "+6",
    "+4",
    "+2"
   ],
   "correct": 0,
   "explanation": "The oxygen atoms are each −2, for a total of −8. The ion's charge is −1, so Mn must be +7 (since +7 − 8 = −1)."
  },
  {
   "id": "ce1-12",
   "unit": 2,
   "setId": "ce1-set3",
   "stem": "Which bond is stronger?",
   "choices": [
    "The Cl–Cl bond, because its minimum occurs at a greater distance.",
    "The bonds are equally strong, because both curves approach zero at large distances.",
    "The Cl–Cl bond, because its curve is wider.",
    "The H–H bond, because its potential energy well is deeper."
   ],
   "correct": 3,
   "explanation": "The depth of the potential energy well is the bond energy, the energy needed to separate the atoms completely. The H–H well is deeper (about 435 kJ/mol compared with about 240 kJ/mol), so the H–H bond is stronger."
  },
  {
   "id": "ce1-13",
   "unit": 2,
   "setId": "ce1-set3",
   "stem": "Which bond has the greater bond length?",
   "choices": [
    "Cl–Cl, because the minimum of its curve occurs at a greater internuclear distance.",
    "H–H, because the minimum of its curve is at lower energy.",
    "The bond lengths are equal, because both are single bonds.",
    "H–H, because its curve rises more steeply at short distances."
   ],
   "correct": 0,
   "explanation": "The bond length is the internuclear distance at the minimum of the potential energy curve. The Cl–Cl minimum is at about 199 pm and the H–H minimum is at about 74 pm, so the Cl–Cl bond is longer. Chlorine atoms are larger than hydrogen atoms."
  },
  {
   "id": "ce1-14",
   "unit": 1,
   "stem": "Which of the following correctly compares the atomic radii of magnesium and chlorine?",
   "choices": [
    "Chlorine has the larger radius, because it has more electrons than magnesium.",
    "Chlorine has the larger radius, because it has a greater nuclear charge than magnesium.",
    "The two atoms have equal radii, because they are in the same period.",
    "Magnesium has the larger radius, because it has fewer protons attracting electrons in the same principal energy level."
   ],
   "correct": 3,
   "explanation": "Mg and Cl are both in the third period, so their valence electrons are in the same energy level and shielding is similar. Chlorine has 17 protons and magnesium has 12, so chlorine's valence electrons feel a greater effective nuclear charge and are pulled closer. The radius therefore decreases from left to right across a period."
  },
  {
   "id": "ce1-15",
   "unit": 3,
   "stem": "Which of the following solids conducts electricity when it is molten but not when it is solid?",
   "choices": [
    "Cu",
    "C (diamond)",
    "I₂",
    "NaCl"
   ],
   "correct": 3,
   "explanation": "NaCl is an ionic solid: its ions are held in fixed positions in the solid and cannot carry charge, but they can move when the solid melts. Copper conducts in both states because of its mobile electrons. Diamond and I₂ do not conduct in either state."
  },
  {
   "id": "ce1-16",
   "unit": 6,
   "stem": "For the reaction A → B, ΔH = +100 kJ. For the reaction B → C, ΔH = −250 kJ. What is ΔH for the reaction A → C?",
   "choices": [
    "−350 kJ",
    "−150 kJ",
    "+150 kJ",
    "+350 kJ"
   ],
   "correct": 1,
   "explanation": "By Hess's law, enthalpy changes add for consecutive steps: ΔH = (+100) + (−250) = −150 kJ."
  },
  {
   "id": "ce1-17",
   "unit": 3,
   "stem": "In which of the following substances does hydrogen bonding occur between molecules?",
   "choices": [
    "CH₃CH₂OH",
    "CH₃OCH₃",
    "CH₃CH₃",
    "CH₃Cl"
   ],
   "correct": 0,
   "explanation": "Hydrogen bonding requires a hydrogen atom bonded to N, O, or F in one molecule and a lone pair on N, O, or F in a neighboring molecule. Ethanol has an O–H bond. Dimethyl ether has oxygen but no O–H bond, so its molecules cannot donate hydrogen bonds to each other."
  },
  {
   "id": "ce1-18",
   "unit": 6,
   "stem": "Use the average bond enthalpies H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, and H–Cl = 431 kJ/mol to estimate ΔH for H₂(g) + Cl₂(g) → 2 HCl(g).",
   "choices": [
    "−862 kJ",
    "−183 kJ",
    "+183 kJ",
    "+679 kJ"
   ],
   "correct": 1,
   "explanation": "ΔH ≈ (energy to break bonds) − (energy released forming bonds) = (436 + 243) − 2(431) = 679 − 862 = −183 kJ. The reaction is exothermic because the bonds formed are stronger than the bonds broken."
  },
  {
   "id": "ce1-19",
   "unit": 2,
   "stem": "What is the hybridization of the carbon atom in a molecule of CO₂?",
   "choices": [
    "sp²",
    "sp³",
    "sp³d",
    "sp"
   ],
   "correct": 3,
   "explanation": "In CO₂ the carbon atom has two electron domains (two double bonds, no lone pairs), so the electron geometry is linear and the carbon is sp hybridized. Each double bond consists of one sigma bond and one pi bond."
  },
  {
   "id": "ce1-20",
   "unit": 8,
   "stem": "Acid HA has K_a = 1 × 10⁻³ and acid HB has K_a = 1 × 10⁻⁷. Which statement is correct?",
   "choices": [
    "A⁻ is a weaker base than B⁻.",
    "A⁻ is a stronger base than B⁻.",
    "HB is a stronger acid than HA.",
    "A⁻ and B⁻ have equal base strength."
   ],
   "correct": 0,
   "explanation": "A stronger acid has a weaker conjugate base. HA has the larger K_a, so it is the stronger acid, and its conjugate base A⁻ is weaker than B⁻."
  },
  {
   "id": "ce1-21",
   "unit": 8,
   "setId": "ce1-set4",
   "stem": "What volume of NaOH is needed to reach the equivalence point?",
   "choices": [
    "50.0 mL",
    "37.5 mL",
    "25.0 mL",
    "12.5 mL"
   ],
   "correct": 2,
   "explanation": "The acid and base have the same concentration and react 1 : 1, so the equivalence point occurs when the volume of NaOH equals the volume of acid: 25.0 mL. This is where the curve rises most steeply."
  },
  {
   "id": "ce1-22",
   "unit": 8,
   "setId": "ce1-set4",
   "stem": "What is the pH of the solution after 12.5 mL of NaOH has been added?",
   "choices": [
    "2.87",
    "4.74",
    "7.00",
    "9.26"
   ],
   "correct": 1,
   "explanation": "At 12.5 mL, exactly half of the acetic acid has been converted into acetate, so [CH₃COOH] = [CH₃COO⁻]. By the Henderson–Hasselbalch equation, pH = pK_a + log(1) = 4.74."
  },
  {
   "id": "ce1-23",
   "unit": 8,
   "setId": "ce1-set4",
   "stem": "Why is the pH at the equivalence point greater than 7?",
   "choices": [
    "The sodium ion reacts with water to produce OH⁻.",
    "Excess NaOH remains in the solution at the equivalence point.",
    "Acetic acid is a strong acid, so its conjugate base is a strong base.",
    "The acetate ion, the conjugate base of a weak acid, reacts with water to produce OH⁻."
   ],
   "correct": 3,
   "explanation": "At the equivalence point all of the acetic acid has been converted to acetate. Acetate is the conjugate base of a weak acid, so it hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, making the solution basic. Na⁺ does not react with water."
  },
  {
   "id": "ce1-24",
   "unit": 5,
   "setId": "ce1-set5",
   "stem": "What is the activation energy of the uncatalyzed forward reaction?",
   "choices": [
    "35 kJ",
    "70 kJ",
    "100 kJ",
    "120 kJ"
   ],
   "correct": 1,
   "explanation": "The activation energy is the energy difference between the reactants and the top of the barrier: 120 − 50 = 70 kJ. The value 120 kJ is the energy of the transition state, not the barrier height."
  },
  {
   "id": "ce1-25",
   "unit": 5,
   "setId": "ce1-set5",
   "stem": "What is the enthalpy change, ΔH, for the forward reaction?",
   "choices": [
    "+70 kJ",
    "+30 kJ",
    "−30 kJ",
    "−70 kJ"
   ],
   "correct": 2,
   "explanation": "ΔH = H(products) − H(reactants) = 20 − 50 = −30 kJ. The reaction is exothermic. A catalyst does not change ΔH."
  },
  {
   "id": "ce1-26",
   "unit": 7,
   "stem": "The solubility product constant for AgCl is K_sp = 1.8 × 10⁻¹⁰. What is the molar solubility of AgCl in pure water?",
   "choices": [
    "9.0 × 10⁻⁵ M",
    "1.8 × 10⁻⁵ M",
    "1.3 × 10⁻⁵ M",
    "1.8 × 10⁻¹⁰ M"
   ],
   "correct": 2,
   "explanation": "AgCl(s) ⇌ Ag⁺ + Cl⁻, so K_sp = s² and s = √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ M."
  },
  {
   "id": "ce1-27",
   "unit": 9,
   "setId": "ce1-set6",
   "stem": "Which electrode is the anode, and in which direction do electrons flow in the external wire?",
   "choices": [
    "Zinc is the anode, and electrons flow from the zinc electrode to the copper electrode.",
    "Copper is the anode, and electrons flow from the zinc electrode to the copper electrode.",
    "Zinc is the anode, and electrons flow from the copper electrode to the zinc electrode.",
    "Copper is the anode, and electrons flow from the copper electrode to the zinc electrode."
   ],
   "correct": 0,
   "explanation": "Zinc has the more negative reduction potential, so it is the more easily oxidized species and serves as the anode (where oxidation occurs): Zn → Zn²⁺ + 2e⁻. Electrons travel through the wire from the anode to the cathode, so from zinc to copper."
  },
  {
   "id": "ce1-28",
   "unit": 9,
   "setId": "ce1-set6",
   "stem": "What is the standard cell potential, E°cell?",
   "choices": [
    "0.42 V",
    "0.76 V",
    "1.10 V",
    "1.44 V"
   ],
   "correct": 2,
   "explanation": "E°cell = E°(cathode) − E°(anode) = (+0.34) − (−0.76) = +1.10 V. The positive value indicates that the reaction is spontaneous."
  },
  {
   "id": "ce1-29",
   "unit": 8,
   "stem": "A buffer solution contains 0.20 M CH₃COO⁻ and 0.10 M CH₃COOH. The pK_a of acetic acid is 4.74. What is the pH of the buffer?",
   "choices": [
    "5.34",
    "5.04",
    "4.74",
    "4.44"
   ],
   "correct": 1,
   "explanation": "By the Henderson–Hasselbalch equation, pH = pK_a + log([A⁻]/[HA]) = 4.74 + log(0.20/0.10) = 4.74 + 0.30 = 5.04."
  },
  {
   "id": "ce1-30",
   "unit": 5,
   "stem": "Which statement best describes how a catalyst increases the rate of a chemical reaction?",
   "choices": [
    "It provides an alternative reaction pathway with a lower activation energy.",
    "It increases the average kinetic energy of the reactant molecules.",
    "It shifts the equilibrium position toward the products.",
    "It increases the energy difference between the reactants and the products."
   ],
   "correct": 0,
   "explanation": "A catalyst speeds up a reaction by providing a different mechanism with a lower activation energy, so a greater fraction of collisions are effective. It is not consumed, and it does not change the temperature, the equilibrium position, or the overall enthalpy change."
  },
  {
   "id": "ce1-31",
   "unit": 7,
   "stem": "For the reaction 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), K_c = 100 at 800 K. What is K_p at this temperature? (R = 0.0821 L·atm/(mol·K))",
   "choices": [
    "6600",
    "100",
    "1.5",
    "0.015"
   ],
   "correct": 2,
   "explanation": "K_p = K_c(RT)^Δn, where Δn = 2 − 3 = −1. So K_p = 100/((0.0821)(800)) = 100/65.7 = 1.5."
  },
  {
   "id": "ce1-32",
   "unit": 4,
   "stem": "When aqueous silver nitrate is mixed with aqueous sodium chloride, a white precipitate forms. Which of the following is the net ionic equation for the reaction?",
   "choices": [
    "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
    "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)",
    "Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)",
    "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)"
   ],
   "correct": 3,
   "explanation": "Silver chloride is insoluble, so it forms a precipitate, while sodium nitrate remains dissolved as Na⁺ and NO₃⁻ ions. The net ionic equation shows only the species that actually change: Ag⁺ and Cl⁻ combine to form AgCl(s). Na⁺ and NO₃⁻ are spectator ions."
  },
  {
   "id": "ce1-33",
   "unit": 3,
   "stem": "How many moles of an ideal gas are in a 2.00 L container at a pressure of 1.50 atm and a temperature of 300. K? (R = 0.0821 L·atm/(mol·K))",
   "choices": [
    "8.21 mol",
    "1.22 mol",
    "0.122 mol",
    "0.0122 mol"
   ],
   "correct": 2,
   "explanation": "n = PV/(RT) = (1.50)(2.00)/((0.0821)(300.)) = 3.00/24.6 = 0.122 mol."
  },
  {
   "id": "ce1-34",
   "unit": 1,
   "setId": "ce1-set7",
   "stem": "Which element produced this spectrum?",
   "choices": [
    "Nitrogen",
    "Carbon",
    "Boron",
    "Oxygen"
   ],
   "correct": 0,
   "explanation": "The relative peak heights show the number of electrons in each subshell: 2 in the first peak (1s), 2 in the second (2s), and 3 in the third (2p). The configuration 1s²2s²2p³ has 7 electrons, so the element has 7 protons and is nitrogen."
  },
  {
   "id": "ce1-35",
   "unit": 1,
   "setId": "ce1-set7",
   "stem": "Why does the 1s peak occur at a much greater binding energy than the 2p peak?",
   "choices": [
    "The 1s electrons are farther from the nucleus, so they are held more tightly.",
    "The 1s subshell contains more electrons than the 2p subshell.",
    "The 1s electrons are shielded from the nucleus by the 2p electrons.",
    "The 1s electrons are closer to the nucleus and experience a greater effective nuclear charge, so more energy is needed to remove them."
   ],
   "correct": 3,
   "explanation": "Binding energy depends on how strongly an electron is attracted to the nucleus. 1s electrons are the closest to the nucleus and are shielded the least, so they feel the greatest effective nuclear charge and require the most energy to remove. Inner electrons shield outer ones, not the reverse."
  },
  {
   "id": "ce1-36",
   "unit": 9,
   "stem": "For a reaction, ΔH = −40 kJ and ΔS = −100 J/K. What is ΔG at 300 K?",
   "choices": [
    "−70 kJ",
    "−10 kJ",
    "+10 kJ",
    "+70 kJ"
   ],
   "correct": 1,
   "explanation": "ΔG = ΔH − TΔS = −40 kJ − (300 K)(−0.100 kJ/K) = −40 + 30 = −10 kJ. The entropy must be converted from J/K to kJ/K to match the units of ΔH."
  },
  {
   "id": "ce1-37",
   "unit": 7,
   "stem": "The volume of the container for the system N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) at equilibrium is suddenly decreased at constant temperature. In which direction does the equilibrium shift?",
   "choices": [
    "Toward the reactants, because there are more moles of gas on the reactant side.",
    "It does not shift, because the temperature is constant.",
    "Toward the reactants, because the concentrations of all the gases increase.",
    "Toward the products, because there are fewer moles of gas on the product side."
   ],
   "correct": 3,
   "explanation": "Decreasing the volume increases the pressure. By Le Châtelier's principle, the system shifts to relieve the stress by reducing the number of gas molecules. The product side has 2 mol of gas and the reactant side has 4 mol, so the equilibrium shifts toward the products."
  },
  {
   "id": "ce1-38",
   "unit": 4,
   "stem": "A 25.0 mL sample of HCl solution is neutralized by 20.0 mL of 0.100 M NaOH. What is the concentration of the HCl solution?",
   "choices": [
    "0.500 M",
    "0.125 M",
    "0.0800 M",
    "0.0500 M"
   ],
   "correct": 2,
   "explanation": "At the equivalence point, moles of H⁺ equal moles of OH⁻: (0.100 M)(0.0200 L) = 2.00 × 10⁻³ mol. The HCl concentration is 2.00 × 10⁻³ mol/0.0250 L = 0.0800 M."
  },
  {
   "id": "ce1-39",
   "unit": 9,
   "stem": "A current of 2.00 A is passed through a solution of Cu²⁺ for 965 s. What mass of copper is deposited at the cathode? (Cu²⁺ + 2e⁻ → Cu; molar mass of Cu = 63.5 g/mol; 1 F = 96,500 C/mol e⁻)",
   "choices": [
    "2.54 g",
    "1.27 g",
    "0.635 g",
    "0.318 g"
   ],
   "correct": 2,
   "explanation": "The charge is q = It = (2.00)(965) = 1930 C, which is 1930/96,500 = 0.0200 mol of electrons. Two electrons deposit one Cu atom, so 0.0100 mol of Cu is deposited, with a mass of (0.0100)(63.5) = 0.635 g."
  },
  {
   "id": "ce1-40",
   "unit": 3,
   "stem": "What mass of NaCl (molar mass 58.5 g/mol) is needed to prepare 500. mL of a 0.200 M solution?",
   "choices": [
    "0.585 g",
    "5.85 g",
    "11.7 g",
    "58.5 g"
   ],
   "correct": 1,
   "explanation": "Moles = (0.200 mol/L)(0.500 L) = 0.100 mol, and the mass is (0.100 mol)(58.5 g/mol) = 5.85 g."
  },
  {
   "id": "ce1-41",
   "unit": 4,
   "setId": "ce1-set8",
   "stem": "Which reactant is the limiting reactant?",
   "choices": [
    "B₂, because it is completely consumed.",
    "A₂, because it is present in the greater amount.",
    "AB, because it is the only product.",
    "Neither, because both A₂ and B₂ appear in the reaction equation."
   ],
   "correct": 0,
   "explanation": "The limiting reactant is the one that is used up first. After the reaction no B₂ molecules remain, so B₂ limited the amount of product, and some A₂ is left over."
  },
  {
   "id": "ce1-42",
   "unit": 4,
   "setId": "ce1-set8",
   "stem": "How many molecules of the excess reactant remain after the reaction is complete?",
   "choices": [
    "0",
    "1",
    "2",
    "4"
   ],
   "correct": 2,
   "explanation": "The two B₂ molecules react with two A₂ molecules (1 : 1 ratio), producing four AB molecules. Of the original four A₂ molecules, 4 − 2 = 2 remain unreacted."
  },
  {
   "id": "ce1-43",
   "unit": 3,
   "stem": "The temperature of a fixed amount of an ideal gas in a rigid container is increased. Which of the following explains, on the molecular level, why the pressure increases?",
   "choices": [
    "The molecules become larger and take up more of the container's volume.",
    "The attractions between the molecules become stronger.",
    "The number of molecules in the container increases.",
    "The molecules collide with the walls more frequently and with greater force."
   ],
   "correct": 3,
   "explanation": "Raising the temperature increases the average kinetic energy and speed of the molecules. They hit the walls more often and with greater force per collision, so the pressure increases. The number of molecules and the volume do not change."
  },
  {
   "id": "ce1-44",
   "unit": 2,
   "stem": "Which of the following molecules has a trigonal pyramidal molecular geometry?",
   "choices": [
    "NH₃",
    "CH₄",
    "H₂O",
    "BF₃"
   ],
   "correct": 0,
   "explanation": "In NH₃, nitrogen has four electron domains (three bonding pairs and one lone pair). The electron geometry is tetrahedral, and the molecular geometry, with the lone pair not counted, is trigonal pyramidal. CH₄ is tetrahedral, H₂O is bent, and BF₃ is trigonal planar."
  },
  {
   "id": "ce1-45",
   "unit": 3,
   "stem": "A 50.0 mL sample of 6.0 M HCl is diluted with water to a final volume of 250. mL. What is the concentration of the diluted solution?",
   "choices": [
    "0.24 M",
    "1.2 M",
    "6.0 M",
    "30. M"
   ],
   "correct": 1,
   "explanation": "The moles of HCl do not change: M₁V₁ = M₂V₂, so M₂ = (6.0)(50.0)/250. = 1.2 M."
  },
  {
   "id": "ce1-46",
   "unit": 4,
   "stem": "In the reaction 2 H₂(g) + O₂(g) → 2 H₂O(g), how many grams of water (molar mass 18.0 g/mol) can be produced from 4.0 g of H₂ (molar mass 2.0 g/mol) with excess O₂?",
   "choices": [
    "18 g",
    "36 g",
    "72 g",
    "144 g"
   ],
   "correct": 1,
   "explanation": "4.0 g of H₂ is 2.0 mol. The mole ratio H₂ : H₂O is 1 : 1, so 2.0 mol of H₂O forms, which has a mass of (2.0)(18.0) = 36 g."
  },
  {
   "id": "ce1-47",
   "unit": 8,
   "stem": "A solution has a pH of 9.30 at 25 °C. What is the pOH of the solution?",
   "choices": [
    "14.0",
    "9.30",
    "5.30",
    "4.70"
   ],
   "correct": 3,
   "explanation": "At 25 °C, pH + pOH = 14.00, so pOH = 14.00 − 9.30 = 4.70."
  },
  {
   "id": "ce1-48",
   "unit": 3,
   "stem": "A 4.0 L container holds 0.50 mol of N₂ and 1.5 mol of O₂ at a total pressure of 4.0 atm. What is the partial pressure of O₂?",
   "choices": [
    "4.0 atm",
    "3.0 atm",
    "2.0 atm",
    "1.0 atm"
   ],
   "correct": 1,
   "explanation": "The partial pressure equals the mole fraction times the total pressure: X(O₂) = 1.5/2.0 = 0.75, so P(O₂) = (0.75)(4.0) = 3.0 atm."
  },
  {
   "id": "ce1-49",
   "unit": 8,
   "stem": "What is the pH of a solution in which [H⁺] = 3.2 × 10⁻⁴ M?",
   "choices": [
    "2.49",
    "3.49",
    "4.49",
    "10.51"
   ],
   "correct": 1,
   "explanation": "pH = −log[H⁺] = −log(3.2 × 10⁻⁴) = 3.49."
  },
  {
   "id": "ce1-50",
   "unit": 8,
   "stem": "What is the pH of a 0.010 M NaOH solution at 25 °C?",
   "choices": [
    "14.00",
    "12.00",
    "7.00",
    "2.00"
   ],
   "correct": 1,
   "explanation": "NaOH is a strong base, so [OH⁻] = 0.010 M and pOH = 2.00. Then pH = 14.00 − 2.00 = 12.00."
  },
  {
   "id": "ce1-51",
   "unit": 3,
   "setId": "ce1-set9",
   "stem": "A solution of the same compound has an absorbance of 0.36. What is its concentration?",
   "choices": [
    "0.54 M",
    "0.36 M",
    "0.24 M",
    "0.12 M"
   ],
   "correct": 2,
   "explanation": "The line has a slope of 0.15/0.10 = 1.5 M⁻¹ (A = εbc with b = 1.0 cm). Then c = A/1.5 = 0.36/1.5 = 0.24 M."
  },
  {
   "id": "ce1-52",
   "unit": 3,
   "setId": "ce1-set9",
   "stem": "The student measures the 0.20 M standard in a cuvette with a path length of 2.0 cm. What absorbance should the student expect?",
   "choices": [
    "0.15",
    "0.30",
    "0.60",
    "1.2"
   ],
   "correct": 2,
   "explanation": "By the Beer–Lambert law, A = εbc, so doubling the path length doubles the absorbance. The 0.20 M solution has A = 0.30 in a 1.0 cm cuvette, so in a 2.0 cm cuvette A = 0.60."
  },
  {
   "id": "ce1-53",
   "unit": 1,
   "stem": "How many moles of aluminum atoms are in an 8.1 g sample of aluminum? (The molar mass of Al is 27.0 g/mol.)",
   "choices": [
    "30 mol",
    "3.0 mol",
    "0.30 mol",
    "0.030 mol"
   ],
   "correct": 2,
   "explanation": "n = mass/molar mass = 8.1 g ÷ 27.0 g/mol = 0.30 mol."
  },
  {
   "id": "ce1-54",
   "unit": 9,
   "stem": "A reaction has a standard free energy change ΔG° < 0 at 298 K. Which statement about the equilibrium constant K for this reaction is correct?",
   "choices": [
    "K > 1",
    "K < 1",
    "K = 1",
    "K = 0"
   ],
   "correct": 0,
   "explanation": "The standard free energy change is related to the equilibrium constant by ΔG° = −RT ln K. A negative ΔG° requires ln K > 0, so K > 1: products are favored at equilibrium."
  },
  {
   "id": "ce1-55",
   "unit": 3,
   "setId": "ce1-set10",
   "stem": "Which statement about the two temperatures is correct?",
   "choices": [
    "T₁ is higher than T₂, because its peak is taller.",
    "The temperatures are equal, because the areas under the curves are equal.",
    "T₂ is lower than T₁, because its peak is lower.",
    "T₂ is higher than T₁, because the distribution is shifted to higher speeds and is broader."
   ],
   "correct": 3,
   "explanation": "At a higher temperature the average speed and the spread of speeds increase, so the peak shifts to the right and becomes lower and broader. The area under each curve is the same (it represents all the molecules), so equal areas do not imply equal temperatures."
  },
  {
   "id": "ce1-56",
   "unit": 3,
   "setId": "ce1-set10",
   "stem": "Which statement best explains why a reaction between gases usually proceeds faster at T₂ than at T₁?",
   "choices": [
    "A greater fraction of the molecules has enough energy to overcome the activation energy.",
    "The activation energy of the reaction is lower at the higher temperature.",
    "The molecules collide less often, so each collision is more effective.",
    "The number of molecules increases at the higher temperature."
   ],
   "correct": 0,
   "explanation": "In the T₂ distribution the high-speed tail is larger, so more molecules have kinetic energy at or above the activation energy. The activation energy itself does not change with temperature, and the molecules collide more, not less, often."
  },
  {
   "id": "ce1-57",
   "unit": 9,
   "stem": "Which of the following processes results in an increase in the entropy of the system?",
   "choices": [
    "H₂O(g) → H₂O(l)",
    "2 NO₂(g) → N₂O₄(g)",
    "CO₂(g) → CO₂(s)",
    "NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq)"
   ],
   "correct": 3,
   "explanation": "Entropy increases when there are more ways to arrange the particles and energy. Dissolving a crystalline solid into freely moving ions in solution increases the entropy. Condensation, dimerization (fewer moles of gas), and deposition all decrease the entropy of the system."
  },
  {
   "id": "ce1-58",
   "unit": 7,
   "stem": "For a reaction at a certain temperature, K = 2.0. A mixture of reactants and products has a reaction quotient Q = 0.50. Which statement is correct?",
   "choices": [
    "The reaction will proceed in the forward direction until equilibrium is reached.",
    "The reaction will proceed in the reverse direction until equilibrium is reached.",
    "The system is at equilibrium.",
    "The reaction will not proceed in either direction."
   ],
   "correct": 0,
   "explanation": "When Q < K, the mixture has too much reactant and too little product compared with equilibrium, so the net reaction proceeds in the forward direction, forming products, until Q = K."
  },
  {
   "id": "ce1-59",
   "unit": 3,
   "stem": "The boiling point of HF (20 °C) is much higher than that of HCl (−85 °C), even though HCl has the larger molar mass. Which statement best explains this?",
   "choices": [
    "HF has stronger London dispersion forces because it has more electrons than HCl.",
    "The H–F bond is stronger than the H–Cl bond, so HF molecules are harder to break apart.",
    "HF is an ionic compound, and HCl is a covalent compound.",
    "HF molecules form hydrogen bonds with each other, which are stronger than the forces between HCl molecules."
   ],
   "correct": 3,
   "explanation": "Boiling depends on the strength of the intermolecular forces, not on the strength of the covalent bonds inside the molecules. Fluorine is highly electronegative and small, so HF molecules form strong hydrogen bonds. HCl molecules have weaker dipole–dipole and dispersion forces."
  },
  {
   "id": "ce1-60",
   "unit": 3,
   "stem": "A sample of gas occupies 4.0 L at a pressure of 2.0 atm. The pressure is changed to 8.0 atm at constant temperature. What is the new volume of the gas?",
   "choices": [
    "0.50 L",
    "1.0 L",
    "4.0 L",
    "16 L"
   ],
   "correct": 1,
   "explanation": "At constant temperature, P₁V₁ = P₂V₂, so V₂ = (2.0)(4.0)/8.0 = 1.0 L."
  }
 ],
 "sets": {
  "ce1-set1": {
   "text": "The mass spectrum of a sample of copper is shown. All of the ions detected have a charge of +1.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"226\" x2=\"456\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"226\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"230\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"52\" y1=\"185.6\" x2=\"56\" y2=\"185.6\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"189.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"52\" y1=\"145.2\" x2=\"56\" y2=\"145.2\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"149.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"52\" y1=\"104.8\" x2=\"56\" y2=\"104.8\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"108.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"52\" y1=\"64.4\" x2=\"56\" y2=\"64.4\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"68.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"52\" y1=\"24\" x2=\"56\" y2=\"24\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"28\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"56\" y1=\"226\" x2=\"56\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"106\" y1=\"226\" x2=\"106\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"106\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">61</text><line x1=\"156\" y1=\"226\" x2=\"156\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"156\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">62</text><line x1=\"206\" y1=\"226\" x2=\"206\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"206\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">63</text><line x1=\"256\" y1=\"226\" x2=\"256\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"256\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">64</text><line x1=\"306\" y1=\"226\" x2=\"306\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"306\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">65</text><line x1=\"356\" y1=\"226\" x2=\"356\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"356\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">66</text><line x1=\"406\" y1=\"226\" x2=\"406\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"406\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">67</text><line x1=\"456\" y1=\"226\" x2=\"456\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"456\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">68</text><text x=\"256\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Mass-to-charge ratio (m/z)</text><text x=\"16\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 125)\">Relative abundance (%)</text><line x1=\"206\" y1=\"226\" x2=\"206\" y2=\"86.62\" stroke=\"#D2705A\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"206\" y=\"79.62\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">69</text><line x1=\"306\" y1=\"226\" x2=\"306\" y2=\"163.38\" stroke=\"#D2705A\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"306\" y=\"156.38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">31</text></svg>",
     "alt": "A mass spectrum with two peaks. The peak at mass-to-charge ratio 63 has a relative abundance of 69 percent and the peak at 65 has a relative abundance of 31 percent."
    }
   ]
  },
  "ce1-set2": {
   "text": "The initial rate of the reaction A + B → products was measured in three experiments. The data are shown in the table.",
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
        "2.0 × 10⁻³"
       ],
       [
        "2",
        "0.20",
        "0.10",
        "4.0 × 10⁻³"
       ],
       [
        "3",
        "0.10",
        "0.20",
        "8.0 × 10⁻³"
       ]
      ]
     }
    }
   ]
  },
  "ce1-set3": {
   "text": "The graph shows the potential energy of two bonded atoms as a function of the distance between their nuclei for the H–H bond and the Cl–Cl bond.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 310\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"252\" x2=\"380\" y2=\"252\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"256\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-500</text><line x1=\"64\" y1=\"226.22\" x2=\"380\" y2=\"226.22\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"230.22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-400</text><line x1=\"64\" y1=\"200.44\" x2=\"380\" y2=\"200.44\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204.44\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-300</text><line x1=\"64\" y1=\"174.67\" x2=\"380\" y2=\"174.67\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"178.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-200</text><line x1=\"64\" y1=\"148.89\" x2=\"380\" y2=\"148.89\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"152.89\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-100</text><line x1=\"64\" y1=\"123.11\" x2=\"380\" y2=\"123.11\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"127.11\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"97.33\" x2=\"380\" y2=\"97.33\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"101.33\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"71.56\" x2=\"380\" y2=\"71.56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"75.56\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"64\" y1=\"45.78\" x2=\"380\" y2=\"45.78\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"49.78\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">300</text><line x1=\"64\" y1=\"20\" x2=\"380\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">400</text><line x1=\"64\" y1=\"252\" x2=\"64\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"127.2\" y1=\"252\" x2=\"127.2\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"127.2\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"190.4\" y1=\"252\" x2=\"190.4\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"190.4\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"253.6\" y1=\"252\" x2=\"253.6\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"253.6\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">300</text><line x1=\"316.8\" y1=\"252\" x2=\"316.8\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"316.8\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">400</text><line x1=\"380\" y1=\"252\" x2=\"380\" y2=\"257\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"380\" y=\"271\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">500</text><line x1=\"64\" y1=\"252\" x2=\"380\" y2=\"252\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"252\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"222\" y=\"300\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Internuclear distance (pm)</text><text x=\"16\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 136)\">Potential energy (kJ/mol)</text><path d=\"M98.76 193.79L100.05 203.98L101.34 212.34L102.63 219.08L103.92 224.39L105.21 228.47L106.5 231.46L107.79 233.49L109.08 234.71L110.37 235.22L111.66 235.11L112.95 234.48L114.24 233.39L115.53 231.93L116.82 230.15L118.12 228.11L119.41 225.85L120.7 223.42L121.99 220.84L123.28 218.16L124.57 215.4L125.86 212.59L127.15 209.75L128.44 206.89L129.73 204.03L131.02 201.18L132.31 198.37L133.6 195.59L134.89 192.85L136.18 190.17L137.47 187.54L138.76 184.98L140.05 182.48L141.34 180.05L142.63 177.68L143.92 175.39L145.21 173.18L146.5 171.03L147.79 168.96L149.08 166.96L150.37 165.04L151.66 163.18L152.95 161.4L154.24 159.68L155.53 158.03L156.82 156.45L158.12 154.93L159.41 153.47L160.7 152.07L161.99 150.73L163.28 149.45L164.57 148.22L165.86 147.05L167.15 145.93L168.44 144.85L169.73 143.82L171.02 142.84L172.31 141.91L173.6 141.01L174.89 140.16L176.18 139.34L177.47 138.57L178.76 137.82L180.05 137.12L181.34 136.44L182.63 135.8L183.92 135.18L185.21 134.6L186.5 134.04L187.79 133.51L189.08 133.01L190.37 132.53L191.66 132.07L192.95 131.63L194.24 131.21L195.54 130.82L196.83 130.44L198.12 130.08L199.41 129.74L200.7 129.42L201.99 129.11L203.28 128.81L204.57 128.53L205.86 128.26L207.15 128.01L208.44 127.77L209.73 127.54L211.02 127.32L212.31 127.11L213.6 126.92L214.89 126.73L216.18 126.55L217.47 126.38L218.76 126.22L220.05 126.07L221.34 125.92L222.63 125.78L223.92 125.65L225.21 125.52L226.5 125.4L227.79 125.29L229.08 125.18L230.37 125.08L231.66 124.98L232.95 124.89L234.24 124.8L235.54 124.72L236.83 124.64L238.12 124.56L239.41 124.49L240.7 124.42L241.99 124.36L243.28 124.29L244.57 124.24L245.86 124.18L247.15 124.13L248.44 124.08L249.73 124.03L251.02 123.98L252.31 123.94L253.6 123.9\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M158.8 95.28L160.54 108.96L162.28 120.99L164.01 131.53L165.75 140.72L167.49 148.71L169.23 155.6L170.97 161.52L172.7 166.55L174.44 170.8L176.18 174.35L177.92 177.26L179.66 179.61L181.39 181.47L183.13 182.87L184.87 183.88L186.61 184.54L188.35 184.89L190.08 184.97L191.82 184.82L193.56 184.45L195.3 183.91L197.04 183.2L198.77 182.37L200.51 181.42L202.25 180.37L203.99 179.25L205.73 178.05L207.46 176.81L209.2 175.52L210.94 174.2L212.68 172.85L214.42 171.49L216.15 170.12L217.89 168.75L219.63 167.38L221.37 166.02L223.11 164.67L224.84 163.34L226.58 162.02L228.32 160.72L230.06 159.45L231.8 158.2L233.53 156.98L235.27 155.79L237.01 154.62L238.75 153.48L240.49 152.38L242.22 151.3L243.96 150.25L245.7 149.24L247.44 148.25L249.18 147.3L250.91 146.37L252.65 145.47L254.39 144.61L256.13 143.77L257.87 142.96L259.6 142.18L261.34 141.42L263.08 140.7L264.82 139.99L266.56 139.32L268.29 138.67L270.03 138.04L271.77 137.43L273.51 136.85L275.25 136.29L276.98 135.75L278.72 135.23L280.46 134.73L282.2 134.25L283.94 133.79L285.67 133.35L287.41 132.93L289.15 132.52L290.89 132.13L292.63 131.75L294.36 131.39L296.1 131.04L297.84 130.71L299.58 130.39L301.32 130.08L303.05 129.79L304.79 129.51L306.53 129.24L308.27 128.98L310.01 128.73L311.74 128.49L313.48 128.26L315.22 128.04L316.96 127.83L318.7 127.63L320.43 127.44L322.17 127.26L323.91 127.08L325.65 126.91L327.39 126.75L329.12 126.59L330.86 126.44L332.6 126.3L334.34 126.16L336.08 126.03L337.81 125.91L339.55 125.79L341.29 125.67L343.03 125.56L344.77 125.46L346.5 125.36L348.24 125.26L349.98 125.17L351.72 125.08L353.46 124.99L355.19 124.91L356.93 124.84L358.67 124.76L360.41 124.69L362.15 124.62L363.88 124.56L365.62 124.49L367.36 124.43\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"64\" y1=\"123.11\" x2=\"380\" y2=\"123.11\" stroke=\"#9AA096\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><line x1=\"392\" y1=\"30\" x2=\"414\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"420\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">H–H</text><line x1=\"392\" y1=\"50\" x2=\"414\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"420\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Cl–Cl</text></svg>",
     "alt": "A graph of potential energy in kilojoules per mole against internuclear distance in picometers for two bonds. The H–H curve has a deep minimum of about minus 435 at 74 picometers. The Cl–Cl curve has a shallower minimum of about minus 240 at about 199 picometers."
    }
   ]
  },
  "ce1-set4": {
   "text": "A 25.0 mL sample of 0.100 M acetic acid (pK_a = 4.74) is titrated with 0.100 M NaOH. The titration curve is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"236\" x2=\"496\" y2=\"236\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"240\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"200\" x2=\"496\" y2=\"200\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"164\" x2=\"496\" y2=\"164\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"168\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"128\" x2=\"496\" y2=\"128\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"92\" x2=\"496\" y2=\"92\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"60\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">14</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"150.4\" y1=\"272\" x2=\"150.4\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150.4\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"236.8\" y1=\"272\" x2=\"236.8\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"236.8\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"323.2\" y1=\"272\" x2=\"323.2\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"323.2\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"409.6\" y1=\"272\" x2=\"409.6\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"409.6\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume of base added (mL)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">pH</text><path d=\"M64 220.25L66.7 216.63L69.4 213.56L72.1 211.08L74.8 209.08L77.5 207.41L80.2 205.98L82.9 204.73L85.6 203.62L88.3 202.62L91 201.71L93.7 200.87L96.4 200.08L99.1 199.35L101.8 198.66L104.5 198.01L107.2 197.39L109.9 196.8L112.6 196.23L115.3 195.68L118 195.16L120.7 194.64L123.4 194.15L126.1 193.67L128.8 193.2L131.5 192.74L134.2 192.29L136.9 191.85L139.6 191.42L142.3 190.99L145 190.57L147.7 190.16L150.4 189.75L153.1 189.35L155.8 188.95L158.5 188.55L161.2 188.15L163.9 187.76L166.6 187.37L169.3 186.98L172 186.59L174.7 186.2L177.4 185.8L180.1 185.41L182.8 185.02L185.5 184.62L188.2 184.23L190.9 183.82L193.6 183.42L196.3 183.01L199 182.6L201.7 182.18L204.4 181.75L207.1 181.32L209.8 180.88L212.5 180.43L215.2 179.97L217.9 179.5L220.6 179.01L223.3 178.52L226 178L228.7 177.47L231.4 176.92L234.1 176.35L236.8 175.75L239.5 175.13L242.2 174.47L244.9 173.77L247.6 173.03L250.3 172.24L253 171.38L255.7 170.45L258.4 169.42L261.1 168.26L263.8 166.95L266.5 165.42L269.2 163.57L271.9 161.22L274.6 157.95L277.3 152.44L280 115.01L282.7 77.72L285.4 72.35L288.1 69.23L290.8 67.03L293.5 65.33L296.2 63.96L298.9 62.8L301.6 61.8L304.3 60.93L307 60.15L309.7 59.45L312.4 58.81L315.1 58.23L317.8 57.7L320.5 57.21L323.2 56.75L325.9 56.32L328.6 55.91L331.3 55.53L334 55.18L336.7 54.84L339.4 54.52L342.1 54.21L344.8 53.92L347.5 53.65L350.2 53.38L352.9 53.13L355.6 52.89L358.3 52.65L361 52.43L363.7 52.21L366.4 52.01L369.1 51.81L371.8 51.61L374.5 51.43L377.2 51.25L379.9 51.07L382.6 50.9L385.3 50.74L388 50.58L390.7 50.43L393.4 50.28L396.1 50.13L398.8 49.99L401.5 49.85L404.2 49.72L406.9 49.59L409.6 49.46L412.3 49.34L415 49.22L417.7 49.1L420.4 48.99L423.1 48.87L425.8 48.76L428.5 48.66L431.2 48.55L433.9 48.45L436.6 48.35L439.3 48.25L442 48.16L444.7 48.06L447.4 47.97L450.1 47.88L452.8 47.79L455.5 47.71L458.2 47.62L460.9 47.54L463.6 47.46L466.3 47.38L469 47.3L471.7 47.22L474.4 47.15L477.1 47.07L479.8 47L482.5 46.93L485.2 46.86L487.9 46.79L490.6 46.72L493.3 46.65L496 46.59\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A titration curve of pH against volume of 0.100 molar NaOH added. The curve starts near pH 2.9, rises slowly through a buffer region, rises steeply near 25 milliliters, and levels off near pH 12."
    }
   ]
  },
  "ce1-set5": {
   "text": "The energy profile for a reaction is shown for the uncatalyzed pathway (solid line) and for a catalyzed pathway (dashed line). Energies are in kJ.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"70\" y1=\"250\" x2=\"450\" y2=\"250\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"24\" x2=\"70\" y2=\"250\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"288\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Reaction progress</text><text x=\"18\" y=\"137\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 18 137)\">Potential energy</text><path d=\"M70 174.66666666666669L140 174.66666666666669C190 174.66666666666669 220 69.19999999999999 260 69.19999999999999C300 69.19999999999999 330 219.86666666666667 380 219.86666666666667L450 219.86666666666667\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M70 174.66666666666669L140 174.66666666666669C190 174.66666666666669 220 121.93333333333334 260 121.93333333333334C300 121.93333333333334 330 219.86666666666667 380 219.86666666666667L450 219.86666666666667\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"3\" stroke-dasharray=\"7 5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"110\" y1=\"174.67\" x2=\"260\" y2=\"174.67\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"174.67\" x2=\"238\" y2=\"69.2\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"238,69.2 241.47,76.98 234.53,76.98\" fill=\"#2E332E\"/><text x=\"232\" y=\"125.93\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">Eₐ</text><line x1=\"390\" y1=\"174.67\" x2=\"390\" y2=\"219.87\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"390,219.87 386.53,212.09 393.47,212.09\" fill=\"#2E332E\"/><line x1=\"360\" y1=\"174.67\" x2=\"390\" y2=\"174.67\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><text x=\"396\" y=\"201.27\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">ΔH</text><text x=\"105\" y=\"166.67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">reactants</text><text x=\"410\" y=\"237.87\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">products</text><line x1=\"66\" y1=\"174.67\" x2=\"70\" y2=\"174.67\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"178.67\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"66\" y1=\"69.2\" x2=\"70\" y2=\"69.2\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"73.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"66\" y1=\"219.87\" x2=\"70\" y2=\"219.87\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"223.87\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"66\" y1=\"121.93\" x2=\"70\" y2=\"121.93\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"62\" y=\"125.93\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#D2705A\">85</text><text x=\"18\" y=\"18\" text-anchor=\"start\" font-size=\"11\" font-weight=\"400\" fill=\"#2E332E\">(kJ)</text></svg>",
     "alt": "An energy profile. The reactants are at 50 kilojoules, the products at 20 kilojoules, and the uncatalyzed transition state peak at 120. A dashed catalyzed pathway has a lower peak at 85 kilojoules."
    }
   ]
  },
  "ce1-set6": {
   "text": "A galvanic cell is constructed from a zinc electrode in 1.0 M Zn²⁺ and a copper electrode in 1.0 M Cu²⁺, connected by a salt bridge, as shown. The standard reduction potentials are: Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V; Zn²⁺ + 2e⁻ → Zn, E° = −0.76 V.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"60\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"61\" y=\"165\" width=\"128\" height=\"84\" fill=\"#DCEBF3\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"330\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"331\" y=\"165\" width=\"128\" height=\"84\" fill=\"#E8F1DF\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"105\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"375\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"140\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Zn</text><text x=\"410\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Cu</text><text x=\"125\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Zn²⁺</text><text x=\"395\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Cu²⁺</text><path d=\"M116 90L116 50L225 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M386 90L386 50L295 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"50\" r=\"22\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">V</text><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#D8D2C0\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"260\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">salt bridge</text><line x1=\"135\" y1=\"34\" x2=\"205\" y2=\"34\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"205,34 196.82,37.65 196.82,30.35\" fill=\"#2E332E\"/><text x=\"170\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">e⁻</text></svg>",
     "alt": "A galvanic cell. A zinc electrode in a zinc ion solution on the left and a copper electrode in a copper ion solution on the right are connected by a wire containing a voltmeter and by a salt bridge. An arrow shows electrons moving through the wire from the zinc toward the copper."
    }
   ]
  },
  "ce1-set7": {
   "text": "The photoelectron spectrum of a neutral atom of an element in the second period is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"226\" x2=\"496\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"486.91\" y1=\"226\" x2=\"486.91\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"486.91\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.1</text><line x1=\"429.92\" y1=\"226\" x2=\"429.92\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"429.92\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"267.39\" y1=\"226\" x2=\"267.39\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"267.39\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"56\" y1=\"226\" x2=\"56\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><text x=\"276\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Binding energy (MJ/mol)</text><text x=\"16\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 125)\">Relative number of electrons</text><line x1=\"140.57\" y1=\"226\" x2=\"140.57\" y2=\"118.27\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"140.57\" y=\"111.27\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">1s</text><line x1=\"362.65\" y1=\"226\" x2=\"362.65\" y2=\"118.27\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"362.65\" y=\"111.27\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2s</text><line x1=\"412.53\" y1=\"226\" x2=\"412.53\" y2=\"64.4\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"412.53\" y=\"57.4\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2p</text></svg>",
     "alt": "A photoelectron spectrum with three peaks on a logarithmic binding energy axis. The peak at 40.6 megajoules per mole has a relative height of 2, the peak at 3.05 has a height of 2, and the peak at 1.40 has a height of 3."
    }
   ]
  },
  "ce1-set8": {
   "text": "The particle diagrams show a mixture of A₂ and B₂ molecules before and after the reaction A₂ + B₂ → 2 AB goes to completion.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 354 240\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"90\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Before reaction</text><rect x=\"15\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"93.23\" y1=\"101.22\" x2=\"89.23\" y2=\"112.53\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"93.23\" cy=\"101.22\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"89.23\" cy=\"112.53\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"100.27\" y1=\"131.72\" x2=\"98.84\" y2=\"143.63\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"100.27\" cy=\"131.72\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"98.84\" cy=\"143.63\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"47.48\" y1=\"101.27\" x2=\"43.49\" y2=\"112.59\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"47.48\" cy=\"101.27\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"43.49\" cy=\"112.59\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"129.47\" y1=\"91.16\" x2=\"123.36\" y2=\"101.48\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"129.47\" cy=\"91.16\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"123.36\" cy=\"101.48\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"104.16\" y1=\"68.25\" x2=\"114.32\" y2=\"74.63\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"104.16\" cy=\"68.25\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"114.32\" cy=\"74.63\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"57.25\" y1=\"134.36\" x2=\"47.11\" y2=\"140.78\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"57.25\" cy=\"134.36\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"47.11\" cy=\"140.78\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"264\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">After reaction</text><rect x=\"189\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"245.95\" y1=\"57.01\" x2=\"257.61\" y2=\"59.87\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"245.95\" cy=\"57.01\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"257.61\" cy=\"59.87\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"300.67\" y1=\"97.76\" x2=\"299.69\" y2=\"109.72\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"300.67\" cy=\"97.76\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"299.69\" cy=\"109.72\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"243.69\" y1=\"99.75\" x2=\"235.64\" y2=\"108.64\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"243.69\" cy=\"99.75\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"235.64\" cy=\"108.64\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"276.95\" y1=\"144.65\" x2=\"279.63\" y2=\"156.35\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"276.95\" cy=\"144.65\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"279.63\" cy=\"156.35\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"214.61\" y1=\"120.6\" x2=\"217.62\" y2=\"132.22\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"214.61\" cy=\"120.6\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"217.62\" cy=\"132.22\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"275.09\" y1=\"86.54\" x2=\"264.53\" y2=\"92.24\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"275.09\" cy=\"86.54\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"264.53\" cy=\"92.24\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"22\" cy=\"224\" r=\"7\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"35\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom A</text><circle cx=\"112\" cy=\"224\" r=\"7\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"125\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom B</text></svg>",
     "alt": "Two boxes of particles. Before the reaction the box contains four A2 molecules and two B2 molecules. After the reaction it contains four AB molecules and two A2 molecules."
    }
   ]
  },
  "ce1-set9": {
   "text": "A student measures the absorbance of several standard solutions of a colored compound at its wavelength of maximum absorption, using a cuvette with a path length of 1.0 cm. The calibration data are plotted in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"456\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"201.5\" x2=\"456\" y2=\"201.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"205.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"141\" x2=\"456\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"80.5\" x2=\"456\" y2=\"80.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"84.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"20\" x2=\"456\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"142.4\" y1=\"262\" x2=\"142.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"142.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.1</text><line x1=\"220.8\" y1=\"262\" x2=\"220.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"220.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"299.2\" y1=\"262\" x2=\"299.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"299.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.3</text><line x1=\"377.6\" y1=\"262\" x2=\"377.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"377.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"456\" y1=\"262\" x2=\"456\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"456\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.5</text><line x1=\"64\" y1=\"262\" x2=\"456\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Concentration (M)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Absorbance</text><path d=\"M64 262L142.4 216.63L220.8 171.25L299.2 125.88L377.6 80.5\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"262\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"142.4\" cy=\"216.63\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"220.8\" cy=\"171.25\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"299.2\" cy=\"125.88\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"377.6\" cy=\"80.5\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/></svg>",
     "alt": "A graph of absorbance against concentration in molar showing five data points on a straight line through the origin: 0.15 at 0.10 M, 0.30 at 0.20 M, 0.45 at 0.30 M, and 0.60 at 0.40 M."
    }
   ]
  },
  "ce1-set10": {
   "text": "The graph shows the distribution of molecular speeds for a sample of gas at two different temperatures, T₁ and T₂.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"242\" x2=\"360\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"246\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"186.5\" x2=\"360\" y2=\"186.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"190.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"131\" x2=\"360\" y2=\"131\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"135\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"75.5\" x2=\"360\" y2=\"75.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"79.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"20\" x2=\"360\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"242\" x2=\"64\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"123.2\" y1=\"242\" x2=\"123.2\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"123.2\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"182.4\" y1=\"242\" x2=\"182.4\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"182.4\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"241.6\" y1=\"242\" x2=\"241.6\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"241.6\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"300.8\" y1=\"242\" x2=\"300.8\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"300.8\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"360\" y1=\"242\" x2=\"360\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"360\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\"></text><line x1=\"64\" y1=\"242\" x2=\"360\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"212\" y=\"290\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Molecular speed</text><text x=\"16\" y=\"131\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 131)\">Fraction of molecules</text><path d=\"M64 242L66.96 241.24L69.92 238.97L72.88 235.24L75.84 230.12L78.8 223.69L81.76 216.07L84.72 207.41L87.68 197.86L90.64 187.58L93.6 176.76L96.56 165.57L99.52 154.22L102.48 142.87L105.44 131.73L108.4 120.95L111.36 110.71L114.32 101.14L117.28 92.39L120.24 84.56L123.2 77.74L126.16 72L129.12 67.41L132.08 63.97L135.04 61.72L138 60.63L140.96 60.68L143.92 61.82L146.88 63.99L149.84 67.13L152.8 71.15L155.76 75.96L158.72 81.46L161.68 87.57L164.64 94.17L167.6 101.17L170.56 108.47L173.52 115.98L176.48 123.6L179.44 131.26L182.4 138.88L185.36 146.39L188.32 153.73L191.28 160.85L194.24 167.71L197.2 174.26L200.16 180.49L203.12 186.37L206.08 191.89L209.04 197.04L212 201.82L214.96 206.23L217.92 210.28L220.88 213.98L223.84 217.34L226.8 220.38L229.76 223.11L232.72 225.56L235.68 227.75L238.64 229.69L241.6 231.4L244.56 232.91L247.52 234.24L250.48 235.39L253.44 236.39L256.4 237.26L259.36 238.01L262.32 238.65L265.28 239.2L268.24 239.66L271.2 240.06L274.16 240.39L277.12 240.68L280.08 240.91L283.04 241.11L286 241.27L288.96 241.41L291.92 241.52L294.88 241.61L297.84 241.69L300.8 241.75L303.76 241.8L306.72 241.84L309.68 241.87L312.64 241.9L315.6 241.92L318.56 241.94L321.52 241.95L324.48 241.96L327.44 241.97L330.4 241.98L333.36 241.98L336.32 241.99L339.28 241.99L342.24 241.99L345.2 241.99L348.16 242L351.12 242L354.08 242L357.04 242L360 242\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 242L66.96 241.84L69.92 241.34L72.88 240.53L75.84 239.39L78.8 237.95L81.76 236.2L84.72 234.16L87.68 231.84L90.64 229.27L93.6 226.44L96.56 223.4L99.52 220.14L102.48 216.7L105.44 213.09L108.4 209.35L111.36 205.48L114.32 201.52L117.28 197.5L120.24 193.42L123.2 189.33L126.16 185.24L129.12 181.17L132.08 177.16L135.04 173.22L138 169.37L140.96 165.64L143.92 162.04L146.88 158.6L149.84 155.32L152.8 152.23L155.76 149.34L158.72 146.66L161.68 144.21L164.64 141.99L167.6 140L170.56 138.26L173.52 136.78L176.48 135.54L179.44 134.56L182.4 133.83L185.36 133.36L188.32 133.13L191.28 133.15L194.24 133.4L197.2 133.89L200.16 134.6L203.12 135.53L206.08 136.66L209.04 137.98L212 139.49L214.96 141.17L217.92 143L220.88 144.99L223.84 147.1L226.8 149.34L229.76 151.69L232.72 154.12L235.68 156.65L238.64 159.24L241.6 161.88L244.56 164.57L247.52 167.3L250.48 170.04L253.44 172.8L256.4 175.56L259.36 178.3L262.32 181.03L265.28 183.74L268.24 186.41L271.2 189.04L274.16 191.62L277.12 194.15L280.08 196.62L283.04 199.02L286 201.36L288.96 203.63L291.92 205.82L294.88 207.94L297.84 209.98L300.8 211.94L303.76 213.82L306.72 215.62L309.68 217.34L312.64 218.98L315.6 220.54L318.56 222.02L321.52 223.43L324.48 224.76L327.44 226.02L330.4 227.2L333.36 228.32L336.32 229.37L339.28 230.35L342.24 231.28L345.2 232.14L348.16 232.94L351.12 233.69L354.08 234.39L357.04 235.04L360 235.64\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"372\" y1=\"30\" x2=\"394\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"400\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">T₁</text><line x1=\"372\" y1=\"50\" x2=\"394\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"400\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">T₂</text></svg>",
     "alt": "Two curves of fraction of molecules against molecular speed. Curve T1 has a tall, narrow peak at a lower speed. Curve T2 has a lower, broader peak at a higher speed with a longer tail."
    }
   ]
  }
 }
};

export default EXAM;
