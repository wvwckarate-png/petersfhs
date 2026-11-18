// Figures, tables and worked examples for the AP Chemistry material added in Nov 2026 (authoring time only).
import { C, svg, text, line, circle, rect, path, defs, arrow, figure, molGrid } from "./lib.mjs";
import { BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, note } from "./lib2.mjs";
export const FIGS = {};
const r1 = (n) => Math.round(n * 10) / 10;
const ell = (cx, cy, rx, ry, o = {}) => `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="${o.fill || "none"}"${o.op ? ` fill-opacity="${o.op}"` : ""} stroke="${o.stroke || "none"}" stroke-width="${o.w || 1.5}"${o.rot ? ` transform="rotate(${o.rot} ${r1(cx)} ${r1(cy)})"` : ""}${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
const poly = (pts, o = {}) => `<polygon points="${pts.map(([x, y]) => r1(x) + "," + r1(y)).join(" ")}" fill="${o.fill || "none"}"${o.op ? ` fill-opacity="${o.op}"` : ""} stroke="${o.stroke || "none"}" stroke-width="${o.w || 1}"/>`;
const pl = (pts, o = {}) => path(pts.map(([x, y], i) => (i ? "L " : "M ") + r1(x) + " " + r1(y)).join(" "), o);
const worked = (id, problem, solution) => ({ html: `<!--apv:${id}-->\n  <div class="worked"><span class="tag-label example">Worked Example</span><p>${problem}</p><details class="solution"><summary>Show the reasoning</summary><div class="sol-content">${solution}</div></details></div>\n<!--/apv:${id}-->` });

// ---------- acid-base solver (charge balance, bisection on log[H+]) ----------
const Kw = 1e-14;
const solveH = (imb) => { let lo = -15, hi = 1; for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (imb(10 ** m) > 0) hi = m; else lo = m; } return -(lo + hi) / 2; };
// weak acid (Va mL of Ca M, Ka) + strong base (Cb M), vb mL added
const pHweakAcid = (Va, Ca, Ka, Cb, vb) => { const V = Va + vb, A = Ca * Va / V, Na = Cb * vb / V; return solveH((h) => h + Na - Kw / h - A * Ka / (h + Ka)); };
const pHstrongAcid = (Va, Ca, Cb, vb) => { const V = Va + vb, A = Ca * Va / V, Na = Cb * vb / V; return solveH((h) => h + Na - Kw / h - A); };
const pHdiprotic = (Va, Ca, K1, K2, Cb, vb) => { const V = Va + vb, T = Ca * Va / V, Na = Cb * vb / V; return solveH((h) => h + Na - Kw / h - T * (K1 * h + 2 * K1 * K2) / (h * h + K1 * h + K1 * K2)); };
// weak base B (Vb mL of Cb M, conjugate acid Ka) titrated with strong acid (Ca M), va mL added
const pHweakBase = (Vb, Cb, Ka, Ca, va) => { const V = Vb + va, N = Cb * Vb / V, Cl = Ca * va / V; return solveH((h) => h + N * h / (h + Ka) - Kw / h - Cl); };
// plot helper: pH(v) on axes with v in [0,vmax], pH in [0,14]
const phPath = (fn, x0, y0, w, h, vmax, o = {}) => { const pts = []; const n = 400; for (let i = 0; i <= n; i++) { const v = vmax * i / n; pts.push([x0 + v / vmax * w, y0 - fn(v) / 14 * h]); } return pl(pts, { stroke: o.stroke || RED, w: o.w || 3.5, dash: o.dash }); };
const phAxis = (x0, y0, w, h) => { let g = ""; for (let p = 0; p <= 14; p += 2) g += line(x0 - 5, y0 - p / 14 * h, x0, y0 - p / 14 * h, { w: 1.5 }) + text(x0 - 9, y0 - p / 14 * h + 4, String(p), { size: 11, anchor: "end", fill: C.muted }); return g; };

// ======================= Unit 2: sigma vs pi, rotation, cis/trans =======================
{
  let s = defs + title("σ and π bonds: where the electrons sit, and why a double bond cannot rotate", 15);
  // --- sigma: head-on overlap
  s += text(190, 54, "σ bond: head-on overlap", { size: 13, weight: "bold", fill: BLUE });
  const ya = 104, xa = 85, xb = 295;
  s += ell(xa + 58, ya, 62, 22, { fill: "#9cc0ee", op: 0.55, stroke: BLUE, w: 1.5 }) + ell(xa - 18, ya, 16, 11, { fill: "#9cc0ee", op: 0.55, stroke: BLUE, w: 1.2 });
  s += ell(xb - 58, ya, 62, 22, { fill: "#9cc0ee", op: 0.55, stroke: BLUE, w: 1.5 }) + ell(xb + 18, ya, 16, 11, { fill: "#9cc0ee", op: 0.55, stroke: BLUE, w: 1.2 });
  s += line(xa - 30, ya, xb + 30, ya, { stroke: "#999", w: 1, dash: "4 4" }) + circle(xa, ya, 5, { fill: C.ink }) + circle(xb, ya, 5, { fill: C.ink }) + text(xa - 40, ya + 4, "nucleus", { size: 11, fill: C.muted, anchor: "end" }) + text(xb + 42, ya + 4, "nucleus", { size: 11, fill: C.muted, anchor: "start" });
  s += text(190, ya + 46, "shared electrons lie ON the axis, between the nuclei", { size: 11.5, fill: C.muted });
  s += text(190, ya - 34, "overlap", { size: 11.5, weight: "bold", fill: BLUE });
  // --- pi: side-by-side overlap
  s += text(190, 190, "π bond: side-by-side overlap of p orbitals", { size: 13, weight: "bold", fill: PURPLE });
  const yp = 262, x1 = 150, x2 = 230;
  s += ell(190, yp - 33, 74, 17, { fill: "#d8c4f0", op: 0.75, stroke: "none" }) + ell(190, yp + 33, 74, 17, { fill: "#d8c4f0", op: 0.75, stroke: "none" });
  [x1, x2].forEach((x) => s += ell(x, yp - 28, 15, 27, { stroke: PURPLE, w: 1.5 }) + ell(x, yp + 28, 15, 27, { stroke: PURPLE, w: 1.5 }) + circle(x, yp, 5, { fill: C.ink }));
  s += line(x1 - 70, yp, x2 + 70, yp, { stroke: "#999", w: 1, dash: "4 4" }) + text(x2 + 70, yp + 4, "bond axis", { size: 11, fill: C.muted, anchor: "start" });
  s += text(52, yp - 30, "above", { size: 11.5, fill: PURPLE, weight: "bold" }) + text(52, yp + 36, "below", { size: 11.5, fill: PURPLE, weight: "bold" });
  s += text(190, yp + 80, "electron density is above and below the axis,\nnot between the nuclei → weaker than σ", { size: 11.5, fill: C.muted });
  s += line(380, 44, 380, 360, { stroke: C.line, w: 1.5 });
  // --- why no rotation
  s += text(565, 54, "Twisting a double bond breaks the π overlap", { size: 13, weight: "bold" });
  const pp = (x, y, side) => side ? ell(x, y - 22, 12, 21, { fill: "#d8c4f0", op: 0.8, stroke: PURPLE }) + ell(x, y + 22, 12, 21, { fill: "#d8c4f0", op: 0.8, stroke: PURPLE }) + circle(x, y, 4, { fill: C.ink })
    : ell(x, y, 13, 13, { fill: "#d8c4f0", op: 0.8, stroke: PURPLE }) + circle(x, y, 4, { fill: C.ink }) + text(x, y - 18, "", {});
  s += pp(425, 112, true) + pp(470, 112, true) + line(425, 112, 470, 112, { w: 2 }) + text(447, 172, "p orbitals parallel:\nπ overlap ✓", { size: 11.5, fill: GREEN, weight: "bold" });
  s += arrow(510, 112, 560, 112, { w: 2.5 }) + text(535, 100, "twist 90°", { size: 11.5, fill: C.red, weight: "bold" });
  s += pp(600, 112, true) + pp(645, 112, false) + line(600, 112, 645, 112, { w: 2 }) + text(668, 108, "lobes now point\ntoward and away\nfrom you", { size: 11, fill: C.muted, anchor: "start" });
  s += text(622, 172, "perpendicular:\nno π overlap ✗", { size: 11.5, fill: RED, weight: "bold" });
  // --- cis / trans
  s += text(565, 226, "So 1,2-dichloroethene has two isomers", { size: 13, weight: "bold" });
  const alk = (cx, cy, cl2up) => {
    let g = line(cx - 20, cy - 3, cx + 20, cy - 3, { w: 2.2 }) + line(cx - 20, cy + 3, cx + 20, cy + 3, { w: 2.2 }) + text(cx - 26, cy + 5, "C", { size: 14, weight: "bold" }) + text(cx + 26, cy + 5, "C", { size: 14, weight: "bold" });
    const sub = (x, y, ang, lab, col) => { const dx = Math.cos(ang * Math.PI / 180), dy = -Math.sin(ang * Math.PI / 180); return line(x + dx * 10, y + dy * 10, x + dx * 30, y + dy * 30, { w: 2 }) + text(x + dx * 42, y + dy * 42 + 5, lab, { size: 14, weight: "bold", fill: col }); };
    const L = cx - 26, R = cx + 26;
    g += sub(L, cy, 120, "Cl", GREEN) + sub(L, cy, 240, "H", C.ink);
    g += cl2up ? sub(R, cy, 60, "Cl", GREEN) + sub(R, cy, 300, "H", C.ink) : sub(R, cy, 60, "H", C.ink) + sub(R, cy, 300, "Cl", GREEN);
    return g;
  };
  s += alk(475, 290, true) + text(475, 352, "cis: both Cl on the same side", { size: 11.5, weight: "bold", fill: BLUE });
  s += alk(655, 290, false) + text(655, 352, "trans: Cl on opposite sides", { size: 11.5, weight: "bold", fill: BLUE });
  s += rect(30, 378, 700, 40, NOTE) + text(380, 403, "A C–C single bond (σ only) rotates freely, so 1,2-dichloroethane, ClH₂C–CH₂Cl, has no cis/trans isomers.", { size: 12, weight: "bold" });
  FIGS["sigma-pi-overlap"] = { svg: svg(760, 432, s, "Head-on sigma overlap versus side-by-side pi overlap, why twisting a double bond breaks the pi bond, and cis and trans 1,2-dichloroethene"), caption: "A σ bond concentrates electrons on the axis between the nuclei, so it is stronger than the side-by-side π overlap. Rotating one end of a double bond would turn its p orbital until the π overlap is lost, so C=C is locked in place and cis and trans isomers are different compounds." };
}

// ======================= Unit 3: dispersion and shape =======================
FIGS["pentane-isomers-bp"] = { html: molGrid("pentane-isomers-bp", [
  ["CCCCC", "n-pentane, C₅H₁₂", "long chain: large contact area<br>boiling point 36 °C"],
  ["CC(C)(C)C", "neopentane, C₅H₁₂", "compact, nearly spherical: small contact area<br>boiling point 9.5 °C"],
], "Same formula and the same 42 electrons, so the polarizability is about the same. The straight chains of n-pentane can lie side by side and touch along their whole length, so their dispersion forces are stronger and the boiling point is higher.", 2, 1.7) };

// ======================= Unit 3: diamond vs graphite =======================
const Opt = { ay: 0.6, ax: 0.35 };
{
  let s = defs + title("Two network solids of carbon: structure decides the properties", 15);
  // diamond: real 3-D cluster (central atom, 4 neighbors, 12 second neighbors), rotated and projected
  const d = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]];
  const atoms = [[0, 0, 0]], bonds = [];
  d.forEach((v, i) => { atoms.push(v); bonds.push([0, i + 1]); });
  d.forEach((v, i) => d.forEach((u, j) => { if (i === j) return; atoms.push([v[0] - u[0], v[1] - u[1], v[2] - u[2]]); bonds.push([i + 1, atoms.length - 1]); }));
  // orient the (1,1,1) bond straight up, then tilt slightly so no atoms hide behind each other
  const n = [1, 1, 1].map((c) => c / Math.sqrt(3)), up = [0, 1, 0];
  const k = [n[1] * up[2] - n[2] * up[1], n[2] * up[0] - n[0] * up[2], n[0] * up[1] - n[1] * up[0]], sn = Math.hypot(...k), cs = n[1];
  const kk = k.map((c) => c / sn), th = Math.atan2(sn, cs);
  const rod = (v) => { const kv = kk[0] * v[0] + kk[1] * v[1] + kk[2] * v[2]; const cr = [kk[1] * v[2] - kk[2] * v[1], kk[2] * v[0] - kk[0] * v[2], kk[0] * v[1] - kk[1] * v[0]]; return v.map((c, i) => c * Math.cos(th) + cr[i] * Math.sin(th) + kk[i] * kv * (1 - Math.cos(th))); };
  const ay = Opt.ay, ax = Opt.ax, sc = 36, cx = 190, cy = 205;
  const P = atoms.map((a) => { const [x, y, z] = rod(a); const x1 = x * Math.cos(ay) + z * Math.sin(ay), z1 = -x * Math.sin(ay) + z * Math.cos(ay); const y1 = y * Math.cos(ax) - z1 * Math.sin(ax), z2 = y * Math.sin(ax) + z1 * Math.cos(ax); return [cx + x1 * sc, cy - y1 * sc, z2]; });
  const zs = P.map((p) => p[2]), zmin = Math.min(...zs), zmax = Math.max(...zs);
  const shade = (z) => { const t = (z - zmin) / (zmax - zmin); const c = Math.round(150 - t * 95); return `rgb(${c},${c},${c})`; };
  bonds.slice().sort((a, b) => (P[a[0]][2] + P[a[1]][2]) - (P[b[0]][2] + P[b[1]][2])).forEach(([a, b]) => s += line(P[a][0], P[a][1], P[b][0], P[b][1], { stroke: a === 0 ? BLUE : "#8a8a8a", w: a === 0 ? 3.5 : 2.5 }));
  P.map((p, i) => [p, i]).sort((a, b) => a[0][2] - b[0][2]).forEach(([p, i]) => s += circle(p[0], p[1], i === 0 ? 10 : 8, { fill: i === 0 ? BLUE : shade(p[2]), stroke: "#333", w: 1.2 }));
  s += text(190, 54, "Diamond", { size: 14, weight: "bold", fill: BLUE });
  s += text(190, 76, "every C bonded to 4 others (tetrahedral, 109.5°)", { size: 11.5, fill: C.muted });
  // graphite: three stacked honeycomb sheets in oblique view
  const gx = 470, gy0 = 100, gap = 82, b = 1, s3 = Math.sqrt(3), gs = 20;
  const sheet = (Y, shift) => {
    const pts = new Map(), edges = new Set();
    const key = (u, v) => `${Math.round(u * 100)},${Math.round(v * 100)}`;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) {
      const cu = i * s3 + j * s3 / 2 + shift, cv = j * 1.5;
      const vs = []; for (let k = 0; k < 6; k++) { const a = (30 + 60 * k) * Math.PI / 180; const u = cu + b * Math.cos(a), v = cv + b * Math.sin(a); const kk = key(u, v); pts.set(kk, [u, v]); vs.push(kk); }
      for (let k = 0; k < 6; k++) { const e = [vs[k], vs[(k + 1) % 6]].sort().join("|"); edges.add(e); }
    }
    const pr = ([u, v]) => [gx + gs * (u + v * 0.55), Y + gs * 0.72 * (2.5 - v)];
    let g = ""; edges.forEach((e) => { const [p, q] = e.split("|").map((k) => pr(pts.get(k))); g += line(p[0], p[1], q[0], q[1], { stroke: "#555", w: 1.8 }); });
    pts.forEach((p) => { const [x, y] = pr(p); g += circle(x, y, 3.8, { fill: "#333" }); });
    return g;
  };
  s += sheet(gy0 + 2 * gap, 0) + sheet(gy0 + gap, s3 / 2) + sheet(gy0, 0);
  [505, 655].forEach((x) => { s += line(x, gy0 + 54, x, gy0 + gap - 4, { stroke: RED, w: 1.8, dash: "4 4" }) + line(x, gy0 + gap + 54, x, gy0 + 2 * gap - 4, { stroke: RED, w: 1.8, dash: "4 4" }); });
  s += text(565, 54, "Graphite", { size: 14, weight: "bold", fill: BLUE });
  s += text(565, 76, "every C bonded to 3 others in flat hexagonal layers", { size: 11.5, fill: C.muted });
  s += text(688, gy0 + gap - 6, "weak\ndispersion\nforces\nbetween\nlayers", { size: 11, fill: RED, weight: "bold", anchor: "start" });
  s += line(380, 44, 380, 330, { stroke: C.line, w: 1.5 });
  s += rect(30, 336, 330, 76, NOTE) + text(195, 358, "rigid 3-D network of strong covalent bonds", { size: 12, weight: "bold" }) + text(195, 380, "→ extremely hard, very high melting point\n→ no mobile electrons: does not conduct", { size: 12 });
  s += rect(400, 336, 330, 76, NOTE) + text(565, 358, "strong bonds within each layer only", { size: 12, weight: "bold" }) + text(565, 380, "→ layers slide: soft and slippery\n→ delocalized electrons move along a layer: conducts", { size: 12 });
  FIGS["diamond-graphite"] = { svg: svg(760, 426, s, "Diamond as a three-dimensional tetrahedral network compared with graphite as stacked flat layers held by dispersion forces"), caption: "Both are pure carbon held by covalent bonds, but the arrangement differs. Diamond's four bonds per atom reach in every direction, so nothing can slide and no electrons are free. Graphite's three bonds per atom stay inside a layer; the layers are held only by dispersion forces, and the fourth electron of each carbon is delocalized along the layer." };
}

// ======================= Unit 3: particulate pictures of solutions =======================
{
  let s = defs + title("Particle pictures of solutions: ions separate and are hydrated; molecules stay whole", 15);
  const water = (x, y, ang) => { // ang = direction (deg, SVG coords) of the H-H bisector from O
    let g = ""; [-52, 52].forEach((da) => { const a = (ang + da) * Math.PI / 180; g += line(x, y, x + 12 * Math.cos(a), y + 12 * Math.sin(a), { stroke: "#777", w: 1.5 }) + circle(x + 12 * Math.cos(a), y + 12 * Math.sin(a), 5, { fill: "#fff", stroke: "#666", w: 1.2 }); });
    return g + circle(x, y, 8, { fill: "#e0705a", stroke: "#8a2e1e", w: 1.2 });
  };
  const waterH = (x, y, ang) => { // one O-H points along ang (toward an anion or a lone pair)
    let g = ""; [0, 104.5].forEach((da) => { const a = (ang + da) * Math.PI / 180; g += line(x, y, x + 12 * Math.cos(a), y + 12 * Math.sin(a), { stroke: "#777", w: 1.5 }) + circle(x + 12 * Math.cos(a), y + 12 * Math.sin(a), 5, { fill: "#fff", stroke: "#666", w: 1.2 }); });
    return g + circle(x, y, 8, { fill: "#e0705a", stroke: "#8a2e1e", w: 1.2 });
  };
  const cation = (x, y, a0) => { let g = ""; for (let k = 0; k < 4; k++) { const a = a0 + k * 90, R = a * Math.PI / 180; g += water(x + 27 * Math.cos(R), y + 27 * Math.sin(R), a); } return g + circle(x, y, 12, { fill: "#9b8fd6", stroke: "#4b3e94" }) + text(x, y + 4, "Na⁺", { size: 10.5, weight: "bold" }); };
  const anion = (x, y, a0) => { let g = ""; for (let k = 0; k < 4; k++) { const a = a0 + k * 90, R = a * Math.PI / 180; g += waterH(x + 39 * Math.cos(R), y + 39 * Math.sin(R), a + 180); } return g + circle(x, y, 17, { fill: "#8fd18f", stroke: "#2e7d32" }) + text(x, y + 4, "Cl⁻", { size: 11, weight: "bold" }); };
  s += rect(20, 40, 350, 270, { fill: "#f4f9ff", stroke: "#b9cde6", rx: 10 }) + text(195, 62, "NaCl(aq): an ionic solute", { size: 13, weight: "bold", fill: BLUE });
  s += cation(95, 125, 20) + anion(270, 120, 0) + anion(105, 240, 45) + cation(268, 238, 0);
  s += water(185, 185, 200) + water(340, 180, 120) + water(190, 290, 30);
  s += rect(390, 40, 350, 270, { fill: "#f4f9ff", stroke: "#b9cde6", rx: 10 }) + text(565, 62, "CH₃OH(aq): a molecular solute", { size: 13, weight: "bold", fill: BLUE });
  const meoh = (x, y, flip) => { const k = flip ? -1 : 1; return line(x, y, x + 26 * k, y, { stroke: "#777", w: 2 }) + line(x + 26 * k, y, x + 34 * k, y + 10, { stroke: "#777", w: 1.5 }) + circle(x, y, 13, { fill: "#8d8d8d", stroke: "#444" }) + text(x, y + 4, "CH₃", { size: 10, weight: "bold", fill: "#fff" }) + circle(x + 34 * k, y + 10, 5, { fill: "#fff", stroke: "#666", w: 1.2 }) + circle(x + 26 * k, y, 8, { fill: "#e0705a", stroke: "#8a2e1e", w: 1.2 }); };
  const hb = (x1, y1, x2, y2) => line(x1, y1, x2, y2, { stroke: GREEN, w: 2, dash: "3 3" });
  // molecule 1 (O at 476,120; its H at 484,130); water donates H to its O, and accepts from its H
  s += meoh(450, 120, false) + waterH(500, 85, 135) + hb(491, 94, 481, 113) + water(506, 160, 200) + hb(488, 134, 499, 152);
  s += meoh(690, 225, true) + waterH(640, 190, 45) + hb(649, 198, 659, 218) + water(632, 265, 340) + hb(653, 239, 640, 259);
  s += water(620, 110, 90) + water(700, 120, 250) + water(450, 230, 300) + water(530, 270, 10) + water(560, 200, 140);
  s += text(565, 300, "molecules stay whole; dashed lines = hydrogen bonds", { size: 11, fill: GREEN, weight: "bold" });
  s += rect(20, 322, 720, 64, NOTE) + text(380, 344, "Water's O end (δ−, red) points toward cations; its H ends (δ+, white) point toward anions.", { size: 12, weight: "bold" }) + text(380, 368, "Ions appear in the formula ratio: NaCl gives 1 Na⁺ : 1 Cl⁻ (CaCl₂ would give 1 Ca²⁺ : 2 Cl⁻).", { size: 12 });
  FIGS["solution-particles"] = { svg: svg(760, 400, s, "Particle diagrams of aqueous sodium chloride with oriented hydrating water molecules and aqueous methanol with hydrogen bonds"), caption: "Check three things in any solution picture: ionic solutes are drawn as separate ions in the formula ratio, water molecules face cations with O and anions with H, and molecular solutes stay intact, linked to water by hydrogen bonds (H to a lone pair on O)." };
}

// ======================= Unit 3: chromatography =======================
{
  let s = defs + title("Reading a paper or thin-layer chromatogram", 16);
  const L = 140, R = 260, top = 50, bot = 340, base = 292, front = 76, yA = 240, yB = 134;
  s += rect(L, top, R - L, bot - top, { fill: "#fffdf6", stroke: "#999", rx: 2, opacity: 0.95 });
  s += rect(L + 1, front, R - L - 2, base - front + 20, { fill: "#e3eefb", stroke: "none", rx: 0, opacity: 0.6 });
  s += line(L, front, R, front, { stroke: BLUE, w: 2, dash: "6 4" }) + line(L, base, R, base, { stroke: "#555", w: 1.5 });
  s += rect(110, 312, 180, 36, { fill: "#a9cdf0", stroke: "#8fb3d9", rx: 4, opacity: 0.75 }) + text(200, 336, "solvent", { size: 12, fill: "#1d4f8f", weight: "bold" });
  s += circle(200, base, 5, { stroke: "#777", w: 1.5, fill: "#fff" });
  s += ell(200, yA, 11, 8, { fill: RED, op: 0.75 }) + text(220, yA + 5, "A", { size: 13, weight: "bold", fill: RED, anchor: "start" });
  s += ell(200, yB, 11, 8, { fill: PURPLE, op: 0.75 }) + text(220, yB + 5, "B", { size: 13, weight: "bold", fill: PURPLE, anchor: "start" });
  s += text(L - 6, front + 4, "solvent front", { size: 11.5, fill: BLUE, anchor: "end", weight: "bold" }) + text(L - 6, base + 4, "starting line", { size: 11.5, anchor: "end", weight: "bold" }) + text(L - 6, base + 18, "(pencil, above solvent)", { size: 11, anchor: "end", fill: C.muted });
  const dim = (x, y1, y2, lab, col, mk) => line(x, y1, x, y2 + 3, { stroke: col, w: 2, marker: mk }) + line(x, y2, x, y1 - 3, { stroke: col, w: 2, marker: mk }) + line(x - 5, y1, x + 5, y1, { stroke: col, w: 1.5 }) + text(x + 8, (y1 + y2) / 2 + 4, lab, { size: 12, weight: "bold", fill: col, anchor: "start" });
  s += line(206, yA, 274, yA, { stroke: "#bbb", w: 1, dash: "2 3" }) + line(206, yB, 314, yB, { stroke: "#bbb", w: 1, dash: "2 3" }) + line(R, front, 354, front, { stroke: "#bbb", w: 1, dash: "2 3" });
  s += dim(274, base, yA, "d(A)", RED, "ahr") + dim(314, base, yB, "d(B)", PURPLE, "ah") + dim(354, base, front, "d(front)", BLUE, "ahb");
  s += line(L, base, 360, base, { stroke: "#bbb", w: 1, dash: "2 3" });
  s += rect(440, 50, 300, 96, NOTE) + text(590, 74, "Rf = d(spot) ÷ d(solvent front)", { size: 14, weight: "bold" }) + text(590, 98, "Measure both from the starting line,\nto the center of the spot. Rf is always 0 to 1.", { size: 12 });
  s += rect(440, 160, 300, 176, { fill: "#fff", stroke: "#ddd", rx: 10 }) + text(590, 184, "Polar plate (paper or silica),", { size: 12.5, weight: "bold" }) + text(590, 202, "less polar solvent:", { size: 12.5, weight: "bold" });
  s += ell(462, 232, 9, 7, { fill: RED, op: 0.75 }) + text(478, 230, "A: small Rf → more polar;", { size: 12, anchor: "start" }) + text(478, 248, "it sticks to the polar plate", { size: 12, anchor: "start", fill: C.muted });
  s += ell(462, 284, 9, 7, { fill: PURPLE, op: 0.75 }) + text(478, 282, "B: large Rf → less polar;", { size: 12, anchor: "start" }) + text(478, 300, "it stays dissolved in the solvent", { size: 12, anchor: "start", fill: C.muted }) + text(478, 318, "and travels farther", { size: 12, anchor: "start", fill: C.muted });
  FIGS["chromatogram-rf"] = { svg: svg(760, 362, s, "Paper chromatogram with starting line, solvent front and two separated spots, showing the distances used to calculate Rf"), caption: "The mixture is spotted on a pencil line above the solvent. As the solvent climbs, each component moves a fraction of the solvent's distance: Rf = spot distance ÷ solvent-front distance, both measured from the starting line. On a polar plate, the more polar component lags behind (smaller Rf)." };
}

// ======================= Unit 3: more gas-law graphs =======================
{
  let s = defs + title("Three more ways to graph the gas laws", 16);
  const w = 190, h = 140, y0 = 200;
  const ax = (x0, xl, yl) => line(x0, y0, x0 + w, y0, { w: 2 }) + line(x0, y0, x0, y0 - h, { w: 2 }) + text(x0 + w / 2, y0 + 22, xl, { size: 11.5, weight: "bold" }) + text(x0 - 14, y0 - h / 2, yl, { size: 11.5, weight: "bold", rotate: -90 });
  // (a) P vs 1/V
  let x0 = 50;
  s += text(x0 + w / 2, 52, "Boyle's law, straightened", { size: 13, weight: "bold", fill: BLUE }) + ax(x0, "1/V", "pressure P") + line(x0, y0, x0 + w - 10, y0 - h + 10, { stroke: RED, w: 3 }) + circle(x0, y0, 3.5, { fill: C.ink });
  s += text(x0 + w / 2 + 4, y0 + 46, "P = nRT × (1/V): a straight line\nthrough the origin (n, T constant)", { size: 11, fill: C.muted });
  // (b) V vs T in Celsius, extrapolated to -273
  x0 = 290; const tmin = -300, tmax = 200, X = (t) => x0 + (t - tmin) / (tmax - tmin) * w, xz = X(0);
  s += text(x0 + w / 2, 52, "Charles's law in °C", { size: 13, weight: "bold", fill: BLUE });
  s += line(x0, y0, x0 + w, y0, { w: 2 }) + line(xz, y0, xz, y0 - h, { w: 2 }) + text(xz + 4, y0 - h + 4, "V", { size: 11.5, weight: "bold", anchor: "start" }) + text(x0 + w / 2, y0 + 34, "temperature (°C)", { size: 11.5, weight: "bold" });
  s += line(xz, y0, xz, y0 + 5, { w: 1.5 }) + text(xz, y0 + 17, "0", { size: 11, fill: C.muted }) + line(X(200), y0, X(200), y0 + 5, { w: 1.5 }) + text(X(200) - 4, y0 + 17, "200", { size: 11, fill: C.muted });
  [[0.42, RED], [0.27, "#e39a7f"]].forEach(([k, col]) => { const V = (t) => y0 - k * (t + 273) / 473 * h * 1.9; s += line(X(-273), y0, xz, V(0), { stroke: col, w: 2.5, dash: "5 4" }) + line(xz, V(0), X(200), V(200), { stroke: col, w: 3 }); });
  s += circle(X(-273), y0, 4.5, { fill: GOLD, stroke: C.ink, w: 1 }) + text(X(-273) + 2, y0 + 17, "−273", { size: 11, fill: C.ink, weight: "bold" });
  s += text(x0 + w / 2 + 4, y0 + 58, "measured (solid) lines extrapolate\nto V = 0 at −273 °C = 0 K", { size: 11, fill: C.muted });
  // (c) P vs T for two amounts
  x0 = 530;
  s += text(x0 + w / 2, 52, "Gay-Lussac's law, two samples", { size: 13, weight: "bold", fill: BLUE }) + ax(x0, "temperature T (K)", "pressure P");
  s += line(x0, y0, x0 + w - 20, y0 - h + 6, { stroke: RED, w: 3 }) + line(x0, y0, x0 + w - 6, y0 - (h - 6) * 0.5 * (w - 6) / (w - 20), { stroke: BLUE, w: 3 }) + circle(x0, y0, 3.5, { fill: C.ink });
  s += text(x0 + w - 44, y0 - h + 10, "2n", { size: 12, weight: "bold", fill: RED, anchor: "end" }) + text(x0 + w - 10, y0 - 80, "n", { size: 12, weight: "bold", fill: BLUE, anchor: "end" });
  s += text(x0 + w / 2 + 4, y0 + 46, "slope = nR/V: more moles in the\nsame volume → steeper line", { size: 11, fill: C.muted });
  FIGS["gas-law-graphs-2"] = { svg: svg(760, 290, s, "Pressure versus 1 over V, volume versus Celsius temperature extrapolated to minus 273 degrees, and pressure versus kelvin temperature for two amounts of gas"), caption: "Plotting P against 1/V turns Boyle's curve into a straight line. Volume-temperature lines in °C all extrapolate to zero volume at −273 °C, which is why 0 K is absolute zero. On a P-versus-T graph, the slope nR/V is larger for the sample with more moles." };
}

// ======================= Unit 5: Maxwell-Boltzmann with a catalyst =======================
{
  let s = defs + title("Reading a Maxwell-Boltzmann graph: what a catalyst changes", 16);
  const x0 = 70, y0 = 270, w = 420, h = 200, Emax = 6.5, f = (E) => Math.sqrt(E) * Math.exp(-E) / 0.4289;
  const X = (E) => x0 + E / Emax * w, Y = (E) => y0 - f(E) * h * 0.92;
  const area = (E1, fill, op) => { const pts = [[X(E1), y0]]; for (let i = 0; i <= 60; i++) { const E = E1 + (Emax - E1) * i / 60; pts.push([X(E), Y(E)]); } pts.push([X(Emax), y0]); return poly(pts, { fill, op }); };
  const Ea = 3.6, Ec = 2.1;
  s += area(Ec, "#bfe0c3", 0.9) + area(Ea, "#2E7D32", 0.55);
  s += axes(x0, y0, w, h, "kinetic energy of particles", "number of particles");
  const pts = []; for (let i = 0; i <= 200; i++) { const E = Emax * i / 200; pts.push([X(E), Y(E)]); } s += pl(pts, { stroke: BLUE, w: 3.5 });
  s += line(X(Ea), y0, X(Ea), y0 - 150, { stroke: RED, w: 2, dash: "6 4" }) + text(X(Ea), y0 - 172, "Eₐ\nuncatalyzed", { size: 12, weight: "bold", fill: RED });
  s += line(X(Ec), y0, X(Ec), y0 - 150, { stroke: GREEN, w: 2, dash: "6 4" }) + text(X(Ec), y0 - 172, "Eₐ\ncatalyzed", { size: 12, weight: "bold", fill: GREEN });
  s += arrow(X(Ea) - 4, y0 - 140, X(Ec) + 6, y0 - 140, { stroke: GREEN, marker: "ahg", w: 2 });
  s += text(X(0.55), Y(0.55) - 12, "same curve (same T)", { size: 11.5, weight: "bold", fill: BLUE, anchor: "start" });
  s += arrow(X(5.0), y0 - 44, X(4.1), y0 - 8, { w: 1.5 }) + text(X(5.1), y0 - 66, "enough energy even\nwithout a catalyst", { size: 11, anchor: "middle" });
  s += arrow(X(2.85), y0 - 80, X(2.6), y0 - 22, { w: 1.5 }) + text(X(2.85), y0 - 110, "extra particles\nthat can react", { size: 11, anchor: "middle" });
  s += rect(530, 50, 210, 236, NOTE) + text(635, 74, "Two ways to speed it up", { size: 13, weight: "bold" });
  s += text(635, 100, "Catalyst:", { size: 12.5, weight: "bold", fill: GREEN }) + text(635, 120, "curve unchanged; the Eₐ line\nmoves left, so more area\nlies to its right", { size: 12 });
  s += text(635, 186, "Higher temperature:", { size: 12.5, weight: "bold", fill: RED }) + text(635, 206, "Eₐ line stays; the curve\nflattens and spreads right", { size: 12 });
  s += text(635, 254, "Total area = all particles,\nso it never changes.", { size: 12, weight: "bold" });
  FIGS["maxwell-catalyst"] = { svg: svg(760, 312, s, "Maxwell-Boltzmann distribution at one temperature with the activation energy line moved left by a catalyst"), caption: "The shaded area to the right of an Eₐ line is the fraction of collisions energetic enough to react. A catalyst does not change the particles' energies at all; it provides a pathway with a lower Eₐ, so the line moves left and the reacting fraction (light plus dark green) grows." };
}

// ======================= Unit 5: catalyzed mechanism with an intermediate =======================
{
  let s = defs + title("A catalyzed pathway has more steps, each with a smaller hump", 16);
  const x0 = 70, y0 = 300, w = 440, h = 240;
  const sig = (t) => 1 / (1 + Math.exp(-(t - 0.5) / 0.06));
  const base = (t) => 0.57 + (0.33 - 0.57) * sig(t);
  const g = (t, c, sd) => Math.exp(-(((t - c) / sd) ** 2));
  const fu = (t) => base(t) + 0.48 * g(t, 0.5, 0.12);
  const fc = (t) => base(t) + 0.32 * g(t, 0.32, 0.075) + 0.27 * g(t, 0.68, 0.075) + 0.06 * g(t, 0.5, 0.12);
  s += axes(x0, y0, w, h, "reaction progress", "potential energy");
  const P = (fn) => { const pts = []; for (let i = 0; i <= 200; i++) { const t = 0.03 + 0.94 * i / 200; pts.push([x0 + t * w, y0 - fn(t) * h]); } return pts; };
  s += pl(P(fu), { stroke: RED, w: 3, dash: "7 5" }) + pl(P(fc), { stroke: BLUE, w: 3.5 });
  const Y = (v) => y0 - v * h;
  // find valley of catalyzed curve
  let tv = 0.5, mv = 9; for (let t = 0.4; t < 0.6; t += 0.001) if (fc(t) < mv) { mv = fc(t); tv = t; }
  s += circle(x0 + tv * w, Y(mv), 5, { fill: GOLD, stroke: C.ink, w: 1 });
  s += line(x0 + tv * w, Y(mv) + 8, x0 + tv * w, Y(mv) + 46, { w: 1.5 }) + text(x0 + tv * w, Y(mv) + 62, "intermediate", { size: 12, weight: "bold" }) + text(x0 + tv * w, Y(mv) + 78, "(ES, XH⁺, or a surface-bound atom)", { size: 11, fill: C.muted });
  s += text(x0 + 0.56 * w, Y(fu(0.5)) - 4, "uncatalyzed: one step, large Eₐ", { size: 12, weight: "bold", fill: RED, anchor: "start" });
  s += text(x0 + 0.32 * w - 6, Y(fc(0.32)) - 26, "step 1:", { size: 11.5, weight: "bold", fill: BLUE }) + text(x0 + 0.32 * w - 6, Y(fc(0.32)) - 11, "catalyst used", { size: 11.5, fill: BLUE });
  s += text(x0 + 0.68 * w + 10, Y(fc(0.68)) - 26, "step 2:", { size: 11.5, weight: "bold", fill: BLUE }) + text(x0 + 0.68 * w + 10, Y(fc(0.68)) - 11, "catalyst regenerated", { size: 11.5, fill: BLUE });
  s += text(x0 + 8, Y(0.57) + 22, "reactants", { size: 12, weight: "bold", anchor: "start" }) + text(x0 + w - 6, Y(0.33) + 22, "products", { size: 12, weight: "bold", anchor: "end" });
  s += rect(540, 56, 200, 236, NOTE) + text(640, 80, "Catalyst vs intermediate", { size: 13, weight: "bold" });
  s += text(640, 106, "Catalyst: used in an early\nstep, made again in a later\nstep. Present at the start\nand the end.", { size: 12 });
  s += text(640, 186, "Intermediate: made in an\nearly step, used up in a\nlater step. Sits in a valley.", { size: 12 });
  s += text(640, 254, "Neither one appears in\nthe overall equation.", { size: 12, weight: "bold" });
  FIGS["catalyst-intermediate-profile"] = { svg: svg(760, 346, s, "Energy profile of an uncatalyzed one-step reaction compared with a two-step catalyzed pathway that passes through an intermediate"), caption: "Binding a reactant, adding a proton, or adsorbing on a surface all split one hard step into easier steps. The valley between the humps is the intermediate (such as ES or XH⁺). The highest hump of the catalyzed path is lower than the single uncatalyzed hump, and reactants and products sit at the same energies as before." };
}

// ======================= Unit 6: enthalpy of dissolving in three steps =======================
{
  let s = defs + title("Dissolving as three energy steps: two cost energy, one releases it", 16);
  const panel = (px, head, sub, yF, sign, col) => {
    const yS = 268, y1 = 214, y2 = 150, bw = 58;
    const xs = [px + 6, px + 80, px + 154, px + 228];
    let g = text(px + 175, 54, head, { size: 13, weight: "bold", fill: col }) + text(px + 175, 72, sub, { size: 11.5, fill: C.muted });
    [[xs[0], yS], [xs[1], y1], [xs[2], y2], [xs[3], yF]].forEach(([x, y], i) => g += line(x, y, x + bw, y, { w: 3.5, stroke: i === 3 ? col : C.ink }));
    g += text(xs[0] + bw / 2, yS + 18, "solute +\nsolvent", { size: 11 }) + text(xs[1] + bw / 2, y1 + 18, "solute\nparticles\napart", { size: 11 }) + text(xs[2] + bw / 2, y2 - 34, "solute and\nsolvent apart", { size: 11 });
    g += text(xs[3] + bw / 2 + 6, yF + 18, "solution", { size: 11.5, weight: "bold", fill: col });
    g += arrow(xs[0] + bw - 6, yS - 4, xs[0] + bw - 6, y1 + 4, { stroke: RED, marker: "ahr", w: 2.2 }) + text(xs[0] + bw + 4, (yS + y1) / 2 + 4, "+", { size: 15, weight: "bold", fill: RED, anchor: "start" });
    g += line(xs[0] + bw, yS, xs[1], yS, { stroke: "#bbb", w: 1, dash: "3 3" }) + line(xs[1] + bw, y1, xs[2], y1, { stroke: "#bbb", w: 1, dash: "3 3" }) + line(xs[2] + bw, y2, xs[3], y2, { stroke: "#bbb", w: 1, dash: "3 3" });
    g += arrow(xs[1] + bw - 6, y1 - 4, xs[1] + bw - 6, y2 + 4, { stroke: RED, marker: "ahr", w: 2.2 }) + text(xs[1] + bw + 4, (y1 + y2) / 2 + 4, "+", { size: 15, weight: "bold", fill: RED, anchor: "start" });
    g += arrow(xs[3] + 8, y2 + 4, xs[3] + 8, yF - 4, { stroke: GREEN, marker: "ahg", w: 2.2 }) + text(xs[3] + 14, (y2 + yF) / 2, "−", { size: 17, weight: "bold", fill: GREEN, anchor: "start" });
    // net
    const xn = xs[3] + bw + 12;
    g += line(xs[0] + bw, yS, xn + 6, yS, { stroke: "#999", w: 1.2, dash: "5 4" }) + line(xs[3] + bw, yF, xn + 6, yF, { stroke: "#999", w: 1.2, dash: "5 4" });
    g += arrow(xn, yS, xn, yF + (sign < 0 ? -3 : 3), { stroke: col, w: 2.5, marker: col === BLUE ? "ahb" : "ahr" }) + text(xn + 8, (yS + yF) / 2 + 4, sign < 0 ? "ΔH < 0" : "ΔH > 0", { size: 12, weight: "bold", fill: col, anchor: "start" });
    return g;
  };
  s += panel(20, "Exothermic: CaCl₂ in water", "ice-melt pack warms up", 300, -1, RED);
  s += line(380, 44, 380, 330, { stroke: C.line, w: 1.5 });
  s += panel(396, "Endothermic: NH₄NO₃ in water", "cold pack gets cold", 236, 1, BLUE);
  s += rect(30, 340, 700, 66, NOTE) + text(380, 362, "Red steps (+): pull solute particles apart, push solvent particles apart.  Green step (−): solute–solvent attractions form.", { size: 12, weight: "bold" }) + text(380, 386, "If the attractions formed are stronger than those broken, the solution ends lower in energy and warms.", { size: 12 });
  FIGS["dissolving-enthalpy-steps"] = { svg: svg(760, 420, s, "Energy level diagrams for dissolving calcium chloride, exothermic, and ammonium nitrate, endothermic, as three steps"), caption: "The energy diagram works for a physical process too. Separating the solute and separating the solvent both cost energy; forming solute–solvent attractions releases energy. Whether the final level ends below the start (exothermic) or above it (endothermic) depends on which side is larger." };
}

// ======================= Unit 8: weak acid + strong base, regions =======================
{
  let s = defs + title("A weak acid titrated with a strong base: what to calculate in each region", 15);
  const x0 = 70, y0 = 300, w = 420, h = 238, vmax = 75, X = (v) => x0 + v / vmax * w, Y = (p) => y0 - p / 14 * h;
  const fa = (v) => pHweakAcid(50, 0.1, 1.8e-5, 0.1, v), fs = (v) => pHstrongAcid(50, 0.1, 0.1, v);
  s += rect(X(3), Y(14), X(47) - X(3), h, { fill: "#eef5ec", stroke: "none", rx: 0 }) + text(X(25), Y(14) + 16, "buffer region (HA and A⁻)", { size: 11.5, weight: "bold", fill: GREEN });
  s += phAxis(x0, y0, w, h) + axes(x0, y0, w, h, "", "pH") + text(x0 + w / 2, y0 + 40, "volume of strong base added", { size: 12, weight: "bold" });
  s += line(x0, Y(7), x0 + w, Y(7), { stroke: "#ccc", w: 1, dash: "3 4" });
  s += phPath(fs, x0, y0, w, h, vmax, { stroke: "#a9a9a9", w: 2.5, dash: "6 5" }) + phPath(fa, x0, y0, w, h, vmax, { stroke: PURPLE });
  [[25, "½ V(eq)"], [50, "V(eq)"]].forEach(([v, l]) => s += line(X(v), y0, X(v), y0 + 5, { w: 1.5 }) + text(X(v), y0 + 18, l, { size: 11.5, weight: "bold" }) + line(X(v), y0, X(v), Y(fa(v)), { stroke: "#bbb", w: 1, dash: "3 3" }));
  const mk = (v, n, dx = 0, dy = -16) => circle(X(v), Y(fa(v)), 4.5, { fill: PURPLE }) + circle(X(v) + dx, Y(fa(v)) + dy, 9, { fill: "#fff", stroke: PURPLE, w: 1.5 }) + text(X(v) + dx, Y(fa(v)) + dy + 4, String(n), { size: 11.5, weight: "bold", fill: PURPLE });
  s += mk(0, 1, 14, -14) + mk(12, 2, -4, -20) + mk(25, 3, -6, -20) + mk(50, 4, -18, 0) + mk(65, 5, 0, -20);
  s += text(X(28), Y(3.5), "strong acid (dashed):", { size: 11, fill: "#888", anchor: "start" }) + text(X(28), Y(3.5) + 14, "equivalence pH = 7", { size: 11, fill: "#888", anchor: "start" });
  s += rect(520, 46, 222, 288, NOTE) + text(631, 68, "What sets the pH", { size: 13, weight: "bold" });
  const rows = [["1", "Start: only HA.", "Ka ICE table, x = √(Ka·C)"], ["2", "Before V(eq): HA + A⁻.", "pH = pKa + log([A⁻]/[HA])"], ["3", "½ V(eq): [HA] = [A⁻].", "pH = pKa"], ["4", "V(eq): only A⁻ (moles", "÷ total volume); Kb, pH > 7"], ["5", "After V(eq): excess OH⁻", "÷ total volume sets pH"]];
  rows.forEach(([n, a, b], i) => { const y = 98 + i * 48; s += circle(538, y - 4, 9, { fill: "#fff", stroke: PURPLE, w: 1.5 }) + text(538, y, n, { size: 11.5, weight: "bold", fill: PURPLE }) + text(553, y, a, { size: 12, anchor: "start", weight: "bold" }) + text(553, y + 17, b, { size: 11.5, anchor: "start" }); });
  FIGS["weak-acid-titration-regions"] = { svg: svg(760, 360, s, "Titration curve of a weak acid with a strong base with five numbered regions and the method for each, compared with a strong acid curve"), caption: "Every point on the curve uses the same two steps: let the strong base react completely, then ask what is left. The leftover changes from weak acid alone, to a buffer, to the conjugate base alone (equivalence pH above 7), to excess OH⁻. The dashed strong-acid curve starts lower, has no buffer region, and reaches equivalence at pH 7." };
}

// ======================= Unit 8: indicator choice (weak base + strong acid) =======================
{
  let s = defs + title("Choosing an indicator: its color change must land on the steep part", 15);
  const x0 = 70, y0 = 300, w = 420, h = 238, vmax = 75, X = (v) => x0 + v / vmax * w, Y = (p) => y0 - p / 14 * h;
  const fb = (v) => pHweakBase(50, 0.1, 5.6e-10, 0.1, v);
  s += rect(x0 + 1, Y(10), w - 1, Y(8.2) - Y(10), { fill: "#f5c6e3", stroke: "none", rx: 0, opacity: 0.8 }) + rect(x0 + 1, Y(6.2), w - 1, Y(4.4) - Y(6.2), { fill: "#f8d3a6", stroke: "none", rx: 0, opacity: 0.85 });
  s += text(x0 + w - 6, Y(9.1) + 4, "phenolphthalein 8.2–10", { size: 11.5, weight: "bold", fill: "#a0306e", anchor: "end" }) + text(x0 + 10, Y(5.3) + 4, "methyl red 4.4–6.2", { size: 11.5, weight: "bold", fill: "#b3541e", anchor: "start" });
  s += phAxis(x0, y0, w, h) + axes(x0, y0, w, h, "", "pH") + text(x0 + w / 2, y0 + 40, "volume of strong acid (HCl) added", { size: 12, weight: "bold" });
  s += phPath(fb, x0, y0, w, h, vmax, { stroke: TEAL });
  s += circle(X(50), Y(fb(50)), 5.5, { fill: TEAL, stroke: C.ink, w: 1 }) + line(X(50), y0, X(50), Y(fb(50)), { stroke: "#bbb", w: 1, dash: "3 3" }) + line(X(50), y0, X(50), y0 + 5, { w: 1.5 }) + text(X(50), y0 + 18, "V(eq)", { size: 11.5, weight: "bold" });
  s += text(X(4), Y(12.6), "weak base (e.g. NH₃)", { size: 12, weight: "bold", fill: TEAL, anchor: "start" });
  s += line(X(51), Y(fb(50)), X(57), Y(4.7), { w: 1.2 }) + text(X(64), Y(4.6) + 14, "equivalence (pH < 7):", { size: 11, anchor: "middle", weight: "bold" }) + text(X(64), Y(4.6) + 28, "methyl red ✓", { size: 11, anchor: "middle", fill: GREEN, weight: "bold" });
  s += line(X(15), Y(fb(15)) + 4, X(15), Y(7.9), { w: 1.2 }) + text(X(15) + 4, Y(7.9) + 12, "phenolphthalein fades", { size: 11, anchor: "start" }) + text(X(15) + 4, Y(7.9) + 25, "here, far too early ✗", { size: 11, anchor: "start", fill: RED, weight: "bold" });
  // color strips
  s += rect(520, 46, 222, 288, NOTE) + text(631, 68, "How an indicator works", { size: 13, weight: "bold" }) + text(631, 90, "HIn ⇌ H⁺ + In⁻", { size: 13, weight: "bold" }) + text(631, 112, "color changes over\nabout pKa ± 1", { size: 12 });
  const strip = (y, lab, c1, c2, l1, l2) => { let g = text(540, y - 8, lab, { size: 12, weight: "bold", anchor: "start" }); g += `<defs><linearGradient id="g${y}" x1="0" x2="1"><stop offset="0.3" stop-color="${c1}"/><stop offset="0.7" stop-color="${c2}"/></linearGradient></defs>` + rect(540, y, 182, 18, { fill: `url(#g${y})`, stroke: "#999", rx: 4 }); return g + text(540, y + 32, l1, { size: 11, anchor: "start", fill: C.muted }) + text(722, y + 32, l2, { size: 11, anchor: "end", fill: C.muted }); };
  s += strip(170, "methyl red (pKa ≈ 5)", "#e0393e", "#f2d21b", "red (HIn) below 4.4", "yellow above 6.2");
  s += strip(236, "phenolphthalein (pKa ≈ 9.3)", "#fbfbfb", "#e0399b", "colorless below 8.2", "pink above 10");
  s += text(631, 300, "Pick pKa ≈ equivalence pH.", { size: 12, weight: "bold" }) + text(631, 318, "Weak acid + strong base: phenolphthalein.", { size: 11 });
  FIGS["indicator-choice"] = { svg: svg(760, 360, s, "Titration curve of a weak base with a strong acid with the color-change ranges of methyl red and phenolphthalein, plus indicator color strips"), caption: "Titrating a weak base with a strong acid gives an acidic equivalence point, so methyl red, whose color changes between pH 4.4 and 6.2, changes on the vertical part of the curve and the end point matches the equivalence point. Phenolphthalein would lose its pink gradually in the buffer region, long before equivalence. For a weak acid with a strong base the choice reverses." };
}

// ======================= Unit 8: diprotic titration curve =======================
{
  let s = defs + title("Titrating a diprotic acid H₂A with NaOH: two equivalence points", 15);
  const x0 = 70, y0 = 350, w = 470, h = 230, vmax = 70, X = (v) => x0 + v / vmax * w, Y = (p) => y0 - p / 14 * h;
  const fd = (v) => pHdiprotic(25, 0.1, 1e-4, 1e-8, 0.1, v);
  s += phAxis(x0, y0, w, h) + axes(x0, y0, w, h, "", "pH") + text(x0 + w / 2, y0 + 40, "volume of NaOH added", { size: 12, weight: "bold" });
  s += phPath(fd, x0, y0, w, h, vmax, { stroke: RED });
  // species strip above
  const segs = [[0, 0, "H₂A"], [0, 25, "H₂A / HA⁻"], [25, 25, "HA⁻"], [25, 50, "HA⁻ / A²⁻"], [50, 50, "A²⁻"], [50, 70, "excess OH⁻"]];
  s += text(20, 52, "Major species in each region:", { size: 12, weight: "bold", anchor: "start", fill: C.muted });
  segs.forEach(([a, b, l]) => { if (a === b) { s += rect(X(a) - 22, 84, 44, 22, { fill: "#fbf0d4", stroke: "#c9a64a", rx: 6 }) + text(X(a), 99, l, { size: 11.5, weight: "bold" }); } else { const xa = X(a) + 24, xb = X(b) - 24; s += line(xa, 95, xb, 95, { stroke: "#bbb", w: 1.5 }) + rect((xa + xb) / 2 - 40, 62, 80, 20, { fill: "#e6eef9", stroke: "#9db4d8", rx: 6 }) + text((xa + xb) / 2, 76, l, { size: 11.5, weight: "bold" }); } });
  // half-equivalence and equivalence markers
  [[12.5, "pH = pKa₁"], [37.5, "pH = pKa₂"]].forEach(([v, l]) => { const p = fd(v); s += line(x0, Y(p), X(v), Y(p), { stroke: BLUE, w: 1.2, dash: "4 3" }) + line(X(v), y0, X(v), Y(p), { stroke: BLUE, w: 1.2, dash: "4 3" }) + circle(X(v), Y(p), 5, { fill: BLUE }) + text(X(v) - 6, Y(p) - 10, l, { size: 12, weight: "bold", fill: BLUE, anchor: "end" }); });
  [25, 50].forEach((v) => { const p = fd(v); s += circle(X(v), Y(p), 5.5, { fill: RED, stroke: C.ink, w: 1 }) + line(X(v), y0, X(v), Y(p), { stroke: "#bbb", w: 1, dash: "3 3" }); });
  s += text(X(25) + 10, Y(fd(25)) + 18, "1st equivalence", { size: 11.5, weight: "bold", fill: RED, anchor: "start" }) + text(X(50) + 10, Y(fd(50)) + 16, "2nd equivalence", { size: 11.5, weight: "bold", fill: RED, anchor: "start" });
  [[12.5, "½V₁"], [25, "V₁"], [37.5, "1½V₁"], [50, "V₂ = 2V₁"]].forEach(([v, l]) => s += line(X(v), y0, X(v), y0 + 5, { w: 1.5 }) + text(X(v), y0 + 18, l, { size: 11.5, weight: "bold" }));
  s += rect(565, 130, 178, 190, NOTE) + text(654, 154, "Reading the curve", { size: 13, weight: "bold" }) + text(654, 180, "one jump per acidic\nproton", { size: 12 }) + text(654, 226, "same NaOH volume for\neach proton: V₂ = 2 × V₁", { size: 12 }) + text(654, 272, "halfway to each jump:\npH = pKa of that step", { size: 12 });
  FIGS["diprotic-titration"] = { svg: svg(760, 405, s, "Titration curve of a diprotic acid with sodium hydroxide showing two equivalence points, two half-equivalence points and the major species in each region"), caption: "Each proton is removed in turn, so the curve has two buffer regions and two equivalence points, the second at twice the volume of the first. Halfway to each equivalence point the two members of that buffer pair are equal, so the pH there equals pKa₁ and then pKa₂." };
}

// ======================= Unit 8: which form predominates =======================
{
  let s = defs + title("Which form predominates? Compare the pH with the pKa", 16);
  const x0 = 80, y0 = 270, w = 420, h = 200, X = (d) => x0 + (d + 3) / 6 * w, Y = (f) => y0 - f * h;
  s += rect(x0 + 1, Y(1), X(0) - x0 - 1, h, { fill: "#e9f0fb", stroke: "none", rx: 0 }) + rect(X(0), Y(1), x0 + w - X(0), h, { fill: "#fbece7", stroke: "none", rx: 0 });
  s += text(X(-1.8), Y(0.62), "pH < pKa:\nHA predominates", { size: 11.5, weight: "bold", fill: BLUE }) + text(X(1.8), Y(0.62), "pH > pKa:\nA⁻ predominates", { size: 11.5, weight: "bold", fill: RED });
  s += axes(x0, y0, w, h, "", "fraction of the acid in each form");
  [-3, -2, -1, 0, 1, 2, 3].forEach((d) => s += line(X(d), y0, X(d), y0 + 5, { w: 1.5 }) + text(X(d), y0 + 19, d === 0 ? "pKa" : `pKa ${d > 0 ? "+" : "−"} ${Math.abs(d)}`, { size: 11.5, weight: d === 0 ? "bold" : "normal" }));
  s += text(x0 + w / 2, y0 + 42, "pH", { size: 12, weight: "bold" });
  [0, 0.5, 1].forEach((f) => s += line(x0 - 5, Y(f), x0, Y(f), { w: 1.5 }) + text(x0 - 9, Y(f) + 4, String(f), { size: 11, anchor: "end", fill: C.muted }));
  const fHA = (d) => 1 / (1 + 10 ** d);
  const cv = (fn, col) => { const pts = []; for (let i = 0; i <= 200; i++) { const d = -3 + 6 * i / 200; pts.push([X(d), Y(fn(d))]); } return pl(pts, { stroke: col, w: 3.5 }); };
  s += cv(fHA, BLUE) + cv((d) => 1 - fHA(d), RED);
  s += text(X(-2.7), Y(0.9), "HA", { size: 13, weight: "bold", fill: BLUE }) + text(X(-2.7), Y(0.06), "A⁻", { size: 13, weight: "bold", fill: RED }) + text(X(2.7), Y(0.9), "A⁻", { size: 13, weight: "bold", fill: RED }) + text(X(2.7), Y(0.06), "HA", { size: 13, weight: "bold", fill: BLUE });
  s += line(X(0), y0, X(0), Y(0.5), { stroke: "#888", w: 1.2, dash: "4 3" }) + circle(X(0), Y(0.5), 5, { fill: C.ink }) + text(X(0) + 8, Y(0.5) + 4, "equal amounts", { size: 11.5, weight: "bold", anchor: "start" });
  s += rect(530, 56, 210, 214, NOTE) + text(635, 80, "[A⁻] / [HA]", { size: 13, weight: "bold" });
  [["pKa − 2", "1 : 100"], ["pKa − 1", "1 : 10"], ["pKa", "1 : 1"], ["pKa + 1", "10 : 1"], ["pKa + 2", "100 : 1"]].forEach(([a, b], i) => s += text(560, 108 + i * 26, "pH = " + a, { size: 12, anchor: "start" }) + text(715, 108 + i * 26, b, { size: 12, anchor: "end", weight: "bold" }));
  s += text(635, 248, "each pH unit = factor of 10", { size: 12, weight: "bold" });
  FIGS["ha-a-fraction"] = { svg: svg(760, 324, s, "Fractions of a weak acid HA and its conjugate base A minus versus pH, crossing at the pKa"), caption: "The two curves cross at pH = pKa, where [HA] = [A⁻]. Below the pKa the protonated form HA is the major species; above it the conjugate base A⁻ is. Each pH unit away from the pKa changes the ratio [A⁻]/[HA] tenfold, so by about 2 units away one form is roughly 99%." };
}

// ======================= Worked examples =======================
FIGS["we-rf-chromatogram"] = worked("we-rf-chromatogram",
  "A mixture of two dyes is separated on chromatography paper (polar) with a less polar solvent. The solvent front is 7.5 cm above the starting line. Dye X has moved 1.8 cm and dye Y has moved 5.4 cm. Calculate the Rf of each dye and identify the more polar dye.",
  "Measure every distance from the starting line. Rf(X) = 1.8 cm ÷ 7.5 cm = 0.24. Rf(Y) = 5.4 cm ÷ 7.5 cm = 0.72. The units cancel, and both values are between 0 and 1, as they must be. The paper is polar, so the dye that is attracted more strongly to it lags behind: X, with the smaller Rf, is the more polar dye, and Y travels farther because it is attracted more to the less polar solvent.");
FIGS["we-molar-heat-capacity"] = worked("we-molar-heat-capacity",
  "Aluminum has a specific heat of 0.897 J/(g·°C) and a molar mass of 26.98 g/mol. (a) Find its molar heat capacity. (b) How much heat is needed to warm 2.50 mol of aluminum from 25.0 °C to 45.0 °C?",
  "(a) C = c × molar mass = 0.897 J/(g·°C) × 26.98 g/mol = 24.2 J/(mol·°C). (b) ΔT = 45.0 − 25.0 = 20.0 °C, so q = nCΔT = (2.50 mol)(24.2 J/(mol·°C))(20.0 °C) = 1.21 × 10³ J = 1.21 kJ. Check with q = mcΔT: m = 2.50 mol × 26.98 g/mol = 67.5 g, and (67.5 g)(0.897 J/(g·°C))(20.0 °C) = 1.21 × 10³ J, the same answer. Use whichever form matches the amount you are given: moles with C, grams with c.");
FIGS["we-predominant-form"] = worked("we-predominant-form",
  "Acetic acid has pKa = 4.74. Which form, CH₃COOH or CH₃COO⁻, predominates at pH 2.74, and which at pH 6.74? Give the ratio [CH₃COO⁻]/[CH₃COOH] in each case.",
  "Compare the pH with the pKa, then use pH = pKa + log([A⁻]/[HA]). At pH 2.74: log([A⁻]/[HA]) = 2.74 − 4.74 = −2.00, so [A⁻]/[HA] = 10⁻² = 0.010. The pH is below the pKa, so CH₃COOH predominates (about 100 molecules of acid for every acetate ion). At pH 6.74: log([A⁻]/[HA]) = 6.74 − 4.74 = +2.00, so [A⁻]/[HA] = 100, and CH₃COO⁻ predominates. Two pH units on either side of the pKa shift the ratio by a factor of 10² each way.");
FIGS["we-ph-solubility"] = worked("we-ph-solubility",
  "Which of these solids become more soluble when HNO₃ is added: AgCl, CaCO₃, PbI₂, Fe(OH)₃? Explain.",
  "Ask whether the anion reacts with H⁺. Cl⁻ and I⁻ are conjugate bases of strong acids, so they do not react with H⁺, and the solubility of AgCl and PbI₂ is unchanged (the NO₃⁻ added is also a spectator). CO₃²⁻ is a base: H⁺ converts it to HCO₃⁻ and then H₂CO₃ (which releases CO₂), lowering [CO₃²⁻], so Q &lt; Ksp and more CaCO₃ dissolves. OH⁻ from Fe(OH)₃ is neutralized by H⁺ + OH⁻ → H₂O, so Fe(OH)₃ also dissolves more. Answer: CaCO₃ and Fe(OH)₃. Ksp itself is the same in every case; only the ion concentrations change.");
