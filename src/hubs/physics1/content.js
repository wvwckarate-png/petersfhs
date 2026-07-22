const STUDY_CONTENT = {
  1: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Kinematics</h1>
  <p class="sub">This is the language the rest of the course is written in. Forces, energy, momentum, rotation, oscillations — every one of those units eventually asks "so how does it move?" and the answer always comes back to the tools built here. Learn this unit properly and the rest of the year gets noticeably easier.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 10–15%</span>
    <span class="pill">7 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s11">1.1 Position, Displacement, and Distance</a></li>
    <li><a href="#s12">1.2 Velocity and Speed</a></li>
    <li><a href="#s13">1.3 Acceleration</a></li>
    <li><a href="#s14">1.4 Motion Graphs</a></li>
    <li><a href="#s15">1.5 Kinematic Equations</a></li>
    <li><a href="#s16">1.6 Free Fall</a></li>
    <li><a href="#s17">1.7 Projectile Motion</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Matching the Tool to What You're Given</span>
    <p>Almost every kinematics problem is really the same question in disguise: "given some of these quantities — position, velocity, acceleration, time — find the rest." The whole unit is just different tools for that one job:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Graphs</strong> — use when you're handed a picture instead of numbers. Slope and area do almost all the work.</li>
      <li><strong>The four kinematic equations</strong> — use when acceleration is constant and you have numbers. Pick the one equation that's missing the variable you don't know and don't need.</li>
      <li><strong>Vertical vs. horizontal in projectile motion</strong> — the same equations, just applied twice, completely independently, once for each direction.</li>
    </ul>
    <p style="margin-top:10px;">Before doing any math, write down what you know and what you're asked for. Which tool to reach for almost always falls out of that list on its own.</p>
  </div>

  <h2 id="s11"><span class="num">1.1</span>Position, Displacement, and Distance</h2>
  <p>Physics loves precise language, and this section is where that habit starts paying off. In everyday speech, "how far did you go?" is one question. In physics, it's actually two different questions wearing the same words, and mixing them up is the single most common early mistake in this unit.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p><strong>Distance</strong> is the total length of the path traveled — it only ever adds up, never cancels. <strong>Displacement</strong> is the straight-line change in position, from start to finish, and it's a vector — it has both a size and a direction, and it can partially or fully cancel itself out. Walk 10 m east then 10 m back west, and you've traveled a distance of 20 m, but your displacement is exactly zero.</p>
  </div>

  <p>Position itself is just a vector describing where something is relative to a chosen origin — and that word "chosen" matters more than it sounds like it should. There's no universal zero point built into the universe; you get to pick where x = 0 is, and once you do, stick with it for the entire problem. Displacement is then just the change in that position: Δx = x<sub>final</sub> − x<sub>initial</sub>, never the other way around.</p>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Displacement can be negative — that's not an error, it's information. A negative Δx just means the object ended up in the negative direction relative to where it started, given whatever direction you called positive. Don't "fix" a negative answer by dropping the sign; the sign is often the whole point of the question.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Distance vs. Displacement.</strong> A runner starts at the 0 m mark, runs to the 300 m mark, then turns around and runs back to the 100 m mark. Find the total distance traveled and the total displacement.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Distance just adds up path length, direction be damned: 300 m out, then 200 m back, for a total distance of 300 + 200 = <strong>500 m</strong>. Displacement only cares about start and finish: the runner started at 0 m and ended at 100 m, so Δx = 100 − 0 = <strong>100 m</strong>. Notice how different these two numbers are, even though they're describing the exact same run — that gap is precisely why physics insists on keeping the two ideas separate.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain the difference between distance and displacement, using a concrete example.</li>
      <li>Compute displacement correctly, including its sign, given a start and end position.</li>
      <li>Recognize that distance can never decrease during motion, while displacement can increase, decrease, or even return to zero.</li>
    </ul>
  </div>

  <h2 id="s12"><span class="num">1.2</span>Velocity and Speed</h2>
  <p>Velocity and speed have the exact same relationship to each other that displacement and distance do — and for the exact same reason. Speed is how fast something is going, full stop. Velocity is how fast something is going, in a specific direction. One's a vector, one's a scalar, and once you've internalized that pattern from 1.1, this section is really just applying it to a rate instead of a raw quantity.</p>

  <div class="eq">
    <div class="main">v<sub>avg</sub> = Δx / Δt</div>
    <div class="sub">average velocity = displacement ÷ elapsed time</div>
  </div>

  <p>Average speed, by contrast, is total distance divided by total time. Those two formulas look almost identical, but plugging in distance instead of displacement is exactly the kind of substitution that quietly changes the entire answer.</p>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>A round trip — go somewhere and come back to the exact same spot — always has an average velocity of exactly zero, no matter how fast you were moving or how long the trip took. Displacement over the whole trip is zero, so v<sub>avg</sub> = 0/Δt = 0. Average <em>speed</em> for that same trip is very much not zero. If a problem gives you a round trip and asks for "average velocity," the answer is often zero before you do any other math at all.</p>
  </div>

  <p>Instantaneous velocity is the velocity at one specific moment in time — think of it as what a speedometer reads at that instant, direction included. Graphically, this is the slope of the position-vs-time graph at that exact point, which is a preview of the connection Section 1.4 leans on heavily.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>A Round Trip.</strong> A cyclist rides 12 km east in 40 minutes, then rides back 12 km west in 30 minutes. Find the average speed and average velocity for the entire trip.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Total distance is 12 + 12 = 24 km; total time is 40 + 30 = 70 min = 7/6 hr. Average speed = 24 ÷ (7/6) ≈ <strong>20.6 km/hr</strong>. Total displacement, though, is 12 km east minus 12 km west = <strong>0 km</strong>, so average velocity = 0 ÷ (7/6 hr) = <strong>0 km/hr</strong>. The cyclist was clearly moving the entire time — average speed captures that — but ended up exactly where they started, which is what average velocity is actually reporting.</div>
    </details>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Slope is about to become your best friend</div>
    <p>Velocity is nothing more than the <em>slope</em> of a position-vs-time graph. Steeper slope, faster motion. Flat slope, at rest. Negative slope, moving in the negative direction. This one connection — velocity is slope — is going to reappear constantly for the rest of the unit, and honestly, for the rest of the course.</p>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Distinguish average speed from average velocity, and identify when a problem's answer for velocity is simply zero.</li>
      <li>Compute average velocity from a displacement and a time interval, including the correct sign.</li>
      <li>Connect instantaneous velocity to the slope of a position-time graph.</li>
    </ul>
  </div>

  <h2 id="s13"><span class="num">1.3</span>Acceleration</h2>
  <p>Acceleration is the rate at which velocity itself changes — and this is where a lot of students' intuition, built on the everyday meaning of "accelerate," starts working against them. In physics, acceleration doesn't just mean "speeding up." It means any change in velocity at all: speeding up, slowing down, or even just changing direction while moving at a constant speed.</p>

  <div class="eq">
    <div class="main">a<sub>avg</sub> = Δv / Δt</div>
    <div class="sub">average acceleration = change in velocity ÷ elapsed time</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Negative acceleration does <strong>not</strong> automatically mean "slowing down." Whether an object is speeding up or slowing down depends on whether velocity and acceleration point in the <em>same</em> direction (speeding up) or <em>opposite</em> directions (slowing down) — not on the sign of acceleration by itself. A car moving in the negative direction that speeds up has negative velocity <strong>and</strong> negative acceleration, both pointing the same way. Always compare the two signs to each other, never read acceleration's sign in isolation.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Reading the Signs.</strong> A ball is thrown straight up. Taking up as positive, describe the sign of its velocity and acceleration on the way up, and again on the way down.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">On the way up: the ball moves in the positive direction, so velocity is positive. Gravity never stops pulling down, so acceleration is negative the entire time — velocity and acceleration point opposite ways, meaning the ball is <strong>slowing down</strong>, exactly as you'd expect on the way up. On the way down: velocity is now negative (moving in the negative direction), while acceleration is still negative (gravity hasn't changed at all). Same-signed velocity and acceleration now mean the ball is <strong>speeding up</strong> as it falls. Notice that acceleration itself never changed sign anywhere in this problem — only velocity did.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain why acceleration is not the same thing as "speeding up."</li>
      <li>Determine whether an object is speeding up or slowing down by comparing the signs of its velocity and acceleration.</li>
      <li>Compute average acceleration from a change in velocity and a time interval.</li>
    </ul>
  </div>

  <h2 id="s14"><span class="num">1.4</span>Motion Graphs</h2>
  <p>This section is where position, velocity, and acceleration stop being three separate topics and start being three views of the exact same motion. Once you can fluently translate between an x-t graph, a v-t graph, and an a-t graph, an enormous share of this unit's questions become genuinely fast to answer — often without touching a single equation.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Slope Goes Down, Area Goes Up</span>
    <p>Moving from position → velocity → acceleration, you take a <strong>slope</strong> at each step. Moving the other direction, from acceleration → velocity → position, you find the <strong>area under the curve</strong> at each step. Slope of an x-t graph gives velocity; slope of a v-t graph gives acceleration. Area under a v-t graph gives displacement; area under an a-t graph gives the change in velocity.</p>
  </div>

  <table class="formula-table">
    <thead><tr><th>Graph</th><th>Slope tells you</th><th>Area under curve tells you</th></tr></thead>
    <tbody>
      <tr><td>Position vs. time (x-t)</td><td>Velocity</td><td>Not typically used</td></tr>
      <tr><td>Velocity vs. time (v-t)</td><td>Acceleration</td><td>Displacement (Δx)</td></tr>
      <tr><td>Acceleration vs. time (a-t)</td><td>Not typically used</td><td>Change in velocity (Δv)</td></tr>
    </tbody>
  </table>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>A curved (not straight) x-t graph does <strong>not</strong> mean the object is moving faster because the line looks "steeper overall." A curving x-t graph means the <em>slope itself is changing</em> — which means velocity is changing, which means the object is accelerating. Don't judge speed by how far the curve has traveled vertically; judge it by the slope at that specific instant, drawn as a tangent line if the curve isn't straight.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Reading a v-t Graph.</strong> An object's velocity-time graph shows velocity increasing in a straight line from 0 m/s to 8 m/s over the first 4 s, then staying constant at 8 m/s for the next 3 s. Find the object's acceleration during the first 4 s, and its total displacement over the full 7 s.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Acceleration is the slope of the v-t graph: during the first 4 s, slope = (8 − 0)/(4 − 0) = <strong>2 m/s²</strong>. For displacement, find the total area under the v-t graph. The first 4 s forms a triangle: area = ½(4)(8) = 16 m. The next 3 s forms a rectangle: area = (3)(8) = 24 m. Total displacement = 16 + 24 = <strong>40 m</strong>. Notice that breaking an irregular area into simple triangle-and-rectangle pieces, rather than trying to handle it all at once, is really the whole skill here.</div>
    </details>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The reflex worth building right now</div>
    <p>Whenever you're handed a motion graph, before doing any calculation, ask yourself: "is the question about a slope, or an area?" Almost every graph-reading question on this exam sorts cleanly into one of those two buckets, and just naming which bucket you're in tells you exactly what operation to perform.</p>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Extract velocity from the slope of an x-t graph, and acceleration from the slope of a v-t graph.</li>
      <li>Extract displacement from the area under a v-t graph, breaking irregular shapes into simple pieces.</li>
      <li>Sketch a qualitatively correct v-t or a-t graph given a verbal description of motion, and vice versa.</li>
    </ul>
  </div>

  <h2 id="s15"><span class="num">1.5</span>Kinematic Equations for Constant Acceleration</h2>
  <p>These four equations are the algebraic engine of the whole unit — but they come with one condition that's easy to forget under time pressure: they only work when acceleration is <strong>constant</strong>. If acceleration is changing, none of these four equations apply directly, and you need to fall back on graphs or calculus-style reasoning instead.</p>

  <table class="formula-table">
    <thead><tr><th>Equation</th><th>Missing variable</th></tr></thead>
    <tbody>
      <tr><td>v = v<sub>0</sub> + at</td><td>Δx (position)</td></tr>
      <tr><td>Δx = v<sub>0</sub>t + ½at²</td><td>v (final velocity)</td></tr>
      <tr><td>v² = v<sub>0</sub>² + 2aΔx</td><td>t (time)</td></tr>
      <tr><td>Δx = ½(v<sub>0</sub> + v)t</td><td>a (acceleration)</td></tr>
    </tbody>
  </table>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Pick the Equation Missing What You Don't Have</span>
    <p>Each of these four equations is deliberately missing exactly one of the five kinematic variables (v<sub>0</sub>, v, a, t, Δx). The fastest way to solve any constant-acceleration problem is to list what you're given, circle what you're asked to find, and then pick whichever equation doesn't require the one variable you were never given in the first place.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>These equations assume a single, constant acceleration for the entire time interval you're plugging into them. If a problem describes motion in two separate phases — say, speeding up, then moving at constant velocity — you cannot use one of these equations across the whole thing at once. Split the motion into separate phases, solve each one with its own constant acceleration, and connect them using the final state of one phase as the starting state of the next.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>Braking Distance.</strong> A car traveling at 24 m/s brakes with a constant deceleration of 6.0 m/s². Find how far it travels before coming to a stop.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">List what's given: v<sub>0</sub> = 24 m/s, v = 0 (stopped), a = −6.0 m/s² (deceleration, opposing motion). We're not given time, and we don't need it — so reach for the equation missing t: v² = v<sub>0</sub>² + 2aΔx. Plugging in: 0² = 24² + 2(−6.0)Δx, so 0 = 576 − 12Δx, giving Δx = 576/12 = <strong>48 m</strong>. Notice how picking the equation without t saved an entire extra step of first solving for time before getting to distance.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the condition (constant acceleration) required for the four kinematic equations to apply.</li>
      <li>Choose the correct kinematic equation based on which variable is missing from a problem.</li>
      <li>Solve a multi-phase motion problem by splitting it into separate constant-acceleration segments.</li>
    </ul>
  </div>

  <h2 id="s16"><span class="num">1.6</span>Free Fall</h2>
  <p>Free fall is simply the special case where the only acceleration acting on an object is gravity — no air resistance, no other forces. It's the single most common constant-acceleration scenario on this exam, precisely because it lets you skip straight to the kinematic equations with one variable already filled in for you.</p>

  <div class="eq">
    <div class="main">a = −g = −9.8 m/s²</div>
    <div class="sub">taking "up" as positive — gravity always points down, toward Earth</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — The Top of the Path Is Not "At Rest"</span>
    <p>An object thrown straight up has velocity equal to zero for one single instant at the very top of its path — but its acceleration is still exactly −g at that same instant, and every other instant, the whole way up and the whole way down. "Velocity is zero" and "acceleration is zero" are two completely different statements, and mixing them up at the peak of a trajectory is one of the most common errors on this entire exam.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>An object thrown straight up and one simply dropped from the same height, released at the peak height of the first object's path, hit the ground with different total flight times but the exact same acceleration throughout — gravity doesn't change based on what an object is doing. Don't assume "in the air longer" means "different acceleration." It almost always just means a different starting velocity.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Thrown Upward.</strong> A ball is thrown straight up with an initial speed of 15 m/s. Find how long it takes to reach its highest point, and find that maximum height.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">At the highest point, v = 0. Using v = v<sub>0</sub> + at with a = −9.8 m/s²: 0 = 15 + (−9.8)t, so t = 15/9.8 ≈ <strong>1.53 s</strong>. For maximum height, use v² = v<sub>0</sub>² + 2aΔx: 0² = 15² + 2(−9.8)Δx, giving Δx = 225/19.6 ≈ <strong>11.5 m</strong>. Notice both calculations used v = 0 as the defining condition of "the top" — that's the reflex worth keeping: the top of a vertical throw is always a v = 0 problem, never an a = 0 problem.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the acceleration of any object in free fall, and explain why it never changes during the motion.</li>
      <li>Correctly identify that velocity, not acceleration, equals zero at the peak of a vertical throw.</li>
      <li>Solve for time, height, or velocity in a free-fall scenario using the kinematic equations from 1.5.</li>
    </ul>
  </div>

  <h2 id="s17"><span class="num">1.7</span>Projectile Motion</h2>
  <p>This is the payoff section for the whole unit — the moment where 1D motion becomes 2D motion, and it turns out you already have every tool you need. Nothing new gets invented here; you're just going to apply everything from Sections 1.1 through 1.6 twice, once horizontally and once vertically, completely independently of each other.</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>This is the idea that unlocks the whole section</div>
    <p>Horizontal and vertical motion are <strong>completely independent</strong> of each other. Gravity only ever acts vertically, so horizontal velocity never changes throughout the entire flight — it's constant-velocity motion in that direction, full stop. Meanwhile, vertical motion is just Section 1.6's free fall, playing out exactly as it would if the object had no horizontal motion at all. Split every projectile problem into an easy horizontal half and a familiar vertical half, and solve them almost as two separate problems that happen to share one number: time.</p>
  </div>

  <table class="formula-table">
    <thead><tr><th>Direction</th><th>Acceleration</th><th>What stays constant</th></tr></thead>
    <tbody>
      <tr><td>Horizontal (x)</td><td>0</td><td>v<sub>x</sub> — never changes during flight</td></tr>
      <tr><td>Vertical (y)</td><td>−g</td><td>Nothing — v<sub>y</sub> changes constantly</td></tr>
    </tbody>
  </table>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Time Is the Bridge</span>
    <p>Time is the one quantity shared by both the horizontal and vertical halves of a projectile's motion — it's the bridge that connects them. A typical strategy: use the vertical half (a free-fall problem) to solve for the total time of flight, then plug that same time into the horizontal half (a constant-velocity problem) to find horizontal distance, or vice versa.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Never use vertical numbers (like v<sub>y</sub> or the vertical distance fallen) inside a horizontal equation, or horizontal numbers inside a vertical one. This sounds obvious written out, but under time pressure it's an extremely easy mix-up — especially when a problem gives you an angled launch velocity and you have to remember to break it into its horizontal and vertical components (v<sub>x</sub> = v·cosθ, v<sub>y</sub> = v·sinθ) before doing anything else.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 7</span>
    <p><strong>Horizontal Launch.</strong> A ball rolls off a table 1.2 m high with a horizontal speed of 3.0 m/s. Find how far from the base of the table it lands.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Split into two halves. Vertical half: the ball starts with v<sub>y</sub> = 0 (purely horizontal launch) and falls 1.2 m under gravity. Using Δy = v<sub>0y</sub>t + ½at²: −1.2 = 0 + ½(−9.8)t², so t² = 2.4/9.8 ≈ 0.245, giving t ≈ <strong>0.49 s</strong>. Horizontal half: horizontal velocity never changes, so Δx = v<sub>x</sub>t = (3.0)(0.49) ≈ <strong>1.5 m</strong>. Notice the horizontal speed (3.0 m/s) never once entered the vertical calculation, and the fall height (1.2 m) never once entered the horizontal calculation — that separation is the entire method.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain why horizontal and vertical motion in a projectile are independent of each other.</li>
      <li>Break an angled launch velocity into horizontal and vertical components.</li>
      <li>Solve a projectile motion problem by using time as the connecting variable between the horizontal and vertical halves.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 1 Practice Set</h2>
  <p>Work through every problem before checking the answer key — for anything asking you to "explain," actually write out the physical reasoning in words, exactly like the real exam expects.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Can an object have zero velocity and nonzero acceleration at the same instant? Give a real example.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A car travels in a perfect circle, returning to its starting point after one full lap at constant speed. Find its average velocity and its average speed for the lap, and explain the difference.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Sketch a v-t graph for an object that starts at rest, speeds up at a constant rate, then moves at a constant velocity, then slows to a stop at a constant rate.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Two balls are launched horizontally from the same height at the same instant, one twice as fast as the other. Which one hits the ground first? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>An object's position-time graph is a straight line with negative slope. Describe its velocity and acceleration.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A hiker walks 3.0 km north, then 4.0 km east. Find the magnitude of the hiker's total displacement.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A car accelerates from 10 m/s to 26 m/s in 8.0 s. Find its acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A train decelerates from 30 m/s to rest over a distance of 450 m. Find its acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A stone is dropped from rest from a bridge and hits the water 2.2 s later. Find the height of the bridge above the water.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A v-t graph shows an object's velocity decreasing in a straight line from 20 m/s to 0 m/s over 5.0 s. Find the object's displacement over that time.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A projectile is launched at 40 m/s at an angle of 30° above the horizontal. Find its initial horizontal and vertical velocity components.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A ball rolls off a 2.0 m high table with a horizontal speed of 4.0 m/s. Find the time it takes to hit the floor and the horizontal distance it travels.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A cyclist accelerates from rest at 1.5 m/s² for 6.0 s, then continues at constant velocity for 10 s. Find the total distance traveled.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Yes — the top of a vertical throw is the classic example. Velocity is exactly zero for an instant at the peak, but gravity (acceleration) never stops acting, even at that instant.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Average velocity is zero, since the car returns to its exact starting position (displacement = 0). Average speed is nonzero, since the car covered real distance (the full circumference) the whole way around — distance never cancels the way displacement can.</div></details>
    <details><summary>Question 3</summary><div class="a-content">A line rising from the origin at a constant positive slope, then a flat horizontal segment at some positive value, then a line falling at a constant negative slope back down to zero.</div></details>
    <details><summary>Question 4</summary><div class="a-content">They hit at the exact same time. Vertical motion (which determines when each ball reaches the ground) depends only on the fall height and gravity — both identical for both balls — and is completely independent of horizontal speed.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Velocity is constant and negative (a straight-line x-t graph means constant slope, and a negative slope means negative velocity). Acceleration is zero, since velocity isn't changing at all.</div></details>
    <details><summary>Question 6</summary><div class="a-content">Using the Pythagorean theorem on the two perpendicular displacement legs: √(3.0² + 4.0²) = √(9+16) = √25 = <strong>5.0 km</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">a = Δv/Δt = (26−10)/8.0 = <strong>2.0 m/s²</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">Using v² = v0² + 2aΔx: 0 = 30² + 2a(450), so a = −900/900 = <strong>−1.0 m/s²</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">Using Δy = v0t + ½at² with v0=0: Δy = ½(9.8)(2.2)² ≈ <strong>23.7 m</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">Displacement equals the area under the v-t graph — a triangle: ½(5.0)(20) = <strong>50 m</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">vx = v·cosθ = 40·cos30° ≈ <strong>34.6 m/s</strong>. vy = v·sinθ = 40·sin30° = <strong>20 m/s</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">Vertical: −2.0 = ½(−9.8)t², giving t ≈ <strong>0.64 s</strong>. Horizontal: Δx = (4.0)(0.64) ≈ <strong>2.6 m</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">Phase 1 (speeding up): Δx = ½(1.5)(6.0)² = 27 m, ending at v = (1.5)(6.0) = 9.0 m/s. Phase 2 (constant velocity): Δx = (9.0)(10) = 90 m. Total: 27 + 90 = <strong>117 m</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 1 QBank</strong> to drill these ideas, then move on to <strong>Unit 2 — Force and Translational Dynamics</strong>.
  </div>

</div>
`,
  2: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Force and Translational Dynamics</h1>
  <p class="sub">Unit 1 described how things move. This unit explains why. Newton's three laws are almost embarrassingly short to state — you could fit them on an index card — but they're the single most heavily tested idea on this exam, and free-body diagrams are the tool that makes them usable on an actual problem.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 18–23%</span>
    <span class="pill">9 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s21">2.1 Forces and Free-Body Diagrams</a></li>
    <li><a href="#s22">2.2 Newton's First Law and Equilibrium</a></li>
    <li><a href="#s23">2.3 Newton's Second Law</a></li>
    <li><a href="#s24">2.4 Newton's Third Law</a></li>
    <li><a href="#s25">2.5 Gravitational Force and Weight</a></li>
    <li><a href="#s26">2.6 Normal Force</a></li>
    <li><a href="#s27">2.7 Friction</a></li>
    <li><a href="#s28">2.8 Spring Force (Hooke's Law)</a></li>
    <li><a href="#s29">2.9 Ramps, Pulleys, and Multi-Body Systems</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Draw the Diagram Before You Write a Single Equation</span>
    <p>Every single problem in this unit, no matter how it's worded, starts the same way: isolate one object, draw every force acting <em>on</em> it (never forces it exerts on other things), and only then write F<sub>net</sub> = ma along whatever axis matters. Skipping the diagram and trying to jump straight to the algebra is where almost every error in this unit is born — a force gets forgotten, a sign gets flipped, an angle gets mismeasured. Draw it first, every time, even when it feels obvious.</p>
  </div>

  <h2 id="s21"><span class="num">2.1</span>Forces and Free-Body Diagrams</h2>
  <p>A force is simply a push or a pull — an interaction between two objects. That "between two objects" part matters more than it sounds like it should: a force never exists in isolation, floating around on its own. Every force has a specific source and a specific target, and keeping track of both is the whole game in this unit.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — A Free-Body Diagram Isolates One Object</span>
    <p>A free-body diagram (FBD) shows a single object as a dot, with arrows representing every force acting <strong>on</strong> that object, drawn roughly proportional to size and pointing in the correct direction. Nothing else belongs on the diagram — no forces the object exerts on anything else, no velocity arrows, no acceleration arrows. Just the forces landing on that one object.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>A very common early mistake is drawing a "force of motion" or a "forward force" pushing an object simply because it's moving. Motion by itself is not a force, and it doesn't need one to sustain it — that idea (that motion requires a constant push) is actually the exact misconception Newton's First Law was built to correct. Only draw forces that come from an actual physical source: gravity, a surface, a rope, a spring, a person's hand.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Building a Simple FBD.</strong> A box sits at rest on a horizontal floor. Identify every force acting on the box and sketch the free-body diagram.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Ask: what is physically touching or otherwise interacting with the box? The Earth is pulling it down via gravity — draw a downward arrow labeled F<sub>g</sub> (or mg). The floor is pushing back up on it — draw an upward arrow labeled F<sub>N</sub> (normal force). Nothing else is touching the box, so those are the only two forces. Since the box sits at rest, these two arrows should be drawn the same length, since they must balance for the box to stay still — a preview of Newton's First Law in the very next section.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain why a force always requires both a source and a target object.</li>
      <li>Draw a correct free-body diagram for a simple object, including only real, physically-sourced forces.</li>
      <li>Explain why "motion" itself is never drawn as a force on a free-body diagram.</li>
    </ul>
  </div>

  <h2 id="s22"><span class="num">2.2</span>Newton's First Law and Equilibrium</h2>
  <p>Newton's First Law says an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net (unbalanced) force. The genuinely radical part of this law, especially the first time you really sit with it, is that it says constant-velocity motion needs <em>no</em> force to keep going — it's rest that's the special case people usually assume is "natural," not motion.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Equilibrium Means Zero Net Force</span>
    <p>An object is in <strong>equilibrium</strong> whenever its net force is exactly zero — which includes both an object sitting still <em>and</em> an object cruising at constant velocity in a straight line. Both situations have zero acceleration, and Newton's First Law treats them identically. "At equilibrium" does not mean "at rest"; it means "not accelerating."</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Zero net force does <strong>not</strong> mean zero forces. A book resting on a table has two forces acting on it — gravity and the normal force — and they're both very real and nonzero. What makes it equilibrium is that those two forces are equal in magnitude and opposite in direction, so they cancel to a net force of zero. Don't confuse "the forces cancel" with "there are no forces."</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Two Ropes Holding a Sign.</strong> A 40 N sign hangs at rest, suspended by two vertical ropes that share the load equally. Find the tension in each rope.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">The sign is at rest, so it's in equilibrium — net force must be zero. Three forces act on the sign: gravity (40 N down) and two rope tensions (both up). For the net force to be zero, the two tensions together must add up to exactly 40 N upward. Since the ropes share the load equally, each one supplies half: T = 40/2 = <strong>20 N</strong> each.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State Newton's First Law in your own words, including both the at-rest and constant-velocity cases.</li>
      <li>Explain why equilibrium means zero net force, not zero forces.</li>
      <li>Solve a simple equilibrium problem by setting the sum of forces in a given direction equal to zero.</li>
    </ul>
  </div>

  <h2 id="s23"><span class="num">2.3</span>Newton's Second Law</h2>
  <p>This is the workhorse equation of the entire course. Nearly every dynamics problem you'll ever face, in this unit and beyond, eventually comes down to this one relationship.</p>

  <div class="eq">
    <div class="main">F<sub>net</sub> = ma</div>
    <div class="sub">net force = mass × acceleration — always along a single, chosen axis</div>
  </div>

  <p>F<sub>net</sub> here means the <em>vector sum</em> of every force acting on the object — not any single force by itself. In practice, this almost always means picking a direction to call positive, adding up every force component along that direction (with the correct signs), and setting that sum equal to ma.</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The pattern that unlocks the whole unit</div>
    <p>Every single dynamics problem in this course reduces to the same three moves: (1) draw the FBD, (2) sum the forces along the axis that matters, (3) set that sum equal to ma and solve. Ramps, pulleys, elevators, multi-object systems — every one of them is this same three-step process, just with a longer or trickier list of forces in step 2.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Acceleration always points in the same direction as the <em>net</em> force — never necessarily in the direction of motion, and never necessarily in the direction of any single individual force. An object can be moving right while its net force (and therefore its acceleration) points left, if it's decelerating. Always find the net force direction first; don't assume it matches whichever way the object happens to be moving.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>A Single Applied Force.</strong> A 5.0 kg box on a frictionless floor is pushed with a horizontal force of 15 N. Find its acceleration.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Vertically, gravity and the normal force cancel (the box doesn't accelerate up or down) — so only the horizontal direction matters here. The only horizontal force is the 15 N push, so F<sub>net</sub> = 15 N. Applying Newton's Second Law: a = F<sub>net</sub>/m = 15/5.0 = <strong>3.0 m/s²</strong>, in the direction of the push.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State Newton's Second Law and explain what F<sub>net</sub> actually means (a vector sum, not a single force).</li>
      <li>Apply the draw-sum-solve process to find acceleration given a set of forces.</li>
      <li>Explain why acceleration direction matches net force direction, not necessarily the direction of motion.</li>
    </ul>
  </div>

  <h2 id="s24"><span class="num">2.4</span>Newton's Third Law</h2>
  <p>For every action force, there's a reaction force — equal in magnitude, opposite in direction, acting on the <em>other</em> object in the interaction. This is probably the most commonly misquoted law in all of physics, and almost every misquote comes from missing that last part about which object each force acts on.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Third Law Pairs Never Act on the Same Object</span>
    <p>A Third Law pair always consists of two forces acting on <strong>two different objects</strong> — never both on the same object. Push on a wall, and the wall pushes back on you, equally hard, in the opposite direction. Those two forces can never cancel each other out on a free-body diagram, because they never appear on the same diagram in the first place — one acts on you, the other acts on the wall.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Gravity pulling a book down and the normal force pushing it up are <strong>not</strong> a Third Law pair, even though they're equal and opposite in a resting scenario. Both of those forces act on the <em>same</em> object (the book) — that makes them a coincidental balance from Newton's First Law, not a Third Law pair. A genuine Third Law pair for gravity would be: the book pulls the Earth upward, with exactly the same force the Earth pulls the book downward.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Identifying a Third Law Pair.</strong> A person stands still on the ground. Identify the Third Law reaction pair to the force of gravity pulling the person downward.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">The Earth pulls the person down with a gravitational force — that's the "action." The Third Law partner has to be the exact same TYPE of force (gravitational), equal in magnitude, opposite in direction, and acting on the OTHER object involved in that same interaction. So the reaction is: <strong>the person pulls the Earth upward</strong>, with a gravitational force of identical magnitude. Notice this is completely different from the normal force the ground exerts upward on the person — that's a separate interaction (contact, not gravity) with its own separate Third Law partner.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State Newton's Third Law precisely, including which two objects each pair of forces acts on.</li>
      <li>Correctly identify a genuine Third Law pair, and distinguish it from two forces that merely happen to balance on the same object.</li>
      <li>Explain why Third Law pairs can never cancel each other out on a single free-body diagram.</li>
    </ul>
  </div>

  <h2 id="s25"><span class="num">2.5</span>Gravitational Force and Weight</h2>
  <p>Weight is simply the force of gravity acting on an object's mass — and near Earth's surface, that relationship reduces to a strikingly simple equation.</p>

  <div class="eq">
    <div class="main">F<sub>g</sub> = mg</div>
    <div class="sub">g = 9.8 m/s² near Earth's surface</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Mass and weight are not the same thing, even though everyday language blurs them constantly. Mass is a fixed amount of matter, measured in kilograms — it doesn't change based on location. Weight is a <em>force</em>, measured in newtons, and it depends on the local gravitational field. Your mass on the Moon is identical to your mass on Earth; your weight is roughly one-sixth as much, because g is roughly one-sixth as strong there.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>Weight on Another World.</strong> An astronaut has a mass of 80 kg. Find her weight on Earth (g = 9.8 m/s²) and on the Moon (g = 1.6 m/s²).</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">On Earth: F<sub>g</sub> = mg = (80)(9.8) = <strong>784 N</strong>. On the Moon: F<sub>g</sub> = mg = (80)(1.6) = <strong>128 N</strong>. Her mass — 80 kg — never changed between the two calculations; only g changed, because weight depends on the local gravitational field, not on the object itself.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Distinguish mass from weight, including their units.</li>
      <li>Compute an object's weight given its mass and the local gravitational field strength.</li>
      <li>Explain why an object's weight, unlike its mass, changes from planet to planet.</li>
    </ul>
  </div>

  <h2 id="s26"><span class="num">2.6</span>Normal Force</h2>
  <p>The normal force is the push a surface exerts on an object in contact with it, always directed perpendicular ("normal," in the geometric sense) to that surface. It's a reaction force — the surface pushes back precisely because the object is pushing into it — and, crucially, its magnitude is <em>not</em> some fixed formula. It's whatever value is needed to satisfy Newton's Second Law in the direction perpendicular to the surface.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Normal Force Is Not Always Equal to Weight</span>
    <p>On a flat, horizontal surface with no other vertical forces, F<sub>N</sub> = mg — but that's a special case, not a universal rule. Add a downward push, an upward pull, an incline, or vertical acceleration (like in an elevator), and F<sub>N</sub> changes to whatever value keeps the vertical net force consistent with the actual vertical acceleration. Always derive F<sub>N</sub> from Newton's Second Law in that scenario — never just assume F<sub>N</sub> = mg out of habit.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Normal Force with an Extra Push.</strong> A 10 kg box sits on a horizontal floor. Someone pushes straight down on it with an additional 20 N. Find the normal force.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">The box isn't accelerating vertically, so the net vertical force is zero. Three vertical forces act: gravity (mg = 98 N, down), the extra push (20 N, down), and the normal force (up, unknown). Setting the sum to zero: F<sub>N</sub> − 98 − 20 = 0, so F<sub>N</sub> = <strong>118 N</strong> — noticeably more than mg alone, because the surface has to support the extra downward push too.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain what determines the normal force's direction and, more importantly, its magnitude.</li>
      <li>Correctly compute normal force in scenarios beyond the simple "flat surface, no other vertical forces" case.</li>
      <li>Explain why F<sub>N</sub> = mg is a special case, not a universal law.</li>
    </ul>
  </div>

  <h2 id="s27"><span class="num">2.7</span>Friction</h2>
  <p>Friction is a force that resists relative sliding between two surfaces in contact, and it comes in two flavors that behave quite differently from each other — mixing them up is one of the most common mistakes on this exam.</p>

  <table class="formula-table">
    <thead><tr><th>Type</th><th>When it applies</th><th>Formula</th></tr></thead>
    <tbody>
      <tr><td>Static friction</td><td>Object is NOT sliding (or on the verge of sliding)</td><td>f<sub>s</sub> ≤ μ<sub>s</sub>F<sub>N</sub> (a maximum, not a fixed value)</td></tr>
      <tr><td>Kinetic friction</td><td>Object IS actively sliding</td><td>f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> (a fixed value while sliding)</td></tr>
    </tbody>
  </table>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Static Friction Is a Range, Not a Number</span>
    <p>Kinetic friction always equals μ<sub>k</sub>F<sub>N</sub> while an object slides — full stop, every time. Static friction is different: it adjusts itself to exactly match whatever's needed to keep the object from sliding, up to a maximum value of μ<sub>s</sub>F<sub>N</sub>. A box sitting still under a small push isn't necessarily experiencing μ<sub>s</sub>F<sub>N</sub> of friction — it's experiencing exactly enough friction to keep the net force at zero, which could be far less than the maximum.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>μ<sub>s</sub> is (almost) always somewhat greater than μ<sub>k</sub> for the same pair of surfaces — it takes more force to get something moving than to keep it moving once it's already sliding. This is exactly why an object can require a noticeable shove to budge, then suddenly feel like it needs much less force to keep going once it starts.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 7</span>
    <p><strong>Kinetic Friction on a Sliding Box.</strong> A 4.0 kg box slides across a floor with μ<sub>k</sub> = 0.30. Find the kinetic friction force and the box's deceleration, assuming friction is the only horizontal force.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">First find the normal force: on a flat floor with no other vertical forces, F<sub>N</sub> = mg = (4.0)(9.8) = 39.2 N. Then kinetic friction: f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> = (0.30)(39.2) ≈ 11.8 N, directed opposite the sliding motion. Applying Newton's Second Law: a = f<sub>k</sub>/m = 11.8/4.0 ≈ <strong>2.9 m/s²</strong>, decelerating the box.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Distinguish static from kinetic friction, including which is a fixed value and which is a variable maximum.</li>
      <li>Compute kinetic friction force given the coefficient of kinetic friction and the normal force.</li>
      <li>Explain why μ<sub>s</sub> is typically greater than μ<sub>k</sub> for the same pair of surfaces.</li>
    </ul>
  </div>

  <h2 id="s28"><span class="num">2.8</span>Spring Force (Hooke's Law)</h2>
  <p>A stretched or compressed spring pushes or pulls back, always trying to return to its natural, unstretched length. This restoring behavior is described by one of the simplest force laws in the whole course.</p>

  <div class="eq">
    <div class="main">F<sub>spring</sub> = −kx</div>
    <div class="sub">k = spring constant (N/m) · x = displacement from the spring's natural length</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — The Negative Sign Means "Restoring"</span>
    <p>That minus sign isn't decorative — it's the whole point. The spring force always points opposite to the displacement: stretch a spring in the positive direction, and it pulls back in the negative direction; compress it in the negative direction, and it pushes back in the positive direction. This "always opposes the displacement" behavior is called a <strong>restoring force</strong>, and it's going to reappear as the entire foundation of Unit 7 (Oscillations).</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 8</span>
    <p><strong>Finding a Spring Constant.</strong> A spring stretches 0.12 m when a 3.0 N force is applied to it. Find the spring constant.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using the magnitude form of Hooke's Law, F = kx: 3.0 = k(0.12), so k = 3.0/0.12 = <strong>25 N/m</strong>. This tells you it takes 25 N of force for every meter you stretch this particular spring — a genuine property of the spring itself, independent of how far it's actually been stretched in any one instance.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State Hooke's Law and explain what the negative sign physically represents.</li>
      <li>Compute spring force, spring constant, or displacement given the other two quantities.</li>
      <li>Explain what makes a spring force a "restoring" force.</li>
    </ul>
  </div>

  <h2 id="s29"><span class="num">2.9</span>Ramps, Pulleys, and Multi-Body Systems</h2>
  <p>This section doesn't introduce any new physics at all — it's entirely about applying Sections 2.1 through 2.8 to more elaborate setups. The math gets a little longer, but the underlying method (draw the FBD, sum the forces, apply F=ma) never changes.</p>

  <div class="skillbox">
    <span class="tag-label skill">Exam Skill: Tilting Your Axes on a Ramp</span>
    <p>On an incline, the standard move is to rotate your coordinate system so that one axis runs parallel to the ramp's surface and the other runs perpendicular to it — rather than sticking with strict horizontal/vertical axes. Gravity then needs to be broken into components: mg·sinθ along the ramp (driving the object down the slope) and mg·cosθ perpendicular to the ramp (balanced by the normal force). This single reframing turns a two-dimensional problem into two much simpler one-dimensional ones.</p>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Connected Objects Share One Acceleration</span>
    <p>When two objects are connected by a rope or string over a pulley (an Atwood machine, for instance), they're forced to move together — speeding up and slowing down in lockstep, even though they might be moving in different directions in space (one up, one down, say). That shared magnitude of acceleration is what lets you write one F<sub>net</sub> = ma equation for each object separately, then combine the two equations to solve for both the tension and the acceleration together.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 9</span>
    <p><strong>A Frictionless Atwood Machine.</strong> Two masses, 6.0 kg and 4.0 kg, hang from opposite ends of a rope over a frictionless, massless pulley. Find the acceleration of the system and the tension in the rope.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">The heavier mass (6.0 kg) will accelerate downward; the lighter mass (4.0 kg) will accelerate upward, both with the same magnitude a. For the 6.0 kg mass (taking down as positive for it): m<sub>1</sub>g − T = m<sub>1</sub>a. For the 4.0 kg mass (taking up as positive for it): T − m<sub>2</sub>g = m<sub>2</sub>a. Adding these two equations together, T cancels: m<sub>1</sub>g − m<sub>2</sub>g = m<sub>1</sub>a + m<sub>2</sub>a, so a = g(m<sub>1</sub>−m<sub>2</sub>)/(m<sub>1</sub>+m<sub>2</sub>) = 9.8(2.0)/10 ≈ <strong>1.96 m/s²</strong>. Substituting back into the second equation: T = m<sub>2</sub>(g+a) = 4.0(9.8+1.96) ≈ <strong>47 N</strong>. Notice how adding the two equations together was the key move — it eliminated the unknown tension and left a single equation with only acceleration in it.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Break gravity into components parallel and perpendicular to an incline.</li>
      <li>Explain why connected objects share the same magnitude of acceleration.</li>
      <li>Set up and solve a two-object Atwood-machine-style problem for both acceleration and tension.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 2 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A ball is in projectile motion, moving through the air after being thrown. Is the "force of the throw" still acting on it while it flies? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>Explain why the normal force on a book resting on an incline is less than the book's weight.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>A rocket in deep space, far from any planet, fires its engine and accelerates. Identify the Third Law reaction pair to the force the rocket exerts on the expelled exhaust gas.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A box sits still on a rough floor under a horizontal push too small to move it. Is the friction force on the box equal to μ<sub>s</sub>F<sub>N</sub>? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Two blocks of different mass are connected by a string over a pulley, hanging on either side. Explain why both blocks have the same magnitude of acceleration.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A net force of 24 N acts on an 8.0 kg object. Find its acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the weight of a 15 kg object on Earth.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A 12 kg box on a horizontal floor is pushed with a 40 N horizontal force; μ<sub>k</sub> = 0.20. Find the box's acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A spring with k = 150 N/m is compressed 0.080 m. Find the magnitude of the spring force.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A 5.0 kg block sits on a frictionless 30° incline. Find its acceleration down the ramp.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A 2.0 kg object accelerates upward at 3.0 m/s² when lifted by a rope. Find the tension in the rope.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Two masses, 8.0 kg and 5.0 kg, are connected over a frictionless pulley (Atwood machine). Find the system's acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A 10 kg box is pulled by a rope at a 37° angle above horizontal with 50 N of tension across a frictionless floor. Find the box's horizontal acceleration. (cos37° ≈ 0.80)</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">No. There's no ongoing "force of the throw" — once the ball leaves the hand, the only force acting on it is gravity (ignoring air resistance). The ball continues moving forward simply because of Newton's First Law (inertia), not because some force is still pushing it.</div></details>
    <details><summary>Question 2</summary><div class="a-content">On an incline, gravity splits into a component perpendicular to the surface (mg·cosθ) and a component along the surface (mg·sinθ). The normal force only has to balance the perpendicular component, mg·cosθ, which is less than the full weight mg whenever θ > 0.</div></details>
    <details><summary>Question 3</summary><div class="a-content">The exhaust gas pushes back on the rocket with an equal and opposite force. (The rocket pushes the gas one way; by Newton's Third Law, the gas pushes the rocket the other way — this is literally how rocket propulsion works.)</div></details>
    <details><summary>Question 4</summary><div class="a-content">No. Since the box isn't moving, static friction adjusts to exactly match the applied push, keeping net force at zero — it isn't necessarily at its maximum possible value (μ<sub>s</sub>F<sub>N</sub>) unless the push is right at the threshold of causing sliding.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Because they're connected by an inextensible string, the two blocks must move together — whatever distance one travels, the other travels too, in the same amount of time, forcing their speeds and accelerations to match in magnitude even though they move in different directions (one up, one down).</div></details>
    <details><summary>Question 6</summary><div class="a-content">a = F/m = 24/8.0 = <strong>3.0 m/s²</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">F<sub>g</sub> = mg = (15)(9.8) = <strong>147 N</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">F<sub>N</sub> = mg = (12)(9.8) = 117.6 N. f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> = 0.20(117.6) ≈ 23.5 N. F<sub>net</sub> = 40 − 23.5 = 16.5 N. a = 16.5/12 ≈ <strong>1.4 m/s²</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">F = kx = (150)(0.080) = <strong>12 N</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">On a frictionless incline, a = g·sinθ = 9.8(sin30°) = 9.8(0.50) = <strong>4.9 m/s²</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">T − mg = ma, so T = m(g+a) = 2.0(9.8+3.0) = <strong>25.6 N</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">a = g(m1−m2)/(m1+m2) = 9.8(8.0−5.0)/(13) = 9.8(3.0)/13 ≈ <strong>2.3 m/s²</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">Horizontal component of tension: T·cos37° = 50(0.80) = 40 N. a = F/m = 40/10 = <strong>4.0 m/s²</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 2 QBank</strong> to drill these ideas, then move on to <strong>Unit 3 — Work, Energy, and Power</strong>.
  </div>

</div>
`,
  3: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Work, Energy, and Power</h1>
  <p class="sub">Force and Newton's laws let you track motion moment by moment, force by force. Energy is a different kind of bookkeeping entirely — instead of tracking every instant, you just compare a "before" snapshot to an "after" snapshot. For a huge number of problems, that shortcut is dramatically faster than grinding through kinematics and forces directly.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 18–23%</span>
    <span class="pill">6 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s31">3.1 Work Done by a Constant Force</a></li>
    <li><a href="#s32">3.2 Kinetic Energy and the Work-Energy Theorem</a></li>
    <li><a href="#s33">3.3 Gravitational and Elastic Potential Energy</a></li>
    <li><a href="#s34">3.4 Conservation of Mechanical Energy</a></li>
    <li><a href="#s35">3.5 Non-Conservative Forces and Energy Dissipation</a></li>
    <li><a href="#s36">3.6 Power</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Before and After, Not Moment by Moment</span>
    <p>Energy methods trade the moment-by-moment tracking of forces and kinematics for a much simpler question: what was the total mechanical energy at the START, and what is it at the END? If no non-conservative force does work in between (like friction), those two numbers are equal — conservation of energy. If something DOES do work in between, the difference between start and end tells you exactly how much. Whenever a problem gives you heights, speeds, or spring compressions and doesn't seem to care about the path taken to get there, that's your signal to reach for energy instead of forces.</p>
  </div>

  <h2 id="s31"><span class="num">3.1</span>Work Done by a Constant Force</h2>
  <p>In physics, "work" has a specific, narrow meaning that doesn't always match the everyday sense of the word. Holding a heavy box perfectly still, no matter how tiring it feels, does zero work on that box — because work requires actual displacement.</p>

  <div class="eq">
    <div class="main">W = Fd·cosθ</div>
    <div class="sub">θ = angle between the force and the displacement direction</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Only the Force Component Along the Motion Counts</span>
    <p>That cosθ factor is doing real work in this formula (pun intended). If a force is applied at an angle to the direction of motion, only the piece of that force pointing along the direction of travel actually contributes to work — the perpendicular piece contributes nothing at all, no matter how large it is. A force applied exactly perpendicular to motion (θ = 90°) does zero work, since cos90° = 0.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Work can be negative. If a force has a component pointing opposite the direction of motion — like friction acting on a moving object, or gravity acting on something moving upward — the work done by that force is negative (θ is between 90° and 180°, making cosθ negative). Negative work doesn't mean "less work happened"; it means that particular force is actively removing energy from the object's motion.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Work at an Angle.</strong> A 60 N force is applied at 40° above the horizontal to drag a crate 5.0 m across a floor. Find the work done by this force. (cos40° ≈ 0.77)</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">The displacement is horizontal, and the force is applied at 40° from that direction, so θ = 40° in the work formula. W = Fd·cosθ = (60)(5.0)(0.77) ≈ <strong>231 J</strong>. Notice that only the horizontal component of the 60 N force — not its full magnitude — actually contributed to moving the crate forward; the formula automatically accounts for that through the cosine factor.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain why holding a stationary object does zero work, even if it's tiring.</li>
      <li>Compute work done by a constant force applied at an angle to the displacement.</li>
      <li>Explain what it physically means for a force to do negative work.</li>
    </ul>
  </div>

  <h2 id="s32"><span class="num">3.2</span>Kinetic Energy and the Work-Energy Theorem</h2>
  <p>Kinetic energy is the energy an object has because it's moving. The work-energy theorem is the bridge connecting Section 3.1's work directly to changes in an object's motion — and it's one of the most useful shortcuts in the entire course.</p>

  <div class="eq">
    <div class="main">KE = ½mv² &nbsp;·&nbsp; W<sub>net</sub> = ΔKE</div>
    <div class="sub">the net work done on an object equals its change in kinetic energy</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Why this is such a powerful shortcut</div>
    <p>The work-energy theorem lets you find a final speed WITHOUT ever solving for acceleration or time. If you know the net work done on an object and its starting kinetic energy, you know its ending kinetic energy directly — and from there, its final speed. For problems where forces or accelerations aren't constant (a spring's force, for instance, changes as it compresses), this is often the only practical way to solve the problem at all.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>W<sub>net</sub> in this theorem means the work done by the NET force — equivalently, the sum of the work done by every individual force acting on the object. It is not just the work done by whichever force happens to be mentioned first in a problem. If multiple forces act on an object, either find the net force first and compute its work, or compute the work done by each force separately and add them together — both approaches give the same answer.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Using the Work-Energy Theorem.</strong> A 2.0 kg object starts at rest and has 40 J of net work done on it. Find its final speed.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Since the object starts at rest, its initial KE is zero. By the work-energy theorem, W<sub>net</sub> = ΔKE = KE<sub>final</sub> − 0, so KE<sub>final</sub> = 40 J. Solving ½mv² = 40 for v: v² = 2(40)/2.0 = 40, so v = √40 ≈ <strong>6.3 m/s</strong>. Notice this was solved without ever needing to know the force, the distance individually, the acceleration, or the time — just the total net work and the mass.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute kinetic energy given mass and speed.</li>
      <li>State the work-energy theorem and explain what "net work" means in this context.</li>
      <li>Use the work-energy theorem to find a final speed without solving for acceleration first.</li>
    </ul>
  </div>

  <h2 id="s33"><span class="num">3.3</span>Gravitational and Elastic Potential Energy</h2>
  <p>Potential energy is stored energy — energy an object has because of its position or configuration, ready to be converted into motion. This section covers the two forms of potential energy that show up constantly in this course.</p>

  <div class="eq">
    <div class="main">PE<sub>grav</sub> = mgh &nbsp;·&nbsp; PE<sub>elastic</sub> = ½kx²</div>
    <div class="sub">h = height above a chosen reference level · x = displacement from a spring's natural length</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Only the Height Reference Point Is Arbitrary</span>
    <p>Just like position in Unit 1, the "zero" of gravitational potential energy is a choice you get to make — call the ground h=0, or call a tabletop h=0, and get different PE<sub>grav</sub> numbers for the exact same physical scenario. That's fine, because physics only ever cares about <em>changes</em> in potential energy, and ΔPE comes out identical no matter which reference point you picked, as long as you're consistent within a single problem.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Elastic potential energy depends on x<em>squared</em>, not on x directly — unlike the spring force itself, which is linear in x. This means doubling a spring's compression doesn't double its stored energy; it quadruples it. Don't accidentally borrow the linear F=kx relationship when you actually need the energy formula.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Gravitational vs. Elastic PE.</strong> A 3.0 kg object sits 4.0 m above the ground. Separately, a spring with k = 200 N/m is compressed 0.15 m. Find each potential energy.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Gravitational: PE<sub>grav</sub> = mgh = (3.0)(9.8)(4.0) ≈ <strong>117.6 J</strong>. Elastic: PE<sub>elastic</sub> = ½kx² = ½(200)(0.15)² = ½(200)(0.0225) = <strong>2.25 J</strong>. These are two completely independent calculations describing two completely different physical setups — there's no direct comparison to draw between them beyond both being forms of "stored" energy.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute gravitational potential energy given mass, height, and a chosen reference point.</li>
      <li>Compute elastic potential energy given a spring constant and displacement.</li>
      <li>Explain why elastic PE depends on x², while spring force depends on x directly.</li>
    </ul>
  </div>

  <h2 id="s34"><span class="num">3.4</span>Conservation of Mechanical Energy</h2>
  <p>This is the payoff for the whole unit. When only conservative forces (gravity, springs) do work on a system — no friction, no applied pushes — total mechanical energy stays exactly constant throughout the motion, even as it freely trades back and forth between kinetic and potential forms.</p>

  <div class="eq">
    <div class="main">KE<sub>i</sub> + PE<sub>i</sub> = KE<sub>f</sub> + PE<sub>f</sub></div>
    <div class="sub">valid whenever no non-conservative force does work on the system</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The idea that unlocks the whole unit</div>
    <p>Energy conservation lets you connect a "before" state and an "after" state directly, completely skipping over everything that happened in between — the exact shape of the path, how the speed varied along the way, how long it took. A roller coaster's speed at the bottom of a hill depends only on its height drop, not on whether the hill was a smooth slope or a wild series of loops. That's an enormous shortcut compared to tracking the motion instant by instant with kinematics.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Conservation of mechanical energy only holds when NO non-conservative force does work on the system. The instant friction, air resistance, or an external push/pull enters the picture, total mechanical energy is no longer conserved — some of it gets converted to other forms (usually heat) or added/removed by that external force. Always check for friction or applied forces before assuming energy conservation applies.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>A Ball Rolling Down a Frictionless Ramp.</strong> A 2.0 kg ball starts from rest at the top of a frictionless ramp, 5.0 m above the ground. Find its speed at the bottom.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">No friction means mechanical energy is conserved. At the top: KE<sub>i</sub> = 0 (starts at rest), PE<sub>i</sub> = mgh = (2.0)(9.8)(5.0) = 98 J. At the bottom: PE<sub>f</sub> = 0 (taking the ground as the reference), KE<sub>f</sub> = ½mv². Setting initial energy equal to final energy: 98 = ½(2.0)v², so v² = 98, giving v = √98 ≈ <strong>9.9 m/s</strong>. Notice the ramp's shape, length, and steepness never entered the calculation at all — only the height drop mattered.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the condition required for mechanical energy to be conserved.</li>
      <li>Set up and solve a conservation-of-energy equation relating an initial and final state.</li>
      <li>Explain why energy methods can skip over the details of the path taken between two states.</li>
    </ul>
  </div>

  <h2 id="s35"><span class="num">3.5</span>Non-Conservative Forces and Energy Dissipation</h2>
  <p>Friction and other non-conservative forces don't destroy energy — energy is never actually destroyed — but they do convert mechanical energy into other forms, usually heat, that this unit's bookkeeping no longer tracks as "useful" mechanical energy.</p>

  <div class="eq">
    <div class="main">W<sub>nc</sub> = ΔE<sub>mech</sub> = E<sub>mech,f</sub> − E<sub>mech,i</sub></div>
    <div class="sub">work done by non-conservative forces equals the change in total mechanical energy</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Friction Almost Always Does Negative Work</span>
    <p>Friction opposes motion, so it almost always does negative work on a moving object — which means W<sub>nc</sub> is typically negative, and mechanical energy decreases as a result. That "lost" mechanical energy hasn't vanished; it's been converted into heat at the sliding surfaces (and often a bit of sound). Total energy, across ALL forms, is still exactly conserved — it's specifically <em>mechanical</em> energy that decreases when friction is present.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>A Block Sliding with Friction.</strong> A 4.0 kg block slides 3.0 m across a rough floor, starting at 6.0 m/s and ending at 2.0 m/s. Find the work done by friction.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Since the floor is flat, there's no change in height (ΔPE = 0), so this is purely a change in kinetic energy. KE<sub>i</sub> = ½(4.0)(6.0)² = 72 J. KE<sub>f</sub> = ½(4.0)(2.0)² = 8.0 J. The change in mechanical energy is ΔE<sub>mech</sub> = 8.0 − 72 = −64 J. Since friction is the only non-conservative force here, W<sub>friction</sub> = ΔE<sub>mech</sub> = <strong>−64 J</strong> — the negative sign confirms friction removed 64 J of mechanical energy from the block, converting it into heat.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain why "lost" mechanical energy due to friction isn't actually destroyed.</li>
      <li>Use W<sub>nc</sub> = ΔE<sub>mech</sub> to find the work done by a non-conservative force.</li>
      <li>Explain why friction's work is almost always negative on a moving object.</li>
    </ul>
  </div>

  <h2 id="s36"><span class="num">3.6</span>Power</h2>
  <p>Power measures how quickly energy is transferred or work is done — not how much total work gets done, but the RATE at which it happens. Two people can do the exact same amount of work lifting identical boxes, but the one who does it faster is delivering more power.</p>

  <div class="eq">
    <div class="main">P = W/t &nbsp;·&nbsp; P = Fv·cosθ</div>
    <div class="sub">average power = work ÷ time · instantaneous power in terms of force and velocity</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>More power does not necessarily mean more total work or more total energy. A powerful engine can do the exact same amount of work as a weak one — it just does it faster. Don't conflate "powerful" with "does more work"; power is specifically about the rate, and a low-power source can still eventually transfer just as much total energy, given enough time.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Power from Force and Velocity.</strong> A car engine exerts a constant 2000 N of forward force while the car moves at a constant 20 m/s. Find the power output.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Since the force and velocity are in the same direction (θ = 0°, cosθ = 1), P = Fv = (2000)(20) = <strong>40,000 W</strong> (or 40 kW). This form of the power equation — force times velocity — is especially useful whenever you're given an object's speed directly, rather than a total time and total work.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Distinguish power from work, explaining what makes power specifically a rate.</li>
      <li>Compute average power given work and time, or instantaneous power given force and velocity.</li>
      <li>Explain why a more powerful source doesn't necessarily do more total work.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 3 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A waiter carries a tray of food at constant height across a room at constant velocity. How much work does the waiter do on the tray? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A ball is thrown upward, reaches its peak, and falls back to the thrower's hand. Assuming no air resistance, compare its kinetic energy at launch to its kinetic energy when caught.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>A pendulum swings back and forth with no friction or air resistance. Describe how kinetic and potential energy trade off as it swings from one side to the other.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Two identical crates are lifted to the same height, one twice as fast as the other. Compare the total work done in each case, and compare the power used in each case.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain why the work-energy theorem is often faster to use than kinematics equations for problems involving a non-constant force.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A 40 N force pushes a box 6.0 m in the direction of the force. Find the work done.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A 5.0 kg object moves at 4.0 m/s. Find its kinetic energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A 60 J net force does work on a 3.0 kg object initially at rest. Find its final speed.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>Find the gravitational potential energy of a 2.5 kg object 8.0 m above the ground.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A spring with k = 300 N/m is stretched 0.10 m. Find its elastic potential energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A 1.0 kg ball is dropped from 10 m. Using energy conservation, find its speed just before hitting the ground.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A 2.0 kg block slides 4.0 m across a rough floor, decelerating from 8.0 m/s to 5.0 m/s. Find the work done by friction.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A motor does 5000 J of work in 20 s. Find its average power.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Zero work. The tray's displacement is horizontal, but the waiter's supporting force on the tray is vertical (upward) — since these are perpendicular, cosθ = cos90° = 0, so no work is done, regardless of how far the tray is carried.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Equal. Since there's no air resistance, mechanical energy is conserved, and the ball returns to the exact same height it started from — meaning it has exactly the same speed (and therefore the same kinetic energy) both times.</div></details>
    <details><summary>Question 3</summary><div class="a-content">At the highest points of the swing (the endpoints), velocity is zero, so KE=0 and PE is at its maximum. At the lowest point (bottom of the swing), PE is at its minimum and KE — and speed — is at its maximum. Total mechanical energy (KE+PE) stays constant throughout, just continuously trading between the two forms.</div></details>
    <details><summary>Question 4</summary><div class="a-content">The total work done is identical in both cases, since work depends only on force and displacement (mgh, essentially), not on speed. Power, however, differs — since the faster lift does the same work in less time, it requires twice the power of the slower lift.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Kinematics equations like v²=v0²+2aΔx assume constant acceleration, which requires a constant force. The work-energy theorem instead uses total work — which can be correctly computed (often via the area under a force-vs-distance graph) even when the force changes throughout the motion, sidestepping the constant-acceleration requirement entirely.</div></details>
    <details><summary>Question 6</summary><div class="a-content">W = Fd = (40)(6.0) = <strong>240 J</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">KE = ½mv² = ½(5.0)(4.0)² = ½(5.0)(16) = <strong>40 J</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">W_net = ΔKE = KE_f (since starting at rest) = 60 J. ½(3.0)v² = 60 → v² = 40 → v = √40 ≈ <strong>6.3 m/s</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">PE = mgh = (2.5)(9.8)(8.0) = <strong>196 J</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">PE = ½kx² = ½(300)(0.10)² = ½(300)(0.010) = <strong>1.5 J</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">mgh = ½mv² (mass cancels): v = √(2gh) = √(2×9.8×10) = √196 = <strong>14 m/s</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">KE_i = ½(2.0)(8.0)² = 64 J. KE_f = ½(2.0)(5.0)² = 25 J. W_friction = ΔKE = 25 − 64 = <strong>−39 J</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">P = W/t = 5000/20 = <strong>250 W</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 3 QBank</strong> to drill these ideas, then move on to <strong>Unit 4 — Linear Momentum</strong>.
  </div>

</div>
`,
  4: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Linear Momentum</h1>
  <p class="sub">Energy gave you one powerful "before and after" bookkeeping tool. Momentum gives you a second, completely independent one — and the two together let you crack open collision and explosion problems that neither tool could handle alone.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 10–15%</span>
    <span class="pill">6 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s41">4.1 Momentum</a></li>
    <li><a href="#s42">4.2 Impulse and the Impulse-Momentum Theorem</a></li>
    <li><a href="#s43">4.3 Conservation of Momentum</a></li>
    <li><a href="#s44">4.4 Elastic Collisions</a></li>
    <li><a href="#s45">4.5 Inelastic Collisions</a></li>
    <li><a href="#s46">4.6 Center of Mass</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Momentum Is Always Conserved for an Isolated System</span>
    <p>Whenever a problem describes a collision or explosion with no significant outside force acting during that event, total momentum before equals total momentum after — full stop, every time, regardless of whether the collision is elastic, inelastic, or somewhere in between. Kinetic energy is only sometimes conserved (elastic collisions only); momentum, for an isolated system, is always conserved. When you see "collision" or "explosion," your first move should be to write p<sub>total,before</sub> = p<sub>total,after</sub>.</p>
  </div>

  <h2 id="s41"><span class="num">4.1</span>Momentum</h2>
  <p>Momentum is a measure of how hard it is to stop something that's moving — it combines how much mass an object has with how fast it's going, into a single vector quantity.</p>

  <div class="eq">
    <div class="main">p = mv</div>
    <div class="sub">momentum = mass × velocity — units: kg·m/s</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Momentum Is a Vector</span>
    <p>Just like velocity, momentum has a direction, and that direction matters enormously when you're combining the momentum of multiple objects. Two objects moving toward each other don't have momenta that simply add in magnitude — one direction has to be called positive and the other negative, and the two values are combined with their signs, exactly like the displacement and velocity vectors from Unit 1.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Momentum is linear in velocity (p = mv), unlike kinetic energy, which is proportional to v<em>squared</em>. Doubling an object's speed doubles its momentum but quadruples its kinetic energy — these two quantities scale completely differently with speed, and mixing up which one is linear and which one is squared is a very common error.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Combining Momenta.</strong> A 3.0 kg object moves at 6.0 m/s east; a 4.0 kg object moves at 3.0 m/s west. Find the total momentum of the system.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Taking east as positive: p<sub>1</sub> = (3.0)(6.0) = 18 kg·m/s (east, positive). p<sub>2</sub> = (4.0)(3.0) = 12 kg·m/s, but moving west, so p<sub>2</sub> = −12 kg·m/s. Total momentum: 18 + (−12) = <strong>6.0 kg·m/s east</strong>. Notice the two objects' momenta partially canceled, since they moved in opposite directions — exactly the same sign-based reasoning as combining displacements or velocities.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute an object's momentum given its mass and velocity, including direction.</li>
      <li>Explain why momentum is linear in velocity while kinetic energy is quadratic in velocity.</li>
      <li>Combine the momenta of multiple objects using correct signs for direction.</li>
    </ul>
  </div>

  <h2 id="s42"><span class="num">4.2</span>Impulse and the Impulse-Momentum Theorem</h2>
  <p>Impulse is the connection between force and momentum — it measures how much a force, acting over some amount of time, actually changes an object's momentum.</p>

  <div class="eq">
    <div class="main">J = FΔt = Δp</div>
    <div class="sub">impulse = force × time interval = change in momentum</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Why airbags and crumple zones actually work</div>
    <p>For a given change in momentum Δp, a longer collision time Δt means a smaller average force is needed (since F = Δp/Δt). This is the entire physics behind airbags, crumple zones, and even bending your knees when you land a jump — stretching out the time over which your momentum changes to zero dramatically reduces the force your body experiences, even though the total impulse (the change in momentum) is exactly the same either way.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>When an object bounces back off something, its velocity doesn't just decrease to zero — it reverses sign entirely. A ball hitting a wall at +8 m/s and bouncing back at 6 m/s isn't experiencing a velocity change of −2 m/s; it's experiencing a change from +8 m/s to −6 m/s, a full Δv of −14 m/s. Forgetting to flip the sign on a "bounce back" scenario is one of the most common errors in this section.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Impulse from a Bounce.</strong> A 0.20 kg ball hits a wall at 10 m/s and bounces straight back at 10 m/s (elastic bounce). Find the impulse delivered to the ball.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Taking the ball's initial direction as positive: v<sub>i</sub> = +10 m/s, v<sub>f</sub> = −10 m/s (fully reversed). Δp = m(v<sub>f</sub> − v<sub>i</sub>) = 0.20(−10 − 10) = 0.20(−20) = <strong>−4.0 kg·m/s</strong>. The impulse on the ball has a magnitude of 4.0 kg·m/s, directed opposite the ball's original motion — and by Newton's Third Law, the wall receives an equal and opposite impulse of +4.0 kg·m/s.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the impulse-momentum theorem and explain the relationship between force, time, and Δp.</li>
      <li>Explain why spreading out collision time reduces the force experienced for a given Δp.</li>
      <li>Correctly account for a full sign reversal when computing Δv for a bouncing object.</li>
    </ul>
  </div>

  <h2 id="s43"><span class="num">4.3</span>Conservation of Momentum</h2>
  <p>For a system with no net external force acting on it, total momentum never changes — even as individual objects within that system push, pull, or collide with each other. This is one of the most powerful and reliable tools in the entire course.</p>

  <div class="eq">
    <div class="main">p<sub>total,before</sub> = p<sub>total,after</sub></div>
    <div class="sub">valid for an isolated system — internal forces (collisions, explosions) never change the total</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Internal Forces Cancel by Newton's Third Law</span>
    <p>The reason momentum conservation works at all traces directly back to Newton's Third Law: whatever force one object in a collision exerts on another, that other object exerts back an equal and opposite force. Those two forces, acting over the same time interval, produce equal and opposite impulses — which cancel out perfectly when you add up the whole system's momentum. This is exactly why momentum conservation applies to <em>any</em> kind of collision, not just special "elastic" ones.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>An Explosion from Rest.</strong> A 10 kg object at rest suddenly splits into two pieces: a 4.0 kg piece moving at 6.0 m/s in one direction, and a 6.0 kg piece. Find the second piece's velocity.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Total momentum before the explosion is zero (the object was at rest). By conservation of momentum, total momentum after must also be zero: m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = 0. Substituting: (4.0)(6.0) + (6.0)v<sub>2</sub> = 0, so 24 + 6.0v<sub>2</sub> = 0, giving v<sub>2</sub> = −4.0 m/s — a magnitude of <strong>4.0 m/s</strong>, moving opposite the first piece. This is the same physics behind a gun's recoil: the two pieces must fly apart with momenta that exactly cancel.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the condition (isolated system, no net external force) required for momentum conservation.</li>
      <li>Explain why momentum conservation follows directly from Newton's Third Law.</li>
      <li>Solve an explosion or "push-apart" problem using conservation of momentum.</li>
    </ul>
  </div>

  <h2 id="s44"><span class="num">4.4</span>Elastic Collisions</h2>
  <p>An elastic collision is a special, idealized case where BOTH momentum and kinetic energy are conserved — nothing is lost to heat, sound, or permanent deformation. Real-world collisions are rarely perfectly elastic, but billiard balls and many atomic-scale collisions come impressively close.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Elastic Means Two Conservation Laws at Once</span>
    <p>Every collision (elastic or not) conserves momentum, as long as the system is isolated. What makes a collision specifically <strong>elastic</strong> is the additional fact that kinetic energy is conserved too — KE<sub>total,before</sub> = KE<sub>total,after</sub>. This second condition is what actually lets you solve for two unknown final velocities (rather than just one relationship between them) in a two-object collision.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Equal-Mass Elastic Collision.</strong> A 3.0 kg ball moving at 8.0 m/s collides elastically with an identical, stationary 3.0 kg ball. Find both balls' velocities after the collision.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">This is the single most useful special case in this section, worth memorizing outright: when one object collides elastically with an <em>equal-mass</em>, stationary object, the moving object comes to a complete stop, and the previously stationary object takes on the exact velocity the first one had. So after the collision: the first ball's velocity becomes <strong>0 m/s</strong>, and the second ball's velocity becomes <strong>8.0 m/s</strong>. You can verify this conserves both momentum (3.0×8.0 = 24 kg·m/s before; 3.0×0 + 3.0×8.0 = 24 kg·m/s after) and kinetic energy (½×3.0×64 = 96 J before; ½×3.0×64 = 96 J after, just carried by the other ball).</div>
    </details>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>The equal-mass "velocity swap" result from the worked example above is a special case — it does NOT apply when the two masses are different. For unequal masses, both momentum conservation and kinetic energy conservation have to be solved together (typically as a system of two equations), and the resulting final velocities are more complex expressions involving both masses.</p>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain what distinguishes an elastic collision from other collisions.</li>
      <li>Apply the equal-mass "velocity swap" result to a stationary-target elastic collision.</li>
      <li>Verify whether a given collision is elastic by comparing total kinetic energy before and after.</li>
    </ul>
  </div>

  <h2 id="s45"><span class="num">4.5</span>Inelastic Collisions</h2>
  <p>In an inelastic collision, momentum is still conserved (as always, for an isolated system) — but kinetic energy is NOT conserved. Some of it converts into heat, sound, or permanent deformation of the colliding objects. A <strong>perfectly</strong> inelastic collision is the extreme case where the two objects stick together and move as one after impact.</p>

  <div class="eq">
    <div class="main">m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = (m<sub>1</sub>+m<sub>2</sub>)v<sub>f</sub></div>
    <div class="sub">perfectly inelastic collision — objects combine into one after impact</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Most real-world collisions — car crashes, a ball of clay hitting a wall, two football players colliding — are inelastic, not elastic. If a problem doesn't explicitly say "elastic" or state that kinetic energy is conserved, don't assume it. And crucially: even though kinetic energy is lost in an inelastic collision, momentum is still exactly conserved — those two facts aren't in tension with each other at all.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>A Perfectly Inelastic Collision.</strong> A 5.0 kg cart moving at 8.0 m/s collides with a stationary 3.0 kg cart, and they stick together. Find their combined final velocity, and the kinetic energy lost in the collision.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using conservation of momentum: (5.0)(8.0) + (3.0)(0) = (5.0+3.0)v<sub>f</sub>, so 40 = 8.0v<sub>f</sub>, giving v<sub>f</sub> = <strong>5.0 m/s</strong>. For the energy: KE<sub>before</sub> = ½(5.0)(8.0)² = 160 J. KE<sub>after</sub> = ½(8.0)(5.0)² = 100 J. Kinetic energy lost: 160 − 100 = <strong>60 J</strong>, converted into heat and sound as the carts collided and stuck together — momentum stayed exactly conserved throughout, even as 60 J of kinetic energy simply vanished from the "useful mechanical energy" ledger.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Solve a perfectly inelastic collision for the combined final velocity.</li>
      <li>Compute the kinetic energy lost in an inelastic collision.</li>
      <li>Explain why momentum conservation and kinetic energy loss aren't contradictory in an inelastic collision.</li>
    </ul>
  </div>

  <h2 id="s46"><span class="num">4.6</span>Center of Mass</h2>
  <p>The center of mass is the single point that represents the "average" position of a system's mass, weighted by how much mass sits at each location. For many purposes, a whole complicated system of objects behaves — in terms of its overall motion — exactly like a single point mass located at the center of mass.</p>

  <div class="eq">
    <div class="main">x<sub>cm</sub> = (m<sub>1</sub>x<sub>1</sub> + m<sub>2</sub>x<sub>2</sub> + ...) / (m<sub>1</sub> + m<sub>2</sub> + ...)</div>
    <div class="sub">a mass-weighted average position</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The connection back to momentum conservation</div>
    <p>Here's the payoff for this whole unit: the center of mass of an isolated system moves at a perfectly constant velocity, completely unaffected by collisions or explosions happening internally — because internal forces, by Newton's Third Law, can never change the system's total momentum, and the center of mass's velocity is directly tied to that total momentum (v<sub>cm</sub> = p<sub>total</sub>/m<sub>total</sub>). A firework explodes into a hundred pieces flying in every direction, but its center of mass keeps sailing along the exact same parabolic path the unexploded firework would have followed.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Finding the Center of Mass.</strong> A 2.0 kg object sits at x = 0, and a 6.0 kg object sits at x = 8.0 m. Find the position of the system's center of mass.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">x<sub>cm</sub> = (m<sub>1</sub>x<sub>1</sub> + m<sub>2</sub>x<sub>2</sub>)/(m<sub>1</sub>+m<sub>2</sub>) = [(2.0)(0) + (6.0)(8.0)]/(2.0+6.0) = 48/8.0 = <strong>6.0 m</strong>. Notice the center of mass sits much closer to the heavier object (6.0 kg at x=8.0 m) than to the lighter one — which makes sense, since a bigger mass "pulls" the weighted average more strongly toward its own position.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute the center of mass position for a system of point masses.</li>
      <li>Explain why the center of mass sits closer to whichever object has more mass.</li>
      <li>Explain why an isolated system's center of mass moves at constant velocity, even through internal collisions or explosions.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 4 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A bowling ball and a tennis ball move at the same speed. Which has more momentum? Which would have more kinetic energy?</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>Explain, using the impulse-momentum theorem, why bending your knees when landing a jump reduces the force on your legs.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Two skaters at rest push off from each other. Explain why they must move apart with equal and opposite momenta, regardless of their masses.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A car crash is a clear example of an inelastic collision. Is momentum still conserved during the crash? Is kinetic energy?</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>A firework shell explodes in mid-flight. Explain what happens to the velocity of its center of mass immediately after the explosion.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>Find the momentum of a 1200 kg car moving at 25 m/s.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A 60 N force acts on an object for 0.50 s. Find the impulse delivered.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A 4.0 kg object's velocity changes from 3.0 m/s to 9.0 m/s over 2.0 s. Find the average force acting on it.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A 6.0 kg object moving at 4.0 m/s collides and sticks to a stationary 2.0 kg object. Find their combined final velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A 5.0 kg ball moving at 6.0 m/s collides elastically with an identical stationary 5.0 kg ball. Find both balls' final velocities.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Find the kinetic energy lost when a 3.0 kg object moving at 10 m/s collides perfectly inelastically with an identical stationary 3.0 kg object.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A 0.015 kg bullet is fired at 500 m/s from a 3.0 kg gun initially at rest. Find the gun's recoil velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>Find the center of mass of a system with a 3.0 kg object at x = 2.0 m and a 5.0 kg object at x = 10 m.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">The bowling ball has more momentum AND more kinetic energy, since it has more mass while both objects share the same speed — momentum (p=mv) and kinetic energy (KE=½mv²) both increase directly with mass for a fixed speed.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Bending your knees extends the time (Δt) over which your momentum changes to zero upon landing. Since impulse (FΔt) must equal the fixed change in momentum, a longer Δt means a smaller average force F is needed — reducing the force your legs actually experience.</div></details>
    <details><summary>Question 3</summary><div class="a-content">Since the two skaters start at rest, total momentum before the push is zero. By conservation of momentum, total momentum after must also be zero — meaning their individual momenta must be equal in magnitude and opposite in direction, regardless of their individual masses (though their resulting speeds will differ if their masses differ).</div></details>
    <details><summary>Question 4</summary><div class="a-content">Momentum is still exactly conserved during the crash, since it's conserved for any isolated collision regardless of type. Kinetic energy is NOT conserved — a significant amount converts into heat, sound, and the permanent deformation of the vehicles, which is exactly what makes it an inelastic collision.</div></details>
    <details><summary>Question 5</summary><div class="a-content">The center of mass's velocity is completely unaffected by the explosion — it continues moving exactly as it would have if the explosion never happened, since the explosive forces are entirely internal to the system and cannot change its total momentum.</div></details>
    <details><summary>Question 6</summary><div class="a-content">p = mv = (1200)(25) = <strong>30,000 kg·m/s</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">J = FΔt = (60)(0.50) = <strong>30 N·s (kg·m/s)</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">Δp = m(v_f−v_i) = 4.0(9.0−3.0) = 24 kg·m/s. F = Δp/Δt = 24/2.0 = <strong>12 N</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">(6.0)(4.0)+(2.0)(0) = (8.0)v_f → 24=8.0v_f → v_f = <strong>3.0 m/s</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">Equal-mass elastic collision with a stationary target: velocities swap. The first ball ends at <strong>0 m/s</strong>; the second ball ends at <strong>6.0 m/s</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">v_f = (3.0×10+3.0×0)/6.0 = 5.0 m/s. KE_i = ½(3.0)(10)² = 150 J. KE_f = ½(6.0)(5.0)² = 75 J. Lost: 150−75 = <strong>75 J</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">Total momentum before = 0. (0.015)(500) + (3.0)V = 0 → 7.5 + 3.0V = 0 → V = <strong>−2.5 m/s</strong> (magnitude 2.5 m/s, opposite the bullet's direction).</div></details>
    <details><summary>Question 13</summary><div class="a-content">x_cm = [(3.0)(2.0)+(5.0)(10)]/(3.0+5.0) = (6.0+50)/8.0 = 56/8.0 = <strong>7.0 m</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 4 QBank</strong> to drill these ideas, then move on to <strong>Unit 5 — Torque and Rotational Dynamics</strong>.
  </div>

</div>
`,
  5: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Torque and Rotational Dynamics</h1>
  <p class="sub">Every idea from Units 1 through 4 — position, velocity, acceleration, force, Newton's Second Law — gets a rotational twin in this unit. The genuinely good news is that you already know most of this content; you're mostly just learning its new vocabulary and where a factor of "distance from the axis" needs to be inserted.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 10–15%</span>
    <span class="pill">6 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s51">5.1 Rotational Kinematics</a></li>
    <li><a href="#s52">5.2 Torque</a></li>
    <li><a href="#s53">5.3 Moment of Inertia</a></li>
    <li><a href="#s54">5.4 Newton's Second Law for Rotation</a></li>
    <li><a href="#s55">5.5 Static Equilibrium</a></li>
    <li><a href="#s56">5.6 Rolling Motion</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — The Translation Table</span>
    <p>Nearly every equation in this unit is a direct swap of a linear-motion quantity for its rotational counterpart. Keep this table close by until the substitutions become automatic:</p>
    <table class="formula-table" style="margin:10px 0 0;">
      <tr><th>Linear (Units 1–4)</th><th>Rotational (this unit)</th></tr>
      <tr><td>Position, x</td><td>Angular position, θ (radians)</td></tr>
      <tr><td>Velocity, v</td><td>Angular velocity, ω</td></tr>
      <tr><td>Acceleration, a</td><td>Angular acceleration, α</td></tr>
      <tr><td>Mass, m</td><td>Moment of inertia, I</td></tr>
      <tr><td>Force, F</td><td>Torque, τ</td></tr>
      <tr><td>F<sub>net</sub> = ma</td><td>τ<sub>net</sub> = Iα</td></tr>
    </table>
  </div>

  <h2 id="s51"><span class="num">5.1</span>Rotational Kinematics</h2>
  <p>Angular position, angular velocity, and angular acceleration describe rotation the exact same way position, velocity, and acceleration described straight-line motion back in Unit 1 — and every one of Unit 1's kinematic equations works here too, just with the linear symbols swapped for their angular counterparts.</p>

  <table class="formula-table">
    <thead><tr><th>Linear equation</th><th>Rotational equation</th></tr></thead>
    <tbody>
      <tr><td>v = v<sub>0</sub> + at</td><td>ω = ω<sub>0</sub> + αt</td></tr>
      <tr><td>Δx = v<sub>0</sub>t + ½at²</td><td>Δθ = ω<sub>0</sub>t + ½αt²</td></tr>
      <tr><td>v² = v<sub>0</sub>² + 2aΔx</td><td>ω² = ω<sub>0</sub>² + 2αΔθ</td></tr>
    </tbody>
  </table>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Bridging Rotational and Linear Quantities</span>
    <p>Every point on a spinning rigid object shares the exact same angular velocity ω, but points farther from the axis move through more actual distance per second — a faster linear (tangential) speed. The bridge between the two is the distance from the axis, r: v = rω and a<sub>tangential</sub> = rα. A point twice as far from the axis moves twice as fast, even though both points complete a full rotation in the exact same amount of time.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Angular quantities must be in <strong>radians</strong>, not degrees, whenever you use v=rω, a=rα, or any of the rotational kinematic equations. Radians aren't just a unit preference here — they're baked into the geometric relationship between arc length and angle (arc length = rθ, only true when θ is in radians). If a problem gives you an angle or angular speed in degrees or revolutions, convert to radians first (2π rad = 360° = 1 revolution).</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Spinning Up a Wheel.</strong> A wheel starts at rest and accelerates uniformly at 4.0 rad/s² for 3.0 s. Find its final angular velocity and the angle it sweeps through.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using ω = ω<sub>0</sub> + αt: ω = 0 + (4.0)(3.0) = <strong>12 rad/s</strong>. Using Δθ = ω<sub>0</sub>t + ½αt²: Δθ = 0 + ½(4.0)(3.0)² = ½(4.0)(9.0) = <strong>18 rad</strong>. Notice this is exactly the same two-step process as a linear kinematics problem — only the symbols changed.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Apply the rotational kinematic equations, recognizing their direct parallel to Unit 1's linear equations.</li>
      <li>Convert between linear and angular quantities using v=rω and a<sub>tangential</sub>=rα.</li>
      <li>Explain why angle must be measured in radians for these relationships to hold.</li>
    </ul>
  </div>

  <h2 id="s52"><span class="num">5.2</span>Torque</h2>
  <p>Torque is the rotational equivalent of force — it's what actually causes angular acceleration. But unlike force, torque isn't just about how hard you push; it's about how hard you push AND how far from the axis, AND at what angle.</p>

  <div class="eq">
    <div class="main">τ = rF sinθ</div>
    <div class="sub">r = distance from the axis to where the force is applied · θ = angle between r and F</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Only the Perpendicular Component Creates Torque</span>
    <p>Pushing a door exactly at its hinge does nothing, no matter how hard you push — r=0. Pushing parallel to the door's surface, straight toward or away from the hinge, also does nothing, no matter how far from the hinge you are — θ=0°, so sinθ=0. Maximum torque comes from pushing as far from the axis as possible, in a direction exactly perpendicular to the lever arm (θ=90°, sinθ=1) — which is exactly why door handles are placed far from the hinge, and why you instinctively push perpendicular to a door rather than at a weird angle.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Torque, like force, has a direction — but instead of "left/right" or "up/down," torque direction is described as counterclockwise (conventionally positive) or clockwise (conventionally negative). When multiple torques act on an object, you can't just add their magnitudes; you have to account for which way each one is trying to rotate the object, exactly like combining forces or momenta along a line.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Torque on a Wrench.</strong> A 0.25 m long wrench has a 60 N force applied perpendicular to it, at its very end. Find the torque produced.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Since the force is perpendicular to the wrench, θ=90° and sinθ=1. τ = rF sinθ = (0.25)(60)(1) = <strong>15 N·m</strong>. Notice the units — newton-meters — are the same units as work, but torque and work are completely different physical quantities; don't let the matching units cause confusion between the two.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute torque given a force, a lever-arm distance, and an angle.</li>
      <li>Explain why a force applied exactly at the axis, or exactly parallel to the lever arm, produces zero torque.</li>
      <li>Combine multiple torques using a consistent sign convention (CCW positive, CW negative, or vice versa).</li>
    </ul>
  </div>

  <h2 id="s53"><span class="num">5.3</span>Moment of Inertia</h2>
  <p>Moment of inertia, I, is the rotational equivalent of mass — it measures how much an object "resists" changes to its rotational motion. But unlike ordinary mass, moment of inertia depends heavily on <em>where</em> that mass is located relative to the axis of rotation, not just how much of it there is.</p>

  <div class="eq">
    <div class="main">I = Σmr²</div>
    <div class="sub">for a system of point masses — each mass's contribution depends on the SQUARE of its distance from the axis</div>
  </div>

  <table class="formula-table">
    <thead><tr><th>Shape (rotating about the axis shown)</th><th>Moment of Inertia</th></tr></thead>
    <tbody>
      <tr><td>Thin hoop or ring, about its central axis</td><td>I = MR²</td></tr>
      <tr><td>Solid disk or cylinder, about its central axis</td><td>I = ½MR²</td></tr>
      <tr><td>Solid sphere, about a diameter</td><td>I = (2/5)MR²</td></tr>
      <tr><td>Thin rod, about its center</td><td>I = (1/12)ML²</td></tr>
      <tr><td>Thin rod, about one end</td><td>I = (1/3)ML²</td></tr>
    </tbody>
  </table>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Distance from the Axis Matters More Than Total Mass</span>
    <p>Because I depends on r<em>squared</em>, mass located far from the axis contributes vastly more to an object's moment of inertia than the same mass located close to the axis. This is why a hoop (all its mass concentrated at radius R) has a much larger I than a solid disk of the exact same mass and radius (whose mass is spread out from the center all the way to R, with much of it close in) — and it's exactly why figure skaters can dramatically change how "resistant to spinning" they are just by moving their arms in or out, without changing their total mass at all.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Moment of Inertia of Point Masses.</strong> A 2.0 kg mass sits at 0.50 m from an axis, and a 3.0 kg mass sits at 1.0 m from the same axis, both on a light (negligible mass) rod. Find the system's total moment of inertia.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Apply I = Σmr² to each mass separately, then add: I<sub>1</sub> = (2.0)(0.50)² = (2.0)(0.25) = 0.50 kg·m². I<sub>2</sub> = (3.0)(1.0)² = 3.0 kg·m². Total: I = 0.50 + 3.0 = <strong>3.5 kg·m²</strong>. Notice the farther mass (3.0 kg at 1.0 m) contributes six times as much to I as the closer mass, even though it's only 1.5 times heavier — that squared distance dependence is doing most of the work.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute the moment of inertia for a system of point masses using I=Σmr².</li>
      <li>Explain why mass farther from the axis contributes disproportionately more to I.</li>
      <li>Use the standard moment-of-inertia formulas for common shapes (hoop, disk, sphere, rod).</li>
    </ul>
  </div>

  <h2 id="s54"><span class="num">5.4</span>Newton's Second Law for Rotation</h2>
  <p>This is the rotational version of F<sub>net</sub>=ma, and it's built from exactly the same logic: net torque causes angular acceleration, with moment of inertia playing the role of "rotational mass" that resists that acceleration.</p>

  <div class="eq">
    <div class="main">τ<sub>net</sub> = Iα</div>
    <div class="sub">net torque = moment of inertia × angular acceleration</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The whole unit collapses into three steps</div>
    <p>Just like Unit 2, nearly every rotational dynamics problem is: (1) identify the torques acting on the object, (2) sum them with correct signs to find τ<sub>net</sub>, (3) apply τ<sub>net</sub> = Iα and solve. The parallel to Unit 2's "draw the FBD, sum the forces, apply F=ma" is completely intentional — it's the exact same skill, wearing rotational clothing.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Torque Causing Angular Acceleration.</strong> A solid disk (I = ½MR²) has mass 2.0 kg and radius 0.40 m. A torque of 4.0 N·m is applied to it. Find its angular acceleration.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">First find the disk's moment of inertia: I = ½MR² = ½(2.0)(0.40)² = ½(2.0)(0.16) = 0.16 kg·m². Then apply Newton's Second Law for rotation: α = τ/I = 4.0/0.16 = <strong>25 rad/s²</strong>. Just like a smaller mass accelerates more for a given force, a smaller moment of inertia accelerates (angularly) more for a given torque.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the rotational version of Newton's Second Law and explain the role each variable plays.</li>
      <li>Compute angular acceleration given net torque and moment of inertia, or vice versa.</li>
      <li>Explain why a larger moment of inertia means a smaller angular acceleration for the same applied torque.</li>
    </ul>
  </div>

  <h2 id="s55"><span class="num">5.5</span>Static Equilibrium</h2>
  <p>An object is in complete static equilibrium when it has zero linear acceleration AND zero angular acceleration — meaning BOTH the net force and the net torque acting on it must be exactly zero. This section is where balance, seesaws, beams, and ladders all live.</p>

  <div class="eq">
    <div class="main">ΣF = 0 &nbsp;·&nbsp; Στ = 0</div>
    <div class="sub">both conditions must hold simultaneously for full static equilibrium</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — You Can Choose Your Pivot Point</span>
    <p>The condition Στ=0 has to be true about <em>any</em> point you choose as the pivot for calculating torques — not just the object's actual physical axis, if it even has one. This gives you real freedom: choosing the pivot at the exact location of an unknown force makes that force's own torque instantly zero (since its lever arm is zero), which often eliminates an unknown from your equation before you've even started solving.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Satisfying only ΣF=0 is NOT enough to guarantee static equilibrium — an object can have zero net force while still spinning up due to a nonzero net torque (think of two equal, opposite forces applied at different points on a bar, like turning a steering wheel). You need both conditions, ΣF=0 and Στ=0, checked independently.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>A Beam with an Off-Center Load.</strong> A lightweight (negligible weight) beam, 6.0 m long, is supported at both ends. A 300 N weight sits 2.0 m from the left support. Find the force each support exerts.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Choose the pivot at the LEFT support — this makes the left support's own force contribute zero torque, leaving only one unknown (the right support's force) in the torque equation. Taking torques about the left support: the 300 N weight creates a torque of (300)(2.0) = 600 N·m, and the right support's force F<sub>R</sub> creates a balancing torque of F<sub>R</sub>(6.0). Setting Στ=0: F<sub>R</sub>(6.0) = 600, so F<sub>R</sub> = <strong>100 N</strong>. Then apply ΣF=0 for the whole beam: F<sub>L</sub> + F<sub>R</sub> = 300, so F<sub>L</sub> = 300 − 100 = <strong>200 N</strong>. Notice the support closer to the load carries more of the weight — a good intuitive check on the answer.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State both conditions required for complete static equilibrium.</li>
      <li>Strategically choose a pivot point to eliminate an unknown force from a torque equation.</li>
      <li>Solve a beam or lever problem using both the force and torque equilibrium conditions.</li>
    </ul>
  </div>

  <h2 id="s56"><span class="num">5.6</span>Rolling Motion</h2>
  <p>Rolling without slipping is a special, very common scenario where an object's rotational and translational motion are locked together by a single, simple relationship — setting up the deeper energy and momentum treatment of rolling objects that Unit 6 builds on.</p>

  <div class="eq">
    <div class="main">v<sub>cm</sub> = rω &nbsp;·&nbsp; a<sub>cm</sub> = rα</div>
    <div class="sub">valid specifically for rolling WITHOUT slipping</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — The Contact Point Is Momentarily at Rest</span>
    <p>For an object rolling without slipping, the single point currently touching the ground has zero velocity at that exact instant — it's neither sliding forward nor backward relative to the ground. This is the defining geometric feature of "rolling without slipping," and it's exactly why static friction (not kinetic friction) is the type of friction that acts at the contact point: there's no relative sliding motion between the surfaces for kinetic friction to act on.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>If an object is sliding while it spins — a car tire screeching, spinning its wheels on ice — the relationship v<sub>cm</sub>=rω no longer holds. That simple, convenient link between translational and rotational speed is a special feature of rolling <em>without</em> slipping specifically, not a universal law connecting v and ω for every rotating object.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Rolling Speed and Angular Velocity.</strong> A wheel of radius 0.30 m rolls without slipping, with its center moving at 6.0 m/s. Find its angular velocity.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using v<sub>cm</sub> = rω, solve for ω: ω = v<sub>cm</sub>/r = 6.0/0.30 = <strong>20 rad/s</strong>. This single relationship is what lets you move fluently between the wheel's "how fast is it traveling" (linear) and "how fast is it spinning" (angular) descriptions.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Apply v<sub>cm</sub>=rω and a<sub>cm</sub>=rα for an object rolling without slipping.</li>
      <li>Explain why the contact point of a rolling-without-slipping object is momentarily at rest.</li>
      <li>Explain why static (not kinetic) friction is the relevant friction type during rolling without slipping.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 5 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why pushing a door near its hinge, even very hard, barely opens it, while pushing near the handle opens it easily.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A hoop and a solid disk have equal mass and radius. Explain which one has a greater moment of inertia, and why.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Explain why static equilibrium requires both zero net force AND zero net torque, using an example where one condition holds without the other.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Explain why the choice of pivot point for a torque calculation doesn't affect the final answer for an object in equilibrium.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain why a car's spinning, slipping tire on ice does not satisfy v=rω.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A wheel starts at rest and accelerates at 3.0 rad/s² for 5.0 s. Find its final angular velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A 40 N force is applied perpendicular to a lever arm 0.60 m from the axis. Find the torque produced.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A 4.0 kg point mass sits 0.80 m from an axis. Find its contribution to the system's moment of inertia.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A net torque of 18 N·m acts on an object with moment of inertia 3.0 kg·m². Find its angular acceleration.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A 50 kg child sits 1.5 m from the center of a seesaw. Find where a 60 kg adult must sit on the other side to balance it.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A wheel of radius 0.25 m rolls without slipping at 8.0 m/s. Find its angular velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Find the moment of inertia of a solid disk with mass 5.0 kg and radius 0.20 m.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A thin rod (mass 2.0 kg, length 1.2 m) rotates about one end. Find its moment of inertia.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Torque depends on the lever arm distance (τ=rFsinθ). Pushing near the hinge means r is very small, producing very little torque regardless of force; pushing near the handle maximizes r, producing much more torque for the same applied force.</div></details>
    <details><summary>Question 2</summary><div class="a-content">The hoop has the greater moment of inertia (I=MR² vs. I=½MR² for the disk). Since I depends on r², and the hoop's entire mass sits at the maximum radius R, while the disk's mass is spread from the center outward (much of it closer to the axis), the hoop's mass contributes more per unit mass to I.</div></details>
    <details><summary>Question 3</summary><div class="a-content">A rod with two equal, opposite forces applied at different points (like turning a steering wheel with both hands) has zero net force — it won't translate — but a nonzero net torque, causing it to spin. This shows ΣF=0 alone doesn't guarantee equilibrium; Στ=0 must also hold.</div></details>
    <details><summary>Question 4</summary><div class="a-content">For a truly balanced object (Στ=0 about its actual axis), the torques must also balance about any other point — this is a mathematical consequence of the object having zero net force as well; choosing a different pivot just changes how the calculation is organized, not the physics itself.</div></details>
    <details><summary>Question 5</summary><div class="a-content">v=rω only holds for rolling WITHOUT slipping, where the contact point is momentarily at rest relative to the ground. A slipping, spinning tire has relative motion between the tire's surface and the ice at the contact point, breaking that simple relationship.</div></details>
    <details><summary>Question 6</summary><div class="a-content">ω = ω0+αt = 0+(3.0)(5.0) = <strong>15 rad/s</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">τ = rFsinθ = (0.60)(40)(1) = <strong>24 N·m</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">I = mr² = (4.0)(0.80)² = (4.0)(0.64) = <strong>2.56 kg·m²</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">α = τ/I = 18/3.0 = <strong>6.0 rad/s²</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">Balancing torques: (50)(1.5) = (60)(d) → 75 = 60d → d ≈ <strong>1.25 m</strong> from the center.</div></details>
    <details><summary>Question 11</summary><div class="a-content">ω = v/r = 8.0/0.25 = <strong>32 rad/s</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">I = ½MR² = ½(5.0)(0.20)² = ½(5.0)(0.04) = <strong>0.10 kg·m²</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">I = (1/3)ML² = (1/3)(2.0)(1.2)² = (1/3)(2.0)(1.44) = <strong>0.96 kg·m²</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 5 QBank</strong> to drill these ideas, then move on to <strong>Unit 6 — Energy and Momentum of Rotating Systems</strong>.
  </div>

</div>
`,
  6: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Energy and Momentum of Rotating Systems</h1>
  <p class="sub">This unit does for rotation what Units 3 and 4 did for straight-line motion: it swaps out "before and after" force-tracking for two more powerful bookkeeping tools — energy and momentum — now applied to spinning objects. Once again, you already know the ideas; you're mostly relearning them with an ω where a v used to be.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 5–8%</span>
    <span class="pill">4 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s61">6.1 Rotational Kinetic Energy</a></li>
    <li><a href="#s62">6.2 Angular Momentum</a></li>
    <li><a href="#s63">6.3 Conservation of Angular Momentum</a></li>
    <li><a href="#s64">6.4 Total Kinetic Energy of Rolling Objects</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Two More Translation Pairs</span>
    <p>Add these two rows to the translation table from Unit 5, and you have essentially the entire content of this unit already mapped out:</p>
    <table class="formula-table" style="margin:10px 0 0;">
      <tr><th>Linear (Units 3–4)</th><th>Rotational (this unit)</th></tr>
      <tr><td>KE = ½mv²</td><td>KE<sub>rot</sub> = ½Iω²</td></tr>
      <tr><td>p = mv</td><td>L = Iω</td></tr>
      <tr><td>Conservation of momentum (no net external force)</td><td>Conservation of angular momentum (no net external torque)</td></tr>
    </table>
  </div>

  <h2 id="s61"><span class="num">6.1</span>Rotational Kinetic Energy</h2>
  <p>Just as a moving object has kinetic energy from its straight-line motion, a spinning object has kinetic energy from its rotation — and the formula is built the exact same way, with I standing in for m and ω standing in for v.</p>

  <div class="eq">
    <div class="main">KE<sub>rot</sub> = ½Iω²</div>
    <div class="sub">rotational kinetic energy — units: joules, same as any other energy</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Rotational kinetic energy depends on ω<em>squared</em>, exactly like translational kinetic energy depends on v squared. Doubling an object's angular velocity doesn't double its rotational KE — it quadruples it. This is a genuinely important distinction from angular momentum (covered next), which scales linearly with ω, not quadratically — don't let the two blur together.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Rotational KE of a Spinning Disk.</strong> A solid disk (mass 3.0 kg, radius 0.40 m) spins at 10 rad/s. Find its rotational kinetic energy.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">First find the moment of inertia: I = ½MR² = ½(3.0)(0.40)² = ½(3.0)(0.16) = 0.24 kg·m². Then KE<sub>rot</sub> = ½Iω² = ½(0.24)(10)² = ½(0.24)(100) = <strong>12 J</strong>. Notice a disk can have significant kinetic energy from spinning in place, even with zero translational velocity — a purely rotational form of "moving" energy.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute rotational kinetic energy given moment of inertia and angular velocity.</li>
      <li>Explain why rotational KE scales with the square of angular velocity, not linearly.</li>
      <li>Explain how a spinning object can have kinetic energy even with zero translational velocity.</li>
    </ul>
  </div>

  <h2 id="s62"><span class="num">6.2</span>Angular Momentum</h2>
  <p>Angular momentum is the rotational sibling of linear momentum — it measures how much rotational "oomph" a spinning object has, and just like linear momentum, it plays a starring role in understanding how rotating systems interact with each other.</p>

  <div class="eq">
    <div class="main">L = Iω</div>
    <div class="sub">angular momentum — units: kg·m²/s</div>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Angular momentum is <em>linear</em> in ω (L=Iω), while rotational kinetic energy is <em>quadratic</em> in ω (KE<sub>rot</sub>=½Iω²) — the exact same linear-vs-quadratic contrast that distinguishes linear momentum (p=mv) from kinetic energy (KE=½mv²). Doubling ω doubles L but quadruples KE<sub>rot</sub>. Keeping this distinction straight is essential for the conservation problems in the next section.</p>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Torque's relationship to angular momentum mirrors force and momentum</div>
    <p>Just as F = Δp/Δt connects force to a change in linear momentum, net torque connects to a change in angular momentum: τ<sub>net</sub> = ΔL/Δt. This is the rotational angular-impulse-momentum theorem, and it's exactly why applying a torque over time is what changes an object's angular momentum — a direct parallel to Unit 4's impulse-momentum theorem.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Finding Angular Momentum.</strong> A wheel with moment of inertia 5.0 kg·m² spins at 8.0 rad/s. Find its angular momentum.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">L = Iω = (5.0)(8.0) = <strong>40 kg·m²/s</strong>. This single number captures the wheel's total "resistance to having its rotation stopped" — a heavier, faster-spinning, or more spread-out wheel all produce a larger L, and it takes a correspondingly larger angular impulse (torque × time) to bring it to a stop.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute angular momentum given moment of inertia and angular velocity.</li>
      <li>Explain why angular momentum is linear in ω, in contrast to rotational KE's quadratic dependence.</li>
      <li>State the rotational angular-impulse-momentum theorem and its parallel to the linear version.</li>
    </ul>
  </div>

  <h2 id="s63"><span class="num">6.3</span>Conservation of Angular Momentum</h2>
  <p>When no net external torque acts on a system, its total angular momentum stays exactly constant — even as the system's moment of inertia and angular velocity individually change. This is the single most famous and most tested idea in this whole unit.</p>

  <div class="eq">
    <div class="main">L<sub>before</sub> = L<sub>after</sub> &nbsp;&nbsp;i.e.&nbsp;&nbsp; I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub></div>
    <div class="sub">valid whenever no net external torque acts on the system</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — The Ice Skater Effect</span>
    <p>A spinning skater pulling their arms in reduces their moment of inertia (mass moving closer to the rotation axis) — and since L=Iω has to stay constant with no external torque, a smaller I forces a larger ω, so the skater spins faster. Pulling arms in doesn't add any spin directly; it just redistributes existing angular momentum into a faster rotation, exactly the way conservation of linear momentum redistributes velocity when mass changes in a collision.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Just like linear momentum conservation in Unit 4, conservation of angular momentum does NOT imply conservation of kinetic energy. When the skater pulls their arms in, their rotational kinetic energy actually <em>increases</em> — because the skater does real muscular work pulling their arms inward against the outward-pulling effect of their own spin. Angular momentum conservation and energy conservation are separate laws, and it's entirely possible for one to hold while the other doesn't.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>The Spinning Skater.</strong> A skater spins at 2.0 rad/s with arms extended, moment of inertia 5.0 kg·m². She pulls her arms in, reducing her moment of inertia to 2.0 kg·m². Find her new angular velocity, and compare her kinetic energy before and after.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using conservation of angular momentum: I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub>, so (5.0)(2.0) = (2.0)ω<sub>2</sub>, giving ω<sub>2</sub> = 10/2.0 = <strong>5.0 rad/s</strong> — she spins two and a half times faster. Now compare kinetic energy: KE<sub>1</sub> = ½(5.0)(2.0)² = 10 J. KE<sub>2</sub> = ½(2.0)(5.0)² = 25 J. Her kinetic energy actually <strong>increased</strong>, from 10 J to 25 J — that extra 15 J came from the real physical work her muscles did pulling her arms inward, not from any violation of angular momentum conservation.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the condition (no net external torque) required for angular momentum conservation.</li>
      <li>Solve a "moment of inertia changes" problem (skater, diver, or similar) using conservation of angular momentum.</li>
      <li>Explain why rotational kinetic energy can change even while angular momentum stays constant.</li>
    </ul>
  </div>

  <h2 id="s64"><span class="num">6.4</span>Total Kinetic Energy of Rolling Objects</h2>
  <p>An object rolling without slipping — a ball rolling down a hill, a wheel rolling along the ground — has kinetic energy in BOTH forms at once: translational (from its center of mass moving) and rotational (from its spinning). Total kinetic energy is simply the sum of the two.</p>

  <div class="eq">
    <div class="main">KE<sub>total</sub> = ½mv<sub>cm</sub>² + ½Iω²</div>
    <div class="sub">for rolling without slipping, substitute ω = v<sub>cm</sub>/r to combine both terms</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Why rolling objects go slower down a ramp than sliding ones</div>
    <p>When a ball rolls down a frictionless-except-for-rolling incline, its gravitational PE has to split between BOTH translational and rotational kinetic energy — unlike a block that simply slides down (no friction at all, no rotation), where ALL the PE converts into translational KE alone. This is exactly why a rolling object always arrives at the bottom moving slower than a frictionless sliding object dropped from the same height: some of its energy "budget" got spent spinning it up instead of speeding it up.</p>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Rolling Without Slipping Still Conserves Mechanical Energy</span>
    <p>It might seem like friction should always drain mechanical energy, the way it did in Unit 3 — but static friction acting at the contact point of a rolling-without-slipping object does <strong>zero work</strong>, because that point has zero velocity at every instant (from Unit 5's rolling-motion condition). Zero displacement of the point where the force acts means zero work, regardless of how large the friction force is — so mechanical energy conservation still applies fully to a rolling object, letting you use conservation of energy exactly as in Unit 3, just now with an extra rotational KE term included.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>A Solid Sphere Rolling Down a Ramp.</strong> A solid sphere (I=(2/5)MR²) starts from rest at the top of a ramp 2.0 m high and rolls without slipping to the bottom. Find its speed at the bottom.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Apply conservation of energy, now splitting final KE into translational and rotational parts: mgh = ½mv² + ½Iω². Substitute I=(2/5)mR² and ω=v/R (rolling without slipping): mgh = ½mv² + ½(2/5)mR²(v/R)² = ½mv² + (1/5)mv² = (7/10)mv². The mass cancels entirely: gh = (7/10)v², so v² = 10gh/7 = 10(9.8)(2.0)/7 = 196/7 = 28, giving v = √28 ≈ <strong>5.3 m/s</strong>. Compare this to a frictionless block simply sliding down the same 2.0 m height, which would reach v=√(2gh)=√39.2≈6.3 m/s — noticeably faster, since none of its energy had to go toward spinning anything up.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute the total kinetic energy of a rolling object as the sum of translational and rotational KE.</li>
      <li>Explain why static friction does zero work on an object rolling without slipping.</li>
      <li>Use conservation of energy, including the rotational KE term, to find the speed of a rolling object.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 6 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A spinning ice skater pulls her arms inward. Explain why her angular velocity increases, using conservation of angular momentum.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>Explain why the skater's kinetic energy in Question 1 is NOT conserved, even though her angular momentum is.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>A solid sphere and a hoop of equal mass and radius are released from rest at the top of the same ramp and roll without slipping. Which reaches the bottom first? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Explain why static friction does zero work on a ball that rolls without slipping down a ramp.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Compare how rotational kinetic energy and angular momentum each scale with angular velocity ω.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>Find the rotational kinetic energy of an object with I=2.0 kg·m² spinning at 6.0 rad/s.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the angular momentum of the same object.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A torque of 5.0 N·m is applied to an object for 3.0 s. Find the resulting change in angular momentum.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A diver spinning at 4.0 rad/s with I=8.0 kg·m² tucks into a smaller shape, reducing I to 2.0 kg·m². Find her new angular velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A merry-go-round (I=300 kg·m²) spins at 1.0 rad/s. A child (contributing ΔI=50 kg·m² once aboard) jumps onto the edge from rest. Find the new angular velocity.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Find the total kinetic energy of a solid disk (mass 2.0 kg, radius 0.30 m) rolling without slipping at 4.0 m/s.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A hoop rolls without slipping down a ramp 1.8 m high, starting from rest. Find its speed at the bottom. (Hint: for a hoop, KE_total=mv².)</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>Find the moment of inertia of an object with L=36 kg·m²/s and ω=6.0 rad/s.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Since L=Iω must stay constant (no external torque), and pulling her arms in reduces I, ω must increase proportionally to keep the product Iω unchanged.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Angular momentum conservation and kinetic energy conservation are separate, independent laws. The skater's muscles do real physical work pulling her arms inward against the outward pull of her own spin, adding kinetic energy to the system — this doesn't violate angular momentum conservation at all.</div></details>
    <details><summary>Question 3</summary><div class="a-content">The solid sphere reaches the bottom first. Its smaller moment of inertia (2/5 MR² vs. MR² for the hoop) means less of the available gravitational PE has to go toward rotational KE, leaving more for translational KE — giving it a higher speed (and greater acceleration) at every point along the ramp.</div></details>
    <details><summary>Question 4</summary><div class="a-content">The contact point of an object rolling without slipping has zero instantaneous velocity — and since work requires actual displacement of the point where a force is applied, a force acting on a point with zero velocity (zero displacement over any instant) does zero work, regardless of the force's magnitude.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Rotational kinetic energy scales with ω² (quadratic) — doubling ω quadruples KE_rot. Angular momentum scales with ω directly (linear) — doubling ω simply doubles L. This mirrors the same linear-vs-quadratic contrast between linear momentum and kinetic energy.</div></details>
    <details><summary>Question 6</summary><div class="a-content">KE_rot = ½Iω² = ½(2.0)(6.0)² = ½(2.0)(36) = <strong>36 J</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">L = Iω = (2.0)(6.0) = <strong>12 kg·m²/s</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">ΔL = τΔt = (5.0)(3.0) = <strong>15 kg·m²/s</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">I1ω1=I2ω2 → (8.0)(4.0)=(2.0)ω2 → ω2 = 32/2.0 = <strong>16 rad/s</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">(300)(1.0) = (350)ω2 → ω2 = 300/350 ≈ <strong>0.857 rad/s</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">For a solid disk, KE_total = ¾mv² (derived from combining translational and rotational KE using I=½MR² and rolling without slipping). KE = (3/4)(2.0)(4.0)² = (0.75)(2.0)(16) = <strong>24 J</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">mgh = mv² (mass cancels) → v² = gh = (9.8)(1.8) = 17.64 → v = <strong>≈ 4.2 m/s</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">I = L/ω = 36/6.0 = <strong>6.0 kg·m²</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 6 QBank</strong> to drill these ideas, then move on to <strong>Unit 7 — Oscillations</strong>.
  </div>

</div>
`,
  7: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Oscillations</h1>
  <p class="sub">Everything in this unit is really just Hooke's Law from Unit 2 and energy conservation from Unit 3, watching the same back-and-forth motion repeat forever. Once you see that a spring and a pendulum are two costumes worn by the exact same underlying physics, this becomes one of the more satisfying units in the whole course.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 5–8%</span>
    <span class="pill">4 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s71">7.1 Simple Harmonic Motion — Defining Features</a></li>
    <li><a href="#s72">7.2 Mass on a Spring</a></li>
    <li><a href="#s73">7.3 The Simple Pendulum</a></li>
    <li><a href="#s74">7.4 Energy in Simple Harmonic Motion</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — What Makes Motion "Simple Harmonic"</span>
    <p>Simple harmonic motion (SHM) is any motion caused by a restoring force directly proportional to displacement (F=−kx, from Unit 2's spring section). That single defining feature — restoring force proportional to displacement — is what guarantees the motion will be perfectly periodic and sinusoidal, and it's the thread connecting every topic in this unit: springs satisfy it exactly; pendulums satisfy it only approximately, for small angles. Whenever you see "restoring force proportional to displacement," you're looking at SHM.</p>
  </div>

  <h2 id="s71"><span class="num">7.1</span>Simple Harmonic Motion — Defining Features</h2>
  <p>SHM describes any back-and-forth motion where the restoring force (and therefore the acceleration) is always proportional to displacement, and always points back toward equilibrium. This single rule produces a whole family of predictable, related behaviors worth knowing cold.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Where Velocity and Acceleration Are Extreme</span>
    <p>At maximum displacement (x=±A, the amplitude), the restoring force — and therefore acceleration — is at its <strong>maximum</strong> magnitude, while velocity is exactly <strong>zero</strong> (the object has momentarily stopped to reverse direction). At the equilibrium position (x=0), the restoring force is exactly zero (no displacement, no restoring force), so acceleration is zero — but velocity is at its <strong>maximum</strong>, since the object has had the entire swing to speed up. This is precisely the same "zero velocity, nonzero acceleration at the peak" idea from Unit 1's free-fall trap, now appearing in a new context.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Don't confuse period T (time for one full cycle) with frequency f (cycles per second) — they're reciprocals of each other, T=1/f, and mixing them up (reporting a frequency where a period was asked for, or vice versa) is a very easy, very common error. Also don't assume amplitude affects period for an ideal spring — it doesn't; a bigger swing and a smaller swing of the same spring-mass system take exactly the same time to complete one cycle.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Period, Frequency, and Angular Frequency.</strong> An oscillator completes 15 full cycles in 6.0 s. Find its period, frequency, and angular frequency.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Period is time per cycle: T = 6.0/15 = <strong>0.40 s</strong>. Frequency is cycles per second, the reciprocal of period: f = 1/T = 1/0.40 = <strong>2.5 Hz</strong>. Angular frequency connects the two: ω = 2πf = 2π(2.5) ≈ <strong>15.7 rad/s</strong>. Notice "angular frequency" here uses the same symbol ω as Unit 5's angular velocity — for SHM, it plays an analogous mathematical role describing how fast the oscillation's phase advances, even though nothing is physically rotating.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State the defining feature of SHM (restoring force proportional to displacement).</li>
      <li>Identify where velocity and acceleration are each at their maximum and minimum during SHM.</li>
      <li>Convert fluently between period, frequency, and angular frequency.</li>
    </ul>
  </div>

  <h2 id="s72"><span class="num">7.2</span>Mass on a Spring</h2>
  <p>A mass attached to an ideal spring is the cleanest, most exactly "perfect" example of SHM in this entire course — its restoring force follows F=−kx exactly, with no approximations needed anywhere.</p>

  <div class="eq">
    <div class="main">T = 2π√(m/k)</div>
    <div class="sub">period of a mass-spring system — independent of amplitude</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — What the Period Depends On (and Doesn't)</span>
    <p>A spring's period depends only on the mass attached and the spring's own stiffness (k) — nothing else. A heavier mass means a longer period (more inertia to accelerate, T∝√m); a stiffer spring means a shorter period (stronger restoring force snapping it back faster, T∝1/√k). Critically, the period does <strong>not</strong> depend on amplitude at all — pull the mass out farther, and it simply moves faster to cover the extra distance in exactly the same amount of time.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>This period formula, T=2π√(m/k), is exactly the same whether the spring is oriented horizontally or hangs vertically. Gravity does shift where the mass's new equilibrium position sits when the spring hangs vertically (it stretches a bit to support the weight) — but it does NOT change the period of oscillation around that new equilibrium point at all. Don't assume a vertical spring problem needs some extra gravity-correction term in the period formula; it doesn't.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Finding the Period.</strong> A 2.0 kg mass is attached to a spring with k = 200 N/m. Find the period of oscillation.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">T = 2π√(m/k) = 2π√(2.0/200) = 2π√0.01 = 2π(0.1) ≈ <strong>0.63 s</strong>. This period is exactly the same regardless of how far the mass is initially pulled before being released — a small nudge and a big pull both complete one full cycle in that same 0.63 s.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute the period of a mass-spring system given mass and spring constant.</li>
      <li>Explain why the period does not depend on amplitude.</li>
      <li>Explain why the period formula is unchanged whether the spring is horizontal or vertical.</li>
    </ul>
  </div>

  <h2 id="s73"><span class="num">7.3</span>The Simple Pendulum</h2>
  <p>A pendulum is a second, very different-looking physical system that still produces (approximately) SHM — and its period formula depends on a completely different set of variables than a spring's does, which is exactly what makes this section worth studying as its own topic rather than just a copy of 7.2.</p>

  <div class="eq">
    <div class="main">T = 2π√(L/g)</div>
    <div class="sub">valid only for small swing angles (typically under about 15°)</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Mass Doesn't Matter, Amplitude (Mostly) Doesn't Either</span>
    <p>Notice what's completely absent from the pendulum period formula: mass. A bowling ball and a golf ball on identical-length strings swing with exactly the same period — the bob's mass simply doesn't appear in T=2π√(L/g) at all. Like the spring, the period also doesn't depend on amplitude, but with an important caveat this time: that's only true for SMALL swing angles. This is precisely why old pendulum clocks are reliable timekeepers: their period depends only on length and gravity, both of which stay essentially constant.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>The pendulum period formula is only an approximation, valid for small angles — it relies on the small-angle approximation sinθ≈θ, which is what makes the pendulum's restoring force approximately (not exactly) proportional to displacement. For large swing angles, the true period is noticeably longer than T=2π√(L/g) predicts, and the motion technically isn't pure SHM anymore. Don't apply this formula uncritically to a pendulum swinging through a large arc.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Pendulum Period.</strong> Find the period of a 1.0 m long pendulum on Earth, swinging through a small angle.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">T = 2π√(L/g) = 2π√(1.0/9.8) = 2π√0.102 = 2π(0.319) ≈ <strong>2.0 s</strong>. This is a genuinely useful number to remember — a roughly 1-meter-long pendulum has almost exactly a 2-second period on Earth, which is precisely why the original definition of the meter was, for a time, tied to a pendulum with a half-period of one second.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute a pendulum's period given its length and the local gravitational field strength.</li>
      <li>Explain why pendulum period is independent of the bob's mass.</li>
      <li>Explain why the standard pendulum period formula is only valid for small swing angles.</li>
    </ul>
  </div>

  <h2 id="s74"><span class="num">7.4</span>Energy in Simple Harmonic Motion</h2>
  <p>An oscillating system's total mechanical energy stays perfectly constant (assuming no friction or air resistance) — exactly the conservation-of-energy principle from Unit 3, just now continuously trading between kinetic and elastic (or gravitational, for a pendulum) potential energy throughout the cycle.</p>

  <div class="eq">
    <div class="main">E<sub>total</sub> = ½kA² = ½mv<sub>max</sub>²</div>
    <div class="sub">total mechanical energy in SHM — constant throughout the motion, for a spring-mass system</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>This is Unit 3, wearing a new costume</div>
    <p>At maximum displacement (x=±A), all the system's energy is potential (½kA²) and kinetic energy is zero, since velocity is zero there. At equilibrium (x=0), all the energy is kinetic (½mv<sub>max</sub>²) and potential energy is zero. In between, the two continuously trade off, always summing to the same constant total — this is the exact same KE-PE trade-off you already mastered for gravitational PE in Unit 3, just now with elastic PE (or, for a pendulum, gravitational PE) playing the "stored energy" role.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Doubling the amplitude of an SHM system doesn't double its total energy — since E<sub>total</sub>=½kA² depends on A<em>squared</em>, doubling the amplitude actually <strong>quadruples</strong> the total energy. This is the same squared-dependence trap that showed up with elastic PE back in Unit 3, reappearing here in the exact same mathematical form.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Finding Maximum Speed from Energy.</strong> A 0.50 kg mass oscillates on a spring with k=300 N/m and amplitude 0.10 m. Find its maximum speed.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Total energy: E = ½kA² = ½(300)(0.10)² = ½(300)(0.010) = 1.5 J. At the equilibrium position, all of this energy is kinetic: 1.5 = ½(0.50)v<sub>max</sub>², so v<sub>max</sub>² = 6.0, giving v<sub>max</sub> = √6.0 ≈ <strong>2.4 m/s</strong>. Notice this approach never required finding the period or angular frequency at all — pure energy conservation was enough.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute total mechanical energy in an SHM system from either amplitude or maximum speed.</li>
      <li>Explain how kinetic and potential energy trade off throughout an SHM cycle.</li>
      <li>Explain why total energy scales with the square of amplitude, not linearly.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 7 Practice Set</h2>
  <p>Work through every problem before checking the answer key.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why velocity is zero and acceleration is maximum at the extremes of SHM, while the reverse is true at the equilibrium point.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A pendulum bob is replaced with one of twice the mass, with the string length unchanged. Explain what happens to the period.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Explain why the standard pendulum period formula becomes inaccurate for large swing angles.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A mass-spring system's amplitude is tripled. Explain what happens to its total mechanical energy, and to its period.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain the connection between SHM's energy conservation and the gravitational energy conservation studied in Unit 3.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>An oscillator completes 20 cycles in 8.0 s. Find its period and frequency.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A 3.0 kg mass is attached to a spring with k=120 N/m. Find the period of oscillation.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>Find the period of a 2.5 m long pendulum on Earth.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A spring with k=250 N/m has 0.20 m of amplitude. Find the total mechanical energy of the oscillation.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A 1.0 kg mass oscillates with maximum speed 3.0 m/s. Find the total mechanical energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A spring stretches 0.12 m when a 4.0 kg mass hangs from it at rest. Find the spring constant.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Find the length of a pendulum with a period of exactly 1.0 s on Earth.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>An oscillator has amplitude 0.15 m and angular frequency 8.0 rad/s. Find its maximum speed (v_max=Aω).</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">At the extremes, the restoring force (and therefore acceleration) is at its maximum, since displacement from equilibrium is greatest there — but the object has momentarily stopped to reverse direction, so velocity is zero. At equilibrium, displacement (and restoring force, and acceleration) is zero, but the object has had the whole swing to build up speed, so velocity is maximum there.</div></details>
    <details><summary>Question 2</summary><div class="a-content">The period stays exactly the same. Pendulum period, T=2π√(L/g), does not depend on the bob's mass at all — only on the string length and local gravity.</div></details>
    <details><summary>Question 3</summary><div class="a-content">The formula relies on the small-angle approximation sinθ≈θ, which makes the restoring force approximately (not exactly) proportional to displacement. For large angles, this approximation breaks down, the true restoring force differs meaningfully from −kx, and the actual period becomes noticeably longer than the formula predicts.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Total mechanical energy increases ninefold, since E=½kA² depends on A². The period, however, is completely unaffected by amplitude — it stays exactly the same.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Both are the same underlying principle: total mechanical energy (KE+PE) stays constant in the absence of non-conservative forces, continuously trading between kinetic and potential forms. In Unit 3, that potential energy was gravitational (mgh) or elastic (½kx²); in SHM, it's typically elastic (spring) or gravitational (pendulum) — the conservation law itself is identical.</div></details>
    <details><summary>Question 6</summary><div class="a-content">T = 8.0/20 = <strong>0.40 s</strong>. f = 1/T = <strong>2.5 Hz</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">T = 2π√(m/k) = 2π√(3.0/120) = 2π√0.025 ≈ <strong>0.99 s</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">T = 2π√(L/g) = 2π√(2.5/9.8) = 2π√0.255 ≈ <strong>3.2 s</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">E = ½kA² = ½(250)(0.20)² = ½(250)(0.04) = <strong>5.0 J</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">E = ½mv_max² = ½(1.0)(3.0)² = ½(1.0)(9.0) = <strong>4.5 J</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">At equilibrium, spring force balances weight: kx=mg, so k = mg/x = (4.0)(9.8)/0.12 ≈ <strong>327 N/m</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">Solving T=2π√(L/g) for L: L = g(T/2π)² = 9.8(1.0/2π)² = 9.8(0.02533) ≈ <strong>0.248 m</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">v_max = Aω = (0.15)(8.0) = <strong>1.2 m/s</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 7 QBank</strong> to drill these ideas, then move on to <strong>Unit 8 — Fluids</strong>, the final unit of the course.
  </div>

</div>
`,
  8: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 1</div>
  <h1>Fluids</h1>
  <p class="sub">The final unit of the course, and in some ways the most satisfying one to arrive at — because almost nothing here is new. Pressure is just force spread over area. Buoyancy is just Newton's Second Law with a new name for one of the forces. Bernoulli's equation is just energy conservation, wearing a fluid's clothing. You've been building toward this unit all year without realizing it.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 10–15%</span>
    <span class="pill">6 topics</span>
    <span class="pill">65 practice questions</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s81">8.1 Density and Pressure</a></li>
    <li><a href="#s82">8.2 Pressure Variation with Depth</a></li>
    <li><a href="#s83">8.3 Pascal's Principle</a></li>
    <li><a href="#s84">8.4 Buoyancy and Archimedes' Principle</a></li>
    <li><a href="#s85">8.5 Fluid Flow and the Continuity Equation</a></li>
    <li><a href="#s86">8.6 Bernoulli's Equation</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Every Idea Here Is a Familiar Idea in Disguise</span>
    <p>This unit rewards recognizing the pattern more than memorizing new formulas:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Pressure</strong> — just force divided by area, a rescaled version of a concept you already know.</li>
      <li><strong>Buoyancy</strong> — just another force to add to a free-body diagram and plug into F<sub>net</sub>=ma, exactly like Unit 2.</li>
      <li><strong>Continuity and Bernoulli's equation</strong> — conservation of mass and conservation of energy (Unit 3), respectively, both simply reapplied to a moving fluid instead of a solid object.</li>
    </ul>
    <p style="margin-top:10px;">Whenever a fluids problem feels unfamiliar, ask yourself which Unit 1–4 concept it's secretly reusing. It almost always is one.</p>
  </div>

  <h2 id="s81"><span class="num">8.1</span>Density and Pressure</h2>
  <p>Density and pressure are the two foundational quantities this whole unit is built from — one describing how "packed" a substance is, the other describing how a force gets distributed across a surface.</p>

  <div class="eq">
    <div class="main">ρ = m/V &nbsp;·&nbsp; P = F/A</div>
    <div class="sub">density: kg/m³ · pressure: Pa (pascals) = N/m²</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Pressure Is a Scalar</span>
    <p>Unlike force, pressure has no direction of its own — it's a scalar quantity. A fluid pushes on a surface in a direction perpendicular to that surface, but the pressure VALUE itself is just a number, the same in every direction at a given point in a fluid. This is part of why fluids behave so differently from rigid solids: push on one part of a contained fluid, and that pressure change propagates in all directions, not just "forward."</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Density is an intensive property — it doesn't depend on how much of a substance you have. A teaspoon of water and an entire swimming pool of water have the exact same density, even though their masses and volumes are wildly different. Don't confuse density (a ratio) with mass or volume (which do scale with the amount of material present).</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Pressure from a Force.</strong> A 500 N force is applied evenly across a surface with area 0.25 m². Find the pressure.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">P = F/A = 500/0.25 = <strong>2000 Pa</strong>. Notice that spreading the exact same force over a larger area would produce less pressure — this is the entire physical principle behind snowshoes, which spread a person's weight over a much larger area to avoid sinking into soft snow.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute density given mass and volume, and pressure given force and area.</li>
      <li>Explain why pressure is a scalar quantity, unlike force.</li>
      <li>Explain why density does not depend on the amount of a substance present.</li>
    </ul>
  </div>

  <h2 id="s82"><span class="num">8.2</span>Pressure Variation with Depth</h2>
  <p>Pressure inside a fluid increases with depth, for an intuitive reason: at any given depth, you're supporting the weight of all the fluid sitting above you.</p>

  <div class="eq">
    <div class="main">P = P<sub>0</sub> + ρgh</div>
    <div class="sub">P<sub>0</sub> = pressure at the surface (often atmospheric pressure) · h = depth below that surface</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Pressure at a Given Depth Is the Same in Every Direction</span>
    <p>At a specific depth in a fluid, pressure pushes equally hard in every direction — up, down, and sideways — not just straight down as you might first guess. This is exactly why a submerged object feels squeezed from all sides, not just pressed downward, and it's the reason two containers of wildly different shapes, filled with the same fluid to the same depth, have identical pressure at the bottom — sometimes called the "hydrostatic paradox," since it feels like the wider container's larger total weight of fluid should matter, but it doesn't.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Pressure at a given depth depends only on depth and density (and the surface pressure) — NOT on the total volume or total amount of fluid present. A narrow test tube and a wide swimming pool filled with water to the exact same depth have identical pressure at the bottom, even though the pool contains vastly more total water. Don't assume "more fluid" means "more pressure" — only depth matters.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Pressure at Depth.</strong> Find the total pressure 5.0 m below the surface of a lake, given atmospheric pressure at the surface is 1.0×10⁵ Pa.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">P = P<sub>0</sub> + ρgh = 1.0×10⁵ + (1000)(9.8)(5.0) = 1.0×10⁵ + 49,000 = <strong>1.49×10⁵ Pa</strong>. Notice how significant the added pressure from the water itself already is at just 5 meters — pressure builds quickly with depth, which is exactly why deep-sea vehicles need such robust construction.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute pressure at a given depth using P=P0+ρgh.</li>
      <li>Explain why pressure at a point in a fluid acts equally in all directions.</li>
      <li>Explain why pressure at a given depth is independent of the container's total volume or shape.</li>
    </ul>
  </div>

  <h2 id="s83"><span class="num">8.3</span>Pascal's Principle</h2>
  <p>Pascal's Principle states that a pressure change applied anywhere to an enclosed fluid is transmitted, undiminished, to every point in that fluid and to the walls of its container. This single idea is the foundation of every hydraulic system — car lifts, hydraulic brakes, forklifts, and more.</p>

  <div class="eq">
    <div class="main">P<sub>1</sub> = P<sub>2</sub> &nbsp;&nbsp;i.e.&nbsp;&nbsp; F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub></div>
    <div class="sub">for two connected pistons on the same enclosed fluid, at the same height</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Hydraulic lifts don't break energy conservation</div>
    <p>A small input force on a small piston can produce a huge output force on a large piston — it can feel almost magical, like getting something for nothing. It isn't. Since the fluid is (essentially) incompressible, the volume pushed in by the small piston must exactly equal the volume that comes out at the large piston — meaning the small piston has to travel a much LARGER distance than the large piston moves. Work in (small force, large distance) still equals work out (large force, small distance): energy conservation holds exactly, the same way it did for a lever back in Unit 5.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>A Hydraulic Lift.</strong> A hydraulic lift has a small piston of area 0.010 m² and a large piston of area 0.50 m². A 200 N force is applied to the small piston. Find the force produced at the large piston.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using Pascal's Principle, F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>: 200/0.010 = F<sub>2</sub>/0.50, so F<sub>2</sub> = (200)(0.50)/0.010 = <strong>10,000 N</strong>. A 200 N push produces 10,000 N of lifting force — a 50-fold multiplication, exactly matching the 50-fold ratio between the two piston areas (0.50/0.010=50).</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>State Pascal's Principle and apply F1/A1=F2/A2 to a hydraulic system.</li>
      <li>Explain why a hydraulic lift's force multiplication doesn't violate energy conservation.</li>
      <li>Explain what stays equal (pressure) and what differs (force) between two connected pistons of different area.</li>
    </ul>
  </div>

  <h2 id="s84"><span class="num">8.4</span>Buoyancy and Archimedes' Principle</h2>
  <p>Buoyant force is the upward force a fluid exerts on any object submerged (fully or partially) within it — and it's just one more force to add to a free-body diagram, exactly like gravity, normal force, or tension back in Unit 2.</p>

  <div class="eq">
    <div class="main">F<sub>b</sub> = ρ<sub>fluid</sub>V<sub>displaced</sub>g</div>
    <div class="sub">Archimedes' Principle — buoyant force equals the weight of the fluid displaced by the object</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Displaced Fluid, Not the Object's Own Weight</span>
    <p>Buoyant force depends on the weight of the fluid the object <em>pushes out of the way</em> — not on the object's own weight or density at all. A solid steel ball and a hollow plastic ball of the identical size (same volume) submerged in water experience the exact same buoyant force, since they displace the exact same volume of water — even though one sinks and the other floats. What determines floating vs. sinking is how that (identical) buoyant force compares to each object's own (very different) weight.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>For a floating object, buoyant force exactly equals the object's weight (equilibrium) — but that does NOT mean the entire object is submerged. Only PART of a floating object needs to be underwater to displace enough fluid to generate a buoyant force equal to its full weight; the fraction submerged depends on the ratio of the object's density to the fluid's density.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Fraction of an Iceberg Submerged.</strong> Ice has a density of about 920 kg/m³; seawater has a density of about 1025 kg/m³. Find the fraction of an iceberg's volume that lies below the waterline.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">For a floating object, buoyant force equals weight: ρ<sub>fluid</sub>V<sub>submerged</sub>g = ρ<sub>object</sub>V<sub>total</sub>g. The g's cancel, and rearranging: V<sub>submerged</sub>/V<sub>total</sub> = ρ<sub>object</sub>/ρ<sub>fluid</sub> = 920/1025 ≈ <strong>0.90, or about 90%</strong>. This is exactly where the expression "tip of the iceberg" comes from — only about 10% of an iceberg's volume is actually visible above the waterline.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Compute buoyant force using Archimedes' Principle, given the fluid's density and the displaced volume.</li>
      <li>Explain why buoyant force depends on displaced fluid, not on the submerged object's own weight or density.</li>
      <li>Find the fraction of a floating object's volume that is submerged, given the relevant densities.</li>
    </ul>
  </div>

  <h2 id="s85"><span class="num">8.5</span>Fluid Flow and the Continuity Equation</h2>
  <p>The continuity equation is simply conservation of mass, applied to a flowing, incompressible fluid — whatever volume of fluid flows into one end of a pipe per second must flow out the other end per second, since the fluid can't be created, destroyed, or compressed along the way.</p>

  <div class="eq">
    <div class="main">A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub></div>
    <div class="sub">the continuity equation — volume flow rate (Av) stays constant along a pipe</div>
  </div>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Narrower Means Faster</span>
    <p>Since A<sub>1</sub>v<sub>1</sub> must equal A<sub>2</sub>v<sub>2</sub>, a fluid speeds up wherever a pipe narrows, and slows down wherever it widens — the same fluid "squeezing through" a smaller opening has to move faster to keep the same volume flowing past per second. This is exactly why putting your thumb over the end of a garden hose makes the water shoot out faster: you've reduced the exit area, and continuity forces the exit speed to increase to compensate.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 5</span>
    <p><strong>Speed Change in a Narrowing Pipe.</strong> Water flows at 3.0 m/s through a pipe with cross-sectional area 0.020 m². The pipe narrows to an area of 0.0050 m². Find the fluid's speed in the narrower section.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Using A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>: (0.020)(3.0) = (0.0050)v<sub>2</sub>, so v<sub>2</sub> = 0.060/0.0050 = <strong>12 m/s</strong>. The area shrank to one-fourth its original size, and the speed correspondingly quadrupled — exactly consistent with keeping the product Av constant.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Apply the continuity equation to find an unknown speed or area in a flowing fluid system.</li>
      <li>Explain why fluid speeds up in a narrower section of pipe and slows down in a wider one.</li>
      <li>Explain the continuity equation as a statement of mass (or volume) conservation for an incompressible fluid.</li>
    </ul>
  </div>

  <h2 id="s86"><span class="num">8.6</span>Bernoulli's Equation</h2>
  <p>Bernoulli's equation is conservation of energy, applied to a flowing fluid — it relates pressure, speed, and height at any two points along the same flow, and it's the capstone idea this entire unit has been building toward.</p>

  <div class="eq">
    <div class="main">P<sub>1</sub> + ½ρv<sub>1</sub>² + ρgh<sub>1</sub> = P<sub>2</sub> + ½ρv<sub>2</sub>² + ρgh<sub>2</sub></div>
    <div class="sub">valid along a streamline, for an ideal (incompressible, non-viscous) fluid</div>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Recognize the three familiar terms</div>
    <p>Look closely at Bernoulli's equation and you'll see three old friends: P (a measure of a fluid's "stored" energy from being under pressure), ½ρv² (literally kinetic energy per unit volume — compare to ½mv²), and ρgh (literally gravitational potential energy per unit volume — compare to mgh). This equation is nothing more than "energy in = energy out," from Unit 3, rewritten in terms of energy PER UNIT VOLUME of fluid instead of per object. If a fluid speeds up, something else in the equation — usually pressure — has to decrease to compensate, exactly like KE and PE trading off for a solid object.</p>
  </div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Faster-moving fluid has <strong>lower</strong> pressure, not higher — a genuinely counterintuitive result the first time you encounter it (this is the Bernoulli effect, behind everything from airplane wings to why a shower curtain gets pulled inward). Don't assume "faster flow" means "pushing harder" in the pressure sense; in Bernoulli's equation, an increase in the ½ρv² term has to be balanced by a decrease in the P term (for fluid at the same height), not the other way around.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 6</span>
    <p><strong>Pressure Change in a Horizontal Pipe.</strong> Water (ρ=1000 kg/m³) flows horizontally, speeding up from 2.0 m/s to 6.0 m/s as a pipe narrows. Find the pressure drop between the two points.</p>
    <details class="solution"><summary>Show the reasoning</summary>
      <div class="sol-content">Since the pipe is horizontal, h<sub>1</sub>=h<sub>2</sub>, so the ρgh terms cancel from both sides entirely. Bernoulli's equation simplifies to: P<sub>1</sub> − P<sub>2</sub> = ½ρv<sub>2</sub>² − ½ρv<sub>1</sub>² = ½ρ(v<sub>2</sub>²−v<sub>1</sub>²) = ½(1000)(36−4) = ½(1000)(32) = <strong>16,000 Pa</strong>. The pressure in the narrower, faster-moving section is 16,000 Pa lower than in the wider section — a direct, quantitative example of the Bernoulli effect.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Apply Bernoulli's equation to relate pressure, speed, and height at two points in a flow.</li>
      <li>Explain each term in Bernoulli's equation as an energy-per-volume analog of a familiar Unit 3 concept.</li>
      <li>Explain why faster-moving fluid corresponds to lower pressure, not higher.</li>
    </ul>
  </div>

  <h2 id="practice">Unit 8 Practice Set</h2>
  <p>Work through every problem before checking the answer key. This is the last practice set of the course — treat it accordingly.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why a wide swimming pool and a narrow test tube, both filled with water to the same depth, have equal pressure at the bottom.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A solid steel ball and a hollow plastic ball of the same size are both fully submerged in water. Compare the buoyant force on each, and explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Explain why a hydraulic lift's force multiplication does not violate conservation of energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Explain why water shoots out faster when you partially cover the end of a garden hose with your thumb.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain why faster-moving fluid has lower pressure, using Bernoulli's equation.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>Find the density of an object with mass 600 kg and volume 0.40 m³.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the pressure produced by a 900 N force spread over an area of 0.30 m².</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>Find the total pressure 12 m below the surface of a lake (P0=1.0×10⁵ Pa).</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A hydraulic lift has piston areas 0.008 m² and 0.40 m². Find the output force for a 150 N input force.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>Find the buoyant force on an object that displaces 0.030 m³ of water.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A block (density 700 kg/m³) floats in water (density 1000 kg/m³). Find the fraction of its volume submerged.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Water flows at 4.0 m/s through a 0.050 m² pipe that narrows to 0.010 m². Find the speed in the narrow section.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>Water flows horizontally, speeding up from 1.0 m/s to 5.0 m/s. Find the pressure drop.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Pressure at depth depends only on P=P0+ρgh — density, gravity, and depth — with no dependence on the container's shape or total volume of fluid. Since both containers hold the same fluid to the same depth, their bottom pressures are identical despite vastly different total water volumes.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Equal buoyant force. Since F_b=ρ_fluid V_displaced g depends only on the displaced fluid's volume (identical for both balls, since they're the same size), and not on the object's own density or weight, both balls experience the exact same buoyant force — even though the steel ball sinks and the plastic ball floats.</div></details>
    <details><summary>Question 3</summary><div class="a-content">Because the incompressible fluid conserves volume, the small piston must travel a much larger distance than the large piston moves. Work (force × distance) balances on both sides: small force over large distance equals large force over small distance — the same energy-conservation logic as a lever.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Covering part of the hose's opening reduces the exit area. By the continuity equation (A1v1=A2v2), a smaller exit area requires a higher exit speed to maintain the same volume flow rate through the hose.</div></details>
    <details><summary>Question 5</summary><div class="a-content">In Bernoulli's equation, an increase in the ½ρv² (kinetic energy) term must be compensated by a decrease in the P (pressure) term, assuming height stays constant — since the sum of all the energy terms must remain constant along the flow, just like KE and PE trading off for a solid object.</div></details>
    <details><summary>Question 6</summary><div class="a-content">ρ = m/V = 600/0.40 = <strong>1500 kg/m³</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">P = F/A = 900/0.30 = <strong>3000 Pa</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">P = P0+ρgh = 1.0×10⁵+(1000)(9.8)(12) = 1.0×10⁵+117,600 = <strong>2.176×10⁵ Pa</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">F2 = F1(A2/A1) = 150(0.40/0.008) = 150(50) = <strong>7500 N</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">F_b = ρVg = (1000)(0.030)(9.8) = <strong>294 N</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">Fraction submerged = ρ_object/ρ_fluid = 700/1000 = <strong>0.70, or 70%</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">v2 = A1v1/A2 = (0.050)(4.0)/0.010 = <strong>20 m/s</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">ΔP = ½ρ(v2²−v1²) = ½(1000)(25−1) = ½(1000)(24) = <strong>12,000 Pa</strong>.</div></details>
  </div>

  <div class="footer-nav">
    <strong>That completes all 8 units of AP Physics 1.</strong> Rotate back through earlier units to keep everything sharp before exam day — Units 2 and 3 (Force and Energy) carry the most exam weight, so they're worth the most review time if you're short on it.
  </div>

</div>
`,
};

const UNITS = [
  { id: 1, name: "Kinematics", weight: "10–15%", ready: true },
  { id: 2, name: "Force and Translational Dynamics", weight: "18–23%", ready: true },
  { id: 3, name: "Work, Energy, and Power", weight: "18–23%", ready: true },
  { id: 4, name: "Linear Momentum", weight: "10–15%", ready: true },
  { id: 5, name: "Torque and Rotational Dynamics", weight: "10–15%", ready: true },
  { id: 6, name: "Energy and Momentum of Rotating Systems", weight: "5–8%", ready: true },
  { id: 7, name: "Oscillations", weight: "5–8%", ready: true },
  { id: 8, name: "Fluids", weight: "10–15%", ready: true },
];

const QUESTIONS = {
  1: [
    { id: "1-1", topic: "1.1 Position, Displacement, Distance", stem: "A person walks 8.0 m east, then 3.0 m west. Find the total distance traveled and the magnitude of the total displacement.", choices: ["Distance 5.0 m; displacement 5.0 m", "Distance 11 m; displacement 5.0 m", "Distance 11 m; displacement 11 m", "Distance 5.0 m; displacement 11 m"], correct: 1, explanation: "Distance simply adds path lengths regardless of direction: 8.0 + 3.0 = 11 m. Displacement is the net change in position: 8.0 m east minus 3.0 m west = 5.0 m east. This is the core distinction the whole section is built around — distance never cancels, displacement does." },
    { id: "1-2", topic: "1.1 Position, Displacement, Distance", stem: "An object starts at position x = −4.0 m and ends at position x = 6.0 m. Find its displacement.", choices: ["−10 m", "2.0 m", "10 m", "−2.0 m"], correct: 2, explanation: "Displacement is Δx = x_final − x_initial = 6.0 − (−4.0) = 10 m. Subtracting a negative number is easy to fumble under time pressure — writing out x_final − x_initial explicitly, rather than doing it in your head, avoids that error." },
    { id: "1-3", topic: "1.1 Position, Displacement, Distance", stem: "Which of the following quantities is a vector?", choices: ["Distance", "Speed", "Displacement", "Time"], correct: 2, explanation: "Displacement has both a magnitude and a direction, making it a vector. Distance, speed, and time are all scalars — they carry a size but no directional information at all." },
    { id: "1-4", topic: "1.1 Position, Displacement, Distance", stem: "An object moves from x = 2.0 m to x = 2.0 m, taking a curved path along the way that covers 15 m of ground. Find its displacement and distance.", choices: ["Displacement 0 m; distance 0 m", "Displacement 15 m; distance 15 m", "Displacement 0 m; distance 15 m", "Displacement 15 m; distance 0 m"], correct: 2, explanation: "Since the object starts and ends at the exact same position, displacement is exactly zero, no matter how winding the path was. Distance only cares about the path actually traveled, which was 15 m — this is the same round-trip logic that makes average velocity zero for a full lap." },
    { id: "1-5", topic: "1.1 Position, Displacement, Distance", stem: "Two runners both start at x = 0. Runner A ends at x = +50 m; Runner B ends at x = −50 m. Compare their displacements.", choices: ["Equal in magnitude, same direction", "Equal in magnitude, opposite direction", "Different magnitude, same direction", "Cannot be compared without knowing their paths"], correct: 1, explanation: "Both displacements have the same magnitude, 50 m, since they traveled the same net distance from the origin. But the signs are opposite — Runner A ended in the positive direction, Runner B in the negative — so the displacements point opposite ways." },
    { id: "1-6", topic: "1.1 Position, Displacement, Distance", stem: "Is it possible for an object's distance traveled to be less than the magnitude of its displacement?", choices: ["Yes, if the object moves in a straight line without reversing.", "No, distance is always greater than or equal to the magnitude of displacement.", "Yes, if the object changes direction at least once.", "Yes, if the object starts and ends at the same point."], correct: 1, explanation: "Distance can never be smaller than the magnitude of displacement — the straight-line path (which is what displacement measures) is always the shortest possible route between two points. Distance equals displacement's magnitude only for pure, straight-line, non-reversing motion; any detour or reversal only adds extra distance without adding to displacement." },
    { id: "1-7", topic: "1.1 Position, Displacement, Distance", stem: "A car travels 6.0 km north, then 8.0 km east. Find the magnitude of its total displacement.", choices: ["7.0 km", "10 km", "14 km", "48 km"], correct: 1, explanation: "Since north and east are perpendicular, use the Pythagorean theorem: √(6.0² + 8.0²) = √(36+64) = √100 = 10 km — a classic 6-8-10 right triangle." },
    { id: "1-8", topic: "1.1 Position, Displacement, Distance", stem: "An object's position is given as a function of time. What does it mean if the position value is negative at some time t?", choices: ["The object is moving backward at that instant.", "The object's speed is negative at that instant.", "The object is located in the negative direction relative to the chosen origin.", "The measurement contains an error."], correct: 2, explanation: "A negative position simply means the object sits on the negative side of whatever origin was chosen — it says nothing by itself about which direction the object is currently moving. Position, velocity, and their signs are three separate pieces of information that shouldn't be conflated." },
    { id: "1-9", topic: "1.2 Velocity and Speed", stem: "A jogger runs 400 m in 100 s, then walks back the same 400 m in 200 s. Find the average speed and average velocity for the entire trip.", choices: ["Average speed ≈ 2.67 m/s; average velocity ≈ 2.67 m/s", "Average speed ≈ 2.67 m/s; average velocity = 0", "Average speed = 0; average velocity = 0", "Average speed ≈ 1.33 m/s; average velocity ≈ 1.33 m/s"], correct: 1, explanation: "Average speed uses total distance (800 m) over total time (300 s): 800/300 ≈ 2.67 m/s. Average velocity uses total displacement, which is zero since the jogger returns to the start — giving average velocity of exactly 0 m/s, regardless of how far they actually ran." },
    { id: "1-10", topic: "1.2 Velocity and Speed", stem: "An object's position changes from 3.0 m to 15 m over a time interval of 4.0 s. Find its average velocity.", choices: ["3.0 m/s", "3.75 m/s", "4.5 m/s", "12 m/s"], correct: 0, explanation: "v_avg = Δx/Δt = (15−3.0)/4.0 = 12/4.0 = 3.0 m/s." },
    { id: "1-11", topic: "1.2 Velocity and Speed", stem: "On a position-time graph, what does a flat, horizontal segment indicate about the object's motion?", choices: ["The object is moving at constant, nonzero velocity.", "The object is accelerating.", "The object is at rest.", "The object has reached its maximum speed."], correct: 2, explanation: "A horizontal line on an x-t graph has zero slope, and since slope equals velocity, zero slope means zero velocity — the object simply isn't moving during that interval, even though time is still passing." },
    { id: "1-12", topic: "1.2 Velocity and Speed", stem: "Which of the following can be true for an object over some time interval: average velocity is zero, but average speed is not zero?", choices: ["Never — if one is zero, so is the other.", "Only if the object never changes direction.", "Yes — this happens whenever the object returns to its starting position after moving.", "Only if the object moves at constant speed the entire time."], correct: 2, explanation: "This is possible any time an object's net displacement is zero but it covered real distance getting there and back — a round trip is the simplest example. Average speed (built from total distance) stays positive in that case, while average velocity (built from displacement) comes out to exactly zero." },
    { id: "1-13", topic: "1.2 Velocity and Speed", stem: "An object moves in the negative x-direction at a constant rate. Describe its velocity.", choices: ["Positive and increasing", "Negative and constant", "Negative and increasing in magnitude", "Zero"], correct: 1, explanation: "Moving in the negative direction at a constant rate means velocity is negative (direction) and constant in magnitude (steady rate) — no change over time at all, so it's neither increasing nor decreasing." },
    { id: "1-14", topic: "1.2 Velocity and Speed", stem: "A car covers the first half of a fixed distance at 40 km/hr and the second half at 60 km/hr. Is the average speed for the whole trip exactly 50 km/hr?", choices: ["Yes, since 50 is the simple average of 40 and 60.", "No, the average speed is actually less than 50 km/hr, since more time is spent at the slower speed.", "No, the average speed is actually greater than 50 km/hr.", "Yes, but only if the distances are unequal."], correct: 1, explanation: "Simply averaging the two speeds is a common trap — average speed is total distance over total time, not an average of rates. Since the car spends MORE time covering the same distance at the slower 40 km/hr than at 60 km/hr, that slower speed gets weighted more heavily, pulling the true average speed below the naive 50 km/hr midpoint." },
    { id: "1-15", topic: "1.2 Velocity and Speed", stem: "An object travels 20 m in the positive direction, then 20 m in the negative direction, all within 8.0 s total. Find the average velocity.", choices: ["5.0 m/s", "0 m/s", "2.5 m/s", "10 m/s"], correct: 1, explanation: "Total displacement is 20 + (−20) = 0 m, so average velocity is 0/8.0 = 0 m/s — another instance of the round-trip pattern where net displacement, not distance covered, is what matters for velocity." },
    { id: "1-16", topic: "1.2 Velocity and Speed", stem: "What physical quantity does the slope of a position-vs-time graph represent at any given instant?", choices: ["Acceleration", "Displacement", "Instantaneous velocity", "Average speed over the whole graph"], correct: 2, explanation: "The slope of an x-t graph at a specific point in time gives the instantaneous velocity at that exact instant — this is the foundational graph-reading fact the whole of Section 1.4 builds on." },
    { id: "1-17", topic: "1.2 Velocity and Speed", stem: "A swimmer swims 50 m down a pool in 40 s, then immediately swims back 50 m in 45 s. Find the average speed for the full swim.", choices: ["≈ 1.18 m/s", "1.25 m/s", "0 m/s", "≈ 2.35 m/s"], correct: 0, explanation: "Average speed uses total distance over total time: (50+50)/(40+45) = 100/85 ≈ 1.18 m/s. Note this is distinct from average velocity, which would be zero here since the swimmer returns to the start." },
    { id: "1-18", topic: "1.3 Acceleration", stem: "A car's velocity changes from 12 m/s to 20 m/s over 4.0 s. Find its average acceleration.", choices: ["2.0 m/s²", "3.0 m/s²", "8.0 m/s²", "32 m/s²"], correct: 0, explanation: "a_avg = Δv/Δt = (20−12)/4.0 = 8.0/4.0 = 2.0 m/s²." },
    { id: "1-19", topic: "1.3 Acceleration", stem: "An object moving in the positive direction has a negative acceleration. What is happening to its speed?", choices: ["Increasing", "Decreasing", "Staying constant", "Cannot be determined"], correct: 1, explanation: "Positive velocity paired with negative acceleration means the two point in opposite directions — which always means the object is slowing down, regardless of which specific direction is labeled positive." },
    { id: "1-20", topic: "1.3 Acceleration", stem: "An object moving in the negative direction has a negative acceleration. What is happening to its speed?", choices: ["Increasing", "Decreasing", "Staying constant", "Cannot be determined"], correct: 0, explanation: "Negative velocity paired with negative acceleration means the two point in the same direction — same-signed velocity and acceleration always mean speeding up, even though both numbers are negative." },
    { id: "1-21", topic: "1.3 Acceleration", stem: "Can an object have a nonzero acceleration while its velocity is momentarily zero?", choices: ["No, if velocity is zero, acceleration must also be zero.", "Yes — the peak of a ball thrown straight up is a classic example.", "Only if the object is also changing direction at that instant.", "No, this would violate the definition of acceleration."], correct: 1, explanation: "Velocity and acceleration are independent quantities. At the very top of a vertical throw, velocity is momentarily zero, but gravity (acceleration) is still acting at that same instant — this is one of the most frequently tested conceptual points in the whole unit." },
    { id: "1-22", topic: "1.3 Acceleration", stem: "A ball moving to the right slows down, stops, and then speeds up moving to the left. Throughout this entire process, how does its acceleration behave?", choices: ["It changes direction partway through, matching the ball's reversal.", "It stays in the same direction throughout, never changing.", "It is zero throughout, since the ball momentarily stops.", "It cannot be determined without more information."], correct: 1, explanation: "This entire scenario — slowing while moving right, then speeding up while moving left — is exactly what happens under a single, constant acceleration pointing left the whole time (think of a ball rolling up and back down a ramp, or thrown up and falling back down). The acceleration never needs to reverse direction to produce this motion." },
    { id: "1-23", topic: "1.3 Acceleration", stem: "An object's velocity increases from 5.0 m/s to 5.0 m/s over a 10 s interval, after first dropping to 2.0 m/s at the 5 s mark. What is its average acceleration over the full 10 s?", choices: ["0 m/s²", "0.3 m/s²", "0.6 m/s²", "Cannot be determined"], correct: 0, explanation: "Average acceleration only depends on the overall change in velocity across the full interval: Δv = v_final − v_initial = 5.0 − 5.0 = 0, regardless of what happened in between. Average acceleration is 0/10 = 0 m/s², even though the object's velocity clearly wasn't constant throughout." },
    { id: "1-24", topic: "1.3 Acceleration", stem: "A rocket accelerates from rest to 100 m/s in 5.0 s. Find its average acceleration.", choices: ["5.0 m/s²", "20 m/s²", "100 m/s²", "500 m/s²"], correct: 1, explanation: "a_avg = Δv/Δt = (100−0)/5.0 = 20 m/s²." },
    { id: "1-25", topic: "1.3 Acceleration", stem: "Which statement correctly distinguishes velocity from acceleration?", choices: ["Velocity measures how fast position changes; acceleration measures how fast velocity changes.", "Velocity and acceleration are just two different names for the same physical quantity.", "Velocity is a vector; acceleration is always a scalar.", "Acceleration can only be caused by gravity."], correct: 0, explanation: "Velocity is the rate of change of position; acceleration is the rate of change of velocity — one level removed. Both are actually vectors, and acceleration can be caused by any force, not just gravity." },
    { id: "1-26", topic: "1.3 Acceleration", stem: "A cyclist's velocity is constant at 8.0 m/s for a full 10 s interval. Find the average acceleration during that interval.", choices: ["0.8 m/s²", "8.0 m/s²", "0 m/s²", "80 m/s²"], correct: 2, explanation: "Since velocity doesn't change at all (constant 8.0 m/s throughout), Δv = 0, so average acceleration is exactly zero — constant velocity always means zero acceleration, by definition." },
    { id: "1-27", topic: "1.4 Motion Graphs", stem: "A v-t graph shows a straight line with a constant positive slope. What does this indicate about the object's acceleration?", choices: ["Zero and constant", "Positive and constant", "Positive and increasing", "Negative and constant"], correct: 1, explanation: "The slope of a v-t graph is acceleration. A straight line has a constant slope, and a positive slope means positive acceleration — so the object has constant, positive acceleration throughout." },
    { id: "1-28", topic: "1.4 Motion Graphs", stem: "A v-t graph shows velocity constant at 6.0 m/s for 5.0 s. Find the displacement over that interval.", choices: ["1.2 m", "6.0 m", "11 m", "30 m"], correct: 3, explanation: "Displacement is the area under a v-t graph. A constant velocity gives a rectangle: area = (6.0 m/s)(5.0 s) = 30 m." },
    { id: "1-29", topic: "1.4 Motion Graphs", stem: "A v-t graph shows velocity decreasing linearly from 12 m/s to 0 m/s over 6.0 s. Find the displacement.", choices: ["18 m", "36 m", "72 m", "2.0 m"], correct: 1, explanation: "The area under this v-t graph is a triangle: ½(base)(height) = ½(6.0)(12) = 36 m." },
    { id: "1-30", topic: "1.4 Motion Graphs", stem: "An a-t graph shows a constant acceleration of 3.0 m/s² for 4.0 s. Find the change in velocity over that time.", choices: ["0.75 m/s", "3.0 m/s", "7.0 m/s", "12 m/s"], correct: 3, explanation: "Change in velocity is the area under an a-t graph: (3.0 m/s²)(4.0 s) = 12 m/s — a rectangle, since acceleration is constant." },
    { id: "1-31", topic: "1.4 Motion Graphs", stem: "On a position-time graph, how can you tell that an object is accelerating?", choices: ["The graph is a straight line.", "The graph's slope is changing over time (the curve is bending).", "The graph passes through the origin.", "The graph has a positive y-intercept."], correct: 1, explanation: "A straight-line x-t graph means constant velocity (zero acceleration). A curving x-t graph means the slope — velocity — is changing over time, which is exactly the definition of acceleration." },
    { id: "1-32", topic: "1.4 Motion Graphs", stem: "A v-t graph shows velocity that is negative and becoming less negative (moving toward zero) over time, in a straight line. What is the sign of the acceleration?", choices: ["Negative", "Positive", "Zero", "Cannot be determined from a v-t graph"], correct: 1, explanation: "Since velocity is increasing over time (moving from a more negative value toward zero, i.e., increasing), and the slope of a v-t graph gives acceleration, an increasing straight-line trend on a v-t graph means a positive slope, hence positive acceleration — even though the velocity itself stays negative throughout this interval." },
    { id: "1-33", topic: "1.4 Motion Graphs", stem: "A v-t graph consists of a straight line from (0s, 4 m/s) to (6s, 16 m/s). Find the object's acceleration and its displacement over those 6 seconds.", choices: ["a = 2.0 m/s²; Δx = 60 m", "a = 2.0 m/s²; Δx = 96 m", "a = 12 m/s²; Δx = 60 m", "a = 2.0 m/s²; Δx = 24 m"], correct: 0, explanation: "Acceleration is the slope: (16−4)/6 = 2.0 m/s². Displacement is the area under the trapezoid-shaped region: ½(4+16)(6) = ½(20)(6) = 60 m." },
    { id: "1-34", topic: "1.4 Motion Graphs", stem: "Which type of graph would you use to find an object's displacement over a given time interval, without needing any equations?", choices: ["Position-time graph, by reading a single value", "Velocity-time graph, by finding the area under the curve", "Acceleration-time graph, by reading the slope", "None of these graphs can give displacement directly"], correct: 1, explanation: "The area under a v-t graph gives displacement directly — this is one of the two central slope/area relationships in the unit, and it works regardless of whether acceleration is constant or changing, as long as you can compute (or estimate) the area." },
    { id: "1-35", topic: "1.4 Motion Graphs", stem: "An x-t graph is a straight, horizontal line for the first 3 s, then a straight line with positive slope for the next 3 s. Describe the object's motion during each phase.", choices: ["Moving at constant velocity, then at rest", "At rest, then moving at constant positive velocity", "Accelerating, then at rest", "At rest the entire time"], correct: 1, explanation: "A horizontal x-t segment means zero slope, hence zero velocity — the object is at rest for the first 3 s. A positive-sloped straight line means constant positive velocity for the next 3 s — the object begins moving at a steady rate." },
    { id: "1-36", topic: "1.4 Motion Graphs", stem: "A v-t graph shows velocity going from +5 m/s at t=0 down through zero to −5 m/s at t=4s, in a straight line. Find the total displacement over those 4 seconds.", choices: ["0 m", "20 m", "10 m", "−10 m"], correct: 0, explanation: "This forms two triangular areas of equal size but opposite sign — one above the time axis (positive displacement while v>0) and one below it (negative displacement while v<0). Since the line is symmetric, these two areas exactly cancel, giving a total displacement of 0 m — even though the object was moving the entire time." },
    { id: "1-37", topic: "1.5 Kinematic Equations", stem: "An object starts at rest and accelerates at 4.0 m/s² for 5.0 s. Find its final velocity.", choices: ["9.0 m/s", "20 m/s", "0.8 m/s", "40 m/s"], correct: 1, explanation: "Using v = v0 + at: v = 0 + (4.0)(5.0) = 20 m/s." },
    { id: "1-38", topic: "1.5 Kinematic Equations", stem: "An object starts at rest and accelerates at 3.0 m/s² for 4.0 s. Find the distance it travels.", choices: ["12 m", "24 m", "48 m", "6.0 m"], correct: 1, explanation: "Using Δx = v0t + ½at² with v0=0: Δx = ½(3.0)(4.0)² = ½(3.0)(16) = 24 m." },
    { id: "1-39", topic: "1.5 Kinematic Equations", stem: "A car traveling at 15 m/s accelerates uniformly at 2.0 m/s² over a distance of 100 m. Find its final velocity.", choices: ["19.4 m/s", "25 m/s", "35 m/s", "10 m/s"], correct: 1, explanation: "Using v² = v0² + 2aΔx: v² = 15² + 2(2.0)(100) = 225 + 400 = 625, so v = √625 = 25 m/s." },
    { id: "1-40", topic: "1.5 Kinematic Equations", stem: "An object's velocity increases from 6.0 m/s to 18 m/s while covering 96 m. Find its acceleration.", choices: ["1.0 m/s²", "1.5 m/s²", "2.0 m/s²", "3.0 m/s²", ], correct: 1, explanation: "Using v² = v0² + 2aΔx: 18² = 6.0² + 2a(96), so 324 = 36 + 192a, giving a = 288/192 = 1.5 m/s²." },
    { id: "1-41", topic: "1.5 Kinematic Equations", stem: "A ball moving at 10 m/s decelerates uniformly and stops after traveling 25 m. Find the time it took to stop.", choices: ["2.5 s", "5.0 s", "0.4 s", "12.5 s"], correct: 1, explanation: "Using Δx = ½(v0+v)t: 25 = ½(10+0)t, so 25 = 5t, giving t = 5.0 s — using the equation that avoids solving for acceleration first, since it wasn't asked for." },
    { id: "1-42", topic: "1.5 Kinematic Equations", stem: "Which of the four kinematic equations should be used to find final velocity when you're given initial velocity, acceleration, and time, but NOT displacement?", choices: ["v = v0 + at", "Δx = v0t + ½at²", "v² = v0² + 2aΔx", "Δx = ½(v0+v)t"], correct: 0, explanation: "The equation v = v0 + at is the one that doesn't require Δx at all — it's built entirely from v0, a, t, and v, exactly matching what's given and what's asked for here." },
    { id: "1-43", topic: "1.5 Kinematic Equations", stem: "A plane starts at rest and must reach a takeoff speed of 70 m/s after accelerating uniformly over a 1400 m runway. Find the required acceleration.", choices: ["0.5 m/s²", "1.75 m/s²", "3.5 m/s²", "50 m/s²"], correct: 1, explanation: "Using v² = v0² + 2aΔx: 70² = 0 + 2a(1400), so 4900 = 2800a, giving a = 1.75 m/s²." },
    { id: "1-44", topic: "1.5 Kinematic Equations", stem: "An object moves with constant acceleration. Given only v0, v, and Δx, which equation lets you find the elapsed time without first solving for acceleration?", choices: ["v = v0 + at", "Δx = v0t + ½at²", "v² = v0² + 2aΔx", "Δx = ½(v0+v)t"], correct: 3, explanation: "Δx = ½(v0+v)t is the only one of the four equations that doesn't include acceleration at all — exactly matching a problem that gives v0, v, and Δx but not a, and asks for t." },
    { id: "1-45", topic: "1.5 Kinematic Equations", stem: "A car moving at 20 m/s brakes at a constant −4.0 m/s². Find how far it travels before stopping.", choices: ["25 m", "50 m", "80 m", "100 m"], correct: 1, explanation: "Using v² = v0² + 2aΔx: 0 = 20² + 2(−4.0)Δx, so 0 = 400 − 8.0Δx, giving Δx = 400/8.0 = 50 m." },
    { id: "1-46", topic: "1.5 Kinematic Equations", stem: "An object undergoes two separate phases of motion: first accelerating from rest at 2.0 m/s² for 3.0 s, then continuing at whatever velocity it reached, at constant speed, for another 4.0 s. Find the total distance covered.", choices: ["9.0 m", "24 m", "33 m", "42 m"], correct: 2, explanation: "Phase 1: Δx = ½(2.0)(3.0)² = 9.0 m, reaching v = (2.0)(3.0) = 6.0 m/s. Phase 2 (constant velocity): Δx = (6.0)(4.0) = 24 m. Total: 9.0 + 24 = 33 m — this only works by splitting the motion into its two separate constant-acceleration phases, exactly as the trap box in 1.5 warns." },
    { id: "1-47", topic: "1.5 Kinematic Equations", stem: "An object undergoes straight-line motion with constant acceleration: v0 = 8.0 m/s, a = −2.0 m/s², and t = 3.0 s. Find its displacement.", choices: ["15 m", "24 m", "9.0 m", "6.0 m"], correct: 0, explanation: "Using Δx = v0t + ½at²: Δx = (8.0)(3.0) + ½(−2.0)(3.0)² = 24 − 9.0 = 15 m." },
    { id: "1-48", topic: "1.5 Kinematic Equations", stem: "Two objects start from rest at the same point and accelerate uniformly, Object A at twice the acceleration of Object B. After the same amount of time, compare their displacements.", choices: ["A has traveled twice as far as B.", "A has traveled four times as far as B.", "A has traveled the same distance as B.", "A has traveled half as far as B."], correct: 0, explanation: "From Δx = ½at² (v0=0), displacement is directly proportional to acceleration for the same elapsed time. Doubling a doubles Δx — a straightforward proportionality, since t is squared but held fixed here, not varying." },
    { id: "1-49", topic: "1.6 Free Fall", stem: "A rock is dropped from rest and falls for 3.0 s. Find its velocity just before hitting the ground.", choices: ["9.8 m/s", "19.6 m/s", "29.4 m/s", "44.1 m/s"], correct: 2, explanation: "Using v = v0 + at with v0=0, a=9.8 m/s²: v = (9.8)(3.0) = 29.4 m/s." },
    { id: "1-50", topic: "1.6 Free Fall", stem: "A rock is dropped from rest and falls for 3.0 s. Find the distance it falls.", choices: ["14.7 m", "29.4 m", "44.1 m", "88.2 m"], correct: 2, explanation: "Using Δy = ½at² with v0=0: Δy = ½(9.8)(3.0)² = ½(9.8)(9.0) = 44.1 m." },
    { id: "1-51", topic: "1.6 Free Fall", stem: "A ball is thrown straight up with initial speed 20 m/s. Find its velocity 1.0 s later.", choices: ["10.2 m/s", "20 m/s", "29.8 m/s", "9.8 m/s"], correct: 0, explanation: "Using v = v0 + at with a=−9.8 m/s² (taking up as positive): v = 20 + (−9.8)(1.0) = 10.2 m/s — still positive, meaning the ball is still moving upward but has slowed down." },
    { id: "1-52", topic: "1.6 Free Fall", stem: "A ball is thrown straight up and returns to its starting height 4.0 s later. Find its initial speed.", choices: ["9.8 m/s", "19.6 m/s", "39.2 m/s", "4.9 m/s"], correct: 1, explanation: "By symmetry, time to rise equals time to fall, so time to reach the peak is 2.0 s. At the peak, v=0: using v = v0 + at, 0 = v0 + (−9.8)(2.0), so v0 = 19.6 m/s." },
    { id: "1-53", topic: "1.6 Free Fall", stem: "Object A is dropped from rest from a height h. Object B is dropped from rest from a height 4h. Compare their fall times.", choices: ["B takes twice as long as A.", "B takes four times as long as A.", "B takes the same time as A.", "B takes half as long as A."], correct: 0, explanation: "Using h = ½gt², solving for t gives t ∝ √h. Quadrupling the height means the fall time increases by √4 = 2 — twice as long, not four times, since time depends on the square root of height, not height directly." },
    { id: "1-54", topic: "1.6 Free Fall", stem: "A ball thrown straight up reaches a maximum height of 20 m. Find its initial speed.", choices: ["14 m/s", "19.8 m/s", "20 m/s", "9.8 m/s"], correct: 1, explanation: "At the peak, v=0. Using v² = v0² + 2aΔy: 0 = v0² + 2(−9.8)(20), so v0² = 392, giving v0 = √392 ≈ 19.8 m/s." },
    { id: "1-55", topic: "1.6 Free Fall", stem: "At the exact instant a ball thrown straight up reaches its highest point, what are its velocity and acceleration?", choices: ["v = 0; a = 0", "v = 0; a = −9.8 m/s²", "v ≠ 0; a = 0", "v ≠ 0; a = −9.8 m/s²"], correct: 1, explanation: "Velocity is momentarily zero at the exact peak — that's what defines the peak. Acceleration, however, never turns off; gravity is still pulling down at −9.8 m/s² at that instant, exactly as it is throughout the entire flight." },
    { id: "1-56", topic: "1.6 Free Fall", stem: "A ball is thrown straight down from a height with an initial speed of 5.0 m/s. It lands 2.0 s later. Find the height from which it was thrown.", choices: ["9.8 m", "19.6 m", "29.6 m", "39.2 m"], correct: 2, explanation: "Taking down as positive here for convenience: Δy = v0t + ½at² = (5.0)(2.0) + ½(9.8)(2.0)² = 10 + 19.6 = 29.6 m." },
    { id: "1-57", topic: "1.6 Free Fall", stem: "Two balls are released at the same instant from the same height — Ball A is simply dropped, Ball B is thrown straight down at 5.0 m/s. Which ball hits the ground first, and why?", choices: ["Ball A, since it has less initial speed.", "Ball B, since it starts with additional downward velocity while experiencing the same acceleration.", "They land at the same time, since gravity is the same for both.", "Cannot be determined without knowing the height."], correct: 1, explanation: "Both balls experience the identical acceleration (gravity), but Ball B starts with extra downward velocity already built in — giving it a head start that Ball A has to build up from zero. Ball B reaches the ground first." },
    { id: "1-58", topic: "1.7 Projectile Motion", stem: "A projectile is launched at 50 m/s at 37° above the horizontal. Find its initial vertical velocity component. (sin37° ≈ 0.60, cos37° ≈ 0.80)", choices: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"], correct: 1, explanation: "v0y = v0·sinθ = 50(0.60) = 30 m/s." },
    { id: "1-59", topic: "1.7 Projectile Motion", stem: "Using the same launch (50 m/s at 37°), find the initial horizontal velocity component.", choices: ["20 m/s", "30 m/s", "40 m/s", "50 m/s"], correct: 2, explanation: "v0x = v0·cosθ = 50(0.80) = 40 m/s." },
    { id: "1-60", topic: "1.7 Projectile Motion", stem: "A ball rolls off a table with horizontal speed 5.0 m/s and lands 0.60 s later. Find the horizontal distance it travels and the height of the table.", choices: ["Distance 3.0 m; height ≈ 1.76 m", "Distance 3.0 m; height ≈ 2.94 m", "Distance 8.3 m; height ≈ 1.76 m", "Distance 0.83 m; height ≈ 1.76 m"], correct: 0, explanation: "Horizontal: Δx = v0x·t = (5.0)(0.60) = 3.0 m — horizontal velocity never changes during flight. Vertical: Δy = ½gt² = ½(9.8)(0.60)² = ½(9.8)(0.36) ≈ 1.76 m — this is a separate, independent calculation using only vertical quantities." },
    { id: "1-61", topic: "1.7 Projectile Motion", stem: "A projectile is launched horizontally from a height. If the launch speed were doubled (same height), how would the total flight time change?", choices: ["It would double.", "It would be cut in half.", "It would stay the same.", "It would quadruple."], correct: 2, explanation: "Flight time for a horizontal launch depends only on the vertical motion — specifically, the height and gravity — since horizontal and vertical motion are completely independent. Changing the horizontal launch speed has zero effect on how long the fall takes." },
    { id: "1-62", topic: "1.7 Projectile Motion", stretch: true, stem: "A projectile is launched at an angle θ above the horizontal with speed v0 on level ground. Which angle maximizes the total horizontal range, and why (conceptually, not from memorizing the formula)?", choices: ["90°, since that gives the highest possible vertical speed.", "45°, since it provides the best balance between the time spent in the air (favored by more vertical speed) and horizontal speed itself (favored by more horizontal speed).", "0°, since maximizing horizontal speed alone maximizes range.", "The optimal angle depends on the projectile's mass."], correct: 1, explanation: "Range depends on both how fast the projectile moves horizontally (favoring a small angle, more horizontal component) and how long it stays airborne (favoring a large angle, more vertical component, more hang time). These two effects trade off against each other, and for launch and landing at the same height, 45° balances them exactly, maximizing the product of horizontal speed and flight time. This qualitative 'why' reasoning, rather than simply quoting the 45°-is-optimal fact, is a notch past what most single MC questions on this topic ask directly." },
    { id: "1-63", topic: "1.7 Projectile Motion", stem: "A projectile is launched at an angle above the horizontal on level ground. Compare the time it takes to rise to its peak height to the time it takes to fall back down to its original launch height.", choices: ["Rising takes longer.", "Falling takes longer.", "The two times are equal.", "It depends on the launch angle."], correct: 2, explanation: "For a projectile launched and landing at the same height, the vertical motion is symmetric — the vertical velocity component simply reverses sign on the way back down, following the same free-fall physics as Section 1.6's up-and-down symmetry. Time up always equals time down in this scenario." },
    { id: "1-64", topic: "1.7 Projectile Motion", stem: "A projectile's horizontal velocity component is 12 m/s and stays constant throughout a 2.5 s flight. Find the total horizontal distance traveled.", choices: ["4.8 m", "14.5 m", "30 m", "not enough information — vertical motion is also needed"], correct: 2, explanation: "Since horizontal velocity is explicitly constant, horizontal displacement is simply Δx = v_x·t = (12)(2.5) = 30 m — no need for any vertical information at all, since the two directions are fully independent." },
    { id: "1-65", topic: "1.7 Projectile Motion", stretch: true, stem: "Stretch — beyond typical AP difficulty: A projectile is launched from the edge of a cliff at 20 m/s, angled 30° above the horizontal, off a cliff 25 m high. Find the total time of flight before it lands at the base of the cliff. (sin30°=0.50)", choices: ["≈ 1.02 s", "≈ 2.85 s", "≈ 3.50 s", "≈ 5.10 s"], correct: 2, explanation: "Initial vertical velocity: v0y = 20(0.50) = 10 m/s (upward). Taking up as positive, with the ground 25 m below the launch point: −25 = 10t − 4.9t², rearranged into standard form as 4.9t² − 10t − 25 = 0. Applying the quadratic formula: t = [10 ± √(10² + 4(4.9)(25))]/(2×4.9) = [10 ± √590]/9.8 ≈ [10 ± 24.3]/9.8. Taking the positive root (the physically meaningful one): t ≈ 34.3/9.8 ≈ 3.50 s — notice the projectile first rises above the cliff edge before falling all the way down to the base, which is why the total flight time is considerably longer than a simple ½gt²=25 drop alone would give." },
  ],
  2: [
    { id: "2-1", topic: "2.1 Forces and FBDs", stem: "Which statement correctly describes what a force requires?", choices: ["A force can exist on its own, without any source or target object.", "A force always involves an interaction between two objects — a source and a target.", "A force only exists while an object is moving.", "A force requires three or more objects to be defined."], correct: 1, explanation: "Every force is fundamentally an interaction between exactly two objects — one exerting the force, one receiving it. This two-object framing is what makes free-body diagrams (which isolate just one of those two objects) work at all." },
    { id: "2-2", topic: "2.1 Forces and FBDs", stem: "A free-body diagram should include which of the following?", choices: ["Every force acting on the object, plus the object's velocity vector.", "Only forces the object exerts on other objects.", "Only forces acting on the object, from real physical sources.", "Every force in the entire system, regardless of which object it acts on."], correct: 2, explanation: "A proper FBD isolates a single object and shows only the forces landing ON that object, from genuine physical sources — no velocity arrows, no forces the object exerts elsewhere, and nothing without a real physical cause." },
    { id: "2-3", topic: "2.1 Forces and FBDs", stem: "A ball is rolling across a floor at constant velocity, with negligible friction. How many forces, and which ones, act on the ball?", choices: ["One: a forward force keeping it moving.", "Two: gravity and the normal force.", "Three: gravity, normal force, and a forward force.", "Zero forces act on it."], correct: 1, explanation: "With negligible friction, only gravity (down) and the normal force (up) act on the ball — there is no forward-pointing force required to sustain constant-velocity motion, since Newton's First Law says none is needed." },
    { id: "2-4", topic: "2.1 Forces and FBDs", stem: "A hockey puck slides across frictionless ice at constant velocity. A student insists there must be a small forward force keeping it moving. Evaluate this claim.", choices: ["Correct — without a forward force, the puck would immediately stop.", "Incorrect — constant velocity motion requires zero net force, not a forward force.", "Correct, but only because ice is unusually slippery.", "Incorrect — the puck is actually accelerating, not moving at constant velocity."], correct: 1, explanation: "This is a classic and very common misconception. Newton's First Law states that constant-velocity motion persists with zero net force — no forward-pushing force is needed to sustain it. Assuming motion requires a continuous force is exactly the pre-Newtonian intuition this law was built to correct." },
    { id: "2-5", topic: "2.1 Forces and FBDs", stem: "A ball hangs at rest from a single vertical string attached to a ceiling. How many forces act on the ball, and what are they?", choices: ["One: gravity only.", "Two: gravity and the string tension.", "Two: gravity and the ceiling's normal force.", "Three: gravity, tension, and the ceiling's pull."], correct: 1, explanation: "Two forces act directly on the ball: gravity (pulling down) and tension from the string (pulling up). The ceiling doesn't act on the ball directly — it acts on the string, which is a separate object." },
    { id: "2-6", topic: "2.1 Forces and FBDs", stem: "On a free-body diagram, how should the length of each force arrow be drawn?", choices: ["All arrows should be the same length, regardless of force size.", "Roughly proportional to the magnitude of that specific force.", "Length doesn't matter, only direction matters.", "Longer arrows should represent smaller forces."], correct: 1, explanation: "A well-drawn FBD uses arrow length to roughly represent the relative size of each force — larger forces get longer arrows. This visual cue helps you (and a grader) quickly sanity-check whether forces plausibly balance or not." },
    { id: "2-7", topic: "2.1 Forces and FBDs", stem: "Which of these is NOT a legitimate force to include on a free-body diagram?", choices: ["Gravity", "Normal force from a supporting surface", "Tension from an attached string", "A 'force of momentum' carrying the object forward"], correct: 3, explanation: "There is no such thing as a 'force of momentum' — momentum is a property of a moving object, not a force acting on it. Gravity, normal force, and tension are all genuine forces with real physical sources; the fourth option is a common but invented misconception." },
    { id: "2-8", topic: "2.2 First Law and Equilibrium", stem: "An object moves in a straight line at a constant 15 m/s. What is the net force acting on it?", choices: ["A force in the direction of motion, proportional to speed.", "Zero.", "A force proportional to the object's mass alone.", "Cannot be determined without knowing the object's mass."], correct: 1, explanation: "Constant velocity (in both speed and direction) means zero acceleration, and by Newton's Second Law, zero acceleration means zero net force — regardless of how fast the object happens to be moving." },
    { id: "2-9", topic: "2.2 First Law and Equilibrium", stem: "A box at rest has three forces acting on it: 20 N east, 20 N west, and an unknown vertical force pair that balances gravity. Is the box in equilibrium?", choices: ["Yes — the horizontal forces cancel, and the problem states the vertical forces balance too.", "No — three forces can never sum to zero.", "Only if all three forces have equal magnitude.", "Cannot be determined without more information."], correct: 0, explanation: "Equilibrium just requires the vector sum of all forces to be zero. The horizontal pair (20 N east and 20 N west) cancels on its own, and the problem states the vertical forces balance as well — so the total net force is zero, and the box is in equilibrium." },
    { id: "2-10", topic: "2.2 First Law and Equilibrium", stem: "A picture frame hangs at rest from two wires, each pulling upward at some angle. If the frame's weight is 12 N, what must be true about the combined upward pull of both wires?", choices: ["Combined upward pull must be less than 12 N.", "Combined upward pull must be greater than 12 N.", "Combined upward pull must equal exactly 12 N.", "Combined upward pull is unrelated to the frame's weight."], correct: 2, explanation: "Since the frame is at rest (equilibrium), the net force must be zero — meaning the total upward pull from both wires must exactly balance the 12 N of downward weight." },
    { id: "2-11", topic: "2.2 First Law and Equilibrium", stem: "Which of the following objects is in equilibrium?", choices: ["A ball at the peak of its path after being thrown straight up.", "A car speeding up from a stoplight.", "An elevator moving downward at a constant 2 m/s.", "A skydiver just after jumping, before reaching terminal velocity."], correct: 2, explanation: "An elevator moving at constant velocity (even if that velocity is downward) has zero acceleration, and is therefore in equilibrium. The ball at its peak still has gravity acting on it (nonzero net force, nonzero acceleration); the speeding-up car and the still-accelerating skydiver both have nonzero net force by definition." },
    { id: "2-12", topic: "2.2 First Law and Equilibrium", stem: "Is it possible for an object in equilibrium to have multiple nonzero forces acting on it?", choices: ["No, equilibrium requires zero forces.", "Yes — equilibrium requires the forces to sum to zero, not for there to be no forces at all.", "Only if exactly two forces are present.", "Only for objects at rest, never for moving objects."], correct: 1, explanation: "Equilibrium is defined by the vector sum of forces being zero — it says nothing about how many individual nonzero forces are present. A book on a table, for instance, has two clearly nonzero forces (gravity and normal force) that happen to cancel." },
    { id: "2-13", topic: "2.2 First Law and Equilibrium", stem: "A 60 N sign hangs at rest from two vertical ropes. One rope has a tension of 25 N. Find the tension in the second rope.", choices: ["25 N", "35 N", "60 N", "85 N"], correct: 1, explanation: "Since the sign is in equilibrium, the two tensions must sum to the full weight: T1 + T2 = 60, so T2 = 60 − 25 = 35 N." },
    { id: "2-14", topic: "2.2 First Law and Equilibrium", stem: "An object at rest has exactly two horizontal forces acting on it: 18 N east and an unknown force. Find the unknown force.", choices: ["18 N east", "18 N west", "0 N", "9 N west"], correct: 1, explanation: "For the object to remain at rest (equilibrium), the horizontal forces must sum to zero. The only way to cancel 18 N east is with an equal 18 N pointing west." },
    { id: "2-15", topic: "2.3 Newton's Second Law", stem: "A net force of 20 N acts on a 4.0 kg object. Find its acceleration.", choices: ["0.2 m/s²", "5.0 m/s²", "16 m/s²", "80 m/s²"], correct: 1, explanation: "a = F_net/m = 20/4.0 = 5.0 m/s²." },
    { id: "2-16", topic: "2.3 Newton's Second Law", stem: "An object with mass 5.0 kg has two horizontal forces acting on it: 30 N to the right and 10 N to the left. Find its acceleration.", choices: ["2.0 m/s² right", "4.0 m/s² right", "6.0 m/s² right", "8.0 m/s² right"], correct: 1, explanation: "Net force = 30 − 10 = 20 N right. Acceleration = F_net/m = 20/5.0 = 4.0 m/s² right." },
    { id: "2-17", topic: "2.3 Newton's Second Law", stem: "A car moves to the right while braking, slowing down. In which direction does its acceleration point?", choices: ["To the right, same as its velocity.", "To the left, opposite its velocity.", "Acceleration is zero while braking.", "Straight down, since braking involves the road surface."], correct: 1, explanation: "Slowing down while moving right means the net force — and therefore the acceleration — points left, opposite the direction of motion. Acceleration always points in the direction of the net force, not necessarily the direction of velocity." },
    { id: "2-18", topic: "2.3 Newton's Second Law", stem: "An object's mass is tripled while the net force acting on it stays the same. How does its acceleration change?", choices: ["It triples.", "It is cut to one-third.", "It stays the same.", "It is cut to one-ninth."], correct: 1, explanation: "From a = F/m, acceleration is inversely proportional to mass when force is held fixed. Tripling the mass cuts the resulting acceleration to one-third." },
    { id: "2-19", topic: "2.3 Newton's Second Law", stem: "A 3.0 kg object has zero net force acting on it and is currently moving at 8.0 m/s. Find its velocity 5.0 s later.", choices: ["0 m/s", "8.0 m/s", "13 m/s", "40 m/s"], correct: 1, explanation: "Zero net force means zero acceleration (a = F/m = 0), so velocity never changes — it stays at 8.0 m/s the entire time, per Newton's First Law." },
    { id: "2-20", topic: "2.3 Newton's Second Law", stem: "An object with mass 10 kg has forces of 50 N right and 30 N left acting on it. Find its acceleration.", choices: ["1.0 m/s² right", "2.0 m/s² right", "5.0 m/s² right", "8.0 m/s² right"], correct: 1, explanation: "Net force = 50 − 30 = 20 N right. a = F_net/m = 20/10 = 2.0 m/s² right." },
    { id: "2-21", topic: "2.3 Newton's Second Law", stem: "If the net force on an object is doubled while its mass stays the same, how does its acceleration change?", choices: ["It doubles.", "It stays the same.", "It is cut in half.", "It quadruples."], correct: 0, explanation: "Acceleration is directly proportional to net force when mass is fixed (a = F/m) — doubling force directly doubles acceleration." },
    { id: "2-22", topic: "2.3 Newton's Second Law", stem: "A 6.0 kg object experiences a 30 N force east and a second unknown horizontal force. Its acceleration is 3.0 m/s² east. Find the magnitude and direction of the second force.", choices: ["12 N east", "12 N west", "18 N east", "48 N west"], correct: 1, explanation: "The required net force is F_net = ma = (6.0)(3.0) = 18 N east. Since 30 N east alone exceeds this, the second force must partially oppose it: 30 (east) + F2 = 18 (east), so F2 = −12 N east, meaning 12 N west." },
    { id: "2-23", topic: "2.4 Newton's Third Law", stem: "Two ice skaters, one twice the mass of the other, push off each other from rest. Compare the force each skater feels during the push.", choices: ["The heavier skater feels twice the force.", "The lighter skater feels twice the force.", "Both skaters feel exactly the same magnitude of force.", "The force felt depends on how hard each skater pushes individually."], correct: 2, explanation: "By Newton's Third Law, the force each skater exerts on the other is always equal in magnitude, regardless of their masses — mass has no bearing on the force pair itself. (Their resulting accelerations will differ, since a = F/m, but the forces themselves are identical.)" },
    { id: "2-24", topic: "2.4 Newton's Third Law", stem: "A hammer strikes a nail, driving it into wood. Identify the Third Law reaction pair to the force the hammer exerts on the nail.", choices: ["The nail exerts an equal and opposite force on the hammer.", "The wood exerts a force on the nail.", "Gravity acts on the hammer.", "The hand exerts a force on the hammer."], correct: 0, explanation: "A Third Law pair always involves the same two objects, with the forces reversed: hammer-on-nail and nail-on-hammer are the pair. The wood-on-nail force, gravity, and the hand-on-hammer force are all separate, unrelated interactions." },
    { id: "2-25", topic: "2.4 Newton's Third Law", stem: "A small car collides head-on with a large, stationary truck. Compare the magnitude of the force the car exerts on the truck to the force the truck exerts on the car.", choices: ["The truck exerts a much larger force on the car, since it's more massive.", "The car exerts a much larger force on the truck, since it was moving.", "The two forces are exactly equal in magnitude.", "The forces depend on which vehicle has more momentum."], correct: 2, explanation: "Newton's Third Law guarantees the two forces are equal in magnitude and opposite in direction, regardless of the vehicles' relative mass or speed. What differs is the resulting acceleration of each vehicle (a = F/m) — the lighter car experiences a much larger acceleration from that same-magnitude force." },
    { id: "2-26", topic: "2.4 Newton's Third Law", stem: "A book rests on a table. Gravity pulls the book down with a force F<sub>g</sub>. What is the genuine Third Law reaction pair to this specific force?", choices: ["The normal force the table exerts on the book.", "The force the book exerts on the table.", "The gravitational force the book exerts on the Earth, pulling it upward.", "There is no reaction pair for gravity."], correct: 2, explanation: "Gravity is an interaction between the book and the Earth, so its Third Law partner must also be gravitational, acting on the Earth: the book pulls the Earth upward with a force of equal magnitude. The normal force is a completely separate (contact) interaction with its own separate Third Law partner." },
    { id: "2-27", topic: "2.4 Newton's Third Law", stem: "Explain, using Newton's Third Law, how a person is able to walk forward.", choices: ["The person's muscles directly create a forward force with no reaction needed.", "The person's foot pushes backward on the ground; the ground pushes forward on the person's foot in reaction.", "Air resistance pushes the person forward.", "Walking doesn't involve Newton's Third Law at all."], correct: 1, explanation: "Walking is a great everyday example of the Third Law in action: the foot pushes backward against the ground (the 'action'), and by Newton's Third Law, the ground pushes forward on the foot with equal force (the 'reaction') — that reaction force is what actually propels the walker forward." },
    { id: "2-28", topic: "2.4 Newton's Third Law", stem: "A swimmer pushes water backward with their hands and feet to move forward. Identify the force that actually propels the swimmer forward.", choices: ["The force the swimmer's hands exert on the water.", "The reaction force the water exerts on the swimmer, in response to being pushed backward.", "The buoyant force from the water.", "The swimmer's own muscular force, with no need for a reaction."], correct: 1, explanation: "The swimmer pushes water backward (the action); by Newton's Third Law, the water pushes the swimmer forward with an equal and opposite reaction force — and it's specifically that reaction force, acting on the swimmer, that provides forward propulsion." },
    { id: "2-29", topic: "2.4 Newton's Third Law", stem: "Can the two forces in a Newton's Third Law pair ever appear together on the same free-body diagram, and cancel each other out?", choices: ["Yes, they commonly cancel on a single FBD.", "No — the two forces in a pair always act on two different objects, so they can never both appear on one object's FBD.", "Only when the two objects have equal mass.", "Only for contact forces, never for gravity."], correct: 1, explanation: "By definition, a Third Law pair consists of two forces acting on two DIFFERENT objects. A single object's free-body diagram only ever shows forces acting on that one object, so a genuine Third Law partner force can never appear on the same diagram as its pair — they physically can't cancel each other there." },
    { id: "2-30", topic: "2.5 Gravity and Weight", stem: "Which pair correctly matches each quantity to its SI unit?", choices: ["Mass — newtons; Weight — kilograms", "Mass — kilograms; Weight — newtons", "Mass and weight both use kilograms", "Mass and weight both use newtons"], correct: 1, explanation: "Mass is measured in kilograms (a measure of the amount of matter). Weight is a force, and forces are measured in newtons — this distinction in units is a direct reflection of the two being fundamentally different kinds of quantities." },
    { id: "2-31", topic: "2.5 Gravity and Weight", stem: "Find the weight of a 25 kg object on Earth.", choices: ["25 N", "2.6 N", "245 N", "2450 N"], correct: 2, explanation: "F_g = mg = (25)(9.8) = 245 N." },
    { id: "2-32", topic: "2.5 Gravity and Weight", stem: "An object has a mass of 60 kg. Find its weight on Mars, where g ≈ 3.7 m/s².", choices: ["16.2 N", "222 N", "588 N", "16.2 kg"], correct: 1, explanation: "F_g = mg = (60)(3.7) = 222 N." },
    { id: "2-33", topic: "2.5 Gravity and Weight", stem: "An astronaut's mass is 75 kg on Earth. What is her mass on the Moon?", choices: ["12.5 kg", "75 kg", "450 kg", "Mass cannot be defined on the Moon"], correct: 1, explanation: "Mass is an intrinsic property of the object — the amount of matter it contains — and does not change based on location. Her mass remains 75 kg on the Moon, even though her weight there is much less." },
    { id: "2-34", topic: "2.5 Gravity and Weight", stem: "As an object moves to a much higher altitude above Earth's surface, its weight decreases. What causes this decrease?", choices: ["The object's mass decreases with altitude.", "The local gravitational field strength g decreases with altitude.", "Air resistance reduces the object's effective weight.", "Weight doesn't actually change with altitude."], correct: 1, explanation: "Weight decreases with altitude specifically because g (the local gravitational field strength) weakens with increasing distance from Earth's center — the object's mass never changes at all; only the strength of the gravitational pull on it does." },
    { id: "2-35", topic: "2.5 Gravity and Weight", stem: "Planet X has a gravitational field strength exactly twice that of Earth's. Compare the weight of a given object on Planet X to its weight on Earth.", choices: ["Half as much on Planet X.", "The same on both planets.", "Twice as much on Planet X.", "Four times as much on Planet X."], correct: 2, explanation: "Since F_g = mg and mass stays constant, weight is directly proportional to g. Doubling g directly doubles the object's weight, with no other complications." },
    { id: "2-36", topic: "2.5 Gravity and Weight", stem: "Astronauts orbiting Earth in the International Space Station appear weightless, floating freely inside the cabin. Is gravity actually acting on them?", choices: ["No, they are far enough from Earth that gravity is essentially zero there.", "Yes — gravity is still acting on them almost as strongly as at the surface; they and the station are both in continuous free fall together.", "No, the station's structure blocks gravity from reaching them.", "Yes, but only because the station is spinning."], correct: 1, explanation: "At the ISS's altitude, Earth's gravity is still nearly as strong as at the surface. The 'weightless' appearance comes from the astronauts and the station both being in continuous free fall around Earth together — they experience no normal force from the station's floor, not because gravity has vanished, but because nothing is holding them up against it." },
    { id: "2-37", topic: "2.6 Normal Force", stem: "An 8.0 kg box sits at rest on a flat, horizontal floor, with no other vertical forces acting. Find the normal force.", choices: ["8.0 N", "78.4 N", "9.8 N", "0.82 N"], correct: 1, explanation: "With only gravity and the normal force acting vertically, and no vertical acceleration, F_N = mg = (8.0)(9.8) = 78.4 N." },
    { id: "2-38", topic: "2.6 Normal Force", stem: "A 5.0 kg box sits on a flat floor. An additional 15 N is pushed straight down on it. Find the normal force.", choices: ["49 N", "64 N", "34 N", "15 N"], correct: 1, explanation: "The floor must now support both the box's weight and the extra push: F_N = mg + 15 = (5.0)(9.8) + 15 = 49 + 15 = 64 N." },
    { id: "2-39", topic: "2.6 Normal Force", stem: "A 6.0 kg box sits on a flat floor while someone pulls straight up on it with 20 N of force (not enough to lift it off the floor). Find the normal force.", choices: ["58.8 N", "78.8 N", "38.8 N", "20 N"], correct: 2, explanation: "The upward pull partially supports the box's weight, reducing what the floor needs to supply: F_N = mg − 20 = (6.0)(9.8) − 20 = 58.8 − 20 = 38.8 N." },
    { id: "2-40", topic: "2.6 Normal Force", stem: "A 70 kg person stands on a scale inside an elevator accelerating upward at 2.0 m/s². Find the normal force the scale exerts on the person (the scale's reading).", choices: ["546 N", "686 N", "826 N", "700 N"], correct: 2, explanation: "With upward acceleration, F_N − mg = ma, so F_N = m(g+a) = 70(9.8+2.0) = 70(11.8) = 826 N — greater than the person's resting weight, matching the familiar 'heavier' feeling during upward acceleration." },
    { id: "2-41", topic: "2.6 Normal Force", stem: "The same 70 kg person now rides in an elevator accelerating DOWNWARD at 2.0 m/s². Find the normal force.", choices: ["546 N", "686 N", "826 N", "700 N"], correct: 0, explanation: "With downward acceleration, mg − F_N = ma, so F_N = m(g−a) = 70(9.8−2.0) = 70(7.8) = 546 N — less than resting weight, matching the familiar 'lighter' feeling during downward acceleration." },
    { id: "2-42", topic: "2.6 Normal Force", stem: "A block rests on a frictionless incline tilted at angle θ above horizontal. How does the normal force compare to the block's weight, mg?", choices: ["F_N is always equal to mg, regardless of the incline's angle.", "F_N is always less than mg, and decreases further as θ increases.", "F_N is always greater than mg on an incline.", "F_N is always exactly zero on any incline."], correct: 1, explanation: "On an incline, only the perpendicular component of gravity (mg·cosθ) needs to be balanced by the normal force, and cosθ < 1 for any nonzero angle. As θ increases, cosθ shrinks further, making F_N progressively smaller relative to mg." },
    { id: "2-43", topic: "2.6 Normal Force", stem: "An elevator's cable snaps, and the elevator (with a person inside) falls freely, accelerating downward at exactly g. Find the normal force the elevator floor exerts on the person.", choices: ["Equal to the person's normal weight.", "Greater than the person's normal weight.", "Zero.", "Cannot be determined without the person's mass."], correct: 2, explanation: "During free fall, a = g downward. Using F_N = m(g−a) = m(g−g) = 0 — the floor exerts no force on the person at all, since both are accelerating downward at exactly the same rate. This is the same physical situation (though far more dangerous) as the weightlessness astronauts experience in orbit." },
    { id: "2-44", topic: "2.7 Friction", stem: "Which statement correctly distinguishes static friction from kinetic friction?", choices: ["Static friction is always larger than kinetic friction, by a fixed amount.", "Kinetic friction has a single fixed value while sliding; static friction adjusts up to a maximum value while an object is not sliding.", "Static friction only applies to sliding objects.", "Kinetic and static friction always have the exact same value."], correct: 1, explanation: "Kinetic friction is a fixed value, μ_k·F_N, whenever an object is actively sliding. Static friction, by contrast, is variable — it adjusts to whatever value is needed to prevent sliding, up to a maximum of μ_s·F_N." },
    { id: "2-45", topic: "2.7 Friction", stem: "A 6.0 kg box slides across a floor with μ_k = 0.25. Find the kinetic friction force acting on it.", choices: ["1.5 N", "14.7 N", "24.5 N", "58.8 N"], correct: 1, explanation: "F_N = mg = (6.0)(9.8) = 58.8 N. f_k = μ_k·F_N = (0.25)(58.8) ≈ 14.7 N." },
    { id: "2-46", topic: "2.7 Friction", stem: "A 10 kg box sits at rest on a floor with μ_s = 0.40. A horizontal push of 35 N is applied. Does the box start to slide?", choices: ["Yes, since 35 N is a large force.", "No — the maximum static friction available (39.2 N) exceeds the applied 35 N push, so the box stays put.", "Yes, since any applied force exceeding zero causes sliding.", "Cannot be determined without knowing μ_k."], correct: 1, explanation: "Maximum static friction is μ_s·F_N = (0.40)(10×9.8) = (0.40)(98) = 39.2 N. Since the applied 35 N push is less than this maximum, static friction can simply match the push (at 35 N) and keep the box in equilibrium — it never needs to reach its maximum, so the box doesn't move." },
    { id: "2-47", topic: "2.7 Friction", stem: "Why does it typically take more force to start an object sliding than to keep it sliding once it's already moving?", choices: ["Because μ_s is typically greater than μ_k for the same pair of surfaces.", "Because kinetic friction doesn't actually exist once motion begins.", "Because the normal force decreases once an object starts moving.", "This is a myth — starting and maintaining sliding require identical force."], correct: 0, explanation: "The coefficient of static friction is typically somewhat larger than the coefficient of kinetic friction for the same two surfaces, which is why overcoming the maximum static friction threshold (to start sliding) generally takes more force than simply maintaining sliding afterward." },
    { id: "2-48", topic: "2.7 Friction", stem: "An object slides across a horizontal floor with μ_k = 0.20 and no other horizontal forces. Find its deceleration due to friction.", choices: ["0.20 m/s²", "1.96 m/s²", "9.8 m/s²", "Cannot be determined without the object's mass"], correct: 1, explanation: "Since F_N = mg on a flat floor, f_k = μ_k·mg, and a = f_k/m = μ_k·g = (0.20)(9.8) ≈ 1.96 m/s² — notice the mass cancels out entirely, so the deceleration is the same regardless of how heavy the object is." },
    { id: "2-49", topic: "2.7 Friction", stem: "A box sliding at 12 m/s decelerates to rest over a distance of 30 m, due only to kinetic friction on a flat floor. Find μ_k.", choices: ["0.12", "0.20", "0.245", "0.40"], correct: 2, explanation: "First find the deceleration: v² = v0² − 2a(Δx) → 0 = 144 − 2a(30), so a = 144/60 = 2.4 m/s². Then, since a = μ_k·g on a flat floor, μ_k = a/g = 2.4/9.8 ≈ 0.245." },
    { id: "2-50", topic: "2.7 Friction", stem: "An object slides across a surface at 3 m/s, then later slides across the same surface at 9 m/s. How does the kinetic friction force compare between the two cases (same normal force in both)?", choices: ["The friction force is three times larger at the higher speed.", "The friction force is the same in both cases.", "The friction force is smaller at the higher speed.", "The friction force cannot be determined without more information."], correct: 1, explanation: "Kinetic friction, f_k = μ_k·F_N, doesn't depend on sliding speed at all — only on the coefficient of friction and the normal force, both unchanged here. The friction force is identical regardless of how fast the object happens to be sliding." },
    { id: "2-51", topic: "2.7 Friction", stem: "A block slides down an incline at constant velocity (not accelerating). What must be true about the forces acting along the incline's surface?", choices: ["The component of gravity along the incline exceeds the friction force.", "The component of gravity along the incline exactly equals the friction force, so they cancel.", "There is no friction acting on the block at all.", "The normal force exactly equals the component of gravity along the incline."], correct: 1, explanation: "Constant velocity means zero acceleration, hence zero net force along the incline. The two forces acting along the slope — gravity's component down the ramp (mg·sinθ) and kinetic friction opposing the motion — must exactly cancel for this to be true." },
    { id: "2-52", topic: "2.8 Spring Force", stem: "A spring is compressed from its natural length. In which direction does the spring push?", choices: ["In the same direction as the compression.", "Opposite the direction of compression, back toward its natural length.", "Perpendicular to the compression.", "A compressed spring exerts no force."], correct: 1, explanation: "A spring's force is always a RESTORING force — it always pushes or pulls back toward its natural, unstretched length, opposite whatever displacement was applied. Compress it, and it pushes back outward, away from the compression." },
    { id: "2-53", topic: "2.8 Spring Force", stem: "A spring stretches 0.30 m when a force of 18 N is applied. Find the spring constant.", choices: ["5.4 N/m", "18 N/m", "30 N/m", "60 N/m"], correct: 3, explanation: "Using F = kx: k = F/x = 18/0.30 = 60 N/m." },
    { id: "2-54", topic: "2.8 Spring Force", stem: "A spring with k = 80 N/m is stretched by a 12 N force. Find the displacement.", choices: ["0.15 m", "0.67 m", "6.7 m", "960 m"], correct: 0, explanation: "Using F = kx: x = F/k = 12/80 = 0.15 m." },
    { id: "2-55", topic: "2.8 Spring Force", stem: "A spring with k = 40 N/m is compressed 0.25 m. Find the magnitude of the spring force.", choices: ["0.16 N", "10 N", "16 N", "160 N"], correct: 1, explanation: "F = kx = (40)(0.25) = 10 N." },
    { id: "2-56", topic: "2.8 Spring Force", stem: "A spring is stretched to three times its original displacement (still within its elastic limit). How does the spring force change?", choices: ["It triples.", "It stays the same.", "It increases ninefold.", "It is cut to one-third."], correct: 0, explanation: "Since F = kx is a direct, linear proportionality, tripling the displacement x (with k unchanged) directly triples the resulting force — no squaring or other complication involved." },
    { id: "2-57", topic: "2.8 Spring Force", stem: "What specifically makes the spring force a 'restoring' force?", choices: ["It only acts when the spring is moving.", "It always points opposite to the spring's displacement from its natural length, pulling or pushing the spring back toward that natural length.", "It only acts on spring constants greater than 50 N/m.", "It increases the spring's displacement over time."], correct: 1, explanation: "A restoring force is defined by always opposing displacement — pushing or pulling the system back toward some equilibrium (here, the spring's natural, unstretched length). This behavior is what makes springs the foundational example for oscillatory motion in Unit 7." },
    { id: "2-58", topic: "2.8 Spring Force", stem: "A spring is displaced +0.20 m from its natural length (stretched). Using the convention F = −kx, in which direction does the spring force point?", choices: ["In the positive direction, same as the displacement.", "In the negative direction, opposite the displacement.", "The direction cannot be determined from F = −kx alone.", "Exactly perpendicular to the displacement."], correct: 1, explanation: "The negative sign in F = −kx means the force always points opposite the displacement. A positive (stretched) displacement of +0.20 m produces a force in the negative direction — pulling the spring back toward its natural length." },
    { id: "2-59", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stem: "A block sits on a frictionless incline tilted at 37° above horizontal (sin37° ≈ 0.60). Find its acceleration down the ramp.", choices: ["3.9 m/s²", "5.9 m/s²", "7.8 m/s²", "9.8 m/s²"], correct: 1, explanation: "On a frictionless incline, only the component of gravity along the ramp drives the motion: a = g·sinθ = (9.8)(0.60) ≈ 5.9 m/s²." },
    { id: "2-60", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stretch: true, stem: "Stretch — beyond typical AP difficulty: A 4.0 kg block sits on a 30° incline with μ_k = 0.20, sliding down. Find its acceleration down the ramp. (sin30°=0.50, cos30°≈0.866)", choices: ["1.7 m/s²", "3.2 m/s²", "4.9 m/s²", "6.6 m/s²"], correct: 1, explanation: "Along the ramp: mg·sinθ (down the ramp) minus friction (opposing the sliding, so up the ramp) equals ma. Friction is μ_k·F_N = μ_k·mg·cosθ, since F_N = mg·cosθ on an incline. So a = g(sinθ − μ_k·cosθ) = 9.8(0.50 − 0.20×0.866) = 9.8(0.50 − 0.173) = 9.8(0.327) ≈ 3.2 m/s²." },
    { id: "2-61", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stem: "Two masses, 10 kg and 6.0 kg, hang from opposite ends of a rope over a frictionless, massless pulley (an Atwood machine). Find the acceleration of the system.", choices: ["1.5 m/s²", "2.45 m/s²", "3.9 m/s²", "9.8 m/s²"], correct: 1, explanation: "a = g(m1−m2)/(m1+m2) = 9.8(10−6.0)/(16) = 9.8(4.0)/16 = 2.45 m/s²." },
    { id: "2-62", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stem: "Using the same Atwood machine (10 kg and 6.0 kg, a = 2.45 m/s²), find the tension in the rope.", choices: ["58.8 N", "73.5 N", "88.2 N", "98 N"], correct: 1, explanation: "Applying Newton's Second Law to the lighter (6.0 kg) mass, which accelerates upward: T − m2g = m2a, so T = m2(g+a) = 6.0(9.8+2.45) = 6.0(12.25) = 73.5 N. (Checking with the heavier mass: T = m1(g−a) = 10(9.8−2.45) = 10(7.35) = 73.5 N — consistent.)" },
    { id: "2-63", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stretch: true, stem: "Stretch — beyond typical AP difficulty: An 8.0 kg block sits on a frictionless horizontal table, connected by a string over a pulley at the table's edge to a hanging 2.0 kg mass. Find the acceleration of the system.", choices: ["0.98 m/s²", "1.96 m/s²", "2.45 m/s²", "4.9 m/s²"], correct: 1, explanation: "Only the hanging mass's weight drives the system, since the table mass has no gravity component along its direction of motion (horizontal): a = m2·g/(m1+m2) = (2.0)(9.8)/(8.0+2.0) = 19.6/10 = 1.96 m/s²." },
    { id: "2-64", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stem: "In a two-mass Atwood machine, explain why the rope's tension is less than the heavier mass's weight but more than the lighter mass's weight.", choices: ["The tension must be less than the heavier mass's weight, since that mass is still accelerating (not held in static equilibrium) — and it must exceed the lighter mass's weight to accelerate it upward.", "Tension always exactly equals the average of the two weights.", "Tension is unrelated to either mass's weight.", "Tension always equals the heavier mass's weight exactly."], correct: 0, explanation: "If tension equaled the heavier mass's full weight, that mass wouldn't accelerate at all — but it does, since it's not perfectly balanced. Tension must be somewhat less than its weight to allow a net downward force on it, and somewhat more than the lighter mass's weight to provide the net upward force needed to accelerate that mass upward too." },
    { id: "2-65", topic: "2.9 Ramps, Pulleys, Multi-Body Systems", stretch: true, stem: "Stretch — beyond typical AP difficulty: A 3.0 kg block sits on a frictionless 37° incline, connected by a string over a pulley at the top of the incline to a 5.0 kg mass hanging vertically off the other side. Find the acceleration of the system. (sin37°≈0.60)", choices: ["2.5 m/s²", "3.9 m/s²", "4.9 m/s²", "6.9 m/s²"], correct: 1, explanation: "For the hanging mass (falling): m2g − T = m2a. For the block on the incline (pulled up the ramp): T − m1g·sinθ = m1a. Adding these equations to eliminate T: m2g − m1g·sinθ = (m1+m2)a, so a = g(m2 − m1·sinθ)/(m1+m2) = 9.8(5.0 − 3.0×0.60)/(8.0) = 9.8(5.0−1.8)/8.0 = 9.8(3.2)/8.0 ≈ 3.9 m/s²." },
  ],
  3: [
    { id: "3-1", topic: "3.1 Work", stem: "A waiter holds a tray of food perfectly still, arms extended, for two full minutes. How much work does the waiter do on the tray?", choices: ["A large amount, proportional to how tired the waiter becomes.", "Zero, since there is no displacement.", "A small but nonzero amount.", "Cannot be determined without knowing the tray's weight."], correct: 1, explanation: "Work requires actual displacement — W = Fd·cosθ, and with d = 0 (the tray never moves), the work done is exactly zero, no matter how much force is being exerted or how long it's sustained." },
    { id: "3-2", topic: "3.1 Work", stem: "A constant 25 N force pushes a box 8.0 m in the same direction as the force. Find the work done.", choices: ["3.1 J", "33 J", "200 J", "0.32 J"], correct: 2, explanation: "Since the force and displacement point the same way, θ=0° and cosθ=1: W = Fd = (25)(8.0) = 200 J." },
    { id: "3-3", topic: "3.1 Work", stem: "A 50 N force is applied at 60° to the direction of a 4.0 m displacement. Find the work done. (cos60°=0.50)", choices: ["25 J", "100 J", "173 J", "200 J"], correct: 1, explanation: "W = Fd·cosθ = (50)(4.0)(0.50) = 100 J." },
    { id: "3-4", topic: "3.1 Work", stem: "A box slides across a floor while kinetic friction acts on it, opposite its direction of motion. What is the sign of the work done by friction?", choices: ["Positive", "Negative", "Zero", "Cannot be determined without more information"], correct: 1, explanation: "Friction points opposite the direction of motion (θ=180°, cosθ=−1), so the work done by friction is always negative on a moving object — it removes kinetic energy rather than adding it." },
    { id: "3-5", topic: "3.1 Work", stem: "A ball moves straight upward while gravity acts on it. What is the sign of the work done by gravity during this upward motion?", choices: ["Positive", "Negative", "Zero", "Cannot be determined without the ball's mass"], correct: 1, explanation: "Gravity points downward while the ball moves upward — these are opposite directions (θ=180°), so cosθ=−1 and the work done by gravity is negative, consistent with gravity removing kinetic energy from a rising object." },
    { id: "3-6", topic: "3.1 Work", stem: "A block slides across a horizontal floor. What is the work done by the normal force on the block during this motion?", choices: ["Positive, since the normal force supports the block.", "Negative, since it opposes gravity.", "Zero, since the normal force is always perpendicular to horizontal motion.", "Depends on the block's speed."], correct: 2, explanation: "The normal force is always perpendicular to a surface, and here the block's displacement is along that same horizontal surface — perpendicular force and displacement (θ=90°) always give zero work, regardless of how large the normal force is." },
    { id: "3-7", topic: "3.1 Work", stem: "An 80 N force is applied at 45° to a 3.0 m displacement. Find the work done. (cos45°≈0.71)", choices: ["57 J", "170 J", "240 J", "340 J"], correct: 1, explanation: "W = Fd·cosθ = (80)(3.0)(0.71) ≈ 170 J." },
    { id: "3-8", topic: "3.1 Work", stem: "A constant horizontal force pushes a box across a floor. Does the amount of work done depend on how quickly the box is pushed across that same displacement?", choices: ["Yes, faster pushes always do more work.", "No — for a constant force over a given displacement, the work done is the same regardless of how much time it takes.", "Yes, but only if friction is present.", "No, work is always zero for horizontal displacements."], correct: 1, explanation: "Work, W = Fd·cosθ, depends only on the force and the displacement — not on how much time elapses during that displacement. Time affects power (the rate of work), but not the total work itself." },
    { id: "3-9", topic: "3.1 Work", stem: "A 100 N force is applied at 30° to a 6.0 m displacement. Find the work done. (cos30°≈0.87)", choices: ["300 J", "440 J", "520 J", "600 J"], correct: 2, explanation: "W = Fd·cosθ = (100)(6.0)(0.87) = 522 J ≈ 520 J." },
    { id: "3-10", topic: "3.1 Work", stem: "What is the correct SI unit for work?", choices: ["Newton (N)", "Watt (W)", "Joule (J)", "Newton-second (N·s)"], correct: 2, explanation: "Work has units of force times distance: N·m, which is defined as the joule (J) — the standard SI unit of energy, since work is a transfer of energy." },
    { id: "3-11", topic: "3.1 Work", stem: "A person carries a box in a large circle, ending up exactly back where they started, at the same height throughout. Assuming the box is carried at constant height with a purely vertical supporting force, find the total work done on the box by that supporting force.", choices: ["A large positive value, since the person walked a long distance.", "Zero, since the supporting force is always perpendicular to the box's horizontal motion.", "A large negative value.", "Cannot be determined without knowing the circle's radius."], correct: 1, explanation: "The supporting force is vertical throughout, while the box's motion is entirely horizontal — perpendicular force and displacement give zero work at every instant, so the total work over the whole trip is also zero, regardless of the distance walked or the fact that it's a round trip." },
    { id: "3-12", topic: "3.2 Work-Energy Theorem", stem: "Find the kinetic energy of a 4.0 kg object moving at 5.0 m/s.", choices: ["10 J", "20 J", "50 J", "100 J"], correct: 2, explanation: "KE = ½mv² = ½(4.0)(5.0)² = ½(4.0)(25) = 50 J." },
    { id: "3-13", topic: "3.2 Work-Energy Theorem", stem: "An object's speed is doubled while its mass stays the same. How does its kinetic energy change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It increases by a factor of 8."], correct: 1, explanation: "Since KE = ½mv² depends on v², doubling speed quadruples kinetic energy (2² = 4) — this squared relationship is one of the most frequently tested facts in this section." },
    { id: "3-14", topic: "3.2 Work-Energy Theorem", stem: "An object has an initial kinetic energy of 10 J. A net work of 25 J is done on it. Find its final kinetic energy.", choices: ["15 J", "25 J", "35 J", "250 J"], correct: 2, explanation: "By the work-energy theorem, W_net = ΔKE = KE_f − KE_i, so KE_f = KE_i + W_net = 10 + 25 = 35 J." },
    { id: "3-15", topic: "3.2 Work-Energy Theorem", stem: "A 2.0 kg object moving at 3.0 m/s has 27 J of net work done on it. Find its final speed.", choices: ["3.0 m/s", "4.5 m/s", "6.0 m/s", "9.0 m/s"], correct: 2, explanation: "KE_i = ½(2.0)(3.0)² = 9.0 J. KE_f = 9.0 + 27 = 36 J. Solving ½(2.0)v² = 36: v² = 36, so v = 6.0 m/s." },
    { id: "3-16", topic: "3.2 Work-Energy Theorem", stem: "If the net work done on an object over some interval is exactly zero, what can be concluded about its kinetic energy?", choices: ["It must be zero throughout the interval.", "It is unchanged from the start to the end of the interval.", "It must be increasing.", "It must be decreasing."], correct: 1, explanation: "By the work-energy theorem, W_net = ΔKE. If W_net = 0, then ΔKE = 0, meaning the kinetic energy at the end of the interval equals the kinetic energy at the start — though it could have varied in between." },
    { id: "3-17", topic: "3.2 Work-Energy Theorem", stem: "If the net work done on a moving object is negative, what happens to its kinetic energy?", choices: ["It increases.", "It decreases.", "It stays the same.", "It becomes negative."], correct: 1, explanation: "Negative net work means ΔKE is negative, so kinetic energy decreases — the object slows down. (Kinetic energy itself, ½mv², can never actually become negative, since it depends on v².)" },
    { id: "3-18", topic: "3.2 Work-Energy Theorem", stem: "A 5.0 kg object starts at rest. One force does +50 J of work on it; a second force does −20 J of work. Find its final speed.", choices: ["2.4 m/s", "3.5 m/s", "6.0 m/s", "12 m/s"], correct: 1, explanation: "Net work = 50 + (−20) = 30 J. Since the object starts at rest, KE_f = 30 J. Solving ½(5.0)v² = 30: v² = 12, so v = √12 ≈ 3.5 m/s." },
    { id: "3-19", topic: "3.2 Work-Energy Theorem", stem: "A 3.0 kg object moving at 10 m/s slides across a rough floor where friction does −90 J of work on it. Find its final speed.", choices: ["4.5 m/s", "6.3 m/s", "7.7 m/s", "9.0 m/s"], correct: 1, explanation: "KE_i = ½(3.0)(10)² = 150 J. KE_f = 150 − 90 = 60 J. Solving ½(3.0)v² = 60: v² = 40, so v = √40 ≈ 6.3 m/s." },
    { id: "3-20", topic: "3.2 Work-Energy Theorem", stem: "Why is the work-energy theorem often more useful than kinematics equations for a force that changes with position, like a spring?", choices: ["It requires knowing the exact time of the motion.", "It allows finding a final speed using total work, without needing a constant acceleration.", "It only applies to constant forces, so it simplifies spring problems.", "It automatically accounts for friction in every case."], correct: 1, explanation: "Kinematics equations require a single constant acceleration throughout the interval. The work-energy theorem instead relies on total work — which can be found (often via a graph's area) even when force, and therefore acceleration, changes continuously, as with a spring." },
    { id: "3-21", topic: "3.2 Work-Energy Theorem", stem: "A 1000 kg car moving at 20 m/s comes to a complete stop. Find the net work done on the car during braking.", choices: ["−200,000 J", "−20,000 J", "20,000 J", "200,000 J"], correct: 0, explanation: "KE_i = ½(1000)(20)² = 200,000 J. KE_f = 0. W_net = ΔKE = 0 − 200,000 = −200,000 J — the negative sign reflects that the braking forces removed all of the car's kinetic energy." },
    { id: "3-22", topic: "3.2 Work-Energy Theorem", stem: "Object A moves at speed v; Object B, with the same mass, moves at speed 2v. Compare their kinetic energies.", choices: ["B has twice the kinetic energy of A.", "B has four times the kinetic energy of A.", "B has the same kinetic energy as A.", "B has eight times the kinetic energy of A."], correct: 1, explanation: "Since KE ∝ v² for a fixed mass, doubling the speed (2v vs. v) increases kinetic energy by a factor of 2² = 4." },
    { id: "3-23", topic: "3.3 Gravitational and Elastic PE", stem: "Find the gravitational potential energy of a 4.0 kg object 6.0 m above the ground.", choices: ["24 J", "58.8 J", "235.2 J", "392 J"], correct: 2, explanation: "PE = mgh = (4.0)(9.8)(6.0) = 235.2 J." },
    { id: "3-24", topic: "3.3 Gravitational and Elastic PE", stem: "A student measures an object's gravitational PE using the ground as the reference (h=0), while another student uses a tabletop 1 m above the ground as their reference. Do they agree on the object's CHANGE in PE as it moves from the tabletop to the ground?", choices: ["No, since they used different reference points.", "Yes — the change in PE is the same regardless of the chosen reference point, even though the individual PE values differ.", "Only if the object has zero mass.", "Only if they both use the ground as the reference."], correct: 1, explanation: "While the absolute value of PE at any given point depends on the arbitrary reference chosen, the CHANGE in PE between two points does not — both students will compute the identical ΔPE for the object's drop, since the reference point cancels out when you take a difference." },
    { id: "3-25", topic: "3.3 Gravitational and Elastic PE", stem: "A spring with k = 250 N/m is stretched 0.20 m. Find its elastic potential energy.", choices: ["2.5 J", "5.0 J", "25 J", "50 J"], correct: 1, explanation: "PE = ½kx² = ½(250)(0.20)² = ½(250)(0.040) = 5.0 J." },
    { id: "3-26", topic: "3.3 Gravitational and Elastic PE", stem: "A spring's compression is doubled. How does its elastic potential energy change?", choices: ["It doubles.", "It triples.", "It quadruples.", "It stays the same."], correct: 2, explanation: "Since PE = ½kx² depends on x², doubling the compression quadruples the stored elastic potential energy (2² = 4) — the same squared relationship seen with kinetic energy and speed." },
    { id: "3-27", topic: "3.3 Gravitational and Elastic PE", stem: "A 3.0 kg object rises from a height of 2.0 m to a height of 9.0 m. Find its change in gravitational potential energy.", choices: ["58.8 J", "147 J", "205.8 J", "264.6 J"], correct: 2, explanation: "ΔPE = mgΔh = (3.0)(9.8)(9.0−2.0) = (3.0)(9.8)(7.0) = 205.8 J." },
    { id: "3-28", topic: "3.3 Gravitational and Elastic PE", stem: "As an object is raised to a greater height above a fixed reference level, what happens to its gravitational potential energy?", choices: ["It decreases.", "It increases.", "It stays the same.", "It depends on the object's speed."], correct: 1, explanation: "Since PE = mgh, and h increases as the object rises, PE increases directly and linearly with height, for a fixed mass and reference level." },
    { id: "3-29", topic: "3.3 Gravitational and Elastic PE", stem: "A spring with k = 120 N/m is compressed 0.050 m. Find its elastic potential energy.", choices: ["0.15 J", "0.30 J", "3.0 J", "6.0 J"], correct: 0, explanation: "PE = ½kx² = ½(120)(0.050)² = ½(120)(0.0025) = 0.15 J." },
    { id: "3-30", topic: "3.3 Gravitational and Elastic PE", stem: "Is there a meaningful 'potential energy' associated with kinetic friction, the way there is for gravity and springs?", choices: ["Yes, friction has its own potential energy formula.", "No — potential energy is only defined for conservative forces, and kinetic friction is not conservative.", "Yes, but only at low sliding speeds.", "No, because friction never does any work at all."], correct: 1, explanation: "Potential energy is a concept that only applies to conservative forces (like gravity and springs), where the energy can be fully recovered. Kinetic friction is non-conservative — the energy it removes from a system is dissipated as heat and cannot be recovered as useful mechanical energy, so there's no PE formula associated with it." },
    { id: "3-31", topic: "3.3 Gravitational and Elastic PE", stem: "An object's mass is doubled while its height above the reference level stays the same. How does its gravitational potential energy change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since PE = mgh is directly proportional to mass (with g and h fixed), doubling the mass simply doubles the potential energy — a straightforward linear relationship, unlike PE's relationship with height in a squared spring-PE sense." },
    { id: "3-32", topic: "3.3 Gravitational and Elastic PE", stem: "A spring's displacement from its natural length is tripled. How does its elastic potential energy change?", choices: ["It triples.", "It increases sixfold.", "It increases ninefold.", "It stays the same."], correct: 2, explanation: "Since PE = ½kx² depends on x², tripling the displacement increases the stored energy by a factor of 3² = 9." },
    { id: "3-33", topic: "3.3 Gravitational and Elastic PE", stem: "At what spring displacement is the elastic potential energy at its minimum possible value?", choices: ["At maximum compression only.", "At maximum stretch only.", "At the spring's natural, undisplaced length (x=0).", "Elastic PE has no minimum value."], correct: 2, explanation: "Since PE = ½kx² and x² ≥ 0 always, with equality only when x=0, elastic PE is at its absolute minimum (zero) exactly when the spring sits at its natural length — any displacement, whether stretching or compressing, increases the stored energy." },
    { id: "3-34", topic: "3.4 Conservation of Mechanical Energy", stem: "A ball starts from rest at the top of a frictionless ramp 8.0 m high. Find its speed at the bottom.", choices: ["8.9 m/s", "12.5 m/s", "15.7 m/s", "78.4 m/s"], correct: 1, explanation: "Energy conservation: mgh = ½mv² (mass cancels). v = √(2gh) = √(2×9.8×8.0) = √156.8 ≈ 12.5 m/s." },
    { id: "3-35", topic: "3.4 Conservation of Mechanical Energy", stem: "A pendulum swings back and forth with no friction or air resistance. At what point in its swing is its kinetic energy at a maximum?", choices: ["At the highest points of the swing (the endpoints).", "At the lowest point of the swing.", "Kinetic energy is constant throughout the swing.", "Exactly halfway between the highest and lowest points."], correct: 1, explanation: "At the lowest point of the swing, the pendulum has dropped the most height, converting the most potential energy into kinetic energy — so this is where speed, and therefore kinetic energy, is at its maximum." },
    { id: "3-36", topic: "3.4 Conservation of Mechanical Energy", stem: "A spring (k = 500 N/m) is compressed 0.10 m and used to launch a 0.50 kg object horizontally across a frictionless surface. Find the object's launch speed.", choices: ["1.6 m/s", "3.2 m/s", "5.0 m/s", "10 m/s"], correct: 1, explanation: "All the spring's elastic PE converts to the object's KE: ½kx² = ½mv². (500)(0.10)² = (0.50)v², so 5.0 = 0.50v², giving v² = 10, and v = √10 ≈ 3.2 m/s." },
    { id: "3-37", topic: "3.4 Conservation of Mechanical Energy", stem: "Under what condition does total mechanical energy remain constant for a system?", choices: ["Whenever the object is moving at constant speed.", "Whenever no non-conservative force does work on the system.", "Whenever the object returns to its starting position.", "Mechanical energy is always constant, in every situation."], correct: 1, explanation: "Mechanical energy conservation specifically requires that no non-conservative force (like friction or an external push) does any work on the system — as long as only gravity and/or spring forces act, total mechanical energy stays exactly constant." },
    { id: "3-38", topic: "3.4 Conservation of Mechanical Energy", stem: "A roller coaster car starts from rest at the top of a frictionless hill 20 m high. Find its speed at the bottom.", choices: ["14 m/s", "19.8 m/s", "28 m/s", "196 m/s"], correct: 1, explanation: "v = √(2gh) = √(2×9.8×20) = √392 ≈ 19.8 m/s — notice this doesn't depend at all on the hill's specific shape, only its height." },
    { id: "3-39", topic: "3.4 Conservation of Mechanical Energy", stem: "A ball is thrown straight up at 14 m/s. Using energy methods, find the maximum height it reaches.", choices: ["5.0 m", "10 m", "14 m", "19.6 m"], correct: 1, explanation: "All initial KE converts to PE at the peak: ½mv0² = mgh (mass cancels). h = v0²/(2g) = 196/19.6 = 10 m." },
    { id: "3-40", topic: "3.4 Conservation of Mechanical Energy", stem: "An object slides along a frictionless track that dips down and rises back up to the same height it started at. Compare its speed at the starting point to its speed when it returns to that same height.", choices: ["The speed is greater upon returning.", "The speed is less upon returning.", "The speed is the same in both cases.", "Cannot be determined without knowing the track's shape."], correct: 2, explanation: "Since mechanical energy is conserved (no friction) and the object returns to the same height (same PE), its kinetic energy — and therefore its speed — must also return to the same value, regardless of the specific path taken in between." },
    { id: "3-41", topic: "3.4 Conservation of Mechanical Energy", stem: "A ball rolls down a frictionless incline that drops a total height of 3.0 m. Find its speed at the bottom, regardless of the incline's angle.", choices: ["5.4 m/s", "6.0 m/s", "7.7 m/s", "9.8 m/s"], correct: 2, explanation: "v = √(2gh) = √(2×9.8×3.0) = √58.8 ≈ 7.7 m/s. Energy methods only need the height dropped, not the incline's angle or length." },
    { id: "3-42", topic: "3.4 Conservation of Mechanical Energy", stem: "Why doesn't the specific shape of a frictionless path (straight ramp vs. curved slide, for instance) affect the final speed at the bottom, for a given height drop?", choices: ["Because gravity is a conservative force, and its work depends only on the net change in height, not the path taken.", "Because friction always cancels out any path-dependence.", "Because speed only depends on time, not on force.", "Path shape actually does affect final speed in every case."], correct: 0, explanation: "Gravity is a conservative force — the work it does (and therefore the change in kinetic energy, given no friction) depends only on the net vertical height dropped, not on the specific route taken to get there. This is precisely why energy methods can skip over path details that kinematics would require tracking explicitly." },
    { id: "3-43", topic: "3.4 Conservation of Mechanical Energy", stem: "A spring stores 15 J of elastic potential energy and launches a 0.30 kg object straight upward. Assuming all spring energy converts to height gain, find the object's maximum height.", choices: ["2.5 m", "5.1 m", "7.5 m", "10 m"], correct: 1, explanation: "Setting spring PE equal to the gravitational PE gained: 15 = mgh = (0.30)(9.8)h, so h = 15/2.94 ≈ 5.1 m." },
    { id: "3-44", topic: "3.4 Conservation of Mechanical Energy", stem: "A problem states: 'Assume friction and air resistance are negligible.' What technique does this phrase most strongly signal you should use?", choices: ["Newton's Second Law with a detailed free-body diagram.", "Conservation of mechanical energy.", "The impulse-momentum theorem.", "A graphical slope/area analysis."], correct: 1, explanation: "Explicitly telling you to ignore friction and air resistance is a strong signal that mechanical energy is conserved in this scenario — exactly the condition required for the conservation-of-energy equation to apply directly." },
    { id: "3-45", topic: "3.5 Non-Conservative Forces", stem: "A block slides to a stop on a rough floor due to friction. What happens to its lost mechanical energy?", choices: ["It is destroyed entirely.", "It converts into other forms, primarily heat, at the sliding surfaces.", "It transfers into the block's gravitational potential energy.", "It has no effect — energy conservation is violated in this case."], correct: 1, explanation: "Energy is never destroyed — friction converts the block's mechanical energy into heat (and a small amount of sound) at the surfaces in contact. Total energy across all forms remains conserved; it's specifically the mechanical portion that decreases." },
    { id: "3-46", topic: "3.5 Non-Conservative Forces", stem: "A 5.0 kg object starts at rest at the top of a 4.0 m high ramp WITH friction, and reaches the bottom moving at 6.0 m/s. Find the work done by friction.", choices: ["−196 J", "−106 J", "−90 J", "90 J"], correct: 1, explanation: "E_i = PE_i = mgh = (5.0)(9.8)(4.0) = 196 J (KE_i=0). E_f = KE_f = ½(5.0)(6.0)² = 90 J (PE_f=0 at the bottom). W_friction = ΔE_mech = E_f − E_i = 90 − 196 = −106 J." },
    { id: "3-47", topic: "3.5 Non-Conservative Forces", stem: "A 2.0 kg box slides 5.0 m across a floor with μ_k = 0.30, starting at 8.0 m/s. Find its final speed. (g=9.8 m/s²)", choices: ["3.8 m/s", "5.9 m/s", "6.6 m/s", "7.4 m/s"], correct: 1, explanation: "Friction force: f_k = μ_k·mg = (0.30)(2.0)(9.8) = 5.88 N. Work by friction: W = −f_k·d = −(5.88)(5.0) = −29.4 J. KE_i = ½(2.0)(8.0)² = 64 J. KE_f = 64 − 29.4 = 34.6 J. v_f = √(2×34.6/2.0) = √34.6 ≈ 5.9 m/s." },
    { id: "3-48", topic: "3.5 Non-Conservative Forces", stem: "For a moving object with kinetic friction acting opposite its motion, what is the sign of W_nc (the work done by that non-conservative force)?", choices: ["Always positive.", "Always negative.", "Always zero.", "Can be either sign, depending on the object's speed."], correct: 1, explanation: "Kinetic friction always opposes the direction of motion, so it always does negative work on a moving object — mechanical energy consistently decreases as a result, never increases, from friction alone." },
    { id: "3-49", topic: "3.5 Non-Conservative Forces", stem: "A 2.0 kg object moving at 3.0 m/s on a frictionless horizontal surface has an additional 40 J of work done on it by an external applied force. Find its final speed.", choices: ["4.2 m/s", "5.0 m/s", "7.0 m/s", "9.0 m/s"], correct: 2, explanation: "KE_i = ½(2.0)(3.0)² = 9.0 J. Since the surface is frictionless, the only non-conservative work is from the applied force: KE_f = 9.0 + 40 = 49 J. Solving ½(2.0)v² = 49: v² = 49, so v = 7.0 m/s." },
    { id: "3-50", topic: "3.5 Non-Conservative Forces", stem: "A 1.0 kg ball drops 5.0 m through the air, experiencing some air resistance, and hits the ground moving at 8.0 m/s. Find the amount of mechanical energy converted to heat (and other losses) due to air resistance.", choices: ["8.0 J", "17 J", "32 J", "49 J"], correct: 1, explanation: "Without air resistance, all 49 J of PE (mgh = 1.0×9.8×5.0) would convert to KE. The actual final KE is ½(1.0)(8.0)² = 32 J. The difference, 49 − 32 = 17 J, is the mechanical energy lost to air resistance." },
    { id: "3-51", topic: "3.5 Non-Conservative Forces", stem: "Which of the following is a non-conservative force?", choices: ["Gravity", "An ideal spring force", "Air resistance", "None of these — all forces are conservative"], correct: 2, explanation: "Air resistance is non-conservative — it dissipates mechanical energy as heat and cannot return that energy to the system, unlike gravity and spring forces, which fully store and release energy without loss." },
    { id: "3-52", topic: "3.5 Non-Conservative Forces", stem: "A 2.0 kg object moving at 6.0 m/s slides up a ramp with friction, rising 0.50 m in height while friction does −10 J of work on it. Find its final kinetic energy.", choices: ["16.2 J", "26.2 J", "36.0 J", "46.0 J"], correct: 0, explanation: "KE_i = ½(2.0)(6.0)² = 36 J. PE gained = mgh = (2.0)(9.8)(0.50) = 9.8 J. Using energy balance: KE_f = KE_i − ΔPE − |W_friction| = 36 − 9.8 − 10 = 16.2 J." },
    { id: "3-53", topic: "3.5 Non-Conservative Forces", stem: "Which of the following pairs correctly separates a conservative force from a non-conservative force?", choices: ["Gravity (conservative); kinetic friction (non-conservative)", "Kinetic friction (conservative); gravity (non-conservative)", "Both gravity and kinetic friction are conservative.", "Both gravity and kinetic friction are non-conservative."], correct: 0, explanation: "Gravity is conservative — the energy associated with it can be fully recovered (an object dropped and caught returns all its energy). Kinetic friction is non-conservative, since it dissipates energy as heat, which cannot be recovered as useful mechanical energy." },
    { id: "3-54", topic: "3.5 Non-Conservative Forces", stem: "A 3.0 kg object starts at rest at the top of a 5.0 m ramp with friction. Friction does −60 J of work on it as it slides down. Find its kinetic energy at the bottom.", choices: ["27 J", "87 J", "147 J", "207 J"], correct: 1, explanation: "PE_i = mgh = (3.0)(9.8)(5.0) = 147 J (KE_i=0). At the bottom (PE_f=0): KE_f = PE_i + W_friction = 147 + (−60) = 87 J." },
    { id: "3-55", topic: "3.6 Power", stem: "A motor does 1200 J of work in 6.0 s. Find its average power.", choices: ["7.2 W", "200 W", "1206 W", "7200 W"], correct: 1, explanation: "P = W/t = 1200/6.0 = 200 W." },
    { id: "3-56", topic: "3.6 Power", stem: "A force of 500 N acts on an object moving at a constant 15 m/s in the same direction as the force. Find the power delivered.", choices: ["33 W", "515 W", "3750 W", "7500 W"], correct: 3, explanation: "Since force and velocity are in the same direction (θ=0°): P = Fv = (500)(15) = 7500 W." },
    { id: "3-57", topic: "3.6 Power", stem: "Two motors do the exact same amount of total work, but Motor A takes half the time of Motor B to do it. Compare their average power outputs.", choices: ["Motor A has half the power of Motor B.", "Motor A has twice the power of Motor B.", "Both motors have equal power.", "Cannot be determined without knowing the actual work done."], correct: 1, explanation: "Since P = W/t and both motors do the same W, the motor that takes less time (Motor A, at half the time) must have double the power — power and time are inversely related for a fixed amount of work." },
    { id: "3-58", topic: "3.6 Power", stem: "A device delivers 400 W of power while doing 8000 J of work. Find how long this takes.", choices: ["20 s", "50 s", "400 s", "3,200,000 s"], correct: 0, explanation: "t = W/P = 8000/400 = 20 s." },
    { id: "3-59", topic: "3.6 Power", stem: "A motor operates at a constant 250 W for 12 s. Find the total work done.", choices: ["20.8 J", "262 J", "3000 J", "30,000 J"], correct: 2, explanation: "W = Pt = (250)(12) = 3000 J." },
    { id: "3-60", topic: "3.6 Power", stem: "A car engine maintains constant power output while the car speeds up. As speed increases, what must happen to the force the engine provides?", choices: ["It must increase, to maintain the same power.", "It must decrease, since P=Fv means force and velocity are inversely related at fixed power.", "It stays exactly the same.", "Force and power are unrelated to each other."], correct: 1, explanation: "Since P = Fv, and P is held constant, force and velocity must be inversely proportional — as the car speeds up (v increases), the force the engine can sustain at that same power level must decrease. This is part of why cars tend to accelerate more slowly at higher speeds even under full engine power." },
    { id: "3-61", topic: "3.6 Power", stem: "A 300 N force is applied at 60° to an object's velocity of 10 m/s. Find the instantaneous power delivered. (cos60°=0.50)", choices: ["150 W", "1500 W", "3000 W", "1732 W"], correct: 1, explanation: "P = Fv·cosθ = (300)(10)(0.50) = 1500 W." },
    { id: "3-62", topic: "3.6 Power", stem: "A constant force acts on an object in the direction of its motion. If the object's speed doubles while the force stays the same, how does the instantaneous power change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since P = Fv (with θ=0°, so cosθ=1), power is directly proportional to speed when force is fixed — doubling speed directly doubles the instantaneous power." },
    { id: "3-63", topic: "3.6 Power", stem: "A device operates at a constant 2000 W for 30 s. Find the total energy it delivers.", choices: ["66.7 J", "2030 J", "6000 J", "60,000 J"], correct: 3, explanation: "Energy delivered equals power times time: E = Pt = (2000)(30) = 60,000 J." },
    { id: "3-64", topic: "3.6 Power", stem: "A car's engine force varies throughout a trip as it speeds up, slows down, and speeds up again. What does 'instantaneous power' specifically describe, as opposed to 'average power'?", choices: ["The total energy delivered over the entire trip.", "The power delivered at one specific moment in time, which may differ from the power at other moments.", "The power delivered only at the very end of the trip.", "There is no meaningful difference between the two terms."], correct: 1, explanation: "Instantaneous power describes the power being delivered at a single specific instant — which can vary throughout a trip with changing force and speed — while average power describes the overall total work divided by the overall total time, smoothing out those moment-to-moment variations." },
    { id: "3-65", topic: "3.6 Power", stretch: true, stem: "Stretch — beyond typical AP difficulty: A 5.0 kg object starts from rest and is accelerated by a constant force, reaching a speed of 12 m/s after 4.0 s (assume no friction). Find the average power delivered to the object over this time.", choices: ["15 W", "90 W", "180 W", "360 W"], correct: 1, explanation: "Using the work-energy theorem, the total work done equals the change in kinetic energy: W = ΔKE = ½(5.0)(12)² − 0 = 360 J. Average power is this total work divided by the total time: P_avg = W/t = 360/4.0 = 90 W. Note this is the AVERAGE power — the instantaneous power was actually increasing throughout, since P=Fv and v was continuously increasing under the constant force." },
  ],
  4: [
    { id: "4-1", topic: "4.1 Momentum", stem: "Which statement correctly describes momentum?", choices: ["A scalar quantity depending only on speed.", "A vector quantity combining mass and velocity.", "A vector quantity that depends only on mass.", "A scalar quantity equal to force times time."], correct: 1, explanation: "Momentum, p = mv, is a vector quantity — it has both a magnitude and a direction, inherited directly from the velocity vector, and scaled by the object's mass." },
    { id: "4-2", topic: "4.1 Momentum", stem: "Find the momentum of a 6.0 kg object moving at 4.0 m/s.", choices: ["1.5 kg·m/s", "10 kg·m/s", "24 kg·m/s", "96 kg·m/s"], correct: 2, explanation: "p = mv = (6.0)(4.0) = 24 kg·m/s." },
    { id: "4-3", topic: "4.1 Momentum", stem: "An object's mass is doubled while its velocity stays the same. How does its momentum change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since p = mv is directly proportional to mass, doubling the mass (with velocity fixed) directly doubles the momentum." },
    { id: "4-4", topic: "4.1 Momentum", stem: "An object's velocity is doubled while its mass stays the same. How does its momentum change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since p = mv is directly proportional to velocity, doubling the velocity directly doubles the momentum — unlike kinetic energy, which would quadruple under the same change." },
    { id: "4-5", topic: "4.1 Momentum", stem: "An object has a momentum of 30 kg·m/s and a mass of 5.0 kg. Find its speed.", choices: ["6.0 m/s", "25 m/s", "35 m/s", "150 m/s"], correct: 0, explanation: "v = p/m = 30/5.0 = 6.0 m/s." },
    { id: "4-6", topic: "4.1 Momentum", stem: "Object A (2.0 kg) has the same momentum as Object B (4.0 kg). If Object A moves at 10 m/s, find Object B's speed.", choices: ["2.5 m/s", "5.0 m/s", "10 m/s", "20 m/s"], correct: 1, explanation: "p_A = (2.0)(10) = 20 kg·m/s. Since p_B = p_A = 20 kg·m/s, v_B = 20/4.0 = 5.0 m/s — the more massive object needs less speed to match the same momentum." },
    { id: "4-7", topic: "4.1 Momentum", stem: "Two objects move directly toward each other. How should their individual momenta be combined to find the total momentum of the system?", choices: ["Simply add the magnitudes together.", "Assign opposite signs based on direction, then add algebraically.", "Multiply the two momenta together.", "Total momentum cannot be defined for objects moving in different directions."], correct: 1, explanation: "Since momentum is a vector, combining the momenta of objects moving in different directions requires assigning a positive direction, giving the opposing object's momentum a negative sign, and adding algebraically — exactly like combining displacements or velocities in Unit 1." },
    { id: "4-8", topic: "4.1 Momentum", stem: "A 3.0 kg object moves at 4.0 m/s east, and a 5.0 kg object moves at 2.0 m/s east. Find the total momentum of the system.", choices: ["2.0 kg·m/s east", "12 kg·m/s east", "22 kg·m/s east", "34 kg·m/s east"], correct: 2, explanation: "Both objects move the same direction, so momenta simply add: (3.0)(4.0) + (5.0)(2.0) = 12 + 10 = 22 kg·m/s east." },
    { id: "4-9", topic: "4.1 Momentum", stem: "A 3.0 kg object moves at 6.0 m/s east, and a 4.0 kg object moves at 3.0 m/s west. Find the total momentum of the system.", choices: ["6.0 kg·m/s east", "6.0 kg·m/s west", "30 kg·m/s east", "0 kg·m/s"], correct: 0, explanation: "Taking east as positive: (3.0)(6.0) + (4.0)(−3.0) = 18 − 12 = 6.0 kg·m/s east." },
    { id: "4-10", topic: "4.1 Momentum", stem: "What is the correct SI unit for momentum?", choices: ["N (newton)", "J (joule)", "kg·m/s", "kg·m/s²"], correct: 2, explanation: "Momentum is mass times velocity: kg × (m/s) = kg·m/s, which has no separate named unit of its own (unlike force or energy)." },
    { id: "4-11", topic: "4.1 Momentum", stem: "A loaded truck and a small car travel at the exact same speed. The truck has much greater mass than the car. Compare their momenta.", choices: ["The truck has less momentum, since it's less agile.", "The car has more momentum, since it's typically faster in practice.", "The truck has more momentum, since momentum is directly proportional to mass at a fixed speed.", "They have exactly equal momentum, since they have the same speed."], correct: 2, explanation: "Since p = mv, and both share the same speed, the object with greater mass — the truck — has proportionally greater momentum. This is exactly why a slow-moving truck can still be extremely hard to stop." },
    { id: "4-12", topic: "4.2 Impulse", stem: "A 40 N force acts on an object for 0.25 s. Find the impulse delivered.", choices: ["0.16 N·s", "10 N·s", "40.25 N·s", "160 N·s"], correct: 1, explanation: "J = FΔt = (40)(0.25) = 10 N·s (equivalently, kg·m/s)." },
    { id: "4-13", topic: "4.2 Impulse", stem: "An object's momentum changes by 15 kg·m/s over 0.050 s. Find the average force that caused this change.", choices: ["0.75 N", "0.0033 N", "300 N", "750 N"], correct: 2, explanation: "F = Δp/Δt = 15/0.050 = 300 N." },
    { id: "4-14", topic: "4.2 Impulse", stem: "A 2.0 kg object's velocity changes from 3.0 m/s to 9.0 m/s over 0.40 s. Find the average force acting on it.", choices: ["6.0 N", "15 N", "30 N", "45 N"], correct: 2, explanation: "Δp = m(v_f−v_i) = 2.0(9.0−3.0) = 12 kg·m/s. F = Δp/Δt = 12/0.40 = 30 N." },
    { id: "4-15", topic: "4.2 Impulse", stem: "An airbag increases the time it takes for a passenger's momentum to reach zero during a crash, compared to hitting the dashboard directly. Explain why this reduces injury.", choices: ["The airbag reduces the total impulse needed to stop the passenger.", "The airbag increases Δt for the same Δp, which reduces the average force experienced (since F=Δp/Δt).", "The airbag reduces the passenger's momentum before the crash even happens.", "The airbag has no actual effect on the physics of the collision."], correct: 1, explanation: "The total change in momentum (impulse needed) is the same either way — determined by the passenger's mass and how much their velocity must change. What the airbag changes is the TIME over which that change happens; a longer Δt for the same Δp means a smaller average force, directly reducing the force on the passenger's body." },
    { id: "4-16", topic: "4.2 Impulse", stem: "A 300 N force delivers an impulse of 60 N·s. Find the time over which the force acted.", choices: ["0.20 s", "5.0 s", "240 s", "18,000 s"], correct: 0, explanation: "Δt = J/F = 60/300 = 0.20 s." },
    { id: "4-17", topic: "4.2 Impulse", stem: "For a force that varies over time, what does the area under a force-vs-time graph represent?", choices: ["The object's velocity.", "The object's kinetic energy.", "The impulse delivered.", "The object's mass."], correct: 2, explanation: "Since J = FΔt for a constant force, the general case (varying force) extends this to the area under an F-t graph — exactly analogous to how the area under a v-t graph gives displacement in Unit 1." },
    { id: "4-18", topic: "4.2 Impulse", stem: "A force-vs-time graph shows force decreasing linearly from 100 N at t=0 to 0 N at t=1.0 s. Find the impulse delivered over this interval.", choices: ["25 N·s", "50 N·s", "100 N·s", "200 N·s"], correct: 1, explanation: "The area under this graph is a triangle: ½(base)(height) = ½(1.0)(100) = 50 N·s." },
    { id: "4-19", topic: "4.2 Impulse", stem: "A baseball player catches a fast-moving ball and pulls their hand backward while catching it, rather than holding it rigidly still. Explain why this technique reduces the force on their hand.", choices: ["Pulling the hand back increases the collision time for the same change in the ball's momentum, reducing the average force.", "Pulling the hand back reduces the ball's momentum before it's caught.", "Pulling the hand back has no effect on the force experienced.", "Pulling the hand back increases the force needed to stop the ball."], correct: 0, explanation: "Just like an airbag or bent knees, pulling the hand back as the ball arrives extends the time (Δt) over which the ball's momentum changes to zero — reducing the average force needed (F=Δp/Δt) for that same fixed change in momentum." },
    { id: "4-20", topic: "4.2 Impulse", stem: "A 0.20 kg ball moving at 8.0 m/s hits a wall and bounces straight back at 6.0 m/s. Find the impulse delivered to the ball (taking the ball's original direction as positive).", choices: ["+0.40 kg·m/s", "−0.40 kg·m/s", "−2.8 kg·m/s", "−4.0 kg·m/s"], correct: 2, explanation: "Δp = m(v_f−v_i) = 0.20(−6.0−8.0) = 0.20(−14) = −2.8 kg·m/s. Note that the velocity fully reverses sign upon bouncing, so the change is −14 m/s, not simply −2.0 m/s." },
    { id: "4-21", topic: "4.2 Impulse", stem: "Using the collision from the previous question, find the impulse delivered to the WALL by the ball.", choices: ["−2.8 kg·m/s", "+2.8 kg·m/s", "0 kg·m/s", "+14 kg·m/s"], correct: 1, explanation: "By Newton's Third Law, the impulse the wall exerts on the ball and the impulse the ball exerts on the wall are equal and opposite: since the ball received −2.8 kg·m/s, the wall receives +2.8 kg·m/s (in the ball's original direction of motion)." },
    { id: "4-22", topic: "4.2 Impulse", stem: "Two different force-time graphs both enclose the exact same total area, though one has a much higher peak force over a shorter time and the other has a lower, more sustained force over a longer time. Compare the impulse delivered in each case.", choices: ["The high-peak, short-duration graph delivers more impulse.", "The low-peak, long-duration graph delivers more impulse.", "Both deliver exactly the same impulse, since impulse depends only on the enclosed area.", "Impulse cannot be compared without knowing the object's mass."], correct: 2, explanation: "Impulse is defined as the area under an F-t graph, regardless of the specific shape of that graph. Two graphs with equal area deliver exactly equal impulse, even if their peak forces and durations look completely different." },
    { id: "4-23", topic: "4.3 Conservation of Momentum", stem: "Under what condition is the total momentum of a system conserved?", choices: ["Only when all collisions within the system are elastic.", "Whenever there is no net external force acting on the system.", "Only when all objects in the system have equal mass.", "Momentum is never actually conserved in real systems."], correct: 1, explanation: "Momentum conservation requires an isolated system — no net EXTERNAL force acting on it. Internal forces (collisions, explosions, pushes between objects within the system) never change the total, regardless of whether the internal interactions are elastic or not." },
    { id: "4-24", topic: "4.3 Conservation of Momentum", stem: "A 5.0 kg cart moving at 6.0 m/s collides and sticks with a stationary 3.0 kg cart. Find their combined final velocity.", choices: ["2.25 m/s", "3.75 m/s", "6.0 m/s", "10 m/s"], correct: 1, explanation: "Using conservation of momentum: (5.0)(6.0) + (3.0)(0) = (8.0)v_f → 30 = 8.0v_f → v_f = 3.75 m/s." },
    { id: "4-25", topic: "4.3 Conservation of Momentum", stem: "Two carts collide on a track that has significant friction with the ground. Is momentum of the two-cart system still exactly conserved during the collision?", choices: ["Yes, always, regardless of friction.", "Momentum conservation for the two-cart system requires friction (an external force) to be negligible during the brief collision — if friction is significant, momentum is not exactly conserved.", "No, momentum is never conserved when friction is present anywhere in the system.", "Momentum conservation only applies to frictionless systems in all cases."], correct: 1, explanation: "Friction from the ground is an EXTERNAL force on the two-cart system, and if it's significant, it violates the 'no net external force' condition needed for momentum conservation. In practice, collisions typically happen so quickly that friction's effect during the collision itself is negligible, even if it matters over the longer timescale of the carts' full motion." },
    { id: "4-26", topic: "4.3 Conservation of Momentum", stem: "A 12 kg object at rest explodes into two pieces. One piece, 5.0 kg, moves at 8.0 m/s in one direction. Find the speed of the other 7.0 kg piece.", choices: ["4.4 m/s", "5.7 m/s", "8.0 m/s", "11.2 m/s"], correct: 1, explanation: "Total momentum before is zero. (5.0)(8.0) + (7.0)v₂ = 0 → 40 + 7.0v₂ = 0 → v₂ = −5.71 m/s, a magnitude of about 5.7 m/s in the opposite direction." },
    { id: "4-27", topic: "4.3 Conservation of Momentum", stem: "In a collision between two objects, is it possible for momentum to be conserved while kinetic energy is not?", choices: ["No — if momentum is conserved, kinetic energy must be too.", "Yes — this describes exactly what happens in an inelastic collision.", "No, this would violate conservation of energy entirely.", "Only if the objects have equal mass."], correct: 1, explanation: "This is precisely the definition of an inelastic collision: momentum remains conserved (as it always does for an isolated system), while kinetic energy is NOT conserved, some of it converting into heat, sound, or deformation. The two conservation laws are independent of each other." },
    { id: "4-28", topic: "4.3 Conservation of Momentum", stem: "A 3.0 kg object moving at 5.0 m/s collides and sticks with a stationary 2.0 kg object. Find their combined final velocity.", choices: ["2.0 m/s", "3.0 m/s", "4.0 m/s", "5.0 m/s"], correct: 1, explanation: "(3.0)(5.0) + (2.0)(0) = (5.0)v_f → 15 = 5.0v_f → v_f = 3.0 m/s." },
    { id: "4-29", topic: "4.3 Conservation of Momentum", stem: "Explain, using conservation of momentum, why a rifle recoils backward when a bullet is fired.", choices: ["The rifle recoils due to air resistance pushing back on the bullet.", "Total momentum of the rifle-bullet system must remain zero (its value before firing), so the rifle must gain momentum opposite the bullet's direction to compensate for the bullet's forward momentum.", "The rifle recoils because the bullet is heavier than the rifle.", "Recoil is unrelated to momentum and is caused entirely by the explosive force of the gunpowder."], correct: 1, explanation: "Before firing, the rifle-bullet system is at rest, with zero total momentum. Since momentum must be conserved (internal explosive forces only, no significant external force during firing), the rifle must recoil backward with momentum exactly equal and opposite to the bullet's forward momentum, keeping the total at zero." },
    { id: "4-30", topic: "4.3 Conservation of Momentum", stem: "A 0.020 kg bullet is fired at 400 m/s from a 4.0 kg gun initially at rest. Find the gun's recoil speed.", choices: ["0.5 m/s", "2.0 m/s", "5.0 m/s", "20 m/s"], correct: 1, explanation: "Total momentum before is zero. (0.020)(400) + (4.0)V = 0 → 8.0 + 4.0V = 0 → V = −2.0 m/s, a recoil speed of 2.0 m/s." },
    { id: "4-31", topic: "4.3 Conservation of Momentum", stem: "Two skaters, initially at rest, push off from each other. Skater A has more mass than Skater B. Compare their resulting speeds.", choices: ["Skater A (more massive) ends up moving faster.", "Skater B (less massive) ends up moving faster.", "Both skaters end up moving at the same speed.", "Neither skater moves, since they started at rest."], correct: 1, explanation: "Since total momentum must remain zero, the two skaters' momenta must be equal in magnitude: m_A·v_A = m_B·v_B. For this to balance with m_A > m_B, the less massive skater (B) must move at a correspondingly greater speed." },
    { id: "4-32", topic: "4.3 Conservation of Momentum", stem: "Two skaters push off from rest. The 40 kg skater moves away at 3.5 m/s. Find the speed of the 70 kg skater.", choices: ["1.4 m/s", "2.0 m/s", "3.5 m/s", "6.1 m/s"], correct: 1, explanation: "Total momentum stays zero: (40)(3.5) = (70)(v), so v = 140/70 = 2.0 m/s." },
    { id: "4-33", topic: "4.3 Conservation of Momentum", stem: "In a two-object collision, the individual velocities of both objects change. What, if anything, stays exactly the same before and after, for an isolated system?", choices: ["Each individual object's velocity.", "Each individual object's kinetic energy.", "The vector sum of the momenta of both objects combined.", "Nothing stays the same in a collision."], correct: 2, explanation: "While the individual objects' velocities (and generally their individual kinetic energies) change during a collision, the TOTAL momentum of the system — the vector sum of both objects' momenta — remains exactly constant throughout, as long as the system is isolated." },
    { id: "4-34", topic: "4.4 Elastic Collisions", stem: "What distinguishes an elastic collision from other types of collisions?", choices: ["Only momentum is conserved.", "Only kinetic energy is conserved.", "Both momentum and kinetic energy are conserved.", "Neither momentum nor kinetic energy is conserved."], correct: 2, explanation: "An elastic collision is specifically defined by BOTH conservation laws holding simultaneously — momentum (as in any isolated collision) AND kinetic energy (which is the special, additional condition unique to elastic collisions)." },
    { id: "4-35", topic: "4.4 Elastic Collisions", stem: "A 3.0 kg ball moving at 8.0 m/s collides elastically with an identical, stationary 3.0 kg ball. Find the final velocities of both balls.", choices: ["Both move at 4.0 m/s.", "The first ball stops (0 m/s); the second moves at 8.0 m/s.", "The first ball moves at 8.0 m/s; the second stays at rest.", "Both move at 8.0 m/s."], correct: 1, explanation: "This is the classic equal-mass elastic collision result: the moving object comes to a complete stop, and the stationary object takes on the moving object's original velocity — the two 'swap' velocities entirely." },
    { id: "4-36", topic: "4.4 Elastic Collisions", stem: "How can you verify, using calculated before-and-after values, whether a given collision was actually elastic?", choices: ["Check whether momentum was conserved.", "Check whether total kinetic energy before equals total kinetic energy after.", "Check whether the objects moved in the same direction after colliding.", "Check whether the objects have equal mass."], correct: 1, explanation: "Since momentum is conserved in EVERY isolated collision (elastic or not), checking momentum alone can't distinguish an elastic collision from any other kind. The distinguishing test is specifically whether total kinetic energy is the same before and after." },
    { id: "4-37", topic: "4.4 Elastic Collisions", stem: "A 2.0 kg object moving at 6.0 m/s collides with an identical stationary 2.0 kg object; afterward, the first object is at rest and the second moves at 6.0 m/s. Verify this is consistent with an elastic collision by comparing kinetic energy before and after.", choices: ["KE_before = 36 J; KE_after = 18 J — not elastic.", "KE_before = 36 J; KE_after = 36 J — consistent with elastic.", "KE_before = 18 J; KE_after = 36 J — not possible.", "KE cannot be determined without more information."], correct: 1, explanation: "KE_before = ½(2.0)(6.0)² = 36 J. KE_after = ½(2.0)(0)² + ½(2.0)(6.0)² = 0 + 36 = 36 J. Since KE_before = KE_after, this collision is indeed consistent with being perfectly elastic." },
    { id: "4-38", topic: "4.4 Elastic Collisions", stem: "In an elastic collision between two objects of DIFFERENT masses, does the equal-mass 'velocity swap' result still apply?", choices: ["Yes, the velocities always swap regardless of mass.", "No — the velocity-swap result is specific to equal masses; unequal masses require solving both conservation equations together.", "Only if the heavier object is initially at rest.", "Only if the lighter object is initially at rest."], correct: 1, explanation: "The clean 'velocities swap entirely' result only holds for the special case of equal masses. When masses differ, both objects' final velocities depend on the specific mass ratio, and require solving the momentum and kinetic energy conservation equations together as a system." },
    { id: "4-39", topic: "4.4 Elastic Collisions", stem: "A very light ball collides elastically with a much heavier, stationary object (like a wall). Describe what happens, approximately, to the ball and to the heavy object.", choices: ["The ball stops completely; the heavy object moves away quickly.", "The ball rebounds at nearly its original speed (reversed direction); the heavy object barely moves at all.", "Both objects move off at half the ball's original speed.", "The ball and the heavy object end up moving at the same final velocity."], correct: 1, explanation: "In the limit of a very large mass ratio, an elastic collision leaves the light object rebounding at nearly its original speed (just reversed in direction), while the much heavier object gains only a tiny, often negligible, velocity — this is a good approximate model for a ball bouncing elastically off a wall." },
    { id: "4-40", topic: "4.4 Elastic Collisions", stem: "A 1.0 kg object moving at 6.0 m/s collides with a stationary 3.0 kg object. Afterward, the 1.0 kg object moves at −3.0 m/s and the 3.0 kg object moves at 3.0 m/s. Is this collision elastic?", choices: ["No, since the first object reversed direction.", "Yes — kinetic energy before (18 J) equals kinetic energy after (18 J).", "No, since momentum wasn't conserved.", "Cannot be determined without additional data."], correct: 1, explanation: "Check momentum: before, p=(1.0)(6.0)=6.0 kg·m/s; after, p=(1.0)(−3.0)+(3.0)(3.0)=−3.0+9.0=6.0 kg·m/s — conserved. Check KE: before, ½(1.0)(6.0)²=18 J; after, ½(1.0)(3.0)²+½(3.0)(3.0)²=4.5+13.5=18 J — also conserved. Since both are conserved, this collision is indeed elastic." },
    { id: "4-41", topic: "4.4 Elastic Collisions", stem: "In an elastic collision where a moving object strikes an identical stationary object, is it possible for the two objects to have the same nonzero final velocity?", choices: ["Yes, this is the typical elastic outcome.", "No — for equal masses colliding elastically, the correct result is a full velocity swap (one stops, one takes the original velocity), not equal final velocities.", "Yes, but only for very slow collisions.", "This can only be determined with specific numbers."], correct: 1, explanation: "If both objects had the same final velocity after an equal-mass elastic collision, that would actually describe a perfectly INELASTIC collision (they'd effectively be moving together) — which doesn't conserve kinetic energy for a moving-object-hits-stationary-object setup. The correct elastic result for equal masses is a full swap, not a shared final velocity." },
    { id: "4-42", topic: "4.4 Elastic Collisions", stem: "A 4.0 kg ball moving at 5.0 m/s collides elastically with an identical, stationary 4.0 kg ball. Find the total kinetic energy after the collision.", choices: ["0 J", "25 J", "50 J", "100 J"], correct: 2, explanation: "Since the collision is elastic, total KE is conserved: KE_before = ½(4.0)(5.0)² = 50 J, so KE_after must also equal 50 J (even though it's now entirely carried by the second ball, per the velocity-swap result)." },
    { id: "4-43", topic: "4.4 Elastic Collisions", stem: "What single additional piece of information distinguishes an elastic collision from a generic collision, in terms of the conservation laws that apply?", choices: ["Conservation of mass.", "Conservation of kinetic energy, in addition to the momentum conservation that always applies.", "Conservation of momentum, which only applies to elastic collisions.", "Conservation of force."], correct: 1, explanation: "Momentum conservation applies to every isolated collision, elastic or not. What makes a collision specifically elastic is the ADDITIONAL fact that kinetic energy is also conserved — that's the one extra condition that sets elastic collisions apart." },
    { id: "4-44", topic: "4.4 Elastic Collisions", stem: "A 0.50 kg ball moving at 12 m/s bounces elastically off an extremely massive, stationary wall. Find the ball's speed and kinetic energy immediately after the bounce.", choices: ["Speed 0 m/s; KE 0 J", "Speed 6.0 m/s; KE 9.0 J", "Speed 12 m/s; KE 36 J", "Speed 24 m/s; KE 144 J"], correct: 2, explanation: "In the idealized limit of an infinitely massive wall, the elastic collision leaves the ball's speed essentially unchanged (12 m/s, just reversed in direction), since the wall absorbs essentially none of the kinetic energy. KE = ½(0.50)(12)² = 36 J, identical to its KE before the bounce." },
    { id: "4-45", topic: "4.5 Inelastic Collisions", stem: "What defines a PERFECTLY inelastic collision?", choices: ["Kinetic energy is fully conserved.", "The two colliding objects stick together and move with a common final velocity.", "Momentum is not conserved.", "The objects bounce apart with equal and opposite velocities."], correct: 1, explanation: "A perfectly inelastic collision is specifically the case where the colliding objects stick together afterward, moving as a single combined mass — the maximum possible kinetic energy loss consistent with momentum conservation." },
    { id: "4-46", topic: "4.5 Inelastic Collisions", stem: "A 5.0 kg cart moving at 8.0 m/s collides perfectly inelastically with a stationary 3.0 kg cart. Find their combined final velocity.", choices: ["3.0 m/s", "5.0 m/s", "6.4 m/s", "8.0 m/s"], correct: 1, explanation: "(5.0)(8.0) + (3.0)(0) = (8.0)v_f → 40 = 8.0v_f → v_f = 5.0 m/s." },
    { id: "4-47", topic: "4.5 Inelastic Collisions", stem: "Is momentum conserved in an inelastic collision?", choices: ["No, momentum is only conserved in elastic collisions.", "Yes — momentum is conserved for any isolated collision, elastic or inelastic.", "Only if the objects have equal mass.", "Only if the collision is perfectly inelastic, not partially inelastic."], correct: 1, explanation: "Momentum conservation depends only on the system being isolated (no net external force) — it doesn't require the collision to be elastic. Momentum is conserved in elastic, inelastic, and perfectly inelastic collisions alike." },
    { id: "4-48", topic: "4.5 Inelastic Collisions", stem: "Using the cart collision from an earlier question (5.0 kg at 8.0 m/s, sticking to a stationary 3.0 kg cart, final velocity 5.0 m/s), find the kinetic energy lost in the collision.", choices: ["40 J", "60 J", "100 J", "160 J"], correct: 1, explanation: "KE_before = ½(5.0)(8.0)² = 160 J. KE_after = ½(8.0)(5.0)² = 100 J. KE lost = 160 − 100 = 60 J." },
    { id: "4-49", topic: "4.5 Inelastic Collisions", stem: "In an inelastic collision, what happens to the kinetic energy that is 'lost'?", choices: ["It is truly destroyed and no longer exists in any form.", "It converts into other forms of energy, such as heat, sound, and deformation.", "It transfers entirely into the potential energy of the objects.", "It is actually gained by an outside object not involved in the collision."], correct: 1, explanation: "Energy is never actually destroyed — the kinetic energy 'lost' during an inelastic collision converts into other forms, primarily heat generated by the deformation and internal friction of the colliding objects, plus sound." },
    { id: "4-50", topic: "4.5 Inelastic Collisions", stem: "A 4.0 kg object moving at 5.0 m/s east collides perfectly inelastically with a 6.0 kg object moving at 3.0 m/s west. Find their combined final velocity.", choices: ["0.20 m/s east", "0.20 m/s west", "1.1 m/s east", "1.1 m/s west"], correct: 0, explanation: "Taking east as positive: (4.0)(5.0) + (6.0)(−3.0) = 20 − 18 = 2.0 kg·m/s. Combined mass = 10 kg. v_f = 2.0/10 = 0.20 m/s east." },
    { id: "4-51", topic: "4.5 Inelastic Collisions", stem: "A problem states: 'The two objects collide and stick together.' What formula should this phrase immediately signal?", choices: ["The elastic collision equations.", "m1v1 + m2v2 = (m1+m2)v_f — the perfectly inelastic collision formula.", "The work-energy theorem.", "Conservation of mechanical energy."], correct: 1, explanation: "'Stick together' is the standard, unambiguous language for a perfectly inelastic collision — signaling immediate use of the combined-mass momentum conservation formula, without needing to separately solve for two different final velocities." },
    { id: "4-52", topic: "4.5 Inelastic Collisions", stem: "A 0.010 kg bullet moving at 300 m/s embeds itself in a stationary 2.0 kg wooden block (ballistic pendulum setup). Find the combined velocity immediately after impact.", choices: ["0.75 m/s", "1.5 m/s", "3.0 m/s", "150 m/s"], correct: 1, explanation: "(0.010)(300) + (2.0)(0) = (2.01)v_f → 3.0 = 2.01v_f → v_f ≈ 1.49 m/s, close to 1.5 m/s." },
    { id: "4-53", topic: "4.5 Inelastic Collisions", stem: "Real-world car crashes are almost always significantly inelastic. Explain why, physically.", choices: ["Because momentum is not conserved in car crashes.", "Because metal deformation, heat, and sound generated during the crash all consume kinetic energy that cannot be recovered.", "Because cars always have exactly equal mass.", "Because cars move too slowly for elastic collisions to occur."], correct: 1, explanation: "The crumpling of metal, heat generated by that deformation, and the sound of the crash all represent kinetic energy being converted into other, non-recoverable forms — exactly the hallmark of an inelastic collision. (This is actually a safety feature by design: crumple zones intentionally maximize this energy conversion to reduce the force transmitted to passengers.)" },
    { id: "4-54", topic: "4.5 Inelastic Collisions", stem: "A 2.0 kg object moving at 10 m/s collides perfectly inelastically with an identical, stationary 2.0 kg object. Find the fraction of the original kinetic energy that is lost in the collision.", choices: ["0%", "25%", "50%", "75%"], correct: 2, explanation: "v_f = (2.0×10+0)/4.0 = 5.0 m/s. KE_before = ½(2.0)(10)² = 100 J. KE_after = ½(4.0)(5.0)² = 50 J. Fraction lost = 50/100 = 50%." },
    { id: "4-55", topic: "4.5 Inelastic Collisions", stem: "Is it possible for momentum to NOT be conserved during a real-world collision?", choices: ["No, momentum is always conserved under every circumstance, with no exceptions.", "Yes — if a significant net external force (like friction from the ground) acts during the collision, momentum of the colliding objects alone will not be exactly conserved.", "Yes, but only in elastic collisions.", "No, since kinetic energy loss always exactly compensates for any momentum change."], correct: 1, explanation: "Momentum conservation specifically requires an isolated system. If an external force (such as significant friction, or an outside push) acts on the objects during the collision, that external impulse will change the total momentum of just the colliding objects — conservation only strictly applies when such external forces are negligible or absent." },
    { id: "4-56", topic: "4.6 Center of Mass", stem: "What does the center of mass of a system of objects represent?", choices: ["The location of the single heaviest object in the system.", "The mass-weighted average position of all the objects in the system.", "The exact geometric center of the system, regardless of mass distribution.", "A point that only exists for symmetric systems."], correct: 1, explanation: "The center of mass is a mass-weighted average position — locations with more mass 'pull' the average more strongly toward themselves, which is why it generally does not coincide with the simple geometric center unless the mass is distributed symmetrically." },
    { id: "4-57", topic: "4.6 Center of Mass", stem: "A 2.0 kg object sits at x = 0, and a 6.0 kg object sits at x = 8.0 m. Find the center of mass of the system.", choices: ["2.0 m", "4.0 m", "6.0 m", "8.0 m"], correct: 2, explanation: "x_cm = [(2.0)(0)+(6.0)(8.0)]/(2.0+6.0) = 48/8.0 = 6.0 m." },
    { id: "4-58", topic: "4.6 Center of Mass", stem: "A firework shell is launched and follows a parabolic path. Partway through its flight, it explodes into many fragments. How does the center of mass of the fragments move after the explosion?", choices: ["It falls straight down immediately.", "It continues to follow the same parabolic path the unexploded shell would have followed.", "It stops moving entirely.", "Its motion becomes completely unpredictable."], correct: 1, explanation: "The explosive forces are entirely internal to the system of fragments, and internal forces can never change the system's total momentum. Since the center of mass's motion is tied directly to total momentum, it continues along the exact same path (still just gravity acting on it) that the unexploded shell would have followed." },
    { id: "4-59", topic: "4.6 Center of Mass", stem: "Three objects lie on a line: 1.0 kg at x=0, 2.0 kg at x=3.0 m, and 3.0 kg at x=6.0 m. Find the center of mass.", choices: ["3.0 m", "4.0 m", "4.5 m", "6.0 m"], correct: 1, explanation: "x_cm = [(1.0)(0)+(2.0)(3.0)+(3.0)(6.0)]/(1.0+2.0+3.0) = (0+6.0+18)/6.0 = 24/6.0 = 4.0 m." },
    { id: "4-60", topic: "4.6 Center of Mass", stem: "Is it possible for a system's center of mass to be located at a point where there is no actual mass?", choices: ["No, the center of mass must always coincide with a physical object.", "Yes — for instance, the center of mass of two separated point masses lies in the empty space between them.", "Only for perfectly symmetric objects.", "Only in systems with more than three objects."], correct: 1, explanation: "The center of mass is a mathematical average position, not a physical object itself — for two separate point masses, the center of mass sits somewhere in the empty space between them (closer to whichever has more mass), a location with no actual matter present." },
    { id: "4-61", topic: "4.6 Center of Mass", stem: "Two equal masses sit at x = 2.0 m and x = 10 m. Find the center of mass.", choices: ["4.0 m", "6.0 m", "8.0 m", "12 m"], correct: 1, explanation: "With equal masses, the mass-weighted average simplifies to the ordinary midpoint: (2.0+10)/2 = 6.0 m." },
    { id: "4-62", topic: "4.6 Center of Mass", stem: "A stationary object at rest suddenly explodes into several fragments flying outward in different directions. What happens to the velocity of the system's center of mass immediately after the explosion?", choices: ["It moves in the direction of the largest fragment.", "It remains at rest (zero velocity), exactly as before the explosion.", "It moves in a random direction.", "It moves at the average speed of all the fragments."], correct: 1, explanation: "Since the explosive forces are entirely internal, they cannot change the system's total momentum — which was zero before the explosion (object at rest). With total momentum still zero afterward, the center of mass's velocity (v_cm = p_total/m_total) must also remain exactly zero." },
    { id: "4-63", topic: "4.6 Center of Mass", stem: "A 4.0 kg object sits at x=0. A second object of unknown mass sits at x=10 m. The system's center of mass is at x=7.0 m. Find the unknown mass.", choices: ["2.8 kg", "6.0 kg", "9.3 kg", "12 kg"], correct: 2, explanation: "Setting up the equation: [(4.0)(0)+m₂(10)]/(4.0+m₂) = 7.0. So 10m₂ = 7.0(4.0+m₂) = 28+7.0m₂, giving 3.0m₂ = 28, so m₂ ≈ 9.3 kg." },
    { id: "4-64", topic: "4.6 Center of Mass", stem: "Why does an isolated system's center of mass move at constant velocity, even during an internal collision between objects in that system?", choices: ["Because collisions always conserve kinetic energy.", "Because internal collision forces, by Newton's Third Law, cannot change the system's total momentum, and center-of-mass velocity is directly tied to total momentum.", "Because the center of mass is unaffected by any forces whatsoever.", "This is only true for elastic collisions, not inelastic ones."], correct: 1, explanation: "Internal forces during a collision come in Newton's Third Law pairs that cancel when summed over the whole system, meaning total momentum never changes — regardless of whether the collision is elastic or inelastic. Since v_cm = p_total/m_total, and neither p_total nor m_total changes during an internal collision, the center of mass keeps moving at whatever constant velocity it had before." },
    { id: "4-65", topic: "4.6 Center of Mass", stretch: true, stem: "Stretch — beyond typical AP difficulty: A 3.0 kg object moves at 6.0 m/s and a 5.0 kg object moves at −2.0 m/s (opposite direction) along the same line. Find the velocity of the system's center of mass, then explain why this value must be unchanged even after the two objects collide and stick together.", choices: ["1.0 m/s, and it stays the same after the collision since total momentum and total mass are both unchanged by an internal collision.", "1.0 m/s, and it changes to match whatever new velocity the objects have right after impact.", "2.0 m/s, unrelated to the objects' individual velocities.", "0 m/s, since the objects move in opposite directions."], correct: 0, explanation: "v_cm = (m1v1+m2v2)/(m1+m2) = [(3.0)(6.0)+(5.0)(−2.0)]/(3.0+5.0) = (18−10)/8.0 = 8.0/8.0 = 1.0 m/s. Since the collision is purely an internal event (no external force acts on the two-object system), total momentum (8.0 kg·m/s) and total mass (8.0 kg) are both unchanged by it — so v_cm remains exactly 1.0 m/s both before and after. This is exactly why the final combined velocity in a perfectly inelastic collision always equals the pre-collision center-of-mass velocity: the two are the same calculation." },
  ],
  5: [
    { id: "5-1", topic: "5.1 Rotational Kinematics", stem: "Which of the following correctly describes the relationship between linear and rotational kinematics?", choices: ["They describe completely unrelated types of physics.", "Rotational kinematics uses the exact same equation structure as linear kinematics, with angular quantities substituted for linear ones.", "Rotational motion never involves acceleration.", "Rotational kinematics only applies to objects moving in a straight line."], correct: 1, explanation: "Every linear kinematics equation from Unit 1 has a direct rotational counterpart, built by substituting θ for x, ω for v, and α for a — the underlying mathematical structure is identical." },
    { id: "5-2", topic: "5.1 Rotational Kinematics", stem: "An object rotates through 4π rad in 2.0 s at a constant rate. Find its average angular velocity.", choices: ["π rad/s", "2π rad/s", "4π rad/s", "8π rad/s"], correct: 1, explanation: "ω = Δθ/Δt = 4π/2.0 = 2π rad/s ≈ 6.28 rad/s." },
    { id: "5-3", topic: "5.1 Rotational Kinematics", stem: "A wheel's angular velocity increases from 2.0 rad/s to 10 rad/s over 4.0 s. Find its angular acceleration.", choices: ["0.5 rad/s²", "2.0 rad/s²", "3.0 rad/s²", "8.0 rad/s²"], correct: 1, explanation: "α = Δω/Δt = (10−2.0)/4.0 = 8.0/4.0 = 2.0 rad/s²." },
    { id: "5-4", topic: "5.1 Rotational Kinematics", stem: "A point on a rotating wheel is 0.50 m from the axis and has an angular velocity of 8.0 rad/s. Find its linear (tangential) speed.", choices: ["0.0625 m/s", "4.0 m/s", "8.5 m/s", "16 m/s"], correct: 1, explanation: "v = rω = (0.50)(8.0) = 4.0 m/s." },
    { id: "5-5", topic: "5.1 Rotational Kinematics", stem: "A point 0.30 m from an axis experiences an angular acceleration of 5.0 rad/s². Find its tangential (linear) acceleration.", choices: ["0.06 m/s²", "1.5 m/s²", "5.3 m/s²", "16.7 m/s²"], correct: 1, explanation: "a_tangential = rα = (0.30)(5.0) = 1.5 m/s²." },
    { id: "5-6", topic: "5.1 Rotational Kinematics", stem: "For a rigid object spinning at a fixed angular velocity, how does the linear speed of a point change as its distance from the axis doubles?", choices: ["It stays the same.", "It doubles.", "It quadruples.", "It is cut in half."], correct: 1, explanation: "Since v = rω, and ω is fixed for every point on a rigid rotating object, linear speed is directly proportional to r — doubling the distance from the axis directly doubles the linear speed." },
    { id: "5-7", topic: "5.1 Rotational Kinematics", stem: "A wheel starts at rest and undergoes constant angular acceleration of 3.0 rad/s² for 4.0 s. Find the total angle it sweeps through.", choices: ["12 rad", "24 rad", "48 rad", "96 rad"], correct: 1, explanation: "Δθ = ω0t + ½αt² = 0 + ½(3.0)(4.0)² = ½(3.0)(16) = 24 rad." },
    { id: "5-8", topic: "5.1 Rotational Kinematics", stem: "A wheel starts at rest and accelerates at a constant 4.0 rad/s² through an angle of 18 rad. Find its final angular velocity.", choices: ["4.0 rad/s", "9.0 rad/s", "12 rad/s", "72 rad/s"], correct: 2, explanation: "ω² = ω0² + 2αΔθ = 0 + 2(4.0)(18) = 144, so ω = √144 = 12 rad/s." },
    { id: "5-9", topic: "5.1 Rotational Kinematics", stem: "Two points, A and B, sit on the same spinning rigid disk, with A twice as far from the axis as B. Compare their angular velocities and their linear speeds.", choices: ["Both angular velocity and linear speed are equal for A and B.", "Angular velocity is equal for both; A's linear speed is twice B's.", "A's angular velocity is twice B's; linear speeds are equal.", "Both angular velocity and linear speed are twice as large for A."], correct: 1, explanation: "Every point on a single rigid rotating object shares the same angular velocity ω, regardless of its distance from the axis. But linear speed, v=rω, does depend on r — so A (twice as far out) has twice the linear speed of B, despite matching angular velocities." },
    { id: "5-10", topic: "5.1 Rotational Kinematics", stem: "By the standard convention used throughout this unit, which direction of rotation is treated as positive?", choices: ["Clockwise", "Counterclockwise", "Neither direction has a standard sign convention.", "It depends on which hemisphere the problem is set in."], correct: 1, explanation: "The standard physics convention treats counterclockwise rotation (and the corresponding angular velocity, acceleration, and torque) as positive, with clockwise as negative — consistent for the same reason mathematical angles are conventionally measured counterclockwise from the positive x-axis." },
    { id: "5-11", topic: "5.2 Torque", stem: "A 20 N force is applied perpendicular to a lever arm 0.40 m from the axis. Find the torque produced.", choices: ["5.0 N·m", "8.0 N·m", "20.4 N·m", "50 N·m"], correct: 1, explanation: "τ = rFsinθ = (0.40)(20)(sin90°) = (0.40)(20)(1) = 8.0 N·m." },
    { id: "5-12", topic: "5.2 Torque", stem: "A 30 N force is applied at 30° to a lever arm 0.50 m long. Find the torque produced. (sin30°=0.50)", choices: ["3.75 N·m", "7.5 N·m", "13 N·m", "15 N·m"], correct: 1, explanation: "τ = rFsinθ = (0.50)(30)(0.50) = 7.5 N·m." },
    { id: "5-13", topic: "5.2 Torque", stem: "A force is applied directly at the axis of rotation (r=0). Find the torque produced, regardless of the force's magnitude.", choices: ["Equal to the force's magnitude.", "Zero.", "Depends on the angle of application.", "Cannot be determined without more information."], correct: 1, explanation: "Since τ = rFsinθ and r=0 in this case, the torque is exactly zero regardless of how large the force is or at what angle it's applied — there's no lever arm at all for the force to act through." },
    { id: "5-14", topic: "5.2 Torque", stem: "A force is applied parallel to the lever arm (θ=0°). Find the torque produced.", choices: ["Equal to the force times the lever arm length.", "Zero.", "Maximum possible torque.", "Cannot be determined without the object's mass."], correct: 1, explanation: "Since τ = rFsinθ and sin0°=0, a force applied exactly parallel to the lever arm produces zero torque, regardless of the force's magnitude or the lever arm's length." },
    { id: "5-15", topic: "5.2 Torque", stem: "A perpendicular force is applied at a fixed distance from an axis, and that distance is doubled while the force stays the same. How does the resulting torque change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since τ = rFsinθ is directly proportional to r (with F and θ fixed), doubling the lever arm distance directly doubles the resulting torque." },
    { id: "5-16", topic: "5.2 Torque", stem: "A torque of 15 N·m is needed, applied perpendicular to a lever arm 0.30 m long. Find the required force.", choices: ["4.5 N", "15.3 N", "45 N", "50 N"], correct: 3, explanation: "τ = rF (since sinθ=1). Solving for F: F = τ/r = 15/0.30 = 50 N." },
    { id: "5-17", topic: "5.2 Torque", stem: "For a fixed force magnitude and lever arm length, at what angle θ does the resulting torque reach its maximum possible value?", choices: ["0°", "45°", "90°", "180°"], correct: 2, explanation: "Since τ = rFsinθ, torque is maximized when sinθ is at its maximum value, 1, which occurs at θ=90° — a force applied exactly perpendicular to the lever arm." },
    { id: "5-18", topic: "5.2 Torque", stem: "A wrench 0.25 m long has an 80 N force applied perpendicular to it, at its end. Find the torque produced.", choices: ["3.125 N·m", "20 N·m", "32 N·m", "80.25 N·m"], correct: 1, explanation: "τ = rFsinθ = (0.25)(80)(1) = 20 N·m." },
    { id: "5-19", topic: "5.2 Torque", stem: "Two forces are applied to the same rigid rod: one creates a torque tending to rotate it counterclockwise, and the other tends to rotate it clockwise. How should these two torques be combined to find the net torque?", choices: ["Their magnitudes simply add together.", "Assign one direction as positive and the other negative, then add algebraically.", "Multiply the two torques together.", "Only the larger torque matters; the smaller one is ignored."], correct: 1, explanation: "Just like combining forces or momenta along a line, torques in opposite rotational directions must be assigned opposite signs (by convention, CCW positive and CW negative) and combined algebraically to find the true net torque." },
    { id: "5-20", topic: "5.2 Torque", stem: "A rod experiences a 12 N·m counterclockwise torque and a 5.0 N·m clockwise torque simultaneously. Find the net torque.", choices: ["7.0 N·m counterclockwise", "7.0 N·m clockwise", "17 N·m counterclockwise", "17 N·m clockwise"], correct: 0, explanation: "Taking CCW as positive: net torque = 12 + (−5.0) = 7.0 N·m, positive, meaning counterclockwise." },
    { id: "5-21", topic: "5.2 Torque", stem: "Torque and work share the same SI unit, the newton-meter (which for work is called the joule). Are torque and work actually the same physical quantity?", choices: ["Yes, they are identical quantities that just have different names.", "No — torque and work are fundamentally different physical quantities that happen to share dimensional units.", "Yes, but only in rotational systems.", "No, they have completely different units."], correct: 1, explanation: "Despite sharing the same dimensional units (force × distance), torque and work are conceptually distinct: work is a scalar describing energy transfer, while torque is more like a rotational force with a direction (CCW/CW). The shared units are a dimensional coincidence, not a sign that the two quantities are interchangeable." },
    { id: "5-22", topic: "5.3 Moment of Inertia", stem: "Which of the following best describes the moment of inertia, I?", choices: ["A measure of an object's total mass, unrelated to rotation.", "A measure of how an object's mass is distributed relative to an axis, describing resistance to angular acceleration.", "A measure of an object's angular velocity.", "A measure of the torque an object can produce."], correct: 1, explanation: "Moment of inertia is the rotational analog of mass — it captures not just how much mass an object has, but specifically how that mass is distributed relative to the rotation axis, which directly determines how much the object resists changes to its angular motion." },
    { id: "5-23", topic: "5.3 Moment of Inertia", stem: "A 2.0 kg point mass sits 0.50 m from an axis, and a 3.0 kg point mass sits 1.0 m from the same axis, on a light rod. Find the total moment of inertia.", choices: ["1.75 kg·m²", "3.5 kg·m²", "5.0 kg·m²", "8.0 kg·m²"], correct: 1, explanation: "I = Σmr² = (2.0)(0.50)² + (3.0)(1.0)² = (2.0)(0.25) + (3.0)(1.0) = 0.50 + 3.0 = 3.5 kg·m²." },
    { id: "5-24", topic: "5.3 Moment of Inertia", stem: "Two equal point masses sit at different distances from an axis: Mass A at 1.0 m, Mass B at 2.0 m. Compare their individual contributions to the system's moment of inertia.", choices: ["Mass A contributes twice as much as Mass B.", "Mass B contributes twice as much as Mass A.", "Mass B contributes four times as much as Mass A.", "Both contribute equally, since their masses are equal."], correct: 2, explanation: "Since each mass's contribution to I is mr², and r² depends on the SQUARE of distance, Mass B (at twice the distance) contributes (2)²=4 times as much to the total moment of inertia as Mass A, despite having equal mass." },
    { id: "5-25", topic: "5.3 Moment of Inertia", stem: "Find the moment of inertia of a solid disk with mass 4.0 kg and radius 0.30 m.", choices: ["0.12 kg·m²", "0.18 kg·m²", "0.36 kg·m²", "0.72 kg·m²"], correct: 1, explanation: "I = ½MR² = ½(4.0)(0.30)² = ½(4.0)(0.09) = 0.18 kg·m²." },
    { id: "5-26", topic: "5.3 Moment of Inertia", stem: "Find the moment of inertia of a thin hoop with mass 2.0 kg and radius 0.50 m.", choices: ["0.25 kg·m²", "0.5 kg·m²", "1.0 kg·m²", "2.0 kg·m²"], correct: 1, explanation: "I = MR² = (2.0)(0.50)² = (2.0)(0.25) = 0.5 kg·m²." },
    { id: "5-27", topic: "5.3 Moment of Inertia", stem: "A hoop and a solid disk have identical mass and identical radius. Which one has the greater moment of inertia?", choices: ["The hoop, since all its mass sits at the maximum radius.", "The disk, since its mass is more spread out.", "They have equal moment of inertia, since mass and radius are equal.", "Cannot be determined without more information."], correct: 0, explanation: "The hoop (I=MR²) has all of its mass concentrated at the outer radius R, while the disk (I=½MR²) has its mass distributed from the center all the way out to R — since I depends on r², the hoop's mass, being uniformly at the maximum distance, produces double the moment of inertia of the disk." },
    { id: "5-28", topic: "5.3 Moment of Inertia", stem: "Find the moment of inertia of a solid sphere with mass 5.0 kg and radius 0.20 m.", choices: ["0.04 kg·m²", "0.08 kg·m²", "0.10 kg·m²", "0.20 kg·m²"], correct: 1, explanation: "I = (2/5)MR² = (2/5)(5.0)(0.20)² = (2/5)(5.0)(0.04) = 0.08 kg·m²." },
    { id: "5-29", topic: "5.3 Moment of Inertia", stem: "A disk's radius is doubled while its mass stays the same. How does its moment of inertia change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 1, explanation: "Since I=½MR² depends on R², doubling the radius (with mass fixed) increases the moment of inertia by a factor of 2²=4." },
    { id: "5-30", topic: "5.3 Moment of Inertia", stem: "Find the moment of inertia of a thin rod (mass 3.0 kg, length 2.0 m) rotating about its center.", choices: ["0.5 kg·m²", "1.0 kg·m²", "2.0 kg·m²", "4.0 kg·m²"], correct: 1, explanation: "I = (1/12)ML² = (1/12)(3.0)(2.0)² = (1/12)(3.0)(4.0) = 1.0 kg·m²." },
    { id: "5-31", topic: "5.3 Moment of Inertia", stem: "The same rod (I=(1/12)ML² about its center) is instead rotated about one of its ends (I=(1/3)ML²). Compare the two moments of inertia.", choices: ["Rotating about the end gives a SMALLER moment of inertia.", "Rotating about the end gives a LARGER moment of inertia, since more of the rod's mass sits farther from that axis.", "The moment of inertia is the same regardless of which point the rod rotates about.", "Cannot be compared without specific numbers."], correct: 1, explanation: "Rotating about one end places the entire rod's length between the axis and the far end, meaning much more of the mass sits farther from the axis compared to rotating about the center (where mass is distributed symmetrically, close on both sides) — this is exactly why the end-axis formula, (1/3)ML², is larger than the center-axis formula, (1/12)ML²." },
    { id: "5-32", topic: "5.3 Moment of Inertia", stem: "For the same rod, find the ratio of its moment of inertia about one end to its moment of inertia about its center.", choices: ["2", "3", "4", "6"], correct: 2, explanation: "Ratio = [(1/3)ML²]/[(1/12)ML²] = (1/3)/(1/12) = 12/3 = 4 — rotating a rod about its end gives exactly four times the moment of inertia as rotating it about its center, for the identical rod." },
    { id: "5-33", topic: "5.4 Newton's Second Law for Rotation", stem: "A net torque of 12 N·m acts on an object with moment of inertia 3.0 kg·m². Find its angular acceleration.", choices: ["0.25 rad/s²", "4.0 rad/s²", "9.0 rad/s²", "36 rad/s²"], correct: 1, explanation: "α = τ/I = 12/3.0 = 4.0 rad/s²." },
    { id: "5-34", topic: "5.4 Newton's Second Law for Rotation", stem: "An object with moment of inertia 0.50 kg·m² undergoes an angular acceleration of 6.0 rad/s². Find the net torque acting on it.", choices: ["0.083 N·m", "3.0 N·m", "6.5 N·m", "12 N·m"], correct: 1, explanation: "τ = Iα = (0.50)(6.0) = 3.0 N·m." },
    { id: "5-35", topic: "5.4 Newton's Second Law for Rotation", stem: "In the rotational version of Newton's Second Law, τ=Iα, what role does moment of inertia play, analogous to Unit 2's F=ma?", choices: ["The role of force.", "The role of acceleration.", "The role of mass — the property that resists a change in motion.", "Moment of inertia has no analog in F=ma."], correct: 2, explanation: "Moment of inertia I plays the exact same structural role that mass m plays in F=ma: it's the property of the object that determines how much a given 'push' (torque, or force) actually changes its motion (angular acceleration, or acceleration)." },
    { id: "5-36", topic: "5.4 Newton's Second Law for Rotation", stem: "A solid disk (mass 2.0 kg, radius 0.40 m) has a torque of 4.0 N·m applied to it. Find its angular acceleration.", choices: ["6.25 rad/s²", "12.5 rad/s²", "25 rad/s²", "50 rad/s²"], correct: 2, explanation: "First find I: I=½MR²=½(2.0)(0.40)²=½(2.0)(0.16)=0.16 kg·m². Then α = τ/I = 4.0/0.16 = 25 rad/s²." },
    { id: "5-37", topic: "5.4 Newton's Second Law for Rotation", stem: "Object A has twice the moment of inertia of Object B. The exact same torque is applied to each. Compare their angular accelerations.", choices: ["A has twice the angular acceleration of B.", "B has twice the angular acceleration of A.", "Both have equal angular acceleration.", "Cannot be determined without more information."], correct: 1, explanation: "Since α=τ/I, with the same torque applied to both, the object with the SMALLER moment of inertia (B) experiences the LARGER angular acceleration — a larger I means more resistance to angular acceleration, exactly like a larger mass resists linear acceleration." },
    { id: "5-38", topic: "5.4 Newton's Second Law for Rotation", stem: "An object with I=4.0 kg·m² experiences two torques: 20 N·m counterclockwise and 8.0 N·m clockwise. Find its angular acceleration.", choices: ["2.0 rad/s²", "3.0 rad/s²", "5.0 rad/s²", "7.0 rad/s²"], correct: 1, explanation: "Net torque = 20 − 8.0 = 12 N·m (CCW). α = τ_net/I = 12/4.0 = 3.0 rad/s²." },
    { id: "5-39", topic: "5.4 Newton's Second Law for Rotation", stem: "An object rotates at a constant, unchanging angular velocity. What must be true about the net torque acting on it?", choices: ["It must be at its maximum possible value.", "It must be exactly zero.", "It must be constant but nonzero.", "It cannot be determined without knowing the object's moment of inertia."], correct: 1, explanation: "Constant angular velocity means zero angular acceleration, and since τ_net=Iα, zero angular acceleration means zero net torque — the rotational equivalent of Newton's First Law (an object in rotational equilibrium)." },
    { id: "5-40", topic: "5.4 Newton's Second Law for Rotation", stem: "A rod (mass 4.0 kg, length 1.5 m) pivots about one end, with I=(1/3)ML². A torque of 9.0 N·m is applied. Find its angular acceleration.", choices: ["1.0 rad/s²", "2.0 rad/s²", "3.0 rad/s²", "4.5 rad/s²"], correct: 2, explanation: "I = (1/3)(4.0)(1.5)² = (1/3)(4.0)(2.25) = 3.0 kg·m². α = τ/I = 9.0/3.0 = 3.0 rad/s²." },
    { id: "5-41", topic: "5.4 Newton's Second Law for Rotation", stem: "An object's moment of inertia is doubled (its mass redistributed farther from the axis, total mass unchanged) while the applied torque stays the same. How does its angular acceleration change?", choices: ["It doubles.", "It is cut in half.", "It stays the same.", "It quadruples."], correct: 1, explanation: "Since α = τ/I, with torque fixed, doubling the moment of inertia directly halves the resulting angular acceleration." },
    { id: "5-42", topic: "5.4 Newton's Second Law for Rotation", stem: "An object with I=2.0 kg·m² starts at rest. A constant torque of 6.0 N·m is applied for 5.0 s. Find the object's final angular velocity.", choices: ["3.0 rad/s", "10 rad/s", "15 rad/s", "30 rad/s"], correct: 2, explanation: "α = τ/I = 6.0/2.0 = 3.0 rad/s². Using ω = ω0+αt: ω = 0+(3.0)(5.0) = 15 rad/s." },
    { id: "5-43", topic: "5.4 Newton's Second Law for Rotation", stem: "Two different objects are to be given the exact same angular acceleration. Object A has a larger moment of inertia than Object B. Compare the torque required for each.", choices: ["Object A requires more torque, since τ=Iα and I is larger.", "Object B requires more torque.", "Both require exactly the same torque.", "Cannot be determined without more information."], correct: 0, explanation: "Since τ=Iα, and both objects need the same α, the object with the larger moment of inertia (A) requires proportionally more torque to achieve that same angular acceleration — directly analogous to a more massive object needing more force for the same linear acceleration." },
    { id: "5-44", topic: "5.5 Static Equilibrium", stem: "What two conditions must both be satisfied for an object to be in complete static equilibrium?", choices: ["Zero velocity and zero angular velocity.", "Zero net force and zero net torque.", "Zero mass and zero moment of inertia.", "Zero kinetic energy and zero potential energy."], correct: 1, explanation: "Complete static equilibrium requires BOTH conditions simultaneously: ΣF=0 (no linear acceleration) and Στ=0 (no angular acceleration) — satisfying only one of the two is not sufficient." },
    { id: "5-45", topic: "5.5 Static Equilibrium", stem: "A 40 kg child sits 2.0 m from the center of a seesaw. Find where a 50 kg adult must sit on the other side to balance it.", choices: ["1.0 m", "1.25 m", "1.6 m", "2.5 m"], correct: 2, explanation: "Balancing torques (mass and g cancel from both sides since it's the same g and torque balance uses weight): (40)(2.0) = (50)(d), so d = 80/50 = 1.6 m." },
    { id: "5-46", topic: "5.5 Static Equilibrium", stem: "For an object in true static equilibrium, does the choice of pivot point used to calculate torques affect whether Στ=0 holds?", choices: ["Yes, torques only balance about the object's true physical axis.", "No — if an object is truly in equilibrium, the torques balance about ANY chosen pivot point.", "Yes, but only for symmetric objects.", "No, but only if the object has zero mass."], correct: 1, explanation: "For an object genuinely in equilibrium (both ΣF=0 and Στ=0 about at least one point), the torques will balance about any other point you might choose as a pivot as well — this mathematical fact is exactly what makes it strategically useful to choose a convenient pivot point." },
    { id: "5-47", topic: "5.5 Static Equilibrium", stem: "A uniform beam, weight 200 N, is supported at both ends, with its center of gravity at the midpoint. Find the force each support exerts.", choices: ["50 N each", "100 N each", "150 N each", "200 N each"], correct: 1, explanation: "By symmetry, since the weight acts exactly at the midpoint between two supports, each support carries exactly half the total weight: 200/2 = 100 N each." },
    { id: "5-48", topic: "5.5 Static Equilibrium", stem: "A lightweight beam 6.0 m long is supported at both ends. A 300 N weight is placed 2.0 m from the left support. Find the force exerted by the right support.", choices: ["50 N", "100 N", "150 N", "200 N"], correct: 1, explanation: "Taking torques about the left support: F_right(6.0) = (300)(2.0) = 600, so F_right = 600/6.0 = 100 N." },
    { id: "5-49", topic: "5.5 Static Equilibrium", stem: "Why is it often strategically useful to choose the pivot point at the location of an unknown force when solving a torque equilibrium problem?", choices: ["It makes the unknown force's own torque automatically zero, since its lever arm about that point is zero, removing it from the torque equation.", "It makes all forces in the problem automatically balanced.", "It changes the physical location of the unknown force.", "There is no strategic advantage to this choice."], correct: 0, explanation: "Any force applied exactly at the chosen pivot point has a lever arm of zero about that point, so its torque contribution is automatically zero — this conveniently removes that unknown force entirely from the torque equation, often leaving just one remaining unknown to solve for directly." },
    { id: "5-50", topic: "5.5 Static Equilibrium", stem: "A 2.0 m horizontal bar is attached to a wall by a hinge and supported by a cable attached at the far end, angled 40° above horizontal, holding a 150 N weight at the far end. Using torques about the hinge, find the cable's tension. (sin40°≈0.64)", choices: ["96 N", "150 N", "234 N", "300 N"], correct: 2, explanation: "Taking torques about the hinge: the weight's torque is (150)(2.0)=300 N·m (full lever arm, since weight acts perpendicular to the horizontal bar). The cable's restoring torque uses only its vertical component: T·sin40°·(2.0) = 300, so T = 300/(2.0×0.64) = 300/1.28 ≈ 234 N." },
    { id: "5-51", topic: "5.5 Static Equilibrium", stem: "A picture frame hangs at rest, perfectly still, from two wires. Is it accurate to say 'no forces are acting significantly on the frame,' given that it's in equilibrium?", choices: ["Yes, equilibrium means no significant forces are present.", "No — equilibrium means the forces (and torques) SUM to zero; the individual forces themselves, like gravity and the wire tensions, are still very much present and nonzero.", "Yes, but only if the frame is symmetric.", "No, equilibrium is impossible if any forces are present."], correct: 1, explanation: "This is the same distinction drawn back in Unit 2: equilibrium describes a net condition (forces and torques summing to zero), not an absence of individual forces. Gravity and the wire tensions are all real, nonzero forces that happen to balance out." },
    { id: "5-52", topic: "5.5 Static Equilibrium", stem: "A lever balances a 20 N force at 0.50 m from the pivot against an unknown force at 0.20 m from the pivot on the other side. Find the unknown force.", choices: ["8.0 N", "40 N", "50 N", "100 N"], correct: 2, explanation: "Balancing torques: (20)(0.50) = F(0.20), so F = 10/0.20 = 50 N." },
    { id: "5-53", topic: "5.5 Static Equilibrium", stem: "In a torque equilibrium problem with an unknown force acting at some location, why might choosing the pivot AT that exact location be a better strategy than choosing an arbitrary pivot elsewhere?", choices: ["It has no strategic benefit over any other pivot choice.", "It eliminates that unknown force from the torque equation, since its lever arm becomes zero, simplifying the algebra needed to solve for other unknowns.", "It makes the unknown force larger.", "It changes the physics of the problem."], correct: 1, explanation: "Since the torque contributed by a force depends on its lever arm distance from the pivot, placing the pivot exactly where that unknown force acts makes its lever arm (and therefore its torque contribution) zero — removing an unknown from the equation and often making the remaining algebra dramatically simpler." },
    { id: "5-54", topic: "5.5 Static Equilibrium", stem: "A 5.0 m beam has negligible weight of its own, plus a 100 N weight at its center (2.5 m from either end) and a 50 N weight 1.0 m from the left end. It's supported at both ends. Find the force exerted by the right support.", choices: ["40 N", "60 N", "90 N", "150 N"], correct: 1, explanation: "Taking torques about the left support: F_right(5.0) = (100)(2.5)+(50)(1.0) = 250+50 = 300, so F_right = 300/5.0 = 60 N." },
    { id: "5-55", topic: "5.6 Rolling Motion", stem: "What defines 'rolling without slipping'?", choices: ["The object's angular velocity is exactly zero.", "The object's translational and rotational motion are linked by v_cm=rω, with no relative sliding at the contact point.", "The object experiences no friction of any kind.", "The object's linear velocity is exactly zero."], correct: 1, explanation: "Rolling without slipping is defined by the relationship v_cm=rω holding true, which physically means the contact point between the object and the ground has zero relative velocity — no sliding occurs there." },
    { id: "5-56", topic: "5.6 Rolling Motion", stem: "A wheel of radius 0.30 m rolls without slipping with its center moving at 6.0 m/s. Find its angular velocity.", choices: ["1.8 rad/s", "6.3 rad/s", "20 rad/s", "180 rad/s"], correct: 2, explanation: "ω = v_cm/r = 6.0/0.30 = 20 rad/s." },
    { id: "5-57", topic: "5.6 Rolling Motion", stem: "A wheel spins at 15 rad/s with a radius of 0.25 m, rolling without slipping. Find the speed of its center.", choices: ["3.75 m/s", "15.25 m/s", "37.5 m/s", "60 m/s"], correct: 0, explanation: "v_cm = rω = (0.25)(15) = 3.75 m/s." },
    { id: "5-58", topic: "5.6 Rolling Motion", stem: "For an object rolling without slipping, what is the instantaneous velocity of the single point currently in contact with the ground?", choices: ["Equal to v_cm.", "Equal to 2×v_cm.", "Zero.", "Equal to rω, in the opposite direction of v_cm."], correct: 2, explanation: "The defining feature of rolling without slipping is that the contact point has zero instantaneous velocity relative to the ground — it's neither sliding forward nor backward at that exact moment, even though the object as a whole is moving." },
    { id: "5-59", topic: "5.6 Rolling Motion", stem: "What type of friction acts at the contact point of an object rolling without slipping?", choices: ["Kinetic friction, since the object is moving.", "Static friction, since there's no relative sliding at the contact point.", "No friction acts at all during rolling without slipping.", "Both static and kinetic friction act simultaneously."], correct: 1, explanation: "Since the contact point has zero relative velocity (no sliding) during rolling without slipping, the relevant friction there is STATIC friction — kinetic friction only applies where genuine relative sliding is occurring between two surfaces." },
    { id: "5-60", topic: "5.6 Rolling Motion", stem: "A wheel of radius 0.20 m rolls without slipping with angular acceleration 10 rad/s². Find the linear (center-of-mass) acceleration.", choices: ["0.5 m/s²", "2.0 m/s²", "5.0 m/s²", "50 m/s²"], correct: 1, explanation: "a_cm = rα = (0.20)(10) = 2.0 m/s²." },
    { id: "5-61", topic: "5.6 Rolling Motion", stem: "If a wheel is spinning while also sliding across a surface (not rolling without slipping), does v_cm=rω still hold?", choices: ["Yes, this relationship always holds for any rotating object.", "No — v_cm=rω is specific to rolling WITHOUT slipping; a sliding, spinning object does not generally satisfy this relationship.", "Yes, but only if the object is a perfect circle.", "No, this relationship never holds under any circumstances."], correct: 1, explanation: "The relationship v_cm=rω is a special consequence of the no-slipping condition specifically. An object that's sliding while spinning (like a screeching tire) has its own independent linear and angular velocities that aren't linked by this simple formula." },
    { id: "5-62", topic: "5.6 Rolling Motion", stem: "A ball of radius 0.15 m accelerates at 3.0 m/s² while rolling without slipping. Find its angular acceleration.", choices: ["0.45 rad/s²", "2.85 rad/s²", "3.15 rad/s²", "20 rad/s²"], correct: 3, explanation: "α = a_cm/r = 3.0/0.15 = 20 rad/s²." },
    { id: "5-63", topic: "5.6 Rolling Motion", stem: "Explain the key physical distinction between an object 'rolling without slipping' and an object that is purely 'sliding' across a surface.", choices: ["Rolling objects experience no friction; sliding objects always experience kinetic friction.", "Rolling without slipping has zero relative velocity at the contact point (static friction); sliding involves relative motion at the contact point (kinetic friction).", "There is no meaningful physical distinction between the two.", "Rolling objects have zero angular velocity; sliding objects have nonzero angular velocity."], correct: 1, explanation: "The defining physical distinction is whether there's relative sliding motion at the contact point. Rolling without slipping has zero relative velocity there (governed by static friction, up to its maximum); genuine sliding involves ongoing relative motion at the contact surface (governed by kinetic friction)." },
    { id: "5-64", topic: "5.6 Rolling Motion", stem: "A wheel's angular velocity increases linearly with time as it rolls without slipping. At t=2.0 s, ω=8.0 rad/s, and the wheel's radius is 0.25 m. Find v_cm at that instant.", choices: ["0.5 m/s", "2.0 m/s", "4.0 m/s", "32 m/s"], correct: 1, explanation: "v_cm = rω = (0.25)(8.0) = 2.0 m/s, using the given angular velocity at that specific instant." },
    { id: "5-65", topic: "5.6 Rolling Motion", stretch: true, stem: "Stretch — beyond typical AP difficulty: A solid sphere and a hoop, both of the same mass and radius, are released from rest at the top of the same incline and roll without slipping. Which one reaches the bottom with a greater linear (center-of-mass) acceleration, and conceptually why?", choices: ["The hoop, since it has a larger moment of inertia.", "The solid sphere, since its smaller moment of inertia means less of the driving torque's effect goes into 'spinning up' the object, leaving more available to accelerate its center of mass.", "Both have identical accelerations, since they have the same mass and radius.", "The comparison depends entirely on the incline's angle."], correct: 1, explanation: "For a rolling object, gravity's torque about the contact point has to produce BOTH linear acceleration of the center of mass AND angular acceleration of the spin — and objects with a larger moment of inertia (like the hoop, I=MR², versus the sphere's I=(2/5)MR²) require more of that available 'torque budget' just to spin up, leaving less left over to accelerate the center of mass forward. This is exactly why, in a race down a ramp, a solid sphere reliably beats a hoop of the same mass and radius — a relationship this unit sets up conceptually, and which Unit 6 makes fully quantitative using rotational kinetic energy." },
  ],
  6: [
    { id: "6-1", topic: "6.1 Rotational Kinetic Energy", stem: "Find the rotational kinetic energy of an object with moment of inertia 4.0 kg·m² spinning at 5.0 rad/s.", choices: ["10 J", "20 J", "50 J", "100 J"], correct: 2, explanation: "KE_rot = ½Iω² = ½(4.0)(5.0)² = ½(4.0)(25) = 50 J." },
    { id: "6-2", topic: "6.1 Rotational Kinetic Energy", stem: "An object's angular velocity is doubled while its moment of inertia stays the same. How does its rotational kinetic energy change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 1, explanation: "Since KE_rot=½Iω² depends on ω², doubling angular velocity quadruples rotational kinetic energy (2²=4) — the same squared relationship as translational KE and speed." },
    { id: "6-3", topic: "6.1 Rotational Kinetic Energy", stem: "An object has rotational kinetic energy 72 J and moment of inertia 4.0 kg·m². Find its angular velocity.", choices: ["3.0 rad/s", "6.0 rad/s", "9.0 rad/s", "18 rad/s"], correct: 1, explanation: "72 = ½(4.0)ω², so ω² = 144/4.0 = 36, giving ω = 6.0 rad/s." },
    { id: "6-4", topic: "6.1 Rotational Kinetic Energy", stem: "An object's moment of inertia is doubled while its angular velocity stays the same. How does its rotational kinetic energy change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since KE_rot=½Iω² is directly proportional to I (with ω fixed), doubling the moment of inertia directly doubles the rotational kinetic energy — a linear relationship, unlike ω's squared dependence." },
    { id: "6-5", topic: "6.1 Rotational Kinetic Energy", stem: "Find the rotational kinetic energy of a solid disk (mass 3.0 kg, radius 0.40 m) spinning at 10 rad/s.", choices: ["6.0 J", "12 J", "24 J", "48 J"], correct: 2, explanation: "I = ½MR² = ½(3.0)(0.40)² = 0.24 kg·m². KE_rot = ½(0.24)(10)² = ½(0.24)(100) = 24 J." },
    { id: "6-6", topic: "6.1 Rotational Kinetic Energy", stem: "In the formula KE_rot=½Iω², what role does moment of inertia I play, by direct analogy with translational kinetic energy KE=½mv²?", choices: ["The role of velocity.", "The role of mass.", "The role of force.", "I has no analog in the translational formula."], correct: 1, explanation: "Moment of inertia I plays the same structural role in the rotational KE formula that mass m plays in the translational KE formula — both represent the object's 'inertia' being multiplied by the square of its speed (angular or linear)." },
    { id: "6-7", topic: "6.1 Rotational Kinetic Energy", stem: "A hoop and a solid disk have equal mass, radius, and angular velocity. Compare their rotational kinetic energies.", choices: ["The hoop has greater rotational KE, since it has the greater moment of inertia.", "The disk has greater rotational KE.", "They have equal rotational KE, since KE only depends on ω.", "Cannot be compared without more information."], correct: 0, explanation: "Since KE_rot=½Iω² and both objects share the same ω, the object with the larger moment of inertia has the greater rotational KE. The hoop (I=MR²) has twice the moment of inertia of the disk (I=½MR²) for equal mass and radius, so it has twice the rotational KE as well." },
    { id: "6-8", topic: "6.1 Rotational Kinetic Energy", stem: "Find the rotational kinetic energy of a hoop (mass 2.0 kg, radius 0.50 m) spinning at 6.0 rad/s.", choices: ["4.5 J", "9.0 J", "18 J", "36 J"], correct: 1, explanation: "I = MR² = (2.0)(0.50)² = 0.5 kg·m². KE_rot = ½Iω² = ½(0.5)(6.0)² = ½(0.5)(36) = 9.0 J." },
    { id: "6-9", topic: "6.1 Rotational Kinetic Energy", stem: "An object with I=1.5 kg·m² has rotational kinetic energy 27 J. Find its angular velocity.", choices: ["3.0 rad/s", "4.0 rad/s", "6.0 rad/s", "9.0 rad/s"], correct: 2, explanation: "27 = ½(1.5)ω², so ω² = 54/1.5 = 36, giving ω = 6.0 rad/s." },
    { id: "6-10", topic: "6.1 Rotational Kinetic Energy", stem: "What is the correct SI unit for rotational kinetic energy?", choices: ["kg·m²/s", "kg·m/s", "N·m (as torque)", "Joules (J)"], correct: 3, explanation: "Rotational kinetic energy, like all forms of energy, is measured in joules. It's still just energy — a scalar quantity — regardless of whether it arises from linear or rotational motion." },
    { id: "6-11", topic: "6.1 Rotational Kinetic Energy", stem: "An object has rotational kinetic energy 40 J while spinning at 4.0 rad/s. Find its moment of inertia.", choices: ["2.5 kg·m²", "5.0 kg·m²", "10 kg·m²", "20 kg·m²"], correct: 1, explanation: "40 = ½I(4.0)², so 40 = 8.0I, giving I = 5.0 kg·m²." },
    { id: "6-12", topic: "6.1 Rotational Kinetic Energy", stem: "A top spins in place on a table, with zero translational velocity of its center of mass. Does it have any kinetic energy?", choices: ["No, since it isn't translating anywhere.", "Yes — it has purely rotational kinetic energy, ½Iω², even with zero translational speed.", "No, kinetic energy requires translational motion.", "Only if it's also losing height."], correct: 1, explanation: "Kinetic energy isn't limited to translational motion — a spinning object has rotational kinetic energy (½Iω²) entirely independent of whether its center of mass is moving at all. A top spinning in place is a clean example of purely rotational KE." },
    { id: "6-13", topic: "6.1 Rotational Kinetic Energy", stem: "Find the rotational kinetic energy of a rod (mass 2.0 kg, length 3.0 m) rotating about its center at 4.0 rad/s.", choices: ["6.0 J", "12 J", "18 J", "24 J"], correct: 1, explanation: "I = (1/12)ML² = (1/12)(2.0)(3.0)² = (1/12)(2.0)(9.0) = 1.5 kg·m². KE_rot = ½(1.5)(4.0)² = ½(1.5)(16) = 12 J." },
    { id: "6-14", topic: "6.1 Rotational Kinetic Energy", stem: "An object's angular velocity triples while its moment of inertia stays the same. How does its rotational kinetic energy change?", choices: ["It triples.", "It increases sixfold.", "It increases ninefold.", "It stays the same."], correct: 2, explanation: "Since KE_rot ∝ ω², tripling ω increases rotational KE by a factor of 3²=9." },
    { id: "6-15", topic: "6.1 Rotational Kinetic Energy", stem: "An object's moment of inertia is doubled while its angular velocity is simultaneously halved. Compare its new rotational kinetic energy to its original value.", choices: ["The new KE is equal to the original KE.", "The new KE is half the original KE.", "The new KE is twice the original KE.", "The new KE is one-fourth the original KE."], correct: 1, explanation: "KE_new = ½(2I)(ω/2)² = ½(2I)(ω²/4) = (2/4)(½Iω²) = ½(½Iω²) = half the original KE — the doubling of I only partially compensates for the squared effect of halving ω." },
    { id: "6-16", topic: "6.1 Rotational Kinetic Energy", stem: "Find the rotational kinetic energy of a spinning wheel with I=0.80 kg·m² at ω=12 rad/s.", choices: ["9.6 J", "38.4 J", "57.6 J", "115.2 J"], correct: 2, explanation: "KE_rot = ½(0.80)(12)² = ½(0.80)(144) = 57.6 J." },
    { id: "6-17", topic: "6.2 Angular Momentum", stem: "Which formula correctly gives angular momentum for a rotating rigid object?", choices: ["L = ½Iω²", "L = Iω", "L = Iα", "L = ½mv²"], correct: 1, explanation: "Angular momentum is L = Iω, the direct rotational analog of linear momentum p=mv, with I replacing m and ω replacing v." },
    { id: "6-18", topic: "6.2 Angular Momentum", stem: "Find the angular momentum of an object with I=5.0 kg·m² spinning at 8.0 rad/s.", choices: ["3.0 kg·m²/s", "13 kg·m²/s", "40 kg·m²/s", "160 kg·m²/s"], correct: 2, explanation: "L = Iω = (5.0)(8.0) = 40 kg·m²/s." },
    { id: "6-19", topic: "6.2 Angular Momentum", stem: "Like linear momentum, angular momentum has a directional quality. How is this direction typically described for rotation in a single plane?", choices: ["North, south, east, or west.", "Counterclockwise or clockwise (positive or negative, by convention).", "Up or down only.", "Angular momentum has no directional quality at all."], correct: 1, explanation: "For rotation confined to a single plane, angular momentum's 'direction' is captured by whether the rotation is counterclockwise (conventionally positive) or clockwise (conventionally negative) — mirroring how torque's direction is described." },
    { id: "6-20", topic: "6.2 Angular Momentum", stem: "An object has angular momentum 60 kg·m²/s and moment of inertia 10 kg·m². Find its angular velocity.", choices: ["0.17 rad/s", "6.0 rad/s", "50 rad/s", "600 rad/s"], correct: 1, explanation: "ω = L/I = 60/10 = 6.0 rad/s." },
    { id: "6-21", topic: "6.2 Angular Momentum", stem: "An object has angular momentum 45 kg·m²/s while spinning at 9.0 rad/s. Find its moment of inertia.", choices: ["0.2 kg·m²", "5.0 kg·m²", "36 kg·m²", "405 kg·m²"], correct: 1, explanation: "I = L/ω = 45/9.0 = 5.0 kg·m²." },
    { id: "6-22", topic: "6.2 Angular Momentum", stem: "A particle moves in a straight line, never actually orbiting anything. Can it still have nonzero angular momentum about some chosen point not on its path?", choices: ["No, angular momentum requires actual circular motion.", "Yes — angular momentum about a point depends on the particle's momentum and its perpendicular distance from that point, regardless of the shape of its path.", "No, only rigid rotating objects have angular momentum.", "Yes, but only if the particle is accelerating."], correct: 1, explanation: "Angular momentum of a point particle, L=mvr(sinθ), depends on momentum and the perpendicular distance to the chosen reference point — a particle moving in a perfectly straight line can absolutely have nonzero angular momentum about any point that isn't exactly on that line." },
    { id: "6-23", topic: "6.2 Angular Momentum", stem: "A 2.0 kg particle moves at 5.0 m/s, with its path passing 3.0 m (perpendicular distance) from a reference point. Find its angular momentum about that point.", choices: ["10 kg·m²/s", "15 kg·m²/s", "30 kg·m²/s", "45 kg·m²/s"], correct: 2, explanation: "L = mvr = (2.0)(5.0)(3.0) = 30 kg·m²/s, using the perpendicular distance directly since the velocity is already given as perpendicular to that distance." },
    { id: "6-24", topic: "6.2 Angular Momentum", stem: "An object's angular velocity is doubled while its moment of inertia stays the same. How does its angular momentum change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since L=Iω is directly (linearly) proportional to ω, doubling angular velocity simply doubles angular momentum — unlike rotational kinetic energy, which would quadruple under the same change." },
    { id: "6-25", topic: "6.2 Angular Momentum", stem: "A torque of 8.0 N·m is applied to an object for 3.0 s. Find the resulting change in angular momentum.", choices: ["2.7 kg·m²/s", "8.0 kg·m²/s", "11 kg·m²/s", "24 kg·m²/s"], correct: 3, explanation: "ΔL = τΔt = (8.0)(3.0) = 24 kg·m²/s." },
    { id: "6-26", topic: "6.2 Angular Momentum", stem: "An object's angular momentum changes by 50 kg·m²/s over 5.0 s. Find the average torque that caused this change.", choices: ["0.1 N·m", "10 N·m", "45 N·m", "250 N·m"], correct: 1, explanation: "τ = ΔL/Δt = 50/5.0 = 10 N·m." },
    { id: "6-27", topic: "6.2 Angular Momentum", stem: "How does the relationship τ_net=ΔL/Δt relate to Unit 4's impulse-momentum theorem, F=Δp/Δt?", choices: ["They are unrelated formulas from different areas of physics.", "They are directly analogous: torque plays the role of force, and angular momentum plays the role of linear momentum.", "τ_net=ΔL/Δt is a special case of F=Δp/Δt, only true for circular paths.", "The two formulas contradict each other."], correct: 1, explanation: "These are directly parallel relationships — τ_net=ΔL/Δt is the rotational version of the impulse-momentum theorem, with torque taking the role of force and angular momentum taking the role of linear momentum, exactly following the translation pattern established across this and the previous unit." },
    { id: "6-28", topic: "6.2 Angular Momentum", stem: "An object with I=3.0 kg·m² starts at rest. A constant torque of 6.0 N·m acts on it for 4.0 s. Find its final angular velocity.", choices: ["2.0 rad/s", "4.0 rad/s", "8.0 rad/s", "24 rad/s"], correct: 2, explanation: "ΔL = τΔt = (6.0)(4.0) = 24 kg·m²/s. Since it started at rest, L_final = 24 kg·m²/s. ω = L/I = 24/3.0 = 8.0 rad/s." },
    { id: "6-29", topic: "6.2 Angular Momentum", stem: "Under what condition does an object's angular momentum remain unchanged over time?", choices: ["Whenever its angular velocity is constant.", "Whenever the net torque acting on it is zero.", "Whenever its moment of inertia is constant.", "Angular momentum always changes over time."], correct: 1, explanation: "Since τ_net=ΔL/Δt, a zero net torque means zero change in angular momentum — this is the condition for angular momentum to stay exactly constant, setting up the conservation law explored fully in the next section." },
    { id: "6-30", topic: "6.2 Angular Momentum", stem: "A figure skater has moment of inertia 4.0 kg·m² while spinning at 2.0 rad/s. Find her angular momentum.", choices: ["2.0 kg·m²/s", "6.0 kg·m²/s", "8.0 kg·m²/s", "16 kg·m²/s"], correct: 2, explanation: "L = Iω = (4.0)(2.0) = 8.0 kg·m²/s." },
    { id: "6-31", topic: "6.2 Angular Momentum", stem: "Are the units of angular momentum (kg·m²/s) directly comparable or convertible to the units of linear momentum (kg·m/s)?", choices: ["Yes, they are the exact same physical quantity, just measured differently.", "No — the two have different dimensional units and represent fundamentally different physical quantities.", "Yes, but only for objects moving in a perfect circle.", "No, angular momentum has no defined units at all."], correct: 1, explanation: "Angular momentum (kg·m²/s) and linear momentum (kg·m/s) have genuinely different dimensions — they are not interchangeable or directly convertible, reflecting that they describe fundamentally different aspects of an object's motion (rotational vs. translational)." },
    { id: "6-32", topic: "6.2 Angular Momentum", stem: "Two objects have the same angular momentum, 20 kg·m²/s. Object 1 has I=2.0 kg·m²; Object 2 has I=5.0 kg·m². Compare their angular velocities.", choices: ["Object 1 spins faster, at 10 rad/s vs. Object 2's 4.0 rad/s.", "Object 2 spins faster.", "Both spin at the same angular velocity.", "Cannot be determined without more information."], correct: 0, explanation: "ω1 = L/I1 = 20/2.0 = 10 rad/s. ω2 = L/I2 = 20/5.0 = 4.0 rad/s. Object 1, with the smaller moment of inertia, spins faster for the same angular momentum — matching the same L=Iω logic used throughout this section." },
    { id: "6-33", topic: "6.3 Conservation of Angular Momentum", stem: "Under what condition is a system's total angular momentum conserved?", choices: ["Whenever the system's moment of inertia is constant.", "Whenever there is no net external torque acting on the system.", "Whenever kinetic energy is also conserved.", "Angular momentum is never actually conserved in real systems."], correct: 1, explanation: "Angular momentum conservation requires zero net EXTERNAL torque on the system — internal torques (between parts of the system) never change the total, exactly parallel to how internal forces never change a system's total linear momentum." },
    { id: "6-34", topic: "6.3 Conservation of Angular Momentum", stem: "A skater spins with arms extended, then pulls her arms in. Explain what happens to her moment of inertia and angular velocity.", choices: ["Both increase.", "Moment of inertia decreases; angular velocity increases.", "Moment of inertia increases; angular velocity decreases.", "Both stay the same."], correct: 1, explanation: "Pulling her arms inward moves mass closer to the rotation axis, decreasing her moment of inertia. Since L=Iω must stay constant (no external torque), the decrease in I forces a corresponding increase in ω — she spins faster." },
    { id: "6-35", topic: "6.3 Conservation of Angular Momentum", stem: "A skater spins at 2.0 rad/s with I=5.0 kg·m², then pulls her arms in to reduce I to 2.0 kg·m². Find her new angular velocity.", choices: ["0.8 rad/s", "2.0 rad/s", "5.0 rad/s", "10 rad/s"], correct: 2, explanation: "Conservation of angular momentum: (5.0)(2.0) = (2.0)ω2, so ω2 = 10/2.0 = 5.0 rad/s." },
    { id: "6-36", topic: "6.3 Conservation of Angular Momentum", stem: "A diver leaves the diving board with some initial angular velocity, then tucks into a tight ball mid-air. Explain what happens to her rotation rate, and why.", choices: ["It decreases, since tucking reduces her moment of inertia.", "It increases, since tucking reduces her moment of inertia and angular momentum must be conserved (negligible external torque in the air).", "It stays the same, since angular velocity is fixed once she leaves the board.", "It increases due to air resistance."], correct: 1, explanation: "Tucking into a ball pulls her mass closer to her rotation axis, reducing her moment of inertia — and with essentially no external torque acting on her while airborne (gravity acts through her center of mass, producing no torque about that axis), her angular momentum must stay constant, forcing her angular velocity to increase, letting her complete more rotations before hitting the water." },
    { id: "6-37", topic: "6.3 Conservation of Angular Momentum", stem: "A merry-go-round (I=200 kg·m²) spins at 1.5 rad/s. A child, contributing an additional 50 kg·m² once aboard, jumps onto the edge from rest. Find the new angular velocity.", choices: ["1.0 rad/s", "1.2 rad/s", "1.5 rad/s", "1.875 rad/s"], correct: 1, explanation: "Conservation of angular momentum: (200)(1.5) = (200+50)ω2, so 300 = 250ω2, giving ω2 = 1.2 rad/s." },
    { id: "6-38", topic: "6.3 Conservation of Angular Momentum", stem: "For the merry-go-round-and-child scenario, is linear momentum conservation the relevant tool for finding the new rotation rate?", choices: ["Yes, linear momentum conservation is the primary tool needed.", "No — angular momentum conservation is the relevant law here, since the system involves rotation, not straight-line motion.", "Both linear and angular momentum conservation are needed simultaneously in equal measure.", "Neither conservation law applies to this scenario."], correct: 1, explanation: "Since this scenario is fundamentally about ROTATIONAL motion (the merry-go-round spinning), angular momentum conservation is the directly relevant law — linear momentum conservation isn't the right tool for finding a change in angular velocity." },
    { id: "6-39", topic: "6.3 Conservation of Angular Momentum", stem: "A merry-go-round (I=150 kg·m²) spins at 2.0 rad/s. A child adds 50 kg·m² once aboard. Find the new angular velocity.", choices: ["1.0 rad/s", "1.5 rad/s", "2.0 rad/s", "2.67 rad/s"], correct: 1, explanation: "(150)(2.0) = (200)ω2, so ω2 = 300/200 = 1.5 rad/s." },
    { id: "6-40", topic: "6.3 Conservation of Angular Momentum", stem: "When a spinning skater pulls her arms in, is her rotational kinetic energy conserved along with her angular momentum?", choices: ["Yes, both are always conserved together.", "No — angular momentum is conserved, but rotational kinetic energy actually increases due to the work her muscles do.", "No, both decrease.", "Angular momentum decreases while kinetic energy stays the same."], correct: 1, explanation: "This is a critical distinction: angular momentum conservation depends only on zero external torque, which holds here. But kinetic energy is NOT automatically conserved — the skater's muscles do real work pulling her arms inward against the effective outward pull of her spin, adding kinetic energy to the system." },
    { id: "6-41", topic: "6.3 Conservation of Angular Momentum", stem: "Using the skater scenario from an earlier question (I:5.0→2.0 kg·m², ω:2.0→5.0 rad/s), find her kinetic energy before and after.", choices: ["10 J before; 10 J after (conserved).", "10 J before; 25 J after (increased).", "25 J before; 10 J after (decreased).", "20 J before; 20 J after (conserved)."], correct: 1, explanation: "KE1 = ½(5.0)(2.0)² = 10 J. KE2 = ½(2.0)(5.0)² = 25 J. Her kinetic energy increased from 10 J to 25 J, even though her angular momentum stayed perfectly constant throughout." },
    { id: "6-42", topic: "6.3 Conservation of Angular Momentum", stem: "Where does the extra kinetic energy come from when a skater pulls her arms in to spin faster?", choices: ["It appears from nowhere, violating energy conservation.", "From the real muscular work she does pulling her arms inward against the effective outward-pulling tendency of her own spin.", "From the ice surface she's spinning on.", "From a decrease in her angular momentum."], correct: 1, explanation: "The extra kinetic energy comes from genuine physical work — the skater's muscles must actively pull her arms inward against what feels like an outward pull (a consequence of her own rotation), and that muscular work is converted directly into additional rotational kinetic energy." },
    { id: "6-43", topic: "6.3 Conservation of Angular Momentum", stem: "A spinning disk (I=4.0 kg·m², ω=6.0 rad/s) is dropped onto an identical, stationary disk (I=4.0 kg·m²) below it, and they stick together, spinning as one. Find their combined final angular velocity.", choices: ["1.5 rad/s", "3.0 rad/s", "6.0 rad/s", "12 rad/s"], correct: 1, explanation: "Conservation of angular momentum: (4.0)(6.0) = (8.0)ωf, so 24 = 8.0ωf, giving ωf = 3.0 rad/s." },
    { id: "6-44", topic: "6.3 Conservation of Angular Momentum", stem: "The two-disk scenario (a spinning disk dropped onto a stationary, identical disk, sticking together) is the rotational analog of which concept from Unit 4?", choices: ["An elastic collision.", "A perfectly inelastic collision.", "Conservation of energy alone.", "Projectile motion."], correct: 1, explanation: "Two objects combining into one shared final motion, with total (angular) momentum conserved but kinetic energy NOT conserved, is the exact rotational analog of a perfectly inelastic collision — the same underlying pattern, just expressed in rotational rather than linear quantities." },
    { id: "6-45", topic: "6.3 Conservation of Angular Momentum", stem: "For the two-disk scenario in an earlier question (I=4.0 kg·m² each, ω1=6.0 rad/s, ωf=3.0 rad/s), find the kinetic energy lost.", choices: ["12 J", "36 J", "72 J", "108 J"], correct: 1, explanation: "KE_before = ½(4.0)(6.0)² = 72 J. KE_after = ½(8.0)(3.0)² = 36 J. KE lost = 72 − 36 = 36 J, converted to heat and sound as the disks 'collide' and stick." },
    { id: "6-46", topic: "6.3 Conservation of Angular Momentum", stem: "A planet in an elliptical orbit moves faster when closer to its star and slower when farther away. Which conservation law explains this behavior?", choices: ["Conservation of linear momentum.", "Conservation of angular momentum.", "Conservation of mass.", "This behavior has no explanation from conservation laws."], correct: 1, explanation: "This is a direct consequence of angular momentum conservation (essentially Kepler's Second Law in physics language): as the planet gets closer to the star, its effective 'radius' decreases, and to keep L=mvr constant, its speed v must increase — and vice versa when farther away." },
    { id: "6-47", topic: "6.3 Conservation of Angular Momentum", stem: "An object orbits at 6.0 m/s when 4.0 m from the center of its orbit. Find its speed when it moves to a distance of 2.0 m from the center (using angular momentum conservation, L=mvr).", choices: ["3.0 m/s", "6.0 m/s", "12 m/s", "24 m/s"], correct: 2, explanation: "Conservation of L=mvr (mass cancels): v1r1 = v2r2, so (6.0)(4.0) = v2(2.0), giving v2 = 24/2.0 = 12 m/s." },
    { id: "6-48", topic: "6.3 Conservation of Angular Momentum", stem: "In the orbital speed-up scenario from the previous question, which quantity remains exactly constant throughout the motion?", choices: ["The object's linear momentum.", "The object's angular momentum.", "The object's kinetic energy.", "None of these remain constant."], correct: 1, explanation: "Angular momentum (L=mvr) is the quantity conserved here, assuming no external torque about the orbit's center. Linear momentum and kinetic energy both change, since the object's speed and direction are continuously varying throughout the orbit." },
    { id: "6-49", topic: "6.3 Conservation of Angular Momentum", stem: "For the object in the orbital scenario (v:6.0→12 m/s as r:4.0→2.0 m), is its kinetic energy the same at both points?", choices: ["Yes, kinetic energy is always conserved alongside angular momentum.", "No — kinetic energy quadruples (since v doubled), even though angular momentum stayed exactly constant.", "No, kinetic energy is cut in half.", "Kinetic energy cannot be determined without the object's mass."], correct: 1, explanation: "Since KE=½mv² depends on v², and v doubled (6.0→12 m/s), kinetic energy increases by a factor of 2²=4 — a clear demonstration that angular momentum conservation does not imply kinetic energy conservation, the same lesson as the skater example." },
    { id: "6-50", topic: "6.4 Total KE of Rolling Objects", stem: "What is the correct expression for the total kinetic energy of an object rolling without slipping?", choices: ["KE_total = ½mv²  only", "KE_total = ½Iω² only", "KE_total = ½mv² + ½Iω²", "KE_total = mv² + Iω²"], correct: 2, explanation: "A rolling object has kinetic energy from BOTH its center-of-mass translation (½mv²) and its rotation about that center of mass (½Iω²) — the total is simply the sum of the two." },
    { id: "6-51", topic: "6.4 Total KE of Rolling Objects", stem: "A rolling object has translational kinetic energy 16 J and rotational kinetic energy 9.6 J. Find its total kinetic energy.", choices: ["6.4 J", "9.6 J", "16 J", "25.6 J"], correct: 3, explanation: "KE_total = KE_translational + KE_rotational = 16 + 9.6 = 25.6 J." },
    { id: "6-52", topic: "6.4 Total KE of Rolling Objects", stem: "For an object rolling without slipping, why can you substitute ω=v/r into the rotational KE term when computing total kinetic energy?", choices: ["This substitution is only a rough approximation.", "Because rolling without slipping specifically guarantees v_cm=rω, letting you express ω entirely in terms of v (or vice versa).", "This substitution works for any rotating object, slipping or not.", "It's an arbitrary simplification with no physical justification."], correct: 1, explanation: "The relationship v_cm=rω is the defining condition of rolling without slipping (from Unit 5) — it's not an approximation, but an exact consequence of the no-slipping condition, which lets you rewrite the rotational KE term entirely in terms of the object's linear speed v." },
    { id: "6-53", topic: "6.4 Total KE of Rolling Objects", stem: "A solid sphere (I=(2/5)MR²) of mass 4.0 kg rolls without slipping at 3.0 m/s. Find its total kinetic energy.", choices: ["10.8 J", "18 J", "25.2 J", "36 J"], correct: 2, explanation: "For a solid sphere rolling without slipping, KE_total=(7/10)mv² (derived by substituting I and ω=v/r). KE = (7/10)(4.0)(3.0)² = (0.7)(4.0)(9.0) = 25.2 J." },
    { id: "6-54", topic: "6.4 Total KE of Rolling Objects", stem: "A solid sphere and a hoop, of equal mass and radius, are released from rest at the top of the same ramp. Which one has more total kinetic energy at the bottom?", choices: ["The sphere, since it converts more of its PE into KE by the bottom.", "The hoop, since it has more moment of inertia.", "Both have exactly the same total kinetic energy at the bottom, since both start with the same gravitational PE.", "Cannot be determined without the ramp's angle."], correct: 2, explanation: "By conservation of energy, BOTH objects convert the exact same amount of gravitational PE (mgh, since they have equal mass and drop the same height) into total kinetic energy — the sphere and the hoop end up with equal TOTAL kinetic energy at the bottom. What differs is how that total energy is SPLIT between translational and rotational forms (and therefore, their final speeds differ, since the hoop puts more into rotation)." },
    { id: "6-55", topic: "6.4 Total KE of Rolling Objects", stem: "A solid sphere rolls without slipping down a ramp 2.0 m high, starting from rest. Find its speed at the bottom. (Use KE_total=(7/10)mv² for a solid sphere.)", choices: ["3.7 m/s", "4.4 m/s", "5.3 m/s", "6.3 m/s"], correct: 2, explanation: "mgh = (7/10)mv² (mass cancels): v² = 10gh/7 = 10(9.8)(2.0)/7 = 196/7 = 28, so v = √28 ≈ 5.3 m/s." },
    { id: "6-56", topic: "6.4 Total KE of Rolling Objects", stem: "For an object rolling without slipping down a ramp, does the presence of static friction at the contact point prevent mechanical energy from being conserved?", choices: ["Yes, any friction always removes mechanical energy from a system.", "No — static friction at a rolling-without-slipping contact point does zero work, since that point has zero velocity, so mechanical energy conservation still applies fully.", "Yes, but only for very rough ramps.", "No, because static friction doesn't actually exist during rolling."], correct: 1, explanation: "This is a key, somewhat surprising result: unlike kinetic friction (which does negative work and removes mechanical energy, as in Unit 3), static friction acting at a point with zero instantaneous velocity does zero work — so mechanical energy conservation applies completely to rolling-without-slipping motion, letting you use straightforward energy methods." },
    { id: "6-57", topic: "6.4 Total KE of Rolling Objects", stem: "A hoop rolls without slipping down a ramp 3.2 m high, starting from rest. Find its speed at the bottom. (For a hoop, KE_total=mv².)", choices: ["4.0 m/s", "5.6 m/s", "6.3 m/s", "7.9 m/s"], correct: 1, explanation: "mgh = mv² (mass cancels): v² = gh = (9.8)(3.2) = 31.36, so v = √31.36 ≈ 5.6 m/s." },
    { id: "6-58", topic: "6.4 Total KE of Rolling Objects", stem: "A block slides frictionlessly (no rotation) down a ramp, while an identical-mass ball rolls without slipping down the same height. Compare their speeds at the bottom.", choices: ["The sliding block is faster, since none of its energy is diverted into rotational KE.", "The rolling ball is faster, since rotation adds extra kinetic energy.", "They arrive at the same speed, since they have the same mass.", "Cannot be compared without knowing the ramp's angle."], correct: 0, explanation: "The frictionlessly sliding block converts ALL of its gravitational PE into translational kinetic energy alone. The rolling ball has to split its PE between translational AND rotational KE — meaning less is available for translational motion, so it arrives at the bottom moving slower than the sliding block." },
    { id: "6-59", topic: "6.4 Total KE of Rolling Objects", stem: "For a solid disk rolling without slipping, what fraction of its total kinetic energy is rotational?", choices: ["1/4", "1/3", "1/2", "2/3"], correct: 1, explanation: "For a disk (I=½MR²), KE_rot=¼Mv² and KE_trans=½Mv², giving KE_total=¾Mv². The rotational fraction is (¼Mv²)/(¾Mv²) = 1/3." },
    { id: "6-60", topic: "6.4 Total KE of Rolling Objects", stem: "For a hoop rolling without slipping, what fraction of its total kinetic energy is rotational?", choices: ["1/3", "1/2", "2/3", "3/4"], correct: 1, explanation: "For a hoop (I=MR²), KE_rot=½Mv² and KE_trans=½Mv², giving KE_total=Mv². The rotational fraction is (½Mv²)/(Mv²) = 1/2 — exactly half, a larger rotational share than the disk's one-third, consistent with the hoop's larger moment of inertia." },
    { id: "6-61", topic: "6.4 Total KE of Rolling Objects", stem: "A bowling ball (solid sphere, mass 6.0 kg) rolls without slipping at 4.0 m/s. Find its total kinetic energy. (Use KE_total=(7/10)mv².)", choices: ["33.6 J", "48 J", "57.6 J", "67.2 J"], correct: 3, explanation: "KE_total = (7/10)(6.0)(4.0)² = (0.7)(6.0)(16) = 67.2 J." },
    { id: "6-62", topic: "6.4 Total KE of Rolling Objects", stem: "Explain physically why static friction, not kinetic friction, acts at the contact point of an object rolling without slipping, and why this matters for energy conservation.", choices: ["Static friction acts because there's no relative sliding at the contact point, and since that point has zero velocity, static friction does zero work — preserving mechanical energy.", "Kinetic friction acts because the object is moving, and it removes energy just like in Unit 3.", "Neither type of friction acts during rolling motion.", "Static friction always does significant negative work, just like kinetic friction."], correct: 0, explanation: "Rolling without slipping means zero relative sliding at the contact point (by definition), which is precisely the condition for STATIC (not kinetic) friction. And because that specific point has zero instantaneous velocity, any force acting there — including static friction — does zero work, which is exactly why mechanical energy conservation still applies to the rolling object." },
    { id: "6-63", topic: "6.4 Total KE of Rolling Objects", stem: "A solid cylinder rolls without slipping down a ramp 1.25 m high, starting from rest. Find its speed at the bottom. (For a solid cylinder, same as a disk: KE_total=¾mv².)", choices: ["2.9 m/s", "3.6 m/s", "4.0 m/s", "5.0 m/s"], correct: 2, explanation: "mgh = (3/4)mv² (mass cancels): v² = (4/3)gh = (4/3)(9.8)(1.25) ≈ 16.33, so v = √16.33 ≈ 4.0 m/s." },
    { id: "6-64", topic: "6.4 Total KE of Rolling Objects", stem: "A solid sphere, a solid disk, and a hoop, all with equal mass and radius, are released from rest at the top of the same ramp and roll without slipping. Rank their speeds at the bottom from fastest to slowest.", choices: ["Sphere > disk > hoop", "Hoop > disk > sphere", "Disk > sphere > hoop", "All three arrive at the same speed"], correct: 0, explanation: "The object with the SMALLEST moment of inertia (relative to MR²) diverts the least energy into rotation, leaving the most for translational speed. Ranking by their I coefficients: sphere (2/5) < disk (1/2) < hoop (1) — so the sphere is fastest, the disk is next, and the hoop, with the largest moment of inertia, is slowest." },
    { id: "6-65", topic: "6.4 Total KE of Rolling Objects", stretch: true, stem: "Stretch — beyond typical AP difficulty: An object with moment of inertia I=kMR² (where k is a dimensionless constant depending on shape) rolls without slipping down a ramp of height h, starting from rest. Derive a general expression for its speed at the bottom in terms of g, h, and k, then verify it matches the solid sphere result (k=2/5) from an earlier question.", choices: ["v = √(2gh/(1+k)) — and for k=2/5, this gives v=√(10gh/7), matching the sphere's earlier result exactly.", "v = √(2gh) for all values of k, independent of shape.", "v = √(2gh·k), increasing without bound as k increases.", "v = √(gh/k), decreasing without bound as k increases."], correct: 0, explanation: "Starting from energy conservation: mgh = ½mv² + ½Iω² = ½mv² + ½(kMR²)(v/R)² = ½mv²(1+k), where the mass cancels throughout. Solving: gh = ½v²(1+k), so v² = 2gh/(1+k), giving v = √(2gh/(1+k)). Checking against the solid sphere (k=2/5): v = √(2gh/1.4) = √(2gh/(7/5)) = √(10gh/7) — which matches exactly the (7/10)mv²-based result derived earlier in this unit, confirming the general formula is consistent with the specific shape-by-shape results." },
  ],
  7: [
    { id: "7-1", topic: "7.1 SHM Basics", stem: "What is the defining physical feature of simple harmonic motion?", choices: ["A constant restoring force, independent of displacement.", "A restoring force directly proportional to displacement from equilibrium.", "A force that increases without bound over time.", "The complete absence of any restoring force."], correct: 1, explanation: "SHM is defined by a restoring force that is directly proportional to displacement (F=−kx) — this single condition is what guarantees the resulting motion is perfectly periodic and sinusoidal." },
    { id: "7-2", topic: "7.1 SHM Basics", stem: "At the point of maximum displacement in SHM, what are the values of velocity and acceleration?", choices: ["Velocity is maximum; acceleration is zero.", "Velocity is zero; acceleration is at its maximum magnitude.", "Both velocity and acceleration are zero.", "Both velocity and acceleration are at their maximum."], correct: 1, explanation: "At maximum displacement, the object has momentarily stopped to reverse direction, so velocity is zero — but the restoring force (and therefore acceleration) is at its greatest magnitude there, since it's proportional to the (maximum) displacement." },
    { id: "7-3", topic: "7.1 SHM Basics", stem: "At the equilibrium position in SHM, what are the values of velocity and acceleration?", choices: ["Velocity is zero; acceleration is maximum.", "Velocity is maximum; acceleration is zero.", "Both are zero.", "Both are at their maximum."], correct: 1, explanation: "At equilibrium, displacement is zero, so the restoring force — and therefore acceleration — is zero. But the object has had the entire swing to accelerate, so its velocity is at its maximum there." },
    { id: "7-4", topic: "7.1 SHM Basics", stem: "An oscillator has a period of 0.25 s. Find its frequency.", choices: ["0.25 Hz", "0.5 Hz", "4.0 Hz", "8.0 Hz"], correct: 2, explanation: "f = 1/T = 1/0.25 = 4.0 Hz." },
    { id: "7-5", topic: "7.1 SHM Basics", stem: "An oscillator has a frequency of 5.0 Hz. Find its period.", choices: ["0.1 s", "0.2 s", "5.0 s", "10 s"], correct: 1, explanation: "T = 1/f = 1/5.0 = 0.2 s." },
    { id: "7-6", topic: "7.1 SHM Basics", stem: "For an ideal spring-mass system, does increasing the amplitude of oscillation change the period?", choices: ["Yes, a larger amplitude always produces a longer period.", "No — the period is completely independent of amplitude for an ideal spring.", "Yes, a larger amplitude always produces a shorter period.", "It depends on the mass attached to the spring."], correct: 1, explanation: "One of the most important and slightly counterintuitive features of ideal SHM is that period does NOT depend on amplitude at all — a bigger swing simply moves faster to cover the extra distance in the exact same time." },
    { id: "7-7", topic: "7.1 SHM Basics", stem: "An oscillator has frequency 2.0 Hz. Find its angular frequency ω.", choices: ["2.0 rad/s", "4.0 rad/s", "6.28 rad/s", "12.57 rad/s"], correct: 3, explanation: "ω = 2πf = 2π(2.0) = 4π ≈ 12.57 rad/s." },
    { id: "7-8", topic: "7.1 SHM Basics", stem: "What shape does a graph of position vs. time take for an object undergoing ideal SHM?", choices: ["A straight line.", "A parabola.", "A sinusoidal (sine or cosine) curve.", "An exponential decay curve."], correct: 2, explanation: "SHM position as a function of time follows a sinusoidal pattern — a smooth, repeating wave shape (sine or cosine), a direct mathematical consequence of the restoring-force-proportional-to-displacement condition." },
    { id: "7-9", topic: "7.1 SHM Basics", stem: "An oscillator has amplitude 0.05 m and angular frequency 10 rad/s. Find its maximum speed.", choices: ["0.005 m/s", "0.5 m/s", "2.0 m/s", "5.0 m/s"], correct: 1, explanation: "v_max = Aω = (0.05)(10) = 0.5 m/s." },
    { id: "7-10", topic: "7.1 SHM Basics", stem: "An oscillator has amplitude 0.02 m and angular frequency 8.0 rad/s. Find its maximum acceleration.", choices: ["0.16 m/s²", "0.64 m/s²", "1.28 m/s²", "4.0 m/s²"], correct: 2, explanation: "a_max = Aω² = (0.02)(8.0)² = (0.02)(64) = 1.28 m/s²." },
    { id: "7-11", topic: "7.1 SHM Basics", stem: "An oscillator's amplitude is doubled while its angular frequency stays the same. How does its maximum speed change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since v_max=Aω is directly (linearly) proportional to A, doubling the amplitude directly doubles the maximum speed." },
    { id: "7-12", topic: "7.1 SHM Basics", stem: "An oscillator's amplitude is doubled while its angular frequency stays the same. How does its maximum acceleration change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since a_max=Aω² is directly proportional to A (with ω fixed), doubling the amplitude directly doubles the maximum acceleration — linear in A, even though the formula involves ω²." },
    { id: "7-13", topic: "7.1 SHM Basics", stem: "An oscillator's angular frequency is doubled while its amplitude stays the same. How does its maximum acceleration change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 1, explanation: "Since a_max=Aω² depends on ω², doubling the angular frequency (with A fixed) quadruples the maximum acceleration — a very different scaling than the linear relationship with amplitude." },
    { id: "7-14", topic: "7.1 SHM Basics", stem: "What quantity remains exactly constant throughout an ideal SHM cycle (no friction)?", choices: ["The object's velocity.", "The object's acceleration.", "The total mechanical energy.", "The restoring force."], correct: 2, explanation: "Total mechanical energy (KE+PE) remains exactly constant throughout the cycle, even as velocity, acceleration, and the restoring force all continuously change in both magnitude and direction." },
    { id: "7-15", topic: "7.1 SHM Basics", stem: "An oscillator completes 15 full cycles in 6.0 s. Find its period and frequency.", choices: ["T=0.4s, f=2.5Hz", "T=2.5s, f=0.4Hz", "T=0.4s, f=15Hz", "T=6.0s, f=0.17Hz"], correct: 0, explanation: "T = 6.0/15 = 0.4 s. f = 1/T = 1/0.4 = 2.5 Hz." },
    { id: "7-16", topic: "7.1 SHM Basics", stem: "Why does a restoring force proportional to displacement specifically produce SHM, rather than some other type of periodic motion?", choices: ["Because this specific mathematical relationship, when applied through Newton's Second Law, produces an equation of motion whose solution is exactly sinusoidal.", "Any restoring force at all automatically produces SHM, regardless of its dependence on displacement.", "SHM requires a constant force, not one proportional to displacement.", "This relationship doesn't actually guarantee any particular type of motion."], correct: 0, explanation: "Newton's Second Law, applied to F=−kx, gives ma=−kx, and the mathematical solution to this specific differential equation (relating acceleration to negative displacement) is always sinusoidal — this precise proportionality is what mathematically guarantees SHM, not just any restoring force in general." },
    { id: "7-17", topic: "7.2 Mass on a Spring", stem: "A 2.0 kg mass is attached to a spring with k=200 N/m. Find the period of oscillation.", choices: ["0.14 s", "0.63 s", "1.0 s", "6.3 s"], correct: 1, explanation: "T = 2π√(m/k) = 2π√(2.0/200) = 2π√0.01 = 2π(0.1) ≈ 0.63 s." },
    { id: "7-18", topic: "7.2 Mass on a Spring", stem: "For an ideal spring-mass system, does the period depend on the amplitude of oscillation?", choices: ["Yes, larger amplitude always means a longer period.", "No — the period depends only on mass and spring constant, not on amplitude.", "Yes, but only for very stiff springs.", "The period cannot be determined without knowing the amplitude."], correct: 1, explanation: "The spring's period, T=2π√(m/k), depends only on mass and spring constant — amplitude doesn't appear anywhere in the formula, and indeed doesn't affect the period at all for an ideal spring." },
    { id: "7-19", topic: "7.2 Mass on a Spring", stem: "A 0.50 kg mass oscillates on a spring with a period of 1.0 s. Find the spring constant.", choices: ["2.0 N/m", "9.9 N/m", "19.7 N/m", "39.5 N/m"], correct: 2, explanation: "Rearranging T=2π√(m/k): k = 4π²m/T² = 4π²(0.50)/(1.0)² ≈ 19.7 N/m." },
    { id: "7-20", topic: "7.2 Mass on a Spring", stem: "A spring with k=50 N/m has a period of 2.0 s. Find the attached mass.", choices: ["0.5 kg", "2.0 kg", "5.1 kg", "10.1 kg"], correct: 2, explanation: "Rearranging T=2π√(m/k): m = kT²/(4π²) = (50)(2.0)²/(4π²) = 200/39.48 ≈ 5.07 kg, close to 5.1 kg." },
    { id: "7-21", topic: "7.2 Mass on a Spring", stem: "A mass on a spring has its mass quadrupled while the spring constant stays the same. How does the period change?", choices: ["It quadruples.", "It doubles.", "It is cut in half.", "It stays the same."], correct: 1, explanation: "Since T=2π√(m/k) depends on the SQUARE ROOT of mass, quadrupling the mass increases the period by a factor of √4=2." },
    { id: "7-22", topic: "7.2 Mass on a Spring", stem: "A mass on a spring has the spring constant quadrupled while the mass stays the same. How does the period change?", choices: ["It quadruples.", "It doubles.", "It is cut in half.", "It stays the same."], correct: 2, explanation: "Since T=2π√(m/k) depends on 1/√k, quadrupling k cuts the period by a factor of 1/√4=1/2 — a stiffer spring produces a shorter period, oscillating faster." },
    { id: "7-23", topic: "7.2 Mass on a Spring", stem: "A spring-mass system has k=180 N/m and m=5.0 kg. Find its angular frequency, ω=√(k/m).", choices: ["3.0 rad/s", "6.0 rad/s", "36 rad/s", "900 rad/s"], correct: 1, explanation: "ω = √(k/m) = √(180/5.0) = √36 = 6.0 rad/s." },
    { id: "7-24", topic: "7.2 Mass on a Spring", stem: "Two spring-mass systems have identical masses, but Spring A is stiffer (larger k) than Spring B. Compare their periods.", choices: ["Spring A (stiffer) has a longer period.", "Spring A (stiffer) has a shorter period.", "Both have the same period, since the masses are equal.", "Cannot be determined without more information."], correct: 1, explanation: "Since T=2π√(m/k) is inversely related to √k, a stiffer spring (larger k) produces a SHORTER period — the stronger restoring force snaps the mass back and forth more quickly." },
    { id: "7-25", topic: "7.2 Mass on a Spring", stem: "Two spring-mass systems use identical springs, but Mass A is heavier than Mass B. Compare their periods.", choices: ["Mass A (heavier) has a longer period.", "Mass A (heavier) has a shorter period.", "Both have the same period, since the springs are identical.", "Cannot be determined without more information."], correct: 0, explanation: "Since T=2π√(m/k) is directly related to √m, the heavier mass (A) has more inertia to accelerate, producing a LONGER period — it oscillates more slowly than the lighter mass on the same spring." },
    { id: "7-26", topic: "7.2 Mass on a Spring", stem: "A 0.80 kg mass oscillates on a spring with k=320 N/m. Find the frequency of oscillation.", choices: ["0.31 Hz", "3.18 Hz", "5.66 Hz", "20 Hz"], correct: 1, explanation: "T = 2π√(0.80/320) = 2π√0.0025 = 2π(0.05) ≈ 0.314 s. f = 1/T ≈ 3.18 Hz." },
    { id: "7-27", topic: "7.2 Mass on a Spring", stem: "A spring-mass system has amplitude 0.10 m and angular frequency 6.0 rad/s. Find the maximum speed.", choices: ["0.017 m/s", "0.6 m/s", "3.6 m/s", "6.1 m/s"], correct: 1, explanation: "v_max = Aω = (0.10)(6.0) = 0.6 m/s." },
    { id: "7-28", topic: "7.2 Mass on a Spring", stem: "As a mass on a spring passes through the equilibrium position, what are the values of the spring force and the object's acceleration?", choices: ["Both are at their maximum.", "Both are exactly zero.", "Force is maximum; acceleration is zero.", "Force is zero; acceleration is maximum."], correct: 1, explanation: "At equilibrium (x=0), the spring force F=−kx is exactly zero, since displacement is zero — and since acceleration is directly proportional to force (a=F/m), acceleration is zero there as well." },
    { id: "7-29", topic: "7.2 Mass on a Spring", stem: "A spring with k=250 N/m and amplitude 0.050 m holds a 2.0 kg mass. Find the maximum acceleration.", choices: ["3.13 m/s²", "6.25 m/s²", "12.5 m/s²", "25 m/s²"], correct: 1, explanation: "Maximum acceleration occurs at maximum displacement, where the spring force is at its own maximum: F_max=kA=(250)(0.050)=12.5 N. a_max = F_max/m = 12.5/2.0 = 6.25 m/s²." },
    { id: "7-30", topic: "7.2 Mass on a Spring", stem: "Is total mechanical energy conserved for a mass oscillating on a frictionless horizontal spring?", choices: ["Yes, as long as no non-conservative force (like friction or air resistance) acts on the system.", "No, energy is always lost during spring oscillation.", "Yes, but only at the exact moment of maximum displacement.", "No, mechanical energy conservation doesn't apply to oscillating systems."], correct: 0, explanation: "Just like any other system in Unit 3, a frictionless spring-mass system conserves total mechanical energy throughout its motion — this is exactly the same conservation principle, simply applied to an oscillating rather than a one-way motion." },
    { id: "7-31", topic: "7.2 Mass on a Spring", stem: "A 3.0 kg mass hangs at rest from a vertical spring, stretching it 0.15 m from its natural length. Find the spring constant.", choices: ["20 N/m", "45 N/m", "196 N/m", "294 N/m"], correct: 2, explanation: "At equilibrium, the spring force balances gravity: kx=mg, so k = mg/x = (3.0)(9.8)/0.15 = 196 N/m." },
    { id: "7-32", topic: "7.2 Mass on a Spring", stem: "Does gravity affect the PERIOD of a vertically-hanging mass-spring system, compared to the same system oriented horizontally?", choices: ["Yes, a vertical spring always has a shorter period due to gravity assisting the motion.", "No — gravity shifts the equilibrium position but does not change the period formula, T=2π√(m/k), at all.", "Yes, a vertical spring always has a longer period.", "The period cannot be defined for a vertical spring."], correct: 1, explanation: "This is a genuinely non-obvious but important result: gravity shifts WHERE the new equilibrium position sits (the spring stretches somewhat to support the hanging weight), but the period of oscillation AROUND that new equilibrium point is still governed by the exact same formula, T=2π√(m/k) — completely unaffected by gravity or orientation." },
    { id: "7-33", topic: "7.2 Mass on a Spring", stem: "Using the spring from an earlier question (k=196 N/m, m=3.0 kg), find its period of oscillation.", choices: ["0.39 s", "0.78 s", "1.56 s", "3.1 s"], correct: 1, explanation: "T = 2π√(m/k) = 2π√(3.0/196) = 2π√0.0153 ≈ 2π(0.1237) ≈ 0.78 s." },
    { id: "7-34", topic: "7.3 The Simple Pendulum", stem: "Find the period of a 1.0 m long pendulum on Earth (g=9.8 m/s²), swinging through a small angle.", choices: ["0.64 s", "2.0 s", "6.3 s", "9.8 s"], correct: 1, explanation: "T = 2π√(L/g) = 2π√(1.0/9.8) ≈ 2π(0.319) ≈ 2.0 s." },
    { id: "7-35", topic: "7.3 The Simple Pendulum", stem: "Does the mass of a pendulum's bob affect its period?", choices: ["Yes, a heavier bob always has a longer period.", "No — pendulum period does not depend on the bob's mass at all.", "Yes, a heavier bob always has a shorter period.", "Only for bobs heavier than 1 kg."], correct: 1, explanation: "The pendulum period formula, T=2π√(L/g), contains no mass term at all — mass genuinely does not affect the period, a fact that can be traced back to how the restoring force's dependence on mass cancels out identically to how it does in free-fall problems." },
    { id: "7-36", topic: "7.3 The Simple Pendulum", stem: "Under what condition is the standard pendulum period formula, T=2π√(L/g), an accurate description of the motion?", choices: ["For any swing angle, no matter how large.", "Only for small swing angles (roughly under 15°).", "Only for pendulums longer than 2 meters.", "Only on planets with g greater than Earth's."], correct: 1, explanation: "This formula relies on the small-angle approximation (sinθ≈θ), which only holds accurately for small swing angles — typically cited as roughly under 15°. For larger angles, the true period is somewhat longer than this formula predicts." },
    { id: "7-37", topic: "7.3 The Simple Pendulum", stem: "A pendulum has a period of 3.0 s on Earth. Find its length.", choices: ["0.74 m", "2.23 m", "4.47 m", "8.82 m"], correct: 1, explanation: "Rearranging T=2π√(L/g): L = g(T/2π)² = 9.8(3.0/2π)² = 9.8(0.4775)² ≈ 9.8(0.228) ≈ 2.23 m." },
    { id: "7-38", topic: "7.3 The Simple Pendulum", stem: "A pendulum's length is quadrupled. How does its period change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Since T=2π√(L/g) depends on the square root of length, quadrupling L increases the period by a factor of √4=2." },
    { id: "7-39", topic: "7.3 The Simple Pendulum", stem: "A pendulum is taken to a planet where g is smaller than on Earth. How does its period change (length unchanged)?", choices: ["It decreases.", "It increases.", "It stays the same.", "The pendulum stops swinging entirely."], correct: 1, explanation: "Since T=2π√(L/g) is inversely related to √g, a smaller gravitational field strength produces a LONGER period — with weaker gravity providing a weaker restoring effect, the pendulum swings more slowly." },
    { id: "7-40", topic: "7.3 The Simple Pendulum", stem: "Find the period of a 1.0 m pendulum on the Moon, where g≈1.6 m/s².", choices: ["1.25 s", "2.0 s", "3.2 s", "5.0 s"], correct: 3, explanation: "T = 2π√(L/g) = 2π√(1.0/1.6) = 2π√0.625 ≈ 2π(0.791) ≈ 5.0 s — much longer than the roughly 2.0 s period the same pendulum would have on Earth, since the Moon's weaker gravity provides a weaker restoring effect." },
    { id: "7-41", topic: "7.3 The Simple Pendulum", stem: "A pendulum swings through a very LARGE angle, well beyond the small-angle regime. Does T=2π√(L/g) still give the exact period?", choices: ["Yes, this formula is exact for any angle.", "No — for large angles, the true period is somewhat longer than this formula predicts, since the small-angle approximation breaks down.", "No, for large angles the pendulum doesn't oscillate at all.", "Yes, but only if the bob is very light."], correct: 1, explanation: "The standard formula relies specifically on the small-angle approximation, sinθ≈θ. For large swing angles, this approximation is no longer accurate, and the true period ends up being somewhat LONGER than the formula's prediction." },
    { id: "7-42", topic: "7.3 The Simple Pendulum", stem: "Pendulum 1 has length 2.0 m; Pendulum 2 has length 8.0 m. Find the ratio of Pendulum 2's period to Pendulum 1's period.", choices: ["2", "4", "8", "16"], correct: 0, explanation: "Since T∝√L, the ratio of periods equals the square root of the ratio of lengths: √(8.0/2.0) = √4 = 2 — Pendulum 2 has exactly twice the period of Pendulum 1." },
    { id: "7-43", topic: "7.3 The Simple Pendulum", stem: "A pendulum's bob mass is increased while its length stays the same. Does the period change?", choices: ["Yes, it increases proportionally to mass.", "No — pendulum period is independent of the bob's mass.", "Yes, it decreases proportionally to mass.", "Only if the increase is more than double the original mass."], correct: 1, explanation: "As established earlier in this section, pendulum period depends only on length and local gravity — the bob's mass has no effect on the period whatsoever, regardless of how much it's increased." },
    { id: "7-44", topic: "7.3 The Simple Pendulum", stem: "A grandfather clock's pendulum has a period of exactly 2.0 s. Find the required pendulum length.", choices: ["0.25 m", "0.50 m", "0.99 m", "1.98 m"], correct: 2, explanation: "L = g(T/2π)² = 9.8(2.0/2π)² = 9.8(0.3183)² ≈ 9.8(0.1013) ≈ 0.99 m." },
    { id: "7-45", topic: "7.3 The Simple Pendulum", stem: "Explain, at a physical level, why a pendulum's restoring force is only APPROXIMATELY proportional to its displacement.", choices: ["The true restoring force involves the sine of the angle, sinθ, which is only approximately equal to θ itself for small angles — not for large ones.", "Pendulums have no restoring force at all.", "The restoring force is exactly proportional to displacement for any angle, with no approximation needed.", "Gravity itself changes as the pendulum swings."], correct: 0, explanation: "The true restoring force on a pendulum bob is proportional to sinθ (from the geometry of the swing), not θ itself. Since sinθ≈θ only holds accurately for small angles, the true restoring force only approximately matches the F∝−x condition required for pure SHM — this is the physical root of the small-angle restriction." },
    { id: "7-46", topic: "7.3 The Simple Pendulum", stem: "A pendulum's length is doubled. Find the ratio of its new period to its original period.", choices: ["√2 ≈ 1.41", "2", "4", "0.71"], correct: 0, explanation: "Since T∝√L, doubling the length changes the period by a factor of √2 ≈ 1.41." },
    { id: "7-47", topic: "7.3 The Simple Pendulum", stem: "Is a pendulum's motion exactly simple harmonic, or only approximately so?", choices: ["Exactly SHM, for any swing angle.", "Only approximately SHM, and only accurately for small swing angles.", "Never SHM under any circumstances.", "Exactly SHM, but only for very long pendulums."], correct: 1, explanation: "A pendulum's motion is only APPROXIMATELY simple harmonic, and that approximation is only good for small angles — this is a genuinely important distinction from an ideal spring, whose restoring force follows F=−kx exactly, with no small-angle caveat needed." },
    { id: "7-48", topic: "7.3 The Simple Pendulum", stem: "A student measures a pendulum's length as 0.80 m and its period as 1.79 s. Using these measurements, find their experimental value for g.", choices: ["8.9 m/s²", "9.86 m/s²", "10.6 m/s²", "12.4 m/s²"], correct: 1, explanation: "Rearranging T=2π√(L/g): g = 4π²L/T² = 4π²(0.80)/(1.79)² ≈ 39.48(0.80)/3.204 ≈ 31.58/3.204 ≈ 9.86 m/s² — very close to the accepted value, a common experimental method for measuring g." },
    { id: "7-49", topic: "7.3 The Simple Pendulum", stem: "Why does a pendulum clock make a reliable timekeeping device?", choices: ["Its period depends on many rapidly-changing factors, averaging out over time.", "Its period depends only on length and local gravity, both of which remain essentially constant over time, making the period highly consistent and repeatable.", "Pendulum clocks are not actually reliable timekeeping devices.", "Its period depends on the bob's mass, which can be precisely controlled."], correct: 1, explanation: "Because T=2π√(L/g) depends only on length (a fixed, controllable physical property) and local gravitational field strength (essentially constant at a given location), a pendulum's period is remarkably stable and repeatable over time — exactly the property needed for reliable timekeeping." },
    { id: "7-50", topic: "7.4 Energy in SHM", stem: "A spring with k=150 N/m has amplitude 0.20 m. Find the total mechanical energy of the oscillation.", choices: ["1.5 J", "3.0 J", "6.0 J", "15 J"], correct: 1, explanation: "E = ½kA² = ½(150)(0.20)² = ½(150)(0.04) = 3.0 J." },
    { id: "7-51", topic: "7.4 Energy in SHM", stem: "How does total mechanical energy behave throughout an ideal (frictionless) SHM cycle?", choices: ["It continuously increases.", "It continuously decreases.", "It stays exactly constant, continuously trading between kinetic and potential forms.", "It oscillates between positive and negative values."], correct: 2, explanation: "Total mechanical energy remains exactly constant throughout an ideal SHM cycle, with kinetic and potential energy continuously trading off against each other while their sum stays fixed — the same conservation principle from Unit 3, applied to oscillatory motion." },
    { id: "7-52", topic: "7.4 Energy in SHM", stem: "At the point of maximum displacement in SHM, find the kinetic energy and potential energy.", choices: ["KE is maximum; PE is zero.", "KE is zero; PE is at its maximum (equal to the total energy).", "Both KE and PE are zero.", "Both KE and PE are at their maximum."], correct: 1, explanation: "At maximum displacement, velocity is zero, so kinetic energy is zero — meaning ALL of the system's total mechanical energy is, at that instant, in the form of potential energy." },
    { id: "7-53", topic: "7.4 Energy in SHM", stem: "At the equilibrium position in SHM, find the kinetic energy and potential energy.", choices: ["KE is zero; PE is maximum.", "KE is at its maximum (equal to the total energy); PE is zero.", "Both KE and PE are zero.", "Both KE and PE are at their maximum."], correct: 1, explanation: "At equilibrium, displacement is zero, so potential energy (whether elastic, ½kx², or gravitational) is zero — meaning ALL the system's total mechanical energy is, at that instant, kinetic." },
    { id: "7-54", topic: "7.4 Energy in SHM", stem: "A spring-mass system has total mechanical energy 4.0 J and mass 2.0 kg. Find the maximum speed.", choices: ["1.0 m/s", "2.0 m/s", "4.0 m/s", "8.0 m/s"], correct: 1, explanation: "E = ½mv_max²: 4.0 = ½(2.0)v_max², so v_max² = 4.0, giving v_max = 2.0 m/s." },
    { id: "7-55", topic: "7.4 Energy in SHM", stem: "An SHM system's amplitude is doubled. How does its total mechanical energy change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 1, explanation: "Since E=½kA² depends on A², doubling the amplitude quadruples the total mechanical energy — the same squared-dependence seen with elastic PE back in Unit 3." },
    { id: "7-56", topic: "7.4 Energy in SHM", stem: "A spring with k=300 N/m and amplitude 0.10 m holds a 1.5 kg mass. Find the maximum speed.", choices: ["0.71 m/s", "1.41 m/s", "2.0 m/s", "4.47 m/s"], correct: 1, explanation: "E = ½kA² = ½(300)(0.10)² = 1.5 J. Then ½mv_max²=1.5: v_max² = 2(1.5)/1.5 = 2.0, giving v_max = √2.0 ≈ 1.41 m/s." },
    { id: "7-57", topic: "7.4 Energy in SHM", stem: "A spring (k=400 N/m, amplitude 0.10 m) holds a 2.0 kg mass. Find the object's speed at a displacement of x=0.060 m from equilibrium.", choices: ["0.80 m/s", "1.13 m/s", "1.60 m/s", "2.83 m/s"], correct: 1, explanation: "KE at that point = E_total − PE = ½kA² − ½kx² = ½(400)(0.01−0.0036) = ½(400)(0.0064) = 1.28 J. Then ½mv²=1.28: v² = 2(1.28)/2.0 = 1.28, giving v = √1.28 ≈ 1.13 m/s." },
    { id: "7-58", topic: "7.4 Energy in SHM", stem: "Is it physically possible for kinetic energy to be negative at some point during SHM?", choices: ["Yes, at the extremes of the motion.", "No — kinetic energy (½mv²) can never be negative, since it depends on velocity squared.", "Yes, whenever potential energy exceeds the total energy.", "Only for very large amplitudes."], correct: 1, explanation: "Since KE=½mv², and v² is always non-negative for any real velocity, kinetic energy can never physically be negative — this is a useful check on any calculation, in SHM or otherwise, echoing the same principle from Unit 3." },
    { id: "7-59", topic: "7.4 Energy in SHM", stem: "At what point in an SHM cycle is the object's speed at its maximum?", choices: ["At the extremes of displacement.", "At the equilibrium position.", "Exactly halfway between equilibrium and the extreme.", "Speed is constant throughout SHM."], correct: 1, explanation: "Speed is maximum at the equilibrium position, where all the system's energy is kinetic (zero potential energy, since displacement is zero there)." },
    { id: "7-60", topic: "7.4 Energy in SHM", stem: "At what point in an SHM cycle is the MAGNITUDE of acceleration at its maximum?", choices: ["At the equilibrium position.", "At the extremes of displacement (x=±A).", "Exactly halfway between equilibrium and the extreme.", "Acceleration is constant throughout SHM."], correct: 1, explanation: "Since acceleration is proportional to the restoring force, which is proportional to displacement, acceleration reaches its maximum magnitude exactly where displacement is greatest — at the extremes, x=±A." },
    { id: "7-61", topic: "7.4 Energy in SHM", stem: "For a spring-mass system, find the potential energy at a displacement of x=0.5A, expressed as a fraction of the total energy.", choices: ["10%", "25%", "50%", "75%"], correct: 1, explanation: "PE = ½kx² = ½k(0.5A)² = ½k(0.25A²) = 0.25(½kA²) = 0.25×E_total — so potential energy is 25% of the total energy at half-amplitude, meaning kinetic energy makes up the remaining 75%." },
    { id: "7-62", topic: "7.4 Energy in SHM", stem: "How does energy conservation in SHM relate to the gravitational energy conservation studied in Unit 3?", choices: ["They are entirely unrelated principles.", "They are the exact same underlying conservation law — total mechanical energy stays constant absent non-conservative forces — just applied to a different type of potential energy (elastic or, for a pendulum, gravitational).", "SHM energy conservation is a completely different, newly-discovered law specific to oscillation.", "Energy conservation only applies to gravitational systems, not to springs."], correct: 1, explanation: "SHM energy conservation is literally the same principle from Unit 3 — total mechanical energy (KE+PE) remains constant absent friction or other non-conservative forces — just applied here with elastic potential energy (spring) or, for a pendulum, gravitational potential energy, trading with kinetic energy throughout the cycle." },
    { id: "7-63", topic: "7.4 Energy in SHM", stem: "A pendulum is released from rest at a height of 0.05 m above its lowest point (small angle). Find its maximum speed at the bottom of the swing.", choices: ["0.31 m/s", "0.70 m/s", "0.99 m/s", "1.40 m/s"], correct: 2, explanation: "Using energy conservation (gravitational PE converting to KE, exactly like Unit 3): mgh=½mv² (mass cancels), so v = √(2gh) = √(2×9.8×0.05) = √0.98 ≈ 0.99 m/s." },
    { id: "7-64", topic: "7.4 Energy in SHM", stem: "For a pendulum swinging back and forth, at which point is its kinetic energy maximum, and at which point is its (gravitational) potential energy maximum?", choices: ["KE is maximum at the highest points of the swing; PE is maximum at the lowest point.", "KE is maximum at the lowest point of the swing; PE is maximum at the highest points (the amplitude extremes).", "Both are maximum at the same point.", "Neither KE nor PE varies during the swing."], correct: 1, explanation: "This directly mirrors the spring's behavior: KE is maximum at the lowest point of the swing (equivalent to a spring's equilibrium position, where speed is greatest), and PE is maximum at the highest points of the swing (equivalent to the spring's maximum displacement, where the pendulum has momentarily stopped)." },
    { id: "7-65", topic: "7.4 Energy in SHM", stretch: true, stem: "Stretch — beyond typical AP difficulty: Show that the two expressions for total SHM energy, E=½mv_max² and E=½kA², are mathematically equivalent, using the relationships v_max=Aω and ω²=k/m.", choices: ["They are equivalent: ½mv_max² = ½m(Aω)² = ½mA²(k/m) = ½kA², since the mass cancels algebraically.", "They are only approximately equal, differing by a factor related to amplitude.", "They are equivalent only when the amplitude equals exactly 1 meter.", "The two expressions describe different physical quantities and are not meant to be equal."], correct: 0, explanation: "Substitute v_max=Aω into the kinetic energy expression: ½mv_max² = ½m(Aω)² = ½mA²ω². Then substitute ω²=k/m: ½mA²(k/m) = ½kA² — the mass m cancels out algebraically, leaving exactly the elastic potential energy expression. This confirms both formulas describe the exact same total energy, just derived from two different reference points in the motion (maximum speed at equilibrium vs. maximum displacement at the extreme)." },
  ],
  8: [
    { id: "8-1", topic: "8.1 Density and Pressure", stem: "Find the density of an object with mass 750 kg and volume 0.50 m³.", choices: ["375 kg/m³", "750 kg/m³", "1000 kg/m³", "1500 kg/m³"], correct: 3, explanation: "ρ = m/V = 750/0.50 = 1500 kg/m³." },
    { id: "8-2", topic: "8.1 Density and Pressure", stem: "A small sample and a large sample of the exact same substance are compared. How do their densities compare?", choices: ["The large sample always has greater density.", "The small sample always has greater density.", "Both have exactly the same density, since density doesn't depend on the amount of material present.", "Density cannot be compared without knowing the exact masses."], correct: 2, explanation: "Density is an intensive property — it's a ratio (mass/volume) that stays the same regardless of how much of the substance you have. A teaspoon and a swimming pool of the same liquid share the identical density." },
    { id: "8-3", topic: "8.1 Density and Pressure", stem: "A 500 N force is spread evenly over an area of 0.25 m². Find the resulting pressure.", choices: ["125 Pa", "500 Pa", "2000 Pa", "12,500 Pa"], correct: 2, explanation: "P = F/A = 500/0.25 = 2000 Pa." },
    { id: "8-4", topic: "8.1 Density and Pressure", stem: "Is pressure a vector or a scalar quantity?", choices: ["A vector, with the same direction as the force producing it.", "A scalar — it has magnitude but no inherent direction of its own.", "Neither a vector nor a scalar.", "It depends on the type of fluid."], correct: 1, explanation: "Pressure is a scalar quantity. While the force a fluid exerts on a specific surface acts perpendicular to that surface, the pressure VALUE itself carries no direction — it's the same number in every direction at a given point in the fluid." },
    { id: "8-5", topic: "8.1 Density and Pressure", stem: "A force of 800 N produces a pressure of 4000 Pa. Find the area over which it's applied.", choices: ["0.2 m²", "0.5 m²", "5.0 m²", "3,200,000 m²"], correct: 0, explanation: "A = F/P = 800/4000 = 0.2 m²." },
    { id: "8-6", topic: "8.1 Density and Pressure", stem: "A pressure of 1.5×10⁵ Pa acts over an area of 0.020 m². Find the resulting force.", choices: ["300 N", "3000 N", "7,500,000 N", "0.13 N"], correct: 1, explanation: "F = PA = (1.5×10⁵)(0.020) = 3000 N." },
    { id: "8-7", topic: "8.1 Density and Pressure", stem: "Explain why snowshoes prevent a person from sinking into soft snow, in terms of pressure.", choices: ["Snowshoes reduce the person's weight.", "Snowshoes spread the same force (weight) over a much larger area, reducing the pressure exerted on the snow.", "Snowshoes increase the force applied to the snow.", "Snowshoes work by melting the snow beneath them."], correct: 1, explanation: "Since P=F/A, spreading the same force (the person's weight) over a much larger area (the snowshoe's footprint) directly reduces the pressure applied to the snow — the same physical weight, but distributed enough to avoid pushing through the snow's surface." },
    { id: "8-8", topic: "8.1 Density and Pressure", stem: "An object has mass 8.0 kg and volume 0.0040 m³. Find its density, and determine whether it would float or sink in water (ρ_water=1000 kg/m³).", choices: ["500 kg/m³; would float", "2000 kg/m³; would sink", "2000 kg/m³; would float", "500 kg/m³; would sink"], correct: 1, explanation: "ρ = m/V = 8.0/0.0040 = 2000 kg/m³. Since this exceeds water's density (1000 kg/m³), the object is denser than water and would sink." },
    { id: "8-9", topic: "8.1 Density and Pressure", stem: "What is the correct SI unit for pressure?", choices: ["Newton (N)", "Joule (J)", "Pascal (Pa)", "kg/m³"], correct: 2, explanation: "Pressure is measured in pascals (Pa), defined as one newton per square meter (N/m²) — the SI unit named specifically for this quantity." },
    { id: "8-10", topic: "8.1 Density and Pressure", stem: "Convert 2.0 atm to pascals. (1 atm = 1.013×10⁵ Pa)", choices: ["5.07×10⁴ Pa", "1.013×10⁵ Pa", "2.026×10⁵ Pa", "4.052×10⁵ Pa"], correct: 2, explanation: "2.0 atm × 1.013×10⁵ Pa/atm = 2.026×10⁵ Pa." },
    { id: "8-11", topic: "8.1 Density and Pressure", stem: "Two objects have the same volume, but Object A has more mass than Object B. Compare their densities.", choices: ["Object A has greater density.", "Object B has greater density.", "Both have equal density, since their volumes are equal.", "Density cannot be compared without more information."], correct: 0, explanation: "Since ρ=m/V and both objects share the same volume, the object with more mass (A) has the greater density — a direct, linear relationship between mass and density at fixed volume." },
    { id: "8-12", topic: "8.2 Pressure Variation with Depth", stem: "Find the total pressure 5.0 m below the surface of a lake, given atmospheric pressure at the surface is 1.0×10⁵ Pa.", choices: ["1.0×10⁵ Pa", "1.05×10⁵ Pa", "1.49×10⁵ Pa", "4.9×10⁴ Pa"], correct: 2, explanation: "P = P0+ρgh = 1.0×10⁵+(1000)(9.8)(5.0) = 1.0×10⁵+49,000 = 1.49×10⁵ Pa." },
    { id: "8-13", topic: "8.2 Pressure Variation with Depth", stem: "Why does pressure increase with depth in a fluid?", choices: ["Because temperature increases with depth.", "Because at greater depth, you're supporting the weight of a taller column of fluid above you.", "Because fluids become denser at greater depth.", "Pressure does not actually increase with depth."], correct: 1, explanation: "The physical origin of the P=P0+ρgh relationship is exactly this: at any depth h, the fluid there has to support the weight of the entire column of fluid sitting above it — deeper points support more weight, hence more pressure." },
    { id: "8-14", topic: "8.2 Pressure Variation with Depth", stem: "At a specific point within a fluid, in which direction(s) does the pressure act?", choices: ["Only straight downward.", "Only straight upward.", "Equally in every direction.", "Only horizontally."], correct: 2, explanation: "Pressure at a point in a fluid acts equally in every direction — not just downward, as intuition from 'weight pressing down' might suggest. This is why a submerged object feels squeezed uniformly from all sides." },
    { id: "8-15", topic: "8.2 Pressure Variation with Depth", stem: "Find the GAUGE pressure (pressure due to the fluid alone, excluding atmospheric pressure) at a depth of 10 m in water.", choices: ["9,800 Pa", "49,000 Pa", "98,000 Pa", "100,000 Pa"], correct: 2, explanation: "Gauge pressure is just the ρgh term alone: (1000)(9.8)(10) = 98,000 Pa, excluding the separate atmospheric contribution P0." },
    { id: "8-16", topic: "8.2 Pressure Variation with Depth", stem: "Two containers of very different shapes — one narrow, one wide — are both filled with the same fluid to the same depth. Compare the pressure at the bottom of each.", choices: ["The wider container has greater pressure at the bottom, since it holds more total fluid.", "The narrower container has greater pressure at the bottom.", "Both containers have exactly equal pressure at the bottom, since pressure depends only on depth, not on shape or total volume.", "Pressure cannot be compared without knowing the exact container shapes."], correct: 2, explanation: "Since P=P0+ρgh depends only on depth (and density), not on the container's shape or total fluid volume, both containers have exactly the same pressure at the bottom — sometimes called the hydrostatic paradox, since it can feel like the wider container's greater total weight of fluid should matter, but it doesn't." },
    { id: "8-17", topic: "8.2 Pressure Variation with Depth", stem: "A gauge pressure of 196,000 Pa is measured in water. Find the corresponding depth.", choices: ["10 m", "15 m", "20 m", "25 m"], correct: 2, explanation: "Using ΔP=ρgh: h = ΔP/(ρg) = 196,000/(1000×9.8) = 196,000/9800 = 20 m." },
    { id: "8-18", topic: "8.2 Pressure Variation with Depth", stem: "Does the pressure at a given depth in a fluid depend on the total amount (volume) of fluid present?", choices: ["Yes, more total fluid always means more pressure at a given depth.", "No — pressure at a given depth depends only on depth, density, and surface pressure, not on total fluid volume.", "Yes, but only for very large volumes.", "Pressure cannot be defined without knowing total volume."], correct: 1, explanation: "This is the same hydrostatic-paradox idea from earlier questions: P=P0+ρgh contains no term for total fluid volume at all — only depth and density matter, regardless of how much total fluid is present in the container." },
    { id: "8-19", topic: "8.2 Pressure Variation with Depth", stem: "Find the total pressure 3.0 m below the surface of oil (ρ=800 kg/m³), given atmospheric pressure of 1.0×10⁵ Pa at the surface.", choices: ["1.024×10⁵ Pa", "1.235×10⁵ Pa", "1.294×10⁵ Pa", "2.352×10⁴ Pa"], correct: 1, explanation: "P = P0+ρgh = 1.0×10⁵+(800)(9.8)(3.0) = 1.0×10⁵+23,520 = 1.2352×10⁵ Pa." },
    { id: "8-20", topic: "8.2 Pressure Variation with Depth", stem: "A U-shaped tube, wider on one side than the other, is filled with water. Compare the pressure at the bottom of each side, at equal depths.", choices: ["The wider side has greater pressure at the bottom.", "The narrower side has greater pressure at the bottom.", "Both sides have equal pressure at equal depths, regardless of the tube's width at each point.", "Pressure cannot be compared without knowing the exact tube dimensions."], correct: 2, explanation: "Since pressure at a given depth depends only on depth and density — not on the container's width at that point — both sides of the U-tube have identical pressure at equal depths, which is exactly why the water settles to the same height on both sides." },
    { id: "8-21", topic: "8.2 Pressure Variation with Depth", stem: "Find the pressure difference between two points in water separated by a vertical distance of 8.0 m.", choices: ["7840 Pa", "9800 Pa", "78,400 Pa", "784,000 Pa"], correct: 2, explanation: "ΔP = ρgΔh = (1000)(9.8)(8.0) = 78,400 Pa." },
    { id: "8-22", topic: "8.2 Pressure Variation with Depth", stem: "Why doesn't the horizontal extent (width) of a fluid container affect the pressure at a given depth?", choices: ["Because pressure at a point depends only on the height of fluid directly above that specific point, via P=P0+ρgh — the horizontal extent of the container is irrelevant to that vertical column.", "Because fluids automatically redistribute their pressure evenly regardless of geometry.", "Horizontal extent actually does affect pressure significantly.", "Because gravity only acts on the vertical center of the container."], correct: 0, explanation: "The pressure formula depends specifically on the height h of fluid directly above the point in question — not on how wide the container is at any level. This is precisely why the hydrostatic paradox holds: differently-shaped containers filled to the same depth produce identical pressure at that depth." },
    { id: "8-23", topic: "8.3 Pascal's Principle", stem: "What does Pascal's Principle state?", choices: ["Pressure only propagates downward through a fluid.", "A pressure change applied to an enclosed fluid is transmitted, undiminished, throughout the fluid and to the walls of its container.", "Pressure decreases as it moves through a fluid.", "Fluids cannot transmit pressure changes at all."], correct: 1, explanation: "Pascal's Principle is the statement that pressure applied anywhere to an enclosed fluid transmits equally, without loss, to every other point in that fluid and to the container walls — this is the foundational idea behind all hydraulic systems." },
    { id: "8-24", topic: "8.3 Pascal's Principle", stem: "A hydraulic lift has a small piston (area 0.010 m²) and a large piston (area 0.50 m²). A 200 N force is applied to the small piston. Find the resulting force on the large piston.", choices: ["4.0 N", "2500 N", "10,000 N", "50,000 N"], correct: 2, explanation: "F1/A1 = F2/A2: 200/0.010 = F2/0.50, so F2 = (200)(0.50)/0.010 = 10,000 N." },
    { id: "8-25", topic: "8.3 Pascal's Principle", stem: "A hydraulic system multiplies an input force dramatically at the output piston. Does this violate conservation of energy?", choices: ["Yes, hydraulic systems create energy from nothing.", "No — the output piston, despite exerting more force, moves a proportionally smaller distance, so work in equals work out.", "Yes, but only for very large area ratios.", "No, because hydraulic fluids have negative mass."], correct: 1, explanation: "Since the fluid is essentially incompressible, the volume displaced by the small piston must equal the volume received by the large piston — meaning the small piston travels a much larger distance for the large piston's smaller displacement. Work (force × distance) balances out exactly, preserving energy conservation." },
    { id: "8-26", topic: "8.3 Pascal's Principle", stem: "A hydraulic system needs to produce 8000 N of output force from a 100 N input force, using an output piston area of 0.20 m². Find the required input piston area.", choices: ["0.0025 m²", "0.010 m²", "0.025 m²", "0.16 m²"], correct: 0, explanation: "F1/A1 = F2/A2: 100/A1 = 8000/0.20, so A1 = (100)(0.20)/8000 = 20/8000 = 0.0025 m²." },
    { id: "8-27", topic: "8.3 Pascal's Principle", stem: "In a hydraulic lift, why can't the output force be increased indefinitely without any tradeoff?", choices: ["There is no tradeoff; output force can increase without limit for free.", "Increasing the output-to-input area ratio requires the input piston to travel a correspondingly larger distance, preserving the work balance dictated by energy conservation.", "The fluid itself limits how much force can ever be produced.", "Output force is actually unrelated to the area ratio."], correct: 1, explanation: "A larger force multiplication (bigger area ratio) requires the input piston to travel proportionally farther for the same output displacement — energy conservation (work in = work out) is what enforces this tradeoff, preventing unlimited 'free' force multiplication." },
    { id: "8-28", topic: "8.3 Pascal's Principle", stem: "A car lift has an input piston area of 0.0050 m² and an output piston area of 0.25 m². Find the output force for a 300 N input force.", choices: ["6 N", "1500 N", "6000 N", "15,000 N"], correct: 3, explanation: "F2 = F1(A2/A1) = 300(0.25/0.0050) = 300(50) = 15,000 N." },
    { id: "8-29", topic: "8.3 Pascal's Principle", stem: "In a connected hydraulic system at the same height, what quantity is equal at both pistons, and what quantity generally differs?", choices: ["Force is equal; pressure differs.", "Pressure is equal; force generally differs (unless the areas happen to match).", "Both pressure and force are always equal.", "Neither pressure nor force is ever equal in a hydraulic system."], correct: 1, explanation: "Pascal's Principle guarantees equal PRESSURE throughout the connected fluid at the same height — but since F=PA, and the two pistons generally have different areas, the FORCES at each piston are generally different (that difference is exactly what makes hydraulic force multiplication possible)." },
    { id: "8-30", topic: "8.3 Pascal's Principle", stem: "In a hydraulic system, the small piston (area 0.020 m²) moves 0.50 m. If the large piston has area 0.40 m², find how far the large piston moves.", choices: ["0.010 m", "0.025 m", "0.10 m", "10 m"], correct: 1, explanation: "Volume conservation: A1d1=A2d2, so d2 = A1d1/A2 = (0.020)(0.50)/0.40 = 0.010/0.40 = 0.025 m — the large piston moves a much smaller distance than the small piston, exactly compensating for its much larger area." },
    { id: "8-31", topic: "8.3 Pascal's Principle", stem: "A hydraulic jack produces a large output force with a small input force. What is the tradeoff for this mechanical advantage?", choices: ["There is no tradeoff whatsoever.", "The input piston must travel a much larger distance than the output piston moves, for the work to balance.", "The output force is actually smaller than the input force, contrary to appearances.", "The tradeoff is a loss of total energy in the system."], correct: 1, explanation: "The mechanical advantage of a large output force comes at the cost of the input piston needing to travel a proportionally larger distance — exactly analogous to a lever's mechanical advantage from Unit 5, where a smaller force applied over a larger distance produces a larger force over a smaller distance, with no energy created or destroyed." },
    { id: "8-32", topic: "8.3 Pascal's Principle", stem: "A hydraulic brake system has a pedal piston (area 0.0015 m²) and a brake piston (area 0.030 m²). Find the force multiplication factor between the pedal and the brake.", choices: ["5", "10", "20", "45"], correct: 2, explanation: "The force multiplication factor equals the ratio of the areas: A2/A1 = 0.030/0.0015 = 20 — the brake piston produces 20 times the force applied at the pedal." },
    { id: "8-33", topic: "8.3 Pascal's Principle", stem: "Two pistons of different area are connected by the same enclosed, incompressible fluid at the same height. If the smaller piston has force F1 and area A1, and the larger has force F2 and area A2, which equation correctly relates them?", choices: ["F1 = F2", "F1/A1 = F2/A2", "F1·A1 = F2·A2", "F1+A1 = F2+A2"], correct: 1, explanation: "Since pressure (not force) is equal throughout the connected fluid (Pascal's Principle), and P=F/A, the correct relationship is F1/A1 = F2/A2 — equal pressure, generally unequal force." },
    { id: "8-34", topic: "8.4 Buoyancy", stem: "Find the buoyant force on an object that displaces 0.020 m³ of water.", choices: ["19.6 N", "98 N", "196 N", "1960 N"], correct: 2, explanation: "F_b = ρVg = (1000)(0.020)(9.8) = 196 N." },
    { id: "8-35", topic: "8.4 Buoyancy", stem: "What determines the magnitude of the buoyant force on a submerged object?", choices: ["The object's own weight.", "The weight of the fluid displaced by the object.", "The object's own density.", "The depth at which the object is submerged."], correct: 1, explanation: "Archimedes' Principle states that buoyant force equals the WEIGHT OF THE DISPLACED FLUID, not any property of the submerged object itself (its own weight, density, or the depth it's at)." },
    { id: "8-36", topic: "8.4 Buoyancy", stem: "An object is fully submerged in water, displacing 0.050 m³. Find the buoyant force acting on it.", choices: ["49 N", "245 N", "490 N", "980 N"], correct: 2, explanation: "F_b = ρVg = (1000)(0.050)(9.8) = 490 N." },
    { id: "8-37", topic: "8.4 Buoyancy", stem: "What condition must hold for an object to float at a stable, constant depth in a fluid?", choices: ["The object's density must exceed the fluid's density.", "The buoyant force must exactly equal the object's weight.", "The object must be fully submerged.", "The fluid's density must be zero."], correct: 1, explanation: "A floating object is in equilibrium — for it to remain at a constant depth (not sinking further or rising), the upward buoyant force must exactly balance the downward weight force." },
    { id: "8-38", topic: "8.4 Buoyancy", stem: "An object floats with 60% of its volume submerged. Find the ratio of the object's density to the fluid's density.", choices: ["0.40", "0.60", "1.0", "1.67"], correct: 1, explanation: "For a floating object, the fraction submerged equals the ratio ρ_object/ρ_fluid directly — so a 60% submerged fraction means ρ_object/ρ_fluid = 0.60." },
    { id: "8-39", topic: "8.4 Buoyancy", stem: "Ice has density approximately 920 kg/m³; water has density 1000 kg/m³. Find the fraction of a floating ice cube's volume that is submerged.", choices: ["8%", "80%", "92%", "100%"], correct: 2, explanation: "Fraction submerged = ρ_ice/ρ_water = 920/1000 = 0.92, or 92% — only about 8% of the ice's volume sits above the waterline." },
    { id: "8-40", topic: "8.4 Buoyancy", stem: "Under what condition does an object sink to the bottom of a fluid, rather than floating?", choices: ["When the object's density is less than the fluid's density.", "When the object's density exceeds the fluid's density.", "When the object's volume exceeds the fluid's volume.", "Objects never sink; they always float to some degree."], correct: 1, explanation: "An object sinks when its own density exceeds the fluid's density — in that case, even displacing its ENTIRE volume of fluid wouldn't generate enough buoyant force to balance its weight, so it continues sinking rather than reaching equilibrium." },
    { id: "8-41", topic: "8.4 Buoyancy", stem: "A block with mass 5.0 kg and density 500 kg/m³ floats in water (ρ=1000 kg/m³). Find the volume of the block that is submerged.", choices: ["0.0025 m³", "0.005 m³", "0.01 m³", "0.02 m³"], correct: 1, explanation: "Total volume: V=m/ρ=5.0/500=0.01 m³. Fraction submerged: ρ_object/ρ_fluid=500/1000=0.50. Submerged volume: (0.50)(0.01)=0.005 m³." },
    { id: "8-42", topic: "8.4 Buoyancy", stem: "How is an object's 'apparent weight' while submerged in a fluid related to its actual weight and the buoyant force?", choices: ["Apparent weight = actual weight + buoyant force.", "Apparent weight = actual weight − buoyant force.", "Apparent weight = buoyant force only.", "Apparent weight is unrelated to buoyant force."], correct: 1, explanation: "The buoyant force acts upward, partially supporting the object's weight — so the apparent weight (what a scale would read while the object is submerged) is the actual weight minus the buoyant force." },
    { id: "8-43", topic: "8.4 Buoyancy", stem: "An object weighs 50 N in air and has an apparent weight of 30 N while fully submerged in water. Find the buoyant force and the object's volume.", choices: ["Fb=20N; V≈0.00204 m³", "Fb=30N; V≈0.00306 m³", "Fb=80N; V≈0.00816 m³", "Fb=20N; V≈0.0392 m³"], correct: 0, explanation: "F_b = actual weight − apparent weight = 50−30 = 20 N. Then V = F_b/(ρg) = 20/(1000×9.8) ≈ 0.00204 m³." },
    { id: "8-44", topic: "8.4 Buoyancy", stem: "Why do objects appear to weigh less when submerged underwater, as measured by a scale?", choices: ["Gravity is weaker underwater.", "The buoyant force acts upward, partially supporting the object and reducing the force the scale needs to supply.", "Water absorbs some of the object's mass.", "This is an optical illusion with no real physical basis."], correct: 1, explanation: "The upward buoyant force genuinely helps support the object's weight, meaning the scale (or your hand, lifting something underwater) needs to supply less additional upward force — hence the object feels, and measures, lighter while submerged, even though its true weight (mg) hasn't changed at all." },
    { id: "8-45", topic: "8.5 Fluid Flow and Continuity", stem: "What does the continuity equation, A1v1=A2v2, physically represent?", choices: ["Conservation of energy for a flowing fluid.", "Conservation of mass (or volume, for an incompressible fluid) as it flows through a pipe.", "Conservation of momentum for a flowing fluid.", "A statement that fluid speed is always constant."], correct: 1, explanation: "The continuity equation is a direct statement of mass conservation: for an incompressible fluid with no leaks or branches, the volume flowing past any cross-section of the pipe per second must be the same everywhere along that pipe." },
    { id: "8-46", topic: "8.5 Fluid Flow and Continuity", stem: "Water flows at 3.0 m/s through a pipe with cross-sectional area 0.020 m². The pipe narrows to 0.0050 m². Find the speed in the narrower section.", choices: ["0.75 m/s", "3.0 m/s", "6.0 m/s", "12 m/s"], correct: 3, explanation: "A1v1=A2v2: (0.020)(3.0)=(0.0050)v2, so v2 = 0.060/0.0050 = 12 m/s." },
    { id: "8-47", topic: "8.5 Fluid Flow and Continuity", stem: "As a pipe narrows, what happens to the speed of an incompressible fluid flowing through it?", choices: ["The speed decreases.", "The speed increases.", "The speed stays the same.", "The fluid stops flowing entirely."], correct: 1, explanation: "By the continuity equation, a smaller cross-sectional area requires a higher speed to maintain the same volume flow rate (Av=constant) — this is exactly the garden-hose-nozzle effect." },
    { id: "8-48", topic: "8.5 Fluid Flow and Continuity", stem: "Fluid flows at 2.0 m/s through a 0.040 m² pipe section, then speeds up to 8.0 m/s in a narrower section. Find the narrower section's area.", choices: ["0.010 m²", "0.020 m²", "0.16 m²", "0.32 m²"], correct: 0, explanation: "A1v1=A2v2: (0.040)(2.0)=A2(8.0), so A2 = 0.080/8.0 = 0.010 m²." },
    { id: "8-49", topic: "8.5 Fluid Flow and Continuity", stem: "What is the term for the quantity Av (cross-sectional area times fluid speed) in a flowing fluid system?", choices: ["Mass flow rate.", "Volume flow rate.", "Pressure gradient.", "Kinetic energy density."], correct: 1, explanation: "Av is the volume flow rate — the volume of fluid passing a given cross-section per unit time — and the continuity equation states that this quantity stays constant throughout an unbranched pipe carrying an incompressible fluid." },
    { id: "8-50", topic: "8.5 Fluid Flow and Continuity", stem: "Water flows through a pipe of cross-sectional area 0.010 m² at 5.0 m/s. Find the volume flow rate.", choices: ["0.002 m³/s", "0.05 m³/s", "0.5 m³/s", "50 m³/s"], correct: 1, explanation: "Q = Av = (0.010)(5.0) = 0.05 m³/s." },
    { id: "8-51", topic: "8.5 Fluid Flow and Continuity", stem: "The continuity equation, A1v1=A2v2, relies on which assumption about the fluid?", choices: ["The fluid must be compressible.", "The fluid must be incompressible (constant density throughout).", "The fluid must be at rest.", "The fluid must have zero viscosity."], correct: 1, explanation: "The continuity equation as commonly written (equal volume flow rate) specifically assumes the fluid is incompressible — meaning its density stays constant, so conserving mass is equivalent to conserving volume." },
    { id: "8-52", topic: "8.5 Fluid Flow and Continuity", stem: "A pipe's radius is cut in half. Since cross-sectional area depends on r², how does the fluid's speed change in the narrower section (same volume flow rate)?", choices: ["It doubles.", "It stays the same.", "It quadruples.", "It is cut in half."], correct: 2, explanation: "Halving the radius cuts the cross-sectional area (A=πr²) to one-fourth its original value. Since Av must stay constant, quartering the area requires the speed to quadruple to compensate." },
    { id: "8-53", topic: "8.5 Fluid Flow and Continuity", stem: "Explain, at a physical level, why the continuity equation must hold for a steady flow of incompressible fluid through a pipe with no leaks.", choices: ["Because fluid particles can be created or destroyed as needed within the pipe.", "Because whatever volume of fluid enters one end of a pipe segment per second must exit the other end per second — fluid can't accumulate or vanish inside a pipe at steady state.", "Because pressure is always the same throughout the pipe.", "There is no physical justification; it's an empirical rule with exceptions."], correct: 1, explanation: "At steady-state flow with no leaks or branches, mass conservation demands that whatever fluid enters a section of pipe per second must also exit per second — otherwise fluid would be piling up or disappearing somewhere inside, which isn't physically possible for an incompressible fluid with nowhere else to go." },
    { id: "8-54", topic: "8.5 Fluid Flow and Continuity", stem: "A pipe has three sections with areas 0.030 m², 0.010 m², and 0.015 m² in sequence. If the fluid speed in the first section is 4.0 m/s, find the speed in the second and third sections.", choices: ["Second: 12 m/s; Third: 8.0 m/s", "Second: 8.0 m/s; Third: 12 m/s", "Second: 1.33 m/s; Third: 2.0 m/s", "Second: 12 m/s; Third: 12 m/s"], correct: 0, explanation: "Volume flow rate is constant throughout: Q=A1v1=(0.030)(4.0)=0.12 m³/s. Second section: v2=Q/A2=0.12/0.010=12 m/s. Third section: v3=Q/A3=0.12/0.015≈8.0 m/s." },
    { id: "8-55", topic: "8.5 Fluid Flow and Continuity", stem: "What happens to a fluid's speed when it flows from a narrow section of pipe into a much wider section?", choices: ["The speed increases.", "The speed decreases.", "The speed stays exactly the same.", "The fluid reverses direction."], correct: 1, explanation: "By the continuity equation, a larger cross-sectional area requires a lower speed to maintain the same volume flow rate — the fluid slows down as the pipe widens, the exact opposite of the narrowing case." },
    { id: "8-56", topic: "8.6 Bernoulli's Equation", stem: "What physical principle does Bernoulli's equation represent, applied to a flowing fluid?", choices: ["Conservation of mass.", "Conservation of energy.", "Conservation of momentum.", "Newton's Third Law."], correct: 1, explanation: "Bernoulli's equation is conservation of mechanical energy (per unit volume) applied to a flowing fluid — the pressure, kinetic energy, and gravitational potential energy terms are the fluid analogs of the same energy forms studied in Unit 3." },
    { id: "8-57", topic: "8.6 Bernoulli's Equation", stem: "Water (ρ=1000 kg/m³) flows through a horizontal pipe. At one point, P1=1.5×10⁵ Pa and v1=2.0 m/s. At a narrower point, v2=6.0 m/s. Find P2.", choices: ["1.18×10⁵ Pa", "1.34×10⁵ Pa", "1.50×10⁵ Pa", "1.66×10⁵ Pa"], correct: 1, explanation: "Since the pipe is horizontal, the height terms cancel: P1+½ρv1²=P2+½ρv2². Solving: P2 = P1+½ρ(v1²−v2²) = 1.5×10⁵+½(1000)(4−36) = 1.5×10⁵+½(1000)(−32) = 1.5×10⁵−16,000 = 1.34×10⁵ Pa." },
    { id: "8-58", topic: "8.6 Bernoulli's Equation", stem: "Bernoulli's equation is often described as the fluid version of which broader physics principle?", choices: ["Newton's First Law.", "Conservation of mechanical energy.", "Conservation of angular momentum.", "The impulse-momentum theorem."], correct: 1, explanation: "Bernoulli's equation is directly built from conservation of mechanical energy, with each term (pressure, ½ρv², ρgh) representing an energy-per-unit-volume analog of familiar concepts: pressure energy, kinetic energy, and gravitational potential energy." },
    { id: "8-59", topic: "8.6 Bernoulli's Equation", stem: "Water (ρ=1000 kg/m³) flows horizontally, speeding up from 2.0 m/s to 6.0 m/s. Find the resulting pressure drop.", choices: ["4,000 Pa", "8,000 Pa", "16,000 Pa", "32,000 Pa"], correct: 2, explanation: "For horizontal flow, ΔP = ½ρ(v2²−v1²) = ½(1000)(36−4) = ½(1000)(32) = 16,000 Pa." },
    { id: "8-60", topic: "8.6 Bernoulli's Equation", stem: "According to the Bernoulli effect, how does pressure compare between a slow-moving region and a fast-moving region of the same horizontal fluid flow?", choices: ["The fast-moving region has higher pressure.", "The fast-moving region has lower pressure.", "Pressure is always the same regardless of speed.", "The comparison depends on the fluid's density."], correct: 1, explanation: "This is the core (and often counterintuitive) result of Bernoulli's equation: faster-moving fluid has LOWER pressure, not higher — exactly the effect that generates lift on an airplane wing and pulls a shower curtain inward when the water flow speeds up the air around it." },
    { id: "8-61", topic: "8.6 Bernoulli's Equation", stem: "In a horizontal pipe, P1=2.0×10⁵ Pa, v1=1.0 m/s, and P2=1.8×10⁵ Pa. Using ρ=1000 kg/m³, find v2.", choices: ["3.0 m/s", "4.0 m/s", "6.4 m/s", "20.1 m/s"], correct: 2, explanation: "P1+½ρv1²=P2+½ρv2². Rearranging: v2²=v1²+2(P1−P2)/ρ = 1.0+2(20,000)/1000 = 1.0+40 = 41, so v2=√41≈6.4 m/s." },
    { id: "8-62", topic: "8.6 Bernoulli's Equation", stem: "What does Bernoulli's equation reduce to for a fluid completely at rest (v=0 everywhere)?", choices: ["P = 0", "P1=P2+ρgh only", "P + ρgh = constant — i.e., P=P0+ρgh, the static pressure-depth relationship from Section 8.2.", "Bernoulli's equation has no meaning for a fluid at rest."], correct: 2, explanation: "Setting v=0 removes the ½ρv² term entirely, leaving P+ρgh=constant — which is exactly the hydrostatic pressure formula, P=P0+ρgh, from Section 8.2. This shows that the static pressure-depth relationship is really just a special case of the more general Bernoulli equation." },
    { id: "8-63", topic: "8.6 Bernoulli's Equation", stem: "A large open tank has a small hole 5.0 m below the water's surface. Using Bernoulli's equation (with the tank's surface speed treated as negligible and both the surface and hole exposed to atmospheric pressure), find the water's exit speed from the hole.", choices: ["7.0 m/s", "9.9 m/s", "14 m/s", "49 m/s"], correct: 1, explanation: "With P1=P2 (both exposed to atmosphere) and v1≈0 (large tank surface): ρgh1 = ½ρv2²+ρgh2, which simplifies to v2=√(2gΔh) = √(2×9.8×5.0) = √98 ≈ 9.9 m/s — this specific result is often called Torricelli's theorem, and notice it's identical to the speed of an object simply falling from that same height." },
    { id: "8-64", topic: "8.6 Bernoulli's Equation", stem: "Explain, using Bernoulli's equation, why fluid pressure is lower in a narrow section of horizontal pipe where the fluid moves faster.", choices: ["The narrow section physically blocks pressure from reaching that point.", "Since P+½ρv²+ρgh must stay constant along the flow, and ρgh is unchanged (horizontal pipe), an increase in the ½ρv² term must be offset by a decrease in the P term.", "Narrow pipes have less fluid, so there's less pressure to measure.", "This effect only occurs in vertical pipes, not horizontal ones."], correct: 1, explanation: "Bernoulli's equation requires the total (P+½ρv²+ρgh) to remain constant along a streamline. In a horizontal pipe, ρgh doesn't change, so any increase in kinetic energy (½ρv², from the fluid speeding up in the narrower section) must be balanced by a corresponding decrease in pressure — a direct energy-conservation tradeoff." },
    { id: "8-65", topic: "8.6 Bernoulli's Equation", stretch: true, stem: "Stretch — beyond typical AP difficulty: Water (ρ=1000 kg/m³) flows through a pipe that both narrows AND rises in elevation. At point 1 (lower, wider section): P1=2.0×10⁵ Pa, v1=2.0 m/s, h1=0 m. At point 2 (higher, narrower section): v2=8.0 m/s, h2=3.0 m. Find P2.", choices: ["1.21×10⁵ Pa", "1.41×10⁵ Pa", "1.66×10⁵ Pa", "1.94×10⁵ Pa"], correct: 1, explanation: "Apply the full Bernoulli equation: P1+½ρv1²+ρgh1 = P2+½ρv2²+ρgh2. Left side: 2.0×10⁵+½(1000)(2.0)²+0 = 2.0×10⁵+2000 = 202,000 Pa. Right side without P2: ½(1000)(8.0)²+(1000)(9.8)(3.0) = 32,000+29,400 = 61,400 Pa. Solving: P2 = 202,000−61,400 = 140,600 Pa ≈ 1.41×10⁵ Pa. This problem requires tracking all three Bernoulli terms simultaneously — the speed increase and the height increase both act to lower pressure here, compounding the total pressure drop between the two points." },
  ],
};

const FRQ_CONTENT = {
  1: [
    {
      id: "frq-1-1",
      source: "Original",
      title: "Reading and Reasoning from a Velocity-Time Graph",
      prompt: "A v-t graph shows the following motion of a cart on a track, taking rightward as positive: from t=0 to t=3s, velocity increases in a straight line from 0 to 12 m/s. From t=3s to t=7s, velocity stays constant at 12 m/s. From t=7s to t=9s, velocity decreases in a straight line from 12 m/s to 0 m/s. (a) Find the cart's acceleration during each of the three phases. (b) Find the total displacement of the cart over the full 9 s. (c) Sketch the corresponding a-t graph for the full 9 s. (d) A student claims the cart's average velocity over the full 9 s equals the average of its velocity at t=0, t=3, and t=9. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the acceleration during each phase.", steps: [
          "Recall that acceleration is the slope of a v-t graph.",
          "Phase 1 (0–3s): slope = (12−0)/(3−0) = 4.0 m/s².",
          "Phase 2 (3–7s): velocity is constant, so slope = 0 m/s².",
          "Phase 3 (7–9s): slope = (0−12)/(9−7) = −6.0 m/s²."
        ]},
        { label: "(b)", ask: "Find the total displacement.", steps: [
          "Recall that displacement equals the area under a v-t graph.",
          "Phase 1 is a triangle: ½(3)(12) = 18 m.",
          "Phase 2 is a rectangle: (4)(12) = 48 m.",
          "Phase 3 is a triangle: ½(2)(12) = 12 m.",
          "Sum all three areas: 18 + 48 + 12 = 78 m total displacement."
        ]},
        { label: "(c)", ask: "Sketch the a-t graph.", steps: [
          "For 0–3s, draw a horizontal line at a = +4.0 m/s² (matching Phase 1's constant slope).",
          "For 3–7s, draw a horizontal line at a = 0 m/s² (matching Phase 2's zero slope).",
          "For 7–9s, draw a horizontal line at a = −6.0 m/s² (matching Phase 3's constant slope).",
          "Include vertical jumps between each segment, since acceleration changes abruptly at t=3s and t=7s."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall the correct definition of average velocity: total displacement divided by total time, v_avg = Δx/Δt = 78/9 ≈ 8.67 m/s.",
          "Compute the student's proposed alternative: the average of the velocities at t=0 (0 m/s), t=3 (12 m/s), and t=9 (0 m/s) is (0+12+0)/3 = 4.0 m/s.",
          "Compare the two results: 8.67 m/s ≠ 4.0 m/s, so the student's claim is INCORRECT.",
          "Explain why: simply averaging a few sampled velocity values ignores how long the cart spent at each velocity — the correct method (area under the curve, divided by total time) properly weights each phase by its duration, which a simple average of snapshot values does not."
        ]}
      ]
    },
    {
      id: "frq-1-2",
      source: "Original",
      title: "Two-Phase Motion of a Sprinter",
      prompt: "A sprinter starts from rest and accelerates uniformly at 4.0 m/s² for 2.5 s, then continues at the velocity reached for the remainder of a 100 m race. (a) Find the sprinter's velocity at the end of the acceleration phase. (b) Find the distance covered during the acceleration phase. (c) Find the total time required to complete the 100 m race. (d) A coach claims the sprinter's average velocity for the entire race is simply the average of the sprinter's velocity at the start and at the finish. Evaluate this claim, referencing your answers above.",
      parts: [
        { label: "(a)", ask: "Find the velocity at the end of the acceleration phase.", steps: [
          "Apply v = v0 + at with v0 = 0: v = 0 + (4.0)(2.5) = 10 m/s."
        ]},
        { label: "(b)", ask: "Find the distance covered during acceleration.", steps: [
          "Apply Δx = v0t + ½at² with v0 = 0: Δx = ½(4.0)(2.5)² = ½(4.0)(6.25) = 12.5 m."
        ]},
        { label: "(c)", ask: "Find the total race time.", steps: [
          "Find the remaining distance after the acceleration phase: 100 − 12.5 = 87.5 m.",
          "This remaining distance is covered at the constant velocity found in part (a), 10 m/s: t = Δx/v = 87.5/10 = 8.75 s.",
          "Add the two phases together: total time = 2.5 s (acceleration phase) + 8.75 s (constant velocity phase) = 11.25 s."
        ]},
        { label: "(d)", ask: "Evaluate the coach's claim.", steps: [
          "Compute the coach's proposed value: average of the start velocity (0 m/s) and finish velocity (10 m/s) is (0+10)/2 = 5.0 m/s.",
          "Compute the true average velocity using the actual definition: v_avg = total displacement/total time = 100/11.25 ≈ 8.9 m/s.",
          "Compare: 5.0 m/s ≠ 8.9 m/s, so the coach's claim is INCORRECT.",
          "Explain why: the simple start-and-finish average (Δx=½(v0+v)t) is only valid when acceleration is constant across the ENTIRE interval being averaged — here, the sprinter spends most of the race (8.75 of 11.25 s) at constant velocity rather than accelerating, so that shortcut formula doesn't apply to the race as a whole."
        ]}
      ]
    },
    {
      id: "frq-1-3",
      source: "Original",
      title: "Comparing Two Projectiles Launched from a Cliff",
      prompt: "Two balls are launched simultaneously from the edge of a cliff of height h. Ball A is launched horizontally with speed v0. Ball B is simply dropped from rest at the same instant, from the same point. (a) Compare the time each ball takes to reach the ground, and justify. (b) Derive an expression for Ball A's total horizontal distance traveled, in terms of v0, h, and g. (c) A student claims that Ball A, since it moves faster overall, must experience a greater acceleration than Ball B during the flight. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Compare the fall times of Ball A and Ball B.", steps: [
          "Recognize that horizontal and vertical motion are independent — Ball A's horizontal launch speed has no effect on its vertical motion.",
          "Note that both balls start with the same initial VERTICAL velocity: zero (Ball A moves purely horizontally at launch; Ball B starts entirely at rest).",
          "Since both balls fall the same height h under the same acceleration g, starting from the same vertical velocity, they take exactly the SAME amount of time to reach the ground."
        ]},
        { label: "(b)", ask: "Derive Ball A's horizontal distance.", steps: [
          "First find the time of flight using the vertical motion: h = ½gt², solving for t gives t = √(2h/g).",
          "Apply the horizontal motion, which is entirely independent and at constant velocity: Δx = v0·t.",
          "Substitute the time found above: Δx = v0·√(2h/g)."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim about acceleration.", steps: [
          "Recall that acceleration due to gravity, g, acts identically on every object in free fall, regardless of horizontal motion, mass, or overall speed.",
          "Note that Ball A's greater overall (resultant) speed comes entirely from its horizontal velocity component, which never changes and has nothing to do with acceleration at all.",
          "Conclude the student's claim is INCORRECT: both balls experience the exact same vertical acceleration, g, throughout the flight — overall speed and acceleration are separate quantities, and a faster overall speed doesn't imply a larger acceleration."
        ]}
      ]
    },
  ],
  2: [
    {
      id: "frq-2-1",
      source: "Original",
      title: "An Atwood Machine with Unequal Masses",
      prompt: "Two blocks, mass m1 = 8.0 kg and m2 = 3.0 kg, hang from opposite ends of a light string over a frictionless, massless pulley. The system is released from rest. (a) Draw a free-body diagram for each block. (b) Derive an expression for the system's acceleration in terms of m1, m2, and g, then calculate its numerical value. (c) Calculate the tension in the string. (d) A student claims the tension must equal the average of the two weights, (m1g+m2g)/2. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Draw free-body diagrams for each block.", steps: [
          "For m1 (the heavier block, which will accelerate downward): draw two forces — gravity m1g pointing down, and tension T pointing up, with the down arrow drawn longer since m1 accelerates downward.",
          "For m2 (the lighter block, which will accelerate upward): draw two forces — gravity m2g pointing down, and tension T pointing up, with the up arrow (tension) drawn longer since m2 accelerates upward.",
          "Note that the tension arrows on both diagrams should be drawn the same length as each other, since it's the same string and the pulley is ideal (frictionless, massless)."
        ]},
        { label: "(b)", ask: "Derive and calculate the system's acceleration.", steps: [
          "Apply Newton's Second Law to m1, taking downward as positive for this block (since it falls): m1g − T = m1a.",
          "Apply Newton's Second Law to m2, taking upward as positive for this block (since it rises): T − m2g = m2a.",
          "Add the two equations together, which eliminates T: m1g − m2g = m1a + m2a, so a = g(m1−m2)/(m1+m2).",
          "Substitute the given values: a = 9.8(8.0−3.0)/(8.0+3.0) = 9.8(5.0)/11 ≈ 4.45 m/s²."
        ]},
        { label: "(c)", ask: "Calculate the tension.", steps: [
          "Substitute the acceleration found above into either individual equation — using the m2 equation: T = m2(g+a) = 3.0(9.8+4.45) = 3.0(14.25) ≈ 42.8 N.",
          "Check using the m1 equation as a consistency check: T = m1(g−a) = 8.0(9.8−4.45) = 8.0(5.35) ≈ 42.8 N — matches, confirming the calculation."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim about tension.", steps: [
          "Compute the student's proposed value: (m1g+m2g)/2 = (78.4+29.4)/2 = 107.8/2 = 53.9 N.",
          "Compare to the actual calculated tension: 42.8 N ≠ 53.9 N, so the student's claim is INCORRECT.",
          "Explain why: the simple average of the two weights would only be the correct tension if the system were NOT accelerating (i.e., if the two masses were equal, giving a=0) — since this system does accelerate, the tension has to be somewhere between the two individual weights, but it isn't necessarily their exact average once acceleration enters the picture."
        ]}
      ]
    },
    {
      id: "frq-2-2",
      source: "Original",
      title: "A Block Pulled Across a Rough Floor",
      prompt: "A 12 kg block sits on a horizontal floor with coefficient of kinetic friction μ_k = 0.25. A rope pulls the block at an angle of 30° above horizontal with tension 50 N (sin30°=0.50, cos30°≈0.87). (a) Draw a free-body diagram of the block. (b) Find the normal force on the block. (c) Find the block's acceleration. (d) A student claims that increasing the pull angle (while keeping tension at 50 N) would always increase the block's acceleration, since more force would be applied. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Draw the free-body diagram.", steps: [
          "Draw four forces on the block: gravity (mg, straight down), normal force (F_N, straight up), tension (T, at 30° above horizontal), and kinetic friction (opposing the block's motion, horizontal).",
          "Note that the tension should be drawn as a single arrow at the stated angle, which will need to be broken into horizontal and vertical components for the calculation."
        ]},
        { label: "(b)", ask: "Find the normal force.", steps: [
          "Recognize that the vertical component of tension (T·sin30°) pulls upward, partially supporting the block's weight — so the floor needs to supply less normal force than mg alone.",
          "Sum vertical forces (net = 0, since the block doesn't accelerate vertically): F_N + T·sin30° − mg = 0.",
          "Solve: F_N = mg − T·sin30° = (12)(9.8) − 50(0.50) = 117.6 − 25 = 92.6 N."
        ]},
        { label: "(c)", ask: "Find the block's acceleration.", steps: [
          "Find kinetic friction using the normal force just found: f_k = μ_k·F_N = 0.25(92.6) ≈ 23.15 N.",
          "Find the horizontal component of tension: T·cos30° = 50(0.87) = 43.5 N.",
          "Sum horizontal forces: F_net = T·cos30° − f_k = 43.5 − 23.15 ≈ 20.35 N.",
          "Apply Newton's Second Law: a = F_net/m = 20.35/12 ≈ 1.7 m/s²."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim about increasing the angle.", steps: [
          "Recognize the competing effects of increasing angle at fixed tension: the horizontal component (T·cosθ) DECREASES as θ increases, providing less forward pull, while the vertical component (T·sinθ) INCREASES, reducing the normal force and therefore reducing friction.",
          "Note these two effects push acceleration in OPPOSITE directions — less forward pull tends to decrease acceleration, while less friction tends to increase it — so the net effect depends on the specific numbers, not a simple 'more force always helps' assumption.",
          "Conclude the student's claim is INCORRECT as a blanket statement: increasing the angle does not always increase acceleration, since at large enough angles, the loss of horizontal pull can outweigh the reduction in friction, and there is even a well-defined angle that maximizes acceleration rather than acceleration simply increasing without limit."
        ]}
      ]
    },
    {
      id: "frq-2-3",
      source: "Original",
      title: "Comparing Force Pairs and Net Force",
      prompt: "A 1500 kg car pushes against a stalled 1000 kg car, both initially at rest, accelerating the pair together at 1.2 m/s² across a frictionless surface (idealized for this problem). (a) Find the net force on the combined two-car system. (b) Find the force the pushing car exerts on the stalled car. (c) A student claims that since the pushing car is more massive, it must exert a larger force on the stalled car than the stalled car exerts back on it. Evaluate this claim, and reconcile it with your answer to part (b).",
      parts: [
        { label: "(a)", ask: "Find the net force on the combined system.", steps: [
          "Treat both cars together as a single system with total mass 1500+1000=2500 kg.",
          "Apply Newton's Second Law to the whole system: F_net = m_total × a = 2500 × 1.2 = 3000 N.",
          "This net force is the internal engine/driving force of the pushing car, since the surface is frictionless and there's no other external horizontal force on the two-car system."
        ]},
        { label: "(b)", ask: "Find the force the pushing car exerts on the stalled car.", steps: [
          "Isolate just the stalled (1000 kg) car as its own system — the only horizontal force acting on it is the push from the other car.",
          "Apply Newton's Second Law to just this car, using the same acceleration (since they move together): F = m × a = 1000 × 1.2 = 1200 N.",
          "This 1200 N is the force the pushing car exerts on the stalled car."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim and reconcile with part (b).", steps: [
          "Recall Newton's Third Law: whatever force the pushing car exerts on the stalled car, the stalled car exerts an equal and opposite force back on the pushing car — regardless of either car's mass.",
          "State the reconciliation directly: the force found in part (b), 1200 N, is exerted BY the pushing car ON the stalled car; by Newton's Third Law, the stalled car pushes back on the pushing car with that exact same 1200 N, just in the opposite direction.",
          "Conclude the student's claim is INCORRECT: mass has no bearing on the magnitude of a Third Law force pair — only on how much each car accelerates in response to that shared force (a = F/m), which is precisely why the lighter stalled car and the heavier pushing car end up sharing the same acceleration only because they're rigidly in contact, not because the forces on them differ."
        ]}
      ]
    },
  ],
  3: [
    {
      id: "frq-3-1",
      source: "Original",
      title: "A Block Launched by a Spring Up a Rough Ramp",
      prompt: "A 2.0 kg block is pressed against a spring (k = 400 N/m), compressing it 0.20 m, on a horizontal frictionless section of track. The block is released, leaves the spring, and then travels up a ramp with friction (μ_k = 0.25) that rises to a height of 1.5 m. (a) Find the block's speed just after leaving the spring. (b) Find the block's kinetic energy at the top of the 1.5 m ramp, accounting for both the height gained and friction, given that the ramp's incline is 30° (so the distance traveled along the ramp is 3.0 m) (cos30°≈0.87). (c) A student claims that since energy is always conserved, the block's kinetic energy at the top must equal its kinetic energy right after leaving the spring. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the block's speed just after leaving the spring.", steps: [
          "Recognize that on the frictionless section, all elastic PE converts to KE: ½kx² = ½mv².",
          "Substitute known values: ½(400)(0.20)² = ½(2.0)v², so 8.0 = 1.0v².",
          "Solve: v² = 8.0, so v = √8.0 ≈ 2.83 m/s."
        ]},
        { label: "(b)", ask: "Find the block's kinetic energy at the top of the ramp.", steps: [
          "Find the block's kinetic energy right after leaving the spring: KE = ½kx² = 8.0 J (from part a, before taking the square root).",
          "Find the normal force on the ramp: F_N = mg·cos30° = (2.0)(9.8)(0.87) ≈ 17.05 N.",
          "Find the friction force: f_k = μ_k·F_N = 0.25(17.05) ≈ 4.26 N.",
          "Find the work done by friction over the 3.0 m ramp distance: W_friction = −f_k × d = −(4.26)(3.0) ≈ −12.8 J.",
          "Find the height gained and the resulting PE increase: PE gained = mgh = (2.0)(9.8)(1.5) = 29.4 J.",
          "Apply the energy balance: KE_top = KE_bottom − ΔPE − |W_friction| = 8.0 − 29.4 − 12.8 = −34.2 J.",
          "Recognize this negative result means the block does NOT actually make it to the top of the ramp — it runs out of kinetic energy partway up, since it started with far less energy (8.0 J) than the 29.4 J needed to climb the ramp alone, even before considering friction."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Recall the actual condition for conservation of MECHANICAL energy specifically: it only holds when no non-conservative force does work on the system.",
          "Note that friction acts on the ramp portion of this problem, doing negative work and removing mechanical energy from the block.",
          "Conclude the student's claim is INCORRECT: while TOTAL energy (including heat generated by friction) is indeed always conserved, mechanical energy (KE+PE) specifically is NOT conserved here, since friction converts some of it into heat — this is exactly why the block's kinetic energy at the top (or wherever it stops) is less than what simple conservation of mechanical energy alone would predict."
        ]}
      ]
    },
    {
      id: "frq-3-2",
      source: "Original",
      title: "Comparing Work, Energy, and Power for Two Ramps",
      prompt: "Two frictionless ramps, Ramp A and Ramp B, both rise to the same height of 4.0 m, but Ramp A is twice as long as Ramp B (meaning Ramp A has a shallower incline). Identical 3.0 kg blocks are released from rest at the top of each ramp. (a) Compare the blocks' speeds at the bottom of each ramp, and justify using energy reasoning. (b) Compare the total work done by gravity on each block over the full trip down its ramp. (c) A student claims that since Ramp A is longer, gravity must do more total work on the block sliding down Ramp A. Evaluate this claim. (d) Compare the average power delivered by gravity to each block, given that the block on the longer Ramp A takes more time to reach the bottom than the block on Ramp B.",
      parts: [
        { label: "(a)", ask: "Compare the final speeds and justify.", steps: [
          "Recall that for a frictionless ramp, final speed depends only on the height dropped: v = √(2gh), completely independent of the ramp's length or angle.",
          "Since both ramps have the identical height of 4.0 m, both blocks reach the bottom with the exact same speed: v = √(2×9.8×4.0) = √78.4 ≈ 8.85 m/s.",
          "Justify: mechanical energy is conserved on both frictionless ramps, and since PE = mgh depends only on height (not path), both blocks convert the identical amount of potential energy into kinetic energy, yielding identical final speeds despite the different ramp lengths."
        ]},
        { label: "(b)", ask: "Compare the total work done by gravity on each block.", steps: [
          "Recall that work done by gravity over a vertical drop depends only on the mass and the height dropped: W_gravity = mgh, regardless of the path's length or shape.",
          "Since both blocks have the same mass (3.0 kg) and drop the same height (4.0 m), gravity does the exact same amount of work on both: W = (3.0)(9.8)(4.0) = 117.6 J for each."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Recall that gravity's work depends only on the vertical component of displacement (the height dropped), not on the total path length traveled.",
          "Note that Ramp A being longer only means the block travels farther HORIZONTALLY per unit of height dropped — it doesn't change the net vertical drop, which is the same 4.0 m for both ramps.",
          "Conclude the student's claim is INCORRECT: gravity does the same total work (117.6 J) on both blocks, since work by gravity depends only on height dropped, not on the ramp's length."
        ]},
        { label: "(d)", ask: "Compare the average power delivered by gravity to each block.", steps: [
          "Recall that average power is total work divided by total time: P_avg = W/t.",
          "Note that both blocks receive the same total work from gravity (117.6 J, from part b), but the block on the longer Ramp A takes MORE time to reach the bottom.",
          "Conclude that since P_avg = W/t with equal W but greater t for Ramp A, the average power delivered by gravity to the Ramp A block is LOWER than the average power delivered to the Ramp B block — the same total energy transfer, spread out over more time, means a lower rate of transfer."
        ]}
      ]
    },
    {
      id: "frq-3-3",
      source: "Original",
      title: "A Pendulum Released from Rest",
      prompt: "A 1.5 kg pendulum bob is pulled to the side so it rises 0.80 m above its lowest point, then released from rest, swinging freely with negligible air resistance. (a) Find the bob's speed at the lowest point of its swing. (b) Find the bob's kinetic energy and potential energy when it has risen back to a height of 0.30 m on the opposite side of the swing (using the lowest point as the PE reference). (c) A student claims that since the bob started and will eventually return to 0.80 m on the original side, its speed everywhere along the swing at a given height must be the same regardless of which side of the swing it's on. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the bob's speed at the lowest point.", steps: [
          "Apply conservation of mechanical energy between the release point and the lowest point: mgh = ½mv² (mass cancels).",
          "Solve for v: v = √(2gh) = √(2×9.8×0.80) = √15.68 ≈ 3.96 m/s."
        ]},
        { label: "(b)", ask: "Find the KE and PE at height 0.30 m.", steps: [
          "Find PE at this height directly: PE = mgh = (1.5)(9.8)(0.30) = 4.41 J.",
          "Find total mechanical energy from the initial release point (which is conserved throughout, since air resistance is negligible): E_total = mgh_initial = (1.5)(9.8)(0.80) = 11.76 J.",
          "Find KE at the 0.30 m height using conservation: KE = E_total − PE = 11.76 − 4.41 = 7.35 J."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Recall that mechanical energy conservation relates total energy (KE+PE) to a FIXED total value throughout the swing — and since PE depends only on height, not on which side of the swing the bob is on, KE at a given height is also the same on both sides.",
          "Confirm this using the symmetry of the situation: since there's no friction or air resistance to remove energy, the bob's total mechanical energy never changes, and PE at 0.30 m is identical whether measured on the left or right side of the swing (same height, same reference point).",
          "Conclude the student's claim is CORRECT: at any given height, the bob's kinetic energy — and therefore its speed — is the same regardless of which side of the swing it's on, precisely because energy conservation depends only on height, not on horizontal position or direction of motion."
        ]}
      ]
    },
  ],
  4: [
    {
      id: "frq-4-1",
      source: "Original",
      title: "A Ballistic Pendulum",
      prompt: "A 0.020 kg bullet is fired horizontally into a stationary 4.0 kg wooden block suspended by strings (a ballistic pendulum), embedding itself in the block. The block-and-bullet system then swings upward, rising 0.10 m above its starting height. (a) Find the combined velocity of the block and bullet immediately after impact, using energy conservation on the swing. (b) Find the bullet's original speed before impact, using momentum conservation. (c) Find the kinetic energy lost during the bullet's collision with the block. (d) A student claims that since momentum is conserved in this collision, kinetic energy must be conserved too. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the combined velocity right after impact.", steps: [
          "Recognize that once the bullet is embedded, the swing itself is governed by energy conservation (no friction assumed), converting the combined system's KE into PE as it rises.",
          "Apply conservation of mechanical energy for the swing: ½(m_block+m_bullet)v² = (m_block+m_bullet)gh, so v = √(2gh) (mass cancels).",
          "Solve: v = √(2×9.8×0.10) = √1.96 = 1.4 m/s."
        ]},
        { label: "(b)", ask: "Find the bullet's original speed.", steps: [
          "Apply conservation of momentum to the collision itself (bullet embedding in block): m_bullet·v_bullet = (m_bullet+m_block)·v_combined.",
          "Substitute known values: (0.020)v_bullet = (4.02)(1.4).",
          "Solve: v_bullet = (4.02)(1.4)/0.020 = 5.628/0.020 ≈ 281 m/s."
        ]},
        { label: "(c)", ask: "Find the kinetic energy lost in the collision.", steps: [
          "Find KE just before the collision (bullet only, block still at rest): KE_before = ½(0.020)(281)² ≈ 790 J.",
          "Find KE just after the collision (combined mass moving at 1.4 m/s): KE_after = ½(4.02)(1.4)² ≈ 3.9 J.",
          "Find the difference: KE_lost = 790 − 3.9 ≈ 786 J — the vast majority of the bullet's original kinetic energy is lost to heat and deformation during the embedding process."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall that momentum conservation and kinetic energy conservation are two separate, independent conditions — momentum is conserved in EVERY isolated collision, while kinetic energy conservation is the specific, additional hallmark of an elastic collision only.",
          "Note that part (c) explicitly found a large kinetic energy loss (≈786 J) in this collision, even though momentum was exactly conserved throughout (that's literally how the collision was solved in part b).",
          "Conclude the student's claim is INCORRECT: this is a clear numerical demonstration that momentum conservation does NOT imply kinetic energy conservation — a bullet embedding in a block is a textbook example of a perfectly inelastic (not elastic) collision."
        ]}
      ]
    },
    {
      id: "frq-4-2",
      source: "Original",
      title: "Two Carts Colliding, Elastic vs. Inelastic",
      prompt: "A 2.0 kg cart moving at 6.0 m/s approaches a stationary 2.0 kg cart on a frictionless track. Two separate scenarios are considered: Scenario 1, where the carts collide elastically, and Scenario 2, where the carts collide and stick together. (a) Find the final velocity (or velocities) of the carts in Scenario 1. (b) Find the final velocity of the carts in Scenario 2. (c) Compare the total kinetic energy after the collision in each scenario. (d) A student claims that since both scenarios start with identical carts and identical initial conditions, the final momentum of the system must be different in each case, since the collisions are physically different. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the final velocities in the elastic collision.", steps: [
          "Recognize this as the classic equal-mass elastic collision case: the moving cart and stationary cart, having identical mass, will fully exchange velocities.",
          "Apply the result directly: the first (2.0 kg) cart comes to rest at 0 m/s; the second (2.0 kg) cart moves off at the first cart's original velocity, 6.0 m/s.",
          "Verify with momentum: before, p=(2.0)(6.0)=12 kg·m/s; after, p=(2.0)(0)+(2.0)(6.0)=12 kg·m/s — consistent."
        ]},
        { label: "(b)", ask: "Find the final velocity in the perfectly inelastic collision.", steps: [
          "Apply conservation of momentum with the combined-mass formula: (2.0)(6.0)+(2.0)(0) = (4.0)v_f.",
          "Solve: 12 = 4.0v_f, so v_f = 3.0 m/s for both carts, now moving together."
        ]},
        { label: "(c)", ask: "Compare total kinetic energy after each scenario.", steps: [
          "Find KE in Scenario 1 (elastic): KE_after = ½(2.0)(0)² + ½(2.0)(6.0)² = 0 + 36 = 36 J — matching the initial KE of ½(2.0)(6.0)² = 36 J exactly, as expected for an elastic collision.",
          "Find KE in Scenario 2 (perfectly inelastic): KE_after = ½(4.0)(3.0)² = 18 J.",
          "Compare: Scenario 1 retains all 36 J of kinetic energy; Scenario 2 retains only 18 J, having lost 18 J to heat, sound, and deformation as the carts stuck together."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim about final momentum.", steps: [
          "Recall that momentum conservation depends only on the system being isolated (no net external force) — it holds regardless of whether the collision itself is elastic or inelastic.",
          "Compute the final momentum in both scenarios directly: Scenario 1: (2.0)(0)+(2.0)(6.0)=12 kg·m/s. Scenario 2: (4.0)(3.0)=12 kg·m/s — identical in both cases.",
          "Conclude the student's claim is INCORRECT: total momentum after the collision is exactly 12 kg·m/s in BOTH scenarios, matching the initial momentum in both cases — it's kinetic energy, not momentum, that differs between an elastic and inelastic outcome starting from the same initial conditions."
        ]}
      ]
    },
    {
      id: "frq-4-3",
      source: "Original",
      title: "An Explosion and the Motion of the Center of Mass",
      prompt: "A 6.0 kg object moves at a constant 4.0 m/s in deep space (no external forces). It suddenly explodes into two fragments: a 2.0 kg fragment and a 4.0 kg fragment. Immediately after the explosion, the 2.0 kg fragment is measured moving at 10 m/s in the same direction as the original motion. (a) Find the velocity of the 4.0 kg fragment immediately after the explosion. (b) Find the velocity of the system's center of mass immediately after the explosion, and compare it to the object's velocity before the explosion. (c) A student claims that since the explosion clearly changed the individual fragments' velocities, it must also have changed the total momentum of the system. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the velocity of the 4.0 kg fragment.", steps: [
          "Find the total momentum before the explosion: p_total = mv = (6.0)(4.0) = 24 kg·m/s.",
          "Apply conservation of momentum to the explosion: p_total,before = p_total,after, so (2.0)(10) + (4.0)v₂ = 24.",
          "Solve: 20 + 4.0v₂ = 24, so 4.0v₂ = 4.0, giving v₂ = 1.0 m/s (same direction as the original motion)."
        ]},
        { label: "(b)", ask: "Find v_cm after the explosion and compare to the velocity before.", steps: [
          "Compute v_cm after the explosion using both fragments: v_cm = [(2.0)(10)+(4.0)(1.0)]/(6.0) = (20+4.0)/6.0 = 24/6.0 = 4.0 m/s.",
          "Compare to the object's velocity before the explosion: 4.0 m/s — exactly the same.",
          "Explain the match: since the explosion is entirely an internal event (no external force acts on the two-fragment system), it cannot change the system's total momentum or total mass, and therefore cannot change v_cm = p_total/m_total at all."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Recall that total momentum and individual object velocities are two different things — the explosion clearly redistributes velocity unevenly between the two fragments, but that redistribution doesn't require the SUM (total momentum) to change.",
          "Point to the direct numerical evidence: momentum before the explosion was 24 kg·m/s, and momentum after (computed in part a) was also (2.0)(10)+(4.0)(1.0)=24 kg·m/s — unchanged, despite each individual fragment's velocity being very different from the original object's velocity.",
          "Conclude the student's claim is INCORRECT: internal forces (like an explosion) can dramatically redistribute velocity among the pieces of a system without changing the system's TOTAL momentum at all — this is exactly the distinction between an object's individual motion and a system's collective, conserved momentum."
        ]}
      ]
    },
  ],
  5: [
    {
      id: "frq-5-1",
      source: "Original",
      title: "A Ladder Leaning Against a Wall",
      prompt: "A 4.0 m uniform ladder, weight 150 N, leans against a frictionless wall, with its base on the ground 1.6 m from the wall (so the ladder makes an angle with the ground; the base is held in place by friction). The ladder's weight acts at its center (2.0 m along its length). (a) Draw a free-body diagram of the ladder, labeling all forces. (b) Using torques about the base of the ladder, find the force the wall exerts on the ladder. (c) Find the force of static friction at the base needed to keep the ladder in equilibrium. (d) A student claims that since the wall is frictionless, the ladder cannot possibly be in static equilibrium. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Draw the free-body diagram.", steps: [
          "Draw four forces on the ladder: its weight (150 N, straight down, acting at the center — 2.0 m along the ladder), the normal force from the ground (straight up, at the base), the normal force from the wall (horizontal, pointing away from the wall, at the top), and static friction from the ground (horizontal, at the base, preventing the ladder's foot from sliding away from the wall).",
          "Note that since the wall is explicitly frictionless, there is no vertical friction force from the wall — only its horizontal normal force."
        ]},
        { label: "(b)", ask: "Find the force the wall exerts on the ladder.", steps: [
          "Choose the pivot at the base of the ladder — this eliminates both the ground's normal force and the friction force from the torque equation, since both act at that exact point (zero lever arm).",
          "Set up the geometry: the base is 1.6 m from the wall, and the ladder is 4.0 m long, so the height where it touches the wall is √(4.0²−1.6²) = √(16−2.56) = √13.44 ≈ 3.67 m.",
          "The weight (150 N) acts straight down at the ladder's center, which is horizontally 0.80 m from the base (half of 1.6 m) — so its torque about the base is (150)(0.80) = 120 N·m.",
          "The wall's normal force (F_wall) acts horizontally at the top of the ladder, height 3.67 m above the base — its torque about the base is F_wall × 3.67 (since the force is horizontal and the lever arm relevant to a horizontal force is the vertical height).",
          "Set the torques equal (equilibrium, Στ=0): F_wall(3.67) = 120, so F_wall = 120/3.67 ≈ 32.7 N."
        ]},
        { label: "(c)", ask: "Find the required static friction force at the base.", steps: [
          "Apply ΣF=0 in the horizontal direction: the only horizontal forces are the wall's normal force (pushing the ladder's top away from the wall) and static friction at the base (which must push back toward the wall to keep the base from sliding out).",
          "Set them equal in magnitude: f_static = F_wall ≈ 32.7 N, directed horizontally toward the wall."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall that static equilibrium requires the WALL's contribution specifically to be horizontal only (since it's frictionless) — but this doesn't mean the LADDER as a whole can't achieve overall equilibrium.",
          "Point to the calculation just completed: the ground provides both a vertical normal force (supporting the ladder's weight) AND a horizontal static friction force (balancing the wall's horizontal push) — between the ground's two force components and the wall's single horizontal force, all the conditions for equilibrium (ΣF_x=0, ΣF_y=0, Στ=0) can be satisfied simultaneously.",
          "Conclude the student's claim is INCORRECT: a frictionless wall is perfectly consistent with the ladder being in static equilibrium, AS LONG AS the ground provides sufficient friction — the wall doesn't need to supply any vertical or frictional force itself, since the ground handles that role entirely."
        ]}
      ]
    },
    {
      id: "frq-5-2",
      source: "Original",
      title: "A Torque Applied to a Rotating Disk",
      prompt: "A solid disk (mass 3.0 kg, radius 0.25 m) is free to rotate about a frictionless axis through its center. A constant tangential force of 6.0 N is applied at the disk's outer edge, perpendicular to the radius, starting from rest. (a) Find the disk's moment of inertia. (b) Find the torque produced by the applied force. (c) Find the disk's angular acceleration, and its angular velocity after 4.0 s. (d) A student claims that if the same 6.0 N force were instead applied at a point halfway between the center and the edge (still perpendicular to the radius), the disk would take exactly twice as long to reach the same angular velocity. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the disk's moment of inertia.", steps: [
          "Apply the solid disk formula: I = ½MR² = ½(3.0)(0.25)² = ½(3.0)(0.0625) = 0.09375 kg·m²."
        ]},
        { label: "(b)", ask: "Find the torque.", steps: [
          "Since the force is applied perpendicular to the radius at the outer edge (r=0.25 m, θ=90°): τ = rFsinθ = (0.25)(6.0)(1) = 1.5 N·m."
        ]},
        { label: "(c)", ask: "Find the angular acceleration and the angular velocity at t=4.0s.", steps: [
          "Apply τ=Iα: α = τ/I = 1.5/0.09375 = 16 rad/s².",
          "Apply ω=ω0+αt with ω0=0: ω = (16)(4.0) = 64 rad/s."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim about applying the force at the halfway point.", steps: [
          "Find the new torque with the force applied at r=0.125 m (half of 0.25 m) instead: τ_new = (0.125)(6.0)(1) = 0.75 N·m — exactly half the original torque, since torque is directly proportional to r for a fixed perpendicular force.",
          "Find the new angular acceleration: α_new = τ_new/I = 0.75/0.09375 = 8.0 rad/s² — exactly half the original angular acceleration (16 rad/s²), since I hasn't changed.",
          "Find the time needed to reach the same ω=64 rad/s starting from rest: t = ω/α_new = 64/8.0 = 8.0 s — compared to the original 4.0 s, this is indeed exactly DOUBLE.",
          "Conclude the student's claim is CORRECT: halving the lever arm (with force unchanged) halves the torque, which halves the angular acceleration (since I is unchanged), which doubles the time needed to reach the same final angular velocity — each of these proportional relationships chains together consistently."
        ]}
      ]
    },
    {
      id: "frq-5-3",
      source: "Original",
      title: "Comparing Moment of Inertia Configurations",
      prompt: "Two identical point masses, each 2.0 kg, are attached to the ends of a light rod. In Configuration A, the masses sit 0.30 m from the rod's center (on opposite sides), and the rod rotates about its center. In Configuration B, the same two masses are moved to sit 0.60 m from the center. (a) Find the moment of inertia for Configuration A. (b) Find the moment of inertia for Configuration B. (c) A student claims that since the distance in Configuration B is only double that of Configuration A, the moment of inertia should also only double. Evaluate this claim using your answers to parts (a) and (b). (d) If the same torque is applied to both configurations, compare their resulting angular accelerations.",
      parts: [
        { label: "(a)", ask: "Find I for Configuration A.", steps: [
          "Apply I=Σmr² for both masses at r=0.30 m: I_A = 2×(2.0)(0.30)² = 2×(2.0)(0.09) = 2×0.18 = 0.36 kg·m²."
        ]},
        { label: "(b)", ask: "Find I for Configuration B.", steps: [
          "Apply I=Σmr² for both masses at r=0.60 m: I_B = 2×(2.0)(0.60)² = 2×(2.0)(0.36) = 2×0.72 = 1.44 kg·m²."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Compare the ratio of the two results directly: I_B/I_A = 1.44/0.36 = 4.0 — the moment of inertia is FOUR times larger in Configuration B, not two times larger.",
          "Explain why, referencing the formula: since each mass's contribution to I is mr², and r² depends on the SQUARE of the distance, doubling r (as done here) quadruples that contribution — not doubles it.",
          "Conclude the student's claim is INCORRECT: doubling the distance from the axis quadruples the moment of inertia, not doubles it, precisely because of the r² dependence in I=Σmr²."
        ]},
        { label: "(d)", ask: "Compare the angular accelerations under the same applied torque.", steps: [
          "Apply α=τ/I to both configurations with the same τ: since I_B is 4 times I_A, α_B = τ/I_B = τ/(4×I_A) = (1/4)×(τ/I_A) = (1/4)α_A.",
          "Conclude: Configuration B, with its quadrupled moment of inertia, will have only ONE-FOURTH the angular acceleration of Configuration A for the same applied torque — a direct consequence of the inverse relationship between α and I in τ=Iα."
        ]}
      ]
    },
  ],
  6: [
    {
      id: "frq-6-1",
      source: "Original",
      title: "A Rolling Sphere Compared to a Sliding Block",
      prompt: "A solid sphere (mass 2.0 kg, radius 0.10 m) and a block of the same mass are released from rest at the top of a 3.0 m high ramp. The block slides down a frictionless section (no rotation at all); the sphere rolls without slipping down a separate, identical-height ramp. (a) Find the block's speed at the bottom. (b) Find the sphere's speed at the bottom, using KE_total=(7/10)mv² for a rolling solid sphere. (c) Find the total kinetic energy of each object at the bottom, and compare them. (d) A student claims that since the sphere is slower, it must have less total kinetic energy than the block at the bottom. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the block's speed at the bottom.", steps: [
          "Apply conservation of energy for the frictionless, non-rotating block: mgh = ½mv² (mass cancels).",
          "Solve: v = √(2gh) = √(2×9.8×3.0) = √58.8 ≈ 7.67 m/s."
        ]},
        { label: "(b)", ask: "Find the sphere's speed at the bottom.", steps: [
          "Apply conservation of energy for the rolling sphere, using the total-KE shortcut: mgh = (7/10)mv² (mass cancels).",
          "Solve: v² = 10gh/7 = 10(9.8)(3.0)/7 = 294/7 = 42, so v = √42 ≈ 6.48 m/s."
        ]},
        { label: "(c)", ask: "Compare the total kinetic energy of each object at the bottom.", steps: [
          "Recall that by conservation of energy, EACH object's total kinetic energy at the bottom must equal its own starting gravitational PE, mgh — since both have the same mass and drop the same height, this value is identical for both: PE = mgh = (2.0)(9.8)(3.0) = 58.8 J.",
          "Confirm numerically using the block: KE_block = ½(2.0)(7.67)² ≈ 58.8 J — matches.",
          "Confirm numerically using the sphere: KE_sphere = (7/10)(2.0)(6.48)² ≈ (0.7)(2.0)(42) = 58.8 J — also matches.",
          "Conclude: both objects arrive with EXACTLY the same total kinetic energy, 58.8 J, despite their different final speeds."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall the distinction from Unit 6.4: total kinetic energy depends only on how much PE was converted (which is identical for both objects here), while final SPEED depends on how that energy gets split between translational and rotational forms.",
          "Point to the direct numerical evidence from part (c): both objects end up with the identical total KE of 58.8 J, even though the sphere is moving slower (6.48 m/s vs. 7.67 m/s).",
          "Conclude the student's claim is INCORRECT: the sphere has the SAME total kinetic energy as the block, not less — its lower speed simply reflects that some of its 58.8 J is tied up in rotational KE rather than translational KE, not that it has less total energy overall."
        ]}
      ]
    },
    {
      id: "frq-6-2",
      source: "Original",
      title: "A Rotating Platform and a Jumping Person",
      prompt: "A circular platform (I=400 kg·m²) rotates freely (frictionless axis) at 2.0 rad/s. A 50 kg person, initially standing still at the very center of the platform (contributing no moment of inertia there), walks outward to the edge, 2.0 m from the center. (a) Find the moment of inertia the person contributes once at the edge (treating them as a point mass). (b) Find the platform's new angular velocity once the person reaches the edge. (c) Find the rotational kinetic energy of the system before and after the person walks outward, and identify whether energy was added to or removed from the system. (d) A student claims that since no external torque acts on the platform-person system, kinetic energy must be conserved throughout this process. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the person's moment of inertia at the edge.", steps: [
          "Treat the person as a point mass at radius r=2.0 m: I_person = mr² = (50)(2.0)² = (50)(4.0) = 200 kg·m²."
        ]},
        { label: "(b)", ask: "Find the new angular velocity.", steps: [
          "Apply conservation of angular momentum: I_initial·ω_initial = I_final·ω_final.",
          "Since the person starts at the center (r=0, contributing zero I) and ends at the edge (contributing 200 kg·m²): I_initial = 400 kg·m² (platform only); I_final = 400+200 = 600 kg·m².",
          "Solve: (400)(2.0) = (600)ω_final, so ω_final = 800/600 ≈ 1.33 rad/s."
        ]},
        { label: "(c)", ask: "Compare rotational kinetic energy before and after.", steps: [
          "Find KE before (person at center contributes zero, only the platform is spinning): KE_before = ½(400)(2.0)² = ½(400)(4.0) = 800 J.",
          "Find KE after: KE_after = ½(600)(1.33)² ≈ ½(600)(1.77) ≈ 531 J.",
          "Compare: KE decreased from 800 J to about 531 J — energy was REMOVED from the rotational system (about 269 J), as the person walking outward against the platform's rotation does negative work on the system (the platform has to do work on the person to keep them moving in a circle at increasing radius, which comes at the cost of the platform's own rotational KE)."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall that angular momentum conservation and kinetic energy conservation are separate, independent laws — zero external torque guarantees the former but says nothing about the latter.",
          "Point to the direct numerical evidence from part (c): kinetic energy dropped from 800 J to about 531 J, even though angular momentum was exactly conserved throughout (that's literally how ω_final was calculated).",
          "Conclude the student's claim is INCORRECT: angular momentum conservation does not imply kinetic energy conservation — this scenario is actually the mirror image of the skater pulling her arms IN (which increases KE); here, mass is moving OUTWARD, which decreases the system's rotational kinetic energy instead."
        ]}
      ]
    },
    {
      id: "frq-6-3",
      source: "Original",
      title: "Racing a Sphere, Disk, and Hoop Down a Ramp",
      prompt: "A solid sphere, a solid disk, and a hoop — all with equal mass M and equal radius R — are released from rest at the top of the same ramp of height h and roll without slipping to the bottom. (a) Using I=kMR² for a general shape, derive an expression for the speed at the bottom in terms of g, h, and k. (b) Using k=2/5 (sphere), k=1/2 (disk), and k=1 (hoop), rank the three objects' final speeds from fastest to slowest. (c) A student claims that since all three objects have the same mass and start from the same height, they must also have the same acceleration down the ramp at every point, not just the same final energy. Evaluate this claim conceptually.",
      parts: [
        { label: "(a)", ask: "Derive the general speed expression.", steps: [
          "Apply conservation of energy: mgh = ½mv² + ½Iω², with I=kMR² and, for rolling without slipping, ω=v/R.",
          "Substitute: mgh = ½mv² + ½(kMR²)(v/R)² = ½mv² + ½kMv² = ½Mv²(1+k).",
          "The mass M cancels from both sides: gh = ½v²(1+k).",
          "Solve for v: v² = 2gh/(1+k), so v = √(2gh/(1+k))."
        ]},
        { label: "(b)", ask: "Rank the three objects' final speeds.", steps: [
          "Apply the derived formula: since v = √(2gh/(1+k)), a SMALLER k produces a LARGER final speed (smaller denominator).",
          "Order the k values from smallest to largest: sphere (k=2/5=0.4) < disk (k=1/2=0.5) < hoop (k=1).",
          "Since smaller k means faster: the sphere is fastest, followed by the disk, with the hoop slowest — v_sphere > v_disk > v_hoop."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim about acceleration.", steps: [
          "Recall that final energy (and therefore final speed) being determined only by height is a statement about the START and END states — it says nothing directly about what happens at every point IN BETWEEN.",
          "Recall from Unit 5's stretch discussion that objects with different moments of inertia have different accelerations down a ramp — specifically, a smaller k (like the sphere) results in a larger fraction of gravity's effect going toward linear acceleration rather than angular acceleration, giving it a genuinely larger acceleration at every point along the ramp, not just a different final speed.",
          "Conclude the student's claim is INCORRECT: even though all three objects share the same total energy conversion by the bottom (governed only by mgh), they do NOT share the same acceleration at each point along the ramp — the sphere consistently accelerates faster than the disk, which accelerates faster than the hoop, which is exactly why the sphere pulls ahead and finishes with the highest speed rather than all three arriving together."
        ]}
      ]
    },
  ],
  7: [
    {
      id: "frq-7-1",
      source: "Original",
      title: "Comparing Two Spring-Mass Systems",
      prompt: "Spring System A has mass 2.0 kg and spring constant 200 N/m. Spring System B has mass 8.0 kg and the same spring constant, 200 N/m. Both are pulled to an amplitude of 0.15 m and released from rest at the same instant. (a) Find the period of each system. (b) Find the total mechanical energy of each system. (c) Find the maximum speed of each system. (d) A student claims that since System B has more total energy (having the same amplitude and spring constant, but not yet analyzed for energy), it must also have a greater maximum speed than System A. Evaluate this claim using your answers above.",
      parts: [
        { label: "(a)", ask: "Find the period of each system.", steps: [
          "Apply T=2π√(m/k) to System A: T_A = 2π√(2.0/200) = 2π√0.01 = 2π(0.1) ≈ 0.63 s.",
          "Apply the same formula to System B: T_B = 2π√(8.0/200) = 2π√0.04 = 2π(0.2) ≈ 1.26 s.",
          "Note System B, with four times the mass, has exactly twice the period (√4=2) — consistent with the square-root relationship between T and m."
        ]},
        { label: "(b)", ask: "Find the total mechanical energy of each system.", steps: [
          "Apply E=½kA² to both systems — notice this formula involves only k and A, NOT mass at all.",
          "Since both systems share the same k=200 N/m and A=0.15 m: E_A = E_B = ½(200)(0.15)² = ½(200)(0.0225) = 2.25 J for both.",
          "Recognize this confirms that total energy is identical for both systems, since it depends only on spring stiffness and amplitude — not mass."
        ]},
        { label: "(c)", ask: "Find the maximum speed of each system.", steps: [
          "Apply E=½mv_max² to System A: 2.25 = ½(2.0)v_max², so v_max² = 2.25, giving v_max ≈ 1.5 m/s.",
          "Apply the same to System B: 2.25 = ½(8.0)v_max², so v_max² = 0.5625, giving v_max ≈ 0.75 m/s.",
          "Note that System B, despite having identical total energy to System A, has HALF the maximum speed, since its greater mass requires less speed to carry the same kinetic energy."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall from part (b) that the two systems actually have EQUAL total energy (2.25 J each), not different energy as the student's premise assumed — since E=½kA² depends only on k and A, which are identical for both systems.",
          "Point to the direct calculation in part (c): with equal total energy, System B (heavier) actually has a SMALLER maximum speed than System A, not a larger one.",
          "Conclude the student's claim is INCORRECT on two counts: the premise (that B has more energy) is false, and even setting that aside, more mass at the same energy level means LESS speed, not more — a heavier mass needs less speed to carry the same kinetic energy."
        ]}
      ]
    },
    {
      id: "frq-7-2",
      source: "Original",
      title: "A Pendulum Experiment to Measure g",
      prompt: "A student wants to experimentally determine the local value of g using a simple pendulum, a stopwatch, and a meter stick. (a) Describe a procedure for collecting the necessary data. (b) Describe how the data should be analyzed graphically to determine g, including what should be plotted to produce a straight line. (c) In a trial, the student measures pendulums of five different lengths and their corresponding periods: (0.20m, 0.90s), (0.40m, 1.27s), (0.60m, 1.55s), (0.80m, 1.80s), (1.00m, 2.01s). Determine what quantities to plot, and calculate g from the resulting best-fit line's slope.",
      parts: [
        { label: "(a)", ask: "Describe the data collection procedure.", steps: [
          "Set up a pendulum of a known length L (measured with the meter stick, from the pivot to the center of the bob), and displace it through a small angle (well under 15°) to stay within the valid small-angle regime.",
          "Time multiple full oscillations (e.g., 10 full swings) rather than just one, and divide by the number of oscillations to find a more precise period, reducing the relative impact of human reaction-time error in starting/stopping the stopwatch.",
          "Repeat this process for several different pendulum lengths, keeping the amplitude small and consistent across trials."
        ]},
        { label: "(b)", ask: "Describe the graphical analysis.", steps: [
          "Recognize that T=2π√(L/g) is not linear in L directly — but squaring both sides gives T²=(4π²/g)L, which IS linear in L.",
          "Plot T² (vertical axis) against L (horizontal axis); this should produce a straight line through the origin with slope equal to 4π²/g.",
          "Extract g from the measured slope: g = 4π²/slope."
        ]},
        { label: "(c)", ask: "Determine g from the given data.", steps: [
          "Compute T² for each data point: (0.20, 0.81), (0.40, 1.61), (0.60, 2.40), (0.80, 3.24), (1.00, 4.04).",
          "Plot T² vs. L and find the best-fit slope — the data is quite linear, with a slope of approximately 4.04 s²/m (computed from the overall trend, e.g., using the first and last points: (4.04−0.81)/(1.00−0.20) = 3.23/0.80 ≈ 4.04 s²/m).",
          "Solve for g: g = 4π²/slope = 4π²/4.04 ≈ 39.48/4.04 ≈ 9.77 m/s² — close to the accepted value of 9.8 m/s², confirming the method's validity."
        ]}
      ]
    },
    {
      id: "frq-7-3",
      source: "Original",
      title: "A Mass Dropped Onto a Spring",
      prompt: "A 1.5 kg block sits at rest on top of a vertical spring (k=600 N/m), compressing it slightly at equilibrium. The block is then pushed down an additional 0.10 m from that equilibrium position and released from rest, undergoing SHM. (a) Find the angular frequency of the resulting oscillation. (b) Find the period of oscillation. (c) Find the maximum speed of the block during its motion. (d) A student claims that because the block started below the spring's natural (uncompressed) length, the amplitude of its SHM must be measured from the spring's natural length, not from the new equilibrium position. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Find the angular frequency.", steps: [
          "Apply ω=√(k/m) directly, since angular frequency for a spring-mass system depends only on k and m, regardless of orientation or where equilibrium happens to sit: ω = √(600/1.5) = √400 = 20 rad/s."
        ]},
        { label: "(b)", ask: "Find the period.", steps: [
          "Apply T=2π/ω = 2π/20 ≈ 0.314 s.",
          "(Equivalently, using T=2π√(m/k) = 2π√(1.5/600) = 2π√0.0025 = 2π(0.05) ≈ 0.314 s — consistent.)"
        ]},
        { label: "(c)", ask: "Find the maximum speed.", steps: [
          "Recognize that the block was pushed 0.10 m from its EQUILIBRIUM position (where the spring already supports its weight) and released from rest — so the amplitude of the resulting SHM is A=0.10 m, measured from that equilibrium point.",
          "Apply v_max=Aω = (0.10)(20) = 2.0 m/s."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim about where amplitude should be measured from.", steps: [
          "Recall the key idea from Section 7.2: gravity shifts WHERE the new equilibrium position sits for a vertical spring, but oscillation — including the definition of amplitude — always happens symmetrically AROUND that new equilibrium point, not around the spring's original natural length.",
          "Explain the physical reasoning: at the true equilibrium position (with the block resting on the spring), the net force is already zero (spring force balances gravity) — this is the genuine center of the oscillation, the point the block would return to and stay at if given zero additional displacement.",
          "Conclude the student's claim is INCORRECT: amplitude in this problem is correctly measured as the 0.10 m displacement from the new (gravity-shifted) equilibrium position, exactly as used in parts (a)–(c) — not from the spring's original, unloaded natural length, which isn't the center of this particular oscillation at all."
        ]}
      ]
    },
  ],
  8: [
    {
      id: "frq-8-1",
      source: "Original",
      title: "A Floating Wooden Block and an Added Weight",
      prompt: "A wooden block (density 600 kg/m³, volume 0.020 m³) floats in water (density 1000 kg/m³). (a) Find the mass of the block. (b) Find the volume of the block submerged while floating freely. (c) A 3.0 kg weight is now placed on top of the floating block. Find the new submerged volume, assuming the block does not fully submerge. (d) A student claims that adding the weight must double the submerged volume, since it roughly doubles the downward force the water needs to support. Evaluate this claim using your answers above.",
      parts: [
        { label: "(a)", ask: "Find the mass of the block.", steps: [
          "Apply the density definition: m = ρV = (600)(0.020) = 12 kg."
        ]},
        { label: "(b)", ask: "Find the submerged volume while floating freely.", steps: [
          "Apply the floating condition: buoyant force equals weight, ρ_water·V_submerged·g = ρ_block·V_total·g (the g's cancel).",
          "Solve: V_submerged = (ρ_block/ρ_water)·V_total = (600/1000)(0.020) = 0.012 m³."
        ]},
        { label: "(c)", ask: "Find the new submerged volume with the added weight.", steps: [
          "Set up the new equilibrium condition: buoyant force must now support BOTH the block's weight and the added weight: ρ_water·V_submerged,new·g = (m_block+m_added)g.",
          "The g's cancel: V_submerged,new = (m_block+m_added)/ρ_water = (12+3.0)/1000 = 15/1000 = 0.015 m³.",
          "Check this is physically valid: 0.015 m³ is less than the block's total volume (0.020 m³), confirming the block does not fully submerge, consistent with the problem's assumption."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Compute the actual ratio: V_new/V_original = 0.015/0.012 = 1.25 — a 25% increase, not a doubling.",
          "Explain why the naive 'downward force roughly doubles' reasoning fails: the added weight (3.0 kg, weight ≈29.4 N) is being compared to the ORIGINAL buoyant force need (12 kg's worth, ≈117.6 N) — but 3.0 kg is much smaller than 12 kg, so the total required support increases by a comparatively modest fraction (15/12 = 1.25), not by a factor of 2.",
          "Conclude the student's claim is INCORRECT: the submerged volume increases by only 25%, not 100% — the mistake was assuming the added weight was comparable in size to the block's own weight, when it's actually only one-quarter of it."
        ]}
      ]
    },
    {
      id: "frq-8-2",
      source: "Original",
      title: "A Venturi-Style Pipe Experiment",
      prompt: "A student has a horizontal pipe that narrows from a wide section (area 0.040 m²) to a narrow section (area 0.010 m²), with pressure gauges at each section, a water source, and a stopwatch. Water (ρ=1000 kg/m³) flows through the pipe. (a) Describe a procedure to experimentally verify the continuity equation using the available equipment. (b) In a trial, the wide section shows a speed of 1.5 m/s. Find the speed in the narrow section, and the volume flow rate through the pipe. (c) The wide section shows a pressure of 1.80×10⁵ Pa. Find the pressure in the narrow section using Bernoulli's equation. (d) A student claims that since the pipe is horizontal, the pressure should be the same in both sections. Evaluate this claim.",
      parts: [
        { label: "(a)", ask: "Describe an experimental procedure.", steps: [
          "Measure the fluid speed at both the wide and narrow sections — for instance, by timing how long it takes a known volume of water to pass a marked point, or using a flow-speed sensor if available at each gauge location.",
          "Record the corresponding pressure readings from the gauges at each section simultaneously.",
          "Compute the volume flow rate at each section separately (Q=Av) and compare — the continuity equation predicts these two values should match, since no water is added or removed between the two sections.",
          "Repeat across multiple flow rates (adjusting the water source) to confirm the relationship holds consistently, not just for one specific trial."
        ]},
        { label: "(b)", ask: "Find the narrow-section speed and the volume flow rate.", steps: [
          "Apply the continuity equation: A1v1=A2v2, so (0.040)(1.5)=(0.010)v2, giving v2 = 0.060/0.010 = 6.0 m/s.",
          "Compute the volume flow rate (should be identical at both sections): Q = A1v1 = (0.040)(1.5) = 0.060 m³/s."
        ]},
        { label: "(c)", ask: "Find the pressure in the narrow section.", steps: [
          "Since the pipe is horizontal, the height terms in Bernoulli's equation cancel: P1+½ρv1² = P2+½ρv2².",
          "Solve for P2: P2 = P1+½ρ(v1²−v2²) = 1.80×10⁵+½(1000)(1.5²−6.0²) = 1.80×10⁵+½(1000)(2.25−36) = 1.80×10⁵+½(1000)(−33.75).",
          "Compute: ½(1000)(−33.75) = −16,875. So P2 = 1.80×10⁵−16,875 = 163,125 Pa ≈ 1.63×10⁵ Pa."
        ]},
        { label: "(d)", ask: "Evaluate the student's claim.", steps: [
          "Recall that Bernoulli's equation includes THREE terms — pressure, kinetic energy (½ρv²), and gravitational potential energy (ρgh) — and while the pipe being horizontal does cancel the ρgh terms, it says nothing about the ½ρv² terms.",
          "Point to the direct calculation in part (c): the fluid speeds up significantly in the narrow section (1.5→6.0 m/s), and this speed increase requires a corresponding pressure DECREASE (from 1.80×10⁵ Pa to about 1.63×10⁵ Pa) to keep the total energy balanced.",
          "Conclude the student's claim is INCORRECT: a horizontal pipe only guarantees equal height, not equal speed — since the pipe narrows and the fluid speeds up, pressure must decrease in the narrow section, exactly the Bernoulli effect."
        ]}
      ]
    },
    {
      id: "frq-8-3",
      source: "Original",
      title: "Comparing Two Submerged Objects",
      prompt: "Object A (volume 0.0080 m³, mass 6.0 kg) and Object B (volume 0.0080 m³, mass 12 kg) are both fully submerged and held underwater (ρ=1000 kg/m³) by a string attached to the bottom of a tank. (a) Find the buoyant force on each object. (b) Find the tension in the string holding each object down, or determine if a string is even needed. (c) A student claims that since Object B has more mass, it must experience a greater buoyant force than Object A. Evaluate this claim using your answers above.",
      parts: [
        { label: "(a)", ask: "Find the buoyant force on each object.", steps: [
          "Apply Archimedes' Principle to Object A: F_b = ρ_water·V_A·g = (1000)(0.0080)(9.8) = 78.4 N.",
          "Apply the same to Object B: since both objects have the IDENTICAL volume (0.0080 m³), F_b = (1000)(0.0080)(9.8) = 78.4 N as well — the exact same buoyant force as Object A."
        ]},
        { label: "(b)", ask: "Find the tension needed for each object, or determine if none is needed.", steps: [
          "For Object A: weight = mg = (6.0)(9.8) = 58.8 N. Since buoyant force (78.4 N) exceeds weight (58.8 N), the object would float upward on its own — a string is needed to hold it DOWN, with tension T_A = F_b − weight = 78.4 − 58.8 = 19.6 N (string pulling downward).",
          "For Object B: weight = mg = (12)(9.8) = 117.6 N. Since weight (117.6 N) exceeds buoyant force (78.4 N), the object would sink on its own — if a string is attached to the bottom holding it in place at that depth, it would actually need to pull it UP, or more naturally, the object would simply rest on the tank floor with a normal force making up the difference, needing no string tension at all in the downward sense the problem may have implied.",
          "Recognize this distinction: Object A needs to be held DOWN (tension pulling down, 19.6 N); Object B doesn't need to be held down at all, since it would sink without support — it would need to be held UP if suspended at that depth, requiring a normal force or upward string tension of 117.6−78.4=39.2 N instead."
        ]},
        { label: "(c)", ask: "Evaluate the student's claim.", steps: [
          "Recall Archimedes' Principle: buoyant force depends ONLY on the volume of fluid displaced (and the fluid's density) — not on the submerged object's own mass or density at all.",
          "Point to the direct calculation in part (a): despite Object B having exactly twice the mass of Object A, both objects experience the IDENTICAL buoyant force of 78.4 N, since they share the same volume.",
          "Conclude the student's claim is INCORRECT: buoyant force is completely independent of the object's mass — it's Object A and B's very different WEIGHTS (from their different masses) that lead to their very different behaviors (one needs to be held down, one would sink), not any difference in the buoyant force itself, which is identical for both."
        ]}
      ]
    },
  ],
};

export { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT };