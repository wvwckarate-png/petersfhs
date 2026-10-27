import { FIGS as F1 } from "./gov_figs1.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "government", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "checks-balances", "Madison's famous phrase captures the entire logic of checks and balances"),
  at(1, "federalism-powers", "Federalism is the division of governing authority between a national government"),
  at(2, "bill-to-law", "Congress is bicameral"),
  at(2, "judicial-ladder", "The federal judiciary is structured as a three-tiered system"),
  at(2, "iron-triangle", "Iron Triangles and Issue Networks"),
  at(3, "free-speech-tiers", "Freedom of speech is rarely treated as an absolute"),
  at(4, "margin-of-error", "A poll's value depends heavily on whether its sample was drawn"),
  at(4, "ideology-spectrum", "This section gets to the heart of the unit"),
  at(5, "voting-timeline", "The right to vote in America wasn't granted all at once"),
  at(5, "realignment-timeline", "Realignment refers to a durable shift"),
  at(5, "electoral-college", "Section 5.7's campaign finance material covers how campaigns are funded"),
];
