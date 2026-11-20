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
   "explanation": "Correct: (B) 3.3 × 10⁻¹⁰ m.\nEvery moving particle has a de Broglie wavelength set by its momentum: λ = h/p. Here λ = (6.63 × 10⁻³⁴ J·s)/(2.0 × 10⁻²⁴ kg·m/s) = 3.3 × 10⁻¹⁰ m. Check the exponent: −34 − (−24) = −10. The units work because J·s = kg·m²/s, and dividing by kg·m/s leaves meters. This wavelength is about the size of an atom, which is why electrons diffract from crystals.\n\n(A) is wrong because 3.3 × 10⁻¹¹ m comes from an exponent slip; −34 − (−24) is −10, not −11.\n(C) is wrong because 3.3 × 10⁻⁹ m is ten times too large, an exponent slip in the division (−34 + 24 = −10, not −9).\n(D) is wrong because 1.3 × 10⁻⁵⁸ m results from multiplying h by p instead of dividing h by p."
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
   "explanation": "Correct: (C) 2r.\nThe magnetic force supplies the centripetal force: qvB = mv²/r, which gives r = mv/(qB). The mass, charge, and field are unchanged, so the radius is directly proportional to the speed. Doubling v doubles the radius to 2r. A faster particle has more momentum, and the same field can only bend it into a wider circle.\n\n(A) is wrong because r/2 treats radius as inversely proportional to speed, but r = mv/(qB) increases with v.\n(B) is wrong because the radius does depend on speed; only the period 2πm/(qB) is independent of speed.\n(D) is wrong because 4r assumes r depends on v², confusing it with the kinetic energy, which does quadruple."
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
   "explanation": "Correct: (B) 6.0 A.\nIn a parallel circuit each branch is connected directly across the battery, so each resistor has the full 12 V across it. Ohm's law gives the branch currents: 12 V/6 Ω = 2.0 A, 12 V/12 Ω = 1.0 A, and 12 V/4 Ω = 3.0 A. By the junction rule the battery supplies the sum, 2.0 + 1.0 + 3.0 = 6.0 A. Check: R_eq = 2.0 Ω, and 12 V/2.0 Ω = 6.0 A.\n\n(A) is wrong because 11 A would require an equivalent resistance of 12/11 ≈ 1.1 Ω, but the three branches combine to 2.0 Ω.\n(C) is wrong because 3.0 A is the current in the 4 Ω branch alone, not the total from the battery.\n(D) is wrong because 2.0 A is only the current in the 6 Ω branch (and numerically equals R_eq in ohms), not the total."
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
   "explanation": "Correct: (A) The 4 Ω resistor, because it carries the greatest current at the same voltage.\nFor parallel resistors the voltage is the same (12 V), so the power P = V²/R = IV is largest for the smallest resistance, which draws the most current. P(4 Ω) = 144/4 = 36 W (3.0 A × 12 V), P(6 Ω) = 144/6 = 24 W, and P(12 Ω) = 144/12 = 12 W. The 4 Ω resistor dissipates the most power.\n\n(B) is wrong because the 12 Ω resistor draws the least current at 12 V and dissipates only 12 W; P = I²R favoring large R applies to equal current (series), not parallel.\n(C) is wrong because position in the circuit does not matter; every branch has the same 12 V and its power depends only on its resistance.\n(D) is wrong because equal voltage does not mean equal power; the currents differ, giving 36 W, 24 W, and 12 W."
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
   "explanation": "Correct: (D) 2.0 Ω.\nFor resistors in parallel the reciprocals add: 1/R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3)/12 = 6/12, so R_eq = 2.0 Ω. The equivalent resistance of a parallel group is always smaller than its smallest branch (4 Ω), because each added branch gives current another path. This agrees with R_eq = V/I = 12 V/6.0 A = 2.0 Ω.\n\n(A) is wrong because 22 Ω is the sum 6 + 12 + 4, which applies to resistors in series, not in parallel.\n(B) is wrong because 6.0 Ω is larger than the smallest branch (4 Ω), and a parallel combination is always smaller than its smallest resistor; 6 is just the numerator of 1/R_eq = 6/12, whose reciprocal is 2.0 Ω.\n(C) is wrong because 4.0 Ω equals the smallest single resistor; adding more parallel branches must make R_eq smaller than 4 Ω."
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
   "explanation": "Correct: (D) The wires attract each other.\nEach current creates a magnetic field that circles its wire, and the other wire's current feels a force F = IL × B in that field. With the right-hand rules, for parallel currents the force on each wire points toward the other wire, so they attract; for antiparallel currents they repel. The forces are equal and opposite by Newton's third law, with magnitude F/L = μ₀I₁I₂/(2πd).\n\n(A) is wrong because repulsion happens only when the two currents flow in opposite directions, not the same direction.\n(B) is wrong because the force is magnetic, acting on moving charges, so it exists even though each wire has zero net charge.\n(C) is wrong because the force on each wire lies in the plane of the wires, pointing directly toward the other wire."
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
   "explanation": "Correct: (D) 67%.\nNo engine operating between two reservoirs can beat the Carnot efficiency, which depends only on the absolute temperatures: e_max = 1 − T_C/T_H = 1 − (300 K)/(900 K) = 1 − 0.333 = 0.667, or about 67%. Equivalently, e = (T_H − T_C)/T_H = 600/900. Real engines have lower efficiencies because of friction and irreversible heat flow.\n\n(A) is wrong because 33% is T_C/T_H, the minimum fraction of the input heat that must be exhausted, not the efficiency.\n(B) is wrong because 50% comes from dividing the temperature difference by the sum, 600/(900 + 300), instead of by T_H.\n(C) is wrong because 60% would require T_C/T_H = 0.40, which would need a cold reservoir at 360 K rather than 300 K."
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
   "explanation": "Correct: (C) 28 MeV.\nThe missing mass appears as released energy, E = Δmc². With the conversion 1 u = 931.5 MeV/c², E = (0.030 u)(931.5 MeV/u) = 27.9 MeV, which rounds to 28 MeV with two significant figures. Because the products have less mass than the reactants, the reaction is exothermic and this energy goes into kinetic energy of the products and any emitted photons.\n\n(A) is wrong because 0.28 MeV is 100 times too small, a decimal slip such as using 0.00030 u.\n(B) is wrong because 2.8 MeV is ten times too small, as if the mass defect were 0.0030 u.\n(D) is wrong because 280 MeV is ten times too large, as if the mass defect were 0.30 u."
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
   "explanation": "Correct: (C) 0.17 m.\nThe magnetic force is perpendicular to the velocity and supplies the centripetal force: evB = mv²/r, so r = mv/(eB). Substituting, r = (9.1 × 10⁻³¹ kg)(3.0 × 10⁶ m/s)/((1.6 × 10⁻¹⁹ C)(1.0 × 10⁻⁴ T)) = (2.73 × 10⁻²⁴)/(1.6 × 10⁻²³) = 0.17 m. The electron's small mass lets even a weak field bend it into a tight arc.\n\n(A) is wrong because 17 m is 100 times too large, from an exponent slip in the denominator (e.g., using 10⁻⁶ T).\n(B) is wrong because 1.7 m is ten times too large, as if the field were 1.0 × 10⁻⁵ T.\n(D) is wrong because 0.017 m is ten times too small, as if the field were 1.0 × 10⁻³ T."
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
   "explanation": "Correct: (D) The detected frequency is higher, because the wavelength between the source and the observer is shortened.\nThis is the Doppler effect. The speed of sound is set by the air, not by the source. As the source moves toward the observer, it partly catches up to each crest it has just emitted before emitting the next, so the crests ahead of it are bunched closer together. A shorter wavelength at the same wave speed (f = v/λ) means more crests reach the observer each second, so the detected frequency is higher.\n\n(A) is wrong because the frequency rises, not falls, and the source's motion does not change the wave speed in the air.\n(B) is wrong because even though the wave speed is unchanged, the wavelength is shortened, so the detected frequency does change.\n(C) is wrong because the higher frequency is right but the reason is not; sound speed depends on the medium, not on the source's motion."
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
   "explanation": "Correct: (C) 39°.\nTotal internal reflection begins when the refracted ray would travel along the boundary (θ = 90° in air). Snell's law then gives n_glass sin θ_c = n_air sin 90°, so sin θ_c = 1.0/1.6 = 0.625 and θ_c = sin⁻¹(0.625) ≈ 39°. Rays hitting the glass–air surface at more than 39° from the normal are totally reflected back into the glass.\n\n(A) is wrong because sin 19° ≈ 0.33, which would correspond to glass with an index of about 3, not 1.6.\n(B) is wrong because 30° has sin θ = 0.50, which would need an index of 2.0 rather than 1.6.\n(D) is wrong because 51° is the complement of the critical angle (90° − 39°), measured from the surface instead of from the normal."
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
   "explanation": "Correct: (C) 1.8 × 10⁻¹⁰ F.\nFor a parallel-plate capacitor, C = ε₀A/d. Convert the separation to meters: 1.0 mm = 1.0 × 10⁻³ m. Then C = (8.85 × 10⁻¹² C²/(N·m²))(0.020 m²)/(1.0 × 10⁻³ m) = 1.77 × 10⁻¹⁰ F ≈ 1.8 × 10⁻¹⁰ F (about 180 pF). Capacitance grows with plate area and shrinks with separation.\n\n(A) is wrong because 1.8 × 10⁻¹² F uses d = 0.10 m, as if 1.0 mm were converted incorrectly (e.g., to centimeters).\n(B) is wrong because 1.8 × 10⁻¹¹ F uses d = 1.0 × 10⁻² m, a factor-of-ten error in converting millimeters to meters.\n(D) is wrong because 1.8 × 10⁻⁹ F uses d = 1.0 × 10⁻⁴ m, making the gap ten times too small."
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
   "explanation": "Correct: (A) Zero, because the magnetic flux through the loop is not changing.\nFaraday's law says the induced emf equals the rate of change of magnetic flux, 𝓔 = −ΔΦ/Δt, with Φ = BA cos θ. Inside a uniform field, with constant area and orientation, B, A, and θ all stay the same as the loop moves, so the flux is constant and the emf is zero. (Motional emfs of vBL do appear across the leading and trailing sides, but they are equal and cancel around the loop.)\n\n(B) is wrong because motion through a field is not enough; the flux through the loop must change, and here it does not.\n(C) is wrong because the forces on charges in the two opposite sides push in the same direction and their emfs cancel around the loop.\n(D) is wrong because emf does not depend on resistance; resistance affects only the current that an emf would drive."
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
   "explanation": "Correct: (B) 1.8 N.\nCoulomb's law gives the magnitude of the force: F = k|q₁q₂|/r² = (9.0 × 10⁹ N·m²/C²)(3.0 × 10⁻⁶ C)(6.0 × 10⁻⁶ C)/(0.30 m)². The numerator is 9.0 × 10⁹ × 1.8 × 10⁻¹¹ = 0.162 N·m², and (0.30)² = 0.090 m², so F = 0.162/0.090 = 1.8 N. The force is attractive because the charges have opposite signs.\n\n(A) is wrong because 0.90 N uses 3.0 μC for both charges, (9.0 × 10⁹)(3.0 × 10⁻⁶)²/0.090.\n(C) is wrong because 5.4 N comes from writing (0.30)² as 0.030 instead of 0.090, three times too small a denominator.\n(D) is wrong because 18 N comes from writing (0.30)² as 0.0090, a decimal slip that makes the force ten times too large."
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
   "explanation": "Correct: (C) 0.50 kWh.\nElectrical energy is power multiplied by time, E = Pt. Express the power in kilowatts to get kilowatt-hours: 100 W = 0.100 kW, so E = (0.100 kW)(5.0 h) = 0.50 kWh. In SI units this is (100 J/s)(18,000 s) = 1.8 × 10⁶ J. The kilowatt-hour is a unit of energy, not power, which is why utilities bill in it.\n\n(A) is wrong because 500 kWh treats 100 W as 100 kW; the product 500 is in watt-hours, not kilowatt-hours.\n(B) is wrong because 5.0 kWh is ten times too large, a slip in converting 500 Wh to kWh (500/1000 = 0.50).\n(D) is wrong because 0.020 kWh divides power by time (0.100 kW/5.0 h = 0.020) instead of multiplying."
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
   "explanation": "Correct: (C) 0.60 m.\nOn a string fixed at both ends, each loop of a standing wave spans half a wavelength, from node to node. The figure shows two loops between the fixed ends, so 2(λ/2) = L, giving λ = L = 0.60 m. This is the second harmonic; in general λₙ = 2L/n, here with n = 2: λ = 2(0.60 m)/2 = 0.60 m.\n\n(A) is wrong because 2.4 m is 4L, which would apply to a quarter-wavelength pattern, not a string fixed at both ends.\n(B) is wrong because 1.2 m is 2L, the wavelength of the fundamental (one loop), not the two-loop pattern shown.\n(D) is wrong because 0.30 m is the length of one loop, which is only half a wavelength."
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
   "explanation": "Correct: (B) 100 Hz.\nThe wave speed, frequency, and wavelength are related by v = fλ. From the figure, two loops fit on the 0.60 m string, so λ = 0.60 m. Then f = v/λ = (60 m/s)/(0.60 m) = 100 Hz. Check with harmonics: the fundamental is v/(2L) = 60/1.2 = 50 Hz, and this second harmonic is twice that, 100 Hz.\n\n(A) is wrong because 200 Hz uses λ = 0.30 m, mistaking one loop for a full wavelength.\n(C) is wrong because 50 Hz is the fundamental frequency (one loop, λ = 1.2 m), not the two-loop pattern shown.\n(D) is wrong because 25 Hz uses λ = 2.4 m, four times the string length, which does not fit this pattern."
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
   "explanation": "Correct: (B) 550 J/(kg·°C).\nIn an insulated container the energy lost by the metal equals the energy gained by the water: m_m c_m ΔT_m = m_w c_w ΔT_w. The metal cools by 100 − 24 = 76 °C and the water warms by 24 − 20 = 4 °C. Water gains (0.50 kg)(4200 J/(kg·°C))(4 °C) = 8400 J, so c_m = 8400 J/((0.20 kg)(76 °C)) = 8400/15.2 = 553 ≈ 550 J/(kg·°C).\n\n(A) is wrong because 280 J/(kg·°C) is about half the correct value; the metal would then release only about 4200 J, half of the 8400 J the water gained.\n(C) is wrong because 1100 J/(kg·°C) is about twice the correct value; the metal would release about 16,800 J, twice what the water gained.\n(D) is wrong because 4200 J/(kg·°C) is water's own value; the metal would then release (0.20)(4200)(76) ≈ 64,000 J, far more than the 8400 J gained."
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
   "explanation": "Correct: (A) It doubles, because it is proportional to the absolute temperature.\nThe average translational kinetic energy per molecule of an ideal gas is K_avg = (3/2)k_BT, which depends only on the absolute temperature. Doubling T therefore doubles K_avg. The rms speed, v_rms = √(3k_BT/m), increases by a factor of √2, and since kinetic energy depends on speed squared, (√2)² = 2, consistent with the energy doubling.\n\n(B) is wrong because the speed does not double; it rises by √2, so the energy (proportional to v²) only doubles.\n(C) is wrong because the average kinetic energy depends on temperature, not on volume; the rigid container only means the pressure also doubles.\n(D) is wrong because √2 is the factor for the rms speed, not for the kinetic energy, which goes as speed squared."
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
   "explanation": "Correct: (D) Atomic number 90, mass number 234.\nAn alpha particle is a helium-4 nucleus with 2 protons and 2 neutrons (Z = 2, A = 4). Both charge and nucleon number are conserved, so the daughter has Z = 92 − 2 = 90 and A = 238 − 4 = 234. Element 90 is thorium, so the decay is ²³⁸U → ²³⁴Th + ⁴He.\n\n(A) is wrong because Z decreasing by 1 with A unchanged describes beta-plus decay or electron capture, not alpha decay.\n(B) is wrong because A = 236 subtracts only 2 from the mass number; an alpha particle carries away 4 nucleons, not 2.\n(C) is wrong because Z increasing by 1 with A unchanged is beta-minus decay, in which a neutron becomes a proton."
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
   "explanation": "Correct: (B) 200 J.\nThe net work done by the gas in a cycle equals the area enclosed on the PV diagram. The rectangle spans ΔV = 3 L − 1 L = 2 L = 2.0 × 10⁻³ m³ and ΔP = 150 kPa − 50 kPa = 100 kPa = 1.0 × 10⁵ Pa, so W = (1.0 × 10⁵ Pa)(2.0 × 10⁻³ m³) = 200 J. The cycle runs clockwise, so the gas does more work expanding at high pressure (300 J from A to B) than is done on it compressing at low pressure (100 J from C to D), and the net work is positive.\n\n(A) is wrong because 100 J is only the work done on the gas during compression C → D (50 kPa × 2 L), not the enclosed area.\n(C) is wrong because 300 J is the work done by the gas during expansion A → B alone, ignoring the 100 J done on it from C to D.\n(D) is wrong because 400 J adds the A → B and C → D works (300 + 100) instead of subtracting them."
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
   "explanation": "Correct: (D) State B.\nFor a fixed amount of ideal gas, PV = nRT, so T is proportional to the product PV. Reading the graph: A is 150 kPa × 1 L = 150, B is 150 kPa × 3 L = 450, C is 50 kPa × 3 L = 150, and D is 50 kPa × 1 L = 50 (in kPa·L). State B has the largest PV, three times that of A or C, so it is the hottest; D is the coldest.\n\n(A) is wrong because state A has PV = 150 kPa·L, only one third of B's 450 kPa·L; high pressure alone does not set temperature.\n(B) is wrong because state C has PV = 150 kPa·L, the same as A, and one third of B; large volume alone does not set temperature.\n(C) is wrong because state D has the smallest product, 50 kPa·L, so it is the coldest state, not the hottest."
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
   "explanation": "Correct: (C) 3.2 × 10⁻¹⁷ J.\nEnergy is conserved: the electric potential energy the electron loses becomes kinetic energy, so ΔK = |q|ΔV. With |q| = 1.6 × 10⁻¹⁹ C and ΔV = 200 V, ΔK = (1.6 × 10⁻¹⁹ C)(200 V) = 3.2 × 10⁻¹⁷ J. In electron-volts this is simply 200 eV, since 1 eV = 1.6 × 10⁻¹⁹ J.\n\n(A) is wrong because 1.6 × 10⁻¹⁹ J is 1 eV, the energy gained across only 1 V, not 200 V.\n(B) is wrong because 1.6 × 10⁻¹⁷ J corresponds to 100 V, half the given potential difference.\n(D) is wrong because 3.2 × 10⁻¹⁵ J is 100 times too large, an exponent slip in multiplying by 200."
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
   "explanation": "Correct: (A) Toward the left side of the page.\nThe magnetic force is F = qv × B. Take up the page as +y and out of the page as +z (the dots in the figure). For a positive charge, v × B = ŷ × ẑ = +x̂, pointing to the right. The particle is negative, so the force is reversed and points to the left. The force is perpendicular to both v and B, so it bends the path without changing the speed.\n\n(B) is wrong because right is the force direction for a positive charge; the negative sign reverses it to the left.\n(C) is wrong because the magnetic force is always perpendicular to the velocity, so it cannot point along the motion (up the page).\n(D) is wrong because the force must be perpendicular to B, which points out of the page, so it cannot point into the page."
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
   "explanation": "Correct: (C) 2.1 eV.\nIn the photoelectric effect, K_max = hf − φ. At the threshold frequency the ejected electrons have zero kinetic energy (the graph's x-intercept), so the photon energy exactly equals the work function: φ = hf₀ = (4.14 × 10⁻¹⁵ eV·s)(5.0 × 10¹⁴ Hz) = 2.07 eV ≈ 2.1 eV. The graph agrees: at 10 × 10¹⁴ Hz the photon energy is 4.14 eV and K_max is about 2.07 eV, so φ = 4.14 − 2.07 ≈ 2.1 eV.\n\n(A) is wrong because 4.1 eV is the photon energy at 10 × 10¹⁴ Hz, which also includes the electron's 2.1 eV of kinetic energy.\n(B) is wrong because 3.4 eV would require a threshold frequency near 8.2 × 10¹⁴ Hz, but the graph crosses zero at 5.0 × 10¹⁴ Hz.\n(D) is wrong because 1.0 eV is the kinetic energy read from the graph at about 7.5 × 10¹⁴ Hz, not the work function."
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
   "explanation": "Correct: (A) The maximum kinetic energy is unchanged, and the number of electrons per second increases.\nLight arrives as photons of energy hf, and each electron absorbs one photon, so K_max = hf − φ depends only on frequency and the metal, not on intensity. Doubling the intensity at fixed frequency doubles the number of photons striking the surface each second, so more electrons are ejected per second (the photocurrent rises), each with the same maximum kinetic energy.\n\n(B) is wrong because intensity does not change the energy per photon, so K_max does not double, and the electron rate does change.\n(C) is wrong because K_max is set by frequency, not intensity; only the number of electrons per second increases.\n(D) is wrong because doubling the intensity doubles the photon arrival rate, so the number of ejected electrons per second increases."
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
   "explanation": "Correct: (D) It increases.\nBright fringes occur where the path difference d sin θ equals mλ. For small angles the spacing between adjacent bright fringes on the screen is Δy = λL/d. With λ and L fixed, Δy is inversely proportional to the slit separation d, so moving the slits closer together spreads the fringes farther apart. For example, halving d doubles the fringe spacing.\n\n(A) is wrong because decreasing d increases Δy = λL/d; the fringes would move closer only if d increased.\n(B) is wrong because the fringe spacing depends on d, so changing the slit separation changes the spacing.\n(C) is wrong because Δy = λL/d grows as d shrinks; it never becomes zero for any nonzero slit separation."
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
   "explanation": "Correct: (A) Field lines are closer together in regions where the electric field is stronger.\nField lines are drawn so that their density (lines per unit area crossing a surface) represents the field's magnitude: where lines crowd together, as near a point charge, the field is strong, and where they spread out the field is weak. The direction of the field at any point is tangent to the line through that point.\n\n(B) is wrong because field lines never cross; at a crossing the field would have two directions at one point, which is impossible.\n(C) is wrong because it reverses the convention; field lines start on positive charges and end on negative charges.\n(D) is wrong because a released charge accelerates along the field, but its inertia makes it leave a curved field line."
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
   "explanation": "Correct: (B) 1.6 m.\nA plane mirror forms a virtual image located as far behind the mirror as the object is in front of it. The person is 0.80 m in front of the mirror, so the image is 0.80 m behind it. The distance from the person to the image is therefore 0.80 m + 0.80 m = 1.6 m. The image is upright and the same size as the person.\n\n(A) is wrong because 3.2 m is four times the object distance; the image is only 0.80 m behind the mirror.\n(C) is wrong because 0.80 m is the distance from the mirror to the image, not from the person to the image.\n(D) is wrong because 0.40 m halves the object distance; a plane mirror places the image as far behind as the object is in front."
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
   "explanation": "Correct: (A) 0.80 mol.\nUse the ideal gas law PV = nRT in SI units. Convert the volume: 5.0 L = 5.0 × 10⁻³ m³. Then n = PV/(RT) = (4.0 × 10⁵ Pa)(5.0 × 10⁻³ m³)/((8.31 J/(mol·K))(300 K)) = 2000 J/2493 J/mol = 0.802 mol ≈ 0.80 mol. Pa·m³ equals joules, so the units reduce to moles.\n\n(B) is wrong because 0.60 mol would require PV ≈ 1500 J, but the given pressure and volume give 2000 J.\n(C) is wrong because 0.40 mol uses half the pressure (2.0 × 10⁵ Pa) or double the temperature, halving the result.\n(D) is wrong because 0.20 mol is one quarter of the correct value; it would need a pressure of only 1.0 × 10⁵ Pa."
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
   "explanation": "Correct: (C) 4.0 A.\nKirchhoff's junction rule follows from conservation of charge: charge cannot pile up at a junction, so the total current in equals the total current out. In: 3.0 A + 2.0 A = 5.0 A. Out: I + 1.0 A. Setting them equal, 5.0 = I + 1.0, so I = 4.0 A.\n\n(A) is wrong because 6.0 A adds the 1.0 A outgoing current to the incoming currents instead of subtracting it.\n(B) is wrong because 5.0 A is the total incoming current; it ignores the 1.0 A that also leaves the junction.\n(D) is wrong because 1.0 A subtracts the two incoming currents (3.0 − 2.0) instead of adding them."
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
   "explanation": "Correct: (B) 170 Hz.\nA pipe closed at one end has a displacement node at the closed end and an antinode at the open end. The fundamental fits one quarter wavelength in the pipe: L = λ/4, so λ = 4L = 4(0.50 m) = 2.0 m. Then f = v/λ = (340 m/s)/(2.0 m) = 170 Hz. Equivalently, f₁ = v/(4L).\n\n(A) is wrong because 85 Hz uses λ = 4.0 m (8L); the fundamental of a closed pipe is a quarter wavelength, not an eighth.\n(C) is wrong because 340 Hz uses λ = 2L = 1.0 m, the fundamental of a pipe open at both ends.\n(D) is wrong because 680 Hz uses λ = L = 0.50 m, which does not fit the node–antinode condition for the fundamental."
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
   "explanation": "Correct: (C) 0.60 V.\nWhen a conductor moves through a magnetic field, the magnetic force on its free charges (qvB) pushes them toward one end until an electric field balances it. The resulting motional emf for mutually perpendicular rod, velocity, and field is 𝓔 = BLv = (0.50 T)(0.40 m)(3.0 m/s) = 0.60 V. Units check: T·m·(m/s) = V.\n\n(A) is wrong because 6.0 V is ten times too large; it equals v/B = 3.0/0.50, not the product BLv.\n(B) is wrong because 1.2 V is Lv = (0.40)(3.0), leaving out the 0.50 T field.\n(D) is wrong because 0.15 V is one quarter of BLv; it would require a rod only 0.10 m long."
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
   "explanation": "Correct: (D) 9.6 Ω.\nThe heater's power at its rated voltage is P = V²/R, so R = V²/P = (120 V)²/1500 W = 14,400/1500 = 9.6 Ω. As a check, the current is I = P/V = 1500/120 = 12.5 A, and R = V/I = 120/12.5 = 9.6 Ω. A low resistance is what lets a heater draw a large current and dissipate a lot of power.\n\n(A) is wrong because an 18,000 Ω element at 120 V would dissipate only (120)²/18,000 = 0.80 W, not 1500 W.\n(B) is wrong because a 180 Ω element at 120 V would dissipate only 80 W, far less than the rated 1500 W.\n(C) is wrong because 12.5 is the current in amperes, I = P/V, not the resistance in ohms."
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
   "explanation": "Correct: (B) 60 cm.\nUse the thin-lens equation 1/f = 1/d_o + 1/d_i with f = +15 cm for a converging lens and d_o = 20 cm. Then 1/d_i = 1/15 − 1/20 = (4 − 3)/60 = 1/60, so d_i = +60 cm, a real image on the far side of the lens. This matches the ray diagram: an object between F and 2F produces a real image beyond 2F, here far to the right.\n\n(A) is wrong because 75 cm does not satisfy the lens equation; 1/20 + 1/75 would give f ≈ 15.8 cm, not 15 cm.\n(C) is wrong because 30 cm is 2f, where the image would be only if the object were also at 2f (30 cm).\n(D) is wrong because 8.6 cm comes from adding the reciprocals, 1/15 + 1/20 = 7/60, instead of subtracting."
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
   "explanation": "Correct: (A) −3.0.\nThe magnification is m = −d_i/d_o. With d_i = 60 cm and d_o = 20 cm, m = −60/20 = −3.0. The negative sign means the real image is inverted, and the magnitude 3.0 means it is three times as tall as the object, as the large inverted arrow in the ray diagram shows.\n\n(B) is wrong because −1.3 is −d_o/f = −20/15, a ratio that is not the magnification formula −d_i/d_o.\n(C) is wrong because +1.3 uses the wrong ratio and the wrong sign; the image is inverted and three times as tall.\n(D) is wrong because the magnitude 3.0 is right but the sign is not; a real image formed by one lens is inverted, so m is negative."
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
   "explanation": "Correct: (D) Zero, because the fields from the two charges are equal in magnitude and opposite in direction.\nP is 0.20 m from each charge, so each produces a field of magnitude E = kQ/r² = (9.0 × 10⁹)(1.0 × 10⁻⁶)/(0.20)² = 2.25 × 10⁵ N/C. Fields from positive charges point away from them: the left charge's field at P points right and the right charge's field points left. Because electric field is a vector, the two equal and opposite fields cancel, and the net field at P is zero.\n\n(A) is wrong because it adds the magnitudes as if they were scalars; the two fields point in opposite directions and cancel.\n(B) is wrong because both charges are 0.20 m from P and contribute equally, so neither field can be ignored.\n(C) is wrong because the right charge's field is just as strong at P, so the left charge's field is cancelled, not alone."
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
   "explanation": "Correct: (B) 9.0 × 10⁴ V.\nElectric potential is a scalar, so the contributions of the two charges simply add with no cancellation of direction. Each charge is 0.20 m from P: V = 2kQ/r = 2(9.0 × 10⁹ N·m²/C²)(1.0 × 10⁻⁶ C)/(0.20 m) = 9.0 × 10⁴ V. Although the field at P is zero, the potential is not; a positive test charge would still need work to be brought from infinity to P.\n\n(A) is wrong because 1.8 × 10⁵ V is double the correct value, as if each charge were only 0.10 m from P.\n(C) is wrong because 4.5 × 10⁴ V counts only one charge, kQ/r; potentials from both charges add.\n(D) is wrong because it confuses zero field with zero potential; two positive charges both raise the potential at P."
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
   "explanation": "Correct: (D) Light travels from the medium with the higher index of refraction toward the medium with the lower index, at an angle of incidence greater than the critical angle.\nSnell's law, n₁ sin θ₁ = n₂ sin θ₂, requires sin θ₂ = (n₁/n₂) sin θ₁. Only when n₁ > n₂ can this exceed 1, which happens when θ₁ is larger than the critical angle θ_c = sin⁻¹(n₂/n₁). Then no refracted ray exists and all the light reflects back into the first medium.\n\n(A) is wrong because going from lower to higher index, the ray bends toward the normal and always refracts; there is no critical angle.\n(B) is wrong because at normal incidence (0°) light passes straight through, far below any critical angle.\n(C) is wrong because total internal reflection depends on the indices and the angle, not on the smoothness of the boundary."
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
   "explanation": "Correct: (B) 17.5°.\nThe slit spacing is the reciprocal of the line density: d = 1/(500 lines/mm) = 0.0020 mm = 2.0 × 10⁻⁶ m. Bright maxima satisfy d sin θ = mλ, so for m = 1, sin θ = (600 × 10⁻⁹ m)/(2.0 × 10⁻⁶ m) = 0.30 and θ = sin⁻¹(0.30) ≈ 17.5°.\n\n(A) is wrong because 8.6° corresponds to sin θ = 0.15, as if d were doubled to 4.0 × 10⁻⁶ m.\n(C) is wrong because 30° reads sin θ = 0.30 as an angle of 30°, but sin 30° is 0.50.\n(D) is wrong because 53° has sin θ ≈ 0.80, which would need a line spacing of only 7.5 × 10⁻⁷ m."
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
   "explanation": "Correct: (A) Zero, because the potential difference between the two points is zero.\nThe work done by the electric field equals the decrease in potential energy: W = −qΔV. Every point on an equipotential surface has the same potential, so ΔV = 0 and W = 0, no matter what path is taken along the surface. Equivalently, the field is everywhere perpendicular to an equipotential, so it has no component along the displacement.\n\n(B) is wrong because a force does no work when it is perpendicular to the motion, as the field is to the equipotential.\n(C) is wrong because moving along an equipotential is perpendicular to the field, not against it, so the work is not negative.\n(D) is wrong because the electric force is conservative; work depends only on ΔV between the endpoints, which is zero."
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
   "explanation": "Correct: (A) 25%.\nBy conservation of energy, the work output per cycle is the heat absorbed minus the heat exhausted: W = Q_H − Q_C = 800 J − 600 J = 200 J. Efficiency is the useful work divided by the heat input: e = W/Q_H = 200 J/800 J = 0.25, or 25%.\n\n(B) is wrong because 33% divides the work by the exhausted heat (200/600) instead of by the heat absorbed.\n(C) is wrong because 75% is Q_C/Q_H = 600/800, the fraction of the input heat that is wasted.\n(D) is wrong because 133% is Q_H/Q_C = 800/600; no engine can have an efficiency above 100%."
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
