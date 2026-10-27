import { FIGS as F1 } from "./eng_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "englang", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "soapstone", "Before analyzing any single rhetorical choice in a text"),
  at(1, "rhetorical-triangle", "This section introduces the three classical categories"),
  at(2, "claim-types", "Before evaluating whether a claim is well-supported"),
  at(3, "deductive-inductive", "This section breaks logos down into two genuinely distinct reasoning structures"),
  at(4, "classical-argument", "This section introduces a time-tested five-part structure"),
  at(4, "concession-pattern", "A concession is an explicit acknowledgment that an opposing point"),
  at(6, "sentence-types", "This section names two of the most common and most rhetorically significant sentence structures"),
  at(6, "repetition-schemes", "This section names three specific patterns of deliberate repetition"),
  at(7, "tone-shifts", "Unit 6 introduced diction register shifts at a single moment"),
  at(9, "exam-time", "This section covers the exam's actual time budget"),
];
