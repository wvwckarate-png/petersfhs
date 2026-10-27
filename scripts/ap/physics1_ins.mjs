import { FIGS as F1 } from "./phys1_figs.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "physics1", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "motion-graphs", "This section is where position, velocity, and acceleration stop being three separate topics"),
  at(1, "projectile-path", "This is the payoff section for the whole unit"),
  at(2, "fbd-examples", "A free-body diagram (FBD) shows a single object as a dot"),
  at(2, "third-law-pairs", "A Third Law pair always consists of two forces acting on two different objects"),
  at(2, "friction-graph", "Kinetic friction always equals"),
  at(2, "hooke-law", "That minus sign isn't decorative"),
  at(2, "ramp-components", "On an incline, the standard move is to rotate your coordinate system"),
  at(3, "work-angle", "That cosθ factor is doing real work in this formula"),
  at(3, "energy-bars", "Energy conservation lets you connect a \"before\" state and an \"after\" state"),
  at(4, "impulse-area", "That equation assumes a constant force."),
  at(4, "collision-types", "In an inelastic collision, momentum is still conserved"),
  at(5, "torque-lever", "Pushing a door exactly at its hinge does nothing"),
  at(5, "inertia-shapes", "Moment of inertia, I, is the rotational equivalent of mass"),
  at(5, "rolling-velocities", "For an object rolling without slipping, the single point currently touching the ground"),
  at(6, "skater-angular", "A spinning skater pulling their arms in reduces their moment of inertia"),
  at(7, "shm-graphs", "At maximum displacement (x=±A, the amplitude), the restoring force"),
  at(7, "shm-energy", "At maximum displacement (x=±A), all the system's energy is potential"),
  at(8, "hydraulic-lift", "Hydraulic lifts don't break energy conservation"),
  at(8, "buoyancy", "Buoyant force depends on the weight of the fluid the object pushes out of the way"),
  at(8, "pipe-flow", "Look closely at Bernoulli's equation and you'll see three old friends"),
];
