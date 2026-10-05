// AP Chemistry — Exam 4 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "ce4-1",
   "unit": 2,
   "stem": "What is the molecular geometry around the carbon atom in formaldehyde, H₂C=O?",
   "choices": [
    "Trigonal planar",
    "Trigonal pyramidal",
    "Tetrahedral",
    "Bent"
   ],
   "correct": 0,
   "explanation": "The carbon atom has three electron domains: two C–H single bonds and one C=O double bond (a double bond counts as one domain). With no lone pairs, the geometry is trigonal planar."
  },
  {
   "id": "ce4-2",
   "unit": 8,
   "stem": "Which of the following is a Lewis acid?",
   "choices": [
    "NH₃",
    "OH⁻",
    "Cl⁻",
    "BF₃"
   ],
   "correct": 3,
   "explanation": "A Lewis acid is an electron-pair acceptor. Boron in BF₃ has an incomplete octet (only six electrons) and can accept a pair of electrons. NH₃, OH⁻, and Cl⁻ each have lone pairs to donate, so they are Lewis bases."
  },
  {
   "id": "ce4-3",
   "unit": 3,
   "stem": "A solution has a transmittance of 10% at a certain wavelength. What is the absorbance of the solution at this wavelength? (A = −log T)",
   "choices": [
    "0.10",
    "1.0",
    "10",
    "100"
   ],
   "correct": 1,
   "explanation": "With T = 0.10, A = −log(0.10) = 1.0. An absorbance of 1.0 means that 90% of the light is absorbed."
  },
  {
   "id": "ce4-4",
   "unit": 4,
   "stem": "A 5.0 g sample of Mg (molar mass 24.3 g/mol) is burned in 5.0 g of O₂ (molar mass 32.0 g/mol): 2 Mg + O₂ → 2 MgO (molar mass of MgO = 40.3 g/mol). What is the maximum mass of MgO that can form?",
   "choices": [
    "12.6 g",
    "10.0 g",
    "8.3 g",
    "5.0 g"
   ],
   "correct": 2,
   "explanation": "There are 5.0/24.3 = 0.206 mol Mg and 5.0/32.0 = 0.156 mol O₂. The reaction needs 2 mol Mg for each mol O₂, so the Mg (0.206 mol) can use only 0.103 mol of O₂: Mg is limiting. It forms 0.206 mol of MgO, which has a mass of (0.206)(40.3) = 8.3 g."
  },
  {
   "id": "ce4-5",
   "unit": 3,
   "stem": "A gas has a density of 1.96 g/L at STP. What is the molar mass of the gas? (1 mol of an ideal gas occupies 22.4 L at STP.)",
   "choices": [
    "11.4 g/mol",
    "22.4 g/mol",
    "43.9 g/mol",
    "87.8 g/mol"
   ],
   "correct": 2,
   "explanation": "The molar mass is the density times the molar volume: (1.96 g/L)(22.4 L/mol) = 43.9 g/mol."
  },
  {
   "id": "ce4-6",
   "unit": 1,
   "stem": "What is the mass of 3.01 × 10²³ molecules of water? (Molar mass of H₂O = 18.0 g/mol; Avogadro's number = 6.02 × 10²³.)",
   "choices": [
    "36.0 g",
    "18.0 g",
    "9.00 g",
    "4.50 g"
   ],
   "correct": 2,
   "explanation": "3.01 × 10²³ molecules is 0.500 mol, and the mass is (0.500 mol)(18.0 g/mol) = 9.00 g."
  },
  {
   "id": "ce4-7",
   "unit": 9,
   "setId": "ce4-set1",
   "stem": "At which electrode does reduction occur?",
   "choices": [
    "The copper electrode, which is the cathode",
    "The aluminum electrode, which is the cathode",
    "The copper electrode, which is the anode",
    "The aluminum electrode, which is the anode"
   ],
   "correct": 0,
   "explanation": "Reduction occurs at the cathode, the electrode where the species with the more positive reduction potential is reduced. Cu²⁺ (E° = +0.34 V) is reduced to Cu at the copper electrode, and aluminum is oxidized at the anode."
  },
  {
   "id": "ce4-8",
   "unit": 9,
   "setId": "ce4-set1",
   "stem": "What is the standard cell potential, in volts?",
   "choices": [
    "1.32 V",
    "1.66 V",
    "2.00 V",
    "2.34 V"
   ],
   "correct": 2,
   "explanation": "E°cell = E°(cathode) − E°(anode) = 0.34 − (−1.66) = +2.00 V. Potentials are intensive properties and are not multiplied by the coefficients used to balance the electrons (2 Al + 3 Cu²⁺)."
  },
  {
   "id": "ce4-9",
   "unit": 7,
   "stem": "For CO(g) + 2 H₂(g) ⇌ CH₃OH(g), the equilibrium concentrations are [CO] = 0.20 M, [H₂] = 0.30 M, and [CH₃OH] = 0.12 M. What is the value of K?",
   "choices": [
    "0.15",
    "1.5",
    "6.7",
    "67"
   ],
   "correct": 2,
   "explanation": "K = [CH₃OH]/([CO][H₂]²) = 0.12/((0.20)(0.30)²) = 0.12/0.018 = 6.7."
  },
  {
   "id": "ce4-10",
   "unit": 3,
   "stem": "What volume of O₂ gas, measured at 300. K and 1.00 atm, is produced by the decomposition of 0.200 mol of H₂O₂? 2 H₂O₂(l) → 2 H₂O(l) + O₂(g) (R = 0.0821 L·atm/(mol·K))",
   "choices": [
    "1.23 L",
    "2.46 L",
    "4.92 L",
    "24.6 L"
   ],
   "correct": 1,
   "explanation": "The mole ratio H₂O₂ : O₂ is 2 : 1, so 0.200 mol H₂O₂ gives 0.100 mol O₂. Then V = nRT/P = (0.100)(0.0821)(300.)/(1.00) = 2.46 L."
  },
  {
   "id": "ce4-11",
   "unit": 4,
   "stem": "When aqueous lead(II) nitrate is mixed with aqueous potassium iodide, a yellow solid forms. Which is the net ionic equation?",
   "choices": [
    "Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s)",
    "Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq)",
    "K⁺(aq) + NO₃⁻(aq) → KNO₃(s)",
    "Pb²⁺(aq) + 2 NO₃⁻(aq) → Pb(NO₃)₂(s)"
   ],
   "correct": 0,
   "explanation": "The yellow solid is PbI₂, which is insoluble. K⁺ and NO₃⁻ stay dissolved as spectator ions. The net ionic equation shows only the ions that combine: Pb²⁺ + 2 I⁻ → PbI₂(s)."
  },
  {
   "id": "ce4-12",
   "unit": 5,
   "stem": "In a reaction mechanism, a catalyst and an intermediate are both species that do not appear in the overall balanced equation. Which statement correctly distinguishes them?",
   "choices": [
    "A catalyst is produced in an early step and consumed in a later step, while an intermediate is consumed first and regenerated later.",
    "A catalyst is present only in the first step, and an intermediate is present only in the last step.",
    "There is no difference between a catalyst and an intermediate.",
    "A catalyst is consumed in an early step and regenerated in a later step, while an intermediate is produced in one step and consumed in a later step."
   ],
   "correct": 3,
   "explanation": "A catalyst enters the mechanism as a reactant (it is consumed) and is regenerated in a later step, so it has no net change. An intermediate is the opposite: it is formed in an early step and consumed in a later step. Neither appears in the overall equation."
  },
  {
   "id": "ce4-13",
   "unit": 4,
   "stem": "A 1.50 g sample of impure CaCO₃ is heated and produces 0.0120 mol of CO₂ by CaCO₃(s) → CaO(s) + CO₂(g). The molar mass of CaCO₃ is 100.1 g/mol. What is the mass percent of CaCO₃ in the sample?",
   "choices": [
    "120%",
    "80.0%",
    "75.0%",
    "60.0%"
   ],
   "correct": 1,
   "explanation": "0.0120 mol CO₂ comes from 0.0120 mol CaCO₃, which has a mass of (0.0120)(100.1) = 1.20 g. The percent is (1.20/1.50)(100) = 80.0%."
  },
  {
   "id": "ce4-14",
   "unit": 7,
   "stem": "For H₂(g) + I₂(g) ⇌ 2 HI(g), a mixture has [H₂] = 0.10 M, [I₂] = 0.20 M, and [HI] = 0.40 M. What is the value of the reaction quotient, Q?",
   "choices": [
    "16",
    "8.0",
    "0.50",
    "0.010"
   ],
   "correct": 1,
   "explanation": "Q = [HI]²/([H₂][I₂]) = (0.40)²/((0.10)(0.20)) = 0.16/0.020 = 8.0."
  },
  {
   "id": "ce4-15",
   "unit": 3,
   "stem": "Which of the following liquids is expected to have the greatest viscosity at 25 °C?",
   "choices": [
    "CH₃OH (methanol)",
    "C₆H₁₄ (hexane)",
    "CH₃CH₂OH (ethanol)",
    "HOCH₂CH₂OH (ethylene glycol)"
   ],
   "correct": 3,
   "explanation": "Viscosity increases with the strength of the intermolecular forces and with the molecule's ability to become tangled. Ethylene glycol has two O–H groups per molecule and forms extensive hydrogen bonds, so its molecules resist flowing past one another more than the others."
  },
  {
   "id": "ce4-16",
   "unit": 7,
   "setId": "ce4-set2",
   "stem": "What does the data show about the enthalpy change of the reaction?",
   "choices": [
    "The reaction is exothermic, because K decreases as the temperature increases.",
    "The reaction is endothermic, because K decreases as the temperature increases.",
    "The reaction is exothermic, because K is greater than 1.",
    "Nothing can be concluded about ΔH from the value of K."
   ],
   "correct": 0,
   "explanation": "K decreases as the temperature rises, meaning the equilibrium shifts toward the reactants when heat is added. Heat acts like a product, which is the behavior of an exothermic reaction."
  },
  {
   "id": "ce4-17",
   "unit": 7,
   "setId": "ce4-set2",
   "stem": "A mixture of the gases at equilibrium at 500 K is heated to 600 K. What happens to the amount of product?",
   "choices": [
    "It decreases, because K is smaller at 600 K.",
    "It increases, because heating always favors the products.",
    "It stays the same, because the system was at equilibrium.",
    "It becomes zero."
   ],
   "correct": 0,
   "explanation": "At 600 K, K is smaller (2.5 versus 10), so the new equilibrium contains a smaller proportion of products. The system shifts toward the reactants until Q equals the new value of K."
  },
  {
   "id": "ce4-18",
   "unit": 3,
   "stem": "In a paper chromatography experiment, a nonpolar compound travels farther up the paper (greater R_f) than a polar compound when a nonpolar solvent is used with a polar paper. Which statement best explains this?",
   "choices": [
    "The nonpolar compound is attracted more strongly to the polar paper.",
    "The polar compound is more soluble in the nonpolar solvent.",
    "The compounds move at the same rate, but the nonpolar compound is lighter.",
    "The polar compound is attracted more strongly to the polar paper, so it moves more slowly with the solvent."
   ],
   "correct": 3,
   "explanation": "The paper (stationary phase) is polar, so polar compounds stick to it more strongly and spend less time dissolved in the moving nonpolar solvent. They travel a shorter distance, while nonpolar compounds are carried farther by the solvent."
  },
  {
   "id": "ce4-19",
   "unit": 2,
   "stem": "Lithium fluoride, LiF, has a much higher melting point than cesium iodide, CsI. Which statement best explains this?",
   "choices": [
    "The Li⁺ and F⁻ ions are smaller, so the distance between the ions is smaller and the Coulombic attraction is stronger.",
    "LiF has covalent bonds, and CsI has ionic bonds.",
    "The ions in CsI have greater charges than the ions in LiF.",
    "LiF has stronger London dispersion forces than CsI."
   ],
   "correct": 0,
   "explanation": "Both compounds are made of ions with charges of +1 and −1, so the difference is in the ion sizes. Smaller ions can approach one another more closely, and by Coulomb's law the attractive force increases as the distance decreases. LiF therefore has the greater lattice energy and the higher melting point."
  },
  {
   "id": "ce4-20",
   "unit": 3,
   "setId": "ce4-set3",
   "stem": "Which liquid has the strongest intermolecular forces?",
   "choices": [
    "Liquid A, because it has the highest vapor pressure at any given temperature.",
    "Liquid B, because its curve is in the middle.",
    "They all have the same intermolecular forces, because the curves have the same shape.",
    "Liquid C, because it has the lowest vapor pressure at any given temperature."
   ],
   "correct": 3,
   "explanation": "Stronger intermolecular forces make it harder for molecules to escape into the gas phase, so the vapor pressure is lower at a given temperature and a higher temperature is needed to reach 760 torr. Liquid C has the lowest vapor pressure at each temperature."
  },
  {
   "id": "ce4-21",
   "unit": 3,
   "setId": "ce4-set3",
   "stem": "What is the normal boiling point of liquid B?",
   "choices": [
    "35 °C",
    "78 °C",
    "100 °C",
    "760 °C"
   ],
   "correct": 1,
   "explanation": "The normal boiling point is the temperature at which the vapor pressure equals 760 torr. Curve B crosses the 760 torr line at about 78 °C."
  },
  {
   "id": "ce4-22",
   "unit": 3,
   "stem": "The boiling points of the noble gases increase from helium (−269 °C) to xenon (−108 °C). Which statement best explains this trend?",
   "choices": [
    "The London dispersion forces increase as the atoms get larger and have more electrons.",
    "The dipole–dipole forces increase as the atomic number increases.",
    "The noble gas atoms form stronger covalent bonds as they get larger.",
    "The hydrogen bonding increases down the group."
   ],
   "correct": 0,
   "explanation": "The noble gases are nonpolar atoms, so the only attractions between them are London dispersion forces. Larger atoms have more electrons and are more polarizable, so the dispersion forces and the boiling points are greater."
  },
  {
   "id": "ce4-23",
   "unit": 4,
   "setId": "ce4-set4",
   "stem": "Which equation best represents the reaction shown?",
   "choices": [
    "A + B₂ → AB₂",
    "A + B → AB",
    "3 A + B₂ → 2 AB + A",
    "2 A + B₂ → 2 AB"
   ],
   "correct": 3,
   "explanation": "Two B₂ molecules (four B atoms) combined with four of the six A atoms to form four AB molecules, leaving two A atoms unreacted. The ratio of reactants consumed is 4 A : 2 B₂ = 2 A : 1 B₂, giving 2 A + B₂ → 2 AB."
  },
  {
   "id": "ce4-24",
   "unit": 4,
   "setId": "ce4-set4",
   "stem": "Which reactant limits the amount of product that can form?",
   "choices": [
    "A",
    "AB",
    "Neither, because both are partly consumed.",
    "B₂"
   ],
   "correct": 3,
   "explanation": "The limiting reactant is completely used up. No B₂ molecules remain after the reaction, while two A atoms are left over, so B₂ limited the amount of product that could form."
  },
  {
   "id": "ce4-25",
   "unit": 9,
   "stem": "Which statement is true of a reaction at equilibrium?",
   "choices": [
    "ΔG = 0, and ΔG° = −RT ln K",
    "ΔG° = 0, and K = 1",
    "ΔG > 0, because the reaction is not spontaneous",
    "ΔG < 0, because the reaction is spontaneous"
   ],
   "correct": 0,
   "explanation": "At equilibrium there is no net driving force for the reaction, so ΔG = 0. The standard free energy change is related to the equilibrium constant by ΔG° = −RT ln K, and it is zero only if K = 1."
  },
  {
   "id": "ce4-26",
   "unit": 7,
   "stem": "A system at equilibrium contains N₂, H₂, and NH₃. Some NH₃ is removed from the container at constant temperature and volume. What happens?",
   "choices": [
    "The equilibrium shifts toward the reactants, forming more N₂ and H₂.",
    "The value of K increases.",
    "Nothing happens, because the system is at equilibrium.",
    "The equilibrium shifts toward the products, forming more NH₃."
   ],
   "correct": 3,
   "explanation": "Removing a product reduces its concentration, so Q becomes smaller than K. By Le Châtelier's principle, the system shifts toward the products to replace some of the NH₃. K does not change, because the temperature is constant."
  },
  {
   "id": "ce4-27",
   "unit": 9,
   "stem": "Use the standard molar entropies (in J/(mol·K)): N₂(g) = 191.6, H₂(g) = 130.7, NH₃(g) = 192.5. What is ΔS° for N₂(g) + 3 H₂(g) → 2 NH₃(g)?",
   "choices": [
    "+198.7 J/K",
    "+97.7 J/K",
    "−97.7 J/K",
    "−198.7 J/K"
   ],
   "correct": 3,
   "explanation": "ΔS° = ΣS°(products) − ΣS°(reactants) = 2(192.5) − [191.6 + 3(130.7)] = 385.0 − 583.7 = −198.7 J/K. The entropy decreases because four moles of gas become two."
  },
  {
   "id": "ce4-28",
   "unit": 1,
   "stem": "The radius of the Li⁺ ion is much smaller than the radius of the Li atom. Which statement best explains this?",
   "choices": [
    "Li⁺ has lost its outer 2s electron, leaving only the 1s electrons that are held more tightly, and the same nuclear charge now attracts fewer electrons.",
    "Li⁺ has more protons than Li, so the nuclear charge is greater.",
    "The Li⁺ ion has a larger number of electrons than the Li atom.",
    "The 1s electrons in Li⁺ are less strongly attracted to the nucleus."
   ],
   "correct": 0,
   "explanation": "When Li loses its valence electron from the 2s subshell, the outermost shell is removed entirely. The remaining two 1s electrons are in a smaller shell and are pulled in by the same nuclear charge (3+), so the ion is much smaller."
  },
  {
   "id": "ce4-29",
   "unit": 2,
   "stem": "How many valence electrons must be shown in a correct Lewis structure of the nitrate ion, NO₃⁻?",
   "choices": [
    "26",
    "24",
    "23",
    "22"
   ],
   "correct": 1,
   "explanation": "Nitrogen contributes 5 electrons and each oxygen contributes 6, for 5 + 3(6) = 23. The negative charge adds one more electron, for a total of 24."
  },
  {
   "id": "ce4-30",
   "unit": 6,
   "stem": "How much thermal energy is absorbed by a 25.0 g sample of aluminum when its temperature increases from 20.0 °C to 100.0 °C? (The specific heat of aluminum is 0.900 J/(g·°C).)",
   "choices": [
    "225 J",
    "1.80 kJ",
    "2.25 kJ",
    "18.0 kJ"
   ],
   "correct": 1,
   "explanation": "q = mcΔT = (25.0 g)(0.900 J/(g·°C))(80.0 °C) = 1800 J = 1.80 kJ."
  },
  {
   "id": "ce4-31",
   "unit": 8,
   "stem": "What is the hydroxide ion concentration of a solution with a pH of 4.20 at 25 °C?",
   "choices": [
    "6.3 × 10⁻¹⁰ M",
    "1.6 × 10⁻⁴ M",
    "6.3 × 10⁻⁵ M",
    "1.6 × 10⁻¹⁰ M"
   ],
   "correct": 3,
   "explanation": "pOH = 14.00 − 4.20 = 9.80, so [OH⁻] = 10^(−9.80) = 1.6 × 10⁻¹⁰ M. The value 6.3 × 10⁻⁵ M is [H⁺] for this solution."
  },
  {
   "id": "ce4-32",
   "unit": 1,
   "setId": "ce4-set5",
   "stem": "Name the element whose atoms gave this spectrum.",
   "choices": [
    "Nitrogen",
    "Fluorine",
    "Carbon",
    "Oxygen"
   ],
   "correct": 3,
   "explanation": "The relative peak heights are 2 : 2 : 4, corresponding to 1s²2s²2p⁴. That is 8 electrons, so the element has 8 protons and is oxygen."
  },
  {
   "id": "ce4-33",
   "unit": 1,
   "setId": "ce4-set5",
   "stem": "How would the photoelectron spectrum of fluorine compare with this spectrum?",
   "choices": [
    "The 2p peak would be taller (5 electrons), and all of the peaks would be at higher binding energies.",
    "The 2p peak would be taller (5 electrons), and all of the peaks would be at lower binding energies.",
    "The 2s peak would be taller, and the 2p peak would be the same height.",
    "The spectrum would be identical, because both elements are in the same period."
   ],
   "correct": 0,
   "explanation": "Fluorine has configuration 1s²2s²2p⁵, so its 2p peak represents five electrons rather than four. It also has one more proton, which increases the effective nuclear charge and the binding energy of every subshell."
  },
  {
   "id": "ce4-34",
   "unit": 5,
   "setId": "ce4-set6",
   "stem": "What is the rate constant for the reaction?",
   "choices": [
    "20.0 s⁻¹",
    "0.916 s⁻¹",
    "0.0500 s⁻¹",
    "0.0200 s⁻¹"
   ],
   "correct": 2,
   "explanation": "A linear plot of ln[A] versus time shows the reaction is first order. The slope equals −k. The line falls by 0.50 for every 10 s, so the slope is −0.050 s⁻¹ and k = 0.050 s⁻¹."
  },
  {
   "id": "ce4-35",
   "unit": 5,
   "setId": "ce4-set6",
   "stem": "What was the initial concentration of A?",
   "choices": [
    "0.40 M",
    "0.92 M",
    "1.0 M",
    "2.5 M"
   ],
   "correct": 0,
   "explanation": "The y-intercept of the line is ln[A]₀ = −0.916, so [A]₀ = e^(−0.916) = 0.40 M. The intercept is the logarithm of the initial concentration, not the concentration itself."
  },
  {
   "id": "ce4-36",
   "unit": 5,
   "setId": "ce4-set6",
   "stem": "What is the half-life of the reaction?",
   "choices": [
    "27.7 s",
    "20.0 s",
    "13.9 s",
    "6.9 s"
   ],
   "correct": 2,
   "explanation": "For a first-order reaction, t½ = ln 2/k = 0.693/0.0500 s⁻¹ = 13.9 s."
  },
  {
   "id": "ce4-37",
   "unit": 4,
   "stem": "In the reaction 2 Al(s) + 3 Cu²⁺(aq) → 2 Al³⁺(aq) + 3 Cu(s), which species is the reducing agent?",
   "choices": [
    "Cu²⁺",
    "Al³⁺",
    "Al",
    "Cu"
   ],
   "correct": 2,
   "explanation": "The reducing agent is the species that is oxidized, which gives up electrons. Aluminum goes from 0 to +3 and is oxidized, so Al is the reducing agent. Copper(II) is reduced (+2 to 0) and is the oxidizing agent."
  },
  {
   "id": "ce4-38",
   "unit": 1,
   "stem": "Naturally occurring boron consists of two isotopes: ¹⁰B (mass 10.0 amu, 19.9% abundance) and ¹¹B (mass 11.0 amu, 80.1% abundance). What is the average atomic mass of boron?",
   "choices": [
    "10.2 amu",
    "10.5 amu",
    "10.8 amu",
    "11.0 amu"
   ],
   "correct": 2,
   "explanation": "The average atomic mass is (0.199)(10.0) + (0.801)(11.0) = 1.99 + 8.81 = 10.8 amu, which is close to 11 because ¹¹B is much more abundant."
  },
  {
   "id": "ce4-39",
   "unit": 3,
   "stem": "What is the pressure of 0.50 mol of an ideal gas in a 2.5 L container at 300. K? (R = 0.0821 L·atm/(mol·K))",
   "choices": [
    "49.3 atm",
    "9.86 atm",
    "4.93 atm",
    "2.46 atm"
   ],
   "correct": 2,
   "explanation": "P = nRT/V = (0.50)(0.0821)(300.)/(2.5) = 12.3/2.5 = 4.93 atm."
  },
  {
   "id": "ce4-40",
   "unit": 2,
   "stem": "In which of the following molecules is the carbon atom sp² hybridized?",
   "choices": [
    "C₂H₂ (ethyne)",
    "C₂H₄ (ethene)",
    "CH₄ (methane)",
    "CO₂"
   ],
   "correct": 1,
   "explanation": "Each carbon atom in ethene has three electron domains (two C–H bonds and one C=C double bond), which corresponds to sp² hybridization. The carbon atoms in ethyne and CO₂ are sp (two domains), and carbon in methane is sp³ (four domains)."
  },
  {
   "id": "ce4-41",
   "unit": 5,
   "stem": "According to collision theory, which of the following best explains why increasing the concentration of the reactants usually increases the reaction rate?",
   "choices": [
    "The activation energy of the reaction decreases.",
    "Each collision has more energy.",
    "The rate constant increases.",
    "The molecules collide more frequently, so more effective collisions occur per unit time."
   ],
   "correct": 3,
   "explanation": "A higher concentration puts more molecules in a given volume, so collisions are more frequent. The fraction of collisions with enough energy and the correct orientation does not change, but the number of effective collisions per second increases. The rate constant and activation energy depend on temperature and catalysts, not concentration."
  },
  {
   "id": "ce4-42",
   "unit": 6,
   "stem": "Use the average bond enthalpies C–H = 413 kJ/mol, Cl–Cl = 243 kJ/mol, C–Cl = 339 kJ/mol, and H–Cl = 431 kJ/mol to estimate ΔH for CH₄ + Cl₂ → CH₃Cl + HCl.",
   "choices": [
    "−114 kJ",
    "−38 kJ",
    "+38 kJ",
    "+114 kJ"
   ],
   "correct": 0,
   "explanation": "One C–H bond and one Cl–Cl bond are broken: 413 + 243 = 656 kJ. One C–Cl bond and one H–Cl bond are formed: 339 + 431 = 770 kJ. ΔH ≈ 656 − 770 = −114 kJ."
  },
  {
   "id": "ce4-43",
   "unit": 6,
   "stem": "The standard enthalpies of formation are ΔHf°[SO₂(g)] = −296.8 kJ/mol and ΔHf°[SO₃(g)] = −395.7 kJ/mol. What is ΔH° for 2 SO₂(g) + O₂(g) → 2 SO₃(g)?",
   "choices": [
    "+197.8 kJ",
    "+98.9 kJ",
    "−98.9 kJ",
    "−197.8 kJ"
   ],
   "correct": 3,
   "explanation": "ΔH° = 2(−395.7) − [2(−296.8) + 0] = −791.4 + 593.6 = −197.8 kJ. The coefficients in the balanced equation multiply the enthalpies of formation."
  },
  {
   "id": "ce4-44",
   "unit": 8,
   "stem": "What is the pH of a 0.050 M solution of HNO₃?",
   "choices": [
    "0.050",
    "1.30",
    "2.30",
    "12.70"
   ],
   "correct": 1,
   "explanation": "HNO₃ is a strong acid, so [H⁺] = 0.050 M and pH = −log(0.050) = 1.30."
  },
  {
   "id": "ce4-45",
   "unit": 3,
   "stem": "Which of the following solvents would best dissolve iodine, I₂?",
   "choices": [
    "CCl₄",
    "H₂O",
    "CH₃OH",
    "NH₃"
   ],
   "correct": 0,
   "explanation": "Iodine is a nonpolar molecule held together by London dispersion forces. By the principle that like dissolves like, it dissolves best in a nonpolar solvent such as carbon tetrachloride. Water, methanol, and ammonia are polar and form hydrogen bonds with themselves."
  },
  {
   "id": "ce4-46",
   "unit": 8,
   "stem": "Which of the following pairs of substances, dissolved in water, would make an effective buffer?",
   "choices": [
    "HCl and NaCl",
    "HNO₃ and NaNO₃",
    "NaOH and NaCl",
    "CH₃COOH and CH₃COONa"
   ],
   "correct": 3,
   "explanation": "A buffer contains a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable amounts. Acetic acid and sodium acetate meet this requirement. HCl and HNO₃ are strong acids, and NaOH is a strong base."
  },
  {
   "id": "ce4-47",
   "unit": 6,
   "stem": "A student dissolves a solid in water in an insulated cup, and the temperature of the solution increases. Which statement is correct?",
   "choices": [
    "The dissolving process is endothermic, because the solution gained thermal energy.",
    "The dissolving process is exothermic, because thermal energy is released to the solution.",
    "The dissolving process has ΔH > 0, because the temperature increased.",
    "The dissolving process does not involve a change in energy."
   ],
   "correct": 1,
   "explanation": "The temperature of the solution increased because the dissolving process released thermal energy to it. A process that releases heat to the surroundings is exothermic, with ΔH < 0."
  },
  {
   "id": "ce4-48",
   "unit": 3,
   "stem": "Hydrogen gas is collected over water at a total pressure of 755 torr. The vapor pressure of water at the temperature of the experiment is 23.8 torr. What is the partial pressure of the hydrogen?",
   "choices": [
    "779 torr",
    "755 torr",
    "731 torr",
    "23.8 torr"
   ],
   "correct": 2,
   "explanation": "By Dalton's law, the total pressure is the sum of the partial pressures: P(H₂) = P_total − P(H₂O) = 755 − 23.8 = 731 torr."
  },
  {
   "id": "ce4-49",
   "unit": 6,
   "stem": "Which of the following is a state function?",
   "choices": [
    "Enthalpy, H",
    "The heat, q, absorbed by a system for a specific path",
    "The work done by a system for a specific path",
    "The time taken for a reaction"
   ],
   "correct": 0,
   "explanation": "A state function depends only on the current state of the system, not on how it got there. Enthalpy is a state function, which is why Hess's law works. Heat and work depend on the path."
  },
  {
   "id": "ce4-50",
   "unit": 5,
   "stem": "A reaction is first order in A and zero order in B. If [A] is doubled and [B] is halved, what happens to the rate of the reaction?",
   "choices": [
    "The rate is unchanged.",
    "The rate is halved.",
    "The rate doubles.",
    "The rate quadruples."
   ],
   "correct": 2,
   "explanation": "The rate depends on [A] to the first power, so doubling [A] doubles the rate. The reaction is zero order in B, so changing [B] has no effect. The net effect is that the rate doubles."
  },
  {
   "id": "ce4-51",
   "unit": 9,
   "stem": "A reaction has ΔH = +30 kJ and ΔS = +100 J/K. At what temperature does the reaction become spontaneous?",
   "choices": [
    "Above 30 K",
    "Above 300 K",
    "Above 3000 K",
    "At no temperature"
   ],
   "correct": 1,
   "explanation": "The reaction is spontaneous when ΔG = ΔH − TΔS < 0, so T > ΔH/ΔS = (30,000 J)/(100 J/K) = 300 K."
  },
  {
   "id": "ce4-52",
   "unit": 7,
   "stem": "The reaction N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) is exothermic. How does the value of K change if the temperature is increased?",
   "choices": [
    "K increases, because the reaction rate increases.",
    "K decreases, because the equilibrium shifts toward the reactants.",
    "K does not change, because K depends only on the concentrations.",
    "K increases, because heat is added to the system."
   ],
   "correct": 1,
   "explanation": "For an exothermic reaction, heat is a product, so raising the temperature shifts the equilibrium toward the reactants and the value of K decreases. K depends on temperature, not on the concentrations."
  },
  {
   "id": "ce4-53",
   "unit": 8,
   "stem": "A 0.10 M solution of a weak acid HA has a pH of 3.00. What is the approximate value of K_a for the acid?",
   "choices": [
    "1.0 × 10⁻⁷",
    "1.0 × 10⁻⁵",
    "1.0 × 10⁻³",
    "1.0 × 10⁻¹"
   ],
   "correct": 1,
   "explanation": "[H⁺] = [A⁻] = 1.0 × 10⁻³ M, and [HA] ≈ 0.10 − 0.001 ≈ 0.10 M. K_a = [H⁺][A⁻]/[HA] = (1.0 × 10⁻³)²/(0.10) = 1.0 × 10⁻⁵."
  },
  {
   "id": "ce4-54",
   "unit": 2,
   "stem": "Which of the following is a molecular solid?",
   "choices": [
    "I₂",
    "NaCl",
    "SiO₂",
    "Cu"
   ],
   "correct": 0,
   "explanation": "A molecular solid consists of discrete molecules held together by intermolecular forces. Solid iodine is made of I₂ molecules held by London dispersion forces. NaCl is ionic, SiO₂ is a network covalent solid, and Cu is a metallic solid."
  },
  {
   "id": "ce4-55",
   "unit": 8,
   "stem": "A chemist wants to prepare a buffer with pH equal to the pK_a of a weak acid HA. Starting with 0.20 mol of HA, how many moles of NaOH should be added?",
   "choices": [
    "0.40 mol",
    "0.20 mol",
    "0.10 mol",
    "0.050 mol"
   ],
   "correct": 2,
   "explanation": "The pH equals the pK_a when [A⁻] = [HA]. NaOH converts HA into A⁻ one-for-one, so converting half of the 0.20 mol of HA requires 0.10 mol of NaOH."
  },
  {
   "id": "ce4-56",
   "unit": 3,
   "stem": "A 10.0 mL sample of 0.500 M solution is diluted with water to a final volume of 100. mL. Then 25.0 mL of this diluted solution is diluted with water to a final volume of 50.0 mL. What is the concentration of the final solution?",
   "choices": [
    "0.0125 M",
    "0.0250 M",
    "0.0500 M",
    "0.250 M"
   ],
   "correct": 1,
   "explanation": "The first dilution gives (0.500 M)(10.0/100.) = 0.0500 M. The second dilution halves it: (0.0500 M)(25.0/50.0) = 0.0250 M."
  },
  {
   "id": "ce4-57",
   "unit": 9,
   "stem": "How much charge must pass through a solution of Ag⁺ to deposit 1.08 g of silver at the cathode? (Ag⁺ + e⁻ → Ag; molar mass of Ag = 108 g/mol; 1 F = 96,500 C/mol e⁻)",
   "choices": [
    "96,500 C",
    "9,650 C",
    "965 C",
    "96.5 C"
   ],
   "correct": 2,
   "explanation": "1.08 g of Ag is 0.0100 mol. One electron is needed per Ag atom, so 0.0100 mol of electrons, with a charge of (0.0100)(96,500) = 965 C."
  },
  {
   "id": "ce4-58",
   "unit": 8,
   "setId": "ce4-set7",
   "stem": "Estimate the pH of the mixture at the point where 12.5 mL of NaOH has been added.",
   "choices": [
    "1.00",
    "3.14",
    "7.00",
    "8.37"
   ],
   "correct": 1,
   "explanation": "At 12.5 mL, half of the HF has been converted to F⁻, so [HF] = [F⁻] and pH = pK_a = 3.14."
  },
  {
   "id": "ce4-59",
   "unit": 8,
   "setId": "ce4-set7",
   "stem": "How does the pH at the equivalence point compare with 7, and why?",
   "choices": [
    "It is equal to 7, because the acid and base are present in equal amounts.",
    "It is less than 7, because HF is an acid.",
    "It is greater than 7, because excess NaOH is present.",
    "It is greater than 7, because F⁻ is the conjugate base of a weak acid and reacts with water to produce OH⁻."
   ],
   "correct": 3,
   "explanation": "At the equivalence point the solution contains F⁻, the conjugate base of a weak acid, which hydrolyzes: F⁻ + H₂O ⇌ HF + OH⁻. The solution is therefore basic, with a pH greater than 7."
  },
  {
   "id": "ce4-60",
   "unit": 8,
   "setId": "ce4-set7",
   "stem": "Which indicator is the most appropriate for this titration?",
   "choices": [
    "Methyl orange, which changes color in the pH range 3.1–4.4",
    "Bromocresol green, which changes color in the pH range 3.8–5.4",
    "Phenolphthalein, which changes color in the pH range 8.2–10.0",
    "Thymol blue (acid range), which changes color in the pH range 1.2–2.8"
   ],
   "correct": 2,
   "explanation": "An indicator should change color near the pH of the equivalence point. For this titration the equivalence point is in the basic range (about pH 8), so phenolphthalein, which changes color between pH 8.2 and 10.0, is the best choice."
  }
 ],
 "sets": {
  "ce4-set1": {
   "text": "A galvanic cell is made from an aluminum electrode in 1.0 M Al³⁺ and a copper electrode in 1.0 M Cu²⁺, connected by a salt bridge. The standard reduction potentials are: Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V; Al³⁺ + 3e⁻ → Al, E° = −1.66 V.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"60\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"61\" y=\"165\" width=\"128\" height=\"84\" fill=\"#DCEBF3\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"330\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"331\" y=\"165\" width=\"128\" height=\"84\" fill=\"#E8F1DF\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"105\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"375\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"140\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Al</text><text x=\"410\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Cu</text><text x=\"125\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Al³⁺</text><text x=\"395\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Cu²⁺</text><path d=\"M116 90L116 50L225 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M386 90L386 50L295 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"50\" r=\"22\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">V</text><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#D8D2C0\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"260\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">salt bridge</text><line x1=\"135\" y1=\"34\" x2=\"205\" y2=\"34\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"205,34 196.82,37.65 196.82,30.35\" fill=\"#2E332E\"/><text x=\"170\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">e⁻</text></svg>",
     "alt": "A galvanic cell with an aluminum electrode in aluminum ion solution on the left and a copper electrode in copper ion solution on the right, connected by a wire with a voltmeter and a salt bridge. Electrons flow through the wire from the aluminum toward the copper."
    }
   ]
  },
  "ce4-set2": {
   "text": "The equilibrium constant for a gas-phase reaction was measured at three temperatures. The data are shown in the table.",
   "figures": [
    {
     "table": {
      "headers": [
       "Temperature (K)",
       "K"
      ],
      "rows": [
       [
        "400",
        "50"
       ],
       [
        "500",
        "10"
       ],
       [
        "600",
        "2.5"
       ]
      ]
     }
    }
   ]
  },
  "ce4-set3": {
   "text": "The graph shows the vapor pressure of three liquids, A, B, and C, as a function of temperature. The horizontal line marks 760 torr (1 atm).",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"400\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"230\" x2=\"400\" y2=\"230\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"234\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"64\" y1=\"188\" x2=\"400\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">400</text><line x1=\"64\" y1=\"146\" x2=\"400\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">600</text><line x1=\"64\" y1=\"104\" x2=\"400\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">800</text><line x1=\"64\" y1=\"62\" x2=\"400\" y2=\"62\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"66\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1000</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1200</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"148\" y1=\"272\" x2=\"148\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"148\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"232\" y1=\"272\" x2=\"232\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"232\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"316\" y1=\"272\" x2=\"316\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"316\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"400\" y1=\"272\" x2=\"400\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"272\" x2=\"400\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Temperature (°C)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Vapor pressure (torr)</text><path d=\"M64 196.61L68.2 192.74L72.4 188.68L76.6 184.41L80.8 179.92L85 175.2L89.2 170.23L93.4 165.02L97.6 159.53L101.8 153.77L106 147.7L110.2 141.33L114.4 134.63L118.6 127.59L122.8 120.18L127 112.4L131.2 104.22L135.4 95.61L139.6 86.57L143.8 77.06L148 67.07L152.2 56.56L156.4 45.52L160.6 33.9L164.8 21.7\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 263.22L68.2 262.77L72.4 262.29L76.6 261.8L80.8 261.27L85 260.72L89.2 260.15L93.4 259.54L97.6 258.9L101.8 258.23L106 257.52L110.2 256.78L114.4 256L118.6 255.18L122.8 254.32L127 253.41L131.2 252.46L135.4 251.45L139.6 250.4L143.8 249.29L148 248.13L152.2 246.9L156.4 245.62L160.6 244.27L164.8 242.84L169 241.35L173.2 239.78L177.4 238.13L181.6 236.39L185.8 234.56L190 232.64L194.2 230.63L198.4 228.5L202.6 226.27L206.8 223.93L211 221.46L215.2 218.87L219.4 216.15L223.6 213.29L227.8 210.28L232 207.11L236.2 203.78L240.4 200.29L244.6 196.61L248.8 192.74L253 188.68L257.2 184.41L261.4 179.92L265.6 175.2L269.8 170.23L274 165.02L278.2 159.53L282.4 153.77L286.6 147.7L290.8 141.33L295 134.63L299.2 127.59L303.4 120.18L307.6 112.4L311.8 104.22L316 95.61L320.2 86.57L324.4 77.06L328.6 67.07L332.8 56.56L337 45.52L341.2 33.9L345.4 21.7\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 269.08L68.2 268.93L72.4 268.77L76.6 268.6L80.8 268.43L85 268.25L89.2 268.05L93.4 267.85L97.6 267.64L101.8 267.42L106 267.18L110.2 266.93L114.4 266.67L118.6 266.4L122.8 266.11L127 265.81L131.2 265.49L135.4 265.16L139.6 264.81L143.8 264.44L148 264.05L152.2 263.65L156.4 263.22L160.6 262.77L164.8 262.29L169 261.8L173.2 261.27L177.4 260.72L181.6 260.15L185.8 259.54L190 258.9L194.2 258.23L198.4 257.52L202.6 256.78L206.8 256L211 255.18L215.2 254.32L219.4 253.41L223.6 252.46L227.8 251.45L232 250.4L236.2 249.29L240.4 248.13L244.6 246.9L248.8 245.62L253 244.27L257.2 242.84L261.4 241.35L265.6 239.78L269.8 238.13L274 236.39L278.2 234.56L282.4 232.64L286.6 230.63L290.8 228.5L295 226.27L299.2 223.93L303.4 221.46L307.6 218.87L311.8 216.15L316 213.29L320.2 210.28L324.4 207.11L328.6 203.78L332.8 200.29L337 196.61L341.2 192.74L345.4 188.68L349.6 184.41L353.8 179.92L358 175.2L362.2 170.23L366.4 165.02L370.6 159.53L374.8 153.77L379 147.7L383.2 141.33L387.4 134.63L391.6 127.59L395.8 120.18L400 112.4\" fill=\"none\" stroke=\"#6E9A5E\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"64\" y1=\"112.4\" x2=\"400\" y2=\"112.4\" stroke=\"#9AA096\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"72.4\" y=\"104\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">760 torr</text><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Liquid A</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Liquid B</text><line x1=\"412\" y1=\"70\" x2=\"434\" y2=\"70\" stroke=\"#6E9A5E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"74\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Liquid C</text></svg>",
     "alt": "A graph of vapor pressure in torr against temperature in degrees Celsius for three liquids. All three curves rise with temperature. Liquid A crosses the 760 torr line at about 35 degrees, liquid B at about 78 degrees, and liquid C at about 100 degrees."
    }
   ]
  },
  "ce4-set4": {
   "text": "The particle diagrams show a mixture of A atoms and B₂ molecules before and after a reaction goes to completion.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 354 240\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"90\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Before reaction</text><rect x=\"15\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><circle cx=\"82.82\" cy=\"98.91\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"131.55\" cy=\"139.53\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"83.94\" cy=\"130.53\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"73.05\" cy=\"65.31\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"124.27\" cy=\"60.94\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"50.54\" cy=\"101.26\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"35.16\" y1=\"56.13\" x2=\"46.3\" y2=\"60.6\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"35.16\" cy=\"56.13\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"46.3\" cy=\"60.6\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"110.25\" y1=\"90.41\" x2=\"116.8\" y2=\"100.47\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"110.25\" cy=\"90.41\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"116.8\" cy=\"100.47\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"264\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">After reaction</text><rect x=\"189\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"239.48\" y1=\"97.37\" x2=\"230.08\" y2=\"104.83\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"239.48\" cy=\"97.37\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"230.08\" cy=\"104.83\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"254.09\" y1=\"55.18\" x2=\"251.95\" y2=\"66.99\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"254.09\" cy=\"55.18\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"251.95\" cy=\"66.99\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"305.81\" y1=\"84.75\" x2=\"308.96\" y2=\"96.33\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"305.81\" cy=\"84.75\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"308.96\" cy=\"96.33\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"205.36\" y1=\"120.75\" x2=\"217.32\" y2=\"121.8\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"205.36\" cy=\"120.75\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"217.32\" cy=\"121.8\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"285.94\" cy=\"118.18\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"254.18\" cy=\"127.16\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"22\" cy=\"224\" r=\"7\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"35\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom A</text><circle cx=\"112\" cy=\"224\" r=\"7\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"125\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom B</text></svg>",
     "alt": "Two boxes of particles. Before the reaction the box contains six single A atoms and two B2 molecules. After the reaction it contains four AB molecules and two single A atoms."
    }
   ]
  },
  "ce4-set5": {
   "text": "The photoelectron spectrum of a neutral atom of an element in the second period is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"226\" x2=\"496\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"486.91\" y1=\"226\" x2=\"486.91\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"486.91\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.1</text><line x1=\"429.92\" y1=\"226\" x2=\"429.92\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"429.92\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"267.39\" y1=\"226\" x2=\"267.39\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"267.39\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"56\" y1=\"226\" x2=\"56\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><text x=\"276\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Binding energy (MJ/mol)</text><text x=\"16\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 125)\">Relative number of electrons</text><line x1=\"115.34\" y1=\"226\" x2=\"115.34\" y2=\"145.2\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"115.34\" y=\"138.2\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">1s</text><line x1=\"361.01\" y1=\"226\" x2=\"361.01\" y2=\"145.2\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"361.01\" y=\"138.2\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2s</text><line x1=\"416.18\" y1=\"226\" x2=\"416.18\" y2=\"64.4\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"416.18\" y=\"57.4\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2p</text></svg>",
     "alt": "A photoelectron spectrum on a logarithmic binding energy axis with three peaks: 53.2 megajoules per mole with relative height 2, 3.12 with height 2, and 1.31 with height 4."
    }
   ]
  },
  "ce4-set6": {
   "text": "The concentration of reactant A was monitored over time for the reaction A → products, and the natural logarithm of the concentration was plotted against time. The data fall on a straight line, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-4.0</text><line x1=\"64\" y1=\"227.43\" x2=\"496\" y2=\"227.43\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"231.43\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-3.5</text><line x1=\"64\" y1=\"192.86\" x2=\"496\" y2=\"192.86\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"196.86\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-3.0</text><line x1=\"64\" y1=\"158.29\" x2=\"496\" y2=\"158.29\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"162.29\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-2.5</text><line x1=\"64\" y1=\"123.71\" x2=\"496\" y2=\"123.71\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"127.71\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-2.0</text><line x1=\"64\" y1=\"89.14\" x2=\"496\" y2=\"89.14\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"93.14\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-1.5</text><line x1=\"64\" y1=\"54.57\" x2=\"496\" y2=\"54.57\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"58.57\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-1.0</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-0.5</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"262\" x2=\"136\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"208\" y1=\"262\" x2=\"208\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"280\" y1=\"262\" x2=\"280\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"352\" y1=\"262\" x2=\"352\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"424\" y1=\"262\" x2=\"424\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"496\" y1=\"262\" x2=\"496\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time (s)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">ln [A]</text><path d=\"M64 48.78L136 83.35L208 117.93L280 152.5L352 187.07L424 221.64L496 256.21\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"48.78\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"136\" cy=\"83.35\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"208\" cy=\"117.93\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"280\" cy=\"152.5\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"352\" cy=\"187.07\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"424\" cy=\"221.64\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"496\" cy=\"256.21\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/></svg>",
     "alt": "A graph of the natural logarithm of the concentration of A against time in seconds. Seven points fall on a straight line decreasing from minus 0.92 at 0 seconds to minus 3.92 at 60 seconds, a slope of minus 0.050 per second."
    }
   ]
  },
  "ce4-set7": {
   "text": "A 25.0 mL sample of 0.100 M hydrofluoric acid, HF (K_a = 7.2 × 10⁻⁴, pK_a = 3.14), is titrated with 0.100 M NaOH. The titration curve is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"236\" x2=\"496\" y2=\"236\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"240\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"200\" x2=\"496\" y2=\"200\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"164\" x2=\"496\" y2=\"164\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"168\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"128\" x2=\"496\" y2=\"128\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"92\" x2=\"496\" y2=\"92\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"60\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">14</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"150.4\" y1=\"272\" x2=\"150.4\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150.4\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"236.8\" y1=\"272\" x2=\"236.8\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"236.8\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"323.2\" y1=\"272\" x2=\"323.2\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"323.2\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"409.6\" y1=\"272\" x2=\"409.6\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"409.6\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume of base added (mL)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">pH</text><path d=\"M64 234.38L66.7 233.71L69.4 233.04L72.1 232.37L74.8 231.72L77.5 231.08L80.2 230.44L82.9 229.83L85.6 229.22L88.3 228.64L91 228.06L93.7 227.51L96.4 226.96L99.1 226.43L101.8 225.92L104.5 225.41L107.2 224.92L109.9 224.44L112.6 223.97L115.3 223.51L118 223.05L120.7 222.61L123.4 222.18L126.1 221.75L128.8 221.33L131.5 220.91L134.2 220.5L136.9 220.1L139.6 219.7L142.3 219.31L145 218.91L147.7 218.53L150.4 218.14L153.1 217.76L155.8 217.38L158.5 217L161.2 216.62L163.9 216.24L166.6 215.86L169.3 215.49L172 215.11L174.7 214.73L177.4 214.35L180.1 213.97L182.8 213.58L185.5 213.2L188.2 212.81L190.9 212.42L193.6 212.02L196.3 211.62L199 211.21L201.7 210.8L204.4 210.38L207.1 209.95L209.8 209.52L212.5 209.07L215.2 208.62L217.9 208.15L220.6 207.67L223.3 207.18L226 206.67L228.7 206.15L231.4 205.6L234.1 205.03L236.8 204.44L239.5 203.82L242.2 203.16L244.9 202.47L247.6 201.73L250.3 200.94L253 200.08L255.7 199.15L258.4 198.12L261.1 196.98L263.8 195.67L266.5 194.14L269.2 192.29L271.9 189.95L274.6 186.68L277.3 181.16L280 129.37L282.7 77.72L285.4 72.35L288.1 69.23L290.8 67.03L293.5 65.33L296.2 63.96L298.9 62.8L301.6 61.8L304.3 60.93L307 60.15L309.7 59.45L312.4 58.81L315.1 58.23L317.8 57.7L320.5 57.21L323.2 56.75L325.9 56.32L328.6 55.91L331.3 55.53L334 55.18L336.7 54.84L339.4 54.52L342.1 54.21L344.8 53.92L347.5 53.65L350.2 53.38L352.9 53.13L355.6 52.89L358.3 52.65L361 52.43L363.7 52.21L366.4 52.01L369.1 51.81L371.8 51.61L374.5 51.43L377.2 51.25L379.9 51.07L382.6 50.9L385.3 50.74L388 50.58L390.7 50.43L393.4 50.28L396.1 50.13L398.8 49.99L401.5 49.85L404.2 49.72L406.9 49.59L409.6 49.46L412.3 49.34L415 49.22L417.7 49.1L420.4 48.99L423.1 48.87L425.8 48.76L428.5 48.66L431.2 48.55L433.9 48.45L436.6 48.35L439.3 48.25L442 48.16L444.7 48.06L447.4 47.97L450.1 47.88L452.8 47.79L455.5 47.71L458.2 47.62L460.9 47.54L463.6 47.46L466.3 47.38L469 47.3L471.7 47.22L474.4 47.15L477.1 47.07L479.8 47L482.5 46.93L485.2 46.86L487.9 46.79L490.6 46.72L493.3 46.65L496 46.59\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A titration curve of pH against volume of 0.100 molar NaOH added. The pH begins near 2.1, rises gradually through a buffer region, rises steeply near 25 milliliters to about pH 11, and levels off near pH 12.5."
    }
   ]
  }
 }
};

export default EXAM;
