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
   "explanation": "Sulfuric acid supplies two H⁺ per formula unit: (0.150 M)(0.0200 L)(2) = 6.00 × 10⁻³ mol H⁺. This requires 6.00 × 10⁻³ mol OH⁻, so V = 6.00 × 10⁻³/0.200 = 0.0300 L = 30.0 mL."
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
   "explanation": "All four are nonpolar hydrocarbons, so the only intermolecular forces are London dispersion forces. These increase with the size of the electron cloud, which increases with molar mass. Butane, CH₃CH₂CH₂CH₃, is the largest and has the strongest dispersion forces and the highest boiling point."
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
   "explanation": "The rate of the overall reaction is determined by the slowest step, the rate-determining step. Step 1 is an elementary step, so its rate law follows from its molecularity: rate = k[A][B]."
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
   "explanation": "By Coulomb's law, the lattice energy increases with the magnitude of the ionic charges and decreases with the distance between the ions. Both compounds have +1 and −1 ions, but Na⁺ and F⁻ are much smaller than K⁺ and Br⁻, so the distance between the ions is smaller and the attraction is stronger in NaF."
  },
  {
   "id": "ce2-5",
   "unit": 3,
   "stem": "At very high pressures, real gases show deviations from ideal behavior. Which statement best explains these deviations?",
   "choices": [
    "The volume of the gas molecules themselves is no longer negligible compared with the volume of the container.",
    "The molecules stop moving, so the kinetic molecular theory no longer applies.",
    "The temperature of the gas decreases, so the molecules attract each other less.",
    "The molecules collide with each other less often."
   ],
   "correct": 0,
   "explanation": "The ideal gas model assumes the molecules have negligible volume and no attractions. At high pressure the molecules are squeezed close together, so their own volume becomes a significant part of the total volume and attractions between them become more important."
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
   "explanation": "The energy lost by the metal equals the energy gained by the water: mc_metalΔT_metal = mc_waterΔT_water. The masses are equal, but the metal's temperature changed by 65 °C and the water's by only 15 °C, so the water must have the larger specific heat capacity."
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
   "explanation": "The density is the molar mass divided by the molar volume: 16.0 g/mol ÷ 22.4 L/mol = 0.714 g/L."
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
   "explanation": "A conjugate base is formed when an acid loses a proton. Removing H⁺ from H₂PO₄⁻ gives HPO₄²⁻. (H₃PO₄ is the conjugate acid of H₂PO₄⁻.)"
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
   "explanation": "After about 100 s the concentrations stay constant, which means the forward and reverse reaction rates are equal. Equilibrium is dynamic: both reactions continue, but their rates match, so there is no net change."
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
   "explanation": "At equilibrium [NO₂] = 1.0 M and [N₂O₄] = 0.30 M, so K = [NO₂]²/[N₂O₄] = (1.0)²/(0.30) = 3.3."
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
   "explanation": "For a conjugate acid–base pair, K_aK_b = K_w, so K_b = (1.0 × 10⁻¹⁴)/(6.2 × 10⁻¹⁰) = 1.6 × 10⁻⁵."
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
   "explanation": "A flask that feels cold is losing thermal energy to the reacting mixture, so the reaction absorbs heat from its surroundings: it is endothermic (ΔH > 0)."
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
   "explanation": "The rate constant depends on temperature (through the Arrhenius equation) and on the activation energy (changed by a catalyst), but not on the concentrations of the species. Increasing the concentration increases the rate, but k itself stays the same."
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
   "explanation": "Heat acts like a reactant in an endothermic reaction. Raising the temperature favors the endothermic (forward) direction, so more product forms at equilibrium. Temperature is the one stress that changes the value of K, which increases for an endothermic reaction."
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
   "explanation": "Let x be the moles of H₂ that react. Then [HI] = 2x and [H₂] = [I₂] = 1.0 − x, so K = (2x)²/(1.0 − x)² = 50. Taking the square root: 2x/(1.0 − x) = 7.07, so x = 0.78 M and [HI] = 2x ≈ 1.6 M."
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
   "explanation": "The molar mass of CaCO₃ is 40.1 + 12.0 + 3(16.0) = 100.1 g/mol. The oxygen contributes 48.0 g of that, so the mass percent is (48.0/100.1)(100) = 48.0%. The value 40.0% is the mass percent of calcium."
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
   "explanation": "Percent yield = (actual/theoretical)(100) = (20.0/25.0)(100) = 80.0%."
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
   "explanation": "For a weak acid, [H⁺] ≈ √(K_aC) = √((7.2 × 10⁻⁴)(0.10)) = 8.5 × 10⁻³ M, so pH = −log(8.5 × 10⁻³) = 2.07. A pH of 1.00 would be the value for a strong acid at the same concentration."
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
   "explanation": "E°cell = E°(cathode) − E°(anode) = (+0.80) − (−0.44) = +1.24 V. The potentials are not multiplied by the stoichiometric coefficients, so doubling the silver half-reaction does not change E°."
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
   "explanation": "Iron has the lower reduction potential, so it is oxidized at the anode: Fe(s) → Fe²⁺(aq) + 2e⁻. Iron atoms leave the electrode as ions, so the mass of the iron electrode decreases while silver ions are reduced and plate onto the silver electrode."
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
   "explanation": "In the first reaction, zinc is oxidized (0 → +2) and copper(II) is reduced (+2 → 0), so electrons are transferred. The other reactions are acid–base, precipitation, and decomposition reactions in which no oxidation numbers change."
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
   "explanation": "HCl and NaOH are strong electrolytes that exist as ions in solution. Na⁺ and Cl⁻ are spectator ions that appear on both sides, so the net reaction is H⁺ + OH⁻ → H₂O."
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
   "explanation": "ΔG° = −RT ln K = −(8.314)(298)(ln 10⁵) = −(2477.6)(11.51) = −28,500 J = −28.5 kJ. A large K corresponds to a negative ΔG°."
  },
  {
   "id": "ce2-24",
   "unit": 3,
   "stem": "Water has a much higher surface tension than hexane (C₆H₁₄). Which statement best explains this?",
   "choices": [
    "Water molecules are held together by hydrogen bonds, which are stronger than the dispersion forces between hexane molecules.",
    "Water molecules have a larger electron cloud than hexane molecules.",
    "Water molecules are nonpolar, so they are pulled strongly toward each other.",
    "The covalent bonds in water are stronger than the covalent bonds in hexane."
   ],
   "correct": 0,
   "explanation": "Surface tension reflects the strength of the attractions between molecules at the surface. Water molecules form hydrogen bonds with each other, which are much stronger than the London dispersion forces that hold hexane molecules together. The bonds within the molecules are not what is overcome."
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
   "explanation": "pOH = −log(2.5 × 10⁻³) = 2.60, so pH = 14.00 − 2.60 = 11.40."
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
   "explanation": "E = hc/λ = (6.63 × 10⁻³⁴)(3.00 × 10⁸)/(450 × 10⁻⁹) = 4.4 × 10⁻¹⁹ J. The wavelength must be converted to meters."
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
   "explanation": "E = E° − (0.0592/n) log Q = 1.10 − (0.0592/2) log(100) = 1.10 − (0.0296)(2) = 1.10 − 0.059 = 1.04 V. When Q > 1 the reaction has progressed beyond the standard state, so the cell potential is lower."
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
   "explanation": "In a substitutional alloy, atoms of similar size replace some of the atoms of the host metal in its crystal lattice. In an interstitial alloy, much smaller atoms (such as carbon in steel) occupy the gaps between the larger atoms."
  },
  {
   "id": "ce2-29",
   "unit": 9,
   "stem": "A reaction has ΔH > 0 and ΔS > 0. Under what conditions is the reaction spontaneous?",
   "choices": [
    "At high temperatures, because the −TΔS term becomes more negative than ΔH is positive.",
    "At all temperatures, because ΔS is positive.",
    "At low temperatures, because the reaction absorbs energy.",
    "At no temperature, because ΔH is positive."
   ],
   "correct": 0,
   "explanation": "Spontaneity requires ΔG = ΔH − TΔS < 0. With ΔH > 0, the −TΔS term must outweigh ΔH, which happens when T is large enough. At low temperature the positive ΔH dominates and the reaction is nonspontaneous."
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
   "explanation": "At 60 °C, 110 g of KNO₃ dissolves in 100 g of water. In 50 g of water, half as much dissolves: 55 g."
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
   "explanation": "The solubility of KNO₃ falls from about 169 g/100 g at 80 °C to about 32 g/100 g at 20 °C. The solution now holds more solute than it can at equilibrium, so the excess crystallizes out."
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
   "explanation": "At the cathode, reduction occurs. In molten NaCl the only species that can be reduced is Na⁺, which gains an electron to form liquid sodium: Na⁺ + e⁻ → Na(l). Chlorine gas forms at the anode by oxidation of Cl⁻."
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
   "explanation": "For a first-order reaction, t½ = ln 2/k = 0.693/0.0231 = 30.0 min."
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
   "explanation": "The added H⁺ reacts with NH₃: [NH₃] becomes 0.49 M and [NH₄⁺] becomes 0.51 M. pH = pK_a + log([NH₃]/[NH₄⁺]) = 9.26 + log(0.49/0.51) = 9.26 − 0.017 = 9.24. The pH changes very little, which is how a buffer works."
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
   "explanation": "Bonds broken: 945 + 3(436) = 2253 kJ. Bonds formed: 6 N–H bonds = 6(391) = 2346 kJ. ΔH ≈ 2253 − 2346 = −93 kJ."
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
   "explanation": "T = PV/(nR) = (1.0)(5.0)/((0.20)(0.0821)) = 5.0/0.01642 ≈ 304 K."
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
   "explanation": "In solid SiO₂, a continuous three-dimensional network of Si–O covalent bonds extends throughout the crystal, so melting requires breaking many strong covalent bonds. CO₂ consists of discrete nonpolar molecules held together only by weak London dispersion forces."
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
   "explanation": "By Graham's law, the ratio of effusion rates is √(M₂/M₁) = √(32/2.0) = √16 = 4."
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
   "explanation": "Moles of NaOH = 10.0/40.0 = 0.250 mol, and M = 0.250 mol/0.250 L = 1.00 M."
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
   "explanation": "HCl and NaOH are a strong acid and a strong base. At the equivalence point the solution contains only Na⁺ and Cl⁻, which do not affect the pH, so the pH is 7.00."
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
   "explanation": "The best indicator changes color over a range that includes the equivalence-point pH. The equivalence point is at pH 7.00, which falls within the 6.0–7.6 range of bromothymol blue. (Because the curve is so steep, the other two would also be usable, but their color changes would occur slightly before or after the equivalence point.)"
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
   "explanation": "The relative peak heights, 2 : 2 : 6 : 1, correspond to 1s², 2s², 2p⁶, 3s¹. That is 11 electrons, so the element has 11 protons and is sodium."
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
   "explanation": "Magnesium has one more electron (1s²2s²2p⁶3s²), so its 3s peak is twice as tall. It also has one more proton, which increases the effective nuclear charge, so all of the electrons are held more tightly and all of the peaks shift to higher binding energy."
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
   "explanation": "An amphiprotic species can both donate and accept a proton. HCO₃⁻ can donate a proton (forming CO₃²⁻) or accept one (forming H₂CO₃). CO₃²⁻ can only accept a proton, H₂CO₃ can only donate protons in this series, and NO₃⁻ is a very weak base that is not amphiprotic."
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
   "explanation": "Conductivity depends on the concentration of ions. CaCl₂ is a strong electrolyte that dissociates completely into three ions per formula unit (Ca²⁺ and 2 Cl⁻). Glucose and ethanol are nonelectrolytes, and acetic acid is a weak electrolyte that produces only a few ions."
  },
  {
   "id": "ce2-46",
   "unit": 1,
   "stem": "Which of the following correctly compares the first ionization energies of beryllium and boron?",
   "choices": [
    "Boron has the higher first ionization energy, because it has more protons than beryllium.",
    "Boron has the higher first ionization energy, because its atoms are smaller than beryllium atoms.",
    "Beryllium has the higher first ionization energy, because its outermost electron is in a 2s subshell, which is lower in energy than the 2p subshell of boron.",
    "The two elements have equal first ionization energies, because they are in the same period."
   ],
   "correct": 2,
   "explanation": "The 2p electron that boron loses is higher in energy and is partially shielded by the 2s electrons, so it is easier to remove than beryllium's 2s electron, even though boron has the larger nuclear charge. This is a well-known exception to the general trend across a period."
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
   "explanation": "There are 14/28.0 = 0.50 mol of N₂ and 4.0/2.0 = 2.0 mol of H₂. The reaction needs 3 mol H₂ per mol N₂, so 0.50 mol N₂ would need 1.5 mol H₂ — N₂ is the limiting reactant. It produces 2(0.50) = 1.0 mol of NH₃, which has a mass of 17 g."
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
   "explanation": "q = mcΔT = (100.0 g)(4.18 J/(g·°C))(3.0 °C) = 1254 J ≈ 1.25 × 10³ J. The solution lost this energy to the dissolving salt, so the dissolution is endothermic."
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
   "explanation": "The concentration falls from 0.80 M to 0.40 M in 20 s, so the half-life is 20 s. It takes another 20 s to fall from 0.40 M to 0.20 M."
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
   "explanation": "A constant half-life that does not depend on the initial concentration is the signature of a first-order reaction. For a zero-order reaction the concentration would decrease linearly, and for a second-order reaction successive half-lives would double."
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
   "explanation": "For a first-order reaction, k = ln 2/t½ = 0.693/20 s = 0.0347 s⁻¹."
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
   "explanation": "A molecule is polar when it has polar bonds that do not cancel. CCl₄, CO₂, and BF₃ have polar bonds arranged symmetrically (tetrahedral, linear, and trigonal planar), so their bond dipoles cancel. In CH₃Cl the C–Cl bond is much more polar than the C–H bonds, and the molecule has a net dipole."
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
   "explanation": "ΔH° = ΣΔHf°(products) − ΣΔHf°(reactants) = (−1675.7 + 0) − (0 + (−824.2)) = −851.5 kJ. The standard enthalpy of formation of an element in its standard state (Al, Fe) is zero."
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
   "explanation": "Boron in BF₃ has three bonding domains and no lone pairs, so its geometry is trigonal planar. NF₃, PCl₃, and NH₃ each have a lone pair on the central atom, giving them trigonal pyramidal geometry."
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
   "explanation": "The mole ratio is 3 mol O₂ per 2 mol KClO₃, so 0.20 mol KClO₃ gives 0.30 mol O₂. The volume is (0.30 mol)(22.4 L/mol) = 6.7 L."
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
   "explanation": "In 100 g of the compound there are 40.0/12.0 = 3.33 mol C, 6.7/1.0 = 6.7 mol H, and 53.3/16.0 = 3.33 mol O. Dividing by the smallest value gives the ratio C : H : O = 1 : 2 : 1, so the empirical formula is CH₂O."
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
   "explanation": "Reverse the second equation (ΔH = +283.0 kJ) and add it to the first: C + O₂ → CO₂ and CO₂ → CO + ½O₂ combine to give C + ½O₂ → CO, with ΔH = −393.5 + 283.0 = −110.5 kJ."
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
   "explanation": "NH₄⁺ is the conjugate acid of the weak base NH₃, so it donates protons to water: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. Cl⁻ is the conjugate base of a strong acid and does not affect the pH."
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
   "explanation": "Formal charge = (valence electrons) − (nonbonding electrons) − ½(bonding electrons). Nitrogen has 5 valence electrons, no lone pairs, and 8 bonding electrons (four bonds), so the formal charge is 5 − 0 − 4 = +1."
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
   "explanation": "The NaCl provides Cl⁻, a common ion for the equilibrium AgCl(s) ⇌ Ag⁺ + Cl⁻. By Le Châtelier's principle the equilibrium shifts toward the solid, reducing the solubility. K_sp does not change, but the equilibrium concentration of Ag⁺ does."
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
