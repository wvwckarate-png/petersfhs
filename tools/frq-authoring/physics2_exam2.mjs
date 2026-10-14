// AP Physics 2 FRQ — Exam 2 (40 points, 95 minutes)
import { exam, P, Q, fig, table, chart } from "./frqlib.mjs";
import { twoCapacitorStages, waveSnapshot, standingWave } from "./p2frqfigs.mjs";

// ---- Q2: wave numbers ----
const A = 2.0, lamCm = 40, v = 8.0;
const lam = lamCm / 100, freq = v / lam, T = 1 / freq;           // 20 Hz, 0.050 s
const Lstr = 1.20, loops = (2 * Lstr) / lam;                      // 6
const v2 = v * Math.sqrt(4), lam2 = v2 / freq, loops2 = (2 * Lstr) / lam2; // 16 m/s, 0.80 m, 3
if (Math.abs(freq - 20) > 1e-9 || Math.abs(T - 0.05) > 1e-12 || Math.abs(loops - 6) > 1e-9 || Math.abs(loops2 - 3) > 1e-9) throw new Error("wave numbers");
const yt = Array.from({ length: 41 }, (_, i) => { const t = (i / 40) * 50; return [t, -A * Math.sin((2 * Math.PI * (t / 1000)) / T)]; }); // t in ms

// ---- Q3: magnetic force on a wire ----
const ell = 0.080, g = 9.8, Btrue = 0.20;
const Is = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
const noise = [-0.02, 0.03, -0.03, 0.04, -0.02, 0.02];
const dm = Is.map((I, i) => +(1.64 * I + noise[i]).toFixed(2));
const slopeG = (4.92 - 0.82) / (3.0 - 0.5);                      // g per A
const Bcalc = ((slopeG / 1000) * g) / ell;
if (Math.abs(slopeG - 1.64) > 1e-9 || Math.abs(Bcalc - 0.2009) > 0.001) throw new Error("force numbers");

// ---- Q4: photoelectric ----
const hc = 1240, phi = 2.3;
const E400 = hc / 400, K400 = E400 - phi, E600 = hc / 600;
if (Math.abs(E400 - 3.1) > 1e-9 || Math.abs(K400 - 0.8) > 1e-9 || !(E600 < phi)) throw new Error("photon numbers");

const capFig = fig(twoCapacitorStages({ emf: "ε", c1: "C", c2: "2C" }),
  "Two circuit diagrams. In Step 1 a battery of emf epsilon is connected through a closed switch to a capacitor C. In Step 2 the battery is removed and the charged capacitor C is connected in parallel with an uncharged capacitor of capacitance 2C.",
  { caption: "Figure 1", maxWidth: 560 });

const snapFig = fig(waveSnapshot({ A, lam: lamCm, xMax: 80, yUnit: "cm", xUnit: "cm", xStep: 20 }),
  "A graph of displacement in centimeters versus position in centimeters at time zero for a wave on a string. The curve is a sine wave with amplitude 2.0 centimeters and a wavelength of 40 centimeters, starting at zero displacement at x equals 0 and rising.",
  { caption: "Figure 1. A snapshot of the string at t = 0. The wave travels in the +x direction at 8.0 m/s." });

// the displacement-vs-time model graph (time in ms)
const ytChart = fig(chart({
  w: 520, h: 300, x: [0, 50, 12.5], y: [-3, 3, 1], xLabel: "Time t (ms)", yLabel: "Displacement y (cm)",
  series: [{ name: "y", pts: yt, color: "#3F7A94" }],
  annotations: [{ type: "hline", y: 0 }],
}), "A graph of displacement versus time for the point on the string at x equals 0. The curve starts at zero, goes down to negative 2.0 centimeters at 12.5 milliseconds, returns to zero at 25 milliseconds, rises to positive 2.0 centimeters at 37.5 milliseconds, and returns to zero at 50 milliseconds, completing one cycle per 50 milliseconds.",
  { caption: "Model graph: one full cycle in 0.050 s, amplitude 2.0 cm, starting downward." });

const standModel = fig(standingWave({ n: 6, L: "L = 1.20 m" }),
  "A standing wave on a string with fixed ends and six loops: seven nodes including both ends and six antinodes.",
  { caption: "Model sketch: 6 loops, 7 nodes (including the two fixed ends), 6 antinodes." });

const dataTable = table(["Trial", "Current <i>I</i> (A)", "Change in balance reading Δ<i>m</i> (g)"], Is.map((I, i) => [String(i + 1), I.toFixed(2), dm[i].toFixed(2)]), "Table 1");

export default exam({
  id: "exam2",
  title: "Exam 2",
  description: "A full-length, four-question free-response exam: capacitors, wave representations, the magnetic force on a wire, and the photoelectric effect.",
  minutes: 95,
  topics: ["Unit 11 — Electric circuits (capacitors)", "Unit 14 — Waves, sound, and physical optics (waves on a string, standing waves)", "Unit 12 — Magnetism and electromagnetic induction (magnetic force on a wire)", "Unit 15 — Modern physics (photoelectric effect)"],
  questions: [
    Q("1", "Mathematical Routines", 23,
      ["In Step 1 of the experiment shown in Figure 1, a battery of emf ε is connected through a closed switch to a capacitor of capacitance <i>C</i>, and the capacitor is allowed to charge fully. In Step 2, the battery is removed and the charged capacitor is connected across a second, initially uncharged capacitor of capacitance 2<i>C</i>, with the two capacitors in parallel. Connecting wires have a small, nonzero resistance."],
      [capFig],
      [
        P("A", "Derive an expression for the charge <i>Q</i><sub>0</sub> stored on the capacitor at the end of Step 1. Express your answer in terms of <i>C</i>, ε, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with the definition of capacitance, <i>C</i> = <i>Q</i>/Δ<i>V</i>",
          "For a correct final expression, <i>Q</i><sub>0</sub> = <i>C</i>ε, using the fact that a fully charged capacitor has a potential difference equal to the battery emf",
        ], ["Capacitance is defined by <i>C</i> = <i>Q</i>/Δ<i>V</i>. When the capacitor is fully charged, no more current flows, so the potential difference across it equals the emf of the battery: Δ<i>V</i> = ε. Therefore <i>Q</i><sub>0</sub> = <i>C</i>Δ<i>V</i> = <b><i>C</i>ε</b>."], { label: "Part A" }),
        P("B", "At the end of Step 2, the charge has redistributed and the capacitors reach a common potential difference <i>V</i><sub>f</sub>. Derive an expression for <i>V</i><sub>f</sub>. Express your answer in terms of ε and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with conservation of charge, <i>Q</i><sub>0</sub> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> (the total charge on the isolated plates does not change)",
          "For using the equivalent capacitance of capacitors in parallel, <i>C</i> + 2<i>C</i> = 3<i>C</i> (or writing <i>Q</i><sub>1</sub> = <i>CV</i><sub>f</sub> and <i>Q</i><sub>2</sub> = 2<i>CV</i><sub>f</sub>)",
          "For a correct final expression, <i>V</i><sub>f</sub> = ε/3",
        ], ["The battery is removed, so the only charge available is the charge <i>Q</i><sub>0</sub> = <i>C</i>ε, and charge is conserved: <i>Q</i><sub>0</sub> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>. Parallel capacitors share the same potential difference, so <i>Q</i><sub>1</sub> = <i>CV</i><sub>f</sub> and <i>Q</i><sub>2</sub> = (2<i>C</i>)<i>V</i><sub>f</sub>. Then <i>C</i>ε = <i>CV</i><sub>f</sub> + 2<i>CV</i><sub>f</sub> = 3<i>CV</i><sub>f</sub>, so <b><i>V</i><sub>f</sub> = ε/3</b>."], { label: "Part B" }),
        P("C", "Derive an expression for the total energy lost from the capacitors between the end of Step 1 and the end of Step 2. Express your answer in terms of <i>C</i>, ε, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with the energy stored in a capacitor, <i>U</i> = ½<i>C</i>(Δ<i>V</i>)<sup>2</sup>",
          "For correct initial and final energies: <i>U</i><sub>i</sub> = ½<i>C</i>ε<sup>2</sup> and <i>U</i><sub>f</sub> = ½(3<i>C</i>)(ε/3)<sup>2</sup> = <i>C</i>ε<sup>2</sup>/6",
          "For a correct final expression for the energy lost, ⅓<i>C</i>ε<sup>2</sup>",
        ], ["The energy stored in a capacitor is <i>U</i> = ½<i>C</i>(Δ<i>V</i>)<sup>2</sup>. At the end of Step 1 the only capacitor has <i>U</i><sub>i</sub> = ½<i>C</i>ε<sup>2</sup>. At the end of Step 2 the two capacitors act as a combined capacitance 3<i>C</i> at potential difference ε/3, so <i>U</i><sub>f</sub> = ½(3<i>C</i>)(ε/3)<sup>2</sup> = (1/6)<i>C</i>ε<sup>2</sup>. The energy lost is <i>U</i><sub>i</sub> − <i>U</i><sub>f</sub> = (1/2 − 1/6)<i>C</i>ε<sup>2</sup> = <b>(1/3)<i>C</i>ε<sup>2</sup></b>, which is two-thirds of the original energy."], { label: "Part C", tip: "Do not assume that the final energy equals the initial energy. Charge is conserved, but energy is not conserved <em>within the capacitors</em>; the difference is dissipated in the wires." }),
        P("D", "The total energy stored in the capacitors decreased even though the total charge did not change. Explain where the missing energy went. Your explanation must include conceptual reasoning beyond algebraic solutions.", [
          "For indicating that the energy was dissipated as thermal energy in the connecting wires (and/or radiated as electromagnetic waves), not lost from the universe",
          "For explaining that charge flowed through the wires (which have resistance) while the capacitors equalized their potential differences, so the moving charge did work against resistance, <i>P</i> = <i>I</i><sup>2</sup><i>R</i>",
        ], ["The missing energy was transferred out of the capacitors as thermal energy. When the capacitors are connected, charge flows from the first to the second until their potential differences are equal. This current passes through the wires, which have resistance, so energy is dissipated at the rate <i>I</i><sup>2</sup><i>R</i> and warms the wires (a small amount may also be radiated as electromagnetic waves). Energy is conserved overall: the 1/3 <i>C</i>ε<sup>2</sup> removed from the capacitors equals the thermal energy produced. Notice that this amount does not depend on how large the wire resistance is — a smaller resistance just makes the transfer faster."], { label: "Part D" }),
      ]),

    Q("2", "Translation Between Representations", 28,
      ["Figure 1 shows a snapshot, at time <i>t</i> = 0, of a transverse wave traveling in the +<i>x</i> direction on a long string. The wave speed is 8.0 m/s."],
      [snapFig],
      [
        P("A (i)", "Determine the frequency and the period of the wave. Show your work.", [
          "For using <i>v</i> = <i>f</i>λ (or equivalent) with the wavelength 0.40 m read from the graph to obtain a frequency of 20 Hz",
          "For a correct period of 0.050 s, <i>T</i> = 1/<i>f</i>",
        ], [`From Figure 1 the wavelength is 40 cm = 0.40 m. Then <i>f</i> = <i>v</i>/λ = (8.0 m/s)/(0.40 m) = <b>20 Hz</b>, and the period is <i>T</i> = 1/<i>f</i> = <b>0.050 s</b>.`], { label: "Part A (i)" }),
        P("A (ii)", "Sketch a graph of the displacement <i>y</i> of the point on the string at <i>x</i> = 0 as a function of time <i>t</i>, for <i>t</i> = 0 to <i>t</i> = 0.050 s. Label the vertical axis with the amplitude and the horizontal axis with the times at which the displacement is zero or at its extreme values.", [
          "For a sinusoidal curve that completes exactly one full cycle between <i>t</i> = 0 and <i>t</i> = 0.050 s (with times of 0.0125, 0.025, and 0.0375 s indicated)",
          "For a curve with an amplitude of 2.0 cm",
          "For a curve that starts at <i>y</i> = 0 and first moves in the negative direction (to −2.0 cm at 0.0125 s), consistent with a wave moving in the +<i>x</i> direction",
        ], [`At time zero the point at <i>x</i> = 0 is at <i>y</i> = 0. The wave moves in the +<i>x</i> direction, so the pattern shifts to the right: the part of the (periodic) wave pattern that is just to the left of <i>x</i> = 0, which has a negative displacement, is about to arrive there. Equivalently, the snapshot has a positive slope at <i>x</i> = 0, and for a wave moving in +<i>x</i> the velocity of a point is <i>v</i><sub><i>y</i></sub> = −<i>v</i>(∂<i>y</i>/∂<i>x</i>), which is negative: the point at <i>x</i> = 0 moves down first. Its motion is sinusoidal with amplitude 2.0 cm and period 0.050 s: <i>y</i> = 0 at <i>t</i> = 0, −2.0 cm at 0.0125 s, 0 at 0.025 s, +2.0 cm at 0.0375 s, and 0 at 0.050 s.`], { label: "Part A (ii)", tip: "The first motion is downward. Sketching + sin(ω<i>t</i>) instead of − sin(ω<i>t</i>) is the usual mistake for a wave traveling in the +<i>x</i> direction.", paper: true, modelFigures: [ytChart] }),
        P("B (i)", "The string is 1.20 m long and is fixed at both ends. Two waves with the wavelength shown in Figure 1 travel in opposite directions on the string and create a standing wave. Determine how many antinodes (loops) the standing wave has. Show your work.", [
          "For using the condition for a standing wave on a string with fixed ends, <i>L</i> = <i>n</i>λ/2 (or equivalent)",
          "For a correct result of 6 antinodes (the sixth harmonic)",
        ], ["For a string fixed at both ends, an integer number <i>n</i> of half-wavelengths must fit on the string: <i>L</i> = <i>n</i>λ/2. Then <i>n</i> = 2<i>L</i>/λ = 2(1.20 m)/(0.40 m) = <b>6</b>. The standing wave has 6 antinodes (loops) and 7 nodes, counting the two fixed ends."], { label: "Part B (i)" }),
        P("B (ii)", "Sketch the standing wave pattern that exists on the string and label the nodes and the antinodes.", [
          "For a drawing with six loops of equal size between the two fixed ends",
          "For labeling that places nodes at both ends and between each pair of loops (7 nodes), and antinodes at the center of each loop",
        ], ["Draw the string between two fixed ends. Six equal loops fit, with a node at each end and a node at each point where neighboring loops meet (seven nodes in all), and an antinode at the center of each loop (six antinodes). The nodes are spaced 0.20 m apart, which is half a wavelength."], { label: "Part B (ii)", paper: true, modelFigures: [standModel] }),
        P("C", "The tension in the string is quadrupled while the string is driven at the same frequency as before (20 Hz). Determine the new wave speed and the new wavelength, and determine the number of antinodes of the standing wave that now exists on the string. Show your work.", [
          "For indicating that the wave speed, <i>v</i> = √(<i>F</i><sub>T</sub>/μ), doubles to 16 m/s when the tension is quadrupled",
          "For a correct new wavelength, λ = <i>v</i>/<i>f</i> = 0.80 m, since the frequency is unchanged",
          "For a correct result of 3 antinodes, <i>n</i> = 2<i>L</i>/λ = 2(1.20 m)/(0.80 m)",
        ], ["The wave speed on a string is <i>v</i> = √(<i>F</i><sub>T</sub>/μ), so quadrupling the tension doubles the speed: <i>v</i> = 2(8.0 m/s) = <b>16 m/s</b>. The frequency is fixed by the driver at 20 Hz, so λ = <i>v</i>/<i>f</i> = (16 m/s)/(20 Hz) = <b>0.80 m</b>. Then <i>n</i> = 2<i>L</i>/λ = 2(1.20 m)/(0.80 m) = <b>3</b>: the string now vibrates in its third harmonic with three antinodes (and four nodes)."], { label: "Part C" }),
      ]),

    Q("3", "Experimental Design and Analysis", 24,
      ["A student uses the apparatus described here to determine the magnitude <i>B</i> of the magnetic field between the poles of a U-shaped magnet. The magnet sits on an electronic balance. A rigid, horizontal segment of wire of length ℓ = 0.080 m is held fixed between the poles, perpendicular to the field, and carries an adjustable current <i>I</i>. When the current is turned on, the reading of the balance changes by an amount Δ<i>m</i>. Table 1 shows the data from six trials. Use <i>g</i> = 9.8 m/s<sup>2</sup>."],
      [dataTable],
      [
        P("A", "Explain, in terms of the forces on the wire and on the magnet, why the reading of the balance changes when there is a current in the wire.", [
          "For indicating that the magnetic field exerts a magnetic force on the current-carrying wire",
          "For indicating that, by Newton's third law, the wire exerts an equal-magnitude, opposite force on the magnet, which changes the force that the magnet exerts on the balance (so the balance reading changes by Δ<i>m</i> = <i>F</i>/<i>g</i>)",
        ], ["The magnetic field of the magnet exerts a force on the current-carrying wire, of magnitude <i>F</i> = <i>I</i>ℓ<i>B</i> (the wire is perpendicular to the field). The wire is fixed in place, but by Newton's third law the wire exerts a force of equal magnitude and opposite direction on the magnet. That force adds to (or subtracts from) the weight of the magnet that presses on the balance, so the balance reading changes by Δ<i>m</i> = <i>F</i>/<i>g</i> = <i>I</i>ℓ<i>B</i>/<i>g</i>."], { label: "Part A" }),
        P("B (i)", "Indicate which quantities should be graphed on the horizontal and vertical axes so that a straight line can be used to determine <i>B</i>. Write the equation that relates the quantities to the slope of the line.", [
          "For indicating the current <i>I</i> on the horizontal axis and Δ<i>m</i> on the vertical axis",
          "For writing Δ<i>m</i> = (ℓ<i>B</i>/<i>g</i>)<i>I</i> and indicating that the slope is ℓ<i>B</i>/<i>g</i>",
        ], ["The magnetic force on the wire is <i>F</i> = <i>I</i>ℓ<i>B</i>, and it changes the balance reading by Δ<i>m</i> = <i>F</i>/<i>g</i>. So Δ<i>m</i> = (ℓ<i>B</i>/<i>g</i>)<i>I</i>. Graph <b>Δ<i>m</i> on the vertical axis against <i>I</i> on the horizontal axis</b>; the line passes through the origin and has slope ℓ<i>B</i>/<i>g</i>."], { label: "Part B (i)" }),
        P("B (ii)", "The student draws a best-fit line for the data. The line passes through the points (0.50 A, 0.82 g) and (3.00 A, 4.92 g). Use the line to determine <i>B</i>. Show your work.", [
          "For a correct calculation of the slope in consistent units: (4.92 g − 0.82 g)/(3.00 A − 0.50 A) = 1.64 g/A = 1.64 × 10<sup>−3</sup> kg/A",
          "For setting the slope equal to ℓ<i>B</i>/<i>g</i> and solving: <i>B</i> = (slope)<i>g</i>/ℓ",
          "For a correct value of <i>B</i> ≈ 0.20 T",
        ], ["Slope = Δ(Δ<i>m</i>)/Δ<i>I</i> = (4.92 g − 0.82 g)/(3.00 A − 0.50 A) = 1.64 g/A = 1.64 × 10<sup>−3</sup> kg/A. Because slope = ℓ<i>B</i>/<i>g</i>, <i>B</i> = (slope)(<i>g</i>)/ℓ = (1.64 × 10<sup>−3</sup> kg/A)(9.8 m/s<sup>2</sup>)/(0.080 m) = <b>0.20 T</b>. (The conversion from grams to kilograms is essential: leaving the slope in g/A would give a value 1000 times too large.)"], { label: "Part B (ii)", tip: "Convert grams to kilograms before using <i>g</i> = 9.8 m/s<sup>2</sup>. Leaving the slope in g/A makes <i>B</i> come out 1000 times too large." }),
        P("C", "The student repeats the experiment after rotating the magnet so that the wire makes an angle of 30° with the magnetic field instead of 90°. Indicate whether the slope of the new graph is greater than, less than, or equal to the slope of the original graph, and estimate the new slope. Justify your answer.", [
          "For indicating that the slope is smaller than the original",
          "For reasoning that the force is <i>F</i> = <i>I</i>ℓ<i>B</i> sin θ and sin 30° = 0.50, so the slope is halved to about 0.82 g/A",
        ], ["The slope is <b>less</b>. Only the component of the field perpendicular to the wire exerts a force: <i>F</i> = <i>I</i>ℓ<i>B</i> sin θ. For θ = 30°, sin θ = 0.50, so the force for every current is half as large, Δ<i>m</i> = (ℓ<i>B</i> sin 30°/<i>g</i>)<i>I</i>, and the slope is about half the original: roughly 0.82 g/A."], { label: "Part C" }),
        P("D", "Describe one change to the procedure that would reduce the effect of random uncertainty on the value of <i>B</i> determined from the graph.", [
          "For a valid procedure change, such as repeating each trial several times and averaging the balance readings, using a larger range of currents, or re-zeroing the balance before every trial",
        ], ["The student could repeat each current setting several times and average the balance readings, which reduces random reading errors, and could extend the data to a wider range of currents so that the best-fit slope is better determined. Re-zeroing the balance (with the current off) before each trial removes drift."], { label: "Part D" }),
      ]),

    Q("4", "Qualitative/Quantitative Translation", 20,
      ["Potassium metal has a work function of 2.3 eV. In a photoelectric experiment, monochromatic light of wavelength 400 nm is incident on a clean potassium surface, and electrons are emitted. Use <i>hc</i> = 1240 eV·nm."],
      [],
      [
        P("A", "Calculate the energy, in eV, of a photon of the 400 nm light. Show your work.", [
          "For using <i>E</i> = <i>hf</i> = <i>hc</i>/λ with the correct values",
          "For a correct photon energy of 3.1 eV",
        ], ["A photon's energy is <i>E</i> = <i>hf</i> = <i>hc</i>/λ, and the combination <i>hc</i> = 1240 eV·nm is given. <i>E</i> = (1240 eV·nm)/(400 nm) = <b>3.1 eV</b>. Using eV and nm directly avoids converting to joules and meters."], { label: "Part A" }),
        P("B", "Calculate the maximum kinetic energy of the emitted electrons. Show your work.", [
          "For using the photoelectric effect equation, <i>K</i><sub>max</sub> = <i>hf</i> − φ (conservation of energy)",
          "For a correct maximum kinetic energy of 0.8 eV",
        ], ["Each photon gives all of its energy to one electron. Part goes to freeing the electron from the metal (the work function) and the rest becomes kinetic energy: <i>K</i><sub>max</sub> = <i>hf</i> − φ = 3.1 eV − 2.3 eV = <b>0.8 eV</b>."], { label: "Part B" }),
        P("C", "The intensity of the 400 nm light is doubled without changing its wavelength. Indicate how the photocurrent and the maximum kinetic energy of the emitted electrons each change. Justify your answers.", [
          "For indicating that the photocurrent (number of electrons emitted per second) doubles because twice as many photons arrive per second and each photon can eject at most one electron",
          "For indicating that the maximum kinetic energy is unchanged, because it depends on the photon energy (the frequency), not on the number of photons",
        ], ["The <b>photocurrent doubles</b>: doubling the intensity at a fixed wavelength doubles the number of photons striking the surface per second, and each photon ejects (at most) one electron. The <b>maximum kinetic energy stays at 0.8 eV</b>: each electron absorbs a single photon, and the photon energy, 3.1 eV, is set by the wavelength, not by how many photons there are."], { label: "Part C", tip: "Intensity changes <em>how many</em> electrons are emitted (the photocurrent), not how much kinetic energy each one has. Maximum kinetic energy depends only on the frequency." }),
        P("D", "The 400 nm light is replaced with 600 nm light of very high intensity. Predict whether electrons are emitted from the surface. Justify your prediction with a calculation.", [
          "For calculating the photon energy at 600 nm, (1240 eV·nm)/(600 nm) ≈ 2.1 eV",
          "For predicting that no electrons are emitted, because the photon energy is less than the 2.3 eV work function — however large the intensity",
        ], ["The 600 nm photons have energy <i>E</i> = (1240 eV·nm)/(600 nm) ≈ 2.07 eV (about 2.1 eV), which is less than the work function of 2.3 eV. An electron absorbs only one photon at a time, so no single photon can supply the energy needed to free an electron, and <b>no electrons are emitted</b>. Increasing the intensity only brings more photons, each with too little energy, so it cannot help. This is why the classical wave model fails: it predicted that enough intensity would eventually eject electrons."], { label: "Part D" }),
      ]),
  ],
});
