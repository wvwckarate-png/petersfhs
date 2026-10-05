// Figure assignments for AP Physics 1 Exam 2 (question id -> figures).
import * as P from "./p1figs.mjs";
const { fig } = P;

export default {
  "e2-1": [fig(P.pushedBlock({ label: "5.0 kg", F: "30 N", surface: "rough floor, μk = 0.20" }), "A 5.0 kilogram box on a rough horizontal floor pushed to the right by a 30 newton horizontal force. The coefficient of kinetic friction is 0.20.")],
  "e2-3": [fig(P.atwood({ m1: "2.0 kg", m2: "3.0 kg" }), "Two blocks, 2.0 kilograms and 3.0 kilograms, hanging from opposite ends of a string that passes over a light, frictionless pulley.")],
  "e2-4": [fig(P.carts({ rows: [
    { title: "Before: at rest", items: [{ x: 190, w: 110, label: "6.0 kg", v: "" }] },
    { title: "After: explodes into two pieces", items: [{ x: 90, w: 96, label: "4.0 kg", v: "v = ?", dir: -1 }, { x: 290, w: 70, label: "2.0 kg", v: "9.0 m/s", dir: 1 }] }] }), "A 6.0 kilogram object at rest, then after an explosion a 2.0 kilogram piece moving right at 9.0 meters per second and a 4.0 kilogram piece moving left at an unknown speed.")],
  "e2-6": [fig(P.drum({ mText: "4.0 kg", rText: "r = 0.25 m" }), "A 4.0 kilogram block hanging at rest from a string wound around a drum of radius 0.25 meters that can rotate on a fixed horizontal axle.")],
  "e2-10": [fig(P.incline({ deg: 30, blockLabel: "block", info: "rough, constant speed", arrows: [{ dir: -1, label: "v", len: 44 }] }), "A block sliding down a rough incline that makes a 30 degree angle with the horizontal, moving at constant speed.")],
  "e2-12": [fig(P.circleTop({ rText: "r = 80 m", vText: "20 m/s", objText: "", kind: "car", string: "dashed" }), "Top view of a car moving at a constant 20 meters per second around a flat circular curve of radius 80 meters.")],
  "e2-13": [fig(P.beam({ L: 2, loads: [{ at: 0, kind: "bob", label: "1.0 kg" }, { at: 2, kind: "bob", label: "1.0 kg" }], axis: 0, dims: [{ a: 0, b: 2, label: "2.0 m" }], beamLabel: "light rod" }), "A light rod 2.0 meters long with a 1.0 kilogram mass at each end. The axis of rotation passes through the left end of the rod, perpendicular to it.")],
  "e2-14": [fig(P.pendulum({ lenText: "L = 1.0 m", deg: 60 }), "A pendulum of length 1.0 meter with its bob released from rest when the string makes a 60 degree angle with the vertical. The lowest point of the swing is marked.")],
  "e2-16": [fig(P.perpForces({ label: "2.0 kg", f1: "8.0 N", f2: "6.0 N" }), "Top view of a 2.0 kilogram object on a frictionless surface acted on by an 8.0 newton force to the right and a 6.0 newton force upward, perpendicular to each other.")],
  "e2-17": [fig(P.hydraulic({ F: "200 N", a1: "A = 0.010 m²", a2: "A = 0.50 m²", load: "weight = ?" }), "A hydraulic lift with a small piston of area 0.010 square meters pushed down by a 200 newton force, and a large piston of area 0.50 square meters supporting a load.")],
  "e2-18": [fig(P.hangSign({ label: "10 kg", deg: 30 }), "A 10 kilogram sign hanging motionless from the middle of two cables, each attached to a support and making a 30 degree angle with the horizontal.")],
  "e2-21": [fig(P.scaleReadings({ left: "12 N", right: "8.0 N" }), "A solid object hanging from a spring scale reading 12 newtons in air, and the same object completely submerged in water with the scale reading 8.0 newtons.")],
  "e2-22": [fig(P.carts({ rows: [{ title: "Before the collision", items: [{ x: 40, w: 120, label: "1500 kg", v: "12 m/s", dir: 1 }, { x: 300, w: 96, label: "1000 kg", v: "at rest" }] }] }), "A 1500 kilogram car moving right at 12 meters per second toward a stationary 1000 kilogram car.")],
  "e2-24": [fig(P.springHoriz({ k: "k = 80 N/m", m: "0.20 kg" }), "A 0.20 kilogram block attached to a horizontal spring with force constant 80 newtons per meter, on a frictionless surface.")],
  "e2-27": [fig(P.carts({ rows: [{ title: "Before the collision", items: [{ x: 40, w: 90, label: "2.0 kg", v: "4.0 m/s", dir: 1 }, { x: 330, w: 70, label: "1.0 kg", v: "2.0 m/s", dir: -1 }] }] }), "A 2.0 kilogram cart moving right at 4.0 meters per second toward a 1.0 kilogram cart moving left at 2.0 meters per second.")],
  "e2-30": [fig(P.cliff({ hText: "20 m", vText: "10 m/s", dText: "d = ?" }), "A ball thrown horizontally at 10 meters per second from the top of a 20 meter tall building, with the horizontal distance d from the base of the building to the landing point unknown.")],
  "e2-32": [fig(P.angledPull({ F: "20 N", deg: 30, dist: "5.0 m" }), "A box pulled along a horizontal floor by a 20 newton force directed 30 degrees above the horizontal, moving 5.0 meters.")],
  "e2-38": [fig(P.graph({ x: [0, 0.12, 0.02], y: [0, 24, 4], xLabel: "t (s)", yLabel: "Force (N)", series: [{ name: "F", pts: [[0, 0], [0.1, 20], [0.1, 0]], color: "#D2705A" }] }), "A force versus time graph: the force rises linearly from 0 to 20 newtons over 0.10 seconds and then drops to zero.")],
  "e2-39": [fig(P.graph({ x: [0, 4, 1], y: [0, 14, 2], xLabel: "t (s)", yLabel: "x (m)", series: [{ name: "x", pts: P.curveXT(), color: "#3F7A94" }] }), "A position versus time graph that curves upward, with a positive slope that gets steeper as time increases.")],
};
