// AP Physics 2 FRQ — Sample exam (2 questions, 18 points)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { circuitSeriesParallel, pvSymbolic } from "./p2frqfigs.mjs";

// ---- numbers used in the circuit question (computed so the model answers stay consistent) ----
const V = 12, R1 = 20, R2 = 30, R3 = 60;
const Rpar = (R2 * R3) / (R2 + R3);            // 20 Ω
const Req = R1 + Rpar;                          // 40 Ω
const I = V / Req;                              // 0.30 A
const Vpar = I * Rpar;                          // 6.0 V
const I2 = Vpar / R2;                           // 0.20 A
const Req2 = R1 + R2;                           // 50 Ω
const I_b = V / Req2;                           // 0.24 A
const V2_b = V - I_b * R1;                      // 7.2 V
const P2_a = Vpar ** 2 / R2, P2_b = V2_b ** 2 / R2; // 1.2 W -> 1.728 W
const P1_a = I ** 2 * R1, P1_b = I_b ** 2 * R1;     // 1.8 W -> 1.152 W
if (Math.abs(Req - 40) > 1e-9 || Math.abs(I - 0.3) > 1e-9 || Math.abs(Vpar - 6) > 1e-9 || !(P2_b > P2_a) || !(P1_b < P1_a)) throw new Error("circuit numbers changed");

const circuitFig = fig(circuitSeriesParallel({ V, R1, R2, R3 }),
  "A circuit with a 12 volt battery. A 20 ohm resistor R1 is in series with the battery and with a parallel combination of a 30 ohm resistor R2 and a 60 ohm resistor R3.",
  { caption: "Figure 1" });

const pvFig = fig(pvSymbolic({
  states: [{ label: "A", x: 1, y: 2, dx: -16, dy: -10 }, { label: "B", x: 2, y: 2, dx: 10, dy: -10 }, { label: "C", x: 2, y: 1, dx: 12, dy: 6 }],
  xTicks: [{ at: 1, label: "V_{0}" }, { at: 2, label: "2V_{0}" }], yTicks: [{ at: 1, label: "P_{0}/2" }, { at: 2, label: "P_{0}" }],
  xMax: 2.6, yMax: 2.6, dashes: [{ x1: 1, y1: 2, x2: 1, y2: 0 }, { x1: 0, y1: 2, x2: 1, y2: 2 }, { x1: 0, y1: 1, x2: 2, y2: 1 }, { x1: 2, y1: 2, x2: 2, y2: 0 }],
}), "A pressure versus volume graph. Process A to B is a horizontal line at pressure P naught from volume V naught to 2 V naught. Process B to C is a vertical line down at volume 2 V naught from pressure P naught to P naught over 2.", { caption: "Figure 1", maxWidth: 440 });

export default exam({
  id: "sample",
  title: "Sample Exam",
  description: "A short two-question sample (18 points) so you can see how the FRQ exams work — one derivation question and one circuit question. Safe to try; reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 42,
  topics: ["Unit 9 — Thermodynamics (first law, work, ideal gases)", "Unit 11 — Electric circuits (series and parallel resistors, power)"],
  questions: [
    Q("1", "Mathematical Routines", 22,
      ["A sample of <i>n</i> moles of a monatomic ideal gas is in a cylinder with a frictionless, movable piston. The gas starts in State A with pressure <i>P</i><sub>0</sub> and volume <i>V</i><sub>0</sub>. The gas then undergoes two processes, shown in Figure 1: first it expands at constant pressure to State B, where its volume is 2<i>V</i><sub>0</sub>. Then it is cooled at constant volume to State C, where its pressure is <i>P</i><sub>0</sub>/2."],
      [pvFig],
      [
        P("A", "Derive an expression for the magnitude of the work done by the gas during the process from A to B. Express your answer in terms of <i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with a correct equation for the work done in a constant-pressure process, such as <i>W</i> = −<i>P</i>Δ<i>V</i> (or the area under the curve on a <i>P</i>–<i>V</i> graph)",
          "For a correct final expression, <i>W</i> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>",
        ], ["The work is found from the area under the process curve, or from the equation for a constant-pressure process: |<i>W</i>| = <i>P</i>Δ<i>V</i>. The volume changes from <i>V</i><sub>0</sub> to 2<i>V</i><sub>0</sub>, so Δ<i>V</i> = 2<i>V</i><sub>0</sub> − <i>V</i><sub>0</sub> = <i>V</i><sub>0</sub>. Then |<i>W</i>| = <i>P</i><sub>0</sub>(<i>V</i><sub>0</sub>) = <b><i>P</i><sub>0</sub><i>V</i><sub>0</sub></b>."], { label: "Part A" }),
        P("B", "Derive an expression for the change Δ<i>U</i> in the internal energy of the gas during the process from A to B. Express your answer in terms of <i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with an equation for the internal energy of a monatomic ideal gas, such as <i>U</i> = (3/2)<i>nRT</i>, or Δ<i>U</i> = (3/2)<i>nR</i>Δ<i>T</i>",
          "For using the ideal gas law (<i>PV</i> = <i>nRT</i>) to express the temperature, or the change in temperature, in terms of <i>P</i> and <i>V</i>",
          "For a correct final expression, Δ<i>U</i> = (3/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub>",
        ], ["For a monatomic ideal gas, <i>U</i> = (3/2)<i>nRT</i>, so Δ<i>U</i> = (3/2)<i>nR</i>Δ<i>T</i>. From the ideal gas law, <i>nRT</i> = <i>PV</i>. At State A, <i>nRT</i><sub>A</sub> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>; at State B, <i>nRT</i><sub>B</sub> = <i>P</i><sub>0</sub>(2<i>V</i><sub>0</sub>) = 2<i>P</i><sub>0</sub><i>V</i><sub>0</sub>. Therefore <i>nR</i>Δ<i>T</i> = 2<i>P</i><sub>0</sub><i>V</i><sub>0</sub> − <i>P</i><sub>0</sub><i>V</i><sub>0</sub> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>, and Δ<i>U</i> = (3/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub>."], { label: "Part B" }),
        P("C", "Derive an expression for the energy <i>Q</i> transferred to the gas as heat during the process from A to B. Express your answer in terms of <i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with the first law of thermodynamics, Δ<i>U</i> = <i>Q</i> + <i>W</i> (with <i>W</i> the work done <em>on</em> the gas)",
          "For substituting <i>W</i> = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub> (negative because the gas does work as it expands) and the result from part B",
          "For a correct final expression, <i>Q</i> = (5/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub>",
        ], ["The first law of thermodynamics is Δ<i>U</i> = <i>Q</i> + <i>W</i>, where <i>W</i> is the work done on the gas. The gas expands, so it does work and the work done on it is <i>W</i> = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub>. Solving for the heat: <i>Q</i> = Δ<i>U</i> − <i>W</i> = (3/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub> − (−<i>P</i><sub>0</sub><i>V</i><sub>0</sub>) = <b>(5/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub></b>. Energy flows into the gas: part of it raises the internal energy and part leaves the gas as work on the piston."], { label: "Part C", tip: "Using ΔU = <i>Q</i> + <i>W</i> with <i>W</i> as the work done <em>by</em> the gas gives the wrong sign. The gas expands, so the work done <em>on</em> it is negative, and <i>Q</i> ends up larger than Δ<i>U</i>." }),
        P("D", "During the process from B to C, indicate whether energy is transferred to the gas as heat, from the gas as heat, or whether no energy is transferred as heat. Justify your answer. Your justification may include expressions or equations but must include conceptual reasoning beyond algebraic solutions.", [
          "For indicating that energy is transferred from the gas (the gas loses energy as heat)",
          "For reasoning that the volume is constant so no work is done, and the pressure decreases, so the temperature (and internal energy) decreases; therefore Δ<i>U</i> < 0 and, with <i>W</i> = 0, <i>Q</i> must be negative",
        ], ["Energy is transferred <b>from</b> the gas as heat. The volume does not change from B to C, so no work is done on or by the gas (<i>W</i> = 0). The pressure falls at constant volume, so by <i>PV</i> = <i>nRT</i> the temperature falls, and the internal energy of the ideal gas, which depends only on temperature, decreases (Δ<i>U</i> < 0). The first law gives Δ<i>U</i> = <i>Q</i> + 0, so <i>Q</i> is negative: the gas must give up energy to its surroundings as heat."], { label: "Part D" }),
      ]),
    Q("2", "Qualitative/Quantitative Translation", 20,
      ["A battery with an emf of 12 V and negligible internal resistance is connected to three resistors as shown in Figure 1. Resistor R<sub>1</sub> has resistance 20 Ω, R<sub>2</sub> has resistance 30 Ω, and R<sub>3</sub> has resistance 60 Ω."],
      [circuitFig],
      [
        P("A", "Calculate the current in the battery. Show your work.", [
          "For a correct calculation of the equivalent resistance of the parallel combination of R<sub>2</sub> and R<sub>3</sub> (20 Ω)",
          "For adding the series resistor to obtain the equivalent resistance of the whole circuit (40 Ω)",
          "For using Ohm's law with the battery emf and the equivalent resistance to obtain a current of 0.30 A",
        ], ["The parallel combination: 1/<i>R</i><sub>p</sub> = 1/30 + 1/60 = 3/60, so <i>R</i><sub>p</sub> = 20 Ω. The parallel combination is in series with R<sub>1</sub>, so <i>R</i><sub>eq</sub> = 20 Ω + 20 Ω = 40 Ω. By Ohm's law the battery current is <i>I</i> = <i>V</i>/<i>R</i><sub>eq</sub> = 12 V / 40 Ω = <b>0.30 A</b>."], { label: "Part A" }),
        P("B", "Calculate the current in resistor R<sub>2</sub>. Show your work.", [
          "For a correct current of 0.20 A in R<sub>2</sub>, supported by the potential difference across the parallel combination (6.0 V, from (0.30 A)(20 Ω) or from 12 V − (0.30 A)(20 Ω))",
        ], ["R<sub>2</sub> and R<sub>3</sub> share the same potential difference. The current through R<sub>1</sub> is the full 0.30 A, so the voltage across R<sub>1</sub> is (0.30 A)(20 Ω) = 6.0 V and the voltage across the parallel combination is 12 V − 6.0 V = 6.0 V. Then <i>I</i><sub>2</sub> = 6.0 V / 30 Ω = <b>0.20 A</b> (the other 0.10 A goes through R<sub>3</sub>)."], { label: "Part B" }),
        P("C", "Resistor R<sub>3</sub> is removed from the circuit. Indicate whether the power dissipated in R<sub>1</sub> increases, decreases, or remains the same. Justify your answer.", [
          "For indicating that the power dissipated in R<sub>1</sub> decreases",
          "For reasoning that removing a parallel branch increases the equivalent resistance of the circuit, so the total current (the current in R<sub>1</sub>) decreases, and <i>P</i> = <i>I</i><sup>2</sup><i>R</i> with <i>R</i> unchanged",
        ], ["The power dissipated in R<sub>1</sub> <b>decreases</b>. Removing R<sub>3</sub> takes away one of the two parallel paths, so the equivalent resistance of the circuit rises from 40 Ω to 50 Ω. With the battery emf fixed, the total current falls from 0.30 A to 0.24 A. All of that current passes through R<sub>1</sub>, and its resistance has not changed, so <i>P</i> = <i>I</i><sup>2</sup><i>R</i> drops from 1.8 W to about 1.15 W."], { label: "Part C" }),
        P("D", "With R<sub>3</sub> removed, indicate whether the power dissipated in R<sub>2</sub> increases, decreases, or remains the same. Justify your answer.", [
          "For indicating that the power dissipated in R<sub>2</sub> increases",
          "For reasoning that the smaller current in R<sub>1</sub> means a smaller potential difference across R<sub>1</sub>, so a larger share of the 12 V appears across R<sub>2</sub>, and <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> with <i>R</i> unchanged",
        ], ["The power dissipated in R<sub>2</sub> <b>increases</b>. Even though the total current decreases, the potential difference across R<sub>1</sub> decreases (from 6.0 V to 4.8 V), so the potential difference across R<sub>2</sub> — the rest of the 12 V — increases (from 6.0 V to 7.2 V). Since R<sub>2</sub> is unchanged, <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> increases from 1.2 W to about 1.73 W. This shows that a quantity can rise in one part of a circuit while the total current falls."], { label: "Part D", tip: "Many students say the power in R<sub>2</sub> must fall because “the current went down.” Power in R<sub>2</sub> depends on the voltage across it (<i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>), and that voltage goes up." }),
      ]),
  ],
});
