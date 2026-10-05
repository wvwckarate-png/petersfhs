import { COL, svg, line, rect, circle, text, path, poly, dot, vec, chart, barChart, curve, fig, table } from "./figlib.mjs";
export { fig, table, chart, barChart, curve, COL };

function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const ATOM = { A: "#5B9BC4", B: "#D9715B", C: "#6FA76A", D: "#E8B23D" };
function drawParticle(kind, x, y, rot) {
  // kind like "A", "B2", "AB", "AB2", "A2B": letters = atoms, digits = repeat count of previous letter
  const atoms = []; for (let i = 0; i < kind.length; i++) { const ch = kind[i]; if (/[A-D]/.test(ch)) { let n = 1; if (/\d/.test(kind[i + 1] || "")) { n = +kind[i + 1]; i++; } for (let k = 0; k < n; k++) atoms.push(ch); } }
  const r = 7.5, sp = 12; let out = "";
  const pos = atoms.length === 1 ? [[0, 0]] : atoms.length === 2 ? [[-sp / 2, 0], [sp / 2, 0]] : atoms.length === 3 ? [[-sp, 0], [0, 0], [sp, 0]] : [[0, 0], [0, -sp], [sp * 0.87, sp * 0.5], [-sp * 0.87, sp * 0.5]];
  // for 3-atom molecules like AB2 put the unique atom in the middle
  let order = atoms.slice();
  if (atoms.length === 4) { const uniq = atoms.find((a) => atoms.filter((b) => b === a).length === 1); if (uniq) order = [uniq, ...atoms.filter((a) => a !== uniq)]; }
  if (atoms.length === 3) { const uniq = atoms.find((a) => atoms.filter((b) => b === a).length === 1); if (uniq) order = [atoms.find((a) => a !== uniq), uniq, atoms.find((a) => a !== uniq)]; }
  const c = Math.cos(rot), s = Math.sin(rot);
  const P = pos.map(([px, py]) => [x + px * c - py * s, y + px * s + py * c]);
  if (P.length === 4) { for (let i = 1; i < 4; i++) out += line(P[0][0], P[0][1], P[i][0], P[i][1], { stroke: "#555", w: 2 }); }
  else if (P.length > 1) for (let i = 0; i < P.length - 1; i++) out += line(P[i][0], P[i][1], P[i + 1][0], P[i + 1][1], { stroke: "#555", w: 2 });
  P.forEach((p, i) => (out += circle(p[0], p[1], r, { fill: ATOM[order[i]], stroke: "#333", w: 1 })));
  return out;
}
/** boxes: [{title, parts:[{kind, n}]}]; draws a row of particle boxes. */
export function particleBoxes({ boxes, boxW = 150, boxH = 140, seed = 5, legend = true }) {
  const gap = 24, W = boxes.length * boxW + (boxes.length - 1) * gap + 30, H = boxH + 70 + (legend ? 30 : 0);
  let b = "";
  const R = rng(seed);
  boxes.forEach((bx, i) => {
    const x0 = 15 + i * (boxW + gap), y0 = 34;
    b += text(x0 + boxW / 2, 20, bx.title, { weight: 800, size: 14 }) + rect(x0, y0, boxW, boxH, { stroke: COL.ink, w: 1.8, fill: "#fff" });
    const placed = [];
    for (const part of bx.parts) for (let k = 0; k < part.n; k++) {
      let tries = 0, px, py;
      do { px = x0 + 22 + R() * (boxW - 44); py = y0 + 22 + R() * (boxH - 44); tries++; } while (placed.some((q) => Math.hypot(q[0] - px, q[1] - py) < 30) && tries < 200);
      placed.push([px, py]);
      b += drawParticle(part.kind, px, py, R() * Math.PI);
    }
  });
  if (legend) {
    const kinds = new Set(); boxes.forEach((bx) => bx.parts.forEach((p) => p.kind.split("").filter((ch) => /[A-D]/.test(ch)).forEach((ch) => kinds.add(ch))));
    let lx = 15; const ly = H - 16;
    [...kinds].sort().forEach((k) => { b += circle(lx + 7, ly, 7, { fill: ATOM[k], stroke: "#333", w: 1 }) + text(lx + 20, ly + 4, k === "A" ? "= atom A" : k === "B" ? "= atom B" : k === "C" ? "= atom C" : "= atom D", { anchor: "start", size: 12 }); lx += 90; });
  }
  return svg(W, H, b);
}

/** Photoelectron spectrum. peaks: [{E (MJ/mol), n (relative height), label}] ; x axis reversed (high binding energy at left). */
export function pesSpectrum({ peaks, xMax = 100, unit = "MJ/mol", xTicks }) {
  const W = 520, H = 280, mL = 56, mR = 24, mT = 24, mB = 54;
  const X = (E) => W - mR - (Math.log10(E + 1) / Math.log10(xMax + 1)) * (W - mL - mR);
  const hmax = Math.max(...peaks.map((p) => p.n));
  const Y = (n) => H - mB - (n / (hmax * 1.25)) * (H - mT - mB);
  let b = line(mL, H - mB, W - mR, H - mB) + line(mL, mT, mL, H - mB);
  (xTicks || [0.1, 1, 10, 100]).forEach((t) => { b += line(X(t), H - mB, X(t), H - mB + 5) + text(X(t), H - mB + 19, t, { size: 12 }); });
  b += text((mL + W - mR) / 2, H - 10, `Binding energy (${unit})`) + text(16, (mT + H - mB) / 2, "Relative number of electrons", { rotate: -90, size: 12 });
  peaks.forEach((p) => { b += line(X(p.E), H - mB, X(p.E), Y(p.n), { stroke: COL.a, w: 5 }); if (p.label) b += text(X(p.E), Y(p.n) - 7, p.label, { size: 12, weight: 700 }); });
  return svg(W, H, b);
}
/** Mass spectrum bars. peaks: [{mz, ab}] */
export function massSpectrum({ peaks, mzMin, mzMax, step = 1 }) {
  const W = 480, H = 280, mL = 56, mR = 24, mT = 24, mB = 54;
  const X = (v) => mL + ((v - mzMin) / (mzMax - mzMin)) * (W - mL - mR), Y = (a) => H - mB - (a / 100) * (H - mT - mB);
  let b = line(mL, H - mB, W - mR, H - mB) + line(mL, mT, mL, H - mB);
  for (let t = 0; t <= 100; t += 20) b += line(mL - 4, Y(t), mL, Y(t)) + text(mL - 8, Y(t) + 4, t, { anchor: "end", size: 12 });
  for (let t = mzMin; t <= mzMax; t += step) b += line(X(t), H - mB, X(t), H - mB + 5) + text(X(t), H - mB + 19, t, { size: 12 });
  b += text((mL + W - mR) / 2, H - 10, "Mass-to-charge ratio (m/z)") + text(16, (mT + H - mB) / 2, "Relative abundance (%)", { rotate: -90, size: 12 });
  peaks.forEach((p) => (b += line(X(p.mz), H - mB, X(p.mz), Y(p.ab), { stroke: COL.b, w: 7 }) + text(X(p.mz), Y(p.ab) - 7, p.ab, { size: 12 })));
  return svg(W, H, b);
}

/** pH curve for titrating `Va` mL of acid (conc Ca) with base (conc Cb). weak: Ka or null for strong. */
export function titrationPoints({ Ca, Va, Cb, Ka = null, vMax, n = 160 }) {
  const pts = [], Kw = 1e-14;
  for (let i = 0; i <= n; i++) {
    const vb = (vMax * i) / n, nA = (Ca * Va) / 1000, nB = (Cb * vb) / 1000, Vt = (Va + vb) / 1000;
    let pH;
    if (Ka === null) { const net = nA - nB; if (Math.abs(net) < 1e-12) pH = 7; else if (net > 0) pH = -Math.log10(net / Vt); else pH = 14 + Math.log10(-net / Vt); }
    else {
      // weak acid HA with strong base; solve charge balance numerically for [H+]
      const Cna = nB / Vt, CT = nA / Vt;
      let lo = -14, hi = 0; const f = (lg) => { const h = Math.pow(10, lg); return h + Cna - Kw / h - CT * Ka / (Ka + h); };
      for (let k = 0; k < 80; k++) { const mid = (lo + hi) / 2; if (f(mid) > 0) hi = mid; else lo = mid; }
      pH = -(lo + hi) / 2;
    }
    pts.push([vb, pH]);
  }
  return pts;
}
export function titrationCurve({ Ca, Va, Cb, Ka = null, vMax, annotations = [], yStep = 2 }) {
  return chart({ w: 520, h: 330, x: [0, vMax, vMax <= 30 ? 5 : 10], y: [0, 14, yStep], xLabel: "Volume of base added (mL)", yLabel: "pH", series: [{ name: "pH", pts: titrationPoints({ Ca, Va, Cb, Ka, vMax }), color: COL.a }], annotations });
}

/** Reaction energy profile. reactants/products levels in kJ (relative), peak level; optional catalyzed peak. */
export function energyProfile({ r, p, peak, catPeak, labels = true, values = false, W = 480, H = 300 }) {
  const mL = 70, mR = 30, mT = 24, mB = 50;
  const lo = Math.min(r, p) - 20, hi = Math.max(peak, r, p) + 30;
  const Y = (e) => H - mB - ((e - lo) / (hi - lo)) * (H - mT - mB);
  const x0 = mL, x1 = W - mR, xr = x0 + 70, xp = x1 - 70, xm = (x0 + x1) / 2;
  const curveD = (pk) => `M${x0} ${Y(r)}L${xr} ${Y(r)}C${xr + 50} ${Y(r)} ${xm - 40} ${Y(pk)} ${xm} ${Y(pk)}C${xm + 40} ${Y(pk)} ${xp - 50} ${Y(p)} ${xp} ${Y(p)}L${x1} ${Y(p)}`;
  let b = line(mL, H - mB, W - mR, H - mB) + line(mL, mT, mL, H - mB);
  b += text(mL + (W - mL - mR) / 2, H - 12, "Reaction progress") + text(18, (mT + H - mB) / 2, "Potential energy", { rotate: -90 });
  b += path(curveD(peak), { stroke: COL.a, w: 3 });
  if (catPeak) b += path(curveD(catPeak), { stroke: COL.b, w: 3, dash: "7 5" });
  if (labels) {
    b += line(xr - 30, Y(r), xm, Y(r), { stroke: COL.g, dash: "4 4", w: 1 }) + line(xm - 22, Y(r), xm - 22, Y(peak), { arrow: true, w: 1.6 }) + text(xm - 28, (Y(r) + Y(peak)) / 2 + 4, "Eₐ", { anchor: "end", weight: 700 });
    b += line(xp + 10, Y(r), xp + 10, Y(p), { arrow: true, w: 1.6 }) + line(xp - 20, Y(r), xp + 10, Y(r), { stroke: COL.g, dash: "4 4", w: 1 }) + text(xp + 16, (Y(r) + Y(p)) / 2 + 4, "ΔH", { anchor: "start", weight: 700 });
    b += text(x0 + 35, Y(r) - 8, "reactants", { size: 12 }) + text(x1 - 40, Y(p) + 18, "products", { size: 12 });
  }
  if (values) {
    [[r, ""], [peak, ""], [p, ""]].forEach(([v]) => { b += line(mL - 4, Y(v), mL, Y(v)) + text(mL - 8, Y(v) + 4, v, { anchor: "end", size: 12 }); });
    if (catPeak) b += line(mL - 4, Y(catPeak), mL, Y(catPeak)) + text(mL - 8, Y(catPeak) + 4, catPeak, { anchor: "end", size: 12, fill: COL.b });
    b += text(18, mT - 6, "(kJ)", { anchor: "start", size: 11 });
  }
  return svg(W, H, b);
}

/** Galvanic cell sketch. left/right: {metal, sol}. electronDir: which way electrons flow in the wire. */
export function galvanicCell({ left, right, bridge = "salt bridge", electronDir = "right", volts = "" }) {
  const W = 520, H = 300; let b = "";
  const beaker = (x, c) => rect(x, 140, 130, 110, { stroke: COL.ink, w: 2 }) + rect(x + 1, 165, 128, 84, { fill: c, stroke: "none" });
  b += beaker(60, "#DCEBF3") + beaker(330, "#E8F1DF");
  b += rect(105, 90, 22, 140, { fill: "#C9C5BA", stroke: COL.ink }) + rect(375, 90, 22, 140, { fill: "#C9C5BA", stroke: COL.ink });
  b += text(140, 104, left.metal, { weight: 800, size: 14, anchor: "start" }) + text(410, 104, right.metal, { weight: 800, size: 14, anchor: "start" });
  b += text(125, 270, left.sol, { size: 13 }) + text(395, 270, right.sol, { size: 13 });
  b += poly([[116, 90], [116, 50], [225, 50]]) + poly([[386, 90], [386, 50], [295, 50]]);
  b += circle(260, 50, 22, { fill: "#fff" }) + text(260, 56, "V", { weight: 800, size: 16 }) + (volts ? text(260, 16, volts, { size: 13, weight: 700 }) : "");
  b += path("M170 160 L170 128 L350 128 L350 160", { w: 14, stroke: "#D8D2C0" }) + path("M170 160 L170 128 L350 128 L350 160", { w: 1.6, stroke: COL.ink }) + text(260, 120, bridge, { size: 12 });
  b += electronDir === "right" ? line(135, 34, 205, 34, { arrow: true, w: 1.8 }) + text(170, 26, "e⁻", { size: 12, weight: 700 }) : line(375, 34, 305, 34, { arrow: true, w: 1.8 }) + text(340, 26, "e⁻", { size: 12, weight: 700 });
  return svg(W, H, b);
}

/** Phase diagram (schematic) */
export function phaseDiagram({ labelTriple = "triple point", labelCrit = "critical point", W = 480, H = 320 }) {
  const mL = 62, mR = 24, mT = 22, mB = 52;
  const X = (u) => mL + u * (W - mL - mR), Y = (u) => H - mB - u * (H - mT - mB);
  let b = line(mL, H - mB, W - mR, H - mB) + line(mL, mT, mL, H - mB) + text((mL + W - mR) / 2, H - 12, "Temperature") + text(18, (mT + H - mB) / 2, "Pressure", { rotate: -90 });
  const tp = [0.28, 0.2], cp = [0.86, 0.82];
  b += path(`M${X(0.05)} ${Y(0.03)}L${X(tp[0])} ${Y(tp[1])}`, { w: 2.4, stroke: COL.a }); // sublimation
  b += path(`M${X(tp[0])} ${Y(tp[1])}L${X(0.24)} ${Y(0.98)}`, { w: 2.4, stroke: COL.a }); // melting (slightly negative-slope omitted)
  b += path(`M${X(tp[0])} ${Y(tp[1])}C${X(0.45)} ${Y(0.26)} ${X(0.7)} ${Y(0.5)} ${X(cp[0])} ${Y(cp[1])}`, { w: 2.4, stroke: COL.a });
  b += dot(X(tp[0]), Y(tp[1]), 4.5) + dot(X(cp[0]), Y(cp[1]), 4.5);
  b += text(X(tp[0]) + 10, Y(tp[1]) + 18, labelTriple, { anchor: "start", size: 12 }) + text(X(cp[0]) - 6, Y(cp[1]) - 10, labelCrit, { anchor: "end", size: 12 });
  b += text(X(0.1), Y(0.62), "Solid", { size: 15, weight: 800, fill: COL.soft }) + text(X(0.55), Y(0.7), "Liquid", { size: 15, weight: 800, fill: COL.soft }) + text(X(0.62), Y(0.12), "Gas", { size: 15, weight: 800, fill: COL.soft });
  return svg(W, H, b);
}

/** Maxwell–Boltzmann speed distributions for two temperatures (schematic). */
export function maxwell({ labels = ["T₁", "T₂"] }) {
  const f = (v, s) => (v * v * Math.exp(-(v * v) / (2 * s * s))) / (s * s * s) * 1.6;
  return chart({ w: 480, h: 300, x: [0, 10, 2], y: [0, 0.8, 0.2], xLabel: "Molecular speed", yLabel: "Fraction of molecules", xFmt: () => "", yFmt: () => "", series: [{ name: labels[0], pts: curve((v) => f(v, 1.8), 0, 10, 100), color: COL.a }, { name: labels[1], pts: curve((v) => f(v, 3.0), 0, 10, 100), color: COL.b }], legend: true });
}

/** Potential energy vs internuclear distance with a minimum. */
export function bondCurve({ labelA = "A", labelB = "B", cases = 1 }) {
  const U = (r, d, r0, w) => d * ((1 - Math.exp(-(r - r0) / w)) ** 2 - 1);
  const series = [{ name: labelA, pts: curve((r) => U(r, 435, 74, 40), 55, 300, 120), color: COL.a }];
  if (cases > 1) series.push({ name: labelB, pts: curve((r) => U(r, 240, 199, 62), 150, 480, 120), color: COL.b });
  return chart({ w: 500, h: 310, x: [0, 500, 100], y: [-500, 400, 100], xLabel: "Internuclear distance (pm)", yLabel: "Potential energy (kJ/mol)", series, legend: cases > 1, annotations: [{ type: "hline", y: 0 }] });
}
