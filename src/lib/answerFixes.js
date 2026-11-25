// One-time cleanup for questions whose answer key was corrected after students may have answered them.
// A saved answer records whether it was right under the old key, so it would keep scoring wrongly. This removes
// those answers (only the listed questions, only answers saved before the cutoff) so the student can answer again.
// Answers saved after the cutoff are kept, so running this on every page load is safe. When it changes something the
// caller saves the result, which syncs to the student's profile like any other progress.

// Cutoff: 2026-11-25 (Unix seconds 1795601865). Answers made before this moment are cleared for the questions below.
export const KEY_FIX_CUTOFF = 1795601865 * 1000;

// storage key of each hub's practice progress -> the corrected questions in that hub
export const CORRECTED_QUESTIONS = {
  "ushistory-hub-mcq-progress-v1": ["8-2"],
  "englit-hub-mcq-progress-v1": ["u9-4-11", "u9-1-12", "u9-5-10"],
  "englang-hub-mcq-progress-v1": ["u9-1-3"],
};

/** @returns {{ next: object, changed: boolean }} the answers with outdated ones for the corrected questions removed */
export function dropOutdatedAnswers(answers, storageKey) {
  const ids = CORRECTED_QUESTIONS[storageKey] || [];
  if (!answers || typeof answers !== "object" || !ids.length) return { next: answers, changed: false };
  let next = answers, changed = false;
  for (const id of ids) {
    const a = answers[id];
    if (a && !(a.ts > KEY_FIX_CUTOFF)) { // no timestamp (older saves) counts as old
      if (next === answers) next = { ...answers };
      delete next[id];
      changed = true;
    }
  }
  return { next, changed };
}
