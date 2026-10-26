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

export function handSvg(spec) {
  const p = parse(spec);
  const fn = { chair, newman, fischer, haworth, energy, ir, ms, nmr, cnmr }[p.type];
  if (!fn) throw new Error("unknown svg type: " + p.type);
  return fn(p);
}
