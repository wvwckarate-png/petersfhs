import React from "react";

// Renders a plain string that may contain a small set of inline tags
// (<sub>, <sup>, <strong>, <b>, <em>, <i>) as real React elements.
// Anything else is left as literal text, so no raw HTML is ever injected.
const TAGS = new Set(["sub", "sup", "strong", "b", "em", "i"]);
const TOKEN = /<(\/?)(sub|sup|strong|b|em|i)>/g;

export default function RichText({ text }) {
  if (typeof text !== "string" || !text.includes("<")) return <>{text}</>;

  const root = { tag: null, children: [] };
  const stack = [root];
  let last = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) stack[stack.length - 1].children.push(text.slice(last, m.index));
    last = m.index + m[0].length;
    const [, closing, tag] = m;
    if (!closing) {
      const node = { tag, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else if (stack.length > 1 && stack[stack.length - 1].tag === tag) {
      stack.pop();
    }
  }
  if (last < text.length) stack[stack.length - 1].children.push(text.slice(last));

  const render = (nodes) =>
    nodes.map((n, i) =>
      typeof n === "string" ? (
        <React.Fragment key={i}>{n}</React.Fragment>
      ) : TAGS.has(n.tag) ? (
        React.createElement(n.tag, { key: i }, render(n.children))
      ) : null
    );

  return <>{render(root.children)}</>;
}
