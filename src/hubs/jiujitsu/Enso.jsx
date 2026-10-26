import React, { useId, useMemo } from "react";

// The ensō: one dry-brush circle, painted white → blue → purple → brown → black, closing in red.
// The brush is built from many bristles (arcs of slightly different radius that run out at different lengths),
// so the stroke is heavy where it starts, thins, and breaks into streaks where it ends.
export const BELT_STOPS = [[0, "#F4F1EA"], [0.2, "#2E6BC6"], [0.42, "#7A3FB8"], [0.64, "#7B4A2A"], [0.84, "#07080A"], [1, "#D8472E"]];
export const WATER_STOPS = [[0, "#BFD9FA"], [0.5, "#2E6BC6"], [1, "#1B3F7A"]];
export const DUSK_STOPS = [[0, "#E4D3F7"], [0.5, "#7A3FB8"], [1, "#3B1F66"]];
export const FIRE_STOPS = [[0, "#F4F1EA"], [0.45, "#E8643C"], [1, "#D8472E"]];

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
function rng(seed) { // small deterministic PRNG so every ensō with the same seed looks identical
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const CX = 50, CY = 50;
const pt = (r, deg) => { const a = (deg * Math.PI) / 180; return [CX + r * Math.cos(a), CY + r * Math.sin(a)]; };

function buildBristles({ n, points, seed, radius, width, start, sweep, drift }) {
  const rand = rng(seed), out = [];
  for (let k = 0; k < n; k++) {
    const u = (k + 0.5) / n, e = Math.abs(2 * u - 1);
    const r0 = radius + (u - 0.5) * width;
    const t0 = rand() * 0.012;
    let tFull = Math.pow(Math.max(0.0001, (1 - e * 0.94) / 0.8), 1 / 1.2);
    let t1 = Math.min(1, Math.max(0.42, tFull + (rand() - 0.4) * 0.14));
    if (rand() < 0.14) t1 = 0.5 + rand() * 0.35; // dry streaks that give out early
    if (e < 0.55 && rand() < 0.55) t1 = Math.min(1, t1 + 0.12);
    const wob = rand() * 6.28, amp = 0.25 + rand() * 0.5;
    let d = "", gap = 0, pen = false;
    for (let i = 0; i <= points; i++) {
      const t = t0 + ((t1 - t0) * i) / points;
      if (gap > 0) { gap--; pen = false; continue; }
      if (t > 0.42 && rand() < 0.035 + (t - 0.42) * 0.22) { gap = 2 + Math.floor(rand() * 5); pen = false; continue; } // the brush runs dry
      const r = r0 + (rand() - 0.5) * 0.16 - drift * t + Math.sin(t * 9 + wob) * amp * 0.45; // drifts inward like a hand
      const [x, y] = pt(r, start + t * sweep);
      d += `${pen ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`;
      pen = true;
    }
    out.push({ d, t0, t1, w: (width / n) * (2.0 + rand() * 1.8), o: 0.7 + rand() * 0.3 });
  }
  return out;
}

export function Enso({ size = 120, progress = 1, stops = BELT_STOPS, bristles = 110, points = 90, seed = 11, thickness = 17, radius = 35.5, start = 108, sweep = 326, drift = 2.6, splatter = true, style, title, x, y }) {
  const uid = useId().replace(/:/g, "");
  const data = useMemo(() => buildBristles({ n: bristles, points, seed, radius, width: thickness, start, sweep, drift }), [bristles, points, seed, radius, thickness, start, sweep, drift]);
  const wedges = useMemo(() => {
    const W = 120, list = [];
    for (let j = 0; j < W; j++) {
      const a0 = start + (j / W) * sweep - 0.4, a1 = start + ((j + 1) / W) * sweep + 0.4;
      const [x0, y0] = pt(60, a0), [x1, y1] = pt(60, a1);
      list.push({ d: `M${CX} ${CY}L${x0.toFixed(2)} ${y0.toFixed(2)}L${x1.toFixed(2)} ${y1.toFixed(2)}Z`, c: colorAt(stops, (j + 0.5) / W) });
    }
    return list;
  }, [stops, start, sweep]);
  const dots = useMemo(() => {
    const r = rng(seed + 99), arr = [];
    for (let i = 0; i < 9; i++) { const t = 0.86 + r() * 0.14, [px, py] = pt(radius + (r() - 0.5) * thickness * 2.2, start + t * sweep + r() * 8); arr.push({ px, py, s: 0.35 + r() * 0.8, t }); }
    return arr;
  }, [seed, radius, thickness, start, sweep]);
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
      <g stroke="#9AA3AE" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.28">
        {data.map((b, i) => <path key={i} d={b.d} pathLength="1" strokeWidth={b.w * 1.9} strokeOpacity={b.o * 0.5} strokeDasharray={`${vis(b)} 2`} />)}
      </g>
      <g mask={`url(#m${uid})`}>
                {wedges.map((w, i) => <path key={i} d={w.d} fill={w.c} />)}
      </g>
      {splatter && p > 0.97 && dots.map((d, i) => <circle key={i} cx={d.px} cy={d.py} r={d.s} fill={colorAt(stops, d.t)} opacity="0.9" />)}
    </svg>
  );
}

// A quiet, thin ring with a brush-like edge for diagrams.
export function InkRing({ size = 100, stops = BELT_STOPS, seed = 5, ...rest }) {
  return <Enso size={size} stops={stops} bristles={26} points={50} thickness={3.2} radius={40} seed={seed} splatter={false} {...rest} />;
}

// Progress mark for a position (0..4): the ring fills in with the belt colors.
const BELT = ["#F4F1EA", "#2E6BC6", "#7A3FB8", "#7B4A2A", "#07080A"];
export function StatusRing({ status = 0, size = 18 }) {
  const f = status / 4, C = 2 * Math.PI * 14;
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill={status === 4 ? "#07080A" : "none"} stroke="#3A414C" strokeWidth="4" />
      {status > 0 && <circle cx="18" cy="18" r="14" fill="none" stroke={status === 4 ? "#D8472E" : BELT[status]} strokeWidth="4.6" strokeLinecap="round" strokeDasharray={`${C * (status === 4 ? 1 : f)} ${C}`} transform="rotate(100 18 18)" />}
      {status === 4 && <circle cx="18" cy="18" r="14" fill="none" stroke="#F4F1EA" strokeWidth="1" opacity="0.7" />}
    </svg>
  );
}
