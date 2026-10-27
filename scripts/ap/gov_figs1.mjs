import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = "ah", w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c === "ah" ? C.ink : ({ ahr: RED, ahb: BLUE, ahg: GREEN, aho: C.orange })[c], w, marker: c });
const L = (x, y, t, o = {}) => text(x, y, t, { size: 11.5, ...o });
const dbl = (x1, y1, x2, y2, c1 = "ah", c2 = "ah", o = 7) => { const dx = x2 - x1, dy = y2 - y1, n = Math.hypot(dx, dy), ox = -dy / n * o, oy = dx / n * o; return A(x1 + ox, y1 + oy, x2 + ox, y2 + oy, c1, 2.5) + A(x2 - ox, y2 - oy, x1 - ox, y1 - oy, c2, 2.5); };

// checks and balances web
{
  let s = defs + title("Checks and balances: each branch can limit the others");
  const br = (x, y, name, sub, col) => rect(x, y, 200, 56, { fill: col, stroke: "#555", rx: 12 }) + text(x + 100, y + 24, name, { size: 14, weight: "bold" }) + text(x + 100, y + 43, sub, { size: 11, fill: C.muted });
  s += br(280, 44, "LEGISLATIVE", "Congress", "#dfeaf7") + br(60, 170, "EXECUTIVE", "President", "#f7e3d3") + br(500, 170, "JUDICIAL", "Supreme Court & federal courts", "#e2f0dc");
  s += dbl(300, 102, 190, 168, "ahb", "ahr") + dbl(460, 102, 570, 168, "ahb", "ahg") + dbl(262, 198, 498, 198, "ahr", "ahg");
  const box = (x, col, head, body) => rect(x, 250, 224, 118, { fill: "#fff", stroke: col, rx: 8, w: 2 }) + text(x + 112, 270, head, { size: 12, weight: "bold", fill: col }) + text(x + 112, 290, body, { size: 10.5 });
  s += box(20, BLUE, "Congress can…", "• override a veto (⅔ of each chamber)\n• impeach and remove officials\n• Senate confirms appointees, treaties\n• control the budget\n• create lower courts, propose amendments");
  s += box(268, RED, "President can…", "• veto bills\n• nominate judges and officials\n• propose legislation, set agenda\n• pardon; commander in chief\n• (executive orders, within limits)");
  s += box(516, GREEN, "Courts can…", "• judicial review: strike down laws\n  and executive actions\n• interpret statutes and the Constitution\n• (judges serve for life, so independent)");
  fig(FIGS, "checks-balances", 760, 384, s, "Web of checks and balances among legislative, executive and judicial branches with a list of checks for each", "Each branch holds specific powers over the other two, so no branch can dominate. Madison argued in Federalist No. 51 that 'ambition must be made to counteract ambition'.");
}
// federalism
{
  let s = defs + title("Federalism: who holds which powers?");
  s += circle(260, 130, 100, { fill: "#cfe0f7", stroke: BLUE, w: 2.5 }).replace("", "") ;
  s += `<ellipse cx="170" cy="130" rx="110" ry="88" fill="#cfe0f7" stroke="${BLUE}" stroke-width="2.5" opacity=".85"/><ellipse cx="310" cy="130" rx="110" ry="88" fill="#f7d9c8" stroke="${RED}" stroke-width="2.5" opacity=".85"/>`;
  s += text(110, 70, "NATIONAL\n(enumerated)", { size: 12.5, weight: "bold", fill: BLUE }) + text(110, 112, "coin money\nregulate interstate\ncommerce\ndeclare war\nconduct foreign policy", { size: 10.5 });
  s += text(240, 100, "CONCURRENT", { size: 12.5, weight: "bold", fill: PURPLE }) + text(240, 120, "tax\nbuild roads\nsetup courts\nborrow money", { size: 10.5 });
  s += text(370, 70, "STATE\n(reserved)", { size: 12.5, weight: "bold", fill: RED }) + text(372, 112, "run schools\nlicense professions\nrun elections\nlocal government\npolice power", { size: 10.5 });
  s += text(240, 232, "10th Amendment: powers not given to the national government are reserved to the states (or the people).", { size: 11, fill: C.muted }).replace("", "");
  s += line(500, 44, 500, 240, { stroke: C.line, w: 1.5 });
  s += text(620, 56, "Two metaphors", { size: 13, weight: "bold" });
  s += rect(520, 70, 200, 60, { fill: "#fff", stroke: "#999", rx: 6 }) + rect(520, 70, 200, 20, { fill: "#cfe0f7", stroke: "#999", rx: 0 }) + rect(520, 90, 200, 20, { fill: "#f7d9c8", stroke: "#999", rx: 0 }) + rect(520, 110, 200, 20, { fill: "#d9efd0", stroke: "#999", rx: 0 }) + text(620, 144, "LAYER CAKE: dual federalism (separate)", { size: 10.5, weight: "bold" });
  s += `<ellipse cx="620" cy="190" rx="100" ry="30" fill="#e7d4f0" stroke="#999"/>` + `<path d="M 540 190 C 570 160, 590 215, 620 190 S 670 165, 700 195" stroke="${BLUE}" stroke-width="10" fill="none" opacity=".7"/>` + text(620, 238, "MARBLE CAKE: cooperative federalism\n(shared, mixed responsibilities)", { size: 10.5, weight: "bold" });
  fig(FIGS, "federalism-powers", 760, 268, s, "Venn diagram of national, concurrent and state powers with layer cake and marble cake metaphors", "National powers are enumerated, state powers are reserved, and some are shared (concurrent). Dual federalism keeps the layers separate, while cooperative federalism mixes them like a marble cake.");
}
// bill becomes law
{
  let s = defs + title("How a bill becomes a law");
  const bx = (x, y, w, h, fill, t, o = {}) => rect(x, y, w, h, { fill, stroke: "#666", rx: 10 }) + text(x + w / 2, y + h / 2 + (t.includes("\n") ? -4 : 5), t, { size: o.size || 12, weight: "bold" });
  s += bx(20, 60, 150, 50, "#dfeaf7", "Bill introduced\n(House or Senate*)") + A(172, 85, 202, 85, "ah", 2.5) + bx(204, 60, 150, 50, "#dfeaf7", "Committee &\nsubcommittee") + A(356, 85, 386, 85, "ah", 2.5) + bx(388, 60, 150, 50, "#dfeaf7", "Rules, debate\n& floor vote") + A(540, 85, 570, 85, "ah", 2.5) + bx(572, 60, 170, 50, "#f4e1a8", "Passes first chamber\n(simple majority)");
  s += A(657, 112, 657, 146, "ah", 2.5) + bx(572, 148, 170, 50, "#dfeaf7", "Other chamber repeats\ncommittee → floor vote");
  s += A(570, 173, 540, 173, "ah", 2.5) + bx(388, 148, 150, 50, "#f4e1a8", "Conference committee\n(if versions differ)") + A(386, 173, 356, 173, "ah", 2.5) + bx(204, 148, 150, 50, "#f4e1a8", "Both chambers\napprove same text") + A(202, 173, 172, 173, "ah", 2.5) + bx(20, 148, 150, 50, "#f7e3d3", "President\nsigns or vetoes");
  s += A(95, 200, 95, 232, "ahg", 2.5) + L(100, 222, "signs → LAW", { weight: "bold", fill: GREEN, anchor: "start" }) + A(130, 200, 200, 245, "ahr", 2.5) + L(204, 252, "veto → returns to Congress; ⅔ of both chambers can override", { weight: "bold", fill: RED, anchor: "start", size: 11 });
  s += L(380, 282, "*Revenue bills must start in the House. Senate filibuster needs 60 votes for cloture. Pocket veto: president ignores a bill in the last 10 days of a session.", { fill: C.muted, size: 10.5 });
  fig(FIGS, "bill-to-law", 760, 300, s, "Flowchart of a bill moving from introduction through committee, both chambers and the president", "A bill passes through committee and a floor vote in each chamber, then goes to the president. A veto can be overridden by a two-thirds vote in both chambers.");
}
// judicial ladder
{
  let s = defs + title("The federal court system: how a case moves up");
  const tier = (y, w, fill, name, d) => `<polygon points="${380 - w / 2 + 20},${y} ${380 + w / 2 - 20},${y} ${380 + w / 2},${y + 66} ${380 - w / 2},${y + 66}" fill="${fill}" stroke="#555"/>` + text(380, y + 28, name, { size: 13.5, weight: "bold" }) + text(380, y + 48, d, { size: 11 });
  s += tier(50, 280, "#f4e1a8", "Supreme Court", "9 justices · appellate · picks cases (cert, rule of four)") + tier(120, 380, "#dfeaf7", "U.S. Courts of Appeals", "13 circuits · review for legal errors · no new trial") + tier(190, 480, "#dff0d8", "U.S. District Courts", "94 trial courts · hear evidence, juries, original jurisdiction");
  s += A(120, 250, 120, 80, "ah", 2).replace("", "") + L(100, 160, "appeals\nmove UP", { anchor: "end", fill: C.muted });
  s += rect(30, 266, 700, 36, NOTE) + text(380, 289, "Judicial review (Marbury v. Madison, 1803): courts can strike down laws and actions that violate the Constitution.", { size: 12, weight: "bold" });
  fig(FIGS, "judicial-ladder", 760, 318, s, "Three-tier federal court system with district courts, courts of appeals and the Supreme Court", "Cases begin in district (trial) courts, may be appealed to a circuit court of appeals, and in rare cases are heard by the Supreme Court, which chooses which cases to take.");
}
// iron triangle
{
  let s = defs + title("Iron triangle: mutually beneficial relationships among three players");
  const nd = (x, y, t, sub, col) => circle(x, y, 52, { fill: col, stroke: "#555", w: 2.5 }) + text(x, y - 2, t, { size: 12.5, weight: "bold" }) + text(x, y + 16, sub, { size: 10, fill: C.muted });
  s += nd(380, 74, "Congressional\ncommittee", "", "#dfeaf7").replace("", "") ;
  s += nd(200, 220, "Bureaucratic\nagency", "", "#e2f0dc") + nd(560, 220, "Interest\ngroup", "", "#f7e3d3");
  s += dbl(344, 110, 236, 182) + dbl(416, 110, 524, 182) + dbl(256, 222, 504, 222);
  s += L(236, 120, "funding &\noversight", { anchor: "end", fill: C.muted }) + L(512, 126, "campaign support,\ninformation", { anchor: "start", fill: C.muted }) + L(380, 256, "favorable regulation  ↔  expertise & data", { fill: C.muted });
  s += rect(30, 266, 700, 36, NOTE) + text(380, 289, "Issue networks are wider and looser: many groups, experts, and media compete to shape policy.", { size: 12, weight: "bold" });
  fig(FIGS, "iron-triangle", 760, 318, s, "Iron triangle linking a congressional committee, a bureaucratic agency and an interest group", "Committees, agencies and interest groups trade support for one another: funding and oversight, favorable regulation, and campaign help and information. Issue networks include more players.");
}
// free speech
{
  let s = defs + title("Freedom of speech: strongly protected, but not absolute");
  const bar = (y, x1, x2, fill, label) => rect(x1, y, x2 - x1, 34, { fill, stroke: "#666", rx: 8 }) + text((x1 + x2) / 2, y + 22, label, { size: 12, weight: "bold" });
  s += text(380, 52, "Presumed PROTECTED", { size: 13, weight: "bold", fill: GREEN }) + bar(64, 40, 720, "#dff0d8", "political speech, symbolic speech (Tinker armbands; flag burning), unpopular & offensive opinions");
  s += text(380, 124, "Restricted only if government meets a high bar", { size: 13, weight: "bold", fill: GOLD }) + bar(136, 40, 720, "#f4e1a8", "incitement: 'imminent lawless action' (Brandenburg) · clear & present danger (Schenck, WWI era) · student speech limits at school");
  s += text(380, 196, "Generally NOT protected", { size: 13, weight: "bold", fill: RED }) + bar(208, 40, 720, "#f4c8c8", "true threats · defamation (libel/slander) · obscenity (Miller test) · fighting words");
  s += text(380, 262, "Time, place, and manner rules can regulate WHEN/WHERE speech happens if they are content-neutral.", { size: 11.5, fill: C.muted });
  fig(FIGS, "free-speech-tiers", 760, 280, s, "Three tiers of speech protection from fully protected to generally unprotected categories", "Political and symbolic speech get the strongest protection. Speech can be limited when it incites imminent lawless action, and some categories (true threats, defamation, obscenity) receive no First Amendment protection.");
}
// margin of error
{
  let s = defs + title("Polling: sample size controls the margin of error");
  const x0 = 70, y0 = 210, w = 340, h = 140;
  s += line(x0, y0, x0 + w, y0, { w: 2 }) + curve(x0, y0, w, h, (t) => Math.exp(-Math.pow((t - 0.5) / 0.16, 2)), { stroke: BLUE });
  s += `<path d="M ${x0 + 0.34 * w} ${y0} ` + Array.from({ length: 33 }, (_, i) => { const t = 0.34 + i / 32 * 0.32; return `L ${x0 + t * w} ${y0 - Math.exp(-Math.pow((t - 0.5) / 0.16, 2)) * h}`; }).join(" ") + ` L ${x0 + 0.66 * w} ${y0} Z" fill="#cfe0f7" opacity=".8"/>`;
  s += line(x0 + w / 2, y0, x0 + w / 2, y0 - h - 6, { stroke: RED, w: 2 }) + text(x0 + w / 2, y0 + 18, "poll result (e.g. 52%)", { size: 11.5, weight: "bold", fill: RED }) + line(x0 + 0.34 * w, y0 + 6, x0 + 0.66 * w, y0 + 6, { w: 2, marker: "ah" }) + text(x0 + w / 2, y0 + 38, "± margin of error: true value is probably in this range", { size: 11 }) + text(x0 + w / 2, y0 - h - 12, "95% confidence level", { size: 11.5, weight: "bold", fill: BLUE });
  s += rect(450, 56, 290, 190, NOTE) + text(595, 80, "What changes the margin of error", { size: 12.5, weight: "bold" }) + text(595, 108, "↑ larger random sample → ↓ margin\n(diminishing returns)\n\nIt does NOT fix: biased sampling, loaded\nquestions, low response, social-desirability\nbias.", { size: 11 }) + text(595, 220, "Random sample = every member of the\npopulation has an equal chance", { size: 11, fill: GREEN, weight: "bold" });
  fig(FIGS, "margin-of-error", 760, 280, s, "Bell curve centered on a poll result with a shaded margin of error range", "A poll estimates public opinion within a margin of error that shrinks as random sample size grows. A large sample cannot rescue a biased sampling method or a poorly worded question.");
}
// ideology spectrum
{
  let s = defs + title("The ideological spectrum on core issues (typical positions)");
  s += `<defs><linearGradient id="gi" x1="0" x2="1"><stop offset="0" stop-color="#4a7ac8"/><stop offset=".5" stop-color="#d9d4e8"/><stop offset="1" stop-color="#d2543c"/></linearGradient></defs>` + rect(60, 80, 640, 32, { fill: "url(#gi)", stroke: "#666", rx: 16 });
  s += text(110, 70, "LIBERAL", { size: 14, weight: "bold", fill: BLUE }) + text(380, 70, "MODERATE", { size: 13, weight: "bold", fill: C.muted }) + text(650, 70, "CONSERVATIVE", { size: 14, weight: "bold", fill: RED });
  const col = (x, anch, lines, col) => text(x, 140, lines, { size: 11.5, anchor: anch, fill: col });
  s += col(60, "start", "• more government role in economy\n• larger social safety net\n• progressive taxation\n• expand civil rights, regulate\n  business, protect environment", BLUE);
  s += col(700, "end", "• market-based solutions\n• smaller social safety net\n• lower taxes, less regulation\n• emphasis on tradition, personal\n  responsibility, strong defense", RED);
  s += rect(250, 150, 260, 94, NOTE) + text(380, 174, "Remember", { size: 13, weight: "bold" }) + text(380, 198, "Ideology is a SPECTRUM, and most people\nare mixed: economic and social views\ncan point different directions.", { size: 11 });
  fig(FIGS, "ideology-spectrum", 760, 264, s, "Spectrum from liberal to conservative with typical policy positions on each side", "Liberal and conservative positions form a spectrum rather than two boxes. Many people mix positions, for example holding conservative economic views with liberal social views.");
}
// voting rights timeline
{
  let s = defs + title("Expansion of voting rights through amendments and laws");
  s += line(40, 110, 720, 110, { w: 4, stroke: "#777" });
  const ev = [["1870", "15th Amendment", "no denial of the vote\nbecause of race"], ["1920", "19th Amendment", "no denial of the vote\nbecause of sex"], ["1964", "24th Amendment", "bans poll taxes in\nfederal elections"], ["1965", "Voting Rights Act", "bans literacy tests;\nfederal oversight"], ["1971", "26th Amendment", "voting age lowered\nto 18"]];
  ev.forEach(([yr, n, d], i) => { const x = 90 + i * 145; s += text(x, 84, yr, { size: 14, weight: "bold", fill: RED }) + circle(x, 110, 8, { fill: GOLD, stroke: "#7a5b00" }) + line(x, 118, x, 138, { stroke: "#aaa", w: 1.5 }) + text(x, 156, n, { size: 12.5, weight: "bold" }) + text(x, 176, d, { size: 11, fill: C.muted }); });
  s += rect(60, 214, 640, 36, NOTE) + text(380, 237, "Also: Native American citizenship (1924); the 14th Amendment (1868) defined citizenship but did not secure voting.", { size: 11.5 });
  fig(FIGS, "voting-timeline", 760, 266, s, "Timeline of constitutional amendments and laws that expanded voting rights from 1870 to 1971", "Voting rights expanded in stages: race (15th), sex (19th), poll taxes (24th), the Voting Rights Act of 1965 that enforced access, and the 26th Amendment lowering the voting age to 18.");
}
// party realignments
{
  let s = defs + title("Critical elections and party realignments");
  s += line(50, 130, 710, 130, { w: 4, stroke: "#777" });
  const ev = [[1800, "1800", "Jeffersonian\nRepublicans rise", 0], [1828, "1828", "Jacksonian\nDemocrats", 1], [1860, "1860", "Republican Party\nwins (Lincoln)", 0], [1896, "1896", "business-oriented GOP\ndominates", 1], [1932, "1932", "FDR's New Deal\ncoalition", 0], [1980, "1980", "Reagan: conservative\nrealignment", 1]];
  const X = (yr) => 70 + (yr - 1795) / (1985 - 1795) * 620;
  ev.forEach(([yr, n, d, up]) => { const x = X(yr); s += circle(x, 130, 8, { fill: PURPLE, stroke: "#3b1a6a" }) + line(x, 130, x, up ? 94 : 166, { stroke: "#aaa", w: 1.5 }) + text(x, up ? 56 : 196, n, { size: 13, weight: "bold", fill: PURPLE }) + text(x, up ? 74 : 214, d, { size: 10.5 }); });
  s += rect(60, 250, 640, 36, NOTE) + text(380, 273, "Realignment = lasting shift in which groups back which party. Dealignment = voters drifting away from both.", { size: 12, weight: "bold" });
  fig(FIGS, "realignment-timeline", 760, 302, s, "Timeline of major critical elections from 1800 to 1980", "Realignments come from critical elections that reshape party coalitions for decades. Dealignment is different: voters weaken their ties to any party rather than switching.");
}
// electoral college
{
  let s = defs + title("The Electoral College: 538 electors, 270 to win");
  s += rect(60, 70, 640, 34, { fill: "#dfeaf7", stroke: "#666", rx: 4 }) + rect(60, 70, 640 * 435 / 538, 34, { fill: "#a9c8f0", stroke: "#666", rx: 4 }) + text(60 + 640 * 435 / 538 / 2, 92, "435 (House seats)", { size: 12, weight: "bold" }) + rect(60 + 640 * 435 / 538, 70, 640 * 100 / 538, 34, { fill: "#f4b0a0", stroke: "#666", rx: 0 }).replace("", "") + text(60 + 640 * 435 / 538 + 640 * 100 / 538 / 2, 92, "100", { size: 12, weight: "bold" }) + rect(60 + 640 * 535 / 538, 70, 640 * 3 / 538, 34, { fill: "#d9efd0", stroke: "#666", rx: 0 });
  s += text(60 + 640 * 435 / 538 + 640 * 100 / 538 / 2, 120, "Senate seats", { size: 10.5, fill: C.muted }) + text(700, 120, "D.C. = 3", { size: 10.5, fill: C.muted, anchor: "end" });
  s += line(60 + 640 * 270 / 538, 62, 60 + 640 * 270 / 538, 112, { stroke: RED, w: 3 }) + text(60 + 640 * 270 / 538, 56, "270 = majority", { size: 12, weight: "bold", fill: RED });
  s += rect(60, 150, 310, 104, { fill: "#fff", stroke: "#ddd", rx: 8 }) + text(215, 172, "Winner-take-all (48 states + D.C.)", { size: 12.5, weight: "bold" }) + text(215, 196, "the candidate with the most votes in a state\ngets ALL of its electoral votes", { size: 11.5 }) + text(215, 240, "Maine & Nebraska split by district", { size: 10.5, fill: C.muted });
  s += rect(390, 150, 310, 104, NOTE) + text(545, 172, "Why it matters", { size: 12.5, weight: "bold" }) + text(545, 196, "A candidate can win the presidency\nwithout winning the national popular\nvote. Swing states get the most attention.", { size: 11.5 });
  fig(FIGS, "electoral-college", 760, 274, s, "Bar showing 538 electors split into 435 House, 100 Senate and 3 D.C. with the 270 majority marked", "Each state's electors equal its House seats plus two senators; D.C. has three. A candidate needs 270 of 538 electoral votes, and most states award all of theirs to the statewide winner.");
}
