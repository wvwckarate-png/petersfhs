import { C, svg, text, line, circle, rect, path, defs, arrow, figure } from "./lib.mjs";
export const FIGS = {};
// ---- buffer region on a titration-style curve ----
{
  const x0 = 70, x1 = 700, y0 = 40, y1 = 250;
  const px = (v) => x0 + (x1 - x0) * v, py = (p) => y1 - (y1 - y0) * (p - 2) / 10; // pH 2..12
  // weak acid + base: Henderson-Hasselbalch-ish curve, pKa 5 -> half equivalence at v=0.5
  const pts = []; for (let i = 1; i < 100; i++) { const v = i / 100; const ph = v < 0.5 ? 5 + Math.log10(v / (1 - v)) : 5 + Math.log10(v / (1 - v)); pts.push([px(v), py(Math.min(11.8, Math.max(2.5, ph)))]); }
  let s = defs + text(380, 22, "A buffer holds pH steady in a plateau around its pKa", { size: 16, weight: "bold" });
  s += rect(px(0.2), y0, px(0.8) - px(0.2), y1 - y0, { fill: "#e4f1e0", opacity: 0.7, stroke: "none" });
  s += line(x0, y0, x0, y1, { w: 2 }) + line(x0, y1, x1, y1, { w: 2 });
  s += path("M " + pts.map(p => p.join(" ")).join(" L "), { stroke: C.red, w: 3 });
  s += line(x0, py(5), px(0.5), py(5), { stroke: C.muted, w: 1.5, dash: "5 4" }) + line(px(0.5), py(5), px(0.5), y1, { stroke: C.muted, w: 1.5, dash: "5 4" });
  s += text(x0 - 8, py(5) + 4, "pKa", { size: 13, anchor: "end", weight: "bold" }) + text(px(0.5), y1 + 18, "half-neutralized: [HA] = [A⁻]", { size: 12 });
  s += text(px(0.5), y0 + 24, "BUFFERING REGION", { size: 14, weight: "bold", fill: C.green }) + text(px(0.5), y0 + 42, "pH barely changes as base is added", { size: 12, fill: C.green });
  s += text(px(0.07), py(3.2) - 10, "steep:\nbuffer nearly\nout of HA", { size: 11.5, fill: C.muted }) + text(px(0.93), py(10.8) - 14, "steep:\nbuffer used up", { size: 11.5, fill: C.muted });
  s += text(40, (y0 + y1) / 2, "pH", { size: 14, weight: "bold" }) + text(380, y1 + 40, "amount of base (OH⁻) added  →", { size: 13 });
  FIGS["buffer-curve"] = { svg: svg(760, 296, s, "A pH versus amount of base added curve with a flat buffering region around the pKa"), caption: "On a pH vs. base-added graph, the buffering region is the flattest part, centered on the weak acid's pKa. Beyond it, the buffer is used up and pH changes steeply." };
}
// ---- cohesion-tension in xylem ----
{
  let s = defs + text(380, 22, "Cohesion–tension: how water climbs a tree without a pump", { size: 16, weight: "bold" });
  // tree schematic: leaf at top, xylem column, root at bottom
  s += rect(330, 54, 120, 36, { fill: "#d6efd6", stroke: C.green, rx: 18 }) + text(390, 77, "leaf", { size: 14, weight: "bold", fill: C.green });
  for (let i = 0; i < 4; i++) s += path(`M ${360 + i * 20} 50 q 4 -14 0 -22`, { stroke: C.blue, w: 2, marker: "ahb" });
  s += text(560, 40, "① Evaporation (transpiration) from leaf\nsurfaces creates tension", { size: 12.5, anchor: "start", fill: C.blue, weight: "bold" });
  s += rect(372, 90, 36, 190, { fill: "#e8f1fb", stroke: C.blue, rx: 4 });
  for (let i = 0; i < 9; i++) s += circle(390, 104 + i * 21, 7, { fill: "#fff", stroke: C.blue, w: 2 });
  for (let i = 0; i < 8; i++) s += line(390, 111 + i * 21, 390, 97 + (i + 1) * 21, { stroke: C.teal, w: 3, dash: "3 2" });
  s += arrow(432, 250, 432, 110, { stroke: C.blue, marker: "ahb", w: 3 }) + text(560, 160, "② Cohesion (water–water H-bonds) pulls the\nwhole unbroken column upward", { size: 12.5, anchor: "start", fill: C.teal, weight: "bold" });
  s += text(560, 214, "③ Adhesion (water–xylem wall) helps hold\nthe column up against gravity", { size: 12.5, anchor: "start", fill: "#8a6a00", weight: "bold" });
  s += path("M 350 282 q 40 36 80 0", { stroke: "#8a5a2b", w: 3 }) + text(390, 318, "roots take up water from soil", { size: 12.5, fill: "#8a5a2b" });
  s += text(250, 190, "xylem\nvessel", { size: 12.5, fill: C.muted });
  FIGS["cohesion-tension"] = { svg: svg(760, 336, s, "Water evaporating from a leaf pulls a cohesive column of water up the xylem from the roots"), caption: "Cohesion–tension theory: evaporation from the leaf pulls on an unbroken chain of water molecules held together by hydrogen bonds (cohesion), while adhesion to the xylem walls keeps the column from breaking away." };
}
