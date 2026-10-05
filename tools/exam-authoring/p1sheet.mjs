// Contact sheet of the figures only: node tools/exam-authoring/p1sheet.mjs <N> <outPrefix> [perPage=8]
import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; import { execFileSync } from "child_process";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const [N, prefix, per = "8"] = process.argv.slice(2);
const src = fs.readFileSync(path.resolve(HERE, `../../src/hubs/physics1/exams/exam${N}.js`), "utf8");
const qs = new Function(src.replace(/export default[^;]*;?/, "") + `; return EXAM_${N}_QUESTIONS;`)().filter((q) => q.figures);
const pages = Math.ceil(qs.length / +per);
for (let p = 0; p < pages; p++) {
  const chunk = qs.slice(p * +per, (p + 1) * +per);
  const cells = chunk.map((q) => `<div style="border:1px solid #bbb;padding:6px;background:#fff"><b style="font:12px Arial">${q.id}</b> <span style="font:11px Arial;color:#555">${q.stem.slice(0, 90)}</span>${q.figures.map((f) => `<div style="width:500px">${f.svg.replace("<svg ", '<svg style="width:100%;height:auto" ')}</div>`).join("")}</div>`).join("");
  fs.writeFileSync(path.join(HERE, "_sheet.html"), `<html><body style="margin:8px;background:#eee"><div style="display:grid;grid-template-columns:540px 540px;gap:8px;width:1100px">${cells}</div></body></html>`);
  execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=1120,1500", `--screenshot=${prefix}${p + 1}.png`, "file://" + path.join(HERE, "_sheet.html")], { stdio: "ignore" });
}
fs.rmSync(path.join(HERE, "_sheet.html"));
console.log(pages + " pages");
