import React, { useMemo, useState } from "react";
import { C, BELT_BG, BELT_FG, BELT_TEXT } from "./theme";
import { POSITIONS, FAMILIES, TIERS, ESCAPES, FINISHES, byId, SYSTEMS, CURRICULUM, FOUR_QUESTIONS, PRINCIPLES, RULES, SOLO_DRILLS, WARMUPS, RESISTANCE_LADDER, QUESTIONS, CARDS, generatedQuestions, positionCards } from "./data";
import { KeysRing, SystemDiagram } from "./Mark";
import { Enso, StatusRing } from "./Enso";
import Pyramid from "./Pyramid";
import Timer from "./Timer";
import { STATUS, PEOPLE } from "./store";

const posLink = (id) => `#/position/${id}`;
const roleLabel = { top: "Top", bottom: "Bottom", neutral: "Standing", sub: "Submission" };
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
        <div className="jj-hero-enso" aria-hidden="true"><Enso size="100%" seed={11} /></div>
        <div style={{ position: "relative", maxWidth: 560 }}>
          <div className="jj-eyebrow">A systems approach</div>
          <h1 style={{ fontSize: 46, lineHeight: 1.02 }}>Position before submission</h1>
          <p className="jj-muted" style={{ margin: "14px 0 0" }}>Every position has the same shape: what you want, how you hold it, what you attack, how you escape, and what goes wrong. Learn the position, then the moves fall out of it. Tap a ring below to see where the positions fit.</p>
        </div>
      </div>

      <div className="jj-card" style={{ marginTop: 14 }}>
        <div className="jj-eyebrow">Start here</div>
        <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", marginTop: 8 }}>
          {[["1", "Learn the position", "Open any position and read the three keys, the goals, and the moves.", "#/positions"], ["2", "Drill it", "Use the solo drills, or build a session with a partner and a timer.", "#/plan"], ["3", "Spar it", "Start from the position and turn up the resistance one level at a time.", "#/cycle"]].map(([n, t, d, h]) => (
            <a key={n} href={h} style={{ display: "block", background: C.panel2, borderRadius: 12, padding: "12px 14px", border: `1px solid ${C.line}` }}>
              <span className="display" style={{ color: C.red, fontSize: 26, fontWeight: 800 }}>{n}</span> <strong>{t}</strong>
              <div className="jj-muted" style={{ fontSize: 14.5 }}>{d}</div>
            </a>
          ))}
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
            <div className="jj-eyebrow">Finishing</div>
            <h2 className="jj-h2">Submissions</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{FINISHES.map((id) => <PosChip key={id} id={id} store={store} />)}</div>
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
        {[["#/positions", "Positions", `${POSITIONS.length} positions and submissions`], ["#/systems", "Systems", `${SYSTEMS.length} three-move chains`], ["#/cycle", "8-week cycle", "Three sessions a week"], ["#/plan", "Build a session", "Warm-up to situational rounds"]].map(([h, n, d]) => (
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
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const match = (p) => !term || [p.name, p.one, ...p.keys, ...p.moves.map((m) => m[0])].join(" ").toLowerCase().includes(term);
  const shown = POSITIONS.filter((p) => (role === "all" || p.role === role) && match(p));
  return (
    <div>
      <div className="jj-eyebrow">Library</div>
      <h1 style={{ fontSize: 44 }}>Positions</h1>
      <div style={{ display: "flex", gap: 8, margin: "10px 0 6px", flexWrap: "wrap" }}>
        {[["all", "All"], ["top", "From the top"], ["bottom", "From the bottom"], ["neutral", "Standing"], ["sub", "Submissions"]].map(([k, n]) => (
          <button key={k} className={`jj-btn ${role === k ? "" : "ghost"}`} onClick={() => setRole(k)}>{n}</button>
        ))}
      </div>
      <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search positions, moves, or keys" aria-label="Search positions" className="jj-search" />
      <p className="jj-muted" style={{ margin: "8px 0 16px", fontSize: 14 }}>{shown.length} of {POSITIONS.length} shown</p>
      {shown.length === 0 && <div className="jj-card">Nothing matches that. Try a shorter word, like "guard" or "choke".</div>}
      {FAMILIES.map((f) => {
        const list = shown.filter((p) => p.family === f.id);
        if (!list.length) return null;
        return (
          <div key={f.id} style={{ marginBottom: 24 }}>
            <h2 className="jj-h2" style={{ marginBottom: 2 }}>{f.name}</h2>
            <p className="jj-muted" style={{ margin: "0 0 10px" }}>{f.blurb}</p>
            <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))" }}>
              {list.map((p) => (
                <a key={p.id} className="jj-card" href={posLink(p.id)} style={{ display: "block" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}><Tag role={p.role} /><StatusRing status={store.getStatus(p.id)} size={20} /></div>
                  <div className="display" style={{ fontSize: 22, fontWeight: 800, margin: "8px 0 4px" }}>{p.name}</div>
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
  const isSub = p.role === "sub";
  const defTitle = isSub ? "How it's defended (and your answer)" : p.role === "bottom" ? "When it goes wrong (recover)" : p.role === "top" ? "What they'll try (and how to stop it)" : "Defending";
  return (
    <div>
      <a href="#/positions" className="jj-muted" style={{ fontSize: 14 }}>← All positions</a>
      <div className="jj-card jj-poshead" style={{ marginTop: 8 }}>
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Tag role={p.role} />{!isSub && <span className="jj-eyebrow">{FAMILIES.find((f) => f.id === p.family).name}</span>}</div>
          <h1 style={{ fontSize: 46, lineHeight: 1.02, margin: "6px 0 8px" }}>{p.name}</h1>
          <p style={{ margin: 0, fontSize: 17 }}>{p.one}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14, alignItems: "center" }}>
            <span className="jj-muted" style={{ fontSize: 13, fontWeight: 800 }}>{store.person}:</span>
            {STATUS.map((n, i) => <button key={n} className={`jj-btn ${s === i ? "" : "ghost"}`} style={{ padding: "6px 12px", fontSize: 13.5 }} onClick={() => store.setStatus(p.id, i)}>{n}</button>)}
          </div>
        </div>
        <div><KeysRing keys={p.keys} /></div>
      </div>

      <Section title={isSub ? "What you are trying to do" : "Goals"}><List items={p.goals} /></Section>
      <Section title={isSub ? "Setup and grips" : "How you hold it (controls)"}><List items={p.controls} /></Section>
      <Section title={isSub ? "The finish, step by step" : "Moves from here"}>
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
          <div className="jj-card" style={{ background: C.panel2 }}><span className="jj-tag top">{isSub ? "Attacker goal" : "Top goal"}</span><div>{p.spar.topGoal}</div></div>
          <div className="jj-card" style={{ background: C.panel2 }}><span className="jj-tag bottom">{isSub ? "Defender goal" : "Bottom goal"}</span><div>{p.spar.bottomGoal}</div></div>
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
          <a className="jj-btn ghost" href={`#/plan?focus=${p.id}&level=4`}>Build a session around this</a>
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
  const [target, setTarget] = useState([2, 3, 4, 5].includes(+q.level) ? +q.level : 4);
  const p = byId[focus];
  const isSub = p.role === "sub";
  const warm = WARMUPS.map((id) => SOLO_DRILLS.find((d) => d.id === id)).slice(0, minutes >= 45 ? 5 : 3);
  const warmMin = minutes >= 45 ? 8 : 5, coolMin = 4;
  const rest = minutes - warmMin - coolMin;
  const techMin = Math.round(rest * 0.25), drillMin = Math.round(rest * 0.25), sparMin = rest - techMin - drillMin;
  const perRound = sparMin >= 12 ? 3 : 2;
  const totalRounds = Math.max(1, Math.floor(sparMin / perRound));
  // Fill the available rounds with the top resistance levels first, then work back down so the session always ends at the goal level.
  const allLevels = []; for (let l = 2; l <= target; l++) allLevels.push(l);
  const levels = allLevels.slice(-Math.min(totalRounds, allLevels.length));
  const roundsPerLevel = Math.max(1, Math.floor(totalRounds / levels.length));
  const plannedRounds = roundsPerLevel * levels.length;
  const block = (title, mins, body) => (
    <div className="jj-card" style={{ marginTop: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><h2 className="jj-h2" style={{ marginBottom: 4 }}>{title}</h2><span className="display" style={{ color: C.blueLight, fontSize: 24, fontWeight: 800 }}>{mins} min</span></div>
      {body}
    </div>
  );
  const sel = { display: "flex", flexDirection: "column", fontWeight: 800, fontSize: 13, color: C.muted };
  return (
    <div>
      <div className="jj-eyebrow">Home training</div>
      <h1 style={{ fontSize: 44 }}>Build a session</h1>
      <div className="jj-card" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end", marginTop: 10 }}>
        <label style={sel}>Focus position
          <select value={focus} onChange={(e) => setFocus(e.target.value)} style={{ marginTop: 4 }}>
            {FAMILIES.map((f) => <optgroup key={f.id} label={f.name}>{POSITIONS.filter((x) => x.family === f.id).map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</optgroup>)}
          </select>
        </label>
        <label style={sel}>Time
          <select value={minutes} onChange={(e) => setMinutes(+e.target.value)} style={{ marginTop: 4 }}>{[20, 30, 45, 60].map((m) => <option key={m} value={m}>{m} minutes</option>)}</select>
        </label>
        <label style={sel}>Training with
          <select value={partner ? "p" : "s"} onChange={(e) => setPartner(e.target.value === "p")} style={{ marginTop: 4 }}><option value="p">A partner</option><option value="s">Solo</option></select>
        </label>
        <label style={sel}>Resistance goal
          <select value={target} onChange={(e) => setTarget(+e.target.value)} style={{ marginTop: 4 }}>{[2, 3, 4, 5].map((l) => <option key={l} value={l}>Level {l} ({RESISTANCE_LADDER[l - 1].pct})</option>)}</select>
        </label>
      </div>

      {block("Warm-up", warmMin, <ol className="jj-list">{warm.map((d) => <li key={d.id}><strong>{d.name}</strong> · {d.dose}</li>)}</ol>)}
      {block("Learn it", techMin, <><p style={{ margin: "0 0 6px" }}><strong style={{ color: C.blueLight }}>{p.name}.</strong> {p.one}</p><List items={[...p.goals.slice(0, 2), ...p.moves.slice(0, 2).map(([n, h]) => `${n}: ${h}`)]} /> <a href={posLink(p.id)} style={{ color: C.blueLight, fontWeight: 800 }}>Open the full page →</a></>)}
      {block(partner ? "Drill it" : "Drill it (solo)", drillMin, <List items={partner ? p.partner : p.solo} />)}
      {partner
        ? block("Situational sparring", sparMin, <>
            <p style={{ margin: "0 0 8px" }}><strong>Start:</strong> {p.spar.start} Switch roles after each round. {isSub ? "Attacker" : "Top"} goal: {p.spar.topGoal} {isSub ? "Defender" : "Bottom"} goal: {p.spar.bottomGoal}</p>
            {levels.map((l) => (
              <div key={l} style={{ margin: "8px 0" }}><span className="jj-tag top">Level {l} · {RESISTANCE_LADDER[l - 1].pct}</span> <strong>{roundsPerLevel} round{roundsPerLevel > 1 ? "s" : ""} of {perRound} min.</strong> {l <= 4 ? p.spar.cues[l - 2] : RESISTANCE_LADDER[4].text}</div>
            ))}
            <Timer key={`${plannedRounds}-${perRound}`} work={perRound * 60} rest={30} rounds={plannedRounds} compact />
          </>)
        : block("Flow rounds (solo)", sparMin, <><p style={{ margin: "0 0 6px" }}>Shadow the position: move through the goals and moves above with an imaginary partner, then switch to the opposite side. Hold each finishing position for 3 seconds.</p><Timer key={`${totalRounds}-${perRound}`} work={perRound * 60} rest={30} rounds={totalRounds} compact /></>)}
      {block("Cool-down", coolMin, <List items={["Slow nasal breathing for one minute, sitting tall.", "Hip flexor, hamstring, and shoulder stretches for 30 seconds each.", "Write down one thing that worked and one question for your coach."]} />)}
    </div>
  );
}

/* ---------- 8-week cycle ---------- */
export function CycleView() {
  return (
    <div>
      <div className="jj-eyebrow">A plan to follow</div>
      <h1 style={{ fontSize: 44 }}>8-week cycle</h1>
      <p className="jj-muted" style={{ maxWidth: 680, marginTop: 10 }}>Three sessions a week: learn it, drill it, then situational spar. Each session opens the session builder on that position at the resistance level shown. When you finish week 8, start again and aim one level higher.</p>
      <div className="jj-grid" style={{ marginTop: 14 }}>
        {CURRICULUM.map((w) => (
          <div key={w.week} className="jj-card">
            <div className="jj-eyebrow">Week {w.week}</div>
            <h2 className="jj-h2">{w.theme}</h2>
            <p className="jj-muted" style={{ margin: "0 0 10px" }}>{w.why}</p>
            <div className="jj-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
              {w.sessions.map(([label, id, level, note], i) => (
                <a key={i} href={`#/plan?focus=${id}&level=${level}`} style={{ display: "block", background: C.panel2, borderRadius: 12, padding: "12px 14px", border: `1px solid ${C.line}` }}>
                  <span className="jj-tag">Session {i + 1} · {label}</span>
                  <div className="display" style={{ fontSize: 19, margin: "6px 0 2px" }}>{byId[id].name}</div>
                  <div className="jj-muted" style={{ fontSize: 14 }}>{note}</div>
                  <div style={{ marginTop: 6 }}><span style={{ display: "inline-block", width: 14, height: 14, borderRadius: "50%", background: BELT_BG[level - 1], border: `1px solid ${C.text}`, verticalAlign: "middle", marginRight: 6 }} /><span style={{ fontSize: 13, fontWeight: 800 }}>Level {level} · {RESISTANCE_LADDER[level - 1].pct}</span></div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Timer view ---------- */
export function TimerView() {
  return (
    <div className="jj-center jj-compact" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 30 }}>Round timer</h1>
      <div style={{ maxWidth: 860, margin: "10px auto 0" }}><Timer work={300} rest={60} rounds={5} /></div>
      <details style={{ maxWidth: 640, margin: "10px auto 0", fontSize: 14 }} className="jj-muted">
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>Show it on a TV or an Apple TV</summary>
        <p style={{ margin: "8px 0 0" }}>Tap Full screen for a big ring and clock that fill the display. To show it on an Apple TV, mirror this screen with AirPlay (Screen Mirroring on an iPhone or iPad, or the AirPlay menu on a Mac) and it will fill the TV. The sound plays on the device you are using.</p>
      </details>
    </div>
  );
}

/* ---------- Quiz ---------- */
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const QUIZ_TOPICS = ["All", ...Array.from(new Set([...QUESTIONS.map((q) => q[0]), "Position keys", "Moves from positions", "Mistakes", "Good habits"]))];

export function QuizView({ store }) {
  const [topic, setTopic] = useState("All");
  const [count, setCount] = useState(10);
  const [run, setRun] = useState(null); // { qs, i, picked, score, missed }
  const build = (pool) => pool.map(([t, stem, ch, ex]) => ({ t, stem, ex, correct: ch[0], choices: shuffle(ch) }));
  const start = (custom) => {
    const pool = custom || [...QUESTIONS, ...generatedQuestions()].filter((q) => topic === "All" || q[0] === topic);
    const qs = build(shuffle(pool).slice(0, count));
    setRun({ qs, i: 0, picked: null, score: 0, missed: [], retry: !!custom });
  };
  const best = store.getBest(topic, count);
  if (!run) {
    return (
      <div>
        <div className="jj-eyebrow">Check yourself</div>
        <h1 style={{ fontSize: 44 }}>Quiz</h1>
        <div className="jj-card" style={{ maxWidth: 560, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <label style={{ fontWeight: 800, color: C.muted, fontSize: 13 }}>Topic<br />
              <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ marginTop: 4 }}>{QUIZ_TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
            </label>
            <label style={{ fontWeight: 800, color: C.muted, fontSize: 13 }}>Questions<br />
              <select value={count} onChange={(e) => setCount(+e.target.value)} style={{ marginTop: 4 }}>{[10, 20, 30].map((n) => <option key={n} value={n}>{n}</option>)}</select>
            </label>
          </div>
          <p className="jj-muted">{QUESTIONS.length} written questions plus questions built from the position library, so each quiz is different.{best ? ` ${store.person}'s best for this setting: ${best}.` : ""}</p>
          <button className="jj-btn" onClick={() => start()}>Start</button>
        </div>
      </div>
    );
  }
  if (run.i >= run.qs.length) {
    const pct = run.score / run.qs.length;
    return (
      <div className="jj-card jj-center" style={{ maxWidth: 640, textAlign: "center" }}>
        <div className="jj-eyebrow">Finished · {store.person}</div>
        <div style={{ position: "relative", width: 200, height: 200, margin: "6px auto" }}><div style={{ position: "absolute", inset: 0, opacity: 0.16 }}><Enso size={200} progress={1} seed={17} stops={[[0, "#9AA3AE"], [1, "#9AA3AE"]]} splatter={false} /></div>{pct > 0.03 && <Enso size={200} progress={pct} seed={17} />}<div className="display" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 54, fontWeight: 800 }}>{run.score}/{run.qs.length}</div></div>
        <p className="jj-muted">{pct >= 0.9 ? "Excellent. Try a harder topic or more questions." : pct >= 0.7 ? "Solid. Review the misses below." : "Good start. Read the missed answers, then try again."}</p>
        {run.missed.length > 0 && <div style={{ textAlign: "left" }}><h2 className="jj-h2">Review</h2>{run.missed.map((m, i) => <div key={i} style={{ margin: "10px 0" }}><strong>{m.stem}</strong><div style={{ color: C.blueLight }}>✓ {m.correct}</div><div className="jj-muted" style={{ fontSize: 14.5 }}>{m.ex}</div></div>)}</div>}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 12 }}>
          <button className="jj-btn" onClick={() => setRun(null)}>Again</button>
          {run.missed.length > 0 && <button className="jj-btn ghost" onClick={() => start(run.missed.map((m) => [m.t, m.stem, [m.correct, ...m.choices.filter((c) => c !== m.correct)], m.ex]))}>Retry the ones I missed</button>}
        </div>
      </div>
    );
  }
  const q = run.qs[run.i];
  const pick = (c) => {
    if (run.picked) return;
    const ok = c === q.correct, next = { ...run, picked: c, score: run.score + (ok ? 1 : 0), missed: ok ? run.missed : [...run.missed, q] };
    setRun(next);
    if (run.i + 1 === run.qs.length && !run.retry) store.recordQuiz(topic, count, next.score, run.qs.length);
  };
  return (
    <div className="jj-card" style={{ maxWidth: 680 }}>
      <div className="jj-eyebrow">{q.t} · {run.i + 1} of {run.qs.length}</div>
      <h2 className="jj-h2" style={{ textTransform: "none", fontFamily: "'Nunito',sans-serif", fontSize: 21, letterSpacing: 0, fontWeight: 800 }}>{q.stem}</h2>
      {q.choices.map((c) => <button key={c} className={`jj-opt ${run.picked ? (c === q.correct ? "right" : c === run.picked ? "wrong" : "") : ""}`} onClick={() => pick(c)} disabled={!!run.picked && c !== q.correct && c !== run.picked}>{c}</button>)}
      {run.picked && <><p style={{ color: C.muted }}>{q.ex}</p><button className="jj-btn" onClick={() => setRun({ ...run, i: run.i + 1, picked: null })}>{run.i + 1 === run.qs.length ? "See results" : "Next"}</button></>}
    </div>
  );
}

/* ---------- Flashcards and glossary ---------- */
export function CardsView() {
  const lib = useMemo(() => positionCards(), []);
  const decks = { Terms: CARDS, Positions: lib.names, "Three keys": lib.keys };
  const [deckName, setDeckName] = useState("Terms");
  const [mode, setMode] = useState("flip");
  const [q, setQ] = useState("");
  const [seed, setSeed] = useState(0);
  const deck = useMemo(() => (seed ? shuffle(decks[deckName]) : decks[deckName]), [deckName, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const card = deck[i % deck.length];
  const next = (d = 1) => { setFlip(false); setI((x) => (x + d + deck.length) % deck.length); };
  const term = q.trim().toLowerCase();
  const list = decks[deckName].filter(([t, m]) => !term || `${t} ${m}`.toLowerCase().includes(term));
  return (
    <div>
      <div className="jj-eyebrow">Vocabulary</div>
      <h1 style={{ fontSize: 44 }}>Flashcards</h1>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "10px 0" }}>
        {Object.keys(decks).map((n) => <button key={n} className={`jj-btn ${deckName === n ? "" : "ghost"}`} onClick={() => { setDeckName(n); setI(0); setFlip(false); }}>{n} ({decks[n].length})</button>)}
        <span style={{ flex: 1 }} />
        {[["flip", "Flip cards"], ["list", "Glossary list"]].map(([k, n]) => <button key={k} className={`jj-btn ${mode === k ? "" : "ghost"}`} onClick={() => setMode(k)}>{n}</button>)}
      </div>
      {mode === "flip" ? (
        <div style={{ maxWidth: 520 }}>
          <button onClick={() => setFlip(!flip)} className="jj-card" style={{ width: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", borderTop: `4px solid ${C.red}` }} aria-label={flip ? "Show the term" : "Show the meaning"}>
            <div className="jj-eyebrow">{flip ? "Meaning" : "Term"}</div>
            {flip ? <div style={{ fontSize: 19, marginTop: 8 }}>{card[1]}</div> : <div className="display" style={{ fontSize: 36, fontWeight: 800, marginTop: 8 }}>{card[0]}</div>}
            <div className="jj-muted" style={{ fontSize: 13, marginTop: 14 }}>Tap to {flip ? "flip back" : "reveal"}</div>
          </button>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <button className="jj-btn ghost" onClick={() => next(-1)}>← Back</button>
            <span className="jj-muted">{(i % deck.length) + 1} of {deck.length}</span>
            <button className="jj-btn" onClick={() => next(1)}>Next →</button>
          </div>
          <button className="jj-btn ghost" style={{ marginTop: 12 }} onClick={() => { setSeed((s) => s + 1); setI(0); setFlip(false); }}>Shuffle</button>
        </div>
      ) : (
        <div>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the glossary" aria-label="Search the glossary" className="jj-search" />
          <div className="jj-grid" style={{ marginTop: 12, gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
            {list.map(([t, m]) => <div key={t} className="jj-card"><strong>{t}</strong><div className="jj-muted" style={{ fontSize: 14.5 }}>{m}</div></div>)}
          </div>
          {list.length === 0 && <p className="jj-muted">No matches.</p>}
        </div>
      )}
    </div>
  );
}

/* ---------- Progress ---------- */
export function ProgressView({ store }) {
  const total = POSITIONS.length;
  const counts = [0, 0, 0, 0, 0];
  POSITIONS.forEach((p) => { counts[store.getStatus(p.id)]++; });
  const points = counts.reduce((s, n, i) => s + n * i, 0), pct = points / (total * 4);
  return (
    <div>
      <div className="jj-eyebrow">{store.person}</div>
      <h1 style={{ fontSize: 44 }}>Progress</h1>
      <div className="jj-card" style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "10px 0 14px", alignItems: "center" }}>
        <div style={{ position: "relative", width: 130, height: 130 }}><div style={{ position: "absolute", inset: 0, opacity: 0.16 }}><Enso size={130} progress={1} seed={13} stops={[[0, "#9AA3AE"], [1, "#9AA3AE"]]} splatter={false} /></div>{pct > 0.03 && <Enso size={130} progress={pct} seed={13} />}<div className="display" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800 }}>{Math.round(pct * 100)}%</div></div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {STATUS.map((n, i) => <div key={n} style={{ textAlign: "center" }}><StatusRing status={i} size={34} /><div className="display" style={{ fontSize: 34, fontWeight: 800, color: BELT_TEXT[i], lineHeight: 1.1 }}>{counts[i]}</div><div className="jj-muted" style={{ fontSize: 13 }}>{n}</div></div>)}
        </div>
        <div className="jj-muted" style={{ marginLeft: "auto" }}>of {total} positions</div>
      </div>
      <p className="jj-muted">Tap a position's status to move it up: not yet → learning → drilled → hits live → could teach it. Progress is saved on this device for each person.</p>
      {FAMILIES.map((f) => (
        <div key={f.id} style={{ margin: "16px 0" }}>
          <h2 className="jj-h2">{f.name}</h2>
          {POSITIONS.filter((p) => p.family === f.id).map((p) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${C.line}` }}>
              <StatusRing status={store.getStatus(p.id)} size={22} /><a href={posLink(p.id)} style={{ flex: 1, fontWeight: 700 }}>{p.name}</a>
              <Tag role={p.role} />
              <button className="jj-btn ghost" style={{ minWidth: 130, padding: "6px 10px", color: BELT_TEXT[store.getStatus(p.id)], borderColor: BELT_BG[store.getStatus(p.id)] }} onClick={() => store.cycle(p.id)}>{STATUS[store.getStatus(p.id)]}</button>
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
