# Exam authoring tools

Source for the generated MCQ exam files in `src/hubs/<hub>/exams/`.
The exam files contain figures as SVG strings, so **edit the pool files here and rebuild** instead of editing
the generated files by hand.

- `p2_*.mjs`, `c_*.mjs`, `b_*.mjs` — question pools (Physics 2, Chemistry, Biology). `S(...)` = ordered (usually numeric) choices,
  `M(...)` = conceptual question (correct choice first; the builder shuffles it), `G(...)` = question set with a shared stimulus.
- `figlib.mjs`, `p2figs.mjs`, `chemfigs.mjs`, `biofigs.mjs` — SVG figure generators (charts, circuits, ray diagrams, PES/mass spectra, pedigrees, gels, …).
- `build.mjs` — builds an exam file from a pool, balances answer positions, and runs checks (unit counts, figure validity, overlap with the practice bank, choice-length bias).
- `v_*.mjs` + `verify.mjs` — independent recomputation of every numeric answer.
- `fixlen.py` — helper to rewrite a question's answer choices; `sheet.mjs` — renders a contact sheet of an exam's figures.
- `physics1/` — the older toolchain used for the Physics 1 question text.
- `p1figs.mjs` (scene/graph generators), `p1map1–4.mjs` + `p1map_sample.mjs` (which question gets which figure), `addfigs.mjs` (writes the figures into
  `src/hubs/physics1/exams/exam1–4.js` and `sample-figures.js`, trims each viewBox with headless Chrome, and validates SVG + alt text), `p1sheet.mjs` (contact sheet).
  Physics 1 figures are an overlay on the generated question files: after rebuilding a Physics 1 exam from its pool, re-run `addfigs.mjs`.

```
node tools/exam-authoring/build.mjs p2_e1.mjs
node tools/exam-authoring/verify.mjs physics2 exam1.js v_p2_e1.mjs
node tools/exam-authoring/addfigs.mjs            # Physics 1 figures (all exams + sample)
node tools/exam-authoring/p1sheet.mjs 1 /tmp/f1_ 8   # preview Physics 1 Exam 1 figures
```
