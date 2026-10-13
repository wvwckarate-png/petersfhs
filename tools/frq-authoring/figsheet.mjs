// Contact sheet of every figure in an FRQ exam: node tools/frq-authoring/figsheet.mjs <hub> <name> <out.png>
import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; import { execFileSync } from "child_process";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const [hub, name, out] = process.argv.slice(2);
const ex = (await import(path.resolve(HERE, `../../src/hubs/${hub}/frqExams/${name}.js`))).default;
const cell = (label, f) => f.table
  ? `<div style="border:1px solid #bbb;padding:6px;background:#fff"><b>${label}</b><table border=1 cellpadding=4 style="border-collapse:collapse;font-size:12px"><tr>${f.table.headers.map((h) => `<th>${h}</th>`).join("")}</tr>${f.table.rows.map((r) => "<tr>" + r.map((c) => `<td>${c}</td>`).join("") + "</tr>").join("")}</table></div>`
  : `<div style="border:1px solid #bbb;padding:6px;background:#fff"><b>${label}</b> <span style="font:11px Arial;color:#666">${(f.caption || "").slice(0, 70)}</span><div style="width:520px">${f.svg.replace("<svg ", '<svg style="width:100%;height:auto" ')}</div></div>`;
const cells = [];
ex.questions.forEach((q) => {
  (q.figures || []).forEach((f, i) => cells.push(cell(`Q${q.id} fig${i}`, f)));
  q.parts.forEach((p) => { (p.figures || []).forEach((f, i) => cells.push(cell(`Q${q.id}.${p.id} fig${i}`, f))); (p.modelFigures || []).forEach((f, i) => cells.push(cell(`Q${q.id}.${p.id} MODEL${i}`, f))); });
});
fs.writeFileSync(path.join(HERE, "_sheet.html"), `<html><body style="margin:8px;background:#eee;font:13px Arial"><div style="display:grid;grid-template-columns:560px 560px;gap:8px">${cells.join("")}</div></body></html>`);
execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--window-size=1160,${200 + Math.ceil(cells.length / 2) * 380}`, `--screenshot=${out}`, "file://" + path.join(HERE, "_sheet.html")], { stdio: "ignore" });
fs.rmSync(path.join(HERE, "_sheet.html"));
console.log(cells.length + " figures");
