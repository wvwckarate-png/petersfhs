import React, { useState, useEffect, useMemo, useCallback } from "react";
import { storage } from "../../../lib/storage";
import { Link } from "react-router-dom";
import { DIFFICULTIES, DECKS, WORDS } from "./content";

const VOCAB_COLORS = {
  indigo: "#3D3470", indigoDeep: "#2A2350", gold: "#E8A33D", pale: "#EFEDFA",
};

const PROGRESS_KEY = "vocab-word-progress-v1";
const NAV_KEY = "vocab-last-nav-v1";

export default function VocabPage() {
  const [view, setView] = useState("difficulties"); // "difficulties" | "decks" | "session" | "stillLearning" | "dashboard"
  const [activeDifficulty, setActiveDifficulty] = useState(null);
  const [activeDeck, setActiveDeck] = useState(null);
  const [wordState, setWordState] = useState({}); // { wordId: "got" | "learning" }
  const [navLoaded, setNavLoaded] = useState(false);

  // session-only state
  const [queue, setQueue] = useState([]); // array of word objects, current session order
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionMissed, setSessionMissed] = useState([]);
  const [sessionDone, setSessionDone] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await storage.get(PROGRESS_KEY, false);
        if (result && result.value) setWordState(JSON.parse(result.value));
      } catch (e) {}
      try {
        const navResult = await storage.get(NAV_KEY, false);
        if (navResult && navResult.value) {
          const nav = JSON.parse(navResult.value);
          if (nav.view && nav.view !== "session") setView(nav.view);
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

  const persistWordState = useCallback(async (next) => {
    try {
      await storage.set(PROGRESS_KEY, JSON.stringify(next), false);
    } catch (e) {
      console.error("Could not save vocab progress", e);
    }
  }, []);

  function markWord(wordId, status) {
    const next = { ...wordState, [wordId]: status };
    setWordState(next);
    persistWordState(next);
  }

  // ---- deck / difficulty stats ----
  const deckStats = useCallback((deckId) => {
    const words = WORDS[deckId] || [];
    const total = words.length;
    const got = words.filter((w) => wordState[w.id] === "got").length;
    const seen = words.filter((w) => wordState[w.id]).length;
    return { total, got, seen, pct: total ? Math.round((got / total) * 100) : 0 };
  }, [wordState]);

  const difficultyStats = useCallback((diffId) => {
    const decks = DECKS.filter((d) => d.difficulty === diffId);
    let total = 0, got = 0;
    decks.forEach((d) => {
      const s = deckStats(d.id);
      total += s.total;
      got += s.got;
    });
    return { total, got, pct: total ? Math.round((got / total) * 100) : 0, deckCount: decks.length };
  }, [deckStats]);

  const overallStats = useMemo(() => {
    let total = 0, got = 0;
    DIFFICULTIES.forEach((d) => {
      const s = difficultyStats(d.id);
      total += s.total;
      got += s.got;
    });
    return { total, got, pct: total ? Math.round((got / total) * 100) : 0 };
  }, [difficultyStats]);

  const allLearningWords = useMemo(() => {
    const list = [];
    DECKS.forEach((deck) => {
      const words = WORDS[deck.id] || [];
      words.forEach((w) => {
        if (wordState[w.id] === "learning") list.push({ ...w, deckName: deck.name, deckId: deck.id });
      });
    });
    return list;
  }, [wordState]);

  // ---- session control ----
  function startDeckSession(deck) {
    const words = WORDS[deck.id] || [];
    setActiveDeck(deck);
    setQueue(words);
    setCardIndex(0);
    setFlipped(false);
    setSessionMissed([]);
    setSessionDone(false);
    setView("session");
  }

  function startStillLearningSession() {
    setActiveDeck(null);
    setQueue(allLearningWords);
    setCardIndex(0);
    setFlipped(false);
    setSessionMissed([]);
    setSessionDone(false);
    setView("stillLearningSession");
  }

  function advanceAfter(missed) {
    const isLastInQueue = cardIndex === queue.length - 1;
    if (isLastInQueue) {
      if (missed.length > 0) {
        // requeue missed words for another pass
        setQueue(missed);
        setCardIndex(0);
        setSessionMissed([]);
        setFlipped(false);
      } else {
        setSessionDone(true);
        setFlipped(false);
      }
    } else {
      setCardIndex(cardIndex + 1);
      setFlipped(false);
    }
  }

  function handleRate(status) {
    const current = queue[cardIndex];
    markWord(current.id, status);

    let missed = sessionMissed;
    if (status === "learning" && !sessionMissed.find((w) => w.id === current.id)) {
      missed = [...sessionMissed, current];
      setSessionMissed(missed);
    } else if (status === "got") {
      missed = sessionMissed.filter((w) => w.id !== current.id);
      setSessionMissed(missed);
    }
    advanceAfter(missed);
  }

  function handleSkip() {
    // advance without recording any rating for this word
    advanceAfter(sessionMissed);
  }

  const currentCard = queue[cardIndex];

  useEffect(() => {
    function handleKey(e) {
      if (view !== "session" && view !== "stillLearningSession") return;
      if (!currentCard) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        handleSkip();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [view, currentCard, cardIndex, queue, sessionMissed]);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Nunito:wght@400;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');
        * { box-sizing: border-box; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped { transform: rotateY(180deg); }
        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 26px;
        }
        .flip-face-back { transform: rotateY(180deg); }
        .deck-ring-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(61,52,112,0.14); transition: all 0.15s ease; }
        .diff-card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(61,52,112,0.16); transition: all 0.15s ease; }
        .vocab-btn-hover:hover { filter: brightness(0.95); cursor: pointer; }
      `}</style>

      {/* TOP BAR */}
      <div style={S.topbar}>
        <div style={S.topbarInner}>
          <div style={S.logoRow}>
            <div style={S.logoMark}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 3.5H16.5C17.3 3.5 18 4.2 18 5V19.5C18 20.3 17.3 21 16.5 21H6C5.4 21 5 20.6 5 20V5C5 4.2 5.4 3.5 6 3.5Z" stroke="#2A2350" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M5 17.5H18" stroke="#2A2350" strokeWidth="1.4" strokeLinecap="round"/>
                <text x="8.2" y="11.5" fontSize="5.5" fontWeight="700" fill="#2A2350" fontFamily="Arial, sans-serif">A</text>
                <path d="M9.5 13.3H12.5" stroke="#E8A33D" strokeWidth="1.3" strokeLinecap="round"/>
                <text x="13.3" y="15.3" fontSize="5.5" fontWeight="700" fill="#E8A33D" fontFamily="Arial, sans-serif">Z</text>
              </svg>
            </div>
            <div>
              <div style={S.logoText}>SAT Vocabulary Hub</div>
              <div style={S.logoTag}>Peters Family Homeschool</div>
            </div>
          </div>
          <Link to="/sat" style={S.backPill}>← SAT Hub</Link>
        </div>
      </div>

      {/* MODE PILLS */}
      <div style={S.modeBar}>
        <div style={S.modeBarInner}>
          <button
            onClick={() => { setView("difficulties"); }}
            style={{ ...S.modePill, ...((view === "difficulties" || view === "decks" || view === "session") ? S.modePillActive : {}) }}
            className="vocab-btn-hover"
          >
            Study
          </button>
          <button
            onClick={startStillLearningSession}
            style={{ ...S.modePill, ...(view === "stillLearningSession" ? S.modePillActive : {}) }}
            className="vocab-btn-hover"
          >
            Still Learning {allLearningWords.length > 0 ? `(${allLearningWords.length})` : ""}
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
        {/* ---------- DIFFICULTY PICKER ---------- */}
        {view === "difficulties" && (
          <div style={S.diffGrid}>
            {DIFFICULTIES.map((d) => {
              const s = difficultyStats(d.id);
              return (
                <button
                  key={d.id}
                  className="diff-card-hover"
                  style={S.diffCard}
                  onClick={() => { setActiveDifficulty(d.id); setView("decks"); }}
                >
                  <RingProgress pct={s.pct} size={64} />
                  <div style={S.diffCardName}>{d.name}</div>
                  <div style={S.diffCardSub}>{d.subtitle}</div>
                  <div style={S.diffCardMeta}>{s.got}/{s.total} words · {s.deckCount} decks</div>
                </button>
              );
            })}
          </div>
        )}

        {/* ---------- DECK GRID ---------- */}
        {view === "decks" && activeDifficulty && (
          <>
            <div style={S.deckHeaderRow}>
              <button style={S.backLink} onClick={() => setView("difficulties")}>← All Difficulties</button>
              <div style={S.deckHeaderTitle}>
                {DIFFICULTIES.find((d) => d.id === activeDifficulty)?.name} Decks
              </div>
            </div>
            <div style={S.deckGrid}>
              {DECKS.filter((d) => d.difficulty === activeDifficulty).map((deck) => {
                const s = deckStats(deck.id);
                const hasContent = (WORDS[deck.id] || []).length > 0;
                return (
                  <button
                    key={deck.id}
                    className="deck-ring-hover"
                    style={{ ...S.deckCard, opacity: hasContent ? 1 : 0.5, cursor: hasContent ? "pointer" : "default" }}
                    onClick={() => hasContent && startDeckSession(deck)}
                    disabled={!hasContent}
                  >
                    <RingProgress pct={s.pct} size={46} />
                    <div style={S.deckCardText}>
                      <div style={S.deckCardBadge}>Deck {deck.position}</div>
                      <div style={S.deckCardName}>{deck.name}</div>
                      <div style={S.deckCardMeta}>
                        {hasContent ? `${s.got}/${s.total} mastered` : "Coming soon"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* ---------- FLASHCARD SESSION (deck or still-learning) ---------- */}
        {(view === "session" || view === "stillLearningSession") && (
          <FlashcardSession
            view={view}
            activeDeck={activeDeck}
            queue={queue}
            cardIndex={cardIndex}
            flipped={flipped}
            setFlipped={setFlipped}
            currentCard={currentCard}
            sessionDone={sessionDone}
            handleRate={handleRate}
            handleSkip={handleSkip}
            onExit={() => setView(view === "session" ? "decks" : "difficulties")}
            onRestart={() => {
              if (view === "session" && activeDeck) startDeckSession(activeDeck);
              else startStillLearningSession();
            }}
          />
        )}

        {/* ---------- DASHBOARD ---------- */}
        {view === "dashboard" && (
          <div style={S.dashWrap}>
            <div style={S.dashCards}>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Words Mastered</div>
                <div style={S.dashCardValue}>{overallStats.got} <span style={S.dashCardOf}>/ {overallStats.total}</span></div>
              </div>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Overall Progress</div>
                <div style={S.dashCardValue}>{overallStats.pct}%</div>
              </div>
              <div style={S.dashCard}>
                <div style={S.dashCardLabel}>Still Learning</div>
                <div style={S.dashCardValue}>{allLearningWords.length}</div>
              </div>
            </div>

            {DIFFICULTIES.map((d) => {
              const s = difficultyStats(d.id);
              return (
                <div key={d.id} style={S.dashDiffSection}>
                  <div style={S.dashDiffHeader}>
                    <div style={S.dashDiffName}>{d.name}</div>
                    <div style={S.dashDiffMeta}>{s.got}/{s.total} words mastered</div>
                  </div>
                  <div style={S.dashDeckRow}>
                    {DECKS.filter((deck) => deck.difficulty === d.id).map((deck) => {
                      const ds = deckStats(deck.id);
                      return (
                        <div key={deck.id} style={S.dashDeckChip} title={deck.name}>
                          <RingProgress pct={ds.pct} size={30} strokeWidth={3} />
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

// ---------- Flashcard Session Component ----------

function FlashcardSession({ view, activeDeck, queue, cardIndex, flipped, setFlipped, currentCard, sessionDone, handleRate, handleSkip, onExit, onRestart }) {
  if (queue.length === 0 && !sessionDone) {
    return (
      <div style={S.emptyState}>
        <div style={S.emptyTitle}>Nothing to review right now</div>
        <p style={S.emptyText}>
          {view === "stillLearningSession"
            ? "You don't have any words marked 'Still Learning' at the moment. Nice work."
            : "This deck doesn't have content yet."}
        </p>
        <button style={S.primaryBtn} className="vocab-btn-hover" onClick={onExit}>Go Back</button>
      </div>
    );
  }

  if (sessionDone) {
    return (
      <div style={S.emptyState}>
        <div style={S.emptyIconBadge}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
          </svg>
        </div>
        <div style={S.emptyTitle}>Session complete</div>
        <p style={S.emptyText}>You've gone through every card in this session, including retries on anything marked "Still Learning."</p>
        <div style={S.emptyBtnRow}>
          <button style={S.secondaryBtn} className="vocab-btn-hover" onClick={onRestart}>Study Again</button>
          <button style={S.primaryBtn} className="vocab-btn-hover" onClick={onExit}>Done</button>
        </div>
      </div>
    );
  }

  return (
    <div style={S.sessionWrap}>
      <div style={S.sessionHeader}>
        <button style={S.backLink} onClick={onExit}>← Exit Session</button>
        <div style={S.sessionCounter}>
          {activeDeck ? activeDeck.name : "Still Learning Review"} · Card {cardIndex + 1} of {queue.length}
        </div>
      </div>

      <div style={S.cardStage} onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card-inner${flipped ? " flipped" : ""}`}>
          <div className="flip-face" style={S.cardFront}>
            <div style={S.cardWord}>{currentCard.word}</div>
            <div style={S.cardPOS}>{currentCard.partOfSpeech}</div>
            <div style={S.cardTapHint}>Tap to reveal</div>
          </div>
          <div className="flip-face flip-face-back" style={S.cardBack}>
            <div style={S.cardBackWord}>{currentCard.word}</div>
            <div style={S.cardDef}>{currentCard.definition}</div>
            {currentCard.example && (
              <div style={S.cardExample}>"{currentCard.example}"</div>
            )}
          </div>
        </div>
      </div>

      {flipped && (
        <>
          <div style={S.rateRow}>
            <button
              style={S.rateLearning}
              className="vocab-btn-hover"
              onClick={(e) => { e.stopPropagation(); handleRate("learning"); }}
            >
              Still Learning
            </button>
            <button
              style={S.rateGot}
              className="vocab-btn-hover"
              onClick={(e) => { e.stopPropagation(); handleRate("got"); }}
            >
              Got It
            </button>
          </div>
          <button
            style={S.skipLink}
            className="vocab-btn-hover"
            onClick={(e) => { e.stopPropagation(); handleSkip(); }}
          >
            Skip without rating
          </button>
        </>
      )}

      <div style={S.keyHintRow}>← → flip · ↑ ↓ skip</div>
    </div>
  );
}

// ---------- Ring Progress ----------

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

// ---------- Styles ----------

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

  // difficulty picker
  diffGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 },
  diffCard: { background: "white", border: "none", borderRadius: 22, padding: "28px 24px", boxShadow: "0 4px 14px rgba(61,52,112,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "inherit" },
  diffCardName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2A2350", marginTop: 4 },
  diffCardSub: { fontSize: 13.5, color: "#8A84A8", textAlign: "center" },
  diffCardMeta: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "#3D3470", marginTop: 4 },

  // deck grid
  deckHeaderRow: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 },
  deckHeaderTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22, color: "#2A2350" },
  backLink: { alignSelf: "flex-start", background: "transparent", border: "none", color: "#3D3470", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, cursor: "pointer", padding: 0 },
  deckGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 },
  deckCard: { background: "white", border: "1px solid #E5E2F0", borderRadius: 18, padding: "16px 18px", boxShadow: "0 2px 8px rgba(61,52,112,0.05)", display: "flex", alignItems: "center", gap: 14, textAlign: "left", fontFamily: "inherit" },
  deckCardText: { flex: 1, minWidth: 0 },
  deckCardBadge: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, fontWeight: 700, color: "#3D3470", background: "#EFEDFA", display: "inline-block", padding: "2px 8px", borderRadius: 100, marginBottom: 5 },
  deckCardName: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15, color: "#2A2350" },
  deckCardMeta: { fontSize: 12.5, color: "#8A84A8", marginTop: 3 },

  // session
  sessionWrap: { display: "flex", flexDirection: "column", alignItems: "center" },
  sessionHeader: { width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 },
  sessionCounter: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, color: "#8A84A8", fontWeight: 600 },

  cardStage: { width: "100%", maxWidth: 480, height: 320, perspective: 1400, cursor: "pointer" },
  cardFront: { background: "linear-gradient(135deg, #3D3470, #2A2350)", boxShadow: "0 14px 34px rgba(42,35,80,0.28)" },
  cardBack: { background: "#FFFFFF", border: "1.5px solid #E5E2F0", boxShadow: "0 14px 34px rgba(42,35,80,0.10)", padding: "26px 30px" },

  cardWord: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 34, color: "white", textAlign: "center", padding: "0 24px" },
  cardPOS: { fontFamily: "'IBM Plex Mono',monospace", fontSize: 13, color: "#E8A33D", marginTop: 8, fontStyle: "italic" },
  cardTapHint: { position: "absolute", bottom: 22, fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" },

  cardBackWord: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22, color: "#3D3470", marginBottom: 12, textAlign: "center" },
  cardDef: { fontSize: 16.5, lineHeight: 1.55, color: "#2A2350", textAlign: "center", marginBottom: 14 },
  cardExample: { fontSize: 14, lineHeight: 1.55, color: "#8A84A8", fontStyle: "italic", textAlign: "center" },

  rateRow: { display: "flex", gap: 12, marginTop: 24, width: "100%", maxWidth: 480 },
  rateLearning: { flex: 1, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14.5, background: "#FBEAE5", color: "#B14D3A", border: "none", borderRadius: 100, padding: "13px 0", cursor: "pointer" },
  rateGot: { flex: 1, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14.5, background: "#E8A33D", color: "white", border: "none", borderRadius: 100, padding: "13px 0", cursor: "pointer" },
  skipLink: { marginTop: 12, background: "transparent", border: "none", color: "#8A84A8", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 12.5, cursor: "pointer", padding: "6px 0" },
  keyHintRow: { marginTop: 16, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.04em", color: "#C4C0D8", textAlign: "center" },

  // empty / done states
  emptyState: { background: "white", borderRadius: 22, padding: "50px 30px", textAlign: "center", boxShadow: "0 4px 14px rgba(61,52,112,0.06)", maxWidth: 480, margin: "0 auto" },
  emptyIconBadge: { width: 56, height: 56, borderRadius: 18, background: "#EFEDFA", color: "#3D3470", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" },
  emptyTitle: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19, color: "#2A2350", marginBottom: 10 },
  emptyText: { fontSize: 14.5, color: "#8A84A8", lineHeight: 1.6, marginBottom: 20 },
  emptyBtnRow: { display: "flex", gap: 10, justifyContent: "center" },
  primaryBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#3D3470", color: "white", border: "none", borderRadius: 100, padding: "10px 22px", cursor: "pointer" },
  secondaryBtn: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: "#EFEDFA", color: "#3D3470", border: "none", borderRadius: 100, padding: "10px 22px", cursor: "pointer" },

  // dashboard
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