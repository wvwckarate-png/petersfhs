// Helpers for the diagrams added to the AP Biology, Chemistry, and Physics 2 study guides (authoring time only).
import { molSvg, molSvgParts, rxnSvg } from "../lib/structures.mjs";
export { molSvg, molSvgParts, rxnSvg };
export const C = { ink: "#232323", muted: "#666", teal: "#0F7C86", orange: "#E8734A", red: "#D2451E", blue: "#2E6BC6", green: "#2E7D32", gold: "#C99700", purple: "#7A3FB8", gray: "#9aa0a6", light: "#F3F1EA", line: "#D9D6CC" };
export const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const f = (n) => (Math.round(n * 10) / 10).toString();
export function svg(w, h, inner, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" style="width:100%;max-width:${w}px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif">${inner}</svg>`;
}
export function text(x, y, s, o = {}) {
  const { size = 14, anchor = "middle", weight = "normal", fill = C.ink, italic = false, lh = 1.25, rotate } = o;
  const lines = String(s).split("\n");
  const tr = rotate ? ` transform="rotate(${rotate} ${f(x)} ${f(y)})"` : "";
  const body = lines.map((ln, i) => `<tspan x="${f(x)}" dy="${i ? f(size * lh) : 0}">${esc(ln)}</tspan>`).join("");
  return `<text x="${f(x)}" y="${f(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic ? ' font-style="italic"' : ""}${tr}>${body}</text>`;
}
export const line = (x1, y1, x2, y2, o = {}) => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${o.stroke || C.ink}" stroke-width="${o.w || 2}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}${o.marker ? ` marker-end="url(#${o.marker})"` : ""}/>`;
export const circle = (x, y, r, o = {}) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${o.fill || "none"}" stroke="${o.stroke || "none"}" stroke-width="${o.w || 1.5}"/>`;
export const rect = (x, y, w, h, o = {}) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${o.rx ?? 6}" fill="${o.fill || "none"}" stroke="${o.stroke || "none"}" stroke-width="${o.w || 1.5}"${o.opacity ? ` opacity="${o.opacity}"` : ""}/>`;
export const path = (d, o = {}) => `<path d="${d}" fill="${o.fill || "none"}" stroke="${o.stroke || C.ink}" stroke-width="${o.w || 2}" stroke-linecap="round" stroke-linejoin="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}${o.marker ? ` marker-end="url(#${o.marker})"` : ""}/>`;
// Arrowhead marker definitions (reference with marker: "ah" or "ahr" / "ahb")
export const defs = `<defs>${[["ah", C.ink], ["ahr", C.red], ["ahb", C.blue], ["ahg", C.green], ["aho", C.orange]].map(([id, c]) => `<marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`).join("")}</defs>`;
export const arrow = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, { marker: o.marker || "ah", stroke: o.stroke, w: o.w || 2, dash: o.dash });
export function figure(id, inner, caption) {
  return `<!--apv:${id}-->\n  <div class="diagram">\n    ${inner}\n    <p class="diagram-caption" style="text-align:center; font-size:0.9em; color:#666; margin-top:8px;">${caption}</p>\n  </div>\n<!--/apv:${id}-->`;
}
// A row of small boxed structures (OpenChemLib), each with a name and a one-line note.
export function molGrid(id, items, caption, cols = 3, k = 1.6) {
  const sized = (smi, name) => { const p = molSvgParts(smi); return molSvg(smi, name).replace('<svg class="mol"', `<svg class="mol" style="width:${Math.round(p.w * k)}px;max-width:100%;height:auto"`); };
  const cells = items.map(([smi, name, note]) => `<figure style="margin:0;background:#fff;border:1px solid #ECEAE3;border-radius:10px;padding:8px 10px 6px;text-align:center;flex:1 1 ${Math.floor(100 / cols) - 3}%;min-width:150px;box-sizing:border-box">${sized(smi, name)}<figcaption style="margin-top:4px;font-size:13px;line-height:1.3"><strong>${name}</strong>${note ? `<br><span style="color:#666">${note}</span>` : ""}</figcaption></figure>`).join("");
  return figure(id, `<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">${cells}</div>`, caption);
}
