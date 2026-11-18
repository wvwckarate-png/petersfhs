import { useEffect } from "react";

// "New material": content added to a subject after it was first built.
//
// Added questions carry `added: "YYYY-MM-DD"`. Added study-guide paragraphs are wrapped in
// <div class="new-material" data-added="YYYY-MM-DD">, and whole new sections have data-added on their <h2>.
// Material counts as new for NEW_DAYS days after it was added, so the labels fade out on their own.

export const NEW_DAYS = 90;

export function addedTime(date) {
  if (!date) return 0;
  const t = Date.parse(`${date}T00:00:00`);
  return Number.isFinite(t) ? t : 0;
}

export function isRecent(date, now = Date.now()) {
  const t = addedTime(date);
  return t > 0 && now - t < NEW_DAYS * 864e5;
}

/** Recently added questions in a list (answered or not). */
export function newQuestions(questions) {
  return (questions || []).filter((q) => isRecent(q.added));
}

const H2_RE = /<h2 id="([\w-]+)"([^>]*)>/g;
const DATE_RE = /data-added="(\d{4}-\d{2}-\d{2})"/g;

/** { [sectionId]: latest recent added-date (ms) } for the sections of a study guide that gained material. */
export function sectionAddedDates(html) {
  const out = {};
  if (typeof html !== "string") return out;
  const heads = [...html.matchAll(H2_RE)];
  heads.forEach((m, i) => {
    const end = i + 1 < heads.length ? heads[i + 1].index : html.length;
    const chunk = html.slice(m.index, end);
    let best = 0;
    for (const d of chunk.matchAll(DATE_RE)) if (isRecent(d[1])) best = Math.max(best, addedTime(d[1]));
    if (best) out[m[1]] = best;
  });
  return out;
}

export function formatAdded(ms) {
  return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/**
 * MCQ Practice "New" filter: opens on the first new question not yet answered, and falls back to
 * "All Questions" in a unit that has no new questions.
 */
export function useNewFilter({ filter, setFilter, unitId, mode, questions, answered, setQIndex }) {
  useEffect(() => {
    if (filter !== "new" || mode !== "mcq") return;
    const list = newQuestions(questions);
    if (!list.length) { setFilter("all"); return; }
    const i = list.findIndex((q) => !answered[q.id]);
    setQIndex(i < 0 ? 0 : i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, unitId, mode]);
}
