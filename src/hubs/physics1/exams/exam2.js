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
    "explanation": "The normal force is mg = 50 N, so the friction force is (0.20)(50) = 10 N. The net force is 30 − 10 = 20 N, so a = 20/5.0 = 4.0 m/s². 6.0 m/s² ignores friction, and 5.8 m/s² uses the mass instead of the weight to find the friction."
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
    "explanation": "The work done on the load is mgh = (100)(10)(10) = 10,000 J. With P = W/t, the time is t = 10,000/2000 = 5.0 s."
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
    "explanation": "The net force on the system is the difference in the weights: (3.0 − 2.0)(10) = 10 N. This force accelerates the total mass of 5.0 kg, so a = 10/5.0 = 2.0 m/s²."
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
    "explanation": "The total momentum is zero before and after the explosion, so the 4.0 kg piece must carry equal and opposite momentum: (4.0)v = (2.0)(9.0), giving v = 4.5 m/s directed to the left."
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
    "explanation": "Rolling without slipping means ω = v/R. The translational kinetic energy is ½mv² = ½(0.50)(16) = 4.0 J. The rotational kinetic energy is ½Iω² = ½(2/5)(mR²)(v/R)² = (1/5)mv² = 1.6 J. The total is 4.0 + 1.6 = 5.6 J. 4.0 J and 1.6 J are only the translational and rotational parts."
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
    "explanation": "The block is at rest, so the tension equals its weight, 40 N. The string pulls tangentially at the drum's radius, so τ = rF = (0.25)(40) = 10 N·m. 160 would result from dividing the force by the radius."
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
    "explanation": "W = ΔK = ½(2.0)(5.0² − 3.0²) = 25 − 9 = 16 J. 4 J results from squaring the change in speed, (5.0 − 3.0)², instead of finding the change in v²."
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
    "explanation": "No external torque acts, so angular momentum is conserved: I₁ω₁ = I₂ω₂, giving (3.0)(2.0) = (1.5)ω₂ and ω₂ = 4.0 rad/s."
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
    "explanation": "With constant deceleration, the average speed is (25 + 0)/2 = 12.5 m/s, so the distance is (12.5)(5.0) = 62.5 m. 125 m would result from using the initial speed for the entire 5.0 s, as if the car did not slow down."
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
    "explanation": "At constant speed the net force along the incline is zero: mg sin 30° = μₖ mg cos 30°. Therefore μₖ = tan 30° = 0.58. 0.50 is sin 30° and 0.87 is cos 30°, and 1.7 is the inverse of the correct ratio."
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
    "explanation": "Total linear momentum is conserved whenever there is no net external force, regardless of the type of collision. Kinetic energy is conserved only in elastic collisions, and the individual momenta and kinetic energies of the objects change because the objects exert forces on each other."
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
    "explanation": "Static friction provides the centripetal force: μₛmg = mv²/r, so μₛ = v²/(rg) = 400/(80 × 10) = 0.50. 2.0 results from inverting the ratio."
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
    "explanation": "I = Σmr² = (1.0)(0)² + (1.0)(2.0)² = 4.0 kg·m². The mass at the axis contributes nothing. 2.0 kg·m² would be the rotational inertia about an axis through the rod's center, where each mass is 1.0 m away."
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
    "explanation": "The bob drops a height h = L(1 − cos 60°) = (1.0)(0.50) = 0.50 m. Energy conservation gives v = √(2gh) = √(2 × 10 × 0.50) = √10 ≈ 3.2 m/s. 4.5 m/s results from using the full string length as the drop height."
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
    "explanation": "Starting from rest, θ = ½αt² = ½(2.0)(5.0)² = 25 rad. 50 rad results from leaving out the factor of ½."
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
    "explanation": "The net force is the vector sum: √(6.0² + 8.0²) = 10 N. Then a = F/m = 10/2.0 = 5.0 m/s². 7.0 m/s² comes from adding the forces (14 N) and dividing by the mass, which does not account for the perpendicular directions."
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
    "explanation": "The pressure is transmitted equally throughout the fluid: F₁/A₁ = F₂/A₂, so F₂ = (200)(0.50/0.010) = 10,000 N. The force is multiplied by the ratio of the areas, 50."
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
    "explanation": "The vertical components of the two tensions support the weight: 2T sin 30° = mg = 100 N, so T = 100 N. 50 N results from forgetting the angle (each cable supports half the weight), and 200 N would be the sum of the two tensions."
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
    "explanation": "Starting from rest, v² = 2gh = 2(10)(80) = 1600, so v = 40 m/s. 80 m/s and 160 m/s come from confusing the height with the speed (or doubling it) and skipping the square root."
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
    "explanation": "A constant velocity means zero acceleration, so the net horizontal force is zero (Newton's first law). The friction force must therefore balance the 50 N push, with equal magnitude and the opposite direction. Constant velocity does not mean there is no friction."
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
    "explanation": "The buoyant force is the loss of apparent weight: B = 12 − 8.0 = 4.0 N. Since B = ρ_water Vg, V = 4.0/(1000 × 10) = 4.0 × 10⁻⁴ m³. The object's mass is 12/10 = 1.2 kg, so its density is 1.2/(4.0 × 10⁻⁴) = 3000 kg/m³."
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
    "explanation": "Momentum is conserved: (1500)(12) = (2500)v, so v = 18,000/2500 = 7.2 m/s."
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
    "explanation": "The work equals the change in spring potential energy: ½k(x₂² − x₁²) = ½(400)(0.30² − 0.10²) = 200(0.08) = 16 J. 18 J is the total energy stored at 0.30 m, which includes the energy already stored at 0.10 m."
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
    "explanation": "The period of a mass–spring system is T = 2π√(m/k) = 2π√(0.20/80) = 2π(0.050) ≈ 0.31 s."
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
    "explanation": "The volume flow rate is Q = Av = (0.020)(3.0) = 0.060 m³/s. 0.0067 m³/s results from dividing the area by the speed instead of multiplying."
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
    "explanation": "By Newton's third law, the gravitational force of the planet on the moon and the force of the moon on the planet are equal in magnitude and opposite in direction. The moon has the much larger acceleration only because its mass is much smaller (a = F/m)."
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
    "explanation": "Taking the 2.0 kg cart's direction as positive, the total momentum is (2.0)(4.0) − (1.0)(2.0) = 6.0 kg·m/s, so the carts move at 6.0/3.0 = 2.0 m/s together. The initial kinetic energy is ½(2.0)(4.0)² + ½(1.0)(2.0)² = 18 J, and the final is ½(3.0)(2.0)² = 6 J. The energy lost is 12 J. 6 J is the final energy and 18 J is the initial energy."
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
    "explanation": "The work done against gravity is mgh = (70)(10)(30) = 21,000 J. Dividing by the time gives P = 21,000/60 = 350 W. 700 would be the climber's weight in newtons, not a power."
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
    "explanation": "With no external torque, angular momentum L = Iω is conserved. The collapse reduces the star's rotational inertia I, so the angular speed ω must increase to keep L the same."
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
    "explanation": "The fall time depends only on the vertical motion: 20 = ½(10)t², so t = 2.0 s. Horizontally the ball moves at a constant 10 m/s, so x = (10)(2.0) = 20 m."
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
    "explanation": "The angular frequency is ω = √(k/m) = √(200/2.0) = 10 rad/s, and the maximum speed is v_max = Aω = (0.10)(10) = 1.0 m/s. (Energy conservation gives the same result: ½kA² = ½mv²_max.)"
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
    "explanation": "Only the component of the force along the displacement does work: W = Fd cos θ = (20)(5.0)(cos 30°) ≈ 87 J. 100 J ignores the angle, and 50 J uses sine instead of cosine."
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
    "explanation": "The speed is constant, so the kinetic energy does not change. The block is moving lower, so its gravitational potential energy decreases. Energy is conserved for the whole system, so the lost potential energy appears as thermal energy produced by friction."
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
    "explanation": "Bernoulli's equation says that where the fluid speed is greater, the pressure is lower. The lower pressure above the wing and higher pressure below produce a net upward force on the wing. Faster-moving air does not push harder on a surface; it exerts less pressure on it."
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
    "explanation": "The gauge pressure is ρgh = (800)(10)(3.0) = 24,000 Pa. The atmospheric pressure is not included in the gauge pressure."
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
    "explanation": "The period of a simple pendulum is T = 2π√(L/g). With the same length and a smaller g, the period is longer. It is true that the period does not depend on the bob's mass, but it does depend on g, so it changes."
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
    "explanation": "For static equilibrium, both the translational and rotational accelerations must be zero. That requires the net force to be zero and the net torque about any chosen point to be zero. Equilibrium does not require a single supporting force at the center of mass: a plank resting on two supports, for example, is in equilibrium with forces at two different points."
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
    "explanation": "The impulse is the area under the force–time graph, a triangle: ½(20 N)(0.10 s) = 1.0 N·s. Since J = Δp = mv, v = 1.0/0.50 = 2.0 m/s. 4.0 m/s results from treating the area as a rectangle (20 N × 0.10 s)."
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
    "explanation": "The slope of a position–time graph is the velocity. A positive slope means motion in the positive direction, and a slope that gets steeper means the speed is increasing (positive acceleration). A constant speed would give a straight line, and a negative-direction motion would give a negative slope."
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
    "explanation": "The torque is τ = rF = (0.20)(12) = 2.4 N·m, so α = τ/I = 2.4/0.060 = 40 rad/s²."
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
    "explanation": "For a ball dropped from rest, h = ½gt². A graph of h versus t² is therefore a straight line through the origin with a slope of g/2, so g is twice the slope. Graphs of h versus t or t versus h are curved, and t² is proportional to h, not h², so the last graph is also curved."
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
    "explanation": "By the work–energy theorem, W = ΔK = ½(1000)(20² − 10²) = 150,000 J = 150 kJ. 200 kJ is only the final kinetic energy, and 300 kJ results from forgetting the ½."
  }
];

export default EXAM_2_QUESTIONS;
