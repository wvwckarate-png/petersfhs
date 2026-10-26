import { FIGS as F1 } from "./chem_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "chemistry", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "mole-map", "Molar mass is the bridge between the macroscopic world"),
  at(1, "orbital-filling", "Electrons fill orbitals from lowest to highest energy (Aufbau principle)"),
  at(2, "bond-pe-curve", "Higher bond order → shorter, stronger bond"),
  at(2, "ionic-lattice", "Ionic solids aren't made of individual"),
  at(2, "metals-alloys", "Metallic bonding is often described as a"),
  at(3, "imf-types", "Every molecule experiences London dispersion forces"),
  at(3, "gas-law-graphs", "MCQ explanations often name these laws directly"),
  at(3, "photoelectric", "Every metal has a characteristic threshold frequency"),
  at(3, "beer-lambert", "The Beer-Lambert Law connects how much light a solution absorbs"),
  at(4, "net-ionic", "When ionic compounds react in aqueous solution, many ions don't actually participate"),
  at(4, "redox-transfer", "Redox reactions involve electron transfer"),
  at(5, "rate-orders", "Integrated rate laws describe how concentration itself"),
  at(5, "catalysis-profile", "A catalyst lowers activation energy for BOTH the forward and reverse reaction"),
  at(7, "equilibrium-approach", "Equilibrium is dynamic, not static."),
  at(7, "le-chatelier", "Adding a reactant or removing a product"),
  at(8, "buffer-particulate", "A buffer works because it has BOTH a weak acid component"),
  at(9, "entropy-states", "Entropy generally increases when"),
];
