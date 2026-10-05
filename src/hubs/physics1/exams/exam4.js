// AP Physics 1 — MCQ Exam 4 (42 questions). Uses g = 10 m/s².
const EXAM_4_QUESTIONS = [
  {
    "id": "e4-1",
    "unit": 3,
    "stem": "A person lifts a 4.0 kg object a vertical distance of 1.5 m at a constant speed. How much work does the person do on the object?",
    "choices": [
      "60 J",
      "80 J",
      "120 J",
      "600 J"
    ],
    "correct": 0,
    "explanation": "At constant speed the lifting force equals the weight, 40 N. The work is W = Fd = (40)(1.5) = 60 J."
  },
  {
    "id": "e4-2",
    "unit": 3,
    "stem": "A ball is thrown horizontally with a speed of 10 m/s from the top of a 20 m high cliff. Ignoring air resistance, what is the ball's speed just before it hits the ground?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 26 460 202\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><polygon points=\"30,56 120,56 120,210 30,210\" fill=\"#EFEBDD\" stroke=\"#2E332E\" stroke-width=\"2\"/><line x1=\"20\" y1=\"210\" x2=\"460\" y2=\"210\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"210\" x2=\"23\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"210\" x2=\"33\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"210\" x2=\"43\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"210\" x2=\"53\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"210\" x2=\"63\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"210\" x2=\"73\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"210\" x2=\"83\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"210\" x2=\"93\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"210\" x2=\"103\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"210\" x2=\"113\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"210\" x2=\"123\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"210\" x2=\"133\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"210\" x2=\"143\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"210\" x2=\"153\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"210\" x2=\"163\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"210\" x2=\"173\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"210\" x2=\"183\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"210\" x2=\"193\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"210\" x2=\"203\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"210\" x2=\"213\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"210\" x2=\"223\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"210\" x2=\"233\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"210\" x2=\"243\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"210\" x2=\"253\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"210\" x2=\"263\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"210\" x2=\"273\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"210\" x2=\"283\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"210\" x2=\"293\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"210\" x2=\"303\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"210\" x2=\"313\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"210\" x2=\"323\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"210\" x2=\"333\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"210\" x2=\"343\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"210\" x2=\"353\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"210\" x2=\"363\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"210\" x2=\"373\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"210\" x2=\"383\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"210\" x2=\"393\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"210\" x2=\"403\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"210\" x2=\"413\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"210\" x2=\"423\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"210\" x2=\"433\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"210\" x2=\"443\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"210\" x2=\"453\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"56\" r=\"6\" fill=\"#3F7A94\"/><line x1=\"128\" y1=\"56\" x2=\"190\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"190,56 180.61,60.19 180.61,51.81\" fill=\"#3F7A94\"/><text x=\"166\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">10 m/s</text><path d=\"M120 56L127 56.1L134 56.39L141 56.87L148 57.54L155 58.41L162 59.47L169 60.72L176 62.16L183 63.8L190 65.63L197 67.65L204 69.86L211 72.27L218 74.86L225 77.66L232 80.64L239 83.82L246 87.19L253 90.75L260 94.5L267 98.45L274 102.59L281 106.92L288 111.44L295 116.16L302 121.07L309 126.17L316 131.46L323 136.95L330 142.63L337 148.5L344 154.56L351 160.82L358 167.27L365 173.91L372 180.74L379 187.77L386 194.99L393 202.4L400 210\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"56\" x2=\"100\" y2=\"210\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"100,210 96.8,202.82 103.2,202.82\" fill=\"#767F73\"/><polygon points=\"100,56 103.2,63.18 96.8,63.18\" fill=\"#767F73\"/><text x=\"92\" y=\"137\" text-anchor=\"end\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">20 m</text></svg>",
        "alt": "A ball thrown horizontally at 10 meters per second from the top of a 20 meter high cliff.",
        "minWidth": 313
      }
    ],
    "choices": [
      "14 m/s",
      "17 m/s",
      "20 m/s",
      "22 m/s"
    ],
    "correct": 3,
    "explanation": "Energy conservation gives ½mv² = ½mv₀² + mgh, so v = √(v₀² + 2gh) = √(100 + 400) = √500 ≈ 22 m/s. 20 m/s is only the vertical component of the final velocity (√(2gh)); the horizontal 10 m/s must be included as well."
  },
  {
    "id": "e4-3",
    "unit": 2,
    "stem": "A 0.50 kg ball on a string moves in a horizontal circle of radius 1.0 m with a constant speed of 4.0 m/s on a frictionless surface. What is the tension in the string?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"84 1 326 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"190\" cy=\"140\" r=\"96\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/><circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><line x1=\"190\" y1=\"140\" x2=\"286\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"226.48\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">r = 1.0 m</text><circle cx=\"286\" cy=\"140\" r=\"25\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"286\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">0.50 kg</text><line x1=\"286\" y1=\"114\" x2=\"286\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"286,56 290.19,65.39 281.81,65.39\" fill=\"#3F7A94\"/><text x=\"298\" y=\"84\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 m/s</text><text x=\"400\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a 0.50 kilogram ball on a string moving in a horizontal circle of radius 1.0 meter at 4.0 meters per second.",
        "minWidth": 260
      }
    ],
    "choices": [
      "4.0 N",
      "8.0 N",
      "16 N",
      "32 N"
    ],
    "correct": 1,
    "explanation": "The tension supplies the centripetal force: T = mv²/r = (0.50)(4.0)²/1.0 = 8.0 N."
  },
  {
    "id": "e4-4",
    "unit": 3,
    "stem": "An 8.0 kg box slides 4.0 m across a rough horizontal floor. The coefficient of kinetic friction is 0.25. What is the magnitude of the work done by friction on the box?",
    "choices": [
      "20 J",
      "40 J",
      "80 J",
      "320 J"
    ],
    "correct": 2,
    "explanation": "The friction force is μₖmg = (0.25)(80) = 20 N, and the work is |W| = fd = (20)(4.0) = 80 J."
  },
  {
    "id": "e4-5",
    "unit": 6,
    "stem": "A skater reduces her rotational inertia from 4.0 kg·m² to 1.0 kg·m² by pulling her arms in. Friction is negligible. By what factor does her rotational kinetic energy change?",
    "choices": [
      "1/4",
      "1",
      "4",
      "16"
    ],
    "correct": 2,
    "explanation": "Angular momentum L is conserved, and K = L²/(2I). Reducing I to one-fourth of its value increases K by a factor of 4. (The angular speed increases by 4 and K = ½Iω² gives ½(I/4)(4ω)² = 4 × ½Iω².)"
  },
  {
    "id": "e4-6",
    "unit": 3,
    "stem": "What is the kinetic energy of a 0.20 kg ball that is moving at 6.0 m/s?",
    "choices": [
      "0.60 J",
      "1.2 J",
      "2.4 J",
      "3.6 J"
    ],
    "correct": 3,
    "explanation": "K = ½mv² = ½(0.20)(6.0)² = 3.6 J. 1.2 J is the ball's momentum (0.20 × 6.0) with the wrong unit, and 0.60 J results from forgetting to square the speed."
  },
  {
    "id": "e4-7",
    "unit": 4,
    "stem": "A 0.050 kg bullet moving at 400 m/s embeds itself in a 1.95 kg block that is initially at rest on a frictionless table. What is the speed of the block and bullet just after the collision?",
    "choices": [
      "5.0 m/s",
      "10 m/s",
      "20 m/s",
      "200 m/s"
    ],
    "correct": 1,
    "explanation": "Momentum is conserved: (0.050)(400) = (2.0)v, so v = 20/2.0 = 10 m/s."
  },
  {
    "id": "e4-8",
    "unit": 5,
    "stem": "A massless lever is 3.0 m long and rests on a fulcrum located 0.50 m from one end. A 600 N load rests on that end. What downward force at the other end is required to hold the lever in balance?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"12 7 465 237\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M116.67 124L100.67 154L132.67 154Z\" fill=\"#E8E6DE\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"90.67\" y1=\"154\" x2=\"142.67\" y2=\"154\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"22\" y=\"64\" width=\"56\" height=\"46\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"50\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">600 N</text><line x1=\"450\" y1=\"40\" x2=\"450\" y2=\"108\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"450,108 445.81,98.61 454.19,98.61\" fill=\"#D2705A\"/><text x=\"450\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">F = ?</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">massless lever, 3.0 m</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"116.67\" y1=\"128\" x2=\"116.67\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"204\" x2=\"116.67\" y2=\"204\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"116.67,204 109.49,207.2 109.49,200.8\" fill=\"#767F73\"/><polygon points=\"50,204 57.18,200.8 57.18,207.2\" fill=\"#767F73\"/><text x=\"83.33\" y=\"198\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.50 m</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"128\" x2=\"450\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"228\" x2=\"450\" y2=\"228\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"450,228 442.82,231.2 442.82,224.8\" fill=\"#767F73\"/><polygon points=\"50,228 57.18,224.8 57.18,231.2\" fill=\"#767F73\"/><text x=\"250\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3.0 m</text></svg>",
        "alt": "A massless lever 3.0 meters long on a fulcrum 0.50 meters from the left end, with a 600 newton load resting on the left end and an unknown downward force F applied at the right end.",
        "minWidth": 316
      }
    ],
    "choices": [
      "60 N",
      "100 N",
      "120 N",
      "300 N"
    ],
    "correct": 2,
    "explanation": "The load is 0.50 m from the fulcrum and the effort force is 2.5 m from the fulcrum on the other side. Balancing torques: (600)(0.50) = F(2.5), so F = 120 N."
  },
  {
    "id": "e4-9",
    "unit": 2,
    "stem": "A 1200 kg car travels at a constant speed of 15 m/s around a circular track of radius 50 m. What is the magnitude of the net force on the car?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"84 1 326 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"190\" cy=\"140\" r=\"96\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/><circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><line x1=\"190\" y1=\"140\" x2=\"286\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"226.48\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">r = 50 m</text><rect x=\"268\" y=\"129\" width=\"36\" height=\"22\" rx=\"5\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"286\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">car</text><text x=\"312\" y=\"176\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1200 kg</text><line x1=\"286\" y1=\"114\" x2=\"286\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"286,56 290.19,65.39 281.81,65.39\" fill=\"#3F7A94\"/><text x=\"298\" y=\"84\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">15 m/s</text><text x=\"400\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a 1200 kilogram car moving at a constant 15 meters per second around a circular track of radius 50 meters.",
        "minWidth": 260
      }
    ],
    "choices": [
      "900 N",
      "2,700 N",
      "5,400 N",
      "18,000 N"
    ],
    "correct": 2,
    "explanation": "The net force is the centripetal force: F = mv²/r = (1200)(15)²/50 = 5400 N. 18,000 N is mv, which has the wrong units and ignores the radius."
  },
  {
    "id": "e4-10",
    "unit": 5,
    "stem": "A 50 N force is applied to a door handle that is 0.80 m from the hinge. The force makes an angle of 60° with the line from the hinge to the handle (so that the force is partly along the door). What is the magnitude of the torque about the hinge?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"46 0 424 228\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"70\" y=\"142\" width=\"270\" height=\"16\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"64\" y1=\"122\" x2=\"64\" y2=\"178\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"132\" x2=\"56\" y2=\"125\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"142\" x2=\"56\" y2=\"135\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"152\" x2=\"56\" y2=\"145\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"162\" x2=\"56\" y2=\"155\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"172\" x2=\"56\" y2=\"165\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"150\" r=\"3\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"84\" y=\"182\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">hinge</text><line x1=\"340\" y1=\"150\" x2=\"440\" y2=\"150\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"150\" x2=\"392.5\" y2=\"59.07\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"392.5,59.07 391.44,69.29 384.18,65.1\" fill=\"#D2705A\"/><text x=\"400.5\" y=\"55.07\" text-anchor=\"start\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">50 N</text><path d=\"M398 150A58 58 0 0 0 369 99.77\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"410\" y=\"136\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">60°</text><line x1=\"70\" y1=\"196\" x2=\"340\" y2=\"196\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"340,196 332.82,199.2 332.82,192.8\" fill=\"#767F73\"/><polygon points=\"70,196 77.18,192.8 77.18,199.2\" fill=\"#767F73\"/><text x=\"205\" y=\"216\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.80 m</text><line x1=\"70\" y1=\"190\" x2=\"70\" y2=\"202\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"190\" x2=\"340\" y2=\"202\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"460\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a door hinged on the left. A 50 newton force is applied at the handle, 0.80 meters from the hinge, at an angle of 60 degrees to the line from the hinge to the handle.",
        "minWidth": 288
      }
    ],
    "choices": [
      "17 N·m",
      "20 N·m",
      "25 N·m",
      "35 N·m"
    ],
    "correct": 3,
    "explanation": "τ = rF sin θ = (0.80)(50)(sin 60°) = (0.80)(50)(0.866) ≈ 35 N·m. 20 N·m results from using cos 60° instead of sin 60°."
  },
  {
    "id": "e4-11",
    "unit": 2,
    "stem": "A 2.0 kg block rests on top of an 8.0 kg block, which rests on a frictionless table. A horizontal force on the lower block accelerates both blocks together at 1.5 m/s² without slipping. What is the magnitude of the friction force on the top block?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 12 464 181\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"150\" x2=\"462\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"150\" x2=\"21\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"150\" x2=\"31\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"150\" x2=\"41\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"150\" x2=\"51\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"150\" x2=\"61\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"150\" x2=\"71\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"150\" x2=\"81\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"150\" x2=\"91\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"150\" x2=\"101\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"150\" x2=\"111\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"150\" x2=\"121\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"150\" x2=\"131\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"150\" x2=\"141\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"150\" x2=\"151\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"150\" x2=\"161\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"150\" x2=\"171\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"150\" x2=\"181\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"150\" x2=\"191\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"150\" x2=\"201\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"150\" x2=\"211\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"150\" x2=\"221\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"150\" x2=\"231\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"150\" x2=\"241\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"150\" x2=\"251\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"150\" x2=\"261\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"150\" x2=\"271\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"150\" x2=\"281\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"150\" x2=\"291\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"150\" x2=\"301\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"150\" x2=\"311\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"150\" x2=\"321\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"150\" x2=\"331\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"150\" x2=\"341\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"150\" x2=\"351\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"150\" x2=\"361\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"150\" x2=\"371\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"150\" x2=\"381\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"150\" x2=\"391\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"150\" x2=\"401\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"150\" x2=\"411\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"150\" x2=\"421\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"150\" x2=\"431\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"150\" x2=\"441\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"150\" x2=\"451\" y2=\"158\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"170\" y=\"98\" width=\"170\" height=\"52\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"255\" y=\"129\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">8.0 kg</text><rect x=\"212\" y=\"56\" width=\"86\" height=\"42\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"255\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><line x1=\"60\" y1=\"124\" x2=\"168\" y2=\"124\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"168,124 158.61,128.19 158.61,119.81\" fill=\"#D2705A\"/><text x=\"114\" y=\"114\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"700\" fill=\"#2E332E\">F</text><line x1=\"306\" y1=\"44\" x2=\"386\" y2=\"44\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"386,44 376.61,48.19 376.61,39.81\" fill=\"#3F7A94\"/><text x=\"346\" y=\"34\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">a = 1.5 m/s²</text><text x=\"240\" y=\"180\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless table</text></svg>",
        "alt": "A 2.0 kilogram block resting on top of an 8.0 kilogram block on a frictionless table. A horizontal force F on the lower block accelerates both blocks together at 1.5 meters per second squared.",
        "minWidth": 316
      }
    ],
    "choices": [
      "0.5 N",
      "1.5 N",
      "2.0 N",
      "3.0 N"
    ],
    "correct": 3,
    "explanation": "The only horizontal force on the top block is static friction from the lower block, and it must produce the top block's acceleration: f = ma = (2.0)(1.5) = 3.0 N."
  },
  {
    "id": "e4-12",
    "unit": 8,
    "stem": "A 120 N force is applied to a piston with an area of 0.020 m². What pressure does the piston exert on the fluid?",
    "choices": [
      "6,000 Pa",
      "12,000 Pa",
      "60,000 Pa",
      "120,000 Pa"
    ],
    "correct": 0,
    "explanation": "Pressure is force divided by area: P = F/A = 120/0.020 = 6000 Pa."
  },
  {
    "id": "e4-13",
    "unit": 4,
    "stem": "A 1.0 kg block moving at 6.0 m/s collides head-on and elastically with a 2.0 kg block that is initially at rest. What is the speed of the 2.0 kg block just after the collision?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 136\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before the collision</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"50\" y=\"78\" width=\"70\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"85\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">1.0 kg</text><circle cx=\"65.4\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"104.6\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"85\" y1=\"62\" x2=\"137\" y2=\"62\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"137,62 127.61,66.19 127.61,57.81\" fill=\"#3F7A94\"/><text x=\"111\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">6.0 m/s</text><rect x=\"290\" y=\"78\" width=\"100\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"340\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"312\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"368\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"340\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">at rest</text></svg>",
        "alt": "A 1.0 kilogram block moving right at 6.0 meters per second toward a 2.0 kilogram block at rest.",
        "minWidth": 335
      }
    ],
    "choices": [
      "2.0 m/s",
      "3.0 m/s",
      "4.0 m/s",
      "6.0 m/s"
    ],
    "correct": 2,
    "explanation": "Conserve momentum, 6.0 = v₁ + 2v₂, and kinetic energy, 18 = ½v₁² + v₂². Solving gives v₁ = −2.0 m/s (the lighter block rebounds) and v₂ = +4.0 m/s. A perfectly inelastic collision would give 2.0 m/s, which does not conserve energy."
  },
  {
    "id": "e4-14",
    "unit": 6,
    "stem": "A 2.0 kg mass moves in a circle of radius 0.50 m at a constant speed of 3.0 m/s. What is the magnitude of its angular momentum about the center of the circle?",
    "choices": [
      "1.5 kg·m²/s",
      "2.0 kg·m²/s",
      "3.0 kg·m²/s",
      "6.0 kg·m²/s"
    ],
    "correct": 2,
    "explanation": "For circular motion, L = mvr = (2.0)(3.0)(0.50) = 3.0 kg·m²/s. 6.0 is the object's linear momentum (mv), which leaves out the radius."
  },
  {
    "id": "e4-15",
    "unit": 4,
    "stem": "A constant horizontal force of 10 N acts for 0.50 s on a 2.0 kg cart that is initially at rest on a frictionless track. What is the cart's speed after the force stops acting?",
    "choices": [
      "1.0 m/s",
      "2.5 m/s",
      "5.0 m/s",
      "10 m/s"
    ],
    "correct": 1,
    "explanation": "The impulse is FΔt = (10)(0.50) = 5.0 N·s, which equals the change in momentum: (2.0)v = 5.0, so v = 2.5 m/s."
  },
  {
    "id": "e4-16",
    "unit": 7,
    "stem": "The length of a simple pendulum is quadrupled. By what factor does the pendulum's period change?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correct": 0,
    "explanation": "The period is T = 2π√(L/g), which is proportional to √L. Quadrupling the length multiplies the period by √4 = 2."
  },
  {
    "id": "e4-17",
    "unit": 8,
    "stem": "Water leaks from a small hole in the side of a large open tank. The hole is 1.8 m below the water surface. What is the speed of the water as it leaves the hole?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 20 440 218\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"41\" y=\"60\" width=\"218\" height=\"160\" fill=\"#D8E8F2\" stroke=\"none\"/><path d=\"M40 30L40 220L260 220L260 30\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2.2\"/><line x1=\"41\" y1=\"60\" x2=\"259\" y2=\"60\" stroke=\"#3F7A94\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"150\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">open to atmosphere</text><circle cx=\"260\" cy=\"150\" r=\"4\" fill=\"#2E332E\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><path d=\"M260 150L267 150.22L274 150.88L281 151.98L288 153.53L295 155.51L302 157.94L309 160.8L316 164.11L323 167.86L330 172.05L337 176.68L344 181.75L351 187.26L358 193.22L365 199.61L372 206.45L379 213.72\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"64\" y1=\"60\" x2=\"64\" y2=\"150\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"64,150 60.8,142.82 67.2,142.82\" fill=\"#767F73\"/><polygon points=\"64,60 67.2,67.18 60.8,67.18\" fill=\"#767F73\"/><text x=\"74\" y=\"109\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.8 m</text><line x1=\"64\" y1=\"150\" x2=\"258\" y2=\"150\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"20\" y1=\"220\" x2=\"440\" y2=\"220\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"220\" x2=\"23\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"220\" x2=\"33\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"220\" x2=\"43\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"220\" x2=\"53\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"220\" x2=\"63\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"220\" x2=\"73\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"220\" x2=\"83\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"220\" x2=\"93\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"220\" x2=\"103\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"220\" x2=\"113\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"220\" x2=\"123\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"220\" x2=\"133\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"220\" x2=\"143\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"220\" x2=\"153\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"220\" x2=\"163\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"220\" x2=\"173\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"220\" x2=\"183\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"220\" x2=\"193\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"220\" x2=\"203\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"220\" x2=\"213\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"220\" x2=\"223\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"220\" x2=\"233\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"220\" x2=\"243\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"220\" x2=\"253\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"220\" x2=\"263\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"220\" x2=\"273\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"220\" x2=\"283\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"220\" x2=\"293\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"220\" x2=\"303\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"220\" x2=\"313\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"220\" x2=\"323\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"220\" x2=\"333\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"220\" x2=\"343\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"220\" x2=\"353\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"220\" x2=\"363\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"220\" x2=\"373\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"220\" x2=\"383\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"220\" x2=\"393\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"220\" x2=\"403\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"220\" x2=\"413\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"220\" x2=\"423\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"220\" x2=\"433\" y2=\"228\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><text x=\"285\" y=\"140\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">small hole</text></svg>",
        "alt": "A large open water tank with a small hole in its side 1.8 meters below the water surface, with water leaving the hole in a stream.",
        "minWidth": 299
      }
    ],
    "choices": [
      "6.0 m/s",
      "9.0 m/s",
      "18 m/s",
      "36 m/s"
    ],
    "correct": 0,
    "explanation": "For a large open tank, Bernoulli's equation gives the exit speed v = √(2gh) = √(2 × 10 × 1.8) = 6.0 m/s, the same speed an object would reach falling freely from that height."
  },
  {
    "id": "e4-18",
    "unit": 1,
    "stem": "A cart on a track starts at x = 2.0 m with a velocity of +4.0 m/s and has a constant acceleration of −2.0 m/s². What is the cart's position at t = 3.0 s?",
    "choices": [
      "3.0 m",
      "5.0 m",
      "8.0 m",
      "14 m"
    ],
    "correct": 1,
    "explanation": "The displacement is Δx = v₀t + ½at² = (4.0)(3.0) + ½(−2.0)(3.0)² = 12 − 9 = +3.0 m. Since the cart started at x = 2.0 m, its position is 2.0 + 3.0 = 5.0 m. 3.0 m is only the displacement, and 14 m ignores the acceleration."
  },
  {
    "id": "e4-19",
    "unit": 4,
    "stem": "A 2.0 kg object has a momentum of magnitude 6.0 kg·m/s. What is the object's kinetic energy?",
    "choices": [
      "1.5 J",
      "3.0 J",
      "6.0 J",
      "9.0 J"
    ],
    "correct": 3,
    "explanation": "The speed is v = p/m = 3.0 m/s, so K = ½mv² = ½(2.0)(3.0)² = 9.0 J. (Equivalently, K = p²/(2m) = 36/4.0 = 9.0 J.)"
  },
  {
    "id": "e4-20",
    "unit": 2,
    "stem": "A 2.0 kg block is released from rest on a rough incline that makes an angle of 30° with the horizontal. The coefficient of kinetic friction between the block and the incline is 0.50. What is the magnitude of the block's acceleration down the incline?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 77 277 155\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M40 214L256.51 214L256.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"214\" x2=\"276.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"214\" x2=\"23\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"214\" x2=\"33\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"214\" x2=\"43\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"214\" x2=\"53\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"214\" x2=\"63\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"214\" x2=\"73\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"214\" x2=\"83\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"93\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(191.55 126.5) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"184.05\" y=\"118.51\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><path d=\"M82 214A42 42 0 0 0 76.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><text x=\"182.89\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">rough, μk = 0.50</text></svg>",
        "alt": "A 2.0 kilogram block released from rest on a rough incline at 30 degrees with the horizontal, with a coefficient of kinetic friction of 0.50.",
        "minWidth": 260
      }
    ],
    "choices": [
      "0.67 m/s²",
      "2.5 m/s²",
      "4.3 m/s²",
      "5.0 m/s²"
    ],
    "correct": 0,
    "explanation": "Along the incline, the net force is mg sin 30° − μₖmg cos 30°, so a = g(sin 30° − μₖ cos 30°) = 10(0.50 − 0.50 × 0.866) ≈ 0.67 m/s². 5.0 m/s² ignores friction, and 4.3 m/s² is the deceleration due to friction alone."
  },
  {
    "id": "e4-21",
    "unit": 7,
    "stem": "A block oscillates without friction on an ideal spring in simple harmonic motion. Which graph correctly represents the total mechanical energy of the block–spring system as a function of the block's position x?",
    "choices": [
      "An upward-opening parabola, because the energy is proportional to x²",
      "A downward-opening parabola, because the energy is greatest at x = 0",
      "A horizontal line, because the total energy is constant",
      "A V-shaped graph, because the energy is proportional to |x|"
    ],
    "correct": 2,
    "explanation": "With no friction, the total mechanical energy ½kA² of the oscillator does not change. It shifts between kinetic energy and spring potential energy as x changes, but the total is constant. The spring potential energy alone is the parabola ½kx²."
  },
  {
    "id": "e4-22",
    "unit": 3,
    "stem": "A spring with a force constant of 800 N/m is compressed 0.10 m and then used to launch a 0.40 kg ball straight upward. Ignoring friction and air resistance, what maximum height above the launch point does the ball reach? (The spring's energy is fully transferred to the ball.)",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"64 15 250 218\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"130\" y1=\"135\" x2=\"270\" y2=\"135\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"215\" x2=\"300\" y2=\"215\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"215\" x2=\"103\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"215\" x2=\"113\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"215\" x2=\"123\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"215\" x2=\"133\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"215\" x2=\"143\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"215\" x2=\"153\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"215\" x2=\"163\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"215\" x2=\"173\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"215\" x2=\"183\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"215\" x2=\"193\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"215\" x2=\"203\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"215\" x2=\"213\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"215\" x2=\"223\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"215\" x2=\"233\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"215\" x2=\"243\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"215\" x2=\"253\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"215\" x2=\"263\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"215\" x2=\"273\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"215\" x2=\"283\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"215\" x2=\"293\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><path d=\"M200 161L200 164.38L186 166.06L214 169.44L186 172.81L214 176.19L186 179.56L214 182.94L186 186.31L214 189.69L186 193.06L214 196.44L186 199.81L214 203.19L186 206.56L214 209.94L200 211.63L200 215\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"200\" cy=\"144\" r=\"17\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"222\" y=\"149\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.40 kg</text><text x=\"232\" y=\"195\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">k = 800 N/m</text><text x=\"144\" y=\"129\" text-anchor=\"end\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">relaxed length</text><line x1=\"150\" y1=\"135\" x2=\"150\" y2=\"161\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"150,161 146.8,153.82 153.2,153.82\" fill=\"#767F73\"/><polygon points=\"150,135 153.2,142.18 146.8,142.18\" fill=\"#767F73\"/><text x=\"144\" y=\"153\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.10 m</text><line x1=\"200\" y1=\"119\" x2=\"200\" y2=\"25\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"200,25 204.19,34.39 195.81,34.39\" fill=\"#3F7A94\"/><text x=\"220\" y=\"40\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">launch upward</text></svg>",
        "alt": "A 0.40 kilogram ball resting on a vertical spring with force constant 800 newtons per meter that is compressed 0.10 meters below its relaxed length.",
        "minWidth": 260
      }
    ],
    "choices": [
      "1.0 m",
      "2.0 m",
      "4.0 m",
      "10 m"
    ],
    "correct": 0,
    "explanation": "The spring stores ½kx² = ½(800)(0.10)² = 4.0 J. At the top of the ball's flight all of it is gravitational potential energy: mgh = 4.0, so h = 4.0/(0.40 × 10) = 1.0 m."
  },
  {
    "id": "e4-23",
    "unit": 6,
    "stem": "A solid disk (rotational inertia I = ½MR²) rolls without slipping. What is the ratio of its rotational kinetic energy to its translational kinetic energy?",
    "choices": [
      "1/4",
      "1/3",
      "1/2",
      "1"
    ],
    "correct": 2,
    "explanation": "Rolling without slipping means ω = v/R. The rotational kinetic energy is ½Iω² = ½(½MR²)(v/R)² = ¼Mv², and the translational kinetic energy is ½Mv². The ratio is (¼)/(½) = 1/2."
  },
  {
    "id": "e4-24",
    "unit": 3,
    "stem": "A 3.0 kg cart on a horizontal track speeds up from 2.0 m/s to 6.0 m/s while a net force acts on it. How much net work is done on the cart?",
    "choices": [
      "24 J",
      "48 J",
      "54 J",
      "96 J"
    ],
    "correct": 1,
    "explanation": "By the work–energy theorem, W = ΔK = ½(3.0)(6.0² − 2.0²) = ½(3.0)(32) = 48 J. 24 J results from squaring the change in speed, (6.0 − 2.0)², instead of finding the change in v². 54 J is the cart's final kinetic energy, and 96 J forgets the factor of ½."
  },
  {
    "id": "e4-25",
    "unit": 1,
    "stem": "Ball 1 is dropped from rest from a height of 2.0 m above the floor. At the same instant, ball 2 is thrown horizontally from the same height with a large horizontal speed. Air resistance is negligible. Which statement about the balls' motion is correct?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 45 460 215\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"215\" x2=\"460\" y2=\"215\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"215\" x2=\"23\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"215\" x2=\"33\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"215\" x2=\"43\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"215\" x2=\"53\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"215\" x2=\"63\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"215\" x2=\"73\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"215\" x2=\"83\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"215\" x2=\"93\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"215\" x2=\"103\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"215\" x2=\"113\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"215\" x2=\"123\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"215\" x2=\"133\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"215\" x2=\"143\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"215\" x2=\"153\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"215\" x2=\"163\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"215\" x2=\"173\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"215\" x2=\"183\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"215\" x2=\"193\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"215\" x2=\"203\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"215\" x2=\"213\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"215\" x2=\"223\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"215\" x2=\"233\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"215\" x2=\"243\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"215\" x2=\"253\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"215\" x2=\"263\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"215\" x2=\"273\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"215\" x2=\"283\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"215\" x2=\"293\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"215\" x2=\"303\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"215\" x2=\"313\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"215\" x2=\"323\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"215\" x2=\"333\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"215\" x2=\"343\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"215\" x2=\"353\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"215\" x2=\"363\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"215\" x2=\"373\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"215\" x2=\"383\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"215\" x2=\"393\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"215\" x2=\"403\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"215\" x2=\"413\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"215\" x2=\"423\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"215\" x2=\"433\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"215\" x2=\"443\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"215\" x2=\"453\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"55\" x2=\"440\" y2=\"55\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"67\" r=\"12\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"120\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">1</text><line x1=\"120\" y1=\"83\" x2=\"120\" y2=\"131\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"120,131 115.99,122.02 124.01,122.02\" fill=\"#3F7A94\"/><circle cx=\"300\" cy=\"67\" r=\"12\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"300\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">2</text><line x1=\"314\" y1=\"67\" x2=\"400\" y2=\"67\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"400,67 390.61,71.19 390.61,62.81\" fill=\"#3F7A94\"/><text x=\"357\" y=\"89\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">large horizontal speed</text><text x=\"120\" y=\"247\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Ball 1: dropped from rest</text><text x=\"330\" y=\"247\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Ball 2: thrown horizontally</text><line x1=\"60\" y1=\"67\" x2=\"60\" y2=\"215\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"60,215 56.8,207.82 63.2,207.82\" fill=\"#767F73\"/><polygon points=\"60,67 63.2,74.18 56.8,74.18\" fill=\"#767F73\"/><text x=\"54\" y=\"139\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2.0 m</text></svg>",
        "alt": "Ball 1 dropped from rest and ball 2 thrown horizontally with a large speed, both released at the same instant from the same height of 2.0 meters above the floor.",
        "minWidth": 313
      }
    ],
    "choices": [
      "Ball 1 reaches the floor first, because it travels a shorter path.",
      "Ball 2 reaches the floor first, because it has a greater initial speed.",
      "Ball 2 reaches the floor later, because it must travel horizontally as well as vertically.",
      "The two balls reach the floor at the same time."
    ],
    "correct": 3,
    "explanation": "The vertical motion of a projectile is independent of its horizontal motion. Both balls start with zero vertical velocity from the same height and have the same vertical acceleration g, so they take the same time to fall, even though ball 2 lands farther away."
  },
  {
    "id": "e4-26",
    "unit": 5,
    "stem": "A 2.0 kg point mass is attached to the end of a light rod 1.5 m long that pivots about its other end. What net torque is required to give the mass an angular acceleration of 2.0 rad/s²?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"6 71 471 149\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><circle cx=\"450\" cy=\"117\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"450\" y=\"156\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"50\" cy=\"117\" r=\"20\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><circle cx=\"50\" cy=\"117\" r=\"3.4\" fill=\"#D2705A\"/><text x=\"50\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#D2705A\">axis ⊥ to rod</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">light rod</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"128\" x2=\"450\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"204\" x2=\"450\" y2=\"204\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"450,204 442.82,207.2 442.82,200.8\" fill=\"#767F73\"/><polygon points=\"50,204 57.18,200.8 57.18,207.2\" fill=\"#767F73\"/><text x=\"250\" y=\"198\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.5 m</text></svg>",
        "alt": "A 2.0 kilogram point mass at the end of a light rod 1.5 meters long that pivots about its other end.",
        "minWidth": 320
      }
    ],
    "choices": [
      "3.0 N·m",
      "6.0 N·m",
      "9.0 N·m",
      "18 N·m"
    ],
    "correct": 2,
    "explanation": "The rotational inertia of the point mass is I = mr² = (2.0)(1.5)² = 4.5 kg·m². The torque is τ = Iα = (4.5)(2.0) = 9.0 N·m."
  },
  {
    "id": "e4-27",
    "unit": 1,
    "stem": "A runner accelerates uniformly from 2.0 m/s to 8.0 m/s while covering a distance of 30 m. What is the magnitude of the runner's acceleration?",
    "choices": [
      "0.50 m/s²",
      "1.0 m/s²",
      "1.5 m/s²",
      "2.0 m/s²"
    ],
    "correct": 1,
    "explanation": "Use the kinematic equation that connects speeds and distance without needing the time: v² = v₀² + 2ax gives 64 = 4.0 + 2a(30), so a = 60/60 = 1.0 m/s²."
  },
  {
    "id": "e4-28",
    "unit": 3,
    "stem": "A block is pushed horizontally across a rough floor at a constant speed. Which of the following statements about the work done on the block is correct?",
    "choices": [
      "The work done by the applied force is zero, because the speed is constant.",
      "The work done by friction is zero, because the block does not accelerate.",
      "The work done by the applied force is less than the magnitude of the work done by friction.",
      "The net work done on the block is zero."
    ],
    "correct": 3,
    "explanation": "At constant speed the kinetic energy does not change, so the net work is zero. The applied force does positive work and friction does an equal amount of negative work, so each is nonzero and their magnitudes are equal."
  },
  {
    "id": "e4-29",
    "unit": 2,
    "stem": "A planet has twice the mass of Earth and twice the radius of Earth. What is the approximate gravitational acceleration at the surface of the planet? (Earth's surface value is 10 m/s².)",
    "choices": [
      "5.0 m/s²",
      "10 m/s²",
      "20 m/s²",
      "40 m/s²"
    ],
    "correct": 0,
    "explanation": "g = GM/R². Doubling the mass doubles g, but doubling the radius divides it by 2² = 4. Overall g = 10 × 2/4 = 5.0 m/s². Answering 10 m/s² would result from canceling the two doublings, and 20 m/s² from ignoring the radius."
  },
  {
    "id": "e4-30",
    "unit": 7,
    "stem": "A 0.50 kg block on an ideal spring with a force constant of 50 N/m oscillates with an amplitude of 0.20 m. What is the magnitude of the block's maximum acceleration?",
    "choices": [
      "2.0 m/s²",
      "20 m/s²",
      "25 m/s²",
      "100 m/s²"
    ],
    "correct": 1,
    "explanation": "The maximum acceleration occurs at maximum displacement, where the spring force is greatest: a_max = kA/m = (50)(0.20)/0.50 = 20 m/s². The value 2.0 is the block's maximum speed (Aω = 0.20 × 10), which is in m/s, not m/s²."
  },
  {
    "id": "e4-31",
    "unit": 2,
    "stem": "A student standing on a skateboard pushes horizontally against a wall and rolls backward, away from the wall. Which force is directly responsible for the increase in the student's speed?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"42 30 430 171\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"160\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"50\" x2=\"52\" y2=\"43\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"60\" x2=\"52\" y2=\"53\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"70\" x2=\"52\" y2=\"63\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"80\" x2=\"52\" y2=\"73\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"90\" x2=\"52\" y2=\"83\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"100\" x2=\"52\" y2=\"93\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"110\" x2=\"52\" y2=\"103\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"120\" x2=\"52\" y2=\"113\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"130\" x2=\"52\" y2=\"123\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"140\" x2=\"52\" y2=\"133\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"150\" x2=\"52\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"160\" x2=\"52\" y2=\"153\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"160\" x2=\"462\" y2=\"160\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"160\" x2=\"63\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"160\" x2=\"73\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"160\" x2=\"83\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"160\" x2=\"93\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"160\" x2=\"103\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"160\" x2=\"113\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"160\" x2=\"123\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"160\" x2=\"133\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"160\" x2=\"143\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"160\" x2=\"153\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"160\" x2=\"163\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"160\" x2=\"173\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"160\" x2=\"183\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"160\" x2=\"193\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"160\" x2=\"203\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"160\" x2=\"213\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"160\" x2=\"223\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"160\" x2=\"233\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"160\" x2=\"243\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"160\" x2=\"253\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"160\" x2=\"263\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"160\" x2=\"273\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"160\" x2=\"283\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"160\" x2=\"293\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"160\" x2=\"303\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"160\" x2=\"313\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"160\" x2=\"323\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"160\" x2=\"333\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"160\" x2=\"343\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"160\" x2=\"353\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"160\" x2=\"363\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"160\" x2=\"373\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"160\" x2=\"383\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"160\" x2=\"393\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"160\" x2=\"403\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"160\" x2=\"413\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"160\" x2=\"423\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"160\" x2=\"433\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"160\" x2=\"443\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"160\" x2=\"453\" y2=\"168\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"130\" y=\"148\" width=\"120\" height=\"8\" rx=\"4\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"152\" cy=\"158\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"228\" cy=\"158\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"188\" cy=\"70\" r=\"14\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"188\" y1=\"84\" x2=\"188\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"98\" x2=\"66\" y2=\"92\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"128\" x2=\"170\" y2=\"148\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"128\" x2=\"210\" y2=\"148\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><text x=\"110\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">wall</text><text x=\"190\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">student on skateboard</text><line x1=\"300\" y1=\"100\" x2=\"390\" y2=\"100\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"390,100 380.61,104.19 380.61,95.81\" fill=\"#3F7A94\"/><text x=\"345\" y=\"90\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">student rolls backward</text></svg>",
        "alt": "A student standing on a skateboard with both hands pushing against a wall, then rolling backward away from the wall.",
        "minWidth": 292
      }
    ],
    "choices": [
      "The force the wall exerts on the student",
      "The force the student exerts on the wall",
      "The force the skateboard's wheels exert on the floor",
      "The student's weight"
    ],
    "correct": 0,
    "explanation": "A force changes an object's motion only when it acts on that object. The student speeds up because the wall pushes on the student (the third-law partner of the student's push on the wall). The force the student exerts on the wall acts on the wall, not on the student."
  },
  {
    "id": "e4-32",
    "unit": 5,
    "stem": "A wheel is rotating at 8.0 rad/s when it begins to speed up with a constant angular acceleration of 4.0 rad/s². What is the wheel's angular speed 3.0 s later?",
    "choices": [
      "12 rad/s",
      "16 rad/s",
      "20 rad/s",
      "32 rad/s"
    ],
    "correct": 2,
    "explanation": "ω = ω₀ + αt = 8.0 + (4.0)(3.0) = 20 rad/s. 12 rad/s is the speed gained, and it leaves out the initial angular speed."
  },
  {
    "id": "e4-33",
    "unit": 3,
    "stem": "A 1500 kg car accelerates from rest to 20 m/s in 10 s. What is the average power delivered to the car?",
    "choices": [
      "15 kW",
      "30 kW",
      "60 kW",
      "300 kW"
    ],
    "correct": 1,
    "explanation": "The work done equals the change in kinetic energy: ½(1500)(20)² = 300,000 J. Dividing by the time gives P = 300,000/10 = 30,000 W = 30 kW. 60 kW would result from forgetting the ½."
  },
  {
    "id": "e4-34",
    "unit": 1,
    "stem": "A stone is thrown horizontally from a cliff with a speed of 15 m/s and lands 45 m from the base of the cliff, measured horizontally. Air resistance is negligible. How high is the cliff?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 26 460 237\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><polygon points=\"30,56 120,56 120,210 30,210\" fill=\"#EFEBDD\" stroke=\"#2E332E\" stroke-width=\"2\"/><line x1=\"20\" y1=\"210\" x2=\"460\" y2=\"210\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"210\" x2=\"23\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"210\" x2=\"33\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"210\" x2=\"43\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"210\" x2=\"53\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"210\" x2=\"63\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"210\" x2=\"73\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"210\" x2=\"83\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"210\" x2=\"93\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"210\" x2=\"103\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"210\" x2=\"113\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"210\" x2=\"123\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"210\" x2=\"133\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"210\" x2=\"143\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"210\" x2=\"153\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"210\" x2=\"163\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"210\" x2=\"173\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"210\" x2=\"183\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"210\" x2=\"193\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"210\" x2=\"203\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"210\" x2=\"213\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"210\" x2=\"223\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"210\" x2=\"233\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"210\" x2=\"243\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"210\" x2=\"253\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"210\" x2=\"263\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"210\" x2=\"273\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"210\" x2=\"283\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"210\" x2=\"293\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"210\" x2=\"303\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"210\" x2=\"313\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"210\" x2=\"323\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"210\" x2=\"333\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"210\" x2=\"343\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"210\" x2=\"353\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"210\" x2=\"363\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"210\" x2=\"373\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"210\" x2=\"383\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"210\" x2=\"393\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"210\" x2=\"403\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"210\" x2=\"413\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"210\" x2=\"423\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"210\" x2=\"433\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"210\" x2=\"443\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"210\" x2=\"453\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"56\" r=\"6\" fill=\"#3F7A94\"/><line x1=\"128\" y1=\"56\" x2=\"190\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"190,56 180.61,60.19 180.61,51.81\" fill=\"#3F7A94\"/><text x=\"166\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">15 m/s</text><path d=\"M120 56L127 56.1L134 56.39L141 56.87L148 57.54L155 58.41L162 59.47L169 60.72L176 62.16L183 63.8L190 65.63L197 67.65L204 69.86L211 72.27L218 74.86L225 77.66L232 80.64L239 83.82L246 87.19L253 90.75L260 94.5L267 98.45L274 102.59L281 106.92L288 111.44L295 116.16L302 121.07L309 126.17L316 131.46L323 136.95L330 142.63L337 148.5L344 154.56L351 160.82L358 167.27L365 173.91L372 180.74L379 187.77L386 194.99L393 202.4L400 210\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"56\" x2=\"100\" y2=\"210\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"100,210 96.8,202.82 103.2,202.82\" fill=\"#767F73\"/><polygon points=\"100,56 103.2,63.18 96.8,63.18\" fill=\"#767F73\"/><text x=\"92\" y=\"137\" text-anchor=\"end\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">h = ?</text><line x1=\"120\" y1=\"232\" x2=\"400\" y2=\"232\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"400,232 392.82,235.2 392.82,228.8\" fill=\"#767F73\"/><polygon points=\"120,232 127.18,228.8 127.18,235.2\" fill=\"#767F73\"/><text x=\"260\" y=\"250\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">45 m</text><line x1=\"120\" y1=\"222\" x2=\"120\" y2=\"238\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"222\" x2=\"400\" y2=\"238\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A stone thrown horizontally at 15 meters per second from the top of a cliff of unknown height, landing 45 meters from the base of the cliff.",
        "minWidth": 313
      }
    ],
    "choices": [
      "20 m",
      "45 m",
      "60 m",
      "90 m"
    ],
    "correct": 1,
    "explanation": "The horizontal motion is at constant speed, so the flight time is t = 45/15 = 3.0 s. The vertical drop is h = ½gt² = ½(10)(3.0)² = 45 m. 90 m results from forgetting the factor of ½."
  },
  {
    "id": "e4-35",
    "unit": 2,
    "stem": "A ball attached to a string is swung in a horizontal circle at constant speed. The string suddenly breaks. Ignoring gravity and friction, which path does the ball take immediately afterward?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"84 1 331 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"190\" cy=\"140\" r=\"96\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/><circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><line x1=\"190\" y1=\"140\" x2=\"286\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"226.48\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">r</text><circle cx=\"286\" cy=\"140\" r=\"15\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M307.55 129.72A118 118 0 0 0 230.36 29.12\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><polygon points=\"230.36,29.12 238.36,33.12 228.36,39.12\" fill=\"#2E332E\"/><text x=\"308\" y=\"170\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">string breaks here</text><text x=\"400\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a ball swinging in a horizontal circle on a string. The string breaks when the ball reaches the point on the right side of the circle.",
        "minWidth": 260
      }
    ],
    "choices": [
      "A straight line along the tangent to the circle at the point where the string broke",
      "A straight line directly away from the center of the circle",
      "A curved path that continues around the circle",
      "A straight line directly toward the center of the circle"
    ],
    "correct": 0,
    "explanation": "With the string broken, no net force acts on the ball, so by Newton's first law it continues in a straight line at constant velocity. At the instant of release the velocity is tangent to the circle. There is no outward force pushing the ball away from the center."
  },
  {
    "id": "e4-36",
    "unit": 1,
    "stem": "An object moves along a straight line at a constant velocity of 6.0 m/s for 2.0 s and then slows uniformly to rest during the next 4.0 s. What is the total distance the object travels?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"236\" x2=\"496\" y2=\"236\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"240\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"64\" y1=\"200\" x2=\"496\" y2=\"200\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"164\" x2=\"496\" y2=\"164\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"168\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"64\" y1=\"128\" x2=\"496\" y2=\"128\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"92\" x2=\"496\" y2=\"92\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"64\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"60\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">7</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"272\" x2=\"136\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"208\" y1=\"272\" x2=\"208\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"352\" y1=\"272\" x2=\"352\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"424\" y1=\"272\" x2=\"424\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">v (m/s)</text><path d=\"M64 56L208 56L496 272\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A velocity versus time graph: constant 6.0 meters per second for 2.0 seconds, then decreasing uniformly to zero at 6.0 seconds.",
        "minWidth": 351
      }
    ],
    "choices": [
      "12 m",
      "24 m",
      "30 m",
      "36 m"
    ],
    "correct": 1,
    "explanation": "During the first 2.0 s the object travels (6.0)(2.0) = 12 m. While slowing uniformly from 6.0 m/s to rest, its average speed is 3.0 m/s, so in 4.0 s it travels (3.0)(4.0) = 12 m. The total is 24 m. 36 m would result from using 6.0 m/s for the whole 6.0 s."
  },
  {
    "id": "e4-37",
    "unit": 8,
    "stem": "A tank that is open to the atmosphere is filled with water to a depth h. Which change would increase the absolute pressure at the bottom of the tank?",
    "choices": [
      "Making the tank wider while keeping the same depth of water",
      "Using a tank with a larger volume but the same depth of water",
      "Using a tank whose walls slope outward but keeping the same depth",
      "Increasing the depth of the water"
    ],
    "correct": 3,
    "explanation": "In a fluid at rest the pressure depends on the depth below the surface, P = P₀ + ρgh, and not on the width, volume, or shape of the container. Only a change in depth, the fluid's density, or the surface pressure changes the pressure at the bottom."
  },
  {
    "id": "e4-38",
    "unit": 5,
    "stem": "A wheel rotates about a fixed axle at a constant angular speed. Which of the following statements is true?",
    "choices": [
      "A constant nonzero net torque must act on the wheel.",
      "The net torque on the wheel points in the direction of its rotation.",
      "The net torque on the wheel is zero.",
      "The angular acceleration of the wheel is nonzero but constant."
    ],
    "correct": 2,
    "explanation": "A constant angular speed means the angular acceleration is zero, so by the rotational form of Newton's second law (τ_net = Iα) the net torque is zero. Constant rotation does not need a net torque, just as constant velocity does not need a net force."
  },
  {
    "id": "e4-39",
    "unit": 2,
    "stem": "In a lab, a student applies different net forces F to a cart on a frictionless track and measures the cart's acceleration a. A graph of a versus F is a straight line through the origin with a slope of 0.25 kg⁻¹. What is the mass of the cart?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"209\" x2=\"496\" y2=\"209\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"213\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.5</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"64\" y1=\"83\" x2=\"496\" y2=\"83\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"87\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.5</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"172\" y1=\"272\" x2=\"172\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"172\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"388\" y1=\"272\" x2=\"388\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"388\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">F (N)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">a (m/s²)</text><path d=\"M64 272L172 209L280 146L388 83L496 20\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"64\" cy=\"272\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"172\" cy=\"209\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"280\" cy=\"146\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"388\" cy=\"83\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/><circle cx=\"496\" cy=\"20\" r=\"3.8\" fill=\"#3F7A94\" stroke=\"#3F7A94\" stroke-width=\"1.8\"/></svg>",
        "alt": "A graph of acceleration versus net force for a cart: a straight line through the origin with a slope of 0.25 per kilogram, passing through the points (2 N, 0.5 m/s squared), (4 N, 1.0), (6 N, 1.5) and (8 N, 2.0).",
        "minWidth": 351
      }
    ],
    "choices": [
      "0.25 kg",
      "1.0 kg",
      "2.0 kg",
      "4.0 kg"
    ],
    "correct": 3,
    "explanation": "Newton's second law gives a = F/m, so the slope of a versus F is 1/m. Then m = 1/0.25 = 4.0 kg. The slope itself, 0.25, is the reciprocal of the mass."
  },
  {
    "id": "e4-40",
    "unit": 8,
    "stem": "Water flows out of a garden-hose nozzle at a volume flow rate of 2.0 × 10⁻⁴ m³/s. The nozzle opening has an area of 5.0 × 10⁻⁵ m². What is the speed of the water leaving the nozzle?",
    "choices": [
      "1.0 m/s",
      "4.0 m/s",
      "10 m/s",
      "40 m/s"
    ],
    "correct": 1,
    "explanation": "The volume flow rate is Q = Av, so v = Q/A = (2.0 × 10⁻⁴)/(5.0 × 10⁻⁵) = 4.0 m/s."
  },
  {
    "id": "e4-41",
    "unit": 8,
    "stem": "A uniform cylinder floats upright in water with 30% of its volume below the water surface. What is the density of the cylinder? (The density of water is 1000 kg/m³.)",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"50 50 320 190\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"61\" y=\"130\" width=\"298\" height=\"100\" fill=\"#D8E8F2\" stroke=\"none\"/><path d=\"M60 80L60 230L360 230L360 80\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2.2\"/><line x1=\"61\" y1=\"130\" x2=\"359\" y2=\"130\" stroke=\"#3F7A94\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"170\" y=\"60\" width=\"80\" height=\"100\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><rect x=\"171\" y=\"130\" width=\"78\" height=\"30\" fill=\"#B9D2E0\" stroke=\"none\"/><line x1=\"170\" y1=\"130\" x2=\"250\" y2=\"130\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"300\" y=\"110\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">cylinder</text><text x=\"300\" y=\"182\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">water</text><text x=\"210\" y=\"180\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">30% below the surface</text></svg>",
        "alt": "A uniform cylinder floating upright in water with 30 percent of its volume below the water surface.",
        "minWidth": 260
      }
    ],
    "choices": [
      "300 kg/m³",
      "700 kg/m³",
      "1,000 kg/m³",
      "3,300 kg/m³"
    ],
    "correct": 0,
    "explanation": "A floating object's density equals the fluid's density times the fraction submerged: ρ = (0.30)(1000) = 300 kg/m³. 700 kg/m³ would be the density if 70% of the cylinder were submerged."
  },
  {
    "id": "e4-42",
    "unit": 4,
    "stem": "Which of the following statements about a perfectly inelastic collision between two objects is correct?",
    "choices": [
      "The objects move together after the collision, and no kinetic energy is lost.",
      "The objects bounce apart after the collision, and momentum is not conserved.",
      "The objects bounce apart after the collision, and all of the kinetic energy is lost.",
      "The objects move together after the collision, and some kinetic energy is lost."
    ],
    "correct": 3,
    "explanation": "In a perfectly inelastic collision the objects stick together and move with a common velocity. Momentum is conserved, but the maximum possible amount of kinetic energy is converted to other forms (thermal energy, deformation), so the kinetic energy decreases."
  }
];

export default EXAM_4_QUESTIONS;
