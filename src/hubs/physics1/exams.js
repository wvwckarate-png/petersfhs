// AP Physics 1 — full-length MCQ exams.
// Format follows the May 2027 exam: 42 multiple-choice questions, 85 minutes (College Board).
// Unit targets for a full exam (42 questions): U1 5, U2 8, U3 8, U4 5, U5 5, U6 3, U7 3, U8 5.
// All numerical problems use g = 10 m/s².

import EXAM_1 from "./exams/exam1";
import EXAM_2 from "./exams/exam2";
import EXAM_3 from "./exams/exam3";
import EXAM_4 from "./exams/exam4";

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
        "Displacement is the area under the velocity–time graph. During the first 3 s the average velocity is (2 + 8)/2 = 5 m/s, giving 15 m. During the next 2 s the cart travels 8 × 2 = 16 m. The total is 15 + 16 = 31 m. Using the average of 2 and 8 for the whole trip (25 m) ignores that the last 2 s are at constant speed, and 40 m wrongly uses the top speed for all 5 s.",
    },
    {
      id: "s-2",
      unit: 1,
      stem: "A small ball rolls off the edge of a table 1.25 m above the floor with a horizontal speed of 4.0 m/s. Air resistance is negligible. How far from the base of the table does the ball land?",
      choices: ["1.0 m", "2.0 m", "4.0 m", "5.0 m"],
      correct: 1,
      explanation:
        "The vertical and horizontal motions are independent. Vertically, the ball starts with no vertical velocity, so 1.25 = ½(10)t², giving t = 0.5 s. Horizontally it moves at a constant 4.0 m/s, so x = 4.0 × 0.5 = 2.0 m. Answering 4.0 m treats the fall as taking 1 s, and 1.0 m uses half the fall time incorrectly.",
    },
    {
      id: "s-3",
      unit: 2,
      stem: "A 4.0 kg block rests on a frictionless horizontal table. It is connected by a light string over a frictionless pulley to a 1.0 kg block that hangs over the edge of the table. After the blocks are released, what is the tension in the string?",
      choices: ["8 N", "10 N", "20 N", "40 N"],
      correct: 0,
      explanation:
        "Treat the two blocks as one system: the net force is the hanging block's weight, 10 N, and the total mass is 5.0 kg, so a = 2 m/s². The tension is the only horizontal force on the 4.0 kg block, so T = (4.0)(2) = 8 N. The tension is less than 10 N because the hanging block is accelerating downward. 40 N is the weight of the table block, which is balanced by the table and does not enter the horizontal motion.",
    },
    {
      id: "s-4",
      unit: 2,
      stem: "A 5.0 kg block slides on a rough horizontal floor. The coefficient of kinetic friction between the block and the floor is 0.30. A person pushes the block with a constant horizontal force of 20 N. What is the magnitude of the block's acceleration?",
      choices: ["1.0 m/s²", "3.7 m/s²", "4.0 m/s²", "5.0 m/s²"],
      correct: 0,
      explanation:
        "The normal force equals the weight, 50 N, so kinetic friction is (0.30)(50) = 15 N, opposing the motion. The net force is 20 − 15 = 5 N, so a = 5/5.0 = 1.0 m/s². 4.0 m/s² ignores friction (20/5.0). 3.7 m/s² results from using the mass instead of the weight to find the friction force. 5.0 m/s² mistakes the net force in newtons for the acceleration.",
    },
    {
      id: "s-5",
      unit: 3,
      stem: "A 2.0 kg block is released from rest at the top of a frictionless curved track, 1.8 m above the bottom. What is the speed of the block at the bottom of the track?",
      choices: ["3.0 m/s", "6.0 m/s", "9.0 m/s", "18 m/s"],
      correct: 1,
      explanation:
        "With no friction, mechanical energy is conserved: mgh = ½mv². The mass cancels, so v = √(2gh) = √(2 × 10 × 1.8) = √36 = 6.0 m/s. The mass does not change the answer, and the shape of the track does not matter, only the height. 18 m/s results from forgetting the square root.",
    },
    {
      id: "s-6",
      unit: 3,
      stem: "A motor lifts a 50 kg crate straight up at a constant speed of 0.40 m/s. How much work does the motor do on the crate in 5.0 s?",
      choices: ["100 J", "200 J", "500 J", "1000 J"],
      correct: 3,
      explanation:
        "At constant speed the upward force from the motor equals the weight: F = mg = 500 N. In 5.0 s the crate rises d = (0.40)(5.0) = 2.0 m, so W = Fd = (500)(2.0) = 1000 J. 200 J is the motor's power (500 N × 0.40 m/s) rather than the work, and 100 J and 500 J come from dropping either the distance or the time.",
    },
    {
      id: "s-7",
      unit: 4,
      stem: "A 3.0 kg cart moving at 4.0 m/s collides with a 1.0 kg cart at rest, and the two carts stick together. How much kinetic energy is lost in the collision?",
      choices: ["6 J", "12 J", "18 J", "24 J"],
      correct: 0,
      explanation:
        "Momentum is conserved: (3.0)(4.0) = (4.0)v, so v = 3.0 m/s. The initial kinetic energy is ½(3.0)(4.0)² = 24 J, and the final is ½(4.0)(3.0)² = 18 J. The energy lost is 24 − 18 = 6 J. The values 24 J and 18 J are the initial and final energies, not the loss.",
    },
    {
      id: "s-8",
      unit: 5,
      stem: "A massless plank is balanced on a pivot. A 30 kg child sits 2.0 m to the left of the pivot. At what distance to the right of the pivot must a 20 kg child sit so that the plank remains balanced and horizontal?",
      choices: ["1.3 m", "2.0 m", "3.0 m", "4.5 m"],
      correct: 2,
      explanation:
        "For rotational equilibrium the net torque about the pivot is zero: (30)(g)(2.0) = (20)(g)(d), so d = (30 × 2.0)/20 = 3.0 m. The lighter child must sit farther from the pivot. 1.3 m results from inverting the ratio, and 2.0 m would only balance two equal masses.",
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
        "No external torque acts, so angular momentum L = Iω is constant. Pulling her arms in decreases her rotational inertia I, so ω must increase. Rotational kinetic energy is K = L²/(2I), which increases as I decreases — the extra energy comes from the work her muscles do pulling her arms inward. Choice A is wrong because L cannot change without an external torque, and choice C is wrong because K changes when I changes at fixed L.",
    },
    {
      id: "s-10",
      unit: 7,
      stem: "A block attached to an ideal spring oscillates on a frictionless surface with period T. The block is replaced by one with 9 times the mass, and the spring is unchanged. What is the new period of oscillation?",
      choices: ["T/9", "T/3", "3T", "9T"],
      correct: 2,
      explanation:
        "For a mass–spring system the period is T = 2π√(m/k). Multiplying the mass by 9 multiplies the period by √9 = 3, so the new period is 3T. The period depends on the square root of the mass, so it does not change by the full factor of 9, and a larger mass makes the period longer, not shorter.",
    },
    {
      id: "s-11",
      unit: 8,
      stem: "A solid block with a density of 600 kg/m³ floats at rest in a container of water (density 1000 kg/m³). What fraction of the block's volume is below the water's surface?",
      choices: ["40%", "60%", "75%", "100%"],
      correct: 1,
      explanation:
        "A floating object is in equilibrium, so the buoyant force equals its weight: ρ<sub>water</sub> · V<sub>sub</sub> · g = ρ<sub>block</sub> · V<sub>total</sub> · g. Then V<sub>sub</sub>/V<sub>total</sub> = ρ<sub>block</sub>/ρ<sub>water</sub> = 600/1000 = 0.60, or 60%. A block that sank would be 100% submerged, but it floats because it is less dense than water. 40% is the fraction above the surface.",
    },
  ],
};

const FULL_DESCRIPTION =
  "A full-length, 42-question exam with units weighted like the real AP Physics 1 exam. Every question is new — none repeat from MCQ Practice.";

const FULL_EXAMS = [EXAM_1, EXAM_2, EXAM_3, EXAM_4].map((questions, i) => ({
  id: `exam-${i + 1}`,
  title: `Exam ${i + 1}`,
  description: FULL_DESCRIPTION,
  questions,
}));

const EXAMS = [SAMPLE_EXAM, ...FULL_EXAMS];

export { EXAM_FORMAT, EXAMS };
