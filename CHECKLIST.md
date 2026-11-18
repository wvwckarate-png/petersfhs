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
- [ ] Decide whether the new topics need FRQ parts or practice-exam questions (Kp and titrations are the likeliest)

### A2. AP Biology
- [x] Download the course description and run the audit (Fall 2025 edition; reports in ~/Desktop/petersfhs-gap-reports/biology/)
- [ ] Review the gap report and choose what to add
- [ ] Build and check the additions

### A3. AP Physics 2
- [ ] Download the course description and run the audit
- [ ] Review the gap report and choose what to add
- [ ] Build and check the additions

### A4. Remaining AP subjects (optional; decide after A1–A3)
- [ ] AP Physics 1
- [ ] AP Environmental Science
- [ ] AP US Government
- [ ] AP US History
- [ ] AP English Language
- [ ] AP English Literature

---

## B. Question quality

- [ ] B1. Rewrite the 55 held-back AP English Language revision questions (they refer to material not on screen, or their choices do not fit), then show them
- [ ] B2. Rewrite questions that test the course instead of the subject: about 70 in APUSH, Government 5-54, about 9 in Biology, 2 in Chemistry
- [ ] B3. Fix flawed questions: Government 4-51 (region versus party), Government 3-65 (Tinker versus Barnette), APUSH 9-61 (loose comparison)
- [ ] B4. Spot-check the 743 explanations from the final cleanup pass (so far only automated checks)

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
| v8.5.6 | Chemistry gaps, batch 2: 31 study-guide additions, 51 MCQs (Chemistry now 741) |
| v8.5.5 | Chemistry gaps, batch 1: 23 study-guide additions, 52 MCQs |
| v8.5.4 | Answer-key reviews of Chemistry 1, 2, 4, 6, 9, all of APES, Biology 1, 3, 7 (no wrong keys; 8 text fixes); 208 AP Language revision questions shown |
| v8.5.3 | Sign-out from an expired or deleted profile |
| v8.5.2 | Draggable home-page cards |
| v8.5.1 | MCQ Practice remembers your place; clickable question bar |
| v8.5.0 | Home page redesign and per-student customizable layout |
