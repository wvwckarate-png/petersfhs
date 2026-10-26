import React from "react";
import { Enso, InkRing } from "./Enso";

const BELT_DOTS = ["#3B7DD8", "#8B52CF", "#8A5A38"];
const PAGE_BELT = ["#2E6BC6", "#7A3FB8", "#7B4A2A"];

// The hub's mark: the ensō, painted through the belt colors.
export function EnsoMark({ size = 36 }) {
  return <Enso size={size} bristles={60} points={50} seed={11} splatter={false} />;
}

// Three keys placed around an ink ring: the "keys to the position" on every position page.
export function KeysRing({ keys }) {
  const [a, b, c] = keys;
  const P = [[200, 42], [261, 147], [139, 147]];
  const label = { fill: "#ECE6D8", fontFamily: "'Shippori Mincho',serif", fontWeight: 700, fontSize: 18 };
  return (
    <svg viewBox="0 0 400 230" width="100%" style={{ maxWidth: 380 }} role="img" aria-label={`Three keys: ${keys.join(", ")}`}>
      <InkRing x={100} y={10} size={200} seed={21} />
      {P.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="8" fill={BELT_DOTS[i]} stroke="#F4F1EA" strokeWidth="1.5" />)}
      <text x="200" y="26" textAnchor="middle" {...label}>{a}</text>
      <text x="277" y="172" textAnchor="start" {...label}>{b}</text>
      <text x="123" y="172" textAnchor="end" {...label}>{c}</text>
    </svg>
  );
}

// Three moves that answer each other, set around one ring: follow the numbered arrows clockwise.
export function SystemDiagram({ nodes }) {
  const cx = 160, cy = 150, R = 100;
  const ang = [-90, 30, 150];
  const at = (deg, r = R) => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  const arc = (a0, a1, i) => {
    const [x0, y0] = at(a0), [x1, y1] = at(a1), [mx, my] = at((a0 + a1) / 2, R + 22);
    return (
      <g key={i}>
        <path d={`M${x0} ${y0}A${R} ${R} 0 0 1 ${x1} ${y1}`} fill="none" stroke="#D8472E" strokeWidth="3" strokeLinecap="round" markerEnd="url(#jjarr)" />
        <text x={mx} y={my + 5} textAnchor="middle" fill="#7FB0F0" fontFamily="'Shippori Mincho',serif" fontWeight="800" fontSize="17">{i + 1}</text>
      </g>
    );
  };
  return (
    <svg viewBox="0 0 320 300" width="100%" style={{ maxWidth: 340 }} role="img" aria-label={`A cycle of ${nodes.map((n) => n.label).join(", ")}`}>
      <defs><marker id="jjarr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#D8472E" /></marker></defs>
      <InkRing x={cx - 106} y={cy - 106} size={212} seed={9} />
      {arc(ang[0] + 25, ang[1] - 25, 0)}{arc(ang[1] + 25, ang[2] - 25, 1)}{arc(ang[2] + 25, ang[0] + 360 - 25, 2)}
      {nodes.map((n, i) => {
        const [x, y] = at(ang[i]);
        const words = n.label.split(" ");
        const lines = words.length > 1 && n.label.length > 9 ? [words.slice(0, Math.ceil(words.length / 2)).join(" "), words.slice(Math.ceil(words.length / 2)).join(" ")] : [n.label];
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r="31" fill={PAGE_BELT[i]} stroke="#ECE6D8" strokeWidth="1.6" />
            {lines.map((ln, k) => <text key={k} x={x} y={y + 5 + (k - (lines.length - 1) / 2) * 14} textAnchor="middle" fill="#fff" fontFamily="'Shippori Mincho',serif" fontWeight="700" fontSize={ln.length > 8 ? 11 : 13}>{ln}</text>)}
          </g>
        );
      })}
    </svg>
  );
}
