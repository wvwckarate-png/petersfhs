import { fileURLToPath } from 'url';
import path from 'path';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../src/hubs');
// usage: node sheet.mjs <hub> <examfile.js> <out.png> [onlyFigures=1]
import fs from 'fs'; import { execFileSync } from 'child_process';
const [hub, file, out] = process.argv.slice(2);
const ex = (await import(`${ROOT}/${hub}/exams/${file}`)).default;
const qs = Array.isArray(ex) ? ex : ex.questions, sets = ex.sets || {};
const fg = (f) => f.svg ? `<div style="max-width:520px">${f.svg.replace('<svg ','<svg style="width:100%;height:auto" ')}</div>` : `<table border=1 cellpadding=4 style="border-collapse:collapse;font-size:13px">${(f.table.headers.length?'<tr>'+f.table.headers.map(h=>`<th>${h}</th>`).join('')+'</tr>':'')+f.table.rows.map(r=>'<tr>'+r.map(c=>`<td>${c}</td>`).join('')+'</tr>').join('')}</table>`;
let html = '<html><body style="font-family:Arial;font-size:13px;width:1100px;margin:8px"><div style="column-count:2;column-gap:20px">';
const shown = new Set();
for (const q of qs) {
  const hasFig = (q.figures && q.figures.length) || q.setId;
  if (!hasFig) continue;
  html += `<div style="break-inside:avoid;border:1px solid #ccc;padding:8px;margin-bottom:10px">`;
  if (q.setId && !shown.has(q.setId)) { shown.add(q.setId); const s = sets[q.setId]; html += `<div style="background:#f4f2ea;padding:6px"><i>SET ${q.setId}</i><br>${[].concat(s.text||[]).join('<br>')}${(s.figures||[]).map(fg).join('')}</div>`; }
  html += `<b>${q.id}</b> (U${q.unit}) ${q.stem}${(q.figures||[]).map(fg).join('')}<br>` + q.choices.map((c,i)=>`${i===q.correct?'<b>':''}${'ABCD'[i]}. ${c}${i===q.correct?' ✔</b>':''}`).join('<br>') + `</div>`;
}
html += '</div></body></html>';
fs.writeFileSync('_sheet.html', html);
execFileSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new','--disable-gpu','--hide-scrollbars','--window-size=1140,'+(process.argv[5]||'2400'),'--screenshot='+out,'file://'+process.cwd()+'/_sheet.html'],{stdio:'ignore'});
