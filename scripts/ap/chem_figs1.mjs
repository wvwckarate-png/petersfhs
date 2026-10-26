import { C, svg, text, line, circle, rect, path, defs, arrow } from "./lib.mjs";
export const FIGS = {};
const BLUE = "#2E6BC6", RED = "#D2451E", GREEN = "#2E7D32", NOTE = { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 };
const axes = (x0, y0, w, h, xl, yl) => line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + text(x0 + w / 2, y0 + 32, xl, { size: 12, weight: "bold" }) + text(x0 - 34, y0 - h / 2, yl, { size: 12, weight: "bold", rotate: -90 });
const pill = (x, y, w, h, fill, lab, o = {}) => rect(x, y, w, h, { fill, stroke: "#777", rx: 10 }) + text(x + w / 2, y + h / 2 + 5, lab, { size: o.size || 13, weight: "bold", fill: o.fill });

// ---- mole map ----
{
  let s = defs + text(380, 22, "Molar mass and Avogadro's number: the two bridges from the lab bench to particles", { size: 15, weight: "bold" });
  s += pill(20, 80, 140, 70, "#e6eef9", "mass (g)\nyou can weigh it") .replace(/<text/, "<text");
  s += pill(310, 80, 140, 70, "#fbf0d4", "amount (mol)\nthe central unit");
  s += pill(600, 80, 140, 70, "#e1f0dc", "particles\n(atoms, molecules)");
  s += arrow(162, 100, 308, 100, { w: 2.5 }) + text(235, 92, "÷ molar mass (g/mol)", { size: 11, fill: C.muted }) + arrow(308, 132, 162, 132, { w: 2.5, stroke: C.red, marker: "ahr" }) + text(235, 150, "× molar mass (g/mol)", { size: 11.5, fill: C.red });
  s += arrow(452, 100, 598, 100, { w: 2.5 }) + text(525, 92, "× 6.022×10²³ per mol", { size: 11.5, fill: C.muted }) + arrow(598, 132, 452, 132, { w: 2.5, stroke: C.red, marker: "ahr" }) + text(525, 150, "÷ 6.022×10²³ per mol", { size: 11.5, fill: C.red });
  s += rect(60, 180, 640, 60, NOTE) + text(380, 204, "Grams and particle counts never convert directly. Always go through moles.", { size: 13, weight: "bold" }) + text(380, 226, "Atoms in a molecule: multiply by the subscript, e.g. 1 mol of a molecule with 3 oxygens holds 3 mol of O atoms.", { size: 12 });
  FIGS["mole-map"] = { svg: svg(760, 258, s, "Conversion map between grams, moles, and number of particles"), caption: "Moles are the hub. Molar mass converts grams ↔ moles; Avogadro's number converts moles ↔ particles." };
}
// ---- electron configuration / orbital filling ----
{
  let s = defs + text(380, 22, "Orbital energy order and filling rules (Aufbau, Pauli, Hund)", { size: 16, weight: "bold" });
  const levels = [["1s", 1, 0], ["2s", 1, 1], ["2p", 3, 2], ["3s", 1, 3], ["3p", 3, 4], ["4s", 1, 5], ["3d", 5, 6], ["4p", 3, 7]];
  const yb = 250;
  s += arrow(34, yb + 4, 34, 52, { w: 2 }) + text(20, 150, "energy", { size: 12, weight: "bold", rotate: -90 });
  levels.forEach(([n, k, i]) => { const y = yb - i * 26; for (let b = 0; b < k; b++) s += rect(60 + b * 28, y - 16, 24, 18, { fill: "#fff", stroke: "#777", rx: 2 }); s += text(60 + k * 28 + 14, y - 2, n, { size: 13, weight: "bold", anchor: "start" }); });
  s += text(160, 272, "4s fills BEFORE 3d (and empties first)", { size: 11.5, fill: C.red, weight: "bold" });
  // rules
  s += rect(330, 50, 410, 196, NOTE);
  s += text(535, 74, "Three rules for filling boxes", { size: 13, weight: "bold" });
  s += text(345, 100, "Aufbau", { size: 12.5, weight: "bold", anchor: "start", fill: BLUE }) + text(430, 100, "fill the lowest-energy orbital first", { size: 12, anchor: "start" });
  s += text(345, 126, "Pauli", { size: 12.5, weight: "bold", anchor: "start", fill: BLUE }) + text(430, 126, "max 2 electrons per orbital, opposite spins", { size: 12, anchor: "start" });
  s += text(345, 152, "Hund", { size: 12.5, weight: "bold", anchor: "start", fill: BLUE }) + text(430, 152, "equal-energy orbitals: one electron in each\nbox (same spin) before any pairing", { size: 12, anchor: "start" });
  // nitrogen 2p example
  s += text(345, 200, "2p³ (nitrogen):", { size: 12, anchor: "start", weight: "bold" });
  [0, 1, 2].forEach((b) => s += rect(470 + b * 34, 184, 30, 26, { fill: "#fff", stroke: "#777", rx: 2 }) + text(485 + b * 34, 204, "↑", { size: 18, weight: "bold", fill: GREEN }));
  s += text(590, 202, "✓ Hund's rule", { size: 12, anchor: "start", fill: GREEN, weight: "bold" });
  s += text(345, 232, "✗ ↑↓  ↑   _  (pairing while an empty box remains)", { size: 12, anchor: "start", fill: RED });
  FIGS["orbital-filling"] = { svg: svg(760, 286, s, "Orbital energy ordering and orbital box diagrams illustrating Aufbau, Pauli and Hund rules"), caption: "Energy order of subshells (note 4s below 3d) and the three filling rules. Equal-energy orbitals each get one electron before any pair up." };
}
// ---- potential energy vs internuclear distance ----
{
  let s = defs + text(380, 22, "Potential energy of two bonded atoms vs. distance between nuclei", { size: 15, weight: "bold" });
  const x0 = 80, y0 = 230, w = 420, h = 190;
  s += axes(x0, y0, w, h, "internuclear distance", "potential energy");
  s += line(x0, y0 - 96, x0 + w, y0 - 96, { stroke: "#aaa", w: 1.2, dash: "4 4" }) + text(x0 + w - 4, y0 - 102, "0 (separated atoms)", { size: 10.5, fill: C.muted, anchor: "end" });
  s += path(`M ${x0 + 40} ${y0 - 180} C ${x0 + 70} ${y0 - 30}, ${x0 + 100} ${y0 - 6}, ${x0 + 130} ${y0 - 6} C ${x0 + 230} ${y0 - 6}, ${x0 + 300} ${y0 - 80}, ${x0 + w - 6} ${y0 - 94}`, { stroke: BLUE, w: 3.5 });
  s += line(x0 + 130, y0, x0 + 130, y0 + 4, { stroke: C.ink }) + line(x0 + 130, y0 - 6, x0 + 130, y0 + 10, { stroke: RED, w: 1.5, dash: "3 3" }) + text(x0 + 130, y0 + 54, "bond length", { size: 12, weight: "bold", fill: RED }) + text(x0 + 130, y0 + 42, "▲", { size: 8, fill: RED });
  s += line(x0 + 144, y0 - 94, x0 + 144, y0 - 8, { stroke: GREEN, w: 2, marker: "ahg" }) + line(x0 + 144, y0 - 8, x0 + 144, y0 - 94, { stroke: GREEN, w: 2, marker: "ahg" }) + text(x0 + 154, y0 - 52, "bond energy\n(depth of well)", { size: 12, weight: "bold", fill: GREEN, anchor: "start" });
  s += text(x0 + 100, y0 - 150, "too close:\nnuclei repel", { size: 11.5, fill: C.muted, anchor: "start" }) + text(0,0,"", { size: 11.5, fill: C.muted }) + text(x0 + 330, y0 - 40, "farther apart:\nattraction weakens", { size: 11.5, fill: C.muted });
  s += rect(530, 60, 210, 140, NOTE) + text(635, 84, "Reading the curve", { size: 13, weight: "bold" }) + text(635, 108, "Lowest point = most stable\nspacing = the bond length.\n\nA deeper well = a stronger\nbond. Triple bonds are\nshorter AND deeper.", { size: 12 });
  FIGS["bond-pe-curve"] = { svg: svg(760, 296, s, "Potential energy curve versus internuclear distance showing bond length and bond energy"), caption: "At the minimum of the curve, attraction and repulsion balance: that distance is the bond length, and the depth of the well is the bond energy (the energy needed to separate the atoms)." };
}
// ---- ionic lattice ----
{
  let s = defs + text(380, 22, "An ionic solid is a 3D lattice, and breaking it requires moving layers past each other", { size: 15, weight: "bold" });
  const lattice = (x0, y0, shift) => { let g = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const dx = (shift && r >= 2) ? 26 : 0; const pos = (r + c) % 2 === 0; g += circle(x0 + c * 36 + dx, y0 + r * 36, pos ? 14 : 10, { fill: pos ? "#6fa6e8" : "#f0a38a", stroke: "#555" }) + text(x0 + c * 36 + dx, y0 + r * 36 + 4, pos ? "+" : "−", { size: 12, weight: "bold" }); } return g; };
  s += text(130, 52, "Intact lattice", { size: 13, weight: "bold" }) + lattice(70, 90, false) + text(130, 250, "each ion is held by several\nneighbors of opposite charge", { size: 11.5, fill: C.muted });
  s += arrow(212, 140, 258, 140, { w: 2.5 }) + text(235, 128, "force", { size: 11.5, fill: C.red });
  s += text(380, 52, "Layer shifted by force", { size: 13, weight: "bold" }) + lattice(310, 90, true) + text(390, 250, "like charges now line up →\nrepulsion → the crystal cracks (brittle)", { size: 11.5, fill: C.red });
  s += rect(520, 56, 220, 190, NOTE) + text(630, 80, "Coulomb's law", { size: 13, weight: "bold" }) + text(630, 106, "F ∝ (q₁ × q₂) / r²", { size: 14, weight: "bold" }) + text(630, 138, "Higher ion charges → stronger\nattraction.\nSmaller ions (shorter r) →\nstronger attraction.", { size: 12 }) + text(630, 206, "Stronger lattice → higher melting\npoint and larger lattice energy.", { size: 12, weight: "bold", fill: GREEN });
  FIGS["ionic-lattice"] = { svg: svg(760, 276, s, "Ionic lattice before and after a layer is shifted, plus Coulomb's law"), caption: "Ions sit in an alternating lattice. Shifting a layer lines up like charges, so the crystal shatters. Lattice strength follows Coulomb's law: bigger charges and smaller ions mean stronger attraction." };
}
// ---- metals & alloys ----
{
  let s = defs + text(380, 22, "Metallic bonding and the two kinds of alloy", { size: 16, weight: "bold" });
  const grid = (x0, y0, big, o = {}) => { let g = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const k = r * 4 + c; let R = 13, f = "#c7cdd6", t = "+"; if (o.sub && (k === 5 || k === 10)) { R = 15; f = "#e8a33a"; t = ""; } g += circle(x0 + c * 34, y0 + r * 34, R, { fill: f, stroke: "#555" }) + text(x0 + c * 34, y0 + r * 34 + 4, t, { size: 12, weight: "bold" }); } if (o.int) [[0, 0], [1, 1], [2, 1]].forEach(([a, b]) => g += circle(x0 + a * 34 + 17 + 34 * b * 0, y0 + 17 + (b ? 34 * b : 0) + 34 * (a ? 0 : 0), 5, { fill: "#222", stroke: "#000" })); return g; };
  // sea of electrons
  s += text(130, 50, "Metallic bonding", { size: 13, weight: "bold" }) + grid(70, 90, false);
  for (let i = 0; i < 22; i++) { const ex = 62 + (i * 37) % 132, ey = 82 + (i * 53) % 112; s += circle(ex, ey, 2.6, { fill: BLUE }); }
  s += text(130, 232, "+ metal cations in a 'sea' of\nmobile valence electrons (blue)", { size: 11.5, fill: C.muted });
  s += line(250, 44, 250, 252, { stroke: C.line, w: 1.5 });
  s += text(375, 50, "Substitutional alloy", { size: 13, weight: "bold" }) + grid(320, 90, false, { sub: true }) + text(375, 232, "similar-size atoms swap places\nin the lattice (e.g. brass)", { size: 11.5, fill: C.muted });
  s += line(500, 44, 500, 252, { stroke: C.line, w: 1.5 });
  s += text(625, 50, "Interstitial alloy", { size: 13, weight: "bold" }) + grid(570, 90, false);
  [[587, 107], [621, 141], [655, 107], [587, 175], [655, 175]].forEach(([x, y]) => s += circle(x, y, 5, { fill: "#222", stroke: "#000" }));
  s += text(625, 232, "small atoms (black) fit in the\ngaps between large ones (e.g. steel)", { size: 11.5, fill: C.muted });
  s += text(380, 270, "Both alloy types block layers from sliding easily, which makes alloys harder than the pure metal.", { size: 12.5, weight: "bold" });
  FIGS["metals-alloys"] = { svg: svg(760, 288, s, "Sea of electrons model, a substitutional alloy and an interstitial alloy"), caption: "Metallic bonding is a lattice of cations in a sea of delocalized electrons. In a substitutional alloy similar-sized atoms swap places; in an interstitial alloy small atoms fill the gaps between larger ones." };
}
// ---- IMF ladder ----
{
  let s = defs + text(380, 22, "Intermolecular forces: what each one looks like", { size: 16, weight: "bold" });
  const mol = (x, y, a, b, charges) => circle(x, y, 17, { fill: "#f4efe0", stroke: "#777" }) + circle(x + 28, y, 12, { fill: "#fff", stroke: "#777" }) + text(x, y + 5, a, { size: 12, weight: "bold" }) + text(x + 28, y + 4, b, { size: 11, weight: "bold" });
  // LDF
  s += rect(20, 44, 232, 200, { fill: "#fff", stroke: "#ddd", rx: 10 }) + text(136, 66, "London dispersion", { size: 13, weight: "bold", fill: BLUE });
  s += `<ellipse cx="80" cy="130" rx="26" ry="26" fill="#f4efe0" stroke="#777"/>` + circle(70, 130, 7, { fill: "#6fa6e8" }) + text(80, 175, "δ−  δ+", { size: 11 }) + `<ellipse cx="170" cy="130" rx="26" ry="26" fill="#f4efe0" stroke="#777"/>` + circle(182, 130, 7, { fill: "#6fa6e8" }) + text(170, 175, "δ+  δ−", { size: 11 });
  s += text(125, 134, "⟷", { size: 14, fill: C.muted }) + text(136, 204, "all molecules; temporary\ninduced dipoles; grows with\nelectron cloud size", { size: 11.5, fill: C.muted });
  // dipole-dipole
  s += rect(264, 44, 232, 200, { fill: "#fff", stroke: "#ddd", rx: 10 }) + text(380, 66, "Dipole–dipole", { size: 13, weight: "bold", fill: BLUE });
  s += `<ellipse cx="320" cy="130" rx="26" ry="26" fill="#f4efe0" stroke="#777"/>` + text(310, 134, "δ+", { size: 11, fill: C.red, weight: "bold" }) + text(332, 134, "δ−", { size: 11, fill: BLUE, weight: "bold" }) + `<ellipse cx="424" cy="130" rx="26" ry="26" fill="#f4efe0" stroke="#777"/>` + text(414, 134, "δ+", { size: 11, fill: C.red, weight: "bold" }) + text(436, 134, "δ−", { size: 11, fill: BLUE, weight: "bold" });
  s += line(346, 130, 398, 130, { stroke: GREEN, w: 2, dash: "4 3" }) + text(380, 204, "polar molecules; δ+ end of\none attracts δ− end of next", { size: 11.5, fill: C.muted });
  // hydrogen bond
  s += rect(508, 44, 232, 200, { fill: "#fff", stroke: "#ddd", rx: 10 }) + text(624, 66, "Hydrogen bonding", { size: 13, weight: "bold", fill: BLUE });
  s += circle(556, 130, 14, { fill: "#f0a38a", stroke: "#555" }) + text(556, 135, "O", { size: 12, weight: "bold" }) + circle(582, 112, 8, { fill: "#fff", stroke: "#555" }) + text(582, 116, "H", { size: 10, weight: "bold" }) + circle(610, 130, 14, { fill: "#f0a38a", stroke: "#555" }) + text(610, 135, "O", { size: 12, weight: "bold" }) + line(556, 130, 574, 118, { w: 2 });
  s += line(590, 118, 600, 124, { stroke: GREEN, w: 2.5, dash: "3 3" }) + circle(670, 130, 14, { fill: "#a9c8f0", stroke: "#555" }) + text(670, 135, "N", { size: 12, weight: "bold" });
  s += text(624, 204, "H bonded to N, O, or F\nattracted to a lone pair on\nanother N, O, or F", { size: 11.5, fill: C.muted });
  s += arrow(60, 262, 700, 262, { w: 2.5 }) + text(380, 282, "typical strength: weakest ────────────────→ strongest of the three", { size: 12, weight: "bold" });
  FIGS["imf-types"] = { svg: svg(760, 296, s, "Three types of intermolecular force: London dispersion, dipole-dipole and hydrogen bonding"), caption: "London dispersion acts in every substance; dipole–dipole needs permanent polarity; hydrogen bonding needs H attached to N, O, or F. Compare molecules by checking for each force, then by size." };
}
// ---- gas law graphs ----
{
  let s = defs + text(380, 22, "Gas law relationships (Kelvin temperature only)", { size: 16, weight: "bold" });
  const panel = (x0, title, xl, yl, kind, note) => {
    const w = 190, h = 140, y0 = 190; let g = text(x0 + w / 2 + 10, 52, title, { size: 13, weight: "bold", fill: BLUE });
    g += line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + text(x0 + w / 2, y0 + 20, xl, { size: 11.5, weight: "bold" }) + text(x0 - 12, y0 - h / 2, yl, { size: 11.5, weight: "bold", rotate: -90 });
    if (kind === "inv") { let d = ""; for (let i = 0; i <= 40; i++) { const v = 0.12 + i / 40 * 0.88; d += (i ? " L " : "M ") + (x0 + v * w) + " " + (y0 - (0.12 / v) * h * 0.9); } g += path(d, { stroke: RED, w: 3 }); }
    else g += line(x0, y0, x0 + w, y0 - h + 10, { stroke: RED, w: 3 });
    if (kind === "lin0") g += circle(x0, y0, 3, { fill: C.ink });
    return g + text(x0 + w / 2 + 6, y0 + 44, note, { size: 11.5, fill: C.muted });
  };
  s += panel(60, "Boyle's law", "volume V", "pressure P", "inv", "P and V inversely related\n(T, n constant): PV = constant");
  s += panel(300, "Charles's law", "temperature T (K)", "volume V", "lin0", "V ∝ T, line passes through\nthe origin on a Kelvin axis");
  s += panel(540, "Gay-Lussac's law", "temperature T (K)", "pressure P", "lin0", "P ∝ T at constant V and n");
  FIGS["gas-law-graphs"] = { svg: svg(760, 262, s, "Graphs of Boyle's, Charles's and Gay-Lussac's gas laws"), caption: "Each named gas law is PV = nRT with two variables held constant. Boyle's gives an inverse curve; Charles's and Gay-Lussac's give straight lines through the origin when T is in kelvins." };
}
// ---- photoelectric ----
{
  let s = defs + text(380, 22, "Photoelectric effect: only photon frequency (energy) matters, not intensity", { size: 15, weight: "bold" });
  const x0 = 80, y0 = 230, w = 330, h = 170;
  s += axes(x0, y0, w, h, "frequency of light (ν)", "KE of ejected electrons");
  s += line(x0 + 110, y0, x0 + w - 10, y0 - 140, { stroke: BLUE, w: 3.5 }) + line(x0 + 10, y0, x0 + 110, y0, { stroke: BLUE, w: 3.5 }) + circle(x0 + 110, y0, 4, { fill: RED });
  s += text(x0 + 110, y0 + 52, "threshold ν₀", { size: 12, weight: "bold", fill: RED }) + text(x0 + 60, y0 - 30, "no electrons\nejected", { size: 11, fill: C.muted }) + text(x0 + 250, y0 - 50, "slope = h", { size: 12, weight: "bold", fill: BLUE });
  s += rect(440, 54, 300, 90, NOTE) + text(590, 78, "Per photon:  E = hν", { size: 13, weight: "bold" }) + text(590, 102, "KE(max) = hν − hν₀", { size: 13 }) + text(590, 126, "(extra photon energy beyond what\nfrees the electron becomes KE)", { size: 11.5, fill: C.muted });
  s += rect(440, 158, 300, 84, { fill: "#fff", stroke: "#ddd", rx: 10 }) + text(590, 182, "Brighter light, below ν₀ → still no electrons", { size: 12, weight: "bold", fill: C.red }) + text(590, 204, "Brighter light, above ν₀ → MORE electrons,", { size: 12 }) + text(590, 222, "but each with the same maximum KE", { size: 12 });
  FIGS["photoelectric"] = { svg: svg(760, 296, s, "Graph of kinetic energy of ejected electrons versus light frequency with a threshold frequency"), caption: "Below the threshold frequency no electrons are ejected, no matter how intense the light. Above it, maximum kinetic energy rises linearly with frequency. Intensity changes only how many electrons come out." };
}
// ---- Beer-Lambert ----
{
  let s = defs + text(380, 22, "Beer-Lambert law: absorbance is proportional to concentration", { size: 16, weight: "bold" });
  s += rect(60, 90, 60, 60, { fill: "#fff7cc", stroke: "#b08d1a", rx: 4 }) + text(90, 124, "light\nsource", { size: 11 });
  s += arrow(122, 120, 168, 120, { w: 3, stroke: GREEN, marker: "ahg" }) + text(145, 108, "I₀", { size: 13, weight: "bold" });
  s += rect(170, 70, 90, 100, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 3 }) + text(215, 124, "sample", { size: 11.5 }) + line(172, 182, 258, 182, { stroke: C.ink, w: 1.5 }) + text(215, 198, "path length b", { size: 11.5, weight: "bold" });
  s += arrow(262, 120, 308, 120, { w: 1.8, stroke: GREEN, marker: "ahg" }) + text(285, 108, "I", { size: 13, weight: "bold" }) + rect(310, 90, 50, 60, { fill: "#eee", stroke: "#777", rx: 4 }) + text(335, 124, "detector", { size: 10.5 });
  s += text(210, 235, "A = −log(I / I₀)  ·  A = ε b c", { size: 13, weight: "bold" });
  const x0 = 450, y0 = 210, w = 260, h = 140;
  s += axes(x0, y0, w, h, "concentration c", "absorbance A") + line(x0, y0, x0 + w - 10, y0 - h + 20, { stroke: BLUE, w: 3.5 });
  [0.2, .45, .7, .92].forEach((f) => s += circle(x0 + f * (w - 10), y0 - f * (h - 20) + (f === .45 ? 5 : -3), 4.5, { fill: RED }));
  s += text(x0 + 60, y0 - 80, "calibration curve:\nslope = ε b", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  s += text(380, 270, "Measure A of an unknown, then read its concentration off the straight line.", { size: 12.5, weight: "bold" });
  FIGS["beer-lambert"] = { svg: svg(760, 286, s, "Spectrophotometer schematic and a linear calibration curve of absorbance versus concentration"), caption: "Light of intensity I₀ passes through a sample of path length b; the detector measures I. Absorbance is linear in concentration, so a calibration curve lets you find an unknown." };
}
// ---- net ionic particle picture ----
{
  let s = defs + text(380, 22, "Spectator ions: which particles actually react?", { size: 16, weight: "bold" });
  s += text(380, 50, "CuSO₄(aq) + 2 NaOH(aq) → Cu(OH)₂(s) + Na₂SO₄(aq)", { size: 13, weight: "bold" });
  const ion = (x, y, l, col) => circle(x, y, 14, { fill: col, stroke: "#555" }) + text(x, y + 4, l, { size: 11, weight: "bold" });
  s += rect(30, 70, 300, 150, { fill: "#fff", stroke: "#ddd" }) + text(180, 90, "BEFORE (all dissolved)", { size: 12, weight: "bold" });
  [[60, 120, "Cu²⁺", "#6fa6e8"], [150, 150, "SO₄²⁻", "#f0a38a"], [240, 120, "Na⁺", "#c8d8a8"], [90, 185, "OH⁻", "#f0d38a"], [210, 190, "OH⁻", "#f0d38a"], [290, 160, "Na⁺", "#c8d8a8"]].forEach(([x, y, l, c]) => s += ion(x, y, l, c));
  s += arrow(335, 145, 395, 145, { w: 2.5 });
  s += rect(400, 70, 330, 150, { fill: "#fff", stroke: "#ddd" }) + text(565, 90, "AFTER", { size: 12, weight: "bold" });
  s += rect(430, 150, 80, 50, { fill: "#a9c8f0", stroke: "#555", rx: 6 }) + text(470, 180, "Cu(OH)₂(s)", { size: 11.5, weight: "bold" });
  [[560, 120, "SO₄²⁻", "#f0a38a"], [650, 120, "Na⁺", "#c8d8a8"], [600, 175, "Na⁺", "#c8d8a8"], [690, 175, "Na⁺", "#c8d8a8"]].forEach(([x, y, l, c]) => s += ion(x, y, l, c));
  s += rect(40, 240, 680, 50, NOTE) + text(380, 262, "Na⁺ and SO₄²⁻ look the same before and after: they are the spectators.", { size: 12.5 }) + text(380, 282, "Net ionic equation:  Cu²⁺(aq) + 2 OH⁻(aq) → Cu(OH)₂(s)", { size: 13, weight: "bold" });
  FIGS["net-ionic"] = { svg: svg(760, 306, s, "Particle picture of a precipitation reaction showing spectator ions"), caption: "Ions that stay dissolved and unchanged are spectator ions. Cancel them to get the net ionic equation, which shows only the particles that actually react." };
}
// ---- redox electron transfer ----
{
  let s = defs + text(380, 22, "Redox: electrons move from the species oxidized to the species reduced", { size: 15, weight: "bold" });
  s += pill(60, 70, 190, 80, "#f4e1da", "Mg(s)\noxidation # = 0") + pill(510, 70, 190, 80, "#dfe9f7", "Cu²⁺(aq)\noxidation # = +2");
  s += arrow(252, 110, 508, 110, { w: 3, stroke: RED, marker: "ahr" }) + text(380, 100, "2 e⁻ transferred", { size: 13, weight: "bold", fill: RED });
  s += pill(60, 190, 190, 60, "#f4e1da", "Mg²⁺   (now +2)") + pill(510, 190, 190, 60, "#dfe9f7", "Cu(s)   (now 0)");
  s += arrow(155, 152, 155, 188, { w: 2 }) + arrow(605, 152, 605, 188, { w: 2 });
  s += text(155, 276, "LOSES e⁻ → OXIDIZED\nis the reducing agent", { size: 12, weight: "bold", fill: RED }) + text(605, 276, "GAINS e⁻ → REDUCED\nis the oxidizing agent", { size: 12, weight: "bold", fill: BLUE });
  s += rect(300, 180, 160, 80, NOTE) + text(380, 204, "OIL RIG", { size: 15, weight: "bold" }) + text(380, 226, "Oxidation Is Loss\nReduction Is Gain", { size: 12 });
  FIGS["redox-transfer"] = { svg: svg(760, 316, s, "Electron transfer from magnesium to copper(II) showing oxidation and reduction"), caption: "The species that loses electrons is oxidized (and acts as the reducing agent); the species that gains electrons is reduced (and acts as the oxidizing agent). Oxidation numbers track the change." };
}
// ---- integrated rate laws ----
{
  let s = defs + text(380, 22, "How concentration changes over time, and the plot that straightens it", { size: 15, weight: "bold" });
  const panel = (x0, title, order, yl, f, note, lin) => {
    const w = 190, h = 130, y0 = 180; let g = text(x0 + w / 2, 50, title, { size: 13, weight: "bold", fill: BLUE });
    g += line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + text(x0 + w / 2, y0 + 18, "time", { size: 11.5, weight: "bold" }) + text(x0 - 12, y0 - h / 2, yl, { size: 11, weight: "bold", rotate: -90 });
    let d = ""; for (let i = 0; i <= 40; i++) { const t = i / 40; d += (i ? " L " : "M ") + (x0 + t * w) + " " + (y0 - f(t) * h); } g += path(d, { stroke: RED, w: 3 });
    return g + text(x0 + w / 2, y0 + 42, note, { size: 11.5, fill: C.muted }) + text(x0 + w / 2, y0 + 78, lin, { size: 12, weight: "bold" });
  };
  s += panel(60, "Zero order", 0, "[A]", (t) => 0.95 - 0.9 * t, "straight line down;\nslope = −k", "linear plot: [A] vs t");
  s += panel(300, "First order", 1, "[A]", (t) => 0.95 * Math.exp(-3 * t), "exponential decay;\nconstant half-life", "linear plot: ln[A] vs t");
  s += panel(540, "Second order", 2, "[A]", (t) => 0.95 / (1 + 7 * t), "slower, longer tail;\nhalf-life lengthens", "linear plot: 1/[A] vs t");
  FIGS["rate-orders"] = { svg: svg(760, 296, s, "Concentration versus time for zero, first and second order reactions"), caption: "Shape of [A] versus t reveals the order. Whichever transformed plot is a straight line tells you the order, and its slope gives k (negative slope = −k for [A] and ln[A]; positive slope = k for 1/[A])." };
}
// ---- catalysis profile ----
{
  let s = defs + text(380, 22, "A catalyst provides a lower-energy pathway", { size: 16, weight: "bold" });
  const x0 = 70, y0 = 240, w = 440, h = 190;
  s += axes(x0, y0, w, h, "reaction progress", "potential energy");
  s += path(`M ${x0 + 10} ${y0 - 80} L ${x0 + 90} ${y0 - 80} C ${x0 + 150} ${y0 - 80}, ${x0 + 160} ${y0 - 170}, ${x0 + 220} ${y0 - 170} C ${x0 + 280} ${y0 - 170}, ${x0 + 290} ${y0 - 40}, ${x0 + 350} ${y0 - 40} L ${x0 + w - 10} ${y0 - 40}`, { stroke: RED, w: 3.5 });
  s += path(`M ${x0 + 10} ${y0 - 80} L ${x0 + 90} ${y0 - 80} C ${x0 + 140} ${y0 - 80}, ${x0 + 160} ${y0 - 122}, ${x0 + 220} ${y0 - 122} C ${x0 + 280} ${y0 - 122}, ${x0 + 290} ${y0 - 40}, ${x0 + 350} ${y0 - 40} L ${x0 + w - 10} ${y0 - 40}`, { stroke: BLUE, w: 3.5 });
  s += text(x0 + 330, y0 - 150, "uncatalyzed (higher Eₐ)", { size: 12, weight: "bold", fill: RED }) + text(x0 + 330, y0 - 78, "catalyzed (lower Eₐ)", { size: 12, weight: "bold", fill: BLUE });
  s += line(x0 + 90, y0 - 80, x0 + 90, y0 - 170, { stroke: RED, w: 1.2, dash: "3 3" }) + arrow(x0 + 60, y0 - 80, x0 + 60, y0 - 168, { stroke: RED, marker: "ahr", w: 1.5 }) + text(x0 + 44, y0 - 120, "Eₐ", { size: 12, weight: "bold", fill: RED, anchor: "end" });
  s += arrow(x0 + 392, y0 - 80, x0 + 392, y0 - 42, { stroke: GREEN, marker: "ahg", w: 2 }) + text(x0 + 400, y0 - 60, "ΔH\nsame", { size: 11, fill: GREEN, weight: "bold", anchor: "start" });
  s += rect(550, 58, 190, 180, NOTE) + text(645, 82, "What a catalyst changes", { size: 13, weight: "bold" }) + text(645, 108, "✓ lowers Eₐ (forward AND\n   reverse equally)\n✓ speeds up the rate\n✓ new mechanism\n\n✗ ΔH unchanged\n✗ K unchanged\n✗ not consumed overall", { size: 12 });
  FIGS["catalysis-profile"] = { svg: svg(760, 296, s, "Reaction energy profile with and without a catalyst showing lower activation energy"), caption: "A catalyst gives the reaction a different, lower-Eₐ pathway. Reactants and products sit at the same energies, so ΔH and the equilibrium constant do not change; equilibrium is simply reached faster." };
}
// ---- equilibrium approach ----
{
  let s = defs + text(380, 22, "Approaching equilibrium: rates become equal, concentrations level off", { size: 15, weight: "bold" });
  const x0 = 70, y0 = 230, w = 280, h = 150;
  s += axes(x0, y0, w, h, "time", "concentration") + path(`M ${x0} ${y0 - 140} Q ${x0 + 60} ${y0 - 85} ${x0 + 140} ${y0 - 80} L ${x0 + w} ${y0 - 80}`, { stroke: BLUE, w: 3.5 }) + path(`M ${x0} ${y0 - 6} Q ${x0 + 60} ${y0 - 55} ${x0 + 140} ${y0 - 62} L ${x0 + w} ${y0 - 62}`, { stroke: RED, w: 3.5 });
  s += line(x0 + 140, y0, x0 + 140, y0 - h, { stroke: "#999", w: 1.5, dash: "4 4" }) + text(x0 + 140, y0 - h - 6, "equilibrium reached", { size: 11.5, weight: "bold" });
  s += text(x0 + 220, y0 - 92, "reactants", { size: 12, weight: "bold", fill: BLUE }) + text(x0 + 220, y0 - 46, "products", { size: 12, weight: "bold", fill: RED });
  const x1 = 440, w1 = 280;
  s += axes(x1, y0, w1, h, "time", "reaction rate") + path(`M ${x1} ${y0 - 140} Q ${x1 + 60} ${y0 - 80} ${x1 + 140} ${y0 - 72} L ${x1 + w1} ${y0 - 72}`, { stroke: BLUE, w: 3.5 }) + path(`M ${x1} ${y0 - 4} Q ${x1 + 60} ${y0 - 55} ${x1 + 140} ${y0 - 68} L ${x1 + w1} ${y0 - 72}`, { stroke: RED, w: 3.5, dash: "7 4" });
  s += line(x1 + 140, y0, x1 + 140, y0 - h, { stroke: "#999", w: 1.5, dash: "4 4" }) + text(x1 + 215, y0 - 100, "forward rate\n= reverse rate", { size: 12, weight: "bold", fill: GREEN });
  s += text(380, 292, "Concentrations are CONSTANT at equilibrium, not necessarily EQUAL, and both reactions are still running.", { size: 12.5, weight: "bold" });
  FIGS["equilibrium-approach"] = { svg: svg(760, 306, s, "Concentration and rate versus time as a reversible reaction reaches equilibrium"), caption: "Left: reactant and product concentrations level off. Right: the forward rate falls and the reverse rate rises until they are equal. Equilibrium is dynamic: nothing stops, nothing changes." };
}
// ---- Le Chatelier ----
{
  let s = defs + text(380, 22, "Le Chatelier: concentration vs. time after a stress is applied", { size: 15, weight: "bold" });
  const x0 = 70, y0 = 230, w = 400, h = 160;
  s += axes(x0, y0, w, h, "time", "concentration");
  s += path(`M ${x0} ${y0 - 100} L ${x0 + 140} ${y0 - 100} L ${x0 + 140} ${y0 - 150} Q ${x0 + 190} ${y0 - 120} ${x0 + 250} ${y0 - 112} L ${x0 + w} ${y0 - 110}`, { stroke: BLUE, w: 3.5 }) + path(`M ${x0} ${y0 - 60} L ${x0 + 140} ${y0 - 60} Q ${x0 + 190} ${y0 - 76} ${x0 + 250} ${y0 - 84} L ${x0 + w} ${y0 - 86}`, { stroke: RED, w: 3.5 });
  s += line(x0 + 140, y0, x0 + 140, y0 - h, { stroke: C.red, w: 1.5, dash: "4 4" }) + text(x0 + 140, y0 - h - 6, "reactant added", { size: 11.5, weight: "bold", fill: C.red });
  s += text(x0 + 330, y0 - 124, "reactant", { size: 12, weight: "bold", fill: BLUE }) + text(x0 + 330, y0 - 64, "product", { size: 12, weight: "bold", fill: RED });
  s += rect(510, 52, 232, 196, NOTE) + text(626, 76, "What the graph shows", { size: 13, weight: "bold" }) + text(626, 102, "1. Sudden jump (vertical line):\n    the stress itself\n2. Reactant falls, product rises:\n    the system shifts forward\n3. A new equilibrium forms;\n    K is unchanged (only\n    temperature changes K)", { size: 11.5, anchor: "middle" });
  FIGS["le-chatelier"] = { svg: svg(760, 296, s, "Concentration versus time after adding reactant, showing the shift toward products"), caption: "A stress appears as an instant change in one concentration. The system then shifts to partially offset it and settles at a new equilibrium with the same K." };
}
// ---- buffer particulate ----
{
  let s = defs + text(380, 22, "How a buffer neutralizes added acid or base", { size: 16, weight: "bold" });
  const sp = (x, y, l, c) => circle(x, y, 13, { fill: c, stroke: "#555" }) + text(x, y + 4, l, { size: 10, weight: "bold" });
  s += rect(30, 50, 210, 130, { fill: "#fff", stroke: "#ddd" }) + text(135, 70, "Buffer: HA and A⁻ both present", { size: 12, weight: "bold" });
  [[60, 100], [110, 125], [160, 100], [200, 130]].forEach(([x, y]) => s += sp(x, y, "HA", "#f0d38a")); [[85, 150], [140, 155], [190, 100]].forEach(([x, y]) => s += sp(x, y, "A⁻", "#9fd0e8"));
  s += text(380, 98, "add strong acid (H₃O⁺)", { size: 12, weight: "bold", fill: C.red }) + text(380, 118, "A⁻ + H₃O⁺ → HA + H₂O", { size: 12.5, weight: "bold" }) + text(380, 140, "the conjugate base consumes it", { size: 11.5, fill: C.muted }) + arrow(246, 112, 290, 112, { w: 2 }) + arrow(470, 112, 506, 112, { w: 2 });
  s += rect(510, 50, 220, 130, { fill: "#fff", stroke: "#ddd" }) + text(620, 70, "pH changes only slightly", { size: 12, weight: "bold" });
  [[540, 100], [580, 125], [630, 100], [680, 130], [700, 100]].forEach(([x, y]) => s += sp(x, y, "HA", "#f0d38a")); [[560, 152], [620, 156]].forEach(([x, y]) => s += sp(x, y, "A⁻", "#9fd0e8"));
  s += text(380, 210, "add strong base (OH⁻):   HA + OH⁻ → A⁻ + H₂O   (the weak acid consumes it)", { size: 12.5, weight: "bold", fill: BLUE });
  s += rect(80, 230, 600, 40, NOTE) + text(380, 255, "Buffers need a weak acid AND its conjugate base. Best when [HA] ≈ [A⁻], i.e. pH ≈ pKa.", { size: 12.5, weight: "bold" });
  FIGS["buffer-particulate"] = { svg: svg(760, 286, s, "Particle diagram of a buffer absorbing added acid by converting A- to HA"), caption: "Added acid is consumed by the conjugate base A⁻; added base is consumed by the weak acid HA. The ratio [A⁻]/[HA] changes only a little, so pH barely moves." };
}
// ---- entropy microstates ----
{
  let s = defs + text(380, 22, "Entropy: more ways to arrange the particles = higher entropy", { size: 16, weight: "bold" });
  const box = (x, y, pts, lab, sub) => rect(x, y, 150, 100, { fill: "#fff", stroke: "#999", rx: 6 }) + pts.map(([a, b]) => circle(x + a, y + b, 6, { fill: BLUE, stroke: "#235" })).join("") + text(x + 75, y + 122, lab, { size: 12.5, weight: "bold" }) + text(x + 75, y + 140, sub, { size: 11, fill: C.muted });
  s += box(30, 56, [[30, 30], [45, 30], [30, 45], [45, 45], [60, 30], [60, 45]], "solid", "fixed positions, few arrangements");
  s += arrow(184, 106, 226, 106, { w: 2.5 }) + box(230, 56, [[30, 30], [55, 60], [85, 40], [110, 70], [60, 80], [120, 30]], "liquid", "more arrangements");
  s += arrow(384, 106, 426, 106, { w: 2.5 }) + box(430, 56, [[20, 20], [120, 30], [70, 70], [30, 85], [125, 85], [95, 12]], "gas", "most arrangements");
  s += rect(600, 56, 140, 100, NOTE) + text(670, 80, "S increases when:", { size: 12, weight: "bold" }) + text(670, 102, "• solid → liquid → gas\n• more moles of gas\n• dissolving a solid\n• heating", { size: 11.5, anchor: "middle" });
  s += text(380, 240, "S(solid) < S(liquid) << S(gas)   ·   ΔS > 0 means more dispersal of matter and energy", { size: 12.5, weight: "bold" });
  FIGS["entropy-states"] = { svg: svg(760, 258, s, "Particle arrangements in solid, liquid and gas showing increasing entropy"), caption: "Entropy counts the number of ways matter and energy can be arranged. Going from solid to liquid to gas gives particles many more possible positions, so S rises sharply, especially for gas formation." };
}
