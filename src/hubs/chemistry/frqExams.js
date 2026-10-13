// AP Chemistry FRQ exams. Format follows the College Board exam: 7 free-response questions in 105 minutes
// (3 long questions worth 10 points each and 4 short questions worth 4 points each).
import SAMPLE from "./frqExams/sample";
import EXAM_1 from "./frqExams/exam1";
import EXAM_2 from "./frqExams/exam2";
import EXAM_3 from "./frqExams/exam3";
import EXAM_4 from "./frqExams/exam4";

const FRQ_FORMAT = {
  minutes: 105,
  points: 46,
  intro:
    "Full-length free-response practice built like the real Section II: 7 questions (3 long, 10 points each, and 4 short, 4 points each) with 46 points in all. You write your answers; the app doesn't grade them. Afterward you get the scoring points and a model response for every part so you can score yourself and reflect.",
};

// Sample first, then the four full exams.
const FRQ_EXAMS = [SAMPLE, EXAM_1, EXAM_2, EXAM_3, EXAM_4];

export { FRQ_FORMAT, FRQ_EXAMS };
