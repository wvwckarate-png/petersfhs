// Hand-drawn figure generators for things SMILES cannot express: chair conformations, Newman and Fischer
// projections, Haworth rings, and reaction energy diagrams. Used only at authoring time.
//
// Spec syntax (the part after "svg:" in a {{svg:...}} token), segments split on ";":
//   chair; 1ax=Br; 1eq=H; 4ax=H; 4eq=CH3; [flip]; [label=text]
//   newman; front=CH3,H,H; back=CH3,H,H; rot=60            (rot = angle of back group 1 from front group 1)
//   fischer; top=CHO; bot=CH2OH; rows=H|OH, HO|H, H|OH      (left|right of each stereocenter, top to bottom)
//   haworth; pyr|fur; 1=down:OH; 2=down:OH; 3=up:OH; 4=down:OH; 5=up:CH2OH   (anomeric O on C1 is drawn like any other)
//   energy; sn2 | sn1 | exo | endo | twostep
const INK = "#1b1b1b";
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const f = (n) => (Math.round(n * 10) / 10).toString();

function parse(spec) {
  const [type, ...rest] = spec.split(";").map((s) => s.trim()).filter(Boolean);
  const opts = {}, flags = new Set();
  rest.forEach((r) => {
    const i = r.indexOf("=");
    if (i < 0) flags.add(r); else opts[r.slice(0, i).trim()] = r.slice(i + 1).trim();
  });
  return { type, opts, flags };
}

const SUBS = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
function richText(t, size) {
  const parts = esc(t).split(/([₀-₉]+)/);
  let out = "", shifted = false;
  for (const part of parts) {
    if (!part) continue;
    if (/^[₀-₉]+$/.test(part)) { out += `<tspan dy="${f(size * 0.25)}" font-size="${f(size * 0.72)}">${[...part].map((c) => SUBS[c]).join("")}</tspan>`; shifted = true; }
    else { out += shifted ? `<tspan dy="${f(-size * 0.25)}">${part}</tspan>` : part; shifted = false; }
  }
  return out;
}
function text(x, y, t, { size = 13, anchor = "middle", weight = "normal", fill = INK, italic = false } = {}) {
  return `<text x="${f(x)}" y="${f(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic ? ' font-style="italic"' : ""} font-family="Helvetica, Arial, sans-serif">${richText(t, size)}</text>`;
}
const line = (x1, y1, x2, y2, w = 1.6, extra = "") => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${INK}" stroke-width="${w}" stroke-linecap="round"${extra}/>`;
const wrap = (W, H, inner, label) => `<svg class="mol" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)}" width="${Math.ceil(W)}" height="${Math.ceil(H)}" viewBox="0 0 ${Math.ceil(W)} ${Math.ceil(H)}">${inner}</svg>`;

// ---------- chair ----------
// Standard textbook chair: a centrosymmetric hexagon, so opposite bonds are parallel. Axial bonds are vertical;
// the equatorial bond on each carbon is parallel to the ring bond one position over, pointing away from the ring.
function chair({ opts, flags }) {
  const base = [[0, 48], [30, 8], [68, 22], [98, 16], [68, 56], [30, 42]];
  const flip = flags.has("flip");
  const cen = [49, 32];
  const V = base.map(([x, y]) => [x, flip ? 64 - y : y]);
  const axUp = base.map((_, k) => (k % 2 === 1) !== flip);          // V2, V4, V6 axial up in the unflipped chair
  let out = "";
  const ys = V.map((v) => v[1]);
  // heavy edge = the lowest of the four sloped/horizontal long edges (V2–V3 or V5–V6)
  const lowEdge = (V[1][1] + V[2][1]) / 2 > (V[4][1] + V[5][1]) / 2 ? 1 : 4;
  for (let k = 0; k < 6; k++) {
    const j = (k + 1) % 6;
    out += line(V[k][0], V[k][1], V[j][0], V[j][1], k === lowEdge ? 3.6 : 1.7);
  }
  const labels = [];
  for (let k = 0; k < 6; k++) {
    if (opts[`atom${k + 1}`]) out += `<circle cx="${f(V[k][0])}" cy="${f(V[k][1])}" r="8" fill="#fff"/>` + text(V[k][0], V[k][1] + 5, opts[`atom${k + 1}`], { weight: "bold" });
  }
  for (let k = 0; k < 6; k++) {
    const ax = opts[`${k + 1}ax`], eq = opts[`${k + 1}eq`];
    if (ax !== undefined) {
      const y2 = V[k][1] + (axUp[k] ? -22 : 22);
      out += line(V[k][0], V[k][1], V[k][0], y2, 1.6);
      labels.push([V[k][0], y2 + (axUp[k] ? -5 : 14), ax, "middle"]);
    }
    if (eq !== undefined) {
      const a = V[(k + 1) % 6], b = V[(k + 2) % 6];
      let dx = b[0] - a[0], dy = b[1] - a[1];
      const sign = (V[k][0] - cen[0]) * dx + (V[k][1] - cen[1]) * dy >= 0 ? 1 : -1;
      const n = Math.hypot(dx, dy);
      dx = (sign * dx) / n; dy = (sign * dy) / n;
      const x2 = V[k][0] + dx * 24, y2 = V[k][1] + dy * 24;
      out += line(V[k][0], V[k][1], x2, y2, 1.6);
      labels.push([x2 + (dx > 0 ? 3 : -3), y2 + 5, eq, dx > 0 ? "start" : "end"]);
    }
  }
  let minX = 0, maxX = 100, minY = Math.min(...ys), maxY = Math.max(...ys);
  labels.forEach(([x, y, t, anchor]) => {
    out += text(x, y, t, { anchor });
    const w = t.length * 8;
    minX = Math.min(minX, anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x);
    maxX = Math.max(maxX, anchor === "start" ? x + w : anchor === "middle" ? x + w / 2 : x);
    minY = Math.min(minY, y - 12); maxY = Math.max(maxY, y + 5);
  });
  const pad = 10;
  return wrap(maxX - minX + 2 * pad, maxY - minY + 2 * pad, `<g transform="translate(${f(pad - minX)} ${f(pad - minY)})">${out}</g>`, opts.label || "Cyclohexane chair conformation");
}

// ---------- Newman ----------
function newman({ opts }) {
  const R = 34, Lb = 24, cx = 88, cy = 88;
  const front = (opts.front || "H,H,H").split(",").map((s) => s.trim());
  const back = (opts.back || "H,H,H").split(",").map((s) => s.trim());
  let rot = parseFloat(opts.rot ?? "60");
  const vis = rot % 120 === 0 ? 26 : 0;     // nudge eclipsed back bonds so both are visible
  const ang = (a) => ((a - 90) * Math.PI) / 180;
  let out = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#fff" stroke="${INK}" stroke-width="1.8"/>`;
  back.forEach((lab, i) => {
    const a = ang(i * 120 + rot + vis);
    out += line(cx + R * Math.cos(a), cy + R * Math.sin(a), cx + (R + Lb) * Math.cos(a), cy + (R + Lb) * Math.sin(a), 1.8);
    out += text(cx + (R + Lb + 12) * Math.cos(a), cy + (R + Lb + 12) * Math.sin(a) + 5, lab);
  });
  front.forEach((lab, i) => {
    const a = ang(i * 120);
    out += line(cx, cy, cx + (R + Lb) * Math.cos(a), cy + (R + Lb) * Math.sin(a), 2.6);
    out += text(cx + (R + Lb + 12) * Math.cos(a), cy + (R + Lb + 12) * Math.sin(a) + 5, lab);
  });
  out += `<circle cx="${cx}" cy="${cy}" r="3" fill="${INK}"/>`;
  return wrap(176, 176, out, opts.label || "Newman projection");
}

// ---------- Fischer ----------
function fischer({ opts }) {
  const rows = (opts.rows || "").split(",").map((s) => s.trim().split("|").map((t) => t.trim()));
  const gap = 34, W = 150, cx = W / 2, top = 28;
  const H = top + (rows.length + 1) * gap + 22;
  let out = line(cx, top - 8, cx, top + rows.length * gap + 30, 1.8);
  out += text(cx, top - 12, opts.top || "CHO");
  rows.forEach(([l, r], i) => {
    const y = top + 12 + i * gap;
    out += line(cx - 24, y, cx + 24, y, 1.8);
    out += text(cx - 30, y + 5, l, { anchor: "end" });
    out += text(cx + 30, y + 5, r, { anchor: "start" });
  });
  out += text(cx, top + rows.length * gap + 44, opts.bot || "CH₂OH");
  return wrap(W, H + 4, out, opts.label || "Fischer projection");
}

// ---------- Haworth ----------
function haworth({ opts, flags }) {
  const fur = flags.has("fur");
  // ring vertices (screen coordinates), back edge on top; ring O at back right for pyranose, back for furanose
  const pyr = { O: [102, 32], 1: [136, 52], 2: [118, 86], 3: [62, 86], 4: [44, 52], 5: [62, 32] };
  const furn = { O: [90, 28], 1: [128, 50], 2: [108, 86], 3: [56, 86], 4: [40, 50] };
  const V = fur ? furn : pyr;
  const order = fur ? ["O", 1, 2, 3, 4] : ["O", 1, 2, 3, 4, 5];
  // pyranose: C5 is back-left, O back-right; wedge the front edge (C2–C3) bold
  let out = "";
  for (let i = 0; i < order.length; i++) {
    const a = V[order[i]], b = V[order[(i + 1) % order.length]];
    const front = order[i] === 2 && order[(i + 1) % order.length] === 3;
    const w = front ? 4 : 1.8;
    out += line(a[0], a[1], b[0], b[1], w);
  }
  out += `<circle cx="${V.O[0]}" cy="${V.O[1]}" r="9" fill="#fff"/>` + text(V.O[0], V.O[1] + 5, "O", { weight: "bold" });
  for (const k of Object.keys(opts)) {
    const m = /^(\d)$/.exec(k);
    if (!m) continue;
    const [dir, lab] = opts[k].split(":");
    const p = V[m[1]];
    if (!p) continue;
    const up = dir.trim() === "up";
    const y2 = up ? p[1] - (m[1] === "5" || m[1] === "4" && fur ? 26 : 24) : p[1] + 24;
    out += line(p[0], p[1], p[0], y2, 1.5);
    out += text(p[0], up ? y2 - 5 : y2 + 15, lab.trim());
  }
  const H = 150;
  return wrap(190, H, `<g transform="translate(8 22)">${out}</g>`, opts.label || "Haworth projection");
}

// ---------- energy diagrams ----------
function energy({ opts, flags }) {
  const kind = [...flags][0] || "sn2";
  const W = 350, H = 190, x0 = 40, y0 = 20, yb = 160;
  let path = "", labels = "";
  const ax = `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${yb}" stroke="${INK}" stroke-width="1.5"/><line x1="${x0}" y1="${yb}" x2="${W - 10}" y2="${yb}" stroke="${INK}" stroke-width="1.5"/>`
    + text(14, 90, "Energy", { size: 12 }).replace("<text", `<text transform="rotate(-90 14 90)"`)
    + text((W + x0) / 2, H - 2, "Reaction coordinate", { size: 12 });
  const curve = (pts) => {
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = pts[i - 1], [qx, qy] = pts[i], mx = (px + qx) / 2;
      d += ` C ${mx} ${py}, ${mx} ${qy}, ${qx} ${qy}`;
    }
    return `<path d="${d}" fill="none" stroke="#c0392b" stroke-width="2.4"/>`;
  };
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#666" stroke-width="1" stroke-dasharray="4 3"/>`;
  const arrow = (x, y1, y2) => { const d = y2 > y1 ? -7 : 7; return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${INK}" stroke-width="1.2"/><polygon points="${x},${y2} ${x - 3.5},${y2 + d} ${x + 3.5},${y2 + d}" fill="${INK}"/>`; };
  if (kind === "butane") {
    // torsional energy of butane about C2–C3 (kcal/mol): anti 0, gauche 0.9, eclipsed H/CH₃ 3.6, eclipsed CH₃/CH₃ 4.9
    const E = [[0, 4.9], [60, 0.9], [120, 3.6], [180, 0], [240, 3.6], [300, 0.9], [360, 4.9]];
    const px = (a) => 60 + (a / 360) * 250, py = (e) => 150 - e * 22;
    path = curve(E.map(([a, e]) => [px(a), py(e)]));
    const ticks = [0, 60, 120, 180, 240, 300, 360].map((a) => `<line x1="${px(a)}" y1="${yb}" x2="${px(a)}" y2="${yb + 4}" stroke="${INK}"/>` + text(px(a), yb + 16, `${a}°`, { size: 11 })).join("");
    labels += ticks + text(px(180), py(4.4), "anti", { size: 12 }) + text(px(60), py(0.9) + 20, "gauche", { size: 12 }) + text(px(300), py(0.9) + 20, "gauche", { size: 12 })
      + text(px(0) + 22, py(4.9) - 6, "CH₃/CH₃ eclipsed", { size: 11, anchor: "start" }) + text(px(120), py(3.6) - 7, "eclipsed", { size: 11 }) + text(px(240), py(3.6) - 7, "eclipsed", { size: 11 })
      + text(px(360) + 4, py(4.9) + 4, "4.9", { size: 11, anchor: "start" }) + text(px(360) + 4, py(0) + 4, "0", { size: 11, anchor: "start" });
    return wrap(W, H + 6, ax.replace("Reaction coordinate", "Dihedral angle between the two CH3 groups").replace(">Energy<", ">Energy (kcal/mol)<") + path + labels, opts.label || "Butane torsional energy diagram");
  }
  if (kind === "sn2" || kind === "exo" || kind === "endo") {
    const ys = kind === "endo" ? 110 : 90, ye = kind === "endo" ? 70 : 125, yt = kind === "endo" ? 28 : 36;
    path = curve([[x0 + 5, ys], [95, ys], [150, yt], [205, ye], [290, ye]]);
    labels += dash(95, ys, 150, ys) + arrow(118, ys, yt + 4) + text(112, (ys + yt) / 2 + 4, "Ea", { size: 12, italic: true, anchor: "end" });
    labels += text(68, ys + 18, "Reactants", { size: 12 }) + text(245, ye + 18, "Products", { size: 12 }) + text(150, yt - 8, "Transition state ‡", { size: 12 });
    labels += dash(205, ys, 305, ys) + arrow(300, ys, ye) + text(308, (ys + ye) / 2 + 4, "ΔG°", { size: 12, italic: true, anchor: "start" });
  } else if (kind === "sn1" || kind === "twostep") {
    path = curve([[x0 + 5, 100], [75, 100], [110, 30], [145, 90], [170, 90], [205, 55], [245, 135], [285, 135]]);
    labels += text(70, 118, "Reactants", { size: 12 }) + text(258, 154 - 2, "Products", { size: 12 })
      + text(110, 22, "TS₁ (slow)", { size: 12 }) + text(157, 108, "Intermediate", { size: 12 }) + text(205, 46, "TS₂", { size: 12 });
    labels += dash(75, 100, 110, 100) + arrow(92, 100, 34) + text(88, 70, "Ea", { size: 12, italic: true, anchor: "end" });
  }
  return wrap(W, H, ax + path + labels, opts.label || "Reaction energy diagram");
}

// ---------- IR spectrum ----------
// ir; 3300:0.7:150=O–H stretch; 1715:0.9:25=C=O      (wavenumber : depth 0–1 : half-width cm⁻¹ = label)
function ir({ opts }) {
  const W = 420, H = 205, x0 = 34, x1 = W - 10, yTop = 32, yBase = 155;
  const px = (k) => x0 + ((4000 - k) / 3500) * (x1 - x0);
  const peaks = Object.entries(opts).filter(([k]) => /^\d+:/.test(k)).map(([k, label]) => { const [pos, depth, w] = k.split(":").map(Number); return { pos, depth, w, label }; });
  let d = "";
  for (let k = 4000; k >= 500; k -= 4) {
    let t = 0;
    for (const p of peaks) t += p.depth * Math.exp(-(((k - p.pos) / p.w) ** 2));
    t = Math.min(0.97, t);
    const y = yTop + 6 + t * (yBase - yTop - 6);
    d += `${d ? "L" : "M"}${f(px(k))} ${f(y)} `;
  }
  let out = `<path d="${d}" fill="none" stroke="#1d4e89" stroke-width="1.6"/>`;
  out += `<line x1="${x0}" y1="${yBase + 4}" x2="${x1}" y2="${yBase + 4}" stroke="${INK}" stroke-width="1.3"/>`;
  [4000, 3000, 2000, 1500, 1000, 500].forEach((k) => { out += line(px(k), yBase + 4, px(k), yBase + 9, 1.2) + text(px(k), yBase + 22, String(k), { size: 10 }); });
  out += text((x0 + x1) / 2, H - 4, "Wavenumber (cm⁻¹)", { size: 11 });
  out += text(14, yBase / 2 + 10, "Transmittance", { size: 10 }).replace("<text", `<text transform="rotate(-90 14 ${yBase / 2 + 10})"`);
  peaks.forEach((p) => {
    if (!p.label) return;
    const lx = px(p.pos);
    out += text(lx, 12, p.label, { size: 10, fill: "#8a1c1c" }) + text(lx, 24, String(p.pos), { size: 9, fill: "#666" });
  });
  return wrap(W, H, out, opts.label || "Infrared spectrum");
}

// ---------- mass spectrum ----------
// ms; 43=100; 58=30; 15=20; M=58      (m/z = relative abundance; M marks the molecular ion)
function ms({ opts }) {
  const W = 360, H = 170, x0 = 34, x1 = W - 10, yTop = 18, yBase = 130;
  const peaks = Object.entries(opts).filter(([k]) => /^\d+$/.test(k)).map(([k, v]) => ({ mz: +k, a: parseFloat(v), note: (v.split(":")[1] || "") }));
  const maxMz = Math.ceil((Math.max(...peaks.map((p) => p.mz)) + 8) / 10) * 10;
  const px = (m) => x0 + (m / maxMz) * (x1 - x0);
  let out = line(x0, yBase, x1, yBase, 1.3) + line(x0, yTop, x0, yBase, 1.3);
  for (let m = 0; m <= maxMz; m += maxMz > 80 ? 20 : 10) out += line(px(m), yBase, px(m), yBase + 5, 1.2) + text(px(m), yBase + 18, String(m), { size: 10 });
  out += text((x0 + x1) / 2, H - 4, "m/z", { size: 11 });
  out += text(12, yBase / 2 + 10, "Relative abundance", { size: 10 }).replace("<text", `<text transform="rotate(-90 12 ${yBase / 2 + 10})"`);
  peaks.forEach((p) => {
    const y = yBase - (p.a / 100) * (yBase - yTop - 8);
    const isM = String(opts.M) === String(p.mz);
    out += line(px(p.mz), yBase, px(p.mz), y, 2.4).replace(INK, isM ? "#8a1c1c" : INK);
    out += text(px(p.mz), y - 4, p.note ? `${p.mz} ${p.note}` : String(p.mz), { size: 10 });
  });
  return wrap(W, H, out, opts.label || "Mass spectrum");
}

// ---------- 1H NMR spectrum ----------
// nmr; 1.25:t:3H; 2.05:s:3H; 4.12:q:2H      (shift : multiplicity s|d|t|q|quint|sext|sept|m|br : integration)
// Splitting is exaggerated (0.09 ppm per line) so the pattern is visible at this size.
const PASCAL = { s: [1], d: [1, 1], t: [1, 2, 1], q: [1, 3, 3, 1], quint: [1, 4, 6, 4, 1], sext: [1, 5, 10, 10, 5, 1], sept: [1, 6, 15, 20, 15, 6, 1], m: [1, 2, 3, 4, 3, 2, 1], br: [1] };
function nmr({ opts: o, flags }) {
  const opts = { ...o, ...Object.fromEntries([...flags].map((k) => [k, ""])) };
  const W = 440, H = 200, x0 = 20, x1 = W - 14, yBase = 140, yTop = 34;
  const lo = parseFloat(opts.lo ?? "0"), hi = parseFloat(opts.hi ?? "10");
  const px = (d) => x1 - ((d - lo) / (hi - lo)) * (x1 - x0);
  const sig = Object.entries(opts).filter(([k]) => /^[\d.]+:/.test(k)).map(([k, v]) => { const [d, m, n] = k.split(":"); return { d: +d, m, n, label: v }; });
  let out = line(x0, yBase, x1, yBase, 1.4);
  for (let t = Math.ceil(lo); t <= hi; t++) out += line(px(t), yBase, px(t), yBase + 5, 1.2) + text(px(t), yBase + 18, String(t), { size: 10 });
  out += text((x0 + x1) / 2, H - 4, "Chemical shift δ (ppm)", { size: 11 });
  const sp = 0.09;
  sig.forEach((s) => {
    const pat = PASCAL[s.m] || [1];
    const maxP = Math.max(...pat);
    const hh = (h) => (h / maxP) * (s.m === "br" ? 40 : 70);
    if (s.m === "br") {
      out += `<path d="M ${f(px(s.d) - 14)} ${yBase} Q ${f(px(s.d))} ${yBase - 80} ${f(px(s.d) + 14)} ${yBase}" fill="none" stroke="#1d4e89" stroke-width="1.8"/>`;
    } else {
      pat.forEach((h, i) => {
        const d = s.d + (i - (pat.length - 1) / 2) * sp * (s.m === "m" ? 0.6 : 1);
        out += line(px(d), yBase, px(d), yBase - hh(h), 2, "").replace(INK, "#1d4e89");
      });
    }
    const labelY = yTop - 8;
    out += text(px(s.d), yBase + 32 + 0, s.n, { size: 11, fill: "#8a1c1c" });
    if (s.label) out += text(px(s.d), labelY, s.label, { size: 10, fill: "#333" });
  });
  return wrap(W, H + 10, out, opts.label || "1H NMR spectrum");
}

// ---------- 13C NMR spectrum ----------
// cnmr; 207=C=O; 31=CH₃        (shift = optional label)
function cnmr({ opts: o, flags }) {
  const opts = { ...o, ...Object.fromEntries([...flags].map((k) => [k, ""])) };
  const W = 440, H = 170, x0 = 20, x1 = W - 14, yBase = 110, yTop = 30;
  const px = (d) => x1 - (d / 220) * (x1 - x0);
  let out = line(x0, yBase, x1, yBase, 1.4);
  for (let t = 0; t <= 200; t += 20) out += line(px(t), yBase, px(t), yBase + 5, 1.2) + text(px(t), yBase + 18, String(t), { size: 10 });
  out += text((x0 + x1) / 2, H - 4, "Chemical shift δ (ppm)", { size: 11 });
  Object.entries(opts).filter(([k]) => /^\d+(\.\d+)?$/.test(k)).forEach(([k, v]) => {
    out += line(px(+k), yBase, px(+k), yTop + 16, 2).replace(INK, "#1d4e89");
    out += text(px(+k), yTop + 8, k, { size: 10, fill: "#333" });
    if (v) out += text(px(+k), yTop - 4, v, { size: 10, fill: "#8a1c1c" });
  });
  return wrap(W, H, out, opts.label || "13C NMR spectrum");
}


// ---------- generic line plot, bar chart, lever, and sarcomere (physiology, kinesiology, nutrition) ----------
// plot; size=440x260; x=Time (ms); y=Membrane potential (mV); xlim=0:5; ylim=-90:60; xticks=0,1,2; yticks=-70,0
//   line=0,-70 1,-70 1.2,35 2,-80 | #C0392B | name | dash      (smooth curve through data points; style parts are optional)
//   hline=-55 Threshold | #888      vline=1.2 Peak      dot=1.2,35      text=2.5,10 label | start|middle|end      band=1,2 Label | #fde8a0
// bars; size=440x260; y=Percent of energy; data=Carbs:55:#2E6BC6, Fat:30:#C99700, Protein:15:#C0392B
// lever; class=1|2|3      sarcomere; relaxed|contracted
const NAVY = "#002855", PLOT_COL = ["#C0392B", "#002855", "#2E7D32", "#C99700", "#7A3FB8", "#E67E22"];
function multi(spec) { return spec.split(";").map((s) => s.trim()).filter(Boolean).map((s) => { const i = s.indexOf("="); return i < 0 ? [s, ""] : [s.slice(0, i).trim(), s.slice(i + 1).trim()]; }); }
function smooth(pts) {
  if (pts.length < 3) return pts.map((p, i) => `${i ? "L" : "M"} ${f(p[0])} ${f(p[1])}`).join(" ");
  let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${f(c1[0])} ${f(c1[1])}, ${f(c2[0])} ${f(c2[1])}, ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}
function plot(spec) {
  const items = multi(spec).slice(1), o = {}; items.forEach(([k, v]) => { if (!(k in o)) o[k] = v; });
  const [W, H] = (o.size || "440x260").split("x").map(Number), L = 54, R = 16, T = 16, B = 44;
  const [x0, x1] = (o.xlim || "0:10").split(":").map(Number), [y0, y1] = (o.ylim || "0:100").split(":").map(Number);
  const px = (x) => L + ((x - x0) / (x1 - x0)) * (W - L - R), py = (y) => H - B - ((y - y0) / (y1 - y0)) * (H - T - B);
  let out = "", ci = 0;
  const ticks = (list, axis) => (list || "").split(",").filter(Boolean).map(Number).map((v) => axis === "x"
    ? line(px(v), H - B, px(v), H - B + 4, 1.2) + text(px(v), H - B + 16, String(v), { size: 11 })
    : line(L - 4, py(v), L, py(v), 1.2) + text(L - 7, py(v) + 4, String(v), { size: 11, anchor: "end" })).join("");
  items.forEach(([k, v]) => {
    const [main, style = "", extra = "", extra2 = ""] = v.split("|").map((x) => x.trim());
    if (k === "band") { const [a, b, ...lab] = main.replace(",", " ").split(/\s+/); out += `<rect x="${f(px(+a))}" y="${T}" width="${f(px(+b) - px(+a))}" height="${H - B - T}" fill="${style || "#FFF1C9"}" opacity=".7"/>` + (lab.length ? text((px(+a) + px(+b)) / 2, T + 13, lab.join(" "), { size: 11, weight: "bold" }) : ""); }
  });
  out += `<rect x="${L}" y="${T}" width="${W - L - R}" height="${H - B - T}" fill="none"/>` + line(L, T, L, H - B, 1.6) + line(L, H - B, W - R, H - B, 1.6) + ticks(o.xticks, "x") + ticks(o.yticks, "y");
  if (!o.xticks) out += text(L, H - B + 16, String(x0), { size: 11 }) + text(W - R, H - B + 16, String(x1), { size: 11, anchor: "end" });
  if (!o.yticks) out += text(L - 7, H - B + 4, String(y0), { size: 11, anchor: "end" }) + text(L - 7, T + 8, String(y1), { size: 11, anchor: "end" });
  out += text((L + W - R) / 2, H - 6, o.x || "", { size: 12 }) + text(13, (T + H - B) / 2, o.y || "", { size: 12 }).replace("<text", `<text transform="rotate(-90 13 ${(T + H - B) / 2})"`);
  items.forEach(([k, v]) => {
    const [main, style = "", extra = "", extra2 = ""] = v.split("|").map((x) => x.trim());
    if (k === "hline") { const [yv, ...lab] = main.split(/\s+/); out += `<line x1="${L}" y1="${f(py(+yv))}" x2="${W - R}" y2="${f(py(+yv))}" stroke="${style || "#888"}" stroke-width="1.2" stroke-dasharray="5 4"/>` + text(W - R - 2, py(+yv) - 4, lab.join(" "), { size: 11, anchor: "end", fill: style || "#555" }); }
    else if (k === "vline") { const [xv, ...lab] = main.split(/\s+/); out += `<line x1="${f(px(+xv))}" y1="${T}" x2="${f(px(+xv))}" y2="${H - B}" stroke="${style || "#888"}" stroke-width="1.2" stroke-dasharray="5 4"/>` + text(px(+xv) + 3, T + 11, lab.join(" "), { size: 11, anchor: "start", fill: style || "#555" }); }
    else if (k === "line") {
      const pts = main.split(/\s+/).map((p) => p.split(",").map(Number)).map(([a, b]) => [px(a), py(b)]), col = style || PLOT_COL[ci++ % PLOT_COL.length];
      out += `<path d="${smooth(pts)}" fill="none" stroke="${col}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"${extra2 === "dash" || extra === "dash" ? ' stroke-dasharray="6 4"' : ""}/>`;
      if (extra && extra !== "dash") { const last = pts[pts.length - 1]; out += text(Math.min(last[0] - 2, W - R - 2), last[1] - 7, extra, { size: 11.5, anchor: "end", weight: "bold", fill: col }); }
    } else if (k === "dot") { const [a, b] = main.split(",").map(Number); out += `<circle cx="${f(px(a))}" cy="${f(py(b))}" r="4.5" fill="${style || "#C0392B"}"/>`; }
    else if (k === "text") { const m = main.match(/^([-\d.]+),([-\d.]+)\s+(.*)$/); if (m) out += text(px(+m[1]), py(+m[2]), m[3], { size: 11.5, anchor: style || "middle", weight: "bold", fill: extra || INK }); }
  });
  return wrap(W, H, out, o.title || "Graph");
}
function bars(spec) {
  const o = Object.fromEntries(multi(spec).slice(1)), [W, H] = (o.size || "440x260").split("x").map(Number), L = 54, R = 16, T = 22, B = 56;
  const data = (o.data || "").split(",").map((d) => d.trim().split(":")), max = +(o.max || Math.max(...data.map((d) => +d[1])) * 1.15);
  const bw = (W - L - R) / data.length;
  let out = line(L, T, L, H - B, 1.6) + line(L, H - B, W - R, H - B, 1.6) + text(13, (T + H - B) / 2, o.y || "", { size: 12 }).replace("<text", `<text transform="rotate(-90 13 ${(T + H - B) / 2})"`);
  data.forEach(([lab, val, col], i) => {
    const h = (+val / max) * (H - T - B), x = L + i * bw + bw * 0.18, w = bw * 0.64;
    out += `<rect x="${f(x)}" y="${f(H - B - h)}" width="${f(w)}" height="${f(h)}" rx="4" fill="${col || PLOT_COL[i % PLOT_COL.length]}"/>` + text(x + w / 2, H - B - h - 5, val + (o.unit || ""), { size: 11.5, weight: "bold" }) + text(x + w / 2, H - B + 15, lab.split("/")[0], { size: 11.5 }) + (lab.includes("/") ? text(x + w / 2, H - B + 29, lab.split("/")[1], { size: 11 }) : "");
  });
  return wrap(W, H, out, o.title || "Bar chart");
}
function lever(spec) {
  const cls = +(multi(spec).find(([k]) => k === "class") || [0, "1"])[1], W = 420, H = 200, by = 112;
  const FUL = (x) => `<polygon points="${x - 14},${by + 38} ${x + 14},${by + 38} ${x},${by + 6}" fill="${NAVY}"/>` + text(x, by + 56, "Fulcrum", { size: 11.5, weight: "bold" });
  const down = (x, label, col) => `<line x1="${x}" y1="${by - 56}" x2="${x}" y2="${by - 10}" stroke="${col}" stroke-width="3.4"/><polygon points="${x - 7},${by - 14} ${x + 7},${by - 14} ${x},${by - 2}" fill="${col}"/>` + text(x, by - 62, label, { size: 12, weight: "bold", fill: col });
  const up = (x, label, col) => `<line x1="${x}" y1="${by + 56}" x2="${x}" y2="${by + 10}" stroke="${col}" stroke-width="3.4"/><polygon points="${x - 7},${by + 14} ${x + 7},${by + 14} ${x},${by + 2}" fill="${col}"/>` + text(x, by + 72, label, { size: 12, weight: "bold", fill: col });
  const beam = `<rect x="40" y="${by - 6}" width="340" height="12" rx="6" fill="#8D6E4B"/>`, E = "#C0392B", Ld = "#2E6BC6";
  let body, name, ex;
  if (cls === 1) { body = FUL(210) + down(80, "Load", Ld) + down(340, "Effort", E); name = "Class 1: fulcrum in the middle"; ex = "seesaw · neck extension (nodding the head)"; }
  else if (cls === 2) { body = FUL(60) + down(190, "Load", Ld) + up(340, "Effort", E); name = "Class 2: load in the middle"; ex = "wheelbarrow · calf raise (standing on your toes)"; }
  else { body = FUL(60) + down(340, "Load", Ld) + up(190, "Effort", E); name = "Class 3: effort in the middle"; ex = "tweezers · biceps curl (most muscles in the body)"; }
  return wrap(W, H, beam + body + text(W / 2, 18, name, { size: 13, weight: "bold" }) + text(W / 2, 35, ex, { size: 11.5, fill: "#555" }), name);
}
function sarcomere(spec) {
  const contracted = /contracted/.test(spec), W = 430, H = 230, y = 92;
  const zL = contracted ? 90 : 50, zR = contracted ? 340 : 380, mid = (zL + zR) / 2, thick = contracted ? 140 : 160;
  let out = "";
  const thin = (x1, x2, yy) => `<line x1="${x1}" y1="${yy}" x2="${x2}" y2="${yy}" stroke="#C0392B" stroke-width="3" stroke-linecap="round"/>`;
  for (const dy of [-28, -14, 14, 28]) { out += thin(zL, contracted ? mid + 38 : zL + 105, y + dy) + thin(zR, contracted ? mid - 38 : zR - 105, y + dy); }
  for (const dy of [-21, 0, 21]) out += `<line x1="${mid - thick / 2}" y1="${y + dy}" x2="${mid + thick / 2}" y2="${y + dy}" stroke="${NAVY}" stroke-width="7" stroke-linecap="round"/>`;
  out += `<line x1="${zL}" y1="${y - 46}" x2="${zL}" y2="${y + 46}" stroke="#333" stroke-width="4"/><line x1="${zR}" y1="${y - 46}" x2="${zR}" y2="${y + 46}" stroke="#333" stroke-width="4"/>`;
  out += text(zL, y - 54, "Z line", { size: 11.5, weight: "bold" }) + text(zR, y - 54, "Z line", { size: 11.5, weight: "bold" }) + text(mid, y - 54, "M line", { size: 11.5, weight: "bold" });
  const br = (a, b, label, yy) => `<path d="M ${a} ${yy} v 6 H ${b} v -6" fill="none" stroke="#555" stroke-width="1.4"/>` + text((a + b) / 2, yy + 20, label, { size: 11.5 });
  out += br(mid - thick / 2, mid + thick / 2, "A band (thick filaments)", y + 56);
  out += br(zL, mid - thick / 2, "I band", y + 82) + br(mid + thick / 2, zR, "I band", y + 82);
  out += text(W / 2, 16, contracted ? "Contracted: filaments slide, the sarcomere shortens" : "Relaxed sarcomere", { size: 13, weight: "bold" }) + text(mid, y + 4, "", {}) + text(W / 2, H - 6, "red = thin filaments (actin) · navy = thick filaments (myosin)", { size: 11, fill: "#555" });
  return wrap(W, H, out, "Sarcomere");
}

export function handSvg(spec) {
  if (/^\s*plot\b/.test(spec)) return plot(spec);
  if (/^\s*bars\b/.test(spec)) return bars(spec);
  if (/^\s*lever\b/.test(spec)) return lever(spec);
  if (/^\s*sarcomere\b/.test(spec)) return sarcomere(spec);
  const p = parse(spec);
  const fn = { chair, newman, fischer, haworth, energy, ir, ms, nmr, cnmr }[p.type];
  if (!fn) throw new Error("unknown svg type: " + p.type);
  return fn(p);
}
