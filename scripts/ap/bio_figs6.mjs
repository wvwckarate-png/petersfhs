import { C, svg, text, line, circle, rect, path, defs, arrow } from "./lib.mjs";
export const FIGS = {};
const BLUE = "#2E6BC6", RED = "#D2451E";
// ---- RNA processing ----
{
  let s = defs + text(380, 22, "Eukaryotic RNA processing: pre-mRNA → mature mRNA", { size: 16, weight: "bold" });
  const seg = (x, w, col, lab, o = {}) => rect(x, o.y || 70, w, 34, { fill: col, stroke: "#555", rx: 4 }) + text(x + w / 2, (o.y || 70) + 22, lab, { size: 12, weight: "bold", fill: o.fill || "#fff" });
  s += text(30, 62, "DNA gene", { size: 12, anchor: "start", weight: "bold", fill: C.muted });
  s += text(30, 130, "pre-mRNA", { size: 12, anchor: "start", weight: "bold", fill: C.muted });
  // pre-mRNA with cap, exons, introns
  const y = 140; const parts = [[100, 50, BLUE, "Exon 1"], [150, 70, "#c9c9c9", "Intron", "#333"], [220, 60, RED, "Exon 2"], [280, 70, "#c9c9c9", "Intron", "#333"], [350, 60, "#2d9a5a", "Exon 3"]];
  s += circle(92, y + 17, 9, { fill: C.orange || "#e8a33a", stroke: "#8a5a00" }) + text(92, y + 52, "5′ cap", { size: 11 });
  parts.forEach(([x, w, c, l, f]) => s += seg(x, w, c, l, { y, fill: f }));
  s += text(425, y + 52, "poly-A tail", { size: 11 }) + `<text x="440" y="${y + 22}" font-size="12" font-weight="bold" fill="#8a5a00" text-anchor="start">AAAAAAA</text>`;
  s += text(300, y - 14, "transcription adds a 5′ cap and a 3′ poly-A tail", { size: 11.5, fill: C.muted });
  s += arrow(300, 190, 300, 224, { w: 2.5 }) + text(390, 212, "spliceosome cuts out introns, joins exons", { size: 12, weight: "bold", fill: C.green, anchor: "start" });
  const y2 = 236;
  s += circle(152, y2 + 17, 9, { fill: "#e8a33a", stroke: "#8a5a00" }) + seg(165, 50, BLUE, "Exon 1", { y: y2 }) + seg(215, 60, RED, "Exon 2", { y: y2 }) + seg(275, 60, "#2d9a5a", "Exon 3", { y: y2 }) + `<text x="342" y="${y2 + 22}" font-size="12" font-weight="bold" fill="#8a5a00">AAAAAAA</text>`;
  s += text(400, y2 + 22, "→ leaves nucleus, translated", { size: 12, anchor: "start" });
  // alt splicing
  s += rect(520, 60, 220, 70, { fill: "#fbf6e6", stroke: "#eadba0", rx: 8 }) + text(630, 82, "Alternative splicing", { size: 13, weight: "bold" }) + text(630, 102, "skip exon 2 →  Exon 1 + Exon 3", { size: 12 }) + text(630, 120, "one gene, several proteins", { size: 12, fill: C.muted });
  s += text(380, 300, "EXons are EXpressed; INtrons are IN the way (removed).", { size: 12.5, weight: "bold" });
  FIGS["rna-processing"] = { svg: svg(760, 316, s, "Pre-mRNA with cap, exons, introns and poly-A tail processed into mature mRNA"), caption: "Pre-mRNA gets a 5′ cap and poly-A tail, then the spliceosome removes introns and joins exons. Choosing different exons (alternative splicing) lets one gene make more than one protein." };
}
// ---- codon table ----
{
  const B = ["U", "C", "A", "G"];
  const T = {
    UU: ["Phe", "Phe", "Leu", "Leu"], UC: ["Ser", "Ser", "Ser", "Ser"], UA: ["Tyr", "Tyr", "STOP", "STOP"], UG: ["Cys", "Cys", "STOP", "Trp"],
    CU: ["Leu", "Leu", "Leu", "Leu"], CC: ["Pro", "Pro", "Pro", "Pro"], CA: ["His", "His", "Gln", "Gln"], CG: ["Arg", "Arg", "Arg", "Arg"],
    AU: ["Ile", "Ile", "Ile", "Met"], AC: ["Thr", "Thr", "Thr", "Thr"], AA: ["Asn", "Asn", "Lys", "Lys"], AG: ["Ser", "Ser", "Arg", "Arg"],
    GU: ["Val", "Val", "Val", "Val"], GC: ["Ala", "Ala", "Ala", "Ala"], GA: ["Asp", "Asp", "Glu", "Glu"], GG: ["Gly", "Gly", "Gly", "Gly"],
  };
  let s = defs + text(380, 22, "The genetic code: mRNA codons and the amino acids they specify", { size: 15, weight: "bold" });
  const x0 = 110, y0 = 78, cw = 120, rh = 32, sub = cw / 4;
  s += text(x0 + cw * 2, 50, "SECOND BASE", { size: 11.5, weight: "bold", fill: C.muted });
  B.forEach((b, j) => s += rect(x0 + j * cw, 56, cw, 20, { fill: "#e6eef9", stroke: "#999" }) + text(x0 + j * cw + cw / 2, 71, b, { size: 13, weight: "bold" }));
  B.forEach((f, i) => {
    s += rect(40, y0 + i * rh * 4, 34, rh * 4, { fill: "#e6eef9", stroke: "#999" }) + text(57, y0 + i * rh * 4 + rh * 2 + 5, f, { size: 14, weight: "bold" });
    B.forEach((sc, j) => {
      const cell = T[f + sc];
      s += rect(x0 + j * cw, y0 + i * rh * 4, cw, rh * 4, { fill: "#fff", stroke: "#999", w: 1.5 });
      B.forEach((t, k) => {
        const aa = cell[k]; const fill = aa === "STOP" ? "#f7d4d4" : aa === "Met" ? "#d4efd4" : null;
        const yy = y0 + i * rh * 4 + k * rh;
        if (fill) s += rect(x0 + j * cw + 1, yy + 1, cw - 2, rh - 2, { fill, stroke: "none" });
        s += text(x0 + j * cw + 8, yy + 20, f + sc + t, { size: 11.5, anchor: "start", fill: C.muted }) + text(x0 + j * cw + cw - 10, yy + 20, aa, { size: 12, weight: "bold", anchor: "end", fill: aa === "STOP" ? C.red : C.ink });
      });
    });
    B.forEach((t, k) => { });
  });
  s += text(24, y0 + rh * 8, "FIRST\nBASE", { size: 10, weight: "bold", fill: C.muted });
  const tx = x0 + cw * 4 + 10;
  B.forEach((t, k) => { });
  s += text(tx + 22, 50, "THIRD", { size: 10.5, weight: "bold", fill: C.muted });
  for (let i = 0; i < 4; i++) B.forEach((t, k) => s += text(tx + 12, y0 + i * rh * 4 + k * rh + 20, t, { size: 12.5, weight: "bold" }));
  s += rect(x0 - 30, 78 + rh * 16 + 10, 540, 34, { fill: "#fbf6e6", stroke: "#eadba0", rx: 8 }) + text(x0 + 240, 78 + rh * 16 + 32, "AUG = Met (start) · UAA, UAG, UGA = STOP · 64 codons, 20 amino acids → degenerate", { size: 11.5, weight: "bold" });
  FIGS["codon-table"] = { svg: svg(760, 78 + rh * 16 + 60, s, "Standard genetic code table of mRNA codons and the amino acids they specify"), caption: "To read the table: take the first base on the left, the second across the top, and the third on the right. AUG is the start codon (Met); UAA, UAG and UGA are stop codons. Many amino acids have several codons, which is why the code is called degenerate." };
}
// ---- Hardy-Weinberg curve ----
{
  let s = defs + text(380, 22, "Hardy-Weinberg: genotype frequencies for every possible allele frequency", { size: 15, weight: "bold" });
  const x0 = 80, y0 = 250, w = 400, h = 190;
  const X = (p) => x0 + p * w, Y = (v) => y0 - v * h;
  s += line(x0, y0, x0 + w, y0, { w: 2, stroke: C.ink }) + line(x0, y0, x0, y0 - h - 4, { w: 2, stroke: C.ink });
  [0, .25, .5, .75, 1].forEach((v) => s += text(X(v), y0 + 18, v.toFixed(2).replace(/0+$/, "").replace(/\.$/, ""), { size: 11 }) + line(X(v), y0, X(v), y0 + 4, { stroke: C.ink }));
  [0, .5, 1].forEach((v) => s += text(x0 - 10, Y(v) + 4, String(v), { size: 11, anchor: "end" }));
  s += text(x0 + w / 2, y0 + 38, "p = frequency of the dominant allele", { size: 12, weight: "bold" }) + text(24, y0 - h / 2, "genotype\nfrequency", { size: 12, weight: "bold", rotate: -90 });
  const curve = (f, col) => { let d = ""; for (let i = 0; i <= 50; i++) { const p = i / 50; d += (i ? " L " : "M ") + X(p) + " " + Y(f(p)); } return path(d, { stroke: col, w: 3, fill: "none" }); };
  s += curve((p) => p * p, BLUE) + curve((p) => 2 * p * (1 - p), "#2d9a5a") + curve((p) => (1 - p) * (1 - p), RED);
  s += text(X(.93), Y(.55), "p² (AA)", { size: 12, weight: "bold", fill: BLUE }) + text(X(.5), Y(.5) - 8, "2pq (Aa)", { size: 12, weight: "bold", fill: "#2d9a5a" }) + text(X(.14), Y(.9), "q² (aa)", { size: 12, weight: "bold", fill: RED });
  s += rect(510, 62, 235, 176, { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 }) + text(627, 86, "Reading the graph", { size: 13, weight: "bold" }) + text(627, 110, "Heterozygotes (2pq) peak at 50%\nwhen p = q = 0.5 and can never\nexceed 0.5.", { size: 12 }) + text(627, 168, "A rare recessive allele hides in\nheterozygotes: when q is small, q²\nis tiny but 2pq is much larger.", { size: 12 });
  FIGS["hw-curve"] = { svg: svg(760, 296, s, "Graph of genotype frequencies p squared, 2pq, and q squared against allele frequency p"), caption: "Hardy-Weinberg genotype frequencies as p changes from 0 to 1. The heterozygote curve (2pq) peaks at 0.5, and when a recessive allele is rare most copies are 'hidden' in heterozygotes." };
}
// ---- genetic drift ----
{
  let s = defs + text(380, 22, "Genetic drift is stronger in small populations", { size: 16, weight: "bold" });
  const dots = (x0, y0, n, cols, r = 8) => cols.map((c, i) => circle(x0 + (i % n) * (2 * r + 4), y0 + Math.floor(i / n) * (2 * r + 4), r, { fill: c, stroke: "#555" })).join("");
  const mix = (nb, nr) => [...Array(nb).fill(BLUE), ...Array(nr).fill(RED)];
  s += text(190, 54, "LARGE POPULATION", { size: 12.5, weight: "bold" }) + dots(60, 80, 10, [...Array(50).fill(0)].map((_, i) => (i * 7 % 10 < 5 ? BLUE : RED)), 8);
  s += arrow(190, 192, 190, 214, { w: 2 }) + text(190, 230, "random survivors ≈ same mix", { size: 11.5, fill: C.muted });
  s += dots(110, 246, 8, [BLUE, RED, BLUE, BLUE, RED, RED, BLUE, RED, BLUE, RED, BLUE, RED, RED, BLUE, RED, BLUE], 7);
  s += text(190, 292, "allele frequencies barely change", { size: 12, weight: "bold" });
  s += line(380, 46, 380, 296, { stroke: C.line, w: 1.5 });
  s += text(570, 54, "SMALL POPULATION", { size: 12.5, weight: "bold" }) + dots(520, 80, 5, [BLUE, RED, BLUE, RED, RED, BLUE, RED, BLUE, BLUE, RED], 8);
  s += arrow(570, 124, 570, 160, { w: 2 }) + text(570, 178, "chance picks 3 survivors", { size: 11.5, fill: C.muted });
  s += dots(550, 202, 3, [BLUE, BLUE, BLUE], 9) + text(570, 246, "red allele lost by chance alone", { size: 12.5, weight: "bold", fill: C.red });
  s += text(570, 268, "(not because blue was 'better')", { size: 11.5, fill: C.muted });
  FIGS["drift"] = { svg: svg(760, 306, s, "Allele frequencies change little in a large population but can change drastically by chance in a small population"), caption: "Drift is random sampling error. In a small population, chance alone can eliminate an allele or push it to fixation; in a large population, the survivors are a near-representative sample." };
}
// ---- speciation ----
{
  let s = defs + text(380, 22, "Speciation: reproductive isolation with and without a geographic barrier", { size: 15, weight: "bold" });
  s += text(190, 52, "ALLOPATRIC (geographic barrier)", { size: 12.5, weight: "bold", fill: C.purple });
  s += `<ellipse cx="190" cy="120" rx="150" ry="50" fill="#f4efe0" stroke="#bbb"/>` + circle(150, 120, 4, { fill: BLUE }) + circle(165, 112, 4, { fill: BLUE }) + circle(220, 125, 4, { fill: BLUE }) + circle(235, 114, 4, { fill: BLUE });
  s += arrow(190, 172, 190, 194, { w: 2 }) + `<ellipse cx="100" cy="226" rx="70" ry="28" fill="#f4efe0" stroke="#bbb"/><ellipse cx="280" cy="226" rx="70" ry="28" fill="#f4efe0" stroke="#bbb"/>` + path("M 190 200 L 190 250", { stroke: "#4a90c2", w: 14 }) + text(190, 266, "river/mountain", { size: 10.5, fill: "#4a90c2" });
  s += circle(90, 226, 4, { fill: BLUE }) + circle(110, 220, 4, { fill: BLUE }) + circle(270, 226, 4, { fill: RED }) + circle(292, 220, 4, { fill: RED });
  s += text(190, 292, "no gene flow → populations diverge\n→ new species if they can no longer interbreed", { size: 11.5, fill: C.muted });
  s += line(380, 44, 380, 306, { stroke: C.line, w: 1.5 });
  s += text(570, 52, "SYMPATRIC (same area)", { size: 12.5, weight: "bold", fill: C.purple });
  s += `<ellipse cx="570" cy="120" rx="150" ry="50" fill="#f4efe0" stroke="#bbb"/>` + [0, 1, 2, 3, 4, 5].map((i) => circle(490 + i * 17, 114 + (i % 2) * 8, 4, { fill: BLUE })).join("") + [0, 1, 2, 3, 4, 5].map((i) => circle(580 + i * 17, 114 + (i % 2) * 8, 4, { fill: RED })).join("");
  s += arrow(570, 176, 570, 200, { w: 2 }) + text(570, 222, "no barrier in space, but reproductive isolation arises:", { size: 11.5 }) + text(570, 242, "polyploidy (plants) · temporal isolation (flowering time)\nhabitat or behavioral isolation · disruptive selection", { size: 11.5, fill: C.muted });
  s += text(380, 330, "Speciation is complete only when the populations are reproductively isolated, not merely separated.", { size: 12.5, weight: "bold" });
  FIGS["speciation"] = { svg: svg(760, 346, s, "Allopatric speciation with a geographic barrier versus sympatric speciation within one area"), caption: "In allopatric speciation a barrier stops gene flow; in sympatric speciation reproductive isolation arises within the same area. Either way, speciation is complete when the groups can no longer interbreed." };
}
// ---- resistance vs resilience ----
{
  let s = defs + text(380, 22, "Resistance vs. resilience after a disturbance", { size: 16, weight: "bold" });
  const x0 = 70, y0 = 230, w = 400, h = 150;
  s += line(x0, y0, x0 + w, y0, { w: 2, stroke: C.ink }) + line(x0, y0, x0, y0 - h, { w: 2, stroke: C.ink }) + text(x0 + w / 2, y0 + 34, "time", { size: 12, weight: "bold" }) + text(28, y0 - h / 2, "ecosystem function\n(e.g. productivity)", { size: 11.5, weight: "bold", rotate: -90 });
  s += line(x0, y0 - 110, x0 + w, y0 - 110, { stroke: "#aaa", w: 1.2, dash: "4 4" }) + text(x0 + w - 4, y0 - 116, "pre-disturbance level", { size: 10.5, fill: C.muted, anchor: "end" });
  s += line(x0 + 110, y0 - h + 6, x0 + 110, y0, { stroke: C.red, w: 1.5, dash: "5 4" }) + text(x0 + 110, y0 - h, "disturbance", { size: 11.5, weight: "bold", fill: C.red });
  s += path(`M ${x0} ${y0 - 110} L ${x0 + 110} ${y0 - 110} Q ${x0 + 135} ${y0 - 70} ${x0 + 170} ${y0 - 62} Q ${x0 + 250} ${y0 - 58} ${x0 + 330} ${y0 - 108} L ${x0 + w} ${y0 - 110}`, { stroke: BLUE, w: 3.5, fill: "none" });
  s += path(`M ${x0 + 110} ${y0 - 110} L ${x0 + 110} ${y0 - 24} Q ${x0 + 200} ${y0 - 22} ${x0 + 260} ${y0 - 60} Q ${x0 + 330} ${y0 - 100} ${x0 + w} ${y0 - 108}`, { stroke: RED, w: 3.5, fill: "none", dash: "7 4" });
  s += text(x0 + 235, y0 - 90, "resistant ecosystem:\nsmall dip", { size: 11.5, fill: BLUE, weight: "bold" }) + text(x0 + 300, y0 - 24, "less resistant: big dip,\nbut can still be resilient", { size: 11.5, fill: RED, weight: "bold" });
  s += rect(510, 62, 235, 190, { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 }) + text(627, 86, "Two different ideas", { size: 13, weight: "bold" }) + text(627, 112, "RESISTANCE\nhow little function changes\nwhen the disturbance hits", { size: 12 }) + text(627, 168, "RESILIENCE\nhow quickly function returns\nto its previous level", { size: 12 }) + text(627, 224, "More biodiversity → more redundancy →\nusually higher resilience", { size: 11.5, fill: C.green, weight: "bold" });
  FIGS["resistance-resilience"] = { svg: svg(760, 290, s, "Graph of ecosystem function over time after a disturbance for a resistant and a less resistant ecosystem"), caption: "Resistance is the size of the drop; resilience is the speed of the return. Greater biodiversity provides functional redundancy, which generally improves both." };
}
