import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HubTopBar from "../../components/HubTopBar";
import SubjectIcon, { SUBJECT_COLORS } from "../../components/SubjectIcon";
import { AP, MODE_LABELS, loadApProgress, pct, timeAgo } from "../../lib/progress";
import { getSession, onSession } from "../../lib/cloud";


// Every AP subject with the student's own progress beside it.
export default function ApHubPage() {
  const [progress, setProgress] = useState(null);
  const [session, setSession] = useState(getSession());
  useEffect(() => onSession(setSession), []);
  useEffect(() => {
    let live = true;
    loadApProgress().then((p) => { if (live) setProgress(p); });
    return () => { live = false; };
  }, [session && session.id]);

  return (
    <div style={styles.page}>
      <HubTopBar title="AP Hub" titleColor="#2E332E" tagColor="#767F73" border="#ECEAE3" pillBg="#EEF1EC" pillColor="#4A5A47" />
      <p className="hub-intro">Each subject has study guides, practice questions, free-response practice, and a dashboard that tracks your progress.</p>
      <div className="hub-wrap">
        <div className="tiles">
          {Object.entries(AP).map(([id, s]) => {
            const p = progress && progress[id];
            const unit = p && p.nav && s.units.find((u) => u.id === p.nav.unitId);
            return (
              <Link key={id} to={s.route} className="tile" style={{ "--accent": SUBJECT_COLORS[id], minHeight: 84, padding: "15px 17px" }}>
                <span className="tile-icon"><SubjectIcon id={id} /></span>
                <span className="tile-main">
                  <span className="tile-name" style={{ fontSize: 17 }}>{s.name}</span>
                  {p && p.started ? (
                    <>
                      <span className="bar thin" aria-hidden="true"><i style={{ width: `${pct(p.done, s.mcqTotal)}%` }} /></span>
                      <span className="tile-meta">
                        <b>{p.done}</b>/{s.mcqTotal} questions{p.done ? <> · <b>{pct(p.correct, p.done)}%</b> correct</> : null}
                        {p.sectionsDone ? <> · {p.sectionsDone}/{s.sectionTotal} sections</> : null}
                      </span>
                      <span className="tile-meta">
                        {unit ? <>Last: Unit {unit.id}{MODE_LABELS[p.nav.mode] ? `, ${MODE_LABELS[p.nav.mode]}` : ""}</> : null}
                        {p.lastActive ? <>{unit ? " · " : ""}{timeAgo(p.lastActive)}</> : null}
                      </span>
                    </>
                  ) : (
                    <span className="tile-meta">{s.units.length} units · {s.mcqTotal} questions · {s.sectionTotal} study sections</span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#FAFAF7", fontFamily: "'Nunito', sans-serif", color: "#2E332E", padding: "40px 24px 90px", boxSizing: "border-box" },
};
