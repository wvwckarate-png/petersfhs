import { C, svg, text, line, circle, rect, path, defs, arrow } from "./lib.mjs";
export const FIGS = {};
const BLUE = "#2E6BC6", RED = "#D2451E", GREEN = "#2E7D32", NOTE = { fill: "#fbf6e6", stroke: "#eadba0", rx: 10 };
const axes = (x0, y0, w, h, xl, yl) => line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + text(x0 + w / 2, y0 + 30, xl, { size: 12, weight: "bold" }) + text(x0 - 30, y0 - h / 2, yl, { size: 12, weight: "bold", rotate: -90 });
const ch = (x, y, sign, r = 14) => circle(x, y, r, { fill: sign > 0 ? "#f4b0a0" : "#a9c8f0", stroke: "#555" }) + text(x, y + 5, sign > 0 ? "+" : "−", { size: 16, weight: "bold" });
const title = (t, s = 16) => text(380, 22, t, { size: s, weight: "bold" });
const dotX = (x, y, r = 10, into = true) => circle(x, y, r, { fill: "#fff", stroke: C.ink, w: 2 }) + (into ? line(x - r * .7, y - r * .7, x + r * .7, y + r * .7, { w: 2 }) + line(x - r * .7, y + r * .7, x + r * .7, y - r * .7, { w: 2 }) : circle(x, y, 2.5, { fill: C.ink }));

// conduction
{
  let s = defs + title("Conduction through a slab: Q/Δt = kAΔT / L");
  s += rect(130, 70, 240, 100, { fill: "#f6d8c8", stroke: "#a55" }) + text(250, 125, "material (k)", { size: 14, weight: "bold" });
  s += rect(60, 70, 70, 100, { fill: "#f4b0a0", stroke: "#a55" }) + text(95, 108, "HOT\nT_h", { size: 13, weight: "bold" }) + rect(370, 70, 70, 100, { fill: "#a9c8f0", stroke: "#55a" }) + text(405, 108, "COLD\nT_c", { size: 13, weight: "bold" });
  [86, 154].forEach((y) => s += arrow(135, y, 365, y, { stroke: RED, marker: "ahr", w: 2 }));
  s += text(250, 62, "heat flows hot → cold", { size: 12, fill: RED, weight: "bold" });
  s += line(130, 190, 370, 190, { w: 1.5 }) + text(250, 208, "thickness L", { size: 12, weight: "bold" }) + line(470, 70, 470, 170, { w: 1.5 }) + text(486, 124, "cross-section\narea A", { size: 12, weight: "bold", anchor: "start" });
  s += rect(560, 56, 180, 150, NOTE) + text(650, 80, "Faster heat flow when:", { size: 13, weight: "bold" }) + text(650, 106, "↑ k (metal vs. foam)\n↑ A (wider path)\n↑ ΔT (bigger difference)\n↓ L (thinner slab)", { size: 12.5 });
  FIGS["conduction"] = { svg: svg(760, 226, s, "Heat conduction through a slab between hot and cold reservoirs"), caption: "Conduction rate grows with conductivity, area and temperature difference, and shrinks with thickness. It is a rate (energy per second), not a total." };
}
// coulomb
{
  let s = defs + title("Coulomb force: equal and opposite pairs, and the inverse-square drop-off");
  const pair = (y, s1, s2, lab) => ch(120, y, s1) + ch(250, y, s2) + (s1 === s2 ? arrow(104, y, 60, y, { stroke: RED, marker: "ahr", w: 2.5 }) + arrow(266, y, 310, y, { stroke: RED, marker: "ahr", w: 2.5 }) : arrow(138, y, 175, y, { stroke: RED, marker: "ahr", w: 2.5 }) + arrow(232, y, 195, y, { stroke: RED, marker: "ahr", w: 2.5 })) + text(185, y + 38, lab, { size: 12, weight: "bold" });
  s += pair(70, 1, 1, "like charges repel") + pair(150, 1, -1, "opposite charges attract");
  s += text(185, 222, "F on 1 = F on 2 in magnitude (Newton's 3rd law)", { size: 11.5, fill: C.muted });
  s += line(380, 44, 380, 236, { stroke: C.line, w: 1.5 });
  const x0 = 420, y0 = 210, w = 300, h = 150;
  s += axes(x0, y0, w, h, "separation r", "force F");
  let d = ""; for (let i = 0; i <= 40; i++) { const r = 0.14 + i / 40 * 0.86; d += (i ? " L " : "M ") + (x0 + r * w) + " " + (y0 - Math.min(h - 6, (0.14 * 0.14 / (r * r)) * (h - 6))); }
  s += path(d, { stroke: RED, w: 3.5 }) + text(x0 + 205, y0 - 90, "F ∝ 1/r²", { size: 14, weight: "bold", fill: RED }) + text(x0 + 205, y0 - 66, "double r → ¼ F\ntriple r → 1/9 F", { size: 12 });
  FIGS["coulomb-forces"] = { svg: svg(760, 250, s, "Like and opposite charges with force arrows, and a graph of Coulomb force versus separation"), caption: "Coulomb forces always come in equal and opposite pairs. Like charges repel, opposite charges attract, and the force falls off as 1/r²." };
}
// equipotentials
{
  let s = defs + title("Electric potential around a point charge: equipotentials and E-field lines");
  const cx = 190, cy = 140;
  [40, 75, 110].forEach((r, i) => s += circle(cx, cy, r, { stroke: BLUE, w: 2, dash: "6 4" }) + text(cx + r * 0.72 + 6, cy - r * 0.72, ["V₁", "V₂", "V₃"][i], { size: 12, weight: "bold", fill: BLUE, anchor: "start" }));
  for (let a = 0; a < 8; a++) { const t = a * Math.PI / 4; s += arrow(cx + 20 * Math.cos(t), cy + 20 * Math.sin(t), cx + 128 * Math.cos(t), cy + 128 * Math.sin(t), { stroke: RED, marker: "ahr", w: 1.8 }); }
  s += ch(cx, cy, 1);
  s += text(190, 276, "E points away from +, perpendicular to equipotentials,\ntoward LOWER potential", { size: 11.5, fill: C.muted });
  const x0 = 430, y0 = 220, w = 290, h = 160;
  s += axes(x0, y0, w, h, "distance r from charge", "V");
  let d = ""; for (let i = 0; i <= 40; i++) { const r = 0.08 + i / 40 * 0.92; d += (i ? " L " : "M ") + (x0 + r * w) + " " + (y0 - Math.min(h - 4, (0.08 / r) * (h - 4))); }
  s += path(d, { stroke: BLUE, w: 3.5 }) + text(x0 + 190, y0 - 90, "V = kq/r", { size: 14, weight: "bold", fill: BLUE });
  s += text(x0 + 140, y0 + 56, "V is a scalar: add potentials from several charges as plain numbers (signs included)", { size: 11 });
  s += rect(430, 244, 310, 0.1, {});
  FIGS["equipotentials"] = { svg: svg(760, 304, s, "Equipotential circles and field lines around a positive point charge, and a V versus r graph"), caption: "Equipotentials (dashed) are always perpendicular to field lines. No work is done moving a charge along one. Near a point charge, V ∝ 1/r, while E ∝ 1/r²." };
}
// capacitor
{
  let s = defs + title("Parallel-plate capacitor: charge separation and the field between the plates");
  s += rect(100, 70, 300, 10, { fill: "#f4b0a0", stroke: "#a55", rx: 2 }) + rect(100, 190, 300, 10, { fill: "#a9c8f0", stroke: "#55a", rx: 2 });
  for (let i = 0; i < 7; i++) s += text(120 + i * 44, 66, "+", { size: 13, weight: "bold", fill: RED }) + text(120 + i * 44, 216, "−", { size: 16, weight: "bold", fill: BLUE });
  for (let i = 0; i < 6; i++) s += arrow(135 + i * 46, 88, 135 + i * 46, 182, { stroke: RED, marker: "ahr", w: 1.8 });
  s += text(250, 138, "uniform E", { size: 12, fill: RED, weight: "bold" });
  s += line(88, 80, 88, 190, { w: 1.5, marker: "ah" }) + line(88, 190, 88, 80, { w: 1.5, marker: "ah" }) + text(76, 138, "d", { size: 14, weight: "bold", anchor: "end" }) + text(250, 244, "plate area A", { size: 12, weight: "bold" });
  s += rect(440, 56, 300, 170, NOTE) + text(590, 80, "C = Q/ΔV  =  κ ε₀ A / d", { size: 14, weight: "bold" }) + text(590, 110, "↑ A  or  ↓ d  →  ↑ C", { size: 13 }) + text(590, 136, "dielectric (κ > 1) → ↑ C", { size: 13 }) + text(590, 168, "U = ½ Q ΔV = ½ C (ΔV)²", { size: 13, weight: "bold" }) + text(590, 202, "Battery connected → ΔV fixed.\nDisconnected → Q fixed.", { size: 12, fill: C.muted });
  FIGS["capacitor-plates"] = { svg: svg(760, 262, s, "Parallel-plate capacitor with charges, uniform electric field, plate area and separation"), caption: "Equal and opposite charge sits on the plates, producing a uniform field between them. Capacitance rises with plate area and dielectric, and falls with separation." };
}
// drift current
{
  let s = defs + title("Current in a wire: electrons drift one way, conventional current points the other");
  s += rect(80, 80, 600, 70, { fill: "#f1e3d3", stroke: "#a77", rx: 35 });
  [[130, 100], [200, 128], [280, 104], [360, 130], [440, 100], [520, 128], [600, 104]].forEach(([x, y]) => s += circle(x, y, 7, { fill: "#a9c8f0", stroke: "#555" }) + text(x, y + 4, "−", { size: 11, weight: "bold" }) + arrow(x - 12, y + 18, x - 32, y + 18, { stroke: BLUE, marker: "ahb", w: 1.5 }));
  s += arrow(250, 60, 520, 60, { stroke: RED, marker: "ahr", w: 3 }) + text(385, 50, "conventional current I (direction + charge would move)", { size: 12.5, weight: "bold", fill: RED });
  s += text(380, 186, "electrons actually drift opposite to I, slowly (≈ mm/s)", { size: 12.5, weight: "bold", fill: BLUE });
  s += rect(120, 206, 520, 50, NOTE) + text(380, 228, "I = ΔQ/Δt = n q v_d A", { size: 14, weight: "bold" }) + text(380, 247, "same current at every point in a series path: charge is conserved, not used up", { size: 11.5 });
  FIGS["drift-current"] = { svg: svg(760, 272, s, "Wire with drifting electrons moving opposite to the conventional current direction"), caption: "Conventional current points the way positive charge would flow, opposite to the electrons' drift. The drift speed is tiny, but the electric field spreads at nearly light speed, so devices respond instantly." };
}
// series vs parallel
{
  let s = defs + title("Series vs. parallel: what is shared, and what is split");
  const bat = (x, y) => line(x, y - 14, x, y + 14, { w: 4 }) + line(x + 10, y - 8, x + 10, y + 8, { w: 2 }) + text(x - 14, y - 20, "+", { size: 12, weight: "bold" });
  const res = (x, y, l) => rect(x - 22, y - 9, 44, 18, { fill: "#fff", stroke: C.ink, w: 2, rx: 2 }) + text(x, y + 4, l, { size: 11, weight: "bold" });
  // series
  s += text(190, 50, "SERIES", { size: 14, weight: "bold", fill: BLUE });
  s += line(60, 90, 140, 90, { w: 2 }) + res(160, 90, "R₁") + line(182, 90, 218, 90, { w: 2 }) + res(240, 90, "R₂") + line(262, 90, 320, 90, { w: 2 }) + line(320, 90, 320, 170, { w: 2 }) + line(320, 170, 200, 170, { w: 2 }) + line(196, 156, 196, 184, { w: 4 }) + line(186, 162, 186, 178, { w: 2 }) + line(182, 170, 60, 170, { w: 2 }) + line(60, 90, 60, 170, { w: 2 }) + text(206, 152, "+", { size: 12, weight: "bold" });
  s += text(190, 210, "same current: I = I₁ = I₂\nvoltages add: V = V₁ + V₂\nR_eq = R₁ + R₂  (bigger)", { size: 12 });
  s += line(380, 44, 380, 250, { stroke: C.line, w: 1.5 });
  s += text(570, 50, "PARALLEL", { size: 14, weight: "bold", fill: BLUE });
  s += line(440, 170, 440, 80, { w: 2 }) + line(440, 80, 640, 80, { w: 2 }) + line(440, 170, 640, 170, { w: 2 }) + line(500, 80, 500, 100, { w: 2 }) + res(500, 110, "R₁").replace("rect", "rect") + line(500, 120, 500, 170, { w: 2 }) + line(580, 80, 580, 100, { w: 2 }) + res(580, 110, "R₂") + line(580, 120, 580, 170, { w: 2 }) + line(640, 80, 640, 170, { w: 2 });
  s += text(570, 210, "same voltage: V = V₁ = V₂\ncurrents add: I = I₁ + I₂\n1/R_eq = 1/R₁ + 1/R₂  (smaller)", { size: 12 });
  FIGS["series-parallel"] = { svg: svg(760, 262, s, "Series and parallel resistor circuits with their current and voltage rules"), caption: "In series, one path: current is shared and voltages add. In parallel, branches: voltage is shared and currents add. Adding a parallel branch always lowers the equivalent resistance." };
}
// loop rule graph
{
  let s = defs + title("Loop rule as a potential 'landscape': what goes up must come down");
  const x0 = 70, y0 = 230, w = 430, h = 160;
  s += axes(x0, y0, w, h, "position around the loop", "electric potential") + line(x0, y0 - 20, x0 + w, y0 - 20, { stroke: "#ccc", w: 1, dash: "3 3" });
  s += path(`M ${x0} ${y0 - 20} L ${x0 + 40} ${y0 - 20} L ${x0 + 70} ${y0 - 140} L ${x0 + 190} ${y0 - 140} L ${x0 + 250} ${y0 - 90} L ${x0 + 300} ${y0 - 90} L ${x0 + 380} ${y0 - 20} L ${x0 + w} ${y0 - 20}`, { stroke: BLUE, w: 3.5 });
  s += text(x0 + 130, y0 - 160, "battery: rise +ε", { size: 11.5, weight: "bold", fill: GREEN }) + text(x0 + 268, y0 - 108, "R₁: drop", { size: 11.5, weight: "bold", fill: RED }) + text(x0 + 372, y0 - 64, "R₂: drop", { size: 11.5, weight: "bold", fill: RED });
  s += rect(530, 56, 210, 160, NOTE) + text(635, 80, "Kirchhoff's loop rule", { size: 13, weight: "bold" }) + text(635, 106, "ΣΔV = 0", { size: 16, weight: "bold" }) + text(635, 134, "Rises equal drops around any\nclosed loop. Cross a resistor\nwith the current: −IR.\nCross a battery − to +: +ε.", { size: 12 });
  FIGS["loop-rule"] = { svg: svg(760, 270, s, "Potential graph around a circuit loop with a battery rise and resistor drops"), caption: "Going once around a loop you return to the same potential: the battery's rise equals the sum of the resistor drops. This is energy conservation per unit charge." };
}
// magnetic fields
{
  let s = defs + title("Magnetic field lines: bar magnet and long straight wire");
  s += rect(90, 136, 80, 34, { fill: "#f4b0a0", stroke: "#555", rx: 2 }) + rect(170, 136, 80, 34, { fill: "#a9c8f0", stroke: "#555", rx: 2 }) + text(130, 159, "N", { size: 16, weight: "bold" }) + text(210, 159, "S", { size: 16, weight: "bold" });
  [1, 2].forEach((k) => { const d = 62 * k; s += path(`M 95 136 C 60 ${136 - d - 10}, 280 ${136 - d - 10}, 245 136`, { stroke: BLUE, w: 2, marker: "ahb" }) + path(`M 95 170 C 60 ${170 + d + 10}, 280 ${170 + d + 10}, 245 170`, { stroke: BLUE, w: 2, marker: "ahb" }); });
  s += line(170, 153, 170, 153, {}) + text(170, 296, "outside the magnet, lines run N → S (closed loops\ncontinue inside); poles always come in N–S pairs", { size: 11.5, fill: C.muted });
  s += line(380, 44, 380, 310, { stroke: C.line, w: 1.5 });
  s += dotX(560, 150, 14, false);
  [38, 70, 102].forEach((r) => s += circle(560, 150, r, { stroke: BLUE, w: 1.8 }) + path(`M ${560} ${150 - r} l -2 0`, { stroke: BLUE }));
  s += arrow(560, 112, 536, 112, { stroke: BLUE, marker: "ahb", w: 2 }) + arrow(560, 80, 532, 80, { stroke: BLUE, marker: "ahb", w: 2 }) + arrow(560, 48, 528, 48, { stroke: BLUE, marker: "ahb", w: 2 });
  s += text(560, 262, "Current out of the page. Right-hand rule: thumb along I,\nfingers curl in the direction of B\n(B ∝ I/r, weaker farther away)", { size: 11.5, weight: "bold" });
  FIGS["magnetic-fields"] = { svg: svg(760, 330, s, "Field lines of a bar magnet and concentric circular field lines around a current-carrying wire"), caption: "Field lines form closed loops: outside a magnet they run from N to S. A straight current-carrying wire produces circular field lines found with the right-hand rule." };
}
// magnetic force on moving charge
{
  let s = defs + title("Magnetic force on a moving charge: perpendicular to v and B, so it curves the path");
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += dotX(60 + i * 60, 66 + j * 54, 7, true);
  s += text(150, 288, "B into the page (×)", { size: 12, weight: "bold", fill: C.muted });
  s += circle(150, 140, 62, { stroke: GREEN, w: 2, dash: "6 4" }) + ch(212, 140, 1, 11) + arrow(212, 128, 212, 82, { stroke: BLUE, marker: "ahb", w: 2.5 }) + text(228, 98, "v", { size: 14, weight: "bold", fill: BLUE, anchor: "start" }) + arrow(200, 140, 160, 140, { stroke: RED, marker: "ahr", w: 2.5 }) + text(180, 160, "F", { size: 14, weight: "bold", fill: RED });
  s += text(150, 236, "F always points to the center:\nthe field changes direction, never speed", { size: 11.5, fill: C.muted });
  s += rect(380, 56, 360, 220, NOTE) + text(560, 82, "F = q v B sin θ", { size: 15, weight: "bold" }) + text(560, 110, "Right-hand rule (positive charge):\nfingers along v, curl toward B,\nthumb gives F.  Negative charge: reverse.", { size: 12.5 }) + text(560, 176, "Circular motion:  qvB = mv²/r\nr = mv / (qB)", { size: 13, weight: "bold" }) + text(560, 230, "B does no work (F ⟂ v):\nspeed and kinetic energy are constant", { size: 12, fill: GREEN, weight: "bold" });
  FIGS["magnetic-force"] = { svg: svg(760, 300, s, "Positive charge moving in a magnetic field into the page following a circular path with force toward the center"), caption: "Because the magnetic force is always perpendicular to velocity, it acts as a centripetal force. The charge moves in a circle with r = mv/qB and its speed never changes." };
}
// parallel wires
{
  let s = defs + title("Force between current-carrying wires: parallel currents attract");
  s += dotX(200, 130, 16, false) + dotX(360, 130, 16, false) + text(200, 170, "I₁ (out)", { size: 12, weight: "bold" }) + text(360, 170, "I₂ (out)", { size: 12, weight: "bold" });
  s += circle(200, 130, 60, { stroke: BLUE, w: 1.5 }) + circle(360, 130, 60, { stroke: BLUE, w: 1.5 });
  s += arrow(222, 118, 296, 118, { stroke: RED, marker: "ahr", w: 3 }) + arrow(338, 142, 264, 142, { stroke: RED, marker: "ahr", w: 3 });
  s += text(280, 206, "wire 2's field at wire 1 points down; F = Iℓ × B pushes wire 1 toward wire 2", { size: 11.5, fill: C.muted });
  s += rect(500, 56, 240, 150, NOTE) + text(620, 80, "Rule of thumb", { size: 13, weight: "bold" }) + text(620, 106, "Same direction → ATTRACT\nOpposite directions → REPEL\n\n(opposite of electric charges:\nlike currents attract)", { size: 12.5 }) + text(620, 188, "|F| = I ℓ B sin θ", { size: 13, weight: "bold" });
  FIGS["parallel-wires"] = { svg: svg(760, 224, s, "Two parallel wires carrying current out of the page with attractive force arrows"), caption: "Each wire sits in the field of the other. Use the right-hand rule for B, then again for F = Iℓ × B. Parallel currents attract; antiparallel currents repel." };
}
// Lenz
{
  let s = defs + title("Lenz's law: the induced current opposes the change in flux");
  const loop = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="62" fill="none" stroke="#b07a2a" stroke-width="5"/>`;
  const magnet = (x, y) => rect(x, y, 96, 36, { fill: "#f4b0a0", stroke: "#555", rx: 2 }) + rect(x + 96, y, 70, 36, { fill: "#a9c8f0", stroke: "#555", rx: 2 }) + text(x + 48, y + 24, "N", { size: 15, weight: "bold" }) + text(x + 131, y + 24, "S", { size: 15, weight: "bold" });
  s += text(190, 52, "Magnet moving TOWARD the loop", { size: 13, weight: "bold", fill: BLUE }) + magnet(20, 118) + arrow(100, 100, 170, 100, { stroke: GREEN, marker: "ahg", w: 2.5 }) + text(135, 92, "v", { size: 13, weight: "bold", fill: GREEN }) + loop(290, 136) + arrow(310, 136, 262, 136, { stroke: RED, marker: "ahr", w: 2.5 });
  s += text(190, 232, "flux through loop (→) is increasing, so the\ninduced B points LEFT, opposing the increase", { size: 11.5 });
  s += line(380, 44, 380, 250, { stroke: C.line, w: 1.5 });
  s += text(570, 52, "Magnet moving AWAY from the loop", { size: 13, weight: "bold", fill: BLUE }) + magnet(400, 118) + arrow(480, 100, 410, 100, { stroke: GREEN, marker: "ahg", w: 2.5 }) + text(445, 92, "v", { size: 13, weight: "bold", fill: GREEN }) + loop(670, 136) + arrow(650, 136, 698, 136, { stroke: RED, marker: "ahr", w: 2.5 });
  s += text(570, 232, "flux through loop (→) is decreasing, so the\ninduced B points RIGHT, trying to keep it", { size: 11.5 });
  s += text(380, 90, "", {});
  s += text(190, 206, "red arrow = induced field inside the loop", { size: 11, fill: C.red });
  s += rect(60, 262, 640, 44, NOTE) + text(380, 282, "Induced EMF = −N ΔΦ/Δt: the minus sign is Lenz's law (energy conservation).", { size: 12.5, weight: "bold" }) + text(380, 300, "Flux Φ = B A cos θ  changes if B, A, or θ changes.", { size: 11.5 });
  FIGS["lenz-law"] = { svg: svg(760, 320, s, "Magnet approaching and leaving a conducting loop showing the induced field opposes the flux change"), caption: "Whatever the flux change is, the induced current creates a field that opposes it: it resists an approaching pole and tries to hold on to a retreating one." };
}
// reflection
{
  let s = defs + title("Law of reflection: angles measured from the normal");
  s += line(60, 190, 360, 190, { w: 4, stroke: "#777" }) + line(210, 190, 210, 40, { stroke: C.muted, w: 1.5, dash: "5 4" }) + text(224, 52, "normal", { size: 12, fill: C.muted, anchor: "start" });
  s += arrow(100, 60, 208, 188, { stroke: BLUE, marker: "ahb", w: 3 }) + arrow(212, 188, 320, 60, { stroke: RED, marker: "ahr", w: 3 });
  s += path("M 210 140 A 50 50 0 0 0 169 162", { stroke: BLUE, w: 2 }) + text(180, 132, "θᵢ", { size: 15, weight: "bold", fill: BLUE }) + path("M 210 140 A 50 50 0 0 1 251 162", { stroke: RED, w: 2 }) + text(240, 132, "θᵣ", { size: 15, weight: "bold", fill: RED });
  s += text(210, 216, "θᵢ = θᵣ   (smooth surface: specular)", { size: 12.5, weight: "bold" });
  s += line(420, 44, 420, 230, { stroke: C.line, w: 1.5 });
  s += text(580, 52, "Rough surface: diffuse reflection", { size: 12.5, weight: "bold" });
  s += path("M 450 190 L 460 184 L 475 192 L 490 182 L 505 192 L 520 183 L 535 191 L 550 184 L 565 192 L 580 183 L 595 191 L 610 184 L 625 192 L 640 183 L 655 190 L 670 184 L 690 190", { stroke: "#777", w: 3 });
  [[470, 62], [530, 62], [590, 62], [650, 62]].forEach(([x, y], i) => s += arrow(x, y, x + 28, 183, { stroke: BLUE, marker: "ahb", w: 1.5 }) + arrow(x + 32, 183, x + [60, 20, 90, 10][i] + 20, 90 + [0, 20, -10, 30][i], { stroke: RED, marker: "ahr", w: 1.5 }));
  s += text(580, 216, "each ray still obeys θᵢ = θᵣ locally;\nbumpy surface scatters them in many directions", { size: 11.5, fill: C.muted });
  FIGS["reflection-law"] = { svg: svg(760, 252, s, "Law of reflection on a smooth surface and diffuse reflection on a rough surface"), caption: "Both angles are measured from the normal. A smooth surface keeps reflected rays parallel (specular); a rough surface scatters them because the local normal changes from point to point." };
}
// refraction
{
  let s = defs + title("Refraction (Snell's law) and total internal reflection");
  const panel = (x0, ttl) => text(x0 + 150, 46, ttl, { size: 13, weight: "bold" }) + rect(x0, 64, 300, 100, { fill: "#fffbea", stroke: "#ddd", rx: 0 }) + rect(x0, 164, 300, 100, { fill: "#cfe6f7", stroke: "#ddd", rx: 0 }) + line(x0 + 150, 64, x0 + 150, 264, { stroke: C.muted, w: 1.2, dash: "5 4" }) + text(x0 + 10, 84, "n₁ (air)", { size: 11.5, anchor: "start", fill: C.muted }) + text(x0 + 10, 254, "n₂ (glass, larger n)", { size: 11.5, anchor: "start", fill: C.muted });
  s += panel(30, "Into a higher-n medium: bends TOWARD the normal") + arrow(100, 78, 178, 164, { stroke: BLUE, marker: "ahb", w: 3 }) + arrow(180, 166, 220, 258, { stroke: BLUE, marker: "ahb", w: 3 });
  s += text(100, 138, "θ₁ larger", { size: 11.5, fill: BLUE, weight: "bold" }) + text(240, 214, "θ₂ smaller", { size: 11.5, fill: BLUE, weight: "bold", anchor: "start" });
  s += panel(400, "Out of glass beyond the critical angle: TIR") + arrow(430, 258, 548, 166, { stroke: RED, marker: "ahr", w: 3 }) + arrow(552, 164, 660, 258, { stroke: RED, marker: "ahr", w: 3 });
  s += text(580, 300, "sin θc = n₂/n₁  (n₁ > n₂)", { size: 12.5, weight: "bold" });
  s += text(200, 300, "n₁ sin θ₁ = n₂ sin θ₂   ·   f stays the same; v and λ change", { size: 12.5, weight: "bold" });
  FIGS["refraction"] = { svg: svg(760, 318, s, "Light bending toward the normal in a higher index medium and total internal reflection"), caption: "Light bends toward the normal when entering a higher-n (slower) medium and away when leaving it. Beyond the critical angle, light going from high n to low n is totally reflected." };
}
// wave anatomy
{
  let s = defs + title("Wave anatomy: transverse and longitudinal");
  const x0 = 60, y0 = 120;
  s += line(x0, y0, 700, y0, { stroke: "#bbb", w: 1.2, dash: "4 4" });
  let d = ""; for (let i = 0; i <= 100; i++) { const x = x0 + i * 6.2; d += (i ? " L " : "M ") + x + " " + (y0 - 42 * Math.sin(i / 100 * Math.PI * 4)); }
  s += path(d, { stroke: BLUE, w: 3.5 });
  s += line(x0 + 78, y0 - 42, x0 + 78, y0, { stroke: RED, w: 2, marker: "ahr" }) + text(x0 + 64, y0 - 18, "A", { size: 13, weight: "bold", fill: RED, anchor: "end" }) + line(x0 + 78, y0 - 62, x0 + 78 + 310, y0 - 62, { stroke: GREEN, w: 2, marker: "ahg" }).replace("", "") + text(x0 + 232, y0 - 70, "wavelength λ (crest to crest)", { size: 12.5, weight: "bold", fill: GREEN });
  s += text(380, 186, "transverse: medium moves ⟂ to travel direction (light, string)   ·   v = f λ   ·   f = 1/T", { size: 12 });
  s += text(380, 210, "longitudinal: medium moves ∥ to travel direction (sound)", { size: 12, weight: "bold" });
  for (let i = 0; i < 40; i++) { const x = 70 + i * 16 + 6 * Math.sin(i / 40 * Math.PI * 8); s += line(x, 224, x, 258, { stroke: BLUE, w: 2 }); }
  s += text(190, 276, "compression", { size: 11.5, fill: C.muted }) + text(310, 276, "rarefaction", { size: 11.5, fill: C.muted });
  FIGS["wave-anatomy"] = { svg: svg(760, 292, s, "Transverse wave with amplitude and wavelength labeled, and a longitudinal wave with compressions and rarefactions"), caption: "A transverse wave shows amplitude and wavelength directly. In a longitudinal wave (sound) the same ideas apply, but crests become compressions and troughs become rarefactions." };
}
// diffraction
{
  let s = defs + title("Diffraction: spreading is largest when wavelength is comparable to the opening");
  const panel = (x0, wide, ttl, note) => {
    let g = text(x0 + 160, 46, ttl, { size: 12.5, weight: "bold" });
    const gap = wide ? 100 : 26; const top = 150 - gap / 2, bot = 150 + gap / 2;
    g += rect(x0 + 100, 60, 10, top - 60, { fill: "#777", stroke: "#555", rx: 1 }) + rect(x0 + 100, bot, 10, 270 - bot, { fill: "#777", stroke: "#555", rx: 1 });
    for (let i = 0; i < 5; i++) g += line(x0 + 20 + i * 14, 70, x0 + 20 + i * 14, 230, { stroke: BLUE, w: 1.8 });
    if (wide) { [0, 1, 2].forEach((i) => g += line(x0 + 160 + i * 30, top + 6, x0 + 160 + i * 30, bot - 6, { stroke: BLUE, w: 1.8 })); }
    else for (let i = 0; i < 3; i++) g += path(`M ${x0 + 130 + i * 32} ${150 - 34 - i * 14} A ${34 + i * 32} ${34 + i * 32} 0 0 1 ${x0 + 130 + i * 32} ${150 + 34 + i * 14}`, { stroke: BLUE, w: 1.8 });
    return g + text(x0 + 160, 290, note, { size: 11.5, fill: C.muted });
  };
  s += panel(30, true, "λ << opening: little spreading", "waves mostly continue straight");
  s += panel(400, false, "λ ≈ opening: strong spreading", "waves fan out into the 'shadow'");
  FIGS["diffraction"] = { svg: svg(760, 308, s, "Waves passing through a wide opening with little spreading and a narrow opening with strong spreading"), caption: "Diffraction becomes noticeable when the wavelength is comparable to or larger than the opening. That is why you can hear around a corner (long sound waves) but not see around it (short light waves)." };
}
// spectra
{
  let s = defs + title("Atomic spectra: the same lines appear bright (emission) or dark (absorption)");
  const spec = (y, label, f) => { let g = text(24, y + 22, label, { size: 12, weight: "bold", anchor: "start" }); const grad = `<defs><linearGradient id="sp${y}" x1="0" x2="1">${["#7a00ff", "#0000ff", "#00c8ff", "#00ff40", "#ffee00", "#ff8800", "#ff0000"].map((c, i) => `<stop offset="${i / 6}" stop-color="${c}"/>`).join("")}</linearGradient></defs>`; g += grad; g += rect(190, y, 520, 44, { fill: f === "cont" ? `url(#sp${y})` : "#000", stroke: "#444", rx: 2 }); return g; };
  const lines = [[0.12, "#a040ff"], [0.2, "#4040ff"], [0.42, "#00b8e0"], [0.78, "#ff3030"]];
  s += spec(52, "Continuous\n(hot solid)", "cont");
  s += spec(120, "Emission\n(hot gas)", "em") + lines.map(([f, c]) => rect(190 + f * 520 - 2, 120, 4, 44, { fill: c, stroke: "none", rx: 0 })).join("");
  s += spec(188, "Absorption\n(cool gas in\nfront of a lamp)", "cont") + lines.map(([f]) => rect(190 + f * 520 - 2, 188, 4, 44, { fill: "#000", stroke: "none", rx: 0 })).join("");
  s += text(450, 256, "violet ← wavelength → red", { size: 11.5, fill: C.muted });
  s += rect(60, 270, 640, 50, NOTE) + text(380, 292, "Each line = a photon from one specific energy-level jump: E_photon = hf = E_upper − E_lower.", { size: 12.5, weight: "bold" }) + text(380, 311, "The dark absorption lines sit at exactly the same wavelengths as that gas's emission lines.", { size: 12 });
  FIGS["spectra-types"] = { svg: svg(760, 332, s, "Continuous, emission and absorption spectra compared"), caption: "A hot dense object gives a continuous spectrum. A hot gas emits only specific bright lines; a cool gas in front of a continuous source absorbs those same wavelengths, leaving dark lines." };
}
// decay penetration
{
  let s = defs + title("Types of radiation and what stops them");
  const src = circle(60, 130, 18, { fill: "#f6e27a", stroke: "#b08d1a" }) + text(60, 135, "☢", { size: 18 });
  s += src;
  const barrier = (x, w, col, lab) => rect(x, 60, w, 140, { fill: col, stroke: "#555", rx: 2 }) + text(x + w / 2, 222, lab, { size: 11, weight: "bold" });
  s += barrier(270, 18, "#f4efe0", "paper") + barrier(400, 26, "#c9ccd1", "aluminum (few mm)") + barrier(550, 50, "#6c7075", "lead / thick concrete");
  s += arrow(82, 90, 268, 90, { stroke: RED, marker: "ahr", w: 3 }) + text(135, 82, "α (He nucleus)", { size: 11, fill: RED, weight: "bold" }) + circle(270, 90, 5, { fill: RED });
  s += arrow(82, 130, 398, 130, { stroke: BLUE, marker: "ahb", w: 3 }) + text(135, 122, "β (electron / positron)", { size: 11, fill: BLUE, weight: "bold", anchor: "start" });
  s += arrow(82, 170, 548, 170, { stroke: GREEN, marker: "ahg", w: 3 }) + text(135, 162, "γ (photon)", { size: 11, fill: GREEN, weight: "bold", anchor: "start" });
  s += text(390, 252, "Penetration: γ ≫ β ≫ α", { size: 13, weight: "bold" });
  s += rect(60, 266, 640, 58, NOTE) + text(380, 288, "α: A−4, Z−2    ·    β⁻: A same, Z+1 (n → p)    ·    β⁺: A same, Z−1 (p → n)    ·    γ: no change in A or Z", { size: 11.5, weight: "bold" }) + text(380, 310, "Alpha is the most ionizing (damages tissue) but the easiest to block; gamma is the most penetrating.", { size: 11.5 });
  FIGS["decay-penetration"] = { svg: svg(760, 340, s, "Alpha, beta and gamma radiation penetrating paper, aluminum and lead"), caption: "Alpha particles are stopped by paper, beta particles by thin metal, and gamma rays need dense shielding such as lead. The more ionizing the radiation, the less it penetrates." };
}
// half-life
{
  let s = defs + title("Radioactive half-life: exponential decay");
  const x0 = 80, y0 = 230, w = 400, h = 170;
  s += axes(x0, y0, w, h, "time (in half-lives)", "amount N remaining");
  const X = (t) => x0 + t * w / 5, Y = (n) => y0 - n * h;
  let d = ""; for (let i = 0; i <= 80; i++) { const t = i / 16; d += (i ? " L " : "M ") + X(t) + " " + Y(Math.pow(0.5, t)); } s += path(d, { stroke: RED, w: 3.5 });
  [0, 1, 2, 3, 4].forEach((n) => { s += circle(X(n), Y(Math.pow(.5, n)), 5, { fill: BLUE }) + line(X(n), y0, X(n), y0 + 4, {}) + text(X(n), y0 + 16, String(n), { size: 11 }) + text(X(n) + 10, Y(Math.pow(.5, n)) - 10, ["N₀", "N₀/2", "N₀/4", "N₀/8", "N₀/16"][n], { size: 11, weight: "bold", fill: BLUE, anchor: "start" }); });
  s += rect(520, 56, 220, 160, NOTE) + text(630, 80, "N = N₀ (½)ⁿ", { size: 15, weight: "bold" }) + text(630, 104, "n = t / T½", { size: 13 }) + text(630, 138, "Each half-life halves what is\nleft, no matter how much is\nleft. After 10 half-lives about\n0.1% remains.", { size: 12 });
  FIGS["half-life-curve"] = { svg: svg(760, 270, s, "Exponential decay curve with points after each half-life"), caption: "Every half-life cuts the remaining sample in half, so the curve never quite reaches zero. Count how many whole half-lives have elapsed first, then halve that many times." };
}
