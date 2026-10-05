import { S, M, G } from "./pool.mjs";
import * as C from "./chemfigs.mjs";
const { fig } = C;

export const config = { hub: "chemistry", prefix: "cs", N: 0, file: "sample.js", title: "AP Chemistry — Sample Exam", seed: 9, sample: true };

export default [
  S(1,
    "How many moles of carbon atoms are in a 3.0 g sample of carbon? (The molar mass of C is 12.0 g/mol.)",
    ["0.025 mol", "0.25 mol", "2.5 mol", "36 mol"], 1,
    "n = mass/molar mass = 3.0 g ÷ 12.0 g/mol = 0.25 mol."),
  M(2,
    "What is the approximate H–C–H bond angle in a molecule of methane, CH₄?",
    ["109.5°", "120°", "90°", "180°"],
    "The carbon atom in CH₄ has four bonding domains and no lone pairs, so the electron domains arrange themselves in a tetrahedron, with bond angles of about 109.5°."),
  S(3,
    "A sample of gas has a volume of 3.0 L at a pressure of 1.0 atm. The gas is compressed to 1.0 L at constant temperature. What is the final pressure?",
    ["0.33 atm", "1.0 atm", "3.0 atm", "9.0 atm"], 2,
    "At constant temperature, P₁V₁ = P₂V₂, so P₂ = (1.0)(3.0)/(1.0) = 3.0 atm."),
  G(4, {
    text: "The particle diagrams show a mixture of A₂ and B₂ molecules before and after they react to form AB₃ according to A₂ + 3 B₂ → 2 AB₃. The reaction goes to completion.",
    figures: [fig(C.particleBoxes({ boxes: [{ title: "Before reaction", parts: [{ kind: "A2", n: 3 }, { kind: "B2", n: 6 }] }, { title: "After reaction", parts: [{ kind: "AB3", n: 4 }, { kind: "A2", n: 1 }] }], seed: 4 }), "Two boxes of particles. Before the reaction the box contains three A2 molecules and six B2 molecules. After the reaction it contains four AB3 molecules and one A2 molecule.")],
  }, [
    M(4, "Which reactant is the limiting reactant?",
      ["B₂", "A₂", "AB₃", "Neither reactant is limiting."],
      "After the reaction no B₂ remains, while one A₂ molecule is left over. B₂ was used up first, so it is the limiting reactant."),
    S(4, "How many A₂ molecules remain after the reaction is complete?",
      ["0", "1", "2", "3"], 1,
      "Six B₂ molecules react with 6 ÷ 3 = 2 A₂ molecules (the ratio is 1 A₂ : 3 B₂). Of the original three A₂ molecules, 3 − 2 = 1 remains."),
  ]),
  S(5,
    "A first-order reaction has a half-life of 10 minutes. What fraction of the original reactant remains after 30 minutes?",
    ["1/2", "1/4", "1/8", "1/16"], 2,
    "30 minutes is three half-lives, so the amount remaining is (1/2)³ = 1/8."),
  S(6,
    "How much thermal energy is absorbed by 100. g of water when its temperature increases from 18.0 °C to 25.0 °C? (The specific heat of water is 4.18 J/(g·°C).)",
    ["0.29 kJ", "2.9 kJ", "29 kJ", "293 kJ"], 1,
    "q = mcΔT = (100. g)(4.18 J/(g·°C))(7.0 °C) = 2926 J ≈ 2.9 kJ."),
  M(7,
    "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) is at equilibrium in a closed container. Additional N₂ is added at constant temperature and volume. What happens?",
    ["The equilibrium shifts toward the products.", "The equilibrium shifts toward the reactants.", "The value of K increases.", "Nothing happens, because the system is already at equilibrium."],
    "Adding a reactant makes Q smaller than K, so by Le Châtelier's principle the system shifts toward the products to consume some of the added N₂. The value of K does not change, because the temperature is constant."),
  S(8,
    "A solution has a hydroxide ion concentration of 1.0 × 10⁻³ M at 25 °C. What is the pH of the solution?",
    ["3.00", "7.00", "11.00", "14.00"], 2,
    "pOH = −log(1.0 × 10⁻³) = 3.00, so pH = 14.00 − 3.00 = 11.00."),
  S(9,
    "For a reaction, ΔH = −20 kJ and ΔS = +50 J/K. What is ΔG at 400 K?",
    ["−40 kJ", "−20 kJ", "+20 kJ", "+40 kJ"], 0,
    "ΔG = ΔH − TΔS = −20 kJ − (400 K)(0.050 kJ/K) = −20 − 20 = −40 kJ. Both the energy term and the entropy term favor the reaction."),
];
