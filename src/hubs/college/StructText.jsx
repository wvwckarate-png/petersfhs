import React from "react";
import RichText from "../shared/RichText";
import { FIGS } from "./figures";
import { wpParts } from "./wordparts";

// Text that may contain {{mol:SMILES}} / {{rxn:...}} tokens. Structure SVGs are pre-rendered at
// authoring time (scripts/build-structures.mjs) and looked up in the course's `structs` map.
export const WordParts = ({ spec }) => (
  <span className="wp-chips">
    {wpParts(spec).map((p, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="wp-plus">+</span>}
        <span className={`wp-chip ${p.kind}`}><b>{p.stem}{p.vowel && <i>/{p.vowel}</i>}</b><small>{p.meaning}</small></span>
      </React.Fragment>
    ))}
  </span>
);

const TOKEN = /\{\{(mol|rxn|svg|fig|wp):([\s\S]+?)\}\}/g;

export default function StructText({ text, structs }) {
  if (typeof text !== "string" || !text.includes("{{")) return <RichText text={text} />;
  const parts = [];
  let last = 0, m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) parts.push(<RichText key={`t${last}`} text={text.slice(last, m.index)} />);
    if (m[1] === "wp") { parts.push(<WordParts key={`w${m.index}`} spec={m[2]} />); last = m.index + m[0].length; continue; }
    if (m[1] === "fig") {
      const f = FIGS[m[2]];
      parts.push(f ? <img key={`f${m.index}`} className="inline-fig" src={f.src} alt={f.alt} loading="lazy" /> : <span key={`f${m.index}`} className="mol-missing">[figure]</span>);
      last = m.index + m[0].length; continue;
    }
    const svg = structs?.[`${m[1]}:${m[2]}`];
    parts.push(
      svg
        ? <span key={`s${m.index}`} className="mol-inline" dangerouslySetInnerHTML={{ __html: svg }} />
        : <span key={`s${m.index}`} className="mol-missing">[structure]</span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<RichText key={`t${last}`} text={text.slice(last)} />);
  return <>{parts}</>;
}
