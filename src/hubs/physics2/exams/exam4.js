// AP Physics 2 — Exam 4 — 42 questions. Uses g = 10 m/s².
const EXAM = {
 "questions": [
  {
   "id": "p2e4-1",
   "unit": 9,
   "stem": "The volume of a fixed amount of ideal gas in a cylinder is decreased while its temperature is held constant. Which of the following explains, at the molecular level, why the pressure increases?",
   "choices": [
    "The molecules strike the walls more often, because they have less distance to travel between collisions.",
    "The molecules move faster, because the temperature increases when the gas is compressed.",
    "The molecules strike the walls with more force each time, because their average kinetic energy increases.",
    "The molecules become heavier when they are squeezed closer together."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The molecules strike the walls more often, because they have less distance to travel between collisions. The temperature is held constant, so the average kinetic energy of the molecules, and therefore their typical speed, does not change. Pressure is the average force per unit area from molecular collisions with the walls. In a smaller volume each molecule travels a shorter distance between wall hits, so the collisions are more frequent and the pressure rises (Boyle's law, P ∝ 1/V).\n\n(B) is wrong because the temperature is stated to be constant, so the average molecular speed does not change during the compression.\n(C) is wrong because the average kinetic energy depends only on temperature, which is constant, so each collision delivers the same average impulse as before.\n(D) is wrong because the mass of a molecule is fixed; squeezing molecules closer together changes their spacing, not their mass."
  },
  {
   "id": "p2e4-2",
   "unit": 12,
   "stem": "A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C) moves in a circular path in a uniform magnetic field of 0.50 T. What is the time required for the proton to complete one revolution?",
   "choices": [
    "6.6 × 10⁻⁸ s",
    "1.3 × 10⁻⁷ s",
    "2.6 × 10⁻⁷ s",
    "8.2 × 10⁻⁷ s"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.3 × 10⁻⁷ s. A charge moving perpendicular to a uniform field travels in a circle with r = mv/(qB). The period is T = 2πr/v = 2πm/(qB), so it does not depend on the speed. T = 2π(1.67 × 10⁻²⁷ kg)/[(1.6 × 10⁻¹⁹ C)(0.50 T)] = (1.049 × 10⁻²⁶)/(8.0 × 10⁻²⁰) = 1.3 × 10⁻⁷ s.\n\n(A) is wrong because 6.6 × 10⁻⁸ s is πm/(qB), half the period; it uses π instead of 2π for one full revolution.\n(C) is wrong because 2.6 × 10⁻⁷ s is twice the correct period, as if 4π were used or the field were taken as 0.25 T.\n(D) is wrong because 8.2 × 10⁻⁷ s is the correct period multiplied by 2π again, a double use of the 2π factor."
  },
  {
   "id": "p2e4-3",
   "unit": 10,
   "stem": "Which of the following is a correct unit for electric field?",
   "choices": [
    "Volts times meters (V·m)",
    "Joules per coulomb (J/C)",
    "Newtons times coulombs (N·C)",
    "Volts per meter (V/m)"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Volts per meter (V/m). Electric field is force per unit charge, E = F/q, so its basic unit is the newton per coulomb (N/C). Because the field is also the potential gradient, E = −ΔV/Δx, the same quantity can be expressed in volts per meter. The two units are identical: 1 V/m = 1 (J/C)/m = 1 (N·m/C)/m = 1 N/C.\n\n(A) is wrong because the field is potential divided by distance, so the unit is V/m; V·m multiplies instead of dividing.\n(B) is wrong because joules per coulomb is the unit of electric potential (the volt), not of electric field.\n(C) is wrong because the field is force divided by charge, N/C; multiplying newtons by coulombs gives a quantity with no physical meaning here."
  },
  {
   "id": "p2e4-4",
   "unit": 12,
   "stem": "In a mass spectrometer, two ions with the same charge and speed enter a uniform magnetic field perpendicular to their velocities. The mass of ion 2 is greater than the mass of ion 1. How do the radii of their circular paths compare?",
   "choices": [
    "Ion 2 moves in a circle of larger radius than ion 1.",
    "Ion 2 moves in a circle of smaller radius than ion 1.",
    "The two ions move in circles of the same radius.",
    "Ion 2 moves in a straight line, because it is heavier."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Ion 2 moves in a circle of larger radius than ion 1. The magnetic force provides the centripetal force: qvB = mv²/r, so r = mv/(qB). Both ions have the same charge q and speed v and travel in the same field B, so the radius is directly proportional to the mass. Because ion 2 is heavier, its path has the larger radius. This is exactly how a mass spectrometer separates isotopes.\n\n(B) is wrong because r = mv/(qB) is proportional to mass, so the heavier ion curves less sharply and has the larger radius, not the smaller.\n(C) is wrong because equal radii would require equal mass-to-charge ratios, but the ions have equal charge and different masses.\n(D) is wrong because every charged ion moving perpendicular to the field feels a magnetic force qvB, so both move in circles regardless of mass."
  },
  {
   "id": "p2e4-5",
   "unit": 11,
   "stem": "An electric heater rated at 1200 W is operated for 2.5 hours. If electrical energy costs $0.10 per kilowatt-hour, what is the cost?",
   "choices": [
    "$0.030",
    "$0.30",
    "$3.00",
    "$30"
   ],
   "correct": 1,
   "explanation": "Correct: (B) $0.30. Electrical energy is billed in kilowatt-hours, so convert the power to kilowatts first: 1200 W = 1.2 kW. The energy used is E = Pt = (1.2 kW)(2.5 h) = 3.0 kWh. At $0.10 per kWh the cost is (3.0 kWh)($0.10/kWh) = $0.30. Paying attention to the W-to-kW conversion is the key step.\n\n(A) is wrong because $0.030 is ten times too small, as if the rate were $0.01 per kWh or the energy were 0.30 kWh.\n(C) is wrong because $3.00 is the energy in kilowatt-hours (3.0 kWh) read as dollars, without multiplying by the $0.10 rate.\n(D) is wrong because $30 is 100 times the correct cost, which would require a rate of $10 per kWh for the same 3.0 kWh."
  },
  {
   "id": "p2e4-6",
   "unit": 13,
   "stem": "White light passes through a glass prism and spreads into a spectrum of colors. Which statement explains why violet light is bent more than red light?",
   "choices": [
    "Violet light has a lower frequency than red light, so it is slowed more in glass.",
    "Violet light travels faster in glass than red light does, so it is bent more.",
    "The prism adds extra energy to the violet light as the light passes through it.",
    "The index of refraction of glass is greater for violet light than for red light."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The index of refraction of glass is greater for violet light than for red light. This is dispersion: the index of refraction of glass depends on wavelength and is larger for shorter wavelengths. Violet light has the shortest visible wavelength, so glass has a greater index for violet than for red. A larger n means violet travels more slowly in the glass (v = c/n) and, by Snell's law, is bent more at each surface of the prism, spreading the colors apart.\n\n(A) is wrong because violet light has a higher frequency than red light, not a lower one, although it is indeed slowed more.\n(B) is wrong because violet light travels more slowly in glass than red light, and slower light is bent more, not faster light.\n(C) is wrong because a prism does not add energy to light; each photon's frequency and energy are unchanged as it crosses the glass."
  },
  {
   "id": "p2e4-7",
   "unit": 12,
   "stem": "A circular loop of radius 0.10 m is perpendicular to a magnetic field. The field increases uniformly from 0 to 0.20 T in 0.050 s. What is the magnitude of the average emf induced in the loop?",
   "choices": [
    "1.3 V",
    "0.63 V",
    "0.13 V",
    "0.063 V"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.13 V. Faraday's law gives the magnitude of the average emf as |𝓔| = ΔΦ/Δt = AΔB/Δt for a loop whose plane is perpendicular to the field. The area is A = πr² = π(0.10 m)² = 0.0314 m². Then |𝓔| = (0.0314 m²)(0.20 T)/(0.050 s) = 0.126 V, which rounds to 0.13 V to two significant figures.\n\n(A) is wrong because 1.3 V results from using πr = 0.314 m for the area instead of πr² = 0.0314 m², a factor of 10 too large.\n(B) is wrong because 0.63 V is five times the correct value, which would require the field to change in 0.010 s instead of 0.050 s.\n(D) is wrong because 0.063 V uses the average field 0.10 T in place of the change in field, 0.20 T, halving the emf."
  },
  {
   "id": "p2e4-8",
   "unit": 9,
   "stem": "A cylinder with a movable piston holds an ideal gas at a pressure of 2.0 × 10⁵ Pa and a volume of 3.0 L. The gas is compressed slowly at constant temperature to a volume of 1.0 L. What is the final pressure of the gas?",
   "choices": [
    "1.0 × 10⁵ Pa",
    "3.0 × 10⁵ Pa",
    "6.0 × 10⁵ Pa",
    "1.2 × 10⁶ Pa"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6.0 × 10⁵ Pa. At constant temperature, a fixed amount of ideal gas obeys Boyle's law, P₁V₁ = P₂V₂. So P₂ = P₁V₁/V₂ = (2.0 × 10⁵ Pa)(3.0 L)/(1.0 L) = 6.0 × 10⁵ Pa. The volume is reduced by a factor of 3, so the pressure increases by the same factor of 3. Liters may be used directly because the units cancel in the ratio.\n\n(A) is wrong because 1.0 × 10⁵ Pa is a pressure decrease, but compressing a gas at constant temperature must increase its pressure.\n(B) is wrong because 3.0 × 10⁵ Pa is only a 1.5-fold increase; the volume falls by a factor of 3, so the pressure must triple.\n(D) is wrong because 1.2 × 10⁶ Pa is a sixfold increase, twice what a threefold decrease in volume produces under Boyle's law."
  },
  {
   "id": "p2e4-9",
   "unit": 13,
   "stem": "Light in glass (n = 1.5) strikes a boundary with water (n = 1.33) at an angle of incidence of 40° from the normal. What is the angle of refraction in the water?",
   "choices": [
    "26°",
    "40°",
    "46°",
    "65°"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 46°. Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Here (1.5)(sin 40°) = (1.33) sin θ₂, so sin θ₂ = (1.5)(0.643)/1.33 = 0.725 and θ₂ = sin⁻¹(0.725) ≈ 46°. The angle is larger than 40° because the light passes into water, the medium with the lower index of refraction, so it bends away from the normal.\n\n(A) is wrong because 26° is smaller than the incident angle, which would mean bending toward the normal; that happens only when entering a higher-index medium.\n(B) is wrong because 40° would mean no bending at all, which happens only if the two indices of refraction were equal.\n(D) is wrong because 65° overshoots; sin 65° = 0.906 would require n₂ ≈ 1.06, not the 1.33 of water."
  },
  {
   "id": "p2e4-10",
   "unit": 12,
   "stem": "A charged particle moves in a region of uniform magnetic field with its velocity perpendicular to the field. Which statement about the particle's kinetic energy is correct?",
   "choices": [
    "The kinetic energy stays constant, because the magnetic force is always perpendicular to the velocity.",
    "The kinetic energy increases, because the magnetic force accelerates the particle.",
    "The kinetic energy decreases, because the magnetic force opposes the particle's motion.",
    "The kinetic energy changes periodically, because the particle moves in a circle."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The kinetic energy stays constant, because the magnetic force is always perpendicular to the velocity. The magnetic force on a moving charge, F = qv × B, is always perpendicular to the velocity. A force perpendicular to the motion does no work (W = Fd cos 90° = 0), so by the work-energy theorem the kinetic energy cannot change. The force changes only the direction of the velocity, making the particle move in a circle at constant speed.\n\n(B) is wrong because the magnetic force does accelerate the particle, but only centripetally; it changes the direction, not the speed.\n(C) is wrong because the magnetic force is perpendicular to the velocity, never opposite to it, so it cannot slow the particle.\n(D) is wrong because in uniform circular motion the speed is constant, so the kinetic energy does not vary around the circle."
  },
  {
   "id": "p2e4-11",
   "unit": 9,
   "setId": "p2e4-set1",
   "stem": "How much thermal energy is needed to melt the entire sample after it has reached its melting temperature?",
   "choices": [
    "4.2 kJ",
    "33 kJ",
    "37 kJ",
    "79 kJ"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 33 kJ. Melting happens during the flat segment B, where energy is added with no temperature change. On the graph segment B begins at 4.2 kJ and ends at 37.2 kJ, so the energy needed to melt the whole sample is Q = 37.2 − 4.2 = 33 kJ. (This corresponds to a latent heat of fusion L = Q/m = 33 kJ/0.10 kg = 330 kJ/kg.)\n\n(A) is wrong because 4.2 kJ is the energy for segment A, warming the solid from −20 °C to 0 °C, not melting it.\n(C) is wrong because 37 kJ is the total energy added from the start through the end of melting, including the 4.2 kJ of warming.\n(D) is wrong because 79 kJ is the total energy added through the end of segment C, including warming the liquid to 100 °C."
  },
  {
   "id": "p2e4-12",
   "unit": 9,
   "setId": "p2e4-set1",
   "stem": "During which segment is the specific heat capacity of the substance greatest?",
   "choices": [
    "Segment C, because the temperature rises the least per unit of energy added.",
    "Segment A, because the temperature rises the most per unit of energy added.",
    "Segment B, because the most energy is added without a temperature change.",
    "The specific heat is the same in segments A and C, because the substance is the same."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Segment C, because the temperature rises the least per unit of energy added. Specific heat is c = Q/(mΔT); the less the temperature rises per unit of energy, the greater c. In segment A the temperature rises 20 °C for 4.2 kJ, so c = 4200 J/[(0.10 kg)(20 °C)] = 2100 J/(kg·°C). In segment C it rises 100 °C for 42 kJ, so c = 42 000 J/[(0.10 kg)(100 °C)] = 4200 J/(kg·°C). The flatter segment C has the greater specific heat.\n\n(B) is wrong because a large temperature rise per unit of energy means a small specific heat, so segment A has the smaller value.\n(C) is wrong because specific heat describes a temperature change; during the phase change in segment B the energy goes into latent heat instead.\n(D) is wrong because the solid and liquid phases of a substance have different specific heats, as the different slopes of A and C show."
  },
  {
   "id": "p2e4-13",
   "unit": 14,
   "stem": "The intensity of sound from a small speaker is 8.0 × 10⁻⁴ W/m² at a distance of 2.0 m from the speaker. Assuming the sound spreads out equally in all directions, what is the intensity at a distance of 4.0 m?",
   "choices": [
    "1.6 × 10⁻³ W/m²",
    "4.0 × 10⁻⁴ W/m²",
    "2.0 × 10⁻⁴ W/m²",
    "1.0 × 10⁻⁴ W/m²"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.0 × 10⁻⁴ W/m². A point source spreads its power P over a sphere of area 4πr², so I = P/(4πr²) and the intensity varies as 1/r². Doubling the distance from 2.0 m to 4.0 m reduces the intensity by a factor of 2² = 4: I = (8.0 × 10⁻⁴ W/m²)/4 = 2.0 × 10⁻⁴ W/m². The power stays the same but covers four times the area.\n\n(A) is wrong because 1.6 × 10⁻³ W/m² is larger than the original intensity, but intensity must decrease as the sound spreads farther out.\n(B) is wrong because 4.0 × 10⁻⁴ W/m² assumes intensity falls as 1/r (halving), but sound spreads over an area that grows as r².\n(D) is wrong because 1.0 × 10⁻⁴ W/m² divides by 2³ = 8, an inverse-cube relation, instead of by 2² = 4."
  },
  {
   "id": "p2e4-14",
   "unit": 10,
   "stem": "A +2.0 μC charge is fixed at x = 0 and another +2.0 μC charge is fixed at x = 0.40 m. A small +1.0 μC test charge is placed at x = 0.10 m, as shown. What is the magnitude of the net electric force on the test charge?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"30\" y1=\"70\" x2=\"450\" y2=\"70\" stroke=\"#E6E4DC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"70\" r=\"15\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"70\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">+</text><text x=\"70\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">+2.0 μC</text><circle cx=\"160\" cy=\"70\" r=\"5\" fill=\"#2E332E\"/><text x=\"160\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">test</text><circle cx=\"410\" cy=\"70\" r=\"15\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"410\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">+</text><text x=\"410\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">+2.0 μC</text><line x1=\"70\" y1=\"132\" x2=\"160\" y2=\"132\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"160,132 152.62,135.29 152.62,128.71\" fill=\"#2E332E\"/><polygon points=\"70,132 77.38,128.71 77.38,135.29\" fill=\"#2E332E\"/><text x=\"115\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.10 m</text><line x1=\"160\" y1=\"132\" x2=\"410\" y2=\"132\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"410,132 402.62,135.29 402.62,128.71\" fill=\"#2E332E\"/><polygon points=\"160,132 167.38,128.71 167.38,135.29\" fill=\"#2E332E\"/><text x=\"285\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.30 m</text></svg>",
     "alt": "A horizontal line with a +2.0 microcoulomb charge on the left, a small test charge 0.10 meters to its right, and a second +2.0 microcoulomb charge 0.30 meters farther to the right.",
     "maxWidth": 500
    }
   ],
   "choices": [
    "2.2 N",
    "2.0 N",
    "1.6 N",
    "1.0 N"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.6 N. Use Coulomb's law for each source charge and add the forces as vectors. The left charge is 0.10 m away and repels the test charge to the right: F₁ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.10)² = 1.8 N. The right charge is 0.30 m away and repels it to the left: F₂ = (9.0 × 10⁹)(2.0 × 10⁻¹²)/(0.30)² = 0.20 N. Net force = 1.8 − 0.20 = 1.6 N, to the right.\n\n(A) is wrong because 2.2 N exceeds even the sum of the two magnitudes (2.0 N), so no combination of the two forces can produce it.\n(B) is wrong because 2.0 N adds the magnitudes 1.8 N and 0.20 N, ignoring that the two repulsions point in opposite directions.\n(D) is wrong because 1.0 N is too small; the opposing 0.20 N force can reduce the 1.8 N push from the nearer charge only to 1.6 N."
  },
  {
   "id": "p2e4-15",
   "unit": 11,
   "setId": "p2e4-set2",
   "stem": "What is the total current drawn from the 24 V battery?",
   "choices": [
    "6.0 A",
    "3.0 A",
    "2.0 A",
    "1.0 A"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3.0 A. The 12 Ω and 6 Ω resistors are in parallel: R_p = (12)(6)/(12 + 6) = 72/18 = 4.0 Ω. This combination is in series with the 4 Ω resistor, so the total resistance is 4.0 + 4.0 = 8.0 Ω. With negligible internal resistance, the battery current is I = V/R = 24 V/8.0 Ω = 3.0 A, all of which passes through the 4 Ω resistor.\n\n(A) is wrong because 6.0 A is 24 V divided by only 4 Ω, leaving out either the series resistor or the parallel combination.\n(C) is wrong because 2.0 A is the current in the 6 Ω branch alone (12 V/6 Ω), not the total current from the battery.\n(D) is wrong because 1.0 A is the current in the 12 Ω branch alone (12 V/12 Ω), not the total current from the battery."
  },
  {
   "id": "p2e4-16",
   "unit": 11,
   "setId": "p2e4-set2",
   "stem": "How many volts are across the 12 Ω resistor?",
   "choices": [
    "8.0 V",
    "12 V",
    "16 V",
    "24 V"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 12 V. The full 3.0 A flows through the 4 Ω resistor, so its voltage drop is V = IR = (3.0 A)(4 Ω) = 12 V. By Kirchhoff's loop rule, the remaining 24 − 12 = 12 V appears across the parallel combination (equivalently (3.0 A)(4.0 Ω) = 12 V). Parallel branches share the same voltage, so the 12 Ω resistor has 12 V across it.\n\n(A) is wrong because 8.0 V splits the 24 V equally among the three resistors, but the resistors are not all in series and do not share it equally.\n(C) is wrong because 16 V follows from taking only 8 V across the 4 Ω resistor; it actually carries 3.0 A and drops 12 V.\n(D) is wrong because 24 V ignores the 12 V drop across the series 4 Ω resistor before the current reaches the parallel branches."
  },
  {
   "id": "p2e4-17",
   "unit": 11,
   "setId": "p2e4-set2",
   "stem": "The 6 Ω resistor is removed from the circuit (leaving an open gap). What happens to the power dissipated in the 4 Ω resistor?",
   "choices": [
    "It increases, because the current is no longer divided between two resistors.",
    "It stays the same, because the 4 Ω resistor is not directly affected.",
    "It becomes zero, because the circuit is broken.",
    "It decreases, because the total resistance increases and the current decreases."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It decreases, because the total resistance increases and the current decreases. With the 6 Ω resistor removed, the circuit is the 4 Ω and 12 Ω resistors in series, so R_total = 16 Ω instead of 8.0 Ω. The current falls to I = 24/16 = 1.5 A from 3.0 A. The power in the 4 Ω resistor is P = I²R: it drops from (3.0)²(4) = 36 W to (1.5)²(4) = 9.0 W, a decrease by a factor of 4.\n\n(A) is wrong because the current through the 4 Ω resistor is the total current, which falls from 3.0 A to 1.5 A, so its power falls.\n(B) is wrong because the 4 Ω resistor carries the total circuit current, so any change in total resistance changes its current and power.\n(C) is wrong because the circuit is still complete through the 12 Ω resistor, so current still flows through the 4 Ω resistor."
  },
  {
   "id": "p2e4-18",
   "unit": 14,
   "stem": "Which statement about the standing waves in an air column in a pipe that is open at both ends is correct?",
   "choices": [
    "There are displacement antinodes at both ends of the pipe.",
    "There is a displacement node at each end of the pipe.",
    "There is a displacement node at one end and an antinode at the other end.",
    "Only the fundamental can exist in the pipe."
   ],
   "correct": 0,
   "explanation": "Correct: (A) There are displacement antinodes at both ends of the pipe. At an open end the air is free to move, so a displacement antinode forms there. A pipe open at both ends therefore has displacement antinodes at both ends, with the fundamental fitting half a wavelength in the pipe: L = λ/2. Its resonant frequencies are f = nv/(2L) for n = 1, 2, 3, …, so all harmonics are present.\n\n(B) is wrong because displacement nodes occur at closed ends, where the air cannot move, not at open ends.\n(C) is wrong because a node at one end and an antinode at the other describes a pipe closed at one end, not one open at both ends.\n(D) is wrong because an open-open pipe supports every harmonic, f = nv/(2L) for n = 1, 2, 3, …, not only the fundamental."
  },
  {
   "id": "p2e4-19",
   "unit": 12,
   "stem": "The diagram shows a negative charge moving downward on the page through a region where the magnetic field points into the page. Which way does the magnetic force push the charge at this instant?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 268\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"220\" fill=\"none\" stroke=\"#E6E4DC\" stroke-width=\"1.5\"/><line x1=\"54\" y1=\"49\" x2=\"66\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"61\" x2=\"66\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"101\" x2=\"66\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"113\" x2=\"66\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"153\" x2=\"66\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"165\" x2=\"66\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"205\" x2=\"66\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"217\" x2=\"66\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"49\" x2=\"122\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"61\" x2=\"122\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"101\" x2=\"122\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"113\" x2=\"122\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"153\" x2=\"122\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"165\" x2=\"122\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"205\" x2=\"122\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"217\" x2=\"122\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"49\" x2=\"178\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"61\" x2=\"178\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"101\" x2=\"178\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"113\" x2=\"178\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"153\" x2=\"178\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"165\" x2=\"178\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"205\" x2=\"178\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"217\" x2=\"178\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"49\" x2=\"234\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"61\" x2=\"234\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"101\" x2=\"234\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"113\" x2=\"234\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"153\" x2=\"234\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"165\" x2=\"234\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"205\" x2=\"234\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"217\" x2=\"234\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"49\" x2=\"290\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"61\" x2=\"290\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"101\" x2=\"290\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"113\" x2=\"290\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"153\" x2=\"290\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"165\" x2=\"290\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"205\" x2=\"290\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"217\" x2=\"290\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"49\" x2=\"346\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"61\" x2=\"346\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"101\" x2=\"346\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"113\" x2=\"346\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"153\" x2=\"346\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"165\" x2=\"346\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"205\" x2=\"346\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"217\" x2=\"346\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><circle cx=\"200\" cy=\"130\" r=\"13\" fill=\"#CFE0EA\" stroke=\"#3F7A94\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">−</text><line x1=\"200\" y1=\"143\" x2=\"200\" y2=\"202\" stroke=\"#2E332E\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"200,202 195.63,192.21 204.37,192.21\" fill=\"#2E332E\"/><text x=\"200\" y=\"220\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\" font-style=\"italic\">v</text><text x=\"200\" y=\"256\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">× = magnetic field directed into the page</text></svg>",
     "alt": "A grid of crosses showing a magnetic field directed into the page. A negative charge in the middle moves toward the bottom of the page with a velocity arrow pointing down.",
     "maxWidth": 420
    }
   ],
   "choices": [
    "Toward the right side of the page",
    "Toward the top of the page",
    "Out of the page",
    "Toward the left side of the page"
   ],
   "correct": 3,
   "explanation": "Correct: (D) Toward the left side of the page. For a positive charge the force is F = qv × B. The velocity points down the page (−y) and B points into the page (−z): (−ŷ) × (−ẑ) = ŷ × ẑ = +x̂, toward the right. The charge is negative, so the force is reversed and points toward the left side of the page. The force is perpendicular to both v and B, as the cross product requires.\n\n(A) is wrong because toward the right is the direction for a positive charge; the negative charge reverses it.\n(B) is wrong because the magnetic force must be perpendicular to the velocity, which points down, so it cannot point up or down the page.\n(C) is wrong because the magnetic force must be perpendicular to B, which points into the page, so it cannot point out of the page."
  },
  {
   "id": "p2e4-20",
   "unit": 13,
   "stem": "A diverging lens has a focal length of −20 cm. An object is placed 20 cm from the lens. At what position is the image formed?",
   "choices": [
    "10 cm in front of the lens",
    "20 cm in front of the lens",
    "10 cm behind the lens",
    "20 cm behind the lens"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 10 cm in front of the lens. Use the thin-lens equation with f = −20 cm for a diverging lens: 1/d_i = 1/f − 1/d_o = −1/20 − 1/20 = −2/20 = −1/10, so d_i = −10 cm. The negative image distance means the image is virtual and on the same side as the object, in front of the lens, 10 cm from it. A diverging lens always forms a virtual, upright, reduced image of a real object (m = +0.50 here).\n\n(B) is wrong because 20 cm in front of the lens is the object distance itself; an object at |f| does not form an image there.\n(C) is wrong because 10 cm behind the lens would be a real image, but the negative d_i shows the image is virtual and in front.\n(D) is wrong because 20 cm behind the lens would be a real image, which a diverging lens never forms for a real object; it just reuses |f| as d_i."
  },
  {
   "id": "p2e4-21",
   "unit": 14,
   "setId": "p2e4-set3",
   "stem": "What is the frequency of the wave?",
   "choices": [
    "0.40 Hz",
    "2.5 Hz",
    "5.0 Hz",
    "10 Hz"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2.5 Hz. The graph shows displacement against time for a single point on the rope, so the time between successive peaks is the period. Peaks occur at 0.10 s, 0.50 s and 0.90 s, so T = 0.40 s (three full cycles in 1.2 s). The frequency is f = 1/T = 1/(0.40 s) = 2.5 Hz.\n\n(A) is wrong because 0.40 is the period in seconds read from the graph, not the frequency in hertz.\n(C) is wrong because 5.0 Hz counts a half cycle (0.20 s, zero crossing to zero crossing) as the full period.\n(D) is wrong because 10 Hz is 1/(0.10 s), the time from t = 0 to the first peak, which is only a quarter of a cycle."
  },
  {
   "id": "p2e4-22",
   "unit": 14,
   "setId": "p2e4-set3",
   "stem": "What is the speed of the wave?",
   "choices": [
    "0.40 m/s",
    "1.0 m/s",
    "2.5 m/s",
    "5.0 m/s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.5 m/s. The wave speed is v = fλ. From the graph the frequency is f = 1/T = 1/(0.40 s) = 2.5 Hz, and the stem gives λ = 1.0 m. So v = (2.5 Hz)(1.0 m) = 2.5 m/s. Equivalently, v = λ/T = (1.0 m)/(0.40 s) = 2.5 m/s: the wave advances one wavelength per period.\n\n(A) is wrong because 0.40 m/s multiplies the wavelength by the period (λT) instead of dividing by it.\n(B) is wrong because 1.0 m/s is the wavelength's numerical value; a speed requires combining it with the frequency.\n(D) is wrong because 5.0 m/s uses a frequency of 5.0 Hz, counting half a cycle on the graph as the full period."
  },
  {
   "id": "p2e4-23",
   "unit": 9,
   "stem": "A heat engine does 300 J of work during each cycle while it exhausts 700 J of heat to the cold reservoir. How much heat does the engine absorb from the hot reservoir during each cycle?",
   "choices": [
    "400 J",
    "700 J",
    "1000 J",
    "2300 J"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1000 J. Over one complete cycle the working substance returns to its initial state, so ΔU = 0 and energy conservation gives Q_H = W + Q_C. Thus Q_H = 300 J + 700 J = 1000 J absorbed from the hot reservoir each cycle. The efficiency is e = W/Q_H = 300/1000 = 30%.\n\n(A) is wrong because 400 J is Q_C − W, subtracting the work instead of adding it to the exhaust heat.\n(B) is wrong because 700 J is the heat exhausted to the cold reservoir, not the heat absorbed from the hot reservoir.\n(D) is wrong because 2300 J violates energy conservation: only 300 + 700 = 1000 J leaves the engine as work and exhaust each cycle."
  },
  {
   "id": "p2e4-24",
   "unit": 13,
   "setId": "p2e4-set4",
   "stem": "What is the image distance?",
   "choices": [
    "12 cm",
    "24 cm",
    "36 cm",
    "48 cm"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 24 cm. The thin-lens equation gives 1/d_i = 1/f − 1/d_o = 1/12 − 1/24 = 2/24 − 1/24 = 1/24, so d_i = 24 cm. The object sits at 2f, and the ray diagram confirms that the parallel ray and the central ray cross at 2F on the far side. An object at 2f always forms an image at 2f.\n\n(A) is wrong because 12 cm is the focal length, where the image forms only for an object very far away.\n(C) is wrong because 36 cm would correspond to an object between f and 2f (d_o = 18 cm), not at 2f.\n(D) is wrong because 48 cm would correspond to an object at d_o = 16 cm, between f and 2f, closer to the lens."
  },
  {
   "id": "p2e4-25",
   "unit": 13,
   "setId": "p2e4-set4",
   "stem": "How can the image formed by this lens be described?",
   "choices": [
    "It is real, inverted, and larger than the object.",
    "It is virtual, upright, and the same size as the object.",
    "It is real, upright, and the same size as the object.",
    "It is real, inverted, and the same size as the object."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It is real, inverted, and the same size as the object. The magnification is m = −d_i/d_o = −24/24 = −1. The negative sign means the image is inverted, and |m| = 1 means it is the same size as the object. The image distance is positive, so the light actually converges there and the image is real. The ray diagram shows exactly this: an inverted arrow of equal height at 2F.\n\n(A) is wrong because the image is the same size, not larger, because |m| = d_i/d_o = 24/24 = 1.\n(B) is wrong because a converging lens forms a virtual, upright image only when the object is inside the focal length, not at 2f.\n(C) is wrong because a real image formed by a single converging lens is always inverted, with a negative magnification."
  },
  {
   "id": "p2e4-26",
   "unit": 10,
   "stem": "A 2.0 μC charge is moved through a potential difference of 50 V. How much work is done on the charge by the electric field?",
   "choices": [
    "1.0 × 10⁻⁶ J",
    "1.0 × 10⁻⁴ J",
    "2.5 × 10⁻⁴ J",
    "2.5 × 10⁷ J"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.0 × 10⁻⁴ J. The work done by the electric field when a charge moves through a potential difference has magnitude W = qΔV. Here W = (2.0 × 10⁻⁶ C)(50 V) = 1.0 × 10⁻⁴ J, since one volt is one joule per coulomb. Remember to convert microcoulombs to coulombs (1 μC = 10⁻⁶ C) before multiplying.\n\n(A) is wrong because 1.0 × 10⁻⁶ J is 100 times too small, as if the potential difference were 0.50 V instead of 50 V.\n(C) is wrong because 2.5 × 10⁻⁴ J is not qΔV for these values; multiplying 2.0 × 10⁻⁶ C by 50 V gives 1.0 × 10⁻⁴ J, so (C) is 2.5 times too large.\n(D) is wrong because 2.5 × 10⁷ J divides the potential difference by the charge (50/2.0 × 10⁻⁶) instead of multiplying them."
  },
  {
   "id": "p2e4-27",
   "unit": 15,
   "setId": "p2e4-set5",
   "stem": "What is the threshold frequency of the metal?",
   "choices": [
    "7.5 × 10¹⁴ Hz",
    "6.0 × 10¹⁴ Hz",
    "3.0 × 10¹⁴ Hz",
    "4.5 × 10¹⁴ Hz"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 4.5 × 10¹⁴ Hz. The photoelectric equation eV_stop = hf − φ makes the stopping potential a straight line in f. From the table, V rises 0.40 V for every 1.0 × 10¹⁴ Hz (0.60, 1.00, 1.40, 1.80 V). The threshold is where V = 0: going down from 6.0 × 10¹⁴ Hz, the 0.60 V needs (0.60/0.40) × 10¹⁴ = 1.5 × 10¹⁴ Hz more, so f₀ = 6.0 − 1.5 = 4.5 × 10¹⁴ Hz.\n\n(A) is wrong because 7.5 × 10¹⁴ Hz lies inside the data, where the stopping potential is about 1.2 V, so electrons are clearly being emitted.\n(B) is wrong because 6.0 × 10¹⁴ Hz is only the lowest frequency tested; electrons are still emitted there with a 0.60 V stopping potential.\n(C) is wrong because 3.0 × 10¹⁴ Hz extrapolates past the zero; the line V = 0.40(f − 4.5) gives a negative stopping potential there."
  },
  {
   "id": "p2e4-28",
   "unit": 15,
   "setId": "p2e4-set5",
   "stem": "Use the data to estimate the value of Planck's constant.",
   "choices": [
    "2.5 × 10⁻²⁰ J·s",
    "6.4 × 10⁻³² J·s",
    "6.4 × 10⁻³⁴ J·s",
    "6.4 × 10⁻³⁶ J·s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6.4 × 10⁻³⁴ J·s. From eV_stop = hf − φ, a graph of V_stop against f is a straight line with slope h/e. The data give slope = (1.80 − 0.60 V)/(3.0 × 10¹⁴ Hz) = 4.0 × 10⁻¹⁵ V·s. Then h = e × slope = (1.6 × 10⁻¹⁹ C)(4.0 × 10⁻¹⁵ V·s) = 6.4 × 10⁻³⁴ J·s, close to the accepted 6.63 × 10⁻³⁴ J·s.\n\n(A) is wrong because 2.5 × 10⁻²⁰ J·s is nowhere near the order of magnitude of Planck's constant and does not equal e times the slope.\n(B) is wrong because 6.4 × 10⁻³² J·s is 100 times too large, a power-of-ten slip such as reading the frequencies as 10¹² Hz.\n(D) is wrong because 6.4 × 10⁻³⁶ J·s is 100 times too small, a power-of-ten slip such as reading the frequencies as 10¹⁶ Hz."
  },
  {
   "id": "p2e4-29",
   "unit": 12,
   "stem": "A generator coil has 100 turns, each with an area of 0.020 m². The coil rotates at an angular speed of 50 rad/s in a uniform magnetic field of 0.50 T. What is the maximum emf the generator produces?",
   "choices": [
    "500 V",
    "50 V",
    "25 V",
    "5.0 V"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 50 V. For a coil of N turns rotating at angular speed ω in a uniform field, the flux is Φ = NBA cos ωt, so the emf is 𝓔 = NBAω sin ωt, with maximum 𝓔_max = NBAω. Here 𝓔_max = (100)(0.50 T)(0.020 m²)(50 rad/s) = 50 V. Each turn contributes 0.50 V, and the 100 turns add in series.\n\n(A) is wrong because 500 V is ten times too large, a power-of-ten slip in multiplying NBAω.\n(C) is wrong because 25 V is half the maximum, as if a factor of 1/2 were included; the peak of sin ωt is 1.\n(D) is wrong because 5.0 V is ten times too small, a power-of-ten slip such as using 10 turns instead of 100."
  },
  {
   "id": "p2e4-30",
   "unit": 10,
   "stem": "A 5.0 μF capacitor is connected across a 12 V battery. How much charge is stored on each plate of the capacitor?",
   "choices": [
    "2.4 μC",
    "17 μC",
    "60 μC",
    "600 μC"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 60 μC. The charge stored on each plate of a capacitor is Q = CV. Here Q = (5.0 × 10⁻⁶ F)(12 V) = 6.0 × 10⁻⁵ C = 60 μC. One plate holds +60 μC and the other −60 μC; the capacitor is neutral overall, but each plate carries this magnitude of charge.\n\n(A) is wrong because 2.4 μC is 12/5.0, dividing the voltage by the capacitance instead of multiplying them.\n(B) is wrong because 17 μC adds the capacitance and voltage (5.0 + 12), which has no physical meaning.\n(D) is wrong because 600 μC is ten times too large, a decimal slip in multiplying 5.0 μF by 12 V."
  },
  {
   "id": "p2e4-31",
   "unit": 13,
   "stem": "A swimmer looks straight down at a coin on the bottom of a pool. How does the apparent depth of the coin compare with its actual depth?",
   "choices": [
    "The coin appears shallower than it really is, because the light bends away from the normal as it leaves the water.",
    "The coin appears deeper than it really is, because the light bends toward the normal as it leaves the water.",
    "The coin appears at its actual depth, because the light travels straight to the eye.",
    "The coin appears shallower, because the water magnifies the coin."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The coin appears shallower than it really is, because the light bends away from the normal as it leaves the water. Light from the coin travels from water (n = 1.33) into air (n = 1.00). Entering a lower-index medium, the rays bend away from the normal. The eye traces the refracted rays back in straight lines, so they appear to come from a point above the coin. For near-vertical viewing the apparent depth is about d/n = d/1.33, roughly three-quarters of the real depth.\n\n(B) is wrong because light leaving water for air bends away from the normal, not toward it, and the coin appears shallower, not deeper.\n(C) is wrong because light crossing the water-air surface refracts, so the rays do not travel straight from the coin to the eye.\n(D) is wrong because the coin does appear shallower, but the cause is refraction at the surface, not magnification by the water."
  },
  {
   "id": "p2e4-32",
   "unit": 14,
   "stem": "A string has a tension of 100 N and a linear mass density of 0.010 kg/m. What is the speed of transverse waves on the string?",
   "choices": [
    "10 m/s",
    "32 m/s",
    "100 m/s",
    "1000 m/s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 100 m/s. The speed of a transverse wave on a string depends on the tension and the linear mass density: v = √(T/μ). Here v = √[(100 N)/(0.010 kg/m)] = √(10 000 m²/s²) = 100 m/s. A tighter string or a lighter string carries waves faster, because a greater restoring force or less inertia per meter speeds up the disturbance.\n\n(A) is wrong because 10 m/s is √100, the square root of the tension alone, which ignores dividing by the linear mass density.\n(B) is wrong because 32 m/s is √1000, which uses μ = 0.10 kg/m, a decimal slip in the linear mass density.\n(D) is wrong because 1000 m/s would require T/μ = 1.0 × 10⁶ m²/s², 100 times the actual value of 1.0 × 10⁴ m²/s²."
  },
  {
   "id": "p2e4-33",
   "unit": 10,
   "stem": "A positive point charge is placed at the center of a neutral, hollow conducting spherical shell. Which statement describes the charges on the shell in electrostatic equilibrium?",
   "choices": [
    "The inner surface has a positive induced charge and the outer surface has an equal negative induced charge.",
    "Both surfaces remain neutral, because the shell is neutral overall.",
    "The shell becomes positively charged on both surfaces.",
    "The inner surface has a negative induced charge and the outer surface has an equal positive induced charge."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The inner surface has a negative induced charge and the outer surface has an equal positive induced charge. In electrostatic equilibrium the field inside the conducting material must be zero. The positive charge at the center attracts electrons, so an equal negative charge (−q) gathers on the inner surface, and a Gaussian surface inside the metal then encloses zero net charge. Because the shell is neutral overall, the electrons leave behind an equal positive charge (+q) on the outer surface.\n\n(A) is wrong because the positive central charge attracts negative charge to the inner surface, not positive charge.\n(B) is wrong because if both surfaces stayed neutral, the central charge's field would penetrate the metal, which cannot happen in equilibrium.\n(C) is wrong because the shell is neutral, so no net charge can appear; the inner surface must be negative to cancel the field."
  },
  {
   "id": "p2e4-34",
   "unit": 15,
   "stem": "Light with a photon energy of 3.5 eV strikes a metal surface that has a work function of 2.0 eV. What is the maximum kinetic energy of the ejected electrons?",
   "choices": [
    "0.57 eV",
    "1.5 eV",
    "2.0 eV",
    "5.5 eV"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 1.5 eV. Einstein's photoelectric equation says each photon's energy goes first to freeing the electron (the work function φ) and the rest becomes kinetic energy: K_max = hf − φ. Here K_max = 3.5 eV − 2.0 eV = 1.5 eV. Electrons that lose additional energy inside the metal leave with less, so 1.5 eV is the maximum.\n\n(A) is wrong because 0.57 eV is the ratio 2.0/3.5, but the photoelectric equation subtracts the work function rather than dividing.\n(C) is wrong because 2.0 eV is the work function, the minimum energy needed to free an electron, not its leftover kinetic energy.\n(D) is wrong because 5.5 eV adds the work function to the photon energy instead of subtracting it."
  },
  {
   "id": "p2e4-35",
   "unit": 9,
   "stem": "An ideal gas expands at a constant pressure of 1.0 × 10⁵ Pa from a volume of 2.0 L to a volume of 5.0 L while absorbing 600 J of heat. What is the change in the internal energy of the gas?",
   "choices": [
    "+900 J",
    "+600 J",
    "+300 J",
    "−300 J"
   ],
   "correct": 2,
   "explanation": "Correct: (C) +300 J. At constant pressure the work done by the gas is W = PΔV = (1.0 × 10⁵ Pa)(5.0 − 2.0) × 10⁻³ m³ = 300 J (1 L = 10⁻³ m³). The first law, written for work done on the gas, is ΔU = Q + W_on, and W_on = −300 J because the gas expands. So ΔU = 600 J − 300 J = +300 J.\n\n(A) is wrong because +900 J adds the work done by the gas to the heat, but energy spent pushing the piston leaves the gas.\n(B) is wrong because +600 J ignores the 300 J of work the expanding gas does on its surroundings.\n(D) is wrong because −300 J reverses the sign, taking W − Q instead of Q − W_by; the gas gains more energy than it loses."
  },
  {
   "id": "p2e4-36",
   "unit": 10,
   "stem": "The capacitance of an air-filled parallel-plate capacitor is C. A dielectric material with a dielectric constant of 4.0 is then inserted to fill the space between the plates. What is the new capacitance?",
   "choices": [
    "C/4",
    "C",
    "2C",
    "4C"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 4C. Filling the space between the plates with a dielectric multiplies the capacitance by the dielectric constant: C = κε₀A/d. With κ = 4.0, the new capacitance is C_new = 4.0C. Physically, the dielectric's polarization reduces the field between the plates for a given charge, so more charge can be stored at the same voltage.\n\n(A) is wrong because C/4 divides by the dielectric constant, but a dielectric increases capacitance rather than decreasing it.\n(B) is wrong because the dielectric's polarization weakens the field between the plates, so the same voltage stores more charge; with C = κε₀A/d, going from κ = 1 to κ = 4.0 changes the capacitance.\n(C) is wrong because 2C would correspond to κ = 2.0, not the given dielectric constant of 4.0."
  },
  {
   "id": "p2e4-37",
   "unit": 11,
   "stem": "Household appliances are connected in parallel across the outlets of a home. What is the main advantage of this arrangement?",
   "choices": [
    "Each appliance operates at the full line voltage and can be switched on or off independently of the others.",
    "The total current in the wiring is less than it would be if the appliances were in series.",
    "Each appliance receives a smaller share of the voltage, which keeps the wiring cooler.",
    "All of the appliances always carry the same current."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Each appliance operates at the full line voltage and can be switched on or off independently of the others. In a parallel arrangement each appliance is connected directly across the supply, so each one receives the full line voltage (about 120 V) it is designed for and draws its own current. Switching one appliance off opens only its own branch, leaving the others unaffected. In series, the voltage would be shared, and turning one off would cut power to all of them.\n\n(B) is wrong because parallel wiring draws more total current than series wiring, because adding branches lowers the total resistance.\n(C) is wrong because in parallel each appliance gets the full line voltage, not a smaller share of it.\n(D) is wrong because in parallel the voltage is the same for each appliance, while each current depends on that appliance's resistance."
  },
  {
   "id": "p2e4-38",
   "unit": 15,
   "stem": "What is the magnitude of the momentum of a photon of light with a wavelength of 500 nm? (h = 6.63 × 10⁻³⁴ J·s)",
   "choices": [
    "1.3 × 10⁻²⁷ kg·m/s",
    "1.3 × 10⁻²⁵ kg·m/s",
    "4.0 × 10⁻²⁰ kg·m/s",
    "3.3 × 10⁻⁴⁰ kg·m/s"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 1.3 × 10⁻²⁷ kg·m/s. A photon's momentum is p = h/λ. With λ = 500 nm = 5.00 × 10⁻⁷ m, p = (6.63 × 10⁻³⁴ J·s)/(5.00 × 10⁻⁷ m) = 1.33 × 10⁻²⁷ kg·m/s, or 1.3 × 10⁻²⁷ kg·m/s to two significant figures. Converting nanometers to meters correctly (1 nm = 10⁻⁹ m) is the key step.\n\n(B) is wrong because 1.3 × 10⁻²⁵ kg·m/s uses 5 × 10⁻⁹ m for the wavelength, a power-of-ten slip in converting 500 nm.\n(C) is wrong because 4.0 × 10⁻²⁰ is about one-tenth of the photon's energy in joules (hc/λ = 4.0 × 10⁻¹⁹ J), not its momentum.\n(D) is wrong because 3.3 × 10⁻⁴⁰ kg·m/s multiplies h by λ instead of dividing h by λ."
  },
  {
   "id": "p2e4-39",
   "unit": 11,
   "stem": "A battery with an emf of 9.0 V and an internal resistance of 0.50 Ω delivers a current of 2.0 A to an external circuit. What is the potential difference across the battery's terminals?",
   "choices": [
    "1.0 V",
    "8.0 V",
    "9.0 V",
    "10 V"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 8.0 V. A real battery behaves like an ideal emf in series with its internal resistance. When current flows, part of the emf is lost across the internal resistance, so the terminal voltage is V = 𝓔 − Ir = 9.0 V − (2.0 A)(0.50 Ω) = 9.0 − 1.0 = 8.0 V. This is the voltage actually delivered to the external circuit.\n\n(A) is wrong because 1.0 V is the drop across the internal resistance (Ir), not the voltage across the terminals.\n(C) is wrong because 9.0 V is the emf, which equals the terminal voltage only when no current flows.\n(D) is wrong because 10 V adds the internal drop to the emf, which happens only when the battery is being charged."
  },
  {
   "id": "p2e4-40",
   "unit": 9,
   "stem": "When liquid water freezes in a freezer, the entropy of the water decreases. Why is this consistent with the second law of thermodynamics?",
   "choices": [
    "The heat released to the surroundings raises their entropy by more than the water's entropy falls.",
    "The second law applies only to gases and does not apply to liquids and solids.",
    "The water's entropy does not actually decrease, because its molecules become more ordered.",
    "The second law is violated, but only for a brief time while the water freezes."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The heat released to the surroundings raises their entropy by more than the water's entropy falls. The second law requires that the total entropy of an isolated system, here the water plus its surroundings, not decrease. Freezing releases latent heat Q to the colder surroundings. The surroundings gain entropy Q/T_surr, which is larger than the water's loss Q/T_water because T_surr is lower than 0 °C. So the total entropy increases even though the water's entropy falls.\n\n(B) is wrong because the second law applies to all systems and phases, including liquids and solids, not only to gases.\n(C) is wrong because the water's molecules do become more ordered, which is exactly what a decrease in its entropy means.\n(D) is wrong because the second law is never violated, even briefly; the surroundings' entropy gain always outweighs the water's loss."
  },
  {
   "id": "p2e4-41",
   "unit": 15,
   "stem": "In nuclear fusion, two light nuclei combine to form a heavier nucleus and energy is released. Which statement best explains why energy is released?",
   "choices": [
    "The product nucleus has more mass than the original nuclei, and the extra mass is converted to energy.",
    "The protons in the nuclei attract each other by the electric force, releasing energy as they combine.",
    "The neutrons in the nuclei are converted into protons, which releases energy.",
    "The binding energy per nucleon of the product nucleus is greater than that of the original nuclei, so the total mass decreases."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The binding energy per nucleon of the product nucleus is greater than that of the original nuclei, so the total mass decreases. For light nuclei, the binding energy per nucleon increases as nuclei get heavier, up to iron. Fusing two light nuclei produces a more tightly bound product, so its mass is less than the combined mass of the original nuclei. This mass defect Δm is released as energy E = Δmc², which is why fusion powers the Sun.\n\n(A) is wrong because the product nucleus has less mass than the reactants, not more; energy comes from the mass that disappears.\n(B) is wrong because protons repel each other electrically, so energy must be supplied to push the nuclei together, not released.\n(C) is wrong because converting neutrons to protons is beta decay, not fusion, and it does not explain the energy released in fusion."
  },
  {
   "id": "p2e4-42",
   "unit": 11,
   "stem": "A wire of resistance R is stretched uniformly to twice its original length. The volume of the wire stays the same. What is the new resistance of the wire?",
   "choices": [
    "R/2",
    "R",
    "2R",
    "4R"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 4R. The resistance of a wire is R = ρL/A. Stretching it to length 2L at constant volume (V = LA) halves its cross-sectional area to A/2. The new resistance is R_new = ρ(2L)/(A/2) = 4ρL/A = 4R. Both changes increase the resistance: the longer path and the narrower cross section each double it.\n\n(A) is wrong because R/2 has the effect backward; a longer, thinner wire has more resistance, not less.\n(B) is wrong because stretching changes both length and area, and both changes increase the resistance, so it cannot stay at R.\n(C) is wrong because 2R accounts for the doubled length but ignores the halved cross-sectional area at constant volume."
  }
 ],
 "sets": {
  "p2e4-set1": {
   "text": "A 0.10 kg sample of a substance, initially a solid at −20 °C, is heated at a constant rate. The graph shows the temperature of the sample as a function of the thermal energy added. Segment A is the warming of the solid, segment B is a phase change at constant temperature, and segment C is the warming of the liquid.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-40</text><line x1=\"64\" y1=\"240.5\" x2=\"496\" y2=\"240.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"244.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-20</text><line x1=\"64\" y1=\"209\" x2=\"496\" y2=\"209\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"213\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"177.5\" x2=\"496\" y2=\"177.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"181.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"114.5\" x2=\"496\" y2=\"114.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"118.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"83\" x2=\"496\" y2=\"83\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"87\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"51.5\" x2=\"496\" y2=\"51.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"55.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"118\" y1=\"272\" x2=\"118\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"118\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"172\" y1=\"272\" x2=\"172\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"172\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"226\" y1=\"272\" x2=\"226\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"226\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"334\" y1=\"272\" x2=\"334\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"334\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">50</text><line x1=\"388\" y1=\"272\" x2=\"388\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"388\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"442\" y1=\"272\" x2=\"442\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"442\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">70</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Thermal energy added (kJ)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Temperature (°C)</text><path d=\"M64 240.5L86.68 209L264.88 209L491.68 51.5\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"72.1\" y=\"260.98\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">A</text><text x=\"166.6\" y=\"193.25\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">B</text><text x=\"377.2\" y=\"111.35\" text-anchor=\"start\" font-size=\"15\" font-weight=\"400\" fill=\"#2E332E\">C</text></svg>",
     "alt": "A graph of temperature in degrees Celsius against thermal energy added in kilojoules. The temperature rises steeply from minus 20 to 0 over the first 4.2 kilojoules (segment A), stays flat at 0 degrees until 37.2 kilojoules (segment B), and then rises more gradually to 100 degrees at 79.2 kilojoules (segment C)."
    }
   ]
  },
  "p2e4-set2": {
   "text": "A 24 V battery with negligible internal resistance is connected to three resistors, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50 50L80 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M80 50L91.25 50L96.88 42L108.13 58L119.38 42L130.63 58L141.88 42L153.13 58L158.75 50L170 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"125\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">4 Ω</text><path d=\"M170 50L210 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"210\" cy=\"50\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M210 50L210 85\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M210 85L210 93.75L202 98.13L218 106.88L202 115.63L218 124.38L202 133.13L218 141.88L210 146.25L210 155\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"236\" y=\"123\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">12 Ω</text><path d=\"M210 155L210 205\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M210 50L360 50L360 85\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M360 85L360 93.75L352 98.13L368 106.88L352 115.63L368 124.38L352 133.13L368 141.88L360 146.25L360 155\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"386\" y=\"123\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">6 Ω</text><path d=\"M360 155L360 205\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"360\" cy=\"50\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M50 205L360 205\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"210\" cy=\"205\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M50 50L50 95\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"113\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"113\" x2=\"64\" y2=\"113\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"121\" x2=\"58\" y2=\"121\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"121\" x2=\"50\" y2=\"139\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M50 139L50 205\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"122\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">24 V</text></svg>",
     "alt": "A circuit with a 24 volt battery. A 4 ohm resistor is in series with the battery and is followed by a 12 ohm resistor and a 6 ohm resistor connected in parallel with each other."
    }
   ]
  },
  "p2e4-set3": {
   "text": "The graph shows the displacement of one point on a rope as a function of time as a transverse wave passes by. The wavelength of the wave is 1.0 m.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"242\" x2=\"496\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"246\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-6</text><line x1=\"64\" y1=\"186.5\" x2=\"496\" y2=\"186.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"190.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-3</text><line x1=\"64\" y1=\"131\" x2=\"496\" y2=\"131\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"135\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"75.5\" x2=\"496\" y2=\"75.5\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"79.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"242\" x2=\"64\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"20\" x2=\"136\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"136\" y1=\"242\" x2=\"136\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.2</text><line x1=\"208\" y1=\"20\" x2=\"208\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"242\" x2=\"208\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.4</text><line x1=\"280\" y1=\"20\" x2=\"280\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"242\" x2=\"280\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.6</text><line x1=\"352\" y1=\"20\" x2=\"352\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"352\" y1=\"242\" x2=\"352\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.8</text><line x1=\"424\" y1=\"20\" x2=\"424\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"242\" x2=\"424\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"496\" y1=\"20\" x2=\"496\" y2=\"242\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"496\" y1=\"242\" x2=\"496\" y2=\"247\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"261\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.2</text><line x1=\"64\" y1=\"242\" x2=\"496\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"242\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"290\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Time t (s)</text><text x=\"16\" y=\"131\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 131)\">Displacement y (mm)</text><path d=\"M64 131L66.7 120.13L69.4 109.41L72.1 98.98L74.8 89.01L77.5 79.61L80.2 70.93L82.9 63.08L85.6 56.17L88.3 50.29L91 45.54L93.7 41.97L96.4 39.64L99.1 38.57L101.8 38.79L104.5 40.28L107.2 43.03L109.9 47L112.6 52.13L115.3 58.36L118 65.59L120.7 73.73L123.4 82.67L126.1 92.27L128.8 102.42L131.5 112.95L134.2 123.74L136.9 134.63L139.6 145.47L142.3 156.11L145 166.4L147.7 176.2L150.4 185.37L153.1 193.79L155.8 201.34L158.5 207.91L161.2 213.42L163.9 217.78L166.6 220.94L169.3 222.86L172 223.5L174.7 222.86L177.4 220.94L180.1 217.78L182.8 213.42L185.5 207.91L188.2 201.34L190.9 193.79L193.6 185.37L196.3 176.2L199 166.4L201.7 156.11L204.4 145.47L207.1 134.63L209.8 123.74L212.5 112.95L215.2 102.42L217.9 92.27L220.6 82.67L223.3 73.73L226 65.59L228.7 58.36L231.4 52.13L234.1 47L236.8 43.03L239.5 40.28L242.2 38.79L244.9 38.57L247.6 39.64L250.3 41.97L253 45.54L255.7 50.29L258.4 56.17L261.1 63.08L263.8 70.93L266.5 79.61L269.2 89.01L271.9 98.98L274.6 109.41L277.3 120.13L280 131L282.7 141.87L285.4 152.59L288.1 163.02L290.8 172.99L293.5 182.39L296.2 191.07L298.9 198.92L301.6 205.83L304.3 211.71L307 216.46L309.7 220.03L312.4 222.36L315.1 223.43L317.8 223.21L320.5 221.72L323.2 218.97L325.9 215L328.6 209.87L331.3 203.64L334 196.41L336.7 188.27L339.4 179.33L342.1 169.73L344.8 159.58L347.5 149.05L350.2 138.26L352.9 127.37L355.6 116.53L358.3 105.89L361 95.6L363.7 85.8L366.4 76.63L369.1 68.21L371.8 60.66L374.5 54.09L377.2 48.58L379.9 44.22L382.6 41.06L385.3 39.14L388 38.5L390.7 39.14L393.4 41.06L396.1 44.22L398.8 48.58L401.5 54.09L404.2 60.66L406.9 68.21L409.6 76.63L412.3 85.8L415 95.6L417.7 105.89L420.4 116.53L423.1 127.37L425.8 138.26L428.5 149.05L431.2 159.58L433.9 169.73L436.6 179.33L439.3 188.27L442 196.41L444.7 203.64L447.4 209.87L450.1 215L452.8 218.97L455.5 221.72L458.2 223.21L460.9 223.43L463.6 222.36L466.3 220.03L469 216.46L471.7 211.71L474.4 205.83L477.1 198.92L479.8 191.07L482.5 182.39L485.2 172.99L487.9 163.02L490.6 152.59L493.3 141.87L496 131\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A sinusoidal graph of displacement in millimeters against time in seconds. The amplitude is 5 millimeters and the wave completes three full cycles in 1.2 seconds, with a period of 0.4 seconds."
    }
   ]
  },
  "p2e4-set4": {
   "text": "An object is placed 24 cm from a thin converging lens that has a focal length of 12 cm, as shown. (The vertical scale of the diagram is exaggerated.)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"140\" x2=\"540\" y2=\"140\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"62\" x2=\"280\" y2=\"218\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M272 70L280 62L288 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M272 210L280 218L288 210\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"220\" y1=\"135\" x2=\"220\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"220\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"340\" y1=\"135\" x2=\"340\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"340\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"160\" y1=\"135\" x2=\"160\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"160\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"400\" y1=\"135\" x2=\"400\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"400\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"160\" y1=\"140\" x2=\"160\" y2=\"104\" stroke=\"#3F7A94\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"160,104 164.73,114.59 155.27,114.59\" fill=\"#3F7A94\"/><line x1=\"160\" y1=\"104\" x2=\"280\" y2=\"104\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"104\" x2=\"536\" y2=\"257.6\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"104\" x2=\"536\" y2=\"216.8\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"140\" x2=\"400\" y2=\"176\" stroke=\"#6E9A5E\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"400,176 395.27,165.41 404.73,165.41\" fill=\"#6E9A5E\"/></svg>",
     "alt": "A ray diagram for a converging lens with the object at twice the focal length from the lens. Two rays from the arrow tip, one parallel to the axis and one through the lens center, meet at twice the focal length on the other side, forming an inverted image the same size as the object."
    }
   ]
  },
  "p2e4-set5": {
   "text": "In a photoelectric experiment, light of several different frequencies is incident on a metal surface. For each frequency, the stopping potential (the potential difference that just stops the most energetic ejected electrons) is measured. The data are shown in the table. (e = 1.6 × 10⁻¹⁹ C)",
   "figures": [
    {
     "table": {
      "headers": [
       "Frequency (10¹⁴ Hz)",
       "Stopping potential (V)"
      ],
      "rows": [
       [
        "6.0",
        "0.60"
       ],
       [
        "7.0",
        "1.00"
       ],
       [
        "8.0",
        "1.40"
       ],
       [
        "9.0",
        "1.80"
       ]
      ]
     }
    }
   ]
  }
 }
};

export default EXAM;
