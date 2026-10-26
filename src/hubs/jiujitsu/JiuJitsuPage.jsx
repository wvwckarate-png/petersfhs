import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { C, CSS } from "./theme";
import { EnsoMark } from "./Mark";
import { useStore, PEOPLE } from "./store";
import { MapView, PositionsView, PositionView, SystemsView, DrillsView, PlanView, TimerView, QuizView, CardsView, ProgressView, RulesView } from "./views";

const NAV = [["#/", "Map"], ["#/positions", "Positions"], ["#/systems", "Systems"], ["#/drills", "Solo drills"], ["#/plan", "Session"], ["#/timer", "Timer"], ["#/quiz", "Quiz"], ["#/cards", "Cards"], ["#/progress", "Progress"], ["#/rules", "Rules"]];

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
  else if (route === "#/timer") view = <TimerView />;
  else if (route === "#/quiz") view = <QuizView />;
  else if (route === "#/cards") view = <CardsView />;
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
      <header className="jj-top">
        <div className="jj-top-in">
          <a className="jj-brand" href="#/"><EnsoMark size={38} /> Jiu-Jitsu</a>
          <nav className="jj-nav" aria-label="Jiu-Jitsu hub">
            {NAV.map(([h, n]) => <a key={h} href={h} className={activeKey === h ? "on" : ""}>{n}</a>)}
          </nav>
          <select className="jj-who" value={store.person} onChange={(e) => store.setPerson(e.target.value)} aria-label="Who is training">
            {PEOPLE.map((n) => <option key={n}>{n}</option>)}
          </select>
          <Link to="/" style={{ color: C.muted, fontSize: 13, fontWeight: 700 }}>← Home</Link>
        </div>
        <div className="jj-belt" aria-hidden="true" />
      </header>
      <main className="jj-wrap">{view}</main>
    </div>
  );
}
