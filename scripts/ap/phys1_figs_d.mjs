// Figures for the AP Physics 1 material added in Nov 2026, batch D (Unit 6: work done by a torque, orbiting
// satellites, and the additions to 6.2-6.4). Drawn to scale from the equations in the text.
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, NOTE, axes, title, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah" });
const mk = (c) => (c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah");
const r1 = (n) => (Math.round(n * 10) / 10).toString();
const rad = (d) => (d * Math.PI) / 180;
const escx = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Text with real subscripts: "U_g", "K_{trans}", "r_⊥" (the subscript is set lower and smaller, never below 11 px).
const lab = (x, y, s, o = {}) => {
  const { size = 14, anchor = "middle", weight = "bold", fill = C.ink, italic = false } = o;
  const ss = Math.max(11, Math.round(size * 0.78 * 10) / 10), dy = Math.round(size * 0.3);
  const parts = String(s).split(/_(\{[^}]*\}|[A-Za-z0-9⊥]+)/);
  let body = "";
  parts.forEach((p, i) => {
    if (!p) return;
    if (i % 2) body += `<tspan dy="${dy}" font-size="${ss}">${escx(p.replace(/[{}]/g, ""))}</tspan><tspan dy="-${dy}"></tspan>`;
    else body += `<tspan>${escx(p)}</tspan>`;
  });
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic ? ' font-style="italic"' : ""}>${body}</text>`;
};
// arc of a circle (SVG angles: degrees, measured clockwise from +x on screen), optionally with an arrowhead
const arcPts = (cx, cy, rx, ry, a0, a1, n = 40) => { let d = ""; for (let i = 0; i <= n; i++) { const a = rad(a0 + ((a1 - a0) * i) / n); d += (i ? " L " : "M ") + r1(cx + rx * Math.cos(a)) + " " + r1(cy + ry * Math.sin(a)); } return d; };
const arc = (cx, cy, r, a0, a1, o = {}) => path(arcPts(cx, cy, r, o.ry ?? r, a0, a1), { stroke: o.stroke || C.ink, w: o.w || 2, dash: o.dash, marker: o.arrow ? mk(o.stroke || C.ink) : undefined });
const dot = (x, y, r = 5, c = C.ink) => circle(x, y, r, { fill: c });

// 1. Where W = τΔθ comes from
{
  let s = defs + title("A force at the rim does work Fs, and s = rΔθ, so W = τΔθ");
  const cx = 210, cy = 205, R = 130, th0 = 0, dth = 70; // wheel turns counterclockwise (on screen) through 70°
  // screen angle for a math angle φ (counterclockwise from +x)
  const P = (phi, rr = R) => [cx + rr * Math.cos(rad(phi)), cy - rr * Math.sin(rad(phi))];
  s += circle(cx, cy, R, { fill: "#eef3fb", stroke: "#5b6b80", w: 3 }) + circle(cx, cy, 7, { fill: "#5b6b80" }) + text(cx - 12, cy + 24, "axle (pivot)", { size: 11.5, fill: C.muted, anchor: "end" });
  const [xa, ya] = P(th0), [xb, yb] = P(th0 + dth);
  // radii to start and end positions
  s += line(cx, cy, xa, ya, { stroke: C.muted, w: 2, dash: "6 5" }) + line(cx, cy, xb, yb, { stroke: C.ink, w: 2.5 });
  const [xm, ym] = P(th0 + dth + 0, R * 0.55);
  s += lab(xm - 14, ym + 4, "r", { size: 15, italic: true, anchor: "end" });
  // angle at the center
  s += path(arcPts(cx, cy, 36, 36, -(th0 + 2), -(th0 + dth - 2)), { stroke: PURPLE, w: 2.5 });
  const [xt, yt] = P(th0 + 20, 56);
  s += lab(xt, yt + 5, "Δθ", { size: 15, fill: PURPLE });
  // arc traveled by the point of application (just outside the rim)
  s += path(arcPts(cx, cy, R - 16, R - 16, -(th0 + 4), -(th0 + dth - 5)), { stroke: GREEN, w: 3.5, marker: "ahg" });
  const [xs, ys] = P(th0 + 50, R - 46);
  s += lab(xs, ys + 5, "s = rΔθ", { size: 14, fill: GREEN, anchor: "middle" });
  // points of application
  s += circle(xa, ya, 7, { fill: "#fff", stroke: C.ink, w: 2 }) + dot(xb, yb, 7);
  s += text(xa + 12, ya + 22, "start", { size: 12, fill: C.muted, anchor: "start" }) + text(xb + 12, yb - 4, "end", { size: 12, fill: C.muted, anchor: "start" });
  // tangential force at the start (ghost) and at the end: counterclockwise tangent = (−sinφ, +cosφ) in math axes
  const F = 78;
  const tan = (phi) => [-Math.sin(rad(phi)), -Math.cos(rad(phi))]; // screen components
  const [ux, uy] = tan(th0), [vx, vy] = tan(th0 + dth);
  s += arrow(xa, ya, xa + F * ux, ya + F * uy, { stroke: "#e9a08a", w: 3, marker: "ahr", dash: "6 4" });
  s += A(xb, yb, xb + F * vx, yb + F * vy, RED, 3.5);
  s += lab(xa + 10, ya - F + 16, "F", { size: 15, fill: RED, anchor: "start" });
  s += lab(xb + F * vx - 6, yb + F * vy - 8, "F", { size: 15, fill: RED, anchor: "end" });
  // derivation panel
  const nx = 420, ny = 66, nw = 316;
  s += rect(nx, ny, nw, 252, NOTE);
  s += text(nx + nw / 2, ny + 26, "Same work, two descriptions", { size: 14, weight: "bold" });
  s += text(nx + 20, ny + 58, "force × distance along the arc", { size: 12.5, anchor: "start", fill: C.muted });
  s += text(nx + 20, ny + 82, "W = Fs = F(rΔθ)", { size: 15, weight: "bold", anchor: "start" });
  s += text(nx + 20, ny + 114, "torque × angle turned", { size: 12.5, anchor: "start", fill: C.muted });
  s += text(nx + 20, ny + 138, "W = (rF)Δθ = τΔθ", { size: 15, weight: "bold", anchor: "start" });
  s += line(nx + 16, ny + 160, nx + nw - 16, ny + 160, { stroke: "#eadba0", w: 1.5 });
  s += text(nx + 20, ny + 184, "τ with the rotation: W > 0 (speeds it up)", { size: 12.5, anchor: "start" });
  s += text(nx + 20, ny + 206, "τ against the rotation: W < 0 (brake)", { size: 12.5, anchor: "start" });
  s += text(nx + 20, ny + 228, "no turning (Δθ = 0): W = 0", { size: 12.5, anchor: "start" });
  s += text(cx, 368, "Δθ must be in radians: 1 revolution = 2π rad.", { size: 12.5, weight: "bold" });
  fig(FIGS, "p1d-torque-work-arc", 760, 388, s, "A wheel of radius r turning through angle Δθ while a tangential force F acts at its rim; the point of application moves along an arc of length s = rΔθ",
    "As the wheel turns through Δθ, the point where the tangential force F acts slides along an arc of length s = rΔθ. The work is W = Fs = F(rΔθ) = (rF)Δθ = τΔθ. You can describe it as force times distance along the arc or as torque times angle turned, and with Δθ in radians both give the same number of joules.");
}

// τ vs θ or τ vs t graph with a flat piece then a linear drop to zero (no areas or results marked)
const flatThenDrop = (o) => {
  let s = defs + title(o.title);
  const x0 = 120, y0 = 300, pxX = 130, pxY = o.pxY; // pixels per unit
  const W = 4 * pxX + 30, H = o.ymax * pxY + 30;
  // grid
  for (let i = 1; i <= 4; i++) s += line(x0 + i * pxX, y0, x0 + i * pxX, y0 - H + 20, { stroke: "#e6e3da", w: 1 });
  o.yt.forEach((v) => { if (v) s += line(x0, y0 - v * pxY, x0 + 4 * pxX + 10, y0 - v * pxY, { stroke: "#e6e3da", w: 1 }); });
  s += arrow(x0, y0, x0 + W, y0, { w: 2 }) + arrow(x0, y0, x0, y0 - H, { w: 2 });
  for (let i = 0; i <= 4; i++) s += line(x0 + i * pxX, y0, x0 + i * pxX, y0 + 6, { w: 1.5 }) + text(x0 + i * pxX, y0 + 22, i.toFixed(1), { size: 12.5 });
  o.yt.forEach((v) => { s += line(x0 - 6, y0 - v * pxY, x0, y0 - v * pxY, { w: 1.5 }) + text(x0 - 10, y0 - v * pxY + 4, v ? v.toFixed(1) : "0", { size: 12.5, anchor: "end" }); });
  s += lab(x0 + 2 * pxX, y0 + 50, o.xl, { size: 13.5 });
  s += `<g transform="rotate(-90 ${x0 - 58} ${y0 - (o.ymax * pxY) / 2})">${lab(x0 - 58, y0 - (o.ymax * pxY) / 2, o.yl, { size: 13.5 })}</g>`;
  const yt = y0 - o.ymax * pxY;
  s += path(`M ${x0} ${yt} L ${x0 + 2 * pxX} ${yt} L ${x0 + 4 * pxX} ${y0}`, { stroke: RED, w: 4 });
  s += dot(x0 + 2 * pxX, yt, 5, RED) + dot(x0 + 4 * pxX, y0, 5, RED);
  s += text(x0 + pxX, yt - 12, o.l1, { size: 12.5, weight: "bold", fill: RED });
  s += text(x0 + 3 * pxX + 22, yt + o.ymax * pxY * 0.5 - 14, o.l2, { size: 12.5, weight: "bold", fill: RED, anchor: "start" });
  return s;
};
// 2. τ vs θ for Worked Example 6
{
  const s = flatThenDrop({ title: "The motor's torque on the wheel as it turns (Worked Example 6)", ymax: 6, pxY: 36, yt: [0, 2, 4, 6], xl: "angular position θ (rad)", yl: "torque τ (N·m)", l1: "constant 6.0 N·m", l2: "decreases linearly\nto zero at 4.0 rad" });
  fig(FIGS, "p1d-torque-vs-theta", 760, 372, s, "Graph of torque versus angular position: 6.0 newton-meters from 0 to 2.0 radians, then a straight line down to zero at 4.0 radians",
    "The torque the motor exerts on the wheel, plotted against the wheel's angular position. The work it does is the area between this graph and the θ-axis. The torque stays positive the whole way, even while it shrinks.");
}

// 3. Energy vs r for circular orbits
{
  let s = defs + title("Energy of a satellite system for circular orbits of different radii");
  const x0 = 120, yz = 190, px = 130, py = 260; // px per R along r (r from R to 5R), py per GMm/R
  const X = (r) => x0 + (r - 1) * px, Y = (e) => yz - e * py;
  const rmax = 5;
  s += arrow(x0, Y(-1.04), x0, Y(0.6), { w: 2 }) + line(x0, yz, X(rmax) + 18, yz, { stroke: C.muted, w: 1.6, dash: "7 5" });
  for (let r = 1; r <= rmax; r++) s += line(X(r), yz - 5, X(r), yz + 5, { w: 1.5 }) + (r > 1 ? text(X(r), yz - 9, r + "R", { size: 12.5 }) : "");
  s += text(x0 + 8, yz - 9, "R", { size: 12.5, anchor: "start" }) + text(x0 + 8, yz + 20, "planet's surface", { size: 11, fill: C.muted, anchor: "start" });
  s += lab(X(rmax) + 24, yz + 5, "r", { size: 14, italic: true, anchor: "start" });
  s += text(x0 - 10, yz + 4, "0", { size: 12.5, anchor: "end" });
  [[0.5, "+GMm/2R"], [-0.5, "−GMm/2R"], [-1, "−GMm/R"]].forEach(([e, t]) => { s += line(x0 - 6, Y(e), x0, Y(e), { w: 1.5 }) + text(x0 - 10, Y(e) + 4, t, { size: 11.5, anchor: "end", fill: C.muted }); });
  s += `<g transform="rotate(-90 26 ${Y(-0.25)})">${text(26, Y(-0.25), "energy", { size: 13.5, weight: "bold" })}</g>`;
  const cv = (f, col) => { let d = ""; for (let i = 0; i <= 120; i++) { const r = 1 + ((rmax - 1) * i) / 120; d += (i ? " L " : "M ") + r1(X(r)) + " " + r1(Y(f(r))); } return path(d, { stroke: col, w: 3.5 }); };
  s += cv((r) => 1 / (2 * r), BLUE) + cv((r) => -1 / r, RED) + cv((r) => -1 / (2 * r), PURPLE);
  s += lab(X(1.5), Y(0.5 / 1.5) - 16, "K = GMm/(2r)", { size: 14, fill: BLUE, anchor: "start" });
  s += lab(X(1.42), Y(-1 / 1.42) + 24, "U_g = −GMm/r", { size: 14, fill: RED, anchor: "start" });
  s += lab(X(rmax) + 8, Y(-0.5 / rmax) + 5, "E = −GMm/(2r)", { size: 13.5, fill: PURPLE, anchor: "start" });
  s += text(X(rmax) + 8, Y(-0.5 / rmax) + 22, "E < 0: bound orbits", { size: 12, weight: "bold", fill: PURPLE, anchor: "start" });
  s += lab(X(rmax) + 8, Y(-1 / rmax) + 26, "U_g", { size: 13.5, fill: RED, anchor: "start" });
  s += lab(X(rmax) + 8, Y(0.5 / rmax) + 4, "K", { size: 13.5, fill: BLUE, anchor: "start" });
  s += text(X(2.8), yz + 20, "E = 0: escape threshold", { size: 12.5, weight: "bold" });
  // halfway check at r = 2R
  const xr = X(2);
  s += line(xr, Y(0.25), xr, Y(-0.5), { stroke: "#bbb", w: 1, dash: "3 4" });
  s += dot(xr, Y(0.25), 4.5, BLUE) + dot(xr, Y(-0.25), 4.5, PURPLE) + dot(xr, Y(-0.5), 4.5, RED);
  const nx = 440, ny = 340, nw = 270;
  s += rect(nx, ny, nw, 96, NOTE) + text(nx + nw / 2, ny + 24, "At every radius", { size: 13, weight: "bold" });
  s += lab(nx + nw / 2, ny + 50, "K = −½U_g and E = ½U_g", { size: 13 });
  s += text(nx + nw / 2, ny + 76, "higher orbit: smaller K, larger E", { size: 12.5 });
  fig(FIGS, "p1d-orbit-energy-vs-r", 760, 470, s, "Graph of kinetic, gravitational potential and total energy versus orbital radius for circular orbits, from the planet's radius R outward",
    "For circular orbits, all three energies follow 1/r. K = GMm/(2r) is half the size of U<sub>g</sub> and opposite in sign, so E = −GMm/(2r) always lies exactly halfway between U<sub>g</sub> and zero (the dots at r = 2R). A larger orbit has less kinetic energy but a less negative, and so greater, total energy.");
}

// 4. Elliptical orbit with energy bars at the near and far points
{
  let s = defs + lab(380, 22, "One elliptical orbit: K and U_g trade off, E stays the same", { size: 16 });
  const u = 90, a = 2 * u, c = 1 * u, b = Math.sqrt(a * a - c * c); // e = 0.5 (r_far = 3 r_near)
  const cx = 375, cy = 220, fx = cx - c; // planet at the left focus
  s += `<ellipse cx="${cx}" cy="${cy}" rx="${a}" ry="${r1(b)}" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="7 5"/>`;
  s += circle(cx, cy, 3, { fill: "#bbb" }) + text(cx, cy + 18, "center", { size: 11, fill: C.muted });
  s += circle(fx, cy, 22, { fill: "#cfe0f5", stroke: BLUE, w: 2 }) + text(fx, cy + 42, "planet (at a focus)", { size: 11.5, fill: BLUE, weight: "bold" });
  const xn = cx - a, xf = cx + a;
  // r arrows from the planet's center
  s += A(fx, cy - 4, xn + 6, cy - 4, C.ink, 2) + lab((fx + xn) / 2 - 4, cy - 12, "r_{near}", { size: 13 });
  s += A(fx + 24, cy - 4, xf - 6, cy - 4, C.ink, 2) + lab((fx + xf) / 2 + 30, cy - 12, "r_{far}", { size: 13 });
  // velocities perpendicular to r: counterclockwise on screen, so down at the left point and up at the right point
  const vn = 90, vf = 30; // v_near r_near = v_far r_far
  s += dot(xn, cy, 7) + A(xn, cy, xn, cy + vn, GREEN, 3.5) + lab(xn - 10, cy + vn - 4, "v_{near}", { size: 13.5, fill: GREEN, anchor: "end" });
  s += dot(xf, cy, 7) + A(xf, cy, xf, cy - vf, GREEN, 3.5) + lab(xf + 12, cy - 12, "v_{far}", { size: 13.5, fill: GREEN, anchor: "start" });
  // right-angle marks
  s += path(`M ${xn} ${cy + 12} L ${xn + 12} ${cy + 12} L ${xn + 12} ${cy}`, { stroke: C.muted, w: 1.3 }) + path(`M ${xf} ${cy - 12} L ${xf - 12} ${cy - 12} L ${xf - 12} ${cy}`, { stroke: C.muted, w: 1.3 });
  s += text(xn + 18, cy - 30, "closest point", { size: 12.5, weight: "bold", anchor: "start" }) + text(xf - 20, cy + 30, "farthest point", { size: 12.5, weight: "bold", anchor: "end" });
  // energy bar charts (per unit GMm/r_near: K 0.75 / 0.083, U −1 / −0.333, E −0.25 / −0.25)
  const bars = (x0, vals, head) => {
    const z = 210, k = 100, bw = 26, gap = 10;
    let g = text(x0 + 59, 84, head, { size: 12.5, weight: "bold" });
    g += line(x0 - 6, z, x0 + 124, z, { w: 2 });
    [["K", vals[0], BLUE], ["U_g", vals[1], RED], ["E", vals[2], PURPLE]].forEach(([t, v, col], i) => {
      const x = x0 + i * (bw + gap) + 4;
      g += rect(x, v > 0 ? z - v * k : z, bw, Math.abs(v) * k, { fill: col, rx: 2, opacity: 0.85 });
      g += lab(x + bw / 2, v > 0 ? z + 18 : z - 8, t, { size: 13, fill: col });
    });
    return g;
  };
  s += bars(28, [0.75, -1, -0.25], "at closest point");
  s += bars(612, [1 / 12, -1 / 3, -0.25], "at farthest point");
  s += text(78, 334, "E bar: same", { size: 12, weight: "bold", fill: PURPLE }) + text(78, 350, "at both points", { size: 12, weight: "bold", fill: PURPLE });
  s += text(682, 334, "E bar: same", { size: 12, weight: "bold", fill: PURPLE }) + text(682, 350, "at both points", { size: 12, weight: "bold", fill: PURPLE });
  s += text(cx, 400, "closest point: short r, fast · farthest point: long r, slow · L = mvr is the same at both", { size: 12.5 });
  fig(FIGS, "p1d-ellipse-orbit-energy", 760, 420, s, "Elliptical orbit with the planet at one focus; short position and long velocity arrows at the closest point, long position and short velocity arrows at the farthest point, with energy bar charts at each",
    "Gravity points at the planet's center, so it exerts no torque about it and L stays constant: at the two ends of the orbit, where v ⊥ r, the short r goes with a long v and the long r with a short v. The bar charts show the same trade in energy: at the closest point K is large and U<sub>g</sub> is most negative, at the farthest point K is small and U<sub>g</sub> is less negative, and E = K + U<sub>g</sub> is identical at both.");
}

// 5. Energy vs time for an elliptical orbit
{
  let s = defs + lab(380, 22, "One elliptical orbit over time: K and U_g trade off, E stays flat", { size: 16 });
  const ecc = 0.5; // semi-major axis a = 1; t = 0 at the farthest point
  const x0 = 110, W = 560, yz = 170, py = 64; // two periods across W; py per GMm/a
  const X = (t) => x0 + t * (W / 2), Y = (e) => yz - e * py;
  const rOf = (t) => { const M = 2 * Math.PI * t + Math.PI; let E = M; for (let i = 0; i < 30; i++) E -= (E - ecc * Math.sin(E) - M) / (1 - ecc * Math.cos(E)); return 1 - ecc * Math.cos(E); };
  const cv = (f, col) => { let d = ""; for (let i = 0; i <= 400; i++) { const t = (2 * i) / 400; d += (i ? " L " : "M ") + r1(X(t)) + " " + r1(Y(f(rOf(t)))); } return path(d, { stroke: col, w: 3.2 }); };
  s += arrow(x0, Y(-2.15), x0, Y(1.75), { w: 2 }) + arrow(x0, yz, X(2) + 30, yz, { w: 2 });
  s += text(x0 - 10, yz + 4, "0", { size: 12.5, anchor: "end" }) + lab(X(2) + 34, yz + 5, "t", { size: 14, italic: true, anchor: "start" });
  s += `<g transform="rotate(-90 40 ${Y(0)})">${text(40, Y(0), "energy", { size: 13.5, weight: "bold" })}</g>`;
  // closest (t = T/2, 3T/2) and farthest (t = 0, T, 2T) markers
  [0.5, 1.5].forEach((t) => { s += line(X(t), Y(1.6), X(t), Y(-2.1), { stroke: "#c9c4b4", w: 1.2, dash: "4 4" }); });
  [1].forEach((t) => { s += line(X(t), Y(1.6), X(t), Y(-2.1), { stroke: "#c9c4b4", w: 1.2, dash: "4 4" }); });
  s += cv((r) => -0.5 + 1 / r, BLUE) + cv((r) => -1 / r, RED);
  s += line(x0, Y(-0.5), X(2), Y(-0.5), { stroke: PURPLE, w: 3.5 });
  s += text(X(0.5), Y(-2.1) + 26, "closest", { size: 12, weight: "bold" }) + text(X(0.5), Y(-2.1) + 41, "approach", { size: 12, weight: "bold" });
  s += text(X(1), Y(-2.1) + 26, "farthest", { size: 12, weight: "bold" }) + text(X(1), Y(-2.1) + 41, "point", { size: 12, weight: "bold" });
  s += text(X(1.5), Y(-2.1) + 26, "closest", { size: 12, weight: "bold" }) + text(X(1.5), Y(-2.1) + 41, "approach", { size: 12, weight: "bold" });
  s += text(X(0.5) + 5, yz + 16, "T/2", { size: 11.5, fill: C.muted, anchor: "start" }) + text(X(1) + 5, yz + 16, "T", { size: 11.5, fill: C.muted, anchor: "start" }) + text(X(1.5) + 5, yz + 16, "3T/2", { size: 11.5, fill: C.muted, anchor: "start" }) + text(X(2), yz + 16, "2T", { size: 11.5, fill: C.muted });
  s += lab(X(0.5) + 26, Y(1.5) + 6, "K", { size: 15, fill: BLUE, anchor: "start" });
  s += lab(X(0.5) + 26, Y(-2) + 4, "U_g", { size: 15, fill: RED, anchor: "start" });
  s += lab(X(2) + 8, Y(-0.5) + 5, "E", { size: 15, fill: PURPLE, anchor: "start" });
  s += rect(X(1) - 92, Y(1.25) - 16, 184, 40, { fill: "#fff", rx: 4 }) + lab(X(1), Y(1.25), "E = K + U_g at every instant", { size: 12.5, fill: PURPLE }) + text(X(1), Y(1.25) + 17, "(E is constant and negative)", { size: 12, fill: PURPLE });
  fig(FIGS, "p1d-orbit-energy-vs-time", 760, 380, s, "Graph of kinetic, gravitational potential and total energy versus time over two periods of an elliptical orbit",
    "Over each period the satellite swings in to its closest approach and back out. K spikes upward near closest approach exactly when U<sub>g</sub> dips to its most negative value, and every rise in K matches an equal drop in U<sub>g</sub>, so K + U<sub>g</sub> = E stays flat at every instant. The satellite spends most of each period far away and moving slowly, so the peaks are narrow.");
}

// 6. Angular momentum of a puck about P and Q
{
  let s = defs + title("A puck moving in a straight line has angular momentum about P");
  const k = 200, P = [210, 260], yl = 260 - 0.5 * k; // 1 m = 200 px; the path is 0.50 m above P (top view)
  s += line(50, yl, 720, yl, { stroke: C.muted, w: 1.8, dash: "8 6" }) + text(54, yl - 12, "path of the puck", { size: 11.5, fill: C.muted, anchor: "start" });
  // P and the perpendicular
  s += dot(P[0], P[1], 6) + lab(P[0] - 12, P[1] + 20, "P", { size: 15, anchor: "end" });
  s += line(P[0], P[1], P[0], yl, { stroke: GOLD, w: 2.5 }) + path(`M ${P[0]} ${yl + 12} L ${P[0] + 12} ${yl + 12} L ${P[0] + 12} ${yl}`, { stroke: C.muted, w: 1.3 });
  s += lab(P[0] - 10, (P[1] + yl) / 2 + 5, "r_⊥ = 0.50 m", { size: 13.5, fill: GOLD, anchor: "end" });
  // puck at closest approach (ghost) and later
  const puck = (x, ghost) => circle(x, yl, 15, { fill: ghost ? "#f1f1f1" : "#3b3b3b", stroke: ghost ? "#aaa" : "#222", w: 2 });
  s += puck(P[0], true) + A(P[0] + 16, yl - 30, P[0] + 76, yl - 30, BLUE, 2) + lab(P[0] + 46, yl - 38, "v", { size: 13, fill: BLUE, italic: true });
  s += text(P[0], yl - 54, "closest approach", { size: 11.5, fill: C.muted });
  const xl = P[0] + Math.sqrt(1 - 0.25) * k; // 1.0 m from P
  s += A(P[0], P[1], xl - 13, yl + 7.5, PURPLE, 2.8);
  s += lab((P[0] + xl) / 2 + 18, (P[1] + yl) / 2 + 22, "r = 1.0 m", { size: 13.5, fill: PURPLE, anchor: "start" });
  s += puck(xl, false) + lab(xl + 4, yl - 24, "m", { size: 13, italic: true, anchor: "end" });
  // v at the later position and the angle between r (extended) and v
  s += A(xl + 16, yl, xl + 110, yl, BLUE, 3.5) + lab(xl + 96, yl + 24, "v", { size: 15, fill: BLUE, italic: true });
  const ext = 80;
  s += line(xl, yl, xl + ext * Math.cos(rad(30)), yl - ext * Math.sin(rad(30)), { stroke: PURPLE, w: 1.6, dash: "5 4" });
  s += path(arcPts(xl, yl, 52, 52, -30, -1), { stroke: C.ink, w: 1.8 });
  s += lab(xl + 58, yl - 18, "θ = 30°", { size: 13.5, anchor: "start" });
  // Q on the path
  const Q = 640;
  s += circle(Q, yl, 6, { fill: "#fff", stroke: C.ink, w: 2.2 }) + lab(Q, yl + 24, "Q", { size: 15 }) + text(Q, yl + 42, "on the path:", { size: 12, fill: C.muted }) + lab(Q, yl + 60, "L about Q = 0", { size: 13, fill: C.ink });
  // note
  s += rect(430, 236, 160, 110, NOTE) + lab(510, 258, "L = rmv sinθ = mvr_⊥", { size: 12.5 });
  s += text(510, 284, "r sinθ is always the\nsame 0.50 m, so L\nabout P is constant.", { size: 12 });
  fig(FIGS, "p1d-puck-angular-momentum", 760, 364, s, "Top view of a puck sliding along a straight path past point P, showing the perpendicular distance 0.50 m, the position vector of length 1.0 m at 30 degrees to the velocity, and a point Q on the path",
    "Angular momentum is measured about a chosen point. About P, the puck's distance r and the angle θ both change as it slides, but r sinθ is always the perpendicular distance r<sub>⊥</sub> from P to the path. About Q, which lies on the path, r and v are parallel, so the puck has no angular momentum about that point.");
}

// 7. τ vs t for the torque pulse
{
  const s = flatThenDrop({ title: "Net torque on the wheel during the torque pulse", ymax: 3, pxY: 66, yt: [0, 1, 2, 3], xl: "time t (s)", yl: "net torque τ_{net} (N·m)", l1: "constant 3.0 N·m", l2: "decreases linearly\nto zero at 4.0 s" });
  fig(FIGS, "p1d-torque-vs-time", 760, 372, s, "Graph of net torque versus time: 3.0 newton-meters from 0 to 2.0 seconds, then a straight line down to zero at 4.0 seconds",
    "The net torque on the wheel in the worked example below, plotted against time. The angular impulse, and so the change in the wheel's angular momentum, is the area between this graph and the time axis.");
}

// 8. Two disks: friction torques are a third-law pair
{
  let s = defs + title("Spinning disk dropped onto a disk at rest: the friction torques pair up");
  const cx = 300, R = 110, ry = 24, t = 34;
  const yTop = 120, yC = yTop + t, yBot = yC + t; // top face of upper disk, contact plane, bottom of lower disk
  const disk = (y1, fill, edge) => `<path d="M ${cx - R} ${y1} L ${cx - R} ${y1 + t} A ${R} ${ry} 0 0 0 ${cx + R} ${y1 + t} L ${cx + R} ${y1} Z" fill="${fill}" stroke="${edge}" stroke-width="2"/>` + `<ellipse cx="${cx}" cy="${y1}" rx="${R}" ry="${ry}" fill="${fill}" stroke="${edge}" stroke-width="2" style="filter:brightness(1.06)"/>`;
  // axle
  s += line(cx, 58, cx, 300, { stroke: "#888", w: 6 });
  s += disk(yC, "#dfe7d8", "#5c7a4f") + disk(yTop, "#d8e3f3", "#4a6a99");
  s += line(cx, 58, cx, yTop, { stroke: "#888", w: 6 });
  s += text(cx + R + 12, yTop + 14, "top disk", { size: 12.5, weight: "bold", anchor: "start", fill: "#4a6a99" }) + text(cx + R + 12, yTop + 30, "(was spinning)", { size: 11.5, anchor: "start", fill: C.muted });
  s += text(cx + R + 12, yC + t + 10, "bottom disk", { size: 12.5, weight: "bold", anchor: "start", fill: "#5c7a4f" }) + text(cx + R + 12, yC + t + 26, "(was at rest)", { size: 11.5, anchor: "start", fill: C.muted });
  // spin of the top disk (front edge moves left to right), drawn above it
  s += path(arcPts(cx, 72, 80, 14, 150, 30), { stroke: C.muted, w: 2.2, marker: "ah" });
  s += lab(cx - 92, 70, "ω_{top}", { size: 13, fill: C.muted, anchor: "end" });
  // friction torques at the contact plane: equal length, opposite sense
  const halo = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`;
  const dTop = arcPts(cx, yC - 12, R + 26, ry + 8, 30, 150), dBot = arcPts(cx, yC + 16, R + 26, ry + 8, 150, 30);
  s += halo(dTop) + path(dTop, { stroke: RED, w: 3.2, marker: "ahr" });
  s += halo(dBot) + path(dBot, { stroke: BLUE, w: 3.2, marker: "ahb" });
  s += lab(cx - R - 30, yC - 18, "τ_{on top}", { size: 13.5, fill: RED, anchor: "end" }) + text(cx - R - 30, yC - 2, "opposes its spin", { size: 11.5, fill: RED, anchor: "end" });
  s += lab(cx - R - 30, yC + 44, "τ_{on bottom}", { size: 13.5, fill: BLUE, anchor: "end" }) + text(cx - R - 30, yC + 60, "same way as the spin", { size: 11.5, fill: BLUE, anchor: "end" });
  // bracket and labels
  const bx = 500;
  s += rect(bx, 92, 240, 170, NOTE);
  s += text(bx + 120, 118, "third-law pair:", { size: 13.5, weight: "bold" }) + text(bx + 120, 138, "equal and opposite", { size: 13.5, weight: "bold" }) + text(bx + 120, 158, "angular impulses", { size: 13.5, weight: "bold" });
  s += lab(bx + 120, 192, "ΔL_{top} = −ΔL_{bottom}", { size: 15 });
  s += text(bx + 120, 222, "System = both disks:", { size: 12.5 }) + text(bx + 120, 240, "total L stays the same", { size: 12.5 });
  s += text(380, 336, "Each disk exerts a friction force on the other at the contact surface, for the same time.", { size: 12 });
  fig(FIGS, "p1d-two-disks-torque-pair", 760, 360, s, "Side view of two disks on a common axle; at the contact surface, equal and opposite friction torques act on the top and bottom disks",
    "While the disks slip against each other, the bottom disk's friction on the top disk exerts a torque against the top disk's spin, and the top disk's friction on the bottom disk exerts an equal torque the other way. The two torques act for the same time, so the angular impulses are equal and opposite: whatever angular momentum the top disk loses, the bottom disk gains.");
}

// 9. Energy bar charts for a disk and a hoop rolling down from the same height
{
  let s = defs + title("Same height, same total kinetic energy at the bottom, different split");
  const z = 270, u = 26, bw = 44, gap = 14; // 26 px per unit
  const panel = (x0, head, sub, vals) => {
    let g = text(x0 + 102, 60, head, { size: 13.5, weight: "bold" }) + text(x0 + 102, 78, sub, { size: 11.5, fill: C.muted });
    for (let i = 1; i <= 6; i++) g += line(x0, z - i * u, x0 + 204, z - i * u, { stroke: "#ebe8df", w: 1 });
    g += line(x0, z, x0 + 204, z, { w: 2 });
    [["K_{trans}", vals[0], BLUE], ["K_{rot}", vals[1], GREEN], ["U_g", vals[2], RED]].forEach(([t, v, col], i) => {
      const x = x0 + 12 + i * (bw + gap);
      if (v) g += rect(x, z - v * u, bw, v * u, { fill: col, rx: 2, opacity: 0.85 }) + text(x + bw / 2, z - v * u - 6, String(v), { size: 12, weight: "bold", fill: col });
      else g += text(x + bw / 2, z - 8, "0", { size: 12, fill: C.muted });
      g += lab(x + bw / 2, z + 20, t, { size: 13, fill: col });
    });
    return g;
  };
  s += panel(28, "top, either object", "released from rest", [0, 0, 6]);
  s += panel(278, "disk at bottom", "I = ½MR²", [4, 2, 0]);
  s += panel(528, "hoop at bottom", "I = MR²", [3, 3, 0]);
  s += line(258, 50, 258, 306, { stroke: C.line, w: 1.5 }) + line(508, 50, 508, 306, { stroke: C.line, w: 1.5 });
  s += text(380, 322, "Same scale in all three panels; each chart totals 6 units.", { size: 12, fill: C.muted });
  s += lab(380, 344, "The hoop puts half its K into rotation, so it has less K_{trans} and a smaller v at every height.", { size: 12.5 });
  fig(FIGS, "p1d-rolling-energy-bars", 760, 362, s, "Energy bar charts for a disk and a hoop rolling from rest: 6 units of gravitational potential energy at the top become 4 translational plus 2 rotational for the disk and 3 plus 3 for the hoop",
    "Both object–Earth systems start with the same U<sub>g</sub>, so both end with the same total kinetic energy. The disk sends one third of it into rotation, the hoop one half. With less K<sub>trans</sub>, the hoop moves more slowly at every height and loses the race.");
}

// 10. Bowling ball: sliding, slipping, then rolling
{
  let s = defs + title("A bowling ball released with no spin: friction slows v and speeds up ω");
  const yl = 210, R = 46, cy = yl - R, xs = [125, 380, 635];
  // speeds for a uniform solid sphere: rω increases 2.5 times as fast as v decreases; rolling when v = (5/7)v0
  const v0 = 120, vv = [1, 0.85, 5 / 7], rw = [0, 2.5 * 0.15, 5 / 7];
  s += line(20, yl, 740, yl, { stroke: "#8a7a5a", w: 4 }) + rect(20, yl + 2, 720, 12, { fill: "#efe6d2", rx: 0 });
  xs.forEach((x, i) => {
    s += circle(x, cy, R, { fill: "#33415c", stroke: "#1f2838", w: 2 });
    // finger holes to show orientation
    s += circle(x - 10, cy - 18, 4, { fill: "#11161f" }) + circle(x + 8, cy - 20, 4, { fill: "#11161f" }) + circle(x - 1, cy - 4, 4.5, { fill: "#11161f" });
    s += dot(x, cy, 4, "#fff");
    s += A(x, cy, x + v0 * vv[i], cy, BLUE, 3.5) + lab(x + v0 * vv[i] + 6, cy + 5, "v", { size: 14, fill: BLUE, italic: true, anchor: "start" });
    // spin: clockwise on screen (forward roll), arc length proportional to ω
    if (rw[i]) {
      const span = 220 * rw[i];
      s += path(arcPts(x, cy, R + 12, R + 12, 290 - span, 290), { stroke: GREEN, w: 3, marker: "ahg" });
      const lx = x + (R + 22) * Math.cos(rad(302)), ly = cy + (R + 22) * Math.sin(rad(302));
      s += lab(lx + 2, ly + 2, "ω", { size: 14, fill: GREEN, anchor: "start" });
    } else s += text(x - R - 8, cy - R + 4, "ω = 0", { size: 13, weight: "bold", fill: GREEN, anchor: "end" });
    // kinetic friction at the contact point, backward
    if (i < 2) s += A(x, yl - 1, x - 62, yl - 1, RED, 3.5) + lab(x - 66, yl - 8, "f_k", { size: 14, fill: RED, anchor: "end" }) + dot(x, yl - 1, 3.5, RED);
  });
  s += text(xs[0], 52, "1. just released", { size: 13.5, weight: "bold" }) + text(xs[1], 52, "2. a moment later", { size: 13.5, weight: "bold" }) + text(xs[2], 52, "3. later still", { size: 13.5, weight: "bold" });
  s += text(xs[0], yl + 40, "sliding", { size: 13.5, weight: "bold" });
  s += text(xs[1], yl + 40, "v > rω, still slipping", { size: 13.5, weight: "bold" });
  s += text(xs[2], yl + 40, "v = rω, rolling", { size: 13.5, weight: "bold" }) + text(xs[2], yl + 58, "no friction needed: steady v", { size: 12, fill: C.muted });
  s += rect(xs[1] - 130, yl + 54, 260, 46, NOTE) + text(xs[1], yl + 74, "kinetic friction turns some K", { size: 12.5, weight: "bold" }) + text(xs[1], yl + 91, "into thermal energy", { size: 12.5, weight: "bold" });
  s += text(380, yl + 124, "Only the friction force is drawn; gravity and the normal force cancel and exert no torque about the center.", { size: 11.5, fill: C.muted });
  fig(FIGS, "p1d-bowling-ball-slipping", 760, 350, s, "Three snapshots of a bowling ball on a lane: sliding with no spin, slipping with some spin, and rolling with v equal to r omega",
    "The ball's bottom slides forward along the lane, so kinetic friction on the ball points backward. That one force slows the center of mass (v drops) and, because it acts at the bottom, exerts a torque that spins the ball up (ω rises). Once v = rω the contact point stops sliding, friction is no longer needed, and the ball rolls at a steady speed lower than its launch speed.");
}
