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
   "explanation": "Correct: (A) Trigonal planar. Count the electron domains on carbon. In H₂C=O, carbon forms two C–H single bonds and one C=O double bond, and a double bond counts as a single electron domain. Carbon has no lone pairs, so there are three bonding domains and zero lone pairs (AX₃). Three domains spread as far apart as possible lie in one plane at about 120°, so the molecular geometry is trigonal planar and carbon is sp² hybridized.\n\n(B) is wrong because trigonal pyramidal requires three bonding domains plus one lone pair (like NH₃), but the carbon in formaldehyde has no lone pair.\n(C) is wrong because tetrahedral requires four electron domains; this comes from counting the C=O double bond as two domains instead of one.\n(D) is wrong because bent geometry needs lone pairs on the central atom (like H₂O or SO₂), and carbon here has three bonded atoms and no lone pairs."
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
   "explanation": "Correct: (D) BF₃. A Lewis acid is an electron-pair acceptor and a Lewis base is an electron-pair donor. In BF₃, boron forms three B–F bonds and has only six valence electrons around it, an incomplete octet with an empty p orbital. It readily accepts a lone pair, for example from NH₃ to form the adduct F₃B–NH₃. Each of the other species has lone pairs available to donate.\n\n(A) is wrong because NH₃ has a lone pair on nitrogen that it donates, so it is a classic Lewis base (it is the donor in F₃B–NH₃).\n(B) is wrong because OH⁻ carries three lone pairs on oxygen and donates one to H⁺ or metal ions, so it acts as a Lewis base.\n(C) is wrong because Cl⁻ has a complete octet with four lone pairs and can only donate electron pairs, which makes it a Lewis base, not an acid."
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
   "explanation": "Correct: (B) 1.0. Absorbance and transmittance are related by A = −log T, where T is written as a fraction, not a percent. A transmittance of 10% means T = 0.10, so A = −log(0.10) = −(−1.0) = 1.0. An absorbance of 1.0 means that only one tenth of the incident light passes through the sample and 90% is absorbed. Absorbance has no units.\n\n(A) is wrong because 0.10 is the transmittance itself written as a fraction; it is not converted with A = −log T.\n(C) is wrong because 10 comes from using the percent value (10) directly or from 1/T, rather than taking −log of T = 0.10.\n(D) is wrong because an absorbance of 100 would mean T = 10⁻¹⁰⁰, essentially no light getting through; it mixes up the percent scale with absorbance, but −log(0.10) is only 1.0."
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
   "explanation": "Correct: (C) 8.3 g. This is a limiting-reactant problem. Moles of Mg = 5.0 g ÷ 24.3 g/mol = 0.206 mol; moles of O₂ = 5.0 g ÷ 32.0 g/mol = 0.156 mol. The equation needs 2 mol Mg per mol O₂, so 0.206 mol Mg can react with only 0.103 mol O₂; O₂ is in excess and Mg is limiting. Mg and MgO are in a 2 : 2 ratio, so 0.206 mol MgO forms: (0.206 mol)(40.3 g/mol) = 8.3 g.\n\n(A) is wrong because 12.6 g is the yield if O₂ were limiting: 0.156 mol O₂ × 2 × 40.3 g/mol, but there is not enough Mg to use all the O₂.\n(B) is wrong because 10.0 g is the total mass of both reactants, which would all become MgO only if both were used up completely; O₂ is in excess (only 0.103 of 0.156 mol reacts), so less product forms.\n(D) is wrong because 5.0 g is the mass of the Mg alone; the product MgO also contains the mass of the oxygen that combined with it."
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
   "explanation": "Correct: (C) 43.9 g/mol. At STP one mole of an ideal gas occupies 22.4 L. The density is the mass of one liter, so the mass of one mole (the molar mass) is the density times the molar volume: M = (1.96 g/L)(22.4 L/mol) = 43.9 g/mol. This value matches CO₂ (44.0 g/mol). Units confirm the setup: g/L × L/mol = g/mol.\n\n(A) is wrong because 11.4 g/mol comes from dividing 22.4 by 1.96 instead of multiplying, which gives units of L²/(g·mol) rather than g/mol.\n(B) is wrong because 22.4 g/mol mistakes the molar volume (22.4 L/mol) for the molar mass and ignores the measured density.\n(D) is wrong because 87.8 g/mol is double the correct value, as if the molar volume were taken as 44.8 L/mol or the result multiplied by 2."
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
   "explanation": "Correct: (C) 9.00 g. Convert molecules to moles with Avogadro's number, then moles to grams with the molar mass. Moles = (3.01 × 10²³ molecules)/(6.02 × 10²³ molecules/mol) = 0.500 mol. Mass = (0.500 mol)(18.0 g/mol) = 9.00 g. Since 3.01 × 10²³ is exactly half of Avogadro's number, the mass is half the molar mass, a useful check.\n\n(A) is wrong because 36.0 g corresponds to 2.00 mol, which results from dividing 6.02 × 10²³ by 3.01 × 10²³ (inverting the conversion).\n(B) is wrong because 18.0 g is the mass of one full mole (6.02 × 10²³ molecules), but the sample contains only half a mole.\n(D) is wrong because 4.50 g is the mass of 0.250 mol, which halves the moles a second time; 3.01 × 10²³ molecules is 0.500 mol."
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
   "explanation": "Correct: (A) The copper electrode, which is the cathode. Reduction always occurs at the cathode. The half-reaction with the more positive standard reduction potential proceeds as a reduction: Cu²⁺ + 2e⁻ → Cu (E° = +0.34 V) is far more positive than Al³⁺ + 3e⁻ → Al (E° = −1.66 V). So Cu²⁺ is reduced and copper metal plates onto the copper electrode, the cathode, while Al is oxidized at the aluminum anode. The figure agrees: electrons flow through the wire from Al toward Cu.\n\n(B) is wrong because aluminum has the much more negative reduction potential, so it is oxidized, and oxidation makes the aluminum electrode the anode.\n(C) is wrong because the copper electrode is where reduction occurs, and by definition the electrode where reduction occurs is the cathode, not the anode.\n(D) is wrong because the aluminum electrode is indeed the anode, but oxidation (loss of electrons from Al) occurs there, not reduction."
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
   "explanation": "Correct: (C) 2.00 V. Use E°cell = E°(cathode) − E°(anode). Copper is the cathode (Cu²⁺ reduced) and aluminum is the anode (Al oxidized), so E°cell = (+0.34 V) − (−1.66 V) = +2.00 V. Reduction potentials are intensive properties, so they are not multiplied by the coefficients (2 Al + 3 Cu²⁺ → 2 Al³⁺ + 3 Cu) used to balance the electrons. The positive value confirms the cell is galvanic.\n\n(A) is wrong because 1.32 V results from subtracting 0.34 from 1.66 (dropping the negative sign on the aluminum potential) instead of 0.34 − (−1.66).\n(B) is wrong because 1.66 V is just the magnitude of the aluminum half-cell potential and leaves out the copper half-cell's +0.34 V contribution.\n(D) is wrong because 2.34 V comes from multiplying the copper potential by 2 (2 × 0.34 + 1.66); potentials are intensive and are never scaled by coefficients."
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
   "explanation": "Correct: (C) 6.7. Write K as products over reactants, each raised to its coefficient: K = [CH₃OH]/([CO][H₂]²). Substituting: K = 0.12/((0.20)(0.30)²) = 0.12/((0.20)(0.090)) = 0.12/0.018 = 6.7. The H₂ concentration must be squared because its coefficient is 2. With two significant figures in the data, the answer is 6.7.\n\n(A) is wrong because 0.15 is the inverted expression, 0.018/0.12, which is the equilibrium constant for the reverse reaction.\n(B) is wrong because 1.5 is the reciprocal of 0.67 (0.018 ÷ 0.012 after a decimal slip), not products over reactants with H₂ squared.\n(D) is wrong because 67 is ten times too large, the result of a decimal error such as using 0.0018 for (0.20)(0.30)²."
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
   "explanation": "Correct: (B) 2.46 L. First use stoichiometry: 2 H₂O₂ → 2 H₂O + O₂, so 0.200 mol H₂O₂ produces 0.200 ÷ 2 = 0.100 mol O₂. Then apply the ideal gas law: V = nRT/P = (0.100 mol)(0.0821 L·atm/(mol·K))(300. K)/(1.00 atm) = 2.46 L. Only the oxygen is a gas; the water is a liquid and does not add to the gas volume.\n\n(A) is wrong because 1.23 L corresponds to 0.0500 mol O₂, which uses a 4 : 1 ratio or halves the moles twice instead of once.\n(C) is wrong because 4.92 L uses 0.200 mol of O₂, ignoring the 2 : 1 mole ratio between H₂O₂ and O₂ in the balanced equation.\n(D) is wrong because 24.6 L is the volume of a full mole of gas at 300. K and 1.00 atm, ten times the 0.100 mol actually produced."
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
   "explanation": "Correct: (A) Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s). Write the complete ionic equation: Pb²⁺ + 2 NO₃⁻ + 2 K⁺ + 2 I⁻ → PbI₂(s) + 2 K⁺ + 2 NO₃⁻. The yellow precipitate is lead(II) iodide, since nitrates and potassium salts are always soluble. K⁺ and NO₃⁻ appear unchanged on both sides, so they are spectator ions and are cancelled. The net ionic equation keeps only the species that actually react: Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s).\n\n(B) is wrong because this is the molecular (formula) equation; it still shows the spectator ions K⁺ and NO₃⁻ as parts of the dissolved compounds.\n(C) is wrong because KNO₃ is soluble in water, so K⁺ and NO₃⁻ remain dissolved as spectator ions and do not form a solid.\n(D) is wrong because Pb(NO₃)₂ is a soluble nitrate (it was one of the starting solutions), so it does not precipitate."
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
   "explanation": "Correct: (D) A catalyst is consumed in an early step and regenerated in a later step, while an intermediate is produced in one step and consumed in a later step. A catalyst enters the mechanism as a reactant in an early step (it is consumed) and is produced again in a later step, so it has no net change and is present at the start. An intermediate is the opposite: it is produced in one step and consumed in a later step, so it never exists before or after the reaction. Both cancel from the overall equation, but the order of consumption and formation tells them apart.\n\n(A) is wrong because this statement reverses the two definitions: a catalyst is consumed first and regenerated, while an intermediate is formed first and then consumed.\n(B) is wrong because both a catalyst and an intermediate appear in at least two steps of the mechanism, not only in the first or last step.\n(C) is wrong because they differ in the order of formation and consumption, and a catalyst is present at the start while an intermediate is not."
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
   "explanation": "Correct: (B) 80.0%. CaCO₃ → CaO + CO₂ has a 1 : 1 ratio, so 0.0120 mol CO₂ came from 0.0120 mol CaCO₃. That mass is (0.0120 mol)(100.1 g/mol) = 1.20 g. Mass percent = (mass of CaCO₃ / mass of sample) × 100 = (1.20 g / 1.50 g)(100) = 80.0%. The other 0.30 g is impurity that does not release CO₂.\n\n(A) is wrong because a mass percent of a component can never exceed 100%; 120% treats the 1.20 g as if it were the percent itself.\n(C) is wrong because 75.0% would require only 1.125 g of CaCO₃ (0.0112 mol), not the 0.0120 mol shown by the CO₂ collected.\n(D) is wrong because 60.0% would require 0.900 g of CaCO₃ (0.00899 mol), which does not match the 1 : 1 ratio with 0.0120 mol CO₂."
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
   "explanation": "Correct: (B) 8.0. The reaction quotient has the same form as K but uses the current concentrations: Q = [HI]²/([H₂][I₂]). Substituting: Q = (0.40)²/((0.10)(0.20)) = 0.16/0.020 = 8.0. HI is squared because its coefficient is 2. Comparing Q with K tells which way the mixture will shift, but the question asks only for Q.\n\n(A) is wrong because 16 comes from dividing 0.16 by 0.010 instead of 0.020, a slip in multiplying (0.10)(0.20) for the denominator.\n(C) is wrong because 0.50 is just [H₂]/[I₂] = 0.10/0.20, which leaves out the product HI entirely; Q = (0.40)²/((0.10)(0.20)) = 8.0 (and even its inverse would be 0.125).\n(D) is wrong because 0.010 is not products over reactants; it is about half the denominator (0.020) and leaves out the (0.40)² numerator."
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
   "explanation": "Correct: (D) HOCH₂CH₂OH (ethylene glycol). Viscosity, the resistance to flow, increases with the strength of the intermolecular forces and with the number of attachment points between molecules. Ethylene glycol, HOCH₂CH₂OH, has two O–H groups per molecule, so each molecule can hydrogen bond at both ends and form an extensive network. Methanol and ethanol have only one O–H group each, and hexane has only London dispersion forces. Ethylene glycol (about 16 mPa·s) is far more viscous than the others.\n\n(A) is wrong because methanol has only one O–H group and a small molecule, so it forms fewer hydrogen bonds and flows easily (low viscosity).\n(B) is wrong because hexane is nonpolar and has only London dispersion forces, so despite its chain it is a runny, low-viscosity liquid.\n(C) is wrong because ethanol has only one O–H group per molecule, so its hydrogen-bond network is weaker than ethylene glycol's two-ended network."
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
   "explanation": "Correct: (A) The reaction is exothermic, because K decreases as the temperature increases. The table shows K = 50 at 400 K, 10 at 500 K, and 2.5 at 600 K, so K decreases as the temperature increases. For an exothermic reaction heat behaves like a product; adding heat shifts the equilibrium toward the reactants, which lowers K. An endothermic reaction would show the opposite trend. The temperature dependence of K (van 't Hoff reasoning) is what reveals the sign of ΔH.\n\n(B) is wrong because an endothermic reaction treats heat as a reactant, so its K would increase, not decrease, as the temperature rises.\n(C) is wrong because the size of K at a single temperature reflects ΔG°, not ΔH; the sign of ΔH comes from how K changes with temperature.\n(D) is wrong because the change in K with temperature does reveal the sign of ΔH, and the data clearly show K falling as T rises."
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
   "explanation": "Correct: (A) It decreases, because K is smaller at 600 K. From the table, K is 10 at 500 K but only 2.5 at 600 K. When the mixture is heated, the old concentrations now give Q = 10 > K = 2.5, so the reaction shifts toward the reactants until Q falls to the new K. This consumes product, so the amount of product decreases. This is consistent with the exothermic reaction identified from the data.\n\n(B) is wrong because heating favors the products only for an endothermic reaction; here K decreases with temperature, so heating favors the reactants.\n(C) is wrong because K changes with temperature, so the old equilibrium mixture is no longer at equilibrium at 600 K and must shift.\n(D) is wrong because K is still 2.5 at 600 K, a positive value, so a substantial amount of product remains at the new equilibrium."
  },
  {
   "id": "ce4-18",
   "unit": 3,
   "stem": "In a paper chromatography experiment, a nonpolar compound travels farther up the paper (greater R_f) than a polar compound when a nonpolar solvent is used with a polar paper. Which statement best explains this?",
   "choices": [
    "The nonpolar compound is attracted more strongly to the polar paper than the polar compound is.",
    "The polar compound is more soluble in the nonpolar solvent, so it travels the farthest.",
    "The compounds move at the same rate, but the nonpolar compound is the lighter one.",
    "The polar compound sticks more strongly to the polar paper, so it moves more slowly."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The polar compound sticks more strongly to the polar paper, so it moves more slowly. In paper chromatography the paper is the polar stationary phase and the nonpolar solvent is the mobile phase. A compound's R_f depends on how it divides its time between the two phases. A polar compound is attracted to the polar paper (for example by hydrogen bonding with cellulose), so it spends more time stuck to the paper and moves more slowly. The nonpolar compound dissolves well in the nonpolar solvent and is carried farther, giving the larger R_f.\n\n(A) is wrong because a nonpolar compound is attracted only weakly to polar paper; strong attraction to the paper would make it move less, not farther.\n(B) is wrong because by like dissolves like, the polar compound is less soluble in the nonpolar solvent, and it travels the shorter distance.\n(C) is wrong because separation depends on differences in attraction to the two phases, not on molecular mass, and the compounds clearly move at different rates."
  },
  {
   "id": "ce4-19",
   "unit": 2,
   "stem": "Lithium fluoride, LiF, has a much higher melting point than cesium iodide, CsI. Which statement best explains this?",
   "choices": [
    "The Li⁺ and F⁻ ions are smaller, so the Coulombic attraction between them is stronger.",
    "LiF has covalent bonds between its atoms, while CsI has ionic bonds between its ions.",
    "The ions in CsI have greater charges than the ions in LiF, so CsI holds together more strongly.",
    "LiF has much stronger London dispersion forces than CsI because it has more electrons."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The Li⁺ and F⁻ ions are smaller, so the Coulombic attraction between them is stronger. Both compounds contain +1 and −1 ions, so the charges are equal and the difference must come from ion size. By Coulomb's law, F ∝ q₁q₂/r², and the lattice energy grows as the distance between ion centers shrinks. Li⁺ and F⁻ are among the smallest ions, while Cs⁺ and I⁻ are among the largest. The closer approach in LiF gives a much larger lattice energy and a higher melting point (845 °C versus 621 °C).\n\n(B) is wrong because both LiF and CsI are ionic compounds made of a metal and a nonmetal; neither is held together by covalent bonds.\n(C) is wrong because Cs⁺ and I⁻ have charges of +1 and −1, the same as Li⁺ and F⁻, so charge cannot explain the difference.\n(D) is wrong because LiF has far fewer electrons than CsI, and the dominant forces in both solids are ionic attractions, not London dispersion forces."
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
   "explanation": "Correct: (D) Liquid C, because it has the lowest vapor pressure at any given temperature. Stronger intermolecular forces hold molecules in the liquid more tightly, so fewer escape to the vapor at a given temperature. The graph shows that at every temperature curve C lies lowest, and it does not reach 760 torr until about 100 °C. Liquid C therefore has the lowest vapor pressure and the highest normal boiling point, both signs of the strongest intermolecular forces.\n\n(A) is wrong because a high vapor pressure means molecules escape easily, which indicates the weakest intermolecular forces, not the strongest.\n(B) is wrong because being in the middle of the graph means intermediate vapor pressure and intermediate forces, not the strongest.\n(C) is wrong because the curves are displaced from one another, reaching 760 torr at about 35, 78 and 100 °C, so the forces clearly differ."
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
   "explanation": "Correct: (B) 78 °C. The normal boiling point is the temperature at which the vapor pressure equals 1 atm, 760 torr. On the graph, curve B rises and crosses the dashed 760 torr line at about 78 °C. That is the temperature at which liquid B boils at standard atmospheric pressure, matching ethanol's boiling point of 78 °C.\n\n(A) is wrong because 35 °C is where curve A, not curve B, crosses the 760 torr line, so it is liquid A's normal boiling point.\n(C) is wrong because 100 °C is where curve C reaches 760 torr; at that temperature liquid B's vapor pressure is far above 1 atm.\n(D) is wrong because 760 is the pressure in torr that defines the normal boiling point, not a temperature read from the graph."
  },
  {
   "id": "ce4-22",
   "unit": 3,
   "stem": "The boiling points of the noble gases increase from helium (−269 °C) to xenon (−108 °C). Which statement best explains this trend?",
   "choices": [
    "The London dispersion forces increase as the atoms get larger with more electrons.",
    "The dipole–dipole forces increase as the atomic number of the noble gas increases.",
    "The atoms form stronger covalent bonds with each other as the atoms get larger.",
    "The hydrogen bonding between the atoms increases going down the group."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The London dispersion forces increase as the atoms get larger with more electrons. Noble gases exist as single nonpolar atoms, so the only attractions between them are London dispersion forces. Going down the group from He to Xe, the atoms have more electrons in larger, more diffuse electron clouds that are more polarizable. More polarizable atoms form larger temporary dipoles, so the dispersion forces strengthen and more energy is needed to separate the atoms, raising the boiling point from −269 °C to −108 °C.\n\n(B) is wrong because noble gas atoms are symmetrical and have no permanent dipole, so there are no dipole–dipole forces between them.\n(C) is wrong because noble gas atoms have filled valence shells and do not form covalent bonds with one another under normal conditions.\n(D) is wrong because hydrogen bonding requires H bonded to N, O, or F, and noble gas atoms contain no hydrogen at all."
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
   "explanation": "Correct: (D) 2 A + B₂ → 2 AB. Compare the boxes. Before: six A atoms and two B₂ molecules. After: four AB molecules and two unreacted A atoms. So four A atoms and two B₂ molecules (four B atoms) were consumed to make four AB. Dividing by the common factor 2 gives 2 A + B₂ → 2 AB. Leftover A is excess reactant and is not written in the balanced equation.\n\n(A) is wrong because the product in the figure is AB (one A, one B), not AB₂, and this equation would not account for four AB molecules.\n(B) is wrong because B exists as diatomic B₂ molecules in the reactant box, so the reactant must be written as B₂, not B.\n(C) is wrong because this equation includes unreacted A on both sides; excess reactant is cancelled and does not appear in a balanced equation."
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
   "explanation": "Correct: (D) B₂. The limiting reactant is the one completely used up, which determines how much product forms. In the after box, no B₂ molecules (no free B) remain, while two A atoms are left over. Both B₂ molecules were consumed and made four AB molecules; with more B₂, more of the leftover A could have reacted. So B₂ limited the amount of product.\n\n(A) is wrong because two A atoms remain unreacted after the reaction, so A is the excess reactant, not the limiting one.\n(B) is wrong because AB is the product of the reaction, so it cannot be a reactant that limits how much product forms.\n(C) is wrong because all of the B₂ was consumed while only part of the A was, so B₂ is clearly the limiting reactant."
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
   "explanation": "Correct: (A) ΔG = 0, and ΔG° = −RT ln K. At equilibrium there is no net driving force in either direction, so the free energy change under the actual conditions is zero: ΔG = ΔG° + RT ln Q = 0, with Q = K. Rearranging gives ΔG° = −RT ln K. ΔG° itself is generally not zero; it equals zero only in the special case K = 1. This relationship links thermodynamic data to equilibrium constants.\n\n(B) is wrong because ΔG° is zero only for the special case K = 1; at equilibrium in general it is ΔG, not ΔG°, that equals zero.\n(C) is wrong because ΔG > 0 means the reverse reaction is spontaneous, so the system would still be changing and not at equilibrium.\n(D) is wrong because ΔG < 0 means the forward reaction still proceeds spontaneously, so the system has not yet reached equilibrium."
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
   "explanation": "Correct: (D) The equilibrium shifts toward the products, forming more NH₃. Removing NH₃ lowers its concentration, so Q = [NH₃]²/([N₂][H₂]³) becomes smaller than K. By Le Châtelier's principle, the system responds by shifting toward the products, converting some N₂ and H₂ into NH₃ until Q again equals K. K itself does not change because the temperature is constant; only temperature changes K.\n\n(A) is wrong because removing a product makes Q < K, which drives the reaction forward toward products, not backward toward N₂ and H₂.\n(B) is wrong because K depends only on temperature, and the temperature is constant, so K keeps the same value.\n(C) is wrong because removing NH₃ disturbs the equilibrium (Q no longer equals K), so the system must shift to restore it."
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
   "explanation": "Correct: (D) −198.7 J/K. ΔS° = ΣnS°(products) − ΣnS°(reactants). Products: 2(192.5) = 385.0 J/K. Reactants: 191.6 + 3(130.7) = 191.6 + 392.1 = 583.7 J/K. ΔS° = 385.0 − 583.7 = −198.7 J/K. The negative sign makes sense: four moles of gas become two moles of gas, so the number of possible arrangements, and the entropy, decreases.\n\n(A) is wrong because +198.7 J/K has the right magnitude but subtracts products from reactants, giving the wrong sign for a reaction that reduces moles of gas.\n(B) is wrong because a positive ΔS° is impossible here: the reaction goes from 4 mol to 2 mol of gas, so ΔS° must be negative (it is −198.7 J/K).\n(C) is wrong because −97.7 J/K has the right sign but only about half the right size; products 2(192.5) = 385.0 minus reactants 191.6 + 3(130.7) = 583.7 gives −198.7 J/K."
  },
  {
   "id": "ce4-28",
   "unit": 1,
   "stem": "The radius of the Li⁺ ion is much smaller than the radius of the Li atom. Which statement best explains this?",
   "choices": [
    "The outer 2s electron is removed, leaving only the more tightly held 1s electrons.",
    "Li⁺ has more protons than the Li atom, so the nuclear charge is greater.",
    "The Li⁺ ion has a larger number of electrons than the neutral Li atom has.",
    "The 1s electrons in Li⁺ are less strongly attracted to the nucleus than before."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The outer 2s electron is removed, leaving only the more tightly held 1s electrons. Lithium is 1s²2s¹. Forming Li⁺ removes the single 2s electron, which empties the entire second shell. The ion keeps only the 1s² electrons, which are much closer to the nucleus. The nuclear charge (3+) is unchanged, but it now pulls on only two electrons in the n = 1 shell, and there is no outer shell left, so Li⁺ (about 76 pm) is much smaller than Li (about 152 pm).\n\n(B) is wrong because ionization removes an electron but never changes the number of protons; Li and Li⁺ both have 3 protons.\n(C) is wrong because Li⁺ has one fewer electron than Li (2 instead of 3), since a positive ion forms by losing an electron.\n(D) is wrong because with one fewer electron there is less repulsion, so the 1s electrons are held as strongly or more strongly, not less."
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
   "explanation": "Correct: (B) 24. Add the valence electrons of each atom, then adjust for the charge. Nitrogen (group 15) has 5, and each oxygen (group 16) has 6: 5 + 3(6) = 23. The 1− charge means one extra electron, so the total is 23 + 1 = 24 valence electrons. A correct Lewis structure shows these 24 electrons as one N=O and two N–O bonds with resonance.\n\n(A) is wrong because 26 adds three extra electrons, as if the ion carried a 3− charge; NO₃⁻ has a charge of only 1−.\n(C) is wrong because 23 is the count for the neutral atoms; it forgets to add the one extra electron that gives the ion its 1− charge.\n(D) is wrong because 22 subtracts one electron for the charge instead of adding it; a negative charge means extra electrons."
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
   "explanation": "Correct: (B) 1.80 kJ. Use q = mcΔT. ΔT = 100.0 °C − 20.0 °C = 80.0 °C. q = (25.0 g)(0.900 J/(g·°C))(80.0 °C) = 1800 J = 1.80 kJ. The value is positive because the aluminum absorbs heat. Three significant figures are justified by the data. Note that a temperature change in °C equals the change in kelvins, so either scale gives the same ΔT.\n\n(A) is wrong because 225 J corresponds to a temperature change of only 10.0 °C; the actual change is 80.0 °C.\n(C) is wrong because 2.25 kJ uses the final temperature (100.0 °C) as ΔT instead of the change from 20.0 °C to 100.0 °C.\n(D) is wrong because 18.0 kJ is ten times too large, a decimal slip in converting 1800 J to kilojoules (1800 J = 1.80 kJ)."
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
   "explanation": "Correct: (D) 1.6 × 10⁻¹⁰ M. At 25 °C, pH + pOH = 14.00. pOH = 14.00 − 4.20 = 9.80. [OH⁻] = 10^(−9.80) = 10^(0.20) × 10⁻¹⁰ = 1.6 × 10⁻¹⁰ M. Check: [H⁺] = 10^(−4.20) = 6.3 × 10⁻⁵ M, and (6.3 × 10⁻⁵)(1.6 × 10⁻¹⁰) = 1.0 × 10⁻¹⁴ = K_w. The solution is acidic, so [OH⁻] is very small.\n\n(A) is wrong because 6.3 × 10⁻¹⁰ M uses the wrong mantissa: 10^(−9.80) is 10^(0.20) × 10⁻¹⁰ = 1.6 × 10⁻¹⁰, not 10^(0.80) × 10⁻¹⁰.\n(B) is wrong because 1.6 × 10⁻⁴ M equals 10^(−3.80), a slip in taking the antilog of −4.20; it is not [OH⁻] and is also not [H⁺].\n(C) is wrong because 6.3 × 10⁻⁵ M is [H⁺] = 10^(−4.20); the question asks for [OH⁻], which requires using pOH = 9.80."
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
   "explanation": "Correct: (D) Oxygen. In a photoelectron spectrum each peak is a subshell, and the peak height is proportional to the number of electrons in it. The highest binding energy peak (53.2 MJ/mol) is 1s, the next (3.12 MJ/mol) is 2s, and the lowest (1.31 MJ/mol) is 2p. Heights of 2 : 2 : 4 give the configuration 1s²2s²2p⁴, a total of 8 electrons. A neutral atom with 8 electrons has 8 protons: oxygen.\n\n(A) is wrong because nitrogen is 1s²2s²2p³, so its 2p peak would represent 3 electrons, not the 4 shown.\n(B) is wrong because fluorine is 1s²2s²2p⁵, so its 2p peak would be 2.5 times the height of the 2s peak, not twice.\n(C) is wrong because carbon is 1s²2s²2p², so its 2p peak would be the same height as the 1s and 2s peaks, not twice as tall."
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
   "explanation": "Correct: (A) The 2p peak would be taller (5 electrons), and all of the peaks would be at higher binding energies. Fluorine has the configuration 1s²2s²2p⁵, so its 2p peak represents 5 electrons instead of oxygen's 4 and is taller; the 1s and 2s peaks still represent 2 electrons each. Fluorine also has 9 protons instead of 8, so every electron feels a greater nuclear charge. Each subshell's electrons are held more tightly, and all three peaks move to higher binding energies (for example, fluorine's 1s is about 67 MJ/mol).\n\n(B) is wrong because the extra proton in fluorine increases the attraction for every electron, so the binding energies increase, not decrease.\n(C) is wrong because the 2s subshell is full (2 electrons) in both atoms; the added electron goes into 2p, so the 2p peak grows.\n(D) is wrong because elements in the same period have different numbers of protons and electrons, so their spectra differ in peak heights and positions."
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
   "explanation": "Correct: (C) 0.0500 s⁻¹. A straight-line plot of ln[A] versus time means the reaction is first order, with ln[A] = −kt + ln[A]₀. The slope equals −k. From the graph, ln[A] falls from −0.92 at 0 s to −3.92 at 60 s: slope = (−3.92 − (−0.92))/(60 s) = −3.00/60 s = −0.0500 s⁻¹. Therefore k = 0.0500 s⁻¹.\n\n(A) is wrong because 20.0 s⁻¹ is 1/k (1 ÷ 0.0500) and has the wrong units; 20.0 s is the time for ln[A] to fall by 1.\n(B) is wrong because 0.916 is the magnitude of the y-intercept, ln[A]₀, not the slope of the line, which gives the rate constant.\n(D) is wrong because 0.0200 s⁻¹ would mean ln[A] falls by only 0.20 every 10 s, but the graph shows a fall of 0.50 every 10 s."
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
   "explanation": "Correct: (A) 0.40 M. For a first-order reaction, ln[A] = −kt + ln[A]₀, so the y-intercept at t = 0 equals ln[A]₀. The graph's intercept is −0.92 (−0.916). Taking the antilog: [A]₀ = e^(−0.916) = 0.40 M. The intercept is the natural log of the starting concentration, so it must be converted with e^x before it is reported as a concentration.\n\n(B) is wrong because 0.92 is the magnitude of the intercept, ln[A]₀; it must be converted with e^(−0.916) to get the concentration.\n(C) is wrong because 1.0 M would give ln[A]₀ = 0, so the line would start at zero, but it starts at −0.92.\n(D) is wrong because 2.5 M equals e^(+0.916), which drops the negative sign of the intercept; ln of 2.5 is +0.92, not −0.92."
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
   "explanation": "Correct: (C) 13.9 s. For a first-order reaction the half-life is independent of concentration: t½ = ln 2/k = 0.693/0.0500 s⁻¹ = 13.9 s. A graph check agrees: halving the concentration lowers ln[A] by 0.693, and at 0.050 per second that takes 0.693/0.050 = 13.9 s. So after 13.9 s, [A] falls from 0.40 M to 0.20 M.\n\n(A) is wrong because 27.7 s is two half-lives (ln 4/k = 1.386/0.0500), the time for the concentration to fall to one quarter.\n(B) is wrong because 20.0 s is 1/k, the time for ln[A] to drop by 1 (to 1/e of the start), not to one half.\n(D) is wrong because 6.9 s is half the half-life, obtained by using k = 0.100 s⁻¹ or dividing 0.693 by 0.100."
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
   "explanation": "Correct: (C) Al. The reducing agent is the species that is oxidized, because it gives its electrons to something else. Assign oxidation numbers: Al goes from 0 (element) to +3 in Al³⁺, so it loses electrons and is oxidized. Cu goes from +2 in Cu²⁺ to 0, so Cu²⁺ is reduced and is the oxidizing agent. Therefore Al(s) is the reducing agent.\n\n(A) is wrong because Cu²⁺ gains electrons and is reduced from +2 to 0, which makes it the oxidizing agent, not the reducing agent.\n(B) is wrong because Al³⁺ is the product formed when Al is oxidized; agents are identified among the reactants, not the products.\n(D) is wrong because Cu is a product formed by the reduction of Cu²⁺; it does not donate electrons in this reaction."
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
   "explanation": "Correct: (C) 10.8 amu. The average atomic mass is the abundance-weighted average of the isotope masses, using fractional abundances. Average = (0.199)(10.0 amu) + (0.801)(11.0 amu) = 1.99 + 8.81 = 10.8 amu. The result is close to 11 because ¹¹B is about four times as abundant as ¹⁰B. This matches boron's tabulated mass, 10.81.\n\n(A) is wrong because 10.2 amu results from swapping the abundances: (0.801)(10.0) + (0.199)(11.0) = 8.01 + 2.19 = 10.2.\n(B) is wrong because 10.5 amu is the simple average of 10.0 and 11.0, which ignores that ¹¹B is far more abundant than ¹⁰B.\n(D) is wrong because 11.0 amu is the mass of ¹¹B alone and ignores the 19.9% of atoms that are the lighter ¹⁰B."
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
   "explanation": "Correct: (C) 4.93 atm. Rearrange the ideal gas law, PV = nRT, to solve for pressure: P = nRT/V. P = (0.50 mol)(0.0821 L·atm/(mol·K))(300. K)/(2.5 L) = 12.3 L·atm/2.5 L = 4.93 atm (4.9 atm to two significant figures). Units cancel to atm as required. Temperature must be in kelvins and volume in liters to match the units of R.\n\n(A) is wrong because 49.3 atm is ten times too large, a decimal slip such as dividing by 0.25 L instead of 2.5 L.\n(B) is wrong because 9.86 atm is double the correct value, as if 1.0 mol were used or the volume were halved to 1.25 L.\n(D) is wrong because 2.46 atm is half the correct value, as if 0.25 mol were used or the volume were doubled to 5.0 L."
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
   "explanation": "Correct: (B) C₂H₄ (ethene). Hybridization follows the number of electron domains: 2 → sp, 3 → sp², 4 → sp³. In ethene, H₂C=CH₂, each carbon has two C–H bonds and one C=C double bond, which count as three domains, so each carbon is sp² hybridized with a trigonal planar arrangement (about 120°). The unhybridized p orbital on each carbon forms the π bond of the double bond.\n\n(A) is wrong because each carbon in ethyne, H–C≡C–H, has two electron domains (one C–H and one triple bond), so it is sp hybridized.\n(C) is wrong because carbon in methane has four C–H single bonds, four electron domains, so it is sp³ hybridized.\n(D) is wrong because carbon in CO₂ has two double bonds, two electron domains, and is sp hybridized with a linear shape."
  },
  {
   "id": "ce4-41",
   "unit": 5,
   "stem": "According to collision theory, which of the following best explains why increasing the concentration of the reactants usually increases the reaction rate?",
   "choices": [
    "The activation energy of the reaction decreases when the concentration rises.",
    "Each collision releases more energy when the reactants are more concentrated.",
    "The rate constant increases whenever the concentration of a reactant is raised.",
    "The molecules collide more often, so more effective collisions occur each second."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The molecules collide more often, so more effective collisions occur each second. Collision theory says a reaction happens only when particles collide with enough energy and the proper orientation. Raising the concentration puts more molecules into the same volume, so they collide more frequently. The fraction of collisions that are effective (set by temperature and E_a) stays the same, but the number of effective collisions per second rises, so the rate increases. The rate constant and activation energy are unchanged.\n\n(A) is wrong because activation energy is set by the reaction pathway; only a catalyst lowers it, and concentration has no effect on it.\n(B) is wrong because the energy of each collision depends on temperature (molecular speeds), not on how concentrated the reactants are.\n(C) is wrong because the rate constant k depends on temperature and catalysts; a higher rate at higher concentration comes from the concentration terms, not from k."
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
   "explanation": "Correct: (A) −114 kJ. ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Broken: one C–H (413 kJ) and one Cl–Cl (243 kJ), total 656 kJ. Formed: one C–Cl (339 kJ) and one H–Cl (431 kJ), total 770 kJ. ΔH ≈ 656 − 770 = −114 kJ. More energy is released by forming the new bonds than is absorbed breaking the old ones, so the reaction is exothermic. Only one of the four C–H bonds in CH₄ breaks.\n\n(B) is wrong because −38 kJ does not come from breaking one C–H and one Cl–Cl and forming one C–Cl and one H–Cl; that sum is −114 kJ.\n(C) is wrong because +38 kJ has the wrong sign and the wrong size; the bonds formed (770 kJ) are stronger than those broken (656 kJ).\n(D) is wrong because +114 kJ has the right magnitude but subtracts bonds broken from bonds formed, reversing the sign."
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
   "explanation": "Correct: (D) −197.8 kJ. ΔH° = ΣnΔHf°(products) − ΣnΔHf°(reactants). Products: 2(−395.7) = −791.4 kJ. Reactants: 2(−296.8) + 0 = −593.6 kJ (O₂ is an element in its standard state, so ΔHf° = 0). ΔH° = −791.4 − (−593.6) = −197.8 kJ. The coefficients of 2 multiply the enthalpies of formation.\n\n(A) is wrong because +197.8 kJ subtracts products from reactants, reversing the sign of the correct value.\n(B) is wrong because +98.9 kJ both reverses the sign and leaves out the coefficients of 2 in the balanced equation.\n(C) is wrong because −98.9 kJ is the enthalpy change per mole of SO₃; it ignores the coefficients of 2 for the reaction as written."
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
   "explanation": "Correct: (B) 1.30. HNO₃ is a strong acid that ionizes completely in water, so [H⁺] = 0.050 M. pH = −log(0.050) = 1.30. The two significant figures in 0.050 become two decimal places in the pH. The value is low, as expected for a moderately concentrated strong acid.\n\n(A) is wrong because 0.050 is the hydrogen ion concentration in mol/L, not the pH; the pH is −log of this value.\n(C) is wrong because 2.30 is −log(0.0050), a decimal slip that uses ten times less acid than the 0.050 M given.\n(D) is wrong because 12.70 is 14.00 − 1.30, which treats the 1.30 as a pOH, as if HNO₃ were a base."
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
   "explanation": "Correct: (A) CCl₄. Iodine, I₂, is a nonpolar molecule whose only intermolecular forces are London dispersion forces. By the rule that like dissolves like, it dissolves best in a nonpolar solvent whose molecules also interact by dispersion forces. CCl₄ is tetrahedral and symmetrical, so it is nonpolar, and I₂ dissolves readily in it (giving a violet solution). The polar solvents would have to break their own hydrogen bonds to make room for I₂.\n\n(B) is wrong because water is highly polar and strongly hydrogen bonded; breaking those bonds to dissolve nonpolar I₂ is unfavorable, so I₂ is only slightly soluble.\n(C) is wrong because methanol is polar and hydrogen bonds with itself, so it is a poorer match for nonpolar I₂ than nonpolar CCl₄.\n(D) is wrong because ammonia is a polar, hydrogen-bonding molecule, so it is a poor solvent for the nonpolar I₂ molecule."
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
   "explanation": "Correct: (D) CH₃COOH and CH₃COONa. A buffer needs a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable amounts, so that it can neutralize both added acid and added base. Acetic acid, CH₃COOH, is a weak acid, and sodium acetate supplies its conjugate base, CH₃COO⁻. Added H⁺ reacts with CH₃COO⁻ and added OH⁻ reacts with CH₃COOH, so the pH changes very little.\n\n(A) is wrong because HCl is a strong acid, and Cl⁻ is too weak a base to react with added H⁺, so this pair cannot resist pH changes.\n(B) is wrong because HNO₃ is a strong acid and NO₃⁻ is a negligible base, so the mixture cannot neutralize added acid.\n(C) is wrong because NaOH is a strong base and NaCl is a neutral salt; neither component can neutralize added base."
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
   "explanation": "Correct: (B) The dissolving process is exothermic, because thermal energy is released to the solution. The solution in the insulated cup is the surroundings and the dissolving process is the system. The solution's temperature rose, which means it gained thermal energy, and that energy came from the dissolving process. A process that releases heat to its surroundings is exothermic, so ΔH(solution) < 0. Examples include dissolving NaOH or CaCl₂ in water.\n\n(A) is wrong because the solution (surroundings) gained the energy, which means the dissolving process (system) lost it; that is exothermic, not endothermic.\n(C) is wrong because a temperature increase of the surroundings means the system released heat, so ΔH < 0, not ΔH > 0.\n(D) is wrong because the temperature change shows that energy was transferred, so the dissolving process does involve an enthalpy change."
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
   "explanation": "Correct: (C) 731 torr. When a gas is collected over water, the gas in the collection vessel is a mixture of H₂ and water vapor. By Dalton's law of partial pressures, P_total = P(H₂) + P(H₂O). So P(H₂) = 755 torr − 23.8 torr = 731 torr (rounded to the ones place, matching the precision of 755 torr).\n\n(A) is wrong because 779 torr adds the water vapor pressure to the total instead of subtracting it; the total already includes the water vapor.\n(B) is wrong because 755 torr is the total pressure of the mixture, which includes the 23.8 torr contributed by water vapor.\n(D) is wrong because 23.8 torr is the partial pressure of the water vapor, not of the hydrogen gas collected."
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
   "explanation": "Correct: (A) Enthalpy, H. A state function depends only on the current state of the system (temperature, pressure, composition), not on the path used to reach it. Enthalpy is a state function, so ΔH for a change is the same no matter how the change is carried out; this is why Hess's law works. Heat and work are path functions: different paths between the same states can involve different q and w, although their sum ΔU is fixed.\n\n(B) is wrong because the heat absorbed depends on the path taken between two states, so q is a path function, not a state function.\n(C) is wrong because work depends on how a process is carried out (for example, the pressure during expansion), so it is a path function.\n(D) is wrong because the time for a reaction is a kinetic quantity that depends on conditions and catalysts, not a property of the system's state."
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
   "explanation": "Correct: (C) The rate doubles. The rate law is rate = k[A]¹[B]⁰ = k[A]. Doubling [A] multiplies the rate by 2¹ = 2. Halving [B] multiplies the rate by (½)⁰ = 1, so it has no effect. The combined factor is 2 × 1 = 2, so the rate doubles. Zero order means the rate does not depend on that reactant's concentration.\n\n(A) is wrong because the rate would be unchanged only if the effects canceled, but halving a zero-order reactant has no effect to cancel the doubling of [A].\n(B) is wrong because a halved rate treats the change in [B] as first order and ignores that the rate is first order in A.\n(D) is wrong because quadrupling would require second order in A (2² = 4); the reaction is only first order in A."
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
   "explanation": "Correct: (B) Above 300 K. A reaction is spontaneous when ΔG = ΔH − TΔS < 0. Convert to consistent units: ΔH = +30 kJ = +30,000 J and ΔS = +100 J/K. Setting ΔG = 0 gives T = ΔH/ΔS = (30,000 J)/(100 J/K) = 300 K. Because ΔS is positive, the −TΔS term grows with temperature, so ΔG becomes negative above 300 K.\n\n(A) is wrong because 30 K comes from a units slip (for example, using 3000 J); at 30 K, ΔG = 30,000 − 3,000 = +27,000 J, still positive.\n(C) is wrong because 3000 K is ten times too high; ΔG is already negative at any temperature just above 300 K.\n(D) is wrong because with ΔH > 0 and ΔS > 0 the reaction becomes spontaneous at high temperature; never spontaneous requires ΔH > 0 and ΔS < 0."
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
   "explanation": "Correct: (B) K decreases, because the equilibrium shifts toward the reactants. For an exothermic reaction, heat can be treated as a product: N₂ + 3 H₂ ⇌ 2 NH₃ + heat. Raising the temperature adds heat, so the equilibrium shifts toward the reactants, and at the new equilibrium the ratio [NH₃]²/([N₂][H₂]³) is smaller. Thus K decreases. Temperature is the only factor that changes the value of K.\n\n(A) is wrong because a faster rate speeds up both the forward and reverse reactions; it changes how fast equilibrium is reached, not the value of K.\n(C) is wrong because K is constant only at a fixed temperature; temperature changes K, while concentration changes do not.\n(D) is wrong because adding heat to an exothermic reaction favors the reactants and lowers K; K increases with heat only for an endothermic reaction."
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
   "explanation": "Correct: (B) 1.0 × 10⁻⁵. pH 3.00 means [H⁺] = 1.0 × 10⁻³ M. From HA ⇌ H⁺ + A⁻, [A⁻] = [H⁺] = 1.0 × 10⁻³ M, and [HA] = 0.10 − 0.0010 ≈ 0.099 ≈ 0.10 M (only 1% ionizes). K_a = [H⁺][A⁻]/[HA] = (1.0 × 10⁻³)²/(0.10) = 1.0 × 10⁻⁶/0.10 = 1.0 × 10⁻⁵.\n\n(A) is wrong because 1.0 × 10⁻⁷ multiplies (1.0 × 10⁻³)² by 0.10 instead of dividing by 0.10, or confuses K_a with neutral [H⁺].\n(C) is wrong because 1.0 × 10⁻³ is [H⁺] itself; K_a requires squaring it and dividing by the acid concentration.\n(D) is wrong because 1.0 × 10⁻¹ is the initial acid concentration, 0.10 M, not the acid dissociation constant."
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
   "explanation": "Correct: (A) I₂. A molecular solid is made of discrete molecules held in place by intermolecular forces. Solid iodine consists of individual I₂ molecules (covalently bonded within each molecule) held together only by London dispersion forces, which is why iodine is soft and sublimes easily. The other choices are ionic, network covalent and metallic solids.\n\n(B) is wrong because NaCl is an ionic solid, a lattice of Na⁺ and Cl⁻ ions held by Coulombic attractions rather than discrete molecules.\n(C) is wrong because SiO₂ (quartz) is a network covalent solid in which each Si is covalently bonded to four O atoms throughout the crystal.\n(D) is wrong because Cu is a metallic solid of cations in a sea of delocalized electrons, not a collection of molecules."
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
   "explanation": "Correct: (C) 0.10 mol. By the Henderson–Hasselbalch equation, pH = pK_a + log([A⁻]/[HA]), so pH = pK_a when [A⁻] = [HA] (log 1 = 0). NaOH reacts with HA one-to-one: HA + OH⁻ → A⁻ + H₂O. Adding 0.10 mol NaOH to 0.20 mol HA leaves 0.10 mol HA and forms 0.10 mol A⁻, the equal amounts needed.\n\n(A) is wrong because 0.40 mol NaOH is twice the acid present; it would neutralize all the HA and leave 0.20 mol excess strong base.\n(B) is wrong because 0.20 mol NaOH converts all of the HA to A⁻ (the equivalence point), leaving no acid, so there is no buffer.\n(D) is wrong because 0.050 mol NaOH gives 0.050 mol A⁻ and 0.15 mol HA, a 1 : 3 ratio and a pH about 0.48 below pK_a."
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
   "explanation": "Correct: (B) 0.0250 M. Use M₁V₁ = M₂V₂ for each dilution. First: M₂ = (0.500 M)(10.0 mL)/(100. mL) = 0.0500 M. Second: M₃ = (0.0500 M)(25.0 mL)/(50.0 mL) = 0.0250 M. Overall the solution is diluted by a factor of 10 and then 2, a factor of 20: 0.500 M ÷ 20 = 0.0250 M.\n\n(A) is wrong because 0.0125 M halves the concentration one extra time, a factor of 40 overall instead of the actual factor of 20.\n(C) is wrong because 0.0500 M is the concentration after only the first dilution; it misses the second, twofold dilution.\n(D) is wrong because 0.250 M applies only the second, twofold dilution to 0.500 M and skips the first, tenfold dilution."
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
   "explanation": "Correct: (C) 965 C. Convert grams of silver to moles, then to moles of electrons, then to coulombs. Moles Ag = 1.08 g ÷ 108 g/mol = 0.0100 mol. Ag⁺ + e⁻ → Ag needs one mole of electrons per mole of Ag, so 0.0100 mol e⁻. Charge = (0.0100 mol e⁻)(96,500 C/mol e⁻) = 965 C.\n\n(A) is wrong because 96,500 C is one faraday, the charge needed to deposit a full mole (108 g) of silver, not 1.08 g.\n(B) is wrong because 9,650 C corresponds to 0.100 mol of electrons, which would deposit 10.8 g of silver, ten times the mass given.\n(D) is wrong because 96.5 C corresponds to 0.00100 mol of electrons, which would deposit only 0.108 g of silver."
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
   "explanation": "Correct: (B) 3.14. The equivalence point is at 25.0 mL, since (0.0250 L)(0.100 M) = 0.00250 mol HF requires 0.00250 mol NaOH = 25.0 mL. At 12.5 mL, half the HF has been converted to F⁻, so [HF] = [F⁻]. Henderson–Hasselbalch gives pH = pK_a + log(1) = 3.14. The curve agrees, reading a little above pH 3 at 12.5 mL in the flat buffer region.\n\n(A) is wrong because pH 1.00 would be the pH of 0.100 M strong acid; even the starting HF solution is at about pH 2.1 on the curve.\n(C) is wrong because pH 7.00 is neutral and is not reached until near the steep rise around 25 mL; at 12.5 mL the solution is still acidic.\n(D) is wrong because pH 8.37 is a basic pH reached only near the equivalence point at 25 mL; at 12.5 mL the curve is still in the acidic buffer region."
  },
  {
   "id": "ce4-59",
   "unit": 8,
   "setId": "ce4-set7",
   "stem": "How does the pH at the equivalence point compare with 7, and why?",
   "choices": [
    "Equal to 7, because the acid and the base are present in equal amounts",
    "Less than 7, because the solution began as a solution of the acid HF",
    "Greater than 7, because excess NaOH remains in solution at that point",
    "Greater than 7, because F⁻ is a weak acid's conjugate base and produces OH⁻"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Greater than 7, because F⁻ is a weak acid's conjugate base and produces OH⁻. At the equivalence point all the HF has been converted to F⁻ and water; the solution is about 0.0500 M NaF. F⁻ is the conjugate base of a weak acid and hydrolyzes: F⁻ + H₂O ⇌ HF + OH⁻, with K_b = K_w/K_a = 1.0 × 10⁻¹⁴/7.2 × 10⁻⁴ = 1.4 × 10⁻¹¹. This gives [OH⁻] ≈ 8 × 10⁻⁷ M and pH ≈ 7.9, which is greater than 7.\n\n(A) is wrong because equal amounts of acid and base give pH 7 only for a strong acid with a strong base; F⁻ makes this solution basic.\n(B) is wrong because at the equivalence point the HF has been fully neutralized, so the original acid no longer controls the pH.\n(C) is wrong because at the equivalence point the moles of NaOH exactly equal the moles of HF, so no excess NaOH remains."
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
   "explanation": "Correct: (C) Phenolphthalein, which changes color in the pH range 8.2–10.0. An indicator should change color at the steep part of the curve, around the equivalence point. For this weak acid–strong base titration the equivalence pH is about 7.9, and the curve rises steeply from about pH 5 to about 11 near 25 mL. Phenolphthalein, with a range of 8.2–10.0, changes color within this vertical rise and very close to the equivalence pH, so it marks the endpoint sharply.\n\n(A) is wrong because methyl orange (3.1–4.4) changes in the buffer region, well before the equivalence point, so it would signal the endpoint far too early.\n(B) is wrong because bromocresol green (3.8–5.4) changes color before the steep rise begins, so it would signal the endpoint too early.\n(D) is wrong because thymol blue's acid range (1.2–2.8) lies around the starting pH of about 2.1, nowhere near the equivalence pH of about 7.9."
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
