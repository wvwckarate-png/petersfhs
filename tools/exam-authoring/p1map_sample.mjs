// Figure assignments for the AP Physics 1 Sample Exam (question id -> figures).
import * as P from "./p1figs.mjs";
const { fig } = P;

export default {
  "s-1": [fig(P.graph({ x: [0, 5, 1], y: [0, 10, 2], xLabel: "t (s)", yLabel: "v (m/s)", series: [{ name: "v", pts: [[0, 2], [3, 8], [5, 8]], color: "#3F7A94" }] }), "A velocity versus time graph: velocity rises uniformly from 2 meters per second to 8 meters per second over 3 seconds, then stays constant at 8 meters per second until 5 seconds.")],
  "s-2": [fig(P.cliff({ hText: "1.25 m", vText: "4.0 m/s", dText: "d = ?" }), "A small ball rolling horizontally off the edge of a table 1.25 meters above the floor at 4.0 meters per second, with the horizontal landing distance d unknown.")],
  "s-3": [fig(P.tablePulley({ m1: "4.0 kg", m2: "1.0 kg" }), "A 4.0 kilogram block on a frictionless table connected by a string over a pulley at the table edge to a 1.0 kilogram block hanging below.")],
  "s-4": [fig(P.pushedBlock({ label: "5.0 kg", F: "20 N", surface: "rough floor, μk = 0.30" }), "A 5.0 kilogram block on a rough floor pushed to the right with a 20 newton horizontal force. The coefficient of kinetic friction is 0.30.")],
  "s-5": [fig(P.hill({ hText: "1.8 m", carLabel: "2.0 kg" }), "A 2.0 kilogram block at rest at the top of a frictionless curved track, 1.8 meters above the bottom.")],
  "s-7": [fig(P.carts({ rows: [{ title: "Before the collision", items: [{ x: 40, w: 96, label: "3.0 kg", v: "4.0 m/s", dir: 1 }, { x: 300, w: 70, label: "1.0 kg", v: "at rest" }] }] }), "A 3.0 kilogram cart moving right at 4.0 meters per second toward a 1.0 kilogram cart at rest.")],
  "s-8": [fig(P.beam({ L: 6, supports: [{ at: 3 }], loads: [{ at: 1, kind: "rest", label: "30 kg", w: 44 }, { at: 5, kind: "rest", label: "20 kg", w: 44 }], beamLabel: "massless plank", dims: [{ a: 1, b: 3, label: "2.0 m" }, { a: 3, b: 5, label: "x = ?" }] }), "A massless plank balanced on a pivot with a 30 kilogram child 2.0 meters to the left of the pivot and a 20 kilogram child on the right at an unknown distance x.")],
};
