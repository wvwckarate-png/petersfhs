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
   "explanation": "Correct: (C) 1.0 A. In a single loop there is only one path, so every resistor carries the same current. The total resistance of series resistors is their sum: R = 2 Ω + 3 Ω + 7 Ω = 12 Ω. With an ideal battery, I = V/R = 12 V / 12 Ω = 1.0 A, and that same 1.0 A passes through the 3 Ω resistor. Check: the drops 2 V + 3 V + 7 V add to 12 V.\n\n(A) is wrong because it divides the 12 V by the 3 Ω resistor alone (12/3 = 4.0 A), as if that resistor were connected directly across the battery.\n(B) is wrong because 2.0 A would require a total resistance of only 6 Ω, but the series resistances add to 12 Ω, giving 1.0 A.\n(D) is wrong because 0.50 A would require a total resistance of 24 Ω, twice the actual series sum of 2 + 3 + 7 = 12 Ω."
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
   "explanation": "Correct: (B) 7.0 V. The series current is I = 12 V / (2 + 3 + 7) Ω = 1.0 A, the same in every resistor. Ohm's law for the 7 Ω resistor alone gives ΔV = IR = (1.0 A)(7 Ω) = 7.0 V. The battery's 12 V is shared in proportion to resistance: 2.0 V + 3.0 V + 7.0 V = 12 V, as Kirchhoff's loop rule requires.\n\n(A) is wrong because 12 V is the potential difference across all three resistors together; the 7 Ω resistor gets only its share, 7.0 V.\n(C) is wrong because 3.0 V is the potential difference across the 3 Ω resistor, (1.0 A)(3 Ω), not across the 7 Ω resistor.\n(D) is wrong because 1.0 is the current in amperes, not a potential difference; multiplying it by 7 Ω gives 7.0 V across the resistor."
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
   "explanation": "Correct: (A) The current decreases, because the total resistance increases. Series resistances add, so replacing 3 Ω with 6 Ω raises the total from 2 + 3 + 7 = 12 Ω to 2 + 6 + 7 = 15 Ω. The battery's potential difference is fixed at 12 V, so I = V/R falls from 12/12 = 1.0 A to 12/15 = 0.80 A. Because a series loop has a single path, this smaller current is the same in every element.\n\n(B) is wrong because a larger resistance opposes current more, not less; raising the total resistance from 12 Ω to 15 Ω lowers I = V/R.\n(C) is wrong because a fixed battery voltage keeps V constant, not I; with V fixed, a larger total resistance gives a smaller current.\n(D) is wrong because charge cannot pile up in a single loop, so the current is the same everywhere in a series circuit (0.80 A in every element)."
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
   "explanation": "Correct: (D) +200 J. The cylinder is insulated and the compression is quick, so the process is adiabatic: Q = 0. The first law, written with work done on the gas, is ΔU = Q + W_on = 0 + (+200 J) = +200 J. All the energy delivered by the compressing force stays in the gas as internal energy, so its temperature rises.\n\n(A) is wrong because −200 J has the wrong sign: work done on the gas adds energy to it, so its internal energy increases rather than decreases.\n(B) is wrong because ΔU = 0 describes an isothermal process, where heat flows out to balance the work; here insulation makes Q = 0, so ΔU = +200 J.\n(C) is wrong because there is no reason to split the work in half; with Q = 0 all 200 J of work becomes internal energy."
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
   "explanation": "Correct: (B) 8 cm. The wavelength is the length of one complete cycle along the position axis. The graph shows the displacement starting at 0, rising to +3 cm at x = 2 cm, returning to 0 at x = 4 cm, reaching −3 cm at x = 6 cm, and completing the first cycle at x = 8 cm. Two full cycles fit in 16 cm, so λ = 16 cm / 2 = 8 cm.\n\n(A) is wrong because 16 cm is the length of the whole graph, which contains two complete cycles, so it is two wavelengths.\n(C) is wrong because 4 cm is the distance between adjacent zero crossings, which is only half a wavelength.\n(D) is wrong because 3 cm is the amplitude, the maximum displacement on the vertical axis, not a distance along the rope."
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
   "explanation": "Correct: (C) 0.50 s. From the graph the wavelength is λ = 8 cm, and the stem gives v = 16 cm/s. The wave equation v = fλ gives f = v/λ = (16 cm/s)/(8 cm) = 2.0 Hz, so the period is T = 1/f = 1/(2.0 Hz) = 0.50 s. Equivalently, the wave moves one wavelength in one period: T = λ/v = 8/16 = 0.50 s.\n\n(A) is wrong because 8.0 is the wavelength in centimeters, not a time; the period is the wavelength divided by the speed, 8/16 = 0.50 s.\n(B) is wrong because 2.0 is the frequency in hertz; the period is its reciprocal, 1/2.0 = 0.50 s.\n(D) is wrong because 0.25 s comes from using half a wavelength (4 cm/16 cm/s) instead of the full 8 cm wavelength."
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
   "explanation": "Correct: (C) 42°. Snell's law relates the angles on either side of the boundary: n₁ sin θ₁ = n₂ sin θ₂. Here (1.33)(sin 30°) = (1.00) sin θ₂, so sin θ₂ = (1.33)(0.500) = 0.665 and θ₂ = sin⁻¹(0.665) ≈ 42°. Light entering a medium with a lower index of refraction speeds up and bends away from the normal, so the angle must exceed 30°.\n\n(A) is wrong because 22° comes from dividing by 1.33 instead of multiplying (sin θ = 0.500/1.33 = 0.376), which bends the ray toward the normal as if it entered water.\n(B) is wrong because 30° would mean no bending, but the indices of water and air differ, so the ray must refract at the boundary.\n(D) is wrong because 49° is the critical angle for water to air, sin⁻¹(1/1.33), not the refraction angle for a 30° incident ray."
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
   "explanation": "Correct: (C) 4000 m/s. For a particle to move straight through, the net force must be zero, so the electric and magnetic forces must have equal magnitudes and opposite directions: qE = qvB. The charge cancels, leaving v = E/B = (2000 V/m)/(0.50 T) = 4000 m/s, or 4.0 × 10³ m/s. Particles faster or slower than this are deflected, which is how the device selects a speed.\n\n(A) is wrong because at 250 m/s the magnetic force qvB = q(125 N/C) is far smaller than the electric force q(2000 N/C), so the particle is deflected.\n(B) is wrong because 1000 m/s is the product E × B (2000 × 0.50), but balancing qE = qvB requires dividing E by B, giving 4000 m/s.\n(D) is wrong because at 1.0 × 10⁶ m/s the magnetic force qvB would be 250 times the electric force, so the particle would be strongly deflected."
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
   "explanation": "Correct: (A) The electric field is zero everywhere inside the metal, and the excess charge is on the surface. In electrostatic equilibrium the free electrons in a conductor have stopped drifting. If any electric field existed inside the metal, it would push those free charges and they would move, so the field inside the metal must be zero. Excess like charges repel and move as far apart as possible, so the net charge resides on the outer surface; Gauss's law confirms that no net charge can sit in a field-free interior.\n\n(B) is wrong because an outward field inside the metal would drive the free charges, so the conductor could not be in equilibrium; and excess charge does not stay in the volume.\n(C) is wrong because the zero field is right, but the excess charge does not stay spread through the volume; mutual repulsion pushes it to the surface.\n(D) is wrong because the charge location is right, but an outward field inside the metal would keep the free charges moving, contradicting equilibrium."
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
   "explanation": "Correct: (C) 100 J. For a closed cycle, the net work done by the gas equals the area enclosed on the PV diagram. The cycle is a right triangle with legs ΔV = 4 L − 2 L = 2 L = 2.0 × 10⁻³ m³ and ΔP = 200 kPa − 100 kPa = 1.0 × 10⁵ Pa. Area = ½(2.0 × 10⁻³ m³)(1.0 × 10⁵ Pa) = 100 J. The graph runs clockwise (A up to B, down to C, left to A), so this net work by the gas is positive.\n\n(A) is wrong because 400 J is (200 kPa)(2 L), a rectangle from the axis up to the highest pressure, not the triangular area enclosed by the cycle.\n(B) is wrong because 200 J is the full rectangle ΔP × ΔV = (1.0 × 10⁵ Pa)(2.0 × 10⁻³ m³); the cycle is a triangle, so the factor of ½ is missing.\n(D) is wrong because 50 J halves the triangular area a second time; the enclosed area is ½ΔVΔP = 100 J."
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
   "explanation": "Correct: (D) 300 J. The work done by the gas equals the area under the B → C line down to the volume axis. That region is a trapezoid: the volume increases by 2 L = 2.0 × 10⁻³ m³ while the pressure drops linearly from 200 kPa to 100 kPa, so the average pressure is 150 kPa. W = (1.5 × 10⁵ Pa)(2.0 × 10⁻³ m³) = 300 J, positive because the gas expands.\n\n(A) is wrong because 600 J multiplies the average pressure by the final volume, 4 L, instead of the change in volume, 2 L.\n(B) is wrong because 400 J uses the starting pressure of 200 kPa for the whole expansion, ignoring that the pressure falls to 100 kPa.\n(C) is wrong because 150 J is half the correct value, as if the volume changed by only 1 L instead of the 2 L shown on the graph."
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
   "explanation": "Correct: (D) The gas releases heat to its surroundings, and its internal energy decreases. From C to A the pressure stays at 100 kPa while the volume falls from 4 L to 2 L. Since PV = nRT, the temperature halves, so the internal energy decreases (ΔU < 0). The gas is compressed, so the work done by the gas is negative: W_by = −(1.0 × 10⁵ Pa)(2.0 × 10⁻³ m³) = −200 J. The first law, Q = ΔU + W_by, then makes Q even more negative, so the gas releases heat.\n\n(A) is wrong because at constant pressure, shrinking the volume lowers the temperature (PV = nRT), so the internal energy decreases and heat leaves the gas.\n(B) is wrong because the internal energy does not stay constant: at fixed pressure, halving the volume halves the temperature, so ΔU < 0.\n(C) is wrong because constant pressure does not prevent heat flow; only an adiabatic process has Q = 0, and here Q = ΔU + W_by is negative."
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
   "explanation": "Correct: (A) It is parallel to the original ray but shifted sideways. At the first surface the ray slows and bends toward the normal, n_air sin θ₁ = n_glass sin θ₂. The two faces are parallel, so the ray meets the second surface at the same angle θ₂, and Snell's law in reverse gives n_glass sin θ₂ = n_air sin θ₃, so θ₃ = θ₁. The ray leaves in its original direction but is displaced sideways by its slanted path through the glass.\n\n(B) is wrong because the bending toward the normal at entry is undone at exit, because the second refraction exactly reverses the first.\n(C) is wrong because the ray bends away from the normal only by the amount it bent toward it on entry, so the net direction change is zero.\n(D) is wrong because the emerging ray has the original direction but not the original line; its slanted path inside the glass shifts it sideways."
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
   "explanation": "Correct: (B) 73 dB. Sound level is logarithmic, β = 10 log(I/I₀), so levels in decibels do not add. Two identical machines double the intensity, and the level rises by 10 log(2I/I) = 10 log 2 ≈ 3.0 dB. The total is about 70 dB + 3 dB = 73 dB. A rise of 10 dB would require ten times the intensity, that is, ten machines.\n\n(A) is wrong because a second machine adds sound energy, doubling the intensity, so the level must rise above 70 dB.\n(C) is wrong because 77 dB would correspond to an intensity ratio of 10^0.7 ≈ 5, not the factor of 2 from two identical machines.\n(D) is wrong because 140 dB adds the decibel values directly, but decibels are logarithmic; doubling intensity adds only about 3 dB."
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
   "explanation": "Correct: (D) Toward the top of the page. For a positive charge the magnetic force is F = qv × B. The figure shows v pointing left (−x) and dots for a field out of the page (+z). Then (−x̂) × (+ẑ) = −(x̂ × ẑ) = −(−ŷ) = +ŷ, toward the top of the page. With the right hand: fingers along v (left), curl toward B (out of the page), and the thumb points up. The force is perpendicular to both v and B.\n\n(A) is wrong because toward the bottom of the page is the force on a negative charge, or the result of reversing the cross-product order.\n(B) is wrong because the magnetic force is always perpendicular to the velocity, so it cannot point straight back opposite to v.\n(C) is wrong because the magnetic force is perpendicular to B, which points out of the page, so the force must lie in the plane of the page."
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
   "explanation": "Correct: (C) 0.20 m. The field of a point charge is E = kq/r², so r = √(kq/E). Substituting, kq = (9.0 × 10⁹ N·m²/C²)(2.0 × 10⁻⁹ C) = 18 N·m²/C, and kq/E = 18/450 = 0.040 m². Taking the square root gives r = √0.040 m² = 0.20 m. Check: (18)/(0.20)² = 18/0.040 = 450 N/C.\n\n(A) is wrong because at 2.0 m the field would be 18/(2.0)² = 4.5 N/C, one hundred times smaller than 450 N/C.\n(B) is wrong because at 0.40 m the field would be 18/(0.40)² ≈ 113 N/C, a quarter of 450 N/C, because the field falls off as 1/r².\n(D) is wrong because 0.040 is r², the value before the square root is taken; the distance itself is √0.040 = 0.20 m."
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
   "explanation": "Correct: (B) 20 W. The rate of energy dissipation in a resistor is P = IΔV, and with ΔV = IR this becomes P = I²R. Here P = (2.0 A)²(5.0 Ω) = (4.0 A²)(5.0 Ω) = 20 W. Equivalently, the potential difference across the wire is ΔV = IR = 10 V, and P = IΔV = (2.0 A)(10 V) = 20 W.\n\n(A) is wrong because 10 is IR, the potential difference in volts across the wire; the power is that voltage times the current, 20 W.\n(C) is wrong because 40 W would require a current of about 2.8 A or a resistance of 10 Ω; with I = 2.0 A and R = 5.0 Ω, I²R = 20 W.\n(D) is wrong because 100 W squares the potential difference instead, (IR)² = 10², without dividing by R; ΔV²/R = 100/5.0 = 20 W."
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
   "explanation": "Correct: (B) 2.5 V. Faraday's law gives the average emf of an N-turn coil as |𝓔| = N ΔΦ/Δt, because each turn contributes the same emf and the turns are in series. Here |𝓔| = (50)(0.020 Wb)/(0.40 s) = (1.0 Wb)/(0.40 s) = 2.5 V. The direction of the induced current follows from Lenz's law, but only the magnitude is asked.\n\n(A) is wrong because 25 V is ten times too large, a decimal slip; (50)(0.020)/0.40 = 1.0/0.40 = 2.5 V.\n(C) is wrong because 0.50 V does not follow from N ΔΦ/Δt; it would require a flux change of only 0.0040 Wb per turn over 0.40 s.\n(D) is wrong because 0.050 V is the emf of a single turn, ΔΦ/Δt; it leaves out the factor of N = 50 turns."
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
   "explanation": "Correct: (A) The current is largest at first and decreases toward zero as the capacitor charges. When the switch closes, the uncharged capacitor has ΔV_C = q/C = 0, so the full battery voltage is across the resistor and the current is at its maximum, I₀ = ε/R. As charge builds, ΔV_C rises and the resistor's share, ε − ΔV_C, shrinks, so the current falls. It decays exponentially, I = I₀e^(−t/RC), approaching zero when ΔV_C equals ε.\n\n(B) is wrong because at the start the uncharged capacitor has no voltage across it, so the full battery voltage is across the resistor and the current is largest, not zero; the current then decays toward zero rather than rising to a constant.\n(C) is wrong because the current cannot stay constant, because the capacitor's growing voltage steadily reduces the voltage across the resistor.\n(D) is wrong because when the capacitor is fully charged its voltage equals the battery's, so no voltage is left across the resistor and the current is zero."
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
   "explanation": "Correct: (D) The molecules have the same average kinetic energy, but the hydrogen molecules have the greater average speed. For an ideal gas the average translational kinetic energy depends only on the absolute temperature: K_avg = (3/2)k_BT. At equal temperatures both gases have the same K_avg. Since K = ½mv², the rms speed is v_rms = √(3k_BT/m). An O₂ molecule is 16 times as massive as H₂ (32 u vs 2 u), so hydrogen's rms speed is √16 = 4 times greater.\n\n(A) is wrong because average kinetic energy depends only on temperature, so hydrogen's is not greater; only its speed is greater.\n(B) is wrong because equal speeds would give the heavier oxygen more kinetic energy, but at equal temperature the kinetic energies are equal, so the speeds differ.\n(C) is wrong because at the same temperature the kinetic energies are equal, and the heavier oxygen molecules move more slowly, not faster."
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
   "explanation": "Correct: (A) The field lines are circles centered on the wire, directed counterclockwise as seen from the front of the page. For a long straight wire, the right-hand rule says: point the thumb along the current and the fingers curl in the direction of the magnetic field. With the current out of the page, the thumb points toward the viewer and the fingers curl counterclockwise. The field lines are closed circles centered on the wire, with magnitude B = μ₀I/(2πr) decreasing with distance.\n\n(B) is wrong because clockwise circles would be produced by a current directed into the page, the reverse of the current given.\n(C) is wrong because magnetic field lines around a current form closed loops; radial lines pointing away describe the electric field of a positive charge.\n(D) is wrong because magnetic field lines have no sources or sinks, so they cannot point radially inward the way the field of a negative charge does."
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
   "explanation": "Correct: (A) 3.0 μF. Capacitors in series carry the same charge, and their voltages add, so their reciprocals add: 1/C_eq = 1/C₁ + 1/C₂ = 1/(4.0 μF) + 1/(12 μF) = 3/12 + 1/12 = 4/12 μF⁻¹. Thus C_eq = 12/4 = 3.0 μF. A series combination is always smaller than the smallest capacitor, here 4.0 μF.\n\n(B) is wrong because 8.0 μF is the average of 4.0 μF and 12 μF, but averaging is not a rule for combining capacitors.\n(C) is wrong because 16 μF is the sum, which is the rule for capacitors in parallel, not in series.\n(D) is wrong because 48 μF is the product C₁C₂ alone; the series formula divides it by the sum, 48/16 = 3.0 μF."
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
   "explanation": "Correct: (A) 1.0 N. Coulomb's law, F = k|q₁q₂|/r², makes the force inversely proportional to the square of the separation when the charges are unchanged. The distance increases from 0.10 m to 0.30 m, a factor of 3, so the force decreases by a factor of 3² = 9. The new force is 9.0 N / 9 = 1.0 N.\n\n(B) is wrong because 0.33 N divides 9.0 N by 27, as if the force varied as 1/r³ instead of 1/r².\n(C) is wrong because 3.0 N divides by 3, treating the force as inversely proportional to r rather than to r².\n(D) is wrong because 27 N increases the force, but moving charges farther apart weakens the electric force."
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
   "explanation": "Correct: (B) 30 cm. Use the mirror equation, 1/f = 1/d_o + 1/d_i, with f = +20 cm for a concave mirror. Then 1/d_i = 1/20 − 1/60 = 3/60 − 1/60 = 2/60, so d_i = +30 cm. The positive sign means a real image in front of the mirror. The object is beyond the center of curvature (2f = 40 cm), so the image lies between f and 2f, inverted and reduced (m = −30/60 = −0.5).\n\n(A) is wrong because 15 cm comes from adding the reciprocals (1/20 + 1/60 = 4/60) instead of subtracting 1/d_o from 1/f.\n(C) is wrong because 60 cm is the object distance; an image coincides with its object only when the object is at the center of curvature, 2f = 40 cm.\n(D) is wrong because 90 cm would put the image beyond the object, but an object outside 2f produces an image between f and 2f (20 to 40 cm)."
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
   "explanation": "Correct: (C) 5.0 days. The count rate is proportional to the number of undecayed nuclei, so it halves every half-life. The ratio is 800/100 = 8 = 2³: 800 → 400 → 200 → 100 counts per second, which is three half-lives. Three half-lives take 15 days, so the half-life is t½ = 15 days / 3 = 5.0 days.\n\n(A) is wrong because in one half-life the rate would fall only to 400 counts per second, not to 100.\n(B) is wrong because 7.5 days assumes two half-lives (a factor of 4), but the rate fell by a factor of 8, which is three half-lives.\n(D) is wrong because 3.0 days divides 15 by 5, but a factor of 8 corresponds to 3 halvings, not 5 (which would reach 25 counts per second)."
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
   "explanation": "Correct: (D) The image is virtual, upright, and smaller than the object. A convex mirror has a negative focal length. From 1/d_i = 1/f − 1/d_o, with f < 0 and d_o > 0, d_i is always negative and smaller in magnitude than |f|, so the image is virtual and behind the mirror. The magnification m = −d_i/d_o is positive and less than 1, so the image is always upright and reduced, for every object position.\n\n(A) is wrong because a diverging mirror cannot form a real image of a real object, because the reflected rays spread apart and never meet.\n(B) is wrong because the image is upright and virtual, but it is always smaller than the object; enlargement requires a concave mirror with the object inside f.\n(C) is wrong because a same-size image occurs for a plane mirror (virtual) or a concave mirror at 2f (real and inverted), never a convex mirror."
  },
  {
   "id": "p2e3-27",
   "unit": 12,
   "stem": "A strong bar magnet is dropped through a long vertical copper tube. Compared with a nonmagnetic object of the same mass, the magnet falls slowly. Which explanation is correct?",
   "choices": [
    "Induced currents in the tube create a magnetic force that opposes the magnet's motion (Lenz's law).",
    "The copper is attracted to the magnet, and this attraction supports part of its weight.",
    "Copper is a ferromagnetic material, so the magnet is held back by magnetic friction.",
    "The magnet loses its magnetization as it falls, which reduces its mass and its weight."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Induced currents in the tube create a magnetic force that opposes the magnet's motion (Lenz's law). As the magnet falls, the magnetic flux through each ring of the copper tube changes: it increases ahead of the magnet and decreases behind it. Faraday's law induces circulating eddy currents in the conducting copper, and Lenz's law says their magnetic fields oppose the change. They repel the approaching magnet below and attract the departing magnet above, exerting an upward force that slows the fall.\n\n(B) is wrong because copper is not attracted to a stationary magnet; the retarding force exists only while the magnet moves and induces currents.\n(C) is wrong because copper is not ferromagnetic; the braking comes from currents induced in the conductor, not from any static magnetic attraction.\n(D) is wrong because magnetization has no effect on mass or weight, and the magnet does not lose its magnetization by falling through the tube."
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
   "explanation": "Correct: (C) 0.40 N. The magnetic force on a current-carrying wire is F = ILB sin θ, where θ is the angle between the wire and the field. Here F = (8.0 A)(0.25 m)(0.40 T)(sin 30°) = (0.80 N)(0.50) = 0.40 N. Only the component of the wire perpendicular to the field experiences a force, which is why the sine of the angle appears.\n\n(A) is wrong because 0.80 N is ILB with no angle factor, which would apply only if the wire were perpendicular to the field.\n(B) is wrong because 0.69 N uses cos 30° = 0.866 instead of sin 30°; the force depends on the wire's component perpendicular to B.\n(D) is wrong because 0.20 N multiplies by sin 30° twice, or uses half the correct current or length."
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
   "explanation": "Correct: (C) 10 Ω. First combine the parallel pair: 1/R_p = 1/10 + 1/10 = 2/10, so R_p = 5.0 Ω (two equal resistors in parallel give half of one). That combination is in series with the 5.0 Ω resistor, and series resistances add: R_eq = 5.0 Ω + 5.0 Ω = 10 Ω.\n\n(A) is wrong because 25 Ω adds all three resistances as if they were in series, ignoring that the two 10 Ω resistors are in parallel.\n(B) is wrong because 15 Ω treats the parallel pair as a single 10 Ω resistor, but two 10 Ω resistors in parallel give only 5.0 Ω.\n(D) is wrong because 5.0 Ω is just the parallel pair's equivalent; it leaves out the 5.0 Ω resistor that is in series with it."
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
   "explanation": "Correct: (A) 5.0 × 10³ V/m. Between large parallel plates the field is uniform, with magnitude E = ΔV/d. Converting the separation to meters, d = 4.0 cm = 0.040 m, so E = (200 V)/(0.040 m) = 5.0 × 10³ V/m. The figure shows the field pointing from the positive (upper) plate to the negative (lower) plate, the direction a positive test charge would be pushed.\n\n(B) is wrong because 8.0 × 10³ V/m would require a plate separation of 0.025 m (2.5 cm), not the 4.0 cm shown; 200 V/0.040 m = 5.0 × 10³ V/m.\n(C) is wrong because 5.0 × 10⁴ V/m uses d = 0.0040 m, a slip of one decimal place in converting 4.0 cm to meters.\n(D) is wrong because 5.0 × 10⁶ V/m uses d = 4.0 × 10⁻⁵ m, a conversion error of a factor of 1000; 4.0 cm is 0.040 m."
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
   "explanation": "Correct: (B) 8.4 × 10⁶ m/s. The electron starts at rest at the negative plate and is pushed toward the positive plate. It moves through a potential difference of 200 V, so energy conservation gives eΔV = ½mv². Then v = √(2eΔV/m) = √(2(1.6 × 10⁻¹⁹ C)(200 V)/(9.1 × 10⁻³¹ kg)) = √(7.0 × 10¹³ m²/s²) ≈ 8.4 × 10⁶ m/s. The plate separation does not matter.\n\n(A) is wrong because 8.4 × 10⁷ m/s is ten times too large, which would need 100 times the energy (20,000 V); it is a slip in handling the powers of ten.\n(C) is wrong because 8.4 × 10⁵ m/s is ten times too small, which would correspond to only 2.0 V of potential difference; it comes from a power-of-ten slip.\n(D) is wrong because 8.4 × 10⁴ m/s is one hundred times too small, an error of four orders of magnitude in v², usually from mishandling the exponents."
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
   "explanation": "Correct: (B) 1.65 × 10⁵ J. During melting at 0 °C the temperature stays constant, and all the added energy breaks the bonds holding the ice in its solid structure. The heat required is Q = mL_f = (0.50 kg)(3.3 × 10⁵ J/kg) = 1.65 × 10⁵ J. No mcΔT term is needed, because the ice starts at the melting point and ends as water at 0 °C.\n\n(A) is wrong because 8.3 × 10⁴ J is half the correct value, as if the mass were 0.25 kg instead of 0.50 kg.\n(C) is wrong because 3.3 × 10⁵ J is the latent heat for 1 kg; it was not multiplied by the 0.50 kg mass.\n(D) is wrong because 6.6 × 10⁵ J multiplies the latent heat by 2 instead of by 0.50, as if the mass were 2.0 kg."
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
   "explanation": "Correct: (D) 4. When two sounds of slightly different frequencies combine, they drift in and out of phase, so the loudness rises and falls. The number of loudness maxima per second, the beat frequency, equals the difference between the two frequencies: f_beat = |f₁ − f₂| = |444 Hz − 440 Hz| = 4 Hz, or 4 beats per second. The listener hears a 442 Hz tone pulsing 4 times per second.\n\n(A) is wrong because 884 is the sum of the two frequencies; beats depend on how quickly the waves drift out of phase, which is their difference.\n(B) is wrong because 442 Hz is the average frequency, the pitch of the combined tone, not the number of beats per second.\n(C) is wrong because 2 is half the difference; the waves come back into phase |f₁ − f₂| = 4 times each second."
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
   "explanation": "Correct: (D) The photoelectric effect, in which electrons are ejected only if the light's frequency exceeds a threshold. In the photoelectric effect, electrons are ejected only when the light's frequency exceeds a threshold, regardless of intensity, and they appear without delay. A classical wave would eventually deliver enough energy at any frequency. Einstein explained this with photons of energy E = hf: one photon gives its energy to one electron, and K_max = hf − φ. This is direct evidence that light carries energy in discrete particles.\n\n(A) is wrong because single-slit diffraction is the spreading of waves through an opening, which is evidence for the wave nature of light.\n(B) is wrong because double-slit fringes come from the superposition of waves that are in or out of phase, so they show light's wave nature.\n(C) is wrong because refraction is explained by the change in wave speed between media (Snell's law), so it does not demonstrate photons."
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
   "explanation": "Correct: (C) +3.0 μC. When two identical conductors touch, charge flows until they reach the same potential; identical spheres at the same potential carry equal charges. Charge is conserved, so the total of +6.0 μC + 0 = +6.0 μC is shared equally: each sphere ends up with +6.0 μC / 2 = +3.0 μC. The total after separation is still +6.0 μC.\n\n(A) is wrong because the charge does not cancel; the neutral sphere has no charge to cancel it, and total charge (+6.0 μC) is conserved.\n(B) is wrong because +1.5 μC on each sphere would total only +3.0 μC, violating conservation of charge; that is a quarter, not half, of 6.0 μC.\n(D) is wrong because if each sphere had +6.0 μC the total would be +12 μC, which would create charge; the +6.0 μC must be shared."
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
   "explanation": "Correct: (D) −120 V. The electric potential of a point charge, with V = 0 at infinity, is V = kq/r, a scalar that keeps the sign of the charge. Substituting, V = (9.0 × 10⁹ N·m²/C²)(−4.0 × 10⁻⁹ C)/(0.30 m) = (−36 V·m)/(0.30 m) = −120 V. A negative charge makes the potential negative everywhere around it.\n\n(A) is wrong because +120 V drops the sign of the charge; potential is a signed scalar, so a negative charge gives a negative potential.\n(B) is wrong because +36 V both drops the sign and forgets to divide kq by the distance of 0.30 m.\n(C) is wrong because −36 V is kq alone in V·m; the distance of 0.30 m was not divided in (and it is not r² as for the field)."
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
   "explanation": "Correct: (C) 30 cm. Use the thin lens equation, 1/f = 1/d_o + 1/d_i, with f = +10 cm and d_o = 15 cm. Then 1/d_i = 1/10 − 1/15 = 3/30 − 2/30 = 1/30, so d_i = +30 cm. The figure agrees: the object is between F and 2F, and the two rays from its tip cross beyond 2F on the far side, forming a real, inverted image magnified by m = −30/15 = −2.\n\n(A) is wrong because 6.0 cm comes from adding the reciprocals (1/10 + 1/15 = 5/30) instead of subtracting 1/d_o from 1/f.\n(B) is wrong because 15 cm is the object distance; the image is not at the same distance unless the object is at 2F (20 cm).\n(D) is wrong because 45 cm does not satisfy the lens equation: 1/15 + 1/45 = 4/45, which corresponds to f ≈ 11 cm, not 10 cm."
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
   "explanation": "Correct: (D) It is virtual, upright, and larger than the object. The object is now inside the focal length. The lens equation gives 1/d_i = 1/10 − 1/5 = −1/10, so d_i = −10 cm. The negative image distance means a virtual image on the same side as the object. The magnification m = −d_i/d_o = −(−10)/5 = +2, so the image is upright and twice the object's height. This is how a magnifying glass works.\n\n(A) is wrong because a real, inverted image forms only when the object is beyond the focal point; at 5 cm, inside f = 10 cm, the rays diverge after the lens.\n(B) is wrong because for a single lens, virtual images are upright, not inverted, and here m = +2 makes the image larger, not smaller.\n(C) is wrong because an image is formed; the refracted rays diverge, but extending them backward locates a virtual image 10 cm from the lens."
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
   "explanation": "Correct: (B) 7.2 × 10¹⁴ Hz. First convert the energy to joules: E = (3.0 eV)(1.6 × 10⁻¹⁹ J/eV) = 4.8 × 10⁻¹⁹ J. The photon relation E = hf then gives f = E/h = (4.8 × 10⁻¹⁹ J)/(6.63 × 10⁻³⁴ J·s) ≈ 7.2 × 10¹⁴ Hz. This is visible violet light, with λ = c/f ≈ 4.1 × 10⁻⁷ m = 410 nm.\n\n(A) is wrong because 4.5 × 10¹⁵ Hz would correspond to a photon energy of about 19 eV, so it does not come from 3.0 eV through f = E/h.\n(C) is wrong because 7.2 × 10¹³ Hz has the right digits but is ten times too small, a power-of-ten slip in dividing 10⁻¹⁹ by 10⁻³⁴.\n(D) is wrong because 1.4 × 10⁻¹⁵ is h/E, the reciprocal of the frequency (a period in seconds), not the frequency."
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
   "explanation": "Correct: (A) It increases. The first dark fringe of a single slit is at a sin θ = λ. Making the slit width a smaller increases sin θ = λ/a, so the first minima move farther from the center. With the screen distance fixed, the central bright maximum, which spans from one first minimum to the other (width ≈ 2Lλ/a), gets wider. A narrower opening diffracts light more.\n\n(B) is wrong because the width varies inversely with a, so narrowing the slit widens the central maximum rather than shrinking it.\n(C) is wrong because the angle of the first minimum, sin θ = λ/a, depends on the slit width, so changing a must change the pattern.\n(D) is wrong because a narrower slit still diffracts light, and more strongly; the central maximum only grows dimmer and wider."
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
   "explanation": "Correct: (B) 656 nm. An emitted photon carries the energy difference between the levels: ΔE = E₃ − E₂ = (−1.51 eV) − (−3.4 eV) = 1.89 eV. Its wavelength is λ = hc/ΔE = (1240 eV·nm)/(1.89 eV) ≈ 656 nm. This red line is the first Balmer line (H-alpha), the most prominent visible line of hydrogen.\n\n(A) is wrong because 1280 nm would require a photon of only about 0.97 eV, which does not match the 1.89 eV gap between n = 3 and n = 2.\n(C) is wrong because 365 nm corresponds to 3.4 eV, the energy to ionize an atom from n = 2, not the n = 3 to n = 2 gap.\n(D) is wrong because 122 nm corresponds to 10.2 eV, the n = 2 to n = 1 transition in the ultraviolet."
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
   "explanation": "Correct: (B) 13.6 eV. Ionization removes the electron completely, raising it from its level to the 0 eV line marked on the diagram. From the ground state, n = 1 at −13.6 eV, the minimum energy is 0 − (−13.6 eV) = 13.6 eV. Any less leaves the electron bound in an excited level; any extra energy appears as the freed electron's kinetic energy.\n\n(A) is wrong because 27.2 eV doubles the ionization energy; only 0 − (−13.6) = 13.6 eV is needed to reach the 0 eV level.\n(C) is wrong because 10.2 eV, the gap from n = 1 to n = 2, only excites the electron to n = 2; it does not free it.\n(D) is wrong because 3.4 eV is the ionization energy from n = 2, not from the ground state, n = 1."
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
