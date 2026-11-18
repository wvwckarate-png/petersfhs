// AP Biology figures for material added in Nov 2026 (units 2–5): endomembrane route, water potential,
// chloroplast structure, other fuels, prokaryote ETC and uncoupling, feedback loops, ligand-gated channel,
// pedigrees, maternal inheritance, chi-square critical values, chromosome structure changes.
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, note } from "./lib2.mjs";
export const FIGS = {};
const T = (t, s = 16) => text(380, 24, t, { size: s, weight: "bold" });
const tl = (x, y, s, o = {}) => text(x, y, s, { size: 12, anchor: "start", ...o });

// ---- endomembrane system: route of a secreted protein ----
{
  let s = defs + T("The endomembrane system: the route of a secreted protein");
  // cell (plasma membrane) with outside on the right
  s += rect(20, 44, 640, 300, { fill: "#fbfaf6", stroke: "#8a6a2a", w: 4, rx: 36 });
  s += tl(40, 66, "CYTOPLASM", { size: 11.5, weight: "bold", fill: C.muted });
  s += text(712, 66, "OUTSIDE\nTHE CELL", { size: 11.5, weight: "bold", fill: C.muted });
  // nucleus with double envelope
  const nx = 110, ny = 200;
  s += circle(nx, ny, 64, { fill: "#efe6f7", stroke: PURPLE, w: 2.5 }) + circle(nx, ny, 57, { stroke: PURPLE, w: 1.5 });
  s += text(nx, ny - 6, "Nucleus", { size: 13, weight: "bold", fill: PURPLE }) + text(nx, ny + 13, "gene → mRNA", { size: 11.5 });
  // rough ER: concentric arcs around nucleus (right side), continuous with envelope
  const arc = (r) => { const a1 = -62 * Math.PI / 180, a2 = 62 * Math.PI / 180; return `M ${(nx + r * Math.cos(a1)).toFixed(1)} ${(ny + r * Math.sin(a1)).toFixed(1)} A ${r} ${r} 0 0 1 ${(nx + r * Math.cos(a2)).toFixed(1)} ${(ny + r * Math.sin(a2)).toFixed(1)}`; };
  [76, 90, 104].forEach((r) => { s += path(arc(r), { stroke: "#4a7fc0", w: 7 }) + path(arc(r), { stroke: "#dbe8f7", w: 3 }); });
  for (const r of [76, 90, 104]) for (let a = -55; a <= 55; a += 11) { const t = a * Math.PI / 180; s += circle(nx + (r + 5) * Math.cos(t), ny + (r + 5) * Math.sin(t), 2.2, { fill: C.ink }); }
  s += text(214, 92, "① Rough ER", { size: 12.5, weight: "bold", fill: "#2f5f9a" });
  s += tl(40, 306, "ribosomes (dots) make the protein;\nit enters the ER and folds", { size: 11.5 });
  // transport vesicle ER -> Golgi
  s += circle(258, 200, 11, { fill: "#dbe8f7", stroke: "#4a7fc0", w: 2.5 }) + circle(258, 200, 3.5, { fill: RED });
  s += arrow(222, 200, 243, 200, { w: 2 }) + arrow(272, 200, 300, 200, { w: 2 });
  s += text(258, 168, "② transport\nvesicle", { size: 11.5 });
  // Golgi stack (curved cisternae)
  for (let i = 0; i < 5; i++) { const x = 318 + i * 15, h = 104 - Math.abs(i - 2) * 6; s += path(`M ${x + 8} ${200 - h / 2} Q ${x - 10} 200 ${x + 8} ${200 + h / 2}`, { stroke: "#b06a2a", w: 9 }) + path(`M ${x + 8} ${200 - h / 2} Q ${x - 10} 200 ${x + 8} ${200 + h / 2}`, { stroke: "#f6dcc0", w: 4.5 }); }
  s += text(352, 130, "③ Golgi apparatus", { size: 12.5, weight: "bold", fill: "#8a4a12" }) + text(352, 300, "modifies (adds sugars),\nsorts and ships", { size: 11.5 });
  s += text(312, 268, "cis", { size: 11, fill: C.muted }) + text(396, 268, "trans", { size: 11, fill: C.muted });
  // vesicles leaving trans face
  const ves = (x, y, cargoCol) => circle(x, y, 11, { fill: "#f6dcc0", stroke: "#b06a2a", w: 2.5 }) + circle(x, y, 3.5, { fill: cargoCol });
  // route to secretion (upper)
  s += path("M 410 170 Q 470 110 560 108", { stroke: C.ink, w: 2, marker: "ah" }) + ves(500, 118, RED);
  // secretion at the membrane (exocytosis): vesicle fused with membrane
  s += path("M 645 92 Q 665 108 645 124", { stroke: "#8a6a2a", w: 3 }) + circle(650, 108, 3.5, { fill: RED });
  s += circle(700, 112, 3.5, { fill: RED }) + circle(714, 128, 3.5, { fill: RED }) + circle(692, 132, 3.5, { fill: RED });
  s += arrow(662, 108, 684, 112, { w: 1.8 });
  s += text(560, 82, "④ secretion (exocytosis)", { size: 12, weight: "bold", fill: RED });
  // route to plasma membrane protein (middle)
  s += arrow(412, 200, 560, 200, { w: 2 }) + ves(490, 200, BLUE);
  s += rect(632, 186, 16, 28, { fill: BLUE, stroke: "#1d4f96", rx: 4 });
  s += text(646, 228, "membrane proteins, lipids", { size: 11.5, fill: BLUE, weight: "bold", anchor: "end" });
  // route to lysosome (lower)
  s += path("M 410 232 Q 450 284 524 284", { stroke: C.ink, w: 2, marker: "ah" }) + ves(456, 268, GREEN);
  s += circle(562, 284, 30, { fill: "#e3f2e3", stroke: GREEN, w: 2.5 });
  for (const [dx, dy] of [[-12, -8], [8, -12], [12, 8], [-6, 12], [0, -1]]) s += circle(562 + dx, 284 + dy, 3.5, { fill: GREEN });
  s += text(562, 330, "lysosome", { size: 12, weight: "bold", fill: GREEN });
  s += tl(598, 280, "hydrolytic\nenzymes", { size: 11, fill: GREEN });
  // note
  s += rect(20, 358, 720, 62, NOTE) + text(380, 381, "Linked by membranes or vesicles: nuclear envelope ↔ ER → Golgi → lysosomes, vacuoles, plasma membrane.", { size: 12.5, weight: "bold" }) + text(380, 404, "Not part of the system: mitochondria and chloroplasts (no vesicle traffic; they have their own DNA and ribosomes).", { size: 12 });
  FIGS["endomembrane-route"] = { svg: svg(760, 432, s, "A protein made on the rough ER travels by vesicle to the Golgi, then to the plasma membrane for secretion, into the membrane, or to a lysosome"), caption: "A secreted protein is made by ribosomes on the rough ER, carried in a vesicle to the Golgi, modified and sorted there, then shipped in a new vesicle that fuses with the plasma membrane and releases it outside. Other Golgi vesicles deliver membrane proteins or carry digestive enzymes to lysosomes." };
}

// ---- water potential: one cell, two surroundings ----
{
  let s = defs + T("Water moves from higher Ψ to lower Ψ");
  // Ψ scale on the left
  const sx = 70, top = 70, bot = 304, Y = (v) => top + (-v / 10) * (bot - top);
  s += rect(sx - 10, top, 20, bot - top, { fill: "#e8f1fb", stroke: "#9bb8dc", rx: 6 });
  for (let v = 0; v >= -10; v -= 2) s += line(sx + 10, Y(v), sx + 16, Y(v), { w: 1.5 }) + text(sx - 16, Y(v) + 4, String(v === 0 ? "0" : "−" + -v), { size: 11.5, anchor: "end" });
  s += text(sx, top - 14, "Ψ (bar)", { size: 12, weight: "bold" });
  const mark = (v, lab, col) => circle(sx, Y(v), 6, { fill: col, stroke: "#fff", w: 1.5 }) + tl(sx + 22, Y(v) + 4, lab, { size: 11.5, weight: "bold", fill: col });
  s += mark(0, "pure water", BLUE) + mark(-5, "cell", GREEN) + mark(-7, "salt solution", RED);
  s += text(sx + 4, bot + 22, "water flows\ndown the scale", { size: 11, fill: C.muted });
  // panel helper: beaker + plant cell
  const panel = (x0, outsideLab, outsideCol, into) => {
    let p = rect(x0, 56, 290, 240, { fill: outsideCol, stroke: "#9bb8dc", w: 2, rx: 12 });
    p += text(x0 + 145, 78, outsideLab, { size: 12.5, weight: "bold" });
    // cell: wall + membrane + vacuole
    const cx = x0 + 145, cy = 192;
    p += rect(cx - 70, cy - 64, 140, 128, { fill: "#fff", stroke: GREEN, w: 6, rx: 14 });
    p += rect(cx - 62, cy - 56, 124, 112, { fill: "#eaf6ea", stroke: "#4c9a4f", w: 1.5, rx: 10 });
    p += rect(cx - 44, cy - 38, 88, 76, { fill: "#d6ecf8", stroke: "#7aa7cf", w: 1.2, rx: 18 });
    p += text(cx, cy - 6, "Ψs = −8", { size: 12, weight: "bold" }) + text(cx, cy + 12, "Ψp = +3", { size: 12, weight: "bold" });
    // arrows
    const arr = (ax1, ay1, ax2, ay2) => arrow(ax1, ay1, ax2, ay2, { stroke: BLUE, marker: "ahb", w: 3 });
    if (into) p += arr(x0 + 22, cy, x0 + 66, cy) + arr(x0 + 268, cy, x0 + 224, cy) + arr(cx, 100, cx, 124);
    else p += arr(x0 + 70, cy, x0 + 26, cy) + arr(x0 + 220, cy, x0 + 264, cy) + arr(cx, 124, cx, 98);
    return p;
  };
  s += panel(170, "beaker of pure water: Ψ = 0", "#f2f7fd", true);
  s += panel(460, "salt solution: Ψ = −7 bar", "#fbeeea", false);
  s += text(315, 282, "cell Ψ = (+3) + (−8) = −5 bar", { size: 12, weight: "bold", fill: GREEN });
  s += text(605, 282, "cell Ψ = (+3) + (−8) = −5 bar", { size: 12, weight: "bold", fill: GREEN });
  s += text(315, 318, "0 > −5: water ENTERS the cell;\nthe wall pushes back, Ψp rises (turgid)", { size: 12, weight: "bold", fill: BLUE });
  s += text(605, 318, "−5 > −7: water LEAVES the cell;\nΨp falls, then plasmolysis", { size: 12, weight: "bold", fill: RED });
  FIGS["water-potential-cells"] = { svg: svg(760, 366, s, "A plant cell with water potential minus 5 bar gains water from pure water and loses water to a minus 7 bar salt solution"), caption: "Add the two parts to get each Ψ, then compare: water always moves toward the more negative value. This cell (Ψ = −5 bar) gains water from pure water (Ψ = 0) until its wall pressure rises, but loses water to a salt solution at −7 bar." };
}

// ---- chloroplast structure ----
{
  let s = defs + T("Inside a chloroplast: where each stage of photosynthesis happens");
  const cx = 290, cy = 196;
  s += `<ellipse cx="${cx}" cy="${cy}" rx="250" ry="128" fill="#fff" stroke="${GREEN}" stroke-width="3"/>`;
  s += `<ellipse cx="${cx}" cy="${cy}" rx="240" ry="118" fill="#eef7e4" stroke="#4c9a4f" stroke-width="2.5"/>`;
  // grana: stacks of thylakoid discs, joined by stroma lamellae
  const grana = [[130, 190, 6], [215, 150, 5], [215, 252, 4], [300, 196, 7], [385, 150, 5], [385, 250, 4], [460, 196, 5]];
  // lamellae first
  s += path("M 130 190 L 215 150 L 300 196 L 385 150 L 460 196 M 130 190 L 215 252 L 300 196 L 385 250 L 460 196", { stroke: "#5fae5f", w: 3 });
  for (const [gx, gy, n] of grana) for (let i = 0; i < n; i++) { const y = gy - (n * 11) / 2 + i * 11; s += rect(gx - 26, y, 52, 9, { fill: "#4caf50", stroke: "#1f6b22", w: 1.3, rx: 4.5 }); }
  // labels with leader lines (right side)
  const lab = (x1, y1, ty, t, col = C.ink) => line(x1, y1, 556, ty - 4, { w: 1.2, stroke: "#888" }) + tl(562, ty, t, { weight: "bold", fill: col });
  s += lab(498, 110, 70, "outer membrane");
  s += lab(503, 136, 98, "inner membrane");
  s += lab(486, 196, 154, "granum: a stack of thylakoids");
  s += text(562, 172, "thylakoid membranes hold pigments,\nphotosystems, ETC and ATP synthase", { size: 11, anchor: "start" });
  s += lab(422, 223, 226, "stroma lamella (links grana)", C.muted);
  s += lab(420, 285, 270, "stroma: fluid around the grana", "#3a6b1e");
  // bottom summary boxes
  s += rect(30, 336, 345, 78, { fill: "#e9f6e9", stroke: GREEN, rx: 10 }) + text(202, 358, "Light reactions: thylakoid membranes (grana)", { size: 12.5, weight: "bold", fill: GREEN }) + text(202, 380, "light + H₂O → O₂; ATP (photophosphorylation)\nand NADPH", { size: 12 });
  s += rect(385, 336, 345, 78, { fill: "#fbf6e6", stroke: "#d8c27a", rx: 10 }) + text(557, 358, "Calvin cycle: stroma", { size: 12.5, weight: "bold", fill: "#7a5a00" }) + text(557, 380, "CO₂ + ATP + NADPH → sugar (G3P);\nADP and NADP⁺ go back to the grana", { size: 12 });
  FIGS["chloroplast-structure"] = { svg: svg(760, 426, s, "Chloroplast cross-section showing the outer and inner membranes, stacked thylakoids forming grana, and the stroma"), caption: "Two membranes enclose the fluid stroma, where the Calvin cycle builds sugar. Thylakoids stacked into grana carry the pigments and electron carriers of the light reactions, which make the ATP and NADPH the Calvin cycle spends." };
}

// ---- other fuels: catabolism funnel ----
{
  let s = defs + T("All three kinds of food feed into the same respiration pathway");
  const box = (x, y, w, h, fill, stroke, lab, o = {}) => rect(x, y, w, h, { fill, stroke, rx: 10, w: 2 }) + text(x + w / 2, y + h / 2 + (lab.includes("\n") ? -3 : 5), lab, { size: o.size || 13, weight: "bold", fill: o.col || C.ink });
  // macromolecules
  s += box(40, 46, 170, 38, "#f6e2ee", "#a0507e", "Proteins") + box(295, 46, 170, 38, "#fbf1d8", "#b8902a", "Carbohydrates") + box(550, 46, 170, 38, "#e4f1fb", "#3a78b8", "Fats (triglycerides)");
  s += arrow(125, 86, 125, 118) + arrow(380, 86, 380, 118) + arrow(600, 86, 580, 118) + arrow(670, 86, 690, 118);
  s += box(40, 122, 170, 36, "#fff", "#a0507e", "Amino acids", { size: 12.5 }) + box(295, 122, 170, 36, "#fff", "#b8902a", "Sugars (glucose)", { size: 12.5 }) + box(520, 122, 110, 36, "#fff", "#3a78b8", "Glycerol", { size: 12.5 }) + box(638, 122, 110, 36, "#fff", "#3a78b8", "Fatty acids", { size: 12.5 });
  // central pathway
  s += box(305, 188, 150, 38, "#eceaf5", "#5a4a9a", "Glycolysis") + arrow(380, 160, 380, 186);
  s += arrow(380, 228, 380, 248) + box(320, 250, 120, 32, "#fff", "#777", "Pyruvate", { size: 12.5 });
  s += arrow(380, 284, 380, 304) + box(320, 306, 120, 32, "#fff", "#777", "Acetyl-CoA", { size: 12.5 });
  s += arrow(380, 340, 380, 360) + circle(380, 398, 36, { fill: "#fde8e0", stroke: RED, w: 2.5 }) + text(380, 395, "Krebs", { size: 13, weight: "bold" }) + text(380, 411, "cycle", { size: 13, weight: "bold" });
  s += arrow(418, 398, 498, 398) + box(500, 374, 240, 48, "#e9f6e9", GREEN, "NADH, FADH₂ → ETC\n→ most of the ATP", { size: 12.5 });
  // glycerol -> glycolysis
  s += path("M 560 160 Q 540 205 460 207", { stroke: "#3a78b8", w: 2.5, marker: "ah" });
  s += tl(548, 196, "enters glycolysis", { size: 11, fill: "#3a78b8", weight: "bold" });
  // fatty acids -> acetyl CoA
  s += path("M 693 160 L 693 322 L 442 322", { stroke: "#3a78b8", w: 2.5, marker: "ah" });
  s += text(682, 266, "cut into 2-carbon pieces\n(beta oxidation)", { size: 11.5, fill: "#3a78b8", weight: "bold", anchor: "end" });
  // amino acids: deamination then three entry points
  s += rect(40, 182, 170, 46, { fill: "#fbf6e6", stroke: "#eadba0", rx: 8 }) + text(125, 201, "remove –NH₂ (deamination)", { size: 11.5, weight: "bold" }) + text(125, 218, "N excreted as waste", { size: 11, fill: C.muted });
  s += arrow(125, 160, 125, 180, { stroke: "#a0507e" });
  s += path("M 210 236 Q 270 262 318 266", { stroke: "#a0507e", w: 2.5, marker: "ah" });
  s += path("M 200 230 Q 250 312 318 322", { stroke: "#a0507e", w: 2.5, marker: "ah" });
  s += path("M 160 230 Q 200 390 342 398", { stroke: "#a0507e", w: 2.5, marker: "ah" });
  s += tl(40, 300, "carbon skeletons\nenter at several\npoints", { size: 11.5, fill: "#a0507e", weight: "bold" });
  s += rect(20, 438, 720, 40, NOTE) + text(380, 463, "Fats give about twice the energy per gram of carbohydrates: long C–H chains → many NADH and FADH₂.", { size: 12.5, weight: "bold" });
  FIGS["fuel-funnel"] = { svg: svg(760, 490, s, "Proteins, carbohydrates and fats are broken into amino acids, sugars, glycerol and fatty acids that enter glycolysis, acetyl-CoA or the Krebs cycle"), caption: "Sugars and glycerol enter at glycolysis, fatty acids are trimmed into two-carbon acetyl-CoA, and amino acids lose their nitrogen and enter as pyruvate, acetyl-CoA or Krebs cycle intermediates. From there, every fuel feeds electrons to the same ETC." };
}

// ---- ETC location in prokaryotes; uncoupling ----
{
  let s = defs + T("The same chemiosmosis in a different membrane, and what uncoupling does");
  const panel = (x0, head, topLab, botLab, uncoupled) => {
    let p = text(x0 + 172, 56, head, { size: 13.5, weight: "bold" });
    p += rect(x0, 68, 345, 84, { fill: "#fdeee8", rx: 0 }) + tl(x0 + 10, 86, topLab, { size: 11.5, weight: "bold", fill: RED });
    p += rect(x0, 202, 345, 84, { fill: "#eef5fc", rx: 0 }) + tl(x0 + 10, 276, botLab, { size: 11.5, weight: "bold", fill: BLUE });
    p += rect(x0, 152, 345, 50, { fill: "#f3ead7", stroke: "#cdb98a", rx: 0 });
    // ETC block
    p += rect(x0 + 24, 144, 96, 66, { fill: "#c9b27a", stroke: "#8a6a2a", w: 2, rx: 14 }) + text(x0 + 72, 182, "ETC", { size: 13, weight: "bold" });
    p += arrow(x0 + 72, 142, x0 + 72, 104, { stroke: RED, marker: "ahr", w: 3 }) + tl(x0 + 82, 124, "H⁺ pumped", { size: 11.5, weight: "bold", fill: RED });
    p += text(x0 + 72, 232, "e⁻ → final acceptor", { size: 11 });
    // ATP synthase
    const ax = x0 + 200;
    p += `<polygon points="${ax - 30},152 ${ax + 30},152 ${ax + 10},180 ${ax - 10},180" fill="#8ec58f" stroke="#2E7D32" stroke-width="2"/><rect x="${ax - 9}" y="180" width="18" height="14" fill="#8ec58f" stroke="#2E7D32" stroke-width="2"/><rect x="${ax - 30}" y="194" width="60" height="22" rx="11" fill="#a8d9a8" stroke="#2E7D32" stroke-width="2"/>`;
    p += arrow(ax, 104, ax, 150, { stroke: RED, marker: "ahr", w: uncoupled ? 1.5 : 3, dash: uncoupled ? "4 4" : undefined });
    p += text(ax, 242, uncoupled ? "little ATP made" : "ADP + Pi → ATP", { size: 12, weight: "bold", fill: uncoupled ? C.muted : GREEN });
    if (uncoupled) {
      const ux = x0 + 300;
      p += rect(ux - 14, 150, 28, 54, { fill: "#f7c99a", stroke: "#c06a1e", w: 2, rx: 6 }) + arrow(ux, 112, ux, 224, { stroke: RED, marker: "ahr", w: 3 });
      p += text(ux, 106, "UCP", { size: 11.5, weight: "bold", fill: "#c06a1e" });
      p += text(ux - 2, 244, "energy →\nHEAT", { size: 12, weight: "bold", fill: "#c06a1e" });
    }
    return p;
  };
  s += panel(25, "Aerobic bacterium: plasma membrane", "OUTSIDE THE CELL: high [H⁺]", "CYTOPLASM: low [H⁺]", false);
  s += panel(390, "Brown fat mitochondrion: uncoupled", "INTERMEMBRANE SPACE: high [H⁺]", "MATRIX: low [H⁺]", true);
  s += rect(25, 298, 345, 62, NOTE) + text(197, 320, "No mitochondria needed: the ETC and", { size: 12, weight: "bold" }) + text(197, 340, "ATP synthase sit in the plasma membrane.", { size: 12, weight: "bold" });
  s += rect(390, 298, 345, 62, NOTE) + text(562, 320, "H⁺ leaks back through uncoupling protein:", { size: 12, weight: "bold" }) + text(562, 340, "O₂ is still used, but energy is lost as heat.", { size: 12, weight: "bold" });
  FIGS["etc-prokaryote-uncoupling"] = { svg: svg(760, 372, s, "Left: a bacterial electron transport chain pumps hydrogen ions out across the plasma membrane. Right: in brown fat, an uncoupling protein lets hydrogen ions leak back, releasing heat"), caption: "A prokaryote builds its H⁺ gradient across the plasma membrane, pumping H⁺ out of the cytoplasm, and uses ATP synthase in that same membrane. In brown fat, an uncoupling protein (UCP) gives H⁺ a path back that skips ATP synthase, so the chain keeps running but the gradient's energy becomes body heat." };
}

// ---- negative vs positive feedback ----
{
  let s = defs + T("Negative feedback restores the set point; positive feedback amplifies the change");
  const bx = (x, y, w, h, fill, stroke, head, body) => rect(x, y, w, h, { fill, stroke, rx: 10, w: 2 }) + text(x + w / 2, y + 19, head, { size: 11, weight: "bold", fill: C.muted }) + text(x + w / 2, y + 37, body, { size: 12, weight: "bold" });
  // NEGATIVE (left panel, 20..370)
  s += text(195, 54, "NEGATIVE FEEDBACK: blood glucose", { size: 13.5, weight: "bold", fill: BLUE });
  s += bx(30, 68, 160, 62, "#e8f1fb", BLUE, "STIMULUS", "blood glucose\nrises after a meal");
  s += bx(210, 68, 150, 62, "#e8f1fb", BLUE, "SENSOR / CONTROL", "pancreas\ndetects the rise");
  s += bx(210, 170, 150, 62, "#e8f1fb", BLUE, "SIGNAL", "insulin\nreleased");
  s += bx(30, 170, 160, 62, "#e8f1fb", BLUE, "EFFECTOR → RESPONSE", "cells take up\nglucose");
  s += arrow(192, 99, 208, 99) + arrow(285, 132, 285, 168) + arrow(208, 201, 192, 201);
  s += arrow(110, 168, 110, 134, { stroke: RED, marker: "ahr", w: 3 });
  s += circle(110, 151, 11, { fill: "#fff", stroke: RED, w: 2 }) + text(110, 156, "−", { size: 16, weight: "bold", fill: RED });
  s += tl(126, 148, "glucose falls;", { size: 11.5, fill: RED, weight: "bold" }) + tl(126, 162, "insulin drops", { size: 11.5, fill: RED, weight: "bold" });
  s += rect(30, 250, 330, 82, NOTE) + text(195, 272, "The response OPPOSES the change", { size: 12.5, weight: "bold" }) + text(195, 293, "→ back to the set point (stable).\nToo low? glucagon → liver releases glucose.", { size: 12 });
  // POSITIVE (right panel)
  s += line(380, 46, 380, 336, { w: 1, stroke: C.line });
  s += text(570, 54, "POSITIVE FEEDBACK: childbirth", { size: 13.5, weight: "bold", fill: RED });
  s += bx(400, 68, 160, 62, "#fdeee8", RED, "STIMULUS", "baby's head\nstretches cervix");
  s += bx(580, 68, 160, 62, "#fdeee8", RED, "SENSOR / CONTROL", "stretch receptors\n→ brain");
  s += bx(580, 170, 160, 62, "#fdeee8", RED, "SIGNAL", "oxytocin\nreleased");
  s += bx(400, 170, 160, 62, "#fdeee8", RED, "EFFECTOR → RESPONSE", "stronger uterine\ncontractions");
  s += arrow(562, 99, 578, 99) + arrow(660, 132, 660, 168) + arrow(578, 201, 562, 201);
  s += arrow(480, 168, 480, 134, { stroke: GREEN, marker: "ahg", w: 3 });
  s += circle(480, 151, 11, { fill: "#fff", stroke: GREEN, w: 2 }) + text(480, 156, "+", { size: 16, weight: "bold", fill: GREEN });
  s += tl(496, 148, "more stretch", { size: 11.5, fill: GREEN, weight: "bold" });
  s += rect(400, 250, 340, 82, NOTE) + text(570, 272, "The response INCREASES the change", { size: 12.5, weight: "bold" }) + text(570, 293, "→ moves away from the set point until an\noutside event (birth) ends the loop.", { size: 12 });
  FIGS["feedback-loops"] = { svg: svg(760, 346, s, "Two loop diagrams: negative feedback in blood glucose control and positive feedback in childbirth"), caption: "Both loops have the same parts. The difference is the last arrow: in negative feedback the response reverses the stimulus (−), so the variable returns to its set point; in positive feedback the response adds to the stimulus (+), so the change grows until something outside the loop stops it." };
}

// ---- ligand-gated ion channel ----
{
  let s = defs + T("A ligand-gated ion channel: the receptor is the channel");
  const ion = (x, y) => circle(x, y, 8, { fill: "#fff", stroke: RED, w: 1.8 }) + text(x, y + 3.5, "+", { size: 11, weight: "bold", fill: RED });
  const ligand = (lx, ly) => `<polygon points="${lx},${ly - 9} ${lx + 9},${ly} ${lx},${ly + 9} ${lx - 9},${ly}" fill="${GOLD}" stroke="#7a5a00" stroke-width="1.5"/>`;
  const panel = (x0, open) => {
    let p = "";
    const my = 140, mh = 56, cx = x0 + 170; // membrane band
    p += rect(x0, 40, 340, my - 40, { fill: "#fdf3e4", rx: 0 }) + rect(x0, my + mh, 340, 290 - my - mh, { fill: "#eef5fc", rx: 0 });
    for (let x = x0 + 8; x < x0 + 340; x += 14) {
      if (Math.abs(x - cx) < 62) continue;
      p += circle(x, my + 5, 5, { fill: "#f2c38a", stroke: "#b07a3a", w: 1 }) + circle(x, my + mh - 5, 5, { fill: "#f2c38a", stroke: "#b07a3a", w: 1 });
      for (const d of [-2, 2]) p += line(x + d, my + 11, x + d, my + 25, { w: 1, stroke: "#c9a46a" }) + line(x + d, my + mh - 11, x + d, my + mh - 25, { w: 1, stroke: "#c9a46a" });
    }
    const gap = open ? 12 : 0;
    p += rect(cx - 44 - gap, my - 18, 40, mh + 36, { fill: "#9fc4e8", stroke: "#2E6BC6", w: 2, rx: 12 }) + rect(cx + 4 + gap, my - 18, 40, mh + 36, { fill: "#9fc4e8", stroke: "#2E6BC6", w: 2, rx: 12 });
    if (!open) p += rect(cx - 6, my + 10, 12, mh - 20, { fill: "#2E6BC6", stroke: "none", rx: 3 });
    if (open) p += ligand(cx - 24 - gap, my - 27) + ligand(cx + 24 + gap, my - 27);
    else p += path(`M ${cx - 32} ${my - 18} l 8 -8 l 8 8`, { stroke: "#2E6BC6", w: 2 }) + path(`M ${cx + 16} ${my - 18} l 8 -8 l 8 8`, { stroke: "#2E6BC6", w: 2 }) + ligand(cx + 100, 62) + text(cx + 86, 66, "free ligand", { size: 11, weight: "bold", fill: "#7a5a00", anchor: "end" });
    for (const [dx, y] of [[-140, 90], [-100, 118], [-150, 124], [-66, 86], [64, 92], [102, 122], [140, 96], [150, 126]]) p += ion(cx + dx, y);
    p += ion(cx - 125, 240) + ion(cx + 145, 268);
    if (open) p += arrow(cx, 100, cx, my + mh + 30, { stroke: RED, marker: "ahr", w: 3.5 }) + ion(cx, my + mh + 44);
    else p += text(cx, 236, "pore shut: no ion flow", { size: 12, weight: "bold", fill: C.muted });
    p += tl(x0 + 8, 58, "OUTSIDE (high Na⁺)", { size: 11.5, weight: "bold", fill: "#8a5a1a" }) + tl(x0 + 8, 282, "CYTOPLASM (low Na⁺)", { size: 11.5, weight: "bold", fill: BLUE });
    return p;
  };
  s += panel(20, false) + panel(400, true);
  s += tl(622, 226, "Na⁺ flows in,\ndown its gradient", { size: 12, weight: "bold", fill: RED });
  s += text(190, 312, "Closed: no ligand bound", { size: 13, weight: "bold" });
  s += text(570, 312, "Open: ligand bound, shape changes", { size: 13, weight: "bold" });
  s += rect(20, 326, 720, 46, NOTE) + text(380, 354, "No G protein, second messenger or ATP: ions move passively, so the response takes milliseconds.", { size: 12.5, weight: "bold" });
  FIGS["ligand-gated-channel"] = { svg: svg(760, 384, s, "A ligand-gated ion channel shown closed with no ligand and open with ligand bound, letting sodium ions flow into the cell"), caption: "With no ligand the channel's pore is closed. When the ligand (for example, acetylcholine at a nerve-muscle junction) binds, the protein changes shape, the pore opens, and Na⁺ rushes in down its concentration gradient, changing the membrane potential at once." };
}

// ---- pedigree drawing helpers ----
const PS = 26; // symbol size
const male = (x, y, aff, carrier) => rect(x - PS / 2, y - PS / 2, PS, PS, { fill: aff ? C.ink : "#fff", stroke: C.ink, w: 2, rx: 1 }) + (carrier ? rect(x - PS / 2 + 1, y - PS / 2 + 1, PS / 2 - 1, PS - 2, { fill: C.ink, rx: 0 }) : "");
const female = (x, y, aff, carrier) => circle(x, y, PS / 2 + 1, { fill: aff ? C.ink : "#fff", stroke: C.ink, w: 2 }) + (carrier ? path(`M ${x} ${y - PS / 2} A ${PS / 2} ${PS / 2} 0 0 0 ${x} ${y + PS / 2} Z`, { fill: C.ink, stroke: "none", w: 0 }) : "");
const ind = (x, y, sex, aff, carrier) => (sex === "m" ? male : female)(x, y, aff, carrier);
const mate = (x1, x2, y) => line(x1 + PS / 2 + 1, y, x2 - PS / 2 - 1, y, { w: 2 });
const kids = (xm, y, xs, yk) => { const yb = (y + yk) / 2; return line(xm, y, xm, yb, { w: 2 }) + line(Math.min(...xs, xm), yb, Math.max(...xs, xm), yb, { w: 2 }) + xs.map((x) => line(x, yb, x, yk - PS / 2 - 1, { w: 2 })).join(""); };
const num = (x, y, t) => text(x, y + PS / 2 + 16, t, { size: 11, fill: C.muted });

// ---- pedigree: symbols and an autosomal recessive family ----
{
  let s = defs + T("Reading a pedigree: symbols, and an autosomal recessive pattern");
  // key panel
  s += rect(20, 44, 220, 300, { fill: "#faf9f5", stroke: C.line, rx: 10 }) + text(130, 66, "KEY", { size: 13, weight: "bold" });
  const k = (y, sym, lab) => sym + tl(100, y + 4, lab, { size: 11.5 });
  s += k(96, male(60, 96, false), "unaffected male") + k(134, female(60, 134, false), "unaffected female");
  s += k(172, male(46, 172, true) + female(76, 172, true), "affected");
  s += k(210, male(46, 210, false, true) + female(76, 210, false, true), "carrier (if shown)");
  s += line(36, 250, 86, 250, { w: 2 }) + tl(100, 254, "mates", { size: 11.5 });
  s += line(61, 274, 61, 284, { w: 2 }) + line(41, 284, 81, 284, { w: 2 }) + line(41, 284, 41, 296, { w: 2 }) + line(81, 284, 81, 296, { w: 2 }) + tl(100, 290, "children, in\nbirth order", { size: 11.5 });
  s += tl(36, 334, "I, II, III = generations", { size: 11.5, weight: "bold" });
  // family: three generations
  const gx = 262; s += text(gx + 6, 92, "I", { size: 14, weight: "bold" }) + text(gx + 6, 182, "II", { size: 14, weight: "bold" }) + text(gx + 6, 272, "III", { size: 14, weight: "bold" });
  // gen I
  s += ind(420, 88, "m", false) + ind(490, 88, "f", false) + mate(420, 490, 88) + num(420, 88, "1") + num(490, 88, "2");
  s += kids(455, 88, [390, 520], 178);
  // gen II
  s += ind(390, 178, "f", false) + ind(520, 178, "m", false) + ind(590, 178, "f", false) + mate(520, 590, 178);
  s += num(390, 178, "1") + num(520, 178, "2") + num(590, 178, "3");
  s += kids(555, 178, [470, 530, 590, 650], 268);
  // gen III: unaffected son, affected daughter, unaffected daughter, affected son
  s += ind(470, 268, "m", false) + ind(530, 268, "f", true) + ind(590, 268, "f", false) + ind(650, 268, "m", true);
  s += num(470, 268, "1") + num(530, 268, "2") + num(590, 268, "3") + num(650, 268, "4");
  s += rect(262, 312, 478, 66, NOTE) + text(501, 333, "II-2 × II-3 are both unaffected, yet two children are affected → recessive.", { size: 12, weight: "bold" }) + text(501, 354, "III-2 is an affected daughter of an unaffected father → not X-linked.\nSo: autosomal recessive; II-2 and II-3 must both be carriers.", { size: 12 });
  FIGS["pedigree-ar"] = { svg: svg(760, 404, s, "Pedigree key and a three-generation family showing an autosomal recessive trait"), caption: "Squares are males, circles females, shaded symbols affected. In generation III, affected children appear from two unaffected parents, so the trait is recessive; because one of them is a daughter whose father is unaffected, it cannot be X-linked recessive, so it is autosomal recessive." };
}

// ---- maternal (mitochondrial) inheritance ----
{
  let s = defs + T("Mitochondrial (maternal) inheritance: reciprocal crosses differ");
  const fam = (x0, momAff, dadAff, head, foot, col) => {
    let p = text(x0 + 170, 56, head, { size: 13, weight: "bold", fill: col });
    p += ind(x0 + 135, 96, "m", dadAff) + ind(x0 + 205, 96, "f", momAff) + mate(x0 + 135, x0 + 205, 96);
    const xs = [x0 + 50, x0 + 120, x0 + 190, x0 + 260, x0 + 300].slice(0, 4).map((x, i) => x0 + 65 + i * 70);
    p += kids(x0 + 170, 96, xs, 186);
    xs.forEach((x, i) => p += ind(x, 186, i % 2 ? "f" : "m", momAff));
    p += text(x0 + 170, 236, foot, { size: 12.5, weight: "bold", fill: col });
    return p;
  };
  s += fam(20, true, false, "Affected MOTHER × unaffected father", "→ all sons and daughters affected", RED);
  s += line(380, 44, 380, 250, { w: 1, stroke: C.line });
  s += fam(380, false, true, "Unaffected mother × affected FATHER", "→ no children affected", BLUE);
  s += rect(20, 262, 720, 62, NOTE) + text(380, 285, "Mitochondria come only from the egg, so offspring match the mother's phenotype.", { size: 12.5, weight: "bold" }) + text(380, 306, "No Mendelian ratios; father-to-child transmission never occurs (severity can vary with the mix of organelles).", { size: 12 });
  FIGS["maternal-inheritance"] = { svg: svg(760, 336, s, "Two pedigrees: an affected mother has all affected children, while an affected father has no affected children"), caption: "Swap which parent is affected and the result flips: an affected mother passes a mitochondrial trait to every child, sons and daughters alike, while an affected father passes it to none. Different results from reciprocal crosses are the signature of organelle inheritance." };
}

// ---- chi-square critical values (table) ----
{
  const rows = [[1, "3.84", "6.63"], [2, "5.99", "9.21"], [3, "7.81", "11.34"], [4, "9.49", "13.28"], [5, "11.07", "15.09"]];
  const table = `<table class="formula-table" style="max-width:520px;margin:0 auto">
    <tr><th>df</th><th>Categories</th><th>p = 0.01</th><th>p = 0.05 (standard)</th></tr>
${rows.map(([df, a, b]) => `    <tr><td>${df}</td><td>${df + 1}</td><td>${b}</td><td>${a}</td></tr>`).join("\n")}
  </table>`;
  const caption = "Chi-square critical values. Find the row for your df (number of categories − 1); AP Biology normally uses the p = 0.05 column. If your calculated χ² is greater than the critical value, reject the null hypothesis; if it is smaller, fail to reject it. The stricter p = 0.01 column needs an even larger χ².";
  FIGS["chi-square-table"] = { html: `<!--apv:chi-square-table-->\n  <div class="diagram">${table}<p class="diagram-caption" style="text-align:center; font-size:0.9em; color:#666; margin-top:8px;">${caption}</p></div>\n<!--/apv:chi-square-table-->` };
}

// ---- chromosome structure changes ----
{
  let s = defs + T("Changes in chromosome structure (letters = regions of the chromosome)");
  const W = 28, H = 30;
  const COL = { A: "#e57373", B: "#f0a35e", C: "#e9cf5a", D: "#8fcf7a", E: "#5fb8c9", F: "#7b97d8", G: "#a98bd6", P: "#c9c9c9", Q: "#b5b5b5", R: "#a0a0a0", S: "#d6d6d6" };
  const chrom = (x, y, letters, o = {}) => {
    let p = rect(x - 3, y - 3, letters.length * W + 6, H + 6, { fill: "none", stroke: "#666", w: 2, rx: 16 });
    [...letters].forEach((ch, i) => { const hl = o.hl && o.hl.includes(i); p += rect(x + i * W, y, W, H, { fill: COL[ch] || "#ddd", stroke: hl ? C.ink : "#fff", w: hl ? 2.5 : 1.5, rx: i === 0 ? 13 : i === letters.length - 1 ? 13 : 2 }) + text(x + i * W + W / 2, y + 20, ch, { size: 13, weight: "bold", fill: "#222" }); });
    return p;
  };
  const row = (y, name, desc, after, hl, col) => text(30, y + 12, name, { size: 13.5, weight: "bold", anchor: "start", fill: col }) + text(30, y + 30, desc, { size: 11.5, anchor: "start", fill: C.muted }) + chrom(200, y, "ABCDEFG") + arrow(410, y + 15, 440, y + 15) + chrom(456, y, after, { hl });
  s += text(298, 56, "normal", { size: 12, weight: "bold", fill: C.muted }) + text(560, 56, "after the change", { size: 12, weight: "bold", fill: C.muted });
  s += row(70, "Deletion", "a segment is lost", "ABEFG", [], RED);
  s += line(512, 64, 512, 106, { w: 2.5, stroke: RED, dash: "4 3" }) + text(512, 122, "C D missing", { size: 11, fill: RED, weight: "bold" });
  s += row(140, "Duplication", "a segment is repeated", "ABCDCDEFG", [4, 5], GOLD);
  s += row(210, "Inversion", "a segment flips end to end", "ABEDCFG", [2, 3, 4], PURPLE);
  // translocation: two nonhomologous chromosomes swap
  const yT = 290;
  s += text(30, yT + 12, "Reciprocal\ntranslocation", { size: 13.5, weight: "bold", anchor: "start", fill: TEAL }) + text(30, yT + 48, "nonhomologous\nchromosomes swap pieces", { size: 11.5, anchor: "start", fill: C.muted });
  s += chrom(200, yT, "ABCDEFG") + chrom(200, yT + 46, "PQRS");
  s += arrow(410, yT + 38, 440, yT + 38);
  s += chrom(456, yT, "ABCDERS", { hl: [5, 6] }) + chrom(456, yT + 46, "PQFG", { hl: [2, 3] });
  s += rect(20, 392, 720, 58, NOTE) + text(380, 414, "Deletions and duplications change gene copy number. Inversions and balanced translocations", { size: 12.5, weight: "bold" }) + text(380, 434, "keep every gene but can break one or move it next to new regulatory DNA.", { size: 12.5, weight: "bold" });
  FIGS["chromosome-structure"] = { svg: svg(760, 462, s, "Bars of lettered chromosome regions showing a deletion, a duplication, an inversion and a reciprocal translocation"), caption: "Starting from ABCDEFG: a deletion loses CD (ABEFG), a duplication repeats CD (ABCDCDEFG), an inversion flips CDE (ABEDCFG), and a reciprocal translocation swaps the FG end with the RS end of a nonhomologous chromosome." };
}
