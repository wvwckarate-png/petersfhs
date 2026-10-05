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
