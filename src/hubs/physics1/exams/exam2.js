// AP Physics 1 — MCQ Exam 2 (42 questions). Uses g = 10 m/s².
const EXAM_2_QUESTIONS = [
  {
    "id": "e2-1",
    "unit": 2,
    "stem": "A 5.0 kg box is pushed across a rough horizontal floor by a constant horizontal force of 30 N. The coefficient of kinetic friction between the box and the floor is 0.20. What is the magnitude of the box's acceleration?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 75 464 103\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"135\" x2=\"21\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"135\" x2=\"31\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"135\" x2=\"41\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"135\" x2=\"51\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"135\" x2=\"61\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"135\" x2=\"71\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"135\" x2=\"81\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"135\" x2=\"91\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"135\" x2=\"101\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"135\" x2=\"111\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"135\" x2=\"121\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"135\" x2=\"131\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"135\" x2=\"141\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"135\" x2=\"151\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"135\" x2=\"161\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"135\" x2=\"171\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"135\" x2=\"181\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"135\" x2=\"191\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"135\" x2=\"201\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"135\" x2=\"211\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"135\" x2=\"221\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"135\" x2=\"231\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"135\" x2=\"241\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"135\" x2=\"251\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"135\" x2=\"261\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"135\" x2=\"271\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"135\" x2=\"281\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"135\" x2=\"291\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"135\" x2=\"301\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"135\" x2=\"311\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"135\" x2=\"321\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"135\" x2=\"331\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"135\" x2=\"341\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"135\" x2=\"351\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"135\" x2=\"361\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"135\" x2=\"371\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"135\" x2=\"381\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"135\" x2=\"391\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"135\" x2=\"401\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"135\" x2=\"411\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"135\" x2=\"421\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"135\" x2=\"431\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"135\" x2=\"441\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"135\" x2=\"451\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"180\" y=\"85\" width=\"100\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"230\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">5.0 kg</text><line x1=\"90\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"180,110 170.61,114.19 170.61,105.81\" fill=\"#D2705A\"/><text x=\"135\" y=\"101\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">30 N</text><text x=\"240\" y=\"165\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">rough floor, μk = 0.20</text></svg>",
        "alt": "A 5.0 kilogram box on a rough horizontal floor pushed to the right by a 30 newton horizontal force. The coefficient of kinetic friction is 0.20.",
        "minWidth": 316
      }
    ],
    "choices": [
      "4.0 m/s²",
      "5.8 m/s²",
      "6.0 m/s²",
      "8.0 m/s²"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 4.0 m/s². On a horizontal floor with only a horizontal push, the normal force equals the weight: N = mg = (5.0 kg)(10 m/s²) = 50 N. Kinetic friction is f = μₖN = (0.20)(50 N) = 10 N, directed opposite the motion. Newton's second law gives F<sub>net</sub> = 30 N − 10 N = 20 N, so a = F<sub>net</sub>/m = 20 N / 5.0 kg = 4.0 m/s².\n\n(B) is wrong because it uses the mass instead of the weight in the friction formula: f = (0.20)(5.0) = 1.0 N, so a = (30 − 1.0)/5.0 = 5.8 m/s².\n(C) is wrong because it ignores friction entirely, computing a = 30 N / 5.0 kg = 6.0 m/s², even though the floor is rough and friction removes 10 N.\n(D) is wrong because it adds the 10 N friction force to the push, (30 + 10)/5.0 = 8.0 m/s², but kinetic friction opposes the motion and reduces the net force."
  },
  {
    "id": "e2-2",
    "unit": 3,
    "stem": "A motor with a constant power output of 2000 W lifts a 100 kg load at constant speed through a height of 10 m. How long does the lift take?",
    "choices": [
      "0.5 s",
      "2.0 s",
      "3.0 s",
      "5.0 s"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 5.0 s. Lifting at constant speed means the motor's work goes entirely into gravitational potential energy: W = mgh = (100 kg)(10 m/s²)(10 m) = 1.0 × 10⁴ J. Power is the rate of doing work, P = W/t, so t = W/P = 10,000 J / 2000 W = 5.0 s. The constant speed tells you no kinetic energy is gained.\n\n(A) is wrong because it leaves out g, using W = mh = (100)(10) = 1000 J, which gives t = 1000/2000 = 0.5 s; the work must use the weight, 1000 N.\n(B) is wrong because it inverts the relationship, computing 2000/1000 (power divided by the weight) instead of dividing the 10,000 J of work by the 2000 W power.\n(C) is wrong because a 3.0 s lift at 2000 W supplies only 6000 J, which is less than the 10,000 J needed to raise 1000 N through 10 m."
  },
  {
    "id": "e2-3",
    "unit": 2,
    "stem": "Two blocks of mass 2.0 kg and 3.0 kg are connected by a light string that passes over a light, frictionless pulley. The blocks are released from rest. What is the magnitude of the acceleration of the blocks?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"148 4 258 242\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"160\" y1=\"22\" x2=\"280\" y2=\"22\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"22\" x2=\"167\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"22\" x2=\"177\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"22\" x2=\"187\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"22\" x2=\"197\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"22\" x2=\"207\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"22\" x2=\"217\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"22\" x2=\"227\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"22\" x2=\"237\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"22\" x2=\"247\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"22\" x2=\"257\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"22\" x2=\"267\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"22\" x2=\"277\" y2=\"14\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"22\" x2=\"220\" y2=\"44\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><circle cx=\"220\" cy=\"78\" r=\"34\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"2\"/><circle cx=\"220\" cy=\"78\" r=\"3\" fill=\"#2E332E\"/><line x1=\"186\" y1=\"78\" x2=\"186\" y2=\"150\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"254\" y1=\"78\" x2=\"254\" y2=\"190\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"158\" y=\"150\" width=\"56\" height=\"46\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"186\" y=\"178\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><rect x=\"226\" y=\"190\" width=\"56\" height=\"46\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"254\" y=\"218\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">3.0 kg</text><text x=\"310\" y=\"70\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">light, frictionless</text><text x=\"310\" y=\"86\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">pulley</text><line x1=\"306\" y1=\"76\" x2=\"258\" y2=\"78\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "Two blocks, 2.0 kilograms and 3.0 kilograms, hanging from opposite ends of a string that passes over a light, frictionless pulley.",
        "minWidth": 260
      }
    ],
    "choices": [
      "0.5 m/s²",
      "1.0 m/s²",
      "2.0 m/s²",
      "5.0 m/s²"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 2.0 m/s². Treat the two blocks and string as one system (an Atwood machine). The unbalanced force is the difference of the weights, (3.0 kg − 2.0 kg)(10 m/s²) = 10 N, while the string tension is internal. That 10 N must accelerate both masses together, 5.0 kg, so a = (m₂ − m₁)g/(m₁ + m₂) = 10 N / 5.0 kg = 2.0 m/s².\n\n(A) is wrong because it divides the 1.0 kg mass difference by the 2.0 kg lighter mass and leaves out g, 1.0/2.0 = 0.5; the 10 N weight difference must be divided by the 5.0 kg total mass.\n(B) is wrong because 1.0 m/s² is the acceleration a net force of only 5.0 N would give the 5.0 kg system, half the real 10 N difference between the weights; it is as if the 10 N were divided by 10 kg instead of 2.0 + 3.0 = 5.0 kg.\n(D) is wrong because it divides the 10 N net force by only the 2.0 kg block, forgetting that the 3.0 kg block must be accelerated by the same net force."
  },
  {
    "id": "e2-4",
    "unit": 4,
    "stem": "A 6.0 kg object at rest explodes into two pieces. A 2.0 kg piece moves to the right at 9.0 m/s. What is the speed of the 4.0 kg piece?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 272\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before: at rest</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"190\" y=\"78\" width=\"110\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"245\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">6.0 kg</text><circle cx=\"214.2\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"275.8\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"10\" y=\"160\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">After: explodes into two pieces</text><line x1=\"18\" y1=\"264\" x2=\"482\" y2=\"264\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"90\" y=\"214\" width=\"96\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"138\" y=\"238\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 kg</text><circle cx=\"111.12\" cy=\"258\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"164.88\" cy=\"258\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"138\" y1=\"198\" x2=\"86\" y2=\"198\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"86,198 95.39,193.81 95.39,202.19\" fill=\"#3F7A94\"/><text x=\"112\" y=\"191\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">v = ?</text><rect x=\"290\" y=\"214\" width=\"70\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"325\" y=\"238\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"305.4\" cy=\"258\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"344.6\" cy=\"258\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"325\" y1=\"198\" x2=\"377\" y2=\"198\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"377,198 367.61,202.19 367.61,193.81\" fill=\"#3F7A94\"/><text x=\"351\" y=\"191\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">9.0 m/s</text></svg>",
        "alt": "A 6.0 kilogram object at rest, then after an explosion a 2.0 kilogram piece moving right at 9.0 meters per second and a 4.0 kilogram piece moving left at an unknown speed.",
        "minWidth": 335
      }
    ],
    "choices": [
      "2.0 m/s",
      "3.0 m/s",
      "4.0 m/s",
      "4.5 m/s"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 4.5 m/s. The object starts at rest, so the total momentum is zero, and the internal explosion forces cannot change it. After the explosion the two pieces must have equal and opposite momenta: (4.0 kg)v = (2.0 kg)(9.0 m/s) = 18 kg·m/s, so v = 18/4.0 = 4.5 m/s, directed to the left. The heavier piece moves more slowly.\n\n(A) is wrong because a 4.0 kg piece at 2.0 m/s carries only 8.0 kg·m/s, which cannot cancel the 18 kg·m/s of the 2.0 kg piece, so total momentum would not stay zero.\n(B) is wrong because it divides the 18 kg·m/s by the total 6.0 kg mass, as if the whole object moved together, instead of by the 4.0 kg piece's own mass.\n(C) is wrong because a 4.0 kg piece at 4.0 m/s carries 16 kg·m/s, not the 18 kg·m/s needed to balance the 2.0 kg piece's momentum."
  },
  {
    "id": "e2-5",
    "unit": 6,
    "stem": "A solid sphere of mass 0.50 kg (rotational inertia I = (2/5)MR²) rolls without slipping along a horizontal surface with a center-of-mass speed of 4.0 m/s. What is its total kinetic energy?",
    "choices": [
      "1.6 J",
      "4.0 J",
      "5.0 J",
      "5.6 J"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 5.6 J. A rolling object has both translational and rotational kinetic energy, linked by the no-slip condition ω = v/R. Translational: ½mv² = ½(0.50 kg)(4.0 m/s)² = 4.0 J. Rotational: ½Iω² = ½(2/5)(mR²)(v/R)² = (1/5)mv² = (1/5)(0.50)(16) = 1.6 J. The radius cancels, and the total is 4.0 J + 1.6 J = 5.6 J.\n\n(A) is wrong because 1.6 J is only the rotational kinetic energy; the sphere's center of mass is also moving at 4.0 m/s and carries 4.0 J of translational energy.\n(B) is wrong because 4.0 J is only the translational kinetic energy ½mv², which treats the sphere as sliding without spinning and leaves out the 1.6 J of rotational energy.\n(C) is wrong because it adds only 1.0 J of rotational energy, an underestimate; with I = (2/5)MR² the rotational term is (1/5)mv² = 1.6 J, not 1.0 J."
  },
  {
    "id": "e2-6",
    "unit": 5,
    "stem": "A 4.0 kg block hangs at rest from a light string wound around a drum of radius 0.25 m that can rotate about a fixed horizontal axle. What is the magnitude of the torque the string exerts on the drum about the axle?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"49 2 301 255\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"80\" y1=\"20\" x2=\"260\" y2=\"20\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"20\" x2=\"87\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"20\" x2=\"97\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"20\" x2=\"107\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"20\" x2=\"117\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"20\" x2=\"127\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"20\" x2=\"137\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"20\" x2=\"147\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"20\" x2=\"157\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"20\" x2=\"167\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"20\" x2=\"177\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"20\" x2=\"187\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"20\" x2=\"197\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"20\" x2=\"207\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"20\" x2=\"217\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"20\" x2=\"227\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"20\" x2=\"237\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"20\" x2=\"247\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"20\" x2=\"257\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"20\" x2=\"170\" y2=\"44\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/><circle cx=\"170\" cy=\"92\" r=\"48\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\"/><circle cx=\"170\" cy=\"92\" r=\"4\" fill=\"#2E332E\"/><line x1=\"122\" y1=\"92\" x2=\"170\" y2=\"92\" stroke=\"#2E332E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><text x=\"114\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">r = 0.25 m</text><line x1=\"218\" y1=\"92\" x2=\"218\" y2=\"195\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"182\" y=\"195\" width=\"72\" height=\"52\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"218\" y=\"226\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 kg</text><text x=\"234\" y=\"134\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">fixed horizontal axle</text><line x1=\"230\" y1=\"128\" x2=\"176\" y2=\"96\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A 4.0 kilogram block hanging at rest from a string wound around a drum of radius 0.25 meters that can rotate on a fixed horizontal axle.",
        "minWidth": 260
      }
    ],
    "choices": [
      "10 N·m",
      "16 N·m",
      "40 N·m",
      "160 N·m"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 10 N·m. The block hangs at rest, so the string tension balances its weight: T = mg = (4.0 kg)(10 m/s²) = 40 N. The string leaves the drum tangentially, so its line of action is perpendicular to the radius, and the lever arm is the full radius. The torque is τ = rT = (0.25 m)(40 N) = 10 N·m.\n\n(B) is wrong because it divides the 4.0 kg mass by the radius, 4.0/0.25 = 16, using mass instead of weight and dividing instead of multiplying by the lever arm.\n(C) is wrong because 40 N is the tension force itself, not a torque; the force must be multiplied by the 0.25 m lever arm to give the torque.\n(D) is wrong because it divides the 40 N tension by the radius, 40/0.25 = 160, instead of multiplying, and that quotient has units of N/m, not N·m."
  },
  {
    "id": "e2-7",
    "unit": 3,
    "stem": "The speed of a 2.0 kg object increases from 3.0 m/s to 5.0 m/s. How much net work is done on the object?",
    "choices": [
      "4 J",
      "8 J",
      "12 J",
      "16 J"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 16 J. By the work–energy theorem, the net work equals the change in kinetic energy: W<sub>net</sub> = ½m(v<sub>f</sub>² − v<sub>i</sub>²) = ½(2.0 kg)[(5.0 m/s)² − (3.0 m/s)²] = (1.0)(25 − 9.0) = 16 J. Kinetic energy depends on v², so you must square each speed before subtracting.\n\n(A) is wrong because it squares the change in speed, ½(2.0)(5.0 − 3.0)² = 4 J, instead of taking the difference of the squared speeds, 25 − 9 = 16.\n(B) is wrong because it drops the mass, computing ½(25 − 9) = 8 J; the kinetic energy formula needs the 2.0 kg mass, which doubles the result.\n(C) is wrong because it multiplies the momentum change, (2.0)(2.0) = 4.0 kg·m/s, by the initial speed 3.0 m/s; work is the change in ½mv², not that product."
  },
  {
    "id": "e2-8",
    "unit": 6,
    "stem": "A skater spins at 2.0 rad/s with her arms extended and a rotational inertia of 3.0 kg·m². She pulls her arms in, reducing her rotational inertia to 1.5 kg·m². Friction is negligible. What is her new angular speed?",
    "choices": [
      "2.0 rad/s",
      "4.0 rad/s",
      "6.0 rad/s",
      "8.0 rad/s"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 4.0 rad/s. With negligible friction there is no external torque about the spin axis, so angular momentum is conserved: I₁ω₁ = I₂ω₂. Then (3.0 kg·m²)(2.0 rad/s) = (1.5 kg·m²)ω₂, so ω₂ = 6.0/1.5 = 4.0 rad/s. Halving the rotational inertia doubles the angular speed (her kinetic energy rises because she does work pulling her arms in).\n\n(A) is wrong because it assumes the angular speed stays the same, but pulling the arms in halves I, so ω must double to keep L = Iω constant.\n(C) is wrong because 6.0 is the angular momentum, I₁ω₁ = 6.0 kg·m²/s, not the new angular speed; it still has to be divided by the new I of 1.5 kg·m².\n(D) is wrong because it multiplies the speed by the square of the inertia ratio, 2.0 × 2² = 8.0, but conservation of L = Iω scales ω by the ratio itself."
  },
  {
    "id": "e2-9",
    "unit": 1,
    "stem": "A car traveling at 25 m/s brakes with a constant deceleration and comes to rest in 5.0 s. How far does the car travel while braking?",
    "choices": [
      "62.5 m",
      "75 m",
      "100 m",
      "125 m"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 62.5 m. With constant deceleration, velocity changes linearly, so the average velocity is the mean of the initial and final values: v<sub>avg</sub> = (25 + 0)/2 = 12.5 m/s. The distance is Δx = v<sub>avg</sub>t = (12.5 m/s)(5.0 s) = 62.5 m. Equivalently a = −25/5.0 = −5.0 m/s² and Δx = (25)(5.0) − ½(5.0)(5.0)² = 125 − 62.5 = 62.5 m.\n\n(B) is wrong because 75 m would require an average speed of 15 m/s over 5.0 s, but under uniform deceleration from 25 m/s to 0 the average is 12.5 m/s.\n(C) is wrong because 100 m would require an average speed of 20 m/s, which ignores how much the car slows during the 5.0 s of braking.\n(D) is wrong because it uses the initial speed for the whole time, (25)(5.0) = 125 m, as if the car never slowed down while braking."
  },
  {
    "id": "e2-10",
    "unit": 2,
    "stem": "A block slides down a rough incline that makes an angle of 30° with the horizontal. The block moves at a constant speed. What is the coefficient of kinetic friction between the block and the incline?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"90 79 277 153\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M120 214L336.51 214L336.51 89Z\" fill=\"#F3F0E6\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"214\" x2=\"356.51\" y2=\"214\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"214\" x2=\"103\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"214\" x2=\"113\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"214\" x2=\"123\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"214\" x2=\"133\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"214\" x2=\"143\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"214\" x2=\"153\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"214\" x2=\"163\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"214\" x2=\"173\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"214\" x2=\"183\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"214\" x2=\"193\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"214\" x2=\"203\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"214\" x2=\"213\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"214\" x2=\"223\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"214\" x2=\"233\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"214\" x2=\"243\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"214\" x2=\"253\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"214\" x2=\"263\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"214\" x2=\"273\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"214\" x2=\"283\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"214\" x2=\"293\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"214\" x2=\"303\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"214\" x2=\"313\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"214\" x2=\"323\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"214\" x2=\"333\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"214\" x2=\"343\" y2=\"222\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><g transform=\"translate(239.08 145.25) rotate(-30)\"><rect x=\"-26\" y=\"-30\" width=\"52\" height=\"30\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/></g><text x=\"231.58\" y=\"137.26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">block</text><path d=\"M162 214A42 42 0 0 0 156.37 193\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"182\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><line x1=\"210.79\" y1=\"144.26\" x2=\"172.69\" y2=\"166.26\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"172.69,166.26 178.72,157.94 182.91,165.2\" fill=\"#D2705A\"/><text x=\"164.69\" y=\"170.26\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">v</text><text x=\"262.89\" y=\"204\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#767F73\">rough, constant speed</text></svg>",
        "alt": "A block sliding down a rough incline that makes a 30 degree angle with the horizontal, moving at constant speed.",
        "minWidth": 260
      }
    ],
    "choices": [
      "0.50",
      "0.58",
      "0.87",
      "1.7"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 0.58. At constant speed the net force is zero. Along the incline, the gravity component mg sin θ is balanced by kinetic friction μₖN, and perpendicular to the incline N = mg cos θ. So mg sin 30° = μₖmg cos 30°, and the mass cancels: μₖ = tan 30° = 0.50/0.866 = 0.58.\n\n(A) is wrong because 0.50 is sin 30° alone; it forgets that the friction force depends on the normal force mg cos 30°, not the full weight.\n(C) is wrong because 0.87 is cos 30° alone, which is the ratio N/mg, not the ratio of friction to normal force that defines μₖ.\n(D) is wrong because 1.7 is cot 30° = cos 30°/sin 30°, the inverse of the correct ratio; it divides the normal component by the parallel component."
  },
  {
    "id": "e2-11",
    "unit": 4,
    "stem": "Which of the following quantities is conserved in every collision between two objects that form an isolated system?",
    "choices": [
      "The total kinetic energy of the system",
      "The kinetic energy of each individual object",
      "The linear momentum of each individual object",
      "The total linear momentum of the system"
    ],
    "correct": 3,
    "explanation": "Correct: (D) The total linear momentum of the system. In an isolated system no net external force acts, so by Newton's third law the forces the two objects exert on each other are equal and opposite and their impulses cancel. The total linear momentum is therefore conserved in every collision, elastic or inelastic. Kinetic energy can be converted to thermal energy or deformation, so it is not always conserved.\n\n(A) is wrong because total kinetic energy is conserved only in perfectly elastic collisions; in inelastic collisions some is converted to thermal energy, sound or deformation.\n(B) is wrong because each object's kinetic energy changes because the objects push on each other and do work on one another during the collision.\n(C) is wrong because each object's momentum changes because it receives an impulse from the other object; only the sum of the two momenta stays constant."
  },
  {
    "id": "e2-12",
    "unit": 2,
    "stem": "A car travels at a constant speed of 20 m/s around a flat circular curve of radius 80 m. What is the minimum coefficient of static friction between the tires and the road that allows the car to stay on the curve?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"84 1 326 245\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><circle cx=\"190\" cy=\"140\" r=\"96\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/><circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#2E332E\"/><line x1=\"190\" y1=\"140\" x2=\"286\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><text x=\"226.48\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">r = 80 m</text><rect x=\"268\" y=\"129\" width=\"36\" height=\"22\" rx=\"5\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"286\" y=\"144\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2E332E\">car</text><line x1=\"286\" y1=\"114\" x2=\"286\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"286,56 290.19,65.39 281.81,65.39\" fill=\"#3F7A94\"/><text x=\"298\" y=\"84\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">20 m/s</text><text x=\"400\" y=\"22\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a car moving at a constant 20 meters per second around a flat circular curve of radius 80 meters.",
        "minWidth": 260
      }
    ],
    "choices": [
      "0.25",
      "0.40",
      "0.50",
      "2.0"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 0.50. On a flat curve, static friction is the only horizontal force, so it supplies the centripetal force: f = mv²/r. The minimum μₛ occurs when friction is at its maximum, μₛmg = mv²/r, so μₛ = v²/(rg) = (20 m/s)²/[(80 m)(10 m/s²)] = 400/800 = 0.50. The mass cancels.\n\n(A) is wrong because it uses v/r = 20/80 = 0.25 without squaring the speed and without dividing by g, so the ratio is not even dimensionless.\n(B) is wrong because a coefficient of 0.40 would hold the car only up to v = √(0.40 × 10 × 80) ≈ 18 m/s, slower than the 20 m/s the car is traveling.\n(D) is wrong because it inverts the ratio, rg/v² = 800/400 = 2.0; the required friction grows with v², so v² belongs in the numerator."
  },
  {
    "id": "e2-13",
    "unit": 5,
    "stem": "Two small 1.0 kg masses are attached to the ends of a light rod 2.0 m long. What is the rotational inertia of the system about an axis perpendicular to the rod through one end?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"6 71 471 149\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"50\" y=\"110\" width=\"400\" height=\"14\" fill=\"#EFE4CF\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><circle cx=\"50\" cy=\"117\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"50\" y=\"156\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">1.0 kg</text><circle cx=\"450\" cy=\"117\" r=\"13\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"450\" y=\"156\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#2E332E\">1.0 kg</text><circle cx=\"50\" cy=\"117\" r=\"20\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/><circle cx=\"50\" cy=\"117\" r=\"3.4\" fill=\"#D2705A\"/><text x=\"50\" y=\"92\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#D2705A\">axis ⊥ to rod</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">light rod</text><line x1=\"50\" y1=\"128\" x2=\"50\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"128\" x2=\"450\" y2=\"210\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"204\" x2=\"450\" y2=\"204\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"450,204 442.82,207.2 442.82,200.8\" fill=\"#767F73\"/><polygon points=\"50,204 57.18,200.8 57.18,207.2\" fill=\"#767F73\"/><text x=\"250\" y=\"198\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2.0 m</text></svg>",
        "alt": "A light rod 2.0 meters long with a 1.0 kilogram mass at each end. The axis of rotation passes through the left end of the rod, perpendicular to it.",
        "minWidth": 320
      }
    ],
    "choices": [
      "1.0 kg·m²",
      "2.0 kg·m²",
      "4.0 kg·m²",
      "8.0 kg·m²"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 4.0 kg·m². Rotational inertia of point masses is I = Σmr², with r the perpendicular distance from the axis. The mass at the pivot end is at r = 0 and contributes nothing; the mass at the far end is at r = 2.0 m. So I = (1.0 kg)(0)² + (1.0 kg)(2.0 m)² = 4.0 kg·m². The light rod adds no inertia.\n\n(A) is wrong because 1.0 kg·m² treats one mass as being 1.0 m from the axis; that is the rod's midpoint, not where either mass sits relative to the end axis.\n(B) is wrong because 2.0 kg·m² is the rotational inertia about the rod's center, where each mass is 1.0 m away: 2 × (1.0)(1.0)² = 2.0 kg·m².\n(D) is wrong because it places both masses 2.0 m from the axis, 2 × (1.0)(2.0)² = 8.0 kg·m², but the mass at the pivot end has r = 0."
  },
  {
    "id": "e2-14",
    "unit": 3,
    "stem": "A 1.0 m long pendulum with a small bob is released from rest when the string makes a 60° angle with the vertical. What is the bob's speed at the lowest point of its swing?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"130 12 303 241\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"140\" y1=\"30\" x2=\"280\" y2=\"30\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"30\" x2=\"147\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"30\" x2=\"157\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"30\" x2=\"167\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"30\" x2=\"177\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"30\" x2=\"187\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"30\" x2=\"197\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"30\" x2=\"207\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"30\" x2=\"217\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"30\" x2=\"227\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"30\" x2=\"237\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"30\" x2=\"247\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"30\" x2=\"257\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"30\" x2=\"267\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"30\" x2=\"277\" y2=\"22\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"30\" x2=\"210\" y2=\"240\" stroke=\"#9AA096\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"30\" x2=\"374.54\" y2=\"125\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><circle cx=\"374.54\" cy=\"125\" r=\"14\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><path d=\"M210 82A52 52 0 0 0 255.03 56\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"240\" y=\"112\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">60°</text><text x=\"316.27\" y=\"73.5\" text-anchor=\"start\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">L = 1.0 m</text><text x=\"374.54\" y=\"159\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">released from rest</text><circle cx=\"210\" cy=\"220\" r=\"4\" fill=\"#2E332E\"/><text x=\"220\" y=\"240\" text-anchor=\"start\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">lowest point</text></svg>",
        "alt": "A pendulum of length 1.0 meter with its bob released from rest when the string makes a 60 degree angle with the vertical. The lowest point of the swing is marked.",
        "minWidth": 260
      }
    ],
    "choices": [
      "1.0 m/s",
      "2.2 m/s",
      "3.2 m/s",
      "4.5 m/s"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 3.2 m/s. Tension is perpendicular to the motion and does no work, so mechanical energy is conserved. The bob's height drop is h = L − L cos 60° = (1.0 m)(1 − 0.50) = 0.50 m. Then mgh = ½mv², so v = √(2gh) = √(2 × 10 m/s² × 0.50 m) = √10 ≈ 3.2 m/s. The mass cancels.\n\n(A) is wrong because 1.0 m/s would correspond to a drop of only v²/(2g) = 0.05 m, far less than the 0.50 m the bob actually falls from 60°.\n(B) is wrong because it leaves out the factor of 2 in v = √(2gh), computing √(gh) = √(10 × 0.50) ≈ 2.2 m/s; from ½mv² = mgh the 2 must stay.\n(D) is wrong because it uses the full 1.0 m string length as the drop height, √(2 × 10 × 1.0) ≈ 4.5 m/s, but released at 60° the bob drops only 0.50 m."
  },
  {
    "id": "e2-15",
    "unit": 5,
    "stem": "A wheel starts from rest and has a constant angular acceleration of 2.0 rad/s². Through what angle does the wheel rotate in 5.0 s?",
    "choices": [
      "25 rad",
      "50 rad",
      "75 rad",
      "100 rad"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 25 rad. The rotational kinematics equations mirror the linear ones. Starting from rest (ω₀ = 0) with constant α, the angular displacement is θ = ω₀t + ½αt² = 0 + ½(2.0 rad/s²)(5.0 s)² = ½(2.0)(25) = 25 rad. The final angular speed is 10 rad/s, and the average 5.0 rad/s times 5.0 s also gives 25 rad.\n\n(B) is wrong because it leaves out the ½, computing αt² = 50 rad, which equals the final angular speed times the time, as if the wheel spun at 10 rad/s throughout.\n(C) is wrong because 75 rad would require an average angular speed of 15 rad/s, greater than even the final speed of 10 rad/s the wheel reaches at 5.0 s.\n(D) is wrong because 100 rad is four times the correct value, the result of using 10 s instead of 5.0 s; the time is not doubled anywhere in the problem."
  },
  {
    "id": "e2-16",
    "unit": 2,
    "stem": "Two horizontal forces of 6.0 N and 8.0 N, perpendicular to each other, act on a 2.0 kg object on a frictionless surface. What is the magnitude of the object's acceleration?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"106 5 287 180\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><rect x=\"116\" y=\"128\" width=\"68\" height=\"44\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"150\" y=\"155\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><line x1=\"184\" y1=\"150\" x2=\"324\" y2=\"150\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"324,150 314.61,154.19 314.61,145.81\" fill=\"#D2705A\"/><text x=\"254\" y=\"172\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">8.0 N</text><line x1=\"150\" y1=\"128\" x2=\"150\" y2=\"23\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"150,23 154.19,32.39 145.81,32.39\" fill=\"#D2705A\"/><text x=\"162\" y=\"73\" text-anchor=\"start\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">6.0 N</text><text x=\"360\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">top view</text></svg>",
        "alt": "Top view of a 2.0 kilogram object on a frictionless surface acted on by an 8.0 newton force to the right and a 6.0 newton force upward, perpendicular to each other.",
        "minWidth": 260
      }
    ],
    "choices": [
      "2.5 m/s²",
      "5.0 m/s²",
      "7.0 m/s²",
      "10 m/s²"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 5.0 m/s². Forces are vectors. Perpendicular forces combine by the Pythagorean theorem: F<sub>net</sub> = √(6.0² + 8.0²) N = √100 N = 10 N. With a frictionless surface this is the only horizontal force, so Newton's second law gives a = F<sub>net</sub>/m = 10 N / 2.0 kg = 5.0 m/s², directed between the two forces.\n\n(A) is wrong because 2.5 m/s² is half the correct value, as if the 10 N resultant were divided by 4.0 kg instead of the 2.0 kg mass of the object.\n(C) is wrong because it adds the magnitudes, (6.0 + 8.0)/2.0 = 7.0 m/s², which is valid only if the forces point the same way, not at right angles.\n(D) is wrong because 10 is the magnitude of the net force in newtons; it must still be divided by the 2.0 kg mass to get the acceleration."
  },
  {
    "id": "e2-17",
    "unit": 8,
    "stem": "In a hydraulic lift, a force of 200 N is applied to a small piston of area 0.010 m². The large piston has an area of 0.50 m². What is the maximum weight the large piston can support?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"45 27 395 224\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><path d=\"M70 70L70 210L430 210L430 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><path d=\"M110 70L110 170L300 170L300 70\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><path d=\"M70 130L110 130L110 170L300 170L300 130L430 130L430 210L70 210Z\" fill=\"#D8E8F2\" stroke=\"none\"/><rect x=\"72\" y=\"122\" width=\"36\" height=\"8\" fill=\"#9AA096\" stroke=\"#2E332E\" stroke-width=\"1.4\"/><rect x=\"302\" y=\"122\" width=\"126\" height=\"8\" fill=\"#9AA096\" stroke=\"#2E332E\" stroke-width=\"1.4\"/><line x1=\"90\" y1=\"60\" x2=\"90\" y2=\"118\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"90,118 85.81,108.61 94.19,108.61\" fill=\"#D2705A\"/><text x=\"90\" y=\"50\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">200 N</text><text x=\"90\" y=\"238\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">A = 0.010 m²</text><text x=\"365\" y=\"238\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">A = 0.50 m²</text><rect x=\"317\" y=\"78\" width=\"96\" height=\"42\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"365\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">weight = ?</text></svg>",
        "alt": "A hydraulic lift with a small piston of area 0.010 square meters pushed down by a 200 newton force, and a large piston of area 0.50 square meters supporting a load.",
        "minWidth": 269
      }
    ],
    "choices": [
      "400 N",
      "2,000 N",
      "5,000 N",
      "10,000 N"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 10,000 N. Pascal's principle: pressure applied to an enclosed fluid is transmitted undiminished throughout it, so F₁/A₁ = F₂/A₂. The pressure is 200 N / 0.010 m² = 2.0 × 10⁴ Pa, and the large piston's force is F₂ = PA₂ = (2.0 × 10⁴ Pa)(0.50 m²) = 1.0 × 10⁴ N. The force is multiplied by the area ratio, 0.50/0.010 = 50.\n\n(A) is wrong because it divides the 200 N force by the large area, 200/0.50 = 400, which is a pressure value (in Pa), not the force on the large piston.\n(B) is wrong because 2,000 N multiplies 200 N by 10 instead of by the area ratio 0.50/0.010 = 50.\n(C) is wrong because 5,000 N multiplies 200 N by 25, half the true area ratio of 50, so it undercounts the mechanical advantage."
  },
  {
    "id": "e2-18",
    "unit": 2,
    "stem": "A 10 kg sign hangs motionless from two light cables. Each cable makes an angle of 30° with the horizontal. What is the tension in each cable?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 10 440 220\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"92\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"30\" x2=\"38\" y2=\"23\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"40\" x2=\"38\" y2=\"33\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"50\" x2=\"38\" y2=\"43\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"60\" x2=\"38\" y2=\"53\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"70\" x2=\"38\" y2=\"63\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"80\" x2=\"38\" y2=\"73\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"90\" x2=\"38\" y2=\"83\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"20\" x2=\"450\" y2=\"92\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"30\" x2=\"442\" y2=\"23\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"40\" x2=\"442\" y2=\"33\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"50\" x2=\"442\" y2=\"43\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"60\" x2=\"442\" y2=\"53\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"70\" x2=\"442\" y2=\"63\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"80\" x2=\"442\" y2=\"73\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"90\" x2=\"442\" y2=\"83\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"42\" x2=\"240\" y2=\"163.24\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"42\" x2=\"240\" y2=\"163.24\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"196\" y=\"163.24\" width=\"88\" height=\"56\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"240\" y=\"196.24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">10 kg</text><line x1=\"30\" y1=\"42\" x2=\"130\" y2=\"42\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><path d=\"M110 42A80 80 0 0 1 99.28 82\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"130\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><line x1=\"450\" y1=\"42\" x2=\"350\" y2=\"42\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><path d=\"M370 42A80 80 0 0 0 380.72 82\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"350\" y=\"64\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text></svg>",
        "alt": "A 10 kilogram sign hanging motionless from the middle of two cables, each attached to a support and making a 30 degree angle with the horizontal.",
        "minWidth": 299
      }
    ],
    "choices": [
      "50 N",
      "100 N",
      "173 N",
      "200 N"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 100 N. The sign is in equilibrium, and by symmetry both cables carry the same tension T. The horizontal components cancel. The vertical components together hold up the weight: 2T sin 30° = mg = (10 kg)(10 m/s²) = 100 N. Since sin 30° = 0.50, 2T(0.50) = 100 N, so T = 100 N. Shallow cables need large tensions.\n\n(A) is wrong because it simply splits the weight between the cables, 100/2 = 50 N, ignoring that only the vertical component T sin 30° of each tension supports the sign.\n(C) is wrong because it divides the weight by tan 30° (100/0.577 ≈ 173 N), mixing up the components; the vertical balance uses sin 30°.\n(D) is wrong because 200 N is the sum of the two tensions, or the tension if a single cable at 30° held the sign alone (mg/sin 30°), not the tension in each."
  },
  {
    "id": "e2-19",
    "unit": 1,
    "stem": "A rock is dropped from rest from the top of an 80 m cliff. Air resistance is negligible. What is the rock's speed just before it hits the ground?",
    "choices": [
      "40 m/s",
      "60 m/s",
      "80 m/s",
      "160 m/s"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 40 m/s. In free fall from rest, the speed after falling a height h follows from v² = v₀² + 2gh, or from energy conservation mgh = ½mv². Here v² = 2(10 m/s²)(80 m) = 1600 m²/s², so v = 40 m/s. The fall takes t = v/g = 4.0 s, and the average speed 20 m/s times 4.0 s gives 80 m as a check.\n\n(B) is wrong because 60 m/s would require v² = 3600 m²/s², a fall of 180 m; an 80 m drop gives only v² = 1600 m²/s².\n(C) is wrong because it confuses the 80 m height with a speed; the units differ, and v = √(2gh), not h.\n(D) is wrong because 160 is just 2h = 2 × 80 treated as a speed; it never uses g or takes the square root, √(2gh) = √1600 = 40 m/s."
  },
  {
    "id": "e2-20",
    "unit": 2,
    "stem": "A crate is pushed across a horizontal floor at a constant velocity by a 50 N horizontal force. Which of the following is true of the friction force that the floor exerts on the crate?",
    "choices": [
      "It has a magnitude of 50 N and points opposite the crate's motion.",
      "It has a magnitude greater than 50 N and points opposite the crate's motion.",
      "It has a magnitude of 50 N and points in the direction of the crate's motion.",
      "It is zero, because the crate is moving at a constant velocity."
    ],
    "correct": 0,
    "explanation": "Correct: (A) It has a magnitude of 50 N and points opposite the crate's motion. Constant velocity means zero acceleration, so by Newton's first and second laws the net horizontal force is zero. The only horizontal forces are the 50 N push and kinetic friction, so friction must have magnitude 50 N and point opposite the push, which is opposite the crate's motion. Friction is present whenever surfaces slide, even at constant velocity.\n\n(B) is wrong because a friction force larger than the 50 N push would produce a net backward force, so the crate would slow down instead of moving at constant velocity.\n(C) is wrong because kinetic friction always opposes the relative sliding motion; pointing with the motion, it would add to the push and the crate would speed up.\n(D) is wrong because constant velocity means zero net force, not zero friction; the 50 N push would accelerate the crate if no friction balanced it."
  },
  {
    "id": "e2-21",
    "unit": 8,
    "stem": "A solid object weighs 12 N in air and has an apparent weight of 8.0 N when it is completely submerged in water (density 1000 kg/m³). What is the density of the object?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"70 2 390 273\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"80\" y1=\"20\" x2=\"180\" y2=\"20\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"20\" x2=\"87\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"20\" x2=\"97\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"20\" x2=\"107\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"20\" x2=\"117\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"20\" x2=\"127\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"20\" x2=\"137\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"20\" x2=\"147\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"20\" x2=\"157\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"20\" x2=\"167\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"20\" x2=\"177\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"36\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"98\" y=\"36\" width=\"64\" height=\"34\" rx=\"5\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"130\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">12 N</text><line x1=\"130\" y1=\"70\" x2=\"130\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"106\" y=\"110\" width=\"48\" height=\"44\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><line x1=\"320\" y1=\"20\" x2=\"420\" y2=\"20\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"20\" x2=\"327\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"20\" x2=\"337\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"20\" x2=\"347\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"20\" x2=\"357\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"20\" x2=\"367\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"20\" x2=\"377\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"20\" x2=\"387\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"20\" x2=\"397\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"20\" x2=\"407\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"20\" x2=\"417\" y2=\"12\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"36\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"338\" y=\"36\" width=\"64\" height=\"34\" rx=\"5\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"370\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"#2E332E\">8.0 N</text><line x1=\"370\" y1=\"70\" x2=\"370\" y2=\"110\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"290\" y=\"130\" width=\"160\" height=\"110\" fill=\"#D8E8F2\" stroke=\"none\"/><path d=\"M290 110L290 240L450 240L450 110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"2\"/><line x1=\"290\" y1=\"130\" x2=\"450\" y2=\"130\" stroke=\"#3F7A94\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><rect x=\"346\" y=\"150\" width=\"48\" height=\"44\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"440\" y=\"232\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">water</text><text x=\"130\" y=\"195\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">in air</text><text x=\"370\" y=\"262\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">completely submerged</text></svg>",
        "alt": "A solid object hanging from a spring scale reading 12 newtons in air, and the same object completely submerged in water with the scale reading 8.0 newtons.",
        "minWidth": 265
      }
    ],
    "choices": [
      "1,500 kg/m³",
      "3,000 kg/m³",
      "4,500 kg/m³",
      "12,000 kg/m³"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 3,000 kg/m³. The scale reading drops because the water pushes up: B = 12 N − 8.0 N = 4.0 N. Archimedes' principle says B = ρ<sub>water</sub>Vg for a fully submerged object, so V = 4.0/(1000 × 10) = 4.0 × 10⁻⁴ m³. The mass is m = W/g = 12/10 = 1.2 kg, so ρ = m/V = 1.2/(4.0 × 10⁻⁴) = 3000 kg/m³. Equivalently ρ/ρ<sub>water</sub> = W/B = 12/4.0 = 3.0.\n\n(A) is wrong because it treats the 8.0 N scale reading as the buoyant force, giving 12/8.0 × 1000 = 1,500 kg/m³; the buoyant force is the loss in reading, 4.0 N.\n(C) is wrong because 4,500 kg/m³ would mean the buoyant force is only 12/4.5 ≈ 2.7 N, but the scale reading actually falls by 4.0 N.\n(D) is wrong because it multiplies the 12 N weight by the water density without dividing by the 4.0 N buoyant force, equivalent to assuming a buoyant force of only 1.0 N."
  },
  {
    "id": "e2-22",
    "unit": 4,
    "stem": "A 1500 kg car moving at 12 m/s rear-ends a stationary 1000 kg car, and the two cars lock together. What is the speed of the cars just after the collision?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 136\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before the collision</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"40\" y=\"78\" width=\"120\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"100\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">1500 kg</text><circle cx=\"66.4\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"133.6\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"100\" y1=\"62\" x2=\"152\" y2=\"62\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"152,62 142.61,66.19 142.61,57.81\" fill=\"#3F7A94\"/><text x=\"126\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">12 m/s</text><rect x=\"300\" y=\"78\" width=\"96\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"348\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">1000 kg</text><circle cx=\"321.12\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"374.88\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><text x=\"348\" y=\"68\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#767F73\">at rest</text></svg>",
        "alt": "A 1500 kilogram car moving right at 12 meters per second toward a stationary 1000 kilogram car.",
        "minWidth": 335
      }
    ],
    "choices": [
      "4.8 m/s",
      "7.2 m/s",
      "9.0 m/s",
      "12 m/s"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 7.2 m/s. In the brief collision, the external forces (friction, gravity balanced by the normal force) are negligible compared with the impact forces, so momentum is conserved. The cars lock together, a perfectly inelastic collision: (1500 kg)(12 m/s) + 0 = (1500 + 1000 kg)v, so v = 18,000 kg·m/s / 2500 kg = 7.2 m/s.\n\n(A) is wrong because it uses the 1000 kg car's mass in the initial momentum, (1000)(12)/2500 = 4.8 m/s, but the moving car is the 1500 kg one.\n(C) is wrong because 9.0 m/s would give a final momentum of (2500)(9.0) = 22,500 kg·m/s, more than the 18,000 kg·m/s available before the collision.\n(D) is wrong because the speed cannot stay 12 m/s: the moving car must share its 18,000 kg·m/s of momentum with the extra 1000 kg it locks onto, so the 2500 kg pair moves more slowly."
  },
  {
    "id": "e2-23",
    "unit": 3,
    "stem": "A spring with force constant 400 N/m is stretched 0.10 m from its relaxed length. How much additional work is required to stretch the spring from 0.10 m to 0.30 m?",
    "choices": [
      "2 J",
      "8 J",
      "16 J",
      "18 J"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 16 J. The work needed equals the increase in elastic potential energy, U = ½kx², with x measured from the relaxed length. At 0.10 m, U = ½(400)(0.10)² = 2.0 J; at 0.30 m, U = ½(400)(0.30)² = 18 J. The additional work is 18 J − 2.0 J = 16 J. The spring force grows with x, so each extra centimeter costs more.\n\n(A) is wrong because 2 J is the energy already stored at 0.10 m, ½(400)(0.10)², not the extra work to stretch from 0.10 m to 0.30 m.\n(B) is wrong because it uses the 0.20 m change in stretch as if measured from the relaxed length, ½(400)(0.20)² = 8 J; the potential energy depends on x², so ½k(x₂² − x₁²) is required.\n(D) is wrong because 18 J is the total energy stored at 0.30 m, which includes the 2 J already stored before the additional stretching began."
  },
  {
    "id": "e2-24",
    "unit": 7,
    "stem": "A 0.20 kg block attached to an ideal spring with force constant 80 N/m oscillates horizontally on a frictionless surface. What is the period of the oscillation?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"22 35 450 118\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"40\" y1=\"135\" x2=\"462\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"135\" x2=\"43\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"135\" x2=\"53\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"135\" x2=\"63\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"135\" x2=\"73\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"135\" x2=\"83\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"135\" x2=\"93\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"135\" x2=\"103\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"135\" x2=\"113\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"135\" x2=\"123\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"135\" x2=\"133\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"135\" x2=\"143\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"135\" x2=\"153\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"135\" x2=\"163\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"135\" x2=\"173\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"135\" x2=\"183\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"135\" x2=\"193\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"135\" x2=\"203\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"135\" x2=\"213\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"135\" x2=\"223\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"135\" x2=\"233\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"135\" x2=\"243\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"135\" x2=\"253\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"135\" x2=\"263\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"135\" x2=\"273\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"135\" x2=\"283\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"135\" x2=\"293\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"135\" x2=\"303\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"135\" x2=\"313\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"135\" x2=\"323\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"135\" x2=\"333\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"135\" x2=\"343\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"135\" x2=\"353\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"135\" x2=\"363\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"135\" x2=\"373\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"135\" x2=\"383\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"135\" x2=\"393\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"135\" x2=\"403\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"135\" x2=\"413\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"135\" x2=\"423\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"135\" x2=\"433\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"135\" x2=\"443\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"135\" x2=\"453\" y2=\"143\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"135\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"55\" x2=\"32\" y2=\"48\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"65\" x2=\"32\" y2=\"58\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"75\" x2=\"32\" y2=\"68\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"85\" x2=\"32\" y2=\"78\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"95\" x2=\"32\" y2=\"88\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"105\" x2=\"32\" y2=\"98\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"115\" x2=\"32\" y2=\"108\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"125\" x2=\"32\" y2=\"118\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"135\" x2=\"32\" y2=\"128\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><path d=\"M40 110L52.78 110L59.17 100L71.94 120L84.72 100L97.5 120L110.28 100L123.06 120L135.83 100L148.61 120L161.39 100L174.17 120L186.94 100L199.72 120L212.5 100L225.28 120L238.06 100L250.83 120L257.22 110L270 110\" fill=\"none\" stroke=\"#2E332E\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"270\" y=\"85\" width=\"74\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"307\" y=\"115\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">0.20 kg</text><text x=\"155\" y=\"88\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">k = 80 N/m</text></svg>",
        "alt": "A 0.20 kilogram block attached to a horizontal spring with force constant 80 newtons per meter, on a frictionless surface.",
        "minWidth": 306
      }
    ],
    "choices": [
      "0.05 s",
      "0.16 s",
      "0.31 s",
      "0.63 s"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 0.31 s. For a mass on an ideal spring the period is T = 2π√(m/k), independent of amplitude. Here m/k = 0.20 kg / 80 N/m = 0.0025 s², so √(m/k) = 0.050 s and T = 2π(0.050 s) ≈ 0.31 s. A frictionless surface keeps the motion simple harmonic.\n\n(A) is wrong because 0.05 s is √(m/k) alone; it forgets the 2π factor that converts from 1/ω to the full period.\n(B) is wrong because it uses π instead of 2π, giving π(0.050) ≈ 0.16 s, which is only half a period.\n(D) is wrong because 0.63 s is 4π√(m/k), double the correct period; one full cycle takes 2π√(m/k)."
  },
  {
    "id": "e2-25",
    "unit": 8,
    "stem": "Water flows at 3.0 m/s through a pipe with a cross-sectional area of 0.020 m². What is the volume flow rate of the water?",
    "choices": [
      "0.0067 m³/s",
      "0.015 m³/s",
      "0.050 m³/s",
      "0.060 m³/s"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 0.060 m³/s. The volume flow rate is the volume passing a point per second, Q = Av: each second the water advances 3.0 m, sweeping out a cylinder of cross-sectional area 0.020 m². So Q = (0.020 m²)(3.0 m/s) = 0.060 m³/s. The units check: m² × m/s = m³/s.\n\n(A) is wrong because it divides the area by the speed, 0.020/3.0 ≈ 0.0067, which gives units of m²·s/m, not m³/s.\n(B) is wrong because 0.015 m³/s is a quarter of the true value; it would require a speed of only 0.75 m/s through the 0.020 m² pipe.\n(C) is wrong because 0.050 m³/s would require a speed of 2.5 m/s, not 3.0 m/s, for this pipe; Q = Av gives 0.060 m³/s."
  },
  {
    "id": "e2-26",
    "unit": 2,
    "stem": "A moon orbits a planet that is much more massive than the moon. Which statement correctly compares the gravitational forces between the two bodies?",
    "choices": [
      "The planet exerts a larger force on the moon than the moon exerts on the planet.",
      "The two forces have equal magnitudes.",
      "The moon exerts a larger force on the planet, because the moon accelerates more.",
      "Only the planet exerts a gravitational force, because it has the greater mass."
    ],
    "correct": 1,
    "explanation": "Correct: (B) The two forces have equal magnitudes. Newton's third law: the planet pulls on the moon and the moon pulls on the planet with forces that are equal in magnitude and opposite in direction. Both equal Gm<sub>planet</sub>m<sub>moon</sub>/r², which is symmetric in the two masses. The moon's acceleration is much larger only because a = F/m and its mass is much smaller.\n\n(A) is wrong because the larger mass does not exert a larger force; the gravitational force between two bodies is a single interaction, equal in magnitude on each.\n(C) is wrong because a larger acceleration comes from the moon's smaller mass (a = F/m), not from a larger force; the two forces are equal.\n(D) is wrong because every mass attracts every other mass; the moon pulls on the planet, which is why the planet wobbles and the moon raises tides."
  },
  {
    "id": "e2-27",
    "unit": 4,
    "stem": "A 2.0 kg cart moving at 4.0 m/s collides head-on with a 1.0 kg cart moving at 2.0 m/s in the opposite direction. The carts stick together. How much kinetic energy is lost in the collision?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 2 492 136\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><text x=\"10\" y=\"24\" text-anchor=\"start\" font-size=\"13\" font-weight=\"800\" fill=\"#2E332E\">Before the collision</text><line x1=\"18\" y1=\"128\" x2=\"482\" y2=\"128\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"40\" y=\"78\" width=\"90\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"85\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 kg</text><circle cx=\"59.8\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"110.2\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"85\" y1=\"62\" x2=\"137\" y2=\"62\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"137,62 127.61,66.19 127.61,57.81\" fill=\"#3F7A94\"/><text x=\"111\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">4.0 m/s</text><rect x=\"330\" y=\"78\" width=\"70\" height=\"38\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"365\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">1.0 kg</text><circle cx=\"345.4\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><circle cx=\"384.6\" cy=\"122\" r=\"6\" fill=\"#fff\" stroke=\"#2E332E\" stroke-width=\"1.6\"/><line x1=\"365\" y1=\"62\" x2=\"313\" y2=\"62\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"313,62 322.39,57.81 322.39,66.19\" fill=\"#3F7A94\"/><text x=\"339\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">2.0 m/s</text></svg>",
        "alt": "A 2.0 kilogram cart moving right at 4.0 meters per second toward a 1.0 kilogram cart moving left at 2.0 meters per second.",
        "minWidth": 335
      }
    ],
    "choices": [
      "6 J",
      "12 J",
      "18 J",
      "24 J"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 12 J. Take the 2.0 kg cart's direction as positive. Total momentum: (2.0)(4.0) + (1.0)(−2.0) = 6.0 kg·m/s, so the stuck carts move at 6.0/3.0 = 2.0 m/s. Initial kinetic energy: ½(2.0)(4.0)² + ½(1.0)(2.0)² = 16 + 2.0 = 18 J. Final: ½(3.0)(2.0)² = 6.0 J. Kinetic energy lost: 18 − 6.0 = 12 J, converted to thermal energy and deformation.\n\n(A) is wrong because 6 J is the kinetic energy remaining after the collision, ½(3.0)(2.0)², not the amount lost.\n(C) is wrong because 18 J is the total initial kinetic energy; the carts still move at 2.0 m/s afterward, so not all of it is lost.\n(D) is wrong because it adds the final kinetic energy to the initial one, 18 + 6 = 24 J, instead of subtracting it; no collision can lose more than the 18 J it started with."
  },
  {
    "id": "e2-28",
    "unit": 3,
    "stem": "A 70 kg climber ascends vertically 30 m in 60 s at a constant speed. What average power must the climber supply to work against gravity?",
    "choices": [
      "35 W",
      "210 W",
      "350 W",
      "700 W"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 350 W. At constant speed, the climber's kinetic energy does not change, so the work against gravity equals the gain in potential energy: W = mgh = (70 kg)(10 m/s²)(30 m) = 21,000 J. Average power is P = W/t = 21,000 J / 60 s = 350 W. Equivalently P = Fv = (700 N)(0.50 m/s) = 350 W.\n\n(A) is wrong because it leaves out g, computing (70)(30)/60 = 35; the force against gravity is the weight, 700 N, not the 70 kg mass.\n(B) is wrong because 210 W corresponds to doing the 21,000 J of work over 100 s instead of the 60 s the climb actually takes.\n(D) is wrong because 700 is the climber's weight in newtons, not a power; the weight must be multiplied by the 0.50 m/s climbing speed."
  },
  {
    "id": "e2-29",
    "unit": 6,
    "stem": "An isolated star collapses to a much smaller radius with no external torque acting on it. Which statement correctly describes the star's rotation after the collapse?",
    "choices": [
      "Its angular speed is unchanged and its angular momentum increases.",
      "Its angular speed increases and its angular momentum is unchanged.",
      "Its angular speed decreases and its angular momentum is unchanged.",
      "Its angular speed increases and its angular momentum increases."
    ],
    "correct": 1,
    "explanation": "Correct: (B) Its angular speed increases and its angular momentum is unchanged. With no external torque, the star's angular momentum L = Iω is conserved. Collapsing to a smaller radius moves its mass closer to the axis, so I (proportional to MR²) decreases sharply. To keep L constant, ω must increase, which is why collapsed stars such as pulsars spin very rapidly.\n\n(A) is wrong because angular momentum cannot increase without an external torque, and with I decreasing the angular speed cannot stay unchanged if L is conserved.\n(C) is wrong because a smaller rotational inertia requires a larger angular speed to keep Iω constant, so ω increases rather than decreases.\n(D) is wrong because the angular speed does increase, but the angular momentum stays constant because no external torque acts on the isolated star."
  },
  {
    "id": "e2-30",
    "unit": 1,
    "stem": "A ball is thrown horizontally at 10 m/s from the top of a 20 m tall building. Air resistance is negligible. How far from the base of the building does the ball land?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 26 460 237\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><polygon points=\"30,56 120,56 120,210 30,210\" fill=\"#EFEBDD\" stroke=\"#2E332E\" stroke-width=\"2\"/><line x1=\"20\" y1=\"210\" x2=\"460\" y2=\"210\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"210\" x2=\"23\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"210\" x2=\"33\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"210\" x2=\"43\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"210\" x2=\"53\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"210\" x2=\"63\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"210\" x2=\"73\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"210\" x2=\"83\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"210\" x2=\"93\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"210\" x2=\"103\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"210\" x2=\"113\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"210\" x2=\"123\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"210\" x2=\"133\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"210\" x2=\"143\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"210\" x2=\"153\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"210\" x2=\"163\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"210\" x2=\"173\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"210\" x2=\"183\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"210\" x2=\"193\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"210\" x2=\"203\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"210\" x2=\"213\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"210\" x2=\"223\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"210\" x2=\"233\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"210\" x2=\"243\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"210\" x2=\"253\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"210\" x2=\"263\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"210\" x2=\"273\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"210\" x2=\"283\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"210\" x2=\"293\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"210\" x2=\"303\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"320\" y1=\"210\" x2=\"313\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"210\" x2=\"323\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"210\" x2=\"333\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"210\" x2=\"343\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"360\" y1=\"210\" x2=\"353\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"210\" x2=\"363\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"210\" x2=\"373\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"210\" x2=\"383\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"210\" x2=\"393\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"210\" x2=\"403\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"210\" x2=\"413\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"210\" x2=\"423\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"210\" x2=\"433\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"210\" x2=\"443\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"460\" y1=\"210\" x2=\"453\" y2=\"218\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"56\" r=\"6\" fill=\"#3F7A94\"/><line x1=\"128\" y1=\"56\" x2=\"190\" y2=\"56\" stroke=\"#3F7A94\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"190,56 180.61,60.19 180.61,51.81\" fill=\"#3F7A94\"/><text x=\"166\" y=\"48\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">10 m/s</text><path d=\"M120 56L127 56.1L134 56.39L141 56.87L148 57.54L155 58.41L162 59.47L169 60.72L176 62.16L183 63.8L190 65.63L197 67.65L204 69.86L211 72.27L218 74.86L225 77.66L232 80.64L239 83.82L246 87.19L253 90.75L260 94.5L267 98.45L274 102.59L281 106.92L288 111.44L295 116.16L302 121.07L309 126.17L316 131.46L323 136.95L330 142.63L337 148.5L344 154.56L351 160.82L358 167.27L365 173.91L372 180.74L379 187.77L386 194.99L393 202.4L400 210\" fill=\"none\" stroke=\"#9AA096\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"56\" x2=\"100\" y2=\"210\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"100,210 96.8,202.82 103.2,202.82\" fill=\"#767F73\"/><polygon points=\"100,56 103.2,63.18 96.8,63.18\" fill=\"#767F73\"/><text x=\"92\" y=\"137\" text-anchor=\"end\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">20 m</text><line x1=\"120\" y1=\"232\" x2=\"400\" y2=\"232\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"400,232 392.82,235.2 392.82,228.8\" fill=\"#767F73\"/><polygon points=\"120,232 127.18,228.8 127.18,235.2\" fill=\"#767F73\"/><text x=\"260\" y=\"250\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">d = ?</text><line x1=\"120\" y1=\"222\" x2=\"120\" y2=\"238\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"400\" y1=\"222\" x2=\"400\" y2=\"238\" stroke=\"#9AA096\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>",
        "alt": "A ball thrown horizontally at 10 meters per second from the top of a 20 meter tall building, with the horizontal distance d from the base of the building to the landing point unknown.",
        "minWidth": 313
      }
    ],
    "choices": [
      "10 m",
      "20 m",
      "30 m",
      "40 m"
    ],
    "correct": 1,
    "explanation": "Correct: (B) 20 m. Horizontal and vertical motions are independent. Vertically the ball starts with zero velocity: h = ½gt², so 20 m = ½(10 m/s²)t², t² = 4.0 s², t = 2.0 s. Horizontally there is no acceleration, so the ball covers x = v₀t = (10 m/s)(2.0 s) = 20 m before landing.\n\n(A) is wrong because 10 m corresponds to a fall time of only 1.0 s, which ignores that a 20 m drop from rest takes 2.0 s.\n(C) is wrong because 30 m would require a 3.0 s fall, which corresponds to a 45 m drop rather than the building's 20 m height.\n(D) is wrong because it uses a 4.0 s fall time, from dividing the height by half of g (20/5 = 4) without taking the square root; t = √(2h/g) = 2.0 s."
  },
  {
    "id": "e2-31",
    "unit": 7,
    "stem": "A 2.0 kg block oscillates on a horizontal spring with force constant 200 N/m and an amplitude of 0.10 m. What is the block's maximum speed?",
    "choices": [
      "0.10 m/s",
      "0.50 m/s",
      "1.0 m/s",
      "10 m/s"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 1.0 m/s. The block's maximum speed occurs at equilibrium, where all the energy is kinetic. Energy conservation gives ½kA² = ½mv<sub>max</sub>², so v<sub>max</sub> = A√(k/m) = (0.10 m)√(200/2.0) = (0.10 m)(10 rad/s) = 1.0 m/s. Equivalently, the angular frequency is ω = 10 rad/s and v<sub>max</sub> = Aω.\n\n(A) is wrong because 0.10 is the amplitude in meters, a position, not a speed; it must be multiplied by ω = 10 rad/s.\n(B) is wrong because 0.50 m/s is half the correct maximum speed, as if the spring energy ½kA² were split evenly between kinetic and potential energy at the fastest point.\n(D) is wrong because 10 is the angular frequency √(k/m) in rad/s, not a speed; it must be multiplied by the 0.10 m amplitude."
  },
  {
    "id": "e2-32",
    "unit": 3,
    "stem": "A 20 N force directed 30° above the horizontal pulls a box 5.0 m along a horizontal floor. How much work does this force do on the box?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"8 26 464 171\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"18\" y1=\"140\" x2=\"462\" y2=\"140\" stroke=\"#2E332E\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"140\" x2=\"21\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"140\" x2=\"31\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"140\" x2=\"41\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"58\" y1=\"140\" x2=\"51\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"140\" x2=\"61\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"140\" x2=\"71\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"88\" y1=\"140\" x2=\"81\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"140\" x2=\"91\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"140\" x2=\"101\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"118\" y1=\"140\" x2=\"111\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"140\" x2=\"121\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"140\" x2=\"131\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"148\" y1=\"140\" x2=\"141\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"140\" x2=\"151\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"168\" y1=\"140\" x2=\"161\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"140\" x2=\"171\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"140\" x2=\"181\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"198\" y1=\"140\" x2=\"191\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"140\" x2=\"201\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"140\" x2=\"211\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"140\" x2=\"221\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"140\" x2=\"231\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"140\" x2=\"241\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"140\" x2=\"251\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"140\" x2=\"261\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"140\" x2=\"271\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"288\" y1=\"140\" x2=\"281\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"298\" y1=\"140\" x2=\"291\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"140\" x2=\"301\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"318\" y1=\"140\" x2=\"311\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"140\" x2=\"321\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"338\" y1=\"140\" x2=\"331\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"348\" y1=\"140\" x2=\"341\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"358\" y1=\"140\" x2=\"351\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"368\" y1=\"140\" x2=\"361\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"378\" y1=\"140\" x2=\"371\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"388\" y1=\"140\" x2=\"381\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"398\" y1=\"140\" x2=\"391\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"408\" y1=\"140\" x2=\"401\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"418\" y1=\"140\" x2=\"411\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"140\" x2=\"421\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"438\" y1=\"140\" x2=\"431\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"448\" y1=\"140\" x2=\"441\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><line x1=\"458\" y1=\"140\" x2=\"451\" y2=\"148\" stroke=\"#9AA096\" stroke-width=\"1.1\" stroke-linecap=\"round\"/><rect x=\"80\" y=\"90\" width=\"90\" height=\"50\" fill=\"#E3EDF2\" stroke=\"#2E332E\" stroke-width=\"1.8\"/><text x=\"125\" y=\"120\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2E332E\">box</text><line x1=\"170\" y1=\"115\" x2=\"310\" y2=\"115\" stroke=\"#9AA096\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"115\" x2=\"273.92\" y2=\"55\" stroke=\"#D2705A\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><polygon points=\"273.92,55 267.89,63.32 263.7,56.06\" fill=\"#D2705A\"/><text x=\"281.92\" y=\"49\" text-anchor=\"start\" font-size=\"14\" font-weight=\"700\" fill=\"#2E332E\">20 N</text><path d=\"M226 115A56 56 0 0 0 218.5 87\" fill=\"none\" stroke=\"#767F73\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"240\" y=\"109\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">30°</text><line x1=\"125\" y1=\"148\" x2=\"125\" y2=\"170\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"285\" y1=\"148\" x2=\"285\" y2=\"170\" stroke=\"#767F73\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"125\" y1=\"164\" x2=\"285\" y2=\"164\" stroke=\"#767F73\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"285,164 277.82,167.2 277.82,160.8\" fill=\"#767F73\"/><polygon points=\"125,164 132.18,160.8 132.18,167.2\" fill=\"#767F73\"/><text x=\"205\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">5.0 m</text></svg>",
        "alt": "A box pulled along a horizontal floor by a 20 newton force directed 30 degrees above the horizontal, moving 5.0 meters.",
        "minWidth": 316
      }
    ],
    "choices": [
      "50 J",
      "75 J",
      "87 J",
      "100 J"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 87 J. Only the component of a force parallel to the displacement does work: W = Fd cos θ. The horizontal component of the pull is (20 N)cos 30° ≈ 17.3 N, and the box moves 5.0 m horizontally, so W = (20 N)(5.0 m)(0.866) ≈ 87 J. The vertical component (20 sin 30° = 10 N) is perpendicular to the motion and does no work.\n\n(A) is wrong because it uses sin 30° instead of cos 30°, (20)(5.0)(0.50) = 50 J, which is the work the perpendicular component would do if it were along the motion.\n(B) is wrong because 75 J would require a horizontal force component of 15 N, but (20 N)cos 30° ≈ 17 N; no correct trigonometric factor gives 0.75 here.\n(D) is wrong because it ignores the angle, (20)(5.0) = 100 J, as if the whole force pointed along the displacement."
  },
  {
    "id": "e2-33",
    "unit": 3,
    "stem": "A block slides down a rough incline at a constant speed. Which of the following correctly describes the energy of the block–incline–Earth system?",
    "choices": [
      "The gravitational potential energy decreases and is converted entirely into kinetic energy.",
      "The kinetic energy decreases, because friction does negative work on the block.",
      "The gravitational potential energy stays constant, because the speed is constant.",
      "The gravitational potential energy decreases and the thermal energy increases by the same amount."
    ],
    "correct": 3,
    "explanation": "Correct: (D) The gravitational potential energy decreases and the thermal energy increases by the same amount. In the block–incline–Earth system, constant speed means the kinetic energy is unchanged. The block moves to lower height, so gravitational potential energy decreases. Friction is internal to this system and converts mechanical energy to thermal energy in the block and incline surface. By conservation of energy, ΔU<sub>g</sub> + ΔE<sub>thermal</sub> = 0: thermal energy increases by exactly the potential energy lost.\n\n(A) is wrong because if potential energy became kinetic energy, the block would speed up; its constant speed shows the energy goes to thermal energy instead.\n(B) is wrong because the kinetic energy does not decrease, because the speed is constant; friction's negative work is balanced by gravity's positive work.\n(C) is wrong because gravitational potential energy depends on height, not speed; the block is losing height, so its potential energy decreases."
  },
  {
    "id": "e2-34",
    "unit": 8,
    "stem": "Air moves faster over the top surface of an airplane wing than over the bottom surface. Which of the following best explains the resulting upward force on the wing?",
    "choices": [
      "The pressure above the wing is higher than the pressure below it, so the net pressure force is upward.",
      "The pressure is the same above and below the wing, so the upward force comes only from the wing's tilt.",
      "The faster air above the wing pushes harder on it than the slower air below, so the net force is upward.",
      "The pressure above the wing is lower than the pressure below it, so the net pressure force is upward."
    ],
    "correct": 3,
    "explanation": "Correct: (D) The pressure above the wing is lower than the pressure below it, so the net pressure force is upward. Bernoulli's principle says that along a streamline, where the fluid speed is greater, the pressure is lower (P + ½ρv² + ρgy is constant). The faster air above the wing therefore has lower pressure than the slower air below. Pressure acts perpendicular to each surface, so the higher pressure under the wing pushes up more than the lower pressure above pushes down, giving net lift.\n\n(A) is wrong because it reverses Bernoulli's result; faster-moving air has lower pressure, so the pressure above the wing is lower, not higher.\n(B) is wrong because the different air speeds above and below produce a pressure difference; the pressures are not equal, and that difference is a main source of lift.\n(C) is wrong because faster-moving air does not push harder on a surface; by Bernoulli's principle it exerts lower pressure on the top of the wing."
  },
  {
    "id": "e2-35",
    "unit": 8,
    "stem": "What is the gauge pressure at the bottom of an open tank of oil (density 800 kg/m³) that is 3.0 m deep?",
    "choices": [
      "2,400 Pa",
      "8,000 Pa",
      "24,000 Pa",
      "240,000 Pa"
    ],
    "correct": 2,
    "explanation": "Correct: (C) 24,000 Pa. Gauge pressure is the pressure above atmospheric, which for a fluid at rest is due only to the weight of the fluid above: P<sub>gauge</sub> = ρgh = (800 kg/m³)(10 m/s²)(3.0 m) = 24,000 Pa. The absolute pressure would add about 101,000 Pa of atmospheric pressure, but the question asks for gauge pressure.\n\n(A) is wrong because it leaves out g, multiplying only ρh = (800)(3.0) = 2,400, which has units of kg/m², not pascals.\n(B) is wrong because it leaves out the depth, multiplying only ρg = (800)(10) = 8,000, which is the pressure gradient per meter, not the pressure at 3.0 m.\n(D) is wrong because 240,000 Pa is ten times too large, as if the depth were 30 m or g were applied twice; ρgh with 3.0 m gives 24,000 Pa."
  },
  {
    "id": "e2-36",
    "unit": 7,
    "stem": "A simple pendulum is taken from Earth to the Moon, where the gravitational acceleration is smaller. The pendulum's length does not change. How does the period of the pendulum change?",
    "choices": [
      "The period is shorter, because the bob's weight is smaller.",
      "The period is longer, because the gravitational acceleration is smaller.",
      "The period is unchanged, because the period does not depend on the bob's mass.",
      "The period is unchanged, because the length of the pendulum is the same."
    ],
    "correct": 1,
    "explanation": "Correct: (B) The period is longer, because the gravitational acceleration is smaller. The period of a simple pendulum (small angles) is T = 2π√(L/g). It depends on length and gravitational field strength, not on the bob's mass. With L unchanged and g smaller on the Moon (about 1/6 of Earth's), L/g is larger, so the period is longer, by a factor of about √6 ≈ 2.4. The weaker restoring force swings the bob back more slowly.\n\n(A) is wrong because a smaller weight means a smaller restoring force, which slows the swing; the period becomes longer, not shorter.\n(C) is wrong because the period indeed does not depend on mass, but it does depend on g, so a smaller g on the Moon changes the period.\n(D) is wrong because the length is only one factor in T = 2π√(L/g); a change in g changes the period even when L stays the same."
  },
  {
    "id": "e2-37",
    "unit": 5,
    "stem": "Which of the following must be true for an extended object that is in static equilibrium?",
    "choices": [
      "The net force on the object and the net torque about any point are both zero.",
      "The net force on the object is zero, but the net torque can be nonzero.",
      "The net torque about the center of mass is zero, but the net force can be nonzero.",
      "The object's weight must be balanced by a single upward force at its center of mass."
    ],
    "correct": 0,
    "explanation": "Correct: (A) The net force on the object and the net torque about any point are both zero. Static equilibrium means the object has no translational and no angular acceleration. Newton's second law requires ΣF = 0, and the rotational form requires Στ = 0. When the net force is zero, if the net torque is zero about one point, it is zero about every point, so you may choose any convenient pivot when solving.\n\n(B) is wrong because a nonzero net torque would give the object an angular acceleration, so it would start rotating and would not remain in static equilibrium.\n(C) is wrong because a nonzero net force would give the center of mass a linear acceleration, so the object would not remain at rest.\n(D) is wrong because equilibrium needs only zero net force and zero net torque; a plank resting on two supports is balanced by forces at two separate points."
  },
  {
    "id": "e2-38",
    "unit": 4,
    "stem": "A net force acts on a 0.50 kg cart that is initially at rest. The force increases linearly from 0 to 20 N over 0.10 s and is then removed. What is the cart's final speed?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 524 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"230\" x2=\"496\" y2=\"230\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"234\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"188\" x2=\"496\" y2=\"188\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"192\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"150\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"104\" x2=\"496\" y2=\"104\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"108\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">16</text><line x1=\"64\" y1=\"62\" x2=\"496\" y2=\"62\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"66\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">20</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">24</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"136\" y1=\"272\" x2=\"136\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"136\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.02</text><line x1=\"208\" y1=\"272\" x2=\"208\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"208\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.04</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.06</text><line x1=\"352\" y1=\"272\" x2=\"352\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"352\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.08</text><line x1=\"424\" y1=\"272\" x2=\"424\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"424\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.1</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0.12</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">Force (N)</text><path d=\"M64 272L424 62L424 272\" fill=\"none\" stroke=\"#D2705A\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A force versus time graph: the force rises linearly from 0 to 20 newtons over 0.10 seconds and then drops to zero.",
        "minWidth": 356
      }
    ],
    "choices": [
      "2.0 m/s",
      "4.0 m/s",
      "10 m/s",
      "20 m/s"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 2.0 m/s. Impulse equals the area under the force–time graph. The graph is a triangle rising from 0 to 20 N over 0.10 s and then dropping to zero, so J = ½(20 N)(0.10 s) = 1.0 N·s. The impulse–momentum theorem gives J = Δp = mv − 0, so v = 1.0 N·s / 0.50 kg = 2.0 m/s.\n\n(B) is wrong because it treats the area as a rectangle, (20 N)(0.10 s) = 2.0 N·s, as if the force were 20 N the whole time, giving 4.0 m/s.\n(C) is wrong because 10 m/s corresponds to an impulse of 5.0 N·s, five times the triangle's area; it multiplies the 20 N peak by the 0.50 kg mass instead of using the impulse.\n(D) is wrong because 20 is the peak force in newtons read off the graph, not a speed; the impulse (area) must be divided by the mass."
  },
  {
    "id": "e2-39",
    "unit": 1,
    "stem": "The position of an object moving along a straight line is plotted against time. The graph curves upward (it is concave up) and has a positive slope at every point. Which of the following describes the object's motion?",
    "figures": [
      {
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-6 3 516 330\" font-family=\"Nunito, Arial, sans-serif\" font-size=\"13\" fill=\"#2E332E\"><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"276\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"64\" y1=\"236\" x2=\"496\" y2=\"236\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"240\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"64\" y1=\"200\" x2=\"496\" y2=\"200\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"204\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"164\" x2=\"496\" y2=\"164\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"168\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">6</text><line x1=\"64\" y1=\"128\" x2=\"496\" y2=\"128\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"132\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">8</text><line x1=\"64\" y1=\"92\" x2=\"496\" y2=\"92\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"96\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">10</text><line x1=\"64\" y1=\"56\" x2=\"496\" y2=\"56\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"60\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">12</text><line x1=\"64\" y1=\"20\" x2=\"496\" y2=\"20\" stroke=\"#E6E4DC\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"56\" y=\"24\" text-anchor=\"end\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">14</text><line x1=\"64\" y1=\"272\" x2=\"64\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"64\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">0</text><line x1=\"172\" y1=\"272\" x2=\"172\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"172\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">1</text><line x1=\"280\" y1=\"272\" x2=\"280\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"280\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">2</text><line x1=\"388\" y1=\"272\" x2=\"388\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"388\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">3</text><line x1=\"496\" y1=\"272\" x2=\"496\" y2=\"277\" stroke=\"#2E332E\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"496\" y=\"291\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"400\" fill=\"#2E332E\">4</text><line x1=\"64\" y1=\"272\" x2=\"496\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"272\" stroke=\"#2E332E\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"280\" y=\"320\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\">t (s)</text><text x=\"16\" y=\"146\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"400\" fill=\"#2E332E\" transform=\"rotate(-90 16 146)\">x (m)</text><path d=\"M64 254L74.8 252.11L85.6 250.04L96.4 247.79L107.2 245.36L118 242.75L128.8 239.96L139.6 236.99L150.4 233.84L161.2 230.51L172 227L182.8 223.31L193.6 219.44L204.4 215.39L215.2 211.16L226 206.75L236.8 202.16L247.6 197.39L258.4 192.44L269.2 187.31L280 182L290.8 176.51L301.6 170.84L312.4 164.99L323.2 158.96L334 152.75L344.8 146.36L355.6 139.79L366.4 133.04L377.2 126.11L388 119L398.8 111.71L409.6 104.24L420.4 96.59L431.2 88.76L442 80.75L452.8 72.56L463.6 64.19L474.4 55.64L485.2 46.91L496 38\" fill=\"none\" stroke=\"#3F7A94\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
        "alt": "A position versus time graph that curves upward, with a positive slope that gets steeper as time increases.",
        "minWidth": 351
      }
    ],
    "choices": [
      "It is moving in the positive direction with constant speed.",
      "It is moving in the positive direction with decreasing speed.",
      "It is moving in the negative direction with increasing speed.",
      "It is moving in the positive direction with increasing speed."
    ],
    "correct": 3,
    "explanation": "Correct: (D) It is moving in the positive direction with increasing speed. The slope of a position–time graph is the velocity. A positive slope at every point means the velocity is always positive, so the object moves in the positive direction. The graph is concave up: the slope grows steeper with time, so the velocity is increasing, meaning a positive acceleration and an increasing speed.\n\n(A) is wrong because constant speed in one direction would make the position–time graph a straight line with constant slope, not a curve that gets steeper.\n(B) is wrong because decreasing speed would make the slope flatten out over time (concave down), but this graph's slope gets steeper.\n(C) is wrong because motion in the negative direction requires a negative slope, with position decreasing; here the position increases throughout."
  },
  {
    "id": "e2-40",
    "unit": 5,
    "stem": "A constant 12 N force is applied tangentially to the rim of a disk of radius 0.20 m. The disk's rotational inertia is 0.060 kg·m². What is the disk's angular acceleration?",
    "choices": [
      "4.0 rad/s²",
      "12 rad/s²",
      "20 rad/s²",
      "40 rad/s²"
    ],
    "correct": 3,
    "explanation": "Correct: (D) 40 rad/s². A tangential force acts perpendicular to the radius, so its lever arm is the full radius: τ = rF = (0.20 m)(12 N) = 2.4 N·m. Newton's second law for rotation, τ = Iα, then gives α = τ/I = 2.4 N·m / 0.060 kg·m² = 40 rad/s².\n\n(A) is wrong because 4.0 rad/s² is ten times too small, as if the torque were 0.24 N·m or the inertia 0.60 kg·m²; a decimal slip in τ = rF = 2.4 N·m.\n(B) is wrong because 12 is the applied force in newtons; it must be multiplied by the 0.20 m radius and divided by the rotational inertia.\n(C) is wrong because 20 rad/s² uses half the torque, 1.2 N·m, as if the force acted at half the radius; a rim force uses the full 0.20 m lever arm."
  },
  {
    "id": "e2-41",
    "unit": 1,
    "stem": "A student drops a small ball from several different heights h and measures the fall time t for each. The student wants to plot a graph whose slope can be used to find the acceleration due to gravity g. Which graph would be linear with a slope related to g?",
    "choices": [
      "h on the vertical axis versus t² on the horizontal axis",
      "h on the vertical axis versus t on the horizontal axis",
      "t on the vertical axis versus h on the horizontal axis",
      "t² on the vertical axis versus h² on the horizontal axis"
    ],
    "correct": 0,
    "explanation": "Correct: (A) h on the vertical axis versus t² on the horizontal axis. For a ball dropped from rest, h = ½gt². This is a linear relationship between h and t², so plotting h on the vertical axis against t² on the horizontal axis gives a straight line through the origin with slope g/2. The student then finds g = 2 × slope. Linearizing data this way is the standard method for extracting a constant from a curved relationship.\n\n(B) is wrong because h is proportional to t², not t, so a graph of h versus t is a parabola, not a straight line with a constant slope.\n(C) is wrong because t is proportional to √h, so a graph of t versus h curves and flattens out, giving no constant slope.\n(D) is wrong because t² is proportional to h, not h², so a graph of t² versus h² is curved; t² versus h would be the linear choice."
  },
  {
    "id": "e2-42",
    "unit": 3,
    "stem": "A 1000 kg car speeds up from 10 m/s to 20 m/s. How much net work is done on the car?",
    "choices": [
      "150 kJ",
      "200 kJ",
      "300 kJ",
      "600 kJ"
    ],
    "correct": 0,
    "explanation": "Correct: (A) 150 kJ. The work–energy theorem says net work equals the change in kinetic energy: W = ½m(v<sub>f</sub>² − v<sub>i</sub>²) = ½(1000 kg)[(20 m/s)² − (10 m/s)²] = 500(400 − 100) = 150,000 J = 150 kJ. Doubling the speed quadruples the kinetic energy, from 50 kJ to 200 kJ.\n\n(B) is wrong because 200 kJ is only the final kinetic energy, ½(1000)(20)²; the car already had 50 kJ at 10 m/s, which must be subtracted.\n(C) is wrong because it forgets the ½ in the kinetic energy formula, (1000)(400 − 100) = 300 kJ, which doubles the correct work.\n(D) is wrong because 600 kJ is four times the correct work, 2(1000)(400 − 100) = 600,000 J, as if the ½ in ½mv² were replaced by 2; the correct factor gives ½(1000)(300) = 150 kJ."
  }
];

export default EXAM_2_QUESTIONS;
