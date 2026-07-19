import React, { useState, useEffect, useMemo, useCallback } from "react";
import { storage } from "../../lib/storage";
import { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT } from "./content";

const MCQ_STORAGE_KEY = "physics2-hub-mcq-progress-v1";
const NAV_STORAGE_KEY = "physics2-hub-last-nav-v1";

const MODES = [
  { id: "study", label: "Study Guides" },
  { id: "mcq", label: "MCQ Practice" },
  { id: "frq", label: "FRQ Practice" },
  { id: "dashboard", label: "Dashboard" },
];

function ModeIcon({ id, size = 16 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" };
  if (id === "study") {
    return (
      <svg {...common}>
        <path d="M12 6.5C12 6.5 9.2 4.5 4 4.5V17.5C9.2 17.5 12 19.5 12 19.5C12 19.5 14.8 17.5 20 17.5V4.5C14.8 4.5 12 6.5 12 6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6.5V19.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "mcq") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="7.7" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M8.6 12.3L10.6 14.3L15.4 9.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (id === "frq") {
    return (
      <svg {...common}>
        <path d="M4.5 19.5L5.2 16.1L15.8 5.5C16.4 4.9 17.3 4.9 17.9 5.5L18.5 6.1C19.1 6.7 19.1 7.6 18.5 8.2L7.9 18.8L4.5 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.3 6.9L17.1 9.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "dashboard") {
    return (
      <svg {...common}>
        <path d="M5.5 18.5V13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M12 18.5V7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M18.5 18.5V10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M3.5 18.5H20.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    );
  }
  return null;
}

export default function Physics2Page() {
  const [mode, setMode] = useState("study");
  const [unitId, setUnitId] = useState(9);
  const [activeQ, setActiveQ] = useState(null);
  const [answered, setAnswered] = useState({});
  const [resetTarget, setResetTarget] = useState(null);
  const [navLoaded, setNavLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState("all"); // "all" | "missed"
  const [globalReview, setGlobalReview] = useState(false);
  const [activeFrq, setActiveFrq] = useState(null);
  const [frqSteps, setFrqSteps] = useState({});

  // Load persisted MCQ progress + last nav position on mount
  useEffect(() => {
    (async () => {
      try {
        const result = await storage.get(MCQ_STORAGE_KEY, false);
        if (result && result.value) setAnswered(JSON.parse(result.value));
      } catch (e) {}
      try {
        const navResult = await storage.get(NAV_STORAGE_KEY, false);
        if (navResult && navResult.value) {
          const nav = JSON.parse(navResult.value);
          if (nav.mode) setMode(nav.mode);
          if (nav.unitId) setUnitId(nav.unitId);
        }
      } catch (e) {}
      setNavLoaded(true);
    })();
  }, []);

  // Persist nav position whenever it changes (after initial load)
  useEffect(() => {
    if (!navLoaded) return;
    storage.set(NAV_STORAGE_KEY, JSON.stringify({ mode, unitId }), false).catch(() => {});
  }, [mode, unitId, navLoaded]);

  // Fix "Jump to" links inside study guide content — the injected HTML's <a href="#s91">
  // anchors don't reliably trigger native browser scrolling inside this app's scroll
  // container, so intercept clicks and scroll manually instead.
  useEffect(() => {
    function handleAnchorClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Escape key closes the mobile sidebar drawer — standard desktop expectation
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const persistAnswers = useCallback(async (next) => {
    try {
      await storage.set(MCQ_STORAGE_KEY, JSON.stringify(next), false);
    } catch (e) {
      console.error("Could not save progress", e);
    }
  }, []);

  function selectChoice(q, idx) {
    if (answered[q.id] && answered[q.id].correct) return; // locked only once correct
    const next = { ...answered, [q.id]: { selected: idx, correct: idx === q.correct, ts: Date.now() } };
    setAnswered(next);
    persistAnswers(next);
  }

  async function resetProgress(scopeUnitId) {
    if (scopeUnitId) {
      const qs = QUESTIONS[scopeUnitId] || [];
      const idsToClear = new Set(qs.map((q) => q.id));
      const next = {};
      Object.keys(answered).forEach((k) => { if (!idsToClear.has(k)) next[k] = answered[k]; });
      setAnswered(next);
      setResetTarget(null);
      await persistAnswers(next);
    } else {
      setAnswered({});
      setResetTarget(null);
      try { await storage.delete(MCQ_STORAGE_KEY, false); } catch (e) {}
    }
  }

  const unit = UNITS.find((u) => u.id === unitId);
  const questions = QUESTIONS[unitId] || [];
  const frqs = FRQ_CONTENT[unitId] || [];

  const statsFor = useCallback((id) => {
    const qs = QUESTIONS[id] || [];
    const ids = qs.map((q) => q.id);
    const done = ids.filter((qid) => answered[qid]);
    const correct = done.filter((qid) => answered[qid].correct);
    return { total: ids.length, done: done.length, correct: correct.length };
  }, [answered]);

  const stats = statsFor(unitId);

  const overall = useMemo(() => {
    let total = 0, done = 0, correct = 0;
    UNITS.forEach((u) => { const s = statsFor(u.id); total += s.total; done += s.done; correct += s.correct; });
    return { total, done, correct };
  }, [statsFor]);

  const allMissed = useMemo(() => {
    const list = [];
    UNITS.forEach((u) => {
      const qs = QUESTIONS[u.id] || [];
      qs.forEach((q) => {
        const a = answered[q.id];
        if (a && !a.correct) list.push({ q, unitId: u.id, unitName: u.name, ts: a.ts || 0 });
      });
    });
    list.sort((x, y) => y.ts - x.ts); // most recently missed first
    return list;
  }, [answered]);

  function switchUnit(id) {
    setUnitId(id);
    setActiveQ(null);
    setActiveFrq(null);
  }

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;600&display=swap');
        *{box-sizing:border-box;}
        body{margin:0;}
        button{font-family:inherit;}

        /* Mobile default: sidebar is a hidden overlay drawer */
        .app-sidebar-backdrop{ display:none !important; }
        .app-sidebar-backdrop.open{ display:flex !important; }
        .desktop-only-label{ display:none !important; }

        /* Desktop: sidebar becomes a persistent column, no overlay */
        @media (min-width: 900px){
          .mobile-only-switcher{ display:none !important; }
          .app-body{ display:flex; gap:26px; align-items:flex-start; max-width:1200px !important; }
          .app-container{ max-width:1200px !important; }
          .app-sidebar-backdrop{
            display:block !important; position:static !important; background:transparent !important;
            inset:auto !important; z-index:auto !important; flex-shrink:0;
          }
          .app-sidebar{
            width:260px !important; max-width:none !important;
            height:auto !important; box-shadow:none !important; border-radius:18px !important;
            background:#FFFFFF !important; border:1px solid #ECEAE3; padding:16px 14px !important;
            position:sticky !important; top:88px !important;
          }
          .mobile-only-flex{ display:none !important; }
          .desktop-only-label{ display:block !important; margin-bottom:10px; }
          main{ flex:1; min-width:0; }

          /* Hover states — meaningful on mouse/trackpad, absent on touch */
          .app-sidebar button:hover{ background:#F4F8F2; border-color:#B8D1AE !important; cursor:pointer; }
          .qbank-hover:hover{ box-shadow:0 4px 16px rgba(70,90,60,0.10) !important; transform:translateY(-1px); transition:all 0.15s ease; }
          .mode-pill-hover:hover{ background:#E6E4DC; }
          .mode-pill-hover.active-pill:hover{ background:#6E8A65; }
          .choice-hover:hover{ border-color:#B8D1AE !important; background:#F7FAF5 !important; }
          .frq-card-hover:hover{ box-shadow:0 4px 16px rgba(70,90,60,0.10) !important; }
          .btn-hover:hover{ filter:brightness(0.95); cursor:pointer; }
          details.solution summary:hover{ background:#F0F5F7 !important; }
          .answer-key summary:hover{ opacity:0.8; }
        }

        @media (min-width: 1300px){
          .app-body{ max-width:1320px !important; }
          .app-container{ max-width:1320px !important; }
          .app-sidebar{ width:280px !important; }
        }
        ${SHARED_STUDY_CSS}
      `}</style>

      {/* TOP BAR */}
      <div style={S.topbar}>
        <div style={S.topbarInner} className="app-container">
          <div style={S.logoRow}>
            <div style={S.logoMark}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 21V3" stroke="#5E7A55" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M3 21H21" stroke="#5E7A55" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M3.5 17C7 17 8 6 13 6C17 6 16.5 13 20.5 13" stroke="#7C9B72" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <div style={S.logoText}>AP Physics 2 Hub</div>
              <div style={S.logoTag}>Peters Family Homeschool</div>
            </div>
          </div>
        </div>
      </div>

      {/* MODE PILLS */}
      <div style={S.modeBar}>
        <div style={S.modeBarInner} className="app-container">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => { setMode(m.id); setGlobalReview(false); }}
              style={{ ...S.modePill, ...(mode === m.id ? S.modePillActive : {}) }}
              className={mode === m.id ? "mode-pill-hover active-pill" : "mode-pill-hover"}
            >
              <span style={S.modePillIcon}><ModeIcon id={m.id} /></span>{m.label}
            </button>
          ))}
        </div>
      </div>

      <div style={S.body} className="app-body">
        {mode !== "dashboard" && !globalReview && (
          <button style={S.unitSwitcher} className="mobile-only-switcher" onClick={() => setSidebarOpen(true)}>
            <span style={S.unitSwitcherLeft}>
              <span style={S.unitSwitcherNum}>Unit {unit.id}</span>
              <span style={S.unitSwitcherName}>{unit.name}</span>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 6L12 14L20 6" stroke="#5E7A55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {mode !== "dashboard" && !globalReview && (
          <div
            style={S.drawerBackdrop}
            className={sidebarOpen ? "app-sidebar-backdrop open" : "app-sidebar-backdrop"}
            onClick={() => setSidebarOpen(false)}
          >
            <aside style={S.drawer} className="app-sidebar" onClick={(e) => e.stopPropagation()}>
              <div style={S.drawerHeader} className="mobile-only-flex">
                <div style={S.sidebarLabel}>Units</div>
                <button style={S.drawerClose} onClick={() => setSidebarOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6L18 18M6 18L18 6" stroke="#767F73" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div style={S.sidebarLabel} className="desktop-only-label">Units</div>
              {UNITS.map((u) => {
                const isActive = u.id === unitId;
                const uStats = statsFor(u.id);
                const pct = uStats.total ? Math.round((uStats.done / uStats.total) * 100) : 0;
                return (
                  <button
                    key={u.id}
                    onClick={() => { switchUnit(u.id); setSidebarOpen(false); }}
                    style={{ ...S.unitBtn, ...(isActive ? S.unitBtnActive : {}) }}
                  >
                    <div style={S.unitBtnTop}>
                      <span style={S.unitNum}>Unit {u.id}</span>
                      <span style={S.unitWeight}>{u.weight}</span>
                    </div>
                    <div style={S.unitName}>{u.name}</div>
                    {mode === "mcq" && (
                      <div style={S.miniTrack}><div style={{ ...S.miniFill, width: `${pct}%` }} /></div>
                    )}
                  </button>
                );
              })}
            </aside>
          </div>
        )}

        <main style={S.main}>
          {mode === "study" && (
            <div
              style={S.studyPane}
              dangerouslySetInnerHTML={{ __html: STUDY_CONTENT[unitId] || "<p>Content not found.</p>" }}
            />
          )}

          {mode === "mcq" && globalReview && (
            <>
              <div style={S.globalHeader}>
                <div>
                  <div style={S.globalHeaderTitle}>Missed Across All Units</div>
                  <div style={S.globalHeaderSub}>
                    {allMissed.length} question{allMissed.length === 1 ? "" : "s"} currently marked incorrect, from every unit combined
                  </div>
                </div>
                <button style={S.exitGlobalBtn} onClick={() => setGlobalReview(false)}>Exit</button>
              </div>

              {allMissed.length === 0 ? (
                <div style={S.emptyState}>
                  <div style={S.emptyIconBadge}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                    </svg>
                  </div>
                  <div style={S.emptyTitle}>Nothing missed anywhere right now</div>
                  <p style={S.emptyText}>Every question you've attempted across all seven units is currently marked correct.</p>
                </div>
              ) : (
                <div style={S.qList}>
                  {allMissed.map(({ q, unitId: qUnitId, unitName }) => {
                    const a = answered[q.id];
                    const isOpen = activeQ === q.id;
                    return (
                      <div key={q.id} style={S.qCard} className="qbank-hover">
                        <button style={S.qHeader} onClick={() => setActiveQ(isOpen ? null : q.id)}>
                          <div style={S.qHeaderLeft}>
                            <span style={S.unitBadge}>Unit {qUnitId}</span>
                            <span style={S.qTopic}>{q.topic}</span>
                            {q.stretch && <span style={S.stretchBadge}>Stretch</span>}
                          </div>
                          <span style={{ ...S.qStatus, ...S.qStatusWrong }}>↻ retry</span>
                        </button>
                        {isOpen && (
                          <div style={S.qBody}>
                            {q.stretch && (
                              <div style={S.stretchNote}>
                                <strong>Stretch question</strong> — this one goes a bit beyond what's typically tested on the real AP exam. It's here to deepen your understanding, not because you're likely to see something exactly like it on test day.
                              </div>
                            )}
                            <div style={S.retryNote}>
                              You missed this one previously (Unit {qUnitId}: {unitName}). Pick a new answer below to try again.
                            </div>
                            <p style={S.qStem}>{q.stem}</p>
                            <div style={S.choices}>
                              {q.choices.map((c, idx) => {
                                const chosen = a && a.selected === idx;
                                const isCorrectChoice = a && idx === q.correct;
                                let variant = S.choice;
                                if (a) {
                                  if (isCorrectChoice) variant = { ...S.choice, ...S.choiceCorrect };
                                  else if (chosen) variant = { ...S.choice, ...S.choiceWrong };
                                  else variant = { ...S.choice, ...S.choiceDisabled };
                                }
                                return (
                                  <button key={idx} onClick={() => selectChoice(q, idx)} disabled={a && a.correct} style={variant} className="choice-hover">
                                    <span style={S.choiceLetter}>{String.fromCharCode(65 + idx)}</span>
                                    <span>{c}</span>
                                  </button>
                                );
                              })}
                            </div>
                            {a && (
                              <div style={S.explanation}>
                                <div style={S.explanationLabel}>Discussion</div>
                                <p style={S.explanationText}>{q.explanation}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {mode === "mcq" && !globalReview && (
            <>
              <div style={S.progressBar}>
                <div style={S.progressBarTop}>
                  <div style={S.progressText}>
                    Unit {unit.id}: {unit.name} — {stats.done}/{stats.total} answered
                    {stats.done > 0 ? ` · ${stats.correct}/${stats.done} correct` : ""}
                  </div>
                  {stats.done > 0 && (
                    <button style={S.unitResetBtn} onClick={() => setResetTarget(unitId)}>Reset this unit</button>
                  )}
                </div>
                <div style={S.progressTrack}>
                  <div style={{ ...S.progressFill, width: stats.total ? `${(stats.done / stats.total) * 100}%` : "0%" }} />
                </div>
              </div>

              {(() => {
                const missedCount = questions.filter((q) => answered[q.id] && !answered[q.id].correct).length;
                return (
                  <div style={S.filterRow}>
                    <button
                      style={{ ...S.filterPill, ...(reviewFilter === "all" ? S.filterPillActive : {}) }}
                      onClick={() => setReviewFilter("all")}
                    >
                      All Questions ({questions.length})
                    </button>
                    <button
                      style={{ ...S.filterPill, ...(reviewFilter === "missed" ? S.filterPillMissedActive : {}) }}
                      onClick={() => setReviewFilter("missed")}
                    >
                      Missed Only ({missedCount})
                    </button>
                  </div>
                );
              })()}

              {(() => {
                const displayed = reviewFilter === "missed"
                  ? questions.filter((q) => answered[q.id] && !answered[q.id].correct)
                  : questions;

                if (reviewFilter === "missed" && displayed.length === 0) {
                  return (
                    <div style={S.emptyState}>
                      <div style={S.emptyIconBadge}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                        </svg>
                      </div>
                      <div style={S.emptyTitle}>
                        {stats.done === 0 ? "Nothing to review yet" : "Nothing missed right now"}
                      </div>
                      <p style={S.emptyText}>
                        {stats.done === 0
                          ? "Answer some questions in this unit, and anything you miss will show up here for focused re-practice."
                          : "Every question you've attempted in this unit is currently marked correct. Great spot to be in."}
                      </p>
                    </div>
                  );
                }

                return (
                  <div style={S.qList}>
                    {displayed.map((q) => {
                      const i = questions.indexOf(q);
                      const a = answered[q.id];
                      const isOpen = activeQ === q.id;
                      const isRetriable = a && !a.correct;
                      return (
                        <div key={q.id} style={S.qCard} className="qbank-hover">
                          <button style={S.qHeader} onClick={() => setActiveQ(isOpen ? null : q.id)}>
                            <div style={S.qHeaderLeft}>
                              <span style={S.qNumBadge}>{String(i + 1).padStart(2, "0")}</span>
                              <span style={S.qTopic}>{q.topic}</span>
                              {q.stretch && <span style={S.stretchBadge}>Stretch</span>}
                            </div>
                            <span style={{ ...S.qStatus, ...(a ? (a.correct ? S.qStatusCorrect : S.qStatusWrong) : S.qStatusUnanswered) }}>
                              {a ? (a.correct ? "✓ correct" : "↻ retry") : "unanswered"}
                            </span>
                          </button>
                          {isOpen && (
                            <div style={S.qBody}>
                              {q.stretch && (
                                <div style={S.stretchNote}>
                                  <strong>Stretch question</strong> — this one goes a bit beyond what's typically tested on the real AP exam. It's here to deepen your understanding, not because you're likely to see something exactly like it on test day.
                                </div>
                              )}
                              {isRetriable && (
                                <div style={S.retryNote}>
                                  You missed this one previously. Pick a new answer below to try again — your explanation from last time is shown after you submit.
                                </div>
                              )}
                              <p style={S.qStem}>{q.stem}</p>
                              <div style={S.choices}>
                                {q.choices.map((c, idx) => {
                                  const chosen = a && a.selected === idx;
                                  const isCorrectChoice = a && idx === q.correct;
                                  let variant = S.choice;
                                  if (a) {
                                    if (isCorrectChoice) variant = { ...S.choice, ...S.choiceCorrect };
                                    else if (chosen) variant = { ...S.choice, ...S.choiceWrong };
                                    else variant = { ...S.choice, ...S.choiceDisabled };
                                  }
                                  return (
                                    <button key={idx} onClick={() => selectChoice(q, idx)} disabled={a && a.correct} style={variant} className="choice-hover">
                                      <span style={S.choiceLetter}>{String.fromCharCode(65 + idx)}</span>
                                      <span>{c}</span>
                                    </button>
                                  );
                                })}
                              </div>
                          {a && (
                            <div style={S.explanation}>
                              <div style={S.explanationLabel}>Discussion</div>
                              <p style={S.explanationText}>{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
                );
              })()}
            </>
          )}

          {mode === "frq" && (
            <div style={S.frqWrap}>
              {frqs.length === 0 ? (
                <div style={S.emptyState}>
                  <div style={S.emptyIconBadge}><ModeIcon id="frq" size={26} /></div>
                  <div style={S.emptyTitle}>FRQ practice for Unit {unit.id} is coming soon</div>
                  <p style={S.emptyText}>
                    This section will hold free-response questions — official released AP problems plus
                    original ones — each with a full, high-scoring model solution you reveal after
                    working the problem yourself.
                  </p>
                </div>
              ) : (
                <div style={S.frqList}>
                  {frqs.map((frq) => {
                    const isOpen = activeFrq === frq.id;
                    return (
                      <div key={frq.id} style={S.frqCard} className="frq-card-hover">
                        <button style={S.frqHeader} onClick={() => setActiveFrq(isOpen ? null : frq.id)}>
                          <div>
                            <div style={S.frqSource}>{frq.source}</div>
                            <div style={S.frqTitle}>{frq.title}</div>
                          </div>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.15s", flexShrink: 0 }}>
                            <path d="M6 9L12 15L18 9" stroke="#767F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        {isOpen && (
                          <div style={S.frqBody}>
                            <p style={S.frqPrompt}>{frq.prompt}</p>
                            {frq.parts.map((part, pIdx) => {
                              const key = `${frq.id}::${pIdx}`;
                              const revealed = frqSteps[key] || 0;
                              const total = part.steps.length;
                              return (
                                <div key={pIdx} style={S.frqPart}>
                                  <div style={S.frqPartLabel}>{part.label}</div>
                                  <p style={S.frqPartAsk}>{part.ask}</p>

                                  {revealed === 0 && (
                                    <button style={S.frqRevealBtn} onClick={() => setFrqSteps({ ...frqSteps, [key]: 1 })}>
                                      Reveal First Thought
                                    </button>
                                  )}

                                  {revealed > 0 && (
                                    <div style={S.frqSteps}>
                                      {part.steps.slice(0, revealed).map((step, sIdx) => (
                                        <div key={sIdx} style={S.frqStep}>
                                          <span style={S.frqStepNum}>{sIdx + 1}</span>
                                          <span style={S.frqStepText}>{step}</span>
                                        </div>
                                      ))}
                                      {revealed < total ? (
                                        <button style={S.frqNextBtn} onClick={() => setFrqSteps({ ...frqSteps, [key]: revealed + 1 })}>
                                          Show Next Thought ({revealed}/{total})
                                        </button>
                                      ) : (
                                        <button style={S.frqCollapseBtn} onClick={() => setFrqSteps({ ...frqSteps, [key]: 0 })}>
                                          Hide Response
                                        </button>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {mode === "dashboard" && (
            <div style={S.dashWrap}>
              <div style={S.dashCards}>
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>MCQs Answered</div>
                  <div style={S.dashCardValue}>{overall.done} <span style={S.dashCardOf}>/ {overall.total}</span></div>
                </div>
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>Overall Accuracy</div>
                  <div style={S.dashCardValue}>{overall.done ? `${Math.round((overall.correct / overall.done) * 100)}%` : "—"}</div>
                </div>
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>Coverage</div>
                  <div style={S.dashCardValue}>{overall.total ? `${Math.round((overall.done / overall.total) * 100)}%` : "0%"}</div>
                </div>
              </div>

              <div style={{ ...S.reviewAllCard, ...(allMissed.length === 0 ? S.reviewAllCardClear : {}) }}>
                <div style={S.reviewAllLeft}>
                  <div style={{ ...S.reviewAllIcon, ...(allMissed.length === 0 ? S.reviewAllIconClear : {}) }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                    </svg>
                  </div>
                  <div>
                    <div style={S.reviewAllTitle}>
                      {allMissed.length > 0
                        ? `${allMissed.length} question${allMissed.length === 1 ? "" : "s"} missed across all units`
                        : "Nothing missed anywhere right now"}
                    </div>
                    <div style={S.reviewAllSub}>
                      {allMissed.length > 0
                        ? "Drill every weak spot in one pass, regardless of which unit it's from."
                        : "Once you miss a question in any unit, it'll collect here for focused review."}
                    </div>
                  </div>
                </div>
                {allMissed.length > 0 && (
                  <button
                    style={S.reviewAllBtn}
                    onClick={() => { setMode("mcq"); setGlobalReview(true); setActiveQ(null); }}
                  >
                    Review All Missed
                  </button>
                )}
              </div>

              <div style={S.dashUnitList}>
                {UNITS.map((u) => {
                  const s = statsFor(u.id);
                  const uPct = s.total ? Math.round((s.done / s.total) * 100) : 0;
                  const uAcc = s.done ? Math.round((s.correct / s.done) * 100) : null;
                  return (
                    <div key={u.id} style={S.dashUnitRow}>
                      <div style={S.dashUnitInfo}>
                        <div style={S.dashUnitName}>Unit {u.id} — {u.name}</div>
                        <div style={S.dashUnitMeta}>
                          {s.total ? `${s.done}/${s.total} answered` : "not built yet"}
                          {uAcc !== null ? ` · ${uAcc}% accuracy` : ""}
                        </div>
                      </div>
                      <div style={S.dashUnitTrack}><div style={{ ...S.dashUnitFill, width: `${uPct}%` }} /></div>
                      <div style={S.dashUnitActions}>
                        <button style={S.dashJumpBtn} onClick={() => { setMode("study"); switchUnit(u.id); }}>Study</button>
                        <button style={S.dashJumpBtn} onClick={() => { setMode("mcq"); switchUnit(u.id); }}>Practice</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button style={S.resetLink} onClick={() => setResetTarget("all")}>Reset all MCQ progress</button>
            </div>
          )}
        </main>
      </div>

      {resetTarget !== null && (
        <div style={S.modalBackdrop} onClick={() => setResetTarget(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalTitle}>{resetTarget === "all" ? "Reset all MCQ progress?" : `Reset Unit ${resetTarget} progress?`}</div>
            <p style={S.modalText}>
              {resetTarget === "all"
                ? "This clears every answered MCQ across all units. It can't be undone."
                : `This clears your MCQ answers for Unit ${resetTarget}: ${UNITS.find((u) => u.id === resetTarget)?.name}. Other units are untouched. It can't be undone.`}
            </p>
            <div style={S.modalActions}>
              <button style={S.modalCancel} onClick={() => setResetTarget(null)}>Cancel</button>
              <button style={S.modalConfirm} onClick={() => resetProgress(resetTarget === "all" ? null : resetTarget)}>
                {resetTarget === "all" ? "Reset Everything" : "Reset This Unit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const SHARED_STUDY_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;600&display=swap');
  :root{
    --bg:#FAFAF7; --card:#FFFFFF; --ink:#2E332E; --ink-soft:#767F73;
    --sage:#7C9B72; --sage-deep:#5E7A55; --sage-pale:#EAF1E6; --sage-pill:#DCEAD5;
    --amber:#E3A857; --amber-pale:#FBF0DD; --rose:#D98B7B; --rose-pale:#FBEAE5;
    --sky:#7BA3B8; --sky-pale:#E9F2F5; --violet:#9887B0; --violet-pale:#EDE8F2;
    --shadow: 0 10px 30px rgba(70,90,60,0.08);
  }
  *{box-sizing:border-box;}
  body{margin:0; background:var(--bg); color:var(--ink); font-family:'Nunito', sans-serif; font-size:16.5px; line-height:1.7;}
  .wrap{max-width:740px; margin:0 auto; padding:0 20px 90px;}
  h1,h2,h3,.display{font-family:'Manrope', sans-serif; font-weight:800;}
  .topbar{background:var(--card); border-bottom:1px solid #ECEAE3; padding:22px 24px;}
  .topbar-inner{max-width:740px; margin:0 auto; display:flex; align-items:center; gap:12px;}
  .logo-mark{width:38px; height:38px; border-radius:12px; background:var(--sage-pale); display:flex; align-items:center; justify-content:center;}
  .logo-text{font-family:'Manrope',sans-serif; font-weight:800; font-size:21px; color:var(--ink);}
  .logo-tag{font-family:'IBM Plex Mono',monospace; font-size:10.5px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-left:4px;}
  .hero{padding:34px 24px 26px; max-width:740px; margin:0 auto;}
  .eyebrow{font-family:'IBM Plex Mono',monospace; font-size:11.5px; letter-spacing:0.16em; text-transform:uppercase; color:var(--ink-soft); margin-bottom:10px;}
  .hero h1{font-size:34px; margin:0 0 8px; color:var(--ink); line-height:1.15;}
  .hero .sub{font-size:16px; color:var(--ink-soft); max-width:520px; margin:0 0 18px; font-family:'Nunito',sans-serif; font-weight:400;}
  .hero-pills{display:flex; gap:8px; flex-wrap:wrap;}
  .pill{font-family:'Nunito',sans-serif; font-weight:700; font-size:12.5px; background:var(--sage-pill); color:var(--sage-deep); padding:7px 15px; border-radius:100px;}
  .toc{background:var(--card); border-radius:22px; box-shadow:var(--shadow); padding:20px 24px; margin:0 auto 34px; max-width:740px;}
  .toc-label{font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-bottom:12px;}
  .toc ol{margin:0; padding:0; list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:8px 20px;}
  .toc a{color:var(--ink); text-decoration:none; font-weight:600; font-size:14.5px; display:flex; align-items:center; gap:8px; font-family:'Nunito',sans-serif;}
  .toc a::before{content:"›"; color:var(--sage); font-weight:700; font-size:16px;}
  .toc a:hover{color:var(--sage-deep);}
  h2{font-size:24px; color:var(--ink); margin:44px 0 6px; display:flex; align-items:center; gap:10px;}
  h2 .num{background:var(--sage); color:white; width:34px; height:34px; border-radius:11px; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0; font-family:'IBM Plex Mono',monospace; font-weight:600;}
  h3{font-size:18px; color:var(--sage-deep); margin:24px 0 8px; font-weight:700;}
  p{margin:0 0 15px;}
  strong{color:var(--sage-deep) !important; font-weight:700 !important;}
  sub{font-size:0.72em; vertical-align:sub; line-height:0;}
  sup{font-size:0.72em; vertical-align:super; line-height:0;}
  ul{margin:0 0 16px; padding-left:22px;}
  ol.steps{margin:0 0 16px; padding-left:24px;}
  li{margin-bottom:6px;}
  li::marker{color:var(--sage);}
  .key-idea{background:var(--sage-pale); border-radius:18px; padding:18px 22px; margin:20px 0;}
  .tag-label{display:inline-flex; align-items:center; gap:6px; font-family:'Nunito',sans-serif; font-weight:700; font-size:11.5px; letter-spacing:0.06em; text-transform:uppercase; padding:5px 13px; border-radius:100px; margin-bottom:10px;}
  .tag-label.idea{background:var(--sage); color:white;}
  .tag-label.trap{background:var(--rose); color:white;}
  .tag-label.example{background:var(--sky); color:white;}
  .tag-label.recap{background:var(--amber); color:white;}
  .tag-label.skill{background:var(--violet); color:white;}
  .key-idea p{margin:0; font-size:16.5px;}
  .eq{background:var(--card); border:1.5px solid var(--sage-pill); border-radius:16px; padding:16px 22px; margin:18px 0; text-align:center;}
  .eq .main{font-family:'IBM Plex Mono',monospace; font-size:17px; font-weight:600; color:var(--sage-deep);}
  .eq .sub{font-family:'IBM Plex Mono',monospace; font-size:12.5px; color:var(--ink-soft); margin-top:6px;}
  .trap{background:var(--rose-pale); border-radius:18px; padding:18px 22px; margin:20px 0;}
  .trap p{margin:0; font-size:16px;}
  .heylook{background:var(--clay,#8A3324); background:linear-gradient(135deg,#8A3324,#B14D3A); border-radius:18px; padding:20px 24px; margin:26px 0; box-shadow:0 8px 20px rgba(138,51,36,0.25);}
  .heylook .heylook-label{font-family:'Manrope',sans-serif; font-weight:800; font-size:14px; letter-spacing:0.06em; color:#FBE8C6; margin-bottom:8px; display:flex; align-items:center; gap:8px; text-transform:uppercase;}
  .heylook .heylook-label svg{flex-shrink:0;}
  .heylook p{margin:0; font-size:16.5px; line-height:1.6; color:white; font-weight:500;}
  .heylook strong{color:#FBE8C6;}
  .skillbox{background:var(--violet-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
  .skillbox p{margin:0 0 10px;}
  .worked{background:var(--sky-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
  .worked p{margin:0 0 12px;}
  details.solution summary{cursor:pointer; font-family:'Nunito',sans-serif; font-size:13px; font-weight:700; color:var(--sky); letter-spacing:0.02em; padding:9px 16px; list-style:none; background:white; border-radius:100px; display:inline-block; margin-top:4px;}
  details.solution summary::-webkit-details-marker{display:none;}
  details.solution summary::before{content:"▸ REVEAL SOLUTION";}
  details.solution[open] summary::before{content:"▾ HIDE SOLUTION";}
  details.solution .sol-content{background:white; border-radius:14px; padding:16px 20px; margin-top:10px; font-size:15.5px;}
  .recap{background:var(--amber-pale); border-radius:18px; padding:22px 24px; margin:36px 0;}
  .recap ul{margin:0; padding-left:20px;}
  .recap li::marker{color:var(--amber);}
  .recap li{font-size:15.5px;}
  .practice-item{background:var(--card); border-radius:16px; padding:14px 18px; margin-bottom:10px; display:flex; gap:14px; align-items:flex-start; box-shadow:0 2px 8px rgba(70,90,60,0.05);}
  .qnum-badge{width:26px; height:26px; border-radius:9px; background:var(--sage-pill); color:var(--sage-deep); font-family:'IBM Plex Mono',monospace; font-weight:700; font-size:12.5px; flex-shrink:0; display:flex; align-items:center; justify-content:center; margin-top:2px;}
  .answer-key details{background:var(--sage-pale); border-radius:16px; padding:14px 18px; margin-bottom:8px;}
  .answer-key summary{cursor:pointer; font-family:'Nunito',sans-serif; font-weight:700; font-size:14.5px; color:var(--sage-deep); list-style:none;}
  .answer-key summary::-webkit-details-marker{display:none;}
  .answer-key summary::before{content:"Q"; background:var(--sage); color:white; border-radius:6px; padding:2px 8px; margin-right:8px; font-size:12px;}
  .answer-key .a-content{margin-top:10px; font-size:15.5px; padding-top:10px; border-top:1px solid rgba(124,155,114,0.25);}
  .highlight{background:linear-gradient(transparent 62%, #FBE8C6 62%); font-weight:700; color:var(--ink);}
  .formula-table{width:100%; border-collapse:separate; border-spacing:0; margin:20px 0; font-size:14px; border-radius:16px; overflow:hidden; box-shadow:var(--shadow);}
  .formula-table th{background:var(--sage); color:white; text-align:left; padding:10px 14px; font-family:'Nunito',sans-serif; font-weight:700; font-size:12px; letter-spacing:0.03em;}
  .formula-table td{padding:10px 14px; background:white; border-bottom:1px solid #F0EFE9;}
  .formula-table tr:last-child td{border-bottom:none;}
  .formula-table td:last-child{font-family:'IBM Plex Mono',monospace; font-weight:600; color:var(--sage-deep);}
  .divider{text-align:center; margin:40px 0; color:var(--sage-pill); font-size:20px; letter-spacing:14px;}
  .footer-nav{text-align:center; margin-top:50px; padding:26px; background:var(--sage-pale); border-radius:20px; font-size:15px; color:var(--ink-soft);}
  .footer-nav strong{color:var(--sage-deep);}
  .quote{font-family:'Nunito',sans-serif; font-style:italic; text-align:center; color:var(--ink-soft); font-size:15.5px; margin:26px auto 0; max-width:520px;}
`;

// ---------- Styles ----------

const S = {
  page: { minHeight: "100vh", background: "#FAFAF7", color: "#2E332E", fontFamily: "'Nunito', sans-serif", fontSize: 16.5, lineHeight: 1.6 },

  topbar: { background: "#FFFFFF", borderBottom: "1px solid #ECEAE3", padding: "14px 24px" },
  topbarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" },
  logoRow: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: { width: 36, height: 36, borderRadius: 11, background: "#EAF1E6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  logoText: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: "#2E332E" },
  logoTag: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "#767F73", textTransform: "uppercase" },

  modeBar: { background: "#FFFFFF", borderBottom: "1px solid #ECEAE3", padding: "10px 24px", position: "sticky", top: 0, zIndex: 5 },
  modeBarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" },
  modePill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", padding: "8px 16px", borderRadius: 100, cursor: "pointer", display: "inline-flex", alignItems: "center" },
  modePillActive: { background: "#7C9B72", color: "white" },
  modePillIcon: { display: "inline-flex", marginRight: 7, position: "relative", top: 1 },

  body: { maxWidth: 1040, margin: "0 auto", padding: "18px 24px 24px", position: "relative" },

  unitSwitcher: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 14, padding: "12px 16px", marginBottom: 18, cursor: "pointer", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  unitSwitcherLeft: { display: "flex", alignItems: "baseline", gap: 9 },
  unitSwitcherNum: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#5E7A55", fontWeight: 700 },
  unitSwitcherName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15.5, color: "#2E332E" },

  drawerBackdrop: { position: "fixed", inset: 0, background: "rgba(46,51,46,0.35)", zIndex: 20, display: "flex" },
  drawer: { width: 290, maxWidth: "85vw", height: "100%", background: "#FAFAF7", padding: "18px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 8, boxShadow: "4px 0 24px rgba(0,0,0,0.12)" },
  drawerHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  drawerClose: { background: "#F0EFE9", border: "none", borderRadius: 100, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
  sidebarLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#767F73", marginBottom: 2, textTransform: "uppercase" },
  unitBtn: { textAlign: "left", background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 14, padding: "11px 13px", fontFamily: "inherit", boxShadow: "0 2px 8px rgba(70,90,60,0.04)", cursor: "pointer" },
  unitBtnActive: { background: "#EAF1E6", border: "1px solid #B8D1AE" },
  unitBtnTop: { display: "flex", justifyContent: "space-between", marginBottom: 3 },
  unitNum: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, color: "#5E7A55", fontWeight: 700 },
  unitWeight: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 9.5, color: "#767F73" },
  unitName: { fontSize: 13, fontWeight: 700, lineHeight: 1.3, color: "#2E332E" },
  miniTrack: { height: 5, background: "#E6E9E3", borderRadius: 3, overflow: "hidden", marginTop: 7 },
  miniFill: { height: "100%", background: "#7C9B72" },

  main: { flex: 1, minWidth: 0 },
  studyPane: { background: "transparent" },

  progressBar: { marginBottom: 18, background: "#FFFFFF", borderRadius: 16, padding: "14px 18px", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  progressBarTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 },
  unitResetBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, background: "#FBEAE5", color: "#B14D3A", border: "none", borderRadius: 100, padding: "5px 12px", cursor: "pointer", whiteSpace: "nowrap" },
  progressText: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, color: "#5E7A55" },
  progressTrack: { height: 7, background: "#E6E9E3", borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", background: "#7C9B72", transition: "width 0.3s ease" },

  qList: { display: "flex", flexDirection: "column", gap: 10 },
  filterRow: { display: "flex", gap: 8, marginBottom: 14 },
  globalHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, background: "#FFFFFF", borderRadius: 16, padding: "16px 18px", marginBottom: 18, boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  globalHeaderTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: "#2E332E", marginBottom: 3 },
  globalHeaderSub: { fontSize: 13, color: "#767F73" },
  exitGlobalBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", borderRadius: 100, padding: "7px 15px", cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" },
  unitBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, fontWeight: 700, color: "#5E7A55", background: "#DCEAD5", borderRadius: 8, padding: "4px 8px", whiteSpace: "nowrap" },
  reviewAllCard: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "#FBEAE5", borderRadius: 18, padding: "18px 22px", marginBottom: 26, flexWrap: "wrap" },
  reviewAllLeft: { display: "flex", alignItems: "center", gap: 14 },
  reviewAllIcon: { width: 44, height: 44, borderRadius: 14, background: "#FFFFFF", color: "#B14D3A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  reviewAllTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15.5, color: "#2E332E", marginBottom: 2 },
  reviewAllSub: { fontSize: 13, color: "#8A6D3B" },
  reviewAllBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#B14D3A", color: "white", border: "none", borderRadius: 100, padding: "10px 20px", cursor: "pointer", whiteSpace: "nowrap" },
  reviewAllCardClear: { background: "#EAF1E6" },
  reviewAllIconClear: { color: "#5E7A55" },
  filterPill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", padding: "7px 14px", borderRadius: 100, cursor: "pointer" },
  filterPillActive: { background: "#7C9B72", color: "white" },
  filterPillMissedActive: { background: "#D98B7B", color: "white" },
  retryNote: { fontSize: 13.5, lineHeight: 1.5, color: "#8A4A38", background: "#FBEAE5", borderRadius: 10, padding: "10px 14px", margin: "16px 0 12px" },
  qCard: { background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(70,90,60,0.04)" },
  qHeader: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "transparent", border: "none", cursor: "pointer" },
  qHeaderLeft: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" },
  qNumBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, fontWeight: 700, color: "#5E7A55", background: "#DCEAD5", borderRadius: 8, padding: "4px 8px" },
  qTopic: { fontSize: 14.5, fontWeight: 700, color: "#2E332E", textAlign: "left" },
  stretchBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", background: "#FBF0DD", color: "#B08D57", borderRadius: 100, padding: "3px 9px" },
  qStatus: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, padding: "4px 10px", borderRadius: 100 },
  qStatusUnanswered: { background: "#F0EFE9", color: "#767F73" },
  qStatusCorrect: { background: "#E1EEDD", color: "#3D6B34" },
  qStatusWrong: { background: "#FBEAE5", color: "#B14D3A" },

  qBody: { padding: "0 18px 18px", borderTop: "1px solid #F0EFE9" },
  stretchNote: { fontSize: 13.5, lineHeight: 1.5, color: "#8A6D3B", background: "#FBF0DD", borderRadius: 10, padding: "10px 14px", margin: "16px 0 12px" },
  qStem: { fontSize: 15.5, lineHeight: 1.55, margin: "16px 0 14px" },
  choices: { display: "flex", flexDirection: "column", gap: 8 },
  choice: { display: "flex", gap: 10, alignItems: "flex-start", textAlign: "left", padding: "11px 14px", border: "1px solid #ECEAE3", borderRadius: 12, background: "#FCFBF8", fontFamily: "inherit", fontSize: 14.5, lineHeight: 1.45, cursor: "pointer" },
  choiceLetter: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, color: "#767F73", flexShrink: 0 },
  choiceCorrect: { background: "#E1EEDD", border: "1px solid #7C9B72" },
  choiceWrong: { background: "#FBEAE5", border: "1px solid #D98B7B" },
  choiceDisabled: { opacity: 0.5, cursor: "default" },

  explanation: { marginTop: 14, padding: "13px 16px", background: "#EAF1E6", borderRadius: 12 },
  explanationLabel: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E7A55", marginBottom: 6 },
  explanationText: { fontSize: 14.5, lineHeight: 1.55, margin: 0, color: "#3B4038" },

  frqWrap: { minHeight: 300 },
  frqList: { display: "flex", flexDirection: "column", gap: 12 },
  frqCard: { background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  frqHeader: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 12 },
  frqSource: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#7BA3B8", marginBottom: 4 },
  frqTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 16, color: "#2E332E" },
  frqBody: { padding: "0 20px 22px", borderTop: "1px solid #F0EFE9" },
  frqPrompt: { fontSize: 15, lineHeight: 1.65, color: "#3B4038", margin: "18px 0 20px", background: "#FAFAF7", borderRadius: 12, padding: "14px 16px" },
  frqPart: { marginBottom: 20, paddingBottom: 4 },
  frqPartLabel: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 12.5, color: "#5E7A55", background: "#EAF1E6", display: "inline-block", padding: "3px 10px", borderRadius: 100, marginBottom: 8 },
  frqPartAsk: { fontSize: 14.5, lineHeight: 1.55, color: "#2E332E", fontWeight: 600, margin: "0 0 10px" },
  frqRevealBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, background: "#7BA3B8", color: "white", border: "none", borderRadius: 100, padding: "9px 18px", cursor: "pointer" },
  frqSteps: { display: "flex", flexDirection: "column", gap: 8 },
  frqStep: { display: "flex", gap: 10, alignItems: "flex-start", background: "#E9F2F5", borderRadius: 12, padding: "12px 14px" },
  frqStepNum: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 11.5, color: "white", background: "#7BA3B8", width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 },
  frqStepText: { fontSize: 14.5, lineHeight: 1.55, color: "#2E332E" },
  frqNextBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, background: "white", color: "#7BA3B8", border: "1px solid #C7DCE4", borderRadius: 100, padding: "8px 16px", cursor: "pointer", alignSelf: "flex-start", marginTop: 2 },
  frqCollapseBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, background: "transparent", color: "#767F73", border: "none", padding: "6px 0", cursor: "pointer", alignSelf: "flex-start" },
  emptyState: { background: "#FFFFFF", borderRadius: 20, padding: "50px 30px", textAlign: "center", boxShadow: "0 4px 14px rgba(70,90,60,0.06)" },
  emptyIconBadge: { width: 56, height: 56, borderRadius: 18, background: "#EAF1E6", color: "#5E7A55", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" },
  emptyTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2E332E", marginBottom: 10 },
  emptyText: { fontSize: 14.5, color: "#767F73", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 },

  dashWrap: { maxWidth: 900 },
  dashCards: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 26 },
  dashCard: { background: "#FFFFFF", borderRadius: 18, padding: "20px 22px", boxShadow: "0 4px 14px rgba(70,90,60,0.06)" },
  dashCardLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "#767F73", marginBottom: 8 },
  dashCardValue: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 28, color: "#5E7A55" },
  dashCardOf: { fontSize: 15, color: "#B4BBAF", fontWeight: 600 },

  dashUnitList: { display: "flex", flexDirection: "column", gap: 10 },
  dashUnitRow: { background: "#FFFFFF", borderRadius: 16, padding: "16px 20px", boxShadow: "0 2px 8px rgba(70,90,60,0.04)" },
  dashUnitInfo: { display: "flex", justifyContent: "space-between", marginBottom: 8, flexWrap: "wrap", gap: 6 },
  dashUnitName: { fontWeight: 700, fontSize: 15, color: "#2E332E" },
  dashUnitMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#767F73" },
  dashUnitTrack: { height: 6, background: "#E6E9E3", borderRadius: 4, overflow: "hidden", marginBottom: 10 },
  dashUnitFill: { height: "100%", background: "#7C9B72" },
  dashUnitActions: { display: "flex", gap: 8 },
  dashJumpBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, background: "#EAF1E6", color: "#5E7A55", border: "none", borderRadius: 100, padding: "6px 14px", cursor: "pointer" },

  resetLink: { marginTop: 26, background: "transparent", border: "none", color: "#D98B7B", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, cursor: "pointer", padding: "10px 0" },

  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(46,51,46,0.35)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10 },
  modal: { background: "white", borderRadius: 20, padding: "26px 26px 22px", maxWidth: 360, boxShadow: "0 20px 50px rgba(0,0,0,0.2)" },
  modalTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 8, color: "#2E332E" },
  modalText: { fontSize: 14.5, color: "#767F73", marginBottom: 20 },
  modalActions: { display: "flex", gap: 10, justifyContent: "flex-end" },
  modalCancel: { background: "#F0EFE9", border: "none", borderRadius: 100, padding: "9px 18px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", color: "#2E332E" },
  modalConfirm: { background: "#D98B7B", border: "none", borderRadius: 100, padding: "9px 18px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", color: "white" },
};