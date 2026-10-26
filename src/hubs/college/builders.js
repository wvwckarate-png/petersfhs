// Helpers that turn compact, authored unit data into the same study-guide HTML structure
// (hero / toc / h2 sections / callouts / practice set) and question objects the AP hubs use.
// Shared by every College Hub course.

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Deterministic PRNG so shuffled choice order is stable between loads.
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Build practice questions from authored tuples:
 *   [topic, stem, [correct, wrong, wrong, wrong], explanation]
 * Choices are shuffled with a seed derived from the question id, so the order is stable.
 * Explanations must not refer to choices by letter (the order is shuffled).
 */
export function buildQuestions(unitId, tuples) {
  // The correct answer's position cycles through A-D in shuffled blocks of four, so every
  // position is used about equally often; the wrong answers are then shuffled around it.
  const blockRand = mulberry32(hashSeed(`pos:${unitId}`));
  let block = [];
  return tuples.map(([topic, stem, choices, explanation], i) => {
    const id = `${unitId}-${i + 1}`;
    if (block.length === 0) {
      block = [0, 1, 2, 3];
      for (let k = block.length - 1; k > 0; k--) {
        const j = Math.floor(blockRand() * (k + 1));
        [block[k], block[j]] = [block[j], block[k]];
      }
    }
    const correctPos = block.pop();
    const rand = mulberry32(hashSeed(`${unitId}:${i}:${stem}`));
    const wrong = choices.slice(1);
    for (let k = wrong.length - 1; k > 0; k--) {
      const j = Math.floor(rand() * (k + 1));
      [wrong[k], wrong[j]] = [wrong[j], wrong[k]];
    }
    const out = [];
    let w = 0;
    for (let pos = 0; pos < choices.length; pos++) out.push(pos === correctPos ? choices[0] : wrong[w++]);
    return { id, topic, stem, choices: out, correct: correctPos, explanation };
  });
}

import { FIGS } from "./figures";
import { wpHtml } from "./wordparts";

const STRUCT_TOKEN = /\{\{(mol|rxn|svg|fig|wp):([\s\S]+?)\}\}/g;
export const figCredit = (f) => `Source: ${f.author || "Wikimedia Commons"} (${f.license}), via <a href='${f.page}' target='_blank' rel='noopener noreferrer'>Wikimedia Commons</a>.`;
/** Replace {{mol:...}} / {{rxn:...}} tokens in HTML with their pre-rendered SVG. */
export function expandStructs(html, structs) {
  return html.replace(STRUCT_TOKEN, (all, kind, spec) => {
    if (kind === "wp") return wpHtml(spec);
    if (kind === "fig") { const f = FIGS[spec]; return f ? `<img class="inline-fig" src="${f.src}" alt="${esc(f.alt)}" loading="lazy" />` : `<span class="mol-missing">[figure missing]</span>`; }
    return structs?.[`${kind}:${spec}`] || `<span class="mol-missing">[structure missing]</span>`;
  });
}

function renderBlock(b) {
  if (b.p) return `  <p>${b.p}</p>`;
  if (b.mol) return `  <figure class="mol-fig">{{mol:${b.mol}}}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ""}</figure>`;
  if (b.svg) return `  <figure class="mol-fig">{{svg:${b.svg}}}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ""}</figure>`;
  if (b.rxn) return `  <figure class="mol-fig">{{rxn:${b.rxn}}}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ""}</figure>`;
  if (b.mols) return `  <div class="mol-row">${b.mols.map(([smi, name, note]) => `<figure>{{${smi.startsWith("svg:") ? smi : `mol:${smi}`}}}<figcaption>${name}${note ? `<span>${note}</span>` : ""}</figcaption></figure>`).join("")}</div>`;
  if (b.figId) { const f = FIGS[b.figId]; return f ? `  <figure class="wp-fig">\n    <a href="${f.src}" target="_blank" rel="noopener noreferrer" title="Open full size"><img src="${f.src}" alt="${esc(f.alt)}" loading="lazy" /></a>\n    <figcaption><strong>${b.caption || ""}</strong> <span class="wp-credit">${figCredit(f)}</span></figcaption>\n  </figure>` : ""; }
  if (b.fig) return `  <figure class="wp-fig">\n    <a href="${b.fig.src}" target="_blank" rel="noopener noreferrer" title="Open full size"><img src="${b.fig.src}" alt="${esc(b.fig.alt)}" loading="lazy" /></a>\n    <figcaption><strong>${b.fig.caption}</strong> <span class="wp-credit">${b.fig.credit}</span></figcaption>\n  </figure>`;
  if (b.table) {
    const head = b.table.headers.map((h) => `<th>${h}</th>`).join("");
    const rows = b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n      ");
    return `  <table class="wp-table">\n    <thead><tr>${head}</tr></thead>\n    <tbody>\n      ${rows}\n    </tbody>\n  </table>`;
  }
  if (b.key) return `  <div class="key-idea">\n    <span class="tag-label idea">Key Idea</span>\n    <p>${b.key}</p>\n  </div>`;
  if (b.trap) return `  <div class="trap">\n    <span class="tag-label trap">Watch Out For This</span>\n    <p>${b.trap}</p>\n  </div>`;
  if (b.skill) return `  <div class="skillbox">\n    <span class="tag-label skill">${b.skill.label}</span>\n    <p>${b.skill.text}</p>\n  </div>`;
  if (b.worked) return `  <div class="worked">\n    <span class="tag-label example">${b.worked.label || "Worked Example"}</span>\n    <p>${b.worked.q}</p>\n    <details class="solution"><summary>Show the reasoning</summary>\n      <div class="sol-content">${b.worked.a}</div>\n    </details>\n  </div>`;
  if (b.recap) return `  <div class="recap">\n    <span class="tag-label recap">Before You Move On</span>\n    <ul>\n${b.recap.map((r) => `      <li>${r}</li>`).join("\n")}\n    </ul>\n  </div>`;
  return "";
}

/** Build one unit's study-guide HTML from authored data. */
export function buildStudyHtml(courseLabel, unit, qCount) {
  const toc = unit.sections.map((s) => `    <li><a href="#${s.id}">${s.num} ${esc(s.title)}</a></li>`).join("\n");
  const sections = unit.sections.map((s) => {
    return `  <h2 id="${s.id}"><span class="num">${s.num}</span>${esc(s.title)}</h2>\n${s.blocks.map(renderBlock).join("\n\n")}`;
  }).join("\n\n");
  const practice = unit.practice.map((p, i) => `  <div class="practice-item"><span class="qnum-badge">${i + 1}</span><span>${p[0]}</span></div>`).join("\n");
  const answers = unit.practice.map((p, i) => `        <p><strong>${i + 1}.</strong> ${p[1]}</p>`).join("\n");
  return `
<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · ${esc(courseLabel)}</div>
  <h1>${esc(unit.name)}</h1>
  <p class="sub">${unit.intro}</p>
  <div class="hero-pills">
    <span class="pill">${unit.sections.length} topics</span>
    <span class="pill">${unit.cards.length} flashcards</span>
    <span class="pill">${qCount} practice questions</span>
  </div>
</div>

${unit.companion ? `<div class="companion">
  <div class="companion-label">Study this unit alongside</div>
  <div class="companion-grid">
    <div><span class="companion-src">Organic Chemistry as a Second Language</span><span class="companion-ref">${unit.companion.ocsl}</span></div>
    <div><span class="companion-src">Khan Academy</span><span class="companion-ref">${unit.companion.khan}</span></div>
  </div>
  ${unit.companion.note ? `<p class="companion-note">${unit.companion.note}</p>` : ""}
</div>
` : ""}
<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
${toc}
    <li><a href="#practice">Unit ${unit.id} Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

${sections}

  <h2 id="practice"><span class="num">✎</span>Unit ${unit.id} Practice Set</h2>
  <p>Work through these before checking the answer key.</p>
${practice}

  <div class="answer-key">
    <details><summary>Check your answers</summary>
      <div class="a-content">
${answers}
      </div>
    </details>
  </div>

</div>
`;
}

/** Assemble the content bundle the generic course page expects. */
export function buildCourseContent(courseLabel, units, structs = {}) {
  const UNITS = [], STUDY_CONTENT = {}, QUESTIONS = {}, FLASHCARDS = {};
  units.forEach((u) => {
    const qs = buildQuestions(u.id, u.questions);
    UNITS.push({ id: u.id, name: u.name, tag: `${u.cards.length} cards` });
    QUESTIONS[u.id] = qs;
    FLASHCARDS[u.id] = u.cards.map(([term, meaning, note, ex]) => ({ term, meaning, ...(note ? { note } : {}), ...(ex ? { ex } : {}) }));
    STUDY_CONTENT[u.id] = expandStructs(buildStudyHtml(courseLabel, u, qs.length), structs);
  });
  return { UNITS, STUDY_CONTENT, QUESTIONS, FLASHCARDS, STRUCTS: structs };
}
