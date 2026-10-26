import React, { useEffect, useState } from "react";
import BrandLogo from "../../components/BrandLogo";
import { CSS } from "./theme";
import { SankakuMark } from "./Mark";
import { useStore } from "./store";
import { MapView, PositionsView, PositionView, SystemsView, DrillsView, PlanView, CycleView, TimerView, ProgressView, RulesView } from "./views";

const NAV = [["#/", "Map"], ["#/positions", "Positions"], ["#/systems", "Systems"], ["#/drills", "Drills"], ["#/plan", "Session"], ["#/cycle", "8 weeks"], ["#/timer", "Timer"], ["#/progress", "Progress"], ["#/rules", "Rules"]];

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
  const route = useHashRoute();
  const store = useStore();
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
  else if (route === "#/rules") view = <RulesView />;
  else view = <MapView store={store} />;
  const activeKey = posMatch ? "#/positions" : route;

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
            {NAV.map(([h, n]) => <a key={h} href={h} className={activeKey === h ? "on" : ""}>{n}</a>)}
          </nav>
          <BrandLogo height={40} invert />
        </div>
        <div className="jj-belt" aria-hidden="true" />
      </header>
      <main className="jj-wrap" id="jj-main" tabIndex={-1} style={{ outline: "none" }}>{view}</main>
    </div>
  );
}
