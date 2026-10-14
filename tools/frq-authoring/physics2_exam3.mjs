// AP Physics 2 FRQ — Exam 3 (40 points, 95 minutes)
import { exam, P, Q, fig, table, chart } from "./frqlib.mjs";
import { energyLevels, equipotentials, inductionLoop } from "./p2frqfigs.mjs";

// ---- Q1: check the hydrogen-like numbers used in the model response ----
const E0 = 13.6, hc = 1240;
const lam32 = (36 * hc) / (5 * E0);                    // 656.5 nm
if (Math.abs(lam32 - 656.5) > 0.5) throw new Error("lambda 3->2");

// ---- Q2: uniform field between equipotentials ----
const dV = 10, dx = 0.020, Efield = dV / dx;             // 500 V/m
const e = 1.60e-19, mp = 1.67e-27;
const Kp = e * 30;                                       // 4.8e-18 J
const vp = Math.sqrt((2 * Kp) / mp);                     // 7.6e4 m/s
if (Math.abs(Efield - 500) > 1e-9 || Math.abs(vp - 7.58e4) > 300) throw new Error("equipotential numbers");

// ---- Q3: double-slit data ----
const d = 0.25e-3;
const Ls = [0.8, 1.2, 1.6, 2.0, 2.4];
const noise = [0.05, -0.07, 0.04, -0.03, 0.06];
const dy = Ls.map((L, i) => +(2.5 * L + noise[i]).toFixed(2));
const slope = (6.0 - 1.0) / (2.4 - 0.4);                 // mm per m
const lamExp = (slope * 1e-3) * d;                       // 6.25e-7 m
if (Math.abs(slope - 2.5) > 1e-9 || Math.abs(lamExp - 6.25e-7) > 1e-12) throw new Error("slit numbers");

// ---- Q4: moving loop ----
const B = 0.30, side = 0.20, R = 0.50, vl = 2.0;
const emf = B * side * vl, I = emf / R, F = I * side * B, Pw = I * I * R;
if (Math.abs(emf - 0.12) > 1e-12 || Math.abs(I - 0.24) > 1e-12 || Math.abs(F - 0.0144) > 1e-12 || Math.abs(Pw - F * vl) > 1e-12) throw new Error("induction numbers");

const levelsFig = fig(energyLevels({ levels: [{ n: 1, E: -13.6 }, { n: 2, E: -3.40 }, { n: 3, E: -1.51 }] }),
  "An energy level diagram for a hydrogen-like atom: the n equals 1 level at negative 13.6 electron volts, the n equals 2 level at negative 3.40 electron volts, the n equals 3 level at negative 1.51 electron volts, and a dashed line at 0 electron volts for the ionized atom.",
  { caption: "Figure 1", maxWidth: 440 });

const equiFig = fig(equipotentials({ lines: [{ x: 0, v: "30 V" }, { x: 2, v: "20 V" }, { x: 4, v: "10 V" }, { x: 6, v: "0 V" }], xMaxCm: 8 }),
  "Four vertical, dashed equipotential lines labeled 30 volts at x equals 0, 20 volts at x equals 2 centimeters, 10 volts at x equals 4 centimeters, and 0 volts at x equals 6 centimeters.",
  { caption: "Figure 1. Equipotential lines in a region of electric field." });
const equiModelA = fig(equipotentials({ lines: [{ x: 0, v: "30 V" }, { x: 2, v: "20 V" }, { x: 4, v: "10 V" }, { x: 6, v: "0 V" }], xMaxCm: 8, fieldArrows: [{ x1: 0.3, x2: 5.7, y: 90 }, { x1: 0.3, x2: 5.7, y: 130 }, { x1: 0.3, x2: 5.7, y: 170 }] }),
  "The same equipotential lines with three evenly spaced horizontal field lines drawn between them, each with an arrowhead pointing to the right, in the direction of decreasing potential.",
  { caption: "Model: field lines are perpendicular to the equipotentials, evenly spaced, and point toward lower potential (+x)." });
const UpModel = fig(chart({
  w: 520, h: 300, x: [0, 6, 1], y: [0, 35, 5], xLabel: "Position x (cm)", yLabel: "Electric potential energy of the proton (eV)",
  series: [{ name: "U", pts: [[0, 30], [6, 0]], color: "#3F7A94" }],
}), "A graph of the proton's electric potential energy versus position: a straight line sloping down from 30 electron volts at x equals 0 to 0 electron volts at x equals 6 centimeters.",
{ caption: "Model graph: U = eV decreases linearly from 30 eV (4.8 × 10⁻¹⁸ J) at x = 0 to 0 at x = 6 cm." });

const slitTable = table(["Trial", "Slit-to-screen distance <i>L</i> (m)", "Fringe spacing Δ<i>y</i> (mm)"], Ls.map((L, i) => [String(i + 1), L.toFixed(2), dy[i].toFixed(2)]), "Table 1");

const loopFig = fig(inductionLoop({}),
  "A square conducting loop of side 0.20 meters and resistance 0.50 ohms moves to the right at 2.0 meters per second toward a region on the right containing a uniform magnetic field of 0.30 tesla directed into the page.",
  { caption: "Figure 1. The loop is about to enter the field region.", maxWidth: 540 });

export default exam({
  id: "exam3",
  title: "Exam 3",
  description: "A full-length, four-question free-response exam: energy levels and matter waves, equipotentials, a double-slit experiment, and electromagnetic induction.",
  minutes: 95,
  topics: ["Unit 15 — Modern physics (energy levels, photons, matter waves)", "Unit 10 — Electric force, field, and potential (equipotential lines)", "Unit 14 — Waves, sound, and physical optics (double-slit interference)", "Unit 12 — Magnetism and electromagnetic induction (Faraday's and Lenz's laws)"],
  questions: [
    Q("1", "Mathematical Routines", 23,
      ["The energy levels of a hypothetical hydrogen-like atom are given by <i>E</i><sub><i>n</i></sub> = −<i>E</i><sub>0</sub>/<i>n</i><sup>2</sup>, where <i>n</i> = 1, 2, 3, … and <i>E</i><sub>0</sub> = 13.6 eV, as shown in Figure 1."],
      [levelsFig],
      [
        P("A", "The atom makes a transition from the <i>n</i> = 3 level to the <i>n</i> = 2 level and emits a photon. Derive an expression for the wavelength λ of the emitted photon. Express your answer in terms of <i>E</i><sub>0</sub> and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with an equation relating photon energy to wavelength, such as <i>E</i> = <i>hf</i> with <i>c</i> = <i>f</i>λ (or <i>E</i> = <i>hc</i>/λ)",
          "For a correct expression for the energy of the photon: Δ<i>E</i> = <i>E</i><sub>3</sub> − <i>E</i><sub>2</sub> = <i>E</i><sub>0</sub>(1/4 − 1/9) = 5<i>E</i><sub>0</sub>/36",
          "For a correct final expression, λ = 36<i>hc</i>/(5<i>E</i><sub>0</sub>)",
        ], ["The photon energy equals the energy lost by the atom: <i>E</i><sub>photon</sub> = <i>E</i><sub>3</sub> − <i>E</i><sub>2</sub> = −<i>E</i><sub>0</sub>/9 + <i>E</i><sub>0</sub>/4 = <i>E</i><sub>0</sub>(9 − 4)/36 = 5<i>E</i><sub>0</sub>/36. A photon has <i>E</i> = <i>hf</i> = <i>hc</i>/λ, so λ = <i>hc</i>/<i>E</i><sub>photon</sub> = <b>36<i>hc</i>/(5<i>E</i><sub>0</sub>)</b>. (Numerically, 36(1240 eV·nm)/(5 × 13.6 eV) ≈ 656 nm, red light.)"], { label: "Part A" }),
        P("B", "An electron of mass <i>m</i> and charge magnitude <i>e</i> is accelerated from rest through a potential difference Δ<i>V</i>. Derive an expression for the de Broglie wavelength of the electron after it has been accelerated. Express your answer in terms of <i>m</i>, <i>e</i>, Δ<i>V</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with the de Broglie relationship, λ = <i>h</i>/<i>p</i>",
          "For using energy conservation to relate the kinetic energy gained to the potential difference: <i>e</i>Δ<i>V</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/(2<i>m</i>)",
          "For a correct final expression, λ = <i>h</i>/√(2<i>me</i>Δ<i>V</i>)",
        ], ["The de Broglie wavelength is λ = <i>h</i>/<i>p</i>. The electron gains kinetic energy equal to the loss of electric potential energy: <i>e</i>Δ<i>V</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/(2<i>m</i>), so <i>p</i> = √(2<i>me</i>Δ<i>V</i>). Therefore <b>λ = <i>h</i>/√(2<i>me</i>Δ<i>V</i>)</b>. A larger accelerating potential means a larger momentum and a shorter wavelength."], { label: "Part B" }),
        P("C", "Light of frequency <i>f</i> is incident on a metal surface with work function φ, and photoelectrons are emitted. Derive an expression for the stopping potential <i>V</i><sub>s</sub> — the smallest potential difference that stops even the most energetic photoelectrons. Express your answer in terms of <i>f</i>, φ, <i>e</i>, and physical constants, as appropriate.", [
          "For starting with the photoelectric effect equation, <i>K</i><sub>max</sub> = <i>hf</i> − φ, and relating the maximum kinetic energy to the stopping potential by <i>K</i><sub>max</sub> = <i>eV</i><sub>s</sub>",
          "For a correct final expression, <i>V</i><sub>s</sub> = (<i>hf</i> − φ)/<i>e</i>",
        ], ["The most energetic photoelectrons leave with <i>K</i><sub>max</sub> = <i>hf</i> − φ. To stop them, the electric force must do work equal to <i>K</i><sub>max</sub> across the stopping potential: <i>eV</i><sub>s</sub> = <i>K</i><sub>max</sub>. Then <b><i>V</i><sub>s</sub> = (<i>hf</i> − φ)/<i>e</i></b>. A graph of <i>V</i><sub>s</sub> versus <i>f</i> is a straight line with slope <i>h</i>/<i>e</i>."], { label: "Part C", tip: "When the stopping potential is in volts, the maximum kinetic energy in eV has the same numerical value (<i>K</i><sub>max</sub> = <i>eV</i><sub>s</sub>). Keep joules and electron-volts straight." }),
        P("D", "A beam of electrons accelerated through 100 V is directed at a thin crystal, and the electrons that pass through produce a pattern of bright and dark rings on a detector. Does this observation support a wave model or a particle model for electrons? Justify your answer.", [
          "For indicating that the observation supports a wave model (electrons behave as waves)",
          "For reasoning that diffraction and interference patterns of bright and dark regions are characteristic of waves, and that the electron's de Broglie wavelength (about 0.1 nm) is comparable to the spacing of atoms in the crystal",
        ], ["The ring pattern supports a <b>wave</b> model. Bright and dark rings arise from constructive and destructive interference of waves that scatter from the regularly spaced atoms of the crystal — a pattern that a stream of simple classical particles would not produce. For electrons accelerated through 100 V, λ = <i>h</i>/√(2<i>me</i>Δ<i>V</i>) ≈ 0.12 nm, similar to the spacing between atoms in a crystal, which is exactly the condition needed for noticeable diffraction. (Electrons are still detected one at a time at particular points, so electrons show both wave and particle behavior.)"], { label: "Part D" }),
      ]),

    Q("2", "Translation Between Representations", 28,
      ["Figure 1 shows equipotential lines in a region of space that contains an electric field. The potential of each line is given."],
      [equiFig],
      [
        P("A", "On a sketch of Figure 1, draw at least three electric field lines in the region between the 30 V and 0 V equipotential lines. Include arrowheads to show the direction of the field.", [
          "For field lines that are perpendicular to the equipotential lines (horizontal)",
          "For field lines that are parallel and evenly spaced, showing a uniform field",
          "For arrowheads that point in the +<i>x</i> direction, from high potential toward low potential",
        ], ["Electric field lines are always perpendicular to equipotential lines and point from higher potential toward lower potential. Here the equipotentials are equally spaced vertical lines, so draw evenly spaced horizontal lines with arrowheads pointing to the right (+<i>x</i>) — a uniform electric field."], { label: "Part A", paper: true, modelFigures: [equiModelA] }),
        P("B", "Calculate the magnitude of the electric field in the region. Show your work.", [
          "For using <i>E</i> = |Δ<i>V</i>|/Δ<i>x</i> (field is the potential gradient) with a pair of lines, such as 10 V across 0.020 m",
          "For a correct magnitude of 500 V/m (or 500 N/C)",
        ], ["In a uniform field the magnitude of the field is the potential difference divided by the distance between equipotentials: <i>E</i> = |Δ<i>V</i>|/Δ<i>x</i> = (10 V)/(0.020 m) = <b>500 V/m</b> (which is the same as 500 N/C). The same result follows from the whole span: 30 V over 0.060 m."], { label: "Part B" }),
        P("C", "A proton is released from rest at the 30 V equipotential line. Describe the motion of the proton between the 30 V and 0 V lines, and calculate its speed when it reaches the 0 V line. Show your work.", [
          "For describing the motion as acceleration in the +<i>x</i> direction, with constant acceleration because the field is uniform",
          "For using conservation of energy: <i>e</i>Δ<i>V</i> = ½<i>mv</i><sup>2</sup>, with Δ<i>V</i> = 30 V",
          "For a correct speed of about 7.6 × 10<sup>4</sup> m/s",
        ], [`The force on the positive proton is in the direction of the field (+<i>x</i>), and the field is uniform, so the proton moves along +<i>x</i> with a constant acceleration, speeding up. By conservation of energy, the kinetic energy gained equals the electric potential energy lost: ½<i>mv</i><sup>2</sup> = <i>e</i>Δ<i>V</i> = (1.60 × 10<sup>−19</sup> C)(30 V) = 4.8 × 10<sup>−18</sup> J. So <i>v</i> = √(2(4.8 × 10<sup>−18</sup> J)/(1.67 × 10<sup>−27</sup> kg)) ≈ <b>7.6 × 10<sup>4</sup> m/s</b>.`], { label: "Part C" }),
        P("D", "On a set of axes that you draw, sketch a graph of the electric potential energy <i>U</i> of the proton as a function of its position <i>x</i> as it moves from <i>x</i> = 0 to <i>x</i> = 6 cm. Label the values of <i>U</i> at the endpoints.", [
          "For a straight line (linear) that decreases as <i>x</i> increases",
          "For correct endpoints: 30 eV (4.8 × 10<sup>−18</sup> J) at <i>x</i> = 0 and 0 at <i>x</i> = 6 cm",
        ], ["The potential energy of the proton is <i>U</i> = <i>eV</i>. In a uniform field <i>V</i> decreases linearly with <i>x</i>, so <i>U</i> is a straight line sloping down from 30 eV (4.8 × 10<sup>−18</sup> J) at <i>x</i> = 0 to 0 at <i>x</i> = 6 cm. The magnitude of the slope is the force on the proton, <i>eE</i>."], { label: "Part D", paper: true, modelFigures: [UpModel] }),
        P("E", "An electron is released from rest at the 10 V equipotential line. Indicate the direction in which the electron moves, and indicate whether its kinetic energy increases, decreases, or stays the same as it moves. Justify your answer.", [
          "For indicating that the electron moves in the −<i>x</i> direction (toward higher potential)",
          "For indicating that its kinetic energy increases, with reasoning that the force on a negative charge is opposite to the field, so the electric force does positive work, and the electron's electric potential energy (<i>U</i> = −<i>eV</i>) decreases as it moves to higher potential",
        ], ["The electron has a negative charge, so the electric force on it is opposite to the field (−<i>x</i>). It starts from rest and moves toward the 20 V and 30 V lines, that is, toward higher potential. The force and displacement are in the same direction, so the electric force does positive work and the electron's <b>kinetic energy increases</b>. Equivalently, the electron's potential energy <i>U</i> = −<i>eV</i> decreases as <i>V</i> increases, and the lost potential energy becomes kinetic energy."], { label: "Part E", tip: "A negative charge moves <em>opposite</em> to the field, toward higher potential. The electron and the proton gain kinetic energy in opposite directions." }),
      ]),

    Q("3", "Experimental Design and Analysis", 24,
      ["A student uses a laser of unknown wavelength λ and a double slit with a known slit separation <i>d</i> = 0.25 mm to produce an interference pattern on a distant screen. The student measures the distance Δ<i>y</i> between adjacent bright fringes on the screen for several different distances <i>L</i> between the slits and the screen. The data are shown in Table 1."],
      [slitTable],
      [
        P("A", "Describe a procedure for measuring Δ<i>y</i> that has less uncertainty than measuring the distance between a single pair of adjacent bright fringes.", [
          "For a valid procedure, such as measuring the distance across several (for example, 10) fringe spacings and dividing by the number of spacings, and measuring from the center of one bright fringe to the center of another",
          "For indicating how the procedure reduces the percent uncertainty (the ruler's uncertainty is a smaller fraction of the larger distance)",
        ], ["Measure the distance from the center of the first bright fringe to the center of, say, the eleventh bright fringe (ten spacings) with a ruler or tape, then divide by 10 to get Δ<i>y</i>. The uncertainty in reading the ruler is about the same whether the distance is 5 mm or 50 mm, so measuring across many fringes makes it a much smaller fraction of the measured length; dividing by 10 divides the absolute uncertainty by 10 as well."], { label: "Part A" }),
        P("B (i)", "Indicate which quantities should be graphed on the vertical and horizontal axes to produce a straight line that can be used to determine λ. Write the equation that relates the quantities and the slope of the line.", [
          "For indicating Δ<i>y</i> on the vertical axis and <i>L</i> on the horizontal axis",
          "For using Δ<i>y</i> = (λ/<i>d</i>)<i>L</i> and indicating that the slope is λ/<i>d</i>",
        ], ["For a double slit with small angles, the fringe spacing is Δ<i>y</i> = λ<i>L</i>/<i>d</i>. Graph <b>Δ<i>y</i> (vertical) versus <i>L</i> (horizontal)</b>; the slope is λ/<i>d</i> and the line passes through the origin."], { label: "Part B (i)" }),
        P("B (ii)", "The student draws a best-fit line through the data. The line passes through the points (0.40 m, 1.0 mm) and (2.40 m, 6.0 mm). Use the line to determine λ. Show your work.", [
          "For a correct slope calculation: (6.0 mm − 1.0 mm)/(2.40 m − 0.40 m) = 2.5 mm/m = 2.5 × 10<sup>−3</sup> (dimensionless)",
          "For setting the slope equal to λ/<i>d</i> and solving λ = (slope)<i>d</i>",
          "For a correct wavelength of about 6.3 × 10<sup>−7</sup> m (625 nm)",
        ], ["Slope = (6.0 mm − 1.0 mm)/(2.40 m − 0.40 m) = 2.5 mm/m = 2.5 × 10<sup>−3</sup>, which is a pure number once both lengths are in the same unit. Since slope = λ/<i>d</i>, λ = (slope)<i>d</i> = (2.5 × 10<sup>−3</sup>)(0.25 × 10<sup>−3</sup> m) = 6.25 × 10<sup>−7</sup> m = <b>about 6.3 × 10<sup>−7</sup> m (625 nm)</b>, a red-orange laser."], { label: "Part B (ii)", tip: "Once both lengths are in the same unit, the slope is a pure number. Convert the slit separation to meters before multiplying: λ = (slope)<i>d</i>." }),
        P("C", "The student repeats the experiment with a laser of shorter wavelength. Indicate whether the slope of the new best-fit line is greater than, less than, or equal to the slope of the original line, and justify your answer.", [
          "For indicating that the slope is smaller than the original slope",
          "For reasoning that the slope is λ/<i>d</i> and <i>d</i> is unchanged, so a smaller wavelength gives a smaller slope (fringes closer together)",
        ], ["The slope is <b>smaller</b>. The slope of the graph is λ/<i>d</i>, and the slit separation <i>d</i> is unchanged, so a shorter wavelength gives a smaller slope. Physically, the angular spacing of the fringes is λ/<i>d</i>, so shorter-wavelength light produces fringes that are closer together at any given distance <i>L</i>."], { label: "Part C" }),
        P("D", "Briefly explain why the equation used in part B can use the fringe spacing measured along the screen (a small-angle approximation) in this experiment.", [
          "For explaining that the fringe positions are small compared with <i>L</i> (so the angle θ is small), meaning sin θ ≈ tan θ ≈ θ",
        ], ["The fringes are only a few millimeters apart while the screen is about a meter or more away, so the angles to the bright fringes are very small (well under a degree). For small angles sin θ ≈ tan θ ≈ θ (in radians), so the condition for bright fringes, <i>d</i> sin θ = <i>m</i>λ, can be written with tan θ = <i>y</i>/<i>L</i>, giving the linear relationship Δ<i>y</i> = λ<i>L</i>/<i>d</i>."], { label: "Part D" }),
      ]),

    Q("4", "Qualitative/Quantitative Translation", 20,
      ["A square conducting loop of side length 0.20 m and resistance 0.50 Ω moves at a constant speed of 2.0 m/s to the right toward a region of uniform magnetic field of magnitude 0.30 T directed into the page, as shown in Figure 1. The loop is pulled by an external force and remains in the plane of the page. The loop begins to enter the field region at time <i>t</i> = 0."],
      [loopFig],
      [
        P("A", "As the loop enters the field region, indicate whether the induced current in the loop is clockwise or counterclockwise. Justify your answer.", [
          "For indicating that the induced current is counterclockwise",
          "For reasoning (Lenz's law) that the inward magnetic flux through the loop is increasing, so the induced current creates a magnetic field out of the page to oppose the change, which corresponds to a counterclockwise current",
        ], ["The current is <b>counterclockwise</b>. As the loop enters, the magnetic flux through it directed into the page is increasing. By Lenz's law the induced current opposes the increase by producing its own magnetic field out of the page inside the loop. By the right-hand rule, a field out of the page at the center of a loop requires a counterclockwise current."], { label: "Part A" }),
        P("B", "Calculate the magnitude of the induced current in the loop while it is entering the field region. Show your work.", [
          "For using Faraday's law for a conductor moving in a field, ε = <i>B</i>ℓ<i>v</i> (or ε = Δ<i>Φ</i>/Δ<i>t</i> with Φ = <i>B</i>ℓ<i>x</i>), to obtain 0.12 V",
          "For using Ohm's law, <i>I</i> = ε/<i>R</i>, to obtain a current of 0.24 A",
        ], ["While the loop enters, the area inside the field grows at the rate ℓ<i>v</i>, so the magnitude of the induced emf is ε = ΔΦ/Δ<i>t</i> = <i>B</i>ℓ<i>v</i> = (0.30 T)(0.20 m)(2.0 m/s) = 0.12 V. By Ohm's law <i>I</i> = ε/<i>R</i> = (0.12 V)/(0.50 Ω) = <b>0.24 A</b>."], { label: "Part B" }),
        P("C", "Calculate the magnitude of the external force that must be applied to the loop to keep it moving at constant speed while it enters the field, and state the direction of this force. Justify the direction.", [
          "For a correct magnitude, <i>F</i> = <i>I</i>ℓ<i>B</i> = (0.24 A)(0.20 m)(0.30 T) ≈ 1.4 × 10<sup>−2</sup> N",
          "For indicating that the applied force is directed to the right (the direction of motion) because the magnetic force on the current in the leading side of the loop is to the left, opposing the motion (Lenz's law)",
        ], ["Only the side of the loop that is inside the field carries a current in the field and feels a net magnetic force: <i>F</i><sub>B</sub> = <i>I</i>ℓ<i>B</i> = (0.24 A)(0.20 m)(0.30 T) = 0.0144 N ≈ <b>1.4 × 10<sup>−2</sup> N</b>. This force is directed to the left, opposing the loop's motion (as Lenz's law requires), so to keep the loop at constant velocity the external force must be equal in magnitude and directed to the <b>right</b>. As a check, the mechanical power supplied, <i>Fv</i> = 0.0288 W, equals the electrical power dissipated, <i>I</i><sup>2</sup><i>R</i> = (0.24 A)<sup>2</sup>(0.50 Ω) = 0.0288 W."], { label: "Part C", tip: "The <em>magnetic</em> force on the loop opposes its motion, so the <em>applied</em> force must point in the direction of motion. Don't mix the two forces up." }),
        P("D", "After the loop is completely inside the field region, it continues to move at 2.0 m/s. Indicate whether the induced current is zero or nonzero. Justify your answer.", [
          "For indicating that the induced current is zero",
          "For reasoning that the magnetic flux through the loop is constant (the field is uniform and the area in the field no longer changes), so there is no induced emf",
        ], ["The induced current is <b>zero</b>. Once the whole loop is in the uniform field, the flux through it, Φ = <i>BA</i>, does not change as the loop moves, so there is no induced emf (equivalently, the emfs in the two opposite sides moving through the field cancel around the loop). With no current there is also no magnetic force, so the external force needed to maintain constant speed drops to zero."], { label: "Part D" }),
      ]),
  ],
});
