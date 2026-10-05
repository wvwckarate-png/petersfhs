import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { storage } from "../../lib/storage";
import RichText from "./RichText";

/*
  Full-length MCQ exam mode, shared by every hub.

  Props
    hubKey   – unique storage prefix, e.g. "physics1"
    format   – { questions, minutes, label, bands: [{ ap, min }] }   (min = % correct)
    exams    – [{ id, title, description, questions: [...], minutes? , sample? }]
               question: { id, unit, stem, choices, correct, explanation }
               correct is an index (single answer) or an array of indexes (select several)
    units    – [{ id, name, weight }]
    colors   – { accent, accentDeep, pale, pill }
    reference – optional [{ title, html }] reference sheets shown in a pop-up during the exam

  Exams may also define `sets`: { [setId]: { text, figures } } — a shared stimulus shown with every
  question whose `setId` matches (questions of a set are consecutive). A question may carry its own
  `figures`. A figure is { svg, alt, caption? } or { table: { headers, rows }, caption? }.
*/

const AP_LABELS = {
  5: "Extremely well qualified",
  4: "Well qualified",
  3: "Qualified",
  2: "Possibly qualified",
  1: "No recommendation",
};

const isMulti = (q) => Array.isArray(q.correct);

function isCorrect(q, given) {
  if (given === undefined || given === null) return false;
  if (isMulti(q)) {
    if (!Array.isArray(given) || given.length !== q.correct.length) return false;
    return q.correct.every((c) => given.includes(c));
  }
  return given === q.correct;
}

function isAnswered(q, given) {
  if (given === undefined || given === null) return false;
  return isMulti(q) ? Array.isArray(given) && given.length > 0 : true;
}

function scoreExam(exam, answers) {
  const perUnit = {};
  let correct = 0;
  const items = exam.questions.map((q, i) => {
    const given = answers[q.id];
    const answered = isAnswered(q, given);
    const ok = isCorrect(q, given);
    if (ok) correct++;
    const u = (perUnit[q.unit] = perUnit[q.unit] || { correct: 0, total: 0 });
    u.total++;
    if (ok) u.correct++;
    return { q, n: i + 1, given, answered, ok };
  });
  return { correct, total: exam.questions.length, perUnit, items };
}

function estimateAp(pct, bands) {
  const sorted = [...bands].sort((a, b) => b.min - a.min);
  for (const b of sorted) if (pct >= b.min) return b.ap;
  return 1;
}

function fmtClock(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(h ? 2 : 1, "0");
  return (h ? `${h}:` : "") + `${mm}:${String(sec).padStart(2, "0")}`;
}


// ---- figures & shared stimuli ----
function Figure({ fig, S }) {
  if (fig.table) {
    const { headers = [], rows = [] } = fig.table;
    return (
      <figure style={S.fig}>
        <div style={S.tableWrap}>
          <table style={S.table}>
            {headers.length > 0 && (
              <thead>
                <tr>{headers.map((h, i) => <th key={i} style={S.th}><RichText text={String(h)} /></th>)}</tr>
              </thead>
            )}
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci} style={ci === 0 ? S.tdFirst : S.td}><RichText text={String(c)} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        {fig.caption && <figcaption style={S.figCaption}>{fig.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <figure style={S.fig}>
      <div
        className="exam-fig"
        role="img"
        aria-label={fig.alt || "Figure"}
        style={{ maxWidth: fig.maxWidth || 560, ...(fig.minWidth ? { "--fig-min": fig.minWidth + "px" } : {}) }}
        dangerouslySetInnerHTML={{ __html: fig.svg }}
      />
      {fig.caption && <figcaption style={S.figCaption}>{fig.caption}</figcaption>}
    </figure>
  );
}

function Stimulus({ exam, q, S, compact }) {
  const set = q.setId && exam.sets ? exam.sets[q.setId] : null;
  let label = null;
  if (set) {
    const idx = exam.questions.map((x, i) => (x.setId === q.setId ? i + 1 : null)).filter(Boolean);
    const first = idx[0], last = idx[idx.length - 1];
    label = first === last ? `Question ${first} refers to the following.` : `Questions ${first}–${last} refer to the following information.`;
  }
  const paras = set ? (Array.isArray(set.text) ? set.text : set.text ? [set.text] : []) : [];
  const figs = set ? set.figures || [] : [];
  if (!set) return null;
  return (
    <div style={compact ? S.stimCompact : S.stim}>
      <div style={S.stimLabel}>{label}</div>
      {paras.map((t, i) => <p key={i} style={S.stimText}><RichText text={t} /></p>)}
      {figs.map((f, i) => <Figure key={i} fig={f} S={S} />)}
    </div>
  );
}

function QuestionFigures({ q, S }) {
  if (!q.figures || !q.figures.length) return null;
  return <>{q.figures.map((f, i) => <Figure key={i} fig={f} S={S} />)}</>;
}

export default function ExamEngine({ hubKey, format, exams, units, colors, reference }) {
  const STORE_KEY = `${hubKey}-exams-v1`;
  const [store, setStore] = useState({}); // { [examId]: record }
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState({ type: "list" }); // list | run | report
  const [modal, setModal] = useState(null); // { kind: "start"|"submit"|"reset", examId }
  const [timerChoice, setTimerChoice] = useState(true);
  const [reportFilter, setReportFilter] = useState("missed");
  const [elapsed, setElapsed] = useState(0);
  const [refTab, setRefTab] = useState(0);

  const storeRef = useRef(store);
  storeRef.current = store;
  const elapsedRef = useRef(0);

  const C = colors;
  const S = useMemo(() => makeStyles(C), [C]);

  // ---- persistence ----
  useEffect(() => {
    (async () => {
      try {
        const r = await storage.get(STORE_KEY, false);
        if (r && r.value) {
          const parsed = JSON.parse(r.value);
          if (parsed && typeof parsed === "object") setStore(parsed);
        }
      } catch { /* nothing saved yet */ }
      setLoaded(true);
    })();
  }, [STORE_KEY]);

  const commit = useCallback(
    (next) => {
      setStore(next);
      storeRef.current = next;
      storage.set(STORE_KEY, JSON.stringify(next), false).catch(() => {});
    },
    [STORE_KEY]
  );

  const patch = useCallback(
    (examId, changes) => {
      const prev = storeRef.current[examId] || {};
      commit({ ...storeRef.current, [examId]: { ...prev, ...changes } });
    },
    [commit]
  );

  const examById = (id) => exams.find((e) => e.id === id);
  const minutesFor = (exam) => exam.minutes ?? format.minutes;

  // scroll to top when the screen or question changes
  const rec = view.examId ? store[view.examId] : null;
  const qIndex = rec?.index ?? 0;
  useEffect(() => {
    document.querySelector(".app-body")?.scrollTo({ top: 0 });
  }, [view.type, view.examId, qIndex, reportFilter]);

  // ---- actions ----
  function beginExam(examId, useTimer) {
    commit({
      ...storeRef.current,
      [examId]: { status: "inprogress", answers: {}, flags: {}, index: 0, timerOn: useTimer, elapsed: 0, startedAt: Date.now() },
    });
    elapsedRef.current = 0;
    setElapsed(0);
    setModal(null);
    setView({ type: "run", examId });
  }

  function resumeExam(examId) {
    const r = storeRef.current[examId];
    elapsedRef.current = r?.elapsed || 0;
    setElapsed(elapsedRef.current);
    setView({ type: "run", examId });
  }

  function saveAndExit(examId) {
    patch(examId, { elapsed: elapsedRef.current });
    setView({ type: "list" });
  }

  const submitExam = useCallback(
    (examId) => {
      const prev = storeRef.current[examId] || {};
      commit({
        ...storeRef.current,
        [examId]: { ...prev, status: "completed", elapsed: elapsedRef.current, submittedAt: Date.now() },
      });
      setModal(null);
      setReportFilter("missed");
      setView({ type: "report", examId });
    },
    [commit]
  );

  function resetExam(examId) {
    const next = { ...storeRef.current };
    delete next[examId];
    commit(next);
    setModal(null);
    setView({ type: "list" });
  }

  // ---- timer ----
  const running = view.type === "run" && rec?.status === "inprogress";
  const timerOn = !!rec?.timerOn;
  useEffect(() => {
    if (!running) return;
    const examId = view.examId;
    const exam = examById(examId);
    const limit = exam ? minutesFor(exam) * 60 : 0;
    const id = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      if (elapsedRef.current % 10 === 0) patch(examId, { elapsed: elapsedRef.current });
      if (timerOn && limit && elapsedRef.current >= limit) submitExam(examId);
    }, 1000);
    return () => {
      clearInterval(id);
      patch(examId, { elapsed: elapsedRef.current });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, view.examId, timerOn]);

  // ---- keyboard (exam only) ----
  useEffect(() => {
    if (!running || modal) return;
    const exam = examById(view.examId);
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      const r = storeRef.current[view.examId];
      if (!r || !exam) return;
      const i = r.index || 0;
      if (e.key === "ArrowRight" && i < exam.questions.length - 1) patch(view.examId, { index: i + 1 });
      else if (e.key === "ArrowLeft" && i > 0) patch(view.examId, { index: i - 1 });
      else if (/^[a-eA-E]$/.test(e.key)) {
        const idx = e.key.toUpperCase().charCodeAt(0) - 65;
        if (idx < exam.questions[i].choices.length) choose(exam, exam.questions[i], idx);
      } else if (e.key === "f" || e.key === "F") toggleFlag(exam.questions[i].id);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, modal, view.examId]);

  function choose(exam, q, idx) {
    const r = storeRef.current[exam.id];
    if (!r || r.status !== "inprogress") return;
    let value;
    if (isMulti(q)) {
      const cur = Array.isArray(r.answers[q.id]) ? r.answers[q.id] : [];
      if (cur.includes(idx)) value = cur.filter((x) => x !== idx);
      else value = [...cur, idx].slice(-q.correct.length); // keep only the most recent N picks
    } else {
      value = r.answers[q.id] === idx ? undefined : idx; // tap again to clear
    }
    const answers = { ...r.answers };
    if (value === undefined || (Array.isArray(value) && value.length === 0)) delete answers[q.id];
    else answers[q.id] = value;
    patch(exam.id, { answers });
  }

  function toggleFlag(qid) {
    const r = storeRef.current[view.examId];
    if (!r) return;
    const flags = { ...r.flags };
    if (flags[qid]) delete flags[qid];
    else flags[qid] = true;
    patch(view.examId, { flags });
  }

  if (!loaded) return <div style={S.muted}>Loading exams…</div>;

  // =========================================================== LIST
  if (view.type === "list") {
    return (
      <div style={S.wrap}>
        <style>{layoutCss}</style>
        <div style={S.listHead}>
          <h2 style={S.listTitle}>MCQ Exams</h2>
          <p style={S.listSub}>
            Full-length practice exams built to match the real multiple-choice section: {format.questions} questions, {format.minutes} minutes,
            with units weighted like the actual exam. You won't see right or wrong until you submit.
          </p>
          <div style={S.infoRow}>
            <span style={S.infoPill}>{format.questions} questions</span>
            <span style={S.infoPill}>{format.minutes} minutes</span>
            <span style={S.infoPill}>Scored at the end</span>
          </div>
        </div>

        <div style={S.examGrid}>
          {exams.map((exam) => {
            const r = store[exam.id];
            const status = r?.status;
            let result = null;
            if (status === "completed") {
              const sc = scoreExam(exam, r.answers || {});
              const pct = Math.round((sc.correct / sc.total) * 100);
              result = { ...sc, pct, ap: estimateAp(pct, format.bands) };
            }
            const answeredCount = r ? exam.questions.filter((q) => isAnswered(q, (r.answers || {})[q.id])).length : 0;
            return (
              <div key={exam.id} style={S.examCard}>
                <div style={S.examCardTop}>
                  <div style={S.examTitle}>{exam.title}</div>
                  {exam.sample && <span style={S.samplePill}>Sample</span>}
                </div>
                <div style={S.examDesc}>{exam.description}</div>
                <div style={S.examMeta}>
                  {exam.questions.length} questions · {minutesFor(exam)} min
                </div>

                {status === "completed" && result && (
                  <div style={S.resultStrip}>
                    <div>
                      <div style={S.resultBig}>{result.correct}/{result.total}</div>
                      <div style={S.resultSmall}>{result.pct}% correct</div>
                    </div>
                    <div style={S.apBadge}>
                      <div style={S.apNum}>{result.ap}</div>
                      <div style={S.apLabel}>est. AP</div>
                    </div>
                  </div>
                )}
                {status === "inprogress" && (
                  <div style={S.progressNote}>In progress — {answeredCount}/{exam.questions.length} answered</div>
                )}

                <div style={S.cardBtns}>
                  {!status && (
                    <button style={S.primaryBtn} onClick={() => { setTimerChoice(true); setModal({ kind: "start", examId: exam.id }); }}>
                      Start exam
                    </button>
                  )}
                  {status === "inprogress" && (
                    <button style={S.primaryBtn} onClick={() => resumeExam(exam.id)}>Resume</button>
                  )}
                  {status === "completed" && (
                    <button style={S.primaryBtn} onClick={() => { setReportFilter("missed"); setView({ type: "report", examId: exam.id }); }}>
                      View report
                    </button>
                  )}
                  {status && (
                    <button style={S.ghostBtn} onClick={() => setModal({ kind: "reset", examId: exam.id })}>
                      Reset exam
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p style={S.footnote}>
          Tip: "Reset exam" clears your answers and score so the exam can be taken fresh later — handy after trying one out just to see how it works.
        </p>

        {modal && renderModal()}
      </div>
    );
  }

  const exam = examById(view.examId);
  if (!exam || !rec) {
    return (
      <div style={S.wrap}>
        <p style={S.muted}>That exam isn't available.</p>
        <button style={S.primaryBtn} onClick={() => setView({ type: "list" })}>Back to exams</button>
      </div>
    );
  }

  // =========================================================== RUN
  if (view.type === "run") {
    const q = exam.questions[Math.min(rec.index || 0, exam.questions.length - 1)];
    const i = exam.questions.indexOf(q);
    const answers = rec.answers || {};
    const flags = rec.flags || {};
    const given = answers[q.id];
    const limit = minutesFor(exam) * 60;
    const remaining = limit - elapsed;
    const answeredCount = exam.questions.filter((x) => isAnswered(x, answers[x.id])).length;
    const multi = isMulti(q);
    const lowTime = rec.timerOn && remaining <= 300;

    return (
      <div style={S.wrap}>
        <style>{layoutCss}</style>
        <div style={S.runBar}>
          <div>
            <div style={S.runTitle}>{exam.title}</div>
            <div style={S.runSub}>{answeredCount}/{exam.questions.length} answered</div>
          </div>
          <div style={S.runRight}>
            <div style={{ ...S.clock, ...(lowTime ? S.clockLow : {}) }} aria-live="off">
              {rec.timerOn ? fmtClock(remaining) : fmtClock(elapsed)}
              <span style={S.clockTag}>{rec.timerOn ? "left" : "elapsed"}</span>
            </div>
            {reference && reference.length > 0 && (
              <button style={S.ghostBtn} onClick={() => setModal({ kind: "reference", examId: exam.id })}>Reference</button>
            )}
            <button style={S.ghostBtn} onClick={() => saveAndExit(exam.id)}>Save &amp; exit</button>
          </div>
        </div>

        <div className="exam-layout">
          <div style={S.qPanel}>
            <div style={S.qTop}>
              <div style={S.qNum}>Question {i + 1} <span style={S.qOf}>of {exam.questions.length}</span></div>
              <button
                style={{ ...S.flagBtn, ...(flags[q.id] ? S.flagBtnOn : {}) }}
                onClick={() => toggleFlag(q.id)}
                aria-pressed={!!flags[q.id]}
              >
                {flags[q.id] ? "⚑ Flagged" : "⚐ Flag for review"}
              </button>
            </div>

            <Stimulus exam={exam} q={q} S={S} />
            <p style={S.stem}><RichText text={q.stem} /></p>
            <QuestionFigures q={q} S={S} />
            {multi && <div style={S.multiNote}>Select {q.correct.length} answers.</div>}

            <div style={S.choices} role={multi ? "group" : "radiogroup"} aria-label="Answer choices">
              {q.choices.map((c, idx) => {
                const picked = multi ? Array.isArray(given) && given.includes(idx) : given === idx;
                return (
                  <button
                    key={idx}
                    style={{ ...S.choice, ...(picked ? S.choicePicked : {}) }}
                    className="exam-choice"
                    onClick={() => choose(exam, q, idx)}
                    role={multi ? "checkbox" : "radio"}
                    aria-checked={picked}
                  >
                    <span style={{ ...S.letter, ...(picked ? S.letterPicked : {}), ...(multi ? { borderRadius: 6 } : {}) }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span style={S.choiceText}><RichText text={c} /></span>
                  </button>
                );
              })}
            </div>

            <div style={S.pager}>
              <button style={S.ghostBtn} disabled={i === 0} onClick={() => patch(exam.id, { index: i - 1 })}>← Previous</button>
              {i < exam.questions.length - 1 ? (
                <button style={S.primaryBtn} onClick={() => patch(exam.id, { index: i + 1 })}>Next →</button>
              ) : (
                <button style={S.primaryBtn} onClick={() => setModal({ kind: "submit", examId: exam.id })}>Review &amp; submit</button>
              )}
            </div>
            <div style={S.keyHint}>Shortcuts: ← → move · A–D answer · F flag</div>
          </div>

          <aside style={S.navPanel}>
            <div style={S.navTitle}>Question navigator</div>
            <div style={S.navGrid}>
              {exam.questions.map((x, n) => {
                const ans = isAnswered(x, answers[x.id]);
                const cur = n === i;
                return (
                  <button
                    key={x.id}
                    onClick={() => patch(exam.id, { index: n })}
                    aria-label={`Question ${n + 1}${ans ? ", answered" : ", unanswered"}${flags[x.id] ? ", flagged" : ""}`}
                    aria-current={cur ? "true" : undefined}
                    style={{
                      ...S.navCell,
                      ...(ans ? S.navAnswered : {}),
                      ...(cur ? S.navCurrent : {}),
                    }}
                  >
                    {n + 1}
                    {flags[x.id] && <span style={S.navFlag} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
            <div style={S.legend}>
              <span><i style={{ ...S.dot, background: C.pill }} /> answered</span>
              <span><i style={{ ...S.dot, background: "#fff", border: "1px solid #D8D6CE" }} /> blank</span>
              <span><i style={{ ...S.dot, background: "#E3A857" }} /> flagged</span>
            </div>
            <button style={{ ...S.primaryBtn, width: "100%", marginTop: 14 }} onClick={() => setModal({ kind: "submit", examId: exam.id })}>
              Submit exam
            </button>
          </aside>
        </div>

        {modal && renderModal()}
      </div>
    );
  }

  // =========================================================== REPORT
  const sc = scoreExam(exam, rec.answers || {});
  const pct = Math.round((sc.correct / sc.total) * 100);
  const ap = estimateAp(pct, format.bands);
  const missed = sc.items.filter((x) => x.answered && !x.ok);
  const blank = sc.items.filter((x) => !x.answered);
  const flaggedItems = sc.items.filter((x) => (rec.flags || {})[x.q.id]);
  const shown =
    reportFilter === "missed" ? sc.items.filter((x) => !x.ok)
    : reportFilter === "flagged" ? flaggedItems
    : sc.items;
  const unitRows = units
    .map((u) => ({ u, ...(sc.perUnit[u.id] || { correct: 0, total: 0 }) }))
    .filter((r) => r.total > 0);
  const weakest = [...unitRows].sort((a, b) => a.correct / a.total - b.correct / b.total)[0];
  const bandIdx = [...format.bands].sort((a, b) => b.min - a.min);
  const nextBand = bandIdx.slice().reverse().find((b) => b.min > pct);

  return (
    <div style={S.wrap}>
      <style>{layoutCss}</style>
      <button style={S.linkBtn} onClick={() => setView({ type: "list" })}>← All exams</button>

      <div style={S.reportHero}>
        <div>
          <div style={S.reportKicker}>{exam.title} · Score report</div>
          <div style={S.reportScore}>{sc.correct}<span style={S.reportOf}> / {sc.total}</span></div>
          <div style={S.reportPct}>{pct}% correct{rec.elapsed ? ` · ${fmtClock(rec.elapsed)} used` : ""}</div>
          <div style={S.reportCounts}>
            {missed.length} incorrect · {blank.length} unanswered
          </div>
        </div>
        <div style={S.apBig}>
          <div style={S.apBigNum}>{ap}</div>
          <div style={S.apBigLabel}>Estimated AP score</div>
          <div style={S.apBigSub}>{AP_LABELS[ap]}</div>
        </div>
      </div>
      <p style={S.estimateNote}>
        This estimate uses the multiple-choice section only. The real AP score also includes the free-response section, and College Board
        adjusts its score cutoffs every year, so treat this as a guide, not a prediction.
        {nextBand ? ` About ${Math.max(1, Math.ceil(((nextBand.min - pct) / 100) * sc.total))} more correct answer${Math.ceil(((nextBand.min - pct) / 100) * sc.total) === 1 ? "" : "s"} would reach an estimated ${nextBand.ap}.` : ""}
      </p>

      <h3 style={S.sectionH}>Results by unit</h3>
      <div style={S.unitTable}>
        {unitRows.map((r) => {
          const p = Math.round((r.correct / r.total) * 100);
          const isWeak = weakest && weakest.u.id === r.u.id && unitRows.length > 1;
          return (
            <div key={r.u.id} style={S.unitRow}>
              <div style={S.unitRowTop}>
                <span style={S.unitRowName}>
                  <b>Unit {r.u.id}</b> · {r.u.name}
                  {isWeak && <span style={S.weakTag}>Focus here</span>}
                </span>
                <span style={S.unitRowScore}>{r.correct}/{r.total} · {p}%</span>
              </div>
              <div style={S.track}><div style={{ ...S.fill, width: `${p}%`, background: p >= 70 ? "#6FA06A" : p >= 50 ? "#E3A857" : "#D98B7B" }} /></div>
            </div>
          );
        })}
      </div>

      <h3 style={S.sectionH}>Review your answers</h3>
      <div style={S.filters}>
        {[
          { id: "missed", label: `Missed & blank (${missed.length + blank.length})` },
          { id: "flagged", label: `Flagged (${flaggedItems.length})` },
          { id: "all", label: `All questions (${sc.total})` },
        ].map((f) => (
          <button key={f.id} onClick={() => setReportFilter(f.id)} style={{ ...S.filterBtn, ...(reportFilter === f.id ? S.filterOn : {}) }}>
            {f.label}
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <div style={S.allGood}>
          {reportFilter === "missed" ? "Nothing missed — great work!" : "Nothing here."}
        </div>
      )}

      {shown.map(({ q, n, given, answered, ok }) => (
        <div key={q.id} style={S.reviewCard}>
          <div style={S.reviewTop}>
            <span style={S.reviewNum}>Q{n}</span>
            <span style={S.reviewUnit}>Unit {q.unit}</span>
            <span style={{ ...S.verdict, ...(ok ? S.verdictOk : answered ? S.verdictBad : S.verdictBlank) }}>
              {ok ? "Correct" : answered ? "Incorrect" : "Unanswered"}
            </span>
          </div>
          <Stimulus exam={exam} q={q} S={S} compact />
          <p style={S.stem}><RichText text={q.stem} /></p>
          <QuestionFigures q={q} S={S} />
          <div style={S.choices}>
            {q.choices.map((c, idx) => {
              const correctChoice = isMulti(q) ? q.correct.includes(idx) : q.correct === idx;
              const picked = isMulti(q) ? Array.isArray(given) && given.includes(idx) : given === idx;
              return (
                <div
                  key={idx}
                  style={{ ...S.reviewChoice, ...(correctChoice ? S.revCorrect : picked ? S.revWrong : {}) }}
                >
                  <span style={S.letter}>{String.fromCharCode(65 + idx)}</span>
                  <span style={S.choiceText}><RichText text={c} /></span>
                  {correctChoice && <span style={S.tagOk}>Correct answer</span>}
                  {picked && !correctChoice && <span style={S.tagBad}>Your answer</span>}
                  {picked && correctChoice && <span style={S.tagOk}>Your answer</span>}
                </div>
              );
            })}
          </div>
          <div style={S.explain}>
            <div style={S.explainLabel}>Explanation</div>
            <p style={S.explainText}><RichText text={q.explanation} /></p>
          </div>
        </div>
      ))}

      <div style={S.reportFooter}>
        <button style={S.primaryBtn} onClick={() => setView({ type: "list" })}>Back to exams</button>
        <button style={S.ghostBtn} onClick={() => setModal({ kind: "reset", examId: exam.id })}>Reset &amp; retake later</button>
      </div>

      {modal && renderModal()}
    </div>
  );

  // =========================================================== MODALS
  function renderModal() {
    const ex = examById(modal.examId);
    if (!ex) return null;
    const r = store[ex.id] || {};
    const answers = r.answers || {};
    const unanswered = ex.questions.filter((x) => !isAnswered(x, answers[x.id])).length;
    const flaggedCount = Object.keys(r.flags || {}).length;

    if (modal.kind === "reference") {
      const sec = reference[Math.min(refTab, reference.length - 1)];
      return (
        <div style={S.backdrop} onClick={() => setModal(null)}>
          <div style={S.refModal} role="dialog" aria-modal="true" aria-label="Reference sheet" onClick={(e) => e.stopPropagation()}>
            <div style={S.refHead}>
              <div style={S.refTitle}>Reference sheet</div>
              <button style={S.ghostBtn} onClick={() => setModal(null)}>Close</button>
            </div>
            {reference.length > 1 && (
              <div style={S.refTabs}>
                {reference.map((r, i) => (
                  <button key={i} onClick={() => setRefTab(i)} style={{ ...S.filterBtn, ...(i === refTab ? S.filterOn : {}) }}>{r.title}</button>
                ))}
              </div>
            )}
            <div className="exam-ref" style={S.refBody} dangerouslySetInnerHTML={{ __html: sec.html }} />
            <p style={S.refNote}>A study aid that mirrors the reference materials provided on the real exam. Check it against the official version before exam day.</p>
          </div>
        </div>
      );
    }

    let body;
    if (modal.kind === "start") {
      body = (
        <>
          <h3 style={S.modalTitle}>{ex.title}</h3>
          <p style={S.modalText}>
            {ex.questions.length} questions. You'll see your score, an estimated AP score, and a review of everything you missed only after you submit.
            You can flag questions, change answers, and save &amp; exit to continue later.
          </p>
          <label style={S.checkRow}>
            <input type="checkbox" checked={timerChoice} onChange={(e) => setTimerChoice(e.target.checked)} />
            <span>Use the real exam timer ({minutesFor(ex)} minutes)</span>
          </label>
          <p style={S.modalHint}>
            {timerChoice
              ? "The exam submits automatically when time runs out."
              : "Untimed: a stopwatch still tracks how long you take."}
          </p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Cancel</button>
            <button style={S.primaryBtn} onClick={() => beginExam(ex.id, timerChoice)}>Begin exam</button>
          </div>
        </>
      );
    } else if (modal.kind === "submit") {
      body = (
        <>
          <h3 style={S.modalTitle}>Submit exam?</h3>
          <p style={S.modalText}>
            {unanswered > 0
              ? `You still have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Unanswered questions are scored as incorrect.`
              : "You've answered every question."}
            {flaggedCount > 0 ? ` ${flaggedCount} question${flaggedCount === 1 ? " is" : "s are"} still flagged for review.` : ""}
          </p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Keep working</button>
            <button style={S.primaryBtn} onClick={() => submitExam(ex.id)}>Submit &amp; see score</button>
          </div>
        </>
      );
    } else {
      body = (
        <>
          <h3 style={S.modalTitle}>Reset this exam?</h3>
          <p style={S.modalText}>
            This clears all your answers, flags, and the score for <b>{ex.title}</b>, so it can be taken fresh later. This can't be undone.
          </p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Cancel</button>
            <button style={S.dangerBtn} onClick={() => resetExam(ex.id)}>Yes, reset exam</button>
          </div>
        </>
      );
    }

    return (
      <div style={S.backdrop} onClick={() => setModal(null)}>
        <div style={S.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          {body}
        </div>
      </div>
    );
  }
}

const layoutCss = `
  .exam-layout{ display:grid; grid-template-columns: minmax(0,1fr) 250px; gap:20px; align-items:start; }
  .exam-layout aside{ position:sticky; top:12px; }
  @media (max-width: 820px){
    .exam-layout{ grid-template-columns: minmax(0,1fr); }
    .exam-layout aside{ position:static; }
  }
  .exam-fig svg{ width:100%; height:auto; display:block; }
  @media (max-width: 520px){ .exam-fig{ overflow-x:auto; } .exam-fig svg{ min-width:var(--fig-min, 440px); } }
  .exam-ref{ font-size:14.5px; line-height:1.55; }
  .exam-ref h4{ font-family:'Manrope',sans-serif; font-size:15px; margin:16px 0 6px; }
  .exam-ref table{ border-collapse:collapse; width:100%; margin:6px 0 10px; }
  .exam-ref th, .exam-ref td{ border:1px solid #E2E0D8; padding:4px 8px; text-align:left; vertical-align:top; }
  .exam-ref th{ background:#F5F4EE; }
  .exam-ref .pt td{ text-align:center; padding:3px 2px; font-size:11px; min-width:34px; }
  .exam-ref .pt .sym{ font-weight:800; font-size:13px; display:block; }
  .exam-choice:hover{ border-color: var(--sage-pill) !important; background: var(--sage-pale) !important; cursor:pointer; }
`;

function makeStyles(C) {
  const card = { background: "#fff", border: "1px solid #ECEAE3", borderRadius: 16, boxShadow: "0 2px 8px rgba(70,90,60,0.05)" };
  const btn = { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14, borderRadius: 100, padding: "9px 18px", cursor: "pointer", border: "none" };
  return {
    wrap: { maxWidth: 1000, margin: "0 auto", paddingBottom: 40 },
    muted: { color: "#767F73", padding: 20 },
    listHead: { marginBottom: 18 },
    listTitle: { fontFamily: "'Manrope',sans-serif", fontSize: 26, fontWeight: 800, margin: "0 0 6px" },
    listSub: { color: "#5F675C", fontSize: 15, lineHeight: 1.6, maxWidth: 720, margin: "0 0 12px" },
    infoRow: { display: "flex", gap: 8, flexWrap: "wrap" },
    infoPill: { background: C.pill, color: C.accentDeep, fontWeight: 700, fontSize: 12.5, padding: "6px 13px", borderRadius: 100 },
    examGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 },
    examCard: { ...card, padding: 18, display: "flex", flexDirection: "column" },
    examCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 },
    examTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 18 },
    samplePill: { background: "#FBF0DD", color: "#9A6A1F", fontWeight: 700, fontSize: 11, padding: "3px 10px", borderRadius: 100 },
    examDesc: { color: "#5F675C", fontSize: 14, lineHeight: 1.5, margin: "8px 0", flex: 1 },
    examMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: "#767F73", marginBottom: 12 },
    resultStrip: { display: "flex", justifyContent: "space-between", alignItems: "center", background: C.pale, borderRadius: 12, padding: "10px 14px", marginBottom: 12 },
    resultBig: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22 },
    resultSmall: { fontSize: 12.5, color: "#5F675C" },
    apBadge: { textAlign: "center", background: "#fff", borderRadius: 12, padding: "6px 14px" },
    apNum: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22, color: C.accentDeep, lineHeight: 1.1 },
    apLabel: { fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#767F73" },
    progressNote: { fontSize: 13, color: "#9A6A1F", background: "#FBF0DD", borderRadius: 10, padding: "7px 12px", marginBottom: 12 },
    cardBtns: { display: "flex", gap: 8, flexWrap: "wrap" },
    primaryBtn: { ...btn, background: C.accent, color: "#fff" },
    ghostBtn: { ...btn, background: "#F0EFE9", color: "#5A4E3F" },
    dangerBtn: { ...btn, background: "#B14D3A", color: "#fff" },
    linkBtn: { ...btn, background: "transparent", color: C.accentDeep, padding: "4px 0", marginBottom: 10 },
    footnote: { color: "#767F73", fontSize: 13, marginTop: 18 },

    runBar: { ...card, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", padding: "12px 16px", marginBottom: 16 },
    runTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 16 },
    runSub: { fontSize: 12.5, color: "#767F73" },
    runRight: { display: "flex", alignItems: "center", gap: 12 },
    clock: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600, fontSize: 20, color: C.accentDeep, display: "flex", alignItems: "baseline", gap: 6 },
    clockLow: { color: "#B14D3A" },
    clockTag: { fontSize: 11, color: "#767F73", textTransform: "uppercase", letterSpacing: "0.06em" },
    qPanel: { ...card, padding: "18px 20px" },
    qTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" },
    qNum: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17 },
    qOf: { color: "#767F73", fontWeight: 600, fontSize: 14 },
    flagBtn: { ...btn, background: "#F0EFE9", color: "#5A4E3F", padding: "6px 14px", fontSize: 13 },
    flagBtnOn: { background: "#FBE3B5", color: "#7A5212" },
    stem: { fontSize: 16, lineHeight: 1.6, margin: "14px 0" },
    multiNote: { fontWeight: 700, fontSize: 13.5, color: C.accentDeep, marginBottom: 10 },
    choices: { display: "flex", flexDirection: "column", gap: 9 },
    choice: { display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left", color: "inherit", fontFamily: "inherit", fontSize: 15, lineHeight: 1.5, background: "#FCFBF8", border: "1px solid #E2E0D8", borderRadius: 12, padding: "11px 14px", cursor: "pointer" },
    choicePicked: { background: C.pale, border: `1.5px solid ${C.accent}` },
    letter: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 13, width: 26, height: 26, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 100, border: "1px solid #D8D6CE", color: "#5F675C", background: "#fff" },
    letterPicked: { background: C.accent, border: `1px solid ${C.accent}`, color: "#fff" },
    choiceText: { flex: 1, minWidth: 0 },
    pager: { display: "flex", justifyContent: "space-between", marginTop: 18, gap: 10 },
    keyHint: { fontSize: 12, color: "#9AA096", marginTop: 10 },
    navPanel: { ...card, padding: 14 },
    navTitle: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#767F73", marginBottom: 10 },
    navGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(38px, 1fr))", gap: 6 },
    navCell: { position: "relative", fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600, fontSize: 13, height: 36, borderRadius: 9, border: "1px solid #D8D6CE", background: "#fff", color: "#3C423A", cursor: "pointer", padding: 0 },
    navAnswered: { background: C.pill, border: `1px solid ${C.pill}`, color: C.accentDeep },
    navCurrent: { outline: `2px solid ${C.accent}`, outlineOffset: 1 },
    navFlag: { position: "absolute", top: -3, right: -3, width: 10, height: 10, borderRadius: 100, background: "#E3A857", border: "2px solid #fff" },
    legend: { display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "#767F73", marginTop: 12 },
    dot: { display: "inline-block", width: 11, height: 11, borderRadius: 4, marginRight: 5, verticalAlign: "-1px" },

    reportHero: { ...card, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap", padding: "22px 26px", background: C.pale, border: "none" },
    reportKicker: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "#767F73" },
    reportScore: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 46, lineHeight: 1.1, margin: "6px 0 2px" },
    reportOf: { fontSize: 22, color: "#767F73", fontWeight: 700 },
    reportPct: { fontWeight: 700, fontSize: 15 },
    reportCounts: { fontSize: 13.5, color: "#5F675C", marginTop: 2 },
    apBig: { background: "#fff", borderRadius: 18, padding: "16px 26px", textAlign: "center", minWidth: 190 },
    apBigNum: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 54, lineHeight: 1, color: C.accentDeep },
    apBigLabel: { fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#767F73", marginTop: 6 },
    apBigSub: { fontWeight: 700, fontSize: 13.5, marginTop: 2 },
    estimateNote: { fontSize: 13, color: "#767F73", lineHeight: 1.55, margin: "10px 2px 0" },
    sectionH: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, margin: "28px 0 12px" },
    unitTable: { ...card, padding: "6px 18px" },
    unitRow: { padding: "11px 0", borderBottom: "1px solid #F0EFE9" },
    unitRowTop: { display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", fontSize: 14.5, marginBottom: 6 },
    unitRowName: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
    unitRowScore: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 13, color: "#5F675C" },
    weakTag: { background: "#FBEAE5", color: "#B14D3A", fontWeight: 700, fontSize: 11, borderRadius: 100, padding: "2px 9px" },
    track: { height: 8, background: "#EEECE5", borderRadius: 100, overflow: "hidden" },
    fill: { height: "100%", borderRadius: 100 },
    filters: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
    filterBtn: { ...btn, background: "#F0EFE9", color: "#5A4E3F", fontSize: 13, padding: "7px 14px" },
    filterOn: { background: C.accent, color: "#fff" },
    allGood: { ...card, padding: 22, textAlign: "center", color: "#5F675C" },
    reviewCard: { ...card, padding: "16px 20px", marginBottom: 14 },
    reviewTop: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
    reviewNum: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 13, background: C.pill, color: C.accentDeep, borderRadius: 8, padding: "3px 9px" },
    reviewUnit: { fontSize: 12.5, color: "#767F73" },
    verdict: { marginLeft: "auto", fontWeight: 700, fontSize: 12, borderRadius: 100, padding: "3px 11px" },
    verdictOk: { background: "#E1EEDD", color: "#3F6B3A" },
    verdictBad: { background: "#FBEAE5", color: "#B14D3A" },
    verdictBlank: { background: "#F0EFE9", color: "#5A4E3F" },
    reviewChoice: { display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid #E9E7DF", borderRadius: 12, padding: "9px 13px", fontSize: 14.5, lineHeight: 1.5, background: "#fff" },
    revCorrect: { background: "#E1EEDD", border: "1px solid #8DB886" },
    revWrong: { background: "#FBEAE5", border: "1px solid #D98B7B" },
    tagOk: { fontSize: 11, fontWeight: 700, color: "#3F6B3A", whiteSpace: "nowrap" },
    tagBad: { fontSize: 11, fontWeight: 700, color: "#B14D3A", whiteSpace: "nowrap" },
    explain: { background: C.pale, borderRadius: 12, padding: "12px 16px", marginTop: 12 },
    explainLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accentDeep, marginBottom: 4 },
    explainText: { fontSize: 14.5, lineHeight: 1.6, margin: 0 },
    reportFooter: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 },

    backdrop: { position: "fixed", inset: 0, background: "rgba(30,34,30,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 50 },
    modal: { background: "#fff", borderRadius: 18, padding: "22px 24px", maxWidth: 460, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" },
    modalTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 20, margin: "0 0 8px" },
    modalText: { fontSize: 15, lineHeight: 1.6, color: "#3C423A", margin: "0 0 12px" },
    modalHint: { fontSize: 13, color: "#767F73", margin: "0 0 14px" },
    modalBtns: { display: "flex", justifyContent: "flex-end", gap: 10, flexWrap: "wrap" },
    fig: { margin: "14px 0", padding: 0 },
    figCaption: { fontSize: 12.5, color: "#767F73", marginTop: 6 },
    tableWrap: { overflowX: "auto" },
    table: { borderCollapse: "collapse", fontSize: 14, minWidth: 240 },
    th: { background: C.pale, border: "1px solid #D8D6CE", padding: "6px 12px", textAlign: "left", fontWeight: 700 },
    td: { border: "1px solid #E2E0D8", padding: "6px 12px" },
    tdFirst: { border: "1px solid #E2E0D8", padding: "6px 12px", fontWeight: 700, background: "#FBFAF6" },
    stim: { background: "#FBFAF6", border: "1px solid #E7E4DA", borderRadius: 14, padding: "12px 16px", margin: "14px 0 6px" },
    stimCompact: { background: "#FBFAF6", border: "1px solid #E7E4DA", borderRadius: 12, padding: "10px 14px", margin: "12px 0 4px" },
    stimLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#767F73", marginBottom: 6 },
    stimText: { fontSize: 15, lineHeight: 1.6, margin: "0 0 8px" },
    refModal: { background: "#fff", borderRadius: 18, padding: "18px 22px", maxWidth: 820, width: "100%", maxHeight: "86vh", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" },
    refHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
    refTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19 },
    refTabs: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 },
    refBody: { overflowY: "auto", flex: 1, paddingRight: 4 },
    refNote: { fontSize: 12, color: "#9AA096", margin: "8px 0 0" },
    checkRow: { display: "flex", gap: 10, alignItems: "center", fontSize: 15, fontWeight: 700, margin: "6px 0 6px", cursor: "pointer" },
  };
}
