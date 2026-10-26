import React from "react";
import { Enso, Sankaku } from "./Enso";

const BELT_DOTS = ["#3B7DD8", "#8B52CF", "#8A5A38"];
const NODE_FILL = ["#2E6BC6", "#7A3FB8", "#7B4A2A"];

// The hub's mark: an ensō holding a sankaku (triangle), both painted through the belt colors.
export function EnsoMark({ size = 36, stops }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <Enso x={0} y={0} size={100} bristles={64} points={50} seed={11} splatter={false} stops={stops} />
      <Sankaku x={27} y={28} size={46} bristles={44} points={36} seed={4} thickness={15} radius={46} splatter={false} stops={stops} />
    </svg>
  );
}

// Split a label over two lines when it is long, so it can sit under a corner without running off the edge.
const lines2 = (t) => { if (t.length <= 12 || !t.includes(" ")) return [t]; const w = t.split(" "), h = Math.ceil(w.length / 2); return [w.slice(0, h).join(" "), w.slice(h).join(" ")]; };

// The three keys at the three corners of a brush triangle: the "keys to the position" on every position page.
export function KeysRing({ keys }) {
  const [a, b, c] = keys;
  const P = [[200, 52], [275, 181], [125, 181]];
  const label = { fill: "#ECE6D8", fontFamily: "'Shippori Mincho',serif", fontWeight: 700, fontSize: 18, textAnchor: "middle" };
  const text = (t, x, y) => lines2(t).map((ln, i) => <text key={t + i} x={x} y={y + i * 21} {...label}>{ln}</text>);
  return (
    <svg viewBox="0 0 400 260" width="100%" style={{ maxWidth: 380 }} role="img" aria-label={`Three keys: ${keys.join(", ")}`}>
      <Sankaku x={100} y={26} size={200} bristles={70} points={60} thickness={9} radius={50} seed={21} splatter={false} />
      {P.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="8" fill={BELT_DOTS[i]} stroke="#F4F1EA" strokeWidth="1.5" />)}
      {text(a, 200, 20)}{text(b, 275, 218)}{text(c, 125, 218)}
    </svg>
  );
}

// Three moves that answer each other, at the corners of a brush triangle: follow the numbered arrows clockwise.
export function SystemDiagram({ nodes }) {
  const P = [[160, 45], [261, 219], [59, 219]];
  const cen = [(P[0][0] + P[1][0] + P[2][0]) / 3, (P[0][1] + P[1][1] + P[2][1]) / 3];
  const R = 32;
  const edge = (i) => {
    const [x0, y0] = P[i], [x1, y1] = P[(i + 1) % 3];
    const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
    let nx = (x0 + x1) / 2 - cen[0], ny = (y0 + y1) / 2 - cen[1]; const nl = Math.hypot(nx, ny); nx /= nl; ny /= nl; // outward
    const s = [x0 + ux * (R + 8) + nx * 24, y0 + uy * (R + 8) + ny * 24], e = [x1 - ux * (R + 8) + nx * 24, y1 - uy * (R + 8) + ny * 24];
    return (
      <g key={i}>
        <path d={`M${s[0]} ${s[1]}L${e[0]} ${e[1]}`} stroke="#D8472E" strokeWidth="3" strokeLinecap="round" markerEnd="url(#jjarr)" />
        <text x={(s[0] + e[0]) / 2 + nx * 15} y={(s[1] + e[1]) / 2 + ny * 15 + 5} textAnchor="middle" fill="#7FB0F0" fontFamily="'Shippori Mincho',serif" fontWeight="800" fontSize="17">{i + 1}</text>
      </g>
    );
  };
  return (
    <svg viewBox="0 0 320 290" width="100%" style={{ maxWidth: 340 }} role="img" aria-label={`A cycle of ${nodes.map((n) => n.label).join(", ")}`}>
      <defs><marker id="jjarr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#D8472E" /></marker></defs>
      <Sankaku x={25} y={10} size={270} bristles={70} points={60} thickness={8} radius={50} seed={9} splatter={false} />
      {[0, 1, 2].map(edge)}
      {nodes.map((n, i) => {
        const [x, y] = P[i];
        const words = n.label.split(" ");
        const lines = words.length > 1 && n.label.length > 9 ? [words.slice(0, Math.ceil(words.length / 2)).join(" "), words.slice(Math.ceil(words.length / 2)).join(" ")] : [n.label];
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r={R} fill={NODE_FILL[i]} stroke="#ECE6D8" strokeWidth="1.6" />
            {lines.map((ln, k) => <text key={k} x={x} y={y + 5 + (k - (lines.length - 1) / 2) * 14} textAnchor="middle" fill="#fff" fontFamily="'Shippori Mincho',serif" fontWeight="700" fontSize={ln.length > 8 ? 11 : 13}>{ln}</text>)}
          </g>
        );
      })}
    </svg>
  );
}
