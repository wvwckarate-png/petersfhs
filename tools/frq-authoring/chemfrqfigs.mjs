// Extra figure generators for the Chemistry FRQ exams.
import { COL, svg, line, rect, circle, text, path, poly, dot, vec, fig, chart, table, curve } from "../exam-authoring/figlib.mjs";
export * from "../exam-authoring/chemfigs.mjs";
export { COL, svg, line, rect, circle, text, path, poly, dot, vec, fig, chart, table, curve };

/**
 * Simple Lewis diagram. atoms: [{s:"S", x, y, lp:[degrees...]}]  (lp = directions, in screen degrees, of lone pairs; 0 = right, 90 = down)
 * bonds: [[i, j, order]]. Used for model responses.
 */
export function lewis({ atoms, bonds, W = 360, H = 240, charge = null }) {
  let b = "";
  const sh = (a, c, r = 15) => { const dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy); return [a.x + (dx / d) * r, a.y + (dy / d) * r, c.x - (dx / d) * r, c.y - (dy / d) * r, -dy / d, dx / d]; };
  bonds.forEach(([i, j, o = 1]) => {
    const [x1, y1, x2, y2, nx, ny] = sh(atoms[i], atoms[j]);
    const off = o === 1 ? [0] : o === 2 ? [-3, 3] : [-5, 0, 5];
    off.forEach((k) => { b += line(x1 + nx * k, y1 + ny * k, x2 + nx * k, y2 + ny * k, { w: 1.8 }); });
  });
  atoms.forEach((a) => {
    b += text(a.x, a.y + 6, a.s, { weight: 800, size: 19 });
    (a.lp || []).forEach((deg) => {
      const r = (deg * Math.PI) / 180, cx = a.x + Math.cos(r) * 21, cy = a.y + Math.sin(r) * 21, px = -Math.sin(r) * 4.5, py = Math.cos(r) * 4.5;
      b += dot(cx + px, cy + py, 2.2) + dot(cx - px, cy - py, 2.2);
    });
  });
  if (charge) b += text(W - 28, 28, charge, { size: 18, weight: 800 });
  return svg(W, H, b);
}
