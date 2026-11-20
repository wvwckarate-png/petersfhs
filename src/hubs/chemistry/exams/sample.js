// AP Chemistry — Sample Exam — 10 questions. 
const EXAM = {
 "questions": [
  {
   "id": "cs0-1",
   "unit": 6,
   "stem": "How much thermal energy is absorbed by 100. g of water when its temperature increases from 18.0 °C to 25.0 °C? (The specific heat of water is 4.18 J/(g·°C).)",
   "choices": [
    "293 kJ",
    "29 kJ",
    "2.9 kJ",
    "0.29 kJ"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.9 kJ. The heat absorbed by a substance that changes temperature without changing phase is q = mcΔT. Here ΔT = 25.0 °C − 18.0 °C = 7.0 °C, so q = (100. g)(4.18 J/(g·°C))(7.0 °C) = 2926 J. Converting with 1 kJ = 1000 J gives 2.926 kJ, and because ΔT has only two significant figures (7.0), the answer is reported as 2.9 kJ. The value is positive because the water gains energy.\n\n(A) is wrong because it is 100 times too large; it comes from dividing 2926 J by 10 instead of 1000 (292.6 ≈ 293) when converting joules to kilojoules.\n(B) is wrong because it is 10 times too large; dividing 2926 J by 100 instead of 1000 when converting joules to kilojoules gives about 29 kJ.\n(D) is wrong because it is 10 times too small; it divides by 10,000 instead of 1000, or misplaces the decimal in the 2926 J result."
  },
  {
   "id": "cs0-2",
   "unit": 9,
   "stem": "For a reaction, ΔH = −20 kJ and ΔS = +50 J/K. What is ΔG at 400 K?",
   "choices": [
    "−40 kJ",
    "−20 kJ",
    "+20 kJ",
    "+40 kJ"
   ],
   "correct": 0,
   "explanation": "Correct: (A) −40 kJ. Gibbs free energy is ΔG = ΔH − TΔS, and the units must match before combining terms. Convert ΔS to kilojoules: +50 J/K = +0.050 kJ/K. Then TΔS = (400 K)(0.050 kJ/K) = 20 kJ, and ΔG = −20 kJ − 20 kJ = −40 kJ. Both the negative ΔH (exothermic) and the positive ΔS (increased disorder) make ΔG more negative, so the reaction is thermodynamically favorable at every temperature.\n\n(B) is wrong because −20 kJ is just ΔH; it leaves out the −TΔS term, which contributes another −20 kJ at 400 K.\n(C) is wrong because +20 kJ is only the magnitude of TΔS, and it ignores both ΔH and the minus sign in ΔG = ΔH − TΔS.\n(D) is wrong because +40 kJ reverses the signs of both terms, giving −ΔH + TΔS instead of ΔH − TΔS, so the sign of ΔG is flipped."
  },
  {
   "id": "cs0-3",
   "unit": 8,
   "stem": "A solution has a hydroxide ion concentration of 1.0 × 10⁻³ M at 25 °C. What is the pH of the solution?",
   "choices": [
    "3.00",
    "7.00",
    "11.00",
    "14.00"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 11.00. The given quantity is [OH⁻], so first find pOH: pOH = −log(1.0 × 10⁻³) = 3.00. At 25 °C, pH + pOH = 14.00 because K<sub>w</sub> = 1.0 × 10⁻¹⁴, so pH = 14.00 − 3.00 = 11.00. A pH above 7 confirms the solution is basic, as expected when [OH⁻] is larger than 1.0 × 10⁻⁷ M. The two decimal places match the two significant figures in 1.0 × 10⁻³.\n\n(A) is wrong because 3.00 is the pOH, not the pH; it treats the hydroxide concentration as if it were [H⁺].\n(B) is wrong because 7.00 is the pH of a neutral solution, but [OH⁻] = 1.0 × 10⁻³ M is far above 1.0 × 10⁻⁷ M, so the solution is basic.\n(D) is wrong because 14.00 is pH + pOH itself; it forgets to subtract the pOH of 3.00 from 14.00."
  },
  {
   "id": "cs0-4",
   "unit": 3,
   "stem": "A sample of gas has a volume of 3.0 L at a pressure of 1.0 atm. The gas is compressed to 1.0 L at constant temperature. What is the final pressure?",
   "choices": [
    "9.0 atm",
    "3.0 atm",
    "1.0 atm",
    "0.33 atm"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3.0 atm. At constant temperature and a fixed amount of gas, Boyle's law applies: pressure and volume are inversely proportional, so P₁V₁ = P₂V₂. Solving, P₂ = P₁V₁/V₂ = (1.0 atm)(3.0 L)/(1.0 L) = 3.0 atm. Compressing the gas to one-third of its volume packs the same molecules into a smaller space, so they strike the walls three times as often and the pressure triples.\n\n(A) is wrong because 9.0 atm squares the volume ratio (3.0)², but pressure is inversely proportional to volume, not to its square.\n(C) is wrong because 1.0 atm assumes the pressure does not change, but compressing a gas at constant temperature always raises its pressure.\n(D) is wrong because 0.33 atm uses P₂ = P₁V₂/V₁, treating pressure as directly proportional to volume, which is backward for Boyle's law."
  },
  {
   "id": "cs0-5",
   "unit": 4,
   "setId": "cs0-set1",
   "stem": "Which reactant is the limiting reactant?",
   "choices": [
    "A₂",
    "AB₃",
    "Neither reactant is limiting.",
    "B₂"
   ],
   "correct": 3,
   "explanation": "Correct: (D) B₂. The limiting reactant is the one completely used up, which stops the reaction. The before box holds 3 A₂ and 6 B₂ molecules. The equation needs 3 B₂ for every 1 A₂, so 6 B₂ can react with only 2 A₂, while 3 A₂ would need 9 B₂. The after box confirms this: 4 AB₃ molecules and 1 leftover A₂, with no B₂ remaining. B₂ ran out first, so B₂ is the limiting reactant.\n\n(A) is wrong because A₂ is the excess reactant; one A₂ molecule is still left in the after box, so it was not used up.\n(B) is wrong because AB₃ is the product of the reaction, not a reactant, so it cannot be the limiting reactant.\n(C) is wrong because the reaction stopped when all six B₂ molecules were consumed while an A₂ molecule was left over, so B₂ was limiting."
  },
  {
   "id": "cs0-6",
   "unit": 4,
   "setId": "cs0-set1",
   "stem": "How many A₂ molecules remain after the reaction is complete?",
   "choices": [
    "3",
    "2",
    "1",
    "0"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1. The mole ratio in A₂ + 3 B₂ → 2 AB₃ is 1 A₂ : 3 B₂. All 6 B₂ molecules react, so they consume 6 ÷ 3 = 2 A₂ molecules and form 2 × 2 = 4 AB₃ molecules. Starting with 3 A₂, the number left is 3 − 2 = 1. The after box in the diagram shows exactly one A₂ molecule beside the four AB₃ molecules, confirming the count and conserving all 6 A atoms and 12 B atoms.\n\n(A) is wrong because 3 is the starting number of A₂ molecules; it assumes none of the A₂ reacted with B₂.\n(B) is wrong because 2 is the number of A₂ molecules that reacted, not the number left over after the reaction.\n(D) is wrong because 0 assumes A₂ is used up completely, but 6 B₂ molecules can react with only 2 of the 3 A₂ molecules."
  },
  {
   "id": "cs0-7",
   "unit": 5,
   "stem": "A first-order reaction has a half-life of 10 minutes. What fraction of the original reactant remains after 30 minutes?",
   "choices": [
    "1/16",
    "1/8",
    "1/4",
    "1/2"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1/8. For a first-order reaction the half-life is constant, independent of concentration, so each 10-minute interval halves whatever reactant remains. In 30 minutes there are 30 ÷ 10 = 3 half-lives, so the fraction remaining is (1/2)³ = 1/8. Step by step: 1 → 1/2 after 10 min, → 1/4 after 20 min, → 1/8 after 30 min.\n\n(A) is wrong because 1/16 is (1/2)⁴, the fraction left after four half-lives, which would take 40 minutes, not 30.\n(C) is wrong because 1/4 is the fraction left after two half-lives (20 minutes); it stops one half-life short.\n(D) is wrong because 1/2 is the fraction left after only one half-life (10 minutes), not after 30 minutes."
  },
  {
   "id": "cs0-8",
   "unit": 1,
   "stem": "How many moles of carbon atoms are in a 3.0 g sample of carbon? (The molar mass of C is 12.0 g/mol.)",
   "choices": [
    "0.025 mol",
    "0.25 mol",
    "2.5 mol",
    "36 mol"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 0.25 mol. The number of moles equals mass divided by molar mass: n = m/M. Here n = 3.0 g ÷ 12.0 g/mol = 0.25 mol. The grams cancel, leaving moles, and two significant figures match the 3.0 g measurement. As a sense check, 3.0 g is one-fourth of the 12.0 g in one mole of carbon, so the sample is one-fourth of a mole.\n\n(A) is wrong because 0.025 mol misplaces the decimal point; 3.0 ÷ 12.0 is 0.25, not 0.025.\n(C) is wrong because 2.5 mol is ten times too large, a decimal slip; a sample smaller than 12.0 g must contain less than 1 mol.\n(D) is wrong because 36 mol multiplies the mass by the molar mass (3.0 × 12.0) instead of dividing; the units would be g²/mol, not mol."
  },
  {
   "id": "cs0-9",
   "unit": 7,
   "stem": "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) is at equilibrium in a closed container. Additional N₂ is added at constant temperature and volume. What happens?",
   "choices": [
    "The equilibrium shifts toward the reactants.",
    "The value of K increases.",
    "Nothing happens, because the system is already at equilibrium.",
    "The equilibrium shifts toward the products."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The equilibrium shifts toward the products. Adding N₂ raises a reactant concentration, so the reaction quotient Q = [NH₃]²/([N₂][H₂]³) drops below K. By Le Châtelier's principle the system responds by consuming some of the added N₂ (and some H₂), making more NH₃ until Q again equals K. The shift is therefore toward the products. K itself depends only on temperature, which is held constant, so K does not change.\n\n(A) is wrong because shifting toward the reactants would make even more N₂; that happens when a product is added, not a reactant.\n(B) is wrong because K depends only on temperature, and the temperature is constant, so adding N₂ changes Q, not K.\n(C) is wrong because equilibrium is dynamic, and adding N₂ disturbs it by making Q less than K, so the system must shift."
  },
  {
   "id": "cs0-10",
   "unit": 2,
   "stem": "What is the approximate H–C–H bond angle in a molecule of methane, CH₄?",
   "choices": [
    "109.5°",
    "120°",
    "90°",
    "180°"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 109.5°. By VSEPR theory, the carbon atom in CH₄ has four bonding electron domains and no lone pairs. Four domains spread out as far apart as possible in three dimensions, forming a tetrahedron, and the angle between any two bonds in a regular tetrahedron is 109.5°. With no lone pairs to compress them, all six H–C–H angles are exactly the ideal tetrahedral angle.\n\n(B) is wrong because 120° is the angle for three electron domains in a trigonal planar shape, such as BF₃, not four.\n(C) is wrong because 90° is what a flat drawing of CH₄ with a square layout suggests, but the molecule is three-dimensional and tetrahedral.\n(D) is wrong because 180° is the angle for two electron domains in a linear molecule such as CO₂, not four."
  }
 ],
 "sets": {
  "cs0-set1": {
   "text": "The particle diagrams show a mixture of A₂ and B₂ molecules before and after they react to form AB₃ according to A₂ + 3 B₂ → 2 AB₃. The reaction goes to completion.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 354 240\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"90\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">Before reaction</text><rect x=\"15\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"130.3\" y1=\"84.12\" x2=\"139.51\" y2=\"91.82\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"130.3\" cy=\"84.12\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"139.51\" cy=\"91.82\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"45.84\" y1=\"72.47\" x2=\"45.52\" y2=\"84.46\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"45.84\" cy=\"72.47\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"45.52\" cy=\"84.46\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"47.45\" y1=\"143.93\" x2=\"42.96\" y2=\"155.06\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"47.45\" cy=\"143.93\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"42.96\" cy=\"155.06\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"107.83\" y1=\"124.24\" x2=\"112.62\" y2=\"135.24\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"107.83\" cy=\"124.24\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"112.62\" cy=\"135.24\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"85.76\" y1=\"98.66\" x2=\"77.65\" y2=\"107.51\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"85.76\" cy=\"98.66\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"77.65\" cy=\"107.51\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"135.12\" y1=\"144.06\" x2=\"136.2\" y2=\"156.01\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"135.12\" cy=\"144.06\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"136.2\" cy=\"156.01\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"85.05\" y1=\"51.05\" x2=\"85.59\" y2=\"63.04\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"85.05\" cy=\"51.05\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"85.59\" cy=\"63.04\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"80.15\" y1=\"136.48\" x2=\"79.8\" y2=\"148.47\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"80.15\" cy=\"136.48\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"79.8\" cy=\"148.47\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"122.29\" y1=\"60.09\" x2=\"112.02\" y2=\"66.3\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"122.29\" cy=\"60.09\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"112.02\" cy=\"66.3\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"264\" y=\"20\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">After reaction</text><rect x=\"189\" y=\"34\" width=\"150\" height=\"140\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"244.41\" y1=\"99.48\" x2=\"255.56\" y2=\"103.9\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"244.41\" y1=\"99.48\" x2=\"234.98\" y2=\"106.98\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"244.41\" y1=\"99.48\" x2=\"242.67\" y2=\"87.57\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"244.41\" cy=\"99.48\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"255.56\" cy=\"103.9\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"234.98\" cy=\"106.98\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"242.67\" cy=\"87.57\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"225.98\" y1=\"139.06\" x2=\"237.69\" y2=\"136.43\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"225.98\" y1=\"139.06\" x2=\"222.41\" y2=\"150.56\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"225.98\" y1=\"139.06\" x2=\"217.84\" y2=\"130.18\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"225.98\" cy=\"139.06\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"237.69\" cy=\"136.43\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"222.41\" cy=\"150.56\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"217.84\" cy=\"130.18\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"305.21\" y1=\"130.39\" x2=\"312.35\" y2=\"140.04\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"305.21\" y1=\"130.39\" x2=\"293.25\" y2=\"131.78\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"305.21\" y1=\"130.39\" x2=\"310.04\" y2=\"119.36\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"305.21\" cy=\"130.39\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"312.35\" cy=\"140.04\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"293.25\" cy=\"131.78\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"310.04\" cy=\"119.36\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"306.62\" y1=\"89.2\" x2=\"318.57\" y2=\"88.06\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"306.62\" y1=\"89.2\" x2=\"301.65\" y2=\"100.17\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"306.62\" y1=\"89.2\" x2=\"299.65\" y2=\"79.39\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"306.62\" cy=\"89.2\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"318.57\" cy=\"88.06\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"301.65\" cy=\"100.17\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"299.65\" cy=\"79.39\" r=\"7.5\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"212.06\" y1=\"61.44\" x2=\"222.97\" y2=\"66.44\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"212.06\" cy=\"61.44\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"222.97\" cy=\"66.44\" r=\"7.5\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><circle cx=\"22\" cy=\"224\" r=\"7\" fill=\"#5B9BC4\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"35\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom A</text><circle cx=\"112\" cy=\"224\" r=\"7\" fill=\"#D9715B\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"125\" y=\"228\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">= atom B</text></svg>",
     "alt": "Two boxes of particles. Before the reaction the box contains three A2 molecules and six B2 molecules. After the reaction it contains four AB3 molecules and one A2 molecule."
    }
   ]
  }
 }
};

export default EXAM;
