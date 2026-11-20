# Peters Family Homeschool — site work checklist

Work through this top to bottom. Check a box (`- [x]`) when a step is finished and pushed live.
Ask Claude to "pick up the checklist" to continue from the first unchecked step.

**Ground rules**
- Extra material beyond the AP course is fine; nothing in the official course description should be missing.
- Add content only for real gaps, not just to add it.
- Never rename saved-progress keys or question ids (Matthew's data depends on them).
- Bump the version for every change, and push only after approval.

---

## A. Coverage against the official AP course descriptions

The College Board publishes a free Course and Exam Description for each AP subject. Each audit compares it, statement by statement, with the study guide, MCQs, FRQs and practice exams. Reports go to `~/Desktop/petersfhs-gap-reports/<subject>/`.

### A1. AP Chemistry
- [x] Audit against the Fall 2024 course description (172 of 241 statements fully covered)
- [x] Batch 1: real gaps and Unit 8 practice — 23 study-guide additions, 52 MCQs (v8.5.5)
- [x] Batch 2: smaller thin items — 31 study-guide additions, 51 MCQs (v8.5.6)
  - [x] One-sentence study-guide fixes (Coulomb's law, amu and molar mass, C–H bonds nonpolar, solids and liquids have similar molar volumes, complementary phase changes, heat versus work, and others listed in the report)
  - [x] Graph and diagram questions (described in words): Maxwell-Boltzmann curves, gas-law graphs, chromatograms, particle diagrams of solutions and hydrogen bonding, energy diagrams for physical changes
  - [x] Unit 9 table calculations: ΔS° from absolute entropies, ΔG° from ΔG°f
  - [x] Sigma versus pi bonds, cis/trans isomers, square pyramidal shape
- [x] FRQ decision: 4 new unit FRQs (Kp, weak-acid titration with indicators, catalyzed mechanism with Maxwell-Boltzmann, ΔS°/ΔG° from tables); practice exams left unchanged so saved exam scores stay valid (v8.6.1)

### A2. AP Biology
- [x] Download the course description and run the audit (Fall 2025 edition; reports in ~/Desktop/petersfhs-gap-reports/biology/)
- [x] Review the gap report and choose what to add (batch 1: real gaps)
- [x] Build and check batch 1 — 18 study-guide additions incl. new sections 6.6 Biotechnology and 8.6 Animal Behavior, 44 MCQs (v8.5.7)
- [x] Batch 2: thin items from the report — 34 study-guide additions, 44 MCQs (v8.5.8); 5 items skipped as already covered

### A3. AP Physics 2
- [x] Download the course description and run the audit (Fall 2024 edition; reports in ~/Desktop/petersfhs-gap-reports/physics2/)
- [x] Review the gap report and choose what to add (all missing items and the substantive thin ones)
- [x] Build and check the additions — 57 study-guide additions, 155 MCQs, 41 figures (v8.6.0)
- [x] FRQ decision: 5 new unit FRQs (P–T extrapolation, equipotentials and plates, RC graphs and meters, single/double slit and grating, blackbody and Compton); practice exams unchanged (v8.6.1)

### A4. Remaining AP subjects (optional; decide after A1–A3)
- [ ] AP Physics 1
- [ ] AP Environmental Science
- [ ] AP US Government
- [ ] AP US History
- [ ] AP English Language
- [ ] AP English Literature

---

## B. Question quality

- [x] B1. 54 of the 55 held-back AP Language revision questions rewritten, checked and shown (262 revision questions now shown); u5-2w-6 stays hidden because it duplicated a shown question (v8.6.1)
- [x] B2. 53 course/exam questions rewritten as content questions: APUSH 40, Government 9, Biology 1 (the other Biology candidates were real content), Chemistry 2. Each new version has the old id plus "r", so old saved answers no longer count, and it shows as New (v8.6.1)
- [x] B3. Government 4-51, Government 3-65 and APUSH 9-61 fixed (same ids, same answer letters) (v8.6.1)
- [x] B4. Spot-checked a random 225 questions (25 per AP subject): 0 wrong keys, 0 false statements; 16 explanations improved. Also added the "Correct: (X) answer" opener to the 2,521 explanations that lacked it (v8.6.1)
- [x] B5 (sciences). Chemistry, Biology, Physics 1 and Physics 2: all 846 explanations without a reason for each wrong choice were rewritten in full and independently checked; every one of the 2,498 science MCQs now explains the right answer and each wrong choice. 12 flawed Chemistry questions fixed along the way (same answer letters) (v8.6.2)
- [ ] B5 (other subjects, later): APES, AP Language and AP Literature explanations still lack per-choice reasons

## C. Decisions for you

- [ ] C1. Saved answers on the 5 questions whose answer keys were corrected (APUSH 8-2; AP Lit Unit 9 4-11, 1-12 and 5-10; AP Lang Unit 9 1-3): leave them, or clear just those answers so they count correctly
- [ ] C2. Test the draggable home-page cards with a real finger on a phone or tablet

## D. Ideas

- [ ] D1. A parent view of each child's progress
- [ ] D2. One shared template for the nine near-identical AP subject pages, so layout fixes happen once
- [ ] D3. Open each subject on its Dashboard instead of the last tab used

---

## Done

| Version | What |
|---|---|
| v8.6.2 | Science explanations complete: 846 Chemistry, Biology, Physics 1 and Physics 2 explanations rewritten with a reason for every wrong choice; 12 flawed Chemistry questions fixed |
| v8.6.1 | 9 new FRQs (Chemistry 4, Physics 2 5) with New badges; 54 AP Language revision questions rewritten and shown; 53 course/exam questions rewritten; 3 flawed questions fixed; 225-question spot-check; consistent "Correct: (X)" openers |
| v8.6.0 | Physics 2 gaps: 57 study-guide additions, 155 MCQs (Physics 2 now 615), 41 figures; fixed the 10.2 grounding sentence |
| v8.5.9 | Visuals pass on the new Chemistry and Biology material: 42 figures, tables and worked examples (Chemistry 13 figures + 4 worked examples; Biology 24 figures + 1 table), placed inside the "New" boxes |
| v8.5.8 | Biology gaps, batch 2: 34 study-guide additions, 44 MCQs (Biology now 622) |
| v8.5.7 | Biology gaps, batch 1 (18 study-guide additions, 44 MCQs); "New material" markers: Dashboard card, MCQ "New" filter, New tags in the study guide (including sections finished before the additions) |
| v8.5.6 | Chemistry gaps, batch 2: 31 study-guide additions, 51 MCQs (Chemistry now 741) |
| v8.5.5 | Chemistry gaps, batch 1: 23 study-guide additions, 52 MCQs |
| v8.5.4 | Answer-key reviews of Chemistry 1, 2, 4, 6, 9, all of APES, Biology 1, 3, 7 (no wrong keys; 8 text fixes); 208 AP Language revision questions shown |
| v8.5.3 | Sign-out from an expired or deleted profile |
| v8.5.2 | Draggable home-page cards |
| v8.5.1 | MCQ Practice remembers your place; clickable question bar |
| v8.5.0 | Home page redesign and per-student customizable layout |
