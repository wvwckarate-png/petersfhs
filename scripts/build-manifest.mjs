// Builds src/hubs/manifest.json: a small summary of every AP subject (units, question counts, study-guide sections)
// so the home page and hub pages can show progress without loading each subject's full content (about 1 MB each).
// Runs automatically before `npm run dev` and `npm run build`.
import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// dir = folder under src/hubs; route = /ap/<route>; hubKey = prefix of the saved-progress keys (never change these).
const SUBJECTS = [
  { id: "physics1", dir: "physics1", route: "physics1", hubKey: "physics1-hub", examKey: "physics1", name: "AP Physics 1", group: "science" },
  { id: "physics2", dir: "physics2", route: "physics2", hubKey: "physics2-hub", examKey: "physics2", name: "AP Physics 2", group: "science" },
  { id: "biology", dir: "biology", route: "biology", hubKey: "biology-hub", examKey: "biology", name: "AP Biology", group: "science" },
  { id: "chemistry", dir: "chemistry", route: "chemistry", hubKey: "chemistry-hub", examKey: "chemistry", name: "AP Chemistry", group: "science" },
  { id: "environmental", dir: "apes", route: "environmental", hubKey: "envsci-hub", name: "AP Environmental Science", group: "science" },
  { id: "ushistory", dir: "apush", route: "ushistory", hubKey: "ushistory-hub", name: "AP US History", group: "social" },
  { id: "government", dir: "government", route: "government", hubKey: "government-hub", name: "AP US Government", group: "social" },
  { id: "englang", dir: "englang", route: "englang", hubKey: "englang-hub", name: "AP English Language", group: "english" },
  { id: "englit", dir: "aplit", route: "englit", hubKey: "englit-hub", name: "AP English Literature", group: "english" },
];

const TOC_RE = /class="toc"[\s\S]*?<\/ol>/;
const LI_RE = /<li><a href="#([\w-]+)">/g;
const sectionCount = (html) => {
  const m = typeof html === "string" ? html.match(TOC_RE) : null;
  if (!m) return 0;
  return [...m[0].matchAll(LI_RE)].filter((x) => x[1] !== "practice").length;
};

const out = {};
for (const s of SUBJECTS) {
  const mod = await import(pathToFileURL(path.join(root, "src/hubs", s.dir, "content.js")).href);
  const units = mod.UNITS.map((u) => {
    const q = mod.QUESTIONS[u.id];
    const mcq = Array.isArray(q) ? q.length : (q && Array.isArray(q.items) ? q.items.length : 0);
    return { id: u.id, name: u.name, mcq, sections: sectionCount(mod.STUDY_CONTENT[u.id]) };
  });
  out[s.id] = {
    name: s.name, route: `/ap/${s.route}`, hubKey: s.hubKey, examKey: s.examKey || null, group: s.group,
    units, mcqTotal: units.reduce((n, u) => n + u.mcq, 0), sectionTotal: units.reduce((n, u) => n + u.sections, 0),
  };
}

// SAT vocabulary totals (flash cards and question bank)
const vocab = await import(pathToFileURL(path.join(root, "src/hubs/sat/vocab/content.js")).href);
const count = (o) => Object.values(o).reduce((n, a) => n + a.length, 0);
const sat = { words: count(vocab.WORDS), questions: count(vocab.QUESTIONS) };

const file = path.join(root, "src/hubs/manifest.json");
writeFileSync(file, JSON.stringify({ ap: out, sat }, null, 1) + "\n");
console.log("manifest:", Object.entries(out).map(([k, v]) => `${k} ${v.mcqTotal}q/${v.sectionTotal}s`).join(", "));
