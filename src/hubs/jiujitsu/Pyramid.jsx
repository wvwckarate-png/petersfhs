import React from "react";
import { TIERS } from "./data";
import { Enso } from "./Enso";

// The positional hierarchy as concentric ink rings: you start on the outside (white belt, standing)
// and move inward toward the finish (black, with a red seal at the center).
const RINGS = ["#F4F1EA", "#2E6BC6", "#7A3FB8", "#8B5A38", "#14161A"];
const RADIUS = [44, 35.5, 27, 18.5, 10];

export default function Pyramid({ selected, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
      <svg viewBox="0 0 220 220" width="100%" style={{ maxWidth: 250, flex: "0 0 auto", margin: "0 auto" }} role="img" aria-label="Positional hierarchy as five rings">
        {TIERS.map((t, i) => (
          <g key={t.id} opacity={selected && selected !== t.id ? 0.35 : 1}>
            <Enso size={220} stops={[[0, RINGS[i]], [1, RINGS[i]]]} radius={RADIUS[i]} thickness={i === 4 ? 9 : 7.4} bristles={44} points={64} seed={30 + i} sweep={340} start={100 + i * 55} drift={0.5} splatter={false} />
          </g>
        ))}
        <circle cx="110" cy="110" r="22" fill="#0A0B0D" stroke="#ECE6D8" strokeOpacity=".55" strokeWidth="1" />
        <circle cx="110" cy="110" r="7" fill="#D8472E" />
        {TIERS.map((t, i) => (
          <circle key={t.id} cx="110" cy="110" r={RADIUS[i] * 2.2} fill="none" stroke="transparent" strokeWidth="26" style={{ cursor: "pointer" }} onClick={() => onSelect(selected === t.id ? null : t.id)}><title>{t.name}</title></circle>
        ))}
        {selected && <circle cx="110" cy="110" r={RADIUS[TIERS.findIndex((t) => t.id === selected)] * 2.2} fill="none" stroke="#ECE6D8" strokeWidth="1" strokeDasharray="3 4" />}
      </svg>
      <div role="list" style={{ flex: 1, minWidth: 220 }}>
        {[...TIERS].reverse().map((tier, row) => {
          const i = TIERS.length - 1 - row, on = selected === tier.id;
          return (
            <button key={tier.id} role="listitem" className="jj-tier" onClick={() => onSelect(on ? null : tier.id)} aria-pressed={on} style={{ padding: "8px 0", alignItems: "center", opacity: selected && !on ? 0.55 : 1 }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: RINGS[i], border: "1.5px solid #ECE6D8", flex: "0 0 auto" }} />
              <span className="jj-tier-label" style={{ paddingLeft: 12 }}>
                <span className="jj-eyebrow">{tier.note} · ring {i + 1}</span>
                <span className="display" style={{ fontSize: 21, fontWeight: 700, color: on ? "#fff" : "#ECE6D8" }}>{tier.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
