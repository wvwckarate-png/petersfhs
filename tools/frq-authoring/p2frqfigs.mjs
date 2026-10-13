// Extra figure generators for the Physics 2 FRQ exams (symbolic axes, simple diagrams).
import { COL, svg, line, rect, circle, text, path, poly, dot, vec, fig, chart, table, curve } from "../exam-authoring/figlib.mjs";
export * from "../exam-authoring/p2figs.mjs";
export { COL, svg, line, rect, circle, text, path, poly, dot, vec, fig, chart, table, curve };

/** P–V diagram with symbolic tick labels. states:[{label,x,y,dx,dy}] in plot units; xTicks/yTicks:[{at,label}] */
export function pvSymbolic({ states, xTicks, yTicks, xMax, yMax, close = false, xLabel = "Volume", yLabel = "Pressure", W = 440, H = 320, curved = {}, dashes = [] }) {
  const mL = 70, mR = 28, mT = 24, mB = 56;
  const px = (v) => mL + (v / xMax) * (W - mL - mR), py = (p) => H - mB - (p / yMax) * (H - mT - mB);
  let b = line(mL, H - mB, W - mR, H - mB, { w: 1.8 }) + line(mL, mT, mL, H - mB, { w: 1.8 });
  xTicks.forEach((t) => { b += line(px(t.at), H - mB, px(t.at), H - mB + 5) + text(px(t.at), H - mB + 21, t.label, { size: 14 }); });
  yTicks.forEach((t) => { b += line(mL - 5, py(t.at), mL, py(t.at)) + text(mL - 9, py(t.at) + 5, t.label, { anchor: "end", size: 14 }); });
  b += text((mL + W - mR) / 2, H - 12, xLabel, { size: 14 }) + text(18, (mT + H - mB) / 2, yLabel, { rotate: -90, size: 14 });
  dashes.forEach((d) => { b += line(px(d.x1), py(d.y1), px(d.x2), py(d.y2), { stroke: COL.g, dash: "4 4", w: 1.2 }); });
  const pts = states.map((s) => [px(s.x), py(s.y)]);
  const seq = close ? [...pts, pts[0]] : pts;
  for (let i = 0; i < seq.length - 1; i++) {
    const a = seq[i], c = seq[i + 1];
    b += line(a[0], a[1], c[0], c[1], { stroke: COL.a, w: 2.6 });
    const mx = (a[0] + c[0]) / 2, my = (a[1] + c[1]) / 2, ang = Math.atan2(c[1] - a[1], c[0] - a[0]), L = 7;
    b += `<polygon points="${[[mx + L * Math.cos(ang), my + L * Math.sin(ang)], [mx - L * Math.cos(ang) + 5 * Math.sin(ang), my - L * Math.sin(ang) - 5 * Math.cos(ang)], [mx - L * Math.cos(ang) - 5 * Math.sin(ang), my - L * Math.sin(ang) + 5 * Math.cos(ang)]].map((q) => q.map((n) => Math.round(n * 10) / 10).join(",")).join(" ")}" fill="${COL.a}"/>`;
  }
  states.forEach((s, i) => { b += dot(pts[i][0], pts[i][1], 4.8, COL.ink) + text(pts[i][0] + (s.dx ?? 12), pts[i][1] + (s.dy ?? -9), s.label, { weight: 800, size: 15 }); });
  return svg(W, H, b);
}

/** Blank axes (symbolic) used in model responses, with optional curves. curves:[{pts:[[x,y]], color, label, dash}] */
export function sketchAxes({ xLabel, yLabel, xTicks = [], yTicks = [], xMax = 1, yMax = 1, curves = [], W = 420, H = 300, notes = [] }) {
  const mL = 66, mR = 24, mT = 22, mB = 52;
  const px = (v) => mL + (v / xMax) * (W - mL - mR), py = (p) => H - mB - (p / yMax) * (H - mT - mB);
  let b = line(mL, H - mB, W - mR, H - mB, { w: 1.8 }) + line(mL, mT, mL, H - mB, { w: 1.8 });
  xTicks.forEach((t) => { b += line(px(t.at), H - mB, px(t.at), H - mB + 5) + text(px(t.at), H - mB + 20, t.label, { size: 13 }); });
  yTicks.forEach((t) => { b += line(mL - 5, py(t.at), mL, py(t.at)) + text(mL - 9, py(t.at) + 5, t.label, { anchor: "end", size: 13 }); });
  b += text((mL + W - mR) / 2, H - 10, xLabel, { size: 14 }) + text(16, (mT + H - mB) / 2, yLabel, { rotate: -90, size: 14 });
  curves.forEach((c, i) => {
    const col = c.color || [COL.a, COL.b, COL.c][i % 3];
    b += poly(c.pts.map(([x, y]) => [px(x), py(y)]), { stroke: col, w: 2.6, dash: c.dash });
    if (c.label) { const l = c.pts[c.pts.length - 1]; b += text(px(l[0]) - 6, py(l[1]) - 8, c.label, { anchor: "end", size: 13, fill: col, weight: 700 }); }
  });
  notes.forEach((n) => { b += text(px(n.x), py(n.y), n.s, { size: 12.5, anchor: n.anchor || "start", fill: n.fill || COL.ink }); });
  return svg(W, H, b);
}

function tickF(x, y, s) { return line(x, y - 5, x, y + 5, { w: 1.6 }) + text(x, y + 20, s, { size: 12, weight: 700 }); }
/** Converging lens, principal axis, focal points and an object — no rays (students sketch them). cm distances, scale px per cm. */
export function lensBlank({ f, dO, h = 4, scale = 7, vscale = 16, label = "object" }) {
  const W = 560, H = 250, cy = 125, cx = 280;
  const X = (cm) => cx + cm * scale, Y = (cm) => cy - cm * vscale;
  let b = line(20, cy, W - 20, cy, { stroke: COL.g, w: 1.2 });
  // lens (converging shape)
  b += line(cx, cy - 78, cx, cy + 78, { w: 2 }) + poly([[cx - 8, cy - 70], [cx, cy - 78], [cx + 8, cy - 70]], { w: 2 }) + poly([[cx - 8, cy + 70], [cx, cy + 78], [cx + 8, cy + 70]], { w: 2 });
  b += tickF(X(-f), cy, `F`) + tickF(X(f), cy, `F`);
  const ox = X(-dO);
  b += line(ox, cy, ox, Y(h), { stroke: COL.a, w: 3, arrow: true }) + text(ox, cy + 20, label, { size: 12 });
  b += line(ox, cy + 40, cx, cy + 40, { arrow: true, arrow2: true, w: 1.3 }) + text((ox + cx) / 2, cy + 58, `${dO} cm`, { size: 12.5 });
  b += line(cx, cy + 82, X(f), cy + 82, { arrow: true, arrow2: true, w: 1.3 }) + text((cx + X(f)) / 2, cy + 100, `f = ${f} cm`, { size: 12.5 });
  return svg(W, H + 14, b);
}

// ---------------------------------------------------------------- circuits: capacitors
const capSym = (x, y, vertical = true, label = "", sub = "") => {
  // plates are perpendicular to the wire; (x,y) is the center of the symbol
  let o = "";
  if (vertical) o += line(x, y - 30, x, y - 7, { w: 1.8 }) + line(x - 16, y - 7, x + 16, y - 7, { w: 3 }) + line(x - 16, y + 7, x + 16, y + 7, { w: 3 }) + line(x, y + 7, x, y + 30, { w: 1.8 }) + (label ? text(x + 26, y + 5, label, { anchor: "start", size: 14 }) : "");
  return o;
};
const bat = (x, y, label) => line(x, y - 30, x, y - 7, { w: 1.8 }) + line(x - 16, y - 7, x + 16, y - 7, { w: 3.4 }) + line(x - 9, y + 7, x + 9, y + 7, { w: 3.4 }) + line(x, y + 7, x, y + 30, { w: 1.8 }) + text(x - 24, y + 5, label, { anchor: "end", size: 14, weight: 700 }) + text(x + 14, y - 12, "+", { anchor: "start", size: 12 });
const sw = (x1, y, x2, closed = false) => line(x1, y, x1 + 10, y, { w: 1.8 }) + dot(x1 + 10, y, 3) + line(x1 + 10, y, x2 - 14, closed ? y : y - 22, { w: 1.8 }) + dot(x2 - 10, y, 3) + line(x2 - 10, y, x2, y, { w: 1.8 });
/** Stage 1: battery charges C1. Stage 2: battery removed; C1 connected to uncharged C2. */
export function twoCapacitorStages({ emf, c1, c2 }) {
  const W = 560, H = 230; let b = "";
  b += text(140, 24, "Step 1", { weight: 800, size: 14 });
  // loop 1: battery (left) and C1 (right) with switch on top
  b += line(60, 70, 85, 70, { w: 1.8 }) + sw(85, 70, 165, true) + line(165, 70, 220, 70, { w: 1.8 });
  b += line(60, 70, 60, 85, { w: 1.8 }) + bat(60, 115, `${emf}`) + line(60, 145, 60, 190, { w: 1.8 });
  b += line(220, 70, 220, 85, { w: 1.8 }) + capSym(220, 115, true, c1) + line(220, 145, 220, 190, { w: 1.8 }) + line(60, 190, 220, 190, { w: 1.8 });
  b += text(140, 215, "switch closed: C charges fully", { size: 12, fill: COL.soft });
  b += text(400, 24, "Step 2", { weight: 800, size: 14 });
  // loop 2: C1 and C2 in parallel, no battery
  b += line(340, 70, 470, 70, { w: 1.8 }) + dot(340, 70, 3) + dot(470, 70, 3);
  b += line(340, 70, 340, 85, { w: 1.8 }) + capSym(340, 115, true, c1) + line(340, 145, 340, 190, { w: 1.8 });
  b += line(470, 70, 470, 85, { w: 1.8 }) + capSym(470, 115, true, c2) + line(470, 145, 470, 190, { w: 1.8 });
  b += line(340, 190, 470, 190, { w: 1.8 });
  b += text(410, 215, "battery disconnected; C connected to uncharged 2C", { size: 12, fill: COL.soft });
  return svg(W, H + 10, b);
}

// ---------------------------------------------------------------- electrostatics: equipotentials
/** Vertical equipotential lines at the given x positions (cm) with potentials, optional proton marker. */
export function equipotentials({ lines: ls, W = 520, H = 250, xMaxCm = 8, marker = null, fieldArrows = [] }) {
  const mL = 50, mR = 30, top = 40, bot = 190;
  const px = (cm) => mL + (cm / xMaxCm) * (W - mL - mR);
  let b = "";
  b += line(mL, bot + 28, W - mR, bot + 28, { w: 1.4 });
  for (let cm = 0; cm <= xMaxCm; cm += 2) b += line(px(cm), bot + 24, px(cm), bot + 32, { w: 1.4 }) + text(px(cm), bot + 48, cm, { size: 12 });
  b += text((mL + W - mR) / 2, bot + 66, "Position x (cm)", { size: 13 });
  ls.forEach((l) => { b += line(px(l.x), top, px(l.x), bot, { stroke: COL.a, w: 2.2, dash: "6 4" }) + text(px(l.x), top - 10, l.v, { weight: 800, size: 14 }); });
  fieldArrows.forEach((a) => { b += vec(px(a.x1), a.y, px(a.x2), a.y, { stroke: COL.b, w: 2.2 }); });
  if (marker) b += circle(px(marker.x), (top + bot) / 2, 11, { fill: "#F6D5CC", stroke: COL.b, w: 2 }) + text(px(marker.x), (top + bot) / 2 + 5, marker.s, { weight: 800, size: 14 });
  return svg(W, H + 40, b);
}

// ---------------------------------------------------------------- induction: loop entering a field
export function inductionLoop({ W = 540, H = 250 }) {
  let b = rect(280, 30, 230, 190, { stroke: COL.grid, w: 1.5, fill: "#F5F9FB" });
  for (let x = 310; x <= 490; x += 45) for (let y = 62; y <= 200; y += 46) b += line(x - 5, y - 5, x + 5, y + 5, { w: 1.6, stroke: COL.soft }) + line(x - 5, y + 5, x + 5, y - 5, { w: 1.6, stroke: COL.soft });
  b += text(395, 24, "uniform B = 0.30 T, into the page", { size: 12.5, fill: COL.soft });
  b += rect(90, 80, 110, 110, { stroke: COL.ink, w: 3.2 });
  b += text(145, 140, "R = 0.50 Ω", { size: 13 }) + line(90, 205, 200, 205, { arrow: true, arrow2: true, w: 1.3 }) + text(145, 224, "0.20 m", { size: 12.5 });
  b += vec(212, 135, 262, 135, { stroke: COL.b, w: 2.6 }) + text(237, 120, "v = 2.0 m/s", { size: 12.5, weight: 700 });
  return svg(W, H, b);
}

// ---------------------------------------------------------------- magnetism: charged particle path
export function particleArc({ W = 520, H = 300 }) {
  let b = rect(180, 20, 320, 240, { stroke: COL.grid, w: 1.5, fill: "#F5F9FB" });
  for (let x = 220; x <= 470; x += 50) for (let y = 55; y <= 240; y += 46) b += line(x - 5, y - 5, x + 5, y + 5, { w: 1.6, stroke: COL.soft }) + line(x - 5, y + 5, x + 5, y - 5, { w: 1.6, stroke: COL.soft });
  b += text(340, 14, "region of uniform B, into the page", { size: 12.5, fill: COL.soft });
  const cx = 300, cy = 140;   // entry at (300, 250)? entry point on the left boundary is (180, 240)
  const x0 = 180, y0 = 235, R = 95;
  b += line(30, y0, x0, y0, { stroke: COL.g, w: 1.6, dash: "5 4" }) + vec(60, y0, 140, y0, { stroke: COL.ink, w: 2.6 }) + text(100, y0 - 12, "v", { weight: 800, italic: true, size: 15 });
  b += path(`M${x0} ${y0}A${R} ${R} 0 0 0 ${x0} ${y0 - 2 * R}`, { stroke: COL.b, w: 2.8, dash: "7 5" });
  b += dot(x0, y0, 5) + text(x0 - 8, y0 + 20, "entry", { size: 12, anchor: "end" });
  b += text(x0 + R + 14, y0 - R, "R", { weight: 800, italic: true, size: 15 }) + line(x0, y0 - R, x0 + R - 6, y0 - R, { stroke: COL.soft, w: 1.2 });
  b += text(30, 282, "Accelerated from rest through a potential difference V before entering the field.", { size: 12.5, anchor: "start", fill: COL.soft });
  return svg(W, H, b);
}

// ---------------------------------------------------------------- optics: ray in glass at a boundary
export function glassBoundary({ angle = 50, nGlass = "n = 1.50", nOther = "air", W = 480, H = 280 }) {
  const cx = 240, cy = 150;
  let b = rect(40, cy, 400, 110, { fill: "#E3EDF2", stroke: COL.ink, w: 1.8 }) + text(100, cy + 95, `glass (${nGlass})`, { size: 13, anchor: "start" });
  b += text(100, 40, nOther, { size: 13, anchor: "start" });
  b += line(cx, cy - 100, cx, cy + 60, { stroke: COL.g, dash: "5 4", w: 1.3 }) + text(cx + 6, cy - 100, "normal", { size: 11.5, anchor: "start", fill: COL.soft });
  const a = (angle * Math.PI) / 180, L = 120;
  b += vec(cx - L * Math.sin(a), cy + L * Math.cos(a), cx - 6, cy + 4, { stroke: COL.b, w: 2.6 }) + dot(cx, cy, 4);
  b += path(`M${cx} ${cy + 46}A46 46 0 0 0 ${cx - 46 * Math.sin(a)} ${cy + 46 * Math.cos(a)}`, { w: 1.4, stroke: COL.soft }) + text(cx - 36, cy + 72, `${angle}°`, { size: 13 });
  return svg(W, H, b);
}
