import { COL, svg, line, rect, circle, text, path, poly, dot, vec, chart, resistor, battery, meter, bulb, wire, node, lens, fig, curve } from "./figlib.mjs";

// ---------------- PV diagram ----------------
/** states: [{label, V, P}] connected in order (closed if close). V in L (x), P in kPa (y). */
export function pvDiagram({ states, close = true, xMax, yMax, xStep = 1, yStep = 20, curved = {} }) {
  const W = 480, H = 330, mL = 64, mR = 24, mT = 22, mB = 56;
  const px = (v) => mL + (v / xMax) * (W - mL - mR), py = (p) => H - mB - (p / yMax) * (H - mT - mB);
  let b = "";
  for (let t = 0; t <= yMax; t += yStep) { b += line(mL, py(t), W - mR, py(t), { stroke: COL.grid, w: 1 }) + text(mL - 8, py(t) + 4, t, { anchor: "end", size: 12 }); }
  for (let t = 0; t <= xMax; t += xStep) { b += line(px(t), H - mB, px(t), H - mB + 5) + text(px(t), H - mB + 19, t, { size: 12 }); }
  b += line(mL, H - mB, W - mR, H - mB) + line(mL, mT, mL, H - mB);
  b += text((mL + W - mR) / 2, H - 12, "Volume (L)") + text(18, (mT + H - mB) / 2, "Pressure (kPa)", { rotate: -90 });
  const pts = states.map((s) => [px(s.V), py(s.P)]);
  const seq = close ? [...pts, pts[0]] : pts;
  for (let i = 0; i < seq.length - 1; i++) {
    const a = seq[i], c = seq[i + 1];
    b += line(a[0], a[1], c[0], c[1], { stroke: COL.a, w: 2.6 });
    const mx = (a[0] + c[0]) / 2, my = (a[1] + c[1]) / 2, ang = Math.atan2(c[1] - a[1], c[0] - a[0]);
    const L = 7;
    b += `<polygon points="${[[mx + L * Math.cos(ang), my + L * Math.sin(ang)], [mx - L * Math.cos(ang) + 5 * Math.sin(ang), my - L * Math.sin(ang) - 5 * Math.cos(ang)], [mx - L * Math.cos(ang) - 5 * Math.sin(ang), my - L * Math.sin(ang) + 5 * Math.cos(ang)]].map((q) => q.map((n) => Math.round(n * 10) / 10).join(",")).join(" ")}" fill="${COL.a}"/>`;
  }
  states.forEach((s, i) => { b += dot(pts[i][0], pts[i][1], 4.5, COL.ink) + text(pts[i][0] + (s.dx ?? 12), pts[i][1] + (s.dy ?? -8), s.label, { weight: 800, size: 14 }); });
  return svg(W, H, b);
}

// ---------------- circuits ----------------
// Layout helper: battery on the left, wires on a rectangle.
export function circuitSeriesParallel({ V, R1, R2, R3, r1 = "R₁", r2 = "R₂", r3 = "R₃" }) {
  const W = 520, H = 250; let b = "";
  const yTop = 50, yBot = 200, xL = 50, xN1 = 250, xN2 = 400;
  b += wire([[xL + 22, yTop], [xL + 22, 70]]); // dummy placeholder removed below
  b = "";
  // left side: battery vertical in the middle of left wire
  b += wire([[xL, yTop], [110, yTop]]);
  b += resistor(110, yTop, 100, `${r1} = ${R1} Ω`);
  b += wire([[210, yTop], [xN1, yTop]]) + node(xN1, yTop);
  b += wire([[xN1, yTop], [xN1, 80]]) + resistor(xN1, 80, 70, "", true) + text(xN1 + 26, 118, `${r2} = ${R2} Ω`, { anchor: "start" });
  b += wire([[xN1, 150], [xN1, yBot]]);
  b += wire([[xN1, yTop], [xN2, yTop], [xN2, 80]]) + resistor(xN2, 80, 70, "", true) + text(xN2 + 26, 118, `${r3} = ${R3} Ω`, { anchor: "start" });
  b += wire([[xN2, 150], [xN2, yBot]]) + node(xN2, yTop);
  b += wire([[xL, yBot], [xN2, yBot]]) + node(xN1, yBot);
  // battery on left edge (positive plate on top)
  b += wire([[xL, yTop], [xL, 90]]) + battery(xL, 90, "", true) + wire([[xL, 134], [xL, yBot]]);
  b += text(xL - 12, 118, `${V} V`, { anchor: "end", weight: 700 }) + text(xL + 14, 98, "+", { size: 12, anchor: "start" });
  return svg(W, H, b);
}
export function circuitParallel({ V, rs }) {
  const W = 460, H = 240; let b = "";
  const yTop = 45, yBot = 195, xL = 50, xs = rs.map((_, i) => 150 + i * 110);
  b += wire([[xL, yTop], [xs[xs.length - 1], yTop]]) + wire([[xL, yBot], [xs[xs.length - 1], yBot]]);
  xs.forEach((x, i) => { b += wire([[x, yTop], [x, 70]]) + resistor(x, 70, 90, "", true) + text(x + 24, 120, rs[i], { anchor: "start" }) + wire([[x, 160], [x, yBot]]) + node(x, yTop) + node(x, yBot); });
  b += wire([[xL, yTop], [xL, 85]]) + battery(xL, 85, "", true) + wire([[xL, 129], [xL, yBot]]) + text(xL - 12, 112, `${V} V`, { anchor: "end", weight: 700 });
  return svg(W, H, b);
}
export function circuitSeries({ V, rs }) {
  const W = 460, H = 200; let b = "";
  const yTop = 45, yBot = 150, xL = 50, xR = 410;
  b += wire([[xL, yTop], [90, yTop]]);
  let x = 90; const seg = (xR - 90) / rs.length;
  rs.forEach((r, i) => { b += resistor(x + 10, yTop, seg - 20, r) + wire([[x, yTop], [x + 10, yTop]]) + wire([[x + seg - 10, yTop], [x + seg, yTop]]); x += seg; });
  b += wire([[xR, yTop], [xR, yBot], [xL, yBot]]) + wire([[xL, yTop], [xL, 70]]) + battery(xL, 70, "", true) + wire([[xL, 114], [xL, yBot]]) + text(xL - 12, 96, `${V} V`, { anchor: "end", weight: 700 });
  return svg(W, H, b);
}
/** Two resistors in parallel, then a third in series with the battery. */
export function circuitParallelThenSeries({ V, Rp1, Rp2, Rs }) {
  const W = 460, H = 250; let b = "";
  const yTop = 50, yBot = 205, xL = 50, xA = 180, xB = 360;
  b += wire([[xL, yTop], [80, yTop]]) + resistor(80, yTop, 90, `${Rs} Ω`) + wire([[170, yTop], [xA + 30, yTop]]) + node(xA + 30, yTop);
  b += wire([[xA + 30, yTop], [xA + 30, 85]]) + resistor(xA + 30, 85, 70, "", true) + text(xA + 56, 123, `${Rp1} Ω`, { anchor: "start" }) + wire([[xA + 30, 155], [xA + 30, yBot]]);
  b += wire([[xA + 30, yTop], [xB, yTop], [xB, 85]]) + resistor(xB, 85, 70, "", true) + text(xB + 26, 123, `${Rp2} Ω`, { anchor: "start" }) + wire([[xB, 155], [xB, yBot]]) + node(xB, yTop);
  b += wire([[xL, yBot], [xB, yBot]]) + node(xA + 30, yBot);
  b += wire([[xL, yTop], [xL, 95]]) + battery(xL, 95, "", true) + wire([[xL, 139], [xL, yBot]]) + text(xL - 12, 122, `${V} V`, { anchor: "end", weight: 700 });
  return svg(W, H, b);
}
/** Single loop: battery with internal resistance r (drawn in the box) and an external resistor R. */
export function circuitInternal({ emf, r, R }) {
  const W = 420, H = 250; let b = "";
  const xL = 80, xR = 330, yT = 55, yB = 218;
  b += rect(36, 70, 138, 114, { dash: "5 4", stroke: COL.g, w: 1.4 }) + text(105, 200, "real battery", { size: 12, fill: COL.soft });
  b += wire([[xL, yT], [xR, yT]]) + wire([[xL, yB], [xR, yB]]);
  b += wire([[xL, yT], [xL, 80]]) + battery(xL, 80, "", true) + text(xL - 16, 108, `${emf} V`, { anchor: "end", weight: 700 }) + text(xL + 14, 90, "+", { size: 12, anchor: "start" });
  b += wire([[xL, 124], [xL, 132]]) + resistor(xL, 132, 50, "", true) + text(xL + 24, 160, `r = ${r} Ω`, { anchor: "start", size: 12 }) + wire([[xL, 182], [xL, yB]]);
  b += wire([[xR, yT], [xR, 95]]) + resistor(xR, 95, 70, "", true) + text(xR - 26, 135, `R = ${R} Ω`, { anchor: "end" }) + wire([[xR, 165], [xR, yB]]);
  return svg(W, H, b);
}

// ---------------- electrostatics ----------------
/** charges along a horizontal line. items: [{x, label, q: '+'|'-'|null (point)}] x in px. */
export function chargeLine({ items, y = 70, W = 480, H = 140, spans = [] }) {
  let b = line(30, y, W - 30, y, { stroke: COL.grid, w: 1.5 });
  items.forEach((it) => {
    if (it.q) b += circle(it.x, y, 15, { fill: it.q === "+" ? "#F6D5CC" : "#CFE0EA", stroke: it.q === "+" ? COL.b : COL.a, w: 2 }) + text(it.x, y + 5, it.q === "+" ? "+" : "−", { weight: 800, size: 17 });
    else b += dot(it.x, y, 5) + text(it.x, y - 14, it.name || "P", { weight: 800, size: 14 });
    if (it.label) b += text(it.x, y + 38, it.label, { size: 13 });
  });
  spans.forEach((s) => { b += line(s.x1, y + 62, s.x2, y + 62, { arrow: true, arrow2: true, w: 1.4 }) + text((s.x1 + s.x2) / 2, y + 80, s.label, { size: 13 }); });
  return svg(W, H + (spans.length ? 40 : 0), b);
}
/** Parallel-plate capacitor with field arrows. */
export function plateCapacitor({ V, d, labelPlus = true }) {
  const W = 390, H = 220; let b = "";
  b += line(60, 60, 280, 60, { w: 5, stroke: COL.b }) + line(60, 160, 280, 160, { w: 5, stroke: COL.a });
  b += text(40, 66, "+", { weight: 800, size: 20, fill: COL.b }) + text(40, 168, "−", { weight: 800, size: 22, fill: COL.a });
  [100, 170, 240].forEach((x) => (b += vec(x, 72, x, 148, { stroke: COL.soft, w: 1.8 })));
  b += line(300, 60, 300, 160, { arrow: true, arrow2: true, w: 1.4 }) + text(312, 114, d, { anchor: "start" });
  b += text(170, 30, V, { weight: 700 });
  return svg(W, H, b);
}

// ---------------- magnetism ----------------
/** Uniform B field (into/out of page) with a velocity arrow for a charge. */
export function magneticField({ dir = "in", vdir = "right", q = "+" }) {
  const W = 400, H = 260; let b = rect(20, 20, 360, 220, { stroke: COL.grid, w: 1.5 });
  for (let x = 60; x <= 340; x += 56) for (let y = 55; y <= 215; y += 52) {
    if (dir === "in") b += line(x - 6, y - 6, x + 6, y + 6, { w: 1.8, stroke: COL.soft }) + line(x - 6, y + 6, x + 6, y - 6, { w: 1.8, stroke: COL.soft });
    else b += circle(x, y, 6, { stroke: COL.soft, w: 1.8 }) + dot(x, y, 1.8, COL.soft);
  }
  const cx = 200, cy = 130;
  b += circle(cx, cy, 13, { fill: q === "+" ? "#F6D5CC" : "#CFE0EA", stroke: q === "+" ? COL.b : COL.a, w: 2 }) + text(cx, cy + 5, q === "+" ? "+" : "−", { weight: 800, size: 16 });
  const d = { right: [60, 0], left: [-60, 0], up: [0, -60], down: [0, 60] }[vdir];
  b += vec(cx + (d[0] ? Math.sign(d[0]) * 13 : 0), cy + (d[1] ? Math.sign(d[1]) * 13 : 0), cx + d[0] * 1.2, cy + d[1] * 1.2, { stroke: COL.ink, w: 2.6 });
  b += text(cx + d[0] * 1.2 + (d[0] > 0 ? 16 : d[0] < 0 ? -16 : 0), cy + d[1] * 1.2 + (d[1] > 0 ? 18 : d[1] < 0 ? -10 : 5), "v", { weight: 800, italic: true, size: 15 });
  b += text(W / 2, H - 4, dir === "in" ? "× = magnetic field directed into the page" : "• = magnetic field directed out of the page", { size: 12, fill: COL.soft });
  return svg(W, H + 8, b);
}

// ---------------- optics ----------------
/** Converging lens ray diagram. f, do in cm; scale px per cm. Draws object, 3 principal rays, image. */
export function lensRays({ f, dO, h = 3, scale = 7, vscale = 16 }) {
  const dI = (f * dO) / (dO - f), W = 560, H = 270, cy = 140, cx = 280;
  const X = (cm) => cx + cm * scale, Y = (cm) => cy - cm * vscale; // cm along axis (+ right), height (+ up; exaggerated)
  const hi = (-dI / dO) * h; // image height (signed)
  let b = line(20, cy, W - 20, cy, { stroke: COL.g, w: 1.2 }) + lens(cx, cy, 78, true);
  b += tickF(X(-f), cy, "F") + tickF(X(f), cy, "F") + tickF(X(-2 * f), cy, "2F") + tickF(X(2 * f), cy, "2F");
  const ox = X(-dO), oy = Y(h);
  b += line(ox, cy, ox, oy, { stroke: COL.a, w: 3, arrow: true });
  const rayCol = COL.b;
  // 1: parallel to axis -> through far focus
  const iy = Y(hi), ix = X(dI);
  const far = (x1, y1, x2, y2, xEnd) => { const t = (xEnd - x1) / (x2 - x1); return [xEnd, y1 + t * (y2 - y1)]; };
  b += line(ox, oy, cx, oy, { stroke: rayCol, w: 1.6 });
  const e1 = far(cx, oy, X(f), cy, W - 24); b += line(cx, oy, e1[0], e1[1], { stroke: rayCol, w: 1.6 });
  // 2: through center
  const e2 = far(ox, oy, cx, cy, W - 24); b += line(ox, oy, e2[0], e2[1], { stroke: rayCol, w: 1.6 });
  if (dI > 0) { b += line(ix, cy, ix, iy, { stroke: COL.c, w: 3, arrow: true }); }
  return svg(W, H, b);
}
function tickF(x, y, s) { return line(x, y - 5, x, y + 5, { w: 1.6 }) + text(x, y + 20, s, { size: 12, weight: 700 }); }

// ---------------- waves ----------------
/** Snapshot y(x) = A sin(2πx/λ). Units labeled; axes in cm. */
export function waveSnapshot({ A, lam, xMax, yUnit = "cm", xUnit = "cm", xStep }) {
  const W = 520, H = 250, mL = 56, mR = 20, mT = 20, mB = 50;
  const yMax = A * 1.5, cy = (mT + H - mB) / 2;
  const px = (v) => mL + (v / xMax) * (W - mL - mR), py = (v) => cy - (v / yMax) * ((H - mT - mB) / 2);
  let b = line(mL, cy, W - mR, cy) + line(mL, mT, mL, H - mB);
  const step = xStep || lam / 2;
  for (let t = 0; t <= xMax + 1e-9; t += step) b += line(px(t), cy - 4, px(t), cy + 4) + text(px(t), cy + 20, +t.toFixed(3), { size: 12 });
  [-A, 0, A].forEach((t) => (b += line(mL - 4, py(t), mL, py(t)) + text(mL - 8, py(t) + 4, +t.toFixed(3), { anchor: "end", size: 12 })));
  b += path("M" + curve((x) => A * Math.sin((2 * Math.PI * x) / lam), 0, xMax, 120).map(([x, y]) => `${px(x).toFixed(1)} ${py(y).toFixed(1)}`).join("L"), { stroke: COL.a, w: 2.6 });
  b += text((mL + W - mR) / 2, H - 8, `Position x (${xUnit})`) + text(16, cy, `Displacement y (${yUnit})`, { rotate: -90 });
  return svg(W, H, b);
}
/** Standing wave on a string with n loops between fixed ends. */
export function standingWave({ n, L = "L" }) {
  const W = 460, H = 170, x0 = 50, x1 = 410, cy = 80, A = 46;
  let b = "";
  const pts = (sgn) => curve((x) => sgn * A * Math.sin((n * Math.PI * x) / 1), 0, 1, 120).map(([x, y]) => `${(x0 + x * (x1 - x0)).toFixed(1)} ${(cy - y).toFixed(1)}`).join("L");
  b += path("M" + pts(1), { stroke: COL.a, w: 2.4 }) + path("M" + pts(-1), { stroke: COL.a, w: 2.4, dash: "6 4" });
  b += circle(x0, cy, 5, { fill: COL.ink }) + circle(x1, cy, 5, { fill: COL.ink });
  b += line(x0, cy + 70, x1, cy + 70, { arrow: true, arrow2: true, w: 1.4 }) + text((x0 + x1) / 2, cy + 90, L);
  return svg(W, H + 10, b);
}

// ---------------- modern physics ----------------
/** Energy-level diagram. levels: [{n, E}] E in eV (negative), highest = 0 line optional */
export function energyLevels({ levels, arrows = [], W = 420, H = 300 }) {
  const mT = 24, mB = 20, Emin = Math.min(...levels.map((l) => l.E)) - 0.8, Emax = 0.8;
  const py = (E) => mT + ((Emax - E) / (Emax - Emin)) * (H - mT - mB);
  let b = text(70, 16, "Energy (eV)", { size: 12 });
  levels.forEach((l) => { b += line(110, py(l.E), 230, py(l.E), { w: 2.4 }) + text(100, py(l.E) + 4, `n = ${l.n}`, { anchor: "end", size: 13, weight: 700 }) + text(240, py(l.E) + 4, `${l.E} eV`, { anchor: "start", size: 13 }); });
  b += line(110, py(0), 230, py(0), { stroke: COL.g, dash: "5 4", w: 1.4 }) + text(240, py(0) + 4, "0 eV (ionized)", { anchor: "start", size: 12, fill: COL.soft });
  arrows.forEach((a, i) => { b += vec(130 + i * 40, py(a.from), 130 + i * 40, py(a.to), { stroke: COL.b }); if (a.label) b += text(130 + i * 40 + 14, (py(a.from) + py(a.to)) / 2 + 4, a.label, { size: 13, weight: 800, fill: COL.b, anchor: "start" }); });
  return svg(W, H, b);
}
/** Photoelectric: max KE vs frequency, line through (f0,0) with slope h (shown in eV per 10^14 Hz). */
export function photoGraph({ f0, slope, fMax = 10, kMax = 4 }) {
  return chart({ w: 480, h: 320, x: [0, fMax, 2], y: [-1.0, kMax, 1], xLabel: "Frequency of incident light (×10¹⁴ Hz)", yLabel: "Maximum kinetic energy (eV)", series: [{ name: "data", pts: [[f0, 0], [fMax, slope * (fMax - f0)]], color: COL.a }], annotations: [{ type: "dot", x: f0, y: 0, fill: COL.b }, { type: "text", x: f0 + 0.15, y: -0.55, s: "f₀", size: 14 }], yFmt: (v) => v });
}
export { fig };
