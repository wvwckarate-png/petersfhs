import { FIGS as F1 } from "./apush_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "apush", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "columbian-exchange", "Historian Alfred Crosby coined the term"),
  at(1, "casta-hierarchy", "Spain built the first major, sustained European colonial empire"),
  at(2, "colonial-regions", "By the early 1700s, England's Atlantic colonies had sorted"),
  at(2, "triangular-trade", "This final section covers the economic theory Britain used"),
  at(3, "revolution-sequence", "The decade-plus between the French and Indian War's end"),
  at(3, "great-compromise", "The 1787 Philadelphia Convention was called to REVISE the Articles"),
  at(4, "market-revolution", "This section covers the specific transportation and industrial developments"),
  at(4, "expansion-timeline", "This final section covers the ideological framework Americans used"),
  at(5, "compromise-1850", "The Mexican Cession (Period 4's endpoint) immediately reopened"),
  at(5, "sectional-crisis", "The Supreme Court's attempt to settle the slavery-expansion question"),
  at(5, "anaconda-plan", "This section covers the war's fundamental cause, each side's strategic advantages"),
  at(7, "progressive-amendments", "While the U.S. was expanding its influence abroad"),
  at(7, "depression-chain", "The prosperity of the 1920s collapsed catastrophically"),
  at(7, "new-deal-3rs", "Franklin D. Roosevelt's New Deal represented a fundamental"),
  at(8, "containment-timeline", "The Cold War emerged from a fundamental disagreement between wartime allies"),
  at(8, "great-society", "President Lyndon Johnson pursued the century's most ambitious"),
  at(9, "cold-war-end", "The Cold War's conclusion in the late 1980s"),
];
