import { C, svg, text, line, circle, rect, path, defs, arrow, figure, molGrid, esc } from "./lib.mjs";
export const FIGS = {};
const R = (n) => Math.round(n * 10) / 10;

// ---- water molecule: shape, partial charges, and hydrogen bonds ----
function water(x, y, rot = 0, label = true) {
  // O at (x,y); two H at +-52.25 degrees from the axis (104.5 deg bond angle), bond length 46
  const a = (rot - 90) * Math.PI / 180, d = 52.25 * Math.PI / 180, L = 46;
  const h1 = [x + L * Math.cos(a - d), y + L * Math.sin(a - d)], h2 = [x + L * Math.cos(a + d), y + L * Math.sin(a + d)];
  return { o: [x, y], h1, h2, svg: line(x, y, ...h1, { w: 3 }) + line(x, y, ...h2, { w: 3 }) + circle(x, y, 17, { fill: C.red, stroke: "#9c2f10", w: 1.5 }) + circle(...h1, 10, { fill: "#fff", stroke: C.gray, w: 2 }) + circle(...h2, 10, { fill: "#fff", stroke: C.gray, w: 2 })
    + text(x, y + 5, "O", { size: 15, weight: "bold", fill: "#fff" }) + text(h1[0], h1[1] + 4, "H", { size: 11, weight: "bold", fill: C.ink }) + text(h2[0], h2[1] + 4, "H", { size: 11, weight: "bold", fill: C.ink }) };
}
{
  const w1 = water(150, 150, 0), w2 = water(500, 200, 0), w3 = water(660, 120, 0), w4 = water(560, 80, 0);
  // hydrogen bonds: H of one water to O of neighbor
  const hb = (hx, hy, ox, oy) => line(hx, hy, ox, oy, { stroke: C.teal, w: 2.5, dash: "6 5" });
  const inner = defs
    + text(380, 26, "Water is polar, and polar molecules stick together", { size: 16, weight: "bold" })
    + text(150, 52, "One water molecule", { size: 13, weight: "bold", fill: C.muted })
    + w1.svg
    + text(150, 188, "δ⁻", { size: 22, weight: "bold", fill: C.red }) + text(w1.h1[0] - 20, w1.h1[1] - 8, "δ⁺", { size: 20, weight: "bold", fill: C.blue }) + text(w1.h2[0] + 20, w1.h2[1] - 8, "δ⁺", { size: 20, weight: "bold", fill: C.blue })
    + text(150, 100, "104.5°", { size: 12, fill: C.muted }) + path("M 128 108 Q 150 96 172 108", { stroke: C.muted, w: 1.2 })
    + text(150, 230, "Bent shape → the charges\ndon't cancel → polar", { size: 13, fill: C.ink })
    + line(285, 60, 285, 250, { stroke: C.line, w: 1.5 })
    + text(520, 52, "Many water molecules", { size: 13, weight: "bold", fill: C.muted })
    + w4.svg + w2.svg + w3.svg
    + hb(w4.h2[0], w4.h2[1], w2.o[0] - 8, w2.o[1] - 14) // placeholder; refined below
    ;
  // cleaner explicit cluster: three molecules in a staggered chain with labeled bonds
  const a = water(360, 190, 0), b = water(500, 150, 60), c = water(640, 200, -40);
  const inner2 = defs
    + text(380, 26, "Water is polar, and polar molecules stick together", { size: 16, weight: "bold" })
    + text(150, 54, "One water molecule", { size: 13, weight: "bold", fill: C.muted })
    + water(150, 150, 0).svg
    + text(150, 188, "δ⁻", { size: 22, weight: "bold", fill: C.red }) + text(106, 96, "δ⁺", { size: 20, weight: "bold", fill: C.blue }) + text(194, 96, "δ⁺", { size: 20, weight: "bold", fill: C.blue })
    + text(150, 232, "Bent shape: the pulls don't cancel,\nso O is slightly − and H slightly +", { size: 12.5 })
    + line(268, 56, 268, 250, { stroke: C.line, w: 1.5 })
    + text(530, 54, "Neighboring molecules", { size: 13, weight: "bold", fill: C.muted })
    + a.svg + b.svg + c.svg
    + line(a.h2[0], a.h2[1], b.o[0] - 12, b.o[1] + 8, { stroke: C.teal, w: 3, dash: "6 5" })
    + line(b.h1[0], b.h1[1], c.o[0] - 14, c.o[1] - 8, { stroke: C.teal, w: 3, dash: "6 5" })
    + text(432, 118, "hydrogen\nbond", { size: 12.5, weight: "bold", fill: C.teal })
    + text(588, 112, "hydrogen\nbond", { size: 12.5, weight: "bold", fill: C.teal })
    + line(330, 262, 372, 262, { w: 3 }) + text(380, 266, "covalent bond (strong)", { size: 12, anchor: "start" })
    + line(330, 282, 372, 282, { stroke: C.teal, w: 3, dash: "6 5" }) + text(380, 286, "hydrogen bond (~1/20 as strong, but very many)", { size: 12, anchor: "start" });
  FIGS["water-polarity"] = { svg: svg(760, 300, inner2, "A bent water molecule with partial charges, and hydrogen bonds between neighboring water molecules"), caption: "A bent water molecule is polar (δ⁻ on oxygen, δ⁺ on each hydrogen). The δ⁺ hydrogen of one molecule is attracted to the δ⁻ oxygen of the next: that attraction is a hydrogen bond." };
}

// ---- hydration shell around NaCl ----
{
  const wat = (x, y, rot, pos) => { const w = water(x, y, rot); return w.svg; };
  // Na+ at left, Cl- at right; waters arranged around with H toward Cl-, O toward Na+
  const na = [180, 168], cl = [580, 168];
  let g = "";
  const ring = (cx, cy, r, n, rotOffset, orient) => { let s = ""; for (let i = 0; i < n; i++) { const ang = rotOffset + i * 2 * Math.PI / n; const x = cx + r * Math.cos(ang), y = cy + r * Math.sin(ang); const toward = Math.atan2(cy - y, cx - x) * 180 / Math.PI; s += water(x, y, orient === "O" ? (toward + 90) + 180 : toward + 90 - 0, false).svg; } return s; };
  // For Na+: oxygens (δ-) point at the ion: water's axis (pointing from O between Hs) should point AWAY from the ion.
  // For Cl-: hydrogens point at the ion: the axis (between the Hs) points TOWARD the ion.
  const waterAround = (cx, cy, r, n, off, hTowardIon) => { let s = ""; for (let i = 0; i < n; i++) { const ang = off + i * 2 * Math.PI / n; const x = cx + r * Math.cos(ang), y = cy + r * Math.sin(ang); const towardDeg = Math.atan2(cy - y, cx - x) * 180 / Math.PI; const axis = hTowardIon ? towardDeg : towardDeg + 180; s += water(x, y, axis + 90, false).svg; } return s; };
  const inner = defs
    + text(380, 26, "Dissolving salt: water forms a hydration shell around each ion", { size: 16, weight: "bold" })
    + waterAround(na[0], na[1], 84, 6, 0.2, false) + waterAround(cl[0], cl[1], 96, 5, 0.5, true)
    + circle(...na, 34, { fill: "#cfe0f7", stroke: C.blue, w: 2.5 }) + text(na[0], na[1] + 7, "Na⁺", { size: 22, weight: "bold", fill: C.blue })
    + circle(...cl, 34, { fill: "#d6efd6", stroke: C.green, w: 2.5 }) + text(cl[0], cl[1] + 7, "Cl⁻", { size: 22, weight: "bold", fill: C.green })
    + text(na[0], 318, "δ⁻ oxygens face the positive ion", { size: 13, fill: C.red, weight: "bold" })
    + text(cl[0], 318, "δ⁺ hydrogens face the negative ion", { size: 13, fill: C.blue, weight: "bold" })
    + text(380, 344, "The shell of water around a dissolved particle is its hydration shell.", { size: 13, fill: C.muted });
  FIGS["hydration-shell"] = { svg: svg(760, 362, inner, "Water molecules orienting around a sodium ion and a chloride ion"), caption: "Why water is such a good solvent: it surrounds each ion with oppositely charged ends of its molecules, prying the crystal apart ion by ion." };
}

// ---- ice vs liquid water ----
{
  const dot = (x, y) => circle(x, y, 9, { fill: "#fff", stroke: C.red, w: 3 });
  // liquid: scattered molecules (closer on average), few bonds
  const liq = [[70, 90], [130, 70], [190, 100], [100, 150], [160, 160], [60, 200], [140, 225], [200, 190], [95, 255], [170, 270], [220, 140], [225, 245], [40, 140]];
  let L = liq.map(([x, y]) => dot(x, y)).join("");
  const lb = [[0, 1], [1, 2], [3, 4], [4, 7], [6, 8], [2, 10], [5, 9]]; // some bonds
  L += lb.map(([i, j]) => line(liq[i][0], liq[i][1], liq[j][0], liq[j][1], { stroke: C.teal, w: 2, dash: "4 4" })).join("");
  // ice: hexagonal rings (open lattice)
  const hexC = [[0, 0], [1, 0]];
  const hex = (cx, cy, r) => Array.from({ length: 6 }, (_, k) => [cx + r * Math.cos(Math.PI / 3 * k), cy + r * Math.sin(Math.PI / 3 * k)]);
  const r = 40; const rings = [[520, 120], [520 + r * 1.5 * 1.0 + 0, 120 + r * 0.866 * 1], [520, 120 + r * 0.866 * 2]];
  const pts = new Map(); let I = ""; 
  const hexes = [hex(560, 120, r), hex(560 + r * 1.5, 120 + r * 0.866, r), hex(560 + r * 1.5, 120 + r * 0.866 * 3, r), hex(560, 120 + r * 0.866 * 2, r), hex(560 - r * 1.5, 120 + r * 0.866, r), hex(560 - r * 1.5, 120 + r * 0.866 * 3, r)];
  const key = (p) => `${Math.round(p[0])},${Math.round(p[1])}`;
  const edges = new Set();
  for (const h6 of hexes) for (let k = 0; k < 6; k++) { const a = h6[k], b = h6[(k + 1) % 6]; edges.add([key(a), key(b)].sort().join("|")); pts.set(key(a), a); pts.set(key(b), b); }
  for (const e of edges) { const [ka, kb] = e.split("|"); const a = pts.get(ka), b = pts.get(kb); I += line(a[0], a[1], b[0], b[1], { stroke: C.teal, w: 2.5, dash: "5 4" }); }
  for (const p of pts.values()) I += dot(p[0], p[1]);
  const inner = defs
    + text(380, 26, "Why ice floats: an open hexagonal lattice", { size: 16, weight: "bold" })
    + rect(14, 44, 232, 250, { fill: "#f4f9ff", stroke: "#cfe0f7" }) + L
    + text(130, 316, "Liquid water\nmolecules jumbled, bonds break and re-form,\nneighbors packed closer", { size: 12.5 })
    + rect(400, 44, 346, 250, { fill: "#eef7fb", stroke: "#bfe0ee" }) + I
    + text(573, 316, "Ice\nmolecules locked in place by hydrogen bonds,\nopen hexagons with empty space: less dense", { size: 12.5 })
    + text(130, 60 + 0, "", {});
  FIGS["ice-lattice"] = { svg: svg(760, 360, inner, "Liquid water as a jumble of molecules and ice as an open hexagonal lattice"), caption: "Ice is less dense than liquid water because hydrogen bonds hold the molecules in a rigid, open lattice that takes up more room than the jumbled liquid." };
}

// ---- pH scale ----
{
  const x0 = 50, x1 = 710, y0 = 110, h = 44;
  const stops = ["#d7191c", "#e8532b", "#f58a32", "#f9c23c", "#e6e04a", "#a8d65a", "#5cb85c", "#3aa98a", "#2c8fb5", "#2b6cb0", "#3b55b0", "#4a3fa8", "#5b2f9e", "#6a2793", "#7a1f87"];
  let bar = ""; for (let i = 0; i <= 14; i++) bar += rect(x0 + (x1 - x0) / 15 * i, y0, (x1 - x0) / 15 + 1, h, { fill: stops[i], rx: 0 });
  const px = (v) => x0 + (x1 - x0) / 15 * (v + 0.5);
  let ticks = ""; for (let i = 0; i <= 14; i++) ticks += text(px(i), y0 + h + 18, String(i), { size: 13, weight: i === 7 ? "bold" : "normal" });
  const ex = [[1.5, "stomach\nacid"], [2.5, "lemon\njuice"], [5, "black\ncoffee"], [7, "pure\nwater"], [7.4, "blood"], [8.1, "seawater"], [11, "household\nammonia"], [12.5, "bleach"]];
  let labels = "";
  const up = [[1.5, 0], [2.5, 1], [5, 0], [7, 0], [8.1, 1], [11, 0], [12.5, 1]];
  for (const [v, nm] of ex.filter(e => e[0] !== 7.4)) labels += line(px(v), y0 - 4, px(v), y0 - 18 - (v === 2.5 || v === 8.1 || v === 12.5 ? 22 : 0), { stroke: C.muted, w: 1.5 }) + text(px(v), y0 - 24 - (v === 2.5 || v === 8.1 || v === 12.5 ? 22 : 0) - (nm.includes("\n") ? 12 : 0), nm, { size: 12.5 });
  labels += rect(px(7.35), y0 - 3, px(7.45) - px(7.35) + 3, h + 6, { stroke: C.ink, w: 2.5, rx: 2 }) + text(px(7.4) + 70, y0 + h + 62, "blood: pH 7.35–7.45 (tightly regulated)", { size: 12.5, weight: "bold", fill: C.red }) + line(px(7.4) + 10, y0 + h + 46, px(7.4) + 4, y0 + h + 6, { stroke: C.red, w: 1.5 });
  const inner = defs + text(380, 24, "The pH scale: each step is a ten-fold change in [H⁺]", { size: 16, weight: "bold" })
    + bar + ticks
    + text(x0 + 60, y0 + 28, "ACIDIC", { size: 14, weight: "bold", fill: "#fff" }) + text(x1 - 60, y0 + 28, "BASIC", { size: 14, weight: "bold", fill: "#fff" })
    + labels
    + text(x0, 275, "[H⁺] = 10⁰ M = 1 M", { size: 12.5, anchor: "start", fill: C.muted }) + text(x1, 275, "[H⁺] = 10⁻¹⁴ M", { size: 12.5, anchor: "end", fill: C.muted })
    + text(380, 275, "pH = −log [H⁺]   (pH 3 has 10× more H⁺ than pH 4, and 100× more than pH 5)", { size: 13, fill: C.ink })
    + text(380, 232, "left = more H⁺, right = less H⁺ (more OH⁻)", { size: 12, fill: C.muted });
  FIGS["ph-scale"] = { svg: svg(760, 296, inner, "The pH scale from 0 to 14 with common examples"), caption: "The pH scale is logarithmic: a one-unit change is a ten-fold change in hydrogen ion concentration. Blood is held within about 0.1 pH unit of 7.4." };
}

// ---- functional groups ----
FIGS["functional-groups"] = { html: molGrid("functional-groups", [
  ["CCO", "Hydroxyl  –OH", "polar; H-bonds; raises solubility"],
  ["CC(=O)C", "Carbonyl  C=O", "polar; ketone shown (an aldehyde has C=O at the end)"],
  ["CC(=O)O", "Carboxyl  –COOH", "acidic: donates H⁺ (becomes –COO⁻)"],
  ["CN", "Amino  –NH₂", "basic: accepts H⁺ (becomes –NH₃⁺)"],
  ["CS", "Sulfhydryl  –SH", "forms disulfide bridges (cysteine)"],
  ["COP(=O)(O)O", "Phosphate  –PO₄", "negative charge; energy transfer (ATP)"],
  ["Cc1c[nH]c(=O)nc1N", "Methyl  –CH₃", "nonpolar; here on cytosine: DNA methylation"],
], "Seven functional groups in context, one simple molecule each (each corner is a carbon). A group behaves the same way no matter which larger molecule it is attached to.", 4) };
