// Read-only summaries of saved progress for the home page and the hub pages.
//
// Nothing here changes how progress is stored: it only READS the same keys the subject pages have always written
// ("<hub>-mcq-progress-v1", "<hub>-sections-v1", "<hub>-last-nav-v1", "<hub>-exams-v1"). The one key this file
// writes is "site-recent-v1" (which page was opened when), a new key that no other page uses.
import { storage } from "./storage";
import manifest from "../hubs/manifest.json";
import { COURSES } from "../hubs/college/courses";

export const AP = manifest.ap;
export const SAT_TOTALS = manifest.sat;

const RECENT_KEY = "site-recent-v1";

const read = async (key) => {
  try {
    const r = await storage.get(key, false);
    const v = JSON.parse(r.value);
    return v && typeof v === "object" ? v : null;
  } catch { return null; } // nothing saved under that key yet
};

export const MODE_LABELS = {
  study: "Study Guides", mcq: "MCQ Practice", frq: "FRQ Practice", exams: "MCQ Exams", frqexams: "FRQ Exams",
  dashboard: "Dashboard", cards: "Flash Cards",
};

// "5-18" and "u5-1-3" both belong to unit 5.
const unitOf = (qid) => { const m = /^u?(\d+)-/.exec(qid); return m ? Number(m[1]) : null; };

function summarizeMcq(answered, units) {
  const per = {};
  let lastTs = 0;
  for (const [qid, a] of Object.entries(answered || {})) {
    if (!a) continue;
    const u = unitOf(qid);
    if (u === null) continue;
    const p = per[u] || (per[u] = { done: 0, correct: 0 });
    p.done++; if (a.correct) p.correct++;
    if (a.ts && a.ts > lastTs) lastTs = a.ts;
  }
  let done = 0, correct = 0;
  for (const u of units) {
    const p = per[u.id];
    if (!p) continue;
    p.done = Math.min(p.done, u.mcq); p.correct = Math.min(p.correct, p.done); // never show more than exist
    done += p.done; correct += p.correct;
  }
  return { per, done, correct, lastTs };
}

/** Progress for every AP subject: { [id]: { ...manifest entry, done, correct, sectionsDone, examsDone, nav, lastActive, started } } */
export async function loadApProgress() {
  const recent = (await read(RECENT_KEY)) || {};
  const out = {};
  await Promise.all(Object.entries(AP).map(async ([id, s]) => {
    const [answered, nav, sections, exams] = await Promise.all([
      read(`${s.hubKey}-mcq-progress-v1`), read(`${s.hubKey}-last-nav-v1`), read(`${s.hubKey}-sections-v1`),
      s.examKey ? read(`${s.examKey}-exams-v1`) : null,
    ]);
    const mcq = summarizeMcq(answered, s.units);
    let sectionsDone = 0;
    for (const u of s.units) {
      const d = sections && sections[u.id];
      if (d) sectionsDone += Math.min(Object.values(d).filter(Boolean).length, u.sections);
    }
    const examsDone = exams ? Object.values(exams).filter((e) => e && e.status === "completed").length : 0;
    const started = mcq.done > 0 || sectionsDone > 0 || examsDone > 0;
    out[id] = {
      id, ...s, per: mcq.per, done: mcq.done, correct: mcq.correct, sectionsDone, examsDone, nav, started,
      lastActive: Math.max(recent[s.route] || 0, mcq.lastTs),
    };
  }));
  return out;
}

/** Progress outside the AP subjects (SAT vocabulary, college courses, jiu-jitsu). */
export async function loadOtherProgress() {
  const recent = (await read(RECENT_KEY)) || {};
  const [words, vq, jj] = await Promise.all([read("vocab-word-progress-v1"), read("vocab-question-progress-v1"), read("jj:v2")]);
  const wordVals = Object.values(words || {});
  const vqVals = Object.values(vq || {}).filter(Boolean);
  const college = {};
  await Promise.all(COURSES.map(async (c) => {
    const [answered, sections, nav] = await Promise.all([
      read(`college-${c.id}-mcq-progress-v1`), read(`college-${c.id}-sections-v1`), read(`college-${c.id}-last-nav-v1`),
    ]);
    const vals = Object.values(answered || {}).filter(Boolean);
    const sectionsDone = Object.values(sections || {}).reduce((n, d) => n + Object.values(d || {}).filter(Boolean).length, 0);
    const lastTs = vals.reduce((m, a) => Math.max(m, a.ts || 0), 0);
    college[c.id] = {
      done: vals.length, correct: vals.filter((a) => a.correct).length, sectionsDone, nav,
      started: vals.length > 0 || sectionsDone > 0, lastActive: Math.max(recent[`/college/${c.id}`] || 0, lastTs),
    };
  }));
  return {
    sat: {
      wordsKnown: wordVals.filter((v) => v === "got").length, wordsSeen: wordVals.length,
      questionsDone: vqVals.length, questionsCorrect: vqVals.filter((a) => a.correct).length,
      lastWords: recent["/sat/vocab"] || 0,
      lastQuestions: Math.max(recent["/sat/vocab-questions"] || 0, vqVals.reduce((m, a) => Math.max(m, a.ts || 0), 0)),
    },
    college,
    jj: { inProgress: Object.values((jj && jj.progress) || {}).filter((n) => n > 0).length, last: recent["/jiujitsu"] || 0 },
  };
}

// Remember when a study page was last opened, so the home page can offer "pick up where you left off".
const TRACKED = /^\/(ap\/[\w-]+|college\/[\w-]+|sat\/vocab|sat\/vocab-questions|jiujitsu)$/;
export async function noteVisit(pathname) {
  const path = pathname.replace(/\/+$/, "");
  if (!TRACKED.test(path)) return;
  const cur = (await read(RECENT_KEY)) || {};
  if (Date.now() - (cur[path] || 0) < 5 * 60 * 1000) return; // at most one write every five minutes per page
  cur[path] = Date.now();
  storage.set(RECENT_KEY, JSON.stringify(cur), false).catch(() => {});
}

export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

export function timeAgo(ts) {
  if (!ts) return "";
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 2) return "just now";
  if (mins < 60) return `${mins} minutes ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs === 1 ? "an hour ago" : `${hrs} hours ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "yesterday";
  if (days < 14) return `${days} days ago`;
  return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
