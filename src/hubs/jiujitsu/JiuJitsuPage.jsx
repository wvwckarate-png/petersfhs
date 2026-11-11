import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../components/BrandLogo";
import { CSS } from "./theme";
import { SankakuMark } from "./Mark";
import { useStore } from "./store";
import { useLayout } from "../../lib/layoutPrefs";
import { MapView, PositionsView, PositionView, SystemsView, DrillsView, PlanView, CycleView, TimerView, ProgressView, ReferenceView } from "./views";

// "#/" opens whichever tab the student has put first ("Customize"); the map itself is always at "#/map".
const NAV = [["#/map", "Map"], ["#/positions", "Positions"], ["#/systems", "Systems"], ["#/drills", "Drills"], ["#/plan", "Session"], ["#/cycle", "8 weeks"], ["#/timer", "Timer"], ["#/progress", "Progress"], ["#/reference", "Reference"]];
const NAV_IDS = NAV.map(([h]) => h);
const NAV_NAME = Object.fromEntries(NAV);

function useHashRoute() {
  const read = () => (window.location.hash || "#/").split("?")[0];
  const [route, setRoute] = useState(read());
  useEffect(() => {
    const on = () => { setRoute(read()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export default function JiuJitsuPage() {
  const hash = useHashRoute();
  const store = useStore();
  const layout = useLayout("jj-layout-v1", NAV_IDS);
  const [edit, setEdit] = useState(false);
  const tabs = layout.order.filter((h) => !layout.isHidden(h));
  const start = tabs[0] || "#/map";
  const route = hash === "#/" ? start : hash; // the hub opens on the student's first tab
  const posMatch = route.match(/^#\/position\/(.+)$/);
  let view;
  if (posMatch) view = <PositionView id={posMatch[1]} store={store} />;
  else if (route === "#/positions") view = <PositionsView store={store} />;
  else if (route === "#/systems") view = <SystemsView />;
  else if (route === "#/drills") view = <DrillsView />;
  else if (route.startsWith("#/plan")) view = <PlanView key={window.location.hash} />;
  else if (route === "#/cycle") view = <CycleView />;
  else if (route === "#/timer") view = <TimerView />;
  else if (route === "#/progress") view = <ProgressView store={store} />;
  else if (route === "#/reference" || route === "#/rules") view = <ReferenceView />;
  else view = <MapView store={store} />;
  const activeKey = posMatch ? "#/positions" : route === "#/rules" ? "#/reference" : route.startsWith("#/plan") ? "#/plan" : route;

  useEffect(() => {
    document.title = "Jiu-Jitsu Hub · Peters Family Homeschool";
    return () => { document.title = "Peters Family Homeschool"; };
  }, []);

  return (
    <div className="jj">
      <style>{CSS}</style>
      <a className="jj-skip" href="#jj-main" onClick={(e) => { e.preventDefault(); document.getElementById("jj-main")?.focus(); }}>Skip to content</a>
      <header className="jj-top">
        <div className="jj-top-in">
          <a className="jj-brand" href="#/"><SankakuMark size={34} /> Jiu-Jitsu</a>
          <nav className="jj-nav" aria-label="Jiu-Jitsu hub">
            {tabs.map((h) => <a key={h} href={h} className={activeKey === h ? "on" : ""}>{NAV_NAME[h]}</a>)}
            <button type="button" className={edit ? "jj-nav-edit on" : "jj-nav-edit"} onClick={() => setEdit((e) => !e)} aria-pressed={edit} title="Choose which tabs show and in what order">{edit ? "Done" : "Customize"}</button>
          </nav>
          <div className="jj-logos" style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <BrandLogo height={40} invert divider />
            <Link to="/" aria-label="Pro Form Martial Arts: back to the main page" title="Back to the main page" style={{ display: "inline-flex" }}>
              <img src="/images/proform-logo.png" alt="Pro Form Martial Arts" style={{ height: 40, width: "auto", display: "block", mixBlendMode: "screen" }} />
            </Link>
          </div>
        </div>
        <div className="jj-belt" aria-hidden="true" />
      </header>
      <main className="jj-wrap" id="jj-main" tabIndex={-1} style={{ outline: "none" }}>
        {edit && (
          <section className="jj-card" aria-label="Customize the Jiu-Jitsu hub" style={{ marginBottom: 22 }}>
            <h2 style={{ margin: "0 0 4px", fontSize: 19 }}>Customize this hub</h2>
            <p style={{ margin: "0 0 14px", opacity: 0.75, fontSize: 14.5 }}>Put the tabs in the order you use them and hide the ones you don't. The first tab is the page this hub opens on. Hiding a tab removes nothing: your progress stays saved.</p>
            <div style={{ display: "grid", gap: 8 }}>
              {layout.order.map((h, i) => {
                const hidden = layout.isHidden(h);
                const lastVisible = !hidden && tabs.length === 1;
                return (
                  <div key={h} className="jj-edit-row" style={{ opacity: hidden ? 0.55 : 1 }}>
                    <span style={{ fontWeight: 800, flex: 1 }}>{NAV_NAME[h]}{!hidden && h === start && <span className="jj-edit-note">opens first</span>}{hidden && <span className="jj-edit-note">hidden</span>}</span>
                    <button type="button" className="jj-btn" onClick={() => layout.move(h, -1)} disabled={i === 0} aria-label={`Move ${NAV_NAME[h]} earlier`}>↑</button>
                    <button type="button" className="jj-btn" onClick={() => layout.move(h, 1)} disabled={i === layout.order.length - 1} aria-label={`Move ${NAV_NAME[h]} later`}>↓</button>
                    <button type="button" className="jj-btn" style={{ minWidth: 68 }} onClick={() => layout.toggle(h)} disabled={lastVisible} aria-pressed={hidden}>{hidden ? "Show" : "Hide"}</button>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <button type="button" className="jj-btn" style={{ background: "#D8472E", borderColor: "#D8472E", color: "#fff" }} onClick={() => setEdit(false)}>Done</button>
              {layout.customized && <button type="button" className="jj-btn" onClick={layout.reset}>Reset to default</button>}
            </div>
          </section>
        )}
        {view}
      </main>
    </div>
  );
}
