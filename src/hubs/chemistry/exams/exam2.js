// AP Chemistry — Exam 2 — 60 questions. 
const EXAM = {
 "questions": [
  {
   "id": "ce2-1",
   "unit": 4,
   "stem": "What volume of 0.200 M NaOH is required to neutralize completely 20.0 mL of 0.150 M H₂SO₄?",
   "choices": [
    "60.0 mL",
    "40.0 mL",
    "30.0 mL",
    "15.0 mL"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 30.0 mL. This is a neutralization stoichiometry problem, and the key is that sulfuric acid is diprotic: each H₂SO₄ supplies two H⁺. Moles of H₂SO₄ = (0.150 mol/L)(0.0200 L) = 3.00 × 10⁻³ mol, so moles of H⁺ = 2(3.00 × 10⁻³) = 6.00 × 10⁻³ mol. Complete neutralization needs an equal 6.00 × 10⁻³ mol OH⁻, so V(NaOH) = (6.00 × 10⁻³ mol)/(0.200 mol/L) = 0.0300 L = 30.0 mL.\n\n(A) is wrong because 60.0 mL doubles the correct volume, as if the base were counted as supplying half an OH⁻ per formula unit or the factor of 2 were applied twice.\n(B) is wrong because 40.0 mL would deliver (0.0400 L)(0.200 M) = 8.00 × 10⁻³ mol OH⁻, more than the 6.00 × 10⁻³ mol H⁺ present, so the solution would end up with excess base.\n(D) is wrong because 15.0 mL treats H₂SO₄ as monoprotic: 3.00 × 10⁻³ mol ÷ 0.200 M = 0.0150 L, neutralizing only half of the available H⁺."
  },
  {
   "id": "ce2-2",
   "unit": 3,
   "stem": "Which of the following substances has the highest boiling point?",
   "choices": [
    "CH₄",
    "CH₃CH₃",
    "CH₃CH₂CH₃",
    "CH₃CH₂CH₂CH₃"
   ],
   "correct": 3,
   "explanation": "Correct: (D) CH₃CH₂CH₂CH₃. All four compounds are nonpolar alkanes, so the only intermolecular forces between their molecules are London dispersion forces. Dispersion forces grow with the number of electrons and the size of the electron cloud, which make the cloud more polarizable, and with the length of the molecule, which gives more surface contact. Butane (C₄H₁₀, 58 g/mol, 34 electrons) is the largest of the four, so it has the strongest dispersion forces and the highest boiling point (about −1 °C, versus −42 °C for propane, −89 °C for ethane, and −162 °C for methane).\n\n(A) is wrong because CH₄ is the smallest molecule, with only 10 electrons, so it has the weakest dispersion forces and the lowest boiling point of the four.\n(B) is wrong because CH₃CH₃ (ethane, 18 electrons) has a smaller, less polarizable electron cloud than butane, so its dispersion forces and boiling point are lower.\n(C) is wrong because CH₃CH₂CH₃ (propane, 26 electrons) is larger than ethane but still smaller than butane, so its boiling point is lower than butane's."
  },
  {
   "id": "ce2-3",
   "unit": 5,
   "stem": "A reaction proceeds by the following mechanism. Step 1 (slow): A + B → C. Step 2 (fast): C + A → D. Which of the following is the rate law for the overall reaction?",
   "choices": [
    "Rate = k[A][B]",
    "Rate = k[A]²[B]",
    "Rate = k[C][A]",
    "Rate = k[D]"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Rate = k[A][B]. The rate of a multistep reaction is set by its slowest step, the rate-determining step. Because each step of a mechanism is elementary, its rate law can be written directly from its molecularity: the slow Step 1, A + B → C, is bimolecular with one A and one B, so rate = k[A][B]. Step 2 is fast and occurs after the slow step, so it does not limit the overall rate. The intermediate C does not appear in the rate law, which contains only species from the slow step that are reactants of the overall reaction.\n\n(B) is wrong because rate = k[A]²[B] uses the overall stoichiometry (2 A + B → D), but a rate law comes from the slow elementary step, not from the overall equation.\n(C) is wrong because rate = k[C][A] is the rate law of the fast Step 2, which does not control the rate, and it contains the intermediate C, which cannot appear in an overall rate law.\n(D) is wrong because rate = k[D] uses the final product D; a forward rate law is written in terms of reactant concentrations in the rate-determining step, not products."
  },
  {
   "id": "ce2-4",
   "unit": 2,
   "stem": "Which of the following correctly predicts which compound has the greater lattice energy, and why?",
   "choices": [
    "KBr has the greater lattice energy than NaF, because its ions are larger and can pack more closely.",
    "NaF has the greater lattice energy than KBr, because fluorine is less electronegative than bromine.",
    "The two compounds have equal lattice energies, because both ions have a charge of magnitude 1.",
    "NaF has the greater lattice energy than KBr, because its ions are smaller, so the Coulombic attraction is stronger."
   ],
   "correct": 3,
   "explanation": "Correct: (D) NaF has the greater lattice energy than KBr, because its ions are smaller, so the Coulombic attraction is stronger. Lattice energy follows Coulomb's law: the attraction is proportional to q₁q₂/r, where q are the ionic charges and r is the distance between ion centers. NaF and KBr both contain +1 and −1 ions, so the charges are equal and the difference comes from ion size. Na⁺ is smaller than K⁺ (one fewer electron shell) and F⁻ is much smaller than Br⁻ (two fewer shells), so r is smaller in NaF, the attraction is stronger, and NaF has the greater lattice energy (about 923 kJ/mol versus about 682 kJ/mol for KBr).\n\n(A) is wrong because larger ions sit farther apart, not closer; a larger r weakens the Coulombic attraction, so KBr has the smaller lattice energy.\n(B) is wrong because the reasoning is false: fluorine is the most electronegative element, more electronegative than bromine, and lattice energy depends on ion charge and size, not electronegativity.\n(C) is wrong because equal charges do not make lattice energies equal; Coulomb's law also depends on the distance between ions, which differs because the ions differ in size."
  },
  {
   "id": "ce2-5",
   "unit": 3,
   "stem": "At very high pressures, real gases show deviations from ideal behavior. Which statement best explains these deviations?",
   "choices": [
    "The volume of the molecules is no longer negligible compared with the container's volume.",
    "The molecules stop moving, so the kinetic molecular theory no longer applies to them.",
    "The temperature of the gas decreases, so the molecules attract each other less strongly.",
    "The molecules collide with each other less often, so the gas behaves less like an ideal gas."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The volume of the molecules is no longer negligible compared with the container's volume. The kinetic molecular theory treats gas molecules as points with no volume of their own. At low pressure the molecules occupy a tiny fraction of the container, so this approximation works. At very high pressure the gas is compressed until the molecules themselves take up a significant fraction of the container volume, so the free space they can move in is less than the container volume and the measured volume is larger than PV = nRT predicts. Attractions between the now-crowded molecules also matter more, but of the choices only the molecular-volume statement is true.\n\n(B) is wrong because gas molecules never stop moving at high pressure; their average kinetic energy depends on temperature, and the kinetic molecular theory still applies.\n(C) is wrong because nothing in the stem says the temperature drops, and lower temperature would make attractions more important, not less, so the reasoning is backward.\n(D) is wrong because at high pressure the molecules are crowded together and collide with each other more often, not less often, which is the opposite of the claim."
  },
  {
   "id": "ce2-6",
   "unit": 6,
   "stem": "A 50 g sample of a metal at 100 °C is placed in 50 g of water at 20 °C in an insulated container. The final temperature of the system is 35 °C. Which statement about the specific heat capacities is correct?",
   "choices": [
    "The metal has the greater specific heat capacity, because it started at a higher temperature.",
    "They have equal specific heat capacities, because the masses are equal.",
    "Water has the smaller specific heat capacity, because it gained thermal energy.",
    "Water has the greater specific heat capacity, because its temperature changed less than the metal's."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Water has the greater specific heat capacity, because its temperature changed less than the metal's. In an insulated container, energy lost by the metal equals energy gained by the water: m·c_metal·ΔT_metal = m·c_water·ΔT_water. The masses are equal (50 g each), so they cancel and c_metal·ΔT_metal = c_water·ΔT_water. The metal changed by 100 − 35 = 65 °C and the water by 35 − 20 = 15 °C. Then c_water/c_metal = 65/15 ≈ 4.3, so the water has the greater specific heat: it absorbed the same energy with a smaller temperature change.\n\n(A) is wrong because the starting temperature does not determine specific heat; the metal's larger temperature change for the same energy shows that it has the smaller specific heat.\n(B) is wrong because equal masses do not mean equal specific heats; with equal masses, the different temperature changes (65 °C versus 15 °C) show the specific heats are different.\n(C) is wrong because gaining or losing energy says nothing about specific heat; the water's small 15 °C change for the same energy shows that it has the larger specific heat."
  },
  {
   "id": "ce2-7",
   "unit": 3,
   "stem": "What is the density of methane, CH₄ (molar mass 16.0 g/mol), at STP? (At STP, 1 mol of an ideal gas occupies 22.4 L.)",
   "choices": [
    "0.357 g/L",
    "0.714 g/L",
    "1.40 g/L",
    "16.0 g/L"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.714 g/L. Density is mass per volume. For one mole of an ideal gas at STP, the mass is the molar mass and the volume is the molar volume, 22.4 L. So density = M/V_m = (16.0 g/mol)/(22.4 L/mol) = 0.714 g/L. The same result comes from d = PM/RT = (1.00 atm)(16.0 g/mol)/((0.0821 L·atm/(mol·K))(273 K)) = 0.714 g/L. Methane is lighter than air (about 1.29 g/L), which is why it rises.\n\n(A) is wrong because 0.357 g/L is half the correct value, as if the molar volume were taken as 44.8 L/mol or the molar mass as 8.0 g/mol.\n(C) is wrong because 1.40 g/L inverts the ratio: 22.4/16.0 = 1.40 has units of L/g, which is the volume per gram, not the density.\n(D) is wrong because 16.0 g/L uses the molar mass as if one mole occupied only 1 L instead of 22.4 L at STP."
  },
  {
   "id": "ce2-8",
   "unit": 8,
   "stem": "What is the conjugate base of the dihydrogen phosphate ion, H₂PO₄⁻?",
   "choices": [
    "HPO₄²⁻",
    "H₃PO₄",
    "PO₄³⁻",
    "H₃O⁺"
   ],
   "correct": 0,
   "explanation": "Correct: (A) HPO₄²⁻. In Brønsted–Lowry theory, a conjugate base is what remains after an acid donates one proton (H⁺). Removing one H⁺ from H₂PO₄⁻ removes one hydrogen and lowers the charge by one: H₂PO₄⁻ → HPO₄²⁻ + H⁺. So the conjugate base is HPO₄²⁻. Conjugate pairs always differ by exactly one H⁺, which is a quick way to check: H₂PO₄⁻ and HPO₄²⁻ differ by one H and one unit of charge.\n\n(B) is wrong because H₃PO₄ has one more H⁺ than H₂PO₄⁻, so it is the conjugate acid formed when H₂PO₄⁻ accepts a proton, not the conjugate base.\n(C) is wrong because PO₄³⁻ differs from H₂PO₄⁻ by two protons; a conjugate pair differs by exactly one H⁺, so PO₄³⁻ is the conjugate base of HPO₄²⁻.\n(D) is wrong because H₃O⁺ is the conjugate acid of water, formed when water accepts a proton; it is not derived from H₂PO₄⁻ at all."
  },
  {
   "id": "ce2-9",
   "unit": 7,
   "setId": "ce2-set1",
   "stem": "Which statement describes the system at 100 s and beyond?",
   "choices": [
    "The reaction has stopped, because the concentration of N₂O₄ is not zero.",
    "The forward reaction has stopped, because the concentration of NO₂ is constant.",
    "The system is not at equilibrium, because both reactant and product are present.",
    "The system is at equilibrium, because the concentrations are no longer changing."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The system is at equilibrium, because the concentrations are no longer changing. The graph shows that after about 100 s both curves level off: [N₂O₄] stays near 0.30 M and [NO₂] near 1.0 M. Constant concentrations mean the forward rate (N₂O₄ → 2 NO₂) equals the reverse rate (2 NO₂ → N₂O₄), which is the definition of chemical equilibrium. Equilibrium is dynamic: molecules keep reacting in both directions, but each is formed as fast as it is used up, so there is no net change in concentration.\n\n(A) is wrong because the reaction has not stopped; at equilibrium both the forward and reverse reactions continue at equal rates, and a nonzero [N₂O₄] is expected at equilibrium.\n(B) is wrong because the forward reaction has not stopped; [NO₂] is constant because the reverse reaction consumes NO₂ exactly as fast as the forward reaction produces it.\n(C) is wrong because the presence of both reactant and product is normal at equilibrium; equilibrium is defined by constant concentrations, not by complete conversion to product."
  },
  {
   "id": "ce2-10",
   "unit": 7,
   "setId": "ce2-set1",
   "stem": "What is the value of the equilibrium constant, K, for the reaction?",
   "choices": [
    "10",
    "3.3",
    "1.0",
    "0.30"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3.3. Read the equilibrium (level) values from the graph: [NO₂] = 1.0 M and [N₂O₄] = 0.30 M. These are consistent with the stoichiometry: N₂O₄ fell by 0.80 − 0.30 = 0.50 M, so NO₂ rose by 2(0.50) = 1.0 M. For N₂O₄(g) ⇌ 2 NO₂(g), the coefficient 2 becomes an exponent: K = [NO₂]²/[N₂O₄] = (1.0)²/0.30 = 3.3.\n\n(A) is wrong because 10 does not come from the equilibrium values; even squaring both terms gives (1.0)²/(0.30)² ≈ 11, and the N₂O₄ coefficient is 1, so its concentration is not squared.\n(C) is wrong because 1.0 is just the equilibrium [NO₂] read off the graph, not the ratio of products to reactants that defines K.\n(D) is wrong because 0.30 is the inverted expression [N₂O₄]/[NO₂]² = 0.30/(1.0)², which is K for the reverse reaction, not for N₂O₄ ⇌ 2 NO₂."
  },
  {
   "id": "ce2-11",
   "unit": 8,
   "stem": "The acid dissociation constant of HCN is K_a = 6.2 × 10⁻¹⁰. What is the base dissociation constant, K_b, for the cyanide ion, CN⁻? (K_w = 1.0 × 10⁻¹⁴)",
   "choices": [
    "6.2 × 10⁻⁴",
    "1.6 × 10⁻⁵",
    "1.0 × 10⁻¹⁴",
    "6.2 × 10⁻²⁴"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.6 × 10⁻⁵. HCN and CN⁻ are a conjugate acid–base pair. Adding their dissociation reactions (HCN ⇌ H⁺ + CN⁻ and CN⁻ + H₂O ⇌ HCN + OH⁻) gives H₂O ⇌ H⁺ + OH⁻, so K_a × K_b = K_w. Therefore K_b = K_w/K_a = (1.0 × 10⁻¹⁴)/(6.2 × 10⁻¹⁰) = 1.6 × 10⁻⁵. Because HCN is a very weak acid, its conjugate base CN⁻ is a relatively strong weak base.\n\n(A) is wrong because 6.2 × 10⁻⁴ keeps the mantissa 6.2 and only subtracts exponents (−14 − (−10) = −4); dividing 1.0 by 6.2 gives 0.16, so the answer is 1.6 × 10⁻⁵.\n(C) is wrong because 1.0 × 10⁻¹⁴ is K_w itself; K_b is found by dividing K_w by K_a, not by copying K_w.\n(D) is wrong because 6.2 × 10⁻²⁴ multiplies K_a by K_w instead of dividing K_w by K_a."
  },
  {
   "id": "ce2-12",
   "unit": 6,
   "stem": "A student mixes two solutions in a flask, and the flask feels cold to the touch. Which statement about the reaction is correct?",
   "choices": [
    "The reaction is endothermic, because it absorbs thermal energy from the surroundings.",
    "The reaction is exothermic, because it releases thermal energy to the surroundings.",
    "The reaction has ΔH < 0, because the temperature of the surroundings decreased.",
    "The reaction does not involve any energy change."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The reaction is endothermic, because it absorbs thermal energy from the surroundings. The flask feeling cold means thermal energy is flowing from the flask walls (and your hand) into the reacting mixture. The system, the reaction, absorbs heat from its surroundings, so the process is endothermic and ΔH > 0. The drop in temperature of the surroundings is the evidence: the energy used to break bonds or reorganize the particles comes from the surroundings, which cool down.\n\n(B) is wrong because an exothermic reaction releases heat to the surroundings and makes the flask feel warm, not cold.\n(C) is wrong because ΔH < 0 describes an exothermic reaction; a cooler surroundings means the system absorbed heat, so ΔH > 0.\n(D) is wrong because the change in temperature is direct evidence of energy transfer between the reaction and its surroundings, so the reaction does involve an energy change."
  },
  {
   "id": "ce2-13",
   "unit": 5,
   "stem": "Which of the following changes will increase the value of the rate constant, k, for a reaction?",
   "choices": [
    "Increasing the concentration of a reactant",
    "Increasing the volume of the container",
    "Adding more of a product",
    "Increasing the temperature"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Increasing the temperature. The rate constant k is fixed for a given reaction at a given temperature. The Arrhenius equation, k = Ae^(−Ea/RT), shows that k depends only on temperature and activation energy (which a catalyst can lower). Raising T makes the exponent less negative, so a larger fraction of collisions have energy ≥ Ea and k increases. Changing concentrations or volume changes the rate, but not k itself.\n\n(A) is wrong because increasing a reactant concentration raises the rate through the concentration term in the rate law, but k stays the same.\n(B) is wrong because increasing the volume lowers concentrations and so lowers the rate, but it does not change the rate constant k.\n(C) is wrong because adding product does not change k; it may affect the reverse rate or the equilibrium position, but k depends only on temperature and activation energy."
  },
  {
   "id": "ce2-14",
   "unit": 7,
   "stem": "For the endothermic reaction A(g) + heat ⇌ B(g), the temperature of the system at equilibrium is increased. What happens to the equilibrium?",
   "choices": [
    "It shifts toward the products, and the value of K increases.",
    "It shifts toward the reactants, and the value of K decreases.",
    "It shifts toward the products, and the value of K stays the same.",
    "It does not shift, because the pressure is constant."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It shifts toward the products, and the value of K increases. For an endothermic reaction, heat behaves like a reactant: A + heat ⇌ B. By Le Châtelier's principle, adding heat (raising T) is relieved by the forward, heat-absorbing reaction, so the equilibrium shifts toward B. Temperature is the only change that alters the value of K. For an endothermic reaction (ΔH° > 0), K increases as T increases (van 't Hoff relationship), so the new equilibrium has a larger [B]/[A] ratio.\n\n(B) is wrong because shifting toward the reactants is what happens to an exothermic reaction when heated; here heat is a reactant, so heating drives the reaction forward.\n(C) is wrong because the direction is right, but K does change with temperature; it is concentration and pressure changes that leave K unchanged.\n(D) is wrong because temperature is a stress whether or not the pressure is constant; heating an endothermic reaction always shifts it toward products."
  },
  {
   "id": "ce2-15",
   "unit": 7,
   "stem": "For H₂(g) + I₂(g) ⇌ 2 HI(g), K = 50 at a certain temperature. A 1.0 L container initially holds 1.0 mol of H₂ and 1.0 mol of I₂. What is the equilibrium concentration of HI?",
   "choices": [
    "2.0 M",
    "1.6 M",
    "1.1 M",
    "0.78 M"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.6 M. Use an ICE table in molarity (1.0 L): initial [H₂] = [I₂] = 1.0 M, [HI] = 0. If x M of H₂ reacts, [H₂] = [I₂] = 1.0 − x and [HI] = 2x. Then K = (2x)²/(1.0 − x)² = 50. Because both sides are perfect squares, take the square root: 2x/(1.0 − x) = √50 = 7.07. So 2x = 7.07 − 7.07x, 9.07x = 7.07, x = 0.78 M, and [HI] = 2x = 1.56 ≈ 1.6 M. Check: (1.56)²/(0.22)² ≈ 50.\n\n(A) is wrong because 2.0 M would mean the reaction went to completion with [H₂] = [I₂] = 0, which would make the equilibrium expression undefined; with K = 50 some H₂ and I₂ remain.\n(C) is wrong because 1.1 M HI would leave [H₂] = [I₂] = 1.0 − 0.55 = 0.45 M, giving Q = (1.1)²/(0.45)² ≈ 6.0, far below K = 50.\n(D) is wrong because 0.78 M is x, the amount of H₂ that reacted; each mole of H₂ produces 2 mol of HI, so [HI] = 2x = 1.6 M."
  },
  {
   "id": "ce2-16",
   "unit": 1,
   "stem": "What is the mass percent of oxygen in calcium carbonate, CaCO₃? (Molar masses: Ca = 40.1, C = 12.0, O = 16.0 g/mol)",
   "choices": [
    "12.0%",
    "40.0%",
    "48.0%",
    "52.0%"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 48.0%. Mass percent of an element = (mass of that element in one mole of compound ÷ molar mass) × 100. Molar mass of CaCO₃ = 40.1 + 12.0 + 3(16.0) = 100.1 g/mol. Oxygen contributes 3 × 16.0 = 48.0 g per mole. Mass percent O = (48.0/100.1) × 100 = 47.95% ≈ 48.0%. The three percentages should total 100%: Ca 40.1%, C 12.0%, O 48.0%.\n\n(A) is wrong because 12.0% is the mass percent of carbon (12.0/100.1 × 100), the lightest element in the compound, not the percentage of oxygen.\n(B) is wrong because 40.0% is the mass percent of calcium (40.1/100.1 × 100), the metal in the compound, not the percentage of oxygen.\n(D) is wrong because 52.0% is 100% − 48.0%, the combined percentage of calcium and carbon, not the percentage of oxygen."
  },
  {
   "id": "ce2-17",
   "unit": 4,
   "stem": "In an experiment, the theoretical yield of a product is 25.0 g and 20.0 g of the product is actually obtained. What is the percent yield?",
   "choices": [
    "125%",
    "80.0%",
    "75.0%",
    "20.0%"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 80.0%. Percent yield compares the amount actually obtained with the maximum amount predicted by stoichiometry: percent yield = (actual yield/theoretical yield) × 100 = (20.0 g/25.0 g) × 100 = 80.0%. A yield below 100% is normal because of incomplete reactions, side reactions, and product lost during transfer and purification; the theoretical yield sets the upper limit.\n\n(A) is wrong because 125% inverts the ratio (25.0/20.0 × 100); a percent yield above 100% would mean more product than the reactants can make.\n(C) is wrong because 75.0% does not follow from the data; 20.0 g is 80.0% of 25.0 g, and 75.0% of 25.0 g would be 18.75 g.\n(D) is wrong because 20.0% is the percentage of product that was lost (100% − 80.0%), not the percent yield."
  },
  {
   "id": "ce2-18",
   "unit": 8,
   "stem": "Hydrofluoric acid, HF, is a weak acid with K_a = 7.2 × 10⁻⁴. What is the approximate pH of a 0.10 M HF solution?",
   "choices": [
    "4.14",
    "3.14",
    "2.07",
    "1.00"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.07. HF is a weak acid, so it only partly ionizes: HF ⇌ H⁺ + F⁻, with K_a = x²/(0.10 − x). Assuming x is small compared with 0.10, x² = K_aC = (7.2 × 10⁻⁴)(0.10) = 7.2 × 10⁻⁵, so x = [H⁺] = 8.5 × 10⁻³ M and pH = −log(8.5 × 10⁻³) = 2.07. (Solving the quadratic exactly gives [H⁺] = 8.1 × 10⁻³ M and pH 2.09, so the approximate answer is still closest to 2.07.)\n\n(A) is wrong because 4.14 is −log(K_aC) = −log(7.2 × 10⁻⁵), which forgets to take the square root of K_aC.\n(B) is wrong because 3.14 is pK_a = −log(7.2 × 10⁻⁴), the pH only when [HF] = [F⁻], as in a buffer at half-equivalence, not in pure HF.\n(D) is wrong because 1.00 is the pH of 0.10 M of a strong acid that ionizes completely; HF is weak, so [H⁺] is far less than 0.10 M."
  },
  {
   "id": "ce2-19",
   "unit": 9,
   "setId": "ce2-set2",
   "stem": "What is the standard cell potential, E°cell, for this cell?",
   "choices": [
    "0.36 V",
    "0.80 V",
    "1.24 V",
    "2.04 V"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.24 V. In a galvanic cell the half-reaction with the higher reduction potential occurs at the cathode. Ag⁺/Ag (+0.80 V) is the cathode, and Fe is oxidized at the anode (−0.44 V), consistent with the figure, where electrons flow from Fe to Ag. E°cell = E°cathode − E°anode = (+0.80 V) − (−0.44 V) = +1.24 V. Although the balanced reaction is Fe + 2 Ag⁺ → Fe²⁺ + 2 Ag, E° is an intensive property and is not multiplied by the coefficient 2.\n\n(A) is wrong because 0.36 V comes from 0.80 − 0.44, treating the anode potential as +0.44 V (or adding the two potentials with the wrong sign).\n(B) is wrong because 0.80 V is only the silver reduction potential; it ignores the contribution of the iron anode.\n(D) is wrong because 2.04 V comes from doubling the silver potential to match the 2 Ag⁺ in the balanced equation, 2(0.80) + 0.44; cell potentials are not multiplied by coefficients."
  },
  {
   "id": "ce2-20",
   "unit": 9,
   "setId": "ce2-set2",
   "stem": "As the cell operates, what happens to the mass of the iron electrode?",
   "choices": [
    "It increases, because Fe²⁺ is reduced to Fe at the iron electrode.",
    "It stays the same, because the iron electrode is inert.",
    "It increases, because silver plates onto the iron.",
    "It decreases, because Fe is oxidized to Fe²⁺ at the anode."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It decreases, because Fe is oxidized to Fe²⁺ at the anode. Iron has the lower (more negative) reduction potential, −0.44 V, so it is the anode, where oxidation occurs: Fe(s) → Fe²⁺(aq) + 2e⁻. The figure confirms this: electrons leave through the wire from the Fe electrode toward Ag. As iron atoms are converted into Fe²⁺ ions that dissolve into the solution, the iron electrode loses mass. Meanwhile Ag⁺ is reduced at the cathode and silver plates onto the silver electrode, increasing its mass.\n\n(A) is wrong because Fe²⁺ is not reduced here; iron has the lower reduction potential, so Fe is oxidized and the iron electrode loses mass.\n(B) is wrong because iron is not inert; it is the reactive anode that is oxidized, unlike inert electrodes such as platinum or graphite.\n(C) is wrong because silver plates onto the silver cathode, not onto the iron, because the Ag⁺ ions are in the other beaker and are reduced at the Ag electrode."
  },
  {
   "id": "ce2-21",
   "unit": 4,
   "stem": "Which of the following reactions is an oxidation–reduction reaction?",
   "choices": [
    "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
    "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
    "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
    "CaCO₃(s) → CaO(s) + CO₂(g)"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s). A redox reaction is one in which oxidation numbers change because electrons are transferred. In Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s), zinc goes from 0 to +2 (oxidized, losing 2 e⁻) and copper goes from +2 to 0 (reduced, gaining 2 e⁻); the sulfate ion is a spectator, with S at +6 and O at −2 on both sides. This single-replacement reaction is the basis of the Daniell cell.\n\n(B) is wrong because NaOH + HCl is an acid–base neutralization; Na stays +1, Cl stays −1, H stays +1, and O stays −2, so no oxidation numbers change.\n(C) is wrong because AgNO₃ + NaCl is a precipitation (double-replacement) reaction; Ag stays +1 and Cl stays −1, so no electrons are transferred.\n(D) is wrong because CaCO₃ → CaO + CO₂ is a decomposition in which Ca stays +2, C stays +4, and O stays −2, so it is not a redox reaction."
  },
  {
   "id": "ce2-22",
   "unit": 4,
   "stem": "Which of the following is the net ionic equation for the reaction between aqueous hydrochloric acid and aqueous sodium hydroxide?",
   "choices": [
    "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    "Na⁺(aq) + Cl⁻(aq) → NaCl(s)",
    "H⁺(aq) + Cl⁻(aq) → HCl(aq)",
    "H⁺(aq) + OH⁻(aq) → H₂O(l)"
   ],
   "correct": 3,
   "explanation": "Correct: (D) H⁺(aq) + OH⁻(aq) → H₂O(l). HCl is a strong acid and NaOH a strong base, so both are fully ionized in water, and NaCl is a soluble salt. The complete ionic equation is H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O(l). Na⁺ and Cl⁻ appear unchanged on both sides, so they are spectator ions and are cancelled. What remains is the net ionic equation, H⁺(aq) + OH⁻(aq) → H₂O(l), which is the same for any strong acid–strong base neutralization.\n\n(A) is wrong because this is the molecular equation; it shows the strong electrolytes as intact compounds and keeps the spectator ions, so it is not a net ionic equation.\n(B) is wrong because NaCl is soluble in water and does not precipitate; Na⁺ and Cl⁻ are spectator ions that stay dissolved.\n(C) is wrong because HCl is a strong acid that stays ionized in water; H⁺ and Cl⁻ do not recombine, and the equation omits the OH⁻ that actually reacts."
  },
  {
   "id": "ce2-23",
   "unit": 9,
   "stem": "A reaction has an equilibrium constant K = 1 × 10⁵ at 298 K. What is ΔG° for the reaction? (R = 8.314 J/(mol·K))",
   "choices": [
    "+57.0 kJ",
    "+28.5 kJ",
    "−28.5 kJ",
    "−57.0 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) −28.5 kJ. Standard free-energy change and the equilibrium constant are linked by ΔG° = −RT ln K. With R = 8.314 J/(mol·K), T = 298 K, and ln(1 × 10⁵) = 5 × 2.303 = 11.51: ΔG° = −(8.314)(298)(11.51) = −(2477.6 J/mol)(11.51) = −2.85 × 10⁴ J = −28.5 kJ. A K much greater than 1 means products are favored at equilibrium, which corresponds to a negative ΔG°.\n\n(A) is wrong because +57.0 kJ has the wrong sign and is twice the correct magnitude; a K greater than 1 always gives a negative ΔG°.\n(B) is wrong because +28.5 kJ has the correct magnitude but the wrong sign; it drops the minus sign in ΔG° = −RT ln K, and a positive ΔG° would mean K < 1.\n(D) is wrong because −57.0 kJ is twice the correct magnitude, as if ln K were doubled (ln K = 23.0 would correspond to K = 1 × 10¹⁰, not 1 × 10⁵)."
  },
  {
   "id": "ce2-24",
   "unit": 3,
   "stem": "Water has a much higher surface tension than hexane (C₆H₁₄). Which statement best explains this?",
   "choices": [
    "Water molecules are held by hydrogen bonds, which are stronger than hexane's dispersion forces.",
    "Water molecules have a much larger electron cloud than the molecules of hexane do.",
    "Water molecules are nonpolar, so they are pulled strongly toward one another at the surface.",
    "The covalent bonds within water molecules are stronger than those within hexane molecules."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Water molecules are held by hydrogen bonds, which are stronger than hexane's dispersion forces. Surface tension measures the energy needed to increase the surface area of a liquid, and it depends on how strongly the molecules at the surface are pulled inward by their neighbors. Water molecules are polar and have O–H bonds, so each one can hydrogen-bond to others. Hexane is a nonpolar hydrocarbon held together only by London dispersion forces, which are weaker than water's hydrogen bonding. Stronger intermolecular forces mean higher surface tension, so water's is about 72 mN/m versus about 18 mN/m for hexane.\n\n(B) is wrong because water (10 electrons) has a much smaller electron cloud than hexane (50 electrons), so if anything hexane has the stronger dispersion forces.\n(C) is wrong because water molecules are polar, not nonpolar; their polarity and O–H bonds are what allow the hydrogen bonding behind the high surface tension.\n(D) is wrong because surface tension depends on attractions between molecules, not on covalent bonds within molecules, which are not broken when the surface is stretched."
  },
  {
   "id": "ce2-25",
   "unit": 8,
   "stem": "A solution has [OH⁻] = 2.5 × 10⁻³ M at 25 °C. What is the pH of the solution?",
   "choices": [
    "11.40",
    "10.60",
    "3.40",
    "2.60"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 11.40. First find pOH from [OH⁻], then use pH + pOH = 14.00 at 25 °C. pOH = −log(2.5 × 10⁻³) = −(log 2.5 + log 10⁻³) = −(0.40 − 3) = 2.60. Then pH = 14.00 − 2.60 = 11.40. Because [OH⁻] is greater than 1.0 × 10⁻⁷ M, the solution is basic, so the pH must be above 7. Two decimal places in the pH match the two significant figures in 2.5 × 10⁻³.\n\n(B) is wrong because 10.60 equals 14.00 − 3.40, which uses a pOH of 3.40 obtained by adding log 2.5 to 3 instead of subtracting it.\n(C) is wrong because 3.40 is a wrong pOH (3 + 0.40 instead of 3 − 0.40) and gives an acidic pH, impossible for a solution with [OH⁻] > 10⁻⁷ M.\n(D) is wrong because 2.60 is the pOH, not the pH; it must still be subtracted from 14.00 to give pH 11.40."
  },
  {
   "id": "ce2-26",
   "unit": 3,
   "stem": "What is the energy of a photon of blue light with a wavelength of 450 nm? (h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s)",
   "choices": [
    "4.4 × 10⁻²⁰ J",
    "4.4 × 10⁻¹⁹ J",
    "4.4 × 10⁻¹⁸ J",
    "1.5 × 10⁻³⁹ J"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 4.4 × 10⁻¹⁹ J. A photon's energy is E = hν, and since ν = c/λ, E = hc/λ. The wavelength must be in meters: 450 nm = 450 × 10⁻⁹ m = 4.50 × 10⁻⁷ m. Then E = (6.63 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s)/(4.50 × 10⁻⁷ m) = (1.989 × 10⁻²⁵ J·m)/(4.50 × 10⁻⁷ m) = 4.42 × 10⁻¹⁹ J ≈ 4.4 × 10⁻¹⁹ J, a typical energy for one photon of visible light.\n\n(A) is wrong because 4.4 × 10⁻²⁰ J is ten times too small; it results from converting 450 nm to 4.5 × 10⁻⁶ m, a power-of-ten error in the conversion.\n(C) is wrong because 4.4 × 10⁻¹⁸ J is ten times too large; it results from converting 450 nm to 4.5 × 10⁻⁸ m, a power-of-ten error in the conversion.\n(D) is wrong because 1.5 × 10⁻³⁹ J is about 10²⁰ times too small; no correct combination of hc/λ gives it, and visible photons carry energies of a few times 10⁻¹⁹ J."
  },
  {
   "id": "ce2-27",
   "unit": 9,
   "stem": "A galvanic cell has a standard cell potential of E° = 1.10 V and involves the transfer of 2 mol of electrons. What is the cell potential at 25 °C when the reaction quotient is Q = 100? (E = E° − (0.0592/n) log Q)",
   "choices": [
    "0.98 V",
    "1.04 V",
    "1.10 V",
    "1.16 V"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.04 V. The Nernst equation corrects the standard potential for nonstandard concentrations. With n = 2 and Q = 100, log Q = 2, so E = 1.10 V − (0.0592/2)(2) = 1.10 V − (0.0296)(2) = 1.10 V − 0.0592 V = 1.04 V. Q > 1 means products are more concentrated relative to reactants than under standard conditions, so the reaction is closer to equilibrium and has less driving force; the cell potential drops below E°.\n\n(A) is wrong because 0.98 V comes from using n = 1: 1.10 − (0.0592)(2) = 0.98 V; the reaction transfers 2 mol of electrons, so the correction is halved.\n(C) is wrong because 1.10 V is the standard potential, which applies only when Q = 1; with Q = 100 the log term is not zero.\n(D) is wrong because 1.16 V adds the correction instead of subtracting it; Q > 1 always lowers E below E°."
  },
  {
   "id": "ce2-28",
   "unit": 2,
   "stem": "Brass is an alloy made by mixing copper atoms with zinc atoms of similar size. Which type of alloy is brass?",
   "choices": [
    "An interstitial alloy, because zinc atoms fit into the spaces between copper atoms.",
    "An ionic compound, because copper and zinc transfer electrons.",
    "A molecular solid, because copper and zinc form discrete molecules.",
    "A substitutional alloy, because zinc atoms replace some of the copper atoms in the lattice."
   ],
   "correct": 3,
   "explanation": "Correct: (D) A substitutional alloy, because zinc atoms replace some of the copper atoms in the lattice. Alloys are classified by how the second element fits into the host metal lattice. When the two kinds of atoms have similar radii, as copper (128 pm) and zinc (134 pm) do, zinc atoms take the place of copper atoms at lattice sites: a substitutional alloy. Interstitial alloys form only when the added atoms are much smaller than the host atoms, like carbon in iron (steel), so they fit in the holes between host atoms. Brass is still a metal with delocalized electrons, so it conducts electricity and is malleable.\n\n(A) is wrong because interstitial alloys require much smaller atoms, such as C in Fe; zinc atoms are about the same size as copper atoms and cannot fit in the gaps.\n(B) is wrong because copper and zinc are both metals, and alloys keep metallic bonding with a sea of delocalized electrons; no electrons are transferred to form ions.\n(C) is wrong because metals form extended lattices held by metallic bonding, not discrete molecules, so brass is not a molecular solid."
  },
  {
   "id": "ce2-29",
   "unit": 9,
   "stem": "A reaction has ΔH > 0 and ΔS > 0. Under what conditions is the reaction spontaneous?",
   "choices": [
    "At high temperatures, where the −TΔS term outweighs the positive ΔH",
    "At all temperatures, because ΔS is positive for the reaction",
    "At low temperatures, because the reaction absorbs energy from its surroundings",
    "At no temperature, because ΔH is positive for the reaction"
   ],
   "correct": 0,
   "explanation": "Correct: (A) At high temperatures, where the −TΔS term outweighs the positive ΔH. Spontaneity is determined by ΔG = ΔH − TΔS, and a process is spontaneous when ΔG < 0. Here ΔH > 0 (unfavorable) and ΔS > 0 (favorable). At low T, the small −TΔS term cannot outweigh the positive ΔH, so ΔG > 0. Above the crossover temperature T = ΔH/ΔS, the −TΔS term is larger in magnitude than ΔH, ΔG becomes negative, and the reaction is spontaneous. Melting ice above 0 °C is a familiar example.\n\n(B) is wrong because a positive ΔS alone does not guarantee spontaneity; the positive ΔH makes ΔG positive at low temperatures, so the reaction is spontaneous only at high T.\n(C) is wrong because at low T the positive ΔH dominates and ΔG > 0; absorbing energy (being endothermic) makes the reaction less favorable, not more.\n(D) is wrong because a positive ΔH can be overcome by a large enough TΔS term; with ΔS > 0, ΔG becomes negative above T = ΔH/ΔS."
  },
  {
   "id": "ce2-30",
   "unit": 3,
   "setId": "ce2-set3",
   "stem": "What is the maximum mass of KNO₃ that will dissolve in 50 g of water at 60 °C?",
   "choices": [
    "110 g",
    "64 g",
    "55 g",
    "32 g"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 55 g. Read the KNO₃ curve at 60 °C: the data point is at 110 g per 100 g of water. Solubility is proportional to the amount of solvent at a given temperature, so 50 g of water, half of 100 g, dissolves half as much: (110 g KNO₃/100 g H₂O)(50 g H₂O) = 55 g KNO₃. Any additional KNO₃ would remain undissolved in a saturated solution.\n\n(A) is wrong because 110 g is the solubility in 100 g of water; it was not scaled to the 50 g of water in the problem.\n(B) is wrong because 64 g is the KNO₃ solubility at 40 °C (per 100 g water), read from the wrong point on the curve.\n(D) is wrong because 32 g is the KNO₃ solubility at 20 °C (per 100 g water), read from the wrong point on the curve."
  },
  {
   "id": "ce2-31",
   "unit": 3,
   "setId": "ce2-set3",
   "stem": "A saturated solution of KNO₃ at 80 °C is slowly cooled to 20 °C. What happens?",
   "choices": [
    "The solution remains saturated and no solid forms, because the concentration of the solution is unchanged.",
    "Solid KNO₃ dissolves, because the solution can hold more solute at a lower temperature.",
    "The solution becomes unsaturated, because KNO₃ reacts with water at low temperatures.",
    "Solid KNO₃ crystallizes from the solution, because its solubility is lower at 20 °C."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Solid KNO₃ crystallizes from the solution, because its solubility is lower at 20 °C. At 80 °C a saturated solution holds about 169 g KNO₃ per 100 g water. The graph shows that at 20 °C only about 32 g dissolves in 100 g water. On cooling, the solution would contain far more solute than the solubility allows, so the excess, about 169 − 32 = 137 g per 100 g water, crystallizes out, leaving a saturated solution at 20 °C. This steep solubility curve is why KNO₃ is easily purified by recrystallization.\n\n(A) is wrong because the concentration does not stay at the 80 °C value; the solubility drops sharply on cooling, so the excess KNO₃ comes out as a solid.\n(B) is wrong because the graph shows KNO₃ is less soluble at lower temperature, so solid forms rather than dissolves.\n(C) is wrong because KNO₃ does not react with water, and the solution is saturated, not unsaturated, after the excess solid crystallizes out."
  },
  {
   "id": "ce2-32",
   "unit": 9,
   "stem": "Molten sodium chloride is electrolyzed using inert electrodes. Which substance is produced at the cathode?",
   "choices": [
    "Na(l)",
    "Cl₂(g)",
    "NaOH(aq)",
    "H₂(g)"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Na(l). In electrolysis, reduction always occurs at the cathode and oxidation at the anode. Molten NaCl contains only Na⁺ and Cl⁻ ions, with no water. The only species that can gain electrons is Na⁺: Na⁺ + e⁻ → Na(l), so liquid sodium metal forms at the cathode (sodium melts at 98 °C, well below NaCl's melting point of 801 °C). At the anode, Cl⁻ is oxidized: 2 Cl⁻ → Cl₂(g) + 2e⁻.\n\n(B) is wrong because Cl₂ is produced at the anode by oxidation of Cl⁻; the cathode is where reduction occurs.\n(C) is wrong because NaOH forms only in the electrolysis of aqueous NaCl, where water is reduced to H₂ and OH⁻; molten NaCl contains no water.\n(D) is wrong because H₂ comes from the reduction of water in aqueous solutions; molten NaCl contains no hydrogen, so it cannot form H₂."
  },
  {
   "id": "ce2-33",
   "unit": 5,
   "stem": "A first-order reaction has a rate constant of 0.0231 min⁻¹. What is the half-life of this reaction?",
   "choices": [
    "120 min",
    "60 min",
    "30 min",
    "15 min"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 30 min. For a first-order reaction, the half-life is independent of concentration and depends only on k: t½ = ln 2/k = 0.693/k. Here t½ = 0.693/(0.0231 min⁻¹) = 30.0 min. Check: 0.0231 × 30.0 = 0.693. The unit min⁻¹ is the signature of a first-order rate constant, and it gives a half-life in minutes.\n\n(A) is wrong because 120 min would require k = 0.693/120 = 0.00578 min⁻¹, a quarter of the given k; 120 min is four half-lives, not one.\n(B) is wrong because 60 min is twice the half-life (the time for 75% to react), corresponding to k = 0.693/60 = 0.0116 min⁻¹.\n(D) is wrong because 15 min is half the true half-life and would require k = 0.693/15 = 0.0462 min⁻¹, twice the given value."
  },
  {
   "id": "ce2-34",
   "unit": 8,
   "stem": "A buffer contains 0.50 mol of NH₃ and 0.50 mol of NH₄⁺ in 1.0 L of solution; the pK_a of NH₄⁺ is 9.26. What is the pH of the buffer after 0.010 mol of HCl is added to it? (Assume no change in volume.)",
   "choices": [
    "9.00",
    "9.24",
    "9.26",
    "9.50"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 9.24. The added strong acid reacts completely with the weak base in the buffer: H⁺ + NH₃ → NH₄⁺. So 0.010 mol HCl converts 0.010 mol NH₃ into NH₄⁺: NH₃ = 0.50 − 0.010 = 0.49 mol and NH₄⁺ = 0.50 + 0.010 = 0.51 mol (in 1.0 L). By Henderson–Hasselbalch, pH = pK_a + log([NH₃]/[NH₄⁺]) = 9.26 + log(0.49/0.51) = 9.26 + (−0.017) = 9.24. The pH drops only slightly, which shows the buffer resisting the change.\n\n(A) is wrong because 9.00 is a drop of 0.26, which would require log(base/acid) = −0.26, a base:acid ratio of 0.55 rather than 0.49/0.51 = 0.96.\n(C) is wrong because 9.26 is the pH before the acid was added; the added H⁺ converts some NH₃ to NH₄⁺, so the ratio and pH change slightly.\n(D) is wrong because 9.50 is higher than the starting pH; adding acid can only lower the pH, so this has the wrong direction."
  },
  {
   "id": "ce2-35",
   "unit": 6,
   "stem": "Use the average bond enthalpies N≡N = 945 kJ/mol, H–H = 436 kJ/mol, and N–H = 391 kJ/mol to estimate ΔH for N₂(g) + 3 H₂(g) → 2 NH₃(g).",
   "choices": [
    "−2,346 kJ",
    "−93 kJ",
    "+93 kJ",
    "+2,253 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) −93 kJ. ΔH ≈ Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed). Bonds broken: one N≡N and three H–H = 945 + 3(436) = 945 + 1308 = 2253 kJ. Bonds formed: two NH₃ molecules, each with three N–H bonds, give 6 N–H = 6(391) = 2346 kJ. ΔH ≈ 2253 − 2346 = −93 kJ. Forming bonds releases more energy than breaking bonds absorbs, so the reaction is exothermic (the tabulated value is −92 kJ).\n\n(A) is wrong because −2,346 kJ counts only the energy released by forming 6 N–H bonds and leaves out the 2253 kJ absorbed in breaking the reactant bonds.\n(C) is wrong because +93 kJ reverses the subtraction (bonds formed − bonds broken); breaking bonds requires energy, so the bonds-broken sum is entered as positive.\n(D) is wrong because +2,253 kJ counts only the energy absorbed in breaking the N≡N and H–H bonds and leaves out the energy released by forming the N–H bonds."
  },
  {
   "id": "ce2-36",
   "unit": 3,
   "stem": "A 5.0 L flask contains 0.20 mol of an ideal gas at a pressure of 1.0 atm. What is the temperature of the gas? (R = 0.0821 L·atm/(mol·K))",
   "choices": [
    "608 K",
    "304 K",
    "152 K",
    "25 K"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 304 K. Rearrange the ideal gas law PV = nRT to solve for temperature: T = PV/(nR). Substituting: T = (1.0 atm)(5.0 L)/((0.20 mol)(0.0821 L·atm/(mol·K))) = 5.0 L·atm/(0.01642 L·atm/K) = 304 K (about 3.0 × 10² K to two significant figures, roughly 31 °C). The units cancel to leave kelvins, confirming the setup.\n\n(A) is wrong because 608 K is twice the correct value, as if n were taken as 0.10 mol or the volume as 10 L.\n(C) is wrong because 152 K is half the correct value, as if n were taken as 0.40 mol or the volume as 2.5 L.\n(D) is wrong because 25 K is PV/n = (1.0)(5.0)/0.20, which leaves out the gas constant R in the denominator."
  },
  {
   "id": "ce2-37",
   "unit": 2,
   "stem": "Silicon dioxide, SiO₂, has a melting point of about 1700 °C, while carbon dioxide, CO₂, is a gas at room temperature. Which statement best explains this difference?",
   "choices": [
    "SiO₂ molecules have stronger London dispersion forces because silicon has more electrons than carbon.",
    "SiO₂ is an ionic compound, and CO₂ is a covalent compound.",
    "The Si–O bond is much more polar than the C–O bond, which makes SiO₂ molecules attract each other strongly.",
    "SiO₂ is a network covalent solid in which each atom is bonded to its neighbors, so melting requires breaking covalent bonds."
   ],
   "correct": 3,
   "explanation": "Correct: (D) SiO₂ is a network covalent solid in which each atom is bonded to its neighbors, so melting requires breaking covalent bonds. Melting point reflects which forces must be overcome. SiO₂ (quartz) is a network covalent solid: each Si is covalently bonded to four O atoms and each O to two Si atoms in a continuous three-dimensional network, with no separate molecules. Melting it requires breaking strong Si–O covalent bonds, hence about 1700 °C. CO₂ is made of discrete, linear, nonpolar molecules held to each other only by weak London dispersion forces, so it is a gas at room temperature.\n\n(A) is wrong because SiO₂ is not made of molecules, and melting it breaks covalent bonds; dispersion forces are far too weak to give a melting point near 1700 °C.\n(B) is wrong because SiO₂ is not ionic; Si and O are both nonmetals, and they are joined by polar covalent bonds in a network, not by an ionic lattice.\n(C) is wrong because SiO₂ does not exist as discrete molecules, so molecular attractions are not the explanation; its high melting point comes from breaking covalent bonds in the network."
  },
  {
   "id": "ce2-38",
   "unit": 3,
   "stem": "How many times faster does hydrogen gas (H₂, 2.0 g/mol) effuse than oxygen gas (O₂, 32 g/mol) at the same temperature?",
   "choices": [
    "16",
    "8",
    "4",
    "2"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 4. Graham's law says the rate of effusion is inversely proportional to the square root of molar mass, because at the same temperature all gases have the same average kinetic energy, ½mv², so lighter molecules move faster. rate(H₂)/rate(O₂) = √(M_O₂/M_H₂) = √(32 g/mol ÷ 2.0 g/mol) = √16 = 4. Hydrogen effuses 4 times faster than oxygen.\n\n(A) is wrong because 16 is the ratio of the molar masses, 32/2.0, without taking the square root required by Graham's law.\n(B) is wrong because 8 is half the mass ratio (16/2) rather than its square root; it matches no step of Graham's law.\n(D) is wrong because 2 takes the square root twice (√√16 = 2), the fourth root of the mass ratio instead of the square root."
  },
  {
   "id": "ce2-39",
   "unit": 3,
   "stem": "What is the molarity of a solution prepared by dissolving 10.0 g of NaOH (molar mass 40.0 g/mol) in enough water to make 250. mL of solution?",
   "choices": [
    "4.00 M",
    "2.50 M",
    "1.00 M",
    "0.25 M"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.00 M. Molarity is moles of solute per liter of solution. First convert grams to moles: n(NaOH) = 10.0 g ÷ 40.0 g/mol = 0.250 mol. Then convert the volume to liters: 250. mL = 0.250 L. Molarity = 0.250 mol ÷ 0.250 L = 1.00 M. The volume is the total volume of solution, not the volume of water added, which is why the solid is dissolved and then diluted to the mark.\n\n(A) is wrong because 4.00 M would require 1.00 mol (40.0 g) of NaOH in 250. mL, four times the 10.0 g actually dissolved.\n(B) is wrong because 2.50 M would require 0.625 mol of NaOH in 0.250 L; it does not follow from 0.250 mol in 0.250 L.\n(D) is wrong because 0.25 is the number of moles of NaOH (0.250 mol), not the molarity; it still must be divided by the 0.250 L volume."
  },
  {
   "id": "ce2-40",
   "unit": 8,
   "setId": "ce2-set4",
   "stem": "What is the pH at the equivalence point of this titration?",
   "choices": [
    "12.0",
    "8.72",
    "7.00",
    "1.00"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 7.00. At the equivalence point, moles of OH⁻ added equal the moles of H⁺ originally present: (0.0250 L)(0.100 M) = 2.50 × 10⁻³ mol, reached at 25.0 mL of 0.100 M NaOH, where the curve is vertical. HCl and NaOH are a strong acid and strong base, so the solution then contains only water, Na⁺, and Cl⁻. Na⁺ (from a strong base) and Cl⁻ (the conjugate base of a strong acid) do not hydrolyze, so [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M and pH = 7.00, the midpoint of the vertical rise on the graph.\n\n(A) is wrong because 12.0 is the pH after excess NaOH has been added (about 30 mL on the curve, 5 mL past equivalence), not at the equivalence point.\n(B) is wrong because 8.72 is the kind of equivalence-point pH seen when a weak acid is titrated with a strong base, where the conjugate base makes the solution basic; HCl is strong.\n(D) is wrong because 1.00 is the initial pH of 0.100 M HCl, before any base has been added."
  },
  {
   "id": "ce2-41",
   "unit": 8,
   "setId": "ce2-set4",
   "stem": "Which indicator changes color at a pH closest to the pH of the equivalence point?",
   "choices": [
    "Bromothymol blue",
    "Methyl red",
    "Phenolphthalein",
    "All three change color at exactly the equivalence point."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Bromothymol blue. An indicator works best when its color-change range contains the equivalence-point pH. For this strong acid–strong base titration the equivalence point is at pH 7.00. From the table, bromothymol blue changes over 6.0–7.6, which includes 7.00. Methyl red (4.4–6.2) changes just before the equivalence point and phenolphthalein (8.2–10.0) just after it. Because the curve rises so steeply near 25 mL (from about pH 4 to pH 10 within roughly 0.1 mL, about two drops), those two would still give only small errors, but bromothymol blue is closest.\n\n(B) is wrong because methyl red changes over 4.4–6.2, entirely below the equivalence-point pH of 7.00, so it changes slightly before equivalence.\n(C) is wrong because phenolphthalein changes over 8.2–10.0, entirely above pH 7.00, so it changes slightly after the equivalence point.\n(D) is wrong because the table shows three different ranges, 4.4–6.2, 6.0–7.6, and 8.2–10.0, so they cannot all change color at exactly the same pH."
  },
  {
   "id": "ce2-42",
   "unit": 1,
   "setId": "ce2-set5",
   "stem": "Identify the element whose atoms produced this spectrum.",
   "choices": [
    "Magnesium",
    "Neon",
    "Aluminum",
    "Sodium"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Sodium. Each peak in a photoelectron spectrum corresponds to a subshell, and its relative height gives the number of electrons in it. The peaks from highest to lowest binding energy are 104 (height 2), 6.84 (height 2), 3.67 (height 6), and 0.50 MJ/mol (height 1), which correspond to 1s², 2s², 2p⁶, and 3s¹. That adds up to 2 + 2 + 6 + 1 = 11 electrons. A neutral atom with 11 electrons has 11 protons, so the element is sodium, [Ne]3s¹, which fits the stem's statement that it is in the third period.\n\n(A) is wrong because magnesium, 1s²2s²2p⁶3s², would have a 3s peak of height 2, twice the height of the 3s peak shown.\n(B) is wrong because neon, 1s²2s²2p⁶, is in the second period and has no 3s electrons, so it would have no peak near 0.50 MJ/mol.\n(C) is wrong because aluminum, 1s²2s²2p⁶3s²3p¹, would have a 3s peak of height 2 plus a fifth peak for its 3p electron."
  },
  {
   "id": "ce2-43",
   "unit": 1,
   "setId": "ce2-set5",
   "stem": "How would the photoelectron spectrum of magnesium differ from this spectrum?",
   "choices": [
    "The 3s peak would have a height of 2, and every peak would appear at a higher binding energy.",
    "The 3s peak would have a height of 2, and every peak would appear at a lower binding energy.",
    "The 3s peak would be absent, and a new 3p peak would appear.",
    "The spectrum would be identical, because both elements are in the third period."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The 3s peak would have a height of 2, and every peak would appear at a higher binding energy. Magnesium (Z = 12) has the configuration 1s²2s²2p⁶3s², one more 3s electron than sodium, so its 3s peak has height 2 instead of 1, and the other peaks keep their heights of 2, 2, and 6. Magnesium also has one more proton. The greater nuclear charge pulls every electron, core and valence, more strongly toward the nucleus, so each peak moves to a higher binding energy. For example, the 1s peak moves from about 104 to about 126 MJ/mol, and the 3s peak from 0.50 to about 0.74 MJ/mol.\n\n(B) is wrong because the peaks shift to higher binding energy, not lower, because magnesium's extra proton holds each electron more tightly.\n(C) is wrong because magnesium has no 3p electrons; its configuration ends in 3s², so the 3s peak remains and grows rather than disappearing.\n(D) is wrong because being in the same period does not make spectra identical; magnesium has a different nuclear charge and a different number of 3s electrons."
  },
  {
   "id": "ce2-44",
   "unit": 8,
   "stem": "Which of the following species is amphiprotic?",
   "choices": [
    "CO₃²⁻",
    "H₂CO₃",
    "NO₃⁻",
    "HCO₃⁻"
   ],
   "correct": 3,
   "explanation": "Correct: (D) HCO₃⁻. An amphiprotic species can either donate or accept a proton, so it must contain an ionizable H and also be able to take on an H⁺. HCO₃⁻ does both: as an acid, HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺, and as a base, HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻. This is why bicarbonate helps buffer blood. Intermediate species of polyprotic acids, such as HCO₃⁻, H₂PO₄⁻, and HPO₄²⁻, are typically amphiprotic.\n\n(A) is wrong because CO₃²⁻ has no hydrogen to donate, so it can only act as a base by accepting a proton to form HCO₃⁻.\n(B) is wrong because H₂CO₃ is fully protonated in the carbonic acid series, so in water it acts only as an acid, donating protons to form HCO₃⁻.\n(C) is wrong because NO₃⁻ has no hydrogen to donate and is the conjugate base of the strong acid HNO₃, so it has essentially no tendency to accept a proton either."
  },
  {
   "id": "ce2-45",
   "unit": 3,
   "stem": "Which of the following aqueous solutions has the greatest electrical conductivity?",
   "choices": [
    "0.10 M CaCl₂",
    "0.10 M C₆H₁₂O₆ (glucose)",
    "0.10 M CH₃COOH",
    "0.10 M C₂H₅OH"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 0.10 M CaCl₂. Electrical conductivity depends on the concentration of mobile ions. CaCl₂ is a soluble ionic compound and a strong electrolyte: CaCl₂ → Ca²⁺ + 2 Cl⁻, so 0.10 M CaCl₂ gives 0.30 M of ions, including a doubly charged Ca²⁺ ion. Glucose and ethanol are molecular nonelectrolytes that dissolve without forming ions, and acetic acid is a weak acid that ionizes only about 1% at 0.10 M, so it gives very few ions.\n\n(B) is wrong because glucose dissolves as intact molecules and forms no ions, so its solution barely conducts.\n(C) is wrong because acetic acid is a weak electrolyte; at 0.10 M only about 1.3 × 10⁻³ M each of H⁺ and CH₃COO⁻ forms, far fewer ions than CaCl₂ provides.\n(D) is wrong because ethanol is a molecular nonelectrolyte; its O–H group does not ionize appreciably in water, so the solution has almost no ions."
  },
  {
   "id": "ce2-46",
   "unit": 1,
   "stem": "Which of the following correctly compares the first ionization energies of beryllium and boron?",
   "choices": [
    "Boron is higher, because it has more protons than beryllium has.",
    "Boron is higher, because its atoms are smaller than beryllium atoms are.",
    "Beryllium is higher, because its outer electron is in a lower-energy 2s subshell.",
    "The two are equal, because both elements are in the same period."
   ],
   "correct": 2,
   "explanation": "Correct: (C) Beryllium is higher, because its outer electron is in a lower-energy 2s subshell. Ionization energy usually increases across a period, but boron (801 kJ/mol) is lower than beryllium (899 kJ/mol). Beryllium's highest-energy electron is in the 2s subshell (1s²2s²), whereas boron's is in the 2p subshell (1s²2s²2p¹). A 2p electron is higher in energy, is on average farther from the nucleus, and is partly shielded by the 2s electrons, so it is easier to remove despite boron's extra proton. This exception is evidence for the existence of subshells.\n\n(A) is wrong because boron does have one more proton, but its first ionization energy is lower, because its electron is removed from a higher-energy 2p subshell.\n(B) is wrong because boron's ionization energy is not higher; the slight decrease in atomic size is outweighed by removing a higher-energy, partly shielded 2p electron.\n(D) is wrong because elements in the same period do not have equal ionization energies; values differ across a period, and here Be (899 kJ/mol) is higher than B (801 kJ/mol)."
  },
  {
   "id": "ce2-47",
   "unit": 4,
   "stem": "A mixture contains 14 g of N₂ (molar mass 28.0 g/mol) and 4.0 g of H₂ (molar mass 2.0 g/mol). What is the maximum mass of NH₃ (17.0 g/mol) that can be produced by N₂ + 3 H₂ → 2 NH₃?",
   "choices": [
    "8.5 g",
    "17 g",
    "34 g",
    "51 g"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 17 g. Find the limiting reactant by comparing moles with the 1 : 3 ratio. n(N₂) = 14 g ÷ 28.0 g/mol = 0.50 mol; n(H₂) = 4.0 g ÷ 2.0 g/mol = 2.0 mol. To react 0.50 mol N₂ needs 3(0.50) = 1.5 mol H₂, and 2.0 mol is available, so H₂ is in excess and N₂ is limiting. Moles of NH₃ = 2 × 0.50 = 1.0 mol, so the mass of NH₃ = 1.0 mol × 17.0 g/mol = 17 g. 0.5 mol of H₂ (1.0 g) remains unreacted.\n\n(A) is wrong because 8.5 g is 0.50 mol of NH₃, which leaves out the 2 : 1 ratio of NH₃ to N₂ in the balanced equation.\n(C) is wrong because 34 g is 2.0 mol of NH₃, obtained by treating H₂ as converting 1 : 1 into NH₃; H₂ is in excess and would give 1.33 mol NH₃ even if it were limiting.\n(D) is wrong because 51 g is 3.0 mol of NH₃, from inverting the ratio for H₂ (2.0 × 3/2); the correct ratio is 2 mol NH₃ per 3 mol H₂, and N₂ is limiting anyway."
  },
  {
   "id": "ce2-48",
   "unit": 6,
   "stem": "When 5.0 g of a salt is dissolved in 100.0 g of water, the temperature of the solution falls from 22.0 °C to 19.0 °C. Assuming the solution has the specific heat of water, 4.18 J/(g·°C), and a mass of 100.0 g, how much thermal energy did the solution lose?",
   "choices": [
    "1.25 × 10⁴ J",
    "4.18 × 10³ J",
    "1.25 × 10³ J",
    "4.18 × 10² J"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.25 × 10³ J. The energy lost by the solution is q = mcΔT. Using the stated mass of 100.0 g and c = 4.18 J/(g·°C), with ΔT = 22.0 − 19.0 = 3.0 °C: q = (100.0 g)(4.18 J/(g·°C))(3.0 °C) = 1254 J ≈ 1.25 × 10³ J. That energy went into dissolving the salt, so the dissolution process absorbed 1.25 × 10³ J and is endothermic (ΔH_soln > 0).\n\n(A) is wrong because 1.25 × 10⁴ J is ten times too large, a power-of-ten slip in writing 1254 J in scientific notation.\n(B) is wrong because 4.18 × 10³ J would require a 10 °C temperature change (or a 1000 g mass); the measured change is only 3.0 °C, giving 1.25 × 10³ J.\n(D) is wrong because 4.18 × 10² J is just mc = (100.0)(4.18), the energy for a 1 °C change, without multiplying by ΔT = 3.0 °C."
  },
  {
   "id": "ce2-49",
   "unit": 5,
   "setId": "ce2-set6",
   "stem": "What is the half-life of the reaction?",
   "choices": [
    "60 s",
    "40 s",
    "20 s",
    "10 s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 20 s. The half-life is the time for the concentration of a reactant to fall to half its value. The graph shows [A] falling from 0.80 M at t = 0 to 0.40 M at 20 s, from 0.40 M to 0.20 M between 20 and 40 s, and from 0.20 M to 0.10 M between 40 and 60 s. Each halving takes 20 s, so t½ = 20 s.\n\n(A) is wrong because 60 s is three half-lives, the time for [A] to fall from 0.80 M to 0.10 M (one-eighth), not to half.\n(B) is wrong because 40 s is two half-lives, the time for [A] to fall from 0.80 M to 0.20 M (one-quarter), not to half.\n(D) is wrong because 10 s is too short; at 10 s the graph shows [A] ≈ 0.57 M, well above half of 0.80 M."
  },
  {
   "id": "ce2-50",
   "unit": 5,
   "setId": "ce2-set6",
   "stem": "What is the order of the reaction with respect to A?",
   "choices": [
    "Zero order, because the concentration decreases continuously.",
    "Second order, because the rate decreases as the concentration decreases.",
    "It cannot be determined without data for a second reactant.",
    "First order, because the half-life is constant."
   ],
   "correct": 3,
   "explanation": "Correct: (D) First order, because the half-life is constant. The graph shows constant half-lives: 0.80 → 0.40 → 0.20 → 0.10 M, each in 20 s, even though the starting concentration of each interval is different. For a first-order reaction t½ = ln 2/k, which does not depend on concentration, so a constant half-life identifies first-order kinetics. A zero-order reaction would show a straight-line decrease and shrinking half-lives, and a second-order reaction would show half-lives that double each time.\n\n(A) is wrong because a zero-order reaction would decrease linearly (constant rate), but the curve flattens as [A] falls, and every reaction's reactant concentration decreases continuously.\n(B) is wrong because the rate decreasing with concentration is true of both first- and second-order reactions; second order would give half-lives that double (20 s, then 40 s), not constant ones.\n(C) is wrong because the reaction A → products has only one reactant, and the graph of [A] versus time is enough to determine the order from its half-lives."
  },
  {
   "id": "ce2-51",
   "unit": 5,
   "setId": "ce2-set6",
   "stem": "What is the rate constant for the reaction?",
   "choices": [
    "28.8 s⁻¹",
    "1.39 s⁻¹",
    "0.347 s⁻¹",
    "0.0347 s⁻¹"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 0.0347 s⁻¹. Having found that the reaction is first order with t½ = 20 s, use t½ = ln 2/k and rearrange: k = ln 2/t½ = 0.693/20 s = 0.0347 s⁻¹. The unit s⁻¹ is correct for a first-order rate constant. As a check, ln([A]₀/[A]) = kt gives ln(0.80/0.40) = (0.0347 s⁻¹)(20 s) = 0.693.\n\n(A) is wrong because 28.8 s⁻¹ is t½/ln 2 = 20/0.693, the inverted ratio; that quantity has units of seconds (it is the mean lifetime), not s⁻¹.\n(B) is wrong because 1.39 s⁻¹ is 40 times too large; it would correspond to a half-life of 0.693/1.39 = 0.50 s, not the 20 s shown.\n(C) is wrong because 0.347 s⁻¹ is ten times too large, a decimal slip; it would give a half-life of 2.0 s instead of 20 s."
  },
  {
   "id": "ce2-52",
   "unit": 2,
   "stem": "Which of the following molecules is polar?",
   "choices": [
    "CH₃Cl",
    "CCl₄",
    "CO₂",
    "BF₃"
   ],
   "correct": 0,
   "explanation": "Correct: (A) CH₃Cl. A molecule is polar when its bond dipoles do not cancel. In CH₃Cl (tetrahedral), carbon is bonded to three H atoms and one Cl. The C–Cl bond is far more polar than the C–H bonds (electronegativities: Cl 3.2, C 2.6, H 2.2), so the dipoles do not cancel and the molecule has a net dipole pointing toward Cl. In CCl₄, CO₂, and BF₃ the identical bonds are arranged symmetrically, so their bond dipoles cancel.\n\n(B) is wrong because CCl₄ has four identical polar C–Cl bonds arranged tetrahedrally, so the bond dipoles cancel and the molecule is nonpolar.\n(C) is wrong because CO₂ is linear (O=C=O), so its two equal C=O bond dipoles point in opposite directions and cancel.\n(D) is wrong because BF₃ is trigonal planar with three identical B–F bonds 120° apart, so the bond dipoles cancel and the molecule is nonpolar."
  },
  {
   "id": "ce2-53",
   "unit": 6,
   "stem": "The standard enthalpies of formation are ΔHf°[Al₂O₃(s)] = −1675.7 kJ/mol and ΔHf°[Fe₂O₃(s)] = −824.2 kJ/mol. What is ΔH° for 2 Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2 Fe(s)?",
   "choices": [
    "+2,500 kJ",
    "+851.5 kJ",
    "−851.5 kJ",
    "−2,500 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) −851.5 kJ. Use ΔH° = ΣnΔH_f°(products) − ΣnΔH_f°(reactants). Elements in their standard states (Al(s) and Fe(s)) have ΔH_f° = 0. Products: Al₂O₃ = −1675.7 kJ and 2 Fe = 0. Reactants: 2 Al = 0 and Fe₂O₃ = −824.2 kJ. ΔH° = (−1675.7) − (−824.2) = −851.5 kJ. This strongly exothermic thermite reaction releases enough heat to melt the iron produced.\n\n(A) is wrong because +2,500 kJ adds the two formation enthalpies and reverses the sign, −(−1675.7 − 824.2); reactant values must be subtracted, not added.\n(B) is wrong because +851.5 kJ reverses the subtraction (reactants − products); the products have the more negative ΔH_f°, so the reaction is exothermic.\n(D) is wrong because −2,500 kJ adds the formation enthalpies (−1675.7 + −824.2) instead of subtracting the reactant value from the product value."
  },
  {
   "id": "ce2-54",
   "unit": 2,
   "stem": "Which of the following species has a trigonal planar molecular geometry?",
   "choices": [
    "BF₃",
    "NF₃",
    "PCl₃",
    "NH₃"
   ],
   "correct": 0,
   "explanation": "Correct: (A) BF₃. Molecular geometry follows from VSEPR: count the electron domains on the central atom and note which are lone pairs. Boron in BF₃ has three valence electrons, forms three B–F single bonds, and has no lone pair. Three bonding domains spread 120° apart in one plane, giving a trigonal planar geometry. In NF₃, PCl₃, and NH₃, the central atom (group 15) has three bonds plus one lone pair, four domains in all, so the molecules are trigonal pyramidal.\n\n(B) is wrong because NF₃ has three bonding domains and a lone pair on N, so its electron geometry is tetrahedral and its molecular geometry is trigonal pyramidal.\n(C) is wrong because PCl₃ has three bonding domains and a lone pair on P, so its molecular geometry is trigonal pyramidal, not planar.\n(D) is wrong because NH₃ has three N–H bonds and a lone pair on N, so it is trigonal pyramidal with bond angles of about 107°."
  },
  {
   "id": "ce2-55",
   "unit": 3,
   "stem": "In the reaction 2 KClO₃(s) → 2 KCl(s) + 3 O₂(g), what volume of O₂ at STP is produced from the decomposition of 0.20 mol of KClO₃? (1 mol of gas occupies 22.4 L at STP.)",
   "choices": [
    "4.5 L",
    "6.7 L",
    "10 L",
    "15 L"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 6.7 L. Use the mole ratio from the balanced equation, then convert moles of gas to volume. 2 KClO₃ → 3 O₂, so n(O₂) = 0.20 mol KClO₃ × (3 mol O₂/2 mol KClO₃) = 0.30 mol O₂. At STP, V = n × 22.4 L/mol = (0.30 mol)(22.4 L/mol) = 6.72 L ≈ 6.7 L.\n\n(A) is wrong because 4.5 L is (0.20 mol)(22.4 L/mol) = 4.48 L, which treats the ratio as 1 : 1 and ignores the 3 : 2 ratio of O₂ to KClO₃.\n(C) is wrong because 10 L would require 0.45 mol O₂, which is 0.20 × (3/2)²: it applies the 3/2 ratio twice.\n(D) is wrong because 15 L would require 0.67 mol O₂, more than three times the KClO₃; it comes from dividing 0.20 × 22.4 by 0.30 instead of multiplying by the mole ratio."
  },
  {
   "id": "ce2-56",
   "unit": 1,
   "stem": "A compound is found to contain 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is the empirical formula of the compound?",
   "choices": [
    "C₂H₄O",
    "CHO",
    "CH₂O",
    "C₂H₂O₂"
   ],
   "correct": 2,
   "explanation": "Correct: (C) CH₂O. Assume a 100 g sample so the percentages become grams, then convert to moles: C = 40.0 g ÷ 12.0 g/mol = 3.33 mol; H = 6.7 g ÷ 1.0 g/mol = 6.7 mol; O = 53.3 g ÷ 16.0 g/mol = 3.33 mol. Divide each by the smallest (3.33): C = 1.00, H = 2.0, O = 1.00. The whole-number ratio C : H : O = 1 : 2 : 1 gives the empirical formula CH₂O, which is shared by formaldehyde, acetic acid (C₂H₄O₂), and glucose (C₆H₁₂O₆).\n\n(A) is wrong because C₂H₄O has a 2 : 4 : 1 ratio, which would be 54.5% C and 36.3% O, not 40.0% C and 53.3% O.\n(B) is wrong because CHO has a 1 : 1 : 1 ratio, but the hydrogen moles (6.7) are twice the carbon moles (3.33), so the ratio of H to C is 2.\n(D) is wrong because C₂H₂O₂ has only one H per C, while the data give two H per C, and it is not an empirical formula, since it reduces to CHO."
  },
  {
   "id": "ce2-57",
   "unit": 6,
   "stem": "Given: C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ; and CO(g) + ½ O₂(g) → CO₂(g), ΔH = −283.0 kJ. What is ΔH for C(s) + ½ O₂(g) → CO(g)?",
   "choices": [
    "−676.5 kJ",
    "−110.5 kJ",
    "+110.5 kJ",
    "+676.5 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) −110.5 kJ. Hess's law: arrange the given equations so they add to the target. Keep the first as written: C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ. Reverse the second to put CO on the product side, changing the sign of ΔH: CO₂(g) → CO(g) + ½ O₂(g), ΔH = +283.0 kJ. Adding them cancels CO₂ and leaves C(s) + ½ O₂(g) → CO(g), with ΔH = −393.5 + 283.0 = −110.5 kJ.\n\n(A) is wrong because −676.5 kJ adds the two ΔH values without reversing the second equation, which would put CO on the reactant side, not the product side.\n(C) is wrong because +110.5 kJ is ΔH for the reverse reaction, CO → C + ½ O₂, which comes from reversing the first equation instead of the second.\n(D) is wrong because +676.5 kJ reverses both equations and adds their magnitudes, which gives neither the right equation nor the right sign."
  },
  {
   "id": "ce2-58",
   "unit": 8,
   "stem": "An aqueous solution of NH₄Cl is acidic. Which statement best explains why?",
   "choices": [
    "The Cl⁻ ion is the conjugate base of a weak acid and accepts a proton from water.",
    "The NH₄⁺ ion is the conjugate acid of a weak base and donates a proton to water.",
    "NH₄Cl is a strong acid.",
    "The NH₄⁺ ion reacts with water to produce OH⁻."
   ],
   "correct": 1,
   "explanation": "Correct: (B) The NH₄⁺ ion is the conjugate acid of a weak base and donates a proton to water. NH₄Cl is a soluble salt that dissociates into NH₄⁺ and Cl⁻. NH₄⁺ is the conjugate acid of the weak base NH₃, so it is a weak acid that transfers a proton to water: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ (K_a = K_w/K_b = 5.6 × 10⁻¹⁰). This produces H₃O⁺ and makes the solution acidic. Cl⁻ is the conjugate base of the strong acid HCl, so it is too weak a base to affect the pH.\n\n(A) is wrong because Cl⁻ is the conjugate base of the strong acid HCl, not of a weak acid, so it does not accept protons from water; and accepting a proton would make the solution basic, not acidic.\n(C) is wrong because NH₄Cl is a salt, not a strong acid; its acidity comes from the weak acid NH₄⁺, which ionizes only slightly.\n(D) is wrong because NH₄⁺ donates a proton to water and produces H₃O⁺; producing OH⁻ would make the solution basic, the opposite of what is observed."
  },
  {
   "id": "ce2-59",
   "unit": 2,
   "stem": "In the nitrate ion, NO₃⁻, one Lewis structure has nitrogen bonded to one oxygen by a double bond and to two other oxygens by single bonds, with every atom satisfying the octet rule. What is the formal charge on the nitrogen atom in this structure?",
   "choices": [
    "+2",
    "+1",
    "0",
    "−1"
   ],
   "correct": 1,
   "explanation": "Correct: (B) +1. Formal charge = (valence electrons) − (nonbonding electrons) − ½(bonding electrons). In this structure nitrogen forms one double bond and two single bonds, four bonds in all (8 bonding electrons), and has no lone pairs. Nitrogen has 5 valence electrons, so FC(N) = 5 − 0 − ½(8) = +1. Check: the double-bonded O has FC = 6 − 4 − 2 = 0 and each single-bonded O has FC = 6 − 6 − 1 = −1, so the total is +1 + 0 − 1 − 1 = −1, matching the charge of NO₃⁻.\n\n(A) is wrong because +2 would require nitrogen to have only 3 bonding pairs and no lone pair (5 − 0 − 3), but it forms four bonds.\n(C) is wrong because 0 is the formal charge of nitrogen only when it has three bonds and one lone pair, as in NH₃; here it has four bonds and no lone pair.\n(D) is wrong because −1 is the overall charge of the nitrate ion, which is the sum of all the formal charges, not the formal charge on nitrogen."
  },
  {
   "id": "ce2-60",
   "unit": 7,
   "stem": "The solubility of AgCl in 0.10 M NaCl solution is compared with its solubility in pure water. Which statement is correct?",
   "choices": [
    "AgCl is more soluble in the NaCl solution because NaCl increases the ionic strength.",
    "AgCl has the same solubility in both, because K_sp is a constant.",
    "AgCl is more soluble in the NaCl solution because Na⁺ reacts with Ag⁺.",
    "AgCl is less soluble in the NaCl solution because of the common ion Cl⁻."
   ],
   "correct": 3,
   "explanation": "Correct: (D) AgCl is less soluble in the NaCl solution because of the common ion Cl⁻. AgCl dissolves according to AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), with K_sp = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰. In pure water the solubility is √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ M. In 0.10 M NaCl, [Cl⁻] is already 0.10 M, a common ion, so by Le Châtelier's principle the equilibrium shifts toward the solid: s = K_sp/0.10 = 1.8 × 10⁻⁹ M, about 7000 times lower. K_sp is unchanged; only the equilibrium concentrations change.\n\n(A) is wrong because the ionic-strength (salt) effect is tiny compared with the common-ion effect; the Cl⁻ from NaCl lowers the solubility of AgCl about 7000-fold.\n(B) is wrong because a constant K_sp does not mean a constant solubility; when [Cl⁻] is already 0.10 M, [Ag⁺] must be much smaller to keep [Ag⁺][Cl⁻] = K_sp.\n(C) is wrong because Na⁺ does not react with Ag⁺; both are cations, and Na⁺ is a spectator ion, while the Cl⁻ from NaCl lowers the solubility."
  }
 ],
 "sets": {
  "ce2-set1": {
   "text": "A sample of N₂O₄(g) is placed in a rigid container and allowed to react according to N₂O₄(g) ⇌ 2 NO₂(g). The concentrations of both gases are measured over time and are shown in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"213.6\" x2=\"400\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"165.2\" x2=\"400\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"116.8\" x2=\"400\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"68.4\" x2=\"400\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"120\" y1=\"262\" x2=\"120\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"120\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"176\" y1=\"262\" x2=\"176\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"176\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"232\" y1=\"262\" x2=\"232\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"232\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"288\" y1=\"262\" x2=\"288\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"288\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"344\" y1=\"262\" x2=\"344\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"344\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"400\" y1=\"262\" x2=\"400\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time (s)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Concentration (M)</text><path d=\"M64 68.4L66.8 74.3L69.6 79.91L72.4 85.25L75.2 90.33L78 95.17L80.8 99.76L83.6 104.13L86.4 108.29L89.2 112.25L92 116.01L94.8 119.59L97.6 122.99L100.4 126.23L103.2 129.31L106 132.24L108.8 135.03L111.6 137.68L114.4 140.21L117.2 142.6L120 144.89L122.8 147.06L125.6 149.12L128.4 151.09L131.2 152.96L134 154.73L136.8 156.42L139.6 158.03L142.4 159.56L145.2 161.02L148 162.4L150.8 163.72L153.6 164.97L156.4 166.16L159.2 167.3L162 168.37L164.8 169.4L167.6 170.37L170.4 171.3L173.2 172.18L176 173.02L178.8 173.82L181.6 174.58L184.4 175.31L187.2 175.99L190 176.65L192.8 177.27L195.6 177.86L198.4 178.42L201.2 178.96L204 179.47L206.8 179.95L209.6 180.41L212.4 180.85L215.2 181.27L218 181.66L220.8 182.04L223.6 182.4L226.4 182.74L229.2 183.07L232 183.38L234.8 183.67L237.6 183.95L240.4 184.21L243.2 184.47L246 184.71L248.8 184.94L251.6 185.15L254.4 185.36L257.2 185.56L260 185.75L262.8 185.92L265.6 186.09L268.4 186.26L271.2 186.41L274 186.55L276.8 186.69L279.6 186.83L282.4 186.95L285.2 187.07L288 187.18L290.8 187.29L293.6 187.39L296.4 187.49L299.2 187.59L302 187.67L304.8 187.76L307.6 187.84L310.4 187.91L313.2 187.99L316 188.06L318.8 188.12L321.6 188.18L324.4 188.24L327.2 188.3L330 188.35L332.8 188.4L335.6 188.45L338.4 188.5L341.2 188.54L344 188.58L346.8 188.62L349.6 188.66L352.4 188.7L355.2 188.73L358 188.77L360.8 188.8L363.6 188.83L366.4 188.85L369.2 188.88L372 188.91L374.8 188.93L377.6 188.95L380.4 188.97L383.2 189L386 189.01L388.8 189.03L391.6 189.05L394.4 189.07L397.2 189.08L400 189.1\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M64 262L66.8 250.2L69.6 238.97L72.4 228.29L75.2 218.13L78 208.47L80.8 199.28L83.6 190.53L86.4 182.22L89.2 174.31L92 166.78L94.8 159.62L97.6 152.81L100.4 146.34L103.2 140.17L106 134.31L108.8 128.74L111.6 123.43L114.4 118.39L117.2 113.59L120 109.03L122.8 104.68L125.6 100.55L128.4 96.63L131.2 92.89L134 89.33L136.8 85.95L139.6 82.74L142.4 79.68L145.2 76.77L148 74L150.8 71.36L153.6 68.86L156.4 66.48L159.2 64.21L162 62.05L164.8 60L167.6 58.05L170.4 56.2L173.2 54.43L176 52.75L178.8 51.15L181.6 49.63L184.4 48.19L187.2 46.81L190 45.51L192.8 44.26L195.6 43.08L198.4 41.95L201.2 40.88L204 39.86L206.8 38.9L209.6 37.97L212.4 37.1L215.2 36.26L218 35.47L220.8 34.72L223.6 34L226.4 33.32L229.2 32.67L232 32.05L234.8 31.46L237.6 30.9L240.4 30.37L243.2 29.86L246 29.38L248.8 28.93L251.6 28.49L254.4 28.08L257.2 27.68L260 27.31L262.8 26.95L265.6 26.61L268.4 26.29L271.2 25.98L274 25.69L276.8 25.41L279.6 25.15L282.4 24.9L285.2 24.66L288 24.43L290.8 24.22L293.6 24.01L296.4 23.81L299.2 23.63L302 23.45L304.8 23.28L307.6 23.12L310.4 22.97L313.2 22.83L316 22.69L318.8 22.56L321.6 22.43L324.4 22.31L327.2 22.2L330 22.09L332.8 21.99L335.6 21.89L338.4 21.8L341.2 21.71L344 21.63L346.8 21.55L349.6 21.48L352.4 21.4L355.2 21.34L358 21.27L360.8 21.21L363.6 21.15L366.4 21.09L369.2 21.04L372 20.99L374.8 20.94L377.6 20.89L380.4 20.85L383.2 20.81L386 20.77L388.8 20.73L391.6 20.7L394.4 20.66L397.2 20.63L400 20.6\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">[N₂O₄]</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">[NO₂]</text></svg>",
     "alt": "A graph of concentration in molar against time in seconds. The N2O4 concentration falls from 0.80 toward 0.30. The NO2 concentration rises from 0 toward 1.0. Both curves level off after about 100 seconds."
    }
   ]
  },
  "ce2-set2": {
   "text": "A galvanic cell is constructed using an iron electrode in 1.0 M Fe²⁺ and a silver electrode in 1.0 M Ag⁺, connected by a salt bridge, as shown. Standard reduction potentials: Ag⁺ + e⁻ → Ag, E° = +0.80 V; Fe²⁺ + 2e⁻ → Fe, E° = −0.44 V.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"60\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"61\" y=\"165\" width=\"128\" height=\"84\" fill=\"#DCEBF3\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"330\" y=\"140\" width=\"130\" height=\"110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"331\" y=\"165\" width=\"128\" height=\"84\" fill=\"#E8F1DF\" stroke=\"none\" stroke-width=\"1.6\"/><rect x=\"105\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"375\" y=\"90\" width=\"22\" height=\"140\" fill=\"#C9C5BA\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"140\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Fe</text><text x=\"410\" y=\"104\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Ag</text><text x=\"125\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Fe²⁺</text><text x=\"395\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.0 M Ag⁺</text><path d=\"M116 90L116 50L225 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M386 90L386 50L295 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"50\" r=\"22\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">V</text><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#D8D2C0\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M170 160 L170 128 L350 128 L350 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"260\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">salt bridge</text><line x1=\"135\" y1=\"34\" x2=\"205\" y2=\"34\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"205,34 196.82,37.65 196.82,30.35\" fill=\"#2E332E\"/><text x=\"170\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">e⁻</text></svg>",
     "alt": "A galvanic cell with an iron electrode in iron ion solution on the left and a silver electrode in silver ion solution on the right, connected by a wire with a voltmeter and a salt bridge. Electrons flow through the wire from the iron toward the silver."
    }
   ]
  },
  "ce2-set3": {
   "text": "The graph shows the solubility of two salts, KNO₃ and NaCl, in water at different temperatures.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"400\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"244\" x2=\"400\" y2=\"244\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"248\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"216\" x2=\"400\" y2=\"216\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"220\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"188\" x2=\"400\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"160\" x2=\"400\" y2=\"160\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"164\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"132\" x2=\"400\" y2=\"132\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"136\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"104\" x2=\"400\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"76\" x2=\"400\" y2=\"76\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"80\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">140</text><line x1=\"64\" y1=\"48\" x2=\"400\" y2=\"48\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"52\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">160</text><line x1=\"64\" y1=\"20\" x2=\"400\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">180</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"131.2\" y1=\"272\" x2=\"131.2\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"131.2\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"198.4\" y1=\"272\" x2=\"198.4\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"198.4\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"265.6\" y1=\"272\" x2=\"265.6\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"265.6\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"332.8\" y1=\"272\" x2=\"332.8\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"332.8\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"400\" y1=\"272\" x2=\"400\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"400\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"272\" x2=\"400\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"232\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Temperature (°C)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Solubility (g per 100 g H₂O)</text><path d=\"M64 253.8L131.2 227.2L198.4 182.4L265.6 118L332.8 35.4\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"253.8\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"131.2\" cy=\"227.2\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"198.4\" cy=\"182.4\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"265.6\" cy=\"118\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"332.8\" cy=\"35.4\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><path d=\"M64 222.02L131.2 221.6L198.4 220.76L265.6 219.78L332.8 218.8\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"222.02\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"131.2\" cy=\"221.6\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"198.4\" cy=\"220.76\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"265.6\" cy=\"219.78\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><circle cx=\"332.8\" cy=\"218.8\" r=\"3.8\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.8\"/><line x1=\"412\" y1=\"30\" x2=\"434\" y2=\"30\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"34\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">KNO₃</text><line x1=\"412\" y1=\"50\" x2=\"434\" y2=\"50\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"440\" y=\"54\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">NaCl</text></svg>",
     "alt": "A graph of solubility in grams per 100 grams of water against temperature. The KNO3 curve rises steeply from 13 at 0 degrees Celsius to 32, 64, 110, and 169 at 80 degrees. The NaCl curve is nearly flat near 36 to 38."
    }
   ]
  },
  "ce2-set4": {
   "text": "A 25.0 mL sample of 0.100 M HCl is titrated with 0.100 M NaOH. The titration curve is shown. The table gives the pH ranges over which several indicators change color.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"236\" x2=\"496\" y2=\"236\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"240\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"200\" x2=\"496\" y2=\"200\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"164\" x2=\"496\" y2=\"164\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"168\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"128\" x2=\"496\" y2=\"128\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"92\" x2=\"496\" y2=\"92\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"60\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">14</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"150.4\" y1=\"272\" x2=\"150.4\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150.4\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"236.8\" y1=\"272\" x2=\"236.8\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"236.8\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"323.2\" y1=\"272\" x2=\"323.2\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"323.2\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"409.6\" y1=\"272\" x2=\"409.6\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"409.6\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume of base added (mL)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">pH</text><path d=\"M64 254L66.7 253.8L69.4 253.61L72.1 253.41L74.8 253.22L77.5 253.02L80.2 252.83L82.9 252.63L85.6 252.43L88.3 252.23L91 252.04L93.7 251.84L96.4 251.64L99.1 251.44L101.8 251.24L104.5 251.03L107.2 250.83L109.9 250.63L112.6 250.42L115.3 250.21L118 250.01L120.7 249.8L123.4 249.59L126.1 249.37L128.8 249.16L131.5 248.95L134.2 248.73L136.9 248.51L139.6 248.29L142.3 248.06L145 247.84L147.7 247.61L150.4 247.38L153.1 247.14L155.8 246.91L158.5 246.67L161.2 246.42L163.9 246.18L166.6 245.92L169.3 245.67L172 245.41L174.7 245.15L177.4 244.88L180.1 244.61L182.8 244.33L185.5 244.05L188.2 243.76L190.9 243.46L193.6 243.16L196.3 242.85L199 242.54L201.7 242.21L204.4 241.88L207.1 241.54L209.8 241.18L212.5 240.82L215.2 240.44L217.9 240.05L220.6 239.65L223.3 239.23L226 238.79L228.7 238.33L231.4 237.85L234.1 237.35L236.8 236.82L239.5 236.27L242.2 235.67L244.9 235.04L247.6 234.36L250.3 233.63L253 232.83L255.7 231.95L258.4 230.98L261.1 229.89L263.8 228.63L266.5 227.16L269.2 225.36L271.9 223.06L274.6 219.84L277.3 214.37L280 146L282.7 77.72L285.4 72.35L288.1 69.23L290.8 67.03L293.5 65.33L296.2 63.96L298.9 62.8L301.6 61.8L304.3 60.93L307 60.15L309.7 59.45L312.4 58.81L315.1 58.23L317.8 57.7L320.5 57.21L323.2 56.75L325.9 56.32L328.6 55.91L331.3 55.53L334 55.18L336.7 54.84L339.4 54.52L342.1 54.21L344.8 53.92L347.5 53.65L350.2 53.38L352.9 53.13L355.6 52.89L358.3 52.65L361 52.43L363.7 52.21L366.4 52.01L369.1 51.81L371.8 51.61L374.5 51.43L377.2 51.25L379.9 51.07L382.6 50.9L385.3 50.74L388 50.58L390.7 50.43L393.4 50.28L396.1 50.13L398.8 49.99L401.5 49.85L404.2 49.72L406.9 49.59L409.6 49.46L412.3 49.34L415 49.22L417.7 49.1L420.4 48.99L423.1 48.87L425.8 48.76L428.5 48.66L431.2 48.55L433.9 48.45L436.6 48.35L439.3 48.25L442 48.16L444.7 48.06L447.4 47.97L450.1 47.88L452.8 47.79L455.5 47.71L458.2 47.62L460.9 47.54L463.6 47.46L466.3 47.38L469 47.3L471.7 47.22L474.4 47.15L477.1 47.07L479.8 47L482.5 46.93L485.2 46.86L487.9 46.79L490.6 46.72L493.3 46.65L496 46.59\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A titration curve of pH against volume of NaOH added. The pH starts at 1, rises slowly, rises almost vertically near 25 milliliters from about pH 3 to pH 11, and levels off near pH 12.5."
    },
    {
     "table": {
      "headers": [
       "Indicator",
       "pH range of color change"
      ],
      "rows": [
       [
        "Methyl red",
        "4.4 – 6.2"
       ],
       [
        "Bromothymol blue",
        "6.0 – 7.6"
       ],
       [
        "Phenolphthalein",
        "8.2 – 10.0"
       ]
      ]
     }
    }
   ]
  },
  "ce2-set5": {
   "text": "The photoelectron spectrum of a neutral atom of an element in the third period is shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 280\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"226\" x2=\"496\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"24\" x2=\"56\" y2=\"226\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"488.09\" y1=\"226\" x2=\"488.09\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"488.09\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.1</text><line x1=\"438.49\" y1=\"226\" x2=\"438.49\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"438.49\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"297.05\" y1=\"226\" x2=\"297.05\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"297.05\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"113.1\" y1=\"226\" x2=\"113.1\" y2=\"231\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"113.1\" y=\"245\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><text x=\"276\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Binding energy (MJ/mol)</text><text x=\"16\" y=\"125\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 125)\">Relative number of electrons</text><line x1=\"109.87\" y1=\"226\" x2=\"109.87\" y2=\"172.13\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"109.87\" y=\"165.13\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">1s</text><line x1=\"325.15\" y1=\"226\" x2=\"325.15\" y2=\"172.13\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"325.15\" y=\"165.13\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2s</text><line x1=\"368.13\" y1=\"226\" x2=\"368.13\" y2=\"64.4\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"368.13\" y=\"57.4\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2p</text><line x1=\"462.36\" y1=\"226\" x2=\"462.36\" y2=\"199.07\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"462.36\" y=\"192.07\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">3s</text></svg>",
     "alt": "A photoelectron spectrum on a logarithmic binding energy axis with four peaks: 104 megajoules per mole with relative height 2, 6.84 with height 2, 3.67 with height 6, and 0.50 with height 1."
    }
   ]
  },
  "ce2-set6": {
   "text": "The concentration of reactant A is measured as a function of time for the reaction A → products. The data are plotted in the graph.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.0</text><line x1=\"64\" y1=\"201.5\" x2=\"496\" y2=\"201.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"205.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"64\" y1=\"141\" x2=\"496\" y2=\"141\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"145\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"64\" y1=\"80.5\" x2=\"496\" y2=\"80.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"84.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"172\" y1=\"262\" x2=\"172\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"172\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"280\" y1=\"262\" x2=\"280\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"388\" y1=\"262\" x2=\"388\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"388\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"496\" y1=\"262\" x2=\"496\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"262\" x2=\"496\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time (s)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">[A] (M)</text><path d=\"M64 20L69.4 28.24L74.8 36.21L80.2 43.9L85.6 51.33L91 58.5L96.4 65.43L101.8 72.13L107.2 78.6L112.6 84.85L118 90.88L123.4 96.71L128.8 102.34L134.2 107.78L139.6 113.03L145 118.11L150.4 123.01L155.8 127.74L161.2 132.32L166.6 136.73L172 141L177.4 145.12L182.8 149.1L188.2 152.95L193.6 156.66L199 160.25L204.4 163.72L209.8 167.07L215.2 170.3L220.6 173.42L226 176.44L231.4 179.35L236.8 182.17L242.2 184.89L247.6 187.52L253 190.05L258.4 192.5L263.8 194.87L269.2 197.16L274.6 199.37L280 201.5L285.4 203.56L290.8 205.55L296.2 207.47L301.6 209.33L307 211.13L312.4 212.86L317.8 214.53L323.2 216.15L328.6 217.71L334 219.22L339.4 220.68L344.8 222.08L350.2 223.44L355.6 224.76L361 226.03L366.4 227.25L371.8 228.44L377.2 229.58L382.6 230.68L388 231.75L393.4 232.78L398.8 233.78L404.2 234.74L409.6 235.67L415 236.56L420.4 237.43L425.8 238.27L431.2 239.07L436.6 239.86L442 240.61L447.4 241.34L452.8 242.04L458.2 242.72L463.6 243.38L469 244.01L474.4 244.63L479.8 245.22L485.2 245.79L490.6 246.34L496 246.88\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"20\" r=\"4.5\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.6\"/><circle cx=\"172\" cy=\"141\" r=\"4.5\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.6\"/><circle cx=\"280\" cy=\"201.5\" r=\"4.5\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.6\"/><circle cx=\"388\" cy=\"231.75\" r=\"4.5\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.6\"/></svg>",
     "alt": "A graph of the concentration of A in molar against time in seconds. The concentration falls from 0.80 at 0 seconds to 0.40 at 20 seconds, 0.20 at 40 seconds, and 0.10 at 60 seconds, curving downward and flattening."
    }
   ]
  }
 }
};

export default EXAM;
