// AP Physics 2 — full-length MCQ exams.
// Format follows the May 2027 exam: 42 multiple-choice questions, 85 minutes (College Board).
// Each exam mirrors the exam's unit weighting. Problems use g = 10 m/s².

import EXAM_1 from "./exams/exam1";
import EXAM_2 from "./exams/exam2";
import EXAM_3 from "./exams/exam3";
import EXAM_4 from "./exams/exam4";
import SAMPLE from "./exams/sample";
import REFERENCE from "./reference";

const EXAM_FORMAT = {
  questions: 42,
  minutes: 85,
  // Approximate cutoffs on the multiple-choice section alone (% correct). Adjustable.
  bands: [
    { ap: 5, min: 65 },
    { ap: 4, min: 50 },
    { ap: 3, min: 38 },
    { ap: 2, min: 27 },
  ],
};

const FULL_DESCRIPTION =
  "A full-length, 42-question exam with units weighted like the real AP Physics 2 exam, including questions built on graphs, circuits, and diagrams. Every question is new — none repeat from MCQ Practice.";

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
    "A short 9-question sample covering all the units, with a circuit set and a magnetic-force diagram, so you can see how the exam works. Safe to try — reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 18,
  questions: SAMPLE.questions,
  sets: SAMPLE.sets,
};

const EXAMS = [SAMPLE_EXAM, ...FULL_EXAMS];

export { EXAM_FORMAT, EXAMS, REFERENCE };
