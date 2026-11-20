// AP Physics 2 — Exam 1 — 42 questions. Uses g = 10 m/s².
const EXAM = {
 "questions": [
  {
   "id": "p2e1-1",
   "unit": 9,
   "stem": "How much thermal energy must be added to 0.50 kg of liquid water to raise its temperature by 20 °C? (The specific heat capacity of water is 4200 J/(kg·°C).)",
   "choices": [
    "2.1 × 10⁴ J",
    "4.2 × 10⁴ J",
    "8.4 × 10⁴ J",
    "4.2 × 10⁵ J"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 4.2 × 10⁴ J. Thermal energy needed to warm a substance with no phase change is Q = mcΔT, where m is the mass, c is the specific heat capacity, and ΔT is the temperature change (a change of 1 °C equals a change of 1 K). Substituting the given values: Q = (0.50 kg)(4200 J/(kg·°C))(20 °C) = 42,000 J = 4.2 × 10⁴ J. The kg and °C units cancel, leaving joules, and two significant figures match the data.\n\n(A) is wrong because 2.1 × 10⁴ J is half the correct value, as if the mass were taken as 0.25 kg or the temperature change as 10 °C.\n(C) is wrong because 8.4 × 10⁴ J is (4200)(20), which leaves out the 0.50 kg mass and so treats the water as 1 kg.\n(D) is wrong because 4.2 × 10⁵ J is ten times too large, a power-of-ten slip when multiplying 0.50 × 4200 × 20."
  },
  {
   "id": "p2e1-2",
   "unit": 11,
   "stem": "Three identical bulbs are connected in parallel across a battery that has negligible internal resistance. If one of the bulbs is removed from the circuit, what happens to the brightness of the other two bulbs?",
   "choices": [
    "It does not change, because each remaining bulb still has the full battery voltage across it.",
    "Both become dimmer, because the current is now shared among fewer bulbs.",
    "Both become brighter, because the battery's current is now divided between fewer bulbs.",
    "Both go out, because removing a bulb breaks the circuit."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It does not change, because each remaining bulb still has the full battery voltage across it. In a parallel circuit every branch connects directly across the battery terminals. With negligible internal resistance, the battery keeps the same potential difference V across each bulb no matter how many branches are attached. Each remaining bulb therefore still carries I = V/R and dissipates P = V²/R, the same as before, so its brightness is unchanged. Removing a bulb only lowers the total current the battery supplies, from 3V/R to 2V/R.\n\n(B) is wrong because each remaining bulb does not dim, since each branch current depends only on V and R, and neither changes; current is not a fixed amount shared out.\n(C) is wrong because the bulbs do not brighten, since the battery's total current drops when a branch is removed; each remaining branch still gets exactly V/R.\n(D) is wrong because the bulbs do not go out, since in parallel each bulb has its own complete path; only in a series circuit does removing one bulb break the whole loop."
  },
  {
   "id": "p2e1-3",
   "unit": 14,
   "stem": "The intensity of a sound increases by a factor of 100. By how many decibels does the sound intensity level increase?",
   "choices": [
    "100 dB",
    "20 dB",
    "10 dB",
    "2 dB"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 20 dB. Sound intensity level is logarithmic: β = 10 log(I/I₀) dB. Multiplying the intensity by a factor k adds Δβ = 10 log k to the level, regardless of the starting value. For k = 100, Δβ = 10 log(100) = 10 × 2 = 20 dB. Every factor of 10 in intensity adds 10 dB, so two factors of 10 (10 × 10 = 100) add 20 dB.\n\n(A) is wrong because 100 dB treats the decibel scale as linear, adding the intensity factor itself instead of 10 times its logarithm.\n(C) is wrong because 10 dB is the increase for a tenfold intensity change, not a hundredfold change, which is two factors of 10.\n(D) is wrong because 2 dB is log(100) alone; it leaves off the factor of 10 in β = 10 log(I/I₀), which gives decibels rather than bels."
  },
  {
   "id": "p2e1-4",
   "unit": 11,
   "setId": "p2e1-set1",
   "stem": "What is the current supplied by the battery?",
   "choices": [
    "2.0 A",
    "3.0 A",
    "1.0 A",
    "0.50 A"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 2.0 A. Reduce the circuit step by step. R₂ = 6 Ω and R₃ = 3 Ω are in parallel (both connect between the same two junctions), so R_p = (6)(3)/(6 + 3) = 18/9 = 2.0 Ω. This combination is in series with R₁ = 4 Ω, giving R_total = 4 + 2.0 = 6.0 Ω. The battery current is I = V/R_total = 12 V / 6.0 Ω = 2.0 A, all of which passes through R₁.\n\n(B) is wrong because 3.0 A is 12 V / 4 Ω, which uses only R₁ and ignores the 2.0 Ω of the parallel pair in series with it.\n(C) is wrong because 1.0 A would need a total resistance of 12 Ω; the circuit's resistance is 4 + 2.0 = 6.0 Ω (R₂ and R₃ in parallel give 2.0 Ω), so the current is 2.0 A, and even putting all three resistors in series (13 Ω) would give about 0.92 A, not 1.0 A.\n(D) is wrong because 0.50 A inverts Ohm's law, computing R/V = 6.0/12 instead of V/R = 12/6.0."
  },
  {
   "id": "p2e1-5",
   "unit": 11,
   "setId": "p2e1-set1",
   "stem": "What is the power dissipated in the 4 Ω resistor?",
   "choices": [
    "48 W",
    "36 W",
    "8 W",
    "16 W"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 16 W. R₁ is in series with the battery, so it carries the full battery current of 2.0 A found from R_total = 4 + (6·3)/(6 + 3) = 6.0 Ω and I = 12/6.0 = 2.0 A. Its power is P = I²R = (2.0 A)²(4 Ω) = 16 W. As a check, the voltage across R₁ is (2.0)(4) = 8.0 V, and P = IV = (2.0)(8.0) = 16 W, matching V²/R = 64/4 = 16 W.\n\n(A) is wrong because 48 W is (12)(4), multiplying the battery voltage by the resistance, which is not a power formula; the battery's total output is only 24 W.\n(B) is wrong because 36 W comes from wrongly putting the whole 12 V across R₁ (V²/R = 144/4); only 8.0 V is across R₁ because 4.0 V is across the parallel pair.\n(C) is wrong because 8 W is IR = (2.0)(4) = 8, which is the voltage across R₁ in volts, not its power; the current must be squared."
  },
  {
   "id": "p2e1-6",
   "unit": 11,
   "setId": "p2e1-set1",
   "stem": "What is the current in the 6 Ω resistor?",
   "choices": [
    "1.3 A",
    "1.0 A",
    "0.67 A",
    "0.33 A"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.67 A. First find the voltage across the parallel pair. The battery current is 2.0 A (R_total = 4 + 2.0 = 6.0 Ω), so R₁ drops (2.0 A)(4 Ω) = 8.0 V, leaving 12 − 8.0 = 4.0 V across both R₂ and R₃ (parallel branches share the same voltage). The current in R₂ is I = V/R = 4.0 V / 6 Ω = 0.67 A. Check: R₃ carries 4.0/3 = 1.33 A, and 0.67 + 1.33 = 2.0 A, the battery current.\n\n(A) is wrong because 1.3 A is the current in the 3 Ω resistor; the smaller resistance carries the larger share, so the 6 Ω branch gets less.\n(B) is wrong because 1.0 A assumes the 2.0 A splits equally between the branches, but current divides inversely with resistance, 1:2 here.\n(D) is wrong because 0.33 A divides the battery current by the resistance (2.0/6), which is dimensionally wrong; it is the branch voltage, 4.0 V, that is divided by 6 Ω."
  },
  {
   "id": "p2e1-7",
   "unit": 10,
   "stem": "A neutral metal sphere on an insulating stand is brought near, but does not touch, a positively charged rod. Which statement describes the interaction between the rod and the sphere?",
   "choices": [
    "The sphere is repelled by the rod, because the sphere becomes positively charged.",
    "There is no force between them, because the sphere is neutral overall.",
    "The sphere is attracted to the rod, because positive charge flows from the rod onto the sphere.",
    "The sphere is attracted to the rod, because the side of the sphere nearer the rod becomes negatively charged."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The sphere is attracted to the rod, because the side of the sphere nearer the rod becomes negatively charged. This is charging by induction (polarization). The positive rod attracts the mobile electrons in the metal sphere toward the near side, leaving a positive region on the far side. The sphere stays neutral overall, but the induced negative charge is closer to the rod than the induced positive charge. Because Coulomb force falls off as 1/r², the attraction on the near side is stronger than the repulsion on the far side, so the net force pulls the sphere toward the rod.\n\n(A) is wrong because the sphere is not repelled; it gains no net charge without contact, and its separated charges arrange themselves so the attractive side is nearer the rod.\n(B) is wrong because a neutral object can still feel a force when its charges separate; the unequal distances make the near-side attraction win.\n(C) is wrong because no charge flows from the rod because they do not touch; the attraction comes from charge redistribution within the sphere, not transfer."
  },
  {
   "id": "p2e1-8",
   "unit": 12,
   "stem": "A positive charge moves to the right in a uniform magnetic field directed into the page, as shown. What is the direction of the magnetic force on the charge at the instant shown?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 268\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"220\" fill=\"none\" stroke=\"#E6E4DC\" stroke-width=\"1.5\"/><line x1=\"54\" y1=\"49\" x2=\"66\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"61\" x2=\"66\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"101\" x2=\"66\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"113\" x2=\"66\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"153\" x2=\"66\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"165\" x2=\"66\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"205\" x2=\"66\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"217\" x2=\"66\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"49\" x2=\"122\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"61\" x2=\"122\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"101\" x2=\"122\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"113\" x2=\"122\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"153\" x2=\"122\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"165\" x2=\"122\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"205\" x2=\"122\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"217\" x2=\"122\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"49\" x2=\"178\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"61\" x2=\"178\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"101\" x2=\"178\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"113\" x2=\"178\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"153\" x2=\"178\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"165\" x2=\"178\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"205\" x2=\"178\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"166\" y1=\"217\" x2=\"178\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"49\" x2=\"234\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"61\" x2=\"234\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"101\" x2=\"234\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"113\" x2=\"234\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"153\" x2=\"234\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"165\" x2=\"234\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"205\" x2=\"234\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"222\" y1=\"217\" x2=\"234\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"49\" x2=\"290\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"61\" x2=\"290\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"101\" x2=\"290\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"113\" x2=\"290\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"153\" x2=\"290\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"165\" x2=\"290\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"205\" x2=\"290\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"217\" x2=\"290\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"49\" x2=\"346\" y2=\"61\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"61\" x2=\"346\" y2=\"49\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"101\" x2=\"346\" y2=\"113\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"113\" x2=\"346\" y2=\"101\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"153\" x2=\"346\" y2=\"165\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"165\" x2=\"346\" y2=\"153\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"205\" x2=\"346\" y2=\"217\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"334\" y1=\"217\" x2=\"346\" y2=\"205\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><circle cx=\"200\" cy=\"130\" r=\"13\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">+</text><line x1=\"213\" y1=\"130\" x2=\"272\" y2=\"130\" stroke=\"#2E332E\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"272,130 262.21,134.37 262.21,125.63\" fill=\"#2E332E\"/><text x=\"288\" y=\"135\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\" font-style=\"italic\">v</text><text x=\"200\" y=\"256\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">× = magnetic field directed into the page</text></svg>",
     "alt": "A grid of crosses showing a magnetic field directed into the page. A positive charge in the middle moves to the right with a velocity arrow pointing right.",
     "maxWidth": 420
    }
   ],
   "choices": [
    "Toward the top of the page",
    "Toward the bottom of the page",
    "To the right, in the direction of the velocity",
    "Out of the page"
   ],
   "correct": 0,
   "explanation": "Correct: (A) Toward the top of the page. The magnetic force on a moving charge is F = qv × B. With v to the right (+x) and B into the page (−z), v × B = (x̂) × (−ẑ) = +ŷ, toward the top of the page. By the right-hand rule: fingers along v (right), curl toward B (into the page), and the thumb points up. The charge is positive, so the force has the same direction as v × B, toward the top of the page.\n\n(B) is wrong because toward the bottom would be the force on a negative charge, or the result of curling the fingers from B to v instead of from v to B.\n(C) is wrong because the magnetic force is always perpendicular to the velocity, so it can never point along the direction of motion.\n(D) is wrong because the magnetic force is perpendicular to B as well as to v, so it cannot point out of the page, which is along the field line."
  },
  {
   "id": "p2e1-9",
   "unit": 9,
   "stem": "During a process, an ideal gas absorbs 500 J of heat while doing 200 J of work on its surroundings. What is the change in the internal energy of the gas?",
   "choices": [
    "−700 J",
    "−300 J",
    "+300 J",
    "+700 J"
   ],
   "correct": 2,
   "explanation": "Correct: (C) +300 J. The first law of thermodynamics is ΔU = Q − W_by, where Q is the heat added to the gas and W_by is the work done by the gas on its surroundings (equivalently, ΔU = Q + W_on, with W_on = −200 J). The gas absorbs Q = +500 J and does W_by = 200 J, so ΔU = 500 J − 200 J = +300 J. The gas keeps the 300 J of absorbed energy that it did not spend doing work.\n\n(A) is wrong because −700 J makes both terms negative, treating the absorbed heat as lost and also subtracting the work.\n(B) is wrong because −300 J reverses the sign convention, computing W − Q, as if the gas had lost heat and gained energy from work.\n(D) is wrong because +700 J adds the work done by the gas instead of subtracting it; doing work on the surroundings removes energy from the gas."
  },
  {
   "id": "p2e1-10",
   "unit": 10,
   "stem": "Two parallel metal plates are separated by 2.0 mm and connected across a 100 V battery, as shown. What is the magnitude of the electric field between the plates?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 390 220\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"60\" y1=\"60\" x2=\"280\" y2=\"60\" stroke=\"#D2705A\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#3F7A94\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"40\" y=\"66\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"800\" fill=\"#D2705A\">+</text><text x=\"40\" y=\"168\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"800\" fill=\"#3F7A94\">−</text><line x1=\"100\" y1=\"72\" x2=\"100\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"100,148 96.35,139.82 103.65,139.82\" fill=\"#767F73\"/><line x1=\"170\" y1=\"72\" x2=\"170\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"170,148 166.35,139.82 173.65,139.82\" fill=\"#767F73\"/><line x1=\"240\" y1=\"72\" x2=\"240\" y2=\"148\" stroke=\"#767F73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"240,148 236.35,139.82 243.65,139.82\" fill=\"#767F73\"/><line x1=\"300\" y1=\"60\" x2=\"300\" y2=\"160\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"300,160 296.71,152.62 303.29,152.62\" fill=\"#2E332E\"/><polygon points=\"300,60 303.29,67.38 296.71,67.38\" fill=\"#2E332E\"/><text x=\"312\" y=\"114\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">2.0 mm</text><text x=\"170\" y=\"30\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">100 V</text></svg>",
     "alt": "Two horizontal parallel plates, the upper one positive and the lower one negative, separated by 2.0 millimeters. Arrows between them point from the upper plate to the lower plate. A 100 volt potential difference is applied.",
     "maxWidth": 360
    }
   ],
   "choices": [
    "2.0 × 10⁵ V/m",
    "5.0 × 10⁴ V/m",
    "2.0 × 10⁴ V/m",
    "5.0 × 10³ V/m"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 5.0 × 10⁴ V/m. Between large parallel plates the electric field is uniform, so its magnitude is E = ΔV/d. The separation must be in meters: d = 2.0 mm = 2.0 × 10⁻³ m. Then E = 100 V / (2.0 × 10⁻³ m) = 5.0 × 10⁴ V/m. The field points from the positive (upper) plate to the negative (lower) plate, as the arrows in the figure show, and 1 V/m equals 1 N/C.\n\n(A) is wrong because 2.0 × 10⁵ V/m is four times too large; it would require a plate separation of 0.50 mm, not 2.0 mm.\n(C) is wrong because 2.0 × 10⁴ V/m is 2.5 times too small; it corresponds to a separation of 5.0 mm rather than the 2.0 mm shown.\n(D) is wrong because 5.0 × 10³ V/m converts 2.0 mm as if it were 2.0 cm (2.0 × 10⁻² m), making the field ten times too small."
  },
  {
   "id": "p2e1-11",
   "unit": 12,
   "stem": "A flat conducting loop with an area of 0.20 m² is perpendicular to a uniform magnetic field of 0.50 T. The field decreases uniformly to zero in 0.10 s. What is the magnitude of the average emf induced in the loop?",
   "choices": [
    "1.0 V",
    "10 V",
    "0.50 V",
    "0.10 V"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 1.0 V. Faraday's law gives the average induced emf as |𝓔| = ΔΦ/Δt, with magnetic flux Φ = BA when the field is perpendicular to the loop. The initial flux is (0.50 T)(0.20 m²) = 0.10 T·m² (0.10 Wb), and the final flux is zero, so ΔΦ = 0.10 Wb. Dividing by the time, |𝓔| = 0.10 Wb / 0.10 s = 1.0 V (1 Wb/s = 1 V).\n\n(B) is wrong because 10 V divides by the time twice (0.10/0.10²), or by 0.010 s, which is ten times too large.\n(C) is wrong because 0.50 V uses the average field of 0.25 T as if it were the change; the emf depends on the full change in field, 0.50 T.\n(D) is wrong because 0.10 V is the change in flux itself (0.10 Wb); it still needs to be divided by the 0.10 s time interval."
  },
  {
   "id": "p2e1-12",
   "unit": 10,
   "stem": "Two small spheres carrying charges of +2.0 μC and +3.0 μC are 0.30 m apart. What is the magnitude of the electric force that each sphere exerts on the other?",
   "choices": [
    "0.60 N",
    "0.18 N",
    "1.8 N",
    "6.0 N"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 0.60 N. Coulomb's law gives the force between two point charges: F = k|q₁q₂|/r². Substituting: F = (9.0 × 10⁹ N·m²/C²)(2.0 × 10⁻⁶ C)(3.0 × 10⁻⁶ C)/(0.30 m)² = (0.054 N·m²)/(0.090 m²) = 0.60 N. Both charges are positive, so the force is repulsive, and by Newton's third law each sphere exerts a force of the same 0.60 N magnitude on the other, even though the charges differ.\n\n(B) is wrong because 0.18 N divides by r instead of r² (0.054/0.30), ignoring the inverse-square dependence on distance.\n(C) is wrong because 1.8 N squares 0.30 m incorrectly as 0.030 m² instead of 0.090 m², making the force three times too large.\n(D) is wrong because 6.0 N is ten times the correct value, a power-of-ten slip in combining 10⁹ with the two factors of 10⁻⁶."
  },
  {
   "id": "p2e1-13",
   "unit": 11,
   "stem": "A student wants to measure both the current through a resistor and the potential difference across it. How should the meters be connected?",
   "choices": [
    "The ammeter in parallel with the resistor and the voltmeter in series with the resistor",
    "Both the ammeter and the voltmeter in series with the resistor",
    "Both the ammeter and the voltmeter in parallel with the resistor",
    "The ammeter in series with the resistor and the voltmeter in parallel with the resistor"
   ],
   "correct": 3,
   "explanation": "Correct: (D) The ammeter in series with the resistor and the voltmeter in parallel with the resistor. An ammeter measures the current that passes through it, so the resistor's current must flow through the meter: it goes in series, and it has very low resistance so it barely changes the current. A voltmeter measures the potential difference between two points, so its leads connect across the resistor, in parallel; it has very high resistance so it draws almost no current and does not disturb the circuit.\n\n(A) is wrong because this is exactly reversed; a low-resistance ammeter in parallel would short out the resistor, and a high-resistance voltmeter in series would nearly stop the current.\n(B) is wrong because a voltmeter in series adds a huge resistance that nearly stops the current, and it would not read the potential difference across the resistor.\n(C) is wrong because an ammeter in parallel provides a near-zero-resistance path that bypasses the resistor and can draw a dangerously large current."
  },
  {
   "id": "p2e1-14",
   "unit": 13,
   "stem": "A ray of light in air strikes a flat glass surface (n = 1.5) at an angle of incidence of 30° measured from the normal. What is the angle of refraction in the glass?",
   "choices": [
    "48.6°",
    "30°",
    "19.5°",
    "15°"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 19.5°. Snell's law relates the angles measured from the normal: n₁ sin θ₁ = n₂ sin θ₂. With n₁ = 1.0 (air), θ₁ = 30°, and n₂ = 1.5 (glass): sin θ₂ = (1.0)(sin 30°)/1.5 = 0.50/1.5 = 0.333, so θ₂ = sin⁻¹(0.333) ≈ 19.5°. The ray slows down entering the higher-index glass and bends toward the normal, so the refraction angle must be smaller than 30°.\n\n(A) is wrong because 48.6° swaps the indices (sin θ₂ = 1.5 × 0.50 = 0.75), which would bend the ray away from the normal, as for light leaving glass.\n(B) is wrong because 30° assumes the ray does not bend, which is true only at normal incidence or when the two indices are equal.\n(D) is wrong because 15° simply halves the angle; Snell's law relates the sines of the angles, not the angles themselves, and gives 19.5°."
  },
  {
   "id": "p2e1-15",
   "unit": 14,
   "stem": "In a double-slit experiment, light of wavelength 600 nm passes through two slits that are 0.20 mm apart. The screen is 2.0 m from the slits. What is the distance between adjacent bright fringes on the screen?",
   "choices": [
    "0.60 mm",
    "3.0 mm",
    "6.0 mm",
    "12 mm"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6.0 mm. For a double slit with small angles, bright fringes lie at y_m = mλL/d, so adjacent bright fringes are separated by Δy = λL/d. Converting to meters: λ = 600 × 10⁻⁹ m and d = 0.20 × 10⁻³ m. Then Δy = (600 × 10⁻⁹ m)(2.0 m)/(0.20 × 10⁻³ m) = (1.2 × 10⁻⁶)/(2.0 × 10⁻⁴) = 6.0 × 10⁻³ m = 6.0 mm. The small-angle approximation holds because 6.0 mm is tiny compared with L = 2.0 m.\n\n(A) is wrong because 0.60 mm is ten times too small, a conversion slip such as taking the slit spacing as 2.0 mm instead of 0.20 mm.\n(B) is wrong because 3.0 mm is λL/(2d), the distance from the central bright fringe to the first dark fringe, not the bright-to-bright spacing.\n(D) is wrong because 12 mm is 2λL/d, the distance from the central maximum to the second bright fringe, which spans two fringe spacings."
  },
  {
   "id": "p2e1-16",
   "unit": 13,
   "stem": "Light travels from air into water. Which statement is correct about the light's frequency and wavelength in the water?",
   "choices": [
    "Its frequency is unchanged and its wavelength is shorter.",
    "Its frequency is unchanged and its wavelength is longer.",
    "Its frequency decreases and its wavelength is unchanged.",
    "Its frequency increases and its wavelength is shorter."
   ],
   "correct": 0,
   "explanation": "Correct: (A) Its frequency is unchanged and its wavelength is shorter. A wave's frequency is set by its source: each crest arriving at the boundary produces exactly one crest in the water, so f cannot change. Light slows in water to v = c/n (n ≈ 1.33). Since v = fλ with f fixed, the wavelength shrinks by the same factor: λ_water = λ_air/n, about 75% of its value in air. So the frequency is unchanged and the wavelength is shorter.\n\n(B) is wrong because a longer wavelength would require a higher speed, but light travels slower in water than in air (v = c/n with n > 1).\n(C) is wrong because the frequency cannot change at a boundary because crests must arrive and leave at the same rate; it is the wavelength that changes.\n(D) is wrong because the frequency does not increase; the shorter wavelength results entirely from the lower speed at constant frequency."
  },
  {
   "id": "p2e1-17",
   "unit": 11,
   "stem": "A battery with an emf of 12 V and an internal resistance of 1.0 Ω is connected to a 5.0 Ω resistor, as shown. What is the potential difference across the 5.0 Ω resistor?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"36\" y=\"70\" width=\"138\" height=\"114\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\"/><text x=\"105\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">real battery</text><path d=\"M80 55L330 55\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M80 218L330 218\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M80 55L80 80\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"80\" y1=\"80\" x2=\"80\" y2=\"98\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"98\" x2=\"94\" y2=\"98\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"106\" x2=\"88\" y2=\"106\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"106\" x2=\"80\" y2=\"124\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"64\" y=\"108\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 V</text><text x=\"94\" y=\"90\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">+</text><path d=\"M80 124L80 132\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M80 132L80 138.25L72 141.38L88 147.63L72 153.88L88 160.13L72 166.38L88 172.63L80 175.75L80 182\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"104\" y=\"160\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">r = 1 Ω</text><path d=\"M80 182L80 218\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M330 55L330 95\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M330 95L330 103.75L322 108.13L338 116.88L322 125.63L338 134.38L322 143.13L338 151.88L330 156.25L330 165\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"304\" y=\"135\" text-anchor=\"end\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R = 5 Ω</text><path d=\"M330 165L330 218\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
     "alt": "A single loop circuit. A 12 volt battery with 1.0 ohm of internal resistance, drawn inside a dashed box labeled real battery, is connected to an external 5.0 ohm resistor.",
     "maxWidth": 400
    }
   ],
   "choices": [
    "12 V",
    "11 V",
    "2.0 V",
    "10 V"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 10 V. A real battery acts like an ideal emf 𝓔 in series with its internal resistance r. The single loop has total resistance r + R = 1.0 + 5.0 = 6.0 Ω, so I = 𝓔/(r + R) = 12 V/6.0 Ω = 2.0 A. The potential difference across the external resistor is V = IR = (2.0 A)(5.0 Ω) = 10 V. Equivalently, the terminal voltage is 𝓔 − Ir = 12 − (2.0)(1.0) = 10 V; the missing 2.0 V is lost inside the battery.\n\n(A) is wrong because 12 V would appear across R only for an ideal battery; the 1.0 Ω internal resistance uses up 2.0 V while current flows.\n(B) is wrong because 11 V subtracts only 1 V for the internal resistance, as if the current were 1.0 A; the actual current is 2.0 A, so the internal drop is 2.0 V.\n(C) is wrong because 2.0 V is the drop across the internal resistance (Ir), or the numerical value of the current, not the voltage across the 5.0 Ω resistor."
  },
  {
   "id": "p2e1-18",
   "unit": 15,
   "stem": "A radioactive sample initially contains 80 g of an isotope with a half-life of 3.0 days. How much of the isotope remains after 9.0 days?",
   "choices": [
    "5.0 g",
    "10 g",
    "20 g",
    "40 g"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 10 g. Each half-life cuts the remaining amount of the isotope in half, so the amount left is N = N₀(1/2)^(t/T½). The elapsed time is 9.0 days and the half-life is 3.0 days, so t/T½ = 9.0/3.0 = 3 half-lives. Then N = (80 g)(1/2)³ = 80/8 = 10 g. Step by step: 80 g → 40 g → 20 g → 10 g. Decay is exponential, not linear, so the sample never simply runs out.\n\n(A) is wrong because 5.0 g corresponds to four half-lives (12 days), one halving too many for 9.0 days.\n(C) is wrong because 20 g is what remains after two half-lives (6.0 days), one halving too few.\n(D) is wrong because 40 g is what remains after only one half-life (3.0 days), not the three half-lives that fit in 9.0 days."
  },
  {
   "id": "p2e1-19",
   "unit": 9,
   "stem": "A cup of hot coffee sits in a cool room and gradually cools until it reaches room temperature. Which statement about the entropy change in this process is correct?",
   "choices": [
    "The entropy of the coffee decreases, but the total entropy of the coffee and the room increases.",
    "The total entropy of the coffee and the room decreases, because the coffee loses thermal energy.",
    "The total entropy of the coffee and the room stays the same, because energy is conserved.",
    "The entropy of the coffee increases, because heat flows out of the coffee."
   ],
   "correct": 0,
   "explanation": "Correct: (A) The entropy of the coffee decreases, but the total entropy of the coffee and the room increases. As heat Q leaves the coffee at its high temperature T_hot, the coffee's entropy changes by about −Q/T_hot, a decrease. The same Q enters the room at the lower temperature T_room, raising the room's entropy by +Q/T_room. Because T_room < T_hot, Q/T_room > Q/T_hot, so the room gains more entropy than the coffee loses. The total entropy change is positive, as the second law requires for any spontaneous, irreversible process such as heat flow from hot to cold.\n\n(B) is wrong because the total entropy cannot decrease in a spontaneous process; only the coffee's own entropy decreases, and the room's increase is larger.\n(C) is wrong because conservation of energy does not imply conservation of entropy; irreversible heat flow from hot to cold always creates entropy.\n(D) is wrong because heat leaving a system lowers its entropy (ΔS = Q/T with Q negative), so the coffee's entropy decreases, not increases."
  },
  {
   "id": "p2e1-20",
   "unit": 9,
   "setId": "p2e1-set2",
   "stem": "How much work is done by the gas during process A → B?",
   "choices": [
    "200 J",
    "400 J",
    "600 J",
    "800 J"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 400 J. Work done by a gas equals the area under its path on a PV diagram. A → B is at a constant 100 kPa while the volume grows from 2 L to 6 L, so W = PΔV. In SI units, P = 100 × 10³ Pa and ΔV = (6 − 2) L = 4 × 10⁻³ m³ (1 L = 10⁻³ m³). Then W = (1.0 × 10⁵ Pa)(4.0 × 10⁻³ m³) = 400 J, positive because the gas expands.\n\n(A) is wrong because 200 J is (100 kPa)(2 L), the pressure times the starting volume at A, not times the change in volume.\n(C) is wrong because 600 J is the product PV at state B alone; it ignores that the gas started at 2 L, so only 4 L of expansion occurred.\n(D) is wrong because 800 J multiplies 100 kPa by 8 L, adding the two volumes instead of subtracting them."
  },
  {
   "id": "p2e1-21",
   "unit": 9,
   "setId": "p2e1-set2",
   "stem": "Which of the following correctly describes process B → C?",
   "choices": [
    "The gas absorbs heat from its surroundings, and its internal energy increases.",
    "The gas does positive work on its surroundings, and its temperature stays constant.",
    "The gas releases heat to its surroundings, and its internal energy stays constant.",
    "The gas releases heat to its surroundings, and its internal energy decreases."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The gas releases heat to its surroundings, and its internal energy decreases. B → C is a vertical line on the PV diagram: the volume stays 6 L, so the gas does no work (W = 0). The pressure falls from 100 kPa to 40 kPa, and for an ideal gas at constant volume P/T is constant, so the temperature falls to 40% of its value at B. The internal energy of an ideal gas depends only on T, so ΔU < 0. With W = 0, the first law gives Q = ΔU < 0: the gas releases heat.\n\n(A) is wrong because the pressure drops at constant volume, so the temperature and internal energy decrease; the gas does not absorb heat.\n(B) is wrong because no work is done because the volume does not change, and the temperature drops along with the pressure.\n(C) is wrong because the internal energy cannot stay constant because the temperature falls; with W = 0, all the heat released comes from ΔU."
  },
  {
   "id": "p2e1-22",
   "unit": 9,
   "setId": "p2e1-set2",
   "stem": "What is the net work done by the gas during one complete cycle A → B → C → A?",
   "choices": [
    "60 J",
    "120 J",
    "240 J",
    "400 J"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 120 J. For a cycle, the net work done by the gas equals the area enclosed by the loop, positive when the loop runs clockwise as here (A → B → C → A). The loop is a right triangle with legs ΔV = 6 − 2 = 4 L = 4.0 × 10⁻³ m³ and ΔP = 100 − 40 = 60 kPa = 6.0 × 10⁴ Pa. Area = ½(4.0 × 10⁻³ m³)(6.0 × 10⁴ Pa) = 120 J. Check: +400 J on A → B, 0 on B → C, and −½(100 + 40) kPa × 4 L = −280 J on C → A, for a net 120 J.\n\n(A) is wrong because 60 J is half the triangle's area, as if the ½ were applied twice or ΔV were taken as 2 L.\n(C) is wrong because 240 J is the area of the full 4 L × 60 kPa rectangle; the cycle encloses only the triangular half of it.\n(D) is wrong because 400 J is the work done during A → B alone; it ignores the negative work done on the gas during the compression C → A."
  },
  {
   "id": "p2e1-23",
   "unit": 12,
   "stem": "A straight wire 0.40 m long carries a current of 5.0 A perpendicular to a uniform magnetic field of 0.30 T. What is the magnitude of the magnetic force on the wire?",
   "choices": [
    "6.0 N",
    "1.5 N",
    "0.60 N",
    "0.15 N"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 0.60 N. The magnetic force on a straight current-carrying wire is F = ILB sin θ, and with the wire perpendicular to the field sin θ = 1. Substituting: F = (5.0 A)(0.40 m)(0.30 T) = 0.60 N. The units work out because 1 T = 1 N/(A·m), so A·m·T = N. The force is perpendicular to both the wire and the field.\n\n(A) is wrong because 6.0 N is ten times too large, a decimal slip in multiplying 5.0 × 0.40 × 0.30.\n(B) is wrong because 1.5 N is BI = (0.30)(5.0), which leaves out the 0.40 m length of the wire in the field.\n(D) is wrong because 0.15 N is a quarter of the correct value, as if only 0.10 m of the wire were in the field; the whole 0.40 m must be used."
  },
  {
   "id": "p2e1-24",
   "unit": 10,
   "stem": "What is the magnitude of the electric field at a point 0.50 m from an isolated point charge of +5.0 nC?",
   "choices": [
    "90 N/C",
    "180 N/C",
    "360 N/C",
    "900 N/C"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 180 N/C. The field of a point charge is E = k|q|/r², pointing away from a positive charge. Substituting: E = (9.0 × 10⁹ N·m²/C²)(5.0 × 10⁻⁹ C)/(0.50 m)² = (45 N·m²/C)/(0.25 m²) = 180 N/C. The nano prefix (10⁻⁹) cancels neatly with k's 10⁹, and squaring 0.50 m gives 0.25 m², so the field is four times the value of kq alone.\n\n(A) is wrong because 90 N/C divides by r (0.50 m) instead of r², missing the inverse-square law.\n(C) is wrong because 360 N/C is twice the correct value, as if kq = 45 N·m²/C were divided by 0.125 m² (half of r²) instead of (0.50 m)² = 0.25 m²; the inverse-square law with 0.25 m² gives 180 N/C.\n(D) is wrong because 900 N/C squares 0.50 m incorrectly as 0.050 m² instead of 0.25 m²."
  },
  {
   "id": "p2e1-25",
   "unit": 14,
   "setId": "p2e1-set3",
   "stem": "What is the wavelength of the wave?",
   "choices": [
    "2 cm",
    "3 cm",
    "6 cm",
    "12 cm"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 6 cm. The wavelength is the distance over which the wave shape repeats, for example from one crest to the next. On the graph, crests are at x = 1.5 cm and x = 7.5 cm, 6 cm apart, and the pattern completes two full cycles between x = 0 and x = 12 cm, so λ = 12 cm / 2 = 6 cm. The vertical axis gives amplitude (2 cm), not wavelength, and the zero crossings at 3 cm intervals are only half a wavelength apart.\n\n(A) is wrong because 2 cm is the amplitude, read from the vertical displacement axis, not a horizontal distance along the string.\n(B) is wrong because 3 cm is the spacing between adjacent zero crossings, which is half a wavelength.\n(D) is wrong because 12 cm is the full width shown on the graph, which contains two wavelengths."
  },
  {
   "id": "p2e1-26",
   "unit": 14,
   "setId": "p2e1-set3",
   "stem": "What is the frequency of the wave?",
   "choices": [
    "72 Hz",
    "6.0 Hz",
    "0.50 Hz",
    "2.0 Hz"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 2.0 Hz. For any periodic wave, v = fλ. The wave speed is given as 12 cm/s, and the graph shows λ = 6 cm (two full cycles in 12 cm). Solving for frequency: f = v/λ = (12 cm/s)/(6 cm) = 2.0 s⁻¹ = 2.0 Hz. Units of length cancel, so there is no need to convert to meters. Equivalently, the period is T = λ/v = 0.50 s, and f = 1/T = 2.0 Hz.\n\n(A) is wrong because 72 Hz multiplies v by λ (12 × 6) instead of dividing; vλ has units of cm²/s, not hertz.\n(B) is wrong because 6.0 Hz uses the 2 cm amplitude in place of the wavelength (12/2).\n(C) is wrong because 0.50 Hz is λ/v, which is the period in seconds, not the frequency."
  },
  {
   "id": "p2e1-27",
   "unit": 14,
   "stem": "A string of length 1.2 m is fixed at both ends and vibrates in the standing wave pattern shown, which has three loops. The wave speed on the string is 120 m/s. What is the frequency of the vibration?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50.0 80.0L53.0 76.4L56.0 72.8L59.0 69.3L62.0 65.8L65.0 62.4L68.0 59.1L71.0 56.0L74.0 53.0L77.0 50.1L80.0 47.5L83.0 45.0L86.0 42.8L89.0 40.8L92.0 39.0L95.0 37.5L98.0 36.3L101.0 35.3L104.0 34.6L107.0 34.1L110.0 34.0L113.0 34.1L116.0 34.6L119.0 35.3L122.0 36.3L125.0 37.5L128.0 39.0L131.0 40.8L134.0 42.8L137.0 45.0L140.0 47.5L143.0 50.1L146.0 53.0L149.0 56.0L152.0 59.1L155.0 62.4L158.0 65.8L161.0 69.3L164.0 72.8L167.0 76.4L170.0 80.0L173.0 83.6L176.0 87.2L179.0 90.7L182.0 94.2L185.0 97.6L188.0 100.9L191.0 104.0L194.0 107.0L197.0 109.9L200.0 112.5L203.0 115.0L206.0 117.2L209.0 119.2L212.0 121.0L215.0 122.5L218.0 123.7L221.0 124.7L224.0 125.4L227.0 125.9L230.0 126.0L233.0 125.9L236.0 125.4L239.0 124.7L242.0 123.7L245.0 122.5L248.0 121.0L251.0 119.2L254.0 117.2L257.0 115.0L260.0 112.5L263.0 109.9L266.0 107.0L269.0 104.0L272.0 100.9L275.0 97.6L278.0 94.2L281.0 90.7L284.0 87.2L287.0 83.6L290.0 80.0L293.0 76.4L296.0 72.8L299.0 69.3L302.0 65.8L305.0 62.4L308.0 59.1L311.0 56.0L314.0 53.0L317.0 50.1L320.0 47.5L323.0 45.0L326.0 42.8L329.0 40.8L332.0 39.0L335.0 37.5L338.0 36.3L341.0 35.3L344.0 34.6L347.0 34.1L350.0 34.0L353.0 34.1L356.0 34.6L359.0 35.3L362.0 36.3L365.0 37.5L368.0 39.0L371.0 40.8L374.0 42.8L377.0 45.0L380.0 47.5L383.0 50.1L386.0 53.0L389.0 56.0L392.0 59.1L395.0 62.4L398.0 65.8L401.0 69.3L404.0 72.8L407.0 76.4L410.0 80.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M50.0 80.0L53.0 83.6L56.0 87.2L59.0 90.7L62.0 94.2L65.0 97.6L68.0 100.9L71.0 104.0L74.0 107.0L77.0 109.9L80.0 112.5L83.0 115.0L86.0 117.2L89.0 119.2L92.0 121.0L95.0 122.5L98.0 123.7L101.0 124.7L104.0 125.4L107.0 125.9L110.0 126.0L113.0 125.9L116.0 125.4L119.0 124.7L122.0 123.7L125.0 122.5L128.0 121.0L131.0 119.2L134.0 117.2L137.0 115.0L140.0 112.5L143.0 109.9L146.0 107.0L149.0 104.0L152.0 100.9L155.0 97.6L158.0 94.2L161.0 90.7L164.0 87.2L167.0 83.6L170.0 80.0L173.0 76.4L176.0 72.8L179.0 69.3L182.0 65.8L185.0 62.4L188.0 59.1L191.0 56.0L194.0 53.0L197.0 50.1L200.0 47.5L203.0 45.0L206.0 42.8L209.0 40.8L212.0 39.0L215.0 37.5L218.0 36.3L221.0 35.3L224.0 34.6L227.0 34.1L230.0 34.0L233.0 34.1L236.0 34.6L239.0 35.3L242.0 36.3L245.0 37.5L248.0 39.0L251.0 40.8L254.0 42.8L257.0 45.0L260.0 47.5L263.0 50.1L266.0 53.0L269.0 56.0L272.0 59.1L275.0 62.4L278.0 65.8L281.0 69.3L284.0 72.8L287.0 76.4L290.0 80.0L293.0 83.6L296.0 87.2L299.0 90.7L302.0 94.2L305.0 97.6L308.0 100.9L311.0 104.0L314.0 107.0L317.0 109.9L320.0 112.5L323.0 115.0L326.0 117.2L329.0 119.2L332.0 121.0L335.0 122.5L338.0 123.7L341.0 124.7L344.0 125.4L347.0 125.9L350.0 126.0L353.0 125.9L356.0 125.4L359.0 124.7L362.0 123.7L365.0 122.5L368.0 121.0L371.0 119.2L374.0 117.2L377.0 115.0L380.0 112.5L383.0 109.9L386.0 107.0L389.0 104.0L392.0 100.9L395.0 97.6L398.0 94.2L401.0 90.7L404.0 87.2L407.0 83.6L410.0 80.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"50\" cy=\"80\" r=\"5\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"410\" cy=\"80\" r=\"5\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"50\" y1=\"150\" x2=\"410\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"410,150 402.62,153.29 402.62,146.71\" fill=\"#2E332E\"/><polygon points=\"50,150 57.38,146.71 57.38,153.29\" fill=\"#2E332E\"/><text x=\"230\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">L = 1.2 m</text></svg>",
     "alt": "A standing wave on a string fixed at both ends, showing three loops with nodes at both ends and two interior nodes. The string length is 1.2 meters.",
     "maxWidth": 440
    }
   ],
   "choices": [
    "50 Hz",
    "100 Hz",
    "150 Hz",
    "300 Hz"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 150 Hz. On a string fixed at both ends, each loop of a standing wave is half a wavelength long, with nodes at both ends. The figure shows three loops, so 3(λ/2) = L = 1.2 m, giving λ = 2(1.2 m)/3 = 0.80 m. Then f = v/λ = (120 m/s)/(0.80 m) = 150 Hz. This is the third harmonic, three times the fundamental frequency v/2L = 120/2.4 = 50 Hz.\n\n(A) is wrong because 50 Hz is the fundamental (one loop, λ = 2L = 2.4 m); the pattern shown has three loops.\n(B) is wrong because 100 Hz uses λ = 1.2 m, treating the whole string as one wavelength, which is the two-loop second harmonic.\n(D) is wrong because 300 Hz uses λ = 0.40 m, the length of one loop, but each loop is only half a wavelength."
  },
  {
   "id": "p2e1-28",
   "unit": 10,
   "setId": "p2e1-set4",
   "stem": "What is the magnitude of the net electric field at point P?",
   "choices": [
    "0 N/C",
    "4.5 × 10⁵ N/C",
    "9.0 × 10⁵ N/C",
    "1.8 × 10⁶ N/C"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 9.0 × 10⁵ N/C. P is 0.20 m from each charge. Each charge alone gives E = kQ/r² = (9.0 × 10⁹)(2.0 × 10⁻⁶ C)/(0.20 m)² = (1.8 × 10⁴)/(0.040) = 4.5 × 10⁵ N/C. The field of +Q points away from it, to the right at P, and the field of −Q points toward it, also to the right. Both fields point the same way, so they add: E_net = 2(4.5 × 10⁵) = 9.0 × 10⁵ N/C, directed toward −Q.\n\n(A) is wrong because zero would hold midway between two equal charges of the same sign; for opposite charges the two fields at P point the same way and add.\n(B) is wrong because 4.5 × 10⁵ N/C is the field of only one charge; the other charge contributes an equal field in the same direction.\n(D) is wrong because 1.8 × 10⁶ N/C is twice the correct value, as if each field were 9.0 × 10⁵ N/C from squaring 0.20 m as 0.020 m²."
  },
  {
   "id": "p2e1-29",
   "unit": 10,
   "setId": "p2e1-set4",
   "stem": "What is the electric potential at point P? (Take V = 0 infinitely far from the charges.)",
   "choices": [
    "Nonzero and negative, because the net electric field at P points toward the negative charge.",
    "Nonzero and positive, because the electric field at P is not zero.",
    "Nonzero and positive, because the positive charge is the source of the field.",
    "Zero, because the potentials due to the two equal and opposite charges cancel at P."
   ],
   "correct": 3,
   "explanation": "Correct: (D) Zero, because the potentials due to the two equal and opposite charges cancel at P. Electric potential is a scalar, so contributions add algebraically with their signs: V = kq/r summed over charges. At P both charges are 0.20 m away, so V = k(+Q)/0.20 + k(−Q)/0.20 = 0. Each term has magnitude (9.0 × 10⁹)(2.0 × 10⁻⁶)/0.20 = 9.0 × 10⁴ V, and they cancel exactly. The field at P is not zero (it is 9.0 × 10⁵ N/C), which shows that zero potential does not imply zero field.\n\n(A) is wrong because the direction of the field at a point does not set the sign of the potential there; the equal and opposite scalar terms sum to zero.\n(B) is wrong because a nonzero field means the potential is changing with position, not that its value is nonzero at that point.\n(C) is wrong because both charges are sources of potential; the −Q term is just as large as the +Q term at the midpoint, so they cancel."
  },
  {
   "id": "p2e1-30",
   "unit": 14,
   "stem": "Two identical speakers emit sound waves of the same wavelength in phase. A listener stands at a point where the path lengths to the two speakers differ by one-half of a wavelength. What does the listener hear at that point?",
   "choices": [
    "A minimum in loudness, because the waves interfere destructively",
    "A maximum in loudness, because the waves interfere constructively",
    "Sound of half the original frequency, because of the path difference",
    "Sound that is as loud as one speaker alone, because the waves do not interact"
   ],
   "correct": 0,
   "explanation": "Correct: (A) A minimum in loudness, because the waves interfere destructively. Two in-phase sources produce waves that arrive at a point with a phase difference set by the path difference. A path difference of λ/2 means one wave has traveled half a cycle farther, so its crests arrive with the other wave's troughs. The displacements cancel (destructive interference), and for identical speakers with similar amplitudes the listener hears a minimum in loudness. Constructive interference occurs at path differences of 0, λ, 2λ, and so on.\n\n(B) is wrong because a maximum requires a path difference of a whole number of wavelengths; half a wavelength puts the waves out of phase.\n(C) is wrong because interference changes the amplitude, not the frequency; the sound at that point still has the speakers' frequency.\n(D) is wrong because sound waves do superpose; at a half-wavelength path difference they cancel rather than pass through unaffected."
  },
  {
   "id": "p2e1-31",
   "unit": 12,
   "stem": "The north pole of a bar magnet is pushed toward the face of a conducting loop. Which statement correctly describes the current induced in the loop while the magnet moves?",
   "choices": [
    "The current creates a magnetic field that opposes the increase in flux, so the face of the loop nearest the magnet acts like a south pole.",
    "No current is induced, because the magnet does not touch the loop.",
    "A current is induced only after the magnet stops moving.",
    "The current creates a magnetic field that opposes the increase in flux, so the face of the loop nearest the magnet acts like a north pole."
   ],
   "correct": 3,
   "explanation": "Correct: (D) The current creates a magnetic field that opposes the increase in flux, so the face of the loop nearest the magnet acts like a north pole. Faraday's law says an emf is induced while the magnetic flux through the loop changes, and Lenz's law says the induced current flows so its own field opposes that change. As the north pole approaches, field lines from the magnet pointing into the loop grow stronger, so the flux increases. The induced current makes a field pointing back toward the magnet, which means the near face of the loop acts as a north pole, repelling the approaching north pole and opposing the motion.\n\n(A) is wrong because a south face would attract the approaching north pole, which would add to the change in flux instead of opposing it, violating energy conservation.\n(B) is wrong because induction requires a changing flux, not contact; the moving magnet changes the flux through the loop without touching it.\n(C) is wrong because once the magnet stops, the flux stops changing and the induced current falls to zero; current flows only during the motion."
  },
  {
   "id": "p2e1-32",
   "unit": 15,
   "stem": "What is the energy of a photon of visible light that has a wavelength of 500 nm? (Use hc = 1240 eV·nm.)",
   "choices": [
    "1.2 eV",
    "2.5 eV",
    "5.0 eV",
    "12 eV"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 2.5 eV. A photon's energy is E = hf = hc/λ. Using hc = 1240 eV·nm keeps the units simple: E = (1240 eV·nm)/(500 nm) = 2.48 eV, which rounds to 2.5 eV to two significant figures. This fits visible light, whose photons range from about 1.8 eV (red, 700 nm) to about 3.1 eV (violet, 400 nm); 500 nm is blue-green.\n\n(A) is wrong because 1.2 eV divides 1240 by 1000 nm, doubling the wavelength; that energy would be an infrared photon.\n(C) is wrong because 5.0 eV divides 1240 by about 250 nm, halving the wavelength; that energy is an ultraviolet photon.\n(D) is wrong because 12 eV divides 1240 by about 100 nm, a factor-of-five slip; energy is inversely proportional to wavelength, and 500 nm gives 2.48 eV."
  },
  {
   "id": "p2e1-33",
   "unit": 13,
   "stem": "An object is placed 5 cm in front of a concave spherical mirror that has a focal length of 10 cm. Which statement describes the image formed by the mirror?",
   "choices": [
    "It is virtual, upright, and larger than the object.",
    "It is real, inverted, and larger than the object.",
    "It is real, inverted, and smaller than the object.",
    "It is virtual, upright, and smaller than the object."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It is virtual, upright, and larger than the object. For a concave mirror, 1/f = 1/d_o + 1/d_i. With f = +10 cm and d_o = 5 cm (inside the focal length): 1/d_i = 1/10 − 1/5 = −1/10, so d_i = −10 cm. A negative image distance means a virtual image behind the mirror. The magnification is m = −d_i/d_o = −(−10)/5 = +2, so the image is upright and twice the object's height. This is how a makeup or shaving mirror works.\n\n(B) is wrong because a real, inverted, larger image forms only when the object is between f and 2f; this object is inside f, so the reflected rays diverge.\n(C) is wrong because a real, inverted, smaller image forms when the object is beyond 2f (here, beyond 20 cm), not 5 cm away.\n(D) is wrong because a virtual, upright, smaller image is what a convex mirror always forms; this concave mirror gives m = +2, an enlarged image."
  },
  {
   "id": "p2e1-34",
   "unit": 11,
   "stem": "A wire has resistance R. A second wire made of the same material has twice the length and twice the diameter of the first wire. What is the resistance of the second wire?",
   "choices": [
    "2R",
    "R",
    "R/2",
    "R/4"
   ],
   "correct": 2,
   "explanation": "Correct: (C) R/2. Resistance of a uniform wire is R = ρL/A, with cross-sectional area A = πd²/4. The second wire has length 2L, which doubles R. Its diameter is 2d, so its area is π(2d)²/4 = 4A, which divides R by 4. Combining: R₂ = ρ(2L)/(4A) = (2/4)(ρL/A) = R/2. The same material means the same resistivity ρ, so only the geometry changes.\n\n(A) is wrong because 2R accounts for doubling the length but ignores the larger cross-sectional area of the thicker wire.\n(B) is wrong because R assumes doubling the diameter doubles the area, cancelling the doubled length; area grows as the square of diameter, by a factor of 4.\n(D) is wrong because R/4 accounts for the fourfold area but forgets that doubling the length doubles the resistance."
  },
  {
   "id": "p2e1-35",
   "unit": 9,
   "stem": "A rigid sealed container holds an ideal gas at 27 °C and a pressure of 1.0 × 10⁵ Pa. The gas is heated to 127 °C. What is the final pressure of the gas?",
   "choices": [
    "4.7 × 10⁵ Pa",
    "2.0 × 10⁵ Pa",
    "1.3 × 10⁵ Pa",
    "1.0 × 10⁵ Pa"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.3 × 10⁵ Pa. In a rigid sealed container both V and n are fixed, so the ideal gas law gives P/T = constant, with T in kelvins. Converting: T₁ = 27 + 273 = 300 K and T₂ = 127 + 273 = 400 K. Then P₂ = P₁(T₂/T₁) = (1.0 × 10⁵ Pa)(400/300) = 1.33 × 10⁵ Pa ≈ 1.3 × 10⁵ Pa. Heating by 100 °C raises the absolute temperature by only one-third, so the pressure rises by one-third.\n\n(A) is wrong because 4.7 × 10⁵ Pa uses the Celsius ratio 127/27; gas-law proportions require absolute temperatures in kelvins.\n(B) is wrong because 2.0 × 10⁵ Pa assumes the temperature roughly doubles; in kelvins it goes only from 300 K to 400 K.\n(D) is wrong because 1.0 × 10⁵ Pa assumes the pressure stays constant, but a rigid container cannot expand, so heating raises the pressure."
  },
  {
   "id": "p2e1-36",
   "unit": 12,
   "stem": "A proton moves at 2.0 × 10⁶ m/s perpendicular to a uniform magnetic field of 0.50 T. What is the magnitude of the magnetic force on the proton?",
   "choices": [
    "1.6 × 10⁻¹² N",
    "3.2 × 10⁻¹³ N",
    "1.6 × 10⁻¹³ N",
    "1.6 × 10⁻¹⁴ N"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 1.6 × 10⁻¹³ N. The magnetic force on a charged particle is F = |q|vB sin θ; with v perpendicular to B, sin θ = 1. A proton has q = e = 1.6 × 10⁻¹⁹ C. Substituting: F = (1.6 × 10⁻¹⁹ C)(2.0 × 10⁶ m/s)(0.50 T) = 1.6 × 10⁻¹³ N. The factors 2.0 and 0.50 multiply to 1.0, so the magnitude is just 1.6 × 10⁻¹⁹ × 10⁶ = 1.6 × 10⁻¹³ N.\n\n(A) is wrong because 1.6 × 10⁻¹² N is ten times too large, a power-of-ten slip when combining 10⁻¹⁹ with 10⁶.\n(B) is wrong because 3.2 × 10⁻¹³ N is qv alone; it leaves out the 0.50 T field, which halves the product.\n(D) is wrong because 1.6 × 10⁻¹⁴ N is ten times too small, another exponent slip when combining 10⁻¹⁹ with 10⁶."
  },
  {
   "id": "p2e1-37",
   "unit": 10,
   "stem": "What is the electric potential energy of a system of two point charges, +4.0 μC and −2.0 μC, that are 0.60 m apart?",
   "choices": [
    "+0.12 J",
    "+0.072 J",
    "−0.072 J",
    "−0.12 J"
   ],
   "correct": 3,
   "explanation": "Correct: (D) −0.12 J. The electric potential energy of two point charges is U = kq₁q₂/r, with the signs of the charges included. Substituting: U = (9.0 × 10⁹)(4.0 × 10⁻⁶ C)(−2.0 × 10⁻⁶ C)/(0.60 m) = (−0.072 J·m)/(0.60 m) = −0.12 J. The negative value reflects attraction between opposite charges: the system has less energy than when the charges are infinitely far apart, so 0.12 J of work must be done to separate them completely.\n\n(A) is wrong because +0.12 J has the right magnitude but drops the negative sign; opposite charges give a negative potential energy.\n(B) is wrong because +0.072 J both drops the sign and forgets to divide by the 0.60 m separation.\n(C) is wrong because −0.072 J has the correct sign but is just kq₁q₂ without dividing by r = 0.60 m."
  },
  {
   "id": "p2e1-38",
   "unit": 15,
   "setId": "p2e1-set5",
   "stem": "What is the wavelength of the photon emitted when an electron makes a transition from n = 3 to n = 1?",
   "choices": [
    "95 nm",
    "190 nm",
    "380 nm",
    "1900 nm"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 190 nm. When the electron drops from n = 3 to n = 1, the emitted photon carries the energy difference between the levels: ΔE = E₃ − E₁ = (−1.5 eV) − (−8.0 eV) = 6.5 eV. The wavelength is λ = hc/ΔE = (1240 eV·nm)/(6.5 eV) = 190.8 nm ≈ 190 nm, in the ultraviolet. Larger energy drops give shorter wavelengths.\n\n(A) is wrong because 95 nm is half the correct wavelength, as if the energy difference were 13 eV, for example from doubling ΔE.\n(C) is wrong because 380 nm is twice the correct wavelength, as if the energy difference were only 3.25 eV, half of 6.5 eV.\n(D) is wrong because 1900 nm is ten times too large, a decimal slip such as dividing 1240 by 0.65 eV instead of 6.5 eV."
  },
  {
   "id": "p2e1-39",
   "unit": 15,
   "setId": "p2e1-set5",
   "stem": "Which transition emits the photon with the longest wavelength?",
   "choices": [
    "n = 4 to n = 3",
    "n = 2 to n = 1",
    "n = 3 to n = 1",
    "n = 4 to n = 1"
   ],
   "correct": 0,
   "explanation": "Correct: (A) n = 4 to n = 3. Photon wavelength is λ = hc/ΔE, so the longest wavelength comes from the smallest energy drop. From the diagram: 4 → 3 gives (−0.5) − (−1.5) = 1.0 eV; 2 → 1 gives (−3.0) − (−8.0) = 5.0 eV; 3 → 1 gives 6.5 eV; 4 → 1 gives 7.5 eV. The 4 → 3 transition has the smallest ΔE, so its photon has the longest wavelength: λ = 1240/1.0 = 1240 nm, in the infrared.\n\n(B) is wrong because n = 2 to n = 1 releases 5.0 eV, five times more than 4 → 3, so its wavelength (248 nm) is much shorter.\n(C) is wrong because n = 3 to n = 1 releases 6.5 eV, giving a short wavelength of about 190 nm.\n(D) is wrong because n = 4 to n = 1 releases the largest energy, 7.5 eV, so it gives the shortest wavelength (about 165 nm), not the longest."
  },
  {
   "id": "p2e1-40",
   "unit": 13,
   "setId": "p2e1-set6",
   "stem": "What is the distance from the lens to the image?",
   "choices": [
    "7.5 cm",
    "15 cm",
    "20 cm",
    "30 cm"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 15 cm. The thin-lens equation is 1/f = 1/d_o + 1/d_i. With f = +10 cm (converging) and d_o = 30 cm: 1/d_i = 1/10 − 1/30 = 3/30 − 1/30 = 2/30, so d_i = +15 cm. The positive value places the image on the far side of the lens. This matches the ray diagram, where the two rays cross between F and 2F, as expected for an object beyond 2F.\n\n(A) is wrong because 7.5 cm adds the reciprocals (1/10 + 1/30 = 4/30) instead of subtracting 1/d_o from 1/f.\n(C) is wrong because 20 cm is d_o − f (30 − 10), which subtracts distances directly instead of their reciprocals.\n(D) is wrong because 30 cm assumes the image forms as far from the lens as the object, which happens only when the object is exactly at 2F (20 cm)."
  },
  {
   "id": "p2e1-41",
   "unit": 13,
   "setId": "p2e1-set6",
   "stem": "What is the magnification of the image?",
   "choices": [
    "−2.0",
    "−0.50",
    "+0.50",
    "+2.0"
   ],
   "correct": 1,
   "explanation": "Correct: (B) −0.50. Magnification is m = h_i/h_o = −d_i/d_o. Using d_o = 30 cm and d_i = +15 cm from the thin-lens equation (1/d_i = 1/10 − 1/30 = 2/30): m = −15/30 = −0.50. The negative sign means the image is inverted relative to the object, and |m| = 0.50 means it is half as tall, consistent with the small inverted arrow in the ray diagram.\n\n(A) is wrong because −2.0 inverts the ratio, using d_o/d_i (30/15); that would make the image larger than the object.\n(C) is wrong because +0.50 has the right size but drops the minus sign; a real image from a single converging lens is inverted.\n(D) is wrong because +2.0 both inverts the ratio and drops the sign, describing an upright enlarged image, which is the virtual-image case."
  },
  {
   "id": "p2e1-42",
   "unit": 13,
   "setId": "p2e1-set6",
   "stem": "Which statement correctly describes the image?",
   "choices": [
    "It is virtual, upright, and smaller than the object.",
    "It is real, upright, and larger than the object.",
    "It is virtual, inverted, and larger than the object.",
    "It is real, inverted, and smaller than the object."
   ],
   "correct": 3,
   "explanation": "Correct: (D) It is real, inverted, and smaller than the object. With the object at 30 cm, beyond 2F (20 cm), the thin-lens equation gives d_i = +15 cm (1/d_i = 1/10 − 1/30 = 2/30). The positive image distance means the light actually converges on the opposite side of the lens, so the image is real and could be projected on a screen. The magnification m = −d_i/d_o = −15/30 = −0.50 shows it is inverted and half the object's height, as the ray diagram shows between F and 2F.\n\n(A) is wrong because a virtual, upright image forms only when the object is inside the focal length; here it is beyond 2F, and m is negative.\n(B) is wrong because a real image from a single converging lens is inverted, not upright, and |m| = 0.50 means it is smaller.\n(C) is wrong because the rays actually meet on the far side, so the image is real, and |m| = 0.50 means it is smaller, not larger."
  }
 ],
 "sets": {
  "p2e1-set1": {
   "text": "A 12 V battery with negligible internal resistance is connected to three resistors, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50 50L110 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M110 50L122.5 50L128.75 42L141.25 58L153.75 42L166.25 58L178.75 42L191.25 58L197.5 50L210 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"36\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₁ = 4 Ω</text><path d=\"M210 50L250 50\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"250\" cy=\"50\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M250 50L250 80\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M250 80L250 88.75L242 93.13L258 101.88L242 110.63L258 119.38L242 128.13L258 136.88L250 141.25L250 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"276\" y=\"118\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₂ = 6 Ω</text><path d=\"M250 150L250 200\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M250 50L400 50L400 80\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M400 80L400 88.75L392 93.13L408 101.88L392 110.63L408 119.38L392 128.13L408 136.88L400 141.25L400 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"426\" y=\"118\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">R₃ = 3 Ω</text><path d=\"M400 150L400 200\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"400\" cy=\"50\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M50 200L400 200\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"250\" cy=\"200\" r=\"3.6\" fill=\"#2E332E\"/><path d=\"M50 50L50 90\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"90\" x2=\"50\" y2=\"108\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"108\" x2=\"64\" y2=\"108\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"116\" x2=\"58\" y2=\"116\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"116\" x2=\"50\" y2=\"134\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M50 134L50 200\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"118\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 V</text><text x=\"64\" y=\"98\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">+</text></svg>",
     "alt": "A circuit with a 12 volt battery. A 4 ohm resistor R1 is in series with the battery, followed by a 6 ohm resistor R2 and a 3 ohm resistor R3 connected in parallel with each other."
    }
   ]
  },
  "p2e1-set2": {
   "text": "An ideal gas undergoes the cycle A → B → C → A shown in the PV diagram. Process A → B occurs at constant pressure, process B → C occurs at constant volume, and process C → A is a straight line on the diagram.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"278\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"232\" x2=\"456\" y2=\"232\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"236\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"190\" x2=\"456\" y2=\"190\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"194\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">40</text><line x1=\"64\" y1=\"148\" x2=\"456\" y2=\"148\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"152\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">60</text><line x1=\"64\" y1=\"106\" x2=\"456\" y2=\"106\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"110\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">80</text><line x1=\"64\" y1=\"64\" x2=\"456\" y2=\"64\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"68\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100</text><line x1=\"64\" y1=\"22\" x2=\"456\" y2=\"22\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">120</text><line x1=\"64\" y1=\"274\" x2=\"64\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"64\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"113\" y1=\"274\" x2=\"113\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"113\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"162\" y1=\"274\" x2=\"162\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"162\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"211\" y1=\"274\" x2=\"211\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"211\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"260\" y1=\"274\" x2=\"260\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"309\" y1=\"274\" x2=\"309\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"309\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"358\" y1=\"274\" x2=\"358\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"358\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"407\" y1=\"274\" x2=\"407\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"407\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">7</text><line x1=\"456\" y1=\"274\" x2=\"456\" y2=\"279\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"456\" y=\"293\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"274\" x2=\"456\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"22\" x2=\"64\" y2=\"274\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"260\" y=\"318\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Volume (L)</text><text x=\"18\" y=\"148\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 18 148)\">Pressure (kPa)</text><line x1=\"162\" y1=\"64\" x2=\"358\" y2=\"64\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"267,64 253,59 253,69\" fill=\"#3F7A94\"/><line x1=\"358\" y1=\"64\" x2=\"358\" y2=\"190\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"358,134 363,120 353,120\" fill=\"#3F7A94\"/><line x1=\"358\" y1=\"190\" x2=\"162\" y2=\"64\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"254.1,123.2 263.2,135 268.6,126.6\" fill=\"#3F7A94\"/><circle cx=\"162\" cy=\"64\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"146\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">A</text><circle cx=\"358\" cy=\"64\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"370\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">B</text><circle cx=\"358\" cy=\"190\" r=\"4.5\" fill=\"#2E332E\"/><text x=\"370\" y=\"182\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">C</text></svg>",
     "alt": "A PV diagram of a triangular cycle. State A is at 2 liters and 100 kilopascals, B at 6 liters and 100 kilopascals, and C at 6 liters and 40 kilopascals. The cycle runs A to B to C and back to A, clockwise."
    }
   ]
  },
  "p2e1-set3": {
   "text": "The graph shows the shape of a transverse wave traveling along a string at one instant. The wave speed is 12 cm/s.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"56\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"20\" x2=\"56\" y2=\"200\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"106\" x2=\"56\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"56\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"167\" y1=\"106\" x2=\"167\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"167\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"278\" y1=\"106\" x2=\"278\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"278\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"389\" y1=\"106\" x2=\"389\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"389\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">9</text><line x1=\"500\" y1=\"106\" x2=\"500\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"500\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"52\" y1=\"170\" x2=\"56\" y2=\"170\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"174\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-2</text><line x1=\"52\" y1=\"110\" x2=\"56\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"114\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"52\" y1=\"50\" x2=\"56\" y2=\"50\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"48\" y=\"54\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><path d=\"M56.0 110.0L59.7 103.7L63.4 97.5L67.1 91.5L70.8 85.6L74.5 80.0L78.2 74.7L81.9 69.9L85.6 65.4L89.3 61.5L93.0 58.0L96.7 55.2L100.4 52.9L104.1 51.3L107.8 50.3L111.5 50.0L115.2 50.3L118.9 51.3L122.6 52.9L126.3 55.2L130.0 58.0L133.7 61.5L137.4 65.4L141.1 69.9L144.8 74.7L148.5 80.0L152.2 85.6L155.9 91.5L159.6 97.5L163.3 103.7L167.0 110.0L170.7 116.3L174.4 122.5L178.1 128.5L181.8 134.4L185.5 140.0L189.2 145.3L192.9 150.1L196.6 154.6L200.3 158.5L204.0 162.0L207.7 164.8L211.4 167.1L215.1 168.7L218.8 169.7L222.5 170.0L226.2 169.7L229.9 168.7L233.6 167.1L237.3 164.8L241.0 162.0L244.7 158.5L248.4 154.6L252.1 150.1L255.8 145.3L259.5 140.0L263.2 134.4L266.9 128.5L270.6 122.5L274.3 116.3L278.0 110.0L281.7 103.7L285.4 97.5L289.1 91.5L292.8 85.6L296.5 80.0L300.2 74.7L303.9 69.9L307.6 65.4L311.3 61.5L315.0 58.0L318.7 55.2L322.4 52.9L326.1 51.3L329.8 50.3L333.5 50.0L337.2 50.3L340.9 51.3L344.6 52.9L348.3 55.2L352.0 58.0L355.7 61.5L359.4 65.4L363.1 69.9L366.8 74.7L370.5 80.0L374.2 85.6L377.9 91.5L381.6 97.5L385.3 103.7L389.0 110.0L392.7 116.3L396.4 122.5L400.1 128.5L403.8 134.4L407.5 140.0L411.2 145.3L414.9 150.1L418.6 154.6L422.3 158.5L426.0 162.0L429.7 164.8L433.4 167.1L437.1 168.7L440.8 169.7L444.5 170.0L448.2 169.7L451.9 168.7L455.6 167.1L459.3 164.8L463.0 162.0L466.7 158.5L470.4 154.6L474.1 150.1L477.8 145.3L481.5 140.0L485.2 134.4L488.9 128.5L492.6 122.5L496.3 116.3L500.0 110.0\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"278\" y=\"242\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">Position x (cm)</text><text x=\"16\" y=\"110\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 110)\">Displacement y (cm)</text></svg>",
     "alt": "A sinusoidal wave plotted as displacement in centimeters against position in centimeters. The wave has amplitude 2 centimeters and completes two full cycles between 0 and 12 centimeters."
    }
   ]
  },
  "p2e1-set4": {
   "text": "A charge +Q and a charge −Q, each of magnitude 2.0 μC, are fixed 0.40 m apart. Point P is midway between the two charges.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"30\" y1=\"70\" x2=\"450\" y2=\"70\" stroke=\"#E6E4DC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"110\" cy=\"70\" r=\"15\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"110\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">+</text><text x=\"110\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">+Q</text><circle cx=\"240\" cy=\"70\" r=\"5\" fill=\"#2E332E\"/><text x=\"240\" y=\"56\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">P</text><circle cx=\"370\" cy=\"70\" r=\"15\" fill=\"#CFE0EA\" stroke=\"#3F7A94\" stroke-width=\"2\"/><text x=\"370\" y=\"75\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"800\" fill=\"#2E332E\">−</text><text x=\"370\" y=\"108\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">−Q</text><line x1=\"110\" y1=\"132\" x2=\"370\" y2=\"132\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"370,132 362.62,135.29 362.62,128.71\" fill=\"#2E332E\"/><polygon points=\"110,132 117.38,128.71 117.38,135.29\" fill=\"#2E332E\"/><text x=\"240\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">0.40 m</text></svg>",
     "alt": "A horizontal line with a positive charge on the left, a point P in the middle, and a negative charge on the right. The charges are 0.40 meters apart."
    }
   ]
  },
  "p2e1-set5": {
   "text": "The figure shows the lowest energy levels of a hypothetical atom. Use hc = 1240 eV·nm.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 300\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"70\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Energy (eV)</text><line x1=\"110\" y1=\"258.67\" x2=\"230\" y2=\"258.67\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"262.67\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 1</text><text x=\"240\" y=\"262.67\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-8 eV</text><line x1=\"110\" y1=\"125.33\" x2=\"230\" y2=\"125.33\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"129.33\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 2</text><text x=\"240\" y=\"129.33\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-3 eV</text><line x1=\"110\" y1=\"85.33\" x2=\"230\" y2=\"85.33\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"89.33\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 3</text><text x=\"240\" y=\"89.33\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-1.5 eV</text><line x1=\"110\" y1=\"58.67\" x2=\"230\" y2=\"58.67\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"62.67\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">n = 4</text><text x=\"240\" y=\"62.67\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">-0.5 eV</text><line x1=\"110\" y1=\"45.33\" x2=\"230\" y2=\"45.33\" stroke=\"#9AA096\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"240\" y=\"49.33\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">0 eV (ionized)</text></svg>",
     "alt": "An energy level diagram with horizontal lines for n equals 1 at minus 8.0 electron volts, n equals 2 at minus 3.0, n equals 3 at minus 1.5, and n equals 4 at minus 0.5, with a dashed line at 0 for the ionization energy.",
     "maxWidth": 420
    }
   ]
  },
  "p2e1-set6": {
   "text": "An object is placed 30 cm in front of a thin converging lens that has a focal length of 10 cm, as shown. (The vertical scale of the diagram is exaggerated.)",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 270\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"140\" x2=\"540\" y2=\"140\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"62\" x2=\"280\" y2=\"218\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M272 70L280 62L288 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M272 210L280 218L288 210\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"210\" y1=\"135\" x2=\"210\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"210\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"350\" y1=\"135\" x2=\"350\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"350\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"140\" y1=\"135\" x2=\"140\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"140\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"420\" y1=\"135\" x2=\"420\" y2=\"145\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"420\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2F</text><line x1=\"70\" y1=\"140\" x2=\"70\" y2=\"92\" stroke=\"#3F7A94\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"70,92 74.73,102.59 65.27,102.59\" fill=\"#3F7A94\"/><line x1=\"70\" y1=\"92\" x2=\"280\" y2=\"92\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"92\" x2=\"536\" y2=\"267.54\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"92\" x2=\"536\" y2=\"198.51\" stroke=\"#D2705A\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"385\" y1=\"140\" x2=\"385\" y2=\"164\" stroke=\"#6E9A5E\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"385,164 380.27,153.41 389.73,153.41\" fill=\"#6E9A5E\"/></svg>",
     "alt": "A ray diagram for a converging lens. An upright arrow, the object, stands to the left of the lens, beyond twice the focal length. Two rays leave the arrow tip: one parallel to the axis that refracts through the far focal point, and one through the center of the lens. They meet to the right of the lens beyond the focal point, forming a small inverted arrow below the axis."
    }
   ]
  }
 }
};

export default EXAM;
