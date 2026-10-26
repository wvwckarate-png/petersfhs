import React, { useMemo, useState } from "react";
import { C, BELT_BG, BELT_FG, BELT_TEXT } from "./theme";
import { POSITIONS, FAMILIES, TIERS, ESCAPES, byId, SYSTEMS, FOUR_QUESTIONS, PRINCIPLES, RULES, SOLO_DRILLS, WARMUPS, RESISTANCE_LADDER, QUESTIONS, CARDS } from "./data";
import { KeysRing, SystemDiagram } from "./Mark";
import { Enso, Sankaku, StatusRing } from "./Enso";
import Pyramid from "./Pyramid";
import Timer from "./Timer";
import { STATUS, PEOPLE } from "./store";

const posLink = (id) => `#/position/${id}`;
const roleLabel = { top: "Top", bottom: "Bottom", neutral: "Standing" };
const Tag = ({ role }) => <span className={`jj-tag ${role}`}>{roleLabel[role]}</span>;

function List({ items }) {
  return <ul className="jj-list">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
}

function PosChip({ id, store }) {
  const p = byId[id];
  if (!p) return null;
  const s = store.getStatus(id);
  return (
    <a className="jj-chip" href={posLink(id)} title={`${p.name} · ${STATUS[s]}`}>
      <StatusRing status={s} size={17} />
      {p.name}
    </a>
  );
}

/* ---------- Map ---------- */
export function MapView({ store }) {
  const [tier, setTier] = useState(null);
  const t = TIERS.find((x) => x.id === tier);
  const today = useMemo(() => POSITIONS[Math.floor(Date.now() / 86400000) % POSITIONS.length], []);
  return (
    <div>
      <div className="jj-card jj-hero">
        <div className="jj-hero-enso" aria-hidden="true"><svg viewBox="0 0 100 100" width="100%" height="100%"><Enso x={0} y={0} size={100} seed={11} /><Sankaku x={26} y={27} size={48} seed={4} thickness={14} bristles={70} points={50} radius={46} splatter={false} /></svg></div>
        <div style={{ position: "relative", maxWidth: 560 }}>
          <div className="jj-eyebrow">A systems approach</div>
          <h1 style={{ fontSize: 46, lineHeight: 1.02 }}>Position before submission</h1>
          <p className="jj-muted" style={{ margin: "14px 0 0" }}>Every position has the same shape: what you want, how you hold it, what you attack, how you escape, and what goes wrong. Learn the position, then the moves fall out of it. Tap a ring below to see where the positions fit.</p>
        </div>
      </div>

      <div className="jj-split" style={{ marginTop: 14, alignItems: "start" }}>
        <div className="jj-card">
          <div className="jj-eyebrow">The path inward</div>
          <h2 className="jj-h2">Positional hierarchy</h2>
          <Pyramid selected={tier} onSelect={setTier} />
          <p className="jj-muted" style={{ fontSize: 14, margin: "10px 0 0" }}>Start on the outside ring and work inward: each ring is a better position than the one outside it. When you're under pressure, the escape moves take you back out toward the edge.</p>
        </div>
        <div className="jj-grid">
          <div className="jj-card">
            <div className="jj-eyebrow">{t ? t.note : "Pick a ring"}</div>
            <h2 className="jj-h2">{t ? t.name : "Tap a ring"}</h2>
            {t ? <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{t.ids.map((id) => <PosChip key={id} id={id} store={store} />)}</div> : <p className="jj-muted" style={{ margin: 0 }}>Choose any ring to see its positions. The ring on each chip fills as you progress, in belt colors: empty is not yet, a full black ring with a red edge is could teach it.</p>}
          </div>
          <div className="jj-card">
            <div className="jj-eyebrow">Under pressure</div>
            <h2 className="jj-h2">Escapes</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{ESCAPES.map((id) => <PosChip key={id} id={id} store={store} />)}</div>
          </div>
          <div className="jj-card">
            <div className="jj-eyebrow">Today's position</div>
            <h2 className="jj-h2">{today.name}</h2>
            <p style={{ margin: "0 0 10px" }}>{today.one}</p>
            <a className="jj-btn" href={posLink(today.id)} style={{ display: "inline-block" }}>Open it →</a>
          </div>
        </div>
      </div>

      <div className="jj-card" style={{ marginTop: 14 }}>
        <div className="jj-eyebrow">Ask these in every position</div>
        <h2 className="jj-h2">The four questions</h2>
        <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {FOUR_QUESTIONS.map(([q, a], i) => (
            <div key={q} style={{ background: C.panel2, borderRadius: 12, padding: "12px 14px" }}>
              <div className="display" style={{ color: C.red, fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{i + 1}</div>
              <strong>{q}</strong>
              <div className="jj-muted" style={{ fontSize: 14.5 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="jj-grid" style={{ marginTop: 14, gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
        {[["#/positions", "Positions", "Goals, controls, moves, escapes"], ["#/systems", "Systems", "Three-move chains"], ["#/plan", "Build a session", "Warm-up to situational rounds"], ["#/quiz", "Quiz", "Test what you know"]].map(([h, n, d]) => (
          <a key={h} href={h} className="jj-card" style={{ display: "block" }}>
            <div className="display" style={{ fontSize: 24, fontWeight: 700 }}>{n}</div>
            <div className="jj-muted" style={{ fontSize: 14.5 }}>{d}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------- Positions list ---------- */
export function PositionsView({ store }) {
  const [role, setRole] = useState("all");
  return (
    <div>
      <div className="jj-eyebrow">Library</div>
      <h1 style={{ fontSize: 44 }}>Positions</h1>
      <div style={{ display: "flex", gap: 8, margin: "8px 0 18px", flexWrap: "wrap" }}>
        {[["all", "All"], ["top", "From the top"], ["bottom", "From the bottom"], ["neutral", "Standing"]].map(([k, n]) => (
          <button key={k} className={`jj-btn ${role === k ? "" : "ghost"}`} onClick={() => setRole(k)}>{n}</button>
        ))}
      </div>
      {FAMILIES.map((f) => {
        const list = POSITIONS.filter((p) => p.family === f.id && (role === "all" || p.role === role));
        if (!list.length) return null;
        return (
          <div key={f.id} style={{ marginBottom: 24 }}>
            <h2 className="jj-h2" style={{ marginBottom: 2 }}>{f.name}</h2>
            <p className="jj-muted" style={{ margin: "0 0 10px" }}>{f.blurb}</p>
            <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))" }}>
              {list.map((p) => (
                <a key={p.id} className="jj-card" href={posLink(p.id)} style={{ display: "block" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}><Tag role={p.role} /><StatusRing status={store.getStatus(p.id)} size={20} /></div>
                  <div className="display" style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 4px" }}>{p.name}</div>
                  <div className="jj-muted" style={{ fontSize: 14.5 }}>{p.keys.join(" · ")}</div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- One position ---------- */
function Section({ title, children, open = true }) {
  return <details className="jj-card jj-sec" open={open} style={{ marginTop: 12 }}><summary>{title}</summary><div style={{ marginTop: 8 }}>{children}</div></details>;
}

export function PositionView({ id, store }) {
  const p = byId[id];
  if (!p) return <div className="jj-card">That position does not exist. <a href="#/positions" style={{ color: C.red }}>Back to positions</a></div>;
  const systems = SYSTEMS.filter((s) => s.from === p.id);
  const s = store.getStatus(p.id);
  const idx = POSITIONS.findIndex((x) => x.id === p.id);
  const defTitle = p.role === "bottom" ? "When it goes wrong (recover)" : p.role === "top" ? "What they'll try (and how to stop it)" : "Defending";
  return (
    <div>
      <a href="#/positions" className="jj-muted" style={{ fontSize: 14 }}>← All positions</a>
      <div className="jj-card jj-poshead" style={{ marginTop: 8 }}>
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Tag role={p.role} /><span className="jj-eyebrow">{FAMILIES.find((f) => f.id === p.family).name}</span></div>
          <h1 style={{ fontSize: 46, lineHeight: 1.02, margin: "6px 0 8px" }}>{p.name}</h1>
          <p style={{ margin: 0, fontSize: 17 }}>{p.one}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14, alignItems: "center" }}>
            <span className="jj-muted" style={{ fontSize: 13, fontWeight: 800 }}>{store.person}:</span>
            {STATUS.map((n, i) => <button key={n} className={`jj-btn ${s === i ? "" : "ghost"}`} style={{ padding: "6px 12px", fontSize: 13.5 }} onClick={() => store.setStatus(p.id, i)}>{n}</button>)}
          </div>
        </div>
        <div><KeysRing keys={p.keys} /></div>
      </div>

      <Section title="Goals"><List items={p.goals} /></Section>
      <Section title="How you hold it (controls)"><List items={p.controls} /></Section>
      <Section title="Moves from here">
        {p.moves.map(([n, how]) => <div key={n} style={{ margin: "10px 0" }}><strong style={{ color: C.blueLight }}>{n}.</strong> {how}</div>)}
      </Section>
      <Section title={defTitle}><List items={p.defense} /></Section>
      <Section title="Common mistakes"><List items={p.mistakes} /></Section>
      <Section title="Gi and no-gi">
        <div className="jj-split">
          <div><span className="jj-tag">Gi</span><List items={p.gi} /></div>
          <div><span className="jj-tag">No-gi</span><List items={p.nogi} /></div>
        </div>
      </Section>
      <Section title="Drills">
        <div className="jj-split">
          <div><span className="jj-tag">Solo</span><List items={p.solo} /></div>
          <div><span className="jj-tag">With a partner</span><List items={p.partner} /></div>
        </div>
      </Section>
      <Section title="Situational sparring">
        <p style={{ marginTop: 0 }}><strong>Start:</strong> {p.spar.start}</p>
        <div className="jj-split">
          <div className="jj-card" style={{ background: C.panel2 }}><span className="jj-tag top">Top goal</span><div>{p.spar.topGoal}</div></div>
          <div className="jj-card" style={{ background: C.panel2 }}><span className="jj-tag bottom">Bottom goal</span><div>{p.spar.bottomGoal}</div></div>
        </div>
        <h3 style={{ fontSize: 20, margin: "14px 0 6px" }}>Turn up the resistance</h3>
        {RESISTANCE_LADDER.map((l) => {
          const cue = l.level >= 2 && l.level <= 4 ? p.spar.cues[l.level - 2] : null;
          return (
            <div key={l.level} style={{ display: "flex", gap: 12, margin: "8px 0", alignItems: "flex-start" }}>
              <div className="display" style={{ minWidth: 56, background: BELT_BG[l.level - 1], color: BELT_FG[l.level - 1], border: l.level === 5 ? `1px solid ${C.text}` : "none", borderRadius: 10, textAlign: "center", padding: "6px 4px", fontWeight: 800 }}><span style={{ fontSize: 22 }}>{l.level}</span><div style={{ fontSize: 12, opacity: 0.85 }}>{l.pct}</div></div>
              <div><strong>{l.name}.</strong> {cue || l.text}</div>
            </div>
          );
        })}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
          <a className="jj-btn" href="#/timer">Start a round timer</a>
          <a className="jj-btn ghost" href={`#/plan?focus=${p.id}`}>Build a session around this</a>
        </div>
      </Section>
      {systems.length > 0 && (
        <Section title="Systems that start here">
          {systems.map((x) => <div key={x.id} style={{ margin: "8px 0" }}><a href="#/systems" style={{ color: C.blueLight, fontWeight: 800 }}>{x.name}</a> · {x.nodes.map((n) => n.label).join(" → ")}</div>)}
        </Section>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, gap: 8 }}>
        {idx > 0 ? <a className="jj-btn ghost" href={posLink(POSITIONS[idx - 1].id)}>← {POSITIONS[idx - 1].name}</a> : <span />}
        {idx < POSITIONS.length - 1 ? <a className="jj-btn ghost" href={posLink(POSITIONS[idx + 1].id)}>{POSITIONS[idx + 1].name} →</a> : <span />}
      </div>
    </div>
  );
}

/* ---------- Systems ---------- */
export function SystemsView() {
  return (
    <div>
      <div className="jj-eyebrow">Chains, not tricks</div>
      <h1 style={{ fontSize: 44 }}>Systems</h1>
      <p className="jj-muted" style={{ maxWidth: 680 }}>A system is three moves that answer each other. Their defense to one move opens the next, so you are never guessing. Follow the numbered arrows: when the situation on arrow 1 happens, do what it says and you land on the next corner.</p>
      <div className="jj-grid" style={{ marginTop: 14 }}>
        {SYSTEMS.map((s) => (
          <div key={s.id} className="jj-card" style={{ display: "grid", gridTemplateColumns: "minmax(240px,340px) 1fr", gap: 20, alignItems: "center" }}>
            <SystemDiagram nodes={s.nodes} />
            <div>
              <h2 className="jj-h2">{s.name}</h2>
              <p style={{ margin: "0 0 10px" }}>{s.intro}</p>
              {s.edges.map(([when, then], i) => (
                <div key={i} style={{ margin: "7px 0" }}><span className="display" style={{ color: C.blueLight, fontWeight: 800, marginRight: 6 }}>{i + 1}</span><strong>{when}</strong><span className="jj-muted"> → </span>{then}</div>
              ))}
              <div style={{ marginTop: 10 }}><span className="jj-tag">Nodes</span> {s.nodes.map((n) => `${n.label} (${n.sub})`).join(" · ")}</div>
              <List items={s.tips} />
              <p style={{ margin: "10px 0 0" }}><strong style={{ color: C.blueLight }}>Drill:</strong> {s.drill}</p>
              <a href={posLink(s.from)} className="jj-muted" style={{ fontSize: 14 }}>Starts from → {byId[s.from].name}</a>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width:760px){ .jj-card[style*="minmax(240px"]{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}

/* ---------- Drills ---------- */
export function DrillsView() {
  return (
    <div>
      <div className="jj-eyebrow">No partner needed</div>
      <h1 style={{ fontSize: 44 }}>Solo drills</h1>
      <p className="jj-muted">Everything here can be done alone on a mat or carpet. Move slowly and keep the movement clean before you add speed.</p>
      <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", marginTop: 14 }}>
        {SOLO_DRILLS.map((d) => (
          <details key={d.id} className="jj-card jj-sec">
            <summary>{d.name}</summary>
            <div className="jj-muted" style={{ margin: "6px 0" }}>{d.focus} · <strong style={{ color: C.blueLight }}>{d.dose}</strong></div>
            <ol className="jj-list">{d.how.map((h, i) => <li key={i}>{h}</li>)}</ol>
            <p style={{ margin: "8px 0 0" }}><strong>Why:</strong> {d.why}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ---------- Session planner ---------- */
function useQuery() {
  const q = window.location.hash.split("?")[1] || "";
  return Object.fromEntries(new URLSearchParams(q));
}

export function PlanView() {
  const q = useQuery();
  const [focus, setFocus] = useState(q.focus && byId[q.focus] ? q.focus : "closed-guard");
  const [minutes, setMinutes] = useState(45);
  const [partner, setPartner] = useState(true);
  const [target, setTarget] = useState(4);
  const p = byId[focus];
  const warm = WARMUPS.map((id) => SOLO_DRILLS.find((d) => d.id === id)).slice(0, minutes >= 45 ? 5 : 3);
  const warmMin = minutes >= 45 ? 8 : 5, coolMin = 4;
  const rest = minutes - warmMin - coolMin;
  const techMin = Math.round(rest * 0.25), drillMin = Math.round(rest * 0.25), sparMin = rest - techMin - drillMin;
  const levels = []; for (let l = 2; l <= target; l++) levels.push(l);
  const perRound = sparMin >= 12 ? 3 : 2;
  const roundsPerLevel = Math.max(1, Math.floor(sparMin / perRound / levels.length));
  const block = (title, mins, body) => (
    <div className="jj-card" style={{ marginTop: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><h2 className="jj-h2" style={{ marginBottom: 4 }}>{title}</h2><span className="display" style={{ color: C.blueLight, fontSize: 24, fontWeight: 800 }}>{mins} min</span></div>
      {body}
    </div>
  );
  return (
    <div>
      <div className="jj-eyebrow">Home training</div>
      <h1 style={{ fontSize: 44 }}>Build a session</h1>
      <div className="jj-card" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 13, color: C.muted }}>Focus position
          <select value={focus} onChange={(e) => setFocus(e.target.value)} style={{ marginTop: 4 }}>
            {FAMILIES.map((f) => <optgroup key={f.id} label={f.name}>{POSITIONS.filter((x) => x.family === f.id).map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</optgroup>)}
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 13, color: C.muted }}>Time
          <select value={minutes} onChange={(e) => setMinutes(+e.target.value)} style={{ marginTop: 4 }}>{[20, 30, 45, 60].map((m) => <option key={m} value={m}>{m} minutes</option>)}</select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 13, color: C.muted }}>Training with
          <select value={partner ? "p" : "s"} onChange={(e) => setPartner(e.target.value === "p")} style={{ marginTop: 4 }}><option value="p">A partner</option><option value="s">Solo</option></select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 13, color: C.muted }}>Resistance goal
          <select value={target} onChange={(e) => setTarget(+e.target.value)} style={{ marginTop: 4 }}>{[2, 3, 4, 5].map((l) => <option key={l} value={l}>Level {l} ({RESISTANCE_LADDER[l - 1].pct})</option>)}</select>
        </label>
      </div>

      {block("Warm-up", warmMin, <ol className="jj-list">{warm.map((d) => <li key={d.id}><strong>{d.name}</strong> · {d.dose}</li>)}</ol>)}
      {block("Learn it", techMin, <><p style={{ margin: "0 0 6px" }}><strong style={{ color: C.blueLight }}>{p.name}.</strong> {p.one}</p><List items={[...p.goals.slice(0, 2), ...p.moves.slice(0, 2).map(([n, h]) => `${n}: ${h}`)]} /></>)}
      {block(partner ? "Drill it" : "Drill it (solo)", drillMin, <List items={partner ? p.partner : p.solo} />)}
      {partner
        ? block("Situational sparring", sparMin, <>
            <p style={{ margin: "0 0 8px" }}><strong>Start:</strong> {p.spar.start} Switch roles after each round. Top goal: {p.spar.topGoal} Bottom goal: {p.spar.bottomGoal}</p>
            {levels.map((l) => (
              <div key={l} style={{ margin: "8px 0" }}><span className="jj-tag top">Level {l} · {RESISTANCE_LADDER[l - 1].pct}</span> <strong>{roundsPerLevel} round{roundsPerLevel > 1 ? "s" : ""} of {perRound} min.</strong> {l <= 4 ? p.spar.cues[l - 2] : RESISTANCE_LADDER[4].text}</div>
            ))}
            <Timer work={perRound * 60} rest={30} rounds={Math.max(1, roundsPerLevel * levels.length)} compact />
          </>)
        : block("Flow rounds (solo)", sparMin, <><p style={{ margin: "0 0 6px" }}>Shadow the position: move through the goals and moves above with an imaginary partner, 3 rounds, then switch to the opposite side. Hold each finishing position for 3 seconds.</p><Timer work={perRound * 60} rest={30} rounds={Math.max(1, Math.floor(sparMin / perRound))} compact /></>)}
      {block("Cool-down", coolMin, <List items={["Slow nasal breathing for one minute, sitting tall.", "Hip flexor, hamstring, and shoulder stretches for 30 seconds each.", "Write down one thing that worked and one question for your coach."]} />)}
    </div>
  );
}

/* ---------- Timer view ---------- */
export function TimerView() {
  return (
    <div className="jj-center" style={{ textAlign: "center" }}>
      <div className="jj-eyebrow">Rounds</div>
      <h1 style={{ fontSize: 44 }}>Round timer</h1>
      <p className="jj-muted" style={{ maxWidth: 560, margin: "10px auto 0" }}>Tap a preset or choose the round length, rest, and number of rounds (or infinite). Use it for drilling rounds, positional sparring, or class-style rounds.</p>
      <div style={{ maxWidth: 520, margin: "18px auto 0" }}><Timer work={300} rest={60} rounds={5} /></div>
    </div>
  );
}

/* ---------- Quiz ---------- */
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const TOPICS = ["All", ...Array.from(new Set(QUESTIONS.map((q) => q[0])))];

export function QuizView() {
  const [topic, setTopic] = useState("All");
  const [run, setRun] = useState(null); // { qs, i, picked, score, missed }
  const start = () => {
    const pool = QUESTIONS.filter((q) => topic === "All" || q[0] === topic);
    const qs = shuffle(pool).slice(0, 10).map(([t, stem, ch, ex]) => ({ t, stem, ex, correct: ch[0], choices: shuffle(ch) }));
    setRun({ qs, i: 0, picked: null, score: 0, missed: [] });
  };
  if (!run) {
    return (
      <div>
        <div className="jj-eyebrow">Check yourself</div>
        <h1 style={{ fontSize: 44 }}>Quiz</h1>
        <div className="jj-card" style={{ maxWidth: 520 }}>
          <label style={{ fontWeight: 800, color: C.muted, fontSize: 13 }}>Topic<br />
            <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ marginTop: 4 }}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
          <p className="jj-muted">Ten random questions from {QUESTIONS.filter((q) => topic === "All" || q[0] === topic).length} in this topic.</p>
          <button className="jj-btn" onClick={start}>Start</button>
        </div>
      </div>
    );
  }
  if (run.i >= run.qs.length) {
    return (
      <div className="jj-card" style={{ maxWidth: 620 }}>
        <div className="jj-eyebrow">Finished</div>
        <div style={{ position: "relative", width: 200, height: 200, margin: "6px auto" }}><Enso size={200} progress={run.score / run.qs.length} seed={17} /><div className="display" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 54, fontWeight: 800 }}>{run.score}/{run.qs.length}</div></div>
        {run.missed.length > 0 && <><h2 className="jj-h2">Review</h2>{run.missed.map((m, i) => <div key={i} style={{ margin: "10px 0" }}><strong>{m.stem}</strong><div style={{ color: C.blueLight }}>✓ {m.correct}</div><div className="jj-muted" style={{ fontSize: 14.5 }}>{m.ex}</div></div>)}</>}
        <button className="jj-btn" onClick={() => setRun(null)}>Again</button>
      </div>
    );
  }
  const q = run.qs[run.i];
  const pick = (c) => { if (run.picked) return; const ok = c === q.correct; setRun({ ...run, picked: c, score: run.score + (ok ? 1 : 0), missed: ok ? run.missed : [...run.missed, q] }); };
  return (
    <div className="jj-card" style={{ maxWidth: 680 }}>
      <div className="jj-eyebrow">{q.t} · {run.i + 1} of {run.qs.length}</div>
      <h2 className="jj-h2" style={{ textTransform: "none", fontFamily: "Nunito", fontSize: 21, letterSpacing: 0 }}>{q.stem}</h2>
      {q.choices.map((c) => <button key={c} className={`jj-opt ${run.picked ? (c === q.correct ? "right" : c === run.picked ? "wrong" : "") : ""}`} onClick={() => pick(c)}>{c}</button>)}
      {run.picked && <><p style={{ color: C.muted }}>{q.ex}</p><button className="jj-btn" onClick={() => setRun({ ...run, i: run.i + 1, picked: null })}>{run.i + 1 === run.qs.length ? "See results" : "Next"}</button></>}
    </div>
  );
}

/* ---------- Flashcards ---------- */
export function CardsView() {
  const [deck, setDeck] = useState(() => shuffle(CARDS));
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const card = deck[i % deck.length];
  const next = (d = 1) => { setFlip(false); setI((x) => (x + d + deck.length) % deck.length); };
  return (
    <div>
      <div className="jj-eyebrow">Vocabulary</div>
      <h1 style={{ fontSize: 44 }}>Flashcards</h1>
      <div style={{ maxWidth: 520 }}>
        <button onClick={() => setFlip(!flip)} className="jj-card" style={{ width: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", borderTop: `4px solid ${C.red}` }}>
          <div className="jj-eyebrow">{flip ? "Meaning" : "Term"}</div>
          {flip ? <div style={{ fontSize: 19, marginTop: 8 }}>{card[1]}</div> : <div className="display" style={{ fontSize: 40, fontWeight: 800, marginTop: 8 }}>{card[0]}</div>}
          <div className="jj-muted" style={{ fontSize: 13, marginTop: 14 }}>Tap to {flip ? "flip back" : "reveal"}</div>
        </button>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
          <button className="jj-btn ghost" onClick={() => next(-1)}>← Back</button>
          <span className="jj-muted">{(i % deck.length) + 1} of {deck.length}</span>
          <button className="jj-btn" onClick={() => next(1)}>Next →</button>
        </div>
        <button className="jj-btn ghost" style={{ marginTop: 12 }} onClick={() => { setDeck(shuffle(CARDS)); setI(0); setFlip(false); }}>Shuffle</button>
      </div>
    </div>
  );
}

/* ---------- Progress ---------- */
export function ProgressView({ store }) {
  const total = POSITIONS.length;
  const counts = [0, 0, 0, 0, 0];
  POSITIONS.forEach((p) => { counts[store.getStatus(p.id)]++; });
  return (
    <div>
      <div className="jj-eyebrow">{store.person}</div>
      <h1 style={{ fontSize: 44 }}>Progress</h1>
      <div className="jj-card" style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 14 }}>
        {STATUS.map((n, i) => <div key={n} style={{ textAlign: "center" }}><StatusRing status={i} size={34} /><div className="display" style={{ fontSize: 36, fontWeight: 800, color: BELT_TEXT[i], lineHeight: 1.1 }}>{counts[i]}</div><div className="jj-muted" style={{ fontSize: 13 }}>{n}</div></div>)}
        <div style={{ marginLeft: "auto", alignSelf: "center" }} className="jj-muted">of {total} positions</div>
      </div>
      <p className="jj-muted">Tap a position's status to move it up: not yet → learning → drilled → hits live. Progress is saved on this device for each person.</p>
      {FAMILIES.map((f) => (
        <div key={f.id} style={{ margin: "16px 0" }}>
          <h2 className="jj-h2">{f.name}</h2>
          {POSITIONS.filter((p) => p.family === f.id).map((p) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${C.line}` }}>
              <StatusRing status={store.getStatus(p.id)} size={22} /><a href={posLink(p.id)} style={{ flex: 1, fontWeight: 700 }}>{p.name}</a>
              <Tag role={p.role} />
              <button className="jj-btn ghost" style={{ minWidth: 110, padding: "6px 10px", color: BELT_TEXT[store.getStatus(p.id)], borderColor: BELT_BG[store.getStatus(p.id)] }} onClick={() => store.cycle(p.id)}>{STATUS[store.getStatus(p.id)]}</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- Principles & rules ---------- */
export function RulesView() {
  return (
    <div>
      <div className="jj-eyebrow">Foundations</div>
      <h1 style={{ fontSize: 44 }}>Principles & mat rules</h1>
      <div className="jj-split" style={{ alignItems: "start", marginTop: 12 }}>
        <div className="jj-card">
          <h2 className="jj-h2">Principles</h2>
          {PRINCIPLES.map((p) => <div key={p.title} style={{ margin: "10px 0" }}><strong style={{ color: C.blueLight }}>{p.title}.</strong> {p.text}</div>)}
        </div>
        <div className="jj-card" style={{ borderColor: C.red }}>
          <h2 className="jj-h2" style={{ color: "#ff8f7a" }}>Home mat rules</h2>
          <List items={RULES} />
          <p className="jj-muted" style={{ fontSize: 14, marginBottom: 0 }}>This hub is a study companion. Follow your coach's rules at the gym first, and ask them about anything you're unsure about.</p>
        </div>
      </div>
    </div>
  );
}
export { PEOPLE };
