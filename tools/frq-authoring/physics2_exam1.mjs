// AP Physics 2 FRQ — Exam 1 (40 points, 95 minutes)
import { exam, P, Q, fig, table, sig } from "./frqlib.mjs";
import { chargeLine, lensBlank, lensRays, sketchAxes } from "./p2frqfigs.mjs";

// ================= Q2: lens numbers =================
const f = 12, do1 = 30, ho = 4.0;
const di1 = (f * do1) / (do1 - f);              // 20 cm
const m1 = -di1 / do1;                           // -0.667
const hi1 = m1 * ho;                             // -2.67 cm
const do2 = 8.0;
const di2 = (f * do2) / (do2 - f);              // -24 cm
const m2 = -di2 / do2;                           // +3.0
if (Math.abs(di1 - 20) > 1e-9 || Math.abs(di2 + 24) > 1e-9 || Math.abs(m2 - 3) > 1e-9) throw new Error("lens numbers");
const curvePts = [15, 16, 18, 20, 24, 30, 40, 50, 60].map((d) => [d, (f * d) / (d - f)]);

// ================= Q3: battery data =================
const eps = 9.0, r = 1.5;
const noise = [0.03, -0.04, 0.02, -0.03, 0.04, -0.02];
const Is = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
const Vs = Is.map((I, i) => +(eps - r * I + noise[i]).toFixed(2));
const slope = (4.8 - 8.4) / (2.8 - 0.4);
if (Math.abs(slope + r) > 1e-9 || Math.abs(8.4 + 0.4 * r - eps) > 1e-9) throw new Error("battery numbers");

// ================= Q4: kinetic theory =================
const kB = 1.38e-23, T = 300, u = 1.66e-27;
const mHe = 4.0 * u, mAr = 39.9 * u;
const vHe = Math.sqrt((3 * kB * T) / mHe), vAr = Math.sqrt((3 * kB * T) / mAr);
const ratio = vHe / vAr;
if (Math.abs(vHe - 1368) > 15 || Math.abs(ratio - 3.158) > 0.01) throw new Error("kinetic numbers");

const fig1 = fig(chargeLine({
  items: [{ x: 70, q: "+", label: "+2Q" }, { x: 180, name: "P", label: "x = d" }, { x: 290, name: "R", label: "x = 2d" }, { x: 400, q: "-", label: "−Q" }],
  spans: [{ x1: 70, x2: 180, label: "d" }, { x1: 180, x2: 400, label: "2d" }],
}), "A horizontal line representing the x axis. Sphere 1 with charge plus 2 Q is at x equals 0. Point P is at x equals d, point R is at x equals 2 d, and sphere 2 with charge minus Q is at x equals 3 d.", { caption: "Figure 1" });

const lensFig = fig(lensBlank({ f, dO: do1, h: ho }),
  "A thin converging lens on a horizontal principal axis, with a focal point marked 12 centimeters on each side of the lens. An upright object 4.0 centimeters tall stands 30 centimeters to the left of the lens.",
  { caption: "Figure 1" });

const lensModel = fig(lensRays({ f, dO: do1, h: ho }),
  "A ray diagram: a ray from the top of the object parallel to the axis refracts through the far focal point, and a ray through the center of the lens continues straight. They meet to the right of the lens, forming a smaller, inverted, real image about 20 centimeters from the lens.",
  { caption: "Model ray diagram (not to scale vertically): the image is real, inverted and smaller." });

const graphModel = fig(sketchAxes({
  xLabel: "Object distance d_o (cm)", yLabel: "Image distance d_i (cm)", xMax: 65, yMax: 65,
  xTicks: [{ at: 15, label: "15" }, { at: 30, label: "30" }, { at: 45, label: "45" }, { at: 60, label: "60" }],
  yTicks: [{ at: 15, label: "15" }, { at: 30, label: "30" }, { at: 45, label: "45" }, { at: 60, label: "60" }],
  curves: [{ pts: curvePts }],
  notes: [{ x: 16, y: 61, s: "(15, 60)" }, { x: 47, y: 19.5, s: "(60, 15)" }],
}), "A graph of image distance versus object distance. The curve starts at 60 centimeters when the object distance is 15 centimeters, decreases steeply at first and then gradually, and levels off toward about 15 centimeters at an object distance of 60 centimeters.", { caption: "Model graph: d_i decreases from 60 cm to 15 cm, concave up, approaching f = 12 cm for large d_o." });

const dataTable = table(["Trial", "Current <i>I</i> (A)", "Terminal voltage <i>V</i> (V)"], Is.map((I, i) => [String(i + 1), I.toFixed(2), Vs[i].toFixed(2)]), "Table 1");

export default exam({
  id: "exam1",
  title: "Exam 1",
  description: "A full-length, four-question free-response exam: electric field and potential, a lens, battery internal resistance, and kinetic theory.",
  minutes: 95,
  questions: [
    Q("1", "Mathematical Routines", 23,
      ["Two small charged spheres are fixed on the <i>x</i>-axis, as shown in Figure 1. Sphere 1 has charge +2<i>Q</i> and is at <i>x</i> = 0. Sphere 2 has charge −<i>Q</i> and is at <i>x</i> = 3<i>d</i>. Point P is at <i>x</i> = <i>d</i> and point R is at <i>x</i> = 2<i>d</i>. The spheres are much smaller than <i>d</i>. Let <i>k</i> be the Coulomb constant, and take the electric potential to be zero infinitely far from the spheres."],
      [fig1],
      [
        P("A", "Derive an expression for the magnitude of the net electric field at point P, and state the direction of the field. Express your answer in terms of <i>Q</i>, <i>d</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with an equation for the electric field of a point charge, <i>E</i> = <i>kq</i>/<i>r</i><sup>2</sup> (or Coulomb's law with <i>E</i> = <i>F</i>/<i>q</i>)",
          "For correct magnitudes of the two contributions at P: 2<i>kQ</i>/<i>d</i><sup>2</sup> from sphere 1 and <i>kQ</i>/(2<i>d</i>)<sup>2</sup> = <i>kQ</i>/(4<i>d</i><sup>2</sup>) from sphere 2",
          "For adding the contributions in the same direction to obtain <i>E</i> = 9<i>kQ</i>/(4<i>d</i><sup>2</sup>), directed in the +<i>x</i> direction",
        ], [
          "For a point charge, <i>E</i> = <i>kq</i>/<i>r</i><sup>2</sup>, and the field points away from a positive charge and toward a negative charge. Sphere 1 is a distance <i>d</i> from P, so its field is <i>E</i><sub>1</sub> = <i>k</i>(2<i>Q</i>)/<i>d</i><sup>2</sup> = 2<i>kQ</i>/<i>d</i><sup>2</sup>, pointing away from sphere 1, which is the +<i>x</i> direction. Sphere 2 is a distance 3<i>d</i> − <i>d</i> = 2<i>d</i> from P, so <i>E</i><sub>2</sub> = <i>kQ</i>/(2<i>d</i>)<sup>2</sup> = <i>kQ</i>/(4<i>d</i><sup>2</sup>), pointing toward sphere 2, which is also the +<i>x</i> direction.",
          "The two fields point the same way, so they add: <i>E</i><sub>net</sub> = 2<i>kQ</i>/<i>d</i><sup>2</sup> + <i>kQ</i>/(4<i>d</i><sup>2</sup>) = <b>9<i>kQ</i>/(4<i>d</i><sup>2</sup>)</b>, directed along +<i>x</i>.",
        ], { label: "Part A" }),
        P("B", "Derive an expression for the electric potential at point P. Express your answer in terms of <i>Q</i>, <i>d</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with the electric potential of a point charge, <i>V</i> = <i>kq</i>/<i>r</i>, and indicating that the potentials from the two spheres add as scalars (with their signs)",
          "For a correct final expression, <i>V</i><sub>P</sub> = 2<i>kQ</i>/<i>d</i> − <i>kQ</i>/(2<i>d</i>) = 3<i>kQ</i>/(2<i>d</i>)",
        ], [
          "The potential of a point charge is <i>V</i> = <i>kq</i>/<i>r</i>, and the net potential is the algebraic sum of the potentials from each sphere (potential is a scalar, so the signs of the charges are included but there are no directions to combine). At P: <i>V</i><sub>P</sub> = <i>k</i>(2<i>Q</i>)/<i>d</i> + <i>k</i>(−<i>Q</i>)/(2<i>d</i>) = 2<i>kQ</i>/<i>d</i> − <i>kQ</i>/(2<i>d</i>) = <b>3<i>kQ</i>/(2<i>d</i>)</b>.",
        ], { label: "Part B" }),
        P("C", "A small particle of mass <i>m</i> and positive charge <i>q</i> is released from rest at point P and moves along the <i>x</i>-axis. Derive an expression for the speed <i>v</i> of the particle when it reaches point R. Express your answer in terms of <i>Q</i>, <i>q</i>, <i>m</i>, <i>d</i>, and physical constants, as appropriate. Begin your derivation by writing a fundamental physics principle or an equation from the reference information.", [
          "For starting with conservation of energy, such as <i>K</i><sub>P</sub> + <i>qV</i><sub>P</sub> = <i>K</i><sub>R</sub> + <i>qV</i><sub>R</sub> (or Δ<i>K</i> = −<i>q</i>Δ<i>V</i>)",
          "For a correct potential at R: <i>V</i><sub>R</sub> = 2<i>kQ</i>/(2<i>d</i>) − <i>kQ</i>/<i>d</i> = 0",
          "For a correct final expression, <i>v</i> = √(3<i>kQq</i>/(<i>md</i>)), obtained from ½<i>mv</i><sup>2</sup> = <i>q</i>(<i>V</i><sub>P</sub> − <i>V</i><sub>R</sub>)",
        ], [
          "Only the conservative electric force does work on the particle, so the total of kinetic and electric potential energy is constant: <i>K</i><sub>P</sub> + <i>qV</i><sub>P</sub> = <i>K</i><sub>R</sub> + <i>qV</i><sub>R</sub>. The particle starts from rest, so <i>K</i><sub>P</sub> = 0. The potential at R is <i>V</i><sub>R</sub> = <i>k</i>(2<i>Q</i>)/(2<i>d</i>) + <i>k</i>(−<i>Q</i>)/(3<i>d</i> − 2<i>d</i>) = <i>kQ</i>/<i>d</i> − <i>kQ</i>/<i>d</i> = 0. Therefore ½<i>mv</i><sup>2</sup> = <i>q</i>(<i>V</i><sub>P</sub> − <i>V</i><sub>R</sub>) = <i>q</i>·3<i>kQ</i>/(2<i>d</i>), so <i>v</i><sup>2</sup> = 3<i>kQq</i>/(<i>md</i>) and <b><i>v</i> = √(3<i>kQq</i>/(<i>md</i>))</b>.",
        ], { label: "Part C" }),
        P("D", "A student claims that there is a point on the <i>x</i>-axis between the two spheres where the net electric field is zero. Do you agree or disagree? Justify your answer with reasoning about the directions of the two fields.", [
          "For indicating that the student is incorrect (there is no such point)",
          "For reasoning that between the spheres the field from the positive sphere points away from it (+<i>x</i>) and the field from the negative sphere points toward it (also +<i>x</i>), so the two fields point the same way and cannot cancel",
        ], [
          "Disagree. At any point between the spheres, the field of the positive sphere 1 points away from sphere 1, which is toward sphere 2 (the +<i>x</i> direction). The field of the negative sphere 2 points toward sphere 2, which is also the +<i>x</i> direction. Because the two fields have the same direction everywhere between the spheres, they add and can never sum to zero. (A point of zero field exists only outside the spheres, beyond the smaller charge — to the right of sphere 2.)",
        ], { label: "Part D" }),
      ]),

    Q("2", "Translation Between Representations", 28,
      ["A thin converging lens has focal length 12 cm. An object 4.0 cm tall is placed 30 cm to the left of the lens on its principal axis, as shown in Figure 1."],
      [lensFig],
      [
        P("A (i)", "On a sketch of Figure 1, draw two principal rays from the top of the object that can be used to locate the image formed by the lens. Then draw the image and indicate whether it is real or virtual and upright or inverted.", [
          "For a ray from the top of the object that travels parallel to the axis and refracts through the focal point on the right side of the lens",
          "For a second ray that is correct: through the center of the lens without bending, or through the left focal point and emerging parallel to the axis",
          "For locating the image at the point where the rays cross (on the right side) and indicating that it is real and inverted",
        ], [
          "Ray 1 leaves the top of the object parallel to the principal axis, bends at the lens, and passes through the focal point on the right. Ray 2 passes through the center of the lens and continues in a straight line. The two rays cross on the right side of the lens, about 20 cm away, below the axis. The image is drawn as an arrow from the axis down to that crossing point: it is <b>real</b> (the light rays actually converge there) and <b>inverted</b>, and it is smaller than the object.",
        ], { label: "Part A (i)", paper: true, modelFigures: [lensModel], note: "A third principal ray (through the left focal point, emerging parallel) is also acceptable." }),
        P("A (ii)", "Calculate the distance from the lens to the image. Show your work.", [
          "For using the thin-lens equation, 1/<i>d</i><sub>o</sub> + 1/<i>d</i><sub>i</sub> = 1/<i>f</i>, with the correct values substituted",
          "For a correct image distance of 20 cm (positive, on the right side of the lens)",
        ], [
          `1/<i>d</i><sub>i</sub> = 1/<i>f</i> − 1/<i>d</i><sub>o</sub> = 1/12 cm − 1/30 cm = (5 − 2)/60 cm = 1/20 cm, so <i>d</i><sub>i</sub> = <b>20 cm</b>. It is positive, which means the image is real and on the opposite side of the lens from the object. It lies between <i>f</i> and 2<i>f</i>, consistent with the ray diagram.`,
        ], { label: "Part A (ii)" }),
        P("A (iii)", "Calculate the height of the image and indicate its orientation relative to the object. Show your work.", [
          "For using the magnification relationship, <i>m</i> = <i>h</i><sub>i</sub>/<i>h</i><sub>o</sub> = −<i>d</i><sub>i</sub>/<i>d</i><sub>o</sub>, with correct values: <i>m</i> = −20/30 ≈ −0.67",
          "For a correct image height of about 2.7 cm and indicating that the image is inverted (the negative sign)",
        ], [
          `The magnification is <i>m</i> = −<i>d</i><sub>i</sub>/<i>d</i><sub>o</sub> = −(20 cm)/(30 cm) = −0.67. Then <i>h</i><sub>i</sub> = <i>m h</i><sub>o</sub> = (−0.67)(4.0 cm) = <b>−2.7 cm</b>. The magnitude of the image height is <b>2.7 cm</b>, and the negative sign means the image is <b>inverted</b>.`,
        ], { label: "Part A (iii)" }),
        P("B", "The object is moved so that it is 8.0 cm from the lens. Describe the image that is formed (real or virtual, upright or inverted, larger or smaller than the object) and calculate the distance from the lens to the image. Show your work.", [
          "For a correct calculation: 1/<i>d</i><sub>i</sub> = 1/12 − 1/8 = −1/24, so <i>d</i><sub>i</sub> = −24 cm",
          "For indicating that the negative image distance means the image is virtual (on the same side of the lens as the object)",
          "For indicating that the image is upright and larger than the object (<i>m</i> = +3.0)",
        ], [
          `Now the object is inside the focal length (8.0 cm is less than 12 cm). 1/<i>d</i><sub>i</sub> = 1/<i>f</i> − 1/<i>d</i><sub>o</sub> = 1/12 − 1/8 = (2 − 3)/24 = −1/24 cm<sup>−1</sup>, so <i>d</i><sub>i</sub> = <b>−24 cm</b>. The negative sign means the image is <b>virtual</b>: it is on the same side of the lens as the object, and the refracted rays only appear to diverge from it. The magnification is <i>m</i> = −<i>d</i><sub>i</sub>/<i>d</i><sub>o</sub> = +3.0, so the image is <b>upright</b> and <b>three times as large</b> as the object — the lens is acting as a magnifying glass.`,
        ], { label: "Part B" }),
        P("C", "On a set of axes that you draw, sketch a graph of the image distance <i>d</i><sub>i</sub> as a function of the object distance <i>d</i><sub>o</sub> for object distances from 15 cm to 60 cm. Label the values of <i>d</i><sub>i</sub> at both ends of your curve.", [
          "For a curve that decreases as the object distance increases and is concave up (steep at first, flattening out)",
          "For correct end values: <i>d</i><sub>i</sub> = 60 cm at <i>d</i><sub>o</sub> = 15 cm and <i>d</i><sub>i</sub> = 15 cm at <i>d</i><sub>o</sub> = 60 cm",
        ], [
          "From the thin-lens equation, <i>d</i><sub>i</sub> = <i>f d</i><sub>o</sub>/(<i>d</i><sub>o</sub> − <i>f</i>) = 12<i>d</i><sub>o</sub>/(<i>d</i><sub>o</sub> − 12). At <i>d</i><sub>o</sub> = 15 cm, <i>d</i><sub>i</sub> = 180/3 = 60 cm; at <i>d</i><sub>o</sub> = 20 cm, <i>d</i><sub>i</sub> = 30 cm; at <i>d</i><sub>o</sub> = 30 cm, <i>d</i><sub>i</sub> = 20 cm; at <i>d</i><sub>o</sub> = 60 cm, <i>d</i><sub>i</sub> = 720/48 = 15 cm. The graph is a smooth, decreasing curve that is concave up. As the object moves far away, the image distance approaches the focal length (12 cm), and as the object approaches the focal point, the image distance grows very large.",
        ], { label: "Part C", paper: true, modelFigures: [graphModel] }),
      ]),

    Q("3", "Experimental Design and Analysis", 24,
      ["A student wants to determine the emf ε and the internal resistance <i>r</i> of a battery. The student has the battery, a variable resistor (rheostat), a voltmeter, an ammeter, a switch, and connecting wires. In each trial the student sets the variable resistor to a different resistance, closes the switch, and records the current in the battery and the potential difference across the battery's terminals. The data are shown in Table 1."],
      [dataTable],
      [
        P("A", "Describe how the student should connect the ammeter and the voltmeter to measure the current in the battery and the potential difference across the battery's terminals.", [
          "For indicating that the ammeter is connected in series with the battery and variable resistor so the battery current passes through it",
          "For indicating that the voltmeter is connected in parallel across the terminals of the battery",
        ], [
          "The ammeter must carry the battery's current, so it is placed in series in the loop containing the battery, the variable resistor and the switch. The voltmeter must measure the potential difference between the battery's terminals, so it is connected in parallel with the battery — one lead to each terminal. (An ideal voltmeter has very high resistance and draws almost no current; an ideal ammeter has very low resistance and does not change the current.)",
        ], { label: "Part A" }),
        P("B (i)", "Indicate which quantities the student should graph on the vertical and horizontal axes so that the data produce a straight line that can be used to determine ε and <i>r</i>. Write the equation that relates the quantities and the features of the line.", [
          "For indicating the terminal voltage <i>V</i> on the vertical axis and the current <i>I</i> on the horizontal axis",
          "For writing <i>V</i> = ε − <i>Ir</i> and indicating that the slope is −<i>r</i> and the vertical intercept is ε",
        ], [
          "Graph <b><i>V</i> (vertical) versus <i>I</i> (horizontal)</b>. The potential difference across the terminals is the emf minus the potential drop across the internal resistance: <i>V</i> = ε − <i>Ir</i>. This has the form <i>y</i> = <i>b</i> + <i>mx</i>, so the vertical intercept is ε and the slope is −<i>r</i>.",
        ], { label: "Part B (i)" }),
        P("B (ii)", "The student draws a best-fit line through the data. The line passes through the points (0.40 A, 8.4 V) and (2.8 A, 4.8 V). Use these points to determine the internal resistance <i>r</i> and the emf ε of the battery. Show your work.", [
          "For a correct calculation of the slope of the best-fit line: (4.8 V − 8.4 V)/(2.8 A − 0.40 A) = −1.5 V/A",
          "For a correct internal resistance of 1.5 Ω (the magnitude of the slope, with units)",
          "For a correct emf of 9.0 V, from the vertical intercept or from substituting a point into <i>V</i> = ε − <i>Ir</i>",
        ], [
          "Slope = Δ<i>V</i>/Δ<i>I</i> = (4.8 V − 8.4 V)/(2.8 A − 0.40 A) = −3.6 V / 2.4 A = −1.5 V/A. Because the slope equals −<i>r</i>, the internal resistance is <b><i>r</i> = 1.5 Ω</b>. For the emf, use a point on the line in <i>V</i> = ε − <i>Ir</i>: ε = <i>V</i> + <i>Ir</i> = 8.4 V + (0.40 A)(1.5 Ω) = <b>9.0 V</b>. This is the value of the line where it crosses the vertical axis at <i>I</i> = 0.",
        ], { label: "Part B (ii)" }),
        P("C", "Describe one change to the procedure that would reduce the uncertainty in the student's results.", [
          "For a valid improvement, such as repeating each measurement several times and averaging; taking more trials over a wider range of currents; or keeping the switch closed only briefly (so the battery does not heat up or run down during the measurements)",
        ], [
          "The student could take several readings at each resistor setting and average them, which reduces the effect of random reading errors. Taking more trials spread over a wider range of currents also gives a better-determined best-fit line. A third good practice is to close the switch only long enough to read the meters, because a battery that is running for a long time warms and drains, which changes its emf and internal resistance during the experiment.",
        ], { label: "Part C" }),
        P("D", "A second student claims that the potential difference across the terminals of a battery is always equal to the battery's emf. Do the data and graph support this claim? Justify your answer.", [
          "For indicating that the claim is not supported, because <i>V</i> decreases as the current increases (the best-fit line has a negative slope)",
          "For explaining that <i>V</i> = ε − <i>Ir</i>, so the terminal voltage equals the emf only when the current is zero (at the vertical intercept) — otherwise there is a potential drop across the internal resistance",
        ], [
          "The data do not support the claim. The terminal voltage falls from about 8.3 V to about 4.5 V as the current increases from 0.50 A to 3.0 A, so it is not constant and not equal to the 9.0 V emf. The graph's equation, <i>V</i> = ε − <i>Ir</i>, shows why: a current in the battery produces a potential drop <i>Ir</i> across the internal resistance, so the potential difference available to the external circuit is smaller than the emf. The terminal voltage equals the emf only in the limit of zero current, where the line meets the vertical axis.",
        ], { label: "Part D" }),
      ]),

    Q("4", "Qualitative/Quantitative Translation", 20,
      [`A rigid, sealed container holds a mixture of helium gas (atomic mass 4.0 u) and argon gas (atomic mass 39.9 u). Both gases behave as ideal monatomic gases, and the mixture is in thermal equilibrium at a temperature of 300 K.`],
      [],
      [
        P("A", "Indicate whether the average translational kinetic energy of a helium atom is greater than, less than, or equal to that of an argon atom. Justify your answer.", [
          "For indicating that the average kinetic energies are equal",
          "For reasoning that the average translational kinetic energy of an atom, (3/2)<i>k</i><sub>B</sub><i>T</i>, depends only on the temperature of the gas, not on the mass of the atoms",
        ], [
          "The average translational kinetic energies are <b>equal</b>. For an ideal gas the average translational kinetic energy per atom is (3/2)<i>k</i><sub>B</sub><i>T</i>, which depends only on the absolute temperature. Both gases are in the same container in thermal equilibrium at 300 K, so each kind of atom has the same average kinetic energy, about 6.2 × 10<sup>−21</sup> J.",
        ], { label: "Part A" }),
        P("B", "Indicate whether the root-mean-square (rms) speed of the helium atoms is greater than, less than, or equal to that of the argon atoms, and calculate the ratio <i>v</i><sub>rms,He</sub>/<i>v</i><sub>rms,Ar</sub>. Show your work.", [
          "For indicating that the rms speed of helium is greater than that of argon",
          `For a correct ratio of about 3.2, obtained from the equal kinetic energies: <i>v</i><sub>He</sub>/<i>v</i><sub>Ar</sub> = √(<i>m</i><sub>Ar</sub>/<i>m</i><sub>He</sub>) = √(39.9/4.0)`,
        ], [
          `Because the average kinetic energy ½<i>mv</i><sup>2</sup> is the same for both and a helium atom is far less massive, helium atoms must move faster: <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>), so the speed varies as 1/√<i>m</i>. The ratio is <i>v</i><sub>He</sub>/<i>v</i><sub>Ar</sub> = √(<i>m</i><sub>Ar</sub>/<i>m</i><sub>He</sub>) = √(39.9/4.0) = <b>${sig(ratio, 2)}</b>. The helium atoms' rms speed is a little more than three times that of the argon atoms.`,
        ], { label: "Part B" }),
        P("C", "Calculate the rms speed of the helium atoms at 300 K. Show your work.", [
          "For using <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) (or ½<i>m</i><i>v</i><sup>2</sup> = (3/2)<i>k</i><sub>B</sub><i>T</i>) with <i>m</i> = (4.0)(1.66 × 10<sup>−27</sup> kg)",
          "For a correct value of about 1.4 × 10<sup>3</sup> m/s",
        ], [
          `The mass of a helium atom is <i>m</i> = (4.0 u)(1.66 × 10<sup>−27</sup> kg/u) = 6.64 × 10<sup>−27</sup> kg. Then <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) = √[3(1.38 × 10<sup>−23</sup> J/K)(300 K)/(6.64 × 10<sup>−27</sup> kg)] = √(1.87 × 10<sup>6</sup> m<sup>2</sup>/s<sup>2</sup>) ≈ <b>1.4 × 10<sup>3</sup> m/s</b> (about ${sig(vHe, 3)} m/s).`,
        ], { label: "Part C" }),
        P("D", "The temperature of the mixture is increased to 600 K. By what factor does the rms speed of the helium atoms change, and does the pressure of the gas in the rigid container increase, decrease, or stay the same? Justify both answers.", [
          "For indicating that the rms speed increases by a factor of √2 ≈ 1.4, since <i>v</i><sub>rms</sub> is proportional to √<i>T</i>",
          "For indicating that the pressure increases (doubles), because with <i>V</i> and <i>n</i> fixed <i>P</i> is proportional to <i>T</i> (or because faster atoms collide with the walls more often and more forcefully)",
        ], [
          "Since <i>v</i><sub>rms</sub> = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) is proportional to √<i>T</i>, doubling the absolute temperature multiplies the rms speed by √2 ≈ <b>1.4</b> (helium: about 1.9 × 10<sup>3</sup> m/s). The container is rigid and sealed, so <i>V</i> and the number of atoms stay the same; from <i>PV</i> = <i>nRT</i>, the pressure is proportional to <i>T</i> and <b>doubles</b>. Microscopically, the faster atoms hit the walls more often and with larger momentum changes.",
        ], { label: "Part D" }),
      ]),
  ],
});
