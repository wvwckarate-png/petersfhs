import FrqExamEngine from "../shared/FrqExamEngine";
import { FRQ_FORMAT, FRQ_EXAMS } from "./frqExams";
import { REFERENCE } from "./exams";

// Loaded on demand (the FRQ exam text is large), so the study pages stay light.
export default function FrqExamsView({ colors }) {
  return <FrqExamEngine hubKey="physics2" format={FRQ_FORMAT} exams={FRQ_EXAMS} colors={colors} reference={REFERENCE} />;
}
