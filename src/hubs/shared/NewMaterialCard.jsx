// Dashboard card: what was added to this subject recently, and what the student still needs to pick up.
// Units the student has started are listed one by one (new questions not yet answered, study-guide sections with
// new material, including sections finished before the material was added). Units not started yet are summed up in
// one line, since the new material will be met there in order anyway. Renders nothing when nothing is recent.
import React from "react";
import { newQuestions, formatAdded } from "./newMaterial";

export default function NewMaterialCard({ units, questions, answered, sections, onStudy, onPractice }) {
  let anyRecent = false;
  let latest = 0;
  const started = [];
  let laterQ = 0;
  let laterSecs = 0;

  units.forEach((u) => {
    const nq = newQuestions(questions[u.id]);
    const secs = sections.newSections(u.id);
    if (nq.length) {
      anyRecent = true;
      nq.forEach((q) => { latest = Math.max(latest, Date.parse(`${q.added}T00:00:00`)); });
    }
    secs.forEach((s) => { anyRecent = true; latest = Math.max(latest, s.added); });
    const left = nq.filter((q) => !answered[q.id]).length;
    const isStarted = (questions[u.id] || []).some((q) => answered[q.id]) || sections.progress(u.id).done > 0;
    if (!left && !secs.length) return;
    if (isStarted) started.push({ u, left, total: nq.length, secs });
    else { laterQ += left; laterSecs += secs.length; }
  });

  if (!anyRecent) return null;
  const caughtUp = started.length === 0;

  return (
    <div className={`newmat-card${caughtUp ? " is-clear" : ""}`}>
      <div className="newmat-head">
        <span className="newmat-badge">New material</span>
        <span className="newmat-date">added {formatAdded(latest)}</span>
      </div>
      <div className="newmat-title">
        {caughtUp ? "You're caught up on the new material in units you've started" : "New material in units you've already worked on"}
      </div>
      {!caughtUp && (
        <div className="newmat-sub">
          These were added after you started. Read the new parts of the study guide, then answer the new questions.
        </div>
      )}

      {started.map(({ u, left, total, secs }) => (
        <div key={u.id} className="newmat-unit">
          <div className="newmat-unit-top">
            <div className="newmat-unit-name">Unit {u.id}: {u.name}</div>
            {left > 0 && (
              <button type="button" className="newmat-btn" onClick={() => onPractice(u.id)}>
                {left} new question{left === 1 ? "" : "s"} →
              </button>
            )}
            {left === 0 && total > 0 && <span className="newmat-done">All {total} new questions answered ✓</span>}
          </div>
          {secs.length > 0 && (
            <ul className="newmat-secs">
              {secs.map((s) => (
                <li key={s.id}>
                  <button type="button" className="newmat-sec" onClick={() => onStudy(u.id, s.id)}>
                    <span className="newmat-sec-title">{s.title}</span>
                    <span className={`newmat-sec-tag${s.wasDone ? " was-done" : ""}`}>{s.wasDone ? "New since you finished" : "New"}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {(laterQ > 0 || laterSecs > 0) && (
        <div className="newmat-later">
          Units you haven't started yet also gained
          {laterSecs > 0 ? ` new material in ${laterSecs} section${laterSecs === 1 ? "" : "s"}` : ""}
          {laterSecs > 0 && laterQ > 0 ? " and" : ""}
          {laterQ > 0 ? ` ${laterQ} new question${laterQ === 1 ? "" : "s"}` : ""}. You'll meet them as you go.
        </div>
      )}
    </div>
  );
}
