// Figures for the material added to the AP Physics 2 study guide in Nov 2026, batch A (units 9, 10, 15).
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, NOTE, axes, title, fig } from "./lib2.mjs";
export const FIGS = {};
const r1 = (n) => (Math.round(n * 10) / 10).toString();
const MK = { [RED]: "ahr", [BLUE]: "ahb", [GREEN]: "ahg", [C.ink]: "ah" };
const A = (x1, y1, x2, y2, c = RED, w = 2.5, dash) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: MK[c] || "ah", dash });
const extraDefs = `<defs>${[["ahp", PURPLE], ["ahgd", GOLD]].map(([id, c]) => `<marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`).join("")}</defs>`;
// arrow with a head drawn to scale (for vector maps where some arrows are very short)
const sArrow = (x1, y1, x2, y2, c = RED, w = 2.2) => {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  const hl = Math.min(11, Math.max(4, L * 0.38)), hw = hl * 0.55;
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  return line(x1, y1, bx, by, { stroke: c, w }) + `<path d="M ${r1(x2)} ${r1(y2)} L ${r1(bx - uy * hw)} ${r1(by + ux * hw)} L ${r1(bx + uy * hw)} ${r1(by - ux * hw)} Z" fill="${c}"/>`;
};
const ch = (x, y, sign, r = 12, size = 15) => circle(x, y, r, { fill: sign > 0 ? "#f4b0a0" : "#a9c8f0", stroke: "#555" }) + text(x, y + size * 0.33, sign > 0 ? "+" : "−", { size, weight: "bold" });
const halo = (t) => t.replace(/<text /g, '<text stroke="#fff" stroke-width="4" stroke-linejoin="round" paint-order="stroke" ');
const polyline = (pts, o = {}) => path(pts.map(([x, y], i) => (i ? "L " : "M ") + r1(x) + " " + r1(y)).join(" "), o);

// 1. gas atom bouncing off a wall: only v-perp reverses
{
  let s = defs + title("One atom hits the wall: only the perpendicular part of its velocity reverses");
  const wx = 432; // wall surface
  s += rect(wx, 46, 20, 250, { fill: "#cfcac0", stroke: "#777", rx: 0 });
  for (let y = 52; y < 290; y += 16) s += line(wx + 20, y, wx + 30, y + 10, { stroke: "#999", w: 1.2 });
  s += text(wx + 10, 312, "wall", { size: 12, weight: "bold" });
  const hx = wx - 12, hy = 172; // atom center at impact
  const inA = [hx - 190, hy + 95], outA = [hx - 190, hy - 95];
  s += line(inA[0], inA[1], hx, hy, { stroke: "#bbb", w: 1.5, dash: "5 5" }) + line(hx, hy, outA[0], outA[1], { stroke: "#bbb", w: 1.5, dash: "5 5" });
  s += circle(hx, hy, 11, { fill: "#e9e4f4", stroke: "#aaa", w: 1.2 });
  const vx = 88, vy = 44;
  // before
  s += circle(inA[0], inA[1], 11, { fill: "#c9b6ea", stroke: "#555" });
  s += A(inA[0] + 10, inA[1] - 5, inA[0] + vx, inA[1] - vy, C.ink, 2.5) + text(inA[0] + vx / 2 - 6, inA[1] - vy / 2 - 12, "v", { size: 15, weight: "bold", italic: true });
  s += A(inA[0], inA[1] + 22, inA[0] + vx, inA[1] + 22, BLUE, 2.5) + text(inA[0] + vx + 8, inA[1] + 27, "v⊥ (toward wall)", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  s += A(inA[0] - 22, inA[1], inA[0] - 22, inA[1] - vy, GREEN, 2.5) + text(inA[0] - 30, inA[1] - 16, "v‖", { size: 13, weight: "bold", fill: GREEN, anchor: "end" });
  s += text(inA[0] - 52, inA[1] + 34, "before", { size: 12, weight: "bold", fill: C.muted });
  // after
  s += circle(outA[0], outA[1], 11, { fill: "#c9b6ea", stroke: "#555" });
  s += A(outA[0] - 10, outA[1] - 5, outA[0] - vx, outA[1] - vy, C.ink, 2.5) + text(outA[0] - vx / 2 - 4, outA[1] - vy / 2 - 14, "v", { size: 15, weight: "bold", italic: true });
  s += A(outA[0], outA[1] + 22, outA[0] - vx, outA[1] + 22, BLUE, 2.5) + text(outA[0] - vx - 8, outA[1] + 27, "−v⊥", { size: 13, weight: "bold", fill: BLUE, anchor: "end" });
  s += A(outA[0] + 22, outA[1], outA[0] + 22, outA[1] - vy, GREEN, 2.5) + text(outA[0] + 30, outA[1] - 16, "v‖ unchanged", { size: 12, weight: "bold", fill: GREEN, anchor: "start" });
  s += text(outA[0] - 20, outA[1] + 52, "after", { size: 12, weight: "bold", fill: C.muted });
  // momentum change and impulse
  s += A(hx - 16, hy, hx - 100, hy, RED, 3.5) + halo(text(hx - 58, hy - 12, "Δp = 2mv⊥", { size: 13, weight: "bold", fill: RED }) + text(hx - 58, hy + 22, "on atom, away from wall", { size: 11, fill: RED }));
  s += A(wx + 22, hy, wx + 96, hy, PURPLE, 3.5).replace('url(#ah)', 'url(#ahp)') + text(wx + 84, hy + 24, "impulse 2mv⊥", { size: 12.5, weight: "bold", fill: PURPLE }) + text(wx + 84, hy + 39, "on wall, into wall", { size: 11, fill: PURPLE });
  // inset
  const ix = 568, iy = 56, iw = 178, ih = 196;
  s += rect(ix, iy, iw, ih, { fill: "#faf9f5", stroke: "#ccc", rx: 10 });
  s += text(ix + iw / 2, iy + 22, "inside the gas", { size: 12.5, weight: "bold" });
  const cx = ix + iw / 2, cy = iy + 104;
  s += line(cx, cy - 42, cx, cy + 42, { stroke: C.ink, w: 2.5, dash: "4 4" });
  [[-1, -24], [-1, 22], [1, -6], [1, 32]].forEach(([side, dy]) => { const ax = cx + side * 58; s += circle(ax, cy + dy, 8, { fill: "#c9b6ea", stroke: "#555" }) + A(ax - side * 10, cy + dy, cx - side * 9, cy + dy, C.ink, 1.8); });
  s += text(ix + iw / 2, iy + 166, "imaginary surface hit\nfrom both sides", { size: 11, fill: C.muted });
  s += text(ix + iw / 2, iy + ih + 22, "pressure exists everywhere\nin the gas, not just at walls", { size: 12, weight: "bold" });
  s += rect(30, 306, 380, 30, NOTE) + text(220, 326, "only the perpendicular part pushes on the wall", { size: 12.5, weight: "bold" });
  fig(FIGS, "gas-wall-impulse", 760, 344, s + extraDefs, "An atom bouncing elastically off a wall, with its velocity split into perpendicular and parallel parts, and an inset showing pressure on an imaginary surface inside the gas",
    "In an elastic bounce the parallel part v‖ is unchanged and the perpendicular part flips from +v⊥ to −v⊥, so the atom's momentum changes by 2mv⊥ and the wall gets an equal impulse the other way. Pressure is the sum of these perpendicular impulses per second per unit area, and it acts on any surface inside the gas too.");
}

// 2. P vs T (Celsius) at constant volume, extrapolated to absolute zero
{
  let s = defs + title("Constant-volume gas: extend the P–T line to P = 0");
  const x0 = 80, y0 = 290, w = 480, h = 238; // T: -300..100 C, P: 0..140 kPa
  const X = (T) => x0 + (T + 300) / 400 * w, Y = (P) => y0 - P / 140 * (h - 10);
  for (let P = 20; P <= 140; P += 20) s += line(x0, Y(P), x0 + w, Y(P), { stroke: "#eee", w: 1 });
  s += line(X(0), y0, X(0), Y(140), { stroke: "#d6d3cb", w: 1.2 });
  s += axes(x0, y0, w, h, "temperature T (°C)", "pressure P (kPa)");
  for (let T = -300; T <= 100; T += 100) s += line(X(T), y0, X(T), y0 + 5, { w: 1.5 }) + text(X(T), y0 + 19, T < 0 ? "−" + (-T) : String(T), { size: 11 });
  for (let P = 0; P <= 140; P += 20) s += line(x0 - 5, Y(P), x0, Y(P), { w: 1.5 }) + text(x0 - 9, Y(P) + 4, String(P), { size: 11, anchor: "end" });
  const k = 22.0 / 60.0, T0 = 20 - 107.3 / k; // about -272.6 C
  const P1 = (T) => 107.3 + k * (T - 20);
  const k2 = 0.21, P2 = (T) => k2 * (T - T0);
  s += line(X(T0), y0, X(0), Y(P2(0)), { stroke: "#9bb7e0", w: 2, dash: "7 6" }) + line(X(0), Y(P2(0)), X(100), Y(P2(100)), { stroke: "#9bb7e0", w: 2.5 });
  s += text(X(30), Y(P2(30)) + 22, "less gas, same V", { size: 11.5, weight: "bold", fill: BLUE, anchor: "start" });
  s += line(X(T0), y0, X(0), Y(P1(0)), { stroke: RED, w: 2.5, dash: "7 6" }) + line(X(0), Y(P1(0)), X(100), Y(P1(100)), { stroke: RED, w: 3.5 });
  [[20, 107.3], [80, 129.3]].forEach(([T, P]) => s += circle(X(T), Y(P), 6, { fill: "#fff", stroke: RED, w: 2.5 }) + text(X(T) - 10, Y(P) - 12, `${T.toFixed(1)} °C, ${P} kPa`, { size: 12, weight: "bold", anchor: "end" }));
    s += circle(X(T0), y0, 6, { fill: C.ink });
  s += text(x0 + 12, Y(70), "absolute zero\n≈ −273 °C = 0 K", { size: 12.5, weight: "bold", anchor: "start" }) + A(X(T0) + 6, Y(70) + 26, X(T0) + 1, y0 - 10, C.ink, 1.8);
  s += text(X(-150), Y(118), "dashed = extrapolation", { size: 11.5, fill: C.muted });
  s += rect(590, 66, 158, 176, NOTE) + text(669, 90, "Every line meets", { size: 13, weight: "bold" }) + text(669, 108, "the axis at −273 °C", { size: 13, weight: "bold" }) + text(669, 136, "any gas, any amount,\nany fixed volume.\nIn kelvins the same\nlines pass through\nthe origin: P ∝ T.", { size: 12 });
  fig(FIGS, "gas-absolute-zero", 760, 330, s, "Graph of pressure versus Celsius temperature for a gas at constant volume, with the line extended to zero pressure at minus 273 degrees Celsius",
    "Measured at constant volume, pressure rises linearly with Celsius temperature. Extending the line (dashed) to P = 0 always lands near −273 °C, whatever the gas or amount: a smaller amount just gives a shallower line through the same point. That temperature is absolute zero, 0 K.");
}

// 3. conduction, convection, radiation
{
  let s = defs + title("Three ways thermal energy moves");
  const head = (x, t, c) => text(x, 54, t, { size: 14, weight: "bold", fill: c });
  // conduction: spoon in soup
  s += head(130, "Conduction", RED);
  s += path("M 40 196 Q 40 262 130 262 Q 220 262 220 196 Z", { fill: "#f6e1c6", stroke: "#a77", w: 2 }) + path("M 46 206 L 214 206", { stroke: "#e0a060", w: 6 });
  for (let i = 0; i < 4; i++) s += path(`M ${70 + i * 30} 196 q -6 -12 0 -22 q 6 -10 0 -20`, { stroke: "#d8a0a0", w: 1.6 });
  // spoon handle from (110,226) to (230,86)
  const sx1 = 106, sy1 = 232, sx2 = 226, sy2 = 92;
  s += line(sx1, sy1, sx2, sy2, { stroke: "#9aa0a6", w: 9 }) + `<ellipse cx="${sx1}" cy="${sy1}" rx="16" ry="9" fill="#9aa0a6" transform="rotate(-50 ${sx1} ${sy1})"/>`;
  const ux = (sx2 - sx1) / Math.hypot(sx2 - sx1, sy2 - sy1), uy = (sy2 - sy1) / Math.hypot(sx2 - sx1, sy2 - sy1);
  for (let i = 0; i < 6; i++) { const t = 50 + i * 24, px = sx1 + ux * t, py = sy1 + uy * t; s += circle(px, py, 4.5, { fill: i < 2 ? "#e8734a" : i < 4 ? "#f2b48f" : "#f7dccb", stroke: "#555", w: 1 }); }
  s += A(sx1 + ux * 60 + 22, sy1 + uy * 60 + 14, sx1 + ux * 150 + 22, sy1 + uy * 150 + 14, RED, 2.5);
  s += text(130, 290, "particles jostle their neighbors;", { size: 11.5 }) + text(130, 305, "the spoon itself stays put", { size: 11.5 });
  s += line(258, 44, 258, 312, { stroke: C.line, w: 1.5 });
  // convection: room
  s += head(385, "Convection", BLUE);
  s += rect(284, 76, 202, 178, { fill: "#fbfaf6", stroke: "#666", w: 2, rx: 2 });
  s += rect(298, 228, 40, 26, { fill: "#e8734a", stroke: "#844", rx: 3 }) + text(318, 270, "heater", { size: 11.5, weight: "bold" });
  s += path("M 318 222 L 318 104 Q 318 92 330 92 L 440 92", { stroke: RED, w: 3, marker: "ahr" });
  s += path("M 462 100 Q 470 104 470 116 L 470 222", { stroke: BLUE, w: 3, marker: "ahb" });
  s += path("M 462 240 L 350 240", { stroke: BLUE, w: 3, marker: "ahb" });
  s += text(328, 150, "warm air\nrises", { size: 11.5, weight: "bold", fill: RED, anchor: "start" }) + text(462, 150, "cool air\nsinks", { size: 11.5, weight: "bold", fill: BLUE, anchor: "end" });
  s += text(385, 290, "the fluid itself moves and", { size: 11.5 }) + text(385, 305, "carries its energy around a loop", { size: 11.5 });
  s += line(512, 44, 512, 312, { stroke: C.line, w: 1.5 });
  // radiation: Sun to Earth
  s += head(636, "Radiation", GOLD);
  s += circle(556, 166, 28, { fill: "#fcd34d", stroke: "#c99700", w: 2 }) + text(556, 214, "Sun", { size: 11.5, weight: "bold" });
  s += circle(718, 166, 14, { fill: "#7fb3e6", stroke: "#2E6BC6", w: 2 }) + text(718, 196, "Earth", { size: 11.5, weight: "bold" });
  [138, 166, 194].forEach((y) => { let d = `M 590 ${y}`; for (let x = 590; x < 690; x += 4) d += ` L ${x + 4} ${(y + 6 * Math.sin((x + 4 - 590) / 16 * 2 * Math.PI) * (y === 166 ? 1 : 0.8)).toFixed(1)}`; s += path(d, { stroke: "#d29b00", w: 2 }) + `<path d="M 698 ${y} l -9 -5 l 0 10 z" fill="#d29b00"/>`; });
  s += text(640, 112, "vacuum (empty space)", { size: 11.5, fill: C.muted });
  s += text(636, 290, "EM waves need no matter;", { size: 11.5 }) + text(636, 305, "the only mode that crosses a vacuum", { size: 11.5 });
  fig(FIGS, "three-heat-modes", 760, 322, s, "Three panels: a spoon in hot soup conducting heat, a heater driving a convection loop of air in a room, and the Sun radiating energy across space to Earth",
    "Conduction passes energy from particle to neighboring particle through material that stays in place. Convection carries energy by moving a fluid: warm, less dense air rises and cool air sinks. Radiation is carried by electromagnetic waves and is the only one of the three that works across a vacuum.");
}

// 4. polarization of an insulator
{
  let s = defs + title("Polarization: an insulator's molecules stretch into tiny dipoles");
  const mol = (x, y, shift) => {
    let m = `<ellipse cx="${r1(x - shift)}" cy="${y}" rx="${r1(17 + shift * 0.5)}" ry="15" fill="#a9c8f0" fill-opacity="0.75" stroke="#55a" stroke-width="1.2"/>`;
    m += circle(x + shift * 0.6, y, 6, { fill: "#f4b0a0", stroke: "#a55", w: 1.2 });
    if (shift) m += text(x - shift - 9, y + 5, "−", { size: 15, weight: "bold", fill: "#1d4f9a" }) + text(x + shift * 0.6, y + 4, "+", { size: 11, weight: "bold" });
    return m;
  };
  const grid = (ox, shift) => { let m = ""; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) m += mol(ox + 46 + i * 74, 96 + j * 62, shift); return m; };
  s += rect(30, 52, 300, 196, { fill: "#faf9f5", stroke: "#ccc", rx: 10 }) + grid(56, 0);
  s += text(180, 270, "No field: each molecule's electron cloud", { size: 12 }) + text(180, 286, "is centered on its nuclei (no dipole)", { size: 12 });
  s += rect(400, 52, 300, 196, { fill: "#faf9f5", stroke: "#ccc", rx: 10 });
  [70, 126, 182, 238].forEach((y) => s += line(406, y, 694, y, { stroke: "#f0b4a4", w: 1.5 }) + `<path d="M 560 ${y} l -9 -5 l 0 10 z" fill="#f0b4a4"/>`);
  s += grid(426, 7);
  s += A(712, 150, 750, 150, RED, 3) + text(731, 138, "E", { size: 16, weight: "bold", fill: RED, italic: true });
  s += text(550, 270, "In field E: electrons shift left (−), nuclei right (+);", { size: 12 }) + text(550, 286, "polarization: electrons shift but stay bound", { size: 12, weight: "bold" });
  s += A(340, 150, 390, 150, C.ink, 2) + text(365, 140, "add E", { size: 11, fill: C.muted });
  s += rect(140, 302, 480, 30, NOTE) + text(380, 322, "easier to shift → stronger polarization → larger ε = κε₀", { size: 12.5, weight: "bold" });
  fig(FIGS, "insulator-polarization", 760, 344, s, "Insulator molecules without a field, and the same molecules stretched into small dipoles in a uniform field pointing right",
    "In an external field the electrons in each molecule shift slightly against the field and the nuclei slightly with it, so every molecule becomes a small dipole, even though no charge leaves its molecule. A material whose electrons shift more easily polarizes more and has a larger permittivity ε = κε₀.");
}

// 5. vector field map around +Q
{
  let s = defs + title("Vector field map of a single positive charge");
  const cx = 250, cy = 196, g = 70, L1 = 60; // arrow length at distance g = L1, scales as 1/r^2
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    if (!i && !j) continue;
    const x = cx + i * g, y = cy + j * g, rr = Math.hypot(i, j), L = L1 / (rr * rr);
    s += circle(x, y, 2.6, { fill: C.ink }) + sArrow(x, y, x + i / rr * L, y + j / rr * L, RED, 2.2);
  }
  s += ch(cx, cy, 1, 15, 17) + text(cx - 24, cy + 30, "+Q", { size: 13, weight: "bold", anchor: "end" });
  // labels with leaders
  s += line(cx + g + 40, cy - 4, 470, 92, { stroke: "#999", w: 1 }) + text(474, 82, "at distance r: long arrow", { size: 12.5, weight: "bold", anchor: "start" }) + text(474, 98, "longer = stronger field", { size: 12, anchor: "start" });
  s += line(cx + 2 * g + 12, cy + 4, 470, 222, { stroke: "#999", w: 1 }) + text(474, 220, "at 2r: 1/4 the length", { size: 12.5, weight: "bold", anchor: "start" }) + text(474, 236, "(E ∝ 1/r², so 2× farther → ¼)", { size: 12, anchor: "start" });
  s += line(cx + 2 * g + 4, cy + 2 * g + 4, 470, 330, { stroke: "#999", w: 1 }) + text(474, 334, "corners: shorter still", { size: 12, anchor: "start" });
  s += rect(474, 128, 270, 58, NOTE) + text(609, 150, "each arrow describes only the", { size: 12 }) + text(609, 167, "point at its tail (dot)", { size: 12 });
  s += line(cx + 16, cy + 22, cx + 2 * g, cy + 22, { stroke: C.muted, w: 1.2 }) + line(cx + g, cy + 17, cx + g, cy + 27, { stroke: C.muted, w: 1.2 }) + line(cx + 2 * g, cy + 17, cx + 2 * g, cy + 27, { stroke: C.muted, w: 1.2 });
  s += text(cx + g, cy + 42, "r", { size: 12, italic: true, weight: "bold", fill: C.muted }) + text(cx + 2 * g, cy + 42, "2r", { size: 12, italic: true, weight: "bold", fill: C.muted });
  fig(FIGS, "vector-field-map", 760, 372, s, "Grid of arrows around a positive point charge, pointing outward, with lengths falling off as one over r squared",
    "Each arrow sits on a grid point and shows the field there: direction away from +Q, length proportional to E. Because E ∝ 1/r², an arrow twice as far from the charge is one-fourth as long, and the arrows at the corners are shorter still.");
}

// 6. charged conducting sphere vs charged insulating sphere
{
  let s = defs + title("Charged conducting sphere vs. charged insulating sphere");
  const cx = 190, cy = 184, R = 64;
  for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6 + Math.PI / 12; s += A(cx + (R + 4) * Math.cos(t), cy + (R + 4) * Math.sin(t), cx + (R + 54) * Math.cos(t), cy + (R + 54) * Math.sin(t), RED, 1.8); }
  s += circle(cx, cy, R, { fill: "#e8e6e0", stroke: "#666", w: 2.5 });
  for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6; s += text(cx + (R - 9) * Math.cos(t), cy + (R - 9) * Math.sin(t) + 5, "+", { size: 14, weight: "bold", fill: RED }); }
  s += circle(cx, cy, 9, { stroke: RED, w: 1.8, fill: "#fff" }).replace("/>", ' stroke-dasharray="3 3"/>') + text(cx, cy + 4, "Q", { size: 10, weight: "bold", fill: RED });
  s += text(cx, cy - 22, "E = 0 inside", { size: 12, weight: "bold" });
  s += line(cx, cy, cx + R * Math.cos(2.4), cy + R * Math.sin(2.4), { stroke: C.muted, w: 1.2 }) + text(cx - 8, cy + 36, "R", { size: 12, italic: true, weight: "bold", fill: C.muted });
  s += text(cx, 54, "Conductor", { size: 14, weight: "bold" });
  s += text(cx, 330, "charge only on the surface; E ⊥ surface", { size: 12 }) + text(cx, 348, "outside: same as point charge Q at center,", { size: 12, weight: "bold" }) + text(cx, 364, "E = kQ/r²  (r from the center)", { size: 12, weight: "bold" });
  s += line(380, 44, 380, 372, { stroke: C.line, w: 1.5 });
  const ix = 570, iy = 184;
  for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6 + Math.PI / 12; s += A(ix + (R + 4) * Math.cos(t), iy + (R + 4) * Math.sin(t), ix + (R + 54) * Math.cos(t), iy + (R + 54) * Math.sin(t), RED, 1.8); }
  s += circle(ix, iy, R, { fill: "#eef3e4", stroke: "#7a8a5a", w: 2.5 });
  // scattered charges (deterministic) and small inside field arrows, E grows with r for evenly spread charge
  const pts = [[-40, -22], [-12, -44], [22, -30], [44, 4], [-46, 18], [-20, 6], [8, 24], [30, 40], [-6, 50], [-30, -46], [48, -26], [0, -8]];
  pts.forEach(([dx, dy]) => s += text(ix + dx, iy + dy + 4, "+", { size: 12, weight: "bold", fill: RED }));
  [[0, 1], [1, 0], [0, -1], [-1, 0], [0.71, 0.71], [-0.71, -0.71], [0.71, -0.71], [-0.71, 0.71]].forEach(([ux, uy], i) => { const r0 = i < 4 ? 22 : 30, len = i < 4 ? 10 : 14; s += sArrow(ix + ux * r0, iy + uy * r0, ix + ux * (r0 + len), iy + uy * (r0 + len), PURPLE, 1.6); });
  s += text(ix, 54, "Insulator", { size: 14, weight: "bold" });
  s += text(ix, 330, "charge stays where it was put,", { size: 12 }) + text(ix, 348, "spread through the volume here;", { size: 12 }) + text(ix, 364, "E inside can be nonzero (purple)", { size: 12, weight: "bold", fill: PURPLE });
  fig(FIGS, "sphere-conductor-insulator", 760, 380, s, "A charged conducting sphere with charge on its surface and zero field inside, beside an insulating sphere with charge spread through it and field arrows inside",
    "On a conductor the free charges spread to the outer surface until E = 0 inside, and the field leaves perpendicular to the surface. Outside, either sphere (if its charge is spherically symmetric) acts like a point charge Q at its center, with r measured from the center. In an insulator the charge cannot move, so it can sit inside and the field inside need not be zero.");
}

// 7. electron deflected between plates
{
  let s = defs + title("Electron between charged plates: a sideways 'projectile'");
  const x0 = 110, x1 = 530, yT = 80, yB = 260, ym = (yT + yB) / 2; // 5.0 cm long, 2.0 cm apart
  s += rect(x0, yT - 12, x1 - x0, 12, { fill: "#f4b0a0", stroke: "#a55", rx: 2 }) + rect(x0, yB, x1 - x0, 12, { fill: "#a9c8f0", stroke: "#55a", rx: 2 });
  for (let i = 0; i < 9; i++) s += text(x0 + 22 + i * 47, yT - 17, "+", { size: 14, weight: "bold", fill: RED }) + text(x0 + 22 + i * 47, yB + 30, "−", { size: 16, weight: "bold", fill: BLUE });
  for (let i = 0; i < 6; i++) { const x = x0 + 40 + i * 70; s += A(x, yT + 8, x, yB - 8, "#e9a090", 1.6).replace("url(#ah)", "url(#ahr)"); }
  s += text(x1 - 26, yB - 40, "E", { size: 15, weight: "bold", fill: RED, italic: true });
  // path: y = 1/2 a t^2, true exit deflection 1.4 mm of a 10 mm half-gap; drawn x5 vertically
  const Ld = 63; // exaggerated exit deflection in px (true: 1.4 mm = 12.6 px at this scale)
  let pts = []; for (let i = 0; i <= 40; i++) { const t = i / 40; pts.push([x0 + t * (x1 - x0), ym - Ld * t * t]); }
  s += polyline(pts, { stroke: C.ink, w: 3 });
  const slope = 2 * Ld / (x1 - x0); s += line(x1, ym - Ld, x1 + 120, ym - Ld - 120 * slope, { stroke: C.ink, w: 2, dash: "6 5" });
  s += line(x0 - 6, ym, x1 + 110, ym, { stroke: "#bbb", w: 1.2, dash: "3 4" }) + text(x1 + 70, ym + 16, "midline", { size: 11, fill: C.muted });
  s += ch(x0 - 18, ym, -1, 10, 13) + A(x0 - 6, ym + 22, x0 + 60, ym + 22, BLUE, 2.5) + halo(text(x0 + 66, ym + 27, "v₀ = 2.0 × 10⁷ m/s", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }));
  const fx = x0 + 0.55 * (x1 - x0), fy = ym - Ld * 0.55 * 0.55;
  s += circle(fx, fy, 6, { fill: "#a9c8f0", stroke: "#555", w: 1.2 }) + A(fx, fy - 8, fx, fy - 50, GREEN, 3) + halo(text(fx + 8, fy - 36, "F = eE (up, toward +)", { size: 12, weight: "bold", fill: GREEN, anchor: "start" }));
  s += line(x1 + 16, ym, x1 + 16, ym - Ld, { stroke: PURPLE, w: 1.8 }) + line(x1 + 10, ym, x1 + 22, ym, { stroke: PURPLE, w: 1.8 }) + line(x1 + 10, ym - Ld, x1 + 22, ym - Ld, { stroke: PURPLE, w: 1.8 }) + text(x1 + 26, ym - Ld / 2 + 4, "deflection y", { size: 12, weight: "bold", fill: PURPLE, anchor: "start" });
  s += line(x0, yB + 46, x1, yB + 46, { w: 1.5 }) + line(x0, yB + 40, x0, yB + 52, { w: 1.5 }) + line(x1, yB + 40, x1, yB + 52, { w: 1.5 }) + text((x0 + x1) / 2, yB + 66, "L = 5.0 cm", { size: 12, weight: "bold" });
  s += line(x0 - 50, yT, x0 - 50, yB, { w: 1.5 }) + line(x0 - 56, yT, x0 - 44, yT, { w: 1.5 }) + line(x0 - 56, yB, x0 - 44, yB, { w: 1.5 }) + text(x0 - 58, yT + 50, "d =\n2.0 cm", { size: 12, weight: "bold", anchor: "end" });
  s += rect(560, 210, 186, 104, NOTE) + text(653, 232, "Like a projectile", { size: 13, weight: "bold" }) + text(653, 254, "with g replaced by qE/m:\nconstant vₓ, steady\nsideways acceleration", { size: 12 });
  s += text(380, 352, "vertical deflection drawn 5× larger than true scale", { size: 11, fill: C.muted, italic: true });
  fig(FIGS, "plates-electron-parabola", 760, 364, s + extraDefs, "An electron entering between horizontal charged plates and curving along a parabola toward the positive plate",
    "Between the plates the field is uniform, so the force on the electron (opposite to E, toward the + plate) is constant. Its speed along the plates stays v₀ while it accelerates sideways at a = eE/m, the same pattern as a thrown ball, so the path is a parabola. After it leaves the plates it travels in a straight line.");
}

// 8. Bohr orbit with standing de Broglie wave (n = 3)
{
  let s = defs + title("Bohr orbit as a standing wave: a whole number of wavelengths fits");
  const cx = 220, cy = 200, R = 120, Aw = 14;
  s += circle(cx, cy, R, { stroke: "#999", w: 1.5 }).replace("/>", ' stroke-dasharray="6 5"/>');
  let d = ""; for (let i = 0; i <= 360; i++) { const t = i / 360 * 2 * Math.PI, rr = R + Aw * Math.sin(3 * t); d += (i ? " L " : "M ") + r1(cx + rr * Math.cos(t)) + " " + r1(cy - rr * Math.sin(t)); }
  s += path(d + " Z", { stroke: PURPLE, w: 2.6 });
  s += circle(cx, cy, 13, { fill: "#f4b0a0", stroke: "#555" }) + text(cx, cy + 5, "+", { size: 15, weight: "bold" }) + text(cx, cy + 32, "nucleus", { size: 11, fill: C.muted });
  // electron at angle 200 deg (lower left of center)
  const te = 200 * Math.PI / 180, ex = cx + R * Math.cos(te), ey = cy - R * Math.sin(te);
  s += circle(ex, ey, 10, { fill: "#a9c8f0", stroke: "#555" }) + text(ex, ey + 5, "−", { size: 15, weight: "bold" });
  const ux = (cx - ex) / R, uy = (cy - ey) / R;
  s += A(ex + ux * 14, ey + uy * 14, ex + ux * 62, ey + uy * 62, RED, 3) + text(ex + ux * 44 + 4, ey + uy * 44 + 22, "F", { size: 15, weight: "bold", fill: RED });
  const tx = Math.sin(te), ty = Math.cos(te); // counterclockwise tangent on screen
  s += A(ex + tx * 14, ey + ty * 14, ex + tx * 64, ey + ty * 64, BLUE, 3) + text(ex + tx * 64 - 16, ey + ty * 64 + 4, "v", { size: 15, weight: "bold", fill: BLUE, italic: true });
  s += text(cx - R * 0.45, cy - 18, "r", { size: 13, italic: true, weight: "bold", fill: C.muted }) + line(cx, cy, cx - R * Math.cos(0.5), cy - R * Math.sin(0.5), { stroke: C.muted, w: 1.2 });
  // one wavelength bracket: 120 degrees from 0 to 120
  let b = ""; for (let i = 0; i <= 40; i++) { const t = (i / 40) * (2 * Math.PI / 3), rr = R + Aw + 16; b += (i ? " L " : "M ") + r1(cx + rr * Math.cos(t)) + " " + r1(cy - rr * Math.sin(t)); }
  s += path(b, { stroke: C.ink, w: 1.5 }) + line(cx + R + Aw + 10, cy, cx + R + Aw + 22, cy, { w: 1.5 }) + line(cx + (R + Aw + 10) * Math.cos(2.0944), cy - (R + Aw + 10) * Math.sin(2.0944), cx + (R + Aw + 22) * Math.cos(2.0944), cy - (R + Aw + 22) * Math.sin(2.0944), { w: 1.5 });
  s += text(cx + (R + 50) * Math.cos(1.0472) + 6, cy - (R + 50) * Math.sin(1.0472), "one λ", { size: 13, weight: "bold" });
  s += text(cx, 372, "n = 3:  circumference 2πr = 3λ", { size: 14, weight: "bold", fill: PURPLE });
  s += text(cx - R - 14, cy + 100, "F (electric)\npoints to\nthe center", { size: 11, fill: RED, anchor: "end" });
  // inset: not closing
  const ix = 600, iy = 186, Ri = 62, Ai = 9, nn = 3.4;
  s += rect(468, 60, 268, 268, { fill: "#faf9f5", stroke: "#ccc", rx: 10 });
  s += circle(ix, iy, Ri, { stroke: "#bbb", w: 1.2 }).replace("/>", ' stroke-dasharray="5 4"/>');
  let d2 = ""; for (let i = 0; i <= 360; i++) { const t = i / 360 * 2 * Math.PI, rr = Ri + Ai * Math.sin(nn * t); d2 += (i ? " L " : "M ") + r1(ix + rr * Math.cos(t)) + " " + r1(iy - rr * Math.sin(t)); }
  s += path(d2, { stroke: "#999", w: 2.2 });
  const endR = Ri + Ai * Math.sin(nn * 2 * Math.PI);
  s += circle(ix + Ri, iy, 3.5, { fill: RED }) + circle(ix + endR, iy, 3.5, { fill: RED });
  s += text(ix + Ri - 16, iy + 22, "ends don't\nmatch", { size: 11.5, weight: "bold", fill: RED, anchor: "end" });
  s += text(ix, 284, "not allowed: 2πr is not", { size: 12, weight: "bold" }) + text(ix, 300, "a whole number of λ", { size: 12, weight: "bold" }) + text(ix, 318, "(the wave cancels itself)", { size: 11, fill: C.muted });
  s += text(ix, 84, "3.4 wavelengths around", { size: 12, fill: C.muted });
  fig(FIGS, "bohr-standing-wave", 760, 388, s, "Bohr model of hydrogen with an electron orbiting the nucleus, the electric force pointing inward, and a de Broglie wave fitting exactly three wavelengths around the orbit; an inset shows a wave that does not close",
    "The electric force on the electron points toward the nucleus and supplies the centripetal force, while v is tangent to the orbit. An orbit is allowed only if a whole number n of de Broglie wavelengths fits around its circumference (here n = 3, so 2πr = 3λ); otherwise the wave does not join up with itself and cancels.");
}

// 9. blackbody curve vs classical prediction
{
  let s = defs + title("Blackbody radiation at 5000 K: real curve vs. classical prediction");
  const x0 = 80, y0 = 300, w = 470, h = 240, lmax = 3000; // nm
  const T = 5000, c2 = 1.4388e7; // hc/k in nm*K
  const planck = (l) => 1 / (l ** 5 * (Math.exp(c2 / (l * T)) - 1));
  const rj = (l) => T / (c2 * l ** 4);
  const lp = 2.898e6 / T; // 580 nm (2.90e-3 m K / 5000 K)
  const Pmax = planck(lp), sc = (h - 60) / Pmax;
  const X = (l) => x0 + l / lmax * w, Y = (v) => y0 - v * sc;
  // visible band
  s += `<defs><linearGradient id="vis2a" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#8b5cf6"/><stop offset="0.2" stop-color="#3b82f6"/><stop offset="0.4" stop-color="#22c55e"/><stop offset="0.6" stop-color="#facc15"/><stop offset="0.8" stop-color="#f97316"/><stop offset="1" stop-color="#ef4444"/></linearGradient></defs>`;
  s += `<rect x="${r1(X(380))}" y="${y0 - h}" width="${r1(X(750) - X(380))}" height="${h}" fill="url(#vis2a)" opacity="0.18"/>`;
  s += text((X(380) + X(750)) / 2, y0 - h + 14, "visible", { size: 11, weight: "bold", fill: C.muted });
  s += axes(x0, y0, w, h, "wavelength λ (nm)", "intensity");
  for (let l = 0; l <= lmax; l += 500) s += line(X(l), y0, X(l), y0 + 5, { w: 1.5 }) + text(X(l), y0 + 19, String(l), { size: 11 });
  // classical: draw until it leaves the plot
  let d = "", started = false; for (let l = lmax; l >= 200; l -= 10) { const y = Y(rj(l)); if (y < y0 - h + 4) break; d += (started ? " L " : "M ") + r1(X(l)) + " " + r1(y); started = true; }
  s += path(d, { stroke: BLUE, w: 2.6, dash: "8 6" });
  const lastL = (() => { let l = lmax; while (Y(rj(l - 10)) >= y0 - h + 4) l -= 10; return l; })();
  s += A(X(lastL), y0 - h + 10, X(lastL) - 4, y0 - h - 6, BLUE, 2);
  let p = ""; for (let l = 60; l <= lmax; l += 10) p += (l > 60 ? " L " : "M ") + r1(X(l)) + " " + r1(Y(planck(l))); s += path(p, { stroke: RED, w: 3.5 });
  s += line(X(lp), Y(Pmax), X(lp), y0, { stroke: C.ink, w: 1.4, dash: "4 4" }) + text(X(lp) + 6, y0 - 12, "λ_peak ≈ 580 nm", { size: 11.5, weight: "bold", anchor: "start" });
  s += halo(text(X(860), Y(planck(860)) + 44, "real (Planck) curve", { size: 12.5, weight: "bold", fill: RED, anchor: "start" }));
  s += text(X(1500), y0 - h + 30, "classical prediction:", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" }) + text(X(1500), y0 - h + 46, "ultraviolet catastrophe", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" }) + text(X(1500), y0 - h + 62, "(→ ∞ as λ → 0)", { size: 11.5, fill: BLUE, anchor: "start" });
  s += text(X(2300), Y(rj(2300)) - 34, "the two agree at\nlong wavelengths", { size: 11.5, fill: C.muted });
  s += rect(580, 70, 168, 196, NOTE) + text(664, 94, "Hotter body:", { size: 13, weight: "bold" }) + text(664, 120, "peak moves to\nshorter λ (Wien:\nλ_peak T = constant)", { size: 12 }) + text(664, 190, "total area grows\nas T⁴ (P = σAT⁴)", { size: 12 });
  fig(FIGS, "blackbody-uv-catastrophe", 760, 346, s, "Intensity versus wavelength for a 5000 K blackbody, with the real curve peaking near 580 nanometers and the classical prediction rising without limit at short wavelengths",
    "Classical physics predicts intensity rising without limit as wavelength shrinks (dashed), which would mean infinite power. The measured curve peaks (at about 580 nm for 5000 K, from Wien's law) and falls to zero at short wavelengths, which Planck explained by letting energy come only in packets of hf.");
}

// 10. Compton scattering momentum vectors
{
  let s = defs + title("Compton scattering: momentum is conserved as a vector");
  const k = 7.7, pin = 1 / 0.0700 * k * 0.1, pout = 1 / 0.07243 * k * 0.1; // px per (h/nm) scaled
  const P = pin * 10, Q = pout * 10; // lengths in px (to scale with each other)
  // before
  s += text(130, 56, "Before", { size: 14, weight: "bold" });
  s += path(`M 30 150 ${Array.from({ length: 12 }, (_, i) => `q 4 ${i % 2 ? 8 : -8} 8 0`).join(" ")}`, { stroke: GOLD, w: 2 });
  s += A(40, 186, 40 + P, 186, GOLD, 3).replace("url(#ah)", "url(#ahgd)") + text(40 + P / 2, 210, "photon: p = h/λ", { size: 12, weight: "bold", fill: "#9a7400" }) + text(40 + P / 2, 226, "(λ = 0.0700 nm)", { size: 11.5, fill: "#9a7400" });
  s += circle(205, 150, 10, { fill: "#a9c8f0", stroke: "#555" }) + text(205, 155, "−", { size: 14, weight: "bold" }) + text(205, 130, "electron\nat rest", { size: 11, fill: C.muted }).replace(/y="130"/, 'y="118"');
  s += line(250, 44, 250, 330, { stroke: C.line, w: 1.5 });
  // after
  const ox = 310, oy = 176;
  s += text(390, 56, "After", { size: 14, weight: "bold" });
  s += line(ox - 30, oy, ox + P + 20, oy, { stroke: "#ccc", w: 1.2, dash: "4 4" });
  s += A(ox, oy, ox, oy - Q, GOLD, 3).replace("url(#ah)", "url(#ahgd)") + text(ox + 10, oy - Q + 16, "photon: h/λ′", { size: 12, weight: "bold", fill: "#9a7400", anchor: "start" });
  s += A(ox, oy, ox + P, oy + Q, BLUE, 3) + text(ox + P - 10, oy + Q + 22, "electron: p_e", { size: 12, weight: "bold", fill: BLUE });
  s += circle(ox, oy, 5, { fill: C.ink });
  const ar = 34, ang = Math.atan2(Q, P); s += path(`M ${ox + ar} ${oy} A ${ar} ${ar} 0 0 1 ${r1(ox + ar * Math.cos(ang))} ${r1(oy + ar * Math.sin(ang))}`, { stroke: C.ink, w: 1.4 }) + text(ox + ar + 10, oy + 18, "φ", { size: 13, weight: "bold", anchor: "start" });
  s += line(470, 44, 470, 330, { stroke: C.line, w: 1.5 });
  // tip-to-tail
  const tx = 516, ty = 250;
  s += text(610, 56, "Tip to tail: after = before", { size: 14, weight: "bold" });
  s += A(tx, ty, tx, ty - Q, GOLD, 3).replace("url(#ah)", "url(#ahgd)") + text(tx - 8, ty - Q / 2, "h/λ′", { size: 12.5, weight: "bold", fill: "#9a7400", anchor: "end" });
  s += A(tx, ty - Q, tx + P, ty, BLUE, 3) + text(tx + P / 2 + 14, ty - Q / 2 - 6, "p_e", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" });
  s += A(tx, ty, tx + P, ty, GOLD, 3).replace("url(#ah)", "url(#ahgd)") + text(tx + P / 2, ty + 22, "h/λ (before)", { size: 12.5, weight: "bold", fill: "#9a7400" });
  s += text(610, 296, "p_e has a forward part (h/λ) and a", { size: 11.5 }) + text(610, 312, "downward part (h/λ′) that cancels the", { size: 11.5 }) + text(610, 328, "photon's upward momentum", { size: 11.5 });
  fig(FIGS, "compton-momentum", 760, 344, s + extraDefs, "Momentum vectors before and after Compton scattering: incoming photon to the right, scattered photon straight up, electron recoiling forward and downward, and a tip-to-tail triangle",
    "Before the collision all the momentum belongs to the photon, h/λ to the right. After a 90° scatter the photon carries h/λ′ straight up, so the electron must carry the forward momentum h/λ plus a downward part equal to h/λ′: it recoils forward and below the original line, at the angle φ the worked example asks for.");
}

// 11. binding energy per nucleon
{
  let s = defs + title("Binding energy per nucleon: the most tightly bound nuclei are near iron");
  const x0 = 80, y0 = 320, w = 560, h = 260; // A 0..240, BE 0..9 MeV
  const X = (a) => x0 + a / 240 * w, Y = (e) => y0 - e / 9 * (h - 14);
  for (let e = 1; e <= 9; e++) s += line(x0, Y(e), x0 + w, Y(e), { stroke: "#eee", w: 1 });
  s += axes(x0, y0, w, h, "mass number A", "binding energy per nucleon (MeV)");
  for (let a = 0; a <= 240; a += 40) s += line(X(a), y0, X(a), y0 + 5, { w: 1.5 }) + text(X(a), y0 + 19, String(a), { size: 11 });
  for (let e = 0; e <= 9; e++) s += line(x0 - 5, Y(e), x0, Y(e), { w: 1.5 }) + text(x0 - 9, Y(e) + 4, String(e), { size: 11, anchor: "end" });
  const data = [[1, 0], [2, 1.11], [3, 2.83], [4, 7.07], [6, 5.33], [7, 5.61], [9, 6.46], [11, 6.93], [12, 7.68], [14, 7.48], [16, 7.98], [20, 8.03], [24, 8.26], [28, 8.45], [32, 8.49], [40, 8.55], [48, 8.67], [56, 8.79], [62, 8.79], [72, 8.73], [84, 8.72], [98, 8.64], [117, 8.52], [138, 8.39], [160, 8.23], [180, 8.03], [208, 7.87], [235, 7.59], [238, 7.57]];
  s += polyline(data.map(([a, e]) => [X(a), Y(e)]), { stroke: RED, w: 3 });
  const dot = (a, e, c = C.ink) => circle(X(a), Y(e), 5, { fill: c, stroke: "#fff", w: 1.5 });
  s += dot(1, 0) + text(X(1) + 10, Y(0) - 8, "¹H (0)", { size: 11.5, weight: "bold", anchor: "start" });
  s += dot(2, 1.11) + text(X(2) + 12, Y(1.11) + 4, "²H (≈ 1.1)", { size: 11.5, weight: "bold", anchor: "start" });
  s += dot(4, 7.07) + line(X(4) + 3, Y(7.07) + 6, X(4) + 14, Y(4.3) - 4, { stroke: "#999", w: 1 }) + text(X(4) + 10, Y(4.0), "⁴He ≈ 7.1", { size: 11.5, weight: "bold", anchor: "start" });
  s += dot(56, 8.79) + text(X(56), Y(8.79) - 12, "⁵⁶Fe ≈ 8.8 MeV: most tightly bound", { size: 12, weight: "bold" });
  s += dot(117, 8.52, PURPLE) + text(X(117), Y(8.52) + 22, "fission fragments", { size: 11.5, weight: "bold", fill: PURPLE }) + text(X(117), Y(8.52) + 37, "A ≈ 117, ≈ 8.5 MeV", { size: 11.5, fill: PURPLE });
  s += dot(235, 7.59, PURPLE) + text(X(235) - 8, Y(7.59) + 22, "²³⁵U ≈ 7.6 MeV", { size: 11.5, weight: "bold", fill: PURPLE, anchor: "end" });
  // fusion and fission arrows
  s += A(X(44), Y(3.0), X(56), Y(6.9), GREEN, 3) + text(X(8) + 26, Y(2.4), "fusion releases energy", { size: 12.5, weight: "bold", fill: GREEN, anchor: "start" }) + text(X(8) + 26, Y(2.4) + 16, "(light nuclei combine → up the curve)", { size: 11.5, fill: GREEN, anchor: "start" });
  s += A(X(226), Y(6.4), X(140), Y(6.4), BLUE, 3) + text(X(183), Y(6.4) + 22, "fission releases energy", { size: 12.5, weight: "bold", fill: BLUE }) + text(X(183), Y(6.4) + 38, "(heavy nucleus splits → toward the peak)", { size: 11.5, fill: BLUE });
  s += text(X(160), Y(4.2), "Moving toward the peak", { size: 12.5, weight: "bold" }) + text(X(160), Y(4.2) + 17, "from either side releases energy.", { size: 12 });
  fig(FIGS, "binding-energy-curve", 760, 362, s, "Binding energy per nucleon versus mass number, rising steeply through helium-4 to a peak of about 8.8 MeV near iron-56 and falling slowly to about 7.6 MeV for uranium",
    "Binding energy per nucleon climbs steeply for light nuclei (with a spike at helium-4), peaks at about 8.8 MeV near iron-56, and falls slowly to about 7.6 MeV for uranium. Fusing light nuclei or splitting heavy ones moves the products toward the peak, where each nucleon is more tightly bound, so both release energy.");
}
