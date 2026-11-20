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
   "explanation": "Correct: (D) C–F. Bond polarity depends on the electronegativity difference (ΔEN) between the two bonded atoms: the larger the difference, the more unevenly the shared electrons are pulled and the larger the partial charges. Carbon is about 2.5. Fluorine, the most electronegative element, is 4.0, so ΔEN(C–F) = 4.0 − 2.5 = 1.5, larger than for any other bond listed. Electronegativity rises across period 2 (N 3.0 < O 3.5 < F 4.0), so the bond to fluorine is the most polar.\n\n(A) is wrong because oxygen (3.5) is less electronegative than fluorine, so ΔEN(C–O) = 1.0 is smaller than 1.5.\n(B) is wrong because nitrogen (3.0) is only modestly more electronegative than carbon, giving ΔEN(C–N) = 0.5, a weakly polar bond.\n(C) is wrong because hydrogen (2.1) and carbon (2.5) have nearly equal electronegativities, so ΔEN(C–H) = 0.4 makes C–H almost nonpolar."
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
   "explanation": "Correct: (B) 836 J. The heat absorbed by the water is q = mcΔT. The temperature change is ΔT = 26.0 °C − 22.0 °C = 4.0 °C. Then q = (50.0 g)(4.18 J/(g·°C))(4.0 °C) = 836 J. The water's temperature rose, so the water gained energy (q is positive for the water) and the reaction released that energy, meaning the reaction was exothermic. The answer is limited to two significant figures by ΔT = 4.0 °C, about 840 J, and 836 J is the closest choice.\n\n(A) is wrong because 1670 J is double the correct value, as if ΔT were 8.0 °C or the mass were 100. g instead of 50.0 g.\n(C) is wrong because 418 J is half the correct value, as if ΔT were taken as 2.0 °C instead of the actual 4.0 °C change.\n(D) is wrong because 209 J is only mc = (50.0)(4.18), which leaves out the 4.0 °C temperature change entirely."
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
   "explanation": "Correct: (A) K = [NH₃]² / ([N₂][H₂]³). An equilibrium constant expression is written from the balanced equation as products over reactants, with each concentration raised to a power equal to its stoichiometric coefficient. For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), the product NH₃ has coefficient 2 and goes in the numerator squared; N₂ (coefficient 1) and H₂ (coefficient 3) go in the denominator as [N₂][H₂]³. All three species are gases, so all appear in the expression: K = [NH₃]²/([N₂][H₂]³).\n\n(B) is wrong because it ignores the coefficients; the 2 on NH₃ and the 3 on H₂ must appear as exponents.\n(C) is wrong because it is upside down: reactants over products gives 1/K, the constant for the reverse reaction.\n(D) is wrong because coefficients become exponents, not multipliers placed in front of the concentrations in the expression."
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
   "explanation": "Correct: (C) 63.6 amu. The average atomic mass is the abundance-weighted mean of the isotope masses read from the spectrum. The peak at m/z 63 has 69% abundance and the peak at m/z 65 has 31%; because every ion is +1, m/z equals the mass. Average = (0.69)(63) + (0.31)(65) = 43.47 + 20.15 = 63.62 ≈ 63.6 amu. The result lies closer to 63 than to 65 because the lighter isotope is more than twice as abundant as the heavier one.\n\n(A) is wrong because 64.6 amu lies above the midpoint of 63 and 65, which would require the heavier isotope to be more abundant, the opposite of the spectrum.\n(B) is wrong because 64.0 amu is the simple average of 63 and 65, which ignores the unequal 69% and 31% abundances.\n(D) is wrong because 63.0 amu is the mass of only the lighter isotope and leaves out the 31% contribution from mass 65."
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
   "explanation": "Correct: (D) The sample contains two isotopes of copper that differ in their number of neutrons. A mass spectrometer separates ions by mass-to-charge ratio. The stem says every ion has a +1 charge, so the two peaks at m/z 63 and 65 come from atoms of two different masses. All copper atoms have 29 protons (that defines the element), so the 2 amu difference must come from neutrons: copper-63 has 34 neutrons and copper-65 has 36. Atoms of the same element with different numbers of neutrons are isotopes, and each isotope gives its own peak.\n\n(A) is wrong because the number of protons defines the element; atoms with a different proton count would not be copper at all.\n(B) is wrong because the stem states every ion is +1, and a 2+ ion of mass 63 would appear near m/z 31.5, not 65.\n(C) is wrong because an excited electronic state changes the atom's energy, not its mass, so it would not shift m/z by 2 units."
  },
  {
   "id": "ce1-6",
   "unit": 6,
   "stem": "A solid is heated at a constant rate and its temperature stays constant for several minutes while it melts. Which statement best explains why the temperature does not rise?",
   "choices": [
    "The energy added overcomes attractions between particles, raising their potential energy.",
    "The energy added is converted into the average kinetic energy of the particles.",
    "The energy added is lost to the surroundings as heat while the solid melts.",
    "The particles stop moving entirely while the solid is melting into a liquid."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The energy added overcomes attractions between particles, raising their potential energy. Temperature measures the average kinetic energy of the particles. During melting, the heat supplied goes into separating particles against their attractions, which raises their potential energy, while their average kinetic energy stays the same. That is why the heating curve shows a flat plateau at the melting point: the energy absorbed is the enthalpy of fusion. Only after all the solid has melted does added energy again increase kinetic energy and raise the temperature.\n\n(B) is wrong because an increase in average kinetic energy would raise the temperature, and the temperature is constant during melting.\n(C) is wrong because the energy is absorbed by the sample as the enthalpy of fusion; it is not simply lost to the surroundings.\n(D) is wrong because particles never stop moving above absolute zero; at the melting point they still have the same kinetic energy."
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
   "explanation": "Correct: (A) Second order. To find the order in B, compare two experiments in which [A] is held constant and only [B] changes. In experiments 1 and 3, [A] = 0.10 M in both, [B] doubles from 0.10 M to 0.20 M, and the rate rises from 2.0 × 10⁻³ to 8.0 × 10⁻³ M/s, a factor of 4. Setting 2ⁿ = 4 gives n = 2, so the rate is proportional to [B]² and the reaction is second order with respect to B.\n\n(B) is wrong because first order would make the rate double (2¹ = 2) when [B] doubles, not quadruple as in experiments 1 and 3.\n(C) is wrong because zero order would leave the rate unchanged when [B] doubles, but the rate increased by a factor of 4.\n(D) is wrong because third order would make the rate increase eightfold (2³ = 8) when [B] doubles, not fourfold."
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
   "explanation": "Correct: (B) 2.0 M⁻² s⁻¹. First find both orders. Experiments 1 and 2 hold [B] at 0.10 M and double [A]; the rate doubles (2.0 × 10⁻³ to 4.0 × 10⁻³ M/s), so the reaction is first order in A. Experiments 1 and 3 show second order in B. The rate law is rate = k[A][B]². Using experiment 1: k = (2.0 × 10⁻³ M/s)/((0.10 M)(0.10 M)²) = (2.0 × 10⁻³)/(1.0 × 10⁻³) = 2.0 M⁻² s⁻¹. The units M⁻² s⁻¹ fit a third-order overall rate law.\n\n(A) is wrong because 0.20 comes from treating B as first order: (2.0 × 10⁻³)/((0.10)(0.10)) = 0.20.\n(C) is wrong because 20 comes from also squaring [A]: (2.0 × 10⁻³)/((0.10)²(0.10)²) = 20, though A is only first order.\n(D) is wrong because 200 requires a denominator of 1.0 × 10⁻⁵, as if the concentrations carried five powers instead of the correct three."
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
   "explanation": "Correct: (C) −890 kJ. Use ΔH°rxn = ΣnΔHf°(products) − ΣnΔHf°(reactants), multiplying each value by its coefficient. Products: (−393.5) + 2(−285.8) = −393.5 − 571.6 = −965.1 kJ. Reactants: (−74.8) + 2(0) = −74.8 kJ, because O₂(g) is an element in its standard state with ΔHf° = 0. ΔH° = −965.1 − (−74.8) = −890.3 kJ ≈ −890 kJ. The negative sign fits combustion, which releases a large amount of heat.\n\n(A) is wrong because +890 kJ has the sign reversed, as if reactants minus products were computed; combustion of methane is exothermic.\n(B) is wrong because −604 kJ comes from forgetting the coefficient 2 on H₂O: −393.5 − 285.8 + 74.8 = −604.5 kJ.\n(D) is wrong because −1,040 kJ comes from adding the reactant's −74.8 kJ instead of subtracting it: −965.1 − 74.8 = −1,039.9 kJ."
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
   "explanation": "Correct: (C) 1.0. Write K from the balanced equation, with the product over the reactant and each concentration raised to its coefficient: K = [NO₂]²/[N₂O₄]. Substituting the equilibrium concentrations gives K = (0.50)²/(0.25) = 0.25/0.25 = 1.0. The coefficient 2 on NO₂ must become an exponent; leaving it out or applying it in the wrong place is the most common error. Equilibrium constants are reported without units in AP Chemistry.\n\n(A) is wrong because 4.0 comes from squaring the whole ratio, (0.50/0.25)² = 4.0, instead of squaring only [NO₂].\n(B) is wrong because 2.0 comes from leaving out the exponent: 0.50/0.25 = 2.0, ignoring the coefficient 2 on NO₂.\n(D) is wrong because 0.50 comes from inverting the unsquared ratio, 0.25/0.50, putting the reactant over the product."
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
   "explanation": "Correct: (A) +7. The sum of the oxidation numbers in a polyatomic ion equals the ion's charge. Oxygen is −2 in nearly all compounds (it is not a peroxide here), so the four oxygen atoms contribute 4(−2) = −8. Let x be the oxidation number of Mn: x + (−8) = −1, so x = +7. This is manganese's highest oxidation state, which is why permanganate is such a strong oxidizing agent: Mn can be reduced to lower states such as +2.\n\n(B) is wrong because +6 makes the total −2 (6 − 8 = −2), which fits the manganate ion MnO₄²⁻, not MnO₄⁻.\n(C) is wrong because +4 is manganese's oxidation state in MnO₂; in MnO₄⁻ it would give a total of −4, not −1.\n(D) is wrong because +2 is the state in Mn²⁺; with four oxygens it would give an ion charge of −6, not −1."
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
   "explanation": "Correct: (D) The H–H bond, because its potential energy well is deeper. On a potential energy curve, the energy at the minimum (relative to the zero line for separated atoms) is the energy released when the bond forms, and its magnitude is the bond energy needed to break the bond. The graph shows the H–H minimum at about −435 kJ/mol and the Cl–Cl minimum at only about −240 kJ/mol. Breaking H–H therefore takes about 435 kJ/mol versus about 240 kJ/mol for Cl–Cl, so the H–H bond is stronger.\n\n(A) is wrong because the distance of the minimum gives the bond length, not the strength; a longer bond is usually weaker.\n(B) is wrong because both curves approach zero only for separated atoms; bond strength is the well depth, which differs greatly.\n(C) is wrong because the width of the well does not measure bond energy; only the depth of the minimum does."
  },
  {
   "id": "ce1-13",
   "unit": 2,
   "setId": "ce1-set3",
   "stem": "Which bond has the greater bond length?",
   "choices": [
    "Cl–Cl, because the minimum of its curve is at the greater internuclear distance.",
    "H–H, because the minimum of its curve is at the lower potential energy.",
    "The bond lengths are equal, because both of the bonds are single bonds.",
    "H–H, because its curve rises more steeply at short internuclear distances."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Cl–Cl, because the minimum of its curve is at the greater internuclear distance. The bond length is the internuclear distance at which the potential energy is lowest, where attraction and repulsion balance. Reading the x-axis, the H–H minimum occurs at about 74 pm and the Cl–Cl minimum at about 199 pm. So the Cl–Cl bond is longer. This makes sense because chlorine atoms are much larger than hydrogen atoms: their bonding electrons are in the n = 3 shell, so the nuclei sit farther apart.\n\n(B) is wrong because the energy of the minimum indicates bond strength, not bond length; length is read on the distance axis.\n(C) is wrong because both being single bonds does not make lengths equal; atom size matters, and the minima are at 74 pm and 199 pm.\n(D) is wrong because the steepness of the repulsive wall does not define bond length; the H–H minimum is at the shorter distance."
  },
  {
   "id": "ce1-14",
   "unit": 1,
   "stem": "Which of the following correctly compares the atomic radii of magnesium and chlorine?",
   "choices": [
    "Chlorine has the larger radius, because it has more electrons than magnesium has.",
    "Chlorine has the larger radius, because it has a greater nuclear charge than magnesium.",
    "The two atoms have equal radii, because they are in the same period of the table.",
    "Magnesium has the larger radius, because it has fewer protons pulling on the same shell."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Magnesium has the larger radius, because it has fewer protons pulling on the same shell. Magnesium (Z = 12) and chlorine (Z = 17) are both in period 3, so their valence electrons occupy the same n = 3 shell and are shielded by the same ten core electrons (1s²2s²2p⁶). Chlorine's five extra protons give its valence electrons a larger effective nuclear charge (about +7 versus +2 by the simple core-charge model), pulling them closer to the nucleus. So atomic radius decreases from left to right across a period, and magnesium is larger than chlorine.\n\n(A) is wrong because chlorine's extra electrons go into the same n = 3 shell, and the extra protons contract the atom rather than enlarging it.\n(B) is wrong because a greater nuclear charge pulls the electrons closer, which makes chlorine smaller, not larger.\n(C) is wrong because being in the same period does not make radii equal; radius decreases across the period as nuclear charge increases."
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
   "explanation": "Correct: (D) NaCl. Electrical conduction requires mobile charged particles. NaCl is an ionic solid made of Na⁺ and Cl⁻ ions locked in a crystal lattice; in the solid the ions cannot move, so it does not conduct. When it melts, the lattice breaks down and the ions are free to move toward the electrodes, so molten NaCl conducts. This conducts-when-molten-or-dissolved-but-not-solid pattern is the signature property of ionic compounds.\n\n(A) is wrong because Cu is a metal with a sea of delocalized electrons, so it conducts both as a solid and when molten.\n(B) is wrong because diamond is a covalent network solid with every electron in localized bonds, so it does not conduct in either state.\n(C) is wrong because I₂ is a molecular solid of neutral molecules, so neither solid nor liquid iodine has mobile charges to conduct."
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
   "explanation": "Correct: (B) −150 kJ. Hess's law states that enthalpy is a state function, so the enthalpy change for an overall reaction equals the sum of the enthalpy changes for the steps that add up to it. Adding A → B and B → C, the intermediate B cancels and leaves A → C. Then ΔH = (+100 kJ) + (−250 kJ) = −150 kJ. Overall the reaction is exothermic because the second step releases more energy than the first step absorbs.\n\n(A) is wrong because −350 kJ comes from subtracting the first step instead of adding it: −250 − 100 = −350 kJ.\n(C) is wrong because +150 kJ has the sign reversed; it is ΔH for the reverse reaction, C → A.\n(D) is wrong because +350 kJ comes from subtracting in the wrong direction, 100 − (−250), rather than adding the two steps."
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
   "explanation": "Correct: (A) CH₃CH₂OH. Hydrogen bonding between molecules requires a hydrogen atom covalently bonded to N, O, or F in one molecule (the donor) and a lone pair on N, O, or F in a neighboring molecule (the acceptor). Ethanol, CH₃CH₂OH, has an O–H group: the H is strongly positive and the O has two lone pairs, so ethanol molecules can both donate and accept hydrogen bonds with each other. This is why ethanol boils at 78 °C while dimethyl ether, with the same formula, boils near −24 °C.\n\n(B) is wrong because dimethyl ether's hydrogens are all bonded to carbon, so although its O can accept, no molecule can donate a hydrogen bond.\n(C) is wrong because ethane is nonpolar with only C–H bonds, so only London dispersion forces act between its molecules.\n(D) is wrong because in CH₃Cl the hydrogens are bonded to carbon, not N, O, or F, so it has dipole–dipole forces but no hydrogen bonds."
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
   "explanation": "Correct: (B) −183 kJ. Breaking bonds absorbs energy and forming bonds releases energy, so ΔH ≈ Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed). Bonds broken: one H–H and one Cl–Cl = 436 + 243 = 679 kJ. Bonds formed: two H–Cl = 2(431) = 862 kJ. ΔH ≈ 679 − 862 = −183 kJ. The reaction is exothermic because the two H–Cl bonds formed are stronger in total than the bonds broken.\n\n(A) is wrong because −862 kJ counts only the energy released by forming the H–Cl bonds and omits the 679 kJ needed to break bonds.\n(C) is wrong because +183 kJ reverses the subtraction (formed − broken), giving the sign for the reverse reaction.\n(D) is wrong because +679 kJ is only the energy to break the H–H and Cl–Cl bonds, ignoring the energy released by forming H–Cl."
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
   "explanation": "Correct: (D) sp. Hybridization follows from the number of electron domains (regions of electron density) around the central atom. In CO₂ (O=C=O), carbon forms two double bonds and has no lone pairs. Each double bond counts as one domain, so carbon has two domains, arranged linearly at 180°. Two domains require two hybrid orbitals, made from one s and one p orbital: sp. Each C=O bond is one sigma bond (from an sp hybrid) plus one pi bond (from an unhybridized p orbital).\n\n(A) is wrong because sp² requires three electron domains (trigonal planar), but carbon in CO₂ has only two.\n(B) is wrong because sp³ results from counting four bonds instead of two domains; a double bond counts as one domain.\n(C) is wrong because sp³d requires five electron domains and an expanded octet, which carbon cannot have."
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
   "explanation": "Correct: (A) A⁻ is a weaker base than B⁻. For a conjugate acid–base pair, K_a × K_b = K_w = 1.0 × 10⁻¹⁴ at 25 °C, so a stronger acid has a weaker conjugate base. HA (K_a = 1 × 10⁻³) is a stronger acid than HB (K_a = 1 × 10⁻⁷). Then K_b(A⁻) = 10⁻¹⁴/10⁻³ = 1 × 10⁻¹¹, while K_b(B⁻) = 10⁻¹⁴/10⁻⁷ = 1 × 10⁻⁷. Because 10⁻¹¹ is far smaller than 10⁻⁷, A⁻ is the weaker base.\n\n(B) is wrong because it reverses the inverse relationship; the stronger acid HA has the weaker conjugate base, A⁻.\n(C) is wrong because the larger K_a belongs to HA (10⁻³ versus 10⁻⁷), so HA is the stronger acid, not HB.\n(D) is wrong because the two acids have different K_a values, so their conjugate bases have different K_b values (10⁻¹¹ versus 10⁻⁷)."
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
   "explanation": "Correct: (C) 25.0 mL. At the equivalence point, the moles of OH⁻ added equal the initial moles of acetic acid, since the reaction CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O is 1 : 1. Moles of acid = (0.100 M)(0.0250 L) = 2.50 × 10⁻³ mol. Volume of NaOH = (2.50 × 10⁻³ mol)/(0.100 M) = 0.0250 L = 25.0 mL. The graph agrees: the nearly vertical jump in pH is centered at 25 mL.\n\n(A) is wrong because 50.0 mL is twice the needed volume, as if the acid were diprotic or twice as concentrated as the base.\n(B) is wrong because 37.5 mL lies on the flat region after the jump, where excess NaOH has already been added.\n(D) is wrong because 12.5 mL is the half-equivalence point, where only half of the acid has been neutralized and pH = pK_a."
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
   "explanation": "Correct: (B) 4.74. 12.5 mL of 0.100 M NaOH adds 1.25 × 10⁻³ mol OH⁻, which converts exactly half of the 2.50 × 10⁻³ mol of acetic acid into acetate. This is the half-equivalence point, where [CH₃COOH] = [CH₃COO⁻]. By the Henderson–Hasselbalch equation, pH = pK_a + log([A⁻]/[HA]) = 4.74 + log(1) = 4.74 + 0 = 4.74. On the graph this is the middle of the flat buffer region, which is how pK_a is read from a titration curve.\n\n(A) is wrong because 2.87 is the initial pH of 0.100 M acetic acid before any NaOH is added, at 0 mL.\n(C) is wrong because pH 7.00 would require a neutral solution, but at 12.5 mL the solution is an acidic acetic acid–acetate buffer.\n(D) is wrong because 9.26 is pK_b of acetate (14.00 − 4.74), not the pH of a solution with equal acid and base."
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
   "explanation": "Correct: (D) The acetate ion, the conjugate base of a weak acid, reacts with water to produce OH⁻. At the equivalence point all of the acetic acid has been converted to acetate, and no excess NaOH is present, so the solution is essentially sodium acetate in water. Acetate is the conjugate base of a weak acid, so it is a weak base that hydrolyzes: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ (K_b = 10⁻¹⁴/10⁻⁴·⁷⁴ ≈ 5.6 × 10⁻¹⁰). The OH⁻ produced makes the pH greater than 7, about 8.7 here, which matches the steep rise well above 7 on the curve.\n\n(A) is wrong because Na⁺ is the cation of a strong base and is a spectator ion; it does not react with water to make OH⁻.\n(B) is wrong because at the equivalence point the moles of OH⁻ added exactly equal the moles of acid, so no excess NaOH remains.\n(C) is wrong because acetic acid is a weak acid (pK_a = 4.74), and its conjugate base is weak, not strong."
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
   "explanation": "Correct: (B) 70 kJ. The activation energy (E_a) of the forward reaction is the energy difference between the reactants and the transition state, the top of the barrier. On the solid (uncatalyzed) curve, the reactants are at 50 kJ and the peak is at 120 kJ. So E_a = 120 kJ − 50 kJ = 70 kJ, which is the length of the upward arrow labeled E_a on the diagram. The catalyzed path (dashed) peaks at only 85 kJ.\n\n(A) is wrong because 35 kJ (85 − 50) is the activation energy of the catalyzed dashed pathway, not the uncatalyzed one.\n(C) is wrong because 100 kJ (120 − 20) is the activation energy of the reverse reaction, measured from the products.\n(D) is wrong because 120 kJ is the absolute energy of the transition state, not the height of the barrier above the reactants."
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
   "explanation": "Correct: (C) −30 kJ. The enthalpy change is the energy of the products minus the energy of the reactants: ΔH = H(products) − H(reactants). From the diagram, the reactants are at 50 kJ and the products are at 20 kJ, so ΔH = 20 kJ − 50 kJ = −30 kJ. The products lie lower than the reactants, so the reaction is exothermic. The catalyzed pathway starts and ends at the same levels, which shows that a catalyst does not change ΔH.\n\n(A) is wrong because +70 kJ is the activation energy (120 − 50), not the difference between products and reactants.\n(B) is wrong because +30 kJ has the sign reversed; the products are lower in energy, so the reaction releases energy.\n(D) is wrong because −70 kJ uses the barrier height of 70 kJ instead of the 30 kJ gap between reactants and products."
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
   "explanation": "Correct: (C) 1.3 × 10⁻⁵ M. AgCl dissolves as AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). If s mol/L dissolves, then [Ag⁺] = s and [Cl⁻] = s, so K_sp = [Ag⁺][Cl⁻] = s². Solving, s = √(1.8 × 10⁻¹⁰) = √1.8 × 10⁻⁵ = 1.34 × 10⁻⁵ ≈ 1.3 × 10⁻⁵ M. Check: (1.3 × 10⁻⁵)² = 1.7 × 10⁻¹⁰, consistent with K_sp to two significant figures.\n\n(A) is wrong because (9.0 × 10⁻⁵)² = 8.1 × 10⁻⁹, about 45 times larger than K_sp, so it is far too soluble.\n(B) is wrong because 1.8 × 10⁻⁵ takes the square root of only the power of ten and leaves the 1.8 unrooted.\n(D) is wrong because 1.8 × 10⁻¹⁰ sets s equal to K_sp, forgetting that K_sp = s² for a 1 : 1 salt."
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
   "explanation": "Correct: (A) Zinc is the anode, and electrons flow from the zinc electrode to the copper electrode. In a galvanic cell, the half-reaction with the more positive reduction potential runs as the reduction (cathode), and the other runs as the oxidation (anode). Cu²⁺/Cu (+0.34 V) is more positive than Zn²⁺/Zn (−0.76 V), so Cu²⁺ is reduced at the copper cathode and zinc is oxidized at the zinc anode: Zn → Zn²⁺ + 2e⁻. Electrons released at the anode travel through the external wire to the cathode, from zinc to copper, matching the arrow in the figure.\n\n(B) is wrong because the electron flow is right but electrons always leave the anode, so if they flow from zinc, zinc must be the anode.\n(C) is wrong because the anode is the source of electrons, so they flow from zinc to copper, not from copper to zinc.\n(D) is wrong because copper has the more positive reduction potential, so Cu²⁺ is reduced and copper is the cathode."
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
   "explanation": "Correct: (C) 1.10 V. The standard cell potential is E°cell = E°(cathode) − E°(anode), using reduction potentials for both. Copper is the cathode (+0.34 V) and zinc is the anode (−0.76 V). E°cell = (+0.34 V) − (−0.76 V) = +1.10 V. Reduction potentials are intensive, so they are not multiplied by the number of electrons, even though each half-reaction transfers 2 e⁻. The positive value means the cell reaction Zn + Cu²⁺ → Zn²⁺ + Cu is thermodynamically favorable.\n\n(A) is wrong because 0.42 V comes from subtracting the magnitudes, 0.76 − 0.34, without handling the negative sign of the zinc potential.\n(B) is wrong because 0.76 V is only the magnitude of the zinc half-cell potential and leaves out the copper half-cell.\n(D) is wrong because 1.44 V comes from doubling the copper potential, 2(0.34) + 0.76; potentials are not multiplied by coefficients."
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
   "explanation": "Correct: (B) 5.04. For a buffer of a weak acid and its conjugate base, the Henderson–Hasselbalch equation gives pH = pK_a + log([A⁻]/[HA]). Here [A⁻] = [CH₃COO⁻] = 0.20 M and [HA] = [CH₃COOH] = 0.10 M. pH = 4.74 + log(0.20/0.10) = 4.74 + log 2 = 4.74 + 0.30 = 5.04. The pH is above pK_a because the buffer contains more conjugate base than acid.\n\n(A) is wrong because 5.34 adds 0.60 (log 4) instead of log 2 = 0.30, as if the ratio were squared.\n(C) is wrong because 4.74 is the pH only when [A⁻] = [HA], but here the acetate concentration is twice the acid concentration.\n(D) is wrong because 4.44 inverts the buffer ratio, using log([HA]/[A⁻]) = log 0.5 = −0.30, which would put the pH below pK_a."
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
   "explanation": "Correct: (A) It provides an alternative reaction pathway with a lower activation energy. A catalyst takes part in the mechanism and is regenerated, offering a different pathway whose highest barrier is lower than the uncatalyzed one. At the same temperature, the fraction of collisions with enough energy to clear a lower barrier is larger, so the rate constant and the rate increase. Because the catalyst lowers the forward and reverse barriers by the same amount, it speeds both directions equally and leaves K and ΔH unchanged; it only gets the system to equilibrium faster.\n\n(B) is wrong because average kinetic energy depends only on temperature, and a catalyst does not change the temperature.\n(C) is wrong because a catalyst speeds the forward and reverse reactions equally, so K and the equilibrium position are unchanged.\n(D) is wrong because ΔH depends only on the energies of reactants and products, which a catalyst does not change."
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
   "explanation": "Correct: (C) 1.5. K_p and K_c are related by K_p = K_c(RT)^Δn, where Δn = (moles of gaseous products) − (moles of gaseous reactants). For 2 SO₂ + O₂ ⇌ 2 SO₃, Δn = 2 − 3 = −1. RT = (0.0821 L·atm/(mol·K))(800 K) = 65.7. K_p = 100 × (65.7)⁻¹ = 100/65.7 = 1.52 ≈ 1.5. K_p is smaller than K_c because the forward reaction reduces the number of moles of gas.\n\n(A) is wrong because 6600 multiplies by RT (100 × 65.7 = 6570), using Δn = +1 instead of −1.\n(B) is wrong because K_p equals K_c only when Δn = 0, and here the moles of gas decrease from 3 to 2.\n(D) is wrong because 0.015 is (RT)⁻¹ = 1/65.7 = 0.0152 alone, without multiplying by K_c = 100."
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
   "explanation": "Correct: (D) Ag⁺(aq) + Cl⁻(aq) → AgCl(s). Start from the complete ionic equation: Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq). By the solubility rules, all nitrates and sodium salts are soluble, so NaNO₃ stays as dissolved ions, while AgCl is insoluble and forms the white precipitate. Na⁺ and NO₃⁻ appear unchanged on both sides, so they are spectator ions and are canceled. The net ionic equation is Ag⁺(aq) + Cl⁻(aq) → AgCl(s).\n\n(A) is wrong because it is the molecular (overall) equation; it shows the soluble salts as formula units rather than ions.\n(B) is wrong because NaNO₃ is soluble (all nitrates and sodium salts are), so Na⁺ and NO₃⁻ remain dissolved spectators.\n(C) is wrong because AgNO₃ is soluble and is a reactant here, so it does not precipitate; nitrate is a spectator."
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
   "explanation": "Correct: (C) 0.122 mol. Rearrange the ideal gas law PV = nRT to n = PV/(RT). Substituting, n = (1.50 atm)(2.00 L)/((0.0821 L·atm/(mol·K))(300. K)) = 3.00 L·atm/(24.6 L·atm/mol) = 0.122 mol. The units of L·atm cancel, leaving mol, and the answer has three significant figures to match the data. A quick check: at about STP one mole fills 22.4 L, so 2.00 L at 1.5 atm should hold roughly a tenth of a mole.\n\n(A) is wrong because 8.21 comes from inverting the expression, computing RT/(PV) = 24.6/3.00 instead of PV/(RT).\n(B) is wrong because 1.22 mol is ten times too large, a decimal slip such as using RT = 2.46 instead of 24.6.\n(D) is wrong because 0.0122 mol is ten times too small, a decimal slip such as using RT = 246 instead of 24.6."
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
   "explanation": "Correct: (A) Nitrogen. In a photoelectron spectrum, each peak corresponds to one subshell, and the relative height of the peak is proportional to the number of electrons in that subshell. The peaks from highest to lowest binding energy are 1s, 2s, and 2p, with relative heights 2 : 2 : 3. That gives the configuration 1s²2s²2p³, a total of 7 electrons. A neutral atom with 7 electrons has 7 protons, so the element is nitrogen, consistent with the stem's statement that it is in period 2.\n\n(B) is wrong because carbon is 1s²2s²2p², so its 2p peak would be the same height as the 1s and 2s peaks, not taller.\n(C) is wrong because boron is 1s²2s²2p¹, so its 2p peak would be half as tall as the 1s and 2s peaks.\n(D) is wrong because oxygen is 1s²2s²2p⁴, so its 2p peak would be twice as tall as each s peak, not 1.5 times."
  },
  {
   "id": "ce1-35",
   "unit": 1,
   "setId": "ce1-set7",
   "stem": "Why does the 1s peak occur at a much greater binding energy than the 2p peak?",
   "choices": [
    "The 1s electrons are farther from the nucleus, so they are held more tightly by it.",
    "The 1s subshell holds more electrons than the 2p subshell does, so it binds more.",
    "The 1s electrons are shielded from the nucleus by the electrons in the 2p subshell.",
    "The 1s electrons are closer to the nucleus and feel a greater effective nuclear charge."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The 1s electrons are closer to the nucleus and feel a greater effective nuclear charge. Binding energy measures how strongly an electron is attracted to the nucleus, which by Coulomb's law increases with the effective nuclear charge and decreases with distance. The 1s electrons are in the n = 1 shell, closest to the nucleus, and essentially no electrons lie inside them to shield the nuclear charge, so they feel nearly the full +7 charge. The 2p electrons are farther out and shielded by the 1s electrons. That is why the 1s peak is at about 40.6 MJ/mol versus 1.40 MJ/mol for 2p.\n\n(A) is wrong because 1s electrons are closer to the nucleus, not farther, and greater distance would weaken the attraction anyway.\n(B) is wrong because the 1s subshell holds 2 electrons here while 2p holds 3, and peak height reflects electron count, not binding energy.\n(C) is wrong because shielding works from the inside out: inner 1s electrons shield the 2p electrons, not the other way around."
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
   "explanation": "Correct: (B) −10 kJ. Use the Gibbs equation ΔG = ΔH − TΔS, with all terms in the same energy unit. Convert ΔS from J/K to kJ/K: −100 J/K = −0.100 kJ/K. Then TΔS = (300 K)(−0.100 kJ/K) = −30 kJ, and ΔG = −40 kJ − (−30 kJ) = −40 + 30 = −10 kJ. The negative ΔG means the process is thermodynamically favorable at 300 K. Because ΔH and ΔS are both negative, it is favorable only at low temperatures (below T = ΔH/ΔS = 400 K).\n\n(A) is wrong because −70 kJ comes from adding TΔS instead of subtracting it: −40 + (−30) = −70 kJ.\n(C) is wrong because +10 kJ has the overall sign reversed, computing TΔS − ΔH = −30 − (−40) = +10 kJ.\n(D) is wrong because +70 kJ comes from treating both terms as positive magnitudes and adding them, 40 + 30, with the wrong sign."
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
   "explanation": "Correct: (D) Toward the products, because there are fewer moles of gas on the product side. Decreasing the volume at constant temperature raises the total pressure and all the concentrations by the same factor. By Le Châtelier's principle, the system shifts to reduce the stress by lowering the number of gas molecules. The reactant side has 1 + 3 = 4 mol of gas and the product side has 2 mol, so the shift is toward NH₃. In terms of Q, halving the volume doubles every concentration, so Q = [NH₃]²/([N₂][H₂]³) falls to Q = K/4; since Q < K, the reaction proceeds forward.\n\n(A) is wrong because moving toward the side with more moles of gas would increase the pressure further, the opposite of relieving the stress.\n(B) is wrong because K is unchanged at constant temperature, but Q changes when the volume decreases, so the system must shift.\n(C) is wrong because all concentrations do increase, but that makes Q smaller than K, which drives the reaction forward, not in reverse."
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
   "explanation": "Correct: (C) 0.0800 M. HCl and NaOH react 1 : 1 (H⁺ + OH⁻ → H₂O), so at the equivalence point moles of HCl = moles of NaOH. Moles of NaOH = (0.100 mol/L)(0.0200 L) = 2.00 × 10⁻³ mol. The HCl concentration is (2.00 × 10⁻³ mol)/(0.0250 L) = 0.0800 M. Equivalently, M₁V₁ = M₂V₂ gives M(HCl) = (0.100)(20.0)/25.0 = 0.0800 M. It makes sense that the acid is less concentrated than the base, because it took less base volume than acid volume.\n\n(A) is wrong because 0.500 M would mean 0.0125 mol of HCl in 25.0 mL, over six times the 2.00 × 10⁻³ mol of OH⁻ that neutralized it.\n(B) is wrong because 0.125 M inverts the volume ratio, (0.100)(25.0)/20.0, giving the acid a higher concentration than the base.\n(D) is wrong because 0.0500 M would mean only 1.25 × 10⁻³ mol of HCl, less than the 2.00 × 10⁻³ mol of OH⁻ consumed."
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
   "explanation": "Correct: (C) 0.635 g. Charge passed: q = It = (2.00 A)(965 s) = 1930 C. Moles of electrons: 1930 C ÷ 96,500 C/mol e⁻ = 0.0200 mol e⁻. The half-reaction Cu²⁺ + 2e⁻ → Cu requires 2 mol of electrons per mole of Cu, so moles of Cu = 0.0200/2 = 0.0100 mol. Mass of Cu = (0.0100 mol)(63.5 g/mol) = 0.635 g. The answer has three significant figures, matching the current and time.\n\n(A) is wrong because 2.54 g multiplies the moles of electrons by 2 (0.0400 mol Cu) instead of dividing by 2.\n(B) is wrong because 1.27 g treats each electron as depositing one Cu atom, ignoring the 2 e⁻ needed per Cu²⁺.\n(D) is wrong because 0.318 g divides the moles of electrons by 4 instead of 2, depositing only half the actual copper."
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
   "explanation": "Correct: (B) 5.85 g. Molarity is moles of solute per liter of solution, so moles = M × V. Convert the volume to liters: 500. mL = 0.500 L. Moles of NaCl = (0.200 mol/L)(0.500 L) = 0.100 mol. Convert to mass with the molar mass: (0.100 mol)(58.5 g/mol) = 5.85 g. In the lab, 5.85 g of NaCl is dissolved and diluted to a final volume of 500. mL in a volumetric flask; the answer has three significant figures.\n\n(A) is wrong because 0.585 g is ten times too small, as if 50.0 mL (0.0500 L) were used instead of 500. mL.\n(C) is wrong because 11.7 g is the mass for 1.00 L of 0.200 M solution, ignoring that only 0.500 L is prepared.\n(D) is wrong because 58.5 g is a full mole of NaCl, which would make 2.00 M in 500. mL, ten times too concentrated."
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
   "explanation": "Correct: (A) B₂, because it is completely consumed. The limiting reactant is the one that runs out first and so determines how much product forms. The before box holds 4 A₂ and 2 B₂ molecules; the equation A₂ + B₂ → 2 AB uses them 1 : 1. Two B₂ can react with only two A₂, producing 4 AB. The after box shows 4 AB, 2 leftover A₂, and no B₂ at all. Since B₂ is completely used up while A₂ remains, B₂ is the limiting reactant and A₂ is in excess.\n\n(B) is wrong because the reactant present in greater amount is in excess; two A₂ molecules are left over after the reaction.\n(C) is wrong because AB is the product, and a limiting reactant must be one of the substances consumed.\n(D) is wrong because appearing in the equation does not prevent one reactant from limiting; B₂ runs out while A₂ remains."
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
   "explanation": "Correct: (C) 2. The reaction A₂ + B₂ → 2 AB consumes A₂ and B₂ in a 1 : 1 ratio. B₂ is limiting: its 2 molecules react with 2 of the 4 A₂ molecules and form 2 × 2 = 4 AB molecules. The excess reactant left is 4 − 2 = 2 A₂ molecules, which matches the after box (4 AB and 2 A₂). Atoms are conserved: before there are 8 A and 4 B atoms; after, 4 AB plus 2 A₂ also contain 8 A and 4 B atoms.\n\n(A) is wrong because 0 is the number of B₂ (limiting reactant) left, while two A₂ molecules remain in the after box.\n(B) is wrong because 1 would require three A₂ to react, but only two B₂ are available to react 1 : 1 with A₂.\n(D) is wrong because 4 is the starting number of A₂ molecules (and the number of AB formed), not what remains."
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
   "explanation": "Correct: (D) The molecules collide with the walls more frequently and with greater force. Pressure is the force per unit area from molecules colliding with the container walls. Raising the temperature increases the average kinetic energy of the molecules, so they move faster. In a rigid container (constant V) with a fixed number of molecules, faster molecules strike the walls more often and transfer more momentum per collision, so the force per area and the pressure both rise. This is the molecular basis of Gay-Lussac's law, P ∝ T at constant n and V.\n\n(A) is wrong because molecules do not grow when heated, and in an ideal gas the molecules' own volume is negligible anyway.\n(B) is wrong because an ideal gas has no intermolecular attractions, and any attractions would lower the pressure, not raise it.\n(C) is wrong because the amount of gas is fixed, so heating changes the speed of the molecules, not their number."
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
   "explanation": "Correct: (A) NH₃. Use VSEPR: count the electron domains around the central atom, then name the shape by the atoms only. In NH₃, nitrogen has three bonding pairs (to H) and one lone pair, giving four domains in a tetrahedral electron geometry. With one position occupied by the lone pair, the three H atoms form a pyramid with N at the apex: trigonal pyramidal, with H–N–H angles of about 107°, slightly less than 109.5° because the lone pair repels more strongly.\n\n(B) is wrong because CH₄ has four bonding pairs and no lone pairs, so it is tetrahedral, not trigonal pyramidal.\n(C) is wrong because H₂O has two bonding pairs and two lone pairs, so its molecular geometry is bent.\n(D) is wrong because boron in BF₃ has three bonding domains and no lone pair, so BF₃ is flat trigonal planar."
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
   "explanation": "Correct: (B) 1.2 M. Adding water during a dilution does not change the number of moles of solute, so M₁V₁ = M₂V₂. Solving for the new concentration: M₂ = M₁V₁/V₂ = (6.0 M)(50.0 mL)/(250. mL) = 1.2 M. The volume increases fivefold, so the concentration falls to one fifth of 6.0 M. Check: 6.0 M × 0.0500 L = 0.30 mol HCl, and 0.30 mol/0.250 L = 1.2 M. The answer has two significant figures, limited by 6.0 M.\n\n(A) is wrong because 0.24 M divides by 5 twice; one fivefold dilution of 6.0 M gives 1.2 M.\n(C) is wrong because 6.0 M is the original concentration; adding water lowers the concentration even though the moles are unchanged.\n(D) is wrong because 30. M inverts the volume ratio, (6.0)(250.)/50.0, so the concentration would wrongly increase on dilution."
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
   "explanation": "Correct: (B) 36 g. Convert grams of H₂ to moles: 4.0 g ÷ 2.0 g/mol = 2.0 mol H₂. The balanced equation 2 H₂ + O₂ → 2 H₂O gives a mole ratio H₂ : H₂O of 2 : 2 = 1 : 1, so 2.0 mol H₂O form. Convert to mass: (2.0 mol)(18.0 g/mol) = 36 g H₂O. Mass is conserved: 2.0 mol H₂ (4.0 g) reacts with 1.0 mol O₂ (32 g), and 4.0 g + 32 g = 36 g of water.\n\n(A) is wrong because 18 g is only 1.0 mol of water, as if the H₂ : H₂O ratio were 2 : 1 instead of 1 : 1.\n(C) is wrong because 72 g treats 4.0 g of H₂ as 4.0 mol, using the atomic mass 1.0 g/mol instead of 2.0 g/mol for H₂.\n(D) is wrong because 144 g is four times the correct mass, combining the wrong molar mass of H₂ with a doubled mole ratio."
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
   "explanation": "Correct: (D) 4.70. At 25 °C, the ion product of water is K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. Taking −log of both sides gives pH + pOH = 14.00. So pOH = 14.00 − 9.30 = 4.70. A pH above 7 means the solution is basic, so its pOH must be below 7, which 4.70 satisfies. The answer keeps two decimal places, matching the two decimal places in the given pH.\n\n(A) is wrong because 14.0 is the sum pH + pOH at 25 °C, not the pOH of this solution.\n(B) is wrong because 9.30 is the given pH; pOH equals pH only in a neutral solution at pH 7.00.\n(C) is wrong because 5.30 does not satisfy pH + pOH = 14.00, since 9.30 + 5.30 = 14.60."
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
   "explanation": "Correct: (B) 3.0 atm. By Dalton's law, each gas's partial pressure equals its mole fraction times the total pressure: P(O₂) = X(O₂) × P(total). Total moles = 0.50 mol N₂ + 1.5 mol O₂ = 2.0 mol. X(O₂) = 1.5/2.0 = 0.75. P(O₂) = (0.75)(4.0 atm) = 3.0 atm. Check: P(N₂) = (0.25)(4.0) = 1.0 atm, and 3.0 + 1.0 = 4.0 atm, the stated total. The 4.0 L volume is not needed.\n\n(A) is wrong because 4.0 atm is the total pressure of both gases, not the share contributed by O₂ alone.\n(C) is wrong because 2.0 atm splits the pressure equally, ignoring that O₂ has three times as many moles as N₂.\n(D) is wrong because 1.0 atm is the partial pressure of N₂, whose mole fraction is 0.50/2.0 = 0.25."
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
   "explanation": "Correct: (B) 3.49. pH is defined as pH = −log[H⁺]. With [H⁺] = 3.2 × 10⁻⁴ M: log(3.2 × 10⁻⁴) = log 3.2 + log 10⁻⁴ = 0.5051 − 4 = −3.4949, so pH = 3.49. As a quick check, [H⁺] lies between 10⁻⁴ M (pH 4) and 10⁻³ M (pH 3), so the pH must be between 3 and 4. Two significant figures in 3.2 give two decimal places in the pH.\n\n(A) is wrong because 2.49 is the pH for 3.2 × 10⁻³ M, an exponent slip of one power of ten.\n(C) is wrong because 4.49 is the pH for 3.2 × 10⁻⁵ M, an exponent slip of one power of ten; [H⁺] = 3.2 × 10⁻⁴ M is greater than 10⁻⁴ M, so the pH must be below 4.\n(D) is wrong because 10.51 is the pOH (14.00 − 3.49), not the pH of this acidic solution."
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
   "explanation": "Correct: (B) 12.00. NaOH is a strong base that dissociates completely, so [OH⁻] = 0.010 M = 1.0 × 10⁻² M. Then pOH = −log(1.0 × 10⁻²) = 2.00. At 25 °C, pH + pOH = 14.00, so pH = 14.00 − 2.00 = 12.00. A basic solution must have pH above 7, and a 0.010 M strong base is fairly concentrated, so a pH of 12 is reasonable.\n\n(A) is wrong because pH 14.00 corresponds to [OH⁻] = 1.0 M, a hundred times more concentrated than 0.010 M.\n(C) is wrong because pH 7.00 is neutral, but adding a strong base makes [OH⁻] far greater than [H⁺].\n(D) is wrong because 2.00 is the pOH, or the pH of 0.010 M strong acid, not the pH of NaOH."
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
   "explanation": "Correct: (C) 0.24 M. The Beer–Lambert law, A = εbc, makes absorbance directly proportional to concentration at fixed path length, which is why the calibration points fall on a straight line through the origin. The slope is εb = 0.15/0.10 M = 1.5 M⁻¹ (all points agree: 0.60/0.40 = 1.5). For A = 0.36: c = A/(εb) = 0.36/(1.5 M⁻¹) = 0.24 M. On the graph, 0.36 lies between 0.30 (0.20 M) and 0.45 (0.30 M), consistent with 0.24 M.\n\n(A) is wrong because 0.54 M multiplies the absorbance by the slope (0.36 × 1.5) instead of dividing by it.\n(B) is wrong because 0.36 M assumes concentration equals absorbance, which would require a slope of 1, not 1.5 M⁻¹.\n(D) is wrong because 0.12 M would give A = (1.5)(0.12) = 0.18, half the measured absorbance of 0.36."
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
   "explanation": "Correct: (C) 0.60. By the Beer–Lambert law, A = εbc, absorbance is directly proportional to the path length b at fixed ε and c. In the 1.0 cm cuvette, the 0.20 M standard has A = 0.30 on the calibration line. Doubling the path length to 2.0 cm doubles the absorbance: A = 0.30 × (2.0 cm/1.0 cm) = 0.60. Physically, light passes through twice as many absorbing molecules, so twice as much is absorbed on the logarithmic absorbance scale.\n\n(A) is wrong because 0.15 halves the absorbance, as if a longer path let more light through instead of less.\n(B) is wrong because 0.30 is the absorbance in the 1.0 cm cuvette; it ignores the path length term in A = εbc.\n(D) is wrong because 1.2 quadruples the absorbance, as if A depended on the square of the path length."
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
   "explanation": "Correct: (C) 0.30 mol. Convert mass to moles by dividing by the molar mass: n = m/M = 8.1 g ÷ 27.0 g/mol = 0.30 mol Al. The grams cancel, leaving moles. A quick estimate confirms the size: 8.1 g is a bit less than one third of 27.0 g, which is one mole, so the answer must be about 0.3 mol. Two significant figures in 8.1 g limit the answer to 0.30 mol, about 1.8 × 10²³ atoms.\n\n(A) is wrong because 30 mol of aluminum would have a mass of 810 g, one hundred times the 8.1 g sample.\n(B) is wrong because 3.0 mol would have a mass of 81 g, a power-of-ten slip in the division.\n(D) is wrong because 0.030 mol would have a mass of only 0.81 g, ten times smaller than the sample."
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
   "explanation": "Correct: (A) K > 1. The standard free energy change is related to the equilibrium constant by ΔG° = −RT ln K. R and T are positive, so if ΔG° < 0, then −RT ln K < 0, which requires ln K > 0, and therefore K > 1. A negative ΔG° means products are favored at equilibrium under standard conditions. For example, ΔG° = −10 kJ/mol at 298 K gives K = e^(10,000/(8.314 × 298)) ≈ 57.\n\n(B) is wrong because K < 1 makes ln K negative, which corresponds to a positive ΔG° and reactants favored.\n(C) is wrong because K = 1 gives ln K = 0 and ΔG° = 0, not a negative standard free energy change.\n(D) is wrong because K = 0 is impossible for a real equilibrium, since ln 0 is undefined and some product always forms."
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
   "explanation": "Correct: (D) T₂ is higher than T₁, because the distribution is shifted to higher speeds and is broader. In a Maxwell–Boltzmann distribution, raising the temperature increases the average kinetic energy, so the most probable speed shifts to higher values and the spread of speeds widens. Because the total area under each curve represents all of the molecules and stays the same, a broader curve must also have a lower peak. In the graph, the T₂ curve peaks at a higher speed and is lower and broader with a longer high-speed tail, so T₂ is the higher temperature.\n\n(A) is wrong because a taller, narrower peak at lower speed indicates a lower temperature, so T₁ is the cooler sample.\n(B) is wrong because the areas are equal for any temperature (same number of molecules); the shapes differ, so the temperatures differ.\n(C) is wrong because the lower peak results from the curve spreading out at higher temperature; T₂ is higher, not lower."
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
   "explanation": "Correct: (A) A greater fraction of the molecules has enough energy to overcome the activation energy. For a reaction to occur, colliding molecules must have at least the activation energy E_a (and the right orientation). At T₂ the speed distribution shifts right and has a much larger high-energy tail, so the fraction of molecules with energy at or above E_a increases sharply. Collisions are also somewhat more frequent, but the larger fraction of effective collisions is the main reason the rate rises so strongly, often roughly doubling for a 10 °C increase.\n\n(B) is wrong because the activation energy is a property of the reaction pathway and does not change with temperature; only a catalyst lowers it.\n(C) is wrong because faster molecules collide more often, not less, and their collisions are also more energetic.\n(D) is wrong because heating a fixed sample does not create molecules; only their energy distribution changes."
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
   "explanation": "Correct: (D) NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq). Entropy measures how many ways the particles and their energy can be arranged. Dissolving solid ammonium nitrate breaks an ordered crystal lattice into ions that move freely throughout the solution, which greatly increases the number of possible arrangements, so ΔS > 0. This entropy increase is what makes the dissolving favorable even though it is endothermic (it is used in instant cold packs). Each other choice moves particles into a more ordered or less dispersed state.\n\n(A) is wrong because condensing a gas to a liquid confines the molecules to a much smaller volume, which decreases entropy.\n(B) is wrong because 2 mol of gas becomes 1 mol of gas, and fewer gas molecules means fewer arrangements and lower entropy.\n(C) is wrong because deposition turns a gas directly into an ordered solid, a large decrease in entropy."
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
   "explanation": "Correct: (A) The reaction will proceed in the forward direction until equilibrium is reached. The reaction quotient Q has the same form as K but uses the current concentrations. Comparing Q with K tells which way the reaction must go. Here Q = 0.50 and K = 2.0, so Q < K: the ratio of products to reactants is too small. The net reaction therefore proceeds in the forward direction, converting reactants into products, which raises Q until Q = K = 2.0 and equilibrium is established.\n\n(B) is wrong because a net reverse reaction occurs only when Q > K, meaning there is too much product relative to equilibrium.\n(C) is wrong because the system is at equilibrium only when Q = K, and here 0.50 does not equal 2.0.\n(D) is wrong because a mixture with Q ≠ K is not at equilibrium, so a net reaction must occur until Q reaches K."
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
   "explanation": "Correct: (D) HF molecules form hydrogen bonds with each other, which are stronger than the forces between HCl molecules. Boiling separates molecules from one another, so the boiling point depends on intermolecular forces, not on the covalent bonds within the molecules. In HF, hydrogen is bonded to fluorine, which is small and highly electronegative, so each H carries a large partial positive charge that is strongly attracted to lone pairs on F in neighboring molecules. These hydrogen bonds are much stronger than the dipole–dipole and dispersion forces in HCl, so HF boils at about 20 °C versus −85 °C for HCl.\n\n(A) is wrong because HF has 10 electrons and HCl has 18, so HCl has the stronger London dispersion forces, not HF.\n(B) is wrong because boiling does not break covalent H–F bonds; it overcomes the attractions between separate HF molecules.\n(C) is wrong because HF is a molecular (covalent) compound, though very polar; it is not ionic."
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
   "explanation": "Correct: (B) 1.0 L. Boyle's law states that for a fixed amount of gas at constant temperature, pressure and volume are inversely proportional: P₁V₁ = P₂V₂. Solving for the new volume: V₂ = P₁V₁/P₂ = (2.0 atm)(4.0 L)/(8.0 atm) = 1.0 L. The pressure increases by a factor of 4, so the volume decreases to one fourth of 4.0 L. Molecularly, squeezing the same molecules into a smaller space makes them hit the walls more often, raising the pressure.\n\n(A) is wrong because 0.50 L is one eighth of the original volume, as if the pressure increased eightfold instead of fourfold.\n(C) is wrong because 4.0 L is the original volume, and the volume must change when the pressure changes at constant temperature.\n(D) is wrong because 16 L treats volume as directly proportional to pressure, (4.0)(8.0)/2.0, but Boyle's law is inverse."
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
