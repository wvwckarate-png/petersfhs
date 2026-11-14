import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/*
  A grid of cards for one home-page section.

  Normally each card is a link, shown in the student's saved order with hidden cards left out.
  While customizing, cards can be dragged to a new position: the card follows the pointer, and a dashed outline
  shows where it will land before it is let go. On a touch screen, drag by the grip (the six dots) so the page
  can still be scrolled; with a mouse the whole card can be dragged. Arrow keys on the grip move a card too.

  Props
    group   – id of the section ("ap", "sat", "college"); the order is saved per group
    items   – [{ id, to, style, body }] in the default order
    edit    – true while customizing
    layout  – from useLayout()
    after   – extra element shown at the end when not customizing (e.g. "All college courses")
*/
export default function TileGrid({ group, items, edit, layout, after }) {
  const ids = items.map((it) => it.id);
  const saved = layout.itemOrder(group, ids);
  const byId = Object.fromEntries(items.map((it) => [it.id, it]));

  const [live, setLive] = useState(null); // order while a drag is in progress
  const [drag, setDrag] = useState(null); // { id, x, y, w, h }
  const gridRef = useRef(null);
  const st = useRef(null); // details of the drag in progress (read by the window listeners)

  const order = live || saved;

  useEffect(() => () => { document.body.classList.remove("is-dragging-card"); }, []);

  function begin(e, id) {
    if (e.button > 0 || st.current) return;
    if (e.target.closest("button:not(.grip)")) return; // the Hide button is not a drag handle
    if (e.pointerType !== "mouse" && !e.target.closest(".grip")) return; // touch: drag by the grip so scrolling still works
    const r = e.currentTarget.getBoundingClientRect();
    e.preventDefault();
    st.current = { id, dx: e.clientX - r.left, dy: e.clientY - r.top, order: [...saved], lastOver: null };
    setLive([...saved]);
    setDrag({ id, x: r.left, y: r.top, w: r.width, h: r.height });
    document.body.classList.add("is-dragging-card");
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onEnd);
    window.addEventListener("pointercancel", onEnd);
  }

  function onMove(e) {
    const s = st.current;
    if (!s) return;
    setDrag((d) => d && { ...d, x: e.clientX - s.dx, y: e.clientY - s.dy });
    // keep the page moving when the card is dragged to the top or bottom edge
    if (e.clientY < 70) window.scrollBy(0, -14);
    else if (e.clientY > window.innerHeight - 70) window.scrollBy(0, 14);

    const under = document.elementFromPoint(e.clientX, e.clientY);
    const cell = under && under.closest("[data-sort-id]");
    const over = cell && gridRef.current && gridRef.current.contains(cell) ? cell.getAttribute("data-sort-id") : null;
    if (!over || over === s.id) { s.lastOver = null; return; }
    if (over === s.lastOver) return; // already swapped with this card; wait until the pointer leaves it
    const to = s.order.indexOf(over);
    const next = s.order.filter((x) => x !== s.id);
    next.splice(to, 0, s.id);
    s.order = next; s.lastOver = over;
    setLive(next);
  }

  function onEnd() {
    const s = st.current;
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onEnd);
    window.removeEventListener("pointercancel", onEnd);
    document.body.classList.remove("is-dragging-card");
    st.current = null;
    if (s && s.order.some((id, i) => id !== saved[i])) layout.setItemOrder(group, s.order);
    setLive(null); setDrag(null);
  }

  function nudge(e, id) {
    const step = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const i = saved.indexOf(id), j = i + step;
    if (j < 0 || j >= saved.length) return;
    const next = [...saved];
    [next[i], next[j]] = [next[j], next[i]];
    layout.setItemOrder(group, next);
  }

  if (!edit) {
    return (
      <div className="tiles">
        {saved.filter((id) => !layout.isHidden(id)).map((id) => (
          <Link key={id} to={byId[id].to} className="tile" style={byId[id].style}>{byId[id].body}</Link>
        ))}
        {after}
      </div>
    );
  }

  const dragged = drag && byId[drag.id];
  return (
    <div className="tiles" ref={gridRef}>
      {order.map((id) => {
        const it = byId[id], hidden = layout.isHidden(id), isSlot = drag && drag.id === id;
        return (
          <div key={id} data-sort-id={id} onPointerDown={(e) => begin(e, id)}
            className={`tile editing${hidden ? " is-hidden" : ""}${isSlot ? " drag-slot" : ""}`} style={it.style}>
            <button type="button" className="grip" onKeyDown={(e) => nudge(e, id)} aria-label="Drag to reorder, or use the arrow keys" title="Drag to reorder">
              <svg width="12" height="18" viewBox="0 0 12 18" aria-hidden="true"><g fill="currentColor"><circle cx="3" cy="3" r="1.6"/><circle cx="9" cy="3" r="1.6"/><circle cx="3" cy="9" r="1.6"/><circle cx="9" cy="9" r="1.6"/><circle cx="3" cy="15" r="1.6"/><circle cx="9" cy="15" r="1.6"/></g></svg>
            </button>
            {it.body}
            <button type="button" className="hide-btn" onClick={() => layout.toggle(id)} aria-pressed={hidden}>{hidden ? "Show" : "Hide"}</button>
          </div>
        );
      })}
      {dragged && (
        <div className={`tile editing drag-ghost${layout.isHidden(drag.id) ? " is-hidden" : ""}`} aria-hidden="true"
          style={{ ...dragged.style, position: "fixed", left: drag.x, top: drag.y, width: drag.w, height: drag.h }}>
          <span className="grip"><svg width="12" height="18" viewBox="0 0 12 18"><g fill="currentColor"><circle cx="3" cy="3" r="1.6"/><circle cx="9" cy="3" r="1.6"/><circle cx="3" cy="9" r="1.6"/><circle cx="9" cy="9" r="1.6"/><circle cx="3" cy="15" r="1.6"/><circle cx="9" cy="15" r="1.6"/></g></svg></span>
          {dragged.body}
        </div>
      )}
    </div>
  );
}
