import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./components/BrandLogo";
import ProfileSlot from "./components/ProfileSlot";
import SubjectIcon, { SUBJECT_COLORS, SUBJECT_DEEP } from "./components/SubjectIcon";
import CourseIcon from "./hubs/college/CourseIcon";
import { COURSES } from "./hubs/college/courses";
import { COURSE_PAGES } from "./hubs/college/courseContent";
import { SankakuMark } from "./hubs/jiujitsu/Mark";
import { BELT_STOPS } from "./hubs/jiujitsu/Enso";
import { getSession, onSession, legacyEntries, downloadBackup } from "./lib/cloud";
import { openProfilePanel } from "./lib/profileSlot";
import { AP, SAT_TOTALS, MODE_LABELS, loadApProgress, loadOtherProgress, pct, timeAgo } from "./lib/progress";

// The home page is the student's desk: who is studying, where they left off, and every subject one click away.
// (Before v8.5 this page was four hub cards; that version is kept at the git tag v8.4.26-before-redesign.)

const SAT_COLOR = "#3D3470", SAT_DEEP = "#2A2350";
const NAVY = "#002855", GOLD_DEEP = "#8A6500";

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? "Up late" : h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

function Bar({ value, thin }) {
  return <span className={thin ? "bar thin" : "bar"} aria-hidden="true"><i style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></span>;
}

function SatIcon({ kind, size = 22 }) {
  const c = SAT_COLOR;
  return kind === "cards" ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6.5" width="13" height="12" rx="2.2" stroke={c} strokeWidth="1.7" />
      <path d="M7.5 4H18a2 2 0 0 1 2 2v9.5" stroke={c} strokeWidth="1.7" strokeLinecap="round" opacity=".55" />
      <path d="M7.5 11h6M7.5 14.3h3.6" stroke="#E8A33D" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke={c} strokeWidth="1.7" />
      <path d="M9.6 9.7c.2-1.2 1.2-2 2.5-2 1.4 0 2.5.9 2.5 2.2 0 1.9-2.4 1.9-2.4 3.7" stroke={c} strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12.1" cy="16.3" r="1" fill="#E8A33D" />
    </svg>
  );
}

// One line describing where the student was in an AP subject, from the page's own "last position" record.
function apWhere(s) {
  const nav = s.nav;
  const unit = nav && s.units.find((u) => u.id === nav.unitId);
  const mode = nav && MODE_LABELS[nav.mode];
  const perUnit = unit && (nav.mode === "study" || nav.mode === "mcq" || nav.mode === "frq");
  return { unit: perUnit ? unit : null, mode };
}

export default function HomePage() {
  const [session, setSession] = useState(getSession());
  const [ap, setAp] = useState(null);
  const [other, setOther] = useState(null);

  useEffect(() => onSession(setSession), []);
  useEffect(() => {
    let live = true;
    Promise.all([loadApProgress(), loadOtherProgress()]).then(([a, o]) => { if (live) { setAp(a); setOther(o); } });
    return () => { live = false; };
  }, [session && session.id]);

  const signedIn = !!session && !session.expired;
  const deviceHasProgress = useMemo(() => !session && legacyEntries().length > 0, [session]);

  // Everything the student has touched, most recent first.
  const resume = useMemo(() => {
    if (!ap || !other) return [];
    const items = [];
    for (const s of Object.values(ap)) {
      if (!s.started && !s.lastActive) continue;
      const w = apWhere(s);
      const u = w.unit, p = u && s.per[u.id];
      items.push({
        key: s.id, to: s.route, title: s.name, accent: SUBJECT_COLORS[s.id], deep: SUBJECT_DEEP[s.id],
        icon: <SubjectIcon id={s.id} size={26} />, last: s.lastActive, weight: s.done,
        stats: [
          [`${s.done}/${s.mcqTotal}`, "questions answered"],
          [s.done ? `${pct(s.correct, s.done)}%` : "–", "correct overall"],
          [`${s.sectionsDone}/${s.sectionTotal}`, "study sections done"],
        ],
        where: u ? <><b>Unit {u.id}</b> · {u.name}</> : <>All units</>, mode: w.mode,
        bar: u && u.mcq ? pct(p ? p.done : 0, u.mcq) : pct(s.done, s.mcqTotal),
        note: u && u.mcq
          ? <><b>{p ? p.done : 0}</b> of {u.mcq} questions in this unit{p && p.done ? <> · <b>{pct(p.correct, p.done)}%</b> correct</> : null}</>
          : <><b>{s.done}</b> of {s.mcqTotal} questions{s.done ? <> · <b>{pct(s.correct, s.done)}%</b> correct</> : null}</>,
      });
    }
    for (const c of COURSES) {
      const p = other.college[c.id];
      if (!p || (!p.started && !p.lastActive)) continue;
      items.push({
        key: c.id, to: `/college/${c.id}`, title: c.name, accent: "#EAAA00", deep: NAVY,
        icon: <CourseIcon id={c.id} size={26} />, last: p.lastActive, weight: p.done,
        where: <>{c.code}</>, mode: p.nav && MODE_LABELS[p.nav.mode], bar: null,
        note: p.done ? <><b>{p.done}</b> questions answered · <b>{pct(p.correct, p.done)}%</b> correct</> : <>Study guide in progress</>,
      });
    }
    const sat = other.sat;
    if (sat.wordsSeen || sat.lastWords) items.push({
      key: "sat-cards", to: "/sat/vocab", title: "SAT Vocabulary Flash Cards", accent: SAT_COLOR, deep: SAT_DEEP,
      icon: <SatIcon kind="cards" size={26} />, last: sat.lastWords, weight: sat.wordsSeen, where: <>Flash cards</>, mode: null,
      bar: pct(sat.wordsKnown, SAT_TOTALS.words), note: <><b>{sat.wordsKnown}</b> of {SAT_TOTALS.words} words known</>,
    });
    if (sat.questionsDone || sat.lastQuestions) items.push({
      key: "sat-q", to: "/sat/vocab-questions", title: "SAT Vocabulary Question Bank", accent: SAT_COLOR, deep: SAT_DEEP,
      icon: <SatIcon kind="questions" size={26} />, last: sat.lastQuestions, weight: sat.questionsDone, where: <>Practice questions</>, mode: null,
      bar: pct(sat.questionsDone, SAT_TOTALS.questions),
      note: <><b>{sat.questionsDone}</b> of {SAT_TOTALS.questions} answered{sat.questionsDone ? <> · <b>{pct(sat.questionsCorrect, sat.questionsDone)}%</b> correct</> : null}</>,
    });
    items.sort((a, b) => (b.last - a.last) || (b.weight - a.weight));
    return items.slice(0, 3);
  }, [ap, other]);

  const returning = resume.length > 0;
  const name = signedIn ? session.name : "";
  const today = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-header-inner">
          <BrandLogo height={52} />
          <ProfileSlot />
        </div>
      </header>

      <main className="site-main">
        <div className="home-hello">
          <div>
            <div className="eyebrow">{today}</div>
            <h1>{returning ? `${name ? `${greeting()}, ${name}` : "Welcome back"}.` : name ? `${greeting()}, ${name}.` : "What are we learning today?"}</h1>
          </div>
          <p className="home-quote">"Each thing you learn is one more thing you know."<b>Michael D. Peters, DVM</b></p>
        </div>

        {deviceHasProgress && (
          <div className="save-nudge" role="note">
            <div><b>Your progress is saved on this device only.</b> Sign in with your name and PIN to back it up and pick up where you left off on any device.</div>
            <button className="btn-dark" onClick={openProfilePanel}>Sign in</button>
          </div>
        )}
        {!session && !deviceHasProgress && (
          <div className="save-nudge" role="note" style={{ background: "#F3F5F0", borderColor: "#DCE3D6" }}>
            <div><b>Studying here regularly?</b> Sign in with your name and PIN so your progress is saved and follows you to any device. You can also just start: everything works without signing in.</div>
            <button className="btn-dark" onClick={openProfilePanel}>Sign in</button>
          </div>
        )}

        {returning && (
          <section aria-label="Pick up where you left off">
            <div className="eyebrow" style={{ marginBottom: 10 }}>Pick up where you left off</div>
            <div className={resume.length === 1 ? "resume single" : "resume"}>
              <ResumeCard item={resume[0]} />
              {resume.length > 1 && (
                <div className="resume-side">
                  {resume.slice(1).map((it) => <ResumeCard key={it.key} item={it} small />)}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="section" aria-labelledby="h-ap">
          <div className="section-head">
            <h2 id="h-ap">AP subjects<span className="sub">Study guides, practice questions, FRQs, and exams</span></h2>
            <Link to="/ap" className="section-link">AP Hub →</Link>
          </div>
          <div className="tiles">
            {Object.entries(AP).map(([id, s]) => <ApTile key={id} id={id} s={s} p={ap && ap[id]} />)}
          </div>
        </section>

        <section className="section" aria-labelledby="h-sat">
          <div className="section-head">
            <h2 id="h-sat">SAT<span className="sub">Vocabulary</span></h2>
            <Link to="/sat" className="section-link">SAT Hub →</Link>
          </div>
          <div className="tiles">
            <Link to="/sat/vocab" className="tile" style={{ "--accent": SAT_COLOR }}>
              <span className="tile-icon"><SatIcon kind="cards" /></span>
              <span className="tile-main">
                <span className="tile-name">Vocabulary Flash Cards</span>
                {other && other.sat.wordsSeen > 0 ? (
                  <><Bar thin value={pct(other.sat.wordsKnown, SAT_TOTALS.words)} /><span className="tile-meta"><b>{other.sat.wordsKnown}</b> of {SAT_TOTALS.words} words known</span></>
                ) : <span className="tile-meta">{SAT_TOTALS.words} words in three levels</span>}
              </span>
            </Link>
            <Link to="/sat/vocab-questions" className="tile" style={{ "--accent": SAT_COLOR }}>
              <span className="tile-icon"><SatIcon kind="questions" /></span>
              <span className="tile-main">
                <span className="tile-name">Vocabulary Question Bank</span>
                {other && other.sat.questionsDone > 0 ? (
                  <><Bar thin value={pct(other.sat.questionsDone, SAT_TOTALS.questions)} /><span className="tile-meta"><b>{other.sat.questionsDone}</b> of {SAT_TOTALS.questions} answered · <b>{pct(other.sat.questionsCorrect, other.sat.questionsDone)}%</b> correct</span></>
                ) : <span className="tile-meta">{SAT_TOTALS.questions} practice questions</span>}
              </span>
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="h-college">
          <div className="section-head">
            <h2 id="h-college">College head start<span className="sub">Exercise Physiology plan of study</span></h2>
            <Link to="/college" className="section-link" style={{ color: NAVY }}>College Hub →</Link>
          </div>
          <div className="tiles">
            {COURSES.filter((c) => COURSE_PAGES[c.id]).map((c) => {
              const p = other && other.college[c.id];
              return (
                <Link key={c.id} to={`/college/${c.id}`} className="tile" style={{ "--accent": NAVY }}>
                  <span className="tile-icon"><CourseIcon id={c.id} size={24} /></span>
                  <span className="tile-main">
                    <span className="tile-name" style={{ color: NAVY }}>{c.name}</span>
                    <span className="tile-meta"><b style={{ color: GOLD_DEEP }}>{c.code}</b>{p && p.done ? <> · {p.done} answered · {pct(p.correct, p.done)}% correct</> : null}</span>
                  </span>
                </Link>
              );
            })}
            <Link to="/college" className="tile more">All college courses →</Link>
          </div>
        </section>

        <section className="section" aria-label="Jiu-Jitsu">
          <Link to="/jiujitsu" className="jj-banner">
            <SankakuMark size={54} stops={BELT_STOPS} />
            <span style={{ position: "relative", zIndex: 1 }}>
              <span className="jj-title" style={{ display: "block" }}>Jiu-Jitsu</span>
              <span className="jj-sub" style={{ display: "block" }}>
                Positions, systems, drills, and sparring plans for training at home.
                {other && other.jj.inProgress > 0 ? ` ${other.jj.inProgress} technique${other.jj.inProgress === 1 ? "" : "s"} in progress.` : ""}
              </span>
            </span>
            <span className="jj-go">Open the dojo →</span>
          </Link>
        </section>

        <footer className="site-foot">
          <span>{signedIn ? `Signed in as ${session.name}. Progress saves to your profile automatically.` : "Progress saves on this device automatically."}</span>
          <button className="link-btn" onClick={downloadBackup}>Download a backup file</button>
        </footer>
      </main>
    </div>
  );
}

function ResumeCard({ item, small }) {
  return (
    <Link to={item.to} className={small ? "resume-card small" : "resume-card"}
      style={{ "--accent": item.accent, "--accent-deep": item.deep, "--accent-pale": `color-mix(in srgb, ${item.accent} 16%, #fff)` }}>
      <div className="resume-top">
        <span className="tile-icon" style={small ? undefined : { width: 52, height: 52, borderRadius: 16 }}>{item.icon}</span>
        <div style={{ minWidth: 0 }}>
          <div className="resume-title">{item.title}</div>
          {item.last > 0 && <div className="ago">Last studied {timeAgo(item.last)}</div>}
        </div>
      </div>
      <div className="resume-where">{item.where}{item.mode && <span className="mode-chip">{item.mode}</span>}</div>
      <div>
        {item.bar !== null && <Bar value={item.bar} thin={small} />}
        <div className="bar-note">{item.note}</div>
      </div>
      {!small && (
        <div className="resume-foot">
          {item.stats ? (
            <div className="resume-stats">
              {item.stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
            </div>
          ) : <span />}
          <span className="resume-go">Continue →</span>
        </div>
      )}
    </Link>
  );
}

function ApTile({ id, s, p }) {
  const started = p && p.started;
  return (
    <Link to={s.route} className="tile" style={{ "--accent": SUBJECT_COLORS[id] }}>
      <span className="tile-icon"><SubjectIcon id={id} /></span>
      <span className="tile-main">
        <span className="tile-name">{s.name}</span>
        {started ? (
          <>
            <Bar thin value={pct(p.done, s.mcqTotal)} />
            <span className="tile-meta">
              <b>{p.done}</b>/{s.mcqTotal} questions{p.done ? <> · <b>{pct(p.correct, p.done)}%</b> correct</> : null}
              {p.sectionsDone ? <> · {p.sectionsDone}/{s.sectionTotal} sections</> : null}
            </span>
          </>
        ) : (
          <span className="tile-meta">{s.units.length} units · {s.mcqTotal} questions</span>
        )}
      </span>
    </Link>
  );
}
