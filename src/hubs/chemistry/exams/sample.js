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
   "explanation": "q = mcΔT = (100. g)(4.18 J/(g·°C))(7.0 °C) = 2926 J ≈ 2.9 kJ."
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
   "explanation": "ΔG = ΔH − TΔS = −20 kJ − (400 K)(0.050 kJ/K) = −20 − 20 = −40 kJ. Both the energy term and the entropy term favor the reaction."
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
   "explanation": "pOH = −log(1.0 × 10⁻³) = 3.00, so pH = 14.00 − 3.00 = 11.00."
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
   "explanation": "At constant temperature, P₁V₁ = P₂V₂, so P₂ = (1.0)(3.0)/(1.0) = 3.0 atm."
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
   "explanation": "After the reaction no B₂ remains, while one A₂ molecule is left over. B₂ was used up first, so it is the limiting reactant."
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
   "explanation": "Six B₂ molecules react with 6 ÷ 3 = 2 A₂ molecules (the ratio is 1 A₂ : 3 B₂). Of the original three A₂ molecules, 3 − 2 = 1 remains."
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
   "explanation": "30 minutes is three half-lives, so the amount remaining is (1/2)³ = 1/8."
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
   "explanation": "n = mass/molar mass = 3.0 g ÷ 12.0 g/mol = 0.25 mol."
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
   "explanation": "Adding a reactant makes Q smaller than K, so by Le Châtelier's principle the system shifts toward the products to consume some of the added N₂. The value of K does not change, because the temperature is constant."
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
   "explanation": "The carbon atom in CH₄ has four bonding domains and no lone pairs, so the electron domains arrange themselves in a tetrahedron, with bond angles of about 109.5°."
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
