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
   "explanation": "The temperature is constant, so the average kinetic energy and the typical speed of the molecules do not change. In a smaller volume each molecule travels a shorter distance between wall collisions, so collisions with the walls are more frequent and the pressure (average force per area) increases."
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
   "explanation": "The period of circular motion is T = 2πr/v. With r = mv/(qB), T = 2πm/(qB) = 2π(1.67 × 10⁻²⁷)/((1.6 × 10⁻¹⁹)(0.50)) ≈ 1.3 × 10⁻⁷ s, independent of the proton's speed."
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
   "explanation": "Electric field is force per unit charge, E = F/q, with units of newtons per coulomb (N/C), which are equivalent to volts per meter (V/m) since E = −ΔV/Δx. Joules per coulomb is the unit of potential (volts), not field."
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
   "explanation": "The radius of the path is r = mv/(qB). For the same charge, speed, and field, the radius is proportional to the mass, so the heavier ion follows a circle with a larger radius."
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
   "explanation": "The energy used is (1.2 kW)(2.5 h) = 3.0 kWh. The cost is (3.0 kWh)($0.10/kWh) = $0.30."
  },
  {
   "id": "p2e4-6",
   "unit": 13,
   "stem": "White light passes through a glass prism and spreads into a spectrum of colors. Which statement explains why violet light is bent more than red light?",
   "choices": [
    "Violet light has a lower frequency than red light.",
    "Violet light travels faster in glass than red light does.",
    "The prism adds energy to the violet light.",
    "The index of refraction of glass is greater for violet light than for red light."
   ],
   "correct": 3,
   "explanation": "The index of refraction of glass depends on wavelength (dispersion); it is larger for the shorter wavelengths of violet light. A larger index means the light slows more in glass and bends more at the surface. Violet light has a higher frequency, not a lower one, and travels more slowly in glass than red light."
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
   "explanation": "The area of the loop is πr² = π(0.10)² = 0.0314 m². The magnitude of the average emf is |ε| = AΔB/Δt = (0.0314)(0.20)/(0.050) ≈ 0.126 V ≈ 0.13 V."
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
   "explanation": "At constant temperature, PV is constant (Boyle's law): P₂ = P₁V₁/V₂ = (2.0 × 10⁵)(3.0)/(1.0) = 6.0 × 10⁵ Pa. Decreasing the volume by a factor of 3 increases the pressure by the same factor."
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
   "explanation": "Snell's law gives (1.5)(sin 40°) = (1.33) sin θ₂, so sin θ₂ = (1.5)(0.643)/1.33 = 0.725 and θ₂ ≈ 46°. The light bends away from the normal because it enters the medium with the lower index of refraction."
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
   "explanation": "The magnetic force on a moving charge is always perpendicular to its velocity, so it does no work on the particle (W = Fd cos 90° = 0). The force changes only the direction of the velocity, not its magnitude, so the speed and kinetic energy are constant."
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
   "explanation": "The melting occurs during the flat segment B, from 4.2 kJ to 37.2 kJ of energy added, so the energy needed is 37.2 − 4.2 = 33 kJ. The value 37.2 kJ is the total energy added from the start through the end of melting."
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
   "explanation": "The specific heat is c = Q/(mΔT), so a smaller temperature rise for a given amount of energy means a greater specific heat. In segment C the line is less steep than in segment A, so the liquid has the larger specific heat. Segment B involves a phase change at constant temperature, where specific heat does not apply."
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
   "explanation": "For a point source, the intensity varies as 1/r². Doubling the distance reduces the intensity by a factor of 4: (8.0 × 10⁻⁴)/4 = 2.0 × 10⁻⁴ W/m². 4.0 × 10⁻⁴ W/m² results from assuming an inverse (rather than inverse-square) relationship."
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
   "explanation": "The charge at x = 0 is 0.10 m away and pushes the test charge to the right with F₁ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.10)² = 1.8 N. The charge at x = 0.40 m is 0.30 m away and pushes it to the left with F₂ = 0.20 N. The net force is 1.8 − 0.20 = 1.6 N to the right. Adding the magnitudes gives 2.0 N, which ignores that the forces point in opposite directions."
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
   "explanation": "The 12 Ω and 6 Ω resistors in parallel are equivalent to (12)(6)/(12 + 6) = 4.0 Ω. In series with the 4 Ω resistor, the total resistance is 8.0 Ω, so I = 24/8.0 = 3.0 A."
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
   "explanation": "The 4 Ω resistor carries the full 3.0 A, so the potential difference across it is 12 V. That leaves 24 − 12 = 12 V across the parallel combination, so the 12 Ω resistor has 12 V across it."
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
   "explanation": "Removing the 6 Ω branch leaves only the 12 Ω resistor in series with the 4 Ω resistor, so the total resistance rises from 8.0 Ω to 16 Ω and the current falls from 3.0 A to 1.5 A. The power in the 4 Ω resistor, P = I²R, drops from 36 W to 9 W. The circuit is not broken, because the 12 Ω resistor still provides a path."
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
   "explanation": "At an open end the air is free to move, so there is a displacement antinode there. A pipe open at both ends has antinodes at both ends, and its resonant frequencies are f = nv/(2L) for n = 1, 2, 3, … A pipe closed at one end has a node at the closed end."
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
   "explanation": "For a positive charge, F = qv × B with v pointing down (−y) and B into the page (−z): (−y) × (−z) = y × z = +x, toward the right. The charge is negative, so the force is reversed and points toward the left side of the page."
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
   "explanation": "The lens equation gives 1/d_i = 1/f − 1/d_o = −1/20 − 1/20 = −1/10, so d_i = −10 cm. The negative sign means the image is virtual and on the same side of the lens as the object, 10 cm from the lens."
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
   "explanation": "The graph shows one full cycle every 0.40 s, so the period is T = 0.40 s and the frequency is f = 1/T = 2.5 Hz. (0.40 is the period in seconds.)"
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
   "explanation": "v = fλ = (2.5 Hz)(1.0 m) = 2.5 m/s."
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
   "explanation": "Energy conservation for one cycle gives Q_H = W + Q_C = 300 + 700 = 1000 J. (The efficiency of this engine is 300/1000 = 30%.)"
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
   "explanation": "1/d_i = 1/f − 1/d_o = 1/12 − 1/24 = 1/24, so d_i = 24 cm. When the object is at twice the focal length, the image is also at twice the focal length."
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
   "explanation": "The magnification is m = −d_i/d_o = −24/24 = −1. The negative sign means inverted, and the magnitude of 1 means the same size. The image distance is positive, so the image is real."
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
   "explanation": "The work done by the field is W = qΔV = (2.0 × 10⁻⁶ C)(50 V) = 1.0 × 10⁻⁴ J. The value 2.5 × 10⁷ J results from dividing the potential difference by the charge instead of multiplying."
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
   "explanation": "The stopping potential rises by 0.40 V for each 1.0 × 10¹⁴ Hz, so V = 0.40(f − f₀) with f in units of 10¹⁴ Hz. At f = 6.0, V = 0.60 V, which gives f₀ = 6.0 − 0.60/0.40 = 4.5 × 10¹⁴ Hz, the frequency at which the stopping potential would be zero."
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
   "explanation": "The photoelectric equation gives eV = hf − φ, so a graph of V against f has a slope of h/e. The slope is (0.40 V)/(1.0 × 10¹⁴ Hz) = 4.0 × 10⁻¹⁵ V·s, so h = e × slope = (1.6 × 10⁻¹⁹)(4.0 × 10⁻¹⁵) = 6.4 × 10⁻³⁴ J·s."
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
   "explanation": "The maximum emf is ε_max = NBAω = (100)(0.50)(0.020)(50) = 50 V."
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
   "explanation": "Q = CV = (5.0 μF)(12 V) = 60 μC. The value 2.4 μC results from dividing C by V."
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
   "explanation": "Light from the coin refracts as it passes from water into air. Since air has the lower index of refraction, the rays bend away from the normal, and the eye traces them back to a point above the actual location. The coin therefore appears to be at a shallower depth."
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
   "explanation": "The wave speed on a string is v = √(T/μ) = √(100/0.010) = √(10,000) = 100 m/s."
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
   "explanation": "The electric field inside the conducting material must be zero. The positive charge at the center therefore attracts an equal negative charge to the inner surface, which cancels the field in the metal. Because the shell is neutral overall, an equal positive charge appears on the outer surface."
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
   "explanation": "By the photoelectric equation, K_max = hf − φ = 3.5 − 2.0 = 1.5 eV. 5.5 eV results from adding the work function instead of subtracting it."
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
   "explanation": "The work done by the gas is W = PΔV = (1.0 × 10⁵)(3.0 × 10⁻³) = 300 J. By the first law, ΔU = Q − W_by = 600 − 300 = +300 J. +900 J results from adding the work instead of subtracting it."
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
   "explanation": "A dielectric multiplies the capacitance by its dielectric constant κ: C_new = κC = 4.0C."
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
   "explanation": "In parallel, each appliance is connected directly across the supply, so each gets the full voltage and carries its own current; turning one off does not affect the others. In series, the voltage would be divided among the appliances and switching one off would break the circuit for all of them."
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
   "explanation": "The momentum of a photon is p = h/λ = (6.63 × 10⁻³⁴)/(500 × 10⁻⁹) = 1.3 × 10⁻²⁷ kg·m/s."
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
   "explanation": "The terminal voltage is the emf minus the potential drop across the internal resistance: V = ε − Ir = 9.0 − (2.0)(0.50) = 8.0 V."
  },
  {
   "id": "p2e4-40",
   "unit": 9,
   "stem": "When liquid water freezes in a freezer, the entropy of the water decreases. Why is this consistent with the second law of thermodynamics?",
   "choices": [
    "The heat released to the surroundings increases the entropy of the surroundings by more than the water's entropy decreases.",
    "The second law applies only to gases, not to liquids and solids.",
    "The water's entropy does not actually decrease, because the molecules become more ordered.",
    "The second law is violated, but only briefly while the water freezes."
   ],
   "correct": 0,
   "explanation": "The second law requires the total entropy of an isolated system (here, the water plus its surroundings) not to decrease. As the water freezes, it releases heat to the colder surroundings, increasing their entropy by more than the water's entropy falls. The total entropy therefore increases, even though the water's entropy decreases."
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
   "explanation": "For light nuclei, fusion produces a nucleus with a larger binding energy per nucleon. The product is more tightly bound, so its total mass is less than the combined mass of the original nuclei. The mass difference is released as energy, E = Δmc²."
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
   "explanation": "The resistance is R = ρL/A. Doubling the length with constant volume cuts the cross-sectional area to half. Then R_new = ρ(2L)/(A/2) = 4ρL/A = 4R."
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
