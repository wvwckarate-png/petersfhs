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
   "explanation": "Q = mcΔT = (0.50)(4200)(20) = 4.2 × 10⁴ J."
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
   "explanation": "Each branch of a parallel circuit is connected directly across the battery, so each bulb has the same potential difference as before and carries the same current. Removing one bulb changes only the total current drawn from the battery. The other bulbs' brightness does not change."
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
   "explanation": "The sound intensity level is β = 10 log(I/I₀) dB. A factor of 100 in intensity adds 10 log(100) = 10(2) = 20 dB."
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
   "explanation": "The 6 Ω and 3 Ω resistors in parallel have an equivalent resistance of (6)(3)/(6 + 3) = 2.0 Ω. In series with the 4 Ω resistor, the total resistance is 6.0 Ω, so I = V/R = 12/6.0 = 2.0 A."
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
   "explanation": "The full battery current of 2.0 A flows through the 4 Ω resistor, so P = I²R = (2.0)²(4) = 16 W. 36 W would come from wrongly applying the whole 12 V to the 4 Ω resistor (V²/R)."
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
   "explanation": "The 4 Ω resistor has a potential difference of (2.0)(4) = 8.0 V across it, leaving 12 − 8.0 = 4.0 V across the parallel pair. The current in the 6 Ω resistor is I = 4.0/6 = 0.67 A. (The 3 Ω resistor carries 1.3 A; the two add to the 2.0 A from the battery.)"
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
   "explanation": "The rod's positive charge pulls mobile electrons in the metal toward the near side of the sphere, leaving the far side positive. The near (negative) charges are closer to the rod, so the attraction is stronger than the repulsion on the far side, and the net force is attractive. No charge is transferred because they do not touch."
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
   "explanation": "Using the right-hand rule for F = qv × B: point the fingers along v (right), curl them toward B (into the page), and the thumb points up. For a positive charge the force is toward the top of the page. The magnetic force is always perpendicular to the velocity, so it can never point along the velocity, and it is perpendicular to B as well."
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
   "explanation": "The first law of thermodynamics is ΔU = Q − W_by, where Q is the heat added to the gas and W_by is the work done by the gas. Here ΔU = 500 − 200 = +300 J. +700 J would result from adding the work done by the gas instead of subtracting it."
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
   "explanation": "For a uniform field between parallel plates, E = V/d = 100/(2.0 × 10⁻³) = 5.0 × 10⁴ V/m. Using the distance in millimeters without converting to meters would give an answer 1000 times too small."
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
   "explanation": "The magnetic flux changes from BA = (0.50)(0.20) = 0.10 T·m² to zero in 0.10 s. By Faraday's law, |ε| = ΔΦ/Δt = 0.10/0.10 = 1.0 V."
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
   "explanation": "By Coulomb's law, F = kq₁q₂/r² = (9.0 × 10⁹)(2.0 × 10⁻⁶)(3.0 × 10⁻⁶)/(0.30)² = 0.60 N. The forces on the two spheres have equal magnitudes (Newton's third law)."
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
   "explanation": "An ammeter measures the current passing through it, so it must be in series with the resistor and have very low resistance. A voltmeter measures the potential difference between two points, so it is connected in parallel across the resistor and has very high resistance so it draws almost no current."
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
   "explanation": "Snell's law gives n₁ sin θ₁ = n₂ sin θ₂: (1.0)(sin 30°) = (1.5) sin θ₂, so sin θ₂ = 0.333 and θ₂ ≈ 19.5°. The ray bends toward the normal because it enters the higher-index glass. 48.6° results from putting the indices in the wrong places."
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
   "explanation": "For small angles, the fringe spacing is Δy = λL/d = (600 × 10⁻⁹)(2.0)/(0.20 × 10⁻³) = 6.0 × 10⁻³ m = 6.0 mm."
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
   "explanation": "The frequency of a wave is set by its source and does not change when the wave crosses a boundary. The speed of light is lower in water (v = c/n), and since v = fλ with f fixed, the wavelength is shorter."
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
   "explanation": "The internal and external resistors are in series, so I = ε/(r + R) = 12/6.0 = 2.0 A. The potential difference across the external resistor is V = IR = (2.0)(5.0) = 10 V. 12 V would be the potential difference only if the battery had no internal resistance."
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
   "explanation": "Nine days is three half-lives, so the sample is halved three times: 80 → 40 → 20 → 10 g."
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
   "explanation": "When energy flows out of the coffee as heat, the coffee's entropy decreases (ΔS = Q/T with Q negative). The room gains the same amount of energy at a lower temperature, so its entropy increases by more than the coffee's entropy decreases. The second law requires the total entropy of the coffee and the room to increase in a spontaneous process. Energy is conserved, but entropy is not."
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
   "explanation": "At constant pressure the work done by the gas is W = PΔV = (100 × 10³ Pa)(6 − 2)(10⁻³ m³) = 400 J (the area under the A → B line). 600 J is P·V at state B alone, which does not account for the gas starting at 2 L."
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
   "explanation": "The volume is constant, so no work is done (W = 0). The pressure drops, and since P/T is constant at fixed volume, the temperature also drops, so the internal energy decreases. With W = 0, the first law gives ΔU = Q, so Q is negative: the gas releases heat."
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
   "explanation": "The net work equals the area enclosed by the cycle, a triangle with base ΔV = 4.0 × 10⁻³ m³ and height ΔP = 60 × 10³ Pa: ½(4.0 × 10⁻³)(60 × 10³) = 120 J. The cycle runs clockwise, so the net work done by the gas is positive. 240 J would be the area of the full rectangle."
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
   "explanation": "F = BIL = (0.30)(5.0)(0.40) = 0.60 N."
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
   "explanation": "E = kq/r² = (9.0 × 10⁹)(5.0 × 10⁻⁹)/(0.50)² = 45/0.25 = 180 N/C. 90 N/C results from dividing by r instead of r²."
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
   "explanation": "One full wavelength is the distance over which the wave pattern repeats. The graph shows two complete cycles between x = 0 and x = 12 cm, so λ = 6 cm. (3 cm is half a wavelength, and 2 cm is the amplitude.)"
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
   "explanation": "From v = fλ, the frequency is f = v/λ = (12 cm/s)/(6 cm) = 2.0 Hz."
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
   "explanation": "Three loops means three half-wavelengths fit on the string: 3(λ/2) = 1.2 m, so λ = 0.80 m. The frequency is f = v/λ = 120/0.80 = 150 Hz. (The fundamental, with one loop, would have f = 50 Hz.)"
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
   "explanation": "P is 0.20 m from each charge. Each charge produces a field of magnitude kQ/r² = (9.0 × 10⁹)(2.0 × 10⁻⁶)/(0.20)² = 4.5 × 10⁵ N/C. Both fields at P point to the right (away from +Q and toward −Q), so they add: 9.0 × 10⁵ N/C. A net field of zero would occur only if the fields pointed in opposite directions."
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
   "explanation": "Potential is a scalar, and the contributions add algebraically: V = kQ/r + k(−Q)/r = 0 at the midpoint. A nonzero field does not imply a nonzero potential, and the direction of the field does not determine the sign of the potential at that point."
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
   "explanation": "A path difference of half a wavelength puts the two waves a half-cycle out of phase when they arrive, so crests of one coincide with troughs of the other and they cancel. This is destructive interference, which gives a minimum in loudness. The frequency of the sound is not changed by interference."
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
   "explanation": "By Lenz's law, the induced current opposes the change in flux that causes it. The flux through the loop from the approaching north pole is increasing, so the loop's induced field points back toward the magnet. A north face next to the approaching north pole produces repulsion, which opposes the motion. A current is induced only while the flux is changing."
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
   "explanation": "E = hc/λ = (1240 eV·nm)/(500 nm) = 2.48 eV ≈ 2.5 eV."
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
   "explanation": "The object is inside the focal length. The mirror equation gives 1/d_i = 1/10 − 1/5 = −1/10, so d_i = −10 cm. The negative image distance means the image is virtual (behind the mirror), and m = −d_i/d_o = +2, so the image is upright and twice as large — the way a makeup mirror works."
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
   "explanation": "The resistance is R = ρL/A. Doubling the length doubles R, but doubling the diameter increases the cross-sectional area by a factor of 2² = 4, which divides R by 4. Combined: 2/4 = 1/2, so the resistance is R/2."
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
   "explanation": "At constant volume and amount of gas, P/T is constant when T is the absolute temperature. The temperatures are 300 K and 400 K, so P = (1.0 × 10⁵)(400/300) = 1.3 × 10⁵ Pa. 4.7 × 10⁵ Pa results from using the Celsius temperatures (127/27) instead of kelvins."
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
   "explanation": "For a velocity perpendicular to the field, F = qvB = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50) = 1.6 × 10⁻¹³ N."
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
   "explanation": "U = kq₁q₂/r = (9.0 × 10⁹)(4.0 × 10⁻⁶)(−2.0 × 10⁻⁶)/(0.60) = −0.12 J. The energy is negative because the charges have opposite signs (they attract), so work would have to be done to separate them."
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
   "explanation": "The photon carries the energy difference: ΔE = −1.5 − (−8.0) = 6.5 eV. Then λ = hc/ΔE = 1240/6.5 ≈ 190 nm."
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
   "explanation": "The wavelength is inversely proportional to the photon energy, so the longest wavelength comes from the smallest energy difference. The n = 4 to n = 3 transition releases only 1.0 eV, less than the others (5.0 eV, 6.5 eV, and 7.5 eV)."
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
   "explanation": "The thin-lens equation, 1/f = 1/d_o + 1/d_i, gives 1/d_i = 1/10 − 1/30 = 2/30, so d_i = 15 cm."
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
   "explanation": "The magnification is m = −d_i/d_o = −15/30 = −0.50. The negative sign means the image is inverted, and its magnitude of 0.50 means the image is half as tall as the object."
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
   "explanation": "The object is beyond twice the focal length, and the image distance is positive (on the side of the lens opposite the object), so the image is real. Real images formed by a single converging lens are inverted, and since the magnification magnitude is 0.50, the image is smaller."
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
