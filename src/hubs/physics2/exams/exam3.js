// AP Physics 2 — Exam 3 — 42 questions. Uses g = 10 m/s².
const EXAM = {
 "questions": [
  {
   "id": "p2e3-1",
   "unit": 11,
   "setId": "p2e3-set1",
   "stem": "What is the current in the 3 Ω resistor?",
   "choices": [
    "4.0 A",
    "2.0 A",
    "1.0 A",
    "0.50 A"
   ],
   "correct": 2,
   "explanation": "The resistors are in series, so they carry the same current: I = V/R_total = 12/(2 + 3 + 7) = 1.0 A."
  },
  {
   "id": "p2e3-2",
   "unit": 11,
   "setId": "p2e3-set1",
   "stem": "What is the potential difference across the 7 Ω resistor?",
   "choices": [
    "12 V",
    "7.0 V",
    "3.0 V",
    "1.0 V"
   ],
   "correct": 1,
   "explanation": "The current is 1.0 A, so V = IR = (1.0)(7) = 7.0 V. The 12 V of the battery is divided among the three resistors (2 V + 3 V + 7 V)."
  },
  {
   "id": "p2e3-3",
   "unit": 11,
   "setId": "p2e3-set1",
   "stem": "The 3 Ω resistor is replaced by a 6 Ω resistor. How does the current in the circuit change?",
   "choices": [
    "The current decreases, because the total resistance increases.",
    "The current increases, because the resistor with a larger resistance allows more current.",
    "The current stays the same, because the battery's potential difference is unchanged.",
    "The current decreases only in the 6 Ω resistor and stays the same elsewhere."
   ],
   "correct": 0,
   "explanation": "In a series circuit the total resistance is the sum of the resistances. Replacing 3 Ω with 6 Ω raises the total from 12 Ω to 15 Ω. With the battery voltage fixed, I = V/R decreases (from 1.0 A to 0.80 A), and since the same current flows through every element of a series circuit, the current decreases everywhere."
  },
  {
   "id": "p2e3-4",
   "unit": 9,
   "stem": "An ideal gas is compressed quickly in an insulated cylinder, so that no heat is exchanged with the surroundings. During the compression, 200 J of work is done on the gas. What is the change in the internal energy of the gas?",
   "choices": [
    "−200 J",
    "0 J",
    "+100 J",
    "+200 J"
   ],
   "correct": 3,
   "explanation": "The process is adiabatic, so Q = 0. By the first law, ΔU = Q + W_on = 0 + 200 = +200 J. The temperature of the gas rises as its internal energy increases."
  },
  {
   "id": "p2e3-5",
   "unit": 14,
   "setId": "p2e3-set2",
   "stem": "What is the wavelength of the wave?",
   "choices": [
    "16 cm",
    "8 cm",
    "4 cm",
    "3 cm"
   ],
   "correct": 1,
   "explanation": "Two complete cycles span 16 cm, so one wavelength is 8 cm. (3 cm is the amplitude, and 4 cm is half a wavelength.)"
  },
  {
   "id": "p2e3-6",
   "unit": 14,
   "setId": "p2e3-set2",
   "stem": "What is the period of the wave?",
   "choices": [
    "8.0 s",
    "2.0 s",
    "0.50 s",
    "0.25 s"
   ],
   "correct": 2,
   "explanation": "The frequency is f = v/λ = 16/8 = 2.0 Hz, so the period is T = 1/f = 0.50 s. Alternatively T = λ/v = 8/16 = 0.50 s."
  },
  {
   "id": "p2e3-7",
   "unit": 13,
   "stem": "A ray of light in water (n = 1.33) strikes the water–air boundary at an angle of incidence of 30° from the normal. What is the angle of refraction in the air?",
   "choices": [
    "22°",
    "30°",
    "42°",
    "49°"
   ],
   "correct": 2,
   "explanation": "Snell's law gives (1.33)(sin 30°) = (1.00) sin θ₂, so sin θ₂ = 0.665 and θ₂ ≈ 42°. The ray bends away from the normal as it enters the medium with the lower index."
  },
  {
   "id": "p2e3-8",
   "unit": 12,
   "stem": "In a velocity selector, charged particles move through a region with a uniform electric field of 2000 V/m and a uniform magnetic field of 0.50 T, perpendicular to each other and to the particles' velocity. What speed must the particles have to pass straight through undeflected?",
   "choices": [
    "250 m/s",
    "1000 m/s",
    "4000 m/s",
    "1.0 × 10⁶ m/s"
   ],
   "correct": 2,
   "explanation": "Particles pass through undeflected when the electric and magnetic forces cancel: qE = qvB, so v = E/B = 2000/0.50 = 4000 m/s. The charge and mass do not matter."
  },
  {
   "id": "p2e3-9",
   "unit": 10,
   "stem": "A solid metal sphere carries a net positive charge and is in electrostatic equilibrium. Which statement about the sphere is correct?",
   "choices": [
    "The electric field is zero everywhere inside the metal, and the excess charge is on the surface.",
    "The electric field points outward everywhere inside the metal, and the excess charge is spread throughout the volume.",
    "The electric field is zero everywhere inside the metal, and the excess charge is spread throughout the volume.",
    "The electric field points outward everywhere inside the metal, and the excess charge is on the surface."
   ],
   "correct": 0,
   "explanation": "In electrostatic equilibrium the mobile charges in a conductor have stopped moving, which requires the electric field inside the conductor to be zero. Excess charge repels itself and moves as far apart as it can, ending up on the outer surface."
  },
  {
   "id": "p2e3-10",
   "unit": 9,
   "setId": "p2e3-set3",
   "stem": "How much net work does the gas do in one trip around the cycle?",
   "choices": [
    "400 J",
    "200 J",
    "100 J",
    "50 J"
   ],
   "correct": 2,
   "explanation": "The net work is the area enclosed by the cycle: ½(ΔV)(ΔP) = ½(2 × 10⁻³ m³)(100 × 10³ Pa) = 100 J. The cycle runs clockwise, so the net work done by the gas is positive."
  },
  {
   "id": "p2e3-11",
   "unit": 9,
   "setId": "p2e3-set3",
   "stem": "How much work does the gas do during process B → C?",
   "choices": [
    "600 J",
    "400 J",
    "150 J",
    "300 J"
   ],
   "correct": 3,
   "explanation": "The work done by the gas equals the area under the B → C line. The pressure falls linearly from 200 kPa to 100 kPa, so the average pressure is 150 kPa, and W = (150 × 10³ Pa)(2 × 10⁻³ m³) = 300 J."
  },
  {
   "id": "p2e3-12",
   "unit": 9,
   "setId": "p2e3-set3",
   "stem": "Which of the following correctly describes process C → A?",
   "choices": [
    "The gas absorbs heat from its surroundings, and its internal energy increases.",
    "The gas releases heat to its surroundings, and its internal energy stays constant.",
    "The gas neither absorbs nor releases heat, because the pressure is constant.",
    "The gas releases heat to its surroundings, and its internal energy decreases."
   ],
   "correct": 3,
   "explanation": "At constant pressure the volume decreases, and since PV = nRT, the temperature falls as V falls at fixed P. The internal energy therefore decreases (ΔU < 0). Work is done on the gas (W_by < 0), so by the first law Q = ΔU + W_by is even more negative: the gas releases heat. A constant pressure does not mean there is no heat flow."
  },
  {
   "id": "p2e3-13",
   "unit": 13,
   "stem": "A ray of light passes from air through a flat, parallel-sided glass slab and back into air. Which statement describes the ray that emerges from the slab?",
   "choices": [
    "It is parallel to the original ray but shifted sideways.",
    "It is bent toward the normal compared with the original ray.",
    "It is bent away from the normal compared with the original ray.",
    "It follows exactly the same line as the original ray."
   ],
   "correct": 0,
   "explanation": "The ray bends toward the normal on entering the glass and bends back by the same angle on leaving, because the second refraction is the reverse of the first. The emerging ray is therefore parallel to the incoming ray but displaced sideways."
  },
  {
   "id": "p2e3-14",
   "unit": 14,
   "stem": "A single machine in a factory produces a sound level of 70 dB. When a second identical machine is turned on next to the first, what is the approximate total sound level?",
   "choices": [
    "70 dB",
    "73 dB",
    "77 dB",
    "140 dB"
   ],
   "correct": 1,
   "explanation": "Doubling the intensity raises the level by 10 log(2) ≈ 3 dB, so the level is about 73 dB. Decibels are logarithmic, so the levels do not add directly."
  },
  {
   "id": "p2e3-15",
   "unit": 12,
   "stem": "A positively charged particle travels toward the left edge of the page through a uniform magnetic field that points out of the page, as shown. In which direction does the magnetic field push the particle at the instant shown?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 268\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"220\" fill=\"none\" stroke=\"#E6E4DC\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"200\" cy=\"130\" r=\"13\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">+</text><line x1=\"187\" y1=\"130\" x2=\"128\" y2=\"130\" stroke=\"#2E332E\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"128,130 137.79,125.63 137.79,134.37\" fill=\"#2E332E\"/><text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\" font-style=\"italic\">v</text><text x=\"200\" y=\"256\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">• = magnetic field directed out of the page</text></svg>",
     "alt": "A grid of dots showing a magnetic field directed out of the page. A positive charge in the middle moves to the left with a velocity arrow pointing left.",
     "maxWidth": 420
    }
   ],
   "choices": [
    "Toward the bottom of the page",
    "To the right",
    "Into the page",
    "Toward the top of the page"
   ],
   "correct": 3,
   "explanation": "Using F = qv × B with v pointing left (−x) and B out of the page (+z): (−x) × (+z) = +y, which is toward the top of the page. For a positive charge the force points the same way as v × B."
  },
  {
   "id": "p2e3-16",
   "unit": 10,
   "stem": "At what distance from an isolated point charge of +2.0 nC is the magnitude of the electric field equal to 450 N/C?",
   "choices": [
    "2.0 m",
    "0.40 m",
    "0.20 m",
    "0.040 m"
   ],
   "correct": 2,
   "explanation": "E = kq/r² gives r = √(kq/E) = √((9.0 × 10⁹)(2.0 × 10⁻⁹)/450) = √(0.040) = 0.20 m."
  },
  {
   "id": "p2e3-17",
   "unit": 11,
   "stem": "Current of 2.0 A flows through a 5.0 Ω wire. What is the power dissipated in the wire?",
   "choices": [
    "10 W",
    "20 W",
    "40 W",
    "100 W"
   ],
   "correct": 1,
   "explanation": "P = I²R = (2.0)²(5.0) = 20 W. The value 10 W is the potential difference across the wire (IR = 10 V), which is not a power."
  },
  {
   "id": "p2e3-18",
   "unit": 12,
   "stem": "A coil of 50 turns has a magnetic flux through each turn that changes by 0.020 Wb in 0.40 s. What is the magnitude of the average emf induced in the coil?",
   "choices": [
    "25 V",
    "2.5 V",
    "0.50 V",
    "0.050 V"
   ],
   "correct": 1,
   "explanation": "Faraday's law for a coil gives |ε| = NΔΦ/Δt = (50)(0.020)/(0.40) = 2.5 V. Leaving out the number of turns would give 0.050 V."
  },
  {
   "id": "p2e3-19",
   "unit": 11,
   "stem": "A resistor and an initially uncharged capacitor are connected in series to a battery. After the switch is closed, what happens to the current in the circuit as the capacitor charges?",
   "choices": [
    "The current is largest at first and decreases toward zero as the capacitor charges.",
    "The current is zero at first and increases to a constant value as the capacitor charges.",
    "The current stays constant until the capacitor is fully charged and then drops to zero.",
    "The current is largest when the capacitor is fully charged."
   ],
   "correct": 0,
   "explanation": "At the instant the switch is closed the capacitor has no charge and no potential difference, so the full battery voltage is across the resistor and the current is V/R, its maximum. As charge builds up, the capacitor's voltage grows and opposes the battery, reducing the voltage across the resistor and therefore the current. When the capacitor's voltage equals the battery's, the current is zero."
  },
  {
   "id": "p2e3-20",
   "unit": 9,
   "stem": "A container holds hydrogen gas (H₂) and a second, identical container holds oxygen gas (O₂). Both gases are ideal and are at the same temperature. Which statement is correct?",
   "choices": [
    "The hydrogen molecules have the greater average kinetic energy and the greater average speed.",
    "The molecules have the same average speed, but the oxygen molecules have the greater average kinetic energy.",
    "The oxygen molecules have the greater average kinetic energy and the greater average speed.",
    "The molecules have the same average kinetic energy, but the hydrogen molecules have the greater average speed."
   ],
   "correct": 3,
   "explanation": "The average translational kinetic energy depends only on the temperature, K = (3/2)k_BT, so it is the same for both gases. Since K = ½mv², the lighter hydrogen molecules must have the greater average speed."
  },
  {
   "id": "p2e3-21",
   "unit": 12,
   "stem": "A long straight wire carries a current directed out of the page. Which of the following describes the magnetic field the wire produces in the plane of the page?",
   "choices": [
    "The field lines are circles centered on the wire, directed counterclockwise as seen from the front of the page.",
    "The field lines are circles centered on the wire, directed clockwise as seen from the front of the page.",
    "The field lines are straight lines directed away from the wire.",
    "The field lines are straight lines directed toward the wire."
   ],
   "correct": 0,
   "explanation": "Using the right-hand rule for a straight wire, point the thumb along the current (out of the page) and curl the fingers: they circle the wire counterclockwise as seen from the front of the page. Magnetic field lines form closed loops around the current and never point radially toward or away from the wire."
  },
  {
   "id": "p2e3-22",
   "unit": 11,
   "stem": "A 4.0 μF capacitor and a 12 μF capacitor are connected in series. What is the equivalent capacitance of the combination?",
   "choices": [
    "3.0 μF",
    "8.0 μF",
    "16 μF",
    "48 μF"
   ],
   "correct": 0,
   "explanation": "For capacitors in series, 1/C_eq = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so C_eq = 3.0 μF. The sum, 16 μF, would apply to capacitors in parallel."
  },
  {
   "id": "p2e3-23",
   "unit": 10,
   "stem": "The electric force between two small charged spheres is 9.0 N when they are 0.10 m apart. What is the magnitude of the force when the spheres are 0.30 m apart? (The charges do not change.)",
   "choices": [
    "1.0 N",
    "0.33 N",
    "3.0 N",
    "27 N"
   ],
   "correct": 0,
   "explanation": "Coulomb's force varies as 1/r². Tripling the distance reduces the force by a factor of 9: 9.0/9 = 1.0 N. The value 3.0 N results from dividing by 3 rather than 9."
  },
  {
   "id": "p2e3-24",
   "unit": 13,
   "stem": "An object is 60 cm in front of a concave mirror that has a focal length of 20 cm. How far from the mirror is the image?",
   "choices": [
    "15 cm",
    "30 cm",
    "60 cm",
    "90 cm"
   ],
   "correct": 1,
   "explanation": "The mirror equation gives 1/d_i = 1/f − 1/d_o = 1/20 − 1/60 = 2/60, so d_i = 30 cm (in front of the mirror, a real image)."
  },
  {
   "id": "p2e3-25",
   "unit": 15,
   "stem": "The count rate from a radioactive sample falls from 800 counts per second to 100 counts per second in 15 days. What is the half-life of the sample?",
   "choices": [
    "15 days",
    "7.5 days",
    "5.0 days",
    "3.0 days"
   ],
   "correct": 2,
   "explanation": "The count rate falls by a factor of 8 = 2³, so three half-lives have passed in 15 days. The half-life is 15/3 = 5.0 days."
  },
  {
   "id": "p2e3-26",
   "unit": 13,
   "stem": "An object is placed in front of a convex (diverging) mirror. Which statement describes the image formed, regardless of the object's position?",
   "choices": [
    "The image is real, inverted, and smaller than the object.",
    "The image is virtual, upright, and larger than the object.",
    "The image is real, upright, and the same size as the object.",
    "The image is virtual, upright, and smaller than the object."
   ],
   "correct": 3,
   "explanation": "A convex mirror always forms a virtual image behind the mirror that is upright and reduced in size. This wide field of view is why convex mirrors are used on vehicles."
  },
  {
   "id": "p2e3-27",
   "unit": 12,
   "stem": "A strong bar magnet is dropped through a long vertical copper tube. Compared with a nonmagnetic object of the same mass, the magnet falls slowly. Which explanation is correct?",
   "choices": [
    "The changing magnetic flux induces currents in the tube, and by Lenz's law the magnetic force from those currents opposes the magnet's motion.",
    "The copper is attracted to the magnet, and this attractive force supports part of the magnet's weight.",
    "Copper is a ferromagnetic material, so the magnet is held back by magnetic friction.",
    "The magnet loses its magnetization as it falls, which reduces its mass."
   ],
   "correct": 0,
   "explanation": "As the magnet falls, the magnetic flux through each section of the tube changes. This induces circulating (eddy) currents in the copper, and by Lenz's law the magnetic field of these currents opposes the change, which exerts an upward force on the magnet. Copper is not ferromagnetic, so there is no attraction in the absence of motion."
  },
  {
   "id": "p2e3-28",
   "unit": 12,
   "stem": "A straight wire 0.25 m long carries a current of 8.0 A. The wire makes an angle of 30° with a uniform magnetic field of 0.40 T. What is the magnitude of the magnetic force on the wire?",
   "choices": [
    "0.80 N",
    "0.69 N",
    "0.40 N",
    "0.20 N"
   ],
   "correct": 2,
   "explanation": "F = BIL sin θ = (0.40)(8.0)(0.25)(sin 30°) = 0.40 N. The value 0.69 N results from using cosine instead of sine, and 0.80 N ignores the angle."
  },
  {
   "id": "p2e3-29",
   "unit": 11,
   "stem": "Two 10 Ω resistors are connected in parallel, and this combination is connected in series with a 5.0 Ω resistor. What is the equivalent resistance of the whole combination?",
   "choices": [
    "25 Ω",
    "15 Ω",
    "10 Ω",
    "5.0 Ω"
   ],
   "correct": 2,
   "explanation": "The two 10 Ω resistors in parallel are equivalent to 5.0 Ω (10/2). In series with the 5.0 Ω resistor, the total is 5.0 + 5.0 = 10 Ω."
  },
  {
   "id": "p2e3-30",
   "unit": 10,
   "setId": "p2e3-set4",
   "stem": "What is the magnitude of the electric field between the plates?",
   "choices": [
    "5.0 × 10³ V/m",
    "8.0 × 10³ V/m",
    "5.0 × 10⁴ V/m",
    "5.0 × 10⁶ V/m"
   ],
   "correct": 0,
   "explanation": "E = V/d = 200/(0.040) = 5.0 × 10³ V/m. The separation must be converted from centimeters to meters."
  },
  {
   "id": "p2e3-31",
   "unit": 10,
   "setId": "p2e3-set4",
   "stem": "What is the speed of the electron just before it reaches the positive plate?",
   "choices": [
    "8.4 × 10⁷ m/s",
    "8.4 × 10⁶ m/s",
    "8.4 × 10⁵ m/s",
    "8.4 × 10⁴ m/s"
   ],
   "correct": 1,
   "explanation": "The electron gains kinetic energy equal to the potential energy lost: eΔV = ½mv². Then v = √(2eΔV/m) = √(2(1.6 × 10⁻¹⁹)(200)/(9.1 × 10⁻³¹)) ≈ 8.4 × 10⁶ m/s."
  },
  {
   "id": "p2e3-32",
   "unit": 9,
   "stem": "How much thermal energy is needed to melt 0.50 kg of ice that is already at 0 °C? (The latent heat of fusion of water is 3.3 × 10⁵ J/kg.)",
   "choices": [
    "8.3 × 10⁴ J",
    "1.65 × 10⁵ J",
    "3.3 × 10⁵ J",
    "6.6 × 10⁵ J"
   ],
   "correct": 1,
   "explanation": "During melting at a constant temperature, Q = mL_f = (0.50)(3.3 × 10⁵) = 1.65 × 10⁵ J. No temperature change formula (mcΔT) applies while the ice is melting."
  },
  {
   "id": "p2e3-33",
   "unit": 14,
   "stem": "Two tuning forks with frequencies of 440 Hz and 444 Hz are sounded together. How many beats per second does a listener hear?",
   "choices": [
    "884",
    "442",
    "2",
    "4"
   ],
   "correct": 3,
   "explanation": "The beat frequency equals the difference between the two frequencies: |444 − 440| = 4 beats per second."
  },
  {
   "id": "p2e3-34",
   "unit": 15,
   "stem": "Which of the following phenomena provides direct evidence for the particle nature of light?",
   "choices": [
    "Single-slit diffraction, in which light spreads out after passing through a narrow opening",
    "Double-slit interference, in which light produces alternating bright and dark fringes",
    "Refraction, in which light bends as it passes from air into glass",
    "The photoelectric effect, in which electrons are ejected only if the light's frequency exceeds a threshold"
   ],
   "correct": 3,
   "explanation": "In the photoelectric effect, the ejection of electrons depends on the frequency, not the intensity, of the light, which classical wave theory cannot explain. It shows that light energy comes in packets (photons) with E = hf. Diffraction, interference and refraction are all explained by the wave model."
  },
  {
   "id": "p2e3-35",
   "unit": 10,
   "stem": "A metal sphere has a charge of +6.0 μC. It is touched to an identical, neutral metal sphere, and the spheres are then separated. What is the charge on each sphere after they are separated?",
   "choices": [
    "0",
    "+1.5 μC",
    "+3.0 μC",
    "+6.0 μC"
   ],
   "correct": 2,
   "explanation": "When identical conductors touch, the total charge is shared equally, so each sphere ends up with half of +6.0 μC, which is +3.0 μC. Total charge is conserved."
  },
  {
   "id": "p2e3-36",
   "unit": 10,
   "stem": "What is the electric potential at a point 0.30 m from an isolated point charge of −4.0 nC? (Take V = 0 infinitely far from the charge.)",
   "choices": [
    "+120 V",
    "+36 V",
    "−36 V",
    "−120 V"
   ],
   "correct": 3,
   "explanation": "V = kq/r = (9.0 × 10⁹)(−4.0 × 10⁻⁹)/(0.30) = −120 V. The potential near a negative charge is negative."
  },
  {
   "id": "p2e3-37",
   "unit": 13,
   "setId": "p2e3-set5",
   "stem": "At what distance from the lens does the bulb's image form?",
   "choices": [
    "6.0 cm",
    "15 cm",
    "30 cm",
    "45 cm"
   ],
   "correct": 2,
   "explanation": "From 1/f = 1/d_o + 1/d_i: 1/d_i = 1/10 − 1/15 = 1/30, so d_i = 30 cm."
  },
  {
   "id": "p2e3-38",
   "unit": 13,
   "setId": "p2e3-set5",
   "stem": "The object is moved to a point 5 cm from the lens. Which statement describes the image that is now formed?",
   "choices": [
    "It is real, inverted, and larger than the object.",
    "It is virtual, inverted, and smaller than the object.",
    "No image is formed, because the object is inside the focal length.",
    "It is virtual, upright, and larger than the object."
   ],
   "correct": 3,
   "explanation": "With the object inside the focal length, 1/d_i = 1/10 − 1/5 = −1/10, so d_i = −10 cm. The negative sign means the image is virtual (on the same side as the object), and m = −d_i/d_o = +2 means upright and twice as large — a magnifying glass. An image is formed, but it can be seen only by looking through the lens."
  },
  {
   "id": "p2e3-39",
   "unit": 15,
   "stem": "A photon has an energy of 3.0 eV. What is its frequency? (h = 6.63 × 10⁻³⁴ J·s and 1 eV = 1.6 × 10⁻¹⁹ J)",
   "choices": [
    "4.5 × 10¹⁵ Hz",
    "7.2 × 10¹⁴ Hz",
    "7.2 × 10¹³ Hz",
    "1.4 × 10⁻¹⁵ Hz"
   ],
   "correct": 1,
   "explanation": "Convert the energy to joules: 3.0 eV = 4.8 × 10⁻¹⁹ J. Then f = E/h = (4.8 × 10⁻¹⁹)/(6.63 × 10⁻³⁴) ≈ 7.2 × 10¹⁴ Hz."
  },
  {
   "id": "p2e3-40",
   "unit": 14,
   "stem": "In a single-slit diffraction experiment using monochromatic light, the width of the slit is decreased while the wavelength and the distance to the screen stay the same. What happens to the width of the central bright maximum on the screen?",
   "choices": [
    "It increases.",
    "It decreases.",
    "It stays the same.",
    "It disappears."
   ],
   "correct": 0,
   "explanation": "The angular position of the first minimum satisfies a sin θ = λ. A narrower slit (smaller a) gives a larger angle θ, so the central maximum spreads out and becomes wider."
  },
  {
   "id": "p2e3-41",
   "unit": 15,
   "setId": "p2e3-set6",
   "stem": "Which wavelength of light does the atom emit in the n = 3 to n = 2 transition?",
   "choices": [
    "1280 nm",
    "656 nm",
    "365 nm",
    "122 nm"
   ],
   "correct": 1,
   "explanation": "The photon energy is ΔE = −1.51 − (−3.4) = 1.89 eV. Then λ = hc/ΔE = 1240/1.89 ≈ 656 nm, a red photon in the visible range."
  },
  {
   "id": "p2e3-42",
   "unit": 15,
   "setId": "p2e3-set6",
   "stem": "What is the minimum energy needed to ionize a hydrogen atom that is in its ground state?",
   "choices": [
    "27.2 eV",
    "13.6 eV",
    "10.2 eV",
    "3.4 eV"
   ],
   "correct": 1,
   "explanation": "Ionization means moving the electron from n = 1 (−13.6 eV) to 0 eV, which requires 13.6 eV. The value 10.2 eV is the energy needed to excite the electron from n = 1 to n = 2."
  }
 ],
 "sets": {
  "p2e3-set1": {
   "text": "Three resistors are connected in series with a 12 V battery that has negligible internal resistance, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 200\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50 45L90 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 45L110.83 45L116.25 37L127.08 53L137.92 37L148.75 53L159.58 37L170.42 53L175.83 45L186.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"143.33\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">2 Ω</text><path d=\"M90 45L100 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M186.67 45L196.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M206.67 45L217.5 45L222.92 37L233.75 53L244.58 37L255.42 53L266.25 37L277.08 53L282.5 45L293.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"250\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">3 Ω</text><path d=\"M196.67 45L206.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M293.33 45L303.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M313.33 45L324.17 45L329.58 37L340.42 53L351.25 37L362.08 53L372.92 37L383.75 53L389.17 45L400 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"356.67\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">7 Ω</text><path d=\"M303.33 45L313.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M400 45L410 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M410 45L410 150L50 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M50 45L50 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"88\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"88\" x2=\"64\" y2=\"88\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"96\" x2=\"58\" y2=\"96\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"96\" x2=\"50\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M50 114L50 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"96\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 V</text></svg>",
     "alt": "A series circuit with a 12 volt battery and three resistors of 2 ohms, 3 ohms, and 7 ohms in a single loop."
    }
   ]
  },
  "p2e3-set2": {
   "text": "The graph shows a snapshot of a transverse wave traveling along a rope. The wave moves with a speed of 16 cm/s.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"20\" x2=\"56\" y2=\"200\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"106\" x2=\"56\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"167\" y1=\"106\" x2=\"167\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"167\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"278\" y1=\"106\" x2=\"278\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"278\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"389\" y1=\"106\" x2=\"389\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"389\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"500\" y1=\"106\" x2=\"500\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"500\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">16</text><line x1=\"52\" y1=\"170\" x2=\"56\" y2=\"170\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"174\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-3</text><line x1=\"52\" y1=\"110\" x2=\"56\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"52\" y1=\"50\" x2=\"56\" y2=\"50\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"54\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><path d=\"M56.0 110.0L59.7 103.7L63.4 97.5L67.1 91.5L70.8 85.6L74.5 80.0L78.2 74.7L81.9 69.9L85.6 65.4L89.3 61.5L93.0 58.0L96.7 55.2L100.4 52.9L104.1 51.3L107.8 50.3L111.5 50.0L115.2 50.3L118.9 51.3L122.6 52.9L126.3 55.2L130.0 58.0L133.7 61.5L137.4 65.4L141.1 69.9L144.8 74.7L148.5 80.0L152.2 85.6L155.9 91.5L159.6 97.5L163.3 103.7L167.0 110.0L170.7 116.3L174.4 122.5L178.1 128.5L181.8 134.4L185.5 140.0L189.2 145.3L192.9 150.1L196.6 154.6L200.3 158.5L204.0 162.0L207.7 164.8L211.4 167.1L215.1 168.7L218.8 169.7L222.5 170.0L226.2 169.7L229.9 168.7L233.6 167.1L237.3 164.8L241.0 162.0L244.7 158.5L248.4 154.6L252.1 150.1L255.8 145.3L259.5 140.0L263.2 134.4L266.9 128.5L270.6 122.5L274.3 116.3L278.0 110.0L281.7 103.7L285.4 97.5L289.1 91.5L292.8 85.6L296.5 80.0L300.2 74.7L303.9 69.9L307.6 65.4L311.3 61.5L315.0 58.0L318.7 55.2L322.4 52.9L326.1 51.3L329.8 50.3L333.5 50.0L337.2 50.3L340.9 51.3L344.6 52.9L348.3 55.2L352.0 58.0L355.7 61.5L359.4 65.4L363.1 69.9L366.8 74.7L370.5 80.0L374.2 85.6L377.9 91.5L381.6 97.5L385.3 103.7L389.0 110.0L392.7 116.3L396.4 122.5L400.1 128.5L403.8 134.4L407.5 140.0L411.2 145.3L414.9 150.1L418.6 154.6L422.3 158.5L426.0 162.0L429.7 164.8L433.4 167.1L437.1 168.7L440.8 169.7L444.5 170.0L448.2 169.7L451.9 168.7L455.6 167.1L459.3 164.8L463.0 162.0L466.7 158.5L470.4 154.6L474.1 150.1L477.8 145.3L481.5 140.0L485.2 134.4L488.9 128.5L492.6 122.5L496.3 116.3L500.0 110.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"278\" y=\"242\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Position x (cm)</text><text x=\"16\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 110)\">Displacement y (cm)</text></svg>",
     "alt": "A sinusoidal wave plotted as displacement in centimeters against position in centimeters. The wave has amplitude 3 centimeters and completes two full cycles between 0 and 16 centimeters."
    }
   ]
  },
  "p2e3-set3": {
   "text": "A fixed amount of an ideal gas is taken through the cycle A → B → C → A shown in the PV diagram. Process A → B occurs at constant volume, process B → C is a straight line, and process C → A occurs at constant pressure.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"278\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"232\" x2=\"456\" y2=\"232\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"236\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"190\" x2=\"456\" y2=\"190\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"194\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"148\" x2=\"456\" y2=\"148\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"152\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"106\" x2=\"456\" y2=\"106\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"110\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">160</text><line x1=\"64\" y1=\"64\" x2=\"456\" y2=\"64\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"68\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">200</text><line x1=\"64\" y1=\"22\" x2=\"456\" y2=\"22\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">240</text><line x1=\"64\" y1=\"274\" x2=\"64\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"64\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"142.4\" y1=\"274\" x2=\"142.4\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"142.4\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"220.8\" y1=\"274\" x2=\"220.8\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"220.8\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"299.2\" y1=\"274\" x2=\"299.2\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"299.2\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"377.6\" y1=\"274\" x2=\"377.6\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"377.6\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"456\" y1=\"274\" x2=\"456\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"456\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"22\" x2=\"64\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"318\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume (L)</text><text x=\"18\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 18 148)\">Pressure (kPa)</text><line x1=\"220.8\" y1=\"169\" x2=\"220.8\" y2=\"64\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"220.8,109.5 215.8,123.5 225.8,123.5\" fill=\"#3F7A94\"/><line x1=\"220.8\" y1=\"64\" x2=\"377.6\" y2=\"169\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"305,120.4 296.2,108.5 290.6,116.8\" fill=\"#3F7A94\"/><line x1=\"377.6\" y1=\"169\" x2=\"220.8\" y2=\"169\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"292.2,169 306.2,174 306.2,164\" fill=\"#3F7A94\"/><circle cx=\"220.8\" cy=\"169\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"204.8\" y=\"187\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">A</text><circle cx=\"220.8\" cy=\"64\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"204.8\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">B</text><circle cx=\"377.6\" cy=\"169\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"389.6\" y=\"161\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">C</text></svg>",
     "alt": "A PV diagram of a triangular cycle. State A is at 2 liters and 100 kilopascals, B at 2 liters and 200 kilopascals, and C at 4 liters and 100 kilopascals. The cycle runs A to B to C and back to A, clockwise."
    }
   ]
  },
  "p2e3-set4": {
   "text": "An electron is released from rest at the negative plate of a parallel-plate capacitor. The plates are 4.0 cm apart, and a potential difference of 200 V is maintained between them, as shown. Ignore gravity. (m_e = 9.1 × 10⁻³¹ kg and e = 1.6 × 10⁻¹⁹ C)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 390 220\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"60\" y1=\"60\" x2=\"280\" y2=\"60\" stroke=\"#D2705A\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"40\" y=\"66\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"800\" fill=\"#D2705A\">+</text><text x=\"40\" y=\"168\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"800\" fill=\"#3F7A94\">−</text><line x1=\"100\" y1=\"72\" x2=\"100\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"100,148 96.35,139.82 103.65,139.82\" fill=\"#767F73\"/><line x1=\"170\" y1=\"72\" x2=\"170\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"170,148 166.35,139.82 173.65,139.82\" fill=\"#767F73\"/><line x1=\"240\" y1=\"72\" x2=\"240\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"240,148 236.35,139.82 243.65,139.82\" fill=\"#767F73\"/><line x1=\"300\" y1=\"60\" x2=\"300\" y2=\"160\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"300,160 296.71,152.62 303.29,152.62\" fill=\"#2E332E\"/><polygon points=\"300,60 303.29,67.38 296.71,67.38\" fill=\"#2E332E\"/><text x=\"312\" y=\"114\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">4.0 cm</text><text x=\"170\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">200 V</text></svg>",
     "alt": "Two horizontal parallel plates, the upper one positive and the lower one negative, separated by 4.0 centimeters, with an electric field pointing from the upper plate to the lower plate. A 200 volt potential difference is applied.",
     "maxWidth": 360
    }
   ]
  },
  "p2e3-set5": {
   "text": "A small bulb is placed 15 cm from a thin converging lens whose focal length is 10 cm, as shown. (The vertical scale of the diagram is exaggerated.)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"140\" x2=\"540\" y2=\"140\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"62\" x2=\"280\" y2=\"218\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M272 70L280 62L288 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M272 210L280 218L288 210\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"230\" y1=\"135\" x2=\"230\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"230\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"330\" y1=\"135\" x2=\"330\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"330\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"180\" y1=\"135\" x2=\"180\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"180\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"380\" y1=\"135\" x2=\"380\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"380\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"205\" y1=\"140\" x2=\"205\" y2=\"110\" stroke=\"#3F7A94\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"205,110 209.73,120.59 200.27,120.59\" fill=\"#3F7A94\"/><line x1=\"205\" y1=\"110\" x2=\"280\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"110\" x2=\"536\" y2=\"263.6\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"205\" y1=\"110\" x2=\"536\" y2=\"242.4\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"140\" x2=\"430\" y2=\"200\" stroke=\"#6E9A5E\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"430,200 425.27,189.41 434.73,189.41\" fill=\"#6E9A5E\"/></svg>",
     "alt": "A ray diagram for a converging lens with the object between one and two focal lengths from the lens. Two rays from the arrow tip, one parallel to the axis and one through the lens center, meet to the right of the lens beyond twice the focal length, forming a large inverted image."
    }
   ]
  },
  "p2e3-set6": {
   "text": "The figure shows the lowest four energy levels of a hydrogen atom. Use hc = 1240 eV·nm.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"70\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Energy (eV)</text><line x1=\"110\" y1=\"266.53\" x2=\"230\" y2=\"266.53\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"270.53\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 1</text><text x=\"240\" y=\"270.53\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-13.6 eV</text><line x1=\"110\" y1=\"94.74\" x2=\"230\" y2=\"94.74\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"98.74\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 2</text><text x=\"240\" y=\"98.74\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-3.4 eV</text><line x1=\"110\" y1=\"62.91\" x2=\"230\" y2=\"62.91\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"66.91\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 3</text><text x=\"240\" y=\"66.91\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-1.51 eV</text><line x1=\"110\" y1=\"51.79\" x2=\"230\" y2=\"51.79\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"55.79\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 4</text><text x=\"240\" y=\"55.79\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-0.85 eV</text><line x1=\"110\" y1=\"37.47\" x2=\"230\" y2=\"37.47\" stroke=\"#9AA096\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"240\" y=\"41.47\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">0 eV (ionized)</text></svg>",
     "alt": "An energy level diagram for hydrogen with levels n equals 1 at minus 13.6 electron volts, n equals 2 at minus 3.4, n equals 3 at minus 1.51, and n equals 4 at minus 0.85, with a dashed line at 0 electron volts for ionization.",
     "maxWidth": 420
    }
   ]
  }
 }
};

export default EXAM;
