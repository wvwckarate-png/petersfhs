// Figures for AP Physics 1 material added 2026-11-28 (batch C: Units 2, 4, 5 additions).
import { C, svg, text, line, circle, rect, path, defs, arrow, esc } from "./lib.mjs";
import { BLUE, RED, GREEN, TEAL, NOTE, title, fig } from "./lib2.mjs";
export const FIGS = {};
const MK = { [RED]: "ahr", [BLUE]: "ahb", [GREEN]: "ahg", [C.orange]: "aho" };
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: MK[c] || "ah" });
const r1 = (n) => (Math.round(n * 10) / 10).toString();
// one-line label with real subscripts: "F_{g}" -> F with a subscript g (subscripts never below 11 px)
const rt = (x, y, s, o = {}) => {
  const { size = 14, anchor = "middle", weight = "bold", fill = C.ink, rotate } = o;
  const sub = Math.max(11, Math.round(size * 0.8)), dy = Math.round(size * 0.3);
  let body = "", down = false;
  for (const p of String(s).split(/(_\{[^}]*\})/)) {
    if (!p) continue;
    const m = p.match(/^_\{(.*)\}$/);
    if (m) { body += `<tspan dy="${down ? 0 : dy}" font-size="${sub}">${esc(m[1])}</tspan>`; down = true; }
    else { body += `<tspan${down ? ` dy="-${dy}"` : ""}>${esc(p)}</tspan>`; down = false; }
  }
  const tr = rotate ? ` transform="rotate(${rotate} ${r1(x)} ${r1(y)})"` : "";
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${tr}>${body}</text>`;
};
const dashBox = (x, y, w, h, c = TEAL) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="${c}" stroke-width="2.2" stroke-dasharray="8 5"/>`;
const block = (x, y, w, h, fill = "#d9c7a8") => rect(x, y, w, h, { fill, stroke: "#6b5a3a", rx: 3 });
const dot = (x, y) => circle(x, y, 6, { fill: C.ink });
const divider = (x, y1, y2) => line(x, y1, x, y2, { stroke: C.line, w: 1.5 });
const floor = (x1, x2, y) => line(x1, y, x2, y, { w: 3, stroke: "#777" });
const ceiling = (x1, x2, y) => { let s = line(x1, y, x2, y, { w: 3, stroke: "#777" }); for (let x = x1 + 6; x < x2; x += 14) s += line(x, y, x - 8, y - 9, { w: 1.2, stroke: "#999" }); return s; };
const xMark = (x, y, r = 9) => line(x - r, y - r, x + r, y + r, { stroke: RED, w: 3.5 }) + line(x - r, y + r, x + r, y - r, { stroke: RED, w: 3.5 });
const check = (x, y) => path(`M ${x - 9} ${y} L ${x - 2} ${y + 8} L ${x + 11} ${y - 10}`, { stroke: GREEN, w: 3.5 });
const arc = (cx, cy, r, a1, a2, o = {}) => { const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); const large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 1 : 0; return path(`M ${r1(x1)} ${r1(y1)} A ${r} ${r} 0 ${large} ${sweep} ${r1(x2)} ${r1(y2)}`, { stroke: o.stroke || C.ink, w: o.w || 1.8, marker: o.marker }); };
// a light grid with tick labels for graphs: x from 0..xmax (px per unit sx), y from ymin..ymax (px per unit sy); origin (x0, y0) is where y = 0
const graph = ({ x0, y0, sx, sy, xmax, ymin, ymax, xstep, ystep, xl, yl, yoff = 14 }) => {
  let s = "";
  for (let t = 0; t <= xmax + 1e-9; t += xstep) s += line(x0 + t * sx, y0 - ymax * sy, x0 + t * sx, y0 - ymin * sy, { stroke: "#ebe8df", w: 1 }) + text(x0 + t * sx, y0 - ymin * sy + 24, String(t), { size: 12, fill: C.muted });
  for (let v = ymin; v <= ymax + 1e-9; v += ystep) s += line(x0, y0 - v * sy, x0 + xmax * sx, y0 - v * sy, { stroke: "#ebe8df", w: 1 }) + text(x0 - yoff, y0 - v * sy + 4, v < 0 ? "−" + -v : String(v), { size: 12, fill: C.muted, anchor: "end" });
  s += line(x0, y0, x0 + xmax * sx + 14, y0, { w: 2, marker: "ah" }) + line(x0, y0 - ymin * sy, x0, y0 - ymax * sy - 14, { w: 2, marker: "ah" });
  s += text(x0 + xmax * sx / 2, y0 - ymin * sy + 46, xl, { size: 13, weight: "bold" }) + text(x0 - 46, y0 - (ymax + ymin) / 2 * sy, yl, { size: 13, weight: "bold", rotate: -90 });
  return s;
};

// 1. choosing a system (2.1)
{
  let s = defs + title("Where you draw the boundary decides which forces count");
  const scene = (ox, sysAB) => {
    let g = floor(ox + 20, ox + 350, 200) + text(ox + 330, 226, "frictionless floor", { size: 11, fill: C.muted });
    g += block(ox + 95, 130, 90, 70) + text(ox + 140, 160, "A\n3.0 kg", { size: 13, weight: "bold" });
    g += block(ox + 185, 144, 70, 56, "#c8d8e8") + text(ox + 220, 167, "B\n2.0 kg", { size: 13, weight: "bold" });
    return g;
  };
  // panel 1: A + B
  s += text(190, 56, "System = A + B", { size: 14, weight: "bold", fill: TEAL }) + scene(0) + dashBox(85, 118, 180, 92);
  s += A(22, 165, 93, 165, BLUE, 3) + text(46, 152, "20 N push", { size: 12, weight: "bold", fill: BLUE });
  s += text(190, 250, "Only the 20 N push crosses the boundary\nhorizontally. A-on-B and B-on-A are internal:\nthey cancel and are not drawn.", { size: 12 });
  s += divider(380, 44, 300);
  // panel 2: B alone
  s += text(570, 56, "System = B alone", { size: 14, weight: "bold", fill: TEAL }) + scene(380) + dashBox(563, 132, 102, 78);
  s += A(402, 165, 473, 165, "#999", 2.5) + text(436, 140, "20 N on A\n(not on B)", { size: 11, fill: C.muted });
  s += A(600, 189, 696, 189, RED, 3) + rt(702, 194, "F_{A on B}", { size: 14, fill: RED, anchor: "start" });
  s += text(570, 250, "Now the push from A crosses the boundary.\nIt is external to this system, so it shows up\nas a force you can solve for.", { size: 12 });
  fig(FIGS, "p1c-system-boundary", 760, 312, s, "Two blocks A and B pushed by 20 N, analyzed first as one system A plus B and then as B alone",
    "Moving the boundary changes the list of forces. With A and B together, the contact forces between them are internal and cancel, so only the 20 N push accelerates the system. With B alone, the push from A is external and becomes the one horizontal force on B.");
}

// 2. AP-style FBD (2.1)
{
  let s = defs + title("Free-body diagram rules: forces (not components), each arrow starting on the dot");
  const k = 1.3, mg = 80 * k, T = 40 * k, th = 25 * Math.PI / 180, Tx = T * Math.cos(th), Ty = T * Math.sin(th), N = mg - Ty, f = 0.5 * N;
  // panel 1: not AP style
  { const x = 140, y = 168;
    s += xMark(62, 52) + text(150, 57, "Not AP style", { size: 14, weight: "bold", fill: RED });
    s += A(x, y, x, y + mg, RED) + rt(x + 9, y + mg - 4, "F_{g}", { anchor: "start", fill: RED });
    s += A(x, y, x, y - N, RED) + rt(x - 10, y - N + 12, "F_{N}", { anchor: "end", fill: RED });
    s += A(x, y, x - f, y, GREEN) + rt(x - f - 6, y + 5, "f_{k}", { anchor: "end", fill: GREEN });
    s += A(x, y, x + Tx, y, BLUE) + rt(x + Tx + 6, y + 5, "T_{x}", { anchor: "start", fill: BLUE });
    s += A(x, y, x, y - Ty, BLUE, 3) + rt(x + 9, y - Ty - 2, "T_{y}", { anchor: "start", fill: BLUE });
    s += text(140, 296, "components drawn as forces;", { size: 12, fill: C.muted }) + rt(140, 312, "T_{y} hides part of F_{N}", { size: 12, weight: "normal", fill: C.muted }); }
  s += divider(270, 44, 320);
  // panel 2: AP style
  { const x = 395, y = 168;
    s += check(312, 52) + text(400, 57, "AP style", { size: 14, weight: "bold", fill: GREEN });
    s += line(x, y, x + 85, y, { stroke: "#bbb", w: 1.2, dash: "4 4" });
    s += A(x, y, x, y + mg, RED) + rt(x + 9, y + mg - 4, "F_{g}", { anchor: "start", fill: RED });
    s += A(x, y, x, y - N, RED) + rt(x - 10, y - N + 12, "F_{N}", { anchor: "end", fill: RED });
    s += A(x, y, x - f, y, GREEN) + rt(x - f - 6, y + 5, "f_{k}", { anchor: "end", fill: GREEN });
    s += A(x, y, x + T * 1.35 * Math.cos(th), y - T * 1.35 * Math.sin(th), BLUE) + rt(x + T * 1.35 * Math.cos(th) + 6, y - T * 1.35 * Math.sin(th) - 2, "T", { anchor: "start", fill: BLUE });
    s += arc(x, y, 34, -25, 0) + text(x + 50, y - 4, "25°", { size: 12, anchor: "start" });
    s += text(395, 296, "four forces, one arrow each,\nall starting on the dot", { size: 12, fill: C.muted }); }
  s += divider(520, 44, 320);
  // panel 3: same direction side by side
  { const x = 640, y = 168;
    s += text(640, 57, "Same direction?", { size: 14, weight: "bold" }) + text(640, 76, "lamp hung by two vertical cords", { size: 11.5, fill: C.muted });
    s += A(x - 6, y, x - 6, y - 52, RED) + rt(x - 16, y - 24, "T_{1}", { anchor: "end", fill: RED });
    s += A(x + 6, y, x + 6, y - 52, RED) + rt(x + 16, y - 24, "T_{2}", { anchor: "start", fill: RED });
    s += A(x, y, x, y + 104, RED) + rt(x + 9, y + 100, "F_{g}", { anchor: "start", fill: RED });
    s += text(640, 296, "same direction: side by side,\nnot overlapping", { size: 12, fill: C.muted }); }
  for (const x of [140, 395, 640]) s += dot(x, 168);
  fig(FIGS, "p1c-fbd-ap-style", 760, 330, s, "Three free-body diagrams: one with tension components drawn as forces, the corrected AP-style diagram with a single tension arrow at 25 degrees, and two side-by-side upward forces",
    "On an AP free-body diagram each force is one labeled arrow that starts on the dot. The rope's pull is a single arrow at 25° (its components go in the equations, not the picture), and two forces in the same direction sit side by side so neither is hidden. F<sub>N</sub> is shorter than F<sub>g</sub> here because the rope also lifts a little.");
}

// 3. inertial vs accelerating frame (2.2)
{
  let s = defs + title("Ball on a smooth bus floor while the bus speeds up");
  const bus = (x, yb) => {
    let g = rect(x, yb - 66, 200, 60, { fill: "#f6e3a8", stroke: "#8a6d1c", rx: 8 });
    for (let i = 0; i < 4; i++) g += rect(x + 14 + i * 40, yb - 58, 30, 20, { fill: "#dbe8f5", stroke: "#8a6d1c", rx: 3 });
    g += rect(x + 176, yb - 58, 18, 26, { fill: "#dbe8f5", stroke: "#8a6d1c", rx: 3 }) + line(x + 6, yb - 14, x + 194, yb - 14, { stroke: "#8a6d1c", w: 1.5 });
    g += circle(x + 40, yb, 10, { fill: "#444" }) + circle(x + 160, yb, 10, { fill: "#444" });
    return g;
  };
  const post = (x, yb) => line(x, yb, x, yb - 72, { w: 4, stroke: "#666" }) + path(`M ${x} ${yb - 72} L ${x + 16} ${yb - 72}`, { stroke: "#666", w: 4 }) + circle(x + 18, yb - 66, 6, { fill: "#f2cf4a", stroke: "#666", w: 1.2 });
  const ball = (x, yb, ghost) => ghost ? `<circle cx="${x}" cy="${yb - 22}" r="8" fill="none" stroke="#999" stroke-width="1.5" stroke-dasharray="3 3"/>` : circle(x, yb - 22, 8, { fill: RED, stroke: "#7a2a12", w: 1.5 });
  // row 1: ground frame
  const g1 = 178;
  s += text(380, 52, "Seen from the ground (an inertial frame)", { size: 14, weight: "bold", fill: GREEN });
  [[0, 60, "t = 0"], [380, 130, "a moment later"]].forEach(([ox, bx, lab]) => {
    s += text(ox + 20, 76, lab, { size: 12, weight: "bold", anchor: "start", fill: C.muted }) + floor(ox + 10, ox + 360, g1 + 10) + post(ox + 30, g1 + 10) + bus(ox + bx, g1) + ball(ox + 210, g1);
    s += line(ox + 210, 90, ox + 210, g1 - 32, { stroke: "#999", w: 1.2, dash: "4 4" });
    s += A(ox + bx + 70, 98, ox + bx + 130, 98, GREEN, 2.5) + text(ox + bx + 140, 103, "a", { size: 14, weight: "bold", fill: GREEN, anchor: "start" });
  });
  s += text(380, 212, "The ball stays beside the same spot on the ground: no horizontal force, so no change in its motion.", { size: 12 });
  s += line(20, 228, 740, 228, { stroke: C.line, w: 1.5 });
  // row 2: bus frame
  const g2 = 352;
  s += text(380, 254, "Seen from inside the bus (not an inertial frame)", { size: 14, weight: "bold", fill: RED });
  [[0, 90, 280, "t = 0"], [380, 20, 210, "a moment later"]].forEach(([ox, px, bxl, lab], i) => {
    s += text(ox + 20, 276, lab, { size: 12, weight: "bold", anchor: "start", fill: C.muted }) + floor(ox + 10, ox + 360, g2 + 10) + post(ox + px, g2 + 10) + bus(ox + 130, g2) + ball(ox + bxl, g2);
    if (i === 1) s += ball(ox + 280, g2, true) + arrow(ox + 268, g2 - 48, ox + 222, g2 - 48, { stroke: "#777", w: 1.6, dash: "4 3" }) + text(ox + 245, g2 - 74, "ball drifts back", { size: 11.5, fill: C.muted });
  });
  s += text(380, 386, "The passenger sees the ball speed up with no horizontal force on it: Newton's first law fails in this frame.", { size: 12 });
  s += rect(150, 400, 460, 30, NOTE) + text(380, 420, "No \"force of inertia\": the bus accelerates out from under the ball.", { size: 12.5, weight: "bold" });
  fig(FIGS, "p1c-bus-frames", 760, 440, s, "A ball on a smooth bus floor viewed from the ground, where it stays put, and from inside the accelerating bus, where it drifts backward",
    "From the ground the ball simply stays where it was, because no horizontal force acts on it; the bus moves forward underneath it. From inside the accelerating bus the same ball appears to accelerate backward with no force, which is the sign of a non-inertial frame.");
}

// 4. tension in ideal and heavy strings (2.9)
{
  let s = defs + title("Tension: the same everywhere in an ideal string, larger higher up in a heavy rope");
  // left: ideal pulley
  const cx = 190, cy = 112, R = 28;
  s += ceiling(90, 290, 50) + line(cx, 50, cx, cy, { w: 3, stroke: "#777" });
  s += path(`M ${cx - R} 228 L ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy} L ${cx + R} 262`, { stroke: "#555", w: 2 });
  s += circle(cx, cy, R, { fill: "#e9edf2", stroke: "#555", w: 2 }) + circle(cx, cy, 4, { fill: "#555" });
  s += block(cx - R - 22, 228, 44, 40) + block(cx + R - 22, 262, 44, 40, "#c8d8e8");
  s += A(cx - R, 228, cx - R, 180, RED, 3) + text(cx - R - 12, 196, "T", { size: 15, weight: "bold", fill: RED, anchor: "end" });
  s += A(cx + R, 262, cx + R, 214, RED, 3) + text(cx + R + 12, 230, "T", { size: 15, weight: "bold", fill: RED, anchor: "start" });
  s += text(190, 328, "same T everywhere", { size: 13, weight: "bold", fill: RED }) + text(190, 347, "massless string, ideal pulley", { size: 12, fill: C.muted });
  s += divider(380, 44, 356);
  // right: heavy rope
  const rx = 560, top = 62, bot = 258;
  s += ceiling(470, 650, 50) + line(rx, 50, rx, top, { w: 3, stroke: "#555" });
  s += line(rx, top, rx, bot, { w: 9, stroke: "#9b6b3a" }) + block(rx - 30, bot, 60, 44);
  const pts = [[top + 10, 75, "T_{top}"], [(top + bot) / 2, 60, "T_{mid}"], [bot - 4, 45, "T_{bottom}"]];
  for (const [y, len, lab] of pts) s += line(rx - 9, y, rx + 9, y, { w: 2 }) + line(rx + 10, y, 612, y, { stroke: "#999", w: 1, dash: "3 3" }) + A(612, y + len, 612, y, RED, 3) + rt(622, y + len / 2 + 6, lab, { anchor: "start", fill: RED });
  s += text(560, 328, "each point holds up everything below it", { size: 13, weight: "bold" }) + text(560, 347, "uniform rope with mass (qualitative only on the AP exam)", { size: 12, fill: C.muted });
  s += text(470, 150, "heavy\nrope", { size: 12, fill: "#7a5530", weight: "bold" });
  fig(FIGS, "p1c-tension-strings", 760, 360, s, "An ideal string over an ideal pulley with equal tension on both sides, and a heavy hanging rope whose tension grows from bottom to top",
    "A massless string has the same tension at every point, and an ideal pulley only turns it. In a rope with mass, each point must support the rope below it as well as the block, so the tension arrows grow from bottom to top.");
}

// 5. friction does not depend on contact area (2.7)
{
  let s = defs + title("Kinetic friction does not depend on the area of contact");
  const fy = 210;
  s += floor(30, 730, fy);
  const brick = (x, L, H, D) => {
    const ox = D * 0.6, oy = D * 0.4, yt = fy - H;
    let g = path(`M ${x} ${yt} L ${x + ox} ${yt - oy} L ${x + L + ox} ${yt - oy} L ${x + L} ${yt} Z`, { fill: "#d98c6a", stroke: "#7a3a22", w: 1.5 });
    g += path(`M ${x + L} ${yt} L ${x + L + ox} ${yt - oy} L ${x + L + ox} ${fy - oy} L ${x + L} ${fy} Z`, { fill: "#b8664a", stroke: "#7a3a22", w: 1.5 });
    g += rect(x, yt, L, H, { fill: "#c97a58", stroke: "#7a3a22", rx: 0 });
    return g;
  };
  const scene = (x, H, D, head, sub) => {
    let g = text(x + 90, 58, head, { size: 14, weight: "bold" }) + brick(x, 180, H, D);
    const cy = fy - H / 2;
    g += A(x + 120, fy - H - D * 0.4 - 18, x + 180, fy - H - D * 0.4 - 18, "#999", 2) + text(x + 190, fy - H - D * 0.4 - 13, "v", { size: 14, weight: "bold", fill: C.muted, anchor: "start" });
    g += dot(x + 90, cy) + A(x + 90, cy, x + 90, cy + 66, RED) + rt(x + 100, cy + 60, "F_{g}", { anchor: "start", fill: RED });
    g += A(x, fy - 9, x - 64, fy - 9, GREEN, 3) + rt(x - 32, fy - 18, "f_{k}", { fill: GREEN });
    g += text(x + 90, 288, sub, { size: 12, fill: C.muted });
    return g;
  };
  s += scene(90, 34, 62, "Lying on its wide face", "large contact area, low pressure");
  s += scene(470, 62, 34, "Standing on its narrow edge", "small contact area, high pressure");
  s += rect(150, 304, 460, 52, NOTE) + rt(380, 326, "f_{k} = μ_{k}F_{N} has no area in it", { size: 14 }) + rt(380, 346, "same μ_{k} and same F_{N} (= F_{g}) → same friction", { size: 12, weight: "normal" });
  fig(FIGS, "p1c-friction-area", 760, 366, s, "The same brick sliding on its wide face and on its narrow edge with equal friction arrows",
    "The same brick feels the same kinetic friction whichever face it slides on. A bigger contact area spreads the same normal force over more surface, lowering the pressure at each spot, and the two effects cancel: only μ<sub>k</sub> and F<sub>N</sub> set the friction.");
}

// 6. 2D center of mass (4.6) - placed before the worked example, so no CM marked
{
  let s = defs + title("Center of mass in two dimensions: weight each coordinate by mass");
  const x0 = 100, y0 = 300, k = 60;
  s += graph({ x0, y0, sx: k, sy: k, xmax: 5, ymin: 0, ymax: 4, xstep: 1, ystep: 1, xl: "x (m)", yl: "y (m)", yoff: 24 });
  const P = (x, y) => [x0 + x * k, y0 - y * k];
  const pts = [[0, 0, 2.0], [4, 0, 3.0], [0, 3, 5.0]];
  s += path(`M ${P(0, 0)} L ${P(4, 0)} L ${P(0, 3)} Z`.replace(/,/g, " "), { stroke: "#888", w: 1.5 });
  for (const [x, y, m] of pts) { const [px, py] = P(x, y); s += circle(px, py, 7 * Math.sqrt(m), { fill: "#2E6BC6", stroke: "#1b3f78", w: 1.5 }); }
  s += text(122, 286, "2.0 kg at (0, 0)", { size: 12, weight: "bold", anchor: "start", fill: BLUE });
  s += text(352, 258, "3.0 kg at\n(4.0 m, 0)", { size: 12, weight: "bold", anchor: "start", fill: BLUE });
  s += text(124, 116, "5.0 kg at (0, 3.0 m)", { size: 12, weight: "bold", anchor: "start", fill: BLUE });
  s += text(60, 362, "dot size grows with mass", { size: 11, fill: C.muted, anchor: "start" });
  // inset: L-shaped bracket
  s += rect(470, 50, 270, 300, { fill: "#fbfaf6", stroke: C.line, rx: 10 }) + text(605, 74, "Symmetry shortcut", { size: 13, weight: "bold" });
  const ox = 520, oy = 270, Ls = 150, t = 18;
  s += rect(ox, oy - Ls, t, Ls, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 0 }) + rect(ox, oy - t, Ls, t, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 0 });
  s += line(ox - 6, oy + 6, ox + 170, oy - 170, { stroke: RED, w: 2, dash: "7 5" });
  s += text(605, 302, "L-bracket of two identical strips:", { size: 12 }) + text(605, 320, "the center of mass lies on the", { size: 12 }) + text(605, 338, "dashed line of symmetry", { size: 12, weight: "bold", fill: RED });
  fig(FIGS, "p1c-com-triangle", 760, 372, s, "Three masses of 2.0, 3.0 and 5.0 kilograms at the corners of a right triangle on an x-y grid, and an L-shaped bracket with its diagonal line of symmetry",
    "Find x<sub>cm</sub> and y<sub>cm</sub> one axis at a time: each mass counts in proportion to its size, so the center of mass sits closer to the heavier masses. For a symmetric object such as the L-bracket, the center of mass must lie on its line of symmetry, even though here that point is off the material.");
}

// 7. p-t graph (4.2) - before the worked example: slopes named, not valued
{
  let s = defs + title("The slope of a momentum-time graph is the net force");
  const x0 = 110, y0 = 266, sx = 95, sy = 21;
  s += graph({ x0, y0, sx, sy, xmax: 6, ymin: -2, ymax: 10, xstep: 1, ystep: 2, xl: "t (s)", yl: "p (kg·m/s)" });
  const P = (t, p) => [x0 + t * sx, y0 - p * sy];
  const seg = [[0, 0], [2, 8], [5, 8], [6, 2]];
  s += path("M " + seg.map((q) => P(...q).join(" ")).join(" L "), { stroke: RED, w: 3.5 });
  for (const q of seg) { const [px, py] = P(...q); s += circle(px, py, 4.5, { fill: RED }); }
  s += rt(214, 196, "slope = F_{net} > 0", { anchor: "start", size: 13, fill: RED });
  s += rt(442, 82, "flat: slope = 0, so F_{net} = 0", { size: 13, fill: RED });
  s += rt(624, 182, "slope = F_{net} < 0", { anchor: "end", size: 13, fill: RED });
  fig(FIGS, "p1c-pt-graph", 760, 336, s, "Momentum versus time graph rising from 0 to 8.0 kilogram meters per second over 2 seconds, flat until 5 seconds, then falling to 2.0 at 6 seconds",
    "Each straight segment of a p-t graph means a constant net force equal to its slope: rising means a positive force, flat means zero net force, and falling means a negative force. A steeper segment means a larger force.");
}

// 8. momentum bar charts (4.3) - before the dart example: bounce bars to scale but unlabeled
{
  let s = defs + title("Momentum bar charts: before and after must add to the same total");
  const y0 = 200, k = 100, ax = 110;
  s += line(ax, y0, 720, y0, { w: 2 }) + line(ax, 250, ax, 50, { w: 2, marker: "ah" });
  for (const v of [-0.5, 0.5, 1.0]) s += line(ax - 5, y0 - v * k, ax, y0 - v * k, { w: 1.5 }) + text(ax - 9, y0 - v * k + 4, (v < 0 ? "−" : "+") + Math.abs(v).toFixed(1), { size: 12, fill: C.muted, anchor: "end" });
  s += text(ax - 9, y0 + 4, "0", { size: 12, fill: C.muted, anchor: "end" }) + text(52, 150, "p (kg·m/s)", { size: 13, weight: "bold", rotate: -90 });
  s += line(ax, y0 - 1.0 * k, 720, y0 - 1.0 * k, { stroke: "#999", w: 1.2, dash: "5 4" }) + text(730, 52, "dashed line: total = +1.0", { size: 11.5, fill: C.muted, anchor: "end" });
  const bar = (x, v, fill, lab, val) => { const h = v * k; return rect(x, v >= 0 ? y0 - h : y0, 46, Math.max(Math.abs(h), 2), { fill, stroke: "#555", rx: 2 }) + text(x + 23, 268, lab, { size: 12, weight: "bold" }) + (val ? text(x + 23, v >= 0 ? y0 - h - 8 : y0 + Math.abs(h) + 18, val, { size: 13, weight: "bold" }) : ""); };
  s += bar(160, 1.0, "#f4b0a0", "dart", "+1.0") + bar(230, 0, "#a9c8f0", "cart", "0");
  s += bar(395, 1.0, "#c7b6e6", "dart + cart", "+1.0");
  s += bar(555, -0.2, "#f4b0a0", "dart", "?") + bar(625, 1.2, "#a9c8f0", "cart", "?");
  for (const x of [330, 500]) s += line(x, 60, x, 280, { stroke: C.line, w: 1.5, dash: "4 4" });
  s += text(219, 300, "Before", { size: 14, weight: "bold" }) + text(418, 300, "After: dart sticks", { size: 14, weight: "bold" }) + text(614, 300, "After: dart bounces", { size: 14, weight: "bold" });
  fig(FIGS, "p1c-dart-bars", 760, 314, s, "Momentum bar charts for a dart and cart before the collision, after the dart sticks, and after the dart bounces back",
    "One bar per object, height equal to its momentum, bars below the axis for the negative direction. With no net external force the bars after must add to the same +1.0 kg·m/s as the bars before: when the dart bounces back its bar goes negative, so the cart's bar has to rise above the total to make up the difference.");
}

// 9. glancing collision (4.3) - before the example: B's direction left as a question
{
  let s = defs + rt(380, 22, "A glancing collision: conserve p_{x} and p_{y} separately", { size: 16 });
  const puck = (x, y, lab, fill) => circle(x, y, 18, { fill, stroke: "#444", w: 1.5 }) + text(x, y + 5, lab, { size: 14, weight: "bold" });
  const axesMini = (x, y) => A(x, y, x + 40, y, C.ink, 1.6) + A(x, y, x, y - 40, C.ink, 1.6) + text(x + 46, y + 4, "+x", { size: 12, anchor: "start" }) + text(x, y - 46, "+y", { size: 12 });
  s += text(190, 56, "Before", { size: 14, weight: "bold" }) + line(40, 170, 340, 170, { stroke: "#ccc", w: 1.2, dash: "5 4" });
  s += puck(90, 170, "A", "#f4b0a0") + A(110, 170, 200, 170, RED, 3) + rt(155, 158, "v_{A} = 2.0 m/s", { size: 13, fill: RED });
  s += puck(280, 170, "B", "#a9c8f0") + text(280, 208, "at rest", { size: 12, fill: C.muted });
  s += text(90, 208, "0.30 kg", { size: 12, fill: C.muted }) + text(280, 226, "0.30 kg", { size: 12, fill: C.muted });
  s += axesMini(50, 280);
  s += divider(380, 44, 300);
  const ax = 520, ay = 170, th = 40 * Math.PI / 180;
  s += text(570, 56, "Just after", { size: 14, weight: "bold" }) + line(420, ay, 740, ay, { stroke: "#ccc", w: 1.2, dash: "5 4" });
  s += puck(ax, ay, "A", "#f4b0a0") + A(ax + 18 * Math.cos(th), ay - 18 * Math.sin(th), ax + 120 * Math.cos(th), ay - 120 * Math.sin(th), RED, 3) + rt(ax + 120 * Math.cos(th) + 8, ay - 120 * Math.sin(th) + 2, "v_{A}′", { anchor: "start", fill: RED });
  s += arc(ax, ay, 95, -40, 0) + text(ax + 108, ay - 30, "40°", { size: 13, weight: "bold", anchor: "start" });
  s += puck(ax + 36, ay, "B", "#a9c8f0") + text(ax + 36, ay + 54, "?", { size: 30, weight: "bold", fill: BLUE });
  s += text(ax + 56, ay + 46, "which way does B go?", { size: 12, fill: BLUE, weight: "bold", anchor: "start" });
  s += rect(430, 240, 310, 56, NOTE) + rt(585, 262, "x: p_{x} before = p_{x} after", { size: 13 }) + rt(585, 284, "y: p_{y} before (0) = p_{y} after", { size: 13 });
  fig(FIGS, "p1c-glancing-pucks", 760, 310, s, "Top view of puck A moving along plus x toward puck B at rest, and just after the collision with A leaving at 40 degrees above the x axis and B's direction unknown",
    "Momentum is a vector, so the x-components and the y-components are each conserved on their own. Before the collision all the momentum is along +x and p<sub>y</sub> = 0; after it, A has gained some y-momentum, and the y-equation tells you what that requires of B.");
}

// 10. ω-t graph (5.1) - before the example: area and slope named, not valued
{
  let s = defs + title("ω-t graph: the slope is α, the area underneath is Δθ");
  const x0 = 110, y0 = 290, sx = 90, sy = 28;
  s += graph({ x0, y0, sx, sy, xmax: 6, ymin: 0, ymax: 8, xstep: 1, ystep: 2, xl: "t (s)", yl: "ω (rad/s)" });
  const P = (t, w) => [x0 + t * sx, y0 - w * sy];
  s += path(`M ${P(0, 0).join(" ")} L ${P(3, 6).join(" ")} L ${P(5, 6).join(" ")} L ${P(5, 0).join(" ")} Z`, { fill: "#cfe3f7", stroke: "none" });
  s += path(`M ${P(0, 0).join(" ")} L ${P(3, 6).join(" ")} L ${P(5, 6).join(" ")}`, { stroke: BLUE, w: 3.5 });
  s += line(...P(5, 6), ...P(5, 0), { stroke: BLUE, w: 1.2, dash: "4 4" });
  for (const q of [[0, 0], [3, 6], [5, 6]]) { const [px, py] = P(...q); s += circle(px, py, 4.5, { fill: BLUE }); }
  s += text(410, 236, "area = Δθ", { size: 15, weight: "bold", fill: "#1b3f78" });
  s += rt(232, 160, "slope = α", { anchor: "end", size: 14, fill: BLUE });
  s += rt(470, 116, "flat: slope = 0, so α = 0", { size: 13, fill: BLUE });
  s += rect(570, 150, 170, 74, NOTE) + text(655, 172, "Same rules as Unit 1:", { size: 12.5, weight: "bold" }) + text(655, 192, "slope of θ-t = ω\narea under α-t = Δω", { size: 12 });
  fig(FIGS, "p1c-omega-graph", 760, 352, s, "Angular velocity versus time rising in a straight line from 0 to 6 radians per second over 3 seconds, then constant until 5 seconds, with the area under it shaded",
    "Angular graphs read exactly like Unit 1 motion graphs. The slope of the straight rising segment is the angular acceleration, the flat segment means α = 0, and the shaded area under the whole graph is the total angle turned.");
}

// 11. lever arm and line of action (5.2) - before the 40 N example: no torque or r⊥ value
{
  let s = defs + title("Lever arm: the perpendicular distance from the axis to the line of action");
  const O = [110, 170], rpx = 340, P = [O[0] + rpx, 170], th = 30 * Math.PI / 180, d = [Math.cos(th), -Math.sin(th)];
  const at = (t) => [P[0] + t * d[0], P[1] + t * d[1]];
  const tf = -rpx * Math.cos(th), foot = at(tf), n = [(O[0] - foot[0]) / (rpx * Math.sin(th)), (O[1] - foot[1]) / (rpx * Math.sin(th))];
  // wall mount and rod
  s += rect(56, 130, 16, 80, { fill: "#bbb", stroke: "#777", rx: 0 }) + line(72, 170, O[0], 170, { w: 6, stroke: "#777" });
  s += rect(O[0], 163, 420, 14, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 3 }) + circle(O[0], 170, 7, { fill: "#fff", stroke: C.ink, w: 2.5 }) + text(O[0] - 2, 205, "pivot", { size: 12, fill: C.muted });
  // line of action
  const la = at(-372), lb = at(200);
  s += line(la[0], la[1], lb[0], lb[1], { stroke: "#888", w: 1.6, dash: "7 5" });
  const lt = at(-170);
  s += text(lt[0] + 12, lt[1] + 20, "line of action (extended)", { size: 12, fill: C.muted, rotate: -30 });
  // r-perp with right-angle mark
  s += line(O[0], O[1], foot[0], foot[1], { stroke: GREEN, w: 3 });
  const q1 = [foot[0] + 12 * d[0], foot[1] + 12 * d[1]], q2 = [q1[0] + 12 * n[0], q1[1] + 12 * n[1]], q3 = [foot[0] + 12 * n[0], foot[1] + 12 * n[1]];
  s += path(`M ${r1(q1[0])} ${r1(q1[1])} L ${r1(q2[0])} ${r1(q2[1])} L ${r1(q3[0])} ${r1(q3[1])}`, { stroke: GREEN, w: 1.5 });
  s += rt((O[0] + foot[0]) / 2 - 12, (O[1] + foot[1]) / 2 + 8, "r_{⊥}", { anchor: "end", size: 16, fill: GREEN });
  // r dimension
  s += line(O[0], 128, P[0], 128, { w: 1.4 }) + line(O[0], 122, O[0], 150, { w: 1, stroke: "#999" }) + line(P[0], 122, P[0], 150, { w: 1, stroke: "#999" });
  s += A(O[0] + 160, 128, O[0] + 2, 128, C.ink, 1.4) + A(P[0] - 160, 128, P[0] - 2, 128, C.ink, 1.4) + text((O[0] + P[0]) / 2, 120, "r = 0.50 m", { size: 13, weight: "bold" });
  // force and angle
  const tip = at(140);
  s += A(P[0], P[1], tip[0], tip[1], RED, 3.5) + text(tip[0] + 4, tip[1] + 24, "F = 40 N", { size: 13, weight: "bold", fill: RED, anchor: "start" });
  s += circle(P[0], P[1], 4, { fill: C.ink }) + arc(P[0], P[1], 48, -30, 0, { w: 1.6 }) + text(P[0] + 62, P[1] - 12, "θ = 30°", { size: 13, weight: "bold", anchor: "start" });
  s += rect(560, 248, 180, 92, NOTE) + text(650, 270, "Two groupings, one torque", { size: 12.5, weight: "bold" }) + text(650, 292, "τ = r (F sin θ)\nτ = (r sin θ) F = r⊥F", { size: 12.5 }) + text(650, 330, "r⊥ = 0 → no torque", { size: 12, fill: C.muted });
  fig(FIGS, "p1c-lever-arm", 760, 396, s, "A rod pivoted at its left end with a 40 newton force applied 0.50 meters out at 30 degrees, its line of action extended, and the perpendicular lever arm from the pivot",
    "Extend the force arrow into its line of action, then drop a perpendicular from the pivot to that line: its length is the lever arm r<sub>⊥</sub> = r sin θ. Multiplying r⊥ by the whole force gives the same torque as multiplying r by the force's perpendicular component.");
}

// 12. hinged beam force diagram vs dot FBD (5.2) - end of block, after the example
{
  let s = defs + title("Force diagram (forces where they act) vs. dot FBD");
  const y = 270, hx = 80, L = 360, th = 30 * Math.PI / 180, W = 80, Ty = W / 2, T = Ty / Math.sin(th), Tx = T * Math.cos(th);
  s += text(275, 56, "Force diagram: use it for torque", { size: 14, weight: "bold" });
  s += rect(54, 60, 26, 270, { fill: "#cfcac0", stroke: "#888", rx: 0 });
  const wallY = y - 8 - L * Math.tan(th);
  s += line(hx + L, y - 8, hx, wallY, { stroke: "#888", w: 2 }) + text(hx + 180, wallY + 84, "cable", { size: 12, fill: C.muted, rotate: -30 });
  s += rect(hx, y - 8, L, 16, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 3 }) + circle(hx, y, 7, { fill: "#fff", stroke: C.ink, w: 2.5 });
  s += text(hx + 6, y + 30, "hinge (axis)", { size: 12, fill: C.muted, anchor: "start" }) + text(hx + L - 60, y + 40, "uniform beam:\nweight at midpoint", { size: 11.5, fill: C.muted });
  s += dot(hx + L / 2, y) + A(hx + L / 2, y, hx + L / 2, y + W, RED, 3) + rt(hx + L / 2 + 10, y + W - 6, "F_{g}", { anchor: "start", fill: RED });
  s += A(hx + L, y, hx + L - Tx, y - Ty, BLUE, 3) + text(hx + L - Tx / 2 + 6, y - Ty / 2 - 14, "T", { size: 15, weight: "bold", fill: BLUE });
  s += A(hx, y, hx + Tx, y - Ty, GREEN, 3) + rt(hx + Tx + 6, y - Ty - 4, "F_{hinge}", { anchor: "start", fill: GREEN });
  s += divider(500, 44, 380);
  const cx = 620, cy = 210;
  s += text(cx, 56, "Dot FBD", { size: 14, weight: "bold" });
  s += A(cx, cy, cx, cy + W, RED, 3) + rt(cx + 10, cy + W - 6, "F_{g}", { anchor: "start", fill: RED });
  s += A(cx, cy, cx - Tx, cy - Ty, BLUE, 3) + text(cx - Tx - 8, cy - Ty + 2, "T", { size: 15, weight: "bold", fill: BLUE, anchor: "end" });
  s += A(cx, cy, cx + Tx, cy - Ty, GREEN, 3) + rt(cx + Tx + 6, cy - Ty - 4, "F_{hinge}", { anchor: "start", fill: GREEN }) + dot(cx, cy);
  s += text(cx, 326, "fine for F = ma,", { size: 12.5, weight: "bold" }) + text(cx, 344, "not for torque: it hides", { size: 12.5, weight: "bold" }) + text(cx, 362, "where each force acts", { size: 12.5, weight: "bold" });
  fig(FIGS, "p1c-beam-force-diagram", 760, 380, s, "A hinged horizontal beam held by a cable with its weight, tension and hinge force drawn where they act, beside a dot free-body diagram of the same forces",
    "A force diagram draws each force where it acts: the weight at the beam's midpoint, the tension at the cable's end, and the hinge force at the axis (zero torque there, but still part of ΣF). The dot FBD has the same three forces and works for ΣF = 0, but it cannot show lever arms.");
}

// 13. parallel axis theorem (5.3)
{
  let s = defs + title("Parallel axis theorem: moving the axis away from the center of mass raises I");
  const y = 170, L = 240;
  const rod = (x) => rect(x, y - 7, L, 14, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 4 });
  const spin = (x) => path(`M ${x - 30} 92 A 30 9 0 1 0 ${x + 30} 92`, { stroke: C.ink, w: 1.8, marker: "ah" });
  // left: axis through center
  const lx = 70, lc = lx + L / 2;
  s += text(lc, 56, "Axis through the center", { size: 14, weight: "bold" }) + rod(lx);
  s += line(lc, 80, lc, 262, { stroke: BLUE, w: 2.2, dash: "7 5" }) + spin(lc) + circle(lc, y, 4, { fill: BLUE });
  s += line(lx, 214, lx + L, 214, { w: 1.3 }) + A(lc - 30, 214, lx + 2, 214, C.ink, 1.3) + A(lc + 30, 214, lx + L - 2, 214, C.ink, 1.3) + text(lc - 60, 207, "L", { size: 14, weight: "bold" });
  s += rt(lc, 292, "I_{cm} = (1/12)ML²", { size: 15, fill: BLUE });
  s += divider(380, 44, 310);
  // right: axis through end
  const rx = 450, rc = rx + L / 2;
  s += text(570, 56, "Parallel axis through one end", { size: 14, weight: "bold" }) + rod(rx);
  s += line(rc, 80, rc, 262, { stroke: "#aaa", w: 1.5, dash: "4 4" }) + text(rc + 8, 88, "cm axis", { size: 11.5, fill: C.muted, anchor: "start" }) + circle(rc, y, 4, { fill: "#888" });
  s += line(rx, 80, rx, 262, { stroke: RED, w: 2.2, dash: "7 5" }) + spin(rx);
  s += line(rx, 222, rc, 222, { w: 1.3 }) + A(rx + 30, 222, rx + 2, 222, C.ink, 1.3) + A(rc - 30, 222, rc - 2, 222, C.ink, 1.3) + rt(rx + 60, 214, "d = L/2", { size: 13 });
  s += rt(570, 292, "I_{end} = I_{cm} + Md² = (1/3)ML²", { size: 15, fill: RED });
  fig(FIGS, "p1c-parallel-axis", 760, 310, s, "The same thin rod spinning about an axis through its center and about a parallel axis through one end, a distance L over 2 away",
    "Both axes are parallel, so the theorem applies: I about the end equals I<sub>cm</sub> plus Md² with d = L/2. Every bit of the rod is on average farther from the end axis, which is why I<sub>end</sub> is four times I<sub>cm</sub>.");
}

// 14. block on a massive pulley (5.4) - end of block, after the example; 5.5 px per newton
{
  let s = defs + title("Block on a heavy pulley: one equation for each object, linked by a = αR");
  const k = 5.5, mg = 9.8, T = 4.9, Mg = 19.6, Fax = Mg + T;
  // setup
  const cx = 130, cy = 130, R = 46;
  s += ceiling(70, 190, 46) + line(cx, 46, cx, cy, { w: 4, stroke: "#777" });
  s += circle(cx, cy, R, { fill: "#e9edf2", stroke: "#555", w: 2 }) + circle(cx, cy, 4, { fill: "#555" });
  s += line(cx, cy, cx - R * 0.707, cy + R * 0.707, { w: 1.4, stroke: "#555" }) + text(cx - 12, cy + 36, "R", { size: 13, weight: "bold", anchor: "start" });
  s += line(cx + R, cy, cx + R, 244, { stroke: "#555", w: 2 }) + block(cx + R - 30, 244, 60, 44) + text(cx + R, 271, "1.0 kg", { size: 12, weight: "bold" });
  s += A(cx + R + 44, 248, cx + R + 44, 292, GREEN, 2.5) + text(cx + R + 52, 276, "a", { size: 14, weight: "bold", fill: GREEN, anchor: "start" });
  s += arc(cx, cy, 30, 110, 250, { stroke: C.orange, w: 2.2, marker: "aho" }) + text(cx - 52, cy + 5, "α", { size: 15, weight: "bold", fill: C.orange, anchor: "end" });
  s += text(cx - 50, 216, "solid disk", { size: 12, fill: C.muted }) + text(cx - 50, 234, "M = 2.0 kg", { size: 12, weight: "bold" }) + text(cx - 50, 252, "R = 0.10 m", { size: 12, weight: "bold" });
  s += rect(30, 304, 220, 30, NOTE) + text(140, 324, "no slip: a = αR", { size: 13, weight: "bold" });
  s += text(140, 360, "Setup", { size: 14, weight: "bold" });
  s += divider(270, 44, 370);
  // block FBD
  const bx = 360, by = 180;
  s += A(bx, by, bx, by + mg * k, RED, 3) + rt(bx + 10, by + mg * k - 4, "F_{g}", { anchor: "start", fill: RED });
  s += A(bx, by, bx, by - T * k, BLUE, 3) + text(bx + 10, by - T * k + 6, "T", { size: 15, weight: "bold", fill: BLUE, anchor: "start" }) + dot(bx, by);
  s += rt(bx, 286, "F_{net} = ma", { size: 12.5, weight: "normal", fill: C.muted }) + text(bx, 360, "Block (dot FBD)", { size: 14, weight: "bold" });
  s += divider(450, 44, 370);
  // pulley extended force diagram
  const px = 600, py = 200, PR = 50;
  s += circle(px, py, PR, { fill: "#e9edf2", stroke: "#555", w: 2 });
  s += A(px, py, px, py - Fax * k, GREEN, 3) + rt(px + 10, py - Fax * k + 14, "F_{axle}", { anchor: "start", fill: GREEN });
  s += A(px, py, px, py + Mg * k, RED, 3) + rt(px + 10, py + Mg * k - 4, "F_{g,pulley}", { anchor: "start", fill: RED });
  s += A(px + PR, py, px + PR, py + T * k, BLUE, 3) + text(px + PR + 10, py + T * k - 2, "T", { size: 15, weight: "bold", fill: BLUE, anchor: "start" }) + circle(px + PR, py, 3.5, { fill: BLUE });
  s += arc(px, py, 32, 110, 250, { stroke: C.orange, w: 2.2, marker: "aho" }) + text(px - 40, py + 8, "α", { size: 15, weight: "bold", fill: C.orange, anchor: "end" }) + dot(px, py);
  s += text(px + 110, py - 40, "only T has a\nlever arm (R)\nabout the axle:\nτ = TR = Iα", { size: 12, fill: C.muted });
  s += text(px, 360, "Pulley (extended force diagram)", { size: 14, weight: "bold" });
  fig(FIGS, "p1c-heavy-pulley", 760, 372, s, "A block hanging from a string wrapped around a solid-disk pulley, with a dot free-body diagram for the block and an extended force diagram for the pulley",
    "Treat each object on its own terms: the block is a dot obeying F<sub>net</sub> = ma, and the pulley is an extended object obeying τ<sub>net</sub> = Iα, where only the string's tension at the rim has a lever arm about the axle. The string ties the two together through a = αR, and because spinning up the pulley takes torque, T is less than the block's weight.");
}
