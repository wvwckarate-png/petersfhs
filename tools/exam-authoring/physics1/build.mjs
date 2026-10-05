import fs from 'fs';
const N = +process.argv[2];
const SCR = '/private/tmp/claude-501/-Users-gregorypeters-Desktop-petersfhs/d8243f3e-31ad-4f19-95ff-e018e8356fda/scratchpad';
const plan = JSON.parse(fs.readFileSync(SCR + '/plan.json', 'utf8'))[N];
const pool = (await import(`${SCR}/pool${N}.mjs`)).default;
const L = 'ABCD';

// slots by unit
const slotsByUnit = {};
plan.forEach(([u, letter], i) => (slotsByUnit[u] ||= []).push({ pos: i + 1, letter }));
const poolByUnit = {};
pool.forEach((q) => (poolByUnit[q.u] ||= []).push(q));

const problems = [];
const placed = new Array(plan.length);
for (const u of Object.keys(slotsByUnit)) {
  const slots = slotsByUnit[u];
  const qs = poolByUnit[u] || [];
  if (qs.length !== slots.length) problems.push(`unit ${u}: pool has ${qs.length}, plan wants ${slots.length}`);
  const left = [...qs];
  const open = [];
  // 1) exact matches for ordered (numeric) questions
  for (const slot of slots) {
    const i = left.findIndex((q) => q.sorted && L[q.a] === slot.letter);
    if (i >= 0) { placed[slot.pos - 1] = left.splice(i, 1)[0]; placed[slot.pos - 1]._slot = slot; } else open.push(slot);
  }
  // 2) fill open slots with conceptual questions (shuffled to target)
  const still = [];
  for (const slot of open) {
    const i = left.findIndex((q) => !q.sorted);
    if (i >= 0) {
      const q = left.splice(i, 1)[0];
      const target = L.indexOf(slot.letter);
      const rest = q.c.slice(1);
      const choices = [...rest.slice(0, target), q.c[0], ...rest.slice(target)];
      placed[slot.pos - 1] = { ...q, c: choices, a: target, _slot: slot };
    } else still.push(slot);
  }
  // 3) leftovers (ordered questions that don't match their slot)
  for (const slot of still) { const q = left.shift(); if (q) placed[slot.pos - 1] = { ...q, _slot: slot }; }
}

const out = placed.map((q, i) => ({ id: `e${N}-${i + 1}`, unit: q.u, stem: q.s, choices: q.c, correct: q.a, explanation: q.e }));

// ---- checks ----
const dist = [0, 0, 0, 0]; let mismatch = 0, longest = 0;
out.forEach((q, i) => {
  dist[q.correct]++;
  if (L[q.correct] !== plan[i][1]) mismatch++;
  if (q.choices.length !== 4) problems.push(`${q.id} has ${q.choices.length} choices`);
  if (new Set(q.choices).size !== q.choices.length) problems.push(`${q.id} duplicate choices`);
  if (!q.stem || !q.explanation) problems.push(`${q.id} missing text`);
  if (/\?\?|TODO|undefined/.test(JSON.stringify(q))) problems.push(`${q.id} suspicious text`);
  const len = q.choices.map((c) => c.length);
  if (len[q.correct] === Math.max(...len) && len.filter((x) => x === Math.max(...len)).length === 1) longest++;
  const ref = /\bchoice [A-D]\b/i.test(q.explanation);
  if (ref) problems.push(`${q.id} explanation refers to a letter`);
});
console.log(`Exam ${N}: ${out.length} questions | answers A-D: ${dist.join('/')} | off-schedule: ${mismatch} | correct is strictly longest: ${longest}`);
const uc = {}; out.forEach((q) => (uc[q.unit] = (uc[q.unit] || 0) + 1));
console.log('units:', JSON.stringify(uc));
// overlap with existing bank and earlier exams
const bank = await import('/Users/gregorypeters/Desktop/petersfhs/src/hubs/physics1/content.js');
const seen = new Set(Object.values(bank.QUESTIONS).flat().map((q) => q.stem.toLowerCase().replace(/\s+/g, ' ')));
for (let e = 1; e < N; e++) {
  const f = `/Users/gregorypeters/Desktop/petersfhs/src/hubs/physics1/exams/exam${e}.js`;
  if (fs.existsSync(f)) (await import(f)).default.forEach((q) => seen.add(q.stem.toLowerCase().replace(/\s+/g, ' ')));
}
out.forEach((q) => { if (seen.has(q.stem.toLowerCase().replace(/\s+/g, ' '))) problems.push(`${q.id} duplicates an existing stem`); });
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no problems');

fs.mkdirSync('/Users/gregorypeters/Desktop/petersfhs/src/hubs/physics1/exams', { recursive: true });
const body = `// AP Physics 1 — MCQ Exam ${N} (${out.length} questions). Uses g = 10 m/s².\nconst EXAM_${N}_QUESTIONS = ${JSON.stringify(out, null, 2)};\n\nexport default EXAM_${N}_QUESTIONS;\n`;
fs.writeFileSync(`/Users/gregorypeters/Desktop/petersfhs/src/hubs/physics1/exams/exam${N}.js`, body);
