import React from "react";
import { TIERS } from "./data";

// The positional hierarchy as a pyramid: climb from standing to the finish. Each row is a clickable tier.
// White, blue, purple, brown, black: the belts, climbing to the apex.
const SHADES = ["#E9E6DE", "#2E6BC6", "#7A3FB8", "#7B4A2A", "#050607"];

export default function Pyramid({ selected, onSelect }) {
  const n = TIERS.length;
  return (
    <div role="list">
      {[...TIERS].reverse().map((tier, row) => {
        const i = n - 1 - row; // tier index, base = 0
        const topW = (row / n) * 100, botW = ((row + 1) / n) * 100;
        const l1 = 50 - topW / 2, r1 = 50 + topW / 2, l2 = 50 - botW / 2, r2 = 50 + botW / 2;
        const on = selected === tier.id;
        return (
          <button key={tier.id} className="jj-tier" role="listitem" onClick={() => onSelect(on ? null : tier.id)} aria-pressed={on} style={{ height: 66 }}>
            <svg viewBox="0 0 100 66" preserveAspectRatio="none" width="42%" height="66" aria-hidden="true">
              <polygon points={`${l1},0 ${r1},0 ${r2},66 ${l2},66`} fill={SHADES[i]} stroke={on || i === 4 ? "#ECE6D8" : "#0E1114"} strokeWidth={on ? 1.6 : 1} vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="jj-tier-label">
              <span className="jj-eyebrow" style={{ color: "#D8472E" }}>{tier.note} · tier {i + 1}</span>
              <span className="display" style={{ fontSize: 22, fontWeight: 700, color: on ? "#fff" : "#ECE6D8" }}>{tier.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
