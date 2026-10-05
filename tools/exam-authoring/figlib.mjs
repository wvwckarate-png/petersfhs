// SVG figure toolkit for exam questions. Produces plain SVG strings (viewBox-sized, scale to container).
export const COL = { ink: "#2E332E", soft: "#767F73", grid: "#E6E4DC", a: "#3F7A94", b: "#D2705A", c: "#6E9A5E", d: "#8B76AE", e: "#D99A2B", g: "#9AA096" };
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const f = (n) => (Math.round(n * 100) / 100).toString();

export function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="Nunito, Arial, sans-serif" font-size="13" fill="${COL.ink}">${body}</svg>`;
}
function head(x1, y1, x2, y2, color, w) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 5 + w * 2.2, sp = 0.42;
  const p = [[x2, y2], [x2 - L * Math.cos(a - sp), y2 - L * Math.sin(a - sp)], [x2 - L * Math.cos(a + sp), y2 - L * Math.sin(a + sp)]];
  return `<polygon points="${p.map((q) => f(q[0]) + "," + f(q[1])).join(" ")}" fill="${color}"/>`;
}
export const line = (x1, y1, x2, y2, o = {}) => {
  const col = o.stroke || COL.ink, w = o.w || 1.6;
  let out = `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${col}" stroke-width="${w}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""} stroke-linecap="round"/>`;
  if (o.arrow) out += head(x1, y1, x2, y2, col, w);
  if (o.arrow2) out += head(x2, y2, x1, y1, col, w);
  return out;
};
export const rect = (x, y, w, h, o = {}) =>
  `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${o.fill || "none"}" stroke="${o.stroke || COL.ink}" stroke-width="${o.w ?? 1.6}"${o.rx ? ` rx="${o.rx}"` : ""}${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
export const circle = (cx, cy, r, o = {}) =>
  `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${o.fill || "none"}" stroke="${o.stroke || COL.ink}" stroke-width="${o.w ?? 1.6}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
export const text = (x, y, s, o = {}) =>
  `<text x="${f(x)}" y="${f(y)}" text-anchor="${o.anchor || "middle"}" font-size="${o.size || 13}" font-weight="${o.weight || 400}" fill="${o.fill || COL.ink}"${o.italic ? ' font-style="italic"' : ""}${o.rotate ? ` transform="rotate(${o.rotate} ${f(x)} ${f(y)})"` : ""}>${esc(s)}</text>`;
export const path = (d, o = {}) =>
  `<path d="${d}" fill="${o.fill || "none"}" stroke="${o.stroke || COL.ink}" stroke-width="${o.w ?? 1.6}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""} stroke-linecap="round" stroke-linejoin="round"/>`;
export const poly = (pts, o = {}) => path("M" + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join("L") + (o.close ? "Z" : ""), o);
export const dot = (x, y, r = 3.2, fill = COL.ink) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${fill}"/>`;
export const vec = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, { arrow: true, w: 2, ...o });

// ---------- charts ----------
function ticks(min, max, step) { const t = []; for (let v = min; v <= max + step * 1e-6; v += step) t.push(Math.round(v / step) * step); return t; }
const fmt = (v) => (Math.abs(v) >= 1e4 || (Math.abs(v) < 1e-2 && v !== 0) ? v.toExponential(0).replace("e+", "×10^").replace("e-", "×10^-") : String(Math.round(v * 1000) / 1000));

/** Line/scatter chart. series: [{name, pts:[[x,y]], color, dash, line:true, markers:true, label?}] */
export function chart(o) {
  const W = o.w || 520, H = o.h || 340;
  const m = { l: o.yLabel ? 64 : 50, r: o.legend ? 120 : 24, t: o.title ? 38 : 20, b: o.xLabel ? 58 : 40, ...(o.margin || {}) };
  const [x0, x1, xs] = o.x, [y0, y1, ys] = o.y;
  const px = (v) => m.l + ((v - x0) / (x1 - x0)) * (W - m.l - m.r);
  const py = (v) => H - m.b - ((v - y0) / (y1 - y0)) * (H - m.t - m.b);
  let b = "";
  if (o.title) b += text(W / 2, 20, o.title, { weight: 800, size: 14 });
  for (const t of ticks(y0, y1, ys)) {
    b += line(m.l, py(t), W - m.r, py(t), { stroke: COL.grid, w: 1 });
    b += text(m.l - 8, py(t) + 4, o.yFmt ? o.yFmt(t) : fmt(t), { anchor: "end", size: 12 });
  }
  for (const t of ticks(x0, x1, xs)) {
    if (o.vgrid) b += line(px(t), m.t, px(t), H - m.b, { stroke: COL.grid, w: 1 });
    b += line(px(t), H - m.b, px(t), H - m.b + 5, { w: 1.2 });
    b += text(px(t), H - m.b + 19, o.xFmt ? o.xFmt(t) : fmt(t), { size: 12 });
  }
  b += line(m.l, H - m.b, W - m.r, H - m.b) + line(m.l, m.t, m.l, H - m.b);
  if (o.xLabel) b += text((m.l + W - m.r) / 2, H - 10, o.xLabel, { size: 13 });
  if (o.yLabel) b += text(16, (m.t + H - m.b) / 2, o.yLabel, { rotate: -90, size: 13 });
  (o.series || []).forEach((s, i) => {
    const col = s.color || [COL.a, COL.b, COL.c, COL.d, COL.e][i % 5];
    const P = s.pts.map(([x, y]) => [px(x), py(y)]);
    if (s.line !== false && P.length > 1) b += poly(P, { stroke: col, w: s.w || 2.2, dash: s.dash });
    if (s.markers) P.forEach(([x, y]) => (b += circle(x, y, 3.8, { fill: s.hollow ? "#fff" : col, stroke: col, w: 1.8 })));
  });
  (o.annotations || []).forEach((a) => {
    if (a.type === "text") b += text(px(a.x), py(a.y), a.s, { anchor: a.anchor || "start", size: a.size || 12, fill: a.fill || COL.ink });
    if (a.type === "vline") b += line(px(a.x), m.t, px(a.x), H - m.b, { stroke: a.stroke || COL.g, dash: "5 4", w: 1.3 });
    if (a.type === "hline") b += line(m.l, py(a.y), W - m.r, py(a.y), { stroke: a.stroke || COL.g, dash: "5 4", w: 1.3 });
    if (a.type === "dot") b += circle(px(a.x), py(a.y), a.r || 4.5, { fill: a.fill || COL.ink, stroke: a.fill || COL.ink });
    if (a.type === "arrow") b += line(px(a.x1), py(a.y1), px(a.x2), py(a.y2), { arrow: true, w: 1.6, stroke: a.stroke || COL.ink });
  });
  if (o.legend) {
    (o.series || []).forEach((s, i) => {
      const col = s.color || [COL.a, COL.b, COL.c, COL.d, COL.e][i % 5];
      const ly = m.t + 10 + i * 20;
      b += line(W - m.r + 12, ly, W - m.r + 34, ly, { stroke: col, w: 2.4, dash: s.dash });
      b += text(W - m.r + 40, ly + 4, s.name, { anchor: "start", size: 12 });
    });
  }
  return svg(W, H, b);
}

/** Grouped bar chart. o.categories, o.series:[{name, vals, color, err?}] */
export function barChart(o) {
  const W = o.w || 520, H = o.h || 340;
  const m = { l: o.yLabel ? 64 : 50, r: o.series && o.series.length > 1 ? 120 : 24, t: o.title ? 38 : 20, b: o.xLabel ? 62 : 44 };
  const [y0, y1, ys] = o.y;
  const py = (v) => H - m.b - ((v - y0) / (y1 - y0)) * (H - m.t - m.b);
  let b = "";
  if (o.title) b += text(W / 2, 20, o.title, { weight: 800, size: 14 });
  for (const t of ticks(y0, y1, ys)) {
    b += line(m.l, py(t), W - m.r, py(t), { stroke: COL.grid, w: 1 });
    b += text(m.l - 8, py(t) + 4, fmt(t), { anchor: "end", size: 12 });
  }
  b += line(m.l, H - m.b, W - m.r, H - m.b) + line(m.l, m.t, m.l, H - m.b);
  const n = o.categories.length, k = o.series.length;
  const gw = (W - m.l - m.r) / n, bw = Math.min(46, (gw * 0.7) / k);
  o.categories.forEach((c, i) => {
    const gx = m.l + gw * i + gw / 2;
    o.series.forEach((s, j) => {
      const col = s.color || [COL.a, COL.b, COL.c, COL.d][j % 4];
      const x = gx - (bw * k) / 2 + bw * j;
      const v = s.vals[i];
      b += rect(x, py(v), bw - 3, py(y0) - py(v), { fill: col, stroke: col, w: 1 });
      if (s.err && s.err[i]) {
        const cx = x + (bw - 3) / 2;
        b += line(cx, py(v + s.err[i]), cx, py(v - s.err[i]), { w: 1.4 }) + line(cx - 4, py(v + s.err[i]), cx + 4, py(v + s.err[i]), { w: 1.4 }) + line(cx - 4, py(v - s.err[i]), cx + 4, py(v - s.err[i]), { w: 1.4 });
      }
    });
    const lines = String(c).split("\n");
    lines.forEach((ln, li) => (b += text(gx, H - m.b + 17 + li * 14, ln, { size: 12 })));
  });
  if (o.xLabel) b += text((m.l + W - m.r) / 2, H - 8, o.xLabel);
  if (o.yLabel) b += text(16, (m.t + H - m.b) / 2, o.yLabel, { rotate: -90 });
  if (k > 1) o.series.forEach((s, j) => {
    const col = s.color || [COL.a, COL.b, COL.c, COL.d][j % 4];
    const ly = m.t + 10 + j * 20;
    b += rect(W - m.r + 12, ly - 8, 14, 14, { fill: col, stroke: col, w: 1 }) + text(W - m.r + 32, ly + 4, s.name, { anchor: "start", size: 12 });
  });
  return svg(W, H, b);
}

// ---------- circuit parts (x,y = start point, horizontal unless noted) ----------
export function resistor(x, y, len = 70, label = "", vertical = false) {
  const z = [], n = 6, amp = 8, seg = len / (n + 2);
  const pts = [[0, 0], [seg, 0]];
  for (let i = 0; i < n; i++) pts.push([seg * (1.5 + i), i % 2 === 0 ? -amp : amp]);
  pts.push([seg * (n + 1), 0], [len, 0]);
  const P = pts.map(([a, b]) => (vertical ? [x + b, y + a] : [x + a, y + b]));
  let out = poly(P);
  if (label) out += vertical ? text(x + 18, y + len / 2 + 4, label, { anchor: "start" }) : text(x + len / 2, y - 14, label);
  return out;
}
export function battery(x, y, label = "", vertical = false) {
  // long plate = positive. Horizontal: positive plate on the right. Vertical: positive on top.
  let out = "";
  if (!vertical) {
    out += line(x, y, x + 18, y) + line(x + 18, y - 14, x + 18, y + 14, { w: 2 }) + line(x + 26, y - 8, x + 26, y + 8, { w: 3.4 }) + line(x + 26, y, x + 44, y);
    if (label) out += text(x + 22, y - 22, label);
  } else {
    out += line(x, y, x, y + 18) + line(x - 14, y + 18, x + 14, y + 18, { w: 3.4 }) + line(x - 8, y + 26, x + 8, y + 26, { w: 3.4 }) + line(x, y + 26, x, y + 44);
  }
  return out;
}
export const meter = (x, y, letter, r = 13) => circle(x, y, r, { fill: "#fff" }) + text(x, y + 5, letter, { weight: 700 });
export function bulb(x, y, label = "", r = 13) {
  const d = r * 0.7;
  return circle(x, y, r, { fill: "#fff" }) + line(x - d, y - d, x + d, y + d, { w: 1.4 }) + line(x - d, y + d, x + d, y - d, { w: 1.4 }) + (label ? text(x, y - r - 6, label) : "");
}
export const wire = (pts) => poly(pts, { w: 1.8 });
export const node = (x, y) => dot(x, y, 3.6);

// ---------- optics ----------
export function lens(x, cy, hgt, converging = true) {
  const t = converging ? 10 : -10;
  let out = line(x, cy - hgt, x, cy + hgt, { w: 2 });
  if (converging) out += poly([[x - 8, cy - hgt + 8], [x, cy - hgt], [x + 8, cy - hgt + 8]], { w: 2 }) + poly([[x - 8, cy + hgt - 8], [x, cy + hgt], [x + 8, cy + hgt - 8]], { w: 2 });
  else out += poly([[x - 8, cy - hgt], [x, cy - hgt + 8], [x + 8, cy - hgt]], { w: 2 }) + poly([[x - 8, cy + hgt], [x, cy + hgt - 8], [x + 8, cy + hgt]], { w: 2 });
  return out;
}
export const tickMark = (x, y, label, below = true) => line(x, y - 5, x, y + 5, { w: 1.5 }) + text(x, y + (below ? 20 : -10), label, { size: 12 });
export const objArrow = (x, base, h, color = COL.a, label = "") => line(x, base, x, base - h, { stroke: color, w: 3, arrow: true }) + (label ? text(x, base + 18, label, { size: 12 }) : "");

// ---------- helper ----------
export const fig = (svgString, alt, extra = {}) => ({ svg: svgString, alt, ...extra });
export const table = (headers, rows, caption) => ({ table: { headers, rows }, ...(caption ? { caption } : {}) });
export const curve = (fn, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, fn(x)]; });
