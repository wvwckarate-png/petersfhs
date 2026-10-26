import React, { useEffect, useRef, useState } from "react";
import { C } from "./theme";

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function beep(freq = 880, ms = 160) {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx(), o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = freq; o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.15, ctx.currentTime); o.start(); o.stop(ctx.currentTime + ms / 1000);
    setTimeout(() => ctx.close(), ms + 100);
  } catch { /* sound is optional */ }
}

// Round timer: work / rest / rounds, with a beep at each change.
export default function Timer({ work: w0 = 180, rest: r0 = 30, rounds: n0 = 3, compact = false }) {
  const [work, setWork] = useState(w0), [rest, setRest] = useState(r0), [rounds, setRounds] = useState(n0);
  const [phase, setPhase] = useState("idle"); // idle | work | rest | done
  const [round, setRound] = useState(1);
  const [left, setLeft] = useState(w0);
  const ref = useRef({});
  ref.current = { work, rest, rounds, phase, round, left };

  useEffect(() => {
    if (phase !== "work" && phase !== "rest") return undefined;
    const id = setInterval(() => {
      const s = ref.current;
      if (s.left > 1) { if (s.left <= 4) beep(660, 90); setLeft(s.left - 1); return; }
      if (s.phase === "work") {
        if (s.round >= s.rounds) { setPhase("done"); setLeft(0); beep(520, 600); }
        else if (s.rest > 0) { setPhase("rest"); setLeft(s.rest); beep(520, 350); }
        else { setRound(s.round + 1); setLeft(s.work); beep(990, 300); }
      } else { setPhase("work"); setRound(s.round + 1); setLeft(s.work); beep(990, 300); }
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const start = () => { setPhase("work"); setRound(1); setLeft(work); beep(990, 300); };
  const stop = () => { setPhase("idle"); setLeft(work); };
  const running = phase === "work" || phase === "rest";
  const color = phase === "rest" ? C.blue : phase === "done" ? C.white : C.red;
  const num = (label, val, set, min, max, step) => (
    <label style={{ display: "flex", flexDirection: "column", fontSize: 12, color: C.muted, fontWeight: 700 }}>
      {label}
      <input type="number" min={min} max={max} step={step} value={val} disabled={running} onChange={(e) => { const v = Math.max(min, Math.min(max, +e.target.value || min)); set(v); if (label === "Round (sec)") setLeft(v); }} style={{ width: 92, marginTop: 4 }} />
    </label>
  );
  return (
    <div className="jj-card" style={{ textAlign: "center", borderColor: running ? color : C.line }}>
      <div className="jj-eyebrow" style={{ color }}>{phase === "idle" ? "Ready" : phase === "done" ? "Finished" : phase === "rest" ? "Rest" : `Round ${round} of ${rounds}`}</div>
      <div className="display" style={{ fontSize: compact ? 64 : 96, fontWeight: 800, lineHeight: 1, color, fontVariantNumeric: "tabular-nums" }}>{fmt(left)}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10, margin: "14px 0" }}>
        {!running ? <button className="jj-btn" onClick={start}>{phase === "done" ? "Run again" : "Start"}</button> : <button className="jj-btn ghost" onClick={stop}>Stop</button>}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        {num("Round (sec)", work, setWork, 30, 900, 30)}
        {num("Rest (sec)", rest, setRest, 0, 300, 5)}
        {num("Rounds", rounds, setRounds, 1, 20, 1)}
      </div>
    </div>
  );
}
