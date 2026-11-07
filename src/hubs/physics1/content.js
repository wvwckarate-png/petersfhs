const STUDY_CONTENT = {
  "1": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Kinematics</h1>\n  <p class=\"sub\">This is the language the rest of the course is written in. Forces, energy, momentum, rotation, oscillations — every one of those units eventually asks \"so how does it move?\" and the answer always comes back to the tools built here. Learn this unit properly and the rest of the year gets noticeably easier.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 10–15%</span>\n    <span class=\"pill\">7 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s11\">1.1 Position, Displacement, and Distance</a></li>\n    <li><a href=\"#s12\">1.2 Velocity and Speed</a></li>\n    <li><a href=\"#s13\">1.3 Acceleration</a></li>\n    <li><a href=\"#s14\">1.4 Motion Graphs</a></li>\n    <li><a href=\"#s15\">1.5 Kinematic Equations</a></li>\n    <li><a href=\"#s16\">1.6 Free Fall</a></li>\n    <li><a href=\"#s17\">1.7 Projectile Motion</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Matching the Tool to What You're Given</span>\n    <p>Almost every kinematics problem is really the same question in disguise: \"given some of these quantities — position, velocity, acceleration, time — find the rest.\" The whole unit is just different tools for that one job:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Graphs</strong> — use when you're handed a picture instead of numbers. Slope and area do almost all the work.</li>\n      <li><strong>The four kinematic equations</strong> — use when acceleration is constant and you have numbers. Pick the one equation that's missing the variable you don't know and don't need.</li>\n      <li><strong>Vertical vs. horizontal in projectile motion</strong> — the same equations, just applied twice, completely independently, once for each direction.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">Before doing any math, write down what you know and what you're asked for. Which tool to reach for almost always falls out of that list on its own.</p>\n  </div>\n\n  <h2 id=\"s11\"><span class=\"num\">1.1</span>Position, Displacement, and Distance</h2>\n  <p>Physics loves precise language, and this section is where that habit starts paying off. In everyday speech, \"how far did you go?\" is one question. In physics, it's actually two different questions wearing the same words, and mixing them up is the single most common early mistake in this unit.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p><strong>Distance</strong> is the total length of the path traveled — it only ever adds up, never cancels. <strong>Displacement</strong> is the straight-line change in position, from start to finish, and it's a vector — it has both a size and a direction, and it can partially or fully cancel itself out. Walk 10 m east then 10 m back west, and you've traveled a distance of 20 m, but your displacement is exactly zero.</p>\n  </div>\n\n  <p>Position itself is just a vector describing where something is relative to a chosen origin — and that word \"chosen\" matters more than it sounds like it should. There's no universal zero point built into the universe; you get to pick where x = 0 is, and once you do, stick with it for the entire problem. Displacement is then just the change in that position: Δx = x<sub>final</sub> − x<sub>initial</sub>, never the other way around.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Displacement can be negative — that's not an error, it's information. A negative Δx just means the object ended up in the negative direction relative to where it started, given whatever direction you called positive. Don't \"fix\" a negative answer by dropping the sign; the sign is often the whole point of the question.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Distance vs. Displacement.</strong> A runner starts at the 0 m mark, runs to the 300 m mark, then turns around and runs back to the 100 m mark. Find the total distance traveled and the total displacement.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Distance just adds up path length, direction be damned: 300 m out, then 200 m back, for a total distance of 300 + 200 = <strong>500 m</strong>. Displacement only cares about start and finish: the runner started at 0 m and ended at 100 m, so Δx = 100 − 0 = <strong>100 m</strong>. Notice how different these two numbers are, even though they're describing the exact same run — that gap is precisely why physics insists on keeping the two ideas separate.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain the difference between distance and displacement, using a concrete example.</li>\n      <li>Compute displacement correctly, including its sign, given a start and end position.</li>\n      <li>Recognize that distance can never decrease during motion, while displacement can increase, decrease, or even return to zero.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s12\"><span class=\"num\">1.2</span>Velocity and Speed</h2>\n  <p>Velocity and speed have the exact same relationship to each other that displacement and distance do — and for the exact same reason. Speed is how fast something is going, full stop. Velocity is how fast something is going, in a specific direction. One's a vector, one's a scalar, and once you've internalized that pattern from 1.1, this section is really just applying it to a rate instead of a raw quantity.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">v<sub>avg</sub> = Δx / Δt</div>\n    <div class=\"sub\">average velocity = displacement ÷ elapsed time</div>\n  </div>\n\n  <p>Average speed, by contrast, is total distance divided by total time. Those two formulas look almost identical, but plugging in distance instead of displacement is exactly the kind of substitution that quietly changes the entire answer.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A round trip — go somewhere and come back to the exact same spot — always has an average velocity of exactly zero, no matter how fast you were moving or how long the trip took. Displacement over the whole trip is zero, so v<sub>avg</sub> = 0/Δt = 0. Average <em>speed</em> for that same trip is very much not zero. If a problem gives you a round trip and asks for \"average velocity,\" the answer is often zero before you do any other math at all.</p>\n  </div>\n\n  <p>Instantaneous velocity is the velocity at one specific moment in time — think of it as what a speedometer reads at that instant, direction included. Graphically, this is the slope of the position-vs-time graph at that exact point, which is a preview of the connection Section 1.4 leans on heavily.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>A Round Trip.</strong> A cyclist rides 12 km east in 40 minutes, then rides back 12 km west in 30 minutes. Find the average speed and average velocity for the entire trip.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Total distance is 12 + 12 = 24 km; total time is 40 + 30 = 70 min = 7/6 hr. Average speed = 24 ÷ (7/6) ≈ <strong>20.6 km/hr</strong>. Total displacement, though, is 12 km east minus 12 km west = <strong>0 km</strong>, so average velocity = 0 ÷ (7/6 hr) = <strong>0 km/hr</strong>. The cyclist was clearly moving the entire time — average speed captures that — but ended up exactly where they started, which is what average velocity is actually reporting.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Slope is about to become your best friend</div>\n    <p>Velocity is nothing more than the <em>slope</em> of a position-vs-time graph. Steeper slope, faster motion. Flat slope, at rest. Negative slope, moving in the negative direction. This one connection — velocity is slope — is going to reappear constantly for the rest of the unit, and honestly, for the rest of the course.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Distinguish average speed from average velocity, and identify when a problem's answer for velocity is simply zero.</li>\n      <li>Compute average velocity from a displacement and a time interval, including the correct sign.</li>\n      <li>Connect instantaneous velocity to the slope of a position-time graph.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s13\"><span class=\"num\">1.3</span>Acceleration</h2>\n  <p>Acceleration is the rate at which velocity itself changes — and this is where a lot of students' intuition, built on the everyday meaning of \"accelerate,\" starts working against them. In physics, acceleration doesn't just mean \"speeding up.\" It means any change in velocity at all: speeding up, slowing down, or even just changing direction while moving at a constant speed.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">a<sub>avg</sub> = Δv / Δt</div>\n    <div class=\"sub\">average acceleration = change in velocity ÷ elapsed time</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Negative acceleration does <strong>not</strong> automatically mean \"slowing down.\" Whether an object is speeding up or slowing down depends on whether velocity and acceleration point in the <em>same</em> direction (speeding up) or <em>opposite</em> directions (slowing down) — not on the sign of acceleration by itself. A car moving in the negative direction that speeds up has negative velocity <strong>and</strong> negative acceleration, both pointing the same way. Always compare the two signs to each other, never read acceleration's sign in isolation.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Reading the Signs.</strong> A ball is thrown straight up. Taking up as positive, describe the sign of its velocity and acceleration on the way up, and again on the way down.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">On the way up: the ball moves in the positive direction, so velocity is positive. Gravity never stops pulling down, so acceleration is negative the entire time — velocity and acceleration point opposite ways, meaning the ball is <strong>slowing down</strong>, exactly as you'd expect on the way up. On the way down: velocity is now negative (moving in the negative direction), while acceleration is still negative (gravity hasn't changed at all). Same-signed velocity and acceleration now mean the ball is <strong>speeding up</strong> as it falls. Notice that acceleration itself never changed sign anywhere in this problem — only velocity did.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain why acceleration is not the same thing as \"speeding up.\"</li>\n      <li>Determine whether an object is speeding up or slowing down by comparing the signs of its velocity and acceleration.</li>\n      <li>Compute average acceleration from a change in velocity and a time interval.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s14\"><span class=\"num\">1.4</span>Motion Graphs</h2>\n  <p>This section is where position, velocity, and acceleration stop being three separate topics and start being three views of the exact same motion. Once you can fluently translate between an x-t graph, a v-t graph, and an a-t graph, an enormous share of this unit's questions become genuinely fast to answer — often without touching a single equation.</p>\n\n  <!--apv:motion-graphs-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 350\" role=\"img\" aria-label=\"Aligned position, velocity and acceleration graphs for one motion\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">One motion, three graphs: speeding up, cruising, then braking</tspan></text><line x1=\"70\" y1=\"96\" x2=\"690\" y2=\"96\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"96\" x2=\"70\" y2=\"36\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"66\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 66)\"><tspan x=\"40\" dy=\"0\">x</tspan></text><path d=\"M 70 96 L 77.75 95.96215659340659 L 85.5 95.88646978021978 L 93.25 95.77293956043955 L 101 95.62156593406593 L 108.75 95.4323489010989 L 116.5 95.20528846153846 L 124.25 94.94038461538462 L 132 94.63763736263736 L 139.75 94.2970467032967 L 147.5 93.91861263736264 L 155.25 93.50233516483516 L 163 93.04821428571428 L 170.75 92.55625 L 178.5 92.0264423076923 L 186.25 91.45879120879121 L 194 90.8532967032967 L 201.75 90.20995879120879 L 209.5 89.52877747252748 L 217.25 88.80975274725274 L 225 88.05288461538461 L 232.75 87.25817307692307 L 240.5 86.42561813186813 L 248.25 85.55521978021979 L 256 84.64697802197803 L 263.75 83.70089285714286 L 271.5 82.71696428571428 L 279.25 81.69519230769231 L 287 80.63557692307693 L 294.75 79.57596153846154 L 302.5 78.51634615384614 L 310.25 77.45673076923076 L 318 76.39711538461538 L 325.75 75.3375 L 333.5 74.27788461538461 L 341.25 73.21826923076922 L 349 72.15865384615384 L 356.75 71.09903846153846 L 364.5 70.03942307692307 L 372.25 68.97980769230769 L 380 67.9201923076923 L 387.75 66.86057692307692 L 395.5 65.80096153846154 L 403.25 64.74134615384614 L 411 63.68173076923076 L 418.75 62.62211538461538 L 426.5 61.562499999999986 L 434.25 60.50288461538461 L 442 59.44326923076922 L 449.75 58.383653846153834 L 457.5 57.32403846153845 L 465.25 56.26442307692307 L 473 55.20480769230768 L 480.75 54.18303571428571 L 488.5 53.19910714285713 L 496.25 52.25302197802196 L 504 51.34478021978021 L 511.75 50.47438186813185 L 519.5 49.64182692307691 L 527.25 48.84711538461538 L 535 48.09024725274725 L 542.75 47.37122252747252 L 550.5 46.69004120879119 L 558.25 46.046703296703285 L 566 45.44120879120879 L 573.75 44.873557692307685 L 581.5 44.343749999999986 L 589.25 43.85178571428571 L 597 43.39766483516483 L 604.75 42.981387362637356 L 612.5 42.60295329670329 L 620.25 42.262362637362635 L 628 41.959615384615375 L 635.75 41.69471153846153 L 643.5 41.467651098901094 L 651.25 41.278434065934064 L 659 41.12706043956044 L 666.75 41.01353021978022 L 674.5 40.93784340659341 L 682.25 40.900000000000006 L 690 40.900000000000006\" fill=\"none\" stroke=\"#D2451E\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"70\" y1=\"186\" x2=\"690\" y2=\"186\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"186\" x2=\"70\" y2=\"126\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"156\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 156)\"><tspan x=\"40\" dy=\"0\">v</tspan></text><path d=\"M 70 186 L 77.75 184 L 85.5 182 L 93.25 180 L 101 178 L 108.75 176 L 116.5 174 L 124.25 172 L 132 170 L 139.75 168 L 147.5 166 L 155.25 164 L 163 162 L 170.75 160 L 178.5 158 L 186.25 156 L 194 154 L 201.75 152 L 209.5 150 L 217.25 148 L 225 146 L 232.75 144 L 240.5 142 L 248.25 140 L 256 138 L 263.75 136 L 271.5 134 L 279.25 132 L 287 130 L 294.75 130 L 302.5 130 L 310.25 130 L 318 130 L 325.75 130 L 333.5 130 L 341.25 130 L 349 130 L 356.75 130 L 364.5 130 L 372.25 130 L 380 130 L 387.75 130 L 395.5 130 L 403.25 130 L 411 130 L 418.75 130 L 426.5 130 L 434.25 130 L 442 130 L 449.75 130 L 457.5 130 L 465.25 130 L 473 130 L 480.75 132 L 488.5 134 L 496.25 136 L 504 138 L 511.75 140 L 519.5 142 L 527.25 144 L 535 146 L 542.75 148 L 550.5 150 L 558.25 152 L 566 154 L 573.75 156 L 581.5 158 L 589.25 160 L 597 162 L 604.75 164 L 612.5 166 L 620.25 168 L 628 170 L 635.75 172 L 643.5 174 L 651.25 176 L 659 178 L 666.75 180 L 674.5 182 L 682.25 184 L 690 186\" fill=\"none\" stroke=\"#2E6BC6\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"70\" y1=\"290\" x2=\"690\" y2=\"290\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"230\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"260\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 260)\"><tspan x=\"40\" dy=\"0\">a</tspan></text><line x1=\"70\" y1=\"260\" x2=\"690\" y2=\"260\" stroke=\"#bbb\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"3 3\"/><path d=\"M 70 232 L 287 232 L 287 260 L 473 260 L 473 288 L 690 288\" fill=\"none\" stroke=\"#2E7D32\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"287\" y1=\"40\" x2=\"287\" y2=\"296\" stroke=\"#bbb\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><line x1=\"473\" y1=\"40\" x2=\"473\" y2=\"296\" stroke=\"#bbb\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><text x=\"178.5\" y=\"316\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"178.5\" dy=\"0\">speeding up</tspan></text><text x=\"380\" y=\"316\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">constant speed</tspan></text><text x=\"581.5\" y=\"316\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"581.5\" dy=\"0\">braking</tspan></text><text x=\"380\" y=\"338\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">time</tspan></text><text x=\"178.5\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"178.5\" dy=\"0\">x curves up (slope rising)</tspan></text><text x=\"380\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"380\" dy=\"0\">straight line, slope = v</tspan></text><text x=\"581.5\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"581.5\" dy=\"0\">flattens as v → 0</tspan></text><text x=\"178.5\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"178.5\" dy=\"0\">slope = a &gt; 0</tspan></text><text x=\"380\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"380\" dy=\"0\">slope = 0</tspan></text><text x=\"581.5\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"581.5\" dy=\"0\">slope = a &lt; 0</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Read the three graphs together: the slope of x–t is v, the slope of v–t is a, and the area under v–t is displacement. Each phase of the motion has a signature shape on all three.</p>\n  </div>\n<!--/apv:motion-graphs-->\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Slope Goes Down, Area Goes Up</span>\n    <p>Moving from position → velocity → acceleration, you take a <strong>slope</strong> at each step. Moving the other direction, from acceleration → velocity → position, you find the <strong>area under the curve</strong> at each step. Slope of an x-t graph gives velocity; slope of a v-t graph gives acceleration. Area under a v-t graph gives displacement; area under an a-t graph gives the change in velocity.</p>\n  </div>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Graph</th><th>Slope tells you</th><th>Area under curve tells you</th></tr></thead>\n    <tbody>\n      <tr><td>Position vs. time (x-t)</td><td>Velocity</td><td>Not typically used</td></tr>\n      <tr><td>Velocity vs. time (v-t)</td><td>Acceleration</td><td>Displacement (Δx)</td></tr>\n      <tr><td>Acceleration vs. time (a-t)</td><td>Not typically used</td><td>Change in velocity (Δv)</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A curved (not straight) x-t graph does <strong>not</strong> mean the object is moving faster because the line looks \"steeper overall.\" A curving x-t graph means the <em>slope itself is changing</em> — which means velocity is changing, which means the object is accelerating. Don't judge speed by how far the curve has traveled vertically; judge it by the slope at that specific instant, drawn as a tangent line if the curve isn't straight.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Reading a v-t Graph.</strong> An object's velocity-time graph shows velocity increasing in a straight line from 0 m/s to 8 m/s over the first 4 s, then staying constant at 8 m/s for the next 3 s. Find the object's acceleration during the first 4 s, and its total displacement over the full 7 s.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Acceleration is the slope of the v-t graph: during the first 4 s, slope = (8 − 0)/(4 − 0) = <strong>2 m/s²</strong>. For displacement, find the total area under the v-t graph. The first 4 s forms a triangle: area = ½(4)(8) = 16 m. The next 3 s forms a rectangle: area = (3)(8) = 24 m. Total displacement = 16 + 24 = <strong>40 m</strong>. Notice that breaking an irregular area into simple triangle-and-rectangle pieces, rather than trying to handle it all at once, is really the whole skill here.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The reflex worth building right now</div>\n    <p>Whenever you're handed a motion graph, before doing any calculation, ask yourself: \"is the question about a slope, or an area?\" Almost every graph-reading question on this exam sorts cleanly into one of those two buckets, and just naming which bucket you're in tells you exactly what operation to perform.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Extract velocity from the slope of an x-t graph, and acceleration from the slope of a v-t graph.</li>\n      <li>Extract displacement from the area under a v-t graph, breaking irregular shapes into simple pieces.</li>\n      <li>Sketch a qualitatively correct v-t or a-t graph given a verbal description of motion, and vice versa.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s15\"><span class=\"num\">1.5</span>Kinematic Equations for Constant Acceleration</h2>\n  <p>These four equations are the algebraic engine of the whole unit — but they come with one condition that's easy to forget under time pressure: they only work when acceleration is <strong>constant</strong>. If acceleration is changing, none of these four equations apply directly, and you need to fall back on graphs or calculus-style reasoning instead.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Equation</th><th>Missing variable</th></tr></thead>\n    <tbody>\n      <tr><td>v = v<sub>0</sub> + at</td><td>Δx (position)</td></tr>\n      <tr><td>Δx = v<sub>0</sub>t + ½at²</td><td>v (final velocity)</td></tr>\n      <tr><td>v² = v<sub>0</sub>² + 2aΔx</td><td>t (time)</td></tr>\n      <tr><td>Δx = ½(v<sub>0</sub> + v)t</td><td>a (acceleration)</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Pick the Equation Missing What You Don't Have</span>\n    <p>Each of these four equations is deliberately missing exactly one of the five kinematic variables (v<sub>0</sub>, v, a, t, Δx). The fastest way to solve any constant-acceleration problem is to list what you're given, circle what you're asked to find, and then pick whichever equation doesn't require the one variable you were never given in the first place.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>These equations assume a single, constant acceleration for the entire time interval you're plugging into them. If a problem describes motion in two separate phases — say, speeding up, then moving at constant velocity — you cannot use one of these equations across the whole thing at once. Split the motion into separate phases, solve each one with its own constant acceleration, and connect them using the final state of one phase as the starting state of the next.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>Braking Distance.</strong> A car traveling at 24 m/s brakes with a constant deceleration of 6.0 m/s². Find how far it travels before coming to a stop.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">List what's given: v<sub>0</sub> = 24 m/s, v = 0 (stopped), a = −6.0 m/s² (deceleration, opposing motion). We're not given time, and we don't need it — so reach for the equation missing t: v² = v<sub>0</sub>² + 2aΔx. Plugging in: 0² = 24² + 2(−6.0)Δx, so 0 = 576 − 12Δx, giving Δx = 576/12 = <strong>48 m</strong>. Notice how picking the equation without t saved an entire extra step of first solving for time before getting to distance.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the condition (constant acceleration) required for the four kinematic equations to apply.</li>\n      <li>Choose the correct kinematic equation based on which variable is missing from a problem.</li>\n      <li>Solve a multi-phase motion problem by splitting it into separate constant-acceleration segments.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s16\"><span class=\"num\">1.6</span>Free Fall</h2>\n  <p>Free fall is simply the special case where the only acceleration acting on an object is gravity — no air resistance, no other forces. It's the single most common constant-acceleration scenario on this exam, precisely because it lets you skip straight to the kinematic equations with one variable already filled in for you.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">a = −g = −9.8 m/s²</div>\n    <div class=\"sub\">taking \"up\" as positive — gravity always points down, toward Earth</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — The Top of the Path Is Not \"At Rest\"</span>\n    <p>An object thrown straight up has velocity equal to zero for one single instant at the very top of its path — but its acceleration is still exactly −g at that same instant, and every other instant, the whole way up and the whole way down. \"Velocity is zero\" and \"acceleration is zero\" are two completely different statements, and mixing them up at the peak of a trajectory is one of the most common errors on this entire exam.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>An object thrown straight up, and a second object simply dropped from rest at the instant the first reaches its peak height, both experience the exact same acceleration (g) the whole way down — even though the thrown object's total flight time (up and back down) is longer than the dropped object's fall time. Gravity doesn't change based on what an object is doing. Don't assume \"in the air longer\" means \"different acceleration.\" It almost always just means a different starting velocity.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Thrown Upward.</strong> A ball is thrown straight up with an initial speed of 15 m/s. Find how long it takes to reach its highest point, and find that maximum height.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">At the highest point, v = 0. Using v = v<sub>0</sub> + at with a = −9.8 m/s²: 0 = 15 + (−9.8)t, so t = 15/9.8 ≈ <strong>1.53 s</strong>. For maximum height, use v² = v<sub>0</sub>² + 2aΔx: 0² = 15² + 2(−9.8)Δx, giving Δx = 225/19.6 ≈ <strong>11.5 m</strong>. Notice both calculations used v = 0 as the defining condition of \"the top\" — that's the reflex worth keeping: the top of a vertical throw is always a v = 0 problem, never an a = 0 problem.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the acceleration of any object in free fall, and explain why it never changes during the motion.</li>\n      <li>Correctly identify that velocity, not acceleration, equals zero at the peak of a vertical throw.</li>\n      <li>Solve for time, height, or velocity in a free-fall scenario using the kinematic equations from 1.5.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s17\"><span class=\"num\">1.7</span>Projectile Motion</h2>\n  <p>This is the payoff section for the whole unit — the moment where 1D motion becomes 2D motion, and it turns out you already have every tool you need. Nothing new gets invented here; you're just going to apply everything from Sections 1.1 through 1.6 twice, once horizontally and once vertically, completely independently of each other.</p>\n\n  <!--apv:projectile-path-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 304\" role=\"img\" aria-label=\"Parabolic projectile path with constant horizontal velocity arrows and changing vertical velocity arrows\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Projectile motion: constant horizontal velocity, constant vertical acceleration</tspan></text><line x1=\"60\" y1=\"250\" x2=\"700\" y2=\"250\" stroke=\"#777\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M 60 250 L 70 240.16666666666666 L 80 230.66666666666666 L 90 221.5 L 100 212.66666666666666 L 110 204.16666666666669 L 120 196 L 130 188.16666666666669 L 140 180.66666666666666 L 150 173.5 L 160 166.66666666666666 L 170 160.16666666666669 L 180 154 L 190 148.16666666666669 L 200 142.66666666666669 L 210 137.5 L 220 132.66666666666666 L 230 128.16666666666669 L 240 124 L 250 120.16666666666669 L 260 116.66666666666666 L 270 113.5 L 280 110.66666666666669 L 290 108.16666666666666 L 300 106 L 310 104.16666666666669 L 320 102.66666666666666 L 330 101.49999999999997 L 340 100.66666666666666 L 350 100.16666666666669 L 360 100 L 370.00000000000006 100.16666666666666 L 380 100.66666666666666 L 390 101.5 L 400 102.66666666666666 L 410 104.16666666666666 L 420 106 L 430 108.16666666666669 L 440 110.66666666666666 L 450 113.5 L 460 116.66666666666666 L 470 120.16666666666669 L 480 123.99999999999999 L 490 128.16666666666669 L 499.99999999999994 132.66666666666663 L 510 137.5 L 520 142.66666666666669 L 530 148.16666666666669 L 540 154 L 550 160.16666666666666 L 560 166.66666666666669 L 570 173.5 L 580 180.66666666666669 L 590 188.16666666666666 L 600 196 L 610 204.16666666666663 L 620 212.66666666666669 L 630 221.49999999999997 L 640 230.66666666666669 L 650 240.16666666666663 L 660 250\" fill=\"none\" stroke=\"#666\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"6 5\"/><circle cx=\"60\" cy=\"250\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"250\" x2=\"106\" y2=\"250\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"60\" y1=\"250\" x2=\"60\" y2=\"198\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><circle cx=\"150\" cy=\"173.5\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"173.5\" x2=\"196\" y2=\"173.5\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"150\" y1=\"173.5\" x2=\"150\" y2=\"137.1\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><circle cx=\"240\" cy=\"124\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"240\" y1=\"124\" x2=\"286\" y2=\"124\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"240\" y1=\"124\" x2=\"240\" y2=\"103.2\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><circle cx=\"360\" cy=\"100\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"360\" y1=\"100\" x2=\"406\" y2=\"100\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><circle cx=\"480\" cy=\"124\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"480\" y1=\"124\" x2=\"526\" y2=\"124\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"480\" y1=\"124\" x2=\"480\" y2=\"144.8\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><circle cx=\"570\" cy=\"173.5\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"570\" y1=\"173.5\" x2=\"616\" y2=\"173.5\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"570\" y1=\"173.5\" x2=\"570\" y2=\"209.9\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><circle cx=\"660\" cy=\"250\" r=\"5\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"660\" y1=\"250\" x2=\"706\" y2=\"250\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><line x1=\"660\" y1=\"250\" x2=\"660\" y2=\"302\" stroke=\"#2E7D32\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><text x=\"300\" y=\"54\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"300\" dy=\"0\">vₓ is the same at every point (blue)</tspan></text><text x=\"300\" y=\"72\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"300\" dy=\"0\">vᵧ shrinks to 0 at the top, then grows downward (green)</tspan></text><text x=\"360\" y=\"90\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"360\" dy=\"0\">top: vᵧ = 0</tspan></text><text x=\"380\" y=\"292\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">range</tspan></text><line x1=\"60\" y1=\"272\" x2=\"660\" y2=\"272\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" marker-end=\"url(#ah)\"/><rect x=\"520\" y=\"60\" width=\"220\" height=\"76\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"630\" y=\"80\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">x: aₓ = 0     y: aᵧ = −g</tspan></text><text x=\"630\" y=\"104\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">Treat x and y separately;</tspan><tspan x=\"630\" dy=\"14.4\">time is the shared link.</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Horizontal and vertical motions are independent. Horizontal velocity never changes; vertical velocity changes by g every second, passing through zero at the highest point.</p>\n  </div>\n<!--/apv:projectile-path-->\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is the idea that unlocks the whole section</div>\n    <p>Horizontal and vertical motion are <strong>completely independent</strong> of each other. Gravity only ever acts vertically, so horizontal velocity never changes throughout the entire flight — it's constant-velocity motion in that direction, full stop. Meanwhile, vertical motion is just Section 1.6's free fall, playing out exactly as it would if the object had no horizontal motion at all. Split every projectile problem into an easy horizontal half and a familiar vertical half, and solve them almost as two separate problems that happen to share one number: time.</p>\n  </div>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Direction</th><th>Acceleration</th><th>What stays constant</th></tr></thead>\n    <tbody>\n      <tr><td>Horizontal (x)</td><td>0</td><td>v<sub>x</sub> — never changes during flight</td></tr>\n      <tr><td>Vertical (y)</td><td>−g</td><td>Nothing — v<sub>y</sub> changes constantly</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Time Is the Bridge</span>\n    <p>Time is the one quantity shared by both the horizontal and vertical halves of a projectile's motion — it's the bridge that connects them. A typical strategy: use the vertical half (a free-fall problem) to solve for the total time of flight, then plug that same time into the horizontal half (a constant-velocity problem) to find horizontal distance, or vice versa.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Never use vertical numbers (like v<sub>y</sub> or the vertical distance fallen) inside a horizontal equation, or horizontal numbers inside a vertical one. This sounds obvious written out, but under time pressure it's an extremely easy mix-up — especially when a problem gives you an angled launch velocity and you have to remember to break it into its horizontal and vertical components (v<sub>x</sub> = v·cosθ, v<sub>y</sub> = v·sinθ) before doing anything else.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p><strong>Horizontal Launch.</strong> A ball rolls off a table 1.2 m high with a horizontal speed of 3.0 m/s. Find how far from the base of the table it lands.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Split into two halves. Vertical half: the ball starts with v<sub>y</sub> = 0 (purely horizontal launch) and falls 1.2 m under gravity. Using Δy = v<sub>0y</sub>t + ½at²: −1.2 = 0 + ½(−9.8)t², so t² = 2.4/9.8 ≈ 0.245, giving t ≈ <strong>0.49 s</strong>. Horizontal half: horizontal velocity never changes, so Δx = v<sub>x</sub>t = (3.0)(0.49) ≈ <strong>1.5 m</strong>. Notice the horizontal speed (3.0 m/s) never once entered the vertical calculation, and the fall height (1.2 m) never once entered the horizontal calculation — that separation is the entire method.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Range Is a Trade-Off, and 45° Wins It</span>\n    <p>For a launch and landing at the same height, horizontal range depends on two things pulling in opposite directions: a larger angle gives more hang time (favoring range), while a smaller angle gives more horizontal speed (also favoring range). Push the angle too high and you get plenty of hang time but almost no horizontal speed; push it too low and you get plenty of horizontal speed but almost no hang time. <strong>45° is the angle that balances these two effects exactly</strong>, producing the maximum possible range. You don't need to derive this from the range formula — just recognize the trade-off. A useful related fact: any two angles that add up to 90° (like 30° and 60°) give the <em>same</em> range as each other, just via a different mix of hang time and horizontal speed.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain why horizontal and vertical motion in a projectile are independent of each other.</li>\n      <li>Break an angled launch velocity into horizontal and vertical components.</li>\n      <li>Solve a projectile motion problem by using time as the connecting variable between the horizontal and vertical halves.</li>\n      <li>Explain, conceptually, why 45° maximizes range on level ground, and why complementary angles share the same range.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 1 Practice Set</h2>\n  <p>Work through every problem before checking the answer key — for anything asking you to \"explain,\" actually write out the physical reasoning in words, exactly like the real exam expects.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Can an object have zero velocity and nonzero acceleration at the same instant? Give a real example.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A car travels in a perfect circle, returning to its starting point after one full lap at constant speed. Find its average velocity and its average speed for the lap, and explain the difference.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Sketch a v-t graph for an object that starts at rest, speeds up at a constant rate, then moves at a constant velocity, then slows to a stop at a constant rate.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Two balls are launched horizontally from the same height at the same instant, one twice as fast as the other. Which one hits the ground first? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>An object's position-time graph is a straight line with negative slope. Describe its velocity and acceleration.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A hiker walks 3.0 km north, then 4.0 km east. Find the magnitude of the hiker's total displacement.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A car accelerates from 10 m/s to 26 m/s in 8.0 s. Find its acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A train decelerates from 30 m/s to rest over a distance of 450 m. Find its acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A stone is dropped from rest from a bridge and hits the water 2.2 s later. Find the height of the bridge above the water.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A v-t graph shows an object's velocity decreasing in a straight line from 20 m/s to 0 m/s over 5.0 s. Find the object's displacement over that time.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A projectile is launched at 40 m/s at an angle of 30° above the horizontal. Find its initial horizontal and vertical velocity components.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A ball rolls off a 2.0 m high table with a horizontal speed of 4.0 m/s. Find the time it takes to hit the floor and the horizontal distance it travels.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A cyclist accelerates from rest at 1.5 m/s² for 6.0 s, then continues at constant velocity for 10 s. Find the total distance traveled.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Yes — the top of a vertical throw is the classic example. Velocity is exactly zero for an instant at the peak, but gravity (acceleration) never stops acting, even at that instant.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Average velocity is zero, since the car returns to its exact starting position (displacement = 0). Average speed is nonzero, since the car covered real distance (the full circumference) the whole way around — distance never cancels the way displacement can.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">A line rising from the origin at a constant positive slope, then a flat horizontal segment at some positive value, then a line falling at a constant negative slope back down to zero.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">They hit at the exact same time. Vertical motion (which determines when each ball reaches the ground) depends only on the fall height and gravity — both identical for both balls — and is completely independent of horizontal speed.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Velocity is constant and negative (a straight-line x-t graph means constant slope, and a negative slope means negative velocity). Acceleration is zero, since velocity isn't changing at all.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">Using the Pythagorean theorem on the two perpendicular displacement legs: √(3.0² + 4.0²) = √(9+16) = √25 = <strong>5.0 km</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">a = Δv/Δt = (26−10)/8.0 = <strong>2.0 m/s²</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">Using v² = v0² + 2aΔx: 0 = 30² + 2a(450), so a = −900/900 = <strong>−1.0 m/s²</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">Using Δy = v0t + ½at² with v0=0: Δy = ½(9.8)(2.2)² ≈ <strong>23.7 m</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">Displacement equals the area under the v-t graph — a triangle: ½(5.0)(20) = <strong>50 m</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">vx = v·cosθ = 40·cos30° ≈ <strong>34.6 m/s</strong>. vy = v·sinθ = 40·sin30° = <strong>20 m/s</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">Vertical: −2.0 = ½(−9.8)t², giving t ≈ <strong>0.64 s</strong>. Horizontal: Δx = (4.0)(0.64) ≈ <strong>2.6 m</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">Phase 1 (speeding up): Δx = ½(1.5)(6.0)² = 27 m, ending at v = (1.5)(6.0) = 9.0 m/s. Phase 2 (constant velocity): Δx = (9.0)(10) = 90 m. Total: 27 + 90 = <strong>117 m</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 1 QBank</strong> to drill these ideas, then move on to <strong>Unit 2 — Force and Translational Dynamics</strong>.\n  </div>\n\n</div>\n",
  "2": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Force and Translational Dynamics</h1>\n  <p class=\"sub\">Unit 1 described how things move. This unit explains why. Newton's three laws are almost embarrassingly short to state — you could fit them on an index card — but they're the single most heavily tested idea on this exam, and free-body diagrams are the tool that makes them usable on an actual problem.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 18–23%</span>\n    <span class=\"pill\">9 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s21\">2.1 Forces and Free-Body Diagrams</a></li>\n    <li><a href=\"#s22\">2.2 Newton's First Law and Equilibrium</a></li>\n    <li><a href=\"#s23\">2.3 Newton's Second Law</a></li>\n    <li><a href=\"#s24\">2.4 Newton's Third Law</a></li>\n    <li><a href=\"#s25\">2.5 Gravitational Force and Weight</a></li>\n    <li><a href=\"#s26\">2.6 Normal Force</a></li>\n    <li><a href=\"#s27\">2.7 Friction</a></li>\n    <li><a href=\"#s28\">2.8 Spring Force (Hooke's Law)</a></li>\n    <li><a href=\"#s29\">2.9 Ramps, Pulleys, and Multi-Body Systems</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Draw the Diagram Before You Write a Single Equation</span>\n    <p>Every single problem in this unit, no matter how it's worded, starts the same way: isolate one object, draw every force acting <em>on</em> it (never forces it exerts on other things), and only then write F<sub>net</sub> = ma along whatever axis matters. Skipping the diagram and trying to jump straight to the algebra is where almost every error in this unit is born — a force gets forgotten, a sign gets flipped, an angle gets mismeasured. Draw it first, every time, even when it feels obvious.</p>\n  </div>\n\n  <h2 id=\"s21\"><span class=\"num\">2.1</span>Forces and Free-Body Diagrams</h2>\n  <p>A force is simply a push or a pull — an interaction between two objects. That \"between two objects\" part matters more than it sounds like it should: a force never exists in isolation, floating around on its own. Every force has a specific source and a specific target, and keeping track of both is the whole game in this unit.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — A Free-Body Diagram Isolates One Object</span>\n    <p>A free-body diagram (FBD) shows a single object as a dot, with arrows representing every force acting <strong>on</strong> that object, drawn roughly proportional to size and pointing in the correct direction. Nothing else belongs on the diagram — no forces the object exerts on anything else, no velocity arrows, no acceleration arrows. Just the forces landing on that one object.</p>\n  </div>\n\n  <!--apv:fbd-examples-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 288\" role=\"img\" aria-label=\"Free-body diagrams for a block at rest, a block pulled with friction, and a hanging mass\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Free-body diagrams: draw only forces ON the object</tspan></text><text x=\"130\" y=\"52\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"130\" dy=\"0\">At rest on a table</tspan></text><rect x=\"90\" y=\"120\" width=\"80\" height=\"50\" rx=\"3\" fill=\"#d9c7a8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"145\" r=\"7\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"85\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"142\" y=\"90\" text-anchor=\"start\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"142\" dy=\"0\">N</tspan></text><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"205\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"142\" y=\"205\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"142\" dy=\"0\">F_g = mg</tspan></text><line x1=\"60\" y1=\"170\" x2=\"200\" y2=\"170\" stroke=\"#777\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"130\" y=\"232\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"130\" dy=\"0\">N = mg (balanced)</tspan></text><line x1=\"255\" y1=\"44\" x2=\"255\" y2=\"246\" stroke=\"#D9D6CC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"380\" y=\"52\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Pulled, sliding with friction</tspan></text><circle cx=\"380\" cy=\"145\" r=\"7\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"145\" x2=\"380\" y2=\"85\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"392\" y=\"90\" text-anchor=\"start\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"392\" dy=\"0\">N</tspan></text><line x1=\"380\" y1=\"145\" x2=\"380\" y2=\"205\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"392\" y=\"205\" text-anchor=\"start\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"392\" dy=\"0\">F_g</tspan></text><line x1=\"380\" y1=\"145\" x2=\"460\" y2=\"145\" stroke=\"#2E6BC6\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"466\" y=\"140\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"466\" dy=\"0\">F_pull</tspan></text><line x1=\"380\" y1=\"145\" x2=\"310\" y2=\"145\" stroke=\"#2E7D32\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><text x=\"300\" y=\"140\" text-anchor=\"end\" font-size=\"13\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"300\" dy=\"0\">f</tspan></text><text x=\"380\" y=\"232\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"380\" dy=\"0\">no 'force of motion' arrow</tspan></text><line x1=\"505\" y1=\"44\" x2=\"505\" y2=\"246\" stroke=\"#D9D6CC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"630\" y=\"52\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">Hanging from a rope</tspan></text><circle cx=\"630\" cy=\"145\" r=\"7\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"630\" y1=\"145\" x2=\"630\" y2=\"85\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"642\" y=\"90\" text-anchor=\"start\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"642\" dy=\"0\">T</tspan></text><line x1=\"630\" y1=\"145\" x2=\"630\" y2=\"205\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"642\" y=\"205\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"642\" dy=\"0\">F_g = mg</tspan></text><text x=\"630\" y=\"232\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"630\" dy=\"0\">at rest: T = mg</tspan></text><text x=\"380\" y=\"270\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Steps: isolate one object → draw it as a dot → add each contact force and gravity → label every arrow.</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">A free-body diagram shows one object as a dot with arrows for every force acting on it. There is no arrow for 'motion' itself, and the object's own forces on other things are never drawn.</p>\n  </div>\n<!--/apv:fbd-examples-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A very common early mistake is drawing a \"force of motion\" or a \"forward force\" pushing an object simply because it's moving. Motion by itself is not a force, and it doesn't need one to sustain it — that idea (that motion requires a constant push) is actually the exact misconception Newton's First Law was built to correct. Only draw forces that come from an actual physical source: gravity, a surface, a rope, a spring, a person's hand.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Building a Simple FBD.</strong> A box sits at rest on a horizontal floor. Identify every force acting on the box and sketch the free-body diagram.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Ask: what is physically touching or otherwise interacting with the box? The Earth is pulling it down via gravity — draw a downward arrow labeled F<sub>g</sub> (or mg). The floor is pushing back up on it — draw an upward arrow labeled F<sub>N</sub> (normal force). Nothing else is touching the box, so those are the only two forces. Since the box sits at rest, these two arrows should be drawn the same length, since they must balance for the box to stay still — a preview of Newton's First Law in the very next section.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain why a force always requires both a source and a target object.</li>\n      <li>Draw a correct free-body diagram for a simple object, including only real, physically-sourced forces.</li>\n      <li>Explain why \"motion\" itself is never drawn as a force on a free-body diagram.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s22\"><span class=\"num\">2.2</span>Newton's First Law and Equilibrium</h2>\n  <p>Newton's First Law says an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net (unbalanced) force. The genuinely radical part of this law, especially the first time you really sit with it, is that it says constant-velocity motion needs <em>no</em> force to keep going — it's rest that's the special case people usually assume is \"natural,\" not motion.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Equilibrium Means Zero Net Force</span>\n    <p>An object is in <strong>equilibrium</strong> whenever its net force is exactly zero — which includes both an object sitting still <em>and</em> an object cruising at constant velocity in a straight line. Both situations have zero acceleration, and Newton's First Law treats them identically. \"At equilibrium\" does not mean \"at rest\"; it means \"not accelerating.\"</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Zero net force does <strong>not</strong> mean zero forces. A book resting on a table has two forces acting on it — gravity and the normal force — and they're both very real and nonzero. What makes it equilibrium is that those two forces are equal in magnitude and opposite in direction, so they cancel to a net force of zero. Don't confuse \"the forces cancel\" with \"there are no forces.\"</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Two Ropes Holding a Sign.</strong> A 40 N sign hangs at rest, suspended by two vertical ropes that share the load equally. Find the tension in each rope.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The sign is at rest, so it's in equilibrium — net force must be zero. Three forces act on the sign: gravity (40 N down) and two rope tensions (both up). For the net force to be zero, the two tensions together must add up to exactly 40 N upward. Since the ropes share the load equally, each one supplies half: T = 40/2 = <strong>20 N</strong> each.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State Newton's First Law in your own words, including both the at-rest and constant-velocity cases.</li>\n      <li>Explain why equilibrium means zero net force, not zero forces.</li>\n      <li>Solve a simple equilibrium problem by setting the sum of forces in a given direction equal to zero.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s23\"><span class=\"num\">2.3</span>Newton's Second Law</h2>\n  <p>This is the workhorse equation of the entire course. Nearly every dynamics problem you'll ever face, in this unit and beyond, eventually comes down to this one relationship.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">F<sub>net</sub> = ma</div>\n    <div class=\"sub\">net force = mass × acceleration — always along a single, chosen axis</div>\n  </div>\n\n  <p>F<sub>net</sub> here means the <em>vector sum</em> of every force acting on the object — not any single force by itself. In practice, this almost always means picking a direction to call positive, adding up every force component along that direction (with the correct signs), and setting that sum equal to ma.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The pattern that unlocks the whole unit</div>\n    <p>Every single dynamics problem in this course reduces to the same three moves: (1) draw the FBD, (2) sum the forces along the axis that matters, (3) set that sum equal to ma and solve. Ramps, pulleys, elevators, multi-object systems — every one of them is this same three-step process, just with a longer or trickier list of forces in step 2.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Acceleration always points in the same direction as the <em>net</em> force — never necessarily in the direction of motion, and never necessarily in the direction of any single individual force. An object can be moving right while its net force (and therefore its acceleration) points left, if it's decelerating. Always find the net force direction first; don't assume it matches whichever way the object happens to be moving.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>A Single Applied Force.</strong> A 5.0 kg box on a frictionless floor is pushed with a horizontal force of 15 N. Find its acceleration.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Vertically, gravity and the normal force cancel (the box doesn't accelerate up or down) — so only the horizontal direction matters here. The only horizontal force is the 15 N push, so F<sub>net</sub> = 15 N. Applying Newton's Second Law: a = F<sub>net</sub>/m = 15/5.0 = <strong>3.0 m/s²</strong>, in the direction of the push.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State Newton's Second Law and explain what F<sub>net</sub> actually means (a vector sum, not a single force).</li>\n      <li>Apply the draw-sum-solve process to find acceleration given a set of forces.</li>\n      <li>Explain why acceleration direction matches net force direction, not necessarily the direction of motion.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s24\"><span class=\"num\">2.4</span>Newton's Third Law</h2>\n  <p>For every action force, there's a reaction force — equal in magnitude, opposite in direction, acting on the <em>other</em> object in the interaction. This is probably the most commonly misquoted law in all of physics, and almost every misquote comes from missing that last part about which object each force acts on.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Third Law Pairs Never Act on the Same Object</span>\n    <p>A Third Law pair always consists of two forces acting on <strong>two different objects</strong> — never both on the same object. Push on a wall, and the wall pushes back on you, equally hard, in the opposite direction. Those two forces can never cancel each other out on a free-body diagram, because they never appear on the same diagram in the first place — one acts on you, the other acts on the wall.</p>\n  </div>\n\n  <!--apv:third-law-pairs-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 268\" role=\"img\" aria-label=\"Third law force pairs between a person and a wall, and a warning about normal force and gravity\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Third-law pairs: equal, opposite, and on DIFFERENT objects</tspan></text><text x=\"190\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"190\" dy=\"0\">Book on a table</tspan></text><rect x=\"150\" y=\"100\" width=\"80\" height=\"36\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"136\" x2=\"290\" y2=\"136\" stroke=\"#b8a888\" stroke-width=\"12\" stroke-linecap=\"round\"/><text x=\"190\" y=\"122\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"190\" dy=\"0\">book</tspan></text><line x1=\"165\" y1=\"98\" x2=\"165\" y2=\"54\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"140\" y=\"76\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"140\" dy=\"0\">N: table on book</tspan></text><line x1=\"215\" y1=\"148\" x2=\"215\" y2=\"196\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"225\" y=\"200\" text-anchor=\"start\" font-size=\"11\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"225\" dy=\"0\">book on table</tspan></text><text x=\"190\" y=\"232\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"190\" dy=\"0\">N (on book) pairs with 'book on table' (on table).</tspan><tspan x=\"190\" dy=\"14.4\">N and F_g both act on the book: NOT a pair.</tspan></text><line x1=\"380\" y1=\"44\" x2=\"380\" y2=\"250\" stroke=\"#D9D6CC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"570\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"570\" dy=\"0\">Pushing on a wall</tspan></text><circle cx=\"480\" cy=\"120\" r=\"18\" fill=\"#f4d8c0\" stroke=\"#555\" stroke-width=\"1.5\"/><rect x=\"480\" y=\"138\" width=\"8\" height=\"40\" rx=\"3\" fill=\"#f4d8c0\" stroke=\"#555\" stroke-width=\"1.5\"/><rect x=\"640\" y=\"80\" width=\"30\" height=\"150\" rx=\"0\" fill=\"#999\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"655\" y=\"160\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#fff\" transform=\"rotate(-90 655 160)\"><tspan x=\"655\" dy=\"0\">wall</tspan></text><line x1=\"500\" y1=\"130\" x2=\"636\" y2=\"130\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"570\" y=\"118\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"570\" dy=\"0\">F (person on wall)</tspan></text><line x1=\"636\" y1=\"156\" x2=\"500\" y2=\"156\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"570\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"570\" dy=\"0\">F (wall on person)</tspan></text><text x=\"570\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"570\" dy=\"0\">same size, opposite directions,</tspan><tspan x=\"570\" dy=\"15\">acting on two different objects</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">A third-law pair always involves two objects: A pushes on B, and B pushes on A. Because the forces act on different objects they never cancel inside one free-body diagram.</p>\n  </div>\n<!--/apv:third-law-pairs-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Gravity pulling a book down and the normal force pushing it up are <strong>not</strong> a Third Law pair, even though they're equal and opposite in a resting scenario. Both of those forces act on the <em>same</em> object (the book) — that makes them a coincidental balance from Newton's First Law, not a Third Law pair. A genuine Third Law pair for gravity would be: the book pulls the Earth upward, with exactly the same force the Earth pulls the book downward.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Identifying a Third Law Pair.</strong> A person stands still on the ground. Identify the Third Law reaction pair to the force of gravity pulling the person downward.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The Earth pulls the person down with a gravitational force — that's the \"action.\" The Third Law partner has to be the exact same TYPE of force (gravitational), equal in magnitude, opposite in direction, and acting on the OTHER object involved in that same interaction. So the reaction is: <strong>the person pulls the Earth upward</strong>, with a gravitational force of identical magnitude. Notice this is completely different from the normal force the ground exerts upward on the person — that's a separate interaction (contact, not gravity) with its own separate Third Law partner.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State Newton's Third Law precisely, including which two objects each pair of forces acts on.</li>\n      <li>Correctly identify a genuine Third Law pair, and distinguish it from two forces that merely happen to balance on the same object.</li>\n      <li>Explain why Third Law pairs can never cancel each other out on a single free-body diagram.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s25\"><span class=\"num\">2.5</span>Gravitational Force and Weight</h2>\n  <p>Weight is simply the force of gravity acting on an object's mass — and near Earth's surface, that relationship reduces to a strikingly simple equation.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">F<sub>g</sub> = mg</div>\n    <div class=\"sub\">g = 9.8 m/s² near Earth's surface</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Mass and weight are not the same thing, even though everyday language blurs them constantly. Mass is a fixed amount of matter, measured in kilograms — it doesn't change based on location. Weight is a <em>force</em>, measured in newtons, and it depends on the local gravitational field. Your mass on the Moon is identical to your mass on Earth; your weight is roughly one-sixth as much, because g is roughly one-sixth as strong there.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>Weight on Another World.</strong> An astronaut has a mass of 80 kg. Find her weight on Earth (g = 9.8 m/s²) and on the Moon (g = 1.6 m/s²).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">On Earth: F<sub>g</sub> = mg = (80)(9.8) = <strong>784 N</strong>. On the Moon: F<sub>g</sub> = mg = (80)(1.6) = <strong>128 N</strong>. Her mass — 80 kg — never changed between the two calculations; only g changed, because weight depends on the local gravitational field, not on the object itself.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Distinguish mass from weight, including their units.</li>\n      <li>Compute an object's weight given its mass and the local gravitational field strength.</li>\n      <li>Explain why an object's weight, unlike its mass, changes from planet to planet.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s26\"><span class=\"num\">2.6</span>Normal Force</h2>\n  <p>The normal force is the push a surface exerts on an object in contact with it, always directed perpendicular (\"normal,\" in the geometric sense) to that surface. It's a reaction force — the surface pushes back precisely because the object is pushing into it — and, crucially, its magnitude is <em>not</em> some fixed formula. It's whatever value is needed to satisfy Newton's Second Law in the direction perpendicular to the surface.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Normal Force Is Not Always Equal to Weight</span>\n    <p>On a flat, horizontal surface with no other vertical forces, F<sub>N</sub> = mg — but that's a special case, not a universal rule. Add a downward push, an upward pull, an incline, or vertical acceleration (like in an elevator), and F<sub>N</sub> changes to whatever value keeps the vertical net force consistent with the actual vertical acceleration. Always derive F<sub>N</sub> from Newton's Second Law in that scenario — never just assume F<sub>N</sub> = mg out of habit.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Normal Force with an Extra Push.</strong> A 10 kg box sits on a horizontal floor. Someone pushes straight down on it with an additional 20 N. Find the normal force.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The box isn't accelerating vertically, so the net vertical force is zero. Three vertical forces act: gravity (mg = 98 N, down), the extra push (20 N, down), and the normal force (up, unknown). Setting the sum to zero: F<sub>N</sub> − 98 − 20 = 0, so F<sub>N</sub> = <strong>118 N</strong> — noticeably more than mg alone, because the surface has to support the extra downward push too.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain what determines the normal force's direction and, more importantly, its magnitude.</li>\n      <li>Correctly compute normal force in scenarios beyond the simple \"flat surface, no other vertical forces\" case.</li>\n      <li>Explain why F<sub>N</sub> = mg is a special case, not a universal law.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s27\"><span class=\"num\">2.7</span>Friction</h2>\n  <p>Friction is a force that resists relative sliding between two surfaces in contact, and it comes in two flavors that behave quite differently from each other — mixing them up is one of the most common mistakes on this exam.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Type</th><th>When it applies</th><th>Formula</th></tr></thead>\n    <tbody>\n      <tr><td>Static friction</td><td>Object is NOT sliding (or on the verge of sliding)</td><td>f<sub>s</sub> ≤ μ<sub>s</sub>F<sub>N</sub> (a maximum, not a fixed value)</td></tr>\n      <tr><td>Kinetic friction</td><td>Object IS actively sliding</td><td>f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> (a fixed value while sliding)</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Static Friction Is a Range, Not a Number</span>\n    <p>Kinetic friction always equals μ<sub>k</sub>F<sub>N</sub> while an object slides — full stop, every time. Static friction is different: it adjusts itself to exactly match whatever's needed to keep the object from sliding, up to a maximum value of μ<sub>s</sub>F<sub>N</sub>. A box sitting still under a small push isn't necessarily experiencing μ<sub>s</sub>F<sub>N</sub> of friction — it's experiencing exactly enough friction to keep the net force at zero, which could be far less than the maximum.</p>\n  </div>\n\n  <!--apv:friction-graph-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 262\" role=\"img\" aria-label=\"Graph of friction force versus applied force showing static friction rising then dropping to constant kinetic friction\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Friction vs. applied force: static adjusts, kinetic stays fixed</tspan></text><line x1=\"90\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"230\" x2=\"90\" y2=\"70\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"290\" y=\"260\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"290\" dy=\"0\">applied force</tspan></text><text x=\"60\" y=\"150\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 60 150)\"><tspan x=\"60\" dy=\"0\">friction force</tspan></text><line x1=\"90\" y1=\"230\" x2=\"260\" y2=\"120\" stroke=\"#2E6BC6\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M 260 120 L 268 156 L 490 156\" fill=\"none\" stroke=\"#D2451E\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"260\" y1=\"230\" x2=\"260\" y2=\"120\" stroke=\"#999\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><text x=\"260\" y=\"246\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"260\" dy=\"0\">starts to slide</tspan></text><line x1=\"90\" y1=\"120\" x2=\"260\" y2=\"120\" stroke=\"#999\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><text x=\"160\" y=\"130\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"160\" dy=\"0\">static: f = applied</tspan><tspan x=\"160\" dy=\"14.4\">(up to f_max = μₛN)</tspan></text><text x=\"380\" y=\"142\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"380\" dy=\"0\">kinetic: f = μₖN (constant)</tspan></text><rect x=\"530\" y=\"56\" width=\"210\" height=\"150\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"635\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"635\" dy=\"0\">Key facts</tspan></text><text x=\"635\" y=\"106\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"635\" dy=\"0\">• static friction matches the</tspan><tspan x=\"635\" dy=\"15\">  push until it maxes out</tspan><tspan x=\"635\" dy=\"15\">• μₖ &lt; μₛ, so kinetic friction</tspan><tspan x=\"635\" dy=\"15\">  is lower than the maximum</tspan><tspan x=\"635\" dy=\"15\">  static friction</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Static friction rises to match the applied force until it reaches its maximum μₛN. Once sliding starts, friction drops to the constant value μₖN.</p>\n  </div>\n<!--/apv:friction-graph-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>μ<sub>s</sub> is (almost) always somewhat greater than μ<sub>k</sub> for the same pair of surfaces — it takes more force to get something moving than to keep it moving once it's already sliding. This is exactly why an object can require a noticeable shove to budge, then suddenly feel like it needs much less force to keep going once it starts.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p><strong>Kinetic Friction on a Sliding Box.</strong> A 4.0 kg box slides across a floor with μ<sub>k</sub> = 0.30. Find the kinetic friction force and the box's deceleration, assuming friction is the only horizontal force.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">First find the normal force: on a flat floor with no other vertical forces, F<sub>N</sub> = mg = (4.0)(9.8) = 39.2 N. Then kinetic friction: f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> = (0.30)(39.2) ≈ 11.8 N, directed opposite the sliding motion. Applying Newton's Second Law: a = f<sub>k</sub>/m = 11.8/4.0 ≈ <strong>2.9 m/s²</strong>, decelerating the box.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Distinguish static from kinetic friction, including which is a fixed value and which is a variable maximum.</li>\n      <li>Compute kinetic friction force given the coefficient of kinetic friction and the normal force.</li>\n      <li>Explain why μ<sub>s</sub> is typically greater than μ<sub>k</sub> for the same pair of surfaces.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s28\"><span class=\"num\">2.8</span>Spring Force (Hooke's Law)</h2>\n  <p>A stretched or compressed spring pushes or pulls back, always trying to return to its natural, unstretched length. This restoring behavior is described by one of the simplest force laws in the whole course.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">F<sub>spring</sub> = −kx</div>\n    <div class=\"sub\">k = spring constant (N/m) · x = displacement from the spring's natural length</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — The Negative Sign Means \"Restoring\"</span>\n    <p>That minus sign isn't decorative — it's the whole point. The spring force always points opposite to the displacement: stretch a spring in the positive direction, and it pulls back in the negative direction; compress it in the negative direction, and it pushes back in the positive direction. This \"always opposes the displacement\" behavior is called a <strong>restoring force</strong>, and it's going to reappear as the entire foundation of Unit 7 (Oscillations).</p>\n  </div>\n\n  <!--apv:hooke-law-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 340\" role=\"img\" aria-label=\"Spring stretched and compressed with restoring force and a force versus displacement graph\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Hooke's law: the spring force is proportional to displacement and opposes it</tspan></text><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"310\" stroke=\"#777\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M 40 70 L 50 70 L 53.5 58 L 60.5 82 L 67.5 58 L 74.5 82 L 81.5 58 L 88.5 82 L 95.5 58 L 102.5 82 L 109.5 58 L 116.5 82 L 123.5 58 L 130.5 82 L 137.5 58 L 144.5 82 L 151.5 58 L 158.5 82 L 165.5 58 L 172.5 82 L 179.5 58 L 186.5 82 L 190 70 L 200 70\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"200\" y=\"48\" width=\"40\" height=\"44\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><text x=\"220\" y=\"110\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"220\" dy=\"0\">natural length (x = 0, F = 0)</tspan></text><path d=\"M 40 170 L 50 170 L 56 158 L 68 182 L 80 158 L 92 182 L 104 158 L 116 182 L 128 158 L 140 182 L 152 158 L 164 182 L 176 158 L 188 182 L 200 158 L 212 182 L 224 158 L 236 182 L 248 158 L 260 182 L 272 158 L 284 182 L 290 170 L 300 170\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"300\" y=\"148\" width=\"40\" height=\"44\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><line x1=\"320\" y1=\"136\" x2=\"260\" y2=\"136\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"290\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"290\" dy=\"0\">F</tspan></text><text x=\"320\" y=\"210\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"320\" dy=\"0\">stretched (x &gt; 0): F points back, −kx</tspan></text><path d=\"M 40 270 L 50 270 L 51.75 258 L 55.25 282 L 58.75 258 L 62.25 282 L 65.75 258 L 69.25 282 L 72.75 258 L 76.25 282 L 79.75 258 L 83.25 282 L 86.75 258 L 90.25 282 L 93.75 258 L 97.25 282 L 100.75 258 L 104.25 282 L 107.75 258 L 111.25 282 L 114.75 258 L 118.25 282 L 120 270 L 130 270\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"130\" y=\"248\" width=\"40\" height=\"44\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"236\" x2=\"210\" y2=\"236\" stroke=\"#D2451E\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"180\" y=\"230\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"180\" dy=\"0\">F</tspan></text><text x=\"150\" y=\"310\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"150\" dy=\"0\">compressed (x &lt; 0): F points out, +</tspan></text><line x1=\"470\" y1=\"270\" x2=\"720\" y2=\"270\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"470\" y1=\"270\" x2=\"470\" y2=\"100\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"595\" y=\"300\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"595\" dy=\"0\">displacement x</tspan></text><text x=\"440\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 440 185)\"><tspan x=\"440\" dy=\"0\">F_spring</tspan></text><line x1=\"490\" y1=\"120\" x2=\"700\" y2=\"258\" stroke=\"#D2451E\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"466\" y1=\"185\" x2=\"720\" y2=\"185\" stroke=\"#bbb\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"660\" y=\"130\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"660\" dy=\"0\">slope = −k</tspan></text><text x=\"595\" y=\"250\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"595\" dy=\"0\">k = stiffness (N/m)</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">A spring always pushes or pulls back toward its natural length. On an F–x graph the slope is −k, so a stiffer spring has a steeper line.</p>\n  </div>\n<!--/apv:hooke-law-->\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p><strong>Finding a Spring Constant.</strong> A spring stretches 0.12 m when a 3.0 N force is applied to it. Find the spring constant.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using the magnitude form of Hooke's Law, F = kx: 3.0 = k(0.12), so k = 3.0/0.12 = <strong>25 N/m</strong>. This tells you it takes 25 N of force for every meter you stretch this particular spring — a genuine property of the spring itself, independent of how far it's actually been stretched in any one instance.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State Hooke's Law and explain what the negative sign physically represents.</li>\n      <li>Compute spring force, spring constant, or displacement given the other two quantities.</li>\n      <li>Explain what makes a spring force a \"restoring\" force.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s29\"><span class=\"num\">2.9</span>Ramps, Pulleys, and Multi-Body Systems</h2>\n  <p>This section doesn't introduce any new physics at all — it's entirely about applying Sections 2.1 through 2.8 to more elaborate setups. The math gets a little longer, but the underlying method (draw the FBD, sum the forces, apply F=ma) never changes.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Tilting Your Axes on a Ramp</span>\n    <p>On an incline, the standard move is to rotate your coordinate system so that one axis runs parallel to the ramp's surface and the other runs perpendicular to it — rather than sticking with strict horizontal/vertical axes. Gravity then needs to be broken into components: mg·sinθ along the ramp (driving the object down the slope) and mg·cosθ perpendicular to the ramp (balanced by the normal force). This single reframing turns a two-dimensional problem into two much simpler one-dimensional ones.</p>\n  </div>\n\n  <!--apv:ramp-components-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 264\" role=\"img\" aria-label=\"Block on an incline with normal force, weight and weight components along and perpendicular to the ramp\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Ramp problems: tilt the axes so one runs along the incline</tspan></text><path d=\"M 70 220 L 430 220 L 430 80 Z\" fill=\"#efe6d2\" stroke=\"#777\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g transform=\"rotate(-21.3 290 134.4)\"><rect x=\"260\" y=\"100.4\" width=\"60\" height=\"34\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#555\" stroke-width=\"1.5\"/></g><line x1=\"296\" y1=\"118\" x2=\"272\" y2=\"56\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"266\" y=\"52\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"266\" dy=\"0\">N</tspan></text><line x1=\"296\" y1=\"118\" x2=\"296\" y2=\"198\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"310\" y=\"196\" text-anchor=\"start\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"310\" dy=\"0\">mg</tspan></text><line x1=\"296\" y1=\"118\" x2=\"240\" y2=\"139\" stroke=\"#2E7D32\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><text x=\"234\" y=\"154\" text-anchor=\"end\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"234\" dy=\"0\">mg sinθ</tspan></text><line x1=\"296\" y1=\"118\" x2=\"318\" y2=\"174\" stroke=\"#C99700\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#aho)\"/><text x=\"324\" y=\"180\" text-anchor=\"start\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#C99700\"><tspan x=\"324\" dy=\"0\">mg cosθ</tspan></text><text x=\"110\" y=\"210\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"110\" dy=\"0\">θ</tspan></text><path d=\"M 130 220 A 60 60 0 0 0 125 202\" fill=\"none\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"500\" y=\"56\" width=\"240\" height=\"190\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"620\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">Along the ramp</tspan></text><text x=\"620\" y=\"104\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">mg sinθ down the slope</tspan><tspan x=\"620\" dy=\"15\">plus friction (if any)</tspan></text><text x=\"620\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">Perpendicular to the ramp</tspan></text><text x=\"620\" y=\"174\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">N = mg cosθ</tspan><tspan x=\"620\" dy=\"15\">(no acceleration this way)</tspan></text><text x=\"620\" y=\"224\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"620\" dy=\"0\">θ is the ramp angle, also the angle</tspan><tspan x=\"620\" dy=\"13.8\">between mg and the perpendicular</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Rotate the axes so x runs along the incline. Weight splits into mg sinθ along the ramp and mg cosθ into it; the normal force balances the second part.</p>\n  </div>\n<!--/apv:ramp-components-->\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Connected Objects Share One Acceleration</span>\n    <p>When two objects are connected by a rope or string over a pulley (an Atwood machine, for instance), they're forced to move together — speeding up and slowing down in lockstep, even though they might be moving in different directions in space (one up, one down, say). That shared magnitude of acceleration is what lets you write one F<sub>net</sub> = ma equation for each object separately, then combine the two equations to solve for both the tension and the acceleration together.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p><strong>A Frictionless Atwood Machine.</strong> Two masses, 6.0 kg and 4.0 kg, hang from opposite ends of a rope over a frictionless, massless pulley. Find the acceleration of the system and the tension in the rope.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The heavier mass (6.0 kg) will accelerate downward; the lighter mass (4.0 kg) will accelerate upward, both with the same magnitude a. For the 6.0 kg mass (taking down as positive for it): m<sub>1</sub>g − T = m<sub>1</sub>a. For the 4.0 kg mass (taking up as positive for it): T − m<sub>2</sub>g = m<sub>2</sub>a. Adding these two equations together, T cancels: m<sub>1</sub>g − m<sub>2</sub>g = m<sub>1</sub>a + m<sub>2</sub>a, so a = g(m<sub>1</sub>−m<sub>2</sub>)/(m<sub>1</sub>+m<sub>2</sub>) = 9.8(2.0)/10 ≈ <strong>1.96 m/s²</strong>. Substituting back into the second equation: T = m<sub>2</sub>(g+a) = 4.0(9.8+1.96) ≈ <strong>47 N</strong>. Notice how adding the two equations together was the key move — it eliminated the unknown tension and left a single equation with only acceleration in it.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Break gravity into components parallel and perpendicular to an incline.</li>\n      <li>Explain why connected objects share the same magnitude of acceleration.</li>\n      <li>Set up and solve a two-object Atwood-machine-style problem for both acceleration and tension.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 2 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A ball is in projectile motion, moving through the air after being thrown. Is the \"force of the throw\" still acting on it while it flies? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Explain why the normal force on a book resting on an incline is less than the book's weight.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A rocket in deep space, far from any planet, fires its engine and accelerates. Identify the Third Law reaction pair to the force the rocket exerts on the expelled exhaust gas.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A box sits still on a rough floor under a horizontal push too small to move it. Is the friction force on the box equal to μ<sub>s</sub>F<sub>N</sub>? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Two blocks of different mass are connected by a string over a pulley, hanging on either side. Explain why both blocks have the same magnitude of acceleration.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A net force of 24 N acts on an 8.0 kg object. Find its acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the weight of a 15 kg object on Earth.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A 12 kg box on a horizontal floor is pushed with a 40 N horizontal force; μ<sub>k</sub> = 0.20. Find the box's acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A spring with k = 150 N/m is compressed 0.080 m. Find the magnitude of the spring force.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A 5.0 kg block sits on a frictionless 30° incline. Find its acceleration down the ramp.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A 2.0 kg object accelerates upward at 3.0 m/s² when lifted by a rope. Find the tension in the rope.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Two masses, 8.0 kg and 5.0 kg, are connected over a frictionless pulley (Atwood machine). Find the system's acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A 10 kg box is pulled by a rope at a 37° angle above horizontal with 50 N of tension across a frictionless floor. Find the box's horizontal acceleration. (cos37° ≈ 0.80)</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">No. There's no ongoing \"force of the throw\" — once the ball leaves the hand, the only force acting on it is gravity (ignoring air resistance). The ball continues moving forward simply because of Newton's First Law (inertia), not because some force is still pushing it.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">On an incline, gravity splits into a component perpendicular to the surface (mg·cosθ) and a component along the surface (mg·sinθ). The normal force only has to balance the perpendicular component, mg·cosθ, which is less than the full weight mg whenever θ > 0.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">The exhaust gas pushes back on the rocket with an equal and opposite force. (The rocket pushes the gas one way; by Newton's Third Law, the gas pushes the rocket the other way — this is literally how rocket propulsion works.)</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">No. Since the box isn't moving, static friction adjusts to exactly match the applied push, keeping net force at zero — it isn't necessarily at its maximum possible value (μ<sub>s</sub>F<sub>N</sub>) unless the push is right at the threshold of causing sliding.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Because they're connected by an inextensible string, the two blocks must move together — whatever distance one travels, the other travels too, in the same amount of time, forcing their speeds and accelerations to match in magnitude even though they move in different directions (one up, one down).</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">a = F/m = 24/8.0 = <strong>3.0 m/s²</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">F<sub>g</sub> = mg = (15)(9.8) = <strong>147 N</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">F<sub>N</sub> = mg = (12)(9.8) = 117.6 N. f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> = 0.20(117.6) ≈ 23.5 N. F<sub>net</sub> = 40 − 23.5 = 16.5 N. a = 16.5/12 ≈ <strong>1.4 m/s²</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">F = kx = (150)(0.080) = <strong>12 N</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">On a frictionless incline, a = g·sinθ = 9.8(sin30°) = 9.8(0.50) = <strong>4.9 m/s²</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">T − mg = ma, so T = m(g+a) = 2.0(9.8+3.0) = <strong>25.6 N</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">a = g(m1−m2)/(m1+m2) = 9.8(8.0−5.0)/(13) = 9.8(3.0)/13 ≈ <strong>2.3 m/s²</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">Horizontal component of tension: T·cos37° = 50(0.80) = 40 N. a = F/m = 40/10 = <strong>4.0 m/s²</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 2 QBank</strong> to drill these ideas, then move on to <strong>Unit 3 — Work, Energy, and Power</strong>.\n  </div>\n\n</div>\n",
  "3": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Work, Energy, and Power</h1>\n  <p class=\"sub\">Force and Newton's laws let you track motion moment by moment, force by force. Energy is a different kind of bookkeeping entirely — instead of tracking every instant, you just compare a \"before\" snapshot to an \"after\" snapshot. For a huge number of problems, that shortcut is dramatically faster than grinding through kinematics and forces directly.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 18–23%</span>\n    <span class=\"pill\">6 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s31\">3.1 Work Done by a Constant Force</a></li>\n    <li><a href=\"#s32\">3.2 Kinetic Energy and the Work-Energy Theorem</a></li>\n    <li><a href=\"#s33\">3.3 Gravitational and Elastic Potential Energy</a></li>\n    <li><a href=\"#s34\">3.4 Conservation of Mechanical Energy</a></li>\n    <li><a href=\"#s35\">3.5 Non-Conservative Forces and Energy Dissipation</a></li>\n    <li><a href=\"#s36\">3.6 Power</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Before and After, Not Moment by Moment</span>\n    <p>Energy methods trade the moment-by-moment tracking of forces and kinematics for a much simpler question: what was the total mechanical energy at the START, and what is it at the END? If no non-conservative force does work in between (like friction), those two numbers are equal — conservation of energy. If something DOES do work in between, the difference between start and end tells you exactly how much. Whenever a problem gives you heights, speeds, or spring compressions and doesn't seem to care about the path taken to get there, that's your signal to reach for energy instead of forces.</p>\n  </div>\n\n  <h2 id=\"s31\"><span class=\"num\">3.1</span>Work Done by a Constant Force</h2>\n  <p>In physics, \"work\" has a specific, narrow meaning that doesn't always match the everyday sense of the word. Holding a heavy box perfectly still, no matter how tiring it feels, does zero work on that box — because work requires actual displacement.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">W = Fd·cosθ</div>\n    <div class=\"sub\">θ = angle between the force and the displacement direction</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Only the Force Component Along the Motion Counts</span>\n    <p>That cosθ factor is doing real work in this formula (pun intended). If a force is applied at an angle to the direction of motion, only the piece of that force pointing along the direction of travel actually contributes to work — the perpendicular piece contributes nothing at all, no matter how large it is. A force applied exactly perpendicular to motion (θ = 90°) does zero work, since cos90° = 0.</p>\n  </div>\n\n  <!--apv:work-angle-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 262\" role=\"img\" aria-label=\"Force applied at an angle to the displacement with its horizontal component and a table of work for different angles\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Work: only the component of force along the motion counts</tspan></text><rect x=\"100\" y=\"140\" width=\"90\" height=\"50\" rx=\"3\" fill=\"#c8d8e8\" stroke=\"#6b5a3a\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"190\" x2=\"360\" y2=\"190\" stroke=\"#777\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"145\" y1=\"160\" x2=\"255\" y2=\"100\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"265\" y=\"96\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"265\" dy=\"0\">F</tspan></text><line x1=\"145\" y1=\"160\" x2=\"255\" y2=\"160\" stroke=\"#2E7D32\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><text x=\"262\" y=\"164\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"262\" dy=\"0\">F cosθ</tspan></text><line x1=\"255\" y1=\"160\" x2=\"255\" y2=\"100\" stroke=\"#2E6BC6\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"285\" y=\"128\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"285\" dy=\"0\">F sinθ</tspan></text><path d=\"M 190 160 A 45 45 0 0 0 183 142\" fill=\"none\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"200\" y=\"148\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"200\" dy=\"0\">θ</tspan></text><line x1=\"100\" y1=\"218\" x2=\"360\" y2=\"218\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" marker-end=\"url(#ah)\"/><text x=\"230\" y=\"238\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"230\" dy=\"0\">displacement d</tspan></text><text x=\"230\" y=\"70\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"230\" dy=\"0\">W = F d cosθ</tspan></text><rect x=\"430\" y=\"56\" width=\"310\" height=\"170\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"585\" y=\"80\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"585\" dy=\"0\">Sign of the work</tspan></text><text x=\"520\" y=\"112\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"520\" dy=\"0\">θ = 0°</tspan></text><text x=\"600\" y=\"112\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"600\" dy=\"0\">W = +Fd (max)</tspan></text><text x=\"520\" y=\"140\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"520\" dy=\"0\">θ = 90°</tspan></text><text x=\"600\" y=\"140\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"600\" dy=\"0\">W = 0 (⟂ to motion)</tspan></text><text x=\"520\" y=\"168\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"520\" dy=\"0\">θ = 180°</tspan></text><text x=\"600\" y=\"168\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"600\" dy=\"0\">W = −Fd (opposes)</tspan></text><text x=\"585\" y=\"204\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"585\" dy=\"0\">e.g. friction does negative work</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Only the part of the force parallel to the displacement does work. A perpendicular force does none, and a force opposing the motion does negative work.</p>\n  </div>\n<!--/apv:work-angle-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Work can be negative. If a force has a component pointing opposite the direction of motion — like friction acting on a moving object, or gravity acting on something moving upward — the work done by that force is negative (θ is between 90° and 180°, making cosθ negative). Negative work doesn't mean \"less work happened\"; it means that particular force is actively removing energy from the object's motion.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Work at an Angle.</strong> A 60 N force is applied at 40° above the horizontal to drag a crate 5.0 m across a floor. Find the work done by this force. (cos40° ≈ 0.77)</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The displacement is horizontal, and the force is applied at 40° from that direction, so θ = 40° in the work formula. W = Fd·cosθ = (60)(5.0)(0.77) ≈ <strong>231 J</strong>. Notice that only the horizontal component of the 60 N force — not its full magnitude — actually contributed to moving the crate forward; the formula automatically accounts for that through the cosine factor.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain why holding a stationary object does zero work, even if it's tiring.</li>\n      <li>Compute work done by a constant force applied at an angle to the displacement.</li>\n      <li>Explain what it physically means for a force to do negative work.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s32\"><span class=\"num\">3.2</span>Kinetic Energy and the Work-Energy Theorem</h2>\n  <p>Kinetic energy is the energy an object has because it's moving. The work-energy theorem is the bridge connecting Section 3.1's work directly to changes in an object's motion — and it's one of the most useful shortcuts in the entire course.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">KE = ½mv² &nbsp;·&nbsp; W<sub>net</sub> = ΔKE</div>\n    <div class=\"sub\">the net work done on an object equals its change in kinetic energy</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Why this is such a powerful shortcut</div>\n    <p>The work-energy theorem lets you find a final speed WITHOUT ever solving for acceleration or time. If you know the net work done on an object and its starting kinetic energy, you know its ending kinetic energy directly — and from there, its final speed. For problems where forces or accelerations aren't constant (a spring's force, for instance, changes as it compresses), this is often the only practical way to solve the problem at all.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>W<sub>net</sub> in this theorem means the work done by the NET force — equivalently, the sum of the work done by every individual force acting on the object. It is not just the work done by whichever force happens to be mentioned first in a problem. If multiple forces act on an object, either find the net force first and compute its work, or compute the work done by each force separately and add them together — both approaches give the same answer.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Using the Work-Energy Theorem.</strong> A 2.0 kg object starts at rest and has 40 J of net work done on it. Find its final speed.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since the object starts at rest, its initial KE is zero. By the work-energy theorem, W<sub>net</sub> = ΔKE = KE<sub>final</sub> − 0, so KE<sub>final</sub> = 40 J. Solving ½mv² = 40 for v: v² = 2(40)/2.0 = 40, so v = √40 ≈ <strong>6.3 m/s</strong>. Notice this was solved without ever needing to know the force, the distance individually, the acceleration, or the time — just the total net work and the mass.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute kinetic energy given mass and speed.</li>\n      <li>State the work-energy theorem and explain what \"net work\" means in this context.</li>\n      <li>Use the work-energy theorem to find a final speed without solving for acceleration first.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s33\"><span class=\"num\">3.3</span>Gravitational and Elastic Potential Energy</h2>\n  <p>Potential energy is stored energy — energy an object has because of its position or configuration, ready to be converted into motion. This section covers the two forms of potential energy that show up constantly in this course.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">PE<sub>grav</sub> = mgh &nbsp;·&nbsp; PE<sub>elastic</sub> = ½kx²</div>\n    <div class=\"sub\">h = height above a chosen reference level · x = displacement from a spring's natural length</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Only the Height Reference Point Is Arbitrary</span>\n    <p>Just like position in Unit 1, the \"zero\" of gravitational potential energy is a choice you get to make — call the ground h=0, or call a tabletop h=0, and get different PE<sub>grav</sub> numbers for the exact same physical scenario. That's fine, because physics only ever cares about <em>changes</em> in potential energy, and ΔPE comes out identical no matter which reference point you picked, as long as you're consistent within a single problem.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Elastic potential energy depends on x<em>squared</em>, not on x directly — unlike the spring force itself, which is linear in x. This means doubling a spring's compression doesn't double its stored energy; it quadruples it. Don't accidentally borrow the linear F=kx relationship when you actually need the energy formula.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Gravitational vs. Elastic PE.</strong> A 3.0 kg object sits 4.0 m above the ground. Separately, a spring with k = 200 N/m is compressed 0.15 m. Find each potential energy.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Gravitational: PE<sub>grav</sub> = mgh = (3.0)(9.8)(4.0) ≈ <strong>117.6 J</strong>. Elastic: PE<sub>elastic</sub> = ½kx² = ½(200)(0.15)² = ½(200)(0.0225) = <strong>2.25 J</strong>. These are two completely independent calculations describing two completely different physical setups — there's no direct comparison to draw between them beyond both being forms of \"stored\" energy.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute gravitational potential energy given mass, height, and a chosen reference point.</li>\n      <li>Compute elastic potential energy given a spring constant and displacement.</li>\n      <li>Explain why elastic PE depends on x², while spring force depends on x directly.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s34\"><span class=\"num\">3.4</span>Conservation of Mechanical Energy</h2>\n  <p>This is the payoff for the whole unit. When only conservative forces (gravity, springs) do work on a system — no friction, no applied pushes — total mechanical energy stays exactly constant throughout the motion, even as it freely trades back and forth between kinetic and potential forms.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">KE<sub>i</sub> + PE<sub>i</sub> = KE<sub>f</sub> + PE<sub>f</sub></div>\n    <div class=\"sub\">valid whenever no non-conservative force does work on the system</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The idea that unlocks the whole unit</div>\n    <p>Energy conservation lets you connect a \"before\" state and an \"after\" state directly, completely skipping over everything that happened in between — the exact shape of the path, how the speed varied along the way, how long it took. A roller coaster's speed at the bottom of a hill depends only on its height drop, not on whether the hill was a smooth slope or a wild series of loops. That's an enormous shortcut compared to tracking the motion instant by instant with kinematics.</p>\n  </div>\n\n  <!--apv:energy-bars-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 408\" role=\"img\" aria-label=\"Track with three marked points and energy bar charts showing kinetic and potential energy trading while total stays constant\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Conservation of mechanical energy: bars trade, the total stays the same</tspan></text><path d=\"M 40 70 C 110 70, 140 70, 190 150 C 240 230, 300 250, 380 250 C 460 250, 500 150, 560 110 C 600 85, 650 80, 700 80\" fill=\"none\" stroke=\"#777\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"70\" cy=\"60\" r=\"9\" fill=\"#C99700\" stroke=\"#7a5b00\" stroke-width=\"1.5\"/><text x=\"70\" y=\"44\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"70\" dy=\"0\">A</tspan></text><circle cx=\"250\" cy=\"216\" r=\"9\" fill=\"#C99700\" stroke=\"#7a5b00\" stroke-width=\"1.5\"/><text x=\"250\" y=\"200\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"250\" dy=\"0\">B</tspan></text><circle cx=\"530\" cy=\"122\" r=\"9\" fill=\"#C99700\" stroke=\"#7a5b00\" stroke-width=\"1.5\"/><text x=\"530\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"530\" dy=\"0\">C</tspan></text><text x=\"125\" y=\"272\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"125\" dy=\"0\">At A</tspan></text><rect x=\"80\" y=\"280\" width=\"26\" height=\"60\" rx=\"2\" fill=\"#2E6BC6\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"93\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"93\" dy=\"0\">PE</tspan></text><rect x=\"110\" y=\"340\" width=\"26\" height=\"0\" rx=\"2\" fill=\"#D2451E\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"123\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"123\" dy=\"0\">KE</tspan></text><rect x=\"140\" y=\"280\" width=\"26\" height=\"60\" rx=\"2\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\"/><text x=\"153\" y=\"354\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"153\" dy=\"0\">total</tspan></text><text x=\"375\" y=\"272\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"375\" dy=\"0\">At B (lowest)</tspan></text><rect x=\"330\" y=\"331\" width=\"26\" height=\"9\" rx=\"2\" fill=\"#2E6BC6\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"343\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"343\" dy=\"0\">PE</tspan></text><rect x=\"360\" y=\"289\" width=\"26\" height=\"51\" rx=\"2\" fill=\"#D2451E\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"373\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"373\" dy=\"0\">KE</tspan></text><rect x=\"390\" y=\"280\" width=\"26\" height=\"60\" rx=\"2\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\"/><text x=\"403\" y=\"354\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"403\" dy=\"0\">total</tspan></text><text x=\"625\" y=\"272\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"625\" dy=\"0\">At C</tspan></text><rect x=\"580\" y=\"301\" width=\"26\" height=\"39\" rx=\"2\" fill=\"#2E6BC6\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"593\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"593\" dy=\"0\">PE</tspan></text><rect x=\"610\" y=\"319\" width=\"26\" height=\"21\" rx=\"2\" fill=\"#D2451E\" stroke=\"#555\" stroke-width=\"1.5\"/><text x=\"623\" y=\"354\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"623\" dy=\"0\">KE</tspan></text><rect x=\"640\" y=\"280\" width=\"26\" height=\"60\" rx=\"2\" fill=\"none\" stroke=\"#888\" stroke-width=\"1.5\"/><text x=\"653\" y=\"354\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"653\" dy=\"0\">total</tspan></text><text x=\"380\" y=\"392\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">KE + PE is constant when only gravity and springs do work (no friction).</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Energy bar charts make conservation visible: potential energy is highest at the top, kinetic energy at the bottom, and the total height of the bars never changes.</p>\n  </div>\n<!--/apv:energy-bars-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Conservation of mechanical energy only holds when NO non-conservative force does work on the system. The instant friction, air resistance, or an external push/pull enters the picture, total mechanical energy is no longer conserved — some of it gets converted to other forms (usually heat) or added/removed by that external force. Always check for friction or applied forces before assuming energy conservation applies.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>A Ball Rolling Down a Frictionless Ramp.</strong> A 2.0 kg ball starts from rest at the top of a frictionless ramp, 5.0 m above the ground. Find its speed at the bottom.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">No friction means mechanical energy is conserved. At the top: KE<sub>i</sub> = 0 (starts at rest), PE<sub>i</sub> = mgh = (2.0)(9.8)(5.0) = 98 J. At the bottom: PE<sub>f</sub> = 0 (taking the ground as the reference), KE<sub>f</sub> = ½mv². Setting initial energy equal to final energy: 98 = ½(2.0)v², so v² = 98, giving v = √98 ≈ <strong>9.9 m/s</strong>. Notice the ramp's shape, length, and steepness never entered the calculation at all — only the height drop mattered.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the condition required for mechanical energy to be conserved.</li>\n      <li>Set up and solve a conservation-of-energy equation relating an initial and final state.</li>\n      <li>Explain why energy methods can skip over the details of the path taken between two states.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s35\"><span class=\"num\">3.5</span>Non-Conservative Forces and Energy Dissipation</h2>\n  <p>Friction and other non-conservative forces don't destroy energy — energy is never actually destroyed — but they do convert mechanical energy into other forms, usually heat, that this unit's bookkeeping no longer tracks as \"useful\" mechanical energy.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">W<sub>nc</sub> = ΔE<sub>mech</sub> = E<sub>mech,f</sub> − E<sub>mech,i</sub></div>\n    <div class=\"sub\">work done by non-conservative forces equals the change in total mechanical energy</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Friction Almost Always Does Negative Work</span>\n    <p>Friction opposes motion, so it almost always does negative work on a moving object — which means W<sub>nc</sub> is typically negative, and mechanical energy decreases as a result. That \"lost\" mechanical energy hasn't vanished; it's been converted into heat at the sliding surfaces (and often a bit of sound). Total energy, across ALL forms, is still exactly conserved — it's specifically <em>mechanical</em> energy that decreases when friction is present.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>A Block Sliding with Friction.</strong> A 4.0 kg block slides 3.0 m across a rough floor, starting at 6.0 m/s and ending at 2.0 m/s. Find the work done by friction.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since the floor is flat, there's no change in height (ΔPE = 0), so this is purely a change in kinetic energy. KE<sub>i</sub> = ½(4.0)(6.0)² = 72 J. KE<sub>f</sub> = ½(4.0)(2.0)² = 8.0 J. The change in mechanical energy is ΔE<sub>mech</sub> = 8.0 − 72 = −64 J. Since friction is the only non-conservative force here, W<sub>friction</sub> = ΔE<sub>mech</sub> = <strong>−64 J</strong> — the negative sign confirms friction removed 64 J of mechanical energy from the block, converting it into heat.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain why \"lost\" mechanical energy due to friction isn't actually destroyed.</li>\n      <li>Use W<sub>nc</sub> = ΔE<sub>mech</sub> to find the work done by a non-conservative force.</li>\n      <li>Explain why friction's work is almost always negative on a moving object.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s36\"><span class=\"num\">3.6</span>Power</h2>\n  <p>Power measures how quickly energy is transferred or work is done — not how much total work gets done, but the RATE at which it happens. Two people can do the exact same amount of work lifting identical boxes, but the one who does it faster is delivering more power.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">P = W/t &nbsp;·&nbsp; P = Fv·cosθ</div>\n    <div class=\"sub\">average power = work ÷ time · instantaneous power in terms of force and velocity</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>More power does not necessarily mean more total work or more total energy. A powerful engine can do the exact same amount of work as a weak one — it just does it faster. Don't conflate \"powerful\" with \"does more work\"; power is specifically about the rate, and a low-power source can still eventually transfer just as much total energy, given enough time.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Power from Force and Velocity.</strong> A car engine exerts a constant 2000 N of forward force while the car moves at a constant 20 m/s. Find the power output.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since the force and velocity are in the same direction (θ = 0°, cosθ = 1), P = Fv = (2000)(20) = <strong>40,000 W</strong> (or 40 kW). This form of the power equation — force times velocity — is especially useful whenever you're given an object's speed directly, rather than a total time and total work.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Distinguish power from work, explaining what makes power specifically a rate.</li>\n      <li>Compute average power given work and time, or instantaneous power given force and velocity.</li>\n      <li>Explain why a more powerful source doesn't necessarily do more total work.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 3 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A waiter carries a tray of food at constant height across a room at constant velocity. How much work does the waiter do on the tray? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A ball is thrown upward, reaches its peak, and falls back to the thrower's hand. Assuming no air resistance, compare its kinetic energy at launch to its kinetic energy when caught.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A pendulum swings back and forth with no friction or air resistance. Describe how kinetic and potential energy trade off as it swings from one side to the other.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Two identical crates are lifted to the same height, one twice as fast as the other. Compare the total work done in each case, and compare the power used in each case.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain why the work-energy theorem is often faster to use than kinematics equations for problems involving a non-constant force.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A 40 N force pushes a box 6.0 m in the direction of the force. Find the work done.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A 5.0 kg object moves at 4.0 m/s. Find its kinetic energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A 60 J net force does work on a 3.0 kg object initially at rest. Find its final speed.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>Find the gravitational potential energy of a 2.5 kg object 8.0 m above the ground.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A spring with k = 300 N/m is stretched 0.10 m. Find its elastic potential energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A 1.0 kg ball is dropped from 10 m. Using energy conservation, find its speed just before hitting the ground.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A 2.0 kg block slides 4.0 m across a rough floor, decelerating from 8.0 m/s to 5.0 m/s. Find the work done by friction.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A motor does 5000 J of work in 20 s. Find its average power.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Zero work. The tray's displacement is horizontal, but the waiter's supporting force on the tray is vertical (upward) — since these are perpendicular, cosθ = cos90° = 0, so no work is done, regardless of how far the tray is carried.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Equal. Since there's no air resistance, mechanical energy is conserved, and the ball returns to the exact same height it started from — meaning it has exactly the same speed (and therefore the same kinetic energy) both times.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">At the highest points of the swing (the endpoints), velocity is zero, so KE=0 and PE is at its maximum. At the lowest point (bottom of the swing), PE is at its minimum and KE — and speed — is at its maximum. Total mechanical energy (KE+PE) stays constant throughout, just continuously trading between the two forms.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">The total work done is identical in both cases, since work depends only on force and displacement (mgh, essentially), not on speed. Power, however, differs — since the faster lift does the same work in less time, it requires twice the power of the slower lift.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Kinematics equations like v²=v0²+2aΔx assume constant acceleration, which requires a constant force. The work-energy theorem instead uses total work — which can be correctly computed (often via the area under a force-vs-distance graph) even when the force changes throughout the motion, sidestepping the constant-acceleration requirement entirely.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">W = Fd = (40)(6.0) = <strong>240 J</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">KE = ½mv² = ½(5.0)(4.0)² = ½(5.0)(16) = <strong>40 J</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">W_net = ΔKE = KE_f (since starting at rest) = 60 J. ½(3.0)v² = 60 → v² = 40 → v = √40 ≈ <strong>6.3 m/s</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">PE = mgh = (2.5)(9.8)(8.0) = <strong>196 J</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">PE = ½kx² = ½(300)(0.10)² = ½(300)(0.010) = <strong>1.5 J</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">mgh = ½mv² (mass cancels): v = √(2gh) = √(2×9.8×10) = √196 = <strong>14 m/s</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">KE_i = ½(2.0)(8.0)² = 64 J. KE_f = ½(2.0)(5.0)² = 25 J. W_friction = ΔKE = 25 − 64 = <strong>−39 J</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">P = W/t = 5000/20 = <strong>250 W</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 3 QBank</strong> to drill these ideas, then move on to <strong>Unit 4 — Linear Momentum</strong>.\n  </div>\n\n</div>\n",
  "4": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Linear Momentum</h1>\n  <p class=\"sub\">Energy gave you one powerful \"before and after\" bookkeeping tool. Momentum gives you a second, completely independent one — and the two together let you crack open collision and explosion problems that neither tool could handle alone.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 10–15%</span>\n    <span class=\"pill\">6 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s41\">4.1 Momentum</a></li>\n    <li><a href=\"#s42\">4.2 Impulse and the Impulse-Momentum Theorem</a></li>\n    <li><a href=\"#s43\">4.3 Conservation of Momentum</a></li>\n    <li><a href=\"#s44\">4.4 Elastic Collisions</a></li>\n    <li><a href=\"#s45\">4.5 Inelastic Collisions</a></li>\n    <li><a href=\"#s46\">4.6 Center of Mass</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Momentum Is Always Conserved for an Isolated System</span>\n    <p>Whenever a problem describes a collision or explosion with no significant outside force acting during that event, total momentum before equals total momentum after — full stop, every time, regardless of whether the collision is elastic, inelastic, or somewhere in between. Kinetic energy is only sometimes conserved (elastic collisions only); momentum, for an isolated system, is always conserved. When you see \"collision\" or \"explosion,\" your first move should be to write p<sub>total,before</sub> = p<sub>total,after</sub>.</p>\n  </div>\n\n  <h2 id=\"s41\"><span class=\"num\">4.1</span>Momentum</h2>\n  <p>Momentum is a measure of how hard it is to stop something that's moving — it combines how much mass an object has with how fast it's going, into a single vector quantity.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">p = mv</div>\n    <div class=\"sub\">momentum = mass × velocity — units: kg·m/s</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Momentum Is a Vector</span>\n    <p>Just like velocity, momentum has a direction, and that direction matters enormously when you're combining the momentum of multiple objects. Two objects moving toward each other don't have momenta that simply add in magnitude — one direction has to be called positive and the other negative, and the two values are combined with their signs, exactly like the displacement and velocity vectors from Unit 1.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Momentum is linear in velocity (p = mv), unlike kinetic energy, which is proportional to v<em>squared</em>. Doubling an object's speed doubles its momentum but quadruples its kinetic energy — these two quantities scale completely differently with speed, and mixing up which one is linear and which one is squared is a very common error.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Combining Momenta.</strong> A 3.0 kg object moves at 6.0 m/s east; a 4.0 kg object moves at 3.0 m/s west. Find the total momentum of the system.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Taking east as positive: p<sub>1</sub> = (3.0)(6.0) = 18 kg·m/s (east, positive). p<sub>2</sub> = (4.0)(3.0) = 12 kg·m/s, but moving west, so p<sub>2</sub> = −12 kg·m/s. Total momentum: 18 + (−12) = <strong>6.0 kg·m/s east</strong>. Notice the two objects' momenta partially canceled, since they moved in opposite directions — exactly the same sign-based reasoning as combining displacements or velocities.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute an object's momentum given its mass and velocity, including direction.</li>\n      <li>Explain why momentum is linear in velocity while kinetic energy is quadratic in velocity.</li>\n      <li>Combine the momenta of multiple objects using correct signs for direction.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s42\"><span class=\"num\">4.2</span>Impulse and the Impulse-Momentum Theorem</h2>\n  <p>Impulse is the connection between force and momentum — it measures how much a force, acting over some amount of time, actually changes an object's momentum.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">J = FΔt = Δp</div>\n    <div class=\"sub\">impulse = force × time interval = change in momentum</div>\n  </div>\n\n  <p>That equation assumes a constant force. When the force varies over time, the impulse is instead the <strong>area under a force-vs-time (F-t) graph</strong> — exactly the same idea as reading displacement off the area under a v-t graph back in Unit 1. For a graph shape like a triangle or trapezoid, use the matching geometric area formula (e.g., ½ × base × height for a triangle) to find the total impulse delivered over that interval.</p>\n\n  <!--apv:impulse-area-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 252\" role=\"img\" aria-label=\"Force versus time graph with shaded area representing impulse and an explanation of lengthening collision time\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Impulse is the area under a force-time graph</tspan></text><line x1=\"70\" y1=\"220\" x2=\"400\" y2=\"220\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"220\" x2=\"70\" y2=\"70\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"145\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 145)\"><tspan x=\"40\" dy=\"0\">force F</tspan></text><text x=\"390\" y=\"238\" text-anchor=\"end\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"390\" dy=\"0\">time</tspan></text><path d=\"M 130 220 L 130 220 L 134.5 210.58490851265861 L 139 201.2278641951723 L 143.5 191.98655633729135 L 148 182.91796067500633 L 152.5 174.07798811618923 L 157 165.5211400312544 L 161.5 157.30017223408615 L 166 149.46576972490323 L 170.5 142.06623420037795 L 175 135.1471862576143 L 179.5 128.75128412799626 L 184 122.9179606750063 L 188.5 117.68318027750894 L 193 113.07921709739587 L 197.5 109.13445609864559 L 202 105.87321804458158 L 206.5 103.31560955227881 L 211 101.47739912858347 L 215.5 100.36991995202465 L 220 100 L 224.5 100.36991995202465 L 229 101.47739912858349 L 233.5 103.3156095522788 L 238 105.87321804458156 L 242.5 109.13445609864559 L 247 113.07921709739585 L 251.5 117.68318027750892 L 256 122.9179606750063 L 260.5 128.75128412799626 L 265 135.1471862576143 L 269.5 142.06623420037795 L 274 149.46576972490323 L 278.5 157.30017223408612 L 283 165.5211400312544 L 287.5 174.0779881161892 L 292 182.9179606750063 L 296.5 191.98655633729135 L 301 201.2278641951723 L 305.5 210.5849085126586 L 310 219.99999999999997 L 310 220 Z\" fill=\"#cfe0f7\" stroke=\"#2E6BC6\" stroke-width=\"3\"/><text x=\"220\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"220\" dy=\"0\">J = area</tspan><tspan x=\"220\" dy=\"16.3\">= FΔt (average)</tspan></text><line x1=\"130\" y1=\"226\" x2=\"310\" y2=\"226\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"220\" y=\"242\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"220\" dy=\"0\">Δt</tspan></text><rect x=\"450\" y=\"56\" width=\"290\" height=\"160\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"595\" y=\"80\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"595\" dy=\"0\">J = FΔt = Δp</tspan></text><text x=\"595\" y=\"108\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"595\" dy=\"0\">Same Δp, longer Δt → smaller force.</tspan></text><text x=\"595\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"595\" dy=\"0\">airbags · crumple zones · bending</tspan><tspan x=\"595\" dy=\"15\">knees on landing · catching a ball</tspan></text><text x=\"595\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"595\" dy=\"0\">(same change in momentum, spread out)</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Impulse equals the area under the F–t curve and equals the change in momentum. Stretching the collision over a longer time lowers the average force needed for the same Δp.</p>\n  </div>\n<!--/apv:impulse-area-->\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Why airbags and crumple zones actually work</div>\n    <p>For a given change in momentum Δp, a longer collision time Δt means a smaller average force is needed (since F = Δp/Δt). This is the entire physics behind airbags, crumple zones, and even bending your knees when you land a jump — stretching out the time over which your momentum changes to zero dramatically reduces the force your body experiences, even though the total impulse (the change in momentum) is exactly the same either way.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>When an object bounces back off something, its velocity doesn't just decrease to zero — it reverses sign entirely. A ball hitting a wall at +8 m/s and bouncing back at 6 m/s isn't experiencing a velocity change of −2 m/s; it's experiencing a change from +8 m/s to −6 m/s, a full Δv of −14 m/s. Forgetting to flip the sign on a \"bounce back\" scenario is one of the most common errors in this section.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Impulse from a Bounce.</strong> A 0.20 kg ball hits a wall at 10 m/s and bounces straight back at 10 m/s (elastic bounce). Find the impulse delivered to the ball.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Taking the ball's initial direction as positive: v<sub>i</sub> = +10 m/s, v<sub>f</sub> = −10 m/s (fully reversed). Δp = m(v<sub>f</sub> − v<sub>i</sub>) = 0.20(−10 − 10) = 0.20(−20) = <strong>−4.0 kg·m/s</strong>. The impulse on the ball has a magnitude of 4.0 kg·m/s, directed opposite the ball's original motion — and by Newton's Third Law, the wall receives an equal and opposite impulse of +4.0 kg·m/s.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the impulse-momentum theorem and explain the relationship between force, time, and Δp.</li>\n      <li>Explain why spreading out collision time reduces the force experienced for a given Δp.</li>\n      <li>Correctly account for a full sign reversal when computing Δv for a bouncing object.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s43\"><span class=\"num\">4.3</span>Conservation of Momentum</h2>\n  <p>For a system with no net external force acting on it, total momentum never changes — even as individual objects within that system push, pull, or collide with each other. This is one of the most powerful and reliable tools in the entire course.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">p<sub>total,before</sub> = p<sub>total,after</sub></div>\n    <div class=\"sub\">valid for an isolated system — internal forces (collisions, explosions) never change the total</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Internal Forces Cancel by Newton's Third Law</span>\n    <p>The reason momentum conservation works at all traces directly back to Newton's Third Law: whatever force one object in a collision exerts on another, that other object exerts back an equal and opposite force. Those two forces, acting over the same time interval, produce equal and opposite impulses — which cancel out perfectly when you add up the whole system's momentum. This is exactly why momentum conservation applies to <em>any</em> kind of collision, not just special \"elastic\" ones.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>An Explosion from Rest.</strong> A 10 kg object at rest suddenly splits into two pieces: a 4.0 kg piece moving at 6.0 m/s in one direction, and a 6.0 kg piece. Find the second piece's velocity.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Total momentum before the explosion is zero (the object was at rest). By conservation of momentum, total momentum after must also be zero: m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = 0. Substituting: (4.0)(6.0) + (6.0)v<sub>2</sub> = 0, so 24 + 6.0v<sub>2</sub> = 0, giving v<sub>2</sub> = −4.0 m/s — a magnitude of <strong>4.0 m/s</strong>, moving opposite the first piece. This is the same physics behind a gun's recoil: the two pieces must fly apart with momenta that exactly cancel.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the condition (isolated system, no net external force) required for momentum conservation.</li>\n      <li>Explain why momentum conservation follows directly from Newton's Third Law.</li>\n      <li>Solve an explosion or \"push-apart\" problem using conservation of momentum.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s44\"><span class=\"num\">4.4</span>Elastic Collisions</h2>\n  <p>An elastic collision is a special, idealized case where BOTH momentum and kinetic energy are conserved — nothing is lost to heat, sound, or permanent deformation. Real-world collisions are rarely perfectly elastic, but billiard balls and many atomic-scale collisions come impressively close.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Elastic Means Two Conservation Laws at Once</span>\n    <p>Every collision (elastic or not) conserves momentum, as long as the system is isolated. What makes a collision specifically <strong>elastic</strong> is the additional fact that kinetic energy is conserved too — KE<sub>total,before</sub> = KE<sub>total,after</sub>. This second condition is what actually lets you solve for two unknown final velocities (rather than just one relationship between them) in a two-object collision.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Equal-Mass Elastic Collision.</strong> A 3.0 kg ball moving at 8.0 m/s collides elastically with an identical, stationary 3.0 kg ball. Find both balls' velocities after the collision.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">This is the single most useful special case in this section, worth memorizing outright: when one object collides elastically with an <em>equal-mass</em>, stationary object, the moving object comes to a complete stop, and the previously stationary object takes on the exact velocity the first one had. So after the collision: the first ball's velocity becomes <strong>0 m/s</strong>, and the second ball's velocity becomes <strong>8.0 m/s</strong>. You can verify this conserves both momentum (3.0×8.0 = 24 kg·m/s before; 3.0×0 + 3.0×8.0 = 24 kg·m/s after) and kinetic energy (½×3.0×64 = 96 J before; ½×3.0×64 = 96 J after, just carried by the other ball).</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The equal-mass \"velocity swap\" result from the worked example above is a special case — it does NOT apply when the two masses are different. For unequal masses, both momentum conservation and kinetic energy conservation have to be solved together (typically as a system of two equations), and the resulting final velocities are more complex expressions involving both masses.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain what distinguishes an elastic collision from other collisions.</li>\n      <li>Apply the equal-mass \"velocity swap\" result to a stationary-target elastic collision.</li>\n      <li>Verify whether a given collision is elastic by comparing total kinetic energy before and after.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s45\"><span class=\"num\">4.5</span>Inelastic Collisions</h2>\n  <p>In an inelastic collision, momentum is still conserved (as always, for an isolated system) — but kinetic energy is NOT conserved. Some of it converts into heat, sound, or permanent deformation of the colliding objects. A <strong>perfectly</strong> inelastic collision is the extreme case where the two objects stick together and move as one after impact.</p>\n\n  <!--apv:collision-types-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 282\" role=\"img\" aria-label=\"Before and after diagrams for an elastic collision and a perfectly inelastic collision\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Collisions: momentum is always conserved; kinetic energy is not</tspan></text><text x=\"190\" y=\"50\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"190\" dy=\"0\">ELASTIC</tspan></text><text x=\"190\" y=\"70\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"190\" dy=\"0\">bounce apart</tspan></text><rect x=\"40\" y=\"100\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#f4b0a0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"52\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"84\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"68\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"68\" dy=\"0\">m₁</tspan></text><line x1=\"60\" y1=\"92\" x2=\"110\" y2=\"92\" stroke=\"#D2451E\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><rect x=\"160\" y=\"100\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#a9c8f0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"172\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"204\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"188\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"188\" dy=\"0\">m₂</tspan></text><text x=\"190\" y=\"160\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"190\" dy=\"0\">before</tspan></text><rect x=\"40\" y=\"180\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#f4b0a0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"52\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"84\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"68\" y=\"204\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"68\" dy=\"0\">m₁</tspan></text><line x1=\"60\" y1=\"172\" x2=\"20\" y2=\"172\" stroke=\"#D2451E\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><rect x=\"160\" y=\"180\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#a9c8f0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"172\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"204\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"188\" y=\"204\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"188\" dy=\"0\">m₂</tspan></text><line x1=\"200\" y1=\"172\" x2=\"250\" y2=\"172\" stroke=\"#D2451E\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"190\" y=\"240\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"190\" dy=\"0\">after</tspan></text><text x=\"190\" y=\"262\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"190\" dy=\"0\">p conserved ✓    KE conserved ✓</tspan></text><line x1=\"380\" y1=\"44\" x2=\"380\" y2=\"270\" stroke=\"#D9D6CC\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"570\" y=\"50\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"570\" dy=\"0\">PERFECTLY INELASTIC</tspan></text><text x=\"570\" y=\"70\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"570\" dy=\"0\">stick together</tspan></text><rect x=\"420\" y=\"100\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#f4b0a0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"432\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"464\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"448\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"448\" dy=\"0\">m₁</tspan></text><line x1=\"440\" y1=\"92\" x2=\"490\" y2=\"92\" stroke=\"#D2451E\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><rect x=\"540\" y=\"100\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#a9c8f0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"552\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"584\" cy=\"140\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"568\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"568\" dy=\"0\">m₂</tspan></text><text x=\"570\" y=\"160\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"570\" dy=\"0\">before</tspan></text><rect x=\"480\" y=\"180\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#f4b0a0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"492\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"524\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"508\" y=\"204\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"508\" dy=\"0\">m₁</tspan></text><rect x=\"536\" y=\"180\" width=\"56\" height=\"36\" rx=\"4\" fill=\"#a9c8f0\" stroke=\"#555\" stroke-width=\"1.5\"/><circle cx=\"548\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"580\" cy=\"220\" r=\"6\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"564\" y=\"204\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"564\" dy=\"0\">m₂</tspan></text><line x1=\"500\" y1=\"172\" x2=\"560\" y2=\"172\" stroke=\"#D2451E\" stroke-width=\"2\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"570\" y=\"240\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"570\" dy=\"0\">after: one mass (m₁ + m₂)</tspan></text><text x=\"570\" y=\"262\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"570\" dy=\"0\">p conserved ✓    KE lost ✗ (heat, sound, deformation)</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">In every isolated collision total momentum is conserved. Only in an elastic collision is kinetic energy also conserved; when objects stick together the most kinetic energy is lost.</p>\n  </div>\n<!--/apv:collision-types-->\n\n  <div class=\"eq\">\n    <div class=\"main\">m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = (m<sub>1</sub>+m<sub>2</sub>)v<sub>f</sub></div>\n    <div class=\"sub\">perfectly inelastic collision — objects combine into one after impact</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Most real-world collisions — car crashes, a ball of clay hitting a wall, two football players colliding — are inelastic, not elastic. If a problem doesn't explicitly say \"elastic\" or state that kinetic energy is conserved, don't assume it. And crucially: even though kinetic energy is lost in an inelastic collision, momentum is still exactly conserved — those two facts aren't in tension with each other at all.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>A Perfectly Inelastic Collision.</strong> A 5.0 kg cart moving at 8.0 m/s collides with a stationary 3.0 kg cart, and they stick together. Find their combined final velocity, and the kinetic energy lost in the collision.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using conservation of momentum: (5.0)(8.0) + (3.0)(0) = (5.0+3.0)v<sub>f</sub>, so 40 = 8.0v<sub>f</sub>, giving v<sub>f</sub> = <strong>5.0 m/s</strong>. For the energy: KE<sub>before</sub> = ½(5.0)(8.0)² = 160 J. KE<sub>after</sub> = ½(8.0)(5.0)² = 100 J. Kinetic energy lost: 160 − 100 = <strong>60 J</strong>, converted into heat and sound as the carts collided and stuck together — momentum stayed exactly conserved throughout, even as 60 J of kinetic energy simply vanished from the \"useful mechanical energy\" ledger.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Solve a perfectly inelastic collision for the combined final velocity.</li>\n      <li>Compute the kinetic energy lost in an inelastic collision.</li>\n      <li>Explain why momentum conservation and kinetic energy loss aren't contradictory in an inelastic collision.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s46\"><span class=\"num\">4.6</span>Center of Mass</h2>\n  <p>The center of mass is the single point that represents the \"average\" position of a system's mass, weighted by how much mass sits at each location. For many purposes, a whole complicated system of objects behaves — in terms of its overall motion — exactly like a single point mass located at the center of mass.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">x<sub>cm</sub> = (m<sub>1</sub>x<sub>1</sub> + m<sub>2</sub>x<sub>2</sub> + ...) / (m<sub>1</sub> + m<sub>2</sub> + ...)</div>\n    <div class=\"sub\">a mass-weighted average position</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The connection back to momentum conservation</div>\n    <p>Here's the payoff for this whole unit: the center of mass of an isolated system moves at a perfectly constant velocity, completely unaffected by collisions or explosions happening internally — because internal forces, by Newton's Third Law, can never change the system's total momentum, and the center of mass's velocity is directly tied to that total momentum (v<sub>cm</sub> = p<sub>total</sub>/m<sub>total</sub>). A firework explodes into a hundred pieces flying in every direction, but its center of mass keeps sailing along the exact same parabolic path the unexploded firework would have followed.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Finding the Center of Mass.</strong> A 2.0 kg object sits at x = 0, and a 6.0 kg object sits at x = 8.0 m. Find the position of the system's center of mass.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">x<sub>cm</sub> = (m<sub>1</sub>x<sub>1</sub> + m<sub>2</sub>x<sub>2</sub>)/(m<sub>1</sub>+m<sub>2</sub>) = [(2.0)(0) + (6.0)(8.0)]/(2.0+6.0) = 48/8.0 = <strong>6.0 m</strong>. Notice the center of mass sits much closer to the heavier object (6.0 kg at x=8.0 m) than to the lighter one — which makes sense, since a bigger mass \"pulls\" the weighted average more strongly toward its own position.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute the center of mass position for a system of point masses.</li>\n      <li>Explain why the center of mass sits closer to whichever object has more mass.</li>\n      <li>Explain why an isolated system's center of mass moves at constant velocity, even through internal collisions or explosions.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 4 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A bowling ball and a tennis ball move at the same speed. Which has more momentum? Which would have more kinetic energy?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Explain, using the impulse-momentum theorem, why bending your knees when landing a jump reduces the force on your legs.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Two skaters at rest push off from each other. Explain why they must move apart with equal and opposite momenta, regardless of their masses.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A car crash is a clear example of an inelastic collision. Is momentum still conserved during the crash? Is kinetic energy?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>A firework shell explodes in mid-flight. Explain what happens to the velocity of its center of mass immediately after the explosion.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>Find the momentum of a 1200 kg car moving at 25 m/s.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A 60 N force acts on an object for 0.50 s. Find the impulse delivered.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A 4.0 kg object's velocity changes from 3.0 m/s to 9.0 m/s over 2.0 s. Find the average force acting on it.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A 6.0 kg object moving at 4.0 m/s collides and sticks to a stationary 2.0 kg object. Find their combined final velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A 5.0 kg ball moving at 6.0 m/s collides elastically with an identical stationary 5.0 kg ball. Find both balls' final velocities.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Find the kinetic energy lost when a 3.0 kg object moving at 10 m/s collides perfectly inelastically with an identical stationary 3.0 kg object.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A 0.015 kg bullet is fired at 500 m/s from a 3.0 kg gun initially at rest. Find the gun's recoil velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>Find the center of mass of a system with a 3.0 kg object at x = 2.0 m and a 5.0 kg object at x = 10 m.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">The bowling ball has more momentum AND more kinetic energy, since it has more mass while both objects share the same speed — momentum (p=mv) and kinetic energy (KE=½mv²) both increase directly with mass for a fixed speed.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Bending your knees extends the time (Δt) over which your momentum changes to zero upon landing. Since impulse (FΔt) must equal the fixed change in momentum, a longer Δt means a smaller average force F is needed — reducing the force your legs actually experience.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">Since the two skaters start at rest, total momentum before the push is zero. By conservation of momentum, total momentum after must also be zero — meaning their individual momenta must be equal in magnitude and opposite in direction, regardless of their individual masses (though their resulting speeds will differ if their masses differ).</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Momentum is still exactly conserved during the crash, since it's conserved for any isolated collision regardless of type. Kinetic energy is NOT conserved — a significant amount converts into heat, sound, and the permanent deformation of the vehicles, which is exactly what makes it an inelastic collision.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">The center of mass's velocity is completely unaffected by the explosion — it continues moving exactly as it would have if the explosion never happened, since the explosive forces are entirely internal to the system and cannot change its total momentum.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">p = mv = (1200)(25) = <strong>30,000 kg·m/s</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">J = FΔt = (60)(0.50) = <strong>30 N·s (kg·m/s)</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">Δp = m(v_f−v_i) = 4.0(9.0−3.0) = 24 kg·m/s. F = Δp/Δt = 24/2.0 = <strong>12 N</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">(6.0)(4.0)+(2.0)(0) = (8.0)v_f → 24=8.0v_f → v_f = <strong>3.0 m/s</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">Equal-mass elastic collision with a stationary target: velocities swap. The first ball ends at <strong>0 m/s</strong>; the second ball ends at <strong>6.0 m/s</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">v_f = (3.0×10+3.0×0)/6.0 = 5.0 m/s. KE_i = ½(3.0)(10)² = 150 J. KE_f = ½(6.0)(5.0)² = 75 J. Lost: 150−75 = <strong>75 J</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">Total momentum before = 0. (0.015)(500) + (3.0)V = 0 → 7.5 + 3.0V = 0 → V = <strong>−2.5 m/s</strong> (magnitude 2.5 m/s, opposite the bullet's direction).</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">x_cm = [(3.0)(2.0)+(5.0)(10)]/(3.0+5.0) = (6.0+50)/8.0 = 56/8.0 = <strong>7.0 m</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 4 QBank</strong> to drill these ideas, then move on to <strong>Unit 5 — Torque and Rotational Dynamics</strong>.\n  </div>\n\n</div>\n",
  "5": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Torque and Rotational Dynamics</h1>\n  <p class=\"sub\">Every idea from Units 1 through 4 — position, velocity, acceleration, force, Newton's Second Law — gets a rotational twin in this unit. The genuinely good news is that you already know most of this content; you're mostly just learning its new vocabulary and where a factor of \"distance from the axis\" needs to be inserted.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 10–15%</span>\n    <span class=\"pill\">6 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s51\">5.1 Rotational Kinematics</a></li>\n    <li><a href=\"#s52\">5.2 Torque</a></li>\n    <li><a href=\"#s53\">5.3 Moment of Inertia</a></li>\n    <li><a href=\"#s54\">5.4 Newton's Second Law for Rotation</a></li>\n    <li><a href=\"#s55\">5.5 Static Equilibrium</a></li>\n    <li><a href=\"#s56\">5.6 Rolling Motion</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — The Translation Table</span>\n    <p>Nearly every equation in this unit is a direct swap of a linear-motion quantity for its rotational counterpart. Keep this table close by until the substitutions become automatic:</p>\n    <table class=\"formula-table\" style=\"margin:10px 0 0;\">\n      <tr><th>Linear (Units 1–4)</th><th>Rotational (this unit)</th></tr>\n      <tr><td>Position, x</td><td>Angular position, θ (radians)</td></tr>\n      <tr><td>Velocity, v</td><td>Angular velocity, ω</td></tr>\n      <tr><td>Acceleration, a</td><td>Angular acceleration, α</td></tr>\n      <tr><td>Mass, m</td><td>Moment of inertia, I</td></tr>\n      <tr><td>Force, F</td><td>Torque, τ</td></tr>\n      <tr><td>F<sub>net</sub> = ma</td><td>τ<sub>net</sub> = Iα</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"s51\"><span class=\"num\">5.1</span>Rotational Kinematics</h2>\n  <p>Angular position, angular velocity, and angular acceleration describe rotation the exact same way position, velocity, and acceleration described straight-line motion back in Unit 1 — and every one of Unit 1's kinematic equations works here too, just with the linear symbols swapped for their angular counterparts.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Linear equation</th><th>Rotational equation</th></tr></thead>\n    <tbody>\n      <tr><td>v = v<sub>0</sub> + at</td><td>ω = ω<sub>0</sub> + αt</td></tr>\n      <tr><td>Δx = v<sub>0</sub>t + ½at²</td><td>Δθ = ω<sub>0</sub>t + ½αt²</td></tr>\n      <tr><td>v² = v<sub>0</sub>² + 2aΔx</td><td>ω² = ω<sub>0</sub>² + 2αΔθ</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Bridging Rotational and Linear Quantities</span>\n    <p>Every point on a spinning rigid object shares the exact same angular velocity ω, but points farther from the axis move through more actual distance per second — a faster linear (tangential) speed. The bridge between the two is the distance from the axis, r: v = rω and a<sub>tangential</sub> = rα. A point twice as far from the axis moves twice as fast, even though both points complete a full rotation in the exact same amount of time.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Angular quantities must be in <strong>radians</strong>, not degrees, whenever you use v=rω, a=rα, or any of the rotational kinematic equations. Radians aren't just a unit preference here — they're baked into the geometric relationship between arc length and angle (arc length = rθ, only true when θ is in radians). If a problem gives you an angle or angular speed in degrees or revolutions, convert to radians first (2π rad = 360° = 1 revolution).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Spinning Up a Wheel.</strong> A wheel starts at rest and accelerates uniformly at 4.0 rad/s² for 3.0 s. Find its final angular velocity and the angle it sweeps through.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using ω = ω<sub>0</sub> + αt: ω = 0 + (4.0)(3.0) = <strong>12 rad/s</strong>. Using Δθ = ω<sub>0</sub>t + ½αt²: Δθ = 0 + ½(4.0)(3.0)² = ½(4.0)(9.0) = <strong>18 rad</strong>. Notice this is exactly the same two-step process as a linear kinematics problem — only the symbols changed.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Apply the rotational kinematic equations, recognizing their direct parallel to Unit 1's linear equations.</li>\n      <li>Convert between linear and angular quantities using v=rω and a<sub>tangential</sub>=rα.</li>\n      <li>Explain why angle must be measured in radians for these relationships to hold.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s52\"><span class=\"num\">5.2</span>Torque</h2>\n  <p>Torque is the rotational equivalent of force — it's what actually causes angular acceleration. But unlike force, torque isn't just about how hard you push; it's about how hard you push AND how far from the axis, AND at what angle.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">τ = rF sinθ</div>\n    <div class=\"sub\">r = distance from the axis to where the force is applied · θ = angle between r and F</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Only the Perpendicular Component Creates Torque</span>\n    <p>Pushing a door exactly at its hinge does nothing, no matter how hard you push — r=0. Pushing parallel to the door's surface, straight toward or away from the hinge, also does nothing, no matter how far from the hinge you are — θ=0°, so sinθ=0. Maximum torque comes from pushing as far from the axis as possible, in a direction exactly perpendicular to the lever arm (θ=90°, sinθ=1) — which is exactly why door handles are placed far from the hinge, and why you instinctively push perpendicular to a door rather than at a weird angle.</p>\n  </div>\n\n  <!--apv:torque-lever-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 214\" role=\"img\" aria-label=\"Lever arm with forces applied perpendicular, at an angle, and along the arm\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Torque depends on force, lever arm, and angle: τ = r F sinθ</tspan></text><rect x=\"120\" y=\"100\" width=\"340\" height=\"14\" fill=\"#d9c7a8\" stroke=\"#6b5a3a\"/><circle cx=\"130\" cy=\"107\" r=\"8\" fill=\"#555\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"130\" y=\"134\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"130\" dy=\"0\">axis</tspan></text><line x1=\"430\" y1=\"106\" x2=\"430\" y2=\"40\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"446\" y=\"46\" text-anchor=\"start\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"446\" dy=\"0\">F ⟂ lever: max τ</tspan></text><line x1=\"300\" y1=\"106\" x2=\"340\" y2=\"50\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"336\" y=\"44\" text-anchor=\"end\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"336\" dy=\"0\">at an angle: only F sinθ counts</tspan></text><line x1=\"250\" y1=\"106\" x2=\"320\" y2=\"106\" stroke=\"#2E7D32\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahg)\"/><text x=\"285\" y=\"98\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"285\" dy=\"0\"></tspan></text><text x=\"285\" y=\"140\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"285\" dy=\"0\">F along the arm: τ = 0</tspan></text><line x1=\"130\" y1=\"168\" x2=\"430\" y2=\"168\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" marker-end=\"url(#ah)\"/><line x1=\"430\" y1=\"168\" x2=\"130\" y2=\"168\" stroke=\"#232323\" stroke-width=\"1.5\" stroke-linecap=\"round\" marker-end=\"url(#ah)\"/><text x=\"280\" y=\"188\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"280\" dy=\"0\">r (distance from axis to force)</tspan></text><rect x=\"500\" y=\"70\" width=\"240\" height=\"130\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"620\" y=\"94\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">More torque with:</tspan></text><text x=\"620\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"620\" dy=\"0\">↑ force F</tspan><tspan x=\"620\" dy=\"15\">↑ distance r from the axis</tspan><tspan x=\"620\" dy=\"15\">force ⟂ to the lever (θ = 90°)</tspan></text><text x=\"620\" y=\"184\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"620\" dy=\"0\">pushing at the hinge: r = 0 → τ = 0</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Torque grows with force and distance from the axis, and only the component of force perpendicular to the lever arm produces it. A force along the arm gives zero torque.</p>\n  </div>\n<!--/apv:torque-lever-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Torque, like force, has a direction — but instead of \"left/right\" or \"up/down,\" torque direction is described as counterclockwise (conventionally positive) or clockwise (conventionally negative). When multiple torques act on an object, you can't just add their magnitudes; you have to account for which way each one is trying to rotate the object, exactly like combining forces or momenta along a line.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Torque on a Wrench.</strong> A 0.25 m long wrench has a 60 N force applied perpendicular to it, at its very end. Find the torque produced.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since the force is perpendicular to the wrench, θ=90° and sinθ=1. τ = rF sinθ = (0.25)(60)(1) = <strong>15 N·m</strong>. Notice the units — newton-meters — are the same units as work, but torque and work are completely different physical quantities; don't let the matching units cause confusion between the two.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute torque given a force, a lever-arm distance, and an angle.</li>\n      <li>Explain why a force applied exactly at the axis, or exactly parallel to the lever arm, produces zero torque.</li>\n      <li>Combine multiple torques using a consistent sign convention (CCW positive, CW negative, or vice versa).</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s53\"><span class=\"num\">5.3</span>Moment of Inertia</h2>\n  <p>Moment of inertia, I, is the rotational equivalent of mass — it measures how much an object \"resists\" changes to its rotational motion. But unlike ordinary mass, moment of inertia depends heavily on <em>where</em> that mass is located relative to the axis of rotation, not just how much of it there is.</p>\n\n  <!--apv:inertia-shapes-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 292\" role=\"img\" aria-label=\"Hoop, solid disk and solid sphere with their moments of inertia\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Moment of inertia depends on WHERE the mass is: farther from the axis → larger I</tspan></text><circle cx=\"130\" cy=\"110\" r=\"52\" fill=\"none\" stroke=\"#6b5a3a\" stroke-width=\"9\"/><circle cx=\"130\" cy=\"110\" r=\"3\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"130\" y=\"192\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"130\" dy=\"0\">hoop (all mass at R)</tspan></text><text x=\"130\" y=\"212\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"130\" dy=\"0\">I = MR²   (largest)</tspan></text><circle cx=\"380\" cy=\"110\" r=\"52\" fill=\"#d9c7a8\" stroke=\"#6b5a3a\" stroke-width=\"3\"/><circle cx=\"380\" cy=\"110\" r=\"3\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"380\" y=\"192\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">solid disk</tspan></text><text x=\"380\" y=\"212\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"380\" dy=\"0\">I = ½MR²</tspan></text><circle cx=\"630\" cy=\"110\" r=\"52\" fill=\"#c8d8e8\" stroke=\"#456\" stroke-width=\"3\"/><circle cx=\"630\" cy=\"110\" r=\"3\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"630\" y=\"192\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">solid sphere</tspan></text><text x=\"630\" y=\"212\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"630\" dy=\"0\">I = ²⁄₅MR²   (smallest)</tspan></text><text x=\"380\" y=\"252\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Same M and R: the hoop is hardest to spin up, the sphere is easiest.</tspan></text><text x=\"380\" y=\"274\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"380\" dy=\"0\">I = Σ m r² : the r² makes distance count much more than mass.</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">For equal mass and radius, moment of inertia is largest when the mass is farthest from the axis (a hoop) and smallest when it is concentrated near the axis (a sphere).</p>\n  </div>\n<!--/apv:inertia-shapes-->\n\n  <div class=\"eq\">\n    <div class=\"main\">I = Σmr²</div>\n    <div class=\"sub\">for a system of point masses — each mass's contribution depends on the SQUARE of its distance from the axis</div>\n  </div>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Shape (rotating about the axis shown)</th><th>Moment of Inertia</th></tr></thead>\n    <tbody>\n      <tr><td>Thin hoop or ring, about its central axis</td><td>I = MR²</td></tr>\n      <tr><td>Solid disk or cylinder, about its central axis</td><td>I = ½MR²</td></tr>\n      <tr><td>Solid sphere, about a diameter</td><td>I = (2/5)MR²</td></tr>\n      <tr><td>Thin rod, about its center</td><td>I = (1/12)ML²</td></tr>\n      <tr><td>Thin rod, about one end</td><td>I = (1/3)ML²</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Distance from the Axis Matters More Than Total Mass</span>\n    <p>Because I depends on r<em>squared</em>, mass located far from the axis contributes vastly more to an object's moment of inertia than the same mass located close to the axis. This is why a hoop (all its mass concentrated at radius R) has a much larger I than a solid disk of the exact same mass and radius (whose mass is spread out from the center all the way to R, with much of it close in) — and it's exactly why figure skaters can dramatically change how \"resistant to spinning\" they are just by moving their arms in or out, without changing their total mass at all.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Moment of Inertia of Point Masses.</strong> A 2.0 kg mass sits at 0.50 m from an axis, and a 3.0 kg mass sits at 1.0 m from the same axis, both on a light (negligible mass) rod. Find the system's total moment of inertia.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Apply I = Σmr² to each mass separately, then add: I<sub>1</sub> = (2.0)(0.50)² = (2.0)(0.25) = 0.50 kg·m². I<sub>2</sub> = (3.0)(1.0)² = 3.0 kg·m². Total: I = 0.50 + 3.0 = <strong>3.5 kg·m²</strong>. Notice the farther mass (3.0 kg at 1.0 m) contributes six times as much to I as the closer mass, even though it's only 1.5 times heavier — that squared distance dependence is doing most of the work.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute the moment of inertia for a system of point masses using I=Σmr².</li>\n      <li>Explain why mass farther from the axis contributes disproportionately more to I.</li>\n      <li>Use the standard moment-of-inertia formulas for common shapes (hoop, disk, sphere, rod).</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s54\"><span class=\"num\">5.4</span>Newton's Second Law for Rotation</h2>\n  <p>This is the rotational version of F<sub>net</sub>=ma, and it's built from exactly the same logic: net torque causes angular acceleration, with moment of inertia playing the role of \"rotational mass\" that resists that acceleration.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">τ<sub>net</sub> = Iα</div>\n    <div class=\"sub\">net torque = moment of inertia × angular acceleration</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The whole unit collapses into three steps</div>\n    <p>Just like Unit 2, nearly every rotational dynamics problem is: (1) identify the torques acting on the object, (2) sum them with correct signs to find τ<sub>net</sub>, (3) apply τ<sub>net</sub> = Iα and solve. The parallel to Unit 2's \"draw the FBD, sum the forces, apply F=ma\" is completely intentional — it's the exact same skill, wearing rotational clothing.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Torque Causing Angular Acceleration.</strong> A solid disk (I = ½MR²) has mass 2.0 kg and radius 0.40 m. A torque of 4.0 N·m is applied to it. Find its angular acceleration.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">First find the disk's moment of inertia: I = ½MR² = ½(2.0)(0.40)² = ½(2.0)(0.16) = 0.16 kg·m². Then apply Newton's Second Law for rotation: α = τ/I = 4.0/0.16 = <strong>25 rad/s²</strong>. Just like a smaller mass accelerates more for a given force, a smaller moment of inertia accelerates (angularly) more for a given torque.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the rotational version of Newton's Second Law and explain the role each variable plays.</li>\n      <li>Compute angular acceleration given net torque and moment of inertia, or vice versa.</li>\n      <li>Explain why a larger moment of inertia means a smaller angular acceleration for the same applied torque.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s55\"><span class=\"num\">5.5</span>Static Equilibrium</h2>\n  <p>An object is in complete static equilibrium when it has zero linear acceleration AND zero angular acceleration — meaning BOTH the net force and the net torque acting on it must be exactly zero — AND the object starts at rest (v=0, ω=0). That last condition is what distinguishes \"static\" equilibrium from \"dynamic\" equilibrium: an object moving or spinning at constant nonzero velocity also has zero net force and zero net torque, but it isn't static. This section is where balance, seesaws, beams, and ladders all live.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΣF = 0 &nbsp;·&nbsp; Στ = 0</div>\n    <div class=\"sub\">both conditions must hold simultaneously for full static equilibrium</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — You Can Choose Your Pivot Point</span>\n    <p>The condition Στ=0 has to be true about <em>any</em> point you choose as the pivot for calculating torques — not just the object's actual physical axis, if it even has one. This gives you real freedom: choosing the pivot at the exact location of an unknown force makes that force's own torque instantly zero (since its lever arm is zero), which often eliminates an unknown from your equation before you've even started solving.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Satisfying only ΣF=0 is NOT enough to guarantee static equilibrium — an object can have zero net force while still spinning up due to a nonzero net torque (think of two equal, opposite forces applied at different points on a bar, like turning a steering wheel). You need both conditions, ΣF=0 and Στ=0, checked independently.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>A Beam with an Off-Center Load.</strong> A lightweight (negligible weight) beam, 6.0 m long, is supported at both ends. A 300 N weight sits 2.0 m from the left support. Find the force each support exerts.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Choose the pivot at the LEFT support — this makes the left support's own force contribute zero torque, leaving only one unknown (the right support's force) in the torque equation. Taking torques about the left support: the 300 N weight creates a torque of (300)(2.0) = 600 N·m, and the right support's force F<sub>R</sub> creates a balancing torque of F<sub>R</sub>(6.0). Setting Στ=0: F<sub>R</sub>(6.0) = 600, so F<sub>R</sub> = <strong>100 N</strong>. Then apply ΣF=0 for the whole beam: F<sub>L</sub> + F<sub>R</sub> = 300, so F<sub>L</sub> = 300 − 100 = <strong>200 N</strong>. Notice the support closer to the load carries more of the weight — a good intuitive check on the answer.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State both conditions required for complete static equilibrium.</li>\n      <li>Strategically choose a pivot point to eliminate an unknown force from a torque equation.</li>\n      <li>Solve a beam or lever problem using both the force and torque equilibrium conditions.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s56\"><span class=\"num\">5.6</span>Rolling Motion</h2>\n  <p>Rolling without slipping is a special, very common scenario where an object's rotational and translational motion are locked together by a single, simple relationship — setting up the deeper energy and momentum treatment of rolling objects that Unit 6 builds on.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">v<sub>cm</sub> = rω &nbsp;·&nbsp; a<sub>cm</sub> = rα</div>\n    <div class=\"sub\">valid specifically for rolling WITHOUT slipping</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — The Contact Point Is Momentarily at Rest</span>\n    <p>For an object rolling without slipping, the single point currently touching the ground has zero velocity at that exact instant — it's neither sliding forward nor backward relative to the ground. This is the defining geometric feature of \"rolling without slipping,\" and it's exactly why static friction (not kinetic friction) is the type of friction that acts at the contact point: there's no relative sliding motion between the surfaces for kinetic friction to act on.</p>\n  </div>\n\n  <!--apv:rolling-velocities-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 274\" role=\"img\" aria-label=\"Wheel rolling without slipping showing velocities at the top, center and contact point\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Rolling without slipping: the contact point is momentarily at rest</tspan></text><line x1=\"60\" y1=\"228\" x2=\"700\" y2=\"228\" stroke=\"#777\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"380\" cy=\"140\" r=\"88\" fill=\"#f4ead6\" stroke=\"#6b5a3a\" stroke-width=\"4\"/><circle cx=\"380\" cy=\"140\" r=\"4\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"52\" x2=\"470\" y2=\"52\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"380\" y=\"40\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"380\" dy=\"0\">top: 2v_cm</tspan></text><circle cx=\"380\" cy=\"52\" r=\"4\" fill=\"#232323\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"140\" x2=\"440\" y2=\"140\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"452\" y=\"144\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"452\" dy=\"0\">center: v_cm</tspan></text><circle cx=\"380\" cy=\"228\" r=\"6\" fill=\"#2E7D32\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"380\" y=\"254\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"380\" dy=\"0\">bottom (contact): v = 0</tspan></text><rect x=\"570\" y=\"70\" width=\"170\" height=\"110\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"655\" y=\"94\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"655\" dy=\"0\">v_cm = Rω</tspan></text><text x=\"655\" y=\"120\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"655\" dy=\"0\">a_cm = Rα</tspan></text><text x=\"655\" y=\"150\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"655\" dy=\"0\">static friction (no slipping)</tspan><tspan x=\"655\" dy=\"14.4\">provides the torque</tspan></text><path d=\"M 320 96 A 70 70 0 0 1 440 96\" fill=\"none\" stroke=\"#C99700\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"380\" y=\"84\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#C99700\"><tspan x=\"380\" dy=\"0\">ω</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">In rolling without slipping the center moves at v = Rω, the top point moves at twice that speed, and the contact point is instantaneously at rest.</p>\n  </div>\n<!--/apv:rolling-velocities-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>If an object is sliding while it spins — a car tire screeching, spinning its wheels on ice — the relationship v<sub>cm</sub>=rω no longer holds. That simple, convenient link between translational and rotational speed is a special feature of rolling <em>without</em> slipping specifically, not a universal law connecting v and ω for every rotating object.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Rolling Speed and Angular Velocity.</strong> A wheel of radius 0.30 m rolls without slipping, with its center moving at 6.0 m/s. Find its angular velocity.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using v<sub>cm</sub> = rω, solve for ω: ω = v<sub>cm</sub>/r = 6.0/0.30 = <strong>20 rad/s</strong>. This single relationship is what lets you move fluently between the wheel's \"how fast is it traveling\" (linear) and \"how fast is it spinning\" (angular) descriptions.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Apply v<sub>cm</sub>=rω and a<sub>cm</sub>=rα for an object rolling without slipping.</li>\n      <li>Explain why the contact point of a rolling-without-slipping object is momentarily at rest.</li>\n      <li>Explain why static (not kinetic) friction is the relevant friction type during rolling without slipping.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 5 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why pushing a door near its hinge, even very hard, barely opens it, while pushing near the handle opens it easily.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A hoop and a solid disk have equal mass and radius. Explain which one has a greater moment of inertia, and why.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Explain why static equilibrium requires both zero net force AND zero net torque, using an example where one condition holds without the other.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain why the choice of pivot point for a torque calculation doesn't affect the final answer for an object in equilibrium.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain why a car's spinning, slipping tire on ice does not satisfy v=rω.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A wheel starts at rest and accelerates at 3.0 rad/s² for 5.0 s. Find its final angular velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A 40 N force is applied perpendicular to a lever arm 0.60 m from the axis. Find the torque produced.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A 4.0 kg point mass sits 0.80 m from an axis. Find its contribution to the system's moment of inertia.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A net torque of 18 N·m acts on an object with moment of inertia 3.0 kg·m². Find its angular acceleration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A 50 kg child sits 1.5 m from the center of a seesaw. Find where a 60 kg adult must sit on the other side to balance it.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A wheel of radius 0.25 m rolls without slipping at 8.0 m/s. Find its angular velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Find the moment of inertia of a solid disk with mass 5.0 kg and radius 0.20 m.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A thin rod (mass 2.0 kg, length 1.2 m) rotates about one end. Find its moment of inertia.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Torque depends on the lever arm distance (τ=rFsinθ). Pushing near the hinge means r is very small, producing very little torque regardless of force; pushing near the handle maximizes r, producing much more torque for the same applied force.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">The hoop has the greater moment of inertia (I=MR² vs. I=½MR² for the disk). Since I depends on r², and the hoop's entire mass sits at the maximum radius R, while the disk's mass is spread from the center outward (much of it closer to the axis), the hoop's mass contributes more per unit mass to I.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">A rod with two equal, opposite forces applied at different points (like turning a steering wheel with both hands) has zero net force — it won't translate — but a nonzero net torque, causing it to spin. This shows ΣF=0 alone doesn't guarantee equilibrium; Στ=0 must also hold.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">For a truly balanced object (Στ=0 about its actual axis), the torques must also balance about any other point — this is a mathematical consequence of the object having zero net force as well; choosing a different pivot just changes how the calculation is organized, not the physics itself.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">v=rω only holds for rolling WITHOUT slipping, where the contact point is momentarily at rest relative to the ground. A slipping, spinning tire has relative motion between the tire's surface and the ice at the contact point, breaking that simple relationship.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">ω = ω0+αt = 0+(3.0)(5.0) = <strong>15 rad/s</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">τ = rFsinθ = (0.60)(40)(1) = <strong>24 N·m</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">I = mr² = (4.0)(0.80)² = (4.0)(0.64) = <strong>2.56 kg·m²</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">α = τ/I = 18/3.0 = <strong>6.0 rad/s²</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">Balancing torques: (50)(1.5) = (60)(d) → 75 = 60d → d ≈ <strong>1.25 m</strong> from the center.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">ω = v/r = 8.0/0.25 = <strong>32 rad/s</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">I = ½MR² = ½(5.0)(0.20)² = ½(5.0)(0.04) = <strong>0.10 kg·m²</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">I = (1/3)ML² = (1/3)(2.0)(1.2)² = (1/3)(2.0)(1.44) = <strong>0.96 kg·m²</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 5 QBank</strong> to drill these ideas, then move on to <strong>Unit 6 — Energy and Momentum of Rotating Systems</strong>.\n  </div>\n\n</div>\n",
  "6": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Energy and Momentum of Rotating Systems</h1>\n  <p class=\"sub\">This unit does for rotation what Units 3 and 4 did for straight-line motion: it swaps out \"before and after\" force-tracking for two more powerful bookkeeping tools — energy and momentum — now applied to spinning objects. Once again, you already know the ideas; you're mostly relearning them with an ω where a v used to be.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 5–8%</span>\n    <span class=\"pill\">4 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s61\">6.1 Rotational Kinetic Energy</a></li>\n    <li><a href=\"#s62\">6.2 Angular Momentum</a></li>\n    <li><a href=\"#s63\">6.3 Conservation of Angular Momentum</a></li>\n    <li><a href=\"#s64\">6.4 Total Kinetic Energy of Rolling Objects</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Two More Translation Pairs</span>\n    <p>Add these two rows to the translation table from Unit 5, and you have essentially the entire content of this unit already mapped out:</p>\n    <table class=\"formula-table\" style=\"margin:10px 0 0;\">\n      <tr><th>Linear (Units 3–4)</th><th>Rotational (this unit)</th></tr>\n      <tr><td>KE = ½mv²</td><td>KE<sub>rot</sub> = ½Iω²</td></tr>\n      <tr><td>p = mv</td><td>L = Iω</td></tr>\n      <tr><td>Conservation of momentum (no net external force)</td><td>Conservation of angular momentum (no net external torque)</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"s61\"><span class=\"num\">6.1</span>Rotational Kinetic Energy</h2>\n  <p>Just as a moving object has kinetic energy from its straight-line motion, a spinning object has kinetic energy from its rotation — and the formula is built the exact same way, with I standing in for m and ω standing in for v.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">KE<sub>rot</sub> = ½Iω²</div>\n    <div class=\"sub\">rotational kinetic energy — units: joules, same as any other energy</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Rotational kinetic energy depends on ω<em>squared</em>, exactly like translational kinetic energy depends on v squared. Doubling an object's angular velocity doesn't double its rotational KE — it quadruples it. This is a genuinely important distinction from angular momentum (covered next), which scales linearly with ω, not quadratically — don't let the two blur together.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Rotational KE of a Spinning Disk.</strong> A solid disk (mass 3.0 kg, radius 0.40 m) spins at 10 rad/s. Find its rotational kinetic energy.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">First find the moment of inertia: I = ½MR² = ½(3.0)(0.40)² = ½(3.0)(0.16) = 0.24 kg·m². Then KE<sub>rot</sub> = ½Iω² = ½(0.24)(10)² = ½(0.24)(100) = <strong>12 J</strong>. Notice a disk can have significant kinetic energy from spinning in place, even with zero translational velocity — a purely rotational form of \"moving\" energy.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute rotational kinetic energy given moment of inertia and angular velocity.</li>\n      <li>Explain why rotational KE scales with the square of angular velocity, not linearly.</li>\n      <li>Explain how a spinning object can have kinetic energy even with zero translational velocity.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s62\"><span class=\"num\">6.2</span>Angular Momentum</h2>\n  <p>Angular momentum is the rotational sibling of linear momentum — it measures how much rotational \"oomph\" a spinning object has, and just like linear momentum, it plays a starring role in understanding how rotating systems interact with each other.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">L = Iω</div>\n    <div class=\"sub\">angular momentum — units: kg·m²/s</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Angular momentum is <em>linear</em> in ω (L=Iω), while rotational kinetic energy is <em>quadratic</em> in ω (KE<sub>rot</sub>=½Iω²) — the exact same linear-vs-quadratic contrast that distinguishes linear momentum (p=mv) from kinetic energy (KE=½mv²). Doubling ω doubles L but quadruples KE<sub>rot</sub>. Keeping this distinction straight is essential for the conservation problems in the next section.</p>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Torque's relationship to angular momentum mirrors force and momentum</div>\n    <p>Just as F = Δp/Δt connects force to a change in linear momentum, net torque connects to a change in angular momentum: τ<sub>net</sub> = ΔL/Δt. This is the rotational angular-impulse-momentum theorem, and it's exactly why applying a torque over time is what changes an object's angular momentum — a direct parallel to Unit 4's impulse-momentum theorem.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Finding Angular Momentum.</strong> A wheel with moment of inertia 5.0 kg·m² spins at 8.0 rad/s. Find its angular momentum.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">L = Iω = (5.0)(8.0) = <strong>40 kg·m²/s</strong>. This single number captures the wheel's total \"resistance to having its rotation stopped\" — a heavier, faster-spinning, or more spread-out wheel all produce a larger L, and it takes a correspondingly larger angular impulse (torque × time) to bring it to a stop.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute angular momentum given moment of inertia and angular velocity.</li>\n      <li>Explain why angular momentum is linear in ω, in contrast to rotational KE's quadratic dependence.</li>\n      <li>State the rotational angular-impulse-momentum theorem and its parallel to the linear version.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s63\"><span class=\"num\">6.3</span>Conservation of Angular Momentum</h2>\n  <p>When no net external torque acts on a system, its total angular momentum stays exactly constant — even as the system's moment of inertia and angular velocity individually change. This is the single most famous and most tested idea in this whole unit.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">L<sub>before</sub> = L<sub>after</sub> &nbsp;&nbsp;i.e.&nbsp;&nbsp; I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub></div>\n    <div class=\"sub\">valid whenever no net external torque acts on the system</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — The Ice Skater Effect</span>\n    <p>A spinning skater pulling their arms in reduces their moment of inertia (mass moving closer to the rotation axis) — and since L=Iω has to stay constant with no external torque, a smaller I forces a larger ω, so the skater spins faster. Pulling arms in doesn't add any spin directly; it just redistributes existing angular momentum into a faster rotation, exactly the way conservation of linear momentum redistributes velocity when mass changes in a collision.</p>\n  </div>\n\n  <!--apv:skater-angular-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 232\" role=\"img\" aria-label=\"Skater spinning slowly with arms out and quickly with arms pulled in\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Conservation of angular momentum: change I, and ω changes to compensate</tspan></text><circle cx=\"180\" cy=\"70\" r=\"10\" fill=\"#f4d8c0\" stroke=\"#555\" stroke-width=\"1.5\"/><line x1=\"180\" y1=\"80\" x2=\"180\" y2=\"140\" stroke=\"#4a6ea8\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"94\" x2=\"124\" y2=\"94\" stroke=\"#f4d8c0\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"94\" x2=\"236\" y2=\"94\" stroke=\"#f4d8c0\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"124\" cy=\"94\" r=\"5\" fill=\"#C99700\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"236\" cy=\"94\" r=\"5\" fill=\"#C99700\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"180\" cy=\"152\" rx=\"30\" ry=\"8\" fill=\"none\" stroke=\"#999\"/><text x=\"180\" y=\"186\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"180\" dy=\"0\">arms OUT</tspan></text><text x=\"180\" y=\"206\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"180\" dy=\"0\">large I → small ω</tspan></text><line x1=\"260\" y1=\"110\" x2=\"330\" y2=\"110\" stroke=\"#232323\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ah)\"/><text x=\"295\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"295\" dy=\"0\">pull in</tspan></text><circle cx=\"440\" cy=\"70\" r=\"10\" fill=\"#f4d8c0\" stroke=\"#555\" stroke-width=\"1.5\"/><line x1=\"440\" y1=\"80\" x2=\"440\" y2=\"140\" stroke=\"#4a6ea8\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"94\" x2=\"422\" y2=\"94\" stroke=\"#f4d8c0\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"440\" y1=\"94\" x2=\"458\" y2=\"94\" stroke=\"#f4d8c0\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"422\" cy=\"94\" r=\"5\" fill=\"#C99700\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"458\" cy=\"94\" r=\"5\" fill=\"#C99700\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"440\" cy=\"152\" rx=\"30\" ry=\"8\" fill=\"none\" stroke=\"#999\"/><text x=\"440\" y=\"186\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"440\" dy=\"0\">arms IN</tspan></text><text x=\"440\" y=\"206\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"440\" dy=\"0\">small I → large ω</tspan></text><rect x=\"520\" y=\"56\" width=\"220\" height=\"150\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"630\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">L = Iω = constant</tspan></text><text x=\"630\" y=\"108\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"630\" dy=\"0\">(no net external torque)</tspan></text><text x=\"630\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">I₁ω₁ = I₂ω₂</tspan></text><text x=\"630\" y=\"172\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"630\" dy=\"0\">Kinetic energy still changes:</tspan><tspan x=\"630\" dy=\"14.4\">the skater does work pulling in.</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">With no external torque, Iω stays constant. Pulling mass closer to the axis lowers I, so the spin rate ω must rise.</p>\n  </div>\n<!--/apv:skater-angular-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Just like linear momentum conservation in Unit 4, conservation of angular momentum does NOT imply conservation of kinetic energy. When the skater pulls their arms in, their rotational kinetic energy actually <em>increases</em> — because the skater does real muscular work pulling their arms inward against the outward-pulling effect of their own spin. Angular momentum conservation and energy conservation are separate laws, and it's entirely possible for one to hold while the other doesn't.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>The Spinning Skater.</strong> A skater spins at 2.0 rad/s with arms extended, moment of inertia 5.0 kg·m². She pulls her arms in, reducing her moment of inertia to 2.0 kg·m². Find her new angular velocity, and compare her kinetic energy before and after.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using conservation of angular momentum: I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub>, so (5.0)(2.0) = (2.0)ω<sub>2</sub>, giving ω<sub>2</sub> = 10/2.0 = <strong>5.0 rad/s</strong> — she spins two and a half times faster. Now compare kinetic energy: KE<sub>1</sub> = ½(5.0)(2.0)² = 10 J. KE<sub>2</sub> = ½(2.0)(5.0)² = 25 J. Her kinetic energy actually <strong>increased</strong>, from 10 J to 25 J — that extra 15 J came from the real physical work her muscles did pulling her arms inward, not from any violation of angular momentum conservation.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the condition (no net external torque) required for angular momentum conservation.</li>\n      <li>Solve a \"moment of inertia changes\" problem (skater, diver, or similar) using conservation of angular momentum.</li>\n      <li>Explain why rotational kinetic energy can change even while angular momentum stays constant.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s64\"><span class=\"num\">6.4</span>Total Kinetic Energy of Rolling Objects</h2>\n  <p>An object rolling without slipping — a ball rolling down a hill, a wheel rolling along the ground — has kinetic energy in BOTH forms at once: translational (from its center of mass moving) and rotational (from its spinning). Total kinetic energy is simply the sum of the two.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">KE<sub>total</sub> = ½mv<sub>cm</sub>² + ½Iω²</div>\n    <div class=\"sub\">for rolling without slipping, substitute ω = v<sub>cm</sub>/r to combine both terms</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Why rolling objects go slower down a ramp than sliding ones</div>\n    <p>When a ball rolls down a frictionless-except-for-rolling incline, its gravitational PE has to split between BOTH translational and rotational kinetic energy — unlike a block that simply slides down (no friction at all, no rotation), where ALL the PE converts into translational KE alone. This is exactly why a rolling object always arrives at the bottom moving slower than a frictionless sliding object dropped from the same height: some of its energy \"budget\" got spent spinning it up instead of speeding it up.</p>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Rolling Without Slipping Still Conserves Mechanical Energy</span>\n    <p>It might seem like friction should always drain mechanical energy, the way it did in Unit 3 — but static friction acting at the contact point of a rolling-without-slipping object does <strong>zero work</strong>, because that point has zero velocity at every instant (from Unit 5's rolling-motion condition). Zero displacement of the point where the force acts means zero work, regardless of how large the friction force is — so mechanical energy conservation still applies fully to a rolling object, letting you use conservation of energy exactly as in Unit 3, just now with an extra rotational KE term included.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>A Solid Sphere Rolling Down a Ramp.</strong> A solid sphere (I=(2/5)MR²) starts from rest at the top of a ramp 2.0 m high and rolls without slipping to the bottom. Find its speed at the bottom.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Apply conservation of energy, now splitting final KE into translational and rotational parts: mgh = ½mv² + ½Iω². Substitute I=(2/5)mR² and ω=v/R (rolling without slipping): mgh = ½mv² + ½(2/5)mR²(v/R)² = ½mv² + (1/5)mv² = (7/10)mv². The mass cancels entirely: gh = (7/10)v², so v² = 10gh/7 = 10(9.8)(2.0)/7 = 196/7 = 28, giving v = √28 ≈ <strong>5.3 m/s</strong>. Compare this to a frictionless block simply sliding down the same 2.0 m height, which would reach v=√(2gh)=√39.2≈6.3 m/s — noticeably faster, since none of its energy had to go toward spinning anything up.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute the total kinetic energy of a rolling object as the sum of translational and rotational KE.</li>\n      <li>Explain why static friction does zero work on an object rolling without slipping.</li>\n      <li>Use conservation of energy, including the rotational KE term, to find the speed of a rolling object.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 6 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A spinning ice skater pulls her arms inward. Explain why her angular velocity increases, using conservation of angular momentum.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Explain why the skater's kinetic energy in Question 1 is NOT conserved, even though her angular momentum is.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A solid sphere and a hoop of equal mass and radius are released from rest at the top of the same ramp and roll without slipping. Which reaches the bottom first? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain why static friction does zero work on a ball that rolls without slipping down a ramp.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Compare how rotational kinetic energy and angular momentum each scale with angular velocity ω.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>Find the rotational kinetic energy of an object with I=2.0 kg·m² spinning at 6.0 rad/s.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the angular momentum of the same object.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A torque of 5.0 N·m is applied to an object for 3.0 s. Find the resulting change in angular momentum.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A diver spinning at 4.0 rad/s with I=8.0 kg·m² tucks into a smaller shape, reducing I to 2.0 kg·m². Find her new angular velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A merry-go-round (I=300 kg·m²) spins at 1.0 rad/s. A child (contributing ΔI=50 kg·m² once aboard) jumps onto the edge from rest. Find the new angular velocity.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Find the total kinetic energy of a solid disk (mass 2.0 kg, radius 0.30 m) rolling without slipping at 4.0 m/s.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A hoop rolls without slipping down a ramp 1.8 m high, starting from rest. Find its speed at the bottom. (Hint: for a hoop, KE_total=mv².)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>Find the moment of inertia of an object with L=36 kg·m²/s and ω=6.0 rad/s.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Since L=Iω must stay constant (no external torque), and pulling her arms in reduces I, ω must increase proportionally to keep the product Iω unchanged.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Angular momentum conservation and kinetic energy conservation are separate, independent laws. The skater's muscles do real physical work pulling her arms inward against the outward pull of her own spin, adding kinetic energy to the system — this doesn't violate angular momentum conservation at all.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">The solid sphere reaches the bottom first. Its smaller moment of inertia (2/5 MR² vs. MR² for the hoop) means less of the available gravitational PE has to go toward rotational KE, leaving more for translational KE — giving it a higher speed (and greater acceleration) at every point along the ramp.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">The contact point of an object rolling without slipping has zero instantaneous velocity — and since work requires actual displacement of the point where a force is applied, a force acting on a point with zero velocity (zero displacement over any instant) does zero work, regardless of the force's magnitude.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Rotational kinetic energy scales with ω² (quadratic) — doubling ω quadruples KE_rot. Angular momentum scales with ω directly (linear) — doubling ω simply doubles L. This mirrors the same linear-vs-quadratic contrast between linear momentum and kinetic energy.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">KE_rot = ½Iω² = ½(2.0)(6.0)² = ½(2.0)(36) = <strong>36 J</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">L = Iω = (2.0)(6.0) = <strong>12 kg·m²/s</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">ΔL = τΔt = (5.0)(3.0) = <strong>15 kg·m²/s</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">I1ω1=I2ω2 → (8.0)(4.0)=(2.0)ω2 → ω2 = 32/2.0 = <strong>16 rad/s</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">(300)(1.0) = (350)ω2 → ω2 = 300/350 ≈ <strong>0.857 rad/s</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">For a solid disk, KE_total = ¾mv² (derived from combining translational and rotational KE using I=½MR² and rolling without slipping). KE = (3/4)(2.0)(4.0)² = (0.75)(2.0)(16) = <strong>24 J</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">mgh = mv² (mass cancels) → v² = gh = (9.8)(1.8) = 17.64 → v = <strong>≈ 4.2 m/s</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">I = L/ω = 36/6.0 = <strong>6.0 kg·m²</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 6 QBank</strong> to drill these ideas, then move on to <strong>Unit 7 — Oscillations</strong>.\n  </div>\n\n</div>\n",
  "7": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Oscillations</h1>\n  <p class=\"sub\">Everything in this unit is really just Hooke's Law from Unit 2 and energy conservation from Unit 3, watching the same back-and-forth motion repeat forever. Once you see that a spring and a pendulum are two costumes worn by the exact same underlying physics, this becomes one of the more satisfying units in the whole course.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 5–8%</span>\n    <span class=\"pill\">4 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s71\">7.1 Simple Harmonic Motion — Defining Features</a></li>\n    <li><a href=\"#s72\">7.2 Mass on a Spring</a></li>\n    <li><a href=\"#s73\">7.3 The Simple Pendulum</a></li>\n    <li><a href=\"#s74\">7.4 Energy in Simple Harmonic Motion</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — What Makes Motion \"Simple Harmonic\"</span>\n    <p>Simple harmonic motion (SHM) is any motion caused by a restoring force directly proportional to displacement (F=−kx, from Unit 2's spring section). That single defining feature — restoring force proportional to displacement — is what guarantees the motion will be perfectly periodic and sinusoidal, and it's the thread connecting every topic in this unit: springs satisfy it exactly; pendulums satisfy it only approximately, for small angles. Whenever you see \"restoring force proportional to displacement,\" you're looking at SHM.</p>\n  </div>\n\n  <h2 id=\"s71\"><span class=\"num\">7.1</span>Simple Harmonic Motion — Defining Features</h2>\n  <p>SHM describes any back-and-forth motion where the restoring force (and therefore the acceleration) is always proportional to displacement, and always points back toward equilibrium. This single rule produces a whole family of predictable, related behaviors worth knowing cold.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Where Velocity and Acceleration Are Extreme</span>\n    <p>At maximum displacement (x=±A, the amplitude), the restoring force — and therefore acceleration — is at its <strong>maximum</strong> magnitude, while velocity is exactly <strong>zero</strong> (the object has momentarily stopped to reverse direction). At the equilibrium position (x=0), the restoring force is exactly zero (no displacement, no restoring force), so acceleration is zero — but velocity is at its <strong>maximum</strong>, since the object has had the entire swing to speed up. This is precisely the same \"zero velocity, nonzero acceleration at the peak\" idea from Unit 1's free-fall trap, now appearing in a new context.</p>\n  </div>\n\n  <!--apv:shm-graphs-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 318\" role=\"img\" aria-label=\"Position, velocity and acceleration versus time for simple harmonic motion\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Simple harmonic motion: x, v, and a are shifted copies of one wave</tspan></text><line x1=\"70\" y1=\"86\" x2=\"590\" y2=\"86\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"86\" x2=\"70\" y2=\"30\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"58\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 58)\"><tspan x=\"40\" dy=\"0\">x</tspan></text><line x1=\"70\" y1=\"58\" x2=\"590\" y2=\"58\" stroke=\"#ddd\" stroke-width=\"1\" stroke-linecap=\"round\"/><path d=\"M 70 32 L 75.2 32.20501776582358 L 80.4 32.81683781065559 L 85.6 33.82581136690546 L 90.8 35.21602631885955 L 96 36.96555814625137 L 101.2 39.0468156870433 L 106.4 41.42697626653407 L 111.6 44.06850333054609 L 116.8 46.92973841930811 L 122 49.96555814625137 L 127.2 53.128085820771155 L 132.4 56.367446492237846 L 137.60000000000002 59.63255350776215 L 142.8 62.871914179228845 L 148 66.03444185374863 L 153.2 69.07026158069189 L 158.4 71.93149666945392 L 163.6 74.57302373346593 L 168.8 76.9531843129567 L 174 79.03444185374863 L 179.2 80.78397368114045 L 184.4 82.17418863309453 L 189.60000000000002 83.18316218934442 L 194.8 83.79498223417642 L 200 84 L 205.20000000000002 83.79498223417642 L 210.4 83.18316218934442 L 215.60000000000002 82.17418863309453 L 220.79999999999998 80.78397368114045 L 226 79.03444185374863 L 231.2 76.9531843129567 L 236.4 74.57302373346593 L 241.6 71.9314966694539 L 246.8 69.07026158069188 L 252 66.03444185374863 L 257.2 62.87191417922884 L 262.4 59.63255350776215 L 267.6 56.36744649223787 L 272.8 53.12808582077117 L 278 49.96555814625137 L 283.2 46.92973841930813 L 288.4 44.06850333054611 L 293.6 41.426976266534076 L 298.8 39.046815687043306 L 304 36.96555814625137 L 309.20000000000005 35.21602631885955 L 314.4 33.82581136690547 L 319.6 32.8168378106556 L 324.79999999999995 32.20501776582358 L 330 32 L 335.2 32.20501776582358 L 340.40000000000003 32.81683781065559 L 345.6 33.82581136690547 L 350.8 35.21602631885955 L 356 36.965558146251375 L 361.20000000000005 39.04681568704331 L 366.4 41.426976266534055 L 371.59999999999997 44.06850333054607 L 376.8 46.9297384193081 L 382 49.96555814625136 L 387.2 53.128085820771155 L 392.4 56.36744649223785 L 397.6 59.63255350776213 L 402.8 62.87191417922885 L 408 66.03444185374863 L 413.2 69.0702615806919 L 418.40000000000003 71.9314966694539 L 423.6 74.57302373346596 L 428.79999999999995 76.95318431295668 L 434 79.03444185374863 L 439.2 80.78397368114044 L 444.4 82.17418863309453 L 449.59999999999997 83.1831621893444 L 454.8 83.79498223417642 L 460 84 L 465.2 83.79498223417643 L 470.40000000000003 83.18316218934442 L 475.6 82.17418863309454 L 480.8 80.78397368114045 L 486 79.03444185374863 L 491.20000000000005 76.9531843129567 L 496.4 74.57302373346596 L 501.59999999999997 71.93149666945394 L 506.8 69.07026158069192 L 512 66.03444185374865 L 517.2 62.87191417922887 L 522.4 59.63255350776215 L 527.6 56.367446492237875 L 532.8 53.128085820771155 L 538 49.96555814625138 L 543.2 46.929738419308094 L 548.4000000000001 44.06850333054609 L 553.6 41.42697626653405 L 558.8 39.04681568704333 L 564 36.965558146251375 L 569.2 35.21602631885956 L 574.4 33.82581136690547 L 579.5999999999999 32.8168378106556 L 584.8 32.20501776582358 L 590 32\" fill=\"none\" stroke=\"#D2451E\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"70\" y1=\"176\" x2=\"590\" y2=\"176\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"176\" x2=\"70\" y2=\"120\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 148)\"><tspan x=\"40\" dy=\"0\">v</tspan></text><line x1=\"70\" y1=\"148\" x2=\"590\" y2=\"148\" stroke=\"#ddd\" stroke-width=\"1\" stroke-linecap=\"round\"/><path d=\"M 70 148 L 75.2 151.2586640726719 L 80.4 154.46593706628622 L 85.6 157.57123836980162 L 90.8 160.5255955266446 L 96 163.28241655960431 L 101.2 165.7982247541459 L 106.4 168.03334431217053 L 111.6 169.9525260630524 L 116.8 171.5255033641165 L 122 172.727469423674 L 127.2 173.5394685189459 L 132.4 173.94869493913507 L 137.60000000000002 173.94869493913507 L 142.8 173.5394685189459 L 148 172.727469423674 L 153.2 171.5255033641165 L 158.4 169.9525260630524 L 163.6 168.03334431217053 L 168.8 165.7982247541459 L 174 163.28241655960431 L 179.2 160.5255955266446 L 184.4 157.57123836980162 L 189.60000000000002 154.46593706628622 L 194.8 151.2586640726719 L 200 148 L 205.20000000000002 144.7413359273281 L 210.4 141.53406293371376 L 215.60000000000002 138.42876163019835 L 220.79999999999998 135.4744044733554 L 226 132.7175834403957 L 231.2 130.2017752458541 L 236.4 127.96665568782947 L 241.6 126.0474739369476 L 246.8 124.47449663588348 L 252 123.272530576326 L 257.2 122.46053148105409 L 262.4 122.05130506086493 L 267.6 122.05130506086493 L 272.8 122.46053148105409 L 278 123.272530576326 L 283.2 124.47449663588348 L 288.4 126.0474739369476 L 293.6 127.96665568782947 L 298.8 130.2017752458541 L 304 132.71758344039569 L 309.20000000000005 135.4744044733554 L 314.4 138.42876163019835 L 319.6 141.53406293371376 L 324.79999999999995 144.74133592732807 L 330 148 L 335.2 151.2586640726719 L 340.40000000000003 154.46593706628622 L 345.6 157.57123836980162 L 350.8 160.52559552664462 L 356 163.28241655960431 L 361.20000000000005 165.7982247541459 L 366.4 168.0333443121705 L 371.59999999999997 169.95252606305237 L 376.8 171.5255033641165 L 382 172.727469423674 L 387.2 173.5394685189459 L 392.4 173.94869493913507 L 397.6 173.94869493913507 L 402.8 173.5394685189459 L 408 172.727469423674 L 413.2 171.5255033641165 L 418.40000000000003 169.9525260630524 L 423.6 168.0333443121705 L 428.79999999999995 165.79822475414593 L 434 163.28241655960431 L 439.2 160.52559552664462 L 444.4 157.57123836980162 L 449.59999999999997 154.46593706628624 L 454.8 151.2586640726719 L 460 148 L 465.2 144.74133592732812 L 470.40000000000003 141.53406293371378 L 475.6 138.42876163019838 L 480.8 135.4744044733554 L 486 132.7175834403957 L 491.20000000000005 130.2017752458541 L 496.4 127.96665568782952 L 501.59999999999997 126.04747393694763 L 506.8 124.47449663588351 L 512 123.272530576326 L 517.2 122.46053148105409 L 522.4 122.05130506086493 L 527.6 122.05130506086493 L 532.8 122.46053148105409 L 538 123.272530576326 L 543.2 124.4744966358835 L 548.4000000000001 126.0474739369476 L 553.6 127.9666556878295 L 558.8 130.20177524585407 L 564 132.71758344039569 L 569.2 135.47440447335538 L 574.4 138.42876163019838 L 579.5999999999999 141.53406293371376 L 584.8 144.7413359273281 L 590 148\" fill=\"none\" stroke=\"#2E6BC6\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><line x1=\"70\" y1=\"266\" x2=\"590\" y2=\"266\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"266\" x2=\"70\" y2=\"210\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"40\" y=\"238\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 40 238)\"><tspan x=\"40\" dy=\"0\">a</tspan></text><line x1=\"70\" y1=\"238\" x2=\"590\" y2=\"238\" stroke=\"#ddd\" stroke-width=\"1\" stroke-linecap=\"round\"/><path d=\"M 70 264 L 75.2 263.7949822341764 L 80.4 263.1831621893444 L 85.6 262.17418863309456 L 90.8 260.7839736811404 L 96 259.0344418537486 L 101.2 256.9531843129567 L 106.4 254.57302373346593 L 111.6 251.9314966694539 L 116.8 249.0702615806919 L 122 246.03444185374863 L 127.2 242.87191417922884 L 132.4 239.63255350776214 L 137.60000000000002 236.36744649223786 L 142.8 233.12808582077116 L 148 229.96555814625137 L 153.2 226.9297384193081 L 158.4 224.0685033305461 L 163.6 221.42697626653407 L 168.8 219.0468156870433 L 174 216.96555814625137 L 179.2 215.21602631885955 L 184.4 213.82581136690547 L 189.60000000000002 212.81683781065558 L 194.8 212.20501776582358 L 200 212 L 205.20000000000002 212.20501776582358 L 210.4 212.81683781065558 L 215.60000000000002 213.82581136690547 L 220.79999999999998 215.21602631885955 L 226 216.96555814625137 L 231.2 219.0468156870433 L 236.4 221.42697626653407 L 241.6 224.0685033305461 L 246.8 226.92973841930814 L 252 229.96555814625137 L 257.2 233.12808582077116 L 262.4 236.36744649223786 L 267.6 239.63255350776214 L 272.8 242.87191417922884 L 278 246.03444185374863 L 283.2 249.07026158069186 L 288.4 251.9314966694539 L 293.6 254.57302373346593 L 298.8 256.9531843129567 L 304 259.0344418537486 L 309.20000000000005 260.7839736811404 L 314.4 262.17418863309456 L 319.6 263.1831621893444 L 324.79999999999995 263.7949822341764 L 330 264 L 335.2 263.7949822341764 L 340.40000000000003 263.1831621893444 L 345.6 262.17418863309456 L 350.8 260.7839736811404 L 356 259.0344418537486 L 361.20000000000005 256.9531843129567 L 366.4 254.57302373346596 L 371.59999999999997 251.93149666945394 L 376.8 249.0702615806919 L 382 246.03444185374863 L 387.2 242.87191417922884 L 392.4 239.63255350776214 L 397.6 236.36744649223786 L 402.8 233.12808582077116 L 408 229.96555814625137 L 413.2 226.92973841930808 L 418.40000000000003 224.0685033305461 L 423.6 221.42697626653404 L 428.79999999999995 219.04681568704333 L 434 216.96555814625137 L 439.2 215.21602631885955 L 444.4 213.82581136690547 L 449.59999999999997 212.81683781065558 L 454.8 212.20501776582358 L 460 212 L 465.2 212.20501776582358 L 470.40000000000003 212.81683781065558 L 475.6 213.82581136690544 L 480.8 215.21602631885955 L 486 216.96555814625137 L 491.20000000000005 219.0468156870433 L 496.4 221.42697626653404 L 501.59999999999997 224.06850333054606 L 506.8 226.92973841930808 L 512 229.96555814625137 L 517.2 233.12808582077113 L 522.4 236.36744649223786 L 527.6 239.63255350776214 L 532.8 242.87191417922884 L 538 246.03444185374863 L 543.2 249.0702615806919 L 548.4000000000001 251.9314966694539 L 553.6 254.57302373346596 L 558.8 256.9531843129567 L 564 259.0344418537486 L 569.2 260.7839736811404 L 574.4 262.17418863309456 L 579.5999999999999 263.1831621893444 L 584.8 263.7949822341764 L 590 264\" fill=\"none\" stroke=\"#2E7D32\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"330\" y=\"304\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"330\" dy=\"0\">time (one period T = 2π/ω shown twice)</tspan></text><rect x=\"620\" y=\"46\" width=\"130\" height=\"230\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"685\" y=\"70\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"685\" dy=\"0\">At x = ±A:</tspan></text><text x=\"685\" y=\"90\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"685\" dy=\"0\">v = 0</tspan><tspan x=\"685\" dy=\"14.4\">|a| max</tspan></text><text x=\"685\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"685\" dy=\"0\">At x = 0:</tspan></text><text x=\"685\" y=\"160\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"685\" dy=\"0\">|v| max</tspan><tspan x=\"685\" dy=\"14.4\">a = 0</tspan></text><text x=\"685\" y=\"220\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"685\" dy=\"0\">a always points</tspan><tspan x=\"685\" dy=\"14.4\">toward x = 0</tspan><tspan x=\"685\" dy=\"14.4\">(a = −ω²x)</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Velocity leads position by a quarter cycle, and acceleration is always opposite to position. Speed is largest at the center and acceleration largest at the extremes.</p>\n  </div>\n<!--/apv:shm-graphs-->\n\n  <div class=\"eq\">\n    <div class=\"main\">v_max = Aω &nbsp;&nbsp; a_max = Aω²</div>\n    <div class=\"sub\">maximum speed and maximum acceleration in SHM</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Maximum Speed and Maximum Acceleration</span>\n    <p>Amplitude A and angular frequency ω combine to give the two other extreme values of SHM motion: maximum speed is v_max=Aω, reached at equilibrium, and maximum acceleration is a_max=Aω², reached at the amplitude extremes. Both formulas need ω (in rad/s), not f or T directly — convert first using ω=2πf if you're only given frequency or period.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't confuse period T (time for one full cycle) with frequency f (cycles per second) — they're reciprocals of each other, T=1/f, and mixing them up (reporting a frequency where a period was asked for, or vice versa) is a very easy, very common error. Also don't assume amplitude affects period for an ideal spring — it doesn't; a bigger swing and a smaller swing of the same spring-mass system take exactly the same time to complete one cycle.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Period, Frequency, and Angular Frequency.</strong> An oscillator completes 15 full cycles in 6.0 s. Find its period, frequency, and angular frequency.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Period is time per cycle: T = 6.0/15 = <strong>0.40 s</strong>. Frequency is cycles per second, the reciprocal of period: f = 1/T = 1/0.40 = <strong>2.5 Hz</strong>. Angular frequency connects the two: ω = 2πf = 2π(2.5) ≈ <strong>15.7 rad/s</strong>. Notice \"angular frequency\" here uses the same symbol ω as Unit 5's angular velocity — for SHM, it plays an analogous mathematical role describing how fast the oscillation's phase advances, even though nothing is physically rotating.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State the defining feature of SHM (restoring force proportional to displacement).</li>\n      <li>Identify where velocity and acceleration are each at their maximum and minimum during SHM.</li>\n      <li>Convert fluently between period, frequency, and angular frequency.</li>\n      <li>Compute maximum speed (v_max=Aω) and maximum acceleration (a_max=Aω²) from amplitude and angular frequency.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s72\"><span class=\"num\">7.2</span>Mass on a Spring</h2>\n  <p>A mass attached to an ideal spring is the cleanest, most exactly \"perfect\" example of SHM in this entire course — its restoring force follows F=−kx exactly, with no approximations needed anywhere.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">T = 2π√(m/k)</div>\n    <div class=\"sub\">period of a mass-spring system — independent of amplitude</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — What the Period Depends On (and Doesn't)</span>\n    <p>A spring's period depends only on the mass attached and the spring's own stiffness (k) — nothing else. A heavier mass means a longer period (more inertia to accelerate, T∝√m); a stiffer spring means a shorter period (stronger restoring force snapping it back faster, T∝1/√k). Critically, the period does <strong>not</strong> depend on amplitude at all — pull the mass out farther, and it simply moves faster to cover the extra distance in exactly the same amount of time.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>This period formula, T=2π√(m/k), is exactly the same whether the spring is oriented horizontally or hangs vertically. Gravity does shift where the mass's new equilibrium position sits when the spring hangs vertically (it stretches a bit to support the weight) — but it does NOT change the period of oscillation around that new equilibrium point at all. Don't assume a vertical spring problem needs some extra gravity-correction term in the period formula; it doesn't.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Finding the Period.</strong> A 2.0 kg mass is attached to a spring with k = 200 N/m. Find the period of oscillation.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">T = 2π√(m/k) = 2π√(2.0/200) = 2π√0.01 = 2π(0.1) ≈ <strong>0.63 s</strong>. This period is exactly the same regardless of how far the mass is initially pulled before being released — a small nudge and a big pull both complete one full cycle in that same 0.63 s.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute the period of a mass-spring system given mass and spring constant.</li>\n      <li>Explain why the period does not depend on amplitude.</li>\n      <li>Explain why the period formula is unchanged whether the spring is horizontal or vertical.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s73\"><span class=\"num\">7.3</span>The Simple Pendulum</h2>\n  <p>A pendulum is a second, very different-looking physical system that still produces (approximately) SHM — and its period formula depends on a completely different set of variables than a spring's does, which is exactly what makes this section worth studying as its own topic rather than just a copy of 7.2.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">T = 2π√(L/g)</div>\n    <div class=\"sub\">valid only for small swing angles (typically under about 15°)</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Mass Doesn't Matter, Amplitude (Mostly) Doesn't Either</span>\n    <p>Notice what's completely absent from the pendulum period formula: mass. A bowling ball and a golf ball on identical-length strings swing with exactly the same period — the bob's mass simply doesn't appear in T=2π√(L/g) at all. Like the spring, the period also doesn't depend on amplitude, but with an important caveat this time: that's only true for SMALL swing angles. This is precisely why old pendulum clocks are reliable timekeepers: their period depends only on length and gravity, both of which stay essentially constant.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The pendulum period formula is only an approximation, valid for small angles — it relies on the small-angle approximation sinθ≈θ, which is what makes the pendulum's restoring force approximately (not exactly) proportional to displacement. For large swing angles, the true period is noticeably longer than T=2π√(L/g) predicts, and the motion technically isn't pure SHM anymore. Don't apply this formula uncritically to a pendulum swinging through a large arc.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Pendulum Period.</strong> Find the period of a 1.0 m long pendulum on Earth, swinging through a small angle.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">T = 2π√(L/g) = 2π√(1.0/9.8) = 2π√0.102 = 2π(0.319) ≈ <strong>2.0 s</strong>. This is a genuinely useful number to remember — a roughly 1-meter-long pendulum has almost exactly a 2-second period on Earth, which is precisely why the original definition of the meter was, for a time, tied to a pendulum with a half-period of one second.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute a pendulum's period given its length and the local gravitational field strength.</li>\n      <li>Explain why pendulum period is independent of the bob's mass.</li>\n      <li>Explain why the standard pendulum period formula is only valid for small swing angles.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s74\"><span class=\"num\">7.4</span>Energy in Simple Harmonic Motion</h2>\n  <p>An oscillating system's total mechanical energy stays perfectly constant (assuming no friction or air resistance) — exactly the conservation-of-energy principle from Unit 3, just now continuously trading between kinetic and elastic (or gravitational, for a pendulum) potential energy throughout the cycle.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">E<sub>total</sub> = ½kA² = ½mv<sub>max</sub>²</div>\n    <div class=\"sub\">total mechanical energy in SHM — constant throughout the motion, for a spring-mass system</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is Unit 3, wearing a new costume</div>\n    <p>At maximum displacement (x=±A), all the system's energy is potential (½kA²) and kinetic energy is zero, since velocity is zero there. At equilibrium (x=0), all the energy is kinetic (½mv<sub>max</sub>²) and potential energy is zero. In between, the two continuously trade off, always summing to the same constant total — this is the exact same KE-PE trade-off you already mastered for gravitational PE in Unit 3, just now with elastic PE (or, for a pendulum, gravitational PE) playing the \"stored energy\" role.</p>\n  </div>\n\n  <!--apv:shm-energy-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 292\" role=\"img\" aria-label=\"Graph of kinetic, potential and total energy versus position in simple harmonic motion\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Energy in SHM: potential and kinetic trade places, the total is constant</tspan></text><line x1=\"230\" y1=\"240\" x2=\"530\" y2=\"240\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"240\" x2=\"230\" y2=\"70\" stroke=\"#232323\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"380\" y=\"270\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">position x</tspan></text><text x=\"200\" y=\"155\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\" transform=\"rotate(-90 200 155)\"><tspan x=\"200\" dy=\"0\">energy</tspan></text><line x1=\"230\" y1=\"100\" x2=\"530\" y2=\"100\" stroke=\"#2E7D32\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"6 4\"/><text x=\"524\" y=\"92\" text-anchor=\"end\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"524\" dy=\"0\">E_total = ½kA²</tspan></text><path d=\"M 230 100 L 235 109.17777777777778 L 240 118.04444444444444 L 245 126.6 L 250 134.84444444444443 L 255 142.77777777777777 L 260 150.39999999999998 L 265 157.7111111111111 L 270 164.7111111111111 L 275 171.4 L 280 177.77777777777777 L 285 183.84444444444443 L 290 189.6 L 295 195.04444444444445 L 300 200.17777777777778 L 305 205 L 310 209.51111111111112 L 315 213.7111111111111 L 320 217.6 L 325 221.17777777777778 L 330 224.44444444444443 L 335 227.4 L 340 230.04444444444445 L 345 232.3777777777778 L 350 234.4 L 355 236.11111111111111 L 360 237.51111111111112 L 365 238.6 L 370 239.37777777777777 L 375 239.84444444444443 L 380 240 L 385 239.84444444444443 L 390 239.37777777777777 L 395 238.6 L 400 237.51111111111112 L 405 236.11111111111111 L 410 234.4 L 415 232.37777777777777 L 420 230.04444444444445 L 425 227.4 L 430 224.44444444444446 L 435 221.17777777777778 L 440 217.60000000000002 L 445 213.7111111111111 L 450 209.51111111111112 L 455 205 L 460 200.17777777777775 L 465 195.04444444444445 L 470 189.6 L 475 183.84444444444443 L 480 177.77777777777777 L 485 171.4 L 490 164.7111111111111 L 495 157.7111111111111 L 500 150.39999999999998 L 505 142.7777777777778 L 510 134.84444444444443 L 515 126.60000000000002 L 520 118.04444444444444 L 525 109.1777777777778 L 530 100\" fill=\"none\" stroke=\"#2E6BC6\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 230 240 L 235 230.82222222222222 L 240 221.95555555555558 L 245 213.4 L 250 205.15555555555557 L 255 197.22222222222223 L 260 189.60000000000002 L 265 182.2888888888889 L 270 175.2888888888889 L 275 168.6 L 280 162.22222222222223 L 285 156.15555555555557 L 290 150.39999999999998 L 295 144.95555555555558 L 300 139.82222222222222 L 305 135 L 310 130.48888888888888 L 315 126.28888888888889 L 320 122.4 L 325 118.82222222222222 L 330 115.55555555555556 L 335 112.60000000000001 L 340 109.95555555555555 L 345 107.6222222222222 L 350 105.6 L 355 103.88888888888889 L 360 102.48888888888888 L 365 101.4 L 370 100.62222222222223 L 375 100.15555555555554 L 380 100 L 385 100.15555555555554 L 390 100.62222222222223 L 395 101.4 L 400 102.48888888888888 L 405 103.88888888888889 L 410 105.6 L 415 107.62222222222223 L 420 109.95555555555555 L 425 112.60000000000001 L 430 115.55555555555554 L 435 118.82222222222222 L 440 122.39999999999999 L 445 126.28888888888889 L 450 130.48888888888888 L 455 135 L 460 139.82222222222222 L 465 144.95555555555558 L 470 150.40000000000003 L 475 156.15555555555557 L 480 162.22222222222223 L 485 168.6 L 490 175.2888888888889 L 495 182.2888888888889 L 500 189.60000000000002 L 505 197.2222222222222 L 510 205.15555555555557 L 515 213.39999999999998 L 520 221.95555555555558 L 525 230.8222222222222 L 530 240\" fill=\"none\" stroke=\"#D2451E\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"270\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"270\" dy=\"0\">PE = ½kx²</tspan></text><text x=\"380\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"380\" dy=\"0\">KE</tspan></text><text x=\"230\" y=\"256\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"230\" dy=\"0\">−A</tspan></text><text x=\"380\" y=\"256\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">0</tspan></text><text x=\"530\" y=\"256\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"530\" dy=\"0\">+A</tspan></text><rect x=\"40\" y=\"60\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"125\" y=\"84\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"125\" dy=\"0\">At ±A: all PE</tspan></text><text x=\"125\" y=\"108\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"125\" dy=\"0\">At 0: all KE</tspan></text><text x=\"125\" y=\"140\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"125\" dy=\"0\">KE + PE = ½kA²</tspan><tspan x=\"125\" dy=\"15\">at every position</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Potential energy forms a parabola, kinetic energy is its mirror image, and their sum stays at ½kA². At the turning points the energy is all potential; at the center it is all kinetic.</p>\n  </div>\n<!--/apv:shm-energy-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Doubling the amplitude of an SHM system doesn't double its total energy — since E<sub>total</sub>=½kA² depends on A<em>squared</em>, doubling the amplitude actually <strong>quadruples</strong> the total energy. This is the same squared-dependence trap that showed up with elastic PE back in Unit 3, reappearing here in the exact same mathematical form.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Finding Maximum Speed from Energy.</strong> A 0.50 kg mass oscillates on a spring with k=300 N/m and amplitude 0.10 m. Find its maximum speed.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Total energy: E = ½kA² = ½(300)(0.10)² = ½(300)(0.010) = 1.5 J. At the equilibrium position, all of this energy is kinetic: 1.5 = ½(0.50)v<sub>max</sub>², so v<sub>max</sub>² = 6.0, giving v<sub>max</sub> = √6.0 ≈ <strong>2.4 m/s</strong>. Notice this approach never required finding the period or angular frequency at all — pure energy conservation was enough.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute total mechanical energy in an SHM system from either amplitude or maximum speed.</li>\n      <li>Explain how kinetic and potential energy trade off throughout an SHM cycle.</li>\n      <li>Explain why total energy scales with the square of amplitude, not linearly.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 7 Practice Set</h2>\n  <p>Work through every problem before checking the answer key.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why velocity is zero and acceleration is maximum at the extremes of SHM, while the reverse is true at the equilibrium point.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A pendulum bob is replaced with one of twice the mass, with the string length unchanged. Explain what happens to the period.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Explain why the standard pendulum period formula becomes inaccurate for large swing angles.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A mass-spring system's amplitude is tripled. Explain what happens to its total mechanical energy, and to its period.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain the connection between SHM's energy conservation and the gravitational energy conservation studied in Unit 3.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>An oscillator completes 20 cycles in 8.0 s. Find its period and frequency.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A 3.0 kg mass is attached to a spring with k=120 N/m. Find the period of oscillation.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>Find the period of a 2.5 m long pendulum on Earth.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A spring with k=250 N/m has 0.20 m of amplitude. Find the total mechanical energy of the oscillation.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A 1.0 kg mass oscillates with maximum speed 3.0 m/s. Find the total mechanical energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A spring stretches 0.12 m when a 4.0 kg mass hangs from it at rest. Find the spring constant.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Find the length of a pendulum with a period of exactly 1.0 s on Earth.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>An oscillator has amplitude 0.15 m and angular frequency 8.0 rad/s. Find its maximum speed (v_max=Aω).</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">At the extremes, the restoring force (and therefore acceleration) is at its maximum, since displacement from equilibrium is greatest there — but the object has momentarily stopped to reverse direction, so velocity is zero. At equilibrium, displacement (and restoring force, and acceleration) is zero, but the object has had the whole swing to build up speed, so velocity is maximum there.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">The period stays exactly the same. Pendulum period, T=2π√(L/g), does not depend on the bob's mass at all — only on the string length and local gravity.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">The formula relies on the small-angle approximation sinθ≈θ, which makes the restoring force approximately (not exactly) proportional to displacement. For large angles, this approximation breaks down, the true restoring force differs meaningfully from −kx, and the actual period becomes noticeably longer than the formula predicts.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Total mechanical energy increases ninefold, since E=½kA² depends on A². The period, however, is completely unaffected by amplitude — it stays exactly the same.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Both are the same underlying principle: total mechanical energy (KE+PE) stays constant in the absence of non-conservative forces, continuously trading between kinetic and potential forms. In Unit 3, that potential energy was gravitational (mgh) or elastic (½kx²); in SHM, it's typically elastic (spring) or gravitational (pendulum) — the conservation law itself is identical.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">T = 8.0/20 = <strong>0.40 s</strong>. f = 1/T = <strong>2.5 Hz</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">T = 2π√(m/k) = 2π√(3.0/120) = 2π√0.025 ≈ <strong>0.99 s</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">T = 2π√(L/g) = 2π√(2.5/9.8) = 2π√0.255 ≈ <strong>3.2 s</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">E = ½kA² = ½(250)(0.20)² = ½(250)(0.04) = <strong>5.0 J</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">E = ½mv_max² = ½(1.0)(3.0)² = ½(1.0)(9.0) = <strong>4.5 J</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">At equilibrium, spring force balances weight: kx=mg, so k = mg/x = (4.0)(9.8)/0.12 ≈ <strong>327 N/m</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">Solving T=2π√(L/g) for L: L = g(T/2π)² = 9.8(1.0/2π)² = 9.8(0.02533) ≈ <strong>0.248 m</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">v_max = Aω = (0.15)(8.0) = <strong>1.2 m/s</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 7 QBank</strong> to drill these ideas, then move on to <strong>Unit 8 — Fluids</strong>, the final unit of the course.\n  </div>\n\n</div>\n",
  "8": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 1</div>\n  <h1>Fluids</h1>\n  <p class=\"sub\">The final unit of the course, and in some ways the most satisfying one to arrive at — because almost nothing here is new. Pressure is just force spread over area. Buoyancy is just Newton's Second Law with a new name for one of the forces. Bernoulli's equation is just energy conservation, wearing a fluid's clothing. You've been building toward this unit all year without realizing it.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 10–15%</span>\n    <span class=\"pill\">6 topics</span>\n    <span class=\"pill\">13 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s81\">8.1 Density and Pressure</a></li>\n    <li><a href=\"#s82\">8.2 Pressure Variation with Depth</a></li>\n    <li><a href=\"#s83\">8.3 Pascal's Principle</a></li>\n    <li><a href=\"#s84\">8.4 Buoyancy and Archimedes' Principle</a></li>\n    <li><a href=\"#s85\">8.5 Fluid Flow and the Continuity Equation</a></li>\n    <li><a href=\"#s86\">8.6 Bernoulli's Equation</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Every Idea Here Is a Familiar Idea in Disguise</span>\n    <p>This unit rewards recognizing the pattern more than memorizing new formulas:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Pressure</strong> — just force divided by area, a rescaled version of a concept you already know.</li>\n      <li><strong>Buoyancy</strong> — just another force to add to a free-body diagram and plug into F<sub>net</sub>=ma, exactly like Unit 2.</li>\n      <li><strong>Continuity and Bernoulli's equation</strong> — conservation of mass and conservation of energy (Unit 3), respectively, both simply reapplied to a moving fluid instead of a solid object.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">Whenever a fluids problem feels unfamiliar, ask yourself which Unit 1–4 concept it's secretly reusing. It almost always is one.</p>\n  </div>\n\n  <h2 id=\"s81\"><span class=\"num\">8.1</span>Density and Pressure</h2>\n  <p>Density and pressure are the two foundational quantities this whole unit is built from — one describing how \"packed\" a substance is, the other describing how a force gets distributed across a surface.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ρ = m/V &nbsp;·&nbsp; P = F/A</div>\n    <div class=\"sub\">density: kg/m³ · pressure: Pa (pascals) = N/m²</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Pressure Is a Scalar</span>\n    <p>Unlike force, pressure has no direction of its own — it's a scalar quantity. A fluid pushes on a surface in a direction perpendicular to that surface, but the pressure VALUE itself is just a number, the same in every direction at a given point in a fluid. This is part of why fluids behave so differently from rigid solids: push on one part of a contained fluid, and that pressure change propagates in all directions, not just \"forward.\"</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Density is an intensive property — it doesn't depend on how much of a substance you have. A teaspoon of water and an entire swimming pool of water have the exact same density, even though their masses and volumes are wildly different. Don't confuse density (a ratio) with mass or volume (which do scale with the amount of material present).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Pressure from a Force.</strong> A 500 N force is applied evenly across a surface with area 0.25 m². Find the pressure.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">P = F/A = 500/0.25 = <strong>2000 Pa</strong>. Notice that spreading the exact same force over a larger area would produce less pressure — this is the entire physical principle behind snowshoes, which spread a person's weight over a much larger area to avoid sinking into soft snow.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute density given mass and volume, and pressure given force and area.</li>\n      <li>Explain why pressure is a scalar quantity, unlike force.</li>\n      <li>Explain why density does not depend on the amount of a substance present.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s82\"><span class=\"num\">8.2</span>Pressure Variation with Depth</h2>\n  <p>Pressure inside a fluid increases with depth, for an intuitive reason: at any given depth, you're supporting the weight of all the fluid sitting above you.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">P = P<sub>0</sub> + ρgh</div>\n    <div class=\"sub\">P<sub>0</sub> = pressure at the surface (often atmospheric pressure) · h = depth below that surface</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Pressure at a Given Depth Is the Same in Every Direction</span>\n    <p>At a specific depth in a fluid, pressure pushes equally hard in every direction — up, down, and sideways — not just straight down as you might first guess. This is exactly why a submerged object feels squeezed from all sides, not just pressed downward, and it's the reason two containers of wildly different shapes, filled with the same fluid to the same depth, have identical pressure at the bottom — sometimes called the \"hydrostatic paradox,\" since it feels like the wider container's larger total weight of fluid should matter, but it doesn't.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Pressure at a given depth depends only on depth and density (and the surface pressure) — NOT on the total volume or total amount of fluid present. A narrow test tube and a wide swimming pool filled with water to the exact same depth have identical pressure at the bottom, even though the pool contains vastly more total water. Don't assume \"more fluid\" means \"more pressure\" — only depth matters.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Pressure at Depth.</strong> Find the total pressure 5.0 m below the surface of a lake, given atmospheric pressure at the surface is 1.0×10⁵ Pa.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">P = P<sub>0</sub> + ρgh = 1.0×10⁵ + (1000)(9.8)(5.0) = 1.0×10⁵ + 49,000 = <strong>1.49×10⁵ Pa</strong>. Notice how significant the added pressure from the water itself already is at just 5 meters — pressure builds quickly with depth, which is exactly why deep-sea vehicles need such robust construction.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute pressure at a given depth using P=P0+ρgh.</li>\n      <li>Explain why pressure at a point in a fluid acts equally in all directions.</li>\n      <li>Explain why pressure at a given depth is independent of the container's total volume or shape.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s83\"><span class=\"num\">8.3</span>Pascal's Principle</h2>\n  <p>Pascal's Principle states that a pressure change applied anywhere to an enclosed fluid is transmitted, undiminished, to every point in that fluid and to the walls of its container. This single idea is the foundation of every hydraulic system — car lifts, hydraulic brakes, forklifts, and more.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">P<sub>1</sub> = P<sub>2</sub> &nbsp;&nbsp;i.e.&nbsp;&nbsp; F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub></div>\n    <div class=\"sub\">for two connected pistons on the same enclosed fluid, at the same height</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Hydraulic lifts don't break energy conservation</div>\n    <p>A small input force on a small piston can produce a huge output force on a large piston — it can feel almost magical, like getting something for nothing. It isn't. Since the fluid is (essentially) incompressible, the volume pushed in by the small piston must exactly equal the volume that comes out at the large piston — meaning the small piston has to travel a much LARGER distance than the large piston moves. Work in (small force, large distance) still equals work out (large force, small distance): energy conservation holds exactly, the same way it did for a lever back in Unit 5.</p>\n  </div>\n\n  <!--apv:hydraulic-lift-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 244\" role=\"img\" aria-label=\"Hydraulic lift with a small piston and a large piston sharing the same fluid pressure\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Pascal's principle: pressure is transmitted equally; force is multiplied</tspan></text><rect x=\"120\" y=\"150\" width=\"400\" height=\"50\" rx=\"4\" fill=\"#cfe6f7\" stroke=\"#4a90c2\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"100\" width=\"40\" height=\"52\" rx=\"0\" fill=\"#cfe6f7\" stroke=\"#4a90c2\" stroke-width=\"1.5\"/><rect x=\"400\" y=\"70\" width=\"100\" height=\"82\" rx=\"0\" fill=\"#cfe6f7\" stroke=\"#4a90c2\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"90\" width=\"40\" height=\"12\" rx=\"1\" fill=\"#888\" stroke=\"#444\" stroke-width=\"1.5\"/><rect x=\"400\" y=\"60\" width=\"100\" height=\"12\" rx=\"1\" fill=\"#888\" stroke=\"#444\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"52\" x2=\"170\" y2=\"88\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"170\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"170\" dy=\"0\">F₁ (small)</tspan></text><text x=\"170\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"170\" dy=\"0\">A₁ (small)</tspan></text><line x1=\"450\" y1=\"128\" x2=\"450\" y2=\"80\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"450\" y=\"52\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"450\" dy=\"0\">F₂ (large)</tspan></text><line x1=\"450\" y1=\"100\" x2=\"450\" y2=\"66\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"450\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"450\" dy=\"0\">A₂ (large)</tspan></text><text x=\"310\" y=\"190\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"310\" dy=\"0\">same P everywhere in the fluid</tspan></text><rect x=\"550\" y=\"56\" width=\"190\" height=\"150\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"645\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"645\" dy=\"0\">P₁ = P₂</tspan></text><text x=\"645\" y=\"106\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"645\" dy=\"0\">F₁/A₁ = F₂/A₂</tspan></text><text x=\"645\" y=\"140\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"645\" dy=\"0\">Bigger area → bigger force,</tspan><tspan x=\"645\" dy=\"14.4\">but the small piston moves</tspan><tspan x=\"645\" dy=\"14.4\">farther (W₁ = W₂).</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">The same pressure acts on both pistons, so the larger piston feels a proportionally larger force. Energy is conserved because the small piston travels proportionally farther.</p>\n  </div>\n<!--/apv:hydraulic-lift-->\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>A Hydraulic Lift.</strong> A hydraulic lift has a small piston of area 0.010 m² and a large piston of area 0.50 m². A 200 N force is applied to the small piston. Find the force produced at the large piston.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using Pascal's Principle, F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>: 200/0.010 = F<sub>2</sub>/0.50, so F<sub>2</sub> = (200)(0.50)/0.010 = <strong>10,000 N</strong>. A 200 N push produces 10,000 N of lifting force — a 50-fold multiplication, exactly matching the 50-fold ratio between the two piston areas (0.50/0.010=50).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>State Pascal's Principle and apply F1/A1=F2/A2 to a hydraulic system.</li>\n      <li>Explain why a hydraulic lift's force multiplication doesn't violate energy conservation.</li>\n      <li>Explain what stays equal (pressure) and what differs (force) between two connected pistons of different area.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s84\"><span class=\"num\">8.4</span>Buoyancy and Archimedes' Principle</h2>\n  <p>Buoyant force is the upward force a fluid exerts on any object submerged (fully or partially) within it — and it's just one more force to add to a free-body diagram, exactly like gravity, normal force, or tension back in Unit 2.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">F<sub>b</sub> = ρ<sub>fluid</sub>V<sub>displaced</sub>g</div>\n    <div class=\"sub\">Archimedes' Principle — buoyant force equals the weight of the fluid displaced by the object</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Displaced Fluid, Not the Object's Own Weight</span>\n    <p>Buoyant force depends on the weight of the fluid the object <em>pushes out of the way</em> — not on the object's own weight or density at all. A solid steel ball and a hollow plastic ball of the identical size (same volume) submerged in water experience the exact same buoyant force, since they displace the exact same volume of water — even though one sinks and the other floats. What determines floating vs. sinking is how that (identical) buoyant force compares to each object's own (very different) weight.</p>\n  </div>\n\n  <!--apv:buoyancy-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 270\" role=\"img\" aria-label=\"Submerged block with buoyant force upward and weight downward\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Buoyancy: the fluid pushes up with the weight of the fluid displaced</tspan></text><rect x=\"60\" y=\"60\" width=\"280\" height=\"170\" rx=\"4\" fill=\"#cfe6f7\" stroke=\"#4a90c2\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"100\" width=\"70\" height=\"70\" rx=\"3\" fill=\"#8a6d3b\" stroke=\"#4a3a1a\" stroke-width=\"1.5\"/><line x1=\"185\" y1=\"135\" x2=\"185\" y2=\"70\" stroke=\"#2E6BC6\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"200\" y=\"80\" text-anchor=\"start\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"200\" dy=\"0\">F_b = ρ_fluid V_disp g</tspan></text><line x1=\"185\" y1=\"135\" x2=\"185\" y2=\"205\" stroke=\"#D2451E\" stroke-width=\"3\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"200\" y=\"200\" text-anchor=\"start\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"200\" dy=\"0\">mg</tspan></text><text x=\"200\" y=\"250\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"200\" dy=\"0\">F_b &gt; mg: rises   ·   F_b &lt; mg: sinks   ·   equal: floats/hovers</tspan></text><rect x=\"380\" y=\"60\" width=\"360\" height=\"170\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"560\" y=\"84\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"560\" dy=\"0\">Archimedes' principle</tspan></text><text x=\"560\" y=\"112\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"560\" dy=\"0\">F_b depends on the FLUID's density and the</tspan><tspan x=\"560\" dy=\"15\">volume of fluid displaced, not on the</tspan><tspan x=\"560\" dy=\"15\">object's own weight.</tspan></text><text x=\"560\" y=\"168\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"560\" dy=\"0\">Floating object: displaces fluid whose weight</tspan><tspan x=\"560\" dy=\"15\">equals the object's weight.</tspan></text><text x=\"560\" y=\"212\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#666\"><tspan x=\"560\" dy=\"0\">Fully submerged: V_disp = V_object</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">Buoyant force equals the weight of fluid displaced. Compare it with the object's weight to predict whether it rises, sinks, or floats.</p>\n  </div>\n<!--/apv:buoyancy-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>For a floating object, buoyant force exactly equals the object's weight (equilibrium) — but that does NOT mean the entire object is submerged. Only PART of a floating object needs to be underwater to displace enough fluid to generate a buoyant force equal to its full weight; the fraction submerged depends on the ratio of the object's density to the fluid's density.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Fraction of an Iceberg Submerged.</strong> Ice has a density of about 920 kg/m³; seawater has a density of about 1025 kg/m³. Find the fraction of an iceberg's volume that lies below the waterline.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">For a floating object, buoyant force equals weight: ρ<sub>fluid</sub>V<sub>submerged</sub>g = ρ<sub>object</sub>V<sub>total</sub>g. The g's cancel, and rearranging: V<sub>submerged</sub>/V<sub>total</sub> = ρ<sub>object</sub>/ρ<sub>fluid</sub> = 920/1025 ≈ <strong>0.90, or about 90%</strong>. This is exactly where the expression \"tip of the iceberg\" comes from — only about 10% of an iceberg's volume is actually visible above the waterline.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Compute buoyant force using Archimedes' Principle, given the fluid's density and the displaced volume.</li>\n      <li>Explain why buoyant force depends on displaced fluid, not on the submerged object's own weight or density.</li>\n      <li>Find the fraction of a floating object's volume that is submerged, given the relevant densities.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s85\"><span class=\"num\">8.5</span>Fluid Flow and the Continuity Equation</h2>\n  <p>The continuity equation is simply conservation of mass, applied to a flowing, incompressible fluid — whatever volume of fluid flows into one end of a pipe per second must flow out the other end per second, since the fluid can't be created, destroyed, or compressed along the way.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub></div>\n    <div class=\"sub\">the continuity equation — volume flow rate (Av) stays constant along a pipe</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Narrower Means Faster</span>\n    <p>Since A<sub>1</sub>v<sub>1</sub> must equal A<sub>2</sub>v<sub>2</sub>, a fluid speeds up wherever a pipe narrows, and slows down wherever it widens — the same fluid \"squeezing through\" a smaller opening has to move faster to keep the same volume flowing past per second. This is exactly why putting your thumb over the end of a garden hose makes the water shoot out faster: you've reduced the exit area, and continuity forces the exit speed to increase to compensate.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>Speed Change in a Narrowing Pipe.</strong> Water flows at 3.0 m/s through a pipe with cross-sectional area 0.020 m². The pipe narrows to an area of 0.0050 m². Find the fluid's speed in the narrower section.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>: (0.020)(3.0) = (0.0050)v<sub>2</sub>, so v<sub>2</sub> = 0.060/0.0050 = <strong>12 m/s</strong>. The area shrank to one-fourth its original size, and the speed correspondingly quadrupled — exactly consistent with keeping the product Av constant.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Apply the continuity equation to find an unknown speed or area in a flowing fluid system.</li>\n      <li>Explain why fluid speeds up in a narrower section of pipe and slows down in a wider one.</li>\n      <li>Explain the continuity equation as a statement of mass (or volume) conservation for an incompressible fluid.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s86\"><span class=\"num\">8.6</span>Bernoulli's Equation</h2>\n  <p>Bernoulli's equation is conservation of energy, applied to a flowing fluid — it relates pressure, speed, and height at any two points along the same flow, and it's the capstone idea this entire unit has been building toward.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">P<sub>1</sub> + ½ρv<sub>1</sub>² + ρgh<sub>1</sub> = P<sub>2</sub> + ½ρv<sub>2</sub>² + ρgh<sub>2</sub></div>\n    <div class=\"sub\">valid along a streamline, for an ideal (incompressible, non-viscous) fluid</div>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Recognize the three familiar terms</div>\n    <p>Look closely at Bernoulli's equation and you'll see three old friends: P (a measure of a fluid's \"stored\" energy from being under pressure), ½ρv² (literally kinetic energy per unit volume — compare to ½mv²), and ρgh (literally gravitational potential energy per unit volume — compare to mgh). This equation is nothing more than \"energy in = energy out,\" from Unit 3, rewritten in terms of energy PER UNIT VOLUME of fluid instead of per object. If a fluid speeds up, something else in the equation — usually pressure — has to decrease to compensate, exactly like KE and PE trading off for a solid object.</p>\n  </div>\n\n  <!--apv:pipe-flow-->\n  <div class=\"diagram\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 328\" role=\"img\" aria-label=\"Pipe narrowing with fluid speeding up and pressure dropping\" style=\"width:100%;max-width:760px;height:auto;display:block;margin:0 auto;background:#fff;border:1px solid #ECEAE3;border-radius:10px;font-family:'Nunito','Helvetica Neue',Arial,sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#232323\"/></marker><marker id=\"ahr\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#D2451E\"/></marker><marker id=\"ahb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E6BC6\"/></marker><marker id=\"ahg\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#2E7D32\"/></marker><marker id=\"aho\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#E8734A\"/></marker></defs><text x=\"380\" y=\"22\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Fluid flow: narrow section → faster speed → lower pressure</tspan></text><path d=\"M 60 100 L 260 100 L 360 130 L 560 130 L 700 100\" fill=\"none\" stroke=\"#4a90c2\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 60 220 L 260 220 L 360 190 L 560 190 L 700 220\" fill=\"none\" stroke=\"#4a90c2\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 60 100 L 60 220\" fill=\"none\" stroke=\"#4a90c2\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M 60 100 L 260 100 L 360 130 L 560 130 L 700 100 L 700 220 L 560 190 L 360 190 L 260 220 L 60 220 Z\" fill=\"#cfe6f7\" opacity=\".6\"/><line x1=\"90\" y1=\"160\" x2=\"200\" y2=\"160\" stroke=\"#2E6BC6\" stroke-width=\"2.5\" stroke-linecap=\"round\" marker-end=\"url(#ahb)\"/><text x=\"145\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#2E6BC6\"><tspan x=\"145\" dy=\"0\">v₁ (slow)</tspan></text><line x1=\"400\" y1=\"160\" x2=\"540\" y2=\"160\" stroke=\"#D2451E\" stroke-width=\"4\" stroke-linecap=\"round\" marker-end=\"url(#ahr)\"/><text x=\"470\" y=\"148\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#D2451E\"><tspan x=\"470\" dy=\"0\">v₂ (fast)</tspan></text><text x=\"160\" y=\"90\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"160\" dy=\"0\">wide: A₁</tspan></text><text x=\"460\" y=\"120\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"460\" dy=\"0\">narrow: A₂</tspan></text><text x=\"160\" y=\"246\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"160\" dy=\"0\">higher P</tspan></text><text x=\"460\" y=\"212\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"bold\" fill=\"#2E7D32\"><tspan x=\"460\" dy=\"0\">lower P</tspan></text><rect x=\"60\" y=\"262\" width=\"640\" height=\"50\" rx=\"10\" fill=\"#fbf6e6\" stroke=\"#eadba0\" stroke-width=\"1.5\"/><text x=\"380\" y=\"284\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">Continuity: A₁v₁ = A₂v₂     ·     Bernoulli: P + ½ρv² + ρgh = constant</tspan></text><text x=\"380\" y=\"304\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"normal\" fill=\"#232323\"><tspan x=\"380\" dy=\"0\">same flow rate, smaller area → faster; faster fluid → lower pressure (at equal height)</tspan></text></svg>\n    <p class=\"diagram-caption\" style=\"text-align:center; font-size:0.9em; color:#666; margin-top:8px;\">In steady flow the volume flow rate A·v is constant, so fluid speeds up in a narrow section. Bernoulli's equation then says pressure is lower where the fluid is faster (at equal height).</p>\n  </div>\n<!--/apv:pipe-flow-->\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Faster-moving fluid has <strong>lower</strong> pressure, not higher — a genuinely counterintuitive result the first time you encounter it (this is the Bernoulli effect, behind everything from airplane wings to why a shower curtain gets pulled inward). Don't assume \"faster flow\" means \"pushing harder\" in the pressure sense; in Bernoulli's equation, an increase in the ½ρv² term has to be balanced by a decrease in the P term (for fluid at the same height), not the other way around.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Pressure Change in a Horizontal Pipe.</strong> Water (ρ=1000 kg/m³) flows horizontally, speeding up from 2.0 m/s to 6.0 m/s as a pipe narrows. Find the pressure drop between the two points.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since the pipe is horizontal, h<sub>1</sub>=h<sub>2</sub>, so the ρgh terms cancel from both sides entirely. Bernoulli's equation simplifies to: P<sub>1</sub> − P<sub>2</sub> = ½ρv<sub>2</sub>² − ½ρv<sub>1</sub>² = ½ρ(v<sub>2</sub>²−v<sub>1</sub>²) = ½(1000)(36−4) = ½(1000)(32) = <strong>16,000 Pa</strong>. The pressure in the narrower, faster-moving section is 16,000 Pa lower than in the wider section — a direct, quantitative example of the Bernoulli effect.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Torricelli's Theorem: A Draining Tank</span>\n    <p>A common special case: a large open tank has a small hole below the surface. Both the surface and the hole are exposed to atmospheric pressure, so P<sub>1</sub>=P<sub>2</sub> and those terms cancel. If the tank is large, the surface drops so slowly that v<sub>1</sub>≈0. Bernoulli's equation then reduces to ρgh<sub>1</sub> = ½ρv<sub>2</sub>² + ρgh<sub>2</sub>, which simplifies to <strong>v<sub>2</sub> = √(2gΔh)</strong>, where Δh is the depth of the hole below the surface — this result is called Torricelli's theorem, and it's the same speed an object would reach falling from that same height.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Apply Bernoulli's equation to relate pressure, speed, and height at two points in a flow.</li>\n      <li>Explain each term in Bernoulli's equation as an energy-per-volume analog of a familiar Unit 3 concept.</li>\n      <li>Explain why faster-moving fluid corresponds to lower pressure, not higher.</li>\n      <li>Apply Torricelli's theorem (v=√(2gΔh)) to find the efflux speed from a hole in a large open tank.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 8 Practice Set</h2>\n  <p>Work through every problem before checking the answer key. This is the last practice set of the course — treat it accordingly.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why a wide swimming pool and a narrow test tube, both filled with water to the same depth, have equal pressure at the bottom.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A solid steel ball and a hollow plastic ball of the same size are both fully submerged in water. Compare the buoyant force on each, and explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Explain why a hydraulic lift's force multiplication does not violate conservation of energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain why water shoots out faster when you partially cover the end of a garden hose with your thumb.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain why faster-moving fluid has lower pressure, using Bernoulli's equation.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>Find the density of an object with mass 600 kg and volume 0.40 m³.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the pressure produced by a 900 N force spread over an area of 0.30 m².</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>Find the total pressure 12 m below the surface of a lake (P0=1.0×10⁵ Pa).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A hydraulic lift has piston areas 0.008 m² and 0.40 m². Find the output force for a 150 N input force.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>Find the buoyant force on an object that displaces 0.030 m³ of water.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A block (density 700 kg/m³) floats in water (density 1000 kg/m³). Find the fraction of its volume submerged.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Water flows at 4.0 m/s through a 0.050 m² pipe that narrows to 0.010 m². Find the speed in the narrow section.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>Water flows horizontally, speeding up from 1.0 m/s to 5.0 m/s. Find the pressure drop.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Pressure at depth depends only on P=P0+ρgh — density, gravity, and depth — with no dependence on the container's shape or total volume of fluid. Since both containers hold the same fluid to the same depth, their bottom pressures are identical despite vastly different total water volumes.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Equal buoyant force. Since F_b=ρ_fluid V_displaced g depends only on the displaced fluid's volume (identical for both balls, since they're the same size), and not on the object's own density or weight, both balls experience the exact same buoyant force — even though the steel ball sinks and the plastic ball floats.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">Because the incompressible fluid conserves volume, the small piston must travel a much larger distance than the large piston moves. Work (force × distance) balances on both sides: small force over large distance equals large force over small distance — the same energy-conservation logic as a lever.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Covering part of the hose's opening reduces the exit area. By the continuity equation (A1v1=A2v2), a smaller exit area requires a higher exit speed to maintain the same volume flow rate through the hose.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">In Bernoulli's equation, an increase in the ½ρv² (kinetic energy) term must be compensated by a decrease in the P (pressure) term, assuming height stays constant — since the sum of all the energy terms must remain constant along the flow, just like KE and PE trading off for a solid object.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">ρ = m/V = 600/0.40 = <strong>1500 kg/m³</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">P = F/A = 900/0.30 = <strong>3000 Pa</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">P = P0+ρgh = 1.0×10⁵+(1000)(9.8)(12) = 1.0×10⁵+117,600 = <strong>2.176×10⁵ Pa</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">F2 = F1(A2/A1) = 150(0.40/0.008) = 150(50) = <strong>7500 N</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">F_b = ρVg = (1000)(0.030)(9.8) = <strong>294 N</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">Fraction submerged = ρ_object/ρ_fluid = 700/1000 = <strong>0.70, or 70%</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">v2 = A1v1/A2 = (0.050)(4.0)/0.010 = <strong>20 m/s</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">ΔP = ½ρ(v2²−v1²) = ½(1000)(25−1) = ½(1000)(24) = <strong>12,000 Pa</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    <strong>That completes all 8 units of AP Physics 1.</strong> Rotate back through earlier units to keep everything sharp before exam day — Units 2 and 3 (Force and Energy) carry the most exam weight, so they're worth the most review time if you're short on it.\n  </div>\n\n</div>\n"
};

const UNITS = [
  {
    "id": 1,
    "name": "Kinematics",
    "weight": "10–15%",
    "ready": true
  },
  {
    "id": 2,
    "name": "Force and Translational Dynamics",
    "weight": "18–23%",
    "ready": true
  },
  {
    "id": 3,
    "name": "Work, Energy, and Power",
    "weight": "18–23%",
    "ready": true
  },
  {
    "id": 4,
    "name": "Linear Momentum",
    "weight": "10–15%",
    "ready": true
  },
  {
    "id": 5,
    "name": "Torque and Rotational Dynamics",
    "weight": "10–15%",
    "ready": true
  },
  {
    "id": 6,
    "name": "Energy and Momentum of Rotating Systems",
    "weight": "5–8%",
    "ready": true
  },
  {
    "id": 7,
    "name": "Oscillations",
    "weight": "5–8%",
    "ready": true
  },
  {
    "id": 8,
    "name": "Fluids",
    "weight": "10–15%",
    "ready": true
  }
];

const QUESTIONS = {
  "1": [
    {
      "id": "1-1",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "A person walks 8.0 m east, then 3.0 m west. Find the total distance traveled and the magnitude of the total displacement.",
      "choices": [
        "Distance 5.0 m; displacement 11 m",
        "Distance 5.0 m; displacement 5.0 m",
        "Distance 11 m; displacement 5.0 m",
        "Distance 11 m; displacement 11 m"
      ],
      "correct": 2,
      "explanation": "Distance simply adds path lengths regardless of direction: 8.0 + 3.0 = 11 m. Displacement is the net change in position: 8.0 m east minus 3.0 m west = 5.0 m east. This is the core distinction the whole section is built around — distance never cancels, displacement does."
    },
    {
      "id": "1-2",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "An object starts at position x = −4.0 m and ends at position x = 6.0 m. Find its displacement.",
      "choices": [
        "−2.0 m",
        "2.0 m",
        "−10 m",
        "10 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 10 m. Displacement is the change in position, Δx = x<sub>final</sub> − x<sub>initial</sub>, and it depends only on where the object starts and ends. Here Δx = 6.0 − (−4.0) = 6.0 + 4.0 = +10 m, and the positive sign means the net change is toward +x. The object crosses the origin, so the two parts of the trip (4.0 m to reach 0, then 6.0 m more) add.\n\n(A) is wrong because −2.0 m is the difference of the magnitudes taken in the wrong order (4.0 − 6.0); adding the two coordinates would give +2.0 m, and neither number is the change in position.\n(B) is wrong because 2.0 m results from subtracting the magnitudes (6.0 − 4.0), ignoring that the start is on the negative side of the origin.\n(C) is wrong because −10 m has the right size but the sign is reversed, which would come from computing x<sub>initial</sub> − x<sub>final</sub>."
    },
    {
      "id": "1-3",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "Which of the following quantities is a vector?",
      "choices": [
        "Displacement",
        "Speed",
        "Distance",
        "Time"
      ],
      "correct": 0,
      "explanation": "Correct: (A) Displacement. A vector has both a magnitude and a direction, and displacement is the straight-line change in position from start to finish, so it must state which way (for example +10 m or 10 m east). Scalars have size only.\n\n(B) is wrong because speed is the magnitude of velocity, with no direction attached.\n(C) is wrong because distance is the total path length traveled, which is never negative and has no direction.\n(D) is wrong because time is a scalar; there is no direction to time in mechanics."
    },
    {
      "id": "1-4",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "An object moves from x = 2.0 m to x = 2.0 m, taking a curved path along the way that covers 15 m of ground. Find its displacement and distance.",
      "choices": [
        "Displacement 15 m; distance 15 m",
        "Displacement 0 m; distance 0 m",
        "Displacement 15 m; distance 0 m",
        "Displacement 0 m; distance 15 m"
      ],
      "correct": 3,
      "explanation": "Since the object starts and ends at the exact same position, displacement is exactly zero, no matter how winding the path was. Distance only cares about the path actually traveled, which was 15 m — this is the same round-trip logic that makes average velocity zero for a full lap."
    },
    {
      "id": "1-5",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "Two runners both start at x = 0. Runner A ends at x = +50 m; Runner B ends at x = −50 m. Compare their displacements.",
      "choices": [
        "Cannot be compared without knowing their paths",
        "Different magnitude, same direction",
        "Equal in magnitude, same direction",
        "Equal in magnitude, opposite direction"
      ],
      "correct": 3,
      "explanation": "Correct: (D) Equal in magnitude, opposite direction. Displacement is Δx = x<sub>final</sub> − x<sub>initial</sub>, so Runner A has Δx = +50 − 0 = +50 m and Runner B has Δx = −50 − 0 = −50 m. The sizes are both 50 m, and the opposite signs show that they moved in opposite directions along the axis. Only the endpoints matter for displacement, so the paths taken are irrelevant.\n\n(A) is wrong because displacement depends only on start and end positions, not the path, so the comparison can be made.\n(B) is wrong because the magnitudes are equal (50 m each), not different.\n(C) is wrong because the signs differ; one displacement is positive and the other negative, so they do not point the same way."
    },
    {
      "id": "1-6",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "Is it possible for an object's distance traveled to be less than the magnitude of its displacement?",
      "choices": [
        "Yes, if the object changes direction at least once.",
        "Yes, if the object starts and ends at the same point.",
        "No, distance can't be less than displacement.",
        "Yes, if the object moves in a straight line without reversing."
      ],
      "correct": 2,
      "explanation": "Distance can never be smaller than the magnitude of displacement — the straight-line path (which is what displacement measures) is always the shortest possible route between two points. Distance equals displacement's magnitude only for pure, straight-line, non-reversing motion; any detour or reversal only adds extra distance without adding to displacement."
    },
    {
      "id": "1-7",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "A car travels 6.0 km north, then 8.0 km east. Find the magnitude of its total displacement.",
      "choices": [
        "10 km",
        "7.0 km",
        "14 km",
        "48 km"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 10 km. North and east are perpendicular, so the two legs form the legs of a right triangle and the displacement is the hypotenuse: d = √(6.0² + 8.0²) = √(36 + 64) = √100 = 10 km. Displacement is the straight line from start to end, which is shorter than the 14 km actually driven. This is the 6-8-10 (3-4-5) triangle.\n\n(B) is wrong because 7.0 km is just the average of 6 and 8, which is not a valid way to combine perpendicular vectors.\n(C) is wrong because 14 km is the total distance traveled (6.0 + 8.0), not the displacement.\n(D) is wrong because 48 km multiplies the two legs, which has no meaning here."
    },
    {
      "id": "1-8",
      "topic": "1.1 Position, Displacement, Distance",
      "stem": "An object's position is given as a function of time. What does it mean if the position value is negative at some time t?",
      "choices": [
        "The measurement contains an error.",
        "The object is moving backward at that instant.",
        "The object's speed is negative at that instant.",
        "It's on the negative side of the chosen origin."
      ],
      "correct": 3,
      "explanation": "A negative position simply means the object sits on the negative side of whatever origin was chosen — it says nothing by itself about which direction the object is currently moving. Position, velocity, and their signs are three separate pieces of information that shouldn't be conflated."
    },
    {
      "id": "1-9",
      "topic": "1.2 Velocity and Speed",
      "stem": "A jogger runs 400 m in 100 s, then walks back the same 400 m in 200 s. Find the average speed and average velocity for the entire trip.",
      "choices": [
        "Average speed ≈ 1.33 m/s; average velocity ≈ 1.33 m/s",
        "Average speed ≈ 2.67 m/s; average velocity = 0",
        "Average speed ≈ 2.67 m/s; average velocity ≈ 2.67 m/s",
        "Average speed = 0; average velocity = 0"
      ],
      "correct": 1,
      "explanation": "Average speed uses total distance (800 m) over total time (300 s): 800/300 ≈ 2.67 m/s. Average velocity uses total displacement, which is zero since the jogger returns to the start — giving average velocity of exactly 0 m/s, regardless of how far they actually ran."
    },
    {
      "id": "1-10",
      "topic": "1.2 Velocity and Speed",
      "stem": "An object's position changes from 3.0 m to 15 m over a time interval of 4.0 s. Find its average velocity.",
      "choices": [
        "3.75 m/s",
        "3.0 m/s",
        "4.5 m/s",
        "12 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 3.0 m/s. Average velocity is displacement divided by elapsed time, v<sub>avg</sub> = Δx/Δt. The displacement is 15 − 3.0 = 12 m, so v<sub>avg</sub> = 12 m ÷ 4.0 s = 3.0 m/s. The stem gives two positions, so the first step is to subtract them to get Δx.\n\n(A) is wrong because 3.75 m/s comes from 15 ÷ 4.0, using the final position instead of the change in position.\n(C) is wrong because 4.5 m/s would come from an arithmetic slip such as 18/4.0, adding the positions instead of subtracting.\n(D) is wrong because 12 m/s forgets to divide by the time and reports the displacement in meters as if it were a velocity."
    },
    {
      "id": "1-11",
      "topic": "1.2 Velocity and Speed",
      "stem": "On a position-time graph, what does a flat, horizontal segment indicate about the object's motion?",
      "choices": [
        "The object is at rest.",
        "The object is moving at constant, nonzero velocity.",
        "The object is accelerating.",
        "The object has reached its maximum speed."
      ],
      "correct": 0,
      "explanation": "Correct: (A) The object is at rest. On a position-time graph the slope equals velocity (rise Δx over run Δt). A flat horizontal segment has zero slope, so Δx = 0 while time keeps passing, which means the position is not changing and the velocity is zero.\n\n(B) is wrong because constant nonzero velocity would appear as a straight line that is tilted, not horizontal.\n(C) is wrong because acceleration would show as a curved line on an x-t graph, since the slope itself would be changing.\n(D) is wrong because maximum speed would correspond to the steepest slope, the opposite of a flat segment."
    },
    {
      "id": "1-12",
      "topic": "1.2 Velocity and Speed",
      "stem": "Which of the following can be true for an object over some time interval: average velocity is zero, but average speed is not zero?",
      "choices": [
        "Only if the object moves at constant speed the entire time.",
        "Only if the object never changes direction.",
        "Yes — whenever the object returns to its start.",
        "Never — if one is zero, so is the other."
      ],
      "correct": 2,
      "explanation": "This is possible any time an object's net displacement is zero but it covered real distance getting there and back — a round trip is the simplest example. Average speed (built from total distance) stays positive in that case, while average velocity (built from displacement) comes out to exactly zero."
    },
    {
      "id": "1-13",
      "topic": "1.2 Velocity and Speed",
      "stem": "An object moves in the negative x-direction at a constant rate. Describe its velocity.",
      "choices": [
        "Zero",
        "Negative and increasing in magnitude",
        "Positive and increasing",
        "Negative and constant"
      ],
      "correct": 3,
      "explanation": "Correct: (D) Negative and constant. Velocity carries a sign that gives direction along the axis, so motion toward −x means negative velocity. A \"constant rate\" means the speed does not change, so the velocity stays the same value (for example −3 m/s at every instant) and the acceleration is zero.\n\n(A) is wrong because the object is moving, so its velocity cannot be zero.\n(B) is wrong because a velocity that grows in magnitude would mean the object is accelerating, which contradicts the constant rate.\n(C) is wrong because positive velocity means motion toward +x, the opposite of what the stem states, and nothing is increasing."
    },
    {
      "id": "1-14",
      "topic": "1.2 Velocity and Speed",
      "stem": "A car covers the first half of a fixed distance at 40 km/hr and the second half at 60 km/hr. Is the average speed for the whole trip exactly 50 km/hr?",
      "choices": [
        "No, the average speed is actually greater than 50 km/hr.",
        "Yes, since 50 is the simple average of 40 and 60.",
        "Yes, but only if the distances are unequal.",
        "No, the average speed is less than 50 km/hr."
      ],
      "correct": 3,
      "explanation": "Simply averaging the two speeds is a common trap — average speed is total distance over total time, not an average of rates. Since the car spends MORE time covering the same distance at the slower 40 km/hr than at 60 km/hr, that slower speed gets weighted more heavily, pulling the true average speed below the naive 50 km/hr midpoint."
    },
    {
      "id": "1-15",
      "topic": "1.2 Velocity and Speed",
      "stem": "An object travels 20 m in the positive direction, then 20 m in the negative direction, all within 8.0 s total. Find the average velocity.",
      "choices": [
        "0 m/s",
        "10 m/s",
        "5.0 m/s",
        "2.5 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0 m/s. Average velocity is net displacement divided by time, not distance divided by time. The object goes +20 m and then −20 m, so Δx = 20 + (−20) = 0 and v<sub>avg</sub> = 0 ÷ 8.0 s = 0 m/s. It ends exactly where it started, so the net change in position is zero even though it traveled 40 m.\n\n(B) is wrong because 10 m/s does not follow from the data (even the full 40 m over 8.0 s is only 5.0 m/s), and it ignores the cancellation of the opposite displacements.\n(C) is wrong because 5.0 m/s is the average speed (40 m ÷ 8.0 s), which uses total distance rather than displacement.\n(D) is wrong because 2.5 m/s equals 20 m ÷ 8.0 s, using only one leg of the trip."
    },
    {
      "id": "1-16",
      "topic": "1.2 Velocity and Speed",
      "stem": "What physical quantity does the slope of a position-vs-time graph represent at any given instant?",
      "choices": [
        "Instantaneous velocity",
        "Displacement",
        "Average speed over the whole graph",
        "Acceleration"
      ],
      "correct": 0,
      "explanation": "Correct: (A) Instantaneous velocity. Velocity is the rate of change of position, v = dx/dt. On a position-vs-time graph the vertical axis is x and the horizontal axis is t, so the slope (rise over run, Δx/Δt) of the tangent line at a point is the velocity at that instant.\n\n(B) is wrong because displacement is a change in the vertical value (a difference of two heights), not a slope.\n(C) is wrong because the slope at a single instant is local; average velocity over the whole graph would use the overall slope between the endpoints, and it would be velocity, not speed.\n(D) is wrong because acceleration is the slope of a velocity-time graph, or the curvature of the x-t graph, not its slope."
    },
    {
      "id": "1-17",
      "topic": "1.2 Velocity and Speed",
      "stem": "A swimmer swims 50 m down a pool in 40 s, then immediately swims back 50 m in 45 s. Find the average speed for the full swim.",
      "choices": [
        "≈ 2.35 m/s",
        "1.25 m/s",
        "≈ 1.18 m/s",
        "0 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) ≈ 1.18 m/s. Average speed is total distance divided by total time, and distance counts both lengths: 50 + 50 = 100 m. The total time is 40 + 45 = 85 s, so speed = 100 ÷ 85 ≈ 1.18 m/s. Speed is a scalar, so returning to the start does not cancel anything.\n\n(A) is wrong because 2.35 m/s roughly doubles the right value, as if the distance were 200 m.\n(B) is wrong because 1.25 m/s is just the speed of the first length (50 ÷ 40), ignoring the slower return.\n(D) is wrong because 0 m/s is the average velocity, since the net displacement is zero, but the question asks for average speed."
    },
    {
      "id": "1-18",
      "topic": "1.3 Acceleration",
      "stem": "A car's velocity changes from 12 m/s to 20 m/s over 4.0 s. Find its average acceleration.",
      "choices": [
        "32 m/s²",
        "8.0 m/s²",
        "3.0 m/s²",
        "2.0 m/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 2.0 m/s². Average acceleration is the change in velocity divided by the time interval, a<sub>avg</sub> = Δv/Δt. Δv = 20 − 12 = 8.0 m/s, so a = 8.0 m/s ÷ 4.0 s = 2.0 m/s². The units m/s per s combine to m/s².\n\n(A) is wrong because 32 is the product 8.0 × 4.0, multiplying instead of dividing.\n(B) is wrong because 8.0 m/s² is the change in velocity itself, never divided by the time.\n(C) is wrong because 3.0 m/s² would come from a slip such as 12 ÷ 4.0, using the initial velocity rather than the change."
    },
    {
      "id": "1-19",
      "topic": "1.3 Acceleration",
      "stem": "An object moving in the positive direction has a negative acceleration. What is happening to its speed?",
      "choices": [
        "Cannot be determined",
        "Decreasing",
        "Increasing",
        "Staying constant"
      ],
      "correct": 1,
      "explanation": "Correct: (B) Decreasing. Speed increases when velocity and acceleration point the same way and decreases when they point opposite ways. The object moves in the positive direction (positive velocity) while the acceleration is negative, so the acceleration opposes the motion and the object slows down.\n\n(A) is wrong because the signs are given, which is all that is needed to decide.\n(C) is wrong because speeding up would require the acceleration to be positive here, the same sign as velocity.\n(D) is wrong because constant speed requires zero acceleration along the motion, and this acceleration is nonzero."
    },
    {
      "id": "1-20",
      "topic": "1.3 Acceleration",
      "stem": "An object moving in the negative direction has a negative acceleration. What is happening to its speed?",
      "choices": [
        "Cannot be determined",
        "Decreasing",
        "Staying constant",
        "Increasing"
      ],
      "correct": 3,
      "explanation": "Correct: (D) Increasing. When velocity and acceleration have the same sign, the acceleration pushes the object further in the direction it is already going, so the speed grows. Here both are negative, so the object moves faster toward −x (for example from −2 m/s to −5 m/s, which has a larger magnitude). A negative acceleration does not by itself mean slowing down.\n\n(A) is wrong because the signs of both quantities are provided, which settles the question.\n(B) is wrong because that would require opposite signs, which is the common mistake of treating negative acceleration as always meaning deceleration.\n(C) is wrong because constant speed needs zero acceleration, and the acceleration here is nonzero."
    },
    {
      "id": "1-21",
      "topic": "1.3 Acceleration",
      "stem": "Can an object have a nonzero acceleration while its velocity is momentarily zero?",
      "choices": [
        "Yes — the peak of a ball thrown straight up is a classic example.",
        "Only if the object is also changing direction at that instant, as at the top of a throw.",
        "No, if velocity is zero, acceleration must also be zero at that same instant.",
        "No, this would violate the definition of acceleration as the rate of change of velocity."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Yes, the peak of a ball thrown straight up is a classic example. Acceleration is the rate of change of velocity, and velocity and acceleration are independent: a velocity of zero at one instant says nothing about how it is changing. At the top of the flight v = 0, but gravity still gives a = −9.8 m/s² (about 10 m/s²), which is why the ball immediately starts moving downward.\n\n(B) is wrong because it adds a false requirement; the acceleration does not depend on a direction change, and the ball's acceleration is the same throughout the entire flight.\n(C) is wrong because zero velocity does not imply zero acceleration; that would mean the ball hangs in the air at the peak.\n(D) is wrong because the definition of acceleration refers to how v changes, so it is perfectly consistent for v to be zero at an instant while changing."
    },
    {
      "id": "1-22",
      "topic": "1.3 Acceleration",
      "stem": "A ball moving to the right slows down, stops, and then speeds up moving to the left. Throughout this entire process, how does its acceleration behave?",
      "choices": [
        "It changes direction partway through, matching the ball's reversal.",
        "It is zero throughout, since the ball momentarily stops.",
        "It cannot be determined without more information.",
        "It stays in the same direction throughout, never changing."
      ],
      "correct": 3,
      "explanation": "This entire scenario — slowing while moving right, then speeding up while moving left — is exactly what happens under a single, constant acceleration pointing left the whole time (think of a ball rolling up and back down a ramp, or thrown up and falling back down). The acceleration never needs to reverse direction to produce this motion."
    },
    {
      "id": "1-23",
      "topic": "1.3 Acceleration",
      "stem": "An object's velocity increases from 5.0 m/s to 5.0 m/s over a 10 s interval, after first dropping to 2.0 m/s at the 5 s mark. What is its average acceleration over the full 10 s?",
      "choices": [
        "0 m/s²",
        "0.3 m/s²",
        "Cannot be determined",
        "0.6 m/s²"
      ],
      "correct": 0,
      "explanation": "Average acceleration only depends on the overall change in velocity across the full interval: Δv = v<sub>final</sub> − v<sub>initial</sub> = 5.0 − 5.0 = 0, regardless of what happened in between. Average acceleration is 0/10 = 0 m/s², even though the object's velocity clearly wasn't constant throughout."
    },
    {
      "id": "1-24",
      "topic": "1.3 Acceleration",
      "stem": "A rocket accelerates from rest to 100 m/s in 5.0 s. Find its average acceleration.",
      "choices": [
        "20 m/s²",
        "100 m/s²",
        "5.0 m/s²",
        "500 m/s²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 20 m/s². Average acceleration is Δv/Δt. Starting from rest, the velocity changes from 0 to 100 m/s, so Δv = 100 m/s, and a = 100 m/s ÷ 5.0 s = 20 m/s².\n\n(B) is wrong because 100 m/s² is the velocity change with no division by time.\n(C) is wrong because 5.0 is just the time interval Δt reported as if it were an acceleration; it does not match Δv/Δt = 100/5.0.\n(D) is wrong because 500 m/s² multiplies velocity by time instead of dividing."
    },
    {
      "id": "1-25",
      "topic": "1.3 Acceleration",
      "stem": "Which statement correctly distinguishes velocity from acceleration?",
      "choices": [
        "Velocity and acceleration are just two different names for the same physical quantity.",
        "Acceleration can only be caused by gravity.",
        "Velocity is the rate of change of position; acceleration is that of velocity.",
        "Velocity is a vector; acceleration is always a scalar."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Velocity is the rate of change of position; acceleration is the rate of change of velocity. Each quantity is a time derivative one step further along: v = Δx/Δt and a = Δv/Δt. The units show it too, m/s for velocity and m/s² for acceleration.\n\n(A) is wrong because they are different quantities with different units; an object at constant velocity has zero acceleration.\n(B) is wrong because any net force (friction, tension, a push, electric force) produces acceleration, not just gravity.\n(D) is wrong because acceleration is also a vector, with a direction that matters (for example, whether it opposes the velocity)."
    },
    {
      "id": "1-26",
      "topic": "1.3 Acceleration",
      "stem": "A cyclist's velocity is constant at 8.0 m/s for a full 10 s interval. Find the average acceleration during that interval.",
      "choices": [
        "80 m/s²",
        "0 m/s²",
        "0.8 m/s²",
        "8.0 m/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0 m/s². Average acceleration is a<sub>avg</sub> = Δv/Δt. The velocity is constant at 8.0 m/s, so v<sub>final</sub> − v<sub>initial</sub> = 8.0 − 8.0 = 0, and a = 0 ÷ 10 s = 0 m/s². Constant velocity always means zero acceleration, no matter how large the velocity is.\n\n(A) is wrong because 80 m/s² is 8.0 × 10, which multiplies velocity by time and gives a distance-like number.\n(C) is wrong because 0.8 m/s² is 8.0 ÷ 10, dividing the velocity itself by the time instead of the change in velocity.\n(D) is wrong because 8.0 m/s² confuses the speed with the acceleration."
    },
    {
      "id": "1-27",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph shows a straight line with a constant positive slope. What does this indicate about the object's acceleration?",
      "choices": [
        "Negative and constant",
        "Positive and constant",
        "Positive and increasing",
        "Zero and constant"
      ],
      "correct": 1,
      "explanation": "Correct: (B) Positive and constant. On a velocity-time graph the slope is Δv/Δt, which is the acceleration. A straight line has the same slope everywhere, so the acceleration is constant, and an upward (positive) slope means it is positive.\n\n(A) is wrong because negative acceleration would show as a line sloping downward.\n(C) is wrong because an increasing acceleration would require a curve bending upward, since the slope itself would be changing.\n(D) is wrong because zero acceleration would be a flat, horizontal line, not a tilted one."
    },
    {
      "id": "1-28",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph shows velocity constant at 6.0 m/s for 5.0 s. Find the displacement over that interval.",
      "choices": [
        "6.0 m",
        "1.2 m",
        "30 m",
        "11 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 30 m. On a velocity-time graph the displacement equals the area between the curve and the time axis. A constant velocity is a horizontal line, so the area is a rectangle: Δx = v·t = (6.0 m/s)(5.0 s) = 30 m. The units work out, since m/s × s = m.\n\n(A) is wrong because 6.0 m is just the velocity number reported as if it were a distance.\n(B) is wrong because 1.2 m comes from dividing 6.0 by 5.0, which gives a quantity with units of m/s², not a displacement.\n(D) is wrong because 11 m comes from adding 6.0 and 5.0, which mixes units and has no physical meaning."
    },
    {
      "id": "1-29",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph shows velocity decreasing linearly from 12 m/s to 0 m/s over 6.0 s. Find the displacement.",
      "choices": [
        "2.0 m",
        "18 m",
        "36 m",
        "72 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 36 m. Displacement is the area under the v-t graph. Velocity falls in a straight line from 12 m/s to 0 over 6.0 s, so the region under it is a right triangle with base 6.0 s and height 12 m/s. Area = ½ × base × height = ½(6.0)(12) = 36 m. Equivalently, the average velocity is (12 + 0)/2 = 6 m/s and 6 m/s × 6.0 s = 36 m.\n\n(A) is wrong because 2.0 is the slope magnitude (12 ÷ 6.0), the acceleration, not an area.\n(B) is wrong because 18 m would be the area with an extra factor of ½ applied (½ × 36), halving it twice.\n(D) is wrong because 72 m is the full rectangle 12 × 6.0, forgetting the ½ for the triangle."
    },
    {
      "id": "1-30",
      "topic": "1.4 Motion Graphs",
      "stem": "An a-t graph shows a constant acceleration of 3.0 m/s² for 4.0 s. Find the change in velocity over that time.",
      "choices": [
        "7.0 m/s",
        "0.75 m/s",
        "3.0 m/s",
        "12 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 12 m/s. On an acceleration-time graph the area under the curve equals the change in velocity, since a = Δv/Δt means Δv = a·Δt. A constant acceleration is a rectangle: Δv = (3.0 m/s²)(4.0 s) = 12 m/s.\n\n(A) is wrong because 7.0 comes from adding 3.0 and 4.0, which mixes quantities with different units.\n(B) is wrong because 0.75 is 3.0 ÷ 4.0, dividing instead of multiplying.\n(C) is wrong because 3.0 is the acceleration itself, with the wrong units for a velocity change and no accounting for the 4.0 s."
    },
    {
      "id": "1-31",
      "topic": "1.4 Motion Graphs",
      "stem": "On a position-time graph, how can you tell that an object is accelerating?",
      "choices": [
        "The graph passes through the origin.",
        "The graph has a positive y-intercept.",
        "The slope keeps changing over time.",
        "The graph is a straight line."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The slope keeps changing over time. The slope of an x-t graph is the velocity, so if the slope changes, the velocity changes, and a changing velocity is acceleration. Visually this means a curved line.\n\n(A) is wrong because passing through the origin only says the object started at x = 0 at t = 0, and a straight line through the origin is constant velocity.\n(B) is wrong because a positive y-intercept only gives the starting position, which has nothing to do with acceleration.\n(D) is wrong because a straight line has constant slope, so constant velocity and zero acceleration."
    },
    {
      "id": "1-32",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph shows velocity that is negative and becoming less negative (moving toward zero) over time, in a straight line. What is the sign of the acceleration?",
      "choices": [
        "Cannot be determined from a v-t graph",
        "Negative",
        "Zero",
        "Positive"
      ],
      "correct": 3,
      "explanation": "Since velocity is increasing over time (moving from a more negative value toward zero, i.e., increasing), and the slope of a v-t graph gives acceleration, an increasing straight-line trend on a v-t graph means a positive slope, hence positive acceleration — even though the velocity itself stays negative throughout this interval."
    },
    {
      "id": "1-33",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph consists of a straight line from (0s, 4 m/s) to (6s, 16 m/s). Find the object's acceleration and its displacement over those 6 seconds.",
      "choices": [
        "a = 2.0 m/s²; Δx = 96 m",
        "a = 12 m/s²; Δx = 60 m",
        "a = 2.0 m/s²; Δx = 60 m",
        "a = 2.0 m/s²; Δx = 24 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) a = 2.0 m/s²; Δx = 60 m. The acceleration is the slope of the v-t line: a = (16 − 4)/(6 − 0) = 12/6 = 2.0 m/s². The displacement is the area under the line, which is a trapezoid (or equivalently average velocity times time): Δx = ½(4 + 16)(6) = 60 m. Check with the kinematic equation: 4(6) + ½(2)(36) = 24 + 36 = 60 m.\n\n(A) is wrong because 96 m is 16 × 6, treating the final velocity as if it held for the whole interval.\n(B) is wrong because a = 12 m/s² is the total change in velocity, not divided by the 6 seconds.\n(D) is wrong because 24 m is 4 × 6, using only the initial velocity and leaving out the extra area from the acceleration."
    },
    {
      "id": "1-34",
      "topic": "1.4 Motion Graphs",
      "stem": "Which type of graph would you use to find an object's displacement over a given time interval, without needing any equations?",
      "choices": [
        "Velocity-time graph, by finding the area under the curve",
        "None of these graphs can give displacement directly, only speed and acceleration.",
        "Acceleration-time graph, by reading the slope of the curve at any instant",
        "Position-time graph, by reading a single value from the vertical axis"
      ],
      "correct": 0,
      "explanation": "Correct: (A) Velocity-time graph, by finding the area under the curve. Since Δx = ∫v dt, the area between a v-t curve and the time axis equals displacement over that interval. Rectangles, triangles, and trapezoids make this quick without any kinematic equation.\n\n(B) is wrong because displacement can be obtained directly from the area on a v-t graph.\n(C) is wrong because the slope of an a-t graph is the rate of change of acceleration (jerk), and the area under an a-t graph gives a change in velocity, not displacement.\n(D) is wrong because a single position reading gives a position, not a displacement; you would need two readings and a subtraction."
    },
    {
      "id": "1-35",
      "topic": "1.4 Motion Graphs",
      "stem": "An x-t graph is a straight, horizontal line for the first 3 s, then a straight line with positive slope for the next 3 s. Describe the object's motion during each phase.",
      "choices": [
        "Moving at constant velocity, then at rest",
        "Accelerating, then at rest",
        "At rest, then constant positive velocity",
        "At rest the entire time"
      ],
      "correct": 2,
      "explanation": "Correct: (C) At rest, then constant positive velocity. The slope of an x-t graph is velocity. A horizontal line has zero slope, so the object is at rest for the first 3 s. A straight line with positive slope has a constant, positive slope, so the object then moves in the +x direction at a steady velocity.\n\n(A) is wrong because it reverses the order of the two phases.\n(B) is wrong because a straight line (not a curve) means constant velocity, not acceleration.\n(D) is wrong because the second segment has nonzero slope, so the object does move after 3 s."
    },
    {
      "id": "1-36",
      "topic": "1.4 Motion Graphs",
      "stem": "A v-t graph shows velocity going from +5 m/s at t=0 down through zero to −5 m/s at t=4s, in a straight line. Find the total displacement over those 4 seconds.",
      "choices": [
        "10 m",
        "−10 m",
        "0 m",
        "20 m"
      ],
      "correct": 2,
      "explanation": "This forms two triangular areas of equal size but opposite sign — one above the time axis (positive displacement while v>0) and one below it (negative displacement while v<0). Since the line is symmetric, these two areas exactly cancel, giving a total displacement of 0 m — even though the object was moving the entire time."
    },
    {
      "id": "1-37",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object starts at rest and accelerates at 4.0 m/s² for 5.0 s. Find its final velocity.",
      "choices": [
        "9.0 m/s",
        "40 m/s",
        "0.8 m/s",
        "20 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 20 m/s. Constant acceleration from rest uses v = v<sub>0</sub> + at. With v<sub>0</sub> = 0, v = (4.0 m/s²)(5.0 s) = 20 m/s. Each second the velocity grows by 4.0 m/s, and after 5 s it has gained 20 m/s.\n\n(A) is wrong because 9.0 comes from adding 4.0 and 5.0, which mixes unlike units.\n(B) is wrong because 40 m/s would result from doubling the correct answer, such as using 2at.\n(C) is wrong because 0.8 is 4.0 ÷ 5.0, dividing rather than multiplying."
    },
    {
      "id": "1-38",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object starts at rest and accelerates at 3.0 m/s² for 4.0 s. Find the distance it travels.",
      "choices": [
        "24 m",
        "6.0 m",
        "48 m",
        "12 m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 24 m. From rest the displacement under constant acceleration is Δx = v<sub>0</sub>t + ½at², and with v<sub>0</sub> = 0 this is ½(3.0 m/s²)(4.0 s)² = ½(3.0)(16) = 24 m. Notice that time is squared, so the distance grows faster than the speed.\n\n(B) is wrong because 6.0 m is ½at with the time not squared.\n(C) is wrong because 48 m drops the ½ factor (at² = 3.0 × 16).\n(D) is wrong because 12 m is the final velocity (at = 12 m/s), reported as though it were a distance."
    },
    {
      "id": "1-39",
      "topic": "1.5 Kinematic Equations",
      "stem": "A car traveling at 15 m/s accelerates uniformly at 2.0 m/s² over a distance of 100 m. Find its final velocity.",
      "choices": [
        "10 m/s",
        "35 m/s",
        "25 m/s",
        "19.4 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 25 m/s. The problem gives v<sub>0</sub>, a, and Δx and does not mention time, so use v² = v<sub>0</sub>² + 2aΔx. Then v² = 15² + 2(2.0)(100) = 225 + 400 = 625, and v = √625 = 25 m/s. The final speed is larger than the initial, as expected for a positive acceleration.\n\n(A) is wrong because 10 m/s is lower than the starting speed, which is impossible when the car speeds up.\n(B) is wrong because 35 m/s results from adding 15 and 20 without squaring, which does not follow from the equation.\n(D) is wrong because 19.4 m/s comes from an arithmetic slip in the squares and does not satisfy v² = 625."
    },
    {
      "id": "1-40",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object's velocity increases from 6.0 m/s to 18 m/s while covering 96 m. Find its acceleration.",
      "choices": [
        "2.0 m/s²",
        "3.0 m/s²",
        "1.0 m/s²",
        "1.5 m/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 1.5 m/s². The problem gives v<sub>0</sub>, v, and Δx but no time, so use v² = v<sub>0</sub>² + 2aΔx. Then 18² = 6.0² + 2a(96), so 324 = 36 + 192a, which gives a = 288/192 = 1.5 m/s². Check: average velocity is 12 m/s, so t = 96/12 = 8.0 s, and a = (18 − 6.0)/8.0 = 1.5 m/s².\n\n(A) is wrong because 2.0 m/s² would give v² = 36 + 384 = 420, not 324.\n(B) is wrong because 3.0 m/s² comes from forgetting the factor of 2 in 2aΔx in the other direction, leaving a = 288/96.\n(C) is wrong because 1.0 m/s² does not satisfy the equation, as 36 + 192 = 228, not 324."
    },
    {
      "id": "1-41",
      "topic": "1.5 Kinematic Equations",
      "stem": "A ball moving at 10 m/s decelerates uniformly and stops after traveling 25 m. Find the time it took to stop.",
      "choices": [
        "5.0 s",
        "0.4 s",
        "12.5 s",
        "2.5 s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 5.0 s. The ball slows uniformly from 10 m/s to 0, so its average velocity is (10 + 0)/2 = 5.0 m/s. Using Δx = ½(v<sub>0</sub> + v)t gives 25 = ½(10)t = 5t, so t = 5.0 s. This avoids needing the acceleration, which was not asked for.\n\n(B) is wrong because 0.4 s is 10 ÷ 25, an inverted ratio with the wrong units.\n(C) is wrong because 12.5 s is 25 ÷ 2, using ½ of the distance and ignoring the speed.\n(D) is wrong because 2.5 s is 25 ÷ 10, which would be the time at the constant initial speed; the ball is slowing, so it takes longer."
    },
    {
      "id": "1-42",
      "topic": "1.5 Kinematic Equations",
      "stem": "Which of the four kinematic equations should be used to find final velocity when you're given initial velocity, acceleration, and time, but NOT displacement?",
      "choices": [
        "v = v0 + at",
        "v² = v0² + 2aΔx",
        "Δx = v0t + ½at²",
        "Δx = ½(v0+v)t"
      ],
      "correct": 0,
      "explanation": "Correct: (A) v = v<sub>0</sub> + at. Choosing a kinematic equation means listing the known and unknown variables and picking the one that contains exactly those and leaves out the missing one. Here v<sub>0</sub>, a, and t are known, v is unknown, and Δx is absent, and v = v<sub>0</sub> + at contains precisely v<sub>0</sub>, a, t, and v.\n\n(B) is wrong because v² = v<sub>0</sub>² + 2aΔx requires the displacement, and it has no time in it.\n(C) is wrong because Δx = v<sub>0</sub>t + ½at² has Δx as its unknown and would give displacement, not final velocity.\n(D) is wrong because Δx = ½(v<sub>0</sub> + v)t contains Δx and no acceleration, so it cannot use the given a and still excludes displacement."
    },
    {
      "id": "1-43",
      "topic": "1.5 Kinematic Equations",
      "stem": "A plane starts at rest and must reach a takeoff speed of 70 m/s after accelerating uniformly over a 1400 m runway. Find the required acceleration.",
      "choices": [
        "3.5 m/s²",
        "50 m/s²",
        "1.75 m/s²",
        "0.5 m/s²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 1.75 m/s². The plane starts from rest, the final speed is 70 m/s, the distance is 1400 m, and time is not given, so use v² = v<sub>0</sub>² + 2aΔx. Then 70² = 0 + 2a(1400), so 4900 = 2800a, and a = 4900/2800 = 1.75 m/s².\n\n(A) is wrong because 3.5 m/s² is 4900/1400, which drops the factor of 2 in 2aΔx.\n(B) is wrong because 50 m/s² has no basis in the equation; it is far too large for a plane (about 5 g).\n(D) is wrong because 0.5 m/s² does not reproduce the 4900 m²/s² needed, since 2(0.5)(1400) = 1400."
    },
    {
      "id": "1-44",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object moves with constant acceleration. Given only v0, v, and Δx, which equation lets you find the elapsed time without first solving for acceleration?",
      "choices": [
        "v = v0 + at",
        "Δx = v0t + ½at²",
        "Δx = ½(v0+v)t",
        "v² = v0² + 2aΔx"
      ],
      "correct": 2,
      "explanation": "Correct: (C) Δx = ½(v<sub>0</sub> + v)t. The givens are v<sub>0</sub>, v, and Δx, and the unknown is t, with a neither given nor wanted. The only kinematic equation without acceleration is Δx = ½(v<sub>0</sub> + v)t, which says displacement equals average velocity times time. Solving, t = 2Δx/(v<sub>0</sub> + v).\n\n(A) is wrong because v = v<sub>0</sub> + at contains a, which is not given.\n(B) is wrong because Δx = v<sub>0</sub>t + ½at² also contains a, and it would be quadratic in t.\n(D) is wrong because v² = v<sub>0</sub>² + 2aΔx has no time in it at all, so it could find a but not t directly."
    },
    {
      "id": "1-45",
      "topic": "1.5 Kinematic Equations",
      "stem": "A car moving at 20 m/s brakes at a constant −4.0 m/s². Find how far it travels before stopping.",
      "choices": [
        "100 m",
        "25 m",
        "80 m",
        "50 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 50 m. The car ends at rest, so v = 0, with v<sub>0</sub> = 20 m/s and a = −4.0 m/s². No time is given, so use v² = v<sub>0</sub>² + 2aΔx: 0 = 400 + 2(−4.0)Δx = 400 − 8.0Δx, so Δx = 400/8.0 = 50 m. The negative acceleration matches the car slowing down.\n\n(A) is wrong because 100 m is 400/4.0, which drops the factor of 2.\n(B) is wrong because 25 m is half the correct value, as if the 2 were put in the wrong place (400/16).\n(C) is wrong because 80 m is 20 × 4.0, multiplying the speed by the deceleration, which has no physical meaning."
    },
    {
      "id": "1-46",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object undergoes two separate phases of motion: first accelerating from rest at 2.0 m/s² for 3.0 s, then continuing at whatever velocity it reached, at constant speed, for another 4.0 s. Find the total distance covered.",
      "choices": [
        "42 m",
        "9.0 m",
        "24 m",
        "33 m"
      ],
      "correct": 3,
      "explanation": "Phase 1: Δx = ½(2.0)(3.0)² = 9.0 m, reaching v = (2.0)(3.0) = 6.0 m/s. Phase 2 (constant velocity): Δx = (6.0)(4.0) = 24 m. Total: 9.0 + 24 = 33 m — this only works by splitting the motion into its two separate constant-acceleration phases, exactly as the trap box in 1.5 warns."
    },
    {
      "id": "1-47",
      "topic": "1.5 Kinematic Equations",
      "stem": "An object undergoes straight-line motion with constant acceleration: v0 = 8.0 m/s, a = −2.0 m/s², and t = 3.0 s. Find its displacement.",
      "choices": [
        "24 m",
        "6.0 m",
        "15 m",
        "9.0 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 15 m. With v<sub>0</sub>, a, and t known, use Δx = v<sub>0</sub>t + ½at². Then Δx = (8.0)(3.0) + ½(−2.0)(3.0)² = 24 − 9.0 = 15 m. The negative acceleration reduces the displacement below the 24 m it would have been at constant speed.\n\n(A) is wrong because 24 m is v<sub>0</sub>t alone, ignoring the acceleration.\n(B) is wrong because 6.0 m comes from dropping the ½ and subtracting 18 (24 − 18).\n(D) is wrong because 9.0 m is the ½at² term by itself, with the sign dropped."
    },
    {
      "id": "1-48",
      "topic": "1.5 Kinematic Equations",
      "stem": "Two objects start from rest at the same point and accelerate uniformly, Object A at twice the acceleration of Object B. After the same amount of time, compare their displacements.",
      "choices": [
        "A has traveled four times as far as B.",
        "A has traveled the same distance as B.",
        "A has traveled twice as far as B.",
        "A has traveled half as far as B."
      ],
      "correct": 2,
      "explanation": "Correct: (C) A has traveled twice as far as B. Starting from rest with constant acceleration, the displacement is Δx = ½at², so for a fixed elapsed time t the displacement is directly proportional to the acceleration. The stem gives a<sub>A</sub> = 2a<sub>B</sub> and the same time for both, so Δx<sub>A</sub> = ½(2a<sub>B</sub>)t² = 2 × (½a<sub>B</sub>t²) = 2Δx<sub>B</sub>. The t² factor is identical for both objects and cancels in the ratio, leaving only the factor of 2 from the accelerations.\n\n(A) is wrong because it claims a factor of four, and four would arise only if the time were doubled, since displacement grows with t², whereas here the time is equal and only the acceleration doubles.\n(B) is wrong because it claims equal distances, which would require equal accelerations; A accelerates twice as hard over the same time, so it must cover more ground.\n(D) is wrong because it claims A goes half as far, but a larger acceleration gives a larger speed at every moment and therefore a larger displacement, not a smaller one."
    },
    {
      "id": "1-49",
      "topic": "1.6 Free Fall",
      "stem": "A rock is dropped from rest and falls for 3.0 s. Find its velocity just before hitting the ground.",
      "choices": [
        "19.6 m/s",
        "9.8 m/s",
        "44.1 m/s",
        "29.4 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 29.4 m/s. A dropped rock starts with v<sub>0</sub> = 0 and gains speed at g = 9.8 m/s² downward, so v = v<sub>0</sub> + gt = (9.8 m/s²)(3.0 s) = 29.4 m/s. Each second adds 9.8 m/s to the speed.\n\n(A) is wrong because 19.6 m/s is the speed after only 2.0 s.\n(B) is wrong because 9.8 m/s is the speed after 1.0 s, which is g itself.\n(C) is wrong because 44.1 m is the distance fallen in 3.0 s (½gt²), and it has the wrong units for a velocity."
    },
    {
      "id": "1-50",
      "topic": "1.6 Free Fall",
      "stem": "A rock is dropped from rest and falls for 3.0 s. Find the distance it falls.",
      "choices": [
        "88.2 m",
        "14.7 m",
        "44.1 m",
        "29.4 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 44.1 m. From rest, the fall distance is Δy = ½gt² = ½(9.8 m/s²)(3.0 s)² = ½(9.8)(9.0) = 44.1 m. The distance depends on t², so it grows faster each second.\n\n(A) is wrong because 88.2 m drops the ½ (gt² = 88.2).\n(B) is wrong because 14.7 m is ½gt with t not squared.\n(D) is wrong because 29.4 is the final speed in m/s (gt), not the distance."
    },
    {
      "id": "1-51",
      "topic": "1.6 Free Fall",
      "stem": "A ball is thrown straight up with initial speed 20 m/s. Find its velocity 1.0 s later.",
      "choices": [
        "20 m/s",
        "29.8 m/s",
        "10.2 m/s",
        "9.8 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 10.2 m/s. Taking up as positive, the ball has v<sub>0</sub> = +20 m/s and gravity gives a = −9.8 m/s². After 1.0 s, v = v<sub>0</sub> + at = 20 + (−9.8)(1.0) = 10.2 m/s. The positive sign means it is still rising, but slower, since gravity removes 9.8 m/s of upward speed every second.\n\n(A) is wrong because 20 m/s ignores gravity, as if the ball moved at constant speed.\n(B) is wrong because 29.8 m/s adds 9.8 instead of subtracting it, which would make the ball speed up while rising.\n(D) is wrong because 9.8 m/s is the size of g itself (or the amount lost), not the velocity remaining."
    },
    {
      "id": "1-52",
      "topic": "1.6 Free Fall",
      "stem": "A ball is thrown straight up and returns to its starting height 4.0 s later. Find its initial speed.",
      "choices": [
        "9.8 m/s",
        "39.2 m/s",
        "19.6 m/s",
        "4.9 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 19.6 m/s. The ball returns to its starting height, so the motion is symmetric: it takes half the total time, 2.0 s, to rise to the peak where v = 0. Then v = v<sub>0</sub> + at gives 0 = v<sub>0</sub> − (9.8)(2.0), so v<sub>0</sub> = 19.6 m/s. Equivalently Δy = 0 = v<sub>0</sub>(4.0) − ½(9.8)(16) gives the same result.\n\n(A) is wrong because 9.8 m/s is what would be lost in 1.0 s, not 2.0 s.\n(B) is wrong because 39.2 m/s uses the full 4.0 s as the rising time, forgetting that the ball only goes up for half of it.\n(D) is wrong because 4.9 m/s is ½g, which is not connected to this flight time."
    },
    {
      "id": "1-53",
      "topic": "1.6 Free Fall",
      "stem": "Object A is dropped from rest from a height h. Object B is dropped from rest from a height 4h. Compare their fall times.",
      "choices": [
        "B takes four times as long as A.",
        "B takes twice as long as A.",
        "B takes the same time as A.",
        "B takes half as long as A."
      ],
      "correct": 1,
      "explanation": "Correct: (B) B takes twice as long as A. For a drop from rest, h = ½gt², so t = √(2h/g), meaning time is proportional to the square root of the height. Quadrupling the height multiplies the time by √4 = 2.\n\n(A) is wrong because four times as long treats time as directly proportional to height, ignoring that distance goes as t².\n(C) is wrong because all objects have the same acceleration, but a longer fall takes longer, so the times are not equal.\n(D) is wrong because a greater height cannot take less time when the starting speed is the same."
    },
    {
      "id": "1-54",
      "topic": "1.6 Free Fall",
      "stem": "A ball thrown straight up reaches a maximum height of 20 m. Find its initial speed.",
      "choices": [
        "14 m/s",
        "20 m/s",
        "9.8 m/s",
        "19.8 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 19.8 m/s. At the maximum height the velocity is momentarily zero, so use v² = v<sub>0</sub>² + 2aΔy with a = −9.8 m/s² and Δy = 20 m: 0 = v<sub>0</sub>² + 2(−9.8)(20), so v<sub>0</sub>² = 392 and v<sub>0</sub> = √392 ≈ 19.8 m/s. As a check, 20² = 400 is very close to 392, so a launch speed just under 20 m/s is consistent with a 20 m rise.\n\n(A) is wrong because 14 m/s is the launch speed that would reach only about 10 m, since 14² = 196 = 2(9.8)(10); the 20 m height requires a larger speed.\n(B) is wrong because 20 m/s simply reuses the height number as a speed, but the correct method gives √392 ≈ 19.8 m/s, and a height in meters is not a speed in meters per second.\n(C) is wrong because 9.8 is the magnitude of the gravitational acceleration g in m/s², not a speed, and a ball launched at 9.8 m/s would rise only 4.9 m."
    },
    {
      "id": "1-55",
      "topic": "1.6 Free Fall",
      "stem": "At the exact instant a ball thrown straight up reaches its highest point, what are its velocity and acceleration?",
      "choices": [
        "v ≠ 0; a = −9.8 m/s²",
        "v ≠ 0; a = 0",
        "v = 0; a = −9.8 m/s²",
        "v = 0; a = 0"
      ],
      "correct": 2,
      "explanation": "Correct: (C) v = 0; a = −9.8 m/s². At the peak the ball changes from rising to falling, so its velocity passes through zero for an instant while it reverses direction. Gravity does not turn off at that moment, so the acceleration is still −9.8 m/s² (downward) there and throughout the entire flight. If the acceleration were zero, the velocity could not change and the ball would hang in midair instead of starting to fall.\n\n(A) is wrong because it says the velocity is nonzero at the highest point, but the highest point is defined by the velocity changing sign, which requires it to be exactly zero for that instant.\n(B) is wrong because it gets both quantities wrong, giving a nonzero velocity and zero acceleration, when the velocity is zero and the acceleration is the constant −9.8 m/s² of free fall.\n(D) is wrong because zero acceleration is the common error of thinking that no velocity means no acceleration; the net force is still the ball's weight, so the ball immediately begins to speed up downward."
    },
    {
      "id": "1-56",
      "topic": "1.6 Free Fall",
      "stem": "A ball is thrown straight down from a height with an initial speed of 5.0 m/s. It lands 2.0 s later. Find the height from which it was thrown.",
      "choices": [
        "9.8 m",
        "39.2 m",
        "19.6 m",
        "29.6 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 29.6 m. Take downward as positive, so v<sub>0</sub> = 5.0 m/s and a = +9.8 m/s². Then Δy = v<sub>0</sub>t + ½at² = (5.0)(2.0) + ½(9.8)(2.0)² = 10 + 19.6 = 29.6 m. The throw adds 10 m on top of the 19.6 m the ball would fall if just dropped.\n\n(A) is wrong because 9.8 m is only g times 1 s, which is not a displacement here.\n(B) is wrong because 39.2 m is gt² (no ½) = 9.8 × 4, an arithmetic slip.\n(C) is wrong because 19.6 m is the drop distance, ½gt², and leaves out the 5.0 m/s initial speed."
    },
    {
      "id": "1-57",
      "topic": "1.6 Free Fall",
      "stem": "Two balls are released at the same instant from the same height — Ball A is simply dropped, Ball B is thrown straight down at 5.0 m/s. Which ball hits the ground first, and why?",
      "choices": [
        "Ball B — it starts with more downward velocity.",
        "Ball A, since it has less initial speed.",
        "Cannot be determined without knowing the height.",
        "They land at the same time, since gravity is the same for both."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Ball B, because it starts with more downward velocity. Both balls have the same downward acceleration g and the same distance to fall, but B has v<sub>0</sub> = 5.0 m/s while A has v<sub>0</sub> = 0. At every moment B's speed is 5.0 m/s greater than A's, so B covers the distance sooner. With Δy = v<sub>0</sub>t + ½gt², a positive v<sub>0</sub> means a smaller t is needed to reach the same Δy.\n\n(B) is wrong because less initial speed makes a ball slower to reach the ground, not faster.\n(C) is wrong because the comparison holds for any height, since B is ahead from the start.\n(D) is wrong because the same acceleration does not mean the same time; the starting velocities differ."
    },
    {
      "id": "1-58",
      "topic": "1.7 Projectile Motion",
      "stem": "A projectile is launched at 50 m/s at 37° above the horizontal. Find its initial vertical velocity component. (sin37° ≈ 0.60, cos37° ≈ 0.80)",
      "choices": [
        "30 m/s",
        "50 m/s",
        "40 m/s",
        "20 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 30 m/s. A launch velocity is split into components: the vertical part is the side opposite the launch angle, so v<sub>0y</sub> = v<sub>0</sub> sinθ = (50 m/s)(0.60) = 30 m/s. The stem gives sin37° ≈ 0.60 and cos37° ≈ 0.80 to use here.\n\n(B) is wrong because 50 m/s is the full launch speed, which would only be the vertical component for a straight-up launch at 90°.\n(C) is wrong because 40 m/s is v<sub>0</sub> cosθ, the horizontal component, which comes from mixing up sine and cosine.\n(D) is wrong because 20 m/s has no connection to either component (it is 50 − 30), subtracting instead of multiplying by a trigonometric ratio."
    },
    {
      "id": "1-59",
      "topic": "1.7 Projectile Motion",
      "stem": "Using the same launch (50 m/s at 37°), find the initial horizontal velocity component.",
      "choices": [
        "40 m/s",
        "20 m/s",
        "50 m/s",
        "30 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 40 m/s. The horizontal component of the launch velocity is the side adjacent to the angle, so v<sub>0x</sub> = v<sub>0</sub> cosθ = (50 m/s)(0.80) = 40 m/s. This is also the horizontal velocity throughout the flight, because there is no horizontal acceleration. A quick check is that 30² + 40² = 50², matching the 3-4-5 triangle.\n\n(B) is wrong because 20 m/s is 50 − 30, which is not a component.\n(C) is wrong because 50 m/s is the full launch speed, which would be the horizontal component only for a launch at 0°.\n(D) is wrong because 30 m/s is the vertical component v<sub>0</sub> sinθ, reached by swapping sine and cosine."
    },
    {
      "id": "1-60",
      "topic": "1.7 Projectile Motion",
      "stem": "A ball rolls off a table with horizontal speed 5.0 m/s and lands 0.60 s later. Find the horizontal distance it travels and the height of the table.",
      "choices": [
        "Distance 3.0 m; height ≈ 2.94 m",
        "Distance 8.3 m; height ≈ 1.76 m",
        "Distance 3.0 m; height ≈ 1.76 m",
        "Distance 0.83 m; height ≈ 1.76 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) Distance 3.0 m; height ≈ 1.76 m. The two directions are analyzed separately. Horizontally there is no acceleration, so Δx = v<sub>x</sub>t = (5.0 m/s)(0.60 s) = 3.0 m. Vertically the ball leaves the table with zero vertical velocity, so the table height is Δy = ½gt² = ½(9.8)(0.60)² = ½(9.8)(0.36) ≈ 1.76 m.\n\n(A) is wrong because 2.94 m is ½gt (time not squared), though the distance is right.\n(B) is wrong because 8.3 m is 5.0 ÷ 0.60, dividing the speed by the time instead of multiplying, though the height is right.\n(D) is wrong because 0.83 m is 5.0 ÷ 6.0, a decimal slip that treats 0.60 s as 6.0 s (it has the height right but the distance wrong)."
    },
    {
      "id": "1-61",
      "topic": "1.7 Projectile Motion",
      "stem": "A projectile is launched horizontally from a height. If the launch speed were doubled (same height), how would the total flight time change?",
      "choices": [
        "It would double.",
        "It would stay the same.",
        "It would quadruple.",
        "It would be cut in half."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It would stay the same. For a horizontal launch, the vertical motion starts with zero vertical velocity, so the fall time comes from h = ½gt², t = √(2h/g), which depends only on the height and g. The horizontal and vertical motions are independent, so doubling the horizontal speed only changes how far the object travels (the range doubles).\n\n(A) is wrong because it assumes the launch speed controls the flight time, but speed is horizontal and does not affect the fall.\n(C) is wrong because there is no squared relationship between horizontal speed and time.\n(D) is wrong because a faster launch does not shorten the fall; gravity is still the only thing pulling it down the same height."
    },
    {
      "id": "1-62",
      "topic": "1.7 Projectile Motion",
      "stretch": true,
      "stem": "A projectile is launched at an angle θ above the horizontal with speed v0 on level ground. Which angle maximizes the total horizontal range, and why (conceptually, not from memorizing the formula)?",
      "choices": [
        "45°, since it balances hang time and horizontal speed.",
        "0°, since maximizing horizontal speed alone maximizes range.",
        "The optimal angle depends on the projectile's mass.",
        "90°, since that gives the highest possible vertical speed."
      ],
      "correct": 0,
      "explanation": "Range depends on both how fast the projectile moves horizontally (favoring a small angle, more horizontal component) and how long it stays airborne (favoring a large angle, more vertical component, more hang time). These two effects trade off against each other, and for launch and landing at the same height, 45° balances them exactly, maximizing the product of horizontal speed and flight time."
    },
    {
      "id": "1-63",
      "topic": "1.7 Projectile Motion",
      "stem": "A projectile is launched at an angle above the horizontal on level ground. Compare the time it takes to rise to its peak height to the time it takes to fall back down to its original launch height.",
      "choices": [
        "Falling takes longer.",
        "The two times are equal.",
        "It depends on the launch angle.",
        "Rising takes longer."
      ],
      "correct": 1,
      "explanation": "For a projectile launched and landing at the same height, the vertical motion is symmetric — the vertical velocity component simply reverses sign on the way back down, following the same free-fall physics as Section 1.6's up-and-down symmetry. Time up always equals time down in this scenario."
    },
    {
      "id": "1-64",
      "topic": "1.7 Projectile Motion",
      "stem": "A projectile's horizontal velocity component is 12 m/s and stays constant throughout a 2.5 s flight. Find the total horizontal distance traveled.",
      "choices": [
        "not enough information — vertical motion is also needed",
        "30 m",
        "14.5 m",
        "4.8 m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 30 m. In projectile motion with no air resistance, the horizontal acceleration is zero, so the horizontal velocity stays constant at 12 m/s. The horizontal distance is then Δx = v<sub>x</sub>t = (12 m/s)(2.5 s) = 30 m. The stem gives both numbers needed, and the vertical motion only matters for finding the time, which is already given.\n\n(A) is wrong because the flight time is already provided, so no vertical information is required.\n(C) is wrong because 14.5 m is 12 + 2.5, adding quantities with different units.\n(D) is wrong because 4.8 m is 12 ÷ 2.5, dividing instead of multiplying (velocity ÷ time gives acceleration units, not distance)."
    },
    {
      "id": "1-65",
      "topic": "1.7 Projectile Motion",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A projectile is launched from the edge of a cliff at 20 m/s, angled 30° above the horizontal, off a cliff 25 m high. Find the total time of flight before it lands at the base of the cliff. (sin30°=0.50)",
      "choices": [
        "≈ 5.10 s",
        "≈ 2.85 s",
        "≈ 1.02 s",
        "≈ 3.50 s"
      ],
      "correct": 3,
      "explanation": "Initial vertical velocity: v0y = 20(0.50) = 10 m/s (upward). Taking up as positive, with the ground 25 m below the launch point: −25 = 10t − 4.9t², rearranged into standard form as 4.9t² − 10t − 25 = 0. Applying the quadratic formula: t = [10 ± √(10² + 4(4.9)(25))]/(2×4.9) = [10 ± √590]/9.8 ≈ [10 ± 24.3]/9.8. Taking the positive root (the physically meaningful one): t ≈ 34.3/9.8 ≈ 3.50 s — notice the projectile first rises above the cliff edge before falling all the way down to the base, which is why the total flight time is considerably longer than a simple ½gt²=25 drop alone would give."
    }
  ],
  "2": [
    {
      "id": "2-1",
      "topic": "2.1 Forces and FBDs",
      "stem": "Which statement correctly describes what a force requires?",
      "choices": [
        "A force only exists while an object is moving.",
        "A force always involves two objects — a source and a target.",
        "A force can exist on its own, without any source or target object.",
        "A force requires three or more objects to be defined."
      ],
      "correct": 1,
      "explanation": "Correct: (B) A force always involves two objects, a source and a target. A force is an interaction: one object (the source) pushes or pulls on another (the target), such as a hand on a box or Earth on a ball. This is why a free-body diagram can isolate a single object and ask what the other things around it do to it.\n\n(A) is wrong because forces exist on stationary objects too, for instance gravity and the normal force on a book at rest.\n(C) is wrong because a force cannot exist without a source and a receiver; if you cannot name what exerts it, it is not a real force.\n(D) is wrong because only two objects are needed to define a single force, even though many forces may act on one object."
    },
    {
      "id": "2-2",
      "topic": "2.1 Forces and FBDs",
      "stem": "A free-body diagram should include which of the following?",
      "choices": [
        "Every force in the entire system, regardless of which object it acts on.",
        "Only forces acting on the object, from real physical sources.",
        "Only forces the object exerts on other objects.",
        "Every force acting on the object, plus the object's velocity vector."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Only forces acting on the object, from real physical sources. A free-body diagram isolates one object and shows only the forces exerted on it by other things (gravity, normal force, tension, friction, applied pushes). Every arrow must have an identifiable source.\n\n(A) is wrong because forces on other objects in the system do not belong on this object's diagram.\n(C) is wrong because forces the object exerts on others are the reaction partners, which act on those other objects and are left out.\n(D) is wrong because velocity is not a force; adding it (or a made-up \"force of motion\") would be a classic error, and velocity is drawn separately if at all."
    },
    {
      "id": "2-3",
      "topic": "2.1 Forces and FBDs",
      "stem": "A ball is rolling across a floor at constant velocity, with negligible friction. How many forces, and which ones, act on the ball?",
      "choices": [
        "Two: gravity and the normal force.",
        "One: a forward force keeping it moving.",
        "Zero forces act on it.",
        "Three: gravity, normal force, and a forward force."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Two: gravity and the normal force. The ball's velocity is constant, so by Newton's first law its net force is zero, and no force is needed to maintain motion. The only real interactions are Earth pulling it down (weight, mg) and the floor pushing up (normal force), which cancel because there is no vertical acceleration. With negligible friction, nothing acts horizontally.\n\n(B) is wrong because there is no forward force; motion does not require one, and such a force would have no source.\n(C) is wrong because gravity and the normal force are real, and only their sum is zero.\n(D) is wrong because it adds the nonexistent forward force, which would also cause the ball to accelerate."
    },
    {
      "id": "2-4",
      "topic": "2.1 Forces and FBDs",
      "stem": "A hockey puck slides across frictionless ice at constant velocity. A student insists there must be a small forward force keeping it moving. Evaluate this claim.",
      "choices": [
        "Incorrect — the puck is actually accelerating, not moving at constant velocity.",
        "Correct — without a forward force, the puck would immediately stop.",
        "Correct, but only because ice is unusually slippery.",
        "Incorrect — constant velocity needs zero net force, not a forward push."
      ],
      "correct": 3,
      "explanation": "This is a classic and very common misconception. Newton's First Law states that constant-velocity motion persists with zero net force — no forward-pushing force is needed to sustain it. Assuming motion requires a continuous force is exactly the pre-Newtonian intuition this law was built to correct."
    },
    {
      "id": "2-5",
      "topic": "2.1 Forces and FBDs",
      "stem": "A ball hangs at rest from a single vertical string attached to a ceiling. How many forces act on the ball, and what are they?",
      "choices": [
        "Two: gravity and the string tension.",
        "Two: gravity and the ceiling's normal force.",
        "Three: gravity, tension, and the ceiling's pull.",
        "One: gravity only."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Two: gravity and the string tension. A ball at rest has zero net force, and it interacts directly with only two things: Earth, which pulls it down (weight), and the string, which pulls it up (tension). Since the ball is at rest, T = mg. The ceiling touches the string, not the ball.\n\n(B) is wrong because the ball is not touching the ceiling, so there is no normal force from it, and the upward force is the string's tension.\n(C) is wrong because it counts the ceiling's pull as a third force even though the ceiling acts on the string only; that force is transmitted through the tension already counted.\n(D) is wrong because gravity alone would make the ball fall; an upward force must balance it."
    },
    {
      "id": "2-6",
      "topic": "2.1 Forces and FBDs",
      "stem": "On a free-body diagram, how should the length of each force arrow be drawn?",
      "choices": [
        "Longer arrows should represent smaller forces.",
        "Roughly proportional to the magnitude of that specific force.",
        "All arrows should be the same length, regardless of force size.",
        "Length doesn't matter, only direction matters."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Roughly proportional to the magnitude of that specific force. Drawing each arrow with a length that reflects its size lets you check by eye whether the forces balance, for example whether the upward normal force is the same length as the downward weight when there is no vertical acceleration.\n\n(A) is wrong because it reverses the scale, so bigger forces would look smaller.\n(C) is wrong because equal lengths would hide the relative sizes and make every diagram look balanced.\n(D) is wrong because length carries the magnitude information, and direction alone is not a complete description of a vector."
    },
    {
      "id": "2-7",
      "topic": "2.1 Forces and FBDs",
      "stem": "Which of these is NOT a legitimate force to include on a free-body diagram?",
      "choices": [
        "A 'force of momentum' carrying the object forward",
        "Gravity, pulling the object downward on it, as always",
        "Normal force from a supporting surface under it, as always",
        "Tension from an attached string pulling it along, as always"
      ],
      "correct": 0,
      "explanation": "Correct: (A) A 'force of momentum' carrying the object forward. Momentum is a property of a moving object (its mass times its velocity), not a force acting on it, so it never appears as an arrow on a free-body diagram. A free-body diagram includes only real forces from real interactions with other objects, and the forward motion of an object needs no forward force unless something actually pushes or pulls it.\n\n(B) is wrong because gravity is a genuine force exerted by Earth on the object, always directed downward, so it belongs on every free-body diagram of an object near Earth.\n(C) is wrong because the normal force is a genuine contact force exerted perpendicular to the surface by whatever supports the object, so it must be drawn whenever the object touches a surface.\n(D) is wrong because tension is a genuine contact force exerted by an attached string pulling along its length, so it is drawn on the object the string is attached to."
    },
    {
      "id": "2-8",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "An object moves in a straight line at a constant 15 m/s. What is the net force acting on it?",
      "choices": [
        "A force in the direction of motion, proportional to speed.",
        "Zero.",
        "A force proportional to the object's mass alone.",
        "Cannot be determined without knowing the object's mass."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Zero. Constant velocity (steady speed in a straight line) means the acceleration is zero. By Newton's second law, ΣF = ma = m(0) = 0, so the net force is zero however fast the object moves. The 15 m/s only tells you the speed and does not require a force.\n\n(A) is wrong because a force proportional to speed would be needed only against a resistive force, and the net force still would not be forward. Motion does not require a net force.\n(C) is wrong because a net force proportional to mass would give a nonzero acceleration.\n(D) is wrong because the mass does not matter: ma = 0 for any mass when a = 0."
    },
    {
      "id": "2-9",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "A box at rest has several forces acting on it: 20 N east, 20 N west, and an unknown vertical pair of forces that balances gravity. Is the box in equilibrium?",
      "choices": [
        "No — several forces acting at once can never sum to zero.",
        "Cannot be determined without more information.",
        "Only if all the forces have equal magnitude.",
        "Yes — the horizontal and vertical forces both cancel."
      ],
      "correct": 3,
      "explanation": "Equilibrium just requires the vector sum of all forces to be zero. The horizontal pair (20 N east and 20 N west) cancels on its own, and the problem states the vertical forces balance as well — so the total net force is zero, and the box is in equilibrium."
    },
    {
      "id": "2-10",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "A picture frame hangs at rest from two wires, each pulling upward at some angle. If the frame's weight is 12 N, what must be true about the combined upward pull of both wires?",
      "choices": [
        "Combined upward pull must be greater than 12 N.",
        "Combined upward pull is unrelated to the frame's weight.",
        "Combined upward pull must be less than 12 N.",
        "Combined upward pull must equal exactly 12 N."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Combined upward pull must equal exactly 12 N. The frame is at rest, so the net force is zero. The vertical components of the two wire tensions add up to the upward force, and they must balance the 12 N weight. Because the wires are angled, each wire tension is larger than its vertical share, but the total vertical pull is 12 N.\n\n(A) is wrong because a greater upward pull would give a net upward force and make the frame accelerate upward.\n(B) is wrong because the equilibrium condition directly ties the vertical forces to the weight.\n(C) is wrong because a smaller upward pull would give a net downward force, and the frame would fall."
    },
    {
      "id": "2-11",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "Which of the following objects is in equilibrium?",
      "choices": [
        "A ball at the peak of its path after being thrown straight up.",
        "A skydiver just after jumping, before reaching terminal velocity.",
        "An elevator moving downward at a constant 2 m/s.",
        "A car speeding up from a stoplight."
      ],
      "correct": 2,
      "explanation": "An elevator moving at constant velocity (even if that velocity is downward) has zero acceleration, and is therefore in equilibrium. The ball at its peak still has gravity acting on it (nonzero net force, nonzero acceleration); the speeding-up car and the still-accelerating skydiver both have nonzero net force by definition."
    },
    {
      "id": "2-12",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "Is it possible for an object in equilibrium to have multiple nonzero forces acting on it?",
      "choices": [
        "Only for objects at rest, never for moving objects.",
        "No, equilibrium requires zero forces.",
        "Only if exactly two forces are present.",
        "Yes — equilibrium just means the forces sum to zero."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Yes, equilibrium just means the forces sum to zero. Equilibrium means the vector sum of all forces is zero (ΣF = 0), so a = 0 and the velocity is constant, whether the object is at rest or moving. It can have any number of forces as long as they cancel, as with a book on a table with weight and a normal force of the same size.\n\n(A) is wrong because an object moving at constant velocity is also in equilibrium.\n(B) is wrong because it confuses zero net force with zero individual forces.\n(C) is wrong because equilibrium does not limit the count to two; three or more forces can also sum to zero."
    },
    {
      "id": "2-13",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "A 60 N sign hangs at rest from two vertical ropes. One rope has a tension of 25 N. Find the tension in the second rope.",
      "choices": [
        "60 N",
        "35 N",
        "85 N",
        "25 N"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 35 N. The sign hangs at rest, so the net force is zero, and the two upward rope tensions must add up to the weight: T<sub>1</sub> + T<sub>2</sub> = 60 N. With T<sub>1</sub> = 25 N, T<sub>2</sub> = 60 − 25 = 35 N.\n\n(A) is wrong because 60 N for one rope would, together with the 25 N, give 85 N upward and make the sign accelerate upward.\n(C) is wrong because 85 N is the sum 60 + 25, adding where the equation requires subtracting.\n(D) is wrong because 25 N assumes the ropes share the load equally, which would only support 50 N and the sign would fall."
    },
    {
      "id": "2-14",
      "topic": "2.2 First Law and Equilibrium",
      "stem": "An object at rest has exactly two horizontal forces acting on it: 18 N east and an unknown force. Find the unknown force.",
      "choices": [
        "18 N east",
        "18 N west",
        "0 N",
        "9 N west"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 18 N west. The object is at rest, so the net force is zero. With only two horizontal forces, they must cancel: 18 N east + F = 0, so F = −18 N, which is 18 N west. Equal magnitude and opposite direction are both required.\n\n(A) is wrong because two forces of 18 N east would sum to 36 N east and the object would accelerate eastward.\n(C) is wrong because a 0 N force would leave the 18 N unbalanced.\n(D) is wrong because 9 N west would leave a net of 9 N east, so the object would accelerate."
    },
    {
      "id": "2-15",
      "topic": "2.3 Newton's Second Law",
      "stem": "A net force of 20 N acts on a 4.0 kg object. Find its acceleration.",
      "choices": [
        "16 m/s²",
        "5.0 m/s²",
        "80 m/s²",
        "0.2 m/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 5.0 m/s². Newton's second law gives a = F<sub>net</sub>/m = 20 N ÷ 4.0 kg = 5.0 m/s². The acceleration points in the direction of the net force.\n\n(A) is wrong because 16 is 20 − 4.0, subtracting quantities with different units.\n(C) is wrong because 80 is 20 × 4.0, multiplying where division is needed.\n(D) is wrong because 0.2 is 4.0 ÷ 20, which inverts the ratio."
    },
    {
      "id": "2-16",
      "topic": "2.3 Newton's Second Law",
      "stem": "An object with mass 5.0 kg has two horizontal forces acting on it: 30 N to the right and 10 N to the left. Find its acceleration.",
      "choices": [
        "2.0 m/s² right",
        "4.0 m/s² right",
        "8.0 m/s² right",
        "6.0 m/s² right"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 4.0 m/s² right. Forces along a line add as signed quantities, so with right as positive, F<sub>net</sub> = 30 − 10 = 20 N to the right. Then a = F<sub>net</sub>/m = 20 N ÷ 5.0 kg = 4.0 m/s² to the right.\n\n(A) is wrong because 2.0 m/s² is 10 N ÷ 5.0 kg, using only the smaller force.\n(C) is wrong because 8.0 m/s² would require a 40 N net force, which comes from adding the forces (30 + 10) instead of subtracting.\n(D) is wrong because 6.0 m/s² is 30 N ÷ 5.0 kg, ignoring the opposing 10 N force."
    },
    {
      "id": "2-17",
      "topic": "2.3 Newton's Second Law",
      "stem": "A car moves to the right while braking, slowing down. In which direction does its acceleration point?",
      "choices": [
        "To the left, opposite its velocity.",
        "Acceleration is zero while braking.",
        "Straight down, since braking involves the road surface.",
        "To the right, same as its velocity."
      ],
      "correct": 0,
      "explanation": "Correct: (A) To the left, opposite its velocity. Acceleration is the rate of change of velocity, and it points along the net force. A car moving right that slows down is losing rightward velocity, so Δv points left, and the braking force from the road also points left.\n\n(B) is wrong because the car's speed is changing, so the acceleration is nonzero.\n(C) is wrong because vertical forces (weight and normal force) cancel, and the horizontal friction provides the acceleration; nothing about braking makes the acceleration point down.\n(D) is wrong because acceleration in the same direction as velocity would make the car speed up."
    },
    {
      "id": "2-18",
      "topic": "2.3 Newton's Second Law",
      "stem": "An object's mass is tripled while the net force acting on it stays the same. How does its acceleration change?",
      "choices": [
        "It is cut to one-ninth.",
        "It triples.",
        "It is cut to one-third.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It is cut to one-third. Newton's second law gives a = F<sub>net</sub>/m, so with F<sub>net</sub> constant, acceleration is inversely proportional to mass. If the mass becomes 3m, a becomes F/(3m) = a/3. A heavier object is harder to accelerate with the same push.\n\n(A) is wrong because one-ninth would require a squared dependence on mass, which does not appear in the law.\n(B) is wrong because tripling would occur if the acceleration were proportional to mass, a direct instead of an inverse relationship.\n(D) is wrong because with the same force, a larger mass cannot keep the same acceleration."
    },
    {
      "id": "2-19",
      "topic": "2.3 Newton's Second Law",
      "stem": "A 3.0 kg object has zero net force acting on it and is currently moving at 8.0 m/s. Find its velocity 5.0 s later.",
      "choices": [
        "0 m/s",
        "40 m/s",
        "13 m/s",
        "8.0 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 8.0 m/s. Zero net force means a = F<sub>net</sub>/m = 0, so the velocity does not change (Newton's first law). The object keeps moving at 8.0 m/s for as long as the net force is zero, regardless of the 3.0 kg mass or the 5.0 s.\n\n(A) is wrong because the object would only stop if a net force acted against its motion.\n(B) is wrong because 40 m/s is 8.0 × 5.0, which is distance-like and would require acceleration for velocity to change.\n(C) is wrong because 13 m/s adds 8.0 and 5.0, mixing units, and would require an acceleration of 1.0 m/s² that does not exist here."
    },
    {
      "id": "2-20",
      "topic": "2.3 Newton's Second Law",
      "stem": "An object with mass 10 kg has forces of 50 N right and 30 N left acting on it. Find its acceleration.",
      "choices": [
        "1.0 m/s² right",
        "5.0 m/s² right",
        "2.0 m/s² right",
        "8.0 m/s² right"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 2.0 m/s² right. The forces act along one line, so add them as signed numbers. With right positive, F<sub>net</sub> = 50 − 30 = 20 N to the right. Newton's second law gives a = F<sub>net</sub>/m = 20 N ÷ 10 kg = 2.0 m/s² to the right.\n\n(A) is wrong because 1.0 m/s² would need a 10 N net force, which doesn't match either subtraction or addition.\n(B) is wrong because 5.0 m/s² is 50 N ÷ 10 kg, ignoring the 30 N opposing force.\n(D) is wrong because 8.0 m/s² is 80 N ÷ 10 kg, adding the two forces instead of subtracting them since they point in opposite directions."
    },
    {
      "id": "2-21",
      "topic": "2.3 Newton's Second Law",
      "stem": "If the net force on an object is doubled while its mass stays the same, how does its acceleration change?",
      "choices": [
        "It is cut in half.",
        "It stays the same.",
        "It quadruples.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It doubles. Newton's second law, a = F<sub>net</sub>/m, makes acceleration directly proportional to net force when the mass is constant. Replacing F with 2F gives a′ = 2F/m = 2a.\n\n(A) is wrong because halving would result from doubling the mass, the inverse relationship.\n(B) is wrong because with the same mass, a bigger force must produce a bigger acceleration.\n(C) is wrong because quadrupling needs a squared dependence on force, which the law doesn't have."
    },
    {
      "id": "2-22",
      "topic": "2.3 Newton's Second Law",
      "stem": "A 6.0 kg object experiences a 30 N force east and a second unknown horizontal force. Its acceleration is 3.0 m/s² east. Find the magnitude and direction of the second force.",
      "choices": [
        "18 N east",
        "12 N east",
        "48 N west",
        "12 N west"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 12 N west. First find the net force needed: F<sub>net</sub> = ma = (6.0 kg)(3.0 m/s²) = 18 N east. The known force is 30 N east, which is already more than needed, so the second force must oppose it. With east positive, 30 + F<sub>2</sub> = 18, so F<sub>2</sub> = −12 N, which is 12 N west.\n\n(A) is wrong because 18 N east is the required net force, not the unknown force, and 30 + 18 = 48 N would give 8.0 m/s².\n(B) is wrong because 12 N east would make the net 42 N east and give 7.0 m/s².\n(C) is wrong because 48 N west would give a net of 18 N west, accelerating the object the wrong way."
    },
    {
      "id": "2-23",
      "topic": "2.4 Newton's Third Law",
      "stem": "Two ice skaters, one twice the mass of the other, push off each other from rest. Compare the force each skater feels during the push.",
      "choices": [
        "The force felt depends on how hard each skater pushes individually.",
        "The lighter skater feels twice the force.",
        "The heavier skater feels twice the force.",
        "Both skaters feel exactly the same magnitude of force."
      ],
      "correct": 3,
      "explanation": "By Newton's Third Law, the force each skater exerts on the other is always equal in magnitude, regardless of their masses — mass has no bearing on the force pair itself. (Their resulting accelerations will differ, since a = F/m, but the forces themselves are identical.)"
    },
    {
      "id": "2-24",
      "topic": "2.4 Newton's Third Law",
      "stem": "A hammer strikes a nail, driving it into wood. Identify the Third Law reaction pair to the force the hammer exerts on the nail.",
      "choices": [
        "The hand exerts a force on the hammer as it swings.",
        "The wood exerts a force on the nail as it is driven in.",
        "The nail pushes back on the hammer with equal force.",
        "Gravity acts on the hammer throughout the swing."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The nail pushes back on the hammer with equal force. A Newton's third law pair consists of two forces of equal size and opposite direction that act on different objects, between the same two objects. The hammer pushes on the nail, so the paired force is the nail pushing on the hammer, with the same type of interaction (contact).\n\n(A) is wrong because the hand-on-hammer force involves a different pair of objects.\n(B) is wrong because wood on nail is a separate interaction with different bodies.\n(D) is wrong because gravity on the hammer comes from Earth, whose pair would be the hammer pulling on Earth."
    },
    {
      "id": "2-25",
      "topic": "2.4 Newton's Third Law",
      "stem": "A small car collides head-on with a large, stationary truck. Compare the magnitude of the force the car exerts on the truck to the force the truck exerts on the car.",
      "choices": [
        "The two forces are exactly equal in magnitude.",
        "The truck exerts a much larger force on the car, since it's more massive.",
        "The car exerts a much larger force on the truck, since it was moving.",
        "The forces depend on which vehicle has more momentum."
      ],
      "correct": 0,
      "explanation": "Newton's Third Law guarantees the two forces are equal in magnitude and opposite in direction, regardless of the vehicles' relative mass or speed. What differs is the resulting acceleration of each vehicle (a = F/m) — the lighter car experiences a much larger acceleration from that same-magnitude force."
    },
    {
      "id": "2-26",
      "topic": "2.4 Newton's Third Law",
      "stem": "A book rests on a table. Gravity pulls the book down with a force F<sub>g</sub>. What is the genuine Third Law reaction pair to this specific force?",
      "choices": [
        "The normal force the table exerts on the book, upward.",
        "The force the book exerts on the table, downward.",
        "There is no reaction pair for gravity at all, since it acts alone.",
        "The book's own gravitational pull on the Earth, upward."
      ],
      "correct": 3,
      "explanation": "Gravity is an interaction between the book and the Earth, so its Third Law partner must also be gravitational, acting on the Earth: the book pulls the Earth upward with a force of equal magnitude. The normal force is a completely separate (contact) interaction with its own separate Third Law partner."
    },
    {
      "id": "2-27",
      "topic": "2.4 Newton's Third Law",
      "stem": "Explain, using Newton's Third Law, how a person is able to walk forward.",
      "choices": [
        "Walking doesn't involve Newton's Third Law at all.",
        "The person's muscles directly create a forward force with no reaction needed.",
        "Air resistance pushes the person forward.",
        "The foot pushes the ground back; the ground pushes back on the foot."
      ],
      "correct": 3,
      "explanation": "Walking is a great everyday example of the Third Law in action: the foot pushes backward against the ground (the 'action'), and by Newton's Third Law, the ground pushes forward on the foot with equal force (the 'reaction') — that reaction force is what actually propels the walker forward."
    },
    {
      "id": "2-28",
      "topic": "2.4 Newton's Third Law",
      "stem": "A swimmer pushes water backward with their hands and feet to move forward. Identify the force that actually propels the swimmer forward.",
      "choices": [
        "The reaction force the water exerts on the swimmer.",
        "The buoyant force from the water.",
        "The swimmer's own muscular force, with no need for a reaction.",
        "The force the swimmer's hands exert on the water."
      ],
      "correct": 0,
      "explanation": "Correct: (A) The reaction force the water exerts on the swimmer. The swimmer pushes the water backward (action), and by Newton's third law the water pushes the swimmer forward with an equal force (reaction). Only forces acting on the swimmer can change the swimmer's motion, so this forward push of the water on the swimmer is what propels them.\n\n(B) is wrong because buoyancy acts upward, supporting the swimmer, and does not push forward.\n(C) is wrong because muscles move the limbs, but there must be an external object (water) to push on, and an internal force alone cannot change the body's overall momentum.\n(D) is wrong because the hands' force on the water acts on the water, not on the swimmer, so it can't accelerate the swimmer."
    },
    {
      "id": "2-29",
      "topic": "2.4 Newton's Third Law",
      "stem": "Can the two forces in a Newton's Third Law pair ever appear together on the same free-body diagram, and cancel each other out?",
      "choices": [
        "Only when the two objects have equal mass, and then only briefly.",
        "No — the two forces always act on different objects.",
        "Yes, they commonly cancel on a single free-body diagram.",
        "Only for contact forces, never for gravity or other long-range forces."
      ],
      "correct": 1,
      "explanation": "By definition, a Third Law pair consists of two forces acting on two DIFFERENT objects. A single object's free-body diagram only ever shows forces acting on that one object, so a genuine Third Law partner force can never appear on the same diagram as its pair — they physically can't cancel each other there."
    },
    {
      "id": "2-30",
      "topic": "2.5 Gravity and Weight",
      "stem": "Which pair correctly matches each quantity to its SI unit?",
      "choices": [
        "Mass and weight both use kilograms",
        "Mass — newtons; Weight — kilograms",
        "Mass and weight both use newtons",
        "Mass — kilograms; Weight — newtons"
      ],
      "correct": 3,
      "explanation": "Correct: (D) Mass in kilograms; weight in newtons. Mass is the amount of matter in an object, a measure of its inertia, and it is measured in kilograms. Weight is the gravitational force on an object, W = mg, and every force is measured in newtons, where 1 N = 1 kg·m/s². For example, a 1 kg mass has a weight of about 9.8 N on Earth, which shows the two quantities differ in both meaning and unit.\n\n(A) is wrong because it says both use kilograms, but weight is a force, and a force has units of newtons, so kilograms cannot be its unit.\n(B) is wrong because it swaps the two units, assigning newtons to mass and kilograms to weight, which reverses the actual definitions.\n(C) is wrong because it says both use newtons, but mass is not a force; it is the quantity of matter and is measured in kilograms, with weight found by multiplying it by g."
    },
    {
      "id": "2-31",
      "topic": "2.5 Gravity and Weight",
      "stem": "Find the weight of a 25 kg object on Earth.",
      "choices": [
        "25 N",
        "2450 N",
        "2.6 N",
        "245 N"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 245 N. Weight is the gravitational force on an object, found from W = mg. With the mass 25 kg and the free-fall acceleration g = 9.8 m/s² on Earth, W = (25 kg)(9.8 m/s²) = 245 N. The unit works out because 1 kg·m/s² is one newton, which is the correct unit for a force.\n\n(A) is wrong because 25 N takes the mass number and attaches a force unit, which ignores the factor of g entirely; the correct method multiplies by 9.8 to get 245 N.\n(B) is wrong because 2450 N is ten times too large, which is what 25 × 98 gives, so it comes from a decimal-place slip in the multiplication; 25 × 9.8 is 245.\n(C) is wrong because 2.6 N is about 25 ÷ 9.8, so it divides by g instead of multiplying by it, but weight grows with both mass and g."
    },
    {
      "id": "2-32",
      "topic": "2.5 Gravity and Weight",
      "stem": "An object has a mass of 60 kg. Find its weight on Mars, where g ≈ 3.7 m/s².",
      "choices": [
        "16.2 kg",
        "16.2 N",
        "588 N",
        "222 N"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 222 N. Weight depends on the local gravitational field, W = mg. On Mars, W = (60 kg)(3.7 m/s²) = 222 N, much less than on Earth (588 N), but the mass is still 60 kg.\n\n(A) is wrong because 16.2 kg is 60 ÷ 3.7 with a mass unit, dividing instead of multiplying and mislabeling a force.\n(B) is wrong because 16.2 N makes the same division error.\n(C) is wrong because 588 N is the weight on Earth (60 × 9.8), using the wrong value of g."
    },
    {
      "id": "2-33",
      "topic": "2.5 Gravity and Weight",
      "stem": "An astronaut's mass is 75 kg on Earth. What is her mass on the Moon?",
      "choices": [
        "Mass cannot be defined on the Moon",
        "75 kg",
        "450 kg",
        "12.5 kg"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 75 kg. Mass measures the amount of matter in an object, and it doesn't depend on location. Only the weight (W = mg) changes with the local gravitational field, being about one-sixth as large on the Moon.\n\n(A) is wrong because mass is defined everywhere; it is the weight that depends on the surroundings.\n(C) is wrong because 450 kg is 75 × 6, multiplying by the ratio when in fact the Moon's gravity is weaker and mass doesn't change anyway.\n(D) is wrong because 12.5 kg is 75 ÷ 6, which wrongly scales the mass by the gravity ratio; that quantity (about 12.5 kg) confuses mass with the weight expressed in Earth-weight units."
    },
    {
      "id": "2-34",
      "topic": "2.5 Gravity and Weight",
      "stem": "As an object moves to a much higher altitude above Earth's surface, its weight decreases. What causes this decrease?",
      "choices": [
        "Air resistance reduces the object's effective weight as it rises through the atmosphere.",
        "The object's mass decreases with altitude, since fewer atoms are attracted.",
        "The local gravitational field g decreases with altitude.",
        "Weight doesn't actually change with altitude, since mass stays the same."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The local gravitational field g decreases with altitude. Weight is W = mg, and g = GM/r² falls off as the distance r from Earth's center increases, so the pull on the same mass is weaker at high altitude. The mass stays constant.\n\n(A) is wrong because air resistance is a separate force that acts on moving objects and doesn't change the gravitational force; weight changes in space too, where there is no air.\n(B) is wrong because mass is the amount of matter, which is the same at every altitude.\n(D) is wrong because mass is constant, but weight changes with g, so the statement confuses the two."
    },
    {
      "id": "2-35",
      "topic": "2.5 Gravity and Weight",
      "stem": "Planet X has a gravitational field strength exactly twice that of Earth's. Compare the weight of a given object on Planet X to its weight on Earth.",
      "choices": [
        "Four times as much on Planet X.",
        "The same on both planets.",
        "Half as much on Planet X.",
        "Twice as much on Planet X."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Twice as much on Planet X. Weight is W = mg, and the object's mass is the same on both planets, so weight is directly proportional to g. With g<sub>X</sub> = 2g<sub>Earth</sub>, W<sub>X</sub> = m(2g<sub>Earth</sub>) = 2W<sub>Earth</sub>.\n\n(A) is wrong because four times would need weight proportional to g².\n(B) is wrong because the same weight would require the same g.\n(C) is wrong because half would result if the field were half as strong, inverting the relationship."
    },
    {
      "id": "2-36",
      "topic": "2.5 Gravity and Weight",
      "stem": "Astronauts orbiting Earth in the International Space Station appear weightless, floating freely inside the cabin. Is gravity actually acting on them?",
      "choices": [
        "No, they are far enough from Earth that gravity is essentially zero there.",
        "No, the station's structure blocks gravity from reaching them.",
        "Yes, but only because the station is spinning.",
        "Yes — gravity is nearly as strong there; the station is in free fall."
      ],
      "correct": 3,
      "explanation": "At the ISS's altitude, Earth's gravity is still nearly as strong as at the surface. The 'weightless' appearance comes from the astronauts and the station both being in continuous free fall around Earth together — they experience no normal force from the station's floor, not because gravity has vanished, but because nothing is holding them up against it."
    },
    {
      "id": "2-37",
      "topic": "2.6 Normal Force",
      "stem": "An 8.0 kg box sits at rest on a flat, horizontal floor, with no other vertical forces acting. Find the normal force.",
      "choices": [
        "9.8 N",
        "78.4 N",
        "8.0 N",
        "0.82 N"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 78.4 N. The box is at rest, so the vertical acceleration is zero and the net vertical force is zero. Only gravity (down) and the normal force (up) act vertically, so F<sub>N</sub> = mg = (8.0 kg)(9.8 m/s²) = 78.4 N.\n\n(A) is wrong because 9.8 N is just g, not multiplied by the mass.\n(C) is wrong because 8.0 N is the mass number with a force unit, ignoring g.\n(D) is wrong because 0.82 N is 8.0 ÷ 9.8, which divides by g."
    },
    {
      "id": "2-38",
      "topic": "2.6 Normal Force",
      "stem": "A 5.0 kg box sits on a flat floor. An additional 15 N is pushed straight down on it. Find the normal force.",
      "choices": [
        "64 N",
        "15 N",
        "49 N",
        "34 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 64 N. The box is at rest vertically, so the upward normal force must balance all downward forces: its weight plus the 15 N push. Weight is (5.0)(9.8) = 49 N, so F<sub>N</sub> = 49 + 15 = 64 N.\n\n(B) is wrong because 15 N is only the push, forgetting the weight.\n(C) is wrong because 49 N is just the weight with the extra push omitted.\n(D) is wrong because 34 N subtracts the push (49 − 15), which would apply to an upward pull, not a downward push."
    },
    {
      "id": "2-39",
      "topic": "2.6 Normal Force",
      "stem": "A 6.0 kg box sits on a flat floor while someone pulls straight up on it with 20 N of force (not enough to lift it off the floor). Find the normal force.",
      "choices": [
        "78.8 N",
        "20 N",
        "38.8 N",
        "58.8 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 38.8 N. The box stays on the floor, so the net vertical force is zero. The upward forces are F<sub>N</sub> plus the 20 N pull, balanced by the weight mg = (6.0)(9.8) = 58.8 N. Then F<sub>N</sub> + 20 = 58.8, so F<sub>N</sub> = 38.8 N. The pull takes over part of the support from the floor.\n\n(A) is wrong because 78.8 N adds the pull to the weight, which would apply to a downward push.\n(B) is wrong because 20 N is the pull itself, not the floor's force.\n(D) is wrong because 58.8 N is just the weight, ignoring the pull."
    },
    {
      "id": "2-40",
      "topic": "2.6 Normal Force",
      "stem": "A 70 kg person stands on a scale inside an elevator accelerating upward at 2.0 m/s². Find the normal force the scale exerts on the person (the scale's reading).",
      "choices": [
        "700 N",
        "686 N",
        "826 N",
        "546 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 826 N. Take up as positive. The forces on the person are the normal force up and weight down, so F<sub>N</sub> − mg = ma, giving F<sub>N</sub> = m(g + a) = 70(9.8 + 2.0) = 70(11.8) = 826 N. The scale reads more than the 686 N resting weight because it must also supply the upward acceleration.\n\n(A) is wrong because 700 N is 70 × 10, a rounded weight that ignores the acceleration.\n(B) is wrong because 686 N is the weight at rest (70 × 9.8), which would be the reading only if the elevator moved at constant velocity.\n(D) is wrong because 546 N is 70(9.8 − 2.0), subtracting the acceleration, which is the reading for a downward acceleration."
    },
    {
      "id": "2-41",
      "topic": "2.6 Normal Force",
      "stem": "The same 70 kg person now rides in an elevator accelerating DOWNWARD at 2.0 m/s². Find the normal force.",
      "choices": [
        "700 N",
        "546 N",
        "826 N",
        "686 N"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 546 N. Take up as positive. The person accelerates downward, so a = −2.0 m/s², and F<sub>N</sub> − mg = ma gives F<sub>N</sub> = m(g + a) = 70(9.8 − 2.0) = 70(7.8) = 546 N. The scale reads less than the resting weight because only part of the weight is needed to be supported when the elevator is accelerating downward.\n\n(A) is wrong because 700 N is about the weight with g rounded to 10 and the acceleration ignored.\n(C) is wrong because 826 N is the reading for upward acceleration, 70(9.8 + 2.0).\n(D) is wrong because 686 N is the weight at rest, 70 × 9.8, which is correct only for constant velocity."
    },
    {
      "id": "2-42",
      "topic": "2.6 Normal Force",
      "stem": "A block rests on a frictionless incline tilted at angle θ above horizontal. How does the normal force compare to the block's weight, mg?",
      "choices": [
        "F_N is always less than mg, and decreases further as θ increases.",
        "F_N is always exactly zero on any incline, since the surface is tilted away.",
        "F_N is always greater than mg on an incline, since the surface pushes up harder.",
        "F_N is always equal to mg, regardless of the incline's angle or the object's mass."
      ],
      "correct": 0,
      "explanation": "Correct: (A) F<sub>N</sub> is always less than mg, and decreases further as θ increases. The block does not accelerate perpendicular to the surface, so the normal force balances only the component of weight perpendicular to the incline: F<sub>N</sub> = mg cosθ. For any tilt (θ between 0° and 90°), cosθ is less than 1, so F<sub>N</sub> is below mg, and as θ increases, cosθ shrinks, which reduces F<sub>N</sub>.\n\n(B) is wrong because the surface still presses on the block, with zero normal force only at θ = 90° (a vertical wall).\n(C) is wrong because the normal force would need to exceed the perpendicular part of the weight to accelerate the block off the surface.\n(D) is wrong because F<sub>N</sub> = mg only on a flat, horizontal surface (θ = 0°) with no other vertical forces."
    },
    {
      "id": "2-43",
      "topic": "2.6 Normal Force",
      "stem": "An elevator's cable snaps, and the elevator (with a person inside) falls freely, accelerating downward at exactly g. Find the normal force the elevator floor exerts on the person.",
      "choices": [
        "Cannot be determined without the person's mass.",
        "Zero.",
        "Equal to the person's normal weight.",
        "Greater than the person's normal weight."
      ],
      "correct": 1,
      "explanation": "During free fall, a = g downward. Taking up as positive, F<sub>N</sub> − mg = ma with a = −g, so F<sub>N</sub> = m(g + a) = m(g − g) = 0 — the floor exerts no force on the person at all, since both are accelerating downward at exactly the same rate. This is the same physical situation (though far more dangerous) as the weightlessness astronauts experience in orbit."
    },
    {
      "id": "2-44",
      "topic": "2.7 Friction",
      "stem": "Which statement correctly distinguishes static friction from kinetic friction?",
      "choices": [
        "Kinetic friction is fixed while sliding; static friction varies up to a max.",
        "Static friction is always larger than kinetic friction, by a fixed amount.",
        "Static friction only applies to sliding objects.",
        "Kinetic and static friction always have the exact same value."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Kinetic friction is fixed while sliding; static friction varies up to a maximum. Kinetic friction has a fixed value f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> while surfaces slide. Static friction adjusts to match whatever applied force tries to start the motion (equal and opposite), from zero up to a maximum f<sub>s,max</sub> = μ<sub>s</sub>F<sub>N</sub>.\n\n(B) is wrong because static friction is not a fixed amount larger; it is a variable force with an upper limit, and the maximum is typically slightly larger than kinetic.\n(C) is wrong because static friction acts when surfaces are not sliding relative to each other.\n(D) is wrong because they do not always have the same value; μ<sub>s</sub> is typically larger than μ<sub>k</sub>, and static friction changes with the applied force."
    },
    {
      "id": "2-45",
      "topic": "2.7 Friction",
      "stem": "A 6.0 kg box slides across a floor with μ_k = 0.25. Find the kinetic friction force acting on it.",
      "choices": [
        "58.8 N",
        "14.7 N",
        "1.5 N",
        "24.5 N"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 14.7 N. On a flat floor with no other vertical forces, F<sub>N</sub> = mg = (6.0)(9.8) = 58.8 N. Kinetic friction is f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> = (0.25)(58.8) ≈ 14.7 N.\n\n(A) is wrong because 58.8 N is the normal force, not the friction; it forgets to multiply by μ<sub>k</sub>.\n(C) is wrong because 1.5 N is μ<sub>k</sub> × mass (0.25 × 6.0), skipping g.\n(D) is wrong because 24.5 N would need a normal force of 98 N (0.25 × 98), the weight of a 10 kg box, not the 6.0 kg box here."
    },
    {
      "id": "2-46",
      "topic": "2.7 Friction",
      "stem": "A 10 kg box sits at rest on a floor with μ_s = 0.40. A horizontal push of 35 N is applied. Does the box start to slide?",
      "choices": [
        "Yes, since 35 N is a large force compared with the weight of a typical box.",
        "Yes, since any applied force exceeding zero causes sliding.",
        "No — the maximum static friction (39.2 N) exceeds the 35 N push.",
        "Cannot be determined without knowing μ_k, the coefficient of kinetic friction."
      ],
      "correct": 2,
      "explanation": "Maximum static friction is μ<sub>s</sub>·F<sub>N</sub> = (0.40)(10×9.8) = (0.40)(98) = 39.2 N. Since the applied 35 N push is less than this maximum, static friction can simply match the push (at 35 N) and keep the box in equilibrium — it never needs to reach its maximum, so the box doesn't move."
    },
    {
      "id": "2-47",
      "topic": "2.7 Friction",
      "stem": "Why does it typically take more force to start an object sliding than to keep it sliding once it's already moving?",
      "choices": [
        "This is a myth — starting and maintaining sliding require identical force.",
        "Because the normal force decreases once an object starts moving.",
        "Because kinetic friction doesn't actually exist once motion begins.",
        "Because μ_s is typically greater than μ_k for the same pair of surfaces."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Because μ<sub>s</sub> is typically greater than μ<sub>k</sub> for the same pair of surfaces. The maximum static friction μ<sub>s</sub>F<sub>N</sub> must be exceeded to start sliding, but once the object is moving, the friction drops to μ<sub>k</sub>F<sub>N</sub>, which is smaller. That is why it takes a bigger initial push than to keep it sliding at constant velocity.\n\n(A) is wrong because it is a measurable effect, not a myth.\n(B) is wrong because the normal force depends on the vertical forces, and it doesn't change when sliding starts on a flat surface.\n(C) is wrong because kinetic friction exists whenever surfaces slide against each other."
    },
    {
      "id": "2-48",
      "topic": "2.7 Friction",
      "stem": "An object slides across a horizontal floor with μ_k = 0.20 and no other horizontal forces. Find its deceleration due to friction.",
      "choices": [
        "9.8 m/s²",
        "Cannot be determined without the object's mass",
        "0.20 m/s²",
        "1.96 m/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 1.96 m/s². On a flat floor F<sub>N</sub> = mg, so the only horizontal force is f<sub>k</sub> = μ<sub>k</sub>mg. Newton's second law gives a = f<sub>k</sub>/m = μ<sub>k</sub>g = (0.20)(9.8) = 1.96 m/s², in the direction opposite the motion. The mass cancels, so a heavy and a light object decelerate at the same rate.\n\n(A) is wrong because 9.8 m/s² is g itself, which would correspond to μ<sub>k</sub> = 1.\n(B) is wrong because the mass cancels out of the equation, so it isn't needed.\n(C) is wrong because 0.20 is the coefficient, which has no units; it must be multiplied by g."
    },
    {
      "id": "2-49",
      "topic": "2.7 Friction",
      "stem": "A box sliding at 12 m/s decelerates to rest over a distance of 30 m, due only to kinetic friction on a flat floor. Find μ_k.",
      "choices": [
        "0.20",
        "0.245",
        "0.12",
        "0.40"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.245. First get the deceleration from kinematics: v² = v<sub>0</sub>² + 2aΔx gives 0 = 144 + 2a(30), so a = −144/60 = −2.4 m/s² (magnitude 2.4). On a flat floor friction is the only horizontal force, f<sub>k</sub> = μ<sub>k</sub>mg = ma, so μ<sub>k</sub> = a/g = 2.4/9.8 ≈ 0.245.\n\n(A) is wrong because 0.20 would give a deceleration of 1.96 m/s², which would stop the box over a longer distance of about 37 m.\n(C) is wrong because 0.12 would give about 1.2 m/s², half the needed deceleration.\n(D) is wrong because 0.40 would give 3.9 m/s² and stop the box in about 18 m."
    },
    {
      "id": "2-50",
      "topic": "2.7 Friction",
      "stem": "An object slides across a surface at 3 m/s, then later slides across the same surface at 9 m/s. How does the kinetic friction force compare between the two cases (same normal force in both)?",
      "choices": [
        "The friction force cannot be determined without more information.",
        "The friction force is three times larger at the higher speed.",
        "The friction force is the same in both cases.",
        "The friction force is smaller at the higher speed."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The friction force is the same in both cases. Kinetic friction obeys f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub>, and this expression contains the coefficient of kinetic friction and the normal force but no speed at all. The stem says the surface is the same, so μ<sub>k</sub> is unchanged, and the normal force is the same in both cases, so the friction force is identical at 3 m/s and at 9 m/s.\n\n(A) is wrong because it says more information is needed, but the stem gives everything the model requires: the same surface and the same normal force determine the friction without any speed.\n(B) is wrong because three times larger at three times the speed would hold only if friction were proportional to speed, as in a fluid drag model, and dry sliding friction does not behave that way.\n(D) is wrong because it claims friction decreases at higher speed, but in the standard model the kinetic friction does not shrink or grow with speed; only the surface and normal force matter."
    },
    {
      "id": "2-51",
      "topic": "2.7 Friction",
      "stem": "A block slides down an incline at constant velocity (not accelerating). What must be true about the forces acting along the incline's surface?",
      "choices": [
        "The component of gravity along the incline exceeds the friction force.",
        "Gravity's component along the incline exactly equals friction.",
        "There is no friction acting on the block at all.",
        "The normal force exactly equals the component of gravity along the incline."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Gravity's component along the incline exactly equals friction. Constant velocity means zero acceleration, so the net force along the incline is zero. The forces along the slope are mg sinθ down the incline and kinetic friction up the incline, so mg sinθ = f<sub>k</sub> = μ<sub>k</sub>mg cosθ (which gives μ<sub>k</sub> = tanθ).\n\n(A) is wrong because if gravity's component were larger, there would be a net force down the slope and the block would speed up.\n(C) is wrong because without friction the block would accelerate at g sinθ.\n(D) is wrong because the normal force is perpendicular to the incline, balancing mg cosθ, not mg sinθ."
    },
    {
      "id": "2-52",
      "topic": "2.8 Spring Force",
      "stem": "A spring is compressed from its natural length. In which direction does the spring push?",
      "choices": [
        "Perpendicular to the compression, sideways to the spring's axis.",
        "A compressed spring exerts no force on anything it touches.",
        "In the same direction as the compression, further inward.",
        "Opposite the compression, back toward natural length."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Opposite the compression, back toward natural length. A spring's force is a restoring force: it points opposite the displacement from the natural length, F = −kx. When compressed, the spring pushes outward on whatever is compressing it.\n\n(A) is wrong because the force acts along the spring's axis, not sideways.\n(B) is wrong because a compressed spring pushes with F = kx.\n(C) is wrong because a force in the direction of compression would keep squeezing it further, which is the opposite of restoring."
    },
    {
      "id": "2-53",
      "topic": "2.8 Spring Force",
      "stem": "A spring stretches 0.30 m when a force of 18 N is applied. Find the spring constant.",
      "choices": [
        "18 N/m",
        "30 N/m",
        "5.4 N/m",
        "60 N/m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 60 N/m. A spring obeys Hooke's law, F = kx, so the spring constant is k = F/x. Using the applied force 18 N and the stretch 0.30 m gives k = 18 N ÷ 0.30 m = 60 N/m. The spring constant tells how many newtons are needed per meter of stretch, so a value of 60 N/m means 60 N would stretch it a full meter.\n\n(A) is wrong because 18 is simply the applied force with a different unit attached, and the spring constant must be the force divided by the stretch, which gives 60 N/m.\n(B) is wrong because 30 N/m is what dividing 18 N by 0.60 m would give, which does not match the stated stretch of 0.30 m; dividing by 0.30 gives 60.\n(C) is wrong because 5.4 is 18 × 0.30, so it multiplies force by distance instead of dividing, which gives a quantity with units of N·m rather than N/m."
    },
    {
      "id": "2-54",
      "topic": "2.8 Spring Force",
      "stem": "A spring with k = 80 N/m is stretched by a 12 N force. Find the displacement.",
      "choices": [
        "960 m",
        "0.15 m",
        "0.67 m",
        "6.7 m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.15 m. Hooke's law F = kx gives x = F/k = 12 N ÷ 80 N/m = 0.15 m. A stiff spring (large k) stretches only a small amount for a modest force.\n\n(A) is wrong because 960 m is F × k (12 × 80), multiplying rather than dividing, and it is physically absurd.\n(C) is wrong because 0.67 m is the inverted ratio k/F = 80/12 ≈ 6.7 with the decimal point misplaced; F/k is 0.15 m.\n(D) is wrong because 6.7 m is the inverse ratio k/F = 80/12, which has units of 1/m... not a displacement."
    },
    {
      "id": "2-55",
      "topic": "2.8 Spring Force",
      "stem": "A spring with k = 40 N/m is compressed 0.25 m. Find the magnitude of the spring force.",
      "choices": [
        "0.16 N",
        "16 N",
        "10 N",
        "160 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 10 N. The magnitude of a spring force is given by Hooke's law, F = kx, where x is the distance the spring is displaced from its natural length. This holds whether the spring is stretched or compressed, since only the size of the displacement matters for the magnitude, so F = (40 N/m)(0.25 m) = 10 N. The direction of the force would oppose the compression, pushing back outward.\n\n(A) is wrong because 0.16 N would require a displacement of only 0.0040 m with this spring; with x = 0.25 m the product kx is 10 N.\n(B) is wrong because 16 N would require a displacement of 0.40 m, which is not the 0.25 m the stem gives for the compression.\n(D) is wrong because 160 N is k ÷ x = 40 ÷ 0.25, which divides instead of multiplies; the correct relation is F = kx, which gives 10 N."
    },
    {
      "id": "2-56",
      "topic": "2.8 Spring Force",
      "stem": "A spring is stretched to three times its original displacement (still within its elastic limit). How does the spring force change?",
      "choices": [
        "It is cut to one-third.",
        "It triples.",
        "It stays the same.",
        "It increases ninefold."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It triples. Hooke's law, F = kx, is linear, so with the spring constant k fixed the force is directly proportional to the displacement from the natural length. Tripling x therefore triples F; for example, a spring that pulls with 5 N at 0.1 m pulls with 15 N at 0.3 m. The spring stays within its elastic limit, so Hooke's law remains valid at the larger stretch.\n\n(A) is wrong because one-third would require the force to decrease as the spring is stretched further, but a spring pulls back harder the more it is stretched.\n(C) is wrong because staying the same would require the force to be independent of the displacement, but the force F = kx depends directly on the displacement.\n(D) is wrong because ninefold would require F to scale with x², which describes the stored elastic energy ½kx², not the force; the force is linear in x and increases by a factor of three."
    },
    {
      "id": "2-57",
      "topic": "2.8 Spring Force",
      "stem": "What specifically makes the spring force a 'restoring' force?",
      "choices": [
        "It only acts on spring constants greater than 50 N/m.",
        "It only acts when the spring is moving.",
        "It increases the spring's displacement over time.",
        "It always points opposite the spring's displacement."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It always points opposite the spring's displacement. A restoring force acts to return the system to equilibrium, so it is directed against the displacement (F = −kx): a stretched spring pulls back in and a compressed spring pushes back out. This is the basis of oscillation.\n\n(A) is wrong because the force acts for any spring constant.\n(B) is wrong because the spring force acts whenever the spring is displaced, even when it is momentarily at rest.\n(C) is wrong because a restoring force reduces displacement, not increases it."
    },
    {
      "id": "2-58",
      "topic": "2.8 Spring Force",
      "stem": "A spring is displaced +0.20 m from its natural length (stretched). Using the convention F = −kx, in which direction does the spring force point?",
      "choices": [
        "In the negative direction, opposite the displacement.",
        "Exactly perpendicular to the displacement.",
        "The direction cannot be determined from F = −kx alone.",
        "In the positive direction, same as the displacement."
      ],
      "correct": 0,
      "explanation": "Correct: (A) In the negative direction, opposite the displacement. The spring force is F = −kx, and the minus sign means the force always points opposite the displacement from the natural length. Here x = +0.20 m, so F = −k(0.20), which is negative; the stretched spring pulls back toward its natural length.\n\n(B) is wrong because the spring force acts along the spring's axis, which is the same line as the displacement.\n(C) is wrong because the sign convention fully specifies the direction (positive x gives a negative force).\n(D) is wrong because a force in the same direction as the displacement would push the spring further from equilibrium, which is what a restoring force does not do."
    },
    {
      "id": "2-59",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stem": "A block sits on a frictionless incline tilted at 37° above horizontal (sin37° ≈ 0.60). Find its acceleration down the ramp.",
      "choices": [
        "9.8 m/s²",
        "3.9 m/s²",
        "5.9 m/s²",
        "7.8 m/s²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.9 m/s². On a frictionless incline, the normal force is perpendicular to the surface and does no work along it, so the only force along the ramp is the component of weight mg sinθ. Newton's second law gives ma = mg sinθ, so a = g sinθ = (9.8)(0.60) ≈ 5.9 m/s², independent of the mass.\n\n(A) is wrong because 9.8 m/s² is the free-fall acceleration, which would need a vertical drop (θ = 90°).\n(B) is wrong because 3.9 m/s² is 9.8 × 0.40, which uses 0.40 instead of sin37°.\n(D) is wrong because 7.8 m/s² is g cosθ = 9.8 × 0.80, which uses the cosine instead of the sine; that component presses the block into the ramp."
    },
    {
      "id": "2-60",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A 4.0 kg block sits on a 30° incline with μ_k = 0.20, sliding down. Find its acceleration down the ramp. (sin30°=0.50, cos30°≈0.866)",
      "choices": [
        "4.9 m/s²",
        "6.6 m/s²",
        "1.7 m/s²",
        "3.2 m/s²"
      ],
      "correct": 3,
      "explanation": "Along the ramp: mg·sinθ (down the ramp) minus friction (opposing the sliding, so up the ramp) equals ma. Friction is μ<sub>k</sub>·F<sub>N</sub> = μ<sub>k</sub>·mg·cosθ, since F<sub>N</sub> = mg·cosθ on an incline. So a = g(sinθ − μ<sub>k</sub>·cosθ) = 9.8(0.50 − 0.20×0.866) = 9.8(0.50 − 0.173) = 9.8(0.327) ≈ 3.2 m/s²."
    },
    {
      "id": "2-61",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stem": "Two masses, 10 kg and 6.0 kg, hang from opposite ends of a rope over a frictionless, massless pulley (an Atwood machine). Find the acceleration of the system.",
      "choices": [
        "1.5 m/s²",
        "2.45 m/s²",
        "9.8 m/s²",
        "3.9 m/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 2.45 m/s². Treat the two masses as one system whose motion is along the rope. The net driving force is the difference of the weights, (m<sub>1</sub> − m<sub>2</sub>)g, and the mass being accelerated is the total (m<sub>1</sub> + m<sub>2</sub>), so a = g(m<sub>1</sub> − m<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>) = 9.8(10 − 6.0)/(16) = 9.8(4.0)/16 = 2.45 m/s². The heavier mass accelerates downward and the lighter one upward at this rate.\n\n(A) is wrong because 1.5 m/s² doesn't result from this relation.\n(C) is wrong because 9.8 m/s² would be free fall, which occurs only if the lighter mass were negligible.\n(D) is wrong because 3.9 m/s² divides the net force by 10 kg (the larger mass alone) instead of by the total 16 kg."
    },
    {
      "id": "2-62",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stem": "Using the same Atwood machine (10 kg and 6.0 kg, a = 2.45 m/s²), find the tension in the rope.",
      "choices": [
        "88.2 N",
        "98 N",
        "73.5 N",
        "58.8 N"
      ],
      "correct": 2,
      "explanation": "Applying Newton's Second Law to the lighter (6.0 kg) mass, which accelerates upward: T − m2g = m2a, so T = m2(g+a) = 6.0(9.8+2.45) = 6.0(12.25) = 73.5 N. (Checking with the heavier mass: T = m1(g−a) = 10(9.8−2.45) = 10(7.35) = 73.5 N — consistent.)"
    },
    {
      "id": "2-63",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: An 8.0 kg block sits on a frictionless horizontal table, connected by a string over a pulley at the table's edge to a hanging 2.0 kg mass. Find the acceleration of the system.",
      "choices": [
        "1.96 m/s²",
        "0.98 m/s²",
        "2.45 m/s²",
        "4.9 m/s²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.96 m/s². The string ties the two masses together, so they share the same acceleration magnitude. The only force along the line of motion is the hanging mass's weight, m<sub>2</sub>g = (2.0)(9.8) = 19.6 N, since the table block's weight is balanced by its normal force and there is no friction. That force accelerates both masses: a = m<sub>2</sub>g/(m<sub>1</sub> + m<sub>2</sub>) = 19.6/10 = 1.96 m/s².\n\n(B) is wrong because 0.98 m/s² would arise from dividing 9.8 by 10 (without the 2.0 kg).\n(C) is wrong because 2.45 m/s² is g/4, which uses the wrong total mass (8.0 kg alone, giving 19.6/8.0).\n(D) is wrong because 4.9 m/s² is 19.6/4.0, which divides by too small a mass."
    },
    {
      "id": "2-64",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stem": "In a two-mass Atwood machine, explain why the rope's tension is less than the heavier mass's weight but more than the lighter mass's weight.",
      "choices": [
        "Tension must be less than the heavier weight but more than the lighter one.",
        "Tension always exactly equals the average of the two weights, whatever the masses.",
        "Tension always equals the heavier mass's weight exactly, whatever the lighter mass.",
        "Tension is unrelated to either mass's weight, depending only on the string."
      ],
      "correct": 0,
      "explanation": "If tension equaled the heavier mass's full weight, that mass wouldn't accelerate at all — but it does, since it's not perfectly balanced. Tension must be somewhat less than its weight to allow a net downward force on it, and somewhat more than the lighter mass's weight to provide the net upward force needed to accelerate that mass upward too."
    },
    {
      "id": "2-65",
      "topic": "2.9 Ramps, Pulleys, Multi-Body Systems",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A 3.0 kg block sits on a frictionless 37° incline, connected by a string over a pulley at the top of the incline to a 5.0 kg mass hanging vertically off the other side. Find the acceleration of the system. (sin37°≈0.60)",
      "choices": [
        "4.9 m/s²",
        "2.5 m/s²",
        "6.9 m/s²",
        "3.9 m/s²"
      ],
      "correct": 3,
      "explanation": "For the hanging mass (falling): m2g − T = m2a. For the block on the incline (pulled up the ramp): T − m1g·sinθ = m1a. Adding these equations to eliminate T: m2g − m1g·sinθ = (m1+m2)a, so a = g(m2 − m1·sinθ)/(m1+m2) = 9.8(5.0 − 3.0×0.60)/(8.0) = 9.8(5.0−1.8)/8.0 = 9.8(3.2)/8.0 ≈ 3.9 m/s²."
    }
  ],
  "3": [
    {
      "id": "3-1",
      "topic": "3.1 Work",
      "stem": "A waiter holds a tray of food perfectly still, arms extended, for two full minutes. How much work does the waiter do on the tray?",
      "choices": [
        "Zero, since there is no displacement.",
        "A small but nonzero amount.",
        "A large amount, proportional to how tired the waiter becomes.",
        "Cannot be determined without knowing the tray's weight."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Zero, since there is no displacement. Work in physics is defined as W = Fd·cosθ, the force times the displacement it acts through times the cosine of the angle between them. The clue words are 'perfectly still', which means the tray's displacement is d = 0 m, so W = F(0)cosθ = 0 J no matter how large the supporting force is or how long it is held. The waiter's muscles do burn chemical energy internally, but that is not work done on the tray.\n\n(B) is wrong because a nonzero answer would require some displacement.\n(C) is wrong because it confuses physiological fatigue with mechanical work; fatigue is not part of the W = Fd·cosθ definition.\n(D) is wrong because the weight only sets the size of the force, and zero displacement makes the work zero for any weight."
    },
    {
      "id": "3-2",
      "topic": "3.1 Work",
      "stem": "A constant 25 N force pushes a box 8.0 m in the same direction as the force. Find the work done.",
      "choices": [
        "0.32 J",
        "3.1 J",
        "200 J",
        "33 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 200 J. Work done by a constant force is W = Fd·cosθ. The stem says the force is in the same direction as the displacement, so θ = 0° and cosθ = 1, giving W = Fd = (25 N)(8.0 m) = 200 N·m = 200 J.\n\n(A) is wrong because 0.32 J comes from dividing 8.0 by 25 instead of multiplying.\n(B) is wrong because 3.1 J comes from dividing 25 by 8.0, which gives a quantity with the wrong units for work.\n(D) is wrong because 33 J comes from adding the force and distance (25 + 8.0), but work is a product of force and distance, not a sum."
    },
    {
      "id": "3-3",
      "topic": "3.1 Work",
      "stem": "A 50 N force is applied at 60° to the direction of a 4.0 m displacement. Find the work done. (cos60°=0.50)",
      "choices": [
        "200 J",
        "100 J",
        "173 J",
        "25 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 100 J. Only the component of force along the displacement does work, which is why W = Fd·cosθ, with θ the angle between force and displacement. The stem gives 60° and tells you cos60° = 0.50, so W = (50 N)(4.0 m)(0.50) = 100 J. Half of the force is 'wasted' sideways at this angle, so the answer must be less than the 200 J you would get along the line of motion.\n\n(A) is wrong because 200 J ignores the angle and treats the whole force as parallel to the motion.\n(C) is wrong because 173 J uses sin60° (0.87) instead of cos60°, which would be the component perpendicular to the displacement.\n(D) is wrong because 25 J multiplies 50 by 0.50 and forgets to multiply by the 4.0 m displacement."
    },
    {
      "id": "3-4",
      "topic": "3.1 Work",
      "stem": "A box slides across a floor while kinetic friction acts on it, opposite its direction of motion. What is the sign of the work done by friction?",
      "choices": [
        "Zero",
        "Cannot be determined without more information",
        "Negative",
        "Positive"
      ],
      "correct": 2,
      "explanation": "Correct: (C) Negative. The sign of work comes from cosθ, where θ is the angle between the force and the displacement. Kinetic friction always points opposite to the sliding motion, so θ = 180° and cosθ = −1, which makes W = −f·d, a negative number. Negative work means the force takes energy out of the object, here converting the box's kinetic energy to thermal energy.\n\n(A) is wrong because zero work would require the force to be perpendicular to the motion or the displacement to be zero, and neither is true.\n(B) is wrong because the stem already gives enough information: friction opposes motion, which fixes the sign.\n(D) is wrong because positive work would require the force to have a component along the motion, which would speed the box up rather than slow it."
    },
    {
      "id": "3-5",
      "topic": "3.1 Work",
      "stem": "A ball moves straight upward while gravity acts on it. What is the sign of the work done by gravity during this upward motion?",
      "choices": [
        "Negative",
        "Cannot be determined without the ball's mass",
        "Positive",
        "Zero"
      ],
      "correct": 0,
      "explanation": "Correct: (A) Negative. Work by a force has the sign of cosθ between the force and the displacement. Gravity always pulls downward, while the ball moves upward, so the angle is θ = 180° and cosθ = −1, giving W<sub>g</sub> = −mg·h, which is negative. This matches the physics: a rising ball slows down as gravity removes kinetic energy.\n\n(B) is wrong because the mass only affects the size of the work, not its sign.\n(C) is wrong because positive work would mean gravity speeds the ball up in the direction of its motion, which happens on the way down, not up.\n(D) is wrong because gravity is neither perpendicular to the motion nor is the displacement zero, so the work is not zero."
    },
    {
      "id": "3-6",
      "topic": "3.1 Work",
      "stem": "A block slides across a horizontal floor. What is the work done by the normal force on the block during this motion?",
      "choices": [
        "Positive, since the normal force supports the block.",
        "Negative, since it opposes gravity.",
        "Depends on the block's speed.",
        "Zero, since it's perpendicular to the motion."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Zero, since it's perpendicular to the motion. The normal force acts perpendicular to the surface, so on a horizontal floor it points straight up, while the block's displacement is horizontal. The angle between them is θ = 90° and cosθ = 0, so W = N·d·cos90° = 0 J regardless of how large N is or how fast the block slides.\n\n(A) is wrong because supporting the block's weight does not make a force do work; only a force component along the displacement does.\n(B) is wrong because opposing gravity is about balancing forces vertically, and since there is no vertical displacement no work is done.\n(C) is wrong because the speed does not appear in W = Fd·cosθ, and the angle is 90° at any speed."
    },
    {
      "id": "3-7",
      "topic": "3.1 Work",
      "stem": "An 80 N force is applied at 45° to a 3.0 m displacement. Find the work done. (cos45°≈0.71)",
      "choices": [
        "240 J",
        "170 J",
        "340 J",
        "57 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 170 J. Use W = Fd·cosθ with θ the angle between the force and the displacement. With the given cos45° ≈ 0.71, W = (80 N)(3.0 m)(0.71) = 170.4 J ≈ 170 J. The angled force only delivers about 71% of its magnitude along the motion, so the answer must fall below 240 J.\n\n(A) is wrong because 240 J is Fd with no cosine, treating the force as fully parallel to the motion.\n(C) is wrong because 340 J divides by 0.71 rather than multiplying, which makes the work larger than Fd, which is impossible.\n(D) is wrong because 57 J is (80)(0.71) and leaves out the 3.0 m displacement."
    },
    {
      "id": "3-8",
      "topic": "3.1 Work",
      "stem": "A constant horizontal force pushes a box across a floor. Does the amount of work done depend on how quickly the box is pushed across that same displacement?",
      "choices": [
        "Yes, faster pushes always do more work.",
        "No, work is always zero for horizontal displacements.",
        "Yes, but only if friction is present.",
        "No, work doesn't depend on time."
      ],
      "correct": 3,
      "explanation": "Correct: (D) No, work doesn't depend on time. Work is W = Fd·cosθ, which contains only force, displacement and angle; time is not in the formula. Pushing the same box with the same force across the same distance transfers the same energy whether it takes 2 s or 20 s. Time matters only for power, P = W/t, the rate at which work is done.\n\n(A) is wrong because it confuses work with power; a faster push gives more power, not more work.\n(B) is wrong because a horizontal force on a horizontal displacement has θ = 0° and cosθ = 1, so the work is not zero.\n(C) is wrong because friction changes the force needed, but the work for a given force and displacement still has no time dependence."
    },
    {
      "id": "3-9",
      "topic": "3.1 Work",
      "stem": "A 100 N force is applied at 30° to a 6.0 m displacement. Find the work done. (cos30°≈0.87)",
      "choices": [
        "300 J",
        "600 J",
        "520 J",
        "440 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 520 J. Use W = Fd·cosθ, where only the force component along the displacement counts. With cos30° ≈ 0.87, W = (100 N)(6.0 m)(0.87) = 522 J ≈ 520 J. The angle is small, so most of the force acts along the motion and the result is just below the 600 J maximum.\n\n(A) is wrong because 300 J results from using 0.50 (sin30° or cos60°) instead of cos30°.\n(B) is wrong because 600 J ignores the angle and treats the force as entirely parallel to the displacement.\n(D) is wrong because 440 J does not follow from the given numbers and appears to be an arithmetic slip in the cosine step."
    },
    {
      "id": "3-10",
      "topic": "3.1 Work",
      "stem": "What is the correct SI unit for work?",
      "choices": [
        "Newton-second (N·s)",
        "Newton (N)",
        "Joule (J)",
        "Watt (W)"
      ],
      "correct": 2,
      "explanation": "Correct: (C) Joule (J). Work is force times distance, so its SI unit is newton-meter (N·m), which is given the name joule: 1 J = 1 N·m = 1 kg·m²/s². Work is a transfer of energy, so work and energy share the joule.\n\n(A) is wrong because N·s is the unit of impulse (change in momentum), not work.\n(B) is wrong because the newton is the unit of force alone, without the distance.\n(D) is wrong because the watt is joules per second, the unit of power, which is the rate of doing work rather than the work itself."
    },
    {
      "id": "3-11",
      "topic": "3.1 Work",
      "stem": "A person carries a box in a large circle, ending up exactly back where they started, at the same height throughout. Assuming the box is carried at constant height with a purely vertical supporting force, find the total work done on the box by that supporting force.",
      "choices": [
        "A large positive value, since the person walked a long distance.",
        "Cannot be determined without knowing the circle's radius.",
        "A large negative value.",
        "Zero, since the force is perpendicular to the motion."
      ],
      "correct": 3,
      "explanation": "The supporting force is vertical throughout, while the box's motion is entirely horizontal — perpendicular force and displacement give zero work at every instant, so the total work over the whole trip is also zero, regardless of the distance walked or the fact that it's a round trip."
    },
    {
      "id": "3-12",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "Find the kinetic energy of a 4.0 kg object moving at 5.0 m/s.",
      "choices": [
        "50 J",
        "10 J",
        "20 J",
        "100 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 50 J. Kinetic energy is KE = ½mv², which depends on the square of the speed, not the speed itself. With m = 4.0 kg and v = 5.0 m/s, KE = ½(4.0 kg)(5.0 m/s)² = ½(4.0)(25) = 50 J. The units check out because kg·m²/s² is a joule.\n\n(B) is wrong because 10 J results from forgetting to square the speed, since ½(4.0)(5.0) = 10; the speed must be squared first, giving 25.\n(C) is wrong because 20 J is just mv = (4.0)(5.0), which is the number for momentum, and it leaves out both the factor of ½ and the squaring of the speed.\n(D) is wrong because 100 J is mv² = (4.0)(25) without the factor of ½; the definition of kinetic energy includes the one-half, which brings the result down to 50 J."
    },
    {
      "id": "3-13",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "An object's speed is doubled while its mass stays the same. How does its kinetic energy change?",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It stays the same.",
        "It increases by a factor of 8."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It quadruples. Kinetic energy is KE = ½mv², so for a fixed mass KE is proportional to v². If v becomes 2v, then KE becomes ½m(2v)² = 4(½mv²), so the energy is multiplied by 2² = 4. The clue is that the mass is unchanged, so only the speed term matters.\n\n(A) is wrong because doubling would be true only if KE were proportional to v, as with momentum.\n(C) is wrong because speed appears in the formula, so changing it must change the KE.\n(D) is wrong because a factor of 8 would require KE to depend on v³."
    },
    {
      "id": "3-14",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "An object has an initial kinetic energy of 10 J. A net work of 25 J is done on it. Find its final kinetic energy.",
      "choices": [
        "25 J",
        "35 J",
        "15 J",
        "250 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 35 J. The work-energy theorem says the net work equals the change in kinetic energy: W<sub>net</sub> = KE<sub>f</sub> − KE<sub>i</sub>. Rearranging, KE<sub>f</sub> = KE<sub>i</sub> + W<sub>net</sub> = 10 J + 25 J = 35 J. Positive net work adds energy, so the final KE must be bigger than the initial 10 J.\n\n(A) is wrong because 25 J ignores the object's initial kinetic energy.\n(C) is wrong because 15 J subtracts the work (25 − 10), which gets the sign or the roles backward.\n(D) is wrong because 250 J multiplies 10 by 25, but the theorem relates energies by addition."
    },
    {
      "id": "3-15",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "A 2.0 kg object moving at 3.0 m/s has 27 J of net work done on it. Find its final speed.",
      "choices": [
        "9.0 m/s",
        "3.0 m/s",
        "4.5 m/s",
        "6.0 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 6.0 m/s. First find the initial kinetic energy: KE<sub>i</sub> = ½(2.0 kg)(3.0 m/s)² = 9.0 J. By the work-energy theorem, KE<sub>f</sub> = KE<sub>i</sub> + W<sub>net</sub> = 9.0 + 27 = 36 J. Then ½(2.0)v² = 36 gives v² = 36 and v = 6.0 m/s.\n\n(A) is wrong because 9.0 is the initial energy in joules, not a speed, or is the result of tripling the speed instead of solving for it.\n(B) is wrong because 3.0 m/s is the initial speed, which would mean no net work was done.\n(C) is wrong because 4.5 m/s would mean a final KE of only about 20 J (½·2.0·4.5²), not the 36 J the energy balance requires."
    },
    {
      "id": "3-16",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "If the net work done on an object over some interval is exactly zero, what can be concluded about its kinetic energy?",
      "choices": [
        "It must be decreasing.",
        "It ends up the same as it started.",
        "It must be zero throughout the interval.",
        "It must be increasing."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It ends up the same as it started. The work-energy theorem states W<sub>net</sub> = ΔKE = KE<sub>f</sub> − KE<sub>i</sub>. If the net work over the interval is zero, then ΔKE = 0, so the final kinetic energy equals the initial value. The theorem compares only the endpoints, so KE could have risen and fallen in between.\n\n(A) is wrong because a decrease would need negative net work.\n(C) is wrong because zero net work does not mean zero kinetic energy; a car cruising at constant speed has nonzero KE and zero net work.\n(D) is wrong because an increase would need positive net work."
    },
    {
      "id": "3-17",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "If the net work done on a moving object is negative, what happens to its kinetic energy?",
      "choices": [
        "It becomes negative.",
        "It increases.",
        "It stays the same.",
        "It decreases."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It decreases. The work-energy theorem says W<sub>net</sub> = ΔKE = KE<sub>f</sub> − KE<sub>i</sub>. Negative net work means ΔKE is negative, so the final kinetic energy is smaller than the initial value and the object slows down. The clue is the word negative attached to net work, which means the net force has a component opposite the motion, taking energy away from the object.\n\n(A) is wrong because KE = ½mv² can never be negative, since the mass is positive and v² is never negative; only the change in KE can be negative, not the energy itself.\n(B) is wrong because an increase in kinetic energy requires positive net work, where the net force has a component along the motion, which is the opposite of the situation described.\n(C) is wrong because kinetic energy stays constant only when the net work is exactly zero, and the stem says the net work is negative, so the energy must change."
    },
    {
      "id": "3-18",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "A 5.0 kg object starts at rest. One force does +50 J of work on it; a second force does −20 J of work. Find its final speed.",
      "choices": [
        "6.0 m/s",
        "3.5 m/s",
        "2.4 m/s",
        "12 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 3.5 m/s. Net work is the sum of the work from every force: W<sub>net</sub> = +50 J + (−20 J) = 30 J. The object starts at rest, so KE<sub>i</sub> = 0 and the work-energy theorem gives KE<sub>f</sub> = 30 J. Then ½(5.0 kg)v² = 30 J, so v² = 60/5.0 = 12 m²/s² and v = √12 ≈ 3.5 m/s.\n\n(A) is wrong because 6.0 m/s is W/m = 30/5.0, which skips both the factor of 2 and the square root in v = √(2W/m).\n(C) is wrong because 2.4 m/s is about √(W/m) = √6.0, which drops the factor of 2 and does not match v² = 12.\n(D) is wrong because 12 is the value of v², and the square root was never taken."
    },
    {
      "id": "3-19",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "A 3.0 kg object moving at 10 m/s slides across a rough floor where friction does −90 J of work on it. Find its final speed.",
      "choices": [
        "4.5 m/s",
        "7.7 m/s",
        "6.3 m/s",
        "9.0 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 6.3 m/s. Start with the initial kinetic energy: KE<sub>i</sub> = ½(3.0 kg)(10 m/s)² = 150 J. Friction does −90 J of work, so by the work-energy theorem KE<sub>f</sub> = 150 − 90 = 60 J. Then ½(3.0)v² = 60 gives v² = 40 and v = √40 ≈ 6.3 m/s, which is less than 10 m/s as expected for negative work.\n\n(A) is wrong because 4.5 m/s would leave only about 30 J of kinetic energy (½·3.0·4.5²), half of the 60 J that remains.\n(B) is wrong because 7.7 m/s results from treating the 90 J of friction work as the final kinetic energy (v² = 60).\n(D) is wrong because 9.0 m/s would leave about 122 J of kinetic energy (½·3.0·9.0²), far more than the 60 J that remains after friction."
    },
    {
      "id": "3-20",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "Why is the work-energy theorem often more useful than kinematics equations for a force that changes with position, like a spring?",
      "choices": [
        "It requires knowing the exact time of the motion.",
        "It automatically accounts for friction in every case.",
        "It finds speed from total work, without constant acceleration.",
        "It only applies to constant forces, so it simplifies spring problems."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It finds speed from total work, without constant acceleration. The kinematics equations (like v² = v₀² + 2ax) assume one constant acceleration. A spring force F = kx changes with position, so the acceleration changes continuously and those equations fail. The work-energy theorem uses only the total work, W<sub>net</sub> = ΔKE, which can be found from the area under a force-versus-position graph or from ½kx², however the force varies.\n\n(A) is wrong because the theorem relates energy to position, so the time of the motion is not needed.\n(B) is wrong because friction is included only if its work is counted; it is not automatic.\n(D) is wrong because the theorem applies to variable forces as well as constant ones, which is precisely its advantage here."
    },
    {
      "id": "3-21",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "A 1000 kg car moving at 20 m/s comes to a complete stop. Find the net work done on the car during braking.",
      "choices": [
        "−200,000 J",
        "200,000 J",
        "20,000 J",
        "−20,000 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) −200,000 J. The work-energy theorem gives W<sub>net</sub> = ΔKE = KE<sub>f</sub> − KE<sub>i</sub>. The initial energy is KE<sub>i</sub> = ½(1000 kg)(20 m/s)² = ½(1000)(400) = 200,000 J, and the car comes to a complete stop so KE<sub>f</sub> = 0. Thus W<sub>net</sub> = 0 − 200,000 = −200,000 J. The negative sign means the braking forces took energy out of the car.\n\n(B) is wrong because positive work would speed the car up.\n(C) is wrong because 20,000 J is mv = (1000)(20), with no squaring or ½, and it has the wrong sign.\n(D) is wrong because −20,000 J has the right sign but the wrong size, from the same missing square and ½."
    },
    {
      "id": "3-22",
      "topic": "3.2 Work-Energy Theorem",
      "stem": "Object A moves at speed v; Object B, with the same mass, moves at speed 2v. Compare their kinetic energies.",
      "choices": [
        "B has twice the kinetic energy of A.",
        "B has eight times the kinetic energy of A.",
        "B has four times the kinetic energy of A.",
        "B has the same kinetic energy as A."
      ],
      "correct": 2,
      "explanation": "Correct: (C) B has four times the kinetic energy of A. For equal masses, KE = ½mv² is proportional to v². Object B has speed 2v, so KE<sub>B</sub> = ½m(2v)² = 4(½mv²) = 4 KE<sub>A</sub>. The squared speed is why doubling speed multiplies the energy by 2² = 4.\n\n(A) is wrong because twice the energy would be true only if KE were proportional to v.\n(B) is wrong because eight times would require a v³ dependence.\n(D) is wrong because the speeds differ, so the energies cannot be equal when the masses are the same."
    },
    {
      "id": "3-23",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "Find the gravitational potential energy of a 4.0 kg object 6.0 m above the ground.",
      "choices": [
        "58.8 J",
        "235.2 J",
        "24 J",
        "392 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 235.2 J. Gravitational potential energy near Earth's surface is PE = mgh, measured from a reference height of zero. Here PE = (4.0 kg)(9.8 m/s²)(6.0 m) = 235.2 J. All three factors must be multiplied.\n\n(A) is wrong because 58.8 J equals (9.8)(6.0), leaving out the mass.\n(C) is wrong because 24 J equals (4.0)(6.0), leaving out g.\n(D) is wrong because 392 J does not follow from these values; it would correspond to a height of 10 m."
    },
    {
      "id": "3-24",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A student measures an object's gravitational PE using the ground as the reference (h=0), while another student uses a tabletop 1 m above the ground as their reference. Do they agree on the object's CHANGE in PE as it moves from the tabletop to the ground?",
      "choices": [
        "Only if the object has zero mass, so that no gravitational energy exists.",
        "No, since they used different reference points for the zero of potential energy.",
        "Only if they both use the ground as the reference point for the height.",
        "Yes, since ΔPE doesn't depend on the reference point."
      ],
      "correct": 3,
      "explanation": "While the absolute value of PE at any given point depends on the arbitrary reference chosen, the CHANGE in PE between two points does not — both students will compute the identical ΔPE for the object's drop, since the reference point cancels out when you take a difference."
    },
    {
      "id": "3-25",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A spring with k = 250 N/m is stretched 0.20 m. Find its elastic potential energy.",
      "choices": [
        "2.5 J",
        "50 J",
        "5.0 J",
        "25 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.0 J. Elastic potential energy stored in a spring is PE = ½kx², where x is the stretch from the natural length. PE = ½(250 N/m)(0.20 m)² = ½(250)(0.040) = 5.0 J. The x must be squared before multiplying.\n\n(A) is wrong because 2.5 J is half the correct value and does not match the formula.\n(B) is wrong because 50 J is just kx = 250 × 0.20, which is the spring force in newtons, not an energy.\n(D) is wrong because 25 J is ½kx with x not squared."
    },
    {
      "id": "3-26",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A spring's compression is doubled. How does its elastic potential energy change?",
      "choices": [
        "It triples.",
        "It doubles.",
        "It quadruples.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It quadruples. The elastic potential energy of a spring is PE = ½kx², so with k fixed, PE is proportional to x². Doubling the compression gives ½k(2x)² = 4(½kx²), so the energy increases by a factor of 2² = 4.\n\n(A) is wrong because tripling does not match any power of 2 here; it would arise only if x were tripled in a linear relation.\n(B) is wrong because doubling is the linear answer, which ignores that x is squared.\n(D) is wrong because the compression appears in the formula, so changing it changes the stored energy."
    },
    {
      "id": "3-27",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A 3.0 kg object rises from a height of 2.0 m to a height of 9.0 m. Find its change in gravitational potential energy.",
      "choices": [
        "147 J",
        "58.8 J",
        "264.6 J",
        "205.8 J"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 205.8 J. The change in gravitational potential energy depends only on the change in height: ΔPE = mgΔh. Here Δh = 9.0 − 2.0 = 7.0 m, so ΔPE = (3.0 kg)(9.8 m/s²)(7.0 m) = 205.8 J. It is positive because the object gains height.\n\n(A) is wrong because 147 J uses Δh = 5.0 m, an incorrect subtraction.\n(B) is wrong because 58.8 J is mg(2.0), the starting PE, not the change.\n(C) is wrong because 264.6 J is mg(9.0), the final PE, which forgets to subtract the initial PE."
    },
    {
      "id": "3-28",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "As an object is raised to a greater height above a fixed reference level, what happens to its gravitational potential energy?",
      "choices": [
        "It increases.",
        "It decreases.",
        "It depends on the object's speed.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Correct: (A) It increases. Gravitational potential energy is PE = mgh, so for a fixed mass and fixed g, PE is directly proportional to height above the reference level. Raising the object increases h and therefore PE; this is energy stored by doing positive work against gravity.\n\n(B) is wrong because PE would decrease only if the height decreased.\n(C) is wrong because speed does not appear in mgh; speed affects kinetic energy, not potential energy.\n(D) is wrong because h is in the formula, so changing the height changes PE."
    },
    {
      "id": "3-29",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A spring with k = 120 N/m is compressed 0.050 m. Find its elastic potential energy.",
      "choices": [
        "6.0 J",
        "3.0 J",
        "0.15 J",
        "0.30 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.15 J. Use the spring energy formula PE = ½kx². With k = 120 N/m and x = 0.050 m, PE = ½(120)(0.050)² = ½(120)(0.0025) = 0.15 J. Compression and stretch store energy equally because x is squared.\n\n(A) is wrong because 6.0 is kx = 120 × 0.050, which is the force in newtons, not an energy.\n(B) is wrong because 3.0 is ½kx, with x not squared.\n(D) is wrong because 0.30 J is kx² and is missing the factor of ½."
    },
    {
      "id": "3-30",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "Is there a meaningful 'potential energy' associated with kinetic friction, the way there is for gravity and springs?",
      "choices": [
        "Yes, but only at low sliding speeds.",
        "No, because friction never does any work at all.",
        "No, since friction isn't a conservative force.",
        "Yes, friction has its own potential energy formula."
      ],
      "correct": 2,
      "explanation": "Potential energy is a concept that only applies to conservative forces (like gravity and springs), where the energy can be fully recovered. Kinetic friction is non-conservative — the energy it removes from a system is dissipated as heat and cannot be recovered as useful mechanical energy, so there's no PE formula associated with it."
    },
    {
      "id": "3-31",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "An object's mass is doubled while its height above the reference level stays the same. How does its gravitational potential energy change?",
      "choices": [
        "It stays the same.",
        "It quadruples.",
        "It doubles.",
        "It is cut in half."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It doubles. Gravitational potential energy is PE = mgh. With g and h unchanged, PE is directly proportional to m, so replacing m with 2m gives PE = (2m)gh = 2(mgh). The clue is that only the mass changes; the height above the same reference level is the same.\n\n(A) is wrong because mass is a factor in the formula.\n(B) is wrong because quadrupling would need PE to depend on m², which only happens for squared quantities like speed in KE.\n(D) is wrong because more mass means more stored energy, not less."
    },
    {
      "id": "3-32",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "A spring's displacement from its natural length is tripled. How does its elastic potential energy change?",
      "choices": [
        "It stays the same.",
        "It increases ninefold.",
        "It increases sixfold.",
        "It triples."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It increases ninefold. The elastic potential energy of a spring is PE = ½kx², which is proportional to the square of the displacement from the natural length. Tripling x gives ½k(3x)² = 9(½kx²), so the stored energy is multiplied by 3² = 9. The stem says the displacement is tripled, so the square law is what matters here.\n\n(A) is wrong because the displacement appears in the formula, so changing it from x to 3x necessarily changes the stored energy; the energy goes from ½kx² to 4.5kx².\n(C) is wrong because a factor of six does not come from the formula; squaring the tripled displacement gives a factor of 9, not 6.\n(D) is wrong because tripling would be correct only if the potential energy depended linearly on x, but it depends on x², so the stored energy grows much faster than the displacement."
    },
    {
      "id": "3-33",
      "topic": "3.3 Gravitational and Elastic PE",
      "stem": "At what spring displacement is the elastic potential energy at its minimum possible value?",
      "choices": [
        "At maximum compression only.",
        "Elastic PE has no minimum value.",
        "At its natural length (x=0).",
        "At maximum stretch only."
      ],
      "correct": 2,
      "explanation": "Correct: (C) At its natural length (x=0). Elastic potential energy is PE = ½kx², and since x² is never negative, the smallest possible value is 0 J, reached only when x = 0, the relaxed natural length. Any stretch or compression raises the stored energy above zero, which is why the spring is pulled back toward x = 0 when released.\n\n(A) is wrong because at maximum compression x² is at its largest on the compressed side, so the stored energy is greatest there, not least.\n(B) is wrong because elastic PE does have a minimum value, namely zero, since the squared displacement can never make the energy negative.\n(D) is wrong because at maximum stretch the displacement is also large, so x² and the stored energy are at a maximum there rather than a minimum."
    },
    {
      "id": "3-34",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A ball starts from rest at the top of a frictionless ramp 8.0 m high. Find its speed at the bottom.",
      "choices": [
        "15.7 m/s",
        "12.5 m/s",
        "8.9 m/s",
        "78.4 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 12.5 m/s. On a frictionless ramp mechanical energy is conserved, so the gravitational PE at the top becomes kinetic energy at the bottom: mgh = ½mv². The mass cancels, leaving v = √(2gh) = √(2 × 9.8 m/s² × 8.0 m) = √156.8 ≈ 12.5 m/s. The clue words are 'from rest' (no initial KE) and 'frictionless' (no energy lost).\n\n(A) is wrong because 15.7 does not follow from the equation and is a miscalculation.\n(C) is wrong because 8.9 m/s is √(gh), which leaves out the factor of 2.\n(D) is wrong because 78.4 is gh, with the factor of 2 and the square root both dropped."
    },
    {
      "id": "3-35",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A pendulum swings back and forth with no friction or air resistance. At what point in its swing is its kinetic energy at a maximum?",
      "choices": [
        "Kinetic energy is constant throughout the swing.",
        "At the lowest point of the swing.",
        "At the highest points of the swing (the endpoints).",
        "Exactly halfway between the highest and lowest points."
      ],
      "correct": 1,
      "explanation": "Correct: (B) At the lowest point of the swing. With no friction or air resistance, total mechanical energy is conserved: KE + PE = constant. The bob's PE is smallest at the bottom of the arc, so KE is largest there and the speed is greatest. At the endpoints the bob momentarily stops, so KE = 0 and PE is largest.\n\n(A) is wrong because KE and PE trade off during the swing; it is the total that is constant.\n(C) is wrong because the endpoints are where the pendulum is momentarily at rest, so KE is zero.\n(D) is wrong because halfway the energy is split between KE and PE, so KE is not at its maximum."
    },
    {
      "id": "3-36",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A spring (k = 500 N/m) is compressed 0.10 m and used to launch a 0.50 kg object horizontally across a frictionless surface. Find the object's launch speed.",
      "choices": [
        "1.6 m/s",
        "3.2 m/s",
        "5.0 m/s",
        "10 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 3.2 m/s. The surface is frictionless, so all the elastic PE stored in the spring becomes the object's kinetic energy: ½kx² = ½mv². Substituting, ½(500)(0.10)² = ½(0.50)v², so 2.5 J = 0.25v², giving v² = 10 m²/s² and v = √10 ≈ 3.2 m/s.\n\n(A) is wrong because 1.6 m/s does not come from the energy equation and is an algebra slip.\n(C) is wrong because 5.0 is kx² = 5.0, a stage value of the calculation, not a speed.\n(D) is wrong because 10 is v², and the square root was not taken."
    },
    {
      "id": "3-37",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "Under what condition does total mechanical energy remain constant for a system?",
      "choices": [
        "Mechanical energy is always constant, in every situation.",
        "Whenever no non-conservative force does work on the system.",
        "Whenever the object is moving at constant speed.",
        "Whenever the object returns to its starting position."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Whenever no non-conservative force does work on the system. Mechanical energy (KE + PE) is conserved only when the forces doing work are conservative, such as gravity and ideal springs. Non-conservative forces such as friction, air drag, or an outside push change the mechanical energy by W<sub>nc</sub>, so E<sub>f</sub> = E<sub>i</sub> + W<sub>nc</sub>. If W<sub>nc</sub> = 0, then E<sub>i</sub> = E<sub>f</sub> and the mechanical energy is constant.\n\n(A) is wrong because mechanical energy is not always constant; friction, for example, converts mechanical energy into thermal energy and reduces it.\n(C) is wrong because constant speed does not rule out non-conservative work; a box pushed at constant speed against friction has the push doing positive work and friction doing equal negative work.\n(D) is wrong because returning to the starting position does not guarantee conservation; a block sliding across a rough floor and back loses energy to friction on both trips."
    },
    {
      "id": "3-38",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A roller coaster car starts from rest at the top of a frictionless hill 20 m high. Find its speed at the bottom.",
      "choices": [
        "14 m/s",
        "196 m/s",
        "19.8 m/s",
        "28 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 19.8 m/s. With no friction, mechanical energy is conserved, so mgh = ½mv² and v = √(2gh) = √(2 × 9.8 × 20) = √392 ≈ 19.8 m/s. The mass cancels and the shape of the hill does not matter; only the vertical drop does.\n\n(A) is wrong because 14 m/s is √(gh) = √196, which leaves out the factor of 2.\n(B) is wrong because 196 is gh, without the 2 and without the square root.\n(D) is wrong because 28 m/s is too large; it would come from using 4gh instead of 2gh."
    },
    {
      "id": "3-39",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A ball is thrown straight up at 14 m/s. Using energy methods, find the maximum height it reaches.",
      "choices": [
        "10 m",
        "14 m",
        "5.0 m",
        "19.6 m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 10 m. At the peak the ball is momentarily at rest, so all of the initial kinetic energy has become gravitational potential energy: ½mv₀² = mgh. The mass cancels, so h = v₀²/(2g) = (14)²/(2 × 9.8) = 196/19.6 = 10 m.\n\n(B) is wrong because 14 m just reuses the speed's number as a height.\n(C) is wrong because 5.0 m comes from dividing by 4g instead of 2g.\n(D) is wrong because 19.6 is the denominator 2g, not the quotient."
    },
    {
      "id": "3-40",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "An object slides along a frictionless track that dips down and rises back up to the same height it started at. Compare its speed at the starting point to its speed when it returns to that same height.",
      "choices": [
        "Cannot be determined without knowing the track's shape.",
        "The speed is the same in both cases.",
        "The speed is less upon returning.",
        "The speed is greater upon returning."
      ],
      "correct": 1,
      "explanation": "Correct: (B) The speed is the same in both cases. The track is frictionless, so mechanical energy is conserved. Gravitational PE depends only on height, so at the same height the PE is the same, which means the KE and speed must be the same too. The path in between (the dip, the slope, the length) does not matter.\n\n(A) is wrong because the track's shape is irrelevant; only the heights at the two points matter.\n(C) is wrong because a lower speed would require energy to be lost, such as to friction.\n(D) is wrong because a higher speed would require energy to be added, with no source for it."
    },
    {
      "id": "3-41",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A ball rolls down a frictionless incline that drops a total height of 3.0 m. Find its speed at the bottom, regardless of the incline's angle.",
      "choices": [
        "7.7 m/s",
        "9.8 m/s",
        "5.4 m/s",
        "6.0 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 7.7 m/s. On a frictionless incline only gravity (a conservative force) does work, and the normal force does none because it is perpendicular to the motion. So mgh = ½mv² and v = √(2gh) = √(2 × 9.8 × 3.0) = √58.8 ≈ 7.7 m/s. Only the height drop counts, so the angle and length of the incline are irrelevant.\n\n(B) is wrong because 9.8 is the value of g, not a speed.\n(C) is wrong because 5.4 m/s is √(gh), leaving out the factor of 2.\n(D) is wrong because 6.0 m/s does not follow from the equation and is a miscalculation."
    },
    {
      "id": "3-42",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "Why doesn't the specific shape of a frictionless path (straight ramp vs. curved slide, for instance) affect the final speed at the bottom, for a given height drop?",
      "choices": [
        "Because gravity is conservative, so its work depends only on height.",
        "Because friction always cancels out any path-dependence on the slope.",
        "Because speed only depends on time, not on force or on height lost.",
        "Path shape actually does affect final speed in every case without exception."
      ],
      "correct": 0,
      "explanation": "Gravity is a conservative force — the work it does (and therefore the change in kinetic energy, given no friction) depends only on the net vertical height dropped, not the specific route taken to get there. This is precisely why energy methods can skip over path details that kinematics would require tracking explicitly."
    },
    {
      "id": "3-43",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A spring stores 15 J of elastic potential energy and launches a 0.30 kg object straight upward. Assuming all spring energy converts to height gain, find the object's maximum height.",
      "choices": [
        "7.5 m",
        "2.5 m",
        "5.1 m",
        "10 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.1 m. Assume all the spring energy becomes gravitational PE at the top, where the object is momentarily at rest. Then PE<sub>spring</sub> = mgh, so 15 J = (0.30 kg)(9.8 m/s²)h = (2.94 N)h and h = 15/2.94 ≈ 5.1 m.\n\n(A) is wrong because 7.5 m comes from halving 15, as if a ½ belonged in this equation, which it does not.\n(B) is wrong because 2.5 m does not result from dividing the energy by mg.\n(D) is wrong because 10 m results from a wrong value of g (about 5 m/s²) in mgh, not 9.8 m/s²."
    },
    {
      "id": "3-44",
      "topic": "3.4 Conservation of Mechanical Energy",
      "stem": "A problem states: 'Assume friction and air resistance are negligible.' What technique does this phrase most strongly signal you should use?",
      "choices": [
        "Newton's Second Law with a detailed free-body diagram.",
        "A graphical slope/area analysis.",
        "Conservation of mechanical energy.",
        "The impulse-momentum theorem."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Conservation of mechanical energy. The statement that friction and air resistance are negligible means no non-conservative forces do work, which is the exact condition for E<sub>i</sub> = E<sub>f</sub> (KE + PE conserved). It is a cue to equate energies at two points instead of tracking forces.\n\n(A) is wrong because Newton's second law with a free-body diagram can work, but nothing in the phrase points to it, and it is harder when the force varies.\n(B) is wrong because slope and area analysis is for graphs, which the phrase does not mention.\n(D) is wrong because impulse-momentum is for collisions and forces acting over time, not for neglecting friction."
    },
    {
      "id": "3-45",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A block slides to a stop on a rough floor due to friction. What happens to its lost mechanical energy?",
      "choices": [
        "It is destroyed entirely, disappearing without a trace.",
        "It has no effect — energy conservation is violated in this case.",
        "It transfers into the block's gravitational potential energy.",
        "It converts into other forms, mainly heat."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It converts into other forms, mainly heat. Energy is conserved overall. Kinetic friction does negative work on the block, W<sub>nc</sub> = −f·d, and that energy goes into thermal energy in the block and floor (plus a little sound), so the mechanical energy KE + PE decreases while the total energy is unchanged. The block stops because all of its initial kinetic energy ends up as thermal energy.\n\n(A) is wrong because energy cannot be destroyed; the lost mechanical energy shows up as increased thermal energy of the surfaces rather than vanishing without a trace.\n(B) is wrong because conservation of energy still holds when the thermal energy is counted; only the mechanical energy is not conserved, so no law is violated.\n(C) is wrong because the block stays on the level floor, so its height and gravitational potential energy do not change, and nothing is stored in that form."
    },
    {
      "id": "3-46",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 5.0 kg object starts at rest at the top of a 4.0 m high ramp WITH friction, and reaches the bottom moving at 6.0 m/s. Find the work done by friction.",
      "choices": [
        "90 J",
        "−90 J",
        "−196 J",
        "−106 J"
      ],
      "correct": 3,
      "explanation": "Correct: (D) −106 J. The work done by non-conservative friction equals the change in mechanical energy: W<sub>f</sub> = E<sub>f</sub> − E<sub>i</sub>. At the top (taking the bottom as h = 0) E<sub>i</sub> = mgh = (5.0)(9.8)(4.0) = 196 J, since it starts at rest. At the bottom E<sub>f</sub> = ½mv² = ½(5.0)(6.0)² = 90 J. So W<sub>f</sub> = 90 − 196 = −106 J, negative because friction removes energy.\n\n(A) is wrong because 90 J is just the final KE, and friction work is negative.\n(B) is wrong because −90 J ignores the starting PE of 196 J.\n(C) is wrong because −196 J would mean friction removed all the initial energy, but the object still has 90 J at the bottom."
    },
    {
      "id": "3-47",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 2.0 kg box slides 5.0 m across a floor with μ_k = 0.30, starting at 8.0 m/s. Find its final speed. (g=9.8 m/s²)",
      "choices": [
        "6.6 m/s",
        "3.8 m/s",
        "7.4 m/s",
        "5.9 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 5.9 m/s. The friction force is f = μ<sub>k</sub>·mg = (0.30)(2.0)(9.8) = 5.88 N, and it does work W = −fd = −(5.88)(5.0) = −29.4 J. The initial KE is ½(2.0)(8.0)² = 64 J, so KE<sub>f</sub> = 64 − 29.4 = 34.6 J. Then ½(2.0)v² = 34.6 gives v² = 34.6 and v ≈ 5.9 m/s.\n\n(A) is wrong because 6.6 m/s corresponds to a smaller energy loss than friction really removes.\n(B) is wrong because 3.8 m/s corresponds to a much larger loss than 29.4 J.\n(C) is wrong because 7.4 m/s corresponds to far too little loss, as if friction had been undercounted."
    },
    {
      "id": "3-48",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "For a moving object with kinetic friction acting opposite its motion, what is the sign of W_nc (the work done by that non-conservative force)?",
      "choices": [
        "Can be either sign, depending on the object's speed.",
        "Always positive.",
        "Always zero.",
        "Always negative."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Always negative. Kinetic friction points opposite the object's motion, so the angle between force and displacement is 180° and cosθ = −1: W = −f<sub>k</sub>·d. This holds at every speed and always removes mechanical energy.\n\n(A) is wrong because the sign depends on direction, not speed, and friction's direction is always against the motion.\n(B) is wrong because positive work would speed the object up, which kinetic friction never does to the object it opposes.\n(C) is wrong because zero work needs a perpendicular force or no displacement, and the object is moving."
    },
    {
      "id": "3-49",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 2.0 kg object moving at 3.0 m/s on a frictionless horizontal surface has an additional 40 J of work done on it by an external applied force. Find its final speed.",
      "choices": [
        "5.0 m/s",
        "9.0 m/s",
        "7.0 m/s",
        "4.2 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 7.0 m/s. The surface is frictionless, so the only work is the 40 J from the applied force, and by the work-energy theorem KE<sub>f</sub> = KE<sub>i</sub> + W. The initial energy is ½(2.0)(3.0)² = 9.0 J, so KE<sub>f</sub> = 9.0 + 40 = 49 J. Then ½(2.0)v² = 49 gives v² = 49 and v = 7.0 m/s.\n\n(A) is wrong because 5.0 m/s corresponds to only 25 J, not 49 J.\n(B) is wrong because 9.0 is the initial KE in joules, not a speed.\n(D) is wrong because 4.2 m/s corresponds to a final energy of only about 17.6 J, as if the 40 J had been mishandled."
    },
    {
      "id": "3-50",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 1.0 kg ball drops 5.0 m through the air, experiencing some air resistance, and hits the ground moving at 8.0 m/s. Find the amount of mechanical energy converted to heat (and other losses) due to air resistance.",
      "choices": [
        "8.0 J",
        "49 J",
        "17 J",
        "32 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 17 J. Without air resistance, all the gravitational PE lost would become KE: mgh = (1.0 kg)(9.8 m/s²)(5.0 m) = 49 J. The ball actually reaches the ground with KE = ½(1.0)(8.0)² = 32 J. The mechanical energy missing, 49 − 32 = 17 J, equals the magnitude of the work done by air resistance and went into heat and other losses (W<sub>nc</sub> = E<sub>f</sub> − E<sub>i</sub> = −17 J).\n\n(A) is wrong because 8.0 is the speed in m/s, not an energy.\n(B) is wrong because 49 J is the total PE lost, not the portion lost to drag; it ignores the 32 J of KE the ball keeps.\n(D) is wrong because 32 J is the final kinetic energy, not the loss."
    },
    {
      "id": "3-51",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "Which of the following is a non-conservative force?",
      "choices": [
        "Gravity",
        "Air resistance",
        "None of these — all forces are conservative",
        "An ideal spring force"
      ],
      "correct": 1,
      "explanation": "Correct: (B) Air resistance. A conservative force has work that depends only on the starting and ending positions and energy that can be fully stored and returned, such as gravity and an ideal spring. Air resistance depends on the path and always removes mechanical energy as heat, which cannot be recovered as KE or PE.\n\n(A) is wrong because gravity is conservative; its work depends only on the change in height.\n(C) is wrong because friction and drag are well-known non-conservative forces.\n(D) is wrong because an ideal spring stores energy as ½kx² and returns all of it."
    },
    {
      "id": "3-52",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 2.0 kg object moving at 6.0 m/s slides up a ramp with friction, rising 0.50 m in height while friction does −10 J of work on it. Find its final kinetic energy.",
      "choices": [
        "46.0 J",
        "16.2 J",
        "26.2 J",
        "36.0 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 16.2 J. Use the energy balance with a non-conservative force: KE<sub>i</sub> + PE<sub>i</sub> + W<sub>nc</sub> = KE<sub>f</sub> + PE<sub>f</sub>. The initial KE is ½(2.0)(6.0)² = 36 J. Rising 0.50 m raises the PE by mgh = (2.0)(9.8)(0.50) = 9.8 J, and friction does W<sub>nc</sub> = −10 J. So KE<sub>f</sub> = 36 − 9.8 − 10 = 16.2 J.\n\n(A) is wrong because 46.0 J is 36 + 10: it adds friction's 10 J instead of subtracting it, and it also leaves out the 9.8 J gained as PE.\n(C) is wrong because 26.2 J is 36 − 9.8: it subtracts only the PE gain and misses friction's 10 J.\n(D) is wrong because 36.0 J is the initial KE, as if the object had neither gained height nor lost energy to friction."
    },
    {
      "id": "3-53",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "Which of the following pairs correctly separates a conservative force from a non-conservative force?",
      "choices": [
        "Both gravity and kinetic friction are conservative.",
        "Both gravity and kinetic friction are non-conservative.",
        "Gravity (conservative); kinetic friction (non-conservative)",
        "Kinetic friction (conservative); gravity (non-conservative)"
      ],
      "correct": 2,
      "explanation": "Correct: (C) Gravity (conservative); kinetic friction (non-conservative). A conservative force does work that depends only on the endpoints of the path, and its energy can be recovered; gravity does this, with PE = mgh. Kinetic friction dissipates mechanical energy as heat, and the work it does depends on the path length (W = −fd), so it is non-conservative.\n\n(A) is wrong because it calls friction conservative; a block slid back and forth over a rough floor never recovers the energy friction took, so the work depends on the path.\n(B) is wrong because it calls gravity non-conservative, but a ball thrown up returns to its starting height with the same speed it left with (ignoring drag), so its energy is fully recovered.\n(D) is wrong because it reverses the correct classification, calling friction conservative and gravity non-conservative, the opposite of what these forces actually do."
    },
    {
      "id": "3-54",
      "topic": "3.5 Non-Conservative Forces",
      "stem": "A 3.0 kg object starts at rest at the top of a 5.0 m ramp with friction. Friction does −60 J of work on it as it slides down. Find its kinetic energy at the bottom.",
      "choices": [
        "207 J",
        "87 J",
        "147 J",
        "27 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 87 J. The object starts at rest at the top, so the initial energy is entirely gravitational potential energy: mgh = (3.0)(9.8)(5.0) = 147 J. Taking the bottom as h = 0, all of that would become kinetic energy except what friction takes away: KE<sub>f</sub> = E<sub>i</sub> + W<sub>nc</sub> = 147 + (−60) = 87 J. Friction's work is negative because it opposes the motion.\n\n(A) is wrong because 207 J adds the friction loss, 147 + 60, instead of subtracting it, which would mean friction gave the object energy.\n(C) is wrong because 147 J ignores friction entirely and treats all of the gravitational potential energy as converted to kinetic energy.\n(D) is wrong because 27 J subtracts the 60 J twice (147 − 60 − 60), but the friction work of −60 J is counted only once."
    },
    {
      "id": "3-55",
      "topic": "3.6 Power",
      "stem": "A motor does 1200 J of work in 6.0 s. Find its average power.",
      "choices": [
        "1206 W",
        "7.2 W",
        "7200 W",
        "200 W"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 200 W. Average power is the rate of doing work, P = W/t. The motor does 1200 J of work in 6.0 s, so P = 1200 J ÷ 6.0 s = 200 J/s = 200 W, since one watt is one joule per second. The question asks for a rate, which signals a division of work by time.\n\n(A) is wrong because 1206 W adds the work and the time, which have different units (joules and seconds) and cannot be added; power is their quotient, which is 200 W.\n(B) is wrong because 7.2 W does not come from dividing work by time; the correct quotient 1200 ÷ 6.0 gives 200, far larger than 7.2.\n(C) is wrong because 7200 W multiplies the work by the time (1200 × 6.0), but a product of joules and seconds is not a power; dividing gives 200 W."
    },
    {
      "id": "3-56",
      "topic": "3.6 Power",
      "stem": "A force of 500 N acts on an object moving at a constant 15 m/s in the same direction as the force. Find the power delivered.",
      "choices": [
        "515 W",
        "3750 W",
        "33 W",
        "7500 W"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 7500 W. Power for a force acting on a moving object is P = Fv·cosθ. The force and velocity point the same way, so θ = 0° and cosθ = 1, giving P = (500 N)(15 m/s) = 7500 W.\n\n(A) is wrong because 515 W adds the numbers, but force and speed are multiplied.\n(B) is wrong because 3750 W is half the correct product, from an extra factor of ½ (that factor belongs to KE, not power).\n(C) is wrong because 33 W is F/v = 500/15, which divides instead of multiplies."
    },
    {
      "id": "3-57",
      "topic": "3.6 Power",
      "stem": "Two motors do the exact same amount of total work, but Motor A takes half the time of Motor B to do it. Compare their average power outputs.",
      "choices": [
        "Cannot be determined without knowing the actual work done.",
        "Both motors have equal power.",
        "Motor A has twice the power of Motor B.",
        "Motor A has half the power of Motor B."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Motor A has twice the power of Motor B. Average power is P = W/t. The work W is the same for both, so power is inversely proportional to time. Motor A takes t/2, so P<sub>A</sub> = W/(t/2) = 2W/t = 2P<sub>B</sub>.\n\n(A) is wrong because the actual work cancels in the ratio, so it is not needed.\n(B) is wrong because equal work in different times means different power.\n(D) is wrong because the motor doing the job in less time has more power, not less, so this inverts the relationship."
    },
    {
      "id": "3-58",
      "topic": "3.6 Power",
      "stem": "A device delivers 400 W of power while doing 8000 J of work. Find how long this takes.",
      "choices": [
        "3,200,000 s",
        "20 s",
        "400 s",
        "50 s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 20 s. Power is the rate of doing work, P = W/t, so t = W/P = 8000 J / 400 W = 20 s. Check the units: J divided by J/s gives s.\n\n(A) is wrong because 3,200,000 s multiplies W by P, but time requires dividing.\n(C) is wrong because 400 is the power in watts, not a time.\n(D) is wrong because 50 s is 400/8, which drops the three zeros from 8000 J; the correct quotient 8000/400 is 20 s."
    },
    {
      "id": "3-59",
      "topic": "3.6 Power",
      "stem": "A motor operates at a constant 250 W for 12 s. Find the total work done.",
      "choices": [
        "3000 J",
        "30,000 J",
        "262 J",
        "20.8 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 3000 J. The work done at a constant power is W = Pt, because power is the rate of doing work and 1 W = 1 J/s. With P = 250 W and t = 12 s, W = (250 W)(12 s) = 3000 J. The units work out because watts times seconds gives joules, the unit of work.\n\n(B) is wrong because 30,000 J is ten times too large, which is what a decimal slip in multiplying 250 by 120 would give; 250 × 12 is 3000.\n(C) is wrong because 262 adds the numbers 250 and 12, which have different units (watts and seconds) and cannot be added.\n(D) is wrong because 20.8 is P/t = 250 ÷ 12, dividing instead of multiplying; since power is work per time, work is power times time, giving 3000 J."
    },
    {
      "id": "3-60",
      "topic": "3.6 Power",
      "stem": "A car engine maintains constant power output while the car speeds up. As speed increases, what must happen to the force the engine provides?",
      "choices": [
        "It must increase, to maintain the same power.",
        "Force and power are unrelated to each other.",
        "It must decrease to keep power constant.",
        "It stays exactly the same."
      ],
      "correct": 2,
      "explanation": "Since P = Fv, and P is held constant, force and velocity must be inversely proportional — as the car speeds up (v increases), the force the engine can sustain at that same power level must decrease. This is part of why cars tend to accelerate more slowly at higher speeds even under full engine power."
    },
    {
      "id": "3-61",
      "topic": "3.6 Power",
      "stem": "A 300 N force is applied at 60° to an object's velocity of 10 m/s. Find the instantaneous power delivered. (cos60°=0.50)",
      "choices": [
        "150 W",
        "1732 W",
        "3000 W",
        "1500 W"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 1500 W. When the force is not parallel to the velocity, only the component along the velocity delivers power: P = Fv·cosθ. With cos60° = 0.50, P = (300 N)(10 m/s)(0.50) = 1500 W.\n\n(A) is wrong because 150 W is off by a factor of ten from the correct multiplication.\n(B) is wrong because 1732 W is (3000)(0.577), where 0.577 = tan30° = cos60°/sin60° rather than cos60° = 0.50.\n(C) is wrong because 3000 W ignores the angle, treating all the force as parallel to the velocity."
    },
    {
      "id": "3-62",
      "topic": "3.6 Power",
      "stem": "A constant force acts on an object in the direction of its motion. If the object's speed doubles while the force stays the same, how does the instantaneous power change?",
      "choices": [
        "It stays the same.",
        "It quadruples.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It doubles. For a force along the motion, the angle between force and velocity is θ = 0°, so the instantaneous power is P = Fv cos 0° = Fv. With F fixed, the power is directly proportional to the speed, so doubling v gives P = F(2v) = 2Fv, twice the original. The clue is that the force is constant and in the direction of motion.\n\n(A) is wrong because speed appears directly in the power formula P = Fv, so a change in speed with a fixed force necessarily changes the power.\n(B) is wrong because quadrupling applies to quantities such as kinetic energy that depend on v², but the power depends on v to the first power when the force is constant.\n(C) is wrong because a higher speed with the same force gives more power, not less; the force does work faster when the object moves faster."
    },
    {
      "id": "3-63",
      "topic": "3.6 Power",
      "stem": "A device operates at a constant 2000 W for 30 s. Find the total energy it delivers.",
      "choices": [
        "60,000 J",
        "66.7 J",
        "6000 J",
        "2030 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 60,000 J. A device that delivers energy at a constant rate of 2000 W transfers 2000 J every second, so over 30 s the total is E = Pt = (2000 W)(30 s) = 60,000 J.\n\n(B) is wrong because 66.7 is P/t = 2000/30, dividing instead of multiplying.\n(C) is wrong because 6000 J is a factor of ten too small.\n(D) is wrong because 2030 adds the numbers, but power and time are multiplied."
    },
    {
      "id": "3-64",
      "topic": "3.6 Power",
      "stem": "A car's engine force varies throughout a trip as it speeds up, slows down, and speeds up again. What does 'instantaneous power' specifically describe, as opposed to 'average power'?",
      "choices": [
        "The power delivered only at the very end of the trip.",
        "The power delivered at one specific moment in time.",
        "The total energy delivered over the entire trip.",
        "There is no meaningful difference between the two terms."
      ],
      "correct": 1,
      "explanation": "Correct: (B) The power delivered at one specific moment in time. Average power is total work divided by total time, P<sub>avg</sub> = W/Δt, while instantaneous power is the rate at an instant, P = Fv·cosθ, using the force and velocity at that moment. When force and speed vary through a trip, as here, the instantaneous power changes constantly.\n\n(A) is wrong because instantaneous power can be found at any moment, not only the end of the trip.\n(C) is wrong because total energy over the trip is the work, not a power.\n(D) is wrong because the two differ whenever force or speed changes, as in this trip."
    },
    {
      "id": "3-65",
      "topic": "3.6 Power",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A 5.0 kg object starts from rest and is accelerated by a constant force, reaching a speed of 12 m/s after 4.0 s (assume no friction). Find the average power delivered to the object over this time.",
      "choices": [
        "90 W",
        "15 W",
        "180 W",
        "360 W"
      ],
      "correct": 0,
      "explanation": "Using the work-energy theorem, the total work done equals the change in kinetic energy: W = ΔKE = ½(5.0)(12)² − 0 = 360 J. Average power is this total work divided by the total time: P<sub>avg</sub> = W/t = 360/4.0 = 90 W. Note this is the AVERAGE power — the instantaneous power was actually increasing throughout, since P=Fv and v was continuously increasing under the constant force."
    }
  ],
  "4": [
    {
      "id": "4-1",
      "topic": "4.1 Momentum",
      "stem": "Which statement correctly describes momentum?",
      "choices": [
        "A scalar quantity depending only on speed, with no direction attached to it.",
        "A vector quantity combining mass and velocity.",
        "A scalar quantity equal to force times time, with no direction attached to it.",
        "A vector quantity that depends only on mass, with no role for velocity."
      ],
      "correct": 1,
      "explanation": "Correct: (B) A vector quantity combining mass and velocity. Momentum is defined as p = mv. Because velocity is a vector, momentum is too: it has a magnitude (in kg·m/s) and points in the same direction as the velocity. That direction matters when adding momenta of objects moving in different directions.\n\n(A) is wrong because momentum depends on mass as well as speed, and it carries direction.\n(C) is wrong because force times time is impulse, a different quantity (though equal to the change in momentum).\n(D) is wrong because momentum depends on velocity as well as mass, so a fast object has more momentum than a slow one of the same mass."
    },
    {
      "id": "4-2",
      "topic": "4.1 Momentum",
      "stem": "Find the momentum of a 6.0 kg object moving at 4.0 m/s.",
      "choices": [
        "1.5 kg·m/s",
        "96 kg·m/s",
        "10 kg·m/s",
        "24 kg·m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 24 kg·m/s. Momentum is p = mv, the product of mass and velocity. With m = 6.0 kg and v = 4.0 m/s, p = (6.0 kg)(4.0 m/s) = 24 kg·m/s. The units of momentum are kilogram meters per second, and the direction is the direction of the velocity.\n\n(A) is wrong because 1.5 comes from dividing 6.0 by 4.0, but momentum is a product of mass and velocity, not a quotient.\n(B) is wrong because 96 is 6.0 × 4.0², which squares the speed as a kinetic-energy formula would, but momentum depends on the speed to the first power.\n(C) is wrong because 10 adds the two numbers (6.0 + 4.0), but mass and velocity have different units and are multiplied, so the correct value is 24."
    },
    {
      "id": "4-3",
      "topic": "4.1 Momentum",
      "stem": "An object's mass is doubled while its velocity stays the same. How does its momentum change?",
      "choices": [
        "It stays the same.",
        "It doubles.",
        "It is cut in half.",
        "It quadruples."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It doubles. Momentum is p = mv, so with a fixed velocity it is directly proportional to mass. Replacing m by 2m gives p = (2m)v = 2(mv), so the momentum is multiplied by 2.\n\n(A) is wrong because mass is a factor in momentum, so changing it must change p.\n(C) is wrong because more mass gives more momentum, not less.\n(D) is wrong because quadrupling would need a squared dependence on mass, but momentum is linear in mass."
    },
    {
      "id": "4-4",
      "topic": "4.1 Momentum",
      "stem": "An object's velocity is doubled while its mass stays the same. How does its momentum change?",
      "choices": [
        "It stays the same.",
        "It is cut in half.",
        "It quadruples.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It doubles. Momentum p = mv is directly proportional to velocity for a fixed mass, so when the velocity is doubled the momentum becomes m(2v) = 2mv, twice the original value. Compare this with kinetic energy ½mv², which depends on v² and would quadruple under the same change.\n\n(A) is wrong because velocity is a factor in the momentum, so changing the velocity while the mass stays the same necessarily changes p.\n(B) is wrong because greater velocity gives greater momentum, so doubling the velocity cannot cut the momentum in half.\n(C) is wrong because quadrupling is the result for kinetic energy; momentum depends on v to the first power only, so the doubled velocity gives a doubled momentum."
    },
    {
      "id": "4-5",
      "topic": "4.1 Momentum",
      "stem": "An object has a momentum of 30 kg·m/s and a mass of 5.0 kg. Find its speed.",
      "choices": [
        "25 m/s",
        "6.0 m/s",
        "35 m/s",
        "150 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 6.0 m/s. Since p = mv, the speed is v = p/m = (30 kg·m/s)/(5.0 kg) = 6.0 m/s. The units check out: kg·m/s divided by kg leaves m/s.\n\n(A) is wrong because 25 subtracts the mass from the momentum, mixing quantities with different units.\n(C) is wrong because 35 adds the two values, which is also not valid.\n(D) is wrong because 150 multiplies p by m, but to isolate v you must divide."
    },
    {
      "id": "4-6",
      "topic": "4.1 Momentum",
      "stem": "Object A (2.0 kg) has the same momentum as Object B (4.0 kg). If Object A moves at 10 m/s, find Object B's speed.",
      "choices": [
        "2.5 m/s",
        "10 m/s",
        "5.0 m/s",
        "20 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.0 m/s. Momentum is p = mv. Object A has p<sub>A</sub> = (2.0 kg)(10 m/s) = 20 kg·m/s. Object B has the same momentum, so v<sub>B</sub> = p/m<sub>B</sub> = 20/4.0 = 5.0 m/s. For the same momentum a heavier object needs a lower speed, so the answer must be below 10 m/s.\n\n(A) is wrong because 2.5 m/s is 10/4.0, which divides A's speed by B's mass instead of using the momentum.\n(B) is wrong because 10 m/s would give B twice the momentum of A since it has twice the mass.\n(D) is wrong because 20 is A's momentum in kg·m/s, not B's speed."
    },
    {
      "id": "4-7",
      "topic": "4.1 Momentum",
      "stem": "Two objects move directly toward each other. How should their individual momenta be combined to find the total momentum of the system?",
      "choices": [
        "Total momentum cannot be defined for objects moving in different directions.",
        "Simply add the magnitudes together.",
        "Multiply the two momenta together.",
        "Assign opposite signs based on direction, then add algebraically."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Assign opposite signs based on direction, then add algebraically. Momentum is a vector, so for motion along a line you choose a positive direction and give momenta in the opposite direction a negative sign, then add. Objects moving toward each other have momenta that partly cancel.\n\n(A) is wrong because total momentum is well defined for any set of objects, using vector addition.\n(B) is wrong because adding magnitudes ignores direction and overstates the total.\n(C) is wrong because multiplying momenta gives units of (kg·m/s)², which is not a momentum."
    },
    {
      "id": "4-8",
      "topic": "4.1 Momentum",
      "stem": "A 3.0 kg object moves at 4.0 m/s east, and a 5.0 kg object moves at 2.0 m/s east. Find the total momentum of the system.",
      "choices": [
        "2.0 kg·m/s east",
        "34 kg·m/s east",
        "22 kg·m/s east",
        "12 kg·m/s east"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 22 kg·m/s east. The total momentum of a system is the vector sum of each object's mv. Both objects move east, so the momenta add with the same sign: (3.0)(4.0) + (5.0)(2.0) = 12 + 10 = 22 kg·m/s east.\n\n(A) is wrong because 2.0 is the difference of the two momenta (12 − 10), which would apply only if they were in opposite directions.\n(B) is wrong because 34 does not match either product or their sum.\n(D) is wrong because 12 is only the first object's momentum, leaving out the 5.0 kg object."
    },
    {
      "id": "4-9",
      "topic": "4.1 Momentum",
      "stem": "A 3.0 kg object moves at 6.0 m/s east, and a 4.0 kg object moves at 3.0 m/s west. Find the total momentum of the system.",
      "choices": [
        "30 kg·m/s east",
        "6.0 kg·m/s west",
        "6.0 kg·m/s east",
        "0 kg·m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 6.0 kg·m/s east. Choose east as positive. The first object has p = (3.0)(+6.0) = +18 kg·m/s and the second has p = (4.0)(−3.0) = −12 kg·m/s, since it moves west. The total is 18 − 12 = +6.0 kg·m/s, which points east.\n\n(A) is wrong because 30 adds the magnitudes (18 + 12), ignoring that the two momenta are opposite.\n(B) is wrong because west would require the second momentum to be larger, but 12 is smaller than 18.\n(D) is wrong because the momenta have different sizes, so they do not cancel."
    },
    {
      "id": "4-10",
      "topic": "4.1 Momentum",
      "stem": "What is the correct SI unit for momentum?",
      "choices": [
        "kg·m/s",
        "J (joule)",
        "N (newton)",
        "kg·m/s²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) kg·m/s. Momentum is mass times velocity, so its SI unit is kg × m/s = kg·m/s; it is also equal to N·s since impulse equals change in momentum.\n\n(B) is wrong because the joule (kg·m²/s²) is the unit of energy and work.\n(C) is wrong because the newton (kg·m/s²) is the unit of force.\n(D) is wrong because kg·m/s² is the unit of force, with the time squared in the denominator; momentum has only a single power of time."
    },
    {
      "id": "4-11",
      "topic": "4.1 Momentum",
      "stem": "A loaded truck and a small car travel at the exact same speed. The truck has much greater mass than the car. Compare their momenta.",
      "choices": [
        "The car has more momentum, since it's typically faster in practice.",
        "The truck has less momentum, since it's less agile.",
        "The truck has more momentum, due to its greater mass.",
        "They have exactly equal momentum, since they have the same speed."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The truck has more momentum, due to its greater mass. Momentum is p = mv. With the same speed, the larger mass gives the larger momentum, so the truck's momentum is greater than the car's. This is why a loaded truck is much harder to stop than a car going equally fast.\n\n(A) is wrong because the problem says the speeds are exactly the same, so what is typical in practice is irrelevant.\n(B) is wrong because agility has no role in the definition of momentum.\n(D) is wrong because equal speed gives equal momentum only when the masses are equal; here the masses differ greatly."
    },
    {
      "id": "4-12",
      "topic": "4.2 Impulse",
      "stem": "A 40 N force acts on an object for 0.25 s. Find the impulse delivered.",
      "choices": [
        "160 N·s",
        "10 N·s",
        "0.16 N·s",
        "40.25 N·s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 10 N·s. Impulse is the force times the time it acts, J = FΔt, for a constant force. So J = (40 N)(0.25 s) = 10 N·s, which equals 10 kg·m/s.\n\n(A) is wrong because 160 is 40/0.25, dividing instead of multiplying.\n(C) is wrong because 0.16 is not 40 × 0.25 = 10; it looks like 40/0.25 = 160 with the decimal point shifted three places.\n(D) is wrong because 40.25 adds the force to the time, which have different units."
    },
    {
      "id": "4-13",
      "topic": "4.2 Impulse",
      "stem": "An object's momentum changes by 15 kg·m/s over 0.050 s. Find the average force that caused this change.",
      "choices": [
        "0.0033 N",
        "750 N",
        "300 N",
        "0.75 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 300 N. Impulse equals the change in momentum, FΔt = Δp, so the average force is F = Δp/Δt = (15 kg·m/s) ÷ (0.050 s) = 300 N. A short time for a given momentum change requires a large force, which is why this force is much larger than the momentum change number. The units work out because kg·m/s² is a newton.\n\n(A) is wrong because 0.0033 inverts the ratio (0.050 ÷ 15); the force is the momentum change divided by the time, not the time divided by the momentum change.\n(B) is wrong because 750 N does not follow from these numbers; it would require a time of 0.020 s, but the stem gives 0.050 s, and 15 ÷ 0.050 is 300.\n(D) is wrong because 0.75 multiplies the values (15 × 0.050) instead of dividing them, but force is momentum change per unit time."
    },
    {
      "id": "4-14",
      "topic": "4.2 Impulse",
      "stem": "A 2.0 kg object's velocity changes from 3.0 m/s to 9.0 m/s over 0.40 s. Find the average force acting on it.",
      "choices": [
        "15 N",
        "45 N",
        "6.0 N",
        "30 N"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 30 N. The average force is F = Δp/Δt. The momentum change is Δp = m(v<sub>f</sub> − v<sub>i</sub>) = (2.0 kg)(9.0 − 3.0 m/s) = 12 kg·m/s. Then F = 12/0.40 = 30 N.\n\n(A) is wrong because 15 N is 6.0/0.40, which leaves out the 2.0 kg mass (an acceleration, not a force).\n(B) is wrong because 45 N uses the final momentum, 18/0.40, instead of the change in momentum.\n(C) is wrong because 6.0 is the change in velocity in m/s, not a force."
    },
    {
      "id": "4-15",
      "topic": "4.2 Impulse",
      "stem": "An airbag increases the time it takes for a passenger's momentum to reach zero during a crash, compared to hitting the dashboard directly. Explain why this reduces injury.",
      "choices": [
        "The airbag reduces the passenger's momentum before the crash even happens.",
        "The airbag increases Δt for the same Δp, reducing the average force.",
        "The airbag has no actual effect on the physics of the collision.",
        "The airbag reduces the total impulse needed to stop the passenger."
      ],
      "correct": 1,
      "explanation": "The total change in momentum (impulse needed) is the same either way — determined by the passenger's mass and how much their velocity must change. What the airbag changes is the TIME over which that change happens; a longer Δt for the same Δp means a smaller average force, directly reducing the force on the passenger's body."
    },
    {
      "id": "4-16",
      "topic": "4.2 Impulse",
      "stem": "A 300 N force delivers an impulse of 60 N·s. Find the time over which the force acted.",
      "choices": [
        "5.0 s",
        "18,000 s",
        "0.20 s",
        "240 s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.20 s. Impulse for a constant force is J = FΔt, so the time is Δt = J/F = (60 N·s) ÷ (300 N) = 0.20 s. The units work: newton-seconds divided by newtons leaves seconds. A large force acting for only a short time delivers a modest impulse of 60 N·s.\n\n(A) is wrong because 5.0 is F/J = 300 ÷ 60, which inverts the ratio; the time is the impulse divided by the force, which gives 0.20 s.\n(B) is wrong because 18,000 multiplies J by F (60 × 300), but that product has no meaning as a time; impulse divided by force is the quantity needed.\n(D) is wrong because 240 subtracts the values (300 − 60), which mixes unlike units of newtons and newton-seconds and has no physical meaning."
    },
    {
      "id": "4-17",
      "topic": "4.2 Impulse",
      "stem": "For a force that varies over time, what does the area under a force-vs-time graph represent?",
      "choices": [
        "The impulse delivered.",
        "The object's mass.",
        "The object's velocity.",
        "The object's kinetic energy."
      ],
      "correct": 0,
      "explanation": "Correct: (A) The impulse delivered. For a constant force, impulse is J = FΔt, the area of a rectangle on an F-t graph. For a varying force the same idea applies: adding up F·Δt over many small slices gives the total area under the curve, which equals the impulse and the change in momentum. This is like the area under a v-t graph giving displacement.\n\n(B) is wrong because mass cannot be read from an F-t graph.\n(C) is wrong because velocity is read from a v-t graph, and force-time area gives a change in momentum, not velocity.\n(D) is wrong because kinetic energy relates to the area under a force-versus-position graph (work), not force versus time."
    },
    {
      "id": "4-18",
      "topic": "4.2 Impulse",
      "stem": "A force-vs-time graph shows force decreasing linearly from 100 N at t=0 to 0 N at t=1.0 s. Find the impulse delivered over this interval.",
      "choices": [
        "200 N·s",
        "25 N·s",
        "100 N·s",
        "50 N·s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 50 N·s. Impulse is the area under the F-t graph. A force falling linearly from 100 N to 0 over 1.0 s forms a right triangle with base 1.0 s and height 100 N, so J = ½(base)(height) = ½(1.0)(100) = 50 N·s.\n\n(A) is wrong because 200 N·s is twice the rectangle area; it uses a factor of 2 where ½ belongs.\n(B) is wrong because 25 N·s takes half of the triangle area again.\n(C) is wrong because 100 N·s is the area of the full rectangle (100 × 1.0), which ignores the force decreasing to zero."
    },
    {
      "id": "4-19",
      "topic": "4.2 Impulse",
      "stem": "A baseball player catches a fast-moving ball and pulls their hand backward while catching it, rather than holding it rigidly still. Explain why this technique reduces the force on their hand.",
      "choices": [
        "Pulling the hand back increases the force needed to stop the ball.",
        "Pulling the hand back has no effect on the force experienced.",
        "Pulling the hand back increases the collision time, lowering the force.",
        "Pulling the hand back reduces the ball's momentum before it's caught."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Pulling the hand back increases the collision time, lowering the force. The ball's momentum must change by the same amount (from its speed to zero) whichever way it is caught, so the impulse FΔt = Δp is fixed. Stretching the stopping time Δt makes the average force F = Δp/Δt smaller, as with airbags and bending your knees on landing.\n\n(A) is wrong because a longer stopping time lowers the force, not raises it.\n(B) is wrong because the time of the collision directly affects the force for the same Δp.\n(D) is wrong because the ball's momentum before the catch is set by its mass and speed; the hand's motion cannot change it before contact."
    },
    {
      "id": "4-20",
      "topic": "4.2 Impulse",
      "stem": "A 0.20 kg ball moving at 8.0 m/s hits a wall and bounces straight back at 6.0 m/s. Find the impulse delivered to the ball (taking the ball's original direction as positive).",
      "choices": [
        "−4.0 kg·m/s",
        "+0.40 kg·m/s",
        "−2.8 kg·m/s",
        "−0.40 kg·m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) −2.8 kg·m/s. Impulse equals the change in momentum, J = Δp = m(v<sub>f</sub> − v<sub>i</sub>). Taking the original direction as positive, v<sub>i</sub> = +8.0 m/s and the bounce reverses it, so v<sub>f</sub> = −6.0 m/s. Then J = 0.20(−6.0 − 8.0) = 0.20(−14) = −2.8 kg·m/s. The negative sign shows that the wall's push on the ball points opposite its original motion.\n\n(A) is wrong because −4.0 does not follow from the numbers and is a miscalculation.\n(B) is wrong because +0.40 is 0.20(8.0 − 6.0), which treats the ball as continuing in the same direction at a lower speed.\n(D) is wrong because −0.40 makes the same mistake with the sign flipped; the velocity reverses, so the speeds add."
    },
    {
      "id": "4-21",
      "topic": "4.2 Impulse",
      "stem": "Using the collision from the previous question, find the impulse delivered to the WALL by the ball.",
      "choices": [
        "0 kg·m/s",
        "+2.8 kg·m/s",
        "+14 kg·m/s",
        "−2.8 kg·m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) +2.8 kg·m/s. By Newton's third law, the wall pushes on the ball and the ball pushes on the wall with equal and opposite forces for the same time interval, so the impulses are equal and opposite. The ball received −2.8 kg·m/s, so the wall receives +2.8 kg·m/s, in the ball's original direction.\n\n(A) is wrong because the wall does receive an impulse from the ball, even if it barely moves because of its huge mass.\n(C) is wrong because +14 is the change in the ball's velocity in m/s; impulse needs the factor of mass (0.20 kg).\n(D) is wrong because −2.8 is the impulse on the ball, so it has the wrong sign for the wall."
    },
    {
      "id": "4-22",
      "topic": "4.2 Impulse",
      "stem": "Two different force-time graphs both enclose the exact same total area, though one has a much higher peak force over a shorter time and the other has a lower, more sustained force over a longer time. Compare the impulse delivered in each case.",
      "choices": [
        "The high-peak, short-duration graph delivers more impulse.",
        "The low-peak, long-duration graph delivers more impulse.",
        "Both deliver exactly the same impulse — the areas are equal.",
        "Impulse cannot be compared without knowing the object's mass."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Both deliver exactly the same impulse — the areas are equal. Impulse is defined as the area under an F-t graph, whatever the shape. A tall, narrow spike and a low, wide plateau can enclose the same area, so they deliver the same impulse and the same change in momentum. The peak forces differ, but the product of force and time is the same.\n\n(A) is wrong because a higher peak does not mean more impulse when the duration is shorter.\n(B) is wrong because a longer duration does not give more impulse when the force is lower.\n(D) is wrong because impulse is read directly from the area; the mass would only be needed to find the resulting velocity change."
    },
    {
      "id": "4-23",
      "topic": "4.3 Conservation of Momentum",
      "stem": "Under what condition is the total momentum of a system conserved?",
      "choices": [
        "Whenever there is no net external force acting on the system.",
        "Momentum is never actually conserved in real systems.",
        "Only when all collisions within the system are elastic.",
        "Only when all objects in the system have equal mass."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Whenever there is no net external force acting on the system. The total momentum of a system changes only through impulse from external forces. Internal forces (collisions, pushes, explosions between the objects) come in equal and opposite pairs and cancel in the total. So with zero net external force, p<sub>total</sub> stays constant.\n\n(B) is wrong because momentum is conserved in any isolated system, and in practice in short collisions where external forces are small.\n(C) is wrong because momentum is conserved in elastic and inelastic collisions; only kinetic energy depends on that.\n(D) is wrong because the masses of the objects do not matter for conservation."
    },
    {
      "id": "4-24",
      "topic": "4.3 Conservation of Momentum",
      "stem": "A 5.0 kg cart moving at 6.0 m/s collides and sticks with a stationary 3.0 kg cart. Find their combined final velocity.",
      "choices": [
        "2.25 m/s",
        "6.0 m/s",
        "3.75 m/s",
        "10 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.75 m/s. The carts stick together, so this is a perfectly inelastic collision with momentum conserved: m₁v₁ + m₂v₂ = (m₁ + m₂)v<sub>f</sub>. Substituting, (5.0)(6.0) + (3.0)(0) = (8.0)v<sub>f</sub>, so 30 = 8.0v<sub>f</sub> and v<sub>f</sub> = 3.75 m/s. The final speed must be below 6.0 m/s because the moving cart must now also push the extra 3.0 kg.\n\n(A) is wrong because 2.25 m/s is (3.0)(6.0)/8.0, which uses the stationary cart's mass instead of the moving cart's in the momentum.\n(B) is wrong because 6.0 m/s would mean the added mass did not slow the cart, violating momentum conservation.\n(D) is wrong because 10 m/s is 30/3.0, dividing by only the stationary cart's mass; it is also faster than the original speed."
    },
    {
      "id": "4-25",
      "topic": "4.3 Conservation of Momentum",
      "stem": "Two carts collide on a track that has significant friction with the ground. Is momentum of the two-cart system still exactly conserved during the collision?",
      "choices": [
        "Yes, always, regardless of friction, since momentum is a conserved quantity in every case.",
        "Momentum conservation only applies to frictionless systems in all cases.",
        "No, momentum is never conserved when friction is present anywhere in the system.",
        "No — momentum conservation requires friction to be negligible during the collision."
      ],
      "correct": 3,
      "explanation": "Friction from the ground is an EXTERNAL force on the two-cart system, and if it's significant, it violates the 'no net external force' condition needed for momentum conservation. In practice, collisions typically happen so quickly that friction's effect during the collision itself is negligible, even if it matters over the longer timescale of the carts' full motion."
    },
    {
      "id": "4-26",
      "topic": "4.3 Conservation of Momentum",
      "stem": "A 12 kg object at rest explodes into two pieces. One piece, 5.0 kg, moves at 8.0 m/s in one direction. Find the speed of the other 7.0 kg piece.",
      "choices": [
        "11.2 m/s",
        "8.0 m/s",
        "4.4 m/s",
        "5.7 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 5.7 m/s. The object is at rest, so the total momentum before is zero, and it must stay zero after the explosion: (5.0)(8.0) + (7.0)v₂ = 0. Then v₂ = −40/7.0 = −5.71 m/s, so the 7.0 kg piece moves at about 5.7 m/s in the opposite direction. The heavier piece moves slower.\n\n(A) is wrong because 11.2 m/s comes from inverting the mass ratio (8.0 × 7.0/5.0).\n(B) is wrong because 8.0 m/s would give the larger mass the same speed, so the momenta would not balance.\n(C) is wrong because 4.4 m/s does not follow from 40/7.0 and is too small to balance the momentum of the 5.0 kg piece."
    },
    {
      "id": "4-27",
      "topic": "4.3 Conservation of Momentum",
      "stem": "In a collision between two objects, is it possible for momentum to be conserved while kinetic energy is not?",
      "choices": [
        "Yes — this describes exactly what happens in an inelastic collision.",
        "No, this would violate conservation of energy entirely, in any collision.",
        "No — if momentum is conserved, kinetic energy must be conserved too.",
        "Only if the objects have equal mass and equal speed before the collision."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Yes — this describes exactly what happens in an inelastic collision. Momentum conservation depends only on there being no net external force on the system, while kinetic energy conservation additionally requires the collision to be elastic. In an inelastic collision some kinetic energy becomes heat, sound, or deformation, although the vector sum of the momenta stays the same. A perfectly inelastic collision, where the objects stick together, loses the most kinetic energy possible.\n\n(B) is wrong because total energy is still conserved in every collision; only the mechanical (kinetic) part decreases while the rest appears as thermal energy, so no law is violated.\n(C) is wrong because the two conservation laws are independent: momentum is conserved whenever the external force is zero, but kinetic energy is conserved only in elastic collisions.\n(D) is wrong because no special masses or speeds are required; an inelastic collision between any objects conserves momentum while losing kinetic energy."
    },
    {
      "id": "4-28",
      "topic": "4.3 Conservation of Momentum",
      "stem": "A 3.0 kg object moving at 5.0 m/s collides and sticks with a stationary 2.0 kg object. Find their combined final velocity.",
      "choices": [
        "2.0 m/s",
        "5.0 m/s",
        "3.0 m/s",
        "4.0 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.0 m/s. The objects stick together, so momentum conservation gives m₁v₁ + m₂v₂ = (m₁ + m₂)v<sub>f</sub>. Thus (3.0)(5.0) + (2.0)(0) = (5.0)v<sub>f</sub>, so 15 = 5.0v<sub>f</sub> and v<sub>f</sub> = 3.0 m/s. The combined speed is lower than 5.0 m/s because the same momentum is spread over more mass.\n\n(A) is wrong because 2.0 m/s is (2.0)(5.0)/5.0, which uses the stationary object's mass instead of the moving object's in the momentum.\n(B) is wrong because 5.0 m/s would mean the added mass did not slow the system, violating momentum conservation.\n(D) is wrong because 4.0 m/s would give a total momentum of 20 kg·m/s, more than the 15 present before."
    },
    {
      "id": "4-29",
      "topic": "4.3 Conservation of Momentum",
      "stem": "Explain, using conservation of momentum, why a rifle recoils backward when a bullet is fired.",
      "choices": [
        "The rifle recoils due to air resistance pushing back on the bullet.",
        "Recoil is unrelated to momentum and is caused entirely by the explosive force of the gunpowder.",
        "The rifle recoils because the bullet is heavier than the rifle.",
        "The rifle gains momentum opposite the bullet's, keeping the total at zero."
      ],
      "correct": 3,
      "explanation": "Before firing, the rifle-bullet system is at rest, with zero total momentum. Since momentum must be conserved (internal explosive forces only, no significant external force during firing), the rifle must recoil backward with momentum exactly equal and opposite to the bullet's forward momentum, keeping the total at zero."
    },
    {
      "id": "4-30",
      "topic": "4.3 Conservation of Momentum",
      "stem": "A 0.020 kg bullet is fired at 400 m/s from a 4.0 kg gun initially at rest. Find the gun's recoil speed.",
      "choices": [
        "20 m/s",
        "2.0 m/s",
        "0.5 m/s",
        "5.0 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 2.0 m/s. The gun and bullet start at rest, so the total momentum is zero and stays zero. The bullet's momentum is (0.020 kg)(400 m/s) = 8.0 kg·m/s forward, so the gun must have 8.0 kg·m/s backward: (4.0)V = −8.0 and V = −2.0 m/s. The recoil speed is 2.0 m/s.\n\n(A) is wrong because 20 m/s is ten times too large, a decimal error.\n(C) is wrong because 0.5 m/s comes from dividing the wrong way (2.0/4.0) and does not balance the momentum.\n(D) is wrong because 5.0 m/s would require a recoil momentum of 20 kg·m/s."
    },
    {
      "id": "4-31",
      "topic": "4.3 Conservation of Momentum",
      "stem": "Two skaters, initially at rest, push off from each other. Skater A has more mass than Skater B. Compare their resulting speeds.",
      "choices": [
        "Skater B (less massive) ends up moving faster.",
        "Neither skater moves, since they started at rest.",
        "Both skaters end up moving at the same speed.",
        "Skater A (more massive) ends up moving faster."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Skater B (less massive) ends up moving faster. The skaters start at rest, so the total momentum is zero and must remain zero. Therefore their momenta are equal in size and opposite in direction: m<sub>A</sub>v<sub>A</sub> = m<sub>B</sub>v<sub>B</sub>. If m<sub>A</sub> is greater than m<sub>B</sub>, then v<sub>B</sub> = (m<sub>A</sub>/m<sub>B</sub>)v<sub>A</sub>, which exceeds v<sub>A</sub>, so the lighter skater moves faster.\n\n(B) is wrong because the push is an internal force that gives the skaters equal and opposite momenta; their total stays zero but each skater still moves.\n(C) is wrong because equal speeds would give the more massive skater the larger momentum, and the total would no longer be zero as conservation requires.\n(D) is wrong because it reverses the correct relationship; the more massive skater needs the smaller speed to have the same momentum magnitude as the lighter skater."
    },
    {
      "id": "4-32",
      "topic": "4.3 Conservation of Momentum",
      "stem": "Two skaters push off from rest. The 40 kg skater moves away at 3.5 m/s. Find the speed of the 70 kg skater.",
      "choices": [
        "6.1 m/s",
        "2.0 m/s",
        "3.5 m/s",
        "1.4 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 2.0 m/s. Starting from rest, total momentum is zero, so the momenta are equal and opposite: (40 kg)(3.5 m/s) = (70 kg)v. Then v = 140/70 = 2.0 m/s. The heavier skater moves slower, so the answer is less than 3.5 m/s.\n\n(A) is wrong because 6.1 m/s inverts the mass ratio (3.5 × 70/40).\n(C) is wrong because 3.5 m/s would give the heavier skater more momentum than the lighter one.\n(D) is wrong because 1.4 m/s is too small; it does not satisfy the 140 kg·m/s momentum balance."
    },
    {
      "id": "4-33",
      "topic": "4.3 Conservation of Momentum",
      "stem": "In a two-object collision, the individual velocities of both objects change. What, if anything, stays exactly the same before and after, for an isolated system?",
      "choices": [
        "Each individual object's kinetic energy.",
        "The system's total momentum (vector sum).",
        "Each individual object's velocity.",
        "Nothing stays the same in a collision."
      ],
      "correct": 1,
      "explanation": "Correct: (B) The system's total momentum (vector sum). In an isolated system, the internal forces between the colliding objects are equal and opposite (Newton's third law), so they change each object's momentum by equal and opposite amounts and the total p<sub>1</sub> + p<sub>2</sub> stays constant. Individual velocities change, and so do kinetic energies unless the collision is elastic.\n\n(A) is wrong because each object's kinetic energy changes in a collision as energy is transferred between them, so an individual object's kinetic energy is not preserved.\n(C) is wrong because the stem itself says the velocities of both objects change, so the individual velocities cannot be the quantity that stays the same.\n(D) is wrong because total momentum is conserved for an isolated system in any collision, so something does stay the same."
    },
    {
      "id": "4-34",
      "topic": "4.4 Elastic Collisions",
      "stem": "What distinguishes an elastic collision from other types of collisions?",
      "choices": [
        "Both momentum and kinetic energy are conserved.",
        "Only kinetic energy is conserved.",
        "Only momentum is conserved.",
        "Neither momentum nor kinetic energy is conserved."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Both momentum and kinetic energy are conserved. Momentum is conserved in every collision of an isolated system, so it cannot be what makes a collision special. A collision is elastic when, in addition, no kinetic energy is converted to heat, sound or deformation, so total KE before equals total KE after.\n\n(B) is wrong because momentum is conserved in elastic collisions too; both laws hold.\n(C) is wrong because momentum alone is conserved in inelastic collisions, the opposite case.\n(D) is wrong because momentum is conserved in all isolated collisions."
    },
    {
      "id": "4-35",
      "topic": "4.4 Elastic Collisions",
      "stem": "A 3.0 kg ball moving at 8.0 m/s collides elastically with an identical, stationary 3.0 kg ball. Find the final velocities of both balls.",
      "choices": [
        "The first ball moves at 8.0 m/s; the second stays at rest.",
        "Both move at 4.0 m/s.",
        "The first ball stops (0 m/s); the second moves at 8.0 m/s.",
        "Both move at 8.0 m/s."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The first ball stops (0 m/s); the second moves at 8.0 m/s. For an elastic collision with equal masses and one at rest, the balls exchange velocities. Check: momentum before is (3.0)(8.0) = 24 kg·m/s and after is (3.0)(0) + (3.0)(8.0) = 24 kg·m/s; KE before is ½(3.0)(8.0)² = 96 J and after is 0 + 96 J = 96 J. Both are conserved.\n\n(A) is wrong because the first ball would keep moving at 8.0 m/s while the second stays at rest, meaning the balls passed through each other.\n(B) is wrong because momentum is conserved (3.0 × 4.0 × 2 = 24) but KE becomes only 48 J, so it is not elastic.\n(D) is wrong because the final momentum would be 48 kg·m/s, double the initial 24, violating momentum conservation."
    },
    {
      "id": "4-36",
      "topic": "4.4 Elastic Collisions",
      "stem": "How can you verify, using calculated before-and-after values, whether a given collision was actually elastic?",
      "choices": [
        "Check whether momentum was conserved, since it always is in a collision.",
        "Check whether the objects have equal mass, since that decides whether it is elastic.",
        "Check whether total kinetic energy before equals total kinetic energy after.",
        "Check whether the objects moved in the same direction after colliding."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Check whether total kinetic energy before equals total kinetic energy after. Momentum is conserved in every isolated collision, so it cannot distinguish elastic from inelastic. The test is whether the total KE is the same before and after, since the elastic condition is that no KE is converted to other forms.\n\n(A) is wrong because checking momentum alone gives the same result for every collision.\n(B) is wrong because equal masses do not make a collision elastic; two equal clay balls that stick together are not elastic.\n(D) is wrong because the direction of motion afterward does not decide the energy balance."
    },
    {
      "id": "4-37",
      "topic": "4.4 Elastic Collisions",
      "stem": "A 2.0 kg object moving at 6.0 m/s collides with an identical stationary 2.0 kg object; afterward, the first object is at rest and the second moves at 6.0 m/s. Verify this is consistent with an elastic collision by comparing kinetic energy before and after.",
      "choices": [
        "KE cannot be determined without more information about the masses.",
        "KE_before = 36 J; KE_after = 36 J — consistent with elastic.",
        "KE_before = 36 J; KE_after = 18 J — not elastic, energy was lost.",
        "KE_before = 18 J; KE_after = 36 J — not possible without outside work."
      ],
      "correct": 1,
      "explanation": "Correct: (B) KE<sub>before</sub> = 36 J; KE<sub>after</sub> = 36 J — consistent with elastic. Before the collision, only the first object moves: KE = ½(2.0)(6.0)² = ½(2.0)(36) = 36 J. After, the first is at rest and the second moves at 6.0 m/s: KE = 0 + ½(2.0)(6.0)² = 36 J. Equal kinetic energy before and after is the elastic test (momentum is also conserved: 12 kg·m/s both times).\n\n(A) is wrong because the masses are given (2.0 kg each).\n(C) is wrong because 18 J would come from using half the mass (½(1.0)(6.0)²), not from these numbers; halving the speed would give 9 J.\n(D) is wrong because KE before is 36 J, not 18 J, and energy does not increase."
    },
    {
      "id": "4-38",
      "topic": "4.4 Elastic Collisions",
      "stem": "In an elastic collision between two objects of DIFFERENT masses, does the equal-mass 'velocity swap' result still apply?",
      "choices": [
        "Yes, the velocities always swap regardless of mass.",
        "No — the swap only applies to equal masses.",
        "Only if the lighter object is initially at rest.",
        "Only if the heavier object is initially at rest."
      ],
      "correct": 1,
      "explanation": "Correct: (B) No — the swap only applies to equal masses. The velocity-exchange result comes from solving momentum and kinetic energy conservation together for m₁ = m₂, with one object at rest. With unequal masses, the final velocities depend on the mass ratio; for example, a heavy object hitting a light one barely slows down, while a light object bouncing off a heavy one reverses.\n\n(A) is wrong because swapping would not conserve momentum for different masses.\n(C) is wrong because the mass of the object at rest does not rescue the swap.\n(D) is wrong because it fails for the same reason when the heavier object is at rest."
    },
    {
      "id": "4-39",
      "topic": "4.4 Elastic Collisions",
      "stem": "A very light ball collides elastically with a much heavier, stationary object (like a wall). Describe what happens, approximately, to the ball and to the heavy object.",
      "choices": [
        "The ball stops completely; the heavy object moves away quickly from the point of impact.",
        "The ball rebounds at nearly its original speed; the heavy object barely moves.",
        "Both objects move off at half the ball's original speed, in the same direction.",
        "The ball and the heavy object end up moving at the same final velocity."
      ],
      "correct": 1,
      "explanation": "In the limit of a very large mass ratio, an elastic collision leaves the light object rebounding at nearly its original speed (just reversed in direction), while the much heavier object gains only a tiny, often negligible, velocity — this is a good approximate model for a ball bouncing elastically off a wall."
    },
    {
      "id": "4-40",
      "topic": "4.4 Elastic Collisions",
      "stem": "A 1.0 kg object moving at 6.0 m/s collides with a stationary 3.0 kg object. Afterward, the 1.0 kg object moves at −3.0 m/s and the 3.0 kg object moves at 3.0 m/s. Is this collision elastic?",
      "choices": [
        "Cannot be determined without additional data about the masses and speeds.",
        "No, since the first object reversed direction during the collision.",
        "Yes — kinetic energy before (18 J) equals kinetic energy after (18 J).",
        "No, since momentum wasn't conserved during the collision."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Yes — kinetic energy before (18 J) equals kinetic energy after (18 J). An elastic collision needs both momentum and KE conserved. Momentum: before (1.0)(6.0) = 6.0 kg·m/s; after (1.0)(−3.0) + (3.0)(3.0) = −3.0 + 9.0 = 6.0 kg·m/s, conserved. KE: before ½(1.0)(6.0)² = 18 J; after ½(1.0)(3.0)² + ½(3.0)(3.0)² = 4.5 + 13.5 = 18 J, conserved.\n\n(A) is wrong because all the needed data (masses and speeds) are in the stem.\n(B) is wrong because reversing direction is normal when a light object hits a heavier one, and does not indicate inelasticity.\n(D) is wrong because momentum was conserved at 6.0 kg·m/s before and after."
    },
    {
      "id": "4-41",
      "topic": "4.4 Elastic Collisions",
      "stem": "In an elastic collision where a moving object strikes an identical stationary object, is it possible for the two objects to have the same nonzero final velocity?",
      "choices": [
        "Yes, but only for very slow collisions between two objects of equal mass.",
        "Yes, this is the typical elastic outcome for any pair of colliding objects.",
        "No — equal masses swap velocities fully, not evenly.",
        "This can only be determined with specific numbers for the masses and speeds."
      ],
      "correct": 2,
      "explanation": "If both objects had the same final velocity after an equal-mass elastic collision, that would actually describe a perfectly INELASTIC collision (they'd effectively be moving together) — which doesn't conserve kinetic energy for a moving-object-hits-stationary-object setup. The correct elastic result for equal masses is a full swap, not a shared final velocity."
    },
    {
      "id": "4-42",
      "topic": "4.4 Elastic Collisions",
      "stem": "A 4.0 kg ball moving at 5.0 m/s collides elastically with an identical, stationary 4.0 kg ball. Find the total kinetic energy after the collision.",
      "choices": [
        "50 J",
        "100 J",
        "0 J",
        "25 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 50 J. In an elastic collision, total kinetic energy is conserved. Before: only the moving ball has KE = ½(4.0)(5.0)² = 50 J. After the collision the total must still be 50 J; by the equal-mass result, the first ball stops and the second moves at 5.0 m/s, giving ½(4.0)(5.0)² = 50 J.\n\n(B) is wrong because 100 J is twice the energy available, which would create energy.\n(C) is wrong because 0 J would mean all the KE disappeared, which is not elastic.\n(D) is wrong because 25 J would mean half of the KE was lost, which is an inelastic result."
    },
    {
      "id": "4-43",
      "topic": "4.4 Elastic Collisions",
      "stem": "What single additional piece of information distinguishes an elastic collision from a generic collision, in terms of the conservation laws that apply?",
      "choices": [
        "Conservation of mass.",
        "Conservation of kinetic energy, in addition to momentum.",
        "Conservation of force.",
        "Conservation of momentum, which only applies to elastic collisions."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Conservation of kinetic energy, in addition to momentum. Momentum is conserved in every collision of an isolated system, elastic or not. The extra condition that defines an elastic collision is that the total kinetic energy is also the same before and after, so no energy is lost to heat, sound, or deformation. This extra condition is what lets you solve for final velocities using both equations.\n\n(A) is wrong because mass is conserved in all collisions at this level, so it does not distinguish an elastic collision from any other.\n(C) is wrong because force is not a conserved quantity; forces appear and vanish during the contact, and there is no law of conservation of force.\n(D) is wrong because momentum conservation is not limited to elastic collisions; it holds for inelastic collisions too, so it cannot be the distinguishing feature."
    },
    {
      "id": "4-44",
      "topic": "4.4 Elastic Collisions",
      "stem": "A 0.50 kg ball moving at 12 m/s bounces elastically off an extremely massive, stationary wall. Find the ball's speed and kinetic energy immediately after the bounce.",
      "choices": [
        "Speed 0 m/s; KE 0 J",
        "Speed 12 m/s; KE 36 J",
        "Speed 24 m/s; KE 144 J",
        "Speed 6.0 m/s; KE 9.0 J"
      ],
      "correct": 1,
      "explanation": "In the idealized limit of an infinitely massive wall, the elastic collision leaves the ball's speed essentially unchanged (12 m/s, just reversed in direction), since the wall absorbs essentially none of the kinetic energy. KE = ½(0.50)(12)² = 36 J, identical to its KE before the bounce."
    },
    {
      "id": "4-45",
      "topic": "4.5 Inelastic Collisions",
      "stem": "What defines a PERFECTLY inelastic collision?",
      "choices": [
        "Momentum is not conserved.",
        "The objects bounce apart with equal and opposite velocities.",
        "Kinetic energy is fully conserved.",
        "The objects stick together, moving with one common velocity."
      ],
      "correct": 3,
      "explanation": "Correct: (D) The objects stick together, moving with one common velocity. In a perfectly inelastic collision the objects join, so after the collision they share one velocity: m₁v₁ + m₂v₂ = (m₁ + m₂)v<sub>f</sub>. This produces the maximum loss of kinetic energy consistent with momentum conservation.\n\n(A) is wrong because momentum is conserved in this collision as in all isolated collisions.\n(B) is wrong because bouncing apart is an elastic-type result, not sticking together.\n(C) is wrong because KE is not conserved; the maximum amount is lost."
    },
    {
      "id": "4-46",
      "topic": "4.5 Inelastic Collisions",
      "stem": "A 5.0 kg cart moving at 8.0 m/s collides perfectly inelastically with a stationary 3.0 kg cart. Find their combined final velocity.",
      "choices": [
        "5.0 m/s",
        "3.0 m/s",
        "8.0 m/s",
        "6.4 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 5.0 m/s. Perfectly inelastic means the carts move together after, so momentum conservation gives (5.0)(8.0) + (3.0)(0) = (5.0 + 3.0)v<sub>f</sub>. Then 40 = 8.0v<sub>f</sub> and v<sub>f</sub> = 5.0 m/s, less than 8.0 m/s because the momentum is shared by a larger mass.\n\n(B) is wrong because 3.0 m/s would give the system only 24 kg·m/s of momentum.\n(C) is wrong because 8.0 m/s would mean the added cart did not slow the first cart down.\n(D) is wrong because 6.4 m/s would give the system a momentum of 51.2 kg·m/s, more than the 40 present before."
    },
    {
      "id": "4-47",
      "topic": "4.5 Inelastic Collisions",
      "stem": "Is momentum conserved in an inelastic collision?",
      "choices": [
        "Yes — momentum is conserved for any isolated collision, elastic or inelastic.",
        "No, momentum is only conserved in elastic collisions.",
        "Only if the collision is perfectly inelastic, not partially inelastic.",
        "Only if the objects have equal mass, and then only for an elastic collision."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Yes — momentum is conserved for any isolated collision, elastic or inelastic. Momentum changes only through an external impulse. During a collision the internal forces between the objects are equal and opposite, so the total momentum is the same before and after, no matter how much kinetic energy is lost. What distinguishes an inelastic collision is the loss of kinetic energy, not of momentum.\n\n(B) is wrong because inelastic collisions conserve momentum too; what they lose is kinetic energy, which becomes heat, sound, and deformation.\n(C) is wrong because partially inelastic collisions also conserve momentum, so the conservation does not require the objects to stick together.\n(D) is wrong because equal masses are not required for momentum conservation, and the conservation is not limited to elastic collisions."
    },
    {
      "id": "4-48",
      "topic": "4.5 Inelastic Collisions",
      "stem": "Using the cart collision from an earlier question (5.0 kg at 8.0 m/s, sticking to a stationary 3.0 kg cart, final velocity 5.0 m/s), find the kinetic energy lost in the collision.",
      "choices": [
        "100 J",
        "160 J",
        "60 J",
        "40 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 60 J. The kinetic energy lost is KE<sub>before</sub> − KE<sub>after</sub>. Before the collision only the 5.0 kg cart moves, so KE<sub>before</sub> = ½(5.0)(8.0)² = 160 J. After the collision the two carts move together at 5.0 m/s, so KE<sub>after</sub> = ½(8.0 kg)(5.0)² = 100 J. The loss is 160 − 100 = 60 J, which became heat, sound, and deformation.\n\n(A) is wrong because 100 J is the kinetic energy after the collision, not the amount lost; the loss is the difference between before and after.\n(B) is wrong because 160 J is the kinetic energy before the collision, which would be lost only if everything stopped, but the carts still move together afterward.\n(D) is wrong because 40 J is the initial momentum 5.0 × 8.0 in kg·m/s, which is not an energy; the energy difference is 160 − 100 = 60 J."
    },
    {
      "id": "4-49",
      "topic": "4.5 Inelastic Collisions",
      "stem": "In an inelastic collision, what happens to the kinetic energy that is 'lost'?",
      "choices": [
        "It is actually gained by an outside object not involved in the collision.",
        "It converts into other forms of energy, such as heat, sound, and deformation.",
        "It transfers entirely into the potential energy of the objects.",
        "It is truly destroyed and no longer exists in any form."
      ],
      "correct": 1,
      "explanation": "Correct: (B) It converts into other forms of energy, such as heat, sound, and deformation. Total energy is always conserved; only the kinetic part decreases in an inelastic collision. The missing kinetic energy goes into thermal energy, sound, and permanent deformation of the objects, such as dented metal. This is why momentum is conserved in these collisions while kinetic energy is not.\n\n(A) is wrong because the energy stays inside the system in those other forms rather than going to an unrelated outside object that is not involved in the collision.\n(C) is wrong because the objects are not lifted in the collision, so there is no large change in their heights and no significant change in gravitational potential energy to absorb the missing energy.\n(D) is wrong because energy cannot be destroyed; the law of conservation of energy requires that the missing kinetic energy reappear in some other form."
    },
    {
      "id": "4-50",
      "topic": "4.5 Inelastic Collisions",
      "stem": "A 4.0 kg object moving at 5.0 m/s east collides perfectly inelastically with a 6.0 kg object moving at 3.0 m/s west. Find their combined final velocity.",
      "choices": [
        "0.20 m/s west",
        "1.1 m/s west",
        "1.1 m/s east",
        "0.20 m/s east"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 0.20 m/s east. Take east as positive and conserve momentum: (4.0)(+5.0) + (6.0)(−3.0) = (4.0 + 6.0)v<sub>f</sub>. The left side is 20 − 18 = +2.0 kg·m/s, so v<sub>f</sub> = 2.0/10 = +0.20 m/s, east. The tiny result is because the two momenta nearly cancel.\n\n(A) is wrong because it has the right size but the wrong direction; the net momentum is positive (east).\n(B) is wrong because 1.1 m/s does not follow from 2.0/10; it is a miscalculation of the combined momentum.\n(C) is wrong for the same reason: the direction is right but the size is not."
    },
    {
      "id": "4-51",
      "topic": "4.5 Inelastic Collisions",
      "stem": "A problem states: 'The two objects collide and stick together.' What formula should this phrase immediately signal?",
      "choices": [
        "The work-energy theorem.",
        "Conservation of mechanical energy.",
        "m1v1 + m2v2 = (m1+m2)v_f.",
        "The elastic collision equations."
      ],
      "correct": 2,
      "explanation": "Correct: (C) m1v1 + m2v2 = (m1+m2)v<sub>f</sub>. 'Collide and stick together' is the standard wording for a perfectly inelastic collision, where both objects end up with one common velocity. Momentum is conserved but KE is not, so the combined-mass momentum equation is the one to use.\n\n(A) is wrong because the work-energy theorem relates work to a KE change from forces and does not handle the momentum exchange.\n(B) is wrong because mechanical energy is not conserved when objects stick together; some becomes heat and deformation.\n(D) is wrong because the elastic equations require KE conservation, which is false here."
    },
    {
      "id": "4-52",
      "topic": "4.5 Inelastic Collisions",
      "stem": "A 0.010 kg bullet moving at 300 m/s embeds itself in a stationary 2.0 kg wooden block (ballistic pendulum setup). Find the combined velocity immediately after impact.",
      "choices": [
        "1.5 m/s",
        "3.0 m/s",
        "0.75 m/s",
        "150 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.5 m/s. The bullet embeds in the block, so this is a perfectly inelastic collision and momentum is conserved just before and after impact: m<sub>b</sub> v<sub>b</sub> + m<sub>B</sub>(0) = (m<sub>b</sub> + m<sub>B</sub>)v<sub>f</sub>. The bullet's momentum is (0.010 kg)(300 m/s) = 3.0 kg·m/s, and the combined mass is 2.01 kg, so v<sub>f</sub> = 3.0/2.01 ≈ 1.49 m/s ≈ 1.5 m/s. The speed is small because the light bullet's momentum is shared with a heavy block.\n\n(B) is wrong because 3.0 is the momentum number, with the division by mass left out of the calculation (or division by only 1.0 kg).\n(C) is wrong because 0.75 m/s would result from dividing by about 4.0 kg, twice the real total mass.\n(D) is wrong because 150 m/s would mean the block barely changed the bullet's motion, which is not true for a 2.0 kg block."
    },
    {
      "id": "4-53",
      "topic": "4.5 Inelastic Collisions",
      "stem": "Real-world car crashes are almost always significantly inelastic. Explain why, physically.",
      "choices": [
        "Because momentum is not conserved in car crashes.",
        "Because deformation, heat, and sound consume kinetic energy.",
        "Because cars move too slowly for elastic collisions to occur.",
        "Because cars always have exactly equal mass."
      ],
      "correct": 1,
      "explanation": "The crumpling of metal, heat generated by that deformation, and the sound of the crash all represent kinetic energy being converted into other, non-recoverable forms — exactly the hallmark of an inelastic collision. (This is actually a safety feature by design: crumple zones intentionally maximize this energy conversion to reduce the force transmitted to passengers.)"
    },
    {
      "id": "4-54",
      "topic": "4.5 Inelastic Collisions",
      "stem": "A 2.0 kg object moving at 10 m/s collides perfectly inelastically with an identical, stationary 2.0 kg object. Find the fraction of the original kinetic energy that is lost in the collision.",
      "choices": [
        "75%",
        "50%",
        "25%",
        "0%"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 50%. Momentum is conserved for the sticking collision: (2.0)(10) + 0 = (4.0)v<sub>f</sub>, so v<sub>f</sub> = 5.0 m/s. Kinetic energy before is ½(2.0)(10)² = 100 J and after is ½(4.0)(5.0)² = 50 J. The fraction lost is (100 − 50)/100 = 50%. This half-loss result is general for equal masses sticking when one is initially at rest.\n\n(A) is wrong because 75% would leave only 25 J, which does not match the 50 J computed.\n(C) is wrong because 25% would leave 75 J, which is more than the collision allows.\n(D) is wrong because 0% would mean an elastic collision, but sticking together is perfectly inelastic."
    },
    {
      "id": "4-55",
      "topic": "4.5 Inelastic Collisions",
      "stem": "Is it possible for momentum to NOT be conserved during a real-world collision?",
      "choices": [
        "Yes — a significant external force like friction breaks conservation.",
        "No, since kinetic energy loss always exactly compensates for any momentum change.",
        "Yes, but only in elastic collisions.",
        "No, momentum is always conserved under every circumstance, with no exceptions."
      ],
      "correct": 0,
      "explanation": "Momentum conservation specifically requires an isolated system. If an external force (such as significant friction, or an outside push) acts on the objects during the collision, that external impulse will change the total momentum of just the colliding objects — conservation only strictly applies when such external forces are negligible or absent."
    },
    {
      "id": "4-56",
      "topic": "4.6 Center of Mass",
      "stem": "What does the center of mass of a system of objects represent?",
      "choices": [
        "The exact geometric center of the system, regardless of mass distribution.",
        "The location of the single heaviest object in the system.",
        "A point that only exists for symmetric systems.",
        "The mass-weighted average position of all the objects in the system."
      ],
      "correct": 3,
      "explanation": "Correct: (D) The mass-weighted average position of all the objects in the system. The center of mass is x<sub>cm</sub> = Σm<sub>i</sub> x<sub>i</sub> / Σm<sub>i</sub>, so objects with more mass pull it closer to them. It is the point that moves as if all the mass were concentrated there and the net external force acted on it.\n\n(A) is wrong because the geometric center ignores mass; the two agree only for uniform symmetric cases.\n(B) is wrong because the center of mass lies between objects and is not at the heaviest object (unless it is the only mass).\n(C) is wrong because every system, symmetric or not, has a center of mass."
    },
    {
      "id": "4-57",
      "topic": "4.6 Center of Mass",
      "stem": "A 2.0 kg object sits at x = 0, and a 6.0 kg object sits at x = 8.0 m. Find the center of mass of the system.",
      "choices": [
        "2.0 m",
        "4.0 m",
        "6.0 m",
        "8.0 m"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 6.0 m. Use x<sub>cm</sub> = Σm<sub>i</sub> x<sub>i</sub> / Σm<sub>i</sub> = [(2.0)(0) + (6.0)(8.0)]/(2.0 + 6.0) = 48/8.0 = 6.0 m. It lies closer to the heavier 6.0 kg object, which is at 8.0 m.\n\n(A) is wrong because 2.0 m is closer to the lighter mass, which results from swapping the weights.\n(B) is wrong because 4.0 m is the simple midpoint, which applies only if the masses are equal.\n(D) is wrong because 8.0 m is the position of the heavy object, but the lighter one also contributes."
    },
    {
      "id": "4-58",
      "topic": "4.6 Center of Mass",
      "stem": "A firework shell is launched and follows a parabolic path. Partway through its flight, it explodes into many fragments. How does the center of mass of the fragments move after the explosion?",
      "choices": [
        "It falls straight down immediately after the release of the part.",
        "Its motion becomes completely unpredictable after the explosion occurs.",
        "It continues along the same parabolic path as before.",
        "It stops moving entirely at the moment the explosion takes place."
      ],
      "correct": 2,
      "explanation": "The explosive forces are entirely internal to the system of fragments, and internal forces can never change the system's total momentum. Since the center of mass's motion is tied directly to total momentum, it continues along the exact same path (still just gravity acting on it) that the unexploded shell would have followed."
    },
    {
      "id": "4-59",
      "topic": "4.6 Center of Mass",
      "stem": "Three objects lie on a line: 1.0 kg at x=0, 2.0 kg at x=3.0 m, and 3.0 kg at x=6.0 m. Find the center of mass.",
      "choices": [
        "4.5 m",
        "6.0 m",
        "3.0 m",
        "4.0 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 4.0 m. The center of mass is x<sub>cm</sub> = Σm<sub>i</sub> x<sub>i</sub> / Σm<sub>i</sub> = [(1.0)(0) + (2.0)(3.0) + (3.0)(6.0)]/(1.0 + 2.0 + 3.0) = (0 + 6.0 + 18)/6.0 = 24/6.0 = 4.0 m. It lies to the right of the midpoint (3.0 m) because the heaviest mass is on the right.\n\n(A) is wrong because 4.5 m overweights the farthest mass; it does not match the sum above.\n(B) is wrong because 6.0 m is the location of the heaviest object, not the weighted average.\n(C) is wrong because 3.0 m is the simple midpoint, which ignores the different masses."
    },
    {
      "id": "4-60",
      "topic": "4.6 Center of Mass",
      "stem": "Is it possible for a system's center of mass to be located at a point where there is no actual mass?",
      "choices": [
        "No, the center of mass must always coincide with a physical object.",
        "Yes — it can lie in empty space, like between two point masses.",
        "Only for perfectly symmetric objects.",
        "Only in systems with more than three objects."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Yes — it can lie in empty space, like between two point masses. The center of mass is a calculated average position, x<sub>cm</sub> = Σm<sub>i</sub>x<sub>i</sub> / Σm<sub>i</sub>, and not a piece of matter. For two separate point masses it lies somewhere on the line between them, nearer the heavier one, where there is nothing. A donut or a boomerang is another example, since the center of mass sits in the hole or the bend.\n\n(A) is wrong because the center of mass need not coincide with any object; it is only a weighted average of positions and can fall in empty space.\n(C) is wrong because this can happen for asymmetric systems too, and for any system whose parts surround an empty region; symmetry is not required.\n(D) is wrong because two objects are already enough to put the center of mass in empty space, so more than three objects is not needed."
    },
    {
      "id": "4-61",
      "topic": "4.6 Center of Mass",
      "stem": "Two equal masses sit at x = 2.0 m and x = 10 m. Find the center of mass.",
      "choices": [
        "8.0 m",
        "12 m",
        "4.0 m",
        "6.0 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 6.0 m. With equal masses, x<sub>cm</sub> = (mx₁ + mx₂)/(2m) = (x₁ + x₂)/2 = (2.0 + 10)/2 = 6.0 m, the midpoint. The equal weights mean neither mass pulls the average toward itself.\n\n(A) is wrong because 8.0 m is the distance between the masses (10 − 2.0), not a position.\n(B) is wrong because 12 m is the sum of the positions, left undivided.\n(C) is wrong because 4.0 m is not the midpoint of 2.0 and 10; it would pull toward the first mass, which is not allowed with equal masses."
    },
    {
      "id": "4-62",
      "topic": "4.6 Center of Mass",
      "stem": "A stationary object at rest suddenly explodes into several fragments flying outward in different directions. What happens to the velocity of the system's center of mass immediately after the explosion?",
      "choices": [
        "It moves in the direction of the largest fragment, at its speed.",
        "It moves in a random direction, at a random speed, after it.",
        "It moves at the average speed of all the fragments, in some direction.",
        "It remains at rest (zero velocity), exactly as before the explosion."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It remains at rest (zero velocity), exactly as before the explosion. The forces that blow the fragments apart are internal to the system, so they cannot change the total momentum. The object was at rest, so p<sub>total</sub> = 0 before and after. Since v<sub>cm</sub> = p<sub>total</sub>/m<sub>total</sub>, the center of mass has v<sub>cm</sub> = 0, even though individual fragments fly off.\n\n(A) is wrong because the center of mass is not determined by one fragment; the other fragments' momenta cancel it.\n(B) is wrong because the motion is determined by momentum conservation, not random.\n(C) is wrong because the fragments' velocities point in different directions and their mass-weighted sum is zero, not an average speed."
    },
    {
      "id": "4-63",
      "topic": "4.6 Center of Mass",
      "stem": "A 4.0 kg object sits at x=0. A second object of unknown mass sits at x=10 m. The system's center of mass is at x=7.0 m. Find the unknown mass.",
      "choices": [
        "9.3 kg",
        "12 kg",
        "6.0 kg",
        "2.8 kg"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 9.3 kg. The center of mass equation is x<sub>cm</sub> = (m₁x₁ + m₂x₂)/(m₁ + m₂), so 7.0 = [(4.0)(0) + m₂(10)]/(4.0 + m₂). Then 10m₂ = 7.0(4.0 + m₂) = 28 + 7.0m₂, so 3.0m₂ = 28 and m₂ ≈ 9.3 kg. The center of mass is much closer to the second object, so it must be the heavier one.\n\n(B) is wrong because 12 kg would put the center of mass at 7.5 m.\n(C) is wrong because 6.0 kg would put it at 6.0 m, since 60/10 = 6.0.\n(D) is wrong because 2.8 kg would be 28/10, and the center of mass would be closer to the 4.0 kg object."
    },
    {
      "id": "4-64",
      "topic": "4.6 Center of Mass",
      "stem": "Why does an isolated system's center of mass move at constant velocity, even during an internal collision between objects in that system?",
      "choices": [
        "Because collisions always conserve kinetic energy as well as momentum.",
        "Because the center of mass is unaffected by any forces whatsoever.",
        "This is only true for elastic collisions, not for inelastic ones at all.",
        "Because internal forces cancel in pairs, so total momentum stays constant."
      ],
      "correct": 3,
      "explanation": "Internal forces during a collision come in Newton's Third Law pairs that cancel when summed over the whole system, meaning total momentum never changes — regardless of whether the collision is elastic or inelastic. Since v<sub>cm</sub> = p<sub>total</sub>/m<sub>total</sub>, and neither p<sub>total</sub> nor m<sub>total</sub> changes during an internal collision, the center of mass keeps moving at whatever constant velocity it had before."
    },
    {
      "id": "4-65",
      "topic": "4.6 Center of Mass",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A 3.0 kg object moves at 6.0 m/s and a 5.0 kg object moves at −2.0 m/s (opposite direction) along the same line. Find the velocity of the system's center of mass, then explain why this value must be unchanged even after the two objects collide and stick together.",
      "choices": [
        "1.0 m/s; unchanged since the collision is purely internal.",
        "1.0 m/s, and it changes to match whatever new velocity the objects have right after impact.",
        "0 m/s, since the objects move in opposite directions.",
        "2.0 m/s, unrelated to the objects' individual velocities."
      ],
      "correct": 0,
      "explanation": "v<sub>cm</sub> = (m1v1+m2v2)/(m1+m2) = [(3.0)(6.0)+(5.0)(−2.0)]/(3.0+5.0) = (18−10)/8.0 = 8.0/8.0 = 1.0 m/s. Since the collision is purely an internal event (no external force acts on the two-object system), total momentum (8.0 kg·m/s) and total mass (8.0 kg) are both unchanged by it — so v<sub>cm</sub> remains exactly 1.0 m/s both before and after. This is exactly why the final combined velocity in a perfectly inelastic collision always equals the pre-collision center-of-mass velocity: the two are the same calculation."
    }
  ],
  "5": [
    {
      "id": "5-1",
      "topic": "5.1 Rotational Kinematics",
      "stem": "Which of the following correctly describes the relationship between linear and rotational kinematics?",
      "choices": [
        "They describe completely unrelated types of physics.",
        "Rotational and linear kinematics share the same equation structure.",
        "Rotational motion never involves acceleration.",
        "Rotational kinematics only applies to objects moving in a straight line."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Rotational and linear kinematics share the same equation structure. Every constant-acceleration equation from linear motion has a rotational twin made by swapping x→θ, v→ω, a→α: ω = ω₀ + αt, Δθ = ω₀t + ½αt², and ω² = ω₀² + 2αΔθ. The mathematics is identical because both describe how a position-like quantity changes under a constant rate of change of its rate. The clue word is \"relationship,\" which points to this parallel.\n\n(A) is wrong because the two are directly linked, for example by v = rω and a = rα.\n(C) is wrong because rotating objects speed up and slow down all the time, and that is angular acceleration.\n(D) is wrong because rotational kinematics describes motion about an axis (circles), not straight-line motion."
    },
    {
      "id": "5-2",
      "topic": "5.1 Rotational Kinematics",
      "stem": "An object rotates through 4π rad in 2.0 s at a constant rate. Find its average angular velocity.",
      "choices": [
        "4π rad/s",
        "π rad/s",
        "8π rad/s",
        "2π rad/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 2π rad/s. Average angular velocity is the angle swept divided by the time, ω = Δθ/Δt. Here Δθ = 4π rad and Δt = 2.0 s, so ω = 4π/2.0 = 2π rad/s ≈ 6.28 rad/s. Because the rate is constant, the average equals the instantaneous value.\n\n(A) is wrong because 4π rad/s is just the angle itself and forgets to divide by the 2.0 s.\n(B) is wrong because π rad/s would result from dividing by 4 instead of 2.\n(C) is wrong because 8π rad/s multiplies the angle by the time instead of dividing."
    },
    {
      "id": "5-3",
      "topic": "5.1 Rotational Kinematics",
      "stem": "A wheel's angular velocity increases from 2.0 rad/s to 10 rad/s over 4.0 s. Find its angular acceleration.",
      "choices": [
        "2.0 rad/s²",
        "8.0 rad/s²",
        "3.0 rad/s²",
        "0.5 rad/s²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 2.0 rad/s². Angular acceleration is the change in angular velocity per unit time, α = Δω/Δt. The wheel goes from 2.0 to 10 rad/s, so Δω = 10 − 2.0 = 8.0 rad/s, and over 4.0 s that gives α = 8.0/4.0 = 2.0 rad/s². The units rad/s ÷ s = rad/s² confirm the setup.\n\n(B) is wrong because 8.0 is the change in ω and was never divided by the time.\n(C) is wrong because 3.0 comes from adding the two angular velocities (2.0 + 10 = 12) and dividing by 4.0 s, instead of subtracting them.\n(D) is wrong because 0.5 rad/s² flips the ratio to Δt/Δω."
    },
    {
      "id": "5-4",
      "topic": "5.1 Rotational Kinematics",
      "stem": "A point on a rotating wheel is 0.50 m from the axis and has an angular velocity of 8.0 rad/s. Find its linear (tangential) speed.",
      "choices": [
        "0.0625 m/s",
        "16 m/s",
        "8.5 m/s",
        "4.0 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 4.0 m/s. A point at radius r on a rigid rotating object moves with tangential speed v = rω, with ω in rad/s. Substituting r = 0.50 m and ω = 8.0 rad/s gives v = (0.50)(8.0) = 4.0 m/s. The radian is dimensionless, so rad/s × m becomes m/s.\n\n(A) is wrong because 0.0625 m/s comes from dividing r by ω, which inverts the relationship.\n(B) is wrong because 16 m/s divides ω by r instead of multiplying.\n(C) is wrong because 8.5 m/s adds r and ω, but the quantities have different units and must be multiplied."
    },
    {
      "id": "5-5",
      "topic": "5.1 Rotational Kinematics",
      "stem": "A point 0.30 m from an axis experiences an angular acceleration of 5.0 rad/s². Find its tangential (linear) acceleration.",
      "choices": [
        "1.5 m/s²",
        "0.06 m/s²",
        "16.7 m/s²",
        "5.3 m/s²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.5 m/s². Tangential acceleration is the linear acceleration of a point along its circular path and equals a<sub>t</sub> = rα, with α in rad/s². With r = 0.30 m and α = 5.0 rad/s², a<sub>t</sub> = (0.30)(5.0) = 1.5 m/s².\n\n(B) is wrong because 0.06 m/s² divides r by α (0.30/5.0) instead of multiplying.\n(C) is wrong because 16.7 m/s² divides α by r, which inverts the relationship.\n(D) is wrong because 5.3 m/s² adds the two numbers, which would not even have consistent units."
    },
    {
      "id": "5-6",
      "topic": "5.1 Rotational Kinematics",
      "stem": "For a rigid object spinning at a fixed angular velocity, how does the linear speed of a point change as its distance from the axis doubles?",
      "choices": [
        "It stays the same.",
        "It quadruples.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It doubles. For a rigid object every point shares the same angular velocity ω, and linear speed is v = rω. With ω fixed, v is directly proportional to r, so doubling the distance from the axis doubles the speed. Physically, a point twice as far out must trace a circle twice as long in the same time per revolution.\n\n(A) is wrong because only ω, not v, is the same for all points.\n(B) is wrong because quadrupling would require v ∝ r², but v = rω is only linear in r when ω is fixed.\n(C) is wrong because it reverses the dependence, as if v ∝ 1/r."
    },
    {
      "id": "5-7",
      "topic": "5.1 Rotational Kinematics",
      "stem": "A wheel starts at rest and undergoes constant angular acceleration of 3.0 rad/s² for 4.0 s. Find the total angle it sweeps through.",
      "choices": [
        "12 rad",
        "96 rad",
        "24 rad",
        "48 rad"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 24 rad. The wheel starts from rest (ω₀ = 0) with constant α, so the rotational kinematic equation Δθ = ω₀t + ½αt² applies. Then Δθ = 0 + ½(3.0 rad/s²)(4.0 s)² = ½(3.0)(16) = 24 rad. The clue words are \"starts at rest\" and \"constant angular acceleration.\"\n\n(A) is wrong because 12 rad is αt (the final ω), not an angle.\n(B) is wrong because 96 rad doubles the product (2αt²) instead of halving it.\n(D) is wrong because 48 rad is αt² with no ½ factor."
    },
    {
      "id": "5-8",
      "topic": "5.1 Rotational Kinematics",
      "stem": "A wheel starts at rest and accelerates at a constant 4.0 rad/s² through an angle of 18 rad. Find its final angular velocity.",
      "choices": [
        "72 rad/s",
        "9.0 rad/s",
        "12 rad/s",
        "4.0 rad/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 12 rad/s. The problem gives α and Δθ but no time, so use ω² = ω₀² + 2αΔθ. Starting from rest, ω² = 0 + 2(4.0 rad/s²)(18 rad) = 144 rad²/s², and ω = √144 = 12 rad/s.\n\n(A) is wrong because 72 is 4.0 × 18, which skips the factor of 2 and the square root.\n(B) is wrong because 9.0 is simply half the angle (18/2) and does not come from the ω² equation.\n(D) is wrong because 4.0 rad/s is just the angular acceleration, with the wrong units."
    },
    {
      "id": "5-9",
      "topic": "5.1 Rotational Kinematics",
      "stem": "Two points, A and B, sit on the same spinning rigid disk, with A twice as far from the axis as B. Compare their angular velocities and their linear speeds.",
      "choices": [
        "Both angular velocity and linear speed are twice as large for A.",
        "Both angular velocity and linear speed are equal for A and B.",
        "A's angular velocity is twice B's; linear speeds are equal.",
        "Angular velocity is equal for both; A's linear speed is twice B's."
      ],
      "correct": 3,
      "explanation": "Every point on a single rigid rotating object shares the same angular velocity ω, regardless of its distance from the axis. But linear speed, v=rω, does depend on r — so A (twice as far out) has twice the linear speed of B, despite matching angular velocities."
    },
    {
      "id": "5-10",
      "topic": "5.1 Rotational Kinematics",
      "stem": "By the standard convention used throughout this unit, which direction of rotation is treated as positive?",
      "choices": [
        "Neither direction has a standard sign convention.",
        "It depends on which hemisphere the problem is set in.",
        "Clockwise",
        "Counterclockwise"
      ],
      "correct": 3,
      "explanation": "Correct: (D) Counterclockwise. Physics convention measures angles counterclockwise from the positive x-axis, so counterclockwise rotation (and its ω, α and torque) is taken as positive and clockwise as negative. The question asks about the convention \"used throughout this unit,\" which is this standard one.\n\n(A) is wrong because a standard convention does exist and consistent signs are needed to add torques.\n(B) is wrong because rotation sign is a mathematical convention and has nothing to do with hemisphere (that is a confusion with the Coriolis effect).\n(C) is wrong because clockwise is the negative direction under the standard convention, although a problem may declare otherwise as long as it stays consistent."
    },
    {
      "id": "5-11",
      "topic": "5.2 Torque",
      "stem": "A 20 N force is applied perpendicular to a lever arm 0.40 m from the axis. Find the torque produced.",
      "choices": [
        "8.0 N·m",
        "20.4 N·m",
        "5.0 N·m",
        "50 N·m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 8.0 N·m. Torque is τ = rF sinθ. A force perpendicular to the lever arm has θ = 90°, so sinθ = 1 and the torque is maximal for that force and arm. Then τ = (0.40 m)(20 N)(1) = 8.0 N·m.\n\n(B) is wrong because 20.4 adds the numbers instead of multiplying.\n(C) is wrong because 5.0 does not follow from τ = rF; it comes from dividing 20 by 4, ignoring that the arm is 0.40 m.\n(D) is wrong because 50 N·m divides F by r (20/0.40), inverting the relation."
    },
    {
      "id": "5-12",
      "topic": "5.2 Torque",
      "stem": "A 30 N force is applied at 30° to a lever arm 0.50 m long. Find the torque produced. (sin30°=0.50)",
      "choices": [
        "7.5 N·m",
        "3.75 N·m",
        "15 N·m",
        "13 N·m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 7.5 N·m. Only the component of force perpendicular to the lever arm produces torque, which is why τ = rF sinθ. With r = 0.50 m, F = 30 N and sin30° = 0.50, τ = (0.50)(30)(0.50) = 7.5 N·m.\n\n(B) is wrong because 3.75 includes sin30° twice (or an extra factor of ½).\n(C) is wrong because 15 N·m forgets the sin30° factor and treats the force as if it were perpendicular.\n(D) is wrong because 13 N·m uses cos30° (≈ 0.87) in place of sin30°, which is the component along the arm and produces no torque."
    },
    {
      "id": "5-13",
      "topic": "5.2 Torque",
      "stem": "A force is applied directly at the axis of rotation (r=0). Find the torque produced, regardless of the force's magnitude.",
      "choices": [
        "Cannot be determined without more information.",
        "Depends on the angle of application.",
        "Zero.",
        "Equal to the force's magnitude."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Zero. Torque is τ = rF sinθ, where r is the distance from the axis to the point of force application. If the force acts right at the axis, r = 0, so τ = 0 no matter how big F is or what the angle is. The force has no lever arm, so it can push the object but not twist it.\n\n(A) is wrong because the answer is determined fully by r = 0.\n(B) is wrong because with r = 0 the angle is irrelevant.\n(D) is wrong because torque has units N·m, and it is not simply equal to the force; it must also include the lever arm."
    },
    {
      "id": "5-14",
      "topic": "5.2 Torque",
      "stem": "A force is applied parallel to the lever arm (θ=0°). Find the torque produced.",
      "choices": [
        "Equal to the force times the lever arm length.",
        "Cannot be determined without the object's mass.",
        "Maximum possible torque.",
        "Zero."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Zero. Torque is τ = rF sinθ, and θ is the angle between the force and the lever arm. With θ = 0°, sin0° = 0, so τ = 0. A force pointing along the line of the lever arm pushes or pulls straight toward or away from the axis and has no component that tends to rotate the object.\n\n(A) is wrong because rF alone would be the torque only if the force were perpendicular (sinθ = 1).\n(B) is wrong because mass is not part of the torque formula.\n(C) is wrong because maximum torque occurs at θ = 90°, not 0°."
    },
    {
      "id": "5-15",
      "topic": "5.2 Torque",
      "stem": "A perpendicular force is applied at a fixed distance from an axis, and that distance is doubled while the force stays the same. How does the resulting torque change?",
      "choices": [
        "It is cut in half.",
        "It quadruples.",
        "It stays the same.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It doubles. For a perpendicular force the torque is τ = rF, so with the force fixed, the torque is directly proportional to the distance r from the axis. Doubling r from r to 2r gives τ = (2r)F = 2rF, twice as large. This is why a longer wrench makes a stuck bolt easier to turn, since the same push produces more torque.\n\n(A) is wrong because it reverses the proportionality; a larger lever arm gives a larger torque, so doubling r cannot cut the torque in half.\n(B) is wrong because quadrupling would require the torque to depend on r², but the torque is linear in r when the force is constant, so doubling r only doubles τ.\n(C) is wrong because r is a direct factor in the torque τ = rF, so changing it necessarily changes the torque."
    },
    {
      "id": "5-16",
      "topic": "5.2 Torque",
      "stem": "A torque of 15 N·m is needed, applied perpendicular to a lever arm 0.30 m long. Find the required force.",
      "choices": [
        "50 N",
        "4.5 N",
        "45 N",
        "15.3 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 50 N. The force is perpendicular to the arm, so sinθ = 1 and τ = rF. Solve for the force: F = τ/r = 15 N·m / 0.30 m = 50 N. A short lever arm demands a large force to supply a given torque.\n\n(B) is wrong because 4.5 N multiplies τ by r instead of dividing.\n(C) is wrong because 45 N is 15 × 3, multiplying the torque by a number instead of dividing it by 0.30.\n(D) is wrong because 15.3 N adds the two numbers, which would not have consistent units."
    },
    {
      "id": "5-17",
      "topic": "5.2 Torque",
      "stem": "For a fixed force magnitude and lever arm length, at what angle θ does the resulting torque reach its maximum possible value?",
      "choices": [
        "90°",
        "45°",
        "0°",
        "180°"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 90°. With r and F fixed, τ = rF sinθ depends on the angle only through sinθ, and sinθ reaches its maximum value of 1 at θ = 90°. That is the case of a force exactly perpendicular to the lever arm, which gives τ_max = rF.\n\n(B) is wrong because at 45° sinθ ≈ 0.71, so the torque is only about 71% of the maximum.\n(C) is wrong because at 0° the force is along the lever arm and the torque is zero.\n(D) is wrong because at 180° sinθ = 0 as well, so the force again lies along the arm (pointing the opposite way) and gives no torque."
    },
    {
      "id": "5-18",
      "topic": "5.2 Torque",
      "stem": "A wrench 0.25 m long has an 80 N force applied perpendicular to it, at its end. Find the torque produced.",
      "choices": [
        "20 N·m",
        "80.25 N·m",
        "32 N·m",
        "3.125 N·m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 20 N·m. The force is applied perpendicular to the wrench at its end, so r = 0.25 m, θ = 90° and sinθ = 1. Then τ = rF sinθ = (0.25)(80)(1) = 20 N·m.\n\n(B) is wrong because 80.25 adds the length to the force instead of multiplying.\n(C) is wrong because 32 N·m results from multiplying 80 by 0.4, a number that does not appear in the problem.\n(D) is wrong because 3.125 N·m divides r by F (0.25/80), inverting the relation."
    },
    {
      "id": "5-19",
      "topic": "5.2 Torque",
      "stem": "Two forces are applied to the same rigid rod: one creates a torque tending to rotate it counterclockwise, and the other tends to rotate it clockwise. How should these two torques be combined to find the net torque?",
      "choices": [
        "Their magnitudes simply add together, whatever the directions of the two torques.",
        "Give one direction a positive sign, the other negative, then add.",
        "Multiply the two torques together to find the single net torque on the object.",
        "Only the larger torque matters; the smaller one is ignored."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Give one direction a positive sign, the other negative, then add. Torque about an axis is a signed quantity: it either tends to turn the object counterclockwise or clockwise. To find the net torque, assign one direction a positive sign (by convention CCW is positive), the other negative, and sum algebraically. Opposing torques partly cancel, just as opposing forces do along a line.\n\n(A) is wrong because adding magnitudes ignores that opposite torques subtract.\n(C) is wrong because multiplying torques has no physical meaning and gives the wrong units.\n(D) is wrong because both torques contribute; the smaller one reduces the larger rather than being ignored."
    },
    {
      "id": "5-20",
      "topic": "5.2 Torque",
      "stem": "A rod experiences a 12 N·m counterclockwise torque and a 5.0 N·m clockwise torque simultaneously. Find the net torque.",
      "choices": [
        "17 N·m counterclockwise",
        "7.0 N·m clockwise",
        "7.0 N·m counterclockwise",
        "17 N·m clockwise"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 7.0 N·m counterclockwise. Take counterclockwise as positive, so the torques are +12 N·m and −5.0 N·m. The net torque is Στ = 12 + (−5.0) = +7.0 N·m, and a positive sign means counterclockwise. The larger torque wins and the net is the difference.\n\n(A) is wrong because 17 N·m adds the magnitudes even though the torques oppose.\n(B) is wrong because it gets the right magnitude but the wrong direction; the larger torque is the counterclockwise one.\n(D) is wrong because it has both the wrong magnitude (sum) and the wrong direction."
    },
    {
      "id": "5-21",
      "topic": "5.2 Torque",
      "stem": "Torque and work share the same SI unit, the newton-meter (which for work is called the joule). Are torque and work actually the same physical quantity?",
      "choices": [
        "No, they have completely different units.",
        "Yes, they are identical quantities that just have different names.",
        "Yes, but only in rotational systems.",
        "No, they are physically different quantities that share only units."
      ],
      "correct": 3,
      "explanation": "Despite sharing the same dimensional units (force × distance), torque and work are conceptually distinct: work is a scalar describing energy transfer, while torque is more like a rotational force with a direction (CCW/CW). The shared units are a dimensional coincidence, not a sign that the two quantities are interchangeable."
    },
    {
      "id": "5-22",
      "topic": "5.3 Moment of Inertia",
      "stem": "Which of the following best describes the moment of inertia, I?",
      "choices": [
        "A measure of the torque an object can produce when a force is applied to it.",
        "How an object's mass is distributed relative to the rotation axis.",
        "A measure of an object's total mass, unrelated to rotation.",
        "A measure of an object's angular velocity at a particular moment in time."
      ],
      "correct": 1,
      "explanation": "Correct: (B) How an object's mass is distributed relative to the rotation axis. Moment of inertia is the rotational analog of mass: I = Σmr² for point masses, so it depends not just on how much mass there is but on how far each piece sits from the axis. Mass far from the axis counts for much more (r is squared), and I measures resistance to changes in angular velocity. The same object has different I about different axes.\n\n(A) is wrong because torque is rF sinθ, a force-based quantity, and I is what resists that torque.\n(C) is wrong because I is not just mass; the same mass gives different I when arranged differently.\n(D) is wrong because angular velocity ω is a motion variable, while I is a fixed property of the object and axis."
    },
    {
      "id": "5-23",
      "topic": "5.3 Moment of Inertia",
      "stem": "A 2.0 kg point mass sits 0.50 m from an axis, and a 3.0 kg point mass sits 1.0 m from the same axis, on a light rod. Find the total moment of inertia.",
      "choices": [
        "8.0 kg·m²",
        "1.75 kg·m²",
        "3.5 kg·m²",
        "5.0 kg·m²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.5 kg·m². For point masses on a light (massless) rod, I = Σmr², adding each mass times the square of its distance from the axis. So I = (2.0)(0.50)² + (3.0)(1.0)² = (2.0)(0.25) + (3.0)(1.0) = 0.50 + 3.0 = 3.5 kg·m². The rod is \"light,\" so it adds nothing.\n\n(A) is wrong because 8.0 has no basis in Σmr² and likely comes from misreading a distance or skipping the squaring.\n(B) is wrong because 1.75 is half the right total, as though the sum had been averaged.\n(D) is wrong because 5.0 is the sum of the masses (2.0 + 3.0) and ignores the distances entirely."
    },
    {
      "id": "5-24",
      "topic": "5.3 Moment of Inertia",
      "stem": "Two equal point masses sit at different distances from an axis: Mass A at 1.0 m, Mass B at 2.0 m. Compare their individual contributions to the system's moment of inertia.",
      "choices": [
        "Mass B contributes twice as much as Mass A.",
        "Mass A contributes twice as much as Mass B.",
        "Mass B contributes four times as much as Mass A.",
        "Both contribute equally, since their masses are equal."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Mass B contributes four times as much as Mass A. Each point mass adds mr² to the moment of inertia. With equal masses, the ratio of contributions is (r<sub>B</sub>/r<sub>A</sub>)² = (2.0/1.0)² = 4. The key point is that distance enters squared, so far-out mass matters disproportionately.\n\n(A) is wrong because it treats the contribution as linear in r (doubling r doubles I), forgetting the square.\n(B) is wrong because it reverses the direction; the farther mass contributes more.\n(D) is wrong because equal masses only give equal contributions if they are at the same distance."
    },
    {
      "id": "5-25",
      "topic": "5.3 Moment of Inertia",
      "stem": "Find the moment of inertia of a solid disk with mass 4.0 kg and radius 0.30 m.",
      "choices": [
        "0.36 kg·m²",
        "0.72 kg·m²",
        "0.12 kg·m²",
        "0.18 kg·m²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 0.18 kg·m². A solid disk (or cylinder) rotating about its central axis has a moment of inertia I = ½MR². With M = 4.0 kg and R = 0.30 m, I = ½(4.0 kg)(0.30 m)² = ½(4.0)(0.09) = 0.18 kg·m². The factor of ½ reflects that the mass of a solid disk is spread from the center out to the rim rather than concentrated at the edge.\n\n(A) is wrong because 0.36 is MR² = (4.0)(0.09), the formula for a thin hoop, which has all of its mass at the rim; a solid disk has less rotational inertia.\n(B) is wrong because 0.72 is 2MR², a coefficient that does not belong to any standard shape and would be larger than even a hoop.\n(C) is wrong because 0.12 uses the coefficient 1/3, giving (1/3)(4.0)(0.09) = 0.12, which is the factor for a thin rod about its end, not for a solid disk."
    },
    {
      "id": "5-26",
      "topic": "5.3 Moment of Inertia",
      "stem": "Find the moment of inertia of a thin hoop with mass 2.0 kg and radius 0.50 m.",
      "choices": [
        "0.25 kg·m²",
        "2.0 kg·m²",
        "1.0 kg·m²",
        "0.5 kg·m²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 0.5 kg·m². For a thin hoop (all mass at distance R) I = MR². Then I = (2.0 kg)(0.50 m)² = (2.0)(0.25) = 0.50 kg·m². Because every bit of mass is at the full radius, the hoop has the largest I of the common shapes for the same M and R.\n\n(A) is wrong because 0.25 is ½MR², the solid disk value.\n(B) is wrong because 2.0 is just the mass, with no radius factor.\n(C) is wrong because 1.0 is MR (without squaring the radius)."
    },
    {
      "id": "5-27",
      "topic": "5.3 Moment of Inertia",
      "stem": "A hoop and a solid disk have identical mass and identical radius. Which one has the greater moment of inertia?",
      "choices": [
        "The disk, since its mass is more spread out.",
        "They have equal moment of inertia, since mass and radius are equal.",
        "The hoop, since all its mass sits at the maximum radius.",
        "Cannot be determined without more information."
      ],
      "correct": 2,
      "explanation": "The hoop (I=MR²) has all of its mass concentrated at the outer radius R, while the disk (I=½MR²) has its mass distributed from the center all the way out to R — since I depends on r², the hoop's mass, being uniformly at the maximum distance, produces double the moment of inertia of the disk."
    },
    {
      "id": "5-28",
      "topic": "5.3 Moment of Inertia",
      "stem": "Find the moment of inertia of a solid sphere with mass 5.0 kg and radius 0.20 m.",
      "choices": [
        "0.04 kg·m²",
        "0.08 kg·m²",
        "0.10 kg·m²",
        "0.20 kg·m²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.08 kg·m². A solid sphere rotating about a diameter has a moment of inertia I = (2/5)MR². With M = 5.0 kg and R = 0.20 m, I = (2/5)(5.0 kg)(0.20 m)² = (2/5)(5.0)(0.04) = 0.08 kg·m². The coefficient 2/5 is smaller than the ½ of a disk because more of the sphere's mass lies near the axis.\n\n(A) is wrong because 0.04 uses the coefficient 1/5 instead of 2/5, giving (1/5)(5.0)(0.04) = 0.04, which is half the correct value.\n(C) is wrong because 0.10 is ½MR² = ½(5.0)(0.04), the solid disk value, and a sphere has a different mass distribution.\n(D) is wrong because 0.20 is MR² = (5.0)(0.04), the thin hoop value, which applies only when all of the mass is at the radius R."
    },
    {
      "id": "5-29",
      "topic": "5.3 Moment of Inertia",
      "stem": "A disk's radius is doubled while its mass stays the same. How does its moment of inertia change?",
      "choices": [
        "It stays the same.",
        "It is cut in half.",
        "It doubles.",
        "It quadruples."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It quadruples. For a disk the moment of inertia is I = ½MR², so with the mass M fixed, I is proportional to R². Doubling R multiplies I by 2² = 4. The clue is that the mass stays the same while only the size changes, so the whole change comes from the squared radius: ½M(2R)² = 4(½MR²).\n\n(A) is wrong because I depends on R through the R² factor, so changing the radius necessarily changes the moment of inertia.\n(B) is wrong because a larger radius spreads the same mass farther from the axis and increases I; it does not decrease it.\n(C) is wrong because it treats I as linear in R and forgets the square; the formula has R², so doubling R gives four times the original value, not two."
    },
    {
      "id": "5-30",
      "topic": "5.3 Moment of Inertia",
      "stem": "Find the moment of inertia of a thin rod (mass 3.0 kg, length 2.0 m) rotating about its center.",
      "choices": [
        "0.5 kg·m²",
        "4.0 kg·m²",
        "1.0 kg·m²",
        "2.0 kg·m²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 1.0 kg·m². For a thin uniform rod about its center, I = (1/12)ML². Then I = (1/12)(3.0 kg)(2.0 m)² = (1/12)(3.0)(4.0) = 1.0 kg·m². The clue is \"about its center.\"\n\n(A) is wrong because 0.5 forgets to square the length (1/12 × 3.0 × 2.0).\n(B) is wrong because 4.0 is (1/3)ML², the value for rotation about an end.\n(D) is wrong because 2.0 corresponds to a coefficient of 1/6, which is not the rod's center formula."
    },
    {
      "id": "5-31",
      "topic": "5.3 Moment of Inertia",
      "stem": "The same rod (I=(1/12)ML² about its center) is instead rotated about one of its ends (I=(1/3)ML²). Compare the two moments of inertia.",
      "choices": [
        "Rotating about the end gives a SMALLER moment of inertia.",
        "Cannot be compared without specific numbers.",
        "Larger, since more mass sits farther from that axis at the end.",
        "The moment of inertia is the same regardless of which point the rod rotates about."
      ],
      "correct": 2,
      "explanation": "Rotating about one end places the entire rod's length between the axis and the far end, meaning much more of the mass sits farther from the axis compared to rotating about the center (where mass is distributed symmetrically, close on both sides) — this is exactly why the end-axis formula, (1/3)ML², is larger than the center-axis formula, (1/12)ML²."
    },
    {
      "id": "5-32",
      "topic": "5.3 Moment of Inertia",
      "stem": "For the same rod, find the ratio of its moment of inertia about one end to its moment of inertia about its center.",
      "choices": [
        "4",
        "6",
        "2",
        "3"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 4. For a uniform rod, I<sub>end</sub> = (1/3)ML² and I<sub>center</sub> = (1/12)ML². The ratio is (1/3)/(1/12) = 12/3 = 4, since M and L cancel for the same rod. The end axis puts much of the mass farther from the axis, and distance is squared.\n\n(B) is wrong because 6 has no basis in these coefficients.\n(C) is wrong because 2 would be the ratio if the distances were merely doubled in a linear way, not squared.\n(D) is wrong because 3 is the denominator of 1/3 and ignores the 1/12 for the center."
    },
    {
      "id": "5-33",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "A net torque of 12 N·m acts on an object with moment of inertia 3.0 kg·m². Find its angular acceleration.",
      "choices": [
        "9.0 rad/s²",
        "36 rad/s²",
        "4.0 rad/s²",
        "0.25 rad/s²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 4.0 rad/s². Newton's second law for rotation is Στ = Iα, so the angular acceleration is α = τ/I = (12 N·m) ÷ (3.0 kg·m²) = 4.0 rad/s². The units check: N·m divided by kg·m² is (kg·m²/s²) ÷ (kg·m²) = 1/s², which is the unit of angular acceleration in rad/s².\n\n(A) is wrong because 9.0 subtracts the numbers (12 − 3.0) instead of dividing, but torque and moment of inertia have different units and are related by a quotient.\n(B) is wrong because 36 multiplies the torque by the moment of inertia (12 × 3.0), which would make the acceleration larger for a heavier object, the opposite of the real behavior.\n(D) is wrong because 0.25 inverts the ratio (3.0 ÷ 12); the angular acceleration is torque divided by moment of inertia, which gives 4.0."
    },
    {
      "id": "5-34",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "An object with moment of inertia 0.50 kg·m² undergoes an angular acceleration of 6.0 rad/s². Find the net torque acting on it.",
      "choices": [
        "6.5 N·m",
        "3.0 N·m",
        "0.083 N·m",
        "12 N·m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 3.0 N·m. Newton's second law for rotation, Στ = Iα, gives the net torque directly as the product of the moment of inertia and the angular acceleration. Here τ = (0.50 kg·m²)(6.0 rad/s²) = 3.0 N·m. A bigger moment of inertia or a bigger angular acceleration would both require more torque.\n\n(A) is wrong because 6.5 adds the two numbers (0.50 + 6.0), which have different units and cannot be added; the relationship is a product.\n(C) is wrong because 0.083 divides I by α (0.50 ÷ 6.0), but the torque is found by multiplying, giving 3.0 N·m.\n(D) is wrong because 12 divides α by I (6.0 ÷ 0.50), which is the inverted relation; that quotient would be the angular acceleration per unit of I, not the torque."
    },
    {
      "id": "5-35",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "In the rotational version of Newton's Second Law, τ=Iα, what role does moment of inertia play, analogous to Unit 2's F=ma?",
      "choices": [
        "The role of linear acceleration, in the rotational equation.",
        "Moment of inertia has no analog in F = ma, which is linear only.",
        "The role of mass, resisting change in motion.",
        "The role of force, not mass, in the rotational equation."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The role of mass, resisting change in motion. Compare τ = Iα with F = ma: torque plays the role of force, angular acceleration plays the role of acceleration, and I plays the role of mass. In each case it is the object's inertia, its resistance to a change in motion, so a larger I gives a smaller α for the same torque.\n\n(A) is wrong because angular acceleration α is the counterpart of linear acceleration a.\n(B) is wrong because there is a clear analog: the mass m in F = ma.\n(D) is wrong because the torque τ, not I, takes the role of force."
    },
    {
      "id": "5-36",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "A solid disk (mass 2.0 kg, radius 0.40 m) has a torque of 4.0 N·m applied to it. Find its angular acceleration.",
      "choices": [
        "6.25 rad/s²",
        "25 rad/s²",
        "12.5 rad/s²",
        "50 rad/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 25 rad/s². First find the moment of inertia of the solid disk, I = ½MR² = ½(2.0)(0.40)² = ½(2.0)(0.16) = 0.16 kg·m². Then α = τ/I = 4.0 / 0.16 = 25 rad/s². Both steps are needed because the problem gives mass and radius, not I.\n\n(A) is wrong because 6.25 comes from using an I four times too large (0.64 = 2MR², with a coefficient of 2 in place of ½), and 4.0/0.64 = 6.25.\n(C) is wrong because 12.5 uses I = MR² = 0.32 (the hoop formula).\n(D) is wrong because 50 uses ½ twice (I = 0.08)."
    },
    {
      "id": "5-37",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "Object A has twice the moment of inertia of Object B. The exact same torque is applied to each. Compare their angular accelerations.",
      "choices": [
        "Cannot be determined without more information.",
        "B has twice the angular acceleration of A.",
        "A has twice the angular acceleration of B.",
        "Both have equal angular acceleration."
      ],
      "correct": 1,
      "explanation": "Correct: (B) B has twice the angular acceleration of A. With the same torque on each, α = τ/I, so the angular acceleration is inversely proportional to the moment of inertia. Since I<sub>A</sub> = 2I<sub>B</sub>, α<sub>A</sub> = τ/(2I<sub>B</sub>) = ½α<sub>B</sub>, so B accelerates twice as fast. This parallels a lighter object accelerating more under the same force.\n\n(A) is wrong because the ratio is fully determined by the given information: the torques are equal and the moment-of-inertia ratio is stated, so nothing more is needed.\n(C) is wrong because it reverses the inverse relationship; the object with more rotational inertia accelerates less, not more.\n(D) is wrong because equal angular accelerations would require equal moments of inertia, but A resists a change in rotation twice as much as B does."
    },
    {
      "id": "5-38",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "An object with I=4.0 kg·m² experiences two torques: 20 N·m counterclockwise and 8.0 N·m clockwise. Find its angular acceleration.",
      "choices": [
        "5.0 rad/s²",
        "7.0 rad/s²",
        "3.0 rad/s²",
        "2.0 rad/s²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.0 rad/s². Torques in opposite directions are combined with signs: taking CCW positive, Στ = 20 − 8.0 = 12 N·m (CCW). Then α = Στ/I = 12/4.0 = 3.0 rad/s². The net, not either individual torque, goes into Newton's second law.\n\n(A) is wrong because 5.0 uses only the 20 N·m torque (20/4.0) and ignores the clockwise one.\n(B) is wrong because 7.0 adds the torques (28/4.0) instead of subtracting.\n(D) is wrong because 2.0 uses only the 8.0 N·m clockwise torque."
    },
    {
      "id": "5-39",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "An object rotates at a constant, unchanging angular velocity. What must be true about the net torque acting on it?",
      "choices": [
        "It must be constant but nonzero.",
        "It must be at its maximum possible value.",
        "It must be exactly zero.",
        "It cannot be determined without knowing the object's moment of inertia."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It must be exactly zero. Constant angular velocity means angular acceleration α = 0, and Στ = Iα, so Στ = 0. This is the rotational version of Newton's first law. The clue is \"constant, unchanging\" angular velocity.\n\n(A) is wrong because a constant nonzero net torque would produce a constant nonzero α and a changing ω.\n(B) is wrong because maximum torque would cause the maximum angular acceleration.\n(D) is wrong because zero times any I is zero, so I does not matter for this conclusion."
    },
    {
      "id": "5-40",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "A rod (mass 4.0 kg, length 1.5 m) pivots about one end, with I=(1/3)ML². A torque of 9.0 N·m is applied. Find its angular acceleration.",
      "choices": [
        "1.0 rad/s²",
        "2.0 rad/s²",
        "4.5 rad/s²",
        "3.0 rad/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 3.0 rad/s². First find the moment of inertia of the rod about one end, I = (1/3)ML² = (1/3)(4.0)(1.5)² = (1/3)(4.0)(2.25) = 3.0 kg·m². Then α = τ/I = 9.0/3.0 = 3.0 rad/s². The formula I = (1/3)ML² is given in the stem.\n\n(A) is wrong because 1.0 results from using I = ML² = 9.0 and forgetting the 1/3.\n(B) is wrong because 2.0 uses I = ½ML² = 4.5, the disk coefficient.\n(C) is wrong because 4.5 comes from dividing the torque by 2, not by I."
    },
    {
      "id": "5-41",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "An object's moment of inertia is doubled (its mass redistributed farther from the axis, total mass unchanged) while the applied torque stays the same. How does its angular acceleration change?",
      "choices": [
        "It stays the same.",
        "It quadruples.",
        "It doubles.",
        "It is cut in half."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It is cut in half. Newton's second law for rotation gives α = τ/I, so with the torque fixed the angular acceleration is inversely proportional to the moment of inertia. Doubling I halves α. Moving mass away from the axis raises I, so the object is harder to spin up even though its total mass has not changed.\n\n(A) is wrong because I is in the denominator of α = τ/I, so changing it necessarily changes the angular acceleration.\n(B) is wrong because quadrupling would require a squared relationship, but α depends on I to the first power, so doubling I only halves α.\n(C) is wrong because doubling the inertia makes the object more resistant to changes in rotation, not less, so the angular acceleration cannot increase."
    },
    {
      "id": "5-42",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "An object with I=2.0 kg·m² starts at rest. A constant torque of 6.0 N·m is applied for 5.0 s. Find the object's final angular velocity.",
      "choices": [
        "10 rad/s",
        "30 rad/s",
        "3.0 rad/s",
        "15 rad/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 15 rad/s. First get the angular acceleration from Στ = Iα: α = 6.0/2.0 = 3.0 rad/s². Starting from rest with constant α, ω = ω₀ + αt = 0 + (3.0)(5.0) = 15 rad/s. The two-step chain (torque → α → ω) is needed.\n\n(A) is wrong because 10 multiplies I by t (2.0 × 5.0), which has no physical meaning here.\n(B) is wrong because 30 uses the torque instead of α (6.0 × 5.0), forgetting to divide by I.\n(C) is wrong because 3.0 rad/s² is the acceleration, not the speed after 5.0 s."
    },
    {
      "id": "5-43",
      "topic": "5.4 Newton's Second Law for Rotation",
      "stem": "Two different objects are to be given the exact same angular acceleration. Object A has a larger moment of inertia than Object B. Compare the torque required for each.",
      "choices": [
        "Object B requires more torque.",
        "Both require exactly the same torque.",
        "Cannot be determined without more information.",
        "Object A requires more torque."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Object A requires more torque. From Στ = Iα, torque is proportional to I when α is the same. A has the larger I, so it needs the larger torque, just as a heavier object needs more force for the same acceleration.\n\n(A) is wrong because it reverses the proportionality, giving the smaller-I object the larger torque.\n(B) is wrong because equal torque would give the larger-I object the smaller α.\n(C) is wrong because the given comparison is enough: same α and I<sub>A</sub> > I<sub>B</sub> is all that is needed."
    },
    {
      "id": "5-44",
      "topic": "5.5 Static Equilibrium",
      "stem": "What two conditions must both be satisfied for an object to be in complete static equilibrium?",
      "choices": [
        "Zero velocity and zero angular velocity.",
        "Zero net force and zero net torque.",
        "Zero kinetic energy and zero potential energy.",
        "Zero mass and zero moment of inertia."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Zero net force and zero net torque. Complete static equilibrium means the object has no linear acceleration (ΣF = 0, so it does not translate) and no angular acceleration (Στ = 0, so it does not rotate), and it starts at rest. Both conditions are needed: a seesaw with balanced forces but unbalanced torques would still tip.\n\n(A) is wrong because zero velocity describes the state, not the conditions that keep it there; a ball at the top of its toss has zero velocity but is not in equilibrium.\n(C) is wrong because energies are not the requirement (a resting object can have large potential energy).\n(D) is wrong because real objects always have mass and moment of inertia."
    },
    {
      "id": "5-45",
      "topic": "5.5 Static Equilibrium",
      "stem": "A 40 kg child sits 2.0 m from the center of a seesaw. Find where a 50 kg adult must sit on the other side to balance it.",
      "choices": [
        "2.5 m",
        "1.0 m",
        "1.25 m",
        "1.6 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 1.6 m. For balance the torques about the pivot must cancel, and both people sit on the same lever with the same g, so g cancels and m₁r₁ = m₂r₂. Then (40 kg)(2.0 m) = (50 kg)d gives d = 80/50 = 1.6 m. The heavier adult must sit closer to the pivot.\n\n(A) is wrong because 2.5 m comes from inverting the ratio (2.0 × 50/40), which would put the heavier person farther away.\n(B) is wrong because 1.0 m has no basis in the torque balance (it is half of 2.0).\n(C) is wrong because 1.25 m is 50/40, a mass ratio that ignores the 2.0 m distance."
    },
    {
      "id": "5-46",
      "topic": "5.5 Static Equilibrium",
      "stem": "For an object in true static equilibrium, does the choice of pivot point used to calculate torques affect whether Στ=0 holds?",
      "choices": [
        "Yes, torques only balance about the object's true physical axis.",
        "No, but only if the object has zero mass.",
        "Yes, but only for symmetric objects.",
        "No, they balance about any pivot point you choose."
      ],
      "correct": 3,
      "explanation": "For an object genuinely in equilibrium (both ΣF=0 and Στ=0 about at least one point), the torques will balance about any other point you might choose as a pivot as well — this mathematical fact is exactly what makes it strategically useful to choose a convenient pivot point."
    },
    {
      "id": "5-47",
      "topic": "5.5 Static Equilibrium",
      "stem": "A uniform beam, weight 200 N, is supported at both ends, with its center of gravity at the midpoint. Find the force each support exerts.",
      "choices": [
        "100 N each",
        "200 N each",
        "150 N each",
        "50 N each"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 100 N each. In equilibrium the two upward support forces must sum to the weight (ΣF = 0): F₁ + F₂ = 200 N. Torques about either end require the supports to be equally loaded when the center of gravity is at the midpoint: F₂L = W(L/2), so F₂ = W/2 = 100 N, and F₁ = 100 N likewise.\n\n(B) is wrong because 200 N each would total 400 N, twice the weight, giving a net upward force.\n(C) is wrong because 150 N each would total 300 N, more than the 200 N weight.\n(D) is wrong because 50 N each totals only 100 N, not enough to hold up the beam."
    },
    {
      "id": "5-48",
      "topic": "5.5 Static Equilibrium",
      "stem": "A lightweight beam 6.0 m long is supported at both ends. A 300 N weight is placed 2.0 m from the left support. Find the force exerted by the right support.",
      "choices": [
        "50 N",
        "200 N",
        "100 N",
        "150 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 100 N. Take torques about the left support so the unknown left force drops out: F<sub>right</sub>(6.0 m) − (300 N)(2.0 m) = 0, so F<sub>right</sub> = 600/6.0 = 100 N. The beam is lightweight, so its own weight is ignored. As a check, the left support carries 300 − 100 = 200 N, more because the load is closer to it.\n\n(A) is wrong because 50 N has no basis in the torque balance (it is the quotient 300/6.0).\n(B) is wrong because 200 N is the force on the left support, not the right.\n(D) is wrong because 150 N would be half the load, which is only true if the weight were at the midpoint (3.0 m)."
    },
    {
      "id": "5-49",
      "topic": "5.5 Static Equilibrium",
      "stem": "Why is it often strategically useful to choose the pivot point at the location of an unknown force when solving a torque equilibrium problem?",
      "choices": [
        "There is no strategic advantage to this choice of pivot location at all.",
        "It changes the physical location of the unknown force on the object.",
        "It makes that force's own torque zero, removing it from the equation.",
        "It makes all forces in the problem automatically balanced, with no work."
      ],
      "correct": 2,
      "explanation": "Any force applied exactly at the chosen pivot point has a lever arm of zero about that point, so its torque contribution is automatically zero — this conveniently removes that unknown force entirely from the torque equation, often leaving just one remaining unknown to solve for directly."
    },
    {
      "id": "5-50",
      "topic": "5.5 Static Equilibrium",
      "stem": "A 2.0 m horizontal bar is attached to a wall by a hinge and supported by a cable attached at the far end, angled 40° above horizontal, holding a 150 N weight at the far end. Using torques about the hinge, find the cable's tension. (sin40°≈0.64)",
      "choices": [
        "234 N",
        "150 N",
        "96 N",
        "300 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 234 N. Take torques about the hinge, which eliminates the unknown hinge force. The weight (150 N) acts straight down at the far end, perpendicular to the bar, so its torque is (150)(2.0) = 300 N·m. The cable is angled 40° above horizontal, so only its vertical component T sin40° gives torque, (T sin40°)(2.0). Setting them equal: T = 300/(2.0 × 0.64) = 300/1.28 ≈ 234 N. The tension exceeds the weight because the cable pulls at a shallow angle.\n\n(B) is wrong because 150 N would apply if the cable were vertical (sin90° = 1) and only then would T equal the weight.\n(C) is wrong because 96 N is 150 × 0.64, multiplying instead of dividing by sin40°.\n(D) is wrong because 300 is the torque in N·m, not a force."
    },
    {
      "id": "5-51",
      "topic": "5.5 Static Equilibrium",
      "stem": "A picture frame hangs at rest, perfectly still, from two wires. Is it accurate to say 'no forces are acting significantly on the frame,' given that it's in equilibrium?",
      "choices": [
        "Yes, equilibrium means no significant forces are present.",
        "No, the forces and torques sum to zero; they're still present.",
        "Yes, but only if the frame is symmetric about its center of mass and balanced.",
        "No, equilibrium is impossible if any forces are present."
      ],
      "correct": 1,
      "explanation": "Correct: (B) No, the forces and torques sum to zero; they're still present. Equilibrium is a statement about the net force and net torque (ΣF = 0, Στ = 0), not about forces being absent. Gravity pulls the frame down and the wire tensions pull up and balance it, and all of these are real, large forces.\n\n(A) is wrong because it confuses a zero net with zero individual forces.\n(C) is wrong because symmetry is not the issue; the forces are present whether or not the frame is symmetric.\n(D) is wrong because equilibrium is only possible because forces are present and balance each other."
    },
    {
      "id": "5-52",
      "topic": "5.5 Static Equilibrium",
      "stem": "A lever balances a 20 N force at 0.50 m from the pivot against an unknown force at 0.20 m from the pivot on the other side. Find the unknown force.",
      "choices": [
        "40 N",
        "100 N",
        "50 N",
        "8.0 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 50 N. For the lever to balance, the clockwise and counterclockwise torques about the pivot must be equal: (20 N)(0.50 m) = F(0.20 m). So F = 10/0.20 = 50 N. The shorter lever arm requires a larger force.\n\n(A) is wrong because 40 N does not follow from the torque balance (it comes from doubling the 20 N).\n(B) is wrong because 100 N is twice the correct value, as if the 0.20 m arm had been read as 0.10 m (10/0.10).\n(D) is wrong because 8.0 N inverts the ratio (20 × 0.20/0.50), which would be right only if the unknown force were on the longer arm."
    },
    {
      "id": "5-53",
      "topic": "5.5 Static Equilibrium",
      "stem": "In a torque equilibrium problem with an unknown force acting at some location, why might choosing the pivot AT that exact location be a better strategy than choosing an arbitrary pivot elsewhere?",
      "choices": [
        "It makes the unknown force larger, which simplifies the algebra.",
        "It makes that unknown force's torque zero, simplifying the algebra.",
        "It has no strategic benefit over any other pivot choice at all.",
        "It changes the physics of the problem, in a way that helps the solver."
      ],
      "correct": 1,
      "explanation": "Since the torque contributed by a force depends on its lever arm distance from the pivot, placing the pivot exactly where that unknown force acts makes its lever arm (and therefore its torque contribution) zero — removing an unknown from the equation and often making the remaining algebra dramatically simpler."
    },
    {
      "id": "5-54",
      "topic": "5.5 Static Equilibrium",
      "stem": "A 5.0 m beam has negligible weight of its own, plus a 100 N weight at its center (2.5 m from either end) and a 50 N weight 1.0 m from the left end. It's supported at both ends. Find the force exerted by the right support.",
      "choices": [
        "60 N",
        "90 N",
        "150 N",
        "40 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 60 N. Take torques about the left support so its unknown force drops out. The right support at 5.0 m must balance the two weights: F<sub>right</sub>(5.0) = (100)(2.5) + (50)(1.0) = 250 + 50 = 300, so F<sub>right</sub> = 300/5.0 = 60 N. Check: the total load is 150 N, so the left support carries 90 N, and the right carries less because the weights sit nearer the left.\n\n(B) is wrong because 90 N is the left support force.\n(C) is wrong because 150 N is the total weight, which both supports share.\n(D) is wrong because 40 N has no basis in the balance (it does not follow from the torque balance)."
    },
    {
      "id": "5-55",
      "topic": "5.6 Rolling Motion",
      "stem": "What defines 'rolling without slipping'?",
      "choices": [
        "The object's linear velocity is exactly zero at the contact point.",
        "The object experiences no friction of any kind with the surface.",
        "The relation v_cm = rω holds, with no sliding at the contact point.",
        "The object's angular velocity is exactly zero at that instant."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The relation v<sub>cm</sub> = rω holds, with no sliding at the contact point. In rolling without slipping, each turn of the wheel lays out exactly one circumference of ground, so the distance the center travels matches the arc length turned, giving v<sub>cm</sub> = rω and a<sub>cm</sub> = rα. The contact point then has no velocity relative to the surface.\n\n(A) is wrong because the contact point's velocity is zero relative to the ground but the object's linear velocity is not zero.\n(B) is wrong because rolling needs static friction at the contact; with no friction there is nothing to turn the object.\n(D) is wrong because a rolling object is rotating with nonzero ω."
    },
    {
      "id": "5-56",
      "topic": "5.6 Rolling Motion",
      "stem": "A wheel of radius 0.30 m rolls without slipping with its center moving at 6.0 m/s. Find its angular velocity.",
      "choices": [
        "20 rad/s",
        "180 rad/s",
        "6.3 rad/s",
        "1.8 rad/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 20 rad/s. For rolling without slipping, the speed of the center equals the radius times the angular velocity, v<sub>cm</sub> = rω, so ω = v<sub>cm</sub>/r = (6.0 m/s) ÷ (0.30 m) = 20 rad/s. The units work because m/s divided by m leaves 1/s, and radians are dimensionless. A wheel with a small radius must spin fast to cover ground at this speed.\n\n(B) is wrong because 180 comes from multiplying 6.0 by 30 rather than dividing by 0.30; the correct method gives 20 rad/s.\n(C) is wrong because 6.3 adds the speed and the radius (6.0 + 0.30), which have different units and cannot be added; v = rω calls for division.\n(D) is wrong because 1.8 is v<sub>cm</sub> × r (6.0 × 0.30), which multiplies where the relation calls for dividing."
    },
    {
      "id": "5-57",
      "topic": "5.6 Rolling Motion",
      "stem": "A wheel spins at 15 rad/s with a radius of 0.25 m, rolling without slipping. Find the speed of its center.",
      "choices": [
        "37.5 m/s",
        "15.25 m/s",
        "3.75 m/s",
        "60 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.75 m/s. For rolling without slipping, the speed of the center is v<sub>cm</sub> = rω. With r = 0.25 m and ω = 15 rad/s, v<sub>cm</sub> = (0.25 m)(15 rad/s) = 3.75 m/s. This is the same speed at which the wheel's rim moves relative to its center, and it matches how far the wheel advances per second.\n\n(A) is wrong because 37.5 is ten times too large, which would be a decimal slip; the product 0.25 × 15 is 3.75.\n(B) is wrong because 15.25 adds the radius and the angular velocity (15 + 0.25), which have different units and cannot be added.\n(D) is wrong because 60 divides ω by r (15 ÷ 0.25), the inverted relation; the center speed is the product rω, which gives 3.75 m/s."
    },
    {
      "id": "5-58",
      "topic": "5.6 Rolling Motion",
      "stem": "For an object rolling without slipping, what is the instantaneous velocity of the single point currently in contact with the ground?",
      "choices": [
        "Equal to rω, in the opposite direction of v_cm.",
        "Equal to v_cm.",
        "Zero.",
        "Equal to 2×v_cm."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Zero. In rolling without slipping, the point touching the ground does not slide, so its velocity relative to the ground is zero at that instant. The reason: the translation v<sub>cm</sub> forward is exactly canceled there by the rotational velocity rω backward, since v<sub>cm</sub> = rω. This is also why static friction acts there.\n\n(A) is wrong because rω backward is canceled by v<sub>cm</sub> forward, not left over.\n(B) is wrong because a contact point moving at v<sub>cm</sub> would be sliding along the ground.\n(D) is wrong because 2v<sub>cm</sub> is the speed of the top of the wheel (v<sub>cm</sub> + rω), not the bottom."
    },
    {
      "id": "5-59",
      "topic": "5.6 Rolling Motion",
      "stem": "What type of friction acts at the contact point of an object rolling without slipping?",
      "choices": [
        "Both static and kinetic friction act simultaneously.",
        "No friction acts at all during rolling without slipping.",
        "Static friction, since the contact point doesn't slide.",
        "Kinetic friction, since the object is moving."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Static friction, since the contact point doesn't slide. At the contact point of a wheel rolling without slipping there is no relative motion between the surface and the wheel, and friction in that case is static. It supplies the torque or force needed to maintain the rolling condition and does no work, because its point of application is momentarily at rest.\n\n(A) is wrong because kinetic friction needs sliding, which is absent.\n(B) is wrong because without friction a wheel could not roll without slipping (e.g., ice).\n(D) is wrong because the object as a whole moves, but kinetic friction depends on the relative motion at the contact surface, which is zero."
    },
    {
      "id": "5-60",
      "topic": "5.6 Rolling Motion",
      "stem": "A wheel of radius 0.20 m rolls without slipping with angular acceleration 10 rad/s². Find the linear (center-of-mass) acceleration.",
      "choices": [
        "5.0 m/s²",
        "0.5 m/s²",
        "50 m/s²",
        "2.0 m/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 2.0 m/s². For rolling without slipping, the linear acceleration of the center is a<sub>cm</sub> = rα, the radius times the angular acceleration. With r = 0.20 m and α = 10 rad/s², a<sub>cm</sub> = (0.20 m)(10 rad/s²) = 2.0 m/s². This follows from differentiating v<sub>cm</sub> = rω with respect to time.\n\n(A) is wrong because 5.0 comes from dividing α by 2 rather than multiplying by r; the radius, 0.20 m, is the factor that must multiply α.\n(B) is wrong because 0.5 would be the product of 10 and 0.05, but the radius is 0.20 m, and 10 × 0.20 gives 2.0.\n(C) is wrong because 50 divides α by r (10 ÷ 0.20), the inverted relation; the acceleration of the center is the product rα, which gives 2.0 m/s²."
    },
    {
      "id": "5-61",
      "topic": "5.6 Rolling Motion",
      "stem": "If a wheel is spinning while also sliding across a surface (not rolling without slipping), does v_cm=rω still hold?",
      "choices": [
        "Yes, this relationship always holds for any rotating object.",
        "No, this relationship never holds under any circumstances.",
        "Yes, but only if the object is a perfect circle.",
        "No, v_cm=rω only holds for rolling without slipping."
      ],
      "correct": 3,
      "explanation": "Correct: (D) No, v<sub>cm</sub> = rω only holds for rolling without slipping. The relation comes from the no-slip condition: the contact point is at rest relative to the surface, so the forward speed equals the rim's backward speed. If the wheel slides while spinning (a skidding tire or a spinning-in-place wheel), v<sub>cm</sub> and ω are independent, and the contact point has relative motion.\n\n(A) is wrong because this relation is not a property of every rotating object.\n(B) is wrong because it does hold when there is no slipping.\n(C) is wrong because shape alone does not guarantee it; a perfect circle can skid."
    },
    {
      "id": "5-62",
      "topic": "5.6 Rolling Motion",
      "stem": "A ball of radius 0.15 m accelerates at 3.0 m/s² while rolling without slipping. Find its angular acceleration.",
      "choices": [
        "3.15 rad/s²",
        "2.85 rad/s²",
        "20 rad/s²",
        "0.45 rad/s²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 20 rad/s². For rolling without slipping, a<sub>cm</sub> = rα, so the angular acceleration is α = a<sub>cm</sub>/r = (3.0 m/s²) ÷ (0.15 m) = 20 rad/s². The units work because m/s² divided by m leaves 1/s², which is rad/s². A small ball must have a large angular acceleration to speed up at a given linear rate.\n\n(A) is wrong because 3.15 adds the numbers 3.0 and 0.15, which have different units and cannot be added; the relation is a quotient.\n(B) is wrong because 2.85 subtracts the radius from the acceleration (3.0 − 0.15), which again mixes unlike units.\n(D) is wrong because 0.45 multiplies the acceleration by the radius (3.0 × 0.15) instead of dividing; since a = rα, the angular acceleration is a divided by r, giving 20 rad/s²."
    },
    {
      "id": "5-63",
      "topic": "5.6 Rolling Motion",
      "stem": "Explain the key physical distinction between an object 'rolling without slipping' and an object that is purely 'sliding' across a surface.",
      "choices": [
        "Rolling objects have zero angular velocity; sliding objects have nonzero angular velocity, always.",
        "Rolling objects experience no friction; sliding objects always experience kinetic friction, always.",
        "Rolling has zero contact-point velocity (static friction); sliding has relative motion (kinetic friction).",
        "There is no meaningful physical distinction between the two kinds of motion of an object."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Rolling has zero contact-point velocity (static friction); sliding has relative motion (kinetic friction). The distinction is what the contact point does relative to the surface. In rolling without slipping, the point touching the ground is momentarily at rest relative to it, so the relevant friction is static and the speed of the center obeys v<sub>cm</sub> = rω. In sliding, there is relative motion at the contact, so kinetic friction acts and no such link exists.\n\n(A) is wrong because rolling objects are rotating, so ω ≠ 0, and pure sliding can occur with ω = 0, which reverses the real picture.\n(B) is wrong because rolling does involve friction, specifically static friction at the contact point, which does not dissipate energy as the object rolls.\n(D) is wrong because the two cases differ in the motion of the contact point, in the type of friction acting, and in whether the relation v = rω holds."
    },
    {
      "id": "5-64",
      "topic": "5.6 Rolling Motion",
      "stem": "A wheel's angular velocity increases linearly with time as it rolls without slipping. At t=2.0 s, ω=8.0 rad/s, and the wheel's radius is 0.25 m. Find v_cm at that instant.",
      "choices": [
        "2.0 m/s",
        "32 m/s",
        "4.0 m/s",
        "0.5 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 2.0 m/s. The wheel rolls without slipping, so at any instant v<sub>cm</sub> = rω. At t = 2.0 s, ω = 8.0 rad/s, so v<sub>cm</sub> = (0.25 m)(8.0 rad/s) = 2.0 m/s. The time is not needed beyond identifying the instant.\n\n(B) is wrong because 32 divides ω by r (8.0/0.25), the inverted relation.\n(C) is wrong because 4.0 is ω/t (8.0/2.0), which is not part of the instantaneous relation v = rω.\n(D) is wrong because 0.5 is 0.25 × 2.0, using the time in place of ω."
    },
    {
      "id": "5-65",
      "topic": "5.6 Rolling Motion",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: A solid sphere and a hoop, both of the same mass and radius, are released from rest at the top of the same incline and roll without slipping. Which one reaches the bottom with a greater linear (center-of-mass) acceleration, and conceptually why?",
      "choices": [
        "The comparison depends entirely on the incline's angle, with no general answer.",
        "The hoop, since it has a larger moment of inertia and so gains more speed at the bottom.",
        "Both have identical accelerations, since they have the same mass and radius and start together.",
        "The solid sphere, since its smaller moment of inertia leaves more energy for its center-of-mass motion."
      ],
      "correct": 3,
      "explanation": "For a rolling object, gravity's torque about the contact point has to produce BOTH linear acceleration of the center of mass AND angular acceleration of the spin — and objects with a larger moment of inertia (like the hoop, I=MR², versus the sphere's I=(2/5)MR²) require more of that available 'torque budget' just to spin up, leaving less left over to accelerate the center of mass forward. This is exactly why, in a race down a ramp, a solid sphere reliably beats a hoop of the same mass and radius — a relationship this unit sets up conceptually, and which Unit 6 makes fully quantitative using rotational kinetic energy."
    }
  ],
  "6": [
    {
      "id": "6-1",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "Find the rotational kinetic energy of an object with moment of inertia 4.0 kg·m² spinning at 5.0 rad/s.",
      "choices": [
        "100 J",
        "20 J",
        "10 J",
        "50 J"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 50 J. Rotational kinetic energy is KE<sub>rot</sub> = ½Iω², the analog of ½mv² with I in place of m and ω in place of v. Then KE<sub>rot</sub> = ½(4.0 kg·m²)(5.0 rad/s)² = ½(4.0)(25) = 50 J.\n\n(A) is wrong because 100 J is Iω² and leaves out the ½.\n(B) is wrong because 20 J is Iω, with ω not squared and no ½.\n(C) is wrong because 10 J is ½Iω, again failing to square ω."
    },
    {
      "id": "6-2",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object's angular velocity is doubled while its moment of inertia stays the same. How does its rotational kinetic energy change?",
      "choices": [
        "It quadruples.",
        "It is cut in half.",
        "It doubles.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Correct: (A) It quadruples. The rotational kinetic energy is KE<sub>rot</sub> = ½Iω², which depends on the square of the angular velocity. With I fixed, doubling ω multiplies the energy by 2² = 4, since ½I(2ω)² = 4(½Iω²). This squared dependence is the same as for ½mv², where doubling the speed quadruples the translational kinetic energy.\n\n(B) is wrong because the energy increases when ω increases; a faster spin stores more energy, so the energy cannot be cut in half.\n(C) is wrong because it treats the energy as linear in ω and forgets the square; doubling ω gives four times the energy, not two.\n(D) is wrong because ω is a direct variable in KE<sub>rot</sub> = ½Iω², so changing it necessarily changes the stored energy."
    },
    {
      "id": "6-3",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object has rotational kinetic energy 72 J and moment of inertia 4.0 kg·m². Find its angular velocity.",
      "choices": [
        "3.0 rad/s",
        "9.0 rad/s",
        "18 rad/s",
        "6.0 rad/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 6.0 rad/s. Start with KE<sub>rot</sub> = ½Iω² and solve for ω: 72 = ½(4.0)ω² = 2.0ω², so ω² = 36 and ω = 6.0 rad/s. Remember to take the square root at the end.\n\n(A) is wrong because 3.0 rad/s gives KE = ½(4.0)(9) = 18 J, not 72 J.\n(B) is wrong because 9.0 rad/s gives KE = ½(4.0)(81) = 162 J.\n(C) is wrong because 18 is 72/4.0, which forgets both the ½ and the square root."
    },
    {
      "id": "6-4",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object's moment of inertia is doubled while its angular velocity stays the same. How does its rotational kinetic energy change?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It stays the same.",
        "It quadruples."
      ],
      "correct": 0,
      "explanation": "Correct: (A) It doubles. The rotational kinetic energy KE<sub>rot</sub> = ½Iω² is directly proportional to the moment of inertia when ω is fixed, so doubling I doubles the energy: ½(2I)ω² = 2(½Iω²). A larger I means more mass farther from the axis, which stores more energy at the same spin rate. The stem keeps the angular velocity unchanged, so only the I factor matters.\n\n(B) is wrong because a larger moment of inertia increases the energy at a fixed spin rate, so the energy cannot be cut in half.\n(C) is wrong because I is a factor in the formula, so changing it changes the kinetic energy.\n(D) is wrong because quadrupling would require KE to depend on I², but only ω is squared in the formula; I appears to the first power, so doubling I only doubles KE."
    },
    {
      "id": "6-5",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "Find the rotational kinetic energy of a solid disk (mass 3.0 kg, radius 0.40 m) spinning at 10 rad/s.",
      "choices": [
        "6.0 J",
        "12 J",
        "24 J",
        "48 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 12 J. The problem gives mass and radius, so find I first. A solid disk has I = ½MR² = ½(3.0)(0.40)² = ½(3.0)(0.16) = 0.24 kg·m². Then KE<sub>rot</sub> = ½Iω² = ½(0.24)(10)² = ½(0.24)(100) = 12 J.\n\n(A) is wrong because 6.0 J uses the ½ twice (I = ¼MR²).\n(C) is wrong because 24 J leaves out the ½ in ½Iω² (it equals Iω²).\n(D) is wrong because 48 J comes from the hoop value I = MR² = 0.48 together with no ½ factor."
    },
    {
      "id": "6-6",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "In the formula KE_rot=½Iω², what role does moment of inertia I play, by direct analogy with translational kinetic energy KE=½mv²?",
      "choices": [
        "I has no analog in the translational formula.",
        "The role of force.",
        "The role of mass.",
        "The role of velocity."
      ],
      "correct": 2,
      "explanation": "Correct: (C) The role of mass. Comparing ½mv² with ½Iω²: v is replaced by ω and m is replaced by I. Mass measures resistance to a change in linear motion, and the moment of inertia I measures resistance to a change in rotational motion, so I is the rotational counterpart of mass. The same pattern appears in p = mv and L = Iω.\n\n(A) is wrong because I has a direct analog in the translational formula, namely the mass m, which sits in the same position in the expression.\n(B) is wrong because force has no place in either energy formula; kinetic energy depends on mass and speed, not on the force that produced the motion.\n(D) is wrong because the role of velocity in the rotational formula is played by the angular velocity ω, not by I, which multiplies ω² just as m multiplies v²."
    },
    {
      "id": "6-7",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "A hoop and a solid disk have equal mass, radius, and angular velocity. Compare their rotational kinetic energies.",
      "choices": [
        "Cannot be compared without more information.",
        "The disk has greater rotational KE.",
        "They have equal rotational KE, since KE only depends on ω.",
        "The hoop has greater rotational KE."
      ],
      "correct": 3,
      "explanation": "Since KE<sub>rot</sub>=½Iω² and both objects share the same ω, the object with the larger moment of inertia has the greater rotational KE. The hoop (I=MR²) has twice the moment of inertia of the disk (I=½MR²) for equal mass and radius, so it has twice the rotational KE as well."
    },
    {
      "id": "6-8",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "Find the rotational kinetic energy of a hoop (mass 2.0 kg, radius 0.50 m) spinning at 6.0 rad/s.",
      "choices": [
        "36 J",
        "9.0 J",
        "4.5 J",
        "18 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 9.0 J. A hoop has all of its mass at the rim, so its moment of inertia is I = MR² = (2.0 kg)(0.50 m)² = 0.50 kg·m². Then the rotational kinetic energy is KE<sub>rot</sub> = ½Iω² = ½(0.50)(6.0)² = ½(0.50)(36) = 9.0 J. Both the moment of inertia and the squared angular velocity are needed.\n\n(A) is wrong because 36 J is just ω² with no moment of inertia and no factor of ½, so it is not the energy of anything.\n(C) is wrong because 4.5 J comes from using the disk formula ½MR² (I = 0.25 kg·m²) for a hoop, but a hoop has all its mass at the rim, so I = MR².\n(D) is wrong because 18 J is Iω² = (0.50)(36), which leaves out the ½ in ½Iω²; the correct energy is half that value, 9.0 J."
    },
    {
      "id": "6-9",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object with I=1.5 kg·m² has rotational kinetic energy 27 J. Find its angular velocity.",
      "choices": [
        "6.0 rad/s",
        "4.0 rad/s",
        "9.0 rad/s",
        "3.0 rad/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 6.0 rad/s. From KE<sub>rot</sub> = ½Iω², 27 J = ½(1.5 kg·m²)ω² = 0.75ω², so ω² = 27 ÷ 0.75 = 36 and ω = 6.0 rad/s. Check: ½(1.5)(36) = 27 J, which matches the given energy. The angular velocity enters squared, so a square root is needed in the last step.\n\n(B) is wrong because ω = 4.0 rad/s gives ½(1.5)(16) = 12 J, not the 27 J stated in the problem.\n(C) is wrong because ω = 9.0 rad/s gives ½(1.5)(81) ≈ 61 J, which is more than twice the given energy.\n(D) is wrong because ω = 3.0 rad/s gives ½(1.5)(9) ≈ 6.8 J, which is far too small compared with the stated 27 J."
    },
    {
      "id": "6-10",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "What is the correct SI unit for rotational kinetic energy?",
      "choices": [
        "kg·m²/s",
        "Joules (J)",
        "N·m (as torque)",
        "kg·m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) Joules (J). Energy of any form, including rotational kinetic energy, is measured in joules (1 J = 1 kg·m²/s²). Checking with the formula ½Iω²: kg·m² × (1/s)² = kg·m²/s² = J.\n\n(A) is wrong because kg·m²/s is the unit of angular momentum.\n(C) is wrong because N·m is the unit of torque; it equals a joule dimensionally but a torque is not an energy.\n(D) is wrong because kg·m/s is the unit of linear momentum."
    },
    {
      "id": "6-11",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object has rotational kinetic energy 40 J while spinning at 4.0 rad/s. Find its moment of inertia.",
      "choices": [
        "10 kg·m²",
        "2.5 kg·m²",
        "5.0 kg·m²",
        "20 kg·m²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.0 kg·m². Solve KE<sub>rot</sub> = ½Iω² for the moment of inertia: I = 2KE/ω² = 2(40 J)/(4.0 rad/s)² = 80/16 = 5.0 kg·m². Check: ½(5.0)(16) = 40 J, which matches the given energy. The unit works out because joules divided by 1/s² is kg·m².\n\n(A) is wrong because I = 10 kg·m² gives ½(10)(16) = 80 J, which is double the 40 J given in the stem.\n(B) is wrong because I = 2.5 kg·m² gives ½(2.5)(16) = 20 J, which is only half of the given energy.\n(D) is wrong because I = 20 kg·m² gives ½(20)(16) = 160 J, which is four times the given energy of 40 J."
    },
    {
      "id": "6-12",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "A top spins in place on a table, with zero translational velocity of its center of mass. Does it have any kinetic energy?",
      "choices": [
        "No, kinetic energy requires translational motion.",
        "Only if it's also losing height.",
        "No, since it isn't translating anywhere.",
        "Yes — it has purely rotational kinetic energy."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Yes — it has purely rotational kinetic energy. Kinetic energy is energy of motion, and a spinning object has it in the form KE<sub>rot</sub> = ½Iω², even when its center of mass stays still. Every piece of the top moves in a circle around the axis, so each piece has kinetic energy, and the sum over all the pieces is the rotational kinetic energy.\n\n(A) is wrong because translation is not required for kinetic energy; rotation alone gives the object energy of motion.\n(B) is wrong because losing height concerns gravitational potential energy and is unrelated to whether the top has kinetic energy at the moment it spins.\n(C) is wrong because staying in one place does not mean there is no motion; the top's center of mass is still, but its parts are moving in circles, so it has kinetic energy."
    },
    {
      "id": "6-13",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "Find the rotational kinetic energy of a rod (mass 2.0 kg, length 3.0 m) rotating about its center at 4.0 rad/s.",
      "choices": [
        "12 J",
        "24 J",
        "6.0 J",
        "18 J"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 12 J. A uniform rod rotating about its center has a moment of inertia I = (1/12)ML² = (1/12)(2.0 kg)(3.0 m)² = (1/12)(2.0)(9.0) = 1.5 kg·m². Then the rotational kinetic energy is KE<sub>rot</sub> = ½Iω² = ½(1.5)(4.0)² = ½(1.5)(16) = 12 J. The center axis is what makes the factor 1/12 the right one.\n\n(B) is wrong because 24 J is Iω² = (1.5)(16), which leaves out the ½ in the energy formula.\n(C) is wrong because 6.0 J comes from a moment of inertia half as big (0.75 kg·m²), which is not the value for a rod about its center.\n(D) is wrong because 18 J results from using I = 2.25 kg·m², which is ML²/8 instead of the correct ML²/12 for a rod rotating about its center."
    },
    {
      "id": "6-14",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object's angular velocity triples while its moment of inertia stays the same. How does its rotational kinetic energy change?",
      "choices": [
        "It stays the same.",
        "It increases sixfold.",
        "It triples.",
        "It increases ninefold."
      ],
      "correct": 3,
      "explanation": "Correct: (D) It increases ninefold. The rotational kinetic energy KE<sub>rot</sub> = ½Iω² depends on the square of the angular velocity, so tripling ω multiplies the energy by 3² = 9 when I is constant. For example, ½I(3ω)² = 9(½Iω²). The stem keeps the moment of inertia unchanged, so only the squared term matters.\n\n(A) is wrong because ω is in the formula, so changing the angular velocity changes the energy.\n(B) is wrong because sixfold has no basis in the formula; squaring the tripled angular velocity gives a factor of 9, not 6.\n(C) is wrong because tripling would be the result only if the kinetic energy were linear in ω, but the energy depends on ω², so tripling ω gives nine times the energy."
    },
    {
      "id": "6-15",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "An object's moment of inertia is doubled while its angular velocity is simultaneously halved. Compare its new rotational kinetic energy to its original value.",
      "choices": [
        "The new KE is one-fourth the original KE.",
        "The new KE is twice the original KE.",
        "The new KE is equal to the original KE.",
        "The new KE is half the original KE."
      ],
      "correct": 3,
      "explanation": "Correct: (D) The new KE is half the original KE. KE<sub>new</sub> = ½(2I)(ω/2)² = ½(2I)(ω²/4) = (2/4)(½Iω²) = ½ of the original. The doubled I contributes a factor of 2, but halving ω contributes a factor of (½)² = ¼, and 2 × ¼ = ½.\n\n(A) is wrong because ¼ counts only the halved ω and ignores the doubled I.\n(B) is wrong because twice would count only the doubled I.\n(C) is wrong because the two changes do not cancel, since ω is squared and I is not."
    },
    {
      "id": "6-16",
      "topic": "6.1 Rotational Kinetic Energy",
      "stem": "Find the rotational kinetic energy of a spinning wheel with I=0.80 kg·m² at ω=12 rad/s.",
      "choices": [
        "38.4 J",
        "57.6 J",
        "9.6 J",
        "115.2 J"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 57.6 J. The rotational kinetic energy is KE<sub>rot</sub> = ½Iω². With I = 0.80 kg·m² and ω = 12 rad/s, KE<sub>rot</sub> = ½(0.80)(12)² = ½(0.80)(144) = 57.6 J. Note that the angular velocity must be squared before multiplying, and the factor ½ must be kept.\n\n(A) is wrong because 38.4 J is Iω²/3 = (0.80)(144)/3, which uses a factor of one-third in place of one-half.\n(C) is wrong because 9.6 J is Iω = (0.80)(12), with ω not squared and no ½, which is neither an energy nor the correct formula.\n(D) is wrong because 115.2 J is Iω² = (0.80)(144), which omits the factor of ½; the correct energy is half that, 57.6 J."
    },
    {
      "id": "6-17",
      "topic": "6.2 Angular Momentum",
      "stem": "Which formula correctly gives angular momentum for a rotating rigid object?",
      "choices": [
        "L = Iω",
        "L = ½Iω²",
        "L = ½mv²",
        "L = Iα"
      ],
      "correct": 0,
      "explanation": "Correct: (A) L = Iω. Angular momentum is the rotational analog of linear momentum p = mv, with the moment of inertia I replacing the mass m and the angular velocity ω replacing the velocity v. It has units of kg·m²/s. For a rigid object spinning about a fixed axis, this single product gives the angular momentum.\n\n(B) is wrong because ½Iω² is the rotational kinetic energy, which has units of joules, not the units of angular momentum.\n(C) is wrong because ½mv² is the translational kinetic energy of a moving mass and has nothing to do with rotation or angular momentum.\n(D) is wrong because Iα is a torque (Στ = Iα), the rotational analog of force; it measures the rate of change of angular momentum, not the angular momentum itself."
    },
    {
      "id": "6-18",
      "topic": "6.2 Angular Momentum",
      "stem": "Find the angular momentum of an object with I=5.0 kg·m² spinning at 8.0 rad/s.",
      "choices": [
        "3.0 kg·m²/s",
        "160 kg·m²/s",
        "13 kg·m²/s",
        "40 kg·m²/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 40 kg·m²/s. Angular momentum of a rigid rotating object is L = Iω. With I = 5.0 kg·m² and ω = 8.0 rad/s, L = (5.0 kg·m²)(8.0 rad/s) = 40 kg·m²/s. The units are those of angular momentum, kilogram meters squared per second.\n\n(A) is wrong because 3.0 subtracts the numbers (8.0 − 5.0), but angular momentum is the product of the moment of inertia and the angular velocity.\n(B) is wrong because 160 is Iω² = 5.0 × 64, which squares ω as in the energy formula; angular momentum depends on ω to the first power.\n(C) is wrong because 13 adds the numbers (5.0 + 8.0), but moment of inertia and angular velocity have different units and are multiplied."
    },
    {
      "id": "6-19",
      "topic": "6.2 Angular Momentum",
      "stem": "Like linear momentum, angular momentum has a directional quality. How is this direction typically described for rotation in a single plane?",
      "choices": [
        "Counterclockwise or clockwise.",
        "Up or down only.",
        "Angular momentum has no directional quality at all.",
        "North, south, east, or west."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Counterclockwise or clockwise. For rotation in a single plane, angular momentum points along the axis (by the right-hand rule), and in practice its direction is given as a sign: counterclockwise is conventionally positive and clockwise negative, as with torque.\n\n(B) is wrong because up/down describes the direction of the axis vector in 3D but is not how in-plane rotation is normally described.\n(C) is wrong because angular momentum is a vector with direction, which matters when adding or conserving it.\n(D) is wrong because compass directions describe linear displacement, not sense of rotation."
    },
    {
      "id": "6-20",
      "topic": "6.2 Angular Momentum",
      "stem": "An object has angular momentum 60 kg·m²/s and moment of inertia 10 kg·m². Find its angular velocity.",
      "choices": [
        "600 rad/s",
        "50 rad/s",
        "6.0 rad/s",
        "0.17 rad/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 6.0 rad/s. Since L = Iω, the angular velocity is ω = L/I = (60 kg·m²/s) ÷ (10 kg·m²) = 6.0 rad/s. Check the units: (kg·m²/s) divided by (kg·m²) leaves 1/s, which is the unit of angular velocity. This is the same idea as finding a speed from linear momentum divided by mass, with the moment of inertia in the role of the mass.\n\n(A) is wrong because 600 multiplies L and I (60 × 10), but the angular velocity is found by dividing the angular momentum by the moment of inertia.\n(B) is wrong because 50 subtracts the two numbers (60 − 10), which have different units and are related by a quotient, not a difference.\n(D) is wrong because 0.17 inverts the ratio (10 ÷ 60); since L = Iω, the angular velocity is L divided by I, which gives 6.0."
    },
    {
      "id": "6-21",
      "topic": "6.2 Angular Momentum",
      "stem": "An object has angular momentum 45 kg·m²/s while spinning at 9.0 rad/s. Find its moment of inertia.",
      "choices": [
        "0.2 kg·m²",
        "5.0 kg·m²",
        "36 kg·m²",
        "405 kg·m²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 5.0 kg·m². Since L = Iω, the moment of inertia is I = L/ω = (45 kg·m²/s) ÷ (9.0 rad/s) = 5.0 kg·m². Check: (5.0)(9.0) = 45, which matches the given angular momentum. The unit works because kg·m²/s divided by 1/s leaves kg·m².\n\n(A) is wrong because 0.2 inverts the ratio (9.0 ÷ 45); the moment of inertia is the angular momentum divided by the angular velocity, which gives 5.0.\n(C) is wrong because 36 subtracts 9.0 from 45, but the two quantities have different units and are related by a product, so a difference is meaningless.\n(D) is wrong because 405 multiplies L by ω (45 × 9.0) instead of dividing, and a product would make the object's inertia grow with its spin, which is not how L = Iω works."
    },
    {
      "id": "6-22",
      "topic": "6.2 Angular Momentum",
      "stem": "A particle moves in a straight line, never actually orbiting anything. Can it still have nonzero angular momentum about some chosen point not on its path?",
      "choices": [
        "No, angular momentum requires actual circular motion about a point in space.",
        "Yes, but only if the particle is accelerating along its path at that time.",
        "No, only rigid rotating objects can have angular momentum about any point.",
        "Yes — it depends on momentum and perpendicular distance, not the path's shape."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Yes — it depends on momentum and perpendicular distance, not the path's shape. For a point particle, the angular momentum about a chosen point is L = rp sinθ = mvr<sub>⊥</sub>, where r<sub>⊥</sub> is the perpendicular distance from the point to the line of motion. A particle moving in a straight line that does not pass through the point has a nonzero r<sub>⊥</sub>, hence a nonzero L, and L stays constant if no force acts.\n\n(A) is wrong because circular motion is not needed; the particle only has to have momentum and a perpendicular offset from the chosen point.\n(B) is wrong because acceleration is not required; a particle moving at constant velocity still has L = mvr<sub>⊥</sub> about the point.\n(C) is wrong because point particles have angular momentum about any point, not just rigid rotating objects, since the definition uses position and momentum."
    },
    {
      "id": "6-23",
      "topic": "6.2 Angular Momentum",
      "stem": "A 2.0 kg particle moves at 5.0 m/s, with its path passing 3.0 m (perpendicular distance) from a reference point. Find its angular momentum about that point.",
      "choices": [
        "15 kg·m²/s",
        "30 kg·m²/s",
        "10 kg·m²/s",
        "45 kg·m²/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 30 kg·m²/s. For a particle, L = mvr⊥ with r⊥ the perpendicular distance from the reference point to the line of motion. Here L = (2.0 kg)(5.0 m/s)(3.0 m) = 30 kg·m²/s. The stem gives the perpendicular distance, so no sinθ factor is needed.\n\n(A) is wrong because 15 is v × r (5.0 × 3.0), omitting the mass.\n(C) is wrong because 10 is mv (linear momentum), omitting the distance.\n(D) is wrong because 45 is vr² (5.0 × 3.0²), which squares the distance and leaves out the mass."
    },
    {
      "id": "6-24",
      "topic": "6.2 Angular Momentum",
      "stem": "An object's angular velocity is doubled while its moment of inertia stays the same. How does its angular momentum change?",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It is cut in half.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Correct: (A) It doubles. Angular momentum is L = Iω, which is linear in ω, so with the moment of inertia fixed, doubling ω doubles L: I(2ω) = 2Iω. This contrasts with rotational kinetic energy, which depends on ω² and would quadruple under the same change. The stem keeps I unchanged, so the whole change comes through the first power of ω.\n\n(B) is wrong because quadrupling is the kinetic-energy result, where ω is squared, not the angular momentum result, where ω appears to the first power.\n(C) is wrong because L increases with ω, so a doubled angular velocity cannot cut the angular momentum in half.\n(D) is wrong because ω is a direct factor in L = Iω, so changing it with I fixed necessarily changes the angular momentum."
    },
    {
      "id": "6-25",
      "topic": "6.2 Angular Momentum",
      "stem": "A torque of 8.0 N·m is applied to an object for 3.0 s. Find the resulting change in angular momentum.",
      "choices": [
        "8.0 kg·m²/s",
        "2.7 kg·m²/s",
        "11 kg·m²/s",
        "24 kg·m²/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 24 kg·m²/s. The angular impulse–momentum relation is τΔt = ΔL, the rotational version of FΔt = Δp. So ΔL = (8.0 N·m)(3.0 s) = 24 N·m·s = 24 kg·m²/s.\n\n(A) is wrong because 8.0 is the torque alone, with no time factor.\n(B) is wrong because 2.7 divides by time (8.0/3.0), which would be the formula for something else.\n(C) is wrong because 11 adds the numbers, which have different units."
    },
    {
      "id": "6-26",
      "topic": "6.2 Angular Momentum",
      "stem": "An object's angular momentum changes by 50 kg·m²/s over 5.0 s. Find the average torque that caused this change.",
      "choices": [
        "10 N·m",
        "250 N·m",
        "0.1 N·m",
        "45 N·m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 10 N·m. The net torque equals the rate of change of angular momentum, τ = ΔL/Δt, which is the rotational form of Newton's second law. Here τ = (50 kg·m²/s) ÷ (5.0 s) = 10 N·m. The units work because kg·m²/s² is the same as N·m.\n\n(B) is wrong because 250 multiplies ΔL by Δt (50 × 5.0), but torque is a rate, so the angular momentum change must be divided by the time.\n(C) is wrong because 0.1 inverts the ratio (5.0 ÷ 50); the correct quotient is ΔL divided by Δt, which gives 10 N·m.\n(D) is wrong because 45 subtracts the numbers (50 − 5.0), but angular momentum and time have different units and are related by a quotient, not a difference."
    },
    {
      "id": "6-27",
      "topic": "6.2 Angular Momentum",
      "stem": "How does the relationship τ_net=ΔL/Δt relate to Unit 4's impulse-momentum theorem, F=Δp/Δt?",
      "choices": [
        "They are unrelated formulas from different areas of physics.",
        "τ_net=ΔL/Δt is a special case of F=Δp/Δt, only true for circular paths.",
        "They are directly analogous, with torque paralleling force.",
        "The two formulas contradict each other."
      ],
      "correct": 2,
      "explanation": "Correct: (C) They are directly analogous, with torque paralleling force. τ_net = ΔL/Δt is Newton's second law in its momentum form for rotation, just as F<sub>net</sub> = Δp/Δt is for linear motion. Torque replaces force and angular momentum replaces linear momentum.\n\n(A) is wrong because they are the same structure with rotational variables.\n(B) is wrong because the rotational law is a separate law that applies to all rotation, and not a case of the linear law restricted to circular paths.\n(D) is wrong because they do not conflict; both hold at once."
    },
    {
      "id": "6-28",
      "topic": "6.2 Angular Momentum",
      "stem": "An object with I=3.0 kg·m² starts at rest. A constant torque of 6.0 N·m acts on it for 4.0 s. Find its final angular velocity.",
      "choices": [
        "24 rad/s",
        "4.0 rad/s",
        "2.0 rad/s",
        "8.0 rad/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 8.0 rad/s. The change in angular momentum is ΔL = τΔt = (6.0 N·m)(4.0 s) = 24 kg·m²/s. The object starts at rest, so L<sub>final</sub> = 24, and ω = L/I = 24/3.0 = 8.0 rad/s. The same answer follows from α = τ/I = 2.0 rad/s², ω = αt = 8.0 rad/s.\n\n(A) is wrong because 24 is the angular momentum, not ω.\n(B) is wrong because 4.0 is the time, with no basis as ω.\n(C) is wrong because 2.0 rad/s² is the angular acceleration, which still must be multiplied by t."
    },
    {
      "id": "6-29",
      "topic": "6.2 Angular Momentum",
      "stem": "Under what condition does an object's angular momentum remain unchanged over time?",
      "choices": [
        "Whenever its moment of inertia is constant, whatever torque is applied to it.",
        "Whenever the net torque acting on it is zero.",
        "Whenever its angular velocity is constant, whatever torque is applied to it.",
        "Angular momentum always changes over time, whatever torque is applied to it."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Whenever the net torque acting on it is zero. Since τ_net = ΔL/Δt, zero net torque means ΔL = 0 and L stays constant. This is the condition for conservation of angular momentum.\n\n(A) is wrong because constant I does not prevent L from changing; a torque changes ω and thus L.\n(C) is wrong because L = Iω, so a constant ω does not guarantee a constant L when I can change or a net torque acts; the actual condition is zero net external torque, which keeps L constant.\n(D) is wrong because L is constant when net torque is zero."
    },
    {
      "id": "6-30",
      "topic": "6.2 Angular Momentum",
      "stem": "A figure skater has moment of inertia 4.0 kg·m² while spinning at 2.0 rad/s. Find her angular momentum.",
      "choices": [
        "16 kg·m²/s",
        "6.0 kg·m²/s",
        "8.0 kg·m²/s",
        "2.0 kg·m²/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 8.0 kg·m²/s. Angular momentum of a rotating object is L = Iω. With I = 4.0 kg·m² and ω = 2.0 rad/s, L = (4.0 kg·m²)(2.0 rad/s) = 8.0 kg·m²/s. The skater's moment of inertia and spin rate multiply directly, with no squares or fractions.\n\n(A) is wrong because 16 is Iω² = 4.0 × 4.0, which squares ω as in the kinetic-energy formula; angular momentum depends on ω to the first power.\n(B) is wrong because 6.0 adds the numbers (4.0 + 2.0), but the moment of inertia and angular velocity have different units and are multiplied.\n(D) is wrong because 2.0 is just the angular velocity ω and leaves out the moment of inertia, so it is not the angular momentum of the skater."
    },
    {
      "id": "6-31",
      "topic": "6.2 Angular Momentum",
      "stem": "Are the units of angular momentum (kg·m²/s) directly comparable or convertible to the units of linear momentum (kg·m/s)?",
      "choices": [
        "No — they have different units and are different physical quantities.",
        "Yes, but only for objects moving in a perfect circle.",
        "Yes, they are the exact same physical quantity, just measured differently.",
        "No, angular momentum has no defined units at all."
      ],
      "correct": 0,
      "explanation": "Correct: (A) No — they have different units and are different physical quantities. Linear momentum p = mv has units kg·m/s, while angular momentum L = Iω (or r × p) has units kg·m²/s, with an extra factor of length. A quantity with different dimensions cannot be converted or compared directly, just as a force cannot be compared with an energy even though both involve kilograms and meters.\n\n(B) is wrong because even for motion in a perfect circle the units remain different, since L = rp still carries the extra length factor of the radius.\n(C) is wrong because they are distinct quantities, not the same quantity measured in different units; one describes straight-line motion and the other describes rotation about a point.\n(D) is wrong because angular momentum has definite units, namely kg·m²/s, so it can be measured and compared with other angular momenta."
    },
    {
      "id": "6-32",
      "topic": "6.2 Angular Momentum",
      "stem": "Two objects have the same angular momentum, 20 kg·m²/s. Object 1 has I=2.0 kg·m²; Object 2 has I=5.0 kg·m². Compare their angular velocities.",
      "choices": [
        "Cannot be determined without more information.",
        "Object 1 spins faster (10 rad/s vs. 4.0 rad/s).",
        "Object 2 spins faster.",
        "Both spin at the same angular velocity."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Object 1 spins faster (10 rad/s vs. 4.0 rad/s). With the same L, ω = L/I. Object 1: 20/2.0 = 10 rad/s. Object 2: 20/5.0 = 4.0 rad/s. The smaller moment of inertia gives the larger ω.\n\n(A) is wrong because L and I are given, which is enough to compute both.\n(C) is wrong because it reverses the inverse relation between ω and I.\n(D) is wrong because equal L with different I gives different ω."
    },
    {
      "id": "6-33",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "Under what condition is a system's total angular momentum conserved?",
      "choices": [
        "Whenever kinetic energy is also conserved.",
        "Angular momentum is never actually conserved in real systems.",
        "Whenever the system's moment of inertia is constant.",
        "Whenever there is no net external torque acting on the system."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Whenever there is no net external torque acting on the system. From τ_net = ΔL/Δt, if the net external torque is zero, ΔL = 0. Internal torques between parts of the system cancel in pairs and cannot change the total, just as internal forces cannot change total linear momentum.\n\n(A) is wrong because angular momentum can be conserved while kinetic energy changes (as with a skater pulling her arms in, or a collision).\n(B) is wrong because it is conserved whenever the net external torque is zero.\n(C) is wrong because constant I is not required; I can change as long as ω changes to compensate."
    },
    {
      "id": "6-34",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A skater spins with arms extended, then pulls her arms in. Explain what happens to her moment of inertia and angular velocity.",
      "choices": [
        "Moment of inertia decreases; angular velocity increases.",
        "Both stay the same.",
        "Both increase.",
        "Moment of inertia increases; angular velocity decreases."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Moment of inertia decreases; angular velocity increases. Pulling her arms in moves mass closer to the axis, and I = Σmr² falls. With no significant external torque, L = Iω stays constant, so a smaller I requires a larger ω, and she spins faster.\n\n(B) is wrong because I changes when mass moves toward the axis.\n(C) is wrong because I and ω cannot both increase and keep L constant.\n(D) is wrong because it reverses the effect; extending the arms would increase I and slow the spin."
    },
    {
      "id": "6-35",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A skater spins at 2.0 rad/s with I=5.0 kg·m², then pulls her arms in to reduce I to 2.0 kg·m². Find her new angular velocity.",
      "choices": [
        "0.8 rad/s",
        "2.0 rad/s",
        "5.0 rad/s",
        "10 rad/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.0 rad/s. With no external torque, angular momentum is conserved: I₁ω₁ = I₂ω₂. So (5.0)(2.0) = (2.0)ω₂, giving ω₂ = 10/2.0 = 5.0 rad/s. I falls by a factor of 2.5, so ω rises by 2.5.\n\n(A) is wrong because 0.8 comes from (2.0 × 2.0)/5.0, which inverts the ratio of the inertias.\n(B) is wrong because 2.0 would mean ω did not change, which would require L to drop.\n(D) is wrong because 10 is the angular momentum L = 10 kg·m²/s itself, not the angular velocity."
    },
    {
      "id": "6-36",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A diver leaves the diving board with some initial angular velocity, then tucks into a tight ball mid-air. Explain what happens to her rotation rate, and why.",
      "choices": [
        "It increases due to air resistance.",
        "It increases, since tucking reduces her moment of inertia.",
        "It stays the same, since angular velocity is fixed once she leaves the board.",
        "It decreases, since tucking reduces her moment of inertia."
      ],
      "correct": 1,
      "explanation": "Tucking into a ball pulls her mass closer to her rotation axis, reducing her moment of inertia — and with essentially no external torque acting on her while airborne (gravity acts through her center of mass, producing no torque about that axis), her angular momentum must stay constant, forcing her angular velocity to increase, letting her complete more rotations before hitting the water."
    },
    {
      "id": "6-37",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A merry-go-round (I=200 kg·m²) spins at 1.5 rad/s. A child, contributing an additional 50 kg·m² once aboard, jumps onto the edge from rest. Find the new angular velocity.",
      "choices": [
        "1.875 rad/s",
        "1.5 rad/s",
        "1.2 rad/s",
        "1.0 rad/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 1.2 rad/s. Treat the merry-go-round and child as one system; no external torque acts as the child lands, so angular momentum is conserved: (200)(1.5) = (200 + 50)ω₂. The initial L is 300 kg·m²/s, so ω₂ = 300/250 = 1.2 rad/s. The child adds to I, so the spin slows.\n\n(A) is wrong because 1.875 rad/s is ω increased, which cannot happen when I increases.\n(B) is wrong because 1.5 rad/s would ignore the added inertia.\n(D) is wrong because 1.0 rad/s has no basis in this conservation equation."
    },
    {
      "id": "6-38",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "For the merry-go-round-and-child scenario, is linear momentum conservation the relevant tool for finding the new rotation rate?",
      "choices": [
        "No — angular momentum conservation is the relevant law here.",
        "Yes, linear momentum conservation is the primary tool needed.",
        "Both linear and angular momentum conservation are needed simultaneously in equal measure.",
        "Neither conservation law applies to this scenario."
      ],
      "correct": 0,
      "explanation": "Correct: (A) No — angular momentum conservation is the relevant law here. The question is about a change in spin rate, which is governed by L = Iω, and the total angular momentum about the axis is conserved when there is no external torque on the system about that axis. A linear momentum analysis does not apply, because the axle exerts external forces on the merry-go-round, so the total linear momentum is not conserved.\n\n(B) is wrong because linear momentum conservation does not determine a rotation rate, and the force from the axle breaks it anyway.\n(C) is wrong because only angular momentum conservation is needed to find the new rotation rate; bringing in linear momentum would add nothing and would be invalid.\n(D) is wrong because angular momentum conservation does apply, since the forces involved exert no net torque about the central axis."
    },
    {
      "id": "6-39",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A merry-go-round (I=150 kg·m²) spins at 2.0 rad/s. A child adds 50 kg·m² once aboard. Find the new angular velocity.",
      "choices": [
        "2.67 rad/s",
        "2.0 rad/s",
        "1.0 rad/s",
        "1.5 rad/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 1.5 rad/s. Angular momentum is conserved when the child lands: (150)(2.0) = (150 + 50)ω₂. So 300 = 200ω₂ and ω₂ = 1.5 rad/s. More inertia means a slower spin.\n\n(A) is wrong because 2.67 comes from inverting the ratio (200·2.0/150), which speeds the system up.\n(B) is wrong because 2.0 rad/s ignores the added 50 kg·m².\n(C) is wrong because 1.0 rad/s has no basis in the conservation equation."
    },
    {
      "id": "6-40",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "When a spinning skater pulls her arms in, is her rotational kinetic energy conserved along with her angular momentum?",
      "choices": [
        "No — angular momentum is conserved, but kinetic energy increases.",
        "No, both decrease as the skater pulls in her arms and spins faster.",
        "Angular momentum decreases while kinetic energy stays the same.",
        "Yes, both are always conserved together in any change to the spin."
      ],
      "correct": 0,
      "explanation": "This is a critical distinction: angular momentum conservation depends only on zero external torque, which holds here. But kinetic energy is NOT automatically conserved — the skater's muscles do real work pulling her arms inward against the effective outward pull of her spin, adding kinetic energy to the system."
    },
    {
      "id": "6-41",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "Using the skater scenario from an earlier question (I:5.0→2.0 kg·m², ω:2.0→5.0 rad/s), find her kinetic energy before and after.",
      "choices": [
        "10 J before; 25 J after (increased).",
        "20 J before; 20 J after (conserved).",
        "25 J before; 10 J after (decreased).",
        "10 J before; 10 J after (conserved)."
      ],
      "correct": 0,
      "explanation": "Correct: (A) 10 J before; 25 J after (increased). KE = ½Iω². Before: ½(5.0)(2.0)² = ½(5.0)(4.0) = 10 J. After: ½(2.0)(5.0)² = ½(2.0)(25) = 25 J. Angular momentum was conserved (10 kg·m²/s both times), but KE = L²/(2I) rises as I falls.\n\n(B) is wrong because neither value is 20 J, and KE is not conserved.\n(C) is wrong because it reverses the order; the energy increased.\n(D) is wrong because 10 J after would require the spin to be unchanged, and KE is not conserved even though L is."
    },
    {
      "id": "6-42",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "Where does the extra kinetic energy come from when a skater pulls her arms in to spin faster?",
      "choices": [
        "From the real muscular work she does pulling her arms inward.",
        "From the ice surface she's spinning on, which pushes her around as she turns.",
        "From a decrease in her angular momentum as she pulls her arms inward.",
        "It appears from nowhere, violating energy conservation."
      ],
      "correct": 0,
      "explanation": "Correct: (A) From the real muscular work she does pulling her arms inward. Her arms must be pulled in against the inward force needed to keep the mass moving in a circle, so her muscles do positive work. That work becomes the added rotational kinetic energy: with L = Iω conserved, a smaller I means a larger ω, and KE = L²/2I rises as I falls. The energy comes from her body's chemical energy.\n\n(B) is wrong because the ice supplies essentially no torque on her, which is exactly why her angular momentum is conserved, and a force on the ice would not add energy to the spin.\n(C) is wrong because her angular momentum stays constant during the pull-in; it is the moment of inertia that decreases.\n(D) is wrong because energy is conserved; the added kinetic energy is supplied by her muscles, so no law is violated."
    },
    {
      "id": "6-43",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A spinning disk (I=4.0 kg·m², ω=6.0 rad/s) is dropped onto an identical, stationary disk (I=4.0 kg·m²) below it, and they stick together, spinning as one. Find their combined final angular velocity.",
      "choices": [
        "1.5 rad/s",
        "6.0 rad/s",
        "3.0 rad/s",
        "12 rad/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 3.0 rad/s. The disks stick together in a rotational collision, with no external torque, so angular momentum is conserved: (4.0)(6.0) = (4.0 + 4.0)ω<sub>f</sub>. So 24 = 8.0ω<sub>f</sub> and ω<sub>f</sub> = 3.0 rad/s. The combined inertia doubles, so ω halves.\n\n(A) is wrong because 1.5 divides by 4 (as though I had quadrupled).\n(B) is wrong because 6.0 would be the case with no added inertia.\n(D) is wrong because 12 doubles ω, but adding a disk increases I and slows the system."
    },
    {
      "id": "6-44",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "The two-disk scenario (a spinning disk dropped onto a stationary, identical disk, sticking together) is the rotational analog of which concept from Unit 4?",
      "choices": [
        "An elastic collision.",
        "A perfectly inelastic collision.",
        "Conservation of energy alone.",
        "Projectile motion."
      ],
      "correct": 1,
      "explanation": "Correct: (B) A perfectly inelastic collision. In the two-disk problem the objects stick and share one final motion, and angular momentum is conserved. This matches a perfectly inelastic collision in Unit 4, where objects stick together, momentum is conserved and kinetic energy is lost (here 72 J becomes 36 J). The clue words are \"stick together, spinning as one.\"\n\n(A) is wrong because in an elastic collision the objects separate and KE is conserved, but here KE is lost.\n(C) is wrong because the problem is solved by conserving angular momentum, and energy alone does not fix the final ω since mechanical energy is lost.\n(D) is wrong because projectile motion describes free flight under gravity and has no counterpart here."
    },
    {
      "id": "6-45",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "For the two-disk scenario in an earlier question (I=4.0 kg·m² each, ω1=6.0 rad/s, ωf=3.0 rad/s), find the kinetic energy lost.",
      "choices": [
        "108 J",
        "12 J",
        "36 J",
        "72 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 36 J. Kinetic energy is not conserved when the disks stick. Before: KE = ½Iω² = ½(4.0)(6.0)² = 72 J. After: both disks spin together, so I = 8.0 and ω = 3.0, giving KE = ½(8.0)(3.0)² = 36 J. Lost energy = 72 − 36 = 36 J, which goes into heat and sound from the frictional sticking.\n\n(A) is wrong because 108 J is the sum of the before and after values.\n(B) is wrong because 12 J has no basis in these numbers.\n(D) is wrong because 72 J is the initial KE, not the loss; half of it remains."
    },
    {
      "id": "6-46",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "A planet in an elliptical orbit moves faster when closer to its star and slower when farther away. Which conservation law explains this behavior?",
      "choices": [
        "Conservation of angular momentum.",
        "This behavior has no explanation from conservation laws.",
        "Conservation of mass.",
        "Conservation of linear momentum."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Conservation of angular momentum. The star's gravity pulls the planet along the line to the star, so it exerts no torque about the star, and angular momentum L = mvr⊥ is constant. When r decreases at perihelion, v must increase, and when r increases at aphelion, v must decrease, which is Kepler's second law (equal areas in equal times).\n\n(B) is wrong because conservation of angular momentum explains it exactly.\n(C) is wrong because mass is constant but that doesn't link speed to distance.\n(D) is wrong because the planet's linear momentum is not conserved, since gravity from the star is an external force that continually changes its direction and speed."
    },
    {
      "id": "6-47",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "An object orbits at 6.0 m/s when 4.0 m from the center of its orbit. Find its speed when it moves to a distance of 2.0 m from the center (using angular momentum conservation, L=mvr).",
      "choices": [
        "24 m/s",
        "12 m/s",
        "6.0 m/s",
        "3.0 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 12 m/s. With no torque about the center, L = mvr is conserved, and the mass cancels: v₁r₁ = v₂r₂. So (6.0)(4.0) = v₂(2.0), and v₂ = 24/2.0 = 12 m/s. Halving the radius doubles the speed.\n\n(A) is wrong because 24 is the product v₁r₁, not the speed.\n(C) is wrong because 6.0 m/s would mean no speed-up at all, which violates conservation of L.\n(D) is wrong because 3.0 m/s makes v proportional to r, the opposite of the inverse relation."
    },
    {
      "id": "6-48",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "In the orbital speed-up scenario from the previous question, which quantity remains exactly constant throughout the motion?",
      "choices": [
        "None of these remain constant.",
        "The object's angular momentum.",
        "The object's kinetic energy.",
        "The object's linear momentum."
      ],
      "correct": 1,
      "explanation": "Correct: (B) The object's angular momentum. With no external torque about the center of the orbit, the angular momentum L = mvr<sub>⊥</sub> stays constant even though the speed v and the distance r both change. When the object moves closer, r decreases and v rises to keep the product mvr fixed, which is why the speed goes from 6.0 to 12 m/s in the scenario.\n\n(A) is wrong because angular momentum does remain constant when the only force is directed toward the center, since a central force exerts no torque about that point.\n(C) is wrong because the kinetic energy ½mv² changes as the speed changes from 6.0 to 12 m/s, so it is not constant.\n(D) is wrong because linear momentum mv changes in both size and direction as the object moves around the center, since a central force acts on it throughout the motion."
    },
    {
      "id": "6-49",
      "topic": "6.3 Conservation of Angular Momentum",
      "stem": "For the object in the orbital scenario (v:6.0→12 m/s as r:4.0→2.0 m), is its kinetic energy the same at both points?",
      "choices": [
        "No, kinetic energy is cut in half.",
        "No — kinetic energy quadruples, since v doubled.",
        "Yes, kinetic energy is always conserved alongside angular momentum.",
        "Kinetic energy cannot be determined without the object's mass."
      ],
      "correct": 1,
      "explanation": "Correct: (B) No — kinetic energy quadruples, since v doubled. KE = ½mv² depends on v², so doubling v from 6.0 to 12 m/s multiplies KE by 2² = 4. Angular momentum is conserved, but the inward force does work as the radius shrinks, so KE rises.\n\n(A) is wrong because KE does not decrease when the speed increases.\n(C) is wrong because angular momentum conservation does not imply KE conservation (as with the skater).\n(D) is wrong because only the ratio is asked, and the mass cancels in the ratio."
    },
    {
      "id": "6-50",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "What is the correct expression for the total kinetic energy of an object rolling without slipping?",
      "choices": [
        "KE_total = ½mv² only",
        "KE_total = mv² + Iω²",
        "KE_total = ½Iω² only",
        "KE_total = ½mv² + ½Iω²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) KE<sub>total</sub> = ½mv² + ½Iω². A rolling object moves its center of mass, which has translational kinetic energy ½mv<sub>cm</sub>², and it also spins about that center, which has rotational kinetic energy ½Iω². The total kinetic energy is the sum of both parts. Each term carries its own factor of one-half, following from the definition of kinetic energy.\n\n(A) is wrong because ½mv² alone ignores the spin of the object, so it leaves out the rotational part of the energy.\n(B) is wrong because the factors of ½ are missing from both terms, so it overstates each contribution by a factor of two.\n(C) is wrong because ½Iω² alone ignores the motion of the center of mass, so it leaves out the translational part of the energy."
    },
    {
      "id": "6-51",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A rolling object has translational kinetic energy 16 J and rotational kinetic energy 9.6 J. Find its total kinetic energy.",
      "choices": [
        "6.4 J",
        "9.6 J",
        "25.6 J",
        "16 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 25.6 J. The total kinetic energy of a rolling object is the sum of its translational and rotational parts, since both kinds of motion happen at the same time. Here KE<sub>total</sub> = KE<sub>trans</sub> + KE<sub>rot</sub> = 16 J + 9.6 J = 25.6 J. Energies are scalars, so they add directly with no directions to consider.\n\n(A) is wrong because 6.4 J is the difference of the two parts (16 − 9.6), but the two forms of energy are present together and must be added.\n(B) is wrong because 9.6 J is only the rotational part and leaves out the translational energy of the center of mass.\n(D) is wrong because 16 J is only the translational part and leaves out the rotational energy of the spinning about the center."
    },
    {
      "id": "6-52",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "For an object rolling without slipping, why can you substitute ω=v/r into the rotational KE term when computing total kinetic energy?",
      "choices": [
        "This substitution is only a rough approximation that works when friction is small, and fails otherwise.",
        "Because rolling without slipping guarantees v_cm = rω, so ω can be expressed in terms of v (or vice versa).",
        "It's an arbitrary simplification with no physical justification, used only for convenience here and there.",
        "This substitution works for any rotating object, slipping or not, at any speed."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Because rolling without slipping guarantees v<sub>cm</sub> = rω, so ω can be expressed in terms of v (or vice versa). The no-slip condition means the contact point is at rest against the surface, so each full rotation advances the center by exactly 2πr and v<sub>cm</sub> = rω exactly. Then ½Iω² = ½I(v/r)², which lets the total kinetic energy be written in terms of v alone.\n\n(A) is wrong because the relation is exact for rolling without slipping and does not depend on friction being small; it follows from geometry of the contact point.\n(C) is wrong because the substitution has a definite physical justification, namely the contact point being at rest against the surface.\n(D) is wrong because the relation fails for slipping or skidding objects, where the speed v and the angular velocity ω are independent."
    },
    {
      "id": "6-53",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A solid sphere (I=(2/5)MR²) of mass 4.0 kg rolls without slipping at 3.0 m/s. Find its total kinetic energy.",
      "choices": [
        "36 J",
        "10.8 J",
        "25.2 J",
        "18 J"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 25.2 J. For rolling without slipping, KE<sub>total</sub> = ½mv² + ½Iω² with ω = v/r. For a solid sphere I = (2/5)mr², so the rotational part is ½(2/5)mr²(v/r)² = (1/5)mv². The total is (1/2 + 1/5)mv² = (7/10)mv² = (0.7)(4.0)(3.0)² = 25.2 J. The radius cancels, so it is not needed.\n\n(A) is wrong because 36 J is mv² = (4.0)(9.0), which is too large because it uses a coefficient of 1 instead of 7/10.\n(B) is wrong because 10.8 J uses a coefficient of 3/10 rather than 7/10, giving (0.3)(36), which does not add the translational and rotational parts correctly.\n(D) is wrong because 18 J is only the translational ½mv² = ½(4.0)(9.0), which ignores the energy of the spin."
    },
    {
      "id": "6-54",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A solid sphere and a hoop, of equal mass and radius, are released from rest at the top of the same ramp. Which one has more total kinetic energy at the bottom?",
      "choices": [
        "The sphere, since it converts more of its PE into KE by the bottom.",
        "Cannot be determined without the ramp's angle.",
        "The hoop, since it has more moment of inertia.",
        "Both have exactly the same total kinetic energy at the bottom."
      ],
      "correct": 3,
      "explanation": "By conservation of energy, BOTH objects convert the exact same amount of gravitational PE (mgh, since they have equal mass and drop the same height) into total kinetic energy — the sphere and the hoop end up with equal TOTAL kinetic energy at the bottom. What differs is how that total energy is SPLIT between translational and rotational forms (and therefore, their final speeds differ, since the hoop puts more into rotation)."
    },
    {
      "id": "6-55",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A solid sphere rolls without slipping down a ramp 2.0 m high, starting from rest. Find its speed at the bottom. (Use KE_total=(7/10)mv² for a solid sphere.)",
      "choices": [
        "6.3 m/s",
        "5.3 m/s",
        "3.7 m/s",
        "4.4 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 5.3 m/s. Rolling without slipping conserves mechanical energy since static friction does no work: mgh = (7/10)mv². The mass cancels, so v² = 10gh/7 = 10(9.8)(2.0)/7 = 28, and v = √28 ≈ 5.3 m/s.\n\n(A) is wrong because 6.3 m/s is √(2gh), which applies to a sliding block with no rotation.\n(C) is wrong because 3.7 m/s comes from multiplying by 7/10 instead of dividing, v² = 0.7gh.\n(D) is wrong because 4.4 m/s is √(gh), the hoop result, which gives a lower speed than a sphere."
    },
    {
      "id": "6-56",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "For an object rolling without slipping down a ramp, does the presence of static friction at the contact point prevent mechanical energy from being conserved?",
      "choices": [
        "Yes, but only for very rough ramps.",
        "Yes, any friction always removes mechanical energy from a system.",
        "No — static friction does zero work at the contact point.",
        "No, because static friction doesn't actually exist during rolling."
      ],
      "correct": 2,
      "explanation": "This is a key, somewhat surprising result: unlike kinetic friction (which does negative work and removes mechanical energy, as in Unit 3), static friction acting at a point with zero instantaneous velocity does zero work — so mechanical energy conservation applies completely to rolling-without-slipping motion, letting you use straightforward energy methods."
    },
    {
      "id": "6-57",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A hoop rolls without slipping down a ramp 3.2 m high, starting from rest. Find its speed at the bottom. (For a hoop, KE_total=mv².)",
      "choices": [
        "6.3 m/s",
        "4.0 m/s",
        "7.9 m/s",
        "5.6 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 5.6 m/s. Energy conservation with rolling: mgh = KE<sub>total</sub> = mv² for a hoop (½mv² translational plus ½mv² rotational). The mass cancels, so v² = gh = (9.8)(3.2) = 31.36, and v = √31.36 ≈ 5.6 m/s.\n\n(A) is wrong because 6.3 m/s has no basis in this relation.\n(B) is wrong because 4.0 m/s comes from using v² = gh/2, as if KE were 2mv².\n(C) is wrong because 7.9 m/s is √(2gh), which is the sliding result with no rotational energy."
    },
    {
      "id": "6-58",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A block slides frictionlessly (no rotation) down a ramp, while an identical-mass ball rolls without slipping down the same height. Compare their speeds at the bottom.",
      "choices": [
        "They arrive at the same speed, since they have the same mass.",
        "The rolling ball is faster, since rotation adds extra kinetic energy.",
        "The sliding block is faster, since none of its energy goes into rotation.",
        "Cannot be compared without knowing the ramp's angle."
      ],
      "correct": 2,
      "explanation": "The frictionlessly sliding block converts ALL of its gravitational PE into translational kinetic energy alone. The rolling ball has to split its PE between translational AND rotational KE — meaning less is available for translational motion, so it arrives at the bottom moving slower than the sliding block."
    },
    {
      "id": "6-59",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "For a solid disk rolling without slipping, what fraction of its total kinetic energy is rotational?",
      "choices": [
        "1/2",
        "1/3",
        "1/4",
        "2/3"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 1/3. For a solid disk I = ½MR², so with ω = v/R the rotational kinetic energy is ½(½MR²)(v/R)² = ¼Mv². The translational kinetic energy is ½Mv², so the total is ¾Mv². The rotational fraction is (¼)/(¾) = 1/3, independent of the mass and the speed.\n\n(A) is wrong because 1/2 is the hoop's fraction, where I = MR² makes the rotational and translational energies equal; a solid disk has a smaller I.\n(C) is wrong because 1/4 is the coefficient of Mv² for the rotational part, not the fraction of the total; dividing by the total ¾ gives 1/3.\n(D) is wrong because 2/3 is the translational fraction (½ out of ¾), which is the rest of the energy, not the rotational share."
    },
    {
      "id": "6-60",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "For a hoop rolling without slipping, what fraction of its total kinetic energy is rotational?",
      "choices": [
        "1/2",
        "2/3",
        "3/4",
        "1/3"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1/2. A hoop has all its mass at the rim, so I = MR², and with ω = v/R the rotational kinetic energy is ½(MR²)(v/R)² = ½Mv². The translational kinetic energy is also ½Mv², so the total is Mv² and the rotational fraction is 1/2. All of the mass is at the rim, so rotation takes as much energy as translation.\n\n(B) is wrong because 2/3 does not come from these terms; the rotational and translational parts are equal, so the share cannot be two-thirds.\n(C) is wrong because 3/4 is the total coefficient of Mv² for a disk (¾Mv²), not a fraction for the hoop.\n(D) is wrong because 1/3 is the disk's rotational fraction, and a disk has a smaller moment of inertia than a hoop of the same mass and radius."
    },
    {
      "id": "6-61",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A bowling ball (solid sphere, mass 6.0 kg) rolls without slipping at 4.0 m/s. Find its total kinetic energy. (Use KE_total=(7/10)mv².)",
      "choices": [
        "57.6 J",
        "48 J",
        "33.6 J",
        "67.2 J"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 67.2 J. For a solid sphere rolling without slipping, the total KE is (7/10)mv²: ½mv² for translation plus (1/5)mv² for rotation. So KE = (0.7)(6.0)(4.0)² = (0.7)(6.0)(16) = 67.2 J.\n\n(A) is wrong because 57.6 J uses a coefficient of 0.6.\n(B) is wrong because 48 J is only the translational ½mv², leaving out the spin.\n(C) is wrong because 33.6 J is half the correct answer (a coefficient of 0.35)."
    },
    {
      "id": "6-62",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "Explain physically why static friction, not kinetic friction, acts at the contact point of an object rolling without slipping, and why this matters for energy conservation.",
      "choices": [
        "Neither type of friction acts during rolling motion.",
        "Static friction acts, and it does zero work at the contact point.",
        "Static friction always does significant negative work, just like kinetic friction.",
        "Kinetic friction acts because the object is moving, and it removes energy just like in Unit 3."
      ],
      "correct": 1,
      "explanation": "Rolling without slipping means zero relative sliding at the contact point (by definition), which is precisely the condition for STATIC (not kinetic) friction. And because that specific point has zero instantaneous velocity, any force acting there — including static friction — does zero work, which is exactly why mechanical energy conservation still applies to the rolling object."
    },
    {
      "id": "6-63",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A solid cylinder rolls without slipping down a ramp 1.25 m high, starting from rest. Find its speed at the bottom. (For a solid cylinder, same as a disk: KE_total=¾mv².)",
      "choices": [
        "4.0 m/s",
        "2.9 m/s",
        "5.0 m/s",
        "3.6 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 4.0 m/s. Energy conservation with rolling: mgh = (3/4)mv² for a solid cylinder (½mv² translational plus ¼mv² rotational). The mass cancels, so v² = (4/3)gh = (4/3)(9.8)(1.25) ≈ 16.3, and v ≈ 4.0 m/s.\n\n(B) is wrong because 2.9 m/s comes from v² = 0.7gh = 8.6 m²/s², multiplying gh by the sphere's 7/10 instead of dividing it by the cylinder's 3/4, which makes the cylinder too slow.\n(C) is wrong because 5.0 m/s is √(2gh), the frictionless sliding speed with no rotation.\n(D) is wrong because 3.6 m/s has no basis in this relation (it uses too large a rotational share)."
    },
    {
      "id": "6-64",
      "topic": "6.4 Total KE of Rolling Objects",
      "stem": "A solid sphere, a solid disk, and a hoop, all with equal mass and radius, are released from rest at the top of the same ramp and roll without slipping. Rank their speeds at the bottom from fastest to slowest.",
      "choices": [
        "Disk > sphere > hoop",
        "All three arrive at the same speed",
        "Sphere > disk > hoop",
        "Hoop > disk > sphere"
      ],
      "correct": 2,
      "explanation": "The object with the SMALLEST moment of inertia (relative to MR²) diverts the least energy into rotation, leaving the most for translational speed. Ranking by their I coefficients: sphere (2/5) < disk (1/2) < hoop (1) — so the sphere is fastest, the disk is next, and the hoop, with the largest moment of inertia, is slowest."
    },
    {
      "id": "6-65",
      "topic": "6.4 Total KE of Rolling Objects",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: An object with moment of inertia I=kMR² (where k is a dimensionless constant depending on shape) rolls without slipping down a ramp of height h, starting from rest. Derive a general expression for its speed at the bottom in terms of g, h, and k, then verify it matches the solid sphere result (k=2/5) from an earlier question.",
      "choices": [
        "v = √(2gh·k), increasing without bound as k increases.",
        "v = √(gh/k), decreasing without bound as k increases.",
        "v = √(2gh) for all values of k, independent of shape.",
        "v = √(2gh/(1+k)), matching the sphere's result for k=2/5."
      ],
      "correct": 3,
      "explanation": "Starting from energy conservation: mgh = ½mv² + ½Iω² = ½mv² + ½(kMR²)(v/R)² = ½mv²(1+k), where the mass cancels throughout. Solving: gh = ½v²(1+k), so v² = 2gh/(1+k), giving v = √(2gh/(1+k)). Checking against the solid sphere (k=2/5): v = √(2gh/1.4) = √(2gh/(7/5)) = √(10gh/7) — which matches exactly the (7/10)mv²-based result derived earlier in this unit, confirming the general formula is consistent with the specific shape-by-shape results."
    }
  ],
  "7": [
    {
      "id": "7-1",
      "topic": "7.1 SHM Basics",
      "stem": "What is the defining physical feature of simple harmonic motion?",
      "choices": [
        "A force that increases without bound over time.",
        "A constant restoring force, independent of displacement.",
        "A restoring force proportional to displacement.",
        "The complete absence of any restoring force."
      ],
      "correct": 2,
      "explanation": "Correct: (C) a restoring force proportional to displacement. Simple harmonic motion is defined by F = −kx: the net force always points back toward equilibrium and grows linearly with distance from it. This linear law makes the acceleration a = −(k/m)x, a differential equation whose solution is a sinusoid with a fixed period, which is why the motion is perfectly periodic. Clue words: \"defining physical feature.\"\n\n(A) is wrong because a force growing without bound would drive the object away, not back and forth.\n(B) is wrong because a constant-magnitude restoring force gives a different, non-sinusoidal motion; the force must scale with x.\n(D) is wrong because with no restoring force there is nothing to reverse the motion, so no oscillation occurs."
    },
    {
      "id": "7-2",
      "topic": "7.1 SHM Basics",
      "stem": "At the point of maximum displacement in SHM, what are the values of velocity and acceleration?",
      "choices": [
        "Both velocity and acceleration are zero at that point in the cycle.",
        "Velocity is zero; acceleration is at its maximum magnitude.",
        "Both velocity and acceleration are at their maximum at that point.",
        "Velocity is maximum; acceleration is zero at that point in the cycle."
      ],
      "correct": 1,
      "explanation": "Correct: (B) velocity is zero and acceleration is at maximum magnitude. At maximum displacement (x = ±A) the object is at a turning point, momentarily at rest while reversing direction, so v = 0. Since F = −kx, the restoring force and therefore a = −(k/m)x are largest when |x| is largest, so |a| = Aω² there. Clue words: \"maximum displacement.\"\n\n(A) is wrong because acceleration is not zero; a nonzero force is exactly what turns the object around.\n(C) is wrong because speed and acceleration are never both maximal; speed is largest where force is zero.\n(D) is wrong because it describes the equilibrium point, not the extreme."
    },
    {
      "id": "7-3",
      "topic": "7.1 SHM Basics",
      "stem": "At the equilibrium position in SHM, what are the values of velocity and acceleration?",
      "choices": [
        "Both are zero.",
        "Both are at their maximum.",
        "Velocity is maximum; acceleration is zero.",
        "Velocity is zero; acceleration is maximum."
      ],
      "correct": 2,
      "explanation": "Correct: (C) velocity is maximum and acceleration is zero. At equilibrium x = 0, so F = −kx = 0 and a = 0. The object has been accelerated by the restoring force all the way from the extreme, so all the energy is kinetic there (½mv² = ½kA²), giving the maximum speed v = Aω. Clue words: \"equilibrium position.\"\n\n(A) is wrong because the object is moving fastest, not stopped.\n(B) is wrong because acceleration needs a net force, which is zero at x = 0.\n(D) is wrong because it swaps the extreme point's values onto the equilibrium point."
    },
    {
      "id": "7-4",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator has a period of 0.25 s. Find its frequency.",
      "choices": [
        "0.25 Hz",
        "4.0 Hz",
        "8.0 Hz",
        "0.5 Hz"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 4.0 Hz. Frequency is the number of cycles per second and is the reciprocal of the period: f = 1/T. With T = 0.25 s, f = 1/0.25 = 4.0 cycles per second, so four full oscillations fit in each second. Clue words: \"period\" given, \"frequency\" asked.\n\n(A) is wrong because it just repeats the period's number instead of inverting it.\n(C) is wrong because it doubles the correct value, as if dividing by 0.125.\n(D) is wrong because 0.5 comes from dividing 0.25 by 0.5 or halving, not inverting."
    },
    {
      "id": "7-5",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator has a frequency of 5.0 Hz. Find its period.",
      "choices": [
        "10 s",
        "0.1 s",
        "0.2 s",
        "5.0 s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.2 s. Period is the time for one full cycle and is the reciprocal of frequency: T = 1/f = 1/5.0 Hz = 0.2 s, meaning each oscillation takes one fifth of a second. Clue words: \"frequency\" given, \"period\" asked.\n\n(A) is wrong because 10 s multiplies by 2 instead of inverting.\n(B) is wrong because 0.1 s would correspond to a frequency of 10 Hz.\n(D) is wrong because it reuses the frequency's number without inverting and with the wrong unit."
    },
    {
      "id": "7-6",
      "topic": "7.1 SHM Basics",
      "stem": "For an ideal spring-mass system, does increasing the amplitude of oscillation change the period?",
      "choices": [
        "Yes, a larger amplitude always produces a shorter period.",
        "It depends on the mass attached to the spring.",
        "Yes, a larger amplitude always produces a longer period.",
        "No — the period is independent of amplitude."
      ],
      "correct": 3,
      "explanation": "Correct: (D) no, the period is independent of amplitude. For an ideal spring-mass system T = 2π√(m/k), which contains only the mass and spring constant. A larger amplitude means a longer path, but it also means a larger restoring force (F = −kx) and thus a larger acceleration and higher speeds, and the two effects cancel exactly so the cycle takes the same time. Clue words: \"ideal,\" \"amplitude.\"\n\n(A) is wrong because larger amplitude does not speed up the period; there is no such dependence.\n(B) is wrong because mass does affect the period, but not through amplitude; the amplitude remains irrelevant for any mass.\n(C) is wrong for the same reason: a bigger swing is covered at proportionally higher speed, not slower."
    },
    {
      "id": "7-7",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator has frequency 2.0 Hz. Find its angular frequency ω.",
      "choices": [
        "2.0 rad/s",
        "12.57 rad/s",
        "6.28 rad/s",
        "4.0 rad/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 12.57 rad/s. Angular frequency relates to frequency by ω = 2πf, since one cycle corresponds to 2π radians. With f = 2.0 Hz, ω = 2π(2.0) = 4π ≈ 12.57 rad/s. Clue words: \"angular frequency ω\" (radians per second, not cycles per second).\n\n(A) is wrong because it just copies f without the 2π conversion.\n(C) is wrong because 6.28 = 2π is the conversion factor for f = 1 Hz, forgetting to multiply by 2.0.\n(D) is wrong because it doubles f and omits the π factor."
    },
    {
      "id": "7-8",
      "topic": "7.1 SHM Basics",
      "stem": "What shape does a graph of position vs. time take for an object undergoing ideal SHM?",
      "choices": [
        "A sinusoidal (sine or cosine) curve.",
        "A straight line with a constant slope, over time.",
        "An exponential decay curve that falls toward zero.",
        "A parabola opening upward on the graph, over time."
      ],
      "correct": 0,
      "explanation": "Correct: (A) a sinusoidal curve. With F = −kx, the solution of the motion is x(t) = A cos(ωt + φ), a smooth repeating wave, so the position-time graph is a sine or cosine. Clue words: \"position vs. time,\" \"ideal SHM.\"\n\n(B) is wrong because a straight line would mean constant velocity, with no turning back.\n(C) is wrong because exponential decay applies to damped systems (and does not repeat), but ideal SHM keeps a constant amplitude.\n(D) is wrong because a parabola corresponds to constant acceleration, whereas in SHM the acceleration changes continuously with position."
    },
    {
      "id": "7-9",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator has amplitude 0.05 m and angular frequency 10 rad/s. Find its maximum speed.",
      "choices": [
        "0.5 m/s",
        "2.0 m/s",
        "0.005 m/s",
        "5.0 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0.5 m/s. Maximum speed occurs at equilibrium, where all the energy is kinetic, and is v<sub>max</sub> = Aω. Substituting A = 0.05 m and ω = 10 rad/s gives v<sub>max</sub> = (0.05)(10) = 0.5 m/s. Clue words: \"amplitude,\" \"angular frequency,\" \"maximum speed.\"\n\n(B) is wrong because 2.0 m/s is not obtained from any product or ratio of these values (it looks like an unrelated slip).\n(C) is wrong because 0.005 m/s is A/ω (0.05/10), dividing instead of multiplying.\n(D) is wrong because 5.0 m/s misplaces a decimal point, as if A were 0.5 m."
    },
    {
      "id": "7-10",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator has amplitude 0.02 m and angular frequency 8.0 rad/s. Find its maximum acceleration.",
      "choices": [
        "0.64 m/s²",
        "1.28 m/s²",
        "0.16 m/s²",
        "4.0 m/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 1.28 m/s². Maximum acceleration occurs at the extremes and is a<sub>max</sub> = Aω². With A = 0.02 m and ω = 8.0 rad/s: a<sub>max</sub> = (0.02)(8.0)² = (0.02)(64) = 1.28 m/s². Clue words: \"maximum acceleration,\" which involves ω squared.\n\n(A) is wrong because 0.64 comes from using ω² = 32 or halving the result.\n(C) is wrong because 0.16 is Aω (0.02 × 8), the maximum speed, without squaring ω.\n(D) is wrong because 4.0 does not follow from A and ω in any valid formula; it looks like 0.02 × 200 or similar slip."
    },
    {
      "id": "7-11",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator's amplitude is doubled while its angular frequency stays the same. How does its maximum speed change?",
      "choices": [
        "It is cut in half.",
        "It quadruples.",
        "It doubles.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "Correct: (C) it doubles. Maximum speed is v<sub>max</sub> = Aω, which is directly proportional to amplitude when ω is fixed. Doubling A therefore doubles v<sub>max</sub>; for example A = 0.05 m and ω = 10 rad/s gives 0.5 m/s, while A = 0.10 m gives 1.0 m/s. Clue words: \"angular frequency stays the same.\"\n\n(A) is wrong because larger amplitude does not slow the object; it must cover more distance in the same period, so it goes faster.\n(B) is wrong because quadrupling would need v ∝ A², which would only be true for energy (½kA²), not speed.\n(D) is wrong because it assumes speed is independent of amplitude, which is true only for the period."
    },
    {
      "id": "7-12",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator's amplitude is doubled while its angular frequency stays the same. How does its maximum acceleration change?",
      "choices": [
        "It quadruples.",
        "It is cut in half.",
        "It stays the same.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) it doubles. Maximum acceleration is a<sub>max</sub> = Aω². With ω fixed, ω² is a constant, so a<sub>max</sub> is linear in A, and doubling A doubles a<sub>max</sub>. Physically, F = −kx doubles when the maximum displacement doubles. Clue words: \"amplitude doubled,\" \"angular frequency stays the same.\"\n\n(A) is wrong because the squared quantity is ω, not A.\n(B) is wrong because a larger amplitude produces a larger, not smaller, force at the extremes.\n(C) is wrong because acceleration depends on how far the object is displaced, so it changes."
    },
    {
      "id": "7-13",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator's angular frequency is doubled while its amplitude stays the same. How does its maximum acceleration change?",
      "choices": [
        "It quadruples.",
        "It is cut in half.",
        "It stays the same.",
        "It doubles."
      ],
      "correct": 0,
      "explanation": "Correct: (A) It quadruples. The maximum acceleration of simple harmonic motion is a<sub>max</sub> = Aω², so with the amplitude A fixed it scales with the square of the angular frequency. Doubling ω multiplies a<sub>max</sub> by 2² = 4; for example A = 0.02 m and ω = 8 rad/s give 1.28 m/s², while ω = 16 rad/s gives 5.12 m/s². The clue words are that the angular frequency is doubled and the amplitude stays the same.\n\n(B) is wrong because the acceleration does not fall as ω rises; a faster oscillation with the same amplitude has to change direction more quickly, requiring a larger acceleration.\n(C) is wrong because a<sub>max</sub> clearly depends on ω through the Aω² formula, so changing ω must change it.\n(D) is wrong because it applies the linear scaling that holds for v<sub>max</sub> = Aω, forgetting the square in the acceleration formula."
    },
    {
      "id": "7-14",
      "topic": "7.1 SHM Basics",
      "stem": "What quantity remains exactly constant throughout an ideal SHM cycle (no friction)?",
      "choices": [
        "The object's acceleration.",
        "The total mechanical energy.",
        "The restoring force.",
        "The object's velocity."
      ],
      "correct": 1,
      "explanation": "Correct: (B) the total mechanical energy. In an ideal (frictionless) oscillator only conservative forces act, so E = KE + PE = ½mv² + ½kx² = ½kA² stays constant, trading back and forth between kinetic and potential forms. Clue words: \"remains exactly constant,\" \"no friction.\"\n\n(A) is wrong because a = −(k/m)x changes with position and reverses sign.\n(C) is wrong because F = −kx also varies with x and changes direction.\n(D) is wrong because velocity is zero at the extremes, maximum at equilibrium, and changes sign each half cycle."
    },
    {
      "id": "7-15",
      "topic": "7.1 SHM Basics",
      "stem": "An oscillator completes 15 full cycles in 6.0 s. Find its period and frequency.",
      "choices": [
        "T=6.0s, f=0.17Hz",
        "T=0.4s, f=15Hz",
        "T=0.4s, f=2.5Hz",
        "T=2.5s, f=0.4Hz"
      ],
      "correct": 2,
      "explanation": "Correct: (C) T = 0.4 s, f = 2.5 Hz. The period is the time per cycle: T = total time / number of cycles = 6.0 s / 15 = 0.4 s. Frequency is the reciprocal, f = 1/0.4 = 2.5 Hz, which also equals 15 cycles / 6.0 s. Clue words: \"15 full cycles in 6.0 s.\"\n\n(A) is wrong because 6.0 s is the total time for all 15 cycles, not one.\n(B) is wrong because it has f = 15 Hz, using the cycle count as if it were per second.\n(D) is wrong because it swaps the roles of T and f, giving T = 2.5 s."
    },
    {
      "id": "7-16",
      "topic": "7.1 SHM Basics",
      "stem": "Why does a restoring force proportional to displacement specifically produce SHM, rather than some other type of periodic motion?",
      "choices": [
        "Any restoring force at all automatically produces SHM, regardless of its dependence on displacement.",
        "SHM requires a constant force, not one proportional to displacement.",
        "This relationship doesn't actually guarantee any particular type of motion.",
        "This relationship, via Newton's Second Law, yields an equation of motion whose solution is sinusoidal."
      ],
      "correct": 3,
      "explanation": "Correct: (D) via Newton's Second Law the relationship yields a sinusoidal solution. Setting ma = −kx gives a = −(k/m)x, a differential equation in which the second derivative of position is proportional to the negative of position itself. The only functions with this property are sines and cosines, x = A cos(ωt + φ) with ω = √(k/m), so the motion is perfectly periodic and sinusoidal. Clue words: \"specifically,\" \"proportional to displacement.\"\n\n(A) is wrong because other restoring-force laws (for example F ∝ x³ or a constant magnitude force) produce periodic but non-sinusoidal motion.\n(B) is wrong because a constant force does not scale with displacement and is not the SHM condition.\n(C) is wrong because the proportionality does guarantee a specific motion, SHM."
    },
    {
      "id": "7-17",
      "topic": "7.2 Mass on a Spring",
      "stem": "A 2.0 kg mass is attached to a spring with k=200 N/m. Find the period of oscillation.",
      "choices": [
        "1.0 s",
        "0.63 s",
        "6.3 s",
        "0.14 s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.63 s. For a mass on an ideal spring, T = 2π√(m/k). With m = 2.0 kg and k = 200 N/m, m/k = 0.010 s², whose square root is 0.10 s, so T = 2π(0.10) ≈ 0.63 s. Clue words: \"period,\" given m and k.\n\n(A) is wrong because 1.0 s does not come from the formula; it looks like a rounded guess.\n(C) is wrong because 6.3 s is 2π × 1, a factor-of-ten slip in the square root.\n(D) is wrong because 0.14 s does not follow from any correct use of the formula, and 2π√(m/k) cannot give a value this small with these inputs."
    },
    {
      "id": "7-18",
      "topic": "7.2 Mass on a Spring",
      "stem": "For an ideal spring-mass system, does the period depend on the amplitude of oscillation?",
      "choices": [
        "The period cannot be determined without knowing the amplitude.",
        "Yes, but only for very stiff springs.",
        "No — period depends only on mass and spring constant.",
        "Yes, larger amplitude always means a longer period."
      ],
      "correct": 2,
      "explanation": "Correct: (C) no, period depends only on mass and spring constant. The period T = 2π√(m/k) contains no amplitude term. A larger amplitude gives a larger restoring force (F = kA), so the mass accelerates more and moves faster, which exactly offsets the longer distance. Clue words: \"ideal spring-mass system.\"\n\n(A) is wrong because T can be found from m and k alone.\n(B) is wrong because the independence holds for every ideal spring regardless of stiffness.\n(D) is wrong because a longer path is compensated by higher speed, so the period does not lengthen."
    },
    {
      "id": "7-19",
      "topic": "7.2 Mass on a Spring",
      "stem": "A 0.50 kg mass oscillates on a spring with a period of 1.0 s. Find the spring constant.",
      "choices": [
        "39.5 N/m",
        "19.7 N/m",
        "2.0 N/m",
        "9.9 N/m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 19.7 N/m. Rearrange T = 2π√(m/k) by squaring: T² = 4π²m/k, so k = 4π²m/T². With m = 0.50 kg and T = 1.0 s: k = 4π²(0.50)/(1.0)² = 39.48 × 0.50 ≈ 19.7 N/m. Clue words: \"period,\" \"spring constant.\"\n\n(A) is wrong because 39.5 is 4π² alone, forgetting to multiply by the 0.50 kg mass.\n(C) is wrong because 2.0 comes from 1/m or dividing instead of using 4π².\n(D) is wrong because 9.9 uses 2π² instead of 4π², which is half the correct value."
    },
    {
      "id": "7-20",
      "topic": "7.2 Mass on a Spring",
      "stem": "A spring with k=50 N/m has a period of 2.0 s. Find the attached mass.",
      "choices": [
        "10.1 kg",
        "2.0 kg",
        "5.1 kg",
        "0.5 kg"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 5.1 kg. Solve T = 2π√(m/k) for mass: m = kT²/(4π²). With k = 50 N/m and T = 2.0 s: m = (50)(4.0)/(39.48) = 200/39.48 ≈ 5.07 ≈ 5.1 kg. Clue words: \"period\" and \"attached mass\" asked.\n\n(A) is wrong because 10.1 kg is twice the correct value, from using 2π² in the denominator.\n(B) is wrong because 2.0 is just the period's number reused as a mass.\n(D) is wrong because 0.5 kg is off by a factor of ten and does not follow from the algebra."
    },
    {
      "id": "7-21",
      "topic": "7.2 Mass on a Spring",
      "stem": "A mass on a spring has its mass quadrupled while the spring constant stays the same. How does the period change?",
      "choices": [
        "It quadruples.",
        "It stays the same.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "Correct: (D) it doubles. Since T = 2π√(m/k), the period scales with the square root of mass. Replacing m with 4m gives T' = 2π√(4m/k) = 2·2π√(m/k) = 2T. Clue words: \"mass quadrupled,\" \"spring constant stays the same.\"\n\n(A) is wrong because it treats the period as directly proportional to m instead of √m.\n(B) is wrong because mass is in the formula and heavier masses oscillate more slowly.\n(C) is wrong because the period would shrink only if the mass decreased or the spring stiffened."
    },
    {
      "id": "7-22",
      "topic": "7.2 Mass on a Spring",
      "stem": "A mass on a spring has the spring constant quadrupled while the mass stays the same. How does the period change?",
      "choices": [
        "It quadruples.",
        "It stays the same.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It is cut in half. Since T = 2π√(m/k), the period varies as 1/√k. Replacing k with 4k gives T' = 2π√(m/(4k)) = (1/2)·2π√(m/k) = T/2. A stiffer spring supplies a larger restoring force for the same displacement, so the mass oscillates faster. The clue words are that the spring constant is quadrupled while the mass stays the same.\n\n(A) is wrong because a stiffer spring does not slow the motion; it pulls the mass back harder, which shortens the period rather than lengthening it.\n(B) is wrong because k appears in the period formula, so changing the spring constant necessarily changes the period.\n(D) is wrong because doubling the period would result from quadrupling the mass, not the spring constant, since the period grows as the square root of m but shrinks as the square root of k."
    },
    {
      "id": "7-23",
      "topic": "7.2 Mass on a Spring",
      "stem": "A spring-mass system has k=180 N/m and m=5.0 kg. Find its angular frequency, ω=√(k/m).",
      "choices": [
        "6.0 rad/s",
        "36 rad/s",
        "3.0 rad/s",
        "900 rad/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 6.0 rad/s. For a spring-mass system ω = √(k/m). With k = 180 N/m and m = 5.0 kg, k/m = 36 s⁻², and √36 = 6.0 rad/s. Clue words: \"angular frequency,\" formula given.\n\n(B) is wrong because 36 is k/m before taking the square root.\n(C) is wrong because 3.0 is half the correct value, as if dividing the root by 2.\n(D) is wrong because 900 is the product k × m instead of the quotient under a root."
    },
    {
      "id": "7-24",
      "topic": "7.2 Mass on a Spring",
      "stem": "Two spring-mass systems have identical masses, but Spring A is stiffer (larger k) than Spring B. Compare their periods.",
      "choices": [
        "Cannot be determined without more information.",
        "Spring A (stiffer) has a shorter period.",
        "Both have the same period, since the masses are equal.",
        "Spring A (stiffer) has a longer period."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Spring A, the stiffer one, has the shorter period. With equal masses, T = 2π√(m/k) decreases as k increases. A stiffer spring exerts a larger restoring force at the same displacement, so the mass is accelerated more strongly and completes each cycle faster. The clue words are identical masses and stiffer (larger k).\n\n(A) is wrong because the formula gives a definite comparison with only the stated information: the same mass in the numerator and a larger k in the denominator mean a smaller period.\n(C) is wrong because equal masses alone do not set the period; the spring constant matters too, and here the two springs differ.\n(D) is wrong because it reverses the dependence on k; a larger k makes the period shorter, not longer."
    },
    {
      "id": "7-25",
      "topic": "7.2 Mass on a Spring",
      "stem": "Two spring-mass systems use identical springs, but Mass A is heavier than Mass B. Compare their periods.",
      "choices": [
        "Mass A (heavier) has a shorter period.",
        "Both have the same period, since the springs are identical.",
        "Mass A (heavier) has a longer period.",
        "Cannot be determined without more information."
      ],
      "correct": 2,
      "explanation": "Correct: (C) Mass A, the heavier one, has the longer period. With identical springs (the same k), T = 2π√(m/k) increases with m. A larger mass has more inertia, so the same restoring force produces a smaller acceleration and each cycle takes longer. The clue words are identical springs and heavier.\n\n(A) is wrong because it reverses the dependence on mass; the period grows with the square root of the mass, so the heavier mass is slower.\n(B) is wrong because the spring is only one of the two quantities in the period formula, and the masses differ, so the periods differ even though the springs are the same.\n(D) is wrong because the comparison is determined by the formula T = 2π√(m/k) with the same k and different m."
    },
    {
      "id": "7-26",
      "topic": "7.2 Mass on a Spring",
      "stem": "A 0.80 kg mass oscillates on a spring with k=320 N/m. Find the frequency of oscillation.",
      "choices": [
        "0.31 Hz",
        "20 Hz",
        "5.66 Hz",
        "3.18 Hz"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 3.18 Hz. First find the period: T = 2π√(m/k) = 2π√(0.80/320) = 2π√0.0025 = 2π(0.05) ≈ 0.314 s. Then f = 1/T ≈ 3.18 Hz (equivalently f = (1/2π)√(k/m) = (1/2π)(20) = 3.18 Hz). Clue words: \"frequency,\" not period.\n\n(A) is wrong because 0.31 is the period in seconds, not the frequency.\n(B) is wrong because 20 is ω = √(k/m) in rad/s, not f in Hz.\n(C) is wrong because 5.66 does not come from the correct steps; it is not f = ω/2π."
    },
    {
      "id": "7-27",
      "topic": "7.2 Mass on a Spring",
      "stem": "A spring-mass system has amplitude 0.10 m and angular frequency 6.0 rad/s. Find the maximum speed.",
      "choices": [
        "0.017 m/s",
        "3.6 m/s",
        "0.6 m/s",
        "6.1 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.6 m/s. Maximum speed occurs at equilibrium and equals v<sub>max</sub> = Aω. With A = 0.10 m and ω = 6.0 rad/s: v<sub>max</sub> = (0.10)(6.0) = 0.6 m/s. Clue words: \"amplitude,\" \"angular frequency,\" \"maximum speed.\"\n\n(A) is wrong because 0.017 is A/ω, dividing instead of multiplying.\n(B) is wrong because 3.6 is Aω² (0.10 × 36), which is the maximum acceleration.\n(D) is wrong because 6.1 comes from adding A and ω, which have different units."
    },
    {
      "id": "7-28",
      "topic": "7.2 Mass on a Spring",
      "stem": "As a mass on a spring passes through the equilibrium position, what are the values of the spring force and the object's acceleration?",
      "choices": [
        "Force is zero; acceleration is maximum.",
        "Both are at their maximum.",
        "Both are exactly zero.",
        "Force is maximum; acceleration is zero."
      ],
      "correct": 2,
      "explanation": "Correct: (C) both are exactly zero. At equilibrium x = 0, so the spring force F = −kx = 0. By Newton's Second Law a = F/m = 0 as well. The mass is moving fastest there but is not accelerating at that instant. Clue words: \"equilibrium position.\"\n\n(A) is wrong because acceleration cannot be maximum when the force is zero.\n(B) is wrong because maximum force and acceleration occur at the extremes, x = ±A.\n(D) is wrong because force and acceleration are proportional (a = F/m), so one cannot be zero while the other is not."
    },
    {
      "id": "7-29",
      "topic": "7.2 Mass on a Spring",
      "stem": "A spring with k=250 N/m and amplitude 0.050 m holds a 2.0 kg mass. Find the maximum acceleration.",
      "choices": [
        "3.13 m/s²",
        "25 m/s²",
        "12.5 m/s²",
        "6.25 m/s²"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 6.25 m/s². Maximum acceleration occurs at maximum displacement, where the spring force is greatest: F<sub>max</sub> = kA = (250 N/m)(0.050 m) = 12.5 N. Then a<sub>max</sub> = F<sub>max</sub>/m = 12.5/2.0 = 6.25 m/s². Clue words: \"maximum acceleration,\" k, A and m given.\n\n(A) is wrong because 3.13 is half the correct value, as if dividing by 4.0 kg.\n(B) is wrong because 25 multiplies the force by the mass instead of dividing.\n(C) is wrong because 12.5 is the maximum force in newtons, not the acceleration."
    },
    {
      "id": "7-30",
      "topic": "7.2 Mass on a Spring",
      "stem": "Is total mechanical energy conserved for a mass oscillating on a frictionless horizontal spring?",
      "choices": [
        "Yes, as long as no non-conservative force acts on the system.",
        "No, energy is always lost during spring oscillation.",
        "No, mechanical energy conservation doesn't apply to oscillation.",
        "Yes, but only at the exact moment of maximum displacement."
      ],
      "correct": 0,
      "explanation": "Correct: (A) yes, as long as no non-conservative force acts. A spring force is conservative, and on a frictionless horizontal surface the total energy E = ½mv² + ½kx² = ½kA² is constant, shifting between kinetic and elastic potential energy. Clue words: \"frictionless,\" \"total mechanical energy.\"\n\n(B) is wrong because energy is lost only if friction or drag acts, which is excluded here.\n(C) is wrong because conservation of mechanical energy applies to any system with only conservative forces, oscillating or not.\n(D) is wrong because energy is conserved at every instant, not just at the extreme."
    },
    {
      "id": "7-31",
      "topic": "7.2 Mass on a Spring",
      "stem": "A 3.0 kg mass hangs at rest from a vertical spring, stretching it 0.15 m from its natural length. Find the spring constant.",
      "choices": [
        "20 N/m",
        "196 N/m",
        "45 N/m",
        "294 N/m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 196 N/m. When the mass hangs at rest, the net force is zero, so the upward spring force equals the weight: kx = mg. Then k = mg/x = (3.0 kg)(9.8 m/s²)/(0.15 m) = 29.4 N / 0.15 m = 196 N/m. Clue words: \"at rest,\" \"stretching it 0.15 m from its natural length.\"\n\n(A) is wrong because 20 is m/x, which leaves out g.\n(C) is wrong because 45 does not follow from the force balance; it does not use the weight over the stretch.\n(D) is wrong because 294 is mg/0.10 or 10 × the weight, using the wrong stretch; the weight alone is 29.4 N."
    },
    {
      "id": "7-32",
      "topic": "7.2 Mass on a Spring",
      "stem": "Does gravity affect the PERIOD of a vertically-hanging mass-spring system, compared to the same system oriented horizontally?",
      "choices": [
        "The period cannot be defined for a vertical spring.",
        "Yes, a vertical spring always has a longer period.",
        "No — gravity shifts the equilibrium but not the period formula.",
        "Yes, a vertical spring always has a shorter period due to gravity."
      ],
      "correct": 2,
      "explanation": "Correct: (C) no, gravity shifts the equilibrium but not the period. On a vertical spring, gravity stretches the spring until kx₀ = mg, which sets a new equilibrium position. Measured from that point, the net force on the mass is −k(displacement), because the constant weight is cancelled by the extra spring force, so the motion is SHM with the same T = 2π√(m/k). Clue words: \"PERIOD,\" \"compared to the same system oriented horizontally.\"\n\n(A) is wrong because vertical springs oscillate with a well-defined period.\n(B) is wrong because g does not appear in the spring period formula.\n(D) is wrong for the same reason, so there is no shortening."
    },
    {
      "id": "7-33",
      "topic": "7.2 Mass on a Spring",
      "stem": "Using the spring from an earlier question (k=196 N/m, m=3.0 kg), find its period of oscillation.",
      "choices": [
        "0.78 s",
        "3.1 s",
        "1.56 s",
        "0.39 s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0.78 s. Use T = 2π√(m/k) with m = 3.0 kg and k = 196 N/m: m/k = 3.0/196 = 0.0153 s², and √0.0153 ≈ 0.1237 s, so T = 2π(0.1237) ≈ 0.78 s. Clue words: \"period,\" k and m given.\n\n(B) is wrong because 3.1 s is about four times the correct value.\n(C) is wrong because 1.56 s is double the correct result.\n(D) is wrong because 0.39 s is half, as if using π instead of 2π."
    },
    {
      "id": "7-34",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Find the period of a 1.0 m long pendulum on Earth (g=9.8 m/s²), swinging through a small angle.",
      "choices": [
        "2.0 s",
        "9.8 s",
        "0.64 s",
        "6.3 s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 2.0 s. For a pendulum at small angles T = 2π√(L/g). With L = 1.0 m and g = 9.8 m/s²: L/g = 0.102 s², √0.102 = 0.319 s, and T = 2π(0.319) ≈ 2.0 s. A 1 m pendulum is a handy benchmark with a period close to 2 s. Clue words: \"small angle,\" \"Earth.\"\n\n(B) is wrong because 9.8 is g itself, not a time.\n(C) is wrong because 0.64 is 2π/9.8, leaving out the square root.\n(D) is wrong because 6.3 is 2π√L, leaving out the division by g."
    },
    {
      "id": "7-35",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Does the mass of a pendulum's bob affect its period?",
      "choices": [
        "No — period does not depend on the bob's mass.",
        "Yes, a heavier bob always has a shorter period.",
        "Only for bobs heavier than 1 kg.",
        "Yes, a heavier bob always has a longer period."
      ],
      "correct": 0,
      "explanation": "Correct: (A) no, the period does not depend on the bob's mass. The pendulum's restoring force is the tangential component of gravity, mg sinθ, but the inertia it must accelerate is also m, so mass cancels in a = −g sinθ. That is why T = 2π√(L/g) contains no m, as in free fall where all masses accelerate equally.\n\n(B) is wrong because a heavier bob does not swing faster.\n(C) is wrong because there is no mass threshold; the cancellation always holds.\n(D) is wrong because a heavier bob also does not swing more slowly."
    },
    {
      "id": "7-36",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Under what condition is the standard pendulum period formula, T=2π√(L/g), an accurate description of the motion?",
      "choices": [
        "Only for pendulums longer than 2 meters, whatever the swing angle used.",
        "For any swing angle, no matter how large, if the string stays taut.",
        "Only on planets with g greater than Earth's, whatever the swing angle.",
        "Only for small swing angles (roughly under 15°)."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Only for small swing angles (roughly under 15°). The formula comes from replacing sinθ with θ (in radians) in the restoring force, which makes the motion simple harmonic. That approximation is good only for small angles; at larger angles sinθ < θ, the restoring force is weaker, and the real period is longer. The clue words are accurate description, pointing to the condition under which the model holds.\n\n(A) is wrong because the length does not set the validity; a long pendulum with a huge swing angle still fails the small-angle approximation.\n(B) is wrong because larger angles break the approximation sinθ ≈ θ, even if the string stays taut, so the formula is no longer accurate.\n(C) is wrong because g affects the value of the period but not the angle limitation, so a larger g does not make the formula accurate for large swings."
    },
    {
      "id": "7-37",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum has a period of 3.0 s on Earth. Find its length.",
      "choices": [
        "2.23 m",
        "4.47 m",
        "0.74 m",
        "8.82 m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 2.23 m. Solve T = 2π√(L/g) for L: L = g(T/2π)². With T = 3.0 s, T/2π = 0.4775 s, squared is 0.228 s², and L = 9.8(0.228) ≈ 2.23 m. Clue words: \"period of 3.0 s,\" \"find its length.\"\n\n(B) is wrong because 4.47 m is double the correct value, which comes from using 2π² in place of 4π² in L = gT²/(4π²).\n(C) is wrong because 0.74 m is about a third of the correct value; it comes from forgetting to square T (9.8 × 3.0/39.5).\n(D) is wrong because 8.82 m is about four times too large; it equals gT²/10, using about 10 in place of 4π² ≈ 39.5."
    },
    {
      "id": "7-38",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum's length is quadrupled. How does its period change?",
      "choices": [
        "It quadruples.",
        "It stays the same.",
        "It doubles.",
        "It is cut in half."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It doubles. For a pendulum T = 2π√(L/g), so T ∝ √L. Quadrupling L multiplies T by √4 = 2. For example, a 1.0 m pendulum has T ≈ 2.0 s and a 4.0 m pendulum has T ≈ 4.0 s. The clue words are that the length is quadrupled, so the square-root dependence is what matters.\n\n(A) is wrong because it treats T as directly proportional to L, but the period depends on the square root of the length, so a factor of 4 in L gives only a factor of 2 in T.\n(B) is wrong because the period depends on the length through T = 2π√(L/g), so changing the length changes the period.\n(D) is wrong because a longer pendulum swings more slowly, not faster, so the period cannot decrease."
    },
    {
      "id": "7-39",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum is taken to a planet where g is smaller than on Earth. How does its period change (length unchanged)?",
      "choices": [
        "It decreases.",
        "It stays the same.",
        "It increases.",
        "The pendulum stops swinging entirely."
      ],
      "correct": 2,
      "explanation": "Correct: (C) It increases. In T = 2π√(L/g), the gravitational acceleration g is in the denominator, so a smaller g gives a larger period. Weaker gravity gives a weaker restoring force, so the bob accelerates back toward the bottom more slowly and each swing takes longer. The clue words are that g is smaller while the length is unchanged.\n\n(A) is wrong because it reverses the dependence; the period decreases only if g increases, not if it decreases.\n(B) is wrong because g appears directly in the formula, so changing g necessarily changes the period.\n(D) is wrong because as long as g > 0 there is a restoring force pulling the bob back; the swing just slows, but the pendulum still oscillates."
    },
    {
      "id": "7-40",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Find the period of a 1.0 m pendulum on the Moon, where g≈1.6 m/s².",
      "choices": [
        "1.25 s",
        "5.0 s",
        "3.2 s",
        "2.0 s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 5.0 s. T = 2π√(L/g) = 2π√(1.0/1.6) = 2π√0.625 = 2π(0.791) ≈ 5.0 s. This is about 2.5 times the Earth value because g is about 6 times smaller, and √6 ≈ 2.5. Clue words: \"on the Moon, g ≈ 1.6 m/s².\"\n\n(A) is wrong because 1.25 does not follow from the formula (it is roughly 2/1.6).\n(C) is wrong because 3.2 is 2g, not a time from the formula.\n(D) is wrong because 2.0 s is the Earth value, ignoring the Moon's weaker gravity."
    },
    {
      "id": "7-41",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum swings through a very LARGE angle, well beyond the small-angle regime. Does T=2π√(L/g) still give the exact period?",
      "choices": [
        "Yes, but only if the bob is very light.",
        "No, for large angles the pendulum doesn't oscillate at all.",
        "No — for large angles, the true period is somewhat longer.",
        "Yes, this formula is exact for any angle."
      ],
      "correct": 2,
      "explanation": "Correct: (C) No — for large angles, the true period is somewhat longer. The formula depends on the approximation sinθ ≈ θ. At large angles sinθ is smaller than θ, so the true restoring force is weaker than the simple harmonic model assumes, and the pendulum takes longer per swing than 2π√(L/g). The clue words are very large angle and exact period.\n\n(A) is wrong because the mass is irrelevant to the approximation; the formula involves only length and gravity, and a light bob does not make a large swing valid.\n(B) is wrong because the pendulum still oscillates periodically at large angles, just not exactly sinusoidally.\n(D) is wrong because the formula is exact for no angle at all; it is a good approximation only for small angles, and the error grows as the swing angle increases."
    },
    {
      "id": "7-42",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Pendulum 1 has length 2.0 m; Pendulum 2 has length 8.0 m. Find the ratio of Pendulum 2's period to Pendulum 1's period.",
      "choices": [
        "2",
        "8",
        "4",
        "16"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 2. Because the period of a pendulum satisfies T ∝ √L, the ratio of periods is the square root of the ratio of lengths: T<sub>2</sub>/T<sub>1</sub> = √(8.0/2.0) = √4 = 2. Numerically T<sub>1</sub> ≈ 2.84 s and T<sub>2</sub> ≈ 5.68 s. The factor 2π√(1/g) is the same for both pendulums and cancels in the ratio.\n\n(B) is wrong because 8 is just the second pendulum's length in meters; the ratio of periods depends on the square root of the ratio of lengths, not on that number.\n(C) is wrong because 4 is the length ratio, and the square root has not been taken; the period ratio is √4 = 2.\n(D) is wrong because 16 squares the length ratio instead of taking its root, which would make the period grow faster than the length, not slower."
    },
    {
      "id": "7-43",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum's bob mass is increased while its length stays the same. Does the period change?",
      "choices": [
        "Only if the increase is more than double the original mass.",
        "No — pendulum period is independent of the bob's mass.",
        "Yes, it decreases proportionally to mass.",
        "Yes, it increases proportionally to mass."
      ],
      "correct": 1,
      "explanation": "Correct: (B) no, the period is independent of the bob's mass. T = 2π√(L/g) depends only on length and local g, since the restoring force mg sinθ and the inertia m both scale with mass and cancel. Clue words: \"mass is increased while its length stays the same.\"\n\n(A) is wrong because there is no mass threshold for any effect.\n(C) is wrong because a larger mass does not lower the period.\n(D) is wrong because a larger mass does not raise the period either."
    },
    {
      "id": "7-44",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A grandfather clock's pendulum has a period of exactly 2.0 s. Find the required pendulum length.",
      "choices": [
        "0.99 m",
        "1.98 m",
        "0.25 m",
        "0.50 m"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0.99 m. Solve T = 2π√(L/g) for the length: L = g(T/2π)². With T = 2.0 s, T/2π = 0.3183 s, which squared is 0.1013 s², so L = 9.8(0.1013) ≈ 0.99 m. This is the classic seconds pendulum of about one meter. The clue words are a period of exactly 2.0 s, which fixes the length through the formula.\n\n(B) is wrong because 1.98 m doubles the correct answer; a pendulum that long would have a period of about 2.8 s.\n(C) is wrong because 0.25 m would correspond to a period of about 1.0 s, so it is too short.\n(D) is wrong because 0.50 m halves the correct answer, and it would give a period of about 1.4 s, not 2.0 s."
    },
    {
      "id": "7-45",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Explain, at a physical level, why a pendulum's restoring force is only APPROXIMATELY proportional to its displacement.",
      "choices": [
        "The true force involves sinθ, which only approximates θ for small angles.",
        "Gravity itself changes as the pendulum swings.",
        "Pendulums have no restoring force at all.",
        "The restoring force is exactly proportional to displacement, at any angle."
      ],
      "correct": 0,
      "explanation": "The true restoring force on a pendulum bob is proportional to sinθ (from the geometry of the swing), not θ itself. Since sinθ≈θ only holds accurately for small angles, the true restoring force only approximately matches the F∝−x condition required for pure SHM — this is the physical root of the small-angle restriction."
    },
    {
      "id": "7-46",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A pendulum's length is doubled. Find the ratio of its new period to its original period.",
      "choices": [
        "2",
        "0.71",
        "4",
        "√2 ≈ 1.41"
      ],
      "correct": 3,
      "explanation": "Correct: (D) √2 ≈ 1.41. Since T ∝ √L, replacing L with 2L multiplies T by √2 ≈ 1.41. Check: T = 2π√(2L/g) = √2 · 2π√(L/g). Clue words: \"length is doubled,\" \"ratio of new to original.\"\n\n(A) is wrong because it treats T as proportional to L.\n(B) is wrong because 0.71 = 1/√2 would apply if the length were halved, inverting the ratio.\n(C) is wrong because 4 would result from T ∝ L² and period grows more slowly than that."
    },
    {
      "id": "7-47",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Is a pendulum's motion exactly simple harmonic, or only approximately so?",
      "choices": [
        "Never SHM under any circumstances, since the restoring force is not linear.",
        "Only approximately SHM, and only for small angles.",
        "Exactly SHM, for any swing angle, as the restoring force is always linear.",
        "Exactly SHM, but only for very long pendulums, at any swing angle."
      ],
      "correct": 1,
      "explanation": "Correct: (B) only approximately SHM, and only for small angles. The pendulum's restoring force is the tangential component of weight, F = −mg sinθ, which is proportional to the angle θ only when sinθ ≈ θ (radians), i.e. for small swings. For large angles the force is no longer linear in displacement, so the motion is periodic but not exactly sinusoidal. An ideal spring, by contrast, follows F = −kx exactly.\n\n(A) is wrong because for small angles the motion is very nearly SHM, so \"never\" overstates it.\n(C) is wrong because the restoring force is not linear in angle.\n(D) is wrong because length does not remove the angle dependence; a long pendulum with a huge swing is still non-SHM."
    },
    {
      "id": "7-48",
      "topic": "7.3 The Simple Pendulum",
      "stem": "A student measures a pendulum's length as 0.80 m and its period as 1.79 s. Using these measurements, find their experimental value for g.",
      "choices": [
        "10.6 m/s²",
        "9.86 m/s²",
        "8.9 m/s²",
        "12.4 m/s²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 9.86 m/s². Solve T = 2π√(L/g) for g by squaring: g = 4π²L/T². With L = 0.80 m and T = 1.79 s: 4π²(0.80) = 31.58 and T² = 3.204 s², so g = 31.58/3.204 ≈ 9.86 m/s², close to the accepted 9.8 m/s². Clue words: \"experimental value for g.\"\n\n(A) is wrong because 10.6 does not follow from these measurements; it would need a period near 1.73 s.\n(C) is wrong because 8.9 would need a period near 1.88 s.\n(D) is wrong because 12.4 would need a much shorter period, about 1.60 s, which is not the measured 1.79 s."
    },
    {
      "id": "7-49",
      "topic": "7.3 The Simple Pendulum",
      "stem": "Why does a pendulum clock make a reliable timekeeping device?",
      "choices": [
        "Pendulum clocks are not actually reliable timekeeping devices.",
        "Its period depends on many rapidly-changing factors that average out.",
        "Its period depends on the bob's mass, which can be precisely controlled.",
        "Its period depends only on length and gravity, both nearly constant."
      ],
      "correct": 3,
      "explanation": "Correct: (D) its period depends only on length and gravity, both nearly constant. T = 2π√(L/g) does not depend on amplitude (for small swings) or mass, so each swing takes the same time, giving a regular tick. With L fixed by the rod and g nearly fixed at a given location, the period stays stable. Clue words: \"reliable timekeeping.\"\n\n(A) is wrong because pendulum clocks were long the standard for accurate timekeeping.\n(B) is wrong because reliability comes from few varying factors, not from averaging many.\n(C) is wrong because the period does not depend on the bob's mass at all."
    },
    {
      "id": "7-50",
      "topic": "7.4 Energy in SHM",
      "stem": "A spring with k=150 N/m has amplitude 0.20 m. Find the total mechanical energy of the oscillation.",
      "choices": [
        "6.0 J",
        "15 J",
        "1.5 J",
        "3.0 J"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 3.0 J. The total mechanical energy equals the elastic potential energy at the extreme: E = ½kA² = ½(150 N/m)(0.20 m)² = ½(150)(0.04) = 3.0 J. Clue words: \"total mechanical energy,\" k and amplitude.\n\n(A) is wrong because 6.0 J is kA² without the factor of ½.\n(B) is wrong because 15 J comes from not squaring A properly (½kA = 15 J).\n(C) is wrong because 1.5 J is half of the right result, as if the ½ were applied twice."
    },
    {
      "id": "7-51",
      "topic": "7.4 Energy in SHM",
      "stem": "How does total mechanical energy behave throughout an ideal (frictionless) SHM cycle?",
      "choices": [
        "It stays constant, trading between kinetic and potential.",
        "It continuously decreases over each cycle of the oscillation, even without friction.",
        "It continuously increases over each cycle of the oscillation, even without a driver.",
        "It oscillates between positive and negative values over each cycle."
      ],
      "correct": 0,
      "explanation": "Correct: (A) it stays constant, trading between kinetic and potential. With only a conservative restoring force, E = KE + PE = ½kA² is the same at every moment: KE is lost as PE grows toward the extreme and recovered on the way back. Clue words: \"ideal (frictionless).\"\n\n(B) is wrong because energy decreases only with non-conservative forces such as friction or drag, which are excluded.\n(C) is wrong because no energy is added without a driving force.\n(D) is wrong because KE and PE (½kx²) are each never negative, so the total cannot swing negative."
    },
    {
      "id": "7-52",
      "topic": "7.4 Energy in SHM",
      "stem": "At the point of maximum displacement in SHM, find the kinetic energy and potential energy.",
      "choices": [
        "KE is maximum; PE is zero at the center of the motion.",
        "Both KE and PE are at their maximum at the same instant.",
        "KE is zero; PE equals the total energy.",
        "Both KE and PE are zero at the extreme of the motion."
      ],
      "correct": 2,
      "explanation": "Correct: (C) KE is zero and PE equals the total energy. At x = ±A the object momentarily stops, so ½mv² = 0. Energy conservation then forces the spring's potential energy to hold all the energy: PE = ½kA² = E. Clue words: \"maximum displacement.\"\n\n(A) is wrong because it describes the center of the motion, not the extreme.\n(B) is wrong because KE and PE trade off, so they cannot both be maximal at once; their sum is fixed.\n(D) is wrong because PE = ½kA² is not zero when the spring is maximally stretched."
    },
    {
      "id": "7-53",
      "topic": "7.4 Energy in SHM",
      "stem": "At the equilibrium position in SHM, find the kinetic energy and potential energy.",
      "choices": [
        "Both KE and PE are zero at the center of the motion.",
        "KE equals the total energy; PE is zero.",
        "Both KE and PE are at their maximum at the same instant.",
        "KE is zero; PE is maximum at the extreme of the motion."
      ],
      "correct": 1,
      "explanation": "Correct: (B) KE equals the total energy and PE is zero. At x = 0 the spring is at its natural length, so PE = ½kx² = 0. Conservation of energy then requires KE = E = ½kA², so the speed is at its maximum there. Clue words: \"equilibrium position.\"\n\n(A) is wrong because the object is moving fastest, so KE is not zero.\n(C) is wrong because KE and PE cannot both be maximal; they sum to a constant.\n(D) is wrong because it describes the extreme of the motion rather than the center."
    },
    {
      "id": "7-54",
      "topic": "7.4 Energy in SHM",
      "stem": "A spring-mass system has total mechanical energy 4.0 J and mass 2.0 kg. Find the maximum speed.",
      "choices": [
        "4.0 m/s",
        "1.0 m/s",
        "2.0 m/s",
        "8.0 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 2.0 m/s. At equilibrium all the energy is kinetic, so E = ½mv<sub>max</sub>². With E = 4.0 J and m = 2.0 kg: 4.0 = ½(2.0)v², so v² = 4.0 m²/s² and v = 2.0 m/s. Clue words: \"total mechanical energy,\" \"maximum speed.\"\n\n(A) is wrong because 4.0 reuses the energy value as a speed.\n(B) is wrong because 1.0 comes from dividing by 2m (E/(2m) = 1.0) and not taking the correct form v² = 2E/m.\n(D) is wrong because 8.0 is 2E, or v² doubled again, with no square root."
    },
    {
      "id": "7-55",
      "topic": "7.4 Energy in SHM",
      "stem": "An SHM system's amplitude is doubled. How does its total mechanical energy change?",
      "choices": [
        "It is cut in half.",
        "It doubles.",
        "It stays the same.",
        "It quadruples."
      ],
      "correct": 3,
      "explanation": "Correct: (D) it quadruples. E = ½kA² depends on the square of the amplitude, so replacing A with 2A gives ½k(2A)² = 4(½kA²). Clue words: \"amplitude is doubled,\" \"total mechanical energy.\"\n\n(A) is wrong because larger amplitude means more stored energy, not less.\n(B) is wrong because it treats energy as linear in A.\n(C) is wrong because amplitude sets the total energy of the system."
    },
    {
      "id": "7-56",
      "topic": "7.4 Energy in SHM",
      "stem": "A spring with k=300 N/m and amplitude 0.10 m holds a 1.5 kg mass. Find the maximum speed.",
      "choices": [
        "1.41 m/s",
        "2.0 m/s",
        "0.71 m/s",
        "4.47 m/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.41 m/s. First find the total energy: E = ½kA² = ½(300)(0.10)² = 1.5 J. At equilibrium this is all kinetic: ½mv<sub>max</sub>² = 1.5, so v<sub>max</sub>² = 2(1.5)/1.5 = 2.0 m²/s² and v<sub>max</sub> = √2.0 ≈ 1.41 m/s. Check: ω = √(k/m) = √200 = 14.1 rad/s, so Aω = 1.41 m/s.\n\n(B) is wrong because 2.0 is v² before taking the square root.\n(C) is wrong because 0.71 is half of 1.41; it equals √(E/2m) = √0.5, dividing by 2m instead of using v² = 2E/m.\n(D) is wrong because 4.47 does not follow from the correct steps and is much larger than Aω."
    },
    {
      "id": "7-57",
      "topic": "7.4 Energy in SHM",
      "stem": "A spring (k=400 N/m, amplitude 0.10 m) holds a 2.0 kg mass. Find the object's speed at a displacement of x=0.060 m from equilibrium.",
      "choices": [
        "1.60 m/s",
        "0.80 m/s",
        "1.13 m/s",
        "2.83 m/s"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 1.13 m/s. Use energy conservation: KE = ½kA² − ½kx² = ½(400)(0.10² − 0.060²) = 200(0.0100 − 0.0036) = 200(0.0064) = 1.28 J. Then ½mv² = 1.28 gives v² = 2(1.28)/2.0 = 1.28, so v ≈ 1.13 m/s. Clue words: \"speed at a displacement of x = 0.060 m.\"\n\n(A) is wrong because 1.60 m/s comes from v² = 4KE/m = 2.56, a stray extra factor of 2 in v², and it is larger than the correct 1.13 m/s.\n(B) is wrong because 0.80 = √(KE/m) = √0.64, dropping the factor of 2 in v² = 2KE/m.\n(D) is wrong because 2.83 is double the maximum speed (1.41 m/s) and cannot exceed v<sub>max</sub> anyway."
    },
    {
      "id": "7-58",
      "topic": "7.4 Energy in SHM",
      "stem": "Is it physically possible for kinetic energy to be negative at some point during SHM?",
      "choices": [
        "Yes, whenever potential energy exceeds the total energy of the system.",
        "No — kinetic energy depends on velocity squared, never negative.",
        "Only for very large amplitudes of oscillation, never for small ones.",
        "Yes, at the extremes of the motion, where the speed is zero."
      ],
      "correct": 1,
      "explanation": "Correct: (B) no, kinetic energy depends on velocity squared and is never negative. KE = ½mv² with m > 0 and v² ≥ 0, so KE ≥ 0 for any motion, including SHM. Clue words: \"physically possible,\" \"negative.\"\n\n(A) is wrong because PE can never exceed the total energy in SHM; if a calculation gives that, it is an error.\n(C) is wrong because the sign of KE does not depend on amplitude.\n(D) is wrong because at the extremes the speed is zero, so KE = 0, which is not negative."
    },
    {
      "id": "7-59",
      "topic": "7.4 Energy in SHM",
      "stem": "At what point in an SHM cycle is the object's speed at its maximum?",
      "choices": [
        "At the extremes of displacement.",
        "At the equilibrium position.",
        "Exactly halfway between equilibrium and the extreme.",
        "Speed is constant throughout SHM."
      ],
      "correct": 1,
      "explanation": "Correct: (B) at the equilibrium position. Speed is greatest where potential energy is zero, because E = ½kx² + ½mv² is fixed. At x = 0 all energy is kinetic, giving v<sub>max</sub> = Aω. Clue words: \"speed at its maximum.\"\n\n(A) is wrong because at the extremes the object stops momentarily, so speed is zero.\n(C) is wrong because halfway there is still stored spring energy, so speed is lower than maximum.\n(D) is wrong because speed changes continuously from zero to maximum and back."
    },
    {
      "id": "7-60",
      "topic": "7.4 Energy in SHM",
      "stem": "At what point in an SHM cycle is the MAGNITUDE of acceleration at its maximum?",
      "choices": [
        "Acceleration is constant throughout SHM.",
        "At the equilibrium position.",
        "At the extremes of displacement (x=±A).",
        "Exactly halfway between equilibrium and the extreme."
      ],
      "correct": 2,
      "explanation": "Correct: (C) at the extremes of displacement (x = ±A). Since a = −(k/m)x, the magnitude of acceleration is proportional to |x| and peaks when |x| = A, giving a<sub>max</sub> = Aω². Clue words: \"MAGNITUDE of acceleration.\"\n\n(A) is wrong because acceleration varies with position and changes sign.\n(B) is wrong because at equilibrium the force and acceleration are zero.\n(D) is wrong because halfway the acceleration is only half its maximum."
    },
    {
      "id": "7-61",
      "topic": "7.4 Energy in SHM",
      "stem": "For a spring-mass system, find the potential energy at a displacement of x=0.5A, expressed as a fraction of the total energy.",
      "choices": [
        "50%",
        "10%",
        "25%",
        "75%"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 25%. Potential energy is PE = ½kx². At x = 0.5A: PE = ½k(0.5A)² = ½k(0.25A²) = 0.25(½kA²) = 0.25E. So potential energy is 25% of the total, and kinetic energy takes the remaining 75%. Clue words: \"x = 0.5A,\" \"fraction of total energy.\"\n\n(A) is wrong because 50% treats PE as linear in x; it is quadratic.\n(B) is wrong because 10% has no basis in x²; it does not follow from (0.5)².\n(D) is wrong because 75% is the kinetic energy fraction, not the potential."
    },
    {
      "id": "7-62",
      "topic": "7.4 Energy in SHM",
      "stem": "How does energy conservation in SHM relate to the gravitational energy conservation studied in Unit 3?",
      "choices": [
        "They are entirely unrelated principles.",
        "The same conservation law, applied to a different potential energy.",
        "Energy conservation only applies to gravitational systems, not springs.",
        "SHM energy conservation is a newly-discovered law specific to oscillation."
      ],
      "correct": 1,
      "explanation": "SHM energy conservation is literally the same principle from Unit 3 — total mechanical energy (KE+PE) remains constant absent friction or other non-conservative forces — just applied here with elastic potential energy (spring) or, for a pendulum, gravitational potential energy, trading with kinetic energy throughout the cycle."
    },
    {
      "id": "7-63",
      "topic": "7.4 Energy in SHM",
      "stem": "A pendulum is released from rest at a height of 0.05 m above its lowest point (small angle). Find its maximum speed at the bottom of the swing.",
      "choices": [
        "0.31 m/s",
        "0.99 m/s",
        "1.40 m/s",
        "0.70 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.99 m/s. For a pendulum released from rest, gravitational potential energy converts to kinetic energy at the bottom: mgh = ½mv². The mass cancels, so v = √(2gh) = √(2 × 9.8 × 0.05) = √0.98 ≈ 0.99 m/s. Clue words: \"released from rest at a height of 0.05 m above its lowest point.\"\n\n(A) is wrong because 0.31 does not come from the energy equation; it is too small by a factor of about three.\n(C) is wrong because 1.40 is √2 times too large, as if using v² = 4gh.\n(D) is wrong because 0.70 is 0.99/√2, as if using v² = gh and dropping the factor of 2."
    },
    {
      "id": "7-64",
      "topic": "7.4 Energy in SHM",
      "stem": "For a pendulum swinging back and forth, at which point is its kinetic energy maximum, and at which point is its (gravitational) potential energy maximum?",
      "choices": [
        "Both are maximum at the same point.",
        "KE is maximum at the highest points; PE is maximum at the lowest point.",
        "Neither KE nor PE varies during the swing.",
        "KE is maximum at the lowest point; PE is maximum at the highest points."
      ],
      "correct": 3,
      "explanation": "This directly mirrors the spring's behavior: KE is maximum at the lowest point of the swing (equivalent to a spring's equilibrium position, where speed is greatest), and PE is maximum at the highest points of the swing (equivalent to the spring's maximum displacement, where the pendulum has momentarily stopped)."
    },
    {
      "id": "7-65",
      "topic": "7.4 Energy in SHM",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: Show that the two expressions for total SHM energy, E=½mv_max² and E=½kA², are mathematically equivalent, using the relationships v_max=Aω and ω²=k/m.",
      "choices": [
        "They are equivalent only when the amplitude equals exactly 1 meter.",
        "They are equivalent: ½mv_max² = ½m(Aω)² = ½mA²(k/m) = ½kA², as the mass cancels.",
        "They are only approximately equal, differing by a factor related to amplitude.",
        "The two expressions describe different physical quantities and are not meant to be equal."
      ],
      "correct": 1,
      "explanation": "Substitute v<sub>max</sub>=Aω into the kinetic energy expression: ½mv<sub>max</sub>² = ½m(Aω)² = ½mA²ω². Then substitute ω²=k/m: ½mA²(k/m) = ½kA² — the mass m cancels out algebraically, leaving exactly the elastic potential energy expression. This confirms both formulas describe the exact same total energy, just derived from two different reference points in the motion (maximum speed at equilibrium vs. maximum displacement at the extreme)."
    }
  ],
  "8": [
    {
      "id": "8-1",
      "topic": "8.1 Density and Pressure",
      "stem": "Find the density of an object with mass 750 kg and volume 0.50 m³.",
      "choices": [
        "375 kg/m³",
        "750 kg/m³",
        "1500 kg/m³",
        "1000 kg/m³"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 1500 kg/m³. Density is mass per unit volume, ρ = m/V. With m = 750 kg and V = 0.50 m³, ρ = 750 kg ÷ 0.50 m³ = 1500 kg/m³, which is denser than water (1000 kg/m³). The clue words are mass 750 kg and volume 0.50 m³, which point straight to the quotient m/V.\n\n(A) is wrong because 375 multiplies the mass by 0.50 instead of dividing; since density is mass per volume, dividing by a volume smaller than one makes the density larger than the mass, not smaller.\n(B) is wrong because 750 ignores the volume entirely and just repeats the mass number, which is not a density.\n(D) is wrong because 1000 kg/m³ is the density of water, a memorized reference value and not a result computed from the data given for this object."
    },
    {
      "id": "8-2",
      "topic": "8.1 Density and Pressure",
      "stem": "A small sample and a large sample of the exact same substance are compared. How do their densities compare?",
      "choices": [
        "Density cannot be compared without knowing the exact masses.",
        "The small sample always has greater density.",
        "Both samples have exactly the same density.",
        "The large sample always has greater density."
      ],
      "correct": 2,
      "explanation": "Correct: (C) both samples have exactly the same density. Density ρ = m/V is an intensive property: doubling the amount of a substance doubles both m and V, so the ratio does not change. A teaspoon and a pool of the same water both have about 1000 kg/m³. Clue words: \"exact same substance.\"\n\n(A) is wrong because the masses are not needed; the ratio is fixed by the material.\n(B) is wrong because a small sample is not more compact.\n(D) is wrong because larger size adds mass and volume in equal proportion, not extra density."
    },
    {
      "id": "8-3",
      "topic": "8.1 Density and Pressure",
      "stem": "A 500 N force is spread evenly over an area of 0.25 m². Find the resulting pressure.",
      "choices": [
        "125 Pa",
        "500 Pa",
        "12,500 Pa",
        "2000 Pa"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 2000 Pa. Pressure is force per area, P = F/A. With F = 500 N spread over A = 0.25 m²: P = 500/0.25 = 2000 N/m² = 2000 Pa. Clue words: \"spread evenly over an area.\"\n\n(A) is wrong because 125 multiplies F by A instead of dividing.\n(B) is wrong because 500 is the force itself, ignoring the area.\n(C) is wrong because 12,500 does not follow from F/A and overstates the pressure by over six times."
    },
    {
      "id": "8-4",
      "topic": "8.1 Density and Pressure",
      "stem": "Is pressure a vector or a scalar quantity?",
      "choices": [
        "A vector, with the same direction as the force producing it.",
        "A scalar — it has magnitude but no inherent direction of its own.",
        "Neither a vector nor a scalar, since it acts in every direction at once.",
        "It depends on the type of fluid, being a vector for liquids only."
      ],
      "correct": 1,
      "explanation": "Correct: (B) a scalar, with magnitude but no inherent direction. The pressure at a point in a fluid is a single number that is the same no matter which way a surface there is oriented. The force on a surface (F = PA) is a vector, perpendicular to the surface, but the pressure itself has no direction.\n\n(A) is wrong because the force direction is set by the surface, not by the pressure.\n(C) is wrong because acting equally in all directions is exactly why it is a scalar, and everything is either scalar or vector.\n(D) is wrong because pressure is scalar in both liquids and gases."
    },
    {
      "id": "8-5",
      "topic": "8.1 Density and Pressure",
      "stem": "A force of 800 N produces a pressure of 4000 Pa. Find the area over which it's applied.",
      "choices": [
        "0.5 m²",
        "0.2 m²",
        "3,200,000 m²",
        "5.0 m²"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.2 m². Pressure is force per unit area, P = F/A, so the area is found by rearranging to A = F/P = 800 N ÷ 4000 Pa = 0.2 m². The units work because N divided by N/m² leaves m². The clue words are the area over which the force is applied, so the unknown is A.\n\n(A) is wrong because 0.5 m² does not come from F/P; it would require a force of 2000 N at the given pressure, while the stem gives 800 N.\n(C) is wrong because 3,200,000 multiplies F by P (800 × 4000) instead of dividing, which gives a number with meaningless units for an area.\n(D) is wrong because 5.0 inverts the ratio (P/F = 4000/800); the area is force divided by pressure, which gives 0.2 m²."
    },
    {
      "id": "8-6",
      "topic": "8.1 Density and Pressure",
      "stem": "A pressure of 1.5×10⁵ Pa acts over an area of 0.020 m². Find the resulting force.",
      "choices": [
        "0.13 N",
        "3000 N",
        "7,500,000 N",
        "300 N"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 3000 N. Force is pressure times area, F = PA. With P = 1.5×10<sup>5</sup> Pa and A = 0.020 m², F = (1.5×10<sup>5</sup> Pa)(0.020 m²) = 3.0×10<sup>3</sup> N = 3000 N. The units work because Pa times m² is N. The clue words are resulting force, with pressure and area given.\n\n(A) is wrong because 0.13 N is far too small: a pressure of 150,000 Pa over 0.020 m² cannot produce a force under one newton, and it comes from dividing rather than multiplying.\n(C) is wrong because 7,500,000 N divides the pressure by the area (1.5×10<sup>5</sup> ÷ 0.020), which is not how force is found.\n(D) is wrong because 300 N is ten times too small, as would result from a decimal slip in the multiplication; the correct product is 3000 N."
    },
    {
      "id": "8-7",
      "topic": "8.1 Density and Pressure",
      "stem": "Explain why snowshoes prevent a person from sinking into soft snow, in terms of pressure.",
      "choices": [
        "Snowshoes reduce the person's weight on the snow, by supporting it.",
        "Snowshoes work by melting the snow beneath them as the person walks.",
        "Snowshoes increase the force applied to the snow, which holds it firm.",
        "They spread the weight over a larger area, lowering the pressure."
      ],
      "correct": 3,
      "explanation": "Correct: (D) They spread the weight over a larger area, lowering the pressure. Pressure is P = F/A. The person's weight, which is the force on the snow, is unchanged, but the snowshoe has a much larger contact area, so the pressure on the snow is much smaller and the surface is less likely to give way. The clue words are in terms of pressure, which points to the force-over-area relation.\n\n(A) is wrong because the person's weight is still the same; snowshoes support the person on the snow but do not reduce the downward force on it.\n(B) is wrong because snowshoes do not melt the snow; they have no heating effect, and melting would make the footing worse.\n(C) is wrong because firmer footing comes from lower pressure, not greater force; increasing the force on the same area would push the person deeper."
    },
    {
      "id": "8-8",
      "topic": "8.1 Density and Pressure",
      "stem": "An object has mass 8.0 kg and volume 0.0040 m³. Find its density, and determine whether it would float or sink in water (ρ_water=1000 kg/m³).",
      "choices": [
        "500 kg/m³; would sink",
        "500 kg/m³; would float",
        "2000 kg/m³; would float",
        "2000 kg/m³; would sink"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 2000 kg/m³; would sink. Density is ρ = m/V = 8.0 kg / 0.0040 m³ = 2000 kg/m³. An object sinks in a fluid if its density exceeds the fluid's; 2000 > 1000 kg/m³, so it sinks. Clue words: \"float or sink in water.\"\n\n(A) is wrong because 500 kg/m³ is only one quarter of the true m/V = 2000 kg/m³, and a density of 500 would float, so the choice also contradicts itself.\n(B) is wrong because the same slip gives 500 kg/m³, which would float but is not the actual density.\n(C) is wrong because the density is right but the conclusion is reversed; denser than water means it sinks."
    },
    {
      "id": "8-9",
      "topic": "8.1 Density and Pressure",
      "stem": "What is the correct SI unit for pressure?",
      "choices": [
        "Pascal (Pa)",
        "Newton (N)",
        "Joule (J)",
        "kg/m³"
      ],
      "correct": 0,
      "explanation": "Correct: (A) Pascal (Pa). Pressure is force per unit area, P = F/A, and the SI unit that results is the pascal, where 1 Pa = 1 N/m². A pressure of 1 pascal is quite small, so everyday pressures are often given in kilopascals or atmospheres, but the base unit is still the pascal.\n\n(B) is wrong because the newton is the SI unit of force, which is only the numerator of the pressure; pressure also divides by area.\n(C) is wrong because the joule is the SI unit of energy and work, which is a force times a distance rather than a force over an area.\n(D) is wrong because kg/m³ is the unit of density, a mass divided by a volume, which is a different quantity from pressure."
    },
    {
      "id": "8-10",
      "topic": "8.1 Density and Pressure",
      "stem": "Convert 2.0 atm to pascals. (1 atm = 1.013×10⁵ Pa)",
      "choices": [
        "1.013×10⁵ Pa",
        "2.026×10⁵ Pa",
        "4.052×10⁵ Pa",
        "5.07×10⁴ Pa"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 2.026×10<sup>5</sup> Pa. To convert units, multiply by the conversion factor: 2.0 atm × 1.013×10<sup>5</sup> Pa/atm = 2.026×10<sup>5</sup> Pa. The atm units cancel, leaving pascals. The clue words are convert 2.0 atm, and the conversion factor is given in the stem, so no other physics is needed.\n\n(A) is wrong because 1.013×10<sup>5</sup> Pa is only 1 atm, which is half of the 2.0 atm in the question.\n(C) is wrong because 4.052×10<sup>5</sup> Pa multiplies by 2 twice, equal to 4 atm rather than the 2.0 atm requested.\n(D) is wrong because 5.07×10<sup>4</sup> Pa divides 1.013×10<sup>5</sup> by 2 instead of multiplying, and it is smaller than a single atmosphere, so it cannot be 2.0 atm."
    },
    {
      "id": "8-11",
      "topic": "8.1 Density and Pressure",
      "stem": "Two objects have the same volume, but Object A has more mass than Object B. Compare their densities.",
      "choices": [
        "Object A has greater density.",
        "Object B has greater density.",
        "Density cannot be compared without more information.",
        "Both have equal density, since their volumes are equal."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Object A has greater density. Since density is ρ = m/V and the two volumes are equal, the density is proportional to the mass, so the object with more mass is denser. For example, 4 kg in 2 m³ gives 2 kg/m³, while 2 kg in 2 m³ gives 1 kg/m³. The clue words are same volume and more mass.\n\n(B) is wrong because it reverses the relationship; with a common volume in the denominator, the larger mass gives the larger density, not the smaller.\n(C) is wrong because the given information is enough: equal volumes and a larger mass settle the comparison.\n(D) is wrong because equal volumes give equal densities only if the masses are also equal, and the stem says Object A has more mass."
    },
    {
      "id": "8-12",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Find the total pressure 5.0 m below the surface of a lake, given atmospheric pressure at the surface is 1.0×10⁵ Pa.",
      "choices": [
        "1.49×10⁵ Pa",
        "1.0×10⁵ Pa",
        "1.05×10⁵ Pa",
        "4.9×10⁴ Pa"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.49×10⁵ Pa. Total (absolute) pressure at depth h is P = P₀ + ρgh = 1.0×10⁵ + (1000)(9.8)(5.0) = 1.0×10⁵ + 49,000 = 1.49×10⁵ Pa. Clue words: \"total pressure,\" \"atmospheric pressure at the surface.\"\n\n(B) is wrong because 1.0×10⁵ Pa ignores the water's added pressure.\n(C) is wrong because 1.05×10⁵ adds only ρh = (1000)(5.0) = 5,000 Pa, leaving out g.\n(D) is wrong because 4.9×10⁴ is only the fluid contribution, leaving out atmospheric pressure."
    },
    {
      "id": "8-13",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Why does pressure increase with depth in a fluid?",
      "choices": [
        "Because deeper points support more fluid weight above them.",
        "Pressure does not actually increase with depth in a fluid at rest.",
        "Because fluids become denser at greater depth, in every case.",
        "Because temperature increases with depth, which raises the pressure."
      ],
      "correct": 0,
      "explanation": "Correct: (A) because deeper points support more fluid weight above them. At depth h, the fluid must hold up the column above it, whose weight per unit area is ρgh, so the pressure rises as P = P₀ + ρgh.\n\n(B) is wrong because pressure in a fluid at rest definitely rises with depth.\n(C) is wrong because liquids are nearly incompressible and the depth effect exists even at constant density.\n(D) is wrong because the pressure increase is due to weight, not temperature."
    },
    {
      "id": "8-14",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "At a specific point within a fluid, in which direction(s) does the pressure act?",
      "choices": [
        "Only straight upward.",
        "Only horizontally.",
        "Only straight downward.",
        "Equally in every direction."
      ],
      "correct": 3,
      "explanation": "Correct: (D) Equally in every direction. At a point in a fluid at rest, the pressure is the same in all directions, which is a consequence of Pascal's principle. A small submerged surface feels the same pressure no matter how it is turned, which is why a diver is squeezed from all sides rather than only from above.\n\n(A) is wrong because the pressure is not just upward; the fluid pushes on a surface from every side, with the force directed perpendicular to that surface.\n(B) is wrong because the pressure is not only sideways; a horizontal surface in the fluid also feels a force from the fluid above or below it.\n(C) is wrong because the weight pressing down intuition applies to the force on a horizontal surface, but the pressure itself at a point has no preferred direction."
    },
    {
      "id": "8-15",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Find the GAUGE pressure (pressure due to the fluid alone, excluding atmospheric pressure) at a depth of 10 m in water.",
      "choices": [
        "9,800 Pa",
        "98,000 Pa",
        "100,000 Pa",
        "49,000 Pa"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 98,000 Pa. Gauge pressure is the pressure from the fluid alone, P<sub>gauge</sub> = ρgh = (1000 kg/m³)(9.8 m/s²)(10 m) = 98,000 Pa. Clue words: \"GAUGE pressure,\" \"excluding atmospheric pressure.\"\n\n(A) is wrong because 9,800 is for a depth of 1.0 m, a factor-of-ten slip.\n(C) is wrong because 100,000 Pa is roughly one atmosphere, not the fluid term.\n(D) is wrong because 49,000 is the value for 5 m, half the depth."
    },
    {
      "id": "8-16",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Two containers of very different shapes — one narrow, one wide — are both filled with the same fluid to the same depth. Compare the pressure at the bottom of each.",
      "choices": [
        "Pressure cannot be compared without knowing the container shapes.",
        "The wider container has greater pressure at the bottom.",
        "The narrower container has greater pressure at the bottom.",
        "Both containers have equal pressure at the bottom."
      ],
      "correct": 3,
      "explanation": "Since P=P0+ρgh depends only on depth (and density), not on the container's shape or total fluid volume, both containers have exactly the same pressure at the bottom — sometimes called the hydrostatic paradox, since it can feel like the wider container's greater total weight of fluid should matter, but it doesn't."
    },
    {
      "id": "8-17",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "A gauge pressure of 196,000 Pa is measured in water. Find the corresponding depth.",
      "choices": [
        "15 m",
        "10 m",
        "25 m",
        "20 m"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 20 m. Gauge pressure in a static fluid is P<sub>gauge</sub> = ρgh, so the depth is h = P<sub>gauge</sub>/(ρg) = 196,000 Pa ÷ (1000 kg/m³ × 9.8 m/s²) = 196,000 ÷ 9800 = 20 m. The clue words are gauge pressure and corresponding depth, which signal that atmospheric pressure is left out and only ρgh is used.\n\n(A) is wrong because 15 m of water would give only 147,000 Pa, less than the 196,000 Pa stated.\n(B) is wrong because 10 m gives 98,000 Pa, only half of the stated pressure, since water adds about 98,000 Pa for every 10 m of depth.\n(C) is wrong because 25 m would give 245,000 Pa, which is more than the 196,000 Pa measured."
    },
    {
      "id": "8-18",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Does the pressure at a given depth in a fluid depend on the total amount (volume) of fluid present?",
      "choices": [
        "Yes, but only for very large volumes.",
        "Yes, more total fluid always means more pressure at a given depth.",
        "Pressure cannot be defined without knowing total volume.",
        "No — pressure at a given depth depends only on depth and density."
      ],
      "correct": 3,
      "explanation": "Correct: (D) No — pressure at a given depth depends only on depth and density. In P = P<sub>0</sub> + ρgh there is no term for the total volume or the shape of the container. The pressure at a point is set by the height of the fluid directly above it, so a thin tube and a wide lake of the same depth give the same pressure at the bottom.\n\n(A) is wrong because no volume threshold exists; the formula holds for small and large amounts of fluid alike, as long as the depth is the same.\n(B) is wrong because adding fluid sideways does not add pressure at a fixed depth; only a greater depth above the point increases the pressure.\n(C) is wrong because pressure is perfectly well defined from depth, density, and g alone, with no need to know the total volume."
    },
    {
      "id": "8-19",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Find the total pressure 3.0 m below the surface of oil (ρ=800 kg/m³), given atmospheric pressure of 1.0×10⁵ Pa at the surface.",
      "choices": [
        "1.235×10⁵ Pa",
        "2.352×10⁴ Pa",
        "1.024×10⁵ Pa",
        "1.294×10⁵ Pa"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.235×10⁵ Pa. Total pressure is P = P₀ + ρgh = 1.0×10⁵ + (800 kg/m³)(9.8 m/s²)(3.0 m) = 1.0×10⁵ + 23,520 = 1.2352×10⁵ Pa. The oil's density, 800 kg/m³, must be used rather than water's. Clue words: \"oil (ρ = 800 kg/m³),\" \"total pressure.\"\n\n(B) is wrong because 2.352×10⁴ Pa is only the fluid term, without atmospheric pressure.\n(C) is wrong because 1.024×10⁵ adds only 2,352 Pa, a factor-of-ten slip.\n(D) is wrong because 1.294×10⁵ uses water's density (adding 29,400 Pa), ignoring the oil."
    },
    {
      "id": "8-20",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "A U-shaped tube, wider on one side than the other, is filled with water. Compare the pressure at the bottom of each side, at equal depths.",
      "choices": [
        "The wider side has greater pressure at the bottom.",
        "The narrower side has greater pressure at the bottom.",
        "Both sides have equal pressure at equal depths.",
        "Pressure cannot be compared without knowing the exact tube dimensions."
      ],
      "correct": 2,
      "explanation": "Since pressure at a given depth depends only on depth and density — not on the container's width at that point — both sides of the U-tube have identical pressure at equal depths, which is exactly why the water settles to the same height on both sides."
    },
    {
      "id": "8-21",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Find the pressure difference between two points in water separated by a vertical distance of 8.0 m.",
      "choices": [
        "78,400 Pa",
        "9800 Pa",
        "784,000 Pa",
        "7840 Pa"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 78,400 Pa. The pressure difference between two points in a static fluid depends only on their vertical separation: ΔP = ρgΔh = (1000 kg/m³)(9.8 m/s²)(8.0 m) = 78,400 Pa. The clue words are vertical distance of 8.0 m, and the atmospheric pressure cancels in the difference.\n\n(B) is wrong because 9800 Pa corresponds to a separation of only 1.0 m of water, since ρg = 9800 Pa per meter; the stem gives 8.0 m.\n(C) is wrong because 784,000 Pa is ten times too large, which would correspond to a separation of 80 m.\n(D) is wrong because 7840 Pa is ten times too small, which would correspond to a separation of only 0.80 m."
    },
    {
      "id": "8-22",
      "topic": "8.2 Pressure Variation with Depth",
      "stem": "Why doesn't the horizontal extent (width) of a fluid container affect the pressure at a given depth?",
      "choices": [
        "Horizontal extent actually does affect pressure significantly.",
        "Because gravity only acts on the vertical center of the container.",
        "Because fluids automatically redistribute their pressure evenly regardless of geometry.",
        "Pressure depends only on the height of fluid directly above that point."
      ],
      "correct": 3,
      "explanation": "The pressure formula depends specifically on the height h of fluid directly above the point in question — not on how wide the container is at any level. This is precisely why the hydrostatic paradox holds: differently-shaped containers filled to the same depth produce identical pressure at that depth."
    },
    {
      "id": "8-23",
      "topic": "8.3 Pascal's Principle",
      "stem": "What does Pascal's Principle state?",
      "choices": [
        "Pressure only propagates downward through a fluid, never sideways.",
        "Fluids cannot transmit pressure changes at all, whatever the container.",
        "Pressure decreases as it moves through a fluid, falling with distance.",
        "Pressure applied to an enclosed fluid transmits undiminished throughout it."
      ],
      "correct": 3,
      "explanation": "Correct: (D) pressure applied to an enclosed fluid is transmitted undiminished throughout it. If you increase the pressure at one point of a confined incompressible fluid, the same increase appears at every point in the fluid and on the container walls. This is the principle behind hydraulic systems.\n\n(A) is wrong because the transmission is in all directions, not only downward.\n(B) is wrong because fluids transmit pressure well, which is what makes hydraulics work.\n(C) is wrong because the added pressure does not weaken with distance."
    },
    {
      "id": "8-24",
      "topic": "8.3 Pascal's Principle",
      "stem": "A hydraulic lift has a small piston (area 0.010 m²) and a large piston (area 0.50 m²). A 200 N force is applied to the small piston. Find the resulting force on the large piston.",
      "choices": [
        "10,000 N",
        "50,000 N",
        "4.0 N",
        "2500 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 10,000 N. Pascal's Principle gives equal pressure: F₁/A₁ = F₂/A₂. So F₂ = F₁(A₂/A₁) = 200 N × (0.50/0.010) = 200 × 50 = 10,000 N. Clue words: \"hydraulic lift,\" two piston areas.\n\n(B) is wrong because 50,000 N multiplies by the ratio and then by an extra factor of 5.\n(C) is wrong because 4.0 N inverts the area ratio (200 × 0.010/0.50).\n(D) is wrong because 2500 N does not follow from the area ratio of 50."
    },
    {
      "id": "8-25",
      "topic": "8.3 Pascal's Principle",
      "stem": "A hydraulic system multiplies an input force dramatically at the output piston. Does this violate conservation of energy?",
      "choices": [
        "Yes, hydraulic systems create energy from nothing at the output piston.",
        "No, because hydraulic fluids have negative mass in the pistons.",
        "No — the output piston moves a smaller distance, so work in equals work out.",
        "Yes, but only for very large area ratios between the two pistons."
      ],
      "correct": 2,
      "explanation": "Since the fluid is essentially incompressible, the volume displaced by the small piston must equal the volume received by the large piston — meaning the small piston travels a much larger distance for the large piston's smaller displacement. Work (force × distance) balances out exactly, preserving energy conservation."
    },
    {
      "id": "8-26",
      "topic": "8.3 Pascal's Principle",
      "stem": "A hydraulic system needs to produce 8000 N of output force from a 100 N input force, using an output piston area of 0.20 m². Find the required input piston area.",
      "choices": [
        "0.010 m²",
        "0.16 m²",
        "0.0025 m²",
        "0.025 m²"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.0025 m². In a hydraulic system the pressure is equal at both pistons, so F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>, and the input area is A<sub>1</sub> = F<sub>1</sub>A<sub>2</sub>/F<sub>2</sub> = (100 N)(0.20 m²) ÷ (8000 N) = 20 ÷ 8000 = 0.0025 m². The required force ratio of 80 means the input area must be 1/80 of the output area: 0.20 ÷ 80 = 0.0025.\n\n(A) is wrong because 0.010 m² is 1/20 of the output area, which would give only a twenty-fold multiplication, not the 80-fold needed to turn 100 N into 8000 N.\n(B) is wrong because 0.16 m² does not follow from the force ratio; it is almost as large as the output piston, so it would give almost no multiplication.\n(D) is wrong because 0.025 m² is ten times too large, giving a multiplication of only 8."
    },
    {
      "id": "8-27",
      "topic": "8.3 Pascal's Principle",
      "stem": "In a hydraulic lift, why can't the output force be increased indefinitely without any tradeoff?",
      "choices": [
        "A larger force multiplication requires the input piston to travel farther.",
        "Output force is actually unrelated to the area ratio.",
        "The fluid itself limits how much force can ever be produced.",
        "There is no tradeoff; output force can increase without limit for free."
      ],
      "correct": 0,
      "explanation": "Correct: (A) a larger force multiplication requires the input piston to travel farther. The fluid is incompressible, so the volume displaced at each piston is equal: A₁d₁ = A₂d₂. A larger area ratio means the output piston moves only a small distance for a long input stroke. Work in equals work out (F₁d₁ = F₂d₂), so no energy is created.\n\n(B) is wrong because output force depends directly on the area ratio.\n(C) is wrong because the fluid transmits any force the structure can withstand; it does not cap it.\n(D) is wrong because energy conservation forbids a free, unlimited gain."
    },
    {
      "id": "8-28",
      "topic": "8.3 Pascal's Principle",
      "stem": "A car lift has an input piston area of 0.0050 m² and an output piston area of 0.25 m². Find the output force for a 300 N input force.",
      "choices": [
        "6 N",
        "6000 N",
        "15,000 N",
        "1500 N"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 15,000 N. Equal pressure at the two pistons gives F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>, so F<sub>2</sub> = F<sub>1</sub>(A<sub>2</sub>/A<sub>1</sub>) = 300 N × (0.25 ÷ 0.0050) = 300 × 50 = 15,000 N. The area ratio of 50 is the multiplication factor of the lift. The clue words are car lift and two piston areas.\n\n(A) is wrong because 6 N uses the inverted ratio (300 ÷ 50); the larger output piston multiplies the force, so the output must exceed the input.\n(B) is wrong because 6000 N is 300 × 20, which uses a wrong area ratio; 0.25 divided by 0.0050 is 50, not 20.\n(D) is wrong because 1500 N is ten times too small, which would correspond to a multiplication factor of only 5."
    },
    {
      "id": "8-29",
      "topic": "8.3 Pascal's Principle",
      "stem": "In a connected hydraulic system at the same height, what quantity is equal at both pistons, and what quantity generally differs?",
      "choices": [
        "Force is equal; pressure differs.",
        "Pressure is equal; force generally differs.",
        "Neither pressure nor force is ever equal in a hydraulic system.",
        "Both pressure and force are always equal."
      ],
      "correct": 1,
      "explanation": "Correct: (B) Pressure is equal; force generally differs. In a connected fluid at the same height, Pascal's principle makes the pressure the same at both pistons. Since F = PA, pistons with different areas have different forces, which is how a hydraulic system multiplies force: the larger piston carries a proportionally larger force at the same pressure.\n\n(A) is wrong because it reverses the two quantities; the force is not what the fluid equalizes, the pressure is.\n(C) is wrong because the pressure at the same height is equal in a connected fluid, so something is equal.\n(D) is wrong because the forces are equal only if the piston areas are equal, and a hydraulic machine works precisely because the areas differ."
    },
    {
      "id": "8-30",
      "topic": "8.3 Pascal's Principle",
      "stem": "In a hydraulic system, the small piston (area 0.020 m²) moves 0.50 m. If the large piston has area 0.40 m², find how far the large piston moves.",
      "choices": [
        "0.010 m",
        "0.025 m",
        "0.10 m",
        "10 m"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 0.025 m. The fluid is incompressible, so the volumes displaced are equal: A₁d₁ = A₂d₂. Then d₂ = A₁d₁/A₂ = (0.020)(0.50)/0.40 = 0.010/0.40 = 0.025 m. The larger piston moves less, compensating for its larger area.\n\n(A) is wrong because 0.010 is the displaced volume (m³) with no division by A₂.\n(C) is wrong because 0.10 m does not follow from the area ratio of 20 (0.50/20 = 0.025).\n(D) is wrong because 10 m inverts the ratio, which would make the big piston move more."
    },
    {
      "id": "8-31",
      "topic": "8.3 Pascal's Principle",
      "stem": "A hydraulic jack produces a large output force with a small input force. What is the tradeoff for this mechanical advantage?",
      "choices": [
        "The tradeoff is a loss of total energy in the system.",
        "The input piston must travel farther than the output piston moves.",
        "The output force is actually smaller than the input force, contrary to appearances.",
        "There is no tradeoff whatsoever."
      ],
      "correct": 1,
      "explanation": "The mechanical advantage of a large output force comes at the cost of the input piston needing to travel a proportionally larger distance — exactly analogous to a lever's mechanical advantage from Unit 5, where a smaller force applied over a larger distance produces a larger force over a smaller distance, with no energy created or destroyed."
    },
    {
      "id": "8-32",
      "topic": "8.3 Pascal's Principle",
      "stem": "A hydraulic brake system has a pedal piston (area 0.0015 m²) and a brake piston (area 0.030 m²). Find the force multiplication factor between the pedal and the brake.",
      "choices": [
        "45",
        "10",
        "5",
        "20"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 20. In a hydraulic system the pressure is equal at the two pistons, so F<sub>2</sub>/F<sub>1</sub> = A<sub>2</sub>/A<sub>1</sub> = 0.030 ÷ 0.0015 = 20, which means the brake piston delivers 20 times the force applied at the pedal piston. The clue words are force multiplication factor, which is the ratio of the output force to the input force.\n\n(A) is wrong because 45 does not come from the area ratio; dividing 0.030 by 0.0015 gives 20, not 45.\n(B) is wrong because 10 is half of the true ratio; the brake piston area is 20 times the pedal piston area, not 10 times.\n(C) is wrong because 5 has no basis in 0.030 ÷ 0.0015 and would understate the multiplication of force by a factor of four."
    },
    {
      "id": "8-33",
      "topic": "8.3 Pascal's Principle",
      "stem": "Two pistons of different area are connected by the same enclosed, incompressible fluid at the same height. If the smaller piston has force F1 and area A1, and the larger has force F2 and area A2, which equation correctly relates them?",
      "choices": [
        "F1/A1 = F2/A2",
        "F1·A1 = F2·A2",
        "F1 = F2",
        "F1+A1 = F2+A2"
      ],
      "correct": 0,
      "explanation": "Correct: (A) F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>. Pascal's principle says the pressure is the same at both pistons at the same height in an enclosed incompressible fluid, and since pressure is P = F/A, equal pressure means F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>. The larger piston therefore carries the larger force, in proportion to its area.\n\n(B) is wrong because the product F·A has no physical meaning here; pressure is force divided by area, not multiplied by it.\n(C) is wrong because the forces are equal only if the areas are equal, and the stem says the pistons have different areas.\n(D) is wrong because it adds quantities with different units, newtons and square meters, which cannot be added."
    },
    {
      "id": "8-34",
      "topic": "8.4 Buoyancy",
      "stem": "Find the buoyant force on an object that displaces 0.020 m³ of water.",
      "choices": [
        "196 N",
        "19.6 N",
        "1960 N",
        "98 N"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 196 N. Archimedes' principle says the buoyant force equals the weight of the displaced fluid: F<sub>b</sub> = ρ<sub>fluid</sub>V<sub>displaced</sub>g = (1000 kg/m³)(0.020 m³)(9.8 m/s²) = 196 N. The object's own mass and density do not enter, only the volume of water it pushes aside. The clue words are displaces 0.020 m³ of water.\n\n(B) is wrong because 19.6 N is ten times too small, which is what a displaced volume of 0.0020 m³ would give; the stem says 0.020 m³.\n(C) is wrong because 1960 N is ten times too large, which would correspond to a displaced volume of 0.20 m³ rather than 0.020 m³.\n(D) is wrong because 98 N is exactly half of the correct value, as would result from using g = 4.9 m/s² or half the displaced volume."
    },
    {
      "id": "8-35",
      "topic": "8.4 Buoyancy",
      "stem": "What determines the magnitude of the buoyant force on a submerged object?",
      "choices": [
        "The weight of the fluid displaced by the object.",
        "The object's own weight, regardless of the fluid in which it sits.",
        "The depth at which the object is submerged in the fluid.",
        "The object's own density, regardless of the fluid in which it sits."
      ],
      "correct": 0,
      "explanation": "Correct: (A) the weight of the fluid displaced by the object. Archimedes' principle states that F<sub>b</sub> = ρ<sub>fluid</sub> V<sub>displaced</sub> g, which is the weight of the fluid pushed aside. It comes from the pressure difference between the bottom and top of the object.\n\n(B) is wrong because the object's own weight decides whether it floats or sinks, not the buoyant force.\n(C) is wrong because fully submerged, depth changes neither displaced volume nor (for a nearly incompressible fluid) density.\n(D) is wrong because the object's density only determines whether it floats or sinks."
    },
    {
      "id": "8-36",
      "topic": "8.4 Buoyancy",
      "stem": "An object is fully submerged in water, displacing 0.050 m³. Find the buoyant force acting on it.",
      "choices": [
        "980 N",
        "245 N",
        "49 N",
        "490 N"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 490 N. The buoyant force equals the weight of the displaced fluid: F<sub>b</sub> = ρ<sub>fluid</sub>Vg = (1000 kg/m³)(0.050 m³)(9.8 m/s²) = 490 N. Because the object is fully submerged, the displaced volume equals the object's whole volume, and nothing else about the object matters. The clue words are fully submerged and displacing 0.050 m³.\n\n(A) is wrong because 980 N doubles the correct value, which would require a displaced volume of 0.100 m³ rather than 0.050 m³.\n(B) is wrong because 245 N is half the correct value, corresponding to a displaced volume of only 0.025 m³.\n(C) is wrong because 49 N is ten times too small, as would result if the displaced volume were 0.0050 m³ instead of 0.050 m³."
    },
    {
      "id": "8-37",
      "topic": "8.4 Buoyancy",
      "stem": "What condition must hold for an object to float at a stable, constant depth in a fluid?",
      "choices": [
        "The buoyant force must exactly equal the object's weight.",
        "The fluid's density must be zero for the object to float.",
        "The object must be fully submerged below the fluid's surface.",
        "The object's density must exceed the fluid's density."
      ],
      "correct": 0,
      "explanation": "Correct: (A) the buoyant force must exactly equal the object's weight. An object at a stable, constant depth has zero acceleration, so the net force is zero: the upward buoyant force balances the downward weight. Clue words: \"stable, constant depth.\"\n\n(B) is wrong because a fluid of zero density would provide no buoyancy.\n(C) is wrong because floating objects are often partly above the surface.\n(D) is wrong because an object denser than the fluid would sink, not float."
    },
    {
      "id": "8-38",
      "topic": "8.4 Buoyancy",
      "stem": "An object floats with 60% of its volume submerged. Find the ratio of the object's density to the fluid's density.",
      "choices": [
        "1.67",
        "0.40",
        "1.0",
        "0.60"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 0.60. For a floating object, buoyant force equals weight: ρ<sub>fluid</sub> V<sub>sub</sub> g = ρ<sub>obj</sub> V g, so V<sub>sub</sub>/V = ρ<sub>obj</sub>/ρ_fluid. A 60% submerged fraction therefore gives a density ratio of 0.60. Clue words: \"floats,\" \"60% of its volume submerged.\"\n\n(A) is wrong because 1.67 is the inverse (1/0.60), which would be an object that sinks.\n(B) is wrong because 0.40 is the fraction above the surface.\n(C) is wrong because a ratio of 1.0 corresponds to being fully submerged (neutrally buoyant)."
    },
    {
      "id": "8-39",
      "topic": "8.4 Buoyancy",
      "stem": "Ice has density approximately 920 kg/m³; water has density 1000 kg/m³. Find the fraction of a floating ice cube's volume that is submerged.",
      "choices": [
        "100%",
        "92%",
        "8%",
        "80%"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 92%. For a floating object the submerged fraction is ρ<sub>ice</sub>/ρ_water = 920/1000 = 0.92, so 92% is below the surface and only about 8% above. Clue words: \"fraction of a floating ice cube's volume that is submerged.\"\n\n(A) is wrong because 100% would mean the ice has the same density as the water.\n(C) is wrong because 8% is the fraction above the waterline.\n(D) is wrong because 80% does not match the density ratio of 0.92."
    },
    {
      "id": "8-40",
      "topic": "8.4 Buoyancy",
      "stem": "Under what condition does an object sink to the bottom of a fluid, rather than floating?",
      "choices": [
        "When the object's density exceeds the fluid's density.",
        "When the object's volume exceeds the fluid's volume.",
        "Objects never sink; they always float to some degree.",
        "When the object's density is less than the fluid's density."
      ],
      "correct": 0,
      "explanation": "Correct: (A) When the object's density exceeds the fluid's density. Even when fully submerged, the object displaces only its own volume, giving a maximum buoyant force of ρ<sub>fluid</sub>Vg. If ρ<sub>obj</sub> > ρ<sub>fluid</sub>, then its weight ρ<sub>obj</sub>Vg is larger than that buoyant force, so the net force is downward and the object sinks. A rock in water is a typical example.\n\n(B) is wrong because comparing total volumes is not the criterion; a huge ship floats and a small pebble sinks, so density is what decides.\n(C) is wrong because dense objects, like rocks or steel bolts in water, do sink, since their weight exceeds the maximum buoyant force.\n(D) is wrong because an object less dense than the fluid floats, since its weight is less than the buoyant force when fully submerged."
    },
    {
      "id": "8-41",
      "topic": "8.4 Buoyancy",
      "stem": "A block with mass 5.0 kg and density 500 kg/m³ floats in water (ρ=1000 kg/m³). Find the volume of the block that is submerged.",
      "choices": [
        "0.01 m³",
        "0.0025 m³",
        "0.005 m³",
        "0.02 m³"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 0.005 m³. The block's total volume is V = m/ρ = 5.0 kg ÷ 500 kg/m³ = 0.010 m³. A floating object submerges the fraction ρ<sub>obj</sub>/ρ<sub>fluid</sub> = 500/1000 = 0.50 of its volume, because the buoyant force must equal its weight, so the submerged volume is 0.50 × 0.010 m³ = 0.005 m³. The clue words are floats and the volume that is submerged.\n\n(A) is wrong because 0.01 m³ is the total volume of the block, which would mean the block is entirely submerged; a block half as dense as water floats half out.\n(B) is wrong because 0.0025 m³ is half of the correct amount, corresponding to only 25% of the block submerged.\n(D) is wrong because 0.02 m³ exceeds the block's whole volume of 0.010 m³, so more of the block could not be submerged than exists."
    },
    {
      "id": "8-42",
      "topic": "8.4 Buoyancy",
      "stem": "How is an object's 'apparent weight' while submerged in a fluid related to its actual weight and the buoyant force?",
      "choices": [
        "Apparent weight = actual weight − buoyant force.",
        "Apparent weight = buoyant force only.",
        "Apparent weight is unrelated to buoyant force.",
        "Apparent weight = actual weight + buoyant force."
      ],
      "correct": 0,
      "explanation": "Correct: (A) Apparent weight = actual weight − buoyant force. The buoyant force acts upward and partially supports the object, so a scale or spring balance that reads the net downward force on it reads W − F<sub>b</sub>. For example, an object weighing 50 N in air that feels a 20 N buoyant force reads 30 N when submerged. The clue words are apparent weight while submerged.\n\n(B) is wrong because the apparent weight is not just the buoyant force; the actual weight is involved, and the buoyant force is only what reduces it.\n(C) is wrong because the two are directly related: the apparent weight is lower exactly by the amount of the buoyant force.\n(D) is wrong because it adds the two, as if buoyancy pushed downward, but the buoyant force is directed upward and opposes the weight."
    },
    {
      "id": "8-43",
      "topic": "8.4 Buoyancy",
      "stem": "An object weighs 50 N in air and has an apparent weight of 30 N while fully submerged in water. Find the buoyant force and the object's volume.",
      "choices": [
        "Fb=20N; V≈0.00204 m³",
        "Fb=80N; V≈0.00816 m³",
        "Fb=30N; V≈0.00306 m³",
        "Fb=20N; V≈0.0392 m³"
      ],
      "correct": 0,
      "explanation": "Correct: (A) F<sub>b</sub> = 20 N; V ≈ 0.00204 m³. The buoyant force is the loss of apparent weight when the object is submerged: F<sub>b</sub> = 50 N − 30 N = 20 N. For a fully submerged object, the volume equals the displaced volume, V = F<sub>b</sub>/(ρ<sub>water</sub>g) = 20 ÷ (1000 × 9.8) ≈ 0.00204 m³. The clue words are weighs 50 N in air and apparent weight of 30 N.\n\n(B) is wrong because 80 N adds the two weights, but the buoyant force is the difference, 20 N, and its volume 80/9800 ≈ 0.00816 m³ follows from the wrong force.\n(C) is wrong because 30 N is the apparent weight, not the buoyant force, and the volume 30/9800 ≈ 0.00306 m³ follows from that wrong force.\n(D) is wrong because the force of 20 N is right, but the volume 0.0392 m³ is about 19 times too large and does not follow from F<sub>b</sub>/(ρg)."
    },
    {
      "id": "8-44",
      "topic": "8.4 Buoyancy",
      "stem": "Why do objects appear to weigh less when submerged underwater, as measured by a scale?",
      "choices": [
        "Gravity is weaker underwater, so the object weighs less there.",
        "This is an optical illusion with no real physical basis at all, caused by refraction in the water.",
        "Water absorbs some of the object's mass, making it lighter.",
        "The buoyant force acts upward, partially supporting the object's weight."
      ],
      "correct": 3,
      "explanation": "The upward buoyant force genuinely helps support the object's weight, meaning the scale (or your hand, lifting something underwater) needs to supply less additional upward force — hence the object feels, and measures, lighter while submerged, even though its true weight (mg) hasn't changed at all."
    },
    {
      "id": "8-45",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "What does the continuity equation, A1v1=A2v2, physically represent?",
      "choices": [
        "Conservation of mass (or volume) for a flowing incompressible fluid.",
        "Conservation of momentum for a flowing fluid in a pipe of changing width.",
        "Conservation of energy for a flowing fluid in a pipe of changing width.",
        "A statement that fluid speed is always constant in a pipe of changing width."
      ],
      "correct": 0,
      "explanation": "Correct: (A) conservation of mass (or volume) for a flowing incompressible fluid. In steady flow with no leaks, the volume passing every cross-section per second is the same, so A₁v₁ = A₂v₂. Clue words: \"A₁v₁ = A₂v₂.\"\n\n(B) is wrong because momentum conservation involves forces and is not what this equation states.\n(C) is wrong because energy conservation is Bernoulli's equation, a different relation.\n(D) is wrong because the equation says the speed changes when the area changes."
    },
    {
      "id": "8-46",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "Water flows at 3.0 m/s through a pipe with cross-sectional area 0.020 m². The pipe narrows to 0.0050 m². Find the speed in the narrower section.",
      "choices": [
        "0.75 m/s",
        "3.0 m/s",
        "6.0 m/s",
        "12 m/s"
      ],
      "correct": 3,
      "explanation": "Correct: (D) 12 m/s. For an incompressible fluid the continuity equation holds: A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>, so (0.020 m²)(3.0 m/s) = (0.0050 m²)v<sub>2</sub> and v<sub>2</sub> = 0.060 ÷ 0.0050 = 12 m/s. The area shrinks by a factor of 4, so the speed rises by a factor of 4. The clue words are that the pipe narrows.\n\n(A) is wrong because 0.75 m/s inverts the ratio, dividing by 4 instead of multiplying by 4, and gives a slower speed in the narrower section.\n(B) is wrong because 3.0 m/s ignores the narrowing; the same speed in a smaller area would carry less water per second than comes in.\n(C) is wrong because 6.0 m/s would require the area to drop by only a factor of 2, but it drops from 0.020 to 0.0050 m², a factor of 4."
    },
    {
      "id": "8-47",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "As a pipe narrows, what happens to the speed of an incompressible fluid flowing through it?",
      "choices": [
        "The speed stays the same.",
        "The fluid stops flowing entirely.",
        "The speed decreases.",
        "The speed increases."
      ],
      "correct": 3,
      "explanation": "Correct: (D) The speed increases. For an incompressible fluid the continuity equation requires Av = constant, where A is the cross-sectional area and v the speed. If A gets smaller, v must get larger so that the volume flow rate stays the same, as with the nozzle of a garden hose, where the water speeds up as the opening narrows.\n\n(A) is wrong because a constant speed through a smaller area would reduce the volume flow rate where the pipe narrows, so fluid would pile up behind the constriction.\n(B) is wrong because the fluid keeps flowing; the narrowing changes how fast it moves, but the same volume per second passes through.\n(C) is wrong because it reverses the Av = constant relationship; a smaller area means a larger speed, not a smaller one."
    },
    {
      "id": "8-48",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "Fluid flows at 2.0 m/s through a 0.040 m² pipe section, then speeds up to 8.0 m/s in a narrower section. Find the narrower section's area.",
      "choices": [
        "0.010 m²",
        "0.32 m²",
        "0.020 m²",
        "0.16 m²"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0.010 m². By continuity A₁v₁ = A₂v₂: (0.040)(2.0) = A₂(8.0), so A₂ = 0.080/8.0 = 0.010 m². The speed rose by 4, so the area fell by 4.\n\n(B) is wrong because 0.32 is A₁ × 8.0, the product rather than the quotient.\n(C) is wrong because 0.020 would only give a speed of 4.0 m/s.\n(D) is wrong because 0.16 uses the inverted ratio, multiplying the area by 4."
    },
    {
      "id": "8-49",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "What is the term for the quantity Av (cross-sectional area times fluid speed) in a flowing fluid system?",
      "choices": [
        "Volume flow rate.",
        "Mass flow rate.",
        "Kinetic energy density.",
        "Pressure gradient."
      ],
      "correct": 0,
      "explanation": "Correct: (A) volume flow rate. Av has units m² × m/s = m³/s, the volume of fluid passing a cross-section per second. Continuity says it stays constant in an unbranched pipe for an incompressible fluid.\n\n(B) is wrong because mass flow rate is ρAv, in kg/s.\n(C) is wrong because kinetic energy density is ½ρv² in J/m³.\n(D) is wrong because a pressure gradient is pressure change per distance (Pa/m)."
    },
    {
      "id": "8-50",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "Water flows through a pipe of cross-sectional area 0.010 m² at 5.0 m/s. Find the volume flow rate.",
      "choices": [
        "0.05 m³/s",
        "0.002 m³/s",
        "0.5 m³/s",
        "50 m³/s"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 0.05 m³/s. The volume flow rate is the cross-sectional area times the fluid speed, Q = Av = (0.010 m²)(5.0 m/s) = 0.05 m³/s. The units work because m² times m/s is m³/s, the volume passing a point each second. The clue words are volume flow rate, with an area and a speed given.\n\n(B) is wrong because 0.002 divides the area by the speed (0.010 ÷ 5.0), but the flow rate is their product.\n(C) is wrong because 0.5 m³/s is ten times too large, as would result from a decimal slip in the multiplication.\n(D) is wrong because 50 m³/s is a factor of 1000 too large and has no valid origin; even dividing v by A would give 500, not 50, and a division would be wrong anyway."
    },
    {
      "id": "8-51",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "The continuity equation, A1v1=A2v2, relies on which assumption about the fluid?",
      "choices": [
        "The fluid must be incompressible.",
        "The fluid must be compressible.",
        "The fluid must be at rest.",
        "The fluid must have zero viscosity."
      ],
      "correct": 0,
      "explanation": "Correct: (A) The fluid must be incompressible. If the density stays constant, conservation of mass (ρAv constant) is the same as conservation of volume flow rate, which gives A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>. The density cancels from both sides, which is only possible when it does not change along the flow. Liquids such as water satisfy this to a very good approximation.\n\n(B) is wrong because for a compressible fluid the density changes along the flow, so the mass flow ρAv is conserved but the simple area-speed equation no longer holds.\n(C) is wrong because the equation describes a flowing fluid, not a fluid at rest; if the fluid were at rest, v would be zero everywhere and the equation would say nothing.\n(D) is wrong because zero viscosity is an assumption of Bernoulli's equation, not of the continuity equation."
    },
    {
      "id": "8-52",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "A pipe's radius is cut in half. Since cross-sectional area depends on r², how does the fluid's speed change in the narrower section (same volume flow rate)?",
      "choices": [
        "It stays the same.",
        "It doubles.",
        "It is cut in half.",
        "It quadruples."
      ],
      "correct": 3,
      "explanation": "Correct: (D) it quadruples. Area is A = πr², so halving r gives A' = π(r/2)² = A/4. Continuity at constant volume flow rate requires A₁v₁ = A₂v₂, so v₂ = 4v₁. Clue words: \"radius cut in half,\" \"depends on r².\"\n\n(A) is wrong because speed must change when the area changes.\n(B) is wrong because it counts the radius ratio (2) and forgets the square.\n(C) is wrong because a narrower pipe needs a faster, not slower, flow."
    },
    {
      "id": "8-53",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "Explain, at a physical level, why the continuity equation must hold for a steady flow of incompressible fluid through a pipe with no leaks.",
      "choices": [
        "Whatever fluid enters one end per second must exit the other end per second.",
        "Because fluid particles can be created or destroyed as needed within the pipe.",
        "There is no physical justification; it's an empirical rule with exceptions.",
        "Because pressure is always the same throughout the pipe."
      ],
      "correct": 0,
      "explanation": "At steady-state flow with no leaks or branches, mass conservation demands that whatever fluid enters a section of pipe per second must also exit per second — otherwise fluid would be piling up or disappearing somewhere inside, which isn't physically possible for an incompressible fluid with nowhere else to go."
    },
    {
      "id": "8-54",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "A pipe has three sections with areas 0.030 m², 0.010 m², and 0.015 m² in sequence. If the fluid speed in the first section is 4.0 m/s, find the speed in the second and third sections.",
      "choices": [
        "Second: 8.0 m/s; Third: 12 m/s",
        "Second: 12 m/s; Third: 8.0 m/s",
        "Second: 12 m/s; Third: 12 m/s",
        "Second: 1.33 m/s; Third: 2.0 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) Second: 12 m/s; third: 8.0 m/s. For an incompressible fluid the volume flow rate is constant: Q = A<sub>1</sub>v<sub>1</sub> = (0.030 m²)(4.0 m/s) = 0.12 m³/s. Then v<sub>2</sub> = Q/A<sub>2</sub> = 0.12 ÷ 0.010 = 12 m/s and v<sub>3</sub> = Q/A<sub>3</sub> = 0.12 ÷ 0.015 = 8.0 m/s. The narrowest section has the fastest flow.\n\n(A) is wrong because it swaps the two speeds, giving the faster flow to the wider third section, but the smaller area of 0.010 m² must have the larger speed.\n(C) is wrong because the third section is wider than the second, so the speed there must be lower than 12 m/s, not equal to it.\n(D) is wrong because 1.33 and 2.0 m/s multiply the speed by the area ratio (A<sub>2</sub>/A<sub>1</sub>) instead of dividing, which would give slower flow in the narrower pipe."
    },
    {
      "id": "8-55",
      "topic": "8.5 Fluid Flow and Continuity",
      "stem": "What happens to a fluid's speed when it flows from a narrow section of pipe into a much wider section?",
      "choices": [
        "The speed decreases.",
        "The speed stays exactly the same.",
        "The fluid reverses direction.",
        "The speed increases."
      ],
      "correct": 0,
      "explanation": "Correct: (A) the speed decreases. By continuity A₁v₁ = A₂v₂, so a larger area means a smaller speed for the same volume flow rate; the fluid slows as the pipe widens.\n\n(B) is wrong because speed is unchanged only if the area is unchanged.\n(C) is wrong because nothing in a smooth steady flow reverses its direction.\n(D) is wrong because speeding up happens when the pipe narrows."
    },
    {
      "id": "8-56",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "What physical principle does Bernoulli's equation represent, applied to a flowing fluid?",
      "choices": [
        "Conservation of mass.",
        "Newton's Third Law.",
        "Conservation of momentum.",
        "Conservation of energy."
      ],
      "correct": 3,
      "explanation": "Correct: (D) conservation of energy. Bernoulli's equation, P + ½ρv² + ρgh = constant, expresses conservation of mechanical energy per unit volume for a steady, ideal flow: pressure energy, kinetic energy, and gravitational potential energy.\n\n(A) is wrong because conservation of mass gives the continuity equation.\n(B) is wrong because Newton's Third Law is about action-reaction pairs.\n(C) is wrong because momentum conservation is a different principle, not the source of this equation."
    },
    {
      "id": "8-57",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "Water (ρ=1000 kg/m³) flows through a horizontal pipe. At one point, P1=1.5×10⁵ Pa and v1=2.0 m/s. At a narrower point, v2=6.0 m/s. Find P2.",
      "choices": [
        "1.34×10⁵ Pa",
        "1.50×10⁵ Pa",
        "1.18×10⁵ Pa",
        "1.66×10⁵ Pa"
      ],
      "correct": 0,
      "explanation": "Correct: (A) 1.34×10<sup>5</sup> Pa. For a horizontal pipe the height terms cancel, so Bernoulli's equation gives P<sub>1</sub> + ½ρv<sub>1</sub>² = P<sub>2</sub> + ½ρv<sub>2</sub>². Then P<sub>2</sub> = P<sub>1</sub> + ½ρ(v<sub>1</sub>² − v<sub>2</sub>²) = 1.5×10<sup>5</sup> + ½(1000)(4 − 36) = 1.5×10<sup>5</sup> − 16,000 = 1.34×10<sup>5</sup> Pa. The faster, narrower region has the lower pressure.\n\n(B) is wrong because 1.50×10<sup>5</sup> Pa ignores the speed change; a speed increase from 2.0 to 6.0 m/s must lower the pressure.\n(C) is wrong because 1.18×10<sup>5</sup> Pa subtracts 32,000 Pa, which leaves off the factor of ½ in the dynamic pressure ½ρv².\n(D) is wrong because 1.66×10<sup>5</sup> Pa adds the 16,000 Pa instead of subtracting it, which would mean the pressure rises where the fluid speeds up."
    },
    {
      "id": "8-58",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "Bernoulli's equation is often described as the fluid version of which broader physics principle?",
      "choices": [
        "Conservation of angular momentum.",
        "Newton's First Law.",
        "The impulse-momentum theorem.",
        "Conservation of mechanical energy."
      ],
      "correct": 3,
      "explanation": "Correct: (D) conservation of mechanical energy. Each term in P + ½ρv² + ρgh is an energy per unit volume: pressure energy, kinetic energy, and gravitational potential energy, summing to a constant along a streamline.\n\n(A) is wrong because angular momentum is conserved for rotation, which is not what is expressed here.\n(B) is wrong because Newton's First Law is about zero net force and constant velocity.\n(C) is wrong because the impulse-momentum theorem concerns force acting over time."
    },
    {
      "id": "8-59",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "Water (ρ=1000 kg/m³) flows horizontally, speeding up from 2.0 m/s to 6.0 m/s. Find the resulting pressure drop.",
      "choices": [
        "32,000 Pa",
        "8,000 Pa",
        "16,000 Pa",
        "4,000 Pa"
      ],
      "correct": 2,
      "explanation": "Correct: (C) 16,000 Pa. For horizontal flow, Bernoulli's equation gives a pressure drop of ΔP = ½ρ(v<sub>2</sub>² − v<sub>1</sub>²) = ½(1000 kg/m³)(36 − 4) = ½(1000)(32) = 16,000 Pa. Faster flow means lower pressure, and the speeds enter as squares. The result is independent of the actual pressure in the pipe.\n\n(A) is wrong because 32,000 Pa omits the factor of ½ in the dynamic pressure ½ρv², which doubles the true drop.\n(B) is wrong because 8,000 Pa halves the correct answer a second time, applying the factor of ½ twice.\n(D) is wrong because 4,000 Pa is a quarter of the true drop; it equals ρ(v<sub>2</sub> − v<sub>1</sub>), which subtracts the speeds instead of their squares and drops the ½."
    },
    {
      "id": "8-60",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "According to the Bernoulli effect, how does pressure compare between a slow-moving region and a fast-moving region of the same horizontal fluid flow?",
      "choices": [
        "Pressure is always the same regardless of speed.",
        "The fast-moving region has higher pressure.",
        "The comparison depends on the fluid's density.",
        "The fast-moving region has lower pressure."
      ],
      "correct": 3,
      "explanation": "Correct: (D) The fast-moving region has lower pressure. In a horizontal flow Bernoulli's equation gives P + ½ρv² = constant, so where the speed v is larger, the pressure P is smaller. This effect lifts airplane wings, where air moves faster over the top surface, and pulls a shower curtain inward when the water is running.\n\n(A) is wrong because the pressure varies with speed along the flow; if the speed changes, the pressure must change to keep P + ½ρv² constant.\n(B) is wrong because it reverses the relationship, a common intuition error that associates speed with a harder push; the moving fluid actually has the lower pressure.\n(C) is wrong because the direction, lower pressure in the fast flow, holds for any fluid; the density only changes the size of the effect."
    },
    {
      "id": "8-61",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "In a horizontal pipe, P1=2.0×10⁵ Pa, v1=1.0 m/s, and P2=1.8×10⁵ Pa. Using ρ=1000 kg/m³, find v2.",
      "choices": [
        "20.1 m/s",
        "6.4 m/s",
        "3.0 m/s",
        "4.0 m/s"
      ],
      "correct": 1,
      "explanation": "Correct: (B) 6.4 m/s. For a horizontal pipe, P₁ + ½ρv₁² = P₂ + ½ρv₂². Solve: v₂² = v₁² + 2(P₁ − P₂)/ρ = 1.0 + 2(20,000)/1000 = 1.0 + 40 = 41, so v₂ = √41 ≈ 6.4 m/s. Pressure drops, so the fluid speeds up.\n\n(A) is wrong because 20.1 is about √404, a factor-of-ten slip in the pressure term.\n(C) is wrong because 3.0 m/s does not reflect the 20,000 Pa drop.\n(D) is wrong because 4.0 m/s understates the speed gain; it would correspond to a drop of only 7,500 Pa."
    },
    {
      "id": "8-62",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "What does Bernoulli's equation reduce to for a fluid completely at rest (v=0 everywhere)?",
      "choices": [
        "Bernoulli's equation has no meaning for a fluid at rest.",
        "P1=P2+ρgh, but only at isolated points.",
        "P equals zero throughout the fluid.",
        "P+ρgh=constant — matching P=P0+ρgh from Section 8.2."
      ],
      "correct": 3,
      "explanation": "Correct: (D) P + ρgh = constant, matching P = P<sub>0</sub> + ρgh from Section 8.2. Setting v = 0 removes the ½ρv² terms from Bernoulli's equation, leaving P + ρgh the same everywhere in the fluid, which is the hydrostatic relation. The static pressure-depth law is therefore a special case of Bernoulli's equation, and the two descriptions of fluids agree.\n\n(A) is wrong because the equation remains valid at v = 0; it simply reduces to the static case with no motion terms.\n(B) is wrong because the relation holds throughout the fluid at rest, not only at isolated points, so it can be applied to any two points.\n(C) is wrong because the pressure is not zero in a fluid at rest; it is at least atmospheric pressure at the surface and increases by ρgh with depth."
    },
    {
      "id": "8-63",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "A large open tank has a small hole 5.0 m below the water's surface. Using Bernoulli's equation (with the tank's surface speed treated as negligible and both the surface and hole exposed to atmospheric pressure), find the water's exit speed from the hole.",
      "choices": [
        "49 m/s",
        "14 m/s",
        "7.0 m/s",
        "9.9 m/s"
      ],
      "correct": 3,
      "explanation": "With P1=P2 (both exposed to atmosphere) and v1≈0 (large tank surface): ρgh1 = ½ρv2²+ρgh2, which simplifies to v2=√(2gΔh) = √(2×9.8×5.0) = √98 ≈ 9.9 m/s — this specific result is often called Torricelli's theorem, and notice it's identical to the speed of an object simply falling from that same height."
    },
    {
      "id": "8-64",
      "topic": "8.6 Bernoulli's Equation",
      "stem": "Explain, using Bernoulli's equation, why fluid pressure is lower in a narrow section of horizontal pipe where the fluid moves faster.",
      "choices": [
        "Narrow pipes have less fluid, so there's less pressure to measure in them at all.",
        "This effect only occurs in vertical pipes, not horizontal ones, because of gravity.",
        "The narrow section physically blocks pressure from reaching that point in the pipe.",
        "The ½ρv² term rises with speed, so pressure must fall to keep the sum constant."
      ],
      "correct": 3,
      "explanation": "Bernoulli's equation requires the total (P+½ρv²+ρgh) to remain constant along a streamline. In a horizontal pipe, ρgh doesn't change, so any increase in kinetic energy (½ρv², from the fluid speeding up in the narrower section) must be balanced by a corresponding decrease in pressure — a direct energy-conservation tradeoff."
    },
    {
      "id": "8-65",
      "topic": "8.6 Bernoulli's Equation",
      "stretch": true,
      "stem": "Stretch — beyond typical AP difficulty: Water (ρ=1000 kg/m³) flows through a pipe that both narrows AND rises in elevation. At point 1 (lower, wider section): P1=2.0×10⁵ Pa, v1=2.0 m/s, h1=0 m. At point 2 (higher, narrower section): v2=8.0 m/s, h2=3.0 m. Find P2.",
      "choices": [
        "1.94×10⁵ Pa",
        "1.21×10⁵ Pa",
        "1.41×10⁵ Pa",
        "1.66×10⁵ Pa"
      ],
      "correct": 2,
      "explanation": "Apply the full Bernoulli equation: P1+½ρv1²+ρgh1 = P2+½ρv2²+ρgh2. Left side: 2.0×10⁵+½(1000)(2.0)²+0 = 2.0×10⁵+2000 = 202,000 Pa. Right side without P2: ½(1000)(8.0)²+(1000)(9.8)(3.0) = 32,000+29,400 = 61,400 Pa. Solving: P2 = 202,000−61,400 = 140,600 Pa ≈ 1.41×10⁵ Pa. This problem requires tracking all three Bernoulli terms simultaneously — the speed increase and the height increase both act to lower pressure here, compounding the total pressure drop between the two points."
    }
  ]
};

const FRQ_CONTENT = {
  "1": [
    {
      "id": "frq-1-1",
      "source": "Original",
      "title": "Reading and Reasoning from a Velocity-Time Graph",
      "prompt": "A v-t graph shows the following motion of a cart on a track, taking rightward as positive: from t=0 to t=3s, velocity increases in a straight line from 0 to 12 m/s. From t=3s to t=7s, velocity stays constant at 12 m/s. From t=7s to t=9s, velocity decreases in a straight line from 12 m/s to 0 m/s. (a) Find the cart's acceleration during each of the three phases. (b) Find the total displacement of the cart over the full 9 s. (c) Sketch the corresponding a-t graph for the full 9 s. (d) A student claims the cart's average velocity over the full 9 s equals the average of its velocity at t=0, t=3, and t=9. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the acceleration during each phase.",
          "steps": [
            "Recall that acceleration is the slope of a v-t graph.",
            "Phase 1 (0–3s): slope = (12−0)/(3−0) = 4.0 m/s².",
            "Phase 2 (3–7s): velocity is constant, so slope = 0 m/s².",
            "Phase 3 (7–9s): slope = (0−12)/(9−7) = −6.0 m/s²."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the total displacement.",
          "steps": [
            "Recall that displacement equals the area under a v-t graph.",
            "Phase 1 is a triangle: ½(3)(12) = 18 m.",
            "Phase 2 is a rectangle: (4)(12) = 48 m.",
            "Phase 3 is a triangle: ½(2)(12) = 12 m.",
            "Sum all three areas: 18 + 48 + 12 = 78 m total displacement."
          ]
        },
        {
          "label": "(c)",
          "ask": "Sketch the a-t graph.",
          "steps": [
            "For 0–3s, draw a horizontal line at a = +4.0 m/s² (matching Phase 1's constant slope).",
            "For 3–7s, draw a horizontal line at a = 0 m/s² (matching Phase 2's zero slope).",
            "For 7–9s, draw a horizontal line at a = −6.0 m/s² (matching Phase 3's constant slope).",
            "Include vertical jumps between each segment, since acceleration changes abruptly at t=3s and t=7s."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall the correct definition of average velocity: total displacement divided by total time, v_avg = Δx/Δt = 78/9 ≈ 8.67 m/s.",
            "Compute the student's proposed alternative: the average of the velocities at t=0 (0 m/s), t=3 (12 m/s), and t=9 (0 m/s) is (0+12+0)/3 = 4.0 m/s.",
            "Compare the two results: 8.67 m/s ≠ 4.0 m/s, so the student's claim is INCORRECT.",
            "Explain why: simply averaging a few sampled velocity values ignores how long the cart spent at each velocity — the correct method (area under the curve, divided by total time) properly weights each phase by its duration, which a simple average of snapshot values does not."
          ]
        }
      ]
    },
    {
      "id": "frq-1-2",
      "source": "Original",
      "title": "Two-Phase Motion of a Sprinter",
      "prompt": "A sprinter starts from rest and accelerates uniformly at 4.0 m/s² for 2.5 s, then continues at the velocity reached for the remainder of a 100 m race. (a) Find the sprinter's velocity at the end of the acceleration phase. (b) Find the distance covered during the acceleration phase. (c) Find the total time required to complete the 100 m race. (d) A coach claims the sprinter's average velocity for the entire race is simply the average of the sprinter's velocity at the start and at the finish. Evaluate this claim, referencing your answers above.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the velocity at the end of the acceleration phase.",
          "steps": [
            "Apply v = v0 + at with v0 = 0: v = 0 + (4.0)(2.5) = 10 m/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the distance covered during acceleration.",
          "steps": [
            "Apply Δx = v0t + ½at² with v0 = 0: Δx = ½(4.0)(2.5)² = ½(4.0)(6.25) = 12.5 m."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the total race time.",
          "steps": [
            "Find the remaining distance after the acceleration phase: 100 − 12.5 = 87.5 m.",
            "This remaining distance is covered at the constant velocity found in part (a), 10 m/s: t = Δx/v = 87.5/10 = 8.75 s.",
            "Add the two phases together: total time = 2.5 s (acceleration phase) + 8.75 s (constant velocity phase) = 11.25 s."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the coach's claim.",
          "steps": [
            "Compute the coach's proposed value: average of the start velocity (0 m/s) and finish velocity (10 m/s) is (0+10)/2 = 5.0 m/s.",
            "Compute the true average velocity using the actual definition: v_avg = total displacement/total time = 100/11.25 ≈ 8.9 m/s.",
            "Compare: 5.0 m/s ≠ 8.9 m/s, so the coach's claim is INCORRECT.",
            "Explain why: the simple start-and-finish average (Δx=½(v0+v)t) is only valid when acceleration is constant across the ENTIRE interval being averaged — here, the sprinter spends most of the race (8.75 of 11.25 s) at constant velocity rather than accelerating, so that shortcut formula doesn't apply to the race as a whole."
          ]
        }
      ]
    },
    {
      "id": "frq-1-3",
      "source": "Original",
      "title": "Comparing Two Projectiles Launched from a Cliff",
      "prompt": "Two balls are launched simultaneously from the edge of a cliff of height h. Ball A is launched horizontally with speed v0. Ball B is simply dropped from rest at the same instant, from the same point. (a) Compare the time each ball takes to reach the ground, and justify. (b) Derive an expression for Ball A's total horizontal distance traveled, in terms of v0, h, and g. (c) A student claims that Ball A, since it moves faster overall, must experience a greater acceleration than Ball B during the flight. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Compare the fall times of Ball A and Ball B.",
          "steps": [
            "Recognize that horizontal and vertical motion are independent — Ball A's horizontal launch speed has no effect on its vertical motion.",
            "Note that both balls start with the same initial VERTICAL velocity: zero (Ball A moves purely horizontally at launch; Ball B starts entirely at rest).",
            "Since both balls fall the same height h under the same acceleration g, starting from the same vertical velocity, they take exactly the SAME amount of time to reach the ground."
          ]
        },
        {
          "label": "(b)",
          "ask": "Derive Ball A's horizontal distance.",
          "steps": [
            "First find the time of flight using the vertical motion: h = ½gt², solving for t gives t = √(2h/g).",
            "Apply the horizontal motion, which is entirely independent and at constant velocity: Δx = v0·t.",
            "Substitute the time found above: Δx = v0·√(2h/g)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim about acceleration.",
          "steps": [
            "Recall that acceleration due to gravity, g, acts identically on every object in free fall, regardless of horizontal motion, mass, or overall speed.",
            "Note that Ball A's greater overall (resultant) speed comes entirely from its horizontal velocity component, which never changes and has nothing to do with acceleration at all.",
            "Conclude the student's claim is INCORRECT: both balls experience the exact same vertical acceleration, g, throughout the flight — overall speed and acceleration are separate quantities, and a faster overall speed doesn't imply a larger acceleration."
          ]
        }
      ]
    }
  ],
  "2": [
    {
      "id": "frq-2-1",
      "source": "Original",
      "title": "An Atwood Machine with Unequal Masses",
      "prompt": "Two blocks, mass m1 = 8.0 kg and m2 = 3.0 kg, hang from opposite ends of a light string over a frictionless, massless pulley. The system is released from rest. (a) Draw a free-body diagram for each block. (b) Derive an expression for the system's acceleration in terms of m1, m2, and g, then calculate its numerical value. (c) Calculate the tension in the string. (d) A student claims the tension must equal the average of the two weights, (m1g+m2g)/2. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw free-body diagrams for each block.",
          "steps": [
            "For m1 (the heavier block, which will accelerate downward): draw two forces — gravity m1g pointing down, and tension T pointing up, with the down arrow drawn longer since m1 accelerates downward.",
            "For m2 (the lighter block, which will accelerate upward): draw two forces — gravity m2g pointing down, and tension T pointing up, with the up arrow (tension) drawn longer since m2 accelerates upward.",
            "Note that the tension arrows on both diagrams should be drawn the same length as each other, since it's the same string and the pulley is ideal (frictionless, massless)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Derive and calculate the system's acceleration.",
          "steps": [
            "Apply Newton's Second Law to m1, taking downward as positive for this block (since it falls): m1g − T = m1a.",
            "Apply Newton's Second Law to m2, taking upward as positive for this block (since it rises): T − m2g = m2a.",
            "Add the two equations together, which eliminates T: m1g − m2g = m1a + m2a, so a = g(m1−m2)/(m1+m2).",
            "Substitute the given values: a = 9.8(8.0−3.0)/(8.0+3.0) = 9.8(5.0)/11 ≈ 4.45 m/s²."
          ]
        },
        {
          "label": "(c)",
          "ask": "Calculate the tension.",
          "steps": [
            "Substitute the acceleration found above into either individual equation — using the m2 equation: T = m2(g+a) = 3.0(9.8+4.45) = 3.0(14.25) ≈ 42.8 N.",
            "Check using the m1 equation as a consistency check: T = m1(g−a) = 8.0(9.8−4.45) = 8.0(5.35) ≈ 42.8 N — matches, confirming the calculation."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim about tension.",
          "steps": [
            "Compute the student's proposed value: (m1g+m2g)/2 = (78.4+29.4)/2 = 107.8/2 = 53.9 N.",
            "Compare to the actual calculated tension: 42.8 N ≠ 53.9 N, so the student's claim is INCORRECT.",
            "Explain why: the simple average of the two weights would only be the correct tension if the system were NOT accelerating (i.e., if the two masses were equal, giving a=0) — since this system does accelerate, the tension has to be somewhere between the two individual weights, but it isn't necessarily their exact average once acceleration enters the picture."
          ]
        }
      ]
    },
    {
      "id": "frq-2-2",
      "source": "Original",
      "title": "A Block Pulled Across a Rough Floor",
      "prompt": "A 12 kg block sits on a horizontal floor with coefficient of kinetic friction μ_k = 0.25. A rope pulls the block at an angle of 30° above horizontal with tension 50 N (sin30°=0.50, cos30°≈0.87). (a) Draw a free-body diagram of the block. (b) Find the normal force on the block. (c) Find the block's acceleration. (d) A student claims that increasing the pull angle (while keeping tension at 50 N) would always increase the block's acceleration, since more force would be applied. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw the free-body diagram.",
          "steps": [
            "Draw four forces on the block: gravity (mg, straight down), normal force (F_N, straight up), tension (T, at 30° above horizontal), and kinetic friction (opposing the block's motion, horizontal).",
            "Note that the tension should be drawn as a single arrow at the stated angle, which will need to be broken into horizontal and vertical components for the calculation."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the normal force.",
          "steps": [
            "Recognize that the vertical component of tension (T·sin30°) pulls upward, partially supporting the block's weight — so the floor needs to supply less normal force than mg alone.",
            "Sum vertical forces (net = 0, since the block doesn't accelerate vertically): F_N + T·sin30° − mg = 0.",
            "Solve: F_N = mg − T·sin30° = (12)(9.8) − 50(0.50) = 117.6 − 25 = 92.6 N."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the block's acceleration.",
          "steps": [
            "Find kinetic friction using the normal force just found: f_k = μ_k·F_N = 0.25(92.6) ≈ 23.15 N.",
            "Find the horizontal component of tension: T·cos30° = 50(0.87) = 43.5 N.",
            "Sum horizontal forces: F_net = T·cos30° − f_k = 43.5 − 23.15 ≈ 20.35 N.",
            "Apply Newton's Second Law: a = F_net/m = 20.35/12 ≈ 1.7 m/s²."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim about increasing the angle.",
          "steps": [
            "Recognize the competing effects of increasing angle at fixed tension: the horizontal component (T·cosθ) DECREASES as θ increases, providing less forward pull, while the vertical component (T·sinθ) INCREASES, reducing the normal force and therefore reducing friction.",
            "Note these two effects push acceleration in OPPOSITE directions — less forward pull tends to decrease acceleration, while less friction tends to increase it — so the net effect depends on the specific numbers, not a simple 'more force always helps' assumption.",
            "Conclude the student's claim is INCORRECT as a blanket statement: increasing the angle does not always increase acceleration, since at large enough angles, the loss of horizontal pull can outweigh the reduction in friction, and there is even a well-defined angle that maximizes acceleration rather than acceleration simply increasing without limit."
          ]
        }
      ]
    },
    {
      "id": "frq-2-3",
      "source": "Original",
      "title": "Comparing Force Pairs and Net Force",
      "prompt": "A 1500 kg car pushes against a stalled 1000 kg car, both initially at rest, accelerating the pair together at 1.2 m/s² across a frictionless surface (idealized for this problem). (a) Find the net force on the combined two-car system. (b) Find the force the pushing car exerts on the stalled car. (c) A student claims that since the pushing car is more massive, it must exert a larger force on the stalled car than the stalled car exerts back on it. Evaluate this claim, and reconcile it with your answer to part (b).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the net force on the combined system.",
          "steps": [
            "Treat both cars together as a single system with total mass 1500+1000=2500 kg.",
            "Apply Newton's Second Law to the whole system: F_net = m_total × a = 2500 × 1.2 = 3000 N.",
            "This net force is the internal engine/driving force of the pushing car, since the surface is frictionless and there's no other external horizontal force on the two-car system."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the force the pushing car exerts on the stalled car.",
          "steps": [
            "Isolate just the stalled (1000 kg) car as its own system — the only horizontal force acting on it is the push from the other car.",
            "Apply Newton's Second Law to just this car, using the same acceleration (since they move together): F = m × a = 1000 × 1.2 = 1200 N.",
            "This 1200 N is the force the pushing car exerts on the stalled car."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim and reconcile with part (b).",
          "steps": [
            "Recall Newton's Third Law: whatever force the pushing car exerts on the stalled car, the stalled car exerts an equal and opposite force back on the pushing car — regardless of either car's mass.",
            "State the reconciliation directly: the force found in part (b), 1200 N, is exerted BY the pushing car ON the stalled car; by Newton's Third Law, the stalled car pushes back on the pushing car with that exact same 1200 N, just in the opposite direction.",
            "Conclude the student's claim is INCORRECT: mass has no bearing on the magnitude of a Third Law force pair — only on how much each car accelerates in response to that shared force (a = F/m), which is precisely why the lighter stalled car and the heavier pushing car end up sharing the same acceleration only because they're rigidly in contact, not because the forces on them differ."
          ]
        }
      ]
    }
  ],
  "3": [
    {
      "id": "frq-3-1",
      "source": "Original",
      "title": "A Block Launched by a Spring Up a Rough Ramp",
      "prompt": "A 2.0 kg block is pressed against a spring (k = 400 N/m), compressing it 0.50 m, on a horizontal frictionless section of track. The block is released, leaves the spring, and then travels up a ramp with friction (μ_k = 0.25) that rises to a height of 1.5 m. (a) Find the block's speed just after leaving the spring. (b) Find the block's kinetic energy at the top of the 1.5 m ramp, accounting for both the height gained and friction, given that the ramp's incline is 30° (so the distance traveled along the ramp is 3.0 m) (cos30°≈0.87). (c) A student claims that since energy is always conserved, the block's kinetic energy at the top must equal its kinetic energy right after leaving the spring. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the block's speed just after leaving the spring.",
          "steps": [
            "Recognize that on the frictionless section, all elastic PE converts to KE: ½kx² = ½mv².",
            "Substitute known values: ½(400)(0.50)² = ½(2.0)v², so 50.0 = 1.0v².",
            "Solve: v² = 50.0, so v = √50.0 ≈ 7.07 m/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the block's kinetic energy at the top of the ramp.",
          "steps": [
            "Find the block's kinetic energy right after leaving the spring: KE = ½kx² = 50.0 J (from part a, before taking the square root).",
            "Find the normal force on the ramp: F_N = mg·cos30° = (2.0)(9.8)(0.87) ≈ 17.05 N.",
            "Find the friction force: f_k = μ_k·F_N = 0.25(17.05) ≈ 4.26 N.",
            "Find the work done by friction over the 3.0 m ramp distance: W_friction = −f_k × d = −(4.26)(3.0) ≈ −12.8 J.",
            "Find the height gained and the resulting PE increase: PE gained = mgh = (2.0)(9.8)(1.5) = 29.4 J.",
            "Apply the energy balance: KE_top = KE_bottom − ΔPE − |W_friction| = 50.0 − 29.4 − 12.8 = 7.8 J.",
            "Since this result is positive, the block does make it to the top of the ramp, arriving with 7.8 J of kinetic energy remaining."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall the actual condition for conservation of MECHANICAL energy specifically: it only holds when no non-conservative force does work on the system.",
            "Note that friction acts on the ramp portion of this problem, doing negative work and removing mechanical energy from the block.",
            "Conclude the student's claim is INCORRECT: while TOTAL energy (including heat generated by friction) is indeed always conserved, mechanical energy (KE+PE) specifically is NOT conserved here, since friction converts some of it into heat — this is exactly why the block's kinetic energy at the top (7.8 J) is less than its kinetic energy right after leaving the spring (50.0 J), even though both PE gained and heat lost account for the full difference."
          ]
        }
      ]
    },
    {
      "id": "frq-3-2",
      "source": "Original",
      "title": "Comparing Work, Energy, and Power for Two Ramps",
      "prompt": "Two frictionless ramps, Ramp A and Ramp B, both rise to the same height of 4.0 m, but Ramp A is twice as long as Ramp B (meaning Ramp A has a shallower incline). Identical 3.0 kg blocks are released from rest at the top of each ramp. (a) Compare the blocks' speeds at the bottom of each ramp, and justify using energy reasoning. (b) Compare the total work done by gravity on each block over the full trip down its ramp. (c) A student claims that since Ramp A is longer, gravity must do more total work on the block sliding down Ramp A. Evaluate this claim. (d) Compare the average power delivered by gravity to each block, given that the block on the longer Ramp A takes more time to reach the bottom than the block on Ramp B.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Compare the final speeds and justify.",
          "steps": [
            "Recall that for a frictionless ramp, final speed depends only on the height dropped: v = √(2gh), completely independent of the ramp's length or angle.",
            "Since both ramps have the identical height of 4.0 m, both blocks reach the bottom with the exact same speed: v = √(2×9.8×4.0) = √78.4 ≈ 8.85 m/s.",
            "Justify: mechanical energy is conserved on both frictionless ramps, and since PE = mgh depends only on height (not path), both blocks convert the identical amount of potential energy into kinetic energy, yielding identical final speeds despite the different ramp lengths."
          ]
        },
        {
          "label": "(b)",
          "ask": "Compare the total work done by gravity on each block.",
          "steps": [
            "Recall that work done by gravity over a vertical drop depends only on the mass and the height dropped: W_gravity = mgh, regardless of the path's length or shape.",
            "Since both blocks have the same mass (3.0 kg) and drop the same height (4.0 m), gravity does the exact same amount of work on both: W = (3.0)(9.8)(4.0) = 117.6 J for each."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that gravity's work depends only on the vertical component of displacement (the height dropped), not on the total path length traveled.",
            "Note that Ramp A being longer only means the block travels farther HORIZONTALLY per unit of height dropped — it doesn't change the net vertical drop, which is the same 4.0 m for both ramps.",
            "Conclude the student's claim is INCORRECT: gravity does the same total work (117.6 J) on both blocks, since work by gravity depends only on height dropped, not on the ramp's length."
          ]
        },
        {
          "label": "(d)",
          "ask": "Compare the average power delivered by gravity to each block.",
          "steps": [
            "Recall that average power is total work divided by total time: P_avg = W/t.",
            "Note that both blocks receive the same total work from gravity (117.6 J, from part b), but the block on the longer Ramp A takes MORE time to reach the bottom.",
            "Conclude that since P_avg = W/t with equal W but greater t for Ramp A, the average power delivered by gravity to the Ramp A block is LOWER than the average power delivered to the Ramp B block — the same total energy transfer, spread out over more time, means a lower rate of transfer."
          ]
        }
      ]
    },
    {
      "id": "frq-3-3",
      "source": "Original",
      "title": "A Pendulum Released from Rest",
      "prompt": "A 1.5 kg pendulum bob is pulled to the side so it rises 0.80 m above its lowest point, then released from rest, swinging freely with negligible air resistance. (a) Find the bob's speed at the lowest point of its swing. (b) Find the bob's kinetic energy and potential energy when it has risen back to a height of 0.30 m on the opposite side of the swing (using the lowest point as the PE reference). (c) A student claims that since the bob started and will eventually return to 0.80 m on the original side, its speed everywhere along the swing at a given height must be the same regardless of which side of the swing it's on. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the bob's speed at the lowest point.",
          "steps": [
            "Apply conservation of mechanical energy between the release point and the lowest point: mgh = ½mv² (mass cancels).",
            "Solve for v: v = √(2gh) = √(2×9.8×0.80) = √15.68 ≈ 3.96 m/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the KE and PE at height 0.30 m.",
          "steps": [
            "Find PE at this height directly: PE = mgh = (1.5)(9.8)(0.30) = 4.41 J.",
            "Find total mechanical energy from the initial release point (which is conserved throughout, since air resistance is negligible): E_total = mgh_initial = (1.5)(9.8)(0.80) = 11.76 J.",
            "Find KE at the 0.30 m height using conservation: KE = E_total − PE = 11.76 − 4.41 = 7.35 J."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that mechanical energy conservation relates total energy (KE+PE) to a FIXED total value throughout the swing — and since PE depends only on height, not on which side of the swing the bob is on, KE at a given height is also the same on both sides.",
            "Confirm this using the symmetry of the situation: since there's no friction or air resistance to remove energy, the bob's total mechanical energy never changes, and PE at 0.30 m is identical whether measured on the left or right side of the swing (same height, same reference point).",
            "Conclude the student's claim is CORRECT: at any given height, the bob's kinetic energy — and therefore its speed — is the same regardless of which side of the swing it's on, precisely because energy conservation depends only on height, not on horizontal position or direction of motion."
          ]
        }
      ]
    }
  ],
  "4": [
    {
      "id": "frq-4-1",
      "source": "Original",
      "title": "A Ballistic Pendulum",
      "prompt": "A 0.020 kg bullet is fired horizontally into a stationary 4.0 kg wooden block suspended by strings (a ballistic pendulum), embedding itself in the block. The block-and-bullet system then swings upward, rising 0.10 m above its starting height. (a) Find the combined velocity of the block and bullet immediately after impact, using energy conservation on the swing. (b) Find the bullet's original speed before impact, using momentum conservation. (c) Find the kinetic energy lost during the bullet's collision with the block. (d) A student claims that since momentum is conserved in this collision, kinetic energy must be conserved too. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the combined velocity right after impact.",
          "steps": [
            "Recognize that once the bullet is embedded, the swing itself is governed by energy conservation (no friction assumed), converting the combined system's KE into PE as it rises.",
            "Apply conservation of mechanical energy for the swing: ½(m_block+m_bullet)v² = (m_block+m_bullet)gh, so v = √(2gh) (mass cancels).",
            "Solve: v = √(2×9.8×0.10) = √1.96 = 1.4 m/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the bullet's original speed.",
          "steps": [
            "Apply conservation of momentum to the collision itself (bullet embedding in block): m_bullet·v_bullet = (m_bullet+m_block)·v_combined.",
            "Substitute known values: (0.020)v_bullet = (4.02)(1.4).",
            "Solve: v_bullet = (4.02)(1.4)/0.020 = 5.628/0.020 ≈ 281 m/s."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the kinetic energy lost in the collision.",
          "steps": [
            "Find KE just before the collision (bullet only, block still at rest): KE_before = ½(0.020)(281)² ≈ 790 J.",
            "Find KE just after the collision (combined mass moving at 1.4 m/s): KE_after = ½(4.02)(1.4)² ≈ 3.9 J.",
            "Find the difference: KE_lost = 790 − 3.9 ≈ 786 J — the vast majority of the bullet's original kinetic energy is lost to heat and deformation during the embedding process."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that momentum conservation and kinetic energy conservation are two separate, independent conditions — momentum is conserved in EVERY isolated collision, while kinetic energy conservation is the specific, additional hallmark of an elastic collision only.",
            "Note that part (c) explicitly found a large kinetic energy loss (≈786 J) in this collision, even though momentum was exactly conserved throughout (that's literally how the collision was solved in part b).",
            "Conclude the student's claim is INCORRECT: this is a clear numerical demonstration that momentum conservation does NOT imply kinetic energy conservation — a bullet embedding in a block is a textbook example of a perfectly inelastic (not elastic) collision."
          ]
        }
      ]
    },
    {
      "id": "frq-4-2",
      "source": "Original",
      "title": "Two Carts Colliding, Elastic vs. Inelastic",
      "prompt": "A 2.0 kg cart moving at 6.0 m/s approaches a stationary 2.0 kg cart on a frictionless track. Two separate scenarios are considered: Scenario 1, where the carts collide elastically, and Scenario 2, where the carts collide and stick together. (a) Find the final velocity (or velocities) of the carts in Scenario 1. (b) Find the final velocity of the carts in Scenario 2. (c) Compare the total kinetic energy after the collision in each scenario. (d) A student claims that since both scenarios start with identical carts and identical initial conditions, the final momentum of the system must be different in each case, since the collisions are physically different. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the final velocities in the elastic collision.",
          "steps": [
            "Recognize this as the classic equal-mass elastic collision case: the moving cart and stationary cart, having identical mass, will fully exchange velocities.",
            "Apply the result directly: the first (2.0 kg) cart comes to rest at 0 m/s; the second (2.0 kg) cart moves off at the first cart's original velocity, 6.0 m/s.",
            "Verify with momentum: before, p=(2.0)(6.0)=12 kg·m/s; after, p=(2.0)(0)+(2.0)(6.0)=12 kg·m/s — consistent."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the final velocity in the perfectly inelastic collision.",
          "steps": [
            "Apply conservation of momentum with the combined-mass formula: (2.0)(6.0)+(2.0)(0) = (4.0)v_f.",
            "Solve: 12 = 4.0v_f, so v_f = 3.0 m/s for both carts, now moving together."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare total kinetic energy after each scenario.",
          "steps": [
            "Find KE in Scenario 1 (elastic): KE_after = ½(2.0)(0)² + ½(2.0)(6.0)² = 0 + 36 = 36 J — matching the initial KE of ½(2.0)(6.0)² = 36 J exactly, as expected for an elastic collision.",
            "Find KE in Scenario 2 (perfectly inelastic): KE_after = ½(4.0)(3.0)² = 18 J.",
            "Compare: Scenario 1 retains all 36 J of kinetic energy; Scenario 2 retains only 18 J, having lost 18 J to heat, sound, and deformation as the carts stuck together."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim about final momentum.",
          "steps": [
            "Recall that momentum conservation depends only on the system being isolated (no net external force) — it holds regardless of whether the collision itself is elastic or inelastic.",
            "Compute the final momentum in both scenarios directly: Scenario 1: (2.0)(0)+(2.0)(6.0)=12 kg·m/s. Scenario 2: (4.0)(3.0)=12 kg·m/s — identical in both cases.",
            "Conclude the student's claim is INCORRECT: total momentum after the collision is exactly 12 kg·m/s in BOTH scenarios, matching the initial momentum in both cases — it's kinetic energy, not momentum, that differs between an elastic and inelastic outcome starting from the same initial conditions."
          ]
        }
      ]
    },
    {
      "id": "frq-4-3",
      "source": "Original",
      "title": "An Explosion and the Motion of the Center of Mass",
      "prompt": "A 6.0 kg object moves at a constant 4.0 m/s in deep space (no external forces). It suddenly explodes into two fragments: a 2.0 kg fragment and a 4.0 kg fragment. Immediately after the explosion, the 2.0 kg fragment is measured moving at 10 m/s in the same direction as the original motion. (a) Find the velocity of the 4.0 kg fragment immediately after the explosion. (b) Find the velocity of the system's center of mass immediately after the explosion, and compare it to the object's velocity before the explosion. (c) A student claims that since the explosion clearly changed the individual fragments' velocities, it must also have changed the total momentum of the system. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the velocity of the 4.0 kg fragment.",
          "steps": [
            "Find the total momentum before the explosion: p_total = mv = (6.0)(4.0) = 24 kg·m/s.",
            "Apply conservation of momentum to the explosion: p_total,before = p_total,after, so (2.0)(10) + (4.0)v₂ = 24.",
            "Solve: 20 + 4.0v₂ = 24, so 4.0v₂ = 4.0, giving v₂ = 1.0 m/s (same direction as the original motion)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find v_cm after the explosion and compare to the velocity before.",
          "steps": [
            "Compute v_cm after the explosion using both fragments: v_cm = [(2.0)(10)+(4.0)(1.0)]/(6.0) = (20+4.0)/6.0 = 24/6.0 = 4.0 m/s.",
            "Compare to the object's velocity before the explosion: 4.0 m/s — exactly the same.",
            "Explain the match: since the explosion is entirely an internal event (no external force acts on the two-fragment system), it cannot change the system's total momentum or total mass, and therefore cannot change v_cm = p_total/m<sub>total</sub> at all."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that total momentum and individual object velocities are two different things — the explosion clearly redistributes velocity unevenly between the two fragments, but that redistribution doesn't require the SUM (total momentum) to change.",
            "Point to the direct numerical evidence: momentum before the explosion was 24 kg·m/s, and momentum after (computed in part a) was also (2.0)(10)+(4.0)(1.0)=24 kg·m/s — unchanged, despite each individual fragment's velocity being very different from the original object's velocity.",
            "Conclude the student's claim is INCORRECT: internal forces (like an explosion) can dramatically redistribute velocity among the pieces of a system without changing the system's TOTAL momentum at all — this is exactly the distinction between an object's individual motion and a system's collective, conserved momentum."
          ]
        }
      ]
    }
  ],
  "5": [
    {
      "id": "frq-5-1",
      "source": "Original",
      "title": "A Ladder Leaning Against a Wall",
      "prompt": "A 4.0 m uniform ladder, weight 150 N, leans against a frictionless wall, with its base on the ground 1.6 m from the wall (so the ladder makes an angle with the ground; the base is held in place by friction). The ladder's weight acts at its center (2.0 m along its length). (a) Draw a free-body diagram of the ladder, labeling all forces. (b) Using torques about the base of the ladder, find the force the wall exerts on the ladder. (c) Find the force of static friction at the base needed to keep the ladder in equilibrium. (d) A student claims that since the wall is frictionless, the ladder cannot possibly be in static equilibrium. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw the free-body diagram.",
          "steps": [
            "Draw four forces on the ladder: its weight (150 N, straight down, acting at the center — 2.0 m along the ladder), the normal force from the ground (straight up, at the base), the normal force from the wall (horizontal, pointing away from the wall, at the top), and static friction from the ground (horizontal, at the base, preventing the ladder's foot from sliding away from the wall).",
            "Note that since the wall is explicitly frictionless, there is no vertical friction force from the wall — only its horizontal normal force."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the force the wall exerts on the ladder.",
          "steps": [
            "Choose the pivot at the base of the ladder — this eliminates both the ground's normal force and the friction force from the torque equation, since both act at that exact point (zero lever arm).",
            "Set up the geometry: the base is 1.6 m from the wall, and the ladder is 4.0 m long, so the height where it touches the wall is √(4.0²−1.6²) = √(16−2.56) = √13.44 ≈ 3.67 m.",
            "The weight (150 N) acts straight down at the ladder's center, which is horizontally 0.80 m from the base (half of 1.6 m) — so its torque about the base is (150)(0.80) = 120 N·m.",
            "The wall's normal force (F_wall) acts horizontally at the top of the ladder, height 3.67 m above the base — its torque about the base is F_wall × 3.67 (since the force is horizontal and the lever arm relevant to a horizontal force is the vertical height).",
            "Set the torques equal (equilibrium, Στ=0): F_wall(3.67) = 120, so F_wall = 120/3.67 ≈ 32.7 N."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the required static friction force at the base.",
          "steps": [
            "Apply ΣF=0 in the horizontal direction: the only horizontal forces are the wall's normal force (pushing the ladder's top away from the wall) and static friction at the base (which must push back toward the wall to keep the base from sliding out).",
            "Set them equal in magnitude: f_static = F_wall ≈ 32.7 N, directed horizontally toward the wall."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that static equilibrium requires the WALL's contribution specifically to be horizontal only (since it's frictionless) — but this doesn't mean the LADDER as a whole can't achieve overall equilibrium.",
            "Point to the calculation just completed: the ground provides both a vertical normal force (supporting the ladder's weight) AND a horizontal static friction force (balancing the wall's horizontal push) — between the ground's two force components and the wall's single horizontal force, all the conditions for equilibrium (ΣF_x=0, ΣF_y=0, Στ=0) can be satisfied simultaneously.",
            "Conclude the student's claim is INCORRECT: a frictionless wall is perfectly consistent with the ladder being in static equilibrium, AS LONG AS the ground provides sufficient friction — the wall doesn't need to supply any vertical or frictional force itself, since the ground handles that role entirely."
          ]
        }
      ]
    },
    {
      "id": "frq-5-2",
      "source": "Original",
      "title": "A Torque Applied to a Rotating Disk",
      "prompt": "A solid disk (mass 3.0 kg, radius 0.25 m) is free to rotate about a frictionless axis through its center. A constant tangential force of 6.0 N is applied at the disk's outer edge, perpendicular to the radius, starting from rest. (a) Find the disk's moment of inertia. (b) Find the torque produced by the applied force. (c) Find the disk's angular acceleration, and its angular velocity after 4.0 s. (d) A student claims that if the same 6.0 N force were instead applied at a point halfway between the center and the edge (still perpendicular to the radius), the disk would take exactly twice as long to reach the same angular velocity. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the disk's moment of inertia.",
          "steps": [
            "Apply the solid disk formula: I = ½MR² = ½(3.0)(0.25)² = ½(3.0)(0.0625) = 0.09375 kg·m²."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the torque.",
          "steps": [
            "Since the force is applied perpendicular to the radius at the outer edge (r=0.25 m, θ=90°): τ = rFsinθ = (0.25)(6.0)(1) = 1.5 N·m."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the angular acceleration and the angular velocity at t=4.0s.",
          "steps": [
            "Apply τ=Iα: α = τ/I = 1.5/0.09375 = 16 rad/s².",
            "Apply ω=ω0+αt with ω0=0: ω = (16)(4.0) = 64 rad/s."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim about applying the force at the halfway point.",
          "steps": [
            "Find the new torque with the force applied at r=0.125 m (half of 0.25 m) instead: τ_new = (0.125)(6.0)(1) = 0.75 N·m — exactly half the original torque, since torque is directly proportional to r for a fixed perpendicular force.",
            "Find the new angular acceleration: α_new = τ_new/I = 0.75/0.09375 = 8.0 rad/s² — exactly half the original angular acceleration (16 rad/s²), since I hasn't changed.",
            "Find the time needed to reach the same ω=64 rad/s starting from rest: t = ω/α_new = 64/8.0 = 8.0 s — compared to the original 4.0 s, this is indeed exactly DOUBLE.",
            "Conclude the student's claim is CORRECT: halving the lever arm (with force unchanged) halves the torque, which halves the angular acceleration (since I is unchanged), which doubles the time needed to reach the same final angular velocity — each of these proportional relationships chains together consistently."
          ]
        }
      ]
    },
    {
      "id": "frq-5-3",
      "source": "Original",
      "title": "Comparing Moment of Inertia Configurations",
      "prompt": "Two identical point masses, each 2.0 kg, are attached to the ends of a light rod. In Configuration A, the masses sit 0.30 m from the rod's center (on opposite sides), and the rod rotates about its center. In Configuration B, the same two masses are moved to sit 0.60 m from the center. (a) Find the moment of inertia for Configuration A. (b) Find the moment of inertia for Configuration B. (c) A student claims that since the distance in Configuration B is only double that of Configuration A, the moment of inertia should also only double. Evaluate this claim using your answers to parts (a) and (b). (d) If the same torque is applied to both configurations, compare their resulting angular accelerations.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find I for Configuration A.",
          "steps": [
            "Apply I=Σmr² for both masses at r=0.30 m: I_A = 2×(2.0)(0.30)² = 2×(2.0)(0.09) = 2×0.18 = 0.36 kg·m²."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find I for Configuration B.",
          "steps": [
            "Apply I=Σmr² for both masses at r=0.60 m: I_B = 2×(2.0)(0.60)² = 2×(2.0)(0.36) = 2×0.72 = 1.44 kg·m²."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Compare the ratio of the two results directly: I_B/I_A = 1.44/0.36 = 4.0 — the moment of inertia is FOUR times larger in Configuration B, not two times larger.",
            "Explain why, referencing the formula: since each mass's contribution to I is mr², and r² depends on the SQUARE of the distance, doubling r (as done here) quadruples that contribution — not doubles it.",
            "Conclude the student's claim is INCORRECT: doubling the distance from the axis quadruples the moment of inertia, not doubles it, precisely because of the r² dependence in I=Σmr²."
          ]
        },
        {
          "label": "(d)",
          "ask": "Compare the angular accelerations under the same applied torque.",
          "steps": [
            "Apply α=τ/I to both configurations with the same τ: since I_B is 4 times I_A, α_B = τ/I_B = τ/(4×I_A) = (1/4)×(τ/I_A) = (1/4)α_A.",
            "Conclude: Configuration B, with its quadrupled moment of inertia, will have only ONE-FOURTH the angular acceleration of Configuration A for the same applied torque — a direct consequence of the inverse relationship between α and I in τ=Iα."
          ]
        }
      ]
    }
  ],
  "6": [
    {
      "id": "frq-6-1",
      "source": "Original",
      "title": "A Rolling Sphere Compared to a Sliding Block",
      "prompt": "A solid sphere (mass 2.0 kg, radius 0.10 m) and a block of the same mass are released from rest at the top of a 3.0 m high ramp. The block slides down a frictionless section (no rotation at all); the sphere rolls without slipping down a separate, identical-height ramp. (a) Find the block's speed at the bottom. (b) Find the sphere's speed at the bottom, using KE_total=(7/10)mv² for a rolling solid sphere. (c) Find the total kinetic energy of each object at the bottom, and compare them. (d) A student claims that since the sphere is slower, it must have less total kinetic energy than the block at the bottom. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the block's speed at the bottom.",
          "steps": [
            "Apply conservation of energy for the frictionless, non-rotating block: mgh = ½mv² (mass cancels).",
            "Solve: v = √(2gh) = √(2×9.8×3.0) = √58.8 ≈ 7.67 m/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the sphere's speed at the bottom.",
          "steps": [
            "Apply conservation of energy for the rolling sphere, using the total-KE shortcut: mgh = (7/10)mv² (mass cancels).",
            "Solve: v² = 10gh/7 = 10(9.8)(3.0)/7 = 294/7 = 42, so v = √42 ≈ 6.48 m/s."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare the total kinetic energy of each object at the bottom.",
          "steps": [
            "Recall that by conservation of energy, EACH object's total kinetic energy at the bottom must equal its own starting gravitational PE, mgh — since both have the same mass and drop the same height, this value is identical for both: PE = mgh = (2.0)(9.8)(3.0) = 58.8 J.",
            "Confirm numerically using the block: KE_block = ½(2.0)(7.67)² ≈ 58.8 J — matches.",
            "Confirm numerically using the sphere: KE_sphere = (7/10)(2.0)(6.48)² ≈ (0.7)(2.0)(42) = 58.8 J — also matches.",
            "Conclude: both objects arrive with EXACTLY the same total kinetic energy, 58.8 J, despite their different final speeds."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall the distinction from Unit 6.4: total kinetic energy depends only on how much PE was converted (which is identical for both objects here), while final SPEED depends on how that energy gets split between translational and rotational forms.",
            "Point to the direct numerical evidence from part (c): both objects end up with the identical total KE of 58.8 J, even though the sphere is moving slower (6.48 m/s vs. 7.67 m/s).",
            "Conclude the student's claim is INCORRECT: the sphere has the SAME total kinetic energy as the block, not less — its lower speed simply reflects that some of its 58.8 J is tied up in rotational KE rather than translational KE, not that it has less total energy overall."
          ]
        }
      ]
    },
    {
      "id": "frq-6-2",
      "source": "Original",
      "title": "A Rotating Platform and a Jumping Person",
      "prompt": "A circular platform (I=400 kg·m²) rotates freely (frictionless axis) at 2.0 rad/s. A 50 kg person, initially standing still at the very center of the platform (contributing no moment of inertia there), walks outward to the edge, 2.0 m from the center. (a) Find the moment of inertia the person contributes once at the edge (treating them as a point mass). (b) Find the platform's new angular velocity once the person reaches the edge. (c) Find the rotational kinetic energy of the system before and after the person walks outward, and identify whether energy was added to or removed from the system. (d) A student claims that since no external torque acts on the platform-person system, kinetic energy must be conserved throughout this process. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the person's moment of inertia at the edge.",
          "steps": [
            "Treat the person as a point mass at radius r=2.0 m: I_person = mr² = (50)(2.0)² = (50)(4.0) = 200 kg·m²."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the new angular velocity.",
          "steps": [
            "Apply conservation of angular momentum: I_initial·ω_initial = I_final·ω_final.",
            "Since the person starts at the center (r=0, contributing zero I) and ends at the edge (contributing 200 kg·m²): I_initial = 400 kg·m² (platform only); I_final = 400+200 = 600 kg·m².",
            "Solve: (400)(2.0) = (600)ω_final, so ω_final = 800/600 ≈ 1.33 rad/s."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare rotational kinetic energy before and after.",
          "steps": [
            "Find KE before (person at center contributes zero, only the platform is spinning): KE_before = ½(400)(2.0)² = ½(400)(4.0) = 800 J.",
            "Find KE after: KE_after = ½(600)(4/3)² = ½(600)(16/9) = 4800/9 ≈ 533 J.",
            "Compare: KE decreased from 800 J to about 533 J — energy was REMOVED from the rotational system (about 267 J), as the person walking outward against the platform's rotation does negative work on the system (the platform has to do work on the person to keep them moving in a circle at increasing radius, which comes at the cost of the platform's own rotational KE)."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that angular momentum conservation and kinetic energy conservation are separate, independent laws — zero external torque guarantees the former but says nothing about the latter.",
            "Point to the direct numerical evidence from part (c): kinetic energy dropped from 800 J to about 533 J, even though angular momentum was exactly conserved throughout (that's literally how ω_final was calculated).",
            "Conclude the student's claim is INCORRECT: angular momentum conservation does not imply kinetic energy conservation — this scenario is actually the mirror image of the skater pulling her arms IN (which increases KE); here, mass is moving OUTWARD, which decreases the system's rotational kinetic energy instead."
          ]
        }
      ]
    },
    {
      "id": "frq-6-3",
      "source": "Original",
      "title": "Racing a Sphere, Disk, and Hoop Down a Ramp",
      "prompt": "A solid sphere, a solid disk, and a hoop — all with equal mass M and equal radius R — are released from rest at the top of the same ramp of height h and roll without slipping to the bottom. (a) Using I=kMR² for a general shape, derive an expression for the speed at the bottom in terms of g, h, and k. (b) Using k=2/5 (sphere), k=1/2 (disk), and k=1 (hoop), rank the three objects' final speeds from fastest to slowest. (c) A student claims that since all three objects have the same mass and start from the same height, they must also have the same acceleration down the ramp at every point, not just the same final energy. Evaluate this claim conceptually.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Derive the general speed expression.",
          "steps": [
            "Apply conservation of energy: mgh = ½mv² + ½Iω², with I=kMR² and, for rolling without slipping, ω=v/R.",
            "Substitute: mgh = ½mv² + ½(kMR²)(v/R)² = ½mv² + ½kMv² = ½Mv²(1+k).",
            "The mass M cancels from both sides: gh = ½v²(1+k).",
            "Solve for v: v² = 2gh/(1+k), so v = √(2gh/(1+k))."
          ]
        },
        {
          "label": "(b)",
          "ask": "Rank the three objects' final speeds.",
          "steps": [
            "Apply the derived formula: since v = √(2gh/(1+k)), a SMALLER k produces a LARGER final speed (smaller denominator).",
            "Order the k values from smallest to largest: sphere (k=2/5=0.4) < disk (k=1/2=0.5) < hoop (k=1).",
            "Since smaller k means faster: the sphere is fastest, followed by the disk, with the hoop slowest — v_sphere > v_disk > v_hoop."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim about acceleration.",
          "steps": [
            "Recall that final energy (and therefore final speed) being determined only by height is a statement about the START and END states — it says nothing directly about what happens at every point IN BETWEEN.",
            "Recall from Unit 5's stretch discussion that objects with different moments of inertia have different accelerations down a ramp — specifically, a smaller k (like the sphere) results in a larger fraction of gravity's effect going toward linear acceleration rather than angular acceleration, giving it a genuinely larger acceleration at every point along the ramp, not just a different final speed.",
            "Conclude the student's claim is INCORRECT: even though all three objects share the same total energy conversion by the bottom (governed only by mgh), they do NOT share the same acceleration at each point along the ramp — the sphere consistently accelerates faster than the disk, which accelerates faster than the hoop, which is exactly why the sphere pulls ahead and finishes with the highest speed rather than all three arriving together."
          ]
        }
      ]
    }
  ],
  "7": [
    {
      "id": "frq-7-1",
      "source": "Original",
      "title": "Comparing Two Spring-Mass Systems",
      "prompt": "Spring System A has mass 2.0 kg and spring constant 200 N/m. Spring System B has mass 8.0 kg and the same spring constant, 200 N/m. Both are pulled to an amplitude of 0.15 m and released from rest at the same instant. (a) Find the period of each system. (b) Find the total mechanical energy of each system. (c) Find the maximum speed of each system. (d) A student claims that since System B has more total energy (having the same amplitude and spring constant, but not yet analyzed for energy), it must also have a greater maximum speed than System A. Evaluate this claim using your answers above.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the period of each system.",
          "steps": [
            "Apply T=2π√(m/k) to System A: T_A = 2π√(2.0/200) = 2π√0.01 = 2π(0.1) ≈ 0.63 s.",
            "Apply the same formula to System B: T_B = 2π√(8.0/200) = 2π√0.04 = 2π(0.2) ≈ 1.26 s.",
            "Note System B, with four times the mass, has exactly twice the period (√4=2) — consistent with the square-root relationship between T and m."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the total mechanical energy of each system.",
          "steps": [
            "Apply E=½kA² to both systems — notice this formula involves only k and A, NOT mass at all.",
            "Since both systems share the same k=200 N/m and A=0.15 m: E_A = E_B = ½(200)(0.15)² = ½(200)(0.0225) = 2.25 J for both.",
            "Recognize this confirms that total energy is identical for both systems, since it depends only on spring stiffness and amplitude — not mass."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the maximum speed of each system.",
          "steps": [
            "Apply E=½mv_max² to System A: 2.25 = ½(2.0)v_max², so v_max² = 2.25, giving v_max ≈ 1.5 m/s.",
            "Apply the same to System B: 2.25 = ½(8.0)v_max², so v_max² = 0.5625, giving v_max ≈ 0.75 m/s.",
            "Note that System B, despite having identical total energy to System A, has HALF the maximum speed, since its greater mass requires less speed to carry the same kinetic energy."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall from part (b) that the two systems actually have EQUAL total energy (2.25 J each), not different energy as the student's premise assumed — since E=½kA² depends only on k and A, which are identical for both systems.",
            "Point to the direct calculation in part (c): with equal total energy, System B (heavier) actually has a SMALLER maximum speed than System A, not a larger one.",
            "Conclude the student's claim is INCORRECT on two counts: the premise (that B has more energy) is false, and even setting that aside, more mass at the same energy level means LESS speed, not more — a heavier mass needs less speed to carry the same kinetic energy."
          ]
        }
      ]
    },
    {
      "id": "frq-7-2",
      "source": "Original",
      "title": "A Pendulum Experiment to Measure g",
      "prompt": "A student wants to experimentally determine the local value of g using a simple pendulum, a stopwatch, and a meter stick. (a) Describe a procedure for collecting the necessary data. (b) Describe how the data should be analyzed graphically to determine g, including what should be plotted to produce a straight line. (c) In a trial, the student measures pendulums of five different lengths and their corresponding periods: (0.20m, 0.90s), (0.40m, 1.27s), (0.60m, 1.55s), (0.80m, 1.80s), (1.00m, 2.01s). Determine what quantities to plot, and calculate g from the resulting best-fit line's slope.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe the data collection procedure.",
          "steps": [
            "Set up a pendulum of a known length L (measured with the meter stick, from the pivot to the center of the bob), and displace it through a small angle (well under 15°) to stay within the valid small-angle regime.",
            "Time multiple full oscillations (e.g., 10 full swings) rather than just one, and divide by the number of oscillations to find a more precise period, reducing the relative impact of human reaction-time error in starting/stopping the stopwatch.",
            "Repeat this process for several different pendulum lengths, keeping the amplitude small and consistent across trials."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the graphical analysis.",
          "steps": [
            "Recognize that T=2π√(L/g) is not linear in L directly — but squaring both sides gives T²=(4π²/g)L, which IS linear in L.",
            "Plot T² (vertical axis) against L (horizontal axis); this should produce a straight line through the origin with slope equal to 4π²/g.",
            "Extract g from the measured slope: g = 4π²/slope."
          ]
        },
        {
          "label": "(c)",
          "ask": "Determine g from the given data.",
          "steps": [
            "Compute T² for each data point: (0.20, 0.81), (0.40, 1.61), (0.60, 2.40), (0.80, 3.24), (1.00, 4.04).",
            "Plot T² vs. L and find the best-fit slope — the data is quite linear, with a slope of approximately 4.04 s²/m (computed from the overall trend, e.g., using the first and last points: (4.04−0.81)/(1.00−0.20) = 3.23/0.80 ≈ 4.04 s²/m).",
            "Solve for g: g = 4π²/slope = 4π²/4.04 ≈ 39.48/4.04 ≈ 9.77 m/s² — close to the accepted value of 9.8 m/s², confirming the method's validity."
          ]
        }
      ]
    },
    {
      "id": "frq-7-3",
      "source": "Original",
      "title": "A Mass Dropped Onto a Spring",
      "prompt": "A 1.5 kg block is attached to the top of a vertical spring (k=600 N/m), compressing it slightly at equilibrium. The block is then pushed down an additional 0.10 m from that equilibrium position and released from rest, undergoing SHM. (a) Find the angular frequency of the resulting oscillation. (b) Find the period of oscillation. (c) Find the maximum speed of the block during its motion. (d) A student claims that because the block started below the spring's natural (uncompressed) length, the amplitude of its SHM must be measured from the spring's natural length, not from the new equilibrium position. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the angular frequency.",
          "steps": [
            "Apply ω=√(k/m) directly, since angular frequency for a spring-mass system depends only on k and m, regardless of orientation or where equilibrium happens to sit: ω = √(600/1.5) = √400 = 20 rad/s."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the period.",
          "steps": [
            "Apply T=2π/ω = 2π/20 ≈ 0.314 s.",
            "(Equivalently, using T=2π√(m/k) = 2π√(1.5/600) = 2π√0.0025 = 2π(0.05) ≈ 0.314 s — consistent.)"
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the maximum speed.",
          "steps": [
            "Recognize that the block was pushed 0.10 m from its EQUILIBRIUM position (where the spring already supports its weight) and released from rest — so the amplitude of the resulting SHM is A=0.10 m, measured from that equilibrium point.",
            "Apply v_max=Aω = (0.10)(20) = 2.0 m/s."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim about where amplitude should be measured from.",
          "steps": [
            "Recall the key idea from Section 7.2: gravity shifts WHERE the new equilibrium position sits for a vertical spring, but oscillation — including the definition of amplitude — always happens symmetrically AROUND that new equilibrium point, not around the spring's original natural length.",
            "Explain the physical reasoning: at the true equilibrium position (with the block resting on the spring), the net force is already zero (spring force balances gravity) — this is the genuine center of the oscillation, the point the block would return to and stay at if given zero additional displacement.",
            "Conclude the student's claim is INCORRECT: amplitude in this problem is correctly measured as the 0.10 m displacement from the new (gravity-shifted) equilibrium position, exactly as used in parts (a)–(c) — not from the spring's original, unloaded natural length, which isn't the center of this particular oscillation at all."
          ]
        }
      ]
    }
  ],
  "8": [
    {
      "id": "frq-8-1",
      "source": "Original",
      "title": "A Floating Wooden Block and an Added Weight",
      "prompt": "A wooden block (density 600 kg/m³, volume 0.020 m³) floats in water (density 1000 kg/m³). (a) Find the mass of the block. (b) Find the volume of the block submerged while floating freely. (c) A 3.0 kg weight is now placed on top of the floating block. Find the new submerged volume, assuming the block does not fully submerge. (d) A student claims that adding the weight must double the submerged volume, since it roughly doubles the downward force the water needs to support. Evaluate this claim using your answers above.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the mass of the block.",
          "steps": [
            "Apply the density definition: m = ρV = (600)(0.020) = 12 kg."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the submerged volume while floating freely.",
          "steps": [
            "Apply the floating condition: buoyant force equals weight, ρ_water·V_submerged·g = ρ_block·V_total·g (the g's cancel).",
            "Solve: V_submerged = (ρ_block/ρ_water)·V_total = (600/1000)(0.020) = 0.012 m³."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the new submerged volume with the added weight.",
          "steps": [
            "Set up the new equilibrium condition: buoyant force must now support BOTH the block's weight and the added weight: ρ_water·V_submerged,new·g = (m_block+m_added)g.",
            "The g's cancel: V_submerged,new = (m_block+m_added)/ρ_water = (12+3.0)/1000 = 15/1000 = 0.015 m³.",
            "Check this is physically valid: 0.015 m³ is less than the block's total volume (0.020 m³), confirming the block does not fully submerge, consistent with the problem's assumption."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Compute the actual ratio: V_new/V_original = 0.015/0.012 = 1.25 — a 25% increase, not a doubling.",
            "Explain why the naive 'downward force roughly doubles' reasoning fails: the added weight (3.0 kg, weight ≈29.4 N) is being compared to the ORIGINAL buoyant force need (12 kg's worth, ≈117.6 N) — but 3.0 kg is much smaller than 12 kg, so the total required support increases by a comparatively modest fraction (15/12 = 1.25), not by a factor of 2.",
            "Conclude the student's claim is INCORRECT: the submerged volume increases by only 25%, not 100% — the mistake was assuming the added weight was comparable in size to the block's own weight, when it's actually only one-quarter of it."
          ]
        }
      ]
    },
    {
      "id": "frq-8-2",
      "source": "Original",
      "title": "A Venturi-Style Pipe Experiment",
      "prompt": "A student has a horizontal pipe that narrows from a wide section (area 0.040 m²) to a narrow section (area 0.010 m²), with pressure gauges at each section, a water source, and a stopwatch. Water (ρ=1000 kg/m³) flows through the pipe. (a) Describe a procedure to experimentally verify the continuity equation using the available equipment. (b) In a trial, the wide section shows a speed of 1.5 m/s. Find the speed in the narrow section, and the volume flow rate through the pipe. (c) The wide section shows a pressure of 1.80×10⁵ Pa. Find the pressure in the narrow section using Bernoulli's equation. (d) A student claims that since the pipe is horizontal, the pressure should be the same in both sections. Evaluate this claim.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe an experimental procedure.",
          "steps": [
            "Measure the fluid speed at both the wide and narrow sections — for instance, by timing how long it takes a known volume of water to pass a marked point, or using a flow-speed sensor if available at each gauge location.",
            "Record the corresponding pressure readings from the gauges at each section simultaneously.",
            "Compute the volume flow rate at each section separately (Q=Av) and compare — the continuity equation predicts these two values should match, since no water is added or removed between the two sections.",
            "Repeat across multiple flow rates (adjusting the water source) to confirm the relationship holds consistently, not just for one specific trial."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the narrow-section speed and the volume flow rate.",
          "steps": [
            "Apply the continuity equation: A1v1=A2v2, so (0.040)(1.5)=(0.010)v2, giving v2 = 0.060/0.010 = 6.0 m/s.",
            "Compute the volume flow rate (should be identical at both sections): Q = A1v1 = (0.040)(1.5) = 0.060 m³/s."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the pressure in the narrow section.",
          "steps": [
            "Since the pipe is horizontal, the height terms in Bernoulli's equation cancel: P1+½ρv1² = P2+½ρv2².",
            "Solve for P2: P2 = P1+½ρ(v1²−v2²) = 1.80×10⁵+½(1000)(1.5²−6.0²) = 1.80×10⁵+½(1000)(2.25−36) = 1.80×10⁵+½(1000)(−33.75).",
            "Compute: ½(1000)(−33.75) = −16,875. So P2 = 1.80×10⁵−16,875 = 163,125 Pa ≈ 1.63×10⁵ Pa."
          ]
        },
        {
          "label": "(d)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall that Bernoulli's equation includes THREE terms — pressure, kinetic energy (½ρv²), and gravitational potential energy (ρgh) — and while the pipe being horizontal does cancel the ρgh terms, it says nothing about the ½ρv² terms.",
            "Point to the direct calculation in part (c): the fluid speeds up significantly in the narrow section (1.5→6.0 m/s), and this speed increase requires a corresponding pressure DECREASE (from 1.80×10⁵ Pa to about 1.63×10⁵ Pa) to keep the total energy balanced.",
            "Conclude the student's claim is INCORRECT: a horizontal pipe only guarantees equal height, not equal speed — since the pipe narrows and the fluid speeds up, pressure must decrease in the narrow section, exactly the Bernoulli effect."
          ]
        }
      ]
    },
    {
      "id": "frq-8-3",
      "source": "Original",
      "title": "Comparing Two Submerged Objects",
      "prompt": "Object A (volume 0.0080 m³, mass 6.0 kg) and Object B (volume 0.0080 m³, mass 12 kg) are both fully submerged and held underwater (ρ=1000 kg/m³) by a string attached to the bottom of a tank. (a) Find the buoyant force on each object. (b) Find the tension in the string holding each object down, or determine if a string is even needed. (c) A student claims that since Object B has more mass, it must experience a greater buoyant force than Object A. Evaluate this claim using your answers above.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the buoyant force on each object.",
          "steps": [
            "Apply Archimedes' Principle to Object A: F_b = ρ_water·V_A·g = (1000)(0.0080)(9.8) = 78.4 N.",
            "Apply the same to Object B: since both objects have the IDENTICAL volume (0.0080 m³), F_b = (1000)(0.0080)(9.8) = 78.4 N as well — the exact same buoyant force as Object A."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the tension needed for each object, or determine if none is needed.",
          "steps": [
            "For Object A: weight = mg = (6.0)(9.8) = 58.8 N. Since buoyant force (78.4 N) exceeds weight (58.8 N), the object would float upward on its own — a string is needed to hold it DOWN, with tension T_A = F_b − weight = 78.4 − 58.8 = 19.6 N (string pulling downward).",
            "For Object B: weight = mg = (12)(9.8) = 117.6 N. Since weight (117.6 N) exceeds buoyant force (78.4 N), the object would sink on its own. Taking the problem's setup as a string suspending it at a fixed depth (not resting on the tank floor), the string must pull UP to hold it there, with tension = 117.6 − 78.4 = 39.2 N.",
            "Recognize this distinction: Object A needs to be held DOWN (tension pulling down, 19.6 N, since it's more buoyant than heavy); Object B needs to be held UP (tension pulling up, 39.2 N, since it's heavier than buoyant) — the string's role flips direction depending on which force wins."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall Archimedes' Principle: buoyant force depends ONLY on the volume of fluid displaced (and the fluid's density) — not on the submerged object's own mass or density at all.",
            "Point to the direct calculation in part (a): despite Object B having exactly twice the mass of Object A, both objects experience the IDENTICAL buoyant force of 78.4 N, since they share the same volume.",
            "Conclude the student's claim is INCORRECT: buoyant force is completely independent of the object's mass — it's Object A and B's very different WEIGHTS (from their different masses) that lead to their very different behaviors (one needs to be held down, one would sink), not any difference in the buoyant force itself, which is identical for both."
          ]
        }
      ]
    }
  ]
};

export { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT };
