// AP Physics 2 — Sample Exam — 9 questions. Short sample.
const EXAM = {
 "questions": [
  {
   "id": "p2s0-1",
   "unit": 12,
   "stem": "A positive charge moves toward the top of the page in a uniform magnetic field directed out of the page, as shown. What is the direction of the magnetic force on the charge at the instant shown?",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 268\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"20\" y=\"20\" width=\"360\" height=\"220\" fill=\"none\" stroke=\"#E6E4DC\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"60\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"60\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"116\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"116\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"172\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"228\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"228\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"284\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"284\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"55\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"107\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"107\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"159\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"159\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"340\" cy=\"211\" r=\"6\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"211\" r=\"1.8\" fill=\"#767F73\"/><circle cx=\"200\" cy=\"130\" r=\"13\" fill=\"#F6D5CC\" stroke=\"#D2705A\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"800\" fill=\"#2E332E\">+</text><line x1=\"200\" y1=\"117\" x2=\"200\" y2=\"58\" stroke=\"#2E332E\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><polygon points=\"200,58 204.37,67.79 195.63,67.79\" fill=\"#2E332E\"/><text x=\"200\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\" font-style=\"italic\">v</text><text x=\"200\" y=\"256\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">• = magnetic field directed out of the page</text></svg>",
     "alt": "A grid of dots showing a magnetic field directed out of the page. A positive charge in the middle moves toward the top of the page with a velocity arrow pointing up.",
     "maxWidth": 420
    }
   ],
   "choices": [
    "To the left",
    "Toward the top of the page",
    "Into the page",
    "To the right"
   ],
   "correct": 3,
   "explanation": "Correct: (D) To the right. The magnetic force on a moving charge is F = qv × B. In the figure, v points up the page (+y) and the dot symbols show B pointing out of the page (+z). The cross product ŷ × ẑ = +x̂, which points to the right. With the right-hand rule: fingers along v (up), curl toward B (out of the page), and the thumb points right. The charge is positive, so the force is in the v × B direction: to the right.\n\n(A) is wrong because to the left is the force direction for a negative charge, or the result of using the left hand or B × v.\n(B) is wrong because the magnetic force is always perpendicular to the velocity, so it cannot point along the motion toward the top of the page.\n(C) is wrong because the magnetic force is also perpendicular to B, so it cannot point into the page, which is along the field line."
  },
  {
   "id": "p2s0-2",
   "unit": 14,
   "stem": "A sound wave in air has a wavelength of 0.50 m and a frequency of 680 Hz. What is the speed of the wave?",
   "choices": [
    "1360 m/s",
    "680 m/s",
    "340 m/s",
    "170 m/s"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 340 m/s. For any periodic wave, the wave speed equals frequency times wavelength, v = fλ, because the wave travels one wavelength in each period. Here v = (680 Hz)(0.50 m) = 340 m/s. This matches the familiar speed of sound in air at room temperature (about 343 m/s), which is a good check on the result.\n\n(A) is wrong because 1360 m/s divides the frequency by the wavelength (680 ÷ 0.50) instead of multiplying them.\n(B) is wrong because 680 m/s just copies the frequency value; speed requires multiplying by the 0.50 m wavelength.\n(D) is wrong because 170 m/s multiplies the frequency by half the wavelength (0.25 m), a slip in using λ = 0.50 m."
  },
  {
   "id": "p2s0-3",
   "unit": 9,
   "stem": "An ideal gas expands rapidly in an insulated cylinder, so that no heat flows into or out of the gas. What happens to the temperature of the gas?",
   "choices": [
    "It decreases, because the gas does work at the expense of its internal energy.",
    "It increases, because the gas has more room in which to move around.",
    "It stays the same, because no heat is exchanged with the surroundings.",
    "It cannot be determined without knowing the initial pressure of the gas."
   ],
   "correct": 0,
   "explanation": "Correct: (A) It decreases, because the gas does work at the expense of its internal energy. This is an adiabatic process, so Q = 0. The first law, ΔU = Q − W<sub>by</sub>, becomes ΔU = −W<sub>by</sub>. As the gas expands it pushes the piston outward and does positive work on the surroundings, so its internal energy decreases. For an ideal gas the internal energy depends only on temperature (U = (3/2)nRT for a monatomic gas), so a drop in U means the temperature falls.\n\n(B) is wrong because more room does not add energy; with no heat input, the work done by the expanding gas must come from its internal energy.\n(C) is wrong because no heat exchange does not mean constant temperature; the internal energy still changes because the gas does work.\n(D) is wrong because the first law fixes the sign of ΔU without knowing the pressure, since Q = 0 and the work done by the gas is positive."
  },
  {
   "id": "p2s0-4",
   "unit": 10,
   "stem": "Two small charged spheres exert an electric force of magnitude F on each other. If the charge on each sphere is doubled and the distance between them is unchanged, what is the new force?",
   "choices": [
    "8F",
    "4F",
    "2F",
    "F"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 4F. Coulomb's law gives F = k|q₁q₂|/r², so the force is proportional to the product of the two charges and inversely proportional to the square of their separation. Doubling both charges multiplies the product by 2 × 2 = 4, and r is unchanged, so the new force is F' = k(2q₁)(2q₂)/r² = 4F.\n\n(A) is wrong because 8F multiplies by 2 three times (2³), but only two quantities double, q₁ and q₂, so the product q₁q₂ grows by 2 × 2 = 4 while r stays the same.\n(C) is wrong because 2F accounts for doubling only one of the charges; both charges double, so the product increases by a factor of 4.\n(D) is wrong because F assumes the force depends only on distance, but Coulomb's law makes it proportional to both charges."
  },
  {
   "id": "p2s0-5",
   "unit": 11,
   "setId": "p2s0-set1",
   "stem": "What is the current in the circuit?",
   "choices": [
    "0.50 A",
    "2.0 A",
    "5.0 A",
    "1.0 A"
   ],
   "correct": 3,
   "explanation": "Correct: (D) 1.0 A. In a series circuit the same current passes through every resistor, and the equivalent resistance is the sum: R<sub>eq</sub> = 2 Ω + 3 Ω + 5 Ω = 10 Ω. The battery has negligible internal resistance, so Ohm's law for the whole loop gives I = V/R<sub>eq</sub> = 10 V ÷ 10 Ω = 1.0 A.\n\n(A) is wrong because 0.50 A uses half the battery voltage, 5 V ÷ 10 Ω, or doubles the total resistance; neither fits this circuit.\n(B) is wrong because 2.0 A uses only the 5 Ω resistor, 10 V ÷ 5 Ω, ignoring the 2 Ω and 3 Ω resistors in the same loop.\n(C) is wrong because 5.0 A uses only the 2 Ω resistor, 10 V ÷ 2 Ω, ignoring the other two resistors in series."
  },
  {
   "id": "p2s0-6",
   "unit": 11,
   "setId": "p2s0-set1",
   "stem": "What is the potential difference across the 5 Ω resistor?",
   "choices": [
    "5.0 V",
    "10 V",
    "2.0 V",
    "1.0 V"
   ],
   "correct": 0,
   "explanation": "Correct: (A) 5.0 V. The current through each series resistor is the same 1.0 A found from I = 10 V ÷ 10 Ω. By Ohm's law the potential difference across the 5 Ω resistor is V = IR = (1.0 A)(5 Ω) = 5.0 V. The battery's 10 V is shared in proportion to resistance: 2.0 V, 3.0 V and 5.0 V, which add to 10 V as Kirchhoff's loop rule requires.\n\n(B) is wrong because 10 V is the total battery voltage, which is shared among all three resistors in series, not dropped across one.\n(C) is wrong because 2.0 V is the potential difference across the 2 Ω resistor, (1.0 A)(2 Ω), not across the 5 Ω resistor.\n(D) is wrong because 1.0 V confuses the 1.0 A current with a voltage; the voltage across 5 Ω is IR = 5.0 V."
  },
  {
   "id": "p2s0-7",
   "unit": 13,
   "stem": "An object is placed 20 cm from a thin converging lens that has a focal length of 10 cm. How far from the lens is the image?",
   "choices": [
    "40 cm",
    "30 cm",
    "20 cm",
    "10 cm"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 20 cm. The thin-lens equation is 1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>. Solving for the image distance: 1/d<sub>i</sub> = 1/10 cm − 1/20 cm = 2/20 − 1/20 = 1/20 cm⁻¹, so d<sub>i</sub> = +20 cm. The positive sign means a real image on the far side of the lens. This is the special case of an object at 2f, which forms a real, inverted, same-size image at 2f.\n\n(A) is wrong because 40 cm doubles the object distance; that would require the object to be at 4f/3, about 13 cm, not 20 cm.\n(B) is wrong because 30 cm adds the focal length and object distance (10 + 20), which is not how the lens equation combines them.\n(D) is wrong because 10 cm puts the image at the focal point, which only happens for an object very far away from the lens."
  },
  {
   "id": "p2s0-8",
   "unit": 15,
   "stem": "What is the energy of a photon of light with a wavelength of 620 nm? (Use hc = 1240 eV·nm.)",
   "choices": [
    "4.0 eV",
    "3.0 eV",
    "2.0 eV",
    "1.0 eV"
   ],
   "correct": 2,
   "explanation": "Correct: (C) 2.0 eV. A photon's energy is E = hf = hc/λ. Using hc = 1240 eV·nm lets the wavelength stay in nanometers: E = 1240 eV·nm ÷ 620 nm = 2.0 eV. This is reasonable for red-orange visible light, since visible photons carry about 1.8 to 3.1 eV, and shorter wavelengths carry more energy.\n\n(A) is wrong because 4.0 eV is twice the correct value; it would correspond to a 310 nm ultraviolet photon, half of 620 nm.\n(B) is wrong because 3.0 eV would require λ ≈ 413 nm (violet light), so it does not follow from 1240 ÷ 620.\n(D) is wrong because 1.0 eV is half the correct value; it would correspond to a 1240 nm infrared photon, not 620 nm."
  },
  {
   "id": "p2s0-9",
   "unit": 9,
   "stem": "A rigid sealed container holds an ideal gas at 200 K and pressure P. The gas is heated to 600 K. What is the final pressure?",
   "choices": [
    "9P",
    "3P",
    "P",
    "P/3"
   ],
   "correct": 1,
   "explanation": "Correct: (B) 3P. A rigid sealed container keeps both the volume and the amount of gas constant. From PV = nRT, P is then directly proportional to the absolute temperature: P₂/P₁ = T₂/T₁. Here T₂/T₁ = 600 K ÷ 200 K = 3, so P₂ = 3P. Faster molecules hit the walls harder and more often, which raises the pressure. Kelvin temperatures must be used for this ratio.\n\n(A) is wrong because 9P squares the temperature ratio, but pressure is proportional to T, not T², at constant volume.\n(C) is wrong because P assumes pressure is unchanged, but heating a gas in a rigid container always raises its pressure.\n(D) is wrong because P/3 inverts the relationship, treating pressure as inversely proportional to absolute temperature at constant volume."
  }
 ],
 "sets": {
  "p2s0-set1": {
   "text": "Three resistors are connected in series with a 10 V battery that has negligible internal resistance, as shown.",
   "figures": [
    {
     "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 460 200\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M50 45L90 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 45L110.83 45L116.25 37L127.08 53L137.92 37L148.75 53L159.58 37L170.42 53L175.83 45L186.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"143.33\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">2 Ω</text><path d=\"M90 45L100 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M186.67 45L196.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M206.67 45L217.5 45L222.92 37L233.75 53L244.58 37L255.42 53L266.25 37L277.08 53L282.5 45L293.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"250\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">3 Ω</text><path d=\"M196.67 45L206.67 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M293.33 45L303.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M313.33 45L324.17 45L329.58 37L340.42 53L351.25 37L362.08 53L372.92 37L383.75 53L389.17 45L400 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"356.67\" y=\"31\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">5 Ω</text><path d=\"M303.33 45L313.33 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M400 45L410 45\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M410 45L410 150L50 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M50 45L50 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"88\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"36\" y1=\"88\" x2=\"64\" y2=\"88\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"96\" x2=\"58\" y2=\"96\" stroke=\"#2E332E\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"96\" x2=\"50\" y2=\"114\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M50 114L50 150\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"38\" y=\"96\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">10 V</text></svg>",
     "alt": "A series circuit with a 10 volt battery and three resistors of 2 ohms, 3 ohms, and 5 ohms in a single loop."
    }
   ]
  }
 }
};

export default EXAM;
