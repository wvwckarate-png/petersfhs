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
   "explanation": "The standard enthalpy of formation of an element in its most stable form at 25 °C and 1 atm is zero. Bromine is a liquid under these conditions, so Br₂(l) is the standard state. Br₂(g), Hg(g) (mercury is a liquid), and O₃(g) (the stable form of oxygen is O₂) are not."
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
   "explanation": "Polar substances that can form hydrogen bonds with water dissolve best in it (like dissolves like). Methanol has an O–H group and mixes with water in all proportions. Hexane, carbon tetrachloride, and iodine are nonpolar and are held together mainly by dispersion forces."
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
   "explanation": "At 0 °C, q = m × (heat of fusion) = (10.0 g)(334 J/g) = 3340 J = 3.34 kJ. The value 0.418 kJ is the energy needed to warm the ice (segment A), and 4.18 kJ is the energy to warm the water (segment C)."
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
   "explanation": "q = m × (heat of vaporization) = (10.0 g)(2260 J/g) = 22,600 J = 22.6 kJ. The vaporization requires far more energy than melting because the particles must be separated completely."
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
   "explanation": "Salts of sodium (and other Group 1 cations) are soluble. AgCl, BaSO₄, and PbSO₄ are common insoluble salts that form precipitates."
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
   "explanation": "Comparing experiments 1 and 2, [A] doubles while [B] is constant and the rate increases by a factor of 4, so the rate is proportional to [A]²: second order in A."
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
   "explanation": "Experiments 1 and 3 show that the rate does not depend on [B] (zero order in B), so rate = k[A]². From experiment 1: k = (1.5 × 10⁻²)/(0.10)² = 1.5 M⁻¹ s⁻¹."
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
   "explanation": "The reaction is zero order in B (experiments 1 and 3 give the same rate when [B] is tripled), so changing [B] has no effect on the rate."
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
   "explanation": "Let x = [B] at equilibrium. Then [A] = 1.0 − x, and K = x/(1.0 − x) = 4.0, so x = 4.0 − 4.0x, 5.0x = 4.0, and x = 0.80 M."
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
   "explanation": "NaCl contributes (0.200 M)(0.100 L) = 0.0200 mol Cl⁻. CaCl₂ contributes 2 × (0.100 M)(0.150 L) = 0.0300 mol Cl⁻. The total is 0.0500 mol in 0.250 L, so [Cl⁻] = 0.200 M."
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
   "explanation": "0.635 g of Cu is 0.0100 mol. Each Cu²⁺ ion needs 2 electrons, so 0.0200 mol of electrons, or (0.0200)(96,500) = 1930 C, is required. Then t = q/I = 1930/5.00 = 386 s."
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
   "explanation": "These molecules are nonpolar and cannot form hydrogen bonds, so the only intermolecular force is London dispersion. Larger molecules with more electrons are more polarizable, which strengthens the dispersion forces and raises the boiling point."
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
   "explanation": "Following the trend in the table, a larger molecule with more electrons has stronger dispersion forces and a higher boiling point. PbH₄ has more electrons than SnH₄, so its boiling point is predicted to be higher."
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
   "explanation": "0.50 mol of CO₂ contains (0.50)(6.02 × 10²³) = 3.0 × 10²³ molecules. Each molecule contains 2 oxygen atoms, so there are 6.0 × 10²³ oxygen atoms."
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
   "explanation": "q = C_cal ΔT = (8.00 kJ/°C)(2.50 °C) = 20.0 kJ. The reaction released this energy to the calorimeter."
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
   "explanation": "In ice, each water molecule is hydrogen-bonded to four neighbors in a rigid, open hexagonal arrangement. When ice melts, some hydrogen bonds break and the molecules pack more closely, so the liquid is denser."
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
   "explanation": "By the Arrhenius equation, k = Ae^(−Ea/RT), a lower activation energy gives a larger rate constant at the same temperature, because a larger fraction of the molecules have enough energy to react."
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
   "explanation": "Moles of KHP = 0.500/204.2 = 2.45 × 10⁻³ mol. KHP and NaOH react 1 : 1, so [NaOH] = 2.45 × 10⁻³ mol/0.0245 L = 0.100 M."
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
   "explanation": "A strong acid dissociates completely, so a 1.0 M HCl solution has [H⁺] = 1.0 M (pH 0). Acetic acid is a weak acid that dissociates only slightly, so its [H⁺] is much smaller (about 4 × 10⁻³ M) and its pH is higher."
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
   "explanation": "A catalyst lowers the activation energy of both the forward and reverse reactions by the same amount, so both rates increase equally. The system reaches equilibrium faster, but the equilibrium concentrations and the value of K do not change."
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
   "explanation": "The triple point is the unique combination of temperature and pressure at which all three phases coexist in equilibrium. The highest temperature at which a liquid can exist is the critical point."
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
   "explanation": "A solid sublimes directly to a gas when it is heated at a pressure below that of the triple point, because the heating path then crosses the solid–gas boundary and never enters the liquid region."
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
   "explanation": "After Na loses its 3s electron, it has the neon configuration, so the second electron must come from the 2p subshell closer to the nucleus, which requires a much greater energy. Mg⁺ still has a 3s electron to remove, which is easier."
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
   "explanation": "In SO₂ the sulfur atom has three electron domains (two bonding domains and one lone pair), so the molecular geometry is bent. CO₂, BeCl₂, and HCN each have two electron domains on the central atom and no lone pairs, so they are linear."
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
   "explanation": "K = [N₂O₄]/[NO₂]² = (0.20)/(0.10)² = 20."
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
   "explanation": "Oxidation at the zinc anode adds positive Zn²⁺ ions to the left solution. Anions in the salt bridge migrate toward the anode compartment to keep the solution electrically neutral. Electrons, not ions, flow through the external wire."
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
   "explanation": "E°cell = E°(cathode) − E°(anode) = (+0.80) − (−0.76) = +1.56 V."
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
   "explanation": "The oxidizing agent is the species that is reduced. The hydrogen in H⁺ goes from +1 to 0 (reduced), so H⁺ is the oxidizing agent. Zinc goes from 0 to +2 (oxidized) and is the reducing agent."
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
   "explanation": "For a weak base, [OH⁻] ≈ √(K_bC) = √((1.8 × 10⁻⁵)(0.10)) = 1.3 × 10⁻³ M. Then pOH = 2.87 and pH = 14.00 − 2.87 = 11.13."
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
   "explanation": "Gases behave most ideally when the intermolecular attractions and the molecular volume are smallest. Helium is a small, nonpolar atom with very weak attractions, so it deviates least. NH₃ and H₂O have hydrogen bonding, and CO₂ is larger and more polarizable."
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
   "explanation": "PbI₂(s) ⇌ Pb²⁺ + 2 I⁻. If the solubility is s, then K_sp = (s)(2s)² = 4s³. So s = (K_sp/4)^(1/3) = (3.5 × 10⁻⁹)^(1/3) = 1.5 × 10⁻³ M."
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
   "explanation": "The acetate ion is the conjugate base of the weak acid acetic acid, so it reacts with water to produce OH⁻ and makes the solution basic. NaCl and KNO₃ are salts of strong acids and strong bases (neutral), and NH₄Cl contains the conjugate acid of a weak base (acidic)."
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
   "explanation": "Adding the two equations cancels 2 NO and gives the target reaction, so ΔH = (+180) + (−114) = +66 kJ."
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
   "explanation": "In metallic bonding, the valence electrons are delocalized in a \"sea\" surrounding the positive ions. When layers slide, the electron sea keeps holding the ions together. In an ionic crystal, shifting a layer brings like charges next to each other, and the repulsion shatters the crystal."
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
   "explanation": "By the Henderson–Hasselbalch equation, 4.50 = 4.74 + log(ratio), so log(ratio) = −0.24 and the ratio = 10^(−0.24) = 0.58. The ratio is less than 1 because the pH is below the pK_a."
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
   "explanation": "When Q > K, there is too much product relative to equilibrium, so the net reaction proceeds in the reverse direction, consuming products and forming reactants, until Q equals K. K itself depends only on temperature."
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
   "explanation": "No single Lewis structure for O₃ can explain equal bond lengths. The molecule's true structure is a hybrid of the two resonance structures; the bonding electrons are delocalized, and each O–O bond has a bond order of 1.5. The molecule does not flip between structures."
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
   "explanation": "The moles of H₂ are 2.24/22.4 = 0.100 mol. The mole ratio Zn : H₂ is 1 : 1, so 0.100 mol of Zn is needed, with a mass of (0.100)(65.4) = 6.54 g."
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
   "explanation": "Using the combined gas law, P₁V₁/T₁ = P₂V₂/T₂: P₂ = (1.0)(2.0)(450)/((300)(1.5)) = 900/450 = 2.0 atm."
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
   "explanation": "A precipitation reaction occurs when two aqueous solutions are mixed and an insoluble solid forms. In the first reaction, PbI₂ is insoluble and appears as a solid. The others are combination, acid–base, and combination reactions."
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
   "explanation": "Breaking a bond requires an input of energy to separate the atoms, so it is endothermic. Forming a bond releases energy, so it is exothermic. The overall ΔH of a reaction reflects the balance of the two."
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
   "explanation": "11.0 g of C₃H₈ is 0.250 mol. The ratio of CO₂ to C₃H₈ is 3 : 1, so 0.750 mol of CO₂ forms, with a mass of (0.750)(44.0) = 33.0 g."
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
   "explanation": "The weaker the acid, the stronger its conjugate base. HA₃ has the smallest K_a, so it is the weakest acid, and A₃⁻ is the strongest conjugate base."
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
   "explanation": "A buffer works best when the pH is close to the pK_a of the weak acid (within about one pH unit). HA₂ has K_a = 1 × 10⁻⁵, so its pK_a is 5.0, which matches the desired pH."
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
   "explanation": "By Graham's law, the ratio of the effusion rates is √(M_CH₄/M_He) = √(16.0/4.0) = √4 = 2."
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
   "explanation": "In pure water, [H⁺] = [OH⁻] = √K_w = √(5.5 × 10⁻¹⁴) = 2.3 × 10⁻⁷ M, so pH = 6.63. The water is still neutral because [H⁺] = [OH⁻], even though the pH is not 7."
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
   "explanation": "By the Beer–Lambert law, A = εbc, so c = A/(εb) = 0.60/((150)(1.0)) = 4.0 × 10⁻³ M."
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
   "explanation": "The atomic number gives 26 protons. The neutron number is the mass number minus the atomic number: 56 − 26 = 30. A 2+ charge means the ion has lost two electrons, so it has 26 − 2 = 24 electrons."
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
   "explanation": "Ba(OH)₂ is a strong base that releases two OH⁻ ions per formula unit, so [OH⁻] = 2(0.025) = 0.050 M. Then pOH = 1.30 and pH = 14.00 − 1.30 = 12.70."
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
   "explanation": "Bond length decreases as the number of shared electron pairs increases, because more shared electrons pull the nuclei closer together. A triple bond is the shortest and the strongest of the carbon–carbon bonds."
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
   "explanation": "By Coulomb's law, the strength of the attraction depends on the product of the ion charges and decreases with the distance between them. MgO has 2+ and 2− ions (a charge product of 4 compared with 1 for NaCl) with similar spacing, so its lattice is much more strongly held together and requires far more energy to melt."
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
   "explanation": "ΔG° = ΣΔGf°(products) − ΣΔGf°(reactants) = [−394.4 + 2(−237.1)] − [−50.8 + 0] = −868.6 + 50.8 = −817.8 kJ."
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
   "explanation": "The partial pressure is the mole fraction times the total pressure: (2.0/5.0)(5.0 atm) = 2.0 atm."
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
   "explanation": "For a second-order reaction, the integrated rate law is 1/[A] = kt + 1/[A]₀, so a plot of 1/[A] against time is linear with a slope of k. [A] versus time is linear for a zero-order reaction, and ln[A] versus time is linear for a first-order reaction."
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
   "explanation": "Entropy increases with the number of accessible microstates. The molecules in a gas move freely throughout a large volume, so a gas has far greater entropy than the same amount of liquid, which has more entropy than the solid."
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
   "explanation": "The four C–H bonds are single bonds (4 σ). The C=C double bond consists of one σ bond and one π bond. The total is 5 σ bonds and 1 π bond."
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
   "explanation": "Chromium is an exception to the usual filling order. A half-filled 3d subshell (five unpaired electrons) is particularly stable, so one 4s electron moves to the 3d subshell, giving [Ar] 4s¹ 3d⁵."
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
   "explanation": "log K = nE°/0.0592 = (2)(0.46)/0.0592 = 15.5, so K = 10^15.5 ≈ 3.5 × 10¹⁵. The very large K is consistent with a strongly positive E°."
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
   "explanation": "The average atomic mass is (0.76)(35) + (0.24)(37) = 26.6 + 8.9 = 35.5 amu. The average lies closer to 35 because the ³⁵Cl isotope is the more abundant."
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
   "explanation": "A Cl₂ molecule can contain two ³⁵Cl atoms (mass 70), one ³⁵Cl and one ³⁷Cl (mass 72), or two ³⁷Cl atoms (mass 74). Peaks appear at all three values, with relative heights of about 9 : 6 : 1."
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
