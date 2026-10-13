// AP Biology FRQ exams. Format follows the College Board exam: 6 free-response questions in 90 minutes
// (2 long questions worth 9 points each and 4 short questions worth 4 points each).
import SAMPLE from "./frqExams/sample";
import EXAM_1 from "./frqExams/exam1";
import EXAM_2 from "./frqExams/exam2";
import EXAM_3 from "./frqExams/exam3";
import EXAM_4 from "./frqExams/exam4";

const FRQ_FORMAT = {
  minutes: 90,
  points: 34,
  intro:
    "Full-length free-response practice built like the real Section II: 6 questions (2 long, 9 points each, and 4 short, 4 points each) with 34 points in all. You write your answers; the app doesn't grade them. Afterward you get the scoring points and a model response for every part so you can score yourself and reflect.",
};

// Sample first, then the four full exams.
const FRQ_EXAMS = [SAMPLE, EXAM_1, EXAM_2, EXAM_3, EXAM_4];

export { FRQ_FORMAT, FRQ_EXAMS };
