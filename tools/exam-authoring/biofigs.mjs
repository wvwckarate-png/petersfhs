import { COL, svg, line, rect, circle, text, path, poly, dot, vec, chart, barChart, curve, fig, table } from "./figlib.mjs";
export { fig, table, chart, barChart, curve, COL, svg, line, rect, circle, text, path, poly, dot };

/** Pedigree. people: [{id, x, y, sex:'M'|'F', aff: true|false|'carrier'}], couples: [[a,b]], kids: [{parents:[a,b], kids:[id,...]}] */
export function pedigree({ people, couples = [], kids = [], W = 480, H = 260, label = true }) {
  const P = Object.fromEntries(people.map((p) => [p.id, p])); const s = 17; let b = "";
  couples.forEach(([a, c]) => (b += line(P[a].x + s, P[a].y, P[c].x - s, P[c].y, { w: 1.8 })));
  kids.forEach((k) => {
    const [a, c] = k.parents, mx = (P[a].x + P[c].x) / 2, my = P[a].y;
    const ky = P[k.kids[0]].y, bar = my + (ky - my) / 2;
    b += line(mx, my, mx, bar, { w: 1.8 });
    const xs = k.kids.map((id) => P[id].x);
    b += line(Math.min(...xs, mx), bar, Math.max(...xs, mx), bar, { w: 1.8 });
    k.kids.forEach((id) => (b += line(P[id].x, bar, P[id].x, P[id].y - s, { w: 1.8 })));
  });
  people.forEach((p) => {
    const fill = p.aff === true ? COL.ink : "#fff";
    b += p.sex === "M" ? rect(p.x - s, p.y - s, 2 * s, 2 * s, { fill, w: 2 }) : circle(p.x, p.y, s, { fill, w: 2 });
    if (p.aff === "carrier") b += dot(p.x, p.y, 4.5, COL.ink);
    if (label && p.label) b += text(p.x, p.y + s + 15, p.label, { size: 12 });
  });
  return svg(W, H, b);
}

/** Cladogram. tree: nested arrays, e.g. [["A","B"],["C",["D","E"]]]; marks: {nodePath: label} not supported — use `traits` on leaves via leaf objects {n, mark}. */
export function cladogram({ tree, W = 480, H = 280, traits = [] }) {
  let leaf = 0; const leaves = [];
  const layout = (node, depth) => {
    if (!Array.isArray(node)) { const y = leaf++; leaves.push(node); return { y, depth, leaf: node }; }
    const kids = node.map((n) => layout(n, depth + 1));
    return { y: (kids[0].y + kids[kids.length - 1].y) / 2, depth, kids };
  };
  const root = layout(tree, 0);
  const maxD = (n) => (n.kids ? Math.max(...n.kids.map(maxD)) : n.depth);
  const D = maxD(root), mL = 24, mR = 150, mT = 22, rowH = (H - mT - 24) / Math.max(1, leaf - 1 || 1), colW = (W - mL - mR) / (D + 1);
  const X = (d) => mL + d * colW, Y = (r) => mT + r * rowH;
  let b = "";
  const draw = (n, parentX) => {
    const x = n.leaf ? X(D + 1) - 6 : X(n.depth + 1) - colW / 2 + 0;
    const xn = n.leaf ? W - mR : X(n.depth) + colW * 0.5 + (n.depth === 0 ? -colW * 0.5 : 0);
    return xn;
  };
  const rec = (n) => {
    if (n.leaf) { b += text(W - mR + 8, Y(n.y) + 4, n.leaf.n || n.leaf, { anchor: "start", size: 13, italic: true }); return { x: W - mR, y: Y(n.y) }; }
    const nx = X(n.depth) + colW * 0.5, kidPts = n.kids.map(rec);
    b += line(nx, Y(n.kids[0].y), nx, Y(n.kids[n.kids.length - 1].y), { w: 2 });
    kidPts.forEach((k) => (b += line(nx, k.y, k.x, k.y, { w: 2 })));
    return { x: nx, y: Y(n.y) };
  };
  const top = rec(root);
  b += line(mL, top.y, top.x, top.y, { w: 2 });
  traits.forEach((t) => { b += line(t.x, t.y - 7, t.x, t.y + 7, { w: 3 }) + text(t.x, t.y - 11, t.label, { size: 11, weight: 700 }); });
  return svg(W, H, b);
}

/** Gel electrophoresis. lanes: [{label, bands:[0..1 (0=top/wells,1=bottom)]}] */
export function gel({ lanes, W = 480, H = 280 }) {
  const mL = 30, laneW = (W - mL - 20) / lanes.length; let b = rect(mL - 6, 28, W - mL - 8, H - 50, { fill: "#EDE8DC", stroke: COL.ink, w: 1.6 });
  lanes.forEach((l, i) => {
    const x = mL + laneW * i + laneW / 2;
    b += rect(x - laneW * 0.32, 32, laneW * 0.64, 7, { fill: "#fff", stroke: COL.ink, w: 1 }) + text(x, 20, l.label, { size: 12, weight: 700 });
    (l.bands || []).forEach((p, k) => { b += rect(x - laneW * 0.3, 40 + p * (H - 100), laneW * 0.6, 7, { fill: "#2B5870", stroke: "none" }); if (l.sizes) b += text(x - laneW * 0.34, 47 + p * (H - 100), l.sizes[k], { anchor: "end", size: 11 }); });
  });
  b += text(12, H - 6, "(+)", { size: 12 }) + text(12, 36, "(−)", { size: 12 });
  return svg(W, H, b);
}

/** U-tube with a selectively permeable membrane. left/right: {label, level (0-1), dots (count)} */
export function uTube({ left, right, W = 360, H = 260 }) {
  let b = ""; const x0 = 80, xm = 180, x1 = 280, top = 40, bot = 220, wallW = 3;
  b += path(`M${x0} ${top}L${x0} ${bot - 20}Q${x0} ${bot} ${x0 + 20} ${bot}L${x1 - 20} ${bot}Q${x1} ${bot} ${x1} ${bot - 20}L${x1} ${top}`, { w: 2.4 });
  b += path(`M${xm - 20} ${top}L${xm - 20} ${bot - 30}L${xm + 20} ${bot - 30}L${xm + 20} ${top}`, { stroke: "none" });
  const fillSide = (xa, xb, lvl) => rect(xa + 1.5, top + (1 - lvl) * (bot - 20 - top), xb - xa - 3, (bot - 20 - top) * lvl, { fill: "#D8E8F2", stroke: "none" });
  b += fillSide(x0, xm - 3, left.level) + fillSide(xm + 3, x1, right.level);
  b += line(xm, top + 20, xm, bot, { dash: "5 4", w: 2.2, stroke: COL.b }) + text(xm, top + 12, "membrane", { size: 11, fill: COL.b });
  const dots = (xa, xb, lvl, n) => { let o = ""; for (let i = 0; i < n; i++) o += dot(xa + 12 + ((i * 37) % (xb - xa - 24)), top + (1 - lvl) * (bot - 20 - top) + 14 + ((i * 53) % ((bot - 20 - top) * lvl - 20 || 20)), 3.4, COL.a); return o; };
  b += dots(x0, xm - 3, left.level, left.dots) + dots(xm + 3, x1, right.level, right.dots);
  b += text((x0 + xm) / 2, bot + 24, left.label, { size: 13 }) + text((xm + x1) / 2, bot + 24, right.label, { size: 13 });
  return svg(W, H + 10, b);
}

/** Simple trophic/energy pyramid; levels listed bottom to top. Labels sit to the right of each level. */
export function energyPyramid({ levels, W = 520, H = 260 }) {
  let b = ""; const n = levels.length, h = (H - 20) / n, cx = 130, base = 210;
  levels.forEach((l, i) => {
    const wBot = base - i * (base / n), wTop = base - (i + 1) * (base / n), y = H - 10 - (i + 1) * h;
    b += poly([[cx - wBot / 2, y + h], [cx + wBot / 2, y + h], [cx + wTop / 2, y], [cx - wTop / 2, y]], { close: true, fill: ["#CFE3C8", "#DCEBC0", "#F1E7B7", "#F2D1B3"][i % 4], w: 1.6 });
    b += line(cx + wBot / 2 - 4, y + h / 2, 262, y + h / 2, { stroke: COL.g, w: 1, dash: "3 3" });
    b += text(268, y + h / 2 - 1, l.name, { size: 13, weight: 700, anchor: "start" }) + (l.value ? text(268, y + h / 2 + 16, l.value, { size: 12, anchor: "start", fill: COL.soft }) : "");
  });
  return svg(W, H, b);
}
