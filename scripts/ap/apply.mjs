// Inserts the diagrams defined in scripts/ap/<hub>_ins.mjs into src/hubs/<hub>/content.js study guides (idempotent).
// Usage: node scripts/ap/apply.mjs biology
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const hub = process.argv[2];
const mod = await import(pathToFileURL(path.resolve(`scripts/ap/${hub}_ins.mjs`)).href);
const file = `src/hubs/${hub}/content.js`;
let src = fs.readFileSync(file, "utf8");
const byUnit = {};
for (const ins of mod.INS) (byUnit[ins.unit] ||= []).push(ins);
let done = 0;
for (const [unit, list] of Object.entries(byUnit)) {
  const re = new RegExp(`^(  "${unit}": )(".*")(,?)$`, "m");
  const m = re.exec(src);
  if (!m) throw new Error(`unit ${unit} not found in ${file}`);
  let html = JSON.parse(m[2]);
  for (const ins of list) {
    // drop an earlier insertion of the same figure
    html = html.replace(new RegExp(`\\n*  <!--apv:${ins.id}-->[\\s\\S]*?<!--/apv:${ins.id}-->`), "");
    // match the anchor against the text with tags removed (anchors are plain sentences from the study guide)
    let plain = "", map = [], inTag = false;
    for (let i = 0; i < html.length; i++) { const ch = html[i]; if (ch === "<") inTag = true; if (!inTag) { plain += ch; map.push(i); } if (ch === ">") inTag = false; }
    const first = plain.indexOf(ins.anchor);
    if (first < 0) throw new Error(`anchor not found for ${ins.id}: ${ins.anchor.slice(0, 50)}`);
    if (plain.indexOf(ins.anchor, first + 1) >= 0) throw new Error(`anchor not unique for ${ins.id}: ${ins.anchor.slice(0, 50)}`);
    const htmlPos = map[first + ins.anchor.length - 1];
    let end = html.indexOf("\n\n", htmlPos);
    if (end < 0) end = html.length;
    html = html.slice(0, end) + "\n\n  " + ins.html + html.slice(end);
    done++;
  }
  src = src.replace(re, (all, a, b, c) => a + JSON.stringify(html) + c);
}
fs.writeFileSync(file, src);
console.log(`${hub}: ${done} diagrams inserted/updated`);
