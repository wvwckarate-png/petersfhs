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
   "explanation": "Using F = qv × B with v along +y (up) and B along +z (out of the page): ŷ × ẑ = +x̂, which points to the right. For a positive charge the force is in the direction of v × B."
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
   "explanation": "v = fλ = (680)(0.50) = 340 m/s."
  },
  {
   "id": "p2s0-3",
   "unit": 9,
   "stem": "An ideal gas expands rapidly in an insulated cylinder, so that no heat flows into or out of the gas. What happens to the temperature of the gas?",
   "choices": [
    "It decreases, because the gas does work on its surroundings at the expense of its internal energy.",
    "It increases, because the gas has more room to move.",
    "It stays the same, because no heat is exchanged.",
    "It cannot be determined without knowing the initial pressure."
   ],
   "correct": 0,
   "explanation": "With Q = 0, the first law gives ΔU = −W_by. The expanding gas does positive work on its surroundings, so its internal energy decreases, and for an ideal gas this means the temperature falls."
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
   "explanation": "By Coulomb's law the force is proportional to the product of the charges. Doubling both charges multiplies the force by 2 × 2 = 4."
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
   "explanation": "The total resistance is 2 + 3 + 5 = 10 Ω, so I = V/R = 10/10 = 1.0 A."
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
   "explanation": "V = IR = (1.0 A)(5 Ω) = 5.0 V. The battery's 10 V is divided among the resistors in proportion to their resistances."
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
   "explanation": "From 1/f = 1/d_o + 1/d_i: 1/d_i = 1/10 − 1/20 = 1/20, so d_i = 20 cm. (An object at twice the focal length produces an image at twice the focal length.)"
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
   "explanation": "E = hc/λ = 1240/620 = 2.0 eV."
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
   "explanation": "At constant volume, P is proportional to the absolute temperature. The temperature triples, so the pressure triples: 3P."
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
