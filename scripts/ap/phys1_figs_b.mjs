// Figures for the AP Physics 1 material added in Unit 2 (2.10 Circular Motion, 2.11 Universal Gravitation and Orbits)
// and two additions (apparent weight in s26, general gravitational PE in s33). Drawn to scale from the equations.
// Colors: forces red, velocity blue, acceleration green (kept off the free-body diagrams), net acceleration orange.
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, NOTE, axes, fig } from "./lib2.mjs";
import { esc } from "./lib.mjs";
export const FIGS = {};
const f1 = (n) => (Math.round(n * 10) / 10).toString();
const ORANGE = C.orange;
const A = (x1, y1, x2, y2, c = RED, w = 3) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === ORANGE ? "aho" : "ah" });
const rad = (d) => (d * Math.PI) / 180;
const dot = (x, y, r = 7) => circle(x, y, r, { fill: C.ink });
// text with subscripts written as F_{N}; multi-line with \n
const T = (x, y, s, o = {}) => {
  const { size = 14, anchor = "middle", weight = "normal", fill = C.ink, italic = false, lh = 1.3 } = o;
  const sub = Math.max(11, size * 0.75), dyS = size * 0.3;
  let out = "";
  String(s).split("\n").forEach((ln, i) => {
    let first = true, shift = 0;
    const parts = ln === "" ? ["\u00a0"] : ln.split(/(_\{[^}]*\})/).filter((p) => p !== "");
    parts.forEach((p) => {
      const isSub = p.startsWith("_{");
      const body = isSub ? p.slice(2, -1) : p;
      let dy = 0;
      if (first) dy = i ? size * lh : 0;
      if (isSub) { dy += dyS; shift += dyS; } else if (shift) { dy -= shift; shift = 0; }
      out += `<tspan${first ? ` x="${f1(x)}"` : ""}${dy ? ` dy="${f1(dy)}"` : ""}${isSub ? ` font-size="${f1(sub)}"` : ""}>${esc(body)}</tspan>`;
      first = false;
    });
    if (shift) out += `<tspan dy="${f1(-shift)}"></tspan>`;
  });
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic ? ' font-style="italic"' : ""}>${out}</text>`;
};
// arc of a circle (center cx,cy; radius r) between math angles a1 -> a2 (degrees, counterclockwise on screen when a2 > a1)
const arcPath = (cx, cy, r, a1, a2, o = {}) => {
  const p = (a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
  const [x1, y1] = p(a1), [x2, y2] = p(a2);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 0 : 1;
  return path(`M ${f1(x1)} ${f1(y1)} A ${r} ${r} 0 ${large} ${sweep} ${f1(x2)} ${f1(y2)}`, o);
};
const poly = (pts, o = {}) => `<polygon points="${pts.map(([x, y]) => f1(x) + "," + f1(y)).join(" ")}" fill="${o.fill || "none"}" stroke="${o.stroke || "none"}" stroke-width="${o.w || 1.5}"/>`;
const title = (t, size = 16) => T(380, 22, t, { size, weight: "bold" });
const note = (x, y, w, h, head, body, size = 12.5) => rect(x, y, w, h, NOTE) + T(x + w / 2, y + 26, head, { size: 13.5, weight: "bold" }) + T(x + w / 2, y + 52, body, { size });

// 1. uniform circular motion: v tangent, a_c toward the center (s210)
{
  let s = defs + title("Uniform circular motion: v is tangent, a points to the center");
  const cx = 230, cy = 195, R = 130, LV = 85, LA = 62;
  s += circle(cx, cy, R, { stroke: "#9aa0a6", w: 2 });
  s += arcPath(cx, cy, R + 18, 18, 62, { stroke: C.muted, w: 2, marker: "ah" }) + T(cx + (R + 34) * Math.cos(rad(40)), cy - (R + 34) * Math.sin(rad(40)), "motion", { size: 12, fill: C.muted, anchor: "start" });
  s += line(cx, cy, cx + R, cy, { stroke: C.ink, w: 1.5, dash: "5 4" }) + T(cx + R / 2 + 10, cy - 9, "r", { size: 15, weight: "bold", italic: true });
  s += dot(cx, cy, 4) + T(cx - 4, cy + 22, "center", { size: 12, fill: C.muted });
  [90, 180, 270].forEach((phi) => {
    const px = cx + R * Math.cos(rad(phi)), py = cy - R * Math.sin(rad(phi));
    const vx = -Math.sin(rad(phi)), vy = -Math.cos(rad(phi)); // CCW tangent in screen coordinates
    const ax = (cx - px) / R, ay = (cy - py) / R;
    s += A(px, py, px + vx * LV, py + vy * LV, BLUE) + A(px, py, px + ax * LA, py + ay * LA, GREEN) + dot(px, py, 8);
  });
  // labels (top, left, bottom)
  s += T(cx - LV - 8, cy - R + 5, "v", { size: 15, weight: "bold", fill: BLUE, anchor: "end", italic: true }) + T(cx + 10, cy - R + 40, "a_{c}", { size: 15, weight: "bold", fill: GREEN, anchor: "start" });
  s += T(cx - R - 12, cy + LV, "v", { size: 15, weight: "bold", fill: BLUE, anchor: "end", italic: true }) + T(cx - R + 32, cy - 10, "a_{c}", { size: 15, weight: "bold", fill: GREEN });
  s += T(cx + LV + 10, cy + R + 5, "v", { size: 15, weight: "bold", fill: BLUE, anchor: "start", italic: true }) + T(cx + 10, cy + R - 32, "a_{c}", { size: 15, weight: "bold", fill: GREEN, anchor: "start" });
  s += note(440, 72, 300, 214, "Constant speed, changing direction", "velocity v: tangent to the circle,\nsame length everywhere\n\nacceleration a_{c} = v²/r:\nalways toward the center\n\nv and a_{c} are perpendicular\nat every instant", 13);
  fig(FIGS, "p1b-ucm-vectors", 760, 350, s, "Top view of an object moving counterclockwise around a circle at constant speed, with tangent velocity arrows and inward acceleration arrows at three positions",
    "In uniform circular motion the speed never changes, but the direction does, so the object accelerates the whole time. At every point the velocity is tangent to the circle and the acceleration, a<sub>c</sub> = v²/r, points to the center, perpendicular to the velocity.");
}

// 2. FBDs at the bottom and top of a vertical loop (s210)
{
  let s = defs + title("Vertical loop: free-body diagrams at the bottom and the top");
  // bottom FBD
  const bx = 120, by = 200;
  s += T(bx + 20, 58, "At the BOTTOM", { size: 14, weight: "bold" }) + T(bx + 20, 76, "center is above the rider", { size: 12, fill: C.muted });
  s += A(bx, by, bx, by - 100) + A(bx, by, bx, by + 58) + dot(bx, by);
  s += T(bx - 10, by - 88, "F_{N}", { size: 15, weight: "bold", fill: RED, anchor: "end" }) + T(bx - 10, by + 58, "F_{g} = mg", { size: 15, weight: "bold", fill: RED, anchor: "end" });
  s += A(bx + 70, by, bx + 70, by - 55, GREEN, 2.5) + T(bx + 80, by - 30, "a_{c}", { size: 15, weight: "bold", fill: GREEN, anchor: "start" }) + T(bx + 80, by - 12, "(up, toward\ncenter)", { size: 11.5, fill: GREEN, anchor: "start" });
  s += T(bx + 20, 300, "F_{N} − mg = mv²/r", { size: 15, weight: "bold" }) + T(bx + 20, 322, "F_{N} > mg: the rider feels heavy", { size: 12, fill: C.muted });
  // loop sketch
  const lx = 385, ly = 190, LR = 80;
  s += circle(lx, ly, LR, { stroke: "#8a8a8a", w: 5 }) + dot(lx, ly, 4) + T(lx + 8, ly + 5, "center", { size: 12, fill: C.muted, anchor: "start" });
  s += circle(lx, ly + LR - 11, 8, { fill: C.ink }) + circle(lx, ly - LR + 11, 8, { fill: C.ink });
  s += A(lx, ly + LR - 21, lx, ly + LR - 50, GREEN, 2) + A(lx, ly - LR + 21, lx, ly - LR + 50, GREEN, 2);
  s += T(lx, ly + LR + 22, "bottom", { size: 12.5, weight: "bold" }) + T(lx, ly - LR - 12, "top", { size: 12.5, weight: "bold" });
  s += arcPath(lx, ly, LR + 16, 115, 155, { stroke: C.muted, w: 2, marker: "ah" }) + T(lx - LR - 24, ly - 52, "motion", { size: 12, fill: C.muted, anchor: "end" });
  // top FBD
  const tx = 625, ty = 130;
  s += T(tx + 20, 58, "At the TOP (inside the loop)", { size: 14, weight: "bold" }) + T(tx + 20, 76, "center is below the rider", { size: 12, fill: C.muted });
  s += A(tx - 6, ty, tx - 6, ty + 80) + A(tx + 6, ty, tx + 6, ty + 58) + dot(tx, ty);
  s += T(tx - 16, ty + 80, "F_{N}", { size: 15, weight: "bold", fill: RED, anchor: "end" }) + T(tx - 16, ty + 100, "(track pushes down)", { size: 11.5, fill: RED, anchor: "end" }) + T(tx + 16, ty + 58, "F_{g} = mg", { size: 15, weight: "bold", fill: RED, anchor: "start" });
  s += A(tx + 95, ty - 20, tx + 95, ty + 35, GREEN, 2.5) + T(tx + 103, ty + 5, "a_{c}", { size: 15, weight: "bold", fill: GREEN, anchor: "start" });
  s += T(tx + 20, 300, "F_{N} + mg = mv²/r", { size: 15, weight: "bold" }) + T(tx + 20, 322, "both forces point toward the center", { size: 12, fill: C.muted });
  s += rect(110, 344, 540, 38, NOTE) + T(380, 368, "Only real forces go on the FBD. a_{c} (green) is drawn beside it, not on it.", { size: 12.5, weight: "bold" });
  fig(FIGS, "p1b-loop-fbds", 760, 394, s, "Free-body diagrams of a rider at the bottom and at the top of a vertical loop, with the centripetal acceleration drawn separately",
    "At the bottom the center is above the rider, so the normal force must exceed the weight to make the net force point up; at the top, inside the loop, the track and gravity both push toward the center. In both cases there is no separate centripetal-force arrow: the real forces add up to mv²/r toward the center.");
}

// 3. banked curve (rear view) and conical pendulum (s210)
{
  let s = defs + title("Components do the work: banked curve and conical pendulum");
  const th = 25, c = Math.cos(rad(th)), sn = Math.sin(rad(th));
  // banked road (center of the curve to the left, so the outside edge is higher)
  const x0 = 40, x1 = 330, yb = 300, ytop = yb - (x1 - x0) * Math.tan(rad(th));
  s += T(185, 54, "Banked curve (rear view, no friction)", { size: 13.5, weight: "bold" });
  s += poly([[x0, yb], [x1, yb], [x1, ytop]], { fill: "#ece8dc", stroke: "#8a8070", w: 2 });
  s += line(x0, yb, x1, ytop, { stroke: "#555", w: 4 });
  const sp = 0.55, px = x0 + sp * (x1 - x0), py = yb - sp * (yb - ytop);
  const nx = -sn, ny = -c; // outward normal of the road surface (screen coordinates)
  const ccx = px + nx * 22, ccy = py + ny * 22;
  s += `<g transform="translate(${f1(ccx)} ${f1(ccy)}) rotate(${-th})">${rect(-46, -20, 92, 36, { fill: "#c8d8e8", stroke: "#4a5a70", rx: 7, w: 2 })}${circle(-28, 18, 8, { fill: "#444" })}${circle(28, 18, 8, { fill: "#444" })}</g>`;
  const LN = 100;
  // theta between F_N and the vertical
  s += line(ccx, ccy, ccx, ccy - LN - 6, { stroke: "#888", w: 1.5, dash: "4 4" });
  s += arcPath(ccx, ccy, 46, 90, 90 + th, { stroke: C.ink, w: 1.5 }) + T(ccx - 52 * Math.sin(rad(th / 2)) + 1, ccy - 52 * Math.cos(rad(th / 2)) - 3, "θ", { size: 14, weight: "bold" });
  s += A(ccx, ccy, ccx + nx * LN, ccy + ny * LN) + A(ccx, ccy, ccx, ccy + LN * c) + dot(ccx, ccy, 5);
  s += T(ccx + nx * LN - 8, ccy + ny * LN + 6, "F_{N}", { size: 15, weight: "bold", fill: RED, anchor: "end" }) + T(ccx + 10, ccy + LN * c - 4, "F_{g} = mg", { size: 14, weight: "bold", fill: RED, anchor: "start" });
  s += arcPath(x0, yb, 52, 0, th, { stroke: C.ink, w: 1.5 }) + T(x0 + 64, yb - 10, "θ", { size: 14, weight: "bold" });
  s += A(220, 324, 60, 324, C.ink, 2) + T(140, 342, "toward the center of the curve", { size: 12, fill: C.muted });
  // component sketch (separate from the FBD)
  const ox = 455, oy = 262;
  s += T(ox - 15, 128, "components of F_{N}", { size: 12.5, weight: "bold" });
  s += line(ox, oy, ox + nx * LN, oy + ny * LN, { stroke: RED, w: 2, dash: "6 4" }) + line(ox + nx * LN, oy, ox + nx * LN, oy + ny * LN, { stroke: "#bbb", w: 1, dash: "3 3" }) + line(ox, oy + ny * LN, ox + nx * LN, oy + ny * LN, { stroke: "#bbb", w: 1, dash: "3 3" });
  s += A(ox, oy, ox, oy + ny * LN, RED, 2.2) + A(ox, oy, ox + nx * LN, oy, RED, 2.2);
  s += T(ox + 8, oy - 50, "F_{N} cosθ", { size: 13, weight: "bold", fill: RED, anchor: "start" }) + T(ox + 8, oy - 33, "balances mg", { size: 11.5, fill: C.muted, anchor: "start" });
  s += T(ox - 22, oy + 22, "F_{N} sinθ", { size: 13, weight: "bold", fill: RED }) + T(ox - 22, oy + 38, "toward center", { size: 11.5, fill: C.muted });
  s += T(250, 372, "F_{N} cosθ = mg  ·  F_{N} sinθ = mv²/r", { size: 14, weight: "bold" });
  // conical pendulum
  s += line(522, 40, 522, 392, { stroke: C.line, w: 1.5 });
  const th2 = 35, L = 170, pvx = 625, pvy = 76;
  const bxp = pvx + L * Math.sin(rad(th2)), byp = pvy + L * Math.cos(rad(th2)), r = L * Math.sin(rad(th2));
  s += T(640, 54, "Conical pendulum", { size: 13.5, weight: "bold" });
  s += line(590, pvy, 660, pvy, { stroke: "#777", w: 5 });
  s += `<ellipse cx="${f1(pvx)}" cy="${f1(byp)}" rx="${f1(r)}" ry="24" fill="none" stroke="#9aa0a6" stroke-width="2" stroke-dasharray="6 5"/>`;
  s += line(pvx, pvy, pvx, byp, { stroke: "#888", w: 1.5, dash: "4 4" }) + dot(pvx, byp, 4) + T(pvx - 4, byp + 15, "center", { size: 11, fill: C.muted, anchor: "end" });
  s += line(pvx, byp, bxp, byp, { stroke: C.ink, w: 1.5 }) + T(bxp - 16, byp - 8, "r = L sinθ", { size: 12.5, weight: "bold", anchor: "end" });
  s += line(pvx, pvy, bxp, byp, { stroke: "#555", w: 1.5 });
  s += arcPath(pvx, pvy, 38, -90, -90 + th2, { stroke: C.ink, w: 1.5 }) + T(pvx + 50 * Math.sin(rad(th2 / 2)), pvy + 50 * Math.cos(rad(th2 / 2)) + 4, "θ", { size: 14, weight: "bold" });
  s += T(pvx + L * 0.35 * Math.sin(rad(th2)) + 12, pvy + L * 0.35 * Math.cos(rad(th2)), "L", { size: 14, weight: "bold", italic: true, anchor: "start" });
  const LT = 100;
  s += A(bxp, byp, bxp - LT * Math.sin(rad(th2)), byp - LT * Math.cos(rad(th2))) + A(bxp, byp, bxp, byp + LT * Math.cos(rad(th2))) + circle(bxp, byp, 9, { fill: "#c8d8e8", stroke: C.ink, w: 2 }) + dot(bxp, byp, 3);
  s += T(bxp - 22, byp - 62, "T", { size: 15, weight: "bold", fill: RED, anchor: "start", italic: true }) + T(bxp - 10, byp + LT * Math.cos(rad(th2)) - 2, "F_{g} = mg", { size: 14, weight: "bold", fill: RED, anchor: "end" });
  s += A(670, 330, 610, 330, GREEN, 2.5) + T(640, 350, "a_{c}: horizontal, toward center", { size: 11.5, weight: "bold", fill: GREEN });
  s += T(640, 376, "T cosθ = mg  ·  T sinθ = mv²/r", { size: 14, weight: "bold" });
  fig(FIGS, "p1b-banked-conical", 760, 392, s, "Rear view of a car on a frictionless banked curve with its normal force split into components, and a conical pendulum with tension and weight",
    "On a frictionless banked curve the normal force is perpendicular to the road, so it tilts toward the center: its vertical part F<sub>N</sub> cosθ balances mg and its horizontal part F<sub>N</sub> sinθ is the whole net force. A conical pendulum works the same way with tension; there θ is measured from the vertical and the circle's radius is r = L sinθ, not the string length.");
}

// 4. tangential + centripetal acceleration (s210, no numbers: Worked Example 15 follows)
{
  let s = defs + title("Changing speed on a curve: a = a_{c} + a_{t} (added as vectors)");
  const panels = [["constant speed", "a points straight to the center", 0], ["speeding up", "a tilts forward of the center line", -1], ["braking", "a tilts behind the center line", 1]];
  panels.forEach(([head, sub, dir], i) => {
    const pc = 140 + i * 245, cy = 200, R = 90, car = [pc + 50, cy], ccx = car[0] - R, LA = 58, LT = 36;
    if (i) s += line(pc - 122, 44, pc - 122, 296, { stroke: C.line, w: 1.5 });
    s += T(pc, 60, head, { size: 14, weight: "bold" }) + T(pc, 78, sub, { size: 12, fill: C.muted });
    s += circle(ccx, cy, R, { stroke: "#9aa0a6", w: 2 }) + arcPath(ccx, cy, R + 14, 30, 70, { stroke: C.muted, w: 1.8, marker: "ah" });
    s += dot(ccx, cy, 4) + T(ccx, dir > 0 ? cy - 12 : cy + 20, "center", { size: 11, fill: C.muted });
    const tipx = car[0] - LA;
    s += A(car[0] + 22, cy, car[0] + 22, cy - 56, BLUE, 2.5) + T(car[0] + 22, cy - 62, "v", { size: 14, weight: "bold", italic: true, fill: BLUE });
    s += A(car[0], cy, tipx, cy, GREEN, 2.5) + T((car[0] + tipx) / 2, dir > 0 ? cy - 10 : cy + 20, "a_{c}", { size: 14, weight: "bold", fill: GREEN });
    if (dir) {
      const ey = cy + dir * LT;
      s += A(car[0], cy, tipx, ey, ORANGE, 3.2) + T((car[0] + tipx) / 2 + 8, (cy + ey) / 2 + (dir < 0 ? -10 : 24), "a", { size: 15, weight: "bold", italic: true, fill: ORANGE });
      s += A(tipx, cy, tipx, ey, GREEN, 2.5) + T(tipx - 9, (cy + ey) / 2 + 6, "a_{t}", { size: 14, weight: "bold", fill: GREEN, anchor: "end" });
    } else s += T(car[0] - LA / 2, cy - 12, "a = a_{c}", { size: 13, weight: "bold", fill: ORANGE });
    s += circle(car[0], cy, 8, { fill: C.ink });
  });
  s += rect(70, 302, 620, 50, NOTE) + T(380, 322, "a_{c} = v²/r always points to the center; a_{t} points along v when speeding up and against v when braking.", { size: 12.5, weight: "bold" }) + T(380, 341, "They are perpendicular, so a = √(a_{c}² + a_{t}²).", { size: 12.5 });
  fig(FIGS, "p1b-tangential-accel", 760, 364, s, "A car moving counterclockwise on a circle at one instant: at constant speed, speeding up, and braking, with centripetal, tangential and net acceleration arrows",
    "When the speed changes on a curve, a tangential acceleration a<sub>t</sub> joins the centripetal acceleration a<sub>c</sub>. Their vector sum, the net acceleration, tilts forward of the line to the center when the car speeds up and behind it when the car brakes.");
}

// 5. gravitational force pair (s211)
{
  let s = defs + title("Universal gravitation: an equal and opposite pair along the line of centers");
  const y = 150, x1 = 170, x2 = 600, r1 = 62, r2 = 28;
  s += circle(x1, y, r1, { fill: "#cfe0f3", stroke: "#3c5a80", w: 2 }) + circle(x2, y, r2, { fill: "#f3dcc8", stroke: "#8a5a30", w: 2 });
  s += line(x1, y, x2, y, { stroke: "#bbb", w: 1, dash: "3 4" });
  s += A(x1, y, x1 + 92, y) + A(x2, y, x2 - 92, y) + dot(x1, y, 4) + dot(x2, y, 4);
  s += T(x1, y - r1 - 12, "m_{1}", { size: 16, weight: "bold" }) + T(x2, y - r2 - 12, "m_{2}", { size: 16, weight: "bold" });
  s += T(x1 + 128, y - 16, "F on m_{1} by m_{2}", { size: 13, weight: "bold", fill: RED }) + T(x2 - 128, y - 16, "F on m_{2} by m_{1}", { size: 13, weight: "bold", fill: RED });
  // center-to-center dimension
  const yd = 236;
  s += line(x1, y + 6, x1, yd + 8, { stroke: "#888", w: 1 }) + line(x2, y + 6, x2, yd + 8, { stroke: "#888", w: 1 });
  s += A(385, yd, x1 + 2, yd, C.ink, 1.6) + A(385, yd, x2 - 2, yd, C.ink, 1.6) + rect(330, yd - 12, 100, 24, { fill: "#fff" }) + T(380, yd + 5, "r", { size: 15, weight: "bold", italic: true });
  s += T(380, yd + 26, "measured center to center, not surface to surface", { size: 12, fill: C.muted });
  s += rect(210, 280, 340, 56, NOTE) + T(380, 302, "F_{g} = Gm_{1}m_{2}/r²  on each object", { size: 14, weight: "bold" }) + T(380, 324, "equal size, opposite directions: a Newton's third law pair", { size: 12 });
  fig(FIGS, "p1b-grav-pair", 760, 348, s, "Two spheres of different mass attracting each other with equal and opposite forces along the line joining their centers, with r measured center to center",
    "Each mass pulls the other toward its own center with the same magnitude, Gm<sub>1</sub>m<sub>2</sub>/r², even when one mass is much larger. The force is always attractive and along the line through the centers, and r is the center-to-center distance.");
}

// 6. g versus r (s211)
{
  let s = defs + title("Earth's field strength falls off as 1/r²");
  const x0 = 90, y0 = 320, W = 460, H = 260, xmax = 4.2, ymax = 10.5;
  const X = (r) => x0 + (r / xmax) * W, Y = (g) => y0 - (g / ymax) * H;
  s += rect(x0, y0 - H, X(1) - x0, H, { fill: "#eeeeea", rx: 0 }) + T((x0 + X(1)) / 2, Y(5.5), "inside\nEarth\n(not\nshown)", { size: 11.5, fill: C.muted });
  [2, 4, 6, 8, 10].forEach((g) => s += line(x0, Y(g), X(4.1), Y(g), { stroke: "#eee", w: 1 }) + line(x0 - 5, Y(g), x0, Y(g), { w: 1.5 }) + T(x0 - 9, Y(g) + 4, String(g), { size: 12, anchor: "end" }));
  [1, 2, 3, 4].forEach((r) => s += line(X(r), y0, X(r), y0 + 5, { w: 1.5 }) + T(X(r), y0 + 20, `${r}R_{E}`, { size: 12.5, weight: "bold" }));
  s += T(x0 - 9, y0 + 4, "0", { size: 12, anchor: "end" });
  s += line(x0, y0, X(4.2), y0, { w: 2 }) + line(x0, y0, x0, y0 - H, { w: 2 });
  s += T(x0 + W / 2, y0 + 46, "distance from Earth's center, r", { size: 13, weight: "bold" }) + `<text x="40" y="${f1(y0 - H / 2)}" text-anchor="middle" font-size="13" font-weight="bold" fill="${C.ink}" transform="rotate(-90 40 ${f1(y0 - H / 2)})">g (N/kg)</text>`;
  s += line(X(1), Y(9.8), X(2.75), Y(9.8), { stroke: C.muted, w: 2, dash: "7 5" }) + T(X(1.45), Y(9.8) + 20, "constant-g approximation:\nvalid only very near r = 1R_{E}", { size: 11.5, fill: C.muted, anchor: "start" });
  let d = ""; for (let i = 0; i <= 120; i++) { const r = 1 + 3 * i / 120; d += (i ? " L " : "M ") + f1(X(r)) + " " + f1(Y(9.8 / (r * r))); }
  s += path(d, { stroke: RED, w: 3.5 });
  const pts = [[1, 9.8, "9.8"], [2, 2.45, "2.45"], [3, 1.09, "1.09"], [4, 0.61, "0.61"]];
  pts.forEach(([r, g, lab]) => s += circle(X(r), Y(g), 5, { fill: RED, stroke: "#fff", w: 1.5 }) + T(X(r) + 9, Y(g) - 9, lab, { size: 12.5, weight: "bold", anchor: "start" }));
  s += line(X(2), Y(2.45) - 8, X(2.25), Y(5.3), { stroke: C.ink, w: 1 }) + T(X(2.27), Y(5.3) - 18, "r = 2R_{E}: one Earth radius\nabove the surface, g ≈ 9.8/4", { size: 11.5, anchor: "start" });
  s += note(578, 92, 168, 170, "g = GM/r²", "double r → g ÷ 4\ntriple r → g ÷ 9\nquadruple r → g ÷ 16\n\n1 N/kg = 1 m/s²", 12.5);
  fig(FIGS, "p1b-g-vs-r", 760, 384, s, "Graph of Earth's gravitational field strength versus distance from Earth's center, from one to four Earth radii, falling as one over r squared",
    "Earth's field strength is 9.8 N/kg at the surface (r = R<sub>E</sub>) and falls as 1/r²: about 2.45 N/kg at 2R<sub>E</sub>, 1.09 N/kg at 3R<sub>E</sub> and 0.61 N/kg at 4R<sub>E</sub>. Treating g as a constant 9.8 N/kg works only for motion that stays very close to the surface.");
}

// 7. satellite in a circular orbit (s211, no numbers: Worked Example 18 follows)
{
  let s = defs + title("A circular orbit: gravity is the only force, and it points to Earth's center");
  const ex = 230, ey = 200, RE = 62, RO = 150, phi = 40;
  s += circle(ex, ey, RO, { stroke: "#9aa0a6", w: 2, fill: "none" }).replace("/>", ' stroke-dasharray="7 6"/>');
  s += circle(ex, ey, RE, { fill: "#cfe0f3", stroke: "#3c5a80", w: 2 }) + T(ex, ey - 26, "Earth", { size: 13, weight: "bold" }) + T(ex, ey - 10, "mass M", { size: 12 });
  s += dot(ex, ey, 3);
  // r, R_E and altitude along the lower-right radius
  const ang = -35, ux = Math.cos(rad(ang)), uy = -Math.sin(rad(ang));
  s += line(ex, ey, ex + ux * RO, ey + uy * RO, { stroke: C.ink, w: 1.5, dash: "4 4" });
  s += line(ex + ux * RE - uy * 6, ey + uy * RE + ux * 6, ex + ux * RE + uy * 6, ey + uy * RE - ux * 6, { w: 2 });
  s += T(ex + ux * RE * 0.6 + 12, ey + uy * RE * 0.6 - 8, "R_{E}", { size: 13, weight: "bold" });
  s += T(ex + ux * (RE + 24) + 8, ey + uy * (RE + 24) - 11, "altitude", { size: 12, weight: "bold", anchor: "start" });
  const off = 18, qx = -uy * off, qy = ux * off; // offset to the lower-left side of the radius
  s += A(ex + qx + ux * 75, ey + qy + uy * 75, ex + qx + ux * 2, ey + qy + uy * 2, C.ink, 1.5) + A(ex + qx + ux * 75, ey + qy + uy * 75, ex + qx + ux * (RO - 2), ey + qy + uy * (RO - 2), C.ink, 1.5);
  s += rect(ex + qx + ux * 75 - 12, ey + qy + uy * 75 - 12, 24, 24, { fill: "#fff" }) + T(ex + qx + ux * 75, ey + qy + uy * 75 + 5, "r", { size: 15, weight: "bold", italic: true });
  // satellite
  const sx = ex + RO * Math.cos(rad(phi)), sy = ey - RO * Math.sin(rad(phi));
  const vx = -Math.sin(rad(phi)), vy = -Math.cos(rad(phi)), cxu = (ex - sx) / RO, cyu = (ey - sy) / RO;
  s += A(sx, sy, sx + vx * 85, sy + vy * 85, BLUE) + A(sx, sy, sx + cxu * 72, sy + cyu * 72);
  s += `<g transform="translate(${f1(sx)} ${f1(sy)}) rotate(${-phi})">${rect(-22, -4, 14, 8, { fill: "#b9c8dc", stroke: "#456", rx: 1, w: 1 })}${rect(8, -4, 14, 8, { fill: "#b9c8dc", stroke: "#456", rx: 1, w: 1 })}${rect(-8, -8, 16, 16, { fill: "#d9d4c4", stroke: "#555", rx: 3, w: 1.5 })}</g>`;
  s += T(sx + vx * 85 - 6, sy + vy * 85 + 4, "v", { size: 15, weight: "bold", italic: true, fill: BLUE, anchor: "end" });
  s += T(sx + cxu * 72 + 26, sy + cyu * 72 + 6, "F_{g}", { size: 15, weight: "bold", fill: RED, anchor: "start" });
  s += T(sx + 18, sy - 14, "satellite, mass m", { size: 12, anchor: "start" });
  s += note(430, 96, 312, 196, "Gravity supplies the centripetal force", "F_{g} = GMm/r² = mv²/r\n\nr = R_{E} + altitude (center to center)\n\nm cancels: the speed and period\ndepend only on M and r", 13);
  fig(FIGS, "p1b-orbit", 760, 372, s, "A satellite in a circular orbit around Earth, with velocity tangent to the orbit and the gravitational force pointing to Earth's center, and the orbital radius measured from Earth's center",
    "A satellite in a circular orbit has only one force on it, gravity, directed toward Earth's center; that force alone is the net force that bends its path into a circle. The orbital radius r runs from Earth's center, so it equals Earth's radius plus the altitude.");
}

// 8. U_g versus r (addition p1-general-grav-pe in s33; worked example follows, so no numeric change shown)
{
  let s = defs + title("Gravitational PE of a satellite–Earth system: U_{g} = −GMm/r");
  const x0 = 90, yA = 84, k = 80, U1 = 222; // k px per R_E; U1 px for GMm/R_E
  const X = (r) => x0 + r * k, Y = (u) => yA - u * U1;
  s += rect(x0, yA, k, U1 + 26, { fill: "#eeeeea", rx: 0 }) + T(x0 + k / 2, Y(-0.6), "inside\nEarth", { size: 11.5, fill: C.muted });
  s += A(x0, yA, X(7.4), yA, C.ink, 2) + T(X(7.4) + 4, yA + 5, "r", { size: 15, weight: "bold", italic: true, anchor: "start" });
  s += line(x0, yA - 10, x0, Y(-1.1), { w: 2 });
  [1, 2, 3, 4, 5, 6, 7].forEach((r) => s += line(X(r), yA - 5, X(r), yA, { w: 1.5 }) + T(X(r), yA - 11, r === 1 ? "R_{E}" : `${r}R_{E}`, { size: 12.5, weight: "bold" }));
  s += T(x0 - 8, yA + 5, "0", { size: 12.5, weight: "bold", anchor: "end" });
  s += line(x0 - 5, Y(-1), x0, Y(-1), { w: 1.5 }) + line(x0, Y(-1), X(1), Y(-1), { stroke: "#bbb", w: 1, dash: "3 3" }) + T(x0 - 8, Y(-1) + 4, "−GMm/R_{E}", { size: 12, weight: "bold", anchor: "end" });
  s += `<text x="26" y="${f1(Y(-0.5))}" text-anchor="middle" font-size="13" font-weight="bold" fill="${C.ink}" transform="rotate(-90 26 ${f1(Y(-0.5))})">U<tspan dy="3" font-size="11">g</tspan><tspan dy="-3"> (negative)</tspan></text>`;
  let d = ""; for (let i = 0; i <= 160; i++) { const r = 1 + 6.2 * i / 160; d += (i ? " L " : "M ") + f1(X(r)) + " " + f1(Y(-1 / r)); }
  s += path(d, { stroke: RED, w: 3.5 }) + circle(X(1), Y(-1), 5, { fill: RED, stroke: "#fff", w: 1.5 });
  // tangent near the surface (kept short; it only illustrates the local slope)
  s += line(X(0.88), Y(-1.12), X(1.32), Y(-0.68), { stroke: GREEN, w: 2.5, dash: "6 4" });
  s += T(X(1) + 6, Y(-1) + 28, "near the surface: ΔU ≈ mgΔh", { size: 12, weight: "bold", fill: GREEN, anchor: "start" }) + T(X(1) + 6, Y(-1) + 44, "(tangent line at R_{E}, slope = mg)", { size: 11.5, fill: GREEN, anchor: "start" });
  // arrow along the curve, offset below it
  let d2 = ""; for (let i = 0; i <= 60; i++) { const r = 1.9 + 2.6 * i / 60; d2 += (i ? " L " : "M ") + f1(X(r) + 10) + " " + f1(Y(-1 / r) + 24); }
  s += path(d2, { stroke: C.ink, w: 2, marker: "ah" }) + T(X(2.0), Y(-1 / 2) + 64, "moving apart: U increases toward 0", { size: 12.5, weight: "bold", anchor: "start" });
  s += note(486, 226, 256, 112, "U_{g} = 0 at infinite separation", "U_{g} is negative at every finite r\nmost negative at the surface\nfarther apart → larger (less negative)", 12.5);
  fig(FIGS, "p1b-ug-vs-r", 760, 382, s, "Graph of gravitational potential energy of a satellite-Earth system versus separation, negative everywhere, rising toward zero as the separation grows",
    "With the zero of potential energy at infinite separation, U<sub>g</sub> = −GMm/r is negative at every finite distance and rises toward zero as the satellite and Earth move apart. Close to the surface the curve is nearly a straight line, which is why ΔU ≈ mgΔh works there.");
}

// 9. apparent weight in an elevator (addition p1-apparent-weight in s26; worked example follows, so no numbers)
{
  let s = defs + title("Apparent weight: the scale reads the normal force F_{N}", 16);
  const panels = [
    ["a = 0", "scale reads mg", 55, 0, "at rest, or moving at\nconstant velocity"],
    ["a upward", "scale reads more than mg", 82, -1, "speeding up going up, or\nslowing down going down"],
    ["a downward", "scale reads less than mg", 30, 1, "speeding up going down, or\nslowing down going up"],
    ["free fall: a = g down", "scale reads 0 (weightless)", 0, 2, "cable cut: gravity is\nthe only force"],
  ];
  panels.forEach(([head, read, LN, adir, motion], i) => {
    const pc = 95 + i * 190;
    if (i) s += line(pc - 95, 40, pc - 95, 450, { stroke: C.line, w: 1.5 });
    // elevator, cable, person on a scale
    s += rect(pc - 55, 52, 110, 150, { fill: "#f6f4ee", stroke: "#666", rx: 4, w: 2 });
    s += i === 3 ? line(pc, 52, pc, 44, { stroke: "#666", w: 2 }) + path(`M ${pc} 30 L ${pc - 3} 36 L ${pc + 3} 40`, { stroke: "#666", w: 2 }) : line(pc, 34, pc, 52, { stroke: "#666", w: 2 });
    s += rect(pc - 22, 186, 44, 14, { fill: "#ddd", stroke: "#555", rx: 3 });
    s += circle(pc, 100, 11, { fill: "#f4d8c0", stroke: "#555", w: 1.5 }) + line(pc, 111, pc, 150, { stroke: "#555", w: 2.5 }) + line(pc, 150, pc - 9, 186, { stroke: "#555", w: 2.5 }) + line(pc, 150, pc + 9, 186, { stroke: "#555", w: 2.5 }) + line(pc, 122, pc - 16, 142, { stroke: "#555", w: 2.5 }) + line(pc, 122, pc + 16, 142, { stroke: "#555", w: 2.5 });
    s += T(pc, 226, head, { size: 13.5, weight: "bold" }) + T(pc, 244, read, { size: 12, fill: i === 0 ? C.ink : RED, weight: "bold" });
    // FBD with a separate acceleration arrow
    const fy = 345;
    s += A(pc - 8, fy, pc - 8, fy + 55) + T(pc - 16, fy + 50, "F_{g} = mg", { size: 13, weight: "bold", fill: RED, anchor: "end" });
    if (LN) s += A(pc - 8, fy, pc - 8, fy - LN) + T(pc - 18, fy - LN + 20, "F_{N}", { size: 14, weight: "bold", fill: RED, anchor: "end" });
    else s += T(pc - 16, fy - 14, "F_{N} = 0", { size: 13, weight: "bold", fill: RED, anchor: "end" });
    s += dot(pc - 8, fy);
    if (adir === 0) s += T(pc + 44, fy + 5, "a = 0", { size: 13, weight: "bold", fill: GREEN });
    else { const L = adir === 2 ? 50 : 36, dir = adir < 0 ? -1 : 1; s += A(pc + 44, fy - dir * L / 2, pc + 44, fy + dir * L / 2, GREEN, 2.5) + T(pc + 54, fy + 5, "a", { size: 14, weight: "bold", italic: true, fill: GREEN, anchor: "start" }); }
    s += T(pc, 430, motion, { size: 11.5, fill: C.muted });
  });
  s += T(380, 470, "Up as positive: F_{N} − mg = ma, so F_{N} = m(g + a). The direction of a decides the reading, not the direction of motion.", { size: 12, weight: "bold" });
  fig(FIGS, "p1b-elevator-scale", 760, 486, s, "Four elevators with a person on a scale and the matching free-body diagrams: no acceleration, upward acceleration, downward acceleration, and free fall",
    "A scale reads the normal force, not your weight. An upward acceleration makes F<sub>N</sub> larger than mg, a downward one makes it smaller, and in free fall F<sub>N</sub> drops to zero; the weight mg is the same in all four panels.");
}
