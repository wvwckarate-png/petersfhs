import React from "react";

// The hub's mark: a triangle (the triangle choke, the three-point base of control) with an inner triangle and three nodes.
export function TriangleMark({ size = 30, color = "#D8472E", inner = "#ECE6D8" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5L44 41H4L24 5Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 18L35 37H13L24 18Z" stroke={inner} strokeWidth="2" strokeLinejoin="round" opacity="0.85" />
      <circle cx="24" cy="5" r="3.6" fill="#3B7DD8" stroke="#F4F1EA" strokeWidth="1" />
      <circle cx="44" cy="41" r="3.6" fill="#8B52CF" stroke="#F4F1EA" strokeWidth="1" />
      <circle cx="4" cy="41" r="3.6" fill="#8A5A38" stroke="#F4F1EA" strokeWidth="1" />
    </svg>
  );
}

// Three keys at the three corners of a triangle: the "keys to the position" for every position page.
export function KeysTriangle({ keys }) {
  const [a, b, c] = keys;
  return (
    <svg viewBox="0 0 300 220" width="100%" style={{ maxWidth: 320 }} role="img" aria-label={`Three keys: ${keys.join(", ")}`}>
      <path d="M150 34L262 184H38L150 34Z" stroke="#D8472E" strokeWidth="2.6" strokeLinejoin="round" fill="rgba(216,71,46,0.07)" />
      <path d="M150 78L222 174H78L150 78Z" stroke="#9AA3AE" strokeWidth="1.2" strokeDasharray="4 5" fill="none" />
      {[[150, 34, "#3B7DD8"], [262, 184, "#8B52CF"], [38, 184, "#8A5A38"]].map(([x, y, f], i) => <circle key={i} cx={x} cy={y} r="7.5" fill={f} stroke="#F4F1EA" strokeWidth="1.4" />)}
      <text x="150" y="20" textAnchor="middle" fill="#ECE6D8" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="19" letterSpacing="1">{a}</text>
      <text x="262" y="208" textAnchor="end" fill="#ECE6D8" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="19" letterSpacing="1">{b}</text>
      <text x="38" y="208" textAnchor="start" fill="#ECE6D8" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="19" letterSpacing="1">{c}</text>
    </svg>
  );
}

// Three moves that answer each other: a triangle of nodes with an arrow for each "if they do this, go there".
export function SystemDiagram({ nodes }) {
  const P = [[160, 38], [286, 232], [34, 232]];
  const arrow = (from, to, i) => {
    const [x1, y1] = P[from], [x2, y2] = P[to];
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len, off = 34;
    const sx = x1 + ux * off, sy = y1 + uy * off, ex = x2 - ux * off, ey = y2 - uy * off;
    const px = -uy * 10, py = ux * 10;
    return (
      <g key={i}>
        <path d={`M${sx + px} ${sy + py}L${ex + px} ${ey + py}`} stroke="#D8472E" strokeWidth="2.4" markerEnd="url(#jjarr)" />
        <text x={(sx + ex) / 2 + px * 2.2} y={(sy + ey) / 2 + py * 2.2 + 4} textAnchor="middle" fill="#7FB0F0" fontFamily="'Barlow Condensed',sans-serif" fontWeight="800" fontSize="15">{i + 1}</text>
      </g>
    );
  };
  return (
    <svg viewBox="0 0 320 270" width="100%" style={{ maxWidth: 340 }} role="img" aria-label={`A triangle of ${nodes.map((n) => n.label).join(", ")}`}>
      <defs><marker id="jjarr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#D8472E" /></marker></defs>
      <path d="M160 38L286 232H34L160 38Z" fill="rgba(216,71,46,0.05)" stroke="#2A313A" strokeWidth="1.5" />
      {arrow(0, 1, 0)}{arrow(1, 2, 1)}{arrow(2, 0, 2)}
      {nodes.map((n, i) => {
        const words = n.label.split(" ");
        const lines = words.length > 1 && n.label.length > 9 ? [words.slice(0, Math.ceil(words.length / 2)).join(" "), words.slice(Math.ceil(words.length / 2)).join(" ")] : [n.label];
        return (
          <g key={n.label}>
            <circle cx={P[i][0]} cy={P[i][1]} r="32" fill={["#2E6BC6", "#7A3FB8", "#7B4A2A"][i]} stroke="#ECE6D8" strokeWidth="1.6" />
            {lines.map((ln, k) => (
              <text key={k} x={P[i][0]} y={P[i][1] + 5 + (k - (lines.length - 1) / 2) * 14} textAnchor="middle" fill="#ECE6D8" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="14" letterSpacing=".4">{ln}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
