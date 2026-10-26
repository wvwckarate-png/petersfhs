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

const Chip = ({ on, children, onClick, small }) => (
  <button type="button" onClick={onClick} aria-pressed={on} className="jj-chip" style={{ padding: small ? "5px 11px" : "7px 13px", fontSize: small ? 13.5 : 14, borderColor: on ? C.red : C.line, background: on ? "rgba(216,71,46,.18)" : C.panel2, fontVariantNumeric: "tabular-nums" }}>{children}</button>
);
const Group = ({ label, children, align = "center" }) => (
  <div style={{ margin: "7px 0" }}>
    <div className="jj-eyebrow" style={{ color: C.muted, marginBottom: 4 }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: align }}>{children}</div>
  </div>
);

// Interval timer: round length, rest, number of rounds (or infinite), optional get-ready countdown, pause, skip, keep-awake,
// and a full-screen mode that fills the display for a TV or a screen share.
export default function Timer({ work: w0 = 180, rest: r0 = 30, rounds: n0 = 3, compact = false }) {
  const [work, setWork] = useState(w0), [rest, setRest] = useState(r0), [rounds, setRounds] = useState(n0);
  const [ready, setReady] = useState(true), [sound, setSound] = useState(true);
  const [phase, setPhase] = useState("idle"); // idle | ready | work | rest | done
  const [paused, setPaused] = useState(false);
  const [round, setRound] = useState(1);
  const [left, setLeft] = useState(w0);
  const [elapsed, setElapsed] = useState(0);
  const [full, setFull] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const s = useRef({});
  s.current = { work, rest, rounds, phase, round, left, sound, paused, ready, full };
  const lock = useRef(null), fullRef = useRef(null);

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

  // Full screen: the browser's Fullscreen API where it exists (desktop, iPad), and a full-window overlay everywhere else (iPhone).
  const enterFull = () => {
    setFull(true);
    try { fullRef.current?.requestFullscreen?.().catch(() => {}); } catch { /* the overlay still fills the window */ }
  };
  const exitFull = () => {
    setFull(false);
    try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch { /* ignore */ }
  };
  useEffect(() => {
    const onChange = () => { if (!document.fullscreenElement && s.current.full) setFull(false); };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  useEffect(() => {
    if (!full) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [full]);

  const start = () => {
    setElapsed(0); setRound(1); setPaused(false); setShowSettings(false);
    if (ready) { setPhase("ready"); setLeft(10); } else { setPhase("work"); setLeft(work); beep(990, 400, sound); }
    beep(660, 60, sound);
  };
  const stop = () => { setPhase("idle"); setPaused(false); setLeft(work); setRound(1); };
  const skip = () => {
    if (phase === "ready") { setPhase("work"); setLeft(work); }
    else if (phase === "work") { if (rounds !== 0 && round >= rounds) { setPhase("done"); setLeft(0); } else if (rest > 0) { setPhase("rest"); setLeft(rest); } else { setRound(round + 1); setLeft(work); } }
    else if (phase === "rest") { setPhase("work"); setRound(round + 1); setLeft(work); }
  };
  const running = phase === "ready" || phase === "work" || phase === "rest";
  const toggle = () => { if (running) setPaused((p) => !p); else start(); };

  // Space starts or pauses; F toggles full screen; Escape leaves the overlay.
  const keyRef = useRef();
  keyRef.current = { toggle, full, enterFull, exitFull };
  useEffect(() => {
    const onKey = (e) => {
      if (/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(e.target.tagName) && e.code === "Space") return;
      if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
      if (e.code === "Space") { e.preventDefault(); keyRef.current.toggle(); }
      else if (e.key === "f" || e.key === "F") { if (keyRef.current.full) keyRef.current.exitFull(); else keyRef.current.enterFull(); }
      else if (e.key === "Escape" && keyRef.current.full) keyRef.current.exitFull();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const color = phase === "rest" ? C.blueLight : phase === "ready" ? C.purpleLight : phase === "done" ? C.white : C.red;
  const label = phase === "idle" ? "Ready" : phase === "ready" ? "Get ready" : phase === "done" ? "Finished" : phase === "rest" ? "Rest" : "Work";
  const roundText = phase === "idle" || phase === "ready" ? (rounds === 0 ? "Infinite rounds" : `${rounds} round${rounds > 1 ? "s" : ""}`) : phase === "done" ? "Nice work" : `Round ${round}${rounds === 0 ? "" : ` of ${rounds}`}`;
  const nextText = phase === "work" ? (rounds !== 0 && round >= rounds ? "Last round" : rest > 0 ? `Next: rest ${fmt(rest)}` : `Next: round ${round + 1}`) : phase === "rest" ? `Next: round ${round + 1}` : phase === "ready" ? `First round ${fmt(work)}` : "";
  const phaseTotal = phase === "ready" ? 10 : phase === "rest" ? rest : work;
  const ringFrac = phase === "idle" || phase === "done" ? 1 : Math.max(0, Math.min(1, left / (phaseTotal || 1)));
  const pickWork = (v) => { setWork(v); if (!running) setLeft(v); };
  const total = rounds === 0 ? "∞" : fmt(rounds * work + (rounds - 1) * rest);
  const stops = phase === "rest" ? WATER_STOPS : phase === "ready" ? DUSK_STOPS : BELT_STOPS;
  const ring = (css) => (
    <div style={{ position: "relative", aspectRatio: "1", ...css }}>
      <Enso size="100%" radius={40} thickness={13} progress={ringFrac} stops={stops} seed={phase === "rest" ? 4 : 11} splatter={phase !== "work"} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="display" style={{ fontSize: css.fontSize, fontWeight: 800, lineHeight: 1, color: phase === "idle" || phase === "done" ? C.text : color, fontVariantNumeric: "tabular-nums" }}>{fmt(left)}</div>
      </div>
    </div>
  );
  const buttons = (big) => (
    <div style={{ display: "flex", justifyContent: "center", gap: big ? 16 : 10, flexWrap: "wrap" }}>
      {!running ? <button className="jj-btn" style={{ minWidth: big ? 180 : 130, fontSize: big ? 22 : 17, padding: big ? "12px 26px" : undefined }} onClick={start}>{phase === "done" ? "Run again" : "Start"}</button> : (
        <>
          <button className="jj-btn" style={{ minWidth: big ? 150 : 110, fontSize: big ? 20 : 15, padding: big ? "11px 22px" : undefined }} onClick={() => setPaused(!paused)}>{paused ? "Resume" : "Pause"}</button>
          <button className="jj-btn ghost" style={{ fontSize: big ? 18 : 15, padding: big ? "11px 20px" : undefined }} onClick={skip}>Skip →</button>
          <button className="jj-btn ghost" style={{ fontSize: big ? 18 : 15, padding: big ? "11px 20px" : undefined }} onClick={stop}>Reset</button>
        </>
      )}
    </div>
  );
  const settings = (small) => (
    <>
      <Group label="Presets">{PRESETS.map((p) => <Chip small={small} key={p.name} on={work === p.work && rest === p.rest && rounds === p.rounds} onClick={() => { pickWork(p.work); setRest(p.rest); setRounds(p.rounds); }}>{p.name}</Chip>)}</Group>
      <Group label="Round length">
        <Chip small={small} onClick={() => pickWork(Math.max(30, work - 30))}>− 0:30</Chip>
        {ROUND_CHOICES.map((v) => <Chip small={small} key={v} on={work === v} onClick={() => pickWork(v)}>{fmt(v)}</Chip>)}
        <Chip small={small} onClick={() => pickWork(Math.min(1800, work + 30))}>+ 0:30</Chip>
      </Group>
      <Group label="Rest between rounds">{REST_CHOICES.map((v) => <Chip small={small} key={v} on={rest === v} onClick={() => setRest(v)}>{v === 0 ? "None" : fmt(v)}</Chip>)}</Group>
      <Group label="Number of rounds">{ROUND_COUNTS.map((v) => <Chip small={small} key={v} on={rounds === v} onClick={() => setRounds(v)}>{v === 0 ? "∞ Infinite" : v}</Chip>)}</Group>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 6 }}>
        <label style={{ fontWeight: 700, fontSize: 14 }}><input type="checkbox" checked={ready} onChange={(e) => setReady(e.target.checked)} /> 10-second get-ready</label>
        <label style={{ fontWeight: 700, fontSize: 14 }}><input type="checkbox" checked={sound} onChange={(e) => setSound(e.target.checked)} /> Sound</label>
      </div>
    </>
  );

  const tint = phase === "rest" ? "rgba(46,107,198,.20)" : phase === "ready" ? "rgba(122,63,184,.20)" : phase === "work" ? "rgba(216,71,46,.13)" : "rgba(244,241,234,.04)";
  return (
    <>
      <div className="jj-card jj-timer" style={{ textAlign: "center", borderColor: running ? color : C.line }}>
        <div className={compact ? "" : "jj-timer-grid"}>
          <div>
            <div className="jj-eyebrow" style={{ color }}>{label}{paused ? " · paused" : ""} · {roundText}</div>
            {ring({ width: "100%", maxWidth: compact ? 200 : 260, margin: "2px auto", fontSize: compact ? 38 : 52 })}
            <div className="jj-muted" style={{ fontSize: 13, minHeight: 18 }}>{nextText || (running || phase === "done" ? `Time on the mat ${fmt(elapsed)}` : "")}</div>
            <div style={{ margin: "8px 0 6px" }}>{buttons(false)}</div>
            <button type="button" className="jj-btn ghost" style={{ padding: "7px 14px", fontSize: 14 }} onClick={enterFull}>⛶ Full screen</button>
          </div>
          {!running && (
            <div>
              {settings(true)}
              <p className="jj-muted" style={{ fontSize: 13, margin: "8px 0 0" }}>{rounds === 0 ? "Runs until you press Reset." : `${rounds} × ${fmt(work)}${rest ? ` with ${fmt(rest)} rest` : ""}: ${total} total.`} Space starts or pauses. F for full screen.</p>
            </div>
          )}
          {running && !compact && (
            <div className="jj-muted" style={{ alignSelf: "center", fontSize: 14.5 }}>
              <p style={{ margin: 0 }}>Round {round}{rounds === 0 ? "" : ` of ${rounds}`} · {fmt(work)} rounds{rest ? `, ${fmt(rest)} rest` : ""}</p>
              <p style={{ margin: "6px 0 0" }}>Time on the mat {fmt(elapsed)}</p>
              <p style={{ margin: "6px 0 0" }}>Press <strong>Space</strong> to pause, <strong>F</strong> for full screen. The screen stays on while it runs.</p>
            </div>
          )}
        </div>
      </div>

      {full && (
        <div ref={fullRef} className="jj-timer-full" role="dialog" aria-label="Full screen round timer" style={{ background: `radial-gradient(ellipse at center, ${tint} 0%, rgba(10,12,15,0) 72%), #0A0C0F` }}>
          <button type="button" className="jj-btn ghost jj-full-exit" onClick={exitFull}>✕ Exit full screen</button>
          <div className="display" style={{ fontSize: "clamp(22px, 5vh, 56px)", fontWeight: 800, color, letterSpacing: ".06em", textTransform: "uppercase" }}>{label}{paused ? " · paused" : ""}</div>
          {ring({ width: "min(50vh, 86vw)", margin: "0 auto", fontSize: "clamp(48px, 13vh, 170px)" })}
          <div style={{ fontSize: "clamp(18px, 3.6vh, 36px)", fontWeight: 800 }}>{roundText}</div>
          <div className="jj-muted" style={{ fontSize: "clamp(14px, 2.6vh, 26px)", minHeight: 24 }}>{nextText || (phase === "done" ? `Time on the mat ${fmt(elapsed)}` : "Press Start")}</div>
          <div style={{ margin: "8px 0 2px" }}>{buttons(true)}</div>
          {!running && <button type="button" className="jj-btn ghost" onClick={() => setShowSettings(!showSettings)}>{showSettings ? "Hide settings" : "Settings"}</button>}
          {!running && showSettings && <div className="jj-full-settings">{settings(false)}</div>}
        </div>
      )}
    </>
  );
}
