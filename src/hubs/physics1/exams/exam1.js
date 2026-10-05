// AP Physics 1 — MCQ Exam 1 (42 questions). Uses g = 10 m/s².
const EXAM_1_QUESTIONS = [
  {
    "id": "e1-1",
    "unit": 3,
    "stem": "A 0.50 kg ball is thrown straight up with an initial speed of 12 m/s. Ignoring air resistance, what is the ball's kinetic energy when it is 4.0 m above its launch point?",
    "choices": [
      "6 J",
      "16 J",
      "20 J",
      "36 J"
    ],
    "correct": 1,
    "explanation": "The initial kinetic energy is ½(0.50)(12)² = 36 J. Rising 4.0 m increases the gravitational potential energy by mgh = (0.50)(10)(4.0) = 20 J, so the kinetic energy is 36 − 20 = 16 J. 20 J is the potential energy gained, and 36 J is the initial kinetic energy."
  },
  {
    "id": "e1-2",
    "unit": 2,
    "stem": "At the surface of Earth the gravitational acceleration is 10 m/s². What is the gravitational acceleration at a point that is 3 Earth radii from Earth's center, far from any other bodies?",
    "choices": [
      "1.1 m/s²",
      "3.3 m/s²",
      "5.0 m/s²",
      "10 m/s²"
    ],
    "correct": 0,
    "explanation": "Gravitational acceleration varies as 1/r². At three times the distance from the center it is 1/9 as large: 10/9 ≈ 1.1 m/s². 3.3 m/s² results from treating the dependence as 1/r instead of 1/r²."
  },
  {
    "id": "e1-3",
    "unit": 4,
    "stem": "A 2.0 kg cart moving at 3.0 m/s on a frictionless track collides with and sticks to a 4.0 kg cart that is initially at rest. What is the speed of the combined carts after the collision?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 136\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before the collision (frictionless track)</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"50\" y=\"78\" width=\"76\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"88\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"66.72\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"109.28\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"88\" y1=\"62\" x2=\"140\" y2=\"62\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"140,62 130.61,66.19 130.61,57.81\" fill=\"#3F7A94\"/><text x=\"114\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3.0 m/s</text><rect x=\"290\" y=\"78\" width=\"96\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"338\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 kg</text><circle cx=\"311.12\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"364.88\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"338\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">at rest</text></svg>",
        "alt": "Two carts on a track before a collision: a 2.0 kg cart moving right at 3.0 meters per second toward a 4.0 kg cart at rest.",
        "minWidth": 335
      }
    ],
    "choices": [
      "0.5 m/s",
      "1.0 m/s",
      "1.5 m/s",
      "3.0 m/s"
    ],
    "correct": 1,
    "explanation": "Momentum is conserved: (2.0)(3.0) = (6.0)v, so v = 1.0 m/s. 1.5 m/s is the average of the initial speeds, which has no physical basis here."
  },
  {
    "id": "e1-4",
    "unit": 8,
    "stem": "A 60 kg person stands on one foot, which has a contact area of 0.020 m² with the floor. What pressure does the foot exert on the floor?",
    "choices": [
      "3,000 Pa",
      "12,000 Pa",
      "30,000 Pa",
      "300,000 Pa"
    ],
    "correct": 2,
    "explanation": "The force on the floor is the person's weight, mg = 600 N, so P = F/A = 600/0.020 = 30,000 Pa. Using the mass (60) instead of the weight gives a pressure ten times too small."
  },
  {
    "id": "e1-5",
    "unit": 8,
    "stem": "Water flows through a horizontal pipe with a cross-sectional area of 0.040 m² at a speed of 2.0 m/s. The pipe then narrows to a cross-sectional area of 0.010 m². What is the water's speed in the narrow section?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 25 460 151\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M30 74L180 74L250 98L470 98L470 142L250 142L180 166L30 166\" fill=\"#D8E8F2\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"60\" y1=\"120\" x2=\"140\" y2=\"120\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"140,120 130.61,124.19 130.61,115.81\" fill=\"#3F7A94\"/><line x1=\"300\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"380,120 370.61,124.19 370.61,115.81\" fill=\"#3F7A94\"/><text x=\"105\" y=\"47\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">A = 0.040 m²</text><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">v = 2.0 m/s</text><text x=\"360\" y=\"67\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">A = 0.010 m²</text><text x=\"360\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">v = ?</text></svg>",
        "alt": "A horizontal pipe narrowing from a wide section with area 0.040 square meters and water speed 2.0 meters per second to a narrow section with area 0.010 square meters and unknown speed.",
        "minWidth": 313
      }
    ],
    "choices": [
      "0.50 m/s",
      "2.0 m/s",
      "8.0 m/s",
      "16 m/s"
    ],
    "correct": 2,
    "explanation": "By the continuity equation, A₁v₁ = A₂v₂, so v₂ = (0.040)(2.0)/0.010 = 8.0 m/s. The speed increases when the cross-sectional area decreases."
  },
  {
    "id": "e1-6",
    "unit": 3,
    "stem": "A satellite moves in a circular orbit around Earth at constant speed. How much work does Earth's gravitational force do on the satellite during one-quarter of an orbit?",
    "choices": [
      "Positive, because the gravitational force points toward the center of the orbit.",
      "Zero, because the force is perpendicular to the satellite's displacement at every point.",
      "Negative, because the satellite's speed is reduced by the gravitational force.",
      "Positive, because the satellite accelerates toward Earth throughout its orbit."
    ],
    "correct": 1,
    "explanation": "Work is W = Fd cos θ. At every point the gravitational force points toward Earth while the displacement is along the tangent, perpendicular to the force, so cos θ = 0 and the work is zero. This is why the kinetic energy and speed stay constant. The satellite does accelerate toward Earth, but that acceleration changes only the direction of its velocity."
  },
  {
    "id": "e1-7",
    "unit": 2,
    "stem": "A book rests on a horizontal table. Earth pulls down on the book with a force equal to the book's weight, and the table pushes up on the book with a normal force. Which force forms the Newton's third-law pair with the weight of the book?",
    "choices": [
      "The gravitational force the book exerts on Earth",
      "The normal force the table exerts on the book",
      "The normal force the book exerts on the table",
      "The force the table exerts on Earth"
    ],
    "correct": 0,
    "explanation": "A third-law pair acts on two different objects, is the same type of force, and has equal magnitude in opposite directions. Earth pulls on the book gravitationally, so the partner is the book's gravitational pull on Earth. The table's normal force balances the weight only because the book is in equilibrium (Newton's first law); it is not the third-law partner. The normal force of the book on the table is the partner of the table's normal force on the book."
  },
  {
    "id": "e1-8",
    "unit": 3,
    "stem": "A spring with force constant 200 N/m is compressed 0.30 m and then used to launch a 0.50 kg block across a frictionless horizontal surface. What is the speed of the block as it leaves the spring?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"22 35 450 155\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"40\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"135\" x2=\"43\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"135\" x2=\"53\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"135\" x2=\"63\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"135\" x2=\"73\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"135\" x2=\"83\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"135\" x2=\"93\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"135\" x2=\"103\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"135\" x2=\"113\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"135\" x2=\"123\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"135\" x2=\"133\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"135\" x2=\"143\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"135\" x2=\"153\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"135\" x2=\"163\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"135\" x2=\"173\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"135\" x2=\"183\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"135\" x2=\"193\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"135\" x2=\"203\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"135\" x2=\"213\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"135\" x2=\"223\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"135\" x2=\"233\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"135\" x2=\"243\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"135\" x2=\"253\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"135\" x2=\"263\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"135\" x2=\"273\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"135\" x2=\"283\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"135\" x2=\"293\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"135\" x2=\"303\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"135\" x2=\"313\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"135\" x2=\"323\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"135\" x2=\"333\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"135\" x2=\"343\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"135\" x2=\"353\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"135\" x2=\"363\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"135\" x2=\"373\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"135\" x2=\"383\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"135\" x2=\"393\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"135\" x2=\"403\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"135\" x2=\"413\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"135\" x2=\"423\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"135\" x2=\"433\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"135\" x2=\"443\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"135\" x2=\"453\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"55\" x2=\"32\" y2=\"48\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"65\" x2=\"32\" y2=\"58\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"75\" x2=\"32\" y2=\"68\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"85\" x2=\"32\" y2=\"78\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"95\" x2=\"32\" y2=\"88\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"105\" x2=\"32\" y2=\"98\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"115\" x2=\"32\" y2=\"108\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"125\" x2=\"32\" y2=\"118\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"135\" x2=\"32\" y2=\"128\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><path d=\"M40 110L49.44 110L54.17 100L63.61 120L73.06 100L82.5 120L91.94 100L101.39 120L110.83 100L120.28 120L129.72 100L139.17 120L148.61 100L158.06 120L167.5 100L176.94 120L186.39 100L195.83 120L200.56 110L210 110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"210\" y=\"85\" width=\"74\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"247\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">0.50 kg</text><line x1=\"270\" y1=\"75\" x2=\"270\" y2=\"139\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><text x=\"125\" y=\"88\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">k = 200 N/m</text><line x1=\"210\" y1=\"157\" x2=\"270\" y2=\"157\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"270,157 262.82,160.2 262.82,153.8\" fill=\"#767F73\"/><polygon points=\"210,157 217.18,153.8 217.18,160.2\" fill=\"#767F73\"/><text x=\"240\" y=\"177\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.30 m</text><text x=\"276\" y=\"71\" text-anchor=\"start\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">relaxed length</text><line x1=\"210\" y1=\"145\" x2=\"210\" y2=\"163\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A block attached to a spring that is compressed 0.30 meters from its relaxed length against a wall, on a frictionless horizontal surface. The spring constant is 200 newtons per meter and the block's mass is 0.50 kilograms.",
        "minWidth": 306
      }
    ],
    "choices": [
      "6 m/s",
      "9 m/s",
      "12 m/s",
      "18 m/s"
    ],
    "correct": 0,
    "explanation": "The spring's stored energy is ½kx² = ½(200)(0.30)² = 9.0 J, and all of it becomes the block's kinetic energy: ½(0.50)v² = 9.0, so v² = 36 and v = 6 m/s."
  },
  {
    "id": "e1-9",
    "unit": 2,
    "stem": "A 60 kg person stands on a bathroom scale in an elevator that is accelerating upward at 2.0 m/s². What does the scale read?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"100 2 305 248\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"130\" y1=\"20\" x2=\"250\" y2=\"20\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"20\" x2=\"137\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"20\" x2=\"147\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"20\" x2=\"157\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"20\" x2=\"167\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"20\" x2=\"177\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"20\" x2=\"187\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"20\" x2=\"197\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"20\" x2=\"207\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"20\" x2=\"217\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"20\" x2=\"227\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"20\" x2=\"237\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"20\" x2=\"247\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"20\" x2=\"190\" y2=\"50\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"110\" y=\"50\" width=\"160\" height=\"190\" fill=\"#F7F6F1\" stroke=\"#2E332E\" stroke-width=\"2\"/><circle cx=\"190\" cy=\"108\" r=\"13\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"190\" y1=\"121\" x2=\"190\" y2=\"170\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"135\" x2=\"168\" y2=\"158\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"135\" x2=\"212\" y2=\"158\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"170\" x2=\"176\" y2=\"208\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"170\" x2=\"204\" y2=\"208\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"150\" y=\"210\" width=\"80\" height=\"14\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"190\" y=\"237\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">scale</text><text x=\"190\" y=\"85\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">60 kg</text><line x1=\"345\" y1=\"190\" x2=\"345\" y2=\"100\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"345,100 349.19,109.39 340.81,109.39\" fill=\"#3F7A94\"/><text x=\"345\" y=\"85\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">a = 2.0 m/s²</text><text x=\"345\" y=\"207\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#767F73\">elevator accelerates</text></svg>",
        "alt": "A 60 kilogram person standing on a scale inside an elevator that accelerates upward at 2.0 meters per second squared.",
        "minWidth": 260
      }
    ],
    "choices": [
      "480 N",
      "600 N",
      "720 N",
      "1200 N"
    ],
    "correct": 2,
    "explanation": "Newton's second law gives N − mg = ma, so N = m(g + a) = 60(10 + 2) = 720 N. 600 N is the person's weight, which the scale would read at rest or at constant velocity, and 480 N is m(g − a), the reading if the elevator were accelerating downward at 2.0 m/s²."
  },
  {
    "id": "e1-10",
    "unit": 7,
    "stem": "A simple pendulum of length 0.90 m swings through a small angle. What is its period?",
    "choices": [
      "0.6 s",
      "1.0 s",
      "1.5 s",
      "1.9 s"
    ],
    "correct": 3,
    "explanation": "The period of a simple pendulum is T = 2π√(L/g) = 2π√(0.90/10) = 2π(0.30) ≈ 1.9 s."
  },
  {
    "id": "e1-11",
    "unit": 8,
    "stem": "A diver is 20 m below the surface of a lake. The atmospheric pressure is 1.0 × 10<sup>5</sup> Pa, and the density of water is 1000 kg/m³. What is the absolute pressure at the diver's depth?",
    "choices": [
      "1.2 × 10<sup>5</sup> Pa",
      "2.0 × 10<sup>5</sup> Pa",
      "2.5 × 10<sup>5</sup> Pa",
      "3.0 × 10<sup>5</sup> Pa"
    ],
    "correct": 3,
    "explanation": "P = P₀ + ρgh = 1.0 × 10<sup>5</sup> + (1000)(10)(20) = 1.0 × 10<sup>5</sup> + 2.0 × 10<sup>5</sup> = 3.0 × 10<sup>5</sup> Pa. The value 2.0 × 10<sup>5</sup> Pa is only the pressure added by the water; it leaves out the atmosphere."
  },
  {
    "id": "e1-12",
    "unit": 4,
    "stem": "A 0.15 kg ball moving horizontally at 20 m/s strikes a wall perpendicularly and rebounds horizontally at 12 m/s. The ball is in contact with the wall for 0.020 s. What is the magnitude of the average force the wall exerts on the ball?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 290\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"74\" cy=\"114\" r=\"14\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"74\" y=\"143\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.15 kg</text><line x1=\"74\" y1=\"84\" x2=\"126\" y2=\"84\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"126,84 116.61,88.19 116.61,79.81\" fill=\"#3F7A94\"/><text x=\"100\" y=\"77\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">20 m/s</text><line x1=\"424\" y1=\"54\" x2=\"424\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"64\" x2=\"432\" y2=\"57\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"74\" x2=\"432\" y2=\"67\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"84\" x2=\"432\" y2=\"77\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"94\" x2=\"432\" y2=\"87\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"104\" x2=\"432\" y2=\"97\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"114\" x2=\"432\" y2=\"107\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"124\" x2=\"432\" y2=\"117\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><text x=\"10\" y=\"160\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">After</text><line x1=\"18\" y1=\"264\" x2=\"482\" y2=\"264\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"264\" cy=\"250\" r=\"14\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"264\" y=\"279\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.15 kg</text><line x1=\"264\" y1=\"220\" x2=\"212\" y2=\"220\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"212,220 221.39,215.81 221.39,224.19\" fill=\"#3F7A94\"/><text x=\"238\" y=\"213\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 m/s</text><line x1=\"424\" y1=\"190\" x2=\"424\" y2=\"264\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"200\" x2=\"432\" y2=\"193\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"210\" x2=\"432\" y2=\"203\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"220\" x2=\"432\" y2=\"213\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"230\" x2=\"432\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"240\" x2=\"432\" y2=\"233\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"250\" x2=\"432\" y2=\"243\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"424\" y1=\"260\" x2=\"432\" y2=\"253\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A 0.15 kilogram ball moves right at 20 meters per second toward a wall and then rebounds to the left at 12 meters per second.",
        "minWidth": 335
      }
    ],
    "choices": [
      "60 N",
      "150 N",
      "240 N",
      "480 N"
    ],
    "correct": 2,
    "explanation": "Take the initial direction as positive: Δp = m(v_f − v_i) = 0.15(−12 − 20) = −4.8 kg·m/s. The average force is |Δp|/Δt = 4.8/0.020 = 240 N. 60 N results from subtracting the speeds (20 − 12) and forgetting that the ball reverses direction, and 150 N uses only the incoming momentum."
  },
  {
    "id": "e1-13",
    "unit": 2,
    "stem": "A 25 kg crate rests on a horizontal floor. The coefficients of friction between the crate and the floor are μₛ = 0.40 and μₖ = 0.30. A person pushes horizontally on the crate with a force of 80 N, and the crate does not move. What is the magnitude of the friction force on the crate?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 75 464 103\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"135\" x2=\"21\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"135\" x2=\"31\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"135\" x2=\"41\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"135\" x2=\"51\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"135\" x2=\"61\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"135\" x2=\"71\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"135\" x2=\"81\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"135\" x2=\"91\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"135\" x2=\"101\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"135\" x2=\"111\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"135\" x2=\"121\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"135\" x2=\"131\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"135\" x2=\"141\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"135\" x2=\"151\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"135\" x2=\"161\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"135\" x2=\"171\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"135\" x2=\"181\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"135\" x2=\"191\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"135\" x2=\"201\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"135\" x2=\"211\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"135\" x2=\"221\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"135\" x2=\"231\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"135\" x2=\"241\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"135\" x2=\"251\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"135\" x2=\"261\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"135\" x2=\"271\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"135\" x2=\"281\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"135\" x2=\"291\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"135\" x2=\"301\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"135\" x2=\"311\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"135\" x2=\"321\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"135\" x2=\"331\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"135\" x2=\"341\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"135\" x2=\"351\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"135\" x2=\"361\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"135\" x2=\"371\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"135\" x2=\"381\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"135\" x2=\"391\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"135\" x2=\"401\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"135\" x2=\"411\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"135\" x2=\"421\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"135\" x2=\"431\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"135\" x2=\"441\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"135\" x2=\"451\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"180\" y=\"85\" width=\"100\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"230\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">25 kg</text><line x1=\"90\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"180,110 170.61,114.19 170.61,105.81\" fill=\"#D2705A\"/><text x=\"135\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">80 N</text><text x=\"240\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">μs = 0.40, μk = 0.30</text></svg>",
        "alt": "A 25 kilogram crate on a horizontal floor pushed to the right with an 80 newton force. The coefficients of friction are 0.40 static and 0.30 kinetic.",
        "minWidth": 316
      }
    ],
    "choices": [
      "0 N",
      "75 N",
      "80 N",
      "100 N"
    ],
    "correct": 2,
    "explanation": "The crate is at rest, so the net force is zero and static friction must exactly balance the 80 N push. The maximum static friction is μₛN = (0.40)(250) = 100 N, which is larger than 80 N, so the crate does not slip. 100 N is only the maximum possible static friction, and 75 N is the kinetic friction value, which applies only once the crate is sliding."
  },
  {
    "id": "e1-14",
    "unit": 1,
    "stem": "A cyclist rides along a straight path. At t = 0 her velocity is −3 m/s, and she then has a constant acceleration of +2 m/s². What is her displacement from t = 0 to t = 4 s?",
    "choices": [
      "−12 m",
      "+4 m",
      "+16 m",
      "+28 m"
    ],
    "correct": 1,
    "explanation": "Use x = v₀t + ½at² = (−3)(4) + ½(2)(4)² = −12 + 16 = +4 m. The initial velocity is negative, so it contributes −12 m even though the acceleration eventually reverses her motion. −12 m ignores the acceleration, +16 m ignores the initial velocity, and +28 m treats the initial velocity as +3 m/s."
  },
  {
    "id": "e1-15",
    "unit": 3,
    "stem": "Two identical blocks are released from rest at the same height. Block 1 falls vertically in free fall, and block 2 slides down a long frictionless ramp. How do the blocks' speeds compare when each has dropped to the ground?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 15 460 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"20\" y1=\"215\" x2=\"460\" y2=\"215\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"215\" x2=\"23\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"215\" x2=\"33\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"215\" x2=\"43\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"215\" x2=\"53\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"215\" x2=\"63\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"215\" x2=\"73\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"215\" x2=\"83\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"215\" x2=\"93\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"215\" x2=\"103\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"215\" x2=\"113\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"215\" x2=\"123\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"215\" x2=\"133\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"215\" x2=\"143\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"215\" x2=\"153\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"215\" x2=\"163\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"215\" x2=\"173\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"215\" x2=\"183\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"215\" x2=\"193\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"215\" x2=\"203\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"215\" x2=\"213\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"215\" x2=\"223\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"215\" x2=\"233\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"215\" x2=\"243\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"215\" x2=\"253\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"215\" x2=\"263\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"215\" x2=\"273\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"215\" x2=\"283\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"215\" x2=\"293\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"215\" x2=\"303\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"215\" x2=\"313\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"215\" x2=\"323\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"215\" x2=\"333\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"215\" x2=\"343\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"215\" x2=\"353\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"215\" x2=\"363\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"215\" x2=\"373\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"215\" x2=\"383\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"215\" x2=\"393\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"215\" x2=\"403\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"215\" x2=\"413\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"215\" x2=\"423\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"215\" x2=\"433\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"215\" x2=\"443\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"215\" x2=\"453\" y2=\"223\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"55\" x2=\"440\" y2=\"55\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"55\" r=\"0.01\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><rect x=\"95\" y=\"25\" width=\"50\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"120\" y=\"45\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">1</text><line x1=\"120\" y1=\"61\" x2=\"120\" y2=\"109\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"120,109 115.99,100.02 124.01,100.02\" fill=\"#3F7A94\"/><text x=\"120\" y=\"247\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Block 1: free fall</text><path d=\"M250 85L440 215L250 215Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g transform=\"translate(250 85) rotate(34.38034472384487)\"><rect x=\"0\" y=\"-30\" width=\"48\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"278\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2</text><text x=\"345\" y=\"247\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">Block 2: frictionless ramp</text><line x1=\"60\" y1=\"55\" x2=\"60\" y2=\"215\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"60,215 56.8,207.82 63.2,207.82\" fill=\"#767F73\"/><polygon points=\"60,55 63.2,62.18 56.8,62.18\" fill=\"#767F73\"/><text x=\"54\" y=\"139\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">h</text></svg>",
        "alt": "Two identical blocks starting at the same height h: block 1 falling straight down, and block 2 sliding down a frictionless ramp.",
        "minWidth": 313
      }
    ],
    "choices": [
      "Block 1 is faster, because it travels the shorter path to the ground.",
      "Block 2 is faster, because it accelerates for a longer time on the ramp.",
      "Block 1 is faster, because the ramp exerts a force that opposes the motion.",
      "They are equal, because both blocks lose the same gravitational potential energy."
    ],
    "correct": 3,
    "explanation": "On both paths the only force doing work is gravity (the ramp's normal force is perpendicular to the motion and does no work). Both blocks drop the same height, so both gain the same kinetic energy: ½mv² = mgh and v = √(2gh). The ramp changes the time taken, not the final speed."
  },
  {
    "id": "e1-16",
    "unit": 7,
    "stem": "A block on a spring oscillates in simple harmonic motion with amplitude A. When the block is at a displacement of A/2 from equilibrium, what fraction of the total mechanical energy is kinetic energy?",
    "choices": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "correct": 2,
    "explanation": "The total energy is E = ½kA². At x = A/2 the spring potential energy is ½k(A/2)² = ¼E, so the remaining 3/4 of the energy is kinetic. 1/4 is the potential-energy fraction at that point."
  },
  {
    "id": "e1-17",
    "unit": 2,
    "stem": "A 2.0 kg puck on a frictionless horizontal table is attached to a string and moves in a horizontal circle of radius 0.50 m at a constant speed of 3.0 m/s. What is the tension in the string?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"84 1 326 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"190\" cy=\"140\" r=\"96\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/><circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><line x1=\"190\" y1=\"140\" x2=\"286\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"226.48\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">r = 0.50 m</text><circle cx=\"286\" cy=\"140\" r=\"25\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"286\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><line x1=\"286\" y1=\"114\" x2=\"286\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"286,56 290.19,65.39 281.81,65.39\" fill=\"#3F7A94\"/><text x=\"298\" y=\"84\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3.0 m/s</text><text x=\"400\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a 2.0 kilogram puck moving in a horizontal circle of radius 0.50 meters at 3.0 meters per second, attached to a string from the center.",
        "minWidth": 260
      }
    ],
    "choices": [
      "6 N",
      "9 N",
      "18 N",
      "36 N"
    ],
    "correct": 3,
    "explanation": "The tension provides the centripetal force: T = mv²/r = (2.0)(3.0)²/0.50 = 36 N. 18 N results from using r = 1.0 m instead of 0.50 m."
  },
  {
    "id": "e1-18",
    "unit": 4,
    "stem": "Two carts, one of mass m and one of mass 3m, are at rest on a frictionless track with a compressed spring between them. When released, the carts push apart. What is the ratio of the kinetic energy of the cart of mass m to the kinetic energy of the cart of mass 3m just after release?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 136\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">At rest, spring compressed between the carts (frictionless track)</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"120\" y=\"78\" width=\"60\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"150\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">m</text><circle cx=\"133.2\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"166.8\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><path d=\"M180 97L186.83 97L190.25 88L197.08 106L203.92 88L210.75 106L217.58 88L224.42 106L231.25 88L238.08 106L244.92 88L251.75 106L255.17 97L262 97\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"262\" y=\"78\" width=\"90\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"307\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3m</text><circle cx=\"281.8\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"332.2\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/></svg>",
        "alt": "Two carts at rest on a track with a compressed spring between them: a cart of mass m on the left and a cart of mass 3m on the right.",
        "minWidth": 335
      }
    ],
    "choices": [
      "1/9",
      "1/3",
      "1",
      "3"
    ],
    "correct": 3,
    "explanation": "No external horizontal force acts on the system, so the carts have momenta of equal magnitude p. Kinetic energy is K = p²/(2m), which is inversely proportional to mass, so the lighter cart has 3 times the kinetic energy of the heavier cart. (Equivalently, the lighter cart moves 3 times faster: m(3v)² compared with 3mv² gives a ratio of 3.)"
  },
  {
    "id": "e1-19",
    "unit": 8,
    "stem": "Water flows steadily through a horizontal pipe that narrows. How do the water's speed and pressure in the narrow section compare with those in the wide section?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 42 460 134\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M30 74L180 74L250 98L470 98L470 142L250 142L180 166L30 166\" fill=\"#D8E8F2\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"60\" y1=\"106\" x2=\"140\" y2=\"106\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"140,106 130.61,110.19 130.61,101.81\" fill=\"#3F7A94\"/><line x1=\"300\" y1=\"112\" x2=\"380\" y2=\"112\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"380,112 370.61,116.19 370.61,107.81\" fill=\"#3F7A94\"/><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">wide section</text><text x=\"360\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">narrow section</text><circle cx=\"105\" cy=\"142\" r=\"4\" fill=\"#2E332E\"/><text x=\"118\" y=\"147\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">1</text><circle cx=\"360\" cy=\"128\" r=\"4\" fill=\"#2E332E\"/><text x=\"373\" y=\"133\" text-anchor=\"start\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">2</text></svg>",
        "alt": "A horizontal pipe that narrows, with point 1 in the wide section and point 2 in the narrow section, and water flowing from left to right.",
        "minWidth": 313
      }
    ],
    "choices": [
      "The speed is greater and the pressure is higher.",
      "The speed is lower and the pressure is higher.",
      "The speed is greater and the pressure is lower.",
      "The speed is lower and the pressure is lower."
    ],
    "correct": 2,
    "explanation": "By continuity the speed is greater in the narrow section. For a horizontal pipe, Bernoulli's equation says P + ½ρv² is constant, so the greater speed corresponds to a lower pressure."
  },
  {
    "id": "e1-20",
    "unit": 6,
    "stem": "A solid disk of mass 2.0 kg and radius 0.50 m (rotational inertia I = ½MR²) rotates about its central axis at an angular speed of 8.0 rad/s. What is its rotational kinetic energy?",
    "choices": [
      "2.0 J",
      "4.0 J",
      "6.0 J",
      "8.0 J"
    ],
    "correct": 3,
    "explanation": "The rotational inertia is I = ½(2.0)(0.50)² = 0.25 kg·m², so K = ½Iω² = ½(0.25)(8.0)² = 8.0 J."
  },
  {
    "id": "e1-21",
    "unit": 3,
    "stem": "A 2.0 kg block slides along a rough horizontal surface. Its speed is 6.0 m/s, and it comes to rest after sliding 9.0 m. What is the magnitude of the average friction force on the block?",
    "choices": [
      "4.0 N",
      "6.0 N",
      "8.0 N",
      "12 N"
    ],
    "correct": 0,
    "explanation": "Friction removes all of the block's kinetic energy: f·d = ½mv². Since ½(2.0)(6.0)² = 36 J, f = 36/9.0 = 4.0 N. 8.0 N results from forgetting the factor of ½ in the kinetic energy."
  },
  {
    "id": "e1-22",
    "unit": 5,
    "stem": "A mechanic pulls with a 20 N force on a wrench at a point 0.40 m from the bolt. The force makes an angle of 30° with the wrench handle. What is the magnitude of the torque the force exerts about the bolt?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"47 70 432 159\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"70\" y=\"143\" width=\"270\" height=\"14\" rx=\"7\" fill=\"#DCE0DA\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><circle cx=\"70\" cy=\"150\" r=\"13\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><text x=\"70\" y=\"182\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">bolt</text><line x1=\"340\" y1=\"150\" x2=\"440\" y2=\"150\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"150\" x2=\"430.93\" y2=\"97.5\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"430.93,97.5 424.9,105.82 420.71,98.56\" fill=\"#D2705A\"/><text x=\"438.93\" y=\"93.5\" text-anchor=\"start\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">20 N</text><path d=\"M398 150A58 58 0 0 0 390.23 121\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"410\" y=\"139\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><line x1=\"70\" y1=\"196\" x2=\"340\" y2=\"196\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"340,196 332.82,199.2 332.82,192.8\" fill=\"#767F73\"/><polygon points=\"70,196 77.18,192.8 77.18,199.2\" fill=\"#767F73\"/><text x=\"205\" y=\"216\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.40 m</text><line x1=\"70\" y1=\"190\" x2=\"70\" y2=\"202\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"190\" x2=\"340\" y2=\"202\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A wrench with its pivot at the bolt on the left. A 20 newton force is applied at the far end, 0.40 meters from the bolt, at an angle of 30 degrees to the handle.",
        "minWidth": 294
      }
    ],
    "choices": [
      "4.0 N·m",
      "6.9 N·m",
      "8.0 N·m",
      "12 N·m"
    ],
    "correct": 0,
    "explanation": "τ = rF sin θ = (0.40)(20)(sin 30°) = (0.40)(20)(0.50) = 4.0 N·m. 8.0 N·m forgets the sine factor, and 6.9 N·m uses cosine instead of sine."
  },
  {
    "id": "e1-23",
    "unit": 5,
    "stem": "A wheel with rotational inertia 0.50 kg·m² is initially at rest. A constant net torque of 3.0 N·m is applied to it. What is the wheel's angular speed after 4.0 s?",
    "choices": [
      "1.5 rad/s",
      "6.0 rad/s",
      "12 rad/s",
      "24 rad/s"
    ],
    "correct": 3,
    "explanation": "The angular acceleration is α = τ/I = 3.0/0.50 = 6.0 rad/s². Starting from rest, ω = αt = (6.0)(4.0) = 24 rad/s. 6.0 is the angular acceleration (in rad/s²), not the angular speed after 4.0 s."
  },
  {
    "id": "e1-24",
    "unit": 3,
    "stem": "A 3.0 kg block slides down a rough incline, starting from rest at a height of 2.0 m above the bottom. It reaches the bottom with a speed of 4.0 m/s. How much mechanical energy is converted to thermal energy by friction?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 55 322 177\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M40 214L256.51 214L256.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"214\" x2=\"276.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"214\" x2=\"23\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"214\" x2=\"33\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"214\" x2=\"43\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"214\" x2=\"53\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"214\" x2=\"63\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"214\" x2=\"73\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"214\" x2=\"83\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"93\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(230.53 104) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"223.03\" y=\"96.01\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">3.0 kg</text><path d=\"M82 214A42 42 0 0 0 76.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><text x=\"182.89\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">rough</text><line x1=\"278.51\" y1=\"214\" x2=\"278.51\" y2=\"89\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"278.51,89 281.71,96.18 275.3,96.18\" fill=\"#767F73\"/><polygon points=\"278.51,214 275.3,206.82 281.71,206.82\" fill=\"#767F73\"/><text x=\"288.51\" y=\"155.5\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">2.0 m</text><line x1=\"256.51\" y1=\"89\" x2=\"284.51\" y2=\"89\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A 3.0 kilogram block at the top of a rough incline, 2.0 meters above the bottom of the incline.",
        "minWidth": 260
      }
    ],
    "choices": [
      "36 J",
      "48 J",
      "60 J",
      "84 J"
    ],
    "correct": 0,
    "explanation": "The initial potential energy is mgh = (3.0)(10)(2.0) = 60 J, and the final kinetic energy is ½(3.0)(4.0)² = 24 J. The missing 60 − 24 = 36 J became thermal energy. 60 J would be the thermal energy only if the block ended at rest, and 84 J wrongly adds the final kinetic energy."
  },
  {
    "id": "e1-25",
    "unit": 5,
    "stem": "A uniform meterstick balances on a pivot at its 70 cm mark when a 0.30 kg mass is hung from the 100 cm end. What is the mass of the meterstick?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"36 53 454 141\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M330 124L314 154L346 154Z\" fill=\"#E8E6DE\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"304\" y1=\"154\" x2=\"356\" y2=\"154\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"124\" x2=\"450\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"420\" y=\"150\" width=\"60\" height=\"34\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"450\" y=\"172\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">0.30 kg</text><text x=\"250\" y=\"74\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">uniform meterstick</text><line x1=\"50\" y1=\"102\" x2=\"50\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"50\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"330\" y1=\"102\" x2=\"330\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"330\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">70 cm</text><line x1=\"450\" y1=\"102\" x2=\"450\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><text x=\"450\" y=\"96\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">100 cm</text></svg>",
        "alt": "A uniform meterstick balanced on a pivot at its 70 centimeter mark, with a 0.30 kilogram mass hanging from the 100 centimeter end.",
        "minWidth": 309
      }
    ],
    "choices": [
      "0.20 kg",
      "0.30 kg",
      "0.45 kg",
      "0.90 kg"
    ],
    "correct": 2,
    "explanation": "The stick's center of mass is at the 50 cm mark, 20 cm from the pivot on one side, and the hanging mass is 30 cm from the pivot on the other side. Balancing torques: m_stick(0.20) = (0.30)(0.30), so m_stick = 0.45 kg."
  },
  {
    "id": "e1-26",
    "unit": 2,
    "stem": "A skydiver falls through the air and eventually reaches terminal velocity. Which of the following is true once the skydiver is falling at terminal velocity?",
    "choices": [
      "The upward drag force on the skydiver is greater than the skydiver's weight.",
      "Gravity no longer acts on the skydiver once terminal velocity is reached.",
      "The net force on the skydiver is directed downward and is constant.",
      "The upward drag force on the skydiver equals the skydiver's weight."
    ],
    "correct": 3,
    "explanation": "At terminal velocity the skydiver's velocity is constant, so the net force is zero (Newton's first law). The upward drag must therefore equal the downward weight. Gravity still acts; the drag force simply grows with speed until it balances gravity."
  },
  {
    "id": "e1-27",
    "unit": 5,
    "stem": "A uniform horizontal rod of mass 6.0 kg and length 2.0 m is attached to a wall by a hinge at one end. A vertical cable attached to the free end holds the rod in a horizontal position. What is the tension in the cable?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"28 22 422 181\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"46\" y1=\"50\" x2=\"46\" y2=\"190\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"60\" x2=\"38\" y2=\"53\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"70\" x2=\"38\" y2=\"63\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"80\" x2=\"38\" y2=\"73\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"90\" x2=\"38\" y2=\"83\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"100\" x2=\"38\" y2=\"93\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"110\" x2=\"38\" y2=\"103\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"120\" x2=\"38\" y2=\"113\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"130\" x2=\"38\" y2=\"123\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"140\" x2=\"38\" y2=\"133\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"150\" x2=\"38\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"160\" x2=\"38\" y2=\"153\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"170\" x2=\"38\" y2=\"163\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"180\" x2=\"38\" y2=\"173\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"46\" y1=\"190\" x2=\"38\" y2=\"183\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"40\" x2=\"440\" y2=\"40\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"40\" x2=\"367\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"40\" x2=\"377\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"40\" x2=\"387\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"40\" x2=\"397\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"40\" x2=\"407\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"40\" x2=\"417\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"40\" x2=\"427\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"40\" x2=\"437\" y2=\"32\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"46\" y=\"123\" width=\"354\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><circle cx=\"54\" cy=\"130\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"396\" y1=\"40\" x2=\"396\" y2=\"123\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"406\" y=\"85\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">cable</text><text x=\"230\" y=\"116\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">uniform rod, 6.0 kg</text><text x=\"84\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">hinge</text><line x1=\"54\" y1=\"170\" x2=\"396\" y2=\"170\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"396,170 388.82,173.2 388.82,166.8\" fill=\"#767F73\"/><polygon points=\"54,170 61.18,166.8 61.18,173.2\" fill=\"#767F73\"/><text x=\"225\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2.0 m</text></svg>",
        "alt": "A uniform horizontal rod of mass 6.0 kilograms and length 2.0 meters hinged to a wall at its left end and held horizontal by a vertical cable at its right end.",
        "minWidth": 287
      }
    ],
    "choices": [
      "15 N",
      "30 N",
      "60 N",
      "120 N"
    ],
    "correct": 1,
    "explanation": "Take torques about the hinge so the unknown hinge force drops out. The rod's weight, 60 N, acts at its center, 1.0 m from the hinge, and the cable acts 2.0 m from the hinge. Equilibrium requires T(2.0) = (60)(1.0), so T = 30 N. 60 N would be the tension only if the cable were attached at the rod's center."
  },
  {
    "id": "e1-28",
    "unit": 5,
    "stem": "A thin hoop and a solid disk have the same mass and the same radius, and each can rotate freely about its central axis. The same constant net torque is applied to each, starting from rest. Which statement is correct?",
    "choices": [
      "The disk has the greater angular acceleration, because its rotational inertia is smaller.",
      "The hoop has the greater angular acceleration, because its mass is farther from the axis.",
      "The two have the same angular acceleration, because they have equal mass and radius.",
      "The two have the same angular acceleration, because the net torque on each is the same."
    ],
    "correct": 0,
    "explanation": "Angular acceleration is α = τ/I. The hoop (I = MR²) has greater rotational inertia than the disk (I = ½MR²) because all of its mass is at the maximum distance from the axis. For the same torque the disk therefore has twice the angular acceleration. Rotational inertia depends on how the mass is distributed, not only on the mass and radius."
  },
  {
    "id": "e1-29",
    "unit": 6,
    "stem": "A 0.50 kg ball moves at a constant velocity of 4.0 m/s along a straight line. The line of motion passes at a perpendicular distance of 1.5 m from a point P. What is the magnitude of the ball's angular momentum about P?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"40 28 410 181\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"50\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#9AA096\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"60\" y=\"50\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">line of motion</text><circle cx=\"330\" cy=\"60\" r=\"14\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"330\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">0.50 kg</text><line x1=\"346\" y1=\"60\" x2=\"406\" y2=\"60\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"406,60 396.61,64.19 396.61,55.81\" fill=\"#3F7A94\"/><text x=\"376\" y=\"50\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 m/s</text><line x1=\"190\" y1=\"60\" x2=\"190\" y2=\"190\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><path d=\"M190 74L204 74L204 60\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"190\" cy=\"190\" r=\"5\" fill=\"#2E332E\"/><text x=\"202\" y=\"196\" text-anchor=\"start\" font-size=\"15\" font-weight=\"800\" fill=\"#2E332E\">P</text><text x=\"200\" y=\"129\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">1.5 m</text></svg>",
        "alt": "A ball with a mass of 0.50 kilograms moving to the right at 4.0 meters per second along a straight line. Point P is 1.5 meters from the line, measured perpendicular to it.",
        "minWidth": 279
      }
    ],
    "choices": [
      "0.75 kg·m²/s",
      "2.0 kg·m²/s",
      "3.0 kg·m²/s",
      "6.0 kg·m²/s"
    ],
    "correct": 2,
    "explanation": "L = mvr⊥ = (0.50)(4.0)(1.5) = 3.0 kg·m²/s. The value 2.0 is the ball's linear momentum mv and does not include the distance from P."
  },
  {
    "id": "e1-30",
    "unit": 1,
    "stem": "The velocity of an object moving along a straight line is plotted against time. The graph is a straight line with a negative slope that crosses the time axis at t = 3 s. Which of the following describes the object at t = 5 s?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-6</text><line x1=\"64\" y1=\"230\" x2=\"496\" y2=\"230\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"234\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-4</text><line x1=\"64\" y1=\"188\" x2=\"496\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">-2</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"104\" x2=\"496\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"62\" x2=\"496\" y2=\"62\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"66\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"272\" x2=\"136\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"208\" y1=\"272\" x2=\"208\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"352\" y1=\"272\" x2=\"352\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"424\" y1=\"272\" x2=\"424\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">v (m/s)</text><path d=\"M64 20L496 272\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"424\" y1=\"20\" x2=\"424\" y2=\"272\" stroke=\"#9AA096\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/></svg>",
        "alt": "A velocity versus time graph: a straight line with negative slope that starts at 6 meters per second at time zero, crosses zero at 3 seconds, and reaches negative 6 meters per second at 6 seconds. A dashed vertical line marks t equals 5 seconds.",
        "minWidth": 351
      }
    ],
    "choices": [
      "It is moving in the negative direction and speeding up.",
      "It is moving in the positive direction and slowing down.",
      "It is moving in the positive direction and speeding up.",
      "It is moving in the negative direction and slowing down."
    ],
    "correct": 0,
    "explanation": "A straight line with a negative slope means a constant negative acceleration. After the line crosses zero at t = 3 s the velocity is negative, so the velocity and acceleration now point the same way and the speed increases while the object moves in the negative direction. Before t = 3 s the object was moving in the positive direction and slowing down."
  },
  {
    "id": "e1-31",
    "unit": 1,
    "stem": "A ball is thrown straight upward from the ground with an initial speed of 20 m/s. Air resistance is negligible. What maximum height above the ground does the ball reach?",
    "choices": [
      "10 m",
      "20 m",
      "30 m",
      "40 m"
    ],
    "correct": 1,
    "explanation": "At the top of the path v = 0, so 0 = v₀² − 2gh and h = v₀²/(2g) = 400/20 = 20 m. 40 m results from using v₀²/g and forgetting the factor of 2 in the kinematic equation."
  },
  {
    "id": "e1-32",
    "unit": 3,
    "stem": "A 3.0 kg cart starts from rest on a horizontal frictionless track. A force directed along the track is 6.0 N from x = 0 to x = 2.0 m and then decreases linearly to zero at x = 6.0 m. What is the cart's speed at x = 6.0 m?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"209\" x2=\"496\" y2=\"209\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"213\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"83\" x2=\"496\" y2=\"83\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"87\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"272\" x2=\"136\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"208\" y1=\"272\" x2=\"208\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"352\" y1=\"272\" x2=\"352\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"424\" y1=\"272\" x2=\"424\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">x (m)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Force (N)</text><path d=\"M64 83L208 83L496 272\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A force versus position graph: the force is 6.0 newtons from 0 to 2.0 meters, then decreases linearly to zero at 6.0 meters.",
        "minWidth": 351
      }
    ],
    "choices": [
      "4 m/s",
      "6 m/s",
      "8 m/s",
      "12 m/s"
    ],
    "correct": 0,
    "explanation": "The work is the area under the force–position graph: a rectangle (6.0 N)(2.0 m) = 12 J plus a triangle ½(6.0 N)(4.0 m) = 12 J, for 24 J in total. Then W = ΔK gives 24 = ½(3.0)v², so v² = 16 and v = 4.0 m/s."
  },
  {
    "id": "e1-33",
    "unit": 6,
    "stem": "A horizontal disk rotates freely about a frictionless vertical axle. A small lump of clay is dropped onto the disk and sticks to it near the rim. Which statement correctly compares the disk-and-clay system just before and just after the clay sticks?",
    "choices": [
      "Both angular momentum and rotational kinetic energy are conserved.",
      "Rotational kinetic energy is conserved, but angular momentum decreases.",
      "Both angular momentum and rotational kinetic energy decrease.",
      "Angular momentum is conserved, but rotational kinetic energy decreases."
    ],
    "correct": 3,
    "explanation": "No external torque acts about the axle, so the angular momentum of the system is conserved. The clay adds rotational inertia, so the angular speed decreases. Since K = L²/(2I), the kinetic energy decreases when I increases at constant L; mechanical energy is converted to thermal energy as the clay sticks."
  },
  {
    "id": "e1-34",
    "unit": 8,
    "stem": "A 0.50 kg object with a volume of 3.0 × 10⁻⁴ m³ hangs from a string attached to a fixed support above it, completely underwater. The density of water is 1000 kg/m³. What is the tension in the string?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"100 6 232 254\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"120\" y1=\"24\" x2=\"280\" y2=\"24\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"24\" x2=\"127\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"24\" x2=\"137\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"24\" x2=\"147\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"24\" x2=\"157\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"24\" x2=\"167\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"24\" x2=\"177\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"24\" x2=\"187\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"24\" x2=\"197\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"24\" x2=\"207\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"24\" x2=\"217\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"24\" x2=\"227\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"24\" x2=\"237\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"24\" x2=\"247\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"24\" x2=\"257\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"24\" x2=\"267\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"24\" x2=\"277\" y2=\"16\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"24\" x2=\"200\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M110 120L110 250L290 250L290 120\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><rect x=\"111\" y=\"150\" width=\"178\" height=\"99\" fill=\"#D8E8F2\" stroke=\"none\"/><rect x=\"170\" y=\"168\" width=\"60\" height=\"52\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"200\" y=\"199\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">0.50 kg</text><text x=\"268\" y=\"240\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">water</text><text x=\"240\" y=\"198\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">V = 3.0×10⁻⁴ m³</text><line x1=\"200\" y1=\"150\" x2=\"200\" y2=\"168\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><text x=\"212\" y=\"90\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">string</text><line x1=\"111\" y1=\"150\" x2=\"289\" y2=\"150\" stroke=\"#3F7A94\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>",
        "alt": "A 0.50 kilogram object of volume 3.0 times 10 to the minus 4 cubic meters hanging from a string attached to a support above, completely underwater in a container of water.",
        "minWidth": 260
      }
    ],
    "choices": [
      "2.0 N",
      "3.0 N",
      "5.0 N",
      "8.0 N"
    ],
    "correct": 0,
    "explanation": "The buoyant force is B = ρVg = (1000)(3.0 × 10⁻⁴)(10) = 3.0 N upward. The object is in equilibrium with the string and the buoyant force both pulling up and the weight mg = 5.0 N pulling down: T + B = mg, so T = 5.0 − 3.0 = 2.0 N. 3.0 N is only the buoyant force, 5.0 N is the weight (the tension in air), and 8.0 N adds the buoyant force instead of subtracting it."
  },
  {
    "id": "e1-35",
    "unit": 4,
    "stem": "A 2.0 kg object is at x = 1.0 m and a 3.0 kg object is at x = 6.0 m on the x-axis. What is the x-coordinate of the center of mass of the two-object system?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 29 448 96\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"30\" y1=\"90\" x2=\"458\" y2=\"90\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"458,90 449.42,93.83 449.42,86.17\" fill=\"#2E332E\"/><line x1=\"40\" y1=\"85\" x2=\"40\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"98.57\" y1=\"85\" x2=\"98.57\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"98.57\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"157.14\" y1=\"85\" x2=\"157.14\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"157.14\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"215.71\" y1=\"85\" x2=\"215.71\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"215.71\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"274.29\" y1=\"85\" x2=\"274.29\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"274.29\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"332.86\" y1=\"85\" x2=\"332.86\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"332.86\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5</text><line x1=\"391.43\" y1=\"85\" x2=\"391.43\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"391.43\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"450\" y1=\"85\" x2=\"450\" y2=\"95\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"450\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">7</text><text x=\"454\" y=\"78\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">x (m)</text><circle cx=\"98.57\" cy=\"62\" r=\"23\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"98.57\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"391.43\" cy=\"62\" r=\"23\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"391.43\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">3.0 kg</text></svg>",
        "alt": "A number line showing a 2.0 kilogram object at x equals 1.0 meter and a 3.0 kilogram object at x equals 6.0 meters.",
        "minWidth": 305
      }
    ],
    "choices": [
      "3.5 m",
      "4.0 m",
      "5.0 m",
      "7.0 m"
    ],
    "correct": 1,
    "explanation": "x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂) = [(2.0)(1.0) + (3.0)(6.0)]/5.0 = 20/5.0 = 4.0 m. 3.5 m is the simple average of the two positions, which ignores that the masses are different."
  },
  {
    "id": "e1-36",
    "unit": 2,
    "stem": "A 10 kg block slides down a frictionless incline that makes an angle of 30° with the horizontal. What is the magnitude of the block's acceleration?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 79 277 153\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M40 214L256.51 214L256.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"20\" y1=\"214\" x2=\"276.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"214\" x2=\"23\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"214\" x2=\"33\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"214\" x2=\"43\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"214\" x2=\"53\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"214\" x2=\"63\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"214\" x2=\"73\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"214\" x2=\"83\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"93\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(159.08 145.25) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"151.58\" y=\"137.26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">10 kg</text><path d=\"M82 214A42 42 0 0 0 76.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><text x=\"182.89\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless</text></svg>",
        "alt": "A 10 kilogram block on a frictionless incline that makes a 30 degree angle with the horizontal.",
        "minWidth": 260
      }
    ],
    "choices": [
      "2.5 m/s²",
      "5.0 m/s²",
      "8.7 m/s²",
      "10 m/s²"
    ],
    "correct": 1,
    "explanation": "Only the component of gravity along the incline accelerates the block: a = g sin 30° = (10)(0.50) = 5.0 m/s². The mass cancels. 8.7 m/s² results from using cosine instead of sine, and 10 m/s² would be free fall."
  },
  {
    "id": "e1-37",
    "unit": 7,
    "stem": "A block oscillates on a horizontal spring along an x-axis with its equilibrium position at x = 0. At the instant the block's speed is greatest, which statement is true?",
    "choices": [
      "The block is at x = 0 and its acceleration is at its maximum magnitude.",
      "The block is at maximum displacement and its acceleration is zero.",
      "The block is at maximum displacement and its acceleration is at its maximum magnitude.",
      "The block is at x = 0 and its acceleration is zero."
    ],
    "correct": 3,
    "explanation": "The speed is greatest at the equilibrium position, where all of the energy is kinetic. The restoring force F = −kx is zero there, so the acceleration is zero. At maximum displacement the speed is zero and the acceleration has its greatest magnitude."
  },
  {
    "id": "e1-38",
    "unit": 1,
    "stem": "A boat points directly across a river and moves at 6 m/s relative to the water. The river's current is 8 m/s, parallel to the banks. What is the boat's speed relative to the shore?",
    "choices": [
      "2 m/s",
      "6 m/s",
      "8 m/s",
      "10 m/s"
    ],
    "correct": 3,
    "explanation": "The boat's velocity relative to the water (6 m/s across) and the current (8 m/s downstream) are perpendicular, so the speed relative to the shore is √(6² + 8²) = 10 m/s. 2 m/s would be the difference of the speeds, which only applies to motion along the same line."
  },
  {
    "id": "e1-39",
    "unit": 1,
    "stem": "A projectile is launched from level ground at an angle of 45° above the horizontal. Air resistance is negligible. Which of the following is true at the highest point of the projectile's path?",
    "choices": [
      "Its velocity and its acceleration are both zero.",
      "Its velocity is zero and its acceleration is 10 m/s² downward.",
      "Its velocity is horizontal and its acceleration is 10 m/s² downward.",
      "Its velocity is horizontal and its acceleration is zero."
    ],
    "correct": 2,
    "explanation": "At the top, the vertical component of velocity is zero but the horizontal component is unchanged and nonzero, so the velocity is horizontal. The only force is gravity, so the acceleration is g = 10 m/s² downward at every point of the flight, including the top."
  },
  {
    "id": "e1-40",
    "unit": 4,
    "stem": "In a car crash, an airbag increases the time over which a passenger's body comes to rest, compared with striking the dashboard directly. Which of the following is true when the airbag deploys?",
    "choices": [
      "The impulse on the passenger is smaller, because the airbag absorbs part of the momentum.",
      "The average force on the passenger is smaller, because the same change in momentum occurs over a longer time.",
      "The average force on the passenger is the same, because the impulse delivered is larger.",
      "The change in the passenger's momentum is smaller, because the passenger slows down gradually."
    ],
    "correct": 1,
    "explanation": "The passenger goes from the same initial velocity to rest either way, so the change in momentum, and therefore the impulse, is the same. Since J = F_avg Δt, a longer stopping time means a smaller average force."
  },
  {
    "id": "e1-41",
    "unit": 2,
    "stem": "Two blocks of mass 2.0 kg and 3.0 kg are in contact on a frictionless horizontal surface. A 10 N horizontal force pushes on the 2.0 kg block, which in turn pushes on the 3.0 kg block. What is the magnitude of the force that the 2.0 kg block exerts on the 3.0 kg block?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 75 464 103\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"135\" x2=\"21\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"135\" x2=\"31\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"135\" x2=\"41\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"135\" x2=\"51\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"135\" x2=\"61\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"135\" x2=\"71\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"135\" x2=\"81\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"135\" x2=\"91\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"135\" x2=\"101\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"135\" x2=\"111\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"135\" x2=\"121\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"135\" x2=\"131\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"135\" x2=\"141\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"135\" x2=\"151\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"135\" x2=\"161\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"135\" x2=\"171\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"135\" x2=\"181\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"135\" x2=\"191\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"135\" x2=\"201\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"135\" x2=\"211\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"135\" x2=\"221\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"135\" x2=\"231\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"135\" x2=\"241\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"135\" x2=\"251\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"135\" x2=\"261\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"135\" x2=\"271\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"135\" x2=\"281\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"135\" x2=\"291\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"135\" x2=\"301\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"135\" x2=\"311\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"135\" x2=\"321\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"135\" x2=\"331\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"135\" x2=\"341\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"135\" x2=\"351\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"135\" x2=\"361\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"135\" x2=\"371\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"135\" x2=\"381\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"135\" x2=\"391\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"135\" x2=\"401\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"135\" x2=\"411\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"135\" x2=\"421\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"135\" x2=\"431\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"135\" x2=\"441\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"135\" x2=\"451\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"135\" y=\"85\" width=\"90\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"180\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><rect x=\"225\" y=\"85\" width=\"100\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"275\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3.0 kg</text><line x1=\"45\" y1=\"110\" x2=\"135\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"135,110 125.61,114.19 125.61,105.81\" fill=\"#D2705A\"/><text x=\"90\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">10 N</text><text x=\"240\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">frictionless surface</text></svg>",
        "alt": "A 2.0 kilogram block and a 3.0 kilogram block in contact on a frictionless surface. A 10 newton force pushes the 2.0 kilogram block to the right, and it pushes on the 3.0 kilogram block.",
        "minWidth": 316
      }
    ],
    "choices": [
      "4 N",
      "6 N",
      "10 N",
      "20 N"
    ],
    "correct": 1,
    "explanation": "Both blocks accelerate together: a = F/(m₁ + m₂) = 10/5.0 = 2.0 m/s². The 3.0 kg block is accelerated only by the contact force, so F = ma = (3.0)(2.0) = 6.0 N. 4 N is the net force on the 2.0 kg block (10 − 6), and 10 N is the force applied to the whole system."
  },
  {
    "id": "e1-42",
    "unit": 3,
    "stem": "A motor lifts a 1200 kg elevator car upward at a constant speed of 2.0 m/s. What power does the motor deliver to the car?",
    "choices": [
      "2,400 W",
      "12,000 W",
      "24,000 W",
      "48,000 W"
    ],
    "correct": 2,
    "explanation": "Constant speed means the lifting force equals the weight: F = mg = 12,000 N. The power is P = Fv = (12,000)(2.0) = 24,000 W. 12,000 W is the force itself, and 2,400 W comes from leaving out g."
  }
];

export default EXAM_1_QUESTIONS;
