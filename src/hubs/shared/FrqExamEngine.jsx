import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { storage } from "../../lib/storage";
import RichText from "./RichText";
import { Figure, makeStyles, layoutCss, fmtClock } from "./ExamEngine";

/*
  Full-length free-response (FRQ) exams, shared by every hub that has them.

  Props
    hubKey    – unique storage prefix, e.g. "physics2"
    format    – { minutes, points, intro } describing the real exam section
    exams     – [{ id, title, description, sample?, minutes?, questions: [...] }]
    colors    – { accent, accentDeep, pale, pill }
    reference – optional [{ title, html }] reference sheets (shown in a pop-up while writing)

  question: { id, kind, minutes?, intro?: string[], figures?, parts: [...] }
  part:     { id, lead?: string[], figures?, prompt: string, paper?: boolean,
              rubric: [string | { text, pts }]   // one scoring point each unless pts is given
              note?: string,                     // scoring note shown with the rubric
              model: string | string[],          // a strong, complete response
              modelFigures?: figures }

  Nothing is graded by the app. The student writes responses, then reviews the scoring points and a
  model response and checks off the points they believe they earned (self-scoring).
*/

const rubricItems = (part) => part.rubric.map((r) => (typeof r === "string" ? { text: r, pts: 1 } : { text: r.text, pts: r.pts ?? 1 }));
const partPoints = (part) => rubricItems(part).reduce((s, r) => s + r.pts, 0);
const questionPoints = (q) => q.parts.reduce((s, p) => s + partPoints(p), 0);
const examPoints = (exam) => exam.questions.reduce((s, q) => s + questionPoints(q), 0);
const key = (q, p) => `${q.id}.${p.id}`;
const wordCount = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
const asParas = (x) => (Array.isArray(x) ? x : x ? [x] : []);

function selfScore(exam, checks) {
  let got = 0;
  const perQ = {};
  exam.questions.forEach((q) => {
    let g = 0;
    q.parts.forEach((p) => {
      const c = checks[key(q, p)] || {};
      rubricItems(p).forEach((r, i) => { if (c[i]) g += r.pts; });
    });
    perQ[q.id] = g;
    got += g;
  });
  return { got, perQ };
}

/** Textarea that keeps its own text while typing and saves (debounced) to the exam record. */
function ResponseBox({ value, onSave, F, rows = 6, label }) {
  const [v, setV] = useState(value || "");
  const latest = useRef(v);
  const saved = useRef(value || "");
  const timer = useRef(null);
  const ta = useRef(null);
  const flush = useCallback(() => {
    if (timer.current) { clearTimeout(timer.current); timer.current = null; }
    if (latest.current !== saved.current) { saved.current = latest.current; onSave(latest.current); }
  }, [onSave]);
  useEffect(() => flush, [flush]);
  useEffect(() => {
    const el = ta.current;
    if (el) { el.style.height = "auto"; el.style.height = Math.max(el.scrollHeight + 2, rows * 24) + "px"; }
  }, [v, rows]);
  function change(e) {
    const nv = e.target.value;
    setV(nv);
    latest.current = nv;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(flush, 600);
  }
  return (
    <div>
      <textarea
        ref={ta}
        value={v}
        onChange={change}
        onBlur={flush}
        rows={rows}
        style={F.textarea}
        aria-label={label}
        placeholder="Write your response here. Show your reasoning and your work."
        spellCheck
      />
      <div style={F.wc}>{wordCount(v)} word{wordCount(v) === 1 ? "" : "s"}</div>
    </div>
  );
}

function Paras({ items, style }) {
  return asParas(items).map((t, i) => <p key={i} style={style}><RichText text={t} /></p>);
}

export default function FrqExamEngine({ hubKey, format, exams, colors, reference }) {
  const STORE_KEY = `${hubKey}-frq-exams-v1`;
  const [store, setStore] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState({ type: "list" }); // list | run | review
  const [modal, setModal] = useState(null);
  const [timerChoice, setTimerChoice] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [refTab, setRefTab] = useState(0);
  const [revealed, setRevealed] = useState({}); // model responses shown in review, by part key
  const [timeUp, setTimeUp] = useState(false);

  const storeRef = useRef(store);
  storeRef.current = store;
  const elapsedRef = useRef(0);

  const C = colors;
  const S = useMemo(() => makeStyles(C), [C]);
  const F = useMemo(() => makeFrqStyles(C), [C]);

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

  const commit = useCallback((next) => {
    setStore(next);
    storeRef.current = next;
    storage.set(STORE_KEY, JSON.stringify(next), false).catch(() => {});
  }, [STORE_KEY]);

  const patch = useCallback((examId, changes) => {
    const prev = storeRef.current[examId] || {};
    commit({ ...storeRef.current, [examId]: { ...prev, ...changes } });
  }, [commit]);

  const saveAnswer = useCallback((examId, k, text) => {
    const prev = storeRef.current[examId];
    if (!prev) return;
    const answers = { ...(prev.answers || {}) };
    if (text.trim()) answers[k] = text; else delete answers[k];
    commit({ ...storeRef.current, [examId]: { ...prev, answers } });
  }, [commit]);

  const examById = (id) => exams.find((e) => e.id === id);
  const minutesFor = (exam) => exam.minutes ?? format.minutes;
  const rec = view.examId ? store[view.examId] : null;
  const qIndex = rec?.index ?? 0;

  useEffect(() => {
    document.querySelector(".app-body")?.scrollTo({ top: 0 });
  }, [view.type, view.examId, qIndex]);

  function beginExam(examId, useTimer) {
    commit({ ...storeRef.current, [examId]: { status: "inprogress", answers: {}, checks: {}, notes: {}, index: 0, timerOn: useTimer, elapsed: 0, startedAt: Date.now() } });
    elapsedRef.current = 0;
    setElapsed(0);
    setTimeUp(false);
    setModal(null);
    setView({ type: "run", examId });
  }
  function resumeExam(examId) {
    const r = storeRef.current[examId];
    elapsedRef.current = r?.elapsed || 0;
    setElapsed(elapsedRef.current);
    setTimeUp(false);
    setView({ type: "run", examId });
  }
  function saveAndExit(examId) {
    patch(examId, { elapsed: elapsedRef.current });
    setView({ type: "list" });
  }
  function finishExam(examId) {
    patch(examId, { status: "completed", elapsed: elapsedRef.current, finishedAt: Date.now() });
    setModal(null);
    setRevealed({});
    setView({ type: "review", examId });
  }
  function resetExam(examId) {
    const next = { ...storeRef.current };
    delete next[examId];
    commit(next);
    setModal(null);
    setView({ type: "list" });
  }

  // timer
  const running = view.type === "run" && rec?.status === "inprogress";
  const timerOn = !!rec?.timerOn;
  useEffect(() => {
    if (!running) return undefined;
    const examId = view.examId;
    const exam = examById(examId);
    const limit = exam ? minutesFor(exam) * 60 : 0;
    const id = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      if (elapsedRef.current % 15 === 0) patch(examId, { elapsed: elapsedRef.current });
      if (timerOn && limit && elapsedRef.current === limit) setTimeUp(true);
    }, 1000);
    return () => {
      clearInterval(id);
      patch(examId, { elapsed: elapsedRef.current });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, view.examId, timerOn]);

  const toggleCheck = (examId, k, i) => {
    const r = storeRef.current[examId] || {};
    const checks = { ...(r.checks || {}) };
    const cur = { ...(checks[k] || {}) };
    if (cur[i]) delete cur[i]; else cur[i] = true;
    checks[k] = cur;
    patch(examId, { checks });
  };
  const saveNote = useCallback((examId, qid, text) => {
    const r = storeRef.current[examId] || {};
    patch(examId, { notes: { ...(r.notes || {}), [qid]: text } });
  }, [patch]);

  if (!loaded) return <div style={S.muted}>Loading exams…</div>;

  // =========================================================== LIST
  if (view.type === "list") {
    return (
      <div style={S.wrap}>
        <style>{layoutCss + frqCss}</style>
        <div style={S.listHead}>
          <h2 style={S.listTitle}>FRQ Exams</h2>
          <p style={S.listSub}>{format.intro}</p>
          <div style={S.infoRow}>
            <span style={S.infoPill}>{format.points} points</span>
            <span style={S.infoPill}>{format.minutes} minutes</span>
            <span style={S.infoPill}>Self-scored with a model answer key</span>
          </div>
        </div>

        <div style={F.howRow}>
          {[
            ["1", "Write", "Answer every part in the response boxes. Your writing saves as you type."],
            ["2", "Finish", "When you're done (or time is up), finish the exam to open the answer key."],
            ["3", "Review", "Compare your work with the scoring points and a model response, check off the points you earned, and note what to fix."],
          ].map(([n, h, t]) => (
            <div key={n} style={F.how}>
              <span style={F.howNum}>{n}</span>
              <div><div style={F.howHead}>{h}</div><div style={F.howText}>{t}</div></div>
            </div>
          ))}
        </div>

        <div style={S.examGrid}>
          {exams.map((exam) => {
            const r = store[exam.id];
            const status = r?.status;
            const total = examPoints(exam);
            const partsTotal = exam.questions.reduce((n, q) => n + q.parts.length, 0);
            const answered = r ? exam.questions.reduce((n, q) => n + q.parts.filter((p) => ((r.answers || {})[key(q, p)] || "").trim()).length, 0) : 0;
            const sc = status === "completed" ? selfScore(exam, r.checks || {}) : null;
            return (
              <div key={exam.id} style={S.examCard}>
                <div style={S.examCardTop}>
                  <div style={S.examTitle}>{exam.title}</div>
                  {exam.sample && <span style={S.samplePill}>Sample</span>}
                </div>
                <div style={S.examDesc}>{exam.description}</div>
                <div style={S.examMeta}>
                  {exam.questions.length} question{exam.questions.length === 1 ? "" : "s"} · {total} points · {minutesFor(exam)} min
                </div>
                {status === "completed" && sc && (
                  <div style={S.resultStrip}>
                    <div>
                      <div style={S.resultBig}>{sc.got}/{total}</div>
                      <div style={S.resultSmall}>self-scored points</div>
                    </div>
                  </div>
                )}
                {status === "inprogress" && <div style={S.progressNote}>In progress — {answered}/{partsTotal} parts written</div>}
                <div style={S.cardBtns}>
                  {!status && <button style={S.primaryBtn} onClick={() => { setTimerChoice(true); setModal({ kind: "start", examId: exam.id }); }}>Start exam</button>}
                  {status === "inprogress" && <button style={S.primaryBtn} onClick={() => resumeExam(exam.id)}>Resume</button>}
                  {status === "completed" && <button style={S.primaryBtn} onClick={() => { setRevealed({}); setView({ type: "review", examId: exam.id }); }}>Answer key &amp; review</button>}
                  {status && <button style={S.ghostBtn} onClick={() => setModal({ kind: "reset", examId: exam.id })}>Reset exam</button>}
                </div>
              </div>
            );
          })}
        </div>
        <p style={S.footnote}>
          Tip: "Reset exam" clears your responses and self-scoring so the exam can be taken fresh later — handy after trying one out just to see how it works.
          Responses stay on this device and browser.
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
    const qi = Math.min(rec.index || 0, exam.questions.length - 1);
    const q = exam.questions[qi];
    const answers = rec.answers || {};
    const limit = minutesFor(exam) * 60;
    const remaining = limit - elapsed;
    const lowTime = rec.timerOn && remaining <= 300;
    const partsDone = (x) => x.parts.filter((p) => (answers[key(x, p)] || "").trim()).length;
    const totalParts = exam.questions.reduce((n, x) => n + x.parts.length, 0);
    const doneParts = exam.questions.reduce((n, x) => n + partsDone(x), 0);

    return (
      <div style={S.wrap}>
        <style>{layoutCss + frqCss}</style>
        <div style={S.runBar}>
          <div>
            <div style={S.runTitle}>{exam.title}</div>
            <div style={S.runSub}>{doneParts}/{totalParts} parts written</div>
          </div>
          <div style={S.runRight}>
            <div style={{ ...S.clock, ...(lowTime ? S.clockLow : {}) }} aria-live="off">
              {rec.timerOn ? fmtClock(Math.max(0, remaining)) : fmtClock(elapsed)}
              <span style={S.clockTag}>{rec.timerOn ? "left" : "elapsed"}</span>
            </div>
            {reference && reference.length > 0 && <button style={S.ghostBtn} onClick={() => setModal({ kind: "reference", examId: exam.id })}>Reference</button>}
            <button style={S.ghostBtn} onClick={() => saveAndExit(exam.id)}>Save &amp; exit</button>
          </div>
        </div>

        {timeUp && rec.timerOn && (
          <div style={F.timeUp}>
            Time's up. On the real exam your booklet would be collected now. You can finish and open the answer key, or keep writing — just remember what you added after the time limit.
            <button style={{ ...S.ghostBtn, marginLeft: 10 }} onClick={() => setTimeUp(false)}>Dismiss</button>
          </div>
        )}

        <div style={F.pills} role="tablist" aria-label="Questions">
          {exam.questions.map((x, n) => {
            const done = partsDone(x);
            const state = done === x.parts.length ? "full" : done > 0 ? "some" : "none";
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={n === qi}
                onClick={() => patch(exam.id, { index: n })}
                style={{ ...F.pill, ...(state === "full" ? F.pillFull : state === "some" ? F.pillSome : {}), ...(n === qi ? F.pillCur : {}) }}
              >
                Q{n + 1}
                <span style={F.pillSub}>{done}/{x.parts.length}</span>
              </button>
            );
          })}
        </div>

        <div style={S.qPanel}>
          <div style={F.qHead}>
            <div style={S.qNum}>Question {qi + 1} <span style={S.qOf}>of {exam.questions.length}</span></div>
            <div style={F.qChips}>
              {q.kind && <span style={F.kindChip}>{q.kind}</span>}
              <span style={F.ptsChip}>{questionPoints(q)} points</span>
              {q.minutes && <span style={F.ptsChip}>~{q.minutes} min</span>}
            </div>
          </div>

          <div style={F.prompt}>
            <Paras items={q.intro} style={F.introText} />
            {(q.figures || []).map((f, i) => <Figure key={i} fig={f} S={S} />)}
          </div>

          {q.parts.map((p) => (
            <div key={p.id} style={F.part}>
              {asParas(p.lead).length > 0 && <div style={F.lead}><Paras items={p.lead} style={F.introText} /></div>}
              {(p.figures || []).map((f, i) => <Figure key={i} fig={f} S={S} />)}
              <div style={F.partHead}>
                <span style={F.partLabel}>{p.label || p.id}</span>
                <span style={F.partPts}>{partPoints(p)} point{partPoints(p) === 1 ? "" : "s"}</span>
              </div>
              <p style={F.partPrompt}><RichText text={p.prompt} /></p>
              {p.paper && <div style={F.paperHint}>This part asks for a drawing or graph. Sketch it on paper if you like, then describe what you drew (axes, shape, labels, key features) in the box below.</div>}
              <ResponseBox
                key={`${exam.id}-${key(q, p)}`}
                value={answers[key(q, p)]}
                onSave={(t) => saveAnswer(exam.id, key(q, p), t)}
                F={F}
                rows={p.rows || (partPoints(p) >= 3 ? 7 : 4)}
                label={`Response for ${q.id} ${p.label || p.id}`}
              />
            </div>
          ))}

          <div style={S.pager}>
            <button style={S.ghostBtn} disabled={qi === 0} onClick={() => patch(exam.id, { index: qi - 1 })}>← Previous question</button>
            {qi < exam.questions.length - 1 ? (
              <button style={S.primaryBtn} onClick={() => patch(exam.id, { index: qi + 1 })}>Next question →</button>
            ) : (
              <button style={S.primaryBtn} onClick={() => setModal({ kind: "finish", examId: exam.id })}>Finish exam</button>
            )}
          </div>
          <div style={{ ...S.keyHint, marginTop: 14 }}>
            <button style={F.finishLink} onClick={() => setModal({ kind: "finish", examId: exam.id })}>Finish exam &amp; open the answer key</button>
          </div>
        </div>
        {modal && renderModal()}
      </div>
    );
  }

  // =========================================================== REVIEW
  const checks = rec.checks || {};
  const answers = rec.answers || {};
  const notes = rec.notes || {};
  const sc = selfScore(exam, checks);
  const total = examPoints(exam);
  const allShown = exam.questions.every((q) => q.parts.every((p) => revealed[`${exam.id}.${key(q, p)}`]));

  return (
    <div style={S.wrap}>
      <style>{layoutCss + frqCss}</style>
      <button style={S.linkBtn} onClick={() => setView({ type: "list" })}>← All exams</button>

      <div style={S.reportHero}>
        <div>
          <div style={S.reportKicker}>{exam.title} · Answer key &amp; review</div>
          <div style={S.reportScore}>{sc.got}<span style={S.reportOf}> / {total}</span></div>
          <div style={S.reportPct}>self-scored points{rec.elapsed ? ` · ${fmtClock(rec.elapsed)} used` : ""}</div>
        </div>
        <div style={F.heroSide}>
          {exam.questions.map((q, n) => (
            <a key={q.id} href={`#frq-${exam.id}-${q.id}`} style={F.heroQ}>
              <span style={F.heroQNum}>Q{n + 1}</span> {sc.perQ[q.id]}/{questionPoints(q)}
            </a>
          ))}
        </div>
      </div>

      <div style={F.reviewHow}>
        <b>How to use this key.</b> For each part, read your response, then go through the scoring points and check each one you earned — be honest;
        a point counts only if your response clearly shows it. Then open the model response to see what a high-scoring answer looks like, and write a
        note to yourself about what to review. Nothing here is graded by the app.
        <div style={{ marginTop: 10 }}>
          <button
            style={S.ghostBtn}
            onClick={() => {
              const next = {};
              if (!allShown) exam.questions.forEach((q) => q.parts.forEach((p) => { next[`${exam.id}.${key(q, p)}`] = true; }));
              setRevealed(next);
            }}
          >
            {allShown ? "Hide all model responses" : "Reveal all model responses"}
          </button>
        </div>
      </div>

      {exam.questions.map((q, n) => (
        <div key={q.id} id={`frq-${exam.id}-${q.id}`} style={F.reviewCard}>
          <div style={S.reviewTop}>
            <span style={S.reviewNum}>Q{n + 1}</span>
            {q.kind && <span style={F.kindChip}>{q.kind}</span>}
            <span style={{ ...S.verdict, ...S.verdictOk }}>{sc.perQ[q.id]}/{questionPoints(q)} points</span>
          </div>
          <div style={F.prompt}>
            <Paras items={q.intro} style={F.introText} />
            {(q.figures || []).map((f, i) => <Figure key={i} fig={f} S={S} />)}
          </div>

          {q.parts.map((p) => {
            const k = key(q, p);
            const rk = `${exam.id}.${k}`;
            const mine = (answers[k] || "").trim();
            const items = rubricItems(p);
            const got = items.reduce((s, r, i) => s + ((checks[k] || {})[i] ? r.pts : 0), 0);
            const model = asParas(p.model);
            return (
              <div key={p.id} style={F.part}>
                {asParas(p.lead).length > 0 && <div style={F.lead}><Paras items={p.lead} style={F.introText} /></div>}
                {(p.figures || []).map((f, i) => <Figure key={i} fig={f} S={S} />)}
                <div style={F.partHead}>
                  <span style={F.partLabel}>{p.label || p.id}</span>
                  <span style={F.partPts}>{got}/{partPoints(p)} self-scored</span>
                </div>
                <p style={F.partPrompt}><RichText text={p.prompt} /></p>

                <div style={F.subLabel}>Your response</div>
                <div style={mine ? F.mine : F.mineEmpty}>{mine || "You didn't write a response for this part."}</div>

                <div style={F.subLabel}>Scoring points — check each one you earned</div>
                <div style={F.rubric}>
                  {items.map((r, i) => {
                    const on = !!(checks[k] || {})[i];
                    return (
                      <label key={i} style={{ ...F.rubricRow, ...(on ? F.rubricOn : {}) }}>
                        <input type="checkbox" checked={on} onChange={() => toggleCheck(exam.id, k, i)} style={F.rubricBox} />
                        <span style={F.rubricText}><RichText text={r.text} />{r.pts > 1 && <b style={F.rubricPts}> ({r.pts} points)</b>}</span>
                      </label>
                    );
                  })}
                  {p.note && <div style={F.scoringNote}><b>Scoring note:</b> <RichText text={p.note} /></div>}
                </div>

                {!revealed[rk] ? (
                  <button style={F.revealBtn} onClick={() => setRevealed({ ...revealed, [rk]: true })}>Show model response</button>
                ) : (
                  <div style={F.model}>
                    <div style={F.modelLabel}>Model response <button style={F.hideBtn} onClick={() => setRevealed({ ...revealed, [rk]: false })}>Hide</button></div>
                    {model.map((t, i) => <p key={i} style={F.modelText}><RichText text={t} /></p>)}
                    {(p.modelFigures || []).map((f, i) => <Figure key={i} fig={f} S={S} />)}
                  </div>
                )}
              </div>
            );
          })}

          <div style={F.reflect}>
            <div style={F.subLabel}>My reflection on Question {n + 1}</div>
            <div style={F.reflectHint}>What did I miss? Which concept or skill do I need to review? What will I do differently next time?</div>
            <ResponseBox key={`note-${exam.id}-${q.id}`} value={notes[q.id]} onSave={(t) => saveNote(exam.id, q.id, t)} F={F} rows={3} label={`Reflection for question ${n + 1}`} />
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
    const ans = r.answers || {};
    const blankParts = ex.questions.reduce((n, q) => n + q.parts.filter((p) => !(ans[key(q, p)] || "").trim()).length, 0);

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
                {reference.map((rr, i) => <button key={i} onClick={() => setRefTab(i)} style={{ ...S.filterBtn, ...(i === refTab ? S.filterOn : {}) }}>{rr.title}</button>)}
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
            {ex.questions.length} question{ex.questions.length === 1 ? "" : "s"}, {examPoints(ex)} points. Write your response to every part. When you finish,
            you'll get the scoring points and a model response for each part so you can score yourself and reflect. The app doesn't grade anything.
          </p>
          <label style={S.checkRow}>
            <input type="checkbox" checked={timerChoice} onChange={(e) => setTimerChoice(e.target.checked)} />
            <span>Use the real exam time ({minutesFor(ex)} minutes)</span>
          </label>
          <p style={S.modalHint}>{timerChoice ? "You'll get a warning at 5 minutes left and a note when time is up — nothing is taken away from you." : "Untimed: a stopwatch still tracks how long you take."}</p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Cancel</button>
            <button style={S.primaryBtn} onClick={() => beginExam(ex.id, timerChoice)}>Begin exam</button>
          </div>
        </>
      );
    } else if (modal.kind === "finish") {
      body = (
        <>
          <h3 style={S.modalTitle}>Finish this exam?</h3>
          <p style={S.modalText}>
            {blankParts > 0 ? `${blankParts} part${blankParts === 1 ? " is" : "s are"} still blank. ` : "Every part has a response. "}
            Finishing opens the answer key. You won't be able to add to your responses afterward (you can reset the exam to retake it).
          </p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Keep writing</button>
            <button style={S.primaryBtn} onClick={() => finishExam(ex.id)}>Finish &amp; open answer key</button>
          </div>
        </>
      );
    } else {
      body = (
        <>
          <h3 style={S.modalTitle}>Reset this exam?</h3>
          <p style={S.modalText}>This clears all your responses, self-scoring and reflections for <b>{ex.title}</b>, so it can be taken fresh later. This can't be undone.</p>
          <div style={S.modalBtns}>
            <button style={S.ghostBtn} onClick={() => setModal(null)}>Cancel</button>
            <button style={S.dangerBtn} onClick={() => resetExam(ex.id)}>Yes, reset exam</button>
          </div>
        </>
      );
    }
    return (
      <div style={S.backdrop} onClick={() => setModal(null)}>
        <div style={S.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>{body}</div>
      </div>
    );
  }
}

const frqCss = `
  .frq-ta:focus{ outline:2px solid var(--sage-pill); }
  @media (max-width: 520px){ .frq-hero-side{ width:100%; } }
`;

function makeFrqStyles(C) {
  const mono = "'IBM Plex Mono',monospace";
  return {
    howRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10, margin: "4px 0 18px" },
    how: { display: "flex", gap: 12, alignItems: "flex-start", background: C.pale, borderRadius: 14, padding: "12px 14px" },
    howNum: { flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: C.accentDeep, color: "#fff", fontWeight: 800, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
    howHead: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15 },
    howText: { fontSize: 13.5, lineHeight: 1.5, color: "#4A5147" },
    timeUp: { background: "#FBF0DD", color: "#7A5316", border: "1px solid #EBCB93", borderRadius: 12, padding: "10px 14px", fontSize: 14, lineHeight: 1.5, marginBottom: 12 },
    pills: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
    pill: { fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, background: "#fff", color: "#5A4E3F", border: "2px solid #E2E0D8", borderRadius: 12, padding: "7px 14px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.2, minWidth: 58 },
    pillSome: { background: "#FBF0DD", borderColor: "#EBCB93" },
    pillFull: { background: C.pill, borderColor: C.accent, color: C.accentDeep },
    pillCur: { borderColor: C.accentDeep, boxShadow: `0 0 0 3px ${C.pill}` },
    pillSub: { fontFamily: mono, fontWeight: 500, fontSize: 10.5, color: "#767F73" },
    qHead: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 },
    qChips: { display: "flex", gap: 6, flexWrap: "wrap" },
    kindChip: { background: C.accentDeep, color: "#fff", fontWeight: 800, fontSize: 11.5, letterSpacing: "0.04em", padding: "4px 11px", borderRadius: 100 },
    ptsChip: { background: C.pill, color: C.accentDeep, fontWeight: 700, fontSize: 12, padding: "4px 11px", borderRadius: 100 },
    prompt: { margin: "6px 0 4px" },
    introText: { fontSize: 15.5, lineHeight: 1.65, margin: "0 0 10px" },
    part: { borderTop: "2px dashed #E7E4DA", marginTop: 18, paddingTop: 14 },
    lead: { background: "#FBFAF6", border: "1px solid #E7E4DA", borderRadius: 12, padding: "10px 14px", marginBottom: 10 },
    partHead: { display: "flex", alignItems: "center", gap: 10, marginBottom: 4 },
    partLabel: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 16, color: C.accentDeep },
    partPts: { fontFamily: mono, fontSize: 12, color: "#767F73" },
    partPrompt: { fontSize: 15.5, lineHeight: 1.65, margin: "0 0 10px", fontWeight: 600 },
    paperHint: { background: "#EEF3F6", color: "#3D5563", fontSize: 13.5, lineHeight: 1.5, borderRadius: 10, padding: "8px 12px", marginBottom: 8 },
    textarea: { width: "100%", boxSizing: "border-box", border: "2px solid #E2E0D8", borderRadius: 12, padding: "12px 14px", fontFamily: "'Nunito',sans-serif", fontSize: 15.5, lineHeight: 1.6, color: "#2E332E", background: "#fff", resize: "vertical", minHeight: 100 },
    wc: { fontFamily: mono, fontSize: 11.5, color: "#9AA096", textAlign: "right", marginTop: 3 },
    finishLink: { background: "none", border: "none", color: C.accentDeep, textDecoration: "underline", cursor: "pointer", fontSize: 13.5, fontFamily: "'Nunito',sans-serif" },
    heroSide: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 360 },
    heroQ: { background: "#fff", borderRadius: 12, padding: "6px 12px", fontWeight: 800, fontSize: 14, color: "#2E332E", textDecoration: "none", fontFamily: mono },
    heroQNum: { color: C.accentDeep, fontFamily: "'Manrope',sans-serif" },
    reviewHow: { background: C.pale, borderRadius: 14, padding: "12px 16px", fontSize: 14.5, lineHeight: 1.6, color: "#3C423A", margin: "14px 0 16px" },
    reviewCard: { background: "#fff", border: "1px solid #ECEAE3", borderRadius: 16, boxShadow: "0 2px 8px rgba(70,90,60,0.05)", padding: "16px 18px 18px", marginBottom: 18 },
    subLabel: { fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#767F73", margin: "12px 0 6px" },
    mine: { background: "#FBFAF6", border: "1px solid #E2E0D8", borderRadius: 12, padding: "10px 14px", fontSize: 15, lineHeight: 1.65, whiteSpace: "pre-wrap", color: "#2E332E" },
    mineEmpty: { background: "#FBFAF6", border: "1px dashed #D8D6CE", borderRadius: 12, padding: "10px 14px", fontSize: 14, color: "#9AA096", fontStyle: "italic" },
    rubric: { display: "flex", flexDirection: "column", gap: 6 },
    rubricRow: { display: "flex", gap: 10, alignItems: "flex-start", border: "1.5px solid #E7E4DA", borderRadius: 12, padding: "9px 12px", cursor: "pointer", background: "#fff", fontSize: 14.5, lineHeight: 1.55 },
    rubricOn: { background: "#EAF3E6", borderColor: "#9CC590" },
    rubricBox: { marginTop: 4, width: 18, height: 18, flexShrink: 0, accentColor: C.accentDeep },
    rubricText: { flex: 1, minWidth: 0 },
    rubricPts: { color: "#767F73", fontWeight: 700 },
    scoringNote: { fontSize: 13.5, color: "#5F675C", lineHeight: 1.55, padding: "4px 4px 0" },
    revealBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, background: C.accentDeep, color: "#fff", border: "none", borderRadius: 100, padding: "9px 18px", cursor: "pointer", marginTop: 12 },
    model: { background: "#F1F7EE", border: "2px solid #A9CF9E", borderRadius: 14, padding: "12px 16px", marginTop: 12 },
    modelLabel: { fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4C7A41", fontWeight: 600, marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center" },
    hideBtn: { background: "none", border: "none", color: "#4C7A41", textDecoration: "underline", cursor: "pointer", fontSize: 12.5, fontFamily: "'Nunito',sans-serif" },
    modelText: { fontSize: 15, lineHeight: 1.65, margin: "0 0 9px", color: "#26361F" },
    reflect: { borderTop: "2px dashed #E7E4DA", marginTop: 18, paddingTop: 6 },
    reflectHint: { fontSize: 13.5, color: "#5F675C", margin: "0 0 8px", lineHeight: 1.5 },
  };
}
