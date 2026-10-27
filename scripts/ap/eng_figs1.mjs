import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = "ah", w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c === "ah" ? C.ink : ({ ahr: RED, ahb: BLUE, ahg: GREEN, aho: C.orange })[c], w, marker: c });
const L = (x, y, t, o = {}) => text(x, y, t, { size: 11.5, ...o });
const word = (x, y, t, fill, o = {}) => { const w = t.length * 7.4 + 14; return rect(x, y, w, 24, { fill, stroke: "#999", rx: 6 }) + text(x + w / 2, y + 17, t, { size: 12, weight: o.bold ? "bold" : "normal" }); };

// ---- AP English Language ----
// SOAPSTone
{
  let s = defs + title("SOAPSTone: six questions that map a rhetorical situation");
  s += circle(380, 140, 58, { fill: "#fbf6e6", stroke: "#c9a", w: 2.5 }) + text(380, 136, "THE\nTEXT", { size: 14, weight: "bold" });
  const it = [["S", "Speaker", "who is writing; what is their credibility?", 130, 52, "start"], ["O", "Occasion", "what event or context prompted it?", 130, 140, "start"], ["A", "Audience", "who is being addressed?", 130, 228, "start"], ["P", "Purpose", "what does the writer want to happen?", 630, 52, "end"], ["S", "Subject", "what is the topic?", 630, 140, "end"], ["T", "Tone", "what attitude shows in word choice?", 630, 228, "end"]];
  it.forEach(([k, n, q, x, y, an], i) => { const left = i < 3; s += circle(left ? 60 : 700, y, 22, { fill: left ? "#dfeaf7" : "#f4e1a8", stroke: "#666", w: 2 }) + text(left ? 60 : 700, y + 6, k, { size: 17, weight: "bold" }) + text(left ? 92 : 668, y - 4, n, { size: 13, weight: "bold", anchor: left ? "start" : "end" }) + text(left ? 92 : 668, y + 13, q, { size: 10.5, fill: C.muted, anchor: left ? "start" : "end" }); s += line(left ? 322 : 438, 140, left ? 232 : 530, y, { stroke: "#ccc", w: 1.5, dash: "4 3" }).replace("", ""); });
  fig(FIGS, "soapstone", 760, 270, s, "Six SOAPSTone elements arranged around a central text", "SOAPSTone organizes a first read of any passage: Speaker, Occasion, Audience, Purpose, Subject, and Tone. Purpose and audience drive most rhetorical choices.");
}
// rhetorical triangle
{
  let s = defs + title("The rhetorical triangle: speaker, audience, message, and the three appeals");
  s += `<polygon points="380,66 130,226 630,226" fill="#f7f5ee" stroke="#777" stroke-width="3"/>`;
  s += circle(380, 66, 6, { fill: C.ink }) + circle(130, 226, 6, { fill: C.ink }) + circle(630, 226, 6, { fill: C.ink });
  s += text(380, 52, "SPEAKER / WRITER", { size: 13, weight: "bold" }) + text(130, 252, "MESSAGE (the text)", { size: 13, weight: "bold" }) + text(630, 252, "AUDIENCE", { size: 13, weight: "bold" });
  s += text(244, 124, "LOGOS", { size: 15, weight: "bold", fill: BLUE, anchor: "end" }).replace("", "") + L(236, 142, "appeal to reason:\nevidence, logic", { fill: BLUE, anchor: "end" });
  s += text(516, 124, "ETHOS", { size: 15, weight: "bold", fill: GREEN, anchor: "start" }) + L(524, 142, "appeal to credibility:\ncharacter, expertise", { fill: GREEN, anchor: "start" });
  s += text(380, 196, "PATHOS", { size: 15, weight: "bold", fill: RED }) + L(380, 214, "appeal to emotion: values, stories, imagery", { fill: RED, size: 10.5 });
  fig(FIGS, "rhetorical-triangle", 760, 268, s, "Triangle with speaker, message and audience and the ethos, logos and pathos appeals along its sides", "Ethos connects speaker and audience through credibility, pathos connects message and audience through emotion, and logos ties the message to reason. Strong arguments usually balance all three.");
}
// claim types
{
  let s = defs + title("Three kinds of claims, and the question each one answers");
  const tp = [["FACT", "Is it true?", "provable with data or records:\n'The city's recycling rate rose in 2023.'", "#dfeaf7"], ["VALUE", "Is it good or bad, right or wrong?", "judgment based on criteria:\n'Public libraries are more valuable than...'", "#e2f0dc"], ["POLICY", "What should we do?", "proposes action:\n'The city should fund more bus routes.'", "#f4e1a8"]];
  tp.forEach(([n, q, ex, c], i) => { const x = 20 + i * 248; s += rect(x, 56, 232, 170, { fill: c, stroke: "#666", rx: 12 }) + text(x + 116, 84, n, { size: 16, weight: "bold" }) + text(x + 116, 110, q, { size: 12, weight: "bold" }) + text(x + 116, 144, ex, { size: 10.5 }); if (i < 2) s += A(x + 234, 140, x + 246, 140, "ah", 2); });
  s += rect(60, 242, 640, 36, NOTE) + text(380, 265, "Each type needs different support: facts need data, values need criteria, policies need both plus feasibility.", { size: 11.5, weight: "bold" });
  fig(FIGS, "claim-types", 760, 294, s, "Three claim types: fact, value and policy with the question each answers", "Claims of fact ask what is true, claims of value ask what is good, and claims of policy ask what should be done. The kind of claim determines the kind of evidence it needs.");
}
// deductive vs inductive
{
  let s = defs + title("Deductive vs. inductive reasoning: opposite directions");
  s += text(190, 54, "DEDUCTIVE: general → specific", { size: 13, weight: "bold", fill: BLUE });
  [["All mammals breathe air.", "#dfeaf7"], ["Whales are mammals.", "#dfeaf7"], ["∴ Whales breathe air.", "#f4e1a8"]].forEach(([t, c], i) => { s += rect(50, 74 + i * 52, 280, 40, { fill: c, stroke: "#666", rx: 8 }) + text(190, 99 + i * 52, t, { size: 12.5, weight: i === 2 ? "bold" : "normal" }); if (i < 2) s += A(190, 114 + i * 52, 190, 126 + i * 52, "ah", 2); });
  s += L(190, 244, "certain IF the premises are true", { weight: "bold", fill: BLUE });
  s += line(380, 46, 380, 254, { stroke: C.line, w: 1.5 });
  s += text(570, 54, "INDUCTIVE: specific → general", { size: 13, weight: "bold", fill: RED });
  [["Swan #1 seen was white.", "#f7e3d3"], ["Swans #2–#500 were white.", "#f7e3d3"], ["∴ Probably all swans are white.", "#f4e1a8"]].forEach(([t, c], i) => { s += rect(430, 74 + i * 52, 280, 40, { fill: c, stroke: "#666", rx: 8 }) + text(570, 99 + i * 52, t, { size: 12.5, weight: i === 2 ? "bold" : "normal" }); if (i < 2) s += A(570, 114 + i * 52, 570, 126 + i * 52, "ah", 2); });
  s += L(570, 244, "probable; strength depends on sample size & quality", { weight: "bold", fill: RED });
  fig(FIGS, "deductive-inductive", 760, 270, s, "Deductive reasoning from general premises to a specific conclusion and inductive reasoning from specific examples to a general conclusion", "Deduction moves from general premises to a certain conclusion if the premises are true. Induction moves from specific examples to a probable general conclusion, and its strength depends on the evidence.");
}
// classical argument
{
  let s = defs + title("Classical argument: five parts and what each does");
  const pts = [["Introduction", "hook, establish issue\n& credibility", "#dfeaf7"], ["Narration", "background the\nreader needs", "#e2f0dc"], ["Confirmation", "your claim, reasons,\nand evidence", "#f4e1a8"], ["Refutation", "address and answer\nopposing views", "#f4c8c8"], ["Conclusion", "return to stakes;\ncall to action", "#e8d9c4"]];
  pts.forEach(([n, d, c], i) => { const x = 20 + i * 148; s += rect(x, 60, 136, 110, { fill: c, stroke: "#666", rx: 12 }) + text(x + 68, 90, n, { size: 13, weight: "bold" }) + text(x + 68, 118, d, { size: 10.5 }); if (i < 4) s += A(x + 138, 115, x + 146, 115, "ah", 2); });
  s += rect(60, 196, 640, 60, NOTE) + text(380, 218, "It is a flexible map, not a formula: parts can combine, repeat, or reorder.", { size: 12, weight: "bold" }) + text(380, 240, "Refutation is often where writers separate strong arguments from one-sided ones.", { size: 11.5 });
  fig(FIGS, "classical-argument", 760, 272, s, "Five-part classical argument structure from introduction to conclusion", "The classical model moves from introduction and background to the writer's case and a response to opposition, ending with a conclusion. Refutation shows the writer has weighed other views.");
}
// concession
{
  let s = defs + title("Concede, pivot, refute: the pattern that strengthens an argument");
  s += pill(30, 80, 200, 80, "#dfeaf7", "1. CONCEDE\n'Critics are right that\nthe plan costs more up front…'", { size: 11.5 }) + A(232, 120, 262, 120, "ah", 3) + pill(264, 80, 200, 80, "#f4e1a8", "2. PIVOT\n'…however, / yet / still'\n(signal word)", { size: 11.5 }) + A(466, 120, 496, 120, "ah", 3) + pill(498, 80, 232, 80, "#e2f0dc", "3. REFUTE\n'…the long-term savings and\nbenefits outweigh that cost.'", { size: 11.5 });
  s += rect(60, 190, 640, 70, NOTE) + text(380, 214, "Why concession helps: it shows fairness (ethos) and makes the writer's own claim sound reasoned,", { size: 11.5, weight: "bold" }) + text(380, 236, "not defensive. A weak refutation, or conceding too much, can undercut the thesis.", { size: 11.5 });
  fig(FIGS, "concession-pattern", 760, 276, s, "Three step pattern of concession, pivot and refutation", "Acknowledge the strongest part of the opposing view, pivot with a signal word, then explain why your position still holds. Used well, concession raises credibility without weakening the claim.");
}
// periodic vs cumulative
{
  let s = defs + title("Periodic vs. cumulative sentences: where does the main clause land?");
  const blocks = (y, parts, label, col) => { let g = text(24, y + 16, label, { size: 12, weight: "bold", anchor: "start", fill: col }); let x = 40; parts.forEach(([t, main]) => { const w = t.length * 6.6 + 18; g += rect(x, y + 34, w, 32, { fill: main ? "#f4e1a8" : "#e8eef9", stroke: main ? "#b08d1a" : "#99a", w: main ? 2.5 : 1.5, rx: 6 }) + text(x + w / 2, y + 55, t, { size: 11, weight: main ? "bold" : "normal" }); x += w + 6; }); return g; };
  s += blocks(46, [["After months of delay,", 0], ["countless meetings,", 0], ["and one failed vote,", 0], ["the council finally acted.", 1]], "PERIODIC (main clause LAST: suspense, emphasis)", BLUE);
  s += blocks(140, [["The council finally acted,", 1], ["after months of delay,", 0], ["countless meetings,", 0], ["and one failed vote.", 0]], "CUMULATIVE (main clause FIRST: details added after)", RED);
  s += rect(60, 240, 640, 40, NOTE) + text(380, 264, "Gold = main (independent) clause.  Ask: what effect does delaying or front-loading the main idea create?", { size: 11.5, weight: "bold" });
  fig(FIGS, "sentence-types", 760, 296, s, "Two example sentences broken into blocks showing the main clause at the end of a periodic sentence and at the start of a cumulative sentence", "A periodic sentence holds the main clause until the end, building suspense. A cumulative sentence states the main idea first and then adds detail. Both are choices with effects.");
}
// repetition schemes
{
  let s = defs + title("Schemes of repetition and balance");
  const row = (y, name, parts, note2) => text(24, y, name, { size: 13, weight: "bold", anchor: "start" }) + parts + text(24, y + 56, note2, { size: 10.5, fill: C.muted, anchor: "start" });
  s += row(52, "ANAPHORA (repeat at the START)", word(40, 62, "We need", "#f4e1a8", { bold: 1 }) + text(138, 79, "better schools.  ", { size: 12, anchor: "start" }) + word(262, 62, "We need", "#f4e1a8", { bold: 1 }) + text(360, 79, "safer streets.  ", { size: 12, anchor: "start" }) + word(470, 62, "We need", "#f4e1a8", { bold: 1 }) + text(568, 79, "your help.", { size: 12, anchor: "start" }), "builds rhythm and cumulative force");
  s += row(142, "EPISTROPHE (repeat at the END)", text(40, 161, "I came for", { size: 12, anchor: "start" }) + word(112, 144, "justice,", "#f4c8c8", { bold: 1 }) + text(206, 161, "I fought for", { size: 12, anchor: "start" }) + word(290, 144, "justice,", "#f4c8c8", { bold: 1 }) + text(386, 161, "I stand here for", { size: 12, anchor: "start" }) + word(494, 144, "justice.", "#f4c8c8", { bold: 1 }), "drives the repeated idea home as the last word");
  s += row(232, "ANTITHESIS (balanced contrast)", text(40, 251, "It was", { size: 12, anchor: "start" }) + word(84, 234, "the best of times,", "#dff0d8") + text(230, 251, "it was", { size: 12, anchor: "start" }) + word(272, 234, "the worst of times", "#f4c8c8") + text(432, 251, "(Dickens)", { size: 10.5, anchor: "start", fill: C.muted }), "parallel structure sets opposing ideas side by side");
  fig(FIGS, "repetition-schemes", 760, 316, s, "Examples of anaphora, epistrophe and antithesis with repeated words highlighted", "Anaphora repeats at the start of clauses, epistrophe at the end, and antithesis pairs opposing ideas in parallel structure. Each shapes rhythm and emphasis.");
}
// tone shifts
{
  let s = defs + title("Tracking tone across a passage: shifts mark stages of an argument");
  const x0 = 70, y0 = 230, w = 620, h = 150;
  s += axes(x0, y0, w, h, "", "") + text(x0 + w / 2, y0 + 30, "position in the passage →", { size: 12, weight: "bold" }) + text(x0 - 14, y0 - 130, "positive", { size: 10.5, fill: C.muted, anchor: "end" }) + text(x0 - 14, y0 - 10, "negative", { size: 10.5, fill: C.muted, anchor: "end" });
  const pts = [[0, 100], [0.18, 108], [0.34, 40], [0.5, 22], [0.68, 60], [0.84, 118], [1, 128]];
  s += path(pts.map(([t, v], i) => (i ? "L " : "M ") + (x0 + t * w) + " " + (y0 - v)).join(" "), { stroke: BLUE, w: 3.5 });
  [[0.1, "warm, personal\nanecdote"], [0.42, "critical,\nindignant"], [0.78, "hopeful,\nurgent"]].forEach(([t, lab]) => s += text(x0 + t * w, y0 - 150, lab, { size: 11, weight: "bold", fill: PURPLE }));
  [[0.28, "shift 1 ('But')"], [0.7, "shift 2 ('Yet')"]].forEach(([t, lab]) => s += line(x0 + t * w, y0 + 2, x0 + t * w, y0 - h + 6, { stroke: RED, w: 1.5, dash: "5 4" }) + text(x0 + t * w, y0 - 4 - 0, lab, { size: 10.5, weight: "bold", fill: RED }).replace(/y="[\d.]+"/, `y="${y0 + 16}"`));
  s += L(380, 288, "Name each shift (signal words, punctuation, diction change), what changed, and WHY the writer turns there.", { fill: C.muted, size: 11 });
  fig(FIGS, "tone-shifts", 760, 304, s, "Line graph of tone moving from warm to critical to hopeful across a passage with two shifts marked", "A passage can shift tone more than once. Mark each turn, name the new tone, and explain how the shift advances the argument.");
}
// exam time budget
{
  let s = defs + title("AP English Language exam: where the time goes (about 3 hours 15 minutes)");
  const W = 640, tot = 195, seg = (x, m, c, a, b) => rect(x, 70, W * m / tot, 70, { fill: c, stroke: "#666", rx: 6 }) + text(x + W * m / tot / 2, 100, a, { size: 12.5, weight: "bold" }) + text(x + W * m / tot / 2, 120, b, { size: 11 });
  s += seg(60, 60, "#dfeaf7", "Section I: Multiple choice", "45 questions · 60 min · 45% of score");
  s += seg(60 + W * 60 / tot, 135, "#f4e1a8", "Section II: Free response", "3 essays · 135 min · 55% of score");
  const sub = [["Synthesis", 55, "#f4e1a8"], ["Rhetorical analysis", 40, "#f7e3d3"], ["Argument", 40, "#e2f0dc"]];
  s += text(60 + W * 60 / tot + W * 135 / tot / 2, 166, "suggested: 15-min reading period, then roughly 40 minutes per essay", { size: 11, fill: C.muted });
  s += rect(60, 200, 640, 56, NOTE) + text(380, 224, "Multiple choice: about 80 seconds per question; skip and return to hard passage sets.", { size: 11.5, weight: "bold" }) + text(380, 244, "Essays: plan briefly first (thesis + line of reasoning), then write; leave time to revise the opening.", { size: 11.5 });
  fig(FIGS, "exam-time", 760, 270, s, "Bar showing the multiple choice section and the three essay free-response section time", "Multiple choice is 45% of the score and free response 55%. Plan your pacing in advance and spend planning time on each essay's thesis and line of reasoning.");
}

// ---- AP English Literature ----
// plot diagram
{
  let s = defs + title("Plot structure: the arc of a narrative");
  const x0 = 60, y0 = 230, w = 640, h = 140;
  s += line(x0, y0, x0 + w, y0, { w: 2, stroke: "#999" });
  const pts = [[0, 30], [0.2, 36], [0.4, 68], [0.55, 108], [0.66, 140], [0.8, 84], [0.92, 48], [1, 42]];
  s += path(pts.map(([t, v], i) => (i ? "L " : "M ") + (x0 + t * w) + " " + (y0 - v)).join(" "), { stroke: BLUE, w: 4 });
  [[0.08, "EXPOSITION", "character, setting,\nsituation", 130], [0.4, "RISING ACTION", "conflict builds,\ncomplications", 160], [0.66, "CLIMAX", "turning point of\nhighest tension", 190], [0.79, "FALLING ACTION", "consequences\nunfold", 150], [0.985, "RESOLUTION", "new stability\n(or open ending)", 120]].forEach(([t, n, d, hh]) => s += text(x0 + t * w, y0 + 22, n, { size: 11, weight: "bold", anchor: t > 0.95 ? "end" : "middle" }) + text(x0 + t * w, y0 + 38, d, { size: 10, fill: C.muted, anchor: t > 0.95 ? "end" : "middle" }));
  s += circle(x0 + 0.66 * w, y0 - 140, 7, { fill: RED, stroke: "#800" });
  s += L(380, 306, "Look for where an author departs from this pattern (in medias res, non-linear order, no resolution) and ask why.", { fill: C.muted });
  fig(FIGS, "plot-diagram", 760, 322, s, "Plot diagram with exposition, rising action, climax, falling action and resolution along a rising and falling line", "The classic plot arc rises from exposition through conflict to a climax, then falls toward resolution. Departures from this pattern are rhetorical choices worth analyzing.");
}
// POV distance
{
  let s = defs + title("Point of view and narrative distance: how close does the camera sit?");
  const rows = [["FIRST PERSON  ('I')", "narrator is a character: intimate, limited, possibly unreliable", 100, "#dfeaf7"], ["THIRD LIMITED", "outside narrator, but tied to ONE character's thoughts", 220, "#e2f0dc"], ["THIRD OMNISCIENT", "narrator can enter many minds and know more than any character", 340, "#f4e1a8"]];
  rows.forEach(([n, d, w, c], i) => { const y = 54 + i * 62; s += rect(40, y, 680, 52, { fill: "#fafafa", stroke: "#ddd", rx: 8 }) + rect(40, y, w + 80, 52, { fill: c, stroke: "#999", rx: 8 }) + text(52, y + 22, n, { size: 12.5, weight: "bold", anchor: "start" }) + text(52, y + 40, d, { size: 10.5, anchor: "start", fill: C.muted }); });
  s += L(380, 260, "Bar length = how much of the story world the narrator can access", { fill: C.muted }) + L(380, 280, "Ask: what does this vantage point reveal, and what does it conceal?", { weight: "bold" });
  fig(FIGS, "pov-distance", 760, 296, s, "Three bars showing first person, third limited and third omniscient narration by how much the narrator can access", "Narrative perspective controls what readers can know. First person is intimate but partial, third limited stays with one mind, and omniscient narration can range freely.");
}
// meter
{
  let s = defs + title("Meter: reading stressed and unstressed syllables (iambic pentameter)");
  const syl = ["Shall", "I", "com", "pare", "thee", "to", "a", "sum", "mer's", "day?"];
  const x0 = 60, dx = 64;
  syl.forEach((t, i) => { const stressed = i % 2 === 1; const x = x0 + i * dx; s += text(x + 20, 140, t, { size: 15, weight: stressed ? "bold" : "normal" }) + text(x + 20, 112, stressed ? "/" : "u", { size: 18, weight: "bold", fill: stressed ? RED : C.muted }); });
  [0, 1, 2, 3, 4].forEach((f) => s += rect(x0 - 6 + f * 2 * dx, 92, 2 * dx - 2, 66, { fill: "none", stroke: "#99a", rx: 6, dash: "4 3" }) + text(x0 + 58 + f * 2 * dx, 176, "foot " + (f + 1), { size: 10.5, fill: C.muted }));
  s += text(380, 60, "Shakespeare, Sonnet 18", { size: 12, fill: C.muted });
  s += rect(60, 200, 640, 78, NOTE) + text(380, 222, "iamb = unstressed + stressed (da-DUM)  ·  penta = five feet  ·  so ten syllables per line", { size: 12, weight: "bold" }) + text(380, 246, "When a line breaks the pattern, the variation is often the meaningful moment.", { size: 11.5 }) + text(380, 266, "Marks:  u = unstressed   / = stressed", { size: 11, fill: C.muted });
  fig(FIGS, "meter-scansion", 760, 294, s, "Scansion of a line of iambic pentameter with stress marks and five feet", "Scansion marks stressed and unstressed syllables. Iambic pentameter has five iambs per line. Breaks in the pattern often signal emphasis or a shift in feeling.");
}
// foils
{
  let s = defs + title("A foil sharpens both characters through contrast");
  s += rect(40, 60, 240, 150, { fill: "#dfeaf7", stroke: "#68b", rx: 12 }) + text(160, 86, "CHARACTER A", { size: 14, weight: "bold" }) + text(160, 112, "e.g. cautious\nrule-following\nsees obstacles", { size: 12 }) + rect(480, 60, 240, 150, { fill: "#f7e3d3", stroke: "#b86", rx: 12 }) + text(600, 86, "CHARACTER B (the foil)", { size: 14, weight: "bold" }) + text(600, 112, "e.g. impulsive\nrule-breaking\nsees opportunities", { size: 12 });
  s += rect(310, 110, 140, 52, { fill: "#f4e1a8", stroke: "#999", rx: 10 }) + text(380, 132, "same situation,", { size: 11.5, weight: "bold" }) + text(380, 148, "opposite choices", { size: 11.5, weight: "bold" }) + A(308, 136, 282, 136, "ah", 2.5) + A(452, 136, 478, 136, "ah", 2.5);
  s += rect(60, 232, 640, 44, NOTE) + text(380, 254, "Ask: which traits does each choice reveal in BOTH characters, and what theme does the contrast point toward?", { size: 11.5, weight: "bold" });
  fig(FIGS, "foil-contrast", 760, 292, s, "Two characters with opposing traits making opposite choices in the same situation", "A foil contrasts with another character so that the traits of both stand out. Look at how the pair respond differently to the same pressure, and what that suggests about theme.");
}
// unreliable narrator
{
  let s = defs + title("Unreliable narration: the gap between what is told and what is shown");
  s += pill(40, 70, 300, 70, "#dfeaf7", "WHAT THE NARRATOR SAYS\n'I was perfectly calm and\nreasonable throughout.'", { size: 12 }) + pill(420, 70, 300, 70, "#f7e3d3", "WHAT DETAILS REVEAL\nshaking hands, shouting, a\nbroken chair, others' fear", { size: 12 });
  s += rect(250, 170, 260, 56, { fill: "#f4e1a8", stroke: "#999", rx: 12 }) + text(380, 194, "THE GAP", { size: 14, weight: "bold" }) + text(380, 212, "reader infers the truth", { size: 11.5 }) + A(190, 142, 280, 168, "ah", 2.5) + A(570, 142, 480, 168, "ah", 2.5);
  s += rect(60, 244, 640, 44, NOTE) + text(380, 266, "Causes: self-interest, limited knowledge, youth, delusion, or deliberate lying. Always cite the textual clues.", { size: 11.5, weight: "bold" });
  fig(FIGS, "unreliable-gap", 760, 304, s, "Gap between a narrator's claim and details that reveal the truth, which the reader infers", "An unreliable narrator's account conflicts with details in the text. The distance between what is said and what is shown invites the reader to infer the truth, and that gap carries meaning.");
}
// irony types
{
  let s = defs + title("Three types of irony: expectation vs. reality");
  const col = (x, n, who, ex, c) => rect(x, 54, 232, 190, { fill: c, stroke: "#666", rx: 12 }) + text(x + 116, 80, n, { size: 14, weight: "bold" }) + text(x + 116, 100, who, { size: 10.5, fill: C.muted }) + text(x + 116, 136, ex, { size: 11 });
  s += col(20, "VERBAL", "speaker says one thing, means another", "Standing in a downpour:\n'Lovely weather we're having.'\n\nsarcasm, understatement", "#dfeaf7");
  s += col(264, "SITUATIONAL", "outcome opposes what we expect", "A fire station burns down.\n\nOr: a character's plan to\nprevent X is what causes X", "#e2f0dc");
  s += col(508, "DRAMATIC", "audience knows more than the character", "The reader knows the\n'friend' is a traitor while the\nhero trusts him.\n\nCreates tension or pity", "#f4e1a8");
  fig(FIGS, "irony-types", 760, 262, s, "Verbal, situational and dramatic irony with examples", "Verbal irony is a mismatch between statement and meaning, situational irony is a mismatch between expectation and outcome, and dramatic irony is a gap between what characters and audience know.");
}
// sonnet forms
{
  let s = defs + title("Two sonnet patterns: how the rhyme scheme shapes the argument");
  const col = (x, name, groups) => { let g = text(x + 160, 52, name, { size: 13, weight: "bold" }); let y = 64; groups.forEach(([lab, sch, c]) => { const hh = 17 * sch.length + 8; g += rect(x, y, 320, hh, { fill: c, stroke: "#99a", rx: 6 }); sch.split("").forEach((ch, i) => g += text(x + 18, y + 18 + i * 17, ch, { size: 12, weight: "bold", fill: RED })); g += text(x + 175, y + hh / 2 + 4, lab, { size: 11.5, weight: "bold" }); y += hh + 6; }); return g; };
  s += col(30, "PETRARCHAN (Italian)", [["octave: problem / question", "ABBAABBA", "#dfeaf7"], ["sestet: resolution / answer", "CDECDE", "#f4e1a8"]]);
  s += col(410, "SHAKESPEAREAN (English)", [["quatrain 1", "ABAB", "#dfeaf7"], ["quatrain 2", "CDCD", "#dfeaf7"], ["quatrain 3", "EFEF", "#dfeaf7"], ["couplet: punch / twist", "GG", "#f4e1a8"]]);
  s += L(380, 378, "Both are 14 lines of iambic pentameter. Form creates expectation: look for where the poem confirms or strains against it.", { fill: C.muted, size: 11 });
  fig(FIGS, "sonnet-forms", 760, 394, s, "Rhyme schemes of Petrarchan and Shakespearean sonnets", "A Petrarchan sonnet splits into an eight-line octave and six-line sestet, while a Shakespearean sonnet has three quatrains and a couplet. The structure supports how each poem develops its argument.");
}
// volta
{
  let s = defs + title("The volta: where the poem turns");
  const bar = (y, ttl, segs) => { let g = text(30, y - 8, ttl, { size: 12.5, weight: "bold", anchor: "start" }); let x = 30; segs.forEach(([n, lab, c]) => { const w = 700 * n / 14; g += rect(x, y, w, 40, { fill: c, stroke: "#777", rx: 4 }) + text(x + w / 2, y + 25, lab, { size: 11.5, weight: "bold" }); x += w; }); return g; };
  s += bar(64, "Petrarchan: volta at line 9", [[8, "lines 1–8: octave (problem / situation)", "#dfeaf7"], [6, "lines 9–14: sestet (turn → response)", "#f4e1a8"]]);
  s += bar(150, "Shakespearean: volta often at line 13 (or 9)", [[12, "lines 1–12: three quatrains develop the idea", "#dfeaf7"], [2, "13–14\ncouplet", "#f4e1a8"]]);
  s += A(30 + 700 * 8 / 14, 112, 30 + 700 * 8 / 14, 128, "ahr", 2.5).replace("", "") + A(30 + 700 * 12 / 14, 198, 30 + 700 * 12 / 14, 214, "ahr", 2.5).replace("", "");
  s += rect(60, 220, 640, 62, NOTE) + text(380, 244, "Signals of a turn: 'but,' 'yet,' 'still,' a change in tone, tense, or addressee, a question, a break in the pattern.", { size: 11.5, weight: "bold" }) + text(380, 266, "Always explain WHAT changes (argument, tone, perspective) and why the poet turns at that point.", { size: 11.5 });
  fig(FIGS, "volta-position", 760, 298, s, "Bars showing where the volta falls in Petrarchan and Shakespearean sonnets", "The volta is the poem's turn. In a Petrarchan sonnet it usually falls at line 9, and in a Shakespearean sonnet often at the couplet, though poets place it where it best serves meaning.");
}
// tragic flaw arc
{
  let s = defs + title("Tragic structure: how a flaw drives a fall");
  const x0 = 60, y0 = 220, w = 640;
  const pts = [[0, 110], [0.18, 130], [0.38, 150], [0.52, 142], [0.7, 90], [0.88, 40], [1, 20]];
  s += line(x0, y0, x0 + w, y0, { stroke: "#ccc", w: 1.5 }) + path(pts.map(([t, v], i) => (i ? "L " : "M ") + (x0 + t * w) + " " + (y0 - v)).join(" "), { stroke: RED, w: 4 });
  [[0.12, 124, "high status,\nadmired", 1], [0.35, 148, "FLAW (hamartia)\nshapes a key choice", 1], [0.55, 140, "reversal\n(peripeteia)", 0], [0.72, 86, "recognition\n(anagnorisis)", 1], [0.96, 22, "catastrophe", 0]].forEach(([t, v, lab, up]) => s += circle(x0 + t * w, y0 - v, 6, { fill: GOLD, stroke: "#7a5b00" }) + text(x0 + t * w, y0 - v - (up ? 26 : -26), lab, { size: 10.5, weight: "bold" }));
  s += L(380, 270, "The flaw must be traceable in the text: cite the choices and consequences that tie it to the outcome.", { fill: C.muted });
  fig(FIGS, "tragic-arc", 760, 288, s, "Curve showing a tragic hero's rise, flaw, reversal, recognition and catastrophe", "In classical tragedy a character's specific flaw shapes decisions that lead to reversal, recognition, and catastrophe. Strong analysis traces that cause and effect through the text.");
}
// frame narrative
{
  let s = defs + title("Frame narrative: a story inside a story");
  s += rect(40, 50, 680, 230, { fill: "#dfeaf7", stroke: "#68b", rx: 16 }) + text(380, 74, "FRAME NARRATIVE (outer story: narrator, listeners, occasion)", { size: 13, weight: "bold" });
  s += rect(120, 96, 520, 150, { fill: "#f4e1a8", stroke: "#b08d1a", rx: 14 }) + text(380, 120, "EMBEDDED STORY (the tale being told)", { size: 13, weight: "bold" }) + rect(220, 140, 320, 80, { fill: "#f7e3d3", stroke: "#b86", rx: 12 }) + text(380, 166, "possible deeper nesting", { size: 11.5 }) + text(380, 188, "(story within the story)", { size: 11.5, fill: C.muted });
  s += text(380, 270, "", {});
  s += rect(60, 296, 640, 40, NOTE) + text(380, 320, "Ask how the frame changes the embedded story: who is telling it, to whom, and why does that matter?", { size: 11.5, weight: "bold" });
  fig(FIGS, "frame-narrative", 760, 352, s, "Nested boxes showing a frame narrative containing an embedded story", "A frame narrative surrounds an embedded story. The relationship between the two, including who tells it and who listens, is itself meaningful and shapes how the inner story is understood.");
}
// free indirect discourse
{
  let s = defs + title("Free indirect discourse: blending narrator and character voice");
  const rows = [["Direct thought", "She thought, \"I'm tired of waiting for him.\"", "character's exact words, quotation marks, 'she thought'", "#dfeaf7"], ["Free indirect discourse", "Tired of waiting for him, she checked the clock. Surely he wasn't coming now?", "third person + her own mood and phrasing; no tag or quotes", "#f4e1a8"], ["Narrated summary", "She was growing tired of waiting.", "narrator reports from outside; no character voice", "#e2f0dc"]];
  rows.forEach(([n, ex, d, c], i) => { const y = 50 + i * 72; s += rect(30, y, 700, 62, { fill: c, stroke: "#777", rx: 10, w: i === 1 ? 2.5 : 1.5 }) + text(44, y + 20, n, { size: 12.5, weight: "bold", anchor: "start" }) + text(44, y + 38, ex, { size: 11, anchor: "start" }) + text(44, y + 54, d, { size: 10, fill: C.muted, anchor: "start" }); });
  s += A(740, 60, 740, 250, "ah", 1.5).replace("", "") + L(380, 280, "Free indirect discourse blurs whose judgment we are reading: that ambiguity is the effect to analyze.", { fill: C.muted, size: 11 });
  fig(FIGS, "free-indirect", 760, 296, s, "Three ways of presenting thought: direct thought, free indirect discourse and narrated summary", "Free indirect discourse sits between direct quotation and narrator summary. The character's voice colors the narration without quotation marks, creating closeness and sometimes irony.");
}
