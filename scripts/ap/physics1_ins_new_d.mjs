// Figures for the AP Physics 1 material added in Nov 2026, batch D (Unit 6: new sections 6.5 and 6.6, and the
// additions to 6.2-6.4, placed inside their "New" blocks).
import { FIGS } from "./phys1_figs_d.mjs";
import { figure } from "./lib.mjs";
const html = (id) => { const f = FIGS[id]; if (!f) throw new Error("missing fig " + id); return figure(id, f.svg, f.caption); };
const g = (unit, id, gap, after) => ({ hub: "physics1", unit, id, gap, ...(after ? { after } : {}), html: html(id) });
const a = (unit, id, anchor) => ({ hub: "physics1", unit, id, anchor, html: html(id) });
// Two figures placed at the same spot appear in reverse order of this list, so the later one is listed first.
export const INS = [
  // 6.5 Work Done by a Torque (new section)
  a(6, "p1d-torque-work-arc", "A torque exerted while the system does not turn at all (Δθ = 0) does no work, no matter how large it is."),
  a(6, "p1d-torque-vs-theta", "How much work does the motor do from θ = 0 to θ = 4.0 rad, what is the wheel's angular velocity at θ = 4.0 rad, and at what angular position is the wheel spinning fastest?"),
  // 6.6 Orbiting Satellites (new section)
  a(6, "p1d-ellipse-orbit-energy", "At the closest and farthest points, v is perpendicular to r, so L = mvr there and rnearvnear = rfarvfar (practiced in 6.3)."),
  a(6, "p1d-orbit-energy-vs-time", "K peaks at the moments Ug reaches its minimum, at closest approach."),
  a(6, "p1d-orbit-energy-vs-r", "K peaks at the moments Ug reaches its minimum, at closest approach."),
  // additions to 6.2-6.4
  g(6, "p1d-puck-angular-momentum", "p1-angular-momentum-point-object", "with no force on it, there is no torque to change L.</p></div>"),
  g(6, "p1d-torque-vs-time", "p1-angular-impulse-graphs", "a curve whose slope shrinks means the net torque is decreasing.</p></div>"),
  g(6, "p1d-two-disks-torque-pair", "p1-angular-momentum-system-choice", "the top disk loses exactly the angular momentum the bottom disk gains, and the total stays the same.</p></div>"),
  g(6, "p1d-bowling-ball-slipping", "p1-rolling-bar-charts-and-slipping", "E<sub>no slip</sub> = E<sub>frictionless</sub> &gt; E<sub>slipping</sub>.</p></div>"),
  g(6, "p1d-rolling-energy-bars", "p1-rolling-bar-charts-and-slipping", "\"Energy is conserved\" by itself does not explain why one object wins.</p></div>"),
];
