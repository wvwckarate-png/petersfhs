// usage: node tools/exam-authoring/build.mjs <poolfile.mjs>   (run from the project root)
import fs from 'fs';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
const SCR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCR, '../../src/hubs');
const mod = await import(`${SCR}/${process.argv[2]}`);
const cfg = mod.config, items = mod.default;
const L = 'ABCD';
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rand = rng(cfg.seed || 1);
const problems = [];

// ---- order items (sets stay together; avoid same-unit neighbours where possible) ----
let order = [...items];
for (let tries = 0; tries < 400; tries++) {
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  let bad = 0;
  for (let i = 1; i < order.length; i++) if (order[i].u === order[i - 1].u) bad++;
  if (cfg.sample ? true : bad <= Math.max(1, Math.floor(order.length / 14))) break;
}
// flatten
const flat = [];
let setCount = 0;
const sets = {};
for (const it of order) {
  if (it.kind === 'q') flat.push({ ...it, setId: undefined });
  else {
    const sid = `${cfg.prefix}${cfg.N}-set${++setCount}`;
    sets[sid] = { text: it.stim.text, figures: it.stim.figures };
    for (const q of it.qs) flat.push({ ...q, u: q.u ?? it.u, setId: sid });
  }
}
// ---- answer positions ----
// Ordered (S) questions may be shown in ascending or descending order (a -> 3-a) to balance A-D;
// conceptual (M) questions are then shuffled into the least-used positions.
const counts = [0, 0, 0, 0];
const letters = new Array(flat.length);
const sIdx = flat.map((q, i) => (q.fixed ? i : -1)).filter((i) => i >= 0);
for (let i = sIdx.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [sIdx[i], sIdx[j]] = [sIdx[j], sIdx[i]]; }
for (const i of sIdx) {
  const q = flat[i], alt = 3 - q.a;
  let pick = q.a;
  if (alt !== q.a && (counts[alt] < counts[q.a] || (counts[alt] === counts[q.a] && rand() < 0.5))) pick = alt;
  if (pick !== q.a) { q.c = [...q.c].reverse(); q.a = pick; }
  letters[i] = pick; counts[pick]++;
}
// If ordered answers still crowd the middle letters, re-insert the correct value at an end for a few of them.
function span() { return Math.max(...counts) - Math.min(...counts); }
const mCount = flat.filter((q) => !q.fixed).length;
for (let guard = 0; guard < 40; guard++) {
  // projected final counts if movable questions fill the least-used letters
  const proj = [...counts]; for (let k = 0; k < mCount; k++) proj[proj.indexOf(Math.min(...proj))]++;
  const hi = proj.indexOf(Math.max(...proj)), lo = proj.indexOf(Math.min(...proj));
  if (proj[hi] - proj[lo] <= 1) break;
  const cand = sIdx.filter((i) => letters[i] === hi);
  if (!cand.length) break;
  const i = cand[Math.floor(rand() * cand.length)], q = flat[i];
  const rest = q.c.filter((_, k) => k !== q.a);
  q.c = [...rest.slice(0, lo), q.c[q.a], ...rest.slice(lo)]; q.a = lo; q.loose = true;
  counts[hi]--; counts[lo]++; letters[i] = lo;
}
flat.forEach((q, i) => {
  if (q.fixed) return;
  const prev = [letters[i - 1], letters[i - 2]];
  let best = null, bestScore = 1e9;
  for (let k = 0; k < 4; k++) {
    let sc = counts[k] * 10 + rand();
    if (prev[0] === k && prev[1] === k) sc += 1000;
    if (sc < bestScore) { bestScore = sc; best = k; }
  }
  letters[i] = best; counts[best]++;
  const rest = q.c.slice(1);
  q.c = [...rest.slice(0, best), q.c[0], ...rest.slice(best)];
  q.a = best;
});
const out = flat.map((q, i) => ({ id: `${cfg.prefix}${cfg.N}-${i + 1}`, unit: q.u, ...(q.setId ? { setId: q.setId } : {}), stem: q.s, ...(q.figures && q.figures.length ? { figures: q.figures } : {}), choices: q.c, correct: q.a, explanation: q.e }));

// ---- checks ----
const dist = [0, 0, 0, 0]; let longest = 0;
const uc = {};
out.forEach((q) => {
  dist[q.correct]++; uc[q.unit] = (uc[q.unit] || 0) + 1;
  if (q.choices.length !== 4) problems.push(`${q.id}: ${q.choices.length} choices`);
  if (new Set(q.choices).size !== q.choices.length) problems.push(`${q.id}: duplicate choices`);
  if (!q.stem || !q.explanation) problems.push(`${q.id}: missing text`);
  if (q.correct == null || q.correct < 0 || q.correct > 3) problems.push(`${q.id}: bad answer index`);
  if (/\?\?|TODO|undefined|\bNaN\b/.test(JSON.stringify(q))) problems.push(`${q.id}: suspicious text`);
  if (/\b(choice|option|answer) \(?[A-D]\b/i.test(q.explanation)) problems.push(`${q.id}: explanation refers to a letter`);
  const len = q.choices.map((c) => c.length), mx = Math.max(...len);
  if (len[q.correct] === mx && len.filter((x) => x === mx).length === 1) longest++;
  const others = len.filter((_, i) => i !== q.correct), mo = Math.max(...others);
  if (len[q.correct] > 1.25 * mo && len[q.correct] > 40) problems.push(`${q.id}: correct answer is much longer than the other choices (${len[q.correct]} vs ${mo})`);
});
const figsToCheck = [];
out.forEach((q) => (q.figures || []).forEach((f) => figsToCheck.push([q.id, f])));
Object.entries(sets).forEach(([id, s]) => (s.figures || []).forEach((f) => figsToCheck.push([id, f])));
let svgCount = 0;
for (const [id, f] of figsToCheck) {
  if (f.svg) {
    svgCount++;
    if (!f.alt) problems.push(`${id}: figure without alt text`);
    try { fs.writeFileSync(`${SCR}/_t.svg`, f.svg); execFileSync('xmllint', ['--noout', `${SCR}/_t.svg`], { stdio: 'pipe' }); } catch (e) { problems.push(`${id}: invalid SVG: ${String(e.stderr || e.message).split('\n')[0]}`); }
  } else if (f.table) {
    if (!f.table.rows || !f.table.rows.length) problems.push(`${id}: empty table`);
  } else problems.push(`${id}: figure has neither svg nor table`);
}
for (const sid of Object.keys(sets)) {
  const idx = out.map((q, i) => (q.setId === sid ? i : -1)).filter((i) => i >= 0);
  if (idx[idx.length - 1] - idx[0] !== idx.length - 1) problems.push(`${sid}: questions not consecutive`);
  if (idx.length < 2) problems.push(`${sid}: only ${idx.length} question`);
}
// unit counts vs plan
if (cfg.units && !cfg.sample) {
  for (const [u, n] of Object.entries(cfg.units)) if ((uc[u] || 0) !== n) problems.push(`unit ${u}: have ${uc[u] || 0}, plan ${n}`);
  const tot = Object.values(cfg.units).reduce((a, b) => a + b, 0);
  if (out.length !== tot) problems.push(`total ${out.length} != ${tot}`);
}
// overlap with the practice bank and the other exams in this hub
const norm = (t) => t.toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[^a-z0-9. ]+/g, ' ').replace(/\s+/g, ' ').trim();
const tok = (t) => new Set(norm(t).split(' ').filter((w) => w.length > 2 || /\d/.test(w)));
const jac = (a, b) => { let i = 0; a.forEach((w) => b.has(w) && i++); return i / (a.size + b.size - i || 1); };
const bank = await import(`${ROOT}/${cfg.hub}/content.js`);
const refs = [];
for (const v of Object.values(bank.QUESTIONS)) for (const q of (Array.isArray(v) ? v : v.items || [])) refs.push({ id: 'bank-' + q.id, t: norm(q.stem + ' ' + (q.passage || '')), k: tok(q.stem) });
const dir = `${ROOT}/${cfg.hub}/exams`;
if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.js') || f === cfg.file) continue;
  const m = (await import(`${dir}/${f}`)).default;
  const qs = Array.isArray(m) ? m : m.questions;
  const mset = Array.isArray(m) ? {} : m.sets || {};
  qs.forEach((q) => { const full = (q.setId && mset[q.setId] ? [].concat(mset[q.setId].text || []).join(' ') + ' ' : '') + q.stem; refs.push({ id: f + ':' + q.id, t: norm(full), k: tok(full) }); });
}
let near = 0;
out.forEach((q) => {
  const full = (q.setId ? [].concat(sets[q.setId].text || []).join(' ') + ' ' : '') + q.stem;
  const k = tok(full), t = norm(full);
  for (const r of refs) { if (r.t === t) { problems.push(`${q.id}: identical stem to ${r.id}`); break; } if (k.size > 8 && jac(k, r.k) > 0.72) { near++; problems.push(`${q.id}: very similar to ${r.id}`); break; } }
});
console.log(`${cfg.hub} ${cfg.file}: ${out.length} q | sets ${Object.keys(sets).length} | figures ${figsToCheck.length} (svg ${svgCount}) | A-D ${dist.join('/')} | longest-correct ${longest} | units ${JSON.stringify(uc)}`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no problems');
fs.mkdirSync(dir, { recursive: true });
const body = `// ${cfg.title} — ${out.length} questions. ${cfg.note || ''}\nconst EXAM = ${JSON.stringify({ questions: out, sets }, null, 1)};\n\nexport default EXAM;\n`;
fs.writeFileSync(`${dir}/${cfg.file}`, body);
