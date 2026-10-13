# FRQ exam authoring

Source for the free-response (FRQ) exams in `src/hubs/{physics2,chemistry,biology}/frqExams/`. Those files are generated —
edit the `<hub>_<exam>.mjs` files here and rebuild.

- `frqlib.mjs` — `Q(...)` (question) and `P(...)` (part) helpers; `exam({...})`.  A part has a prompt, a scoring rubric (one string per
  point, or `{text, pts}`), a model response, and optional figures (`figures` shown with the question part, `modelFigures` shown in the answer key).
  Numbers used in the model answers are computed in each file (with a `throw` guard) so the text and the data stay consistent.
- `p2frqfigs.mjs`, `chemfrqfigs.mjs`, `biofrqfigs.mjs` — figure generators (re-use the generators in `../exam-authoring/`).
- `buildfrq.mjs` — validates (points add up to the real exam totals, every part has a rubric and model response, SVG validity + alt text,
  allowed inline tags) and writes the generated file:  `node tools/frq-authoring/buildfrq.mjs physics2 exam1`
- `figsheet.mjs` — contact sheet of every figure in an exam to check them by eye:  `node tools/frq-authoring/figsheet.mjs physics2 exam1 /tmp/out.png`

Real-exam formats used (College Board): Physics 2 — 4 questions (40 points, 95 min: mathematical routines 10, translation between
representations 12, experimental design and analysis 10, qualitative/quantitative translation 8); Chemistry — 7 questions (46 points, 105 min:
3 long × 10, 4 short × 4); Biology — 6 questions (34 points, 90 min: 2 long × 9, 4 short × 4).
Each hub has a sample exam (shorter) and four full exams. After rebuilding an exam, the hub's `frqExams.js` already imports it.
