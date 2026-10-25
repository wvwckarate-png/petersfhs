// Generic College Hub course page: Study Guides, Flashcards, MCQ Practice, Dashboard.
// Built on the same pieces as the AP subject pages (section check-offs, MCQ practice, dashboard),
// without the AP-only parts (FRQs, AP exam simulators).
//
// Props:
//   course:  { id, name, code }
//   content: { UNITS, STUDY_CONTENT, QUESTIONS, FLASHCARDS }
//     UNITS:         [{ id, name, tag }]
//     STUDY_CONTENT: { [unitId]: html string }   (same "toc" / h2#id format as the AP study guides)
//     QUESTIONS:     { [unitId]: [{ id, topic, stem, choices[4], correct, explanation }] }
//     FLASHCARDS:    { [unitId]: [{ term, meaning, note? }] }
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../lib/storage";
import RichText from "../shared/RichText";
import { getEngineCSS } from "../shared/engineStyles";
import { useSectionProgress } from "../shared/useSectionProgress";
import CourseIcon from "./CourseIcon";

const COLLEGE_COLORS = {
  sage: "#002855", sageDeep: "#002855", sagePale: "#E6EBF3", sagePill: "#D5DEEC",
  amber: "#EAAA00", amberPale: "#FFF6D9",
};

const MODES = [
  { id: "study", label: "Study Guides" },
  { id: "cards", label: "Flashcards" },
  { id: "mcq", label: "MCQ Practice" },
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
  if (id === "cards") {
    return (
      <svg {...common}>
        <rect x="3.5" y="6.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M7 4.5H19.5C20.3 4.5 21 5.2 21 6V14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M7 12H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
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

// Extra study-guide styles: word-part tables and callouts specific to the College Hub.
const EXTRA_CSS = `
  .wp-table{width:100%; border-collapse:separate; border-spacing:0; margin:20px 0; font-size:14.5px; border-radius:16px; overflow:hidden; box-shadow:var(--shadow);}
  .wp-table th{background:#002855; color:#fff; text-align:left; padding:10px 14px; font-family:'Nunito',sans-serif; font-weight:700; font-size:12px; letter-spacing:0.03em;}
  .wp-table td{padding:9px 14px; background:#fff; border-bottom:1px solid var(--border); vertical-align:top;}
  .wp-table tr:last-child td{border-bottom:none;}
  .wp-table td:first-child{font-family:'IBM Plex Mono',monospace; font-weight:600; color:#002855; white-space:nowrap;}
  .wp-table td em{color:#8A6500; font-style:normal; font-weight:700;}
  @media (max-width:520px){ .wp-table{font-size:13.5px;} .wp-table th, .wp-table td{padding:8px 10px;} .wp-table td:first-child{white-space:normal;} }
  .mt-card{perspective:1200px;}
  .wp-fig{margin:22px auto; max-width:640px; background:#fff; border:1px solid var(--border); border-radius:16px; padding:14px; box-shadow:var(--shadow); text-align:center;}
  .wp-fig img{max-width:100%; max-height:520px; width:auto; height:auto; border-radius:8px; background:#fff;}
  .wp-fig figcaption{margin-top:10px; font-size:13.5px; color:#2E332E; line-height:1.5; text-align:left;}
  .wp-fig .wp-credit{display:block; margin-top:4px; font-size:11.5px; color:#8A8F86;}
  .wp-fig .wp-credit a{color:#5A6B80;}
`;

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CourseHubTemplate({ course, content }) {
  const { UNITS, STUDY_CONTENT, QUESTIONS, FLASHCARDS } = content;
  const hubKey = `college-${course.id}`;
  const MCQ_STORAGE_KEY = `${hubKey}-mcq-progress-v1`;
  const NAV_STORAGE_KEY = `${hubKey}-last-nav-v1`;
  const CARD_STORAGE_KEY = `${hubKey}-cards-v1`;

  const [mode, setMode] = useState("study");
  const [unitId, setUnitId] = useState(UNITS[0].id);
  const [answered, setAnswered] = useState({});
  const [cardMarks, setCardMarks] = useState({});
  const [resetTarget, setResetTarget] = useState(null);
  const [navLoaded, setNavLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState("all");
  const [qIndex, setQIndex] = useState(0);
  const [globalReview, setGlobalReview] = useState(false);
  const [activeQ, setActiveQ] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [cardFilter, setCardFilter] = useState("all"); // "all" | "learning"
  const [cardOrder, setCardOrder] = useState(null); // shuffled index order, or null

  useEffect(() => {
    (async () => {
      try {
        const r = await storage.get(MCQ_STORAGE_KEY, false);
        if (r && r.value) setAnswered(JSON.parse(r.value));
      } catch { /* storage unavailable or unreadable — ignore */ }
      try {
        const r = await storage.get(CARD_STORAGE_KEY, false);
        if (r && r.value) setCardMarks(JSON.parse(r.value));
      } catch { /* storage unavailable or unreadable — ignore */ }
      try {
        const r = await storage.get(NAV_STORAGE_KEY, false);
        if (r && r.value) {
          const nav = JSON.parse(r.value);
          if (nav.mode && MODES.some((m) => m.id === nav.mode)) setMode(nav.mode);
          if (nav.unitId && UNITS.some((u) => u.id === nav.unitId)) setUnitId(nav.unitId);
        }
      } catch { /* storage unavailable or unreadable — ignore */ }
      setNavLoaded(true);
    })();
  }, [MCQ_STORAGE_KEY, CARD_STORAGE_KEY, NAV_STORAGE_KEY, UNITS]);

  useEffect(() => {
    if (!navLoaded) return;
    storage.set(NAV_STORAGE_KEY, JSON.stringify({ mode, unitId }), false).catch(() => {});
  }, [mode, unitId, navLoaded, NAV_STORAGE_KEY]);

  const sectionProgress = useSectionProgress({ hubKey, content: STUDY_CONTENT, unitId, active: mode === "study" });

  useEffect(() => {
    function handleAnchorClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    function handleEscape(e) { if (e.key === "Escape") setSidebarOpen(false); }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.querySelector(".app-body")?.scrollTo({ top: 0 });
  }, [unitId, mode, globalReview, qIndex, reviewFilter, cardIndex]);

  const persistAnswers = useCallback(async (next) => {
    try { await storage.set(MCQ_STORAGE_KEY, JSON.stringify(next), false); }
    catch (e) { console.error("Could not save progress", e); }
  }, [MCQ_STORAGE_KEY]);

  const persistCards = useCallback(async (next) => {
    try { await storage.set(CARD_STORAGE_KEY, JSON.stringify(next), false); }
    catch (e) { console.error("Could not save flashcard progress", e); }
  }, [CARD_STORAGE_KEY]);

  function selectChoice(q, idx) {
    if (answered[q.id] && answered[q.id].correct) return;
    const next = { ...answered, [q.id]: { selected: idx, correct: idx === q.correct, ts: Date.now() } };
    setAnswered(next);
    persistAnswers(next);
  }

  async function resetProgress(scopeUnitId) {
    if (scopeUnitId) {
      const ids = new Set((QUESTIONS[scopeUnitId] || []).map((q) => q.id));
      const next = {};
      Object.keys(answered).forEach((k) => { if (!ids.has(k)) next[k] = answered[k]; });
      setAnswered(next);
      setResetTarget(null);
      await persistAnswers(next);
    } else {
      setAnswered({});
      setCardMarks({});
      setResetTarget(null);
      try { await storage.delete(MCQ_STORAGE_KEY, false); } catch { /* ignore */ }
      try { await storage.delete(CARD_STORAGE_KEY, false); } catch { /* ignore */ }
    }
  }

  const unit = UNITS.find((u) => u.id === unitId);
  const questions = QUESTIONS[unitId] || [];
  const cards = useMemo(() => FLASHCARDS[unitId] || [], [FLASHCARDS, unitId]);

  const statsFor = useCallback((id) => {
    const ids = (QUESTIONS[id] || []).map((q) => q.id);
    const done = ids.filter((qid) => answered[qid]);
    const correct = done.filter((qid) => answered[qid].correct);
    return { total: ids.length, done: done.length, correct: correct.length };
  }, [answered, QUESTIONS]);

  const cardStatsFor = useCallback((id) => {
    const list = FLASHCARDS[id] || [];
    const known = list.filter((_, i) => cardMarks[`${id}-${i}`] === "know").length;
    return { total: list.length, known };
  }, [cardMarks, FLASHCARDS]);

  const stats = statsFor(unitId);

  const overall = useMemo(() => {
    let total = 0, done = 0, correct = 0, cTotal = 0, cKnown = 0;
    UNITS.forEach((u) => {
      const s = statsFor(u.id); total += s.total; done += s.done; correct += s.correct;
      const c = cardStatsFor(u.id); cTotal += c.total; cKnown += c.known;
    });
    return { total, done, correct, cTotal, cKnown };
  }, [statsFor, cardStatsFor, UNITS]);

  const allMissed = useMemo(() => {
    const list = [];
    UNITS.forEach((u) => {
      (QUESTIONS[u.id] || []).forEach((q) => {
        const a = answered[q.id];
        if (a && !a.correct) list.push({ q, unitId: u.id, unitName: u.name, ts: a.ts || 0 });
      });
    });
    list.sort((x, y) => y.ts - x.ts);
    return list;
  }, [answered, UNITS, QUESTIONS]);

  function switchUnit(id) {
    setUnitId(id);
    setActiveQ(null);
    setQIndex(0);
    setCardIndex(0);
    setFlipped(false);
    setCardOrder(null);
  }

  // Flashcard deck for the current unit (filtered, optionally shuffled)
  const deck = useMemo(() => {
    let idxs = cards.map((_, i) => i);
    if (cardFilter === "learning") idxs = idxs.filter((i) => cardMarks[`${unitId}-${i}`] !== "know");
    if (cardOrder) {
      const set = new Set(idxs);
      const ordered = cardOrder.filter((i) => set.has(i));
      idxs = ordered.length === idxs.length ? ordered : idxs;
    }
    return idxs;
  }, [cards, cardFilter, cardMarks, unitId, cardOrder]);

  function markCard(i, value) {
    const key = `${unitId}-${i}`;
    const next = { ...cardMarks, [key]: value };
    setCardMarks(next);
    persistCards(next);
    setFlipped(false);
    if (cardIndex < deck.length - 1 && (cardFilter === "all" || value === "learn")) setCardIndex(cardIndex + 1);
  }

  const showSidebar = mode !== "dashboard" && !globalReview;

  return (
    <div style={S.page}>
      <style>{getEngineCSS(COLLEGE_COLORS)}</style>
      <style>{EXTRA_CSS}</style>
      <div style={S.topbar}>
        <div style={S.topbarInner} className="app-container">
          <div style={S.logoRow}>
            <div style={S.logoMark}>
              <CourseIcon id={course.id} size={24} />
            </div>
            <div>
              <div style={S.logoText}>{course.name} <span style={S.logoCode}>— {course.code}</span></div>
              <div style={S.logoTag}>College Hub · Peters Family Homeschool</div>
            </div>
          </div>
        </div>
      </div>

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
          <Link to="/college" style={S.backToHubPill} className="mode-pill-hover">← College Hub</Link>
        </div>
      </div>

      <div style={S.body} className="app-body" data-no-sidebar={!showSidebar ? "true" : undefined}>
        {showSidebar && (
          <button style={S.unitSwitcher} className="mobile-only-switcher" onClick={() => setSidebarOpen(true)} aria-haspopup="dialog" aria-expanded={sidebarOpen}>
            <span style={S.unitSwitcherLeft}>
              <span style={S.unitSwitcherNum}>Unit {unit.id}</span>
              <span style={S.unitSwitcherName}>{unit.name}</span>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 6L12 14L20 6" stroke="#002855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {showSidebar && (
          <div style={S.drawerBackdrop} className={sidebarOpen ? "app-sidebar-backdrop open" : "app-sidebar-backdrop"} onClick={() => setSidebarOpen(false)}>
            <aside style={S.drawer} className="app-sidebar" onClick={(e) => e.stopPropagation()}>
              <div style={S.drawerHeader} className="mobile-only-flex">
                <div style={S.sidebarLabel}>Units</div>
                <button style={S.drawerClose} onClick={() => setSidebarOpen(false)} aria-label="Close units menu">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="#767F73" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
              <div style={S.sidebarLabel} className="desktop-only-label">Units</div>
              {UNITS.map((u) => {
                const isActive = u.id === unitId;
                const uStats = statsFor(u.id);
                const cStats = cardStatsFor(u.id);
                const pct = uStats.total ? Math.round((uStats.done / uStats.total) * 100) : 0;
                const cPct = cStats.total ? Math.round((cStats.known / cStats.total) * 100) : 0;
                const sp = sectionProgress.progress(u.id);
                return (
                  <button key={u.id} onClick={() => { switchUnit(u.id); setSidebarOpen(false); }} style={{ ...S.unitBtn, ...(isActive ? S.unitBtnActive : {}) }}>
                    <div style={S.unitBtnTop}>
                      <span style={S.unitNum}>Unit {u.id}</span>
                      <span style={S.unitWeight}>{u.tag}</span>
                    </div>
                    <div style={S.unitName}>{u.name}</div>
                    {mode === "mcq" && <div style={S.miniTrack}><div style={{ ...S.miniFill, width: `${pct}%` }} /></div>}
                    {mode === "cards" && cStats.known > 0 && (
                      <>
                        <div style={S.miniTrack}><div style={{ ...S.miniFill, width: `${cPct}%` }} /></div>
                        <div style={{ fontSize: 11.5, color: "#767F73", marginTop: 5 }}>{cStats.known}/{cStats.total} cards known</div>
                      </>
                    )}
                    {mode === "study" && sp.done > 0 && (
                      <>
                        <div style={S.miniTrack}><div style={{ ...S.miniFill, width: `${sp.pct}%` }} /></div>
                        <div style={{ fontSize: 11.5, color: "#767F73", marginTop: 5 }}>{sp.done}/{sp.total} sections done</div>
                      </>
                    )}
                  </button>
                );
              })}
            </aside>
          </div>
        )}

        <main style={S.main}>
          {mode === "study" && (
            <div data-study-pane style={S.studyPane} dangerouslySetInnerHTML={{ __html: STUDY_CONTENT[unitId] || "<p>Content not found.</p>" }} />
          )}

          {mode === "cards" && (() => {
            const total = cards.length;
            if (total === 0) {
              return (
                <div style={S.emptyState}>
                  <div style={S.emptyIconBadge}><ModeIcon id="cards" size={26} /></div>
                  <div style={S.emptyTitle}>Flashcards for this unit are coming soon</div>
                </div>
              );
            }
            const cStats = cardStatsFor(unitId);
            const safeIndex = deck.length ? Math.min(cardIndex, deck.length - 1) : 0;
            const ci = deck[safeIndex];
            const card = cards[ci];
            const mark = card ? cardMarks[`${unitId}-${ci}`] : null;
            return (
              <>
                <div style={S.progressBar}>
                  <div style={S.progressBarTop}>
                    <div style={S.progressText}>Unit {unit.id}: {unit.name} — {cStats.known}/{cStats.total} cards known</div>
                  </div>
                  <div style={S.progressTrack}><div style={{ ...S.progressFill, width: `${cStats.total ? (cStats.known / cStats.total) * 100 : 0}%` }} /></div>
                </div>

                <div style={S.filterRow}>
                  <button style={{ ...S.filterPill, ...(cardFilter === "all" ? S.filterPillActive : {}) }} onClick={() => { setCardFilter("all"); setCardIndex(0); setFlipped(false); }}>
                    All Cards ({total})
                  </button>
                  <button style={{ ...S.filterPill, ...(cardFilter === "learning" ? S.filterPillActive : {}) }} onClick={() => { setCardFilter("learning"); setCardIndex(0); setFlipped(false); }}>
                    Still Learning ({total - cStats.known})
                  </button>
                  <button
                    style={{ ...S.filterPill, ...(cardOrder ? S.filterPillActive : {}) }}
                    onClick={() => { setCardOrder(cardOrder ? null : shuffled(cards.map((_, i) => i))); setCardIndex(0); setFlipped(false); }}
                  >
                    {cardOrder ? "Shuffled" : "Shuffle"}
                  </button>
                </div>

                {deck.length === 0 ? (
                  <div style={S.emptyState}>
                    <div style={S.emptyIconBadge}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <div style={S.emptyTitle}>You know every card in this unit</div>
                    <p style={S.emptyText}>Switch to "All Cards" to review them again.</p>
                  </div>
                ) : (
                  <>
                    <div style={S.qNavRow}>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === 0 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === 0} onClick={() => { setCardIndex(safeIndex - 1); setFlipped(false); }}>← Previous</button>
                      <span style={S.qNavCounter}>Card {safeIndex + 1} of {deck.length}</span>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === deck.length - 1 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === deck.length - 1} onClick={() => { setCardIndex(safeIndex + 1); setFlipped(false); }}>Next →</button>
                    </div>

                    <button style={{ ...F.card, ...(flipped ? F.cardBack : {}) }} onClick={() => setFlipped(!flipped)} aria-label={flipped ? "Show term" : "Show meaning"}>
                      <div style={F.cardSide}>{flipped ? "Meaning" : "Term"}</div>
                      <div style={flipped ? F.cardMeaning : F.cardTerm}>{flipped ? card.meaning : card.term}</div>
                      {flipped && card.note && <div style={F.cardNote}>{card.note}</div>}
                      <div style={F.cardHint}>{flipped ? "Tap to flip back" : "Tap to reveal the meaning"}</div>
                      {mark === "know" && <div style={F.knownBadge}>✓ known</div>}
                    </button>

                    <div style={F.actions}>
                      <button style={F.learnBtn} onClick={() => markCard(ci, "learn")}>Still learning</button>
                      <button style={F.knowBtn} onClick={() => markCard(ci, "know")}>Got it</button>
                    </div>
                  </>
                )}
              </>
            );
          })()}

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
                  <p style={S.emptyText}>Every question you've attempted across all {UNITS.length} units is currently marked correct.</p>
                </div>
              ) : (
                <div style={S.qList}>
                  {allMissed.map(({ q, unitId: qUnitId, unitName }) => {
                    const a = answered[q.id];
                    const isOpen = activeQ === q.id;
                    return (
                      <div key={q.id} style={S.qCard} className="qbank-hover">
                        <button style={S.qHeader} onClick={() => setActiveQ(isOpen ? null : q.id)} aria-expanded={isOpen}>
                          <div style={S.qHeaderLeft}>
                            <span style={S.unitBadge}>Unit {qUnitId}</span>
                            <span style={S.qTopic}>{q.topic}</span>
                          </div>
                          <span style={{ ...S.qStatus, ...S.qStatusWrong }}>↻ retry</span>
                        </button>
                        {isOpen && (
                          <div style={S.qBody}>
                            <div style={S.retryNote}>You missed this one previously (Unit {qUnitId}: {unitName}). Pick a new answer below to try again.</div>
                            <p style={S.qStem}><RichText text={q.stem} /></p>
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
                                    <span><RichText text={c} /></span>
                                  </button>
                                );
                              })}
                            </div>
                            {a && (
                              <div style={S.explanation}>
                                <div style={S.explanationLabel}>Discussion</div>
                                <p style={S.explanationText}><RichText text={q.explanation} /></p>
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
                  {stats.done > 0 && <button style={S.unitResetBtn} onClick={() => setResetTarget(unitId)}>Reset this unit</button>}
                </div>
                <div style={S.progressTrack}><div style={{ ...S.progressFill, width: stats.total ? `${(stats.done / stats.total) * 100}%` : "0%" }} /></div>
              </div>

              {(() => {
                const missedCount = questions.filter((q) => answered[q.id] && !answered[q.id].correct).length;
                return (
                  <div style={S.filterRow}>
                    <button style={{ ...S.filterPill, ...(reviewFilter === "all" ? S.filterPillActive : {}) }} onClick={() => { setReviewFilter("all"); setQIndex(0); }}>
                      All Questions ({questions.length})
                    </button>
                    <button style={{ ...S.filterPill, ...(reviewFilter === "missed" ? S.filterPillMissedActive : {}) }} onClick={() => { setReviewFilter("missed"); setQIndex(0); }}>
                      Missed Only ({missedCount})
                    </button>
                  </div>
                );
              })()}

              {(() => {
                const displayed = reviewFilter === "missed" ? questions.filter((q) => answered[q.id] && !answered[q.id].correct) : questions;
                if (displayed.length === 0) {
                  return (
                    <div style={S.emptyState}>
                      <div style={S.emptyIconBadge}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                        </svg>
                      </div>
                      <div style={S.emptyTitle}>{stats.done === 0 ? "Nothing to review yet" : "Nothing missed right now"}</div>
                      <p style={S.emptyText}>
                        {stats.done === 0
                          ? "Answer some questions in this unit, and anything you miss will show up here for focused re-practice."
                          : "Every question you've attempted in this unit is currently marked correct. Great spot to be in."}
                      </p>
                    </div>
                  );
                }
                const safeIndex = Math.min(qIndex, displayed.length - 1);
                const q = displayed[safeIndex];
                const i = questions.indexOf(q);
                const a = answered[q.id];
                const isRetriable = a && !a.correct;
                return (
                  <>
                    <div style={S.qNavRow}>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === 0 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === 0} onClick={() => setQIndex(safeIndex - 1)}>← Previous</button>
                      <span style={S.qNavCounter}>Question {safeIndex + 1} of {displayed.length}</span>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === displayed.length - 1 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === displayed.length - 1} onClick={() => setQIndex(safeIndex + 1)}>Next →</button>
                    </div>
                    <div style={S.qCard}>
                      <div style={S.qHeader}>
                        <div style={S.qHeaderLeft}>
                          <span style={S.qNumBadge}>{String(i + 1).padStart(2, "0")}</span>
                          <span style={S.qTopic}>{q.topic}</span>
                        </div>
                        <span style={{ ...S.qStatus, ...(a ? (a.correct ? S.qStatusCorrect : S.qStatusWrong) : S.qStatusUnanswered) }}>
                          {a ? (a.correct ? "✓ correct" : "↻ retry") : "unanswered"}
                        </span>
                      </div>
                      <div style={S.qBody}>
                        {isRetriable && (
                          <div style={S.retryNote}>You missed this one previously. Pick a new answer below to try again — your explanation from last time is shown after you submit.</div>
                        )}
                        <p style={S.qStem}><RichText text={q.stem} /></p>
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
                                <span><RichText text={c} /></span>
                              </button>
                            );
                          })}
                        </div>
                        {a && (
                          <div style={S.explanation}>
                            <div style={S.explanationLabel}>Discussion</div>
                            <p style={S.explanationText}><RichText text={q.explanation} /></p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={S.qNavRowBottom}>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === 0 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === 0} onClick={() => setQIndex(safeIndex - 1)}>← Previous</button>
                      <button style={{ ...S.qNavBtn, ...(safeIndex === displayed.length - 1 ? S.qNavBtnDisabled : {}) }} disabled={safeIndex === displayed.length - 1} onClick={() => setQIndex(safeIndex + 1)}>Next →</button>
                    </div>
                  </>
                );
              })()}
            </>
          )}

          {mode === "dashboard" && (
            <div style={S.dashWrap}>
              <div style={S.dashCards} className="dash-stats">
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>MCQs Answered</div>
                  <div style={S.dashCardValue}>{overall.done} <span style={S.dashCardOf}>/ {overall.total}</span></div>
                </div>
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>Overall Accuracy</div>
                  <div style={S.dashCardValue}>{overall.done ? `${Math.round((overall.correct / overall.done) * 100)}%` : "—"}</div>
                </div>
                <div style={S.dashCard}>
                  <div style={S.dashCardLabel}>Flashcards Known</div>
                  <div style={S.dashCardValue}>{overall.cKnown} <span style={S.dashCardOf}>/ {overall.cTotal}</span></div>
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
                      {allMissed.length > 0 ? `${allMissed.length} question${allMissed.length === 1 ? "" : "s"} missed across all units` : "Nothing missed anywhere right now"}
                    </div>
                    <div style={S.reviewAllSub}>
                      {allMissed.length > 0 ? "Drill every weak spot in one pass, regardless of which unit it's from." : "Once you miss a question in any unit, it'll collect here for focused review."}
                    </div>
                  </div>
                </div>
                {allMissed.length > 0 && (
                  <button style={S.reviewAllBtn} onClick={() => { setMode("mcq"); setGlobalReview(true); setActiveQ(null); }}>Review All Missed</button>
                )}
              </div>

              <div style={S.dashUnitList} className="dash-grid">
                {UNITS.map((u) => {
                  const s = statsFor(u.id);
                  const c = cardStatsFor(u.id);
                  const uPct = s.total ? Math.round((s.done / s.total) * 100) : 0;
                  const uAcc = s.done ? Math.round((s.correct / s.done) * 100) : null;
                  return (
                    <div key={u.id} style={S.dashUnitRow}>
                      <div style={S.dashUnitInfo}>
                        <div style={S.dashUnitName}>Unit {u.id} — {u.name}</div>
                        <div style={S.dashUnitMeta}>
                          {s.total ? `${s.done}/${s.total} answered` : "not built yet"}
                          {uAcc !== null ? ` · ${uAcc}% accuracy` : ""}
                          {c.total ? ` · ${c.known}/${c.total} cards` : ""}
                        </div>
                      </div>
                      <div style={S.dashUnitTrack}><div style={{ ...S.dashUnitFill, width: `${uPct}%` }} /></div>
                      <div style={S.dashUnitActions}>
                        <button style={S.dashJumpBtn} onClick={() => { setMode("study"); switchUnit(u.id); }}>Study</button>
                        <button style={S.dashJumpBtn} onClick={() => { setMode("cards"); switchUnit(u.id); }}>Cards</button>
                        <button style={S.dashJumpBtn} onClick={() => { setMode("mcq"); switchUnit(u.id); }}>Practice</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button style={S.resetLink} onClick={() => setResetTarget("all")}>Reset all progress (MCQs and flashcards)</button>
            </div>
          )}
        </main>
      </div>

      {resetTarget !== null && (
        <div style={S.modalBackdrop} onClick={() => setResetTarget(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalTitle}>{resetTarget === "all" ? "Reset all progress?" : `Reset Unit ${resetTarget} progress?`}</div>
            <p style={S.modalText}>
              {resetTarget === "all"
                ? "This clears every answered MCQ and every flashcard mark across all units. It can't be undone."
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

const F = {
  card: { width: "100%", maxWidth: 460, margin: "0 auto", minHeight: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, textAlign: "center", background: "#FFFFFF", border: "1px solid #ECEAE3", borderTop: "5px solid #EAAA00", borderRadius: 20, padding: "34px 28px", boxShadow: "0 4px 14px rgba(0,40,85,0.08)", cursor: "pointer", position: "relative", fontFamily: "inherit", color: "#2E332E" },
  cardBack: { background: "#E6EBF3", borderTop: "5px solid #002855" },
  cardSide: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A6500", fontWeight: 700 },
  cardTerm: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 30, color: "#002855", lineHeight: 1.2 },
  cardMeaning: { fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 20, color: "#2E332E", lineHeight: 1.4, maxWidth: 380 },
  cardNote: { fontSize: 14.5, color: "#5A6B80", maxWidth: 380, lineHeight: 1.5 },
  cardHint: { fontSize: 12, color: "#9AA096", marginTop: 6 },
  knownBadge: { position: "absolute", top: 14, right: 16, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 11.5, background: "#E1EEDD", color: "#3D6B34", borderRadius: 100, padding: "4px 10px" },
  actions: { display: "flex", gap: 12, justifyContent: "center", marginTop: 18, flexWrap: "wrap" },
  learnBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, background: "#FFFFFF", color: "#8A6500", border: "1.5px solid #EAAA00", borderRadius: 100, padding: "11px 24px", cursor: "pointer" },
  knowBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, background: "#002855", color: "#FFFFFF", border: "1.5px solid #002855", borderRadius: 100, padding: "11px 28px", cursor: "pointer" },
};

const S = {
  page: { height: "100dvh", background: "#FAFAF7", color: "#2E332E", fontFamily: "'Nunito', sans-serif", fontSize: 16.5, lineHeight: 1.6, display: "flex", flexDirection: "column", overflow: "hidden" },

  topbar: { background: "#FFFFFF", borderBottom: "1px solid #ECEAE3", padding: "14px 24px" },
  topbarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" },
  logoRow: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: { width: 36, height: 36, borderRadius: 11, background: "#E6EBF3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  logoCode: { color: "#8A6500", fontWeight: 700, whiteSpace: "nowrap" },
  logoText: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: "#2E332E" },
  logoTag: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "#767F73", textTransform: "uppercase" },

  modeBar: { background: "#FFFFFF", borderBottom: "1px solid #ECEAE3", padding: "10px 24px", position: "sticky", top: 0, zIndex: 5 },
  modeBarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" },
  modePill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", padding: "8px 16px", borderRadius: 100, cursor: "pointer", display: "inline-flex", alignItems: "center" },
  modePillActive: { background: "#002855", color: "white" },
  modePillIcon: { display: "inline-flex", marginRight: 7, position: "relative", top: 1 },
  backToHubPill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#FFF6D9", color: "#8A6500", border: "none", padding: "8px 16px", borderRadius: 100, cursor: "pointer", display: "inline-flex", alignItems: "center", textDecoration: "none", marginLeft: "auto" },

  body: { maxWidth: 1040, margin: "0 auto", padding: "18px 24px 24px", position: "relative", flex: 1, overflowY: "auto", width: "100%" },

  unitSwitcher: { width: "100%", textAlign: "left", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 14, padding: "12px 16px", marginBottom: 18, cursor: "pointer", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  unitSwitcherLeft: { display: "flex", alignItems: "baseline", gap: 9 },
  unitSwitcherNum: { whiteSpace: "nowrap", flexShrink: 0, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#002855", fontWeight: 700 },
  unitSwitcherName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15.5, color: "#2E332E" },

  drawerBackdrop: { position: "fixed", inset: 0, background: "rgba(46,51,46,0.35)", zIndex: 20, display: "flex" },
  drawer: { width: 290, maxWidth: "85vw", height: "100%", background: "#FAFAF7", padding: "18px 16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 8, boxShadow: "4px 0 24px rgba(0,0,0,0.12)" },
  drawerHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  drawerClose: { background: "#F0EFE9", border: "none", borderRadius: 100, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
  sidebarLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#767F73", marginBottom: 2, textTransform: "uppercase" },
  unitBtn: { textAlign: "left", background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 14, padding: "11px 13px", fontFamily: "inherit", boxShadow: "0 2px 8px rgba(70,90,60,0.04)", cursor: "pointer" },
  unitBtnActive: { background: "#E6EBF3", border: "1px solid #B7C5DB" },
  unitBtnTop: { display: "flex", justifyContent: "space-between", marginBottom: 3 },
  unitNum: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, color: "#002855", fontWeight: 700 },
  unitWeight: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 9.5, color: "#767F73" },
  unitName: { fontSize: 13, fontWeight: 700, lineHeight: 1.3, color: "#2E332E" },
  miniTrack: { height: 5, background: "#E6E9E3", borderRadius: 3, overflow: "hidden", marginTop: 7 },
  miniFill: { height: "100%", background: "#EAAA00" },

  main: { flex: 1, minWidth: 0 },
  studyPane: { background: "transparent" },

  progressBar: { marginBottom: 18, background: "#FFFFFF", borderRadius: 16, padding: "14px 18px", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  progressBarTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 },
  unitResetBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, background: "#FBEAE5", color: "#B14D3A", border: "none", borderRadius: 100, padding: "5px 12px", cursor: "pointer", whiteSpace: "nowrap" },
  progressText: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, color: "#002855" },
  progressTrack: { height: 7, background: "#E6E9E3", borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", background: "#EAAA00", transition: "width 0.3s ease" },

  qList: { display: "flex", flexDirection: "column", gap: 10 },
  qNavRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  qNavRowBottom: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 },
  qNavBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#FFFFFF", color: "#002855", border: "1px solid #ECEAE3", padding: "10px 18px", borderRadius: 100, cursor: "pointer", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  qNavBtnDisabled: { opacity: 0.35, cursor: "default", boxShadow: "none" },
  qNavCounter: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, fontWeight: 600, color: "#767F73" },
  filterRow: { display: "flex", gap: 8, marginBottom: 14 },
  globalHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, background: "#FFFFFF", borderRadius: 16, padding: "16px 18px", marginBottom: 18, boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
  globalHeaderTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: "#2E332E", marginBottom: 3 },
  globalHeaderSub: { fontSize: 13, color: "#767F73" },
  exitGlobalBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", borderRadius: 100, padding: "7px 15px", cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" },
  unitBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, fontWeight: 700, color: "#002855", background: "#D5DEEC", borderRadius: 8, padding: "4px 8px", whiteSpace: "nowrap" },
  reviewAllCard: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "#FBEAE5", borderRadius: 18, padding: "18px 22px", marginBottom: 26, flexWrap: "wrap" },
  reviewAllLeft: { display: "flex", alignItems: "center", gap: 14 },
  reviewAllIcon: { width: 44, height: 44, borderRadius: 14, background: "#FFFFFF", color: "#B14D3A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  reviewAllTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15.5, color: "#2E332E", marginBottom: 2 },
  reviewAllSub: { fontSize: 13, color: "#8A6D3B" },
  reviewAllBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#B14D3A", color: "white", border: "none", borderRadius: 100, padding: "10px 20px", cursor: "pointer", whiteSpace: "nowrap" },
  reviewAllCardClear: { background: "#E6EBF3" },
  reviewAllIconClear: { color: "#002855" },
  filterPill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, background: "#F0EFE9", color: "#5A4E3F", border: "none", padding: "7px 14px", borderRadius: 100, cursor: "pointer" },
  filterPillActive: { background: "#002855", color: "white" },
  filterPillMissedActive: { background: "#002855", color: "white" },
  retryNote: { fontSize: 13.5, lineHeight: 1.5, color: "#8A4A38", background: "#FBEAE5", borderRadius: 10, padding: "10px 14px", margin: "16px 0 12px" },
  qCard: { background: "#FFFFFF", border: "1px solid #ECEAE3", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(70,90,60,0.04)" },
  qHeader: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "transparent", border: "none", cursor: "pointer" },
  qHeaderLeft: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" },
  qNumBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, fontWeight: 700, color: "#002855", background: "#D5DEEC", borderRadius: 8, padding: "4px 8px" },
  qTopic: { fontSize: 14.5, fontWeight: 700, color: "#2E332E", textAlign: "left" },
  stretchBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", background: "#FFF6D9", color: "#8A6500", borderRadius: 100, padding: "3px 9px" },
  qStatus: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, padding: "4px 10px", borderRadius: 100 },
  qStatusUnanswered: { background: "#F0EFE9", color: "#767F73" },
  qStatusCorrect: { background: "#E1EEDD", color: "#3D6B34" },
  qStatusWrong: { background: "#FBEAE5", color: "#B14D3A" },

  qBody: { padding: "0 18px 18px", borderTop: "1px solid #F0EFE9" },
  stretchNote: { fontSize: 13.5, lineHeight: 1.5, color: "#8A6D3B", background: "#FFF6D9", borderRadius: 10, padding: "10px 14px", margin: "16px 0 12px" },
  qStem: { fontSize: 15.5, lineHeight: 1.55, margin: "16px 0 14px" },
  choices: { display: "flex", flexDirection: "column", gap: 8 },
  choice: { display: "flex", gap: 10, alignItems: "flex-start", textAlign: "left", color: "inherit", padding: "11px 14px", border: "1px solid #ECEAE3", borderRadius: 12, background: "#FCFBF8", fontFamily: "inherit", fontSize: 14.5, lineHeight: 1.45, cursor: "pointer" },
  choiceLetter: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, color: "#767F73", flexShrink: 0 },
  choiceCorrect: { background: "#E1EEDD", border: "1px solid #002855" },
  choiceWrong: { background: "#FBEAE5", border: "1px solid #002855" },
  choiceDisabled: { opacity: 0.7, color: "inherit", cursor: "default" },

  explanation: { marginTop: 14, padding: "13px 16px", background: "#E6EBF3", borderRadius: 12 },
  explanationLabel: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#002855", marginBottom: 6 },
  explanationText: { fontSize: 14.5, lineHeight: 1.55, margin: 0, color: "#3B4038" },

  emptyState: { background: "#FFFFFF", borderRadius: 20, padding: "50px 30px", textAlign: "center", boxShadow: "0 4px 14px rgba(70,90,60,0.06)" },
  emptyIconBadge: { width: 56, height: 56, borderRadius: 18, background: "#E6EBF3", color: "#002855", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" },
  emptyTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2E332E", marginBottom: 10 },
  emptyText: { fontSize: 14.5, color: "#767F73", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 },

  dashWrap: { maxWidth: 1100 },
  dashCards: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginBottom: 26 },
  dashCard: { background: "#FFFFFF", borderRadius: 18, padding: "26px 22px", boxShadow: "0 4px 14px rgba(70,90,60,0.06)", display: "flex", flexDirection: "column", justifyContent: "center", aspectRatio: "1.15" },
  dashCardLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "#767F73", marginBottom: 8 },
  dashCardValue: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 28, color: "#002855" },
  dashCardOf: { fontSize: 15, color: "#B4BBAF", fontWeight: 600 },

  dashUnitList: {},
  dashUnitRow: { background: "#FFFFFF", borderRadius: 16, padding: "18px 18px", boxShadow: "0 2px 8px rgba(70,90,60,0.04)", display: "flex", flexDirection: "column" },
  dashUnitInfo: { display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 },
  dashUnitName: { fontWeight: 700, fontSize: 15, color: "#2E332E" },
  dashUnitMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#767F73" },
  dashUnitTrack: { height: 6, background: "#E6E9E3", borderRadius: 4, overflow: "hidden", marginBottom: 10 },
  dashUnitFill: { height: "100%", background: "#EAAA00" },
  dashUnitActions: { display: "flex", gap: 8, marginTop: "auto" },
  dashJumpBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12, background: "#E6EBF3", color: "#002855", border: "none", borderRadius: 100, padding: "6px 14px", cursor: "pointer" },

  resetLink: { marginTop: 26, background: "transparent", border: "none", color: "#002855", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, cursor: "pointer", padding: "10px 0" },

  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(46,51,46,0.35)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10 },
  modal: { background: "white", borderRadius: 20, padding: "26px 26px 22px", maxWidth: 360, boxShadow: "0 20px 50px rgba(0,0,0,0.2)" },
  modalTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 8, color: "#2E332E" },
  modalText: { fontSize: 14.5, color: "#767F73", marginBottom: 20 },
  modalActions: { display: "flex", gap: 10, justifyContent: "flex-end" },
  modalCancel: { background: "#F0EFE9", border: "none", borderRadius: 100, padding: "9px 18px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", color: "#2E332E" },
  modalConfirm: { background: "#002855", border: "none", borderRadius: 100, padding: "9px 18px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", color: "white" },
};