import React, { useId, useMemo } from "react";

// One dry-brush painter, two shapes: the ensō (circle) and the sankaku (triangle), both painted through the belt colors
// (white, blue, purple, brown, black) and closing in red. The brush is many bristles: arcs at slightly different offsets
// that run out at different lengths, so the stroke is heavy where it starts, thins, and breaks into streaks where it ends.
export const BELT_STOPS = [[0, "#F4F1EA"], [0.16, "#2E6BC6"], [0.34, "#7A3FB8"], [0.52, "#8B5A38"], [0.68, "#030304"], [0.83, "#030304"], [0.89, "#C8341C"], [1, "#F04A28"]];
export const WATER_STOPS = [[0, "#BFD9FA"], [0.5, "#2E6BC6"], [1, "#1B3F7A"]];
export const DUSK_STOPS = [[0, "#E4D3F7"], [0.5, "#7A3FB8"], [1, "#3B1F66"]];
export const LIGHT_BG_STOPS = [[0, "#2E6BC6"], [0.3, "#7A3FB8"], [0.52, "#7B4A2A"], [0.7, "#050507"], [0.84, "#050507"], [0.9, "#C8341C"], [1, "#F04A28"]];

const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
function colorAt(stops, t) {
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, c0] = stops[i - 1], [t1, c1] = stops[i];
      const f = (t - t0) / (t1 - t0 || 1), a = hex(c0), b = hex(c1);
      return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * f)).join(",")})`;
    }
  }
  return stops[stops.length - 1][1];
}
function rng(seed) { // deterministic, so every brush with the same seed looks identical
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---- shapes: each gives curve(t, off) -> [x, y] (t along the stroke, off across it), the wedge center, and the wedge start/sweep ----
function circleShape({ radius, start, sweep, drift }) {
  const rad = (d) => (d * Math.PI) / 180;
  return { cx: 50, cy: 50, a0: start, sweep, curve: (t, off) => { const r = radius + off - drift * t, a = rad(start + t * sweep); return [50 + r * Math.cos(a), 50 + r * Math.sin(a)]; } };
}
function triangleShape({ radius, sweepFrac, drift }) {
  // A rounded equilateral triangle traced clockwise from the lower-left corner. `radius` is the circumradius of the centerline.
  const cx = 50, cy = 56, rc = 7, rho = radius - rc * 2; // inner triangle circumradius; the stroke centerline is offset by rc
  const ang = [150, 270, 30]; // lower-left, top, lower-right (degrees, SVG, clockwise)
  const V = ang.map((d) => [cx + rho * Math.cos((d * Math.PI) / 180), cy + rho * Math.sin((d * Math.PI) / 180)]);
  const side = rho * Math.sqrt(3), arcLen = (rc * 2 * Math.PI) / 3, seg = side + arcLen, total = seg * 3;
  const normAng = (k) => { const a = V[k], b = V[(k + 1) % 3], mx = (a[0] + b[0]) / 2 - cx, my = (a[1] + b[1]) / 2 - cy; return Math.atan2(my, mx); };
  const curve = (t, off) => {
    const d = Math.min(1, t) * sweepFrac * total, k = Math.min(2, Math.floor(d / seg)), s = d - k * seg;
    const a = V[k], b = V[(k + 1) % 3];
    if (s <= side) {
      const u = s / side, n = normAng(k), r = rc + off - drift * t;
      return [a[0] + (b[0] - a[0]) * u + r * Math.cos(n), a[1] + (b[1] - a[1]) * u + r * Math.sin(n)];
    }
    const th = normAng(k) + ((s - side) / arcLen) * ((2 * Math.PI) / 3), r = rc + off - drift * t;
    return [b[0] + r * Math.cos(th), b[1] + r * Math.sin(th)];
  };
  const [sx, sy] = curve(0, 0);
  return { cx, cy, a0: (Math.atan2(sy - cy, sx - cx) * 180) / Math.PI, sweep: sweepFrac * 360, curve };
}

function buildBristles({ n, points, seed, width, curve }) {
  const rand = rng(seed), out = [];
  for (let k = 0; k < n; k++) {
    const u0 = (k + 0.5) / n, u = 0.5 + Math.sign(u0 - 0.5) * Math.pow(Math.abs(2 * u0 - 1), 0.8) / 2, e = Math.abs(2 * u - 1), off0 = (u - 0.5) * width * 1.12; // spread beyond the body so the edges feather
    const t0 = rand() * 0.012;
    // The stroke narrows to ~45% of its width by the end, so the red tail keeps body and still frays into streaks.
    const tFull = Math.pow(Math.max(0.0001, (1 - e * 0.95) / 0.55), 1 / 1.4);
    let t1 = Math.min(1, Math.max(0.45, tFull + (rand() - 0.4) * 0.12));
    if (rand() < 0.12) t1 = 0.55 + rand() * 0.35; // dry streaks that give out early
    const wob = rand() * 6.28, amp = 0.25 + rand() * 0.5;
    let d = "", gap = 0, pen = false;
    for (let i = 0; i <= points; i++) {
      const t = t0 + ((t1 - t0) * i) / points;
      if (gap > 0) { gap--; pen = false; continue; }
      if (t > 0.5 && rand() < 0.03 + (t - 0.5) * 0.16) { gap = 2 + Math.floor(rand() * 4); pen = false; continue; } // the brush runs dry
      const [x, y] = curve(t, off0 + (rand() - 0.5) * 0.16 + Math.sin(t * 9 + wob) * amp * 0.45);
      d += `${pen ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`;
      pen = true;
    }
    out.push({ d, t0, t1, w: (width / n) * (2.0 + rand() * 1.8), o: 0.72 + rand() * 0.28 });
  }
  return out;
}

// The solid body of the stroke: overlapping round-capped segments that narrow slightly, then taper where the ink runs thin.
function buildCore({ curve, thickness, seed, segs = 16 }) {
  const rand = rng(seed + 7), out = [], END = 0.84;
  for (let i = 0; i < segs; i++) {
    const ta = (i / segs) * END, tb = Math.min(END, ((i + 1.6) / segs) * END), mid = (ta + tb) / 2;
    const prof = mid < 0.6 ? 1 - 0.1 * mid : 0.94 - (mid - 0.6) * 2.1;
    let d = "";
    for (let k = 0; k <= 8; k++) { const t = ta + ((tb - ta) * k) / 8, [x, y] = curve(t, (rand() - 0.5) * 0.9); d += `${k ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`; }
    out.push({ d, ta, tb, w: thickness * Math.max(0.3, prof) * (i === 0 ? 0.9 : 0.74 + rand() * 0.07) });
  }
  return out;
}
// Thin gaps cut through the body where the brush skipped: more of them toward the dry end.
function buildScratches({ curve, thickness, seed, n }) {
  const rand = rng(seed + 31), out = [];
  for (let i = 0; i < n; i++) {
    const u = (rand() - 0.5) * 0.8, ts = 0.22 + rand() * 0.62, te = Math.min(0.98, ts + 0.05 + rand() * 0.16);
    let d = "";
    for (let k = 0; k <= 14; k++) { const t = ts + ((te - ts) * k) / 14, [x, y] = curve(t, u * thickness * 0.7 + Math.sin(t * 20 + i) * 0.12); d += `${k ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`; }
    out.push({ d, w: Math.max(0.1, thickness * (0.008 + rand() * 0.022)), o: 0.7 + rand() * 0.3 });
  }
  return out;
}

export function Brush({ shape = "circle", size = 120, progress = 1, stops = BELT_STOPS, bristles = 150, points = 90, seed = 11, thickness = 19, radius, start = 108, sweep = 326, drift = 2.6, splatter = true, style, title, x, y }) {
  const uid = useId().replace(/:/g, "");
  const tri = shape === "triangle";
  const geo = useMemo(() => (tri ? triangleShape({ radius: radius ?? 40, sweepFrac: sweep / 360 > 0.99 ? 0.93 : sweep / 360, drift: drift * 0.5 }) : circleShape({ radius: radius ?? 35.5, start, sweep, drift })), [tri, radius, start, sweep, drift]);
  const data = useMemo(() => buildBristles({ n: bristles, points, seed, width: thickness, curve: geo.curve }), [bristles, points, seed, thickness, geo]);
  const core = useMemo(() => buildCore({ curve: geo.curve, thickness, seed }), [geo, thickness, seed]);
  const scratches = useMemo(() => buildScratches({ curve: geo.curve, thickness, seed, n: Math.round(bristles / 12) }), [geo, thickness, seed, bristles]);
  const wedges = useMemo(() => {
    const W = 140, pad = 18, list = [], span = geo.sweep + pad * 2; // pad: bristles at the ends sit a little outside the nominal angle
    for (let j = 0; j < W; j++) {
      const a0 = geo.a0 - pad + (j / W) * span - 0.4, a1 = geo.a0 - pad + ((j + 1) / W) * span + 0.4, p = (a) => [geo.cx + 70 * Math.cos((a * Math.PI) / 180), geo.cy + 70 * Math.sin((a * Math.PI) / 180)];
      const [x0, y0] = p(a0), [x1, y1] = p(a1), t = Math.max(0, Math.min(1, ((j + 0.5) / W * span - pad) / geo.sweep));
      list.push({ d: `M${geo.cx} ${geo.cy}L${x0.toFixed(2)} ${y0.toFixed(2)}L${x1.toFixed(2)} ${y1.toFixed(2)}Z`, c: colorAt(stops, t) });
    }
    return list;
  }, [stops, geo]);
  const dots = useMemo(() => {
    const r = rng(seed + 99), arr = [];
    for (let i = 0; i < 11; i++) { const t = 0.84 + r() * 0.16, [px, py] = geo.curve(t, (r() - 0.4) * thickness * 2.4); arr.push({ px: px + (r() - 0.3) * 4, py: py + (r() - 0.3) * 4, s: 0.4 + r() * 0.95, t }); }
    return arr;
  }, [seed, thickness, geo]);
  const p = Math.max(0, Math.min(1, progress));
  const segVis = (c) => Math.max(0, Math.min(1, (p - c.ta) / (c.tb - c.ta || 1)));
  const vis = (b) => Math.max(0, Math.min(1, (p - b.t0) / (b.t1 - b.t0 || 1)));
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 100 100" style={style} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <mask id={`r${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="white" />
          <g stroke="black" fill="none" strokeLinecap="round">{scratches.map((c, i) => <path key={i} d={c.d} strokeWidth={c.w * 1.4} />)}</g>
        </mask>
        <mask id={`m${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="black" />
          <g stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {core.map((c, i) => segVis(c) > 0.002 && <path key={`c${i}`} d={c.d} pathLength="1" strokeWidth={c.w} strokeDasharray={`${segVis(c)} 2`} />)}
            {data.map((b, i) => vis(b) > 0.002 && <path key={i} d={b.d} pathLength="1" strokeWidth={b.w} strokeOpacity={b.o} strokeDasharray={`${vis(b)} 2`} />)}
          </g>
          <g stroke="black" fill="none" strokeLinecap="round">
            {scratches.map((c, i) => <path key={`s${i}`} d={c.d} strokeWidth={c.w} strokeOpacity={c.o} />)}
          </g>
        </mask>
      </defs>
      {/* a pale rim under the ink so the black and the red stay readable on a dark page; the scratches cut through it too */}
      <g mask={`url(#r${uid})`}>
        <g stroke="#C9D0DA" fill="none" strokeLinecap="butt" strokeLinejoin="round" opacity="0.38">
          {core.map((c, i) => segVis(c) > 0.002 && <path key={`c${i}`} d={c.d} pathLength="1" strokeWidth={c.w * 1.14} strokeDasharray={`${segVis(c)} 2`} />)}
        </g>
      </g>
      <g mask={`url(#m${uid})`}>{wedges.map((w, i) => <path key={i} d={w.d} fill={w.c} />)}</g>
      {splatter && p > 0.97 && dots.map((d, i) => <circle key={i} cx={d.px} cy={d.py} r={d.s} fill={colorAt(stops, d.t)} stroke="#C9D0DA" strokeOpacity="0.4" strokeWidth="0.25" />)}
    </svg>
  );
}

export const Enso = (props) => <Brush shape="circle" {...props} />;
export const Sankaku = (props) => <Brush shape="triangle" {...props} />;

// A quiet, thin ring or triangle with a brush-like edge for diagrams.
export function InkRing({ size = 100, shape = "circle", seed = 5, ...rest }) {
  return <Brush shape={shape} size={size} bristles={26} points={50} thickness={3.2} radius={shape === "triangle" ? 40 : 40} seed={seed} splatter={false} {...rest} />;
}

// Progress mark for a position (0..4): the ring fills in with the belt colors.
const BELT = ["#F4F1EA", "#2E6BC6", "#7A3FB8", "#8B5A38", "#030304"];
export function StatusRing({ status = 0, size = 18 }) {
  const f = status / 4, C = 2 * Math.PI * 14;
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill={status === 4 ? "#030304" : "none"} stroke="#3A414C" strokeWidth="4" />
      {status > 0 && <circle cx="18" cy="18" r="14" fill="none" stroke={status === 4 ? "#F04A28" : BELT[status]} strokeWidth="4.6" strokeLinecap="round" strokeDasharray={`${C * (status === 4 ? 1 : f)} ${C}`} transform="rotate(100 18 18)" />}
      {status === 4 && <circle cx="18" cy="18" r="14" fill="none" stroke="#F4F1EA" strokeWidth="1" opacity="0.7" />}
    </svg>
  );
}
