// AP Physics 1 — MCQ Exam 3 (42 questions). Uses g = 10 m/s².
const EXAM_3_QUESTIONS = [
  {
    "id": "e3-1",
    "unit": 1,
    "stem": "A ball is thrown straight up at 12 m/s from ground level. Ignoring air resistance, how long is the ball in the air before it returns to the ground?",
    "choices": [
      "0.6 s",
      "1.2 s",
      "2.4 s",
      "4.8 s"
    ],
    "correct": 2,
    "explanation": "The ball rises until its velocity is zero, which takes t = v₀/g = 1.2 s, and then takes the same time to fall back to the launch height. The total time is 2(1.2) = 2.4 s. 1.2 s is only the time to reach the top."
  },
  {
    "id": "e3-2",
    "unit": 3,
    "stem": "A 0.20 kg ball is dropped from a height of 5.0 m onto the floor and rebounds to a height of 3.2 m. How much mechanical energy is lost in the bounce?",
    "choices": [
      "1.8 J",
      "2.4 J",
      "3.2 J",
      "3.6 J"
    ],
    "correct": 3,
    "explanation": "The energy lost is the difference in gravitational potential energy: mg(h₁ − h₂) = (0.20)(10)(5.0 − 3.2) = 3.6 J. 1.8 is the difference in height (in meters), not an energy."
  },
  {
    "id": "e3-3",
    "unit": 1,
    "stem": "A student walks 6.0 m east and then 8.0 m north. What is the magnitude of the student's displacement?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"78 0 357 253\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"100\" y1=\"220\" x2=\"240\" y2=\"220\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"240,220 230.61,224.19 230.61,215.81\" fill=\"#3F7A94\"/><line x1=\"240\" y1=\"220\" x2=\"240\" y2=\"60\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"240,60 244.19,69.39 235.81,69.39\" fill=\"#3F7A94\"/><circle cx=\"100\" cy=\"220\" r=\"5\" fill=\"#2E332E\"/><text x=\"100\" y=\"240\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">start</text><circle cx=\"240\" cy=\"60\" r=\"5\" fill=\"#2E332E\"/><text x=\"250\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">end</text><text x=\"170\" y=\"212\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">6.0 m east</text><text x=\"250\" y=\"140\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">8.0 m north</text><line x1=\"370\" y1=\"70\" x2=\"410\" y2=\"70\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"410,70 401.82,73.65 401.82,66.35\" fill=\"#2E332E\"/><text x=\"416\" y=\"74\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">E</text><line x1=\"370\" y1=\"70\" x2=\"370\" y2=\"30\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"370,30 373.65,38.18 366.35,38.18\" fill=\"#2E332E\"/><text x=\"370\" y=\"22\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">N</text></svg>",
        "alt": "A path starting at a point, going 6.0 meters east and then 8.0 meters north to the end point.",
        "minWidth": 260
      }
    ],
    "choices": [
      "10 m",
      "14 m",
      "28 m",
      "48 m"
    ],
    "correct": 0,
    "explanation": "The displacement is the straight-line vector from start to finish. The two legs are perpendicular, so the magnitude is √(6.0² + 8.0²) = 10 m. The total distance traveled is 14 m, which is a different quantity, since distance is the total path length."
  },
  {
    "id": "e3-4",
    "unit": 3,
    "stem": "A 2.0 kg box slides down a frictionless ramp from a point 3.0 m above the bottom. How much work does gravity do on the box during the descent?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 57 322 175\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M40 214L256.51 214L256.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"214\" x2=\"276.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"214\" x2=\"23\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"214\" x2=\"33\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"214\" x2=\"43\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"214\" x2=\"53\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"214\" x2=\"63\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"214\" x2=\"73\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"214\" x2=\"83\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"93\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(226.2 106.5) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"218.7\" y=\"98.51\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><path d=\"M82 214A42 42 0 0 0 76.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><text x=\"182.89\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless</text><line x1=\"278.51\" y1=\"214\" x2=\"278.51\" y2=\"89\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"278.51,89 281.71,96.18 275.3,96.18\" fill=\"#767F73\"/><polygon points=\"278.51,214 275.3,206.82 281.71,206.82\" fill=\"#767F73\"/><text x=\"288.51\" y=\"155.5\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">3.0 m</text><line x1=\"256.51\" y1=\"89\" x2=\"284.51\" y2=\"89\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A 2.0 kilogram box at the top of a frictionless ramp, 3.0 meters above the bottom of the ramp.",
        "minWidth": 260
      }
    ],
    "choices": [
      "30 J",
      "60 J",
      "120 J",
      "180 J"
    ],
    "correct": 1,
    "explanation": "Gravity does work equal to the weight times the vertical drop: W = mgh = (2.0)(10)(3.0) = 60 J, independent of the ramp's length or angle."
  },
  {
    "id": "e3-5",
    "unit": 5,
    "stem": "A flywheel rotating at 10 rad/s slows down uniformly and comes to rest in 5.0 s. What is the magnitude of its angular acceleration?",
    "choices": [
      "2.0 rad/s²",
      "5.0 rad/s²",
      "10 rad/s²",
      "50 rad/s²"
    ],
    "correct": 0,
    "explanation": "α = Δω/Δt = 10/5.0 = 2.0 rad/s² in magnitude. 50 results from multiplying the angular speed by the time."
  },
  {
    "id": "e3-6",
    "unit": 4,
    "stem": "A constant net force of 20 N acts on a 5.0 kg object that is initially at rest. After 4.0 s, what is the object's speed?",
    "choices": [
      "4.0 m/s",
      "16 m/s",
      "20 m/s",
      "80 m/s"
    ],
    "correct": 1,
    "explanation": "The impulse is FΔt = (20)(4.0) = 80 N·s, which equals the change in momentum: (5.0)v = 80, so v = 16 m/s. 4.0 m/s is the acceleration (20/5.0), and 80 is the impulse in N·s."
  },
  {
    "id": "e3-7",
    "unit": 2,
    "stem": "A 3.0 kg object on a frictionless horizontal surface is acted on by two horizontal forces: 12 N toward the east and 4.0 N toward the west. What is the magnitude of the object's acceleration?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 75 464 103\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"135\" x2=\"21\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"135\" x2=\"31\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"135\" x2=\"41\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"135\" x2=\"51\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"135\" x2=\"61\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"135\" x2=\"71\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"135\" x2=\"81\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"135\" x2=\"91\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"135\" x2=\"101\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"135\" x2=\"111\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"135\" x2=\"121\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"135\" x2=\"131\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"135\" x2=\"141\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"135\" x2=\"151\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"135\" x2=\"161\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"135\" x2=\"171\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"135\" x2=\"181\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"135\" x2=\"191\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"135\" x2=\"201\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"135\" x2=\"211\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"135\" x2=\"221\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"135\" x2=\"231\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"135\" x2=\"241\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"135\" x2=\"251\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"135\" x2=\"261\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"135\" x2=\"271\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"135\" x2=\"281\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"135\" x2=\"291\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"135\" x2=\"301\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"135\" x2=\"311\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"135\" x2=\"321\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"135\" x2=\"331\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"135\" x2=\"341\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"135\" x2=\"351\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"135\" x2=\"361\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"135\" x2=\"371\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"135\" x2=\"381\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"135\" x2=\"391\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"135\" x2=\"401\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"135\" x2=\"411\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"135\" x2=\"421\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"135\" x2=\"431\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"135\" x2=\"441\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"135\" x2=\"451\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"180\" y=\"85\" width=\"100\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"230\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3.0 kg</text><line x1=\"280\" y1=\"110\" x2=\"380\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"380,110 370.61,114.19 370.61,105.81\" fill=\"#D2705A\"/><text x=\"330\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">12 N</text><line x1=\"180\" y1=\"110\" x2=\"124\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"124,110 133.39,105.81 133.39,114.19\" fill=\"#D2705A\"/><text x=\"152\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">4.0 N</text><text x=\"240\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless surface</text><text x=\"24\" y=\"165\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">west</text><text x=\"456\" y=\"165\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">east</text></svg>",
        "alt": "A 3.0 kilogram object on a frictionless horizontal surface with a 12 newton force toward the east (right) and a 4.0 newton force toward the west (left).",
        "minWidth": 316
      }
    ],
    "choices": [
      "1.3 m/s²",
      "2.0 m/s²",
      "2.7 m/s²",
      "5.3 m/s²"
    ],
    "correct": 2,
    "explanation": "The forces are in opposite directions, so the net force is 12 − 4.0 = 8.0 N toward the east. Then a = F/m = 8.0/3.0 ≈ 2.7 m/s². 5.3 m/s² comes from adding the magnitudes of the forces (16 N)."
  },
  {
    "id": "e3-8",
    "unit": 3,
    "stem": "A car traveling at speed v can stop in a distance d on a level road, using brakes that provide a constant friction force. If the car's initial speed is doubled to 2v, what is the stopping distance with the same braking force?",
    "choices": [
      "2d",
      "3d",
      "4d",
      "8d"
    ],
    "correct": 2,
    "explanation": "By the work–energy theorem, the braking force times the stopping distance equals the initial kinetic energy: Fd = ½mv². The distance is proportional to v², so doubling the speed makes the stopping distance 4 times as large."
  },
  {
    "id": "e3-9",
    "unit": 8,
    "stem": "The absolute pressure at a certain depth in a freshwater lake (density 1000 kg/m³) is 2.0 × 10<sup>5</sup> Pa. The atmospheric pressure is 1.0 × 10<sup>5</sup> Pa. At what depth is this pressure found?",
    "choices": [
      "5.0 m",
      "10 m",
      "20 m",
      "200 m"
    ],
    "correct": 1,
    "explanation": "The pressure due to the water is 2.0 × 10<sup>5</sup> − 1.0 × 10<sup>5</sup> = 1.0 × 10<sup>5</sup> Pa = ρgh, so h = 1.0 × 10<sup>5</sup>/(1000 × 10) = 10 m."
  },
  {
    "id": "e3-10",
    "unit": 3,
    "stem": "A spring with a force constant of 500 N/m is compressed 0.20 m from its relaxed length. How much elastic potential energy is stored in the spring?",
    "choices": [
      "5 J",
      "10 J",
      "20 J",
      "100 J"
    ],
    "correct": 1,
    "explanation": "U = ½kx² = ½(500)(0.20)² = 10 J. 20 J forgets the factor of ½, and 100 is the spring force kx in newtons, not an energy."
  },
  {
    "id": "e3-11",
    "unit": 6,
    "stem": "A rotating disk has a rotational inertia of 0.20 kg·m² and an angular speed of 15 rad/s. What is the magnitude of the disk's angular momentum?",
    "choices": [
      "3.0 kg·m²/s",
      "7.5 kg·m²/s",
      "30 kg·m²/s",
      "45 kg·m²/s"
    ],
    "correct": 0,
    "explanation": "The angular momentum is L = Iω = (0.20)(15) = 3.0 kg·m²/s."
  },
  {
    "id": "e3-12",
    "unit": 3,
    "stem": "A 50 kg sled is pulled 20 m up an incline that rises at 30° above the horizontal, moving at a constant speed. A constant friction force of 100 N opposes the motion. How much work does the rope do on the sled?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"51 70 316 162\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M120 214L336.51 214L336.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"356.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"214\" x2=\"273\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"214\" x2=\"283\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"214\" x2=\"293\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"214\" x2=\"303\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"214\" x2=\"313\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"214\" x2=\"323\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"214\" x2=\"333\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"214\" x2=\"343\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(228.25 151.5) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"220.75\" y=\"143.51\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">50 kg</text><path d=\"M162 214A42 42 0 0 0 156.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"182\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><line x1=\"241.54\" y1=\"126.51\" x2=\"290.04\" y2=\"98.51\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"290.04,98.51 284,106.83 279.81,99.57\" fill=\"#D2705A\"/><text x=\"298.04\" y=\"92.51\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">rope</text><line x1=\"199.97\" y1=\"150.51\" x2=\"151.47\" y2=\"178.51\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"151.47,178.51 157.5,170.19 161.7,177.45\" fill=\"#D2705A\"/><text x=\"143.47\" y=\"182.51\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">100 N friction</text><line x1=\"158.98\" y1=\"221.52\" x2=\"323.53\" y2=\"126.52\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"323.53,126.52 318.91,132.88 315.71,127.33\" fill=\"#767F73\"/><polygon points=\"158.98,221.52 163.59,215.15 166.8,220.7\" fill=\"#767F73\"/><text x=\"248.25\" y=\"186.14\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-30 248.25 186.14)\">20 m</text></svg>",
        "alt": "A 50 kilogram sled pulled 20 meters up a 30 degree incline by a rope along the slope, with a 100 newton friction force acting down the slope.",
        "minWidth": 260
      }
    ],
    "choices": [
      "2,000 J",
      "5,000 J",
      "6,000 J",
      "7,000 J"
    ],
    "correct": 3,
    "explanation": "The sled rises (20)(sin 30°) = 10 m, so gravity requires work mgh = (500)(10) = 5000 J. Overcoming friction over 20 m requires (100)(20) = 2000 J. The rope must supply both: 5000 + 2000 = 7000 J, because the kinetic energy does not change."
  },
  {
    "id": "e3-13",
    "unit": 2,
    "stem": "The gravitational force between two small spheres separated by a distance d is F. What is the gravitational force between the spheres if the separation is reduced to d/2 and nothing else changes?",
    "choices": [
      "F/4",
      "F/2",
      "2F",
      "4F"
    ],
    "correct": 3,
    "explanation": "The gravitational force varies as 1/r². Halving the distance multiplies the force by (1/(1/2))² = 4, so the new force is 4F. Answering 2F treats the force as inversely proportional to the distance rather than to its square."
  },
  {
    "id": "e3-14",
    "unit": 8,
    "stem": "Water (density 1000 kg/m³) flows through a horizontal pipe. Its speed is 2.0 m/s in a wide section and 6.0 m/s in a narrow section. What is the pressure difference between the two sections?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 25 460 151\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M30 74L180 74L250 98L470 98L470 142L250 142L180 166L30 166\" fill=\"#D8E8F2\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"60\" y1=\"120\" x2=\"140\" y2=\"120\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"140,120 130.61,124.19 130.61,115.81\" fill=\"#3F7A94\"/><line x1=\"300\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"380,120 370.61,124.19 370.61,115.81\" fill=\"#3F7A94\"/><text x=\"105\" y=\"47\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">wide section</text><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">v = 2.0 m/s</text><text x=\"360\" y=\"67\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">narrow section</text><text x=\"360\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">v = 6.0 m/s</text></svg>",
        "alt": "A horizontal pipe with water moving at 2.0 meters per second in the wide section and 6.0 meters per second in the narrow section.",
        "minWidth": 313
      }
    ],
    "choices": [
      "8,000 Pa",
      "12,000 Pa",
      "16,000 Pa",
      "18,000 Pa"
    ],
    "correct": 2,
    "explanation": "For a horizontal pipe, Bernoulli's equation gives ΔP = ½ρ(v₂² − v₁²) = ½(1000)(36 − 4.0) = 16,000 Pa. 8,000 Pa results from squaring the difference of the speeds instead of taking the difference of the squares."
  },
  {
    "id": "e3-15",
    "unit": 3,
    "stem": "A 400 kg roller-coaster car starts from rest at the top of a hill that is 25 m higher than the bottom. Ignoring friction, what is the car's speed at the bottom?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 22 460 192\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"196\" x2=\"460\" y2=\"196\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"196\" x2=\"23\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"196\" x2=\"33\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"196\" x2=\"43\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"196\" x2=\"53\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"196\" x2=\"63\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"196\" x2=\"73\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"196\" x2=\"83\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"196\" x2=\"93\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"196\" x2=\"103\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"196\" x2=\"113\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"196\" x2=\"123\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"196\" x2=\"133\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"196\" x2=\"143\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"196\" x2=\"153\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"196\" x2=\"163\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"196\" x2=\"173\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"196\" x2=\"183\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"196\" x2=\"193\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"196\" x2=\"203\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"196\" x2=\"213\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"196\" x2=\"223\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"196\" x2=\"233\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"196\" x2=\"243\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"196\" x2=\"253\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"196\" x2=\"263\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"196\" x2=\"273\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"196\" x2=\"283\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"196\" x2=\"293\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"196\" x2=\"303\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"196\" x2=\"313\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"196\" x2=\"323\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"196\" x2=\"333\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"196\" x2=\"343\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"196\" x2=\"353\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"196\" x2=\"363\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"196\" x2=\"373\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"196\" x2=\"383\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"196\" x2=\"393\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"196\" x2=\"403\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"196\" x2=\"413\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"196\" x2=\"423\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"196\" x2=\"433\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"196\" x2=\"443\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"196\" x2=\"453\" y2=\"204\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><path d=\"M70 58L79 59.27L88 63.02L97 69.12L106 77.33L115 87.33L124 98.74L133 111.12L142 124L151 136.88L160 149.26L169 160.67L178 170.67L187 178.88L196 184.98L205 188.73L214 190L223 190L232 190L241 190L250 190L259 190L268 190L277 190L286 190L295 190L304 190L313 190L322 190L331 190L340 190L349 190L358 190L367 190L376 190L385 190L394 190L403 190L412 190L421 190L430 190\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"48\" y=\"32\" width=\"44\" height=\"20\" rx=\"5\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"70\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">car</text><line x1=\"40\" y1=\"58\" x2=\"120\" y2=\"58\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"190\" x2=\"440\" y2=\"190\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"58\" x2=\"46\" y2=\"190\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"46,190 42.8,182.82 49.2,182.82\" fill=\"#767F73\"/><polygon points=\"46,58 49.2,65.18 42.8,65.18\" fill=\"#767F73\"/><text x=\"52\" y=\"128\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">25 m</text><text x=\"440\" y=\"180\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">bottom</text></svg>",
        "alt": "A roller-coaster car at rest at the top of a hill 25 meters above the bottom of the track.",
        "minWidth": 313
      }
    ],
    "choices": [
      "12 m/s",
      "16 m/s",
      "20 m/s",
      "22 m/s"
    ],
    "correct": 3,
    "explanation": "Energy conservation gives mgh = ½mv², so v = √(2gh) = √(2 × 10 × 25) = √500 ≈ 22 m/s. The mass cancels."
  },
  {
    "id": "e3-16",
    "unit": 2,
    "stem": "A 6.0 kg block and a 4.0 kg block rest on a frictionless horizontal surface and are connected by a light string. A horizontal 30 N force pulls on the 6.0 kg block directly away from the 4.0 kg block, so the string stays taut. What is the tension in the string?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 75 464 103\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"135\" x2=\"21\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"135\" x2=\"31\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"135\" x2=\"41\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"135\" x2=\"51\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"135\" x2=\"61\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"135\" x2=\"71\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"135\" x2=\"81\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"135\" x2=\"91\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"135\" x2=\"101\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"135\" x2=\"111\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"135\" x2=\"121\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"135\" x2=\"131\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"135\" x2=\"141\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"135\" x2=\"151\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"135\" x2=\"161\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"135\" x2=\"171\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"135\" x2=\"181\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"135\" x2=\"191\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"135\" x2=\"201\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"135\" x2=\"211\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"135\" x2=\"221\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"135\" x2=\"231\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"135\" x2=\"241\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"135\" x2=\"251\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"135\" x2=\"261\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"135\" x2=\"271\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"135\" x2=\"281\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"135\" x2=\"291\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"135\" x2=\"301\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"135\" x2=\"311\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"135\" x2=\"321\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"135\" x2=\"331\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"135\" x2=\"341\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"135\" x2=\"351\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"135\" x2=\"361\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"135\" x2=\"371\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"135\" x2=\"381\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"135\" x2=\"391\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"135\" x2=\"401\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"135\" x2=\"411\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"135\" x2=\"421\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"135\" x2=\"431\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"135\" x2=\"441\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"135\" x2=\"451\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"93\" y=\"85\" width=\"90\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"138\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 kg</text><rect x=\"267\" y=\"85\" width=\"100\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"317\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">6.0 kg</text><line x1=\"183\" y1=\"110\" x2=\"267\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"225\" y=\"102\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">string</text><line x1=\"367\" y1=\"110\" x2=\"457\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"457,110 447.61,114.19 447.61,105.81\" fill=\"#D2705A\"/><text x=\"412\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">30 N</text><text x=\"240\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless surface</text></svg>",
        "alt": "A 4.0 kilogram block connected by a string to a 6.0 kilogram block on a frictionless surface, with a 30 newton force pulling the 6.0 kilogram block to the right, away from the other block.",
        "minWidth": 316
      }
    ],
    "choices": [
      "8 N",
      "12 N",
      "18 N",
      "30 N"
    ],
    "correct": 1,
    "explanation": "The blocks accelerate together: a = 30/(6.0 + 4.0) = 3.0 m/s². The string is the only horizontal force on the 4.0 kg block, so T = (4.0)(3.0) = 12 N. 18 N is the net force on the 6.0 kg block (30 − 12), and 30 N is the force applied to the whole system."
  },
  {
    "id": "e3-17",
    "unit": 8,
    "stem": "A cube with sides of 0.10 m has a mass of 0.50 kg. What is the density of the cube?",
    "choices": [
      "500 kg/m³",
      "1,000 kg/m³",
      "5,000 kg/m³",
      "50,000 kg/m³"
    ],
    "correct": 0,
    "explanation": "The volume is (0.10)³ = 1.0 × 10⁻³ m³, so the density is ρ = m/V = 0.50/(1.0 × 10⁻³) = 500 kg/m³."
  },
  {
    "id": "e3-18",
    "unit": 4,
    "stem": "Two ice skaters, with masses of 60 kg and 40 kg, stand at rest on frictionless ice and push off from each other. The 60 kg skater moves backward at 2.0 m/s. What is the speed of the 40 kg skater?",
    "choices": [
      "1.3 m/s",
      "2.0 m/s",
      "3.0 m/s",
      "5.0 m/s"
    ],
    "correct": 2,
    "explanation": "The total momentum of the system stays zero, so the skaters move in opposite directions with equal-magnitude momenta: (60)(2.0) = (40)v, giving v = 3.0 m/s. The lighter skater moves faster."
  },
  {
    "id": "e3-19",
    "unit": 3,
    "stem": "A car moves at a constant 20 m/s on a level road. The engine delivers 40 kW of power to the wheels, all of which is used to overcome a constant resistive force. What is the magnitude of the resistive force?",
    "choices": [
      "500 N",
      "1,000 N",
      "2,000 N",
      "8,000 N"
    ],
    "correct": 2,
    "explanation": "At constant speed, the power equals the force times the speed: P = Fv, so F = 40,000/20 = 2000 N."
  },
  {
    "id": "e3-20",
    "unit": 1,
    "stem": "A drone starts from rest and accelerates uniformly at 3.0 m/s² for 4.0 s. How far does the drone travel during this time?",
    "choices": [
      "12 m",
      "24 m",
      "48 m",
      "72 m"
    ],
    "correct": 1,
    "explanation": "Starting from rest, x = ½at² = ½(3.0)(4.0)² = 24 m. The drone's final speed is 12 m/s; multiplying that speed by the time (48 m) would be correct only if the drone had moved at its final speed the whole time."
  },
  {
    "id": "e3-21",
    "unit": 6,
    "stem": "A horizontal disk with a rotational inertia of 100 kg·m² rotates freely at 2.0 rad/s about a vertical axis. A 25 kg child who was standing at rest beside the disk steps onto it and stays at a distance of 2.0 m from the axis. How much rotational kinetic energy is lost in the process?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"60 0 410 250\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"170\" cy=\"140\" r=\"100\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\"/><circle cx=\"170\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><text x=\"164\" y=\"160\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">axis</text><path d=\"M207.59 126.32A40 40 0 0 0 132.41 126.32\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"170\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">ω = 2.0 rad/s</text><line x1=\"170\" y1=\"140\" x2=\"244\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><circle cx=\"244\" cy=\"140\" r=\"9\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\"/><text x=\"210\" y=\"158\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2.0 m</text><text x=\"190\" y=\"202\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">child's final position</text><line x1=\"236\" y1=\"192\" x2=\"242\" y2=\"154\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/><circle cx=\"340\" cy=\"80\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"340\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">25 kg child</text><text x=\"340\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">(at rest, beside</text><text x=\"340\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">the disk)</text><text x=\"460\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a horizontal disk rotating at 2.0 radians per second about its center, and a 25 kilogram child standing at rest beside the disk who will step onto it and stay 2.0 meters from the axis.",
        "minWidth": 279
      }
    ],
    "choices": [
      "25 J",
      "50 J",
      "75 J",
      "100 J"
    ],
    "correct": 3,
    "explanation": "The child adds a rotational inertia of mr² = (25)(2.0)² = 100 kg·m², so the total becomes 200 kg·m². Angular momentum is conserved: (100)(2.0) = (200)ω, so ω = 1.0 rad/s. The kinetic energy changes from ½(100)(2.0)² = 200 J to ½(200)(1.0)² = 100 J, so 100 J is lost."
  },
  {
    "id": "e3-22",
    "unit": 5,
    "stem": "A solid disk of mass 4.0 kg and radius 0.50 m (rotational inertia I = ½MR²) rotates about its central axis. What constant net torque is required to give the disk an angular acceleration of 8.0 rad/s²?",
    "choices": [
      "0.5 N·m",
      "1.0 N·m",
      "2.0 N·m",
      "4.0 N·m"
    ],
    "correct": 3,
    "explanation": "The rotational inertia is I = ½(4.0)(0.50)² = 0.50 kg·m². Then τ = Iα = (0.50)(8.0) = 4.0 N·m. The value 0.5 is the rotational inertia itself, not the torque."
  },
  {
    "id": "e3-23",
    "unit": 7,
    "stem": "A block oscillates on an ideal spring with amplitude A and period T. The same block is set oscillating on the same spring with an amplitude of 2A. What is the new period?",
    "choices": [
      "T, because the period of a mass–spring oscillator does not depend on amplitude.",
      "2T, because the block travels twice as far during each cycle.",
      "T/2, because the block moves faster when the amplitude is larger.",
      "4T, because the energy of the oscillator is four times as large."
    ],
    "correct": 0,
    "explanation": "The period of a mass–spring system is T = 2π√(m/k), which depends only on the mass and the spring constant. With a larger amplitude the block travels farther but also reaches a proportionally larger maximum speed, so the time for one cycle is unchanged."
  },
  {
    "id": "e3-24",
    "unit": 6,
    "stem": "A solid sphere and a thin hoop of equal mass and equal radius are released from rest at the top of the same incline and roll down without slipping. Which statement is correct?",
    "choices": [
      "The sphere reaches the bottom first, because it has less rotational inertia, so more of its energy becomes translational kinetic energy.",
      "The hoop reaches the bottom first, because it has more rotational inertia and therefore more total energy.",
      "They reach the bottom together, because they have equal mass and equal radius.",
      "They reach the bottom together, because gravity accelerates all objects equally."
    ],
    "correct": 0,
    "explanation": "Both objects lose the same gravitational potential energy mgh. A hoop has the greater rotational inertia (MR² compared with (2/5)MR²), so a larger share of its energy goes into rotation and less into translation. The sphere therefore has the larger translational speed, a larger acceleration down the incline, and reaches the bottom first."
  },
  {
    "id": "e3-25",
    "unit": 8,
    "stem": "The radius of a horizontal pipe carrying an ideal fluid is reduced to half of its original value in a narrow section. By what factor does the fluid's speed increase in the narrow section?",
    "choices": [
      "2",
      "3",
      "4",
      "8"
    ],
    "correct": 2,
    "explanation": "By continuity, A₁v₁ = A₂v₂. The cross-sectional area is proportional to r², so halving the radius reduces the area to 1/4, and the speed increases by a factor of 4."
  },
  {
    "id": "e3-26",
    "unit": 1,
    "stem": "Which of the following can be determined from the area between a velocity-versus-time graph and the time axis for a given time interval?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"188\" x2=\"496\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"104\" x2=\"496\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"118\" y1=\"272\" x2=\"118\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"118\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"172\" y1=\"272\" x2=\"172\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"172\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"226\" y1=\"272\" x2=\"226\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"226\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"334\" y1=\"272\" x2=\"334\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"334\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"388\" y1=\"272\" x2=\"388\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"388\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"442\" y1=\"272\" x2=\"442\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"442\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">7</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">v (m/s)</text><path d=\"M64 272L172 104L334 104L496 230\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A velocity versus time graph: the velocity rises from 0 to 4 meters per second over 2 seconds, stays constant until 5 seconds, then decreases to 1 meter per second at 8 seconds.",
        "minWidth": 351
      }
    ],
    "choices": [
      "The acceleration of the object at the end of the interval",
      "The displacement of the object during the interval",
      "The average acceleration of the object during the interval",
      "The position of the object at the start of the interval"
    ],
    "correct": 1,
    "explanation": "The area under a velocity–time graph is the product of velocity and time summed over the interval, which is the displacement. Acceleration is the slope of the graph, not the area, and the area says nothing about where the object started."
  },
  {
    "id": "e3-27",
    "unit": 1,
    "stem": "A ball is launched from level ground with a speed of 20 m/s at an angle of 30° above the horizontal. What is the magnitude of the vertical component of the ball's initial velocity?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 4 460 184\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"170\" x2=\"460\" y2=\"170\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"170\" x2=\"23\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"170\" x2=\"33\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"170\" x2=\"43\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"170\" x2=\"53\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"170\" x2=\"63\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"170\" x2=\"73\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"170\" x2=\"83\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"170\" x2=\"93\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"170\" x2=\"103\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"170\" x2=\"113\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"170\" x2=\"123\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"170\" x2=\"133\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"170\" x2=\"143\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"170\" x2=\"153\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"170\" x2=\"163\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"170\" x2=\"173\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"170\" x2=\"183\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"170\" x2=\"193\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"170\" x2=\"203\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"170\" x2=\"213\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"170\" x2=\"223\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"170\" x2=\"233\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"170\" x2=\"243\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"170\" x2=\"253\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"170\" x2=\"263\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"170\" x2=\"273\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"170\" x2=\"283\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"170\" x2=\"293\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"170\" x2=\"303\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"170\" x2=\"313\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"170\" x2=\"323\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"170\" x2=\"333\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"170\" x2=\"343\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"170\" x2=\"353\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"170\" x2=\"363\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"170\" x2=\"373\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"170\" x2=\"383\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"170\" x2=\"393\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"170\" x2=\"403\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"170\" x2=\"413\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"170\" x2=\"423\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"170\" x2=\"433\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"170\" x2=\"443\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"170\" x2=\"453\" y2=\"178\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"162\" r=\"8\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"70\" y1=\"162\" x2=\"300\" y2=\"162\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"162\" x2=\"217.22\" y2=\"77\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"217.22,77 211.19,85.32 207,78.06\" fill=\"#3F7A94\"/><text x=\"225.22\" y=\"73\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">20 m/s</text><path d=\"M140 162A70 70 0 0 0 130.62 127\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"154\" y=\"152\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><text x=\"460\" y=\"26\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">level ground</text></svg>",
        "alt": "A ball launched from level ground with a speed of 20 meters per second at an angle of 30 degrees above the horizontal.",
        "minWidth": 313
      }
    ],
    "choices": [
      "10 m/s",
      "14 m/s",
      "17 m/s",
      "20 m/s"
    ],
    "correct": 0,
    "explanation": "The vertical component is v₀ sin θ = (20)(sin 30°) = (20)(0.50) = 10 m/s. The 17 m/s value is the horizontal component, v₀ cos 30°."
  },
  {
    "id": "e3-28",
    "unit": 2,
    "stem": "A 1000 kg car traveling at 20 m/s brakes to a stop in 40 m with a constant braking force. What is the magnitude of the braking force?",
    "choices": [
      "2,500 N",
      "5,000 N",
      "10,000 N",
      "20,000 N"
    ],
    "correct": 1,
    "explanation": "From v² = 2ad, the deceleration is a = 400/80 = 5.0 m/s². The braking force is F = ma = (1000)(5.0) = 5000 N."
  },
  {
    "id": "e3-29",
    "unit": 2,
    "stem": "An elevator is moving downward and slowing down as it comes to a stop. How does the reading of a scale on which a passenger stands compare with the passenger's weight?",
    "choices": [
      "It is greater than the weight, because the elevator's acceleration is directed upward.",
      "It is less than the weight, because the elevator is moving downward.",
      "It is equal to the weight, because the elevator's velocity is directed downward.",
      "It is less than the weight, because the elevator's acceleration is directed upward."
    ],
    "correct": 0,
    "explanation": "Because the elevator is moving downward and slowing, its acceleration is directed upward. Newton's second law then requires an upward net force on the passenger, so the scale's normal force must be greater than the weight: N − mg = ma with a > 0 upward. The direction of the velocity does not determine the scale reading — the direction of the acceleration does."
  },
  {
    "id": "e3-30",
    "unit": 8,
    "stem": "A ball with a volume of 2.0 × 10⁻³ m³ is completely submerged in water (density 1000 kg/m³). What is the magnitude of the buoyant force on the ball?",
    "choices": [
      "2 N",
      "10 N",
      "20 N",
      "200 N"
    ],
    "correct": 2,
    "explanation": "The buoyant force equals the weight of the displaced water: B = ρVg = (1000)(2.0 × 10⁻³)(10) = 20 N."
  },
  {
    "id": "e3-31",
    "unit": 4,
    "stem": "A 0.25 kg ball moving at 8.0 m/s toward a bat is hit and leaves the bat at 12 m/s in the opposite direction. What is the magnitude of the impulse the bat delivers to the ball?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 290\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"93\" cy=\"115\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"93\" y=\"143\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.25 kg</text><line x1=\"93\" y1=\"86\" x2=\"145\" y2=\"86\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"145,86 135.61,90.19 135.61,81.81\" fill=\"#3F7A94\"/><text x=\"119\" y=\"79\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">8.0 m/s</text><text x=\"10\" y=\"160\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">After, leaving the bat</text><line x1=\"18\" y1=\"264\" x2=\"482\" y2=\"264\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"313\" cy=\"251\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"313\" y=\"279\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.25 kg</text><line x1=\"313\" y1=\"222\" x2=\"261\" y2=\"222\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"261,222 270.39,217.81 270.39,226.19\" fill=\"#3F7A94\"/><text x=\"287\" y=\"215\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 m/s</text></svg>",
        "alt": "A 0.25 kilogram ball moving right at 8.0 meters per second toward a bat, and then leaving the bat moving left at 12 meters per second.",
        "minWidth": 335
      }
    ],
    "choices": [
      "1.0 N·s",
      "2.0 N·s",
      "3.0 N·s",
      "5.0 N·s"
    ],
    "correct": 3,
    "explanation": "Taking the initial direction as positive, Δp = m(v_f − v_i) = (0.25)(−12 − 8.0) = −5.0 kg·m/s, so the impulse has magnitude 5.0 N·s. 1.0 N·s results from subtracting the speeds without accounting for the reversal of direction."
  },
  {
    "id": "e3-32",
    "unit": 4,
    "stem": "A moving billiard ball collides head-on and elastically with an identical ball that is initially at rest. Which of the following describes the motion immediately after the collision?",
    "choices": [
      "The first ball stops, and the second ball moves with the first ball's original velocity.",
      "The balls stick together and move at half the original speed of the first ball.",
      "The first ball rebounds with its original speed, and the second ball remains at rest.",
      "Both balls move forward, each with half of the original speed of the first ball."
    ],
    "correct": 0,
    "explanation": "In an elastic collision both momentum and kinetic energy are conserved. For equal masses the balls exchange velocities, so the first ball stops and the second moves off with the first ball's original velocity. If the balls stuck together or each moved at half speed, momentum would be conserved but the kinetic energy would be cut in half. If the first ball rebounded with the second at rest, the momentum would change sign and would not be conserved."
  },
  {
    "id": "e3-33",
    "unit": 5,
    "stem": "A uniform 3.0 m beam of mass 30 kg rests horizontally on two supports, one at each end. A 60 kg person stands 1.0 m from the left end. What is the magnitude of the force the left support exerts on the beam?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 54 484 190\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M50 124L34 154L66 154Z\" fill=\"#E8E6DE\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"24\" y1=\"154\" x2=\"76\" y2=\"154\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"50\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">left support</text><path d=\"M450 124L434 154L466 154Z\" fill=\"#E8E6DE\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"424\" y1=\"154\" x2=\"476\" y2=\"154\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"450\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">right support</text><rect x=\"161.33\" y=\"64\" width=\"44\" height=\"46\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"183.33\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">60 kg</text><text x=\"346\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">uniform beam, 30 kg</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"183.33\" y1=\"128\" x2=\"183.33\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"204\" x2=\"183.33\" y2=\"204\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"183.33,204 176.16,207.2 176.16,200.8\" fill=\"#767F73\"/><polygon points=\"50,204 57.18,200.8 57.18,207.2\" fill=\"#767F73\"/><text x=\"116.67\" y=\"198\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0 m</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"128\" x2=\"450\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"228\" x2=\"450\" y2=\"228\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"450,228 442.82,231.2 442.82,224.8\" fill=\"#767F73\"/><polygon points=\"50,228 57.18,224.8 57.18,231.2\" fill=\"#767F73\"/><text x=\"250\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3.0 m</text></svg>",
        "alt": "A uniform 3.0 meter beam of mass 30 kilograms resting on a support at each end, with a 60 kilogram person standing 1.0 meter from the left end.",
        "minWidth": 329
      }
    ],
    "choices": [
      "450 N",
      "550 N",
      "600 N",
      "900 N"
    ],
    "correct": 1,
    "explanation": "Take torques about the right end so the right support's force drops out. The beam's weight (300 N) acts at its center, 1.5 m from the right end, and the person's weight (600 N) acts 2.0 m from the right end. Equilibrium requires N_L(3.0) = (300)(1.5) + (600)(2.0) = 1650, so N_L = 550 N."
  },
  {
    "id": "e3-34",
    "unit": 7,
    "stem": "An oscillator completes 10 full cycles in 5.0 s. What is the oscillator's frequency?",
    "choices": [
      "0.50 Hz",
      "1.0 Hz",
      "2.0 Hz",
      "10 Hz"
    ],
    "correct": 2,
    "explanation": "Frequency is the number of cycles per second: 10/5.0 = 2.0 Hz. The value 0.50 is the period in seconds."
  },
  {
    "id": "e3-35",
    "unit": 5,
    "stem": "A uniform rod of length 2.0 m can pivot about its center. A downward force of 8.0 N is applied at the left end of the rod, and a downward force of 5.0 N is applied at a point 0.60 m to the right of the pivot. What is the magnitude of the net torque about the pivot?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"23 7 437 237\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M250 124L234 154L266 154Z\" fill=\"#E8E6DE\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"224\" y1=\"154\" x2=\"276\" y2=\"154\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"250\" y=\"172\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">pivot</text><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"108\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"50,108 45.81,98.61 54.19,98.61\" fill=\"#D2705A\"/><text x=\"50\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">8.0 N</text><line x1=\"370\" y1=\"40\" x2=\"370\" y2=\"108\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"370,108 365.81,98.61 374.19,98.61\" fill=\"#D2705A\"/><text x=\"370\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">5.0 N</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">uniform rod, length 2.0 m</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"204\" x2=\"250\" y2=\"204\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"250,204 242.82,207.2 242.82,200.8\" fill=\"#767F73\"/><polygon points=\"50,204 57.18,200.8 57.18,207.2\" fill=\"#767F73\"/><text x=\"150\" y=\"198\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1.0 m</text><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"128\" x2=\"370\" y2=\"234\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"228\" x2=\"370\" y2=\"228\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"370,228 362.82,231.2 362.82,224.8\" fill=\"#767F73\"/><polygon points=\"250,228 257.18,224.8 257.18,231.2\" fill=\"#767F73\"/><text x=\"310\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.60 m</text></svg>",
        "alt": "A uniform rod 2.0 meters long pivoted at its center, with an 8.0 newton downward force at the left end and a 5.0 newton downward force 0.60 meters to the right of the pivot.",
        "minWidth": 297
      }
    ],
    "choices": [
      "3.0 N·m",
      "5.0 N·m",
      "8.0 N·m",
      "11 N·m"
    ],
    "correct": 1,
    "explanation": "The 8.0 N force acts 1.0 m from the pivot and produces a counterclockwise torque of 8.0 N·m. The 5.0 N force acts 0.60 m from the pivot on the other side and produces a clockwise torque of 3.0 N·m. The net torque is 8.0 − 3.0 = 5.0 N·m. The rod's weight acts at the pivot and contributes no torque. 11 N·m comes from adding the torques instead of subtracting them."
  },
  {
    "id": "e3-36",
    "unit": 2,
    "stem": "A 2.0 kg block hangs at rest from an ideal spring with a force constant of 100 N/m. By how much is the spring stretched from its relaxed length?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"110 12 187 204\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"120\" y1=\"30\" x2=\"260\" y2=\"30\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"30\" x2=\"127\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"30\" x2=\"137\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"30\" x2=\"147\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"30\" x2=\"157\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"30\" x2=\"167\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"30\" x2=\"177\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"30\" x2=\"187\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"30\" x2=\"197\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"30\" x2=\"207\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"30\" x2=\"217\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"30\" x2=\"227\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"30\" x2=\"237\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"30\" x2=\"247\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"30\" x2=\"257\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><path d=\"M190 30L190 35L179 37.5L201 42.5L179 47.5L201 52.5L179 57.5L201 62.5L179 67.5L201 72.5L179 77.5L201 82.5L179 87.5L201 92.5L179 97.5L201 102.5L179 107.5L201 112.5L179 117.5L201 122.5L190 125L190 130\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"190\" y1=\"130\" x2=\"190\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"150\" y=\"150\" width=\"80\" height=\"56\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"190\" y=\"183\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><text x=\"215\" y=\"90\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">k = 100 N/m</text></svg>",
        "alt": "A 2.0 kilogram block hanging at rest from a vertical spring with force constant 100 newtons per meter.",
        "minWidth": 260
      }
    ],
    "choices": [
      "0.020 m",
      "0.050 m",
      "0.10 m",
      "0.20 m"
    ],
    "correct": 3,
    "explanation": "The block is in equilibrium, so the spring force balances the weight: kx = mg, giving x = (2.0)(10)/100 = 0.20 m. 0.020 m results from using the mass instead of the weight."
  },
  {
    "id": "e3-37",
    "unit": 3,
    "stem": "Which of the following graphs correctly shows how the kinetic energy of an object depends on the object's speed?",
    "choices": [
      "A straight line that starts at the origin",
      "A curve that starts at the origin and flattens out (concave down)",
      "A horizontal line",
      "An upward-curving parabola that starts at the origin"
    ],
    "correct": 3,
    "explanation": "Kinetic energy is K = ½mv², so it is proportional to the square of the speed. Its graph against speed is a parabola opening upward that passes through the origin. A straight line would show a K that is proportional to v, such as the momentum."
  },
  {
    "id": "e3-38",
    "unit": 7,
    "stem": "A 0.50 kg block attached to a spring oscillates with a period of 0.63 s. What is the force constant of the spring?",
    "choices": [
      "10 N/m",
      "25 N/m",
      "50 N/m",
      "200 N/m"
    ],
    "correct": 2,
    "explanation": "Rearranging T = 2π√(m/k) gives k = 4π²m/T² = 4π²(0.50)/(0.63)² ≈ 50 N/m."
  },
  {
    "id": "e3-39",
    "unit": 4,
    "stem": "A graph shows the net force on an object as a function of time. Which of the following quantities is represented by the area under the graph?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"230\" x2=\"496\" y2=\"230\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"234\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"188\" x2=\"496\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"104\" x2=\"496\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"62\" x2=\"496\" y2=\"62\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"66\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"272\" x2=\"136\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"208\" y1=\"272\" x2=\"208\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"352\" y1=\"272\" x2=\"352\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"424\" y1=\"272\" x2=\"424\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Net force (N)</text><path d=\"M64 272L208 62L352 62L496 272\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A graph of net force versus time: the force rises from zero to 10 newtons at 2 seconds, stays constant until 4 seconds, and falls to zero at 6 seconds.",
        "minWidth": 351
      }
    ],
    "choices": [
      "The change in the object's kinetic energy",
      "The work done on the object",
      "The object's acceleration",
      "The change in the object's momentum"
    ],
    "correct": 3,
    "explanation": "The area under a force–time graph is the impulse, and by the impulse–momentum theorem the impulse equals the change in momentum. The change in kinetic energy and the work are related to the area under a force–position graph instead."
  },
  {
    "id": "e3-40",
    "unit": 5,
    "stem": "A net torque of 20 N·m acts on a wheel that has a rotational inertia of 4.0 kg·m². What is the wheel's angular acceleration?",
    "choices": [
      "5.0 rad/s²",
      "10 rad/s²",
      "20 rad/s²",
      "80 rad/s²"
    ],
    "correct": 0,
    "explanation": "α = τ/I = 20/4.0 = 5.0 rad/s². 80 results from multiplying the torque by the rotational inertia instead of dividing."
  },
  {
    "id": "e3-41",
    "unit": 2,
    "stem": "A hockey puck slides across a frictionless, horizontal ice surface at a constant velocity. Which statement about the puck is correct?",
    "choices": [
      "A forward force must act on the puck to keep it moving.",
      "The net force on the puck is zero.",
      "The net force on the puck is directed along its motion.",
      "The puck's weight is the only force that acts on it."
    ],
    "correct": 1,
    "explanation": "Constant velocity means zero acceleration, so by Newton's first and second laws the net force is zero. No forward force is needed to keep the puck moving. The puck's weight is balanced by the upward normal force from the ice, so weight is not the only force acting on it."
  },
  {
    "id": "e3-42",
    "unit": 2,
    "stem": "A 5.0 kg block rests on a rough incline that makes an angle of 37° with the horizontal (sin 37° = 0.60 and cos 37° = 0.80). The block does not slide. What is the magnitude of the friction force on the block?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 53 260 179\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M40 214L239.66 214L239.66 63.55Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"214\" x2=\"259.66\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"214\" x2=\"23\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"214\" x2=\"33\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"214\" x2=\"43\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"214\" x2=\"53\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"214\" x2=\"63\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"214\" x2=\"73\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"214\" x2=\"83\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"93\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(149.81 131.25) rotate(-37)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"140.79\" y=\"124.27\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">5.0 kg</text><path d=\"M82 214A42 42 0 0 0 73.54 188.72\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"198.6\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">37°</text><text x=\"171.77\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">rough, block at rest</text></svg>",
        "alt": "A 5.0 kilogram block at rest on a rough incline that makes an angle of 37 degrees with the horizontal.",
        "minWidth": 260
      }
    ],
    "choices": [
      "20 N",
      "25 N",
      "30 N",
      "40 N"
    ],
    "correct": 2,
    "explanation": "The block is in equilibrium, so the static friction force balances the component of the weight along the incline: f = mg sin 37° = (50)(0.60) = 30 N. 40 N is the component of the weight perpendicular to the incline, mg cos 37°."
  }
];

export default EXAM_3_QUESTIONS;
