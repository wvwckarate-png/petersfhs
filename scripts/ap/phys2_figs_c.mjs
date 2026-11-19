// AP Physics 2 figures for added material, batch C (Units 13-14: ray model, mirrors, lens/Snell graphs, waves, interference).
import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, PURPLE, TEAL, GOLD, NOTE, title } from "./lib2.mjs";
export const FIGS = {};
const f1 = (n) => (Math.round(n * 10) / 10).toString();
const poly = (pts, o = {}) => path(pts.map(([x, y], i) => (i ? "L " : "M ") + f1(x) + " " + f1(y)).join(" "), o);
const sample = (a, b, n, fn) => { const out = []; for (let i = 0; i <= n; i++) { const t = a + (b - a) * i / n; out.push(fn(t)); } return out; };
const tick = (x, y, lab, o = {}) => line(x, y, x, y + 5, { w: 1.5 }) + (lab !== "" ? text(x, y + 19, lab, { size: o.size || 11.5 }) : "");
const ytick = (x, y, lab, o = {}) => line(x - 5, y, x, y, { w: 1.5 }) + (lab !== "" ? text(x - 8, y + 4, lab, { size: o.size || 11.5, anchor: "end" }) : "");
const xlab = (x, y, s) => text(x, y, s, { size: 12.5, weight: "bold" });
const ylab = (x, y, s) => text(x, y, s, { size: 12.5, weight: "bold", rotate: -90 });
const extraDefs = `<defs><marker id="ahp" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${PURPLE}"/></marker><marker id="aht" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${TEAL}"/></marker></defs>`;
const dbl = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, { stroke: o.stroke, w: o.w || 1.8, marker: o.marker || "ah" }) + line(x2, y2, x1, y1, { stroke: o.stroke, w: o.w || 1.8, marker: o.marker || "ah" });
// visible wavelength (nm) to an sRGB colour
function wl(l) {
  let r = 0, g = 0, b = 0;
  if (l < 440) { r = -(l - 440) / 60; b = 1; } else if (l < 490) { g = (l - 440) / 50; b = 1; } else if (l < 510) { g = 1; b = -(l - 510) / 20; } else if (l < 580) { r = (l - 510) / 70; g = 1; } else if (l < 645) { r = 1; g = -(l - 645) / 65; } else { r = 1; }
  const k = l < 420 ? 0.35 + 0.65 * (l - 380) / 40 : l > 680 ? 0.35 + 0.65 * (750 - l) / 70 : 1;
  const c = (v) => Math.round(255 * Math.pow(v * k, 0.8)).toString(16).padStart(2, "0");
  return "#" + c(r) + c(g) + c(b);
}

// 1. Rays and wavefronts (13.1)
{
  let s = defs + title("A ray is drawn perpendicular to the wavefronts, in the direction light travels");
  s += text(195, 52, "Plane wavefronts → parallel rays", { size: 13, weight: "bold" });
  for (let i = 0; i < 6; i++) { const x = 90 + i * 42; s += line(x, 72, x, 238, { stroke: BLUE, w: 2.5 }); }
  [100, 155, 210].forEach((y) => s += arrow(50, y, 345, y, { stroke: RED, marker: "ahr", w: 2.5 }));
  // right-angle mark at one crossing
  s += path("M 174 90 L 184 90 L 184 100", { stroke: C.ink, w: 1.5 });
  s += text(195, 262, "wavefronts (crests): blue   ·   rays: red", { size: 11.5, fill: C.muted });
  s += text(195, 284, "rays ⟂ wavefronts", { size: 13, weight: "bold", fill: RED });
  s += line(380, 44, 380, 296, { stroke: C.line, w: 1.5 });
  s += text(570, 52, "Point source → rays fan straight outward", { size: 13, weight: "bold" });
  const cx = 570, cy = 182;
  [26, 50, 74, 98].forEach((r) => s += circle(cx, cy, r, { stroke: BLUE, w: 2.5 }));
  for (let k = 0; k < 8; k++) { const t = k * Math.PI / 4 + Math.PI / 8; s += arrow(cx + 9 * Math.cos(t), cy + 9 * Math.sin(t), cx + 112 * Math.cos(t), cy + 112 * Math.sin(t), { stroke: RED, marker: "ahr", w: 2.2 }); }
  s += circle(cx, cy, 6, { fill: GOLD, stroke: "#8a6a00" });
  s += text(cx, 312, "circular wavefronts; each ray points along a radius", { size: 11.5, fill: C.muted });
  FIGS["ray-wavefronts"] = { svg: svg(760, 326, extraDefs + s, "Plane wavefronts with parallel rays perpendicular to them, and circular wavefronts around a point source with rays pointing radially outward"), caption: "Rays are not things in the light; they are arrows drawn at right angles to the wavefronts. Flat wavefronts (light from far away, or a laser) give parallel rays; a small source gives rays that spread out along radii." };
}

// 2. Convex mirror principal rays (13.2), computed with the mirror equation (paraxial)
{
  let s = defs + extraDefs + title("Convex mirror: three principal rays, and a virtual image behind the mirror");
  const V = 430, ay = 205, fpx = 120, R = 2 * fpx, F = V + fpx, Cc = V + R;
  const xo = 250, ho = 72; // object 180 px in front
  const doP = V - xo, diP = 1 / (-1 / fpx - 1 / doP); // negative (behind mirror)
  const xi = V - diP, hi = ho * (-diP / doP), tipY = ay - ho, imgY = ay - hi;
  // mirror: gentle arc bulging toward the object, silvered back hatched
  const Rd = 1400, half = 100;
  let arc = []; for (let i = -20; i <= 20; i++) { const y = half * i / 20; arc.push([V + (Rd - Math.sqrt(Rd * Rd - y * y)), ay + y]); }
  s += poly(arc, { stroke: "#555", w: 4 });
  for (let i = -18; i <= 18; i += 3) { const y = half * i / 20, x = V + (Rd - Math.sqrt(Rd * Rd - y * y)); s += line(x + 3, ay + y, x + 13, ay + y - 9, { stroke: "#999", w: 1.3 }); }
  s += line(40, ay, 720, ay, { stroke: C.muted, w: 1.3 }) + text(46, ay - 8, "principal axis", { size: 11.5, fill: C.muted, anchor: "start" });
  s += circle(F, ay, 4.5, { fill: C.ink }) + text(F, ay + 22, "F", { size: 14, weight: "bold" }) + circle(Cc, ay, 4.5, { fill: C.ink }) + text(Cc, ay + 22, "C", { size: 14, weight: "bold" });
  s += text((V + F) / 2, ay + 58, "f", { size: 12, fill: C.muted }) + dbl(V + 18, ay + 40, F - 4, ay + 40, { stroke: C.muted, w: 1.2 });
  // object
  s += arrow(xo, ay, xo, tipY, { w: 3.5 }) + text(xo - 8, tipY - 8, "object", { size: 12.5, weight: "bold", anchor: "end" });
  // Ray 1: parallel in, reflects as if from F
  const y1 = tipY; const d1 = [V - F, y1 - ay]; const L1 = Math.hypot(...d1); const out1 = [V + d1[0] / L1 * 175, y1 + d1[1] / L1 * 175];
  s += arrow(xo, y1, (xo + V) / 2, y1, { stroke: BLUE, marker: "ahb", w: 2.4 }) + line((xo + V) / 2 - 4, y1, V, y1, { stroke: BLUE, w: 2.4 });
  s += arrow(V, y1, out1[0], out1[1], { stroke: BLUE, marker: "ahb", w: 2.4 }) + line(V, y1, F, ay, { stroke: BLUE, w: 1.6, dash: "6 5" });
  s += text(xo + 40, y1 - 9, "1", { size: 14, weight: "bold", fill: BLUE });
  // Ray 2: aimed at F, reflects parallel
  const y2 = tipY + (V - xo) * (ay - tipY) / (F - xo);
  s += arrow(xo, tipY, (xo + V) / 2, tipY + ((xo + V) / 2 - xo) * (ay - tipY) / (F - xo), { stroke: GREEN, marker: "ahg", w: 2.4 }) + line((xo + V) / 2 - 4, tipY + ((xo + V) / 2 - 4 - xo) * (ay - tipY) / (F - xo), V, y2, { stroke: GREEN, w: 2.4 });
  s += line(V, y2, F, ay, { stroke: GREEN, w: 1.6, dash: "2 5" });
  s += arrow(V, y2, 300, y2, { stroke: GREEN, marker: "ahg", w: 2.4 }) + line(V, y2, xi + 2, y2, { stroke: GREEN, w: 1.6, dash: "6 5" });
  s += text(345, y2 + 17, "2", { size: 14, weight: "bold", fill: GREEN });
  // Ray 3: to the vertex, reflects at equal angle below the axis
  const sl = (ay - tipY) / (V - xo);
  s += arrow(xo, tipY, (xo + V) / 2, tipY + sl * ((xo + V) / 2 - xo), { stroke: RED, marker: "ahr", w: 2.4 }) + line((xo + V) / 2 - 4, tipY + sl * ((xo + V) / 2 - 4 - xo), V, ay, { stroke: RED, w: 2.4 });
  s += arrow(V, ay, 280, ay + sl * (V - 280), { stroke: RED, marker: "ahr", w: 2.4 }) + line(V, ay, xi + 18, ay - sl * (xi + 18 - V), { stroke: RED, w: 1.6, dash: "6 5" });
  s += text(300, ay + sl * (V - 300) + 22, "3", { size: 14, weight: "bold", fill: RED });
  // image
  s += line(xi, ay, xi, imgY, { stroke: PURPLE, w: 3, marker: "ahp", dash: "5 3" });
  s += text(xi + 2, ay - 82, "image", { size: 12.5, weight: "bold", fill: PURPLE }) + line(xi, ay - 76, xi, imgY - 8, { stroke: PURPLE, w: 1 });
  // legend / note
  s += rect(40, 330, 680, 56, NOTE) + text(380, 352, "Solid lines: real reflected rays (they spread apart).  Dashed lines: extensions behind the mirror.", { size: 12.5, weight: "bold" }) + text(380, 374, "The extensions meet at the image: virtual, upright, reduced, between the mirror and F.", { size: 12.5 });
  FIGS["convex-mirror-rays"] = { svg: svg(760, 400, s, "Convex mirror ray diagram with parallel ray, focal ray and vertex ray, whose backward extensions meet at a small upright virtual image behind the mirror"), caption: "Drawn to scale from the mirror equation (object at 1.5f): the three reflected rays diverge, and only their dashed extensions meet, at a virtual, upright, reduced image between the mirror and F. A convex mirror gives this kind of image for every object position." };
}

// 3. Snell's law graph (13.3)
{
  let s = defs + title("Finding n: plot sin θ₁ (air) against sin θ₂ (block)");
  const x0 = 90, y0 = 300, W = 400, H = 250; // x 0..0.8, y 0..1.0
  const X = (v) => x0 + v / 0.8 * W, Y = (v) => y0 - v / 1.0 * H;
  for (let v = 0.2; v <= 1.001; v += 0.2) s += line(x0, Y(v), x0 + W, Y(v), { stroke: "#eee", w: 1 });
  for (let v = 0.2; v <= 0.801; v += 0.2) s += line(X(v), y0, X(v), y0 - H, { stroke: "#eee", w: 1 });
  s += line(x0, y0, x0 + W, y0, { w: 2 }) + line(x0, y0, x0, y0 - H, { w: 2 });
  [0, 0.2, 0.4, 0.6, 0.8].forEach((v) => s += tick(X(v), y0, v.toFixed(1)));
  [0, 0.2, 0.4, 0.6, 0.8, 1.0].forEach((v) => s += ytick(x0, Y(v), v.toFixed(1)));
  s += xlab(x0 + W / 2, y0 + 42, "sin θ₂ (in block)") + ylab(x0 - 50, y0 - H / 2, "sin θ₁ (in air)");
  const n = 0.8 / 0.6;
  s += line(X(0), Y(0), X(0.75), Y(0.75 * n), { stroke: BLUE, w: 2.5 }) + text(X(0.74), Y(0.75 * n) - 6, "best-fit line", { size: 11.5, fill: BLUE, weight: "bold", anchor: "end" });
  // slope triangle from origin to (0.60, 0.80)
  s += line(X(0), Y(0), X(0.6), Y(0), { stroke: RED, w: 2, dash: "5 4" }) + line(X(0.6), Y(0), X(0.6), Y(0.8), { stroke: RED, w: 2, dash: "5 4" });
  s += text(X(0.3), Y(0) - 8, "run = 0.60", { size: 12, weight: "bold", fill: RED }) + text(X(0.6) + 8, Y(0.4), "rise = 0.80", { size: 12, weight: "bold", fill: RED, anchor: "start" });
  [[0.15, 0.21], [0.3, 0.39], [0.45, 0.61], [0.7, 0.92]].forEach(([a, b]) => s += circle(X(a), Y(b), 5, { fill: "#fff", stroke: C.ink, w: 2 }));
  s += circle(X(0.6), Y(0.8), 6.5, { fill: RED, stroke: C.ink, w: 1.5 }) + text(X(0.6) - 12, Y(0.8) - 4, "(0.60, 0.80)", { size: 12, weight: "bold", anchor: "end" });
  s += rect(530, 70, 210, 214, NOTE) + text(635, 94, "Why this works", { size: 13, weight: "bold" }) + text(635, 120, "sin θ₁ = n sin θ₂", { size: 14, weight: "bold", fill: BLUE }) + text(635, 142, "y   =  (slope) x", { size: 13 }) + text(635, 172, "slope = rise / run = n", { size: 13, weight: "bold", fill: RED }) + text(635, 204, "Plot the SINES. θ₁ vs θ₂\n(the angles themselves)\ncurves instead of making\na straight line.", { size: 12 });
  FIGS["snell-sine-graph"] = { svg: svg(760, 352, s, "Graph of sin theta 1 in air versus sin theta 2 in a block: five data points on a straight line through the origin, with a slope triangle to the point 0.60, 0.80"), caption: "Lab data from a semicircular block: sin θ₁ against sin θ₂ is a straight line through the origin, and its slope (rise over run) is the block's index of refraction. Use the best-fit line, not a single data point, when the points scatter." };
}

// 4. Lens data graphs (13.4)
{
  let s = defs + title("Lens data two ways: a straight line and a curve");
  // left: 1/si vs 1/so
  { const x0 = 80, y0 = 290, W = 230, H = 230, M = 6; const X = (v) => x0 + v / M * W, Y = (v) => y0 - v / M * H;
    s += text(195, 52, "1/sᵢ vs 1/sₒ: straight line", { size: 13, weight: "bold" });
    s += line(x0, y0, x0 + W, y0, { w: 2 }) + line(x0, y0, x0, y0 - H, { w: 2 });
    [0, 1, 2, 3, 4, 5, 6].forEach((v) => s += tick(X(v), y0, v === 5 ? "" : String(v)) + ytick(x0, Y(v), v === 5 ? "" : String(v)));
    s += text(X(5), y0 + 19, "5.0", { size: 11.5, weight: "bold", fill: RED }) + text(x0 - 8, Y(5) + 4, "5.0", { size: 11.5, weight: "bold", fill: RED, anchor: "end" });
    s += xlab(x0 + W / 2, y0 + 40, "1/sₒ (m⁻¹)") + ylab(x0 - 42, y0 - H / 2, "1/sᵢ (m⁻¹)");
    s += line(X(0), Y(5), X(5), Y(0), { stroke: BLUE, w: 3 });
    [[0.8, 4.3], [1.7, 3.2], [2.5, 2.55], [3.3, 1.6], [4.1, 0.95]].forEach(([a, b]) => s += circle(X(a), Y(b), 4.5, { fill: "#fff", stroke: C.ink, w: 2 }));
    s += circle(X(0), Y(5), 5.5, { fill: RED }) + circle(X(5), Y(0), 5.5, { fill: RED });
    s += text(X(0) + 12, Y(5) - 10, "intercept = 1/f", { size: 12, weight: "bold", fill: RED, anchor: "start" }) + text(X(5) + 8, Y(0) - 44, "intercept\n= 1/f", { size: 12, weight: "bold", fill: RED, anchor: "start" });
    s += text(X(3.6), Y(3.2), "slope = −1", { size: 12, weight: "bold", fill: BLUE, anchor: "start" });
  }
  s += line(380, 44, 380, 340, { stroke: C.line, w: 1.5 });
  // right: si vs so, converging lens, axes in multiples of f
  { const x0 = 460, y0 = 290, W = 250, H = 230, M = 5; const X = (v) => x0 + v / M * W, Y = (v) => y0 - v / M * H;
    s += text(575, 52, "sᵢ vs sₒ (raw data): a curve", { size: 13, weight: "bold" });
    s += line(x0, y0, x0 + W, y0, { w: 2 }) + line(x0, y0, x0, y0 - H, { w: 2 });
    ["0", "f", "2f", "3f", "4f", "5f"].forEach((l, v) => s += tick(X(v), y0, l) + ytick(x0, Y(v), l));
    s += xlab(x0 + W / 2, y0 + 40, "object distance sₒ") + ylab(x0 - 38, y0 - H / 2, "image distance sᵢ");
    s += line(X(1), y0, X(1), y0 - H, { stroke: C.muted, w: 1.5, dash: "6 5" }) + line(x0, Y(1), x0 + W, Y(1), { stroke: C.muted, w: 1.5, dash: "6 5" });
    s += poly(sample(1.25, 5, 120, (u) => [X(u), Y(u / (u - 1))]), { stroke: RED, w: 3 });
    s += line(X(2), y0, X(2), Y(2), { stroke: RED, w: 1.2, dash: "3 4" }) + line(x0, Y(2), X(2), Y(2), { stroke: RED, w: 1.2, dash: "3 4" }) + circle(X(2), Y(2), 5.5, { fill: RED });
    s += text(X(2) + 10, Y(2) - 8, "(2f, 2f)", { size: 12, weight: "bold", anchor: "start" });
    s += text(X(1.6), Y(4.6), "sₒ → f: sᵢ huge", { size: 11.5, fill: C.muted, anchor: "start" }) + text(X(4.9), Y(1) + 18, "sₒ large: sᵢ → f", { size: 11.5, fill: C.muted, anchor: "end" });
  }
  s += text(380, 362, "Dashed lines on the right are asymptotes at sₒ = f and sᵢ = f (converging lens, real images).", { size: 11.5, fill: C.muted });
  FIGS["lens-data-graphs"] = { svg: svg(760, 378, s, "Left: graph of 1 over image distance versus 1 over object distance, a straight line of slope minus one from 5.0 on each axis. Right: image distance versus object distance curve with asymptotes at f, passing through 2f, 2f"), caption: "Plotting the reciprocals turns the lens equation into a straight line whose two intercepts are both 1/f, so a best-fit line gives the focal length from many measurements. The raw data curve the other way: the image runs off to infinity as the object nears f, and approaches f when the object is far away." };
}

// 5. Sound: pressure vs position (14.1)
{
  let s = defs + extraDefs + title("A sound wave at one instant: molecules and pressure");
  const x0 = 80, x1 = 680, lam = 300, xp = 155; // peaks at 155, 455
  const k = 2 * Math.PI / lam;
  // dot strip: density proportional to 1 + 0.65 cos(k(x - xp))
  s += rect(x0 - 10, 52, x1 - x0 + 20, 76, { fill: "#f7f7f4", stroke: "#ddd", rx: 6 });
  const cdf = (x) => (x - x0) + 0.85 / k * (Math.sin(k * (x - xp)) - Math.sin(k * (x0 - xp)));
  const total = cdf(x1), N = 64;
  let rnd = 7; const rand = () => { rnd = (rnd * 9301 + 49297) % 233280; return rnd / 233280; };
  for (let row = 0; row < 6; row++) {
    for (let i = 0; i < N; i++) {
      const target = (i + 0.5 + (rand() - 0.5) * 0.5) / N * total;
      let lo = x0, hi = x1; for (let it = 0; it < 40; it++) { const m = (lo + hi) / 2; if (cdf(m) < target) lo = m; else hi = m; }
      s += circle(lo, 62 + row * 11.5 + (rand() - 0.5) * 4, 2.6, { fill: "#5b7fb5" });
    }
  }
  s += text(x0 - 14, 94, "air", { size: 12, weight: "bold", anchor: "end" });
  // graph
  const P0 = 250, A = 62;
  const Y = (x) => P0 - A * Math.cos(k * (x - xp));
  [xp].forEach((x) => s += line(x, 132, x, Y(x) - 6, { stroke: "#bbb", w: 1, dash: "3 4" }));
  [xp + lam / 2, xp + 1.5 * lam].forEach((x) => s += line(x, 132, x, Y(x) + 34, { stroke: "#bbb", w: 1, dash: "3 4" }));
  s += line(x0, P0, x1 + 10, P0, { stroke: C.muted, w: 1.6, dash: "7 5" }) + text(x1 + 14, P0 - 2, "equilibrium\npressure P₀", { size: 11.5, fill: C.muted, anchor: "start" });
  s += line(x0 - 10, 360, x1 + 10, 360, { w: 2 }) + line(x0 - 10, 360, x0 - 10, 160, { w: 2 });
  s += text((x0 + x1) / 2, 384, "position x along the wave", { size: 12.5, weight: "bold" }) + ylab(x0 - 30, 260, "air pressure P");
  s += poly(sample(x0, x1, 200, (x) => [x, Y(x)]), { stroke: BLUE, w: 3 });
  s += text(xp, Y(xp) - 30, "compression\n(high pressure)", { size: 12, weight: "bold", fill: RED });
  s += text(xp + lam - 12, Y(xp + lam) - 18, "compression", { size: 12, weight: "bold", fill: RED, anchor: "end" });
  s += text(xp + lam / 2, Y(xp + lam / 2) + 22, "rarefaction\n(low pressure)", { size: 12, weight: "bold", fill: TEAL });
  s += text(xp + 1.5 * lam, Y(xp + 1.5 * lam) + 22, "rarefaction", { size: 12, weight: "bold", fill: TEAL });
  // pressure amplitude arrow at x = xp + lam, from P0 up to the peak
  s += dbl(xp + lam, P0, xp + lam, Y(xp + lam), { stroke: PURPLE, marker: "ahp", w: 2 });
  s += text(xp + lam + 10, Y(xp + lam) - 16, "pressure amplitude", { size: 12, weight: "bold", fill: PURPLE, anchor: "start" });
  // wavelength arrow peak to peak, drawn between strip and graph
  s += dbl(xp, 144, xp + lam, 144, { stroke: GREEN, marker: "ahg", w: 2 }) + text(xp + lam / 2, 140, "λ", { size: 15, weight: "bold", fill: GREEN });
  FIGS["sound-pressure-amplitude"] = { svg: svg(760, 400, s, "Strip of air molecules bunched at compressions and spread at rarefactions above a graph of air pressure versus position, with equilibrium pressure, pressure amplitude and wavelength marked"), caption: "Where the molecules are bunched (compressions) the pressure is above P₀; where they are spread out (rarefactions) it is below. The pressure amplitude is measured from P₀ to a peak, and one wavelength runs from one compression to the next." };
}

// 6. y-t and y-x graphs (14.2)
{
  let s = defs + title("The same wave, two graphs: watch one point, or take a snapshot");
  const panel = (y0, xMax, ticks, fmt, xl, ttl, cyc, cycLab, col) => {
    const x0 = 120, W = 560, H = 62; const X = (v) => x0 + v / xMax * W;
    let g = text(x0 - 10, y0 - H - 28, ttl, { size: 13, weight: "bold", anchor: "start" });
    g += line(x0, y0, x0 + W + 10, y0, { w: 1.8 }) + line(x0, y0 + H + 10, x0, y0 - H - 10, { w: 1.8 });
    ticks.forEach((v) => g += line(X(v), y0, X(v), y0 + 5, { w: 1.5 }) + text(X(v) + 4, y0 + 19, fmt(v), { size: 11.5, weight: "bold" }).replace("<text ", '<text paint-order="stroke" stroke="#fff" stroke-width="5" '));
    g += ytick(x0, y0 - H, "0.020") + ytick(x0, y0 + H, "−0.020") + text(x0 - 8, y0 + 4, "0", { size: 11.5, anchor: "end" });
    g += text(x0 + W + 14, y0 + 4, xl, { size: 12.5, weight: "bold", anchor: "start" }) + ylab(x0 - 62, y0, "y (m)");
    g += poly(sample(0, xMax, 240, (v) => [X(v), y0 - H * Math.sin(2 * Math.PI * v / cyc)]), { stroke: col, w: 3 });
    g += line(X(0), y0 - H, X(cyc / 4) , y0 - H, { stroke: "#ccc", w: 1, dash: "3 4" });
    g += dbl(X(0), y0 + H + 22, X(cyc), y0 + H + 22, { stroke: RED, marker: "ahr", w: 2 }) + text(X(cyc / 2), y0 + H + 40, cycLab, { size: 13, weight: "bold", fill: RED });
    g += line(X(cyc), y0 + 4, X(cyc), y0 + H + 22, { stroke: RED, w: 1, dash: "3 3" });
    return g;
  };
  s += panel(150, 0.10, [0, 0.025, 0.05, 0.075, 0.10], (v) => v === 0 ? "0" : v.toFixed(3).replace(/0$/, ""), "t (s)", "Displacement vs. time at x = 0  (one point of the rope)", 0.05, "one cycle: T = 0.050 s", BLUE);
  s += panel(370, 3.0, [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], (v) => v === 0 ? "0" : v.toFixed(1), "x (m)", "Displacement vs. position at t = 0  (snapshot of the rope)", 1.5, "one cycle: λ = 1.5 m", GREEN);
  FIGS["wave-yt-yx"] = { svg: svg(760, 478, s, "Two sine graphs of amplitude 0.020 m: displacement versus time with period 0.050 s, and displacement versus position with wavelength 1.5 m"), caption: "Both graphs are sine curves with the same amplitude, but the horizontal axes differ. On a y-vs-t graph one cycle is the period T; on a y-vs-x graph one cycle is the wavelength λ. Check the axis label before reading a cycle length." };
}

// 7. Two-string junction (14.3)
{
  let s = defs + extraDefs + title("A pulse at a junction between a light string and a heavy string");
  const J = 380, xa = 40, xb = 730;
  // bump: gaussian
  const bump = (x, c, h, sg) => h * Math.exp(-((x - c) ** 2) / (2 * sg * sg));
  const row = (y, leftThin, pulses, lab) => {
    const disp = (x) => pulses.filter((p) => (p.side < 0 ? x <= J : x >= J)).reduce((a, p) => a + bump(x, p.c, p.h, p.sg), 0);
    const left = sample(xa, J, 160, (x) => [x, y - disp(x)]), right = sample(J, xb, 160, (x) => [x, y - disp(x)]);
    let g = text(xa, y - 48, lab, { size: 12, weight: "bold", fill: C.muted, anchor: "start" });
    g += poly(left, { stroke: C.ink, w: leftThin ? 1.6 : 5 }) + poly(right, { stroke: C.ink, w: leftThin ? 5 : 1.6 });
    g += circle(J, y, 5.5, { fill: GOLD, stroke: "#7a5c00" });
    pulses.forEach((p) => { const top = y - p.h; const ay = p.h > 0 ? top - 14 : top + 16; g += arrow(p.c - p.dir * 22, ay, p.c + p.dir * 22, ay, { stroke: p.col, marker: p.mk, w: 2.2 }); if (p.lab) g += text(p.c + (p.lx || 0), p.h > 0 ? top - 26 : top + 40, p.lab, { size: 11.5, weight: "bold", fill: p.col }); });
    return g;
  };
  // Panel A: light -> heavy, v2 = v1/2: r = -1/3, t = 2/3, transmitted pulse half as wide
  s += text(380, 50, "A.  Light string → heavy string (pulse enters a SLOWER medium)", { size: 13, weight: "bold", fill: BLUE });
  s += text(300, 162, "light string (faster)", { size: 11.5, fill: C.muted }) + text(560, 162, "heavy string (slower)", { size: 11.5, fill: C.muted });
  s += row(140, true, [{ side: -1, c: 200, h: 42, sg: 18, dir: 1, col: BLUE, mk: "ahb", lab: "incident" }], "before");
  s += row(238, true, [{ side: -1, c: 220, h: -14, sg: 18, dir: -1, col: RED, mk: "ahr", lab: "reflected: inverted" }, { side: 1, c: 460, h: 28, sg: 9, dir: 1, col: GREEN, mk: "ahg", lab: "transmitted: upright, shorter" }], "after");
  s += line(30, 286, 730, 286, { stroke: C.line, w: 1.5 });
  // Panel B: heavy -> light, v2 = 2 v1: r = +1/3, t = 4/3, transmitted pulse twice as wide
  s += text(380, 312, "B.  Heavy string → light string (pulse enters a FASTER medium)", { size: 13, weight: "bold", fill: BLUE });
  s += text(300, 422, "heavy string (slower)", { size: 11.5, fill: C.muted }) + text(470, 422, "light string (faster)", { size: 11.5, fill: C.muted });
  s += row(400, false, [{ side: -1, c: 220, h: 30, sg: 18, dir: 1, col: BLUE, mk: "ahb", lab: "incident" }], "before");
  s += row(498, false, [{ side: -1, c: 260, h: 10, sg: 18, dir: -1, col: RED, mk: "ahr", lab: "reflected: upright", lx: -20 }, { side: 1, c: 620, h: 40, sg: 36, dir: 1, col: GREEN, mk: "ahg", lab: "transmitted: upright, longer" }], "after");
  s += rect(40, 530, 680, 40, NOTE) + text(380, 555, "The transmitted pulse is never inverted. Only the reflected pulse flips, and only when the second string is slower.", { size: 12.5, weight: "bold" });
  FIGS["string-junction"] = { svg: svg(760, 584, s, "Pulses at a junction of two strings: light to heavy gives an inverted reflection and a shorter transmitted pulse; heavy to light gives an upright reflection and a longer transmitted pulse"), caption: "Drawn for a wave speed that halves (A) or doubles (B) at the junction. The transmitted pulse keeps its orientation and stretches or shrinks with the speed; the reflected pulse is inverted only when the second string is slower, like a fixed end." };
}

// 8. Superposition of two pulses (14.6)
{
  let s = defs + title("Two pulses pass through each other: add displacements point by point");
  const tri = (x, c, h, half) => Math.max(0, 1 - Math.abs(x - c) / half) * h;
  const xa = 80, xb = 680, half = 60, H = 40; // 2.0 cm = 40 px
  const snap = (y, cl, cr, label, overlap) => {
    let g = text(xa - 50, y - 50, label, { size: 12.5, weight: "bold", anchor: "start" });
    g += line(xa, y, xb, y, { stroke: "#ddd", w: 1 });
    if (overlap) {
      g += poly(sample(xa, xb, 300, (x) => [x, y - tri(x, cl, H, half)]), { stroke: BLUE, w: 2, dash: "6 5" });
      g += poly(sample(xa, xb, 300, (x) => [x, y + tri(x, cr, H, half)]), { stroke: RED, w: 2, dash: "6 5" });
      g += line(xa, y, xb, y, { stroke: C.ink, w: 3.5 });
      g += text(cl + half + 16, y - 22, "dashed: each pulse alone", { size: 11.5, fill: C.muted, anchor: "start" }) + text(cl + half + 16, y + 30, "solid: sum = (+) + (−) = 0 at every point", { size: 11.5, weight: "bold", anchor: "start" });
    } else {
      g += poly(sample(xa, xb, 300, (x) => [x, y - tri(x, cl, H, half) + tri(x, cr, H, half)]), { stroke: C.ink, w: 3.5 });
    }
    return g;
  };
  // 1: approaching
  s += snap(110, 230, 530, "1. Approaching", false);
  s += arrow(205, 52, 255, 52, { stroke: BLUE, marker: "ahb", w: 2.2 }) + arrow(555, 168, 505, 168, { stroke: RED, marker: "ahr", w: 2.2 });
  s += line(150, 70, 228, 70, { stroke: BLUE, w: 1, dash: "3 3" }) + line(532, 150, 610, 150, { stroke: RED, w: 1, dash: "3 3" }) + dbl(150, 110, 150, 70, { stroke: BLUE, marker: "ahb", w: 1.5 }) + text(144, 94, "+2.0 cm", { size: 11.5, weight: "bold", fill: BLUE, anchor: "end" });
  s += dbl(610, 110, 610, 150, { stroke: RED, marker: "ahr", w: 1.5 }) + text(618, 136, "−2.0 cm", { size: 11.5, weight: "bold", fill: RED, anchor: "start" });
  s += line(30, 196, 730, 196, { stroke: C.line, w: 1.5 });
  // 2: exact overlap
  s += snap(280, 380, 380, "2. Exactly overlapping", true);
  s += line(30, 352, 730, 352, { stroke: C.line, w: 1.5 });
  // 3: passed through
  s += snap(436, 530, 230, "3. Passed through each other", false);
  s += arrow(505, 378, 555, 378, { stroke: BLUE, marker: "ahb", w: 2.2 }) + arrow(255, 494, 205, 494, { stroke: RED, marker: "ahr", w: 2.2 });
  s += text(380, 524, "each pulse continues with its original shape, size and speed", { size: 12, fill: C.muted });
  FIGS["pulse-superposition"] = { svg: svg(760, 540, s, "Three snapshots of an upward and a downward triangular pulse on a string: approaching, exactly overlapping so the string is flat, and after passing through each other unchanged"), caption: "At complete overlap the displacements +2.0 cm and −2.0 cm add to zero at every point, so the string is momentarily flat (but still moving). The pulses then emerge unchanged, because waves pass through each other." };
}

// 9. Beats (14.6)
{
  let s = defs + title("Beats: 10 Hz + 12 Hz gives a loudness that swells 2 times per second");
  const x0 = 110, W = 580; const X = (t) => x0 + t * W;
  const comp = (y, fr, col, lab) => poly(sample(0, 1, 900, (t) => [X(t), y - 13 * Math.cos(2 * Math.PI * fr * t)]), { stroke: col, w: 1.6 }) + text(x0 - 10, y + 4, lab, { size: 12, weight: "bold", fill: col, anchor: "end" });
  s += comp(60, 10, BLUE, "10 Hz") + comp(100, 12, RED, "12 Hz");
    // sum
  const y0 = 220, A = 70;
  [0.25, 0.75].forEach((t) => s += rect(X(t) - 22, 40, 44, 268, { fill: "#f2f2f2", stroke: "none", rx: 4 }));
  [0, 0.5, 1].forEach((t) => s += line(X(t), 44, X(t), 300, { stroke: "#c9c9c9", w: 1, dash: "3 4" }));
  s += comp(60, 10, BLUE, "10 Hz") + comp(100, 12, RED, "12 Hz");
  s += line(x0, y0, x0 + W, y0, { stroke: "#bbb", w: 1 });
  s += poly(sample(0, 1, 1400, (t) => [X(t), y0 - A / 2 * (Math.cos(2 * Math.PI * 10 * t) + Math.cos(2 * Math.PI * 12 * t))]), { stroke: PURPLE, w: 1.8 });
  s += poly(sample(0, 1, 300, (t) => [X(t), y0 - A * Math.abs(Math.cos(2 * Math.PI * t))]), { stroke: C.ink, w: 2, dash: "6 5" }) + poly(sample(0, 1, 300, (t) => [X(t), y0 + A * Math.abs(Math.cos(2 * Math.PI * t))]), { stroke: C.ink, w: 2, dash: "6 5" });
  s += text(x0 - 10, y0 + 4, "sum", { size: 12, weight: "bold", fill: PURPLE, anchor: "end" });
  s += line(x0, 312, x0 + W, 312, { w: 2 });
  [0, 0.25, 0.5, 0.75, 1].forEach((t) => s += tick(X(t), 312, t === 0 ? "0" : t.toFixed(2)));
  s += text(x0 + W + 12, 316, "t (s)", { size: 12.5, weight: "bold", anchor: "start" });
  s += text(X(0.5), y0 - A - 10, "loud (in step)", { size: 12, weight: "bold" });
  s += text(X(0.25), y0 + 46, "soft\n(out of step)", { size: 11.5, weight: "bold", fill: C.muted }) + text(X(0.75), y0 + 46, "soft\n(out of step)", { size: 11.5, weight: "bold", fill: C.muted });
  s += dbl(X(0.5), 350, X(1), 350, { stroke: RED, marker: "ahr", w: 2 }) + text(X(0.75), 372, "1/f_beat = 0.50 s", { size: 13, weight: "bold", fill: RED });
  s += line(X(0.5), 336, X(0.5), 356, { stroke: RED, w: 1 }) + line(X(1), 336, X(1), 356, { stroke: RED, w: 1 });
  s += text(X(0.2), 370, "f_beat = |12 − 10| = 2 Hz", { size: 13, weight: "bold" });
  FIGS["beats-envelope"] = { svg: svg(760, 390, s, "A 10 Hz and a 12 Hz wave and their sum over one second, with a dashed envelope that is widest at 0, 0.5 and 1.0 seconds and pinches to zero at 0.25 and 0.75 seconds"), caption: "The two waves start in step (loud), drift half a cycle apart by 0.25 s (soft), and are back in step at 0.50 s. The dashed envelope is the loudness you hear: it peaks |12 − 10| = 2 times per second." };
}

// 10. Single-slit intensity (14.7), axis in units of λL/a
{
  let s = defs + title("Single-slit pattern: a wide central maximum and dim side maxima");
  const x0 = 380, U = 82, y0 = 230, H = 170; // U px per (λL/a)
  const X = (u) => x0 + u * U;
  const I = (u) => { if (Math.abs(u) < 1e-9) return 1; const b = Math.PI * u; return (Math.sin(b) / b) ** 2; };
  s += line(X(-4.1), y0, X(4.1), y0, { w: 2 }) + line(X(-4.1), y0, X(-4.1), y0 - H - 10, { w: 2 });
  s += ylab(X(-4.1) - 18, y0 - H / 2, "intensity");
  s += poly(sample(-3.95, 3.95, 900, (u) => [X(u), y0 - H * I(u)]), { stroke: RED, w: 3 });
  [-3, -2, -1, 0, 1, 2, 3].forEach((u) => s += line(X(u), y0, X(u), y0 + 5, { w: 1.5 }));
  s += text(X(0), y0 + 19, "0", { size: 11.5 });
  [[1, "λL/a"], [2, "2λL/a"], [3, "3λL/a"]].forEach(([u, l]) => s += text(X(u), y0 + 19, l, { size: 11.5 }) + text(X(-u), y0 + 19, "−" + l, { size: 11.5 }));
  [1, 2].forEach((m) => [-1, 1].forEach((sg) => s += circle(X(sg * m), y0, 4.5, { fill: "#fff", stroke: C.ink, w: 2 }) + text(X(sg * m), y0 - (m === 1 ? 36 : 30), `m = ${m}`, { size: 12, weight: "bold", fill: BLUE }) + line(X(sg * m), y0 - (m === 1 ? 32 : 26), X(sg * m), y0 - 8, { stroke: BLUE, w: 1.2 })));
  s += text(X(0.42), y0 - H + 12, "central maximum", { size: 12, weight: "bold", anchor: "start" });
  s += dbl(X(-1), y0 - H - 22, X(1), y0 - H - 22, { stroke: GREEN, marker: "ahg", w: 1.8 }) + text(X(-1) - 8, y0 - H - 18, "width 2λL/a", { size: 12, weight: "bold", fill: GREEN, anchor: "end" });
  s += text(X(2.9), y0 - 80, "side maxima: about 5%\nof the center, half as wide", { size: 11.5, fill: C.muted });
  s += text(X(4.1) + 4, y0 + 4, "y", { size: 13, weight: "bold", anchor: "start" });
  // screen strip
  const sy = 274, sh = 40;
  s += rect(X(-4), sy, 8 * U, sh, { fill: "#000", stroke: "#444", rx: 2 });
  for (let i = 0; i < 400; i++) { const u = -4 + 8 * (i + 0.5) / 400; const b = Math.pow(I(u), 0.33); s += `<rect x="${f1(X(u) - U * 8 / 800 - 0.3)}" y="${sy}" width="${f1(U * 8 / 400 + 0.6)}" height="${sh}" fill="#ff2a1a" opacity="${b.toFixed(3)}"/>`; }
  s += text(X(0), sy + sh + 18, "what the screen shows (dark bands at the minima; brightness of dim bands boosted so they show)", { size: 11.5, fill: C.muted });
  FIGS["single-slit-intensity"] = { svg: svg(760, 346, s, "Single-slit intensity graph with a tall central peak between the first minima at plus and minus lambda L over a, second minima at twice that, small side peaks, and the matching bright and dark bands on the screen"), caption: "Dark fringes sit at y = mλL/a for m = 1, 2, 3, … The central bright band runs from the m = 1 minimum on one side to the other, so it is twice as wide as each side band and far brighter." };
}

// 11. Double slit inside single-slit envelope, d = 4a (14.8)
{
  let s = defs + extraDefs + title("Double-slit fringes inside the single-slit envelope (d = 4a)");
  const x0 = 380, U = 36, y0 = 270, H = 200; // U px per fringe spacing λL/d
  const X = (u) => x0 + u * U;
  const env = (u) => { if (Math.abs(u) < 1e-9) return 1; const b = Math.PI * u / 4; return (Math.sin(b) / b) ** 2; };
  const I = (u) => Math.cos(Math.PI * u) ** 2 * env(u);
  s += line(X(-9.6), y0, X(9.6), y0, { w: 2 });
  s += text(X(9.6) + 6, y0 + 4, "y", { size: 13, weight: "bold", anchor: "start" });
  // magnified side lobes (x10)
  [[-8.9, -4], [4, 8.9]].forEach(([a, b]) => s += poly(sample(a, b, 400, (u) => [X(u), y0 - H * Math.min(0.45, 10 * I(u))]), { stroke: "#b9a6d6", w: 1.4 }));
  s += text(X(6.5), y0 - 104, "side fringes ×10", { size: 11.5, fill: PURPLE }) + text(X(-6.5), y0 - 104, "side fringes ×10", { size: 11.5, fill: PURPLE });
  s += poly(sample(-8.9, 8.9, 2400, (u) => [X(u), y0 - H * I(u)]), { stroke: RED, w: 2.4 });
  s += poly(sample(-8.9, 8.9, 600, (u) => [X(u), y0 - H * env(u)]), { stroke: C.ink, w: 1.8, dash: "6 5" });
  s += text(X(2.0) + 6, y0 - H * env(2) - 14, "single-slit envelope", { size: 12, weight: "bold", anchor: "start" });
  for (let m = -8; m <= 8; m++) { s += line(X(m), y0, X(m), y0 + 5, { w: 1.3 }); if (Math.abs(m) <= 3) s += text(X(m), y0 + 19, String(m), { size: 12, weight: "bold" }); }
    [-4, 4].forEach((m) => s += circle(X(m), y0, 5, { fill: "#fff", stroke: RED, w: 2.2 }) + text(X(m), y0 + 36, "m = " + (m > 0 ? "+4" : "−4") + "\nmissing order", { size: 11.5, weight: "bold", fill: RED }));
  s += dbl(X(-4), 62, X(4), 62, { stroke: GREEN, marker: "ahg", w: 1.8 }) + text(X(0), 46, "central envelope (width 2λL/a): 7 bright fringes, m = 0, ±1, ±2, ±3", { size: 12, weight: "bold", fill: GREEN });
  s += dbl(X(0), y0 + 76, X(1), y0 + 76, { stroke: BLUE, marker: "ahb", w: 1.6 }) + text(X(1) + 8, y0 + 81, "fringe spacing λL/d", { size: 11.5, weight: "bold", fill: BLUE, anchor: "start" });
  FIGS["slit-envelope-missing"] = { svg: svg(760, 368, s, "Intensity pattern of a double slit with d equal to 4a: narrow fringes under a dashed single-slit envelope, seven fringes in the central envelope and the m equals plus and minus 4 fringes missing"), caption: "The fringe spacing is set by the slit separation d; the envelope is set by the slit width a. With d = 4a the first envelope zero lands on m = ±4, so those fringes vanish, and the fringes outside are much dimmer (shown magnified)." };
}

// 12. White light on a grating (14.8): 600 lines/mm, d = 1667 nm
{
  let s = defs + title("White light through a grating (600 lines/mm): spectra at true angles");
  const gx = 150, gy = 230, R = 200, d = 1e6 / 600; // nm
  const pt = (deg, r) => [gx + r * Math.cos(deg * Math.PI / 180), gy - r * Math.sin(deg * Math.PI / 180)];
  // grating
  s += line(gx, gy - 70, gx, gy + 70, { w: 4, stroke: "#555" });
  for (let i = -6; i <= 6; i++) s += line(gx - 5, gy + i * 10, gx + 5, gy + i * 10, { w: 1.2, stroke: "#555" });
  s += text(gx - 4, gy + 92, "grating", { size: 12, weight: "bold" });
  [-14, 0, 14].forEach((dy) => s += arrow(30, gy + dy, gx - 8, gy + dy, { w: 2.5, stroke: "#999" }));
  s += text(70, gy - 24, "white\nlight", { size: 12, weight: "bold" });
  // screen arc
  let arcd = ""; for (let i = 0; i <= 80; i++) { const a = -66 + 132 * i / 80; const [x, y] = pt(a, R); arcd += (i ? " L " : "M ") + f1(x) + " " + f1(y); }
  s += path(arcd, { stroke: "#ccc", w: 16 });
  const ang = (m, l) => Math.asin(m * l / d) * 180 / Math.PI;
  // spectra on the arc
  [1, 2].forEach((m) => [1, -1].forEach((sg) => { for (let l = 400; l < 700; l += 3) { const a1 = sg * ang(m, l), a2 = sg * ang(m, Math.min(700, l + 3.6)); const p1 = pt(a1, R), p2 = pt(a2, R); s += line(p1[0], p1[1], p2[0], p2[1], { stroke: wl(l + 1.5), w: 16 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"'); } }));
  const p0a = pt(-1.2, R), p0b = pt(1.2, R); s += line(p0a[0], p0a[1], p0b[0], p0b[1], { stroke: "#fff", w: 16 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"') + path(`M ${f1(p0a[0] - 8)} ${f1(p0a[1] + 6)} L ${f1(p0b[0] - 8)} ${f1(p0b[1] - 6)}`, { stroke: "none" });
  s += circle(...pt(0, R), 9, { fill: "#fff", stroke: "#888", w: 1.5 });
  // rays to violet and red ends of order 1 (upper side) and to m = 0
  s += line(gx, gy, ...pt(0, R - 10), { stroke: "#999", w: 1.5, dash: "5 4" });
  [[400, 1], [700, 1], [400, 2], [700, 2]].forEach(([l, m]) => { const a = ang(m, l); s += line(gx, gy, ...pt(a, R - 10), { stroke: wl(l), w: 1.4 }); });
  // labels outside the arc
  const lab = (deg, r, t, o = {}) => { const [x, y] = pt(deg, r); return text(x, y + 4, t, { size: 12, anchor: "start", ...o }); };
  s += lab(0, R + 16, "m = 0 (white)", { weight: "bold" });
  s += lab(ang(1, 550), R + 16, "m = 1", { weight: "bold" }) + lab(-ang(1, 550), R + 16, "m = 1", { weight: "bold" });
  s += lab(ang(2, 550), R + 16, "m = 2", { weight: "bold" }) + lab(-ang(2, 550), R + 16, "m = 2", { weight: "bold" });
  s += lab(ang(1, 400) - 1.5, R + 64, "violet " + ang(1, 400).toFixed(0) + "°", { size: 11.5, fill: "#5b2aa8" }) + lab(ang(1, 700) + 1, R + 64, "red " + ang(1, 700).toFixed(0) + "°", { size: 11.5, fill: RED });
  s += text(gx + R + 92, gy - 78, "", {});
  // note
  const n1v = ang(1, 400), n1r = ang(1, 700), n2v = ang(2, 400), n2r = ang(2, 700), n3v = ang(3, 400);
  s += rect(470, 60, 270, 250, NOTE) + text(605, 84, "sin θ = mλ/d,  d = 1/600 mm ≈ 1.67 μm", { size: 12.5, weight: "bold" });
  s += text(605, 112, `m = 1:  violet (400 nm) ${n1v.toFixed(0)}°  →  red (700 nm) ${n1r.toFixed(0)}°`, { size: 12 });
  s += text(605, 136, `m = 2:  ${n2v.toFixed(0)}°  →  ${n2r.toFixed(0)}°  (twice as wide)`, { size: 12 });
  s += text(605, 168, "Violet is always nearest the center,\nred farthest out (opposite of a prism).", { size: 12, weight: "bold" });
  s += text(605, 222, `m = 3 starts at ${n3v.toFixed(0)}° (violet), inside the\nred end of m = 2: higher orders\noverlap.`, { size: 12 });
  s += text(605, 292, "Screen drawn as an arc so angles are true.", { size: 11.5, fill: C.muted });
  FIGS["white-light-grating"] = { svg: svg(760, 456, s, "White light passing through a 600 lines per millimeter grating: white central maximum, first-order spectra from about 14 to 25 degrees and wider second-order spectra from about 29 to 57 degrees, violet inner and red outer"), caption: "Only m = 0 is white. In every other order sin θ = mλ/d sends red farther out than violet, so each order is a rainbow with violet on the inside, and the second-order spectrum is spread over a much wider angle than the first." };
}
