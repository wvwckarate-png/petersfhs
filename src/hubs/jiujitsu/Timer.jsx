import React, { useEffect, useRef, useState } from "react";
import { C } from "./theme";
import { Enso, BELT_STOPS, WATER_STOPS, DUSK_STOPS } from "./Enso";

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const ROUND_CHOICES = [120, 180, 240, 300, 360, 480];
const REST_CHOICES = [0, 30, 60, 120, 180];
const ROUND_COUNTS = [1, 2, 3, 4, 5, 6, 8, 10, 0]; // 0 = infinite
const PRESETS = [
  { name: "Drill rounds", work: 180, rest: 30, rounds: 5 },
  { name: "Positional spar", work: 300, rest: 60, rounds: 6 },
  { name: "Class rounds", work: 300, rest: 60, rounds: 0 },
  { name: "Comp sim", work: 360, rest: 120, rounds: 3 },
];

let audioCtx = null;
function beep(freq = 880, ms = 160, on = true) {
  if (!on) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audioCtx = audioCtx || new Ctx();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = freq; o.connect(g); g.connect(audioCtx.destination);
    g.gain.setValueAtTime(0.18, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + ms / 1000);
    o.start(); o.stop(audioCtx.currentTime + ms / 1000);
  } catch { /* sound is optional */ }
}

const Chip = ({ on, children, onClick, disabled }) => (
  <button type="button" disabled={disabled} onClick={onClick} aria-pressed={on} className="jj-chip" style={{ padding: "7px 13px", borderColor: on ? C.red : C.line, background: on ? "rgba(216,71,46,.18)" : C.panel2, opacity: disabled && !on ? 0.45 : 1, fontVariantNumeric: "tabular-nums" }}>{children}</button>
);
const Group = ({ label, children }) => (
  <div style={{ margin: "12px 0" }}>
    <div className="jj-eyebrow" style={{ color: C.muted, marginBottom: 6 }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center" }}>{children}</div>
  </div>
);

// Interval timer: round length, rest, number of rounds (or infinite), optional get-ready countdown, pause, skip, and keep-awake.
export default function Timer({ work: w0 = 180, rest: r0 = 30, rounds: n0 = 3, compact = false }) {
  const [work, setWork] = useState(w0), [rest, setRest] = useState(r0), [rounds, setRounds] = useState(n0);
  const [ready, setReady] = useState(true), [sound, setSound] = useState(true);
  const [phase, setPhase] = useState("idle"); // idle | ready | work | rest | done
  const [paused, setPaused] = useState(false);
  const [round, setRound] = useState(1);
  const [left, setLeft] = useState(w0);
  const [elapsed, setElapsed] = useState(0);
  const s = useRef({});
  s.current = { work, rest, rounds, phase, round, left, sound, paused };
  const lock = useRef(null);

  useEffect(() => {
    if (phase !== "ready" && phase !== "work" && phase !== "rest") return undefined;
    if (paused) return undefined;
    const id = setInterval(() => {
      const t = s.current;
      setElapsed((e) => e + (t.phase === "ready" ? 0 : 1));
      if (t.left > 1) {
        if (t.left <= 4) beep(t.phase === "work" && t.left === 4 ? 600 : 660, 90, t.sound);
        if (t.phase === "work" && t.left === 11) beep(700, 120, t.sound); // ten-second warning
        setLeft(t.left - 1);
        return;
      }
      if (t.phase === "ready") { setPhase("work"); setLeft(t.work); beep(990, 400, t.sound); return; }
      if (t.phase === "work") {
        const last = t.rounds !== 0 && t.round >= t.rounds;
        if (last) { setPhase("done"); setLeft(0); beep(520, 700, t.sound); }
        else if (t.rest > 0) { setPhase("rest"); setLeft(t.rest); beep(520, 450, t.sound); }
        else { setRound(t.round + 1); setLeft(t.work); beep(990, 400, t.sound); }
      } else { setPhase("work"); setRound(t.round + 1); setLeft(t.work); beep(990, 400, t.sound); }
    }, 1000);
    return () => clearInterval(id);
  }, [phase, paused]);

  // Keep the screen awake while a session is running.
  useEffect(() => {
    const running = phase === "ready" || phase === "work" || phase === "rest";
    (async () => {
      try {
        if (running && !paused && navigator.wakeLock && !lock.current) lock.current = await navigator.wakeLock.request("screen");
        if ((!running || paused) && lock.current) { await lock.current.release(); lock.current = null; }
      } catch { lock.current = null; }
    })();
    return () => { if (lock.current) { lock.current.release().catch(() => {}); lock.current = null; } };
  }, [phase, paused]);

  const start = () => {
    setElapsed(0); setRound(1); setPaused(false);
    if (ready) { setPhase("ready"); setLeft(10); } else { setPhase("work"); setLeft(work); beep(990, 400, sound); }
    beep(660, 60, sound);
  };
  const stop = () => { setPhase("idle"); setPaused(false); setLeft(work); setRound(1); };
  const skip = () => { // jump to the next phase
    if (phase === "ready") { setPhase("work"); setLeft(work); }
    else if (phase === "work") { if (rounds !== 0 && round >= rounds) { setPhase("done"); setLeft(0); } else if (rest > 0) { setPhase("rest"); setLeft(rest); } else { setRound(round + 1); setLeft(work); } }
    else if (phase === "rest") { setPhase("work"); setRound(round + 1); setLeft(work); }
  };
  const running = phase === "ready" || phase === "work" || phase === "rest";
  const color = phase === "rest" ? C.blueLight : phase === "ready" ? C.purpleLight : phase === "done" ? C.white : C.red;
  const label = phase === "idle" ? "Ready" : phase === "ready" ? "Get ready" : phase === "done" ? "Finished" : phase === "rest" ? `Rest · next is round ${round + 1}` : `Round ${round} of ${rounds === 0 ? "∞" : rounds}`;
  const phaseTotal = phase === "ready" ? 10 : phase === "rest" ? rest : work;
  const ringFrac = phase === "idle" || phase === "done" ? 1 : Math.max(0, Math.min(1, left / (phaseTotal || 1)));
  const pickWork = (v) => { setWork(v); if (!running) setLeft(v); };
  const total = rounds === 0 ? "∞" : fmt(rounds * work + (rounds - 1) * rest);

  return (
    <div className="jj-card" style={{ textAlign: "center", borderColor: running ? color : C.line }}>
      <div className="jj-eyebrow" style={{ color }}>{label}{paused ? " · paused" : ""}</div>
      <div style={{ position: "relative", width: "100%", maxWidth: compact ? 230 : 340, aspectRatio: "1", margin: "0 auto" }}>
        <Enso size="100%" radius={40} thickness={13} progress={ringFrac} stops={phase === "rest" ? WATER_STOPS : phase === "ready" ? DUSK_STOPS : BELT_STOPS} seed={phase === "rest" ? 4 : 11} splatter={phase !== "work"} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="display" style={{ fontSize: compact ? 40 : 62, fontWeight: 800, lineHeight: 1, color: phase === "idle" || phase === "done" ? C.text : color, fontVariantNumeric: "tabular-nums" }}>{fmt(left)}</div>
        </div>
      </div>
      {(running || phase === "done") && <div className="jj-muted" style={{ fontSize: 13 }}>Time on the mat {fmt(elapsed)}</div>}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, margin: "14px 0", flexWrap: "wrap" }}>
        {!running ? <button className="jj-btn" style={{ minWidth: 130, fontSize: 17 }} onClick={start}>{phase === "done" ? "Run again" : "Start"}</button> : (
          <>
            <button className="jj-btn" style={{ minWidth: 110 }} onClick={() => setPaused(!paused)}>{paused ? "Resume" : "Pause"}</button>
            <button className="jj-btn ghost" onClick={skip}>Skip →</button>
            <button className="jj-btn ghost" onClick={stop}>Reset</button>
          </>
        )}
      </div>

      {!running && (
        <>
          <Group label="Presets">{PRESETS.map((p) => <Chip key={p.name} on={work === p.work && rest === p.rest && rounds === p.rounds} onClick={() => { pickWork(p.work); setRest(p.rest); setRounds(p.rounds); }}>{p.name}</Chip>)}</Group>
          <Group label="Round length">
            <Chip onClick={() => pickWork(Math.max(30, work - 30))}>− 0:30</Chip>
            {ROUND_CHOICES.map((v) => <Chip key={v} on={work === v} onClick={() => pickWork(v)}>{fmt(v)}</Chip>)}
            <Chip onClick={() => pickWork(Math.min(1800, work + 30))}>+ 0:30</Chip>
          </Group>
          <Group label="Rest between rounds">{REST_CHOICES.map((v) => <Chip key={v} on={rest === v} onClick={() => setRest(v)}>{v === 0 ? "None" : fmt(v)}</Chip>)}</Group>
          <Group label="Number of rounds">{ROUND_COUNTS.map((v) => <Chip key={v} on={rounds === v} onClick={() => setRounds(v)}>{v === 0 ? "∞ Infinite" : v}</Chip>)}</Group>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
            <label style={{ fontWeight: 700, fontSize: 14 }}><input type="checkbox" checked={ready} onChange={(e) => setReady(e.target.checked)} /> 10-second get-ready</label>
            <label style={{ fontWeight: 700, fontSize: 14 }}><input type="checkbox" checked={sound} onChange={(e) => setSound(e.target.checked)} /> Sound</label>
          </div>
          <p className="jj-muted" style={{ fontSize: 13, margin: "10px 0 0" }}>{rounds === 0 ? "Runs until you press Reset." : `${rounds} × ${fmt(work)}${rest ? ` with ${fmt(rest)} rest` : ""}: ${total} total.`} Beeps at the start and end of each round, and counts down the last 3 seconds. The screen stays on while it runs.</p>
        </>
      )}
    </div>
  );
}
