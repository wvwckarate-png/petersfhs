// Reference sheets shown during MCQ exams. A study aid that mirrors the kinds of constants and
// equations the real exam provides — the official sheet is available on exam day.

const row = (a, b) => `<tr><td>${a}</td><td>${b}</td></tr>`;
const table = (rows, head = ["Quantity", "Value"]) =>
  `<table><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead><tbody>${rows.map((r) => row(r[0], r[1])).join("")}</tbody></table>`;

const REFERENCE = [
  {
    title: "Constants",
    html:
      "<h4>Constants and conversions</h4>" +
      table([
        ["Electron mass", "m<sub>e</sub> = 9.11 × 10<sup>−31</sup> kg"],
        ["Proton / neutron mass", "m<sub>p</sub> ≈ m<sub>n</sub> = 1.67 × 10<sup>−27</sup> kg"],
        ["Elementary charge", "e = 1.60 × 10<sup>−19</sup> C"],
        ["Coulomb's law constant", "k = 9.0 × 10<sup>9</sup> N·m²/C²"],
        ["Permittivity of free space", "ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C²/(N·m²)"],
        ["Permeability of free space", "μ<sub>0</sub> = 4π × 10<sup>−7</sup> T·m/A"],
        ["Speed of light", "c = 3.00 × 10<sup>8</sup> m/s"],
        ["Planck's constant", "h = 6.63 × 10<sup>−34</sup> J·s = 4.14 × 10<sup>−15</sup> eV·s"],
        ["hc", "1.99 × 10<sup>−25</sup> J·m = 1240 eV·nm"],
        ["Boltzmann constant", "k<sub>B</sub> = 1.38 × 10<sup>−23</sup> J/K"],
        ["Universal gas constant", "R = 8.31 J/(mol·K)"],
        ["Avogadro's number", "N<sub>A</sub> = 6.02 × 10<sup>23</sup> mol<sup>−1</sup>"],
        ["Electron volt", "1 eV = 1.60 × 10<sup>−19</sup> J"],
        ["Atomic mass unit", "1 u = 931.5 MeV/c² = 1.66 × 10<sup>−27</sup> kg"],
        ["Atmospheric pressure", "1.0 × 10<sup>5</sup> Pa"],
        ["Specific heat of water", "4200 J/(kg·°C)"],
        ["Latent heat of fusion of water", "3.3 × 10<sup>5</sup> J/kg"],
        ["Acceleration due to gravity", "g = 10 m/s² (used in these practice exams)"],
      ]),
  },
  {
    title: "Thermodynamics",
    html:
      "<h4>Thermodynamics</h4>" +
      table([
        ["Ideal gas law", "PV = nRT = Nk<sub>B</sub>T"],
        ["Average kinetic energy of a molecule", "K<sub>avg</sub> = (3/2)k<sub>B</sub>T"],
        ["First law", "ΔU = Q + W (W = work done <i>on</i> the gas = −PΔV)"],
        ["Work at constant pressure", "W<sub>by gas</sub> = PΔV"],
        ["Thermal energy transfer", "Q = mcΔT, Q = mL"],
        ["Efficiency of a heat engine", "e = W/Q<sub>H</sub>, W = Q<sub>H</sub> − Q<sub>C</sub>"],
        ["Maximum (Carnot) efficiency", "e<sub>max</sub> = 1 − T<sub>C</sub>/T<sub>H</sub> (temperatures in kelvins)"],
      ], ["Concept", "Equation"]),
  },
  {
    title: "Electricity & Magnetism",
    html:
      "<h4>Electrostatics</h4>" +
      table([
        ["Coulomb's law", "F = kq<sub>1</sub>q<sub>2</sub>/r²"],
        ["Electric field", "E = F/q; point charge E = kq/r²"],
        ["Electric potential energy", "U = kq<sub>1</sub>q<sub>2</sub>/r; ΔU = qΔV"],
        ["Electric potential", "V = kq/r (point charge); uniform field ΔV = Ed"],
        ["Capacitance", "C = Q/V; parallel plates C = κε<sub>0</sub>A/d"],
        ["Energy stored in a capacitor", "U = ½QV = ½CV²"],
      ], ["Concept", "Equation"]) +
      "<h4>Circuits</h4>" +
      table([
        ["Current", "I = ΔQ/Δt"],
        ["Ohm's law, power", "V = IR; P = IV = I²R = V²/R"],
        ["Resistivity", "R = ρL/A"],
        ["Resistors in series / parallel", "R<sub>s</sub> = ΣR<sub>i</sub>; 1/R<sub>p</sub> = Σ1/R<sub>i</sub>"],
        ["Capacitors in series / parallel", "1/C<sub>s</sub> = Σ1/C<sub>i</sub>; C<sub>p</sub> = ΣC<sub>i</sub>"],
        ["Terminal voltage", "V = ε − Ir"],
      ], ["Concept", "Equation"]) +
      "<h4>Magnetism</h4>" +
      table([
        ["Force on a moving charge", "F = qvB sin θ"],
        ["Force on a current-carrying wire", "F = BIL sin θ"],
        ["Circular motion in a field", "r = mv/(qB)"],
        ["Magnetic flux", "Φ = BA cos θ"],
        ["Faraday's law", "ε = −NΔΦ/Δt"],
        ["Motional emf", "ε = BLv"],
      ], ["Concept", "Equation"]),
  },
  {
    title: "Waves & Optics",
    html:
      "<h4>Waves</h4>" +
      table([
        ["Wave speed", "v = fλ; f = 1/T"],
        ["Speed of a wave on a string", "v = √(T/μ)"],
        ["Sound intensity level", "β = 10 log(I/I<sub>0</sub>) dB, I<sub>0</sub> = 10<sup>−12</sup> W/m²"],
        ["Intensity from a point source", "I = P/(4πr²)"],
        ["Standing waves (string, fixed ends)", "λ = 2L/n, n = 1, 2, 3, …"],
        ["Open pipe / pipe closed at one end", "f = nv/(2L); f = nv/(4L), n odd"],
        ["Double slit", "d sin θ = mλ; fringe spacing Δy = λL/d (small angles)"],
        ["Diffraction grating", "d sin θ = mλ"],
        ["Single slit (first minimum)", "a sin θ = λ"],
      ], ["Concept", "Equation"]) +
      "<h4>Geometric optics</h4>" +
      table([
        ["Index of refraction", "n = c/v"],
        ["Snell's law", "n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>"],
        ["Critical angle", "sin θ<sub>c</sub> = n<sub>2</sub>/n<sub>1</sub> (n<sub>1</sub> &gt; n<sub>2</sub>)"],
        ["Thin lens / mirror equation", "1/f = 1/s<sub>o</sub> + 1/s<sub>i</sub>"],
        ["Magnification", "m = h<sub>i</sub>/h<sub>o</sub> = −s<sub>i</sub>/s<sub>o</sub>"],
        ["Focal length of a spherical mirror", "f = R/2"],
      ], ["Concept", "Equation"]),
  },
  {
    title: "Modern Physics",
    html:
      "<h4>Quantum and nuclear physics</h4>" +
      table([
        ["Photon energy", "E = hf = hc/λ"],
        ["Photoelectric effect", "K<sub>max</sub> = hf − φ; eV<sub>stop</sub> = K<sub>max</sub>"],
        ["Photon momentum", "p = h/λ"],
        ["de Broglie wavelength", "λ = h/p"],
        ["Mass–energy equivalence", "E = mc²; ΔE = (Δm)c²"],
        ["Energy levels", "photon energy = |E<sub>i</sub> − E<sub>f</sub>|"],
        ["Radioactive decay", "N = N<sub>0</sub>(1/2)<sup>t/t<sub>1/2</sub></sup>"],
        ["Alpha decay", "Z → Z − 2, A → A − 4"],
        ["Beta-minus decay", "Z → Z + 1, A unchanged"],
      ], ["Concept", "Equation"]),
  },
];

export default REFERENCE;
