import { FIGS as F1 } from "./eng_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "aplit", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "plot-diagram", "This section covers the basic architecture of narrative"),
  at(1, "pov-distance", "This section covers who tells a story and how close or far the telling positions the reader"),
  at(2, "meter-scansion", "This section introduces the basic vocabulary for how poems sound"),
  at(3, "foil-contrast", "This section introduces the foil"),
  at(4, "unreliable-gap", "This section covers narrators whose account of events cannot be fully trusted"),
  at(4, "irony-types", "This section distinguishes the three major types of irony"),
  at(5, "sonnet-forms", "This section covers how a poem's overall structural form"),
  at(6, "tragic-arc", "This final section introduces the classical concept of a defining character flaw"),
  at(7, "frame-narrative", "This section covers stories containing other stories"),
  at(7, "free-indirect", "This section introduces free indirect discourse"),
  at(8, "volta-position", "This section covers the volta"),
];
