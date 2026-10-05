// AP Physics 2 — Exam 2 — 42 questions. Uses g = 10 m/s².
const EXAM = {
 "questions": [
  {
   "id": "p2e2-1",
   "unit": 15,
   "stem": "An electron has a momentum of 2.0 × 10⁻²⁴ kg·m/s. What is its de Broglie wavelength? (h = 6.63 × 10⁻³⁴ J·s)",
   "choices": [
    "3.3 × 10⁻¹¹ m",
    "3.3 × 10⁻¹⁰ m",
    "3.3 × 10⁻⁹ m",
    "1.3 × 10⁻⁵⁸ m"
   ],
   "correct": 1,
   "explanation": "The de Broglie wavelength is λ = h/p = (6.63 × 10⁻³⁴)/(2.0 × 10⁻²⁴) = 3.3 × 10⁻¹⁰ m. The value 1.3 × 10⁻⁵⁸ m results from multiplying h by p instead of dividing."
  },
  {
   "id": "p2e2-2",
   "unit": 12,
   "stem": "A proton moves in a circular path of radius r in a uniform magnetic field. If the proton's speed is doubled while the field stays the same, what is the new radius of its path?",
   "choices": [
    "r/2",
    "r",
    "2r",
    "4r"
   ],
   "correct": 2,
   "explanation": "From mv²/r = qvB, the radius is r = mv/(qB), which is directly proportional to the speed. Doubling the speed doubles the radius, to 2r."
  },
  {
   "id": "p2e2-3",
   "unit": 11,
   "setId": "p2e2-set1",
   "stem": "What is the total current supplied by the battery?",
   "choices": [
    "11 A",
    "6.0 A",
    "3.0 A",
    "2.0 A"
   ],
   "correct": 1,
   "explanation": "Each resistor has the full 12 V across it, so the currents are 12/6 = 2.0 A, 12/12 = 1.0 A, and 12/4 = 3.0 A. The battery supplies their sum: 6.0 A."
  },
  {
   "id": "p2e2-4",
   "unit": 11,
   "setId": "p2e2-set1",
   "stem": "Which resistor dissipates the greatest power?",
   "choices": [
    "The 4 Ω resistor, because it carries the greatest current at the same voltage.",
    "The 12 Ω resistor, because it has the largest resistance.",
    "The 6 Ω resistor, because it is the first one connected to the battery.",
    "All three dissipate the same power, because they have the same voltage across them."
   ],
   "correct": 0,
   "explanation": "For resistors in parallel the voltage is the same, so P = V²/R is largest for the smallest resistance. The 4 Ω resistor dissipates 144/4 = 36 W, compared with 24 W for the 6 Ω resistor and 12 W for the 12 Ω resistor. Equal voltage does not mean equal power; the current differs."
  },
  {
   "id": "p2e2-5",
   "unit": 11,
   "setId": "p2e2-set1",
   "stem": "What is the equivalent resistance of the three resistors?",
   "choices": [
    "22 Ω",
    "6.0 Ω",
    "4.0 Ω",
    "2.0 Ω"
   ],
   "correct": 3,
   "explanation": "For parallel resistors, 1/R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3)/12 = 6/12 = 1/2, so R_eq = 2.0 Ω. (This agrees with R = V/I = 12/6.0.) The value 22 Ω is the sum, which applies to resistors in series."
  },
  {
   "id": "p2e2-6",
   "unit": 12,
   "stem": "Two long, straight, parallel wires carry currents in the same direction. Which of the following describes the force the wires exert on each other?",
   "choices": [
    "The wires repel each other.",
    "The wires exert no force on each other, because they are neutral.",
    "Each wire is pushed perpendicular to the plane containing both wires.",
    "The wires attract each other."
   ],
   "correct": 3,
   "explanation": "Each wire creates a magnetic field at the location of the other. Using the right-hand rules, the force on each wire points toward the other when the currents are parallel, so the wires attract. They repel when the currents are in opposite directions."
  },
  {
   "id": "p2e2-7",
   "unit": 9,
   "stem": "What is the maximum possible efficiency of a heat engine that operates between a hot reservoir at 900 K and a cold reservoir at 300 K?",
   "choices": [
    "33%",
    "50%",
    "60%",
    "67%"
   ],
   "correct": 3,
   "explanation": "The Carnot efficiency is the upper limit for any engine operating between two temperatures: e = 1 − T_C/T_H = 1 − 300/900 = 0.67, or 67%. 33% is the ratio T_C/T_H, which is the fraction of the heat that must be exhausted."
  },
  {
   "id": "p2e2-8",
   "unit": 15,
   "stem": "In a nuclear reaction, the total mass of the products is 0.030 u less than the total mass of the reactants. How much energy is released in the reaction? (1 u = 931.5 MeV/c²)",
   "choices": [
    "0.28 MeV",
    "2.8 MeV",
    "28 MeV",
    "280 MeV"
   ],
   "correct": 2,
   "explanation": "The energy released is E = Δmc² = (0.030 u)(931.5 MeV/u) = 27.9 MeV ≈ 28 MeV."
  },
  {
   "id": "p2e2-9",
   "unit": 12,
   "stem": "Electrons traveling at 3.0 × 10⁶ m/s enter a region where a uniform magnetic field of 1.0 × 10⁻⁴ T is directed at a right angle to their velocity. Each electron follows a circular arc. What is the radius of the arc? (m_e = 9.1 × 10⁻³¹ kg and e = 1.6 × 10⁻¹⁹ C)",
   "choices": [
    "17 m",
    "1.7 m",
    "0.17 m",
    "0.017 m"
   ],
   "correct": 2,
   "explanation": "The magnetic force provides the centripetal force: evB = mv²/r, so r = mv/(eB) = (9.1 × 10⁻³¹)(3.0 × 10⁶)/((1.6 × 10⁻¹⁹)(1.0 × 10⁻⁴)) ≈ 0.17 m."
  },
  {
   "id": "p2e2-10",
   "unit": 14,
   "stem": "A sound source moves toward a stationary observer. Compared with the frequency emitted by the source, how does the frequency detected by the observer differ?",
   "choices": [
    "The detected frequency is lower, because the source's motion reduces the wave speed.",
    "The detected frequency is the same, because the speed of sound does not depend on the source's motion.",
    "The detected frequency is higher, because the speed of the sound waves increases.",
    "The detected frequency is higher, because the wavelength between the source and the observer is shortened."
   ],
   "correct": 3,
   "explanation": "The speed of sound in air depends only on the medium, not on the motion of the source. As the source moves toward the observer, it follows the waves it emits, so successive crests are closer together (a shorter wavelength). With the same wave speed, a shorter wavelength means a higher detected frequency — the Doppler effect."
  },
  {
   "id": "p2e2-11",
   "unit": 13,
   "stem": "Light travels inside a piece of glass with an index of refraction of 1.6 toward a boundary with air. What is the critical angle for total internal reflection at the glass–air boundary?",
   "choices": [
    "19°",
    "30°",
    "39°",
    "51°"
   ],
   "correct": 2,
   "explanation": "The critical angle satisfies n_glass sin θ_c = n_air sin 90°, so sin θ_c = 1/1.6 = 0.625 and θ_c ≈ 39°. The value 51° is the complement (90° − 39°)."
  },
  {
   "id": "p2e2-12",
   "unit": 10,
   "stem": "A parallel-plate capacitor has plates of area 0.020 m² separated by 1.0 mm, with vacuum between them. What is its capacitance? (ε₀ = 8.85 × 10⁻¹² C²/(N·m²))",
   "choices": [
    "1.8 × 10⁻¹² F",
    "1.8 × 10⁻¹¹ F",
    "1.8 × 10⁻¹⁰ F",
    "1.8 × 10⁻⁹ F"
   ],
   "correct": 2,
   "explanation": "C = ε₀A/d = (8.85 × 10⁻¹²)(0.020)/(1.0 × 10⁻³) = 1.77 × 10⁻¹⁰ F. The separation must be in meters (1.0 mm = 1.0 × 10⁻³ m)."
  },
  {
   "id": "p2e2-13",
   "unit": 12,
   "stem": "A rectangular conducting loop moves at constant velocity while remaining entirely inside a region of uniform magnetic field, with the plane of the loop perpendicular to the field. What is the induced emf in the loop?",
   "choices": [
    "Zero, because the magnetic flux through the loop is not changing.",
    "Nonzero, because the loop is moving through a magnetic field.",
    "Nonzero, because the field exerts a force on each side of the loop.",
    "Zero, because the loop has no resistance."
   ],
   "correct": 0,
   "explanation": "An emf is induced only when the magnetic flux through the loop changes. Here the field is uniform and the loop's area and orientation do not change, so the flux is constant and there is no induced emf. (Forces on the charges in opposite sides of the loop do act, but they cancel around the loop.)"
  },
  {
   "id": "p2e2-14",
   "unit": 10,
   "stem": "Two point charges, +3.0 μC and −6.0 μC, are 0.30 m apart. What is the magnitude of the electric force between them?",
   "choices": [
    "0.90 N",
    "1.8 N",
    "5.4 N",
    "18 N"
   ],
   "correct": 1,
   "explanation": "F = k|q₁q₂|/r² = (9.0 × 10⁹)(3.0 × 10⁻⁶)(6.0 × 10⁻⁶)/(0.30)² = 1.8 N. The force is attractive because the charges have opposite signs."
  },
  {
   "id": "p2e2-15",
   "unit": 11,
   "stem": "A 100 W lightbulb operates for 5.0 hours. How much electrical energy does the bulb use?",
   "choices": [
    "500 kWh",
    "5.0 kWh",
    "0.50 kWh",
    "0.020 kWh"
   ],
   "correct": 2,
   "explanation": "Energy equals power times time: (0.100 kW)(5.0 h) = 0.50 kWh."
  },
  {
   "id": "p2e2-16",
   "unit": 14,
   "setId": "p2e2-set2",
   "stem": "What is the wavelength of the standing wave?",
   "choices": [
    "2.4 m",
    "1.2 m",
    "0.60 m",
    "0.30 m"
   ],
   "correct": 2,
   "explanation": "Two loops means two half-wavelengths fit on the string: 2(λ/2) = L, so λ = L = 0.60 m."
  },
  {
   "id": "p2e2-17",
   "unit": 14,
   "setId": "p2e2-set2",
   "stem": "At what frequency does the string vibrate in this pattern?",
   "choices": [
    "200 Hz",
    "100 Hz",
    "50 Hz",
    "25 Hz"
   ],
   "correct": 1,
   "explanation": "f = v/λ = 60/0.60 = 100 Hz."
  },
  {
   "id": "p2e2-18",
   "unit": 9,
   "stem": "A 0.20 kg piece of metal at 100 °C is placed in 0.50 kg of water at 20 °C in an insulated container. The final equilibrium temperature is 24 °C. What is the specific heat capacity of the metal? (The specific heat of water is 4200 J/(kg·°C).)",
   "choices": [
    "280 J/(kg·°C)",
    "550 J/(kg·°C)",
    "1100 J/(kg·°C)",
    "4200 J/(kg·°C)"
   ],
   "correct": 1,
   "explanation": "Energy lost by the metal equals the energy gained by the water: m_m c_m (100 − 24) = m_w c_w (24 − 20). Then c_m = (0.50)(4200)(4)/((0.20)(76)) = 8400/15.2 ≈ 550 J/(kg·°C)."
  },
  {
   "id": "p2e2-19",
   "unit": 9,
   "stem": "The absolute temperature of a fixed amount of an ideal gas in a rigid container is doubled. What happens to the average translational kinetic energy of the gas molecules?",
   "choices": [
    "It doubles, because it is proportional to the absolute temperature.",
    "It quadruples, because the kinetic energy depends on the square of the speed.",
    "It stays the same, because the volume of the container does not change.",
    "It increases by a factor of √2, because the speed increases by that factor."
   ],
   "correct": 0,
   "explanation": "The average translational kinetic energy of an ideal gas molecule is (3/2)k_BT, which is directly proportional to the absolute temperature. Doubling T doubles the average kinetic energy. The rms speed increases by √2, but the energy depends on the speed squared, so the energy doubles."
  },
  {
   "id": "p2e2-20",
   "unit": 15,
   "stem": "A nucleus of uranium-238 (atomic number 92, mass number 238) undergoes alpha decay. What are the atomic number and mass number of the daughter nucleus?",
   "choices": [
    "Atomic number 91, mass number 238",
    "Atomic number 90, mass number 236",
    "Atomic number 93, mass number 238",
    "Atomic number 90, mass number 234"
   ],
   "correct": 3,
   "explanation": "An alpha particle is a helium nucleus with two protons and two neutrons (Z = 2, A = 4). The daughter nucleus has Z = 92 − 2 = 90 and A = 238 − 4 = 234 (thorium-234). A change of Z by +1 with the same A would be beta-minus decay."
  },
  {
   "id": "p2e2-21",
   "unit": 9,
   "setId": "p2e2-set3",
   "stem": "What is the net work done by the gas during one complete cycle?",
   "choices": [
    "100 J",
    "200 J",
    "300 J",
    "400 J"
   ],
   "correct": 1,
   "explanation": "The net work equals the area enclosed by the cycle: ΔV × ΔP = (3 − 1)(10⁻³ m³) × (150 − 50)(10³ Pa) = 200 J. The cycle runs clockwise, so the net work done by the gas is positive."
  },
  {
   "id": "p2e2-22",
   "unit": 9,
   "setId": "p2e2-set3",
   "stem": "At which state is the temperature of the gas the highest?",
   "choices": [
    "State A",
    "State C",
    "State D",
    "State B"
   ],
   "correct": 3,
   "explanation": "For a fixed amount of an ideal gas, PV = nRT, so the temperature is proportional to the product PV. The products are: A: 150, B: 450, C: 150, and D: 50 (in kPa·L). State B has the largest product, so it has the highest temperature."
  },
  {
   "id": "p2e2-23",
   "unit": 10,
   "stem": "An electron is accelerated from rest through a potential difference of 200 V. What kinetic energy does the electron gain?",
   "choices": [
    "1.6 × 10⁻¹⁹ J",
    "1.6 × 10⁻¹⁷ J",
    "3.2 × 10⁻¹⁷ J",
    "3.2 × 10⁻¹⁵ J"
   ],
   "correct": 2,
   "explanation": "The kinetic energy gained equals the decrease in electric potential energy: ΔK = qΔV = (1.6 × 10⁻¹⁹ C)(200 V) = 3.2 × 10⁻¹⁷ J (200 eV). 1.6 × 10⁻¹⁷ J would result from using a potential difference of 100 V."
  },
  {
   "id": "p2e2-24",
   "unit": 12,
   "stem": "A negatively charged particle moves toward the top of the page in a uniform magnetic field directed out of the page, as shown. What is the direction of the magnetic force on the particle at the instant shown?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 268\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"220\" fill=\"none\" stroke=\"#E6E4DC\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"200\" cy=\"130\" r=\"13\" fill=\"#CFE0EA\" stroke=\"#3F7A94\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">−</text><line x1=\"200\" y1=\"117\" x2=\"200\" y2=\"58\" stroke=\"#2E332E\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"200,58 204.37,67.79 195.63,67.79\" fill=\"#2E332E\"/><text x=\"200\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\" font-style=\"italic\">v</text><text x=\"200\" y=\"256\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">• = magnetic field directed out of the page</text></svg>",
     "alt": "A grid of dots showing a magnetic field directed out of the page. A negative charge in the middle moves toward the top of the page with a velocity arrow pointing up.",
     "maxWidth": 420
    }
   ],
   "choices": [
    "Toward the left side of the page",
    "Toward the right side of the page",
    "Toward the top of the page",
    "Into the page"
   ],
   "correct": 0,
   "explanation": "Using F = qv × B: for a positive charge moving up in a field out of the page, v × B points to the right. Because the particle is negatively charged, the force is reversed and points to the left. The force is perpendicular to both the velocity and the field."
  },
  {
   "id": "p2e2-25",
   "unit": 15,
   "setId": "p2e2-set4",
   "stem": "What is the work function of the metal? (h = 4.14 × 10⁻¹⁵ eV·s)",
   "choices": [
    "4.1 eV",
    "3.4 eV",
    "2.1 eV",
    "1.0 eV"
   ],
   "correct": 2,
   "explanation": "At the threshold frequency the photon energy equals the work function: φ = hf₀ = (4.14 × 10⁻¹⁵ eV·s)(5.0 × 10¹⁴ Hz) = 2.07 eV ≈ 2.1 eV."
  },
  {
   "id": "p2e2-26",
   "unit": 15,
   "setId": "p2e2-set4",
   "stem": "The intensity of the incident light is doubled while its frequency stays above f₀. What happens to the maximum kinetic energy of the ejected electrons and to the number of electrons ejected per second?",
   "choices": [
    "The maximum kinetic energy is unchanged, and the number of electrons per second increases.",
    "The maximum kinetic energy doubles, and the number of electrons per second is unchanged.",
    "The maximum kinetic energy doubles, and the number of electrons per second doubles.",
    "The maximum kinetic energy is unchanged, and the number of electrons per second is unchanged."
   ],
   "correct": 0,
   "explanation": "The maximum kinetic energy is K_max = hf − φ, which depends on the frequency and not on the intensity. Doubling the intensity doubles the number of photons arriving per second, so more electrons are ejected each second, each with the same maximum kinetic energy."
  },
  {
   "id": "p2e2-27",
   "unit": 14,
   "stem": "In a double-slit interference experiment, the distance between the two slits is decreased while the wavelength of the light and the distance to the screen stay the same. What happens to the spacing between adjacent bright fringes on the screen?",
   "choices": [
    "It decreases.",
    "It stays the same.",
    "It becomes zero.",
    "It increases."
   ],
   "correct": 3,
   "explanation": "The fringe spacing is Δy = λL/d, which is inversely proportional to the slit separation d. Decreasing d therefore increases the spacing between the bright fringes."
  },
  {
   "id": "p2e2-28",
   "unit": 10,
   "stem": "Which of the following statements about electric field lines is correct?",
   "choices": [
    "Field lines are closer together in regions where the electric field is stronger.",
    "Field lines can cross each other at points where two fields are equal.",
    "Field lines start on negative charges and end on positive charges.",
    "A charged particle released from rest always moves along a field line's curved path."
   ],
   "correct": 0,
   "explanation": "The density of field lines represents the field's strength: closer lines mean a stronger field. Field lines never cross, because the field has one direction at each point. They begin on positive charges and end on negative charges. A charge released from rest begins moving along the field line direction, but it does not necessarily follow a curved line afterward because of its inertia."
  },
  {
   "id": "p2e2-29",
   "unit": 13,
   "stem": "A person stands 0.80 m in front of a plane mirror. What is the distance between the person and the person's image?",
   "choices": [
    "3.2 m",
    "1.6 m",
    "0.80 m",
    "0.40 m"
   ],
   "correct": 1,
   "explanation": "A plane mirror forms a virtual image as far behind the mirror as the object is in front of it: 0.80 m. The distance from the person to the image is 0.80 + 0.80 = 1.6 m."
  },
  {
   "id": "p2e2-30",
   "unit": 9,
   "stem": "How many moles of an ideal gas are in a 5.0 L container at a pressure of 4.0 × 10⁵ Pa and a temperature of 300 K? (R = 8.31 J/(mol·K))",
   "choices": [
    "0.80 mol",
    "0.60 mol",
    "0.40 mol",
    "0.20 mol"
   ],
   "correct": 0,
   "explanation": "Convert the volume to cubic meters: 5.0 L = 5.0 × 10⁻³ m³. Then n = PV/(RT) = (4.0 × 10⁵)(5.0 × 10⁻³)/((8.31)(300)) = 2000/2493 ≈ 0.80 mol. Using 2.0 × 10⁵ Pa would give 0.40 mol."
  },
  {
   "id": "p2e2-31",
   "unit": 11,
   "stem": "At a junction in a circuit, currents of 3.0 A and 2.0 A flow into the junction, and currents of I and 1.0 A flow out of it. What is the value of I?",
   "choices": [
    "6.0 A",
    "5.0 A",
    "4.0 A",
    "1.0 A"
   ],
   "correct": 2,
   "explanation": "Kirchhoff's junction rule says the total current entering equals the total current leaving: 3.0 + 2.0 = I + 1.0, so I = 4.0 A."
  },
  {
   "id": "p2e2-32",
   "unit": 14,
   "stem": "A pipe that is open at one end and closed at the other has a length of 0.50 m. If the speed of sound is 340 m/s, what is the frequency of the fundamental standing wave in the pipe?",
   "choices": [
    "85 Hz",
    "170 Hz",
    "340 Hz",
    "680 Hz"
   ],
   "correct": 1,
   "explanation": "For a pipe closed at one end, the fundamental has a node at the closed end and an antinode at the open end: L = λ/4, so λ = 4L = 2.0 m. Then f = v/λ = 340/2.0 = 170 Hz. A pipe open at both ends of the same length would have a fundamental of 340 Hz."
  },
  {
   "id": "p2e2-33",
   "unit": 12,
   "stem": "A conducting rod 0.40 m long moves at 3.0 m/s through a uniform 0.50 T magnetic field. The rod, its velocity, and the field are mutually perpendicular. What is the magnitude of the emf induced between the ends of the rod?",
   "choices": [
    "6.0 V",
    "1.2 V",
    "0.60 V",
    "0.15 V"
   ],
   "correct": 2,
   "explanation": "The motional emf is ε = BLv = (0.50)(0.40)(3.0) = 0.60 V."
  },
  {
   "id": "p2e2-34",
   "unit": 11,
   "stem": "A space heater is rated at 1500 W when connected to a 120 V outlet. What is the resistance of the heater element?",
   "choices": [
    "18,000 Ω",
    "180 Ω",
    "12.5 Ω",
    "9.6 Ω"
   ],
   "correct": 3,
   "explanation": "The power is P = V²/R, so R = V²/P = (120)²/1500 = 9.6 Ω. The value 12.5 is the current in amperes, I = P/V, not a resistance."
  },
  {
   "id": "p2e2-35",
   "unit": 13,
   "setId": "p2e2-set5",
   "stem": "How far from the lens is the image?",
   "choices": [
    "75 cm",
    "60 cm",
    "30 cm",
    "8.6 cm"
   ],
   "correct": 1,
   "explanation": "From 1/f = 1/d_o + 1/d_i: 1/d_i = 1/15 − 1/20 = 1/60, so d_i = 60 cm."
  },
  {
   "id": "p2e2-36",
   "unit": 13,
   "setId": "p2e2-set5",
   "stem": "What is the magnification of the image?",
   "choices": [
    "−3.0",
    "−1.3",
    "+1.3",
    "+3.0"
   ],
   "correct": 0,
   "explanation": "m = −d_i/d_o = −60/20 = −3.0. The image is inverted (negative sign) and three times as tall as the object."
  },
  {
   "id": "p2e2-37",
   "unit": 10,
   "setId": "p2e2-set6",
   "stem": "What is the net electric field at point P?",
   "choices": [
    "4.5 × 10⁵ N/C directed to the right, because the fields from the two charges add.",
    "2.25 × 10⁵ N/C directed to the left, because only the right charge's field matters at P.",
    "2.25 × 10⁵ N/C directed to the right, because only the left charge's field matters at P.",
    "Zero, because the fields from the two charges are equal in magnitude and opposite in direction."
   ],
   "correct": 3,
   "explanation": "P is 0.20 m from each charge, so each charge produces a field of magnitude kQ/r² = (9.0 × 10⁹)(1.0 × 10⁻⁶)/(0.20)² = 2.25 × 10⁵ N/C. The field of the left charge points to the right (away from it), and the field of the right charge points to the left (away from it), so they cancel exactly. Electric fields are vectors, so the cancellation occurs only when directions are opposite."
  },
  {
   "id": "p2e2-38",
   "unit": 10,
   "setId": "p2e2-set6",
   "stem": "What is the electric potential at point P? (Take V = 0 infinitely far from the charges.)",
   "choices": [
    "1.8 × 10⁵ V",
    "9.0 × 10⁴ V",
    "4.5 × 10⁴ V",
    "0 V"
   ],
   "correct": 1,
   "explanation": "Potential is a scalar, so the contributions from the two charges add: V = 2kQ/r = 2(9.0 × 10⁹)(1.0 × 10⁻⁶)/(0.20) = 9.0 × 10⁴ V. Although the field is zero at P, the potential is not: the two positive charges both raise the potential there."
  },
  {
   "id": "p2e2-39",
   "unit": 13,
   "stem": "Under which of the following conditions can total internal reflection occur at a boundary between two transparent media?",
   "choices": [
    "Light travels from the medium with the lower index of refraction toward the medium with the higher index, at an angle of incidence greater than the critical angle.",
    "Light strikes the boundary at normal incidence from either medium.",
    "Light travels from either medium at any angle if the boundary is smooth enough.",
    "Light travels from the medium with the higher index of refraction toward the medium with the lower index, at an angle of incidence greater than the critical angle."
   ],
   "correct": 3,
   "explanation": "Total internal reflection requires light to travel from a higher-index medium toward a lower-index medium (so that the refracted ray would bend away from the normal) and to strike the boundary at an angle larger than the critical angle. When going from a lower to a higher index, light always refracts into the second medium."
  },
  {
   "id": "p2e2-40",
   "unit": 14,
   "stem": "A diffraction grating has 500 lines per millimeter. Light of wavelength 600 nm is incident normally on the grating. At what angle from the normal is the first-order maximum observed?",
   "choices": [
    "8.6°",
    "17.5°",
    "30°",
    "53°"
   ],
   "correct": 1,
   "explanation": "The line spacing is d = 1/500 mm = 2.0 × 10⁻⁶ m. For the first-order maximum, d sin θ = λ, so sin θ = (600 × 10⁻⁹)/(2.0 × 10⁻⁶) = 0.30 and θ ≈ 17.5°."
  },
  {
   "id": "p2e2-41",
   "unit": 10,
   "stem": "A charged particle moves from one point to another along an equipotential surface. How much work does the electric field do on the particle?",
   "choices": [
    "Zero, because the potential difference between the two points is zero.",
    "Positive, because the electric field exerts a force on the particle.",
    "Negative, because the particle is moving against the electric field.",
    "It depends on the length of the path along the surface."
   ],
   "correct": 0,
   "explanation": "The work done by the electric field is W = −qΔV. On an equipotential surface ΔV = 0, so the work is zero regardless of the path. The electric field is perpendicular to the equipotential surface, so it exerts no force component along the motion."
  },
  {
   "id": "p2e2-42",
   "unit": 9,
   "stem": "A heat engine absorbs 800 J of heat from a hot reservoir during each cycle and exhausts 600 J of heat to a cold reservoir. What is the efficiency of the engine?",
   "choices": [
    "25%",
    "33%",
    "75%",
    "133%"
   ],
   "correct": 0,
   "explanation": "The work done per cycle is W = Q_H − Q_C = 800 − 600 = 200 J, so the efficiency is e = W/Q_H = 200/800 = 25%. 75% is the fraction of the heat that is exhausted instead."
  }
 ],
 "sets": {
  "p2e2-set1": {
   "text": "Three resistors are connected in parallel across a 12 V battery that has negligible internal resistance, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 240\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50 45L370 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M50 195L370 195\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M150 45L150 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M150 70L150 81.25L142 86.88L158 98.13L142 109.38L158 120.63L142 131.88L158 143.13L150 148.75L150 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"174\" y=\"120\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₁ = 6 Ω</text><path d=\"M150 160L150 195\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"150\" cy=\"45\" r=\"3.6\" fill=\"#2E332E\"/><circle cx=\"150\" cy=\"195\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M260 45L260 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M260 70L260 81.25L252 86.88L268 98.13L252 109.38L268 120.63L252 131.88L268 143.13L260 148.75L260 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"284\" y=\"120\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₂ = 12 Ω</text><path d=\"M260 160L260 195\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"45\" r=\"3.6\" fill=\"#2E332E\"/><circle cx=\"260\" cy=\"195\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M370 45L370 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M370 70L370 81.25L362 86.88L378 98.13L362 109.38L378 120.63L362 131.88L378 143.13L370 148.75L370 160\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"394\" y=\"120\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₃ = 4 Ω</text><path d=\"M370 160L370 195\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"370\" cy=\"45\" r=\"3.6\" fill=\"#2E332E\"/><circle cx=\"370\" cy=\"195\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M50 45L50 85\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"103\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"103\" x2=\"64\" y2=\"103\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"111\" x2=\"58\" y2=\"111\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"111\" x2=\"50\" y2=\"129\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M50 129L50 195\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"112\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 V</text></svg>",
     "alt": "A circuit with a 12 volt battery connected across three parallel resistors of 6 ohms, 12 ohms, and 4 ohms."
    }
   ]
  },
  "p2e2-set2": {
   "text": "A guitar string that is 0.60 m long is held fixed at both ends. It is plucked so that it vibrates in the pattern shown, with two loops and a node at its center. Waves travel along this string at 60 m/s.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50.0 80.0L53.0 77.6L56.0 75.2L59.0 72.8L62.0 70.4L65.0 68.1L68.0 65.8L71.0 63.5L74.0 61.3L77.0 59.1L80.0 57.0L83.0 54.9L86.0 53.0L89.0 51.1L92.0 49.2L95.0 47.5L98.0 45.8L101.0 44.3L104.0 42.8L107.0 41.4L110.0 40.2L113.0 39.0L116.0 38.0L119.0 37.1L122.0 36.3L125.0 35.6L128.0 35.0L131.0 34.6L134.0 34.3L137.0 34.1L140.0 34.0L143.0 34.1L146.0 34.3L149.0 34.6L152.0 35.0L155.0 35.6L158.0 36.3L161.0 37.1L164.0 38.0L167.0 39.0L170.0 40.2L173.0 41.4L176.0 42.8L179.0 44.3L182.0 45.8L185.0 47.5L188.0 49.2L191.0 51.1L194.0 53.0L197.0 54.9L200.0 57.0L203.0 59.1L206.0 61.3L209.0 63.5L212.0 65.8L215.0 68.1L218.0 70.4L221.0 72.8L224.0 75.2L227.0 77.6L230.0 80.0L233.0 82.4L236.0 84.8L239.0 87.2L242.0 89.6L245.0 91.9L248.0 94.2L251.0 96.5L254.0 98.7L257.0 100.9L260.0 103.0L263.0 105.1L266.0 107.0L269.0 108.9L272.0 110.8L275.0 112.5L278.0 114.2L281.0 115.7L284.0 117.2L287.0 118.6L290.0 119.8L293.0 121.0L296.0 122.0L299.0 122.9L302.0 123.7L305.0 124.4L308.0 125.0L311.0 125.4L314.0 125.7L317.0 125.9L320.0 126.0L323.0 125.9L326.0 125.7L329.0 125.4L332.0 125.0L335.0 124.4L338.0 123.7L341.0 122.9L344.0 122.0L347.0 121.0L350.0 119.8L353.0 118.6L356.0 117.2L359.0 115.7L362.0 114.2L365.0 112.5L368.0 110.8L371.0 108.9L374.0 107.0L377.0 105.1L380.0 103.0L383.0 100.9L386.0 98.7L389.0 96.5L392.0 94.2L395.0 91.9L398.0 89.6L401.0 87.2L404.0 84.8L407.0 82.4L410.0 80.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M50.0 80.0L53.0 82.4L56.0 84.8L59.0 87.2L62.0 89.6L65.0 91.9L68.0 94.2L71.0 96.5L74.0 98.7L77.0 100.9L80.0 103.0L83.0 105.1L86.0 107.0L89.0 108.9L92.0 110.8L95.0 112.5L98.0 114.2L101.0 115.7L104.0 117.2L107.0 118.6L110.0 119.8L113.0 121.0L116.0 122.0L119.0 122.9L122.0 123.7L125.0 124.4L128.0 125.0L131.0 125.4L134.0 125.7L137.0 125.9L140.0 126.0L143.0 125.9L146.0 125.7L149.0 125.4L152.0 125.0L155.0 124.4L158.0 123.7L161.0 122.9L164.0 122.0L167.0 121.0L170.0 119.8L173.0 118.6L176.0 117.2L179.0 115.7L182.0 114.2L185.0 112.5L188.0 110.8L191.0 108.9L194.0 107.0L197.0 105.1L200.0 103.0L203.0 100.9L206.0 98.7L209.0 96.5L212.0 94.2L215.0 91.9L218.0 89.6L221.0 87.2L224.0 84.8L227.0 82.4L230.0 80.0L233.0 77.6L236.0 75.2L239.0 72.8L242.0 70.4L245.0 68.1L248.0 65.8L251.0 63.5L254.0 61.3L257.0 59.1L260.0 57.0L263.0 54.9L266.0 53.0L269.0 51.1L272.0 49.2L275.0 47.5L278.0 45.8L281.0 44.3L284.0 42.8L287.0 41.4L290.0 40.2L293.0 39.0L296.0 38.0L299.0 37.1L302.0 36.3L305.0 35.6L308.0 35.0L311.0 34.6L314.0 34.3L317.0 34.1L320.0 34.0L323.0 34.1L326.0 34.3L329.0 34.6L332.0 35.0L335.0 35.6L338.0 36.3L341.0 37.1L344.0 38.0L347.0 39.0L350.0 40.2L353.0 41.4L356.0 42.8L359.0 44.3L362.0 45.8L365.0 47.5L368.0 49.2L371.0 51.1L374.0 53.0L377.0 54.9L380.0 57.0L383.0 59.1L386.0 61.3L389.0 63.5L392.0 65.8L395.0 68.1L398.0 70.4L401.0 72.8L404.0 75.2L407.0 77.6L410.0 80.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"50\" cy=\"80\" r=\"5\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"410\" cy=\"80\" r=\"5\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"150\" x2=\"410\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"410,150 402.62,153.29 402.62,146.71\" fill=\"#2E332E\"/><polygon points=\"50,150 57.38,146.71 57.38,153.29\" fill=\"#2E332E\"/><text x=\"230\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">L = 0.60 m</text></svg>",
     "alt": "A standing wave on a string fixed at both ends showing two loops, with a node in the middle. The string length is 0.60 meters.",
     "maxWidth": 440
    }
   ]
  },
  "p2e2-set3": {
   "text": "An ideal gas is taken around the rectangular cycle A → B → C → D → A shown in the PV diagram.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"278\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"232\" x2=\"456\" y2=\"232\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"236\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"64\" y1=\"190\" x2=\"456\" y2=\"190\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"194\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"148\" x2=\"456\" y2=\"148\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"152\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">90</text><line x1=\"64\" y1=\"106\" x2=\"456\" y2=\"106\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"110\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"64\" x2=\"456\" y2=\"64\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"68\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">150</text><line x1=\"64\" y1=\"22\" x2=\"456\" y2=\"22\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">180</text><line x1=\"64\" y1=\"274\" x2=\"64\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"64\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"162\" y1=\"274\" x2=\"162\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"162\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"260\" y1=\"274\" x2=\"260\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"358\" y1=\"274\" x2=\"358\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"358\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"456\" y1=\"274\" x2=\"456\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"456\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"22\" x2=\"64\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"318\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume (L)</text><text x=\"18\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 18 148)\">Pressure (kPa)</text><line x1=\"162\" y1=\"64\" x2=\"358\" y2=\"64\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"267,64 253,59 253,69\" fill=\"#3F7A94\"/><line x1=\"358\" y1=\"64\" x2=\"358\" y2=\"204\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"358,141 363,127 353,127\" fill=\"#3F7A94\"/><line x1=\"358\" y1=\"204\" x2=\"162\" y2=\"204\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"253,204 267,209 267,199\" fill=\"#3F7A94\"/><line x1=\"162\" y1=\"204\" x2=\"162\" y2=\"64\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"162,127 157,141 167,141\" fill=\"#3F7A94\"/><circle cx=\"162\" cy=\"64\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"146\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">A</text><circle cx=\"358\" cy=\"64\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"370\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">B</text><circle cx=\"358\" cy=\"204\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"370\" y=\"196\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">C</text><circle cx=\"162\" cy=\"204\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"146\" y=\"220\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">D</text></svg>",
     "alt": "A PV diagram of a rectangular cycle. State A is at 1 liter and 150 kilopascals, B at 3 liters and 150 kilopascals, C at 3 liters and 50 kilopascals, and D at 1 liter and 50 kilopascals. The cycle runs A to B to C to D and back to A, clockwise."
    }
   ]
  },
  "p2e2-set4": {
   "text": "The graph shows the maximum kinetic energy of electrons ejected from a metal surface as a function of the frequency of the light incident on the surface. The frequency f₀ marks the threshold frequency, which is 5.0 × 10¹⁴ Hz.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"262\" x2=\"456\" y2=\"262\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"266\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-1</text><line x1=\"64\" y1=\"213.6\" x2=\"456\" y2=\"213.6\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"217.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"165.2\" x2=\"456\" y2=\"165.2\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"169.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"64\" y1=\"116.8\" x2=\"456\" y2=\"116.8\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"120.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"68.4\" x2=\"456\" y2=\"68.4\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"72.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"64\" y1=\"20\" x2=\"456\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"262\" x2=\"64\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"142.4\" y1=\"262\" x2=\"142.4\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"142.4\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"220.8\" y1=\"262\" x2=\"220.8\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"220.8\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"299.2\" y1=\"262\" x2=\"299.2\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"299.2\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"377.6\" y1=\"262\" x2=\"377.6\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"377.6\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"456\" y1=\"262\" x2=\"456\" y2=\"267\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"456\" y=\"281\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"262\" x2=\"456\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"262\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"310\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Frequency of incident light (×10¹⁴ Hz)</text><text x=\"16\" y=\"141\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 141)\">Maximum kinetic energy (eV)</text><path d=\"M260 213.6L456 114.38\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"260\" cy=\"213.6\" r=\"4.5\" fill=\"#D2705A\" stroke=\"#D2705A\" stroke-width=\"1.6\"/><text x=\"265.88\" y=\"240.22\" text-anchor=\"start\" font-size=\"14\" font-weight=\"400\" fill=\"#2E332E\">f₀</text></svg>",
     "alt": "A graph of maximum kinetic energy in electron volts against light frequency in units of 10 to the 14 hertz. A straight line rises from zero at the threshold frequency of 5.0 and reaches about 2 electron volts at a frequency of 10.",
     "maxWidth": 480
    }
   ]
  },
  "p2e2-set5": {
   "text": "A thin converging lens has a focal length of 15 cm. An object is placed 20 cm from the lens, as shown. (The vertical scale of the diagram is exaggerated.)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"140\" x2=\"540\" y2=\"140\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"62\" x2=\"280\" y2=\"218\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M272 70L280 62L288 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M272 210L280 218L288 210\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"220\" y1=\"135\" x2=\"220\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"220\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"340\" y1=\"135\" x2=\"340\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"340\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"160\" y1=\"135\" x2=\"160\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"160\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"400\" y1=\"135\" x2=\"400\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"400\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"200\" y1=\"140\" x2=\"200\" y2=\"116\" stroke=\"#3F7A94\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"200,116 204.73,126.59 195.27,126.59\" fill=\"#3F7A94\"/><line x1=\"200\" y1=\"116\" x2=\"280\" y2=\"116\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"116\" x2=\"536\" y2=\"218.4\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"116\" x2=\"536\" y2=\"216.8\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"520\" y1=\"140\" x2=\"520\" y2=\"212\" stroke=\"#6E9A5E\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"520,212 515.27,201.41 524.73,201.41\" fill=\"#6E9A5E\"/></svg>",
     "alt": "A ray diagram for a converging lens with the object between one and two focal lengths from the lens. Two rays from the arrow tip, one parallel to the axis and one through the lens center, meet far to the right of the lens, forming a large inverted image."
    }
   ]
  },
  "p2e2-set6": {
   "text": "Two identical point charges of +1.0 μC are fixed 0.40 m apart. Point P is midway between them.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"30\" y1=\"70\" x2=\"450\" y2=\"70\" stroke=\"#E6E4DC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"110\" cy=\"70\" r=\"15\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"110\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">+</text><text x=\"110\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">+Q</text><circle cx=\"240\" cy=\"70\" r=\"5\" fill=\"#2E332E\"/><text x=\"240\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">P</text><circle cx=\"370\" cy=\"70\" r=\"15\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"370\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">+</text><text x=\"370\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">+Q</text><line x1=\"110\" y1=\"132\" x2=\"370\" y2=\"132\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"370,132 362.62,135.29 362.62,128.71\" fill=\"#2E332E\"/><polygon points=\"110,132 117.38,128.71 117.38,135.29\" fill=\"#2E332E\"/><text x=\"240\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.40 m</text></svg>",
     "alt": "A horizontal line with a positive charge on the left, a point P in the middle, and another positive charge of equal magnitude on the right. The charges are 0.40 meters apart."
    }
   ]
  }
 }
};

export default EXAM;
