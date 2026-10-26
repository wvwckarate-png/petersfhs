import { C, svg, text, line, circle, rect, path, defs, arrow } from "./lib.mjs";
export const FIGS = {};
const cube = (x, y, s, fill) => { const d = s * 0.45; return `<polygon points="${x},${y} ${x + s},${y} ${x + s},${y + s} ${x},${y + s}" fill="${fill}" stroke="#555" stroke-width="2"/><polygon points="${x},${y} ${x + d},${y - d} ${x + s + d},${y - d} ${x + s},${y}" fill="${fill}" stroke="#555" stroke-width="2" opacity=".75"/><polygon points="${x + s},${y} ${x + s + d},${y - d} ${x + s + d},${y + s - d} ${x + s},${y + s}" fill="${fill}" stroke="#555" stroke-width="2" opacity=".55"/>`; };
// ---- surface area to volume ----
{
  let s = defs + text(380, 24, "Bigger cube, smaller surface-area-to-volume ratio", { size: 16, weight: "bold" });
  const unit = 34, base = 190, cxs = [300, 450, 600];
  [[1, "#cfe0f7"], [2, "#bcd5f2"], [3, "#a9caee"]].forEach(([side, fill], i) => { const sz = side * unit; s += cube(cxs[i] - sz / 2, base - sz, sz, fill); s += text(cxs[i], base + 22, `side = ${side} μm`, { size: 13, weight: "bold" }); });
  const rows = [["Surface area (6s²)", "6 μm²", "24 μm²", "54 μm²"], ["Volume (s³)", "1 μm³", "8 μm³", "27 μm³"], ["SA : V", "6 : 1", "3 : 1", "2 : 1"]];
  rows.forEach((r, i) => r.forEach((c, j) => { s += text(j === 0 ? 205 : cxs[j - 1], 252 + i * 24, c, { size: 13, weight: (j === 0 || i === 2) ? "bold" : "normal", fill: i === 2 && j > 0 ? C.red : C.ink, anchor: j === 0 ? "end" : "middle" }); }));
  s += text(380, 340, "Triple the side: surface area ×9, volume ×27, so SA : V falls to one-third", { size: 12.5, fill: C.muted });
  FIGS["sa-v-cubes"] = { svg: svg(760, 358, s, "Three cubes of increasing size with their surface area, volume, and ratio"), caption: "As a cell grows, volume (the amount of cell needing service) increases faster than surface area (the membrane that supplies it), so the SA:V ratio falls. This is why cells stay small." };
}
// ---- ATP cycle and energy coupling ----
{
  let s = defs + text(380, 24, "ATP hydrolysis is exergonic; coupling it to an endergonic process makes the pair favorable", { size: 15, weight: "bold" });
  const ph = (x, y, lab, fill = "#f7c9bd") => circle(x, y, 17, { fill, stroke: C.red, w: 2 }) + text(x, y + 5, lab, { size: 13, weight: "bold" });
  s += rect(30, 56, 150, 44, { fill: "#fff3d6", stroke: C.gold, rx: 8 }) + text(105, 83, "adenosine", { size: 14, weight: "bold", fill: "#7a5a00" });
  s += line(180, 78, 193, 78, { w: 3 }) + ph(210, 78, "P") + line(227, 78, 233, 78, { w: 3 }) + ph(250, 78, "P") + line(267, 78, 273, 78, { w: 3 }) + ph(290, 78, "P", "#f0b3a0");
  s += text(105, 122, "ATP: three phosphates\nrepel one another", { size: 12, fill: C.muted });
  s += arrow(105, 150, 105, 196, { w: 3 }) + text(118, 178, "+ H₂O (hydrolysis)", { size: 12.5, anchor: "start" });
  s += rect(30, 210, 150, 44, { fill: "#fff3d6", stroke: C.gold, rx: 8 }) + text(105, 237, "adenosine", { size: 14, weight: "bold", fill: "#7a5a00" });
  s += line(180, 232, 193, 232, { w: 3 }) + ph(210, 232, "P") + line(227, 232, 233, 232, { w: 3 }) + ph(250, 232, "P");
  s += text(230, 268, "ADP", { size: 13, weight: "bold" }) + text(290, 238, "+", { size: 20, weight: "bold" }) + ph(330, 232, "Pi", "#f0b3a0") + text(360, 238, "+ energy", { size: 14, weight: "bold", fill: C.green, anchor: "start" });
  s += line(440, 50, 440, 310, { stroke: C.line, w: 1.5 });
  s += text(590, 56, "Energy coupling", { size: 14, weight: "bold" });
  s += line(470, 76, 470, 250, { w: 2 }) + line(470, 250, 740, 250, { w: 2 }) + text(456, 160, "free energy", { size: 12, rotate: -90 });
  s += line(500, 100, 570, 100, { w: 4, stroke: C.red }) + text(535, 92, "ATP", { size: 12.5, weight: "bold", fill: C.red }) + line(500, 225, 570, 225, { w: 4, stroke: C.red }) + text(535, 242, "ADP + Pi", { size: 12.5, weight: "bold", fill: C.red });
  s += arrow(535, 108, 535, 217, { stroke: C.red, marker: "ahr", w: 3 });
  s += line(640, 190, 710, 190, { w: 4, stroke: C.blue }) + text(675, 207, "reactants", { size: 12.5, weight: "bold", fill: C.blue }) + line(640, 125, 710, 125, { w: 4, stroke: C.blue }) + text(675, 116, "products", { size: 12.5, weight: "bold", fill: C.blue });
  s += arrow(675, 184, 675, 133, { stroke: C.blue, marker: "ahb", w: 3 });
  s += text(600, 276, "red: exergonic    blue: endergonic", { size: 11.5, fill: C.muted }) + text(590, 296, "energy released by ATP → ADP pays for the uphill step", { size: 11.5, weight: "bold" });
  FIGS["atp-coupling"] = { svg: svg(760, 312, s, "ATP hydrolysis to ADP and phosphate, and an energy diagram showing an exergonic reaction coupled to an endergonic one"), caption: "Hydrolysis of ATP's terminal phosphate releases free energy. Cells couple that exergonic reaction to endergonic ones (active transport, muscle contraction, biosynthesis) so that the combined process is favorable." };
}
// ---- chemiosmosis at the inner mitochondrial membrane ----
{
  let s = defs + text(380, 22, "Electron transport chain and chemiosmosis (inner mitochondrial membrane)", { size: 15, weight: "bold" });
  s += rect(30, 36, 700, 84, { fill: "#fdeee8" }) + text(44, 56, "INTERMEMBRANE SPACE: high [H⁺] (H⁺ builds up here)", { size: 12.5, weight: "bold", fill: C.red, anchor: "start" });
  s += rect(30, 220, 700, 90, { fill: "#eef5fc" }) + text(44, 298, "MITOCHONDRIAL MATRIX: low [H⁺]", { size: 12.5, weight: "bold", fill: C.blue, anchor: "start" });
  s += rect(30, 120, 700, 100, { fill: "#f3ead7", stroke: "#cdb98a", rx: 0 });
  const cx = (x, label) => rect(x, 128, 74, 84, { fill: "#c9b27a", stroke: "#8a6a2a", w: 2, rx: 14 }) + text(x + 37, 170, label, { size: 12.5, weight: "bold" });
  s += cx(70, "Complex\nI") + cx(190, "Complex\nIII") + cx(310, "Complex\nIV");
  s += circle(160, 150, 10, { fill: "#e8c775", stroke: "#8a6a2a" }) + text(160, 154, "Q", { size: 10, weight: "bold" }) + circle(280, 150, 10, { fill: "#e8c775", stroke: "#8a6a2a" }) + text(280, 154, "C", { size: 10, weight: "bold" });
  [103, 223, 343].forEach((x) => { s += arrow(x + 22, 128, x + 22, 82, { stroke: C.red, marker: "ahr", w: 3 }) + text(x + 36, 98, "H⁺", { size: 12, weight: "bold", fill: C.red, anchor: "start" }); });
  s += path("M 110 190 C 130 200 140 200 156 160 M 170 160 C 190 196 200 196 212 190 M 270 160 C 290 196 300 196 332 190", { stroke: C.gold, w: 2.5, dash: "5 4", marker: "aho" });
  s += text(70, 246, "NADH → NAD⁺ + H⁺ + e⁻", { size: 12, anchor: "start", weight: "bold" }) + arrow(100, 238, 100, 214, { w: 2 });
  s += text(300, 262, "½ O₂ + 2 H⁺ + 2 e⁻ → H₂O   (oxygen is the final electron acceptor)", { size: 12, anchor: "start", weight: "bold" }) + arrow(345, 254, 345, 214, { w: 2 });
  s += `<polygon points="560,128 640,128 612,168 588,168" fill="#8ec58f" stroke="#2E7D32" stroke-width="2"/><rect x="588" y="168" width="24" height="20" fill="#8ec58f" stroke="#2E7D32" stroke-width="2"/><rect x="560" y="188" width="80" height="26" rx="12" fill="#a8d9a8" stroke="#2E7D32" stroke-width="2"/>`;
  s += text(600, 205, "ATP synthase", { size: 11, weight: "bold" }) + arrow(600, 62, 600, 124, { stroke: C.red, marker: "ahr", w: 3 }) + text(588, 82, "H⁺ flows back down\nits gradient", { size: 12, anchor: "end", fill: C.red, weight: "bold" });
  s += text(600, 244, "ADP + Pi → ATP", { size: 13, weight: "bold", fill: C.green }) + arrow(600, 216, 600, 232, { stroke: C.green, marker: "ahg", w: 2 });
  FIGS["chemiosmosis"] = { svg: svg(760, 322, s, "Electron transport chain pumping hydrogen ions across the inner mitochondrial membrane and ATP synthase using their flow to make ATP"), caption: "Electrons from NADH pass down the chain, and the energy released pumps H⁺ into the intermembrane space. H⁺ flowing back through ATP synthase powers ATP formation (chemiosmosis). Oxygen only accepts the spent electrons at the end." };
}
// ---- signaling types ----
{
  let s = defs + text(380, 22, "Four distances of cell signaling", { size: 16, weight: "bold" });
  const cell = (x, y, label, fill = "#dbe8f7") => rect(x, y, 70, 46, { fill, stroke: C.blue, w: 2, rx: 22 }) + text(x + 35, y + 28, label, { size: 12, weight: "bold" });
  const dot = (x, y, f = C.orange) => circle(x, y, 4.5, { fill: f });
  // autocrine
  s += text(95, 52, "AUTOCRINE", { size: 13, weight: "bold", fill: C.purple }) + cell(60, 90, "cell") + path("M 82 90 C 60 50 132 50 112 90", { stroke: C.orange, w: 2.5, marker: "aho" }) + text(95, 160, "cell signals itself", { size: 12 });
  // paracrine
  s += text(285, 52, "PARACRINE", { size: 13, weight: "bold", fill: C.purple }) + cell(200, 80, "signal") + cell(310, 80, "target", "#dcefdc");
  s += arrow(272, 103, 308, 103, { stroke: C.orange, marker: "aho", w: 2.5 }) + dot(290, 92) + dot(292, 114) + text(285, 150, "nearby cells", { size: 12 });
  // endocrine
  s += text(530, 52, "ENDOCRINE", { size: 13, weight: "bold", fill: C.purple }) + cell(410, 72, "gland") + cell(640, 72, "target", "#dcefdc");
  s += path("M 480 88 C 520 130 600 130 640 100", { stroke: C.red, w: 5, dash: "10 6", marker: "ahr" }) + text(560, 142, "travels in the bloodstream\n(hormones such as insulin)", { size: 12 });
  // direct contact
  s += text(150, 205, "DIRECT CONTACT", { size: 13, weight: "bold", fill: C.purple }) + cell(60, 220, "cell") + cell(130, 220, "cell", "#dcefdc");
  s += line(130, 232, 130, 258, { stroke: C.orange, w: 5 }) + text(100, 290, "touching cells: gap junctions or\nmembrane-bound ligands", { size: 12 });
  // receptor location
  s += line(330, 190, 330, 312, { stroke: C.line, w: 1.5 });
  s += text(540, 205, "Where does the receptor sit?", { size: 14, weight: "bold" });
  s += rect(350, 222, 180, 82, { fill: "#eef5fc", stroke: C.blue, rx: 8 }) + text(440, 244, "Membrane receptor", { size: 12.5, weight: "bold", fill: C.blue }) + text(440, 264, "large or polar ligand\n(most protein hormones)\ncan't cross the membrane", { size: 11.5 });
  s += rect(545, 222, 190, 82, { fill: "#eef5fc", stroke: C.blue, rx: 8 }) + text(640, 244, "Intracellular receptor", { size: 12.5, weight: "bold", fill: C.blue }) + text(640, 264, "small, nonpolar ligand\n(steroid hormones)\ncrosses the membrane", { size: 11.5 });
  FIGS["signaling-types"] = { svg: svg(760, 322, s, "Autocrine, paracrine, endocrine, and direct-contact signaling, and membrane versus intracellular receptors"), caption: "The four signaling types differ by distance. A ligand's size and polarity decide where its receptor sits: large or polar ligands bind membrane receptors, small nonpolar ligands cross the membrane to bind intracellular receptors." };
}
// ---- cancer genes: gas pedal, brake, two-hit model ----
{
  let s = defs + text(380, 22, "Cancer needs more than one hit: a stuck accelerator and failed brakes", { size: 15, weight: "bold" });
  s += rect(24, 44, 330, 150, { fill: "#fff8e6", stroke: "#eadba0", rx: 10 }) + text(189, 66, "Proto-oncogene → oncogene", { size: 13, weight: "bold" }) + text(189, 84, "gain-of-function: gas pedal stuck down", { size: 12, fill: C.red });
  s += arrow(60, 140, 130, 110, { w: 4, stroke: C.red, marker: "ahr" }) + text(95, 168, "GO signal ON\nall the time", { size: 11.5 });
  s += rect(24, 200, 330, 100, { fill: "#eef5fc", stroke: "#cfe0f7", rx: 10 }) + text(189, 222, "Tumor suppressor gene (e.g., p53, RB1)", { size: 13, weight: "bold" }) + text(189, 240, "loss-of-function: brakes no longer work", { size: 12, fill: C.blue });
  s += text(189, 272, "no checkpoint stop, DNA repair, or apoptosis", { size: 11.5 });
  s += line(375, 40, 375, 310, { stroke: C.line, w: 1.5 });
  // two-hit model
  s += text(565, 52, "Two-hit model for a tumor suppressor", { size: 13.5, weight: "bold" });
  const copies = (x, y, a, b) => rect(x, y, 22, 22, { fill: a ? "#8fcf8f" : "#e58c8c", stroke: "#555", rx: 4 }) + rect(x + 28, y, 22, 22, { fill: b ? "#8fcf8f" : "#e58c8c", stroke: "#555", rx: 4 });
  s += text(565, 84, "Inherited one bad copy", { size: 12, weight: "bold", fill: C.red }) + copies(400, 96, false, true) + arrow(462, 107, 508, 107, { w: 2.5 }) + copies(516, 96, false, false) + text(590, 112, "1 somatic hit → no function", { size: 11.5, anchor: "start" });
  s += text(565, 164, "Two normal copies", { size: 12, weight: "bold", fill: C.green }) + copies(400, 176, true, true) + arrow(462, 187, 478, 187, { w: 2.5 }) + copies(486, 176, false, true) + arrow(548, 187, 564, 187, { w: 2.5 }) + copies(572, 176, false, false) + text(640, 187, "needs 2\nindependent hits", { size: 11.5, anchor: "start" });
  s += rect(398, 226, 22, 16, { fill: "#8fcf8f", stroke: "#555", rx: 3 }) + text(428, 239, "= working copy", { size: 11.5, anchor: "start" }) + rect(528, 226, 22, 16, { fill: "#e58c8c", stroke: "#555", rx: 3 }) + text(558, 239, "= lost / mutated copy", { size: 11.5, anchor: "start" });
  s += text(565, 278, "Cancer usually needs several mutations in one cell lineage\n(oncogene activation + loss of suppressors).", { size: 11.5, fill: C.muted });
  FIGS["cancer-genes"] = { svg: svg(760, 324, s, "Oncogene as a stuck accelerator, tumor suppressor loss as failed brakes, and the two-hit model"), caption: "A proto-oncogene becomes an oncogene by a gain-of-function mutation (accelerator stuck on). A tumor suppressor needs a loss-of-function mutation in both copies (brakes fail); inheriting one bad copy means a single further hit is enough." };
}
