// Section check-offs for the study guides.
//
// The study guides are static HTML strings (a "Jump to a section" list plus one <h2 id> per section).
// This hook remembers which sections the student has finished and decorates the rendered guide:
//   - a check circle beside every entry in "Jump to a section"
//   - a progress line with a "Continue" link to the first unfinished section
//   - a "Mark section as done" button at the end of every section
// Progress is stored per hub in the shared storage wrapper, so it survives reloads.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { storage } from "../../lib/storage";

const TOC_RE = /class="toc"[\s\S]*?<\/ol>/;
const LI_RE = /<li><a href="#([\w-]+)">([\s\S]*?)<\/a><\/li>/g;

/** [{id, title}] for every section listed in a unit's "Jump to a section" box (the practice link is skipped). */
export function parseSections(html) {
  const m = typeof html === "string" ? html.match(TOC_RE) : null;
  if (!m) return [];
  const out = [];
  for (const x of m[0].matchAll(LI_RE)) {
    if (x[1] === "practice") continue;
    out.push({ id: x[1], title: x[2].replace(/<[^>]+>/g, "").trim() });
  }
  return out;
}

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function useSectionProgress({ hubKey, content, unitId, active }) {
  const storageKey = `${hubKey}-sections-v1`;
  const [done, setDone] = useState({}); // { [unitId]: { [sectionId]: true } }
  const [loaded, setLoaded] = useState(false);
  const doneRef = useRef(done);
  doneRef.current = done;

  const sections = useMemo(() => {
    const map = {};
    Object.keys(content).forEach((u) => { map[u] = parseSections(content[u]); });
    return map;
  }, [content]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await storage.get(storageKey, false);
        if (!cancelled && r && r.value) {
          const parsed = JSON.parse(r.value);
          if (parsed && typeof parsed === "object") setDone(parsed);
        }
      } catch { /* storage unavailable or unreadable — start fresh */ }
      if (!cancelled) setLoaded(true);
    })();
    return () => { cancelled = true; };
  }, [storageKey]);

  const save = useCallback((next) => {
    storage.set(storageKey, JSON.stringify(next), false).catch(() => {});
  }, [storageKey]);

  const toggle = useCallback((uid, sid) => {
    const cur = doneRef.current;
    const unit = { ...(cur[uid] || {}) };
    if (unit[sid]) delete unit[sid]; else unit[sid] = true;
    const next = { ...cur, [uid]: unit };
    setDone(next);
    save(next);
  }, [save]);

  const resetUnit = useCallback((uid) => {
    const next = { ...doneRef.current };
    delete next[uid];
    setDone(next);
    save(next);
  }, [save]);

  const progress = useCallback((uid) => {
    const list = sections[uid] || [];
    const d = done[uid] || {};
    const count = list.filter((s) => d[s.id]).length;
    return { done: count, total: list.length, pct: list.length ? Math.round((count / list.length) * 100) : 0 };
  }, [sections, done]);

  // ---- decorate the rendered guide ----
  // Runs after every render on purpose: React may replace the guide's HTML (unit change, re-render), and the
  // decorations are rebuilt whenever they are missing, so they always match the saved progress.
  useEffect(() => {
    if (!active || !loaded) return;
    const pane = document.querySelector("[data-study-pane]");
    const list = sections[unitId] || [];
    if (!pane || list.length === 0) return;

    // Build the decorations once per rendered unit (switching units replaces the guide's HTML).
    if (!pane.querySelector(".sec-check")) {
      const toc = pane.querySelector(".toc");
      if (toc) {
        const label = toc.querySelector(".toc-label");
        const prog = document.createElement("div");
        prog.className = "sec-progress";
        prog.innerHTML = '<div class="sec-progress-top"><span class="sec-count"></span><button type="button" class="sec-reset" data-sec-reset>Clear checks</button></div><div class="sec-bar"><div class="sec-bar-fill"></div></div><a class="sec-resume" href="#"></a>';
        if (label && label.nextSibling) toc.insertBefore(prog, label.nextSibling); else toc.insertBefore(prog, toc.firstChild);
      }
      list.forEach((s) => {
        const link = pane.querySelector(`.toc a[href="#${s.id}"]`);
        if (link && link.parentElement) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "sec-check";
          btn.setAttribute("data-sec-toggle", s.id);
          btn.setAttribute("aria-pressed", "false");
          btn.setAttribute("aria-label", `Mark "${s.title}" as read`);
          btn.innerHTML = '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          link.parentElement.classList.add("sec-item");
          link.parentElement.insertBefore(btn, link);
          const pill = document.createElement("span");
          pill.className = "sec-pickup-pill";
          pill.textContent = "Pick up here";
          link.parentElement.appendChild(pill);
        }
      });
      const heads = Array.from(pane.querySelectorAll("h2"));
      list.forEach((s, i) => {
        const h = heads.find((el) => el.id === s.id);
        if (!h) return;
        const nextHead = heads[heads.indexOf(h) + 1];
        const bar = document.createElement("div");
        bar.className = "sec-done-bar";
        bar.setAttribute("data-sec-bar", s.id);
        const nxt = list[i + 1];
        bar.innerHTML = `<button type="button" class="sec-done-btn" data-sec-toggle="${esc(s.id)}" aria-pressed="false"><span class="sec-done-icon"></span><span class="sec-done-text">Mark section as done</span></button>${nxt ? `<a class="sec-next" href="#${esc(nxt.id)}">Next: ${esc(nxt.title)} →</a>` : ""}`;
        const footer = pane.querySelector(".footer-nav");
        if (nextHead && nextHead.parentNode) nextHead.parentNode.insertBefore(bar, nextHead);
        else if (footer && footer.parentNode) footer.parentNode.insertBefore(bar, footer);
        else h.parentNode.appendChild(bar);
      });
    }

    // Sync the decorations with what is checked off.
    const d = done[unitId] || {};
    const doneCount = list.filter((s) => d[s.id]).length;
    const next = list.find((s) => !d[s.id]);
    pane.querySelectorAll("h2.sec-nextup").forEach((h) => h.classList.remove("sec-nextup"));
    list.forEach((s) => {
      const on = !!d[s.id];
      const btn = pane.querySelector(`.sec-check[data-sec-toggle="${s.id}"]`);
      if (btn) { btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on)); }
      const li = btn && btn.parentElement;
      if (li) { li.classList.toggle("is-done", on); li.classList.toggle("is-next", !!next && next.id === s.id && doneCount > 0); }
      const bar = pane.querySelector(`[data-sec-bar="${s.id}"]`);
      if (bar) {
        bar.classList.toggle("is-done", on);
        const b = bar.querySelector(".sec-done-btn");
        if (b) { b.setAttribute("aria-pressed", String(on)); b.querySelector(".sec-done-text").textContent = on ? "Done — click to undo" : "Mark section as done"; }
      }
    });
    if (next && doneCount > 0) {
      const h = pane.querySelector(`h2[id="${next.id}"]`);
      if (h) h.classList.add("sec-nextup");
    }
    const count = pane.querySelector(".sec-count");
    if (count) count.textContent = doneCount === list.length ? `All ${list.length} sections done ✓` : `${doneCount} of ${list.length} sections done`;
    const fill = pane.querySelector(".sec-bar-fill");
    if (fill) fill.style.width = `${Math.round((doneCount / list.length) * 100)}%`;
    const resume = pane.querySelector(".sec-resume");
    if (resume) {
      if (next && doneCount > 0) { resume.style.display = ""; resume.setAttribute("href", `#${next.id}`); resume.textContent = `Continue where you left off: ${next.title} →`; }
      else resume.style.display = "none";
    }
    const reset = pane.querySelector(".sec-reset");
    if (reset) reset.style.display = doneCount > 0 ? "" : "none";

  });

  // Clicks on the injected check buttons (delegated, so they survive the guide's HTML being re-created).
  useEffect(() => {
    if (!active) return undefined;
    function onClick(e) {
      const pane = e.target.closest("[data-study-pane]");
      if (!pane) return;
      const t = e.target.closest("[data-sec-toggle]");
      if (t) { e.preventDefault(); toggle(unitId, t.getAttribute("data-sec-toggle")); return; }
      if (e.target.closest("[data-sec-reset]")) { e.preventDefault(); resetUnit(unitId); }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [active, unitId, toggle, resetUnit]);

  return { progress };
}
