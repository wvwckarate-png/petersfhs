// AP Biology study-guide figures for the material added in units 6-8 (Nov 2026 gap batches).
import { C, svg, text, line, circle, rect, path, defs, arrow, figure, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, curve } from "./lib2.mjs";
import { molSvg, molSvgParts } from "./lib.mjs";
export const FIGS = {};
const f1 = (n) => (Math.round(n * 10) / 10).toString();
const poly = (pts, o = {}) => `<polygon points="${pts.map(([x, y]) => f1(x) + "," + f1(y)).join(" ")}" fill="${o.fill || "none"}" stroke="${o.stroke || C.ink}" stroke-width="${o.w || 1.5}" stroke-linejoin="round"/>`;
const wave = (x1, x2, y, o = {}) => { const amp = o.amp || 4, per = o.per || 12; let d = `M ${x1} ${y}`, i = 0; for (let x = x1; x < x2 - 0.1; x += per / 2, i++) { const xe = Math.min(x + per / 2, x2); d += ` Q ${f1((x + xe) / 2)} ${f1(i % 2 ? y + amp : y - amp)} ${f1(xe)} ${y}`; } return path(d, { stroke: o.stroke || RED, w: o.w || 2.5 }); };
const badge = (x, y, n, col = C.ink) => circle(x, y, 10, { fill: col }) + text(x, y + 4.5, String(n), { size: 12, weight: "bold", fill: "#fff" });
const NOTEBOX = (x, y, w, h) => rect(x, y, w, h, NOTE);

// ---- purines vs pyrimidines (structures + why pairing keeps the width constant) ----
{
  const k = 1.5;
  const cell = (smi, name, sub, col) => { const p = molSvgParts(smi); const m = molSvg(smi, name).replace('<svg class="mol"', `<svg class="mol" style="width:${Math.round(p.w * k)}px;max-width:100%;height:auto"`); return `<figure style="margin:0;background:#fff;border:1px solid #ECEAE3;border-radius:10px;padding:6px 8px 4px;text-align:center;flex:1 1 0;min-width:120px;box-sizing:border-box">${m}<figcaption style="margin-top:2px;font-size:13px;line-height:1.3"><strong style="color:${col}">${name}</strong><br><span style="color:#666">${sub}</span></figcaption></figure>`; };
  const group = (head, col, cells) => `<div style="flex:${cells.length} 1 0;min-width:260px;border:2px solid ${col};border-radius:12px;padding:8px;box-sizing:border-box"><div style="text-align:center;font-weight:bold;color:${col};font-size:14px;margin-bottom:6px">${head}</div><div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${cells.join("")}</div></div>`;
  const pur = group("PURINES: double ring (6-ring + 5-ring)", BLUE, [cell("Nc1ncnc2[nH]cnc12", "Adenine (A)", "pairs with T or U", BLUE), cell("Nc1nc2[nH]cnc2c(=O)[nH]1", "Guanine (G)", "pairs with C", BLUE)]);
  const pyr = group("PYRIMIDINES: single ring", RED, [cell("Nc1cc[nH]c(=O)n1", "Cytosine (C)", "DNA and RNA", RED), cell("Cc1c[nH]c(=O)[nH]c1=O", "Thymine (T)", "DNA only", RED), cell("O=c1cc[nH]c(=O)[nH]1", "Uracil (U)", "RNA only", RED)]);
  // schematic: rung widths between two backbones
  const r = 15, wh = r * Math.sqrt(3);
  const hexPts = (cx, cy) => [-90, -30, 30, 90, 150, 210].map((a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]);
  const pentPts = (cx, cy, th) => [th - 36, th + 36, th + 108, th + 180, th - 108].map((a) => [cx + 0.8507 * r * Math.cos(a * Math.PI / 180), cy + 0.8507 * r * Math.sin(a * Math.PI / 180)]);
  // purine whose 6-ring faces the partner; side = "L" (sits on the left strand) or "R"
  const purine = (inner, cy, side, lab) => { // inner = x of the 6-ring edge facing the partner
    const hx = side === "L" ? inner - wh / 2 : inner + wh / 2, ex = side === "L" ? hx - wh / 2 : hx + wh / 2;
    const pc = side === "L" ? ex - 0.688 * r : ex + 0.688 * r;
    return poly(pentPts(pc, cy, side === "L" ? 0 : 180), { fill: "#dde8f8", stroke: BLUE, w: 2 }) + poly(hexPts(hx, cy), { fill: "#dde8f8", stroke: BLUE, w: 2 }) + text(hx, cy + 5, lab, { size: 13, weight: "bold", fill: BLUE });
  };
  const pyrim = (inner, cy, side, lab) => { const hx = side === "L" ? inner - wh / 2 : inner + wh / 2; return poly(hexPts(hx, cy), { fill: "#f9e1da", stroke: RED, w: 2 }) + text(hx, cy + 5, lab, { size: 13, weight: "bold", fill: RED }); };
  const purW = wh + 0.688 * r + 0.8507 * r, gap = 24, W = purW + wh + gap; // correct rung width = purine + pyrimidine + H-bond gap
  const hb = (x1, x2, y, n) => { let g = ""; for (let i = 0; i < n; i++) { const yy = y + (i - (n - 1) / 2) * 8; g += line(x1 + 3, yy, x2 - 3, yy, { stroke: C.muted, w: 1.6, dash: "3 3" }); } return g; };
  let s = text(380, 24, "Why every base pair is one purine + one pyrimidine", { size: 15, weight: "bold" });
  // correct pairs: purine edge at L + purW (purine fills from the left backbone), pyrimidine reaches the right backbone
  {
    const cx = 130, L = cx - W / 2, xL = L + purW;
    s += text(cx, 52, "purine + pyrimidine ✓", { size: 13, weight: "bold", fill: GREEN });
    s += rect(L - 12, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 }) + rect(L + W, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 });
    s += purine(xL, 100, "L", "A") + pyrim(xL + gap, 100, "R", "T") + hb(xL, xL + gap, 100, 2);
    s += purine(xL, 152, "L", "G") + pyrim(xL + gap, 152, "R", "C") + hb(xL, xL + gap, 152, 3);
    s += text(cx, 206, "3 rings wide: fits exactly", { size: 12 });
    s += text(cx + W / 2 + 26, 104, "2 H-bonds", { size: 11, fill: C.muted, anchor: "start" }) + text(cx + W / 2 + 26, 156, "3 H-bonds", { size: 11, fill: C.muted, anchor: "start" });
  }
  {
    const cx = 410, L = cx - W / 2, R = cx + W / 2;
    s += text(cx, 52, "purine + purine ✗", { size: 13, weight: "bold", fill: RED });
    s += rect(L - 12, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 }) + rect(R, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 });
    s += purine(cx - gap / 2, 126, "L", "A") + purine(cx + gap / 2, 126, "R", "G") + hb(cx - gap / 2, cx + gap / 2, 126, 2);
    s += text(L - 6, 160, "clash", { size: 11, weight: "bold", fill: RED }) + text(R + 6, 160, "clash", { size: 11, weight: "bold", fill: RED });
    s += text(cx, 206, "4 rings: too wide to fit", { size: 12 });
  }
  {
    const cx = 640, L = cx - W / 2, R = cx + W / 2;
    s += text(cx, 52, "pyrimidine + pyrimidine ✗", { size: 13, weight: "bold", fill: RED });
    s += rect(L - 12, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 }) + rect(R, 66, 12, 118, { fill: "#d6d2c4", stroke: "#a9a593", rx: 4 });
    s += pyrim(cx - gap / 2, 126, "L", "C") + pyrim(cx + gap / 2, 126, "R", "T") + hb(cx - gap / 2, cx + gap / 2, 126, 2);
    s += text(L + 14, 160, "gap", { size: 11, weight: "bold", fill: RED }) + text(R - 14, 160, "gap", { size: 11, weight: "bold", fill: RED });
    s += text(cx, 206, "2 rings: too narrow to reach", { size: 12 });
  }
  s += text(380, 236, "gray bars = sugar-phosphate backbones, a fixed distance apart (the helix has one uniform diameter)", { size: 11.5, fill: C.muted });
  const sch = svg(760, 250, s, "Schematic of base pairs between two backbones: purine plus pyrimidine fits, two purines are too wide, two pyrimidines too narrow");
  FIGS["bio-purine-pyrimidine"] = { html: figure("bio-purine-pyrimidine", `<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:10px">${pur}${pyr}</div>${sch}`, "Adenine and guanine (purines) have a fused six- and five-membered ring; cytosine, thymine and uracil (pyrimidines) have one six-membered ring. Pairing one of each always gives a rung three rings wide, which is why the double helix has a constant diameter and why purines make up exactly half the bases in double-stranded DNA.") };
}

// ---- trp operon (repressible) ----
{
  let s = defs + title("The trp operon: a repressible operon, normally ON");
  const dna = (oy, blocked) => {
    let g = rect(30, oy + 66, 82, 26, { fill: "#e7defa", stroke: PURPLE, rx: 4 }) + text(71, oy + 84, "trpR", { size: 13, weight: "bold", fill: PURPLE, italic: true });
    g += text(71, oy + 108, "repressor gene", { size: 11, fill: C.muted });
    g += line(140, oy + 79, 740, oy + 79, { stroke: "#888", w: 3 });
    g += rect(150, oy + 66, 70, 26, { fill: "#f6e7b8", stroke: GOLD, rx: 3 }) + text(185, oy + 84, "promoter", { size: 11.5, weight: "bold" });
    g += rect(220, oy + 66, 52, 26, { fill: "#f6d2c6", stroke: RED, rx: 3 }) + text(246, oy + 84, "operator", { size: 11, weight: "bold" });
    ["trpE", "trpD", "trpC", "trpB", "trpA"].forEach((n, i) => g += rect(278 + i * 92, oy + 66, 88, 26, { fill: "#dfeadf", stroke: GREEN, rx: 3 }) + text(322 + i * 92, oy + 84, n, { size: 12.5, weight: "bold", fill: GREEN, italic: true }));
    return g;
  };
  const pol = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="34" ry="17" fill="#cfe8ea" stroke="${TEAL}" stroke-width="2"/>` + text(x, y + 4, "RNA pol", { size: 11.5, weight: "bold", fill: TEAL });
  const trp = (x, y) => circle(x, y, 6, { fill: C.orange, stroke: "#a4471f", w: 1.2 });
  // panel 1: trp low
  let oy = 46;
  s += text(30, oy + 8, "1   Tryptophan scarce → operon ON", { size: 14, weight: "bold", fill: GREEN, anchor: "start" });
  s += dna(oy);
  s += `<ellipse cx="372" cy="${oy + 36}" rx="24" ry="13" fill="#e7defa" stroke="${PURPLE}" stroke-width="2"/>`;
  s += text(404, oy + 40, "repressor made INACTIVE: cannot bind the operator", { size: 12, anchor: "start", fill: PURPLE });
  s += path(`M 90 ${oy + 64} Q 150 ${oy + 34} 344 ${oy + 36}`, { stroke: PURPLE, w: 1.6, dash: "4 3", marker: "ah" });
  s += pol(185, oy + 79);
  s += arrow(222, oy + 104, 330, oy + 104, { stroke: TEAL, w: 2 }) + text(338, oy + 108, "transcription proceeds", { size: 11.5, anchor: "start", fill: TEAL });
  s += wave(282, 730, oy + 122, { stroke: RED, amp: 3.5 }) + text(282, oy + 144, "mRNA → enzymes that build tryptophan", { size: 12, anchor: "start", fill: RED, weight: "bold" });
  // panel 2: trp high
  oy = 216;
  s += line(20, oy - 12, 740, oy - 12, { stroke: "#e2dfd6", w: 1.5 });
  s += text(30, oy + 8, "2   Tryptophan plentiful → operon OFF", { size: 14, weight: "bold", fill: RED, anchor: "start" });
  [[470, oy + 4], [492, oy - 1], [514, oy + 5]].forEach(([x, y]) => s += trp(x, y));
  s += text(528, oy + 8, "= tryptophan (the corepressor)", { size: 12, anchor: "start", fill: "#a4471f" });
  s += dna(oy);
  s += path(`M 222 ${oy + 65} L 222 ${oy + 44} Q 222 ${oy + 36} 230 ${oy + 36} L 262 ${oy + 36} Q 270 ${oy + 36} 270 ${oy + 44} L 270 ${oy + 65} Z`, { fill: "#e7defa", stroke: PURPLE, w: 2 }) + trp(246, oy + 47);
  s += text(284, oy + 46, "trp binds the repressor → it changes shape and binds the operator", { size: 12, anchor: "start", fill: PURPLE });
  s += pol(150, oy + 124);
  s += arrow(186, oy + 116, 226, oy + 96, { stroke: RED, w: 2 }) + line(198, oy + 98, 212, oy + 114, { stroke: RED, w: 3 }) + line(198, oy + 114, 212, oy + 98, { stroke: RED, w: 3 });
  s += text(232, oy + 128, "RNA polymerase is blocked", { size: 12, anchor: "start", fill: RED, weight: "bold" });
  s += text(512, oy + 122, "no mRNA, no new enzymes", { size: 12, fill: C.muted, weight: "bold" });
  s += NOTEBOX(30, 376, 700, 40) + text(380, 401, "The product shuts off its own synthesis (negative feedback). Compare lac: inducible, switched ON by lactose.", { size: 12, weight: "bold" });
  FIGS["trp-operon"] = { svg: svg(760, 428, s, "trp operon with tryptophan low (repressor inactive, transcription on) and tryptophan high (trp-repressor complex on operator, transcription off)"), caption: "The trp repressor is made inactive, so the operon is normally transcribed. When tryptophan builds up, it binds the repressor as a corepressor; the active complex sits on the operator and blocks RNA polymerase. The cell stops making tryptophan exactly when it has enough." };
}

// ---- retrovirus (HIV) life cycle ----
{
  let s = defs + title("A retrovirus (HIV) runs information backward: RNA → DNA");
  s += rect(96, 44, 650, 262, { fill: "#fdfaf0", stroke: "#8a8a8a", w: 2, rx: 34 }) + text(118, 66, "host cell", { size: 12, anchor: "start", fill: C.muted, weight: "bold" });
  s += `<ellipse cx="560" cy="132" rx="160" ry="64" fill="#eef3fb" stroke="#9db3d6" stroke-width="2"/>` + text(560, 88, "nucleus", { size: 12, fill: "#5577aa", weight: "bold" });
  // virus outside
  s += circle(50, 112, 27, { fill: "#f4e4f1", stroke: PURPLE, w: 2 }) + wave(34, 66, 106, { amp: 3, per: 8, w: 2 }) + wave(34, 66, 118, { amp: 3, per: 8, w: 2 });
  s += text(50, 158, "HIV", { size: 12, weight: "bold", fill: PURPLE }) + text(50, 174, "RNA genome", { size: 11, fill: C.muted }) + text(50, 188, "+ reverse", { size: 11, fill: C.muted }) + text(50, 202, "transcriptase", { size: 11, fill: C.muted });
  s += arrow(80, 112, 124, 112) + badge(108, 92, 1, PURPLE);
  // RNA -> DNA
  s += wave(132, 196, 116, { w: 2.5 }) + text(164, 100, "viral RNA", { size: 12, weight: "bold", fill: RED });
  s += arrow(202, 116, 240, 116, { stroke: PURPLE, w: 2.5 }) + badge(221, 94, 2, PURPLE);
  s += text(222, 144, "reverse", { size: 11.5, weight: "bold", fill: PURPLE }) + text(222, 158, "transcriptase", { size: 11.5, weight: "bold", fill: PURPLE });
  s += line(248, 110, 316, 110, { stroke: BLUE, w: 3 }) + line(248, 122, 316, 122, { stroke: BLUE, w: 3 }); for (let x = 254; x < 314; x += 8) s += line(x, 111, x, 121, { stroke: BLUE, w: 1.2 });
  s += text(282, 100, "viral DNA", { size: 12, weight: "bold", fill: BLUE });
  s += arrow(322, 118, 410, 126, { w: 2 }) + badge(366, 104, 3, PURPLE) + text(366, 146, "integrase", { size: 11.5, weight: "bold", fill: PURPLE });
  // host chromosome with provirus
  s += line(424, 126, 700, 126, { stroke: "#9a9a9a", w: 6 }) + line(526, 126, 598, 126, { stroke: BLUE, w: 6 });
  s += text(562, 112, "provirus", { size: 12, weight: "bold", fill: BLUE }) + text(470, 146, "host chromosome", { size: 11.5, fill: C.muted });
  s += text(600, 166, "copied whenever the cell divides", { size: 11.5, fill: C.muted });
  // transcription
  s += arrow(560, 176, 560, 222, { w: 2 }) + badge(542, 210, 4, PURPLE) + text(574, 206, "host RNA polymerase", { size: 11.5, anchor: "start" }) + text(574, 220, "transcribes it", { size: 11.5, anchor: "start" });
  s += wave(528, 592, 238, { w: 2.5 }) + wave(604, 668, 238, { w: 2.5 }) + text(600, 262, "new RNA genomes + viral mRNA", { size: 11.5, fill: RED, weight: "bold" });
  // translation + assembly
  s += arrow(520, 240, 436, 240, { w: 2 }) + badge(478, 222, 5, PURPLE);
  s += `<ellipse cx="404" cy="236" rx="24" ry="12" fill="#e8e3d3" stroke="#8d8466" stroke-width="1.5"/><ellipse cx="404" cy="248" rx="30" ry="12" fill="#e8e3d3" stroke="#8d8466" stroke-width="1.5"/>`;
  s += text(404, 280, "host ribosomes make", { size: 11.5 }) + text(404, 294, "viral proteins", { size: 11.5 });
  s += arrow(370, 246, 322, 284, { w: 2 }) + badge(332, 252, 6, PURPLE);
  s += circle(300, 300, 20, { fill: "#f4e4f1", stroke: PURPLE, w: 2 }) + wave(287, 313, 300, { amp: 2.5, per: 7, w: 1.8 });
  s += circle(232, 336, 20, { fill: "#f4e4f1", stroke: PURPLE, w: 2 }) + wave(219, 245, 336, { amp: 2.5, per: 7, w: 1.8 }) + arrow(282, 314, 256, 326, { w: 1.8 });
  s += text(204, 334, "new viruses", { size: 12, weight: "bold", fill: PURPLE, anchor: "end" });
  s += text(204, 349, "bud from the cell", { size: 11, fill: C.muted, anchor: "end" });
  // drug note
  s += NOTEBOX(116, 190, 214, 64) + text(223, 210, "Reverse-transcriptase drugs", { size: 12, weight: "bold" }) + text(223, 228, "block step 2 in newly infected", { size: 11.5 }) + text(223, 243, "cells, not an existing provirus", { size: 11.5 });
  FIGS["retrovirus-cycle"] = { svg: svg(760, 362, s, "HIV life cycle: entry, reverse transcription of RNA into DNA, integration into a host chromosome, transcription, translation and assembly of new viruses"), caption: "Reverse transcriptase copies the viral RNA into DNA, and integrase splices that DNA into a host chromosome as a provirus. From then on the host cell's own polymerase and ribosomes make new viral RNA and proteins, and the provirus is copied every time the cell divides." };
}

// ---- horizontal gene transfer ----
{
  let s = defs + title("Three ways bacteria pick up new genes (horizontal gene transfer)");
  const cell = (x, y, w, h, o = {}) => rect(x, y, w, h, { fill: o.fill || "#eef5ea", stroke: "#6b8f5e", w: 2, rx: h / 2 }) + `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w * 0.3}" ry="${h * 0.24}" fill="none" stroke="#666" stroke-width="2"/>`;
  const seg = (cx, cy, rx, ry, a0, a1, col = RED) => { const p = (a) => [cx + rx * Math.cos(a * Math.PI / 180), cy + ry * Math.sin(a * Math.PI / 180)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return path(`M ${f1(x0)} ${f1(y0)} A ${rx} ${ry} 0 0 1 ${f1(x1)} ${f1(y1)}`, { stroke: col, w: 3.5 }); };
  // panel 1 transformation
  s += text(128, 54, "Transformation", { size: 14, weight: "bold", fill: BLUE });
  s += wave(26, 66, 98, { amp: 3, per: 10 }) + wave(44, 84, 120, { amp: 3, per: 10 }) + wave(20, 56, 142, { amp: 3, per: 10 });
  s += text(56, 168, "free DNA from", { size: 11, fill: C.muted }) + text(56, 182, "a dead cell", { size: 11, fill: C.muted });
  s += arrow(92, 120, 128, 120, { w: 2 });
  s += cell(136, 94, 104, 54) + seg(188, 121, 31, 13, 200, 300);
  s += text(188, 168, "piece joins the", { size: 11, fill: C.muted }) + text(188, 182, "chromosome", { size: 11, fill: C.muted });
  // panel 2 transduction
  s += line(256, 40, 256, 250, { stroke: "#e2dfd6", w: 1.5 }) + line(506, 40, 506, 250, { stroke: "#e2dfd6", w: 1.5 });
  s += text(380, 54, "Transduction", { size: 14, weight: "bold", fill: PURPLE });
  s += cell(266, 112, 76, 46) + seg(304, 135, 23, 11, 200, 290);
  s += text(304, 176, "donor cell", { size: 11, fill: C.muted });
  const phage = (x, y) => { const hp = [-90, -30, 30, 90, 150, 210].map((a) => [x + 13 * Math.cos(a * Math.PI / 180), y + 13 * Math.sin(a * Math.PI / 180)]); return poly(hp, { fill: "#f1e8fa", stroke: PURPLE, w: 2 }) + rect(x - 3, y + 13, 6, 20, { fill: "#f1e8fa", stroke: PURPLE, rx: 1 }) + line(x - 3, y + 33, x - 11, y + 43, { stroke: PURPLE, w: 1.6 }) + line(x + 3, y + 33, x + 11, y + 43, { stroke: PURPLE, w: 1.6 }); };
  s += phage(380, 86) + path("M 373 84 q 4 -5 7 0 q 3 5 7 0", { stroke: RED, w: 2.5 });
  s += text(380, 146, "phage", { size: 11, fill: PURPLE, weight: "bold" });
  s += arrow(330, 108, 360, 94, { w: 1.8 }) + arrow(400, 94, 428, 108, { w: 1.8 });
  s += cell(420, 112, 76, 46) + seg(458, 135, 23, 11, 200, 290);
  s += text(458, 176, "recipient cell", { size: 11, fill: C.muted });
  // panel 3 conjugation
  s += text(632, 54, "Conjugation", { size: 14, weight: "bold", fill: TEAL });
  s += cell(514, 100, 96, 56) + cell(652, 100, 96, 56, { fill: "#f4f8f2" });
  s += rect(606, 122, 50, 12, { fill: "#d7ebe9", stroke: TEAL, rx: 6 }) + text(631, 112, "pilus", { size: 11, weight: "bold", fill: TEAL });
  s += circle(586, 140, 8, { stroke: RED, w: 3 }) + circle(724, 140, 8, { stroke: RED, w: 3 });
  s += arrow(600, 128, 662, 128, { stroke: RED, w: 1.8 });
  s += text(562, 176, "donor", { size: 11, fill: C.muted }) + text(700, 176, "recipient", { size: 11, fill: C.muted });
  s += text(724, 92, "plasmid copy", { size: 11, fill: RED, weight: "bold" });
  // descriptions
  s += text(128, 212, "a cell takes up free DNA", { size: 12 }) + text(128, 228, "from its surroundings", { size: 12 });
  s += text(380, 212, "a virus accidentally carries", { size: 12 }) + text(380, 228, "bacterial DNA to another cell", { size: 12 });
  s += text(632, 212, "cells in contact; a copy of", { size: 12 }) + text(632, 228, "a plasmid passes through a pilus", { size: 12 });
  s += NOTEBOX(40, 252, 680, 38) + text(380, 276, "Not reproduction: each adds new genes to an existing cell. Conjugation spreads resistance plasmids fast.", { size: 12, weight: "bold" });
  FIGS["hgt-three-ways"] = { svg: svg(760, 302, s, "Transformation, transduction and conjugation compared"), caption: "Red marks the DNA being transferred. In transformation the DNA is picked up from the surroundings, in transduction a phage carries it, and in conjugation it passes directly from cell to cell, usually as a plasmid, so the donor keeps its copy too." };
}

// ---- gel electrophoresis ----
{
  let s = defs + title("Gel electrophoresis: DNA sorted by size");
  const gx = 140, gw = 330, top = 74, bot = 334;
  s += rect(gx, top, gw, bot - top, { fill: "#e8f1f8", stroke: "#8fb0c8", w: 2, rx: 6 });
  s += rect(gx, 44, gw, 22, { fill: "#2d2d2d", rx: 5 }) + text(gx + gw / 2, 60, "−  negative electrode", { size: 12, weight: "bold", fill: "#fff" });
  s += rect(gx, bot + 8, gw, 22, { fill: RED, rx: 5 }) + text(gx + gw / 2, bot + 24, "+  positive electrode", { size: 12, weight: "bold", fill: "#fff" });
  const lanes = ["Ladder", "A", "B", "C"], lx = (i) => gx + 50 + i * 77;
  const Y = (bp) => 102 + (Math.log10(12000) - Math.log10(bp)) * 142;
  lanes.forEach((n, i) => s += rect(lx(i) - 22, top + 8, 44, 10, { fill: "#fff", stroke: "#6d8aa0", rx: 2 }));
  s += text(gx - 8, top + 17, "wells", { size: 11.5, anchor: "end", weight: "bold" });
  const ladder = [10000, 6000, 4000, 3000, 2000, 1000, 500];
  ladder.forEach((bp) => s += rect(lx(0) - 20, Y(bp) - 3, 40, 6, { fill: "#4b6a86", rx: 2 }) + text(gx - 8, Y(bp) + 4, bp.toLocaleString("en-US"), { size: 11, anchor: "end", fill: C.muted }));
  s += text(gx - 52, 210, "fragment size (bp)", { size: 11.5, weight: "bold", rotate: -90, fill: C.muted });
  const samples = [[], [4000, 1000], [2500], [4000, 1000]];
  samples.forEach((arr, i) => arr.forEach((bp) => s += rect(lx(i) - 20, Y(bp) - 3.5, 40, 7, { fill: "#2e5f8a", rx: 2 })));
  ["Ladder", "A", "B", "C"].forEach((n, i) => s += text(lx(i), bot - 8, n === "Ladder" ? "ladder" : "lane " + n, { size: 11.5, weight: "bold", fill: C.ink }));
  s += arrow(gx + gw + 18, 110, gx + gw + 18, 300, { w: 2.5, stroke: BLUE, marker: "ahb" });
  s += text(gx + gw + 32, 200, "DNA (−) moves toward +", { size: 12, weight: "bold", fill: BLUE, rotate: 90 });
  // notes
  const nx = 528;
  s += NOTEBOX(nx, 74, 218, 260) + text(nx + 109, 98, "Reading a gel", { size: 13, weight: "bold" });
  s += text(nx + 14, 124, "• Farther from the wells", { size: 12, anchor: "start" }) + text(nx + 24, 140, "= smaller fragment.", { size: 12, anchor: "start" });
  s += text(nx + 14, 166, "• Same height = same size.", { size: 12, anchor: "start" });
  s += text(nx + 14, 192, "• Read sizes off the ladder:", { size: 12, anchor: "start" }) + text(nx + 24, 208, "lane B's band lies between", { size: 12, anchor: "start" }) + text(nx + 24, 224, "the 3,000 and 2,000 bp marks.", { size: 12, anchor: "start" });
  s += text(nx + 14, 250, "• Lanes A and C have the", { size: 12, anchor: "start" }) + text(nx + 24, 266, "same pattern: their DNA", { size: 12, anchor: "start" }) + text(nx + 24, 282, "pieces are the same sizes.", { size: 12, anchor: "start" });
  s += text(nx + 109, 314, "Spacing is roughly logarithmic.", { size: 11, fill: C.muted });
  FIGS["gel-electrophoresis"] = { svg: svg(760, 376, s, "Agarose gel with wells at the negative electrode, a DNA ladder and three sample lanes"), caption: "DNA is loaded into wells at the negative end and migrates toward the positive electrode. The gel's mesh slows big fragments most, so small fragments end up farthest from the wells; the ladder of known sizes lets you estimate each band's length." };
}

// ---- PCR cycle ----
{
  let s = defs + title("PCR: one cycle of three temperature steps doubles the target");
  const P = [12, 198, 384, 570], pw = 176;
  const heads = [["Start", "target DNA", C.ink], ["1  Denature", "about 95 °C", RED], ["2  Anneal", "roughly 50–60 °C", BLUE], ["3  Extend", "about 72 °C", GREEN]];
  heads.forEach(([h, t, col], i) => s += text(P[i] + pw / 2, 52, h, { size: 13.5, weight: "bold", fill: col }) + text(P[i] + pw / 2, 70, t, { size: 12, fill: col }));
  [0, 1, 2].forEach((i) => s += arrow(P[i] + pw - 8, 56, P[i + 1] + 8, 56, { w: 2 }));
  const strand = (x, y, top, col = "#555") => line(x + 26, y, x + 150, y, { stroke: col, w: 4 }) + text(x + 14, y + 4, top ? "5′" : "3′", { size: 11, fill: C.muted }) + text(x + 163, y + 4, top ? "3′" : "5′", { size: 11, fill: C.muted });
  const tgt = (x, y) => rect(x + 56, y - 5, 64, 10, { fill: "#f6e7b8", stroke: "none", rx: 2 });
  // start: double strand
  let x = P[0];
  s += tgt(x, 120) + tgt(x, 136) + strand(x, 120, true) + strand(x, 136, false);
  for (let xx = x + 32; xx < x + 148; xx += 9) s += line(xx, 123, xx, 133, { stroke: "#aaa", w: 1.2 });
  s += text(x + pw / 2, 178, "gold = region to copy", { size: 11.5, fill: C.muted });
  // denature
  x = P[1];
  s += tgt(x, 104) + tgt(x, 152) + strand(x, 104, true) + strand(x, 152, false);
  s += text(x + pw / 2, 132, "H-bonds break", { size: 11.5, fill: RED }) + text(x + pw / 2, 178, "strands separate", { size: 11.5, fill: C.muted });
  // anneal: primers at the 3' end of each template
  x = P[2];
  s += tgt(x, 104) + tgt(x, 152) + strand(x, 104, true) + strand(x, 152, false);
  s += line(x + 96, 114, x + 120, 114, { stroke: C.orange, w: 5 }) + line(x + 56, 142, x + 80, 142, { stroke: C.orange, w: 5 });
  s += text(x + pw / 2, 131, "primers bind", { size: 11.5, fill: C.orange, weight: "bold" }) + text(x + pw / 2, 178, "primers flank the target", { size: 11.5, fill: C.muted });
  // extend
  x = P[3];
  s += tgt(x, 104) + tgt(x, 152) + strand(x, 104, true) + strand(x, 152, false);
  s += line(x + 96, 114, x + 120, 114, { stroke: C.orange, w: 5 }) + line(x + 56, 142, x + 80, 142, { stroke: C.orange, w: 5 });
  s += line(x + 38, 114, x + 96, 114, { stroke: GREEN, w: 4 }) + poly([[x + 28, 114], [x + 40, 108], [x + 40, 120]], { fill: GREEN, stroke: GREEN, w: 1 });
  s += line(x + 80, 142, x + 138, 142, { stroke: GREEN, w: 4 }) + poly([[x + 148, 142], [x + 136, 136], [x + 136, 148]], { fill: GREEN, stroke: GREEN, w: 1 });
  s += text(x + pw / 2, 132, "new strands", { size: 11.5, fill: GREEN, weight: "bold" });
  s += text(x + pw / 2, 132, "", {}) + text(x + pw / 2, 178, "Taq polymerase adds to 3′ ends", { size: 11.5, fill: C.muted });
  s += text(x + pw / 2, 196, "→ 2 double-stranded copies", { size: 11.5, weight: "bold", fill: GREEN });
  s += path("M 658 206 C 658 228, 380 228, 290 210", { stroke: C.muted, w: 1.8, dash: "5 4", marker: "ah" }) + text(470, 236, "repeat about 25–35 times", { size: 12, weight: "bold", fill: C.muted });
  // doubling row
  const dy = 300, cols = [[90, 1], [230, 2], [370, 4], [510, 8]];
  cols.forEach(([cx, n], i) => {
    s += text(cx, dy - 32, `after ${i} cycle${i === 1 ? "" : "s"}`, { size: 12, weight: "bold" });
    for (let k = 0; k < n; k++) { const yy = dy - 14 + k * 9; s += line(cx - 24, yy - 2, cx + 24, yy - 2, { stroke: "#b48a1a", w: 2.5 }) + line(cx - 24, yy + 2, cx + 24, yy + 2, { stroke: "#b48a1a", w: 2.5 }); }
    s += text(cx, dy + 70, `${n} cop${n === 1 ? "y" : "ies"}`, { size: 12.5, weight: "bold", fill: GOLD });
    if (i < 3) s += arrow(cx + 36, dy + 10, cx + 104, dy + 10, { w: 1.8 });
  });
  s += NOTEBOX(590, 262, 156, 112) + text(668, 286, "Doubling", { size: 13, weight: "bold" }) + text(668, 310, "copies = start × 2ⁿ", { size: 12.5, weight: "bold" }) + text(668, 334, "30 cycles from one", { size: 12 }) + text(668, 352, "copy ≈ 10⁹ copies", { size: 12 });
  FIGS["pcr-cycle"] = { svg: svg(760, 392, s, "PCR cycle: denature at 95 degrees, anneal primers at 50 to 60, extend at 72, with copies doubling each cycle"), caption: "Heat separates the strands, cooling lets the primers base-pair on either side of the target, and Taq polymerase extends each primer from its 3′ end. Each cycle doubles the number of target copies, so the amount grows as 2ⁿ." };
}

// ---- phylogenetic tree with time vs cladogram ----
{
  let s = defs + title("Same relationships, two styles of tree");
  // left: time-scaled tree
  const X = (mya) => 40 + (320 - mya) * 0.6875, yt = { human: 84, mouse: 118, kangaroo: 152, platypus: 186, lizard: 222 };
  const E = (yt.human + yt.mouse) / 2, T = (yt.kangaroo + E) / 2, M = (yt.platypus + T) / 2, R0 = (yt.lizard + M) / 2;
  const h = (x1, x2, y) => line(x1, y, x2, y, { w: 2.5 }), v = (x, y1, y2) => line(x, y1, x, y2, { w: 2.5 });
  s += text(200, 52, "Phylogenetic tree with a time scale", { size: 13.5, weight: "bold", fill: BLUE });
  s += h(24, X(320), R0) + v(X(320), M, yt.lizard) + h(X(320), X(0), yt.lizard) + h(X(320), X(180), M);
  s += v(X(180), T, yt.platypus) + h(X(180), X(0), yt.platypus) + h(X(180), X(160), T);
  s += v(X(160), E, yt.kangaroo) + h(X(160), X(0), yt.kangaroo) + h(X(160), X(90), E);
  s += v(X(90), yt.human, yt.mouse) + h(X(90), X(0), yt.human) + h(X(90), X(0), yt.mouse);
  [["human", yt.human], ["mouse", yt.mouse], ["kangaroo", yt.kangaroo], ["platypus", yt.platypus]].forEach(([n, y]) => s += text(X(0) + 6, y + 4, n, { size: 12, anchor: "start" }));
  s += text(X(0) + 6, yt.lizard + 4, "lizard", { size: 12, anchor: "start" }) + text(X(0) + 46, yt.lizard + 4, "(outgroup)", { size: 11.5, anchor: "start", fill: RED, weight: "bold" });
  s += rect(X(250) - 3, M - 9, 6, 18, { fill: C.orange, stroke: "none", rx: 1 }) + text(X(250), M - 14, "hair, milk", { size: 11.5, fill: C.orange, weight: "bold" });
  s += line(X(320), 250, X(0), 250, { w: 1.6 });
  [300, 200, 100, 0].forEach((m) => s += line(X(m), 250, X(m), 255, { w: 1.6 }) + text(X(m), 268, String(m), { size: 11 }));
  s += text(150, 286, "millions of years ago", { size: 11.5, weight: "bold" });
  s += line(X(90), E, X(90), 250, { stroke: BLUE, w: 1.2, dash: "3 3" }) + text(X(90) + 4, 242, "split ≈ 90", { size: 11, fill: BLUE, anchor: "start" });
  s += text(200, 310, "branch positions are drawn to time,", { size: 12 }) + text(200, 326, "so you can read WHEN lineages split", { size: 12 });
  s += line(392, 40, 392, 330, { stroke: "#e2dfd6", w: 1.5 });
  // right: cladogram
  s += text(586, 52, "Cladogram (no time scale)", { size: 13.5, weight: "bold", fill: PURPLE });
  const ty = 84, tips = [["lizard", 450], ["platypus", 520], ["kangaroo", 590], ["mouse", 660], ["human", 730]];
  const rx = 590, ry = 80 + 140;
  s += line(rx, ry + 22, rx, ry, { w: 2.5 }) + line(rx, ry, 730, ty, { w: 2.5 }) + line(rx, ry, 450, ty, { w: 2.5 });
  tips.slice(1, 4).forEach(([n, tx]) => { const nx = (730 + tx) / 2, ny = ty + (730 - nx); s += line(nx, ny, tx, ty, { w: 2.5 }); });
  tips.forEach(([n, tx]) => s += text(tx, ty - 8, n, { size: 12 }));
  s += text(462, 124, "outgroup", { size: 11.5, fill: RED, weight: "bold", anchor: "end" });
  const mark = (t, lab, dx) => { const x = rx + t * (730 - rx), y = ry - t * (ry - ty); return `<g transform="rotate(-45 ${f1(x)} ${f1(y)})">${rect(x - 3, y - 10, 6, 20, { fill: C.orange, stroke: "none", rx: 1 })}</g>` + text(x + 12, y + 8, lab, { size: 11.5, fill: C.orange, weight: "bold", anchor: "start" }); };
  s += mark(0.13, "hair, milk", 0) + mark(0.38, "live birth", 0);
  s += text(586, 268, "orange bars = shared derived characters", { size: 11.5, fill: C.muted });
  s += text(586, 310, "only the branching ORDER means anything;", { size: 12 }) + text(586, 326, "branch lengths tell you nothing about time", { size: 12 });
  FIGS["tree-vs-cladogram"] = { svg: svg(760, 344, s, "A time-scaled phylogenetic tree and a cladogram of lizard, platypus, kangaroo, mouse and human"), caption: "Both trees show the same branching order, with the lizard as the outgroup that roots the tree. Only the left one lets you read divergence times (approximate, in millions of years). Hair and milk, absent in the outgroup, are shared derived characters that define the mammal clade." };
}

// ---- gradualism vs punctuated equilibrium vs adaptive radiation ----
{
  let s = defs + title("Patterns of change in the fossil record");
  const P = [{ x: 20, t: "Gradualism", col: BLUE }, { x: 270, t: "Punctuated equilibrium", col: RED }, { x: 520, t: "Adaptive radiation", col: GREEN }];
  P.forEach(({ x, t, col }) => { s += text(x + 115, 52, t, { size: 13.5, weight: "bold", fill: col }) + arrow(x + 30, 250, x + 225, 250, { w: 1.8 }) + arrow(x + 30, 250, x + 30, 72, { w: 1.8 }) + text(x + 128, 270, "body form (morphology)", { size: 11.5, weight: "bold" }) + text(x + 16, 162, "time", { size: 11.5, weight: "bold", rotate: -90 }); });
  // gradualism: steady divergence
  let x = 20; const g = (d) => path(d, { stroke: BLUE, w: 4 });
  s += g(`M ${x + 128} 246 L ${x + 128} 206 L ${x + 70} 82`) + g(`M ${x + 128} 206 L ${x + 160} 140 L ${x + 140} 82`) + g(`M ${x + 160} 140 L ${x + 205} 82`);
  s += text(x + 205, 204, "slow, steady", { size: 11, fill: C.muted });
  // punctuated
  x = 270; const p = (d) => path(d, { stroke: RED, w: 4 });
  s += p(`M ${x + 120} 246 L ${x + 120} 82`) + p(`M ${x + 120} 200 L ${x + 184} 192 L ${x + 184} 82`) + p(`M ${x + 120} 134 L ${x + 62} 127 L ${x + 62} 82`);
  s += text(x + 132, 230, "stasis", { size: 11, fill: C.muted, anchor: "start" }) + text(x + 190, 214, "rapid change", { size: 11, fill: RED, anchor: "middle" });
  s += text(x + 91, 106, "rapid\nchange", { size: 11, fill: RED, lh: 1.15 });
  // adaptive radiation
  x = 520; const a = (d) => path(d, { stroke: GREEN, w: 3.5 });
  s += a(`M ${x + 128} 246 L ${x + 128} 186`);
  [48, 78, 108, 148, 178, 208].forEach((tx) => s += a(`M ${x + 128} 186 C ${x + 128} 170, ${x + tx} 166, ${x + tx} 148 L ${x + tx} 82`));
  s += text(x + 128, 204, "", {}) + text(x + 140, 226, "one ancestor", { size: 11, fill: C.muted, anchor: "start" });
  s += text(x + 128, 140, "", {});
  // captions under panels
  s += text(135, 296, "small changes add up; fossils", { size: 12 }) + text(135, 312, "show many intermediate forms", { size: 12 });
  s += text(385, 296, "long stasis, then quick change", { size: 12 }) + text(385, 312, "when a new species forms", { size: 12 });
  s += text(635, 296, "many species arise quickly", { size: 12 }) + text(635, 312, "and fill many open niches", { size: 12 });
  FIGS["tempo-of-speciation"] = { svg: svg(760, 330, s, "Three graphs of body form against time: gradualism, punctuated equilibrium and adaptive radiation"), caption: "Time runs upward and sideways movement means change in body form. Gradualism shows slanted lines (steady change); punctuated equilibrium shows vertical lines (stasis) broken by short, nearly horizontal jumps; adaptive radiation shows one lineage fanning out quickly into many." };
}

// ---- radioactive decay / half-life (C-14) ----
{
  let s = defs + title("Radioactive decay: half of what is left decays each half-life");
  const x0 = 80, y0 = 270, w = 400, h = 200, X = (n) => x0 + n / 5 * w, Y = (p) => y0 - p / 100 * h;
  s += axes(x0, y0, w, h, "", "");
  s += text(x0 + w / 2, y0 + 40, "time (number of half-lives)", { size: 12, weight: "bold" }) + text(30, y0 - h / 2, "% of original isotope", { size: 12, weight: "bold", rotate: -90 });
  [0, 1, 2, 3, 4, 5].forEach((n) => s += line(X(n), y0, X(n), y0 + 5, { w: 1.6 }) + text(X(n), y0 + 20, String(n), { size: 12 }));
  [0, 25, 50, 75, 100].forEach((p) => s += line(x0 - 5, Y(p), x0, Y(p), { w: 1.6 }) + text(x0 - 9, Y(p) + 4, String(p), { size: 11.5, anchor: "end" }));
  s += curve(x0, y0, w, h, (t) => 100 - 100 * Math.pow(0.5, t * 5) <= 100 ? (100 - 100 * Math.pow(0.5, t * 5)) / 100 : 0, { stroke: C.gray, w: 3, dash: "7 5" });
  s += curve(x0, y0, w, h, (t) => Math.pow(0.5, t * 5), { stroke: RED, w: 3.5 });
  [[0, 100, "100%"], [1, 50, "50%"], [2, 25, "25%"], [3, 12.5, "12.5%"], [4, 6.25, "6.25%"]].forEach(([n, p, lab]) => { s += line(X(n), Y(p), X(n), y0, { stroke: "#c9c4b6", w: 1.2, dash: "3 3" }) + circle(X(n), Y(p), 4.5, { fill: RED }) + text(X(n) + 8, Y(p) - 8, lab, { size: 12, weight: "bold", fill: RED, anchor: "start" }); });
  s += text(X(4.3), Y(100) + 32, "daughter isotope", { size: 12, weight: "bold", fill: C.muted }) + text(X(4.3), Y(100) + 48, "(C-14 decays to N-14)", { size: 11, fill: C.muted });
  s += text(X(1.75), Y(52), "parent isotope", { size: 12, weight: "bold", fill: RED, anchor: "start" });
  s += NOTEBOX(520, 76, 224, 196) + text(632, 100, "Reading the curve", { size: 13, weight: "bold" });
  s += text(632, 126, "Each half-life halves what is", { size: 12 }) + text(632, 142, "LEFT, so the curve never", { size: 12 }) + text(632, 158, "quite reaches zero.", { size: 12 });
  s += text(632, 188, "Carbon-14: 1 half-life", { size: 12 }) + text(632, 204, "≈ 5,730 years, so after about", { size: 12 }) + text(632, 220, "9 half-lives (≈ 50,000 yr) too", { size: 12 }) + text(632, 236, "little is left to measure.", { size: 12 });
  FIGS["c14-decay"] = { svg: svg(760, 324, s, "Exponential decay curve of a radioactive parent isotope, halving each half-life, with the daughter isotope rising"), caption: "The fraction of parent isotope left after n half-lives is (½)ⁿ: 100% → 50% → 25% → 12.5%. Multiply the number of half-lives by the isotope's half-life to get the age; long-lived isotopes such as potassium-40 are used for rocks millions of years old." };
}

// ---- endotherm vs ectotherm graphs ----
{
  let s = defs + title("Endotherms vs ectotherms across environmental temperatures");
  const panel = (x0, head) => text(x0 + 145, 52, head, { size: 13.5, weight: "bold" });
  // left: body temperature
  let x0 = 70, y0 = 270, w = 260, h = 190; const XT = (t) => x0 + t / 40 * w;
  s += panel(x0, "Body temperature") + axes(x0, y0, w, h, "", "");
  [0, 10, 20, 30, 40].forEach((t) => s += line(XT(t), y0, XT(t), y0 + 5, { w: 1.6 }) + text(XT(t), y0 + 19, String(t), { size: 11.5 }));
  s += text(x0 + w / 2, y0 + 40, "environmental temperature (°C)", { size: 12, weight: "bold" }) + text(x0 - 30, y0 - h / 2, "body temperature (°C)", { size: 12, weight: "bold", rotate: -90 });
  const YB = (t) => y0 - t / 45 * h;
  [0, 20, 40].forEach((t) => s += line(x0 - 5, YB(t), x0, YB(t), { w: 1.6 }) + text(x0 - 9, YB(t) + 4, String(t), { size: 11.5, anchor: "end" }));
  s += line(XT(0), YB(37), XT(40), YB(37), { stroke: RED, w: 3.5 }) + text(XT(2), YB(37) - 10, "endotherm (mammal): steady", { size: 12, weight: "bold", fill: RED, anchor: "start" });
  s += line(XT(0), YB(3), XT(40), YB(42), { stroke: BLUE, w: 3.5 }) + text(XT(17), YB(14), "ectotherm (lizard):", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }) + text(XT(17), YB(14) + 16, "tracks surroundings", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  // right: metabolic rate
  x0 = 450; const XM = (t) => x0 + t / 40 * w;
  s += panel(x0, "Metabolic rate (same body size)") + axes(x0, y0, w, h, "", "");
  [0, 10, 20, 30, 40].forEach((t) => s += line(XM(t), y0, XM(t), y0 + 5, { w: 1.6 }) + text(XM(t), y0 + 19, String(t), { size: 11.5 }));
  s += text(x0 + w / 2, y0 + 40, "environmental temperature (°C)", { size: 12, weight: "bold" }) + text(x0 - 22, y0 - h / 2, "metabolic rate", { size: 12, weight: "bold", rotate: -90 });
  s += rect(XM(24), y0 - h, XM(32) - XM(24), h, { fill: "#fbf1d6", stroke: "none", rx: 0 }) + text(XM(28), y0 - h + 16, "thermo-", { size: 11, fill: "#8a6d10", weight: "bold" }) + text(XM(28), y0 - h + 30, "neutral", { size: 11, fill: "#8a6d10", weight: "bold" }) + text(XM(28), y0 - h + 44, "zone", { size: 11, fill: "#8a6d10", weight: "bold" });
  const endo = (t) => { const T = t * 40; const v = T < 24 ? 0.5 + (24 - T) * 0.019 : T <= 32 ? 0.5 : 0.5 + (T - 32) * 0.03; return v; };
  s += curve(x0, y0, w, h, endo, { stroke: RED, w: 3.5 });
  s += curve(x0, y0, w, h, (t) => 0.03 + 0.12 * Math.pow(2, (t * 40 - 20) / 10) * 0.6, { stroke: BLUE, w: 3.5 });
  s += text(XM(0), 72, "endotherm: high cost in the cold", { size: 11.5, weight: "bold", fill: RED, anchor: "start" });
  s += text(XM(1), y0 - 50, "ectotherm: low, rises as it warms", { size: 11.5, weight: "bold", fill: BLUE, anchor: "start" });
  FIGS["endo-ecto-graphs"] = { svg: svg(760, 330, s, "Two graphs: body temperature and metabolic rate of an endotherm and an ectotherm against environmental temperature"), caption: "An endotherm holds its body temperature steady by producing metabolic heat, so its metabolic rate climbs as the air gets colder (and rises a little in heat, for cooling); it is lowest in the thermoneutral zone. An ectotherm's body temperature follows its surroundings, and its much lower metabolic rate rises as it warms." };
}

// ---- phosphorus cycle ----
{
  let s = defs + title("The phosphorus cycle: rock, not air, is the reservoir");
  const box = (cx, cy, w, h, fill, stroke, lines, o = {}) => rect(cx - w / 2, cy - h / 2, w, h, { fill, stroke, w: 2, rx: 10 }) + lines.map((l, i) => text(cx, cy - (lines.length - 1) * 8 + i * 16 + 5, l, { size: i === 0 ? 13 : 11.5, weight: i === 0 ? "bold" : "normal", fill: i === 0 ? (o.col || C.ink) : C.muted })).join("");
  s += rect(26, 44, 220, 64, { fill: "#f4f4f4", stroke: "#aaa", w: 1.5, rx: 10, }) + text(136, 68, "Atmosphere", { size: 13, weight: "bold", fill: C.muted }) + text(136, 86, "no major phosphorus reservoir", { size: 11.5, fill: C.muted }) + text(136, 101, "(no common phosphorus gas)", { size: 11, fill: C.muted });
  s += box(110, 250, 170, 64, "#ece3d6", "#8d6e4a", ["Phosphate rock", "main reservoir"], { col: "#6d4c2a" });
  s += box(330, 250, 164, 64, "#e3eef9", "#6f93bd", ["Phosphate (PO₄³⁻)", "in soil and water"], { col: BLUE });
  s += box(330, 120, 160, 64, "#e2f1e0", "#5f9a58", ["Producers", "ATP, DNA, phospholipids"], { col: GREEN });
  s += box(582, 120, 140, 54, "#f7e6dc", "#c0785a", ["Consumers"], { col: "#a4471f" });
  s += box(582, 250, 140, 64, "#efe7d2", "#9a8a5a", ["Decomposers", "dead matter, wastes"], { col: "#6d5b20" });
  s += box(330, 370, 180, 54, "#dde6ee", "#6c8296", ["Ocean sediments"], { col: "#3f5a72" });
  s += arrow(196, 250, 244, 250, { w: 2.5 }) + text(220, 208, "weathering (slow)", { size: 11.5, weight: "bold" });
  s += arrow(330, 216, 330, 156, { w: 2.5, stroke: GREEN, marker: "ahg" }) + text(338, 192, "uptake", { size: 11.5, weight: "bold", fill: GREEN, anchor: "start" });
  s += arrow(412, 120, 508, 120, { w: 2.5 }) + text(460, 108, "eating", { size: 11.5, weight: "bold" });
  s += arrow(582, 148, 582, 216, { w: 2.5 }) + text(590, 180, "excretion,", { size: 11.5, weight: "bold", anchor: "start" }) + text(590, 196, "death", { size: 11.5, weight: "bold", anchor: "start" });
  s += path("M 392 152 Q 470 188 508 224", { stroke: C.ink, w: 2, marker: "ah", dash: "5 4" });
  s += arrow(510, 250, 416, 250, { w: 2.5 }) + text(462, 240, "decomposition", { size: 11.5, weight: "bold" }) + text(462, 270, "returns PO₄³⁻", { size: 11, fill: C.muted });
  s += arrow(330, 284, 330, 340, { w: 2.5 }) + text(338, 314, "runoff, settling", { size: 11.5, weight: "bold", anchor: "start" });
  s += path("M 240 372 Q 110 372 110 286", { stroke: "#8d6e4a", w: 2.5, marker: "ah", dash: "7 5" }) + text(120, 352, "geologic uplift", { size: 11.5, weight: "bold", fill: "#6d4c2a", anchor: "end" }) + text(120, 368, "(millions of years)", { size: 11, fill: C.muted, anchor: "end" });
  s += path("M 480 336 Q 430 310 404 286", { stroke: C.orange, w: 2.2, marker: "aho", dash: "4 3" }) + text(486, 342, "fertilizer runoff", { size: 11.5, weight: "bold", fill: C.orange, anchor: "start" }) + text(486, 358, "(human addition)", { size: 11, fill: C.muted, anchor: "start" });
  s += NOTEBOX(644, 300, 104, 104) + text(696, 322, "Why P is", { size: 12.5, weight: "bold" }) + text(696, 338, "often limiting", { size: 12.5, weight: "bold" }) + text(696, 358, "slow release", { size: 11.5 }) + text(696, 374, "from rock, no", { size: 11.5 }) + text(696, 390, "gas phase", { size: 11.5 });
  FIGS["bio-phosphorus-cycle"] = { svg: svg(760, 414, s, "Phosphorus cycle from rock weathering through soil phosphate, producers, consumers and decomposers to ocean sediments and uplift"), caption: "Phosphate is released slowly when rock weathers, passes through food webs, and returns to the soil through excretion and decomposition. Some washes into the ocean and is locked in sediments until uplift exposes it as rock again, millions of years later. With no gas phase, the cycle is slow and phosphorus is often limiting." };
}

// ---- DDT biomagnification ----
{
  let s = defs + title("Biomagnification of DDT up a food chain");
  const data = [["water", 0.00005], ["zooplankton", 0.04], ["small fish", 0.5], ["large fish", 2], ["fish-eating birds", 25]];
  const cx = 200, base = 300, lh = 46;
  const widths = [330, 270, 205, 145, 92];
  data.forEach(([n, v], i) => {
    const y = base - (i + 1) * lh, w = widths[i];
    s += rect(cx - w / 2, y, w, lh - 4, { fill: i === 0 ? "#e3eef9" : ["", "#e6f2e4", "#dbeee0", "#cfe6d8", "#c2ddd0"][i], stroke: i === 0 ? "#6f93bd" : "#6b8f5e", rx: 6 });
    s += text(cx, y + 18, n, { size: 12.5, weight: "bold" });
    const per = [1, 2, 4, 7, 12][i], cols = Math.ceil(per / 2), sp = Math.min(16, (w - 24) / Math.max(cols, 1));
    for (let k = 0; k < per; k++) { const c = k % cols, row = Math.floor(k / cols); s += circle(cx - (cols - 1) * sp / 2 + c * sp, y + 27 + row * 8, 2.8, { fill: RED }); }
  });
  s += circle(42, 324, 3.5, { fill: RED }) + text(52, 328, "= DDT (dots show concentration, not amount)", { size: 11, anchor: "start", fill: C.muted });
  // bar chart, log scale
  const bx = 430, bw = 300, lo = -5, hi = 2, BX = (v) => bx + (Math.log10(v) - lo) / (hi - lo) * bw;
  s += text(bx + bw / 2, 52, "DDT concentration (ppm, log scale)", { size: 12.5, weight: "bold" });
  [-5, -4, -3, -2, -1, 0, 1, 2].forEach((e) => s += line(BX(10 ** e), 64, BX(10 ** e), 302, { stroke: "#ece9e0", w: 1 }) + text(BX(10 ** e), 318, e >= 0 ? String(10 ** e) : "10" + ["⁻⁵", "⁻⁴", "⁻³", "⁻²", "⁻¹"][e + 5], { size: 11, fill: C.muted }));
  data.forEach(([n, v], i) => { const y = base - (i + 1) * lh + 10; s += rect(bx, y, Math.max(BX(v) - bx, 3), 22, { fill: i === 0 ? "#9db8d8" : RED, rx: 3 }) + text(BX(v) + 6, y + 16, String(v), { size: 12, weight: "bold", anchor: "start", fill: i === 0 ? BLUE : RED }); });
  s += line(bx, 64, bx, 302, { w: 1.6 });
  s += arrow(380, 270, 380, 80, { w: 2.5, stroke: RED, marker: "ahr" }) + text(392, 176, "concentration rises", { size: 11.5, weight: "bold", fill: RED, rotate: 90 });
  s += NOTEBOX(40, 340, 680, 40) + text(380, 365, "Biomass and energy shrink at each level, but fat-stored DDT is kept, so it becomes more concentrated.", { size: 12, weight: "bold" });
  FIGS["ddt-biomagnification"] = { svg: svg(760, 392, s, "Food-chain pyramid with DDT concentration rising from lake water to fish-eating birds, with a log-scale bar chart"), caption: "Typical DDT levels measured along an aquatic food chain in the 1960s. Each consumer eats many prey and keeps their DDT in its fat while burning most of their biomass, so the top predators carry the highest concentration, enough to thin eggshells." };
}

// ---- eutrophication: sequence + oxygen graph ----
{
  let s = defs + title("Eutrophication: how extra nutrients end in a dead zone");
  const steps = [["N and P", "runoff", "#e3eef9", BLUE], ["algal", "bloom", "#e2f1e0", GREEN], ["algae", "die", "#efe7d2", "#6d5b20"], ["decomposers", "use up O₂", "#f7e6dc", "#a4471f"], ["fish die:", "dead zone", "#f6d6d0", RED]];
  steps.forEach(([a, b, fill, col], i) => { const x = 24 + i * 148; s += rect(x, 40, 118, 50, { fill, stroke: col, w: 2, rx: 10 }) + text(x + 59, 61, a, { size: 12.5, weight: "bold", fill: col }) + text(x + 59, 78, b, { size: 12, fill: col }); if (i < 4) s += arrow(x + 120, 65, x + 144, 65, { w: 2 }); });
  const x0 = 90, y0 = 300, w = 470, h = 170;
  s += axes(x0, y0, w, h, "", "") + text(x0 + w / 2, y0 + 22, "time after nutrients enter →", { size: 12, weight: "bold" }) + text(x0 - 22, y0 - h / 2, "amount (relative)", { size: 12, weight: "bold", rotate: -90 });
  const thr = 0.25;
  s += line(x0, y0 - thr * h, x0 + w, y0 - thr * h, { stroke: RED, w: 1.5, dash: "6 4" });
  const algae = (t) => 0.08 + 0.84 * Math.exp(-(((t - 0.3) / 0.13) ** 2)), dec = (t) => 0.06 + 0.74 * Math.exp(-(((t - 0.56) / 0.13) ** 2)), o2 = (t) => 0.72 + 0.12 * Math.exp(-(((t - 0.27) / 0.1) ** 2)) - 0.62 * Math.exp(-(((t - 0.64) / 0.16) ** 2));
  s += curve(x0, y0, w, h, algae, { stroke: GREEN, w: 3 }) + curve(x0, y0, w, h, dec, { stroke: "#a4471f", w: 3, dash: "8 5" }) + curve(x0, y0, w, h, o2, { stroke: BLUE, w: 3.5 });
  const lx = 590;
  s += line(lx, 150, lx + 28, 150, { stroke: GREEN, w: 3 }) + text(lx + 34, 154, "algae", { size: 12, anchor: "start", fill: GREEN, weight: "bold" });
  s += line(lx, 176, lx + 28, 176, { stroke: "#a4471f", w: 3, dash: "8 5" }) + text(lx + 34, 180, "decomposers", { size: 12, anchor: "start", fill: "#a4471f", weight: "bold" });
  s += line(lx, 202, lx + 28, 202, { stroke: BLUE, w: 3.5 }) + text(lx + 34, 206, "dissolved O₂", { size: 12, anchor: "start", fill: BLUE, weight: "bold" });
  s += line(lx, 228, lx + 28, 228, { stroke: RED, w: 1.5, dash: "6 4" }) + text(lx + 34, 232, "hypoxic level", { size: 12, anchor: "start", fill: RED, weight: "bold" });
  s += text(lx, 264, "O₂ falls lowest AFTER", { size: 11.5, anchor: "start" }) + text(lx, 280, "the bloom, when", { size: 11.5, anchor: "start" }) + text(lx, 296, "decomposers peak", { size: 11.5, anchor: "start" });
  FIGS["eutrophication-o2"] = { svg: svg(760, 330, s, "Eutrophication sequence and a graph of algae, decomposers and dissolved oxygen over time"), caption: "Nutrient runoff feeds an algal bloom. The oxygen crash comes later, when the algae die and decomposer populations respiring on them peak; dissolved O₂ drops below the level fish need, then slowly recovers." };
}

// ---- taxis vs kinesis ----
{
  let s = defs + title("Taxis (directed) vs kinesis (undirected)");
  // taxis
  s += text(190, 52, "Taxis: negative phototaxis", { size: 13.5, weight: "bold", fill: BLUE });
  s += rect(30, 66, 330, 190, { fill: "#fafaf6", stroke: "#ccc", rx: 8 });
  s += circle(62, 160, 16, { fill: "#ffd84d", stroke: GOLD, w: 2 }); for (let a = 0; a < 360; a += 45) { const r = Math.PI * a / 180; s += line(62 + 21 * Math.cos(r), 160 + 21 * Math.sin(r), 62 + 28 * Math.cos(r), 160 + 28 * Math.sin(r), { stroke: GOLD, w: 2 }); }
  s += text(62, 206, "light", { size: 11.5, weight: "bold", fill: GOLD });
  [[110, 96, 330, 82], [118, 134, 336, 128], [112, 170, 334, 180], [116, 210, 330, 236]].forEach(([x1, y1, x2, y2]) => s += arrow(x1, y1, x2, y2, { stroke: BLUE, w: 2 }) + circle(x1, y1, 4, { fill: BLUE }));
  s += text(195, 276, "each larva heads straight away from the light", { size: 12 });
  // kinesis
  s += text(570, 52, "Kinesis: pill bugs and humidity", { size: 13.5, weight: "bold", fill: PURPLE });
  s += rect(400, 66, 340, 190, { fill: "#fbf3e2", stroke: "#ccc", rx: 8 }) + rect(570, 66, 170, 190, { fill: "#e3eef9", stroke: "none", rx: 8 }) + line(570, 66, 570, 256, { stroke: "#999", w: 1.5, dash: "5 4" });
  s += text(485, 84, "DRY", { size: 12, weight: "bold", fill: "#8a6d10" }) + text(655, 84, "DAMP", { size: 12, weight: "bold", fill: BLUE });
  s += path("M 420 200 L 470 112 L 500 220 L 540 120 L 452 150 L 556 196 L 520 236 L 556 104 L 590 150 L 606 158 L 612 176 L 628 180", { stroke: PURPLE, w: 2 }) + circle(628, 180, 4.5, { fill: PURPLE });
  [[650, 120], [700, 130], [660, 210], [710, 190], [690, 228], [622, 222], [716, 104]].forEach(([x, y]) => s += `<ellipse cx="${x}" cy="${y}" rx="7" ry="4.5" fill="#7a6a8a"/>`);
  s += text(485, 248, "fast, many turns", { size: 11.5, weight: "bold", fill: PURPLE });
  s += text(655, 248, "slow, few turns", { size: 11.5, weight: "bold", fill: PURPLE });
  s += text(570, 276, "no aiming: they simply linger where it is damp", { size: 12 });
  FIGS["taxis-kinesis"] = { svg: svg(760, 292, s, "Taxis shown as straight paths away from light; kinesis shown as fast, twisting movement in dry air and slow movement in damp air"), caption: "In a taxis the organism moves in a direction set by the stimulus. In a kinesis it only changes its speed or turning rate: pill bugs race and turn in dry air and slow down in damp air, so over time most end up in the damp side without ever heading toward it." };
}
