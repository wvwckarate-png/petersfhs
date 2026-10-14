// Validates an authored FRQ exam and writes src/hubs/<hub>/frqExams/<name>.js
// usage (from project root): node tools/frq-authoring/buildfrq.mjs <hub> <name>     e.g.  physics2 exam1
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const [hub, name] = process.argv.slice(2);
const SRC = path.resolve(HERE, `../../src/hubs/${hub}/frqExams`);
const mod = await import(path.join(HERE, `${hub}_${name}.mjs`));
const ex = mod.default;
const problems = [], notes = [];
const FORMATS = { physics2: { points: 40 }, chemistry: { points: 46 }, biology: { points: 34 } };


// Break a long model response into short paragraphs (2-3 sentences each) so it is easy to scan.
const plain = (t) => t.replace(/<[^>]+>/g, "");
const wc = (t) => plain(t).split(/\s+/).filter(Boolean).length;
const balanced = (t) => ["b", "i", "sub", "sup", "em", "strong"].every((tag) => (t.match(new RegExp(`<${tag}>`, "g")) || []).length === (t.match(new RegExp(`</${tag}>`, "g")) || []).length);
function paragraphs(model) {
  return [model].flat().flatMap((t) => {
    if (wc(t) < 55) return [t];
    const prot = t.replace(/(e\.g\.|i\.e\.|vs\.|approx\.|et al\.)/g, (m) => m.replace(/\./g, "§"));
    const raw = prot.split(/(?<=[.!?]\)?)\s+(?=[A-ZΔ(<])/).map((x) => x.replace(/§/g, "."));
    // re-join pieces that would leave an unbalanced tag
    const sents = [];
    for (const piece of raw) {
      if (sents.length && !balanced(sents[sents.length - 1])) sents[sents.length - 1] += " " + piece; else sents.push(piece);
    }
    const out = [];
    let cur = "";
    for (const sent of sents) {
      cur = cur ? cur + " " + sent : sent;
      if (wc(cur) >= 32) { out.push(cur); cur = ""; }
    }
    if (cur) { if (out.length && wc(cur) < 14) out[out.length - 1] += " " + cur; else out.push(cur); }
    return out;
  });
}

const ok = (c, m) => { if (!c) problems.push(m); };
const textOf = (v) => (Array.isArray(v) ? v.join(" ") : v || "");
function checkText(where, t) {
  const s = textOf(t);
  if (/undefined|NaN|TODO|\?\?\?|\[object/.test(s)) problems.push(`${where}: suspicious text`);
  if (/<(?!\/?(?:sub|sup|strong|b|em|i)>)[a-zA-Z\/!]/.test(s)) problems.push(`${where}: unsupported HTML tag`);
}
function checkFigs(where, figs) {
  (figs || []).forEach((f, i) => {
    if (f.table) { ok(f.table.rows && f.table.rows.length, `${where} fig${i}: empty table`); return; }
    ok(f.alt, `${where} fig${i}: missing alt text`);
    try { fs.writeFileSync(path.join(HERE, "_t.svg"), f.svg); execFileSync("xmllint", ["--noout", path.join(HERE, "_t.svg")], { stdio: "pipe" }); }
    catch (e) { problems.push(`${where} fig${i}: invalid SVG ${String(e.stderr || e.message).split("\n")[0]}`); }
    if (/NaN|undefined|Infinity/.test(f.svg)) problems.push(`${where} fig${i}: bad number in SVG`);
  });
}

ok(ex.id && ex.title && ex.description && ex.minutes, "exam needs id/title/description/minutes");
const ids = new Set();
let total = 0, words = 0, figs = 0, minutes = 0;
ex.questions.forEach((q) => {
  const w = `Q${q.id}`;
  ok(!ids.has(q.id), `${w}: duplicate id`); ids.add(q.id);
  ok(q.kind, `${w}: missing kind`);
  ok(q.minutes, `${w}: missing minutes`); minutes += q.minutes || 0;
  checkText(w + " intro", q.intro); checkFigs(w, q.figures); figs += (q.figures || []).length;
  words += textOf(q.intro).split(/\s+/).length;
  const pids = new Set();
  let qpts = 0;
  q.parts.forEach((p) => {
    const pw = `${w}.${p.id}`;
    ok(!pids.has(p.id), `${pw}: duplicate part id`); pids.add(p.id);
    ok(p.prompt && p.prompt.length > 8, `${pw}: prompt too short`);
    ok(Array.isArray(p.rubric) && p.rubric.length, `${pw}: no rubric`);
    const pts = (p.rubric || []).reduce((s, r) => s + (typeof r === "string" ? 1 : r.pts ?? 1), 0);
    qpts += pts;
    (p.rubric || []).forEach((r, i) => { const t = typeof r === "string" ? r : r.text; ok(t && t.length > 6, `${pw}: rubric ${i} too short`); checkText(`${pw} rubric${i}`, t); });
    const mw = textOf(p.model).split(/\s+/).filter(Boolean).length;
    ok(mw >= 8, `${pw}: model response too short (${mw} words)`);
    words += mw + textOf(p.prompt).split(/\s+/).length;
    checkText(pw + " prompt", p.prompt); if (p.tip !== undefined) { ok(typeof p.tip === "string" && p.tip.length > 20, `${pw}: tip too short`); checkText(pw + " tip", p.tip); } checkText(pw + " lead", p.lead); checkText(pw + " model", p.model); checkText(pw + " note", p.note);
    checkFigs(pw, p.figures); checkFigs(pw + " model", p.modelFigures); figs += (p.figures || []).length + (p.modelFigures || []).length;
  });
  if (q.points != null) ok(q.points === qpts, `${w}: declared ${q.points} points but rubric sums to ${qpts}`);
  q.points = qpts;
  total += qpts;
});
if (!ex.sample) {
  const f = FORMATS[hub];
  if (f) ok(total === f.points, `exam total ${total} points, expected ${f.points}`);
  ok(minutes === ex.minutes, `question minutes sum to ${minutes}, exam says ${ex.minutes}`);
}
console.log(`${hub} ${name}: ${ex.questions.length} questions | ${total} points | ${minutes} min | ${figs} figures | ~${words} words`);
ex.questions.forEach((q) => console.log(`  Q${q.id} ${q.kind}: ${q.points} pts, ${q.parts.length} parts`));
if (problems.length) { console.log("PROBLEMS:\n" + problems.join("\n")); process.exitCode = 1; }
else {
  fs.mkdirSync(SRC, { recursive: true });
  if (ex.topics) { ok(ex.topics.length === ex.questions.length, "topics length"); ex.questions.forEach((q, i) => { q.topic = ex.topics[i]; }); }
  ex.questions.forEach((q) => q.parts.forEach((p) => { p.model = paragraphs(p.model); }));
  delete ex.topics;
  // Use a true minus sign for negative numbers in text (computed values come out with a hyphen); leave SVG markup alone.
  const fixMinus = (t) => t.replace(/(^|[\s(=,;])-(?=\d)/g, "$1−");
  const clean = JSON.parse(JSON.stringify(ex, (k, v) => (k === "points" && typeof v === "number" ? undefined : (typeof v === "string" && k !== "svg" ? fixMinus(v) : v))));
  const body = `// ${hub} FRQ exam: ${ex.title} (generated by tools/frq-authoring/buildfrq.mjs — edit ${hub}_${name}.mjs, not this file)\nconst EXAM = ${JSON.stringify(clean, null, 1)};\n\nexport default EXAM;\n`;
  fs.writeFileSync(path.join(SRC, `${name}.js`), body);
  console.log("written", path.join(SRC, `${name}.js`));
  execFileSync("node", [path.join(HERE, "buildmeta.mjs"), hub], { stdio: "inherit" });
}
