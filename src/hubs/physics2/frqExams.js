// AP Physics 2 FRQ exams. Format follows the current College Board exam: 4 free-response questions in 95 minutes.
import SAMPLE from "./frqExams/sample";
import EXAM_1 from "./frqExams/exam1";
import EXAM_2 from "./frqExams/exam2";
import EXAM_3 from "./frqExams/exam3";
import EXAM_4 from "./frqExams/exam4";

const FRQ_FORMAT = {
  minutes: 95,
  points: 40,
  intro:
    "Full-length free-response practice built like the real Section II: 4 questions (a derivation question, a translation-between-representations question, an experimental design and analysis question, and a qualitative/quantitative translation question) with 40 points in all. You write your answers; the app doesn't grade them. Afterward you get the scoring points and a model response for every part so you can score yourself and reflect.",
};

// Sample first, then the four full exams.
const FRQ_EXAMS = [SAMPLE, EXAM_1, EXAM_2, EXAM_3, EXAM_4];

// Symbols offered in the toolbar above the response boxes (typing × ² Δ λ → is awkward on most keyboards).
const FRQ_SYMBOLS = ["×", "÷", "−", "±", "≈", "≠", "≤", "≥", "→", "√", "°", "²", "³", "⁻", "¹", "⁰", "₀", "₁", "₂", "Δ", "λ", "μ", "π", "θ", "Ω", "ε", "φ", "ρ", "ω", "α", "β", "γ", "τ", "ℓ"];

export { FRQ_FORMAT, FRQ_EXAMS, FRQ_SYMBOLS };
