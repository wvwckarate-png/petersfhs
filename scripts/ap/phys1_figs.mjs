import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah" });
const box = (x, y, w, h, fill = "#d9c7a8") => rect(x, y, w, h, { fill, stroke: "#6b5a3a", rx: 3 });

// motion graphs
{
  let s = defs + title("One motion, three graphs: speeding up, cruising, then braking");
  const x0 = 70, w = 620;
  const panel = (y0, yl, f, lab, note2) => axes(x0, y0, w, 70, "", yl) + curve(x0, y0, w, 1, f, { stroke: RED }).replace(/d="/, 'd="') + text(x0 + w + 4, y0 - 30, lab, { size: 11.5, anchor: "start", fill: C.muted });
  // piecewise: t in [0,1]: speed up 0-.35, cruise .35-.65, brake .65-1; v scale 0..60 px
  const v = (t) => t < .35 ? (t / .35) * 0.8 : t < .65 ? 0.8 : 0.8 * (1 - (t - .65) / .35);
  const xpos = (() => { let acc = 0, arr = [0]; for (let i = 1; i <= 80; i++) { acc += v(i / 80) / 80; arr.push(acc); } const mx = acc; return (t) => (arr[Math.round(t * 80)] / mx) * 0.95; })();
  const a = (t) => t < .35 ? 0.5 : t < .65 ? 0 : -0.5;
  s += axes(x0, 96, w, 60, "", "x") + (() => { let d = ""; for (let i = 0; i <= 80; i++) d += (i ? " L " : "M ") + (x0 + i / 80 * w) + " " + (96 - xpos(i / 80) * 58); return path(d, { stroke: RED, w: 3.5 }); })();
  s += axes(x0, 186, w, 60, "", "v") + (() => { let d = ""; for (let i = 0; i <= 80; i++) d += (i ? " L " : "M ") + (x0 + i / 80 * w) + " " + (186 - v(i / 80) / 0.8 * 56); return path(d, { stroke: BLUE, w: 3.5 }); })();
  s += axes(x0, 290, w, 60, "", "a") + line(x0, 290 - 30, x0 + w, 290 - 30, { stroke: "#bbb", w: 1, dash: "3 3" }) + (() => { let d = ""; [[0, .5], [.35, .5], [.35, 0], [.65, 0], [.65, -.5], [1, -.5]].forEach(([t, av], i) => d += (i ? " L " : "M ") + (x0 + t * w) + " " + (290 - 30 - av * 56)); return path(d, { stroke: GREEN, w: 3.5 }); })();
  [0.35, 0.65].forEach((t) => s += line(x0 + t * w, 40, x0 + t * w, 296, { stroke: "#bbb", w: 1, dash: "4 4" }));
  s += text(x0 + .175 * w, 316, "speeding up", { size: 12, weight: "bold" }) + text(x0 + .5 * w, 316, "constant speed", { size: 12, weight: "bold" }) + text(x0 + .825 * w, 316, "braking", { size: 12, weight: "bold" }) + text(x0 + w / 2, 338, "time", { size: 12, weight: "bold" });
  s += text(x0 + .175 * w, 116, "x curves up (slope rising)", { size: 11, fill: C.muted }) + text(x0 + .5 * w, 116, "straight line, slope = v", { size: 11, fill: C.muted }) + text(x0 + .825 * w, 116, "flattens as v → 0", { size: 11, fill: C.muted });
  s += text(x0 + .175 * w, 204, "slope = a > 0", { size: 11, fill: C.muted }) + text(x0 + .5 * w, 204, "slope = 0", { size: 11, fill: C.muted }) + text(x0 + .825 * w, 204, "slope = a < 0", { size: 11, fill: C.muted });
  fig(FIGS, "motion-graphs", 760, 350, s, "Aligned position, velocity and acceleration graphs for one motion", "Read the three graphs together: the slope of x–t is v, the slope of v–t is a, and the area under v–t is displacement. Each phase of the motion has a signature shape on all three.");
}
// projectile
{
  let s = defs + title("Projectile motion: constant horizontal velocity, constant vertical acceleration");
  const x0 = 60, y0 = 250;
  s += line(x0, y0, 700, y0, { w: 2, stroke: "#777" });
  let d = ""; for (let i = 0; i <= 60; i++) { const t = i / 60; d += (i ? " L " : "M ") + (x0 + t * 600) + " " + (y0 - 4 * t * (1 - t) * 150); } s += path(d, { stroke: C.muted, w: 2, dash: "6 5" });
  [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1].forEach((t) => { const x = x0 + t * 600, y = y0 - 4 * t * (1 - t) * 150; const vy = (1 - 2 * t) * 52; s += circle(x, y, 5, { fill: C.ink }) + A(x, y, x + 46, y, BLUE, 2) + (Math.abs(vy) > 4 ? A(x, y, x, y - vy, GREEN, 2) : ""); });
  s += text(300, 54, "vₓ is the same at every point (blue)", { size: 12.5, weight: "bold", fill: BLUE }) + text(300, 72, "vᵧ shrinks to 0 at the top, then grows downward (green)", { size: 12.5, weight: "bold", fill: GREEN });
  s += text(x0 + 300, y0 - 160, "top: vᵧ = 0", { size: 11.5, fill: C.muted }) + text(380, 292, "range", { size: 12, weight: "bold" }) + line(x0, 272, x0 + 600, 272, { w: 1.5, marker: "ah" });
  s += rect(520, 60, 220, 76, NOTE) + text(630, 80, "x: aₓ = 0     y: aᵧ = −g", { size: 12.5, weight: "bold" }) + text(630, 104, "Treat x and y separately;\ntime is the shared link.", { size: 11.5 });
  fig(FIGS, "projectile-path", 760, 304, s, "Parabolic projectile path with constant horizontal velocity arrows and changing vertical velocity arrows", "Horizontal and vertical motions are independent. Horizontal velocity never changes; vertical velocity changes by g every second, passing through zero at the highest point.");
}
// FBDs
{
  let s = defs + title("Free-body diagrams: draw only forces ON the object");
  const dot = (x, y) => circle(x, y, 7, { fill: C.ink });
  s += text(130, 52, "At rest on a table", { size: 12.5, weight: "bold" }) + box(90, 120, 80, 50) + dot(130, 145) + A(130, 145, 130, 85) + text(142, 90, "N", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + A(130, 145, 130, 205) + text(142, 205, "F_g = mg", { size: 12, weight: "bold", fill: RED, anchor: "start" }) + line(60, 170, 200, 170, { w: 3, stroke: "#777" }) + text(130, 232, "N = mg (balanced)", { size: 11.5, fill: C.muted });
  s += line(255, 44, 255, 246, { stroke: C.line, w: 1.5 });
  s += text(380, 52, "Pulled, sliding with friction", { size: 12.5, weight: "bold" }) + dot(380, 145) + A(380, 145, 380, 85) + text(392, 90, "N", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + A(380, 145, 380, 205) + text(392, 205, "F_g", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + A(380, 145, 460, 145, BLUE) + text(466, 140, "F_pull", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }) + A(380, 145, 310, 145, GREEN) + text(300, 140, "f", { size: 13, weight: "bold", fill: GREEN, anchor: "end" }) + text(380, 232, "no 'force of motion' arrow", { size: 11.5, fill: C.muted });
  s += line(505, 44, 505, 246, { stroke: C.line, w: 1.5 });
  s += text(630, 52, "Hanging from a rope", { size: 12.5, weight: "bold" }) + dot(630, 145) + A(630, 145, 630, 85) + text(642, 90, "T", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + A(630, 145, 630, 205) + text(642, 205, "F_g = mg", { size: 12, weight: "bold", fill: RED, anchor: "start" }) + text(630, 232, "at rest: T = mg", { size: 11.5, fill: C.muted });
  s += text(380, 270, "Steps: isolate one object → draw it as a dot → add each contact force and gravity → label every arrow.", { size: 12, weight: "bold" });
  fig(FIGS, "fbd-examples", 760, 288, s, "Free-body diagrams for a block at rest, a block pulled with friction, and a hanging mass", "A free-body diagram shows one object as a dot with arrows for every force acting on it. There is no arrow for 'motion' itself, and the object's own forces on other things are never drawn.");
}
// third law pairs
{
  let s = defs + title("Third-law pairs: equal, opposite, and on DIFFERENT objects");
  s += text(190, 52, "Book on a table", { size: 13, weight: "bold" }) + box(150, 100, 80, 36, "#c8d8e8") + line(90, 136, 290, 136, { w: 12, stroke: "#b8a888" }) + text(190, 122, "book", { size: 11.5 });
  s += A(165, 98, 165, 54, RED, 3) + text(140, 76, "N: table on book", { size: 11, weight: "bold", fill: RED, anchor: "end" }) + A(215, 148, 215, 196, BLUE, 3) + text(225, 200, "book on table", { size: 11, weight: "bold", fill: BLUE, anchor: "start" });
  s += text(190, 232, "N (on book) pairs with 'book on table' (on table).\nN and F_g both act on the book: NOT a pair.", { size: 11.5, fill: C.muted });
  s += line(380, 44, 380, 250, { stroke: C.line, w: 1.5 });
  s += text(570, 52, "Pushing on a wall", { size: 13, weight: "bold" }) + circle(480, 120, 18, { fill: "#f4d8c0", stroke: "#555" }) + rect(480, 138, 8, 40, { fill: "#f4d8c0", stroke: "#555", rx: 3 }) + rect(640, 80, 30, 150, { fill: "#999", stroke: "#555", rx: 0 }) + text(655, 160, "wall", { size: 12, fill: "#fff", rotate: -90 });
  s += A(500, 130, 636, 130, RED, 3) + text(570, 118, "F (person on wall)", { size: 12, weight: "bold", fill: RED }) + A(636, 156, 500, 156, BLUE, 3) + text(570, 176, "F (wall on person)", { size: 12, weight: "bold", fill: BLUE });
  s += text(570, 222, "same size, opposite directions,\nacting on two different objects", { size: 12, weight: "bold" });
  fig(FIGS, "third-law-pairs", 760, 268, s, "Third law force pairs between a person and a wall, and a warning about normal force and gravity", "A third-law pair always involves two objects: A pushes on B, and B pushes on A. Because the forces act on different objects they never cancel inside one free-body diagram.");
}
// friction graph
{
  let s = defs + title("Friction vs. applied force: static adjusts, kinetic stays fixed");
  const x0 = 90, y0 = 230, w = 400, h = 160;
  s += axes(x0, y0, w, h, "applied force", "friction force") + line(x0, y0, x0 + 170, y0 - 110, { stroke: BLUE, w: 3.5 }) + path(`M ${x0 + 170} ${y0 - 110} L ${x0 + 178} ${y0 - 74} L ${x0 + w} ${y0 - 74}`, { stroke: RED, w: 3.5 });
  s += line(x0 + 170, y0, x0 + 170, y0 - 110, { stroke: "#999", w: 1, dash: "4 4" }) + text(x0 + 170, y0 + 16, "starts to slide", { size: 11, fill: C.muted }) + line(x0, y0 - 110, x0 + 170, y0 - 110, { stroke: "#999", w: 1, dash: "4 4" });
  s += text(x0 + 70, y0 - 100, "static: f = applied\n(up to f_max = μₛN)", { size: 11.5, weight: "bold", fill: BLUE }) + text(x0 + 290, y0 - 88, "kinetic: f = μₖN (constant)", { size: 11.5, weight: "bold", fill: RED });
  s += rect(530, 56, 210, 150, NOTE) + text(635, 80, "Key facts", { size: 13, weight: "bold" }) + text(635, 106, "• static friction matches the\n  push until it maxes out\n• μₖ < μₛ, so kinetic friction\n  is lower than the maximum\n  static friction", { size: 12, anchor: "middle" });
  fig(FIGS, "friction-graph", 760, 262, s, "Graph of friction force versus applied force showing static friction rising then dropping to constant kinetic friction", "Static friction rises to match the applied force until it reaches its maximum μₛN. Once sliding starts, friction drops to the constant value μₖN.");
}
// Hooke
{
  let s = defs + title("Hooke's law: the spring force is proportional to displacement and opposes it");
  const spring = (xa, xb, y) => { let d = `M ${xa} ${y}`; const n = 10, step = (xb - xa - 20) / n; d += ` L ${xa + 10} ${y}`; for (let i = 0; i < n; i++) d += ` L ${xa + 10 + step * (i + .25)} ${y - 12} L ${xa + 10 + step * (i + .75)} ${y + 12}`; d += ` L ${xb - 10} ${y} L ${xb} ${y}`; return path(d, { stroke: "#555", w: 2 }); };
  s += line(40, 40, 40, 310, { w: 6, stroke: "#777" });
  const row = (y, xb, lab, arrowDir) => spring(40, xb, y) + box(xb, y - 22, 40, 44, "#c8d8e8") + (arrowDir > 0 ? A(xb + 20, y - 34, xb + 80, y - 34, RED) + text(xb + 50, y - 40, "F", { size: 12, weight: "bold", fill: RED }) : arrowDir < 0 ? A(xb + 20, y - 34, xb - 40, y - 34, RED) + text(xb - 10, y - 40, "F", { size: 12, weight: "bold", fill: RED }) : "") + text(xb + 20, y + 40, lab, { size: 11.5, fill: C.muted });
  s += row(70, 200, "natural length (x = 0, F = 0)", 0) + row(170, 300, "stretched (x > 0): F points back, −kx", -1) + row(270, 130, "compressed (x < 0): F points out, +", 1);
  const gx = 470, gy = 270;
  s += axes(gx, gy, 250, 170, "displacement x", "F_spring") + line(gx + 20, gy - 150, gx + 230, gy - 12, { stroke: RED, w: 3.5 }).replace("", "") ;
  s += line(gx - 4, gy - 85, gx + 250, gy - 85, { stroke: "#bbb", w: 1 }) + text(gx + 190, gy - 140, "slope = −k", { size: 12.5, weight: "bold", fill: RED }) + text(gx + 125, gy - 20, "k = stiffness (N/m)", { size: 11.5, fill: C.muted });
  fig(FIGS, "hooke-law", 760, 340, s, "Spring stretched and compressed with restoring force and a force versus displacement graph", "A spring always pushes or pulls back toward its natural length. On an F–x graph the slope is −k, so a stiffer spring has a steeper line.");
}
// ramp
{
  let s = defs + title("Ramp problems: tilt the axes so one runs along the incline");
  s += path("M 70 220 L 430 220 L 430 80 Z", { stroke: "#777", w: 3, fill: "#efe6d2" });
  s += `<g transform="rotate(-21.3 290 134.4)">` + rect(260, 100.4, 60, 34, { fill: "#c8d8e8", stroke: "#555", rx: 3 }) + `</g>`;
  const px = 296, py = 118;
  s += A(px, py, px - 24, py - 62, RED, 3) + text(px - 30, py - 66, "N", { size: 13, weight: "bold", fill: RED }) + A(px, py, px, py + 80, RED, 3) + text(px + 14, py + 78, "mg", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + A(px, py, px - 56, py + 21, GREEN, 2.5) + text(px - 62, py + 36, "mg sinθ", { size: 11.5, weight: "bold", fill: GREEN, anchor: "end" }) + A(px, py, px + 22, py + 56, GOLD, 2.5, ) + text(px + 28, py + 62, "mg cosθ", { size: 11.5, weight: "bold", fill: GOLD, anchor: "start" });
  s += text(110, 210, "θ", { size: 15, weight: "bold" }) + path("M 130 220 A 60 60 0 0 0 125 202", { stroke: C.ink, w: 1.5 });
  s += rect(500, 56, 240, 190, NOTE) + text(620, 80, "Along the ramp", { size: 13, weight: "bold" }) + text(620, 104, "mg sinθ down the slope\nplus friction (if any)", { size: 12 }) + text(620, 150, "Perpendicular to the ramp", { size: 13, weight: "bold" }) + text(620, 174, "N = mg cosθ\n(no acceleration this way)", { size: 12 }) + text(620, 224, "θ is the ramp angle, also the angle\nbetween mg and the perpendicular", { size: 11, fill: C.muted });
  fig(FIGS, "ramp-components", 760, 264, s, "Block on an incline with normal force, weight and weight components along and perpendicular to the ramp", "Rotate the axes so x runs along the incline. Weight splits into mg sinθ along the ramp and mg cosθ into it; the normal force balances the second part.");
}
// work at angle
{
  let s = defs + title("Work: only the component of force along the motion counts");
  s += box(100, 140, 90, 50, "#c8d8e8") + line(60, 190, 360, 190, { w: 3, stroke: "#777" }) + A(145, 160, 255, 100, RED, 3) + text(265, 96, "F", { size: 14, weight: "bold", fill: RED }) + A(145, 160, 255, 160, GREEN, 2.5).replace("", "") + text(262, 164, "F cosθ", { size: 12, weight: "bold", fill: GREEN, anchor: "start" }) + A(255, 160, 255, 100, BLUE, 2) + text(285, 128, "F sinθ", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }) + path("M 190 160 A 45 45 0 0 0 183 142", { stroke: C.ink, w: 1.5 }) + text(200, 148, "θ", { size: 14, weight: "bold" });
  s += line(100, 218, 360, 218, { w: 1.5, marker: "ah" }) + text(230, 238, "displacement d", { size: 12, weight: "bold" });
  s += text(230, 70, "W = F d cosθ", { size: 16, weight: "bold" });
  const row = (y, th, lab, col) => text(520, y, th, { size: 12.5, weight: "bold", anchor: "start" }) + text(600, y, lab, { size: 12.5, anchor: "start", fill: col, weight: "bold" });
  s += rect(430, 56, 310, 170, NOTE) + text(585, 80, "Sign of the work", { size: 13, weight: "bold" }) + row(112, "θ = 0°", "W = +Fd (max)", GREEN) + row(140, "θ = 90°", "W = 0 (⟂ to motion)", C.ink) + row(168, "θ = 180°", "W = −Fd (opposes)", RED) + text(585, 204, "e.g. friction does negative work", { size: 11.5, fill: C.muted });
  fig(FIGS, "work-angle", 760, 262, s, "Force applied at an angle to the displacement with its horizontal component and a table of work for different angles", "Only the part of the force parallel to the displacement does work. A perpendicular force does none, and a force opposing the motion does negative work.");
}
// energy bars
{
  let s = defs + title("Conservation of mechanical energy: bars trade, the total stays the same");
  s += path("M 40 70 C 110 70, 140 70, 190 150 C 240 230, 300 250, 380 250 C 460 250, 500 150, 560 110 C 600 85, 650 80, 700 80", { stroke: "#777", w: 4 });
  const pos = [[70, 70, "A"], [250, 226, "B"], [530, 132, "C"]]; pos.forEach(([x, y, l]) => s += circle(x, y - 10, 9, { fill: GOLD, stroke: "#7a5b00" }) + text(x, y - 26, l, { size: 14, weight: "bold" }));
  const bars = (x, ke, pe, lab) => { let g = text(x + 45, 272, lab, { size: 12, weight: "bold" }); const b = (dx, v, col, l) => rect(x + dx, 340 - v * 60, 26, v * 60, { fill: col, stroke: "#555", rx: 2 }) + text(x + dx + 13, 354, l, { size: 11, weight: "bold" }); g += b(0, pe, BLUE, "PE") + b(30, ke, RED, "KE") + rect(x + 60, 340 - 60, 26, 60, { fill: "none", stroke: "#888", rx: 2, dash: "3 3" }) + text(x + 73, 354, "total", { size: 10, fill: C.muted }); return g; };
  s += bars(80, 0, 1, "At A") + bars(330, 0.85, 0.15, "At B (lowest)") + bars(580, 0.35, 0.65, "At C");
  s += text(380, 392, "KE + PE is constant when only gravity and springs do work (no friction).", { size: 12.5, weight: "bold" });
  fig(FIGS, "energy-bars", 760, 408, s, "Track with three marked points and energy bar charts showing kinetic and potential energy trading while total stays constant", "Energy bar charts make conservation visible: potential energy is highest at the top, kinetic energy at the bottom, and the total height of the bars never changes.");
}
// impulse
{
  let s = defs + title("Impulse is the area under a force-time graph");
  const x0 = 70, y0 = 220, w = 330, h = 150;
  s += axes(x0, y0, w, h, "", "force F") + text(x0 + w - 10, y0 + 18, "time", { size: 12, weight: "bold", anchor: "end" }) + `<path d="M ${x0 + 60} ${y0} ` + Array.from({ length: 41 }, (_, i) => { const t = i / 40; return `L ${x0 + 60 + t * 180} ${y0 - Math.sin(t * Math.PI) * 120}`; }).join(" ") + ` L ${x0 + 240} ${y0} Z" fill="#cfe0f7" stroke="${BLUE}" stroke-width="3"/>`;
  s += text(x0 + 150, y0 - 50, "J = area\n= FΔt (average)", { size: 13, weight: "bold" }) + line(x0 + 60, y0 + 6, x0 + 240, y0 + 6, { w: 1.5 }) + text(x0 + 150, y0 + 22, "Δt", { size: 12, weight: "bold" });
  s += rect(450, 56, 290, 160, NOTE) + text(595, 80, "J = FΔt = Δp", { size: 15, weight: "bold" }) + text(595, 108, "Same Δp, longer Δt → smaller force.", { size: 12.5 }) + text(595, 136, "airbags · crumple zones · bending\nknees on landing · catching a ball", { size: 12 }) + text(595, 190, "(same change in momentum, spread out)", { size: 11, fill: C.muted });
  fig(FIGS, "impulse-area", 760, 252, s, "Force versus time graph with shaded area representing impulse and an explanation of lengthening collision time", "Impulse equals the area under the F–t curve and equals the change in momentum. Stretching the collision over a longer time lowers the average force needed for the same Δp.");
}
// collision types
{
  let s = defs + title("Collisions: momentum is always conserved; kinetic energy is not");
  const cart = (x, y, c, l) => rect(x, y, 56, 36, { fill: c, stroke: "#555", rx: 4 }) + circle(x + 12, y + 40, 6, { fill: "#555" }) + circle(x + 44, y + 40, 6, { fill: "#555" }) + text(x + 28, y + 24, l, { size: 12, weight: "bold" });
  s += text(190, 50, "ELASTIC", { size: 13, weight: "bold", fill: GREEN }) + text(190, 70, "bounce apart", { size: 11.5, fill: C.muted });
  s += cart(40, 100, "#f4b0a0", "m₁") + A(60, 92, 110, 92, RED, 2) + cart(160, 100, "#a9c8f0", "m₂") + text(190, 160, "before", { size: 11, fill: C.muted }) + cart(40, 180, "#f4b0a0", "m₁") + A(60, 172, 20, 172, RED, 2) + cart(160, 180, "#a9c8f0", "m₂") + A(200, 172, 250, 172, RED, 2) + text(190, 240, "after", { size: 11, fill: C.muted });
  s += text(190, 262, "p conserved ✓    KE conserved ✓", { size: 12, weight: "bold", fill: GREEN });
  s += line(380, 44, 380, 270, { stroke: C.line, w: 1.5 });
  s += text(570, 50, "PERFECTLY INELASTIC", { size: 13, weight: "bold", fill: RED }) + text(570, 70, "stick together", { size: 11.5, fill: C.muted });
  s += cart(420, 100, "#f4b0a0", "m₁") + A(440, 92, 490, 92, RED, 2) + cart(540, 100, "#a9c8f0", "m₂") + text(570, 160, "before", { size: 11, fill: C.muted }) + cart(480, 180, "#f4b0a0", "m₁") + cart(536, 180, "#a9c8f0", "m₂") + A(500, 172, 560, 172, RED, 2) + text(570, 240, "after: one mass (m₁ + m₂)", { size: 11, fill: C.muted });
  s += text(570, 262, "p conserved ✓    KE lost ✗ (heat, sound, deformation)", { size: 12, weight: "bold", fill: RED });
  fig(FIGS, "collision-types", 760, 282, s, "Before and after diagrams for an elastic collision and a perfectly inelastic collision", "In every isolated collision total momentum is conserved. Only in an elastic collision is kinetic energy also conserved; when objects stick together the most kinetic energy is lost.");
}
// torque
{
  let s = defs + title("Torque depends on force, lever arm, and angle: τ = r F sinθ");
  s += `<rect x="120" y="100" width="340" height="14" fill="#d9c7a8" stroke="#6b5a3a"/>` + circle(130, 107, 8, { fill: "#555" }) + text(130, 134, "axis", { size: 11 });
  s += A(430, 106, 430, 40, RED, 3) + text(446, 46, "F ⟂ lever: max τ", { size: 12, weight: "bold", fill: RED, anchor: "start" });
  s += A(300, 106, 340, 50, BLUE, 3) + text(336, 44, "at an angle: only F sinθ counts", { size: 11.5, weight: "bold", fill: BLUE, anchor: "end" });
  s += A(250, 106, 320, 106, GREEN, 3) + text(285, 98, "", {}) + text(285, 140, "F along the arm: τ = 0", { size: 11.5, weight: "bold", fill: GREEN });
  s += line(130, 168, 430, 168, { w: 1.5, marker: "ah" }) + line(430, 168, 130, 168, { w: 1.5, marker: "ah" }) + text(280, 188, "r (distance from axis to force)", { size: 12, weight: "bold" });
  s += rect(500, 70, 240, 130, NOTE) + text(620, 94, "More torque with:", { size: 13, weight: "bold" }) + text(620, 120, "↑ force F\n↑ distance r from the axis\nforce ⟂ to the lever (θ = 90°)", { size: 12 }) + text(620, 184, "pushing at the hinge: r = 0 → τ = 0", { size: 11.5, fill: C.muted });
  fig(FIGS, "torque-lever", 760, 214, s, "Lever arm with forces applied perpendicular, at an angle, and along the arm", "Torque grows with force and distance from the axis, and only the component of force perpendicular to the lever arm produces it. A force along the arm gives zero torque.");
}
// moment of inertia
{
  let s = defs + title("Moment of inertia depends on WHERE the mass is: farther from the axis → larger I");
  const sh = (cx, lab, f, I) => f(cx) + text(cx, 192, lab, { size: 12.5, weight: "bold" }) + text(cx, 212, I, { size: 12.5, fill: C.muted });
  s += sh(130, "hoop (all mass at R)", (cx) => circle(cx, 110, 52, { stroke: "#6b5a3a", w: 9 }) + circle(cx, 110, 3, { fill: C.ink }), "I = MR²   (largest)");
  s += sh(380, "solid disk", (cx) => circle(cx, 110, 52, { fill: "#d9c7a8", stroke: "#6b5a3a", w: 3 }) + circle(cx, 110, 3, { fill: C.ink }), "I = ½MR²");
  s += sh(630, "solid sphere", (cx) => circle(cx, 110, 52, { fill: "#c8d8e8", stroke: "#456", w: 3 }) + circle(cx, 110, 3, { fill: C.ink }), "I = ²⁄₅MR²   (smallest)");
  s += text(380, 252, "Same M and R: the hoop is hardest to spin up, the sphere is easiest.", { size: 12.5, weight: "bold" }) + text(380, 274, "I = Σ m r² : the r² makes distance count much more than mass.", { size: 12, fill: C.muted });
  fig(FIGS, "inertia-shapes", 760, 292, s, "Hoop, solid disk and solid sphere with their moments of inertia", "For equal mass and radius, moment of inertia is largest when the mass is farthest from the axis (a hoop) and smallest when it is concentrated near the axis (a sphere).");
}
// rolling
{
  let s = defs + title("Rolling without slipping: the contact point is momentarily at rest");
  s += line(60, 228, 700, 228, { w: 3, stroke: "#777" }) + circle(380, 140, 88, { fill: "#f4ead6", stroke: "#6b5a3a", w: 4 }) + circle(380, 140, 4, { fill: C.ink });
  s += A(380, 52, 470, 52, RED, 3) + text(380, 40, "top: 2v_cm", { size: 12.5, weight: "bold", fill: RED }) + circle(380, 52, 4, { fill: C.ink });
  s += A(380, 140, 440, 140, BLUE, 3) + text(452, 144, "center: v_cm", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" });
  s += circle(380, 228, 6, { fill: GREEN }) + text(380, 254, "bottom (contact): v = 0", { size: 12.5, weight: "bold", fill: GREEN });
  s += rect(570, 70, 170, 110, NOTE) + text(655, 94, "v_cm = Rω", { size: 15, weight: "bold" }) + text(655, 120, "a_cm = Rα", { size: 15, weight: "bold" }) + text(655, 150, "static friction (no slipping)\nprovides the torque", { size: 11.5 });
  s += path("M 320 96 A 70 70 0 0 1 440 96", { stroke: GOLD, w: 2.5 }) + text(380, 84, "ω", { size: 15, weight: "bold", fill: GOLD });
  fig(FIGS, "rolling-velocities", 760, 274, s, "Wheel rolling without slipping showing velocities at the top, center and contact point", "In rolling without slipping the center moves at v = Rω, the top point moves at twice that speed, and the contact point is instantaneously at rest.");
}
// skater
{
  let s = defs + title("Conservation of angular momentum: change I, and ω changes to compensate");
  const sk = (cx, arms, lab, om) => circle(cx, 70, 10, { fill: "#f4d8c0", stroke: "#555" }) + line(cx, 80, cx, 140, { w: 6, stroke: "#4a6ea8" }) + line(cx, 94, cx - arms, 94, { w: 4, stroke: "#f4d8c0" }) + line(cx, 94, cx + arms, 94, { w: 4, stroke: "#f4d8c0" }) + circle(cx - arms, 94, 5, { fill: GOLD }) + circle(cx + arms, 94, 5, { fill: GOLD }) + `<ellipse cx="${cx}" cy="152" rx="30" ry="8" fill="none" stroke="#999"/>` + text(cx, 186, lab, { size: 12.5, weight: "bold" }) + text(cx, 206, om, { size: 12, fill: C.muted });
  s += sk(180, 56, "arms OUT", "large I → small ω") + arrow(260, 110, 330, 110, { w: 3 }) + text(295, 100, "pull in", { size: 12 }) + sk(440, 18, "arms IN", "small I → large ω");
  s += rect(520, 56, 220, 150, NOTE) + text(630, 80, "L = Iω = constant", { size: 14, weight: "bold" }) + text(630, 108, "(no net external torque)", { size: 11.5, fill: C.muted }) + text(630, 140, "I₁ω₁ = I₂ω₂", { size: 14, weight: "bold" }) + text(630, 172, "Kinetic energy still changes:\nthe skater does work pulling in.", { size: 11.5 });
  fig(FIGS, "skater-angular", 760, 232, s, "Skater spinning slowly with arms out and quickly with arms pulled in", "With no external torque, Iω stays constant. Pulling mass closer to the axis lowers I, so the spin rate ω must rise.");
}
// SHM graphs
{
  let s = defs + title("Simple harmonic motion: x, v, and a are shifted copies of one wave");
  const x0 = 70, w = 520;
  const g = (y0, yl, f, col) => axes(x0, y0, w, 56, "", yl) + line(x0, y0 - 28, x0 + w, y0 - 28, { stroke: "#ddd", w: 1 }) + (() => { let d = ""; for (let i = 0; i <= 100; i++) { const t = i / 100; d += (i ? " L " : "M ") + (x0 + t * w) + " " + (y0 - 28 - f(t) * 26); } return path(d, { stroke: col, w: 3.5 }); })();
  s += g(86, "x", (t) => Math.cos(t * 4 * Math.PI), RED) + g(176, "v", (t) => -Math.sin(t * 4 * Math.PI), BLUE) + g(266, "a", (t) => -Math.cos(t * 4 * Math.PI), GREEN);
  s += text(x0 + w / 2, 304, "time (one period T = 2π/ω shown twice)", { size: 11.5, fill: C.muted });
  s += rect(620, 46, 130, 230, NOTE) + text(685, 70, "At x = ±A:", { size: 12, weight: "bold" }) + text(685, 90, "v = 0\n|a| max", { size: 11.5 }) + text(685, 140, "At x = 0:", { size: 12, weight: "bold" }) + text(685, 160, "|v| max\na = 0", { size: 11.5 }) + text(685, 220, "a always points\ntoward x = 0\n(a = −ω²x)", { size: 11.5, fill: GREEN, weight: "bold" });
  fig(FIGS, "shm-graphs", 760, 318, s, "Position, velocity and acceleration versus time for simple harmonic motion", "Velocity leads position by a quarter cycle, and acceleration is always opposite to position. Speed is largest at the center and acceleration largest at the extremes.");
}
// SHM energy
{
  let s = defs + title("Energy in SHM: potential and kinetic trade places, the total is constant");
  const x0 = 380, y0 = 240, w = 300, h = 170;
  s += axes(x0 - w / 2, y0, w, h, "position x", "energy") + line(x0 - w / 2, y0 - 140, x0 + w / 2, y0 - 140, { stroke: GREEN, w: 3, dash: "6 4" }) + text(x0 + w / 2 - 6, y0 - 148, "E_total = ½kA²", { size: 12, weight: "bold", fill: GREEN, anchor: "end" });
  let d1 = "", d2 = ""; for (let i = 0; i <= 60; i++) { const t = i / 60, x = (t - 0.5) * 2; d1 += (i ? " L " : "M ") + (x0 - w / 2 + t * w) + " " + (y0 - x * x * 140); d2 += (i ? " L " : "M ") + (x0 - w / 2 + t * w) + " " + (y0 - (1 - x * x) * 140); }
  s += path(d1, { stroke: BLUE, w: 3.5 }) + path(d2, { stroke: RED, w: 3.5 }) + text(x0 - w / 2 + 40, y0 - 120, "PE = ½kx²", { size: 12, weight: "bold", fill: BLUE }) + text(x0, y0 - 40, "KE", { size: 12, weight: "bold", fill: RED });
  s += text(x0 - w / 2, y0 + 16, "−A", { size: 11 }) + text(x0, y0 + 16, "0", { size: 11 }) + text(x0 + w / 2, y0 + 16, "+A", { size: 11 });
  s += rect(40, 60, 170, 130, NOTE) + text(125, 84, "At ±A: all PE", { size: 12.5, weight: "bold", fill: BLUE }) + text(125, 108, "At 0: all KE", { size: 12.5, weight: "bold", fill: RED }) + text(125, 140, "KE + PE = ½kA²\nat every position", { size: 12 });
  fig(FIGS, "shm-energy", 760, 292, s, "Graph of kinetic, potential and total energy versus position in simple harmonic motion", "Potential energy forms a parabola, kinetic energy is its mirror image, and their sum stays at ½kA². At the turning points the energy is all potential; at the center it is all kinetic.");
}
// hydraulic
{
  let s = defs + title("Pascal's principle: pressure is transmitted equally; force is multiplied");
  s += rect(120, 150, 400, 50, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 4 }) + rect(150, 100, 40, 52, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 0 }) + rect(400, 70, 100, 82, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 0 });
  s += rect(150, 90, 40, 12, { fill: "#888", stroke: "#444", rx: 1 }) + rect(400, 60, 100, 12, { fill: "#888", stroke: "#444", rx: 1 });
  s += A(170, 52, 170, 88, RED, 3) + text(170, 44, "F₁ (small)", { size: 12, weight: "bold", fill: RED }) + text(170, 222, "A₁ (small)", { size: 12 }) + A(450, 128, 450, 80, BLUE, 3).replace("", "") + text(450, 52, "F₂ (large)", { size: 12, weight: "bold", fill: BLUE }) + A(450, 100, 450, 66, BLUE, 3) + text(450, 222, "A₂ (large)", { size: 12 });
  s += text(310, 190, "same P everywhere in the fluid", { size: 12, weight: "bold" });
  s += rect(550, 56, 190, 150, NOTE) + text(645, 80, "P₁ = P₂", { size: 14, weight: "bold" }) + text(645, 106, "F₁/A₁ = F₂/A₂", { size: 13, weight: "bold" }) + text(645, 140, "Bigger area → bigger force,\nbut the small piston moves\nfarther (W₁ = W₂).", { size: 11.5 });
  fig(FIGS, "hydraulic-lift", 760, 244, s, "Hydraulic lift with a small piston and a large piston sharing the same fluid pressure", "The same pressure acts on both pistons, so the larger piston feels a proportionally larger force. Energy is conserved because the small piston travels proportionally farther.");
}
// buoyancy
{
  let s = defs + title("Buoyancy: the fluid pushes up with the weight of the fluid displaced");
  s += rect(60, 60, 280, 170, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 4 }) + rect(150, 100, 70, 70, { fill: "#8a6d3b", stroke: "#4a3a1a", rx: 3 }) + A(185, 135, 185, 70, BLUE, 3) + text(200, 80, "F_b = ρ_fluid V_disp g", { size: 11.5, weight: "bold", fill: BLUE, anchor: "start" }) + A(185, 135, 185, 205, RED, 3) + text(200, 200, "mg", { size: 12.5, weight: "bold", fill: RED, anchor: "start" });
  s += text(200, 250, "F_b > mg: rises   ·   F_b < mg: sinks   ·   equal: floats/hovers", { size: 11.5, weight: "bold" });
  s += rect(380, 60, 360, 170, NOTE) + text(560, 84, "Archimedes' principle", { size: 13, weight: "bold" }) + text(560, 112, "F_b depends on the FLUID's density and the\nvolume of fluid displaced, not on the\nobject's own weight.", { size: 12 }) + text(560, 168, "Floating object: displaces fluid whose weight\nequals the object's weight.", { size: 12 }) + text(560, 212, "Fully submerged: V_disp = V_object", { size: 11.5, fill: C.muted });
  fig(FIGS, "buoyancy", 760, 270, s, "Submerged block with buoyant force upward and weight downward", "Buoyant force equals the weight of fluid displaced. Compare it with the object's weight to predict whether it rises, sinks, or floats.");
}
// bernoulli pipe
{
  let s = defs + title("Fluid flow: narrow section → faster speed → lower pressure");
  s += path("M 60 100 L 260 100 L 360 130 L 560 130 L 700 100", { stroke: "#4a90c2", w: 4 }).replace("", "") + path("M 60 220 L 260 220 L 360 190 L 560 190 L 700 220", { stroke: "#4a90c2", w: 4 }) + path("M 60 100 L 60 220", { stroke: "#4a90c2", w: 4 }).replace("", "");
  s += `<path d="M 60 100 L 260 100 L 360 130 L 560 130 L 700 100 L 700 220 L 560 190 L 360 190 L 260 220 L 60 220 Z" fill="#cfe6f7" opacity=".6"/>`;
  s += A(90, 160, 200, 160, BLUE, 2.5) + text(145, 148, "v₁ (slow)", { size: 12, weight: "bold", fill: BLUE }) + A(400, 160, 540, 160, RED, 4) + text(470, 148, "v₂ (fast)", { size: 12, weight: "bold", fill: RED });
  s += text(160, 90, "wide: A₁", { size: 12, weight: "bold" }) + text(460, 120, "narrow: A₂", { size: 12, weight: "bold" }) + text(160, 246, "higher P", { size: 12.5, weight: "bold", fill: GREEN }) + text(460, 212, "lower P", { size: 12.5, weight: "bold", fill: GREEN });
  s += rect(60, 262, 640, 50, NOTE) + text(380, 284, "Continuity: A₁v₁ = A₂v₂     ·     Bernoulli: P + ½ρv² + ρgh = constant", { size: 13, weight: "bold" }) + text(380, 304, "same flow rate, smaller area → faster; faster fluid → lower pressure (at equal height)", { size: 11.5 });
  fig(FIGS, "pipe-flow", 760, 328, s, "Pipe narrowing with fluid speeding up and pressure dropping", "In steady flow the volume flow rate A·v is constant, so fluid speeds up in a narrow section. Bernoulli's equation then says pressure is lower where the fluid is faster (at equal height).");
}
