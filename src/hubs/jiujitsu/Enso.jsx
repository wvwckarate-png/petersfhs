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
    const u = (k + 0.5) / n, e = Math.abs(2 * u - 1), off0 = (u - 0.5) * width;
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

export function Brush({ shape = "circle", size = 120, progress = 1, stops = BELT_STOPS, bristles = 110, points = 90, seed = 11, thickness = 17, radius, start = 108, sweep = 326, drift = 2.6, splatter = true, style, title, x, y }) {
  const uid = useId().replace(/:/g, "");
  const tri = shape === "triangle";
  const geo = useMemo(() => (tri ? triangleShape({ radius: radius ?? 40, sweepFrac: sweep / 360 > 0.99 ? 0.93 : sweep / 360, drift: drift * 0.5 }) : circleShape({ radius: radius ?? 35.5, start, sweep, drift })), [tri, radius, start, sweep, drift]);
  const data = useMemo(() => buildBristles({ n: bristles, points, seed, width: thickness, curve: geo.curve }), [bristles, points, seed, thickness, geo]);
  const wedges = useMemo(() => {
    const W = 140, pad = 10, list = [], span = geo.sweep + pad * 2; // pad: bristles at the ends sit a little outside the nominal angle
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
  const vis = (b) => Math.max(0, Math.min(1, (p - b.t0) / (b.t1 - b.t0 || 1)));
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 100 100" style={style} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <mask id={`m${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="black" />
          <g stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {data.map((b, i) => <path key={i} d={b.d} pathLength="1" strokeWidth={b.w} strokeOpacity={b.o} strokeDasharray={`${vis(b)} 2`} />)}
          </g>
        </mask>
      </defs>
      {/* a pale rim under the ink so the black and the red stay readable on a dark page */}
      <g stroke="#C9D0DA" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        {data.map((b, i) => <path key={i} d={b.d} pathLength="1" strokeWidth={b.w * 1.9} strokeOpacity={b.o * 0.55} strokeDasharray={`${vis(b)} 2`} />)}
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
