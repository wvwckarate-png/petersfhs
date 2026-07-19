import React, { useState, useEffect, useMemo, useCallback } from "react";
import { storage } from "../../lib/storage";
import { Link } from "react-router-dom";
import { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT } from "./content";
import { getEngineCSS } from "../shared/engineStyles";

const PHYSICS2_COLORS = {
  sage: "#7C9B72", sageDeep: "#5E7A55", sagePale: "#EAF1E6", sagePill: "#DCEAD5",
};

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
      <style>{getEngineCSS(PHYSICS2_COLORS)}</style>
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
          <Link to="/ap" style={S.backToHubPill} className="mode-pill-hover">
            ← AP Hub
          </Link>
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

              <div style={S.dashUnitList} className="dash-grid">
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

// ---------- Styles ----------

const S = {
  page: { height: "100vh", background: "#FAFAF7", color: "#2E332E", fontFamily: "'Nunito', sans-serif", fontSize: 16.5, lineHeight: 1.6, display: "flex", flexDirection: "column", overflow: "hidden" },

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
  backToHubPill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#EDE8F2", color: "#6B5A80", border: "none", padding: "8px 16px", borderRadius: 100, cursor: "pointer", display: "inline-flex", alignItems: "center", textDecoration: "none", marginLeft: "auto" },

  body: { maxWidth: 1040, margin: "0 auto", padding: "18px 24px 24px", position: "relative", flex: 1, overflowY: "auto", width: "100%" },

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

  dashWrap: { maxWidth: 1100 },
  dashCards: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 26 },
  dashCard: { background: "#FFFFFF", borderRadius: 18, padding: "26px 22px", boxShadow: "0 4px 14px rgba(70,90,60,0.06)", display: "flex", flexDirection: "column", justifyContent: "center", aspectRatio: "1.15" },
  dashCardLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "#767F73", marginBottom: 8 },
  dashCardValue: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 28, color: "#5E7A55" },
  dashCardOf: { fontSize: 15, color: "#B4BBAF", fontWeight: 600 },

  dashUnitList: {},
  dashUnitRow: { background: "#FFFFFF", borderRadius: 16, padding: "18px 18px", boxShadow: "0 2px 8px rgba(70,90,60,0.04)", display: "flex", flexDirection: "column" },
  dashUnitInfo: { display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 },
  dashUnitName: { fontWeight: 700, fontSize: 15, color: "#2E332E" },
  dashUnitMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#767F73" },
  dashUnitTrack: { height: 6, background: "#E6E9E3", borderRadius: 4, overflow: "hidden", marginBottom: 10 },
  dashUnitFill: { height: "100%", background: "#7C9B72" },
  dashUnitActions: { display: "flex", gap: 8, marginTop: "auto" },
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