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
import { useLayout } from "./lib/layoutPrefs";
import TileGrid from "./components/TileGrid";
import { AP, SAT_TOTALS, MODE_LABELS, loadApProgress, loadOtherProgress, pct, timeAgo } from "./lib/progress";

// The home page is the student's desk: who is studying, where they left off, and every subject one click away.
// (Before v8.5 this page was four hub cards; that version is kept at the git tag v8.4.26-before-redesign.)

// Home sections in their default order. Each student can reorder and hide them ("Customize").
const SECTIONS = ["ap", "sat", "college", "jj"];

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
  const [edit, setEdit] = useState(false);
  const layout = useLayout("home-layout-v1", SECTIONS);
  const { isHidden } = layout;

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
        key: s.id, lid: `ap:${s.id}`, sec: "ap", to: s.route, title: s.name, accent: SUBJECT_COLORS[s.id], deep: SUBJECT_DEEP[s.id],
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
        key: c.id, lid: `college:${c.id}`, sec: "college", to: `/college/${c.id}`, title: c.name, accent: "#EAAA00", deep: NAVY,
        icon: <CourseIcon id={c.id} size={26} />, last: p.lastActive, weight: p.done,
        where: <>{c.code}</>, mode: p.nav && MODE_LABELS[p.nav.mode], bar: null,
        note: p.done ? <><b>{p.done}</b> questions answered · <b>{pct(p.correct, p.done)}%</b> correct</> : <>Study guide in progress</>,
      });
    }
    const sat = other.sat;
    if (sat.wordsSeen || sat.lastWords) items.push({
      key: "sat-cards", lid: "sat:cards", sec: "sat", to: "/sat/vocab", title: "SAT Vocabulary Flash Cards", accent: SAT_COLOR, deep: SAT_DEEP,
      icon: <SatIcon kind="cards" size={26} />, last: sat.lastWords, weight: sat.wordsSeen, where: <>Flash cards</>, mode: null,
      bar: pct(sat.wordsKnown, SAT_TOTALS.words), note: <><b>{sat.wordsKnown}</b> of {SAT_TOTALS.words} words known</>,
    });
    if (sat.questionsDone || sat.lastQuestions) items.push({
      key: "sat-q", lid: "sat:questions", sec: "sat", to: "/sat/vocab-questions", title: "SAT Vocabulary Question Bank", accent: SAT_COLOR, deep: SAT_DEEP,
      icon: <SatIcon kind="questions" size={26} />, last: sat.lastQuestions, weight: sat.questionsDone, where: <>Practice questions</>, mode: null,
      bar: pct(sat.questionsDone, SAT_TOTALS.questions),
      note: <><b>{sat.questionsDone}</b> of {SAT_TOTALS.questions} answered{sat.questionsDone ? <> · <b>{pct(sat.questionsCorrect, sat.questionsDone)}%</b> correct</> : null}</>,
    });
    items.sort((a, b) => (b.last - a.last) || (b.weight - a.weight));
    return items.filter((it) => !isHidden(it.sec) && !isHidden(it.lid)).slice(0, 3);
  }, [ap, other, isHidden]);

  const returning = resume.length > 0;
  const name = signedIn ? session.name : "";
  const today = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-header-inner">
          <BrandLogo height={52} />
          <div className="topbar-actions">
            <button className={edit ? "btn-ghost on" : "btn-ghost"} onClick={() => setEdit((e) => !e)} aria-pressed={edit} title="Choose what this page shows and in what order">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h10M18 7h2M4 12h3M11 12h9M4 17h12M20 17h0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><circle cx="16" cy="7" r="2" stroke="currentColor" strokeWidth="1.9"/><circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.9"/><circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.9"/></svg>
              <span className="pf-label">{edit ? "Done" : "Customize"}</span>
            </button>
            <ProfileSlot />
          </div>
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

        {edit && (
          <div className="edit-bar" role="region" aria-label="Customize this page">
            <div><b>Customizing your home page.</b> Drag cards to put them in the order you want, move sections up or down, and hide anything you don't use. Hidden subjects stay available on the AP, SAT, and College hub pages, and nothing is deleted.</div>
            <div className="edit-bar-btns">
              {layout.customized && <button className="btn-ghost" onClick={layout.reset}>Reset to default</button>}
              <button className="btn-dark" onClick={() => setEdit(false)}>Done</button>
            </div>
          </div>
        )}

        {edit && <button className="btn-dark edit-done-float" onClick={() => setEdit(false)}>Done customizing</button>}

        {returning && !edit && (
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

        {layout.order.map((sec, index) => {
          const shell = { id: sec, edit, layout, index, count: layout.order.length };
          if (sec === "ap") return (
            <SectionShell key={sec} {...shell} title="AP subjects" sub="Study guides, practice questions, FRQs, and exams"
              empty={Object.keys(AP).every((id) => layout.isHidden(`ap:${id}`))}
              link={<Link to="/ap" className="section-link">AP Hub →</Link>}>
              <TileGrid group="ap" edit={edit} layout={layout} items={Object.entries(AP).map(([id, s]) => ({
                id: `ap:${id}`, to: s.route, style: { "--accent": SUBJECT_COLORS[id] }, body: <ApTileBody id={id} s={s} p={ap && ap[id]} />,
              }))} />
            </SectionShell>
          );
          if (sec === "sat") return (
            <SectionShell key={sec} {...shell} title="SAT" sub="Vocabulary"
              empty={layout.isHidden("sat:cards") && layout.isHidden("sat:questions")}
              link={<Link to="/sat" className="section-link">SAT Hub →</Link>}>
              <TileGrid group="sat" edit={edit} layout={layout} items={[
                { id: "sat:cards", to: "/sat/vocab", style: { "--accent": SAT_COLOR }, body: (
                  <>
                  <span className="tile-icon"><SatIcon kind="cards" /></span>
                  <span className="tile-main">
                    <span className="tile-name">Vocabulary Flash Cards</span>
                    {other && other.sat.wordsSeen > 0 ? (
                      <><Bar thin value={pct(other.sat.wordsKnown, SAT_TOTALS.words)} /><span className="tile-meta"><b>{other.sat.wordsKnown}</b> of {SAT_TOTALS.words} words known</span></>
                    ) : <span className="tile-meta">{SAT_TOTALS.words} words in three levels</span>}
                  </span>
                  </>
                ) },
                { id: "sat:questions", to: "/sat/vocab-questions", style: { "--accent": SAT_COLOR }, body: (
                  <>
                  <span className="tile-icon"><SatIcon kind="questions" /></span>
                  <span className="tile-main">
                    <span className="tile-name">Vocabulary Question Bank</span>
                    {other && other.sat.questionsDone > 0 ? (
                      <><Bar thin value={pct(other.sat.questionsDone, SAT_TOTALS.questions)} /><span className="tile-meta"><b>{other.sat.questionsDone}</b> of {SAT_TOTALS.questions} answered · <b>{pct(other.sat.questionsCorrect, other.sat.questionsDone)}%</b> correct</span></>
                    ) : <span className="tile-meta">{SAT_TOTALS.questions} practice questions</span>}
                  </span>
                  </>
                ) },
              ]} />
            </SectionShell>
          );
          if (sec === "college") {
            const courses = COURSES.filter((c) => COURSE_PAGES[c.id]);
            return (
              <SectionShell key={sec} {...shell} title="College head start" sub="Exercise Physiology plan of study"
                empty={courses.every((c) => layout.isHidden(`college:${c.id}`))}
                link={<Link to="/college" className="section-link" style={{ color: NAVY }}>College Hub →</Link>}>
                <TileGrid group="college" edit={edit} layout={layout}
                  after={<Link to="/college" className="tile more">All college courses →</Link>}
                  items={courses.map((c) => {
                    const p = other && other.college[c.id];
                    return { id: `college:${c.id}`, to: `/college/${c.id}`, style: { "--accent": NAVY }, body: (
                      <>
                        <span className="tile-icon"><CourseIcon id={c.id} size={24} /></span>
                        <span className="tile-main">
                          <span className="tile-name" style={{ color: NAVY }}>{c.name}</span>
                          <span className="tile-meta"><b style={{ color: GOLD_DEEP }}>{c.code}</b>{p && p.done ? <> · {p.done} answered · {pct(p.correct, p.done)}% correct</> : null}</span>
                        </span>
                      </>
                    ) };
                  })} />
              </SectionShell>
            );
          }
          const JJ = edit ? "div" : Link;
          return (
            <SectionShell key={sec} {...shell} title="Jiu-Jitsu" headOnlyInEdit>
              <JJ {...(edit ? {} : { to: "/jiujitsu" })} className="jj-banner">
                <SankakuMark size={54} stops={BELT_STOPS} />
                <span style={{ position: "relative", zIndex: 1 }}>
                  <span className="jj-title" style={{ display: "block" }}>Jiu-Jitsu</span>
                  <span className="jj-sub" style={{ display: "block" }}>
                    Positions, systems, drills, and sparring plans for training at home.
                    {other && other.jj.inProgress > 0 ? ` ${other.jj.inProgress} technique${other.jj.inProgress === 1 ? "" : "s"} in progress.` : ""}
                  </span>
                </span>
                {!edit && <span className="jj-go">Open the dojo →</span>}
              </JJ>
            </SectionShell>
          );
        })}

        <footer className="site-foot">
          <span>{signedIn ? `Signed in as ${session.name}. Progress saves to your profile automatically.` : "Progress saves on this device automatically."}</span>
          {layout.hiddenCount > 0 && !edit && <button className="link-btn" onClick={() => { setEdit(true); window.scrollTo(0, 0); }}>{layout.hiddenCount} hidden · show or rearrange</button>}
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

// One home section. Hidden sections (or sections whose every tile is hidden) are left out unless customizing.
function SectionShell({ id, title, sub, link, edit, layout, index, count, empty, headOnlyInEdit, children }) {
  const hidden = layout.isHidden(id);
  if (!edit && (hidden || empty)) return null;
  return (
    <section className={hidden ? "section is-hidden" : "section"} aria-label={title}>
      {(edit || !headOnlyInEdit) && (
        <div className="section-head">
          <h2>{title}{sub && <span className="sub">{sub}</span>}{edit && hidden && <span className="hidden-tag">Hidden</span>}</h2>
          {edit ? (
            <span className="edit-tools">
              <button onClick={() => layout.move(id, -1)} disabled={index === 0} aria-label={`Move ${title} up`} title="Move up">↑</button>
              <button onClick={() => layout.move(id, 1)} disabled={index === count - 1} aria-label={`Move ${title} down`} title="Move down">↓</button>
              <button className="wide" onClick={() => layout.toggle(id)} aria-pressed={hidden}>{hidden ? "Show section" : "Hide section"}</button>
            </span>
          ) : link}
        </div>
      )}
      {!(edit && hidden) && children}
    </section>
  );
}

function ApTileBody({ id, s, p }) {
  const started = p && p.started;
  return (
    <>
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
    </>
  );
}
