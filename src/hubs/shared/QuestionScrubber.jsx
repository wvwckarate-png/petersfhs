import React, { useRef, useState } from "react";

/*
  The MCQ Practice progress bar, as a map of the unit: one slice per question, colored by how it was answered,
  with a marker on the current question. Click, tap or drag anywhere on it to jump to that question.
  Arrow keys work too when the bar has keyboard focus.

  Props
    questions – the list currently being shown (all questions, or only the missed ones)
    answered  – { [questionId]: { correct } }
    index     – position of the current question in `questions`
    onJump    – (index) => void
    accent    – the subject's color (used for "correct")
*/
const MISSED = "#D4675A", BLANK = "#E4E2D9", INK = "#2E332E";

export default function QuestionScrubber({ questions, answered, index, onJump, accent = "#7C9B72" }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(null); // index under the pointer
  const dragging = useRef(false);
  const n = questions.length;
  if (!n) return null;
  const cur = Math.max(0, Math.min(index, n - 1));

  const at = (e) => {
    const r = ref.current.getBoundingClientRect();
    return Math.max(0, Math.min(n - 1, Math.floor(((e.clientX - r.left) / r.width) * n)));
  };
  const status = (q) => { const a = answered[q.id]; return a ? (a.correct ? "correct" : "missed") : "blank"; };
  const label = (i) => { const s = status(questions[i]); return `Question ${i + 1}: ${s === "blank" ? "not answered" : s}`; };

  function onKey(e) {
    const step = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1, PageDown: -10, PageUp: 10 }[e.key];
    if (step) { e.preventDefault(); onJump(Math.max(0, Math.min(n - 1, cur + step))); }
    else if (e.key === "Home") { e.preventDefault(); onJump(0); }
    else if (e.key === "End") { e.preventDefault(); onJump(n - 1); }
  }

  const shown = hover === null ? null : hover;
  return (
    <div>
      <div
        ref={ref}
        role="slider" tabIndex={0} aria-label="Jump to a question" aria-valuemin={1} aria-valuemax={n} aria-valuenow={cur + 1} aria-valuetext={label(cur)}
        onKeyDown={onKey}
        onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); const i = at(e); setHover(i); onJump(i); }}
        onPointerMove={(e) => { const i = at(e); setHover(i); if (dragging.current && i !== cur) onJump(i); }}
        onPointerUp={(e) => { dragging.current = false; if (e.pointerType !== "mouse") setHover(null); }}
        onPointerCancel={() => { dragging.current = false; setHover(null); }}
        onPointerLeave={() => { if (!dragging.current) setHover(null); }}
        style={{ position: "relative", height: 26, display: "flex", alignItems: "center", cursor: "pointer", touchAction: "none", userSelect: "none", WebkitUserSelect: "none", borderRadius: 8 }}
      >
        <div style={{ display: "flex", width: "100%", height: 12, borderRadius: 6, overflow: "hidden", background: BLANK }}>
          {questions.map((q, i) => {
            const s = status(q);
            return <span key={q.id} style={{ flex: 1, minWidth: 0, background: s === "correct" ? accent : s === "missed" ? MISSED : BLANK, boxShadow: n <= 140 && i ? "inset 1px 0 0 rgba(255,255,255,.7)" : "none" }} />;
          })}
        </div>
        {/* current question */}
        <span aria-hidden="true" style={{ position: "absolute", left: `${((cur + 0.5) / n) * 100}%`, top: 2, bottom: 2, width: 6, marginLeft: -3, borderRadius: 4, background: INK, boxShadow: "0 0 0 2px #fff, 0 1px 4px rgba(0,0,0,.35)", pointerEvents: "none" }} />
        {shown !== null && (
          <span aria-hidden="true" style={{ position: "absolute", bottom: "100%", left: `${((shown + 0.5) / n) * 100}%`, transform: `translateX(${shown / n < 0.12 ? "-15%" : shown / n > 0.88 ? "-85%" : "-50%"})`, marginBottom: 4, background: INK, color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, padding: "4px 9px", borderRadius: 8, whiteSpace: "nowrap", pointerEvents: "none", zIndex: 3 }}>
            {label(shown)}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px", marginTop: 4, fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "#767F73" }}>
        <Key color={accent} text="Correct" /><Key color={MISSED} text="Missed" /><Key color={BLANK} text="Not answered" />
        <span style={{ marginLeft: "auto" }}>Tap or drag the bar to jump to any question</span>
      </div>
    </div>
  );
}

function Key({ color, text }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span style={{ width: 9, height: 9, borderRadius: 3, background: color, display: "inline-block" }} />{text}</span>;
}
