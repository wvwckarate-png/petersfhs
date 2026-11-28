// Figures for the AP Physics 1 material added in Nov 2026, batch E (Units 7 and 8; placed inside the "New" blocks).
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, NOTE, axes, title, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = RED, w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c, w, marker: c === RED ? "ahr" : c === BLUE ? "ahb" : c === GREEN ? "ahg" : c === GOLD ? "aho" : "ah" });
// double-headed dimension arrow
const dbl = (x1, y1, x2, y2, c = C.ink, w = 1.6) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
const r1 = (n) => Math.round(n * 10) / 10;
const TAU = 2 * Math.PI;

// 1. x = A cos(2πft) vs x = A sin(2πft)
{
  let s = defs + title("Two forms of x(t): pick the one that matches where the object is at t = 0");
  const x0 = 80, W = 600, Ap = 55; // two full periods across W; T = 300 px
  const Tpx = W / 2;
  const graph = (c, f, head, sub, col) => {
    let g = text(x0, c - 98, head, { size: 13.5, weight: "bold", anchor: "start", fill: col }) + text(x0 + 200, c - 98, sub, { size: 12, anchor: "start", fill: C.muted });
    g += line(x0, c + 72, x0, c - 76, { w: 2 }) + arrow(x0, c, x0 + W + 30, c, { w: 2 }) + text(x0 - 10, c - 66, "x", { size: 13, weight: "bold", anchor: "end", italic: true }) + text(x0 + W + 34, c + 5, "t", { size: 13, weight: "bold", anchor: "start", italic: true });
    g += text(x0 - 8, c + 5, "0", { size: 12, anchor: "end", fill: C.muted });
    g += line(x0, c - Ap, x0 + W, c - Ap, { stroke: "#ccc", w: 1, dash: "3 4" }) + line(x0, c + Ap, x0 + W, c + Ap, { stroke: "#ccc", w: 1, dash: "3 4" });
    g += text(x0 - 8, c - Ap + 4, "+A", { size: 12, anchor: "end", fill: C.muted }) + text(x0 - 8, c + Ap + 4, "−A", { size: 12, anchor: "end", fill: C.muted });
    g += curve(x0, c, W, Ap, f, { stroke: col, n: 160 });
    return g;
  };
  // top: cosine
  const c1 = 150, c2 = 345;
  s += graph(c1, (t) => Math.cos(TAU * 2 * t), "x = A cos(2πft)", "released from rest at x = +A", RED);
  // T between the peaks at t = 0 and t = T; A at the t = 2T peak
  s += dbl(x0 + 2, c1 - Ap - 16, x0 + Tpx, c1 - Ap - 16) + text(x0 + Tpx / 2, c1 - Ap - 22, "T", { size: 13, weight: "bold", italic: true });
  s += line(x0 + Tpx, c1 - Ap - 22, x0 + Tpx, c1 - Ap - 4, { stroke: "#999", w: 1 });
  s += dbl(x0 + 2 * Tpx + 14, c1, x0 + 2 * Tpx + 14, c1 - Ap) + text(x0 + 2 * Tpx + 22, c1 - Ap / 2 + 5, "A", { size: 13, weight: "bold", italic: true, anchor: "start" });
  // dots: peak at t = T, downward zero crossing at t = T/4
  s += circle(x0 + Tpx, c1 - Ap, 5.5, { fill: C.ink }) + text(x0 + Tpx + 12, c1 - Ap - 6, "v = 0, |a| max", { size: 12, weight: "bold", anchor: "start" });
  s += circle(x0 + Tpx / 4, c1, 5.5, { fill: C.ink }) + text(x0 + Tpx / 4 + 10, c1 - 12, "|v| max, a = 0", { size: 12, weight: "bold", anchor: "start" });
  // bottom: sine
  s += graph(c2, (t) => Math.sin(TAU * 2 * t), "x = A sin(2πft)", "starts at equilibrium moving in +x", BLUE);
  s += dbl(x0 + Tpx / 4, c2 - Ap - 16, x0 + Tpx * 1.25, c2 - Ap - 16) + text(x0 + Tpx * 0.75, c2 - Ap - 22, "T", { size: 13, weight: "bold", italic: true });
  s += line(x0 + Tpx / 4, c2 - Ap - 22, x0 + Tpx / 4, c2 - Ap - 4, { stroke: "#999", w: 1 }) + line(x0 + Tpx * 1.25, c2 - Ap - 22, x0 + Tpx * 1.25, c2 - Ap - 4, { stroke: "#999", w: 1 });
  s += dbl(x0 + Tpx * 1.25, c2 - 2, x0 + Tpx * 1.25, c2 - Ap + 8);
  s += text(x0 + Tpx * 1.25 + 8, c2 - Ap / 2 + 5, "A", { size: 13, weight: "bold", italic: true, anchor: "start" });
  s += text(380, c2 + 92, "A is measured from the axis to a peak (not peak to peak); T is the time from one peak to the next.", { size: 12, fill: C.muted });
  fig(FIGS, "shm-cos-vs-sin", 760, 452, s, "Two x versus t graphs of simple harmonic motion: a cosine curve starting at +A and a sine curve starting at zero and rising, each with amplitude and period marked", "Both graphs show the same oscillation; only the starting point differs. The cosine form starts at a peak (released from rest at +A), the sine form starts at equilibrium moving in +x. At a peak the slope is zero, so v = 0 and |a| is greatest; where the graph crosses zero the slope is steepest, so |v| is greatest and a = 0.");
}

// 2. Pendulum restoring torque
{
  let s = defs + title("Pendulum: gravity's torque about the pivot pulls the bob back toward vertical");
  const px = 230, py = 66, L = 220, th = 25 * Math.PI / 180;
  const bx = px + L * Math.sin(th), by = py + L * Math.cos(th);
  // ceiling and pivot
  s += rect(px - 70, 44, 140, 12, { fill: "#d8d4c8", stroke: "#888", rx: 2 }) + line(px, 56, px, py, { w: 3, stroke: "#555" }) + circle(px, py, 4.5, { fill: C.ink });
  s += line(px, py, px, py + L + 50, { stroke: "#999", w: 1.5, dash: "6 5" });
  // line of action of mg (dashed vertical through the bob up to pivot level)
  s += line(bx, py, bx, by - 16, { stroke: GOLD, w: 1.5, dash: "4 4" });
  s += text(bx + 8, 160, "line of action\nof mg", { size: 11.5, anchor: "start", fill: "#8a6a00" });
  // lever arm at pivot level, with right-angle mark
  s += dbl(px + 3, py, bx - 1, py, "#8a6a00", 2) + path(`M ${r1(bx - 9)} ${py} L ${r1(bx - 9)} ${py + 9} L ${r1(bx)} ${py + 9}`, { stroke: "#8a6a00", w: 1.2 });
  s += text(bx + 10, py - 2, "lever arm = L sinθ", { size: 12.5, weight: "bold", anchor: "start", fill: "#8a6a00" });
  // string
  s += line(px, py, bx, by, { stroke: "#555", w: 2 });
  const ux = Math.sin(th), uy = Math.cos(th);
  s += text(r1(px + L * 0.5 * ux + 16 * uy), r1(py + L * 0.5 * uy - 16 * ux + 6), "L", { size: 14, weight: "bold", italic: true });
  // angle arc
  const ra = 48;
  s += path(`M ${px} ${py + ra} A ${ra} ${ra} 0 0 0 ${r1(px + ra * ux)} ${r1(py + ra * uy)}`, { stroke: C.ink, w: 1.5 }) + text(r1(px + 62 * Math.sin(th / 2)), r1(py + 62 * Math.cos(th / 2) + 5), "θ", { size: 14, weight: "bold" });
  // restoring torque curved arrow (rotates the bob back toward vertical)
  const rt = 170, a1 = 23 * Math.PI / 180, a2 = 3 * Math.PI / 180;
  s += `<path d="M ${r1(px + rt * Math.sin(a1))} ${r1(py + rt * Math.cos(a1))} A ${rt} ${rt} 0 0 1 ${r1(px + rt * Math.sin(a2))} ${r1(py + rt * Math.cos(a2))}" fill="none" stroke="${PURPLE}" stroke-width="2.5" marker-end="url(#ahp)"/>`;
  s += text(px - 10, py + rt - 6, "restoring torque", { size: 12.5, weight: "bold", anchor: "end", fill: PURPLE }) + text(px - 10, py + rt + 12, "τ = −mgL sinθ", { size: 12.5, weight: "bold", anchor: "end", fill: PURPLE });
  // bob and forces from its center
  s += circle(bx, by, 15, { fill: "#c8d8e8", stroke: "#555", w: 2 });
  s += A(bx, by, r1(bx - 78 * ux), r1(by - 78 * uy), RED, 3) + text(r1(bx - 78 * ux - 12), r1(by - 78 * uy + 4), "T", { size: 14, weight: "bold", fill: RED, anchor: "end" });
  s += A(bx, by, bx, by + 82, RED, 3) + text(bx + 10, by + 78, "mg", { size: 14, weight: "bold", fill: RED, anchor: "start" });
  s += text(bx + 22, by + 4, "m", { size: 13, weight: "bold", italic: true, anchor: "start" });
  // notes
  s += rect(470, 150, 270, 132, NOTE) + text(605, 174, "Torque about the pivot", { size: 13, weight: "bold" }) + text(605, 198, "T points through the pivot: no torque\nmg has lever arm L sinθ: τ = −mgL sinθ", { size: 12 }) + text(605, 248, "small θ: sinθ ≈ θ (radians)", { size: 12.5, weight: "bold" }) + text(605, 268, "so τ ∝ −θ, the condition for SHM", { size: 12 });
  s = s.replace("<defs>", `<defs><marker id="ahp" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${PURPLE}"/></marker>`);
  fig(FIGS, "pendulum-lever-arm", 760, 380, s, "Pendulum displaced by angle theta with tension and weight on the bob, the lever arm L sin theta of the weight, and a curved arrow showing the restoring torque", "Tension acts along the string, straight through the pivot, so it has no lever arm and no torque. Weight acts at the bob with lever arm L sinθ, giving τ = −mgL sinθ, which always turns the bob back toward vertical. For small angles sinθ ≈ θ, so the torque is proportional to −θ, the rotational version of F = −kx.");
}

// 3. Spring energy bar charts at +A, 0, A/2
{
  let s = defs + title("Energy bar charts for a block on a spring (no friction)");
  s += text(380, 44, "Same scale in every chart: 4 grid units = the total energy E", { size: 12, fill: C.muted });
  const base = 240, u = 32; // 4 units = 128 px
  const spring = (xa, xb, y) => { let d = `M ${xa} ${y} L ${xa + 8} ${y}`; const n = 7, step = (xb - xa - 16) / n; for (let i = 0; i < n; i++) d += ` L ${r1(xa + 8 + step * (i + .25))} ${y - 9} L ${r1(xa + 8 + step * (i + .75))} ${y + 9}`; d += ` L ${xb - 8} ${y} L ${xb} ${y}`; return path(d, { stroke: "#555", w: 1.8 }); };
  const panel = (c, head, K, U, xpos, state) => {
    let g = text(c, 72, head, { size: 14, weight: "bold" });
    for (let i = 1; i <= 4; i++) g += line(c - 78, base - i * u, c + 62, base - i * u, { stroke: i === 4 ? C.ink : "#ddd", w: i === 4 ? 1.5 : 1, dash: i === 4 ? "6 4" : "" });
    g += text(c + 68, base - 4 * u + 4, "E", { size: 13, weight: "bold", anchor: "start", italic: true });
    g += line(c - 78, base, c + 62, base, { w: 2 });
    const bar = (x, v, col) => v === null ? text(x + 20, base - 2 * u + 8, "?", { size: 26, weight: "bold", fill: C.muted }) : v > 0 ? rect(x, base - v * u, 40, v * u, { fill: col, stroke: "#555", rx: 2 }) : text(x + 20, base - 6, "0", { size: 12, fill: C.muted });
    g += bar(c - 62, K, RED) + bar(c + 2, U, BLUE);
    g += text(c - 42, base + 18, "K", { size: 13, weight: "bold", italic: true }) + text(c + 22, base + 18, "Uₛ", { size: 13, weight: "bold", italic: true });
    // sketch: wall, spring, block; equilibrium at c - 10, A = 50 px
    const fy = 340, eq = c - 10, bxc = eq + xpos * 50;
    g += rect(c - 112, 290, 8, 52, { fill: "#999", stroke: "none", rx: 0 }) + line(c - 112, fy, c + 100, fy, { stroke: "#777", w: 2.5 });
    g += spring(c - 104, bxc - 17, fy - 17) + rect(bxc - 17, fy - 34, 34, 34, { fill: "#c8d8e8", stroke: "#555", rx: 3 });
    g += line(eq, 296, eq, fy + 6, { stroke: "#999", w: 1, dash: "3 3" }) + line(eq + 50, fy, eq + 50, fy + 6, { stroke: C.ink, w: 1.5 });
    g += text(eq, fy + 20, "0", { size: 12, fill: C.muted }) + text(eq + 50, fy + 20, "+A", { size: 12, fill: C.muted });
    g += text(c, fy + 42, state, { size: 12, fill: C.muted });
    return g;
  };
  s += panel(130, "x = +A", 0, 4, 1, "at rest: v = 0");
  s += line(255, 60, 255, 392, { stroke: C.line, w: 1.5 });
  s += panel(380, "x = 0", 4, 0, 0, "moving fastest");
  s += line(505, 60, 505, 392, { stroke: C.line, w: 1.5 });
  s += panel(630, "x = A/2", null, null, 0.5, "halfway out: you fill in the bars");
  fig(FIGS, "spring-energy-bars-a", 760, 400, s, "Three energy bar charts for a block on a spring at x = +A, x = 0, and x = A/2, with the last chart left blank to fill in", "At the turning point x = +A all of the energy is stored in the spring; at equilibrium all of it is kinetic. The total bar height E never changes. Use Uₛ = ½kx² to decide how the four units split at x = A/2.");
}

// 4. Solid, liquid, gas particle models
{
  let s = defs + title("Particle models: why liquids and gases are both fluids");
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const top = 50, H = 170, bw = 200, R = 8.5;
  const P = (x, y, col) => circle(x, y, R, { fill: col, stroke: "#555", w: 1.2 });
  const box = (x) => rect(x, top, bw, H, { fill: "#fafafa", stroke: "#666", w: 2, rx: 4 });
  // solid: regular lattice with bonds, keeps its own shape
  {
    const x = 40; s += box(x);
    const nx = 6, ny = 4, sp = 23, ox = x + bw / 2 - (nx - 1) * sp / 2, oy = top + H - 14 - (ny - 1) * sp;
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const cx = ox + i * sp, cy = oy + j * sp; if (i < nx - 1) s += line(cx, cy, cx + sp, cy, { stroke: "#999", w: 1.5 }); if (j < ny - 1) s += line(cx, cy, cx, cy + sp, { stroke: "#999", w: 1.5 }); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) s += P(ox + i * sp, oy + j * sp, "#9fb8d8");
  }
  // liquid: close, disordered, fills the bottom; gaps where the sliding arrows go
  {
    const x = 280; s += box(x);
    const level = top + H - 80;
    s += line(x + 2, level - 2, x + bw - 2, level - 2, { stroke: BLUE, w: 1.2, dash: "4 3" });
    const gaps = [[x + 62, level + 34], [x + 140, level + 50]];
    const pts = [];
    for (let j = 0; j < 4; j++) for (let i = 0; i < 9; i++) {
      const cx = x + 14 + i * 21.5 + (j % 2 ? 10 : 0) + (rnd() - .5) * 5, cy = level + 10 + j * 19 + (rnd() - .5) * 4;
      if (cx > x + bw - 11 || cy > top + H - 10) continue;
      if (gaps.some(([gx, gy]) => Math.hypot(cx - gx, cy - gy) < 21)) continue;
      if (rnd() < 0.1) continue;
      pts.push([cx, cy]);
    }
    pts.forEach(([cx, cy]) => s += P(cx, cy, "#8fc4e8"));
    gaps.forEach(([gx, gy], k) => s += `<path d="M ${gx - 9} ${gy + 4} Q ${gx} ${gy - 12} ${gx + 9} ${gy + 4}" fill="none" stroke="${RED}" stroke-width="2" marker-end="url(#ahr)"/>`);
  }
  // gas: few particles far apart, random motion arrows, whole box
  {
    const x = 520; s += box(x);
    const pts = [[x + 36, top + 34, 200], [x + 120, top + 28, 30], [x + 170, top + 80, 300], [x + 70, top + 92, 140], [x + 130, top + 132, 0], [x + 34, top + 148, 250], [x + 180, top + 146, 300], [x + 96, top + 60, 75]];
    pts.forEach(([cx, cy, ang]) => { const a = ang * Math.PI / 180; s += A(cx, cy, r1(cx + 26 * Math.cos(a)), r1(cy + 26 * Math.sin(a)), RED, 1.8) + P(cx, cy, "#cfe3f2"); });
  }
  const lab = (x, head, sub) => text(x + bw / 2, top + H + 22, head, { size: 14, weight: "bold" }) + text(x + bw / 2, top + H + 40, sub, { size: 12, fill: C.muted });
  s += lab(40, "Solid", "fixed shape and fixed volume") + lab(280, "Liquid", "fixed volume, takes the container's shape") + lab(520, "Gas", "fills the whole container");
  s += text(140, top + H + 58, "strong interactions hold positions", { size: 11.5, fill: C.muted }) + text(380, top + H + 58, "close together, slide past each other", { size: 11.5, fill: C.muted }) + text(620, top + H + 58, "far apart, interact in brief collisions", { size: 11.5, fill: C.muted });
  const by = top + H + 74;
  s += path(`M 284 ${by} L 284 ${by + 10} L 716 ${by + 10} L 716 ${by}`, { stroke: BLUE, w: 2 }) + line(500, by + 10, 500, by + 18, { stroke: BLUE, w: 2 }) + text(500, by + 36, "fluids: no fixed shape", { size: 13.5, weight: "bold", fill: BLUE });
  fig(FIGS, "solid-liquid-gas-particles", 760, 342, s, "Particle models of a solid lattice, a liquid filling the bottom of a container, and a gas filling a whole container, with liquids and gases bracketed as fluids", "The same kind of particle behaves differently depending on how strongly the particles interact. A solid's particles are locked in place; a liquid's stay in contact but slide past one another; a gas's are far apart and fly freely. Liquids and gases both flow, so both are fluids.");
}

// 5. Pressure uses the perpendicular component; collisions push perpendicular to the wall
{
  let s = defs + title("Pressure: only the push perpendicular to a surface counts");
  // left panel: force at angle θ to a pad
  const Px = 230, Py = 210, F = 160, th = 40 * Math.PI / 180;
  const tx = Px - F * Math.cos(th), ty = Py - F * Math.sin(th);
  s += line(40, Py + 16, 380, Py + 16, { stroke: "#777", w: 3 }) + rect(165, Py, 130, 16, { fill: "#e6d3a3", stroke: "#8a6a00", rx: 2 }) + text(230, Py + 36, "pad, area A", { size: 12, weight: "bold", fill: "#8a6a00" });
  s += A(r1(tx), r1(ty), Px, Py - 2, RED, 3.5) + text(r1(Px - F * Math.cos(th) / 2 - 12), r1(Py - F * Math.sin(th) / 2 + 18), "F", { size: 15, weight: "bold", fill: RED });
  s += A(r1(tx), r1(ty), Px - 2, r1(ty), GREEN, 2.5) + text(r1((tx + Px) / 2), r1(ty - 10), "parallel part of F (along surface): no pressure", { size: 12, weight: "bold", fill: GREEN });
  s += A(Px, r1(ty), Px, Py - 4, BLUE, 2.5) + text(Px + 10, r1((ty + Py) / 2 - 4), "F⊥", { size: 13, weight: "bold", fill: BLUE, anchor: "start" }) + text(Px + 10, r1((ty + Py) / 2 + 13), "creates pressure", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  const ra = 40;
  s += path(`M ${Px - ra} ${Py} A ${ra} ${ra} 0 0 1 ${r1(Px - ra * Math.cos(th))} ${r1(Py - ra * Math.sin(th))}`, { stroke: C.ink, w: 1.5 }) + text(r1(Px - 54 * Math.cos(th / 2)), r1(Py - 54 * Math.sin(th / 2) + 5), "θ", { size: 14, weight: "bold" });
  s += rect(70, 270, 320, 50, NOTE) + text(230, 291, "P = F⊥ / A,   F⊥ = F sinθ", { size: 13.5, weight: "bold" }) + text(230, 310, "θ = angle between F and the surface", { size: 11.5, fill: C.muted });
  s += line(420, 44, 420, 330, { stroke: C.line, w: 1.5 });
  // right panel: gas particles hitting a wall
  const wx = 690;
  s += rect(wx, 52, 26, 206, { fill: "#cfcfcf", stroke: "#777", rx: 2 }) + text(wx + 13, 46, "wall", { size: 12, weight: "bold" });
  const hits = [[86, -1], [150, -1], [216, 1]];
  hits.forEach(([hy, sgn]) => {
    const dx = 62, dy = 34 * sgn, R = 8;
    const inX = wx - dx - R, inY = hy - dy, outX = wx - dx - R, outY = hy + dy;
    s += path(`M ${inX} ${inY} L ${wx - R} ${hy} L ${outX} ${outY}`, { stroke: "#999", w: 1.3, dash: "4 3" });
    s += A(outX, outY, r1(outX - 22), r1(outY + 22 * sgn * 34 / 62), BLUE, 1.8) + circle(outX, outY, R, { fill: "#cfe3f2", stroke: "#555", w: 1.2 });
    s += A(wx + 2, hy, wx + 22, hy, RED, 2.8);
  });
  const free = [[470, 70, 20], [520, 130, 200], [470, 196, 300], [560, 238, 160], [540, 60, 120], [545, 190, 330]];
  free.forEach(([cx, cy, ang]) => { const a = ang * Math.PI / 180; s += A(cx, cy, r1(cx + 22 * Math.cos(a)), r1(cy + 22 * Math.sin(a)), BLUE, 1.8) + circle(cx, cy, 8, { fill: "#cfe3f2", stroke: "#555", w: 1.2 }); });
  s += text(580, 284, "each collision pushes perpendicular to the wall (red);", { size: 12, weight: "bold" }) + text(580, 302, "average force per area = pressure", { size: 12, weight: "bold" }) + text(580, 320, "particles move every way, so every wall gets pushed", { size: 11.5, fill: C.muted });
  fig(FIGS, "pressure-perp-component", 760, 336, s, "Left: a force at angle theta to a pad split into perpendicular and parallel components. Right: gas particles bouncing off a wall, each pushing perpendicular to it", "Pressure is the perpendicular part of the force divided by the area. A push along a surface drags it but adds no pressure. In a fluid, every particle that bounces off a wall gives it a tiny push straight into the wall; the average of all those pushes per unit area is the pressure.");
}

// 6. Pressure vs depth: gauge and absolute
{
  let s = defs + title("Pressure vs depth: two parallel straight lines");
  const x0 = 90, y0 = 300, k = 0.325, pa = 80, Wd = 400;
  const yg = (d) => y0 - k * d, ya = (d) => y0 - pa - k * d;
  s += line(x0, y0, x0, 60, { w: 2, marker: "ah" }) + line(x0, y0, x0 + Wd + 30, y0, { w: 2, marker: "ah" });
  s += text(x0, 50, "pressure P", { size: 12.5, weight: "bold" }) + text(x0 + Wd + 30, y0 + 24, "depth h", { size: 12.5, weight: "bold", anchor: "end" }) + text(x0 - 8, y0 + 5, "0", { size: 12, anchor: "end", fill: C.muted });
  s += line(x0 - 5, y0 - pa, x0, y0 - pa, { w: 2 }) + text(x0 - 9, y0 - pa + 5, "P_atm", { size: 12, weight: "bold", anchor: "end" });
  s += line(x0, yg(0), x0 + Wd, yg(Wd), { stroke: BLUE, w: 3.5 }) + line(x0, ya(0), x0 + Wd, ya(Wd), { stroke: RED, w: 3.5 });
  s += text(x0 + Wd + 10, ya(Wd) + 5, "P_abs = P_atm + ρgh", { size: 13, weight: "bold", fill: RED, anchor: "start" });
  s += text(x0 + Wd + 10, yg(Wd) + 5, "P_gauge = ρgh", { size: 13, weight: "bold", fill: BLUE, anchor: "start" });
  // slope triangle on the gauge line
  const d1 = 180, d2 = 300;
  s += path(`M ${x0 + d1} ${r1(yg(d1))} L ${x0 + d2} ${r1(yg(d1))} L ${x0 + d2} ${r1(yg(d2))}`, { stroke: C.ink, w: 1.5, dash: "5 3" });
  s += text(x0 + (d1 + d2) / 2, r1(yg(d1) + 18), "Δh", { size: 12.5, weight: "bold" }) + text(x0 + d2 + 7, r1((yg(d1) + yg(d2)) / 2 + 5), "ΔP", { size: 12.5, weight: "bold", anchor: "start" });
  s += text(x0 + d2 + 7, r1((yg(d1) + yg(d2)) / 2 + 23), "slope = ρg", { size: 12.5, weight: "bold", anchor: "start", fill: BLUE });
  // equal vertical gaps
  [60, 370].forEach((d, i) => { s += dbl(x0 + d, r1(yg(d) - 3), x0 + d, r1(ya(d) + 3), PURPLE, 1.8).replace(/url\(#ah\)/g, "url(#ahp)"); s += text(x0 + d + (i ? -7 : 7), r1((yg(d) + ya(d)) / 2 + 5), "P_atm", { size: 12, weight: "bold", fill: PURPLE, anchor: i ? "end" : "start" }); });
  s += rect(535, 205, 205, 100, NOTE) + text(637, 227, "Reading the graph", { size: 13, weight: "bold" }) + text(637, 249, "gap between lines = P_atm,\nthe same at every depth\nslope ρg → ρ = slope / g\ndenser liquid → steeper lines", { size: 12 });
  s = s.replace("<defs>", `<defs><marker id="ahp" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${PURPLE}"/></marker>`);
  fig(FIGS, "pressure-vs-depth-gauge", 760, 330, s, "Graph of pressure versus depth with a gauge pressure line through the origin and a parallel absolute pressure line starting at atmospheric pressure", "Gauge pressure ρgh starts at zero at the surface; absolute pressure is the same line shifted up by P_atm. Both lines have slope ρg, so the slope of a pressure vs depth graph gives the fluid's density.");
}

// 7. Buoyant force from the pressure difference; tethered-ball FBD
{
  let s = defs + title("Buoyant force = the fluid's net push, from pressure growing with depth");
  const tx0 = 40, tx1 = 400, surf = 70, floor = 330;
  s += rect(tx0, surf, tx1 - tx0, floor - surf, { fill: "#e3f0fa", stroke: "none", rx: 0 }) + path(`M ${tx0} 50 L ${tx0} ${floor} L ${tx1} ${floor} L ${tx1} 50`, { stroke: "#666", w: 2.5 }) + line(tx0, surf, tx1, surf, { stroke: BLUE, w: 2 }) + text(tx1 - 6, surf - 6, "water surface", { size: 11.5, fill: BLUE, anchor: "end" });
  const bx0 = 165, bx1 = 275, bt = 160, bb = 240, kk = 0.36;
  s += rect(bx0, bt, bx1 - bx0, bb - bt, { fill: "#d9c7a8", stroke: "#6b5a3a", rx: 2 });
  const len = (y) => kk * (y - surf);
  [190, 220, 250].forEach((x) => { s += A(x, r1(bt - 3 - len(bt)), x, bt - 3, RED, 2.5); s += A(x, r1(bb + 3 + len(bb)), x, bb + 3, RED, 2.5); });
  s += text(220, r1(bt - len(bt) - 10), "P_top (pushes down)", { size: 12, weight: "bold", fill: RED });
  s += text(220, r1(bb + len(bb) + 20), "P_bottom (pushes up, larger)", { size: 12, weight: "bold", fill: RED });
  [175, 200, 225].forEach((y) => { const l = len(y); s += A(r1(bx0 - 3 - l), y, bx0 - 3, y, GOLD, 2) + A(r1(bx1 + 3 + l), y, bx1 + 3, y, GOLD, 2); });
  s += text(98, 160, "cancel", { size: 12, weight: "bold", fill: "#8a6a00" }) + text(342, 160, "cancel", { size: 12, weight: "bold", fill: "#8a6a00" });
  s += dbl(bx1 - 16, bt + 4, bx1 - 16, bb - 4);
  // depth marker
  s += arrow(60, surf + 8, 60, floor - 10, { w: 1.6, stroke: "#555" }) + text(66, floor - 18, "deeper:\nlarger P", { size: 11.5, anchor: "start", fill: "#555" });
  s += rect(60, 344, 330, 44, NOTE) + text(225, 371, "net upward push = (P_bottom − P_top)A = F_b", { size: 13, weight: "bold" });
  s += text(bx1 - 24, (bt + bb) / 2 + 5, "h", { size: 14, weight: "bold", italic: true, anchor: "end" });
  s += line(430, 44, 430, 390, { stroke: C.line, w: 1.5 });
  // right: tethered ball sketch + FBD
  const kx0 = 640, kx1 = 735, ksurf = 92, kfl = 250;
  s += text(590, 56, "Ball held under water by a string", { size: 12.5, weight: "bold" });
  s += rect(kx0, ksurf, kx1 - kx0, kfl - ksurf, { fill: "#e3f0fa", stroke: "none", rx: 0 }) + path(`M ${kx0} 76 L ${kx0} ${kfl} L ${kx1} ${kfl} L ${kx1} 76`, { stroke: "#666", w: 2 }) + line(kx0, ksurf, kx1, ksurf, { stroke: BLUE, w: 1.5 });
  s += line((kx0 + kx1) / 2, 160, (kx0 + kx1) / 2, kfl, { stroke: "#555", w: 1.5 }) + circle((kx0 + kx1) / 2, 145, 16, { fill: "#f2c94c", stroke: "#8a6a00", w: 1.5 });
  s += text((kx0 + kx1) / 2, kfl + 18, "sketch", { size: 11.5, fill: C.muted });
  const cx = 530, cy = 210; // F_b = mg + T: 102 = 30 + 72 px
  s += A(cx, cy, cx, cy - 102 - 0, RED, 3) + text(cx + 10, cy - 92, "F_b", { size: 14, weight: "bold", fill: RED, anchor: "start" });
  s += A(cx - 9, cy, cx - 9, cy + 30, RED, 3) + text(cx - 18, cy + 30, "mg", { size: 14, weight: "bold", fill: RED, anchor: "end" });
  s += A(cx + 9, cy, cx + 9, cy + 72, RED, 3) + text(cx + 18, cy + 72, "T", { size: 14, weight: "bold", fill: RED, anchor: "start" });
  s += circle(cx, cy, 6.5, { fill: C.ink });
  s += text(cx + 40, 330, "at rest: F_b = mg + T", { size: 12.5, weight: "bold" }) + text(cx + 40, 348, "the up arrow is as long as\nthe two down arrows combined", { size: 11.5, fill: C.muted });
  fig(FIGS, "buoyancy-from-pressure", 760, 400, s, "Left: a submerged block with short downward pressure arrows on top, longer upward arrows on the bottom, and canceling side arrows. Right: free-body diagram of a ball tied under water with buoyant force up and weight and tension down", "Pressure grows with depth, so the water pushes up on the bottom face harder than it pushes down on the top; the side pushes come in equal pairs and cancel. That net upward push is the buoyant force. On a free-body diagram it is a single arrow, F_b, drawn with the other forces.");
}

// 8. Pressure difference drives flow; straw
{
  let s = defs + title("Fluids flow from higher pressure toward lower pressure");
  const cyP = 150;
  // pipe outline: wide (y 85-215) x 40-190, taper 190-260, narrow (y 120-180) x 260-390
  const wt = 85, wb = 215, nt = 118, nb = 182;
  s += `<path d="M 40 ${wt} L 190 ${wt} L 260 ${nt} L 390 ${nt} L 390 ${nb} L 260 ${nb} L 190 ${wb} L 40 ${wb} Z" fill="#e3f0fa" stroke="none"/>`;
  s += path(`M 40 ${wt} L 190 ${wt} L 260 ${nt} L 390 ${nt}`, { stroke: "#555", w: 2.5 }) + path(`M 40 ${wb} L 190 ${wb} L 260 ${nb} L 390 ${nb}`, { stroke: "#555", w: 2.5 });
  s += text(110, wt - 12, "P₁ (higher pressure)", { size: 12.5, weight: "bold" }) + text(325, nt - 12, "P₂ (lower)", { size: 12.5, weight: "bold" });
  // parcel in the taper
  const p0 = 212, p1 = 238;
  s += rect(p0, cyP - 14, p1 - p0, 28, { fill: "#7fb0dc", stroke: "#2E6BC6", rx: 2 });
  s += A(150, cyP, p0 - 2, cyP, RED, 3) + text(176, cyP - 10, "P₁A", { size: 13, weight: "bold", fill: RED });
  s += A(p1 + 34, cyP, p1 + 2, cyP, RED, 3) + text(p1 + 20, cyP - 10, "P₂A", { size: 13, weight: "bold", fill: RED });
  // velocity arrows (green): short in wide part, long in narrow part
  [[60, 108], [60, 192]].forEach(([x, y]) => s += A(x, y, x + 30, y, GREEN, 2.2));
  [[300, 132], [300, 168]].forEach(([x, y]) => s += A(x, y, x + 62, y, GREEN, 2.2));
  s += text(75, 132, "v₁", { size: 12, weight: "bold", fill: GREEN }) + text(374, 155, "v₂", { size: 12, weight: "bold", fill: GREEN, anchor: "start" });
  s += A(185, 250, 265, 250, C.ink, 3) + text(225, 272, "F_net = (P₁ − P₂)A, forward", { size: 12.5, weight: "bold" }) + text(225, 290, "the parcel speeds up into the narrow part", { size: 11.5, fill: C.muted });
  s += line(430, 44, 430, 300, { stroke: C.line, w: 1.5 });
  // straw in a cup
  const ct = 120, cbt = 280, lvl = 170, sx0 = 600, sx1 = 618, top = 110;
  s += `<path d="M 512 ${lvl} L 688 ${lvl} L 676 ${cbt} L 524 ${cbt} Z" fill="#f4c99a" stroke="none"/>`;
  s += path(`M 506 ${ct} L 524 ${cbt} L 676 ${cbt} L 694 ${ct}`, { stroke: "#555", w: 2.5 });
  s += rect(sx0, 120, sx1 - sx0, 152, { fill: "#fff", stroke: "none", rx: 0 }) + rect(sx0, top, sx1 - sx0, 162, { fill: "none", stroke: "#888", w: 1.5, rx: 0 });
  const sl = 132;
  s += rect(sx0 + 1, sl, sx1 - sx0 - 2, 272 - sl, { fill: "#f4c99a", stroke: "none", rx: 0 });
  s += line(sx0, top, sx0, 272, { stroke: "#888", w: 1.5 }) + line(sx1, top, sx1, 272, { stroke: "#888", w: 1.5 });
  s += line(sx0 - 18, 60, sx0, top, { stroke: "#888", w: 1.5 }) + line(sx1 - 18, 60, sx1, top, { stroke: "#888", w: 1.5 });
  s += A((sx0 + sx1) / 2, 250, (sx0 + sx1) / 2, sl + 8, C.ink, 2.2);
  [532, 564].forEach((x) => s += A(x, 128, x, lvl - 4, BLUE, 2.5));
  s += A(655, 128, 655, lvl - 4, BLUE, 2.5);
  s += text(548, 102, "P_atm", { size: 13, weight: "bold", fill: BLUE }) + text(655, 102, "P_atm", { size: 13, weight: "bold", fill: BLUE });
  s += text(sx0 - 24, 66, "lowered pressure", { size: 12, weight: "bold", anchor: "end" }) + text(sx0 - 24, 82, "inside the straw", { size: 12, weight: "bold", anchor: "end" });
  s += text(600, 304, "the atmosphere pushes the drink up;", { size: 12, weight: "bold" }) + text(600, 322, "there is no \"suction force\"", { size: 12, weight: "bold" });
  fig(FIGS, "pressure-difference-flow", 760, 336, s, "Left: a fluid parcel in a narrowing pipe pushed forward by higher pressure behind it than ahead. Right: a straw in a drink with atmospheric pressure pushing down on the open surface", "A fluid parcel feels P₁A from behind and P₂A from ahead, so it accelerates toward the lower pressure. In a straw, lowering the pressure inside lets the atmosphere's push on the open surface drive the drink upward.");
}
