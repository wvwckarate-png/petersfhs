// Applies reviewed corrections to the generated MCQ exam files.
// usage: node tools/exam-authoring/apply_overrides.mjs [hub ...]      (run from the project root; default: all four)
//
// Overrides live in tools/exam-authoring/overrides/<hub>.json:
//   { "<exam file>": { "<question id>": { "explanation"?: "...", "stem"?: "...", "choices"?: [...], "correct"?: n } } }
// They are applied by question id to src/hubs/<hub>/exams/<exam file>, so they survive a rebuild of the exam from its pool
// (build.mjs runs this script after writing). Question ids and choice order come from the deterministic build, so saved
// exam progress keeps lining up. A "correct" override changes how saved answers are scored; use it only for a real key fix.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const hubs = process.argv.slice(2).length ? process.argv.slice(2) : ["chemistry", "biology", "physics2", "physics1"];

for (const hub of hubs) {
  const ovFile = `${ROOT}/tools/exam-authoring/overrides/${hub}.json`;
  if (!fs.existsSync(ovFile)) continue;
  const ov = JSON.parse(fs.readFileSync(ovFile, "utf8"));
  for (const [file, byId] of Object.entries(ov)) {
    const p = `${ROOT}/src/hubs/${hub}/exams/${file}`;
    const src = fs.readFileSync(p, "utf8");
    // generated files are "<comment>\nconst NAME = <JSON>;\n\nexport default NAME;\n"
    const m = src.match(/^([\s\S]*?const \w+ = )([\s\S]*?)(;\n\nexport default \w+;\n?)$/);
    if (!m) throw new Error(`${p}: unexpected layout`);
    const data = JSON.parse(m[2]);
    const list = Array.isArray(data) ? data : data.questions;
    let n = 0;
    const missing = [];
    for (const [id, o] of Object.entries(byId)) {
      const q = list.find((x) => x.id === id);
      if (!q) { missing.push(id); continue; }
      for (const k of ["stem", "choices", "correct", "explanation"]) if (o[k] !== undefined) q[k] = o[k];
      n++;
    }
    const indent = Array.isArray(data) ? 2 : 1;
    fs.writeFileSync(p, m[1] + JSON.stringify(data, null, indent) + m[3]);
    console.log(`${hub}/${file}: ${n} overrides applied${missing.length ? `; NOT FOUND: ${missing.join(", ")}` : ""}`);
  }
}
