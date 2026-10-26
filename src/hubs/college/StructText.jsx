import React from "react";
import RichText from "../shared/RichText";

// Text that may contain {{mol:SMILES}} / {{rxn:...}} tokens. Structure SVGs are pre-rendered at
// authoring time (scripts/build-structures.mjs) and looked up in the course's `structs` map.
const TOKEN = /\{\{(mol|rxn|svg):([\s\S]+?)\}\}/g;

export default function StructText({ text, structs }) {
  if (typeof text !== "string" || !text.includes("{{")) return <RichText text={text} />;
  const parts = [];
  let last = 0, m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) parts.push(<RichText key={`t${last}`} text={text.slice(last, m.index)} />);
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
