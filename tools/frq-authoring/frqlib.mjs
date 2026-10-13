// Helpers for writing FRQ exams (see README.md). Authoring files export `default exam(...)`.
export { fig, table, chart, barChart, curve, COL, svg, line, rect, circle, text, path, poly, dot, vec } from "../exam-authoring/figlib.mjs";

/** Part: id like "A" or "A(i)"; rubric = array of strings (1 point each) or {text, pts}; model = string | string[]. */
export const P = (id, prompt, rubric, model, opt = {}) => ({ id, label: opt.label || id, prompt, ...opt, rubric, model });

/** Question. kind = AP question type label; parts = P(...)[] ; opt: {intro, figures, minutes, points} */
export const Q = (id, kind, minutes, intro, figures, parts) => ({ id, kind, minutes, intro, ...(figures && figures.length ? { figures } : {}), parts });

export const exam = (o) => o;

// number formatting used to keep model answers in sync with the numbers they're computed from
export const sig = (x, n = 3) => {
  if (x === 0) return "0";
  const d = Math.ceil(Math.log10(Math.abs(x)));
  const p = n - d;
  const r = Math.round(x * 10 ** p) / 10 ** p;
  return p > 0 ? r.toFixed(p) : String(r);
};
export const sci = (x, n = 3) => {
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = x / 10 ** e;
  return `${m.toFixed(n - 1)} × 10<sup>${e}</sup>`.replace("-", "−");
};
export const approx = (a, b, tol = 0.01) => Math.abs(a - b) <= tol * Math.abs(b);
