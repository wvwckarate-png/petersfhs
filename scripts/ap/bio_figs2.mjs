import { C, svg, text, line, circle, rect, path, defs, arrow, figure, molSvg, molSvgParts, rxnSvg, esc } from "./lib.mjs";
const scaled = (smi, name, k = 0.7) => { const p = molSvgParts(smi); return molSvg(smi, name).replace(/<svg class="mol"/, `<svg class="mol" style="width:${Math.round(p.w * k)}px;max-width:100%;height:auto"`); };
export const FIGS = {};
const GLCP = "OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O";
const MALT = "C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O[C@@H]2[C@H](OC([C@@H]([C@H]2O)O)O)CO)O)O)O)O";
const fit = (svgStr) => svgStr.replace(/<svg class="mol( rxn)?"/, (m) => m + ' style="max-width:100%;height:auto"');
const box = (inner) => `<div style="display:flex;flex-direction:column;gap:12px;align-items:center;background:#fff;border:1px solid #ECEAE3;border-radius:10px;padding:12px;overflow-x:auto">${inner}</div>`;

// ---- dehydration synthesis / hydrolysis (maltose) ----
FIGS["dehydration-hydrolysis"] = { html: figure("dehydration-hydrolysis",
  box(`<div style="font-weight:700;font-size:15px">Building and breaking a bond: glucose + glucose ⇌ maltose + water</div>` + fit(rxnSvg(`${GLCP} + ${GLCP} <=> ${MALT} + O | dehydration synthesis (removes H₂O) →; | ← hydrolysis (adds H₂O)`))),
  "Dehydration synthesis joins two monosaccharides with a covalent bond and releases a water molecule (glucose + glucose → maltose). Hydrolysis is the reverse: water is added across the bond to split it."), caption: "" };

// ---- polysaccharides: same monomer, different geometry ----
{
  const bead = (x, y, r = 8, fill = "#f6e3a8") => circle(x, y, r, { fill, stroke: "#b08d1a", w: 1.5 });
  let s = defs;
  s += text(380, 24, "Same monomer (glucose), different bond geometry, different job", { size: 16, weight: "bold" });
  // Starch: a coil (spring): back half of each turn faint, front half solid with glucose beads
  const cx = 130; let st = "";
  for (let j = 0; j < 5; j++) {
    const y = 110 + j * 30;
    st += path(`M ${cx - 38} ${y} A 38 12 0 0 1 ${cx + 38} ${y}`, { stroke: "#e2d9b3", w: 2 });
    st += path(`M ${cx - 38} ${y} A 38 12 0 0 0 ${cx + 38} ${y + 0.01}`, { stroke: "#b08d1a", w: 2.5 });
    for (let k = 0; k < 6; k++) { const t = Math.PI * (k + 0.5) / 6; st += bead(cx - 38 * Math.cos(t), y + 12 * Math.sin(t), 6); }
    if (j < 4) st += line(cx + 38, y, cx - 38, y + 30, { stroke: "#b08d1a", w: 2 });
  }
  st += text(130, 68, "STARCH", { size: 15, weight: "bold", fill: C.green }) + text(130, 88, "plant energy storage", { size: 12, fill: C.muted });
  st += text(130, 272, "α bonds → helical (coiled)\nsome branching\nenzymes can unzip it", { size: 12.5 });
  // Glycogen: highly branched tree
  const gx = 380, gy = 238; let gl = ""; const branch = (x, y, ang, len, depth) => { if (depth > 3 || len < 12) return; const x2 = x + len * Math.cos(ang), y2 = y + len * Math.sin(ang); gl += line(x, y, x2, y2, { stroke: "#b08d1a", w: 2.5 }); const n = Math.max(2, Math.round(len / 14)); for (let k = 1; k <= n; k++) { const t = k / (n + 0.2); gl += bead(x + (x2 - x) * t, y + (y2 - y) * t, 5); } branch(x2, y2, ang - 0.55, len * 0.7, depth + 1); branch(x2, y2, ang + 0.55, len * 0.7, depth + 1); if (depth === 0) branch(x + (x2 - x) * 0.45, y + (y2 - y) * 0.45, ang + 0.9, len * 0.6, depth + 2); };
  branch(gx, gy, -Math.PI / 2, 60, 0);
  gl += text(380, 68, "GLYCOGEN", { size: 15, weight: "bold", fill: C.red }) + text(380, 88, "animal energy storage", { size: 12, fill: C.muted });
  gl += text(380, 272, "α bonds + MANY branches\nmany free ends: enzymes release\nglucose from all of them at once", { size: 12.5 });
  // Cellulose: straight parallel chains alternating orientation, H-bond cross-links
  let ce = "";
  for (let r = 0; r < 3; r++) { const y = 130 + r * 34; ce += line(560, y, 720, y, { stroke: "#7a8a3a", w: 2.5 }); for (let k = 0; k < 8; k++) ce += bead(566 + k * 21, y + (k % 2 ? 5 : -5), 6.5, "#dfe9b8"); }
  for (let r = 0; r < 2; r++) for (let k = 0; k < 7; k++) ce += line(576 + k * 21, 130 + r * 34 + 10, 576 + k * 21, 130 + (r + 1) * 34 - 10, { stroke: C.teal, w: 1.5, dash: "3 3" });
  ce += text(640, 68, "CELLULOSE", { size: 15, weight: "bold", fill: C.purple }) + text(640, 88, "plant cell wall", { size: 12, fill: C.muted });
  ce += text(640, 272, "β bonds → straight chains\nH-bonded into rigid fibers\nmost animal enzymes can't cut", { size: 12.5 });
  ce += text(640, 224, "dashed lines = hydrogen bonds between chains", { size: 11, fill: C.teal });
  s += st + gl + ce;
  FIGS["polysaccharides"] = { svg: svg(760, 330, s, "Starch as a coiled chain, glycogen as a heavily branched chain, and cellulose as straight hydrogen-bonded chains"), caption: "Starch, glycogen, and cellulose are all polymers of glucose. The geometry of the bond between glucose units (α in starch and glycogen, β in cellulose) and the branching pattern decide what the polymer does." };
}

// ---- fatty acids: saturated vs unsaturated vs trans ----
FIGS["fatty-acids"] = { html: figure("fatty-acids",
  `<div style="display:flex;flex-direction:column;gap:8px">` + [
    ["CCCCCCCCCCCCCCCCCC(=O)O", "Saturated (stearic acid)", "no C=C: straight tail, packs tightly, solid (butter)"],
    ["CCCCCCCC/C=C\\CCCCCCCC(=O)O", "Unsaturated, cis (oleic acid)", "cis C=C puts a kink in the tail: loose packing, liquid (olive oil)"],
    ["CCCCCCCC/C=C/CCCCCCCC(=O)O", "Trans fat (elaidic acid)", "trans C=C: tail stays straight, packs like a saturated fat"],
  ].map(([smi, name, note]) => `<figure style="margin:0;background:#fff;border:1px solid #ECEAE3;border-radius:10px;padding:8px 12px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center"><div style="flex:0 1 460px;text-align:center">${scaled(smi, name)}</div><figcaption style="flex:1 1 180px;font-size:13px;line-height:1.35"><strong>${name}</strong><br><span style="color:#555">${note}</span></figcaption></figure>`).join("") + `</div>`,
  "Fatty acid tails drawn as skeletal structures (each corner is a carbon). The shape of the tail, straight or kinked, controls how tightly fats pack together."), caption: "" };

// ---- triglyceride and phospholipid (schematics) ----
{
  const zig = (x, y, n, dx, dy, o = {}) => { let d = `M ${x} ${y}`; for (let i = 1; i <= n; i++) d += ` L ${x + i * dx} ${y + (i % 2 ? dy : 0)}`; return path(d, { stroke: o.stroke || C.gold, w: o.w || 3 }); };
  // Triglyceride formation
  let s = defs + text(380, 24, "Building a triglyceride: glycerol + 3 fatty acids → fat + 3 H₂O", { size: 16, weight: "bold" });
  // glycerol
  s += rect(30, 70, 70, 130, { fill: "#e8f1fb", stroke: C.blue, rx: 8 }) + text(65, 92, "glycerol", { size: 13, weight: "bold", fill: C.blue });
  for (let i = 0; i < 3; i++) s += text(65, 124 + i * 36, "–OH", { size: 14, weight: "bold", fill: C.red }) + line(40, 114 + i * 36, 90, 114 + i * 36, { stroke: "#d0d6dd", w: 1 });
  s += text(116, 140, "+", { size: 26, weight: "bold" });
  for (let i = 0; i < 3; i++) { const y = 108 + i * 36; s += text(150, y + 12, "HO–C", { size: 13, weight: "bold", fill: C.red, anchor: "start" }) + zig(200, y + 8, 12, 12, 8, { stroke: i === 1 ? "#d89a2b" : C.gold }); }
  s += text(215, 82, "3 fatty acids (hydrocarbon tails)", { size: 12.5, fill: C.muted });
  s += arrow(372, 170, 430, 170, { w: 3 }) + text(401, 128, "dehydration\nsynthesis", { size: 11.5, fill: C.muted });
  // triglyceride
  s += path("M 455 100 L 455 190", { stroke: C.blue, w: 5 });
  for (let i = 0; i < 3; i++) { const y = 108 + i * 36; s += path(`M 455 ${y + 6} L 480 ${y + 6}`, { stroke: C.blue, w: 3 }) + circle(488, y + 6, 8, { fill: C.red, stroke: "#9c2f10" }) + zig(498, y + 8, 18, 12, 8, { stroke: i === 1 ? "#d89a2b" : C.gold }); }
  s += text(560, 82, "triglyceride: glycerol backbone + 3 ester bonds", { size: 12.5, fill: C.muted }) + text(488, 218, "ester bond (red)", { size: 12, fill: C.red });
  s += text(380, 250, "+ 3 H₂O released", { size: 13, weight: "bold", fill: C.blue });
  FIGS["triglyceride"] = { svg: svg(760, 270, s, "Glycerol and three fatty acids joining to form a triglyceride and three water molecules"), caption: "A triglyceride (fat) is one glycerol joined to three fatty acids by ester bonds; each bond forms by dehydration synthesis. Lipids are the exception to the monomer–polymer pattern." };
}
{
  let s = defs + text(380, 24, "Phospholipids are amphipathic: they self-assemble into a bilayer", { size: 16, weight: "bold" });
  // single molecule
  const px = 110, py = 90;
  s += circle(px, py, 22, { fill: "#f7c9bd", stroke: C.red, w: 2.5 }) + text(px, py + 4, "P", { size: 14, weight: "bold" });
  s += line(px - 8, py + 21, px - 14, py + 84, { stroke: C.gold, w: 4 }) + line(px + 8, py + 21, px + 18, py + 84, { stroke: C.gold, w: 4 });
  s += path(`M ${px - 14} ${py + 84} L ${px - 14} ${py + 150}`, { stroke: C.gold, w: 4 }) + path(`M ${px + 18} ${py + 84} L ${px + 12} ${py + 110} L ${px + 24} ${py + 128} L ${px + 12} ${py + 150}`, { stroke: C.gold, w: 4 });
  s += text(px, py + 178, "one phospholipid", { size: 12.5, weight: "bold" }) + text(px + 34, py - 2, "hydrophilic head\n(phosphate group)", { size: 12, fill: C.red, anchor: "start" }) + text(px + 40, py + 112, "two hydrophobic\nfatty acid tails\n(one kinked: unsaturated)", { size: 12, fill: "#8a6a00", anchor: "start" });
  s += line(290, 50, 290, 270, { stroke: C.line, w: 1.5 });
  // bilayer in water
  s += rect(310, 44, 430, 232, { fill: "#eef5fc", stroke: "#cfe0f7" }) + text(525, 62, "WATER", { size: 14, weight: "bold", fill: C.blue }) + text(525, 270, "WATER", { size: 14, weight: "bold", fill: C.blue }) + text(525, 84, "hydrophilic heads face the water", { size: 12, fill: C.red, weight: "bold" }) + text(525, 248, "hydrophilic heads face the water", { size: 12, fill: C.red, weight: "bold" });
  for (let i = 0; i < 10; i++) { const x = 340 + i * 40; s += circle(x, 108, 11, { fill: "#f7c9bd", stroke: C.red, w: 2 }) + line(x - 3, 119, x - 3, 160, { stroke: C.gold, w: 3 }) + line(x + 3, 119, x + 3, 160, { stroke: C.gold, w: 3 }); s += circle(x, 212, 11, { fill: "#f7c9bd", stroke: C.red, w: 2 }) + line(x - 3, 201, x - 3, 160, { stroke: C.gold, w: 3 }) + line(x + 3, 201, x + 3, 160, { stroke: C.gold, w: 3 }); }
  s += rect(375, 148, 300, 24, { fill: "#fff", opacity: 0.9, stroke: "none", rx: 4 }) + text(525, 165, "hydrophobic tails face each other, away from water", { size: 12.5, fill: "#8a6a00", weight: "bold" });
  FIGS["phospholipid"] = { svg: svg(760, 300, s, "A phospholipid with a hydrophilic head and two hydrophobic tails, and phospholipids forming a bilayer in water"), caption: "Each phospholipid has a hydrophilic phosphate head and two hydrophobic fatty acid tails. In water they spontaneously form a bilayer with heads outward and tails tucked inside: the basis of every cell membrane." };
}

// ---- amino acid and peptide bond ----
FIGS["peptide-bond"] = { html: figure("peptide-bond",
  box(`<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center"><div style="text-align:center">${molSvg("N[C@@H](*)C(=O)O", "Generic amino acid")}<div style="font-size:12.5px;margin-top:2px"><strong>amino acid</strong>: amino group, carboxyl group,<br>central carbon, H, and a variable <strong>R group</strong></div></div></div>`
   + `<div style="font-weight:700;font-size:15px">Peptide bond: dehydration synthesis between amino acids</div>` + fit(rxnSvg("NCC(=O)O + N[C@@H](C)C(=O)O >> NCC(=O)N[C@@H](C)C(=O)O + O | dehydration synthesis (−H₂O); | glycine + alanine → dipeptide Gly–Ala"))),
  "All 20 amino acids share the same backbone; only the R group differs. The carboxyl group of one amino acid bonds to the amino group of the next, releasing water: the new C–N covalent link is the peptide bond."), caption: "" };

// ---- DNA: nucleotide, antiparallel strands, base pairing ----
{
  let s = defs + text(380, 24, "DNA: antiparallel strands joined by complementary base pairs", { size: 16, weight: "bold" });
  const bases1 = ["A", "T", "G", "C", "A"], bases2 = { A: "T", T: "A", G: "C", C: "G" };
  const x0 = 120, dx = 120, yT = 106, yB = 234;
  const col = { A: "#2E6BC6", T: "#E8734A", G: "#2E7D32", C: "#C99700" };
  s += text(40, yT + 4, "5′", { size: 16, weight: "bold" }) + text(40, yB + 4, "3′", { size: 16, weight: "bold" });
  s += text(730, yT + 4, "3′", { size: 16, weight: "bold" }) + text(730, yB + 4, "5′", { size: 16, weight: "bold" });
  s += line(60, yT - 30, 705, yT - 30, { stroke: "#6b6b6b", w: 3.5, marker: "ah" }) + text(380, yT - 52, "sugar–phosphate backbone  (strand 1 runs 5′ → 3′)", { size: 12, fill: C.muted });
  s += line(705, yB + 30, 60, yB + 30, { stroke: "#6b6b6b", w: 3.5, marker: "ah" }) + text(380, yB + 58, "sugar–phosphate backbone  (strand 2 runs the opposite way, 3′ → 5′)", { size: 12, fill: C.muted });
  bases1.forEach((b, i) => {
    const x = x0 + i * dx * 0.95; const c = bases2[b];
    s += circle(x, yT - 30, 11, { fill: "#fff", stroke: "#888", w: 2 }) + text(x, yT - 26, "P", { size: 10, fill: "#888" });
    s += rect(x - 17, yT - 14, 34, 34, { fill: col[b], rx: 6 }) + text(x, yT + 9, b, { size: 19, weight: "bold", fill: "#fff" });
    s += rect(x - 17, yB - 22, 34, 34, { fill: col[c], rx: 6 }) + text(x, yB + 1, c, { size: 19, weight: "bold", fill: "#fff" });
    s += circle(x, yB + 30, 11, { fill: "#fff", stroke: "#888", w: 2 }) + text(x, yB + 34, "P", { size: 10, fill: "#888" });
    const n = (b === "G" || b === "C") ? 3 : 2;
    for (let k = 0; k < n; k++) { const off = (k - (n - 1) / 2) * 9; s += line(x + off, yT + 24, x + off, yB - 26, { stroke: C.teal, w: 2.5, dash: "4 3" }); }
    s += text(x + 28, (yT + yB) / 2 + 4, n === 3 ? "3 H-bonds" : "2 H-bonds", { size: 11, fill: C.teal, anchor: "start", weight: "bold" });
  });
  s += rect(60, 304, 640, 70, { fill: "#fbf6e6", stroke: "#eadba0" }) + text(380, 328, "Writing the complementary strand in standard 5′ → 3′ order", { size: 13, weight: "bold" })
    + text(380, 350, "Strand 1: 5′-ATGCA-3′     pairs with     strand 2: 3′-TACGT-5′     which is written 5′-TGCAT-3′ (reversed!)", { size: 13 })
    + text(380, 367, "A–T has 2 hydrogen bonds; G–C has 3, so G–C-rich regions are harder to separate.", { size: 12, fill: C.muted });
  FIGS["dna-antiparallel"] = { svg: svg(760, 392, s, "Two antiparallel DNA strands with complementary base pairs and hydrogen bond counts"), caption: "The two strands run in opposite directions (antiparallel). A always pairs with T (2 hydrogen bonds) and G with C (3). To write the complementary strand 5′ → 3′, you must reverse the order of the paired bases." };
}
