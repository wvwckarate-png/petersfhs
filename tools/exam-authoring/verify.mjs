// usage: node tools/exam-authoring/verify.mjs <hub> <examfile.js> <verifyfile.mjs>
const [hub, file, vf] = process.argv.slice(2);
import { fileURLToPath } from 'url';
import path from 'path';
const SCR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCR, '../../src/hubs');
const exam = (await import(`${ROOT}/${hub}/exams/${file}`)).default;
const qs = Array.isArray(exam) ? exam : exam.questions;
const checks = (await import(`${SCR}/${vf}`)).default;
const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
function num(t) {
  t = t.replace(/<sup>(-?\d+)<\/sup>/g, '^$1').replace(/<sub>[^<]*<\/sub>/g, '').replace(/,/g, '').replace(/−/g, '-');
  t = t.replace(/10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, neg, d) => '10^' + (neg ? '-' : '') + [...d].map((c) => SUP[c]).join(''));
  let m;
  if ((m = t.match(/^\s*(-?[\d.]+)\s*\/\s*([\d.]+)/))) return +m[1] / +m[2];
  if ((m = t.match(/^\s*(-?[\d.]+)\s*[×x]\s*10\^(-?\d+)/))) return +m[1] * Math.pow(10, +m[2]);
  if ((m = t.match(/^\s*\+?(-?[\d.]+)/))) return +m[1];
  return NaN;
}
let bad = 0;
for (const [sub, expected, tol = 0.02] of checks) {
  const hits = qs.filter((q) => q.stem.includes(sub));
  if (hits.length !== 1) { console.log(`?? "${sub}" matched ${hits.length}`); bad++; continue; }
  const q = hits[0], got = num(q.choices[q.correct]);
  if (!(Math.abs(got - expected) <= Math.abs(expected) * tol + 1e-300)) { bad++; console.log(`MISMATCH ${q.id}: keyed "${q.choices[q.correct]}" (=${got}) but computed ${expected}`); }
  const same = q.choices.filter((c) => Math.abs(num(c) - got) <= Math.abs(got) * 1e-9).length;
  if (same > 1) { bad++; console.log(`AMBIGUOUS ${q.id}: ${same} choices equal the key`); }
}
console.log(`verified ${checks.length} numeric questions, problems: ${bad}`);
