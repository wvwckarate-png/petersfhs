// Renders SMILES strings (and simple reaction schemes) to clean inline SVG with OpenChemLib.
// Used only at authoring time by scripts/build-structures.mjs; the browser never loads OpenChemLib.
import OCL from "openchemlib";

const BOND_PX = 22;     // pixels per bond length, so every structure shares one scale
const MARGIN = 4;

function stripSvg(svg) {
  return svg
    .replace(/<style>[\s\S]*?<\/style>/g, "")
    .replace(/<(line|circle)[^>]*class="event"[^>]*\/>/g, "")
    .replace(/\sid="[^"]*"/g, "")
    .replace(/\n\s*/g, "");
}

function parseSvg(svg) {
  const w = parseFloat(/width="([\d.]+)px"/.exec(svg)[1]);
  const h = parseFloat(/height="([\d.]+)px"/.exec(svg)[1]);
  const vb = /viewBox="([^"]+)"/.exec(svg)[1];
  const inner = svg.slice(svg.indexOf(">") + 1, svg.lastIndexOf("</svg>"));
  return { w, h, vb, inner };
}

export function molSvgParts(smiles) {
  const mol = OCL.Molecule.fromSmiles(smiles);
  const n = mol.getAllAtoms();
  let avg = mol.getAverageBondLength();
  if (!avg || avg < 0.1) avg = 1.5;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < n; i++) {
    const x = mol.getAtomX(i), y = mol.getAtomY(i);
    minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }
  const w = Math.max(60, ((maxX - minX) / avg) * BOND_PX + 40);
  const h = Math.max(46, ((maxY - minY) / avg) * BOND_PX + 40);
  const raw = mol.toSVG(Math.ceil(w), Math.ceil(h), "m", {
    autoCrop: true, autoCropMargin: MARGIN, suppressChiralText: true, suppressCIPParity: true, suppressESR: true,
    strokeWidth: 1.3, fontWeight: "normal",
  });
  // Pseudo-element labels for R groups: * -> R, [Kr] -> R', [Rn] -> X. Those placeholders are never real atoms here;
  // their label color and the radical dot OCL gives a zero-valence atom are removed.
  let svg = stripSvg(raw);
  if (/\[(Kr|Rn)\]/.test(smiles)) svg = svg.replace(/<circle[^>]*r="1\.44"[^>]*\/>/g, "");
  svg = svg.replace(/>\?</g, ">R<").replace(/>Kr</g, ">R′<").replace(/>Rn</g, ">X<").replace(/fill="rgb\(66,158,176\)"/g, 'fill="rgb(0,0,0)"');
  return parseSvg(svg);
}

export function molSvg(smiles, label) {
  const p = molSvgParts(smiles);
  return `<svg class="mol" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${(label || "Chemical structure").replace(/"/g, "'")}" width="${p.w}" height="${p.h}" viewBox="${p.vb}">${p.inner}</svg>`;
}

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Reaction scheme:  "A + B >> C + D | above-arrow text; second line | below-arrow text"
// Use "<=>" for an equilibrium arrow. Molecules are separated by " + " (with spaces).
export function rxnSvg(spec) {
  const [body, above = "", below = ""] = spec.split("|").map((s) => s.trim());
  const m = /^(.*?)\s*(>>|<=>|<->)\s*(.*)$/.exec(body);
  if (!m) throw new Error("bad reaction: " + spec);
  const [, left, arrowType, right] = m;
  const side = (s) => s.split(" + ").map((x) => x.trim()).filter(Boolean).map((smi) => molSvgParts(smi));
  const L = side(left), R = side(right);
  const aLines = above ? above.split(";").map((s) => s.trim()) : [];
  const bLines = below ? below.split(";").map((s) => s.trim()) : [];
  const charW = 6.4;
  const textW = Math.max(0, ...aLines.concat(bLines).map((s) => s.length * charW));
  const arrowLen = Math.max(54, textW + 18);
  const labelH = 15;
  const upH = aLines.length * labelH + 6, downH = bLines.length * labelH + 10;
  const molH = Math.max(...L.concat(R).map((p) => p.h), 40);
  const H = Math.max(molH, 2 * Math.max(upH, downH) + 8);
  const cy = H / 2;
  let x = 4, out = "";
  const place = (arr) => arr.forEach((p, i) => {
    if (i > 0) { out += `<text x="${x + 8}" y="${cy + 6}" text-anchor="middle" font-size="18" fill="#222">+</text>`; x += 16; }
    out += `<svg x="${x}" y="${cy - p.h / 2}" width="${p.w}" height="${p.h}" viewBox="${p.vb}">${p.inner}</svg>`;
    x += p.w;
  });
  place(L);
  x += 8;
  const ax0 = x, ax1 = x + arrowLen;
  if (arrowType === ">>") {
    out += `<line x1="${ax0}" y1="${cy}" x2="${ax1 - 2}" y2="${cy}" stroke="#222" stroke-width="1.5"/><polygon points="${ax1},${cy} ${ax1 - 9},${cy - 4.5} ${ax1 - 9},${cy + 4.5}" fill="#222"/>`;
  } else if (arrowType === "<->") {
    out += `<line x1="${ax0 + 2}" y1="${cy}" x2="${ax1 - 2}" y2="${cy}" stroke="#222" stroke-width="1.5"/><polygon points="${ax1},${cy} ${ax1 - 9},${cy - 4.5} ${ax1 - 9},${cy + 4.5}" fill="#222"/><polygon points="${ax0},${cy} ${ax0 + 9},${cy - 4.5} ${ax0 + 9},${cy + 4.5}" fill="#222"/>`;
  } else {
    out += `<line x1="${ax0}" y1="${cy - 3.5}" x2="${ax1}" y2="${cy - 3.5}" stroke="#222" stroke-width="1.4"/><polyline points="${ax1 - 8},${cy - 8} ${ax1},${cy - 3.5}" fill="none" stroke="#222" stroke-width="1.4"/>`;
    out += `<line x1="${ax0}" y1="${cy + 3.5}" x2="${ax1}" y2="${cy + 3.5}" stroke="#222" stroke-width="1.4"/><polyline points="${ax0 + 8},${cy + 8} ${ax0},${cy + 3.5}" fill="none" stroke="#222" stroke-width="1.4"/>`;
  }
  aLines.forEach((t, i) => { out += `<text x="${(ax0 + ax1) / 2}" y="${cy - 8 - (aLines.length - 1 - i) * labelH}" text-anchor="middle" font-size="12" fill="#222">${esc(t)}</text>`; });
  bLines.forEach((t, i) => { out += `<text x="${(ax0 + ax1) / 2}" y="${cy + 20 + i * labelH}" text-anchor="middle" font-size="12" fill="#222">${esc(t)}</text>`; });
  x = ax1 + 8;
  place(R);
  const W = Math.ceil(x + 4);
  return `<svg class="mol rxn" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reaction scheme" width="${W}" height="${Math.ceil(H)}" viewBox="0 0 ${W} ${Math.ceil(H)}">${out}</svg>`;
}
