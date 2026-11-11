// Remembers which question the student was on in each unit of MCQ Practice.
//
// Opening a unit goes back to that question. If it has since been answered, or if nothing was remembered yet
// (for example, progress saved before this feature existed), it goes to the next unanswered question instead.
// Stored under a new key ("<hub>-mcq-pos-v1": { [unitId]: questionId }); the answers themselves are untouched.
import { useCallback, useEffect, useRef, useState } from "react";
import { storage } from "../../lib/storage";

function target(questions, answered, savedId) {
  const n = questions.length;
  if (!n) return 0;
  const saved = savedId ? questions.findIndex((q) => q.id === savedId) : -1;
  const from = saved < 0 ? 0 : saved;
  if (saved >= 0 && !answered[questions[saved].id]) return saved; // still unanswered: exactly where they were
  for (let i = from; i < n; i++) if (!answered[questions[i].id]) return i; // next unanswered after that point
  if (saved >= 0) return saved; // everything after is done: stay where they were
  const first = questions.findIndex((q) => !answered[q.id]);
  return first < 0 ? 0 : first;
}

/**
 * @param storageKey  e.g. "chemistry-hub-mcq-pos-v1"
 * @param ready       true once saved answers have loaded
 * @param filter      "all" | "missed" (positions are only remembered in the full list)
 * @returns { restore, clear } – restore: back to the remembered question (leaving "Missed Only"); clear: after a reset
 */
export function useMcqPosition({ storageKey, unitId, questions, answered, ready, filter, qIndex, setQIndex }) {
  const [pos, setPos] = useState(null); // null until loaded
  const placedFor = useRef(null);
  const skipSave = useRef(false);

  useEffect(() => {
    let live = true;
    (async () => {
      let v = {};
      try { const r = await storage.get(storageKey, false); const p = JSON.parse(r.value); if (p && typeof p === "object") v = p; } catch { /* none saved */ }
      if (live) setPos(v);
    })();
    return () => { live = false; };
  }, [storageKey]);

  // Entering a unit: go to the remembered (or next unanswered) question.
  useEffect(() => {
    if (!ready || pos === null || placedFor.current === unitId) return;
    placedFor.current = unitId;
    const i = target(questions, answered, pos[unitId]);
    if (i !== qIndex) { skipSave.current = true; setQIndex(i); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, pos, unitId]);

  // Moving between questions: remember the current one.
  useEffect(() => {
    if (!ready || pos === null || placedFor.current !== unitId || filter !== "all") return;
    if (skipSave.current) { skipSave.current = false; return; }
    const q = questions[Math.min(qIndex, questions.length - 1)];
    if (!q || pos[unitId] === q.id) return;
    const next = { ...pos, [unitId]: q.id };
    setPos(next);
    storage.set(storageKey, JSON.stringify(next), false).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qIndex, unitId, filter, ready, pos === null]);

  const restore = useCallback(() => {
    const saved = pos && pos[unitId] ? questions.findIndex((q) => q.id === pos[unitId]) : -1;
    setQIndex(saved < 0 ? target(questions, answered, null) : saved);
  }, [pos, unitId, questions, answered, setQIndex]);

  // After a reset: forget the remembered question for that unit (or for every unit).
  const clear = useCallback((unit) => {
    const next = unit ? { ...(pos || {}) } : {};
    if (unit) delete next[unit];
    skipSave.current = false;
    setPos(next);
    storage.set(storageKey, JSON.stringify(next), false).catch(() => {});
    setQIndex(0);
  }, [pos, storageKey, setQIndex]);

  return { restore, clear };
}
