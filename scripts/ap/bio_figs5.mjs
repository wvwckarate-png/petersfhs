import { C, svg, text, line, circle, rect, path, defs, arrow } from "./lib.mjs";
export const FIGS = {};
const BLUE = "#2E6BC6", RED = "#D2451E";
// a chromosome (vertical by default) centered at (cx,cy); dupl draws two sister chromatids joined at a centromere
const chrom = (cx, cy, len, color, o = {}) => {
  const { dupl = true, angle = 0, tipColor = null, w = 4 } = o; const h = len / 2, off = dupl ? 3.2 : 0;
  let g = `<g transform="translate(${cx},${cy}) rotate(${angle})">`;
  const bar = (x) => `<line x1="${x}" y1="${-h}" x2="${x}" y2="${h}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
  g += dupl ? bar(-off) + bar(off) : bar(0);
  if (tipColor) g += `<line x1="${off}" y1="${h - 9}" x2="${off}" y2="${h}" stroke="${tipColor}" stroke-width="${w}" stroke-linecap="round"/>`;
  g += `<circle cx="0" cy="0" r="${dupl ? 4.8 : 3.6}" fill="#fff" stroke="${color}" stroke-width="2"/></g>`;
  return g;
};
const cellO = (cx, cy, r, fill = "#fdfaf0") => `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r}" fill="${fill}" stroke="#8a8a8a" stroke-width="2"/>`;

// ---- meiosis stages (2n = 4) ----
{
  let s = defs + text(380, 22, "Meiosis (2n = 4): one diploid cell → four haploid cells", { size: 16, weight: "bold" });
  const y = 120, r = 50;
  // 1 prophase I
  let x = 70; s += cellO(x, y, r) + chrom(x - 14, y - 4, 56, BLUE, { tipColor: RED }) + chrom(x - 2, y - 4, 56, RED, { tipColor: BLUE }) + chrom(x + 18, y + 6, 34, BLUE) + chrom(x + 30, y + 6, 34, RED);
  s += text(x, 52, "PROPHASE I", { size: 12.5, weight: "bold" }) + text(x, 196, "homologs pair up\n(synapsis) and\ncross over", { size: 11.5, fill: C.muted }) + text(x - 8, y + 44, "×", { size: 18, weight: "bold", fill: C.green });
  s += arrow(124, y, 150, y, { w: 2 });
  // 2 metaphase I
  x = 215; s += cellO(x, y, r) + line(x, y - 56, x, y + 56, { stroke: "#bbb", w: 1.5, dash: "3 3" }) + chrom(x - 14, y - 6, 54, BLUE) + chrom(x + 14, y - 6, 54, RED) + chrom(x - 14, y + 30, 30, RED) + chrom(x + 14, y + 30, 30, BLUE);
  s += text(x, 52, "METAPHASE I", { size: 12.5, weight: "bold" }) + text(x, 196, "homologous PAIRS line\nup at the plate; random\norientation", { size: 11.5, fill: C.muted });
  s += arrow(270, y, 296, y, { w: 2 });
  // 3 anaphase I
  x = 360; s += cellO(x, y, r) + chrom(x - 30, y - 6, 48, BLUE) + chrom(x + 30, y - 6, 48, RED) + chrom(x - 30, y + 30, 28, RED) + chrom(x + 30, y + 30, 28, BLUE);
  s += arrow(x - 10, y - 40, x - 34, y - 40, { stroke: C.muted, w: 1.5 }) + arrow(x + 10, y - 40, x + 34, y - 40, { stroke: C.muted, w: 1.5 });
  s += text(x, 52, "ANAPHASE I", { size: 12.5, weight: "bold" }) + text(x, 196, "homologs separate;\nsister chromatids stay\ntogether", { size: 11.5, fill: C.muted });
  s += arrow(416, y, 442, y, { w: 2 });
  // 4 after meiosis I (2 cells, each n with duplicated chromosomes)
  s += text(505, 52, "AFTER MEIOSIS I", { size: 12.5, weight: "bold" });
  s += cellO(480, 90, 34) + chrom(470, 90, 36, BLUE) + chrom(490, 94, 24, RED) + cellO(480, 156, 34) + chrom(470, 156, 36, RED) + chrom(490, 160, 24, BLUE);
  s += text(540, 124, "2 cells\nhaploid (n)\nchromosomes\nstill duplicated", { size: 11.5, fill: C.muted, anchor: "start" });
  s += arrow(600, y, 626, y, { w: 2 });
  // 5 after meiosis II: four cells
  s += text(692, 52, "AFTER MEIOSIS II", { size: 12.5, weight: "bold" });
  [[660, 86, BLUE, BLUE], [722, 86, BLUE, RED], [660, 152, RED, BLUE], [722, 152, RED, RED]].forEach(([cx, cy, a, b]) => { s += cellO(cx, cy, 25) + chrom(cx - 6, cy, 26, a, { dupl: false }) + chrom(cx + 8, cy + 3, 18, b, { dupl: false }); });
  s += text(692, 196, "4 haploid cells,\nchromatids separated", { size: 11.5, fill: C.muted });
  s += rect(60, 232, 640, 36, { fill: "#fbf6e6", stroke: "#eadba0" }) + text(380, 255, "Chromosome number is reduced in ANAPHASE I (homologs separate). Meiosis II separates sister chromatids, like mitosis.", { size: 12.5, weight: "bold" });
  s += text(380, 292, "blue = paternal chromosome, red = maternal chromosome (the swapped tips in prophase I show crossing over)", { size: 11.5, fill: C.muted });
  FIGS["meiosis-stages"] = { svg: svg(760, 306, s, "Stages of meiosis I and II for a cell with four chromosomes"), caption: "Meiosis uses two divisions. Meiosis I separates homologous pairs (the reduction division); meiosis II separates sister chromatids. One diploid cell gives four genetically distinct haploid cells." };
}
// ---- independent assortment ----
{
  let s = defs + text(380, 22, "Independent assortment: random orientation of each homologous pair at metaphase I", { size: 15, weight: "bold" });
  const panel = (x0, flip, title) => {
    let g = text(x0 + 100, 56, title, { size: 13, weight: "bold" });
    g += cellO(x0 + 100, 120, 52) + line(x0 + 100, 62, x0 + 100, 178, { stroke: "#bbb", w: 1.5, dash: "3 3" });
    g += chrom(x0 + 86, 98, 40, BLUE) + chrom(x0 + 114, 98, 40, RED);
    g += flip ? chrom(x0 + 86, 148, 26, BLUE) + chrom(x0 + 114, 148, 26, RED) : chrom(x0 + 86, 148, 26, RED) + chrom(x0 + 114, 148, 26, BLUE);
    return g;
  };
  s += panel(20, false, "Orientation 1") + panel(250, true, "Orientation 2");
  s += text(120, 206, "one pole: long blue + short red\nother pole: long red + short blue", { size: 11.5, fill: C.muted });
  s += text(350, 206, "one pole: long blue + short blue\nother pole: long red + short red", { size: 11.5, fill: C.muted });
  s += rect(490, 60, 250, 120, { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 }) + text(615, 84, "Possible gamete combinations", { size: 13, weight: "bold" }) + text(615, 110, "= 2ⁿ  (n = number of homologous pairs)", { size: 13 }) + text(615, 134, "n = 2 → 4 combinations", { size: 13 }) + text(615, 154, "n = 23 (humans) → over 8 million", { size: 13 }) + text(615, 172, "before crossing over is even counted", { size: 11.5, fill: C.muted });
  s += text(380, 250, "Each pair orients independently of every other pair: that is the physical basis of Mendel's law of independent assortment.", { size: 12.5 });
  FIGS["independent-assortment"] = { svg: svg(760, 268, s, "Two possible orientations of two homologous pairs at metaphase I and the number of possible gametes"), caption: "At metaphase I each homologous pair lines up in a random orientation, independent of every other pair. With n pairs there are 2ⁿ possible combinations of chromosomes in the gametes." };
}
// ---- Punnett squares ----
const sq = (x, y, w, h, fill, label, o = {}) => rect(x, y, w, h, { fill, stroke: "#777", w: 1.5, rx: 3 }) + (label ? text(x + w / 2, y + h / 2 + 5, label, { size: o.size || 14, weight: "bold" }) : "");
{
  let s = defs + text(380, 22, "Punnett squares: one gene (3:1) and two genes (9:3:3:1)", { size: 16, weight: "bold" });
  // monohybrid Aa x Aa (purple P dominant)
  s += text(110, 52, "Monohybrid: Pp × Pp", { size: 13, weight: "bold" });
  const gx = 70, gy = 94, cs = 44;
  s += text(gx + cs * 0.5 + 0, gy - 10, "P", { size: 14, weight: "bold" }) + text(gx + cs * 1.5, gy - 10, "p", { size: 14, weight: "bold" }) + text(gx - 18, gy + cs * 0.5 + 5, "P", { size: 14, weight: "bold" }) + text(gx - 18, gy + cs * 1.5 + 5, "p", { size: 14, weight: "bold" });
  const P = "#cdb0e8", W = "#f1f1f1";
  s += sq(gx, gy, cs, cs, P, "PP") + sq(gx + cs, gy, cs, cs, P, "Pp") + sq(gx, gy + cs, cs, cs, P, "Pp") + sq(gx + cs, gy + cs, cs, cs, W, "pp");
  s += text(110, 206, "genotypes 1 PP : 2 Pp : 1 pp", { size: 12 }) + text(110, 224, "phenotypes 3 purple : 1 white", { size: 12, weight: "bold" });
  // dihybrid PpTt x PpTt
  s += text(520, 52, "Dihybrid: PpTt × PpTt  (P purple, T tall)", { size: 13, weight: "bold" });
  const dx = 410, dy = 86, ds = 40; const g = ["PT", "Pt", "pT", "pt"];
  g.forEach((a, i) => { s += text(dx + ds * (i + 0.5), dy - 8, a, { size: 12, weight: "bold" }) + text(dx - 22, dy + ds * (i + 0.5) + 4, a, { size: 12, weight: "bold" }); });
  const col = (r, c) => { const a = g[r], b = g[c]; const pur = a[0] === "P" || b[0] === "P", tall = a[1] === "T" || b[1] === "T"; return pur && tall ? ["#cdb0e8", ""] : pur ? ["#f2c8d8", ""] : tall ? ["#cfe6c4", ""] : ["#eeeeee", ""]; };
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const a = g[c], b = g[r]; const geno = (a[0] < b[0] ? b[0] + a[0] : a[0] + b[0]).replace(/pP/, "Pp") + (a[1] < b[1] ? b[1] + a[1] : a[1] + b[1]).replace(/tT/, "Tt"); s += sq(dx + c * ds, dy + r * ds, ds, ds, col(r, c)[0], geno, { size: 11 }); }
  s += rect(600, 96, 18, 14, { fill: "#cdb0e8", stroke: "#777", rx: 2 }) + text(626, 108, "9 purple, tall", { size: 12, anchor: "start" }) + rect(600, 120, 18, 14, { fill: "#f2c8d8", stroke: "#777", rx: 2 }) + text(626, 132, "3 purple, short", { size: 12, anchor: "start" }) + rect(600, 144, 18, 14, { fill: "#cfe6c4", stroke: "#777", rx: 2 }) + text(626, 156, "3 white, tall", { size: 12, anchor: "start" }) + rect(600, 168, 18, 14, { fill: "#eeeeee", stroke: "#777", rx: 2 }) + text(626, 180, "1 white, short", { size: 12, anchor: "start" });
  s += text(660, 214, "9 : 3 : 3 : 1", { size: 15, weight: "bold", fill: C.red });
  s += rect(30, 250, 700, 58, { fill: "#fbf6e6", stroke: "#eadba0" }) + text(380, 274, "Shortcut for multi-gene crosses: multiply the single-gene probabilities (product rule)", { size: 13, weight: "bold" }) + text(380, 296, "P(purple AND tall) = P(purple) × P(tall) = ¾ × ¾ = 9/16      P(white AND short) = ¼ × ¼ = 1/16", { size: 12.5 });
  FIGS["punnett"] = { svg: svg(760, 326, s, "A monohybrid Punnett square and a dihybrid Punnett square with phenotype ratios"), caption: "A heterozygous × heterozygous monohybrid cross gives a 3:1 phenotype ratio; a dihybrid cross gives 9:3:3:1. The same ratios come from multiplying each gene's probability (the product rule), which is faster than a 16-box square." };
}
// ---- testcross ----
{
  let s = defs + text(380, 22, "Testcross: reveal an unknown genotype by crossing with a homozygous recessive", { size: 15, weight: "bold" });
  const mini = (x0, title, top, left, cells, result) => {
    let g = text(x0 + 100, 52, title, { size: 13, weight: "bold" });
    top.forEach((t, i) => g += text(x0 + 70 + i * 44, 86, t, { size: 14, weight: "bold" })); left.forEach((t, i) => g += text(x0 + 36, 118 + i * 44, t, { size: 14, weight: "bold" }));
    cells.forEach((c, i) => g += sq(x0 + 48 + (i % 2) * 44, 94 + Math.floor(i / 2) * 44, 44, 44, c[1], c[0]));
    return g + text(x0 + 100, 206, result, { size: 12.5, weight: "bold" });
  };
  s += mini(20, "Unknown is BB", ["B", "B"], ["b", "b"], [["Bb", "#cdb0e8"], ["Bb", "#cdb0e8"], ["Bb", "#cdb0e8"], ["Bb", "#cdb0e8"]], "all offspring dominant");
  s += mini(260, "Unknown is Bb", ["B", "b"], ["b", "b"], [["Bb", "#cdb0e8"], ["bb", "#eeeeee"], ["Bb", "#cdb0e8"], ["bb", "#eeeeee"]], "1 : 1 dominant : recessive");
  s += rect(500, 60, 240, 150, { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 }) + text(620, 84, "Why it works", { size: 13, weight: "bold" }) + text(620, 108, "The bb parent can only give b,\nso every difference among the\noffspring comes from the\nunknown parent's alleles.", { size: 12.5 }) + text(620, 192, "Any recessive offspring → unknown is Bb", { size: 12, weight: "bold", fill: C.red });
  FIGS["testcross"] = { svg: svg(760, 232, s, "Two testcross Punnett squares showing the offspring when the unknown parent is BB or Bb"), caption: "A testcross pairs an individual of unknown genotype with a homozygous recessive individual. All-dominant offspring indicate BB; a 1:1 ratio indicates Bb." };
}
// ---- incomplete dominance vs codominance ----
{
  let s = defs + text(380, 22, "Blend or both? Incomplete dominance vs. codominance", { size: 16, weight: "bold" });
  const flower = (x, y, c, c2) => { let f = ""; for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; f += `<ellipse cx="${x + 16 * Math.cos(a)}" cy="${y + 16 * Math.sin(a)}" rx="11" ry="8" fill="${c}" stroke="#777" stroke-width="1" transform="rotate(${a * 180 / Math.PI} ${x + 16 * Math.cos(a)} ${y + 16 * Math.sin(a)})"/>`; } return f + circle(x, y, 7, { fill: "#f5d76e", stroke: "#b08d1a" }); };
  s += text(190, 52, "INCOMPLETE DOMINANCE", { size: 13, weight: "bold", fill: C.purple }) + text(190, 70, "snapdragon flower color", { size: 12, fill: C.muted });
  s += flower(70, 120, "#d63a3a") + text(70, 160, "RR\nred", { size: 12 }) + text(118, 124, "×", { size: 20, weight: "bold" }) + flower(166, 120, "#ffffff") + text(166, 160, "R′R′\nwhite", { size: 12 }) + arrow(200, 120, 240, 120, { w: 2.5 }) + flower(280, 120, "#f2a0b8") + text(280, 160, "RR′\nPINK (blend)", { size: 12, weight: "bold" });
  s += text(190, 200, "heterozygote = an intermediate phenotype", { size: 12.5, fill: C.purple, weight: "bold" });
  s += line(380, 46, 380, 214, { stroke: C.line, w: 1.5 });
  s += text(570, 52, "CODOMINANCE", { size: 13, weight: "bold", fill: C.purple }) + text(570, 70, "ABO blood type (alleles Iᴬ, Iᴮ, i)", { size: 12, fill: C.muted });
  const cellb = (x, y, a, b) => circle(x, y, 22, { fill: "#f7d4d4", stroke: C.red, w: 2 }) + (a ? text(x - 8, y + 5, "A", { size: 13, weight: "bold", fill: BLUE }) : "") + (b ? text(x + (a ? 9 : 0), y + 5, "B", { size: 13, weight: "bold", fill: C.green }) : "");
  s += cellb(450, 120, true, false) + text(450, 160, "type A\n(IᴬIᴬ)", { size: 11.5 }) + text(495, 124, "×", { size: 20, weight: "bold" }) + cellb(540, 120, false, true) + text(540, 160, "type B\n(IᴮIᴮ)", { size: 11.5 }) + arrow(576, 120, 612, 120, { w: 2.5 }) + cellb(660, 120, true, true) + text(660, 160, "type AB (IᴬIᴮ)\nBOTH markers", { size: 11.5, weight: "bold" });
  s += text(570, 200, "heterozygote = both phenotypes, fully expressed", { size: 12.5, fill: C.purple, weight: "bold" });
  FIGS["incomplete-codominance"] = { svg: svg(760, 226, s, "Pink snapdragon as incomplete dominance and AB blood type as codominance"), caption: "Incomplete dominance gives a blend (red × white → pink). Codominance shows both homozygous phenotypes side by side, fully expressed (type AB carries both A and B markers)." };
}
// ---- X-linked cross ----
{
  let s = defs + text(380, 22, "X-linked recessive: an affected father and a non-carrier mother", { size: 15, weight: "bold" });
  s += text(130, 52, "Father: XᵇY (affected)   ×   Mother: XᴮXᴮ", { size: 12.5, anchor: "start", weight: "bold" });
  const gx = 120, gy = 100, cs = 52;
  s += text(gx + cs * 0.5, gy - 10, "Xᴮ", { size: 14, weight: "bold" }) + text(gx + cs * 1.5, gy - 10, "Xᴮ", { size: 14, weight: "bold" }) + text(gx - 24, gy + cs * 0.5 + 5, "Xᵇ", { size: 14, weight: "bold" }) + text(gx - 24, gy + cs * 1.5 + 5, "Y", { size: 14, weight: "bold" });
  const car = "#f9e0a8", ok = "#e1f0dc";
  s += sq(gx, gy, cs, cs, car, "XᴮXᵇ", { size: 13 }) + sq(gx + cs, gy, cs, cs, car, "XᴮXᵇ", { size: 13 }) + sq(gx, gy + cs, cs, cs, ok, "XᴮY", { size: 13 }) + sq(gx + cs, gy + cs, cs, cs, ok, "XᴮY", { size: 13 });
  s += rect(300, 96, 18, 14, { fill: car, stroke: "#777", rx: 2 }) + text(326, 108, "daughters: carriers (unaffected)", { size: 12.5, anchor: "start" }) + rect(300, 124, 18, 14, { fill: ok, stroke: "#777", rx: 2 }) + text(326, 136, "sons: unaffected", { size: 12.5, anchor: "start" });
  s += rect(300, 160, 430, 56, { fill: "#fbf6e6", stroke: "#eadba0", rx: 8 }) + text(515, 182, "A father passes his X to every daughter and his Y to every son,", { size: 12.5 }) + text(515, 202, "so sons can never inherit an X-linked trait from their father.", { size: 12.5, weight: "bold" });
  s += text(380, 246, "Males are hemizygous: one X, so a single recessive allele is enough to show the trait.", { size: 12.5, fill: C.muted });
  FIGS["x-linked"] = { svg: svg(760, 262, s, "Punnett square for an X-linked recessive trait with an affected father and non-carrier mother"), caption: "Tracking sex chromosomes explicitly: all daughters of an affected father and non-carrier mother are carriers, and all sons are unaffected, because sons receive the father's Y chromosome." };
}
// ---- linkage and recombination ----
{
  let s = defs + text(380, 22, "Linked genes: crossing over creates recombinants, and distance sets how often", { size: 15, weight: "bold" });
  // two homologs with A B / a b and crossing over between
  s += text(120, 52, "Parental chromosomes", { size: 12.5, weight: "bold" });
  const hz = (x, y, c, g1, g2, swapRight) => `<rect x="${x}" y="${y}" width="170" height="14" rx="7" fill="${c}" opacity=".85"/>` + text(x + 38, y + 11, g1, { size: 11, weight: "bold", fill: "#fff" }) + text(x + 132, y + 11, g2, { size: 11, weight: "bold", fill: "#fff" });
  s += hz(30, 64, BLUE, "A", "B") + hz(30, 88, RED, "a", "b");
  s += arrow(110, 112, 110, 136, { w: 2 }) + text(190, 130, "crossover between the genes", { size: 11.5, anchor: "start", fill: C.green, weight: "bold" });
  s += `<rect x="30" y="144" width="100" height="14" rx="7" fill="${BLUE}" opacity=".85"/><rect x="130" y="144" width="70" height="14" rx="7" fill="${RED}" opacity=".85"/>` + text(68, 155, "A", { size: 11, weight: "bold", fill: "#fff" }) + text(162, 155, "b", { size: 11, weight: "bold", fill: "#fff" });
  s += `<rect x="30" y="168" width="100" height="14" rx="7" fill="${RED}" opacity=".85"/><rect x="130" y="168" width="70" height="14" rx="7" fill="${BLUE}" opacity=".85"/>` + text(68, 179, "a", { size: 11, weight: "bold", fill: "#fff" }) + text(162, 179, "B", { size: 11, weight: "bold", fill: "#fff" });
  s += text(215, 154, "← recombinant", { size: 11.5, anchor: "start" }) + text(215, 178, "← recombinant", { size: 11.5, anchor: "start" });
  s += text(195, 214, "Uncrossed chromatids stay parental (AB and ab);\ncrossed ones are recombinant (Ab and aB).", { size: 11.5, fill: C.muted });
  s += line(375, 44, 375, 250, { stroke: C.line, w: 1.5 });
  // genetic map
  s += text(565, 52, "Recombination frequency → map distance", { size: 12.5, weight: "bold" });
  s += line(430, 110, 720, 110, { stroke: "#777", w: 5 });
  [[430, "A"], [480, "B"], [720, "C"]].forEach(([x, l]) => { s += circle(x, 110, 11, { fill: "#fff", stroke: C.ink, w: 2.5 }) + text(x, 115, l, { size: 13, weight: "bold" }); });
  s += path("M 430 90 L 430 84 L 480 84 L 480 90", { stroke: C.teal, w: 2 }) + text(455, 78, "4%", { size: 12, weight: "bold", fill: C.teal }) + path("M 480 130 L 480 138 L 720 138 L 720 130", { stroke: C.teal, w: 2 }) + text(600, 156, "9%", { size: 12, weight: "bold", fill: C.teal });
  s += path("M 430 168 L 430 180 L 720 180 L 720 168", { stroke: C.red, w: 2 }) + text(575, 198, "A–C = 13% (≈ 4% + 9%)", { size: 12, weight: "bold", fill: C.red });
  s += text(565, 226, "1% recombination = 1 map unit (centimorgan). The pair with the\nlargest value are the outer genes, so the third is in the middle.", { size: 11.5, fill: C.muted });
  FIGS["linkage-map"] = { svg: svg(760, 262, s, "Crossing over between two linked genes producing recombinant chromosomes, and a genetic map with recombination frequencies"), caption: "Crossing over between two linked genes produces recombinant chromosomes. The farther apart the genes, the more often a crossover falls between them, so recombination frequency maps distance (maximum about 50%, the value for unlinked genes)." };
}
