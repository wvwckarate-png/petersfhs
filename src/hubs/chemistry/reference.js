// Reference sheets shown during MCQ exams. A study aid that mirrors the periodic table, constants, and
// equations the real exam provides — the official materials are available on exam day.

// [atomic number, symbol, atomic mass]  (parentheses = mass number of the longest-lived isotope)
const E = [
  [1, "H", "1.008"], [2, "He", "4.003"], [3, "Li", "6.94"], [4, "Be", "9.01"], [5, "B", "10.81"], [6, "C", "12.01"], [7, "N", "14.01"], [8, "O", "16.00"], [9, "F", "19.00"], [10, "Ne", "20.18"],
  [11, "Na", "22.99"], [12, "Mg", "24.30"], [13, "Al", "26.98"], [14, "Si", "28.09"], [15, "P", "30.97"], [16, "S", "32.06"], [17, "Cl", "35.45"], [18, "Ar", "39.95"],
  [19, "K", "39.10"], [20, "Ca", "40.08"], [21, "Sc", "44.96"], [22, "Ti", "47.87"], [23, "V", "50.94"], [24, "Cr", "52.00"], [25, "Mn", "54.94"], [26, "Fe", "55.85"], [27, "Co", "58.93"], [28, "Ni", "58.69"], [29, "Cu", "63.55"], [30, "Zn", "65.38"], [31, "Ga", "69.72"], [32, "Ge", "72.63"], [33, "As", "74.92"], [34, "Se", "78.97"], [35, "Br", "79.90"], [36, "Kr", "83.80"],
  [37, "Rb", "85.47"], [38, "Sr", "87.62"], [39, "Y", "88.91"], [40, "Zr", "91.22"], [41, "Nb", "92.91"], [42, "Mo", "95.95"], [43, "Tc", "(98)"], [44, "Ru", "101.1"], [45, "Rh", "102.9"], [46, "Pd", "106.4"], [47, "Ag", "107.9"], [48, "Cd", "112.4"], [49, "In", "114.8"], [50, "Sn", "118.7"], [51, "Sb", "121.8"], [52, "Te", "127.6"], [53, "I", "126.9"], [54, "Xe", "131.3"],
  [55, "Cs", "132.9"], [56, "Ba", "137.3"], [57, "La", "138.9"], [58, "Ce", "140.1"], [59, "Pr", "140.9"], [60, "Nd", "144.2"], [61, "Pm", "(145)"], [62, "Sm", "150.4"], [63, "Eu", "152.0"], [64, "Gd", "157.3"], [65, "Tb", "158.9"], [66, "Dy", "162.5"], [67, "Ho", "164.9"], [68, "Er", "167.3"], [69, "Tm", "168.9"], [70, "Yb", "173.0"], [71, "Lu", "175.0"],
  [72, "Hf", "178.5"], [73, "Ta", "180.9"], [74, "W", "183.8"], [75, "Re", "186.2"], [76, "Os", "190.2"], [77, "Ir", "192.2"], [78, "Pt", "195.1"], [79, "Au", "197.0"], [80, "Hg", "200.6"], [81, "Tl", "204.4"], [82, "Pb", "207.2"], [83, "Bi", "209.0"], [84, "Po", "(209)"], [85, "At", "(210)"], [86, "Rn", "(222)"],
  [87, "Fr", "(223)"], [88, "Ra", "(226)"], [89, "Ac", "(227)"], [90, "Th", "232.0"], [91, "Pa", "231.0"], [92, "U", "238.0"], [93, "Np", "(237)"], [94, "Pu", "(244)"], [95, "Am", "(243)"], [96, "Cm", "(247)"], [97, "Bk", "(247)"], [98, "Cf", "(251)"], [99, "Es", "(252)"], [100, "Fm", "(257)"], [101, "Md", "(258)"], [102, "No", "(259)"], [103, "Lr", "(266)"],
  [104, "Rf", "(267)"], [105, "Db", "(268)"], [106, "Sg", "(269)"], [107, "Bh", "(270)"], [108, "Hs", "(277)"], [109, "Mt", "(278)"], [110, "Ds", "(281)"], [111, "Rg", "(282)"], [112, "Cn", "(285)"], [113, "Nh", "(286)"], [114, "Fl", "(289)"], [115, "Mc", "(290)"], [116, "Lv", "(293)"], [117, "Ts", "(294)"], [118, "Og", "(294)"],
];
const byZ = Object.fromEntries(E.map((e) => [e[0], e]));

const cell = (z) => {
  if (!z) return "<td></td>";
  const [n, s, m] = byZ[z];
  return `<td><span class="sym">${s}</span>${n}<br>${m}</td>`;
};
function periodicTable() {
  const rows = [];
  for (let period = 1; period <= 7; period++) {
    const cols = new Array(18).fill(0);
    if (period === 1) { cols[0] = 1; cols[17] = 2; }
    else if (period <= 3) {
      const start = period === 2 ? 3 : 11;
      [0, 1].forEach((i) => (cols[i] = start + i));
      for (let i = 12; i < 18; i++) cols[i] = start + 2 + (i - 12);
    } else if (period <= 5) {
      const start = period === 4 ? 19 : 37;
      for (let i = 0; i < 18; i++) cols[i] = start + i;
    } else {
      const s = period === 6 ? 55 : 87;
      cols[0] = s; cols[1] = s + 1;
      cols[2] = period === 6 ? 71 : 103;
      const hf = period === 6 ? 72 : 104;
      for (let i = 3; i < 18; i++) cols[i] = hf + (i - 3);
    }
    rows.push(`<tr>${cols.map(cell).join("")}</tr>`);
  }
  const series = (from, to) => `<tr><td colspan="2"></td>${Array.from({ length: to - from + 1 }, (_, i) => cell(from + i)).join("")}</tr>`;
  return `<table class="pt"><tbody>${rows.join("")}<tr><td colspan="18" style="border:none;height:6px"></td></tr>${series(57, 70)}${series(89, 102)}</tbody></table><p style="font-size:12px;color:#767F73">Rows below the main table: lanthanides (57–70) and actinides (89–102). Masses in parentheses are the mass number of the longest-lived isotope.</p>`;
}

const row = (a, b) => `<tr><td>${a}</td><td>${b}</td></tr>`;
const table = (rows, head = ["Concept", "Equation"]) =>
  `<table><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead><tbody>${rows.map((r) => row(r[0], r[1])).join("")}</tbody></table>`;

const REFERENCE = [
  { title: "Periodic table", html: "<h4>Periodic table of the elements</h4>" + periodicTable() },
  {
    title: "Constants & gases",
    html:
      "<h4>Constants</h4>" +
      table([
        ["Avogadro's number", "N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>"],
        ["Gas constant", "R = 8.314 J/(mol·K) = 0.0821 L·atm/(mol·K) = 62.36 L·torr/(mol·K)"],
        ["Faraday constant", "F = 96,485 C/mol e<sup>−</sup> (96,500 used in practice problems)"],
        ["Planck's constant", "h = 6.626 × 10<sup>−34</sup> J·s"],
        ["Speed of light", "c = 3.00 × 10<sup>8</sup> m/s"],
        ["Water: specific heat", "4.18 J/(g·°C)"],
        ["Ion-product of water", "K<sub>w</sub> = 1.0 × 10<sup>−14</sup> at 25 °C"],
        ["Pressure", "1 atm = 760 mm Hg = 760 torr"],
        ["STP", "0 °C (273.15 K) and 1 atm; molar volume 22.4 L/mol"],
      ], ["Quantity", "Value"]) +
      "<h4>Gases and solutions</h4>" +
      table([
        ["Ideal gas law", "PV = nRT"],
        ["Dalton's law", "P<sub>total</sub> = P<sub>A</sub> + P<sub>B</sub> + …; P<sub>A</sub> = X<sub>A</sub>P<sub>total</sub>"],
        ["Graham's law", "rate<sub>1</sub>/rate<sub>2</sub> = √(M<sub>2</sub>/M<sub>1</sub>)"],
        ["Kinetic energy of a molecule", "KE = ½mv²"],
        ["Molarity, dilution", "M = mol solute/L solution; M<sub>1</sub>V<sub>1</sub> = M<sub>2</sub>V<sub>2</sub>"],
        ["Beer–Lambert law", "A = εbc; A = −log T"],
        ["Photon energy", "E = hν = hc/λ"],
      ]),
  },
  {
    title: "Kinetics & thermo",
    html:
      "<h4>Kinetics</h4>" +
      table([
        ["Zero order", "[A]<sub>t</sub> − [A]<sub>0</sub> = −kt"],
        ["First order", "ln[A]<sub>t</sub> − ln[A]<sub>0</sub> = −kt; t<sub>1/2</sub> = 0.693/k"],
        ["Second order", "1/[A]<sub>t</sub> − 1/[A]<sub>0</sub> = kt"],
        ["Arrhenius", "k = Ae<sup>−E<sub>a</sub>/RT</sup>; ln k = −(E<sub>a</sub>/R)(1/T) + ln A"],
      ]) +
      "<h4>Thermochemistry</h4>" +
      table([
        ["Heat", "q = mcΔT; q = C<sub>cal</sub>ΔT"],
        ["Enthalpy of reaction", "ΔH° = ΣΔH<sub>f</sub>°(products) − ΣΔH<sub>f</sub>°(reactants)"],
        ["Bond enthalpies", "ΔH ≈ Σ(bonds broken) − Σ(bonds formed)"],
        ["Entropy", "ΔS° = ΣS°(products) − ΣS°(reactants)"],
        ["Gibbs free energy", "ΔG° = ΔH° − TΔS° = −RT ln K = −nFE°"],
        ["Free energy at any Q", "ΔG = ΔG° + RT ln Q"],
      ]),
  },
  {
    title: "Equilibrium & electrochem",
    html:
      "<h4>Equilibrium and acids/bases</h4>" +
      table([
        ["Equilibrium constant", "For aA + bB ⇌ cC + dD: K = [C]<sup>c</sup>[D]<sup>d</sup>/([A]<sup>a</sup>[B]<sup>b</sup>)"],
        ["K<sub>p</sub> and K<sub>c</sub>", "K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup>"],
        ["pH and pOH", "pH = −log[H<sup>+</sup>]; pOH = −log[OH<sup>−</sup>]; pH + pOH = 14.00 (25 °C)"],
        ["Water", "K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = K<sub>a</sub> × K<sub>b</sub>"],
        ["Henderson–Hasselbalch", "pH = pK<sub>a</sub> + log([A<sup>−</sup>]/[HA])"],
        ["pK<sub>a</sub>", "pK<sub>a</sub> = −log K<sub>a</sub>"],
      ]) +
      "<h4>Electrochemistry</h4>" +
      table([
        ["Cell potential", "E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>"],
        ["Nernst equation (25 °C)", "E = E° − (0.0592/n) log Q"],
        ["Relation to K", "log K = nE°/0.0592 (25 °C)"],
        ["Current and charge", "I = q/t; moles of e<sup>−</sup> = q/F"],
      ]),
  },
];

export default REFERENCE;
