// Inserts the diagrams defined in scripts/ap/<hub>_ins.mjs into src/hubs/<hub>/content.js study guides (idempotent).
// Usage: node scripts/ap/apply.mjs biology
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const hub = process.argv[2];
const mod = await import(pathToFileURL(path.resolve(`scripts/ap/${hub}_ins.mjs`)).href);
// Figures for material added later live in <hub>_ins_new*.mjs and are applied along with the originals.
const extra = fs.readdirSync("scripts/ap").filter((f) => f.startsWith(`${hub}_ins_new`) && f.endsWith(".mjs")).sort();
const ALL_INS = [...mod.INS];
for (const f of extra) ALL_INS.push(...(await import(pathToFileURL(path.resolve(`scripts/ap/${f}`)).href)).INS);
const file = `src/hubs/${hub}/content.js`;
let src = fs.readFileSync(file, "utf8");
const byUnit = {};
for (const ins of ALL_INS) (byUnit[ins.unit] ||= []).push(ins);
let done = 0;
for (const [unit, list] of Object.entries(byUnit)) {
  const re = new RegExp(`^(  "${unit}": )(".*")(,?)$`, "m");
  const m = re.exec(src);
  if (!m) throw new Error(`unit ${unit} not found in ${file}`);
  let html = JSON.parse(m[2]);
  for (const ins of list) {
    // drop an earlier insertion of the same figure
    html = html.replace(new RegExp(`\\n*  <!--apv:${ins.id}-->[\\s\\S]*?<!--/apv:${ins.id}-->`), "");
    // Figures for added material go inside its "New" box: { gap: "<gap id>" } places the figure at the end of that
    // block, or right after the html snippet given in `after` (searched from the block's start).
    if (ins.gap) {
      const start = html.indexOf(`<!--gap:${ins.gap}-->`);
      const close = `\n  </div>\n  <!--/gap:${ins.gap}-->`;
      const end = html.indexOf(close, start);
      if (start < 0 || end < 0) { if (process.env.CHECK) { console.error(`NO GAP ${ins.id}`); continue; } throw new Error(`gap block ${ins.gap} not found for ${ins.id}`); }
      let at = end;
      if (ins.after) {
        const a = html.indexOf(ins.after, start);
        if (a < 0 || a > end) { if (process.env.CHECK) { console.error(`NO AFTER ${ins.id}`); continue; } throw new Error(`'after' text not found in gap ${ins.gap} for ${ins.id}`); }
        at = a + ins.after.length;
      }
      html = html.slice(0, at) + "\n  " + ins.html + html.slice(at);
      done++;
      continue;
    }
    // match the anchor against the text with tags removed (anchors are plain sentences from the study guide)
    let plain = "", map = [], inTag = false;
    for (let i = 0; i < html.length; i++) { const ch = html[i]; if (ch === "<") inTag = true; if (!inTag) { plain += ch; map.push(i); } if (ch === ">") inTag = false; }
    const first = plain.indexOf(ins.anchor);
    if (first < 0) { if (process.env.CHECK) { console.error(`NOT FOUND ${ins.id}`); continue; } throw new Error(`anchor not found for ${ins.id}: ${ins.anchor.slice(0, 50)}`); }
    if (plain.indexOf(ins.anchor, first + 1) >= 0) { if (process.env.CHECK) { console.error(`NOT UNIQUE ${ins.id}`); continue; } throw new Error(`anchor not unique for ${ins.id}: ${ins.anchor.slice(0, 50)}`); }
    const htmlPos = map[first + ins.anchor.length - 1];
    let end = html.indexOf("\n\n", htmlPos);
    if (end < 0) end = html.length;
    html = html.slice(0, end) + "\n\n  " + ins.html + html.slice(end);
    done++;
  }
  src = src.replace(re, (all, a, b, c) => a + JSON.stringify(html) + c);
}
if (!process.env.CHECK) fs.writeFileSync(file, src);
console.log(`${hub}: ${done} diagrams inserted/updated`);
