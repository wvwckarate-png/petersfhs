// AP Physics 1 — full-length MCQ exams.
// Format follows the May 2027 exam: 42 multiple-choice questions, 85 minutes (College Board).
// Unit targets for a full exam (42 questions): U1 5, U2 8, U3 8, U4 5, U5 5, U6 3, U7 3, U8 5.
// All numerical problems use g = 10 m/s².

import EXAM_1 from "./exams/exam1";
import EXAM_2 from "./exams/exam2";
import EXAM_3 from "./exams/exam3";
import EXAM_4 from "./exams/exam4";
import SAMPLE_FIGURES from "./exams/sample-figures";

const EXAM_FORMAT = {
  questions: 42,
  minutes: 85,
  // Approximate cutoffs on the multiple-choice section alone (% correct). Adjustable.
  bands: [
    { ap: 5, min: 70 },
    { ap: 4, min: 55 },
    { ap: 3, min: 42 },
    { ap: 2, min: 30 },
  ],
};

const SAMPLE_EXAM = {
  id: "sample",
  title: "Sample Exam",
  description:
    "A short 11-question sample touching all eight units, so you can see how the exam works. Safe to try — reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 20,
  questions: [
    {
      id: "s-1",
      unit: 1,
      stem: "A cart's velocity increases uniformly from 2 m/s to 8 m/s during the first 3 s of its motion, and then it moves at a constant 8 m/s for the next 2 s. What is the cart's total displacement during the 5 s?",
      choices: ["16 m", "25 m", "31 m", "40 m"],
      correct: 2,
      explanation:
        "Correct: (C) 31 m. Displacement is the area under the velocity–time graph. During the first 3 s the velocity rises uniformly, so the average velocity is (2 + 8)/2 = 5 m/s and the displacement is (5 m/s)(3 s) = 15 m (the area of a trapezoid). During the next 2 s the cart moves at a constant 8 m/s, covering (8 m/s)(2 s) = 16 m. The total displacement is 15 m + 16 m = 31 m.\n\n(A) is wrong because 16 m is only the distance traveled during the last 2 s at constant speed; it leaves out the 15 m from the first 3 s.\n(B) is wrong because 25 m uses the average of 2 and 8 m/s for all 5 s, ignoring that the last 2 s are at a constant 8 m/s.\n(D) is wrong because 40 m uses the top speed of 8 m/s for all 5 s, ignoring that the cart starts at only 2 m/s.",
    },
    {
      id: "s-2",
      unit: 1,
      stem: "A small ball rolls off the edge of a table 1.25 m above the floor with a horizontal speed of 4.0 m/s. Air resistance is negligible. How far from the base of the table does the ball land?",
      choices: ["1.0 m", "2.0 m", "4.0 m", "5.0 m"],
      correct: 1,
      explanation:
        "Correct: (B) 2.0 m. The horizontal and vertical motions are independent. Vertically the ball starts with zero vertical velocity and falls 1.25 m: 1.25 m = ½(10 m/s²)t², so t² = 0.25 s² and t = 0.50 s. Horizontally there is no force, so the 4.0 m/s speed stays constant: x = (4.0 m/s)(0.50 s) = 2.0 m from the base of the table.\n\n(A) is wrong because 1.0 m uses t = 0.25 s, which is t² mistaken for t; the square root of 0.25 is 0.50 s.\n(C) is wrong because 4.0 m assumes a 1.0 s fall time, but a 1.25 m fall from rest takes only 0.50 s.\n(D) is wrong because 5.0 m multiplies the horizontal speed by the table height (4.0 × 1.25), which has no physical basis.",
    },
    {
      id: "s-3",
      unit: 2,
      stem: "A 4.0 kg block rests on a frictionless horizontal table. It is connected by a light string over a frictionless pulley to a 1.0 kg block that hangs over the edge of the table. After the blocks are released, what is the tension in the string?",
      choices: ["8 N", "10 N", "20 N", "40 N"],
      correct: 0,
      explanation:
        "Correct: (A) 8 N. Treat both blocks as one system connected by the string. The only unbalanced external force is the hanging block's weight, (1.0 kg)(10 m/s²) = 10 N, and the total mass is 5.0 kg, so a = 10 N ÷ 5.0 kg = 2.0 m/s². The tension is the only horizontal force on the 4.0 kg block, so T = (4.0 kg)(2.0 m/s²) = 8.0 N. Check on the hanging block: 10 N − 8 N = (1.0 kg)(2.0 m/s²).\n\n(B) is wrong because 10 N is the hanging block's weight; the tension would equal it only if the hanging block were not accelerating downward.\n(C) is wrong because 20 N exceeds the hanging block's 10 N weight, which would make that block accelerate upward, contradicting the motion.\n(D) is wrong because 40 N is the weight of the 4.0 kg block on the table, which is balanced by the normal force and does not set the tension.",
    },
    {
      id: "s-4",
      unit: 2,
      stem: "A 5.0 kg block slides on a rough horizontal floor. The coefficient of kinetic friction between the block and the floor is 0.30. A person pushes the block with a constant horizontal force of 20 N. What is the magnitude of the block's acceleration?",
      choices: ["1.0 m/s²", "3.7 m/s²", "4.0 m/s²", "5.0 m/s²"],
      correct: 0,
      explanation:
        "Correct: (A) 1.0 m/s². The floor is horizontal, so the normal force equals the weight: N = mg = (5.0 kg)(10 m/s²) = 50 N. Kinetic friction is f = μ<sub>k</sub>N = (0.30)(50 N) = 15 N, opposing the motion. The net horizontal force is 20 N − 15 N = 5 N, so by Newton's second law a = F<sub>net</sub>/m = 5 N ÷ 5.0 kg = 1.0 m/s².\n\n(B) is wrong because 3.7 m/s² uses the mass instead of the weight for friction: f = (0.30)(5.0) = 1.5 N, giving (20 − 1.5)/5.0 = 3.7 m/s².\n(C) is wrong because 4.0 m/s² ignores friction entirely, dividing the full 20 N push by the 5.0 kg mass.\n(D) is wrong because 5.0 m/s² takes the 5 N net force as the acceleration and forgets to divide by the 5.0 kg mass.",
    },
    {
      id: "s-5",
      unit: 3,
      stem: "A 2.0 kg block is released from rest at the top of a frictionless curved track, 1.8 m above the bottom. What is the speed of the block at the bottom of the track?",
      choices: ["3.0 m/s", "6.0 m/s", "9.0 m/s", "18 m/s"],
      correct: 1,
      explanation:
        "Correct: (B) 6.0 m/s. The track is frictionless and the normal force does no work, so mechanical energy is conserved: mgh = ½mv². The mass cancels, giving v = √(2gh) = √(2 × 10 m/s² × 1.8 m) = √(36 m²/s²) = 6.0 m/s. Only the height drop matters, not the 2.0 kg mass or the shape of the curved track.\n\n(A) is wrong because 3.0 m/s is half the correct speed, as if the speed came from √(gh/2) instead of √(2gh).\n(C) is wrong because 9.0 m/s is gh/2 = (10)(1.8)/2 with no square root, which also has the wrong units for a speed.\n(D) is wrong because 18 m/s is gh = (10)(1.8) without the factor of 2 or the square root, so it is not a speed.",
    },
    {
      id: "s-6",
      unit: 3,
      stem: "A motor lifts a 50 kg crate straight up at a constant speed of 0.40 m/s. How much work does the motor do on the crate in 5.0 s?",
      choices: ["100 J", "200 J", "500 J", "1000 J"],
      correct: 3,
      explanation:
        "Correct: (D) 1000 J. At constant speed the net force is zero, so the motor's upward force equals the crate's weight: F = mg = (50 kg)(10 m/s²) = 500 N. In 5.0 s the crate rises d = vt = (0.40 m/s)(5.0 s) = 2.0 m. The work done by the motor is W = Fd = (500 N)(2.0 m) = 1000 J. Equivalently, power is Fv = 200 W, and 200 W × 5.0 s = 1000 J.\n\n(A) is wrong because 100 J leaves out g, multiplying the 50 kg mass by the 2.0 m height instead of using the 500 N weight.\n(B) is wrong because 200 J is the motor's power, (500 N)(0.40 m/s) = 200 W, which must still be multiplied by the 5.0 s.\n(C) is wrong because 500 J is just the weight in newtons, treated as if the crate rose only 1 m instead of 2.0 m.",
    },
    {
      id: "s-7",
      unit: 4,
      stem: "A 3.0 kg cart moving at 4.0 m/s collides with a 1.0 kg cart at rest, and the two carts stick together. How much kinetic energy is lost in the collision?",
      choices: ["6 J", "12 J", "18 J", "24 J"],
      correct: 0,
      explanation:
        "Correct: (A) 6 J. Momentum is conserved in the collision: (3.0 kg)(4.0 m/s) = (4.0 kg)v, so v = 3.0 m/s. The initial kinetic energy is ½(3.0 kg)(4.0 m/s)² = 24 J, and the final kinetic energy is ½(4.0 kg)(3.0 m/s)² = 18 J. The kinetic energy lost to heat, sound and deformation in this perfectly inelastic collision is 24 J − 18 J = 6 J.\n\n(B) is wrong because 12 J assumes half the kinetic energy is lost, but the loss depends on the mass ratio and works out to 6 J here.\n(C) is wrong because 18 J is the final kinetic energy of the joined carts, not the amount that was lost.\n(D) is wrong because 24 J is the initial kinetic energy; it would mean the carts stopped, which violates momentum conservation.",
    },
    {
      id: "s-8",
      unit: 5,
      stem: "A massless plank is balanced on a pivot. A 30 kg child sits 2.0 m to the left of the pivot. At what distance to the right of the pivot must a 20 kg child sit so that the plank remains balanced and horizontal?",
      choices: ["1.3 m", "2.0 m", "3.0 m", "4.5 m"],
      correct: 2,
      explanation:
        "Correct: (C) 3.0 m. For the plank to stay balanced, the net torque about the pivot must be zero, so the counterclockwise torque from the left child equals the clockwise torque from the right child: (30 kg)(g)(2.0 m) = (20 kg)(g)(d). The g cancels, so d = (30 × 2.0)/20 = 3.0 m. The lighter child must sit farther from the pivot to produce the same 600 N·m torque.\n\n(A) is wrong because 1.3 m inverts the mass ratio, d = (20 × 2.0)/30, which would put the lighter child closer and leave the plank unbalanced.\n(B) is wrong because 2.0 m balances only two equal masses; the 20 kg child at 2.0 m produces less torque than the 30 kg child.\n(D) is wrong because 4.5 m applies the 30/20 ratio twice, 2.0 × (1.5)², giving too much torque on the right side.",
    },
    {
      id: "s-9",
      unit: 6,
      stem: "A skater spins on frictionless ice with her arms extended. She then pulls her arms in close to her body. Compared with before she pulled her arms in, which of the following correctly describes her motion afterward?",
      choices: [
        "Her angular momentum, angular speed, and rotational kinetic energy all increase.",
        "Her angular momentum is unchanged, her angular speed increases, and her rotational kinetic energy increases.",
        "Her angular momentum is unchanged, her angular speed increases, and her rotational kinetic energy is unchanged.",
        "Her angular momentum is unchanged, her angular speed is unchanged, and her rotational kinetic energy decreases.",
      ],
      correct: 1,
      explanation:
        "Correct: (B) Her angular momentum is unchanged, her angular speed increases, and her rotational kinetic energy increases. No external torque acts on the skater (the ice is frictionless), so her angular momentum L = Iω is conserved. Pulling her arms in brings mass closer to the axis and decreases her rotational inertia I, so ω must increase to keep L constant. Her rotational kinetic energy is K = ½Iω² = L²/(2I); with L fixed and I smaller, K increases. The extra energy comes from the work her muscles do pulling her arms inward.\n\n(A) is wrong because angular momentum cannot increase without an external torque, and none acts on the skater on frictionless ice.\n(C) is wrong because kinetic energy K = L²/(2I) rises when I falls at constant L, because her muscles do positive work.\n(D) is wrong because angular speed must increase when rotational inertia decreases at fixed L, and her kinetic energy increases rather than decreases.",
    },
    {
      id: "s-10",
      unit: 7,
      stem: "A block attached to an ideal spring oscillates on a frictionless surface with period T. The block is replaced by one with 9 times the mass, and the spring is unchanged. What is the new period of oscillation?",
      choices: ["T/9", "T/3", "3T", "9T"],
      correct: 2,
      explanation:
        "Correct: (C) 3T. For a mass–spring oscillator the period is T = 2π√(m/k), so the period is proportional to the square root of the mass. With the spring constant unchanged and the mass multiplied by 9, the new period is T' = 2π√(9m/k) = √9 · T = 3T. A heavier block accelerates less for the same spring force, so it oscillates more slowly.\n\n(A) is wrong because T/9 assumes the period is inversely proportional to the mass, but a larger mass makes the period longer.\n(B) is wrong because T/3 uses the correct square-root factor but inverts it, so it wrongly makes the period shorter.\n(D) is wrong because 9T assumes the period is proportional to the mass itself, but it depends on the square root of the mass.",
    },
    {
      id: "s-11",
      unit: 8,
      stem: "A solid block with a density of 600 kg/m³ floats at rest in a container of water (density 1000 kg/m³). What fraction of the block's volume is below the water's surface?",
      choices: ["40%", "60%", "75%", "100%"],
      correct: 1,
      explanation:
        "Correct: (B) 60%. A floating block is in equilibrium, so the buoyant force equals its weight: ρ<sub>water</sub>V<sub>sub</sub>g = ρ<sub>block</sub>V<sub>total</sub>g. The g cancels, giving V<sub>sub</sub>/V<sub>total</sub> = ρ<sub>block</sub>/ρ<sub>water</sub> = (600 kg/m³)/(1000 kg/m³) = 0.60. So 60% of the block's volume is below the surface, and the other 40% sticks out above the water.\n\n(A) is wrong because 40% is the fraction of the block above the water's surface, not the fraction below it.\n(C) is wrong because 75% does not follow from the density ratio; the submerged fraction is 600/1000 = 0.60, not 0.75.\n(D) is wrong because 100% submerged applies to a block that is at least as dense as water, but this block floats because it is less dense.",
    },
  ],
};

const FULL_DESCRIPTION =
  "A full-length, 42-question exam with units weighted like the real AP Physics 1 exam. Every question is new — none repeat from MCQ Practice. Many questions include diagrams and graphs.";

const FULL_EXAMS = [EXAM_1, EXAM_2, EXAM_3, EXAM_4].map((questions, i) => ({
  id: `exam-${i + 1}`,
  title: `Exam ${i + 1}`,
  description: FULL_DESCRIPTION,
  questions,
}));

SAMPLE_EXAM.questions = SAMPLE_EXAM.questions.map((q) => (SAMPLE_FIGURES[q.id] ? { ...q, figures: SAMPLE_FIGURES[q.id] } : q));

const EXAMS = [SAMPLE_EXAM, ...FULL_EXAMS];

export { EXAM_FORMAT, EXAMS };
