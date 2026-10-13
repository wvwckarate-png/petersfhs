// AP Physics 2 FRQ — Exam 4 (40 points, 95 minutes)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { particleArc, pvDiagram, sketchAxes, glassBoundary } from "./p2frqfigs.mjs";

// ---- Q2: rectangular PV cycle ----
const states = { A: [1, 200], B: [3, 200], C: [3, 100], D: [1, 100] };      // V (L), P (kPa)
const nRT = (s) => s[0] * s[1];                                              // kPa·L = J
const Wnet = (states.A[1] - states.C[1]) * 1e3 * (states.B[0] - states.A[0]) * 1e-3; // 200 J
const QAB = 2.5 * states.A[1] * 1e3 * (states.B[0] - states.A[0]) * 1e-3;    // 1000 J
if (Math.abs(Wnet - 200) > 1e-9 || Math.abs(QAB - 1000) > 1e-9 || nRT(states.B) / nRT(states.A) !== 3 || nRT(states.C) / nRT(states.B) !== 0.5) throw new Error("cycle numbers");
const TmodelPts = [[1, 1], [3, 3], [3, 1.5], [1, 0.5], [1, 1]];

// ---- Q3: radioactive decay ----
const ts = [0, 2, 4, 6, 8, 10];
const Rs = [800, 568, 397, 283, 202, 139];
const lnR = Rs.map((r) => +Math.log(r).toFixed(2));
const lamFit = (6.68 - 4.95) / 10, half = Math.LN2 / lamFit;                  // 0.173 /min, 4.0 min
if (Math.abs(lamFit - 0.173) > 1e-9 || Math.abs(half - 4.006) > 0.01) throw new Error("decay numbers");

// ---- Q4: refraction ----
const nG = 1.5, nW = 1.33;
const thAir = (Math.asin(1 / nG) * 180) / Math.PI, thW = (Math.asin(nW / nG) * 180) / Math.PI;
if (Math.abs(thAir - 41.8) > 0.05 || Math.abs(thW - 62.5) > 0.1) throw new Error("critical angles");
const c = 3.0e8, vG = c / nG, vW = c / nW;

const arcFig = fig(particleArc({}),
  "A particle moving to the right enters a region of uniform magnetic field directed into the page. Inside the field it follows a semicircular path of radius R that curves upward toward the top of the page.",
  { caption: "Figure 1", maxWidth: 520 });

const pvFig = fig(pvDiagram({
  states: [{ label: "A", V: 1, P: 200, dx: -16, dy: -8 }, { label: "B", V: 3, P: 200, dx: 8, dy: -8 }, { label: "C", V: 3, P: 100, dx: 10, dy: 16 }, { label: "D", V: 1, P: 100, dx: -16, dy: 16 }],
  close: true, xMax: 4, yMax: 250, xStep: 1, yStep: 50,
}), "A pressure versus volume graph of a rectangular cycle. State A is at 1.0 liter and 200 kilopascals, state B at 3.0 liters and 200 kilopascals, state C at 3.0 liters and 100 kilopascals, and state D at 1.0 liter and 100 kilopascals. The gas goes A to B to C to D and back to A, clockwise.",
{ caption: "Figure 1" });

const TV = fig(sketchAxes({
  xLabel: "Volume V (L)", yLabel: "Temperature T (units of T_A)", xMax: 4, yMax: 3.6,
  xTicks: [{ at: 1, label: "1.0" }, { at: 3, label: "3.0" }],
  yTicks: [{ at: 0.5, label: "0.5" }, { at: 1, label: "1.0" }, { at: 1.5, label: "1.5" }, { at: 3, label: "3.0" }],
  curves: [{ pts: TmodelPts, color: "#3F7A94" }],
  notes: [{ x: 0.82, y: 1.12, s: "A", anchor: "end" }, { x: 3.1, y: 3.05, s: "B" }, { x: 3.1, y: 1.5, s: "C" }, { x: 0.82, y: 0.5, s: "D", anchor: "end" }],
}), "A graph of temperature versus volume for the cycle. A rises along a straight line toward the origin's direction to B at 3.0 liters and 3.0 times the temperature at A; B drops vertically to C at half of B's temperature; C goes along a straight line to D at 1.0 liter; D rises vertically back to A.",
{ caption: "Model sketch (T in units of T_A): A (1, 1.0) → B (3, 3.0) → C (3, 1.5) → D (1, 0.5) → A. Both slanted segments lie on lines through the origin." });

const decayTable = table(["Time <i>t</i> (min)", "Count rate <i>R</i> (counts/min)", "ln <i>R</i>"], ts.map((t, i) => [String(t), String(Rs[i]), lnR[i].toFixed(2)]), "Table 1. Count rates corrected for background.");

const glassFig = fig(glassBoundary({ angle: 50 }),
  "A ray of light travels inside a block of glass of refractive index 1.50 and strikes the glass-air boundary from below at an angle of 50 degrees from the normal.",
  { caption: "Figure 1. The ray inside the glass strikes the boundary at 50° from the normal." });

export default exam({
  id: "exam4",
  title: "Exam 4",
  description: "A full-length, four-question free-response exam: a charged particle in a magnetic field, a thermodynamic cycle, radioactive decay, and total internal reflection.",
  minutes: 95,
  questions: [
    Q("1", "Mathematical Routines", 23,
      ["A particle of mass <i>m</i> and positive charge <i>q</i> is accelerated from rest through a potential difference <i>V</i>. It then enters, perpendicular to the field, a region of uniform magnetic field of magnitude <i>B</i> directed into the page, as shown in Figure 1. The particle follows a semicircular path of radius <i>R</i> in the region. Gravitational effects are negligible."],
      [arcFig],
      [
        P("A", "Derive an expression for the speed <i>v</i> of the particle when it enters the magnetic field region. Express your answer in terms of <i>q</i>, <i>m</i>, <i>V</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with conservation of energy, such as <i>qV</i> = ½<i>mv</i><sup>2</sup> (or Δ<i>K</i> = −Δ<i>U</i><sub>E</sub>)",
          "For a correct final expression, <i>v</i> = √(2<i>qV</i>/<i>m</i>)",
        ], ["The particle starts from rest, and the electric potential energy it loses becomes kinetic energy: <i>qV</i> = ½<i>mv</i><sup>2</sup>. Solving for the speed gives <b><i>v</i> = √(2<i>qV</i>/<i>m</i>)</b>."], { label: "Part A" }),
        P("B", "Derive an expression for the radius <i>R</i> of the particle's circular path in the magnetic field. Express your answer in terms of <i>q</i>, <i>m</i>, <i>V</i>, <i>B</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with Newton's second law with the magnetic force as the centripetal force, <i>qvB</i> = <i>mv</i><sup>2</sup>/<i>R</i> (or <i>F</i> = <i>qvB</i> sin 90° = <i>ma</i><sub>c</sub>)",
          "For solving for the radius, <i>R</i> = <i>mv</i>/(<i>qB</i>)",
          "For substituting the speed from part A to obtain <i>R</i> = (1/<i>B</i>)√(2<i>mV</i>/<i>q</i>)",
        ], ["The magnetic force is perpendicular to the velocity, so it does no work and acts as the centripetal force: <i>qvB</i> = <i>mv</i><sup>2</sup>/<i>R</i>. Then <i>R</i> = <i>mv</i>/(<i>qB</i>). Substituting <i>v</i> = √(2<i>qV</i>/<i>m</i>): <i>R</i> = (<i>m</i>/(<i>qB</i>))√(2<i>qV</i>/<i>m</i>) = <b>(1/<i>B</i>)√(2<i>mV</i>/<i>q</i>)</b>."], { label: "Part B" }),
        P("C", "A second particle has the same charge <i>q</i> but twice the mass, 2<i>m</i>, and is accelerated through the same potential difference <i>V</i> and enters the same magnetic field. Derive the ratio <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> of the radius of the second particle's path to that of the first particle's path.", [
          "For using the result from part B to show that the radius is proportional to √<i>m</i> when <i>q</i>, <i>V</i>, and <i>B</i> are the same",
          "For setting up the ratio correctly: <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> = √(2<i>m</i>)/√<i>m</i>",
          "For a correct ratio of √2 ≈ 1.4",
        ], ["From part B, <i>R</i> = (1/<i>B</i>)√(2<i>mV</i>/<i>q</i>), so for the same <i>q</i>, <i>V</i>, and <i>B</i> the radius is proportional to √<i>m</i>. Then <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> = √(2<i>m</i>)/√<i>m</i> = <b>√2 ≈ 1.4</b>. The heavier particle follows a wider semicircle, which is how a mass spectrometer separates ions of different masses."], { label: "Part C" }),
        P("D", "Determine the direction of the magnetic force on the particle at the instant it enters the field, and justify your answer using the right-hand rule.", [
          "For indicating that the magnetic force is directed toward the top of the page (upward in Figure 1)",
          "For a justification using <i>F</i> = <i>q</i>v × B: with the velocity to the right and B into the page, the right-hand rule gives a force upward for a positive charge",
        ], ["The magnetic force on a positive charge is in the direction of v × B. Point the fingers of the right hand in the direction of the velocity (to the right), curl them toward the direction of the field (into the page): the thumb points toward the top of the page. The force is therefore <b>upward</b>, which agrees with the path curving upward in Figure 1."], { label: "Part D" }),
      ]),

    Q("2", "Translation Between Representations", 28,
      ["A sample of a monatomic ideal gas is taken through the cycle ABCDA shown in Figure 1. Process AB is at constant pressure, BC is at constant volume, CD is at constant pressure, and DA is at constant volume."],
      [pvFig],
      [
        P("A", "Determine the net work done by the gas during one complete cycle. Show your work.", [
          "For indicating that the net work equals the area enclosed by the cycle on the <i>P</i>–<i>V</i> diagram (or by adding the work in each process)",
          "For a correct magnitude of 200 J, positive because the cycle runs clockwise (the gas does net work on its surroundings)",
        ], ["The net work equals the area enclosed by the rectangle: (200 kPa − 100 kPa)(3.0 L − 1.0 L) = (1.0 × 10<sup>5</sup> Pa)(2.0 × 10<sup>−3</sup> m<sup>3</sup>) = <b>200 J</b>. The cycle runs clockwise (the gas expands at the higher pressure and is compressed at the lower pressure), so the gas does net positive work on its surroundings."], { label: "Part A" }),
        P("B", "Rank the temperatures at states A, B, C, and D from highest to lowest, and support your ranking with a calculation.", [
          "For a correct ranking: <i>T</i><sub>B</sub> > <i>T</i><sub>C</sub> > <i>T</i><sub>A</sub> > <i>T</i><sub>D</sub>",
          "For using the ideal gas law, <i>PV</i> = <i>nRT</i>, to relate temperature to the product <i>PV</i> (the same <i>n</i> in every state)",
          "For correct values of <i>PV</i> (or ratios of temperatures) at the four states, such as 200, 600, 300, 100 J (or <i>T</i><sub>B</sub> = 3<i>T</i><sub>A</sub>, <i>T</i><sub>C</sub> = 1.5<i>T</i><sub>A</sub>, <i>T</i><sub>D</sub> = 0.5<i>T</i><sub>A</sub>)",
        ], ["For a fixed amount of gas, <i>T</i> is proportional to <i>PV</i>. The products are: A: (200 kPa)(1.0 L) = 200 J; B: (200 kPa)(3.0 L) = 600 J; C: (100 kPa)(3.0 L) = 300 J; D: (100 kPa)(1.0 L) = 100 J. So <b><i>T</i><sub>B</sub> > <i>T</i><sub>C</sub> > <i>T</i><sub>A</sub> > <i>T</i><sub>D</sub></b>, with <i>T</i><sub>B</sub> = 3<i>T</i><sub>A</sub>, <i>T</i><sub>C</sub> = 1.5<i>T</i><sub>A</sub>, and <i>T</i><sub>D</sub> = 0.5<i>T</i><sub>A</sub>."], { label: "Part B" }),
        P("C", "On a set of axes that you draw, sketch the cycle as a graph of temperature <i>T</i> as a function of volume <i>V</i>. Take <i>T</i><sub>A</sub> as the unit of temperature, label the four states, and use arrows to show the direction of the cycle.", [
          "For a straight segment from A to B that increases in temperature with volume, and a vertical segment from B to C that lowers the temperature at constant volume",
          "For correct relative temperatures at the four states: A = 1.0, B = 3.0, C = 1.5, D = 0.5 (in units of <i>T</i><sub>A</sub>)",
          "For a segment from C to D that decreases in volume and temperature, a vertical segment from D back to A, and arrows indicating the direction A → B → C → D → A",
        ], ["At constant pressure <i>T</i> = <i>PV</i>/<i>nR</i> is proportional to <i>V</i>, so processes AB and CD are straight lines through the origin of the <i>T</i>–<i>V</i> graph (A to B rises from 1.0 to 3.0 at higher pressure, and C to D falls from 1.5 to 0.5 at lower pressure). The constant-volume processes BC and DA are vertical segments (B to C drops from 3.0 to 1.5; D to A rises from 0.5 to 1.0). The cycle is traced A → B → C → D → A."], { label: "Part C", paper: true, modelFigures: [TV] }),
        P("D", "Indicate at which state the root-mean-square speed of the gas atoms is greatest. Justify your answer.", [
          "For indicating state B",
          "For reasoning that <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) increases with temperature, and state B has the highest temperature",
        ], ["State <b>B</b>. The rms speed of the atoms is <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>), which depends only on the temperature for atoms of a given mass. Part B shows that B has the highest temperature, so the atoms there have the largest rms speed."], { label: "Part D" }),
        P("E", "Calculate the energy transferred to the gas as heat during process AB. Show your work.", [
          "For using the first law of thermodynamics with the change in internal energy of a monatomic ideal gas, Δ<i>U</i> = (3/2)<i>nR</i>Δ<i>T</i> = (3/2)Δ(<i>PV</i>) = 600 J, and the work done by the gas, <i>P</i>Δ<i>V</i> = 400 J",
          "For a correct result of 1000 J (1.0 × 10<sup>3</sup> J) of heat transferred to the gas",
        ], ["During AB: the work done by the gas is <i>P</i>Δ<i>V</i> = (2.0 × 10<sup>5</sup> Pa)(2.0 × 10<sup>−3</sup> m<sup>3</sup>) = 400 J. The internal energy of a monatomic ideal gas is <i>U</i> = (3/2)<i>nRT</i> = (3/2)<i>PV</i>, so Δ<i>U</i> = (3/2)(600 J − 200 J) = 600 J. The first law, Δ<i>U</i> = <i>Q</i> + <i>W</i> (with <i>W</i> = −400 J the work done on the gas), gives <i>Q</i> = 600 J + 400 J = <b>1000 J</b> transferred to the gas as heat. (Equivalently, <i>Q</i> = (5/2)<i>P</i>Δ<i>V</i> for a constant-pressure process of a monatomic gas.)"], { label: "Part E" }),
      ]),

    Q("3", "Experimental Design and Analysis", 24,
      ["A student measures the radiation from a sample of a radioactive isotope with a detector that records the number of counts per minute. Before using the sample, the student measures the count rate with no sample present and subtracts this background rate from all later measurements. Table 1 shows the background-corrected count rate <i>R</i> at several times <i>t</i>. The count rate is proportional to the number of undecayed nuclei, so <i>R</i> = <i>R</i><sub>0</sub><i>e</i><sup>−λ<i>t</i></sup>, where λ is the decay constant."],
      [decayTable],
      [
        P("A", "Explain why the student measured the count rate with no sample present and subtracted it from the other measurements.", [
          "For indicating that the detector registers radiation from other sources (background radiation such as cosmic rays or natural radioactivity in the surroundings)",
          "For explaining that without subtracting it, the count rate would not represent the sample alone and would not approach zero as the sample decays, which would distort the exponential decay analysis",
        ], ["Even with no sample, the detector counts radiation from cosmic rays, natural radioactive materials in the building, and so on. That background is present in every measurement, so the raw count rate is the sum of the sample's rate and the background rate. Subtracting the background leaves the count rate due to the sample alone, which is the quantity that decreases exponentially toward zero; an uncorrected rate would level off at the background value and give the wrong decay constant and half-life."], { label: "Part A" }),
        P("B (i)", "Indicate which quantities should be graphed on the vertical and horizontal axes so that a straight line can be used to determine λ. Write the equation that relates the quantities and the slope of the line.", [
          "For indicating ln <i>R</i> on the vertical axis and <i>t</i> on the horizontal axis",
          "For writing ln <i>R</i> = ln <i>R</i><sub>0</sub> − λ<i>t</i> and indicating that the slope is −λ",
        ], ["Take the natural logarithm of <i>R</i> = <i>R</i><sub>0</sub><i>e</i><sup>−λ<i>t</i></sup>: ln <i>R</i> = ln <i>R</i><sub>0</sub> − λ<i>t</i>. This has the form <i>y</i> = <i>b</i> + <i>mx</i>, so a graph of <b>ln <i>R</i> (vertical) versus <i>t</i> (horizontal)</b> is a straight line with slope −λ and vertical intercept ln <i>R</i><sub>0</sub>."], { label: "Part B (i)" }),
        P("B (ii)", "The student draws a best-fit line on the graph of ln <i>R</i> versus <i>t</i>. The line passes through the points (0 min, 6.68) and (10 min, 4.95). Use the line to determine the decay constant and the half-life of the isotope. Show your work.", [
          "For a correct slope calculation: (4.95 − 6.68)/(10 min − 0 min) = −0.173 min<sup>−1</sup>",
          "For a correct decay constant of 0.173 min<sup>−1</sup> (the negative of the slope), with units",
          "For using <i>t</i><sub>1/2</sub> = ln 2/λ to obtain a half-life of about 4.0 min",
        ], ["Slope = (4.95 − 6.68)/(10 min) = −0.173 min<sup>−1</sup>. Since the slope equals −λ, <b>λ = 0.173 min<sup>−1</sup></b>. The half-life is the time for <i>R</i> to fall to half: <i>t</i><sub>1/2</sub> = ln 2/λ = 0.693/(0.173 min<sup>−1</sup>) = <b>4.0 min</b>. (Check with the table: 800 counts/min falls to about 400 at <i>t</i> = 4 min.)"], { label: "Part B (ii)" }),
        P("C", "The student repeats the experiment with a different isotope that has a half-life twice as long. Indicate whether the slope of the new line on a graph of ln <i>R</i> versus <i>t</i> has a greater magnitude, a smaller magnitude, or the same magnitude as the original slope, and justify your answer.", [
          "For indicating that the magnitude of the slope is smaller (half as large)",
          "For reasoning that the slope has magnitude λ = ln 2/<i>t</i><sub>1/2</sub>, so doubling the half-life halves λ (the isotope decays more slowly)",
        ], ["The slope has a <b>smaller</b> magnitude. The magnitude of the slope is λ = ln 2/<i>t</i><sub>1/2</sub>. If the half-life doubles, λ is cut in half (about 0.087 min<sup>−1</sup>), so the line is less steep: the count rate falls more slowly."], { label: "Part C" }),
        P("D", "The measured count rates do not fall exactly on a smooth curve. Explain one reason for this, and describe how counting for a longer time at each time setting would improve the data.", [
          "For explaining that radioactive decay is a random process, so the counts fluctuate statistically about an average, and that counting for a longer interval gives more counts and a smaller relative (percent) fluctuation",
        ], ["Each nucleus decays at a random time, so the number of decays detected in a fixed interval varies randomly around its average value; the fluctuation is typically about √<i>N</i> for <i>N</i> counts. Counting for a longer time at each setting gives a larger <i>N</i>, so the fractional uncertainty √<i>N</i>/<i>N</i> = 1/√<i>N</i> is smaller and the points lie closer to the true exponential curve."], { label: "Part D" }),
      ]),

    Q("4", "Qualitative/Quantitative Translation", 20,
      ["A ray of light travels inside a block of glass that has an index of refraction of 1.50, and strikes the boundary between the glass and the surrounding medium at an angle of 50° from the normal, as shown in Figure 1. The index of refraction of air is 1.00 and the index of refraction of water is 1.33."],
      [glassFig],
      [
        P("A", "Calculate the critical angle for light traveling from the glass into air. Show your work.", [
          "For using Snell's law, <i>n</i><sub>1</sub> sin θ<sub>1</sub> = <i>n</i><sub>2</sub> sin θ<sub>2</sub>, with a refraction angle of 90°: sin θ<sub>c</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>",
          "For a correct critical angle of about 42°",
        ], [`At the critical angle the refracted ray travels along the boundary (θ<sub>2</sub> = 90°). Snell's law gives (1.50) sin θ<sub>c</sub> = (1.00) sin 90°, so sin θ<sub>c</sub> = 1.00/1.50 = 0.667 and θ<sub>c</sub> = <b>${thAir.toFixed(1)}°</b> (about 42°).`], { label: "Part A" }),
        P("B", "With the glass surrounded by air, indicate whether the ray in Figure 1 is totally internally reflected at the boundary. Justify your answer.", [
          "For indicating that the ray is totally internally reflected",
          "For comparing the 50° angle of incidence to the critical angle of about 42° (the angle of incidence is greater, so Snell's law has no solution for the refracted angle)",
        ], ["Yes, the ray is <b>totally internally reflected</b>. The angle of incidence, 50°, is greater than the critical angle, 41.8°. Then sin θ<sub>2</sub> = (1.50/1.00) sin 50° = 1.15, which is greater than 1 and cannot be the sine of any angle: no refracted ray exists, and all of the light is reflected back into the glass."], { label: "Part B" }),
        P("C", "The glass block is now completely submerged in water, and the ray strikes the boundary at the same 50° angle. Indicate whether the ray is now totally internally reflected, and justify your answer with a calculation.", [
          "For calculating the new critical angle, sin θ<sub>c</sub> = 1.33/1.50, to obtain about 62°",
          "For indicating that the ray is no longer totally internally reflected (some of it refracts into the water), since 50° is less than the new critical angle",
        ], [`In water, the critical angle is given by (1.50) sin θ<sub>c</sub> = 1.33, so sin θ<sub>c</sub> = 0.887 and θ<sub>c</sub> = <b>${thW.toFixed(1)}°</b>. The ray's angle of incidence, 50°, is now <i>less</i> than the critical angle, so total internal reflection no longer occurs: most of the light refracts into the water (bending away from the normal, since water has the smaller index), and only a part is reflected. The smaller the difference between the indices, the larger the critical angle.`], { label: "Part C" }),
        P("D", "Light passes out of the glass into the water. Indicate whether the speed, the frequency, and the wavelength of the light each increase, decrease, or stay the same, and justify your answers.", [
          "For indicating that the speed increases, because <i>v</i> = <i>c</i>/<i>n</i> and the index of refraction is smaller in water than in glass",
          "For indicating that the frequency stays the same (it is set by the source) and, with <i>v</i> = <i>f</i>λ, that the wavelength increases",
        ], [`The speed in glass is <i>v</i> = <i>c</i>/<i>n</i> = (3.0 × 10<sup>8</sup> m/s)/1.50 = ${(vG / 1e8).toFixed(1)} × 10<sup>8</sup> m/s, and in water it is (3.0 × 10<sup>8</sup> m/s)/1.33 = ${(vW / 1e8).toFixed(2)} × 10<sup>8</sup> m/s, so the speed <b>increases</b>. The <b>frequency stays the same</b> because it is determined by the source and the wave crests must arrive at the boundary and leave it at the same rate. Since <i>v</i> = <i>f</i>λ with <i>f</i> fixed, the <b>wavelength increases</b> in the same proportion as the speed.`], { label: "Part D" }),
      ]),
  ],
});
