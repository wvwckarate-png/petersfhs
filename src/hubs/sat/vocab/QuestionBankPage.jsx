import React, { useState, useEffect, useMemo, useCallback } from "react";
import { storage } from "../../../lib/storage";
import { Link } from "react-router-dom";
import { DIFFICULTIES, DECKS, QUESTIONS } from "./content";

const PROGRESS_KEY = "vocab-question-progress-v1";
const NAV_KEY = "vocab-question-nav-v1";

export default function QuestionBankPage() {
  const [view, setView] = useState("difficulties"); // "difficulties" | "decks" | "quiz" | "missedReview" | "dashboard"
  const [activeDifficulty, setActiveDifficulty] = useState(null);
  const [activeDeck, setActiveDeck] = useState(null);
  const [answered, setAnswered] = useState({}); // { questionId: { selected, correct, ts } }
  const [qIndex, setQIndex] = useState(0);
  const [navLoaded, setNavLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await storage.get(PROGRESS_KEY, false);
        if (result && result.value) setAnswered(JSON.parse(result.value));
      } catch (e) {}
      try {
        const navResult = await storage.get(NAV_KEY, false);
        if (navResult && navResult.value) {
          const nav = JSON.parse(navResult.value);
          if (nav.view && nav.view !== "quiz" && nav.view !== "missedReview") setView(nav.view);
          if (nav.activeDifficulty) setActiveDifficulty(nav.activeDifficulty);
        }
      } catch (e) {}
      setNavLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!navLoaded) return;
    storage.set(NAV_KEY, JSON.stringify({ view, activeDifficulty }), false).catch(() => {});
  }, [view, activeDifficulty, navLoaded]);

  const persistAnswers = useCallback(async (next) => {
    try {
      await storage.set(PROGRESS_KEY, JSON.stringify(next), false);
    } catch (e) {
      console.error("Could not save question progress", e);
    }
  }, []);

  function selectChoice(q, idx) {
    if (answered[q.id] && answered[q.id].correct) return;
    const next = { ...answered, [q.id]: { selected: idx, correct: idx === q.correct, ts: Date.now() } };
    setAnswered(next);
    persistAnswers(next);
  }

  const deckStats = useCallback((deckId) => {
    const qs = QUESTIONS[deckId] || [];
    const ids = qs.map((q) => q.id);
    const done = ids.filter((qid) => answered[qid]);
    const correct = done.filter((qid) => answered[qid].correct);
    return { total: ids.length, done: done.length, correct: correct.length };
  }, [answered]);

  const difficultyStats = useCallback((diffId) => {
    const decks = DECKS.filter((d) => d.difficulty === diffId);
    let total = 0, done = 0, correct = 0;
    decks.forEach((d) => {
      const s = deckStats(d.id);
      total += s.total; done += s.done; correct += s.correct;
    });
    return { total, done, correct, deckCount: decks.length };
  }, [deckStats]);

  const overallStats = useMemo(() => {
    let total = 0, done = 0, correct = 0;
    DIFFICULTIES.forEach((d) => {
      const s = difficultyStats(d.id);
      total += s.total; done += s.done; correct += s.correct;
    });
    return { total, done, correct };
  }, [difficultyStats]);

  const allMissed = useMemo(() => {
    const list = [];
    DECKS.forEach((deck) => {
      const qs = QUESTIONS[deck.id] || [];
      qs.forEach((q) => {
        const a = answered[q.id];
        if (a && !a.correct) list.push({ q, deckName: deck.name, deckId: deck.id, ts: a.ts || 0 });
      });
    });
    list.sort((x, y) => y.ts - x.ts);
    return list;
  }, [answered]);

  function startDeckQuiz(deck) {
    setActiveDeck(deck);
    setQIndex(0);
    setView("quiz");
  }

  const currentDeckQuestions = activeDeck ? (QUESTIONS[activeDeck.id] || []) : [];

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Nunito:wght@400;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');
        * { box-sizing: border-box; }
        .deck-ring-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(61,52,112,0.14); transition: all 0.15s ease; }
        .diff-card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(61,52,112,0.16); transition: all 0.15s ease; }
        .vocab-btn-hover:hover { filter: brightness(0.95); cursor: pointer; }
        .qchoice-hover:hover { border-color: #C9C4E8 !important; background: #F7F6FC !important; }
      `}</style>

      <div style={S.topbar}>
        <div style={S.topbarInner}>
          <div style={S.logoRow}>
            <div style={S.logoMark}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 4L21 9.5" stroke="#2A2350" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M3.5 9.5H20.5" stroke="#2A2350" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M4.5 9.5V18.5M8.5 9.5V18.5M12 9.5V18.5M15.5 9.5V18.5M19.5 9.5V18.5" stroke="#2A2350" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 19.5H21" stroke="#2A2350" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="12" cy="6.7" r="0.9" fill="#E8A33D"/>
              </svg>
            </div>
            <div>
              <div style={S.logoText}>SAT Vocabulary Question Bank</div>
              <div style={S.logoTag}>Peters Family Homeschool</div>
            </div>
          </div>
          <Link to="/sat" style={S.backPill}>← SAT Hub</Link>
        </div>
      </div>

      <div style={S.modeBar}>
        <div style={S.modeBarInner}>
          <button
            onClick={() => setView("difficulties")}
            style={{ ...S.modePill, ...((view === "difficulties" || view === "decks" || view === "quiz") ? S.modePillActive : {}) }}
            className="vocab-btn-hover"
          >
            Practice
          </button>
          <button
            onClick={() => { setQIndex(0); setView("missedReview"); }}
            style={{ ...S.modePill, ...(view === "missedReview" ? S.modePillActive : {}) }}
            className="vocab-btn-hover"
          >
            Review Missed {allMissed.length > 0 ? `(${allMissed.length})` : ""}
          </button>
          <button
            onClick={() => setView("dashboard")}
            style={{ ...S.modePill, ...(view === "dashboard" ? S.modePillActive : {}) }}
            className="vocab-btn-hover"
          >
            Dashboard
          </button>
        </div>
      </div>

      <div style={S.body}>
        {view === "difficulties" && (
          <div style={S.diffGrid}>
            {DIFFICULTIES.map((d) => {
              const s = difficultyStats(d.id);
              const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
              return (
                <button key={d.id} className="diff-card-hover" style={S.diffCard} onClick={() => { setActiveDifficulty(d.id); setView("decks"); }}>
                  <RingProgress pct={pct} size={64} />
                  <div style={S.diffCardName}>{d.name}</div>
                  <div style={S.diffCardSub}>{d.subtitle}</div>
                  <div style={S.diffCardMeta}>{s.done}/{s.total} answered · {s.deckCount} decks</div>
                </button>
              );
            })}
          </div>
        )}

        {view === "decks" && activeDifficulty && (
          <>
            <div style={S.deckHeaderRow}>
              <button style={S.backLink} onClick={() => setView("difficulties")}>← All Difficulties</button>
              <div style={S.deckHeaderTitle}>{DIFFICULTIES.find((d) => d.id === activeDifficulty)?.name} Decks</div>
            </div>
            <div style={S.deckGrid}>
              {DECKS.filter((d) => d.difficulty === activeDifficulty).map((deck) => {
                const s = deckStats(deck.id);
                const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
                const hasContent = (QUESTIONS[deck.id] || []).length > 0;
                return (
                  <button
                    key={deck.id}
                    className="deck-ring-hover"
                    style={{ ...S.deckCard, opacity: hasContent ? 1 : 0.5, cursor: hasContent ? "pointer" : "default" }}
                    onClick={() => hasContent && startDeckQuiz(deck)}
                    disabled={!hasContent}
                  >
                    <RingProgress pct={pct} size={46} />
                    <div style={S.deckCardText}>
                      <div style={S.deckCardBadge}>Deck {deck.position}</div>
                      <div style={S.deckCardName}>{deck.name}</div>
                      <div style={S.deckCardMeta}>{hasContent ? `${s.done}/${s.total} answered · ${s.correct} correct` : "Coming soon"}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {view === "quiz" && activeDeck && (
          <QuestionRunner
            title={activeDeck.name}
            questions={currentDeckQuestions}
            answered={answered}
            qIndex={qIndex}
            setQIndex={setQIndex}
            selectChoice={selectChoice}
            onExit={() => setView("decks")}
          />
        )}

        {view === "missedReview" && (
          allMissed.length === 0 ? (
            <div style={S.emptyState}>
              <div style={S.emptyIconBadge}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </div>
              <div style={S.emptyTitle}>Nothing missed right now</div>
              <p style={S.emptyText}>Every question you've answered across every deck is currently marked correct.</p>
            </div>
          ) : (
            <QuestionRunner
              title="Missed Questions — All Decks"
              questions={allMissed.map((m) => m.q)}
              deckLabels={allMissed.map((m) => m.deckName)}
              answered={answered}
              qIndex={qIndex}
              setQIndex={setQIndex}
              selectChoice={selectChoice}
              onExit={() => setView("difficulties")}
              isRetryMode
            />
          )
        )}

        {view === "dashboard" && (
          <div style={S.dashWrap}>
            <div style={S.dashCards}>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Questions Answered</div>
                <div style={S.dashCardValue}>{overallStats.done} <span style={S.dashCardOf}>/ {overallStats.total}</span></div>
              </div>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Accuracy</div>
                <div style={S.dashCardValue}>{overallStats.done ? `${Math.round((overallStats.correct / overallStats.done) * 100)}%` : "—"}</div>
              </div>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Currently Missed</div>
                <div style={S.dashCardValue}>{allMissed.length}</div>
              </div>
            </div>

            {DIFFICULTIES.map((d) => {
              const s = difficultyStats(d.id);
              return (
                <div key={d.id} style={S.dashDiffSection}>
                  <div style={S.dashDiffHeader}>
                    <div style={S.dashDiffName}>{d.name}</div>
                    <div style={S.dashDiffMeta}>{s.done}/{s.total} answered</div>
                  </div>
                  <div style={S.dashDeckRow}>
                    {DECKS.filter((deck) => deck.difficulty === d.id).map((deck) => {
                      const ds = deckStats(deck.id);
                      const pct = ds.total ? Math.round((ds.done / ds.total) * 100) : 0;
                      return (
                        <div key={deck.id} style={S.dashDeckChip} title={deck.name}>
                          <RingProgress pct={pct} size={30} strokeWidth={3} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionRunner({ title, questions, deckLabels, answered, qIndex, setQIndex, selectChoice, onExit, isRetryMode }) {
  if (questions.length === 0) {
    return (
      <div style={S.emptyState}>
        <div style={S.emptyTitle}>No questions here yet</div>
        <button style={S.primaryBtn} className="vocab-btn-hover" onClick={onExit}>Go Back</button>
      </div>
    );
  }

  const safeIndex = Math.min(qIndex, questions.length - 1);
  const q = questions[safeIndex];
  const a = answered[q.id];
  const deckLabel = deckLabels ? deckLabels[safeIndex] : null;

  return (
    <div>
      <div style={S.sessionHeaderRow}>
        <button style={S.backLink} onClick={onExit}>← Exit</button>
        <div style={S.sessionCounter}>{title} · Question {safeIndex + 1} of {questions.length}</div>
      </div>

      <div style={S.qCard}>
        <div style={S.qHeader}>
          {deckLabel && <span style={S.deckLabelBadge}>{deckLabel}</span>}
          <span style={{ ...S.qStatus, ...(a ? (a.correct ? S.qStatusCorrect : S.qStatusWrong) : S.qStatusUnanswered) }}>
            {a ? (a.correct ? "✓ correct" : "✗ incorrect") : "unanswered"}
          </span>
        </div>
        <p style={S.qPassage}>{q.passage}</p>
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
              <button key={idx} onClick={() => selectChoice(q, idx)} disabled={a && a.correct} style={variant} className="qchoice-hover">
                <span style={S.choiceLetter}>{String.fromCharCode(65 + idx)}</span>
                <span>{c}</span>
              </button>
            );
          })}
        </div>
        {a && (
          <div style={S.explanation}>
            <div style={S.explanationLabel}>Explanation</div>
            <p style={S.explanationText}>{q.explanation}</p>
          </div>
        )}
      </div>

      <div style={S.navRow}>
        <button style={{ ...S.navBtn, ...(safeIndex === 0 ? S.navBtnDisabled : {}) }} disabled={safeIndex === 0} onClick={() => setQIndex(safeIndex - 1)}>← Previous</button>
        <button style={{ ...S.navBtn, ...(safeIndex === questions.length - 1 ? S.navBtnDisabled : {}) }} disabled={safeIndex === questions.length - 1} onClick={() => setQIndex(safeIndex + 1)}>Next →</button>
      </div>
    </div>
  );
}

function RingProgress({ pct, size = 50, strokeWidth = 5 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#EFEDFA" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke={pct === 100 ? "#E8A33D" : "#3D3470"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.4s ease" }}
      />
      {size >= 46 && (
        <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize={size * 0.24} fontFamily="'IBM Plex Mono',monospace" fontWeight="700" fill="#2A2350">
          {pct}%
        </text>
      )}
    </svg>
  );
}

const S = {
  page: { minHeight: "100vh", background: "#FAFAF7", color: "#2A2350", fontFamily: "'Nunito', sans-serif", fontSize: 16.5, lineHeight: 1.6 },

  topbar: { background: "#FFFFFF", borderBottom: "1px solid #E5E2F0", padding: "14px 24px" },
  topbarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" },
  logoRow: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: { width: 36, height: 36, borderRadius: 11, background: "#EFEDFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  logoText: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: "#2A2350" },
  logoTag: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "#8A84A8", textTransform: "uppercase" },
  backPill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#EFEDFA", color: "#3D3470", border: "none", padding: "8px 16px", borderRadius: 100, textDecoration: "none" },

  modeBar: { background: "#FFFFFF", borderBottom: "1px solid #E5E2F0", padding: "10px 24px", position: "sticky", top: 0, zIndex: 5 },
  modeBarInner: { maxWidth: 1040, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" },
  modePill: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#F1EFE9", color: "#5A4E3F", border: "none", padding: "8px 16px", borderRadius: 100, cursor: "pointer" },
  modePillActive: { background: "#3D3470", color: "white" },

  body: { maxWidth: 1040, margin: "0 auto", padding: "24px 24px 60px" },

  diffGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 },
  diffCard: { background: "white", border: "none", borderRadius: 22, padding: "28px 24px", boxShadow: "0 4px 14px rgba(61,52,112,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "inherit" },
  diffCardName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2A2350", marginTop: 4 },
  diffCardSub: { fontSize: 13.5, color: "#8A84A8", textAlign: "center" },
  diffCardMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#3D3470", marginTop: 4 },

  deckHeaderRow: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 },
  deckHeaderTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22, color: "#2A2350" },
  backLink: { alignSelf: "flex-start", background: "transparent", border: "none", color: "#3D3470", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, cursor: "pointer", padding: 0 },
  deckGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 },
  deckCard: { background: "white", border: "1px solid #E5E2F0", borderRadius: 18, padding: "16px 18px", boxShadow: "0 2px 8px rgba(61,52,112,0.05)", display: "flex", alignItems: "center", gap: 14, textAlign: "left", fontFamily: "inherit" },
  deckCardText: { flex: 1, minWidth: 0 },
  deckCardBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, fontWeight: 700, color: "#3D3470", background: "#EFEDFA", display: "inline-block", padding: "2px 8px", borderRadius: 100, marginBottom: 5 },
  deckCardName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15, color: "#2A2350" },
  deckCardMeta: { fontSize: 12.5, color: "#8A84A8", marginTop: 3 },

  sessionHeaderRow: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 },
  sessionCounter: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, color: "#8A84A8", fontWeight: 600 },

  qCard: { background: "white", borderRadius: 20, padding: "24px 26px", boxShadow: "0 4px 14px rgba(61,52,112,0.07)" },
  qHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 10, flexWrap: "wrap" },
  deckLabelBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, fontWeight: 700, color: "#3D3470", background: "#EFEDFA", borderRadius: 8, padding: "4px 8px" },
  qStatus: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, padding: "4px 10px", borderRadius: 100, marginLeft: "auto" },
  qStatusUnanswered: { background: "#F1EFE9", color: "#8A84A8" },
  qStatusCorrect: { background: "#E1EEDD", color: "#3D6B34" },
  qStatusWrong: { background: "#FBEAE5", color: "#B14D3A" },

  qPassage: { fontSize: 16.5, lineHeight: 1.65, color: "#2A2350", margin: "0 0 20px", fontWeight: 500 },

  choices: { display: "flex", flexDirection: "column", gap: 9 },
  choice: { display: "flex", gap: 10, alignItems: "flex-start", textAlign: "left", padding: "12px 15px", border: "1px solid #E5E2F0", borderRadius: 12, background: "#FCFBF8", fontFamily: "inherit", fontSize: 14.5, lineHeight: 1.45, cursor: "pointer" },
  choiceLetter: { fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, color: "#8A84A8", flexShrink: 0 },
  choiceCorrect: { background: "#E1EEDD", border: "1px solid #3D3470" },
  choiceWrong: { background: "#FBEAE5", border: "1px solid #D98B7B" },
  choiceDisabled: { opacity: 0.5, cursor: "default" },

  explanation: { marginTop: 16, padding: "14px 16px", background: "#EFEDFA", borderRadius: 12 },
  explanationLabel: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D3470", marginBottom: 6 },
  explanationText: { fontSize: 14.5, lineHeight: 1.55, margin: 0, color: "#2A2350" },

  navRow: { display: "flex", justifyContent: "space-between", marginTop: 18 },
  navBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#FFFFFF", color: "#3D3470", border: "1px solid #E5E2F0", padding: "10px 18px", borderRadius: 100, cursor: "pointer", boxShadow: "0 2px 8px rgba(61,52,112,0.05)" },
  navBtnDisabled: { opacity: 0.35, cursor: "default", boxShadow: "none" },

  emptyState: { background: "white", borderRadius: 22, padding: "50px 30px", textAlign: "center", boxShadow: "0 4px 14px rgba(61,52,112,0.06)", maxWidth: 480, margin: "0 auto" },
  emptyIconBadge: { width: 56, height: 56, borderRadius: 18, background: "#EFEDFA", color: "#3D3470", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" },
  emptyTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2A2350", marginBottom: 10 },
  emptyText: { fontSize: 14.5, color: "#8A84A8", lineHeight: 1.6, marginBottom: 20 },
  primaryBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#3D3470", color: "white", border: "none", borderRadius: 100, padding: "10px 22px", cursor: "pointer" },

  dashWrap: { maxWidth: 1040 },
  dashCards: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 30 },
  dashCard: { background: "white", borderRadius: 18, padding: "24px 20px", boxShadow: "0 4px 14px rgba(61,52,112,0.06)" },
  dashCardLabel: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A84A8", marginBottom: 8 },
  dashCardValue: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 26, color: "#3D3470" },
  dashCardOf: { fontSize: 14, color: "#C4C0D8", fontWeight: 600 },

  dashDiffSection: { background: "white", borderRadius: 18, padding: "18px 20px", marginBottom: 12, boxShadow: "0 2px 8px rgba(61,52,112,0.04)" },
  dashDiffHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  dashDiffName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15, color: "#2A2350" },
  dashDiffMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#8A84A8" },
  dashDeckRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  dashDeckChip: { width: 30, height: 30 },
};