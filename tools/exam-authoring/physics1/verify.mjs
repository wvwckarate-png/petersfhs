// usage: node verify.mjs N   (loads checks from verifyN.mjs: array of [stemSubstring, computedNumber, tolerance?])
import fs from 'fs';
const N = +process.argv[2];
const SCR = '/private/tmp/claude-501/-Users-gregorypeters-Desktop-petersfhs/d8243f3e-31ad-4f19-95ff-e018e8356fda/scratchpad';
const exam = (await import(`/Users/gregorypeters/Desktop/petersfhs/src/hubs/physics1/exams/exam${N}.js`)).default;
const checks = (await import(`${SCR}/verify${N}.mjs`)).default;
function num(t) {
  t = t.replace(/<sup>(-?\d+)<\/sup>/g, '^$1').replace(/,/g, '').replace(/−/g, '-');
  let m;
  if ((m = t.match(/^\s*(-?[\d.]+)\s*\/\s*([\d.]+)/))) return +m[1] / +m[2];
  if ((m = t.match(/^\s*(-?[\d.]+)\s*×\s*10\^(-?\d+)/))) return +m[1] * Math.pow(10, +m[2]);
  if ((m = t.match(/^\s*\+?(-?[\d.]+)/))) return +m[1];
  return NaN;
}
let bad = 0;
for (const [sub, expected, tol = 0.02] of checks) {
  const hits = exam.filter((q) => q.stem.includes(sub));
  if (hits.length !== 1) { console.log(`?? "${sub}" matched ${hits.length}`); bad++; continue; }
  const q = hits[0];
  const got = num(q.choices[q.correct]);
  const ok = Math.abs(got - expected) <= Math.abs(expected) * tol + 1e-9;
  if (!ok) { bad++; console.log(`MISMATCH ${q.id}: keyed ${q.choices[q.correct]} (=${got}) but computed ${expected}`); }
  // also make sure the computed value is not the key of a different choice (ambiguity) and the key is unique numerically
  const same = q.choices.filter((c) => Math.abs(num(c) - got) < 1e-9).length;
  if (same > 1) { bad++; console.log(`AMBIGUOUS ${q.id}: ${same} choices equal the key`); }
}
console.log(`verified ${checks.length} numeric questions, problems: ${bad}`);
