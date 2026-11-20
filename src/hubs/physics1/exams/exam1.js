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
    "explanation": "Correct: (B) 16 J. Only gravity does work on the ball, so mechanical energy is conserved. The initial kinetic energy is K₀ = ½mv₀² = ½(0.50 kg)(12 m/s)² = 36 J. Rising 4.0 m raises the gravitational potential energy by mgh = (0.50 kg)(10 m/s²)(4.0 m) = 20 J, and that energy comes out of the kinetic energy: K = 36 J − 20 J = 16 J. The answer is the same whether the ball is passing 4.0 m on the way up or on the way down, because the height, not the direction, sets the energy split.\n\n(A) is wrong because 6 J does not come from any correct energy bookkeeping; the initial 36 J minus the 20 J of potential energy gained leaves 16 J, not 6 J.\n(C) is wrong because 20 J is the gravitational potential energy gained, mgh = (0.50)(10)(4.0); the question asks for the kinetic energy that remains, 36 − 20 = 16 J.\n(D) is wrong because 36 J is the initial kinetic energy at launch; it ignores the 20 J transferred to potential energy as the ball rises 4.0 m."
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
    "explanation": "Correct: (A) 1.1 m/s². Outside a spherical planet, the gravitational field is g = GM/r², where r is measured from the planet's center, so g varies as 1/r². At the surface r = R and g = 10 m/s². At r = 3R the field is (1/3)² = 1/9 as large: g = (10 m/s²)/9 ≈ 1.1 m/s². Note that \"3 Earth radii from Earth's center\" means r = 3R, not 3R above the surface (which would be r = 4R).\n\n(B) is wrong because 3.3 m/s² is 10/3, which treats gravity as falling off as 1/r instead of the inverse-square 1/r² law.\n(C) is wrong because 5.0 m/s² is 10/2, which follows neither the inverse-square law nor any correct distance; at r = 3R the field is 10/3² ≈ 1.1 m/s².\n(D) is wrong because 10 m/s² is the surface value; gravitational acceleration is not constant but weakens as 1/r² with distance from Earth's center."
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
    "explanation": "Correct: (B) 1.0 m/s. The carts stick together, so this is a perfectly inelastic collision. The track is frictionless, so no external horizontal force acts and the total momentum is conserved (kinetic energy is not). Before: p = (2.0 kg)(3.0 m/s) + (4.0 kg)(0) = 6.0 kg·m/s. After, the 6.0 kg combination moves together: (6.0 kg)v = 6.0 kg·m/s, so v = 1.0 m/s in the original direction of the moving cart.\n\n(A) is wrong because 0.5 m/s comes from dividing the momentum by 12 kg or otherwise doubling the mass; the combined mass is only 2.0 + 4.0 = 6.0 kg.\n(C) is wrong because 1.5 m/s is the simple average of the initial speeds, (3.0 + 0)/2, which ignores that the masses differ and has no physical basis.\n(D) is wrong because 3.0 m/s is the initial speed of the moving cart; the combined carts must be slower because the same momentum is shared by three times the mass."
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
    "explanation": "Correct: (C) 30,000 Pa. Pressure is force per unit area, P = F/A. The force the foot exerts on the floor is the person's weight, which balances the normal force while the person stands still: F = mg = (60 kg)(10 m/s²) = 600 N. Dividing by the contact area gives P = 600 N / 0.020 m² = 30,000 Pa (3.0 × 10<sup>4</sup> Pa). Remember to convert mass to weight before dividing; mass in kilograms is not a force.\n\n(A) is wrong because 3,000 Pa uses the mass, 60 / 0.020, instead of the weight in newtons, which gives a pressure ten times too small.\n(B) is wrong because 12,000 Pa does not follow from P = F/A with these numbers; 600 N divided by 0.020 m² is 30,000 Pa.\n(D) is wrong because 300,000 Pa is ten times too large, as if the area were 0.0020 m² instead of 0.020 m² (a decimal-place slip)."
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
    "explanation": "Correct: (C) 8.0 m/s. Water is essentially incompressible, so the volume flow rate Av must be the same everywhere along the pipe (the continuity equation): A₁v₁ = A₂v₂. Solving, v₂ = A₁v₁/A₂ = (0.040 m²)(2.0 m/s)/(0.010 m²) = 8.0 m/s. The area shrinks by a factor of 4, so the speed grows by a factor of 4; the same volume of water per second has to squeeze through a smaller opening.\n\n(A) is wrong because 0.50 m/s inverts the ratio, multiplying by A₂/A₁ = 1/4, which would make the water slow down in the narrow section.\n(B) is wrong because 2.0 m/s assumes the speed is unchanged, but the flow rate Av must be constant, so a smaller area requires a larger speed.\n(D) is wrong because 16 m/s squares the area ratio (4² = 16) and drops the initial speed; continuity makes speed scale with the first power of the ratio, 4 × 2.0 m/s = 8.0 m/s."
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
    "explanation": "Correct: (B) Zero, because the force is perpendicular to the satellite's displacement at every point. Work is W = Fd cos θ, where θ is the angle between the force and the displacement. In a circular orbit, gravity always points toward Earth's center (along the radius), while the satellite's velocity and each small displacement point along the tangent. The angle is 90° at every point, cos 90° = 0, so gravity does zero work over any part of the orbit. Consistent with the work–energy theorem, the satellite's kinetic energy and speed stay constant.\n\n(A) is wrong because pointing toward the center is exactly why the force is perpendicular to the tangential displacement, so it does zero work, not positive work.\n(C) is wrong because the satellite moves at constant speed, so its kinetic energy does not change and the net work cannot be negative.\n(D) is wrong because the inward (centripetal) acceleration changes only the direction of the velocity, not the speed, so no work is done."
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
    "explanation": "Correct: (A) The gravitational force the book exerts on Earth. A Newton's third-law pair consists of two forces of the same type acting on two different objects, equal in magnitude and opposite in direction: if A pushes or pulls B, then B pushes or pulls A. The book's weight is the gravitational force Earth exerts on the book, so its partner must be the gravitational force the book exerts on Earth, equal in size and directed upward. The normal force balances the weight only because the book is in equilibrium (Newton's second law with a = 0), not because of the third law.\n\n(B) is wrong because the table's normal force acts on the same object as the weight (the book) and is a different type of force, so it cannot be its third-law partner.\n(C) is wrong because the normal force of the book on the table is the third-law partner of the table's normal force on the book, not of gravity.\n(D) is wrong because the force the table exerts on Earth involves neither the book nor gravity between book and Earth, so it is unrelated to the book's weight."
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
    "explanation": "Correct: (A) 6 m/s. The surface is frictionless, so the elastic potential energy stored in the compressed spring is converted entirely into the block's kinetic energy. Stored energy: U = ½kx² = ½(200 N/m)(0.30 m)² = ½(200)(0.090) = 9.0 J. Setting ½mv² = 9.0 J gives ½(0.50 kg)v² = 9.0 J, so v² = 36 m²/s² and v = 6 m/s. Note that x must be squared; the energy grows with the square of the compression.\n\n(B) is wrong because 9 is the stored energy in joules (½kx² = 9.0 J), not the speed; the energy still has to be converted using ½mv² = 9.0 J.\n(C) is wrong because 12 m/s is twice the correct speed, as if the stored energy were 36 J instead of 9.0 J; v = x√(k/m) = (0.30 m)(20 s⁻¹) = 6 m/s.\n(D) is wrong because 18 m/s divides the 9.0 J by the 0.50 kg mass (U/m = 18) instead of solving ½mv² = 9.0 J and taking a square root."
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
    "explanation": "Correct: (C) 720 N. A scale reads the normal force it exerts on the person. Two forces act on the person: the normal force N upward and the weight mg downward. With the acceleration upward, Newton's second law gives N − mg = ma, so N = m(g + a) = (60 kg)(10 m/s² + 2.0 m/s²) = 720 N. The scale must push harder than the weight to provide the net upward force of ma = 120 N, so the person feels heavier.\n\n(A) is wrong because 480 N is m(g − a), the reading for a downward acceleration of 2.0 m/s²; here the elevator accelerates upward.\n(B) is wrong because 600 N is the person's weight, which the scale reads only at rest or at constant velocity, when there is no acceleration.\n(D) is wrong because 1200 N doubles the weight with no basis; the extra force needed is only ma = (60)(2.0) = 120 N."
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
    "explanation": "Correct: (D) 1.9 s. For small angles, a simple pendulum's period depends only on its length and g: T = 2π√(L/g). Substituting, T = 2π√(0.90 m / 10 m/s²) = 2π√(0.090 s²) = 2π(0.30 s) ≈ 1.88 s ≈ 1.9 s. The mass of the bob and the (small) amplitude do not affect the period. A quick check: a 1 m pendulum has a period of about 2 s, so 1.9 s for 0.90 m is reasonable.\n\n(A) is wrong because 0.6 s is 2√(L/g) = 2(0.30), which drops the factor of π from T = 2π√(L/g).\n(B) is wrong because 1.0 s is about π√(L/g) = π(0.30) ≈ 0.94 s, which uses π instead of 2π, or is simply a guess near one second.\n(C) is wrong because 1.5 s does not follow from T = 2π√(L/g); with L = 0.90 m and g = 10 m/s² the period is 1.9 s."
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
    "explanation": "Correct: (D) 3.0 × 10<sup>5</sup> Pa. The absolute pressure in a fluid at rest is the pressure at the surface plus the weight of the fluid column above: P = P₀ + ρgh. The water adds ρgh = (1000 kg/m³)(10 m/s²)(20 m) = 2.0 × 10<sup>5</sup> Pa. Adding the atmosphere pressing on the lake's surface, P = 1.0 × 10<sup>5</sup> Pa + 2.0 × 10<sup>5</sup> Pa = 3.0 × 10<sup>5</sup> Pa, about three atmospheres. Every 10 m of water adds roughly one atmosphere.\n\n(A) is wrong because 1.2 × 10<sup>5</sup> Pa adds only ρh = (1000)(20) = 2.0 × 10<sup>4</sup> Pa to the atmosphere, leaving out g in ρgh.\n(B) is wrong because 2.0 × 10<sup>5</sup> Pa is only the gauge pressure from the water, ρgh; the absolute pressure also includes the atmosphere.\n(C) is wrong because 2.5 × 10<sup>5</sup> Pa does not follow from P₀ + ρgh; the water adds 2.0 × 10<sup>5</sup> Pa to 1.0 × 10<sup>5</sup> Pa, giving 3.0 × 10<sup>5</sup> Pa."
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
    "explanation": "Correct: (C) 240 N. The average force equals the change in momentum divided by the contact time (impulse–momentum theorem): F_avg = Δp/Δt. Momentum is a vector, so the reversal matters. Taking the incoming direction as positive, Δp = m(v_f − v_i) = (0.15 kg)(−12 m/s − 20 m/s) = −4.8 kg·m/s. The magnitude of the force is 4.8 kg·m/s / 0.020 s = 240 N, directed away from the wall. Because the ball bounces back, the speeds add (20 + 12 = 32 m/s change), which is why the force is large.\n\n(A) is wrong because 60 N subtracts the speeds, (0.15)(20 − 12)/0.020, forgetting that the ball reverses direction so the velocity change is 32 m/s, not 8 m/s.\n(B) is wrong because 150 N uses only the incoming momentum, (0.15)(20)/0.020, as if the ball stopped at the wall instead of rebounding.\n(D) is wrong because 480 N is twice the correct value, as if the contact time were 0.010 s or the 4.8 kg·m/s were doubled again."
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
    "explanation": "Correct: (C) 80 N. The crate does not move, so its acceleration is zero and the net horizontal force is zero. Static friction adjusts to whatever value is needed, up to a maximum, so it must exactly balance the 80 N push: f = 80 N, directed opposite the push. Check that the crate can indeed stay put: N = mg = (25 kg)(10 m/s²) = 250 N, so the maximum static friction is μₛN = (0.40)(250 N) = 100 N, which exceeds 80 N. The formula μₛN gives only the upper limit, not the actual friction.\n\n(A) is wrong because if friction were 0 N, the 80 N push would be unbalanced and the crate would accelerate, but it stays at rest.\n(B) is wrong because 75 N is the kinetic friction μₖN = (0.30)(250), which applies only once the crate is sliding; this crate is not moving.\n(D) is wrong because 100 N is the maximum possible static friction μₛN; the actual static friction equals the 80 N needed to balance the push."
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
    "explanation": "Correct: (B) +4 m. With constant acceleration, displacement is Δx = v₀t + ½at². Signs matter: v₀ = −3 m/s and a = +2 m/s². Δx = (−3 m/s)(4 s) + ½(2 m/s²)(4 s)² = −12 m + 16 m = +4 m. Physically, she moves in the negative direction while slowing, stops at t = 1.5 s (after −2.25 m), then speeds up in the positive direction, covering +6.25 m by t = 4 s; the net is −2.25 + 6.25 = +4 m.\n\n(A) is wrong because −12 m is just v₀t, which ignores the acceleration term ½at² = +16 m.\n(C) is wrong because +16 m is just ½at², which ignores the initial velocity contribution of −12 m.\n(D) is wrong because +28 m treats the initial velocity as +3 m/s, giving +12 + 16 = 28 m; the minus sign on v₀ must be kept."
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
    "explanation": "Correct: (D) They are equal, because both blocks lose the same gravitational potential energy. Compare final speeds using energy. On the frictionless ramp, the normal force is perpendicular to the motion and does no work, so in both cases only gravity does work. Both identical blocks drop the same height h, so each loses mgh of potential energy and gains the same kinetic energy: ½mv² = mgh, giving v = √(2gh) for both. The ramp changes the direction of the final velocity and lengthens the time of the trip, but not the final speed.\n\n(A) is wrong because the length of the path does not matter; with only gravity doing work, the speed depends only on the vertical drop h.\n(B) is wrong because the longer time on the ramp comes with a smaller acceleration (g sin θ), so the final speed √(2gh) is the same.\n(C) is wrong because the frictionless ramp's normal force is perpendicular to the motion and does no work, so it does not reduce block 2's speed."
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
    "explanation": "Correct: (C) 3/4. In simple harmonic motion with no friction, the total mechanical energy is constant and equal to the spring energy at the turning points: E = ½kA². At x = A/2 the spring potential energy is U = ½k(A/2)² = ¼(½kA²) = ¼E. The rest of the energy is kinetic: K = E − U = E − ¼E = ¾E. The fraction is 3/4. Because U depends on x², half the amplitude stores only one quarter of the energy.\n\n(A) is wrong because 1/4 is the fraction stored as spring potential energy at x = A/2, not the kinetic-energy fraction.\n(B) is wrong because 1/2 assumes energy is split linearly with displacement, but U = ½kx² depends on x², so U is only 1/4 of E.\n(D) is wrong because the kinetic energy equals all of E only at x = 0; at x = A/2 some energy is still stored in the spring."
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
    "explanation": "Correct: (D) 36 N. The puck moves in a circle at constant speed, so it needs a net force toward the center of magnitude mv²/r. On a frictionless horizontal table, the vertical forces (weight and normal force) cancel, and the only horizontal force is the string's tension, so T supplies the centripetal force: T = mv²/r = (2.0 kg)(3.0 m/s)²/(0.50 m) = (2.0)(9.0)/0.50 = 36 N.\n\n(A) is wrong because 6 N is mv = (2.0)(3.0), which has units of momentum, not force; the centripetal force is mv²/r.\n(B) is wrong because 9 N is just v² = 9.0, leaving out both the mass and the radius in mv²/r.\n(C) is wrong because 18 N is mv² = (2.0)(9.0) without dividing by r, or equivalently uses r = 1.0 m instead of 0.50 m."
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
    "explanation": "Correct: (D) 3. The system starts at rest and no external horizontal force acts, so the total momentum stays zero: the carts move apart with equal and opposite momenta of magnitude p. Kinetic energy can be written K = p²/(2m), so for equal p, K is inversely proportional to mass. K_m / K_3m = (p²/2m)/(p²/2(3m)) = 3. Equivalently, the lighter cart moves 3v while the heavier moves v: ½m(3v)² = 4.5mv² versus ½(3m)v² = 1.5mv², a ratio of 3.\n\n(A) is wrong because 1/9 squares the mass ratio the wrong way, as if K were proportional to m² at equal momentum; K = p²/(2m) gives 3.\n(B) is wrong because 1/3 inverts the correct ratio, as if K were proportional to mass; with equal momenta the lighter cart has more kinetic energy.\n(C) is wrong because 1 assumes the spring gives equal energy to each cart; momentum, not kinetic energy, is shared equally in magnitude."
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
    "explanation": "Correct: (C) The speed is greater and the pressure is lower. Two principles combine. Continuity (A₁v₁ = A₂v₂) says that an incompressible fluid must move faster where the pipe is narrower, so the speed at point 2 is greater. Bernoulli's equation for a horizontal pipe, P + ½ρv² = constant, then says that where the kinetic energy per volume ½ρv² is larger, the pressure P must be smaller. The fluid speeds up because the higher pressure behind it in the wide section pushes it into the lower-pressure narrow section.\n\n(A) is wrong because higher speed and higher pressure would make P + ½ρv² increase, violating Bernoulli's equation for a horizontal pipe.\n(B) is wrong because continuity requires a greater speed in the narrower section, since Av is constant; the speed cannot be lower there.\n(D) is wrong because the speed in the narrow section is greater, not lower, because the same volume flow passes through a smaller area."
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
    "explanation": "Correct: (D) 8.0 J. Rotational kinetic energy is K = ½Iω², the rotational analog of ½mv². First find the rotational inertia of the solid disk: I = ½MR² = ½(2.0 kg)(0.50 m)² = ½(2.0)(0.25) = 0.25 kg·m². Then K = ½(0.25 kg·m²)(8.0 rad/s)² = ½(0.25)(64) = 8.0 J. Radians are dimensionless, so kg·m²/s² gives joules.\n\n(A) is wrong because 2.0 is Iω = (0.25)(8.0), which is the disk's angular momentum in kg·m²/s, not its kinetic energy ½Iω².\n(B) is wrong because 4.0 J applies the ½ twice, using I = ¼MR² = 0.125 kg·m², so ½(0.125)(64) = 4.0 J; the disk's I is 0.25 kg·m².\n(C) is wrong because 6.0 J does not follow from ½Iω² with I = 0.25 kg·m² and ω = 8.0 rad/s, which gives 8.0 J."
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
    "explanation": "Correct: (A) 4.0 N. By the work–energy theorem, the work done by friction equals the change in kinetic energy. The block starts with K = ½mv² = ½(2.0 kg)(6.0 m/s)² = 36 J and ends at rest, so friction does −36 J of work over 9.0 m. The magnitude of the friction work is f·d, so f = 36 J / 9.0 m = 4.0 N. (Check with kinematics: a = v²/(2d) = 36/18 = 2.0 m/s², and f = ma = 4.0 N.)\n\n(B) is wrong because 6.0 N divides the 36 J of kinetic energy by the 6.0 m/s speed instead of by the 9.0 m sliding distance.\n(C) is wrong because 8.0 N comes from forgetting the ½ in kinetic energy, using mv² = 72 J and 72/9.0 = 8.0 N.\n(D) is wrong because 12 N is mv/1 s = (2.0)(6.0), treating momentum as a force; friction must be found from the energy over the 9.0 m distance."
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
    "explanation": "Correct: (A) 4.0 N·m. Torque is τ = rF sin θ, where θ is the angle between the position vector (along the handle, from the bolt to where the force is applied) and the force. Only the component of the force perpendicular to the handle, F sin θ, turns the wrench. Here τ = (0.40 m)(20 N)(sin 30°) = (0.40)(20)(0.50) = 4.0 N·m. The figure shows the 30° angle measured from the handle's line, so sine, not cosine, is the correct factor.\n\n(B) is wrong because 6.9 N·m uses cos 30° = 0.866 instead of sin 30°; cosine gives the component along the handle, which produces no torque.\n(C) is wrong because 8.0 N·m is rF with no angle factor, which would be correct only if the force were perpendicular to the handle.\n(D) is wrong because 12 N·m does not follow from rF sin θ with these values; even rF with no angle factor gives only 8.0 N·m."
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
    "explanation": "Correct: (D) 24 rad/s. Newton's second law for rotation is τ_net = Iα. The angular acceleration is α = τ/I = (3.0 N·m)/(0.50 kg·m²) = 6.0 rad/s². The torque is constant, so α is constant, and starting from rest the angular speed after time t is ω = ω₀ + αt = 0 + (6.0 rad/s²)(4.0 s) = 24 rad/s. This is the rotational version of v = at.\n\n(A) is wrong because 1.5 rad/s multiplies the torque by the rotational inertia, τI = (3.0)(0.50), instead of dividing; α = τ/I = 6.0 rad/s², so ω = (6.0)(4.0) = 24 rad/s.\n(B) is wrong because 6.0 is the angular acceleration in rad/s², not the angular speed reached after 4.0 s.\n(C) is wrong because 12 rad/s is τt = (3.0)(4.0), which leaves out the rotational inertia; ω = (τ/I)t = (6.0)(4.0) = 24 rad/s."
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
    "explanation": "Correct: (A) 36 J. Track the block's mechanical energy. At the top it has only gravitational potential energy: U = mgh = (3.0 kg)(10 m/s²)(2.0 m) = 60 J. At the bottom it has only kinetic energy: K = ½mv² = ½(3.0 kg)(4.0 m/s)² = 24 J. Energy is conserved overall, so the mechanical energy that disappeared, 60 J − 24 J = 36 J, was converted to thermal energy by friction between the block and the incline.\n\n(B) is wrong because 48 J is mv² = (3.0)(16) without the ½, or 2 × 24; the energy lost is the 60 J start minus the 24 J kinetic energy, 36 J.\n(C) is wrong because 60 J is the full initial potential energy, which would all become thermal energy only if the block reached the bottom at rest.\n(D) is wrong because 84 J adds the 24 J of final kinetic energy to the 60 J of potential energy instead of subtracting it."
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
    "explanation": "Correct: (C) 0.45 kg. For a uniform meterstick, the weight acts at its center of mass, the 50 cm mark. Take torques about the pivot at 70 cm. The stick's weight acts 20 cm (0.20 m) to the left of the pivot, and the 0.30 kg mass hangs 30 cm (0.30 m) to the right. In balance the clockwise and counterclockwise torques are equal: M(g)(0.20 m) = (0.30 kg)(g)(0.30 m). The g cancels, so M = (0.30)(0.30)/0.20 = 0.45 kg.\n\n(A) is wrong because 0.20 kg swaps the lever arms, using M(0.30) = (0.30)(0.20); the stick's weight acts at 50 cm, 0.20 m from the pivot.\n(B) is wrong because 0.30 kg assumes the stick and the hanging mass balance at equal distances, but their lever arms are 0.20 m and 0.30 m.\n(D) is wrong because 0.90 kg treats the stick's lever arm as 0.10 m, doubling the mass; the center of mass at 50 cm is 0.20 m from the pivot."
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
    "explanation": "Correct: (D) The upward drag force on the skydiver equals the skydiver's weight. Terminal velocity is a constant velocity, so the acceleration is zero and, by Newton's second law (or first law), the net force on the skydiver is zero. Only two forces act: the weight mg downward and air drag upward. For the net force to be zero, the drag must equal the weight in magnitude. Drag grows with speed, so the skydiver speeds up until drag has grown enough to match the weight, and then stops accelerating.\n\n(A) is wrong because drag greater than weight would give a net upward force, so the skydiver would slow down instead of moving at constant velocity.\n(B) is wrong because gravity always acts on the skydiver; terminal velocity happens because drag balances gravity, not because gravity disappears.\n(C) is wrong because a constant downward net force would cause a constant downward acceleration, so the velocity could not stay constant."
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
    "explanation": "Correct: (B) 30 N. The rod is in static equilibrium, so the net torque about any point is zero. Choose the hinge as the pivot so the unknown hinge force has zero lever arm and drops out. The rod's weight, mg = (6.0 kg)(10 m/s²) = 60 N, acts at its center, 1.0 m from the hinge, and the vertical cable pulls up at the free end, 2.0 m from the hinge. Balancing torques: T(2.0 m) = (60 N)(1.0 m), so T = 30 N. The hinge supplies the other 30 N upward.\n\n(A) is wrong because 15 N treats the weight as acting 0.50 m from the hinge, T(2.0) = (60)(0.50); the weight of a uniform rod acts at its 1.0 m center, so T = (60)(1.0)/2.0 = 30 N.\n(C) is wrong because 60 N is the full weight, which the cable would carry only if attached at the center of mass; the hinge shares the load here.\n(D) is wrong because 120 N multiplies the weight by 2.0 m / 1.0 m the wrong way, inverting the lever-arm ratio."
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
    "explanation": "Correct: (A) The disk has the greater angular acceleration, because its rotational inertia is smaller. Rotational Newton's second law gives α = τ/I. With the same torque, the object with smaller rotational inertia has the larger angular acceleration. A thin hoop has all its mass at radius R, so I = MR², while a solid disk has much of its mass close to the axis, so I = ½MR². The disk's inertia is half the hoop's, so α_disk = τ/(½MR²) = 2τ/(MR²), twice the hoop's angular acceleration τ/(MR²).\n\n(B) is wrong because mass farther from the axis increases rotational inertia, which makes the hoop harder to spin up, so its angular acceleration is smaller.\n(C) is wrong because rotational inertia depends on how the mass is distributed, not only on total mass and radius, so equal M and R do not give equal I.\n(D) is wrong because equal torques give equal α only if the rotational inertias are equal, and the hoop's MR² is twice the disk's ½MR²."
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
    "explanation": "Correct: (C) 3.0 kg·m²/s. The angular momentum of a point particle about a point P is L = r⊥p = mvr⊥, where r⊥ is the perpendicular distance from P to the particle's line of motion. It stays the same everywhere along a straight line because the perpendicular distance is fixed. Here L = (0.50 kg)(4.0 m/s)(1.5 m) = 3.0 kg·m²/s. A particle moving in a straight line can have angular momentum about a point that is not on its line.\n\n(A) is wrong because 0.75 kg·m²/s is m × r⊥ = (0.50)(1.5), leaving out the speed of 4.0 m/s.\n(B) is wrong because 2.0 kg·m²/s is only the linear momentum mv = (0.50)(4.0), without multiplying by the 1.5 m perpendicular distance.\n(D) is wrong because 6.0 kg·m²/s is v × r⊥ = (4.0)(1.5), leaving out the 0.50 kg mass, or doubles the correct value."
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
    "explanation": "Correct: (A) It is moving in the negative direction and speeding up. Read the sign of the velocity and the slope from the graph. At t = 5 s the line is at v = −4 m/s, below the time axis, so the object is moving in the negative direction. The slope is (−6 − 6)/(6 − 0) = −2 m/s², a constant negative acceleration. When velocity and acceleration have the same sign, the speed increases: the speed rises from 0 at t = 3 s to 4 m/s at t = 5 s. So the object moves in the negative direction and speeds up.\n\n(B) is wrong because moving in the positive direction while slowing describes the motion before t = 3 s; at t = 5 s the velocity is −4 m/s.\n(C) is wrong because the velocity at t = 5 s is negative (−4 m/s), so the object is not moving in the positive direction.\n(D) is wrong because the speed is increasing, from 2 m/s at t = 4 s to 4 m/s at t = 5 s, because the velocity and acceleration are both negative."
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
    "explanation": "Correct: (B) 20 m. At the maximum height, the vertical velocity is momentarily zero. Use v² = v₀² − 2gh with v = 0: h = v₀²/(2g) = (20 m/s)²/(2 × 10 m/s²) = 400/20 = 20 m. Check: the ball takes t = v₀/g = 2.0 s to stop, and its average speed during the rise is 10 m/s, so it rises (10 m/s)(2.0 s) = 20 m.\n\n(A) is wrong because 10 m divides by 4g or uses the average speed for only 1 s; h = v₀²/(2g) = 20 m.\n(C) is wrong because 30 m does not follow from any correct kinematic relation with v₀ = 20 m/s and g = 10 m/s²; the result is 20 m.\n(D) is wrong because 40 m uses v₀²/g = 400/10, forgetting the factor of 2 in v² = v₀² − 2gh."
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
    "explanation": "Correct: (A) 4 m/s. The work done by a variable force is the area under the force–position graph. From 0 to 2.0 m the area is a rectangle: (6.0 N)(2.0 m) = 12 J. From 2.0 to 6.0 m the force falls linearly from 6.0 N to 0, a triangle: ½(6.0 N)(4.0 m) = 12 J. Total work W = 24 J. The track is frictionless, so by the work–energy theorem W = ΔK = ½mv² − 0: 24 J = ½(3.0 kg)v², so v² = 16 m²/s² and v = 4 m/s.\n\n(B) is wrong because 6 m/s would require 54 J of work; it reads the 6.0 N force or the 6.0 m endpoint off the graph instead of using the 24 J area.\n(C) is wrong because 8 m/s is W/m = 24/3.0, which divides the work by the mass without using ½mv² and a square root.\n(D) is wrong because 12 m/s takes the 12 J area of just the rectangle (or just the triangle) as the speed; the total 24 J must be converted with ½mv²."
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
    "explanation": "Correct: (D) Angular momentum is conserved, but rotational kinetic energy decreases. During the brief sticking, the forces between the clay and the disk are internal, and the frictionless axle exerts no torque about the axis, so the system's angular momentum about the axle is conserved: I₁ω₁ = I₂ω₂. The clay near the rim increases the rotational inertia, so ω drops. Kinetic energy can be written K = L²/(2I); with L fixed and I larger, K decreases. This is an inelastic, sticking collision, so some mechanical energy becomes thermal energy.\n\n(A) is wrong because kinetic energy is not conserved when the clay sticks; this is a rotational inelastic collision, and K = L²/(2I) falls as I grows.\n(B) is wrong because angular momentum does not decrease, because there is no external torque about the frictionless axle; it is the kinetic energy that decreases.\n(C) is wrong because angular momentum is conserved with no external torque about the axle; only the rotational kinetic energy decreases."
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
    "explanation": "Correct: (A) 2.0 N. Three forces act on the submerged object: weight mg = (0.50 kg)(10 m/s²) = 5.0 N downward, the buoyant force upward, and the string tension upward. By Archimedes' principle, the buoyant force equals the weight of displaced water: B = ρ_water V g = (1000 kg/m³)(3.0 × 10⁻⁴ m³)(10 m/s²) = 3.0 N. In equilibrium, T + B = mg, so T = 5.0 N − 3.0 N = 2.0 N. The water supports part of the weight, so the string carries less.\n\n(B) is wrong because 3.0 N is the buoyant force alone, not the string tension; tension is the weight minus the buoyant force.\n(C) is wrong because 5.0 N is the object's weight, which would be the tension in air; underwater the buoyant force supports 3.0 N of it.\n(D) is wrong because 8.0 N adds the buoyant force to the weight, but buoyancy pushes up and so reduces the tension needed."
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
    "explanation": "Correct: (B) 4.0 m. The center of mass is the mass-weighted average position: x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂). Substituting, x_cm = [(2.0 kg)(1.0 m) + (3.0 kg)(6.0 m)]/(2.0 kg + 3.0 kg) = (2.0 + 18)/5.0 = 20/5.0 = 4.0 m. The center of mass must lie between the objects and closer to the heavier one; 4.0 m is 3.0 m from the 2.0 kg object and 2.0 m from the 3.0 kg object.\n\n(A) is wrong because 3.5 m is the simple average of the positions, (1.0 + 6.0)/2, which ignores that the 3.0 kg object is heavier.\n(C) is wrong because 5.0 m is the total mass in kilograms or a guess too close to the heavier object; the weighted average is 4.0 m.\n(D) is wrong because 7.0 m lies outside the two objects; a center of mass of two point masses must lie between them."
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
    "explanation": "Correct: (B) 5.0 m/s². On a frictionless incline, two forces act: gravity and the normal force. The normal force is perpendicular to the surface, so only the component of gravity parallel to the incline, mg sin θ, accelerates the block. Newton's second law along the incline gives ma = mg sin θ, so a = g sin θ = (10 m/s²)(sin 30°) = (10)(0.50) = 5.0 m/s². The 10 kg mass cancels and does not affect the answer.\n\n(A) is wrong because 2.5 m/s² halves the correct value, as if g sin 30° were multiplied by an extra 0.50 or g were 5 m/s².\n(C) is wrong because 8.7 m/s² uses g cos 30°, which is the component perpendicular to the incline, balanced by the normal force.\n(D) is wrong because 10 m/s² is free-fall acceleration; on the incline only the component g sin 30° acts along the surface."
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
    "explanation": "Correct: (D) The block is at x = 0 and its acceleration is zero. In simple harmonic motion, energy shifts between spring potential energy ½kx² and kinetic energy. The speed is greatest where the potential energy is smallest, at x = 0, the equilibrium position. There the spring is at its natural length, so the restoring force F = −kx is zero, and by Newton's second law the acceleration is zero. At maximum displacement the reverse is true: the speed is zero and |a| = kA/m is largest.\n\n(A) is wrong because at x = 0 the spring force −kx is zero, so the acceleration is zero, not at its maximum.\n(B) is wrong because at maximum displacement the block is momentarily at rest, so its speed is zero, and its acceleration is largest there.\n(C) is wrong because this describes the turning points, where the speed is zero, not the point of greatest speed."
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
    "explanation": "Correct: (D) 10 m/s. The boat's velocity relative to the shore is the vector sum of its velocity relative to the water and the water's velocity relative to the shore. The boat heads straight across at 6 m/s while the current carries it 8 m/s downstream; these are perpendicular, so the Pythagorean theorem applies: v = √(6² + 8²) = √(36 + 64) = √100 = 10 m/s. The boat moves diagonally across the river, at an angle downstream from its heading.\n\n(A) is wrong because 2 m/s subtracts the speeds, which applies only when the velocities are along the same line in opposite directions.\n(B) is wrong because 6 m/s is only the boat's speed relative to the water, ignoring the perpendicular 8 m/s current.\n(C) is wrong because 8 m/s is only the current's speed, ignoring the boat's 6 m/s velocity across the river."
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
    "explanation": "Correct: (C) Its velocity is horizontal and its acceleration is 10 m/s² downward. With negligible air resistance, the only force on the projectile is gravity, so its acceleration is g = 10 m/s² downward at every point of the flight, including the top. At the highest point the vertical component of velocity is zero, but the horizontal component, v₀ cos 45°, never changes because there is no horizontal force. So the velocity at the top is horizontal (and nonzero) while the acceleration is still 10 m/s² downward.\n\n(A) is wrong because neither is zero: the horizontal velocity remains v₀ cos 45°, and gravity still accelerates the projectile downward at 10 m/s².\n(B) is wrong because only the vertical component of velocity is zero at the top; the horizontal component is unchanged and nonzero.\n(D) is wrong because gravity still acts at the top, so the acceleration is 10 m/s² downward, not zero."
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
    "explanation": "Correct: (B) The average force on the passenger is smaller, because the same change in momentum occurs over a longer time. In either case the passenger goes from the same initial velocity to rest, so the change in momentum, Δp = m(0 − v), is the same. By the impulse–momentum theorem the impulse J = F_avg Δt equals Δp, so the impulse is also the same. Because the airbag lengthens the stopping time Δt, the same impulse is delivered with a smaller average force, F_avg = Δp/Δt, which reduces injury.\n\n(A) is wrong because the impulse equals the passenger's change in momentum, which is the same in both cases; the airbag does not reduce it.\n(C) is wrong because the impulse is not larger, and a longer stopping time with the same impulse means a smaller, not the same, average force.\n(D) is wrong because the passenger's momentum still goes from mv to zero, so the change in momentum is the same with or without the airbag."
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
    "explanation": "Correct: (B) 6 N. First treat both blocks as one system: the only horizontal external force is the 10 N push, so a = F/(m₁ + m₂) = 10 N / 5.0 kg = 2.0 m/s². Then isolate the 3.0 kg block: the only horizontal force on it is the contact force from the 2.0 kg block, so F_contact = m₂a = (3.0 kg)(2.0 m/s²) = 6.0 N. Check the 2.0 kg block: 10 N − 6 N = 4 N = (2.0 kg)(2.0 m/s²).\n\n(A) is wrong because 4 N is the net force on the 2.0 kg block (10 − 6) or uses the 2.0 kg mass times 2.0 m/s², not the force on the 3.0 kg block.\n(C) is wrong because 10 N is the applied force on the whole system; part of it is needed to accelerate the 2.0 kg block, so less is transmitted.\n(D) is wrong because 20 N is twice the applied force, which is impossible; the contact force cannot exceed the 10 N push."
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
    "explanation": "Correct: (C) 24,000 W. At constant speed the car's acceleration is zero, so the motor's upward force equals the car's weight: F = mg = (1200 kg)(10 m/s²) = 12,000 N. Power is the rate of doing work, and for a constant force along the motion P = Fv = (12,000 N)(2.0 m/s) = 24,000 W (24 kW). Equivalently, the car gains mgh = 12,000 × 2.0 = 24,000 J of potential energy each second.\n\n(A) is wrong because 2,400 W leaves out g, multiplying the mass by the speed, (1200)(2.0); the force must be the weight in newtons.\n(B) is wrong because 12,000 W is the numerical value of the force in newtons, not the power; it must be multiplied by the 2.0 m/s speed.\n(D) is wrong because 48,000 W doubles the correct power, as if the force were 2mg or the speed 4.0 m/s; at constant speed F = mg."
  }
];

export default EXAM_1_QUESTIONS;
