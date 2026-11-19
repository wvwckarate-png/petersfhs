// Figures for the AP Physics 2 material added in units 11-12 (circuits, magnetism), placed inside the "New" boxes.
// Figures that would give away a worked example's answer are drawn as a setup (shown with the question) plus a
// solved version placed inside that example's hidden solution.
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, fig, dotX } from "./lib2.mjs";
export const FIGS = {};
const f1 = (n) => (Math.round(n * 10) / 10).toString();
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah" });
const g = (x, y, a, inner) => `<g transform="translate(${f1(x)} ${f1(y)})${a ? ` rotate(${a})` : ""}">${inner}</g>`;
const poly = (pts, o = {}) => `<polygon points="${pts.map(([x, y]) => f1(x) + "," + f1(y)).join(" ")}" fill="${o.fill || "none"}" stroke="${o.stroke || "none"}" stroke-width="${o.w || 1.5}"${o.opacity ? ` opacity="${o.opacity}"` : ""}/>`;
const head = (x, y, dx, dy, c = C.ink, s = 9) => { const L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L; return poly([[x + ux * s * 0.6, y + uy * s * 0.6], [x - ux * s * 0.6 - uy * s * 0.45, y - uy * s * 0.6 + ux * s * 0.45], [x - ux * s * 0.6 + uy * s * 0.45, y - uy * s * 0.6 - ux * s * 0.45]], { fill: c }); };
const W = (pts, o = {}) => path("M " + pts.map(([x, y]) => f1(x) + " " + f1(y)).join(" L "), { w: o.w || 2.2, stroke: o.stroke || C.ink, dash: o.dash });
const jn = (x, y) => circle(x, y, 4, { fill: C.ink });

// ---- schematic symbols, drawn along the x-axis from -hw to +hw around (0,0); place with g(x, y, angle, ...) ----
const zigPath = (hw, amp = 8, n = 6, lead = 12) => { let d = `M ${-hw} 0 L ${-hw + lead} 0`; const L = 2 * hw - 2 * lead; for (let i = 0; i < n; i++) d += ` L ${f1(-hw + lead + (i + 0.5) * L / n)} ${i % 2 ? amp : -amp}`; return d + ` L ${hw - lead} 0 L ${hw} 0`; };
const RES = (hw = 34) => path(zigPath(hw), { w: 2.2 });
const BAT = (hw = 30) => line(-hw, 0, -4, 0, { w: 2.2 }) + line(5, 0, hw, 0, { w: 2.2 }) + line(-4, -16, -4, 16, { w: 2.6 }) + line(5, -8, 5, 8, { w: 5 }); // long plate (+) on the left
const CAP = (hw = 30) => line(-hw, 0, -5, 0, { w: 2.2 }) + line(5, 0, hw, 0, { w: 2.2 }) + line(-5, -14, -5, 14, { w: 3 }) + line(5, -14, 5, 14, { w: 3 });
const BULB = (hw = 30, fill = "#fff", r = 15) => line(-hw, 0, -r, 0, { w: 2.2 }) + line(r, 0, hw, 0, { w: 2.2 }) + circle(0, 0, r, { fill, stroke: C.ink, w: 2.2 }) + path(`M ${-r} 0 L -5 0 C -14 -16, 14 -16, 5 0 L ${r} 0`, { w: 1.8 });
const SW = (hw = 30) => line(-hw, 0, -12, 0, { w: 2.2 }) + line(14, 0, hw, 0, { w: 2.2 }) + circle(-12, 0, 3, { fill: "#fff", stroke: C.ink, w: 2 }) + circle(14, 0, 3, { fill: "#fff", stroke: C.ink, w: 2 }) + line(-10, -2, 12, -16, { w: 2.4 });
const METER = (x, y, ch, r = 15, fill = "#fff") => circle(x, y, r, { fill, stroke: C.ink, w: 2.2 }) + text(x, y + 5.5, ch, { size: 15, weight: "bold" });
const VARARROW = path("M -16 14 L 14 -14", { w: 1.8, marker: "ah" });

// 1. symbol key
{
  let s = defs + title("Schematic symbols");
  const cells = [
    ["battery", "long line = + terminal", BAT(), true],
    ["resistor", "zigzag", RES()],
    ["bulb", "a resistor that glows", BULB()],
    ["switch (open)", "lowered = closed", SW()],
    ["capacitor", "two equal parallel lines", CAP()],
    ["ammeter", "measures current", "A"],
    ["voltmeter", "measures ΔV", "V"],
    ["variable resistor", "zigzag with arrow through it", RES() + VARARROW],
    ["variable capacitor", "capacitor with arrow through it", CAP() + VARARROW],
  ];
  cells.forEach(([name, sub, sym, plus], i) => {
    const cx = 130 + (i % 3) * 250, cy = 78 + Math.floor(i / 3) * 112;
    s += rect(cx - 112, cy - 36, 224, 100, { fill: "#fafaf7", stroke: "#ECEAE3", rx: 8 });
    if (sym === "A" || sym === "V") s += line(cx - 40, cy, cx - 15, cy, { w: 2.2 }) + line(cx + 15, cy, cx + 40, cy, { w: 2.2 }) + METER(cx, cy, sym);
    else s += g(cx, cy, 0, sym.replace(/-30 0/g, "-30 0"));
    if (plus) s += text(cx - 13, cy - 20, "+", { size: 13, weight: "bold" }) + text(cx + 14, cy - 12, "−", { size: 13, weight: "bold" });
    s += text(cx, cy + 34, name, { size: 13, weight: "bold" }) + text(cx, cy + 52, sub, { size: 11.5, fill: C.muted });
  });
  fig(FIGS, "circuit-symbol-key", 760, 382, s, "Standard circuit symbols: battery, resistor, bulb, switch, capacitor, ammeter, voltmeter, variable resistor and variable capacitor",
    "The standard schematic symbols. A battery's long line is its positive terminal, and any symbol with a diagonal arrow struck through it is the adjustable (variable) version of that element.");
}

// 2. shared loops
{
  let s = defs + title("One element can sit in more than one loop");
  const xL = 90, xM = 290, xR = 450, yT = 90, yB = 300, yc = (yT + yB) / 2;
  // wires
  s += W([[xL, yc - 30], [xL, yT], [150, yT]]) + g(185, yT, 0, RES(35)) + W([[220, yT], [xR, yT], [xR, yc - 35]]) + W([[xR, yc + 35], [xR, yB], [xL, yB], [xL, yc + 30]]);
  s += g(xL, yc, 90, BAT(30)) + text(xL - 24, yc - 12, "+", { size: 13, weight: "bold" }) + text(xL - 30, yc + 6, "𝓔", { size: 15, weight: "bold", anchor: "end" });
  s += W([[xM, yT], [xM, yc - 35]]) + g(xM, yc, 90, RES(35)) + W([[xM, yc + 35], [xM, yB]]) + g(xR, yc, 90, RES(35));
  s += jn(xM, yT) + jn(xM, yB);
  s += text(185, yT - 18, "R₁", { size: 14, weight: "bold" }) + text(xM + 16, yc + 5, "R₂", { size: 14, weight: "bold", anchor: "start" }) + text(xR + 16, yc + 5, "R₃", { size: 14, weight: "bold", anchor: "start" });
  // loops
  const loop = (x1, y1, x2, y2, c, lab, lx, ly) => rect(x1, y1, x2 - x1, y2 - y1, { stroke: c, w: 2.5, rx: 14 }).replace("/>", ' stroke-dasharray="8 5"/>') + text(lx, ly, lab, { size: 13, weight: "bold", fill: c });
  s += loop(xL + 20, yT + 20, xM - 20, yB - 20, BLUE, "Loop 1", 190, yc + 5);
  s += loop(xM + 54, yT + 20, xR - 20, yB - 20, GREEN, "Loop 3", (xM + 54 + xR - 20) / 2, yc + 5);
  s += loop(xL - 46, yT - 44, xR + 50, yB + 22, PURPLE, "Loop 2 (around the outside)", (xL + xR) / 2, yB + 44);
  s += rect(530, 70, 212, 250, NOTE) + text(636, 94, "Each loop → one", { size: 13, weight: "bold" }) + text(636, 112, "loop-rule equation", { size: 13, weight: "bold" });
  s += text(546, 144, "Loop 1: 𝓔, R₁, R₂", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" }) + text(546, 168, "Loop 2: 𝓔, R₁, R₃", { size: 12.5, weight: "bold", fill: PURPLE, anchor: "start" }) + text(546, 192, "Loop 3: R₂, R₃", { size: 12.5, weight: "bold", fill: GREEN, anchor: "start" });
  s += text(636, 226, "Shared elements\ntie the equations together:\n𝓔 and R₁ in loops 1 and 2,\nR₂ in 1 and 3, R₃ in 2 and 3", { size: 11.5 });
  fig(FIGS, "shared-loops", 760, 372, s, "A battery and R1 feeding parallel resistors R2 and R3, with the three closed loops outlined in different colors",
    "Three closed loops run through this circuit. The battery and R₁ belong to loops 1 and 2, R₂ to loops 1 and 3, and R₃ to loops 2 and 3, so the loop equations share unknowns and must be solved together.");
}

// 3. short circuit (setup + solved)
const shortCkt = (solved) => {
  let s = defs + title(solved ? "After the wire is added: B and C are shorted" : "Bulb A in series with parallel bulbs B and C; a wire is added across B");
  const xL = 80, xB = 400, xC = 560, yT = 80, yB = 290, yc = (yT + yB) / 2;
  const lit = "#ffe680", dark = "#8f8f8f";
  s += W([[xL, yc - 30], [xL, yT], [180, yT]]) + g(215, yT, 0, BULB(35, solved ? lit : "#fff")) + W([[250, yT], [xC, yT], [xC, yc - 35]]) + W([[xC, yc + 35], [xC, yB], [xL, yB], [xL, yc + 30]]);
  s += W([[xB, yT], [xB, yc - 35]]) + W([[xB, yc + 35], [xB, yB]]);
  s += g(xB, yc, 90, BULB(35, solved ? dark : "#fff")) + g(xC, yc, 90, BULB(35, solved ? dark : "#fff"));
  s += g(xL, yc, 90, BAT(30)) + text(xL - 24, yc - 12, "+", { size: 13, weight: "bold" }) + text(xL - 30, yc + 6, "𝓔", { size: 15, weight: "bold", anchor: "end" });
  s += jn(xB, yT) + jn(xB, yB);
  s += text(215, yT - 24, solved ? "A (bright)" : "A", { size: 15, weight: "bold" }) + text(xB + 22, yc + 5, "B", { size: 15, weight: "bold", anchor: "start" }) + text(xC + 22, yc + 5, "C", { size: 15, weight: "bold", anchor: "start" });
  // shorting wire from above B to below B, bowed to the left
  s += path(`M ${xB} ${yT + 22} L ${xB - 70} ${yT + 22} L ${xB - 70} ${yB - 22} L ${xB} ${yB - 22}`, { stroke: GOLD, w: 4.5 }) + jn(xB, yT + 22) + jn(xB, yB - 22);
  s += text(xB - 80, yc - 8, "ideal wire", { size: 12.5, weight: "bold", fill: GOLD, anchor: "end" }) + text(xB - 80, yc + 10, "(ΔV = 0 along it)", { size: 12, fill: GOLD, anchor: "end" });
  if (solved) {
    s += A(150, yT + 16, 190, yT + 16, RED, 2.2) + text(170, yT + 36, "I = 𝓔/R", { size: 12.5, weight: "bold", fill: RED });
    s += text(xB + 22, yc + 24, "dark: ΔV = 0, I = 0", { size: 11.5, fill: C.muted, anchor: "start" }) + text(xC + 22, yc + 24, "dark", { size: 11.5, fill: C.muted, anchor: "start" });
    s += text(215, yB + 30, "Only A's resistance is left: I = 𝓔/R, and A's power rises from 𝓔²/(2.25R) to 𝓔²/R", { size: 12, weight: "bold" }).replace('x="215"', 'x="320"').replace(/x="215"/g, 'x="320"');
  } else {
    s += text(320, yB + 30, "All three bulbs are identical, with resistance R. The battery is ideal.", { size: 12, fill: C.muted });
  }
  return s;
};
fig(FIGS, "short-circuit-setup", 760, 340, shortCkt(false), "Battery in series with bulb A and a parallel pair of bulbs B and C, with an ideal wire connected across bulb B",
  "The setup for the worked example: identical bulbs, with an ideal wire connected across bulb B. Look at which two junctions that wire joins before deciding what each bulb does.");
fig(FIGS, "short-circuit-solved", 760, 340, shortCkt(true), "The same circuit after the shorting wire is added: bulbs B and C dark, bulb A bright, current E over R through A and the wire",
  "The wire joins the two junctions that both B and C connect to, so ΔV = 0 across both and they go dark. All the current, 𝓔/R, flows through A and the wire.");

// 4. ohmic vs non-ohmic
const filament = (() => { // monotone cubic through the worked-example points (V, A)
  const P = [[0, 0], [2, 0.2], [4, 0.3], [6, 0.36]];
  const d = P.map((p, i) => { if (i === 0) return (P[1][1] - P[0][1]) / 2 * 1.25; if (i === P.length - 1) return (P[i][1] - P[i - 1][1]) / 2 * 0.8; return ((P[i + 1][1] - P[i][1]) / 2 + (P[i][1] - P[i - 1][1]) / 2) / 2; });
  return (v) => { let i = Math.min(2, Math.floor(v / 2)); const t = (v - P[i][0]) / 2, h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2; return h00 * P[i][1] + h10 * 2 * d[i] + h01 * P[i + 1][1] + h11 * 2 * d[i + 1]; };
})();
{
  let s = defs + title("Ohmic vs. non-ohmic: current vs. potential difference");
  const x0 = 90, y0 = 300, w = 400, h = 240;
  s += axes(x0, y0, w, h, "potential difference ΔV", "current I");
  const X = (v) => x0 + v / 7 * w, Y = (i) => y0 - i / 0.42 * h;
  let d = ""; for (let k = 0; k <= 60; k++) { const v = k / 60 * 6.6; d += (k ? " L " : "M ") + f1(X(v)) + " " + f1(Y(0.04 * v)); } s += path(d, { stroke: BLUE, w: 3.5 });
  let e = ""; for (let k = 0; k <= 60; k++) { const v = k / 60 * 6.3; e += (k ? " L " : "M ") + f1(X(v)) + " " + f1(Y(filament(Math.min(v, 6)) + (v > 6 ? (v - 6) * 0.025 : 0))); } s += path(e, { stroke: RED, w: 3.5 });
  // chord to one point on the curve
  const pv = 4.6, pi = filament(pv);
  s += line(X(0), Y(0), X(pv), Y(pi), { stroke: RED, w: 1.6, dash: "5 4" }) + circle(X(pv), Y(pi), 5, { fill: RED });
  s += text(X(5.4), Y(0.04 * 5.4) + 40, "ohmic resistor:", { size: 12.5, weight: "bold", fill: BLUE, anchor: "middle" }) + text(X(5.4), Y(0.04 * 5.4) + 56, "straight line through 0", { size: 12, fill: BLUE });
  s += text(X(4.3), Y(0.405), "filament bulb: bends over", { size: 12.5, weight: "bold", fill: RED }) + text(X(4.3), Y(0.405) + 16, "(less steep as it heats up)", { size: 12, fill: RED });
  s += text(X(2.2), Y(0.27), "I/ΔV at this point = 1/R", { size: 11.5, fill: RED, anchor: "end" }) + text(X(2.2), Y(0.27) + 15, "(line from the origin)", { size: 11.5, fill: RED, anchor: "end" });
  s += rect(530, 70, 212, 170, NOTE) + text(636, 94, "slope = 1/R", { size: 14, weight: "bold" }) + text(636, 122, "Steeper line = smaller R.\n\nStraight through origin:\nR constant (ohmic).\n\nCurving over: ΔV/I grows,\nso R rises (non-ohmic).", { size: 12 });
  fig(FIGS, "ohmic-vs-filament", 760, 340, s, "Current versus potential difference: a straight line through the origin for a resistor and a curve that bends over for a filament bulb",
    "On an I vs. ΔV graph, an ohmic resistor gives a straight line through the origin with slope 1/R. A filament's line bends over because its resistance rises as it heats; at any point, R = ΔV/I, read from the line to the origin, not from the tangent.");
}
{
  let s = defs + title("The worked example's data: element 1 vs. element 2");
  const x0 = 90, y0 = 300, w = 420, h = 240;
  s += axes(x0, y0, w, h, "ΔV (V)", "") + text(x0 - 52, y0 - h / 2, "I (A)", { size: 12, weight: "bold", rotate: -90 });
  const X = (v) => x0 + v / 7 * w, Y = (i) => y0 - i / 0.4 * h;
  for (let v = 1; v <= 7; v++) s += line(X(v), y0, X(v), y0 + 5, { w: 1.5 }) + text(X(v), y0 + 18, String(v), { size: 11.5 });
  for (let k = 1; k <= 4; k++) { const i = k * 0.1; s += line(x0 - 5, Y(i), x0, Y(i), { w: 1.5 }) + text(x0 - 9, Y(i) + 4, i.toFixed(2), { size: 11.5, anchor: "end" }) + line(x0, Y(i), x0 + w, Y(i), { stroke: "#eee", w: 1 }); }
  s += text(x0 - 9, y0 + 4, "0", { size: 11.5, anchor: "end" });
  s += line(X(0), Y(0), X(7), Y(0.28), { stroke: BLUE, w: 3 });
  let e = ""; for (let k = 0; k <= 60; k++) { const v = k / 60 * 6; e += (k ? " L " : "M ") + f1(X(v)) + " " + f1(Y(filament(v))); } s += path(e, { stroke: RED, w: 3 });
  [[2, 0.08], [4, 0.16], [6, 0.24]].forEach(([v, i]) => s += circle(X(v), Y(i), 5.5, { fill: BLUE, stroke: "#fff", w: 1.5 }));
  [[2, 0.2, "10 Ω"], [4, 0.3, "13 Ω"], [6, 0.36, "17 Ω"]].forEach(([v, i, r]) => s += circle(X(v), Y(i), 5.5, { fill: RED, stroke: "#fff", w: 1.5 }) + text(X(v) - 2, Y(i) - 12, r, { size: 11.5, weight: "bold", fill: RED, anchor: "end" }));
  s += text(X(5.3), Y(0.115), "element 1: straight through origin", { size: 12, weight: "bold", fill: BLUE }) + text(X(5.3), Y(0.115) + 15, "slope = 0.040 A/V → R = 25 Ω (ohmic)", { size: 12, fill: BLUE });
  s += rect(540, 70, 202, 150, NOTE) + text(641, 94, "element 2 (filament)", { size: 13, weight: "bold", fill: RED }) + text(641, 120, "curves over; ΔV/I rises\n10 Ω → 13 Ω → 17 Ω\n(non-ohmic)", { size: 12 }) + text(641, 186, "Read 1/R from the slope,\nnot R itself.", { size: 12, fill: C.muted });
  fig(FIGS, "ohmic-data-graph", 760, 340, s, "Plot of the worked example data: a straight line for element 1 and a bending curve for element 2",
    "Element 1's points lie on a straight line through the origin (slope 0.040 A/V, so R = 25 Ω). Element 2's points bend over, and the ratio ΔV/I climbs from 10 Ω to 17 Ω as the filament heats.");
}

// 5. meters
{
  let s = defs + title("Ammeter in series, voltmeter in parallel");
  const xL = 90, xR = 430, yT = 90, yB = 240, yc = (yT + yB) / 2;
  s += g(xL, yc, 90, BAT(35)) + text(xL - 24, yc - 12, "+", { size: 13, weight: "bold" }) + text(xL - 30, yc + 6, "12 V", { size: 13, weight: "bold", anchor: "end" });
  s += W([[xL, yc - 35], [xL, yT], [210, yT]]) + g(250, yT, 0, RES(40)) + W([[290, yT], [xR, yT], [xR, yc - 15]]) + METER(xR, yc, "A") + W([[xR, yc + 15], [xR, yB], [310, yB]]) + g(260, yB, 0, RES(50)) + W([[210, yB], [xL, yB], [xL, yc + 35]]);
  s += text(250, yT - 20, "R₁ = 4.0 Ω", { size: 13, weight: "bold" }) + text(260, yB - 18, "R₂ = 8.0 Ω", { size: 13, weight: "bold" });
  // voltmeter across R2
  s += jn(200, yB) + jn(320, yB) + W([[200, yB], [200, yB + 55], [245, yB + 55]]) + METER(260, yB + 55, "V") + W([[275, yB + 55], [320, yB + 55], [320, yB]]);
  s += text(xR + 24, yc - 6, "ammeter: in series", { size: 12.5, weight: "bold", anchor: "start" }) + text(xR + 24, yc + 12, "ideal R = 0", { size: 12, fill: C.muted, anchor: "start" });
  s += text(340, yB + 50, "voltmeter: in parallel", { size: 12.5, weight: "bold", anchor: "start" }) + text(340, yB + 68, "across R₂, ideal R = ∞", { size: 12, fill: C.muted, anchor: "start" });
  s += rect(575, 60, 168, 150, NOTE) + text(659, 84, "Why ideal?", { size: 13, weight: "bold" }) + text(659, 108, "R = 0 ammeter adds\nno resistance to the loop.\n\nR = ∞ voltmeter draws\nno current.", { size: 12 });
  fig(FIGS, "meter-placement", 760, 330, s, "A 12 V battery in series with R1, an ammeter and R2, with a voltmeter connected across R2",
    "The ammeter is part of the loop, so the same current flows through it as through R₂. The voltmeter's leads touch the two ends of R₂ and read the potential difference between them without carrying current.");
}

// 6. RC graphs
{
  let s = defs + title("Charging and discharging: τ = RC is the reference time");
  const w = 260, h = 92, tmax = 4.2;
  const panel = (x0, y0, f, yl, top, mark, lab, c) => {
    const X = (t) => x0 + t / tmax * w, Y = (v) => y0 - v * h;
    let r = axes(x0, y0, w, h + 8, "", "") + text(x0 - 10, y0 - h / 2 + 4, yl, { size: 13, weight: "bold", anchor: "end" }) + text(x0 + w + 8, y0 + 5, "t", { size: 13, weight: "bold", anchor: "start" });
    r += line(x0, Y(1), x0 + w, Y(1), { stroke: "#ccc", w: 1, dash: "3 3" }) + text(x0 - 6, Y(1) + 4, top, { size: 11.5, anchor: "end" });
    r += line(X(1), y0, X(1), Y(1) - 4, { stroke: C.muted, w: 1.4, dash: "5 4" }) + text(X(1), y0 + 17, "τ", { size: 13, weight: "bold" }) + text(x0, y0 + 17, "0", { size: 11.5 });
    r += line(x0, Y(mark), X(1), Y(mark), { stroke: C.muted, w: 1.2, dash: "2 3" }) + circle(X(1), Y(mark), 4.5, { fill: c });
    let d = ""; for (let k = 0; k <= 80; k++) { const t = k / 80 * tmax; d += (k ? " L " : "M ") + f1(X(t)) + " " + f1(Y(f(t))); } r += path(d, { stroke: c, w: 3.2 });
    r += text(X(1) + 10, Y(mark) + (mark > 0.5 ? 18 : -8), lab, { size: 12, weight: "bold", fill: c, anchor: "start" });
    return r;
  };
  const xa = 110, xb = 470, ya = 168, yb = 340;
  s += text(380, 56, "CHARGING (from an uncharged capacitor)", { size: 13, weight: "bold", fill: BLUE });
  s += panel(xa, ya, (t) => 1 - Math.exp(-t), "Q", "Q_final", 0.632, "0.63 Q_final", BLUE);
  s += panel(xb, ya, (t) => Math.exp(-t), "I", "𝓔/R", 0.368, "0.37 (𝓔/R)", BLUE);
  s += line(30, 214, 730, 214, { stroke: C.line, w: 1.5 });
  s += text(380, 234, "DISCHARGING (from a fully charged capacitor)", { size: 13, weight: "bold", fill: RED });
  s += panel(xa, yb, (t) => Math.exp(-t), "Q", "Q₀", 0.368, "0.37 Q₀", RED);
  s += panel(xb, yb, (t) => Math.exp(-t), "|I|", "I₀ = ΔV₀/R", 0.368, "0.37 I₀", RED);
  s += text(xb + w - 4, yb - 50, "flows opposite to\nthe charging current", { size: 11.5, fill: C.muted, anchor: "end" });
  s += text(xa + w - 4, ya - 40, "Q_final = C𝓔", { size: 11.5, fill: C.muted, anchor: "end" });
  fig(FIGS, "rc-four-graphs", 760, 372, s, "Four graphs against time: charge and current while charging, and charge and current while discharging, with one time constant marked",
    "While charging, Q climbs to 63% of its final value in one time constant while the current decays from 𝓔/R. While discharging, Q, ΔV_C and the current all fall to 37% of their starting values in one τ, and the current flows the opposite way.");
}

// field-line tracing for a two-pole magnet model (N = +, S = -)
const poleField = (poles) => (x, y) => { let bx = 0, by = 0; for (const [px, py, q] of poles) { const dx = x - px, dy = y - py, r2 = dx * dx + dy * dy, r3 = Math.pow(r2, 1.5); bx += q * dx / r3; by += q * dy / r3; } return [bx, by]; };
const trace = (B, x, y, sgn, stop, step = 2, max = 3000) => { const pts = [[x, y]]; for (let k = 0; k < max; k++) { const [bx, by] = B(x, y); const L = Math.hypot(bx, by); x += sgn * step * bx / L; y += sgn * step * by / L; pts.push([x, y]); if (stop(x, y)) break; } return pts; };
const polyline = (pts, o) => path("M " + pts.map(([x, y]) => f1(x) + " " + f1(y)).join(" L "), o);
const arrowOn = (pts, frac, c) => { const i = Math.max(1, Math.min(pts.length - 2, Math.round(pts.length * frac))); return head(pts[i][0], pts[i][1], pts[i + 1][0] - pts[i - 1][0], pts[i + 1][1] - pts[i - 1][1], c, 10); };
const compass = (x, y, ang) => { const ux = Math.cos(ang), uy = Math.sin(ang), px = -uy, py = ux, L = 15, Wd = 4.5; return circle(x, y, 19, { fill: "#fff", stroke: "#888", w: 1.5 }) + poly([[x + ux * L, y + uy * L], [x + px * Wd, y + py * Wd], [x - px * Wd, y - py * Wd]], { fill: RED }) + poly([[x - ux * L, y - uy * L], [x + px * Wd, y + py * Wd], [x - px * Wd, y - py * Wd]], { fill: "#fff", stroke: "#777", w: 1.2 }) + circle(x, y, 2, { fill: C.ink }); };

// 7. compasses around a bar magnet
{
  let s = defs + title("Compass needles trace the field of a bar magnet");
  const cx = 330, cy = 190, hl = 100, poles = [[cx + 78, cy, 1], [cx - 78, cy, -1]];
  const B = poleField(poles);
  const inBox = (x, y) => x > 22 && x < 640 && y > 44 && y < 338;
  let lines = "";
  const addRun = (pts) => { let run = [], runs = []; for (const p of pts) { if (Math.abs(p[0] - cx) < hl + 1 && Math.abs(p[1] - cy) < 21) { if (run.length > 1) runs.push(run); run = []; } else run.push(p); } if (run.length > 1) runs.push(run);
    runs.forEach((r) => { lines += polyline(r, { stroke: BLUE, w: 1.8 }); if (r.length > 30) lines += arrowOn(r, 0.5, BLUE); }); };
  const stopN = (x, y) => !inBox(x, y) || Math.hypot(x - poles[1][0], y - poles[1][1]) < 6, stopS = (x, y) => !inBox(x, y) || Math.hypot(x - poles[0][0], y - poles[0][1]) < 6;
  for (const a of [-160, -138, -116, -95, -45, -20, 20, 45, 95, 116, 138, 160]) { const t = a * Math.PI / 180; addRun(trace(B, poles[0][0] + 6 * Math.cos(t), poles[0][1] + 6 * Math.sin(t), 1, stopN)); }
  for (const a of [-160, -135, 135, 160]) { const t = a * Math.PI / 180; addRun(trace(B, poles[1][0] + 6 * Math.cos(t), poles[1][1] + 6 * Math.sin(t), -1, stopS).reverse()); }
  // axis lines
  lines += line(cx + hl, cy, 640, cy, { stroke: BLUE, w: 1.8 }) + head(600, cy, 1, 0, BLUE, 10) + line(22, cy, cx - hl, cy, { stroke: BLUE, w: 1.8 }) + head(60, cy, 1, 0, BLUE, 10);
  s += `<clipPath id="cpm"><rect x="20" y="40" width="622" height="300"/></clipPath><g clip-path="url(#cpm)">${lines}</g>`;
  s += rect(cx - hl, cy - 20, hl, 40, { fill: "#a9c8f0", stroke: "#555", rx: 2 }) + rect(cx, cy - 20, hl, 40, { fill: "#f4b0a0", stroke: "#555", rx: 2 }) + text(cx - hl / 2, cy + 6, "S", { size: 17, weight: "bold" }) + text(cx + hl / 2, cy + 6, "N", { size: 17, weight: "bold" });
  for (const [x, y] of [[cx, cy - 92], [cx, cy + 92], [cx + 175, cy - 80], [cx - 175, cy - 80], [cx + 175, cy + 80], [cx - 175, cy + 80], [cx + 205, cy], [cx - 205, cy]]) { const [bx, by] = B(x, y); s += compass(x, y, Math.atan2(by, bx)); }
  s += rect(560, 62, 186, 120, NOTE) + text(653, 84, "Red = north end", { size: 13, weight: "bold" }) + text(653, 106, "It points along B:\naway from N, toward S.\nBeside the middle,\nit points from N to S.", { size: 12 });
  fig(FIGS, "compass-bar-magnet", 760, 352, s, "Bar magnet with field lines and eight small compasses whose north ends point along the field",
    "Each compass is a tiny dipole that lines up with the field where it sits, so its north end (red) points along the field line: away from the N pole, toward the S pole, and from N to S alongside the magnet.");
}

// 8. Earth as a dipole
{
  let s = defs + title("Earth's field: like a bar magnet with its S pole in the north");
  const cx = 250, cy = 210, R = 112, poles = [[cx, cy + 55, 1], [cx, cy - 55, -1]]; // N pole (source) in the south
  const B = poleField(poles);
  let lines = "";
  for (const a of [-30, 8, 26, 154, 172, 210]) {
    const t = a * Math.PI / 180; const pts = trace(B, poles[0][0] + 5 * Math.cos(t), poles[0][1] + 5 * Math.sin(t), 1, (x, y) => Math.hypot(x - poles[1][0], y - poles[1][1]) < 5 || x < 10 || x > 490 || y < 30 || y > 430, 1.5, 4000);
    const outside = pts.filter(([x, y]) => Math.hypot(x - cx, y - cy) > R + 1);
    lines += polyline(pts, { stroke: BLUE, w: 1.8 });
    if (outside.length > 30) { const exitIdx = pts.findIndex(([x, y]) => Math.hypot(x - cx, y - cy) > R + 1); const seg = pts.slice(exitIdx).filter(([x, y]) => Math.hypot(x - cx, y - cy) > R + 1); lines += arrowOn(seg, 0.18, BLUE) + arrowOn(seg, 0.82, BLUE); }
  }
  s += `<clipPath id="cpe"><rect x="10" y="40" width="480" height="330"/></clipPath><g clip-path="url(#cpe)">${lines}</g>`;
  s += circle(cx, cy, R, { fill: "#e3f0e0", stroke: "#5a8a5a", w: 2.5 }) + line(cx - R, cy, cx + R, cy, { stroke: "#9bb79b", w: 1.2, dash: "4 4" }) + text(cx + R - 6, cy - 6, "equator", { size: 11.5, fill: "#5a7a5a", anchor: "end" });
  s += rect(cx - 16, cy - 70, 32, 70, { fill: "#a9c8f0", stroke: "#555", rx: 2 }) + rect(cx - 16, cy, 32, 70, { fill: "#f4b0a0", stroke: "#555", rx: 2 }) + text(cx, cy - 30, "S", { size: 16, weight: "bold" }) + text(cx, cy + 42, "N", { size: 16, weight: "bold" });
  s += text(cx, cy - R - 12, "Geographic North Pole", { size: 12.5, weight: "bold" }) + circle(cx, cy - R, 4, { fill: C.ink }) + circle(cx, cy + R, 4, { fill: C.ink }) + rect(cx - 74, cy + R + 10, 148, 20, { fill: "#fff", rx: 4 }) + text(cx, cy + R + 25, "Geographic South Pole", { size: 12.5, weight: "bold" });
  // compass at 40 degrees north latitude, right side, needle tangent pointing toward geographic north
  const lat = 40 * Math.PI / 180, kx = cx + (R + 24) * Math.cos(lat), ky = cy - (R + 24) * Math.sin(lat);
  s += compass(kx, ky, Math.atan2(-Math.cos(lat), -Math.sin(lat)));
  s += text(kx + 26, ky + 4, "compass", { size: 12, weight: "bold", anchor: "start" });
  s += rect(510, 70, 234, 230, NOTE) + text(627, 94, "Why the compass points north", { size: 13, weight: "bold" }) + text(627, 120, "Its north end is attracted to\na magnetic SOUTH pole, and\nthat is what sits under the\ngeographic North Pole.", { size: 12 }) + text(627, 210, "Field lines leave Earth in the\nSouthern Hemisphere and\nre-enter near the North Pole.", { size: 12 });
  s += text(627, 284, "(simplified: the real magnetic axis\nis tilted about 10° from the spin axis)", { size: 11, fill: C.muted });
  fig(FIGS, "earth-dipole", 760, 372, s, "Earth drawn as a dipole, with an imaginary bar magnet whose south pole is near the geographic North Pole and field lines looping from south to north",
    "Earth's field looks like that of a bar magnet whose south pole lies under the geographic North Pole. Field lines leave the Southern Hemisphere and re-enter in the north, so a compass's north end points toward geographic north.");
}

// 9. ferromagnetic domains (power diagram: same sites, aligned domains given more weight)
{
  const rng = (() => { let a = 12345; return () => ((a = (a * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff); })();
  const Wd = 300, Hd = 200;
  const sites = []; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) sites.push([(i + 0.2 + 0.6 * rng()) * Wd / 4, (j + 0.2 + 0.6 * rng()) * Hd / 4]);
  const angs = [200, 75, 310, 150, 20, 250, 110, 340, 185, 285, 45, 130, 230, 5, 170, 95].map((d) => d * Math.PI / 180);
  const clip = (P, a, b, c) => { const out = []; for (let i = 0; i < P.length; i++) { const p = P[i], q = P[(i + 1) % P.length], fp = a * p[0] + b * p[1] - c, fq = a * q[0] + b * q[1] - c; if (fp <= 0) out.push(p); if (fp * fq < 0) { const t = fp / (fp - fq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); } } return out; };
  const cells = (wts) => sites.map((p, i) => { let P = [[0, 0], [Wd, 0], [Wd, Hd], [0, Hd]]; sites.forEach((q, j) => { if (i === j) return; // |x-p|^2 - wp <= |x-q|^2 - wq
    const a = 2 * (q[0] - p[0]), b = 2 * (q[1] - p[1]), c = (q[0] ** 2 + q[1] ** 2 - wts[j]) - (p[0] ** 2 + p[1] ** 2 - wts[i]); P = clip(P, a, b, c); }); return P; });
  const centroid = (P) => { let A = 0, x = 0, y = 0; for (let i = 0; i < P.length; i++) { const [x1, y1] = P[i], [x2, y2] = P[(i + 1) % P.length], k = x1 * y2 - x2 * y1; A += k; x += (x1 + x2) * k; y += (y1 + y2) * k; } return [x / (3 * A), y / (3 * A), Math.abs(A / 2)]; };
  const panel = (ox, oy, wts, dirs) => { let r = ""; cells(wts).forEach((P, i) => { if (P.length < 3) return; const [mx, my, ar] = centroid(P); const cosA = Math.cos(dirs[i]); const fill = cosA > 0.9 ? "#f6d2c4" : "#ece9e0"; r += poly(P.map(([x, y]) => [ox + x, oy + y]), { fill, stroke: "#8a8274", w: 1.6 }); const L = Math.min(34, Math.sqrt(ar) * 0.55); if (L > 13 && mx > 16 && mx < Wd - 16 && my > 16 && my < Hd - 16) r += A(ox + mx - Math.cos(dirs[i]) * L / 2, oy + my - Math.sin(dirs[i]) * L / 2, ox + mx + Math.cos(dirs[i]) * L / 2, oy + my + Math.sin(dirs[i]) * L / 2, cosA > 0.9 ? RED : C.ink, 2); }); return r + rect(ox, oy, Wd, Hd, { stroke: "#555", w: 2, rx: 0 }); };
  let s = defs + title("Domains in iron: random, then lined up by an external field");
  s += text(190, 56, "Unmagnetized iron", { size: 13, weight: "bold" }) + panel(40, 70, sites.map(() => 0), angs) + text(190, 292, "domains point every which way: net field ≈ 0", { size: 12, fill: C.muted });
  // after: domains near 'right' grow, others swing partly toward the right
  const dirs2 = angs.map((a) => { const d = Math.atan2(Math.sin(a), Math.cos(a)); return Math.abs(d) < 0.9 ? 0 : d * 0.35; });
  const wts2 = angs.map((a) => 1600 * Math.cos(a) + (Math.abs(Math.atan2(Math.sin(a), Math.cos(a))) < 0.9 ? 1400 : 0));
  s += text(570, 56, "Same iron in an external field", { size: 13, weight: "bold" }) + panel(420, 70, wts2, dirs2) + text(570, 292, "domains along B grow; the rest swing toward B", { size: 12, fill: C.muted });
  s += text(384, 175, "→", { size: 30, weight: "bold", fill: C.muted }) + text(384, 200, "apply B", { size: 11.5, fill: C.muted });
  s += A(470, 320, 680, 320, BLUE, 3) + text(575, 344, "external field B", { size: 12.5, weight: "bold", fill: BLUE });
  fig(FIGS, "ferro-domains", 760, 360, s, "Iron domains with randomly directed arrows, and the same iron in an external field with domains aligned to the right grown larger",
    "In unmagnetized iron the domains point in random directions and cancel. An external field makes the domains aligned with it grow and swings the others toward it, so the iron is strongly attracted. The alignment can remain after the field is removed, which makes a permanent magnet.");
}

// 10. field of a moving charge (setup + solved)
const movingQ = (solved) => {
  let s = defs + title(solved ? "Field of a moving proton: circles around its line of motion" : "Proton moving right: what is its field at P, Q and S?");
  const px = 200, py = 190;
  s += line(40, py, 520, py, { stroke: "#ddd", w: 1.2, dash: "3 4" }) + text(44, py - 8, "line of motion", { size: 11.5, fill: C.muted, anchor: "start" });
  const pts = { P: [px, py - 105], Q: [px, py + 105], S: [px + 230, py] };
  const r = (x, y, lab, lx, ly) => line(px + (x - px) * 0.14, py + (y - py) * 0.14, px + (x - px) * 0.82, py + (y - py) * 0.82, { stroke: C.muted, w: 1.8, dash: "6 4", marker: "ah" }) + text(lx, ly, lab, { size: 13, weight: "bold", fill: C.muted, italic: true });
  s += r(...pts.P, "r", px - 16, py - 50) + r(...pts.Q, "r", px - 16, py + 60) + r(...pts.S, "r", px + 110, py + 22);
  s += circle(px, py, 15, { fill: "#f4b0a0", stroke: "#555" }) + text(px, py + 6, "+", { size: 18, weight: "bold" }) + A(px + 20, py - 30, px + 90, py - 30, GREEN, 3) + text(px + 100, py - 25, "v", { size: 15, weight: "bold", fill: GREEN, anchor: "start" });
  const lab = (k, dx, dy) => text(pts[k][0] + dx, pts[k][1] + dy, k, { size: 15, weight: "bold", anchor: dx < 0 ? "end" : "start" });
  s += lab("P", -22, 6) + lab("Q", -22, 6) + lab("S", 4, -22);
  if (solved) {
    s += dotX(...pts.P, 12, false) + text(pts.P[0] + 20, pts.P[1] + 5, "B out of page", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" });
    s += dotX(...pts.Q, 12, true) + text(pts.Q[0] + 20, pts.Q[1] + 5, "B into page", { size: 12.5, weight: "bold", fill: BLUE, anchor: "start" });
    s += circle(...pts.S, 5, { fill: C.ink }) + text(pts.S[0], pts.S[1] + 28, "B = 0", { size: 13, weight: "bold", fill: BLUE }) + text(pts.S[0], pts.S[1] + 45, "(r parallel to v)", { size: 11.5, fill: C.muted });
    // inset: end-on view
    const ix = 640, iy = 190;
    s += rect(548, 62, 196, 268, { fill: "#f7f9fd", stroke: "#cdd8ea", rx: 10 }) + text(646, 84, "End-on view", { size: 13, weight: "bold" }) + text(646, 102, "(proton coming toward you)", { size: 11.5, fill: C.muted });
    [36, 62, 86].forEach((rr) => { s += circle(ix, iy, rr, { stroke: BLUE, w: 1.8 }); [0, 90, 180, 270].forEach((dg) => { const t = (dg + 45) * Math.PI / 180, x = ix + rr * Math.cos(t), y = iy - rr * Math.sin(t); s += head(x, y, -Math.sin(t), -Math.cos(t), BLUE, 9); }); });
    s += circle(ix, iy, 13, { fill: "#f4b0a0", stroke: "#555" }) + text(ix, iy + 5, "+", { size: 15, weight: "bold" });
    s += text(646, 306, "counterclockwise circles,\nweaker farther out", { size: 11.5, fill: BLUE });
  } else {
    for (const k of ["P", "Q", "S"]) s += circle(...pts[k], 5, { fill: C.ink }) + text(pts[k][0] + (k === "S" ? 0 : 20), pts[k][1] + (k === "S" ? 28 : 5), "B = ?", { size: 13, weight: "bold", fill: BLUE, anchor: k === "S" ? "middle" : "start" });
    s += rect(548, 92, 196, 150, NOTE) + text(646, 116, "Right-hand rule", { size: 13, weight: "bold" }) + text(646, 142, "fingers along v,\ncurl toward r:\nthumb gives B\n(for a + charge)", { size: 12 });
    s += text(px, py + 150, "P and Q are the same distance from the proton; S is directly ahead.", { size: 12, fill: C.muted }).replace(`x="${px}"`, 'x="280"').replace(new RegExp(`x="${px}"`, "g"), 'x="280"');
  }
  return s;
};
fig(FIGS, "moving-charge-setup", 760, 352, movingQ(false), "A proton moving to the right with point P above it, Q below it, and S directly ahead, joined to it by position vectors r",
  "The setup: r is always drawn from the moving charge to the point where you want the field.");
fig(FIGS, "moving-charge-solved", 760, 352, movingQ(true), "The proton's field: out of the page above it, into the page below it, zero directly ahead, and counterclockwise circles in an end-on view",
  "A moving positive charge makes circular field lines around its line of motion: out of the page above it, into the page below it, and zero straight ahead or behind. An electron moving the same way reverses each nonzero direction.");

// 11. Hall effect (setup + solved)
const hall = (solved) => {
  let s = defs + title(solved ? "Hall effect: charge piles up until F_E balances F_B" : "Copper strip carrying current in a field into the page");
  const x0 = 110, x1 = 500, yT = 100, yB = 260, ym = (yT + yB) / 2;
  s += rect(x0, yT, x1 - x0, yB - yT, { fill: "#f1dcc6", stroke: "#a77", rx: 2, w: 2 });
  for (let i = 0; i < 7; i++) for (const y of [yT + 30, yB - 30]) s += dotX(x0 + 30 + i * 55, y, 6, true);
  s += W([[40, ym], [x0, ym]], { w: 3 }) + W([[x1, ym], [560, ym]], { w: 3 }) + A(46, ym - 16, 96, ym - 16, RED, 2.5) + text(70, ym - 26, "I", { size: 14, weight: "bold", fill: RED });
  s += text(x0 + 4, yT - 36, "B = 1.5 T into the page (×)", { size: 12, weight: "bold", fill: C.muted, anchor: "start" });
  [220, 330, 440].forEach((x) => s += circle(x, ym, 8, { fill: "#a9c8f0", stroke: "#555" }) + text(x, ym + 4, "−", { size: 12, weight: "bold" }) + A(x - 12, ym, x - 40, ym, BLUE, 2));
  s += text(300, yB + 20, "electrons drift left at 5.0×10⁻⁴ m/s", { size: 12, weight: "bold", fill: BLUE });
  // width marker just inside the left end
  s += line(x0 + 13, yT + 3, x0 + 13, yB - 3, { w: 1.5, marker: "ah" }) + line(x0 + 13, yB - 3, x0 + 13, yT + 3, { w: 1.5, marker: "ah" }) + text(x0 - 8, yT + 18, "w =", { size: 12.5, weight: "bold", anchor: "end" }) + text(x0 - 8, yT + 34, "2.0 cm", { size: 12.5, weight: "bold", anchor: "end" });
  s += jn(460, yT) + jn(460, yB) + W([[460, yT], [460, yT - 22], [640, yT - 22], [640, ym - 16]]) + METER(640, ym, "V") + W([[640, ym + 16], [640, yB + 40], [460, yB + 40], [460, yB]]) + text(662, ym + 5, "ΔV_H", { size: 13, weight: "bold", anchor: "start" });
  if (solved) {
    for (let i = 0; i < 8; i++) s += text(x0 + 22 + i * 48, yT + 15, "−", { size: 16, weight: "bold", fill: BLUE }) + text(x0 + 22 + i * 48, yB - 5, "+", { size: 15, weight: "bold", fill: RED });
    [167, 387].forEach((x) => s += A(x, yB - 18, x, yT + 24, GOLD, 2.2));
    s += text(174, ym + 44, "E", { size: 13, weight: "bold", fill: GOLD, anchor: "start" }) + text(394, ym + 44, "E", { size: 13, weight: "bold", fill: GOLD, anchor: "start" });
    s += A(330, ym - 11, 330, ym - 40, RED, 2.5) + text(338, ym - 26, "F_B", { size: 12.5, weight: "bold", fill: RED, anchor: "start" }) + A(330, ym + 11, 330, ym + 40, GREEN, 2.5) + text(338, ym + 36, "F_E", { size: 12.5, weight: "bold", fill: GREEN, anchor: "start" });
    s += rect(560, yB + 56, 186, 70, NOTE) + text(653, yB + 78, "On each electron:", { size: 12.5, weight: "bold" }) + text(653, yB + 98, "F_B = evB (up)\nF_E = eE (down)", { size: 12 });
    s += text(290, yB + 76, "top edge negative, bottom edge positive:", { size: 12.5, weight: "bold" }) + text(290, yB + 94, "the bottom edge is at higher potential", { size: 12.5, weight: "bold" });
  } else {
    s += text(x0 + 70, yT - 8, "top edge", { size: 11.5, fill: C.muted }) + text(x0 + 70, yB + 40, "bottom edge", { size: 11.5, fill: C.muted });
  }
  return s;
};
fig(FIGS, "hall-setup", 760, 320, hall(false), "Copper strip of width 2.0 cm with current to the right, electrons drifting left, a field into the page, and a voltmeter across its top and bottom edges",
  "The setup: conventional current flows right, so the electrons drift left through a field pointing into the page. The voltmeter measures the potential difference between the strip's top and bottom edges.");
fig(FIGS, "hall-solved", 760, 400, hall(true), "The Hall strip after charge separates: negative top edge, positive bottom edge, transverse field upward, and balanced magnetic and electric forces on an electron",
  "The magnetic force pushes the drifting electrons to the top edge. The separated charge sets up a field E pointing up, whose downward force on each electron grows until it cancels the magnetic force; then ΔV_H = vBw.");

// 12. two wires (setup + solved)
const twoWires = (solved) => {
  let s = defs + title(solved ? "Add the two fields at P as vectors" : "Two wires 0.10 m apart, 5.0 A each: field at the midpoint P");
  const panel = (ox, out2, lab) => {
    const x1 = ox + 90, x2 = ox + 270, y = 170, xp = ox + 180;
    let r = text(ox + 180, 58, lab, { size: 13, weight: "bold", fill: BLUE });
    [36, 64].forEach((rr) => r += circle(x1, y, rr, { stroke: "#8fb0e0", w: 1.5 }).replace("/>", ' stroke-dasharray="5 4"/>') + circle(x2, y, rr, { stroke: "#8fb0e0", w: 1.5 }).replace("/>", ' stroke-dasharray="5 4"/>'));
    if (solved) { // circulation arrows on the outer circles: CCW for out of page, CW for into page
      const circ = (cx, ccw) => [45, 135, 225, 315].map((dg) => { const t = dg * Math.PI / 180, x = cx + 64 * Math.cos(t), yy = y - 64 * Math.sin(t); return head(x, yy, ccw ? -Math.sin(t) : Math.sin(t), ccw ? -Math.cos(t) : Math.cos(t), "#5f86c8", 9); }).join("");
      r += circ(x1, true) + circ(x2, !out2);
    }
    r += dotX(x1, y, 13, false) + dotX(x2, y, 13, !out2);
    r += text(x1, y + 96, "wire 1", { size: 12.5, weight: "bold" }) + text(x1, y + 112, "out of page", { size: 11.5, fill: C.muted }) + text(x2, y + 96, "wire 2", { size: 12.5, weight: "bold" }) + text(x2, y + 112, out2 ? "out of page" : "into page", { size: 11.5, fill: C.muted });
    r += circle(xp, y, 4.5, { fill: C.ink }) + text(xp + 8, y + 22, "P", { size: 14, weight: "bold", anchor: "start" });
    r += line(x1, y + 132, x2, y + 132, { w: 1.3 }) + line(x1, y + 126, x1, y + 138, { w: 1.3 }) + line(x2, y + 126, x2, y + 138, { w: 1.3 }) + line(xp, y + 128, xp, y + 136, { w: 1.3 }) + text(ox + 135, y + 150, "0.050 m", { size: 11.5 }) + text(ox + 225, y + 150, "0.050 m", { size: 11.5 });
    if (solved) {
      const up = (dx, c, lab, side) => A(xp + dx, y - 6, xp + dx, y - 52, c, 3) + text(xp + dx + side * 9, y - 26, lab, { size: 13, weight: "bold", fill: c, anchor: side < 0 ? "end" : "start" });
      const dn = (dx, c, lab, side) => A(xp + dx, y + 6, xp + dx, y + 52, c, 3) + text(xp + dx + side * 9, y + 34, lab, { size: 13, weight: "bold", fill: c, anchor: side < 0 ? "end" : "start" });
      r += up(-9, RED, "B₁", -1) + (out2 ? dn(9, GREEN, "B₂", 1) : up(9, GREEN, "B₂", 1));
      r += rect(ox + 60, 326, 240, 30, NOTE) + text(ox + 180, 346, out2 ? "equal and opposite: B_net = 0" : "same direction: B_net = 4.0×10⁻⁵ T up", { size: 12.5, weight: "bold" });
    }
    return r;
  };
  s += panel(10, true, "(a) both currents out of the page") + line(380, 50, 380, 300, { stroke: C.line, w: 1.5 }) + panel(390, false, "(b) wire 1 out, wire 2 into the page");
  if (!solved) s += text(380, 350, "Each wire alone gives B = μ₀I/(2πr) at P. Dashed circles are field lines.", { size: 12, fill: C.muted });
  return s;
};
fig(FIGS, "two-wires-setup", 760, 366, twoWires(false), "Two pairs of parallel wires perpendicular to the page, 0.10 m apart, with midpoint P: both currents out of the page, and one out and one in",
  "The two cases of the worked example. Find each wire's field direction at P from the grip rule before adding.");
fig(FIGS, "two-wires-solved", 760, 370, twoWires(true), "At the midpoint the two fields cancel when both currents point out of the page, and add to 4.0 times ten to the minus 5 tesla upward when they are opposite",
  "Each wire gives 2.0×10⁻⁵ T at P. With both currents out of the page the fields point opposite ways and cancel; with opposite currents they point the same way and add.");

// 13. area vector and the sign of flux
{
  let s = defs + title("The area vector sets the sign of the flux: Φ = BA cos θ");
  const panel = (cx, kind, lab1, lab2) => {
    let r = "";
    const ys = [100, 140, 180, 220, 260];
    ys.forEach((y) => r += A(cx - 110, y, cx + 108, y, BLUE, 1.8));
    const cy = 180;
    if (kind === "flat") r += `<ellipse cx="${cx}" cy="${cy}" rx="70" ry="20" fill="#f6e3b4" fill-opacity="0.75" stroke="${GOLD}" stroke-width="3.5"/>`;
    else r += `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="66" fill="#f6e3b4" fill-opacity="0.75" stroke="${GOLD}" stroke-width="3.5"/>`;
    if (kind === "along") r += A(cx, cy, cx + 74, cy, RED, 4) + text(cx + 66, cy - 12, "A", { size: 16, weight: "bold", fill: RED });
    if (kind === "flat") r += A(cx, cy, cx, cy - 74, RED, 4) + text(cx + 12, cy - 60, "A", { size: 16, weight: "bold", fill: RED, anchor: "start" });
    if (kind === "against") r += A(cx, cy, cx - 74, cy, RED, 4) + text(cx - 66, cy - 12, "A", { size: 16, weight: "bold", fill: RED });
    r += text(cx, 298, lab1, { size: 13, weight: "bold" }) + text(cx, 318, lab2, { size: 14, weight: "bold", fill: RED });
    return r;
  };
  s += panel(130, "along", "θ = 0°", "Φ = +BA") + panel(380, "flat", "θ = 90°", "Φ = 0") + panel(630, "against", "θ = 180°", "Φ = −BA");
  s += text(130, 66, "A along B", { size: 12.5, weight: "bold" }) + text(380, 66, "B lies in the loop's plane", { size: 12.5, weight: "bold" }) + text(630, 66, "loop flipped: A opposite B", { size: 12.5, weight: "bold" });
  s += line(255, 56, 255, 320, { stroke: C.line, w: 1.5 }) + line(505, 56, 505, 320, { stroke: C.line, w: 1.5 });
  s += text(380, 346, "blue arrows: uniform field B     red arrow: area vector A (perpendicular to the loop)", { size: 12, fill: C.muted });
  fig(FIGS, "area-vector-flux", 760, 362, s, "A loop in a uniform field shown three ways: area vector along the field, perpendicular to it, and opposite to it",
    "The same loop in the same field gives +BA, 0 or −BA depending on how its area vector points relative to B. Flipping the loop over changes the flux by 2BA, not BA.");
}
