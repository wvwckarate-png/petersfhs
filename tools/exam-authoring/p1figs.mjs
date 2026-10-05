// Figure generators for the AP Physics 1 MCQ exams (mechanics scenes, force diagrams, graphs).
import { COL, svg, line, rect, circle, text, path, poly, dot, vec, chart, fig, curve } from "./figlib.mjs";
export { fig, chart, COL };

const BLK = "#E3EDF2", WOOD = "#EFE4CF", WATER = "#D8E8F2";
const R = (n) => Math.round(n * 100) / 100;
const rad = (d) => (d * Math.PI) / 180;

const hatch = (x1, x2, y, step = 10) => {
  let o = line(x1, y, x2, y, { w: 2 });
  for (let x = x1 + step; x <= x2; x += step) o += line(x, y, x - 7, y + 8, { stroke: COL.g, w: 1.1 });
  return o;
};
const ceiling = (x1, x2, y, step = 10) => {
  let o = line(x1, y, x2, y, { w: 2 });
  for (let x = x1; x <= x2 - step / 2; x += step) o += line(x, y, x + 7, y - 8, { stroke: COL.g, w: 1.1 });
  return o;
};
const wallV = (x, y1, y2, side = -1, step = 10) => {
  let o = line(x, y1, x, y2, { w: 2 });
  for (let y = y1 + step; y <= y2; y += step) o += line(x, y, x + side * 8, y - 7, { stroke: COL.g, w: 1.1 });
  return o;
};
const block = (x, y, w, h, label, fill = BLK) => rect(x, y, w, h, { fill, w: 1.8 }) + (label ? text(x + w / 2, y + h / 2 + 5, label, { weight: 700 }) : "");
const wheels = (x, y, w, h) => circle(x + w * 0.22, y + h + 6, 6, { fill: "#fff", w: 1.6 }) + circle(x + w * 0.78, y + h + 6, 6, { fill: "#fff", w: 1.6 });
const force = (x1, y1, x2, y2, label, o = {}) =>
  vec(x1, y1, x2, y2, { stroke: o.stroke || COL.b, w: o.w || 2.4 }) +
  (label ? text(o.lx ?? (x1 + x2) / 2, o.ly ?? (y1 + y2) / 2 - 8, label, { anchor: o.anchor || "middle", weight: 700, size: o.size || 13, fill: o.fill || COL.ink }) : "");
const dim = (x1, y1, x2, y2, label, o = {}) =>
  line(x1, y1, x2, y2, { arrow: true, arrow2: true, w: 1.3, stroke: COL.soft }) +
  (label ? text(o.lx ?? (x1 + x2) / 2, o.ly ?? (y1 + y2) / 2 - 6, label, { anchor: o.anchor || "middle", size: 12, fill: COL.ink, ...(o.rotate ? { rotate: o.rotate } : {}) }) : "");
const coil = (x1, y, x2, turns = 9, amp = 9) => {
  const pts = [[x1, y]], seg = (x2 - x1) / (turns * 2 + 2);
  pts.push([x1 + seg, y]);
  for (let i = 0; i < turns * 2; i++) pts.push([x1 + seg * (i + 1.5), y + (i % 2 === 0 ? -amp : amp)]);
  pts.push([x2 - seg, y], [x2, y]);
  return poly(pts, { w: 1.8 });
};
const coilV = (x, y1, y2, turns = 9, amp = 9) => {
  const pts = [[x, y1]], seg = (y2 - y1) / (turns * 2 + 2);
  pts.push([x, y1 + seg]);
  for (let i = 0; i < turns * 2; i++) pts.push([x + (i % 2 === 0 ? -amp : amp), y1 + seg * (i + 1.5)]);
  pts.push([x, y2 - seg], [x, y2]);
  return poly(pts, { w: 1.8 });
};
const arc = (cx, cy, r, a1, a2, o = {}) => {
  // angles in degrees measured counterclockwise from +x (screen y flipped)
  const x1 = cx + r * Math.cos(rad(a1)), y1 = cy - r * Math.sin(rad(a1)), x2 = cx + r * Math.cos(rad(a2)), y2 = cy - r * Math.sin(rad(a2));
  return path(`M${R(x1)} ${R(y1)}A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} ${a2 > a1 ? 0 : 1} ${R(x2)} ${R(y2)}`, { w: 1.4, stroke: COL.soft, ...o });
};

// ============ rows of carts / balls (collisions, explosions) ============
/** rows: [{title, items:[{x, w, label, v, dir, shape:'cart'|'ball'|'wall', unknown, spring}]}] */
export function carts({ rows, W = 500, rowH = 136 }) {
  const H = rows.length * rowH + 14;
  let b = "";
  rows.forEach((row, ri) => {
    const top = ri * rowH + 8, base = top + rowH - 16;
    b += text(10, top + 16, row.title, { anchor: "start", weight: 800, size: 13 });
    b += line(18, base, W - 18, base, { w: 2 });
    (row.items || []).forEach((it, i) => {
      const w = it.w || 70, h = it.h || 38;
      const shape = it.shape || "cart";
      let cx = it.x + w / 2, ytop;
      if (shape === "wall") {
        b += wallV(it.x + w, base - 74, base, 1 * (it.side ?? 1));
        cx = it.x; ytop = base - 74;
        if (it.label) b += text(it.x + w / 2, base - 82, it.label, { size: 12 });
        return;
      }
      if (shape === "ball") {
        const r = w / 2; ytop = base - 2 * r;
        b += circle(it.x + r, base - r, r, { fill: BLK, w: 1.8 });
        if (it.label) b += text(it.x + r, base + 15, it.label, { size: 12, weight: 700 });
      } else {
        ytop = base - 12 - h;
        b += block(it.x, ytop, w, h, it.label) + wheels(it.x, ytop, w, h);
      }
      if (it.dir) {
        const ay = ytop - 16, len = 52;
        b += force(cx, ay, cx + it.dir * len, ay, it.v, { stroke: COL.a, lx: cx + (it.dir * len) / 2, ly: ay - 7, fill: COL.ink });
      } else if (it.v) {
        b += text(cx, ytop - 10, it.v, { size: 12, fill: COL.soft });
      }
      const nxt = row.items[i + 1];
      if (it.spring && nxt) b += coil(it.x + w, ytop + h / 2, nxt.x, 5, 9);
    });
  });
  return svg(W, H, b);
}

// ============ blocks on a horizontal surface ============
/** blocks:[{label, w}], forces:[{label, dir:1|-1, on:index, len, push}] (push = arrow ends at the block), tie: index pair for a string */
export function flatBlocks({ blocks, forces = [], surfaceLabel = "", W = 480, H = 190, tie = null, ends = null, motion = null }) {
  const base = 135, h = 50, gap = tie ? 84 : 0;
  const total = blocks.reduce((s, bk) => s + (bk.w || 80), 0) + gap * (blocks.length - 1);
  const leftNeed = Math.max(0, ...forces.filter((fr) => fr.on === 0 && fr.dir === (fr.push ? 1 : -1)).map((fr) => (fr.len || 70) + 14));
  let x = Math.max(24 + leftNeed, (W - total) / 2 - 10), b = "", xs = [];
  b += hatch(18, W - 18, base);
  blocks.forEach((bk) => {
    const w = bk.w || 80;
    xs.push([x, w]);
    b += block(x, base - h, w, h, bk.label);
    x += w + gap;
  });
  if (tie) b += line(xs[tie[0]][0] + xs[tie[0]][1], base - h / 2, xs[tie[1]][0], base - h / 2, { w: 2 }) + text((xs[tie[0]][0] + xs[tie[0]][1] + xs[tie[1]][0]) / 2, base - h / 2 - 8, "string", { size: 12, fill: COL.soft });
  forces.forEach((fr) => {
    const [bx, bw] = xs[fr.on], len = fr.len || 70, ay = fr.y ?? base - h / 2;
    let x1, x2;
    if (fr.push) { x1 = fr.dir === 1 ? bx - len : bx + bw + len; x2 = fr.dir === 1 ? bx : bx + bw; }
    else { x1 = fr.dir === 1 ? bx + bw : bx; x2 = fr.dir === 1 ? bx + bw + len : bx - len; }
    b += force(x1, ay, x2, ay, fr.label, { lx: (x1 + x2) / 2, ly: ay - 9, size: 14 });
  });
  if (surfaceLabel) b += text(W / 2, base + 30, surfaceLabel, { size: 13, fill: COL.soft });
  if (ends) b += text(24, base + 30, ends[0], { anchor: "start", weight: 700 }) + text(W - 24, base + 30, ends[1], { anchor: "end", weight: 700 });
  if (motion) b += force(motion.x, motion.y, motion.x + motion.dir * 56, motion.y, motion.label, { stroke: COL.a, lx: motion.x + motion.dir * 28, ly: motion.y - 8 });
  return svg(W, H, b);
}

/** One force-from-the-left picture for a single block pulled/pushed (shortcut). */
export function pushedBlock({ label, F, Fdir = 1, surface = "", W = 480 }) {
  return flatBlocks({ blocks: [{ label, w: 100 }], forces: [{ label: F, dir: Fdir, on: 0, len: 90, push: true }], surfaceLabel: surface, W });
}

/** Block pulled at an angle above the horizontal along a floor; distance dimension below. */
export function angledPull({ F, deg, label = "box", dist, W = 480, H = 220 }) {
  const base = 140, x0 = 80, w = 90, h = 50;
  let b = hatch(18, W - 18, base) + block(x0, base - h, w, h, label);
  const sx = x0 + w, sy = base - h / 2, L = 120;
  b += line(sx, sy, sx + L + 20, sy, { stroke: COL.g, dash: "4 4", w: 1.2 });
  b += force(sx, sy, sx + L * Math.cos(rad(deg)), sy - L * Math.sin(rad(deg)), F, { lx: sx + L * Math.cos(rad(deg)) + 8, ly: sy - L * Math.sin(rad(deg)) - 6, anchor: "start", size: 14 });
  b += arc(sx, sy, 56, 0, deg) + text(sx + 70, sy - 6, deg + "°", { size: 13 });
  if (dist) b += line(x0 + w / 2, base + 8, x0 + w / 2, base + 30, { stroke: COL.soft, w: 1 }) + line(x0 + w / 2 + 160, base + 8, x0 + w / 2 + 160, base + 30, { stroke: COL.soft, w: 1 }) + dim(x0 + w / 2, base + 24, x0 + w / 2 + 160, base + 24, dist, { ly: base + 44 });
  return svg(W, H, b);
}

/** Top view: object with two perpendicular forces. */
export function perpForces({ label, f1, f2, W = 420, H = 230 }) {
  const cx = 150, cy = 150;
  let b = block(cx - 34, cy - 22, 68, 44, label);
  b += force(cx + 34, cy, cx + 34 + 140, cy, f1, { lx: cx + 34 + 70, ly: cy + 22, size: 14 });
  b += force(cx, cy - 22, cx, cy - 22 - 105, f2, { lx: cx + 12, ly: cy - 22 - 55, anchor: "start", size: 14 });
  b += text(W - 60, 26, "top view", { size: 12, fill: COL.soft });
  return svg(W, H, b);
}

// ============ inclines ============
/** arrows: [{dir:1 (up slope)|-1 (down slope), label}] drawn from the block's center. info = text inside the wedge. */
export function incline({ deg, blockLabel = "", info = "", hText = "", slopeText = "", t = 0.55, arrows = [], W = 470, H = 250, blockW = 52 }) {
  const hyp = 250, th = rad(deg), bx = hyp * Math.cos(th), ry = hyp * Math.sin(th), x0 = arrows.length ? 120 : 40, yb = H - 36;
  const A = [x0, yb], B = [x0 + bx, yb], C = [x0 + bx, yb - ry];
  let b = poly([A, B, C], { close: true, fill: "#F3F0E6", w: 2 }) + hatch(x0 - 20, x0 + bx + 20, yb);
  const P = [A[0] + t * bx, A[1] - t * ry];
  b += `<g transform="translate(${R(P[0])} ${R(P[1])}) rotate(${-deg})"><rect x="${-blockW / 2}" y="-30" width="${blockW}" height="30" fill="${BLK}" stroke="${COL.ink}" stroke-width="1.8"/></g>`;
  const ctr = [P[0] - 15 * Math.sin(th), P[1] - 15 * Math.cos(th)];
  if (blockLabel) b += text(ctr[0], ctr[1] + 5, blockLabel, { weight: 700, size: 12 });
  b += arc(x0, yb, 42, 0, deg) + text(x0 + 62, yb - 8 - deg * 0.2, deg + "°", { size: 13 });
  arrows.forEach((a) => {
    const d = [a.dir * Math.cos(th), -a.dir * Math.sin(th)], len = a.len || 60;
    const s0 = [ctr[0] + d[0] * 24, ctr[1] + d[1] * 24];
    const e = [ctr[0] + d[0] * (24 + len), ctr[1] + d[1] * (24 + len)];
    b += force(s0[0], s0[1], e[0], e[1], "", {});
    b += text(e[0] + (a.dir === 1 ? 8 : -8), e[1] + (a.dir === 1 ? -6 : 4), a.label, { anchor: a.dir === 1 ? "start" : "end", weight: 700, size: 13 });
  });
  if (info) b += text(x0 + bx * 0.66, yb - 10, info, { size: 13, fill: COL.soft });
  if (hText) b += dim(B[0] + 22, B[1], B[0] + 22, C[1], "", {}) + text(B[0] + 32, (B[1] + C[1]) / 2 + 4, hText, { anchor: "start", size: 13 }) + line(C[0], C[1], C[0] + 28, C[1], { stroke: COL.g, w: 1 });
  if (slopeText) {
    const n = [Math.sin(th), Math.cos(th)], f0 = 0.12, f1 = 0.88;
    const p1 = [A[0] + f0 * bx + n[0] * 26, A[1] - f0 * ry + n[1] * 26], p2 = [A[0] + f1 * bx + n[0] * 26, A[1] - f1 * ry + n[1] * 26];
    b += dim(p1[0], p1[1], p2[0], p2[1], "", {}) + text((p1[0] + p2[0]) / 2 + n[0] * 14, (p1[1] + p2[1]) / 2 + n[1] * 14, slopeText, { size: 13, rotate: -deg });
  }
  return svg(W, H, b);
}

// ============ circular motion (top view) ============
export function circleTop({ rText, vText, objText, kind = "puck", showV = true, string = true, W = 420, H = 280, stringBreak = false, ccw = true }) {
  const cx = 190, cy = 140, r = 96;
  let b = circle(cx, cy, r, { dash: "6 5", stroke: COL.g, w: 1.6 }) + dot(cx, cy, 4);
  const ox = cx + r, oy = cy;
  if (string) b += line(cx, cy, ox, oy, { w: stringBreak ? 1.6 : 1.6, dash: string === "dashed" ? "5 4" : undefined });
  b += text(cx + r * 0.38, cy - 8, rText, { size: 13 });
  if (kind === "car") b += `<rect x="${ox - 18}" y="${oy - 11}" width="36" height="22" rx="5" fill="${BLK}" stroke="${COL.ink}" stroke-width="1.8"/>` + text(ox, oy + 4, "car", { size: 11, weight: 700 });
  else b += circle(ox, oy, objText ? 25 : 15, { fill: BLK, w: 1.8 }) + (objText ? text(ox, oy + 4, objText, { size: 11, weight: 700 }) : "");
  if (kind === "car" && objText) b += text(ox + 26, oy + 36, objText, { anchor: "start", size: 12 });
  if (showV) b += force(ox, oy - 26, ox, oy - 26 - 58, vText, { stroke: COL.a, lx: ox + 12, ly: oy - 26 - 30, anchor: "start" });
  if (stringBreak) b += arc(cx, cy, r + 22, 5, 70, { stroke: COL.ink }) + `<polygon points="${R(cx + (r + 22) * Math.cos(rad(70)))},${R(cy - (r + 22) * Math.sin(rad(70)))} ${R(cx + (r + 22) * Math.cos(rad(70)) + 8)},${R(cy - (r + 22) * Math.sin(rad(70)) + 4)} ${R(cx + (r + 22) * Math.cos(rad(70)) - 2)},${R(cy - (r + 22) * Math.sin(rad(70)) + 10)}" fill="${COL.ink}"/>` + text(ox + 22, oy + 30, "string breaks here", { anchor: "start", size: 12 });
  b += text(W - 20, 22, "top view", { anchor: "end", size: 12, fill: COL.soft });
  return svg(W, H, b);
}

/** Wrench / door: force F applied at the end of an arm at an angle to the arm. */
export function torqueArm({ body = "wrench", rText, F, deg, W = 480, H = 240, pivotLabel = "bolt" }) {
  const px = 70, py = 150, len = 270, tx = px + len;
  let b = "";
  if (body === "door") b += `<rect x="${px}" y="${py - 8}" width="${len}" height="16" fill="${WOOD}" stroke="${COL.ink}" stroke-width="1.8"/>` + wallV(px - 6, py - 28, py + 28, -1);
  else b += `<rect x="${px}" y="${py - 7}" width="${len}" height="14" rx="7" fill="#DCE0DA" stroke="${COL.ink}" stroke-width="1.8"/>`;
  b += circle(px, py, body === "door" ? 3 : 13, { fill: body === "door" ? COL.ink : "#fff", w: 2 });
  b += body === "door" ? text(px + 14, py + 32, pivotLabel, { anchor: "start", size: 12 }) : text(px, py + 32, pivotLabel, { size: 12 });
  b += line(tx, py, tx + 100, py, { stroke: COL.g, dash: "4 4", w: 1.2 });
  const L = 105;
  b += force(tx, py, tx + L * Math.cos(rad(deg)), py - L * Math.sin(rad(deg)), F, { lx: tx + L * Math.cos(rad(deg)) + 8, ly: py - L * Math.sin(rad(deg)) - 4, anchor: "start", size: 14 });
  b += arc(tx, py, 58, 0, deg) + text(tx + 70, py - 8 - deg * 0.1, deg + "°", { size: 13 });
  b += dim(px, py + 46, tx, py + 46, rText, { ly: py + 66 }) + line(px, py + 40, px, py + 52, { stroke: COL.soft, w: 1 }) + line(tx, py + 40, tx, py + 52, { stroke: COL.soft, w: 1 });
  if (body === "door") b += text(W - 20, 22, "top view", { anchor: "end", size: 12, fill: COL.soft });
  return svg(W, H, b);
}

// ============ beams and levers ============
/** beam from 0..L (units). supports:[{at,kind:'tri'|'pivot'|'axis'}], loads:[{at,label,kind:'arrow'|'hang'|'rest'|'bob'}], dims:[{a,b,label}], ticks:[{at,label}] */
export function beam({ L, supports = [], loads = [], dims = [], ticks = [], beamLabel = "", labelAt = 0.5, W = 500, H = 250, thickness = 14, weightAt = null, axis = null }) {
  const x0 = 50, bw = W - 100, y = 110, X = (u) => x0 + (u / L) * bw;
  let b = `<rect x="${x0}" y="${y}" width="${bw}" height="${thickness}" fill="${WOOD}" stroke="${COL.ink}" stroke-width="1.8"/>`;
  supports.forEach((s) => {
    const sx = X(s.at), ty = y + thickness;
    b += poly([[sx, ty], [sx - 16, ty + 30], [sx + 16, ty + 30]], { close: true, fill: "#E8E6DE", w: 1.8 }) + line(sx - 26, ty + 30, sx + 26, ty + 30, { w: 2 });
    if (s.label) b += text(sx, ty + 48, s.label, { size: 12, fill: COL.soft });
  });
  loads.forEach((ld) => {
    const lx = X(ld.at);
    if (ld.kind === "arrow") b += force(lx, 40, lx, y - 2, ld.label, { lx: lx, ly: 30, size: 14 });
    else if (ld.kind === "up") b += force(lx, y + thickness + 52, lx, y + thickness + 2, ld.label, { lx, ly: y + thickness + 72, size: 14 });
    else if (ld.kind === "hang") b += line(lx, y + thickness, lx, y + thickness + 26, { w: 1.6 }) + block(lx - 30, y + thickness + 26, 60, 34, ld.label);
    else if (ld.kind === "rest") b += block(lx - (ld.w || 40) / 2, y - 46, ld.w || 40, 46, ld.label);
    else if (ld.kind === "bob") b += circle(lx, y + thickness / 2, 13, { fill: BLK, w: 1.8 }) + text(lx, y + thickness + 32, ld.label, { size: 12, weight: 700 });
  });
  if (axis !== null) b += circle(X(axis), y + thickness / 2, 20, { stroke: COL.b, w: 1.8, dash: "4 3" }) + dot(X(axis), y + thickness / 2, 3.4, COL.b) + text(X(axis), y - 18, "axis ⊥ to rod", { size: 12, fill: COL.b });
  if (beamLabel) b += text(x0 + bw * labelAt, ticks.length ? y - 36 : y - 12, beamLabel, { size: 12, fill: COL.soft });
  if (weightAt !== null) b += force(X(weightAt), y + thickness + 4, X(weightAt), y + thickness + 4, "", {});
  ticks.forEach((t) => (b += line(X(t.at), y - 8, X(t.at), y, { w: 1.3 }) + text(X(t.at), y - 14, t.label, { size: 12 })));
  dims.forEach((d, i) => {
    const dy = y + 94 + i * 24;
    b += line(X(d.a), y + thickness + 4, X(d.a), dy + 6, { stroke: COL.g, w: 1, dash: "3 3" }) + line(X(d.b), y + thickness + 4, X(d.b), dy + 6, { stroke: COL.g, w: 1, dash: "3 3" }) + dim(X(d.a), dy, X(d.b), dy, d.label, { ly: dy - 6 });
  });
  return svg(W, H, b);
}

/** Uniform rod hinged to a wall, held horizontal by a vertical cable. */
export function hingedRod({ rodLabel, lenText, W = 480, H = 230 }) {
  const x0 = 60, x1 = 400, y = 130;
  let b = wallV(x0 - 14, 50, 190, -1) + ceiling(x1 - 40, x1 + 40, 40);
  b += `<rect x="${x0 - 14}" y="${y - 7}" width="${x1 - x0 + 14}" height="14" fill="${WOOD}" stroke="${COL.ink}" stroke-width="1.8"/>` + circle(x0 - 6, y, 6, { fill: "#fff", w: 1.8 });
  b += line(x1 - 4, 40, x1 - 4, y - 7, { w: 2 }) + text(x1 + 6, 85, "cable", { anchor: "start", size: 12, fill: COL.soft }) + text(x0 + (x1 - x0) / 2, y - 14, rodLabel, { size: 12, fill: COL.soft }) + text(x0 + 24, y + 30, "hinge", { size: 12, fill: COL.soft });
  b += dim(x0 - 6, y + 40, x1 - 4, y + 40, lenText, { ly: y + 60 });
  return svg(W, H, b);
}

// ============ springs ============
export function springHoriz({ k, m, dimText = "", compressed = false, W = 480, H = 190 }) {
  const base = 135, wallX = 40, h = 50, relaxedEnd = 270, bx = compressed ? 210 : 270;
  let b = hatch(wallX, W - 18, base) + wallV(wallX, base - 90, base, -1);
  b += coil(wallX, base - h / 2, bx, 8, 10) + block(bx, base - h, 74, h, m);
  if (compressed) b += line(relaxedEnd, base - h - 10, relaxedEnd, base + 4, { stroke: COL.soft, dash: "4 3", w: 1.4 });
  b += text(wallX + (bx - wallX) / 2, base - h / 2 - 22, k, { size: 13, weight: 700 });
  if (compressed) b += dim(bx, base + 22, relaxedEnd, base + 22, dimText, { ly: base + 42 }) + text(relaxedEnd + 6, base - h - 14, "relaxed length", { anchor: "start", size: 11, fill: COL.soft }) + line(bx, base + 10, bx, base + 28, { stroke: COL.g, w: 1 });
  if (!compressed && dimText) b += text(W / 2 + 40, base + 32, dimText, { size: 12, fill: COL.soft });
  return svg(W, H, b);
}
export function springVert({ k, m, mode = "hang", dimText = "", H = 260, W = 380 }) {
  let b = "";
  if (mode === "hang") {
    b += ceiling(120, 260, 30) + coilV(190, 30, 130, 9, 11) + line(190, 130, 190, 150, { w: 1.8 }) + block(150, 150, 80, 56, m);
    b += text(215, 90, k, { anchor: "start", size: 13, weight: 700 });
  } else {
    const base = 215;
    b += line(130, base - 80, 270, base - 80, { stroke: COL.soft, dash: "4 3", w: 1.4 }) + hatch(100, 300, base) + coilV(200, base - 54, base, 7, 14) + circle(200, base - 54 - 17, 17, { fill: BLK, w: 1.8 }) + text(222, base - 54 - 12, m, { anchor: "start", size: 12, weight: 700 });
    b += text(232, base - 20, k, { anchor: "start", size: 13, weight: 700 });
    b += text(144, base - 86, "relaxed length", { anchor: "end", size: 11, fill: COL.soft });
    b += dim(150, base - 80, 150, base - 54, "", {}) + text(144, base - 62, dimText, { anchor: "end", size: 12 });
    b += force(200, base - 96, 200, 25, "", { stroke: COL.a }) + text(220, 40, "launch upward", { anchor: "start", size: 12, fill: COL.soft });
  }
  return svg(W, H, b);
}

// ============ pendulum ============
export function pendulum({ lenText, deg, W = 460, H = 270 }) {
  const px = 210, py = 30, L = 190, th = rad(deg), bx = px + L * Math.sin(th), by = py + L * Math.cos(th);
  let b = ceiling(px - 70, px + 70, py) + line(px, py, px, py + L + 20, { stroke: COL.g, dash: "5 4", w: 1.3 });
  b += line(px, py, bx, by, { w: 1.8 }) + circle(bx, by, 14, { fill: BLK, w: 1.8 });
  b += arc(px, py, 52, 270, 270 + deg);
  b += text(px + 30, py + 82, deg + "°", { size: 13 });
  b += text((px + bx) / 2 + 24, (py + by) / 2 - 4, lenText, { anchor: "start", size: 13 });
  b += text(bx, by + 34, "released from rest", { size: 12, fill: COL.soft });
  b += dot(px, py + L, 4) + text(px + 10, py + L + 20, "lowest point", { anchor: "start", size: 12 });
  return svg(W, H, b);
}

// ============ fluids ============
export function pipe({ left, right, W = 500, H = 220, points = false, flow = true }) {
  const cy = 120, hw = 46, hn = 22, xa = 30, xb = 180, xc = 250, xd = 470;
  let b = poly([[xa, cy - hw], [xb, cy - hw], [xc, cy - hn], [xd, cy - hn], [xd, cy + hn], [xc, cy + hn], [xb, cy + hw], [xa, cy + hw]], { fill: WATER, w: 2 });
  if (flow) b += force(60, cy - (points ? 14 : 0), 140, cy - (points ? 14 : 0), "", { stroke: COL.a }) + force(300, cy - (points ? 8 : 0), 380, cy - (points ? 8 : 0), "", { stroke: COL.a });
  left.forEach((t, i) => (b += text(105, cy - hw - 10 - (left.length - 1 - i) * 17, t, { size: 13 })));
  right.forEach((t, i) => (b += text(360, cy - hn - 14 - (right.length - 1 - i) * 17, t, { size: 13 })));
  if (points) b += dot(105, cy + 22, 4) + text(118, cy + 27, "1", { anchor: "start", weight: 800, size: 14 }) + dot(360, cy + 8, 4) + text(373, cy + 13, "2", { anchor: "start", weight: 800, size: 14 });
  return svg(W, H, b);
}
export function hangSubmerged({ objText, volText = "", W = 400, H = 280 }) {
  let b = ceiling(120, 280, 24) + line(200, 24, 200, 150, { w: 1.8 });
  b += `<path d="M110 120L110 250L290 250L290 120" fill="none" stroke="${COL.ink}" stroke-width="2"/>` + `<rect x="111" y="150" width="178" height="99" fill="${WATER}" stroke="none"/>`;
  b += block(170, 168, 60, 52, objText) + text(268, 240, "water", { size: 12, fill: COL.soft }) + (volText ? text(240, 198, volText, { anchor: "start", size: 12 }) : "");
  b += line(200, 150, 200, 168, { w: 1.8 }) + text(212, 90, "string", { anchor: "start", size: 12, fill: COL.soft });
  b += line(111, 150, 289, 150, { stroke: COL.a, w: 1.4 });
  return svg(W, H, b);
}
export function scaleReadings({ left, right, objLeft = "object", W = 500, H = 270 }) {
  let b = "";
  const one = (cx, reading, inWater) => {
    let o = ceiling(cx - 50, cx + 50, 20) + line(cx, 20, cx, 36, { w: 1.8 }) + `<rect x="${cx - 32}" y="36" width="64" height="34" rx="5" fill="#fff" stroke="${COL.ink}" stroke-width="1.8"/>` + text(cx, 58, reading, { weight: 800, size: 14 });
    o += line(cx, 70, cx, 110, { w: 1.8 });
    if (inWater) {
      o += `<rect x="${cx - 80}" y="130" width="160" height="110" fill="${WATER}" stroke="none"/><path d="M${cx - 80} 110L${cx - 80} 240L${cx + 80} 240L${cx + 80} 110" fill="none" stroke="${COL.ink}" stroke-width="2"/>` + line(cx - 80, 130, cx + 80, 130, { stroke: COL.a, w: 1.4 });
      o += block(cx - 24, 150, 48, 44, "") + text(cx + 70, 232, "water", { anchor: "end", size: 12, fill: COL.soft });
    } else o += block(cx - 24, 110, 48, 44, "");
    return o;
  };
  b += one(130, left, false) + one(370, right, true);
  b += text(130, 195, "in air", { size: 13, weight: 700 }) + text(370, 262, "completely submerged", { size: 13, weight: 700 });
  return svg(W, H, b);
}
export function hydraulic({ F, a1, a2, load, W = 500, H = 270 }) {
  let b = "";
  b += `<path d="M70 70L70 210L430 210L430 70" fill="none" stroke="${COL.ink}" stroke-width="2"/><path d="M110 70L110 170L300 170L300 70" fill="none" stroke="${COL.ink}" stroke-width="2"/>`;
  b += `<path d="M70 130L110 130L110 170L300 170L300 130L430 130L430 210L70 210Z" fill="${WATER}" stroke="none"/>`;
  b += rect(72, 122, 36, 8, { fill: "#9AA096", w: 1.4 }) + rect(302, 122, 126, 8, { fill: "#9AA096", w: 1.4 });
  b += force(90, 60, 90, 118, F, { lx: 90, ly: 50, size: 14 }) + text(90, 238, a1, { size: 12 }) + text(365, 238, a2, { size: 12 });
  b += block(317, 78, 96, 42, load);
  return svg(W, H, b);
}
export function tankHole({ hText, W = 460, H = 270 }) {
  const top = 30, wl = 60, hole = 60 + 90, bot = 220;
  let b = `<rect x="41" y="${wl}" width="218" height="${bot - wl}" fill="${WATER}" stroke="none"/><path d="M40 ${top}L40 ${bot}L260 ${bot}L260 ${top}" fill="none" stroke="${COL.ink}" stroke-width="2.2"/>` + line(41, wl, 259, wl, { stroke: COL.a, w: 1.5 });
  b += text(150, 48, "open to atmosphere", { size: 12, fill: COL.soft });
  b += circle(260, hole, 4, { fill: COL.ink });
  b += poly(Array.from({ length: 21 }, (_, i) => [260 + i * 7, hole + 0.0045 * (i * 7) ** 2 * 1.0]).filter((p) => p[1] < bot), { stroke: COL.a, w: 2.6 });
  b += dim(64, wl, 64, hole, "", {}) + text(74, (wl + hole) / 2 + 4, hText, { anchor: "start", size: 13 });
  b += line(64, hole, 258, hole, { stroke: COL.g, dash: "3 3", w: 1 });
  b += hatch(20, W - 20, bot);
  b += text(285, hole - 10, "small hole", { anchor: "start", size: 12, fill: COL.soft });
  return svg(W, H, b);
}
export function floatCylinder({ fracText, W = 420, H = 250 }) {
  const wl = 130;
  let b = `<rect x="61" y="${wl}" width="298" height="100" fill="${WATER}" stroke="none"/><path d="M60 80L60 230L360 230L360 80" fill="none" stroke="${COL.ink}" stroke-width="2.2"/>` + line(61, wl, 359, wl, { stroke: COL.a, w: 1.5 });
  b += `<rect x="170" y="${wl - 70}" width="80" height="100" fill="${BLK}" stroke="${COL.ink}" stroke-width="1.8"/>` + `<rect x="171" y="${wl}" width="78" height="30" fill="#B9D2E0" stroke="none"/>` + line(170, wl, 250, wl, { stroke: COL.ink, w: 1.2 });
  b += text(300, wl - 20, "cylinder", { anchor: "start", size: 13 }) + text(300, wl + 52, "water", { anchor: "start", size: 12, fill: COL.soft });
  b += text(210, wl + 50, fracText, { size: 12 }) ;
  return svg(W, H, b);
}

// ============ pulleys and drums ============
export function atwood({ m1, m2, W = 440, H = 290 }) {
  let b = ceiling(160, 280, 22) + line(220, 22, 220, 44, { w: 1.8 }) + circle(220, 78, 34, { fill: "#fff", w: 2 }) + dot(220, 78, 3);
  b += line(186, 78, 186, 150, { w: 1.8 }) + line(254, 78, 254, 190, { w: 1.8 });
  b += block(158, 150, 56, 46, m1) + block(226, 190, 56, 46, m2);
  b += text(310, 70, "light, frictionless", { anchor: "start", size: 12, fill: COL.soft }) + text(310, 86, "pulley", { anchor: "start", size: 12, fill: COL.soft });
  b += line(306, 76, 258, 78, { stroke: COL.g, w: 1 });
  return svg(W, H, b);
}
export function drum({ mText, rText, W = 460, H = 280 }) {
  const cx = 170, cy = 92, r = 48;
  let b = ceiling(80, 260, 20) + line(cx, 20, cx, cy - r, { stroke: COL.g, w: 1 });
  b += circle(cx, cy, r, { fill: "#F3F0E6", w: 2 }) + dot(cx, cy, 4) + line(cx - r, cy, cx, cy, { w: 1.4 }) + text(cx - r - 8, cy + 4, rText, { anchor: "end", size: 12 });
  b += line(cx + r, cy, cx + r, 195, { w: 2 }) + block(cx + r - 36, 195, 72, 52, mText);
  b += text(cx + r + 16, 134, "fixed horizontal axle", { anchor: "start", size: 12, fill: COL.soft }) + line(cx + r + 12, 128, cx + 6, cy + 4, { stroke: COL.g, w: 1 });
  return svg(W, H, b);
}
export function hangSign({ label, deg, W = 480, H = 240 }) {
  const y0 = 42, run = 210, drop = run * Math.tan(rad(deg));
  let b = wallV(30, y0 - 22, y0 + 50, 1) + wallV(450, y0 - 22, y0 + 50, -1);
  b += line(30, y0, 240, y0 + drop, { w: 2 }) + line(450, y0, 240, y0 + drop, { w: 2 });
  b += block(196, y0 + drop, 88, 56, label);
  [[30, 1], [450, -1]].forEach(([x, s]) => {
    b += line(x, y0, x + s * 100, y0, { stroke: COL.g, dash: "4 3", w: 1.2 }) + arc(x, y0, 80, s === 1 ? 0 : 180, s === 1 ? -deg : 180 + deg) + text(x + s * 100, y0 + 22, deg + "°", { size: 13 });
  });
  return svg(W, H, b);
}

// ============ elevator ============
export function elevator({ personText, aText, W = 430, H = 280 }) {
  let b = ceiling(130, 250, 20) + line(190, 20, 190, 50, { w: 2 });
  b += rect(110, 50, 160, 190, { fill: "#F7F6F1", w: 2 });
  b += circle(190, 108, 13, { fill: "#fff", w: 1.8 }) + line(190, 121, 190, 170, { w: 2 }) + line(190, 135, 168, 158, { w: 2 }) + line(190, 135, 212, 158, { w: 2 }) + line(190, 170, 176, 208, { w: 2 }) + line(190, 170, 204, 208, { w: 2 });
  b += rect(150, 210, 80, 14, { fill: "#fff", w: 1.8 }) + text(190, 237, "scale", { size: 12 }) + text(190, 85, personText, { size: 12, weight: 700 });
  b += force(345, 190, 345, 100, aText, { stroke: COL.a, lx: 345, ly: 85, size: 13 });
  b += text(345, 207, "elevator accelerates", { size: 11, fill: COL.soft });
  return svg(W, H, b);
}

// ============ projectile scenes ============
export function cliff({ hText, vText, dText = "", W = 480, H = 250, endX = 400 }) {
  const top = 56, ground = 210, cx = 120;
  let b = `<polygon points="30,${top} ${cx},${top} ${cx},${ground} 30,${ground}" fill="#EFEBDD" stroke="${COL.ink}" stroke-width="2"/>` + hatch(20, W - 20, ground);
  b += dot(cx, top, 6, COL.a) + force(cx + 8, top, cx + 70, top, vText, { stroke: COL.a, lx: cx + 46, ly: top - 8 });
  b += poly(Array.from({ length: 41 }, (_, i) => [cx + ((endX - cx) * i) / 40, top + (ground - top) * (i / 40) ** 2]), { stroke: COL.g, dash: "5 4", w: 1.8 });
  b += dim(cx - 20, top, cx - 20, ground, "", {}) + text(cx - 28, (top + ground) / 2 + 4, hText, { anchor: "end", size: 13 });
  if (dText) b += dim(cx, ground + 22, endX, ground + 22, dText, { ly: ground + 40 }) + line(cx, ground + 12, cx, ground + 28, { stroke: COL.g, w: 1 }) + line(endX, ground + 12, endX, ground + 28, { stroke: COL.g, w: 1 });
  return svg(W, H, b);
}
export function launchAngle({ vText, deg, W = 480, H = 220 }) {
  const gx = 70, gy = 170, L = 170;
  let b = hatch(20, W - 20, gy) + circle(gx, gy - 8, 8, { fill: BLK, w: 1.8 });
  b += line(gx, gy - 8, gx + 230, gy - 8, { stroke: COL.g, dash: "4 4", w: 1.2 });
  b += force(gx, gy - 8, gx + L * Math.cos(rad(deg)), gy - 8 - L * Math.sin(rad(deg)), vText, { stroke: COL.a, lx: gx + L * Math.cos(rad(deg)) + 8, ly: gy - 8 - L * Math.sin(rad(deg)) - 4, anchor: "start" });
  b += arc(gx, gy - 8, 70, 0, deg) + text(gx + 84, gy - 18, deg + "°", { size: 13 });
  b += text(W - 20, 26, "level ground", { anchor: "end", size: 12, fill: COL.soft });
  return svg(W, H, b);
}
export function displacement({ a, bText, W = 440, H = 260 }) {
  const ox = 100, oy = 220, ex = 240, ny = 60;
  let s = line(ox, oy, ex, oy, { w: 2.4, stroke: COL.a, arrow: true }) + line(ex, oy, ex, ny, { w: 2.4, stroke: COL.a, arrow: true });
  s += dot(ox, oy, 5) + text(ox, oy + 20, "start", { size: 12 }) + dot(ex, ny, 5) + text(ex + 10, ny + 4, "end", { anchor: "start", size: 12 });
  s += text((ox + ex) / 2, oy - 8, a, { size: 13 }) + text(ex + 10, (oy + ny) / 2, bText, { anchor: "start", size: 13 });
  s += line(W - 70, 70, W - 30, 70, { arrow: true, w: 1.8 }) + text(W - 24, 74, "E", { anchor: "start", weight: 700 }) + line(W - 70, 70, W - 70, 30, { arrow: true, w: 1.8 }) + text(W - 70, 22, "N", { weight: 700 });
  return svg(W, H, s);
}
export function coordLine({ items, max = 7, W = 480, H = 160 }) {
  const x0 = 40, x1 = W - 30, y = 90, X = (v) => x0 + (v / max) * (x1 - x0);
  let b = line(x0 - 10, y, x1 + 8, y, { w: 2, arrow: true });
  for (let v = 0; v <= max; v++) b += line(X(v), y - 5, X(v), y + 5) + text(X(v), y + 22, v, { size: 12 });
  b += text(x1 + 4, y - 12, "x (m)", { anchor: "end", size: 12, fill: COL.soft });
  items.forEach((it) => (b += circle(X(it.x), y - 28, 23, { fill: BLK, w: 1.8 }) + text(X(it.x), y - 24, it.label, { size: 11, weight: 700 })));
  return svg(W, H, b);
}
export function momentArm({ vText, mText, dText, W = 480, H = 240 }) {
  const ly = 60, bx = 330, px = 190, py = 190;
  let b = line(50, ly, 440, ly, { stroke: COL.g, dash: "5 4", w: 1.3 }) + text(60, ly - 10, "line of motion", { anchor: "start", size: 12, fill: COL.soft });
  b += circle(bx, ly, 14, { fill: BLK, w: 1.8 }) + (mText ? text(bx, ly + 34, mText, { size: 12, weight: 700 }) : "") + force(bx + 16, ly, bx + 76, ly, vText, { stroke: COL.a, lx: bx + 46, ly: ly - 10 });
  b += line(px, ly, px, py, { stroke: COL.soft, w: 1.4, dash: "4 3" }) + poly([[px, ly + 14], [px + 14, ly + 14], [px + 14, ly]], { w: 1.2, stroke: COL.soft });
  b += dot(px, py, 5) + text(px + 12, py + 6, "P", { anchor: "start", weight: 800, size: 15 }) + text(px + 10, (ly + py) / 2 + 4, dText, { anchor: "start", size: 13 });
  return svg(W, H, b);
}
export function dropCompare({ mode = "ramp", hText = "same height", W = 480, H = 260 }) {
  const ground = 215, top = 55;
  let b = hatch(20, W - 20, ground) + line(60, top, 440, top, { stroke: COL.g, dash: "4 4", w: 1.2 });
  if (mode === "ramp") {
    b += circle(120, top + 0, 0.01) + block(95, top - 30, 50, 30, "1") + line(120, top + 6, 120, top + 54, { stroke: COL.a, w: 2.2, arrow: true }) + text(120, ground + 32, "Block 1: free fall", { size: 12 });
    b += poly([[250, top + 30], [440, ground], [250, ground]], { close: true, fill: "#F3F0E6", w: 2 });
    b += `<g transform="translate(250 ${top + 30}) rotate(${(Math.atan2(ground - top - 30, 190) * 180) / Math.PI})"><rect x="0" y="-30" width="48" height="30" fill="${BLK}" stroke="${COL.ink}" stroke-width="1.8"/></g>`;
    b += text(278, top + 40, "2", { weight: 700 }) + text(345, ground + 32, "Block 2: frictionless ramp", { size: 12 });
    b += dim(60, top, 60, ground, "", {}) + text(54, (top + ground) / 2 + 4, hText, { anchor: "end", size: 12 });
  } else {
    b += circle(120, top + 12, 12, { fill: BLK, w: 1.8 }) + text(120, top + 16, "1", { size: 11, weight: 700 }) + line(120, top + 28, 120, top + 76, { stroke: COL.a, w: 2.2, arrow: true });
    b += circle(300, top + 12, 12, { fill: BLK, w: 1.8 }) + text(300, top + 16, "2", { size: 11, weight: 700 }) + force(314, top + 12, 400, top + 12, "large horizontal speed", { stroke: COL.a, lx: 357, ly: top + 34, size: 12 });
    b += text(120, ground + 32, "Ball 1: dropped from rest", { size: 12 }) + text(330, ground + 32, "Ball 2: thrown horizontally", { size: 12 });
    b += dim(60, top + 12, 60, ground, "", {}) + text(54, (top + ground) / 2 + 4, hText, { anchor: "end", size: 12 });
  }
  return svg(W, H, b);
}
export function hill({ hText, carLabel = "car", W = 480, H = 230 }) {
  const top = 50, ground = 190;
  let b = hatch(20, W - 20, ground + 6);
  const pts = [];
  for (let i = 0; i <= 40; i++) { const x = 70 + i * 9; const y = i < 16 ? top + 8 + (ground - top - 8) * (0.5 - 0.5 * Math.cos((Math.PI * i) / 16)) : ground; pts.push([x, y]); }
  b += poly(pts, { w: 2.4 }) + `<rect x="${70 - 22}" y="${top - 18}" width="44" height="20" rx="5" fill="${BLK}" stroke="${COL.ink}" stroke-width="1.8"/>` + text(70, top - 4, carLabel, { size: 11, weight: 700 });
  b += line(40, top + 8, 120, top + 8, { stroke: COL.g, dash: "4 3", w: 1.2 }) + line(40, ground, 440, ground, { stroke: COL.g, dash: "4 3", w: 1.2 }) + dim(46, top + 8, 46, ground, "", {}) + text(52, (top + ground) / 2 + 8, hText, { anchor: "start", size: 13 });
  b += text(W - 40, ground - 10, "bottom", { anchor: "end", size: 12, fill: COL.soft });
  return svg(W, H, b);
}
export function stackBlocks({ top, bottom, aText, W = 480, H = 220 }) {
  const base = 150;
  let b = hatch(18, W - 18, base) + block(170, base - 52, 170, 52, bottom) + block(212, base - 52 - 42, 86, 42, top);
  b += force(60, base - 26, 168, base - 26, "F", { lx: 114, ly: base - 36, size: 15 }) + force(306, 44, 386, 44, aText, { stroke: COL.a, lx: 346, ly: 34 });
  b += text(W / 2, base + 30, "frictionless table", { size: 13, fill: COL.soft });
  return svg(W, H, b);
}
export function skateWall({ W = 480, H = 220 }) {
  const base = 160;
  let b = wallV(60, 40, base, -1) + hatch(60, W - 18, base);
  b += `<rect x="130" y="${base - 12}" width="120" height="8" rx="4" fill="${WOOD}" stroke="${COL.ink}" stroke-width="1.6"/>` + circle(152, base - 2, 6, { fill: "#fff", w: 1.6 }) + circle(228, base - 2, 6, { fill: "#fff", w: 1.6 });
  b += circle(188, 70, 14, { fill: "#fff", w: 1.8 }) + line(188, 84, 188, 128, { w: 2.4 }) + line(188, 98, 66, 92, { w: 2.4 }) + line(188, 128, 170, base - 12, { w: 2.4 }) + line(188, 128, 210, base - 12, { w: 2.4 });
  b += text(110, 120, "wall", { size: 12, fill: COL.soft }).replace(/>wall</, ">wall<") + text(190, base + 28, "student on skateboard", { size: 12 });
  b += force(300, 100, 390, 100, "student rolls backward", { stroke: COL.a, lx: 345, ly: 90, size: 12 });
  return svg(W, H, b);
}
export function diskChild({ wText, rText, childText, W = 480, H = 270 }) {
  const cx = 170, cy = 140, R0 = 100;
  let b = circle(cx, cy, R0, { fill: "#F3F0E6", w: 2 }) + dot(cx, cy, 4) + text(cx - 6, cy + 20, "axis", { size: 11, fill: COL.soft });
  b += arc(cx, cy, 40, 20, 160, { stroke: COL.a, w: 2.2 }) + text(cx, cy - 56, wText, { size: 13, weight: 700 });
  b += line(cx, cy, cx + 74, cy, { w: 1.4, dash: "4 3" }) + circle(cx + 74, cy, 9, { fill: "none", w: 1.6, dash: "3 3" }) + text(cx + 40, cy + 18, rText, { size: 12 });
  b += text(cx + 20, cy + 62, "child's final position", { size: 11, fill: COL.soft }) + line(cx + 66, cy + 52, cx + 72, cy + 14, { stroke: COL.g, w: 1 });
  b += circle(cx + R0 + 70, cy - 60, 13, { fill: BLK, w: 1.8 }) + text(cx + R0 + 70, cy - 32, childText, { size: 12 }) + text(cx + R0 + 70, cy - 16, "(at rest, beside", { size: 11, fill: COL.soft }) + text(cx + R0 + 70, cy - 2, "the disk)", { size: 11, fill: COL.soft });
  b += text(W - 20, 22, "top view", { anchor: "end", size: 12, fill: COL.soft });
  return svg(W, H, b);
}

// ============ graphs ============
export const graph = (o) => chart({ w: 520, h: 330, ...o });

export const curveXT = () => curve((t) => 1 + t + 0.5 * t * t, 0, 4, 40);

/** Block on a frictionless table connected over a pulley at the table edge to a hanging block. */
export function tablePulley({ m1, m2, W = 420, H = 270 }) {
  let b = rect(40, 110, 232, 14, { fill: WOOD, w: 1.8 }) + line(60, 124, 60, 236, { w: 2 }) + line(254, 124, 254, 236, { w: 2 }) + hatch(36, 280, 236);
  b += block(110, 64, 76, 46, m1) + line(186, 87, 284, 87, { w: 1.8 });
  b += circle(284, 101, 14, { fill: "#fff", w: 2 }) + dot(284, 101, 2.4) + line(272, 114, 284, 101, { stroke: COL.g, w: 1.2 });
  b += line(298, 101, 298, 168, { w: 1.8 }) + block(270, 168, 56, 46, m2);
  b += text(150, 146, "frictionless table", { size: 12, fill: COL.soft });
  return svg(W, H, b);
}
