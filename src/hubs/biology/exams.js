// AP Biology — full-length MCQ exams.
// Format (College Board): 60 multiple-choice questions, 90 minutes.
// Each exam mirrors the exam's unit weighting.

import EXAM_1 from "./exams/exam1";
import EXAM_2 from "./exams/exam2";
import EXAM_3 from "./exams/exam3";
import EXAM_4 from "./exams/exam4";
import SAMPLE from "./exams/sample";
import REFERENCE from "./reference";

const EXAM_FORMAT = {
  questions: 60,
  minutes: 90,
  // Approximate cutoffs on the multiple-choice section alone (% correct). Adjustable.
  bands: [
    { ap: 5, min: 70 },
    { ap: 4, min: 56 },
    { ap: 3, min: 42 },
    { ap: 2, min: 30 },
  ],
};

const FULL_DESCRIPTION =
  "A full-length, 60-question exam with units weighted like the real AP Biology exam, including questions built on graphs, data tables, pedigrees, gels, and diagrams. Every question is new — none repeat from MCQ Practice.";

const FULL_EXAMS = [EXAM_1, EXAM_2, EXAM_3, EXAM_4].map((exam, i) => ({
  id: `exam-${i + 1}`,
  title: `Exam ${i + 1}`,
  description: FULL_DESCRIPTION,
  questions: exam.questions,
  sets: exam.sets,
}));

const SAMPLE_EXAM = {
  id: "sample",
  title: "Sample Exam",
  description:
    "A short 10-question sample covering all eight units, with a Punnett-square set, so you can see how the exam works. Safe to try — reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 15,
  questions: SAMPLE.questions,
  sets: SAMPLE.sets,
};

const EXAMS = [SAMPLE_EXAM, ...FULL_EXAMS];

export { EXAM_FORMAT, EXAMS, REFERENCE };
