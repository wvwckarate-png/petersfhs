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
    "explanation": "Correct: (C) 2.4 s. Under gravity alone the ball decelerates at g = 10 m/s² on the way up, stops at the top, and falls back down symmetrically. Time to the top: t = v₀/g = (12 m/s)/(10 m/s²) = 1.2 s. The fall back to ground level takes the same 1.2 s, so the total time in the air is 2v₀/g = 2(1.2 s) = 2.4 s.\n\n(A) is wrong because it divides v₀ by 2g (12/20 = 0.6 s) instead of doubling v₀/g; that would be only half of the rise time.\n(B) is wrong because 1.2 s is only the time to reach the top (v₀/g); the ball needs another 1.2 s to fall back to the ground.\n(D) is wrong because it doubles the round-trip time again (4v₀/g); 4.8 s would be the flight time for a launch speed of 24 m/s, not 12 m/s."
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
    "explanation": "Correct: (D) 3.6 J. The ball is momentarily at rest at both the drop height and the top of the rebound, so all of its mechanical energy at those moments is gravitational potential energy. The energy lost in the bounce is the drop in that potential energy: ΔE = mg(h₁ − h₂) = (0.20 kg)(10 m/s²)(5.0 m − 3.2 m) = (2.0 N)(1.8 m) = 3.6 J. It starts with 10 J and keeps 6.4 J.\n\n(A) is wrong because 1.8 is the height difference in meters (5.0 − 3.2), a length rather than an energy; multiplying by the 2.0 N weight gives 3.6 J.\n(B) is wrong because no consistent calculation gives it; the ball starts with mgh₁ = 10 J and keeps mgh₂ = 6.4 J, so the loss is 3.6 J, not 2.4 J.\n(C) is wrong because it reuses the rebound height 3.2 m as if it were an energy; the energy kept after the bounce is mgh₂ = (2.0 N)(3.2 m) = 6.4 J, and the loss is 3.6 J."
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
    "explanation": "Correct: (A) 10 m. Displacement is the straight-line vector from the starting point to the ending point, not the length of the path. The 6.0 m east leg and the 8.0 m north leg are perpendicular, so they form the legs of a right triangle whose hypotenuse is the displacement: |Δr| = √(6.0² + 8.0²) m = √(36 + 64) m = √100 m = 10 m (directed about 53° north of east).\n\n(B) is wrong because 14 m is the total distance walked (6.0 + 8.0), which adds path lengths; perpendicular displacements must be added as vectors with the Pythagorean theorem.\n(C) is wrong because it doubles the 14 m path length (as if counting a round trip), and a displacement can never be longer than the path actually walked.\n(D) is wrong because it multiplies the two legs (6.0 × 8.0 = 48), which would have units of m², an area rather than a length."
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
    "explanation": "Correct: (B) 60 J. Gravity is a conservative force, so the work it does depends only on the vertical drop, not on the ramp's length or angle. The weight is mg = (2.0 kg)(10 m/s²) = 20 N, directed straight down, and the box drops 3.0 m vertically. W = mgh = (20 N)(3.0 m) = 60 J, positive because the force and the vertical displacement point the same way.\n\n(A) is wrong because it leaves out the mass (gh = 10 × 3.0 = 30) or takes half of mgh; the full 20 N weight acts through the full 3.0 m drop.\n(C) is wrong because it doubles the correct work, as if the box had a mass of 4.0 kg or fell 6.0 m; nothing in the stem doubles mgh.\n(D) is wrong because it multiplies by the height twice (mgh × h = 60 × 3.0); work is force times displacement, and the 3.0 m drop enters only once."
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
    "explanation": "Correct: (A) 2.0 rad/s². Uniform slowing means constant angular acceleration, so α equals the change in angular velocity divided by the elapsed time. The flywheel goes from 10 rad/s to 0 rad/s in 5.0 s: α = Δω/Δt = (0 − 10 rad/s)/(5.0 s) = −2.0 rad/s². The negative sign only shows that it is slowing; the magnitude is 2.0 rad/s².\n\n(B) is wrong because 5.0 is the stopping time in seconds, not an angular acceleration; dividing the 10 rad/s change by 5.0 s gives 2.0 rad/s².\n(C) is wrong because 10 rad/s is the initial angular speed; the acceleration is that change spread over 5.0 s, so it must be divided by the time.\n(D) is wrong because it multiplies the angular speed by the time (10 × 5.0 = 50) instead of dividing; acceleration is change in velocity per unit time."
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
    "explanation": "Correct: (B) 16 m/s. By the impulse–momentum theorem, the impulse of the net force equals the change in momentum. Impulse = FΔt = (20 N)(4.0 s) = 80 N·s. The object starts at rest, so its final momentum is 80 kg·m/s and v = p/m = (80 kg·m/s)/(5.0 kg) = 16 m/s. Equivalently, a = F/m = 4.0 m/s² and v = at = (4.0)(4.0) = 16 m/s.\n\n(A) is wrong because 4.0 is the acceleration in m/s² (20 N/5.0 kg), not the speed; after 4.0 s at that acceleration the speed is 16 m/s.\n(C) is wrong because it simply repeats the force value of 20 N as a speed; the speed depends on both the force and the mass, through Δp = FΔt.\n(D) is wrong because 80 is the impulse in N·s (the final momentum), which must still be divided by the 5.0 kg mass to give the speed."
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
    "explanation": "Correct: (C) 2.7 m/s². Forces along the same line add as signed quantities. Taking east as positive, the net force is +12 N − 4.0 N = +8.0 N, so 8.0 N east. The frictionless surface adds no horizontal force, and the weight and normal force cancel vertically. Newton's second law then gives a = F_net/m = (8.0 N)/(3.0 kg) ≈ 2.7 m/s², directed east.\n\n(A) is wrong because it uses only the 4.0 N westward force (4.0/3.0 ≈ 1.3); the larger eastward force also acts, so the net force is 8.0 N.\n(B) is wrong because it would require a net force of 6.0 N on the 3.0 kg object (or dividing 8.0 N by 4.0); the net force is 12 − 4.0 = 8.0 N.\n(D) is wrong because it adds the magnitudes of opposite forces (12 + 4.0 = 16 N, and 16/3.0 ≈ 5.3); opposite forces partly cancel."
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
    "explanation": "Correct: (C) 4d. By the work–energy theorem, the negative work done by the constant braking force removes all of the car's kinetic energy: Fd = ½mv². With F and m fixed, the stopping distance is proportional to v². Doubling the speed multiplies the kinetic energy, and therefore the distance, by 2² = 4: d' = ½m(2v)²/F = 4(½mv²/F) = 4d.\n\n(A) is wrong because it assumes the stopping distance is proportional to the speed, but kinetic energy, which the brakes must remove, grows with the square of the speed.\n(B) is wrong because no proportionality gives a factor of 3; the distance scales as v², so doubling the speed gives 2² = 4 times the distance.\n(D) is wrong because it uses the cube of the speed ratio (2³ = 8); the kinetic energy, and so the stopping distance, depends on v², not v³."
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
    "explanation": "Correct: (B) 10 m. The absolute pressure at depth h is P = P_atm + ρgh, so only the excess over atmospheric pressure (the gauge pressure) comes from the water. ρgh = 2.0 × 10<sup>5</sup> Pa − 1.0 × 10<sup>5</sup> Pa = 1.0 × 10<sup>5</sup> Pa. Then h = (1.0 × 10<sup>5</sup> Pa)/[(1000 kg/m³)(10 m/s²)] = 10 m. Every 10 m of fresh water adds about one atmosphere.\n\n(A) is wrong because it is half the correct depth, as if the water contributed only 0.5 × 10<sup>5</sup> Pa; the gauge pressure is the full 1.0 × 10<sup>5</sup> Pa.\n(C) is wrong because it uses the full absolute pressure (2.0 × 10<sup>5</sup>/10<sup>4</sup> = 20 m) and forgets that 1.0 × 10<sup>5</sup> Pa of it comes from the atmosphere.\n(D) is wrong because it divides the absolute pressure by the density alone (2.0 × 10<sup>5</sup>/1000 = 200), leaving out both g and the atmospheric pressure."
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
    "explanation": "Correct: (B) 10 J. The work needed to compress a spring is stored as elastic potential energy, U = ½kx², because the spring force grows linearly from zero to kx as it is compressed (the area under the F–x line is a triangle). U = ½(500 N/m)(0.20 m)² = ½(500)(0.040) J = 10 J.\n\n(A) is wrong because it is half the correct value, as if an extra factor of ½ were applied (¼kx²); the formula contains a single ½.\n(C) is wrong because it forgets the factor of ½ (kx² = 500 × 0.040 = 20 J); the spring force is not constant at kx during the compression.\n(D) is wrong because 100 is the spring force kx = (500)(0.20) in newtons, not an energy; energy requires the area under the F–x graph, ½kx²."
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
    "explanation": "Correct: (A) 3.0 kg·m²/s. For a rigid body rotating about a fixed axis, angular momentum is the rotational analog of p = mv: L = Iω. Substituting the given values, L = (0.20 kg·m²)(15 rad/s) = 3.0 kg·m²/s. There is no factor of ½ (that belongs to kinetic energy, ½Iω²), and the units kg·m² × s⁻¹ give kg·m²/s.\n\n(B) is wrong because it simply halves the angular speed (15/2 = 7.5) and ignores the rotational inertia; L = Iω has no factor of ½ and must include I.\n(C) is wrong because it is ten times too large, as if I were 2.0 kg·m² instead of 0.20 kg·m²; (0.20)(15) = 3.0 kg·m²/s.\n(D) is wrong because it computes Iω² = (0.20)(15)² = 45, which is twice the rotational kinetic energy in joules, not the angular momentum."
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
    "explanation": "Correct: (D) 7,000 J. At constant speed the kinetic energy does not change, so the net work is zero and the rope's work equals the work done against gravity plus the work done against friction. The sled rises h = (20 m)(sin 30°) = 10 m, so W_gravity = mgh = (50)(10)(10) = 5000 J. Friction acts along the full 20 m: (100 N)(20 m) = 2000 J. W_rope = 5000 J + 2000 J = 7000 J.\n\n(A) is wrong because 2000 J covers only the work against friction; the rope must also lift the sled 10 m, which takes another 5000 J.\n(B) is wrong because 5000 J covers only the gain in gravitational potential energy and ignores the 100 N friction force acting over 20 m.\n(C) is wrong because it applies friction over the 10 m vertical rise (100 × 10 = 1000 J) instead of the 20 m slope distance along which friction acts."
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
    "explanation": "Correct: (D) 4F. Newton's law of gravitation gives F = Gm₁m₂/r², so the force varies inversely with the square of the separation. With the masses unchanged, F' / F = (d/(d/2))² = 2² = 4. Halving the distance therefore makes the attraction four times as strong: F' = 4F.\n\n(A) is wrong because F/4 is the result of doubling the separation; reducing the distance strengthens gravity rather than weakening it.\n(B) is wrong because it treats the force as directly proportional to the distance, so halving d would halve F; gravity actually gets stronger as the spheres get closer, by a factor of (2)² = 4.\n(C) is wrong because it treats the force as inversely proportional to the distance rather than to its square, which would give only a factor of 2."
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
    "explanation": "Correct: (C) 16,000 Pa. For a horizontal pipe the height terms cancel and Bernoulli's equation becomes P₁ + ½ρv₁² = P₂ + ½ρv₂². The pressure is higher where the water is slower (the wide section): ΔP = ½ρ(v₂² − v₁²) = ½(1000 kg/m³)[(6.0 m/s)² − (2.0 m/s)²] = 500 × (36 − 4.0) Pa = 500 × 32 Pa = 16,000 Pa.\n\n(A) is wrong because it squares the difference of the speeds, ½(1000)(6.0 − 2.0)² = 8000 Pa, instead of taking the difference of the squares.\n(B) is wrong because no form of Bernoulli's equation gives it; for example ρv₁v₂ = (1000)(2.0)(6.0) = 12,000 multiplies the speeds instead of subtracting their squares.\n(D) is wrong because it uses only the narrow-section speed, ½(1000)(6.0)² = 18,000 Pa, ignoring the kinetic-energy term of the water in the wide section."
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
    "explanation": "Correct: (D) 22 m/s. With no friction, mechanical energy is conserved, so the gravitational potential energy lost on the way down becomes kinetic energy: mgh = ½mv². The mass cancels, leaving v = √(2gh) = √(2 × 10 m/s² × 25 m) = √(500 m²/s²) ≈ 22.4 m/s ≈ 22 m/s. The 400 kg mass is not needed.\n\n(A) is wrong because a speed of 12 m/s corresponds to a drop of only v²/2g = 144/20 ≈ 7.2 m, far less than the 25 m height.\n(B) is wrong because it drops the factor of 2, using v = √(gh) = √250 ≈ 16 m/s; setting mgh = ½mv² gives v² = 2gh.\n(C) is wrong because 20 m/s corresponds to a drop of v²/2g = 400/20 = 20 m, not 25 m; the correct result is √500 ≈ 22 m/s."
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
    "explanation": "Correct: (B) 12 N. Treat the two blocks as one system: the string forces are internal, so a = F/(m₁ + m₂) = (30 N)/(10 kg) = 3.0 m/s². Then isolate the 4.0 kg block at the back. The only horizontal force on it is the string tension, so T = m₄a = (4.0 kg)(3.0 m/s²) = 12 N. Check: the 6.0 kg block has 30 − 12 = 18 N = (6.0)(3.0) net.\n\n(A) is wrong because 8 N is too small to give the 4.0 kg block the shared 3.0 m/s² acceleration; that needs T = (4.0)(3.0) = 12 N.\n(C) is wrong because 18 N is the net force on the 6.0 kg block (30 − 12), not the tension; the string pulls only the 4.0 kg block forward.\n(D) is wrong because 30 N is the applied force on the whole system; the string accelerates only the 4.0 kg block, so its tension is less than 30 N."
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
    "explanation": "Correct: (A) 500 kg/m³. Density is mass per unit volume, ρ = m/V. The cube's volume is the side cubed: V = (0.10 m)³ = 1.0 × 10⁻³ m³. Then ρ = (0.50 kg)/(1.0 × 10⁻³ m³) = 500 kg/m³. This is half the density of water, so the cube would float with half its volume submerged.\n\n(B) is wrong because 1,000 kg/m³ is the density of water, assumed rather than calculated; the cube's mass and volume give 500 kg/m³.\n(C) is wrong because it divides by 1.0 × 10⁻⁴ m³, a power-of-ten slip in cubing 0.10 m; (0.10)³ = 1.0 × 10⁻³ m³.\n(D) is wrong because it divides by 1.0 × 10⁻⁵ m³, an even larger power-of-ten error in the volume; the cube's volume is 1.0 × 10⁻³ m³."
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
    "explanation": "Correct: (C) 3.0 m/s. The skaters start at rest on frictionless ice, so the system's total momentum is zero before and after the push. Their momenta must therefore be equal in magnitude and opposite in direction: (60 kg)(2.0 m/s) = (40 kg)v, so v = 120/40 = 3.0 m/s, in the opposite direction. The lighter skater moves faster, in inverse proportion to the masses.\n\n(A) is wrong because it inverts the mass ratio, (40)(2.0)/60 ≈ 1.3 m/s, which would give the lighter skater the smaller speed and leave unequal momenta.\n(B) is wrong because equal speeds would give the 60 kg skater more momentum (120 kg·m/s) than the 40 kg skater (80 kg·m/s), so total momentum would not stay zero.\n(D) is wrong because it adds the two speeds (2.0 + 3.0); at 5.0 m/s the 40 kg skater would carry 200 kg·m/s, not the required 120 kg·m/s."
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
    "explanation": "Correct: (C) 2,000 N. At constant speed the engine's driving force exactly balances the resistive force, and the rate of doing work is P = Fv. Solving, F = P/v = (40,000 W)/(20 m/s) = 2000 N. Check: 2000 N × 20 m/s = 40,000 J/s = 40 kW.\n\n(A) is wrong because 500 N would need a speed of P/F = 80 m/s to use 40 kW; at 20 m/s it would absorb only 10 kW.\n(B) is wrong because 1,000 N divides the power by 40 m/s, twice the actual speed; at 20 m/s it would use only 20 kW.\n(D) is wrong because 8,000 N at 20 m/s would require P = Fv = 160 kW, four times the 40 kW the engine delivers."
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
    "explanation": "Correct: (B) 24 m. With constant acceleration from rest, the displacement is x = v₀t + ½at² with v₀ = 0: x = ½(3.0 m/s²)(4.0 s)² = ½(3.0)(16) m = 24 m. Check with average velocity: the speed rises evenly from 0 to 12 m/s, so v_avg = 6.0 m/s and x = (6.0 m/s)(4.0 s) = 24 m.\n\n(A) is wrong because 12 is the final speed in m/s (at = 3.0 × 4.0), not a distance; the distance requires the average speed times the time.\n(C) is wrong because it multiplies the final speed by the time (12 × 4.0 = 48 m), which would be correct only if the drone had moved at 12 m/s the whole time.\n(D) is wrong because 72 m would require an average speed of 18 m/s, more than the 12 m/s final speed, which is impossible for a drone starting from rest."
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
    "explanation": "Correct: (D) 100 J. The child exerts no external torque about the axis, so angular momentum is conserved but kinetic energy is not (it is a rotational inelastic collision). L = Iω = (100)(2.0) = 200 kg·m²/s. The child adds mr² = (25)(2.0)² = 100 kg·m², so I_f = 200 kg·m² and ω_f = 200/200 = 1.0 rad/s. K_i = ½(100)(2.0)² = 200 J and K_f = ½(200)(1.0)² = 100 J, so 100 J is lost.\n\n(A) is wrong because it is only one quarter of the actual loss; with L conserved, K_f = L²/2I_f = 200²/(2 × 200) = 100 J, so 200 J − 100 J = 100 J is lost.\n(B) is wrong because it is half of the actual loss, as if an extra factor of ½ were applied; the energies are 200 J before and 100 J after.\n(C) is wrong because it would leave 125 J of kinetic energy, but with L = 200 kg·m²/s and I = 200 kg·m² the final energy must be L²/2I = 100 J."
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
    "explanation": "Correct: (D) 4.0 N·m. Newton's second law for rotation is τ_net = Iα. First find the disk's rotational inertia: I = ½MR² = ½(4.0 kg)(0.50 m)² = ½(4.0)(0.25) = 0.50 kg·m². Then τ = Iα = (0.50 kg·m²)(8.0 rad/s²) = 4.0 N·m. The units check: kg·m² × rad/s² = kg·m²/s² = N·m, and a larger torque would be needed for a hoop of the same mass, which has twice the inertia.\n\n(A) is wrong because 0.5 is the rotational inertia in kg·m², not the torque; it still has to be multiplied by α = 8.0 rad/s².\n(B) is wrong because 1.0 is MR² = (4.0)(0.50)², the hoop formula, and is still an inertia rather than a torque; the disk needs τ = (0.50)(8.0) = 4.0 N·m.\n(C) is wrong because it is half the correct value, as if an extra factor of ½ were applied (I = ¼MR²); τ = (0.50)(8.0) = 4.0 N·m."
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
    "explanation": "Correct: (A) T, because the period of a mass–spring oscillator does not depend on amplitude. The period of a mass–spring oscillator is T = 2π√(m/k), which contains only the mass and the spring constant. Doubling the amplitude doubles the distance traveled per cycle, but it also doubles the maximum restoring force (kx) and the maximum speed, so the block covers the longer path proportionally faster. The period stays T.\n\n(B) is wrong because the block does travel twice as far, but it also moves twice as fast at every corresponding point, so the time per cycle is unchanged.\n(C) is wrong because the faster motion is exactly offset by the longer path, so the period does not decrease; T = 2π√(m/k) has no amplitude dependence.\n(D) is wrong because the energy (½kA²) is four times as large, but the period depends only on m and k, not on the oscillator's energy."
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
    "explanation": "Correct: (A) The sphere reaches the bottom first, because it has less rotational inertia, so more of its energy becomes translational kinetic energy. Both objects lose the same potential energy mgh, which is split between translation and rotation: mgh = ½mv² + ½Iω² with ω = v/R. For the sphere, I = (2/5)MR², so v² = (10/7)gh; for the hoop, I = MR², so v² = gh. The sphere keeps more of its energy as translational kinetic energy, so it has a larger acceleration down the incline and reaches the bottom first.\n\n(B) is wrong because both start with the same energy mgh; the hoop's larger rotational inertia sends more of that energy into spinning, so it moves more slowly.\n(C) is wrong because equal mass and radius are not enough; how the mass is distributed (hoop at the rim, sphere spread throughout) sets the rotational inertia.\n(D) is wrong because equal acceleration holds only for free fall or frictionless sliding; when rolling, part of the energy goes into rotation, and that share differs."
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
    "explanation": "Correct: (C) 4. For an incompressible ideal fluid, the volume flow rate is constant: A₁v₁ = A₂v₂. The cross-sectional area of a pipe is A = πr², so halving the radius reduces the area to (1/2)² = 1/4 of its original value. To carry the same flow, the speed must increase by a factor of A₁/A₂ = 4.\n\n(A) is wrong because it uses the ratio of the radii (2) instead of the ratio of the areas; area depends on r², so the factor is 2² = 4.\n(B) is wrong because no geometric relation gives a factor of 3; the speed scales with 1/A ∝ 1/r², which gives exactly 4.\n(D) is wrong because it cubes the radius ratio (2³ = 8), as if flow depended on volume; continuity uses the cross-sectional area, which scales as r²."
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
    "explanation": "Correct: (B) The displacement of the object during the interval. On a velocity–time graph, each thin strip of area is v·Δt, which is the small displacement during Δt. Adding the strips over an interval gives the total displacement, with area below the time axis counting as negative. For the graph shown, the area from 0 to 8 s would be ½(2)(4) + (3)(4) + ½(4 + 1)(3) = 4 + 12 + 7.5 = 23.5 m.\n\n(A) is wrong because the instantaneous acceleration is the slope of the v–t graph at that moment, not an area under it.\n(C) is wrong because average acceleration is Δv/Δt, the slope of a line joining the endpoints of the interval, not the area under the curve.\n(D) is wrong because the area gives only the change in position; the starting position cannot be read from a velocity graph without extra information."
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
    "explanation": "Correct: (A) 10 m/s. Resolve the launch velocity into components. The vertical component is the side opposite the 30° angle: v₀y = v₀ sin θ = (20 m/s)(sin 30°) = (20)(0.50) = 10 m/s. The horizontal component is v₀ cos 30° = (20)(0.866) ≈ 17 m/s, and together they satisfy √(10² + 17.3²) = 20 m/s.\n\n(B) is wrong because 14 m/s is 20 sin 45°, the component for a 45° launch; at 30° the vertical component is 20 sin 30° = 10 m/s.\n(C) is wrong because 17 m/s is the horizontal component, v₀ cos 30°; the vertical component uses sin 30°.\n(D) is wrong because 20 m/s is the full launch speed; a component of a vector at 30° must be smaller than the vector itself."
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
    "explanation": "Correct: (B) 5,000 N. Constant braking gives constant deceleration. From v² = v₀² − 2ad with v = 0: a = v₀²/(2d) = (20 m/s)²/(2 × 40 m) = 400/80 = 5.0 m/s². Newton's second law then gives F = ma = (1000 kg)(5.0 m/s²) = 5000 N. The work–energy check agrees: Fd = ½mv² gives F = 200,000 J/40 m = 5000 N.\n\n(A) is wrong because 2,500 N would give a = 2.5 m/s², which would stop the car in v²/2a = 80 m, twice the 40 m given.\n(C) is wrong because it drops the factor of 2 in v² = 2ad, using a = 400/40 = 10 m/s²; that force would stop the car in only 20 m.\n(D) is wrong because 20,000 is the car's initial momentum mv in kg·m/s, not a force; force requires dividing by a time or using the stopping distance."
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
    "explanation": "Correct: (A) It is greater than the weight, because the elevator's acceleration is directed upward. An elevator moving down and slowing has velocity downward but acceleration upward (opposite the velocity). Newton's second law for the passenger, with up positive: N − mg = ma, where a > 0. So N = m(g + a) > mg, and the scale, which reads the normal force N, shows more than the passenger's weight. The acceleration, not the velocity, determines the reading.\n\n(B) is wrong because the direction of motion does not set the scale reading; a downward-moving elevator that is slowing has an upward acceleration, so N > mg.\n(C) is wrong because the reading equals the weight only when the acceleration is zero; here the elevator is slowing, so a ≠ 0.\n(D) is wrong because an upward acceleration requires an upward net force, so N must exceed mg; this choice states the correct acceleration but the wrong conclusion."
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
    "explanation": "Correct: (C) 20 N. By Archimedes' principle, the buoyant force equals the weight of the fluid displaced. A completely submerged ball displaces its own volume of water: B = ρ_fluid V g = (1000 kg/m³)(2.0 × 10⁻³ m³)(10 m/s²) = 20 N. The ball's own mass and material do not matter, only the displaced volume.\n\n(A) is wrong because 2 is ρV = 2.0 kg, the mass of the displaced water; it must be multiplied by g = 10 m/s² to give a force.\n(B) is wrong because 10 N corresponds to displacing only 1.0 × 10⁻³ m³ of water, half the ball's stated volume.\n(D) is wrong because it is ten times too large, a power-of-ten slip in the volume; (1000)(2.0 × 10⁻³)(10) = 20 N."
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
    "explanation": "Correct: (D) 5.0 N·s. Impulse equals the change in momentum, and momentum is a vector, so the reversal of direction matters. Taking the initial direction as positive, v_i = +8.0 m/s and v_f = −12 m/s: J = m(v_f − v_i) = (0.25 kg)(−12 − 8.0) m/s = (0.25)(−20) = −5.0 kg·m/s. The magnitude of the impulse is 5.0 N·s, directed opposite the ball's original motion.\n\n(A) is wrong because it subtracts the speeds, (0.25)(12 − 8.0) = 1.0, ignoring that the ball reverses direction; the velocity change is 20 m/s, not 4.0 m/s.\n(B) is wrong because 2.0 kg·m/s is only the initial momentum (0.25 × 8.0); the bat must also give the ball 3.0 kg·m/s in the opposite direction.\n(C) is wrong because 3.0 kg·m/s is only the final momentum (0.25 × 12); the bat first has to cancel the incoming 2.0 kg·m/s."
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
    "explanation": "Correct: (A) The first ball stops, and the second ball moves with the first ball's original velocity. In an elastic collision both momentum and kinetic energy are conserved. For a head-on collision of equal masses with one at rest, the only solution satisfying both is that the balls exchange velocities: m v = m v₁' + m v₂' and ½mv² = ½mv₁'² + ½mv₂'² give v₁' = 0 and v₂' = v. The first ball stops and the second moves off with the original velocity.\n\n(B) is wrong because sticking together is a perfectly inelastic collision; momentum is conserved but the kinetic energy drops to 2 × ½m(v/2)² = ¼mv², half the original.\n(C) is wrong because if the first ball rebounded with the second ball at rest, the total momentum would reverse from mv to −mv, violating momentum conservation.\n(D) is wrong because each ball at v/2 conserves momentum but leaves only 2 × ½m(v/2)² = ¼mv² of kinetic energy, half the original, so it is not elastic."
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
    "explanation": "Correct: (B) 550 N. The beam is in static equilibrium, so net torque about any point is zero. Taking torques about the right support removes N_R. The beam's weight (30 kg × 10 = 300 N) acts at its center, 1.5 m from the right end; the person's weight (600 N) acts 3.0 − 1.0 = 2.0 m from the right end. N_L(3.0 m) = (300 N)(1.5 m) + (600 N)(2.0 m) = 1650 N·m, so N_L = 550 N (and N_R = 900 − 550 = 350 N).\n\n(A) is wrong because it splits the 900 N total weight evenly between the supports, which is true only if the person stands at the center.\n(C) is wrong because 600 N is the person's weight alone; the left support also carries half of the 300 N beam and only part of the person's weight.\n(D) is wrong because 900 N is the total weight of the beam and person; if the left support carried all of it, the right support would exert no force."
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
    "explanation": "Correct: (C) 2.0 Hz. Frequency is the number of complete cycles per unit time: f = (number of cycles)/(time) = 10 cycles/5.0 s = 2.0 Hz. The period is the reciprocal, T = 1/f = 0.50 s, the time for one cycle. Hertz means cycles per second, so 2.0 Hz is two full oscillations each second.\n\n(A) is wrong because 0.50 is the period in seconds (5.0 s/10 cycles), the time per cycle; frequency is the reciprocal, 2.0 Hz.\n(B) is wrong because 1.0 Hz would mean only 5 cycles in 5.0 s; the oscillator completes 10 cycles, which is 2 per second.\n(D) is wrong because 10 is the total number of cycles, not cycles per second; it must be divided by the 5.0 s interval."
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
    "explanation": "Correct: (B) 5.0 N·m. Torque is τ = rF for a force perpendicular to the rod. The 8.0 N force at the left end acts 1.0 m from the pivot (half of 2.0 m) and tends to rotate the rod counterclockwise: τ = (1.0)(8.0) = 8.0 N·m. The 5.0 N force acts 0.60 m to the right and tends to rotate it clockwise: τ = (0.60)(5.0) = 3.0 N·m. The rod's weight acts at the pivot and gives no torque. Net torque = 8.0 − 3.0 = 5.0 N·m, counterclockwise.\n\n(A) is wrong because 3.0 N·m is only the torque of the 5.0 N force; the larger 8.0 N·m torque on the other side acts in the opposite sense.\n(C) is wrong because 8.0 N·m is only the torque of the 8.0 N force; the 5.0 N force produces an opposing 3.0 N·m torque that must be subtracted.\n(D) is wrong because it adds the two torques (8.0 + 3.0 = 11) even though they tend to rotate the rod in opposite directions."
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
    "explanation": "Correct: (D) 0.20 m. At rest, the block is in equilibrium, so the upward spring force balances the weight: kx = mg. The weight is (2.0 kg)(10 m/s²) = 20 N, so x = mg/k = (20 N)/(100 N/m) = 0.20 m. Hooke's law relates the spring force to the stretch from the relaxed length, which is exactly what is asked.\n\n(A) is wrong because it uses the mass instead of the weight (2.0/100 = 0.020 m); the spring must support a 20 N force, not 2.0.\n(B) is wrong because 0.050 m would support only kx = (100)(0.050) = 5.0 N, a quarter of the 20 N weight.\n(C) is wrong because it halves mg/k, as if a stray factor of ½ from ½kx² were inserted; a 0.10 m stretch supports only 10 N."
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
    "explanation": "Correct: (D) An upward-curving parabola that starts at the origin. Kinetic energy is K = ½mv², so for a fixed mass K is proportional to the square of the speed. A graph of K versus v is therefore a parabola that starts at the origin (K = 0 when v = 0) and curves upward, getting steeper as v increases: doubling the speed quadruples the kinetic energy.\n\n(A) is wrong because a straight line through the origin would mean K is proportional to v, which describes momentum (p = mv), not kinetic energy.\n(B) is wrong because a concave-down curve would mean K grows more slowly at high speed, the opposite of K ∝ v², which grows faster.\n(C) is wrong because a horizontal line would mean the kinetic energy does not depend on speed at all, contradicting K = ½mv²."
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
    "explanation": "Correct: (C) 50 N/m. The period of a mass–spring oscillator is T = 2π√(m/k). Squaring and solving for k: k = 4π²m/T² = 4π²(0.50 kg)/(0.63 s)² = (19.7 kg)/(0.397 s²) ≈ 49.7 N/m ≈ 50 N/m. Check: T = 2π√(0.50/50) = 2π(0.10) = 0.63 s. Note that k depends on 1/T², so a small error in the period produces a large error in the spring constant.\n\n(A) is wrong because with k = 10 N/m the period would be 2π√(0.50/10) ≈ 1.4 s, more than twice the given 0.63 s.\n(B) is wrong because it is half the correct value, as if 2π² were used instead of 4π²; with k = 25 N/m the period would be about 0.89 s.\n(D) is wrong because it is four times too large, as if the period were halved; with k = 200 N/m the period would be about 0.31 s."
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
    "explanation": "Correct: (D) The change in the object's momentum. The area under a force–time graph is ∫F dt, the impulse. By the impulse–momentum theorem, the impulse of the net force equals the change in momentum, Δp. For the graph shown, the area is ½(2)(10) + (2)(10) + ½(2)(10) = 40 N·s, so the object's momentum changes by 40 kg·m/s.\n\n(A) is wrong because the change in kinetic energy equals the net work, which is the area under a force–position graph, not a force–time graph.\n(B) is wrong because work is the area under a force versus displacement graph; the area under force versus time is impulse.\n(C) is wrong because acceleration at any instant is F/m, read from the graph's height divided by the mass, not from the area under it."
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
    "explanation": "Correct: (A) 5.0 rad/s². Newton's second law for rotation is τ_net = Iα, so α = τ/I. Substituting the given values: α = (20 N·m)/(4.0 kg·m²) = 5.0 rad/s². The units work out because N·m = kg·m²/s², and dividing by kg·m² leaves 1/s² (rad/s²). This mirrors a = F/m for linear motion: torque plays the role of force and rotational inertia plays the role of mass.\n\n(B) is wrong because 10 rad/s² would require a net torque of (4.0)(10) = 40 N·m, twice the 20 N·m that acts on the wheel.\n(C) is wrong because 20 is the torque in N·m repeated as an angular acceleration; it must be divided by the rotational inertia of 4.0 kg·m².\n(D) is wrong because it multiplies the torque by the rotational inertia (20 × 4.0 = 80) instead of dividing, as α = τ/I requires."
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
    "explanation": "Correct: (B) The net force on the puck is zero. Constant velocity means zero acceleration (no change in speed or direction). By Newton's first and second laws, F_net = ma = 0, so the forces on the puck must balance. Vertically, the upward normal force from the ice cancels the downward weight; horizontally, the frictionless ice exerts no force, so the puck simply keeps moving.\n\n(A) is wrong because this is the Aristotelian misconception; by Newton's first law, an object keeps moving at constant velocity with no net force acting on it.\n(C) is wrong because a net force along the motion would make the puck speed up, but its velocity is constant, so the net force must be zero.\n(D) is wrong because the ice also pushes up with a normal force equal to the weight; if weight acted alone, the puck would accelerate downward."
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
    "explanation": "Correct: (C) 30 N. Since the block stays at rest, the net force along the incline is zero, so static friction (directed up the slope) balances the component of gravity along the slope. The weight is mg = (5.0 kg)(10 m/s²) = 50 N, and its component along the incline is mg sin 37° = (50 N)(0.60) = 30 N, so f = 30 N. The friction is static, so μN is only its maximum, not needed here.\n\n(A) is wrong because 20 N does not match either component of the 50 N weight (30 N along, 40 N perpendicular), so it cannot balance the downslope pull.\n(B) is wrong because 25 N is mg sin 30° (or half of the weight); the incline is at 37°, so the downslope component is (50)(0.60) = 30 N.\n(D) is wrong because 40 N is the component of the weight perpendicular to the incline, mg cos 37°, which is balanced by the normal force, not by friction."
  }
];

export default EXAM_3_QUESTIONS;
