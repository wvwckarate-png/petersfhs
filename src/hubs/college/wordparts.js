// {{wp:peri-=around|card/i=heart|-itis=inflammation}}: a row of colored word-part chips for Medical Terminology.
// A part ending in "-" is a prefix, one starting with "-" is a suffix, anything else is a root (a "/" marks the combining vowel).
export function wpParts(spec) {
  return spec.split("|").map((s) => {
    const i = s.indexOf("=");
    const raw = (i < 0 ? s : s.slice(0, i)).trim(), meaning = i < 0 ? "" : s.slice(i + 1).trim();
    const kind = raw.endsWith("-") ? "prefix" : raw.startsWith("-") ? "suffix" : "root";
    const [stem, vowel] = raw.split("/");
    return { raw, stem, vowel: vowel || "", meaning, kind };
  });
}
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
export function wpHtml(spec) {
  const chips = wpParts(spec).map((p, i) => `${i ? '<span class="wp-plus">+</span>' : ""}<span class="wp-chip ${p.kind}"><b>${esc(p.stem)}${p.vowel ? `<i>/${esc(p.vowel)}</i>` : ""}</b><small>${esc(p.meaning)}</small></span>`);
  return `<span class="wp-chips">${chips.join("")}</span>`;
}
