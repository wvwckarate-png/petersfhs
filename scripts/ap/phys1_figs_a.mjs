// Figures for the AP Physics 1 material added in Nov 2026, batch A (Unit 1 additions, new section 1.8, Unit 3 additions).
import { C, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, NOTE, title, fig } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah" });
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const r1 = (n) => (Math.round(n * 10) / 10).toString();
// one line of text with subscripts written as _{...}; subscripts never drop below 11 px
const rt = (x, y, s, o = {}) => {
  const { size = 14, anchor = "middle", weight = "normal", fill = C.ink, italic = false } = o;
  const sub = Math.max(11, Math.round(size * 0.78)), dy = Math.round(size * 0.3);
  let body = "", down = false;
  for (const part of String(s).split(/(_\{[^}]*\})/)) {
    if (!part) continue;
    if (part.startsWith("_{")) { body += `<tspan dy="${dy}" font-size="${sub}">${esc(part.slice(2, -1))}</tspan>`; down = true; }
    else { body += `<tspan${down ? ` dy="-${dy}"` : ""}>${esc(part)}</tspan>`; down = false; }
  }
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic ? ' font-style="italic"' : ""}>${body}</text>`;
};
const dot = (x, y, r = 6, c = C.ink) => circle(x, y, r, { fill: c });
// a letter with a vector arrow drawn over it (the combining arrow character does not render reliably in SVG)
const vec = (x, y, ch, o = {}) => { const { size = 15, fill = C.ink, anchor = "middle" } = o; const wd = size * 0.62, cx = anchor === "start" ? x + wd / 2 : anchor === "end" ? x - wd / 2 : x, ty = y - size * 0.85; return text(x, y, ch, { size, weight: "bold", fill, anchor }) + line(cx - wd / 2, ty, cx + wd / 2, ty, { stroke: fill, w: 1.5 }) + path(`M ${r1(cx + wd / 2 - 3.5)} ${r1(ty - 3)} L ${r1(cx + wd / 2 + 0.5)} ${r1(ty)} L ${r1(cx + wd / 2 - 3.5)} ${r1(ty + 3)}`, { stroke: fill, w: 1.5 }); };
const tick = (x, y, horiz) => horiz ? line(x, y - 5, x, y + 5, { w: 1.5 }) : line(x - 5, y, x + 5, y, { w: 1.5 });
const span = (x1, x2, y, c = C.ink) => arrow(x1 + 2, y, x2 - 1, y, { stroke: c, w: 1.5, marker: c === BLUE ? "ahb" : "ah" }) + arrow(x2 - 2, y, x1 + 1, y, { stroke: c, w: 1.5, marker: c === BLUE ? "ahb" : "ah" });

// 1.2 addition: secant lines shrink to the tangent
{
  let s = defs + title("Average velocity over a shrinking Δt becomes the instantaneous velocity");
  const x0 = 80, y0 = 300, w = 400, h = 250, kt = w / 3, kx = h / 9.5;
  const X = (t) => x0 + t * kt, Y = (x) => y0 - x * kx, pos = (t) => t * t;
  const tP = 1.2, xP = pos(tP), vP = 2 * tP;
  s += line(x0, y0, x0 + w + 12, y0, { w: 2, marker: "ah" }) + line(x0, y0, x0, y0 - h - 12, { w: 2, marker: "ah" });
  s += text(x0 + w + 20, y0 + 5, "t", { size: 14, weight: "bold", anchor: "start" }) + text(x0, y0 - h - 20, "x", { size: 14, weight: "bold" });
  // secants (light) from P to Q at three shrinking Δt
  const Q = [[3.0, "Δt large", 358], [2.2, "Δt smaller", 338], [1.6, "Δt tiny", 318]];
  Q.forEach(([tq, lab, yr]) => {
    const m = (pos(tq) - xP) / (tq - tP), ta = 0.9;
    s += line(X(ta), Y(xP + m * (ta - tP)), X(tq), Y(pos(tq)), { stroke: "#8fb0de", w: 2 });
    s += line(X(tq), Y(pos(tq)) + 7, X(tq), yr - 4, { stroke: "#9aa0a6", w: 1.2, dash: "3 3" });
  });
  // the curve x = t^2 (speeding up)
  let d = ""; for (let i = 0; i <= 60; i++) { const t = i / 60 * 3; d += (i ? " L " : "M ") + r1(X(t)) + " " + r1(Y(pos(t))); }
  s += path(d, { stroke: C.ink, w: 3.5 });
  // tangent at P (bold)
  s += line(X(0.72), Y(xP + vP * (0.72 - tP)), X(3.0), Y(xP + vP * (3.0 - tP)), { stroke: RED, w: 3.5 });
  Q.forEach(([tq]) => s += circle(X(tq), Y(pos(tq)), 5, { fill: "#fff", stroke: BLUE, w: 2 }));
  s += dot(X(tP), Y(xP), 6.5) + text(X(tP) - 12, Y(xP) - 10, "P", { size: 15, weight: "bold", anchor: "end" });
  // Δt spans below the axis
  s += line(X(tP), y0 + 6, X(tP), 362, { stroke: "#9aa0a6", w: 1.2, dash: "3 3" });
  Q.forEach(([tq, lab, yr]) => s += span(X(tP), X(tq), yr, BLUE) + text(X(tq) + 8, yr + 4, lab, { size: 12, weight: "bold", fill: BLUE, anchor: "start" }));
  s += text(X(3.0) + 10, Y(xP + vP * 1.8) - 2, "tangent at P:", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + text(X(3.0) + 10, Y(xP + vP * 1.8) + 15, "slope = instantaneous v", { size: 13, weight: "bold", fill: RED, anchor: "start" });
  s += text(X(3.0) + 10, Y(pos(3.0)) + 4, "secants (light blue):", { size: 12, fill: BLUE, anchor: "start", weight: "bold" }) + text(X(3.0) + 10, Y(pos(3.0)) + 20, "slope = average v over Δt", { size: 12, fill: BLUE, anchor: "start" });
  s += rect(500, 196, 240, 92, NOTE) + text(620, 220, "Shrink Δt toward zero", { size: 13, weight: "bold" }) + text(620, 244, "the secants swing down onto\nthe tangent: average v → instantaneous v", { size: 12 });
  fig(FIGS, "p1a-secant-to-tangent", 760, 376, s, "Position-time curve bending upward with three secant lines from point P at shrinking time intervals and the bold tangent line at P", "Each secant's slope is the average velocity over its Δt. As Δt shrinks, the secant line swings toward the tangent at P, and the average velocity approaches the instantaneous velocity at that moment.");
}

// 1.4 addition: motion diagram and its v-t graph
{
  let s = defs + title("Motion diagram of a car starting from rest, and its v-t graph");
  const xs = 70, kx = 36, yd = 92, ya = 66, kv = 10;
  const xm = [0, 1, 4, 9, 16], vm = [0, 2, 4, 6, 8];
  s += line(xs - 20, yd, 720, yd, { stroke: C.line, w: 1.5 });
  xm.forEach((x, i) => {
    const px = xs + x * kx;
    s += dot(px, yd, 6.5);
    if (vm[i]) s += A(px, ya, px + vm[i] * kv, ya, RED, 2.5);
    s += text(px, yd + 24, i + " s", { size: 12, anchor: "middle" }) + text(px, yd + 41, x + " m", { size: 12, anchor: "middle" });
  });
  s += text(xs - 26, yd + 24, "t", { size: 12, weight: "bold", anchor: "end" }) + text(xs - 26, yd + 41, "x", { size: 12, weight: "bold", anchor: "end" });
  s += vec(xs + 16 * kx + 8 * kv + 8, ya + 5, "v", { size: 15, fill: RED, anchor: "start" });
  s += text(xs, 46, "red arrows: velocity (longer arrow = faster); no arrow at t = 0, the car is at rest", { size: 12, fill: RED, anchor: "start" });
  // gap brackets
  const yb = 152;
  for (let i = 0; i < 4; i++) { const a = xs + xm[i] * kx, b = xs + xm[i + 1] * kx; s += path(`M ${a + 3} ${yb - 6} L ${a + 3} ${yb} L ${b - 3} ${yb} L ${b - 3} ${yb - 6}`, { stroke: C.muted, w: 1.5 }) + text((a + b) / 2, yb + 17, (xm[i + 1] - xm[i]) + " m", { size: 12, weight: "bold", fill: C.muted }); }
  s += text(xs, 200, "gaps: 1, 3, 5, 7 m, each 2 m longer than the last", { size: 12.5, weight: "bold", anchor: "start" });
  s += text(530, 200, "acceleration:", { size: 12.5, weight: "bold", fill: GREEN, anchor: "end" }) + A(542, 196, 612, 196, GREEN, 3) + vec(620, 202, "a", { size: 15, fill: GREEN, anchor: "start" }) + text(638, 201, "(constant, to the right)", { size: 12, fill: GREEN, anchor: "start" });
  s += line(30, 222, 730, 222, { stroke: C.line, w: 1.5 });
  // v-t graph
  const x0 = 110, y0 = 400, w = 400, kt = 100, kvv = 17.5;
  s += line(x0, y0, x0 + w + 20, y0, { w: 2, marker: "ah" }) + line(x0, y0, x0, y0 - 8 * kvv - 22, { w: 2, marker: "ah" });
  for (let t = 0; t <= 4; t++) s += tick(x0 + t * kt, y0, true) + text(x0 + t * kt, y0 + 20, String(t), { size: 12 });
  for (let v = 0; v <= 8; v += 2) s += tick(x0, y0 - v * kvv, false) + text(x0 - 10, y0 - v * kvv + 4, String(v), { size: 12, anchor: "end" });
  for (let v = 2; v <= 8; v += 2) s += line(x0, y0 - v * kvv, x0 + w, y0 - v * kvv, { stroke: "#ECEAE3", w: 1 });
  s += text(x0 + w + 28, y0 + 5, "t (s)", { size: 12.5, weight: "bold", anchor: "start" }) + text(x0 - 44, y0 - 4 * kvv, "v (m/s)", { size: 12.5, weight: "bold", rotate: -90 });
  s += line(x0, y0, x0 + 4 * kt, y0 - 8 * kvv, { stroke: BLUE, w: 3.5 });
  for (let t = 0; t <= 4; t++) s += dot(x0 + t * kt, y0 - 2 * t * kvv, 4.5, BLUE);
  s += rect(560, 262, 180, 104, NOTE) + text(650, 286, "Straight v-t line", { size: 13, weight: "bold" }) + text(650, 310, "v grows 2 m/s every second:\nslope = a = 2 m/s²\n(constant acceleration)", { size: 12 });
  fig(FIGS, "p1a-motion-diagram-vt", 760, 432, s, "Motion diagram of a car starting from rest with dots at 0, 1, 4, 9 and 16 meters one second apart, growing velocity arrows and a rightward acceleration arrow, above the matching straight-line velocity-time graph", "Dots that spread apart mean the car is speeding up. Because each gap is longer than the last by the same 2 m, the acceleration is constant, and the v-t graph is a straight line rising from the origin.");
}

// 1.6 addition: terminal velocity
{
  let s = defs + title("Falling with air resistance: v levels off at terminal velocity");
  const x0 = 80, y0 = 300, w = 400, kt = 40, kv = 240 / 45, vT = 30, g = 9.8;
  const X = (t) => x0 + t * kt, Y = (v) => y0 - v * kv;
  s += line(x0, y0, x0 + w + 14, y0, { w: 2, marker: "ah" }) + line(x0, y0, x0, y0 - 252, { w: 2, marker: "ah" });
  for (let t = 0; t <= 10; t += 2) s += tick(X(t), y0, true) + text(X(t), y0 + 20, String(t), { size: 12 });
  s += text(x0 + w / 2, y0 + 42, "time t (s)", { size: 12.5, weight: "bold" }) + text(x0 - 26, y0 - 120, "velocity v (downward +)", { size: 12.5, weight: "bold", rotate: -90 });
  s += line(X(0), Y(vT), X(10), Y(vT), { stroke: C.muted, w: 1.8, dash: "6 5" }) + text(X(10), Y(vT) - 8, "terminal velocity", { size: 12.5, weight: "bold", fill: C.muted, anchor: "end" });
  const tEnd = 45 / g; s += line(X(0), Y(0), X(tEnd), Y(45), { stroke: BLUE, w: 2.5, dash: "8 6" }) + text(X(tEnd) + 8, Y(45) + 10, "no air resistance", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" });
  let d = ""; for (let i = 0; i <= 100; i++) { const t = i / 10; d += (i ? " L " : "M ") + r1(X(t)) + " " + r1(Y(vT * Math.tanh(g * t / vT))); }
  s += path(d, { stroke: RED, w: 3.5 }) + text(X(4.2), Y(18), "with air resistance", { size: 12.5, weight: "bold", fill: RED, anchor: "start" });
  s += line(X(0.7) + 2, Y(g * 0.7) + 4, X(1.9), y0 - 34, { stroke: C.muted, w: 1.2 }) + text(X(1.9) + 4, y0 - 30, "slope = g (only gravity at first)", { size: 12, weight: "bold", anchor: "start" });
  s += text(X(8), Y(vT) + 26, "slope = 0: drag = weight", { size: 12, weight: "bold" });
  // mini free-body diagrams
  s += line(510, 44, 510, 330, { stroke: C.line, w: 1.5 });
  s += text(630, 58, "Forces on the falling object", { size: 13, weight: "bold" });
  const fb = (x, dr, lab, acc) => { let g2 = dot(x, 160, 7) + A(x, 160, x, 215, RED, 2.5) + rt(x, 234, "F_{g}", { size: 13, weight: "bold", fill: RED }); if (dr) g2 += A(x, 160, x, 160 - dr, BLUE, 2.5) + rt(x, 160 - dr - 10, "F_{drag}", { size: 13, weight: "bold", fill: BLUE }); else g2 += text(x, 118, "(no drag)", { size: 11, fill: C.muted }); return g2 + text(x, 266, lab, { size: 12, weight: "bold" }) + text(x, 285, acc, { size: 12 }); };
  s += fb(560, 0, "at release", "a = g") + fb(640, 28, "speeding up", "0 < a < g") + fb(720, 55, "terminal", "a = 0");
  s += text(640, 316, "drag grows with speed", { size: 11.5, fill: C.muted });
  fig(FIGS, "p1a-terminal-velocity", 760, 356, s, "Velocity-time graph for a falling object, a straight dashed line with slope g for no air resistance and a curve that bends over to a constant terminal velocity, with free-body diagrams showing drag growing until it equals weight", "At first only gravity acts, so the curve starts with slope g. Drag grows as the object speeds up, the net force and the slope shrink, and at terminal velocity drag equals weight, so the slope is zero.");
}

// 1.7 addition: components to magnitude and direction
{
  let s = defs + title("From components back to the vector: magnitude and direction");
  const ax = 110, ay = 92, bx = 430, by = 292, ang = Math.atan2(by - ay, bx - ax);
  s += line(ax - 30, ay, ax + 0, ay, { stroke: C.muted, w: 1.2, dash: "4 4" });
  s += A(ax, ay, bx, ay, BLUE, 3) + A(bx, ay, bx, by, GREEN, 3) + A(ax, ay, bx, by, RED, 3.5);
  s += path(`M ${bx - 14} ${ay} L ${bx - 14} ${ay + 14} L ${bx} ${ay + 14}`, { stroke: C.muted, w: 1.5 });
  const R = 62; s += path(`M ${ax + R} ${ay} A ${R} ${R} 0 0 1 ${r1(ax + R * Math.cos(ang))} ${r1(ay + R * Math.sin(ang))}`, { stroke: C.ink, w: 1.8 }) + text(ax + 80 * Math.cos(ang / 2), ay + 80 * Math.sin(ang / 2) + 5, "θ", { size: 16, weight: "bold" });
  s += rt((ax + bx) / 2, ay - 12, "v_{x}", { size: 16, weight: "bold", fill: BLUE }) + rt(bx + 14, (ay + by) / 2 + 5, "v_{y}", { size: 16, weight: "bold", fill: GREEN, anchor: "start" });
  const mx = (ax + bx) / 2, my = (ay + by) / 2; s += vec(mx - 22, my + 30, "v", { size: 18, fill: RED });
  s += rt(270, 318, "the vector runs from the tail of v_{x} to the tip of v_{y}", { size: 12, fill: C.muted });
  s += rect(500, 82, 240, 196, NOTE);
  s += text(620, 108, "Magnitude (Pythagoras)", { size: 13, weight: "bold" }) + rt(620, 136, "|v| = √(v_{x}² + v_{y}²)", { size: 14 });
  s += text(620, 172, "Direction", { size: 13, weight: "bold" }) + rt(620, 198, "tan θ = |v_{y}| / |v_{x}|", { size: 14, weight: "bold" });
  s += text(620, 228, "θ is measured from the horizontal;\nthe signs of the components say\nwhich way (here: below, to the right)", { size: 11.5 });
  fig(FIGS, "p1a-components-to-vector", 760, 334, s, "Right triangle of velocity vectors: horizontal component to the right, vertical component downward from its tip, and the resultant from the tail of the first to the tip of the second, with the angle theta below the horizontal", "The components form the legs of a right triangle and the vector is its hypotenuse. The Pythagorean theorem gives the magnitude, and tan θ = |vᵧ| / |vₓ| gives the angle from the horizontal; the component signs tell you which way it points.");
}

// 1.8 new section: velocities add between frames
{
  let s = defs + title("A passenger walking forward on a moving train");
  // train car sketch
  const tx = 200, ty = 46, tw = 280, th = 74;
  s += line(120, ty + th + 18, 640, ty + th + 18, { stroke: "#777", w: 3 });
  s += rect(tx, ty, tw, th, { fill: "#dfe8f3", stroke: "#4a5a70", w: 2, rx: 8 });
  [0, 1, 2, 3].forEach((i) => s += rect(tx + 18 + i * 66, ty + 12, 44, 22, { fill: "#fff", stroke: "#4a5a70", w: 1.2, rx: 3 }));
  [tx + 40, tx + 90, tx + tw - 90, tx + tw - 40].forEach((x) => s += circle(x, ty + th + 8, 9, { fill: "#555", stroke: "#333" }));
  // walking figure inside the car
  const px = 268, pyH = ty + 44, foot = ty + th - 4;
  s += circle(px, pyH, 5, { fill: "#f4d8c0", stroke: "#555", w: 1.2 }) + line(px, pyH + 5, px, foot - 12, { w: 2 }) + line(px, foot - 12, px - 6, foot, { w: 2 }) + line(px, foot - 12, px + 7, foot, { w: 2 }) + line(px, pyH + 9, px + 7, pyH + 15, { w: 2 }) + line(px, pyH + 9, px - 6, pyH + 15, { w: 2 });
  s += A(px + 12, pyH + 2, px + 42, pyH + 2, GREEN, 2) + text(px + 48, pyH + 6, "walks toward the front", { size: 11, fill: GREEN, anchor: "start", weight: "bold" });
  s += A(tx + tw + 14, ty + 30, tx + tw + 74, ty + 30, BLUE, 3) + text(tx + tw + 82, ty + 35, "train", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  s += text(700, 70, "east (+)", { size: 12.5, weight: "bold", anchor: "end" }) + arrow(650, 80, 700, 80, { w: 2 });
  // velocity vectors, to scale (15 px per m/s)
  const o = 150, k = 15, y1 = 200, y2 = 268;
  s += line(o, y1 - 14, o, y2 + 10, { stroke: "#bbb", w: 1.2, dash: "4 4" }) + line(o + 22 * k, y1 - 14, o + 22 * k, y2 + 10, { stroke: "#bbb", w: 1.2, dash: "4 4" });
  s += A(o, y1, o + 20 * k, y1, BLUE, 3.5) + A(o + 20 * k, y1, o + 22 * k, y1, GREEN, 3.5);
  s += rt(o + 10 * k, y1 + 24, "v_{TG} = 20 m/s east", { size: 13.5, weight: "bold", fill: BLUE }) + text(o + 10 * k, y1 + 40, "(train relative to ground)", { size: 11.5, fill: BLUE });
  s += line(o + 21 * k, y1 - 8, o + 21 * k + 14, y1 - 30, { stroke: GREEN, w: 1.2 }) + rt(o + 21 * k + 18, y1 - 38, "v_{PT} = 2.0 m/s east", { size: 13.5, weight: "bold", fill: GREEN, anchor: "start" }) + text(o + 21 * k + 18, y1 - 22, "(passenger relative to train)", { size: 11.5, fill: GREEN, anchor: "start" });
  s += A(o, y2, o + 22 * k, y2, RED, 4) + rt(o + 11 * k, y2 + 24, "v_{PG} = 22 m/s east", { size: 13.5, weight: "bold", fill: RED }) + text(o + 11 * k, y2 + 40, "(passenger relative to ground)", { size: 11.5, fill: RED });
  s += rect(530, 216, 210, 84, NOTE) + text(635, 240, "Tip to tail", { size: 13, weight: "bold" }) + rt(635, 264, "v_{PG} = v_{PT} + v_{TG}", { size: 13.5, weight: "bold" }) + text(635, 286, "= 2.0 + 20 = 22 m/s", { size: 12.5 });
  fig(FIGS, "p1a-train-relative-velocity", 760, 326, s, "Train moving east with a passenger walking toward the front; to-scale arrows show 20 m/s for the train relative to the ground plus 2.0 m/s for the passenger relative to the train, giving 22 m/s for the passenger relative to the ground", "Place the passenger's velocity relative to the train at the tip of the train's velocity relative to the ground. The arrow from the first tail to the last tip is the passenger's velocity relative to the ground: 2.0 + 20 = 22 m/s east.");
}

// 1.8 new section: one drop seen from two frames
{
  let s = defs + title("One dropped ball, two frames: different paths, same acceleration");
  const k = 18, top = 96, hv = 0.5; // y_n = top + k n^2 ; arrows show v·(T/2)
  const ys = [0, 1, 2, 3, 4].map((n) => top + k * n * n);
  // rider panel
  s += text(195, 50, "Rider's frame (inside the train)", { size: 14, weight: "bold" });
  s += rect(40, 64, 310, 406, { fill: "#f2f6fb", stroke: "#4a5a70", w: 1.8, rx: 8 }) + line(40, 470, 350, 470, { stroke: "#4a5a70", w: 3 });
  const xr = 230;
  s += line(xr, ys[0], xr, ys[4], { stroke: "#9aa0a6", w: 1.5, dash: "5 5" });
  ys.forEach((y, n) => { s += dot(xr, y, 6.5); if (n) s += A(xr + 14, y, xr + 14, y + hv * 2 * k * n, RED, 2.5); s += text(xr - 16, y + (n === 0 ? 0 : n === 1 ? 9 : 4), "t" + n, { size: 11, fill: C.muted, anchor: "end" }); });
  s += vec(xr + 26, ys[3] + 40, "v", { size: 15, fill: RED, anchor: "start" });
  s += A(110, 230, 110, 300, GREEN, 3.5) + text(110, 196, "a = 9.8 m/s²", { size: 12.5, weight: "bold", fill: GREEN }) + text(110, 213, "down", { size: 12.5, weight: "bold", fill: GREEN });
  s += text(195, 492, "path: straight down; velocity always vertical", { size: 12, weight: "bold" });
  // ground panel
  s += line(380, 44, 380, 500, { stroke: C.line, w: 1.5 });
  s += text(570, 50, "Ground frame (on the platform)", { size: 14, weight: "bold" });
  s += line(400, 470, 740, 470, { stroke: "#777", w: 3 }) + text(740, 458, "ground", { size: 11, fill: C.muted, anchor: "end" });
  s += A(560, 74, 640, 74, BLUE, 2.5) + text(552, 79, "train moves at constant v", { size: 11.5, fill: BLUE, anchor: "end", weight: "bold" });
  const xg0 = 420, sx = 60;
  let d = ""; for (let i = 0; i <= 40; i++) { const n = i / 10; d += (i ? " L " : "M ") + r1(xg0 + sx * n) + " " + r1(top + k * n * n); }
  s += path(d, { stroke: "#9aa0a6", w: 1.5, dash: "5 5" });
  ys.forEach((y, n) => { const x = xg0 + sx * n; s += dot(x, y, 6.5) + A(x, y, x + hv * sx, y + hv * 2 * k * n, RED, 2.5); s += text(x - 12, y + 18, "t" + n, { size: 11, fill: C.muted, anchor: "end" }); });
  s += vec(xg0 + 3 * sx + 36, ys[3] + 32, "v", { size: 15, fill: RED, anchor: "start" });
  s += A(460, 330, 460, 400, GREEN, 3.5) + text(460, 296, "a = 9.8 m/s²", { size: 12.5, weight: "bold", fill: GREEN }) + text(460, 313, "down", { size: 12.5, weight: "bold", fill: GREEN });
  s += text(570, 492, "path: arc; velocity tilted forward", { size: 12, weight: "bold" });
  fig(FIGS, "p1a-drop-two-frames", 760, 510, s, "A ball dropped inside a train moving at constant velocity, shown at equal time intervals: in the rider's frame it falls straight down with vertical velocity arrows, in the ground frame it moves forward along an arc with tilted velocity arrows; both frames show acceleration 9.8 meters per second squared downward", "Same ball, same instants. The ground observer adds the train's constant velocity to every velocity the rider measures, so the path bends into an arc and the arrows tilt forward. Adding a constant doesn't change how velocity changes, so both frames measure the same 9.8 m/s² downward acceleration.");
}

// 3.1 addition: work = area under F-x
{
  let s = defs + title("Work = area under the force-vs-displacement graph");
  const panel = (x0, ttl) => line(x0, 250, x0 + 270, 250, { w: 2, marker: "ah" }) + line(x0, 250, x0, 76, { w: 2, marker: "ah" }) + text(x0, 66, "F", { size: 14, weight: "bold" }) + text(x0 + 280, 255, "x", { size: 14, weight: "bold", anchor: "start" }) + text(x0 + 135, 50, ttl, { size: 13.5, weight: "bold" });
  // constant force
  const a0 = 80; s += panel(a0, "Constant force");
  s += rect(a0, 130, 200, 120, { fill: "#cfe0f5", stroke: "none", rx: 0 }) + line(a0, 130, a0 + 200, 130, { stroke: BLUE, w: 3.5 }) + line(a0 + 200, 130, a0 + 200, 250, { stroke: BLUE, w: 1.5, dash: "4 4" });
  s += text(a0 - 10, 135, "F", { size: 13, weight: "bold", anchor: "end" }) + tick(a0 + 200, 250, true) + text(a0 + 200, 272, "d", { size: 13, weight: "bold" }) + text(a0 + 100, 196, "W = Fd", { size: 16, weight: "bold", fill: BLUE }) + text(a0 + 100, 216, "(rectangle)", { size: 12, fill: BLUE });
  s += line(380, 44, 380, 296, { stroke: C.line, w: 1.5 });
  // spring force
  const b0 = 440; s += panel(b0, "Spring force F = kx");
  s += path(`M ${b0} 250 L ${b0 + 200} 130 L ${b0 + 200} 250 Z`, { fill: "#fde0d2", stroke: "none" }) + line(b0, 250, b0 + 230, 112, { stroke: RED, w: 3.5 }) + line(b0 + 200, 130, b0 + 200, 250, { stroke: RED, w: 1.5, dash: "4 4" }) + line(b0, 130, b0 + 200, 130, { stroke: RED, w: 1.5, dash: "4 4" });
  s += text(b0 - 10, 135, "kx", { size: 13, weight: "bold", anchor: "end" }) + tick(b0 + 200, 250, true) + text(b0 + 200, 272, "x", { size: 13, weight: "bold" }) + text(b0 + 140, 222, "W = ½kx²", { size: 16, weight: "bold", fill: RED }) + text(b0 + 140, 242, "(triangle)", { size: 12, fill: RED });
  s += text(b0 + 112, 110, "½ × base × height = ½(x)(kx)", { size: 12, fill: C.muted });
  s += text(380, 300, "Use the force component along the displacement; area below the x-axis is negative work.", { size: 12.5, weight: "bold" });
  fig(FIGS, "p1a-fx-area", 760, 318, s, "Two force-versus-displacement graphs: a constant force F over displacement d with the rectangle W = Fd shaded, and a spring force rising linearly to kx at displacement x with the triangle W = one half k x squared shaded", "The work done by a force is the area under its F-x graph. A constant force gives a rectangle, Fd; a spring force rising from zero gives a triangle, ½(x)(kx) = ½kx², the elastic potential energy formula.");
}

// 3.4 addition: energy bar charts for a spring launch
{
  let s = defs + title("Energy bar charts: a spring launches a block (frictionless, level)");
  s += rt(380, 42, "System: block + spring.  No Earth, so no U_{g} bar.", { size: 12.5, fill: C.muted });
  const spring = (x1, x2, y, n = 7) => { let d = `M ${x1} ${y}`; const L = x2 - x1 - 8; for (let i = 0; i < n; i++) d += ` L ${r1(x1 + 4 + (i + 0.5) * L / n)} ${y + (i % 2 ? 9 : -9)}`; return path(d + ` L ${x2} ${y}`, { stroke: "#555", w: 2 }); };
  const yf = 124;
  // sketch A
  s += rect(52, 62, 10, 62, { fill: "#999", stroke: "#666", rx: 0 }) + line(52, yf, 300, yf, { stroke: "#777", w: 2.5 });
  s += spring(62, 132, yf - 20) + rect(132, yf - 40, 48, 40, { fill: "#c8d8e8", stroke: "#555", rx: 3 }) + text(156, yf - 15, "m", { size: 13, weight: "bold" }) + text(240, yf - 16, "at rest, v = 0", { size: 12, anchor: "middle" }) + text(97, yf - 38, "compressed", { size: 11, fill: C.muted });
  // sketch B
  s += rect(462, 62, 10, 62, { fill: "#999", stroke: "#666", rx: 0 }) + line(462, yf, 740, yf, { stroke: "#777", w: 2.5 });
  s += spring(472, 582, yf - 20, 9) + text(527, yf - 38, "relaxed", { size: 11, fill: C.muted }) + rect(612, yf - 40, 48, 40, { fill: "#c8d8e8", stroke: "#555", rx: 3 }) + text(636, yf - 15, "m", { size: 13, weight: "bold" }) + A(664, yf - 20, 718, yf - 20, RED, 2.5) + text(722, yf - 15, "v", { size: 13, weight: "bold", fill: RED, anchor: "start" });
  // bar charts on a unit grid
  const base = 330, u = 30, top = base - 5 * u, bw = 42;
  const grid = (x1, x2) => { let g = ""; for (let i = 0; i <= 5; i++) g += line(x1, base - i * u, x2, base - i * u, { stroke: i ? "#E3E0D6" : C.ink, w: i ? 1 : 2 }); return g; };
  const chart = (x, vals, head) => {
    let g = text(x + 100, 160, head, { size: 13, weight: "bold" }) + grid(x, x + 200);
    ["K", "U_{s}", "ΔE_{th}"].forEach((lab, i) => { const bx = x + 16 + i * 64, v = vals[i]; if (v) g += rect(bx, base - v * u, bw, v * u, { fill: [RED, BLUE, GOLD][i], stroke: "#555", rx: 2 }); g += rt(bx + bw / 2, base + 20, lab, { size: 13, weight: "bold" }) + text(bx + bw / 2, base - v * u - 7, String(v), { size: 12, weight: "bold", fill: C.muted }); });
    return g;
  };
  for (let i = 0; i <= 5; i++) s += text(42, base - i * u + 4, String(i), { size: 11, fill: C.muted, anchor: "end" });
  s += text(24, base - 2.5 * u, "energy units", { size: 11.5, fill: C.muted, rotate: -90 });
  s += chart(52, [0, 4, 0], "A: spring compressed");
  s += text(380, 160, "Work in or out", { size: 13, weight: "bold" }) + grid(330, 430) + rt(380, base + 20, "W_{ext}", { size: 13, weight: "bold" }) + text(380, base - 56, "W = 0", { size: 13, weight: "bold", fill: C.muted }) + text(380, base - 38, "(no outside work)", { size: 11, fill: C.muted });
  s += chart(498, [4, 0, 0], "B: block has left the spring");
  s += text(380, 384, "Total A (0 + 4 + 0 = 4)  +  W (0)  =  Total B (4 + 0 + 0 = 4)", { size: 13, weight: "bold" });
  fig(FIGS, "p1a-spring-bar-charts", 760, 402, s, "Energy bar charts on a unit grid for a block launched by a spring on a frictionless level surface: state A has 4 units of spring potential energy and no kinetic energy, the work column is empty, and state B has 4 units of kinetic energy and no spring energy", "With the block and spring as the system and no outside work, the 4 units of elastic potential energy at A become 4 units of kinetic energy at B. Counting grid squares shows the totals match, which is the whole point of drawing the bars to scale.");
}
